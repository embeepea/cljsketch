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
return om_bootstrap.button.menu_item.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,menu_item,new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (p1__28422_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,p1__28422_SHARP_);
})),menu_item.call(null,new cljs.core.Keyword(null,"label","label",1718410804)));
}
});
return cljs.core.map.call(null,menu_dom,navbar_menu);
});
cljsketch.ui.pf = (function cljsketch$ui$pf(msg,x){
cljs.core.println.call(null,msg);

cljs.core.println.call(null,x);

return x;
});
cljsketch.ui.tool_disabled = (function cljsketch$ui$tool_disabled(key,app_state_cursor){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"enabled-tools","enabled-tools",1107625264).cljs$core$IFn$_invoke$arity$1(app_state_cursor).call(null,key))){
return "disabled";
} else {
return null;
}
});
cljsketch.ui.app_navbar = (function cljsketch$ui$app_navbar(app_state_cursor,component){
if(typeof cljsketch.ui.t28439 !== 'undefined'){
} else {

/**
* @constructor
*/
cljsketch.ui.t28439 = (function (app_navbar,app_state_cursor,component,meta28440){
this.app_navbar = app_navbar;
this.app_state_cursor = app_state_cursor;
this.component = component;
this.meta28440 = meta28440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljsketch.ui.t28439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28441,meta28440__$1){
var self__ = this;
var _28441__$1 = this;
return (new cljsketch.ui.t28439(self__.app_navbar,self__.app_state_cursor,self__.component,meta28440__$1));
});

cljsketch.ui.t28439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28441){
var self__ = this;
var _28441__$1 = this;
return self__.meta28440;
});

cljsketch.ui.t28439.prototype.om$core$IRenderState$ = true;

cljsketch.ui.t28439.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var menu_channel = new cljs.core.Keyword(null,"menu-channel","menu-channel",2107542618).cljs$core$IFn$_invoke$arity$1(state);
return om_bootstrap.nav.navbar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brand","brand",557863343),React.DOM.a({"href": "#"},"CljSketch")], null),om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),true], null),om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"File"], null),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28423_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28423_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"new-sketch","new-sketch",-1903213826)], null),"New Sketch"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28424_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28424_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"className","className",-1983287057),"disabled",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"open","open",-1763596448)], null),"Open...")),om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Edit"], null),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28425_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28425_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null),"Delete"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28426_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28426_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755)], null),"Clear Selection")),om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Construct"], null),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28427_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28427_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljsketch.ui.tool_disabled.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),self__.app_state_cursor),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"segment","segment",-964921196)], null),"Segment"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28428_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28428_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljsketch.ui.tool_disabled.call(null,new cljs.core.Keyword(null,"line","line",212345235),self__.app_state_cursor),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"line","line",212345235)], null),"Line"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28429_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28429_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljsketch.ui.tool_disabled.call(null,new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390),self__.app_state_cursor),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"parallel-line","parallel-line",-976840390)], null),"Parallel Line"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28430_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28430_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljsketch.ui.tool_disabled.call(null,new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920),self__.app_state_cursor),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"perpendicular-line","perpendicular-line",1264791920)], null),"Perpendicular Line"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28431_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28431_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljsketch.ui.tool_disabled.call(null,new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765),self__.app_state_cursor),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"intersection-point","intersection-point",1938204765)], null),"Intersection Point"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28432_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28432_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljsketch.ui.tool_disabled.call(null,new cljs.core.Keyword(null,"midpoint","midpoint",-36269525),self__.app_state_cursor),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"midpoint","midpoint",-36269525)], null),"Midpoint"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28433_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28433_SHARP_], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"className","className",-1983287057),cljsketch.ui.tool_disabled.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),self__.app_state_cursor),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"circle","circle",1903212362)], null),"Circle")),cljs.core.apply.call(null,om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.apply.call(null,React.DOM.span,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({},"Color"),React.DOM.div({"className": "color-swatch", "style": {"backgroundColor": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.app_state_cursor))}})],null))))], null),cljs.core.map.call(null,((function (menu_channel,this$__$1){
return (function (color){
return om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28434_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28434_SHARP_,color], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"color","color",1011675173)], null),React.DOM.div({"className": "color-swatch", "style": {"backgroundColor": om_tools.dom.format_opts.call(null,color)}}));
});})(menu_channel,this$__$1))
,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","#ffffff","#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"], null))),cljs.core.apply.call(null,om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.apply.call(null,React.DOM.span,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({},"Background"),React.DOM.div({"className": "color-swatch", "style": {"backgroundColor": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(self__.app_state_cursor))}})],null))))], null),cljs.core.map.call(null,((function (menu_channel,this$__$1){
return (function (color){
return om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (menu_channel,this$__$1){
return (function (p1__28435_SHARP_){
return cljs.core.async.put_BANG_.call(null,menu_channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28435_SHARP_,color], null));
});})(menu_channel,this$__$1))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"background-color","background-color",570434026)], null),React.DOM.div({"className": "color-swatch", "style": {"backgroundColor": om_tools.dom.format_opts.call(null,color)}}));
});})(menu_channel,this$__$1))
,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","#ffffff","#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"], null)))));
});

