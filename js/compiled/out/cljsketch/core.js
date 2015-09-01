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
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (p1__27662_SHARP_){
return cljs.core.conj.call(null,p1__27662_SHARP_,geom);
}));
} else {
}

return cljsketch.core.enable_fitting_tools.call(null);
});
cljsketch.core.unselect_BANG_ = (function cljsketch$core$unselect_BANG_(geom){
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (selection){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__27663_SHARP_){
return !(cljs.core._EQ_.call(null,p1__27663_SHARP_,geom));
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
var vec__27667 = endpoints;
var e0 = cljs.core.nth.call(null,vec__27667,(0),null);
var e1 = cljs.core.nth.call(null,vec__27667,(1),null);
var vec__27668 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e0);
var e0x = cljs.core.nth.call(null,vec__27668,(0),null);
var e0y = cljs.core.nth.call(null,vec__27668,(1),null);
var vec__27669 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e1);
var e1x = cljs.core.nth.call(null,vec__27669,(0),null);
var e1y = cljs.core.nth.call(null,vec__27669,(1),null);
return cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),e0x,e0y,e1x,e1y,t);
} else {
return null;
}
});
cljsketch.core.redraw_canvas = (function cljsketch$core$redraw_canvas(){
cljsketch.canvas_graphics.clear_canvas.call(null,cljs.core.deref.call(null,cljsketch.core.ctx));

var geommap = cljsketch.refgeom.geommap.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)));
var seq__27674 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)));
var chunk__27675 = null;
var count__27676 = (0);
var i__27677 = (0);
while(true){
if((i__27677 < count__27676)){
var at = cljs.core._nth.call(null,chunk__27675,i__27677);
cljsketch.geom.render.call(null,geommap.call(null,at),cljs.core.deref.call(null,cljsketch.core.ctx),(function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,at);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,at);
}
})());

var G__27678 = seq__27674;
var G__27679 = chunk__27675;
var G__27680 = count__27676;
var G__27681 = (i__27677 + (1));
seq__27674 = G__27678;
chunk__27675 = G__27679;
count__27676 = G__27680;
i__27677 = G__27681;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27674);
if(temp__4425__auto__){
var seq__27674__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27674__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__27674__$1);
var G__27682 = cljs.core.chunk_rest.call(null,seq__27674__$1);
var G__27683 = c__16854__auto__;
var G__27684 = cljs.core.count.call(null,c__16854__auto__);
var G__27685 = (0);
seq__27674 = G__27682;
chunk__27675 = G__27683;
count__27676 = G__27684;
i__27677 = G__27685;
continue;
} else {
var at = cljs.core.first.call(null,seq__27674__$1);
cljsketch.geom.render.call(null,geommap.call(null,at),cljs.core.deref.call(null,cljsketch.core.ctx),(function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,at);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,at);
}
})());

var G__27686 = cljs.core.next.call(null,seq__27674__$1);
var G__27687 = null;
var G__27688 = (0);
var G__27689 = (0);
seq__27674 = G__27686;
chunk__27675 = G__27687;
count__27676 = G__27688;
i__27677 = G__27689;
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
cljsketch.core.add_point = (function cljsketch$core$add_point(p__27690){
var vec__27692 = p__27690;
var x = cljs.core.nth.call(null,vec__27692,(0),null);
var y = cljs.core.nth.call(null,vec__27692,(1),null);
var ageom = cljsketch.core.add_geom.call(null,(new cljsketch.geom.Point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null,null,null)));
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
var construction_menu_ks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180),cljsketch.core.index_of_first.call(null,(function (p1__27693_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__27693_SHARP_),"Construct");
}),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180))),new cljs.core.Keyword(null,"items","items",1031954938)], null);
var construction_menu_len = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),construction_menu_ks));
var seq__27698 = cljs.core.seq.call(null,cljs.core.range.call(null,construction_menu_len));
var chunk__27699 = null;
var count__27700 = (0);
var i__27701 = (0);
while(true){
if((i__27701 < count__27700)){
var i = cljs.core._nth.call(null,chunk__27699,i__27701);
var key_27702 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_27703 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_27702),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_27703);

var G__27704 = seq__27698;
var G__27705 = chunk__27699;
var G__27706 = count__27700;
var G__27707 = (i__27701 + (1));
seq__27698 = G__27704;
chunk__27699 = G__27705;
count__27700 = G__27706;
i__27701 = G__27707;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27698);
if(temp__4425__auto__){
var seq__27698__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27698__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__27698__$1);
var G__27708 = cljs.core.chunk_rest.call(null,seq__27698__$1);
var G__27709 = c__16854__auto__;
var G__27710 = cljs.core.count.call(null,c__16854__auto__);
var G__27711 = (0);
seq__27698 = G__27708;
chunk__27699 = G__27709;
count__27700 = G__27710;
i__27701 = G__27711;
continue;
} else {
var i = cljs.core.first.call(null,seq__27698__$1);
var key_27712 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_27713 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_27712),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_27713);

