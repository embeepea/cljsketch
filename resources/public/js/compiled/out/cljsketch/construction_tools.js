// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.construction_tools');
goog.require('cljs.core');
cljsketch.construction_tools.types = (function cljsketch$construction_tools$types(geoms){
return cljs.core.map.call(null,(function (p1__68501_SHARP_){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__68501_SHARP_));
}),geoms);
});
cljsketch.construction_tools.first_object_of_type = (function cljsketch$construction_tools$first_object_of_type(type,geoms){
return cljs.core.some.call(null,(function (p1__68502_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__68502_SHARP_)),type)){
return p1__68502_SHARP_;
} else {
return null;
}
}),geoms);
});

cljsketch.construction_tools.IConstructionTool = (function (){var obj68504 = {};
return obj68504;
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

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k68506,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__68508 = k68506;
switch (G__68508) {
default:
return cljs.core.get.call(null,self__.__extmap,k68506,else__16667__auto__);

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

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__68505){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__68509 = cljs.core.keyword_identical_QMARK_;
var expr__68510 = k__16672__auto__;
return (new cljsketch.construction_tools.SegmentConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__68505),null));
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
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),null], null), null)));
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,selected),cljs.core.second.call(null,selected)], null)], null);
});

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__68505){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.SegmentConstructionTool(G__68505,self__.__extmap,self__.__hash));
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

cljsketch.construction_tools.map__GT_SegmentConstructionTool = (function cljsketch$construction_tools$map__GT_SegmentConstructionTool(G__68507){
return (new cljsketch.construction_tools.SegmentConstructionTool(null,cljs.core.dissoc.call(null,G__68507),null));
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

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k68514,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__68516 = k68514;
switch (G__68516) {
default:
return cljs.core.get.call(null,self__.__extmap,k68514,else__16667__auto__);

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

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__68513){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__68517 = cljs.core.keyword_identical_QMARK_;
var expr__68518 = k__16672__auto__;
return (new cljsketch.construction_tools.LineConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__68513),null));
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
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),null], null), null)));
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,selected),cljs.core.second.call(null,selected)], null)], null);
});

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__68513){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.LineConstructionTool(G__68513,self__.__extmap,self__.__hash));
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

cljsketch.construction_tools.map__GT_LineConstructionTool = (function cljsketch$construction_tools$map__GT_LineConstructionTool(G__68515){
return (new cljsketch.construction_tools.LineConstructionTool(null,cljs.core.dissoc.call(null,G__68515),null));
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

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k68522,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__68524 = k68522;
switch (G__68524) {
default:
return cljs.core.get.call(null,self__.__extmap,k68522,else__16667__auto__);

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

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__68521){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__68525 = cljs.core.keyword_identical_QMARK_;
var expr__68526 = k__16672__auto__;
return (new cljsketch.construction_tools.ParallelLineConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__68521),null));
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
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"point","point",1813198264),null], null), null)));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
var pt = cljsketch.construction_tools.first_object_of_type.call(null,new cljs.core.Keyword(null,"point","point",1813198264),selected);
var ln = cljsketch.construction_tools.first_object_of_type.call(null,new cljs.core.Keyword(null,"line","line",212345235),selected);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"point","point",1813198264),pt,new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390),ln], null);
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__68521){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.ParallelLineConstructionTool(G__68521,self__.__extmap,self__.__hash));
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

cljsketch.construction_tools.map__GT_ParallelLineConstructionTool = (function cljsketch$construction_tools$map__GT_ParallelLineConstructionTool(G__68523){
return (new cljsketch.construction_tools.ParallelLineConstructionTool(null,cljs.core.dissoc.call(null,G__68523),null));
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

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k68530,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__68532 = k68530;
switch (G__68532) {
default:
return cljs.core.get.call(null,self__.__extmap,k68530,else__16667__auto__);

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

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__68529){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__68533 = cljs.core.keyword_identical_QMARK_;
var expr__68534 = k__16672__auto__;
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__68529),null));
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
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"point","point",1813198264),null], null), null)));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
var pt = cljsketch.construction_tools.first_object_of_type.call(null,new cljs.core.Keyword(null,"point","point",1813198264),selected);
var ln = cljsketch.construction_tools.first_object_of_type.call(null,new cljs.core.Keyword(null,"line","line",212345235),selected);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"point","point",1813198264),pt,new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920),ln], null);
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__68529){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(G__68529,self__.__extmap,self__.__hash));
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

cljsketch.construction_tools.map__GT_PerpendicularLineConstructionTool = (function cljsketch$construction_tools$map__GT_PerpendicularLineConstructionTool(G__68531){
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(null,cljs.core.dissoc.call(null,G__68531),null));
});


//# sourceMappingURL=construction_tools.js.map?rel=1440902448725