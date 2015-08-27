(ns ^:figwheel-always cljsketch.ui
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [om-bootstrap.button :as b]
              [om-bootstrap.nav :as n]
              [om-tools.dom :as d :include-macros true]
              [cljs.core.async :refer [put! chan <!]]
              [goog.events :as events]
              [cljsketch.canvas-graphics :as g]
              ))

(defn current-window-size []
  [(.-innerWidth js/window) (.-innerHeight js/window)])

(defn navbar-menu-dom [navbar-menu menu-channel]
  (letfn [(menu-dom [menu]
            (apply b/dropdown {:title (menu :title)}
                   (map menu-item-dom (menu :items))))
          (menu-item-dom [menu-item]
            (if (:divider? menu-item)
              (b/menu-item {:divider? true})
              (b/menu-item
               (assoc (dissoc menu-item :label)
                      :on-select #(put! menu-channel %))
               (menu-item :label))))]
    (map menu-dom navbar-menu)))

(defn app-navbar [app-state-cursor component]
  (reify
    om/IRenderState
    (render-state [this state]
      (n/navbar
       {:brand (d/a {:href "#"} "CljSketch")}
       (apply n/nav
        {:collapsible? true}
        (navbar-menu-dom app-state-cursor (:menu-channel state)))))))

(defn app-buttonbar [app-state-cursor component]
  (reify
    om/IRenderState
    (render-state [this state]
      (d/div
       {:class "button-bar"}
       (d/div
        {:class "pull-right"}
        (apply
         b/toolbar {}
         (map
          (fn [mouse-tool]
            (b/button-group
             {}
             (b/button
              {:on-click
               (fn [e]
                 (put! (:menu-channel state) (mouse-tool :key))
                 nil ; returning nil here quiets a browser warning about
                     ; returning false from an event handler being deprecated
                 )
               :active? (= (app-state-cursor :mouse-tool) (mouse-tool :key))}
              (mouse-tool :label))))
          (app-state-cursor :mouse-tools))))))))


(defn mouse-handler [event-type channel]
  (fn [event]
    (put! channel {:type   event-type
                   :coords [(.-offsetX event) (.-offsetY event)]
                   :event  event})))

(defn launch [app-state id run-app]
  (letfn
      [(app [app-state component]
         (reify
           om/IInitState
           (init-state [_] {:menu-channel (chan)
                            :mouse-channel (chan)})
           om/IRenderState
           (render-state [_ state]
             (d/div {:class "wrapper"}
                    (d/div #js {:ref "navbar-wrapper"}
                           (om/build app-navbar (app-state :navbar-menu)
                                     {:init-state state}))
                    (om/build app-buttonbar app-state {:init-state state})
                    (d/canvas #js {:ref "canvas"})))
           om/IDidMount
           (did-mount [c]
             (let [canvas                (om/get-node component "canvas")
                   navbar-wrapper-height (.-offsetHeight
                                          (om/get-node component "navbar-wrapper"))
                   [w h]                 (current-window-size)
                   mouse-channel         (om/get-state component :mouse-channel)
                   menu-channel          (om/get-state component :menu-channel)]
               (events/listen
                canvas events/EventType.MOUSEENTER
                (mouse-handler :enter mouse-channel))
               (events/listen
                canvas events/EventType.MOUSEMOVE
                (mouse-handler :move mouse-channel))
               (events/listen
                canvas events/EventType.MOUSEDOWN
                (mouse-handler :down mouse-channel))
               (events/listen
                canvas events/EventType.MOUSEUP
                (mouse-handler :up mouse-channel))
               (events/listen
                canvas events/EventType.MOUSELEAVE
                (mouse-handler :leave mouse-channel))
               (set! (.-width canvas) w)
               (set! (.-height canvas) (- h navbar-wrapper-height))
               (run-app (.getContext canvas "2d") menu-channel mouse-channel)
               ))
           ))]
    (om/root app app-state {:target (. js/document (getElementById id))})))
