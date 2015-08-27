(ns cljsketch.util)

(defn is-within-threshold? [[px py] {:keys [coords]} t]
  (let [[x y] coords]
    (and (<= (.abs js/Math (- px x)) t)
         (<= (.abs js/Math (- py y)) t))))

(defn is-highlighted? [geom]
  (and (contains? geom :highlighted) (geom :highlighted)))

(defn highlighted [geom] (assoc geom :highlighted true))

(defn unhighlighted [geom] (dissoc geom :highlighted))

(defn is-selected? [geom]
  (and (contains? geom :selected) (geom :selected)))

(defn selected [geom] (assoc geom :selected true))

(defn unselected [geom] (dissoc geom :selected))

(defn toggle-selected [geom]
  (if (is-selected? geom) (unselected geom) (selected geom)))

