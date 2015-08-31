// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.vector');
goog.require('cljs.core');
cljsketch.vector.vsub = (function cljsketch$vector$vsub(u,v){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._,u,v));
});
cljsketch.vector.vadd = (function cljsketch$vector$vadd(u,v){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,u,v));
});
cljsketch.vector.vmul = (function cljsketch$vector$vmul(u,s){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__61410_SHARP_){
return (p1__61410_SHARP_ * s);
}),u));
});
cljsketch.vector.vdot = (function cljsketch$vector$vdot(u,v){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,u,v));
});
cljsketch.vector.vprj = (function cljsketch$vector$vprj(u){
return cljs.core.conj.call(null,u,(1));
});
cljsketch.vector.vl2norm2 = (function cljsketch$vector$vl2norm2(u){
return cljsketch.vector.vdot.call(null,u,u);
});
cljsketch.vector.vl2norm = (function cljsketch$vector$vl2norm(u){
return Math.sqrt(cljsketch.vector.vl2norm2.call(null,u));
});
cljsketch.vector.vunitize = (function cljsketch$vector$vunitize(u){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__61411_SHARP_){
return (p1__61411_SHARP_ / cljsketch.vector.vl2norm.call(null,u));
}),u));
});
cljsketch.vector.vaff = (function cljsketch$vector$vaff(u){
var z = cljs.core.last.call(null,u);
if(cljs.core._EQ_.call(null,z,(0))){
return null;
} else {
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (z){
return (function (p1__61412_SHARP_){
return (p1__61412_SHARP_ / z);
});})(z))
,cljs.core.drop_last.call(null,(1),u)));
}
});
cljsketch.vector.vcross = (function cljsketch$vector$vcross(p__61413,p__61414){
var vec__61417 = p__61413;
var x0 = cljs.core.nth.call(null,vec__61417,(0),null);
var y0 = cljs.core.nth.call(null,vec__61417,(1),null);
var z0 = cljs.core.nth.call(null,vec__61417,(2),null);
var vec__61418 = p__61414;
var x1 = cljs.core.nth.call(null,vec__61418,(0),null);
var y1 = cljs.core.nth.call(null,vec__61418,(1),null);
var z1 = cljs.core.nth.call(null,vec__61418,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y0 * z1) - (z0 * y1)),((z0 * x1) - (x0 * z1)),((x0 * y1) - (y0 * x1))], null);
});




cljsketch.vector.IVectorSpace = (function (){var obj61420 = {};
return obj61420;
})();

/**
 * vector addition
 */
cljsketch.vector.add = (function cljsketch$vector$add(this$,v){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IVectorSpace$add$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IVectorSpace$add$arity$2(this$,v);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.add[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.add["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVectorSpace.add",this$);
}
}
})().call(null,this$,v);
}
});

/**
 * vector subtraction
 */
cljsketch.vector.sub = (function cljsketch$vector$sub(this$,v){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IVectorSpace$sub$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IVectorSpace$sub$arity$2(this$,v);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.sub[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.sub["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVectorSpace.sub",this$);
}
}
})().call(null,this$,v);
}
});

/**
 * vector dot product
 */
cljsketch.vector.dot = (function cljsketch$vector$dot(this$,v){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IVectorSpace$dot$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IVectorSpace$dot$arity$2(this$,v);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.dot[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.dot["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVectorSpace.dot",this$);
}
}
})().call(null,this$,v);
}
});

/**
 * scalar multiplication
 */
cljsketch.vector.mul = (function cljsketch$vector$mul(this$,s){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IVectorSpace$mul$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IVectorSpace$mul$arity$2(this$,s);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.mul[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.mul["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVectorSpace.mul",this$);
}
}
})().call(null,this$,s);
}
});

/**
 * L2 norm squared
 */
