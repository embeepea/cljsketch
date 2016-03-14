(ns ^:figwheel-always cljsketch.ui
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [om-bootstrap.button :as b]
              [om-bootstrap.nav :as n]
              [om-tools.dom :as d :include-macros true]
              [om-bootstrap.modal :as md]
              [om-bootstrap.input :as i]
              [cljs.core.async :refer [put! chan <!]]
              [goog.events :as events]
              ))

(defn current-window-size []
  [(.-innerWidth js/window) (.-innerHeight js/window)])

;;(defn navbar-menu-dom [navbar-menu menu-channel]
;;  (letfn [(menu-dom [menu]
;;            (apply b/dropdown {:title (menu :title)}
;;                   (map menu-item-dom (menu :items))))
;;          (menu-item-dom [menu-item]
;;            (if (:divider? menu-item)
;;              (b/menu-item {:divider? true})
;;              (b/menu-item
;;               (assoc (dissoc menu-item :label)
;;                      :on-select #(put! menu-channel %))
;;               (menu-item :label))))]
;;    (map menu-dom navbar-menu)))
;;
;;(defn app-navbar [app-state-cursor component]
;;  (reify
;;    om/IRenderState
;;    (render-state [this state]
;;      (n/navbar
;;       {:brand (d/a {:href "#"} "CljSketch")}
;;       (apply n/nav
;;        {:collapsible? true}
;;        (navbar-menu-dom app-state-cursor (:menu-channel state)))))))

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

(defn pf [msg x] (println msg) (println x) x)

(defn tool-disabled [key app-state-cursor]
  (when (not ((:enabled-tools app-state-cursor) key)) "disabled"))

(defn disabled-if-selection-empty [app-state-cursor]
  (when (empty? (app-state-cursor :selection))
    "disabled"))

(defn disabled-if-nothing-hidden [app-state-cursor]
  (if (not (some (fn [[k v]] (:hidden v)) (app-state-cursor :styles)))
    "disabled"))

(defn app-navbar [app-state-cursor component]
  (reify
    om/IRenderState
    (render-state [this state]
      (let [menu-channel (:menu-channel state)]
        (n/navbar
         {:brand (d/a {:href "#"} (app-state-cursor :sketch-name))}
         (n/nav
          {:collapsible? true}
          (b/dropdown {:title "File"}
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :key :new-sketch} "New Sketch")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (when (not (:user app-state-cursor)) "disabled")
                                    :key :open} "Open...")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (when (not (:user app-state-cursor)) "disabled")
                                    :key :save} "Save..."))
          (b/dropdown {:title "Edit"}
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (disabled-if-selection-empty app-state-cursor)
                                    :key :delete}          "Delete")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (disabled-if-selection-empty app-state-cursor)
                                    :key :clear-selection} "Clear Selection")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (disabled-if-selection-empty app-state-cursor)
                                    :key :hide} "Hide")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (disabled-if-nothing-hidden app-state-cursor)
                                    :key :unhide-all} "Unhide All"))
          (b/dropdown {:title "Construct"}
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (tool-disabled :segment app-state-cursor)
                                    :key :segment}                 "Segment")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (tool-disabled :line app-state-cursor)
                                    :key :line}                    "Line")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (tool-disabled :parallel-line app-state-cursor)
                                    :key :parallel-line}           "Parallel Line")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (tool-disabled :perpendicular-line app-state-cursor)
                                    :key :perpendicular-line}      "Perpendicular Line")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (tool-disabled :intersection-point app-state-cursor)
                                    :key :intersection-point}      "Intersection Point")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (tool-disabled :midpoint app-state-cursor)
                                    :key :midpoint}                "Midpoint")
                      (b/menu-item {:on-select #(put! menu-channel [%])
                                    :className (tool-disabled :circle app-state-cursor)
                                    :key :circle}                  "Circle"))
          (apply b/dropdown {:title (d/span {} (d/span {} "Color") (d/div {:className "color-swatch"
                                                                           :style {:background-color
                                                                                   (:color app-state-cursor)}}))}
                 (map (fn [color] (b/menu-item {:on-select #(put! menu-channel [% color])
                                                :key :color} (d/div {:className "color-swatch"
                                                                     :style {:background-color color}})))
                      ["#000000" "#ffffff" "#a6cee3" "#1f78b4" "#b2df8a" "#33a02c" "#fb9a99"
                       "#e31a1c" "#fdbf6f" "#ff7f00" "#cab2d6" "#6a3d9a" "#ffff99" "#b15928"]))
          (apply b/dropdown {:title (d/span {} (d/span {} "Background") (d/div {:className "color-swatch"
                                                                           :style {:background-color
                                                                                   (:background-color app-state-cursor)}}))}
                 (map (fn [color] (b/menu-item {:on-select #(put! menu-channel [% color])
                                                :key :background-color} (d/div {:className "color-swatch"
                                                                                :style {:background-color color}})))
                      ["#000000" "#ffffff" "#a6cee3" "#1f78b4" "#b2df8a" "#33a02c" "#fb9a99" 
                       "#e31a1c" "#fdbf6f" "#ff7f00" "#cab2d6" "#6a3d9a" "#ffff99" "#b15928"]))


          (if (:user app-state-cursor)
            (b/dropdown {:title (get-in app-state-cursor [:user "name"])}
                        (b/menu-item {:href "/logout"} "Logout"))
            (b/dropdown {:title "Login"}
                        (b/menu-item {:href "/auth/google"} "Login with Google")))

          ;;(n/nav-item {:key 1 :href "/auth/google"} "Login")


))))))

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
                 (put! (:menu-channel state) [(mouse-tool :key)])
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

