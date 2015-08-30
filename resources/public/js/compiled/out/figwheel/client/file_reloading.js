// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__32596_SHARP_,p2__32597_SHARP_){
var and__16057__auto__ = p1__32596_SHARP_;
if(cljs.core.truth_(and__16057__auto__)){
return p2__32597_SHARP_;
} else {
return and__16057__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16069__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16069__auto__){
return or__16069__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16069__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16069__auto__){
return or__16069__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16069__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__32598){
var map__32599 = p__32598;
var map__32599__$1 = ((cljs.core.seq_QMARK_.call(null,map__32599))?cljs.core.apply.call(null,cljs.core.hash_map,map__32599):map__32599);
var file = cljs.core.get.call(null,map__32599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__32600){
var map__32601 = p__32600;
var map__32601__$1 = ((cljs.core.seq_QMARK_.call(null,map__32601))?cljs.core.apply.call(null,cljs.core.hash_map,map__32601):map__32601);
var namespace = cljs.core.get.call(null,map__32601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e32602){if((e32602 instanceof Error)){
var e = e32602;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32602;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__32604 = arguments.length;
switch (G__32604) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32606,callback){
var map__32608 = p__32606;
var map__32608__$1 = ((cljs.core.seq_QMARK_.call(null,map__32608))?cljs.core.apply.call(null,cljs.core.hash_map,map__32608):map__32608);
var file_msg = map__32608__$1;
var request_url = cljs.core.get.call(null,map__32608__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32608,map__32608__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32608,map__32608__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32609){
var map__32611 = p__32609;
var map__32611__$1 = ((cljs.core.seq_QMARK_.call(null,map__32611))?cljs.core.apply.call(null,cljs.core.hash_map,map__32611):map__32611);
var file_msg = map__32611__$1;
var namespace = cljs.core.get.call(null,map__32611__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__32611__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16069__auto__ = meta_data;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16057__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16057__auto__){
var or__16069__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16069__auto____$1)){
return or__16069__auto____$1;
} else {
var and__16057__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16057__auto____$1){
var or__16069__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16069__auto____$2){
return or__16069__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16057__auto____$1;
}
}
}
} else {
return and__16057__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32612,callback){
var map__32614 = p__32612;
var map__32614__$1 = ((cljs.core.seq_QMARK_.call(null,map__32614))?cljs.core.apply.call(null,cljs.core.hash_map,map__32614):map__32614);
var file_msg = map__32614__$1;
var request_url = cljs.core.get.call(null,map__32614__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32614__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19012__auto___32701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___32701,out){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___32701,out){
return (function (state_32683){
var state_val_32684 = (state_32683[(1)]);
if((state_val_32684 === (1))){
var inst_32661 = cljs.core.nth.call(null,files,(0),null);
var inst_32662 = cljs.core.nthnext.call(null,files,(1));
var inst_32663 = files;
var state_32683__$1 = (function (){var statearr_32685 = state_32683;
(statearr_32685[(7)] = inst_32663);

(statearr_32685[(8)] = inst_32661);

(statearr_32685[(9)] = inst_32662);

return statearr_32685;
})();
var statearr_32686_32702 = state_32683__$1;
(statearr_32686_32702[(2)] = null);

(statearr_32686_32702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (2))){
var inst_32663 = (state_32683[(7)]);
var inst_32666 = (state_32683[(10)]);
var inst_32666__$1 = cljs.core.nth.call(null,inst_32663,(0),null);
var inst_32667 = cljs.core.nthnext.call(null,inst_32663,(1));
var inst_32668 = (inst_32666__$1 == null);
var inst_32669 = cljs.core.not.call(null,inst_32668);
var state_32683__$1 = (function (){var statearr_32687 = state_32683;
(statearr_32687[(11)] = inst_32667);

(statearr_32687[(10)] = inst_32666__$1);

return statearr_32687;
})();
if(inst_32669){
var statearr_32688_32703 = state_32683__$1;
(statearr_32688_32703[(1)] = (4));

} else {
var statearr_32689_32704 = state_32683__$1;
(statearr_32689_32704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (3))){
var inst_32681 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32683__$1,inst_32681);
} else {
if((state_val_32684 === (4))){
var inst_32666 = (state_32683[(10)]);
var inst_32671 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32666);
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32683__$1,(7),inst_32671);
} else {
if((state_val_32684 === (5))){
var inst_32677 = cljs.core.async.close_BANG_.call(null,out);
var state_32683__$1 = state_32683;
var statearr_32690_32705 = state_32683__$1;
(statearr_32690_32705[(2)] = inst_32677);

(statearr_32690_32705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (6))){
var inst_32679 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32691_32706 = state_32683__$1;
(statearr_32691_32706[(2)] = inst_32679);

(statearr_32691_32706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (7))){
var inst_32667 = (state_32683[(11)]);
var inst_32673 = (state_32683[(2)]);
var inst_32674 = cljs.core.async.put_BANG_.call(null,out,inst_32673);
var inst_32663 = inst_32667;
var state_32683__$1 = (function (){var statearr_32692 = state_32683;
(statearr_32692[(12)] = inst_32674);

(statearr_32692[(7)] = inst_32663);

return statearr_32692;
})();
var statearr_32693_32707 = state_32683__$1;
(statearr_32693_32707[(2)] = null);

(statearr_32693_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19012__auto___32701,out))
;
return ((function (switch__18991__auto__,c__19012__auto___32701,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto____0 = (function (){
var statearr_32697 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32697[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto__);

(statearr_32697[(1)] = (1));

return statearr_32697;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto____1 = (function (state_32683){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_32683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e32698){if((e32698 instanceof Object)){
var ex__18995__auto__ = e32698;
var statearr_32699_32708 = state_32683;
(statearr_32699_32708[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32709 = state_32683;
state_32683 = G__32709;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto__ = function(state_32683){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto____1.call(this,state_32683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___32701,out))
})();
var state__19014__auto__ = (function (){var statearr_32700 = f__19013__auto__.call(null);
(statearr_32700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___32701);

return statearr_32700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___32701,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__32710,p__32711){
var map__32714 = p__32710;
var map__32714__$1 = ((cljs.core.seq_QMARK_.call(null,map__32714))?cljs.core.apply.call(null,cljs.core.hash_map,map__32714):map__32714);
var opts = map__32714__$1;
var url_rewriter = cljs.core.get.call(null,map__32714__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__32715 = p__32711;
var map__32715__$1 = ((cljs.core.seq_QMARK_.call(null,map__32715))?cljs.core.apply.call(null,cljs.core.hash_map,map__32715):map__32715);
var file_msg = map__32715__$1;
var file = cljs.core.get.call(null,map__32715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32716,opts){
var map__32719 = p__32716;
var map__32719__$1 = ((cljs.core.seq_QMARK_.call(null,map__32719))?cljs.core.apply.call(null,cljs.core.hash_map,map__32719):map__32719);
var eval_body__$1 = cljs.core.get.call(null,map__32719__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16057__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16057__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16057__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32720){var e = e32720;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32725,p__32726){
var map__32928 = p__32725;
var map__32928__$1 = ((cljs.core.seq_QMARK_.call(null,map__32928))?cljs.core.apply.call(null,cljs.core.hash_map,map__32928):map__32928);
var opts = map__32928__$1;
var before_jsload = cljs.core.get.call(null,map__32928__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32928__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__32928__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__32929 = p__32726;
var map__32929__$1 = ((cljs.core.seq_QMARK_.call(null,map__32929))?cljs.core.apply.call(null,cljs.core.hash_map,map__32929):map__32929);
var msg = map__32929__$1;
var files = cljs.core.get.call(null,map__32929__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function (state_33054){
var state_val_33055 = (state_33054[(1)]);
if((state_val_33055 === (7))){
var inst_32941 = (state_33054[(7)]);
var inst_32942 = (state_33054[(8)]);
var inst_32943 = (state_33054[(9)]);
var inst_32944 = (state_33054[(10)]);
var inst_32949 = cljs.core._nth.call(null,inst_32942,inst_32944);
var inst_32950 = figwheel.client.file_reloading.eval_body.call(null,inst_32949,opts);
var inst_32951 = (inst_32944 + (1));
var tmp33056 = inst_32941;
var tmp33057 = inst_32942;
var tmp33058 = inst_32943;
var inst_32941__$1 = tmp33056;
var inst_32942__$1 = tmp33057;
var inst_32943__$1 = tmp33058;
var inst_32944__$1 = inst_32951;
var state_33054__$1 = (function (){var statearr_33059 = state_33054;
(statearr_33059[(7)] = inst_32941__$1);

(statearr_33059[(8)] = inst_32942__$1);

(statearr_33059[(9)] = inst_32943__$1);

(statearr_33059[(10)] = inst_32944__$1);

(statearr_33059[(11)] = inst_32950);

return statearr_33059;
})();
var statearr_33060_33129 = state_33054__$1;
(statearr_33060_33129[(2)] = null);

(statearr_33060_33129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (20))){
var inst_32986 = (state_33054[(12)]);
var inst_32987 = (state_33054[(13)]);
var inst_32993 = (state_33054[(14)]);
var inst_32991 = (state_33054[(15)]);
var inst_32990 = (state_33054[(16)]);
var inst_32996 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32998 = (function (){var all_files = inst_32986;
var files_SINGLEQUOTE_ = inst_32987;
var res_SINGLEQUOTE_ = inst_32990;
var res = inst_32991;
var files_not_loaded = inst_32993;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32986,inst_32987,inst_32993,inst_32991,inst_32990,inst_32996,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function (p__32997){
var map__33061 = p__32997;
var map__33061__$1 = ((cljs.core.seq_QMARK_.call(null,map__33061))?cljs.core.apply.call(null,cljs.core.hash_map,map__33061):map__33061);
var namespace = cljs.core.get.call(null,map__33061__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32986,inst_32987,inst_32993,inst_32991,inst_32990,inst_32996,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
})();
var inst_32999 = cljs.core.map.call(null,inst_32998,inst_32991);
var inst_33000 = cljs.core.pr_str.call(null,inst_32999);
var inst_33001 = figwheel.client.utils.log.call(null,inst_33000);
var inst_33002 = (function (){var all_files = inst_32986;
var files_SINGLEQUOTE_ = inst_32987;
var res_SINGLEQUOTE_ = inst_32990;
var res = inst_32991;
var files_not_loaded = inst_32993;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32986,inst_32987,inst_32993,inst_32991,inst_32990,inst_32996,inst_32998,inst_32999,inst_33000,inst_33001,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32986,inst_32987,inst_32993,inst_32991,inst_32990,inst_32996,inst_32998,inst_32999,inst_33000,inst_33001,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
})();
var inst_33003 = setTimeout(inst_33002,(10));
var state_33054__$1 = (function (){var statearr_33062 = state_33054;
(statearr_33062[(17)] = inst_33001);

(statearr_33062[(18)] = inst_32996);

return statearr_33062;
})();
var statearr_33063_33130 = state_33054__$1;
(statearr_33063_33130[(2)] = inst_33003);

(statearr_33063_33130[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (27))){
var inst_33013 = (state_33054[(19)]);
var state_33054__$1 = state_33054;
var statearr_33064_33131 = state_33054__$1;
(statearr_33064_33131[(2)] = inst_33013);

(statearr_33064_33131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (1))){
var inst_32933 = (state_33054[(20)]);
var inst_32930 = before_jsload.call(null,files);
var inst_32931 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32932 = (function (){return ((function (inst_32933,inst_32930,inst_32931,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function (p1__32721_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32721_SHARP_);
});
;})(inst_32933,inst_32930,inst_32931,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
})();
var inst_32933__$1 = cljs.core.filter.call(null,inst_32932,files);
var inst_32934 = cljs.core.not_empty.call(null,inst_32933__$1);
var state_33054__$1 = (function (){var statearr_33065 = state_33054;
(statearr_33065[(21)] = inst_32930);

(statearr_33065[(22)] = inst_32931);

(statearr_33065[(20)] = inst_32933__$1);

return statearr_33065;
})();
if(cljs.core.truth_(inst_32934)){
var statearr_33066_33132 = state_33054__$1;
(statearr_33066_33132[(1)] = (2));

} else {
var statearr_33067_33133 = state_33054__$1;
(statearr_33067_33133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (24))){
var state_33054__$1 = state_33054;
var statearr_33068_33134 = state_33054__$1;
(statearr_33068_33134[(2)] = null);

(statearr_33068_33134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (4))){
var inst_32978 = (state_33054[(2)]);
var inst_32979 = (function (){return ((function (inst_32978,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function (p1__32722_SHARP_){
var and__16057__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32722_SHARP_);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32722_SHARP_));
} else {
return and__16057__auto__;
}
});
;})(inst_32978,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
})();
var inst_32980 = cljs.core.filter.call(null,inst_32979,files);
var state_33054__$1 = (function (){var statearr_33069 = state_33054;
(statearr_33069[(23)] = inst_32978);

(statearr_33069[(24)] = inst_32980);

return statearr_33069;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_33070_33135 = state_33054__$1;
(statearr_33070_33135[(1)] = (16));

} else {
var statearr_33071_33136 = state_33054__$1;
(statearr_33071_33136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (15))){
var inst_32968 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33072_33137 = state_33054__$1;
(statearr_33072_33137[(2)] = inst_32968);

(statearr_33072_33137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (21))){
var state_33054__$1 = state_33054;
var statearr_33073_33138 = state_33054__$1;
(statearr_33073_33138[(2)] = null);

(statearr_33073_33138[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (31))){
var inst_33021 = (state_33054[(25)]);
var inst_33031 = (state_33054[(2)]);
var inst_33032 = cljs.core.not_empty.call(null,inst_33021);
var state_33054__$1 = (function (){var statearr_33074 = state_33054;
(statearr_33074[(26)] = inst_33031);

return statearr_33074;
})();
if(cljs.core.truth_(inst_33032)){
var statearr_33075_33139 = state_33054__$1;
(statearr_33075_33139[(1)] = (32));

} else {
var statearr_33076_33140 = state_33054__$1;
(statearr_33076_33140[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (32))){
var inst_33021 = (state_33054[(25)]);
var inst_33034 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33021);
var inst_33035 = cljs.core.pr_str.call(null,inst_33034);
var inst_33036 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_33035)].join('');
var inst_33037 = figwheel.client.utils.log.call(null,inst_33036);
var state_33054__$1 = state_33054;
var statearr_33077_33141 = state_33054__$1;
(statearr_33077_33141[(2)] = inst_33037);

(statearr_33077_33141[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (33))){
var state_33054__$1 = state_33054;
var statearr_33078_33142 = state_33054__$1;
(statearr_33078_33142[(2)] = null);

(statearr_33078_33142[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (13))){
var inst_32954 = (state_33054[(27)]);
var inst_32958 = cljs.core.chunk_first.call(null,inst_32954);
var inst_32959 = cljs.core.chunk_rest.call(null,inst_32954);
var inst_32960 = cljs.core.count.call(null,inst_32958);
var inst_32941 = inst_32959;
var inst_32942 = inst_32958;
var inst_32943 = inst_32960;
var inst_32944 = (0);
var state_33054__$1 = (function (){var statearr_33079 = state_33054;
(statearr_33079[(7)] = inst_32941);

(statearr_33079[(8)] = inst_32942);

(statearr_33079[(9)] = inst_32943);

(statearr_33079[(10)] = inst_32944);

return statearr_33079;
})();
var statearr_33080_33143 = state_33054__$1;
(statearr_33080_33143[(2)] = null);

(statearr_33080_33143[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (22))){
var inst_32993 = (state_33054[(14)]);
var inst_33006 = (state_33054[(2)]);
var inst_33007 = cljs.core.not_empty.call(null,inst_32993);
var state_33054__$1 = (function (){var statearr_33081 = state_33054;
(statearr_33081[(28)] = inst_33006);

return statearr_33081;
})();
if(cljs.core.truth_(inst_33007)){
var statearr_33082_33144 = state_33054__$1;
(statearr_33082_33144[(1)] = (23));

} else {
var statearr_33083_33145 = state_33054__$1;
(statearr_33083_33145[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (36))){
var state_33054__$1 = state_33054;
var statearr_33084_33146 = state_33054__$1;
(statearr_33084_33146[(2)] = null);

(statearr_33084_33146[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (29))){
var inst_33020 = (state_33054[(29)]);
var inst_33025 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33020);
var inst_33026 = cljs.core.pr_str.call(null,inst_33025);
var inst_33027 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33026)].join('');
var inst_33028 = figwheel.client.utils.log.call(null,inst_33027);
var state_33054__$1 = state_33054;
var statearr_33085_33147 = state_33054__$1;
(statearr_33085_33147[(2)] = inst_33028);

(statearr_33085_33147[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (6))){
var inst_32975 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33086_33148 = state_33054__$1;
(statearr_33086_33148[(2)] = inst_32975);

(statearr_33086_33148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (28))){
var inst_33020 = (state_33054[(29)]);
var inst_33019 = (state_33054[(2)]);
var inst_33020__$1 = cljs.core.get.call(null,inst_33019,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33021 = cljs.core.get.call(null,inst_33019,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_33022 = cljs.core.get.call(null,inst_33019,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33023 = cljs.core.not_empty.call(null,inst_33020__$1);
var state_33054__$1 = (function (){var statearr_33087 = state_33054;
(statearr_33087[(29)] = inst_33020__$1);

(statearr_33087[(30)] = inst_33022);

(statearr_33087[(25)] = inst_33021);

return statearr_33087;
})();
if(cljs.core.truth_(inst_33023)){
var statearr_33088_33149 = state_33054__$1;
(statearr_33088_33149[(1)] = (29));

} else {
var statearr_33089_33150 = state_33054__$1;
(statearr_33089_33150[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (25))){
var inst_33052 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33054__$1,inst_33052);
} else {
if((state_val_33055 === (34))){
var inst_33022 = (state_33054[(30)]);
var inst_33040 = (state_33054[(2)]);
var inst_33041 = cljs.core.not_empty.call(null,inst_33022);
var state_33054__$1 = (function (){var statearr_33090 = state_33054;
(statearr_33090[(31)] = inst_33040);

return statearr_33090;
})();
if(cljs.core.truth_(inst_33041)){
var statearr_33091_33151 = state_33054__$1;
(statearr_33091_33151[(1)] = (35));

} else {
var statearr_33092_33152 = state_33054__$1;
(statearr_33092_33152[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (17))){
var inst_32980 = (state_33054[(24)]);
var state_33054__$1 = state_33054;
var statearr_33093_33153 = state_33054__$1;
(statearr_33093_33153[(2)] = inst_32980);

(statearr_33093_33153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (3))){
var state_33054__$1 = state_33054;
var statearr_33094_33154 = state_33054__$1;
(statearr_33094_33154[(2)] = null);

(statearr_33094_33154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (12))){
var inst_32971 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33095_33155 = state_33054__$1;
(statearr_33095_33155[(2)] = inst_32971);

(statearr_33095_33155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (2))){
var inst_32933 = (state_33054[(20)]);
var inst_32940 = cljs.core.seq.call(null,inst_32933);
var inst_32941 = inst_32940;
var inst_32942 = null;
var inst_32943 = (0);
var inst_32944 = (0);
var state_33054__$1 = (function (){var statearr_33096 = state_33054;
(statearr_33096[(7)] = inst_32941);

(statearr_33096[(8)] = inst_32942);

(statearr_33096[(9)] = inst_32943);

(statearr_33096[(10)] = inst_32944);

return statearr_33096;
})();
var statearr_33097_33156 = state_33054__$1;
(statearr_33097_33156[(2)] = null);

(statearr_33097_33156[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (23))){
var inst_32986 = (state_33054[(12)]);
var inst_33013 = (state_33054[(19)]);
var inst_32987 = (state_33054[(13)]);
var inst_32993 = (state_33054[(14)]);
var inst_32991 = (state_33054[(15)]);
var inst_32990 = (state_33054[(16)]);
var inst_33009 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33012 = (function (){var all_files = inst_32986;
var files_SINGLEQUOTE_ = inst_32987;
var res_SINGLEQUOTE_ = inst_32990;
var res = inst_32991;
var files_not_loaded = inst_32993;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32986,inst_33013,inst_32987,inst_32993,inst_32991,inst_32990,inst_33009,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function (p__33011){
var map__33098 = p__33011;
var map__33098__$1 = ((cljs.core.seq_QMARK_.call(null,map__33098))?cljs.core.apply.call(null,cljs.core.hash_map,map__33098):map__33098);
var meta_data = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32986,inst_33013,inst_32987,inst_32993,inst_32991,inst_32990,inst_33009,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
})();
var inst_33013__$1 = cljs.core.group_by.call(null,inst_33012,inst_32993);
var inst_33014 = cljs.core.seq_QMARK_.call(null,inst_33013__$1);
var state_33054__$1 = (function (){var statearr_33099 = state_33054;
(statearr_33099[(19)] = inst_33013__$1);

(statearr_33099[(32)] = inst_33009);

return statearr_33099;
})();
if(inst_33014){
var statearr_33100_33157 = state_33054__$1;
(statearr_33100_33157[(1)] = (26));

} else {
var statearr_33101_33158 = state_33054__$1;
(statearr_33101_33158[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (35))){
var inst_33022 = (state_33054[(30)]);
var inst_33043 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33022);
var inst_33044 = cljs.core.pr_str.call(null,inst_33043);
var inst_33045 = [cljs.core.str("not required: "),cljs.core.str(inst_33044)].join('');
var inst_33046 = figwheel.client.utils.log.call(null,inst_33045);
var state_33054__$1 = state_33054;
var statearr_33102_33159 = state_33054__$1;
(statearr_33102_33159[(2)] = inst_33046);

(statearr_33102_33159[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (19))){
var inst_32986 = (state_33054[(12)]);
var inst_32987 = (state_33054[(13)]);
var inst_32991 = (state_33054[(15)]);
var inst_32990 = (state_33054[(16)]);
var inst_32990__$1 = (state_33054[(2)]);
var inst_32991__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32990__$1);
var inst_32992 = (function (){var all_files = inst_32986;
var files_SINGLEQUOTE_ = inst_32987;
var res_SINGLEQUOTE_ = inst_32990__$1;
var res = inst_32991__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_32986,inst_32987,inst_32991,inst_32990,inst_32990__$1,inst_32991__$1,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function (p1__32724_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32724_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_32986,inst_32987,inst_32991,inst_32990,inst_32990__$1,inst_32991__$1,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
})();
var inst_32993 = cljs.core.filter.call(null,inst_32992,inst_32990__$1);
var inst_32994 = cljs.core.not_empty.call(null,inst_32991__$1);
var state_33054__$1 = (function (){var statearr_33103 = state_33054;
(statearr_33103[(14)] = inst_32993);

(statearr_33103[(15)] = inst_32991__$1);

(statearr_33103[(16)] = inst_32990__$1);

return statearr_33103;
})();
if(cljs.core.truth_(inst_32994)){
var statearr_33104_33160 = state_33054__$1;
(statearr_33104_33160[(1)] = (20));

} else {
var statearr_33105_33161 = state_33054__$1;
(statearr_33105_33161[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (11))){
var state_33054__$1 = state_33054;
var statearr_33106_33162 = state_33054__$1;
(statearr_33106_33162[(2)] = null);

(statearr_33106_33162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (9))){
var inst_32973 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33107_33163 = state_33054__$1;
(statearr_33107_33163[(2)] = inst_32973);

(statearr_33107_33163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (5))){
var inst_32943 = (state_33054[(9)]);
var inst_32944 = (state_33054[(10)]);
var inst_32946 = (inst_32944 < inst_32943);
var inst_32947 = inst_32946;
var state_33054__$1 = state_33054;
if(cljs.core.truth_(inst_32947)){
var statearr_33108_33164 = state_33054__$1;
(statearr_33108_33164[(1)] = (7));

} else {
var statearr_33109_33165 = state_33054__$1;
(statearr_33109_33165[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (14))){
var inst_32954 = (state_33054[(27)]);
var inst_32963 = cljs.core.first.call(null,inst_32954);
var inst_32964 = figwheel.client.file_reloading.eval_body.call(null,inst_32963,opts);
var inst_32965 = cljs.core.next.call(null,inst_32954);
var inst_32941 = inst_32965;
var inst_32942 = null;
var inst_32943 = (0);
var inst_32944 = (0);
var state_33054__$1 = (function (){var statearr_33110 = state_33054;
(statearr_33110[(7)] = inst_32941);

(statearr_33110[(33)] = inst_32964);

(statearr_33110[(8)] = inst_32942);

(statearr_33110[(9)] = inst_32943);

(statearr_33110[(10)] = inst_32944);

return statearr_33110;
})();
var statearr_33111_33166 = state_33054__$1;
(statearr_33111_33166[(2)] = null);

(statearr_33111_33166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (26))){
var inst_33013 = (state_33054[(19)]);
var inst_33016 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33013);
var state_33054__$1 = state_33054;
var statearr_33112_33167 = state_33054__$1;
(statearr_33112_33167[(2)] = inst_33016);

(statearr_33112_33167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (16))){
var inst_32980 = (state_33054[(24)]);
var inst_32982 = (function (){var all_files = inst_32980;
return ((function (all_files,inst_32980,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function (p1__32723_SHARP_){
return cljs.core.update_in.call(null,p1__32723_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_32980,state_val_33055,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
})();
var inst_32983 = cljs.core.map.call(null,inst_32982,inst_32980);
var state_33054__$1 = state_33054;
var statearr_33113_33168 = state_33054__$1;
(statearr_33113_33168[(2)] = inst_32983);

(statearr_33113_33168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (30))){
var state_33054__$1 = state_33054;
var statearr_33114_33169 = state_33054__$1;
(statearr_33114_33169[(2)] = null);

(statearr_33114_33169[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (10))){
var inst_32954 = (state_33054[(27)]);
var inst_32956 = cljs.core.chunked_seq_QMARK_.call(null,inst_32954);
var state_33054__$1 = state_33054;
if(inst_32956){
var statearr_33115_33170 = state_33054__$1;
(statearr_33115_33170[(1)] = (13));

} else {
var statearr_33116_33171 = state_33054__$1;
(statearr_33116_33171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (18))){
var inst_32986 = (state_33054[(12)]);
var inst_32987 = (state_33054[(13)]);
var inst_32986__$1 = (state_33054[(2)]);
var inst_32987__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_32986__$1);
var inst_32988 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32987__$1);
var state_33054__$1 = (function (){var statearr_33117 = state_33054;
(statearr_33117[(12)] = inst_32986__$1);

(statearr_33117[(13)] = inst_32987__$1);

return statearr_33117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33054__$1,(19),inst_32988);
} else {
if((state_val_33055 === (37))){
var inst_33049 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33118_33172 = state_33054__$1;
(statearr_33118_33172[(2)] = inst_33049);

(statearr_33118_33172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (8))){
var inst_32941 = (state_33054[(7)]);
var inst_32954 = (state_33054[(27)]);
var inst_32954__$1 = cljs.core.seq.call(null,inst_32941);
var state_33054__$1 = (function (){var statearr_33119 = state_33054;
(statearr_33119[(27)] = inst_32954__$1);

return statearr_33119;
})();
if(inst_32954__$1){
var statearr_33120_33173 = state_33054__$1;
(statearr_33120_33173[(1)] = (10));

} else {
var statearr_33121_33174 = state_33054__$1;
(statearr_33121_33174[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
;
return ((function (switch__18991__auto__,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto____0 = (function (){
var statearr_33125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33125[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto__);

(statearr_33125[(1)] = (1));

return statearr_33125;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto____1 = (function (state_33054){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_33054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e33126){if((e33126 instanceof Object)){
var ex__18995__auto__ = e33126;
var statearr_33127_33175 = state_33054;
(statearr_33127_33175[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33176 = state_33054;
state_33054 = G__33176;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto__ = function(state_33054){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto____1.call(this,state_33054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
})();
var state__19014__auto__ = (function (){var statearr_33128 = f__19013__auto__.call(null);
(statearr_33128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_33128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__,map__32928,map__32928__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32929,map__32929__$1,msg,files))
);

return c__19012__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33179,link){
var map__33181 = p__33179;
var map__33181__$1 = ((cljs.core.seq_QMARK_.call(null,map__33181))?cljs.core.apply.call(null,cljs.core.hash_map,map__33181):map__33181);
var file = cljs.core.get.call(null,map__33181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__33181,map__33181__$1,file){
return (function (p1__33177_SHARP_,p2__33178_SHARP_){
if(cljs.core._EQ_.call(null,p1__33177_SHARP_,p2__33178_SHARP_)){
return p1__33177_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__33181,map__33181__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33185){
var map__33186 = p__33185;
var map__33186__$1 = ((cljs.core.seq_QMARK_.call(null,map__33186))?cljs.core.apply.call(null,cljs.core.hash_map,map__33186):map__33186);
var match_length = cljs.core.get.call(null,map__33186__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33186__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33182_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33182_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__33188 = arguments.length;
switch (G__33188) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33190){
var map__33192 = p__33190;
var map__33192__$1 = ((cljs.core.seq_QMARK_.call(null,map__33192))?cljs.core.apply.call(null,cljs.core.hash_map,map__33192):map__33192);
var f_data = map__33192__$1;
var file = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16069__auto__ = request_url;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33193,files_msg){
var map__33215 = p__33193;
var map__33215__$1 = ((cljs.core.seq_QMARK_.call(null,map__33215))?cljs.core.apply.call(null,cljs.core.hash_map,map__33215):map__33215);
var opts = map__33215__$1;
var on_cssload = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33216_33236 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33217_33237 = null;
var count__33218_33238 = (0);
var i__33219_33239 = (0);
while(true){
if((i__33219_33239 < count__33218_33238)){
var f_33240 = cljs.core._nth.call(null,chunk__33217_33237,i__33219_33239);
figwheel.client.file_reloading.reload_css_file.call(null,f_33240);

var G__33241 = seq__33216_33236;
var G__33242 = chunk__33217_33237;
var G__33243 = count__33218_33238;
var G__33244 = (i__33219_33239 + (1));
seq__33216_33236 = G__33241;
chunk__33217_33237 = G__33242;
count__33218_33238 = G__33243;
i__33219_33239 = G__33244;
continue;
} else {
var temp__4425__auto___33245 = cljs.core.seq.call(null,seq__33216_33236);
if(temp__4425__auto___33245){
var seq__33216_33246__$1 = temp__4425__auto___33245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33216_33246__$1)){
var c__16854__auto___33247 = cljs.core.chunk_first.call(null,seq__33216_33246__$1);
var G__33248 = cljs.core.chunk_rest.call(null,seq__33216_33246__$1);
var G__33249 = c__16854__auto___33247;
var G__33250 = cljs.core.count.call(null,c__16854__auto___33247);
var G__33251 = (0);
seq__33216_33236 = G__33248;
chunk__33217_33237 = G__33249;
count__33218_33238 = G__33250;
i__33219_33239 = G__33251;
continue;
} else {
var f_33252 = cljs.core.first.call(null,seq__33216_33246__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33252);

var G__33253 = cljs.core.next.call(null,seq__33216_33246__$1);
var G__33254 = null;
var G__33255 = (0);
var G__33256 = (0);
seq__33216_33236 = G__33253;
chunk__33217_33237 = G__33254;
count__33218_33238 = G__33255;
i__33219_33239 = G__33256;
continue;
}
} else {
}
}
break;
}

var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__,map__33215,map__33215__$1,opts,on_cssload){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__,map__33215,map__33215__$1,opts,on_cssload){
return (function (state_33226){
var state_val_33227 = (state_33226[(1)]);
if((state_val_33227 === (1))){
var inst_33220 = cljs.core.async.timeout.call(null,(100));
var state_33226__$1 = state_33226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33226__$1,(2),inst_33220);
} else {
if((state_val_33227 === (2))){
var inst_33222 = (state_33226[(2)]);
var inst_33223 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_33224 = on_cssload.call(null,inst_33223);
var state_33226__$1 = (function (){var statearr_33228 = state_33226;
(statearr_33228[(7)] = inst_33222);

return statearr_33228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33226__$1,inst_33224);
} else {
return null;
}
}
});})(c__19012__auto__,map__33215,map__33215__$1,opts,on_cssload))
;
return ((function (switch__18991__auto__,c__19012__auto__,map__33215,map__33215__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto____0 = (function (){
var statearr_33232 = [null,null,null,null,null,null,null,null];
(statearr_33232[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto__);

(statearr_33232[(1)] = (1));

return statearr_33232;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto____1 = (function (state_33226){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_33226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e33233){if((e33233 instanceof Object)){
var ex__18995__auto__ = e33233;
var statearr_33234_33257 = state_33226;
(statearr_33234_33257[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33258 = state_33226;
state_33226 = G__33258;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto__ = function(state_33226){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto____1.call(this,state_33226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__,map__33215,map__33215__$1,opts,on_cssload))
})();
var state__19014__auto__ = (function (){var statearr_33235 = f__19013__auto__.call(null);
(statearr_33235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_33235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__,map__33215,map__33215__$1,opts,on_cssload))
);

return c__19012__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440655378900