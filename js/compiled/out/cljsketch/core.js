// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.core');
goog.require('cljs.core');
goog.require('cljsketch.geom');
goog.require('cljsketch.ui');
goog.require('cljsketch.mouse_tools');
goog.require('om.dom');
goog.require('cljsketch.refgeom');
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
cljsketch.core.navbar_menu = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"File",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"new-sketch","new-sketch",-1903213826),new cljs.core.Keyword(null,"label","label",1718410804),"New Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"laebl","laebl",-1899147798),"Open..."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Edit",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"Delete"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),new cljs.core.Keyword(null,"label","label",1718410804),"Clear Selection"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Construct",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"label","label",1718410804),"Segment",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"label","label",1718410804),"Line",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390),new cljs.core.Keyword(null,"label","label",1718410804),"Parallel Line",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920),new cljs.core.Keyword(null,"label","label",1718410804),"Perpendicular Line",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765),new cljs.core.Keyword(null,"label","label",1718410804),"Intersection Point",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"midpoint","midpoint",-36269525),new cljs.core.Keyword(null,"label","label",1718410804),"Midpoint",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"label","label",1718410804),"Circle",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null)], null)], null)], null);
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
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (p1__24373_SHARP_){
return cljs.core.conj.call(null,p1__24373_SHARP_,geom);
}));
} else {
}

return cljsketch.core.enable_fitting_tools.call(null);
});
cljsketch.core.unselect_BANG_ = (function cljsketch$core$unselect_BANG_(geom){
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (selection){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__24374_SHARP_){
return !(cljs.core._EQ_.call(null,p1__24374_SHARP_,geom));
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
var vec__24378 = endpoints;
var e0 = cljs.core.nth.call(null,vec__24378,(0),null);
var e1 = cljs.core.nth.call(null,vec__24378,(1),null);
var vec__24379 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e0);
var e0x = cljs.core.nth.call(null,vec__24379,(0),null);
var e0y = cljs.core.nth.call(null,vec__24379,(1),null);
var vec__24380 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e1);
var e1x = cljs.core.nth.call(null,vec__24380,(0),null);
var e1y = cljs.core.nth.call(null,vec__24380,(1),null);
return cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),e0x,e0y,e1x,e1y,t);
} else {
return null;
}
});
cljsketch.core.redraw_canvas = (function cljsketch$core$redraw_canvas(){
cljsketch.canvas_graphics.clear_canvas.call(null,cljs.core.deref.call(null,cljsketch.core.ctx));

var geommap = cljsketch.refgeom.geommap.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)));
var seq__24385 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)));
var chunk__24386 = null;
var count__24387 = (0);
var i__24388 = (0);
while(true){
if((i__24388 < count__24387)){
var at = cljs.core._nth.call(null,chunk__24386,i__24388);
cljsketch.geom.render.call(null,geommap.call(null,at),cljs.core.deref.call(null,cljsketch.core.ctx),(function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,at);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,at);
}
})());

var G__24389 = seq__24385;
var G__24390 = chunk__24386;
var G__24391 = count__24387;
var G__24392 = (i__24388 + (1));
seq__24385 = G__24389;
chunk__24386 = G__24390;
count__24387 = G__24391;
i__24388 = G__24392;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24385);
if(temp__4425__auto__){
var seq__24385__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24385__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__24385__$1);
var G__24393 = cljs.core.chunk_rest.call(null,seq__24385__$1);
var G__24394 = c__16854__auto__;
var G__24395 = cljs.core.count.call(null,c__16854__auto__);
var G__24396 = (0);
seq__24385 = G__24393;
chunk__24386 = G__24394;
count__24387 = G__24395;
i__24388 = G__24396;
continue;
} else {
var at = cljs.core.first.call(null,seq__24385__$1);
cljsketch.geom.render.call(null,geommap.call(null,at),cljs.core.deref.call(null,cljsketch.core.ctx),(function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,at);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,at);
}
})());

