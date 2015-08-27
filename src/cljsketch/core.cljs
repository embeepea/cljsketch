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
  :mode :draw-point
  :modes [{:key :select     :label "Select"}
          {:key :draw-point :label "Draw Point"}]
  :geoms []
  }))

(defn redraw-canvas []
  (g/clear-canvas @ctx)
  (doseq [geom (@app-state :geoms)]
    (condp = (:type @geom)
      :point (let [[x y] (:coords @geom)]
               (g/draw-point @ctx x y 3)
               (if (or (u/is-highlighted? @geom) (is-selected? @geom))
                 (g/draw-thin-circle @ctx x y 5))
               ))))

(defn add-point [[x y]]
  (swap! app-state assoc
         :geoms (conj (@app-state :geoms) (atom {:type :point :coords [x y]}))))

(defn clear-geoms [] (swap! app-state assoc :geoms []))

(defmulti menu-item-handler identity)

(defmethod menu-item-handler :new-sketch [key]
  (clear-geoms)
  (redraw-canvas))

(defmethod menu-item-handler :random-points [key]
  (g/random-points @ctx 10000 3))

(defmethod menu-item-handler :random-points-colors [key]
  (g/random-points-colors @ctx 10000 3))

(defmethod menu-item-handler :draw-point [key]
  (swap! app-state assoc :mode :draw-point))

(defmethod menu-item-handler :select [key]
  (swap! app-state assoc :mode :select))

(defmethod menu-item-handler :default [key]
  (println (str "menu-item " key)))

(defmulti mouse-handler :type)

(defmethod mouse-handler :move [{:keys [coords]}]
  (if (= (@app-state :mode) :select)
    (doseq [geom (@app-state :geoms)]
      (if (u/is-within-threshold? coords @geom 5)
        (swap! geom u/highlighted)
        (swap! geom u/unhighlighted))
      (redraw-canvas))))

(defmethod mouse-handler :down [{:keys [coords]}]
  (let [[x y] coords]
    (condp = (@app-state :mode)
      :draw-point  (do (add-point [x y])
                       (redraw-canvas))
      :select      (do
                     (doseq [geom (@app-state :geoms)]
                       (if (u/is-highlighted? @geom)
                         (do
                           (swap! geom toggle-selected)
                           )
                         ))
                       (redraw-canvas))
      )))

(defmethod mouse-handler :default [{:keys [coords]}])

(defn run-app [_ctx menu-channel mouse-channel]
  (reset! ctx _ctx)
  (g/clear-canvas @ctx)
  (go (loop []
        (let [action (<! menu-channel)]
          (menu-item-handler action)
          (recur))))
  (go (loop []
        (let [mouse-event (<! mouse-channel)]
          (mouse-handler mouse-event)
          (recur)))))

(ui/launch app-state "app" run-app)

#_(om/root
(fn [data owner]
  (reify
    om/IRender
    (render [_]
(n/navbar
 {:brand (d/a {:href "#"}
              "Navbar")}
 (n/nav
  {:collapsible? true}
  (n/nav-item {:key 1 :href "#"} "Link")
  (n/nav-item {:key 2 :href "#"} "Link")
  (b/dropdown {:key 3, :title "Dropdown"}
              (b/menu-item {:key 1} "Action")
              (b/menu-item {:key 2
                            :on-select (fn [e] (.log js/console "bo0!"))}
                           "Another action")
              (b/menu-item {:key 3} "Something else here")
              (b/menu-item {:divider? true})
              (b/menu-item {:key 4} "Separated link"))))
)))
app-state {:target (. js/document (getElementById "app"))})

#_(om/root
(fn [data owner]
  (reify
    om/IRender
    (render [_]

      (d/div {}
             (d/div {}
                    (n/navbar
                     {:brand (d/a {:href "#"} "Brand")}
                     (n/nav
                      {:collapsible? true}

                      (b/dropdown {:key 1, :title "Menu 1"}
                                  (b/menu-item {:key 11} "Hamburger")
                                  (b/menu-item {:key 12} "Fries")
                                  )
                      (b/button-group {}
                                      (b/button {} "Foo")
                                      (b/button {} "Bar"))

                      (b/dropdown {:key 2, :title "Menu 2"}
                                  (b/menu-item {:key 21} "Tofu")
                                  (b/menu-item {:key 22} "Salad")
                                  )

                      )
                    )
)



             )

      )
    )
  )


 app-state {:target (. js/document (getElementById "app"))})

(defn on-js-reload []
)