cljsketch.vector.l2norm2 = (function cljsketch$vector$l2norm2(this$){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IVectorSpace$l2norm2$arity$1;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IVectorSpace$l2norm2$arity$1(this$);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.l2norm2[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.l2norm2["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVectorSpace.l2norm2",this$);
}
}
})().call(null,this$);
}
});

/**
 * L2 norm
 */
cljsketch.vector.l2norm = (function cljsketch$vector$l2norm(this$){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IVectorSpace$l2norm$arity$1;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IVectorSpace$l2norm$arity$1(this$);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.l2norm[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.l2norm["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVectorSpace.l2norm",this$);
}
}
})().call(null,this$);
}
});

/**
 * L2 dist squared
 */
cljsketch.vector.l2dist2 = (function cljsketch$vector$l2dist2(this$,v){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IVectorSpace$l2dist2$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IVectorSpace$l2dist2$arity$2(this$,v);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.l2dist2[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.l2dist2["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVectorSpace.l2dist2",this$);
}
}
})().call(null,this$,v);
}
});

/**
 * L2 dist
 */
cljsketch.vector.l2dist = (function cljsketch$vector$l2dist(this$,v){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IVectorSpace$l2dist$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IVectorSpace$l2dist$arity$2(this$,v);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.l2dist[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.l2dist["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVectorSpace.l2dist",this$);
}
}
})().call(null,this$,v);
}
});

/**
 * unit vector in same direction
 */
cljsketch.vector.unitize = (function cljsketch$vector$unitize(this$){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IVectorSpace$unitize$arity$1;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IVectorSpace$unitize$arity$1(this$);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.unitize[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.unitize["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVectorSpace.unitize",this$);
}
}
})().call(null,this$);
}
});


cljsketch.vector.ICross = (function (){var obj61422 = {};
return obj61422;
})();

/**
 * Product
 */
cljsketch.vector.cross = (function cljsketch$vector$cross(this$,v){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$ICross$cross$arity$2;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$ICross$cross$arity$2(this$,v);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.cross[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.cross["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICross.cross",this$);
}
}
})().call(null,this$,v);
}
});


cljsketch.vector.IProjective = (function (){var obj61424 = {};
return obj61424;
})();

/**
 * Convert this object to an AffineVector
 */
cljsketch.vector.toAffineVector = (function cljsketch$vector$toAffineVector(this$){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IProjective$toAffineVector$arity$1;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IProjective$toAffineVector$arity$1(this$);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.toAffineVector[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.toAffineVector["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IProjective.toAffineVector",this$);
}
}
})().call(null,this$);
}
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
cljsketch.vector.ProjectiveVector = (function (u,__meta,__extmap,__hash){
this.u = u;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.vector.ProjectiveVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k61426,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__61428 = (((k61426 instanceof cljs.core.Keyword))?k61426.fqn:null);
switch (G__61428) {
case "u":
return self__.u;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k61426,else__16667__auto__);

}
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$ = true;

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$dot$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vdot.call(null,self__.u,v.u);
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$l2dist$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vl2norm.call(null,cljsketch.vector.vsub.call(null,self__.u,v.u));
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$add$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.ProjectiveVector(cljsketch.vector.vadd.call(null,self__.u,v.u),null,null,null));
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$l2norm$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vl2norm.call(null,self__.u);
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$unitize$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.ProjectiveVector(cljsketch.vector.vunitize.call(null,self__.u),null,null,null));
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$l2dist2$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vl2norm2.call(null,cljsketch.vector.vsub.call(null,self__.u,v.u));
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$sub$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.ProjectiveVector(cljsketch.vector.vsub.call(null,self__.u,v.u),null,null,null));
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$l2norm2$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vl2norm2.call(null,self__.u);
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IVectorSpace$mul$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.ProjectiveVector(cljsketch.vector.vmul.call(null,self__.u,s),null,null,null));
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.vector.ProjectiveVector{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null))], null),self__.__extmap));
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.vector.ProjectiveVector(self__.u,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.vector.ProjectiveVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$ICross$ = true;

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$ICross$cross$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.ProjectiveVector(cljsketch.vector.vcross.call(null,self__.u,v.u),null,null,null));
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"u","u",-1156634785),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.vector.ProjectiveVector(self__.u,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IProjective$ = true;

cljsketch.vector.ProjectiveVector.prototype.cljsketch$vector$IProjective$toAffineVector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.AffineVector(cljsketch.vector.vaff.call(null,self__.u)));
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__61425){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__61429 = cljs.core.keyword_identical_QMARK_;
var expr__61430 = k__16672__auto__;
if(cljs.core.truth_(pred__61429.call(null,new cljs.core.Keyword(null,"u","u",-1156634785),expr__61430))){
return (new cljsketch.vector.ProjectiveVector(G__61425,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.vector.ProjectiveVector(self__.u,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__61425),null));
}
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null))], null),self__.__extmap));
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__61425){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.vector.ProjectiveVector(self__.u,G__61425,self__.__extmap,self__.__hash));
});

