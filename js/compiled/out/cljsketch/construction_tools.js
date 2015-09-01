// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.construction_tools');
goog.require('cljs.core');
goog.require('cljsketch.geom');
goog.require('cljsketch.refgeom');
cljsketch.construction_tools.gtype = (function cljsketch$construction_tools$gtype(geom){
if((function (){var G__28741 = cljs.core.deref.call(null,geom);
if(G__28741){
var bit__16743__auto__ = null;
if(cljs.core.truth_((function (){var or__16069__auto__ = bit__16743__auto__;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return G__28741.cljsketch$refgeom$IRefGeom$;
}
})())){
return true;
} else {
if((!G__28741.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljsketch.refgeom.IRefGeom,G__28741);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljsketch.refgeom.IRefGeom,G__28741);
}
})()){
return cljsketch.refgeom.geom_type.call(null,cljs.core.deref.call(null,geom));
} else {
return cljs.core.type.call(null,cljs.core.deref.call(null,geom));
}
});
cljsketch.construction_tools.types = (function cljsketch$construction_tools$types(geoms){
return cljs.core.map.call(null,cljsketch.construction_tools.gtype,geoms);
});
cljsketch.construction_tools.first_object_of_type = (function cljsketch$construction_tools$first_object_of_type(typ,geoms){
return cljs.core.some.call(null,(function (p1__28742_SHARP_){
if(cljs.core._EQ_.call(null,cljsketch.construction_tools.gtype.call(null,p1__28742_SHARP_),typ)){
return p1__28742_SHARP_;
} else {
return null;
}
}),geoms);
});

cljsketch.construction_tools.IConstructionTool = (function (){var obj28744 = {};
return obj28744;
})();

/**
 * true iff the objects in a collection fit the needs of this tool
 */
cljsketch.construction_tools.selection_fits = (function cljsketch$construction_tools$selection_fits(this$,selected){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$construction_tools$IConstructionTool$selection_fits$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$construction_tools$IConstructionTool$selection_fits$arity$2(this$,selected);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.construction_tools.selection_fits[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.construction_tools.selection_fits["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConstructionTool.selection-fits",this$);
}
}
})().call(null,this$,selected);
}
});

/**
 * executes this tool on the current selection, returning the newly
 * constructed object
 */
cljsketch.construction_tools.construct = (function cljsketch$construction_tools$construct(this$,selected){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$construction_tools$IConstructionTool$construct$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$construction_tools$IConstructionTool$construct$arity$2(this$,selected);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.construction_tools.construct[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.construction_tools.construct["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConstructionTool.construct",this$);
}
}
})().call(null,this$,selected);
}
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.construction_tools.SegmentConstructionTool = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k28746,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__28748 = k28746;
switch (G__28748) {
default:
return cljs.core.get.call(null,self__.__extmap,k28746,else__16667__auto__);

}
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.construction-tools.SegmentConstructionTool{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.construction_tools.SegmentConstructionTool(self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.construction_tools.SegmentConstructionTool(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__28745){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__28749 = cljs.core.keyword_identical_QMARK_;
var expr__28750 = k__16672__auto__;
return (new cljsketch.construction_tools.SegmentConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__28745),null));
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$ = true;

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$selection_fits$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Point], true)));
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.refgeom.PointPointSegment(cljs.core.first.call(null,selected),cljs.core.second.call(null,selected),null,null,null));
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__28745){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.SegmentConstructionTool(G__28745,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.construction_tools.SegmentConstructionTool.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljsketch.construction_tools.SegmentConstructionTool.cljs$lang$type = true;

cljsketch.construction_tools.SegmentConstructionTool.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.construction-tools/SegmentConstructionTool");
});

cljsketch.construction_tools.SegmentConstructionTool.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.construction-tools/SegmentConstructionTool");
});

cljsketch.construction_tools.__GT_SegmentConstructionTool = (function cljsketch$construction_tools$__GT_SegmentConstructionTool(){
return (new cljsketch.construction_tools.SegmentConstructionTool(null,null,null));
});

cljsketch.construction_tools.map__GT_SegmentConstructionTool = (function cljsketch$construction_tools$map__GT_SegmentConstructionTool(G__28747){
return (new cljsketch.construction_tools.SegmentConstructionTool(null,cljs.core.dissoc.call(null,G__28747),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.construction_tools.LineConstructionTool = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k28754,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__28756 = k28754;
switch (G__28756) {
default:
return cljs.core.get.call(null,self__.__extmap,k28754,else__16667__auto__);

}
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.construction-tools.LineConstructionTool{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.construction_tools.LineConstructionTool(self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.construction_tools.LineConstructionTool(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__28753){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__28757 = cljs.core.keyword_identical_QMARK_;
var expr__28758 = k__16672__auto__;
return (new cljsketch.construction_tools.LineConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__28753),null));
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$ = true;

cljsketch.construction_tools.LineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$selection_fits$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Point], true)));
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.refgeom.PointPointLine(cljs.core.first.call(null,selected),cljs.core.second.call(null,selected),null,null,null));
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__28753){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.LineConstructionTool(G__28753,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.construction_tools.LineConstructionTool.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljsketch.construction_tools.LineConstructionTool.cljs$lang$type = true;

cljsketch.construction_tools.LineConstructionTool.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.construction-tools/LineConstructionTool");
});

cljsketch.construction_tools.LineConstructionTool.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.construction-tools/LineConstructionTool");
});

cljsketch.construction_tools.__GT_LineConstructionTool = (function cljsketch$construction_tools$__GT_LineConstructionTool(){
return (new cljsketch.construction_tools.LineConstructionTool(null,null,null));
});

