(ns cljsketch.mouse-tools
  (:require [cljsketch.util :as u]))

(defprotocol MouseTool
  (handle-event [e] "Handle a mouse event")
)

(defrecord SelectTool [app-state redraw-canvas]
  MouseTool
  (handle-event [event]
    (condp = (:type event)
      :move  (do
               (doseq [geom (@app-state :geoms)]
                 (if (u/is-within-threshold? (:coords event) @geom 5)
                   (swap! geom u/highlighted)
                   (swap! geom u/unhighlighted)))
                 (redraw-canvas))
      :down    (do
                 (doseq [geom (@app-state :geoms)]
                   (if (u/is-highlighted? @geom)
                       (swap! geom u/toggle-selected)
                     ))
                 (redraw-canvas))
      nil
      )))

(defrecord PointTool [app-state redraw-canvas add-point]
  MouseTool
  (handle-event [event]
    (condp = (:type event)
      :down    (do (add-point (:coords event))
                   (redraw-canvas))
      nil
      )))


; (defmulti mouse-handler :type)
; 
; 
; (defmethod mouse-handler :down [{:keys [coords]}]
;   (let [[x y] coords]
;     (condp = (@app-state :mode)
;       :draw-point  (do (add-point [x y])
;                        (redraw-canvas))
;       :select      (do
;                      (doseq [geom (@app-state :geoms)]
;                        (if (is-highlighted? @geom)
;                          (do
;                            (swap! geom toggle-selected)
;                            )
;                          ))
;                        (redraw-canvas))
;       )))
