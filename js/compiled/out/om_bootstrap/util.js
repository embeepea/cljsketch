// Compiled by ClojureScript 0.0-3297 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.core');
goog.require('schema.core');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 * the first.  If a key occurs in more than one map, the mapping(s)
 * from the latter (left-to-right) will be combined with the mapping in
 * the result by looking up the proper merge function and in the
 * supplied map of key -> merge-fn and using that for the big merge. If
 * a key doesn't have a merge function, the right value wins (as with
 * merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4423__auto__ = (function (){var and__16057__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__16057__auto__){
return k__GT_fn.call(null,k);
} else {
return and__16057__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__16069__auto__ = m1;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___27003 = schema.utils.use_fn_validation;
var output_schema26998_27004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema26999_27005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker27000_27006 = schema.core.checker.call(null,input_schema26999_27005);
var output_checker27001_27007 = schema.core.checker.call(null,output_schema26998_27004);
/**
 * Inputs: [x :- s/Any]
 * Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___27003,output_schema26998_27004,input_schema26999_27005,input_checker27000_27006,output_checker27001_27007){
return (function om_bootstrap$util$collectify(G__27002){
var validate__23140__auto__ = ufv___27003.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27002], null);
var temp__4425__auto___27009 = input_checker27000_27006.call(null,args__23141__auto___27008);
if(cljs.core.truth_(temp__4425__auto___27009)){
var error__23142__auto___27010 = temp__4425__auto___27009;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__23142__auto___27010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26999_27005,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27008,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27010], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var x = G__27002;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27011 = output_checker27001_27007.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27011)){
var error__23142__auto___27012 = temp__4425__auto___27011;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__23142__auto___27012)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26998_27004,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27012], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27003,output_schema26998_27004,input_schema26999_27005,input_checker27000_27006,output_checker27001_27007))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema26998_27004,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26999_27005], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 * the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___27018 = schema.utils.use_fn_validation;
var output_schema27013_27019 = schema.core.Bool;
var input_schema27014_27020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker27015_27021 = schema.core.checker.call(null,input_schema27014_27020);
var output_checker27016_27022 = schema.core.checker.call(null,output_schema27013_27019);
/**
 * Inputs: [x]
 * Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___27018,output_schema27013_27019,input_schema27014_27020,input_checker27015_27021,output_checker27016_27022){
return (function om_bootstrap$util$om_component_QMARK_(G__27017){
var validate__23140__auto__ = ufv___27018.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27017], null);
var temp__4425__auto___27024 = input_checker27015_27021.call(null,args__23141__auto___27023);
if(cljs.core.truth_(temp__4425__auto___27024)){
var error__23142__auto___27025 = temp__4425__auto___27024;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__23142__auto___27025)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27014_27020,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27023,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27025], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var x = G__27017;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27026 = output_checker27016_27022.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27026)){
var error__23142__auto___27027 = temp__4425__auto___27026;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__23142__auto___27027)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27013_27019,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27027], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27018,output_schema27013_27019,input_schema27014_27020,input_checker27015_27021,output_checker27016_27022))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema27013_27019,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27014_27020], null)));
var ufv___27033 = schema.utils.use_fn_validation;
var output_schema27028_27034 = schema.core.Bool;
var input_schema27029_27035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker27030_27036 = schema.core.checker.call(null,input_schema27029_27035);
var output_checker27031_27037 = schema.core.checker.call(null,output_schema27028_27034);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * TODO: Once Om updates its externs to include this file, we can
 * remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___27033,output_schema27028_27034,input_schema27029_27035,input_checker27030_27036,output_checker27031_27037){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__27032){
var validate__23140__auto__ = ufv___27033.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27032], null);
var temp__4425__auto___27039 = input_checker27030_27036.call(null,args__23141__auto___27038);
if(cljs.core.truth_(temp__4425__auto___27039)){
var error__23142__auto___27040 = temp__4425__auto___27039;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__23142__auto___27040)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27029_27035,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27038,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27040], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var child = G__27032;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27041 = output_checker27031_27037.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27041)){
var error__23142__auto___27042 = temp__4425__auto___27041;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__23142__auto___27042)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27028_27034,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27042], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27033,output_schema27028_27034,input_schema27029_27035,input_checker27030_27036,output_checker27031_27037))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema27028_27034,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27029_27035], null)));
var ufv___27048 = schema.utils.use_fn_validation;
var output_schema27043_27049 = schema.core.Bool;
var input_schema27044_27050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker27045_27051 = schema.core.checker.call(null,input_schema27044_27050);
var output_checker27046_27052 = schema.core.checker.call(null,output_schema27043_27049);
/**
 * Inputs: [child]
 * Returns: s/Bool
 * 
 * Returns true if the supplied argument is a valid React component,
 * false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___27048,output_schema27043_27049,input_schema27044_27050,input_checker27045_27051,output_checker27046_27052){
return (function om_bootstrap$util$valid_component_QMARK_(G__27047){
var validate__23140__auto__ = ufv___27048.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27047], null);
var temp__4425__auto___27054 = input_checker27045_27051.call(null,args__23141__auto___27053);
if(cljs.core.truth_(temp__4425__auto___27054)){
var error__23142__auto___27055 = temp__4425__auto___27054;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__23142__auto___27055)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27044_27050,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27053,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27055], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var child = G__27047;
while(true){
var or__16069__auto__ = typeof child === 'string';
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = typeof child === 'number';
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27056 = output_checker27046_27052.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27056)){
var error__23142__auto___27057 = temp__4425__auto___27056;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__23142__auto___27057)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27043_27049,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27057], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27048,output_schema27043_27049,input_schema27044_27050,input_checker27045_27051,output_checker27046_27052))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema27043_27049,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27044_27050], null)));
var ufv___27063 = schema.utils.use_fn_validation;
var output_schema27058_27064 = schema.core.Bool;
var input_schema27059_27065 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker27060_27066 = schema.core.checker.call(null,input_schema27059_27065);
var output_checker27061_27067 = schema.core.checker.call(null,output_schema27058_27064);
/**
 * Inputs: [children]
 * Returns: s/Bool
 * 
 * Returns true if the supplied sequence contains some valid React component,
 * false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___27063,output_schema27058_27064,input_schema27059_27065,input_checker27060_27066,output_checker27061_27067){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__27062){
var validate__23140__auto__ = ufv___27063.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27062], null);
var temp__4425__auto___27069 = input_checker27060_27066.call(null,args__23141__auto___27068);
if(cljs.core.truth_(temp__4425__auto___27069)){
var error__23142__auto___27070 = temp__4425__auto___27069;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__23142__auto___27070)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27059_27065,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27068,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27070], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var children = G__27062;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27071 = output_checker27061_27067.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27071)){
var error__23142__auto___27072 = temp__4425__auto___27071;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__23142__auto___27072)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27058_27064,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27072], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27063,output_schema27058_27064,input_schema27059_27065,input_checker27060_27066,output_checker27061_27067))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema27058_27064,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27059_27065], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 * function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__16057__auto__ = l;
if(cljs.core.truth_(and__16057__auto__)){
return r;
} else {
return and__16057__auto__;
}
})())){
return (function() { 
var G__27073__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__27073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27074__i = 0, G__27074__a = new Array(arguments.length -  0);
while (G__27074__i < G__27074__a.length) {G__27074__a[G__27074__i] = arguments[G__27074__i + 0]; ++G__27074__i;}
  args = new cljs.core.IndexedSeq(G__27074__a,0);
} 
return G__27073__delegate.call(this,args);};
G__27073.cljs$lang$maxFixedArity = 0;
G__27073.cljs$lang$applyTo = (function (arglist__27075){
var args = cljs.core.seq(arglist__27075);
return G__27073__delegate(args);
});
G__27073.cljs$core$IFn$_invoke$arity$variadic = G__27073__delegate;
return G__27073;
})()
;
} else {
var or__16069__auto__ = l;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 * do a decent job with event handlers as well; currently only
 * handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 * prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__16069__auto__ = l;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 * according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(){
var argseq__17109__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__17109__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq27076){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27076));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = (function (){var obj27084 = {};
return obj27084;
})();
var seq__27085_27089 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__27086_27090 = null;
var count__27087_27091 = (0);
var i__27088_27092 = (0);
while(true){
if((i__27088_27092 < count__27087_27091)){
var k_27093 = cljs.core._nth.call(null,chunk__27086_27090,i__27088_27092);
if(cljs.core.truth_(arr.hasOwnProperty(k_27093))){
(ret[k_27093] = (arr[k_27093]));
} else {
}

var G__27094 = seq__27085_27089;
var G__27095 = chunk__27086_27090;
var G__27096 = count__27087_27091;
var G__27097 = (i__27088_27092 + (1));
seq__27085_27089 = G__27094;
chunk__27086_27090 = G__27095;
count__27087_27091 = G__27096;
i__27088_27092 = G__27097;
continue;
} else {
var temp__4425__auto___27098 = cljs.core.seq.call(null,seq__27085_27089);
if(temp__4425__auto___27098){
var seq__27085_27099__$1 = temp__4425__auto___27098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27085_27099__$1)){
var c__16854__auto___27100 = cljs.core.chunk_first.call(null,seq__27085_27099__$1);
var G__27101 = cljs.core.chunk_rest.call(null,seq__27085_27099__$1);
var G__27102 = c__16854__auto___27100;
var G__27103 = cljs.core.count.call(null,c__16854__auto___27100);
var G__27104 = (0);
seq__27085_27089 = G__27101;
chunk__27086_27090 = G__27102;
count__27087_27091 = G__27103;
i__27088_27092 = G__27104;
continue;
} else {
var k_27105 = cljs.core.first.call(null,seq__27085_27099__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_27105))){
(ret[k_27105] = (arr[k_27105]));
} else {
}

var G__27106 = cljs.core.next.call(null,seq__27085_27099__$1);
var G__27107 = null;
var G__27108 = (0);
var G__27109 = (0);
seq__27085_27089 = G__27106;
chunk__27086_27090 = G__27107;
count__27087_27091 = G__27108;
i__27088_27092 = G__27109;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(){
var G__27111 = arguments.length;
switch (G__27111) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;
/**
 * Merges the supplied extra properties into the underlying Om cursor
 * and calls the constructor to clone the React component.
 * 
 * Requires that the supplied child has an Om cursor attached to it!
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 * generated by Om. Merges the supplied properties into the -props
 * field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4425__auto__)){
var children = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 * will have any props provided by extra-props merged in. Props are
 * merged in the same manner as merge-props, so props like :class will
 * be merged intelligently.
 * 
 * extra-props can be a function of the old props that returns new
 * props, OR it can be a map of props.
 * 
 * If the supplied child is an Om component, any supplied extra
 * properties will be merged into the underlying cursor and accessible
 * in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(){
var G__27114 = arguments.length;
switch (G__27114) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=util.js.map?rel=1440655368800