cljsketch.vector.ProjectiveVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.vector.ProjectiveVector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u","u",483896742,null)], null);
});

cljsketch.vector.ProjectiveVector.cljs$lang$type = true;

cljsketch.vector.ProjectiveVector.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.vector/ProjectiveVector");
});

cljsketch.vector.ProjectiveVector.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.vector/ProjectiveVector");
});

cljsketch.vector.__GT_ProjectiveVector = (function cljsketch$vector$__GT_ProjectiveVector(u){
return (new cljsketch.vector.ProjectiveVector(u,null,null,null));
});

cljsketch.vector.map__GT_ProjectiveVector = (function cljsketch$vector$map__GT_ProjectiveVector(G__61427){
return (new cljsketch.vector.ProjectiveVector(new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(G__61427),null,cljs.core.dissoc.call(null,G__61427,new cljs.core.Keyword(null,"u","u",-1156634785)),null));
});


cljsketch.vector.IAffine = (function (){var obj61434 = {};
return obj61434;
})();

/**
 * Convert this object to a ProjectiveVector
 */
cljsketch.vector.toProjectiveVector = (function cljsketch$vector$toProjectiveVector(this$){
if((function (){var and__16057__auto__ = this$;
if(and__16057__auto__){
return this$.cljsketch$vector$IAffine$toProjectiveVector$arity$1;
} else {
return and__16057__auto__;
}
})()){
return this$.cljsketch$vector$IAffine$toProjectiveVector$arity$1(this$);
} else {
var x__16705__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16069__auto__ = (cljsketch.vector.toProjectiveVector[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljsketch.vector.toProjectiveVector["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAffine.toProjectiveVector",this$);
}
}
})().call(null,this$);
}
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
cljsketch.vector.AffineVector = (function (u,__meta,__extmap,__hash){
this.u = u;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.vector.AffineVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.vector.AffineVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k61436,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__61438 = (((k61436 instanceof cljs.core.Keyword))?k61436.fqn:null);
switch (G__61438) {
case "u":
return self__.u;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k61436,else__16667__auto__);

}
});

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IVectorSpace$ = true;

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IVectorSpace$add$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.AffineVector(cljsketch.vector.vadd.call(null,self__.u,v.u),null,null,null));
});

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IVectorSpace$sub$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.AffineVector(cljsketch.vector.vsub.call(null,self__.u,v.u),null,null,null));
});

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IVectorSpace$mul$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.AffineVector(cljsketch.vector.vmul.call(null,self__.u,s),null,null,null));
});

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IVectorSpace$dot$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vdot.call(null,self__.u,v.u);
});

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IVectorSpace$l2norm2$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vl2norm2.call(null,self__.u);
});

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IVectorSpace$l2norm$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vl2norm.call(null,self__.u);
});

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IVectorSpace$l2dist2$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vl2norm2.call(null,cljsketch.vector.vsub.call(null,self__.u,v.u));
});

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IVectorSpace$l2dist$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return cljsketch.vector.vl2norm.call(null,cljsketch.vector.vsub.call(null,self__.u,v.u));
});

