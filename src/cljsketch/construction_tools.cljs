(ns  cljsketch.construction-tools
    (:require [cljsketch.geom :as g]))

(defn typ [g] (if (= (type @g) cljs.core/PersistentArrayMap) (:type @g) (type @g)))

;; return a sequence of the types of the objects in a collection
;; geoms should be a collection of atoms wrapping objects
(defn types [geoms] (map typ geoms))

;; return the first object in a collection which is of the given type
;; geoms should be a collection of atoms wrapping objects
(defn first-object-of-type [type geoms]
  (some #(if (= (typ %) type) % nil) geoms))

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
    {:type :segment :endpoints [(first selected) (second selected)]}))

(defrecord LineConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{g/Point})))
  (construct [this selected]
    {:type :line :points [(first selected) (second selected)]}))

(defrecord ParallelLineConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{g/Point :line})))
  (construct [this selected]
    (let [pt (first-object-of-type g/Point selected)
          ln (first-object-of-type :line selected)]
      {:type :line :point pt :parallel-line ln})))

(defrecord PerpendicularLineConstructionTool []
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{g/Point :line})))
  (construct [this selected]
    (let [pt (first-object-of-type g/Point selected)
          ln (first-object-of-type :line selected)]
      {:type :line :point pt :perpendicular-line ln})))
