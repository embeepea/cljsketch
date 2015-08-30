// Compiled by ClojureScript 0.0-3297 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___27125 = schema.utils.use_fn_validation;
var output_schema27118_27126 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema27119_27127 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);
var input_checker27120_27128 = schema.core.checker.call(null,input_schema27119_27127);
var output_checker27121_27129 = schema.core.checker.call(null,output_schema27118_27126);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 * Returns: (s/=> s/Any)
 * 
 * Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___27125,output_schema27118_27126,input_schema27119_27127,input_checker27120_27128,output_checker27121_27129){
return (function om_bootstrap$mixins$event_listener(G__27122,G__27123,G__27124){
var validate__23140__auto__ = ufv___27125.get_cell();
if(cljs.core.truth_(validate__23140__auto__)){
var args__23141__auto___27130 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27122,G__27123,G__27124], null);
var temp__4425__auto___27131 = input_checker27120_27128.call(null,args__23141__auto___27130);
if(cljs.core.truth_(temp__4425__auto___27131)){
var error__23142__auto___27132 = temp__4425__auto___27131;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__23142__auto___27132)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27119_27127,new cljs.core.Keyword(null,"value","value",305978217),args__23141__auto___27130,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27132], null));
} else {
}
} else {
}

var o__23143__auto__ = (function (){var target = G__27122;
var event_type = G__27123;
var callback = G__27124;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__23140__auto__,ufv___27125,output_schema27118_27126,input_schema27119_27127,input_checker27120_27128,output_checker27121_27129){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__23140__auto__,ufv___27125,output_schema27118_27126,input_schema27119_27127,input_checker27120_27128,output_checker27121_27129))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__23140__auto__,ufv___27125,output_schema27118_27126,input_schema27119_27127,input_checker27120_27128,output_checker27121_27129){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__23140__auto__,ufv___27125,output_schema27118_27126,input_schema27119_27127,input_checker27120_27128,output_checker27121_27129))
} else {
return ((function (validate__23140__auto__,ufv___27125,output_schema27118_27126,input_schema27119_27127,input_checker27120_27128,output_checker27121_27129){
return (function (){
return null;
});
;})(validate__23140__auto__,ufv___27125,output_schema27118_27126,input_schema27119_27127,input_checker27120_27128,output_checker27121_27129))

}
}
break;
}
})();
if(cljs.core.truth_(validate__23140__auto__)){
var temp__4425__auto___27133 = output_checker27121_27129.call(null,o__23143__auto__);
if(cljs.core.truth_(temp__4425__auto___27133)){
var error__23142__auto___27134 = temp__4425__auto___27133;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__23142__auto___27134)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27118_27126,new cljs.core.Keyword(null,"value","value",305978217),o__23143__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23142__auto___27134], null));
} else {
}
} else {
}

