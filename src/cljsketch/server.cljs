(ns cljsketch.server)

(defn ajax-post [options]
  (.ajax js/$ (clj->js (into {:data {}
                              :dataType "json"
                              :method   "POST"} options))))

(defn ajax-get [options]
  (.ajax js/$ (clj->js (into {:dataType "json"
                              :method   "GET"} options))))


;;(defn ajax-get [options]
;;  (clj->js (into {:dataType "json"
;;                  :method   "GET"} options))
;;)
