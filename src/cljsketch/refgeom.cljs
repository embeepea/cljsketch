(ns cljsketch.refgeom
    (:require [cljsketch.vector :as v]
              [cljsketch.geom :as g]))

(defprotocol IRefGeom
  ;; geommap is a map associating refgeoms to geoms; use it to get the
  ;; geoms for this refgeom's dependencies
  (toGeom [this geommap] "return a geom for this refgeom")
  (deps [this] "return a sequence of atoms referring to the objects
    (Geoms or RefGeoms) that this RefGeom depends on")
  (geom-type [this] "")
)

;; a point
(defrecord Point [p] 
  IRefGeom
  (deps [this] ())
  (geom-type [this] g/Point)
  (toGeom [this geommap] (g/Point. p)))

;; segment connecting two points
(defrecord PointPointSegment [pt0 pt1] 
  IRefGeom
  (deps [this] [pt0 pt1])
  (geom-type [this] g/Segment)
  (toGeom [this geommap]
    (let [gpt0 (:p (geommap pt0))
          gpt1 (:p (geommap pt1))]
      (g/Segment. (gpt0 0) (gpt0 1) (gpt1 0) (gpt1 1)))))

;; line through 2 points
(defrecord PointPointLine [pt0 pt1]
  IRefGeom
  (deps [this] [pt0 pt1])
  (geom-type [this] g/Line)
  (toGeom [this geommap]
    (let [p0 (v/toProjectiveVector (v/AffineVector. (:p (geommap pt0))))
          p1 (v/toProjectiveVector (v/AffineVector. (:p (geommap pt1))))]
      (g/Line. (v/point-point-line p0 p1)))))


;; line through a point perp to another line
(defrecord PointPerpendicularLine [pt ln] 
  IRefGeom
  (deps [this] [pt ln])
  (geom-type [this] g/Line)
  (toGeom [this geommap]
    (let [ptv  (v/toProjectiveVector (v/AffineVector. (:p (geommap pt))))
          lnv  (:u (geommap ln))]
      (g/Line. (v/point-line-perpendicular ptv lnv)))))

;; line through a point parallel to another line
(defrecord PointParallelLine [pt ln] 
  IRefGeom
  (deps [this] [pt ln])
  (geom-type [this] g/Line)
  (toGeom [this geommap]
    (let [ptv  (v/toProjectiveVector (v/AffineVector. (:p (geommap pt))))
          lnv  (:u (geommap ln))]
      (g/Line. (v/point-line-parallel ptv lnv)))))

;; intersection point of two lines
(defrecord LineLinePoint [ln0 ln1]
  IRefGeom
  (deps [this] [ln0 ln1])
  (geom-type [this] g/Point)
  (toGeom [this geommap]
    (let [lnv0  (:u (geommap ln0))
          lnv1  (:u (geommap ln1))
          c     (v/line-line-intersection lnv0 lnv1)]
      (if (= (last c.u) 0) (g/Null.) (g/Point. (:u (v/toAffineVector c)))))))

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
   (fn [gmap at] (assoc gmap at (toGeom @at gmap)))
   {}
   atoms))

;; return a map that represents the "inverse" graph
(defn inverse [world]
  (reduce
   ;; Note: A 'dependent' depends on its 'dependees'
   (fn [gmap dependent] (reduce
                      (fn [gmap dependee]
                        (assoc gmap dependee (conj (gmap dependee) dependent)))
                      (assoc gmap dependent [])
                      (deps @dependent)))
   {}
   world))

;; return a sequence of nodes from a depth-first traversal of a graph
;; `g` is a map storing the graph
;; its keys are the graph nodes (they can be any data type)
;; its value for each key (node) is the list of neighbors of that node
;; `s` is the start node, or a sequence of start nodes
;; returns a sequence of all nodes reachable from s
(defn traverse-dfs [g s]
  (if (not (sequential? s)) (recur g [s])
      (loop [vertices [] explored (set s) frontier s]
        (if (empty? frontier) vertices
            (let [v (peek frontier)
                  neighbors (g v)]
              (recur
               (conj vertices v)
               (into explored neighbors)
               (into (pop frontier) (remove explored neighbors))))))))

;; return a seq of the atoms of all RefGeoms that depend on `at`
;; `at` may be either a single atom, or a sequence of atoms
(defn dependents [world at] (traverse-dfs (inverse world) at))