cljsketch.vector.AffineVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.vector.AffineVector{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null))], null),self__.__extmap));
});

cljsketch.vector.AffineVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.vector.AffineVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.vector.AffineVector(self__.u,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.vector.AffineVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.vector.AffineVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.vector.AffineVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.vector.AffineVector.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"u","u",-1156634785),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.vector.AffineVector(self__.u,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.vector.AffineVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__61435){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__61439 = cljs.core.keyword_identical_QMARK_;
var expr__61440 = k__16672__auto__;
if(cljs.core.truth_(pred__61439.call(null,new cljs.core.Keyword(null,"u","u",-1156634785),expr__61440))){
return (new cljsketch.vector.AffineVector(G__61435,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.vector.AffineVector(self__.u,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__61435),null));
}
});

cljsketch.vector.AffineVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null))], null),self__.__extmap));
});

cljsketch.vector.AffineVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__61435){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.vector.AffineVector(self__.u,G__61435,self__.__extmap,self__.__hash));
});

cljsketch.vector.AffineVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IAffine$ = true;

cljsketch.vector.AffineVector.prototype.cljsketch$vector$IAffine$toProjectiveVector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljsketch.vector.ProjectiveVector(cljsketch.vector.vprj.call(null,self__.u),null,null,null));
});

cljsketch.vector.AffineVector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u","u",483896742,null)], null);
});

cljsketch.vector.AffineVector.cljs$lang$type = true;

cljsketch.vector.AffineVector.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.vector/AffineVector");
});

cljsketch.vector.AffineVector.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.vector/AffineVector");
});

cljsketch.vector.__GT_AffineVector = (function cljsketch$vector$__GT_AffineVector(u){
return (new cljsketch.vector.AffineVector(u,null,null,null));
});

cljsketch.vector.map__GT_AffineVector = (function cljsketch$vector$map__GT_AffineVector(G__61437){
return (new cljsketch.vector.AffineVector(new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(G__61437),null,cljs.core.dissoc.call(null,G__61437,new cljs.core.Keyword(null,"u","u",-1156634785)),null));
});

cljsketch.vector.line_line_intersection = cljsketch.vector.cross;
cljsketch.vector.point_point_line = cljsketch.vector.cross;
cljsketch.vector.point_on_line = (function cljsketch$vector$point_on_line(point,line){
return cljs.core._EQ_.call(null,(0),cljsketch.vector.dot.call(null,point,line));
});
cljsketch.vector.dotest1 = (function cljsketch$vector$dotest1(){
var p0 = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),null,null,null)));
var p1 = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),null,null,null)));
var lP = cljsketch.vector.point_point_line.call(null,p0,p1);
var q0 = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),null,null,null)));
var q1 = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),null,null,null)));
var lQ = cljsketch.vector.point_point_line.call(null,q0,q1);
var pAQ = cljsketch.vector.line_line_intersection.call(null,lP,lQ);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsketch.vector.point_on_line.call(null,p0,lP),cljsketch.vector.point_on_line.call(null,p1,lP),cljsketch.vector.point_on_line.call(null,cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),null,null,null))),lP),cljs.core.not.call(null,cljsketch.vector.point_on_line.call(null,cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),null,null,null))),lP)),cljsketch.vector.point_on_line.call(null,q0,lQ),cljsketch.vector.point_on_line.call(null,q1,lQ),cljsketch.vector.point_on_line.call(null,cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),null,null,null))),lQ),cljs.core.not.call(null,cljsketch.vector.point_on_line.call(null,cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),null,null,null))),lQ)),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(cljsketch.vector.toAffineVector.call(null,pAQ)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))], null);
});

