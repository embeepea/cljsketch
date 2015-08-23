(ns ^:figwheel-always cljsketch.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [om-bootstrap.button :as b]
              [om-bootstrap.nav :as n]
              [om-tools.dom :as d :include-macros true]
              [cljs.core.async :refer [put! chan <!]]
              [goog.events :as events]
              [cljsketch.canvas-graphics :as g]
              [cljsketch.ui :as ui]
              ))

(enable-console-print!)

(def canvas-state (atom {}))

(defmulti menu-item-handler identity)

(defmethod menu-item-handler :new-sketch [key]
  (g/clear-canvas (:ctx @canvas-state)))

(defmethod menu-item-handler :random-points [key]
  (g/random-points (:ctx @canvas-state) 10000 3))

(defmethod menu-item-handler :random-points-colors [key]
  (g/random-points-colors (:ctx @canvas-state) 10000 3))

(defmethod menu-item-handler :default [key]
  (println (str "menu-item " key)))

(def navbar-menu [
 {:title "File"
  :items [{:key :new-sketch           :label "New Sketch"}
          {:key :open                 :laebl "Open..."}]}
 {:title "Construct"
  :items [{:key :point-on-obj         :label "Point on Object"}
          {:key :midpoint             :label "Midpoint"}
          {:key :intersection         :label "Intersection"}
          {:divider true}
          {:key :segment              :label "Segment"}
          {:key :ray                  :label "Ray"}
          {:key :line                 :label "Line"}
          {:key :parallel-line        :label "Parallel Line"}
          {:key :perpendicular-line   :label "Perpendicular Line"}
          {:key :random-points        :label "10000 Random Points"}
          {:key :random-points-colors :label "10000 Random Points and Colors"}]}
])

(defonce app-state (atom {:navbar-menu navbar-menu}))

(defn handle-mouse-move [e]
  (let [x (.-offsetX e)
        y (.-offsetY e)]
    #_(.log js/console (str "move[" x "," y "]"))))

(defn handle-mouse-click [e]
  (let [x (.-offsetX e)
        y (.-offsetY e)]
    (g/draw-point (:ctx @canvas-state) x y 3)
    (.log js/console (str "click[" x "," y "]"))))

(defn mouse-event-handler [{:keys [action event]}]
  (condp = action
      :move (handle-mouse-move event)
      :down (handle-mouse-click event)))

(defn run-app [ctx menu-channel mouse-channel]
  (println ctx)
  (g/clear-canvas ctx)
  (go (loop []
        (let [action (<! menu-channel)]
          (menu-item-handler action)
          (recur))))
  (go (loop []
        (let [mouse-event (<! mouse-channel)]
          (mouse-event-handler mouse-event)
          (recur))))
  (swap! canvas-state assoc :ctx ctx))

(ui/launch app-state "app" run-app)

(defn on-js-reload []
)
