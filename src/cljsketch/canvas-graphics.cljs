(ns cljsketch.canvas-graphics)

(defn clear-canvas [ctx]
  (let [w (-> ctx .-canvas .-width)
        h (-> ctx .-canvas .-height)]
    (set! (.-fillStyle ctx) "#cccccc")
    (.fillRect ctx 0 0 w h)
    (set! (.-fillStyle ctx) "#000000")))

(defn draw-point [ctx x y r]
  (.beginPath ctx)
  (.arc ctx x y r 0 (* 2 js/Math.PI))
  (.fill ctx))

(defn random-points [ctx n r]
  (let [w (-> ctx .-canvas .-width)
        h (-> ctx .-canvas .-height)]
    (doseq [_ (range n)]
      (let [x (* w (.random js/Math))
            y (* h (.random js/Math))]
        (draw-point ctx x y r)))))

(defn random-points-colors [ctx n radius]
  (let [w (-> ctx .-canvas .-width)
        h (-> ctx .-canvas .-height)]
    (doseq [_ (range n)]
      (let [x (* w (.random js/Math))
            y (* h (.random js/Math))
            r (.round js/Math (* 255 (.random js/Math)))
            g (.round js/Math (* 255 (.random js/Math)))
            b (.round js/Math (* 255 (.random js/Math)))]
        (set! (.-fillStyle ctx) (str "rgb(" r "," g "," b ")"))
        (draw-point ctx x y radius)))))
