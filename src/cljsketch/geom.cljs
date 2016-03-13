(ns cljsketch.geom
    (:require [cljsketch.vector :as v]
              [cljsketch.canvas-graphics :as gr]))

;; IGeom protocol -- low level geometric primitives
;;
;; Provides a basic mechanism for representing and drawing
;; geometric objects in the plane.  At this level, objects do not depend
;; on other objects --- each object just has numeric coordinates that define
;; it, and a 'render' method for drawing it in a canvas, and a 'point-distance2'
;; method for computing the distance (squared) between it and a given point.

(defprotocol IGeom
  (render [this ctx highlighted? style] "render this geom in the given graphics context")
  (point-distance2 [this [x y]] "return the square of the distance from this object to point [x y]")
)

;; the null object -- used to represent nonexistent points (e.g. intersection
;; of two lines that don't intersect)
(defrecord Null []
  IGeom
  (render [this ctx highlighted? style]) ;; empty render function
  (point-distance2 [this [x y]] 1e25))   ;; "infinite" distance from everything

(def style-defaults
  {:point-fill-radius                3
   :point-highlight-circle-radius    5
   :point-highlight-circle-thickness 1
   :line-thickness                   1
   :line-highlight-thickness         3
   })

(defrecord Point [p]
  IGeom
  (render [this ctx highlighted? style]
          (let [[x y] p
                this-style (into style-defaults style)]
            (gr/set-color ctx (this-style :color))
            (gr/draw-point ctx x y (this-style :point-fill-radius))
            (if highlighted? (gr/draw-circle ctx x y
                                             (this-style :point-highlight-circle-radius)
                                             (this-style :point-highlight-circle-thickness)))))
  (point-distance2 [this [x y]] (v/vl2norm2 (v/vsub p [x y]))))

(defrecord Line [u] ;; u is a ProjectiveVector
  IGeom
  (render [this ctx highlighted? style]
    (let [endpoints (v/line-rectangle-intersection
                     u (v/Rectangle. 0 0
                                     (-> ctx .-canvas .-width)
                                     (-> ctx .-canvas .-height)))
          this-style (into style-defaults style)]
      (if (= 2 (count endpoints))
        (let [[e0 e1] endpoints
              [e0x e0y] (:u e0)
              [e1x e1y] (:u e1)]
          (gr/set-color ctx (style :color))
          (gr/draw-line ctx e0x e0y e1x e1y (if highlighted?
                                              (this-style :line-highlight-thickness)
                                              (this-style :line-thickness)))))))
  (point-distance2 [this [x y]]
    (v/point-line-distance-squared (v/AffineVector. [x y]) u)))

(defrecord Segment [x0 y0 x1 y1]
  IGeom
  (render [this ctx highlighted? style]
          (let [this-style (into style-defaults style)]
            (gr/set-color ctx (style :color))
            (gr/draw-line ctx x0 y0 x1 y1  (if highlighted?
                                              (this-style :line-highlight-thickness)
                                              (this-style :line-thickness)))))
  (point-distance2 [this [x y]] (v/point-segment-distance2
                                 (v/toProjectiveVector. (v/AffineVector. [x y]))
                                 (v/toProjectiveVector. (v/AffineVector. [x0 y0]))
                                 (v/toProjectiveVector. (v/AffineVector. [x1 y1])))))

(defrecord Circle [x0 y0 r]
  IGeom
  (render [this ctx highlighted? style]
          (let [this-style (into style-defaults style)]
            (gr/set-color ctx (style :color))
            (gr/draw-circle ctx x0 y0 r  (if highlighted?
                                              (this-style :line-highlight-thickness)
                                              (this-style :line-thickness)))))
  (point-distance2 [this [x y]]
                   (v/square (- (v/l2dist (v/AffineVector. [x y]) (v/AffineVector. [x0 y0])) r))))
