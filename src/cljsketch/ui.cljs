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

(defn canvas-context [canvas] (.getContext canvas "2d"))

(defn set-canvas-size! [canvas w h]
  (set! (.-width canvas) w)
  (set! (.-height canvas) h))


(defn current-window-size []
  [(.-innerWidth js/window) (.-innerHeight js/window)])

(defn navbar-menu-dom [navbar-menu menu-channel]
  (letfn [(menu-dom [menu]
            (apply b/dropdown {:title (menu :title)}
                   (map menu-item-dom (menu :items))))
          (menu-item-dom [menu-item]
            (b/menu-item
             (assoc (dissoc menu-item :label)
                    :on-select #(put! menu-channel %))
             (menu-item :label)))]
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



(defn launch [app-state id run-app]
  (letfn
      [(app [app-state component]
         (reify
           om/IInitState
           (init-state [_] {:menu-channel (chan)
                            :mouse-channel (chan)})
           ;om/IWillMount
           ;(will-mount [_]
           ;  (let [menu-channel (om/get-state component :menu-channel)
           ;        mouse-channel (om/get-state component :mouse-channel)]
           ;    (go (loop []
           ;          (let [action (<! menu-channel)]
           ;            (menu-item-handler action)
           ;            (recur))))
           ;    (go (loop []
           ;          (let [mouse-event (<! mouse-channel)]
           ;            (mouse-event-handler mouse-event)
           ;            (recur))))
           ;    ))
           om/IRenderState
           (render-state [_ state]
             (d/div {:class "wrapper"}
                    (d/div #js {:ref "navbar-wrapper"}
                           (om/build app-navbar (app-state :navbar-menu)
                                     {:init-state state}))
                    (d/canvas #js {:ref "canvas"})))
           om/IDidMount
           (did-mount [c]
             (let [canvas                (om/get-node component "canvas")
                   navbar-wrapper-height (.-offsetHeight  (om/get-node component
                                                                       "navbar-wrapper"))
                   [w h]                 (current-window-size)
                   mouse-channel         (om/get-state component :mouse-channel)]
               (events/listen canvas events/EventType.MOUSEMOVE
                              (fn [e] (put! mouse-channel {:action :move :event e})))
               (events/listen canvas events/EventType.MOUSEDOWN
                              (fn [e] (put! mouse-channel {:action :down :event e})))
               
               (set-canvas-size! canvas w (- h navbar-wrapper-height))
               (run-app (canvas-context canvas)
                        (om/get-state component :menu-channel)
                        (om/get-state component :mouse-channel))
               ))
           ))]
    (om/root app app-state {:target (. js/document (getElementById id))})))
