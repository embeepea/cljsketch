// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31541__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31542__i = 0, G__31542__a = new Array(arguments.length -  0);
while (G__31542__i < G__31542__a.length) {G__31542__a[G__31542__i] = arguments[G__31542__i + 0]; ++G__31542__i;}
  args = new cljs.core.IndexedSeq(G__31542__a,0);
} 
return G__31541__delegate.call(this,args);};
G__31541.cljs$lang$maxFixedArity = 0;
G__31541.cljs$lang$applyTo = (function (arglist__31543){
var args = cljs.core.seq(arglist__31543);
return G__31541__delegate(args);
});
G__31541.cljs$core$IFn$_invoke$arity$variadic = G__31541__delegate;
return G__31541;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31544){
var map__31546 = p__31544;
var map__31546__$1 = ((cljs.core.seq_QMARK_.call(null,map__31546))?cljs.core.apply.call(null,cljs.core.hash_map,map__31546):map__31546);
var message = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16069__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16057__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16057__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16057__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19012__auto___31675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___31675,ch){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___31675,ch){
return (function (state_31649){
var state_val_31650 = (state_31649[(1)]);
if((state_val_31650 === (7))){
var inst_31645 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
var statearr_31651_31676 = state_31649__$1;
(statearr_31651_31676[(2)] = inst_31645);

(statearr_31651_31676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (1))){
var state_31649__$1 = state_31649;
var statearr_31652_31677 = state_31649__$1;
(statearr_31652_31677[(2)] = null);

(statearr_31652_31677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (4))){
var inst_31613 = (state_31649[(7)]);
var inst_31613__$1 = (state_31649[(2)]);
var state_31649__$1 = (function (){var statearr_31653 = state_31649;
(statearr_31653[(7)] = inst_31613__$1);

return statearr_31653;
})();
if(cljs.core.truth_(inst_31613__$1)){
var statearr_31654_31678 = state_31649__$1;
(statearr_31654_31678[(1)] = (5));

} else {
var statearr_31655_31679 = state_31649__$1;
(statearr_31655_31679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (13))){
var state_31649__$1 = state_31649;
var statearr_31656_31680 = state_31649__$1;
(statearr_31656_31680[(2)] = null);

(statearr_31656_31680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (6))){
var state_31649__$1 = state_31649;
var statearr_31657_31681 = state_31649__$1;
(statearr_31657_31681[(2)] = null);

(statearr_31657_31681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (3))){
var inst_31647 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31649__$1,inst_31647);
} else {
if((state_val_31650 === (12))){
var inst_31620 = (state_31649[(8)]);
var inst_31633 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31620);
var inst_31634 = cljs.core.first.call(null,inst_31633);
var inst_31635 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31634);
var inst_31636 = console.warn("Figwheel: Not loading code with warnings - ",inst_31635);
var state_31649__$1 = state_31649;
var statearr_31658_31682 = state_31649__$1;
(statearr_31658_31682[(2)] = inst_31636);

(statearr_31658_31682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (2))){
var state_31649__$1 = state_31649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31649__$1,(4),ch);
} else {
if((state_val_31650 === (11))){
var inst_31629 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
var statearr_31659_31683 = state_31649__$1;
(statearr_31659_31683[(2)] = inst_31629);

(statearr_31659_31683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (9))){
var inst_31619 = (state_31649[(9)]);
var inst_31631 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31619,opts);
var state_31649__$1 = state_31649;
if(cljs.core.truth_(inst_31631)){
var statearr_31660_31684 = state_31649__$1;
(statearr_31660_31684[(1)] = (12));

} else {
var statearr_31661_31685 = state_31649__$1;
(statearr_31661_31685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (5))){
var inst_31619 = (state_31649[(9)]);
var inst_31613 = (state_31649[(7)]);
var inst_31615 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31616 = (new cljs.core.PersistentArrayMap(null,2,inst_31615,null));
var inst_31617 = (new cljs.core.PersistentHashSet(null,inst_31616,null));
var inst_31618 = figwheel.client.focus_msgs.call(null,inst_31617,inst_31613);
var inst_31619__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31618);
var inst_31620 = cljs.core.first.call(null,inst_31618);
var inst_31621 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31619__$1,opts);
var state_31649__$1 = (function (){var statearr_31662 = state_31649;
(statearr_31662[(9)] = inst_31619__$1);

(statearr_31662[(8)] = inst_31620);

return statearr_31662;
})();
if(cljs.core.truth_(inst_31621)){
var statearr_31663_31686 = state_31649__$1;
(statearr_31663_31686[(1)] = (8));

} else {
var statearr_31664_31687 = state_31649__$1;
(statearr_31664_31687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (14))){
var inst_31639 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
var statearr_31665_31688 = state_31649__$1;
(statearr_31665_31688[(2)] = inst_31639);

(statearr_31665_31688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (10))){
var inst_31641 = (state_31649[(2)]);
var state_31649__$1 = (function (){var statearr_31666 = state_31649;
(statearr_31666[(10)] = inst_31641);

return statearr_31666;
})();
var statearr_31667_31689 = state_31649__$1;
(statearr_31667_31689[(2)] = null);

(statearr_31667_31689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (8))){
var inst_31620 = (state_31649[(8)]);
var inst_31623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31624 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31620);
var inst_31625 = cljs.core.async.timeout.call(null,(1000));
var inst_31626 = [inst_31624,inst_31625];
var inst_31627 = (new cljs.core.PersistentVector(null,2,(5),inst_31623,inst_31626,null));
var state_31649__$1 = state_31649;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31649__$1,(11),inst_31627);
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
});})(c__19012__auto___31675,ch))
;
return ((function (switch__18991__auto__,c__19012__auto___31675,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18992__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18992__auto____0 = (function (){
var statearr_31671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31671[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18992__auto__);

(statearr_31671[(1)] = (1));

return statearr_31671;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18992__auto____1 = (function (state_31649){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_31649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e31672){if((e31672 instanceof Object)){
var ex__18995__auto__ = e31672;
var statearr_31673_31690 = state_31649;
(statearr_31673_31690[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31691 = state_31649;
state_31649 = G__31691;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18992__auto__ = function(state_31649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18992__auto____1.call(this,state_31649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18992__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18992__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___31675,ch))
})();
var state__19014__auto__ = (function (){var statearr_31674 = f__19013__auto__.call(null);
(statearr_31674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___31675);

return statearr_31674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___31675,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31692_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31692_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_31699 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31699){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31697 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31698 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31697,_STAR_print_newline_STAR_31698,base_path_31699){
return (function() { 
var G__31700__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31701__i = 0, G__31701__a = new Array(arguments.length -  0);
while (G__31701__i < G__31701__a.length) {G__31701__a[G__31701__i] = arguments[G__31701__i + 0]; ++G__31701__i;}
  args = new cljs.core.IndexedSeq(G__31701__a,0);
} 
return G__31700__delegate.call(this,args);};
G__31700.cljs$lang$maxFixedArity = 0;
G__31700.cljs$lang$applyTo = (function (arglist__31702){
var args = cljs.core.seq(arglist__31702);
return G__31700__delegate(args);
});
G__31700.cljs$core$IFn$_invoke$arity$variadic = G__31700__delegate;
return G__31700;
})()
;})(_STAR_print_fn_STAR_31697,_STAR_print_newline_STAR_31698,base_path_31699))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31698;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31697;
}}catch (e31696){if((e31696 instanceof Error)){
var e = e31696;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31699], null));
} else {
var e = e31696;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31699))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31703){
var map__31708 = p__31703;
var map__31708__$1 = ((cljs.core.seq_QMARK_.call(null,map__31708))?cljs.core.apply.call(null,cljs.core.hash_map,map__31708):map__31708);
var opts = map__31708__$1;
var build_id = cljs.core.get.call(null,map__31708__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31708,map__31708__$1,opts,build_id){
return (function (p__31709){
var vec__31710 = p__31709;
var map__31711 = cljs.core.nth.call(null,vec__31710,(0),null);
var map__31711__$1 = ((cljs.core.seq_QMARK_.call(null,map__31711))?cljs.core.apply.call(null,cljs.core.hash_map,map__31711):map__31711);
var msg = map__31711__$1;
var msg_name = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31710,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31710,map__31711,map__31711__$1,msg,msg_name,_,map__31708,map__31708__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31710,map__31711,map__31711__$1,msg,msg_name,_,map__31708,map__31708__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31708,map__31708__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31715){
var vec__31716 = p__31715;
var map__31717 = cljs.core.nth.call(null,vec__31716,(0),null);
var map__31717__$1 = ((cljs.core.seq_QMARK_.call(null,map__31717))?cljs.core.apply.call(null,cljs.core.hash_map,map__31717):map__31717);
var msg = map__31717__$1;
var msg_name = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31716,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31718){
var map__31726 = p__31718;
var map__31726__$1 = ((cljs.core.seq_QMARK_.call(null,map__31726))?cljs.core.apply.call(null,cljs.core.hash_map,map__31726):map__31726);
var on_compile_warning = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31726,map__31726__$1,on_compile_warning,on_compile_fail){
return (function (p__31727){
var vec__31728 = p__31727;
var map__31729 = cljs.core.nth.call(null,vec__31728,(0),null);
var map__31729__$1 = ((cljs.core.seq_QMARK_.call(null,map__31729))?cljs.core.apply.call(null,cljs.core.hash_map,map__31729):map__31729);
var msg = map__31729__$1;
var msg_name = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31728,(1));
var pred__31730 = cljs.core._EQ_;
var expr__31731 = msg_name;
if(cljs.core.truth_(pred__31730.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31731))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31730.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31731))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31726,map__31726__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__,msg_hist,msg_names,msg){
return (function (state_31932){
var state_val_31933 = (state_31932[(1)]);
if((state_val_31933 === (7))){
var inst_31866 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31934_31975 = state_31932__$1;
(statearr_31934_31975[(2)] = inst_31866);

(statearr_31934_31975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (20))){
var inst_31894 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31894)){
var statearr_31935_31976 = state_31932__$1;
(statearr_31935_31976[(1)] = (22));

} else {
var statearr_31936_31977 = state_31932__$1;
(statearr_31936_31977[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (27))){
var inst_31906 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31907 = figwheel.client.heads_up.display_warning.call(null,inst_31906);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(30),inst_31907);
} else {
if((state_val_31933 === (1))){
var inst_31854 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31854)){
var statearr_31937_31978 = state_31932__$1;
(statearr_31937_31978[(1)] = (2));

} else {
var statearr_31938_31979 = state_31932__$1;
(statearr_31938_31979[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (24))){
var inst_31922 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31939_31980 = state_31932__$1;
(statearr_31939_31980[(2)] = inst_31922);

(statearr_31939_31980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (4))){
var inst_31930 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31932__$1,inst_31930);
} else {
if((state_val_31933 === (15))){
var inst_31882 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31883 = figwheel.client.format_messages.call(null,inst_31882);
var inst_31884 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31885 = figwheel.client.heads_up.display_error.call(null,inst_31883,inst_31884);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(18),inst_31885);
} else {
if((state_val_31933 === (21))){
var inst_31924 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31940_31981 = state_31932__$1;
(statearr_31940_31981[(2)] = inst_31924);

(statearr_31940_31981[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (31))){
var inst_31913 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(34),inst_31913);
} else {
if((state_val_31933 === (32))){
var state_31932__$1 = state_31932;
var statearr_31941_31982 = state_31932__$1;
(statearr_31941_31982[(2)] = null);

(statearr_31941_31982[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (33))){
var inst_31918 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31942_31983 = state_31932__$1;
(statearr_31942_31983[(2)] = inst_31918);

(statearr_31942_31983[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (13))){
var inst_31872 = (state_31932[(2)]);
var inst_31873 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31874 = figwheel.client.format_messages.call(null,inst_31873);
var inst_31875 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31876 = figwheel.client.heads_up.display_error.call(null,inst_31874,inst_31875);
var state_31932__$1 = (function (){var statearr_31943 = state_31932;
(statearr_31943[(7)] = inst_31872);

return statearr_31943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(14),inst_31876);
} else {
if((state_val_31933 === (22))){
var inst_31896 = figwheel.client.heads_up.clear.call(null);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(25),inst_31896);
} else {
if((state_val_31933 === (29))){
var inst_31920 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31944_31984 = state_31932__$1;
(statearr_31944_31984[(2)] = inst_31920);

(statearr_31944_31984[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (6))){
var inst_31862 = figwheel.client.heads_up.clear.call(null);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(9),inst_31862);
} else {
if((state_val_31933 === (28))){
var inst_31911 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31911)){
var statearr_31945_31985 = state_31932__$1;
(statearr_31945_31985[(1)] = (31));

} else {
var statearr_31946_31986 = state_31932__$1;
(statearr_31946_31986[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (25))){
var inst_31898 = (state_31932[(2)]);
var inst_31899 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31900 = figwheel.client.heads_up.display_warning.call(null,inst_31899);
var state_31932__$1 = (function (){var statearr_31947 = state_31932;
(statearr_31947[(8)] = inst_31898);

return statearr_31947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(26),inst_31900);
} else {
if((state_val_31933 === (34))){
var inst_31915 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31948_31987 = state_31932__$1;
(statearr_31948_31987[(2)] = inst_31915);

(statearr_31948_31987[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (17))){
var inst_31926 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31949_31988 = state_31932__$1;
(statearr_31949_31988[(2)] = inst_31926);

(statearr_31949_31988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (3))){
var inst_31868 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31868)){
var statearr_31950_31989 = state_31932__$1;
(statearr_31950_31989[(1)] = (10));

} else {
var statearr_31951_31990 = state_31932__$1;
(statearr_31951_31990[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (12))){
var inst_31928 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31952_31991 = state_31932__$1;
(statearr_31952_31991[(2)] = inst_31928);

(statearr_31952_31991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (2))){
var inst_31856 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31856)){
var statearr_31953_31992 = state_31932__$1;
(statearr_31953_31992[(1)] = (5));

} else {
var statearr_31954_31993 = state_31932__$1;
(statearr_31954_31993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (23))){
var inst_31904 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31904)){
var statearr_31955_31994 = state_31932__$1;
(statearr_31955_31994[(1)] = (27));

} else {
var statearr_31956_31995 = state_31932__$1;
(statearr_31956_31995[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (19))){
var inst_31891 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31892 = figwheel.client.heads_up.append_message.call(null,inst_31891);
var state_31932__$1 = state_31932;
var statearr_31957_31996 = state_31932__$1;
(statearr_31957_31996[(2)] = inst_31892);

(statearr_31957_31996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (11))){
var inst_31880 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31880)){
var statearr_31958_31997 = state_31932__$1;
(statearr_31958_31997[(1)] = (15));

} else {
var statearr_31959_31998 = state_31932__$1;
(statearr_31959_31998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (9))){
var inst_31864 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31960_31999 = state_31932__$1;
(statearr_31960_31999[(2)] = inst_31864);

(statearr_31960_31999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (5))){
var inst_31858 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(8),inst_31858);
} else {
if((state_val_31933 === (14))){
var inst_31878 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31961_32000 = state_31932__$1;
(statearr_31961_32000[(2)] = inst_31878);

(statearr_31961_32000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (26))){
var inst_31902 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31962_32001 = state_31932__$1;
(statearr_31962_32001[(2)] = inst_31902);

(statearr_31962_32001[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (16))){
var inst_31889 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31889)){
var statearr_31963_32002 = state_31932__$1;
(statearr_31963_32002[(1)] = (19));

} else {
var statearr_31964_32003 = state_31932__$1;
(statearr_31964_32003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (30))){
var inst_31909 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31965_32004 = state_31932__$1;
(statearr_31965_32004[(2)] = inst_31909);

(statearr_31965_32004[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (10))){
var inst_31870 = figwheel.client.heads_up.clear.call(null);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31932__$1,(13),inst_31870);
} else {
if((state_val_31933 === (18))){
var inst_31887 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31966_32005 = state_31932__$1;
(statearr_31966_32005[(2)] = inst_31887);

(statearr_31966_32005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (8))){
var inst_31860 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31967_32006 = state_31932__$1;
(statearr_31967_32006[(2)] = inst_31860);

(statearr_31967_32006[(1)] = (7));


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
});})(c__19012__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18991__auto__,c__19012__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto____0 = (function (){
var statearr_31971 = [null,null,null,null,null,null,null,null,null];
(statearr_31971[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto__);

(statearr_31971[(1)] = (1));

return statearr_31971;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto____1 = (function (state_31932){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_31932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e31972){if((e31972 instanceof Object)){
var ex__18995__auto__ = e31972;
var statearr_31973_32007 = state_31932;
(statearr_31973_32007[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32008 = state_31932;
state_31932 = G__32008;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto__ = function(state_31932){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto____1.call(this,state_31932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__,msg_hist,msg_names,msg))
})();
var state__19014__auto__ = (function (){var statearr_31974 = f__19013__auto__.call(null);
(statearr_31974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_31974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__,msg_hist,msg_names,msg))
);

return c__19012__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19012__auto___32071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___32071,ch){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___32071,ch){
return (function (state_32054){
var state_val_32055 = (state_32054[(1)]);
if((state_val_32055 === (1))){
var state_32054__$1 = state_32054;
var statearr_32056_32072 = state_32054__$1;
(statearr_32056_32072[(2)] = null);

(statearr_32056_32072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (2))){
var state_32054__$1 = state_32054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32054__$1,(4),ch);
} else {
if((state_val_32055 === (3))){
var inst_32052 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32054__$1,inst_32052);
} else {
if((state_val_32055 === (4))){
var inst_32042 = (state_32054[(7)]);
var inst_32042__$1 = (state_32054[(2)]);
var state_32054__$1 = (function (){var statearr_32057 = state_32054;
(statearr_32057[(7)] = inst_32042__$1);

return statearr_32057;
})();
if(cljs.core.truth_(inst_32042__$1)){
var statearr_32058_32073 = state_32054__$1;
(statearr_32058_32073[(1)] = (5));

} else {
var statearr_32059_32074 = state_32054__$1;
(statearr_32059_32074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (5))){
var inst_32042 = (state_32054[(7)]);
var inst_32044 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32042);
var state_32054__$1 = state_32054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32054__$1,(8),inst_32044);
} else {
if((state_val_32055 === (6))){
var state_32054__$1 = state_32054;
var statearr_32060_32075 = state_32054__$1;
(statearr_32060_32075[(2)] = null);

(statearr_32060_32075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (7))){
var inst_32050 = (state_32054[(2)]);
var state_32054__$1 = state_32054;
var statearr_32061_32076 = state_32054__$1;
(statearr_32061_32076[(2)] = inst_32050);

(statearr_32061_32076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32055 === (8))){
var inst_32046 = (state_32054[(2)]);
var state_32054__$1 = (function (){var statearr_32062 = state_32054;
(statearr_32062[(8)] = inst_32046);

return statearr_32062;
})();
var statearr_32063_32077 = state_32054__$1;
(statearr_32063_32077[(2)] = null);

(statearr_32063_32077[(1)] = (2));


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
});})(c__19012__auto___32071,ch))
;
return ((function (switch__18991__auto__,c__19012__auto___32071,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18992__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18992__auto____0 = (function (){
var statearr_32067 = [null,null,null,null,null,null,null,null,null];
(statearr_32067[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18992__auto__);

(statearr_32067[(1)] = (1));

return statearr_32067;
});
var figwheel$client$heads_up_plugin_$_state_machine__18992__auto____1 = (function (state_32054){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_32054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e32068){if((e32068 instanceof Object)){
var ex__18995__auto__ = e32068;
var statearr_32069_32078 = state_32054;
(statearr_32069_32078[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32079 = state_32054;
state_32054 = G__32079;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18992__auto__ = function(state_32054){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18992__auto____1.call(this,state_32054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18992__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18992__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___32071,ch))
})();
var state__19014__auto__ = (function (){var statearr_32070 = f__19013__auto__.call(null);
(statearr_32070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___32071);

return statearr_32070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___32071,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_32100){
var state_val_32101 = (state_32100[(1)]);
if((state_val_32101 === (1))){
var inst_32095 = cljs.core.async.timeout.call(null,(3000));
var state_32100__$1 = state_32100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32100__$1,(2),inst_32095);
} else {
if((state_val_32101 === (2))){
var inst_32097 = (state_32100[(2)]);
var inst_32098 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32100__$1 = (function (){var statearr_32102 = state_32100;
(statearr_32102[(7)] = inst_32097);

return statearr_32102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32100__$1,inst_32098);
} else {
return null;
}
}
});})(c__19012__auto__))
;
return ((function (switch__18991__auto__,c__19012__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18992__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18992__auto____0 = (function (){
var statearr_32106 = [null,null,null,null,null,null,null,null];
(statearr_32106[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18992__auto__);

(statearr_32106[(1)] = (1));

return statearr_32106;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18992__auto____1 = (function (state_32100){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_32100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e32107){if((e32107 instanceof Object)){
var ex__18995__auto__ = e32107;
var statearr_32108_32110 = state_32100;
(statearr_32108_32110[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32111 = state_32100;
state_32100 = G__32111;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18992__auto__ = function(state_32100){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18992__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18992__auto____1.call(this,state_32100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18992__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18992__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_32109 = f__19013__auto__.call(null);
(statearr_32109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_32109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__))
);

return c__19012__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32112){
var map__32118 = p__32112;
var map__32118__$1 = ((cljs.core.seq_QMARK_.call(null,map__32118))?cljs.core.apply.call(null,cljs.core.hash_map,map__32118):map__32118);
var ed = map__32118__$1;
var formatted_exception = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32119_32123 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32120_32124 = null;
var count__32121_32125 = (0);
var i__32122_32126 = (0);
while(true){
if((i__32122_32126 < count__32121_32125)){
var msg_32127 = cljs.core._nth.call(null,chunk__32120_32124,i__32122_32126);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32127);

var G__32128 = seq__32119_32123;
var G__32129 = chunk__32120_32124;
var G__32130 = count__32121_32125;
var G__32131 = (i__32122_32126 + (1));
seq__32119_32123 = G__32128;
chunk__32120_32124 = G__32129;
count__32121_32125 = G__32130;
i__32122_32126 = G__32131;
continue;
} else {
var temp__4425__auto___32132 = cljs.core.seq.call(null,seq__32119_32123);
if(temp__4425__auto___32132){
var seq__32119_32133__$1 = temp__4425__auto___32132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32119_32133__$1)){
var c__16854__auto___32134 = cljs.core.chunk_first.call(null,seq__32119_32133__$1);
var G__32135 = cljs.core.chunk_rest.call(null,seq__32119_32133__$1);
var G__32136 = c__16854__auto___32134;
var G__32137 = cljs.core.count.call(null,c__16854__auto___32134);
var G__32138 = (0);
seq__32119_32123 = G__32135;
chunk__32120_32124 = G__32136;
count__32121_32125 = G__32137;
i__32122_32126 = G__32138;
continue;
} else {
var msg_32139 = cljs.core.first.call(null,seq__32119_32133__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32139);

var G__32140 = cljs.core.next.call(null,seq__32119_32133__$1);
var G__32141 = null;
var G__32142 = (0);
var G__32143 = (0);
seq__32119_32123 = G__32140;
chunk__32120_32124 = G__32141;
count__32121_32125 = G__32142;
i__32122_32126 = G__32143;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32144){
var map__32146 = p__32144;
var map__32146__$1 = ((cljs.core.seq_QMARK_.call(null,map__32146))?cljs.core.apply.call(null,cljs.core.hash_map,map__32146):map__32146);
var w = map__32146__$1;
var message = cljs.core.get.call(null,map__32146__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16057__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16057__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16057__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32153 = cljs.core.seq.call(null,plugins);
var chunk__32154 = null;
var count__32155 = (0);
var i__32156 = (0);
while(true){
if((i__32156 < count__32155)){
var vec__32157 = cljs.core._nth.call(null,chunk__32154,i__32156);
var k = cljs.core.nth.call(null,vec__32157,(0),null);
var plugin = cljs.core.nth.call(null,vec__32157,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32159 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32153,chunk__32154,count__32155,i__32156,pl_32159,vec__32157,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32159.call(null,msg_hist);
});})(seq__32153,chunk__32154,count__32155,i__32156,pl_32159,vec__32157,k,plugin))
);
} else {
}

var G__32160 = seq__32153;
var G__32161 = chunk__32154;
var G__32162 = count__32155;
var G__32163 = (i__32156 + (1));
seq__32153 = G__32160;
chunk__32154 = G__32161;
count__32155 = G__32162;
i__32156 = G__32163;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32153);
if(temp__4425__auto__){
var seq__32153__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32153__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__32153__$1);
var G__32164 = cljs.core.chunk_rest.call(null,seq__32153__$1);
var G__32165 = c__16854__auto__;
var G__32166 = cljs.core.count.call(null,c__16854__auto__);
var G__32167 = (0);
seq__32153 = G__32164;
chunk__32154 = G__32165;
count__32155 = G__32166;
i__32156 = G__32167;
continue;
} else {
var vec__32158 = cljs.core.first.call(null,seq__32153__$1);
var k = cljs.core.nth.call(null,vec__32158,(0),null);
var plugin = cljs.core.nth.call(null,vec__32158,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32168 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32153,chunk__32154,count__32155,i__32156,pl_32168,vec__32158,k,plugin,seq__32153__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32168.call(null,msg_hist);
});})(seq__32153,chunk__32154,count__32155,i__32156,pl_32168,vec__32158,k,plugin,seq__32153__$1,temp__4425__auto__))
);
} else {
}

var G__32169 = cljs.core.next.call(null,seq__32153__$1);
var G__32170 = null;
var G__32171 = (0);
var G__32172 = (0);
seq__32153 = G__32169;
chunk__32154 = G__32170;
count__32155 = G__32171;
i__32156 = G__32172;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__32174 = arguments.length;
switch (G__32174) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17109__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17109__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32177){
var map__32178 = p__32177;
var map__32178__$1 = ((cljs.core.seq_QMARK_.call(null,map__32178))?cljs.core.apply.call(null,cljs.core.hash_map,map__32178):map__32178);
var opts = map__32178__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32176){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32176));
});

//# sourceMappingURL=client.js.map?rel=1440655377557