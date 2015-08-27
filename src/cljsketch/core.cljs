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
  :items [{:key :point-on-obj         :label "Point on Object"}
          {:key :midpoint             :label "Midpoint"}
          {:key :intersection         :label "Intersection"}
          {:divider? true}
          {:key :segment              :label "Segment"}
          {:key :ray                  :label "Ray"}
          {:key :line                 :label "Line"}
          {:key :parallel-line        :label "Parallel Line"}
          {:key :perpendicular-line   :label "Perpendicular Line"}
          {:key :random-points        :label "10000 Random Points"}
          {:key :random-points-colors :label "10000 Random Points and Colors"}]}
])

(defonce app-state (atom
 {:navbar-menu navbar-menu
  :mouse-tool :draw-point
  :mouse-tools [{:key :select     :label "Select"}
                {:key :draw-point :label "Draw Point"}]
  :geoms []
  }))

(defn redraw-canvas []
  (g/clear-canvas @ctx)
  (doseq [geom (@app-state :geoms)]
    (condp = (:type @geom)
      :point (let [[x y] (:coords @geom)]
               (g/draw-point @ctx x y 3)
               (if (or (u/is-highlighted? @geom) (u/is-selected? @geom))
                 (g/draw-thin-circle @ctx x y 5))
               ))))

(defn add-point [[x y]]
  (swap! app-state assoc
         :geoms (conj (@app-state :geoms) (atom {:type :point :coords [x y]}))))

(defn clear-geoms [] (swap! app-state assoc :geoms []))

(def mouse-tools
  {:draw-point (mt/->DrawPointTool app-state redraw-canvas add-point)
   :select     (mt/->SelectTool    app-state redraw-canvas)})

(defmulti menu-item-handler identity)

(defmethod menu-item-handler :new-sketch [key]
  (clear-geoms)
  (redraw-canvas))

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