var G__24397 = cljs.core.next.call(null,seq__24385__$1);
var G__24398 = null;
var G__24399 = (0);
var G__24400 = (0);
seq__24385 = G__24397;
chunk__24386 = G__24398;
count__24387 = G__24399;
i__24388 = G__24400;
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
cljsketch.core.add_point = (function cljsketch$core$add_point(p__24401){
var vec__24403 = p__24401;
var x = cljs.core.nth.call(null,vec__24403,(0),null);
var y = cljs.core.nth.call(null,vec__24403,(1),null);
var ageom = cljsketch.core.add_geom.call(null,(new cljsketch.refgeom.Point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null,null,null)));
cljsketch.core.redraw_canvas.call(null);

return ageom;
});
cljsketch.core.construction_tools = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"segment","segment",-964921196),(new cljsketch.construction_tools.SegmentConstructionTool(null,null,null)),new cljs.core.Keyword(null,"line","line",212345235),(new cljsketch.construction_tools.LineConstructionTool(null,null,null)),new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390),(new cljsketch.construction_tools.ParallelLineConstructionTool(null,null,null)),new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920),(new cljsketch.construction_tools.PerpendicularLineConstructionTool(null,null,null)),new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765),(new cljsketch.construction_tools.LineIntersectionConstructionTool(null,null,null)),new cljs.core.Keyword(null,"midpoint","midpoint",-36269525),(new cljsketch.construction_tools.SegmentMidPointConstructionTool(null,null,null)),new cljs.core.Keyword(null,"circle","circle",1903212362),(new cljsketch.construction_tools.CircleConstructionTool(null,null,null))], null);
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
var construction_menu_ks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180),cljsketch.core.index_of_first.call(null,(function (p1__24404_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__24404_SHARP_),"Construct");
}),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180))),new cljs.core.Keyword(null,"items","items",1031954938)], null);
var construction_menu_len = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),construction_menu_ks));
var seq__24409 = cljs.core.seq.call(null,cljs.core.range.call(null,construction_menu_len));
var chunk__24410 = null;
var count__24411 = (0);
var i__24412 = (0);
while(true){
if((i__24412 < count__24411)){
var i = cljs.core._nth.call(null,chunk__24410,i__24412);
var key_24413 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_24414 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_24413),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_24414);

var G__24415 = seq__24409;
var G__24416 = chunk__24410;
var G__24417 = count__24411;
var G__24418 = (i__24412 + (1));
seq__24409 = G__24415;
chunk__24410 = G__24416;
count__24411 = G__24417;
i__24412 = G__24418;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24409);
if(temp__4425__auto__){
var seq__24409__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24409__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__24409__$1);
var G__24419 = cljs.core.chunk_rest.call(null,seq__24409__$1);
var G__24420 = c__16854__auto__;
var G__24421 = cljs.core.count.call(null,c__16854__auto__);
var G__24422 = (0);
seq__24409 = G__24419;
chunk__24410 = G__24420;
count__24411 = G__24421;
i__24412 = G__24422;
continue;
} else {
var i = cljs.core.first.call(null,seq__24409__$1);
var key_24423 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_24424 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_24423),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_24424);

