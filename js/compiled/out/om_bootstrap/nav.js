// Compiled by ClojureScript 0.0-3297 {}
goog.provide('om_bootstrap.nav');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('clojure.string');
om_bootstrap.nav.NavItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str], true, false));

var component_fnk__24944__auto___28088 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema28066 = schema.core.Any;
var input_schema28067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map28065","map28065",-717491874,null))], null);
var input_checker28068 = schema.core.checker.call(null,input_schema28067);
var output_checker28069 = schema.core.checker.call(null,output_schema28066);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069){
return (function om_bootstrap$nav$constructor28063(G__28070){
var validate__23140__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28070], null);
var temp__4425__auto___28090 = input_checker28068.call(null,args__23141__auto___28089);
if(cljs.core.truth_(temp__4425__auto___28090)){
var error__23142__auto___28091 = temp__4425__auto___28090;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28063","constructor28063",-1884117995,null),cljs.core.pr_str.call(null,error__23142__auto___28091)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28067,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28089,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28091], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var map28065 = G__28070;
while(true){
if(cljs.core.map_QMARK_.call(null,map28065)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28065)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map28065,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t28076 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t28076 = (function (output_checker28069,owner,validate__23140__auto__,input_schema28067,G__28070,constructor28063,input_checker28068,output_schema28066,ufv__,map28065,meta28077){
this.output_checker28069 = output_checker28069;
this.owner = owner;
this.validate__23140__auto__ = validate__23140__auto__;
this.input_schema28067 = input_schema28067;
this.G__28070 = G__28070;
this.constructor28063 = constructor28063;
this.input_checker28068 = input_checker28068;
this.output_schema28066 = output_schema28066;
this.ufv__ = ufv__;
this.map28065 = map28065;
this.meta28077 = meta28077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t28076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069){
return (function (_28078,meta28077__$1){
var self__ = this;
var _28078__$1 = this;
return (new om_bootstrap.nav.t28076(self__.output_checker28069,self__.owner,self__.validate__23140__auto__,self__.input_schema28067,self__.G__28070,self__.constructor28063,self__.input_checker28068,self__.output_schema28066,self__.ufv__,self__.map28065,meta28077__$1));
});})(owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069))
;

om_bootstrap.nav.t28076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069){
return (function (_28078){
var self__ = this;
var _28078__$1 = this;
return self__.meta28077;
});})(owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069))
;

om_bootstrap.nav.t28076.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t28076.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav-item*";
});})(owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069))
;

om_bootstrap.nav.t28076.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t28076.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__28079 = om.core.get_props.call(null,self__.owner);
var map__28079__$1 = ((cljs.core.seq_QMARK_.call(null,map__28079))?cljs.core.apply.call(null,cljs.core.hash_map,map__28079):map__28079);
var opts = cljs.core.get.call(null,map__28079__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__28079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__28080 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__28080,(0),null);
var props = cljs.core.nth.call(null,vec__28080,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__28079,map__28079__$1,opts,children,vec__28080,bs,props,classes,___$1,owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs))){
return null;
} else {
return f.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs));
}
} else {
return null;
}
});})(map__28079,map__28079__$1,opts,children,vec__28080,bs,props,classes,___$1,owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069))
;
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069))
;

om_bootstrap.nav.t28076.getBasis = ((function (owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker28069","output-checker28069",1910352770,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"validate__23140__auto__","validate__23140__auto__",889714086,null),new cljs.core.Symbol(null,"input-schema28067","input-schema28067",1457773960,null),new cljs.core.Symbol(null,"G__28070","G__28070",1431913326,null),new cljs.core.Symbol(null,"constructor28063","constructor28063",-1884117995,null),new cljs.core.Symbol(null,"input-checker28068","input-checker28068",1858540983,null),new cljs.core.Symbol(null,"output-schema28066","output-schema28066",-1726824840,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"map28065","map28065",-717491874,null),new cljs.core.Symbol(null,"meta28077","meta28077",1879271636,null)], null);
});})(owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069))
;

om_bootstrap.nav.t28076.cljs$lang$type = true;

om_bootstrap.nav.t28076.cljs$lang$ctorStr = "om-bootstrap.nav/t28076";

om_bootstrap.nav.t28076.cljs$lang$ctorPrWriter = ((function (owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"om-bootstrap.nav/t28076");
});})(owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069))
;

