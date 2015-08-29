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
          {:divider? true}
          {:key :ray                  :label "Ray"}
          {:key :point-on-obj         :label "Point on Object"}
          {:key :midpoint             :label "Midpoint"}
          {:key :intersection         :label "Intersection"}
          {:divider? true}
          {:key :random-points        :label "10000 Random Points"}
          {:key :random-points-colors :label "10000 Random Points and Colors"}]}
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

(defn draw-line [pvec]
  (let [endpoints (v/line-rectangle-intersection
                   pvec (v/Rectangle. 0 0
                                      (-> @ctx .-canvas .-width)
                                      (-> @ctx .-canvas .-height)))]
    (if (= 2 (count endpoints))
      (let [[e0 e1] endpoints
            [e0x e0y] (:u e0)
            [e1x e1y] (:u e1)]
        (g/draw-line @ctx e0x e0y e1x e1y)))))

(defn redraw-canvas []
  (g/clear-canvas @ctx)
  (doseq [geom (@app-state :geoms)]
    (condp = (:type @geom)
      :point   (let [[x y] (:coords @geom)]
                 (g/draw-point @ctx x y 3)
                 (if (or (highlight? geom) (selected? geom))
                   (g/draw-thin-circle @ctx x y 5)))
      :segment (let [[e0 e1] (:endpoints @geom)
                     [x0 y0] (:coords @e0)
                     [x1 y1] (:coords @e1)]
                 (g/draw-line @ctx x0 y0 x1 y1))

      :line    (draw-line (compute-line @geom))



      )))

(defn add-point [[x y]]
  (swap! app-state assoc
         :geoms (conj (@app-state :geoms) (atom {:type :point :coords [x y]}))))

(defn add-segment []
  (when (= 2 (count @selection))
    (swap! app-state assoc
           :geoms (conj (@app-state :geoms)
                        (atom {:type :segment
                               :endpoints [(first @selection) (second @selection)]})))))

(defn add-line []
  (when (= 2 (count @selection))
    (swap! app-state assoc
           :geoms (conj (@app-state :geoms)
                        (atom {:type :line
                               :points [(first @selection) (second @selection)]})))))

; geom is NOT an atom
; add an atom referring to it to the world
(defn add-geom [geom]
  (swap! app-state assoc :geoms (conj (@app-state :geoms) (atom geom))))

(defn add-perpendicular-line []
  (when (= 2 (count @selection))
    (let [pt (some #(if (= (:type @%) :point) % nil) @selection)
          ln (some #(if (= (:type @%) :line)  % nil) @selection)]
      ; later: validate that pt and ln were found in selection
      (add-geom {:type :line :point pt :perpendicular-line ln}))))

(defn add-parallel-line []
  (when (= 2 (count @selection))
    (let [pt (some #(if (= (:type @%) :point) % nil) @selection)
          ln (some #(if (= (:type @%) :line)  % nil) @selection)]
      ; later: validate that pt and ln were found in selection
      (add-geom {:type :line :point pt :parallel-line ln}))))

(defn clear-geoms [] (swap! app-state assoc :geoms []))

(def mouse-tools
  {:draw-point (mt/->DrawPointTool  app-state redraw-canvas add-point)
   :select     (mt/->SelectMoveTool app-state redraw-canvas highlight! highlight
                                    selected? select! unselect! toggle-selected! selection)})

(defmulti menu-item-handler identity)

(defmethod menu-item-handler :new-sketch [key]
  (clear-geoms)
  (redraw-canvas))

(defmethod menu-item-handler :clear-selection [key]
  (clear-selection!)
  (redraw-canvas))

(defmethod menu-item-handler :segment [key] (add-segment))

(defmethod menu-item-handler :line [key] (add-line))

(defmethod menu-item-handler :perpendicular-line [key] (add-perpendicular-line))

(defmethod menu-item-handler :parallel-line [key] (add-parallel-line))

(defmethod menu-item-handler :random-points [key]
  (g/random-points @ctx 10000 3))

(defmethod menu-item-handler :random-points-colors [key]
  (g/random-points-colors @ctx 10000 3))

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
)
