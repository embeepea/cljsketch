// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.geom');
goog.require('cljs.core');
goog.require('cljsketch.vector');
goog.require('cljsketch.canvas_graphics');

cljsketch.geom.IGeom = (function (){var obj27091 = {};
return obj27091;
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
cljsketch.geom.point_distance2 = (function cljsketch$geom$point_distance2(this$,p__27092){
var vec__27094 = p__27092;
var x = cljs.core.nth.call(null,vec__27094,(0),null);
var y = cljs.core.nth.call(null,vec__27094,(1),null);
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

cljsketch.geom.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k27096,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__27098 = (((k27096 instanceof cljs.core.Keyword))?k27096.fqn:null);
switch (G__27098) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27096,else__16667__auto__);

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

cljsketch.geom.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__27095){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__27099 = cljs.core.keyword_identical_QMARK_;
var expr__27100 = k__16672__auto__;
if(cljs.core.truth_(pred__27099.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__27100))){
return (new cljsketch.geom.Point(G__27095,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Point(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__27095),null));
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
var vec__27102 = self__.p;
var x = cljs.core.nth.call(null,vec__27102,(0),null);
var y = cljs.core.nth.call(null,vec__27102,(1),null);
cljsketch.canvas_graphics.draw_point.call(null,ctx,x,y,(3));

if(cljs.core.truth_(highlighted_QMARK_)){
return cljsketch.canvas_graphics.draw_circle.call(null,ctx,x,y,(5),(1));
} else {
return null;
}
});

cljsketch.geom.Point.prototype.cljsketch$geom$IGeom$point_distance2$arity$2 = (function (this$,p__27103){
var self__ = this;
var vec__27104 = p__27103;
var x = cljs.core.nth.call(null,vec__27104,(0),null);
var y = cljs.core.nth.call(null,vec__27104,(1),null);
var this$__$1 = this;
return cljsketch.vector.vl2norm2.call(null,cljsketch.vector.vsub.call(null,self__.p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});

cljsketch.geom.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__27095){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Point(self__.p,G__27095,self__.__extmap,self__.__hash));
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

cljsketch.geom.map__GT_Point = (function cljsketch$geom$map__GT_Point(G__27097){
return (new cljsketch.geom.Point(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__27097),null,cljs.core.dissoc.call(null,G__27097,new cljs.core.Keyword(null,"p","p",151049309)),null));
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

cljsketch.geom.Line.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k27107,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__27109 = (((k27107 instanceof cljs.core.Keyword))?k27107.fqn:null);
switch (G__27109) {
case "u":
return self__.u;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27107,else__16667__auto__);

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

cljsketch.geom.Line.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__27106){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__27110 = cljs.core.keyword_identical_QMARK_;
var expr__27111 = k__16672__auto__;
if(cljs.core.truth_(pred__27110.call(null,new cljs.core.Keyword(null,"u","u",-1156634785),expr__27111))){
return (new cljsketch.geom.Line(G__27106,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Line(self__.u,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__27106),null));
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
var vec__27113 = endpoints;
var e0 = cljs.core.nth.call(null,vec__27113,(0),null);
var e1 = cljs.core.nth.call(null,vec__27113,(1),null);
var vec__27114 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e0);
var e0x = cljs.core.nth.call(null,vec__27114,(0),null);
var e0y = cljs.core.nth.call(null,vec__27114,(1),null);
var vec__27115 = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(e1);
var e1x = cljs.core.nth.call(null,vec__27115,(0),null);
var e1y = cljs.core.nth.call(null,vec__27115,(1),null);
return cljsketch.canvas_graphics.draw_line.call(null,ctx,e0x,e0y,e1x,e1y,(cljs.core.truth_(highlighted_QMARK_)?(3):(1)));
} else {
return null;
}
});

