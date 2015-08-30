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
cljsketch.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180),cljsketch.core.navbar_menu,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276),new cljs.core.Keyword(null,"draw-point","draw-point",1918226496),new cljs.core.Keyword(null,"mouse-tools","mouse-tools",-714015019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"label","label",1718410804),"Select"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"draw-point","draw-point",1918226496),new cljs.core.Keyword(null,"label","label",1718410804),"Draw Point"], null)], null),new cljs.core.Keyword(null,"geoms","geoms",-186094207),cljs.core.PersistentVector.EMPTY], null));
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
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (p1__72767_SHARP_){
return cljs.core.conj.call(null,p1__72767_SHARP_,geom);
}));
} else {
}

return cljsketch.core.enable_fitting_tools.call(null);
});
cljsketch.core.unselect_BANG_ = (function cljsketch$core$unselect_BANG_(geom){
cljs.core.swap_BANG_.call(null,cljsketch.core.selection,(function (selection){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__72768_SHARP_){
return !(cljs.core._EQ_.call(null,p1__72768_SHARP_,geom));
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
var vec__72772 = endpoints;
var e0 = cljs.core.nth.call(null,vec__72772,(0),null);
var e1 = cljs.core.nth.call(null,vec__72772,(1),null);
var vec__72773 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e0);
var e0x = cljs.core.nth.call(null,vec__72773,(0),null);
var e0y = cljs.core.nth.call(null,vec__72773,(1),null);
var vec__72774 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e1);
var e1x = cljs.core.nth.call(null,vec__72774,(0),null);
var e1y = cljs.core.nth.call(null,vec__72774,(1),null);
return cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),e0x,e0y,e1x,e1y,t);
} else {
return null;
}
});
cljsketch.core.redraw_canvas = (function cljsketch$core$redraw_canvas(){
cljsketch.canvas_graphics.clear_canvas.call(null,cljs.core.deref.call(null,cljsketch.core.ctx));

var seq__72793 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"geoms","geoms",-186094207)));
var chunk__72794 = null;
var count__72795 = (0);
var i__72796 = (0);
while(true){
if((i__72796 < count__72795)){
var geom = cljs.core._nth.call(null,chunk__72794,i__72796);
var pred__72797_72811 = cljs.core._EQ_;
var expr__72798_72812 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
if(cljs.core.truth_(pred__72797_72811.call(null,new cljs.core.Keyword(null,"point","point",1813198264),expr__72798_72812))){
var vec__72800_72813 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
var x_72814 = cljs.core.nth.call(null,vec__72800_72813,(0),null);
var y_72815 = cljs.core.nth.call(null,vec__72800_72813,(1),null);
cljsketch.canvas_graphics.draw_point.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x_72814,y_72815,(3));

if(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())){
cljsketch.canvas_graphics.draw_circle.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x_72814,y_72815,(5),(1));
} else {
}
} else {
if(cljs.core.truth_(pred__72797_72811.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__72798_72812))){
var vec__72801_72816 = new cljs.core.Keyword(null,"endpoints","endpoints",274088209).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
var e0_72817 = cljs.core.nth.call(null,vec__72801_72816,(0),null);
var e1_72818 = cljs.core.nth.call(null,vec__72801_72816,(1),null);
var vec__72802_72819 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e0_72817));
var x0_72820 = cljs.core.nth.call(null,vec__72802_72819,(0),null);
var y0_72821 = cljs.core.nth.call(null,vec__72802_72819,(1),null);
var vec__72803_72822 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e1_72818));
var x1_72823 = cljs.core.nth.call(null,vec__72803_72822,(0),null);
var y1_72824 = cljs.core.nth.call(null,vec__72803_72822,(1),null);
cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x0_72820,y0_72821,x1_72823,y1_72824,(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())?(3):(1)));
} else {
if(cljs.core.truth_(pred__72797_72811.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__72798_72812))){
cljsketch.core.draw_line.call(null,cljsketch.util.compute_line.call(null,cljs.core.deref.call(null,geom)),(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())?(3):(1)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__72798_72812)].join('')));
}
}
}