om_bootstrap.nav.__GT_t28076 = ((function (owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069){
return (function om_bootstrap$nav$constructor28063_$___GT_t28076(output_checker28069__$1,owner__$1,validate__23140__auto____$1,input_schema28067__$1,G__28070__$1,constructor28063__$1,input_checker28068__$1,output_schema28066__$1,ufv____$1,map28065__$1,meta28077){
return (new om_bootstrap.nav.t28076(output_checker28069__$1,owner__$1,validate__23140__auto____$1,input_schema28067__$1,G__28070__$1,constructor28063__$1,input_checker28068__$1,output_schema28066__$1,ufv____$1,map28065__$1,meta28077));
});})(owner,validate__23140__auto__,ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069))
;

}

return (new om_bootstrap.nav.t28076(output_checker28069,owner,validate__23140__auto__,input_schema28067,G__28070,om_bootstrap$nav$constructor28063,input_checker28068,output_schema28066,ufv__,map28065,null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28092 = output_checker28069.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28092)){
var error__23142__auto___28093 = temp__4425__auto___28092;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28063","constructor28063",-1884117995,null),cljs.core.pr_str.call(null,error__23142__auto___28093)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28066,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28093], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv__,output_schema28066,input_schema28067,input_checker28068,output_checker28069))
,schema.core.make_fn_schema.call(null,output_schema28066,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28067], null)));
})();
/**
 * Generates a nav item for use inside of a nav element.
 */
om_bootstrap.nav.nav_item_STAR_ = ((function (component_fnk__24944__auto___28088){
return (function om_bootstrap$nav$nav_item_STAR_(){
var argseq__17109__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17109__auto__);
});})(component_fnk__24944__auto___28088))
;

om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__24944__auto___28088){
return (function (data__24945__auto__,owner28062,p__28084){
var vec__28085 = p__28084;
var opts__24946__auto__ = cljs.core.nth.call(null,vec__28085,(0),null);
return component_fnk__24944__auto___28088.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24946__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28062,new cljs.core.Keyword(null,"data","data",-232669377),data__24945__auto__], null));
});})(component_fnk__24944__auto___28088))
;

om_bootstrap.nav.nav_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__24944__auto___28088){
return (function (seq28081){
var G__28082 = cljs.core.first.call(null,seq28081);
var seq28081__$1 = cljs.core.next.call(null,seq28081);
var G__28083 = cljs.core.first.call(null,seq28081__$1);
var seq28081__$2 = cljs.core.next.call(null,seq28081__$1);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28082,G__28083,seq28081__$2);
});})(component_fnk__24944__auto___28088))
;

