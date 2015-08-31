// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('cljsketch.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33306__delegate = function (x){
if(cljs.core.truth_(cljsketch.core.on_js_reload)){
return cljs.core.apply.call(null,cljsketch.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'cljsketch.core/on-js-reload' is missing");
}
};
var G__33306 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__33307__i = 0, G__33307__a = new Array(arguments.length -  0);
while (G__33307__i < G__33307__a.length) {G__33307__a[G__33307__i] = arguments[G__33307__i + 0]; ++G__33307__i;}
  x = new cljs.core.IndexedSeq(G__33307__a,0);
} 
return G__33306__delegate.call(this,x);};
G__33306.cljs$lang$maxFixedArity = 0;
G__33306.cljs$lang$applyTo = (function (arglist__33308){
var x = cljs.core.seq(arglist__33308);
return G__33306__delegate(x);
});
G__33306.cljs$core$IFn$_invoke$arity$variadic = G__33306__delegate;
return G__33306;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1440655379759