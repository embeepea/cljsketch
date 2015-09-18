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
              [cljsketch.canvas-graphics :as gr]
              [cljsketch.vector :as v]
              [cljsketch.mouse-tools :as mt]
              [cljsketch.ui :as ui]
              [cljsketch.ui-scratch :as ui-scratch]
              [cljsketch.geom :as g]
              [cljsketch.refgeom :as rg]
              [cljsketch.construction-tools :as c]
              [cognitect.transit :as t]
              ))

(enable-console-print!)

(declare enable-fitting-tools)

(def ctx (atom {}))

(def navbar-menu [
 {:title "File"
  :items [{:key :new-sketch           :label "New Sketch"}
          {:key :open                 :laebl "Open..."}]}
 {:title "Edit"
  :items [{:key :delete               :label "Delete"}
          {:key :clear-selection      :label "Clear Selection"}]}
 {:title "Construct"
  :items [{:key :segment              :label "Segment"             :className "disabled"}
          {:key :line                 :label "Line"                :className "disabled"}
          {:key :parallel-line        :label "Parallel Line"       :className "disabled"}
          {:key :perpendicular-line   :label "Perpendicular Line"  :className "disabled"}
          {:key :intersection-point   :label "Intersection Point"  :className "disabled"}
          {:key :midpoint             :label "Midpoint"            :className "disabled"}
          {:key :circle               :label "Circle"              :className "disabled"}
          ;{:divider? true}
          ;{:key :ray                  :label "Ray"}
          ;{:key :point-on-obj         :label "Point on Object"}
          ]}
])

