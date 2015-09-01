// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.geom');
goog.require('cljs.core');
goog.require('cljsketch.vector');
goog.require('cljsketch.canvas_graphics');

cljsketch.geom.IGeom = (function (){var obj23927 = {};
return obj23927;
})();

/**
 * render this geom in the given graphics context
 */
cljsketch.geom.render = (function cljsketch$geom$render(this$,ctx,highlighted_QMARK_){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$geom$IGeom$render$arity$3;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$geom$IGeom$render$arity$3(this$,ctx,highlighted_QMARK_);
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
})().call(null,this$,ctx,highlighted_QMARK_);
}
});

/**
 * return the square of the distance from this object to point [x y]
 */
cljsketch.geom.point_distance2 = (function cljsketch$geom$point_distance2(this$,p__23928){
var vec__23930 = p__23928;
var x = cljs.core.nth.call(null,vec__23930,(0),null);
var y = cljs.core.nth.call(null,vec__23930,(1),null);
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$geom$IGeom$point_distance2$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$geom$IGeom$point_distance2$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.geom.point_distance2[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.geom.point_distance2["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGeom.point-distance2",this$);
}
}
})().call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
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
cljsketch.geom.Null = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.geom.Null.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.geom.Null.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k23932,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__23934 = k23932;
switch (G__23934) {
default:
return cljs.core.get.call(null,self__.__extmap,k23932,else__16667__auto__);

}
});

cljsketch.geom.Null.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.geom.Null{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.geom.Null.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.geom.Null.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.geom.Null(self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.geom.Null.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.geom.Null.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.geom.Null.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.geom.Null.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.geom.Null(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.geom.Null.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__23931){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__23935 = cljs.core.keyword_identical_QMARK_;
var expr__23936 = k__16672__auto__;
return (new cljsketch.geom.Null(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__23931),null));
});

cljsketch.geom.Null.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljsketch.geom.Null.prototype.cljsketch$geom$IGeom$ = true;

cljsketch.geom.Null.prototype.cljsketch$geom$IGeom$render$arity$3 = (function (this$,ctx,highlighted_QMARK_){
var self__ = this;
var this$__$1 = this;
return null;
});

cljsketch.geom.Null.prototype.cljsketch$geom$IGeom$point_distance2$arity$2 = (function (this$,p__23938){
var self__ = this;
var vec__23939 = p__23938;
var x = cljs.core.nth.call(null,vec__23939,(0),null);
var y = cljs.core.nth.call(null,vec__23939,(1),null);
var this$__$1 = this;
return 1.0E25;
});

cljsketch.geom.Null.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__23931){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Null(G__23931,self__.__extmap,self__.__hash));
});

cljsketch.geom.Null.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.geom.Null.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljsketch.geom.Null.cljs$lang$type = true;

cljsketch.geom.Null.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.geom/Null");
});

cljsketch.geom.Null.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.geom/Null");
});

cljsketch.geom.__GT_Null = (function cljsketch$geom$__GT_Null(){
return (new cljsketch.geom.Null(null,null,null));
});

