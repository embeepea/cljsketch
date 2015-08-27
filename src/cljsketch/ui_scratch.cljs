(ns ^:figwheel-always cljsketch.ui-scratch
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


(defn launch [app-state id run-app]

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

)