/**
* @constructor
* @param {*} xMin
* @param {*} yMin
* @param {*} xMax
* @param {*} yMax
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljsketch.vector.Rectangle = (function (xMin,yMin,xMax,yMax,__meta,__extmap,__hash){
this.xMin = xMin;
this.yMin = yMin;
this.xMax = xMax;
this.yMax = yMax;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljsketch.vector.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16664__auto__,k__16665__auto__){
var self__ = this;
var this__16664__auto____$1 = this;
return cljs.core._lookup.call(null,this__16664__auto____$1,k__16665__auto__,null);
});

cljsketch.vector.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k61444,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__61446 = (((k61444 instanceof cljs.core.Keyword))?k61444.fqn:null);
switch (G__61446) {
case "xMin":
return self__.xMin;

break;
case "yMin":
return self__.yMin;

break;
case "xMax":
return self__.xMax;

break;
case "yMax":
return self__.yMax;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k61444,else__16667__auto__);

}
});

cljsketch.vector.Rectangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16678__auto__,writer__16679__auto__,opts__16680__auto__){
var self__ = this;
var this__16678__auto____$1 = this;
var pr_pair__16681__auto__ = ((function (this__16678__auto____$1){
return (function (keyval__16682__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,cljs.core.pr_writer,""," ","",opts__16680__auto__,keyval__16682__auto__);
});})(this__16678__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16679__auto__,pr_pair__16681__auto__,"#cljsketch.vector.Rectangle{",", ","}",opts__16680__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"xMin","xMin",513480452),self__.xMin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"yMin","yMin",1047682135),self__.yMin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"xMax","xMax",-576281018),self__.xMax],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"yMax","yMax",426890305),self__.yMax],null))], null),self__.__extmap));
});

cljsketch.vector.Rectangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16662__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
return self__.__meta;
});

cljsketch.vector.Rectangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16658__auto__){
var self__ = this;
var this__16658__auto____$1 = this;
return (new cljsketch.vector.Rectangle(self__.xMin,self__.yMin,self__.xMax,self__.yMax,self__.__meta,self__.__extmap,self__.__hash));
});

cljsketch.vector.Rectangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16668__auto__){
var self__ = this;
var this__16668__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljsketch.vector.Rectangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16659__auto__){
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

cljsketch.vector.Rectangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16660__auto__,other__16661__auto__){
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

cljsketch.vector.Rectangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16673__auto__,k__16674__auto__){
var self__ = this;
var this__16673__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"yMax","yMax",426890305),null,new cljs.core.Keyword(null,"xMin","xMin",513480452),null,new cljs.core.Keyword(null,"xMax","xMax",-576281018),null,new cljs.core.Keyword(null,"yMin","yMin",1047682135),null], null), null),k__16674__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16673__auto____$1),self__.__meta),k__16674__auto__);
} else {
return (new cljsketch.vector.Rectangle(self__.xMin,self__.yMin,self__.xMax,self__.yMax,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16674__auto__)),null));
}
});

cljsketch.vector.Rectangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__61443){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__61447 = cljs.core.keyword_identical_QMARK_;
var expr__61448 = k__16672__auto__;
if(cljs.core.truth_(pred__61447.call(null,new cljs.core.Keyword(null,"xMin","xMin",513480452),expr__61448))){
return (new cljsketch.vector.Rectangle(G__61443,self__.yMin,self__.xMax,self__.yMax,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61447.call(null,new cljs.core.Keyword(null,"yMin","yMin",1047682135),expr__61448))){
return (new cljsketch.vector.Rectangle(self__.xMin,G__61443,self__.xMax,self__.yMax,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61447.call(null,new cljs.core.Keyword(null,"xMax","xMax",-576281018),expr__61448))){
return (new cljsketch.vector.Rectangle(self__.xMin,self__.yMin,G__61443,self__.yMax,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61447.call(null,new cljs.core.Keyword(null,"yMax","yMax",426890305),expr__61448))){
return (new cljsketch.vector.Rectangle(self__.xMin,self__.yMin,self__.xMax,G__61443,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.vector.Rectangle(self__.xMin,self__.yMin,self__.xMax,self__.yMax,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__61443),null));
}
}
}
}
});

cljsketch.vector.Rectangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16676__auto__){
var self__ = this;
var this__16676__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"xMin","xMin",513480452),self__.xMin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"yMin","yMin",1047682135),self__.yMin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"xMax","xMax",-576281018),self__.xMax],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"yMax","yMax",426890305),self__.yMax],null))], null),self__.__extmap));
});

cljsketch.vector.Rectangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__61443){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.vector.Rectangle(self__.xMin,self__.yMin,self__.xMax,self__.yMax,G__61443,self__.__extmap,self__.__hash));
});

cljsketch.vector.Rectangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16669__auto__,entry__16670__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16670__auto__)){
return cljs.core._assoc.call(null,this__16669__auto____$1,cljs.core._nth.call(null,entry__16670__auto__,(0)),cljs.core._nth.call(null,entry__16670__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16669__auto____$1,entry__16670__auto__);
}
});

cljsketch.vector.Rectangle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xMin","xMin",-2140955317,null),new cljs.core.Symbol(null,"yMin","yMin",-1606753634,null),new cljs.core.Symbol(null,"xMax","xMax",1064250509,null),new cljs.core.Symbol(null,"yMax","yMax",2067421832,null)], null);
});

cljsketch.vector.Rectangle.cljs$lang$type = true;

cljsketch.vector.Rectangle.cljs$lang$ctorPrSeq = (function (this__16698__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljsketch.vector/Rectangle");
});

cljsketch.vector.Rectangle.cljs$lang$ctorPrWriter = (function (this__16698__auto__,writer__16699__auto__){
return cljs.core._write.call(null,writer__16699__auto__,"cljsketch.vector/Rectangle");
});

cljsketch.vector.__GT_Rectangle = (function cljsketch$vector$__GT_Rectangle(xMin,yMin,xMax,yMax){
return (new cljsketch.vector.Rectangle(xMin,yMin,xMax,yMax,null,null,null));
});

cljsketch.vector.map__GT_Rectangle = (function cljsketch$vector$map__GT_Rectangle(G__61445){
return (new cljsketch.vector.Rectangle(new cljs.core.Keyword(null,"xMin","xMin",513480452).cljs$core$IFn$_invoke$arity$1(G__61445),new cljs.core.Keyword(null,"yMin","yMin",1047682135).cljs$core$IFn$_invoke$arity$1(G__61445),new cljs.core.Keyword(null,"xMax","xMax",-576281018).cljs$core$IFn$_invoke$arity$1(G__61445),new cljs.core.Keyword(null,"yMax","yMax",426890305).cljs$core$IFn$_invoke$arity$1(G__61445),null,cljs.core.dissoc.call(null,G__61445,new cljs.core.Keyword(null,"xMin","xMin",513480452),new cljs.core.Keyword(null,"yMin","yMin",1047682135),new cljs.core.Keyword(null,"xMax","xMax",-576281018),new cljs.core.Keyword(null,"yMax","yMax",426890305)),null));
});

cljsketch.vector.rectangle_vertices = (function cljsketch$vector$rectangle_vertices(rect){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xMin","xMin",513480452).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"yMin","yMin",1047682135).cljs$core$IFn$_invoke$arity$1(rect)], null),null,null,null))),cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xMax","xMax",-576281018).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"yMin","yMin",1047682135).cljs$core$IFn$_invoke$arity$1(rect)], null),null,null,null))),cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xMax","xMax",-576281018).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"yMax","yMax",426890305).cljs$core$IFn$_invoke$arity$1(rect)], null),null,null,null))),cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xMin","xMin",513480452).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"yMax","yMax",426890305).cljs$core$IFn$_invoke$arity$1(rect)], null),null,null,null)))], null);
});
cljsketch.vector.line_rectangle_intersection = (function cljsketch$vector$line_rectangle_intersection(line,rect){
var verts = cljsketch.vector.rectangle_vertices.call(null,rect);
var signs = cljs.core.vec.call(null,cljs.core.map.call(null,((function (verts){
return (function (p1__61451_SHARP_){
return cljsketch.vector.dot.call(null,line,p1__61451_SHARP_);
});})(verts))
,verts));
return cljs.core.map.call(null,cljsketch.vector.toAffineVector,new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (verts,signs){
return (function (p__61456,p__61457){
var map__61458 = p__61456;
var map__61458__$1 = ((cljs.core.seq_QMARK_.call(null,map__61458))?cljs.core.apply.call(null,cljs.core.hash_map,map__61458):map__61458);
var last_sign = cljs.core.get.call(null,map__61458__$1,new cljs.core.Keyword(null,"last-sign","last-sign",-1555135543));
var last_vert = cljs.core.get.call(null,map__61458__$1,new cljs.core.Keyword(null,"last-vert","last-vert",-2033819966));
var hits = cljs.core.get.call(null,map__61458__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var vec__61459 = p__61457;
var vert = cljs.core.nth.call(null,vec__61459,(0),null);
var sign = cljs.core.nth.call(null,vec__61459,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-sign","last-sign",-1555135543),sign,new cljs.core.Keyword(null,"last-vert","last-vert",-2033819966),vert,new cljs.core.Keyword(null,"hits","hits",-2120002930),((cljs.core._EQ_.call(null,(0),sign))?cljs.core.conj.call(null,hits,vert):((((last_sign * sign) < (0)))?cljs.core.conj.call(null,hits,cljsketch.vector.line_line_intersection.call(null,cljsketch.vector.point_point_line.call(null,vert,last_vert),line)):hits
))], null);
});})(verts,signs))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-sign","last-sign",-1555135543),cljs.core.last.call(null,signs),new cljs.core.Keyword(null,"last-vert","last-vert",-2033819966),cljs.core.last.call(null,verts),new cljs.core.Keyword(null,"hits","hits",-2120002930),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,verts,signs))));
});
cljsketch.vector.dotest = (function cljsketch$vector$dotest(){
var p0 = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),null,null,null)));
var p1 = cljsketch.vector.toProjectiveVector.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),null,null,null)));
var lP = cljsketch.vector.point_point_line.call(null,p0,p1);
var rect = (new cljsketch.vector.Rectangle((-2),(-2),(2),(2),null,null,null));
return cljsketch.vector.line_rectangle_intersection.call(null,lP,rect);
});
cljsketch.vector.affine_perpendicular = (function cljsketch$vector$affine_perpendicular(avec){
var vec__61461 = avec.u;
var x = cljs.core.nth.call(null,vec__61461,(0),null);
var y = cljs.core.nth.call(null,vec__61461,(1),null);
return (new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(- x)], null),null,null,null));
});
cljsketch.vector.affine_direction = (function cljsketch$vector$affine_direction(pvec){
return cljsketch.vector.affine_perpendicular.call(null,(new cljsketch.vector.AffineVector(cljs.core.vec.call(null,cljs.core.drop_last.call(null,new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(pvec))),null,null,null)));
});
cljsketch.vector.point_line_parallel = (function cljsketch$vector$point_line_parallel(pt,ln){
var vec__61464 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(ln);
var a = cljs.core.nth.call(null,vec__61464,(0),null);
var b = cljs.core.nth.call(null,vec__61464,(1),null);
var c = cljs.core.nth.call(null,vec__61464,(2),null);
var vec__61465 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(cljsketch.vector.toAffineVector.call(null,pt));
var x = cljs.core.nth.call(null,vec__61465,(0),null);
var y = cljs.core.nth.call(null,vec__61465,(1),null);
return (new cljsketch.vector.ProjectiveVector(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,(- cljsketch.vector.vdot.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)))], null),null,null,null));
});
cljsketch.vector.point_dir_line = (function cljsketch$vector$point_dir_line(pt,dir){
var vec__61468 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(pt);
var x = cljs.core.nth.call(null,vec__61468,(0),null);
var y = cljs.core.nth.call(null,vec__61468,(1),null);
var vec__61469 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(dir);
var a = cljs.core.nth.call(null,vec__61469,(0),null);
var b = cljs.core.nth.call(null,vec__61469,(1),null);
return (new cljsketch.vector.ProjectiveVector(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(- a),((a * y) - (b * x))], null),null,null,null));
});
cljsketch.vector.point_line_perpendicular = (function cljsketch$vector$point_line_perpendicular(pt,ln){
var ln_dir = cljsketch.vector.affine_direction.call(null,ln);
var perp_dir = cljsketch.vector.affine_perpendicular.call(null,ln_dir);
return cljsketch.vector.point_dir_line.call(null,pt,perp_dir);
});
cljsketch.vector.point_line_distance_squared = (function cljsketch$vector$point_line_distance_squared(aff_point,prj_line){
var vec__61472 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(aff_point);
var x = cljs.core.nth.call(null,vec__61472,(0),null);
var y = cljs.core.nth.call(null,vec__61472,(1),null);
var vec__61473 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(prj_line);
var a = cljs.core.nth.call(null,vec__61473,(0),null);
var b = cljs.core.nth.call(null,vec__61473,(1),null);
var c = cljs.core.nth.call(null,vec__61473,(2),null);
var d = (((a * x) + (b * y)) + c);
return ((d * d) / ((a * a) + (b * b)));
});
cljsketch.vector.linear_opposites_QMARK_ = (function cljsketch$vector$linear_opposites_QMARK_(a,b){
return cljs.core.every_QMARK_.call(null,(function (p1__61474_SHARP_){
return cljs.core._EQ_.call(null,p1__61474_SHARP_,(0));
}),new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(cljsketch.vector.add.call(null,a,b)));
});
cljsketch.vector.ordered_collinear_triple_QMARK_ = (function cljsketch$vector$ordered_collinear_triple_QMARK_(a,b,c){
return cljsketch.vector.linear_opposites_QMARK_.call(null,cljsketch.vector.unitize.call(null,cljsketch.vector.cross.call(null,a,b)),cljsketch.vector.unitize.call(null,cljsketch.vector.cross.call(null,c,b)));
});
cljsketch.vector.point_segment_distance2 = (function cljsketch$vector$point_segment_distance2(a,b,c){
var a_aff = cljsketch.vector.toAffineVector.call(null,a);
var b_aff = cljsketch.vector.toAffineVector.call(null,b);
var c_aff = cljsketch.vector.toAffineVector.call(null,c);
var ab_aff = cljsketch.vector.sub.call(null,a_aff,b_aff);
var cb_aff = cljsketch.vector.sub.call(null,c_aff,b_aff);
var ac_aff = cljsketch.vector.sub.call(null,a_aff,c_aff);
var bc_aff = cljsketch.vector.sub.call(null,b_aff,c_aff);
if((cljsketch.vector.dot.call(null,ab_aff,cb_aff) <= (0))){
return cljsketch.vector.l2dist2.call(null,a_aff,b_aff);
} else {
if((cljsketch.vector.dot.call(null,ac_aff,bc_aff) <= (0))){
return cljsketch.vector.l2dist2.call(null,a_aff,c_aff);
} else {
var ln = cljsketch.vector.point_point_line.call(null,b,c);
var perp_ln = cljsketch.vector.point_line_perpendicular.call(null,a,ln);
var d = cljsketch.vector.line_line_intersection.call(null,ln,perp_ln);
return cljsketch.vector.l2dist2.call(null,cljsketch.vector.toAffineVector.call(null,a),cljsketch.vector.toAffineVector.call(null,d));

}
}
});

//# sourceMappingURL=vector.js.map?rel=1440892445857