om_bootstrap.nav.__GT_nav_item_STAR_ = (function om_bootstrap$nav$__GT_nav_item_STAR_(){
var G__28087 = arguments.length;
switch (G__28087) {
case 1:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__24913__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__24913__auto__);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__24913__auto__,m28064){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__24913__auto__,m28064);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___28103 = schema.utils.use_fn_validation;
var output_schema28095_28104 = om_bootstrap.types.Component;
var input_schema28096_28105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28097_28106 = schema.core.checker.call(null,input_schema28096_28105);
var output_checker28098_28107 = schema.core.checker.call(null,output_schema28095_28104);
/**
 * Inputs: [opts :- NavItem & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav_item = ((function (ufv___28103,output_schema28095_28104,input_schema28096_28105,input_checker28097_28106,output_checker28098_28107){
return (function om_bootstrap$nav$nav_item(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___28103,output_schema28095_28104,input_schema28096_28105,input_checker28097_28106,output_checker28098_28107))
;

om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28103,output_schema28095_28104,input_schema28096_28105,input_checker28097_28106,output_checker28098_28107){
return (function (G__28099,rest28100){
var validate__23140__auto__ = ufv___28103.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28108 = cljs.core.list_STAR_.call(null,G__28099,rest28100);
var temp__4425__auto___28109 = input_checker28097_28106.call(null,args__23141__auto___28108);
if(cljs.core.truth_(temp__4425__auto___28109)){
var error__23142__auto___28110 = temp__4425__auto___28109;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__23142__auto___28110)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28096_28105,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28108,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28110], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__28099;
var children = rest28100;
while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28111 = output_checker28098_28107.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28111)){
var error__23142__auto___28112 = temp__4425__auto___28111;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__23142__auto___28112)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28095_28104,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28112], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___28103,output_schema28095_28104,input_schema28096_28105,input_checker28097_28106,output_checker28098_28107))
;

om_bootstrap.nav.nav_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav_item.cljs$lang$applyTo = ((function (ufv___28103,output_schema28095_28104,input_schema28096_28105,input_checker28097_28106,output_checker28098_28107){
return (function (seq28101){
var G__28102 = cljs.core.first.call(null,seq28101);
var seq28101__$1 = cljs.core.next.call(null,seq28101);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic(G__28102,seq28101__$1);
});})(ufv___28103,output_schema28095_28104,input_schema28096_28105,input_checker28097_28106,output_checker28098_28107))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema28095_28104,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28096_28105], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___28119 = schema.utils.use_fn_validation;
var output_schema28113_28120 = schema.core.Bool;
var input_schema28114_28121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child-props","child-props",1099812184,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker28115_28122 = schema.core.checker.call(null,input_schema28114_28121);
var output_checker28116_28123 = schema.core.checker.call(null,output_schema28113_28120);
/**
 * Inputs: [child-props opts]
 * Returns: s/Bool
 * 
 * Accepts a NavItem's child props and the current options provided to
 * the Nav bar; returns true if the child component should be active,
 * false otherwise.
 */
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___28119,output_schema28113_28120,input_schema28114_28121,input_checker28115_28122,output_checker28116_28123){
return (function om_bootstrap$nav$child_active_QMARK_(G__28117,G__28118){
var validate__23140__auto__ = ufv___28119.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28117,G__28118], null);
var temp__4425__auto___28125 = input_checker28115_28122.call(null,args__23141__auto___28124);
if(cljs.core.truth_(temp__4425__auto___28125)){
var error__23142__auto___28126 = temp__4425__auto___28125;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__23142__auto___28126)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28114_28121,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28124,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28126], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var child_props = G__28117;
var opts = G__28118;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__16069__auto__ = new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(child_props);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"active-key","active-key",-2039404654).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto__)){
var ak = temp__4425__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
})();
if(cljs.core.truth_(or__16069__auto____$1)){
return or__16069__auto____$1;
} else {
var temp__4425__auto__ = new cljs.core.Keyword(null,"active-href","active-href",-1458344709).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto__)){
var ak = temp__4425__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28127 = output_checker28116_28123.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28127)){
var error__23142__auto___28128 = temp__4425__auto___28127;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__23142__auto___28128)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28113_28120,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28128], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___28119,output_schema28113_28120,input_schema28114_28121,input_checker28115_28122,output_checker28116_28123))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema28113_28120,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28114_28121], null)));
var ufv___28134 = schema.utils.use_fn_validation;
var output_schema28129_28135 = schema.core.Any;
var input_schema28130_28136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker28131_28137 = schema.core.checker.call(null,input_schema28130_28136);
var output_checker28132_28138 = schema.core.checker.call(null,output_schema28129_28135);
/**
 * Inputs: [opts]
 * 
 * Takes the options supplied to the top level nav and returns a
 * function that will CLONE the inner nav items, transferring all
 * relevant props from the outer code to the inner code.
 */
om_bootstrap.nav.clone_nav_item = ((function (ufv___28134,output_schema28129_28135,input_schema28130_28136,input_checker28131_28137,output_checker28132_28138){
return (function om_bootstrap$nav$clone_nav_item(G__28133){
var validate__23140__auto__ = ufv___28134.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28133], null);
var temp__4425__auto___28140 = input_checker28131_28137.call(null,args__23141__auto___28139);
if(cljs.core.truth_(temp__4425__auto___28140)){
var error__23142__auto___28141 = temp__4425__auto___28140;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__23142__auto___28141)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28130_28136,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28139,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28141], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__28133;
while(true){
var prop_fn = ((function (validate__23140__auto__,ufv___28134,output_schema28129_28135,input_schema28130_28136,input_checker28131_28137,output_checker28132_28138){
return (function om_bootstrap$nav$clone_nav_item_$_prop_fn(props){
var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__23140__auto__,ufv___28134,output_schema28129_28135,input_schema28130_28136,input_checker28131_28137,output_checker28132_28138))
;
return ((function (validate__23140__auto__,ufv___28134,output_schema28129_28135,input_schema28130_28136,input_checker28131_28137,output_checker28132_28138){
return (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__23140__auto__,ufv___28134,output_schema28129_28135,input_schema28130_28136,input_checker28131_28137,output_checker28132_28138))
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28142 = output_checker28132_28138.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28142)){
var error__23142__auto___28143 = temp__4425__auto___28142;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__23142__auto___28143)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28129_28135,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28143], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___28134,output_schema28129_28135,input_schema28130_28136,input_checker28131_28137,output_checker28132_28138))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema28129_28135,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28130_28136], null)));

