// Compiled by ClojureScript 0.0-3297 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__16069__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__16069__auto__){
return or__16069__auto__;
} else {
var G__25995 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__25995) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__25998 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__25998) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26002){
var vec__26003 = p__26002;
var k = cljs.core.nth.call(null,vec__26003,(0),null);
var v = cljs.core.nth.call(null,vec__26003,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__16069__auto__ = React.isValidElement;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__26005 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__26005,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__26005,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(){
var G__26009 = arguments.length;
switch (G__26009) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq26006){
var G__26007 = cljs.core.first.call(null,seq26006);
var seq26006__$1 = cljs.core.next.call(null,seq26006);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__26007,seq26006__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(){
var G__26013 = arguments.length;
switch (G__26013) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq26010){
var G__26011 = cljs.core.first.call(null,seq26010);
var seq26010__$1 = cljs.core.next.call(null,seq26010);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__26011,seq26010__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(){
var G__26017 = arguments.length;
switch (G__26017) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq26014){
var G__26015 = cljs.core.first.call(null,seq26014);
var seq26014__$1 = cljs.core.next.call(null,seq26014);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__26015,seq26014__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(){
var G__26021 = arguments.length;
switch (G__26021) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq26018){
var G__26019 = cljs.core.first.call(null,seq26018);
var seq26018__$1 = cljs.core.next.call(null,seq26018);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__26019,seq26018__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(){
var G__26025 = arguments.length;
switch (G__26025) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq26022){
var G__26023 = cljs.core.first.call(null,seq26022);
var seq26022__$1 = cljs.core.next.call(null,seq26022);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__26023,seq26022__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(){
var G__26029 = arguments.length;
switch (G__26029) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq26026){
var G__26027 = cljs.core.first.call(null,seq26026);
var seq26026__$1 = cljs.core.next.call(null,seq26026);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__26027,seq26026__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(){
var G__26033 = arguments.length;
switch (G__26033) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq26030){
var G__26031 = cljs.core.first.call(null,seq26030);
var seq26030__$1 = cljs.core.next.call(null,seq26030);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__26031,seq26030__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(){
var G__26037 = arguments.length;
switch (G__26037) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq26034){
var G__26035 = cljs.core.first.call(null,seq26034);
var seq26034__$1 = cljs.core.next.call(null,seq26034);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__26035,seq26034__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(){
var G__26041 = arguments.length;
switch (G__26041) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq26038){
var G__26039 = cljs.core.first.call(null,seq26038);
var seq26038__$1 = cljs.core.next.call(null,seq26038);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__26039,seq26038__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(){
var G__26045 = arguments.length;
switch (G__26045) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq26042){
var G__26043 = cljs.core.first.call(null,seq26042);
var seq26042__$1 = cljs.core.next.call(null,seq26042);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__26043,seq26042__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(){
var G__26049 = arguments.length;
switch (G__26049) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq26046){
var G__26047 = cljs.core.first.call(null,seq26046);
var seq26046__$1 = cljs.core.next.call(null,seq26046);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__26047,seq26046__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(){
var G__26053 = arguments.length;
switch (G__26053) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq26050){
var G__26051 = cljs.core.first.call(null,seq26050);
var seq26050__$1 = cljs.core.next.call(null,seq26050);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__26051,seq26050__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(){
var G__26057 = arguments.length;
switch (G__26057) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq26054){
var G__26055 = cljs.core.first.call(null,seq26054);
var seq26054__$1 = cljs.core.next.call(null,seq26054);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__26055,seq26054__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(){
var G__26061 = arguments.length;
switch (G__26061) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq26058){
var G__26059 = cljs.core.first.call(null,seq26058);
var seq26058__$1 = cljs.core.next.call(null,seq26058);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__26059,seq26058__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(){
var G__26065 = arguments.length;
switch (G__26065) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq26062){
var G__26063 = cljs.core.first.call(null,seq26062);
var seq26062__$1 = cljs.core.next.call(null,seq26062);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__26063,seq26062__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(){
var G__26069 = arguments.length;
switch (G__26069) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq26066){
var G__26067 = cljs.core.first.call(null,seq26066);
var seq26066__$1 = cljs.core.next.call(null,seq26066);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__26067,seq26066__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(){
var G__26073 = arguments.length;
switch (G__26073) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq26070){
var G__26071 = cljs.core.first.call(null,seq26070);
var seq26070__$1 = cljs.core.next.call(null,seq26070);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__26071,seq26070__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(){
var G__26077 = arguments.length;
switch (G__26077) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq26074){
var G__26075 = cljs.core.first.call(null,seq26074);
var seq26074__$1 = cljs.core.next.call(null,seq26074);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__26075,seq26074__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(){
var G__26081 = arguments.length;
switch (G__26081) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq26078){
var G__26079 = cljs.core.first.call(null,seq26078);
var seq26078__$1 = cljs.core.next.call(null,seq26078);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__26079,seq26078__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(){
var G__26085 = arguments.length;
switch (G__26085) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq26082){
var G__26083 = cljs.core.first.call(null,seq26082);
var seq26082__$1 = cljs.core.next.call(null,seq26082);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__26083,seq26082__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(){
var G__26089 = arguments.length;
switch (G__26089) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq26086){
var G__26087 = cljs.core.first.call(null,seq26086);
var seq26086__$1 = cljs.core.next.call(null,seq26086);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__26087,seq26086__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(){
var G__26093 = arguments.length;
switch (G__26093) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq26090){
var G__26091 = cljs.core.first.call(null,seq26090);
var seq26090__$1 = cljs.core.next.call(null,seq26090);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__26091,seq26090__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(){
var G__26097 = arguments.length;
switch (G__26097) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq26094){
var G__26095 = cljs.core.first.call(null,seq26094);
var seq26094__$1 = cljs.core.next.call(null,seq26094);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__26095,seq26094__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(){
var G__26101 = arguments.length;
switch (G__26101) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq26098){
var G__26099 = cljs.core.first.call(null,seq26098);
var seq26098__$1 = cljs.core.next.call(null,seq26098);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__26099,seq26098__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(){
var G__26105 = arguments.length;
switch (G__26105) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq26102){
var G__26103 = cljs.core.first.call(null,seq26102);
var seq26102__$1 = cljs.core.next.call(null,seq26102);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__26103,seq26102__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(){
var G__26109 = arguments.length;
switch (G__26109) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq26106){
var G__26107 = cljs.core.first.call(null,seq26106);
var seq26106__$1 = cljs.core.next.call(null,seq26106);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__26107,seq26106__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(){
var G__26113 = arguments.length;
switch (G__26113) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq26110){
var G__26111 = cljs.core.first.call(null,seq26110);
var seq26110__$1 = cljs.core.next.call(null,seq26110);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__26111,seq26110__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(){
var G__26117 = arguments.length;
switch (G__26117) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq26114){
var G__26115 = cljs.core.first.call(null,seq26114);
var seq26114__$1 = cljs.core.next.call(null,seq26114);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__26115,seq26114__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(){
var G__26121 = arguments.length;
switch (G__26121) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq26118){
var G__26119 = cljs.core.first.call(null,seq26118);
var seq26118__$1 = cljs.core.next.call(null,seq26118);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__26119,seq26118__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(){
var G__26125 = arguments.length;
switch (G__26125) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq26122){
var G__26123 = cljs.core.first.call(null,seq26122);
var seq26122__$1 = cljs.core.next.call(null,seq26122);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__26123,seq26122__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(){
var G__26129 = arguments.length;
switch (G__26129) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq26126){
var G__26127 = cljs.core.first.call(null,seq26126);
var seq26126__$1 = cljs.core.next.call(null,seq26126);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__26127,seq26126__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(){
var G__26133 = arguments.length;
switch (G__26133) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq26130){
var G__26131 = cljs.core.first.call(null,seq26130);
var seq26130__$1 = cljs.core.next.call(null,seq26130);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__26131,seq26130__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(){
var G__26141 = arguments.length;
switch (G__26141) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq26138){
var G__26139 = cljs.core.first.call(null,seq26138);
var seq26138__$1 = cljs.core.next.call(null,seq26138);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__26139,seq26138__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(){
var G__26145 = arguments.length;
switch (G__26145) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq26142){
var G__26143 = cljs.core.first.call(null,seq26142);
var seq26142__$1 = cljs.core.next.call(null,seq26142);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__26143,seq26142__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(){
var G__26149 = arguments.length;
switch (G__26149) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq26146){
var G__26147 = cljs.core.first.call(null,seq26146);
var seq26146__$1 = cljs.core.next.call(null,seq26146);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__26147,seq26146__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(){
var G__26153 = arguments.length;
switch (G__26153) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq26150){
var G__26151 = cljs.core.first.call(null,seq26150);
var seq26150__$1 = cljs.core.next.call(null,seq26150);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__26151,seq26150__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(){
var G__26157 = arguments.length;
switch (G__26157) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq26154){
var G__26155 = cljs.core.first.call(null,seq26154);
var seq26154__$1 = cljs.core.next.call(null,seq26154);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__26155,seq26154__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(){
var G__26161 = arguments.length;
switch (G__26161) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq26158){
var G__26159 = cljs.core.first.call(null,seq26158);
var seq26158__$1 = cljs.core.next.call(null,seq26158);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__26159,seq26158__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(){
var G__26165 = arguments.length;
switch (G__26165) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq26162){
var G__26163 = cljs.core.first.call(null,seq26162);
var seq26162__$1 = cljs.core.next.call(null,seq26162);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__26163,seq26162__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(){
var G__26169 = arguments.length;
switch (G__26169) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq26166){
var G__26167 = cljs.core.first.call(null,seq26166);
var seq26166__$1 = cljs.core.next.call(null,seq26166);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__26167,seq26166__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(){
var G__26173 = arguments.length;
switch (G__26173) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq26170){
var G__26171 = cljs.core.first.call(null,seq26170);
var seq26170__$1 = cljs.core.next.call(null,seq26170);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__26171,seq26170__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(){
var G__26177 = arguments.length;
switch (G__26177) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq26174){
var G__26175 = cljs.core.first.call(null,seq26174);
var seq26174__$1 = cljs.core.next.call(null,seq26174);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__26175,seq26174__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(){
var G__26181 = arguments.length;
switch (G__26181) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq26178){
var G__26179 = cljs.core.first.call(null,seq26178);
var seq26178__$1 = cljs.core.next.call(null,seq26178);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__26179,seq26178__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(){
var G__26185 = arguments.length;
switch (G__26185) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq26182){
var G__26183 = cljs.core.first.call(null,seq26182);
var seq26182__$1 = cljs.core.next.call(null,seq26182);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__26183,seq26182__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(){
var G__26189 = arguments.length;
switch (G__26189) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq26186){
var G__26187 = cljs.core.first.call(null,seq26186);
var seq26186__$1 = cljs.core.next.call(null,seq26186);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__26187,seq26186__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(){
var G__26193 = arguments.length;
switch (G__26193) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq26190){
var G__26191 = cljs.core.first.call(null,seq26190);
var seq26190__$1 = cljs.core.next.call(null,seq26190);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__26191,seq26190__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(){
var G__26197 = arguments.length;
switch (G__26197) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq26194){
var G__26195 = cljs.core.first.call(null,seq26194);
var seq26194__$1 = cljs.core.next.call(null,seq26194);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__26195,seq26194__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(){
var G__26201 = arguments.length;
switch (G__26201) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq26198){
var G__26199 = cljs.core.first.call(null,seq26198);
var seq26198__$1 = cljs.core.next.call(null,seq26198);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__26199,seq26198__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(){
var G__26205 = arguments.length;
switch (G__26205) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq26202){
var G__26203 = cljs.core.first.call(null,seq26202);
var seq26202__$1 = cljs.core.next.call(null,seq26202);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__26203,seq26202__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(){
var G__26209 = arguments.length;
switch (G__26209) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq26206){
var G__26207 = cljs.core.first.call(null,seq26206);
var seq26206__$1 = cljs.core.next.call(null,seq26206);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__26207,seq26206__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(){
var G__26213 = arguments.length;
switch (G__26213) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq26210){
var G__26211 = cljs.core.first.call(null,seq26210);
var seq26210__$1 = cljs.core.next.call(null,seq26210);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__26211,seq26210__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(){
var G__26217 = arguments.length;
switch (G__26217) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq26214){
var G__26215 = cljs.core.first.call(null,seq26214);
var seq26214__$1 = cljs.core.next.call(null,seq26214);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__26215,seq26214__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(){
var G__26221 = arguments.length;
switch (G__26221) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq26218){
var G__26219 = cljs.core.first.call(null,seq26218);
var seq26218__$1 = cljs.core.next.call(null,seq26218);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__26219,seq26218__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(){
var G__26225 = arguments.length;
switch (G__26225) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq26222){
var G__26223 = cljs.core.first.call(null,seq26222);
var seq26222__$1 = cljs.core.next.call(null,seq26222);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__26223,seq26222__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(){
var G__26229 = arguments.length;
switch (G__26229) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq26226){
var G__26227 = cljs.core.first.call(null,seq26226);
var seq26226__$1 = cljs.core.next.call(null,seq26226);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__26227,seq26226__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(){
var G__26233 = arguments.length;
switch (G__26233) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq26230){
var G__26231 = cljs.core.first.call(null,seq26230);
var seq26230__$1 = cljs.core.next.call(null,seq26230);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__26231,seq26230__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(){
var G__26237 = arguments.length;
switch (G__26237) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq26234){
var G__26235 = cljs.core.first.call(null,seq26234);
var seq26234__$1 = cljs.core.next.call(null,seq26234);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__26235,seq26234__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(){
var G__26241 = arguments.length;
switch (G__26241) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq26238){
var G__26239 = cljs.core.first.call(null,seq26238);
var seq26238__$1 = cljs.core.next.call(null,seq26238);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__26239,seq26238__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(){
var G__26245 = arguments.length;
switch (G__26245) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq26242){
var G__26243 = cljs.core.first.call(null,seq26242);
var seq26242__$1 = cljs.core.next.call(null,seq26242);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__26243,seq26242__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(){
var G__26249 = arguments.length;
switch (G__26249) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq26246){
var G__26247 = cljs.core.first.call(null,seq26246);
var seq26246__$1 = cljs.core.next.call(null,seq26246);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__26247,seq26246__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(){
var G__26253 = arguments.length;
switch (G__26253) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq26250){
var G__26251 = cljs.core.first.call(null,seq26250);
var seq26250__$1 = cljs.core.next.call(null,seq26250);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__26251,seq26250__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(){
var G__26257 = arguments.length;
switch (G__26257) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq26254){
var G__26255 = cljs.core.first.call(null,seq26254);
var seq26254__$1 = cljs.core.next.call(null,seq26254);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__26255,seq26254__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(){
var G__26261 = arguments.length;
switch (G__26261) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq26258){
var G__26259 = cljs.core.first.call(null,seq26258);
var seq26258__$1 = cljs.core.next.call(null,seq26258);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__26259,seq26258__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(){
var G__26265 = arguments.length;
switch (G__26265) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq26262){
var G__26263 = cljs.core.first.call(null,seq26262);
var seq26262__$1 = cljs.core.next.call(null,seq26262);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__26263,seq26262__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(){
var G__26269 = arguments.length;
switch (G__26269) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq26266){
var G__26267 = cljs.core.first.call(null,seq26266);
var seq26266__$1 = cljs.core.next.call(null,seq26266);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__26267,seq26266__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(){
var G__26273 = arguments.length;
switch (G__26273) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq26270){
var G__26271 = cljs.core.first.call(null,seq26270);
var seq26270__$1 = cljs.core.next.call(null,seq26270);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__26271,seq26270__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(){
var G__26277 = arguments.length;
switch (G__26277) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq26274){
var G__26275 = cljs.core.first.call(null,seq26274);
var seq26274__$1 = cljs.core.next.call(null,seq26274);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__26275,seq26274__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(){
var G__26281 = arguments.length;
switch (G__26281) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq26278){
var G__26279 = cljs.core.first.call(null,seq26278);
var seq26278__$1 = cljs.core.next.call(null,seq26278);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__26279,seq26278__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(){
var G__26285 = arguments.length;
switch (G__26285) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq26282){
var G__26283 = cljs.core.first.call(null,seq26282);
var seq26282__$1 = cljs.core.next.call(null,seq26282);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__26283,seq26282__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(){
var G__26289 = arguments.length;
switch (G__26289) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq26286){
var G__26287 = cljs.core.first.call(null,seq26286);
var seq26286__$1 = cljs.core.next.call(null,seq26286);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__26287,seq26286__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(){
var G__26293 = arguments.length;
switch (G__26293) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq26290){
var G__26291 = cljs.core.first.call(null,seq26290);
var seq26290__$1 = cljs.core.next.call(null,seq26290);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__26291,seq26290__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(){
var G__26297 = arguments.length;
switch (G__26297) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq26294){
var G__26295 = cljs.core.first.call(null,seq26294);
var seq26294__$1 = cljs.core.next.call(null,seq26294);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__26295,seq26294__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(){
var G__26301 = arguments.length;
switch (G__26301) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq26298){
var G__26299 = cljs.core.first.call(null,seq26298);
var seq26298__$1 = cljs.core.next.call(null,seq26298);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__26299,seq26298__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(){
var G__26305 = arguments.length;
switch (G__26305) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq26302){
var G__26303 = cljs.core.first.call(null,seq26302);
var seq26302__$1 = cljs.core.next.call(null,seq26302);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__26303,seq26302__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(){
var G__26309 = arguments.length;
switch (G__26309) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq26306){
var G__26307 = cljs.core.first.call(null,seq26306);
var seq26306__$1 = cljs.core.next.call(null,seq26306);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__26307,seq26306__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(){
var G__26313 = arguments.length;
switch (G__26313) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq26310){
var G__26311 = cljs.core.first.call(null,seq26310);
var seq26310__$1 = cljs.core.next.call(null,seq26310);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__26311,seq26310__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(){
var G__26317 = arguments.length;
switch (G__26317) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq26314){
var G__26315 = cljs.core.first.call(null,seq26314);
var seq26314__$1 = cljs.core.next.call(null,seq26314);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__26315,seq26314__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(){
var G__26321 = arguments.length;
switch (G__26321) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq26318){
var G__26319 = cljs.core.first.call(null,seq26318);
var seq26318__$1 = cljs.core.next.call(null,seq26318);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__26319,seq26318__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(){
var G__26325 = arguments.length;
switch (G__26325) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq26322){
var G__26323 = cljs.core.first.call(null,seq26322);
var seq26322__$1 = cljs.core.next.call(null,seq26322);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__26323,seq26322__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(){
var G__26329 = arguments.length;
switch (G__26329) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq26326){
var G__26327 = cljs.core.first.call(null,seq26326);
var seq26326__$1 = cljs.core.next.call(null,seq26326);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__26327,seq26326__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(){
var G__26333 = arguments.length;
switch (G__26333) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq26330){
var G__26331 = cljs.core.first.call(null,seq26330);
var seq26330__$1 = cljs.core.next.call(null,seq26330);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__26331,seq26330__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(){
var G__26337 = arguments.length;
switch (G__26337) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq26334){
var G__26335 = cljs.core.first.call(null,seq26334);
var seq26334__$1 = cljs.core.next.call(null,seq26334);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__26335,seq26334__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(){
var G__26341 = arguments.length;
switch (G__26341) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq26338){
var G__26339 = cljs.core.first.call(null,seq26338);
var seq26338__$1 = cljs.core.next.call(null,seq26338);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__26339,seq26338__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(){
var G__26345 = arguments.length;
switch (G__26345) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq26342){
var G__26343 = cljs.core.first.call(null,seq26342);
var seq26342__$1 = cljs.core.next.call(null,seq26342);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__26343,seq26342__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(){
var G__26349 = arguments.length;
switch (G__26349) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq26346){
var G__26347 = cljs.core.first.call(null,seq26346);
var seq26346__$1 = cljs.core.next.call(null,seq26346);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__26347,seq26346__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(){
var G__26353 = arguments.length;
switch (G__26353) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq26350){
var G__26351 = cljs.core.first.call(null,seq26350);
var seq26350__$1 = cljs.core.next.call(null,seq26350);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__26351,seq26350__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(){
var G__26357 = arguments.length;
switch (G__26357) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq26354){
var G__26355 = cljs.core.first.call(null,seq26354);
var seq26354__$1 = cljs.core.next.call(null,seq26354);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__26355,seq26354__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(){
var G__26361 = arguments.length;
switch (G__26361) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq26358){
var G__26359 = cljs.core.first.call(null,seq26358);
var seq26358__$1 = cljs.core.next.call(null,seq26358);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__26359,seq26358__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(){
var G__26365 = arguments.length;
switch (G__26365) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq26362){
var G__26363 = cljs.core.first.call(null,seq26362);
var seq26362__$1 = cljs.core.next.call(null,seq26362);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__26363,seq26362__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(){
var G__26369 = arguments.length;
switch (G__26369) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq26366){
var G__26367 = cljs.core.first.call(null,seq26366);
var seq26366__$1 = cljs.core.next.call(null,seq26366);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__26367,seq26366__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(){
var G__26373 = arguments.length;
switch (G__26373) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq26370){
var G__26371 = cljs.core.first.call(null,seq26370);
var seq26370__$1 = cljs.core.next.call(null,seq26370);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__26371,seq26370__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(){
var G__26377 = arguments.length;
switch (G__26377) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq26374){
var G__26375 = cljs.core.first.call(null,seq26374);
var seq26374__$1 = cljs.core.next.call(null,seq26374);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__26375,seq26374__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(){
var G__26381 = arguments.length;
switch (G__26381) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq26378){
var G__26379 = cljs.core.first.call(null,seq26378);
var seq26378__$1 = cljs.core.next.call(null,seq26378);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__26379,seq26378__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(){
var G__26385 = arguments.length;
switch (G__26385) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq26382){
var G__26383 = cljs.core.first.call(null,seq26382);
var seq26382__$1 = cljs.core.next.call(null,seq26382);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__26383,seq26382__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(){
var G__26389 = arguments.length;
switch (G__26389) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq26386){
var G__26387 = cljs.core.first.call(null,seq26386);
var seq26386__$1 = cljs.core.next.call(null,seq26386);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__26387,seq26386__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(){
var G__26393 = arguments.length;
switch (G__26393) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq26390){
var G__26391 = cljs.core.first.call(null,seq26390);
var seq26390__$1 = cljs.core.next.call(null,seq26390);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__26391,seq26390__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(){
var G__26397 = arguments.length;
switch (G__26397) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq26394){
var G__26395 = cljs.core.first.call(null,seq26394);
var seq26394__$1 = cljs.core.next.call(null,seq26394);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__26395,seq26394__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(){
var G__26401 = arguments.length;
switch (G__26401) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq26398){
var G__26399 = cljs.core.first.call(null,seq26398);
var seq26398__$1 = cljs.core.next.call(null,seq26398);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__26399,seq26398__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(){
var G__26405 = arguments.length;
switch (G__26405) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq26402){
var G__26403 = cljs.core.first.call(null,seq26402);
var seq26402__$1 = cljs.core.next.call(null,seq26402);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__26403,seq26402__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(){
var G__26409 = arguments.length;
switch (G__26409) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq26406){
var G__26407 = cljs.core.first.call(null,seq26406);
var seq26406__$1 = cljs.core.next.call(null,seq26406);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__26407,seq26406__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(){
var G__26413 = arguments.length;
switch (G__26413) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq26410){
var G__26411 = cljs.core.first.call(null,seq26410);
var seq26410__$1 = cljs.core.next.call(null,seq26410);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__26411,seq26410__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(){
var G__26417 = arguments.length;
switch (G__26417) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq26414){
var G__26415 = cljs.core.first.call(null,seq26414);
var seq26414__$1 = cljs.core.next.call(null,seq26414);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__26415,seq26414__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(){
var G__26421 = arguments.length;
switch (G__26421) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq26418){
var G__26419 = cljs.core.first.call(null,seq26418);
var seq26418__$1 = cljs.core.next.call(null,seq26418);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__26419,seq26418__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(){
var G__26425 = arguments.length;
switch (G__26425) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq26422){
var G__26423 = cljs.core.first.call(null,seq26422);
var seq26422__$1 = cljs.core.next.call(null,seq26422);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__26423,seq26422__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(){
var G__26429 = arguments.length;
switch (G__26429) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq26426){
var G__26427 = cljs.core.first.call(null,seq26426);
var seq26426__$1 = cljs.core.next.call(null,seq26426);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__26427,seq26426__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(){
var G__26433 = arguments.length;
switch (G__26433) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq26430){
var G__26431 = cljs.core.first.call(null,seq26430);
var seq26430__$1 = cljs.core.next.call(null,seq26430);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__26431,seq26430__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(){
var G__26437 = arguments.length;
switch (G__26437) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq26434){
var G__26435 = cljs.core.first.call(null,seq26434);
var seq26434__$1 = cljs.core.next.call(null,seq26434);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__26435,seq26434__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(){
var G__26441 = arguments.length;
switch (G__26441) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq26438){
var G__26439 = cljs.core.first.call(null,seq26438);
var seq26438__$1 = cljs.core.next.call(null,seq26438);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__26439,seq26438__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(){
var G__26445 = arguments.length;
switch (G__26445) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq26442){
var G__26443 = cljs.core.first.call(null,seq26442);
var seq26442__$1 = cljs.core.next.call(null,seq26442);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__26443,seq26442__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(){
var G__26449 = arguments.length;
switch (G__26449) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq26446){
var G__26447 = cljs.core.first.call(null,seq26446);
var seq26446__$1 = cljs.core.next.call(null,seq26446);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__26447,seq26446__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(){
var G__26453 = arguments.length;
switch (G__26453) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq26450){
var G__26451 = cljs.core.first.call(null,seq26450);
var seq26450__$1 = cljs.core.next.call(null,seq26450);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__26451,seq26450__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(){
var G__26457 = arguments.length;
switch (G__26457) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq26454){
var G__26455 = cljs.core.first.call(null,seq26454);
var seq26454__$1 = cljs.core.next.call(null,seq26454);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__26455,seq26454__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(){
var G__26461 = arguments.length;
switch (G__26461) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq26458){
var G__26459 = cljs.core.first.call(null,seq26458);
var seq26458__$1 = cljs.core.next.call(null,seq26458);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__26459,seq26458__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(){
var G__26465 = arguments.length;
switch (G__26465) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq26462){
var G__26463 = cljs.core.first.call(null,seq26462);
var seq26462__$1 = cljs.core.next.call(null,seq26462);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__26463,seq26462__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(){
var G__26469 = arguments.length;
switch (G__26469) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq26466){
var G__26467 = cljs.core.first.call(null,seq26466);
var seq26466__$1 = cljs.core.next.call(null,seq26466);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__26467,seq26466__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(){
var G__26473 = arguments.length;
switch (G__26473) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq26470){
var G__26471 = cljs.core.first.call(null,seq26470);
var seq26470__$1 = cljs.core.next.call(null,seq26470);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__26471,seq26470__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(){
var G__26477 = arguments.length;
switch (G__26477) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq26474){
var G__26475 = cljs.core.first.call(null,seq26474);
var seq26474__$1 = cljs.core.next.call(null,seq26474);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__26475,seq26474__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(){
var G__26481 = arguments.length;
switch (G__26481) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq26478){
var G__26479 = cljs.core.first.call(null,seq26478);
var seq26478__$1 = cljs.core.next.call(null,seq26478);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__26479,seq26478__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(){
var G__26485 = arguments.length;
switch (G__26485) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq26482){
var G__26483 = cljs.core.first.call(null,seq26482);
var seq26482__$1 = cljs.core.next.call(null,seq26482);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__26483,seq26482__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(){
var G__26489 = arguments.length;
switch (G__26489) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq26486){
var G__26487 = cljs.core.first.call(null,seq26486);
var seq26486__$1 = cljs.core.next.call(null,seq26486);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__26487,seq26486__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(){
var G__26493 = arguments.length;
switch (G__26493) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq26490){
var G__26491 = cljs.core.first.call(null,seq26490);
var seq26490__$1 = cljs.core.next.call(null,seq26490);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__26491,seq26490__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(){
var G__26497 = arguments.length;
switch (G__26497) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq26494){
var G__26495 = cljs.core.first.call(null,seq26494);
var seq26494__$1 = cljs.core.next.call(null,seq26494);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__26495,seq26494__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(){
var G__26501 = arguments.length;
switch (G__26501) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq26498){
var G__26499 = cljs.core.first.call(null,seq26498);
var seq26498__$1 = cljs.core.next.call(null,seq26498);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__26499,seq26498__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(){
var G__26505 = arguments.length;
switch (G__26505) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq26502){
var G__26503 = cljs.core.first.call(null,seq26502);
var seq26502__$1 = cljs.core.next.call(null,seq26502);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__26503,seq26502__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(){
var G__26137 = arguments.length;
switch (G__26137) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17120__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22934__auto__,children__22935__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__22934__auto__,children__22935__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq26134){
var G__26135 = cljs.core.first.call(null,seq26134);
var seq26134__$1 = cljs.core.next.call(null,seq26134);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__26135,seq26134__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4425__auto__){
var ks = temp__4425__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1440655367273