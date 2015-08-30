// Compiled by ClojureScript 0.0-3297 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 * 
 * WARNING As of Clojure 1.7 this function exists in clojure.core and
 * will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(){
var G__27547 = arguments.length;
switch (G__27547) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__17120__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq27540){
var G__27541 = cljs.core.first.call(null,seq27540);
var seq27540__$1 = cljs.core.next.call(null,seq27540);
var G__27542 = cljs.core.first.call(null,seq27540__$1);
var seq27540__$2 = cljs.core.next.call(null,seq27540__$1);
var G__27543 = cljs.core.first.call(null,seq27540__$2);
var seq27540__$3 = cljs.core.next.call(null,seq27540__$2);
var G__27544 = cljs.core.first.call(null,seq27540__$3);
var seq27540__$4 = cljs.core.next.call(null,seq27540__$3);
var G__27545 = cljs.core.first.call(null,seq27540__$4);
var seq27540__$5 = cljs.core.next.call(null,seq27540__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__27541,G__27542,G__27543,G__27544,G__27545,seq27540__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__24600__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27557_27563 = cljs.core.seq.call(null,m);
var chunk__27558_27564 = null;
var count__27559_27565 = (0);
var i__27560_27566 = (0);
while(true){
if((i__27560_27566 < count__27559_27565)){
var vec__27561_27567 = cljs.core._nth.call(null,chunk__27558_27564,i__27560_27566);
var k_27568 = cljs.core.nth.call(null,vec__27561_27567,(0),null);
var v_27569 = cljs.core.nth.call(null,vec__27561_27567,(1),null);
var m27556_27570 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27556_27570,k_27568,f.call(null,v_27569)));

var G__27571 = seq__27557_27563;
var G__27572 = chunk__27558_27564;
var G__27573 = count__27559_27565;
var G__27574 = (i__27560_27566 + (1));
seq__27557_27563 = G__27571;
chunk__27558_27564 = G__27572;
count__27559_27565 = G__27573;
i__27560_27566 = G__27574;
continue;
} else {
var temp__4425__auto___27575 = cljs.core.seq.call(null,seq__27557_27563);
if(temp__4425__auto___27575){
var seq__27557_27576__$1 = temp__4425__auto___27575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27557_27576__$1)){
var c__16854__auto___27577 = cljs.core.chunk_first.call(null,seq__27557_27576__$1);
var G__27578 = cljs.core.chunk_rest.call(null,seq__27557_27576__$1);
var G__27579 = c__16854__auto___27577;
var G__27580 = cljs.core.count.call(null,c__16854__auto___27577);
var G__27581 = (0);
seq__27557_27563 = G__27578;
chunk__27558_27564 = G__27579;
count__27559_27565 = G__27580;
i__27560_27566 = G__27581;
continue;
} else {
var vec__27562_27582 = cljs.core.first.call(null,seq__27557_27576__$1);
var k_27583 = cljs.core.nth.call(null,vec__27562_27582,(0),null);
var v_27584 = cljs.core.nth.call(null,vec__27562_27582,(1),null);
var m27556_27585 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27556_27585,k_27583,f.call(null,v_27584)));

var G__27586 = cljs.core.next.call(null,seq__27557_27576__$1);
var G__27587 = null;
var G__27588 = (0);
var G__27589 = (0);
seq__27557_27563 = G__27586;
chunk__27558_27564 = G__27587;
count__27559_27565 = G__27588;
i__27560_27566 = G__27589;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__24600__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__24600__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27598_27604 = cljs.core.seq.call(null,m);
var chunk__27599_27605 = null;
var count__27600_27606 = (0);
var i__27601_27607 = (0);
while(true){
if((i__27601_27607 < count__27600_27606)){
var vec__27602_27608 = cljs.core._nth.call(null,chunk__27599_27605,i__27601_27607);
var k_27609 = cljs.core.nth.call(null,vec__27602_27608,(0),null);
var v_27610 = cljs.core.nth.call(null,vec__27602_27608,(1),null);
var m27597_27611 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27597_27611,f.call(null,k_27609),v_27610));

