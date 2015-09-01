// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.ui');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_bootstrap.nav');
goog.require('goog.events');
goog.require('om.core');
goog.require('om_bootstrap.button');
cljsketch.ui.current_window_size = (function cljsketch$ui$current_window_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
});
cljsketch.ui.navbar_menu_dom = (function cljsketch$ui$navbar_menu_dom(navbar_menu,menu_channel){
var menu_dom = (function cljsketch$ui$navbar_menu_dom_$_menu_dom(menu){
return cljs.core.apply.call(null,om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),menu.call(null,new cljs.core.Keyword(null,"title","title",636505583))], null),cljs.core.map.call(null,menu_item_dom,menu.call(null,new cljs.core.Keyword(null,"items","items",1031954938))));
});
var menu_item_dom = (function cljsketch$ui$navbar_menu_dom_$_menu_item_dom(menu_item){
if(cljs.core.truth_(new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(menu_item))){
return om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"divider?","divider?",1882560157),true], null));
} else {
return om_bootstrap.button.menu_item.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,menu_item,new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (p1__28305_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,p1__28305_SHARP_);
})),menu_item.call(null,new cljs.core.Keyword(null,"label","label",1718410804)));
}
});
return cljs.core.map.call(null,menu_dom,navbar_menu);
});
cljsketch.ui.app_navbar = (function cljsketch$ui$app_navbar(app_state_cursor,component){
if(typeof cljsketch.ui.t28309 !== 'undefined'){
} else {

/**
* @constructor
*/
cljsketch.ui.t28309 = (function (app_navbar,app_state_cursor,component,meta28310){
this.app_navbar = app_navbar;
this.app_state_cursor = app_state_cursor;
this.component = component;
this.meta28310 = meta28310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljsketch.ui.t28309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28311,meta28310__$1){
var self__ = this;
var _28311__$1 = this;
return (new cljsketch.ui.t28309(self__.app_navbar,self__.app_state_cursor,self__.component,meta28310__$1));
});

cljsketch.ui.t28309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28311){
var self__ = this;
var _28311__$1 = this;
return self__.meta28310;
});

cljsketch.ui.t28309.prototype.om$core$IRenderState$ = true;

cljsketch.ui.t28309.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om_bootstrap.nav.navbar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brand","brand",557863343),React.DOM.a({"href": "#"},"CljSketch")], null),cljs.core.apply.call(null,om_bootstrap.nav.nav,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),true], null),cljsketch.ui.navbar_menu_dom.call(null,self__.app_state_cursor,new cljs.core.Keyword(null,"menu-channel","menu-channel",2107542618).cljs$core$IFn$_invoke$arity$1(state))));
});

cljsketch.ui.t28309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-navbar","app-navbar",1822804188,null),new cljs.core.Symbol(null,"app-state-cursor","app-state-cursor",206568023,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"meta28310","meta28310",1054178681,null)], null);
});

cljsketch.ui.t28309.cljs$lang$type = true;

cljsketch.ui.t28309.cljs$lang$ctorStr = "cljsketch.ui/t28309";

cljsketch.ui.t28309.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljsketch.ui/t28309");
});

cljsketch.ui.__GT_t28309 = (function cljsketch$ui$app_navbar_$___GT_t28309(app_navbar__$1,app_state_cursor__$1,component__$1,meta28310){
return (new cljsketch.ui.t28309(app_navbar__$1,app_state_cursor__$1,component__$1,meta28310));
});

}

return (new cljsketch.ui.t28309(cljsketch$ui$app_navbar,app_state_cursor,component,cljs.core.PersistentArrayMap.EMPTY));
});
cljsketch.ui.app_buttonbar = (function cljsketch$ui$app_buttonbar(app_state_cursor,component){
if(typeof cljsketch.ui.t28315 !== 'undefined'){
} else {

/**
* @constructor
*/
cljsketch.ui.t28315 = (function (app_buttonbar,app_state_cursor,component,meta28316){
this.app_buttonbar = app_buttonbar;
this.app_state_cursor = app_state_cursor;
this.component = component;
this.meta28316 = meta28316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljsketch.ui.t28315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28317,meta28316__$1){
var self__ = this;
var _28317__$1 = this;
return (new cljsketch.ui.t28315(self__.app_buttonbar,self__.app_state_cursor,self__.component,meta28316__$1));
});

cljsketch.ui.t28315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28317){
var self__ = this;
var _28317__$1 = this;
return self__.meta28316;
});

cljsketch.ui.t28315.prototype.om$core$IRenderState$ = true;

cljsketch.ui.t28315.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "button-bar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "pull-right"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,om_bootstrap.button.toolbar,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (mouse_tool){
return om_bootstrap.button.button_group.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (this$__$1){
return (function (e){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"menu-channel","menu-channel",2107542618).cljs$core$IFn$_invoke$arity$1(state),mouse_tool.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)));

return null;
});})(this$__$1))
,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,self__.app_state_cursor.call(null,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276)),mouse_tool.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)))], null),mouse_tool.call(null,new cljs.core.Keyword(null,"label","label",1718410804))));
});})(this$__$1))
,self__.app_state_cursor.call(null,new cljs.core.Keyword(null,"mouse-tools","mouse-tools",-714015019))))],null))))],null))));
});

cljsketch.ui.t28315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-buttonbar","app-buttonbar",1860691458,null),new cljs.core.Symbol(null,"app-state-cursor","app-state-cursor",206568023,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"meta28316","meta28316",1621568078,null)], null);
});

cljsketch.ui.t28315.cljs$lang$type = true;

