(ns cljsketch.util
    (:require [cljsketch.vector :as v]
              [cljsketch.geom :as g]))

; (defn is-selected? [geom]
;   (and (contains? geom :selected) (geom :selected)))
; 
; (defn selected [geom] (assoc geom :selected true))
; 
; (defn unselected [geom] (dissoc geom :selected))
; 
; (defn toggle-selected [geom]
;   (if (is-selected? geom) (unselected geom) (selected geom)))
; 
