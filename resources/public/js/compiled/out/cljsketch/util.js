// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.util');
goog.require('cljs.core');
goog.require('cljsketch.vector');
cljsketch.util.compute_line = (function cljsketch$util$compute_line(geom){
if(cljs.core.contains_QMARK_.call(null,geom,new cljs.core.Keyword(null,"points","points",-1486596883))){
var vec__61479 = cljs.core.map.call(null,(function (p1__61477_SHARP_){
return cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__61477_SHARP_)),null,null,null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(geom));
var p0 = cljs.core.nth.call(null,vec__61479,(0),null);
var p1 = cljs.core.nth.call(null,vec__61479,(1),null);
return cljsketch.vector.point_point_line.call(null,p0,p1);
} else {
if(cljs.core.contains_QMARK_.call(null,geom,new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920))){
var pt = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom.call(null,new cljs.core.Keyword(null,"point","point",1813198264)))),null,null,null)));
var ln = cljsketch$util$compute_line.call(null,cljs.core.deref.call(null,geom.call(null,new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920))));
return cljsketch.vector.point_line_perpendicular.call(null,pt,ln);
} else {
if(cljs.core.contains_QMARK_.call(null,geom,new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390))){
var pt = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom.call(null,new cljs.core.Keyword(null,"point","point",1813198264)))),null,null,null)));
var ln = cljsketch$util$compute_line.call(null,cljs.core.deref.call(null,geom.call(null,new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390))));
return cljsketch.vector.point_line_parallel.call(null,pt,ln);
} else {
return null;
}
}
}
});
cljsketch.util.square = (function cljsketch$util$square(x){
return (x * x);
});
cljsketch.util.is_within_threshold_QMARK_ = (function cljsketch$util$is_within_threshold_QMARK_(p__61481,geom,t){
var vec__61488 = p__61481;
var px = cljs.core.nth.call(null,vec__61488,(0),null);
var py = cljs.core.nth.call(null,vec__61488,(1),null);
var pred__61489 = cljs.core._EQ_;
var expr__61490 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(geom);
if(cljs.core.truth_(pred__61489.call(null,new cljs.core.Keyword(null,"point","point",1813198264),expr__61490))){
var vec__61492 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(geom);
var x = cljs.core.nth.call(null,vec__61492,(0),null);
var y = cljs.core.nth.call(null,vec__61492,(1),null);
return ((cljsketch.util.square.call(null,(px - x)) + cljsketch.util.square.call(null,(py - y))) < t);
} else {
if(cljs.core.truth_(pred__61489.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__61490))){
var line = cljsketch.util.compute_line.call(null,geom);
return (cljsketch.vector.point_line_distance_squared.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null),null,null,null)),line) < t);
} else {
if(cljs.core.truth_(pred__61489.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__61490))){
var vec__61493 = cljs.core.map.call(null,((function (pred__61489,expr__61490,vec__61488,px,py){
return (function (p1__61480_SHARP_){
return new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__61480_SHARP_));
});})(pred__61489,expr__61490,vec__61488,px,py))
,new cljs.core.Keyword(null,"endpoints","endpoints",274088209).cljs$core$IFn$_invoke$arity$1(geom));
var e0 = cljs.core.nth.call(null,vec__61493,(0),null);
var e1 = cljs.core.nth.call(null,vec__61493,(1),null);
return (cljsketch.vector.point_segment_distance2.call(null,(new cljsketch.vector.toProjectiveVector((new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null),null,null,null)))),(new cljsketch.vector.toProjectiveVector((new cljsketch.vector.AffineVector(e0,null,null,null)))),(new cljsketch.vector.toProjectiveVector((new cljsketch.vector.AffineVector(e1,null,null,null))))) < t);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__61490)].join('')));
}
}
}
});
cljsketch.util.is_selected_QMARK_ = (function cljsketch$util$is_selected_QMARK_(geom){
var and__16057__auto__ = cljs.core.contains_QMARK_.call(null,geom,new cljs.core.Keyword(null,"selected","selected",574897764));
if(and__16057__auto__){
return geom.call(null,new cljs.core.Keyword(null,"selected","selected",574897764));
} else {
return and__16057__auto__;
}
});
cljsketch.util.selected = (function cljsketch$util$selected(geom){
return cljs.core.assoc.call(null,geom,new cljs.core.Keyword(null,"selected","selected",574897764),true);
});
cljsketch.util.unselected = (function cljsketch$util$unselected(geom){
return cljs.core.dissoc.call(null,geom,new cljs.core.Keyword(null,"selected","selected",574897764));
});
cljsketch.util.toggle_selected = (function cljsketch$util$toggle_selected(geom){
if(cljs.core.truth_(cljsketch.util.is_selected_QMARK_.call(null,geom))){
return cljsketch.util.unselected.call(null,geom);
} else {
return cljsketch.util.selected.call(null,geom);
}
});

//# sourceMappingURL=util.js.map?rel=1440892445935