var G__72825 = seq__72793;
var G__72826 = chunk__72794;
var G__72827 = count__72795;
var G__72828 = (i__72796 + (1));
seq__72793 = G__72825;
chunk__72794 = G__72826;
count__72795 = G__72827;
i__72796 = G__72828;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__72793);
if(temp__4425__auto__){
var seq__72793__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72793__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__72793__$1);
var G__72829 = cljs.core.chunk_rest.call(null,seq__72793__$1);
var G__72830 = c__16854__auto__;
var G__72831 = cljs.core.count.call(null,c__16854__auto__);
var G__72832 = (0);
seq__72793 = G__72829;
chunk__72794 = G__72830;
count__72795 = G__72831;
i__72796 = G__72832;
continue;
} else {
var geom = cljs.core.first.call(null,seq__72793__$1);
var pred__72804_72833 = cljs.core._EQ_;
var expr__72805_72834 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
if(cljs.core.truth_(pred__72804_72833.call(null,new cljs.core.Keyword(null,"point","point",1813198264),expr__72805_72834))){
var vec__72807_72835 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
var x_72836 = cljs.core.nth.call(null,vec__72807_72835,(0),null);
var y_72837 = cljs.core.nth.call(null,vec__72807_72835,(1),null);
cljsketch.canvas_graphics.draw_point.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x_72836,y_72837,(3));

if(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())){
cljsketch.canvas_graphics.draw_circle.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x_72836,y_72837,(5),(1));
} else {
}
} else {
if(cljs.core.truth_(pred__72804_72833.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__72805_72834))){
var vec__72808_72838 = new cljs.core.Keyword(null,"endpoints","endpoints",274088209).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom));
var e0_72839 = cljs.core.nth.call(null,vec__72808_72838,(0),null);
var e1_72840 = cljs.core.nth.call(null,vec__72808_72838,(1),null);
var vec__72809_72841 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e0_72839));
var x0_72842 = cljs.core.nth.call(null,vec__72809_72841,(0),null);
var y0_72843 = cljs.core.nth.call(null,vec__72809_72841,(1),null);
var vec__72810_72844 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e1_72840));
var x1_72845 = cljs.core.nth.call(null,vec__72810_72844,(0),null);
var y1_72846 = cljs.core.nth.call(null,vec__72810_72844,(1),null);
cljsketch.canvas_graphics.draw_line.call(null,cljs.core.deref.call(null,cljsketch.core.ctx),x0_72842,y0_72843,x1_72845,y1_72846,(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())?(3):(1)));
} else {
if(cljs.core.truth_(pred__72804_72833.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__72805_72834))){
cljsketch.core.draw_line.call(null,cljsketch.util.compute_line.call(null,cljs.core.deref.call(null,geom)),(cljs.core.truth_((function (){var or__16069__auto__ = cljsketch.core.highlight_QMARK_.call(null,geom);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljsketch.core.selected_QMARK_.call(null,geom);
}
})())?(3):(1)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__72805_72834)].join('')));
}
}
}

var G__72847 = cljs.core.next.call(null,seq__72793__$1);
var G__72848 = null;
var G__72849 = (0);
var G__72850 = (0);
seq__72793 = G__72847;
chunk__72794 = G__72848;
count__72795 = G__72849;
i__72796 = G__72850;
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
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"geoms","geoms",-186094207),cljs.core.conj.call(null,cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"geoms","geoms",-186094207)),ageom));

return ageom;
});
cljsketch.core.add_point = (function cljsketch$core$add_point(p__72851){
var vec__72853 = p__72851;
var x = cljs.core.nth.call(null,vec__72853,(0),null);
var y = cljs.core.nth.call(null,vec__72853,(1),null);
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
var construction_menu_ks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180),cljsketch.core.index_of_first.call(null,(function (p1__72854_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__72854_SHARP_),"Construct");
}),cljs.core.deref.call(null,cljsketch.core.app_state).call(null,new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180))),new cljs.core.Keyword(null,"items","items",1031954938)], null);
var construction_menu_len = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),construction_menu_ks));
var seq__72859 = cljs.core.seq.call(null,cljs.core.range.call(null,construction_menu_len));
var chunk__72860 = null;
var count__72861 = (0);
var i__72862 = (0);
while(true){
if((i__72862 < count__72861)){
var i = cljs.core._nth.call(null,chunk__72860,i__72862);
var key_72863 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_72864 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_72863),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_72864);

var G__72865 = seq__72859;
var G__72866 = chunk__72860;
var G__72867 = count__72861;
var G__72868 = (i__72862 + (1));
seq__72859 = G__72865;
chunk__72860 = G__72866;
count__72861 = G__72867;
i__72862 = G__72868;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__72859);
if(temp__4425__auto__){
var seq__72859__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72859__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__72859__$1);
var G__72869 = cljs.core.chunk_rest.call(null,seq__72859__$1);
var G__72870 = c__16854__auto__;
var G__72871 = cljs.core.count.call(null,c__16854__auto__);
var G__72872 = (0);
seq__72859 = G__72869;
chunk__72860 = G__72870;
count__72861 = G__72871;
i__72862 = G__72872;
continue;
} else {
var i = cljs.core.first.call(null,seq__72859__$1);
var key_72873 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljsketch.core.app_state),cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"key","key",-1516042587)));
var className_72874 = (cljs.core.truth_(cljsketch.construction_tools.selection_fits.call(null,cljsketch.core.construction_tools.call(null,key_72873),cljs.core.deref.call(null,cljsketch.core.selection)))?"":"disabled");
cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc_in,cljs.core.conj.call(null,construction_menu_ks,i,new cljs.core.Keyword(null,"className","className",-1983287057)),className_72874);