var G__27612 = seq__27598_27604;
var G__27613 = chunk__27599_27605;
var G__27614 = count__27600_27606;
var G__27615 = (i__27601_27607 + (1));
seq__27598_27604 = G__27612;
chunk__27599_27605 = G__27613;
count__27600_27606 = G__27614;
i__27601_27607 = G__27615;
continue;
} else {
var temp__4425__auto___27616 = cljs.core.seq.call(null,seq__27598_27604);
if(temp__4425__auto___27616){
var seq__27598_27617__$1 = temp__4425__auto___27616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27598_27617__$1)){
var c__16854__auto___27618 = cljs.core.chunk_first.call(null,seq__27598_27617__$1);
var G__27619 = cljs.core.chunk_rest.call(null,seq__27598_27617__$1);
var G__27620 = c__16854__auto___27618;
var G__27621 = cljs.core.count.call(null,c__16854__auto___27618);
var G__27622 = (0);
seq__27598_27604 = G__27619;
chunk__27599_27605 = G__27620;
count__27600_27606 = G__27621;
i__27601_27607 = G__27622;
continue;
} else {
var vec__27603_27623 = cljs.core.first.call(null,seq__27598_27617__$1);
var k_27624 = cljs.core.nth.call(null,vec__27603_27623,(0),null);
var v_27625 = cljs.core.nth.call(null,vec__27603_27623,(1),null);
var m27597_27626 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27597_27626,f.call(null,k_27624),v_27625));

var G__27627 = cljs.core.next.call(null,seq__27598_27617__$1);
var G__27628 = null;
var G__27629 = (0);
var G__27630 = (0);
seq__27598_27604 = G__27627;
chunk__27599_27605 = G__27628;
count__27600_27606 = G__27629;
i__27601_27607 = G__27630;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__24600__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__24600__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27637_27641 = cljs.core.seq.call(null,ks);
var chunk__27638_27642 = null;
var count__27639_27643 = (0);
var i__27640_27644 = (0);
while(true){
if((i__27640_27644 < count__27639_27643)){
var k_27645 = cljs.core._nth.call(null,chunk__27638_27642,i__27640_27644);
var m27636_27646 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27636_27646,k_27645,f.call(null,k_27645)));

var G__27647 = seq__27637_27641;
var G__27648 = chunk__27638_27642;
var G__27649 = count__27639_27643;
var G__27650 = (i__27640_27644 + (1));
seq__27637_27641 = G__27647;
chunk__27638_27642 = G__27648;
count__27639_27643 = G__27649;
i__27640_27644 = G__27650;
continue;
} else {
var temp__4425__auto___27651 = cljs.core.seq.call(null,seq__27637_27641);
if(temp__4425__auto___27651){
var seq__27637_27652__$1 = temp__4425__auto___27651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27637_27652__$1)){
var c__16854__auto___27653 = cljs.core.chunk_first.call(null,seq__27637_27652__$1);
var G__27654 = cljs.core.chunk_rest.call(null,seq__27637_27652__$1);
var G__27655 = c__16854__auto___27653;
var G__27656 = cljs.core.count.call(null,c__16854__auto___27653);
var G__27657 = (0);
seq__27637_27641 = G__27654;
chunk__27638_27642 = G__27655;
count__27639_27643 = G__27656;
i__27640_27644 = G__27657;
continue;
} else {
var k_27658 = cljs.core.first.call(null,seq__27637_27652__$1);
var m27636_27659 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27636_27659,k_27658,f.call(null,k_27658)));

var G__27660 = cljs.core.next.call(null,seq__27637_27652__$1);
var G__27661 = null;
var G__27662 = (0);
var G__27663 = (0);
seq__27637_27641 = G__27660;
chunk__27638_27642 = G__27661;
count__27639_27643 = G__27662;
i__27640_27644 = G__27663;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__24600__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__24600__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27670_27674 = cljs.core.seq.call(null,vs);
var chunk__27671_27675 = null;
var count__27672_27676 = (0);
var i__27673_27677 = (0);
while(true){
if((i__27673_27677 < count__27672_27676)){
var v_27678 = cljs.core._nth.call(null,chunk__27671_27675,i__27673_27677);
var m27669_27679 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27669_27679,f.call(null,v_27678),v_27678));

