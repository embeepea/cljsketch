(ns ^:figwheel-always cljsketch.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [om-bootstrap.button :as b]
              [om-bootstrap.grid :as grid]
              [om-bootstrap.nav :as n]
              [om-tools.dom :as d :include-macros true]
              [cljs.core.async :refer [put! chan <!]]
              [goog.events :as events]
              [cljsketch.util :as u]
              [cljsketch.canvas-graphics :as g]
              [cljsketch.vector :as v]
              [cljsketch.mouse-tools :as mt]
              [cljsketch.ui :as ui]
              [cljsketch.construction-tools :as c]
              ))

(enable-console-print!)

(def ctx (atom {}))

(def navbar-menu [
 {:title "File"
  :items [{:key :new-sketch           :label "New Sketch"}
          {:key :open                 :laebl "Open..."}]}
 {:title "Edit"
  :items [{:key :delete               :label "Delete"}
          {:key :clear-selection      :label "Clear Selection"}]}
 {:title "Construct"
  :items [{:key :segment              :label "Segment"}
          {:key :line                 :label "Line"}
          {:key :parallel-line        :label "Parallel Line"}
          {:key :perpendicular-line   :label "Perpendicular Line"}
          ;{:divider? true}
          ;{:key :ray                  :label "Ray"}
          ;{:key :point-on-obj         :label "Point on Object"}
          ;{:key :midpoint             :label "Midpoint"}
          ;{:key :intersection         :label "Intersection"}
          ]}
])

(defonce app-state (atom
 {:navbar-menu navbar-menu
  :mouse-tool :draw-point
  :mouse-tools [{:key :select     :label "Select"}
                {:key :draw-point :label "Draw Point"}]
  :geoms [] ; vector of atoms containing geoms
  }))

; An object becomes the highlight object when the mouse is over it.
; At most one object can be the highlight at any one time.
; The value of the `highlight` atom is the atom containing the geom for
; the highlight object.
(defonce highlight (atom nil))

; Set the current highlight geom. (highlight! nil) to
; clear the highlight.
(defn highlight! [geom] (reset! highlight geom))

; return true iff geom is the current highlight
(defn highlight? [geom] (= geom @highlight))

; Selection is an atom whose value is a vector of the currently
; selected geom atoms.
(defonce selection (atom []))

; return true iff geom is currently in the selection
(defn selected? [geom] (some #{geom} @selection))

; add geom to the selection, if it is not already in it
(defn select! [geom]
  (if (not (selected? geom)) (swap! selection #(conj % geom))))

; remove geom from the selection
(defn unselect! [geom]
  (swap! selection (fn [selection] (vec (filter #(not (= % geom)) selection)))))

; toggle geom's membership in the selection
(defn toggle-selected! [geom]
  (if (selected? geom) (unselect! geom) (select! geom)))

(defn clear-selection! [] (reset! selection []))

(defn draw-line [pvec t]
  (let [endpoints (v/line-rectangle-intersection
                   pvec (v/Rectangle. 0 0
                                      (-> @ctx .-canvas .-width)
                                      (-> @ctx .-canvas .-height)))]
    (if (= 2 (count endpoints))
      (let [[e0 e1] endpoints
            [e0x e0y] (:u e0)
            [e1x e1y] (:u e1)]
        (g/draw-line @ctx e0x e0y e1x e1y t)))))

(defn redraw-canvas []
  (g/clear-canvas @ctx)
  (doseq [geom (@app-state :geoms)]
    (condp = (:type @geom)
      :point   (let [[x y] (:coords @geom)]
                 (g/draw-point @ctx x y 3)
                 (if (or (highlight? geom) (selected? geom))
                   (g/draw-circle @ctx x y 5 1)))
      :segment (let [[e0 e1] (:endpoints @geom)
                     [x0 y0] (:coords @e0)
                     [x1 y1] (:coords @e1)]
                 (g/draw-line @ctx x0 y0 x1 y1 
                              (if (or (highlight? geom) (selected? geom)) 3 1)))

      :line    (draw-line (u/compute-line @geom)
                          (if (or (highlight? geom) (selected? geom)) 3 1))


      )))

;; geom is NOT an atom
;; add an atom referring to it to the world
;; return the new atom that wraps the newly added geom
(defn add-geom [geom]
  (let [ageom (atom geom)]
    (swap! app-state assoc :geoms (conj (@app-state :geoms) ageom))
    ageom))

(defn add-point [[x y]]
  (let [ageom (add-geom {:type :point :coords [x y]})]
    (redraw-canvas)
    ageom
  ))

(def construction-tools
  {
   :segment            (c/SegmentConstructionTool. add-geom)
   :line               (c/LineConstructionTool. add-geom)
   :parallel-line      (c/ParallelLineConstructionTool. add-geom)
   :perpendicular-line (c/PerpendicularLineConstructionTool. add-geom)
   })

;; Call construct-redraw to execute a tool and then redraw the canvas; this
;; is what the menu handlers call when the user picks a construction
;; from the menu.
(defn construct-and-redraw [tool]
  (when (c/selection-fits tool @selection)
    (c/construct tool @selection)
    (redraw-canvas)))

(defn clear-geoms [] (swap! app-state assoc :geoms []))

(def mouse-tools
  {:draw-point (mt/->DrawPointTool  app-state redraw-canvas add-point clear-selection! select!)
   :select     (mt/->SelectMoveTool app-state redraw-canvas highlight! highlight
                                    selected? select! unselect! toggle-selected! clear-selection! selection)})

(defmulti menu-item-handler identity)

(defmethod menu-item-handler :new-sketch [key]
  (clear-selection!)
  (clear-geoms)
  (redraw-canvas))

(defmethod menu-item-handler :clear-selection [key]
  (clear-selection!)
  (redraw-canvas))

(defmethod menu-item-handler :segment [key]
  (construct-and-redraw (construction-tools :segment)))

(defmethod menu-item-handler :line [key]
  (construct-and-redraw (construction-tools :line)))

(defmethod menu-item-handler :parallel-line [key]
  (construct-and-redraw (construction-tools :parallel-line)))

(defmethod menu-item-handler :perpendicular-line [key]
  (construct-and-redraw (construction-tools :perpendicular-line)))

(defmethod menu-item-handler :draw-point [key]
  (swap! app-state assoc :mouse-tool :draw-point))

(defmethod menu-item-handler :select [key]
  (swap! app-state assoc :mouse-tool :select))

(defmethod menu-item-handler :default [key]
  (println (str "menu-item " key)))

(defn run-app [_ctx menu-channel mouse-channel]
  (reset! ctx _ctx)
  (g/clear-canvas @ctx)
  (go (loop []
        (let [action (<! menu-channel)]
          (menu-item-handler action)
          (recur))))
  (go (loop [state nil]
        (let [mouse-event (<! mouse-channel)]
          (recur (mt/handle-event
                  (mouse-tools (@app-state :mouse-tool)) mouse-event state))))))

(ui/launch app-state "app" run-app)

(defn on-js-reload []
  (redraw-canvas)
)
