// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.refgeom');
goog.require('cljs.core');
goog.require('cljsketch.vector');
goog.require('cljsketch.geom');

cljsketch.refgeom.IRefGeom = (function (){var obj29053 = {};
return obj29053;
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

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k29055,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__29057 = (((k29055 instanceof cljs.core.Keyword))?k29055.fqn:null);
switch (G__29057) {
case "pt0":
return self__.pt0;

break;
case "pt1":
return self__.pt1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29055,else__16667__auto__);

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
return cljs.core.list(new cljs.core.Symbol(null,"pt0","pt0",466700398,null),new cljs.core.Symbol(null,"pt1","pt1",-1742729545,null));
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

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__29054){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__29058 = cljs.core.keyword_identical_QMARK_;
var expr__29059 = k__16672__auto__;
if(cljs.core.truth_(pred__29058.call(null,new cljs.core.Keyword(null,"pt0","pt0",-1173831129),expr__29059))){
return (new cljsketch.refgeom.PointPointSegment(G__29054,self__.pt1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29058.call(null,new cljs.core.Keyword(null,"pt1","pt1",911706224),expr__29059))){
return (new cljsketch.refgeom.PointPointSegment(self__.pt0,G__29054,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.PointPointSegment(self__.pt0,self__.pt1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__29054),null));
}
}
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt0","pt0",-1173831129),self__.pt0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt1","pt1",911706224),self__.pt1],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPointSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__29054){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.PointPointSegment(self__.pt0,self__.pt1,G__29054,self__.__extmap,self__.__hash));
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

cljsketch.refgeom.map__GT_PointPointSegment = (function cljsketch$refgeom$map__GT_PointPointSegment(G__29056){
return (new cljsketch.refgeom.PointPointSegment(new cljs.core.Keyword(null,"pt0","pt0",-1173831129).cljs$core$IFn$_invoke$arity$1(G__29056),new cljs.core.Keyword(null,"pt1","pt1",911706224).cljs$core$IFn$_invoke$arity$1(G__29056),null,cljs.core.dissoc.call(null,G__29056,new cljs.core.Keyword(null,"pt0","pt0",-1173831129),new cljs.core.Keyword(null,"pt1","pt1",911706224)),null));
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

cljsketch.refgeom.PointPointLine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k29063,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__29065 = (((k29063 instanceof cljs.core.Keyword))?k29063.fqn:null);
switch (G__29065) {
case "pt0":
return self__.pt0;

break;
case "pt1":
return self__.pt1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29063,else__16667__auto__);

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
return cljs.core.list(new cljs.core.Symbol(null,"pt0","pt0",466700398,null),new cljs.core.Symbol(null,"pt1","pt1",-1742729545,null));
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

cljsketch.refgeom.PointPointLine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__29062){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__29066 = cljs.core.keyword_identical_QMARK_;
var expr__29067 = k__16672__auto__;
if(cljs.core.truth_(pred__29066.call(null,new cljs.core.Keyword(null,"pt0","pt0",-1173831129),expr__29067))){
return (new cljsketch.refgeom.PointPointLine(G__29062,self__.pt1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29066.call(null,new cljs.core.Keyword(null,"pt1","pt1",911706224),expr__29067))){
return (new cljsketch.refgeom.PointPointLine(self__.pt0,G__29062,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.PointPointLine(self__.pt0,self__.pt1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__29062),null));
}
}
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt0","pt0",-1173831129),self__.pt0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt1","pt1",911706224),self__.pt1],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPointLine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__29062){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.PointPointLine(self__.pt0,self__.pt1,G__29062,self__.__extmap,self__.__hash));
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

cljsketch.refgeom.map__GT_PointPointLine = (function cljsketch$refgeom$map__GT_PointPointLine(G__29064){
return (new cljsketch.refgeom.PointPointLine(new cljs.core.Keyword(null,"pt0","pt0",-1173831129).cljs$core$IFn$_invoke$arity$1(G__29064),new cljs.core.Keyword(null,"pt1","pt1",911706224).cljs$core$IFn$_invoke$arity$1(G__29064),null,cljs.core.dissoc.call(null,G__29064,new cljs.core.Keyword(null,"pt0","pt0",-1173831129),new cljs.core.Keyword(null,"pt1","pt1",911706224)),null));
});