cljsketch.geom.Line.prototype.cljsketch$geom$IGeom$point_distance2$arity$2 = (function (this$,p__27116){
var self__ = this;
var vec__27117 = p__27116;
var x = cljs.core.nth.call(null,vec__27117,(0),null);
var y = cljs.core.nth.call(null,vec__27117,(1),null);
var this$__$1 = this;
return cljsketch.vector.point_line_distance_squared.call(null,(new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null,null,null)),self__.u);
});

cljsketch.geom.Line.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__27106){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Line(self__.u,G__27106,self__.__extmap,self__.__hash));
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

cljsketch.geom.map__GT_Line = (function cljsketch$geom$map__GT_Line(G__27108){
return (new cljsketch.geom.Line(new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(G__27108),null,cljs.core.dissoc.call(null,G__27108,new cljs.core.Keyword(null,"u","u",-1156634785)),null));
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

cljsketch.geom.Segment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16666__auto__,k27120,else__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
var G__27122 = (((k27120 instanceof cljs.core.Keyword))?k27120.fqn:null);
switch (G__27122) {
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
return cljs.core.get.call(null,self__.__extmap,k27120,else__16667__auto__);

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

cljsketch.geom.Segment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16671__auto__,k__16672__auto__,G__27119){
var self__ = this;
var this__16671__auto____$1 = this;
var pred__27123 = cljs.core.keyword_identical_QMARK_;
var expr__27124 = k__16672__auto__;
if(cljs.core.truth_(pred__27123.call(null,new cljs.core.Keyword(null,"x0","x0",410843387),expr__27124))){
return (new cljsketch.geom.Segment(G__27119,self__.y0,self__.x1,self__.y1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27123.call(null,new cljs.core.Keyword(null,"y0","y0",111454807),expr__27124))){
return (new cljsketch.geom.Segment(self__.x0,G__27119,self__.x1,self__.y1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27123.call(null,new cljs.core.Keyword(null,"x1","x1",-1863922247),expr__27124))){
return (new cljsketch.geom.Segment(self__.x0,self__.y0,G__27119,self__.y1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27123.call(null,new cljs.core.Keyword(null,"y1","y1",589123466),expr__27124))){
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,G__27119,self__.__meta,self__.__extmap,null));
} else {
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,self__.y1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16672__auto__,G__27119),null));
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

cljsketch.geom.Segment.prototype.cljsketch$geom$IGeom$point_distance2$arity$2 = (function (this$,p__27126){
var self__ = this;
var vec__27127 = p__27126;
var x = cljs.core.nth.call(null,vec__27127,(0),null);
var y = cljs.core.nth.call(null,vec__27127,(1),null);
var this$__$1 = this;
return cljsketch.vector.point_segment_distance2.call(null,(new cljsketch.vector.toProjectiveVector((new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null,null,null)))),(new cljsketch.vector.toProjectiveVector((new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x0,self__.y0], null),null,null,null)))),(new cljsketch.vector.toProjectiveVector((new cljsketch.vector.AffineVector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x1,self__.y1], null),null,null,null)))));
});

cljsketch.geom.Segment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16663__auto__,G__27119){
var self__ = this;
var this__16663__auto____$1 = this;
return (new cljsketch.geom.Segment(self__.x0,self__.y0,self__.x1,self__.y1,G__27119,self__.__extmap,self__.__hash));
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

cljsketch.geom.map__GT_Segment = (function cljsketch$geom$map__GT_Segment(G__27121){
return (new cljsketch.geom.Segment(new cljs.core.Keyword(null,"x0","x0",410843387).cljs$core$IFn$_invoke$arity$1(G__27121),new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(G__27121),new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(G__27121),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(G__27121),null,cljs.core.dissoc.call(null,G__27121,new cljs.core.Keyword(null,"x0","x0",410843387),new cljs.core.Keyword(null,"y0","y0",111454807),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y1","y1",589123466)),null));
});


//# sourceMappingURL=geom.js.map?rel=1441066036686