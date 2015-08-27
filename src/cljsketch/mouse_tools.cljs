(ns cljsketch.mouse-tools
  (:require [cljsketch.util :as u]
            [cljsketch.vector :as v]))

(defprotocol MouseTool
  (handle-event [this event state] "Handle a mouse event")
)

(defrecord SelectMoveTool [app-state redraw-canvas highlight! toggle-selected! selection]
  MouseTool
  (handle-event [this event state]
    (if (= state nil) (recur this event {:button-state :down})
        (letfn [(geom-under-mouse
                  [] (some (fn [g] (if (u/is-within-threshold?
                                        (:coords event) @g 5) g nil))
                           (@app-state :geoms)))]
          (condp contains? (:type event)
            #{:move}  (condp = (:button-state state)
                        :up    (let [geom (geom-under-mouse)]
                                 (highlight! geom)
                                 (redraw-canvas)
                                 state)
                        :down  (let [offset (v/sub (:coords event) (:drag-base state))]
                                 (doseq [g @selection]
                                   (if (contains? @g :coords)
                                     (swap! g assoc :coords (v/add (:drag-base @g) offset))))
                                 (redraw-canvas)
                                 (assoc state :dragged true)))
            #{:down}  (let [geom (geom-under-mouse)]
                        (highlight! geom)
                        (doseq [g @selection]
                          (if (contains? @g :coords)
                            (swap! g assoc :drag-base (:coords @g))))
                        (redraw-canvas)
                        {:drag-base (:coords event) :button-state :down :dragged false})
            #{:up
              :enter
              :leave}   (let [geom (geom-under-mouse)]
                          (when (and geom (not (state :dragged))) (toggle-selected! geom))
                          (doseq [g @selection]
                            (if (contains? @g :drag-base)
                              (swap! g dissoc :drag-base)))
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
