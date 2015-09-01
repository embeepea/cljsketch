// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.refgeom');
goog.require('cljs.core');
goog.require('cljsketch.vector');
goog.require('cljsketch.geom');

cljsketch.refgeom.IRefGeom = (function (){var obj24833 = {};
return obj24833;
})();

/**
 * return a geom for this refgeom
 */
cljsketch.refgeom.toGeom = (function cljsketch$refgeom$toGeom(this$,geommap){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$refgeom$IRefGeom$toGeom$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$refgeom$IRefGeom$toGeom$arity$2(this$,geommap);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.refgeom.toGeom[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.refgeom.toGeom["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRefGeom.toGeom",this$);
}
}
})().call(null,this$,geommap);
}
});

/**
 * return a sequence of atoms referring to the objects
 * (Geoms or RefGeoms) that this RefGeom depends on
 */
cljsketch.refgeom.deps = (function cljsketch$refgeom$deps(this$){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$refgeom$IRefGeom$deps$arity$1;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$refgeom$IRefGeom$deps$arity$1(this$);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.refgeom.deps[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.refgeom.deps["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRefGeom.deps",this$);
}
}
})().call(null,this$);
}
});

/**
 * 
 */
cljsketch.refgeom.geom_type = (function cljsketch$refgeom$geom_type(this$){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$refgeom$IRefGeom$geom_type$arity$1;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$refgeom$IRefGeom$geom_type$arity$1(this$);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.refgeom.geom_type[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.refgeom.geom_type["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRefGeom.geom-type",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.refgeom.Point = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.refgeom.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.refgeom.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24835,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24837 = (((k24835 instanceof cljs.core.Keyword))?k24835.fqn:null);
switch (G__24837) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24835,else__16667__auto__);

}
});

cljsketch.refgeom.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.refgeom.Point{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

cljsketch.refgeom.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.refgeom.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.refgeom.Point(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.refgeom.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.refgeom.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.refgeom.Point.prototype.cljsketch$refgeom$IRefGeom$ = true;

cljsketch.refgeom.Point.prototype.cljsketch$refgeom$IRefGeom$deps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljsketch.refgeom.Point.prototype.cljsketch$refgeom$IRefGeom$geom_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.geom.Point;
});

cljsketch.refgeom.Point.prototype.cljsketch$refgeom$IRefGeom$toGeom$arity$2 = (function (this$,geommap){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.geom.Point(self__.p,null,null,null));
});

cljsketch.refgeom.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.refgeom.Point(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.refgeom.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24834){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24838 = cljs.core.keyword_identical_QMARK_;
var expr__24839 = k__16672__auto__;
if(cljs.core.truth_(pred__24838.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__24839))){
return (new cljsketch.refgeom.Point(G__24834,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.Point(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24834),null));
}
});

cljsketch.refgeom.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

cljsketch.refgeom.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24834){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.Point(self__.p,G__24834,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.refgeom.Point.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

cljsketch.refgeom.Point.cljs$lang$type = true;

cljsketch.refgeom.Point.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.refgeom/Point");
});

cljsketch.refgeom.Point.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.refgeom/Point");
});

cljsketch.refgeom.__GT_Point = (function cljsketch$refgeom$__GT_Point(p){
return (new cljsketch.refgeom.Point(p,null,null,null));
});

cljsketch.refgeom.map__GT_Point = (function cljsketch$refgeom$map__GT_Point(G__24836){
return (new cljsketch.refgeom.Point(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__24836),null,cljs.core.dissoc.call(null,G__24836,new cljs.core.Keyword(null,"p","p",151049309)),null));
});


