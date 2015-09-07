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
goog.require('cljsketch.ui_scratch');
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
cljsketch.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"enabled-tools","enabled-tools",1107625264),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#000",new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276),new cljs.core.Keyword(null,"draw-point","draw-point",1918226496),new cljs.core.Keyword(null,"mouse-tools","mouse-tools",-714015019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"label","label",1718410804),"Select"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"draw-point","draw-point",1918226496),new cljs.core.Keyword(null,"label","label",1718410804),"Draw Point"], null)], null),new cljs.core.Keyword(null,"world","world",-418292623),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.PersistentArrayMap.EMPTY], null));
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
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (p1__29387_SHARP_){
return cljs.core.conj.call(null,p1__29387_SHARP_,geom);
}));
} else {
}

return cljsketch.core.enable_fitting_tools.call(null);
});
cljsketch.core.unselect_BANG_ = (function cljsketch$core$unselect_BANG_(geom){
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (selection){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__29388_SHARP_){
return !(cljs.core._EQ_.call(null,p1__29388_SHARP_,geom));
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
var vec__29392 = endpoints;
var e0 = cljs.core.nth.call(null,vec__29392,(0),null);
var e1 = cljs.core.nth.call(null,vec__29392,(1),null);
var vec__29393 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e0);
var e0x = cljs.core.nth.call(null,vec__29393,(0),null);
var e0y = cljs.core.nth.call(null,vec__29393,(1),null);
var vec__29394 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e1);
var e1x = cljs.core.nth.call(null,vec__29394,(0),null);
var e1y = cljs.core.nth.call(null,vec__29394,(1),null);
return cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),e0x,e0y,e1x,e1y,t);
} else {
return null;
}
});
cljsketch.core.redraw_canvas = (function cljsketch$core$redraw_canvas(){
cljsketch.canvas_graphics.clear_canvas.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"background-color","background-color",570434026)));

var geommap = cljsketch.refgeom.geommap.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)));
var seq__29399 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)));
var chunk__29400 = null;
var count__29401 = (0);
var i__29402 = (0);
while(true){
if((i__29402 < count__29401)){
var at = cljs.core._nth.call(null,chunk__29400,i__29402);
cljsketch.geom.render.call(null,geommap.call(null,at),cljs.core.deref.call(null,cljsketch.core.ctx),(function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,at);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,at);
}
})(),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"styles","styles",1954480375)).call(null,at));

var G__29403 = seq__29399;
var G__29404 = chunk__29400;
var G__29405 = count__29401;
var G__29406 = (i__29402 + (1));
seq__29399 = G__29403;
chunk__29400 = G__29404;
count__29401 = G__29405;
i__29402 = G__29406;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29399);
if(temp__4425__auto__){
var seq__29399__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29399__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__29399__$1);
var G__29407 = cljs.core.chunk_rest.call(null,seq__29399__$1);
var G__29408 = c__16854__auto__;
var G__29409 = cljs.core.count.call(null,c__16854__auto__);
var G__29410 = (0);
seq__29399 = G__29407;
chunk__29400 = G__29408;
count__29401 = G__29409;
i__29402 = G__29410;
continue;
} else {
var at = cljs.core.first.call(null,seq__29399__$1);
cljsketch.geom.render.call(null,geommap.call(null,at),cljs.core.deref.call(null,cljsketch.core.ctx),(function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,at);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,at);
}
})(),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"styles","styles",1954480375)).call(null,at));

var G__29411 = cljs.core.next.call(null,seq__29399__$1);
var G__29412 = null;
var G__29413 = (0);
var G__29414 = (0);
seq__29399 = G__29411;
chunk__29400 = G__29412;
count__29401 = G__29413;
i__29402 = G__29414;
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
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),ageom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"color","color",1011675173))], null));

cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",-418292623),cljs.core.conj.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)),ageom));

return ageom;
});
cljsketch.core.add_point = (function cljsketch$core$add_point(p__29415){
var vec__29417 = p__29415;
var x = cljs.core.nth.call(null,vec__29417,(0),null);
var y = cljs.core.nth.call(null,vec__29417,(1),null);
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
return cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"enabled-tools","enabled-tools",1107625264),cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29418_SHARP_){
return cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,p1__29418_SHARP_),cljs.core.deref.call(null,cljsketch.core.selection));
}),cljs.core.keys.call(null,cljsketch.core.construction_tools))));
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
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"color","color",1011675173),(function (key,color){
var seq__29419_29423 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljsketch.core.selection));
var chunk__29420_29424 = null;
var count__29421_29425 = (0);
var i__29422_29426 = (0);
while(true){
if((i__29422_29426 < count__29421_29425)){
var at_29427 = cljs.core._nth.call(null,chunk__29420_29424,i__29422_29426);
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),at_29427], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));

