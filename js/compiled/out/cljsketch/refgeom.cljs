(ns cljsketch.refgeom
    (:require [cljsketch.vector :as v]
              [cljsketch.geom :as g]))

(defprotocol IRefGeom
  ;; geommap is a map associating refgeoms to geoms; use it to get the
  ;; geoms for this refgeom's dependencies
  (toGeom [this geommap] "return a geom for this refgeom")
  (deps [this] "return a sequence of atoms referring to the objects
    (Geoms or RefGeoms) that this RefGeom depends on")
)

;; segment connecting two points
(defrecord PointPointSegment [pt0 pt1] 
  IRefGeom
  (deps [this] '(pt0 pt1))
  (toGeom [this geommap]
    (let [gpt0 (:p (geommap pt0))
          gpt1 (:p (geommap pt1))]
      (g/Segment. (gpt0 0) (gpt0 1) (gpt1 0) (gpt1 1)))))

;; line through 2 points
(defrecord PointPointLine [pt0 pt1]
  IRefGeom
  (deps [this] '(pt0 pt1))
  (toGeom [this geommap]
    (let [p0 (v/toProjectiveVector (v/AffineVector. (:p (geommap pt0))))
          p1 (v/toProjectiveVector (v/AffineVector. (:p (geommap pt1))))]
      (g/Line. (v/point-point-line p0 p1)))))


;; line through a point perp to another line
(defrecord PointPerpendicularLine [pt ln] 
  IRefGeom
  (deps [this] '(pt ln))
  (toGeom [this geommap]
    (let [ptv  (v/toProjectiveVector (v/AffineVector. (:p (geommap pt))))
          lnv  (:u (geommap ln))]
      (g/Line. (v/point-line-perpendicular ptv lnv)))))

;; line through a point parallel to another line
(defrecord PointParallelLine [pt ln] 
  IRefGeom
  (deps [this] '(pt ln))
  (toGeom [this geommap]
    (let [ptv  (v/toProjectiveVector (v/AffineVector. (:p (geommap pt))))
          lnv  (:u (geommap ln))]
      (g/Line. (v/point-line-parallel ptv lnv)))))

;; Take a list of atoms refering to either Geoms or RefGeoms,
;; and return a map which associates to each of those atoms
;; a Geom corresponding to it.  In the returned map, the keys
;; are atoms, and the values are Geoms.
;;
;; NOTE: This implementation depends critically on the assumption
;;       that the atoms in the incoming list are sorted topologically,
;;       in the sense that all atoms must appear in the list after
;;       any atoms that they depend on.
;;
(defn geommap [atoms]
  (reduce
   (fn [gmap at] (assoc gmap at (if (satisfies? g/IGeom @at) @at (toGeom @at gmap))))
   {}
   atoms))