var G__27680 = seq__27670_27674;
var G__27681 = chunk__27671_27675;
var G__27682 = count__27672_27676;
var G__27683 = (i__27673_27677 + (1));
seq__27670_27674 = G__27680;
chunk__27671_27675 = G__27681;
count__27672_27676 = G__27682;
i__27673_27677 = G__27683;
continue;
} else {
var temp__4425__auto___27684 = cljs.core.seq.call(null,seq__27670_27674);
if(temp__4425__auto___27684){
var seq__27670_27685__$1 = temp__4425__auto___27684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27670_27685__$1)){
var c__16854__auto___27686 = cljs.core.chunk_first.call(null,seq__27670_27685__$1);
var G__27687 = cljs.core.chunk_rest.call(null,seq__27670_27685__$1);
var G__27688 = c__16854__auto___27686;
var G__27689 = cljs.core.count.call(null,c__16854__auto___27686);
var G__27690 = (0);
seq__27670_27674 = G__27687;
chunk__27671_27675 = G__27688;
count__27672_27676 = G__27689;
i__27673_27677 = G__27690;
continue;
} else {
var v_27691 = cljs.core.first.call(null,seq__27670_27685__$1);
var m27669_27692 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27669_27692,f.call(null,v_27691),v_27691));

var G__27693 = cljs.core.next.call(null,seq__27670_27685__$1);
var G__27694 = null;
var G__27695 = (0);
var G__27696 = (0);
seq__27670_27674 = G__27693;
chunk__27671_27675 = G__27694;
count__27672_27676 = G__27695;
i__27673_27677 = G__27696;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__24600__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__27697){
var vec__27699 = p__27697;
var k = cljs.core.nth.call(null,vec__27699,(0),null);
var ks = cljs.core.nthnext.call(null,vec__27699,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__16057__auto__ = ks;
if(cljs.core.truth_(and__16057__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__16057__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__24600__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27708_27714 = cljs.core.seq.call(null,x);
var chunk__27709_27715 = null;
var count__27710_27716 = (0);
var i__27711_27717 = (0);
while(true){
if((i__27711_27717 < count__27710_27716)){
var vec__27712_27718 = cljs.core._nth.call(null,chunk__27709_27715,i__27711_27717);
var k_27719 = cljs.core.nth.call(null,vec__27712_27718,(0),null);
var v_27720 = cljs.core.nth.call(null,vec__27712_27718,(1),null);
var m27707_27721 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27707_27721,((typeof k_27719 === 'string')?cljs.core.keyword.call(null,k_27719):k_27719),plumbing$core$keywordize_map.call(null,v_27720)));

var G__27722 = seq__27708_27714;
var G__27723 = chunk__27709_27715;
var G__27724 = count__27710_27716;
var G__27725 = (i__27711_27717 + (1));
seq__27708_27714 = G__27722;
chunk__27709_27715 = G__27723;
count__27710_27716 = G__27724;
i__27711_27717 = G__27725;
continue;
} else {
var temp__4425__auto___27726 = cljs.core.seq.call(null,seq__27708_27714);
if(temp__4425__auto___27726){
var seq__27708_27727__$1 = temp__4425__auto___27726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27708_27727__$1)){
var c__16854__auto___27728 = cljs.core.chunk_first.call(null,seq__27708_27727__$1);
var G__27729 = cljs.core.chunk_rest.call(null,seq__27708_27727__$1);
var G__27730 = c__16854__auto___27728;
var G__27731 = cljs.core.count.call(null,c__16854__auto___27728);
var G__27732 = (0);
seq__27708_27714 = G__27729;
chunk__27709_27715 = G__27730;
count__27710_27716 = G__27731;
i__27711_27717 = G__27732;
continue;
} else {
var vec__27713_27733 = cljs.core.first.call(null,seq__27708_27727__$1);
var k_27734 = cljs.core.nth.call(null,vec__27713_27733,(0),null);
var v_27735 = cljs.core.nth.call(null,vec__27713_27733,(1),null);
var m27707_27736 = cljs.core.deref.call(null,m_atom__24600__auto__);
cljs.core.reset_BANG_.call(null,m_atom__24600__auto__,cljs.core.assoc_BANG_.call(null,m27707_27736,((typeof k_27734 === 'string')?cljs.core.keyword.call(null,k_27734):k_27734),plumbing$core$keywordize_map.call(null,v_27735)));

var G__27737 = cljs.core.next.call(null,seq__27708_27727__$1);
var G__27738 = null;
var G__27739 = (0);
var G__27740 = (0);
seq__27708_27714 = G__27737;
chunk__27709_27715 = G__27738;
count__27710_27716 = G__27739;
i__27711_27717 = G__27740;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__24600__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__24681__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__24681__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__27741 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__27742 = cljs.core.next.call(null,ks);
m = G__27741;
ks = G__27742;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__16069__auto__ = m;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__16823__auto__ = (function plumbing$core$iter__27745(s__27746){
return (new cljs.core.LazySeq(null,(function (){
var s__27746__$1 = s__27746;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27746__$1);
if(temp__4425__auto__){
var s__27746__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27746__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__27746__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__27748 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__27747 = (0);
while(true){
if((i__27747 < size__16822__auto__)){
var vec__27751 = cljs.core._nth.call(null,c__16821__auto__,i__27747);
var k = cljs.core.nth.call(null,vec__27751,(0),null);
var v = cljs.core.nth.call(null,vec__27751,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__27748,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27753 = (i__27747 + (1));
i__27747 = G__27753;
continue;
} else {
var G__27754 = (i__27747 + (1));
i__27747 = G__27754;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27748),plumbing$core$iter__27745.call(null,cljs.core.chunk_rest.call(null,s__27746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27748),null);
}
} else {
var vec__27752 = cljs.core.first.call(null,s__27746__$2);
var k = cljs.core.nth.call(null,vec__27752,(0),null);
var v = cljs.core.nth.call(null,vec__27752,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__27745.call(null,cljs.core.rest.call(null,s__27746__$2)));
} else {
var G__27755 = cljs.core.rest.call(null,s__27746__$2);
s__27746__$1 = G__27755;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq27743){
var G__27744 = cljs.core.first.call(null,seq27743);
var seq27743__$1 = cljs.core.next.call(null,seq27743);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__27744,seq27743__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(){
var argseq__17109__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17109__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq27756){
var G__27757 = cljs.core.first.call(null,seq27756);
var seq27756__$1 = cljs.core.next.call(null,seq27756);
var G__27758 = cljs.core.first.call(null,seq27756__$1);
var seq27756__$2 = cljs.core.next.call(null,seq27756__$1);
var G__27759 = cljs.core.first.call(null,seq27756__$2);
var seq27756__$3 = cljs.core.next.call(null,seq27756__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__27757,G__27758,G__27759,seq27756__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 * Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(){
var G__27761 = arguments.length;
switch (G__27761) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__16823__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__27767(s__27768){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__27768__$1 = s__27768;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27768__$1);
if(temp__4425__auto__){
var s__27768__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27768__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__27768__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__27770 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__27769 = (0);
while(true){
if((i__27769 < size__16822__auto__)){
var x = cljs.core._nth.call(null,c__16821__auto__,i__27769);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__27770,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__27771 = (i__27769 + (1));
i__27769 = G__27771;
continue;
} else {
var G__27772 = (i__27769 + (1));
i__27769 = G__27772;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27770),plumbing$core$distinct_by_$_iter__27767.call(null,cljs.core.chunk_rest.call(null,s__27768__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27770),null);
}
} else {
var x = cljs.core.first.call(null,s__27768__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__27767.call(null,cljs.core.rest.call(null,s__27768__$2)));
} else {
var G__27773 = cljs.core.rest.call(null,s__27768__$2);
s__27768__$1 = G__27773;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__16823__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(){
var argseq__17109__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__17109__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq27774){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27774));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(){
var G__27779 = arguments.length;
switch (G__27779) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17120__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__27781 = plumbing.core.conj_when.call(null,coll,x);
var G__27782 = cljs.core.first.call(null,xs);
var G__27783 = cljs.core.next.call(null,xs);
coll = G__27781;
x = G__27782;
xs = G__27783;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq27775){
var G__27776 = cljs.core.first.call(null,seq27775);
var seq27775__$1 = cljs.core.next.call(null,seq27775);
var G__27777 = cljs.core.first.call(null,seq27775__$1);
var seq27775__$2 = cljs.core.next.call(null,seq27775__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__27776,G__27777,seq27775__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(){
var G__27789 = arguments.length;
switch (G__27789) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17120__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__27784_SHARP_){
return cljs.core.apply.call(null,f,p1__27784_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq27785){
var G__27786 = cljs.core.first.call(null,seq27785);
var seq27785__$1 = cljs.core.next.call(null,seq27785);
var G__27787 = cljs.core.first.call(null,seq27785__$1);
var seq27785__$2 = cljs.core.next.call(null,seq27785__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27786,G__27787,seq27785__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(){
var G__27795 = arguments.length;
switch (G__27795) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17120__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17120__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq27791){
var G__27792 = cljs.core.first.call(null,seq27791);
var seq27791__$1 = cljs.core.next.call(null,seq27791);
var G__27793 = cljs.core.first.call(null,seq27791__$1);
var seq27791__$2 = cljs.core.next.call(null,seq27791__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__27792,G__27793,seq27791__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map?rel=1440655369946