// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.mouse_tools');
goog.require('cljs.core');
goog.require('cljsketch.vector');
goog.require('cljsketch.geom');
goog.require('cljsketch.refgeom');
cljsketch.mouse_tools.gtype = (function cljsketch$mouse_tools$gtype(geom){
if((function (){var G__29502 = cljs.core.deref.call(null,geom);
if(G__29502){
var bit__16743__auto__ = null;
if(cljs.core.truth_((function (){var or__16069__auto__ = bit__16743__auto__;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return G__29502.cljsketch$refgeom$IRefGeom$;
}
})())){
return true;
} else {
if((!G__29502.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljsketch.refgeom.IRefGeom,G__29502);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljsketch.refgeom.IRefGeom,G__29502);
}
})()){
return cljsketch.refgeom.geom_type.call(null,cljs.core.deref.call(null,geom));
} else {
return cljs.core.type.call(null,cljs.core.deref.call(null,geom));
}
});

cljsketch.mouse_tools.MouseTool = (function (){var obj29504 = {};
return obj29504;
})();

/**
 * Handle a mouse event
 */
cljsketch.mouse_tools.handle_event = (function cljsketch$mouse_tools$handle_event(this$,event,state){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$mouse_tools$MouseTool$handle_event$arity$3;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$mouse_tools$MouseTool$handle_event$arity$3(this$,event,state);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.mouse_tools.handle_event[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.mouse_tools.handle_event["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MouseTool.handle-event",this$);
}
}
})().call(null,this$,event,state);
}
});

cljsketch.mouse_tools.gtless = (function cljsketch$mouse_tools$gtless(t1,t2){
return cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsketch.geom.Point,cljsketch.geom.Segment], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsketch.geom.Segment,cljsketch.geom.Line], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsketch.geom.Point,cljsketch.geom.Line], null)], true).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,t2], null));
});
cljsketch.mouse_tools.geom_in_threshold = (function cljsketch$mouse_tools$geom_in_threshold(geoms,mouse_pos,t){
var geommap = cljsketch.refgeom.geommap.call(null,geoms);
var g = null;
var gs = geoms;
while(true){
if(cljs.core.empty_QMARK_.call(null,gs)){
return g;
} else {
var ng = cljs.core.first.call(null,gs);
var G__29505 = (((cljsketch.geom.point_distance2.call(null,geommap.call(null,ng),mouse_pos) <= t))?(cljs.core.truth_((function (){var or__16069__auto__ = cljs.core.not.call(null,g);
if(or__16069__auto__){
return or__16069__auto__;
} else {
return cljsketch.mouse_tools.gtless.call(null,cljsketch.mouse_tools.gtype.call(null,ng),cljsketch.mouse_tools.gtype.call(null,g));
}
})())?ng:g):g);
var G__29506 = cljs.core.rest.call(null,gs);
g = G__29505;
gs = G__29506;
continue;
}
break;
}
});

