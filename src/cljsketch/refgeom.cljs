(ns cljsketch.refgeom
    (:require [cljsketch.vector :as v]
              [cljsketch.geom :as g]))

(defprotocol IRefGeom
  ;; geomap is a map associating refgeoms to geoms; use it to get the
  ;; geoms for this refgeom's dependencies
  (toGeom [this geommap] "return a geom for this refgeom")
  (deps [this] "return a sequence of atoms referring to the objects
    (Geoms or RefGeoms) that this RefGeom depends on")
)

;; segment connecting two points
(defrecord PointPointSegment [pt0 pt1] 
  IRefGeom
  (toGeom [this geomap]) ;; returns a g/Segment
  (deps [this] '(pt0 pt1))
)

;; line through 2 points
(defrecord PointPointLine [pt0 pt1]
  IRefGeom
  (toGeom [this geomap]) ;; returns a g/Line
  (deps [this] '(pt0 pt1))
)

;; line through a point perp to another line
(defrecord PointPerpendicularLine [pt ln] 
  IRefGeom
  (toGeom [this geomap]) ;; returns a g/Line
  (deps [this] '(pt ln))
)

;; line through a point parallel to another line
(defrecord PointParallelLine [pt ln] 
  IRefGeom
  (toGeom [this geomap]) ;; returns a g/Line
  (deps [this] '(pt ln))
)
