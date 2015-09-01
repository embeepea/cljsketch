// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.construction_tools');
goog.require('cljs.core');
goog.require('cljsketch.geom');
goog.require('cljsketch.refgeom');
cljsketch.construction_tools.types = (function cljsketch$construction_tools$types(geoms){
return cljs.core.map.call(null,(function (p1__24152_SHARP_){
return cljsketch.refgeom.geom_type.call(null,cljs.core.deref.call(null,p1__24152_SHARP_));
}),geoms);
});
cljsketch.construction_tools.first_object_of_type = (function cljsketch$construction_tools$first_object_of_type(typ,atoms){
while(true){
if(!(cljs.core.sequential_QMARK_.call(null,typ))){
var G__24154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [typ], null);
var G__24155 = atoms;
typ = G__24154;
atoms = G__24155;
continue;
} else {
return cljs.core.some.call(null,((function (typ,atoms){
return (function (p1__24153_SHARP_){
if(cljs.core.truth_(cljs.core.set.call(null,typ).call(null,cljsketch.refgeom.geom_type.call(null,cljs.core.deref.call(null,p1__24153_SHARP_))))){
return p1__24153_SHARP_;
} else {
return null;
}
});})(typ,atoms))
,atoms);
}
break;
}
});

cljsketch.construction_tools.IConstructionTool = (function (){var obj24157 = {};
return obj24157;
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

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24159,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24161 = k24159;
switch (G__24161) {
default:
return cljs.core.get.call(null,self__.__extmap,k24159,else__16667__auto__);

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

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24158){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24162 = cljs.core.keyword_identical_QMARK_;
var expr__24163 = k__16672__auto__;
return (new cljsketch.construction_tools.SegmentConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24158),null));
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

cljsketch.construction_tools.SegmentConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24158){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.SegmentConstructionTool(G__24158,self__.__extmap,self__.__hash));
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

cljsketch.construction_tools.map__GT_SegmentConstructionTool = (function cljsketch$construction_tools$map__GT_SegmentConstructionTool(G__24160){
return (new cljsketch.construction_tools.SegmentConstructionTool(null,cljs.core.dissoc.call(null,G__24160),null));
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

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24167,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24169 = k24167;
switch (G__24169) {
default:
return cljs.core.get.call(null,self__.__extmap,k24167,else__16667__auto__);

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

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24166){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24170 = cljs.core.keyword_identical_QMARK_;
var expr__24171 = k__16672__auto__;
return (new cljsketch.construction_tools.LineConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24166),null));
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

cljsketch.construction_tools.LineConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24166){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.LineConstructionTool(G__24166,self__.__extmap,self__.__hash));
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

cljsketch.construction_tools.map__GT_LineConstructionTool = (function cljsketch$construction_tools$map__GT_LineConstructionTool(G__24168){
return (new cljsketch.construction_tools.LineConstructionTool(null,cljs.core.dissoc.call(null,G__24168),null));
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

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24175,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24177 = k24175;
switch (G__24177) {
default:
return cljs.core.get.call(null,self__.__extmap,k24175,else__16667__auto__);

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

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24174){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24178 = cljs.core.keyword_identical_QMARK_;
var expr__24179 = k__16672__auto__;
return (new cljsketch.construction_tools.ParallelLineConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24174),null));
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
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Segment,cljsketch.geom.Point], true),cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Line,cljsketch.geom.Point], true)], true),cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected))));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
var pt = cljsketch.construction_tools.first_object_of_type.call(null,cljsketch.geom.Point,selected);
var ln = cljsketch.construction_tools.first_object_of_type.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsketch.geom.Line,cljsketch.geom.Segment], null),selected);
return (new cljsketch.refgeom.PointParallelLine(pt,ln,null,null,null));
});

cljsketch.construction_tools.ParallelLineConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24174){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.ParallelLineConstructionTool(G__24174,self__.__extmap,self__.__hash));
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

cljsketch.construction_tools.map__GT_ParallelLineConstructionTool = (function cljsketch$construction_tools$map__GT_ParallelLineConstructionTool(G__24176){
return (new cljsketch.construction_tools.ParallelLineConstructionTool(null,cljs.core.dissoc.call(null,G__24176),null));
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

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24183,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24185 = k24183;
switch (G__24185) {
default:
return cljs.core.get.call(null,self__.__extmap,k24183,else__16667__auto__);

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

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24182){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24186 = cljs.core.keyword_identical_QMARK_;
var expr__24187 = k__16672__auto__;
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24182),null));
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
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Segment,cljsketch.geom.Point], true),cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Line,cljsketch.geom.Point], true)], true),cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected))));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
var pt = cljsketch.construction_tools.first_object_of_type.call(null,cljsketch.geom.Point,selected);
var ln = cljsketch.construction_tools.first_object_of_type.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsketch.geom.Line,cljsketch.geom.Segment], null),selected);
return (new cljsketch.refgeom.PointPerpendicularLine(pt,ln,null,null,null));
});

cljsketch.construction_tools.PerpendicularLineConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24182){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(G__24182,self__.__extmap,self__.__hash));
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

