// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.core');
goog.require('cljs.core');
goog.require('cljsketch.geom');
goog.require('cljsketch.ui');
goog.require('cljsketch.mouse_tools');
goog.require('om.dom');
goog.require('cljsketch.util');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('cljsketch.vector');
goog.require('cljs.core.async');
goog.require('om_bootstrap.nav');
goog.require('goog.events');
goog.require('cljsketch.construction_tools');
goog.require('cljsketch.canvas_graphics');
goog.require('om.core');
goog.require('om_bootstrap.button');
cljs.core.enable_console_print_BANG_.call(null);
cljsketch.core.ctx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljsketch.core.navbar_menu = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"File",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"new-sketch","new-sketch",-1903213826),new cljs.core.Keyword(null,"label","label",1718410804),"New Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"laebl","laebl",-1899147798),"Open..."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Edit",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"Delete"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),new cljs.core.Keyword(null,"label","label",1718410804),"Clear Selection"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Construct",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"label","label",1718410804),"Segment",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"label","label",1718410804),"Line",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390),new cljs.core.Keyword(null,"label","label",1718410804),"Parallel Line",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920),new cljs.core.Keyword(null,"label","label",1718410804),"Perpendicular Line",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null)], null)], null)], null);
if(typeof cljsketch.core.app_state !== 'undefined'){
} else {
cljsketch.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180),cljsketch.core.navbar_menu,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276),new cljs.core.Keyword(null,"draw-point","draw-point",1918226496),new cljs.core.Keyword(null,"mouse-tools","mouse-tools",-714015019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"label","label",1718410804),"Select"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"draw-point","draw-point",1918226496),new cljs.core.Keyword(null,"label","label",1718410804),"Draw Point"], null)], null),new cljs.core.Keyword(null,"world","world",-418292623),cljs.core.PersistentVector.EMPTY], null));
}
if(typeof cljsketch.core.highlight !== 'undefined'){
} else {
cljsketch.core.highlight = cljs.core.atom.call(null,null);
}
cljsketch.core.highlight_BANG_ = (function cljsketch$core$highlight_BANG_(geom){
return cljs.core.reset_BANG_.call(null,cljsketch.core.highlight,geom);
});
cljsketch.core.highlight_QMARK_ = (function cljsketch$core$highlight_QMARK_(geom){
return cljs.core._EQ_.call(null,geom,cljs.core.deref.call(null,cljsketch.core.highlight));
});
if(typeof cljsketch.core.selection !== 'undefined'){
} else {
cljsketch.core.selection = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
cljsketch.core.selected_QMARK_ = (function cljsketch$core$selected_QMARK_(geom){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([geom], true),cljs.core.deref.call(null,cljsketch.core.selection));
});
cljsketch.core.select_BANG_ = (function cljsketch$core$select_BANG_(geom){
if(cljs.core.not.call(null,cljsketch.core.selected_QMARK_.call(null,geom))){
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (p1__73322_SHARP_){
return cljs.core.conj.call(null,p1__73322_SHARP_,geom);
}));
} else {
}

return cljsketch.core.enable_fitting_tools.call(null);
});
cljsketch.core.unselect_BANG_ = (function cljsketch$core$unselect_BANG_(geom){
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (selection){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__73323_SHARP_){
return !(cljs.core._EQ_.call(null,p1__73323_SHARP_,geom));
}),selection));
}));

