(ns cljsketch.geom
    (:require [cljsketch.vector :as v]))

(defprotocol IGeom
  (render [this ctx] "render this geom in the given graphics context")
)

(defrecord Point [x y]
  IGeom
  (render [this ctx] #_... )
)

(defrecord Line [u] ;; u is a ProjectiveVector
  IGeom
  (render [this ctx] #_... )
)

(defrecord Segment [x0 y0 x1 y1]
  IGeom
  (render [this ctx] #_... )
)