var component_fnk__24944__auto___28170 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema28148 = schema.core.Any;
var input_schema28149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map28147","map28147",639961627,null))], null);
var input_checker28150 = schema.core.checker.call(null,input_schema28149);
var output_checker28151 = schema.core.checker.call(null,output_schema28148);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151){
return (function om_bootstrap$nav$constructor28145(G__28152){
var validate__23140__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28152], null);
var temp__4425__auto___28172 = input_checker28150.call(null,args__23141__auto___28171);
if(cljs.core.truth_(temp__4425__auto___28172)){
var error__23142__auto___28173 = temp__4425__auto___28172;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28145","constructor28145",-914723461,null),cljs.core.pr_str.call(null,error__23142__auto___28173)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28149,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28171,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28173], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var map28147 = G__28152;
while(true){
if(cljs.core.map_QMARK_.call(null,map28147)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28147)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map28147,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t28158 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t28158 = (function (G__28152,owner,validate__23140__auto__,input_schema28149,output_checker28151,output_schema28148,input_checker28150,constructor28145,map28147,ufv__,meta28159){
this.G__28152 = G__28152;
this.owner = owner;
this.validate__23140__auto__ = validate__23140__auto__;
this.input_schema28149 = input_schema28149;
this.output_checker28151 = output_checker28151;
this.output_schema28148 = output_schema28148;
this.input_checker28150 = input_checker28150;
this.constructor28145 = constructor28145;
this.map28147 = map28147;
this.ufv__ = ufv__;
this.meta28159 = meta28159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t28158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151){
return (function (_28160,meta28159__$1){
var self__ = this;
var _28160__$1 = this;
return (new om_bootstrap.nav.t28158(self__.G__28152,self__.owner,self__.validate__23140__auto__,self__.input_schema28149,self__.output_checker28151,self__.output_schema28148,self__.input_checker28150,self__.constructor28145,self__.map28147,self__.ufv__,meta28159__$1));
});})(owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151))
;

om_bootstrap.nav.t28158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151){
return (function (_28160){
var self__ = this;
var _28160__$1 = this;
return self__.meta28159;
});})(owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151))
;

om_bootstrap.nav.t28158.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t28158.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav*";
});})(owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151))
;

om_bootstrap.nav.t28158.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t28158.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__28161 = om.core.get_props.call(null,self__.owner);
var map__28161__$1 = ((cljs.core.seq_QMARK_.call(null,map__28161))?cljs.core.apply.call(null,cljs.core.hash_map,map__28161):map__28161);
var opts = cljs.core.get.call(null,map__28161__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__28161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__28162 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));
var bs = cljs.core.nth.call(null,vec__28162,(0),null);
var props = cljs.core.nth.call(null,vec__28162,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),cljs.core.not.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);
var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);
if(cljs.core.truth_((function (){var and__16057__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return and__16057__auto__;
}
})())){
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else {
return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151))
;

om_bootstrap.nav.t28158.getBasis = ((function (owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__28152","G__28152",143866595,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"validate__23140__auto__","validate__23140__auto__",889714086,null),new cljs.core.Symbol(null,"input-schema28149","input-schema28149",145778959,null),new cljs.core.Symbol(null,"output-checker28151","output-checker28151",-797403696,null),new cljs.core.Symbol(null,"output-schema28148","output-schema28148",173653968,null),new cljs.core.Symbol(null,"input-checker28150","input-checker28150",949088502,null),new cljs.core.Symbol(null,"constructor28145","constructor28145",-914723461,null),new cljs.core.Symbol(null,"map28147","map28147",639961627,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta28159","meta28159",1075827614,null)], null);
});})(owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151))
;

om_bootstrap.nav.t28158.cljs$lang$type = true;

om_bootstrap.nav.t28158.cljs$lang$ctorStr = "om-bootstrap.nav/t28158";

om_bootstrap.nav.t28158.cljs$lang$ctorPrWriter = ((function (owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"om-bootstrap.nav/t28158");
});})(owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151))
;

om_bootstrap.nav.__GT_t28158 = ((function (owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151){
return (function om_bootstrap$nav$constructor28145_$___GT_t28158(G__28152__$1,owner__$1,validate__23140__auto____$1,input_schema28149__$1,output_checker28151__$1,output_schema28148__$1,input_checker28150__$1,constructor28145__$1,map28147__$1,ufv____$1,meta28159){
return (new om_bootstrap.nav.t28158(G__28152__$1,owner__$1,validate__23140__auto____$1,input_schema28149__$1,output_checker28151__$1,output_schema28148__$1,input_checker28150__$1,constructor28145__$1,map28147__$1,ufv____$1,meta28159));
});})(owner,validate__23140__auto__,ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151))
;

}