var G__27714 = cljs.core.next.call(null,seq__27698__$1);
var G__27715 = null;
var G__27716 = (0);
var G__27717 = (0);
seq__27698 = G__27714;
chunk__27699 = G__27715;
count__27700 = G__27716;
i__27701 = G__27717;
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

var c__19012__auto___27808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___27808){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___27808){
return (function (state_27771){
var state_val_27772 = (state_27771[(1)]);
if((state_val_27772 === (1))){
var state_27771__$1 = state_27771;
var statearr_27773_27809 = state_27771__$1;
(statearr_27773_27809[(2)] = null);

(statearr_27773_27809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (2))){
var state_27771__$1 = state_27771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27771__$1,(4),menu_channel);
} else {
if((state_val_27772 === (3))){
var inst_27769 = (state_27771[(2)]);
var state_27771__$1 = state_27771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27771__$1,inst_27769);
} else {
if((state_val_27772 === (4))){
var inst_27765 = (state_27771[(2)]);
var inst_27766 = cljsketch.core.menu_item_handler.call(null,inst_27765);
var state_27771__$1 = (function (){var statearr_27774 = state_27771;
(statearr_27774[(7)] = inst_27766);

return statearr_27774;
})();
var statearr_27775_27810 = state_27771__$1;
(statearr_27775_27810[(2)] = null);

(statearr_27775_27810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19012__auto___27808))
;
return ((function (switch__18991__auto__,c__19012__auto___27808){
return (function() {
var cljsketch$core$run_app_$_state_machine__18992__auto__ = null;
var cljsketch$core$run_app_$_state_machine__18992__auto____0 = (function (){
var statearr_27779 = [null,null,null,null,null,null,null,null];
(statearr_27779[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_27779[(1)] = (1));

return statearr_27779;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_27771){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_27771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e27780){if((e27780 instanceof Object)){
var ex__18995__auto__ = e27780;
var statearr_27781_27811 = state_27771;
(statearr_27781_27811[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27812 = state_27771;
state_27771 = G__27812;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_27771){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_27771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___27808))
})();
var state__19014__auto__ = (function (){var statearr_27782 = f__19013__auto__.call(null);
(statearr_27782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___27808);

return statearr_27782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___27808))
);


var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_27795){
var state_val_27796 = (state_27795[(1)]);
if((state_val_27796 === (1))){
var inst_27783 = null;
var state_27795__$1 = (function (){var statearr_27797 = state_27795;
(statearr_27797[(7)] = inst_27783);

return statearr_27797;
})();
var statearr_27798_27813 = state_27795__$1;
(statearr_27798_27813[(2)] = null);

(statearr_27798_27813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (2))){
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27795__$1,(4),mouse_channel);
} else {
if((state_val_27796 === (3))){
var inst_27793 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27795__$1,inst_27793);
} else {
if((state_val_27796 === (4))){
var inst_27783 = (state_27795[(7)]);
var inst_27786 = (state_27795[(2)]);
var inst_27787 = cljs.core.deref.call(null,cljsketch.core.app_state);
var inst_27788 = inst_27787.call(null,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276));
var inst_27789 = cljsketch.core.mouse_tools.call(null,inst_27788);
var inst_27790 = cljsketch.mouse_tools.handle_event.call(null,inst_27789,inst_27786,inst_27783);
var inst_27783__$1 = inst_27790;
var state_27795__$1 = (function (){var statearr_27799 = state_27795;
(statearr_27799[(7)] = inst_27783__$1);

return statearr_27799;
})();
var statearr_27800_27814 = state_27795__$1;
(statearr_27800_27814[(2)] = null);

(statearr_27800_27814[(1)] = (2));


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
var statearr_27804 = [null,null,null,null,null,null,null,null];
(statearr_27804[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_27804[(1)] = (1));

return statearr_27804;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_27795){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_27795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e27805){if((e27805 instanceof Object)){
var ex__18995__auto__ = e27805;
var statearr_27806_27815 = state_27795;
(statearr_27806_27815[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27816 = state_27795;
state_27795 = G__27816;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_27795){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_27795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_27807 = f__19013__auto__.call(null);
(statearr_27807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_27807;
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

//# sourceMappingURL=core.js.map?rel=1441066556729