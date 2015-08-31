// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17109__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17109__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32305_32313 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32306_32314 = null;
var count__32307_32315 = (0);
var i__32308_32316 = (0);
while(true){
if((i__32308_32316 < count__32307_32315)){
var k_32317 = cljs.core._nth.call(null,chunk__32306_32314,i__32308_32316);
e.setAttribute(cljs.core.name.call(null,k_32317),cljs.core.get.call(null,attrs,k_32317));

var G__32318 = seq__32305_32313;
var G__32319 = chunk__32306_32314;
var G__32320 = count__32307_32315;
var G__32321 = (i__32308_32316 + (1));
seq__32305_32313 = G__32318;
chunk__32306_32314 = G__32319;
count__32307_32315 = G__32320;
i__32308_32316 = G__32321;
continue;
} else {
var temp__4425__auto___32322 = cljs.core.seq.call(null,seq__32305_32313);
if(temp__4425__auto___32322){
var seq__32305_32323__$1 = temp__4425__auto___32322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32305_32323__$1)){
var c__16854__auto___32324 = cljs.core.chunk_first.call(null,seq__32305_32323__$1);
var G__32325 = cljs.core.chunk_rest.call(null,seq__32305_32323__$1);
var G__32326 = c__16854__auto___32324;
var G__32327 = cljs.core.count.call(null,c__16854__auto___32324);
var G__32328 = (0);
seq__32305_32313 = G__32325;
chunk__32306_32314 = G__32326;
count__32307_32315 = G__32327;
i__32308_32316 = G__32328;
continue;
} else {
var k_32329 = cljs.core.first.call(null,seq__32305_32323__$1);
e.setAttribute(cljs.core.name.call(null,k_32329),cljs.core.get.call(null,attrs,k_32329));

var G__32330 = cljs.core.next.call(null,seq__32305_32323__$1);
var G__32331 = null;
var G__32332 = (0);
var G__32333 = (0);
seq__32305_32313 = G__32330;
chunk__32306_32314 = G__32331;
count__32307_32315 = G__32332;
i__32308_32316 = G__32333;
continue;
}
} else {
}
}
break;
}