(defn handle-sketch-name-input-change [owner app-state]
  (let [node (om/get-node owner "input")]
    (om/transact! app-state :sketch-name (fn [] (.-value node)))))

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

                    (md/modal {:header (d/h4 "Enter a name for this sketch")
                               :footer
                               (d/div
                                (b/button
                                 {:on-click (fn [] (put! (:menu-channel state) [:cancel-save]))} "Cancel")
                                (b/button
                                 {:on-click (fn [] (put! (:menu-channel state) [:confirm-save]))} "Save"))
                               :close-button? false
                               :style (when (app-state :saving) {:display "block"})
                               :visible? (app-state :saving)}
                              (i/input
                               {:feedback? true
                                :type "text"
                                :value (app-state :sketch-name)
                                :placeholder "Enter sketch name"
                                :on-change #(handle-sketch-name-input-change component app-state)
                                }))

                    (md/modal {:header (d/h4 "Click on a sketch to open")
                               :footer
                               (d/div
                                (b/button
                                 {:on-click (fn [] (put! (:menu-channel state) [:cancel-open]))} "Cancel"))
                               :close-button? false
                               :style (when (app-state :opening) {:display "block"})
                               :visible? (app-state :opening)}

                              (apply (partial d/div nil)
                                     (map
                                      #(d/div (d/div {:class "sketch-item"
                                                      :on-click (fn []
                                                                  (put! (:menu-channel state)
                                                                        [:confirm-open %]))}
                                                     %)
                                              (b/button
                                               {:class "delete-sketch"
                                                :on-click (fn [e] (put! (:menu-channel state) [:delete-sketch %]))}
                                               (d/span {:class "glyphicon glyphicon-remove"})))
                                      (app-state :open-sketch-names)
                                      )))

                    (d/div #js {:ref "navbar-wrapper"}
                           (om/build app-navbar app-state
                                     {:init-state state}))
                    (om/build app-buttonbar app-state {:init-state state})
                    (d/div {:className "canvas-wrapper"}
                           (d/canvas #js {:className "canvas" :ref "canvas"})
                           (d/div {:className "ui-message"} (:ui-message app-state)))

                    ))
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
               (run-app (.getContext canvas "2d")
                        menu-channel
                        mouse-channel)
               ))
           ))]
    (om/root app app-state {:target (. js/document (getElementById id))})))
