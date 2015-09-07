// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.ui_scratch');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('cljs.core.async');
goog.require('om_bootstrap.nav');
goog.require('goog.events');
goog.require('om.core');
goog.require('om_bootstrap.button');
cljsketch.ui_scratch.launch = (function cljsketch$ui_scratch$launch(app_state,id,run_app){
return om.core.root.call(null,(function (data,owner){
if(typeof cljsketch.ui_scratch.t24128 !== 'undefined'){
} else {

/**
* @constructor
*/
cljsketch.ui_scratch.t24128 = (function (launch,app_state,id,run_app,data,owner,meta24129){
this.launch = launch;
this.app_state = app_state;
this.id = id;
this.run_app = run_app;
this.data = data;
this.owner = owner;
this.meta24129 = meta24129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljsketch.ui_scratch.t24128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24130,meta24129__$1){
var self__ = this;
var _24130__$1 = this;
return (new cljsketch.ui_scratch.t24128(self__.launch,self__.app_state,self__.id,self__.run_app,self__.data,self__.owner,meta24129__$1));
});

cljsketch.ui_scratch.t24128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24130){
var self__ = this;
var _24130__$1 = this;
return self__.meta24129;
});

cljsketch.ui_scratch.t24128.prototype.om$core$IRender$ = true;

cljsketch.ui_scratch.t24128.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.nav.navbar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brand","brand",557863343),React.DOM.a({"href": "#"},"Brand")], null),om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),true], null),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"title","title",636505583),"Menu 1"], null),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(11)], null),"Hamburger"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(12)], null),"Fries")),om_bootstrap.button.button_group.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.button.call(null,cljs.core.PersistentArrayMap.EMPTY,"Foo"),om_bootstrap.button.button.call(null,cljs.core.PersistentArrayMap.EMPTY,"Bar")),om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"title","title",636505583),"Menu 2"], null),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(21)], null),"Tofu"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(22)], null),"Salad"))))))],null))))],null))));
});

cljsketch.ui_scratch.t24128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"launch","launch",-1489058944,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"run-app","run-app",1639322545,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta24129","meta24129",1460325584,null)], null);
});

cljsketch.ui_scratch.t24128.cljs$lang$type = true;

cljsketch.ui_scratch.t24128.cljs$lang$ctorStr = "cljsketch.ui-scratch/t24128";

cljsketch.ui_scratch.t24128.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljsketch.ui-scratch/t24128");
});

cljsketch.ui_scratch.__GT_t24128 = (function cljsketch$ui_scratch$launch_$___GT_t24128(launch__$1,app_state__$1,id__$1,run_app__$1,data__$1,owner__$1,meta24129){
return (new cljsketch.ui_scratch.t24128(launch__$1,app_state__$1,id__$1,run_app__$1,data__$1,owner__$1,meta24129));
});

}

return (new cljsketch.ui_scratch.t24128(cljsketch$ui_scratch$launch,app_state,id,run_app,data,owner,cljs.core.PersistentArrayMap.EMPTY));
}),app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=ui_scratch.js.map?rel=1441593183591