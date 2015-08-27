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