/**
* @constructor
* @param {*} app_state
* @param {*} redraw_canvas
* @param {*} highlight_BANG_
* @param {*} highlight
* @param {*} selected_QMARK_
* @param {*} select_BANG_
* @param {*} unselect_BANG_
* @param {*} toggle_selected_BANG_
* @param {*} clear_selection_BANG_
* @param {*} selection
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.mouse_tools.SelectMoveTool = (function (app_state,redraw_canvas,highlight_BANG_,highlight,selected_QMARK_,select_BANG_,unselect_BANG_,toggle_selected_BANG_,clear_selection_BANG_,selection,__meta,__extmap,__hash){
this.app_state = app_state;
this.redraw_canvas = redraw_canvas;
this.highlight_BANG_ = highlight_BANG_;
this.highlight = highlight;
this.selected_QMARK_ = selected_QMARK_;
this.select_BANG_ = select_BANG_;
this.unselect_BANG_ = unselect_BANG_;
this.toggle_selected_BANG_ = toggle_selected_BANG_;
this.clear_selection_BANG_ = clear_selection_BANG_;
this.selection = selection;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.mouse_tools.SelectMoveTool.prototype.cljsketch$mouse_tools$MouseTool$ = true;

cljsketch.mouse_tools.SelectMoveTool.prototype.cljsketch$mouse_tools$MouseTool$handle_event$arity$3 = (function (this$,event,state){
var self__ = this;
while(true){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,state,null)){
var G__29537 = this$__$1;
var G__29538 = event;
var G__29539 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"button-state","button-state",-1211301176),new cljs.core.Keyword(null,"down","down",1565245570)], null);
this$ = G__29537;
event = G__29538;
state = G__29539;
continue;
} else {
var geom_under_mouse = ((function (this$,event,state,this$__$1){
return (function cljsketch$mouse_tools$geom_under_mouse(){
return cljsketch.mouse_tools.geom_in_threshold.call(null,cljs.core.deref.call(null,self__.app_state).call(null,new cljs.core.Keyword(null,"world","world",-418292623)),new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(event),(16));
});})(this$,event,state,this$__$1))
;
var drag_geom_BANG_ = ((function (this$,event,state,this$__$1){
return (function cljsketch$mouse_tools$drag_geom_BANG_(geom,offset){
if((cljs.core.deref.call(null,geom) instanceof cljsketch.geom.Point)){
return cljs.core.reset_BANG_.call(null,geom,(new cljsketch.geom.Point(cljsketch.vector.vadd.call(null,new cljs.core.Keyword(null,"geom-drag-base","geom-drag-base",512691591).cljs$core$IFn$_invoke$arity$1(state).call(null,geom),offset),null,null,null)));
} else {
return null;
}
});})(this$,event,state,this$__$1))
;
var each = ((function (this$,event,state,this$__$1){
return (function cljsketch$mouse_tools$each(coll,f){
var seq__29523 = cljs.core.seq.call(null,coll);
var chunk__29524 = null;
var count__29525 = (0);
var i__29526 = (0);
while(true){
if((i__29526 < count__29525)){
var x = cljs.core._nth.call(null,chunk__29524,i__29526);
f.call(null,x);

var G__29540 = seq__29523;
var G__29541 = chunk__29524;
var G__29542 = count__29525;
var G__29543 = (i__29526 + (1));
seq__29523 = G__29540;
chunk__29524 = G__29541;
count__29525 = G__29542;
i__29526 = G__29543;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29523);
if(temp__4425__auto__){
var seq__29523__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29523__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__29523__$1);
var G__29544 = cljs.core.chunk_rest.call(null,seq__29523__$1);
var G__29545 = c__16854__auto__;
var G__29546 = cljs.core.count.call(null,c__16854__auto__);
var G__29547 = (0);
seq__29523 = G__29544;
chunk__29524 = G__29545;
count__29525 = G__29546;
i__29526 = G__29547;
continue;
} else {
var x = cljs.core.first.call(null,seq__29523__$1);
f.call(null,x);

var G__29548 = cljs.core.next.call(null,seq__29523__$1);
var G__29549 = null;
var G__29550 = (0);
var G__29551 = (0);
seq__29523 = G__29548;
chunk__29524 = G__29549;
count__29525 = G__29550;
i__29526 = G__29551;
continue;
}
} else {
return null;
}
}
break;
}
});})(this$,event,state,this$__$1))
;
var pred__29527 = cljs.core.contains_QMARK_;
var expr__29528 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(pred__29527.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),null], null), null),expr__29528))){
var pred__29530 = cljs.core._EQ_;
var expr__29531 = new cljs.core.Keyword(null,"button-state","button-state",-1211301176).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__29530.call(null,new cljs.core.Keyword(null,"up","up",-269712113),expr__29531))){
var geom = geom_under_mouse.call(null);
self__.highlight_BANG_.call(null,geom);

self__.redraw_canvas.call(null);

return state;
} else {
if(cljs.core.truth_(pred__29530.call(null,new cljs.core.Keyword(null,"down","down",1565245570),expr__29531))){
if(cljs.core.truth_((function (){var and__16057__auto__ = cljs.core.deref.call(null,self__.highlight);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.not.call(null,self__.selected_QMARK_.call(null,cljs.core.deref.call(null,self__.highlight)));
} else {
return and__16057__auto__;
}
})())){
self__.select_BANG_.call(null,cljs.core.deref.call(null,self__.highlight));

var G__29552 = this$__$1;
var G__29553 = event;
var G__29554 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"highlight-selected","highlight-selected",1581233776),true,new cljs.core.Keyword(null,"geom-drag-base","geom-drag-base",512691591),(((cljs.core.deref.call(null,cljs.core.deref.call(null,self__.highlight)) instanceof cljsketch.geom.Point))?cljs.core.assoc.call(null,new cljs.core.Keyword(null,"geom-drag-base","geom-drag-base",512691591).cljs$core$IFn$_invoke$arity$1(state),cljs.core.deref.call(null,self__.highlight),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,self__.highlight)))):new cljs.core.Keyword(null,"geom-drag-base","geom-drag-base",512691591).cljs$core$IFn$_invoke$arity$1(state)));
this$ = G__29552;
event = G__29553;
state = G__29554;
continue;
} else {
var offset = cljsketch.vector.vsub.call(null,new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"drag-base","drag-base",1288000678).cljs$core$IFn$_invoke$arity$1(state));
each.call(null,cljs.core.deref.call(null,self__.selection),((function (this$,event,state,offset,pred__29530,expr__29531,pred__29527,expr__29528,this$__$1){
return (function (p1__29507_SHARP_){
return drag_geom_BANG_.call(null,p1__29507_SHARP_,offset);
});})(this$,event,state,offset,pred__29530,expr__29531,pred__29527,expr__29528,this$__$1))
);

self__.redraw_canvas.call(null);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dragged","dragged",208354265),true);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29531)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__29527.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"down","down",1565245570),null], null), null),expr__29528))){
var geom = geom_under_mouse.call(null);
self__.highlight_BANG_.call(null,geom);

if(cljs.core.not.call(null,geom)){
self__.clear_selection_BANG_.call(null);
} else {
}

self__.redraw_canvas.call(null);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"drag-base","drag-base",1288000678),new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"button-state","button-state",-1211301176),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"dragged","dragged",208354265),false,new cljs.core.Keyword(null,"geom-drag-base","geom-drag-base",512691591),cljs.core.reduce.call(null,((function (this$,event,state,geom,pred__29527,expr__29528,this$__$1){
return (function (geom_drag_base,geom__$1){
if((cljs.core.deref.call(null,geom__$1) instanceof cljsketch.geom.Point)){
return cljs.core.assoc.call(null,geom_drag_base,geom__$1,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,geom__$1)));
} else {
return geom_drag_base;
}
});})(this$,event,state,geom,pred__29527,expr__29528,this$__$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,self__.selection))], null);
} else {
if(cljs.core.truth_(pred__29527.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"enter","enter",1792452624),null,new cljs.core.Keyword(null,"leave","leave",1022579443),null], null), null),expr__29528))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"highlight-selected","highlight-selected",1581233776).cljs$core$IFn$_invoke$arity$1(state))){
self__.unselect_BANG_.call(null,cljs.core.deref.call(null,self__.highlight));
} else {
if(cljs.core.truth_((function (){var and__16057__auto__ = cljs.core.deref.call(null,self__.highlight);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.not.call(null,state.call(null,new cljs.core.Keyword(null,"dragged","dragged",208354265)));
} else {
return and__16057__auto__;
}
})())){
self__.toggle_selected_BANG_.call(null,cljs.core.deref.call(null,self__.highlight));

if(cljs.core.not.call(null,self__.selected_QMARK_.call(null,cljs.core.deref.call(null,self__.highlight)))){
self__.highlight_BANG_.call(null,null);
} else {
}

self__.redraw_canvas.call(null);
} else {
}
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"button-state","button-state",-1211301176),new cljs.core.Keyword(null,"up","up",-269712113)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29528)].join('')));
}
}
}
}
break;
}
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k29509,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__29533 = (((k29509 instanceof cljs.core.Keyword))?k29509.fqn:null);
switch (G__29533) {
case "highlight":
return self__.highlight;

break;
case "toggle-selected!":
return self__.toggle_selected_BANG_;

break;
case "select!":
return self__.select_BANG_;

break;
case "app-state":
return self__.app_state;

break;
case "redraw-canvas":
return self__.redraw_canvas;

break;
case "selection":
return self__.selection;

break;
case "selected?":
return self__.selected_QMARK_;

break;
case "unselect!":
return self__.unselect_BANG_;

break;
case "clear-selection!":
return self__.clear_selection_BANG_;

break;
case "highlight!":
return self__.highlight_BANG_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29509,else__16667__auto__);

}
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.mouse-tools.SelectMoveTool{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-state","app-state",-1509963278),self__.app_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),self__.redraw_canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"highlight!","highlight!",-2009263393),self__.highlight_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"highlight","highlight",-800930873),self__.highlight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected?","selected?",-742502788),self__.selected_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"select!","select!",1013647471),self__.select_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unselect!","unselect!",1086899933),self__.unselect_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggle-selected!","toggle-selected!",-112565816),self__.toggle_selected_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),self__.clear_selection_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selection","selection",975998651),self__.selection],null))], null),self__.__extmap));
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
var self__ = this;
var this__16659__auto____$1 = this;
var h__16485__auto__ = self__.__hash;
if(!((h__16485__auto__ == null))){
return h__16485__auto__;
} else {
var h__16485__auto____$1 = cljs.core.hash_imap.call(null,this__16659__auto____$1);
self__.__hash = h__16485__auto____$1;

return h__16485__auto____$1;
}
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
var self__ = this;
var this__16660__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16057__auto__ = other__16661__auto__;
if(cljs.core.truth_(and__16057__auto__)){
var and__16057__auto____$1 = (this__16660__auto____$1.constructor === other__16661__auto__.constructor);
if(and__16057__auto____$1){
return cljs.core.equiv_map.call(null,this__16660__auto____$1,other__16661__auto__);
} else {
return and__16057__auto____$1;
}
} else {
return and__16057__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),null,new cljs.core.Keyword(null,"toggle-selected!","toggle-selected!",-112565816),null,new cljs.core.Keyword(null,"select!","select!",1013647471),null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),null,new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),null,new cljs.core.Keyword(null,"selection","selection",975998651),null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),null,new cljs.core.Keyword(null,"unselect!","unselect!",1086899933),null,new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),null,new cljs.core.Keyword(null,"highlight!","highlight!",-2009263393),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__29508){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__29534 = cljs.core.keyword_identical_QMARK_;
var expr__29535 = k__16672__auto__;
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(G__29508,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,G__29508,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"highlight!","highlight!",-2009263393),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,G__29508,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"highlight","highlight",-800930873),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,G__29508,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,G__29508,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"select!","select!",1013647471),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,G__29508,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"unselect!","unselect!",1086899933),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,G__29508,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"toggle-selected!","toggle-selected!",-112565816),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,G__29508,self__.clear_selection_BANG_,self__.selection,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,G__29508,self__.selection,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29534.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),expr__29535))){
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,G__29508,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__29508),null));
}
}
}
}
}
}
}
}
}
}
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-state","app-state",-1509963278),self__.app_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),self__.redraw_canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"highlight!","highlight!",-2009263393),self__.highlight_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"highlight","highlight",-800930873),self__.highlight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected?","selected?",-742502788),self__.selected_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"select!","select!",1013647471),self__.select_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unselect!","unselect!",1086899933),self__.unselect_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggle-selected!","toggle-selected!",-112565816),self__.toggle_selected_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),self__.clear_selection_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selection","selection",975998651),self__.selection],null))], null),self__.__extmap));
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__29508){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.mouse_tools.SelectMoveTool(self__.app_state,self__.redraw_canvas,self__.highlight_BANG_,self__.highlight,self__.selected_QMARK_,self__.select_BANG_,self__.unselect_BANG_,self__.toggle_selected_BANG_,self__.clear_selection_BANG_,self__.selection,G__29508,self__.__extmap,self__.__hash));
});

cljsketch.mouse_tools.SelectMoveTool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.mouse_tools.SelectMoveTool.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"redraw-canvas","redraw-canvas",960534044,null),new cljs.core.Symbol(null,"highlight!","highlight!",-368731866,null),new cljs.core.Symbol(null,"highlight","highlight",839600654,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"select!","select!",-1640788298,null),new cljs.core.Symbol(null,"unselect!","unselect!",-1567535836,null),new cljs.core.Symbol(null,"toggle-selected!","toggle-selected!",1527965711,null),new cljs.core.Symbol(null,"clear-selection!","clear-selection!",1452830758,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)], null);
});

cljsketch.mouse_tools.SelectMoveTool.cljs$lang$type = true;

cljsketch.mouse_tools.SelectMoveTool.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.mouse-tools/SelectMoveTool");
});

cljsketch.mouse_tools.SelectMoveTool.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.mouse-tools/SelectMoveTool");
});

cljsketch.mouse_tools.__GT_SelectMoveTool = (function cljsketch$mouse_tools$__GT_SelectMoveTool(app_state,redraw_canvas,highlight_BANG_,highlight,selected_QMARK_,select_BANG_,unselect_BANG_,toggle_selected_BANG_,clear_selection_BANG_,selection){
return (new cljsketch.mouse_tools.SelectMoveTool(app_state,redraw_canvas,highlight_BANG_,highlight,selected_QMARK_,select_BANG_,unselect_BANG_,toggle_selected_BANG_,clear_selection_BANG_,selection,null,null,null));
});

cljsketch.mouse_tools.map__GT_SelectMoveTool = (function cljsketch$mouse_tools$map__GT_SelectMoveTool(G__29510){
return (new cljsketch.mouse_tools.SelectMoveTool(new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(G__29510),new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483).cljs$core$IFn$_invoke$arity$1(G__29510),new cljs.core.Keyword(null,"highlight!","highlight!",-2009263393).cljs$core$IFn$_invoke$arity$1(G__29510),new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(G__29510),new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(G__29510),new cljs.core.Keyword(null,"select!","select!",1013647471).cljs$core$IFn$_invoke$arity$1(G__29510),new cljs.core.Keyword(null,"unselect!","unselect!",1086899933).cljs$core$IFn$_invoke$arity$1(G__29510),new cljs.core.Keyword(null,"toggle-selected!","toggle-selected!",-112565816).cljs$core$IFn$_invoke$arity$1(G__29510),new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769).cljs$core$IFn$_invoke$arity$1(G__29510),new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(G__29510),null,cljs.core.dissoc.call(null,G__29510,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),new cljs.core.Keyword(null,"highlight!","highlight!",-2009263393),new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"select!","select!",1013647471),new cljs.core.Keyword(null,"unselect!","unselect!",1086899933),new cljs.core.Keyword(null,"toggle-selected!","toggle-selected!",-112565816),new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),new cljs.core.Keyword(null,"selection","selection",975998651)),null));
});


/**
* @constructor
* @param {*} app_state
* @param {*} redraw_canvas
* @param {*} add_point
* @param {*} clear_selection_BANG_
* @param {*} select_BANG_
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.mouse_tools.DrawPointTool = (function (app_state,redraw_canvas,add_point,clear_selection_BANG_,select_BANG_,__meta,__extmap,__hash){
this.app_state = app_state;
this.redraw_canvas = redraw_canvas;
this.add_point = add_point;
this.clear_selection_BANG_ = clear_selection_BANG_;
this.select_BANG_ = select_BANG_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.mouse_tools.DrawPointTool.prototype.cljsketch$mouse_tools$MouseTool$ = true;

cljsketch.mouse_tools.DrawPointTool.prototype.cljsketch$mouse_tools$MouseTool$handle_event$arity$3 = (function (this$,event,state){
var self__ = this;
var this$__$1 = this;
var pred__29559 = cljs.core._EQ_;
var expr__29560 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(pred__29559.call(null,new cljs.core.Keyword(null,"down","down",1565245570),expr__29560))){
var ageom = self__.add_point.call(null,new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(event));
self__.clear_selection_BANG_.call(null);

self__.select_BANG_.call(null,ageom);

self__.redraw_canvas.call(null);

return state;
} else {
return null;
}
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k29557,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__29562 = (((k29557 instanceof cljs.core.Keyword))?k29557.fqn:null);
switch (G__29562) {
case "app-state":
return self__.app_state;

break;
case "redraw-canvas":
return self__.redraw_canvas;

break;
case "add-point":
return self__.add_point;

break;
case "clear-selection!":
return self__.clear_selection_BANG_;

break;
case "select!":
return self__.select_BANG_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29557,else__16667__auto__);

}
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.mouse-tools.DrawPointTool{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-state","app-state",-1509963278),self__.app_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),self__.redraw_canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"add-point","add-point",-1861575067),self__.add_point],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),self__.clear_selection_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"select!","select!",1013647471),self__.select_BANG_],null))], null),self__.__extmap));
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.mouse_tools.DrawPointTool(self__.app_state,self__.redraw_canvas,self__.add_point,self__.clear_selection_BANG_,self__.select_BANG_,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
var self__ = this;
var this__16659__auto____$1 = this;
var h__16485__auto__ = self__.__hash;
if(!((h__16485__auto__ == null))){
return h__16485__auto__;
} else {
var h__16485__auto____$1 = cljs.core.hash_imap.call(null,this__16659__auto____$1);
self__.__hash = h__16485__auto____$1;

return h__16485__auto____$1;
}
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
var self__ = this;
var this__16660__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16057__auto__ = other__16661__auto__;
if(cljs.core.truth_(and__16057__auto__)){
var and__16057__auto____$1 = (this__16660__auto____$1.constructor === other__16661__auto__.constructor);
if(and__16057__auto____$1){
return cljs.core.equiv_map.call(null,this__16660__auto____$1,other__16661__auto__);
} else {
return and__16057__auto____$1;
}
} else {
return and__16057__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"add-point","add-point",-1861575067),null,new cljs.core.Keyword(null,"select!","select!",1013647471),null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),null,new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),null,new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.mouse_tools.DrawPointTool(self__.app_state,self__.redraw_canvas,self__.add_point,self__.clear_selection_BANG_,self__.select_BANG_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__29556){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__29563 = cljs.core.keyword_identical_QMARK_;
var expr__29564 = k__16672__auto__;
if(cljs.core.truth_(pred__29563.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),expr__29564))){
return (new cljsketch.mouse_tools.DrawPointTool(G__29556,self__.redraw_canvas,self__.add_point,self__.clear_selection_BANG_,self__.select_BANG_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29563.call(null,new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),expr__29564))){
return (new cljsketch.mouse_tools.DrawPointTool(self__.app_state,G__29556,self__.add_point,self__.clear_selection_BANG_,self__.select_BANG_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29563.call(null,new cljs.core.Keyword(null,"add-point","add-point",-1861575067),expr__29564))){
return (new cljsketch.mouse_tools.DrawPointTool(self__.app_state,self__.redraw_canvas,G__29556,self__.clear_selection_BANG_,self__.select_BANG_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29563.call(null,new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),expr__29564))){
return (new cljsketch.mouse_tools.DrawPointTool(self__.app_state,self__.redraw_canvas,self__.add_point,G__29556,self__.select_BANG_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29563.call(null,new cljs.core.Keyword(null,"select!","select!",1013647471),expr__29564))){
return (new cljsketch.mouse_tools.DrawPointTool(self__.app_state,self__.redraw_canvas,self__.add_point,self__.clear_selection_BANG_,G__29556,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.mouse_tools.DrawPointTool(self__.app_state,self__.redraw_canvas,self__.add_point,self__.clear_selection_BANG_,self__.select_BANG_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__29556),null));
}
}
}
}
}
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-state","app-state",-1509963278),self__.app_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),self__.redraw_canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"add-point","add-point",-1861575067),self__.add_point],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),self__.clear_selection_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"select!","select!",1013647471),self__.select_BANG_],null))], null),self__.__extmap));
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__29556){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.mouse_tools.DrawPointTool(self__.app_state,self__.redraw_canvas,self__.add_point,self__.clear_selection_BANG_,self__.select_BANG_,G__29556,self__.__extmap,self__.__hash));
});

cljsketch.mouse_tools.DrawPointTool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.mouse_tools.DrawPointTool.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"redraw-canvas","redraw-canvas",960534044,null),new cljs.core.Symbol(null,"add-point","add-point",-221043540,null),new cljs.core.Symbol(null,"clear-selection!","clear-selection!",1452830758,null),new cljs.core.Symbol(null,"select!","select!",-1640788298,null)], null);
});

cljsketch.mouse_tools.DrawPointTool.cljs$lang$type = true;

cljsketch.mouse_tools.DrawPointTool.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.mouse-tools/DrawPointTool");
});

cljsketch.mouse_tools.DrawPointTool.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.mouse-tools/DrawPointTool");
});

cljsketch.mouse_tools.__GT_DrawPointTool = (function cljsketch$mouse_tools$__GT_DrawPointTool(app_state,redraw_canvas,add_point,clear_selection_BANG_,select_BANG_){
return (new cljsketch.mouse_tools.DrawPointTool(app_state,redraw_canvas,add_point,clear_selection_BANG_,select_BANG_,null,null,null));
});

cljsketch.mouse_tools.map__GT_DrawPointTool = (function cljsketch$mouse_tools$map__GT_DrawPointTool(G__29558){
return (new cljsketch.mouse_tools.DrawPointTool(new cljs.core.Keyword(null,"app-state","app-state",-1509963278).cljs$core$IFn$_invoke$arity$1(G__29558),new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483).cljs$core$IFn$_invoke$arity$1(G__29558),new cljs.core.Keyword(null,"add-point","add-point",-1861575067).cljs$core$IFn$_invoke$arity$1(G__29558),new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769).cljs$core$IFn$_invoke$arity$1(G__29558),new cljs.core.Keyword(null,"select!","select!",1013647471).cljs$core$IFn$_invoke$arity$1(G__29558),null,cljs.core.dissoc.call(null,G__29558,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.Keyword(null,"redraw-canvas","redraw-canvas",-679997483),new cljs.core.Keyword(null,"add-point","add-point",-1861575067),new cljs.core.Keyword(null,"clear-selection!","clear-selection!",-187700769),new cljs.core.Keyword(null,"select!","select!",1013647471)),null));
});


//# sourceMappingURL=mouse_tools.js.map?rel=1441069392698