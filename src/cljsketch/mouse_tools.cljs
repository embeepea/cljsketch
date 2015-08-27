(ns cljsketch.mouse-tools
  (:require [cljsketch.util :as u]))

(defprotocol MouseTool
  (handle-event [this event state] "Handle a mouse event")
)

(defrecord SelectTool [app-state redraw-canvas highlight!]
  MouseTool
  (handle-event [this event state]
    (letfn [(geom-under-mouse
              [] (some (fn [g] (if (u/is-within-threshold? (:coords event) @g 5) g nil))
                       (@app-state :geoms)))]
      (condp = (:type event)
        :move  (let [geom (geom-under-mouse)]
                 (highlight! geom)
                 (redraw-canvas)
                 state)
        :down  (let [geom (geom-under-mouse)]
                 (when geom (swap! geom u/toggle-selected))
                 (redraw-canvas)
                 state)
        state
        ))))

(defrecord DrawPointTool [app-state redraw-canvas add-point]
  MouseTool
  (handle-event [this event state]
    (condp = (:type event)
      :down    (do (add-point (:coords event))
                   (redraw-canvas)
                   state)
      nil
      )))
