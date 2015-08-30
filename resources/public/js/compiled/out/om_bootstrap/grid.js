// Compiled by ClojureScript 0.0-3297 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___28858 = schema.utils.use_fn_validation;
var output_schema28849_28859 = om_bootstrap.types.Component;
var input_schema28850_28860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28851_28861 = schema.core.checker.call(null,input_schema28850_28860);
var output_checker28852_28862 = schema.core.checker.call(null,output_schema28849_28859);
/**
 * Inputs: [opts :- Grid & children]
 * Returns: t/Component
 * 
 * Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___28858,output_schema28849_28859,input_schema28850_28860,input_checker28851_28861,output_checker28852_28862){
return (function om_bootstrap$grid$grid(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___28858,output_schema28849_28859,input_schema28850_28860,input_checker28851_28861,output_checker28852_28862))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28858,output_schema28849_28859,input_schema28850_28860,input_checker28851_28861,output_checker28852_28862){
return (function (G__28853,rest28854){
var validate__23140__auto__ = ufv___28858.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28863 = cljs.core.list_STAR_.call(null,G__28853,rest28854);
var temp__4425__auto___28864 = input_checker28851_28861.call(null,args__23141__auto___28863);
if(cljs.core.truth_(temp__4425__auto___28864)){
var error__23142__auto___28865 = temp__4425__auto___28864;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__23142__auto___28865)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28850_28860,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28863,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28865], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__28853;
var children = rest28854;
while(true){
var vec__28857 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__28857,(0),null);
var props = cljs.core.nth.call(null,vec__28857,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28866 = output_checker28852_28862.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28866)){
var error__23142__auto___28867 = temp__4425__auto___28866;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__23142__auto___28867)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28849_28859,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28867], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___28858,output_schema28849_28859,input_schema28850_28860,input_checker28851_28861,output_checker28852_28862))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___28858,output_schema28849_28859,input_schema28850_28860,input_checker28851_28861,output_checker28852_28862){
return (function (seq28855){
var G__28856 = cljs.core.first.call(null,seq28855);
var seq28855__$1 = cljs.core.next.call(null,seq28855);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__28856,seq28855__$1);
});})(ufv___28858,output_schema28849_28859,input_schema28850_28860,input_checker28851_28861,output_checker28852_28862))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema28849_28859,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28850_28860], null)));
var ufv___28876 = schema.utils.use_fn_validation;
var output_schema28868_28877 = om_bootstrap.types.Component;
var input_schema28869_28878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28870_28879 = schema.core.checker.call(null,input_schema28869_28878);
var output_checker28871_28880 = schema.core.checker.call(null,output_schema28868_28877);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___28876,output_schema28868_28877,input_schema28869_28878,input_checker28870_28879,output_checker28871_28880){
return (function om_bootstrap$grid$row(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___28876,output_schema28868_28877,input_schema28869_28878,input_checker28870_28879,output_checker28871_28880))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28876,output_schema28868_28877,input_schema28869_28878,input_checker28870_28879,output_checker28871_28880){
return (function (G__28872,rest28873){
var validate__23140__auto__ = ufv___28876.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28881 = cljs.core.list_STAR_.call(null,G__28872,rest28873);
var temp__4425__auto___28882 = input_checker28870_28879.call(null,args__23141__auto___28881);
if(cljs.core.truth_(temp__4425__auto___28882)){
var error__23142__auto___28883 = temp__4425__auto___28882;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__23142__auto___28883)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28869_28878,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28881,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28883], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__28872;
var children = rest28873;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28884 = output_checker28871_28880.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28884)){
var error__23142__auto___28885 = temp__4425__auto___28884;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__23142__auto___28885)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28868_28877,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28885], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___28876,output_schema28868_28877,input_schema28869_28878,input_checker28870_28879,output_checker28871_28880))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___28876,output_schema28868_28877,input_schema28869_28878,input_checker28870_28879,output_checker28871_28880){
return (function (seq28874){
var G__28875 = cljs.core.first.call(null,seq28874);
var seq28874__$1 = cljs.core.next.call(null,seq28874);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__28875,seq28874__$1);
});})(ufv___28876,output_schema28868_28877,input_schema28869_28878,input_checker28870_28879,output_checker28871_28880))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema28868_28877,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28869_28878], null)));
var ufv___28897 = schema.utils.use_fn_validation;
var output_schema28886_28898 = om_bootstrap.types.Component;
var input_schema28887_28899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker28888_28900 = schema.core.checker.call(null,input_schema28887_28899);
var output_checker28889_28901 = schema.core.checker.call(null,output_schema28886_28898);
/**
 * Inputs: [opts :- Col & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___28897,output_schema28886_28898,input_schema28887_28899,input_checker28888_28900,output_checker28889_28901){
return (function om_bootstrap$grid$col(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});})(ufv___28897,output_schema28886_28898,input_schema28887_28899,input_checker28888_28900,output_checker28889_28901))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28897,output_schema28886_28898,input_schema28887_28899,input_checker28888_28900,output_checker28889_28901){
return (function (G__28890,rest28891){
var validate__23140__auto__ = ufv___28897.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___28902 = cljs.core.list_STAR_.call(null,G__28890,rest28891);
var temp__4425__auto___28903 = input_checker28888_28900.call(null,args__23141__auto___28902);
if(cljs.core.truth_(temp__4425__auto___28903)){
var error__23142__auto___28904 = temp__4425__auto___28903;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__23142__auto___28904)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28887_28899,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___28902,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28904], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var opts = G__28890;
var children = rest28891;
while(true){
var vec__28894 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__28894,(0),null);
var props = cljs.core.nth.call(null,vec__28894,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__28894,bs,props,validate__23140__auto__,ufv___28897,output_schema28886_28898,input_schema28887_28899,input_checker28888_28900,output_checker28889_28901){
return (function (p__28895){
var vec__28896 = p__28895;
var k = cljs.core.nth.call(null,vec__28896,(0),null);
var v = cljs.core.nth.call(null,vec__28896,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__28894,bs,props,validate__23140__auto__,ufv___28897,output_schema28886_28898,input_schema28887_28899,input_checker28888_28900,output_checker28889_28901))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___28905 = output_checker28889_28901.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___28905)){
var error__23142__auto___28906 = temp__4425__auto___28905;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__23142__auto___28906)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28886_28898,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___28906], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___28897,output_schema28886_28898,input_schema28887_28899,input_checker28888_28900,output_checker28889_28901))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___28897,output_schema28886_28898,input_schema28887_28899,input_checker28888_28900,output_checker28889_28901){
return (function (seq28892){
var G__28893 = cljs.core.first.call(null,seq28892);
var seq28892__$1 = cljs.core.next.call(null,seq28892);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__28893,seq28892__$1);
});})(ufv___28897,output_schema28886_28898,input_schema28887_28899,input_checker28888_28900,output_checker28889_28901))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema28886_28898,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28887_28899], null)));

//# sourceMappingURL=grid.js.map?rel=1440655373870