return (new om_bootstrap.nav.t28158(G__28152,owner,validate__23140__auto__,input_schema28149,output_checker28151,output_schema28148,input_checker28150,om_bootstrap$nav$constructor28145,map28147,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28174 = output_checker28151.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28174)){
var error__23142__auto___28175 = temp__4425__auto___28174;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28145","constructor28145",-914723461,null),cljs.core.pr_str.call(null,error__23142__auto___28175)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28148,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28175], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv__,output_schema28148,input_schema28149,input_checker28150,output_checker28151))
,schema.core.make_fn_schema.call(null,output_schema28148,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28149], null)));
})();
om_bootstrap.nav.nav_STAR_ = ((function (component_fnk__24944__auto___28170){
return (function om_bootstrap$nav$nav_STAR_(){
var argseq__17109__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17109__auto__);
});})(component_fnk__24944__auto___28170))
;

om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__24944__auto___28170){
return (function (data__24945__auto__,owner28144,p__28166){
var vec__28167 = p__28166;
var opts__24946__auto__ = cljs.core.nth.call(null,vec__28167,(0),null);
return component_fnk__24944__auto___28170.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24946__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28144,new cljs.core.Keyword(null,"data","data",-232669377),data__24945__auto__], null));
});})(component_fnk__24944__auto___28170))
;

om_bootstrap.nav.nav_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_STAR_.cljs$lang$applyTo = ((function (component_fnk__24944__auto___28170){
return (function (seq28163){
var G__28164 = cljs.core.first.call(null,seq28163);
var seq28163__$1 = cljs.core.next.call(null,seq28163);
var G__28165 = cljs.core.first.call(null,seq28163__$1);
var seq28163__$2 = cljs.core.next.call(null,seq28163__$1);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28164,G__28165,seq28163__$2);
});})(component_fnk__24944__auto___28170))
;

om_bootstrap.nav.__GT_nav_STAR_ = (function om_bootstrap$nav$__GT_nav_STAR_(){
var G__28169 = arguments.length;
switch (G__28169) {
case 1:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__24913__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__24913__auto__);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__24913__auto__,m28146){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__24913__auto__,m28146);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___28185 = schema.utils.use_fn_validation;
var output_schema28177_28186 = om_bootstrap.types.Component;
var input_schema28178_28187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28179_28188 = schema.core.checker.call(null,input_schema28178_28187);
var output_checker28180_28189 = schema.core.checker.call(null,output_schema28177_28186);
/**
 * Inputs: [opts :- Nav & children]
 * Returns: t/Component
 */
om_bootstrap.nav.nav = ((function (ufv___28185,output_schema28177_28186,input_schema28178_28187,input_checker28179_28188,output_checker28180_28189){
return (function om_bootstrap$nav$nav(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___28185,output_schema28177_28186,input_schema28178_28187,input_checker28179_28188,output_checker28180_28189))
;

om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28185,output_schema28177_28186,input_schema28178_28187,input_checker28179_28188,output_checker28180_28189){
return (function (G__28181,rest28182){
var validate__23140__auto__ = ufv___28185.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28190 = cljs.core.list_STAR_.call(null,G__28181,rest28182);
var temp__4425__auto___28191 = input_checker28179_28188.call(null,args__23141__auto___28190);
if(cljs.core.truth_(temp__4425__auto___28191)){
var error__23142__auto___28192 = temp__4425__auto___28191;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__23142__auto___28192)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28178_28187,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28190,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28192], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__28181;
var children = rest28182;
while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28193 = output_checker28180_28189.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28193)){
var error__23142__auto___28194 = temp__4425__auto___28193;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__23142__auto___28194)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28177_28186,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28194], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___28185,output_schema28177_28186,input_schema28178_28187,input_checker28179_28188,output_checker28180_28189))
;

om_bootstrap.nav.nav.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav.cljs$lang$applyTo = ((function (ufv___28185,output_schema28177_28186,input_schema28178_28187,input_checker28179_28188,output_checker28180_28189){
return (function (seq28183){
var G__28184 = cljs.core.first.call(null,seq28183);
var seq28183__$1 = cljs.core.next.call(null,seq28183);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic(G__28184,seq28183__$1);
});})(ufv___28185,output_schema28177_28186,input_schema28178_28187,input_checker28179_28188,output_checker28180_28189))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema28177_28186,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28178_28187], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function om_bootstrap$nav$render_toggle_button(owner,bs){
var handle_toggle = (function (){
var temp__4425__auto___28195 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___28195)){
var f_28196 = temp__4425__auto___28195;
om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);

f_28196.call(null);

om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),false);
} else {
}