cljsketch.geom.map__GT_Null = (function cljsketch$geom$map__GT_Null(G__23933){
return (new cljsketch.geom.Null(null,cljs.core.dissoc.call(null,G__23933),null));
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
cljsketch.geom.Point = (function (p,__meta,__extmap,__hash){
this.p = p;
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

cljsketch.geom.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k23942,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__23944 = (((k23942 instanceof cljs.core.Keyword))?k23942.fqn:null);
switch (G__23944) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23942,else__16667__auto__);

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
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.geom.Point{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

cljsketch.geom.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.geom.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.geom.Point(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.geom.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.geom.Point(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.geom.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__23941){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__23945 = cljs.core.keyword_identical_QMARK_;
var expr__23946 = k__16672__auto__;
if(cljs.core.truth_(pred__23945.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__23946))){
return (new cljsketch.geom.Point(G__23941,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Point(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__23941),null));
}
});

cljsketch.geom.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

cljsketch.geom.Point.prototype.cljsketch$geom$IGeom$ = true;

cljsketch.geom.Point.prototype.cljsketch$geom$IGeom$render$arity$3 = (function (this$,ctx,highlighted_QMARK_){
var self__ = this;
var this$__$1 = this;
var vec__23948 = self__.p;
var x = cljs.core.nth.call(null,vec__23948,(0),null);
var y = cljs.core.nth.call(null,vec__23948,(1),null);
cljsketch.canvas_graphics.draw_point.call(null,ctx,x,y,(3));

if(cljs.core.truth_(highlighted_QMARK_)){
return cljsketch.canvas_graphics.draw_circle.call(null,ctx,x,y,(5),(1));
} else {
return null;
}
});

cljsketch.geom.Point.prototype.cljsketch$geom$IGeom$point_distance2$arity$2 = (function (this$,p__23949){
var self__ = this;
var vec__23950 = p__23949;
var x = cljs.core.nth.call(null,vec__23950,(0),null);
var y = cljs.core.nth.call(null,vec__23950,(1),null);
var this$__$1 = this;
return cljsketch.vector.vl2norm2.call(null,cljsketch.vector.vsub.call(null,self__.p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});

cljsketch.geom.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__23941){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Point(self__.p,G__23941,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

cljsketch.geom.Point.cljs$lang$type = true;

cljsketch.geom.Point.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.geom/Point");
});

cljsketch.geom.Point.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.geom/Point");
});

cljsketch.geom.__GT_Point = (function cljsketch$geom$__GT_Point(p){
return (new cljsketch.geom.Point(p,null,null,null));
});

cljsketch.geom.map__GT_Point = (function cljsketch$geom$map__GT_Point(G__23943){
return (new cljsketch.geom.Point(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__23943),null,cljs.core.dissoc.call(null,G__23943,new cljs.core.Keyword(null,"p","p",151049309)),null));
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

cljsketch.geom.Line.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k23953,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__23955 = (((k23953 instanceof cljs.core.Keyword))?k23953.fqn:null);
switch (G__23955) {
case "u":
return self__.u;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23953,else__16667__auto__);

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

cljsketch.geom.Line.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__23952){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__23956 = cljs.core.keyword_identical_QMARK_;
var expr__23957 = k__16672__auto__;
if(cljs.core.truth_(pred__23956.call(null,new cljs.core.Keyword(null,"u","u",-1156634785),expr__23957))){
return (new cljsketch.geom.Line(G__23952,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Line(self__.u,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__23952),null));
}
});

cljsketch.geom.Line.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null))], null),self__.__extmap));
});

cljsketch.geom.Line.prototype.cljsketch$geom$IGeom$ = true;

cljsketch.geom.Line.prototype.cljsketch$geom$IGeom$render$arity$3 = (function (this$,ctx,highlighted_QMARK_){
var self__ = this;
var this$__$1 = this;
var endpoints = cljsketch.vector.line_rectangle_intersection.call(null,self__.u,(new cljsketch.vector.Rectangle((0),(0),ctx.canvas.width,ctx.canvas.height,null,null,null)));
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,endpoints))){
var vec__23959 = endpoints;
var e0 = cljs.core.nth.call(null,vec__23959,(0),null);
var e1 = cljs.core.nth.call(null,vec__23959,(1),null);
var vec__23960 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e0);
var e0x = cljs.core.nth.call(null,vec__23960,(0),null);
var e0y = cljs.core.nth.call(null,vec__23960,(1),null);
var vec__23961 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e1);
var e1x = cljs.core.nth.call(null,vec__23961,(0),null);
var e1y = cljs.core.nth.call(null,vec__23961,(1),null);
return cljsketch.canvas_graphics.draw_line.call(null,ctx,e0x,e0y,e1x,e1y,(cljs.core.truth_(highlighted_QMARK_)?(3):(1)));
} else {
return null;
}
});

