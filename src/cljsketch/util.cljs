(ns cljsketch.util)

(defn is-within-threshold? [[px py] {:keys [coords]} t]
  (let [[x y] coords]
    (and (<= (.abs js/Math (- px x)) t)
         (<= (.abs js/Math (- py y)) t))))


(defn is-selected? [geom]
  (and (contains? geom :selected) (geom :selected)))

(defn selected [geom] (assoc geom :selected true))

(defn unselected [geom] (dissoc geom :selected))

(defn toggle-selected [geom]
  (if (is-selected? geom) (unselected geom) (selected geom)))

