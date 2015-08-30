Geometry Types

a `Geom` is a basic geometry primitive that can be directly rendered
  If this were an OO language, I'd say that the geom has a 'render' method.
  But perhaps a more Clojurey approach would be to say that there is a 'render'
  function that works for all Geom objects.
   
  `Geom`s include:
       `Point`   (includes x,y coords)
       `Line`    (includes [a,b,c] projective vector coordinates of the line)
       `Segment` (includes x,y coords of 2 endpoints)
   
a `RefGeom` is a higher level geometry object expressed in terms of other objects.
  The 'world' consists of a list of objects which are either RefGeoms or Geoms (typically
  the only Geoms are the Points); the objects in the world form a graph in which
  the edges indicate dependency relationships.

------------------------------------------------------------------------

Consider having a concept of a "mouse tool", which is basically a specification
of what happens in response to various mouse events.

GLOBAL TERMS:

   * selection: 0 or more geoms, the set of currently selected objects
     (stored as a vector, in the order in which they were selected)

SELECT TOOL:

  Terms:

    * highlight: 0 or 1 geoms, reflecting what is currently under the
      cursor (ala hover)
       
  Events:

    * mouse move (while button up):
        * update the highlight to the object under the mouse's new position, or
          to nil if none

    * mouse down:
        * update the highlight to the object under the mouse's new position, or
          to nil if none
        * toggle the current highlight object's (if there is one) membership
          in the selection (add it if it is not there, or remove it if it is)
        * for each object in the selection which has a :coords:
            set :mouseDownCoords = :coords
        * set mouse-base to position where down even occurred

    * mouse move (while button down):
        * compute mouseDrag = mouseBase - current mouse position
        * for each object in selection:
            set :coords = :mouseDownCoords + mouseDrag

    * mouse up:
        * for each object in the selection:
            remove the :mouseDownCoords attr