cljsketch.geom.Line.prototype.cljsketch$geom$IGeom$point_distance2$arity$2 = (function (this$,p__23962){
var self__ = this;
var vec__23963 = p__23962;
var x = cljs.core.nth.call(null,vec__23963,(0),null);
var y = cljs.core.nth.call(null,vec__23963,(1),null);
var this$__$1 = this;
return cljsketch.vector.point_line_distance_squared.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null,null,null)),self__.u);
});

cljsketch.geom.Line.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__23952){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Line(self__.u,G__23952,self__.__extmap,self__.__hash));
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

cljsketch.geom.map__GT_Line = (function cljsketch$geom$map__GT_Line(G__23954){
return (new cljsketch.geom.Line(new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(G__23954),null,cljs.core.dissoc.call(null,G__23954,new cljs.core.Keyword(null,"u","u",-1156634785)),null));
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

cljsketch.geom.Segment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k23966,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__23968 = (((k23966 instanceof cljs.core.Keyword))?k23966.fqn:null);
switch (G__23968) {
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
return cljs.core.get.call(null,self__.__extmap,k23966,else__16667__auto__);

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

cljsketch.geom.Segment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__23965){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__23969 = cljs.core.keyword_identical_QMARK_;
var expr__23970 = k__16672__auto__;
if(cljs.core.truth_(pred__23969.call(null,new cljs.core.Keyword(null,"x0","x0",410843387),expr__23970))){
return (new cljsketch.geom.Segment(G__23965,self__.y0,self__.x1,self__.y1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23969.call(null,new cljs.core.Keyword(null,"y0","y0",111454807),expr__23970))){
return (new cljsketch.geom.Segment(self__.x0,G__23965,self__.x1,self__.y1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23969.call(null,new cljs.core.Keyword(null,"x1","x1",-1863922247),expr__23970))){
return (new cljsketch.geom.Segment(self__.x0,self__.y0,G__23965,self__.y1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23969.call(null,new cljs.core.Keyword(null,"y1","y1",589123466),expr__23970))){
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,G__23965,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,self__.y1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__23965),null));
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

cljsketch.geom.Segment.prototype.cljsketch$geom$IGeom$render$arity$3 = (function (this$,ctx,highlighted_QMARK_){
var self__ = this;
var this$__$1 = this;
return cljsketch.canvas_graphics.draw_line.call(null,ctx,self__.x0,self__.y0,self__.x1,self__.y1,(cljs.core.truth_(highlighted_QMARK_)?(3):(1)));
});

cljsketch.geom.Segment.prototype.cljsketch$geom$IGeom$point_distance2$arity$2 = (function (this$,p__23972){
var self__ = this;
var vec__23973 = p__23972;
var x = cljs.core.nth.call(null,vec__23973,(0),null);
var y = cljs.core.nth.call(null,vec__23973,(1),null);
var this$__$1 = this;
return cljsketch.vector.point_segment_distance2.call(null,(new cljsketch.vector.toProjectiveVector((new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null,null,null)))),(new cljsketch.vector.toProjectiveVector((new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x0,self__.y0], null),null,null,null)))),(new cljsketch.vector.toProjectiveVector((new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x1,self__.y1], null),null,null,null)))));
});

cljsketch.geom.Segment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__23965){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,self__.y1,G__23965,self__.__extmap,self__.__hash));
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

