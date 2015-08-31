// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32548_32560 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32549_32561 = null;
var count__32550_32562 = (0);
var i__32551_32563 = (0);
while(true){
if((i__32551_32563 < count__32550_32562)){
var f_32564 = cljs.core._nth.call(null,chunk__32549_32561,i__32551_32563);
cljs.core.println.call(null,"  ",f_32564);

var G__32565 = seq__32548_32560;
var G__32566 = chunk__32549_32561;
var G__32567 = count__32550_32562;
var G__32568 = (i__32551_32563 + (1));
seq__32548_32560 = G__32565;
chunk__32549_32561 = G__32566;
count__32550_32562 = G__32567;
i__32551_32563 = G__32568;
continue;
} else {
var temp__4425__auto___32569 = cljs.core.seq.call(null,seq__32548_32560);
if(temp__4425__auto___32569){
var seq__32548_32570__$1 = temp__4425__auto___32569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32548_32570__$1)){
var c__16854__auto___32571 = cljs.core.chunk_first.call(null,seq__32548_32570__$1);
var G__32572 = cljs.core.chunk_rest.call(null,seq__32548_32570__$1);
var G__32573 = c__16854__auto___32571;
var G__32574 = cljs.core.count.call(null,c__16854__auto___32571);
var G__32575 = (0);
seq__32548_32560 = G__32572;
chunk__32549_32561 = G__32573;
count__32550_32562 = G__32574;
i__32551_32563 = G__32575;
continue;
} else {
var f_32576 = cljs.core.first.call(null,seq__32548_32570__$1);
cljs.core.println.call(null,"  ",f_32576);

var G__32577 = cljs.core.next.call(null,seq__32548_32570__$1);
var G__32578 = null;
var G__32579 = (0);
var G__32580 = (0);
seq__32548_32560 = G__32577;
chunk__32549_32561 = G__32578;
count__32550_32562 = G__32579;
i__32551_32563 = G__32580;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32581 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16069__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32581);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32581)))?cljs.core.second.call(null,arglists_32581):arglists_32581));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32552 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32553 = null;
var count__32554 = (0);
var i__32555 = (0);
while(true){
if((i__32555 < count__32554)){
var vec__32556 = cljs.core._nth.call(null,chunk__32553,i__32555);
var name = cljs.core.nth.call(null,vec__32556,(0),null);
var map__32557 = cljs.core.nth.call(null,vec__32556,(1),null);
var map__32557__$1 = ((cljs.core.seq_QMARK_.call(null,map__32557))?cljs.core.apply.call(null,cljs.core.hash_map,map__32557):map__32557);
var doc = cljs.core.get.call(null,map__32557__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32557__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32582 = seq__32552;
var G__32583 = chunk__32553;
var G__32584 = count__32554;
var G__32585 = (i__32555 + (1));
seq__32552 = G__32582;
chunk__32553 = G__32583;
count__32554 = G__32584;
i__32555 = G__32585;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32552);
if(temp__4425__auto__){
var seq__32552__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32552__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__32552__$1);
var G__32586 = cljs.core.chunk_rest.call(null,seq__32552__$1);
var G__32587 = c__16854__auto__;
var G__32588 = cljs.core.count.call(null,c__16854__auto__);
var G__32589 = (0);
seq__32552 = G__32586;
chunk__32553 = G__32587;
count__32554 = G__32588;
i__32555 = G__32589;
continue;
} else {
var vec__32558 = cljs.core.first.call(null,seq__32552__$1);
var name = cljs.core.nth.call(null,vec__32558,(0),null);
var map__32559 = cljs.core.nth.call(null,vec__32558,(1),null);
var map__32559__$1 = ((cljs.core.seq_QMARK_.call(null,map__32559))?cljs.core.apply.call(null,cljs.core.hash_map,map__32559):map__32559);
var doc = cljs.core.get.call(null,map__32559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32559__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32590 = cljs.core.next.call(null,seq__32552__$1);
var G__32591 = null;
var G__32592 = (0);
var G__32593 = (0);
seq__32552 = G__32590;
chunk__32553 = G__32591;
count__32554 = G__32592;
i__32555 = G__32593;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1440655378355