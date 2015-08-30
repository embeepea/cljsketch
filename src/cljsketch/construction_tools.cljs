(ns  cljsketch.construction-tools)

;; return a sequence of the types of the objects in the selection
(defn types [geoms] (map #(:type @%) geoms))

;; return the first object in the selection which is of the given type
(defn first-object-of-type [type geoms]
  (some #(if (= (:type @%) type) % nil) geoms))

(defprotocol IConstructionTool
  (selection-fits [this selection]
    "true iff the current selection fits the needs of this tool")
  (construct [this selection]
    "executes this tool on the current selection")
)

(defrecord SegmentConstructionTool [add-geom]
  IConstructionTool
  (selection-fits [this selection]
    (and (= 2 (count selection))
         (= (set (types selection)) #{:point})))
  (construct [this selection]
    (add-geom {:type :segment :endpoints [(first selection) (second selection)]}))
  )

(defrecord LineConstructionTool [add-geom]
  IConstructionTool
  (selection-fits [this selection]
    (and (= 2 (count selection))
         (= (set (types selection)) #{:point})))
  (construct [this selection]
    (add-geom {:type :line
               :points [(first selection) (second selection)]}))
  )

(defrecord ParallelLineConstructionTool [add-geom]
  IConstructionTool
  (selection-fits [this selection]
    (and (= 2 (count selection))
         (= (set (types selection)) #{:point :line})))
  (construct [this selection]
    (let [pt (first-object-of-type :point selection)
          ln (first-object-of-type :line selection)]
      (add-geom {:type :line :point pt :parallel-line ln})))
  )

(defrecord PerpendicularLineConstructionTool [add-geom]
  IConstructionTool
  (selection-fits [this selection]
    (and (= 2 (count selection))
         (= (set (types selection)) #{:point :line})))
  (construct [this selection]
    (let [pt (first-object-of-type :point selection)
          ln (first-object-of-type :line selection)]
      (add-geom {:type :line :point pt :perpendicular-line ln})))
  )
