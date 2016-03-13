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

(defrecord Point [p]
  IGeom
  (render [this ctx highlighted? style]
    (let [[x y] p]
      (gr/set-color ctx (style :color))
      (gr/draw-point ctx x y 3)
      (if highlighted? (gr/draw-circle ctx x y 5 1))))
  (point-distance2 [this [x y]] (v/vl2norm2 (v/vsub p [x y]))))

(defrecord Line [u] ;; u is a ProjectiveVector
  IGeom
  (render [this ctx highlighted? style]
    (let [endpoints (v/line-rectangle-intersection
                     u (v/Rectangle. 0 0
                                     (-> ctx .-canvas .-width)
                                     (-> ctx .-canvas .-height)))]
      (if (= 2 (count endpoints))
        (let [[e0 e1] endpoints
              [e0x e0y] (:u e0)
              [e1x e1y] (:u e1)]
          (gr/set-color ctx (style :color))
          (gr/draw-line ctx e0x e0y e1x e1y (if highlighted? 3 1))))))
  (point-distance2 [this [x y]]
    (v/point-line-distance-squared (v/AffineVector. [x y]) u)))

(defrecord Segment [x0 y0 x1 y1]
  IGeom
  (render [this ctx highlighted? style]
    (gr/set-color ctx (style :color))
    (gr/draw-line ctx x0 y0 x1 y1 (if highlighted? 3 1)))
  (point-distance2 [this [x y]] (v/point-segment-distance2
                                 (v/toProjectiveVector. (v/AffineVector. [x y]))
                                 (v/toProjectiveVector. (v/AffineVector. [x0 y0]))
                                 (v/toProjectiveVector. (v/AffineVector. [x1 y1])))))

(defrecord Circle [x0 y0 r]
  IGeom
  (render [this ctx highlighted? style]
    (gr/set-color ctx (style :color))
    (gr/draw-circle ctx x0 y0 r (if highlighted? 3 1)))
  (point-distance2 [this [x y]]
    (v/square (- (v/l2dist (v/AffineVector. [x y]) (v/AffineVector. [x0 y0])) r))))
