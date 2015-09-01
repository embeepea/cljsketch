(ns  cljsketch.construction-tools
    (:require [cljsketch.geom :as g]
              [cljsketch.refgeom :as rg]))

;; return a sequence of the types of the objects in a collection
;; geoms should be a collection of atoms wrapping objects
(defn types [geoms] (map #(rg/geom-type @%) geoms))

;; return the first object in a collection which is of the given type
;; geoms should be a collection of atoms wrapping objects
;; typ can be either a single IGeom type, or a seq of them
;;   (if it's a seq, returns the first atom matching any of them)
(defn first-object-of-type [typ atoms]
  (if (not (sequential? typ)) (recur [typ] atoms)
      (some
       #(if
            ((set typ) (rg/geom-type @%))
          % nil)
       atoms)))

(defprotocol IConstructionTool
  ;; NOTE: `selected` should be a collection of atoms wrapping objects;
  ;; it is NOT the selection atom itself!
  (selection-fits [this selected]
    "true iff the objects in a collection fit the needs of this tool")
  (construct [this selected]
    "executes this tool on the current selection, returning the newly
     constructed object")
)

(defrecord SegmentConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{g/Point})))
  (construct [this selected]
    (rg/PointPointSegment. (first selected) (second selected))))

(defrecord LineConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{g/Point})))
  (construct [this selected]
    (rg/PointPointLine. (first selected) (second selected))))

(defrecord ParallelLineConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (contains? #{#{g/Point g/Line}
                      #{g/Point g/Segment}} (set (types selected)))))
  (construct [this selected]
    (let [pt (first-object-of-type g/Point selected)
          ln (first-object-of-type [g/Line g/Segment] selected)]
      (rg/PointParallelLine. pt ln))))

(defrecord PerpendicularLineConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (contains? #{#{g/Point g/Line}
                      #{g/Point g/Segment}} (set (types selected)))))
  (construct [this selected]
    (let [pt (first-object-of-type g/Point selected)
          ln (first-object-of-type [g/Line g/Segment] selected)]
      (rg/PointPerpendicularLine. pt ln))))

(defrecord LineIntersectionConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{g/Line})))
  (construct [this selected]
    (rg/LineLinePoint. (first selected) (second selected))))

(defrecord SegmentMidPointConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 1 (count selected))
         (= (set (types selected)) #{g/Segment})))
  (construct [this selected]
    (rg/SegmentMidPoint. (first selected))))

(defrecord CircleConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{g/Point})))
  (construct [this selected]
    (rg/CenterPointCircle. (first selected) (second selected))))