cljsketch.ui.t28315.cljs$lang$ctorStr = "cljsketch.ui/t28315";

cljsketch.ui.t28315.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljsketch.ui/t28315");
});

cljsketch.ui.__GT_t28315 = (function cljsketch$ui$app_buttonbar_$___GT_t28315(app_buttonbar__$1,app_state_cursor__$1,component__$1,meta28316){
return (new cljsketch.ui.t28315(app_buttonbar__$1,app_state_cursor__$1,component__$1,meta28316));
});

}

return (new cljsketch.ui.t28315(cljsketch$ui$app_buttonbar,app_state_cursor,component,cljs.core.PersistentArrayMap.EMPTY));
});
cljsketch.ui.mouse_handler = (function cljsketch$ui$mouse_handler(event_type,channel){
return (function (event){
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),event_type,new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.offsetX,event.offsetY], null),new cljs.core.Keyword(null,"event","event",301435442),event], null));
});
});
cljsketch.ui.launch = (function cljsketch$ui$launch(app_state,id,run_app){
var app = (function cljsketch$ui$launch_$_app(app_state__$1,component){
if(typeof cljsketch.ui.t28346 !== 'undefined'){
} else {

/**
* @constructor
*/
cljsketch.ui.t28346 = (function (launch,app_state,id,run_app,app,component,meta28347){
this.launch = launch;
this.app_state = app_state;
this.id = id;
this.run_app = run_app;
this.app = app;
this.component = component;
this.meta28347 = meta28347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljsketch.ui.t28346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28348,meta28347__$1){
var self__ = this;
var _28348__$1 = this;
return (new cljsketch.ui.t28346(self__.launch,self__.app_state,self__.id,self__.run_app,self__.app,self__.component,meta28347__$1));
});

cljsketch.ui.t28346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28348){
var self__ = this;
var _28348__$1 = this;
return self__.meta28347;
});

cljsketch.ui.t28346.prototype.om$core$IInitState$ = true;

cljsketch.ui.t28346.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu-channel","menu-channel",2107542618),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouse-channel","mouse-channel",873870765),cljs.core.async.chan.call(null)], null);
});

cljsketch.ui.t28346.prototype.om$core$IRenderState$ = true;

cljsketch.ui.t28346.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "wrapper"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"ref": "navbar-wrapper"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,cljsketch.ui.app_navbar,self__.app_state.call(null,new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null))],null)))),om.core.build.call(null,cljsketch.ui.app_buttonbar,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null)),React.DOM.canvas({"ref": "canvas"})],null))));
});

cljsketch.ui.t28346.prototype.om$core$IDidMount$ = true;

cljsketch.ui.t28346.prototype.om$core$IDidMount$did_mount$arity$1 = (function (c){
var self__ = this;
var c__$1 = this;
var canvas = om.core.get_node.call(null,self__.component,"canvas");
var navbar_wrapper_height = om.core.get_node.call(null,self__.component,"navbar-wrapper").offsetHeight;
var vec__28349 = cljsketch.ui.current_window_size.call(null);
var w = cljs.core.nth.call(null,vec__28349,(0),null);
var h = cljs.core.nth.call(null,vec__28349,(1),null);
var mouse_channel = om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"mouse-channel","mouse-channel",873870765));
var menu_channel = om.core.get_state.call(null,self__.component,new cljs.core.Keyword(null,"menu-channel","menu-channel",2107542618));
goog.events.listen(canvas,goog.events.EventType.MOUSEENTER,cljsketch.ui.mouse_handler.call(null,new cljs.core.Keyword(null,"enter","enter",1792452624),mouse_channel));

goog.events.listen(canvas,goog.events.EventType.MOUSEMOVE,cljsketch.ui.mouse_handler.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),mouse_channel));

goog.events.listen(canvas,goog.events.EventType.MOUSEDOWN,cljsketch.ui.mouse_handler.call(null,new cljs.core.Keyword(null,"down","down",1565245570),mouse_channel));

goog.events.listen(canvas,goog.events.EventType.MOUSEUP,cljsketch.ui.mouse_handler.call(null,new cljs.core.Keyword(null,"up","up",-269712113),mouse_channel));

goog.events.listen(canvas,goog.events.EventType.MOUSELEAVE,cljsketch.ui.mouse_handler.call(null,new cljs.core.Keyword(null,"leave","leave",1022579443),mouse_channel));

canvas.width = w;

canvas.height = (h - navbar_wrapper_height);

return self__.run_app.call(null,canvas.getContext("2d"),menu_channel,mouse_channel);
});

cljsketch.ui.t28346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"launch","launch",-1489058944,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"run-app","run-app",1639322545,null),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"meta28347","meta28347",909749093,null)], null);
});

cljsketch.ui.t28346.cljs$lang$type = true;

cljsketch.ui.t28346.cljs$lang$ctorStr = "cljsketch.ui/t28346";

cljsketch.ui.t28346.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljsketch.ui/t28346");
});

cljsketch.ui.__GT_t28346 = (function cljsketch$ui$launch_$_app_$___GT_t28346(launch__$1,app_state__$2,id__$1,run_app__$1,app__$1,component__$1,meta28347){
return (new cljsketch.ui.t28346(launch__$1,app_state__$2,id__$1,run_app__$1,app__$1,component__$1,meta28347));
});

}

return (new cljsketch.ui.t28346(cljsketch$ui$launch,app_state__$1,id,run_app,cljsketch$ui$launch_$_app,component,cljs.core.PersistentArrayMap.EMPTY));
});
return om.core.root.call(null,app,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(id)], null));
});

//# sourceMappingURL=ui.js.map?rel=1441056908363