(defonce app-state (atom
 {;:navbar-menu navbar-menu
  :enabled-tools #{}
  :color "#fff"
  :background-color "#000"
  :mouse-tool :draw-point
  :mouse-tools [{:key :select     :label "Select"}
                {:key :draw-point :label "Draw Point"}]
  :world [] ; vector of atoms containing refgeoms
  :styles {}
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
  (if (not (selected? geom)) (swap! selection #(conj % geom)))
  (enable-fitting-tools))

; remove geom from the selection
(defn unselect! [geom]
  (swap! selection (fn [selection] (vec (filter #(not (= % geom)) selection))))
  (enable-fitting-tools))

; toggle geom's membership in the selection
(defn toggle-selected! [geom]
  (if (selected? geom) (unselect! geom) (select! geom))
  (enable-fitting-tools))

(defn clear-selection! []
  (reset! selection [])
  (enable-fitting-tools))

(defn draw-line [pvec t]
  (let [endpoints (v/line-rectangle-intersection
                   pvec (v/Rectangle. 0 0
                                      (-> @ctx .-canvas .-width)
                                      (-> @ctx .-canvas .-height)))]
    (if (= 2 (count endpoints))
      (let [[e0 e1] endpoints
            [e0x e0y] (:u e0)
            [e1x e1y] (:u e1)]
        (gr/draw-line @ctx e0x e0y e1x e1y t)))))

(defn redraw-canvas []
  (gr/clear-canvas @ctx (@app-state :background-color))
  (let [geommap (rg/geommap (@app-state :world))]
    (doseq [at (@app-state :world)]
      (g/render (geommap at) @ctx (or (highlight? at) (selected? at)) ((@app-state :styles) at)
))))

;; geom is NOT an atom
;; add an atom referring to it to the world
;; return the new atom that wraps the newly added geom
(defn add-geom [geom]
  (let [ageom (atom geom)]
    (swap! app-state assoc-in [:styles ageom] { :color (@app-state :color) })
    (swap! app-state assoc :world (conj (@app-state :world) ageom))
    ageom))

(defn add-point [[x y]]
  (let [ageom (add-geom (rg/Point. [x y]))]
    (redraw-canvas)
    ageom
  ))

(def construction-tools
  {
   :segment            (c/SegmentConstructionTool.)
   :line               (c/LineConstructionTool.)
   :parallel-line      (c/ParallelLineConstructionTool.)
   :perpendicular-line (c/PerpendicularLineConstructionTool.)
   :intersection-point (c/LineIntersectionConstructionTool.)
   :midpoint           (c/SegmentMidPointConstructionTool.)
   :circle             (c/CircleConstructionTool.)
   })

;; return the index of the first item x in collection coll for which
;; (pred x) returns true
(defn index-of-first [pred coll]
  (first (keep-indexed (fn [i x] (when (pred x) i)) coll)))

;(defn enable-fitting-tools []
;  (let [construction-menu-ks  [:navbar-menu
;                               (index-of-first #(= (:title %) "Construct")
;                                               (@app-state :navbar-menu))
;                               :items]
;        construction-menu-len (count (get-in @app-state construction-menu-ks))]
;    (doseq [i (range construction-menu-len)]
;      (let [key       (get-in @app-state (conj construction-menu-ks i :key))
;            className (if (c/selection-fits (construction-tools key) @selection)
;                        "" "disabled")]
;        (swap! app-state assoc-in (conj construction-menu-ks i :className)
;               className)))))

(defn enable-fitting-tools []
  (swap! app-state assoc :enabled-tools
         (set (filter #(c/selection-fits (construction-tools %) @selection)
                      (keys construction-tools)))))

;; Call construct-redraw to execute a tool and then redraw the canvas; this
;; is what the menu handlers call when the user picks a construction
;; from the menu.
(defn construct-and-redraw [tool]
  (when (c/selection-fits tool @selection)
    (add-geom (c/construct tool @selection))
    (redraw-canvas)))

(defn clear-geoms [] (swap! app-state assoc :world []))

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

(defmethod menu-item-handler :delete [key]
  (let [trash (rg/dependents (@app-state :world) @selection)]
    (swap! app-state assoc :world (vec (remove (set trash) (@app-state :world))))
    (clear-selection!)
    (redraw-canvas)))

(defmethod menu-item-handler :segment [key]
  (construct-and-redraw (construction-tools :segment)))

(defmethod menu-item-handler :line [key]
  (construct-and-redraw (construction-tools :line)))

(defmethod menu-item-handler :parallel-line [key]
  (construct-and-redraw (construction-tools :parallel-line)))

(defmethod menu-item-handler :perpendicular-line [key]
  (construct-and-redraw (construction-tools :perpendicular-line)))

(defmethod menu-item-handler :intersection-point [key]
  (construct-and-redraw (construction-tools :intersection-point)))

(defmethod menu-item-handler :midpoint [key]
  (construct-and-redraw (construction-tools :midpoint)))

(defmethod menu-item-handler :circle [key]
  (construct-and-redraw (construction-tools :circle)))

(defmethod menu-item-handler :color [key color]
  (doseq [at @selection]
    (swap! app-state assoc-in [:styles at] { :color color }))
  (swap! app-state assoc :color color)
  (redraw-canvas))

(defmethod menu-item-handler :background-color [key color]
  (swap! app-state assoc :background-color color))

(defmethod menu-item-handler :draw-point [key]
  (swap! app-state assoc :mouse-tool :draw-point))

(defmethod menu-item-handler :select [key]
  (swap! app-state assoc :mouse-tool :select))

(defmethod menu-item-handler :default [key]
  (println (str "menu-item " key)))

(defn run-app [_ctx menu-channel mouse-channel]
  (reset! ctx _ctx)
  (gr/clear-canvas @ctx (@app-state :background-color))
  (go (loop []
        (let [action (<! menu-channel)]
          (apply menu-item-handler action)
          (recur))))
  (go (loop [state nil]
        (let [mouse-event (<! mouse-channel)]
          (recur (mt/handle-event
                  (mouse-tools (@app-state :mouse-tool)) mouse-event state)))))
)

(ui/launch app-state "app" run-app)

;; (.ajax js/$ #js{
;;                 "url" "/who",
;;                 "dataType" "text",
;;                 "success" (fn [data] (.log js/console data)),
;;                 "error" (fn [data] (.log js/console "epic fail!"))
;;                 })


(defn serialize [app-state]
  (let [world   (:world app-state)
        atommap (zipmap world (range (count world)))
        styles  (:styles app-state)
        geoms   (vec (map
                      (fn [at]
                        {:geom (rg/serialize @at atommap)
                         :style (styles at)})
                      world))]
    {:background-color (:background-color app-state)
     :color            (:color app-state)
     :geoms            geoms}))

;; to make a JSON object for saving the app state:
;;   (t/write (t/writer :json) (serialize @app-state))

(defn unserialize [serial]
  (swap! app-state (fn [app-state]
                     (let [app-state0 (reduce
                                       (fn [app-state g]
                                         (let [atom        (atom (rg/unserialize (:geom g) (app-state :world)))
                                               app-state1  (assoc app-state :world (conj (app-state :world) atom))]
                                           (if (:style g)
                                             (assoc app-state1 :styles (assoc (app-state :styles) atom (:style g)))
                                             app-state1)))
                                       (assoc app-state :world [] :styles {})
                                       (:geoms serial))]
                       (assoc app-state0
                              :background-color (:background-color serial)
                              :color            (:color serial)))))
  (highlight! nil)
  (clear-selection!)
  (redraw-canvas))

;; to restore the app using a JSON STRING created as above:
;;    (unserialize (t/read (t/reader :json) STRING))

(defn on-js-reload []
  (redraw-canvas)
)