return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582)], null),cljs.core.not);
});
var tb = om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_toggle], null));
return cljs.core.apply.call(null,React.DOM.button,{"className": "navbar-toggle", "type": "button", "onClick": om_tools.dom.format_opts.call(null,handle_toggle)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__16069__auto__ = tb;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "sr-only", "key": (0)},"Toggle navigation"),React.DOM.span({"className": "icon-bar", "key": (1)}),React.DOM.span({"className": "icon-bar", "key": (2)}),React.DOM.span({"className": "icon-bar", "key": (3)})], null);
}
})()],null))));
});
var ufv___28202 = schema.utils.use_fn_validation;
var output_schema28197_28203 = schema.core.Bool;
var input_schema28198_28204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"bs","bs",-906042210,null))], null);
var input_checker28199_28205 = schema.core.checker.call(null,input_schema28198_28204);
var output_checker28200_28206 = schema.core.checker.call(null,output_schema28197_28203);
/**
 * Inputs: [bs]
 * Returns: s/Bool
 * 
 * Returns true if any of the necessary properties are in place to
 * render the navbar-header and toggle button.
 */
om_bootstrap.nav.render_header_and_toggle_btn_QMARK_ = ((function (ufv___28202,output_schema28197_28203,input_schema28198_28204,input_checker28199_28205,output_checker28200_28206){
return (function om_bootstrap$nav$render_header_and_toggle_btn_QMARK_(G__28201){
var validate__23140__auto__ = ufv___28202.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28201], null);
var temp__4425__auto___28208 = input_checker28199_28205.call(null,args__23141__auto___28207);
if(cljs.core.truth_(temp__4425__auto___28208)){
var error__23142__auto___28209 = temp__4425__auto___28208;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),cljs.core.pr_str.call(null,error__23142__auto___28209)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28198_28204,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28207,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28209], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var bs = G__28201;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__16069__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__16069__auto____$1)){
return or__16069__auto____$1;
} else {
return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28210 = output_checker28200_28206.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28210)){
var error__23142__auto___28211 = temp__4425__auto___28210;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),cljs.core.pr_str.call(null,error__23142__auto___28211)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28197_28203,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28211], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___28202,output_schema28197_28203,input_schema28198_28204,input_checker28199_28205,output_checker28200_28206))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.render_header_and_toggle_btn_QMARK_),schema.core.make_fn_schema.call(null,output_schema28197_28203,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28198_28204], null)));
om_bootstrap.nav.render_header = (function om_bootstrap$nav$render_header(owner,bs){
return cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.util.strict_valid_component_QMARK_.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)))?om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null)):cljs.core.apply.call(null,React.DOM.span,{"className": "navbar-brand"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)],null))))),(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_toggle_button.call(null,owner,bs):null)],null))));
});
om_bootstrap.nav.render_navbar_child = (function om_bootstrap$nav$render_navbar_child(owner,child,bs){
var f = (function (props){
var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props);
var collapsible_QMARK_ = (function (){var or__16069__auto__ = new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
}
})();
var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),collapsible_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),(function (){var and__16057__auto__ = collapsible_QMARK_;
if(cljs.core.truth_(and__16057__auto__)){
var or__16069__auto__ = new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582));
}
} else {
return and__16057__auto__;
}
})()], null);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});
return om_bootstrap.util.clone_with_props.call(null,child,f);
});

var component_fnk__24944__auto___28238 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema28218 = schema.core.Any;
var input_schema28219 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map28216","map28216",-119680577,null))], null);
var input_checker28220 = schema.core.checker.call(null,input_schema28219);
var output_checker28221 = schema.core.checker.call(null,output_schema28218);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function om_bootstrap$nav$constructor28214(G__28222){
var validate__23140__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28222], null);
var temp__4425__auto___28240 = input_checker28220.call(null,args__23141__auto___28239);
if(cljs.core.truth_(temp__4425__auto___28240)){
var error__23142__auto___28241 = temp__4425__auto___28240;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28214","constructor28214",-331267335,null),cljs.core.pr_str.call(null,error__23142__auto___28241)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28219,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28239,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28241], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var map28216 = G__28222;
while(true){
if(cljs.core.map_QMARK_.call(null,map28216)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28216)));
}

