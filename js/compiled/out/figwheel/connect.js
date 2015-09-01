// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('cljsketch.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__23614__delegate = function (x){
if(cljs.core.truth_(cljsketch.core.on_js_reload)){
return cljs.core.apply.call(null,cljsketch.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'cljsketch.core/on-js-reload' is missing");
}
};
var G__23614 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__23615__i = 0, G__23615__a = new Array(arguments.length -  0);
while (G__23615__i < G__23615__a.length) {G__23615__a[G__23615__i] = arguments[G__23615__i + 0]; ++G__23615__i;}
  x = new cljs.core.IndexedSeq(G__23615__a,0);
} 
return G__23614__delegate.call(this,x);};
G__23614.cljs$lang$maxFixedArity = 0;
G__23614.cljs$lang$applyTo = (function (arglist__23616){
var x = cljs.core.seq(arglist__23616);
return G__23614__delegate(x);
});
G__23614.cljs$core$IFn$_invoke$arity$variadic = G__23614__delegate;
return G__23614;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1441126768638