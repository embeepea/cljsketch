(ns cljsketch.util
    (:require [cljsketch.vector :as v]))

(defn compute-line [geom]
  (cond 

    (contains? geom :points)
    (let [[p0 p1] (map #(v/toProjectiveVector (v/AffineVector. (:coords @%)))
                       (:points geom))]
      (v/point-point-line p0 p1))

    (contains? geom :perpendicular-line)
    (let [pt  (v/toProjectiveVector (v/AffineVector. (:coords @(geom :point))))
          ln  (compute-line @(geom :perpendicular-line))]
      (v/point-line-perpendicular pt ln))

    (contains? geom :parallel-line)
    (let [pt  (v/toProjectiveVector (v/AffineVector. (:coords @(geom :point))))
          ln  (compute-line @(geom :parallel-line))]
      (v/point-line-parallel pt ln))

))

(defn square [x] (* x x))

(defn is-within-threshold? [[px py] geom  t]
  (condp = (:type geom)

    :point
    (let [[x y] (:coords geom)]
      (< (+ (square (- px x)) (square (- py y))) t))

    :line
    (let [line (compute-line geom)]
      (< (v/point-line-distance-squared (v/AffineVector. [px py]) line) t))

))


(defn is-selected? [geom]
  (and (contains? geom :selected) (geom :selected)))

(defn selected [geom] (assoc geom :selected true))

(defn unselected [geom] (dissoc geom :selected))

(defn toggle-selected [geom]
  (if (is-selected? geom) (unselected geom) (selected geom)))