var map28217 = plumbing.fnk.schema.safe_get.call(null,map28216,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map28217,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map28217,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map28216,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t28227 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.nav.t28227 = (function (owner,output_checker28221,validate__23140__auto__,children,G__28222,map28217,input_schema28219,input_checker28220,output_schema28218,constructor28214,opts,ufv__,map28216,meta28228){
this.owner = owner;
this.output_checker28221 = output_checker28221;
this.validate__23140__auto__ = validate__23140__auto__;
this.children = children;
this.G__28222 = G__28222;
this.map28217 = map28217;
this.input_schema28219 = input_schema28219;
this.input_checker28220 = input_checker28220;
this.output_schema28218 = output_schema28218;
this.constructor28214 = constructor28214;
this.opts = opts;
this.ufv__ = ufv__;
this.map28216 = map28216;
this.meta28228 = meta28228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t28227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function (_28229,meta28228__$1){
var self__ = this;
var _28229__$1 = this;
return (new om_bootstrap.nav.t28227(self__.owner,self__.output_checker28221,self__.validate__23140__auto__,self__.children,self__.G__28222,self__.map28217,self__.input_schema28219,self__.input_checker28220,self__.output_schema28218,self__.constructor28214,self__.opts,self__.ufv__,self__.map28216,meta28228__$1));
});})(owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
;

om_bootstrap.nav.t28227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function (_28229){
var self__ = this;
var _28229__$1 = this;
return self__.meta28228;
});})(owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
;

om_bootstrap.nav.t28227.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t28227.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function (_){
var self__ = this;
var ___$1 = this;
return "navbar*";
});})(owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
;

om_bootstrap.nav.t28227.prototype.om$core$IInitState$ = true;

om_bootstrap.nav.t28227.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
;

om_bootstrap.nav.t28227.prototype.om$core$IShouldUpdate$ = true;

om_bootstrap.nav.t28227.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function (_,___$1,next_state){
var self__ = this;
var ___$2 = this;
return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
;

om_bootstrap.nav.t28227.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t28227.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__28230 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function() { 
var G__28242__delegate = function (opts__$1,c){
return om_tools.dom.element.call(null,React.DOM.nav,opts__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__28242 = function (opts__$1,var_args){
var c = null;
if (arguments.length > 1) {
var G__28243__i = 0, G__28243__a = new Array(arguments.length -  1);
while (G__28243__i < G__28243__a.length) {G__28243__a[G__28243__i] = arguments[G__28243__i + 1]; ++G__28243__i;}
  c = new cljs.core.IndexedSeq(G__28243__a,0);
} 
return G__28242__delegate.call(this,opts__$1,c);};
G__28242.cljs$lang$maxFixedArity = 1;
G__28242.cljs$lang$applyTo = (function (arglist__28244){
var opts__$1 = cljs.core.first(arglist__28244);
var c = cljs.core.rest(arglist__28244);
return G__28242__delegate(opts__$1,c);
});
G__28242.cljs$core$IFn$_invoke$arity$variadic = G__28242__delegate;
return G__28242;
})()
;})(___$1,owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
], null));
var bs = cljs.core.nth.call(null,vec__28230,(0),null);
var props = cljs.core.nth.call(null,vec__28230,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));
return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__28230,bs,props,classes,___$1,owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function (p1__28212_SHARP_){
return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__28212_SHARP_,bs);
});})(vec__28230,bs,props,classes,___$1,owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
,self__.children)],null)))));
});})(owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
;

om_bootstrap.nav.t28227.getBasis = ((function (owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"output-checker28221","output-checker28221",18918021,null),new cljs.core.Symbol(null,"validate__23140__auto__","validate__23140__auto__",889714086,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"G__28222","G__28222",-509795246,null),new cljs.core.Symbol(null,"map28217","map28217",-700275466,null),new cljs.core.Symbol(null,"input-schema28219","input-schema28219",1705636342,null),new cljs.core.Symbol(null,"input-checker28220","input-checker28220",-627981161,null),new cljs.core.Symbol(null,"output-schema28218","output-schema28218",1590733687,null),new cljs.core.Symbol(null,"constructor28214","constructor28214",-331267335,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"map28216","map28216",-119680577,null),new cljs.core.Symbol(null,"meta28228","meta28228",1690384345,null)], null);
});})(owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
;

om_bootstrap.nav.t28227.cljs$lang$type = true;

om_bootstrap.nav.t28227.cljs$lang$ctorStr = "om-bootstrap.nav/t28227";

om_bootstrap.nav.t28227.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"om-bootstrap.nav/t28227");
});})(owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
;

om_bootstrap.nav.__GT_t28227 = ((function (owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221){
return (function om_bootstrap$nav$constructor28214_$___GT_t28227(owner__$1,output_checker28221__$1,validate__23140__auto____$1,children__$1,G__28222__$1,map28217__$1,input_schema28219__$1,input_checker28220__$1,output_schema28218__$1,constructor28214__$1,opts__$1,ufv____$1,map28216__$1,meta28228){
return (new om_bootstrap.nav.t28227(owner__$1,output_checker28221__$1,validate__23140__auto____$1,children__$1,G__28222__$1,map28217__$1,input_schema28219__$1,input_checker28220__$1,output_schema28218__$1,constructor28214__$1,opts__$1,ufv____$1,map28216__$1,meta28228));
});})(owner,children,opts,map28217,validate__23140__auto__,ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
;

}

return (new om_bootstrap.nav.t28227(owner,output_checker28221,validate__23140__auto__,children,G__28222,map28217,input_schema28219,input_checker28220,output_schema28218,om_bootstrap$nav$constructor28214,opts,ufv__,map28216,null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28245 = output_checker28221.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28245)){
var error__23142__auto___28246 = temp__4425__auto___28245;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28214","constructor28214",-331267335,null),cljs.core.pr_str.call(null,error__23142__auto___28246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28218,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28246], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv__,output_schema28218,input_schema28219,input_checker28220,output_checker28221))
,schema.core.make_fn_schema.call(null,output_schema28218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28219], null)));
})();
om_bootstrap.nav.navbar_STAR_ = ((function (component_fnk__24944__auto___28238){
return (function om_bootstrap$nav$navbar_STAR_(){
var argseq__17109__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17109__auto__);
});})(component_fnk__24944__auto___28238))
;