cljsketch.ui.t28439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-navbar","app-navbar",1822804188,null),new cljs.core.Symbol(null,"app-state-cursor","app-state-cursor",206568023,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"meta28440","meta28440",-2065156271,null)], null);
});

cljsketch.ui.t28439.cljs$lang$type = true;

cljsketch.ui.t28439.cljs$lang$ctorStr = "cljsketch.ui/t28439";

cljsketch.ui.t28439.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljsketch.ui/t28439");
});

cljsketch.ui.__GT_t28439 = (function cljsketch$ui$app_navbar_$___GT_t28439(app_navbar__$1,app_state_cursor__$1,component__$1,meta28440){
return (new cljsketch.ui.t28439(app_navbar__$1,app_state_cursor__$1,component__$1,meta28440));
});

}

return (new cljsketch.ui.t28439(cljsketch$ui$app_navbar,app_state_cursor,component,cljs.core.PersistentArrayMap.EMPTY));
});
cljsketch.ui.app_buttonbar = (function cljsketch$ui$app_buttonbar(app_state_cursor,component){
if(typeof cljsketch.ui.t28445 !== 'undefined'){
} else {

/**
* @constructor
*/
cljsketch.ui.t28445 = (function (app_buttonbar,app_state_cursor,component,meta28446){
this.app_buttonbar = app_buttonbar;
this.app_state_cursor = app_state_cursor;
this.component = component;
this.meta28446 = meta28446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljsketch.ui.t28445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28447,meta28446__$1){
var self__ = this;
var _28447__$1 = this;
return (new cljsketch.ui.t28445(self__.app_buttonbar,self__.app_state_cursor,self__.component,meta28446__$1));
});

cljsketch.ui.t28445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28447){
var self__ = this;
var _28447__$1 = this;
return self__.meta28446;
});

cljsketch.ui.t28445.prototype.om$core$IRenderState$ = true;

cljsketch.ui.t28445.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "button-bar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "pull-right"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,om_bootstrap.button.toolbar,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (mouse_tool){
return om_bootstrap.button.button_group.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (this$__$1){
return (function (e){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"menu-channel","menu-channel",2107542618).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mouse_tool.call(null,new cljs.core.Keyword(null,"key","key",-1516042587))], null));

return null;
});})(this$__$1))
,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,self__.app_state_cursor.call(null,new cljs.core.Keyword(null,"mouse-tool","mouse-tool",-647630276)),mouse_tool.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)))], null),mouse_tool.call(null,new cljs.core.Keyword(null,"label","label",1718410804))));
});})(this$__$1))
,self__.app_state_cursor.call(null,new cljs.core.Keyword(null,"mouse-tools","mouse-tools",-714015019))))],null))))],null))));
});

cljsketch.ui.t28445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-buttonbar","app-buttonbar",1860691458,null),new cljs.core.Symbol(null,"app-state-cursor","app-state-cursor",206568023,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"meta28446","meta28446",-1700043568,null)], null);
});

cljsketch.ui.t28445.cljs$lang$type = true;

cljsketch.ui.t28445.cljs$lang$ctorStr = "cljsketch.ui/t28445";

