// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.geom');
goog.require('cljs.core');
goog.require('cljsketch.vector');

cljsketch.geom.IGeom = (function (){var obj72740 = {};
return obj72740;
})();

/**
 * render this geom in the given graphics context
 */
cljsketch.geom.render = (function cljsketch$geom$render(this$,ctx){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$geom$IGeom$render$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$geom$IGeom$render$arity$2(this$,ctx);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.geom.render[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.geom.render["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGeom.render",this$);
}
}
})().call(null,this$,ctx);
}
});


/**
* @constructor
* @param {*} x
* @param {*} y
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.geom.Point = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.geom.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.geom.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k72742,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__72744 = (((k72742 instanceof cljs.core.Keyword))?k72742.fqn:null);
switch (G__72744) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k72742,else__16667__auto__);

}
});

cljsketch.geom.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.geom.Point{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

cljsketch.geom.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.geom.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.geom.Point(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.geom.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.geom.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.geom.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.geom.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.geom.Point(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.geom.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__72741){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__72745 = cljs.core.keyword_identical_QMARK_;
var expr__72746 = k__16672__auto__;
if(cljs.core.truth_(pred__72745.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__72746))){
return (new cljsketch.geom.Point(G__72741,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__72745.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__72746))){
return (new cljsketch.geom.Point(self__.x,G__72741,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Point(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__72741),null));
}
}
});

cljsketch.geom.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

cljsketch.geom.Point.prototype.cljsketch$geom$IGeom$ = true;

cljsketch.geom.Point.prototype.cljsketch$geom$IGeom$render$arity$2 = (function (this$,ctx){
var self__ = this;
var this$__$1 = this;
return null;
});

cljsketch.geom.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__72741){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Point(self__.x,self__.y,G__72741,self__.__extmap,self__.__hash));
});

cljsketch.geom.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.geom.Point.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

cljsketch.geom.Point.cljs$lang$type = true;

cljsketch.geom.Point.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.geom/Point");
});

cljsketch.geom.Point.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.geom/Point");
});

cljsketch.geom.__GT_Point = (function cljsketch$geom$__GT_Point(x,y){
return (new cljsketch.geom.Point(x,y,null,null,null));
});

cljsketch.geom.map__GT_Point = (function cljsketch$geom$map__GT_Point(G__72743){
return (new cljsketch.geom.Point(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__72743),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__72743),null,cljs.core.dissoc.call(null,G__72743,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),null));
});


/**
* @constructor
* @param {*} u
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.geom.Line = (function (u,__meta,__extmap,__hash){
this.u = u;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.geom.Line.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.geom.Line.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k72750,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__72752 = (((k72750 instanceof cljs.core.Keyword))?k72750.fqn:null);
switch (G__72752) {
case "u":
return self__.u;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k72750,else__16667__auto__);

}
});

cljsketch.geom.Line.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.geom.Line{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null))], null),self__.__extmap));
});

cljsketch.geom.Line.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.geom.Line.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.geom.Line(self__.u,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.geom.Line.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.geom.Line.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.geom.Line.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.geom.Line.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"u","u",-1156634785),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.geom.Line(self__.u,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.geom.Line.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__72749){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__72753 = cljs.core.keyword_identical_QMARK_;
var expr__72754 = k__16672__auto__;
if(cljs.core.truth_(pred__72753.call(null,new cljs.core.Keyword(null,"u","u",-1156634785),expr__72754))){
return (new cljsketch.geom.Line(G__72749,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Line(self__.u,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__72749),null));
}
});

cljsketch.geom.Line.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null))], null),self__.__extmap));
});

cljsketch.geom.Line.prototype.cljsketch$geom$IGeom$ = true;

cljsketch.geom.Line.prototype.cljsketch$geom$IGeom$render$arity$2 = (function (this$,ctx){
var self__ = this;
var this$__$1 = this;
return null;
});

cljsketch.geom.Line.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__72749){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Line(self__.u,G__72749,self__.__extmap,self__.__hash));
});

cljsketch.geom.Line.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.geom.Line.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u","u",483896742,null)], null);
});

cljsketch.geom.Line.cljs$lang$type = true;

cljsketch.geom.Line.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.geom/Line");
});

cljsketch.geom.Line.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.geom/Line");
});

cljsketch.geom.__GT_Line = (function cljsketch$geom$__GT_Line(u){
return (new cljsketch.geom.Line(u,null,null,null));
});

cljsketch.geom.map__GT_Line = (function cljsketch$geom$map__GT_Line(G__72751){
return (new cljsketch.geom.Line(new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(G__72751),null,cljs.core.dissoc.call(null,G__72751,new cljs.core.Keyword(null,"u","u",-1156634785)),null));
});


/**
* @constructor
* @param {*} x0
* @param {*} y0
* @param {*} x1
* @param {*} y1
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.geom.Segment = (function (x0,y0,x1,y1,__meta,__extmap,__hash){
this.x0 = x0;
this.y0 = y0;
this.x1 = x1;
this.y1 = y1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.geom.Segment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.geom.Segment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k72758,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__72760 = (((k72758 instanceof cljs.core.Keyword))?k72758.fqn:null);
switch (G__72760) {
case "x0":
return self__.x0;

break;
case "y0":
return self__.y0;

break;
case "x1":
return self__.x1;

break;
case "y1":
return self__.y1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k72758,else__16667__auto__);

}
});

cljsketch.geom.Segment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.geom.Segment{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x0","x0",410843387),self__.x0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y0","y0",111454807),self__.y0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x1","x1",-1863922247),self__.x1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y1","y1",589123466),self__.y1],null))], null),self__.__extmap));
});

cljsketch.geom.Segment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.geom.Segment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,self__.y1,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.geom.Segment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.geom.Segment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.geom.Segment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.geom.Segment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y1","y1",589123466),null,new cljs.core.Keyword(null,"y0","y0",111454807),null,new cljs.core.Keyword(null,"x1","x1",-1863922247),null,new cljs.core.Keyword(null,"x0","x0",410843387),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,self__.y1,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.geom.Segment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__72757){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__72761 = cljs.core.keyword_identical_QMARK_;
var expr__72762 = k__16672__auto__;
if(cljs.core.truth_(pred__72761.call(null,new cljs.core.Keyword(null,"x0","x0",410843387),expr__72762))){
return (new cljsketch.geom.Segment(G__72757,self__.y0,self__.x1,self__.y1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__72761.call(null,new cljs.core.Keyword(null,"y0","y0",111454807),expr__72762))){
return (new cljsketch.geom.Segment(self__.x0,G__72757,self__.x1,self__.y1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__72761.call(null,new cljs.core.Keyword(null,"x1","x1",-1863922247),expr__72762))){
return (new cljsketch.geom.Segment(self__.x0,self__.y0,G__72757,self__.y1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__72761.call(null,new cljs.core.Keyword(null,"y1","y1",589123466),expr__72762))){
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,G__72757,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,self__.y1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__72757),null));
}
}
}
}
});

cljsketch.geom.Segment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x0","x0",410843387),self__.x0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y0","y0",111454807),self__.y0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x1","x1",-1863922247),self__.x1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y1","y1",589123466),self__.y1],null))], null),self__.__extmap));
});

cljsketch.geom.Segment.prototype.cljsketch$geom$IGeom$ = true;

cljsketch.geom.Segment.prototype.cljsketch$geom$IGeom$render$arity$2 = (function (this$,ctx){
var self__ = this;
var this$__$1 = this;
return null;
});

cljsketch.geom.Segment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__72757){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,self__.y1,G__72757,self__.__extmap,self__.__hash));
});

cljsketch.geom.Segment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.geom.Segment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x0","x0",2051374914,null),new cljs.core.Symbol(null,"y0","y0",1751986334,null),new cljs.core.Symbol(null,"x1","x1",-223390720,null),new cljs.core.Symbol(null,"y1","y1",-2065312303,null)], null);
});

cljsketch.geom.Segment.cljs$lang$type = true;

cljsketch.geom.Segment.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.geom/Segment");
});

cljsketch.geom.Segment.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.geom/Segment");
});

cljsketch.geom.__GT_Segment = (function cljsketch$geom$__GT_Segment(x0,y0,x1,y1){
return (new cljsketch.geom.Segment(x0,y0,x1,y1,null,null,null));
});

cljsketch.geom.map__GT_Segment = (function cljsketch$geom$map__GT_Segment(G__72759){
return (new cljsketch.geom.Segment(new cljs.core.Keyword(null,"x0","x0",410843387).cljs$core$IFn$_invoke$arity$1(G__72759),new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(G__72759),new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(G__72759),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(G__72759),null,cljs.core.dissoc.call(null,G__72759,new cljs.core.Keyword(null,"x0","x0",410843387),new cljs.core.Keyword(null,"y0","y0",111454807),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y1","y1",589123466)),null));
});


//# sourceMappingURL=geom.js.map?rel=1440959396290