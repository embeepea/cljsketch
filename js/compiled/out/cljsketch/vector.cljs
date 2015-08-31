(ns cljsketch.vector)

(defn vsub [u v] (vec (map - u v)))

(defn vadd [u v] (vec (map + u v)))

(defn vmul [u s] (vec (map #(* % s) u)))

(defn vdot [u v] (apply + (map * u v)))

(defn vprj [u] (conj u 1))

(defn vl2norm2 [u] (vdot u u))

(defn vl2norm [u] (Math.sqrt (vl2norm2 u)))

(defn vunitize [u] (vec (map #(/ % (vl2norm u)) u)))

(defn vaff [u]
  (let [z (last u)]
    (if (= z 0) nil
        (vec (map #(/ % z) (drop-last 1 u))))))

(defn vcross [[x0 y0 z0] [x1 y1 z1]]
  [(- (* y0 z1) (* z0 y1))
   (- (* z0 x1) (* x0 z1))
   (- (* x0 y1) (* y0 x1))])

(declare Affine AffineVector Projective ProjectiveVector)

(defprotocol IVectorSpace
  (add [this v]     "vector addition")
  (sub [this v]     "vector subtraction")
  (dot [this v]     "vector dot product")
  (mul [this s]     "scalar multiplication")
  (l2norm2 [this]   "L2 norm squared")
  (l2norm [this]    "L2 norm")
  (l2dist2 [this v] "L2 dist squared")
  (l2dist [this v]  "L2 dist")
  (unitize [this]   "unit vector in same direction")
)

(defprotocol ICross
  (cross [this v] "Product")
)

(defprotocol IProjective
  (toAffineVector [this] "Convert this object to an AffineVector")
)

(defrecord ProjectiveVector [u]
  IProjective
  (toAffineVector [this] (AffineVector. (vaff u)))
  IVectorSpace
  (add     [this v]  (ProjectiveVector. (vadd u v.u)))
  (sub     [this v]  (ProjectiveVector. (vsub u v.u)))
  (mul     [this s]  (ProjectiveVector. (vmul u s)))
  (dot     [this v]  (vdot u v.u))
  (l2norm2 [this]    (vl2norm2 u))
  (l2norm  [this]    (vl2norm u))
  (l2dist2 [this v]  (vl2norm2 (vsub u v.u)))
  (l2dist  [this v]  (vl2norm  (vsub u v.u)))
  (unitize [this]    (ProjectiveVector. (vunitize u)))
  ICross
  (cross [this v] (ProjectiveVector. (vcross u v.u)))
  )

(defprotocol IAffine
  (toProjectiveVector [this] "Convert this object to a ProjectiveVector")
)

(defrecord AffineVector [u]
  IAffine
  (toProjectiveVector [this] (ProjectiveVector. (vprj u)))
  IVectorSpace
  (add [this v] (AffineVector. (vadd u v.u)))
  (sub [this v] (AffineVector. (vsub u v.u)))
  (mul [this s] (AffineVector. (vmul u s)))
  (dot [this v] (vdot u v.u))
  (l2norm2 [this]    (vl2norm2 u))
  (l2norm  [this]    (vl2norm u))
  (l2dist2 [this v]  (vl2norm2 (vsub u v.u)))
  (l2dist  [this v]  (vl2norm  (vsub u v.u)))
  )


(def line-line-intersection cross)

(def point-point-line cross)

(defn point-on-line [point line]
  (= 0 (dot point line)))

(defn dotest1 []
  (let [p0    (toProjectiveVector (AffineVector. [0 2]))
        p1    (toProjectiveVector (AffineVector. [2 0]))
        lP    (point-point-line p0 p1)
        q0    (toProjectiveVector (AffineVector. [0 0]))
        q1    (toProjectiveVector (AffineVector. [2 2]))
        lQ    (point-point-line q0 q1)
        pAQ   (line-line-intersection lP lQ)
]
    [
     (point-on-line p0 lP)
     (point-on-line p1 lP)
     (point-on-line (toProjectiveVector (AffineVector. [1 1])) lP)
     (not (point-on-line (toProjectiveVector (AffineVector. [1 2])) lP))
     (point-on-line q0 lQ)
     (point-on-line q1 lQ)
     (point-on-line (toProjectiveVector (AffineVector. [1 1])) lQ)
     (not (point-on-line (toProjectiveVector (AffineVector. [1 2])) lQ))
     (= (:u (toAffineVector pAQ)) [1 1])
     ]
))

(defrecord Rectangle [xMin yMin xMax yMax])

(defn rectangle-vertices [rect]
  [(toProjectiveVector (AffineVector. [(:xMin rect) (:yMin rect)]))
   (toProjectiveVector (AffineVector. [(:xMax rect) (:yMin rect)]))
   (toProjectiveVector (AffineVector. [(:xMax rect) (:yMax rect)]))
   (toProjectiveVector (AffineVector. [(:xMin rect) (:yMax rect)]))])

(defn line-rectangle-intersection [line rect]
   (let [verts (rectangle-vertices rect)
         signs (vec (map #(dot line %) verts))]
     (map
      toAffineVector
      (:hits
       (reduce
        (fn [{:keys [last-sign last-vert hits]} [vert sign]]
          {:last-sign sign
           :last-vert vert
           :hits      (cond
                        (= 0 sign)                (conj hits vert)
                        (< (* last-sign sign) 0)  (conj hits (line-line-intersection
                                                              (point-point-line vert last-vert)
                                                              line))
                        :else                     hits)})
        {:last-sign (last signs)
         :last-vert (last verts)
         :hits      []}
        (map vector verts signs)
        )))))
   
(defn dotest []
  (let [p0    (toProjectiveVector (AffineVector. [0 2]))
        p1    (toProjectiveVector (AffineVector. [2 0]))
        lP    (point-point-line p0 p1)
        rect  (Rectangle. -2 -2 2 2)]
    (line-rectangle-intersection lP rect)
))

;; take an affine vector, and return another affine vector
;; that is perpendicular to it
(defn affine-perpendicular [avec]
  (let [[x y] avec.u]
    (AffineVector. [y (- x)])))

;; return the affine direction vector for a line
;; given as a projective vector
(defn affine-direction [pvec]
  (affine-perpendicular (AffineVector. (vec (drop-last (:u pvec))))))

;; pt and ln are both projective vectors;
;; pt represents a point
;; ln represents a line
;; return the projective vector corresponding to the line through pt parallel to ln
(defn point-line-parallel [pt ln]
  (let [[a b c] (:u ln)
        [x y]   (:u (toAffineVector pt))]
    (ProjectiveVector. [a b (- (vdot [x y] [a b]))])))

;; pt is an affine point
;; dir is an affine direction
;; return the ProjectiveVector representing the line through pt having direction dir
(defn point-dir-line [pt dir]
  (let [[x y] (:u pt)
        [a b] (:u dir)]
    (ProjectiveVector. [b (- a) (- (* a y) (* b x))])))

;; pt and ln are both projective vectors;
;; pt represents a point
;; ln represents a line
;; return the projective vector corresponding to the line through pt perpendicular to ln
(defn point-line-perpendicular [pt ln]
  (let [ln-dir   (affine-direction ln)
        perp-dir (affine-perpendicular ln-dir)]
    (point-dir-line pt perp-dir)))

;; return the square of the distance between
;; aff-point: a point expressed as an AffineVector
;; prj-line: a line expressed as a ProjectiveVector
(defn point-line-distance-squared [aff-point prj-line]
  (let [[x y]   (:u aff-point)
        [a b c] (:u prj-line)
        d       (+ (* a x) (* b y) c)]
    (/ (* d d) (+ (* a a) (* b b)))))

;; a and b are unit vectors
;; return true iff they are exact 180 degree opposites, i.e. a = -b
(defn linear-opposites? [a b] (every? #(= % 0) (:u (add a b))))


;; a, b, and c are coplanar ProjectiveVectors
;; return true iff b lies "between" a and c
(defn ordered-collinear-triple? [a b c] (linear-opposites? (unitize (cross a b)) (unitize (cross c b))))

;; a, b, and c are ProjectiveVectors
;; a represents a 2d point
;; b and c represent 2d points defining a line segment
;; return the square of the distance from a to that line segment
(defn point-segment-distance2 [a b c]
  (let [a-aff  (toAffineVector a)
        b-aff  (toAffineVector b)
        c-aff  (toAffineVector c)
        ab-aff (sub a-aff b-aff)
        cb-aff (sub c-aff b-aff)
        ac-aff (sub a-aff c-aff)
        bc-aff (sub b-aff c-aff)]
    (cond
      (<= (dot ab-aff cb-aff) 0)  (l2dist2 a-aff b-aff)
      (<= (dot ac-aff bc-aff) 0)  (l2dist2 a-aff c-aff)
      :else
      (let [ln      (point-point-line b c)                ; ln is the line through b,c
            perp-ln (point-line-perpendicular a ln)       ; perl-ln is the line perp to ln, through a
            d       (line-line-intersection ln perp-ln)]  ; d is the point on ln closest to a
        (l2dist2 (toAffineVector a) (toAffineVector d))))))