return cljsketch.core.enable_fitting_tools.call(null);
});
cljsketch.core.toggle_selected_BANG_ = (function cljsketch$core$toggle_selected_BANG_(geom){
if(cljs.core.truth_(cljsketch.core.selected_QMARK_.call(null,geom))){
cljsketch.core.unselect_BANG_.call(null,geom);
} else {
cljsketch.core.select_BANG_.call(null,geom);
}

return cljsketch.core.enable_fitting_tools.call(null);
});
cljsketch.core.clear_selection_BANG_ = (function cljsketch$core$clear_selection_BANG_(){
cljs.core.reset_BANG_.call(null,cljsketch.core.selection,cljs.core.PersistentVector.EMPTY);

return cljsketch.core.enable_fitting_tools.call(null);
});
cljsketch.core.draw_line = (function cljsketch$core$draw_line(pvec,t){
var endpoints = cljsketch.vector.line_rectangle_intersection.call(null,pvec,(new cljsketch.vector.Rectangle((0),(0),cljs.core.deref.call(null,cljsketch.core.ctx).canvas.width,cljs.core.deref.call(null,cljsketch.core.ctx).canvas.height,null,null,null)));
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,endpoints))){
var vec__73327 = endpoints;
var e0 = cljs.core.nth.call(null,vec__73327,(0),null);
var e1 = cljs.core.nth.call(null,vec__73327,(1),null);
var vec__73328 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e0);
var e0x = cljs.core.nth.call(null,vec__73328,(0),null);
var e0y = cljs.core.nth.call(null,vec__73328,(1),null);
var vec__73329 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e1);
var e1x = cljs.core.nth.call(null,vec__73329,(0),null);
var e1y = cljs.core.nth.call(null,vec__73329,(1),null);
return cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),e0x,e0y,e1x,e1y,t);
} else {
return null;
}
});
cljsketch.core.redraw_canvas = (function cljsketch$core$redraw_canvas(){
cljsketch.canvas_graphics.clear_canvas.call(null,cljs.core.deref.call(null,cljsketch.core.ctx));

var seq__73348 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)));
var chunk__73349 = null;
var count__73350 = (0);
var i__73351 = (0);
while(true){
if((i__73351 < count__73350)){
var geom = cljs.core._nth.call(null,chunk__73349,i__73351);
var pred__73352_73366 = cljs.core._EQ_;
var expr__73353_73367 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
if(cljs.core.truth_(pred__73352_73366.call(null,new cljs.core.Keyword(null,"point","point",1813198264),expr__73353_73367))){
var vec__73355_73368 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
var x_73369 = cljs.core.nth.call(null,vec__73355_73368,(0),null);
var y_73370 = cljs.core.nth.call(null,vec__73355_73368,(1),null);
cljsketch.canvas_graphics.draw_point.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x_73369,y_73370,(3));

if(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())){
cljsketch.canvas_graphics.draw_circle.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x_73369,y_73370,(5),(1));
} else {
}
} else {
if(cljs.core.truth_(pred__73352_73366.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__73353_73367))){
var vec__73356_73371 = new cljs.core.Keyword(null,"endpoints","endpoints",274088209).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
var e0_73372 = cljs.core.nth.call(null,vec__73356_73371,(0),null);
var e1_73373 = cljs.core.nth.call(null,vec__73356_73371,(1),null);
var vec__73357_73374 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e0_73372));
var x0_73375 = cljs.core.nth.call(null,vec__73357_73374,(0),null);
var y0_73376 = cljs.core.nth.call(null,vec__73357_73374,(1),null);
var vec__73358_73377 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e1_73373));
var x1_73378 = cljs.core.nth.call(null,vec__73358_73377,(0),null);
var y1_73379 = cljs.core.nth.call(null,vec__73358_73377,(1),null);
cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x0_73375,y0_73376,x1_73378,y1_73379,(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())?(3):(1)));
} else {
if(cljs.core.truth_(pred__73352_73366.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__73353_73367))){
cljsketch.core.draw_line.call(null,cljsketch.util.compute_line.call(null,cljs.core.deref.call(null,geom)),(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())?(3):(1)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__73353_73367)].join('')));
}
}
}