cljsketch.construction_tools.map__GT_LineConstructionTool = (function cljsketch$construction_tools$map__GT_LineConstructionTool(G__28755){
return (new cljsketch.construction_tools.LineConstructionTool(null,cljs.core.dissoc.call(null,G__28755),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.construction_tools.ParallelLineConstructionTool = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k28762,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__28764 = k28762;
switch (G__28764) {
default:
return cljs.core.get.call(null,self__.__extmap,k28762,else__16667__auto__);

}
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.construction-tools.ParallelLineConstructionTool{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.construction_tools.ParallelLineConstructionTool(self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.construction_tools.ParallelLineConstructionTool(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__28761){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__28765 = cljs.core.keyword_identical_QMARK_;
var expr__28766 = k__16672__auto__;
return (new cljsketch.construction_tools.ParallelLineConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__28761),null));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$ = true;

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$selection_fits$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Line,cljsketch.geom.Point], true)));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
var pt = cljsketch.construction_tools.first_object_of_type.call(null,cljsketch.geom.Point,selected);
var ln = cljsketch.construction_tools.first_object_of_type.call(null,cljsketch.geom.Line,selected);
return (new cljsketch.refgeom.PointParallelLine(pt,ln,null,null,null));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__28761){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.ParallelLineConstructionTool(G__28761,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.construction_tools.ParallelLineConstructionTool.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljsketch.construction_tools.ParallelLineConstructionTool.cljs$lang$type = true;

cljsketch.construction_tools.ParallelLineConstructionTool.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.construction-tools/ParallelLineConstructionTool");
});

cljsketch.construction_tools.ParallelLineConstructionTool.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.construction-tools/ParallelLineConstructionTool");
});

cljsketch.construction_tools.__GT_ParallelLineConstructionTool = (function cljsketch$construction_tools$__GT_ParallelLineConstructionTool(){
return (new cljsketch.construction_tools.ParallelLineConstructionTool(null,null,null));
});

cljsketch.construction_tools.map__GT_ParallelLineConstructionTool = (function cljsketch$construction_tools$map__GT_ParallelLineConstructionTool(G__28763){
return (new cljsketch.construction_tools.ParallelLineConstructionTool(null,cljs.core.dissoc.call(null,G__28763),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.construction_tools.PerpendicularLineConstructionTool = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k28770,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__28772 = k28770;
switch (G__28772) {
default:
return cljs.core.get.call(null,self__.__extmap,k28770,else__16667__auto__);

}
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.construction-tools.PerpendicularLineConstructionTool{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__28769){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__28773 = cljs.core.keyword_identical_QMARK_;
var expr__28774 = k__16672__auto__;
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__28769),null));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$ = true;

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$selection_fits$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Line,cljsketch.geom.Point], true)));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
var pt = cljsketch.construction_tools.first_object_of_type.call(null,cljsketch.geom.Point,selected);
var ln = cljsketch.construction_tools.first_object_of_type.call(null,cljsketch.geom.Line,selected);
return (new cljsketch.refgeom.PointPerpendicularLine(pt,ln,null,null,null));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__28769){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(G__28769,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.cljs$lang$type = true;

cljsketch.construction_tools.PerpendicularLineConstructionTool.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.construction-tools/PerpendicularLineConstructionTool");
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.construction-tools/PerpendicularLineConstructionTool");
});

cljsketch.construction_tools.__GT_PerpendicularLineConstructionTool = (function cljsketch$construction_tools$__GT_PerpendicularLineConstructionTool(){
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(null,null,null));
});

cljsketch.construction_tools.map__GT_PerpendicularLineConstructionTool = (function cljsketch$construction_tools$map__GT_PerpendicularLineConstructionTool(G__28771){
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(null,cljs.core.dissoc.call(null,G__28771),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.construction_tools.LineIntersectionConstructionTool = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k28778,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__28780 = k28778;
switch (G__28780) {
default:
return cljs.core.get.call(null,self__.__extmap,k28778,else__16667__auto__);

}
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.construction-tools.LineIntersectionConstructionTool{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.construction_tools.LineIntersectionConstructionTool(self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.construction_tools.LineIntersectionConstructionTool(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__28777){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__28781 = cljs.core.keyword_identical_QMARK_;
var expr__28782 = k__16672__auto__;
return (new cljsketch.construction_tools.LineIntersectionConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__28777),null));
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$ = true;

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$selection_fits$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Line], true)));
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.refgeom.LineLinePoint(cljs.core.first.call(null,selected),cljs.core.second.call(null,selected),null,null,null));
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__28777){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.LineIntersectionConstructionTool(G__28777,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.construction_tools.LineIntersectionConstructionTool.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljsketch.construction_tools.LineIntersectionConstructionTool.cljs$lang$type = true;

cljsketch.construction_tools.LineIntersectionConstructionTool.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.construction-tools/LineIntersectionConstructionTool");
});

cljsketch.construction_tools.LineIntersectionConstructionTool.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.construction-tools/LineIntersectionConstructionTool");
});

cljsketch.construction_tools.__GT_LineIntersectionConstructionTool = (function cljsketch$construction_tools$__GT_LineIntersectionConstructionTool(){
return (new cljsketch.construction_tools.LineIntersectionConstructionTool(null,null,null));
});

cljsketch.construction_tools.map__GT_LineIntersectionConstructionTool = (function cljsketch$construction_tools$map__GT_LineIntersectionConstructionTool(G__28779){
return (new cljsketch.construction_tools.LineIntersectionConstructionTool(null,cljs.core.dissoc.call(null,G__28779),null));
});


//# sourceMappingURL=construction_tools.js.map?rel=1441068391027