/**
* @constructor
* @param {*} pt
* @param {*} ln
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.refgeom.PointPerpendicularLine = (function (pt,ln,__meta,__extmap,__hash){
this.pt = pt;
this.ln = ln;
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

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k29071,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__29073 = (((k29071 instanceof cljs.core.Keyword))?k29071.fqn:null);
switch (G__29073) {
case "pt":
return self__.pt;

break;
case "ln":
return self__.ln;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29071,else__16667__auto__);

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
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.refgeom.PointPerpendicularLine{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln","ln",1974894440),self__.ln],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,self__.ln,self__.__meta,self__.__extmap,self__.__hash));
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
return cljs.core.list(new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Symbol(null,"ln","ln",-679541329,null));
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
var lnv = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.ln));
return (new cljsketch.geom.Line(cljsketch.vector.point_line_perpendicular.call(null,ptv,lnv),null,null,null));
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),null,new cljs.core.Keyword(null,"ln","ln",1974894440),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,self__.ln,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__29070){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__29074 = cljs.core.keyword_identical_QMARK_;
var expr__29075 = k__16672__auto__;
if(cljs.core.truth_(pred__29074.call(null,new cljs.core.Keyword(null,"pt","pt",556460867),expr__29075))){
return (new cljsketch.refgeom.PointPerpendicularLine(G__29070,self__.ln,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29074.call(null,new cljs.core.Keyword(null,"ln","ln",1974894440),expr__29075))){
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,G__29070,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,self__.ln,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__29070),null));
}
}
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln","ln",1974894440),self__.ln],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointPerpendicularLine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__29070){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.PointPerpendicularLine(self__.pt,self__.ln,G__29070,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Symbol(null,"ln","ln",-679541329,null)], null);
});

cljsketch.refgeom.PointPerpendicularLine.cljs$lang$type = true;

cljsketch.refgeom.PointPerpendicularLine.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.refgeom/PointPerpendicularLine");
});

cljsketch.refgeom.PointPerpendicularLine.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.refgeom/PointPerpendicularLine");
});

cljsketch.refgeom.__GT_PointPerpendicularLine = (function cljsketch$refgeom$__GT_PointPerpendicularLine(pt,ln){
return (new cljsketch.refgeom.PointPerpendicularLine(pt,ln,null,null,null));
});

cljsketch.refgeom.map__GT_PointPerpendicularLine = (function cljsketch$refgeom$map__GT_PointPerpendicularLine(G__29072){
return (new cljsketch.refgeom.PointPerpendicularLine(new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(G__29072),new cljs.core.Keyword(null,"ln","ln",1974894440).cljs$core$IFn$_invoke$arity$1(G__29072),null,cljs.core.dissoc.call(null,G__29072,new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"ln","ln",1974894440)),null));
});


/**
* @constructor
* @param {*} pt
* @param {*} ln
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.refgeom.PointParallelLine = (function (pt,ln,__meta,__extmap,__hash){
this.pt = pt;
this.ln = ln;
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

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k29079,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__29081 = (((k29079 instanceof cljs.core.Keyword))?k29079.fqn:null);
switch (G__29081) {
case "pt":
return self__.pt;

break;
case "ln":
return self__.ln;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29079,else__16667__auto__);

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
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.refgeom.PointParallelLine{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln","ln",1974894440),self__.ln],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.refgeom.PointParallelLine(self__.pt,self__.ln,self__.__meta,self__.__extmap,self__.__hash));
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
return cljs.core.list(new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Symbol(null,"ln","ln",-679541329,null));
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
var lnv = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(geommap.call(null,self__.ln));
return (new cljsketch.geom.Line(cljsketch.vector.point_line_parallel.call(null,ptv,lnv),null,null,null));
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),null,new cljs.core.Keyword(null,"ln","ln",1974894440),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.refgeom.PointParallelLine(self__.pt,self__.ln,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__29078){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__29082 = cljs.core.keyword_identical_QMARK_;
var expr__29083 = k__16672__auto__;
if(cljs.core.truth_(pred__29082.call(null,new cljs.core.Keyword(null,"pt","pt",556460867),expr__29083))){
return (new cljsketch.refgeom.PointParallelLine(G__29078,self__.ln,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29082.call(null,new cljs.core.Keyword(null,"ln","ln",1974894440),expr__29083))){
return (new cljsketch.refgeom.PointParallelLine(self__.pt,G__29078,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.PointParallelLine(self__.pt,self__.ln,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__29078),null));
}
}
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln","ln",1974894440),self__.ln],null))], null),self__.__extmap));
});

cljsketch.refgeom.PointParallelLine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__29078){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.PointParallelLine(self__.pt,self__.ln,G__29078,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Symbol(null,"ln","ln",-679541329,null)], null);
});

cljsketch.refgeom.PointParallelLine.cljs$lang$type = true;

cljsketch.refgeom.PointParallelLine.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.refgeom/PointParallelLine");
});

cljsketch.refgeom.PointParallelLine.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.refgeom/PointParallelLine");
});

cljsketch.refgeom.__GT_PointParallelLine = (function cljsketch$refgeom$__GT_PointParallelLine(pt,ln){
return (new cljsketch.refgeom.PointParallelLine(pt,ln,null,null,null));
});

cljsketch.refgeom.map__GT_PointParallelLine = (function cljsketch$refgeom$map__GT_PointParallelLine(G__29080){
return (new cljsketch.refgeom.PointParallelLine(new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(G__29080),new cljs.core.Keyword(null,"ln","ln",1974894440).cljs$core$IFn$_invoke$arity$1(G__29080),null,cljs.core.dissoc.call(null,G__29080,new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"ln","ln",1974894440)),null));
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

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k29087,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__29089 = (((k29087 instanceof cljs.core.Keyword))?k29087.fqn:null);
switch (G__29089) {
case "ln0":
return self__.ln0;

break;
case "ln1":
return self__.ln1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29087,else__16667__auto__);

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
return cljs.core.list(new cljs.core.Symbol(null,"ln0","ln0",779074449,null),new cljs.core.Symbol(null,"ln1","ln1",-1013870176,null));
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

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__29086){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__29090 = cljs.core.keyword_identical_QMARK_;
var expr__29091 = k__16672__auto__;
if(cljs.core.truth_(pred__29090.call(null,new cljs.core.Keyword(null,"ln0","ln0",-861457078),expr__29091))){
return (new cljsketch.refgeom.LineLinePoint(G__29086,self__.ln1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29090.call(null,new cljs.core.Keyword(null,"ln1","ln1",1640565593),expr__29091))){
return (new cljsketch.refgeom.LineLinePoint(self__.ln0,G__29086,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.refgeom.LineLinePoint(self__.ln0,self__.ln1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__29086),null));
}
}
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln0","ln0",-861457078),self__.ln0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ln1","ln1",1640565593),self__.ln1],null))], null),self__.__extmap));
});

cljsketch.refgeom.LineLinePoint.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__29086){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.refgeom.LineLinePoint(self__.ln0,self__.ln1,G__29086,self__.__extmap,self__.__hash));
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

cljsketch.refgeom.map__GT_LineLinePoint = (function cljsketch$refgeom$map__GT_LineLinePoint(G__29088){
return (new cljsketch.refgeom.LineLinePoint(new cljs.core.Keyword(null,"ln0","ln0",-861457078).cljs$core$IFn$_invoke$arity$1(G__29088),new cljs.core.Keyword(null,"ln1","ln1",1640565593).cljs$core$IFn$_invoke$arity$1(G__29088),null,cljs.core.dissoc.call(null,G__29088,new cljs.core.Keyword(null,"ln0","ln0",-861457078),new cljs.core.Keyword(null,"ln1","ln1",1640565593)),null));
});

cljsketch.refgeom.geommap = (function cljsketch$refgeom$geommap(atoms){
return cljs.core.reduce.call(null,(function (gmap,at){
return cljs.core.assoc.call(null,gmap,at,(((function (){var G__29095 = cljs.core.deref.call(null,at);
if(G__29095){
var bit__16743__auto__ = null;
if(cljs.core.truth_((function (){var or__16069__auto__ = bit__16743__auto__;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return G__29095.cljsketch$geom$IGeom$;
}
})())){
return true;
} else {
if((!G__29095.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljsketch.geom.IGeom,G__29095);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljsketch.geom.IGeom,G__29095);
}
})())?cljs.core.deref.call(null,at):cljsketch.refgeom.toGeom.call(null,cljs.core.deref.call(null,at),gmap)));
}),cljs.core.PersistentArrayMap.EMPTY,atoms);
});

//# sourceMappingURL=refgeom.js.map?rel=1441068948128