var G__72875 = cljs.core.next.call(null,seq__72859__$1);
var G__72876 = null;
var G__72877 = (0);
var G__72878 = (0);
seq__72859 = G__72875;
chunk__72860 = G__72876;
count__72861 = G__72877;
i__72862 = G__72878;
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
return cljs.core.swap_BANG_.call(null,cljsketch.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"geoms","geoms",-186094207),cljs.core.PersistentVector.EMPTY);
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

var c__19012__auto___72969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___72969){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___72969){
return (function (state_72932){
var state_val_72933 = (state_72932[(1)]);
if((state_val_72933 === (1))){
var state_72932__$1 = state_72932;
var statearr_72934_72970 = state_72932__$1;
(statearr_72934_72970[(2)] = null);

(statearr_72934_72970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72933 === (2))){
var state_72932__$1 = state_72932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72932__$1,(4),menu_channel);
} else {
if((state_val_72933 === (3))){
var inst_72930 = (state_72932[(2)]);
var state_72932__$1 = state_72932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72932__$1,inst_72930);
} else {
if((state_val_72933 === (4))){
var inst_72926 = (state_72932[(2)]);
var inst_72927 = cljsketch.core.menu_item_handler.call(null,inst_72926);
var state_72932__$1 = (function (){var statearr_72935 = state_72932;
(statearr_72935[(7)] = inst_72927);

return statearr_72935;
})();
var statearr_72936_72971 = state_72932__$1;
(statearr_72936_72971[(2)] = null);

(statearr_72936_72971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19012__auto___72969))
;
return ((function (switch__18991__auto__,c__19012__auto___72969){
return (function() {
var cljsketch$core$run_app_$_state_machine__18992__auto__ = null;
var cljsketch$core$run_app_$_state_machine__18992__auto____0 = (function (){
var statearr_72940 = [null,null,null,null,null,null,null,null];
(statearr_72940[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_72940[(1)] = (1));

return statearr_72940;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_72932){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_72932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e72941){if((e72941 instanceof Object)){
var ex__18995__auto__ = e72941;
var statearr_72942_72972 = state_72932;
(statearr_72942_72972[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72973 = state_72932;
state_72932 = G__72973;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_72932){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_72932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___72969))
})();
var state__19014__auto__ = (function (){var statearr_72943 = f__19013__auto__.call(null);
(statearr_72943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___72969);

return statearr_72943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___72969))
);


var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_72956){
var state_val_72957 = (state_72956[(1)]);
if((state_val_72957 === (1))){
var inst_72944 = null;
var state_72956__$1 = (function (){var statearr_72958 = state_72956;
(statearr_72958[(7)] = inst_72944);

return statearr_72958;
})();
var statearr_72959_72974 = state_72956__$1;
(statearr_72959_72974[(2)] = null);

(statearr_72959_72974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72957 === (2))){
var state_72956__$1 = state_72956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72956__$1,(4),mouse_channel);
} else {
if((state_val_72957 === (3))){
var inst_72954 = (state_72956[(2)]);
var state_72956__$1 = state_72956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72956__$1,inst_72954);
} else {
if((state_val_72957 === (4))){
var inst_72944 = (state_72956[(7)]);
var inst_72947 = (state_72956[(2)]);
var inst_72948 = cljs.core.deref.call(null,cljsketch.core.app_state);
var inst_72949 = inst_72948.call(null,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276));
var inst_72950 = cljsketch.core.mouse_tools.call(null,inst_72949);
var inst_72951 = cljsketch.mouse_tools.handle_event.call(null,inst_72950,inst_72947,inst_72944);
var inst_72944__$1 = inst_72951;
var state_72956__$1 = (function (){var statearr_72960 = state_72956;
(statearr_72960[(7)] = inst_72944__$1);

return statearr_72960;
})();
var statearr_72961_72975 = state_72956__$1;
(statearr_72961_72975[(2)] = null);

(statearr_72961_72975[(1)] = (2));


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
var statearr_72965 = [null,null,null,null,null,null,null,null];
(statearr_72965[(0)] = cljsketch$core$run_app_$_state_machine__18992__auto__);

(statearr_72965[(1)] = (1));

return statearr_72965;
});
var cljsketch$core$run_app_$_state_machine__18992__auto____1 = (function (state_72956){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_72956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e72966){if((e72966 instanceof Object)){
var ex__18995__auto__ = e72966;
var statearr_72967_72976 = state_72956;
(statearr_72967_72976[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72977 = state_72956;
state_72956 = G__72977;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljsketch$core$run_app_$_state_machine__18992__auto__ = function(state_72956){
switch(arguments.length){
case 0:
return cljsketch$core$run_app_$_state_machine__18992__auto____0.call(this);
case 1:
return cljsketch$core$run_app_$_state_machine__18992__auto____1.call(this,state_72956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljsketch$core$run_app_$_state_machine__18992__auto____0;
cljsketch$core$run_app_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljsketch$core$run_app_$_state_machine__18992__auto____1;
return cljsketch$core$run_app_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_72968 = f__19013__auto__.call(null);
(statearr_72968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_72968;
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

//# sourceMappingURL=core.js.map?rel=1440959432577