var G__73380 = seq__73348;
var G__73381 = chunk__73349;
var G__73382 = count__73350;
var G__73383 = (i__73351 + (1));
seq__73348 = G__73380;
chunk__73349 = G__73381;
count__73350 = G__73382;
i__73351 = G__73383;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__73348);
if(temp__4425__auto__){
var seq__73348__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73348__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__73348__$1);
var G__73384 = cljs.core.chunk_rest.call(null,seq__73348__$1);
var G__73385 = c__16854__auto__;
var G__73386 = cljs.core.count.call(null,c__16854__auto__);
var G__73387 = (0);
seq__73348 = G__73384;
chunk__73349 = G__73385;
count__73350 = G__73386;
i__73351 = G__73387;
continue;
} else {
var geom = cljs.core.first.call(null,seq__73348__$1);
var pred__73359_73388 = cljs.core._EQ_;
var expr__73360_73389 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
if(cljs.core.truth_(pred__73359_73388.call(null,new cljs.core.Keyword(null,"point","point",1813198264),expr__73360_73389))){
var vec__73362_73390 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
var x_73391 = cljs.core.nth.call(null,vec__73362_73390,(0),null);
var y_73392 = cljs.core.nth.call(null,vec__73362_73390,(1),null);
cljsketch.canvas_graphics.draw_point.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x_73391,y_73392,(3));

if(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())){
cljsketch.canvas_graphics.draw_circle.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x_73391,y_73392,(5),(1));
} else {
}
} else {
if(cljs.core.truth_(pred__73359_73388.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__73360_73389))){
var vec__73363_73393 = new cljs.core.Keyword(null,"endpoints","endpoints",274088209).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
var e0_73394 = cljs.core.nth.call(null,vec__73363_73393,(0),null);
var e1_73395 = cljs.core.nth.call(null,vec__73363_73393,(1),null);
var vec__73364_73396 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e0_73394));
var x0_73397 = cljs.core.nth.call(null,vec__73364_73396,(0),null);
var y0_73398 = cljs.core.nth.call(null,vec__73364_73396,(1),null);
var vec__73365_73399 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e1_73395));
var x1_73400 = cljs.core.nth.call(null,vec__73365_73399,(0),null);
var y1_73401 = cljs.core.nth.call(null,vec__73365_73399,(1),null);
cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x0_73397,y0_73398,x1_73400,y1_73401,(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())?(3):(1)));
} else {
if(cljs.core.truth_(pred__73359_73388.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__73360_73389))){
cljsketch.core.draw_line.call(null,cljsketch.util.compute_line.call(null,cljs.core.deref.call(null,geom)),(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())?(3):(1)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__73360_73389)].join('')));
}
}
}

var G__73402 = cljs.core.next.call(null,seq__73348__$1);
var G__73403 = null;
var G__73404 = (0);
var G__73405 = (0);
seq__73348 = G__73402;
chunk__73349 = G__73403;
count__73350 = G__73404;
i__73351 = G__73405;
continue;
}
} else {
return null;
}
}
break;
}
});
cljsketch.core.add_geom = (function cljsketch$core$add_geom(geom){
var ageom = cljs.core.atom.call(null,geom);
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",-418292623),cljs.core.conj.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)),ageom));

return ageom;
});
cljsketch.core.add_point = (function cljsketch$core$add_point(p__73406){
var vec__73408 = p__73406;
var x = cljs.core.nth.call(null,vec__73408,(0),null);
var y = cljs.core.nth.call(null,vec__73408,(1),null);
var ageom = cljsketch.core.add_geom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
cljsketch.core.redraw_canvas.call(null);

return ageom;
});
cljsketch.core.construction_tools = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"segment","segment",-964921196),(new cljsketch.construction_tools.SegmentConstructionTool(null,null,null)),new cljs.core.Keyword(null,"line","line",212345235),(new cljsketch.construction_tools.LineConstructionTool(null,null,null)),new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390),(new cljsketch.construction_tools.ParallelLineConstructionTool(null,null,null)),new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920),(new cljsketch.construction_tools.PerpendicularLineConstructionTool(null,null,null))], null);
cljsketch.core.index_of_first = (function cljsketch$core$index_of_first(pred,coll){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(pred.call(null,x))){
return i;
} else {
return null;
}
}),coll));
});
cljsketch.core.enable_fitting_tools = (function cljsketch$core$enable_fitting_tools(){
var construction_menu_ks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180),cljsketch.core.index_of_first.call(null,(function (p1__73409_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__73409_SHARP_),"Construct");
}),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180))),new cljs.core.Keyword(null,"items","items",1031954938)], null);
var construction_menu_len = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),construction_menu_ks));
var seq__73414 = cljs.core.seq.call(null,cljs.core.range.call(null,construction_menu_len));
var chunk__73415 = null;
var count__73416 = (0);
var i__73417 = (0);
while(true){
if((i__73417 < count__73416)){
var i = cljs.core._nth.call(null,chunk__73415,i__73417);
var key_73418 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_73419 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_73418),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_73419);

var G__73420 = seq__73414;
var G__73421 = chunk__73415;
var G__73422 = count__73416;
var G__73423 = (i__73417 + (1));
seq__73414 = G__73420;
chunk__73415 = G__73421;
count__73416 = G__73422;
i__73417 = G__73423;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__73414);
if(temp__4425__auto__){
var seq__73414__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73414__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__73414__$1);
var G__73424 = cljs.core.chunk_rest.call(null,seq__73414__$1);
var G__73425 = c__16854__auto__;
var G__73426 = cljs.core.count.call(null,c__16854__auto__);
var G__73427 = (0);
seq__73414 = G__73424;
chunk__73415 = G__73425;
count__73416 = G__73426;
i__73417 = G__73427;
continue;
} else {
var i = cljs.core.first.call(null,seq__73414__$1);
var key_73428 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_73429 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_73428),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_73429);

