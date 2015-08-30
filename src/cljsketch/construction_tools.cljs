(ns  cljsketch.construction-tools)

;; return a sequence of the types of the objects in a collection
;; geoms should be a collection of atoms wrapping objects
(defn types [geoms] (map #(:type @%) geoms))

;; return the first object in a collection which is of the given type
;; geoms should be a collection of atoms wrapping objects
(defn first-object-of-type [type geoms]
  (some #(if (= (:type @%) type) % nil) geoms))

(defprotocol IConstructionTool
  ;; NOTE: `selected` should be a collection of atoms wrapping objects;
  ;; it is NOT the selection atom itself!
  (selection-fits [this selected]
    "true iff the objects in a collection fit the needs of this tool")
  (construct [this selected]
    "executes this tool on the current selection")
)

(defrecord SegmentConstructionTool [add-geom]
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{:point})))
  (construct [this selected]
    (add-geom {:type :segment :endpoints [(first selected) (second selected)]}))
  )

(defrecord LineConstructionTool [add-geom]
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{:point})))
  (construct [this selected]
    (add-geom {:type :line
               :points [(first selected) (second selected)]}))
  )

(defrecord ParallelLineConstructionTool [add-geom]
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{:point :line})))
  (construct [this selected]
    (let [pt (first-object-of-type :point selected)
          ln (first-object-of-type :line selected)]
      (add-geom {:type :line :point pt :parallel-line ln})))
  )

(defrecord PerpendicularLineConstructionTool [add-geom]
  IConstructionTool
  (selection-fits [this selected]
    (and (= 2 (count selected))
         (= (set (types selected)) #{:point :line})))
  (construct [this selected]
    (let [pt (first-object-of-type :point selected)
          ln (first-object-of-type :line selected)]
      (add-geom {:type :line :point pt :perpendicular-line ln})))
  )
