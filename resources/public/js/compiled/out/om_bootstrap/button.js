// Compiled by ClojureScript 0.0-3297 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___26665 = schema.utils.use_fn_validation;
var output_schema26659_26666 = schema.core.Any;
var input_schema26660_26667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker26661_26668 = schema.core.checker.call(null,input_schema26660_26667);
var output_checker26662_26669 = schema.core.checker.call(null,output_schema26659_26666);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___26665,output_schema26659_26666,input_schema26660_26667,input_checker26661_26668,output_checker26662_26669){
return (function om_bootstrap$button$render_anchor(G__26663,G__26664){
var validate__23140__auto__ = ufv___26665.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26663,G__26664], null);
var temp__4425__auto___26671 = input_checker26661_26668.call(null,args__23141__auto___26670);
if(cljs.core.truth_(temp__4425__auto___26671)){
var error__23142__auto___26672 = temp__4425__auto___26671;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__23142__auto___26672)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26660_26667,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26670,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26672], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__26663;
var children = G__26664;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26673 = output_checker26662_26669.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26673)){
var error__23142__auto___26674 = temp__4425__auto___26673;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__23142__auto___26674)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26659_26666,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26674], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26665,output_schema26659_26666,input_schema26660_26667,input_checker26661_26668,output_checker26662_26669))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema26659_26666,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26660_26667], null)));
var ufv___26684 = schema.utils.use_fn_validation;
var output_schema26675_26685 = om_bootstrap.types.Component;
var input_schema26676_26686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);
var input_checker26677_26687 = schema.core.checker.call(null,input_schema26676_26686);
var output_checker26678_26688 = schema.core.checker.call(null,output_schema26675_26685);
/**
 * Inputs: [props :- Button & children]
 * Returns: t/Component
 * 
 * Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___26684,output_schema26675_26685,input_schema26676_26686,input_checker26677_26687,output_checker26678_26688){
return (function om_bootstrap$button$button(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___26684,output_schema26675_26685,input_schema26676_26686,input_checker26677_26687,output_checker26678_26688))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26684,output_schema26675_26685,input_schema26676_26686,input_checker26677_26687,output_checker26678_26688){
return (function (G__26679,rest26680){
var validate__23140__auto__ = ufv___26684.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26689 = cljs.core.list_STAR_.call(null,G__26679,rest26680);
var temp__4425__auto___26690 = input_checker26677_26687.call(null,args__23141__auto___26689);
if(cljs.core.truth_(temp__4425__auto___26690)){
var error__23142__auto___26691 = temp__4425__auto___26690;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__23142__auto___26691)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26676_26686,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26689,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26691], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var props = G__26679;
var children = rest26680;
while(true){
var vec__26683 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__26683,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__26683,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__16069__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26692 = output_checker26678_26688.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26692)){
var error__23142__auto___26693 = temp__4425__auto___26692;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__23142__auto___26693)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26675_26685,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26693], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26684,output_schema26675_26685,input_schema26676_26686,input_checker26677_26687,output_checker26678_26688))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___26684,output_schema26675_26685,input_schema26676_26686,input_checker26677_26687,output_checker26678_26688){
return (function (seq26681){
var G__26682 = cljs.core.first.call(null,seq26681);
var seq26681__$1 = cljs.core.next.call(null,seq26681);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__26682,seq26681__$1);
});})(ufv___26684,output_schema26675_26685,input_schema26676_26686,input_checker26677_26687,output_checker26678_26688))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema26675_26685,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26676_26686], null)));
var ufv___26703 = schema.utils.use_fn_validation;
var output_schema26694_26704 = om_bootstrap.types.Component;
var input_schema26695_26705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26696_26706 = schema.core.checker.call(null,input_schema26695_26705);
var output_checker26697_26707 = schema.core.checker.call(null,output_schema26694_26704);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___26703,output_schema26694_26704,input_schema26695_26705,input_checker26696_26706,output_checker26697_26707){
return (function om_bootstrap$button$toolbar(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___26703,output_schema26694_26704,input_schema26695_26705,input_checker26696_26706,output_checker26697_26707))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26703,output_schema26694_26704,input_schema26695_26705,input_checker26696_26706,output_checker26697_26707){
return (function (G__26698,rest26699){
var validate__23140__auto__ = ufv___26703.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26708 = cljs.core.list_STAR_.call(null,G__26698,rest26699);
var temp__4425__auto___26709 = input_checker26696_26706.call(null,args__23141__auto___26708);
if(cljs.core.truth_(temp__4425__auto___26709)){
var error__23142__auto___26710 = temp__4425__auto___26709;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__23142__auto___26710)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26695_26705,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26708,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26710], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__26698;
var children = rest26699;
while(true){
var vec__26702 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__26702,(0),null);
var props = cljs.core.nth.call(null,vec__26702,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26711 = output_checker26697_26707.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26711)){
var error__23142__auto___26712 = temp__4425__auto___26711;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__23142__auto___26712)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26694_26704,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26712], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26703,output_schema26694_26704,input_schema26695_26705,input_checker26696_26706,output_checker26697_26707))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___26703,output_schema26694_26704,input_schema26695_26705,input_checker26696_26706,output_checker26697_26707){
return (function (seq26700){
var G__26701 = cljs.core.first.call(null,seq26700);
var seq26700__$1 = cljs.core.next.call(null,seq26700);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__26701,seq26700__$1);
});})(ufv___26703,output_schema26694_26704,input_schema26695_26705,input_checker26696_26706,output_checker26697_26707))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema26694_26704,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26695_26705], null)));
var ufv___26722 = schema.utils.use_fn_validation;
var output_schema26713_26723 = om_bootstrap.types.Component;
var input_schema26714_26724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26715_26725 = schema.core.checker.call(null,input_schema26714_26724);
var output_checker26716_26726 = schema.core.checker.call(null,output_schema26713_26723);
/**
 * Inputs: [opts :- ButtonGroup & children]
 * Returns: t/Component
 * 
 * Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___26722,output_schema26713_26723,input_schema26714_26724,input_checker26715_26725,output_checker26716_26726){
return (function om_bootstrap$button$button_group(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___26722,output_schema26713_26723,input_schema26714_26724,input_checker26715_26725,output_checker26716_26726))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26722,output_schema26713_26723,input_schema26714_26724,input_checker26715_26725,output_checker26716_26726){
return (function (G__26717,rest26718){
var validate__23140__auto__ = ufv___26722.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26727 = cljs.core.list_STAR_.call(null,G__26717,rest26718);
var temp__4425__auto___26728 = input_checker26715_26725.call(null,args__23141__auto___26727);
if(cljs.core.truth_(temp__4425__auto___26728)){
var error__23142__auto___26729 = temp__4425__auto___26728;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__23142__auto___26729)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26714_26724,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26727,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26729], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__26717;
var children = rest26718;
while(true){
var vec__26721 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__26721,(0),null);
var props = cljs.core.nth.call(null,vec__26721,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26730 = output_checker26716_26726.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26730)){
var error__23142__auto___26731 = temp__4425__auto___26730;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__23142__auto___26731)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26713_26723,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26731], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26722,output_schema26713_26723,input_schema26714_26724,input_checker26715_26725,output_checker26716_26726))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___26722,output_schema26713_26723,input_schema26714_26724,input_checker26715_26725,output_checker26716_26726){
return (function (seq26719){
var G__26720 = cljs.core.first.call(null,seq26719);
var seq26719__$1 = cljs.core.next.call(null,seq26719);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__26720,seq26719__$1);
});})(ufv___26722,output_schema26713_26723,input_schema26714_26724,input_checker26715_26725,output_checker26716_26726))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema26713_26723,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26714_26724], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__24944__auto___26758 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema26736 = schema.core.Any;
var input_schema26737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map26735","map26735",-1036358545,null))], null);
var input_checker26738 = schema.core.checker.call(null,input_schema26737);
var output_checker26739 = schema.core.checker.call(null,output_schema26736);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739){
return (function om_bootstrap$button$constructor26733(G__26740){
var validate__23140__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26740], null);
var temp__4425__auto___26760 = input_checker26738.call(null,args__23141__auto___26759);
if(cljs.core.truth_(temp__4425__auto___26760)){
var error__23142__auto___26761 = temp__4425__auto___26760;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26733","constructor26733",1616755162,null),cljs.core.pr_str.call(null,error__23142__auto___26761)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26737,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26759,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26761], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var map26735 = G__26740;
while(true){
if(cljs.core.map_QMARK_.call(null,map26735)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map26735)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map26735,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t26746 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t26746 = (function (owner,validate__23140__auto__,output_schema26736,input_schema26737,G__26740,map26735,output_checker26739,constructor26733,input_checker26738,ufv__,meta26747){
this.owner = owner;
this.validate__23140__auto__ = validate__23140__auto__;
this.output_schema26736 = output_schema26736;
this.input_schema26737 = input_schema26737;
this.G__26740 = G__26740;
this.map26735 = map26735;
this.output_checker26739 = output_checker26739;
this.constructor26733 = constructor26733;
this.input_checker26738 = input_checker26738;
this.ufv__ = ufv__;
this.meta26747 = meta26747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t26746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739){
return (function (_26748,meta26747__$1){
var self__ = this;
var _26748__$1 = this;
return (new om_bootstrap.button.t26746(self__.owner,self__.validate__23140__auto__,self__.output_schema26736,self__.input_schema26737,self__.G__26740,self__.map26735,self__.output_checker26739,self__.constructor26733,self__.input_checker26738,self__.ufv__,meta26747__$1));
});})(owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739))
;

om_bootstrap.button.t26746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739){
return (function (_26748){
var self__ = this;
var _26748__$1 = this;
return self__.meta26747;
});})(owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739))
;

om_bootstrap.button.t26746.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t26746.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739))
;

om_bootstrap.button.t26746.prototype.om$core$IRender$ = true;

om_bootstrap.button.t26746.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__26749 = om.core.get_props.call(null,self__.owner);
var map__26749__$1 = ((cljs.core.seq_QMARK_.call(null,map__26749))?cljs.core.apply.call(null,cljs.core.hash_map,map__26749):map__26749);
var opts = cljs.core.get.call(null,map__26749__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__26749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__26750 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__26750,(0),null);
var props = cljs.core.nth.call(null,vec__26750,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__26749,map__26749__$1,opts,children,vec__26750,bs,props,classes,___$1,owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var on_select = temp__4425__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__26749,map__26749__$1,opts,children,vec__26750,bs,props,classes,___$1,owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "tabIndex": "-1"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var k = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739))
;

om_bootstrap.button.t26746.getBasis = ((function (owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"validate__23140__auto__","validate__23140__auto__",889714086,null),new cljs.core.Symbol(null,"output-schema26736","output-schema26736",-1639754456,null),new cljs.core.Symbol(null,"input-schema26737","input-schema26737",455761388,null),new cljs.core.Symbol(null,"G__26740","G__26740",1598392814,null),new cljs.core.Symbol(null,"map26735","map26735",-1036358545,null),new cljs.core.Symbol(null,"output-checker26739","output-checker26739",99104052,null),new cljs.core.Symbol(null,"constructor26733","constructor26733",1616755162,null),new cljs.core.Symbol(null,"input-checker26738","input-checker26738",95834589,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta26747","meta26747",1532024212,null)], null);
});})(owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739))
;

om_bootstrap.button.t26746.cljs$lang$type = true;

om_bootstrap.button.t26746.cljs$lang$ctorStr = "om-bootstrap.button/t26746";

om_bootstrap.button.t26746.cljs$lang$ctorPrWriter = ((function (owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"om-bootstrap.button/t26746");
});})(owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739))
;

om_bootstrap.button.__GT_t26746 = ((function (owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739){
return (function om_bootstrap$button$constructor26733_$___GT_t26746(owner__$1,validate__23140__auto____$1,output_schema26736__$1,input_schema26737__$1,G__26740__$1,map26735__$1,output_checker26739__$1,constructor26733__$1,input_checker26738__$1,ufv____$1,meta26747){
return (new om_bootstrap.button.t26746(owner__$1,validate__23140__auto____$1,output_schema26736__$1,input_schema26737__$1,G__26740__$1,map26735__$1,output_checker26739__$1,constructor26733__$1,input_checker26738__$1,ufv____$1,meta26747));
});})(owner,validate__23140__auto__,ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739))
;

}

return (new om_bootstrap.button.t26746(owner,validate__23140__auto__,output_schema26736,input_schema26737,G__26740,map26735,output_checker26739,om_bootstrap$button$constructor26733,input_checker26738,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26762 = output_checker26739.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26762)){
var error__23142__auto___26763 = temp__4425__auto___26762;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26733","constructor26733",1616755162,null),cljs.core.pr_str.call(null,error__23142__auto___26763)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26736,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26763], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv__,output_schema26736,input_schema26737,input_checker26738,output_checker26739))
,schema.core.make_fn_schema.call(null,output_schema26736,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26737], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 * wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__24944__auto___26758){
return (function om_bootstrap$button$menu_item_STAR_(){
var argseq__17109__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17109__auto__);
});})(component_fnk__24944__auto___26758))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__24944__auto___26758){
return (function (data__24945__auto__,owner26732,p__26754){
var vec__26755 = p__26754;
var opts__24946__auto__ = cljs.core.nth.call(null,vec__26755,(0),null);
return component_fnk__24944__auto___26758.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24946__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner26732,new cljs.core.Keyword(null,"data","data",-232669377),data__24945__auto__], null));
});})(component_fnk__24944__auto___26758))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__24944__auto___26758){
return (function (seq26751){
var G__26752 = cljs.core.first.call(null,seq26751);
var seq26751__$1 = cljs.core.next.call(null,seq26751);
var G__26753 = cljs.core.first.call(null,seq26751__$1);
var seq26751__$2 = cljs.core.next.call(null,seq26751__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26752,G__26753,seq26751__$2);
});})(component_fnk__24944__auto___26758))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(){
var G__26757 = arguments.length;
switch (G__26757) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__24913__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__24913__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__24913__auto__,m26734){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__24913__auto__,m26734);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___26773 = schema.utils.use_fn_validation;
var output_schema26765_26774 = om_bootstrap.types.Component;
var input_schema26766_26775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26767_26776 = schema.core.checker.call(null,input_schema26766_26775);
var output_checker26768_26777 = schema.core.checker.call(null,output_schema26765_26774);
/**
 * Inputs: [opts :- MenuItem & children]
 * Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___26773,output_schema26765_26774,input_schema26766_26775,input_checker26767_26776,output_checker26768_26777){
return (function om_bootstrap$button$menu_item(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___26773,output_schema26765_26774,input_schema26766_26775,input_checker26767_26776,output_checker26768_26777))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26773,output_schema26765_26774,input_schema26766_26775,input_checker26767_26776,output_checker26768_26777){
return (function (G__26769,rest26770){
var validate__23140__auto__ = ufv___26773.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26778 = cljs.core.list_STAR_.call(null,G__26769,rest26770);
var temp__4425__auto___26779 = input_checker26767_26776.call(null,args__23141__auto___26778);
if(cljs.core.truth_(temp__4425__auto___26779)){
var error__23142__auto___26780 = temp__4425__auto___26779;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__23142__auto___26780)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26766_26775,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26778,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26780], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__26769;
var children = rest26770;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26781 = output_checker26768_26777.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26781)){
var error__23142__auto___26782 = temp__4425__auto___26781;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__23142__auto___26782)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26765_26774,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26782], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26773,output_schema26765_26774,input_schema26766_26775,input_checker26767_26776,output_checker26768_26777))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___26773,output_schema26765_26774,input_schema26766_26775,input_checker26767_26776,output_checker26768_26777){
return (function (seq26771){
var G__26772 = cljs.core.first.call(null,seq26771);
var seq26771__$1 = cljs.core.next.call(null,seq26771);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__26772,seq26771__$1);
});})(ufv___26773,output_schema26765_26774,input_schema26766_26775,input_checker26767_26776,output_checker26768_26777))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema26765_26774,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26766_26775], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___26793 = schema.utils.use_fn_validation;
var output_schema26784_26794 = om_bootstrap.types.Component;
var input_schema26785_26795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26786_26796 = schema.core.checker.call(null,input_schema26785_26795);
var output_checker26787_26797 = schema.core.checker.call(null,output_schema26784_26794);
/**
 * Inputs: [opts :- DropdownMenu & children]
 * Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___26793,output_schema26784_26794,input_schema26785_26795,input_checker26786_26796,output_checker26787_26797){
return (function om_bootstrap$button$dropdown_menu(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___26793,output_schema26784_26794,input_schema26785_26795,input_checker26786_26796,output_checker26787_26797))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26793,output_schema26784_26794,input_schema26785_26795,input_checker26786_26796,output_checker26787_26797){
return (function (G__26788,rest26789){
var validate__23140__auto__ = ufv___26793.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26798 = cljs.core.list_STAR_.call(null,G__26788,rest26789);
var temp__4425__auto___26799 = input_checker26786_26796.call(null,args__23141__auto___26798);
if(cljs.core.truth_(temp__4425__auto___26799)){
var error__23142__auto___26800 = temp__4425__auto___26799;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__23142__auto___26800)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26785_26795,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26798,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26800], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__26788;
var children = rest26789;
while(true){
var vec__26792 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__26792,(0),null);
var props = cljs.core.nth.call(null,vec__26792,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var on_select = temp__4423__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4423__auto__,vec__26792,bs,props,classes,ul_attrs,validate__23140__auto__,ufv___26793,output_schema26784_26794,input_schema26785_26795,input_checker26786_26796,output_checker26787_26797){
return (function (p1__26783_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__26783_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4423__auto__,vec__26792,bs,props,classes,ul_attrs,validate__23140__auto__,ufv___26793,output_schema26784_26794,input_schema26785_26795,input_checker26786_26796,output_checker26787_26797))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26801 = output_checker26787_26797.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26801)){
var error__23142__auto___26802 = temp__4425__auto___26801;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__23142__auto___26802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26784_26794,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26802], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26793,output_schema26784_26794,input_schema26785_26795,input_checker26786_26796,output_checker26787_26797))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___26793,output_schema26784_26794,input_schema26785_26795,input_checker26786_26796,output_checker26787_26797){
return (function (seq26790){
var G__26791 = cljs.core.first.call(null,seq26790);
var seq26790__$1 = cljs.core.next.call(null,seq26790);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__26791,seq26790__$1);
});})(ufv___26793,output_schema26784_26794,input_schema26785_26795,input_checker26786_26796,output_checker26787_26797))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema26784_26794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26785_26795], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__24915__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__24915__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__24915__auto__;
})();

var component_fnk__24944__auto___26830 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema26808 = schema.core.Any;
var input_schema26809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map26807","map26807",87558868,null))], null);
var input_checker26810 = schema.core.checker.call(null,input_schema26809);
var output_checker26811 = schema.core.checker.call(null,output_schema26808);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function om_bootstrap$button$constructor26805(G__26812){
var validate__23140__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26812], null);
var temp__4425__auto___26832 = input_checker26810.call(null,args__23141__auto___26831);
if(cljs.core.truth_(temp__4425__auto___26832)){
var error__23142__auto___26833 = temp__4425__auto___26832;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26805","constructor26805",1828310377,null),cljs.core.pr_str.call(null,error__23142__auto___26833)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26809,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26831,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26833], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var map26807 = G__26812;
while(true){
if(cljs.core.map_QMARK_.call(null,map26807)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map26807)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map26807,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map26807,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t26818 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t26818 = (function (owner,validate__23140__auto__,input_schema26809,constructor26805,output_checker26811,output_schema26808,G__26812,input_checker26810,map26807,state,ufv__,meta26819){
this.owner = owner;
this.validate__23140__auto__ = validate__23140__auto__;
this.input_schema26809 = input_schema26809;
this.constructor26805 = constructor26805;
this.output_checker26811 = output_checker26811;
this.output_schema26808 = output_schema26808;
this.G__26812 = G__26812;
this.input_checker26810 = input_checker26810;
this.map26807 = map26807;
this.state = state;
this.ufv__ = ufv__;
this.meta26819 = meta26819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t26818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (_26820,meta26819__$1){
var self__ = this;
var _26820__$1 = this;
return (new om_bootstrap.button.t26818(self__.owner,self__.validate__23140__auto__,self__.input_schema26809,self__.constructor26805,self__.output_checker26811,self__.output_schema26808,self__.G__26812,self__.input_checker26810,self__.map26807,self__.state,self__.ufv__,meta26819__$1));
});})(state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
;

om_bootstrap.button.t26818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (_26820){
var self__ = this;
var _26820__$1 = this;
return self__.meta26819;
});})(state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
;

om_bootstrap.button.t26818.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t26818.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
;

om_bootstrap.button.t26818.prototype.om$core$IRender$ = true;

om_bootstrap.button.t26818.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__26821 = om.core.get_props.call(null,self__.owner);
var map__26821__$1 = ((cljs.core.seq_QMARK_.call(null,map__26821))?cljs.core.apply.call(null,cljs.core.hash_map,map__26821):map__26821);
var opts = cljs.core.get.call(null,map__26821__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__26821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__26822 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__26822,(0),null);
var props = cljs.core.nth.call(null,vec__26822,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__26821,map__26821__$1,opts,children,vec__26822,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__26821,map__26821__$1,opts,children,vec__26822,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
], null);
var update_child_props = ((function (open_QMARK_,map__26821,map__26821__$1,opts,children,vec__26822,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__16069__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__26821,map__26821__$1,opts,children,vec__26822,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (key){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var os = temp__4423__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__26821,map__26821__$1,opts,children,vec__26822,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__26821,map__26821__$1,opts,children,vec__26822,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__26821,map__26821__$1,opts,children,vec__26822,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (p1__26803_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__26803_SHARP_,update_child_props);
});})(open_QMARK_,map__26821,map__26821__$1,opts,children,vec__26822,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
,children))], null));
});})(state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
;

om_bootstrap.button.t26818.getBasis = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"validate__23140__auto__","validate__23140__auto__",889714086,null),new cljs.core.Symbol(null,"input-schema26809","input-schema26809",-473427609,null),new cljs.core.Symbol(null,"constructor26805","constructor26805",1828310377,null),new cljs.core.Symbol(null,"output-checker26811","output-checker26811",-1226346613,null),new cljs.core.Symbol(null,"output-schema26808","output-schema26808",-854785616,null),new cljs.core.Symbol(null,"G__26812","G__26812",-1247606703,null),new cljs.core.Symbol(null,"input-checker26810","input-checker26810",887080915,null),new cljs.core.Symbol(null,"map26807","map26807",87558868,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta26819","meta26819",500557345,null)], null);
});})(state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
;

om_bootstrap.button.t26818.cljs$lang$type = true;

om_bootstrap.button.t26818.cljs$lang$ctorStr = "om-bootstrap.button/t26818";

om_bootstrap.button.t26818.cljs$lang$ctorPrWriter = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"om-bootstrap.button/t26818");
});})(state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
;

om_bootstrap.button.__GT_t26818 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811){
return (function om_bootstrap$button$constructor26805_$___GT_t26818(owner__$1,validate__23140__auto____$1,input_schema26809__$1,constructor26805__$1,output_checker26811__$1,output_schema26808__$1,G__26812__$1,input_checker26810__$1,map26807__$1,state__$1,ufv____$1,meta26819){
return (new om_bootstrap.button.t26818(owner__$1,validate__23140__auto____$1,input_schema26809__$1,constructor26805__$1,output_checker26811__$1,output_schema26808__$1,G__26812__$1,input_checker26810__$1,map26807__$1,state__$1,ufv____$1,meta26819));
});})(state,owner,validate__23140__auto__,ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
;

}

return (new om_bootstrap.button.t26818(owner,validate__23140__auto__,input_schema26809,om_bootstrap$button$constructor26805,output_checker26811,output_schema26808,G__26812,input_checker26810,map26807,state,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26834 = output_checker26811.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26834)){
var error__23142__auto___26835 = temp__4425__auto___26834;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26805","constructor26805",1828310377,null),cljs.core.pr_str.call(null,error__23142__auto___26835)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26808,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26835], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv__,output_schema26808,input_schema26809,input_checker26810,output_checker26811))
,schema.core.make_fn_schema.call(null,output_schema26808,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26809], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__24944__auto___26830){
return (function om_bootstrap$button$dropdown_STAR_(){
var argseq__17109__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17109__auto__);
});})(component_fnk__24944__auto___26830))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__24944__auto___26830){
return (function (data__24945__auto__,owner26804,p__26826){
var vec__26827 = p__26826;
var opts__24946__auto__ = cljs.core.nth.call(null,vec__26827,(0),null);
return component_fnk__24944__auto___26830.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner26804),new cljs.core.Keyword(null,"opts","opts",155075701),opts__24946__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner26804,new cljs.core.Keyword(null,"data","data",-232669377),data__24945__auto__], null));
});})(component_fnk__24944__auto___26830))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__24944__auto___26830){
return (function (seq26823){
var G__26824 = cljs.core.first.call(null,seq26823);
var seq26823__$1 = cljs.core.next.call(null,seq26823);
var G__26825 = cljs.core.first.call(null,seq26823__$1);
var seq26823__$2 = cljs.core.next.call(null,seq26823__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26824,G__26825,seq26823__$2);
});})(component_fnk__24944__auto___26830))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(){
var G__26829 = arguments.length;
switch (G__26829) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__24913__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__24913__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__24913__auto__,m26806){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__24913__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m26806));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___26845 = schema.utils.use_fn_validation;
var output_schema26837_26846 = om_bootstrap.types.Component;
var input_schema26838_26847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26839_26848 = schema.core.checker.call(null,input_schema26838_26847);
var output_checker26840_26849 = schema.core.checker.call(null,output_schema26837_26846);
/**
 * Inputs: [opts :- DropdownButton & children]
 * Returns: t/Component
 * 
 * Returns a dropdown button component. The component manages its own
 * dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___26845,output_schema26837_26846,input_schema26838_26847,input_checker26839_26848,output_checker26840_26849){
return (function om_bootstrap$button$dropdown(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___26845,output_schema26837_26846,input_schema26838_26847,input_checker26839_26848,output_checker26840_26849))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26845,output_schema26837_26846,input_schema26838_26847,input_checker26839_26848,output_checker26840_26849){
return (function (G__26841,rest26842){
var validate__23140__auto__ = ufv___26845.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26850 = cljs.core.list_STAR_.call(null,G__26841,rest26842);
var temp__4425__auto___26851 = input_checker26839_26848.call(null,args__23141__auto___26850);
if(cljs.core.truth_(temp__4425__auto___26851)){
var error__23142__auto___26852 = temp__4425__auto___26851;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__23142__auto___26852)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26838_26847,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26850,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26852], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__26841;
var children = rest26842;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26853 = output_checker26840_26849.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26853)){
var error__23142__auto___26854 = temp__4425__auto___26853;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__23142__auto___26854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26837_26846,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26854], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26845,output_schema26837_26846,input_schema26838_26847,input_checker26839_26848,output_checker26840_26849))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___26845,output_schema26837_26846,input_schema26838_26847,input_checker26839_26848,output_checker26840_26849){
return (function (seq26843){
var G__26844 = cljs.core.first.call(null,seq26843);
var seq26843__$1 = cljs.core.next.call(null,seq26843);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__26844,seq26843__$1);
});})(ufv___26845,output_schema26837_26846,input_schema26838_26847,input_checker26839_26848,output_checker26840_26849))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema26837_26846,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26838_26847], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__24915__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__24915__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__24915__auto__;
})();

var component_fnk__24944__auto___26881 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema26859 = schema.core.Any;
var input_schema26860 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"map26858","map26858",360127497,null))], null);
var input_checker26861 = schema.core.checker.call(null,input_schema26860);
var output_checker26862 = schema.core.checker.call(null,output_schema26859);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function om_bootstrap$button$constructor26856(G__26863){
var validate__23140__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26863], null);
var temp__4425__auto___26883 = input_checker26861.call(null,args__23141__auto___26882);
if(cljs.core.truth_(temp__4425__auto___26883)){
var error__23142__auto___26884 = temp__4425__auto___26883;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26856","constructor26856",1114894508,null),cljs.core.pr_str.call(null,error__23142__auto___26884)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26860,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26882,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26884], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var map26858 = G__26863;
while(true){
if(cljs.core.map_QMARK_.call(null,map26858)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map26858)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map26858,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map26858,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t26869 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t26869 = (function (owner,input_schema26860,validate__23140__auto__,G__26863,map26858,constructor26856,output_schema26859,input_checker26861,state,output_checker26862,ufv__,meta26870){
this.owner = owner;
this.input_schema26860 = input_schema26860;
this.validate__23140__auto__ = validate__23140__auto__;
this.G__26863 = G__26863;
this.map26858 = map26858;
this.constructor26856 = constructor26856;
this.output_schema26859 = output_schema26859;
this.input_checker26861 = input_checker26861;
this.state = state;
this.output_checker26862 = output_checker26862;
this.ufv__ = ufv__;
this.meta26870 = meta26870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t26869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function (_26871,meta26870__$1){
var self__ = this;
var _26871__$1 = this;
return (new om_bootstrap.button.t26869(self__.owner,self__.input_schema26860,self__.validate__23140__auto__,self__.G__26863,self__.map26858,self__.constructor26856,self__.output_schema26859,self__.input_checker26861,self__.state,self__.output_checker26862,self__.ufv__,meta26870__$1));
});})(state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
;

om_bootstrap.button.t26869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function (_26871){
var self__ = this;
var _26871__$1 = this;
return self__.meta26870;
});})(state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
;

om_bootstrap.button.t26869.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t26869.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
;

om_bootstrap.button.t26869.prototype.om$core$IRender$ = true;

om_bootstrap.button.t26869.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__26872 = om.core.get_props.call(null,self__.owner);
var map__26872__$1 = ((cljs.core.seq_QMARK_.call(null,map__26872))?cljs.core.apply.call(null,cljs.core.hash_map,map__26872):map__26872);
var opts = cljs.core.get.call(null,map__26872__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__26872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__26873 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__26873,(0),null);
var props = cljs.core.nth.call(null,vec__26873,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__26872,map__26872__$1,opts,children,vec__26873,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__26872,map__26872__$1,opts,children,vec__26873,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__26872,map__26872__$1,opts,children,vec__26873,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__26872,map__26872__$1,opts,children,vec__26873,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__26872,map__26872__$1,opts,children,vec__26873,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function (k){
var temp__4425__auto___26885 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___26885)){
var f_26886 = temp__4425__auto___26885;
f_26886.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__26872,map__26872__$1,opts,children,vec__26873,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
;

om_bootstrap.button.t26869.getBasis = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"input-schema26860","input-schema26860",1760995717,null),new cljs.core.Symbol(null,"validate__23140__auto__","validate__23140__auto__",889714086,null),new cljs.core.Symbol(null,"G__26863","G__26863",1671915623,null),new cljs.core.Symbol(null,"map26858","map26858",360127497,null),new cljs.core.Symbol(null,"constructor26856","constructor26856",1114894508,null),new cljs.core.Symbol(null,"output-schema26859","output-schema26859",-347287311,null),new cljs.core.Symbol(null,"input-checker26861","input-checker26861",-561129228,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"output-checker26862","output-checker26862",-1268094058,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta26870","meta26870",2033037792,null)], null);
});})(state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
;

om_bootstrap.button.t26869.cljs$lang$type = true;

om_bootstrap.button.t26869.cljs$lang$ctorStr = "om-bootstrap.button/t26869";

om_bootstrap.button.t26869.cljs$lang$ctorPrWriter = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"om-bootstrap.button/t26869");
});})(state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
;

om_bootstrap.button.__GT_t26869 = ((function (state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862){
return (function om_bootstrap$button$constructor26856_$___GT_t26869(owner__$1,input_schema26860__$1,validate__23140__auto____$1,G__26863__$1,map26858__$1,constructor26856__$1,output_schema26859__$1,input_checker26861__$1,state__$1,output_checker26862__$1,ufv____$1,meta26870){
return (new om_bootstrap.button.t26869(owner__$1,input_schema26860__$1,validate__23140__auto____$1,G__26863__$1,map26858__$1,constructor26856__$1,output_schema26859__$1,input_checker26861__$1,state__$1,output_checker26862__$1,ufv____$1,meta26870));
});})(state,owner,validate__23140__auto__,ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
;

}

return (new om_bootstrap.button.t26869(owner,input_schema26860,validate__23140__auto__,G__26863,map26858,om_bootstrap$button$constructor26856,output_schema26859,input_checker26861,state,output_checker26862,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26887 = output_checker26862.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26887)){
var error__23142__auto___26888 = temp__4425__auto___26887;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26856","constructor26856",1114894508,null),cljs.core.pr_str.call(null,error__23142__auto___26888)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26859,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26888], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv__,output_schema26859,input_schema26860,input_checker26861,output_checker26862))
,schema.core.make_fn_schema.call(null,output_schema26859,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26860], null)));
})();
/**
 * Generates a split button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__24944__auto___26881){
return (function om_bootstrap$button$split_STAR_(){
var argseq__17109__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17109__auto__);
});})(component_fnk__24944__auto___26881))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__24944__auto___26881){
return (function (data__24945__auto__,owner26855,p__26877){
var vec__26878 = p__26877;
var opts__24946__auto__ = cljs.core.nth.call(null,vec__26878,(0),null);
return component_fnk__24944__auto___26881.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner26855),new cljs.core.Keyword(null,"opts","opts",155075701),opts__24946__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner26855,new cljs.core.Keyword(null,"data","data",-232669377),data__24945__auto__], null));
});})(component_fnk__24944__auto___26881))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__24944__auto___26881){
return (function (seq26874){
var G__26875 = cljs.core.first.call(null,seq26874);
var seq26874__$1 = cljs.core.next.call(null,seq26874);
var G__26876 = cljs.core.first.call(null,seq26874__$1);
var seq26874__$2 = cljs.core.next.call(null,seq26874__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26875,G__26876,seq26874__$2);
});})(component_fnk__24944__auto___26881))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(){
var G__26880 = arguments.length;
switch (G__26880) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__24913__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__24913__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__24913__auto__,m26857){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__24913__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m26857));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___26898 = schema.utils.use_fn_validation;
var output_schema26890_26899 = schema.core.Any;
var input_schema26891_26900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26892_26901 = schema.core.checker.call(null,input_schema26891_26900);
var output_checker26893_26902 = schema.core.checker.call(null,output_schema26890_26899);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___26898,output_schema26890_26899,input_schema26891_26900,input_checker26892_26901,output_checker26893_26902){
return (function om_bootstrap$button$split(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___26898,output_schema26890_26899,input_schema26891_26900,input_checker26892_26901,output_checker26893_26902))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___26898,output_schema26890_26899,input_schema26891_26900,input_checker26892_26901,output_checker26893_26902){
return (function (G__26894,rest26895){
var validate__23140__auto__ = ufv___26898.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26903 = cljs.core.list_STAR_.call(null,G__26894,rest26895);
var temp__4425__auto___26904 = input_checker26892_26901.call(null,args__23141__auto___26903);
if(cljs.core.truth_(temp__4425__auto___26904)){
var error__23142__auto___26905 = temp__4425__auto___26904;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__23142__auto___26905)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26891_26900,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26903,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26905], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__26894;
var children = rest26895;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26906 = output_checker26893_26902.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26906)){
var error__23142__auto___26907 = temp__4425__auto___26906;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__23142__auto___26907)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26890_26899,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26907], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26898,output_schema26890_26899,input_schema26891_26900,input_checker26892_26901,output_checker26893_26902))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___26898,output_schema26890_26899,input_schema26891_26900,input_checker26892_26901,output_checker26893_26902){
return (function (seq26896){
var G__26897 = cljs.core.first.call(null,seq26896);
var seq26896__$1 = cljs.core.next.call(null,seq26896);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__26897,seq26896__$1);
});})(ufv___26898,output_schema26890_26899,input_schema26891_26900,input_checker26892_26901,output_checker26893_26902))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema26890_26899,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26891_26900], null)));

//# sourceMappingURL=button.js.map?rel=1440655368445