var G__29428 = seq__29419_29423;
var G__29429 = chunk__29420_29424;
var G__29430 = count__29421_29425;
var G__29431 = (i__29422_29426 + (1));
seq__29419_29423 = G__29428;
chunk__29420_29424 = G__29429;
count__29421_29425 = G__29430;
i__29422_29426 = G__29431;
continue;
} else {
var temp__4425__auto___29432 = cljs.core.seq.call(null,seq__29419_29423);
if(temp__4425__auto___29432){
var seq__29419_29433__$1 = temp__4425__auto___29432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29419_29433__$1)){
var c__16854__auto___29434 = cljs.core.chunk_first.call(null,seq__29419_29433__$1);
var G__29435 = cljs.core.chunk_rest.call(null,seq__29419_29433__$1);
var G__29436 = c__16854__auto___29434;
var G__29437 = cljs.core.count.call(null,c__16854__auto___29434);
var G__29438 = (0);
seq__29419_29423 = G__29435;
chunk__29420_29424 = G__29436;
count__29421_29425 = G__29437;
i__29422_29426 = G__29438;
continue;
} else {
var at_29439 = cljs.core.first.call(null,seq__29419_29433__$1);
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),at_29439], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));

var G__29440 = cljs.core.next.call(null,seq__29419_29433__$1);
var G__29441 = null;
var G__29442 = (0);
var G__29443 = (0);
seq__29419_29423 = G__29440;
chunk__29420_29424 = G__29441;
count__29421_29425 = G__29442;
i__29422_29426 = G__29443;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"color","color",1011675173),color);

return cljsketch.core.redraw_canvas.call(null);
}));
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"background-color","background-color",570434026),(function (key,color){
return cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"background-color","background-color",570434026),color);
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

cljsketch.canvas_graphics.clear_canvas.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"background-color","background-color",570434026)));

var c__19012__auto___29534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___29534){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___29534){
return (function (state_29497){
var state_val_29498 = (state_29497[(1)]);
if((state_val_29498 === (1))){
var state_29497__$1 = state_29497;
var statearr_29499_29535 = state_29497__$1;
(statearr_29499_29535[(2)] = null);

(statearr_29499_29535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (2))){
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29497__$1,(4),menu_channel);
} else {
if((state_val_29498 === (3))){
var inst_29495 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29497__$1,inst_29495);
} else {
if((state_val_29498 === (4))){
var inst_29491 = (state_29497[(2)]);
var inst_29492 = cljs.core.apply.call(null,cljsketch.core.menu_item_handler,inst_29491);
var state_29497__$1 = (function (){var statearr_29500 = state_29497;
(statearr_29500[(7)] = inst_29492);

return statearr_29500;
})();
var statearr_29501_29536 = state_29497__$1;
(statearr_29501_29536[(2)] = null);

(statearr_29501_29536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19012__auto___29534))
;
return ((function (switch__18991__auto__,c__19012__auto___29534){
return (function() {
var cljsketch$core$run_app_$_state_machine__18992__auto__ = null;
var cljsketch$core$run_app_$_state_machine__18992__auto____0 = (function (){
var statearr_29505 = [null,null,null,null,null,null,null,null];
(statearr_29505[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_29505[(1)] = (1));

return statearr_29505;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_29497){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29506){if((e29506 instanceof Object)){
var ex__18995__auto__ = e29506;
var statearr_29507_29537 = state_29497;
(statearr_29507_29537[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29538 = state_29497;
state_29497 = G__29538;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_29497){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_29497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___29534))
})();
var state__19014__auto__ = (function (){var statearr_29508 = f__19013__auto__.call(null);
(statearr_29508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___29534);

return statearr_29508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___29534))
);


var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_29521){
var state_val_29522 = (state_29521[(1)]);
if((state_val_29522 === (1))){
var inst_29509 = null;
var state_29521__$1 = (function (){var statearr_29523 = state_29521;
(statearr_29523[(7)] = inst_29509);

return statearr_29523;
})();
var statearr_29524_29539 = state_29521__$1;
(statearr_29524_29539[(2)] = null);

(statearr_29524_29539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (2))){
var state_29521__$1 = state_29521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29521__$1,(4),mouse_channel);
} else {
if((state_val_29522 === (3))){
var inst_29519 = (state_29521[(2)]);
var state_29521__$1 = state_29521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29521__$1,inst_29519);
} else {
if((state_val_29522 === (4))){
var inst_29509 = (state_29521[(7)]);
var inst_29512 = (state_29521[(2)]);
var inst_29513 = cljs.core.deref.call(null,cljsketch.core.app_state);
var inst_29514 = inst_29513.call(null,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276));
var inst_29515 = cljsketch.core.mouse_tools.call(null,inst_29514);
var inst_29516 = cljsketch.mouse_tools.handle_event.call(null,inst_29515,inst_29512,inst_29509);
var inst_29509__$1 = inst_29516;
var state_29521__$1 = (function (){var statearr_29525 = state_29521;
(statearr_29525[(7)] = inst_29509__$1);

return statearr_29525;
})();
var statearr_29526_29540 = state_29521__$1;
(statearr_29526_29540[(2)] = null);

(statearr_29526_29540[(1)] = (2));


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
var statearr_29530 = [null,null,null,null,null,null,null,null];
(statearr_29530[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_29530[(1)] = (1));

return statearr_29530;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_29521){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29531){if((e29531 instanceof Object)){
var ex__18995__auto__ = e29531;
var statearr_29532_29541 = state_29521;
(statearr_29532_29541[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29542 = state_29521;
state_29521 = G__29542;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_29521){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_29521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_29533 = f__19013__auto__.call(null);
(statearr_29533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_29533;
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

//# sourceMappingURL=core.js.map?rel=1441600244798