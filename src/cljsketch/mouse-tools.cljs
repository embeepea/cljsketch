(ns cljsketch.mouse-tools
  (:require [cljsketch.util :as u]))

(defprotocol MouseTool
  (handle-event [this event state] "Handle a mouse event")
)

(defrecord SelectTool [app-state redraw-canvas]
  MouseTool
  (handle-event [this event state]
    (condp = (:type event)
      :move  (do
               (doseq [geom (@app-state :geoms)]
                 (if (u/is-within-threshold? (:coords event) @geom 5)
                   (swap! geom u/highlighted)
                   (swap! geom u/unhighlighted)))
                 (redraw-canvas)
                 state)
      :down    (do
                 (doseq [geom (@app-state :geoms)]
                   (if (u/is-highlighted? @geom)
                       (swap! geom u/toggle-selected)
                     ))
                 (redraw-canvas)
                 state)
      state
      )))

(defrecord DrawPointTool [app-state redraw-canvas add-point]
  MouseTool
  (handle-event [this event state]
    (condp = (:type event)
      :down    (do (add-point (:coords event))
                   (redraw-canvas)
                   state)
      nil
      )))
