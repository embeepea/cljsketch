# CljSketch

CljSketch is a 2D geometry sketchpad program written in ClojureScript.

The idea is that you construct geometric objects which are defined in
terms of other geometric objects, and as you move objects around, all their
dependent objects update accordingly.

For example, if you draw two points, then select them and construct the
line through them, then drag one of the points, the constructed line will move
with it.

At the moment only the following basics are implemented:

  * draw points
  * select two points and construct
    * the line through them, or
    * the segment connecting them
  * select one point and one line and construct
    * the line through the point that is parallel to the selected line
    * the line through the point that is perpendicular to the selected line

## Running CljSketch

To run CljSketch, it's online at

    [http://embeepea.github.com/cljsketch](http://embeepea.github.com/cljsketch)
  
justpoint your browser to that URL.  Or, to run a local copy:

  1. clone the repo
  2. point your browser to `resources/public/index.html`
  
## Interactive Development Environment

To play with the CljSketch source code in an interactive REPL:

  1. clone the repo
  2. install [Leiningen](http://leiningen.org)
  3. from the top level directory in the repo, type `lein figwheel`
  4. point your browser to http://localhost:3449

## License

Copyright © 2015 Mark Phillips (mbp@geomtech.com)

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