om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__24944__auto___28238){
return (function (data__24945__auto__,owner28213,p__28234){
var vec__28235 = p__28234;
var opts__24946__auto__ = cljs.core.nth.call(null,vec__28235,(0),null);
return component_fnk__24944__auto___28238.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24946__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28213,new cljs.core.Keyword(null,"data","data",-232669377),data__24945__auto__], null));
});})(component_fnk__24944__auto___28238))
;

om_bootstrap.nav.navbar_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.navbar_STAR_.cljs$lang$applyTo = ((function (component_fnk__24944__auto___28238){
return (function (seq28231){
var G__28232 = cljs.core.first.call(null,seq28231);
var seq28231__$1 = cljs.core.next.call(null,seq28231);
var G__28233 = cljs.core.first.call(null,seq28231__$1);
var seq28231__$2 = cljs.core.next.call(null,seq28231__$1);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28232,G__28233,seq28231__$2);
});})(component_fnk__24944__auto___28238))
;

om_bootstrap.nav.__GT_navbar_STAR_ = (function om_bootstrap$nav$__GT_navbar_STAR_(){
var G__28237 = arguments.length;
switch (G__28237) {
case 1:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__24913__auto__){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__24913__auto__);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__24913__auto__,m28215){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__24913__auto__,m28215);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___28256 = schema.utils.use_fn_validation;
var output_schema28248_28257 = schema.core.Any;
var input_schema28249_28258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28250_28259 = schema.core.checker.call(null,input_schema28249_28258);
var output_checker28251_28260 = schema.core.checker.call(null,output_schema28248_28257);
/**
 * Inputs: [opts :- NavBar & children]
 */
om_bootstrap.nav.navbar = ((function (ufv___28256,output_schema28248_28257,input_schema28249_28258,input_checker28250_28259,output_checker28251_28260){
return (function om_bootstrap$nav$navbar(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___28256,output_schema28248_28257,input_schema28249_28258,input_checker28250_28259,output_checker28251_28260))
;

om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28256,output_schema28248_28257,input_schema28249_28258,input_checker28250_28259,output_checker28251_28260){
return (function (G__28252,rest28253){
var validate__23140__auto__ = ufv___28256.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28261 = cljs.core.list_STAR_.call(null,G__28252,rest28253);
var temp__4425__auto___28262 = input_checker28250_28259.call(null,args__23141__auto___28261);
if(cljs.core.truth_(temp__4425__auto___28262)){
var error__23142__auto___28263 = temp__4425__auto___28262;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__23142__auto___28263)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28249_28258,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28261,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28263], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__28252;
var children = rest28253;
while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28264 = output_checker28251_28260.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28264)){
var error__23142__auto___28265 = temp__4425__auto___28264;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__23142__auto___28265)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28248_28257,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28265], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___28256,output_schema28248_28257,input_schema28249_28258,input_checker28250_28259,output_checker28251_28260))
;

om_bootstrap.nav.navbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.navbar.cljs$lang$applyTo = ((function (ufv___28256,output_schema28248_28257,input_schema28249_28258,input_checker28250_28259,output_checker28251_28260){
return (function (seq28254){
var G__28255 = cljs.core.first.call(null,seq28254);
var seq28254__$1 = cljs.core.next.call(null,seq28254);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic(G__28255,seq28254__$1);
});})(ufv___28256,output_schema28248_28257,input_schema28249_28258,input_checker28250_28259,output_checker28251_28260))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema28248_28257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28249_28258], null)));

//# sourceMappingURL=nav.js.map?rel=1440655371943