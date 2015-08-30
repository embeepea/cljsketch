(ns figwheel.connect (:require [figwheel.client] [cljsketch.core] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/cljsketch.core.on-js-reload (apply js/cljsketch.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'cljsketch.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