var G__73430 = cljs.core.next.call(null,seq__73414__$1);
var G__73431 = null;
var G__73432 = (0);
var G__73433 = (0);
seq__73414 = G__73430;
chunk__73415 = G__73431;
count__73416 = G__73432;
i__73417 = G__73433;
continue;
}
} else {
return null;
}
}
break;
}
});
cljsketch.core.construct_and_redraw = (function cljsketch$core$construct_and_redraw(tool){
if(cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,tool,cljs.core.deref.call(null,cljsketch.core.selection)))){
cljsketch.core.add_geom.call(null,cljsketch.construction_tools.construct.call(null,tool,cljs.core.deref.call(null,cljsketch.core.selection)));

return cljsketch.core.redraw_canvas.call(null);
} else {
return null;
}
});
cljsketch.core.clear_geoms = (function cljsketch$core$clear_geoms(){
return cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",-418292623),cljs.core.PersistentVector.EMPTY);
});
cljsketch.core.mouse_tools = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draw-point","draw-point",1918226496),cljsketch.mouse_tools.__GT_DrawPointTool.call(null,cljsketch.core.app_state,cljsketch.core.redraw_canvas,cljsketch.core.add_point,cljsketch.core.clear_selection_BANG_,cljsketch.core.select_BANG_),new cljs.core.Keyword(null,"select","select",1147833503),cljsketch.mouse_tools.__GT_SelectMoveTool.call(null,cljsketch.core.app_state,cljsketch.core.redraw_canvas,cljsketch.core.highlight_BANG_,cljsketch.core.highlight,cljsketch.core.selected_QMARK_,cljsketch.core.select_BANG_,cljsketch.core.unselect_BANG_,cljsketch.core.toggle_selected_BANG_,cljsketch.core.clear_selection_BANG_,cljsketch.core.selection)], null);
if(typeof cljsketch.core.menu_item_handler !== 'undefined'){
} else {
cljsketch.core.menu_item_handler = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljsketch.core","menu-item-handler"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"new-sketch","new-sketch",-1903213826),(function (key){
cljsketch.core.clear_selection_BANG_.call(null);

cljsketch.core.clear_geoms.call(null);

return cljsketch.core.redraw_canvas.call(null);
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),(function (key){
cljsketch.core.clear_selection_BANG_.call(null);

return cljsketch.core.redraw_canvas.call(null);
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (key){
return cljsketch.core.construct_and_redraw.call(null,cljsketch.core.construction_tools.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196)));
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"line","line",212345235),(function (key){
return cljsketch.core.construct_and_redraw.call(null,cljsketch.core.construction_tools.call(null,new cljs.core.Keyword(null,"line","line",212345235)));
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390),(function (key){
return cljsketch.core.construct_and_redraw.call(null,cljsketch.core.construction_tools.call(null,new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390)));
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920),(function (key){
return cljsketch.core.construct_and_redraw.call(null,cljsketch.core.construction_tools.call(null,new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920)));
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"draw-point","draw-point",1918226496),(function (key){
return cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276),new cljs.core.Keyword(null,"draw-point","draw-point",1918226496));
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"select","select",1147833503),(function (key){
return cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276),new cljs.core.Keyword(null,"select","select",1147833503));
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (key){
return cljs.core.println.call(null,[cljs.core.str("menu-item "),cljs.core.str(key)].join(''));
}));
cljsketch.core.run_app = (function cljsketch$core$run_app(_ctx,menu_channel,mouse_channel){
cljs.core.reset_BANG_.call(null,cljsketch.core.ctx,_ctx);

cljsketch.canvas_graphics.clear_canvas.call(null,cljs.core.deref.call(null,cljsketch.core.ctx));

var c__19012__auto___73524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___73524){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___73524){
return (function (state_73487){
var state_val_73488 = (state_73487[(1)]);
if((state_val_73488 === (1))){
var state_73487__$1 = state_73487;
var statearr_73489_73525 = state_73487__$1;
(statearr_73489_73525[(2)] = null);

(statearr_73489_73525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73488 === (2))){
var state_73487__$1 = state_73487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73487__$1,(4),menu_channel);
} else {
if((state_val_73488 === (3))){
var inst_73485 = (state_73487[(2)]);
var state_73487__$1 = state_73487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73487__$1,inst_73485);
} else {
if((state_val_73488 === (4))){
var inst_73481 = (state_73487[(2)]);
var inst_73482 = cljsketch.core.menu_item_handler.call(null,inst_73481);
var state_73487__$1 = (function (){var statearr_73490 = state_73487;
(statearr_73490[(7)] = inst_73482);

return statearr_73490;
})();
var statearr_73491_73526 = state_73487__$1;
(statearr_73491_73526[(2)] = null);

(statearr_73491_73526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19012__auto___73524))
;
return ((function (switch__18991__auto__,c__19012__auto___73524){
return (function() {
var cljsketch$core$run_app_$_state_machine__18992__auto__ = null;
var cljsketch$core$run_app_$_state_machine__18992__auto____0 = (function (){
var statearr_73495 = [null,null,null,null,null,null,null,null];
(statearr_73495[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_73495[(1)] = (1));

return statearr_73495;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_73487){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_73487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e73496){if((e73496 instanceof Object)){
var ex__18995__auto__ = e73496;
var statearr_73497_73527 = state_73487;
(statearr_73497_73527[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73528 = state_73487;
state_73487 = G__73528;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_73487){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_73487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___73524))
})();
var state__19014__auto__ = (function (){var statearr_73498 = f__19013__auto__.call(null);
(statearr_73498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___73524);

return statearr_73498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___73524))
);


var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_73511){
var state_val_73512 = (state_73511[(1)]);
if((state_val_73512 === (1))){
var inst_73499 = null;
var state_73511__$1 = (function (){var statearr_73513 = state_73511;
(statearr_73513[(7)] = inst_73499);

return statearr_73513;
})();
var statearr_73514_73529 = state_73511__$1;
(statearr_73514_73529[(2)] = null);

(statearr_73514_73529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73512 === (2))){
var state_73511__$1 = state_73511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73511__$1,(4),mouse_channel);
} else {
if((state_val_73512 === (3))){
var inst_73509 = (state_73511[(2)]);
var state_73511__$1 = state_73511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73511__$1,inst_73509);
} else {
if((state_val_73512 === (4))){
var inst_73499 = (state_73511[(7)]);
var inst_73502 = (state_73511[(2)]);
var inst_73503 = cljs.core.deref.call(null,cljsketch.core.app_state);
var inst_73504 = inst_73503.call(null,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276));
var inst_73505 = cljsketch.core.mouse_tools.call(null,inst_73504);
var inst_73506 = cljsketch.mouse_tools.handle_event.call(null,inst_73505,inst_73502,inst_73499);
var inst_73499__$1 = inst_73506;
var state_73511__$1 = (function (){var statearr_73515 = state_73511;
(statearr_73515[(7)] = inst_73499__$1);

return statearr_73515;
})();
var statearr_73516_73530 = state_73511__$1;
(statearr_73516_73530[(2)] = null);

(statearr_73516_73530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19012__auto__))
;
return ((function (switch__18991__auto__,c__19012__auto__){
return (function() {
var cljsketch$core$run_app_$_state_machine__18992__auto__ = null;
var cljsketch$core$run_app_$_state_machine__18992__auto____0 = (function (){
var statearr_73520 = [null,null,null,null,null,null,null,null];
(statearr_73520[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_73520[(1)] = (1));

return statearr_73520;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_73511){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_73511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e73521){if((e73521 instanceof Object)){
var ex__18995__auto__ = e73521;
var statearr_73522_73531 = state_73511;
(statearr_73522_73531[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73532 = state_73511;
state_73511 = G__73532;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_73511){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_73511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_73523 = f__19013__auto__.call(null);
(statearr_73523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_73523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__))
);

return c__19012__auto__;
});
cljsketch.ui.launch.call(null,cljsketch.core.app_state,"app",cljsketch.core.run_app);
cljsketch.core.on_js_reload = (function cljsketch$core$on_js_reload(){
return cljsketch.core.redraw_canvas.call(null);
});

//# sourceMappingURL=core.js.map?rel=1440992480858