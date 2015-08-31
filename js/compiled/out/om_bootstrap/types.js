// Compiled by ClojureScript 0.0-3297 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___26915 = schema.utils.use_fn_validation;
var output_schema26910_26916 = schema.core.Any;
var input_schema26911_26917 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker26912_26918 = schema.core.checker.call(null,input_schema26911_26917);
var output_checker26913_26919 = schema.core.checker.call(null,output_schema26910_26916);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 * Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___26915,output_schema26910_26916,input_schema26911_26917,input_checker26912_26918,output_checker26913_26919){
return (function om_bootstrap$types$schema_keys(G__26914){
var validate__23140__auto__ = ufv___26915.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26914], null);
var temp__4425__auto___26921 = input_checker26912_26918.call(null,args__23141__auto___26920);
if(cljs.core.truth_(temp__4425__auto___26921)){
var error__23142__auto___26922 = temp__4425__auto___26921;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__23142__auto___26922)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26911_26917,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26920,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26922], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var schema__$1 = G__26914;
while(true){
return cljs.core.map.call(null,((function (validate__23140__auto__,ufv___26915,output_schema26910_26916,input_schema26911_26917,input_checker26912_26918,output_checker26913_26919){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__23140__auto__,ufv___26915,output_schema26910_26916,input_schema26911_26917,input_checker26912_26918,output_checker26913_26919))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26923 = output_checker26913_26919.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26923)){
var error__23142__auto___26924 = temp__4425__auto___26923;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__23142__auto___26924)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26910_26916,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26924], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26915,output_schema26910_26916,input_schema26911_26917,input_checker26912_26918,output_checker26913_26919))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema26910_26916,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26911_26917], null)));
var ufv___26930 = schema.utils.use_fn_validation;
var output_schema26925_26931 = schema.core.Any;
var input_schema26926_26932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker26927_26933 = schema.core.checker.call(null,input_schema26926_26932);
var output_checker26928_26934 = schema.core.checker.call(null,output_schema26925_26931);
/**
 * Inputs: [schema]
 * 
 * Returns a map schema that accepts the supplied map schema, plus any
 * other optional keys that show up in the map. Such a schema can only
 * enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___26930,output_schema26925_26931,input_schema26926_26932,input_checker26927_26933,output_checker26928_26934){
return (function om_bootstrap$types$at_least(G__26929){
var validate__23140__auto__ = ufv___26930.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26929], null);
var temp__4425__auto___26936 = input_checker26927_26933.call(null,args__23141__auto___26935);
if(cljs.core.truth_(temp__4425__auto___26936)){
var error__23142__auto___26937 = temp__4425__auto___26936;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__23142__auto___26937)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26926_26932,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26935,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26937], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var schema__$1 = G__26929;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26938 = output_checker26928_26934.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26938)){
var error__23142__auto___26939 = temp__4425__auto___26938;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__23142__auto___26939)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26925_26931,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26939], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26930,output_schema26925_26931,input_schema26926_26932,input_checker26927_26933,output_checker26928_26934))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema26925_26931,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26926_26932], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
 * Map of keyword to the proper bootstrap class name.
 */
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
 * Map of style keywords -> styles.
 */
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
 * Applies all default bootstrap options to the supplied schema. If
 * the incoming schema has one of the the keys from BootstrapClass,
 * that wins (even if it's required).
 */
om_bootstrap.types.bootstrap = (function om_bootstrap$types$bootstrap(schema__$1){
var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));
return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___26954 = schema.utils.use_fn_validation;
var output_schema26940_26955 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema26941_26956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_schema26946_26957 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);
var input_checker26942_26958 = schema.core.checker.call(null,input_schema26941_26956);
var output_checker26943_26959 = schema.core.checker.call(null,output_schema26940_26955);
var input_checker26947_26960 = schema.core.checker.call(null,input_schema26946_26957);
var output_checker26948_26961 = schema.core.checker.call(null,output_schema26940_26955);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 * Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 * Returns two maps; the first is all of the schema options, the
 * second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___26954,output_schema26940_26955,input_schema26941_26956,input_schema26946_26957,input_checker26942_26958,output_checker26943_26959,input_checker26947_26960,output_checker26948_26961){
return (function om_bootstrap$types$separate(){
var G__26953 = arguments.length;
switch (G__26953) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});})(ufv___26954,output_schema26940_26955,input_schema26941_26956,input_schema26946_26957,input_checker26942_26958,output_checker26943_26959,input_checker26947_26960,output_checker26948_26961))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___26954,output_schema26940_26955,input_schema26941_26956,input_schema26946_26957,input_checker26942_26958,output_checker26943_26959,input_checker26947_26960,output_checker26948_26961){
return (function (G__26944,G__26945){
var validate__23140__auto__ = ufv___26954.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26963 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26944,G__26945], null);
var temp__4425__auto___26964 = input_checker26942_26958.call(null,args__23141__auto___26963);
if(cljs.core.truth_(temp__4425__auto___26964)){
var error__23142__auto___26965 = temp__4425__auto___26964;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__23142__auto___26965)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26941_26956,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26963,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26965], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var schema__$1 = G__26944;
var opts = G__26945;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26966 = output_checker26943_26959.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26966)){
var error__23142__auto___26967 = temp__4425__auto___26966;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__23142__auto___26967)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26940_26955,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26967], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26954,output_schema26940_26955,input_schema26941_26956,input_schema26946_26957,input_checker26942_26958,output_checker26943_26959,input_checker26947_26960,output_checker26948_26961))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___26954,output_schema26940_26955,input_schema26941_26956,input_schema26946_26957,input_checker26942_26958,output_checker26943_26959,input_checker26947_26960,output_checker26948_26961){
return (function (G__26949,G__26950,G__26951){
var validate__23140__auto__ = ufv___26954.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26968 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26949,G__26950,G__26951], null);
var temp__4425__auto___26969 = input_checker26947_26960.call(null,args__23141__auto___26968);
if(cljs.core.truth_(temp__4425__auto___26969)){
var error__23142__auto___26970 = temp__4425__auto___26969;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__23142__auto___26970)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26946_26957,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26968,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26970], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var schema__$1 = G__26949;
var opts = G__26950;
var defaults = G__26951;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26971 = output_checker26948_26961.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26971)){
var error__23142__auto___26972 = temp__4425__auto___26971;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__23142__auto___26972)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26940_26955,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26972], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26954,output_schema26940_26955,input_schema26941_26956,input_schema26946_26957,input_checker26942_26958,output_checker26943_26959,input_checker26947_26960,output_checker26948_26961))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema26940_26955,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26941_26956,input_schema26946_26957], null)));
var ufv___26986 = schema.utils.use_fn_validation;
var output_schema26973_26987 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema26974_26988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker26975_26989 = schema.core.checker.call(null,input_schema26974_26988);
var output_checker26976_26990 = schema.core.checker.call(null,output_schema26973_26987);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 * Returns: {s/Str s/Bool}
 * 
 * Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___26986,output_schema26973_26987,input_schema26974_26988,input_checker26975_26989,output_checker26976_26990){
return (function om_bootstrap$types$bs_class_set(G__26977){
var validate__23140__auto__ = ufv___26986.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___26991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26977], null);
var temp__4425__auto___26992 = input_checker26975_26989.call(null,args__23141__auto___26991);
if(cljs.core.truth_(temp__4425__auto___26992)){
var error__23142__auto___26993 = temp__4425__auto___26992;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__23142__auto___26993)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26974_26988,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___26991,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26993], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var G__26983 = G__26977;
var map__26984 = G__26983;
var map__26984__$1 = ((cljs.core.seq_QMARK_.call(null,map__26984))?cljs.core.apply.call(null,cljs.core.hash_map,map__26984):map__26984);
var bs_class = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__26983__$1 = G__26983;
while(true){
var map__26985 = G__26983__$1;
var map__26985__$1 = ((cljs.core.seq_QMARK_.call(null,map__26985))?cljs.core.apply.call(null,cljs.core.hash_map,map__26985):map__26985);
var bs_class__$1 = cljs.core.get.call(null,map__26985__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__26985__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__26985__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var temp__4423__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var klass = temp__4423__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4425__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var size = temp__4425__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var style = temp__4425__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,style))].join(''),true], true, false);
} else {
return null;
}
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___26994 = output_checker26976_26990.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___26994)){
var error__23142__auto___26995 = temp__4425__auto___26994;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__23142__auto___26995)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26973_26987,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___26995], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___26986,output_schema26973_26987,input_schema26974_26988,input_checker26975_26989,output_checker26976_26990))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema26973_26987,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26974_26988], null)));

//# sourceMappingURL=types.js.map?rel=1440655368614