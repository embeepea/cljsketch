(ns cljsketch.mouse-tools
  (:require [cljsketch.util :as u]
            [cljsketch.vector :as v]))

(defprotocol MouseTool
  (handle-event [this event state] "Handle a mouse event")
)

(defrecord SelectMoveTool [app-state redraw-canvas highlight! highlight
                           selected? select! toggle-selected! selection]
  MouseTool
  (handle-event [this event state]
    (if (= state nil) (recur this event {:button-state :down})
        (letfn [(geom-under-mouse
                  [] (some (fn [g] (if (u/is-within-threshold?
                                        (:coords event) @g 5) g nil))
                           (@app-state :geoms)))

                (set-geom-drag-base!
                  [geom] (if (contains? @geom :coords)
                           (swap! geom assoc :drag-base (:coords @geom))))

                (unset-geom-drag-base!
                  [geom] (if (contains? @geom :drag-base)
                              (swap! geom dissoc :drag-base)))

                (drag-geom!
                  [geom offset] (if (contains? @geom :coords)
                                  (swap! geom assoc :coords (v/add (:drag-base @geom) offset))))

                (each
                  [coll f] (doseq [x coll] (f x)))]

          (condp contains? (:type event)
            #{:move}  (condp = (:button-state state)
                        :up    (let [geom (geom-under-mouse)]
                                 (highlight! geom)
                                 (redraw-canvas)
                                 state)
                        :down  (let [offset (v/sub (:coords event) (:drag-base state))]
                                 (when (and @highlight
                                            (not (selected? @highlight)))
                                   (set-geom-drag-base! @highlight)
                                   (select! @highlight))
                                 (each @selection #(drag-geom! % offset))
                                 (redraw-canvas)
                                 (assoc state :dragged true)))
            #{:down}  (let [geom (geom-under-mouse)]
                        (highlight! geom)
                        (each @selection set-geom-drag-base!)
                        (redraw-canvas)
                        {:drag-base (:coords event) :button-state :down :dragged false})
            #{:up
              :enter
              :leave}   (let [geom (geom-under-mouse)]
                          (when (and geom (not (state :dragged)))
                            (toggle-selected! geom)
                            (when (not (selected? geom)) (highlight! nil))
                            (redraw-canvas))
                          (each @selection unset-geom-drag-base!)
                          {:button-state :up}))))))

(defrecord DrawPointTool [app-state redraw-canvas add-point]
  MouseTool
  (handle-event [this event state]
    (condp = (:type event)
      :down    (do (add-point (:coords event))
                   (redraw-canvas)
                   state)
      nil
      )))
