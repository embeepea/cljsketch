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
cljsketch.core.navbar_menu = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"File",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"new-sketch","new-sketch",-1903213826),new cljs.core.Keyword(null,"label","label",1718410804),"New Sketch"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"laebl","laebl",-1899147798),"Open..."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Edit",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"Delete"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),new cljs.core.Keyword(null,"label","label",1718410804),"Clear Selection"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Construct",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"label","label",1718410804),"Segment",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"label","label",1718410804),"Line",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390),new cljs.core.Keyword(null,"label","label",1718410804),"Parallel Line",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920),new cljs.core.Keyword(null,"label","label",1718410804),"Perpendicular Line",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765),new cljs.core.Keyword(null,"label","label",1718410804),"Intersection Point",new cljs.core.Keyword(null,"className","className",-1983287057),"disabled"], null)], null)], null)], null);
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
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (p1__28788_SHARP_){
return cljs.core.conj.call(null,p1__28788_SHARP_,geom);
}));
} else {
}

return cljsketch.core.enable_fitting_tools.call(null);
});
cljsketch.core.unselect_BANG_ = (function cljsketch$core$unselect_BANG_(geom){
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (selection){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__28789_SHARP_){
return !(cljs.core._EQ_.call(null,p1__28789_SHARP_,geom));
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
var vec__28793 = endpoints;
var e0 = cljs.core.nth.call(null,vec__28793,(0),null);
var e1 = cljs.core.nth.call(null,vec__28793,(1),null);
var vec__28794 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e0);
var e0x = cljs.core.nth.call(null,vec__28794,(0),null);
var e0y = cljs.core.nth.call(null,vec__28794,(1),null);
var vec__28795 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e1);
var e1x = cljs.core.nth.call(null,vec__28795,(0),null);
var e1y = cljs.core.nth.call(null,vec__28795,(1),null);
return cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),e0x,e0y,e1x,e1y,t);
} else {
return null;
}
});
cljsketch.core.redraw_canvas = (function cljsketch$core$redraw_canvas(){
cljsketch.canvas_graphics.clear_canvas.call(null,cljs.core.deref.call(null,cljsketch.core.ctx));

var geommap = cljsketch.refgeom.geommap.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)));
var seq__28800 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)));
var chunk__28801 = null;
var count__28802 = (0);
var i__28803 = (0);
while(true){
if((i__28803 < count__28802)){
var at = cljs.core._nth.call(null,chunk__28801,i__28803);
cljsketch.geom.render.call(null,geommap.call(null,at),cljs.core.deref.call(null,cljsketch.core.ctx),(function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,at);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,at);
}
})());

var G__28804 = seq__28800;
var G__28805 = chunk__28801;
var G__28806 = count__28802;
var G__28807 = (i__28803 + (1));
seq__28800 = G__28804;
chunk__28801 = G__28805;
count__28802 = G__28806;
i__28803 = G__28807;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28800);
if(temp__4425__auto__){
var seq__28800__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28800__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__28800__$1);
var G__28808 = cljs.core.chunk_rest.call(null,seq__28800__$1);
var G__28809 = c__16854__auto__;
var G__28810 = cljs.core.count.call(null,c__16854__auto__);
var G__28811 = (0);
seq__28800 = G__28808;
chunk__28801 = G__28809;
count__28802 = G__28810;
i__28803 = G__28811;
continue;
} else {
var at = cljs.core.first.call(null,seq__28800__$1);
cljsketch.geom.render.call(null,geommap.call(null,at),cljs.core.deref.call(null,cljsketch.core.ctx),(function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,at);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,at);
}
})());

var G__28812 = cljs.core.next.call(null,seq__28800__$1);
var G__28813 = null;
var G__28814 = (0);
var G__28815 = (0);
seq__28800 = G__28812;
chunk__28801 = G__28813;
count__28802 = G__28814;
i__28803 = G__28815;
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
cljsketch.core.add_point = (function cljsketch$core$add_point(p__28816){
var vec__28818 = p__28816;
var x = cljs.core.nth.call(null,vec__28818,(0),null);
var y = cljs.core.nth.call(null,vec__28818,(1),null);
var ageom = cljsketch.core.add_geom.call(null,(new cljsketch.geom.Point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null,null,null)));
cljsketch.core.redraw_canvas.call(null);

return ageom;
});
cljsketch.core.construction_tools = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"segment","segment",-964921196),(new cljsketch.construction_tools.SegmentConstructionTool(null,null,null)),new cljs.core.Keyword(null,"line","line",212345235),(new cljsketch.construction_tools.LineConstructionTool(null,null,null)),new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390),(new cljsketch.construction_tools.ParallelLineConstructionTool(null,null,null)),new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920),(new cljsketch.construction_tools.PerpendicularLineConstructionTool(null,null,null)),new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765),(new cljsketch.construction_tools.LineIntersectionConstructionTool(null,null,null))], null);
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
var construction_menu_ks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180),cljsketch.core.index_of_first.call(null,(function (p1__28819_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__28819_SHARP_),"Construct");
}),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180))),new cljs.core.Keyword(null,"items","items",1031954938)], null);
var construction_menu_len = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),construction_menu_ks));
var seq__28824 = cljs.core.seq.call(null,cljs.core.range.call(null,construction_menu_len));
var chunk__28825 = null;
var count__28826 = (0);
var i__28827 = (0);
while(true){
if((i__28827 < count__28826)){
var i = cljs.core._nth.call(null,chunk__28825,i__28827);
var key_28828 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_28829 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_28828),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_28829);

