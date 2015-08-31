// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.v2');
goog.require('cljs.core');
cljsketch.v2.is_within_threshold_QMARK_ = (function cljsketch$v2$is_within_threshold_QMARK_(p__36669,p__36670,t){
var vec__36674 = p__36669;
var px = cljs.core.nth.call(null,vec__36674,(0),null);
var py = cljs.core.nth.call(null,vec__36674,(1),null);
var map__36675 = p__36670;
var map__36675__$1 = ((cljs.core.seq_QMARK_.call(null,map__36675))?cljs.core.apply.call(null,cljs.core.hash_map,map__36675):map__36675);
var coords = cljs.core.get.call(null,map__36675__$1,new cljs.core.Keyword(null,"coords","coords",-599429112));
var vec__36676 = coords;
var x = cljs.core.nth.call(null,vec__36676,(0),null);
var y = cljs.core.nth.call(null,vec__36676,(1),null);
return ((Math.abs((px - x)) <= t)) && ((Math.abs((py - y)) <= t));
});
cljsketch.v2.is_selected_QMARK_ = (function cljsketch$v2$is_selected_QMARK_(geom){
var and__16057__auto__ = cljs.core.contains_QMARK_.call(null,geom,new cljs.core.Keyword(null,"selected","selected",574897764));
if(and__16057__auto__){
return geom.call(null,new cljs.core.Keyword(null,"selected","selected",574897764));
} else {
return and__16057__auto__;
}
});
cljsketch.v2.selected = (function cljsketch$v2$selected(geom){
return cljs.core.assoc.call(null,geom,new cljs.core.Keyword(null,"selected","selected",574897764),true);
});
cljsketch.v2.unselected = (function cljsketch$v2$unselected(geom){
return cljs.core.dissoc.call(null,geom,new cljs.core.Keyword(null,"selected","selected",574897764));
});
cljsketch.v2.toggle_selected = (function cljsketch$v2$toggle_selected(geom){
if(cljs.core.truth_(cljsketch.v2.is_selected_QMARK_.call(null,geom))){
return cljsketch.v2.unselected.call(null,geom);
} else {
return cljsketch.v2.selected.call(null,geom);
}
});

//# sourceMappingURL=v2.js.map?rel=1440658292732