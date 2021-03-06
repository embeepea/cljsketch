(ns cljsketch.refgeom
    (:require [cljsketch.vector :as v]
              [cljsketch.geom :as g]))

;; IRefGeom protocol -- geometric objects with referential dependencies
;;
;; Provides a mechanism for representing geometric objects that are
;; defined in terms of (i.e. "refer to", or depend on) other geometric
;; objects.
;;
;; Each IRefGeom record implements a rule for constructing a geometric
;; object from other geometric objects.  Each IRefGeom record is
;; associated with a specific kind of IGeom, and it can be converted
;; at any point to an instance of that IGeom record by calling its
;; 'geom' method; this IGeom instance gives the "current" position of
;; the IRefGeom object, taking into account the current position of
;; all its dependents.
;;
;; Each IRefGeom record has fields which store that object's
;; dependencies; each dependency field is an atom whose value is an
;; instance of an IRefGeom record.  For example, the PointPointSegment
;; record has two fields, pt0 and pt1, storing atoms whose values are
;; Point records giving the endpoints of a line segment.

(defprotocol IRefGeom

  (geom-type [this] "return the underlying IGeom type for this IRefGeom")
  ;; return value is the record type from the cljsketch.geom namespace

  (geom [this geommap] "return an IGeom record instance for this refgeom")
  ;; geommap is a map associating IRefGeoms to IGeoms, used to translate this
  ;; object's dependencies into IGeoms.  See comment below.

  (deps [this] "return a sequence of atoms referring to the objects
    (Geoms or RefGeoms) that this RefGeom depends on")
  
  (serialize [this atommap] "return a serial representation of this IRefGeom; atommap
    should be a map whose keys are IRefGeom atoms, and whose values are integer indices corresponding
    to them")
  ;; returns a vector of the form [KEYWORD VALUE [...]] where KEYWORD indicates the
  ;; IRefGeom type, and the VALUEs refer to the dependencies.
)

;; Note that the IRefGeom's 'geom' method needs to have the IGeom corresponding
;; to the object's dependencies in order to compute the current object's IGeom.
;; This means that conceptually the 'geom' method should work recursively, acting
;; on each of an object's dependencies before acting on the object itself.  Since
;; this conversion operation needs to happen many times, however, in the course of
;; drawing the screen, detecting mouse hits, etc, the 'geom' method is implemented
;; with the following optimization: it takes an argument 'geommap' which is a map
;; that gives the IGeom values for any dependencies.  So rather than calling itself
;; recursively to get the IGeom values for dependents, the 'geom' method simply
;; looks up the dependencys' IGeom values in this map.  This obviously depends on
;; this map having been correctly populated for all of an object's dependent objects
;; before that object's 'geom' method can be called, but this is possible because
;; the dependency graph cannot contain cycles.  The 'geommap' function defined towards
;; the end of this file does this.

;; unserialize converts a serialized representation of an IRefGeom into an actual
;; IRefGeom instance.  It's implemented as a multimethod rather than a IRefGeom
;; protocol method because it *produces* IRefGeom instances, rather than operating
;; on them.
(defmulti unserialize (fn [& args] (first (first args))))

;; Point is the only IRefGeom that has no IRefGeom dependencies.  Its one field 'p' is
;; a vector [x y] giving the coordinates of a point.
(defrecord Point [p] 
  IRefGeom
  (deps [this] ())
  (geom-type [this] g/Point)
  (geom [this geommap] (g/Point. p))
  (serialize [this atommap]
        (let [[x y] p] [:point x  y]))
  )
(defmethod unserialize :point [[type x y] atoms] (Point. [x y]))

;; segment connecting two points
(defrecord PointPointSegment [pt0 pt1] 
  IRefGeom
  (deps [this] [pt0 pt1])
  (geom-type [this] g/Segment)
  (geom [this geommap]
    (let [gpt0 (:p (geommap pt0))
          gpt1 (:p (geommap pt1))]
      (g/Segment. (gpt0 0) (gpt0 1) (gpt1 0) (gpt1 1))))
  (serialize [this atommap] [:segment (atommap pt0) (atommap pt1)])
  )
(defmethod unserialize :segment [[type pt0 pt1] atoms] (PointPointSegment. (atoms pt0) (atoms pt1)))

;; line through 2 points
(defrecord PointPointLine [pt0 pt1]
  IRefGeom
  (deps [this] [pt0 pt1])
  (geom-type [this] g/Line)
  (geom [this geommap]
    (let [p0 (v/toProjectiveVector (v/AffineVector. (:p (geommap pt0))))
          p1 (v/toProjectiveVector (v/AffineVector. (:p (geommap pt1))))]
      (g/Line. (v/point-point-line p0 p1))))
  (serialize [this atommap] [:point-point-line (atommap pt0) (atommap pt1)])
  )
(defmethod unserialize :point-point-line [[type pt0 pt1] atoms] (PointPointLine. (atoms pt0) (atoms pt1)))

;; take a refgeom `rg` that is either a refgeom/Line or refgeom/Segment, and
;; return a ProjectiveVector representing the line containing it
(defn lineal-projective-vector [geommap ln-sg]
  (condp = (geom-type @ln-sg)
    g/Line     (:u (geommap ln-sg))
    g/Segment  (let [sg (geommap ln-sg)
                     p0 (v/toProjectiveVector (v/AffineVector. [(:x0 sg) (:y0 sg)]))
                     p1 (v/toProjectiveVector (v/AffineVector. [(:x1 sg) (:y1 sg)]))]
                 (v/point-point-line p0 p1))))

;; line through a point perpendicular to another line or segment
(defrecord PointPerpendicularLine [pt ln-sg] 
  IRefGeom
  (deps [this] [pt ln-sg])
  (geom-type [this] g/Line)
  (geom [this geommap]
    (let [ptv  (v/toProjectiveVector (v/AffineVector. (:p (geommap pt))))
          lnv  (lineal-projective-vector geommap ln-sg)]
      (g/Line. (v/point-line-perpendicular ptv lnv))))
  (serialize [this atommap] [:point-perpendicular-line (atommap pt) (atommap ln-sg)])
  )
(defmethod unserialize :point-perpendicular-line [[type pt ln-sg] atoms] (PointPerpendicularLine. (atoms pt) (atoms ln-sg)))

;; line through a point parallel to another line or segment
(defrecord PointParallelLine [pt ln-sg] 
  IRefGeom
  (deps [this] [pt ln-sg])
  (geom-type [this] g/Line)
  (geom [this geommap]
    (let [ptv  (v/toProjectiveVector (v/AffineVector. (:p (geommap pt))))
          lnv  (lineal-projective-vector geommap ln-sg)]
      (g/Line. (v/point-line-parallel ptv lnv))))
  (serialize [this atommap] [:point-parallel-line (atommap pt) (atommap ln-sg)])
  )
(defmethod unserialize :point-parallel-line [[type pt ln-sg] atoms] (PointParallelLine. (atoms pt) (atoms ln-sg)))

;; intersection point of two lines
(defrecord LineLinePoint [ln0 ln1]
  IRefGeom
  (deps [this] [ln0 ln1])
  (geom-type [this] g/Point)
  (geom [this geommap]
    (let [lnv0  (:u (geommap ln0))
          lnv1  (:u (geommap ln1))
          c     (v/line-line-intersection lnv0 lnv1)]
      (if (= (last c.u) 0) (g/Null.) (g/Point. (:u (v/toAffineVector c))))))
  (serialize [this atommap] [:line-line-point (atommap ln0) (atommap ln1)])
  )
(defmethod unserialize :line-line-point [[type ln0 ln1] atoms] (LineLinePoint. (atoms ln0) (atoms ln1)))

;; midpoint of a segment
(defrecord SegmentMidPoint [sg]
  IRefGeom
  (deps [this] [sg])
  (geom-type [this] g/Point)
  (geom [this geommap]
    (let [s   (geommap sg)
          x0  (:x0 s)
          y0  (:y0 s)
          x1  (:x1 s)
          y1  (:y1 s)]
      (g/Point. (v/vmul (v/vadd [x0 y0] [x1 y1]) 0.5))))
  (serialize [this atommap] [:segment-midpoint (atommap sg)]))
(defmethod unserialize :segment-midpoint [[type sg] atoms] (SegmentMidPoint. (atoms sg)))

;; circle centered at point 'c' passing through point 'p'
(defrecord CenterPointCircle [c p]
  IRefGeom
  (deps [this] [c p])
  (geom-type [this] g/Circle)
  (geom [this geommap]
    (let [[cx cy] (:p (geommap c))
          [px py] (:p (geommap p))]
      (g/Circle. cx cy (v/vl2dist [cx cy] [px py]))))
  (serialize [this atommap] [:center-point-circle (atommap c)  (atommap p)]))
(defmethod unserialize :center-point-circle [[type c p] atoms] (CenterPointCircle. (atoms c) (atoms p)))

;; Take a list of atoms refering to RefGeoms,
;; and return a map which associates to each of those atoms
;; a Geom corresponding to it.  In the returned map, the keys
;; are atoms, and the values are IGeoms.
;;
;; NOTE: This implementation depends critically on the assumption
;;       that the atoms in the incoming list are sorted topologically,
;;       in the sense that all atoms must appear in the list after
;;       any atoms that they depend on.
;;
(defn geommap [atoms]
  (reduce
   (fn [gmap at] (assoc gmap at (geom @at gmap)))
   {}
   atoms))

;; return a sequence of nodes from a depth-first traversal of a graph
;; `g` is a function that maps a node to a seq of its neighbor nodes
;;     Note that in particular, g could be a map whose keys are nodes.
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

;; Return a seq of everything
;; that `at` depends on, either directly or indirectly.
;; `at` may be either a single atom, or a sequence of atoms.
(defn dependencies [at] (traverse-dfs #(deps @%) at))

;; Return a map that represents the "inverse" graph of the world,
;; i.e. a graph with edges going from each node to the nodes that
;; depend on it. The keys in the returned map will be atoms from
;; the world list; the value for each key is a list of the nodes
;; it depends on.
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

;; The opposite of `dependencies`: return a seq of the atoms of
;; all RefGeoms that depend on `at`, which may be either a single
;; atom, or a sequence of atoms. We have to pass in the world list
;; here since each refgeom only stores references to the refgeoms
;; it depends on, not the other way around.
(defn dependents [world at] (traverse-dfs (inverse world) at))
