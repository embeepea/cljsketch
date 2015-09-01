(ns  cljsketch.construction-tools
    (:require [cljsketch.geom :as g]
              [cljsketch.refgeom :as rg]))

;; return a sequence of the types of the objects in a collection
;; geoms should be a collection of atoms wrapping objects
(defn types [geoms] (map #(rg/geom-type @%) geoms))

;; return the first object in a collection which is of the given type
;; geoms should be a collection of atoms wrapping objects
(defn first-object-of-type [typ geoms]
  (some #(if (= (rg/geom-type @%) typ) % nil) geoms))

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
         (= (set (types selected)) #{g/Point g/Line})))
  (construct [this selected]
    (let [pt (first-object-of-type g/Point selected)
          ln (first-object-of-type g/Line selected)]
      (rg/PointParallelLine. pt ln))))

(defrecord PerpendicularLineConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{g/Point g/Line})))
  (construct [this selected]
    (let [pt (first-object-of-type g/Point selected)
          ln (first-object-of-type g/Line selected)]
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