var G__24425 = cljs.core.next.call(null,seq__24409__$1);
var G__24426 = null;
var G__24427 = (0);
var G__24428 = (0);
seq__24409 = G__24425;
chunk__24410 = G__24426;
count__24411 = G__24427;
i__24412 = G__24428;
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
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"delete","delete",-1768633620),(function (key){
var trash = cljsketch.refgeom.dependents.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)),cljs.core.deref.call(null,cljsketch.core.selection));
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",-418292623),cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,trash),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)))));

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
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765),(function (key){
return cljsketch.core.construct_and_redraw.call(null,cljsketch.core.construction_tools.call(null,new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765)));
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"midpoint","midpoint",-36269525),(function (key){
return cljsketch.core.construct_and_redraw.call(null,cljsketch.core.construction_tools.call(null,new cljs.core.Keyword(null,"midpoint","midpoint",-36269525)));
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (key){
return cljsketch.core.construct_and_redraw.call(null,cljsketch.core.construction_tools.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362)));
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

var c__19012__auto___24519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___24519){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___24519){
return (function (state_24482){
var state_val_24483 = (state_24482[(1)]);
if((state_val_24483 === (1))){
var state_24482__$1 = state_24482;
var statearr_24484_24520 = state_24482__$1;
(statearr_24484_24520[(2)] = null);

(statearr_24484_24520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (2))){
var state_24482__$1 = state_24482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24482__$1,(4),menu_channel);
} else {
if((state_val_24483 === (3))){
var inst_24480 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24482__$1,inst_24480);
} else {
if((state_val_24483 === (4))){
var inst_24476 = (state_24482[(2)]);
var inst_24477 = cljsketch.core.menu_item_handler.call(null,inst_24476);
var state_24482__$1 = (function (){var statearr_24485 = state_24482;
(statearr_24485[(7)] = inst_24477);

return statearr_24485;
})();
var statearr_24486_24521 = state_24482__$1;
(statearr_24486_24521[(2)] = null);

(statearr_24486_24521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19012__auto___24519))
;
return ((function (switch__18991__auto__,c__19012__auto___24519){
return (function() {
var cljsketch$core$run_app_$_state_machine__18992__auto__ = null;
var cljsketch$core$run_app_$_state_machine__18992__auto____0 = (function (){
var statearr_24490 = [null,null,null,null,null,null,null,null];
(statearr_24490[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_24490[(1)] = (1));

return statearr_24490;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_24482){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_24482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e24491){if((e24491 instanceof Object)){
var ex__18995__auto__ = e24491;
var statearr_24492_24522 = state_24482;
(statearr_24492_24522[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24523 = state_24482;
state_24482 = G__24523;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_24482){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_24482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___24519))
})();
var state__19014__auto__ = (function (){var statearr_24493 = f__19013__auto__.call(null);
(statearr_24493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___24519);

return statearr_24493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___24519))
);


var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_24506){
var state_val_24507 = (state_24506[(1)]);
if((state_val_24507 === (1))){
var inst_24494 = null;
var state_24506__$1 = (function (){var statearr_24508 = state_24506;
(statearr_24508[(7)] = inst_24494);

return statearr_24508;
})();
var statearr_24509_24524 = state_24506__$1;
(statearr_24509_24524[(2)] = null);

(statearr_24509_24524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (2))){
var state_24506__$1 = state_24506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24506__$1,(4),mouse_channel);
} else {
if((state_val_24507 === (3))){
var inst_24504 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24506__$1,inst_24504);
} else {
if((state_val_24507 === (4))){
var inst_24494 = (state_24506[(7)]);
var inst_24497 = (state_24506[(2)]);
var inst_24498 = cljs.core.deref.call(null,cljsketch.core.app_state);
var inst_24499 = inst_24498.call(null,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276));
var inst_24500 = cljsketch.core.mouse_tools.call(null,inst_24499);
var inst_24501 = cljsketch.mouse_tools.handle_event.call(null,inst_24500,inst_24497,inst_24494);
var inst_24494__$1 = inst_24501;
var state_24506__$1 = (function (){var statearr_24510 = state_24506;
(statearr_24510[(7)] = inst_24494__$1);

return statearr_24510;
})();
var statearr_24511_24525 = state_24506__$1;
(statearr_24511_24525[(2)] = null);

(statearr_24511_24525[(1)] = (2));


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
var statearr_24515 = [null,null,null,null,null,null,null,null];
(statearr_24515[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_24515[(1)] = (1));

return statearr_24515;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_24506){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_24506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e24516){if((e24516 instanceof Object)){
var ex__18995__auto__ = e24516;
var statearr_24517_24526 = state_24506;
(statearr_24517_24526[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24527 = state_24506;
state_24506 = G__24527;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_24506){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_24506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_24518 = f__19013__auto__.call(null);
(statearr_24518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_24518;
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

//# sourceMappingURL=core.js.map?rel=1441127570029