cljsketch.construction_tools.map__GT_PerpendicularLineConstructionTool = (function cljsketch$construction_tools$map__GT_PerpendicularLineConstructionTool(G__24184){
return (new cljsketch.construction_tools.PerpendicularLineConstructionTool(null,cljs.core.dissoc.call(null,G__24184),null));
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

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24191,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24193 = k24191;
switch (G__24193) {
default:
return cljs.core.get.call(null,self__.__extmap,k24191,else__16667__auto__);

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

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24190){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24194 = cljs.core.keyword_identical_QMARK_;
var expr__24195 = k__16672__auto__;
return (new cljsketch.construction_tools.LineIntersectionConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24190),null));
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

cljsketch.construction_tools.LineIntersectionConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24190){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.LineIntersectionConstructionTool(G__24190,self__.__extmap,self__.__hash));
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

cljsketch.construction_tools.map__GT_LineIntersectionConstructionTool = (function cljsketch$construction_tools$map__GT_LineIntersectionConstructionTool(G__24192){
return (new cljsketch.construction_tools.LineIntersectionConstructionTool(null,cljs.core.dissoc.call(null,G__24192),null));
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
cljsketch.construction_tools.SegmentMidPointConstructionTool = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24199,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24201 = k24199;
switch (G__24201) {
default:
return cljs.core.get.call(null,self__.__extmap,k24199,else__16667__auto__);

}
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.construction-tools.SegmentMidPointConstructionTool{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.construction_tools.SegmentMidPointConstructionTool(self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.construction_tools.SegmentMidPointConstructionTool(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24198){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24202 = cljs.core.keyword_identical_QMARK_;
var expr__24203 = k__16672__auto__;
return (new cljsketch.construction_tools.SegmentMidPointConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24198),null));
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$ = true;

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$selection_fits$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Segment], true)));
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.refgeom.SegmentMidPoint(cljs.core.first.call(null,selected),null,null,null));
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24198){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.SegmentMidPointConstructionTool(G__24198,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.cljs$lang$type = true;

cljsketch.construction_tools.SegmentMidPointConstructionTool.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.construction-tools/SegmentMidPointConstructionTool");
});

cljsketch.construction_tools.SegmentMidPointConstructionTool.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.construction-tools/SegmentMidPointConstructionTool");
});

cljsketch.construction_tools.__GT_SegmentMidPointConstructionTool = (function cljsketch$construction_tools$__GT_SegmentMidPointConstructionTool(){
return (new cljsketch.construction_tools.SegmentMidPointConstructionTool(null,null,null));
});

cljsketch.construction_tools.map__GT_SegmentMidPointConstructionTool = (function cljsketch$construction_tools$map__GT_SegmentMidPointConstructionTool(G__24200){
return (new cljsketch.construction_tools.SegmentMidPointConstructionTool(null,cljs.core.dissoc.call(null,G__24200),null));
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
cljsketch.construction_tools.CircleConstructionTool = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k24207,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__24209 = k24207;
switch (G__24209) {
default:
return cljs.core.get.call(null,self__.__extmap,k24207,else__16667__auto__);

}
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.construction-tools.CircleConstructionTool{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.construction_tools.CircleConstructionTool(self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.construction_tools.CircleConstructionTool(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__24206){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__24210 = cljs.core.keyword_identical_QMARK_;
var expr__24211 = k__16672__auto__;
return (new cljsketch.construction_tools.CircleConstructionTool(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__24206),null));
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$ = true;

cljsketch.construction_tools.CircleConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$selection_fits$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljsketch.construction_tools.types.call(null,selected)),cljs.core.PersistentHashSet.fromArray([cljsketch.geom.Point], true)));
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljsketch$construction_tools$IConstructionTool$construct$arity$2 = (function (this$,selected){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.refgeom.CenterPointCircle(cljs.core.first.call(null,selected),cljs.core.second.call(null,selected),null,null,null));
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__24206){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.construction_tools.CircleConstructionTool(G__24206,self__.__extmap,self__.__hash));
});

cljsketch.construction_tools.CircleConstructionTool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.construction_tools.CircleConstructionTool.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljsketch.construction_tools.CircleConstructionTool.cljs$lang$type = true;

cljsketch.construction_tools.CircleConstructionTool.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.construction-tools/CircleConstructionTool");
});

cljsketch.construction_tools.CircleConstructionTool.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.construction-tools/CircleConstructionTool");
});

cljsketch.construction_tools.__GT_CircleConstructionTool = (function cljsketch$construction_tools$__GT_CircleConstructionTool(){
return (new cljsketch.construction_tools.CircleConstructionTool(null,null,null));
});

cljsketch.construction_tools.map__GT_CircleConstructionTool = (function cljsketch$construction_tools$map__GT_CircleConstructionTool(G__24208){
return (new cljsketch.construction_tools.CircleConstructionTool(null,cljs.core.dissoc.call(null,G__24208),null));
});


//# sourceMappingURL=construction_tools.js.map?rel=1441127517789