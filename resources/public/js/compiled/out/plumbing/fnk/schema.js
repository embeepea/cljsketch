// Compiled by ClojureScript 0.0-3297 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__23530__23531__auto__){
var G__27214 = p1__23530__23531__auto__;
if(G__27214){
var bit__16743__auto__ = null;
if(cljs.core.truth_((function (){var or__16069__auto__ = bit__16743__auto__;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return G__27214.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__27214.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__27214);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__27214);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__27215_SHARP_){
return (cljs.core.val.call(null,p1__27215_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__27217 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__27217,(0),null);
var v = cljs.core.nth.call(null,vec__27217,(1),null);
var p = vec__27217;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___27223 = schema.utils.use_fn_validation;
var output_schema27218_27224 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema27219_27225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker27220_27226 = schema.core.checker.call(null,input_schema27219_27225);
var output_checker27221_27227 = schema.core.checker.call(null,output_schema27218_27224);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___27223,output_schema27218_27224,input_schema27219_27225,input_checker27220_27226,output_checker27221_27227){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__27222){
var validate__23140__auto__ = ufv___27223.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27222], null);
var temp__4425__auto___27229 = input_checker27220_27226.call(null,args__23141__auto___27228);
if(cljs.core.truth_(temp__4425__auto___27229)){
var error__23142__auto___27230 = temp__4425__auto___27229;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__23142__auto___27230)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27219_27225,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27228,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27230], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var k = G__27222;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27231 = output_checker27221_27227.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27231)){
var error__23142__auto___27232 = temp__4425__auto___27231;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__23142__auto___27232)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27218_27224,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27232], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27223,output_schema27218_27224,input_schema27219_27225,input_checker27220_27226,output_checker27221_27227))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema27218_27224,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27219_27225], null)));
var ufv___27238 = schema.utils.use_fn_validation;
var output_schema27233_27239 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema27234_27240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker27235_27241 = schema.core.checker.call(null,input_schema27234_27240);
var output_checker27236_27242 = schema.core.checker.call(null,output_schema27233_27239);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___27238,output_schema27233_27239,input_schema27234_27240,input_checker27235_27241,output_checker27236_27242){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__27237){
var validate__23140__auto__ = ufv___27238.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27237], null);
var temp__4425__auto___27244 = input_checker27235_27241.call(null,args__23141__auto___27243);
if(cljs.core.truth_(temp__4425__auto___27244)){
var error__23142__auto___27245 = temp__4425__auto___27244;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__23142__auto___27245)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27234_27240,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27243,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27245], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var s = G__27237;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27246 = output_checker27236_27242.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27246)){
var error__23142__auto___27247 = temp__4425__auto___27246;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__23142__auto___27247)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27233_27239,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27247], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27238,output_schema27233_27239,input_schema27234_27240,input_checker27235_27241,output_checker27236_27242))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema27233_27239,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27234_27240], null)));
var ufv___27253 = schema.utils.use_fn_validation;
var output_schema27248_27254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema27249_27255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker27250_27256 = schema.core.checker.call(null,input_schema27249_27255);
var output_checker27251_27257 = schema.core.checker.call(null,output_schema27248_27254);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___27253,output_schema27248_27254,input_schema27249_27255,input_checker27250_27256,output_checker27251_27257){
return (function plumbing$fnk$schema$split_schema_keys(G__27252){
var validate__23140__auto__ = ufv___27253.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27252], null);
var temp__4425__auto___27259 = input_checker27250_27256.call(null,args__23141__auto___27258);
if(cljs.core.truth_(temp__4425__auto___27259)){
var error__23142__auto___27260 = temp__4425__auto___27259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__23142__auto___27260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27249_27255,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27258,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27260], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var s = G__27252;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27261 = output_checker27251_27257.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27261)){
var error__23142__auto___27262 = temp__4425__auto___27261;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__23142__auto___27262)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27248_27254,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27262], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27253,output_schema27248_27254,input_schema27249_27255,input_checker27250_27256,output_checker27251_27257))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema27248_27254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27249_27255], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(){
var argseq__17109__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17109__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__27267){
var vec__27268 = p__27267;
var k = cljs.core.nth.call(null,vec__27268,(0),null);
var v = cljs.core.nth.call(null,vec__27268,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27269 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__27269,(0),null);
var ov = cljs.core.nth.call(null,vec__27269,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq27263){
var G__27264 = cljs.core.first.call(null,seq27263);
var seq27263__$1 = cljs.core.next.call(null,seq27263);
var G__27265 = cljs.core.first.call(null,seq27263__$1);
var seq27263__$2 = cljs.core.next.call(null,seq27263__$1);
var G__27266 = cljs.core.first.call(null,seq27263__$2);
var seq27263__$3 = cljs.core.next.call(null,seq27263__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__27264,G__27265,G__27266,seq27263__$3);
});
var ufv___27277 = schema.utils.use_fn_validation;
var output_schema27271_27278 = plumbing.fnk.schema.InputSchema;
var input_schema27272_27279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker27273_27280 = schema.core.checker.call(null,input_schema27272_27279);
var output_checker27274_27281 = schema.core.checker.call(null,output_schema27271_27278);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___27277,output_schema27271_27278,input_schema27272_27279,input_checker27273_27280,output_checker27274_27281){
return (function plumbing$fnk$schema$union_input_schemata(G__27275,G__27276){
var validate__23140__auto__ = ufv___27277.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27275,G__27276], null);
var temp__4425__auto___27283 = input_checker27273_27280.call(null,args__23141__auto___27282);
if(cljs.core.truth_(temp__4425__auto___27283)){
var error__23142__auto___27284 = temp__4425__auto___27283;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__23142__auto___27284)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27272_27279,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27282,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27284], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var i1 = G__27275;
var i2 = G__27276;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__23140__auto__,ufv___27277,output_schema27271_27278,input_schema27272_27279,input_checker27273_27280,output_checker27274_27281){
return (function (p1__27270_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__27270_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__27270_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__23140__auto__,ufv___27277,output_schema27271_27278,input_schema27272_27279,input_checker27273_27280,output_checker27274_27281))
,((function (validate__23140__auto__,ufv___27277,output_schema27271_27278,input_schema27272_27279,input_checker27273_27280,output_checker27274_27281){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__23140__auto__,ufv___27277,output_schema27271_27278,input_schema27272_27279,input_checker27273_27280,output_checker27274_27281))
,((function (validate__23140__auto__,ufv___27277,output_schema27271_27278,input_schema27272_27279,input_checker27273_27280,output_checker27274_27281){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__16057__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__16057__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__16057__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__23140__auto__,ufv___27277,output_schema27271_27278,input_schema27272_27279,input_checker27273_27280,output_checker27274_27281))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27285 = output_checker27274_27281.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27285)){
var error__23142__auto___27286 = temp__4425__auto___27285;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__23142__auto___27286)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27271_27278,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27286], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27277,output_schema27271_27278,input_schema27272_27279,input_checker27273_27280,output_checker27274_27281))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema27271_27278,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27272_27279], null)));
var ufv___27292 = schema.utils.use_fn_validation;
var output_schema27287_27293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema27288_27294 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker27289_27295 = schema.core.checker.call(null,input_schema27288_27294);
var output_checker27290_27296 = schema.core.checker.call(null,output_schema27287_27293);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___27292,output_schema27287_27293,input_schema27288_27294,input_checker27289_27295,output_checker27290_27296){
return (function plumbing$fnk$schema$required_toplevel_keys(G__27291){
var validate__23140__auto__ = ufv___27292.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27291], null);
var temp__4425__auto___27298 = input_checker27289_27295.call(null,args__23141__auto___27297);
if(cljs.core.truth_(temp__4425__auto___27298)){
var error__23142__auto___27299 = temp__4425__auto___27298;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__23142__auto___27299)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27288_27294,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27297,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27299], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var input_schema = G__27291;
while(true){
return cljs.core.keep.call(null,((function (validate__23140__auto__,ufv___27292,output_schema27287_27293,input_schema27288_27294,input_checker27289_27295,output_checker27290_27296){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__23140__auto__,ufv___27292,output_schema27287_27293,input_schema27288_27294,input_checker27289_27295,output_checker27290_27296))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27300 = output_checker27290_27296.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27300)){
var error__23142__auto___27301 = temp__4425__auto___27300;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__23142__auto___27301)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27287_27293,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27301], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27292,output_schema27287_27293,input_schema27288_27294,input_checker27289_27295,output_checker27290_27296))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema27287_27293,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27288_27294], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__16823__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__27310(s__27311){
return (new cljs.core.LazySeq(null,(function (){
var s__27311__$1 = s__27311;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27311__$1);
if(temp__4425__auto__){
var s__27311__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27311__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__27311__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__27313 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__27312 = (0);
while(true){
if((i__27312 < size__16822__auto__)){
var vec__27316 = cljs.core._nth.call(null,c__16821__auto__,i__27312);
var k = cljs.core.nth.call(null,vec__27316,(0),null);
var v = cljs.core.nth.call(null,vec__27316,(1),null);
cljs.core.chunk_append.call(null,b__27313,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__27318 = (i__27312 + (1));
i__27312 = G__27318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27313),plumbing$fnk$schema$guess_expr_output_schema_$_iter__27310.call(null,cljs.core.chunk_rest.call(null,s__27311__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27313),null);
}
} else {
var vec__27317 = cljs.core.first.call(null,s__27311__$2);
var k = cljs.core.nth.call(null,vec__27317,(0),null);
var v = cljs.core.nth.call(null,vec__27317,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__27310.call(null,cljs.core.rest.call(null,s__27311__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__16823__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__27327(s__27328){
return (new cljs.core.LazySeq(null,(function (){
var s__27328__$1 = s__27328;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27328__$1);
if(temp__4425__auto__){
var s__27328__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27328__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__27328__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__27330 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__27329 = (0);
while(true){
if((i__27329 < size__16822__auto__)){
var vec__27333 = cljs.core._nth.call(null,c__16821__auto__,i__27329);
var k = cljs.core.nth.call(null,vec__27333,(0),null);
var v = cljs.core.nth.call(null,vec__27333,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__16069__auto__ = required_QMARK_;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__27330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__27335 = (i__27329 + (1));
i__27329 = G__27335;
continue;
} else {
var G__27336 = (i__27329 + (1));
i__27329 = G__27336;
continue;
}
} else {
var G__27337 = (i__27329 + (1));
i__27329 = G__27337;
continue;
}
} else {
var G__27338 = (i__27329 + (1));
i__27329 = G__27338;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27330),plumbing$fnk$schema$schema_diff_$_iter__27327.call(null,cljs.core.chunk_rest.call(null,s__27328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27330),null);
}
} else {
var vec__27334 = cljs.core.first.call(null,s__27328__$2);
var k = cljs.core.nth.call(null,vec__27334,(0),null);
var v = cljs.core.nth.call(null,vec__27334,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__16069__auto__ = required_QMARK_;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__27327.call(null,cljs.core.rest.call(null,s__27328__$2)));
} else {
var G__27339 = cljs.core.rest.call(null,s__27328__$2);
s__27328__$1 = G__27339;
continue;
}
} else {
var G__27340 = cljs.core.rest.call(null,s__27328__$2);
s__27328__$1 = G__27340;
continue;
}
} else {
var G__27341 = cljs.core.rest.call(null,s__27328__$2);
s__27328__$1 = G__27341;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___27364 = schema.utils.use_fn_validation;
var output_schema27342_27365 = schema.core.Any;
var input_schema27343_27366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker27344_27367 = schema.core.checker.call(null,input_schema27343_27366);
var output_checker27345_27368 = schema.core.checker.call(null,output_schema27342_27365);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___27364,output_schema27342_27365,input_schema27343_27366,input_checker27344_27367,output_checker27345_27368){
return (function plumbing$fnk$schema$compose_schemata(G__27346,G__27347){
var validate__23140__auto__ = true;
if(validate__23140__auto__){
var args__23141__auto___27369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27346,G__27347], null);
var temp__4425__auto___27370 = input_checker27344_27367.call(null,args__23141__auto___27369);
if(cljs.core.truth_(temp__4425__auto___27370)){
var error__23142__auto___27371 = temp__4425__auto___27370;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__23142__auto___27371)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27343_27366,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27369,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27371], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var G__27358 = G__27346;
var vec__27360 = G__27358;
var i2 = cljs.core.nth.call(null,vec__27360,(0),null);
var o2 = cljs.core.nth.call(null,vec__27360,(1),null);
var G__27359 = G__27347;
var vec__27361 = G__27359;
var i1 = cljs.core.nth.call(null,vec__27361,(0),null);
var o1 = cljs.core.nth.call(null,vec__27361,(1),null);
var G__27358__$1 = G__27358;
var G__27359__$1 = G__27359;
while(true){
var vec__27362 = G__27358__$1;
var i2__$1 = cljs.core.nth.call(null,vec__27362,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__27362,(1),null);
var vec__27363 = G__27359__$1;
var i1__$1 = cljs.core.nth.call(null,vec__27363,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__27363,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__23140__auto__){
var temp__4425__auto___27372 = output_checker27345_27368.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27372)){
var error__23142__auto___27373 = temp__4425__auto___27372;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__23142__auto___27373)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27342_27365,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27373], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27364,output_schema27342_27365,input_schema27343_27366,input_checker27344_27367,output_checker27345_27368))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema27342_27365,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27343_27366], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___27452 = schema.utils.use_fn_validation;
var output_schema27374_27453 = schema.core.Any;
var input_schema27375_27454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker27376_27455 = schema.core.checker.call(null,input_schema27375_27454);
var output_checker27377_27456 = schema.core.checker.call(null,output_schema27374_27453);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456){
return (function plumbing$fnk$schema$split_schema(G__27378,G__27379){
var validate__23140__auto__ = ufv___27452.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27378,G__27379], null);
var temp__4425__auto___27458 = input_checker27376_27455.call(null,args__23141__auto___27457);
if(cljs.core.truth_(temp__4425__auto___27458)){
var error__23142__auto___27459 = temp__4425__auto___27458;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__23142__auto___27459)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27375_27454,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27457,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27459], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var s = G__27378;
var ks = G__27379;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__16823__auto__ = ((function (ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456){
return (function plumbing$fnk$schema$split_schema_$_iter__27416(s__27417){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456){
return (function (){
var s__27417__$1 = s__27417;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27417__$1);
if(temp__4425__auto__){
var s__27417__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27417__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__27417__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__27419 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__27418 = (0);
while(true){
if((i__27418 < size__16822__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__16821__auto__,i__27418);
cljs.core.chunk_append.call(null,b__27419,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__16823__auto__ = ((function (i__27418,in_QMARK_,c__16821__auto__,size__16822__auto__,b__27419,s__27417__$2,temp__4425__auto__,ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456){
return (function plumbing$fnk$schema$split_schema_$_iter__27416_$_iter__27436(s__27437){
return (new cljs.core.LazySeq(null,((function (i__27418,in_QMARK_,c__16821__auto__,size__16822__auto__,b__27419,s__27417__$2,temp__4425__auto__,ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456){
return (function (){
var s__27437__$1 = s__27437;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27437__$1);
if(temp__4425__auto____$1){
var s__27437__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27437__$2)){
var c__16821__auto____$1 = cljs.core.chunk_first.call(null,s__27437__$2);
var size__16822__auto____$1 = cljs.core.count.call(null,c__16821__auto____$1);
var b__27439 = cljs.core.chunk_buffer.call(null,size__16822__auto____$1);
if((function (){var i__27438 = (0);
while(true){
if((i__27438 < size__16822__auto____$1)){
var vec__27442 = cljs.core._nth.call(null,c__16821__auto____$1,i__27438);
var k = cljs.core.nth.call(null,vec__27442,(0),null);
var v = cljs.core.nth.call(null,vec__27442,(1),null);
if(cljs.core.truth_((function (){var and__16057__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16057__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__27439,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27460 = (i__27438 + (1));
i__27438 = G__27460;
continue;
} else {
var G__27461 = (i__27438 + (1));
i__27438 = G__27461;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27439),plumbing$fnk$schema$split_schema_$_iter__27416_$_iter__27436.call(null,cljs.core.chunk_rest.call(null,s__27437__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27439),null);
}
} else {
var vec__27443 = cljs.core.first.call(null,s__27437__$2);
var k = cljs.core.nth.call(null,vec__27443,(0),null);
var v = cljs.core.nth.call(null,vec__27443,(1),null);
if(cljs.core.truth_((function (){var and__16057__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16057__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__27416_$_iter__27436.call(null,cljs.core.rest.call(null,s__27437__$2)));
} else {
var G__27462 = cljs.core.rest.call(null,s__27437__$2);
s__27437__$1 = G__27462;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__27418,in_QMARK_,c__16821__auto__,size__16822__auto__,b__27419,s__27417__$2,temp__4425__auto__,ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456))
,null,null));
});})(i__27418,in_QMARK_,c__16821__auto__,size__16822__auto__,b__27419,s__27417__$2,temp__4425__auto__,ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456))
;
return iter__16823__auto__.call(null,s);
})()));

var G__27463 = (i__27418 + (1));
i__27418 = G__27463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27419),plumbing$fnk$schema$split_schema_$_iter__27416.call(null,cljs.core.chunk_rest.call(null,s__27417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27419),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__27417__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__16823__auto__ = ((function (in_QMARK_,s__27417__$2,temp__4425__auto__,ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456){
return (function plumbing$fnk$schema$split_schema_$_iter__27416_$_iter__27444(s__27445){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__27417__$2,temp__4425__auto__,ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456){
return (function (){
var s__27445__$1 = s__27445;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27445__$1);
if(temp__4425__auto____$1){
var s__27445__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27445__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__27445__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__27447 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__27446 = (0);
while(true){
if((i__27446 < size__16822__auto__)){
var vec__27450 = cljs.core._nth.call(null,c__16821__auto__,i__27446);
var k = cljs.core.nth.call(null,vec__27450,(0),null);
var v = cljs.core.nth.call(null,vec__27450,(1),null);
if(cljs.core.truth_((function (){var and__16057__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16057__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__27447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27464 = (i__27446 + (1));
i__27446 = G__27464;
continue;
} else {
var G__27465 = (i__27446 + (1));
i__27446 = G__27465;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27447),plumbing$fnk$schema$split_schema_$_iter__27416_$_iter__27444.call(null,cljs.core.chunk_rest.call(null,s__27445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27447),null);
}
} else {
var vec__27451 = cljs.core.first.call(null,s__27445__$2);
var k = cljs.core.nth.call(null,vec__27451,(0),null);
var v = cljs.core.nth.call(null,vec__27451,(1),null);
if(cljs.core.truth_((function (){var and__16057__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16057__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__27416_$_iter__27444.call(null,cljs.core.rest.call(null,s__27445__$2)));
} else {
var G__27466 = cljs.core.rest.call(null,s__27445__$2);
s__27445__$1 = G__27466;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__27417__$2,temp__4425__auto__,ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456))
,null,null));
});})(in_QMARK_,s__27417__$2,temp__4425__auto__,ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456))
;
return iter__16823__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__27416.call(null,cljs.core.rest.call(null,s__27417__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456))
,null,null));
});})(ks__$1,validate__23140__auto__,ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456))
;
return iter__16823__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27467 = output_checker27377_27456.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27467)){
var error__23142__auto___27468 = temp__4425__auto___27467;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__23142__auto___27468)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27374_27453,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27468], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27452,output_schema27374_27453,input_schema27375_27454,input_checker27376_27455,output_checker27377_27456))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema27374_27453,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27375_27454], null)));
var ufv___27499 = schema.utils.use_fn_validation;
var output_schema27469_27500 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema27470_27501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker27471_27502 = schema.core.checker.call(null,input_schema27470_27501);
var output_checker27472_27503 = schema.core.checker.call(null,output_schema27469_27500);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___27499,output_schema27469_27500,input_schema27470_27501,input_checker27471_27502,output_checker27472_27503){
return (function plumbing$fnk$schema$sequence_schemata(G__27473,G__27474){
var validate__23140__auto__ = ufv___27499.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27473,G__27474], null);
var temp__4425__auto___27505 = input_checker27471_27502.call(null,args__23141__auto___27504);
if(cljs.core.truth_(temp__4425__auto___27505)){
var error__23142__auto___27506 = temp__4425__auto___27505;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__23142__auto___27506)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27470_27501,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27504,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27506], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var G__27490 = G__27473;
var vec__27492 = G__27490;
var i1 = cljs.core.nth.call(null,vec__27492,(0),null);
var o1 = cljs.core.nth.call(null,vec__27492,(1),null);
var G__27491 = G__27474;
var vec__27493 = G__27491;
var k = cljs.core.nth.call(null,vec__27493,(0),null);
var vec__27494 = cljs.core.nth.call(null,vec__27493,(1),null);
var i2 = cljs.core.nth.call(null,vec__27494,(0),null);
var o2 = cljs.core.nth.call(null,vec__27494,(1),null);
var G__27490__$1 = G__27490;
var G__27491__$1 = G__27491;
while(true){
var vec__27495 = G__27490__$1;
var i1__$1 = cljs.core.nth.call(null,vec__27495,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__27495,(1),null);
var vec__27496 = G__27491__$1;
var k__$1 = cljs.core.nth.call(null,vec__27496,(0),null);
var vec__27497 = cljs.core.nth.call(null,vec__27496,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__27497,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__27497,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__27498 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__27498,(0),null);
var unused = cljs.core.nth.call(null,vec__27498,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27507 = output_checker27472_27503.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27507)){
var error__23142__auto___27508 = temp__4425__auto___27507;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__23142__auto___27508)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27469_27500,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27508], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27499,output_schema27469_27500,input_schema27470_27501,input_checker27471_27502,output_checker27472_27503))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema27469_27500,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27470_27501], null)));

//# sourceMappingURL=schema.js.map?rel=1440655369426