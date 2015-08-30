// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28912 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28912 = (function (fn_handler,f,meta28913){
this.fn_handler = fn_handler;
this.f = f;
this.meta28913 = meta28913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28914,meta28913__$1){
var self__ = this;
var _28914__$1 = this;
return (new cljs.core.async.t28912(self__.fn_handler,self__.f,meta28913__$1));
});

cljs.core.async.t28912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28914){
var self__ = this;
var _28914__$1 = this;
return self__.meta28913;
});

cljs.core.async.t28912.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28913","meta28913",-673068969,null)], null);
});

cljs.core.async.t28912.cljs$lang$type = true;

cljs.core.async.t28912.cljs$lang$ctorStr = "cljs.core.async/t28912";

cljs.core.async.t28912.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28912");
});

cljs.core.async.__GT_t28912 = (function cljs$core$async$fn_handler_$___GT_t28912(fn_handler__$1,f__$1,meta28913){
return (new cljs.core.async.t28912(fn_handler__$1,f__$1,meta28913));
});

}

return (new cljs.core.async.t28912(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__28916 = buff;
if(G__28916){
var bit__16743__auto__ = null;
if(cljs.core.truth_((function (){var or__16069__auto__ = bit__16743__auto__;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return G__28916.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28916.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28916);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28916);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__28918 = arguments.length;
switch (G__28918) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__28921 = arguments.length;
switch (G__28921) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28923 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28923);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28923,ret){
return (function (){
return fn1.call(null,val_28923);
});})(val_28923,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__28925 = arguments.length;
switch (G__28925) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16954__auto___28927 = n;
var x_28928 = (0);
while(true){
if((x_28928 < n__16954__auto___28927)){
(a[x_28928] = (0));

var G__28929 = (x_28928 + (1));
x_28928 = G__28929;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28930 = (i + (1));
i = G__28930;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28934 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28934 = (function (alt_flag,flag,meta28935){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28935 = meta28935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28936,meta28935__$1){
var self__ = this;
var _28936__$1 = this;
return (new cljs.core.async.t28934(self__.alt_flag,self__.flag,meta28935__$1));
});})(flag))
;

cljs.core.async.t28934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28936){
var self__ = this;
var _28936__$1 = this;
return self__.meta28935;
});})(flag))
;

cljs.core.async.t28934.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28934.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28935","meta28935",-1461280668,null)], null);
});})(flag))
;

cljs.core.async.t28934.cljs$lang$type = true;

cljs.core.async.t28934.cljs$lang$ctorStr = "cljs.core.async/t28934";

cljs.core.async.t28934.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28934");
});})(flag))
;

cljs.core.async.__GT_t28934 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28934(alt_flag__$1,flag__$1,meta28935){
return (new cljs.core.async.t28934(alt_flag__$1,flag__$1,meta28935));
});})(flag))
;

}

return (new cljs.core.async.t28934(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28940 = (function (alt_handler,flag,cb,meta28941){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28941 = meta28941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28942,meta28941__$1){
var self__ = this;
var _28942__$1 = this;
return (new cljs.core.async.t28940(self__.alt_handler,self__.flag,self__.cb,meta28941__$1));
});

cljs.core.async.t28940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28942){
var self__ = this;
var _28942__$1 = this;
return self__.meta28941;
});

cljs.core.async.t28940.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28941","meta28941",875781354,null)], null);
});

cljs.core.async.t28940.cljs$lang$type = true;

cljs.core.async.t28940.cljs$lang$ctorStr = "cljs.core.async/t28940";

cljs.core.async.t28940.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t28940");
});

cljs.core.async.__GT_t28940 = (function cljs$core$async$alt_handler_$___GT_t28940(alt_handler__$1,flag__$1,cb__$1,meta28941){
return (new cljs.core.async.t28940(alt_handler__$1,flag__$1,cb__$1,meta28941));
});

}