cljsketch.geom.map__GT_Segment = (function cljsketch$geom$map__GT_Segment(G__23967){
return (new cljsketch.geom.Segment(new cljs.core.Keyword(null,"x0","x0",410843387).cljs$core$IFn$_invoke$arity$1(G__23967),new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(G__23967),new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(G__23967),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(G__23967),null,cljs.core.dissoc.call(null,G__23967,new cljs.core.Keyword(null,"x0","x0",410843387),new cljs.core.Keyword(null,"y0","y0",111454807),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y1","y1",589123466)),null));
});


/**
* @constructor
* @param {*} x0
* @param {*} y0
* @param {*} r
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.geom.Circle = (function (x0,y0,r,__meta,__extmap,__hash){
this.x0 = x0;
this.y0 = y0;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.geom.Circle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.geom.Circle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k23976,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__23978 = (((k23976 instanceof cljs.core.Keyword))?k23976.fqn:null);
switch (G__23978) {
case "x0":
return self__.x0;

break;
case "y0":
return self__.y0;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23976,else__16667__auto__);

}
});

cljsketch.geom.Circle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.geom.Circle{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x0","x0",410843387),self__.x0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y0","y0",111454807),self__.y0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

cljsketch.geom.Circle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.geom.Circle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.geom.Circle(self__.x0,self__.y0,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.geom.Circle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.geom.Circle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.geom.Circle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.geom.Circle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"y0","y0",111454807),null,new cljs.core.Keyword(null,"x0","x0",410843387),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.geom.Circle(self__.x0,self__.y0,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.geom.Circle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__23975){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__23979 = cljs.core.keyword_identical_QMARK_;
var expr__23980 = k__16672__auto__;
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"x0","x0",410843387),expr__23980))){
return (new cljsketch.geom.Circle(G__23975,self__.y0,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"y0","y0",111454807),expr__23980))){
return (new cljsketch.geom.Circle(self__.x0,G__23975,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__23980))){
return (new cljsketch.geom.Circle(self__.x0,self__.y0,G__23975,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Circle(self__.x0,self__.y0,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__23975),null));
}
}
}
});

cljsketch.geom.Circle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x0","x0",410843387),self__.x0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y0","y0",111454807),self__.y0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

cljsketch.geom.Circle.prototype.cljsketch$geom$IGeom$ = true;

cljsketch.geom.Circle.prototype.cljsketch$geom$IGeom$render$arity$3 = (function (this$,ctx,highlighted_QMARK_){
var self__ = this;
var this$__$1 = this;
return cljsketch.canvas_graphics.draw_circle.call(null,ctx,self__.x0,self__.y0,self__.r,(cljs.core.truth_(highlighted_QMARK_)?(3):(1)));
});

cljsketch.geom.Circle.prototype.cljsketch$geom$IGeom$point_distance2$arity$2 = (function (this$,p__23982){
var self__ = this;
var vec__23983 = p__23982;
var x = cljs.core.nth.call(null,vec__23983,(0),null);
var y = cljs.core.nth.call(null,vec__23983,(1),null);
var this$__$1 = this;
return cljsketch.vector.square.call(null,((new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null,null,null)).cljsketch$vector$IVectorSpace$l2dist$arity$2(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x0,self__.y0], null),null,null,null))) - self__.r));
});

cljsketch.geom.Circle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__23975){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Circle(self__.x0,self__.y0,self__.r,G__23975,self__.__extmap,self__.__hash));
});

cljsketch.geom.Circle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.geom.Circle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x0","x0",2051374914,null),new cljs.core.Symbol(null,"y0","y0",1751986334,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

cljsketch.geom.Circle.cljs$lang$type = true;

cljsketch.geom.Circle.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.geom/Circle");
});

cljsketch.geom.Circle.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.geom/Circle");
});

cljsketch.geom.__GT_Circle = (function cljsketch$geom$__GT_Circle(x0,y0,r){
return (new cljsketch.geom.Circle(x0,y0,r,null,null,null));
});

cljsketch.geom.map__GT_Circle = (function cljsketch$geom$map__GT_Circle(G__23977){
return (new cljsketch.geom.Circle(new cljs.core.Keyword(null,"x0","x0",410843387).cljs$core$IFn$_invoke$arity$1(G__23977),new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(G__23977),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__23977),null,cljs.core.dissoc.call(null,G__23977,new cljs.core.Keyword(null,"x0","x0",410843387),new cljs.core.Keyword(null,"y0","y0",111454807),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


//# sourceMappingURL=geom.js.map?rel=1441127219001