var G__28830 = seq__28824;
var G__28831 = chunk__28825;
var G__28832 = count__28826;
var G__28833 = (i__28827 + (1));
seq__28824 = G__28830;
chunk__28825 = G__28831;
count__28826 = G__28832;
i__28827 = G__28833;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28824);
if(temp__4425__auto__){
var seq__28824__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28824__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__28824__$1);
var G__28834 = cljs.core.chunk_rest.call(null,seq__28824__$1);
var G__28835 = c__16854__auto__;
var G__28836 = cljs.core.count.call(null,c__16854__auto__);
var G__28837 = (0);
seq__28824 = G__28834;
chunk__28825 = G__28835;
count__28826 = G__28836;
i__28827 = G__28837;
continue;
} else {
var i = cljs.core.first.call(null,seq__28824__$1);
var key_28838 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_28839 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_28838),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_28839);

var G__28840 = cljs.core.next.call(null,seq__28824__$1);
var G__28841 = null;
var G__28842 = (0);
var G__28843 = (0);
seq__28824 = G__28840;
chunk__28825 = G__28841;
count__28826 = G__28842;
i__28827 = G__28843;
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
cljs.core._add_method.call(null,cljsketch.core.menu_item_handler,new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765),(function (key){
return cljsketch.core.construct_and_redraw.call(null,cljsketch.core.construction_tools.call(null,new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765)));
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

var c__19012__auto___28934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___28934){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___28934){
return (function (state_28897){
var state_val_28898 = (state_28897[(1)]);
if((state_val_28898 === (1))){
var state_28897__$1 = state_28897;
var statearr_28899_28935 = state_28897__$1;
(statearr_28899_28935[(2)] = null);

(statearr_28899_28935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (2))){
var state_28897__$1 = state_28897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28897__$1,(4),menu_channel);
} else {
if((state_val_28898 === (3))){
var inst_28895 = (state_28897[(2)]);
var state_28897__$1 = state_28897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28897__$1,inst_28895);
} else {
if((state_val_28898 === (4))){
var inst_28891 = (state_28897[(2)]);
var inst_28892 = cljsketch.core.menu_item_handler.call(null,inst_28891);
var state_28897__$1 = (function (){var statearr_28900 = state_28897;
(statearr_28900[(7)] = inst_28892);

return statearr_28900;
})();
var statearr_28901_28936 = state_28897__$1;
(statearr_28901_28936[(2)] = null);

(statearr_28901_28936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19012__auto___28934))
;
return ((function (switch__18991__auto__,c__19012__auto___28934){
return (function() {
var cljsketch$core$run_app_$_state_machine__18992__auto__ = null;
var cljsketch$core$run_app_$_state_machine__18992__auto____0 = (function (){
var statearr_28905 = [null,null,null,null,null,null,null,null];
(statearr_28905[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_28905[(1)] = (1));

return statearr_28905;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_28897){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_28897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e28906){if((e28906 instanceof Object)){
var ex__18995__auto__ = e28906;
var statearr_28907_28937 = state_28897;
(statearr_28907_28937[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28938 = state_28897;
state_28897 = G__28938;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_28897){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_28897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___28934))
})();
var state__19014__auto__ = (function (){var statearr_28908 = f__19013__auto__.call(null);
(statearr_28908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___28934);

return statearr_28908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___28934))
);


var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_28921){
var state_val_28922 = (state_28921[(1)]);
if((state_val_28922 === (1))){
var inst_28909 = null;
var state_28921__$1 = (function (){var statearr_28923 = state_28921;
(statearr_28923[(7)] = inst_28909);

return statearr_28923;
})();
var statearr_28924_28939 = state_28921__$1;
(statearr_28924_28939[(2)] = null);

(statearr_28924_28939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (2))){
var state_28921__$1 = state_28921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28921__$1,(4),mouse_channel);
} else {
if((state_val_28922 === (3))){
var inst_28919 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28921__$1,inst_28919);
} else {
if((state_val_28922 === (4))){
var inst_28909 = (state_28921[(7)]);
var inst_28912 = (state_28921[(2)]);
var inst_28913 = cljs.core.deref.call(null,cljsketch.core.app_state);
var inst_28914 = inst_28913.call(null,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276));
var inst_28915 = cljsketch.core.mouse_tools.call(null,inst_28914);
var inst_28916 = cljsketch.mouse_tools.handle_event.call(null,inst_28915,inst_28912,inst_28909);
var inst_28909__$1 = inst_28916;
var state_28921__$1 = (function (){var statearr_28925 = state_28921;
(statearr_28925[(7)] = inst_28909__$1);

return statearr_28925;
})();
var statearr_28926_28940 = state_28921__$1;
(statearr_28926_28940[(2)] = null);

(statearr_28926_28940[(1)] = (2));


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
var statearr_28930 = [null,null,null,null,null,null,null,null];
(statearr_28930[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_28930[(1)] = (1));

return statearr_28930;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_28921){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_28921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e28931){if((e28931 instanceof Object)){
var ex__18995__auto__ = e28931;
var statearr_28932_28941 = state_28921;
(statearr_28932_28941[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28942 = state_28921;
state_28921 = G__28942;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_28921){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_28921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_28933 = f__19013__auto__.call(null);
(statearr_28933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_28933;
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

//# sourceMappingURL=core.js.map?rel=1441068486509