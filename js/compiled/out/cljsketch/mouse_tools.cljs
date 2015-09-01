(ns cljsketch.mouse-tools
  (:require [cljsketch.vector :as v]
            [cljsketch.geom :as g]
            [cljsketch.refgeom :as rg]))

(defprotocol MouseTool
  (handle-event [this event state] "Handle a mouse event")
)

(defn gtless [t1 t2]
  (#{[g/Point g/Line]
     [g/Point g/Segment]
     [g/Segment g/Line]} [t1 t2]))

(defn geom-in-threshold [geoms mouse-pos t]
  (let [geommap (rg/geommap geoms)]
    (loop [g  nil
           gs geoms]
      (if (empty? gs) g
          (let [ng (first gs)]
            (recur
             (if (<= (g/point-distance2 (geommap ng) mouse-pos) t) (if (or (not g) (gtless (rg/geom-type @ng) (rg/geom-type @g))) ng g) g)
             (rest gs)))))))

(defrecord SelectMoveTool [app-state redraw-canvas highlight! highlight
                           selected? select! unselect! toggle-selected! clear-selection! selection]
  MouseTool
  (handle-event [this event state]
    (if (= state nil) (recur this event {:button-state :down})
        (letfn [(geom-under-mouse
                  [] (geom-in-threshold (@app-state :world) (:coords event) 16))

                (drag-geom!
                  [geom offset] (if (instance? rg/Point @geom)
                                  (reset! geom (rg/Point. (v/vadd ((:geom-drag-base state) geom) offset)))))

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
                                   (select! @highlight)
                                   (recur this event
                                          (assoc state
                                                 :highlight-selected true
                                                 :geom-drag-base (if (instance? rg/Point @@highlight)
                                                                   (assoc (:geom-drag-base state) @highlight (:p @@highlight))
                                                                   (:geom-drag-base state)))))
                                 (let [offset (v/vsub (:coords event) (:drag-base state))]
                                   (each @selection #(drag-geom! % offset))
                                   (redraw-canvas)
                                   (assoc state :dragged true))))
            #{:down}  (let [geom (geom-under-mouse)]
                        (highlight! geom)
                        (if (not geom) (clear-selection!))
                        (redraw-canvas)
                        {:drag-base (:coords event)
                         :button-state :down
                         :dragged false
                         :geom-drag-base  (reduce
                                           (fn [geom-drag-base geom]
                                             (if (instance? rg/Point @geom)
                                               (assoc geom-drag-base geom (:p @geom))
                                               geom-drag-base))
                                           {}
                                           @selection)})



            #{:up
              :enter
              :leave}   (do
                          (if (:highlight-selected state)
                            (unselect! @highlight)
                            (when (and @highlight (not (state :dragged)))
                              (toggle-selected! @highlight)
                              (when (not (selected? @highlight)) (highlight! nil))
                              (redraw-canvas)))
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