/**
* @constructor
* @param {*} pt0
* @param {*} pt1
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.refgeom.PointPointSegment = (function (pt0,pt1,__meta,__extmap,__hash){
this.pt0 = pt0;
this.pt1 = pt1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.refgeom.PointPointSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24843,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24845 = (((k24843 instanceof cljs.core.Keyword))?k24843.fqn:null);
switch (G__24845) {
case "pt0":
return self__.pt0;

break;
case "pt1":
return self__.pt1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24843,else__16667__auto__);

}
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.refgeom.PointPointSegment{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt0","pt0",-1173831129),self__.pt0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt1","pt1",911706224),self__.pt1],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.refgeom.PointPointSegment(self__.pt0,self__.pt1,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.refgeom.PointPointSegment.prototype.cljsketch$refgeom$IRefGeom$ = true;

cljsketch.refgeom.PointPointSegment.prototype.cljsketch$refgeom$IRefGeom$deps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.pt0,self__.pt1], null);
});

cljsketch.refgeom.PointPointSegment.prototype.cljsketch$refgeom$IRefGeom$geom_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.geom.Segment;
});

cljsketch.refgeom.PointPointSegment.prototype.cljsketch$refgeom$IRefGeom$toGeom$arity$2 = (function (this$,geommap){
var self__ = this;
var this$__$1 = this;
var gpt0 = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.pt0));
var gpt1 = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.pt1));
return (new cljsketch.geom.Segment(gpt0.call(null,(0)),gpt0.call(null,(1)),gpt1.call(null,(0)),gpt1.call(null,(1)),null,null,null));
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt0","pt0",-1173831129),null,new cljs.core.Keyword(null,"pt1","pt1",911706224),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.refgeom.PointPointSegment(self__.pt0,self__.pt1,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24842){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24846 = cljs.core.keyword_identical_QMARK_;
var expr__24847 = k__16672__auto__;
if(cljs.core.truth_(pred__24846.call(null,new cljs.core.Keyword(null,"pt0","pt0",-1173831129),expr__24847))){
return (new cljsketch.refgeom.PointPointSegment(G__24842,self__.pt1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24846.call(null,new cljs.core.Keyword(null,"pt1","pt1",911706224),expr__24847))){
return (new cljsketch.refgeom.PointPointSegment(self__.pt0,G__24842,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.PointPointSegment(self__.pt0,self__.pt1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24842),null));
}
}
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt0","pt0",-1173831129),self__.pt0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt1","pt1",911706224),self__.pt1],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24842){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.PointPointSegment(self__.pt0,self__.pt1,G__24842,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.refgeom.PointPointSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pt0","pt0",466700398,null),new cljs.core.Symbol(null,"pt1","pt1",-1742729545,null)], null);
});

cljsketch.refgeom.PointPointSegment.cljs$lang$type = true;

cljsketch.refgeom.PointPointSegment.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.refgeom/PointPointSegment");
});

cljsketch.refgeom.PointPointSegment.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.refgeom/PointPointSegment");
});

cljsketch.refgeom.__GT_PointPointSegment = (function cljsketch$refgeom$__GT_PointPointSegment(pt0,pt1){
return (new cljsketch.refgeom.PointPointSegment(pt0,pt1,null,null,null));
});

cljsketch.refgeom.map__GT_PointPointSegment = (function cljsketch$refgeom$map__GT_PointPointSegment(G__24844){
return (new cljsketch.refgeom.PointPointSegment(new cljs.core.Keyword(null,"pt0","pt0",-1173831129).cljs$core$IFn$_invoke$arity$1(G__24844),new cljs.core.Keyword(null,"pt1","pt1",911706224).cljs$core$IFn$_invoke$arity$1(G__24844),null,cljs.core.dissoc.call(null,G__24844,new cljs.core.Keyword(null,"pt0","pt0",-1173831129),new cljs.core.Keyword(null,"pt1","pt1",911706224)),null));
});


/**
* @constructor
* @param {*} pt0
* @param {*} pt1
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.refgeom.PointPointLine = (function (pt0,pt1,__meta,__extmap,__hash){
this.pt0 = pt0;
this.pt1 = pt1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.refgeom.PointPointLine.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24851,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24853 = (((k24851 instanceof cljs.core.Keyword))?k24851.fqn:null);
switch (G__24853) {
case "pt0":
return self__.pt0;

break;
case "pt1":
return self__.pt1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24851,else__16667__auto__);

}
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.refgeom.PointPointLine{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt0","pt0",-1173831129),self__.pt0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt1","pt1",911706224),self__.pt1],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.refgeom.PointPointLine(self__.pt0,self__.pt1,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.refgeom.PointPointLine.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.refgeom.PointPointLine.prototype.cljsketch$refgeom$IRefGeom$ = true;

cljsketch.refgeom.PointPointLine.prototype.cljsketch$refgeom$IRefGeom$deps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.pt0,self__.pt1], null);
});

cljsketch.refgeom.PointPointLine.prototype.cljsketch$refgeom$IRefGeom$geom_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.geom.Line;
});

cljsketch.refgeom.PointPointLine.prototype.cljsketch$refgeom$IRefGeom$toGeom$arity$2 = (function (this$,geommap){
var self__ = this;
var this$__$1 = this;
var p0 = (new cljsketch.vector.AffineVector(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.pt0)),null,null,null)).cljsketch$vector$IAffine$toProjectiveVector$arity$1(null);
var p1 = (new cljsketch.vector.AffineVector(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.pt1)),null,null,null)).cljsketch$vector$IAffine$toProjectiveVector$arity$1(null);
return (new cljsketch.geom.Line(cljsketch.vector.point_point_line.call(null,p0,p1),null,null,null));
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt0","pt0",-1173831129),null,new cljs.core.Keyword(null,"pt1","pt1",911706224),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.refgeom.PointPointLine(self__.pt0,self__.pt1,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24850){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24854 = cljs.core.keyword_identical_QMARK_;
var expr__24855 = k__16672__auto__;
if(cljs.core.truth_(pred__24854.call(null,new cljs.core.Keyword(null,"pt0","pt0",-1173831129),expr__24855))){
return (new cljsketch.refgeom.PointPointLine(G__24850,self__.pt1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24854.call(null,new cljs.core.Keyword(null,"pt1","pt1",911706224),expr__24855))){
return (new cljsketch.refgeom.PointPointLine(self__.pt0,G__24850,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.PointPointLine(self__.pt0,self__.pt1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24850),null));
}
}
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt0","pt0",-1173831129),self__.pt0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt1","pt1",911706224),self__.pt1],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24850){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.PointPointLine(self__.pt0,self__.pt1,G__24850,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.refgeom.PointPointLine.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pt0","pt0",466700398,null),new cljs.core.Symbol(null,"pt1","pt1",-1742729545,null)], null);
});

cljsketch.refgeom.PointPointLine.cljs$lang$type = true;

cljsketch.refgeom.PointPointLine.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.refgeom/PointPointLine");
});

cljsketch.refgeom.PointPointLine.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.refgeom/PointPointLine");
});

cljsketch.refgeom.__GT_PointPointLine = (function cljsketch$refgeom$__GT_PointPointLine(pt0,pt1){
return (new cljsketch.refgeom.PointPointLine(pt0,pt1,null,null,null));
});

cljsketch.refgeom.map__GT_PointPointLine = (function cljsketch$refgeom$map__GT_PointPointLine(G__24852){
return (new cljsketch.refgeom.PointPointLine(new cljs.core.Keyword(null,"pt0","pt0",-1173831129).cljs$core$IFn$_invoke$arity$1(G__24852),new cljs.core.Keyword(null,"pt1","pt1",911706224).cljs$core$IFn$_invoke$arity$1(G__24852),null,cljs.core.dissoc.call(null,G__24852,new cljs.core.Keyword(null,"pt0","pt0",-1173831129),new cljs.core.Keyword(null,"pt1","pt1",911706224)),null));
});

cljsketch.refgeom.lineal_projective_vector = (function cljsketch$refgeom$lineal_projective_vector(geommap,ln_sg){
var pred__24861 = cljs.core._EQ_;
var expr__24862 = cljsketch.refgeom.geom_type.call(null,cljs.core.deref.call(null,ln_sg));
if(cljs.core.truth_(pred__24861.call(null,cljsketch.geom.Line,expr__24862))){
return new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(geommap.call(null,ln_sg));
} else {
if(cljs.core.truth_(pred__24861.call(null,cljsketch.geom.Segment,expr__24862))){
var sg = geommap.call(null,ln_sg);
var p0 = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x0","x0",410843387).cljs$core$IFn$_invoke$arity$1(sg),new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(sg)], null),null,null,null)));
var p1 = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(sg),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(sg)], null),null,null,null)));
return cljsketch.vector.point_point_line.call(null,p0,p1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24862)].join('')));
}
}
});

/**
* @constructor
* @param {*} pt
* @param {*} ln_sg
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.refgeom.PointPerpendicularLine = (function (pt,ln_sg,__meta,__extmap,__hash){
this.pt = pt;
this.ln_sg = ln_sg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24865,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24867 = (((k24865 instanceof cljs.core.Keyword))?k24865.fqn:null);
switch (G__24867) {
case "pt":
return self__.pt;

break;
case "ln-sg":
return self__.ln_sg;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24865,else__16667__auto__);

}
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.refgeom.PointPerpendicularLine{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102),self__.ln_sg],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,self__.ln_sg,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.refgeom.PointPerpendicularLine.prototype.cljsketch$refgeom$IRefGeom$ = true;

cljsketch.refgeom.PointPerpendicularLine.prototype.cljsketch$refgeom$IRefGeom$deps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.pt,self__.ln_sg], null);
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljsketch$refgeom$IRefGeom$geom_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.geom.Line;
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljsketch$refgeom$IRefGeom$toGeom$arity$2 = (function (this$,geommap){
var self__ = this;
var this$__$1 = this;
var ptv = (new cljsketch.vector.AffineVector(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.pt)),null,null,null)).cljsketch$vector$IAffine$toProjectiveVector$arity$1(null);
var lnv = cljsketch.refgeom.lineal_projective_vector.call(null,geommap,self__.ln_sg);
return (new cljsketch.geom.Line(cljsketch.vector.point_line_perpendicular.call(null,ptv,lnv),null,null,null));
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),null,new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,self__.ln_sg,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24864){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24868 = cljs.core.keyword_identical_QMARK_;
var expr__24869 = k__16672__auto__;
if(cljs.core.truth_(pred__24868.call(null,new cljs.core.Keyword(null,"pt","pt",556460867),expr__24869))){
return (new cljsketch.refgeom.PointPerpendicularLine(G__24864,self__.ln_sg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24868.call(null,new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102),expr__24869))){
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,G__24864,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,self__.ln_sg,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24864),null));
}
}
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102),self__.ln_sg],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24864){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,self__.ln_sg,G__24864,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.refgeom.PointPerpendicularLine.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Symbol(null,"ln-sg","ln-sg",1484839425,null)], null);
});

cljsketch.refgeom.PointPerpendicularLine.cljs$lang$type = true;

cljsketch.refgeom.PointPerpendicularLine.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.refgeom/PointPerpendicularLine");
});

cljsketch.refgeom.PointPerpendicularLine.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.refgeom/PointPerpendicularLine");
});

cljsketch.refgeom.__GT_PointPerpendicularLine = (function cljsketch$refgeom$__GT_PointPerpendicularLine(pt,ln_sg){
return (new cljsketch.refgeom.PointPerpendicularLine(pt,ln_sg,null,null,null));
});

cljsketch.refgeom.map__GT_PointPerpendicularLine = (function cljsketch$refgeom$map__GT_PointPerpendicularLine(G__24866){
return (new cljsketch.refgeom.PointPerpendicularLine(new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(G__24866),new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102).cljs$core$IFn$_invoke$arity$1(G__24866),null,cljs.core.dissoc.call(null,G__24866,new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102)),null));
});


/**
* @constructor
* @param {*} pt
* @param {*} ln_sg
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.refgeom.PointParallelLine = (function (pt,ln_sg,__meta,__extmap,__hash){
this.pt = pt;
this.ln_sg = ln_sg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.refgeom.PointParallelLine.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24873,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24875 = (((k24873 instanceof cljs.core.Keyword))?k24873.fqn:null);
switch (G__24875) {
case "pt":
return self__.pt;

break;
case "ln-sg":
return self__.ln_sg;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24873,else__16667__auto__);

}
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.refgeom.PointParallelLine{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102),self__.ln_sg],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.refgeom.PointParallelLine(self__.pt,self__.ln_sg,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.refgeom.PointParallelLine.prototype.cljsketch$refgeom$IRefGeom$ = true;

cljsketch.refgeom.PointParallelLine.prototype.cljsketch$refgeom$IRefGeom$deps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.pt,self__.ln_sg], null);
});

cljsketch.refgeom.PointParallelLine.prototype.cljsketch$refgeom$IRefGeom$geom_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.geom.Line;
});

cljsketch.refgeom.PointParallelLine.prototype.cljsketch$refgeom$IRefGeom$toGeom$arity$2 = (function (this$,geommap){
var self__ = this;
var this$__$1 = this;
var ptv = (new cljsketch.vector.AffineVector(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.pt)),null,null,null)).cljsketch$vector$IAffine$toProjectiveVector$arity$1(null);
var lnv = cljsketch.refgeom.lineal_projective_vector.call(null,geommap,self__.ln_sg);
return (new cljsketch.geom.Line(cljsketch.vector.point_line_parallel.call(null,ptv,lnv),null,null,null));
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),null,new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.refgeom.PointParallelLine(self__.pt,self__.ln_sg,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24872){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24876 = cljs.core.keyword_identical_QMARK_;
var expr__24877 = k__16672__auto__;
if(cljs.core.truth_(pred__24876.call(null,new cljs.core.Keyword(null,"pt","pt",556460867),expr__24877))){
return (new cljsketch.refgeom.PointParallelLine(G__24872,self__.ln_sg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24876.call(null,new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102),expr__24877))){
return (new cljsketch.refgeom.PointParallelLine(self__.pt,G__24872,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.PointParallelLine(self__.pt,self__.ln_sg,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24872),null));
}
}
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102),self__.ln_sg],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24872){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.PointParallelLine(self__.pt,self__.ln_sg,G__24872,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.refgeom.PointParallelLine.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Symbol(null,"ln-sg","ln-sg",1484839425,null)], null);
});

cljsketch.refgeom.PointParallelLine.cljs$lang$type = true;

cljsketch.refgeom.PointParallelLine.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.refgeom/PointParallelLine");
});

cljsketch.refgeom.PointParallelLine.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.refgeom/PointParallelLine");
});

cljsketch.refgeom.__GT_PointParallelLine = (function cljsketch$refgeom$__GT_PointParallelLine(pt,ln_sg){
return (new cljsketch.refgeom.PointParallelLine(pt,ln_sg,null,null,null));
});

cljsketch.refgeom.map__GT_PointParallelLine = (function cljsketch$refgeom$map__GT_PointParallelLine(G__24874){
return (new cljsketch.refgeom.PointParallelLine(new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(G__24874),new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102).cljs$core$IFn$_invoke$arity$1(G__24874),null,cljs.core.dissoc.call(null,G__24874,new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"ln-sg","ln-sg",-155692102)),null));
});


/**
* @constructor
* @param {*} ln0
* @param {*} ln1
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.refgeom.LineLinePoint = (function (ln0,ln1,__meta,__extmap,__hash){
this.ln0 = ln0;
this.ln1 = ln1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.refgeom.LineLinePoint.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24881,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24883 = (((k24881 instanceof cljs.core.Keyword))?k24881.fqn:null);
switch (G__24883) {
case "ln0":
return self__.ln0;

break;
case "ln1":
return self__.ln1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24881,else__16667__auto__);

}
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.refgeom.LineLinePoint{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln0","ln0",-861457078),self__.ln0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln1","ln1",1640565593),self__.ln1],null))], null),self__.__extmap));
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.refgeom.LineLinePoint(self__.ln0,self__.ln1,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.refgeom.LineLinePoint.prototype.cljsketch$refgeom$IRefGeom$ = true;

cljsketch.refgeom.LineLinePoint.prototype.cljsketch$refgeom$IRefGeom$deps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ln0,self__.ln1], null);
});

cljsketch.refgeom.LineLinePoint.prototype.cljsketch$refgeom$IRefGeom$geom_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.geom.Point;
});

cljsketch.refgeom.LineLinePoint.prototype.cljsketch$refgeom$IRefGeom$toGeom$arity$2 = (function (this$,geommap){
var self__ = this;
var this$__$1 = this;
var lnv0 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.ln0));
var lnv1 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.ln1));
var c = cljsketch.vector.line_line_intersection.call(null,lnv0,lnv1);
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,c.u),(0))){
return (new cljsketch.geom.Null(null,null,null));
} else {
return (new cljsketch.geom.Point(new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(cljsketch.vector.toAffineVector.call(null,c)),null,null,null));
}
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ln0","ln0",-861457078),null,new cljs.core.Keyword(null,"ln1","ln1",1640565593),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.refgeom.LineLinePoint(self__.ln0,self__.ln1,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24880){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24884 = cljs.core.keyword_identical_QMARK_;
var expr__24885 = k__16672__auto__;
if(cljs.core.truth_(pred__24884.call(null,new cljs.core.Keyword(null,"ln0","ln0",-861457078),expr__24885))){
return (new cljsketch.refgeom.LineLinePoint(G__24880,self__.ln1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24884.call(null,new cljs.core.Keyword(null,"ln1","ln1",1640565593),expr__24885))){
return (new cljsketch.refgeom.LineLinePoint(self__.ln0,G__24880,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.LineLinePoint(self__.ln0,self__.ln1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24880),null));
}
}
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln0","ln0",-861457078),self__.ln0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln1","ln1",1640565593),self__.ln1],null))], null),self__.__extmap));
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24880){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.LineLinePoint(self__.ln0,self__.ln1,G__24880,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.refgeom.LineLinePoint.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ln0","ln0",779074449,null),new cljs.core.Symbol(null,"ln1","ln1",-1013870176,null)], null);
});

cljsketch.refgeom.LineLinePoint.cljs$lang$type = true;

cljsketch.refgeom.LineLinePoint.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.refgeom/LineLinePoint");
});

cljsketch.refgeom.LineLinePoint.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.refgeom/LineLinePoint");
});

cljsketch.refgeom.__GT_LineLinePoint = (function cljsketch$refgeom$__GT_LineLinePoint(ln0,ln1){
return (new cljsketch.refgeom.LineLinePoint(ln0,ln1,null,null,null));
});

cljsketch.refgeom.map__GT_LineLinePoint = (function cljsketch$refgeom$map__GT_LineLinePoint(G__24882){
return (new cljsketch.refgeom.LineLinePoint(new cljs.core.Keyword(null,"ln0","ln0",-861457078).cljs$core$IFn$_invoke$arity$1(G__24882),new cljs.core.Keyword(null,"ln1","ln1",1640565593).cljs$core$IFn$_invoke$arity$1(G__24882),null,cljs.core.dissoc.call(null,G__24882,new cljs.core.Keyword(null,"ln0","ln0",-861457078),new cljs.core.Keyword(null,"ln1","ln1",1640565593)),null));
});


/**
* @constructor
* @param {*} sg
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.refgeom.SegmentMidPoint = (function (sg,__meta,__extmap,__hash){
this.sg = sg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24889,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24891 = (((k24889 instanceof cljs.core.Keyword))?k24889.fqn:null);
switch (G__24891) {
case "sg":
return self__.sg;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24889,else__16667__auto__);

}
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.refgeom.SegmentMidPoint{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sg","sg",1587785771),self__.sg],null))], null),self__.__extmap));
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.refgeom.SegmentMidPoint(self__.sg,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.refgeom.SegmentMidPoint.prototype.cljsketch$refgeom$IRefGeom$ = true;

cljsketch.refgeom.SegmentMidPoint.prototype.cljsketch$refgeom$IRefGeom$deps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.sg], null);
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljsketch$refgeom$IRefGeom$geom_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.geom.Point;
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljsketch$refgeom$IRefGeom$toGeom$arity$2 = (function (this$,geommap){
var self__ = this;
var this$__$1 = this;
var s = geommap.call(null,self__.sg);
var x0 = new cljs.core.Keyword(null,"x0","x0",410843387).cljs$core$IFn$_invoke$arity$1(s);
var y0 = new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(s);
var x1 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(s);
var y1 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(s);
return (new cljsketch.geom.Point(cljsketch.vector.vmul.call(null,cljsketch.vector.vadd.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,y0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null)),0.5),null,null,null));
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sg","sg",1587785771),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.refgeom.SegmentMidPoint(self__.sg,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24888){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24892 = cljs.core.keyword_identical_QMARK_;
var expr__24893 = k__16672__auto__;
if(cljs.core.truth_(pred__24892.call(null,new cljs.core.Keyword(null,"sg","sg",1587785771),expr__24893))){
return (new cljsketch.refgeom.SegmentMidPoint(G__24888,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.SegmentMidPoint(self__.sg,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24888),null));
}
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sg","sg",1587785771),self__.sg],null))], null),self__.__extmap));
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24888){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.SegmentMidPoint(self__.sg,G__24888,self__.__extmap,self__.__hash));
});

cljsketch.refgeom.SegmentMidPoint.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.refgeom.SegmentMidPoint.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sg","sg",-1066649998,null)], null);
});

cljsketch.refgeom.SegmentMidPoint.cljs$lang$type = true;

cljsketch.refgeom.SegmentMidPoint.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.refgeom/SegmentMidPoint");
});

cljsketch.refgeom.SegmentMidPoint.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.refgeom/SegmentMidPoint");
});

cljsketch.refgeom.__GT_SegmentMidPoint = (function cljsketch$refgeom$__GT_SegmentMidPoint(sg){
return (new cljsketch.refgeom.SegmentMidPoint(sg,null,null,null));
});

cljsketch.refgeom.map__GT_SegmentMidPoint = (function cljsketch$refgeom$map__GT_SegmentMidPoint(G__24890){
return (new cljsketch.refgeom.SegmentMidPoint(new cljs.core.Keyword(null,"sg","sg",1587785771).cljs$core$IFn$_invoke$arity$1(G__24890),null,cljs.core.dissoc.call(null,G__24890,new cljs.core.Keyword(null,"sg","sg",1587785771)),null));
});

cljsketch.refgeom.geommap = (function cljsketch$refgeom$geommap(atoms){
return cljs.core.reduce.call(null,(function (gmap,at){
return cljs.core.assoc.call(null,gmap,at,cljsketch.refgeom.toGeom.call(null,cljs.core.deref.call(null,at),gmap));
}),cljs.core.PersistentArrayMap.EMPTY,atoms);
});
cljsketch.refgeom.traverse_dfs = (function cljsketch$refgeom$traverse_dfs(g,s){
while(true){
if(!(cljs.core.sequential_QMARK_.call(null,s))){
var G__24896 = g;
var G__24897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
g = G__24896;
s = G__24897;
continue;
} else {
var vertices = cljs.core.PersistentVector.EMPTY;
var explored = cljs.core.set.call(null,s);
var frontier = s;
while(true){
if(cljs.core.empty_QMARK_.call(null,frontier)){
return vertices;
} else {
var v = cljs.core.peek.call(null,frontier);
var neighbors = g.call(null,v);
var G__24898 = cljs.core.conj.call(null,vertices,v);
var G__24899 = cljs.core.into.call(null,explored,neighbors);
var G__24900 = cljs.core.into.call(null,cljs.core.pop.call(null,frontier),cljs.core.remove.call(null,explored,neighbors));
vertices = G__24898;
explored = G__24899;
frontier = G__24900;
continue;
}
break;
}
}
break;
}
});
cljsketch.refgeom.dependencies = (function cljsketch$refgeom$dependencies(at){
return cljsketch.refgeom.traverse_dfs.call(null,(function (p1__24901_SHARP_){
return cljsketch.refgeom.deps.call(null,cljs.core.deref.call(null,p1__24901_SHARP_));
}),at);
});
cljsketch.refgeom.inverse = (function cljsketch$refgeom$inverse(world){
return cljs.core.reduce.call(null,(function (gmap,dependent){
return cljs.core.reduce.call(null,(function (gmap__$1,dependee){
return cljs.core.assoc.call(null,gmap__$1,dependee,cljs.core.conj.call(null,gmap__$1.call(null,dependee),dependent));
}),cljs.core.assoc.call(null,gmap,dependent,cljs.core.PersistentVector.EMPTY),cljsketch.refgeom.deps.call(null,cljs.core.deref.call(null,dependent)));
}),cljs.core.PersistentArrayMap.EMPTY,world);
});
cljsketch.refgeom.dependents = (function cljsketch$refgeom$dependents(world,at){
return cljsketch.refgeom.traverse_dfs.call(null,cljsketch.refgeom.inverse.call(null,world),at);
});

//# sourceMappingURL=refgeom.js.map?rel=1441119484454