var seq__32309_32334 = cljs.core.seq.call(null,children);
var chunk__32310_32335 = null;
var count__32311_32336 = (0);
var i__32312_32337 = (0);
while(true){
if((i__32312_32337 < count__32311_32336)){
var ch_32338 = cljs.core._nth.call(null,chunk__32310_32335,i__32312_32337);
e.appendChild(ch_32338);

var G__32339 = seq__32309_32334;
var G__32340 = chunk__32310_32335;
var G__32341 = count__32311_32336;
var G__32342 = (i__32312_32337 + (1));
seq__32309_32334 = G__32339;
chunk__32310_32335 = G__32340;
count__32311_32336 = G__32341;
i__32312_32337 = G__32342;
continue;
} else {
var temp__4425__auto___32343 = cljs.core.seq.call(null,seq__32309_32334);
if(temp__4425__auto___32343){
var seq__32309_32344__$1 = temp__4425__auto___32343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32309_32344__$1)){
var c__16854__auto___32345 = cljs.core.chunk_first.call(null,seq__32309_32344__$1);
var G__32346 = cljs.core.chunk_rest.call(null,seq__32309_32344__$1);
var G__32347 = c__16854__auto___32345;
var G__32348 = cljs.core.count.call(null,c__16854__auto___32345);
var G__32349 = (0);
seq__32309_32334 = G__32346;
chunk__32310_32335 = G__32347;
count__32311_32336 = G__32348;
i__32312_32337 = G__32349;
continue;
} else {
var ch_32350 = cljs.core.first.call(null,seq__32309_32344__$1);
e.appendChild(ch_32350);

var G__32351 = cljs.core.next.call(null,seq__32309_32344__$1);
var G__32352 = null;
var G__32353 = (0);
var G__32354 = (0);
seq__32309_32334 = G__32351;
chunk__32310_32335 = G__32352;
count__32311_32336 = G__32353;
i__32312_32337 = G__32354;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32302){
var G__32303 = cljs.core.first.call(null,seq32302);
var seq32302__$1 = cljs.core.next.call(null,seq32302);
var G__32304 = cljs.core.first.call(null,seq32302__$1);
var seq32302__$2 = cljs.core.next.call(null,seq32302__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32303,G__32304,seq32302__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__16964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16965__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16966__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16967__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16968__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__,hierarchy__16968__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__,hierarchy__16968__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16968__auto__,method_table__16964__auto__,prefer_table__16965__auto__,method_cache__16966__auto__,cached_hierarchy__16967__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_32355 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_32355.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_32355.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_32355.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32355);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32356,st_map){
var map__32360 = p__32356;
var map__32360__$1 = ((cljs.core.seq_QMARK_.call(null,map__32360))?cljs.core.apply.call(null,cljs.core.hash_map,map__32360):map__32360);
var container_el = cljs.core.get.call(null,map__32360__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32360,map__32360__$1,container_el){
return (function (p__32361){
var vec__32362 = p__32361;
var k = cljs.core.nth.call(null,vec__32362,(0),null);
var v = cljs.core.nth.call(null,vec__32362,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32360,map__32360__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__32363,dom_str){
var map__32365 = p__32363;
var map__32365__$1 = ((cljs.core.seq_QMARK_.call(null,map__32365))?cljs.core.apply.call(null,cljs.core.hash_map,map__32365):map__32365);
var c = map__32365__$1;
var content_area_el = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__32366){
var map__32368 = p__32366;
var map__32368__$1 = ((cljs.core.seq_QMARK_.call(null,map__32368))?cljs.core.apply.call(null,cljs.core.hash_map,map__32368):map__32368);
var content_area_el = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_32410){
var state_val_32411 = (state_32410[(1)]);
if((state_val_32411 === (1))){
var inst_32395 = (state_32410[(7)]);
var inst_32395__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32396 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32397 = ["10px","10px","100%","68px","1.0"];
var inst_32398 = cljs.core.PersistentHashMap.fromArrays(inst_32396,inst_32397);
var inst_32399 = cljs.core.merge.call(null,inst_32398,style);
var inst_32400 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32395__$1,inst_32399);
var inst_32401 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32395__$1,msg);
var inst_32402 = cljs.core.async.timeout.call(null,(300));
var state_32410__$1 = (function (){var statearr_32412 = state_32410;
(statearr_32412[(8)] = inst_32401);

(statearr_32412[(9)] = inst_32400);

(statearr_32412[(7)] = inst_32395__$1);

return statearr_32412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(2),inst_32402);
} else {
if((state_val_32411 === (2))){
var inst_32395 = (state_32410[(7)]);
var inst_32404 = (state_32410[(2)]);
var inst_32405 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32406 = ["auto"];
var inst_32407 = cljs.core.PersistentHashMap.fromArrays(inst_32405,inst_32406);
var inst_32408 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32395,inst_32407);
var state_32410__$1 = (function (){var statearr_32413 = state_32410;
(statearr_32413[(10)] = inst_32404);

return statearr_32413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32410__$1,inst_32408);
} else {
return null;
}
}
});})(c__19012__auto__))
;
return ((function (switch__18991__auto__,c__19012__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto____0 = (function (){
var statearr_32417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32417[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto__);

(statearr_32417[(1)] = (1));

return statearr_32417;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto____1 = (function (state_32410){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_32410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e32418){if((e32418 instanceof Object)){
var ex__18995__auto__ = e32418;
var statearr_32419_32421 = state_32410;
(statearr_32419_32421[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32422 = state_32410;
state_32410 = G__32422;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto__ = function(state_32410){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto____1.call(this,state_32410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_32420 = f__19013__auto__.call(null);
(statearr_32420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_32420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__))
);

return c__19012__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__32424 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__32424,(0),null);
var ln = cljs.core.nth.call(null,vec__32424,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__32427 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__32427,(0),null);
var file_line = cljs.core.nth.call(null,vec__32427,(1),null);
var file_column = cljs.core.nth.call(null,vec__32427,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32427,file_name,file_line,file_column){
return (function (p1__32425_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__32425_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__32427,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16069__auto__ = file_line;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
var and__16057__auto__ = cause;
if(cljs.core.truth_(and__16057__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16057__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__32429 = figwheel.client.heads_up.ensure_container.call(null);
var map__32429__$1 = ((cljs.core.seq_QMARK_.call(null,map__32429))?cljs.core.apply.call(null,cljs.core.hash_map,map__32429):map__32429);
var content_area_el = cljs.core.get.call(null,map__32429__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_32476){
var state_val_32477 = (state_32476[(1)]);
if((state_val_32477 === (1))){
var inst_32459 = (state_32476[(7)]);
var inst_32459__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32460 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32461 = ["0.0"];
var inst_32462 = cljs.core.PersistentHashMap.fromArrays(inst_32460,inst_32461);
var inst_32463 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32459__$1,inst_32462);
var inst_32464 = cljs.core.async.timeout.call(null,(300));
var state_32476__$1 = (function (){var statearr_32478 = state_32476;
(statearr_32478[(7)] = inst_32459__$1);

(statearr_32478[(8)] = inst_32463);

return statearr_32478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32476__$1,(2),inst_32464);
} else {
if((state_val_32477 === (2))){
var inst_32459 = (state_32476[(7)]);
var inst_32466 = (state_32476[(2)]);
var inst_32467 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32468 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32469 = cljs.core.PersistentHashMap.fromArrays(inst_32467,inst_32468);
var inst_32470 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32459,inst_32469);
var inst_32471 = cljs.core.async.timeout.call(null,(200));
var state_32476__$1 = (function (){var statearr_32479 = state_32476;
(statearr_32479[(9)] = inst_32466);

(statearr_32479[(10)] = inst_32470);

return statearr_32479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32476__$1,(3),inst_32471);
} else {
if((state_val_32477 === (3))){
var inst_32459 = (state_32476[(7)]);
var inst_32473 = (state_32476[(2)]);
var inst_32474 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32459,"");
var state_32476__$1 = (function (){var statearr_32480 = state_32476;
(statearr_32480[(11)] = inst_32473);

return statearr_32480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32476__$1,inst_32474);
} else {
return null;
}
}
}
});})(c__19012__auto__))
;
return ((function (switch__18991__auto__,c__19012__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18992__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18992__auto____0 = (function (){
var statearr_32484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32484[(0)] = figwheel$client$heads_up$clear_$_state_machine__18992__auto__);

(statearr_32484[(1)] = (1));

return statearr_32484;
});
var figwheel$client$heads_up$clear_$_state_machine__18992__auto____1 = (function (state_32476){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_32476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e32485){if((e32485 instanceof Object)){
var ex__18995__auto__ = e32485;
var statearr_32486_32488 = state_32476;
(statearr_32486_32488[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32489 = state_32476;
state_32476 = G__32489;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18992__auto__ = function(state_32476){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18992__auto____1.call(this,state_32476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18992__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18992__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_32487 = f__19013__auto__.call(null);
(statearr_32487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_32487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__))
);

return c__19012__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_32521){
var state_val_32522 = (state_32521[(1)]);
if((state_val_32522 === (1))){
var inst_32511 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32521__$1 = state_32521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32521__$1,(2),inst_32511);
} else {
if((state_val_32522 === (2))){
var inst_32513 = (state_32521[(2)]);
var inst_32514 = cljs.core.async.timeout.call(null,(400));
var state_32521__$1 = (function (){var statearr_32523 = state_32521;
(statearr_32523[(7)] = inst_32513);

return statearr_32523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32521__$1,(3),inst_32514);
} else {
if((state_val_32522 === (3))){
var inst_32516 = (state_32521[(2)]);
var inst_32517 = figwheel.client.heads_up.clear.call(null);
var state_32521__$1 = (function (){var statearr_32524 = state_32521;
(statearr_32524[(8)] = inst_32516);

return statearr_32524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32521__$1,(4),inst_32517);
} else {
if((state_val_32522 === (4))){
var inst_32519 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32521__$1,inst_32519);
} else {
return null;
}
}
}
}
});})(c__19012__auto__))
;
return ((function (switch__18991__auto__,c__19012__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto____0 = (function (){
var statearr_32528 = [null,null,null,null,null,null,null,null,null];
(statearr_32528[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto__);

(statearr_32528[(1)] = (1));

return statearr_32528;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto____1 = (function (state_32521){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_32521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e32529){if((e32529 instanceof Object)){
var ex__18995__auto__ = e32529;
var statearr_32530_32532 = state_32521;
(statearr_32530_32532[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32533 = state_32521;
state_32521 = G__32533;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto__ = function(state_32521){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto____1.call(this,state_32521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_32531 = f__19013__auto__.call(null);
(statearr_32531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_32531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__))
);

return c__19012__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440655378281