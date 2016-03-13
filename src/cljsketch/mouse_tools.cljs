(ns cljsketch.mouse-tools
  (:require [cljsketch.vector :as v]
            [cljsketch.geom :as g]
            [cljsketch.refgeom :as rg]))

(defprotocol MouseTool
  (handle-event [this event state] "Handle a mouse event")
)

(def mouse-threshold 24)

;; The g< function defines an ordering among geom types that's used
;; in deciding which geom to favor in situations where there are multiple
;; geoms within the mouse threshold: favor the one whose type is
;; "smallest" according to the g< ordering.  (If there are multiple
;; ones of that type, take the first one.)
(defn g< [t1 t2]
  (#{[g/Point g/Line]     ; points should be favored over lines
     [g/Point g/Segment]  ; points should be favored over segments
     [g/Segment g/Line]   ; segments should be favored over lines
     } [t1 t2]))

;; Return the atom for the first geom in the world of the most
;; favored type that is within threshold t (distance squared metric)
;; of the given mouse position.
(defn geom-in-threshold [world mouse-pos t]
  (let [geommap (rg/geommap world)]
    (loop [g  nil
           gs world]
      (if (empty? gs) g
          (let [ng (first gs)]
            (recur
             (if (<= (g/point-distance2 (geommap ng) mouse-pos) t)
               (if (or (not g) (g< (rg/geom-type @ng) (rg/geom-type @g)))
                 ng
                 g)
               g)
             (rest gs)))))))

(defrecord SelectMoveTool [app-state redraw-canvas highlight! highlight
                           selected? select! unselect! toggle-selected! clear-selection!]
  MouseTool
  (handle-event [this event state]
    (if (= state nil) (recur this event {:button-state :down})
        (letfn [(geom-under-mouse
                  [] (geom-in-threshold (@app-state :world) (:coords event) mouse-threshold))

                (drag-geom!
                  [geom offset]
                  (if (instance? rg/Point @geom)
                    (reset! geom (rg/Point. (v/vadd ((:geom-drag-base state) geom) offset)))))

                (each
                  [coll f] (doseq [x coll] (f x)))

                (geom-drag-base
                  [atoms gdb] (reduce
                               (fn [gdb at]
                                 (if (instance? rg/Point @at)
                                   (assoc gdb at (:p @at))
                                   gdb))
                               gdb
                               atoms))]

          (condp contains? (:type event)
            #{:move}  (condp = (:button-state state)
                        :up    (let [geom (geom-under-mouse)]
                                 (highlight! geom)
                                 (redraw-canvas)
                                 state)
                        :down  (if (and @highlight (not (selected? @highlight)))
                                 (do
                                   (select! @highlight)
                                   (recur this event
                                          (assoc state
                                                 :highlight-selected true
                                                 :geom-drag-base (geom-drag-base (rg/dependencies @highlight) (:geom-drag-base state)))))
                                 (let [offset (v/vsub (:coords event) (:drag-base state))
                                       ds (rg/dependencies (@app-state :selection))
                                       ]
                                   (each ds #(drag-geom! % offset))
                                   (redraw-canvas)
                                   (assoc state :dragged true))))

            #{:down}  (let [geom (geom-under-mouse)]
                        (highlight! geom)
                        (if (not geom) (clear-selection!))
                        (redraw-canvas)
                        {:drag-base (:coords event)
                         :button-state :down
                         :dragged false
                         :geom-drag-base  (geom-drag-base (rg/dependencies (@app-state :selection)) {})})

            #{:up
              :enter
              :leave}   (do
                          (if (:highlight-selected state)
                            (unselect! @highlight)
                            (when (and @highlight (not (state :dragged)))
                              (toggle-selected! @highlight)
                              (when (not (selected? @highlight)) (highlight! nil))
                              (redraw-canvas)))
                          {:button-state :up}))))))

(defrecord DrawPointTool [app-state redraw-canvas add-point clear-selection! select!]
  MouseTool
  (handle-event [this event state]
    (condp = (:type event)
      :down    (let [ageom (add-point (:coords event))]
                 (clear-selection!)
                 (select! ageom)
                 (redraw-canvas)
                 state)
      nil
      )))