return (new cljs.core.async.t28940(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28943_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28943_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28944_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28944_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16069__auto__ = wport;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28945 = (i + (1));
i = G__28945;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16069__auto__ = ret;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16057__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16057__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16057__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28948){
var map__28949 = p__28948;
var map__28949__$1 = ((cljs.core.seq_QMARK_.call(null,map__28949))?cljs.core.apply.call(null,cljs.core.hash_map,map__28949):map__28949);
var opts = map__28949__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28946){
var G__28947 = cljs.core.first.call(null,seq28946);
var seq28946__$1 = cljs.core.next.call(null,seq28946);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28947,seq28946__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28951 = arguments.length;
switch (G__28951) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19012__auto___29000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___29000){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___29000){
return (function (state_28975){
var state_val_28976 = (state_28975[(1)]);
if((state_val_28976 === (7))){
var inst_28971 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28977_29001 = state_28975__$1;
(statearr_28977_29001[(2)] = inst_28971);

(statearr_28977_29001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (1))){
var state_28975__$1 = state_28975;
var statearr_28978_29002 = state_28975__$1;
(statearr_28978_29002[(2)] = null);

(statearr_28978_29002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (4))){
var inst_28954 = (state_28975[(7)]);
var inst_28954__$1 = (state_28975[(2)]);
var inst_28955 = (inst_28954__$1 == null);
var state_28975__$1 = (function (){var statearr_28979 = state_28975;
(statearr_28979[(7)] = inst_28954__$1);

return statearr_28979;
})();
if(cljs.core.truth_(inst_28955)){
var statearr_28980_29003 = state_28975__$1;
(statearr_28980_29003[(1)] = (5));

} else {
var statearr_28981_29004 = state_28975__$1;
(statearr_28981_29004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (13))){
var state_28975__$1 = state_28975;
var statearr_28982_29005 = state_28975__$1;
(statearr_28982_29005[(2)] = null);

(statearr_28982_29005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (6))){
var inst_28954 = (state_28975[(7)]);
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28975__$1,(11),to,inst_28954);
} else {
if((state_val_28976 === (3))){
var inst_28973 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28975__$1,inst_28973);
} else {
if((state_val_28976 === (12))){
var state_28975__$1 = state_28975;
var statearr_28983_29006 = state_28975__$1;
(statearr_28983_29006[(2)] = null);

(statearr_28983_29006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (2))){
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28975__$1,(4),from);
} else {
if((state_val_28976 === (11))){
var inst_28964 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
if(cljs.core.truth_(inst_28964)){
var statearr_28984_29007 = state_28975__$1;
(statearr_28984_29007[(1)] = (12));

} else {
var statearr_28985_29008 = state_28975__$1;
(statearr_28985_29008[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (9))){
var state_28975__$1 = state_28975;
var statearr_28986_29009 = state_28975__$1;
(statearr_28986_29009[(2)] = null);

(statearr_28986_29009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (5))){
var state_28975__$1 = state_28975;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28987_29010 = state_28975__$1;
(statearr_28987_29010[(1)] = (8));

} else {
var statearr_28988_29011 = state_28975__$1;
(statearr_28988_29011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (14))){
var inst_28969 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28989_29012 = state_28975__$1;
(statearr_28989_29012[(2)] = inst_28969);

(statearr_28989_29012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (10))){
var inst_28961 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28990_29013 = state_28975__$1;
(statearr_28990_29013[(2)] = inst_28961);

(statearr_28990_29013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (8))){
var inst_28958 = cljs.core.async.close_BANG_.call(null,to);
var state_28975__$1 = state_28975;
var statearr_28991_29014 = state_28975__$1;
(statearr_28991_29014[(2)] = inst_28958);

(statearr_28991_29014[(1)] = (10));


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
});})(c__19012__auto___29000))
;
return ((function (switch__18991__auto__,c__19012__auto___29000){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_28995 = [null,null,null,null,null,null,null,null];
(statearr_28995[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_28995[(1)] = (1));

return statearr_28995;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_28975){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_28975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e28996){if((e28996 instanceof Object)){
var ex__18995__auto__ = e28996;
var statearr_28997_29015 = state_28975;
(statearr_28997_29015[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29016 = state_28975;
state_28975 = G__29016;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_28975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_28975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___29000))
})();
var state__19014__auto__ = (function (){var statearr_28998 = f__19013__auto__.call(null);
(statearr_28998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___29000);

return statearr_28998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___29000))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29200){
var vec__29201 = p__29200;
var v = cljs.core.nth.call(null,vec__29201,(0),null);
var p = cljs.core.nth.call(null,vec__29201,(1),null);
var job = vec__29201;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19012__auto___29383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___29383,res,vec__29201,v,p,job,jobs,results){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___29383,res,vec__29201,v,p,job,jobs,results){
return (function (state_29206){
var state_val_29207 = (state_29206[(1)]);
if((state_val_29207 === (1))){
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29206__$1,(2),res,v);
} else {
if((state_val_29207 === (2))){
var inst_29203 = (state_29206[(2)]);
var inst_29204 = cljs.core.async.close_BANG_.call(null,res);
var state_29206__$1 = (function (){var statearr_29208 = state_29206;
(statearr_29208[(7)] = inst_29203);

return statearr_29208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29206__$1,inst_29204);
} else {
return null;
}
}
});})(c__19012__auto___29383,res,vec__29201,v,p,job,jobs,results))
;
return ((function (switch__18991__auto__,c__19012__auto___29383,res,vec__29201,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0 = (function (){
var statearr_29212 = [null,null,null,null,null,null,null,null];
(statearr_29212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__);

(statearr_29212[(1)] = (1));

return statearr_29212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1 = (function (state_29206){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29213){if((e29213 instanceof Object)){
var ex__18995__auto__ = e29213;
var statearr_29214_29384 = state_29206;
(statearr_29214_29384[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29385 = state_29206;
state_29206 = G__29385;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = function(state_29206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1.call(this,state_29206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___29383,res,vec__29201,v,p,job,jobs,results))
})();
var state__19014__auto__ = (function (){var statearr_29215 = f__19013__auto__.call(null);
(statearr_29215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___29383);

return statearr_29215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___29383,res,vec__29201,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29216){
var vec__29217 = p__29216;
var v = cljs.core.nth.call(null,vec__29217,(0),null);
var p = cljs.core.nth.call(null,vec__29217,(1),null);
var job = vec__29217;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16954__auto___29386 = n;
var __29387 = (0);
while(true){
if((__29387 < n__16954__auto___29386)){
var G__29218_29388 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29218_29388) {
case "compute":
var c__19012__auto___29390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29387,c__19012__auto___29390,G__29218_29388,n__16954__auto___29386,jobs,results,process,async){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (__29387,c__19012__auto___29390,G__29218_29388,n__16954__auto___29386,jobs,results,process,async){
return (function (state_29231){
var state_val_29232 = (state_29231[(1)]);
if((state_val_29232 === (1))){
var state_29231__$1 = state_29231;
var statearr_29233_29391 = state_29231__$1;
(statearr_29233_29391[(2)] = null);

(statearr_29233_29391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29232 === (2))){
var state_29231__$1 = state_29231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29231__$1,(4),jobs);
} else {
if((state_val_29232 === (3))){
var inst_29229 = (state_29231[(2)]);
var state_29231__$1 = state_29231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29231__$1,inst_29229);
} else {
if((state_val_29232 === (4))){
var inst_29221 = (state_29231[(2)]);
var inst_29222 = process.call(null,inst_29221);
var state_29231__$1 = state_29231;
if(cljs.core.truth_(inst_29222)){
var statearr_29234_29392 = state_29231__$1;
(statearr_29234_29392[(1)] = (5));

} else {
var statearr_29235_29393 = state_29231__$1;
(statearr_29235_29393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29232 === (5))){
var state_29231__$1 = state_29231;
var statearr_29236_29394 = state_29231__$1;
(statearr_29236_29394[(2)] = null);

(statearr_29236_29394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29232 === (6))){
var state_29231__$1 = state_29231;
var statearr_29237_29395 = state_29231__$1;
(statearr_29237_29395[(2)] = null);

(statearr_29237_29395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29232 === (7))){
var inst_29227 = (state_29231[(2)]);
var state_29231__$1 = state_29231;
var statearr_29238_29396 = state_29231__$1;
(statearr_29238_29396[(2)] = inst_29227);

(statearr_29238_29396[(1)] = (3));


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
});})(__29387,c__19012__auto___29390,G__29218_29388,n__16954__auto___29386,jobs,results,process,async))
;
return ((function (__29387,switch__18991__auto__,c__19012__auto___29390,G__29218_29388,n__16954__auto___29386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0 = (function (){
var statearr_29242 = [null,null,null,null,null,null,null];
(statearr_29242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__);

(statearr_29242[(1)] = (1));

return statearr_29242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1 = (function (state_29231){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29243){if((e29243 instanceof Object)){
var ex__18995__auto__ = e29243;
var statearr_29244_29397 = state_29231;
(statearr_29244_29397[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29398 = state_29231;
state_29231 = G__29398;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = function(state_29231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1.call(this,state_29231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__;
})()
;})(__29387,switch__18991__auto__,c__19012__auto___29390,G__29218_29388,n__16954__auto___29386,jobs,results,process,async))
})();
var state__19014__auto__ = (function (){var statearr_29245 = f__19013__auto__.call(null);
(statearr_29245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___29390);

return statearr_29245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(__29387,c__19012__auto___29390,G__29218_29388,n__16954__auto___29386,jobs,results,process,async))
);


break;
case "async":
var c__19012__auto___29399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29387,c__19012__auto___29399,G__29218_29388,n__16954__auto___29386,jobs,results,process,async){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (__29387,c__19012__auto___29399,G__29218_29388,n__16954__auto___29386,jobs,results,process,async){
return (function (state_29258){
var state_val_29259 = (state_29258[(1)]);
if((state_val_29259 === (1))){
var state_29258__$1 = state_29258;
var statearr_29260_29400 = state_29258__$1;
(statearr_29260_29400[(2)] = null);

(statearr_29260_29400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (2))){
var state_29258__$1 = state_29258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29258__$1,(4),jobs);
} else {
if((state_val_29259 === (3))){
var inst_29256 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29258__$1,inst_29256);
} else {
if((state_val_29259 === (4))){
var inst_29248 = (state_29258[(2)]);
var inst_29249 = async.call(null,inst_29248);
var state_29258__$1 = state_29258;
if(cljs.core.truth_(inst_29249)){
var statearr_29261_29401 = state_29258__$1;
(statearr_29261_29401[(1)] = (5));

} else {
var statearr_29262_29402 = state_29258__$1;
(statearr_29262_29402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (5))){
var state_29258__$1 = state_29258;
var statearr_29263_29403 = state_29258__$1;
(statearr_29263_29403[(2)] = null);

(statearr_29263_29403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (6))){
var state_29258__$1 = state_29258;
var statearr_29264_29404 = state_29258__$1;
(statearr_29264_29404[(2)] = null);

(statearr_29264_29404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (7))){
var inst_29254 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29265_29405 = state_29258__$1;
(statearr_29265_29405[(2)] = inst_29254);

(statearr_29265_29405[(1)] = (3));


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
});})(__29387,c__19012__auto___29399,G__29218_29388,n__16954__auto___29386,jobs,results,process,async))
;
return ((function (__29387,switch__18991__auto__,c__19012__auto___29399,G__29218_29388,n__16954__auto___29386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0 = (function (){
var statearr_29269 = [null,null,null,null,null,null,null];
(statearr_29269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__);

(statearr_29269[(1)] = (1));

return statearr_29269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1 = (function (state_29258){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29270){if((e29270 instanceof Object)){
var ex__18995__auto__ = e29270;
var statearr_29271_29406 = state_29258;
(statearr_29271_29406[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29407 = state_29258;
state_29258 = G__29407;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = function(state_29258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1.call(this,state_29258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__;
})()
;})(__29387,switch__18991__auto__,c__19012__auto___29399,G__29218_29388,n__16954__auto___29386,jobs,results,process,async))
})();
var state__19014__auto__ = (function (){var statearr_29272 = f__19013__auto__.call(null);
(statearr_29272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___29399);

return statearr_29272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(__29387,c__19012__auto___29399,G__29218_29388,n__16954__auto___29386,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29408 = (__29387 + (1));
__29387 = G__29408;
continue;
} else {
}
break;
}

var c__19012__auto___29409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___29409,jobs,results,process,async){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___29409,jobs,results,process,async){
return (function (state_29294){
var state_val_29295 = (state_29294[(1)]);
if((state_val_29295 === (1))){
var state_29294__$1 = state_29294;
var statearr_29296_29410 = state_29294__$1;
(statearr_29296_29410[(2)] = null);

(statearr_29296_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (2))){
var state_29294__$1 = state_29294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29294__$1,(4),from);
} else {
if((state_val_29295 === (3))){
var inst_29292 = (state_29294[(2)]);
var state_29294__$1 = state_29294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29294__$1,inst_29292);
} else {
if((state_val_29295 === (4))){
var inst_29275 = (state_29294[(7)]);
var inst_29275__$1 = (state_29294[(2)]);
var inst_29276 = (inst_29275__$1 == null);
var state_29294__$1 = (function (){var statearr_29297 = state_29294;
(statearr_29297[(7)] = inst_29275__$1);

return statearr_29297;
})();
if(cljs.core.truth_(inst_29276)){
var statearr_29298_29411 = state_29294__$1;
(statearr_29298_29411[(1)] = (5));

} else {
var statearr_29299_29412 = state_29294__$1;
(statearr_29299_29412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (5))){
var inst_29278 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29294__$1 = state_29294;
var statearr_29300_29413 = state_29294__$1;
(statearr_29300_29413[(2)] = inst_29278);

(statearr_29300_29413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (6))){
var inst_29275 = (state_29294[(7)]);
var inst_29280 = (state_29294[(8)]);
var inst_29280__$1 = cljs.core.async.chan.call(null,(1));
var inst_29281 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29282 = [inst_29275,inst_29280__$1];
var inst_29283 = (new cljs.core.PersistentVector(null,2,(5),inst_29281,inst_29282,null));
var state_29294__$1 = (function (){var statearr_29301 = state_29294;
(statearr_29301[(8)] = inst_29280__$1);

return statearr_29301;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29294__$1,(8),jobs,inst_29283);
} else {
if((state_val_29295 === (7))){
var inst_29290 = (state_29294[(2)]);
var state_29294__$1 = state_29294;
var statearr_29302_29414 = state_29294__$1;
(statearr_29302_29414[(2)] = inst_29290);

(statearr_29302_29414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (8))){
var inst_29280 = (state_29294[(8)]);
var inst_29285 = (state_29294[(2)]);
var state_29294__$1 = (function (){var statearr_29303 = state_29294;
(statearr_29303[(9)] = inst_29285);

return statearr_29303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29294__$1,(9),results,inst_29280);
} else {
if((state_val_29295 === (9))){
var inst_29287 = (state_29294[(2)]);
var state_29294__$1 = (function (){var statearr_29304 = state_29294;
(statearr_29304[(10)] = inst_29287);

return statearr_29304;
})();
var statearr_29305_29415 = state_29294__$1;
(statearr_29305_29415[(2)] = null);

(statearr_29305_29415[(1)] = (2));


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
});})(c__19012__auto___29409,jobs,results,process,async))
;
return ((function (switch__18991__auto__,c__19012__auto___29409,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0 = (function (){
var statearr_29309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__);

(statearr_29309[(1)] = (1));

return statearr_29309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1 = (function (state_29294){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29310){if((e29310 instanceof Object)){
var ex__18995__auto__ = e29310;
var statearr_29311_29416 = state_29294;
(statearr_29311_29416[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29417 = state_29294;
state_29294 = G__29417;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = function(state_29294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1.call(this,state_29294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___29409,jobs,results,process,async))
})();
var state__19014__auto__ = (function (){var statearr_29312 = f__19013__auto__.call(null);
(statearr_29312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___29409);

return statearr_29312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___29409,jobs,results,process,async))
);


var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__,jobs,results,process,async){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__,jobs,results,process,async){
return (function (state_29350){
var state_val_29351 = (state_29350[(1)]);
if((state_val_29351 === (7))){
var inst_29346 = (state_29350[(2)]);
var state_29350__$1 = state_29350;
var statearr_29352_29418 = state_29350__$1;
(statearr_29352_29418[(2)] = inst_29346);

(statearr_29352_29418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (20))){
var state_29350__$1 = state_29350;
var statearr_29353_29419 = state_29350__$1;
(statearr_29353_29419[(2)] = null);

(statearr_29353_29419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (1))){
var state_29350__$1 = state_29350;
var statearr_29354_29420 = state_29350__$1;
(statearr_29354_29420[(2)] = null);

(statearr_29354_29420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (4))){
var inst_29315 = (state_29350[(7)]);
var inst_29315__$1 = (state_29350[(2)]);
var inst_29316 = (inst_29315__$1 == null);
var state_29350__$1 = (function (){var statearr_29355 = state_29350;
(statearr_29355[(7)] = inst_29315__$1);

return statearr_29355;
})();
if(cljs.core.truth_(inst_29316)){
var statearr_29356_29421 = state_29350__$1;
(statearr_29356_29421[(1)] = (5));

} else {
var statearr_29357_29422 = state_29350__$1;
(statearr_29357_29422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (15))){
var inst_29328 = (state_29350[(8)]);
var state_29350__$1 = state_29350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29350__$1,(18),to,inst_29328);
} else {
if((state_val_29351 === (21))){
var inst_29341 = (state_29350[(2)]);
var state_29350__$1 = state_29350;
var statearr_29358_29423 = state_29350__$1;
(statearr_29358_29423[(2)] = inst_29341);

(statearr_29358_29423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (13))){
var inst_29343 = (state_29350[(2)]);
var state_29350__$1 = (function (){var statearr_29359 = state_29350;
(statearr_29359[(9)] = inst_29343);

return statearr_29359;
})();
var statearr_29360_29424 = state_29350__$1;
(statearr_29360_29424[(2)] = null);

(statearr_29360_29424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (6))){
var inst_29315 = (state_29350[(7)]);
var state_29350__$1 = state_29350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29350__$1,(11),inst_29315);
} else {
if((state_val_29351 === (17))){
var inst_29336 = (state_29350[(2)]);
var state_29350__$1 = state_29350;
if(cljs.core.truth_(inst_29336)){
var statearr_29361_29425 = state_29350__$1;
(statearr_29361_29425[(1)] = (19));

} else {
var statearr_29362_29426 = state_29350__$1;
(statearr_29362_29426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (3))){
var inst_29348 = (state_29350[(2)]);
var state_29350__$1 = state_29350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29350__$1,inst_29348);
} else {
if((state_val_29351 === (12))){
var inst_29325 = (state_29350[(10)]);
var state_29350__$1 = state_29350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29350__$1,(14),inst_29325);
} else {
if((state_val_29351 === (2))){
var state_29350__$1 = state_29350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29350__$1,(4),results);
} else {
if((state_val_29351 === (19))){
var state_29350__$1 = state_29350;
var statearr_29363_29427 = state_29350__$1;
(statearr_29363_29427[(2)] = null);

(statearr_29363_29427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (11))){
var inst_29325 = (state_29350[(2)]);
var state_29350__$1 = (function (){var statearr_29364 = state_29350;
(statearr_29364[(10)] = inst_29325);

return statearr_29364;
})();
var statearr_29365_29428 = state_29350__$1;
(statearr_29365_29428[(2)] = null);

(statearr_29365_29428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (9))){
var state_29350__$1 = state_29350;
var statearr_29366_29429 = state_29350__$1;
(statearr_29366_29429[(2)] = null);

(statearr_29366_29429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (5))){
var state_29350__$1 = state_29350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29367_29430 = state_29350__$1;
(statearr_29367_29430[(1)] = (8));

} else {
var statearr_29368_29431 = state_29350__$1;
(statearr_29368_29431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (14))){
var inst_29330 = (state_29350[(11)]);
var inst_29328 = (state_29350[(8)]);
var inst_29328__$1 = (state_29350[(2)]);
var inst_29329 = (inst_29328__$1 == null);
var inst_29330__$1 = cljs.core.not.call(null,inst_29329);
var state_29350__$1 = (function (){var statearr_29369 = state_29350;
(statearr_29369[(11)] = inst_29330__$1);

(statearr_29369[(8)] = inst_29328__$1);

return statearr_29369;
})();
if(inst_29330__$1){
var statearr_29370_29432 = state_29350__$1;
(statearr_29370_29432[(1)] = (15));

} else {
var statearr_29371_29433 = state_29350__$1;
(statearr_29371_29433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (16))){
var inst_29330 = (state_29350[(11)]);
var state_29350__$1 = state_29350;
var statearr_29372_29434 = state_29350__$1;
(statearr_29372_29434[(2)] = inst_29330);

(statearr_29372_29434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (10))){
var inst_29322 = (state_29350[(2)]);
var state_29350__$1 = state_29350;
var statearr_29373_29435 = state_29350__$1;
(statearr_29373_29435[(2)] = inst_29322);

(statearr_29373_29435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (18))){
var inst_29333 = (state_29350[(2)]);
var state_29350__$1 = state_29350;
var statearr_29374_29436 = state_29350__$1;
(statearr_29374_29436[(2)] = inst_29333);

(statearr_29374_29436[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29351 === (8))){
var inst_29319 = cljs.core.async.close_BANG_.call(null,to);
var state_29350__$1 = state_29350;
var statearr_29375_29437 = state_29350__$1;
(statearr_29375_29437[(2)] = inst_29319);

(statearr_29375_29437[(1)] = (10));


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
});})(c__19012__auto__,jobs,results,process,async))
;
return ((function (switch__18991__auto__,c__19012__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0 = (function (){
var statearr_29379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__);

(statearr_29379[(1)] = (1));

return statearr_29379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1 = (function (state_29350){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29380){if((e29380 instanceof Object)){
var ex__18995__auto__ = e29380;
var statearr_29381_29438 = state_29350;
(statearr_29381_29438[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29439 = state_29350;
state_29350 = G__29439;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__ = function(state_29350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1.call(this,state_29350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__,jobs,results,process,async))
})();
var state__19014__auto__ = (function (){var statearr_29382 = f__19013__auto__.call(null);
(statearr_29382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_29382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__,jobs,results,process,async))
);

return c__19012__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__29441 = arguments.length;
switch (G__29441) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__29444 = arguments.length;
switch (G__29444) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__29447 = arguments.length;
switch (G__29447) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19012__auto___29499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___29499,tc,fc){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___29499,tc,fc){
return (function (state_29473){
var state_val_29474 = (state_29473[(1)]);
if((state_val_29474 === (7))){
var inst_29469 = (state_29473[(2)]);
var state_29473__$1 = state_29473;
var statearr_29475_29500 = state_29473__$1;
(statearr_29475_29500[(2)] = inst_29469);

(statearr_29475_29500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (1))){
var state_29473__$1 = state_29473;
var statearr_29476_29501 = state_29473__$1;
(statearr_29476_29501[(2)] = null);

(statearr_29476_29501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (4))){
var inst_29450 = (state_29473[(7)]);
var inst_29450__$1 = (state_29473[(2)]);
var inst_29451 = (inst_29450__$1 == null);
var state_29473__$1 = (function (){var statearr_29477 = state_29473;
(statearr_29477[(7)] = inst_29450__$1);

return statearr_29477;
})();
if(cljs.core.truth_(inst_29451)){
var statearr_29478_29502 = state_29473__$1;
(statearr_29478_29502[(1)] = (5));

} else {
var statearr_29479_29503 = state_29473__$1;
(statearr_29479_29503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (13))){
var state_29473__$1 = state_29473;
var statearr_29480_29504 = state_29473__$1;
(statearr_29480_29504[(2)] = null);

(statearr_29480_29504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (6))){
var inst_29450 = (state_29473[(7)]);
var inst_29456 = p.call(null,inst_29450);
var state_29473__$1 = state_29473;
if(cljs.core.truth_(inst_29456)){
var statearr_29481_29505 = state_29473__$1;
(statearr_29481_29505[(1)] = (9));

} else {
var statearr_29482_29506 = state_29473__$1;
(statearr_29482_29506[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (3))){
var inst_29471 = (state_29473[(2)]);
var state_29473__$1 = state_29473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29473__$1,inst_29471);
} else {
if((state_val_29474 === (12))){
var state_29473__$1 = state_29473;
var statearr_29483_29507 = state_29473__$1;
(statearr_29483_29507[(2)] = null);

(statearr_29483_29507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (2))){
var state_29473__$1 = state_29473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29473__$1,(4),ch);
} else {
if((state_val_29474 === (11))){
var inst_29450 = (state_29473[(7)]);
var inst_29460 = (state_29473[(2)]);
var state_29473__$1 = state_29473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29473__$1,(8),inst_29460,inst_29450);
} else {
if((state_val_29474 === (9))){
var state_29473__$1 = state_29473;
var statearr_29484_29508 = state_29473__$1;
(statearr_29484_29508[(2)] = tc);

(statearr_29484_29508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (5))){
var inst_29453 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29454 = cljs.core.async.close_BANG_.call(null,fc);
var state_29473__$1 = (function (){var statearr_29485 = state_29473;
(statearr_29485[(8)] = inst_29453);

return statearr_29485;
})();
var statearr_29486_29509 = state_29473__$1;
(statearr_29486_29509[(2)] = inst_29454);

(statearr_29486_29509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (14))){
var inst_29467 = (state_29473[(2)]);
var state_29473__$1 = state_29473;
var statearr_29487_29510 = state_29473__$1;
(statearr_29487_29510[(2)] = inst_29467);

(statearr_29487_29510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (10))){
var state_29473__$1 = state_29473;
var statearr_29488_29511 = state_29473__$1;
(statearr_29488_29511[(2)] = fc);

(statearr_29488_29511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29474 === (8))){
var inst_29462 = (state_29473[(2)]);
var state_29473__$1 = state_29473;
if(cljs.core.truth_(inst_29462)){
var statearr_29489_29512 = state_29473__$1;
(statearr_29489_29512[(1)] = (12));

} else {
var statearr_29490_29513 = state_29473__$1;
(statearr_29490_29513[(1)] = (13));

}

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
});})(c__19012__auto___29499,tc,fc))
;
return ((function (switch__18991__auto__,c__19012__auto___29499,tc,fc){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_29494 = [null,null,null,null,null,null,null,null,null];
(statearr_29494[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_29494[(1)] = (1));

return statearr_29494;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_29473){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29495){if((e29495 instanceof Object)){
var ex__18995__auto__ = e29495;
var statearr_29496_29514 = state_29473;
(statearr_29496_29514[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29515 = state_29473;
state_29473 = G__29515;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_29473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_29473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___29499,tc,fc))
})();
var state__19014__auto__ = (function (){var statearr_29497 = f__19013__auto__.call(null);
(statearr_29497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___29499);

return statearr_29497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___29499,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_29562){
var state_val_29563 = (state_29562[(1)]);
if((state_val_29563 === (1))){
var inst_29548 = init;
var state_29562__$1 = (function (){var statearr_29564 = state_29562;
(statearr_29564[(7)] = inst_29548);

return statearr_29564;
})();
var statearr_29565_29580 = state_29562__$1;
(statearr_29565_29580[(2)] = null);

(statearr_29565_29580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (2))){
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29562__$1,(4),ch);
} else {
if((state_val_29563 === (3))){
var inst_29560 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29562__$1,inst_29560);
} else {
if((state_val_29563 === (4))){
var inst_29551 = (state_29562[(8)]);
var inst_29551__$1 = (state_29562[(2)]);
var inst_29552 = (inst_29551__$1 == null);
var state_29562__$1 = (function (){var statearr_29566 = state_29562;
(statearr_29566[(8)] = inst_29551__$1);

return statearr_29566;
})();
if(cljs.core.truth_(inst_29552)){
var statearr_29567_29581 = state_29562__$1;
(statearr_29567_29581[(1)] = (5));

} else {
var statearr_29568_29582 = state_29562__$1;
(statearr_29568_29582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (5))){
var inst_29548 = (state_29562[(7)]);
var state_29562__$1 = state_29562;
var statearr_29569_29583 = state_29562__$1;
(statearr_29569_29583[(2)] = inst_29548);

(statearr_29569_29583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (6))){
var inst_29548 = (state_29562[(7)]);
var inst_29551 = (state_29562[(8)]);
var inst_29555 = f.call(null,inst_29548,inst_29551);
var inst_29548__$1 = inst_29555;
var state_29562__$1 = (function (){var statearr_29570 = state_29562;
(statearr_29570[(7)] = inst_29548__$1);

return statearr_29570;
})();
var statearr_29571_29584 = state_29562__$1;
(statearr_29571_29584[(2)] = null);

(statearr_29571_29584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (7))){
var inst_29558 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29572_29585 = state_29562__$1;
(statearr_29572_29585[(2)] = inst_29558);

(statearr_29572_29585[(1)] = (3));


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
});})(c__19012__auto__))
;
return ((function (switch__18991__auto__,c__19012__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18992__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18992__auto____0 = (function (){
var statearr_29576 = [null,null,null,null,null,null,null,null,null];
(statearr_29576[(0)] = cljs$core$async$reduce_$_state_machine__18992__auto__);

(statearr_29576[(1)] = (1));

return statearr_29576;
});
var cljs$core$async$reduce_$_state_machine__18992__auto____1 = (function (state_29562){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29577){if((e29577 instanceof Object)){
var ex__18995__auto__ = e29577;
var statearr_29578_29586 = state_29562;
(statearr_29578_29586[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29587 = state_29562;
state_29562 = G__29587;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18992__auto__ = function(state_29562){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18992__auto____1.call(this,state_29562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18992__auto____0;
cljs$core$async$reduce_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18992__auto____1;
return cljs$core$async$reduce_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_29579 = f__19013__auto__.call(null);
(statearr_29579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_29579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__))
);

return c__19012__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__29589 = arguments.length;
switch (G__29589) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_29614){
var state_val_29615 = (state_29614[(1)]);
if((state_val_29615 === (7))){
var inst_29596 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29616_29640 = state_29614__$1;
(statearr_29616_29640[(2)] = inst_29596);

(statearr_29616_29640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (1))){
var inst_29590 = cljs.core.seq.call(null,coll);
var inst_29591 = inst_29590;
var state_29614__$1 = (function (){var statearr_29617 = state_29614;
(statearr_29617[(7)] = inst_29591);

return statearr_29617;
})();
var statearr_29618_29641 = state_29614__$1;
(statearr_29618_29641[(2)] = null);

(statearr_29618_29641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (4))){
var inst_29591 = (state_29614[(7)]);
var inst_29594 = cljs.core.first.call(null,inst_29591);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29614__$1,(7),ch,inst_29594);
} else {
if((state_val_29615 === (13))){
var inst_29608 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29619_29642 = state_29614__$1;
(statearr_29619_29642[(2)] = inst_29608);

(statearr_29619_29642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (6))){
var inst_29599 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
if(cljs.core.truth_(inst_29599)){
var statearr_29620_29643 = state_29614__$1;
(statearr_29620_29643[(1)] = (8));

} else {
var statearr_29621_29644 = state_29614__$1;
(statearr_29621_29644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (3))){
var inst_29612 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29614__$1,inst_29612);
} else {
if((state_val_29615 === (12))){
var state_29614__$1 = state_29614;
var statearr_29622_29645 = state_29614__$1;
(statearr_29622_29645[(2)] = null);

(statearr_29622_29645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (2))){
var inst_29591 = (state_29614[(7)]);
var state_29614__$1 = state_29614;
if(cljs.core.truth_(inst_29591)){
var statearr_29623_29646 = state_29614__$1;
(statearr_29623_29646[(1)] = (4));

} else {
var statearr_29624_29647 = state_29614__$1;
(statearr_29624_29647[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (11))){
var inst_29605 = cljs.core.async.close_BANG_.call(null,ch);
var state_29614__$1 = state_29614;
var statearr_29625_29648 = state_29614__$1;
(statearr_29625_29648[(2)] = inst_29605);

(statearr_29625_29648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (9))){
var state_29614__$1 = state_29614;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29626_29649 = state_29614__$1;
(statearr_29626_29649[(1)] = (11));

} else {
var statearr_29627_29650 = state_29614__$1;
(statearr_29627_29650[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (5))){
var inst_29591 = (state_29614[(7)]);
var state_29614__$1 = state_29614;
var statearr_29628_29651 = state_29614__$1;
(statearr_29628_29651[(2)] = inst_29591);

(statearr_29628_29651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (10))){
var inst_29610 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29629_29652 = state_29614__$1;
(statearr_29629_29652[(2)] = inst_29610);

(statearr_29629_29652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (8))){
var inst_29591 = (state_29614[(7)]);
var inst_29601 = cljs.core.next.call(null,inst_29591);
var inst_29591__$1 = inst_29601;
var state_29614__$1 = (function (){var statearr_29630 = state_29614;
(statearr_29630[(7)] = inst_29591__$1);

return statearr_29630;
})();
var statearr_29631_29653 = state_29614__$1;
(statearr_29631_29653[(2)] = null);

(statearr_29631_29653[(1)] = (2));


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
});})(c__19012__auto__))
;
return ((function (switch__18991__auto__,c__19012__auto__){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_29635 = [null,null,null,null,null,null,null,null];
(statearr_29635[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_29635[(1)] = (1));

return statearr_29635;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_29614){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_29614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e29636){if((e29636 instanceof Object)){
var ex__18995__auto__ = e29636;
var statearr_29637_29654 = state_29614;
(statearr_29637_29654[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29655 = state_29614;
state_29614 = G__29655;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_29614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_29614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_29638 = f__19013__auto__.call(null);
(statearr_29638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_29638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__))
);

return c__19012__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29657 = {};
return obj29657;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16057__auto__ = _;
if(and__16057__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16705__auto__ = (((_ == null))?null:_);
return (function (){var or__16069__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29659 = {};
return obj29659;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29881 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29881 = (function (mult,ch,cs,meta29882){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29882 = meta29882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29883,meta29882__$1){
var self__ = this;
var _29883__$1 = this;
return (new cljs.core.async.t29881(self__.mult,self__.ch,self__.cs,meta29882__$1));
});})(cs))
;

cljs.core.async.t29881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29883){
var self__ = this;
var _29883__$1 = this;
return self__.meta29882;
});})(cs))
;

cljs.core.async.t29881.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29881.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29881.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29881.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29881.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29881.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29881.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29882","meta29882",-334206078,null)], null);
});})(cs))
;

cljs.core.async.t29881.cljs$lang$type = true;

cljs.core.async.t29881.cljs$lang$ctorStr = "cljs.core.async/t29881";

cljs.core.async.t29881.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t29881");
});})(cs))
;

cljs.core.async.__GT_t29881 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29881(mult__$1,ch__$1,cs__$1,meta29882){
return (new cljs.core.async.t29881(mult__$1,ch__$1,cs__$1,meta29882));
});})(cs))
;

}

return (new cljs.core.async.t29881(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19012__auto___30102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___30102,cs,m,dchan,dctr,done){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___30102,cs,m,dchan,dctr,done){
return (function (state_30014){
var state_val_30015 = (state_30014[(1)]);
if((state_val_30015 === (7))){
var inst_30010 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30016_30103 = state_30014__$1;
(statearr_30016_30103[(2)] = inst_30010);

(statearr_30016_30103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (20))){
var inst_29915 = (state_30014[(7)]);
var inst_29925 = cljs.core.first.call(null,inst_29915);
var inst_29926 = cljs.core.nth.call(null,inst_29925,(0),null);
var inst_29927 = cljs.core.nth.call(null,inst_29925,(1),null);
var state_30014__$1 = (function (){var statearr_30017 = state_30014;
(statearr_30017[(8)] = inst_29926);

return statearr_30017;
})();
if(cljs.core.truth_(inst_29927)){
var statearr_30018_30104 = state_30014__$1;
(statearr_30018_30104[(1)] = (22));

} else {
var statearr_30019_30105 = state_30014__$1;
(statearr_30019_30105[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (27))){
var inst_29955 = (state_30014[(9)]);
var inst_29962 = (state_30014[(10)]);
var inst_29886 = (state_30014[(11)]);
var inst_29957 = (state_30014[(12)]);
var inst_29962__$1 = cljs.core._nth.call(null,inst_29955,inst_29957);
var inst_29963 = cljs.core.async.put_BANG_.call(null,inst_29962__$1,inst_29886,done);
var state_30014__$1 = (function (){var statearr_30020 = state_30014;
(statearr_30020[(10)] = inst_29962__$1);

return statearr_30020;
})();
if(cljs.core.truth_(inst_29963)){
var statearr_30021_30106 = state_30014__$1;
(statearr_30021_30106[(1)] = (30));

} else {
var statearr_30022_30107 = state_30014__$1;
(statearr_30022_30107[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (1))){
var state_30014__$1 = state_30014;
var statearr_30023_30108 = state_30014__$1;
(statearr_30023_30108[(2)] = null);

(statearr_30023_30108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (24))){
var inst_29915 = (state_30014[(7)]);
var inst_29932 = (state_30014[(2)]);
var inst_29933 = cljs.core.next.call(null,inst_29915);
var inst_29895 = inst_29933;
var inst_29896 = null;
var inst_29897 = (0);
var inst_29898 = (0);
var state_30014__$1 = (function (){var statearr_30024 = state_30014;
(statearr_30024[(13)] = inst_29896);

(statearr_30024[(14)] = inst_29897);

(statearr_30024[(15)] = inst_29895);

(statearr_30024[(16)] = inst_29932);

(statearr_30024[(17)] = inst_29898);

return statearr_30024;
})();
var statearr_30025_30109 = state_30014__$1;
(statearr_30025_30109[(2)] = null);

(statearr_30025_30109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (39))){
var state_30014__$1 = state_30014;
var statearr_30029_30110 = state_30014__$1;
(statearr_30029_30110[(2)] = null);

(statearr_30029_30110[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (4))){
var inst_29886 = (state_30014[(11)]);
var inst_29886__$1 = (state_30014[(2)]);
var inst_29887 = (inst_29886__$1 == null);
var state_30014__$1 = (function (){var statearr_30030 = state_30014;
(statearr_30030[(11)] = inst_29886__$1);

return statearr_30030;
})();
if(cljs.core.truth_(inst_29887)){
var statearr_30031_30111 = state_30014__$1;
(statearr_30031_30111[(1)] = (5));

} else {
var statearr_30032_30112 = state_30014__$1;
(statearr_30032_30112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (15))){
var inst_29896 = (state_30014[(13)]);
var inst_29897 = (state_30014[(14)]);
var inst_29895 = (state_30014[(15)]);
var inst_29898 = (state_30014[(17)]);
var inst_29911 = (state_30014[(2)]);
var inst_29912 = (inst_29898 + (1));
var tmp30026 = inst_29896;
var tmp30027 = inst_29897;
var tmp30028 = inst_29895;
var inst_29895__$1 = tmp30028;
var inst_29896__$1 = tmp30026;
var inst_29897__$1 = tmp30027;
var inst_29898__$1 = inst_29912;
var state_30014__$1 = (function (){var statearr_30033 = state_30014;
(statearr_30033[(13)] = inst_29896__$1);

(statearr_30033[(14)] = inst_29897__$1);

(statearr_30033[(18)] = inst_29911);

(statearr_30033[(15)] = inst_29895__$1);

(statearr_30033[(17)] = inst_29898__$1);

return statearr_30033;
})();
var statearr_30034_30113 = state_30014__$1;
(statearr_30034_30113[(2)] = null);

(statearr_30034_30113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (21))){
var inst_29936 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30038_30114 = state_30014__$1;
(statearr_30038_30114[(2)] = inst_29936);

(statearr_30038_30114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (31))){
var inst_29962 = (state_30014[(10)]);
var inst_29966 = done.call(null,null);
var inst_29967 = cljs.core.async.untap_STAR_.call(null,m,inst_29962);
var state_30014__$1 = (function (){var statearr_30039 = state_30014;
(statearr_30039[(19)] = inst_29966);

return statearr_30039;
})();
var statearr_30040_30115 = state_30014__$1;
(statearr_30040_30115[(2)] = inst_29967);

(statearr_30040_30115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (32))){
var inst_29955 = (state_30014[(9)]);
var inst_29956 = (state_30014[(20)]);
var inst_29954 = (state_30014[(21)]);
var inst_29957 = (state_30014[(12)]);
var inst_29969 = (state_30014[(2)]);
var inst_29970 = (inst_29957 + (1));
var tmp30035 = inst_29955;
var tmp30036 = inst_29956;
var tmp30037 = inst_29954;
var inst_29954__$1 = tmp30037;
var inst_29955__$1 = tmp30035;
var inst_29956__$1 = tmp30036;
var inst_29957__$1 = inst_29970;
var state_30014__$1 = (function (){var statearr_30041 = state_30014;
(statearr_30041[(9)] = inst_29955__$1);

(statearr_30041[(20)] = inst_29956__$1);

(statearr_30041[(21)] = inst_29954__$1);

(statearr_30041[(22)] = inst_29969);

(statearr_30041[(12)] = inst_29957__$1);

return statearr_30041;
})();
var statearr_30042_30116 = state_30014__$1;
(statearr_30042_30116[(2)] = null);

(statearr_30042_30116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (40))){
var inst_29982 = (state_30014[(23)]);
var inst_29986 = done.call(null,null);
var inst_29987 = cljs.core.async.untap_STAR_.call(null,m,inst_29982);
var state_30014__$1 = (function (){var statearr_30043 = state_30014;
(statearr_30043[(24)] = inst_29986);

return statearr_30043;
})();
var statearr_30044_30117 = state_30014__$1;
(statearr_30044_30117[(2)] = inst_29987);

(statearr_30044_30117[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (33))){
var inst_29973 = (state_30014[(25)]);
var inst_29975 = cljs.core.chunked_seq_QMARK_.call(null,inst_29973);
var state_30014__$1 = state_30014;
if(inst_29975){
var statearr_30045_30118 = state_30014__$1;
(statearr_30045_30118[(1)] = (36));

} else {
var statearr_30046_30119 = state_30014__$1;
(statearr_30046_30119[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (13))){
var inst_29905 = (state_30014[(26)]);
var inst_29908 = cljs.core.async.close_BANG_.call(null,inst_29905);
var state_30014__$1 = state_30014;
var statearr_30047_30120 = state_30014__$1;
(statearr_30047_30120[(2)] = inst_29908);

(statearr_30047_30120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (22))){
var inst_29926 = (state_30014[(8)]);
var inst_29929 = cljs.core.async.close_BANG_.call(null,inst_29926);
var state_30014__$1 = state_30014;
var statearr_30048_30121 = state_30014__$1;
(statearr_30048_30121[(2)] = inst_29929);

(statearr_30048_30121[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (36))){
var inst_29973 = (state_30014[(25)]);
var inst_29977 = cljs.core.chunk_first.call(null,inst_29973);
var inst_29978 = cljs.core.chunk_rest.call(null,inst_29973);
var inst_29979 = cljs.core.count.call(null,inst_29977);
var inst_29954 = inst_29978;
var inst_29955 = inst_29977;
var inst_29956 = inst_29979;
var inst_29957 = (0);
var state_30014__$1 = (function (){var statearr_30049 = state_30014;
(statearr_30049[(9)] = inst_29955);

(statearr_30049[(20)] = inst_29956);

(statearr_30049[(21)] = inst_29954);

(statearr_30049[(12)] = inst_29957);

return statearr_30049;
})();
var statearr_30050_30122 = state_30014__$1;
(statearr_30050_30122[(2)] = null);

(statearr_30050_30122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (41))){
var inst_29973 = (state_30014[(25)]);
var inst_29989 = (state_30014[(2)]);
var inst_29990 = cljs.core.next.call(null,inst_29973);
var inst_29954 = inst_29990;
var inst_29955 = null;
var inst_29956 = (0);
var inst_29957 = (0);
var state_30014__$1 = (function (){var statearr_30051 = state_30014;
(statearr_30051[(9)] = inst_29955);

(statearr_30051[(20)] = inst_29956);

(statearr_30051[(27)] = inst_29989);

(statearr_30051[(21)] = inst_29954);

(statearr_30051[(12)] = inst_29957);

return statearr_30051;
})();
var statearr_30052_30123 = state_30014__$1;
(statearr_30052_30123[(2)] = null);

(statearr_30052_30123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (43))){
var state_30014__$1 = state_30014;
var statearr_30053_30124 = state_30014__$1;
(statearr_30053_30124[(2)] = null);

(statearr_30053_30124[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (29))){
var inst_29998 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30054_30125 = state_30014__$1;
(statearr_30054_30125[(2)] = inst_29998);

(statearr_30054_30125[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (44))){
var inst_30007 = (state_30014[(2)]);
var state_30014__$1 = (function (){var statearr_30055 = state_30014;
(statearr_30055[(28)] = inst_30007);

return statearr_30055;
})();
var statearr_30056_30126 = state_30014__$1;
(statearr_30056_30126[(2)] = null);

(statearr_30056_30126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (6))){
var inst_29946 = (state_30014[(29)]);
var inst_29945 = cljs.core.deref.call(null,cs);
var inst_29946__$1 = cljs.core.keys.call(null,inst_29945);
var inst_29947 = cljs.core.count.call(null,inst_29946__$1);
var inst_29948 = cljs.core.reset_BANG_.call(null,dctr,inst_29947);
var inst_29953 = cljs.core.seq.call(null,inst_29946__$1);
var inst_29954 = inst_29953;
var inst_29955 = null;
var inst_29956 = (0);
var inst_29957 = (0);
var state_30014__$1 = (function (){var statearr_30057 = state_30014;
(statearr_30057[(29)] = inst_29946__$1);

(statearr_30057[(9)] = inst_29955);

(statearr_30057[(20)] = inst_29956);

(statearr_30057[(21)] = inst_29954);

(statearr_30057[(30)] = inst_29948);

(statearr_30057[(12)] = inst_29957);

return statearr_30057;
})();
var statearr_30058_30127 = state_30014__$1;
(statearr_30058_30127[(2)] = null);

(statearr_30058_30127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (28))){
var inst_29954 = (state_30014[(21)]);
var inst_29973 = (state_30014[(25)]);
var inst_29973__$1 = cljs.core.seq.call(null,inst_29954);
var state_30014__$1 = (function (){var statearr_30059 = state_30014;
(statearr_30059[(25)] = inst_29973__$1);

return statearr_30059;
})();
if(inst_29973__$1){
var statearr_30060_30128 = state_30014__$1;
(statearr_30060_30128[(1)] = (33));

} else {
var statearr_30061_30129 = state_30014__$1;
(statearr_30061_30129[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (25))){
var inst_29956 = (state_30014[(20)]);
var inst_29957 = (state_30014[(12)]);
var inst_29959 = (inst_29957 < inst_29956);
var inst_29960 = inst_29959;
var state_30014__$1 = state_30014;
if(cljs.core.truth_(inst_29960)){
var statearr_30062_30130 = state_30014__$1;
(statearr_30062_30130[(1)] = (27));

} else {
var statearr_30063_30131 = state_30014__$1;
(statearr_30063_30131[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (34))){
var state_30014__$1 = state_30014;
var statearr_30064_30132 = state_30014__$1;
(statearr_30064_30132[(2)] = null);

(statearr_30064_30132[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (17))){
var state_30014__$1 = state_30014;
var statearr_30065_30133 = state_30014__$1;
(statearr_30065_30133[(2)] = null);

(statearr_30065_30133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (3))){
var inst_30012 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30014__$1,inst_30012);
} else {
if((state_val_30015 === (12))){
var inst_29941 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30066_30134 = state_30014__$1;
(statearr_30066_30134[(2)] = inst_29941);

(statearr_30066_30134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (2))){
var state_30014__$1 = state_30014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30014__$1,(4),ch);
} else {
if((state_val_30015 === (23))){
var state_30014__$1 = state_30014;
var statearr_30067_30135 = state_30014__$1;
(statearr_30067_30135[(2)] = null);

(statearr_30067_30135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (35))){
var inst_29996 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30068_30136 = state_30014__$1;
(statearr_30068_30136[(2)] = inst_29996);

(statearr_30068_30136[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (19))){
var inst_29915 = (state_30014[(7)]);
var inst_29919 = cljs.core.chunk_first.call(null,inst_29915);
var inst_29920 = cljs.core.chunk_rest.call(null,inst_29915);
var inst_29921 = cljs.core.count.call(null,inst_29919);
var inst_29895 = inst_29920;
var inst_29896 = inst_29919;
var inst_29897 = inst_29921;
var inst_29898 = (0);
var state_30014__$1 = (function (){var statearr_30069 = state_30014;
(statearr_30069[(13)] = inst_29896);

(statearr_30069[(14)] = inst_29897);

(statearr_30069[(15)] = inst_29895);

(statearr_30069[(17)] = inst_29898);

return statearr_30069;
})();
var statearr_30070_30137 = state_30014__$1;
(statearr_30070_30137[(2)] = null);

(statearr_30070_30137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (11))){
var inst_29915 = (state_30014[(7)]);
var inst_29895 = (state_30014[(15)]);
var inst_29915__$1 = cljs.core.seq.call(null,inst_29895);
var state_30014__$1 = (function (){var statearr_30071 = state_30014;
(statearr_30071[(7)] = inst_29915__$1);

return statearr_30071;
})();
if(inst_29915__$1){
var statearr_30072_30138 = state_30014__$1;
(statearr_30072_30138[(1)] = (16));

} else {
var statearr_30073_30139 = state_30014__$1;
(statearr_30073_30139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (9))){
var inst_29943 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30074_30140 = state_30014__$1;
(statearr_30074_30140[(2)] = inst_29943);

(statearr_30074_30140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (5))){
var inst_29893 = cljs.core.deref.call(null,cs);
var inst_29894 = cljs.core.seq.call(null,inst_29893);
var inst_29895 = inst_29894;
var inst_29896 = null;
var inst_29897 = (0);
var inst_29898 = (0);
var state_30014__$1 = (function (){var statearr_30075 = state_30014;
(statearr_30075[(13)] = inst_29896);

(statearr_30075[(14)] = inst_29897);

(statearr_30075[(15)] = inst_29895);

(statearr_30075[(17)] = inst_29898);

return statearr_30075;
})();
var statearr_30076_30141 = state_30014__$1;
(statearr_30076_30141[(2)] = null);

(statearr_30076_30141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (14))){
var state_30014__$1 = state_30014;
var statearr_30077_30142 = state_30014__$1;
(statearr_30077_30142[(2)] = null);

(statearr_30077_30142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (45))){
var inst_30004 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30078_30143 = state_30014__$1;
(statearr_30078_30143[(2)] = inst_30004);

(statearr_30078_30143[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (26))){
var inst_29946 = (state_30014[(29)]);
var inst_30000 = (state_30014[(2)]);
var inst_30001 = cljs.core.seq.call(null,inst_29946);
var state_30014__$1 = (function (){var statearr_30079 = state_30014;
(statearr_30079[(31)] = inst_30000);

return statearr_30079;
})();
if(inst_30001){
var statearr_30080_30144 = state_30014__$1;
(statearr_30080_30144[(1)] = (42));

} else {
var statearr_30081_30145 = state_30014__$1;
(statearr_30081_30145[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (16))){
var inst_29915 = (state_30014[(7)]);
var inst_29917 = cljs.core.chunked_seq_QMARK_.call(null,inst_29915);
var state_30014__$1 = state_30014;
if(inst_29917){
var statearr_30082_30146 = state_30014__$1;
(statearr_30082_30146[(1)] = (19));

} else {
var statearr_30083_30147 = state_30014__$1;
(statearr_30083_30147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (38))){
var inst_29993 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30084_30148 = state_30014__$1;
(statearr_30084_30148[(2)] = inst_29993);

(statearr_30084_30148[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (30))){
var state_30014__$1 = state_30014;
var statearr_30085_30149 = state_30014__$1;
(statearr_30085_30149[(2)] = null);

(statearr_30085_30149[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (10))){
var inst_29896 = (state_30014[(13)]);
var inst_29898 = (state_30014[(17)]);
var inst_29904 = cljs.core._nth.call(null,inst_29896,inst_29898);
var inst_29905 = cljs.core.nth.call(null,inst_29904,(0),null);
var inst_29906 = cljs.core.nth.call(null,inst_29904,(1),null);
var state_30014__$1 = (function (){var statearr_30086 = state_30014;
(statearr_30086[(26)] = inst_29905);

return statearr_30086;
})();
if(cljs.core.truth_(inst_29906)){
var statearr_30087_30150 = state_30014__$1;
(statearr_30087_30150[(1)] = (13));

} else {
var statearr_30088_30151 = state_30014__$1;
(statearr_30088_30151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (18))){
var inst_29939 = (state_30014[(2)]);
var state_30014__$1 = state_30014;
var statearr_30089_30152 = state_30014__$1;
(statearr_30089_30152[(2)] = inst_29939);

(statearr_30089_30152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (42))){
var state_30014__$1 = state_30014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30014__$1,(45),dchan);
} else {
if((state_val_30015 === (37))){
var inst_29982 = (state_30014[(23)]);
var inst_29886 = (state_30014[(11)]);
var inst_29973 = (state_30014[(25)]);
var inst_29982__$1 = cljs.core.first.call(null,inst_29973);
var inst_29983 = cljs.core.async.put_BANG_.call(null,inst_29982__$1,inst_29886,done);
var state_30014__$1 = (function (){var statearr_30090 = state_30014;
(statearr_30090[(23)] = inst_29982__$1);

return statearr_30090;
})();
if(cljs.core.truth_(inst_29983)){
var statearr_30091_30153 = state_30014__$1;
(statearr_30091_30153[(1)] = (39));

} else {
var statearr_30092_30154 = state_30014__$1;
(statearr_30092_30154[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30015 === (8))){
var inst_29897 = (state_30014[(14)]);
var inst_29898 = (state_30014[(17)]);
var inst_29900 = (inst_29898 < inst_29897);
var inst_29901 = inst_29900;
var state_30014__$1 = state_30014;
if(cljs.core.truth_(inst_29901)){
var statearr_30093_30155 = state_30014__$1;
(statearr_30093_30155[(1)] = (10));

} else {
var statearr_30094_30156 = state_30014__$1;
(statearr_30094_30156[(1)] = (11));

}

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
});})(c__19012__auto___30102,cs,m,dchan,dctr,done))
;
return ((function (switch__18991__auto__,c__19012__auto___30102,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18992__auto__ = null;
var cljs$core$async$mult_$_state_machine__18992__auto____0 = (function (){
var statearr_30098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30098[(0)] = cljs$core$async$mult_$_state_machine__18992__auto__);

(statearr_30098[(1)] = (1));

return statearr_30098;
});
var cljs$core$async$mult_$_state_machine__18992__auto____1 = (function (state_30014){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_30014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e30099){if((e30099 instanceof Object)){
var ex__18995__auto__ = e30099;
var statearr_30100_30157 = state_30014;
(statearr_30100_30157[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30158 = state_30014;
state_30014 = G__30158;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18992__auto__ = function(state_30014){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18992__auto____1.call(this,state_30014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18992__auto____0;
cljs$core$async$mult_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18992__auto____1;
return cljs$core$async$mult_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___30102,cs,m,dchan,dctr,done))
})();
var state__19014__auto__ = (function (){var statearr_30101 = f__19013__auto__.call(null);
(statearr_30101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___30102);

return statearr_30101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___30102,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__30160 = arguments.length;
switch (G__30160) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj30163 = {};
return obj30163;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16057__auto__ = m;
if(and__16057__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16705__auto__ = (((m == null))?null:m);
return (function (){var or__16069__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17109__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17109__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30168){
var map__30169 = p__30168;
var map__30169__$1 = ((cljs.core.seq_QMARK_.call(null,map__30169))?cljs.core.apply.call(null,cljs.core.hash_map,map__30169):map__30169);
var opts = map__30169__$1;
var statearr_30170_30173 = state;
(statearr_30170_30173[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__30169,map__30169__$1,opts){
return (function (val){
var statearr_30171_30174 = state;
(statearr_30171_30174[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30169,map__30169__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_30172_30175 = state;
(statearr_30172_30175[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30164){
var G__30165 = cljs.core.first.call(null,seq30164);
var seq30164__$1 = cljs.core.next.call(null,seq30164);
var G__30166 = cljs.core.first.call(null,seq30164__$1);
var seq30164__$2 = cljs.core.next.call(null,seq30164__$1);
var G__30167 = cljs.core.first.call(null,seq30164__$2);
var seq30164__$3 = cljs.core.next.call(null,seq30164__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30165,G__30166,G__30167,seq30164__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t30295 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30295 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30296){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30296 = meta30296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30297,meta30296__$1){
var self__ = this;
var _30297__$1 = this;
return (new cljs.core.async.t30295(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30296__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30297){
var self__ = this;
var _30297__$1 = this;
return self__.meta30296;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30295.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30295.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30295.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30295.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30295.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30295.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30295.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30295.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30296","meta30296",1771748393,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30295.cljs$lang$type = true;

cljs.core.async.t30295.cljs$lang$ctorStr = "cljs.core.async/t30295";

cljs.core.async.t30295.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t30295");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30295 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t30295(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30296){
return (new cljs.core.async.t30295(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30296));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30295(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19012__auto___30414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___30414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___30414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30367){
var state_val_30368 = (state_30367[(1)]);
if((state_val_30368 === (7))){
var inst_30311 = (state_30367[(7)]);
var inst_30316 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30311);
var state_30367__$1 = state_30367;
var statearr_30369_30415 = state_30367__$1;
(statearr_30369_30415[(2)] = inst_30316);

(statearr_30369_30415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (20))){
var inst_30326 = (state_30367[(8)]);
var state_30367__$1 = state_30367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30367__$1,(23),out,inst_30326);
} else {
if((state_val_30368 === (1))){
var inst_30301 = (state_30367[(9)]);
var inst_30301__$1 = calc_state.call(null);
var inst_30302 = cljs.core.seq_QMARK_.call(null,inst_30301__$1);
var state_30367__$1 = (function (){var statearr_30370 = state_30367;
(statearr_30370[(9)] = inst_30301__$1);

return statearr_30370;
})();
if(inst_30302){
var statearr_30371_30416 = state_30367__$1;
(statearr_30371_30416[(1)] = (2));

} else {
var statearr_30372_30417 = state_30367__$1;
(statearr_30372_30417[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (24))){
var inst_30319 = (state_30367[(10)]);
var inst_30311 = inst_30319;
var state_30367__$1 = (function (){var statearr_30373 = state_30367;
(statearr_30373[(7)] = inst_30311);

return statearr_30373;
})();
var statearr_30374_30418 = state_30367__$1;
(statearr_30374_30418[(2)] = null);

(statearr_30374_30418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (4))){
var inst_30301 = (state_30367[(9)]);
var inst_30307 = (state_30367[(2)]);
var inst_30308 = cljs.core.get.call(null,inst_30307,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30309 = cljs.core.get.call(null,inst_30307,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30310 = cljs.core.get.call(null,inst_30307,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30311 = inst_30301;
var state_30367__$1 = (function (){var statearr_30375 = state_30367;
(statearr_30375[(11)] = inst_30309);

(statearr_30375[(12)] = inst_30310);

(statearr_30375[(13)] = inst_30308);

(statearr_30375[(7)] = inst_30311);

return statearr_30375;
})();
var statearr_30376_30419 = state_30367__$1;
(statearr_30376_30419[(2)] = null);

(statearr_30376_30419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (15))){
var state_30367__$1 = state_30367;
var statearr_30377_30420 = state_30367__$1;
(statearr_30377_30420[(2)] = null);

(statearr_30377_30420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (21))){
var inst_30319 = (state_30367[(10)]);
var inst_30311 = inst_30319;
var state_30367__$1 = (function (){var statearr_30378 = state_30367;
(statearr_30378[(7)] = inst_30311);

return statearr_30378;
})();
var statearr_30379_30421 = state_30367__$1;
(statearr_30379_30421[(2)] = null);

(statearr_30379_30421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (13))){
var inst_30363 = (state_30367[(2)]);
var state_30367__$1 = state_30367;
var statearr_30380_30422 = state_30367__$1;
(statearr_30380_30422[(2)] = inst_30363);

(statearr_30380_30422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (22))){
var inst_30361 = (state_30367[(2)]);
var state_30367__$1 = state_30367;
var statearr_30381_30423 = state_30367__$1;
(statearr_30381_30423[(2)] = inst_30361);

(statearr_30381_30423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (6))){
var inst_30365 = (state_30367[(2)]);
var state_30367__$1 = state_30367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30367__$1,inst_30365);
} else {
if((state_val_30368 === (25))){
var state_30367__$1 = state_30367;
var statearr_30382_30424 = state_30367__$1;
(statearr_30382_30424[(2)] = null);

(statearr_30382_30424[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (17))){
var inst_30341 = (state_30367[(14)]);
var state_30367__$1 = state_30367;
var statearr_30383_30425 = state_30367__$1;
(statearr_30383_30425[(2)] = inst_30341);

(statearr_30383_30425[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (3))){
var inst_30301 = (state_30367[(9)]);
var state_30367__$1 = state_30367;
var statearr_30384_30426 = state_30367__$1;
(statearr_30384_30426[(2)] = inst_30301);

(statearr_30384_30426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (12))){
var inst_30327 = (state_30367[(15)]);
var inst_30320 = (state_30367[(16)]);
var inst_30341 = (state_30367[(14)]);
var inst_30341__$1 = inst_30320.call(null,inst_30327);
var state_30367__$1 = (function (){var statearr_30385 = state_30367;
(statearr_30385[(14)] = inst_30341__$1);

return statearr_30385;
})();
if(cljs.core.truth_(inst_30341__$1)){
var statearr_30386_30427 = state_30367__$1;
(statearr_30386_30427[(1)] = (17));

} else {
var statearr_30387_30428 = state_30367__$1;
(statearr_30387_30428[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (2))){
var inst_30301 = (state_30367[(9)]);
var inst_30304 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30301);
var state_30367__$1 = state_30367;
var statearr_30388_30429 = state_30367__$1;
(statearr_30388_30429[(2)] = inst_30304);

(statearr_30388_30429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (23))){
var inst_30352 = (state_30367[(2)]);
var state_30367__$1 = state_30367;
if(cljs.core.truth_(inst_30352)){
var statearr_30389_30430 = state_30367__$1;
(statearr_30389_30430[(1)] = (24));

} else {
var statearr_30390_30431 = state_30367__$1;
(statearr_30390_30431[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (19))){
var inst_30349 = (state_30367[(2)]);
var state_30367__$1 = state_30367;
if(cljs.core.truth_(inst_30349)){
var statearr_30391_30432 = state_30367__$1;
(statearr_30391_30432[(1)] = (20));

} else {
var statearr_30392_30433 = state_30367__$1;
(statearr_30392_30433[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (11))){
var inst_30326 = (state_30367[(8)]);
var inst_30332 = (inst_30326 == null);
var state_30367__$1 = state_30367;
if(cljs.core.truth_(inst_30332)){
var statearr_30393_30434 = state_30367__$1;
(statearr_30393_30434[(1)] = (14));

} else {
var statearr_30394_30435 = state_30367__$1;
(statearr_30394_30435[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (9))){
var inst_30319 = (state_30367[(10)]);
var inst_30319__$1 = (state_30367[(2)]);
var inst_30320 = cljs.core.get.call(null,inst_30319__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30321 = cljs.core.get.call(null,inst_30319__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30322 = cljs.core.get.call(null,inst_30319__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30367__$1 = (function (){var statearr_30395 = state_30367;
(statearr_30395[(17)] = inst_30321);

(statearr_30395[(16)] = inst_30320);

(statearr_30395[(10)] = inst_30319__$1);

return statearr_30395;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30367__$1,(10),inst_30322);
} else {
if((state_val_30368 === (5))){
var inst_30311 = (state_30367[(7)]);
var inst_30314 = cljs.core.seq_QMARK_.call(null,inst_30311);
var state_30367__$1 = state_30367;
if(inst_30314){
var statearr_30396_30436 = state_30367__$1;
(statearr_30396_30436[(1)] = (7));

} else {
var statearr_30397_30437 = state_30367__$1;
(statearr_30397_30437[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (14))){
var inst_30327 = (state_30367[(15)]);
var inst_30334 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30327);
var state_30367__$1 = state_30367;
var statearr_30398_30438 = state_30367__$1;
(statearr_30398_30438[(2)] = inst_30334);

(statearr_30398_30438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (26))){
var inst_30357 = (state_30367[(2)]);
var state_30367__$1 = state_30367;
var statearr_30399_30439 = state_30367__$1;
(statearr_30399_30439[(2)] = inst_30357);

(statearr_30399_30439[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (16))){
var inst_30337 = (state_30367[(2)]);
var inst_30338 = calc_state.call(null);
var inst_30311 = inst_30338;
var state_30367__$1 = (function (){var statearr_30400 = state_30367;
(statearr_30400[(18)] = inst_30337);

(statearr_30400[(7)] = inst_30311);

return statearr_30400;
})();
var statearr_30401_30440 = state_30367__$1;
(statearr_30401_30440[(2)] = null);

(statearr_30401_30440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (10))){
var inst_30326 = (state_30367[(8)]);
var inst_30327 = (state_30367[(15)]);
var inst_30325 = (state_30367[(2)]);
var inst_30326__$1 = cljs.core.nth.call(null,inst_30325,(0),null);
var inst_30327__$1 = cljs.core.nth.call(null,inst_30325,(1),null);
var inst_30328 = (inst_30326__$1 == null);
var inst_30329 = cljs.core._EQ_.call(null,inst_30327__$1,change);
var inst_30330 = (inst_30328) || (inst_30329);
var state_30367__$1 = (function (){var statearr_30402 = state_30367;
(statearr_30402[(8)] = inst_30326__$1);

(statearr_30402[(15)] = inst_30327__$1);

return statearr_30402;
})();
if(cljs.core.truth_(inst_30330)){
var statearr_30403_30441 = state_30367__$1;
(statearr_30403_30441[(1)] = (11));

} else {
var statearr_30404_30442 = state_30367__$1;
(statearr_30404_30442[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (18))){
var inst_30327 = (state_30367[(15)]);
var inst_30321 = (state_30367[(17)]);
var inst_30320 = (state_30367[(16)]);
var inst_30344 = cljs.core.empty_QMARK_.call(null,inst_30320);
var inst_30345 = inst_30321.call(null,inst_30327);
var inst_30346 = cljs.core.not.call(null,inst_30345);
var inst_30347 = (inst_30344) && (inst_30346);
var state_30367__$1 = state_30367;
var statearr_30405_30443 = state_30367__$1;
(statearr_30405_30443[(2)] = inst_30347);

(statearr_30405_30443[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30368 === (8))){
var inst_30311 = (state_30367[(7)]);
var state_30367__$1 = state_30367;
var statearr_30406_30444 = state_30367__$1;
(statearr_30406_30444[(2)] = inst_30311);

(statearr_30406_30444[(1)] = (9));


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
});})(c__19012__auto___30414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18991__auto__,c__19012__auto___30414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18992__auto__ = null;
var cljs$core$async$mix_$_state_machine__18992__auto____0 = (function (){
var statearr_30410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30410[(0)] = cljs$core$async$mix_$_state_machine__18992__auto__);

(statearr_30410[(1)] = (1));

return statearr_30410;
});
var cljs$core$async$mix_$_state_machine__18992__auto____1 = (function (state_30367){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_30367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e30411){if((e30411 instanceof Object)){
var ex__18995__auto__ = e30411;
var statearr_30412_30445 = state_30367;
(statearr_30412_30445[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30446 = state_30367;
state_30367 = G__30446;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18992__auto__ = function(state_30367){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18992__auto____1.call(this,state_30367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18992__auto____0;
cljs$core$async$mix_$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18992__auto____1;
return cljs$core$async$mix_$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___30414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19014__auto__ = (function (){var statearr_30413 = f__19013__auto__.call(null);
(statearr_30413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___30414);

return statearr_30413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___30414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj30448 = {};
return obj30448;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__30450 = arguments.length;
switch (G__30450) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16057__auto__ = p;
if(and__16057__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16057__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16705__auto__ = (((p == null))?null:p);
return (function (){var or__16069__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16705__auto__)]);
if(or__16069__auto__){
return or__16069__auto__;
} else {
var or__16069__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16069__auto____$1){
return or__16069__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__30454 = arguments.length;
switch (G__30454) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16069__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16069__auto__,mults){
return (function (p1__30452_SHARP_){
if(cljs.core.truth_(p1__30452_SHARP_.call(null,topic))){
return p1__30452_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30452_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16069__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30455 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30455 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30456){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30456 = meta30456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30457,meta30456__$1){
var self__ = this;
var _30457__$1 = this;
return (new cljs.core.async.t30455(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30456__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30457){
var self__ = this;
var _30457__$1 = this;
return self__.meta30456;
});})(mults,ensure_mult))
;

cljs.core.async.t30455.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30455.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30455.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30455.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30455.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30455.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30455.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30456","meta30456",-1085412872,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t30455.cljs$lang$type = true;

cljs.core.async.t30455.cljs$lang$ctorStr = "cljs.core.async/t30455";

cljs.core.async.t30455.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t30455");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30455 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30455(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30456){
return (new cljs.core.async.t30455(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30456));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30455(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19012__auto___30578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___30578,mults,ensure_mult,p){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___30578,mults,ensure_mult,p){
return (function (state_30529){
var state_val_30530 = (state_30529[(1)]);
if((state_val_30530 === (7))){
var inst_30525 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30531_30579 = state_30529__$1;
(statearr_30531_30579[(2)] = inst_30525);

(statearr_30531_30579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (20))){
var state_30529__$1 = state_30529;
var statearr_30532_30580 = state_30529__$1;
(statearr_30532_30580[(2)] = null);

(statearr_30532_30580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (1))){
var state_30529__$1 = state_30529;
var statearr_30533_30581 = state_30529__$1;
(statearr_30533_30581[(2)] = null);

(statearr_30533_30581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (24))){
var inst_30508 = (state_30529[(7)]);
var inst_30517 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30508);
var state_30529__$1 = state_30529;
var statearr_30534_30582 = state_30529__$1;
(statearr_30534_30582[(2)] = inst_30517);

(statearr_30534_30582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (4))){
var inst_30460 = (state_30529[(8)]);
var inst_30460__$1 = (state_30529[(2)]);
var inst_30461 = (inst_30460__$1 == null);
var state_30529__$1 = (function (){var statearr_30535 = state_30529;
(statearr_30535[(8)] = inst_30460__$1);

return statearr_30535;
})();
if(cljs.core.truth_(inst_30461)){
var statearr_30536_30583 = state_30529__$1;
(statearr_30536_30583[(1)] = (5));

} else {
var statearr_30537_30584 = state_30529__$1;
(statearr_30537_30584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (15))){
var inst_30502 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30538_30585 = state_30529__$1;
(statearr_30538_30585[(2)] = inst_30502);

(statearr_30538_30585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (21))){
var inst_30522 = (state_30529[(2)]);
var state_30529__$1 = (function (){var statearr_30539 = state_30529;
(statearr_30539[(9)] = inst_30522);

return statearr_30539;
})();
var statearr_30540_30586 = state_30529__$1;
(statearr_30540_30586[(2)] = null);

(statearr_30540_30586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (13))){
var inst_30484 = (state_30529[(10)]);
var inst_30486 = cljs.core.chunked_seq_QMARK_.call(null,inst_30484);
var state_30529__$1 = state_30529;
if(inst_30486){
var statearr_30541_30587 = state_30529__$1;
(statearr_30541_30587[(1)] = (16));

} else {
var statearr_30542_30588 = state_30529__$1;
(statearr_30542_30588[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (22))){
var inst_30514 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
if(cljs.core.truth_(inst_30514)){
var statearr_30543_30589 = state_30529__$1;
(statearr_30543_30589[(1)] = (23));

} else {
var statearr_30544_30590 = state_30529__$1;
(statearr_30544_30590[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (6))){
var inst_30460 = (state_30529[(8)]);
var inst_30508 = (state_30529[(7)]);
var inst_30510 = (state_30529[(11)]);
var inst_30508__$1 = topic_fn.call(null,inst_30460);
var inst_30509 = cljs.core.deref.call(null,mults);
var inst_30510__$1 = cljs.core.get.call(null,inst_30509,inst_30508__$1);
var state_30529__$1 = (function (){var statearr_30545 = state_30529;
(statearr_30545[(7)] = inst_30508__$1);

(statearr_30545[(11)] = inst_30510__$1);

return statearr_30545;
})();
if(cljs.core.truth_(inst_30510__$1)){
var statearr_30546_30591 = state_30529__$1;
(statearr_30546_30591[(1)] = (19));

} else {
var statearr_30547_30592 = state_30529__$1;
(statearr_30547_30592[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (25))){
var inst_30519 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30548_30593 = state_30529__$1;
(statearr_30548_30593[(2)] = inst_30519);

(statearr_30548_30593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (17))){
var inst_30484 = (state_30529[(10)]);
var inst_30493 = cljs.core.first.call(null,inst_30484);
var inst_30494 = cljs.core.async.muxch_STAR_.call(null,inst_30493);
var inst_30495 = cljs.core.async.close_BANG_.call(null,inst_30494);
var inst_30496 = cljs.core.next.call(null,inst_30484);
var inst_30470 = inst_30496;
var inst_30471 = null;
var inst_30472 = (0);
var inst_30473 = (0);
var state_30529__$1 = (function (){var statearr_30549 = state_30529;
(statearr_30549[(12)] = inst_30473);

(statearr_30549[(13)] = inst_30472);

(statearr_30549[(14)] = inst_30495);

(statearr_30549[(15)] = inst_30471);

(statearr_30549[(16)] = inst_30470);

return statearr_30549;
})();
var statearr_30550_30594 = state_30529__$1;
(statearr_30550_30594[(2)] = null);

(statearr_30550_30594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (3))){
var inst_30527 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30529__$1,inst_30527);
} else {
if((state_val_30530 === (12))){
var inst_30504 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30551_30595 = state_30529__$1;
(statearr_30551_30595[(2)] = inst_30504);

(statearr_30551_30595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (2))){
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30529__$1,(4),ch);
} else {
if((state_val_30530 === (23))){
var state_30529__$1 = state_30529;
var statearr_30552_30596 = state_30529__$1;
(statearr_30552_30596[(2)] = null);

(statearr_30552_30596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (19))){
var inst_30460 = (state_30529[(8)]);
var inst_30510 = (state_30529[(11)]);
var inst_30512 = cljs.core.async.muxch_STAR_.call(null,inst_30510);
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30529__$1,(22),inst_30512,inst_30460);
} else {
if((state_val_30530 === (11))){
var inst_30484 = (state_30529[(10)]);
var inst_30470 = (state_30529[(16)]);
var inst_30484__$1 = cljs.core.seq.call(null,inst_30470);
var state_30529__$1 = (function (){var statearr_30553 = state_30529;
(statearr_30553[(10)] = inst_30484__$1);

return statearr_30553;
})();
if(inst_30484__$1){
var statearr_30554_30597 = state_30529__$1;
(statearr_30554_30597[(1)] = (13));

} else {
var statearr_30555_30598 = state_30529__$1;
(statearr_30555_30598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (9))){
var inst_30506 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30556_30599 = state_30529__$1;
(statearr_30556_30599[(2)] = inst_30506);

(statearr_30556_30599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (5))){
var inst_30467 = cljs.core.deref.call(null,mults);
var inst_30468 = cljs.core.vals.call(null,inst_30467);
var inst_30469 = cljs.core.seq.call(null,inst_30468);
var inst_30470 = inst_30469;
var inst_30471 = null;
var inst_30472 = (0);
var inst_30473 = (0);
var state_30529__$1 = (function (){var statearr_30557 = state_30529;
(statearr_30557[(12)] = inst_30473);

(statearr_30557[(13)] = inst_30472);

(statearr_30557[(15)] = inst_30471);

(statearr_30557[(16)] = inst_30470);

return statearr_30557;
})();
var statearr_30558_30600 = state_30529__$1;
(statearr_30558_30600[(2)] = null);

(statearr_30558_30600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (14))){
var state_30529__$1 = state_30529;
var statearr_30562_30601 = state_30529__$1;
(statearr_30562_30601[(2)] = null);

(statearr_30562_30601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (16))){
var inst_30484 = (state_30529[(10)]);
var inst_30488 = cljs.core.chunk_first.call(null,inst_30484);
var inst_30489 = cljs.core.chunk_rest.call(null,inst_30484);
var inst_30490 = cljs.core.count.call(null,inst_30488);
var inst_30470 = inst_30489;
var inst_30471 = inst_30488;
var inst_30472 = inst_30490;
var inst_30473 = (0);
var state_30529__$1 = (function (){var statearr_30563 = state_30529;
(statearr_30563[(12)] = inst_30473);

(statearr_30563[(13)] = inst_30472);

(statearr_30563[(15)] = inst_30471);

(statearr_30563[(16)] = inst_30470);

return statearr_30563;
})();
var statearr_30564_30602 = state_30529__$1;
(statearr_30564_30602[(2)] = null);

(statearr_30564_30602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (10))){
var inst_30473 = (state_30529[(12)]);
var inst_30472 = (state_30529[(13)]);
var inst_30471 = (state_30529[(15)]);
var inst_30470 = (state_30529[(16)]);
var inst_30478 = cljs.core._nth.call(null,inst_30471,inst_30473);
var inst_30479 = cljs.core.async.muxch_STAR_.call(null,inst_30478);
var inst_30480 = cljs.core.async.close_BANG_.call(null,inst_30479);
var inst_30481 = (inst_30473 + (1));
var tmp30559 = inst_30472;
var tmp30560 = inst_30471;
var tmp30561 = inst_30470;
var inst_30470__$1 = tmp30561;
var inst_30471__$1 = tmp30560;
var inst_30472__$1 = tmp30559;
var inst_30473__$1 = inst_30481;
var state_30529__$1 = (function (){var statearr_30565 = state_30529;
(statearr_30565[(12)] = inst_30473__$1);

(statearr_30565[(17)] = inst_30480);

(statearr_30565[(13)] = inst_30472__$1);

(statearr_30565[(15)] = inst_30471__$1);

(statearr_30565[(16)] = inst_30470__$1);

return statearr_30565;
})();
var statearr_30566_30603 = state_30529__$1;
(statearr_30566_30603[(2)] = null);

(statearr_30566_30603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (18))){
var inst_30499 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30567_30604 = state_30529__$1;
(statearr_30567_30604[(2)] = inst_30499);

(statearr_30567_30604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (8))){
var inst_30473 = (state_30529[(12)]);
var inst_30472 = (state_30529[(13)]);
var inst_30475 = (inst_30473 < inst_30472);
var inst_30476 = inst_30475;
var state_30529__$1 = state_30529;
if(cljs.core.truth_(inst_30476)){
var statearr_30568_30605 = state_30529__$1;
(statearr_30568_30605[(1)] = (10));

} else {
var statearr_30569_30606 = state_30529__$1;
(statearr_30569_30606[(1)] = (11));

}

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
});})(c__19012__auto___30578,mults,ensure_mult,p))
;
return ((function (switch__18991__auto__,c__19012__auto___30578,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_30573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30573[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_30573[(1)] = (1));

return statearr_30573;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_30529){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_30529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e30574){if((e30574 instanceof Object)){
var ex__18995__auto__ = e30574;
var statearr_30575_30607 = state_30529;
(statearr_30575_30607[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30608 = state_30529;
state_30529 = G__30608;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_30529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_30529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___30578,mults,ensure_mult,p))
})();
var state__19014__auto__ = (function (){var statearr_30576 = f__19013__auto__.call(null);
(statearr_30576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___30578);

return statearr_30576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___30578,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__30610 = arguments.length;
switch (G__30610) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__30613 = arguments.length;
switch (G__30613) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__30616 = arguments.length;
switch (G__30616) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19012__auto___30686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___30686,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___30686,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30655){
var state_val_30656 = (state_30655[(1)]);
if((state_val_30656 === (7))){
var state_30655__$1 = state_30655;
var statearr_30657_30687 = state_30655__$1;
(statearr_30657_30687[(2)] = null);

(statearr_30657_30687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (1))){
var state_30655__$1 = state_30655;
var statearr_30658_30688 = state_30655__$1;
(statearr_30658_30688[(2)] = null);

(statearr_30658_30688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (4))){
var inst_30619 = (state_30655[(7)]);
var inst_30621 = (inst_30619 < cnt);
var state_30655__$1 = state_30655;
if(cljs.core.truth_(inst_30621)){
var statearr_30659_30689 = state_30655__$1;
(statearr_30659_30689[(1)] = (6));

} else {
var statearr_30660_30690 = state_30655__$1;
(statearr_30660_30690[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (15))){
var inst_30651 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
var statearr_30661_30691 = state_30655__$1;
(statearr_30661_30691[(2)] = inst_30651);

(statearr_30661_30691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (13))){
var inst_30644 = cljs.core.async.close_BANG_.call(null,out);
var state_30655__$1 = state_30655;
var statearr_30662_30692 = state_30655__$1;
(statearr_30662_30692[(2)] = inst_30644);

(statearr_30662_30692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (6))){
var state_30655__$1 = state_30655;
var statearr_30663_30693 = state_30655__$1;
(statearr_30663_30693[(2)] = null);

(statearr_30663_30693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (3))){
var inst_30653 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30655__$1,inst_30653);
} else {
if((state_val_30656 === (12))){
var inst_30641 = (state_30655[(8)]);
var inst_30641__$1 = (state_30655[(2)]);
var inst_30642 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30641__$1);
var state_30655__$1 = (function (){var statearr_30664 = state_30655;
(statearr_30664[(8)] = inst_30641__$1);

return statearr_30664;
})();
if(cljs.core.truth_(inst_30642)){
var statearr_30665_30694 = state_30655__$1;
(statearr_30665_30694[(1)] = (13));

} else {
var statearr_30666_30695 = state_30655__$1;
(statearr_30666_30695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (2))){
var inst_30618 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30619 = (0);
var state_30655__$1 = (function (){var statearr_30667 = state_30655;
(statearr_30667[(7)] = inst_30619);

(statearr_30667[(9)] = inst_30618);

return statearr_30667;
})();
var statearr_30668_30696 = state_30655__$1;
(statearr_30668_30696[(2)] = null);

(statearr_30668_30696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (11))){
var inst_30619 = (state_30655[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30655,(10),Object,null,(9));
var inst_30628 = chs__$1.call(null,inst_30619);
var inst_30629 = done.call(null,inst_30619);
var inst_30630 = cljs.core.async.take_BANG_.call(null,inst_30628,inst_30629);
var state_30655__$1 = state_30655;
var statearr_30669_30697 = state_30655__$1;
(statearr_30669_30697[(2)] = inst_30630);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (9))){
var inst_30619 = (state_30655[(7)]);
var inst_30632 = (state_30655[(2)]);
var inst_30633 = (inst_30619 + (1));
var inst_30619__$1 = inst_30633;
var state_30655__$1 = (function (){var statearr_30670 = state_30655;
(statearr_30670[(7)] = inst_30619__$1);

(statearr_30670[(10)] = inst_30632);

return statearr_30670;
})();
var statearr_30671_30698 = state_30655__$1;
(statearr_30671_30698[(2)] = null);

(statearr_30671_30698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (5))){
var inst_30639 = (state_30655[(2)]);
var state_30655__$1 = (function (){var statearr_30672 = state_30655;
(statearr_30672[(11)] = inst_30639);

return statearr_30672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30655__$1,(12),dchan);
} else {
if((state_val_30656 === (14))){
var inst_30641 = (state_30655[(8)]);
var inst_30646 = cljs.core.apply.call(null,f,inst_30641);
var state_30655__$1 = state_30655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30655__$1,(16),out,inst_30646);
} else {
if((state_val_30656 === (16))){
var inst_30648 = (state_30655[(2)]);
var state_30655__$1 = (function (){var statearr_30673 = state_30655;
(statearr_30673[(12)] = inst_30648);

return statearr_30673;
})();
var statearr_30674_30699 = state_30655__$1;
(statearr_30674_30699[(2)] = null);

(statearr_30674_30699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (10))){
var inst_30623 = (state_30655[(2)]);
var inst_30624 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30655__$1 = (function (){var statearr_30675 = state_30655;
(statearr_30675[(13)] = inst_30623);

return statearr_30675;
})();
var statearr_30676_30700 = state_30655__$1;
(statearr_30676_30700[(2)] = inst_30624);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (8))){
var inst_30637 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
var statearr_30677_30701 = state_30655__$1;
(statearr_30677_30701[(2)] = inst_30637);

(statearr_30677_30701[(1)] = (5));


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
});})(c__19012__auto___30686,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18991__auto__,c__19012__auto___30686,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_30681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30681[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_30681[(1)] = (1));

return statearr_30681;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_30655){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_30655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e30682){if((e30682 instanceof Object)){
var ex__18995__auto__ = e30682;
var statearr_30683_30702 = state_30655;
(statearr_30683_30702[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30703 = state_30655;
state_30655 = G__30703;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_30655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_30655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___30686,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19014__auto__ = (function (){var statearr_30684 = f__19013__auto__.call(null);
(statearr_30684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___30686);

return statearr_30684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___30686,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__30706 = arguments.length;
switch (G__30706) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19012__auto___30761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___30761,out){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___30761,out){
return (function (state_30736){
var state_val_30737 = (state_30736[(1)]);
if((state_val_30737 === (7))){
var inst_30715 = (state_30736[(7)]);
var inst_30716 = (state_30736[(8)]);
var inst_30715__$1 = (state_30736[(2)]);
var inst_30716__$1 = cljs.core.nth.call(null,inst_30715__$1,(0),null);
var inst_30717 = cljs.core.nth.call(null,inst_30715__$1,(1),null);
var inst_30718 = (inst_30716__$1 == null);
var state_30736__$1 = (function (){var statearr_30738 = state_30736;
(statearr_30738[(7)] = inst_30715__$1);

(statearr_30738[(9)] = inst_30717);

(statearr_30738[(8)] = inst_30716__$1);

return statearr_30738;
})();
if(cljs.core.truth_(inst_30718)){
var statearr_30739_30762 = state_30736__$1;
(statearr_30739_30762[(1)] = (8));

} else {
var statearr_30740_30763 = state_30736__$1;
(statearr_30740_30763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (1))){
var inst_30707 = cljs.core.vec.call(null,chs);
var inst_30708 = inst_30707;
var state_30736__$1 = (function (){var statearr_30741 = state_30736;
(statearr_30741[(10)] = inst_30708);

return statearr_30741;
})();
var statearr_30742_30764 = state_30736__$1;
(statearr_30742_30764[(2)] = null);

(statearr_30742_30764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (4))){
var inst_30708 = (state_30736[(10)]);
var state_30736__$1 = state_30736;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30736__$1,(7),inst_30708);
} else {
if((state_val_30737 === (6))){
var inst_30732 = (state_30736[(2)]);
var state_30736__$1 = state_30736;
var statearr_30743_30765 = state_30736__$1;
(statearr_30743_30765[(2)] = inst_30732);

(statearr_30743_30765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (3))){
var inst_30734 = (state_30736[(2)]);
var state_30736__$1 = state_30736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30736__$1,inst_30734);
} else {
if((state_val_30737 === (2))){
var inst_30708 = (state_30736[(10)]);
var inst_30710 = cljs.core.count.call(null,inst_30708);
var inst_30711 = (inst_30710 > (0));
var state_30736__$1 = state_30736;
if(cljs.core.truth_(inst_30711)){
var statearr_30745_30766 = state_30736__$1;
(statearr_30745_30766[(1)] = (4));

} else {
var statearr_30746_30767 = state_30736__$1;
(statearr_30746_30767[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (11))){
var inst_30708 = (state_30736[(10)]);
var inst_30725 = (state_30736[(2)]);
var tmp30744 = inst_30708;
var inst_30708__$1 = tmp30744;
var state_30736__$1 = (function (){var statearr_30747 = state_30736;
(statearr_30747[(11)] = inst_30725);

(statearr_30747[(10)] = inst_30708__$1);

return statearr_30747;
})();
var statearr_30748_30768 = state_30736__$1;
(statearr_30748_30768[(2)] = null);

(statearr_30748_30768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (9))){
var inst_30716 = (state_30736[(8)]);
var state_30736__$1 = state_30736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30736__$1,(11),out,inst_30716);
} else {
if((state_val_30737 === (5))){
var inst_30730 = cljs.core.async.close_BANG_.call(null,out);
var state_30736__$1 = state_30736;
var statearr_30749_30769 = state_30736__$1;
(statearr_30749_30769[(2)] = inst_30730);

(statearr_30749_30769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (10))){
var inst_30728 = (state_30736[(2)]);
var state_30736__$1 = state_30736;
var statearr_30750_30770 = state_30736__$1;
(statearr_30750_30770[(2)] = inst_30728);

(statearr_30750_30770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30737 === (8))){
var inst_30715 = (state_30736[(7)]);
var inst_30717 = (state_30736[(9)]);
var inst_30708 = (state_30736[(10)]);
var inst_30716 = (state_30736[(8)]);
var inst_30720 = (function (){var cs = inst_30708;
var vec__30713 = inst_30715;
var v = inst_30716;
var c = inst_30717;
return ((function (cs,vec__30713,v,c,inst_30715,inst_30717,inst_30708,inst_30716,state_val_30737,c__19012__auto___30761,out){
return (function (p1__30704_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30704_SHARP_);
});
;})(cs,vec__30713,v,c,inst_30715,inst_30717,inst_30708,inst_30716,state_val_30737,c__19012__auto___30761,out))
})();
var inst_30721 = cljs.core.filterv.call(null,inst_30720,inst_30708);
var inst_30708__$1 = inst_30721;
var state_30736__$1 = (function (){var statearr_30751 = state_30736;
(statearr_30751[(10)] = inst_30708__$1);

return statearr_30751;
})();
var statearr_30752_30771 = state_30736__$1;
(statearr_30752_30771[(2)] = null);

(statearr_30752_30771[(1)] = (2));


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
});})(c__19012__auto___30761,out))
;
return ((function (switch__18991__auto__,c__19012__auto___30761,out){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_30756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30756[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_30756[(1)] = (1));

return statearr_30756;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_30736){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_30736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e30757){if((e30757 instanceof Object)){
var ex__18995__auto__ = e30757;
var statearr_30758_30772 = state_30736;
(statearr_30758_30772[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30773 = state_30736;
state_30736 = G__30773;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_30736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_30736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___30761,out))
})();
var state__19014__auto__ = (function (){var statearr_30759 = f__19013__auto__.call(null);
(statearr_30759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___30761);

return statearr_30759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___30761,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__30775 = arguments.length;
switch (G__30775) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19012__auto___30823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___30823,out){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___30823,out){
return (function (state_30799){
var state_val_30800 = (state_30799[(1)]);
if((state_val_30800 === (7))){
var inst_30781 = (state_30799[(7)]);
var inst_30781__$1 = (state_30799[(2)]);
var inst_30782 = (inst_30781__$1 == null);
var inst_30783 = cljs.core.not.call(null,inst_30782);
var state_30799__$1 = (function (){var statearr_30801 = state_30799;
(statearr_30801[(7)] = inst_30781__$1);

return statearr_30801;
})();
if(inst_30783){
var statearr_30802_30824 = state_30799__$1;
(statearr_30802_30824[(1)] = (8));

} else {
var statearr_30803_30825 = state_30799__$1;
(statearr_30803_30825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (1))){
var inst_30776 = (0);
var state_30799__$1 = (function (){var statearr_30804 = state_30799;
(statearr_30804[(8)] = inst_30776);

return statearr_30804;
})();
var statearr_30805_30826 = state_30799__$1;
(statearr_30805_30826[(2)] = null);

(statearr_30805_30826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (4))){
var state_30799__$1 = state_30799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30799__$1,(7),ch);
} else {
if((state_val_30800 === (6))){
var inst_30794 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
var statearr_30806_30827 = state_30799__$1;
(statearr_30806_30827[(2)] = inst_30794);

(statearr_30806_30827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (3))){
var inst_30796 = (state_30799[(2)]);
var inst_30797 = cljs.core.async.close_BANG_.call(null,out);
var state_30799__$1 = (function (){var statearr_30807 = state_30799;
(statearr_30807[(9)] = inst_30796);

return statearr_30807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30799__$1,inst_30797);
} else {
if((state_val_30800 === (2))){
var inst_30776 = (state_30799[(8)]);
var inst_30778 = (inst_30776 < n);
var state_30799__$1 = state_30799;
if(cljs.core.truth_(inst_30778)){
var statearr_30808_30828 = state_30799__$1;
(statearr_30808_30828[(1)] = (4));

} else {
var statearr_30809_30829 = state_30799__$1;
(statearr_30809_30829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (11))){
var inst_30776 = (state_30799[(8)]);
var inst_30786 = (state_30799[(2)]);
var inst_30787 = (inst_30776 + (1));
var inst_30776__$1 = inst_30787;
var state_30799__$1 = (function (){var statearr_30810 = state_30799;
(statearr_30810[(10)] = inst_30786);

(statearr_30810[(8)] = inst_30776__$1);

return statearr_30810;
})();
var statearr_30811_30830 = state_30799__$1;
(statearr_30811_30830[(2)] = null);

(statearr_30811_30830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (9))){
var state_30799__$1 = state_30799;
var statearr_30812_30831 = state_30799__$1;
(statearr_30812_30831[(2)] = null);

(statearr_30812_30831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (5))){
var state_30799__$1 = state_30799;
var statearr_30813_30832 = state_30799__$1;
(statearr_30813_30832[(2)] = null);

(statearr_30813_30832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (10))){
var inst_30791 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
var statearr_30814_30833 = state_30799__$1;
(statearr_30814_30833[(2)] = inst_30791);

(statearr_30814_30833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (8))){
var inst_30781 = (state_30799[(7)]);
var state_30799__$1 = state_30799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30799__$1,(11),out,inst_30781);
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
});})(c__19012__auto___30823,out))
;
return ((function (switch__18991__auto__,c__19012__auto___30823,out){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_30818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30818[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_30818[(1)] = (1));

return statearr_30818;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_30799){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_30799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e30819){if((e30819 instanceof Object)){
var ex__18995__auto__ = e30819;
var statearr_30820_30834 = state_30799;
(statearr_30820_30834[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30835 = state_30799;
state_30799 = G__30835;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_30799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_30799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___30823,out))
})();
var state__19014__auto__ = (function (){var statearr_30821 = f__19013__auto__.call(null);
(statearr_30821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___30823);

return statearr_30821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___30823,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30843 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30843 = (function (map_LT_,f,ch,meta30844){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30844 = meta30844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30845,meta30844__$1){
var self__ = this;
var _30845__$1 = this;
return (new cljs.core.async.t30843(self__.map_LT_,self__.f,self__.ch,meta30844__$1));
});

cljs.core.async.t30843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30845){
var self__ = this;
var _30845__$1 = this;
return self__.meta30844;
});

cljs.core.async.t30843.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30843.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30843.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30846 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30846 = (function (map_LT_,f,ch,meta30844,_,fn1,meta30847){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30844 = meta30844;
this._ = _;
this.fn1 = fn1;
this.meta30847 = meta30847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30848,meta30847__$1){
var self__ = this;
var _30848__$1 = this;
return (new cljs.core.async.t30846(self__.map_LT_,self__.f,self__.ch,self__.meta30844,self__._,self__.fn1,meta30847__$1));
});})(___$1))
;

cljs.core.async.t30846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30848){
var self__ = this;
var _30848__$1 = this;
return self__.meta30847;
});})(___$1))
;

cljs.core.async.t30846.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30836_SHARP_){
return f1.call(null,(((p1__30836_SHARP_ == null))?null:self__.f.call(null,p1__30836_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30846.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30844","meta30844",882566536,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30847","meta30847",616586455,null)], null);
});})(___$1))
;

cljs.core.async.t30846.cljs$lang$type = true;

cljs.core.async.t30846.cljs$lang$ctorStr = "cljs.core.async/t30846";

cljs.core.async.t30846.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t30846");
});})(___$1))
;

cljs.core.async.__GT_t30846 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30846(map_LT___$1,f__$1,ch__$1,meta30844__$1,___$2,fn1__$1,meta30847){
return (new cljs.core.async.t30846(map_LT___$1,f__$1,ch__$1,meta30844__$1,___$2,fn1__$1,meta30847));
});})(___$1))
;

}

return (new cljs.core.async.t30846(self__.map_LT_,self__.f,self__.ch,self__.meta30844,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16057__auto__ = ret;
if(cljs.core.truth_(and__16057__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16057__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30843.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30844","meta30844",882566536,null)], null);
});

cljs.core.async.t30843.cljs$lang$type = true;

cljs.core.async.t30843.cljs$lang$ctorStr = "cljs.core.async/t30843";

cljs.core.async.t30843.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t30843");
});

cljs.core.async.__GT_t30843 = (function cljs$core$async$map_LT__$___GT_t30843(map_LT___$1,f__$1,ch__$1,meta30844){
return (new cljs.core.async.t30843(map_LT___$1,f__$1,ch__$1,meta30844));
});

}

return (new cljs.core.async.t30843(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30852 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30852 = (function (map_GT_,f,ch,meta30853){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30853 = meta30853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30854,meta30853__$1){
var self__ = this;
var _30854__$1 = this;
return (new cljs.core.async.t30852(self__.map_GT_,self__.f,self__.ch,meta30853__$1));
});

cljs.core.async.t30852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30854){
var self__ = this;
var _30854__$1 = this;
return self__.meta30853;
});

cljs.core.async.t30852.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30852.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30852.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30853","meta30853",882196697,null)], null);
});

cljs.core.async.t30852.cljs$lang$type = true;

cljs.core.async.t30852.cljs$lang$ctorStr = "cljs.core.async/t30852";

cljs.core.async.t30852.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t30852");
});

cljs.core.async.__GT_t30852 = (function cljs$core$async$map_GT__$___GT_t30852(map_GT___$1,f__$1,ch__$1,meta30853){
return (new cljs.core.async.t30852(map_GT___$1,f__$1,ch__$1,meta30853));
});

}

return (new cljs.core.async.t30852(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30858 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30858 = (function (filter_GT_,p,ch,meta30859){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30859 = meta30859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30860,meta30859__$1){
var self__ = this;
var _30860__$1 = this;
return (new cljs.core.async.t30858(self__.filter_GT_,self__.p,self__.ch,meta30859__$1));
});

cljs.core.async.t30858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30860){
var self__ = this;
var _30860__$1 = this;
return self__.meta30859;
});

cljs.core.async.t30858.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30858.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30858.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30858.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30859","meta30859",-1940151226,null)], null);
});

cljs.core.async.t30858.cljs$lang$type = true;

cljs.core.async.t30858.cljs$lang$ctorStr = "cljs.core.async/t30858";

cljs.core.async.t30858.cljs$lang$ctorPrWriter = (function (this__16648__auto__,writer__16649__auto__,opt__16650__auto__){
return cljs.core._write.call(null,writer__16649__auto__,"cljs.core.async/t30858");
});

cljs.core.async.__GT_t30858 = (function cljs$core$async$filter_GT__$___GT_t30858(filter_GT___$1,p__$1,ch__$1,meta30859){
return (new cljs.core.async.t30858(filter_GT___$1,p__$1,ch__$1,meta30859));
});

}

return (new cljs.core.async.t30858(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__30862 = arguments.length;
switch (G__30862) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19012__auto___30905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___30905,out){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___30905,out){
return (function (state_30883){
var state_val_30884 = (state_30883[(1)]);
if((state_val_30884 === (7))){
var inst_30879 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30885_30906 = state_30883__$1;
(statearr_30885_30906[(2)] = inst_30879);

(statearr_30885_30906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (1))){
var state_30883__$1 = state_30883;
var statearr_30886_30907 = state_30883__$1;
(statearr_30886_30907[(2)] = null);

(statearr_30886_30907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (4))){
var inst_30865 = (state_30883[(7)]);
var inst_30865__$1 = (state_30883[(2)]);
var inst_30866 = (inst_30865__$1 == null);
var state_30883__$1 = (function (){var statearr_30887 = state_30883;
(statearr_30887[(7)] = inst_30865__$1);

return statearr_30887;
})();
if(cljs.core.truth_(inst_30866)){
var statearr_30888_30908 = state_30883__$1;
(statearr_30888_30908[(1)] = (5));

} else {
var statearr_30889_30909 = state_30883__$1;
(statearr_30889_30909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (6))){
var inst_30865 = (state_30883[(7)]);
var inst_30870 = p.call(null,inst_30865);
var state_30883__$1 = state_30883;
if(cljs.core.truth_(inst_30870)){
var statearr_30890_30910 = state_30883__$1;
(statearr_30890_30910[(1)] = (8));

} else {
var statearr_30891_30911 = state_30883__$1;
(statearr_30891_30911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (3))){
var inst_30881 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30883__$1,inst_30881);
} else {
if((state_val_30884 === (2))){
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30883__$1,(4),ch);
} else {
if((state_val_30884 === (11))){
var inst_30873 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30892_30912 = state_30883__$1;
(statearr_30892_30912[(2)] = inst_30873);

(statearr_30892_30912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (9))){
var state_30883__$1 = state_30883;
var statearr_30893_30913 = state_30883__$1;
(statearr_30893_30913[(2)] = null);

(statearr_30893_30913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (5))){
var inst_30868 = cljs.core.async.close_BANG_.call(null,out);
var state_30883__$1 = state_30883;
var statearr_30894_30914 = state_30883__$1;
(statearr_30894_30914[(2)] = inst_30868);

(statearr_30894_30914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (10))){
var inst_30876 = (state_30883[(2)]);
var state_30883__$1 = (function (){var statearr_30895 = state_30883;
(statearr_30895[(8)] = inst_30876);

return statearr_30895;
})();
var statearr_30896_30915 = state_30883__$1;
(statearr_30896_30915[(2)] = null);

(statearr_30896_30915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (8))){
var inst_30865 = (state_30883[(7)]);
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30883__$1,(11),out,inst_30865);
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
});})(c__19012__auto___30905,out))
;
return ((function (switch__18991__auto__,c__19012__auto___30905,out){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_30900 = [null,null,null,null,null,null,null,null,null];
(statearr_30900[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_30900[(1)] = (1));

return statearr_30900;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_30883){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_30883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e30901){if((e30901 instanceof Object)){
var ex__18995__auto__ = e30901;
var statearr_30902_30916 = state_30883;
(statearr_30902_30916[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30917 = state_30883;
state_30883 = G__30917;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_30883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_30883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___30905,out))
})();
var state__19014__auto__ = (function (){var statearr_30903 = f__19013__auto__.call(null);
(statearr_30903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___30905);

return statearr_30903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___30905,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30919 = arguments.length;
switch (G__30919) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto__){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto__){
return (function (state_31086){
var state_val_31087 = (state_31086[(1)]);
if((state_val_31087 === (7))){
var inst_31082 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31088_31129 = state_31086__$1;
(statearr_31088_31129[(2)] = inst_31082);

(statearr_31088_31129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (20))){
var inst_31052 = (state_31086[(7)]);
var inst_31063 = (state_31086[(2)]);
var inst_31064 = cljs.core.next.call(null,inst_31052);
var inst_31038 = inst_31064;
var inst_31039 = null;
var inst_31040 = (0);
var inst_31041 = (0);
var state_31086__$1 = (function (){var statearr_31089 = state_31086;
(statearr_31089[(8)] = inst_31038);

(statearr_31089[(9)] = inst_31039);

(statearr_31089[(10)] = inst_31040);

(statearr_31089[(11)] = inst_31041);

(statearr_31089[(12)] = inst_31063);

return statearr_31089;
})();
var statearr_31090_31130 = state_31086__$1;
(statearr_31090_31130[(2)] = null);

(statearr_31090_31130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (1))){
var state_31086__$1 = state_31086;
var statearr_31091_31131 = state_31086__$1;
(statearr_31091_31131[(2)] = null);

(statearr_31091_31131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (4))){
var inst_31027 = (state_31086[(13)]);
var inst_31027__$1 = (state_31086[(2)]);
var inst_31028 = (inst_31027__$1 == null);
var state_31086__$1 = (function (){var statearr_31092 = state_31086;
(statearr_31092[(13)] = inst_31027__$1);

return statearr_31092;
})();
if(cljs.core.truth_(inst_31028)){
var statearr_31093_31132 = state_31086__$1;
(statearr_31093_31132[(1)] = (5));

} else {
var statearr_31094_31133 = state_31086__$1;
(statearr_31094_31133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (15))){
var state_31086__$1 = state_31086;
var statearr_31098_31134 = state_31086__$1;
(statearr_31098_31134[(2)] = null);

(statearr_31098_31134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (21))){
var state_31086__$1 = state_31086;
var statearr_31099_31135 = state_31086__$1;
(statearr_31099_31135[(2)] = null);

(statearr_31099_31135[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (13))){
var inst_31038 = (state_31086[(8)]);
var inst_31039 = (state_31086[(9)]);
var inst_31040 = (state_31086[(10)]);
var inst_31041 = (state_31086[(11)]);
var inst_31048 = (state_31086[(2)]);
var inst_31049 = (inst_31041 + (1));
var tmp31095 = inst_31038;
var tmp31096 = inst_31039;
var tmp31097 = inst_31040;
var inst_31038__$1 = tmp31095;
var inst_31039__$1 = tmp31096;
var inst_31040__$1 = tmp31097;
var inst_31041__$1 = inst_31049;
var state_31086__$1 = (function (){var statearr_31100 = state_31086;
(statearr_31100[(14)] = inst_31048);

(statearr_31100[(8)] = inst_31038__$1);

(statearr_31100[(9)] = inst_31039__$1);

(statearr_31100[(10)] = inst_31040__$1);

(statearr_31100[(11)] = inst_31041__$1);

return statearr_31100;
})();
var statearr_31101_31136 = state_31086__$1;
(statearr_31101_31136[(2)] = null);

(statearr_31101_31136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (22))){
var state_31086__$1 = state_31086;
var statearr_31102_31137 = state_31086__$1;
(statearr_31102_31137[(2)] = null);

(statearr_31102_31137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (6))){
var inst_31027 = (state_31086[(13)]);
var inst_31036 = f.call(null,inst_31027);
var inst_31037 = cljs.core.seq.call(null,inst_31036);
var inst_31038 = inst_31037;
var inst_31039 = null;
var inst_31040 = (0);
var inst_31041 = (0);
var state_31086__$1 = (function (){var statearr_31103 = state_31086;
(statearr_31103[(8)] = inst_31038);

(statearr_31103[(9)] = inst_31039);

(statearr_31103[(10)] = inst_31040);

(statearr_31103[(11)] = inst_31041);

return statearr_31103;
})();
var statearr_31104_31138 = state_31086__$1;
(statearr_31104_31138[(2)] = null);

(statearr_31104_31138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (17))){
var inst_31052 = (state_31086[(7)]);
var inst_31056 = cljs.core.chunk_first.call(null,inst_31052);
var inst_31057 = cljs.core.chunk_rest.call(null,inst_31052);
var inst_31058 = cljs.core.count.call(null,inst_31056);
var inst_31038 = inst_31057;
var inst_31039 = inst_31056;
var inst_31040 = inst_31058;
var inst_31041 = (0);
var state_31086__$1 = (function (){var statearr_31105 = state_31086;
(statearr_31105[(8)] = inst_31038);

(statearr_31105[(9)] = inst_31039);

(statearr_31105[(10)] = inst_31040);

(statearr_31105[(11)] = inst_31041);

return statearr_31105;
})();
var statearr_31106_31139 = state_31086__$1;
(statearr_31106_31139[(2)] = null);

(statearr_31106_31139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (3))){
var inst_31084 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31086__$1,inst_31084);
} else {
if((state_val_31087 === (12))){
var inst_31072 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31107_31140 = state_31086__$1;
(statearr_31107_31140[(2)] = inst_31072);

(statearr_31107_31140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (2))){
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(4),in$);
} else {
if((state_val_31087 === (23))){
var inst_31080 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31108_31141 = state_31086__$1;
(statearr_31108_31141[(2)] = inst_31080);

(statearr_31108_31141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (19))){
var inst_31067 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31109_31142 = state_31086__$1;
(statearr_31109_31142[(2)] = inst_31067);

(statearr_31109_31142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (11))){
var inst_31038 = (state_31086[(8)]);
var inst_31052 = (state_31086[(7)]);
var inst_31052__$1 = cljs.core.seq.call(null,inst_31038);
var state_31086__$1 = (function (){var statearr_31110 = state_31086;
(statearr_31110[(7)] = inst_31052__$1);

return statearr_31110;
})();
if(inst_31052__$1){
var statearr_31111_31143 = state_31086__$1;
(statearr_31111_31143[(1)] = (14));

} else {
var statearr_31112_31144 = state_31086__$1;
(statearr_31112_31144[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (9))){
var inst_31074 = (state_31086[(2)]);
var inst_31075 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31086__$1 = (function (){var statearr_31113 = state_31086;
(statearr_31113[(15)] = inst_31074);

return statearr_31113;
})();
if(cljs.core.truth_(inst_31075)){
var statearr_31114_31145 = state_31086__$1;
(statearr_31114_31145[(1)] = (21));

} else {
var statearr_31115_31146 = state_31086__$1;
(statearr_31115_31146[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (5))){
var inst_31030 = cljs.core.async.close_BANG_.call(null,out);
var state_31086__$1 = state_31086;
var statearr_31116_31147 = state_31086__$1;
(statearr_31116_31147[(2)] = inst_31030);

(statearr_31116_31147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (14))){
var inst_31052 = (state_31086[(7)]);
var inst_31054 = cljs.core.chunked_seq_QMARK_.call(null,inst_31052);
var state_31086__$1 = state_31086;
if(inst_31054){
var statearr_31117_31148 = state_31086__$1;
(statearr_31117_31148[(1)] = (17));

} else {
var statearr_31118_31149 = state_31086__$1;
(statearr_31118_31149[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (16))){
var inst_31070 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31119_31150 = state_31086__$1;
(statearr_31119_31150[(2)] = inst_31070);

(statearr_31119_31150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (10))){
var inst_31039 = (state_31086[(9)]);
var inst_31041 = (state_31086[(11)]);
var inst_31046 = cljs.core._nth.call(null,inst_31039,inst_31041);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31086__$1,(13),out,inst_31046);
} else {
if((state_val_31087 === (18))){
var inst_31052 = (state_31086[(7)]);
var inst_31061 = cljs.core.first.call(null,inst_31052);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31086__$1,(20),out,inst_31061);
} else {
if((state_val_31087 === (8))){
var inst_31040 = (state_31086[(10)]);
var inst_31041 = (state_31086[(11)]);
var inst_31043 = (inst_31041 < inst_31040);
var inst_31044 = inst_31043;
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_31044)){
var statearr_31120_31151 = state_31086__$1;
(statearr_31120_31151[(1)] = (10));

} else {
var statearr_31121_31152 = state_31086__$1;
(statearr_31121_31152[(1)] = (11));

}

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
});})(c__19012__auto__))
;
return ((function (switch__18991__auto__,c__19012__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18992__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18992__auto____0 = (function (){
var statearr_31125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31125[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18992__auto__);

(statearr_31125[(1)] = (1));

return statearr_31125;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18992__auto____1 = (function (state_31086){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_31086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e31126){if((e31126 instanceof Object)){
var ex__18995__auto__ = e31126;
var statearr_31127_31153 = state_31086;
(statearr_31127_31153[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31154 = state_31086;
state_31086 = G__31154;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18992__auto__ = function(state_31086){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18992__auto____1.call(this,state_31086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18992__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18992__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto__))
})();
var state__19014__auto__ = (function (){var statearr_31128 = f__19013__auto__.call(null);
(statearr_31128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto__);

return statearr_31128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto__))
);

return c__19012__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__31156 = arguments.length;
switch (G__31156) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__31159 = arguments.length;
switch (G__31159) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__31162 = arguments.length;
switch (G__31162) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19012__auto___31212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___31212,out){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___31212,out){
return (function (state_31186){
var state_val_31187 = (state_31186[(1)]);
if((state_val_31187 === (7))){
var inst_31181 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31188_31213 = state_31186__$1;
(statearr_31188_31213[(2)] = inst_31181);

(statearr_31188_31213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31187 === (1))){
var inst_31163 = null;
var state_31186__$1 = (function (){var statearr_31189 = state_31186;
(statearr_31189[(7)] = inst_31163);

return statearr_31189;
})();
var statearr_31190_31214 = state_31186__$1;
(statearr_31190_31214[(2)] = null);

(statearr_31190_31214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31187 === (4))){
var inst_31166 = (state_31186[(8)]);
var inst_31166__$1 = (state_31186[(2)]);
var inst_31167 = (inst_31166__$1 == null);
var inst_31168 = cljs.core.not.call(null,inst_31167);
var state_31186__$1 = (function (){var statearr_31191 = state_31186;
(statearr_31191[(8)] = inst_31166__$1);

return statearr_31191;
})();
if(inst_31168){
var statearr_31192_31215 = state_31186__$1;
(statearr_31192_31215[(1)] = (5));

} else {
var statearr_31193_31216 = state_31186__$1;
(statearr_31193_31216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31187 === (6))){
var state_31186__$1 = state_31186;
var statearr_31194_31217 = state_31186__$1;
(statearr_31194_31217[(2)] = null);

(statearr_31194_31217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31187 === (3))){
var inst_31183 = (state_31186[(2)]);
var inst_31184 = cljs.core.async.close_BANG_.call(null,out);
var state_31186__$1 = (function (){var statearr_31195 = state_31186;
(statearr_31195[(9)] = inst_31183);

return statearr_31195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31186__$1,inst_31184);
} else {
if((state_val_31187 === (2))){
var state_31186__$1 = state_31186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31186__$1,(4),ch);
} else {
if((state_val_31187 === (11))){
var inst_31166 = (state_31186[(8)]);
var inst_31175 = (state_31186[(2)]);
var inst_31163 = inst_31166;
var state_31186__$1 = (function (){var statearr_31196 = state_31186;
(statearr_31196[(7)] = inst_31163);

(statearr_31196[(10)] = inst_31175);

return statearr_31196;
})();
var statearr_31197_31218 = state_31186__$1;
(statearr_31197_31218[(2)] = null);

(statearr_31197_31218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31187 === (9))){
var inst_31166 = (state_31186[(8)]);
var state_31186__$1 = state_31186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31186__$1,(11),out,inst_31166);
} else {
if((state_val_31187 === (5))){
var inst_31166 = (state_31186[(8)]);
var inst_31163 = (state_31186[(7)]);
var inst_31170 = cljs.core._EQ_.call(null,inst_31166,inst_31163);
var state_31186__$1 = state_31186;
if(inst_31170){
var statearr_31199_31219 = state_31186__$1;
(statearr_31199_31219[(1)] = (8));

} else {
var statearr_31200_31220 = state_31186__$1;
(statearr_31200_31220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31187 === (10))){
var inst_31178 = (state_31186[(2)]);
var state_31186__$1 = state_31186;
var statearr_31201_31221 = state_31186__$1;
(statearr_31201_31221[(2)] = inst_31178);

(statearr_31201_31221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31187 === (8))){
var inst_31163 = (state_31186[(7)]);
var tmp31198 = inst_31163;
var inst_31163__$1 = tmp31198;
var state_31186__$1 = (function (){var statearr_31202 = state_31186;
(statearr_31202[(7)] = inst_31163__$1);

return statearr_31202;
})();
var statearr_31203_31222 = state_31186__$1;
(statearr_31203_31222[(2)] = null);

(statearr_31203_31222[(1)] = (2));


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
});})(c__19012__auto___31212,out))
;
return ((function (switch__18991__auto__,c__19012__auto___31212,out){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_31207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31207[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_31207[(1)] = (1));

return statearr_31207;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_31186){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_31186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e31208){if((e31208 instanceof Object)){
var ex__18995__auto__ = e31208;
var statearr_31209_31223 = state_31186;
(statearr_31209_31223[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31224 = state_31186;
state_31186 = G__31224;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_31186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_31186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___31212,out))
})();
var state__19014__auto__ = (function (){var statearr_31210 = f__19013__auto__.call(null);
(statearr_31210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___31212);

return statearr_31210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___31212,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__31226 = arguments.length;
switch (G__31226) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19012__auto___31295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___31295,out){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___31295,out){
return (function (state_31264){
var state_val_31265 = (state_31264[(1)]);
if((state_val_31265 === (7))){
var inst_31260 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31266_31296 = state_31264__$1;
(statearr_31266_31296[(2)] = inst_31260);

(statearr_31266_31296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (1))){
var inst_31227 = (new Array(n));
var inst_31228 = inst_31227;
var inst_31229 = (0);
var state_31264__$1 = (function (){var statearr_31267 = state_31264;
(statearr_31267[(7)] = inst_31228);

(statearr_31267[(8)] = inst_31229);

return statearr_31267;
})();
var statearr_31268_31297 = state_31264__$1;
(statearr_31268_31297[(2)] = null);

(statearr_31268_31297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (4))){
var inst_31232 = (state_31264[(9)]);
var inst_31232__$1 = (state_31264[(2)]);
var inst_31233 = (inst_31232__$1 == null);
var inst_31234 = cljs.core.not.call(null,inst_31233);
var state_31264__$1 = (function (){var statearr_31269 = state_31264;
(statearr_31269[(9)] = inst_31232__$1);

return statearr_31269;
})();
if(inst_31234){
var statearr_31270_31298 = state_31264__$1;
(statearr_31270_31298[(1)] = (5));

} else {
var statearr_31271_31299 = state_31264__$1;
(statearr_31271_31299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (15))){
var inst_31254 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31272_31300 = state_31264__$1;
(statearr_31272_31300[(2)] = inst_31254);

(statearr_31272_31300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (13))){
var state_31264__$1 = state_31264;
var statearr_31273_31301 = state_31264__$1;
(statearr_31273_31301[(2)] = null);

(statearr_31273_31301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (6))){
var inst_31229 = (state_31264[(8)]);
var inst_31250 = (inst_31229 > (0));
var state_31264__$1 = state_31264;
if(cljs.core.truth_(inst_31250)){
var statearr_31274_31302 = state_31264__$1;
(statearr_31274_31302[(1)] = (12));

} else {
var statearr_31275_31303 = state_31264__$1;
(statearr_31275_31303[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (3))){
var inst_31262 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31264__$1,inst_31262);
} else {
if((state_val_31265 === (12))){
var inst_31228 = (state_31264[(7)]);
var inst_31252 = cljs.core.vec.call(null,inst_31228);
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31264__$1,(15),out,inst_31252);
} else {
if((state_val_31265 === (2))){
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31264__$1,(4),ch);
} else {
if((state_val_31265 === (11))){
var inst_31244 = (state_31264[(2)]);
var inst_31245 = (new Array(n));
var inst_31228 = inst_31245;
var inst_31229 = (0);
var state_31264__$1 = (function (){var statearr_31276 = state_31264;
(statearr_31276[(7)] = inst_31228);

(statearr_31276[(10)] = inst_31244);

(statearr_31276[(8)] = inst_31229);

return statearr_31276;
})();
var statearr_31277_31304 = state_31264__$1;
(statearr_31277_31304[(2)] = null);

(statearr_31277_31304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (9))){
var inst_31228 = (state_31264[(7)]);
var inst_31242 = cljs.core.vec.call(null,inst_31228);
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31264__$1,(11),out,inst_31242);
} else {
if((state_val_31265 === (5))){
var inst_31232 = (state_31264[(9)]);
var inst_31228 = (state_31264[(7)]);
var inst_31237 = (state_31264[(11)]);
var inst_31229 = (state_31264[(8)]);
var inst_31236 = (inst_31228[inst_31229] = inst_31232);
var inst_31237__$1 = (inst_31229 + (1));
var inst_31238 = (inst_31237__$1 < n);
var state_31264__$1 = (function (){var statearr_31278 = state_31264;
(statearr_31278[(12)] = inst_31236);

(statearr_31278[(11)] = inst_31237__$1);

return statearr_31278;
})();
if(cljs.core.truth_(inst_31238)){
var statearr_31279_31305 = state_31264__$1;
(statearr_31279_31305[(1)] = (8));

} else {
var statearr_31280_31306 = state_31264__$1;
(statearr_31280_31306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (14))){
var inst_31257 = (state_31264[(2)]);
var inst_31258 = cljs.core.async.close_BANG_.call(null,out);
var state_31264__$1 = (function (){var statearr_31282 = state_31264;
(statearr_31282[(13)] = inst_31257);

return statearr_31282;
})();
var statearr_31283_31307 = state_31264__$1;
(statearr_31283_31307[(2)] = inst_31258);

(statearr_31283_31307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (10))){
var inst_31248 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31284_31308 = state_31264__$1;
(statearr_31284_31308[(2)] = inst_31248);

(statearr_31284_31308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (8))){
var inst_31228 = (state_31264[(7)]);
var inst_31237 = (state_31264[(11)]);
var tmp31281 = inst_31228;
var inst_31228__$1 = tmp31281;
var inst_31229 = inst_31237;
var state_31264__$1 = (function (){var statearr_31285 = state_31264;
(statearr_31285[(7)] = inst_31228__$1);

(statearr_31285[(8)] = inst_31229);

return statearr_31285;
})();
var statearr_31286_31309 = state_31264__$1;
(statearr_31286_31309[(2)] = null);

(statearr_31286_31309[(1)] = (2));


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
});})(c__19012__auto___31295,out))
;
return ((function (switch__18991__auto__,c__19012__auto___31295,out){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_31290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31290[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_31290[(1)] = (1));

return statearr_31290;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_31264){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_31264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e31291){if((e31291 instanceof Object)){
var ex__18995__auto__ = e31291;
var statearr_31292_31310 = state_31264;
(statearr_31292_31310[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31311 = state_31264;
state_31264 = G__31311;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_31264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_31264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___31295,out))
})();
var state__19014__auto__ = (function (){var statearr_31293 = f__19013__auto__.call(null);
(statearr_31293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___31295);

return statearr_31293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___31295,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__31313 = arguments.length;
switch (G__31313) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19012__auto___31386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19012__auto___31386,out){
return (function (){
var f__19013__auto__ = (function (){var switch__18991__auto__ = ((function (c__19012__auto___31386,out){
return (function (state_31355){
var state_val_31356 = (state_31355[(1)]);
if((state_val_31356 === (7))){
var inst_31351 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
var statearr_31357_31387 = state_31355__$1;
(statearr_31357_31387[(2)] = inst_31351);

(statearr_31357_31387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (1))){
var inst_31314 = [];
var inst_31315 = inst_31314;
var inst_31316 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31355__$1 = (function (){var statearr_31358 = state_31355;
(statearr_31358[(7)] = inst_31316);

(statearr_31358[(8)] = inst_31315);

return statearr_31358;
})();
var statearr_31359_31388 = state_31355__$1;
(statearr_31359_31388[(2)] = null);

(statearr_31359_31388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (4))){
var inst_31319 = (state_31355[(9)]);
var inst_31319__$1 = (state_31355[(2)]);
var inst_31320 = (inst_31319__$1 == null);
var inst_31321 = cljs.core.not.call(null,inst_31320);
var state_31355__$1 = (function (){var statearr_31360 = state_31355;
(statearr_31360[(9)] = inst_31319__$1);

return statearr_31360;
})();
if(inst_31321){
var statearr_31361_31389 = state_31355__$1;
(statearr_31361_31389[(1)] = (5));

} else {
var statearr_31362_31390 = state_31355__$1;
(statearr_31362_31390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (15))){
var inst_31345 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
var statearr_31363_31391 = state_31355__$1;
(statearr_31363_31391[(2)] = inst_31345);

(statearr_31363_31391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (13))){
var state_31355__$1 = state_31355;
var statearr_31364_31392 = state_31355__$1;
(statearr_31364_31392[(2)] = null);

(statearr_31364_31392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (6))){
var inst_31315 = (state_31355[(8)]);
var inst_31340 = inst_31315.length;
var inst_31341 = (inst_31340 > (0));
var state_31355__$1 = state_31355;
if(cljs.core.truth_(inst_31341)){
var statearr_31365_31393 = state_31355__$1;
(statearr_31365_31393[(1)] = (12));

} else {
var statearr_31366_31394 = state_31355__$1;
(statearr_31366_31394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (3))){
var inst_31353 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31355__$1,inst_31353);
} else {
if((state_val_31356 === (12))){
var inst_31315 = (state_31355[(8)]);
var inst_31343 = cljs.core.vec.call(null,inst_31315);
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31355__$1,(15),out,inst_31343);
} else {
if((state_val_31356 === (2))){
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31355__$1,(4),ch);
} else {
if((state_val_31356 === (11))){
var inst_31323 = (state_31355[(10)]);
var inst_31319 = (state_31355[(9)]);
var inst_31333 = (state_31355[(2)]);
var inst_31334 = [];
var inst_31335 = inst_31334.push(inst_31319);
var inst_31315 = inst_31334;
var inst_31316 = inst_31323;
var state_31355__$1 = (function (){var statearr_31367 = state_31355;
(statearr_31367[(7)] = inst_31316);

(statearr_31367[(11)] = inst_31335);

(statearr_31367[(8)] = inst_31315);

(statearr_31367[(12)] = inst_31333);

return statearr_31367;
})();
var statearr_31368_31395 = state_31355__$1;
(statearr_31368_31395[(2)] = null);

(statearr_31368_31395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (9))){
var inst_31315 = (state_31355[(8)]);
var inst_31331 = cljs.core.vec.call(null,inst_31315);
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31355__$1,(11),out,inst_31331);
} else {
if((state_val_31356 === (5))){
var inst_31323 = (state_31355[(10)]);
var inst_31316 = (state_31355[(7)]);
var inst_31319 = (state_31355[(9)]);
var inst_31323__$1 = f.call(null,inst_31319);
var inst_31324 = cljs.core._EQ_.call(null,inst_31323__$1,inst_31316);
var inst_31325 = cljs.core.keyword_identical_QMARK_.call(null,inst_31316,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31326 = (inst_31324) || (inst_31325);
var state_31355__$1 = (function (){var statearr_31369 = state_31355;
(statearr_31369[(10)] = inst_31323__$1);

return statearr_31369;
})();
if(cljs.core.truth_(inst_31326)){
var statearr_31370_31396 = state_31355__$1;
(statearr_31370_31396[(1)] = (8));

} else {
var statearr_31371_31397 = state_31355__$1;
(statearr_31371_31397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (14))){
var inst_31348 = (state_31355[(2)]);
var inst_31349 = cljs.core.async.close_BANG_.call(null,out);
var state_31355__$1 = (function (){var statearr_31373 = state_31355;
(statearr_31373[(13)] = inst_31348);

return statearr_31373;
})();
var statearr_31374_31398 = state_31355__$1;
(statearr_31374_31398[(2)] = inst_31349);

(statearr_31374_31398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (10))){
var inst_31338 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
var statearr_31375_31399 = state_31355__$1;
(statearr_31375_31399[(2)] = inst_31338);

(statearr_31375_31399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (8))){
var inst_31323 = (state_31355[(10)]);
var inst_31319 = (state_31355[(9)]);
var inst_31315 = (state_31355[(8)]);
var inst_31328 = inst_31315.push(inst_31319);
var tmp31372 = inst_31315;
var inst_31315__$1 = tmp31372;
var inst_31316 = inst_31323;
var state_31355__$1 = (function (){var statearr_31376 = state_31355;
(statearr_31376[(7)] = inst_31316);

(statearr_31376[(14)] = inst_31328);

(statearr_31376[(8)] = inst_31315__$1);

return statearr_31376;
})();
var statearr_31377_31400 = state_31355__$1;
(statearr_31377_31400[(2)] = null);

(statearr_31377_31400[(1)] = (2));


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
});})(c__19012__auto___31386,out))
;
return ((function (switch__18991__auto__,c__19012__auto___31386,out){
return (function() {
var cljs$core$async$state_machine__18992__auto__ = null;
var cljs$core$async$state_machine__18992__auto____0 = (function (){
var statearr_31381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31381[(0)] = cljs$core$async$state_machine__18992__auto__);

(statearr_31381[(1)] = (1));

return statearr_31381;
});
var cljs$core$async$state_machine__18992__auto____1 = (function (state_31355){
while(true){
var ret_value__18993__auto__ = (function (){try{while(true){
var result__18994__auto__ = switch__18991__auto__.call(null,state_31355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18994__auto__;
}
break;
}
}catch (e31382){if((e31382 instanceof Object)){
var ex__18995__auto__ = e31382;
var statearr_31383_31401 = state_31355;
(statearr_31383_31401[(5)] = ex__18995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31402 = state_31355;
state_31355 = G__31402;
continue;
} else {
return ret_value__18993__auto__;
}
break;
}
});
cljs$core$async$state_machine__18992__auto__ = function(state_31355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18992__auto____1.call(this,state_31355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18992__auto____0;
cljs$core$async$state_machine__18992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18992__auto____1;
return cljs$core$async$state_machine__18992__auto__;
})()
;})(switch__18991__auto__,c__19012__auto___31386,out))
})();
var state__19014__auto__ = (function (){var statearr_31384 = f__19013__auto__.call(null);
(statearr_31384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19012__auto___31386);

return statearr_31384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19014__auto__);
});})(c__19012__auto___31386,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440655375983