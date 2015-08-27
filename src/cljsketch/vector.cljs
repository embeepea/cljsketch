(ns cljsketch.vector)

(defn sub [u v] (vec (map - u v)))

(defn add [u v] (vec (map + u v)))

(defn dot [u v] (apply + (map * u v)))
