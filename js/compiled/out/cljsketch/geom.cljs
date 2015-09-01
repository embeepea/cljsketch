(ns cljsketch.geom
    (:require [cljsketch.vector :as v]
              [cljsketch.canvas-graphics :as gr]))

(defprotocol IGeom
  (render [this ctx highlighted?] "render this geom in the given graphics context")
  (point-distance2 [this [x y]] "return the square of the distance from this object to point [x y]")
)

(defrecord Null []
  IGeom
  (render [this ctx highlighted?])
  (point-distance2 [this [x y]] 1e25))

(defrecord Point [p]
  IGeom
  (render [this ctx highlighted?]
    (let [[x y] p]
      (gr/draw-point ctx x y 3)
      (if highlighted? (gr/draw-circle ctx x y 5 1))))
  (point-distance2 [this [x y]] (v/vl2norm2 (v/vsub p [x y]))))

(defrecord Line [u] ;; u is a ProjectiveVector
  IGeom
  (render [this ctx highlighted?]
    (let [endpoints (v/line-rectangle-intersection
                     u (v/Rectangle. 0 0
                                     (-> ctx .-canvas .-width)
                                     (-> ctx .-canvas .-height)))]
      (if (= 2 (count endpoints))
        (let [[e0 e1] endpoints
              [e0x e0y] (:u e0)
              [e1x e1y] (:u e1)]
          (gr/draw-line ctx e0x e0y e1x e1y (if highlighted? 3 1))))))
  (point-distance2 [this [x y]]
    (v/point-line-distance-squared (v/AffineVector. [x y]) u)))

(defrecord Segment [x0 y0 x1 y1]
  IGeom
  (render [this ctx highlighted?]
    (gr/draw-line ctx x0 y0 x1 y1 (if highlighted? 3 1)))
  (point-distance2 [this [x y]] (v/point-segment-distance2
                                 (v/toProjectiveVector. (v/AffineVector. [x y]))
                                 (v/toProjectiveVector. (v/AffineVector. [x0 y0]))
                                 (v/toProjectiveVector. (v/AffineVector. [x1 y1])))))
