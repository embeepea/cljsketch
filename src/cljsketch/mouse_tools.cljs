(ns cljsketch.mouse-tools
  (:require [cljsketch.util :as u]
            [cljsketch.vector :as v]))

(defprotocol MouseTool
  (handle-event [this event state] "Handle a mouse event")
)

(defn gtless [t1 t2]
  (#{[:point :line]
     [:point :segment]
     [:segment :line]} [t1 t2]))

(defn geom-in-threshold [geoms mouse-pos t]
  (loop [g  nil
         gs geoms]
    (if (empty? gs) g
        (let [ng (first gs)]
          (recur
           (if (u/is-within-threshold? mouse-pos @ng t)
             (if (or (not g)
                     (gtless (:type @ng) (:type @g)))
               ng
               g)
             g)
           (rest gs))))))

(defrecord SelectMoveTool [app-state redraw-canvas highlight! highlight
                           selected? select! unselect! toggle-selected! selection]
  MouseTool
  (handle-event [this event state]
    (if (= state nil) (recur this event {:button-state :down})
        (letfn [(geom-under-mouse
                  [] (geom-in-threshold (@app-state :geoms) (:coords event) 16))
                  ;[] (some (fn [g] (if (u/is-within-threshold?
                  ;                      (:coords event) @g 5) g nil))
                  ;         (@app-state :geoms)))

                (set-geom-drag-base!
                  [geom] (if (contains? @geom :coords)
                           (swap! geom assoc :drag-base (:coords @geom))))

                (unset-geom-drag-base!
                  [geom] (if (contains? @geom :drag-base)
                              (swap! geom dissoc :drag-base)))

                (drag-geom!
                  [geom offset] (if (contains? @geom :coords)
                                  (swap! geom assoc :coords (v/vadd (:drag-base @geom) offset))))

                (each
                  [coll f] (doseq [x coll] (f x)))]

          (condp contains? (:type event)
            #{:move}  (condp = (:button-state state)
                        :up    (let [geom (geom-under-mouse)]
                                 (highlight! geom)
                                 (redraw-canvas)
                                 state)
                        :down  (if (and @highlight (not (selected? @highlight)))
                                 (do
                                   (set-geom-drag-base! @highlight)
                                   (select! @highlight)
                                   (recur this event (assoc state :highlight-selected true)))
                                 (let [offset (v/vsub (:coords event) (:drag-base state))]
                                   (each @selection #(drag-geom! % offset))
                                   (redraw-canvas)
                                   (assoc state :dragged true))))
            #{:down}  (let [geom (geom-under-mouse)]
                        (highlight! geom)
                        (each @selection set-geom-drag-base!)
                        (redraw-canvas)
                        {:drag-base (:coords event) :button-state :down :dragged false})
            #{:up
              :enter
              :leave}   (do
                          (if (:highlight-selected state)
                            (unselect! @highlight)
                            (when (and @highlight (not (state :dragged)))
                              (toggle-selected! @highlight)
                              (when (not (selected? @highlight)) (highlight! nil))
                              (redraw-canvas)))
                          (each (@app-state :geoms) unset-geom-drag-base!)
                          {:button-state :up}))))))

(defrecord DrawPointTool [app-state redraw-canvas add-point clear-selection! select!]
  MouseTool
  (handle-event [this event state]
    (condp = (:type event)
      :down    (let [ageom (add-point (:coords event))]
                 (clear-selection!)
                 (select! ageom)
                 (redraw-canvas)
                 state)
      nil
      )))