return o__23143__auto__;
});})(ufv___27125,output_schema27118_27126,input_schema27119_27127,input_checker27120_27128,output_checker27121_27129))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema27118_27126,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27119_27127], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this27135 = this;
return ((function (this27135){
return (function (owner){
return owner.listeners = [];
});})(this27135))
.call(null,this27135);
}), "componentWillUnmount": (function (){
var this27136 = this;
return ((function (this27136){
return (function (owner){
var seq__27141 = cljs.core.seq.call(null,owner.listeners);
var chunk__27142 = null;
var count__27143 = (0);
var i__27144 = (0);
while(true){
if((i__27144 < count__27143)){
var l = cljs.core._nth.call(null,chunk__27142,i__27144);
l.call(null);

var G__27145 = seq__27141;
var G__27146 = chunk__27142;
var G__27147 = count__27143;
var G__27148 = (i__27144 + (1));
seq__27141 = G__27145;
chunk__27142 = G__27146;
count__27143 = G__27147;
i__27144 = G__27148;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27141);
if(temp__4425__auto__){
var seq__27141__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27141__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__27141__$1);
var G__27149 = cljs.core.chunk_rest.call(null,seq__27141__$1);
var G__27150 = c__16854__auto__;
var G__27151 = cljs.core.count.call(null,c__16854__auto__);
var G__27152 = (0);
seq__27141 = G__27149;
chunk__27142 = G__27150;
count__27143 = G__27151;
i__27144 = G__27152;
continue;
} else {
var l = cljs.core.first.call(null,seq__27141__$1);
l.call(null);

var G__27153 = cljs.core.next.call(null,seq__27141__$1);
var G__27154 = null;
var G__27155 = (0);
var G__27156 = (0);
seq__27141 = G__27153;
chunk__27142 = G__27154;
count__27143 = G__27155;
i__27144 = G__27156;
continue;
}
} else {
return null;
}
}
break;
}
});})(this27136))
.call(null,this27136);
}), "set_listener": (function (target27138,event_type27139,callback27140){
var this27137 = this;
return ((function (this27137){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this27137))
.call(null,this27137,target27138,event_type27139,callback27140);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this27158 = this;
return ((function (this27158){
return (function (owner){
return owner.timeouts = [];
});})(this27158))
.call(null,this27158);
}), "componentWillUnmount": (function (){
var this27159 = this;
return ((function (this27159){
return (function (owner){
return owner.timeouts.map(((function (this27159){
return (function (p1__27157_SHARP_){
return clearTimeout(p1__27157_SHARP_);
});})(this27159))
);
});})(this27159))
.call(null,this27159);
}), "set_timeout": (function (f27161,timeout27162){
var this27160 = this;
return ((function (this27160){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this27160))
.call(null,this27160,f27161,timeout27162);
})};
/**
 * Accepts two DOM elements; returns true if the supplied node is
 * nested inside the supplied root, false otherwise.
 */
om_bootstrap.mixins.in_root_QMARK_ = (function om_bootstrap$mixins$in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__27163 = node__$1.parentNode;
node__$1 = G__27163;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
 * For dropdowns, binds a handler for that sets the dropdown-mixin's
 * `:open?` state to false if the user clicks outside the owning
 * component OR hits the escape key.
 */
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(cljs.core.truth_(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
 * If they're present on the owning object, removes the listeners
 * registered by the dropdown mixin.
 */
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$unbind_root_close_handlers_BANG_(owner){
var temp__4425__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4425__auto__)){
var listeners = temp__4425__auto__;
var seq__27168_27172 = cljs.core.seq.call(null,listeners);
var chunk__27169_27173 = null;
var count__27170_27174 = (0);
var i__27171_27175 = (0);
while(true){
if((i__27171_27175 < count__27170_27174)){
var l_27176 = cljs.core._nth.call(null,chunk__27169_27173,i__27171_27175);
l_27176.call(null);

var G__27177 = seq__27168_27172;
var G__27178 = chunk__27169_27173;
var G__27179 = count__27170_27174;
var G__27180 = (i__27171_27175 + (1));
seq__27168_27172 = G__27177;
chunk__27169_27173 = G__27178;
count__27170_27174 = G__27179;
i__27171_27175 = G__27180;
continue;
} else {
var temp__4425__auto___27181__$1 = cljs.core.seq.call(null,seq__27168_27172);
if(temp__4425__auto___27181__$1){
var seq__27168_27182__$1 = temp__4425__auto___27181__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27168_27182__$1)){
var c__16854__auto___27183 = cljs.core.chunk_first.call(null,seq__27168_27182__$1);
var G__27184 = cljs.core.chunk_rest.call(null,seq__27168_27182__$1);
var G__27185 = c__16854__auto___27183;
var G__27186 = cljs.core.count.call(null,c__16854__auto___27183);
var G__27187 = (0);
seq__27168_27172 = G__27184;
chunk__27169_27173 = G__27185;
count__27170_27174 = G__27186;
i__27171_27175 = G__27187;
continue;
} else {
var l_27188 = cljs.core.first.call(null,seq__27168_27182__$1);
l_27188.call(null);

var G__27189 = cljs.core.next.call(null,seq__27168_27182__$1);
var G__27190 = null;
var G__27191 = (0);
var G__27192 = (0);
seq__27168_27172 = G__27189;
chunk__27169_27173 = G__27190;
count__27170_27174 = G__27191;
i__27171_27175 = G__27192;
continue;
}
} else {
}
}
break;
}

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
 * Mixin that manages a single piece of state - :open?. If a user
 * clicks outside the component's owning dom element OR hits the escape
 * key, the state will jump back to false.
 * 
 * Down the road this may need to register a callback when the state
 * changes.
 */
om_bootstrap.mixins.dropdown_mixin = {"getInitialState": (function (){
var this27193 = this;
return ((function (this27193){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this27193))
.call(null,this27193);
}), "componentWillUnmount": (function (){
var this27194 = this;
return ((function (this27194){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this27194))
.call(null,this27194);
}), "isDropdownOpen": (function (){
var this27195 = this;
return ((function (this27195){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this27195))
.call(null,this27195);
}), "setDropdownState": (function (open_QMARK_27197){
var this27196 = this;
return ((function (this27196){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this27196))
.call(null,this27196,open_QMARK_27197);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this27198 = this;
return ((function (this27198){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this27198))
.call(null,this27198);
}), "isPanelCollapsed": (function (){
var this27199 = this;
return ((function (this27199){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this27199))
.call(null,this27199);
}), "toggleCollapsed": (function (){
var this27200 = this;
return ((function (this27200){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this27200))
.call(null,this27200);
})};

//# sourceMappingURL=mixins.js.map?rel=1440655368913