cljsketch.ui.t28445.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljsketch.ui/t28445");
});

cljsketch.ui.__GT_t28445 = (function cljsketch$ui$app_buttonbar_$___GT_t28445(app_buttonbar__$1,app_state_cursor__$1,component__$1,meta28446){
return (new cljsketch.ui.t28445(app_buttonbar__$1,app_state_cursor__$1,component__$1,meta28446));
});

}

return (new cljsketch.ui.t28445(cljsketch$ui$app_buttonbar,app_state_cursor,component,cljs.core.PersistentArrayMap.EMPTY));
});
cljsketch.ui.mouse_handler = (function cljsketch$ui$mouse_handler(event_type,channel){
return (function (event){
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),event_type,new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.offsetX,event.offsetY], null),new cljs.core.Keyword(null,"event","event",301435442),event], null));
});
});
cljsketch.ui.launch = (function cljsketch$ui$launch(app_state,id,run_app){
var app = (function cljsketch$ui$launch_$_app(app_state__$1,component){
if(typeof cljsketch.ui.t28476 !== 'undefined'){
} else {

/**
* @constructor
*/
cljsketch.ui.t28476 = (function (launch,app_state,id,run_app,app,component,meta28477){
this.launch = launch;
this.app_state = app_state;
this.id = id;
this.run_app = run_app;
this.app = app;
this.component = component;
this.meta28477 = meta28477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljsketch.ui.t28476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28478,meta28477__$1){
var self__ = this;
var _28478__$1 = this;
return (new cljsketch.ui.t28476(self__.launch,self__.app_state,self__.id,self__.run_app,self__.app,self__.component,meta28477__$1));
});

cljsketch.ui.t28476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28478){
var self__ = this;
var _28478__$1 = this;
return self__.meta28477;
});

cljsketch.ui.t28476.prototype.om$core$IInitState$ = true;

cljsketch.ui.t28476.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu-channel","menu-channel",2107542618),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mouse-channel","mouse-channel",873870765),cljs.core.async.chan.call(null)], null);
});

cljsketch.ui.t28476.prototype.om$core$IRenderState$ = true;

cljsketch.ui.t28476.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "wrapper"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"ref": "navbar-wrapper"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,cljsketch.ui.app_navbar,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null))],null)))),om.core.build.call(null,cljsketch.ui.app_buttonbar,self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null)),React.DOM.canvas({"ref": "canvas"})],null))));
});

cljsketch.ui.t28476.prototype.om$core$IDidMount$ = true;

cljsketch.ui.t28476.prototype.om$core$IDidMount$did_mount$arity$1 = (function (c){
var self__ = this;
var c__$1 = this;
var canvas = om.core.get_node.call(null,self__.component,"canvas");
var navbar_wrapper_height = om.core.get_node.call(null,self__.component,"navbar-wrapper").offsetHeight;
var vec__28479 = cljsketch.ui.current_window_size.call(null);
var w = cljs.core.nth.call(null,vec__28479,(0),null);
var h = cljs.core.nth.call(null,vec__28479,(1),null);
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

cljsketch.ui.t28476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"launch","launch",-1489058944,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"run-app","run-app",1639322545,null),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"meta28477","meta28477",-1272062400,null)], null);
});

cljsketch.ui.t28476.cljs$lang$type = true;

cljsketch.ui.t28476.cljs$lang$ctorStr = "cljsketch.ui/t28476";

cljsketch.ui.t28476.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljsketch.ui/t28476");
});

cljsketch.ui.__GT_t28476 = (function cljsketch$ui$launch_$_app_$___GT_t28476(launch__$1,app_state__$2,id__$1,run_app__$1,app__$1,component__$1,meta28477){
return (new cljsketch.ui.t28476(launch__$1,app_state__$2,id__$1,run_app__$1,app__$1,component__$1,meta28477));
});

}

return (new cljsketch.ui.t28476(cljsketch$ui$launch,app_state__$1,id,run_app,cljsketch$ui$launch_$_app,component,cljs.core.PersistentArrayMap.EMPTY));
});
return om.core.root.call(null,app,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(id)], null));
});

//# sourceMappingURL=ui.js.map?rel=1441599545163