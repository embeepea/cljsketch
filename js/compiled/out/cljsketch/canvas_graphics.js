// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.canvas_graphics');
goog.require('cljs.core');
cljsketch.canvas_graphics.clear_canvas = (function cljsketch$canvas_graphics$clear_canvas(ctx){
var w = ctx.canvas.width;
var h = ctx.canvas.height;
ctx.fillStyle = "#cccccc";

ctx.fillRect((0),(0),w,h);

return ctx.fillStyle = "#000000";
});
cljsketch.canvas_graphics.draw_point = (function cljsketch$canvas_graphics$draw_point(ctx,x,y,r){
ctx.beginPath();

ctx.arc(x,y,r,(0),((2) * Math.PI));

return ctx.fill();
});
cljsketch.canvas_graphics.draw_circle = (function cljsketch$canvas_graphics$draw_circle(ctx,x,y,r,t){
ctx.lineWidth = t;

ctx.beginPath();

ctx.arc(x,y,r,(0),((2) * Math.PI));

return ctx.stroke();
});
cljsketch.canvas_graphics.draw_line = (function cljsketch$canvas_graphics$draw_line(ctx,x0,y0,x1,y1,t){
ctx.lineWidth = t;

ctx.beginPath();

ctx.moveTo(x0,y0);

ctx.lineTo(x1,y1);

return ctx.stroke();
});
cljsketch.canvas_graphics.random_points = (function cljsketch$canvas_graphics$random_points(ctx,n,r){
var w = ctx.canvas.width;
var h = ctx.canvas.height;
var seq__59525 = cljs.core.seq.call(null,cljs.core.range.call(null,n));
var chunk__59526 = null;
var count__59527 = (0);
var i__59528 = (0);
while(true){
if((i__59528 < count__59527)){
var _ = cljs.core._nth.call(null,chunk__59526,i__59528);
var x_59529 = (w * Math.random());
var y_59530 = (h * Math.random());
cljsketch.canvas_graphics.draw_point.call(null,ctx,x_59529,y_59530,r);

var G__59531 = seq__59525;
var G__59532 = chunk__59526;
var G__59533 = count__59527;
var G__59534 = (i__59528 + (1));
seq__59525 = G__59531;
chunk__59526 = G__59532;
count__59527 = G__59533;
i__59528 = G__59534;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__59525);
if(temp__4425__auto__){
var seq__59525__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59525__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__59525__$1);
var G__59535 = cljs.core.chunk_rest.call(null,seq__59525__$1);
var G__59536 = c__16854__auto__;
var G__59537 = cljs.core.count.call(null,c__16854__auto__);
var G__59538 = (0);
seq__59525 = G__59535;
chunk__59526 = G__59536;
count__59527 = G__59537;
i__59528 = G__59538;
continue;
} else {
var _ = cljs.core.first.call(null,seq__59525__$1);
var x_59539 = (w * Math.random());
var y_59540 = (h * Math.random());
cljsketch.canvas_graphics.draw_point.call(null,ctx,x_59539,y_59540,r);

var G__59541 = cljs.core.next.call(null,seq__59525__$1);
var G__59542 = null;
var G__59543 = (0);
var G__59544 = (0);
seq__59525 = G__59541;
chunk__59526 = G__59542;
count__59527 = G__59543;
i__59528 = G__59544;
continue;
}
} else {
return null;
}
}
break;
}
});
cljsketch.canvas_graphics.random_points_colors = (function cljsketch$canvas_graphics$random_points_colors(ctx,n,radius){
var w = ctx.canvas.width;
var h = ctx.canvas.height;
var seq__59549 = cljs.core.seq.call(null,cljs.core.range.call(null,n));
var chunk__59550 = null;
var count__59551 = (0);
var i__59552 = (0);
while(true){
if((i__59552 < count__59551)){
var _ = cljs.core._nth.call(null,chunk__59550,i__59552);
var x_59553 = (w * Math.random());
var y_59554 = (h * Math.random());
var r_59555 = Math.round(((255) * Math.random()));
var g_59556 = Math.round(((255) * Math.random()));
var b_59557 = Math.round(((255) * Math.random()));
ctx.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r_59555),cljs.core.str(","),cljs.core.str(g_59556),cljs.core.str(","),cljs.core.str(b_59557),cljs.core.str(")")].join('');

cljsketch.canvas_graphics.draw_point.call(null,ctx,x_59553,y_59554,radius);

var G__59558 = seq__59549;
var G__59559 = chunk__59550;
var G__59560 = count__59551;
var G__59561 = (i__59552 + (1));
seq__59549 = G__59558;
chunk__59550 = G__59559;
count__59551 = G__59560;
i__59552 = G__59561;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__59549);
if(temp__4425__auto__){
var seq__59549__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59549__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__59549__$1);
var G__59562 = cljs.core.chunk_rest.call(null,seq__59549__$1);
var G__59563 = c__16854__auto__;
var G__59564 = cljs.core.count.call(null,c__16854__auto__);
var G__59565 = (0);
seq__59549 = G__59562;
chunk__59550 = G__59563;
count__59551 = G__59564;
i__59552 = G__59565;
continue;
} else {
var _ = cljs.core.first.call(null,seq__59549__$1);
var x_59566 = (w * Math.random());
var y_59567 = (h * Math.random());
var r_59568 = Math.round(((255) * Math.random()));
var g_59569 = Math.round(((255) * Math.random()));
var b_59570 = Math.round(((255) * Math.random()));
ctx.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r_59568),cljs.core.str(","),cljs.core.str(g_59569),cljs.core.str(","),cljs.core.str(b_59570),cljs.core.str(")")].join('');

cljsketch.canvas_graphics.draw_point.call(null,ctx,x_59566,y_59567,radius);

var G__59571 = cljs.core.next.call(null,seq__59549__$1);
var G__59572 = null;
var G__59573 = (0);
var G__59574 = (0);
seq__59549 = G__59571;
chunk__59550 = G__59572;
count__59551 = G__59573;
i__59552 = G__59574;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=canvas_graphics.js.map?rel=1440855783266