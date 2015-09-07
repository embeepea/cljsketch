// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljsketch.canvas_graphics');
goog.require('cljs.core');
cljsketch.canvas_graphics.clear_canvas = (function cljsketch$canvas_graphics$clear_canvas(ctx,color){
var w = ctx.canvas.width;
var h = ctx.canvas.height;
ctx.fillStyle = color;

return ctx.fillRect((0),(0),w,h);
});
cljsketch.canvas_graphics.set_color = (function cljsketch$canvas_graphics$set_color(ctx,color){
ctx.strokeStyle = color;

return ctx.fillStyle = color;
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
var seq__28753 = cljs.core.seq.call(null,cljs.core.range.call(null,n));
var chunk__28754 = null;
var count__28755 = (0);
var i__28756 = (0);
while(true){
if((i__28756 < count__28755)){
var _ = cljs.core._nth.call(null,chunk__28754,i__28756);
var x_28757 = (w * Math.random());
var y_28758 = (h * Math.random());
cljsketch.canvas_graphics.draw_point.call(null,ctx,x_28757,y_28758,r);

var G__28759 = seq__28753;
var G__28760 = chunk__28754;
var G__28761 = count__28755;
var G__28762 = (i__28756 + (1));
seq__28753 = G__28759;
chunk__28754 = G__28760;
count__28755 = G__28761;
i__28756 = G__28762;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28753);
if(temp__4425__auto__){
var seq__28753__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28753__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__28753__$1);
var G__28763 = cljs.core.chunk_rest.call(null,seq__28753__$1);
var G__28764 = c__16854__auto__;
var G__28765 = cljs.core.count.call(null,c__16854__auto__);
var G__28766 = (0);
seq__28753 = G__28763;
chunk__28754 = G__28764;
count__28755 = G__28765;
i__28756 = G__28766;
continue;
} else {
var _ = cljs.core.first.call(null,seq__28753__$1);
var x_28767 = (w * Math.random());
var y_28768 = (h * Math.random());
cljsketch.canvas_graphics.draw_point.call(null,ctx,x_28767,y_28768,r);

var G__28769 = cljs.core.next.call(null,seq__28753__$1);
var G__28770 = null;
var G__28771 = (0);
var G__28772 = (0);
seq__28753 = G__28769;
chunk__28754 = G__28770;
count__28755 = G__28771;
i__28756 = G__28772;
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
var seq__28777 = cljs.core.seq.call(null,cljs.core.range.call(null,n));
var chunk__28778 = null;
var count__28779 = (0);
var i__28780 = (0);
while(true){
if((i__28780 < count__28779)){
var _ = cljs.core._nth.call(null,chunk__28778,i__28780);
var x_28781 = (w * Math.random());
var y_28782 = (h * Math.random());
var r_28783 = Math.round(((255) * Math.random()));
var g_28784 = Math.round(((255) * Math.random()));
var b_28785 = Math.round(((255) * Math.random()));
ctx.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r_28783),cljs.core.str(","),cljs.core.str(g_28784),cljs.core.str(","),cljs.core.str(b_28785),cljs.core.str(")")].join('');

cljsketch.canvas_graphics.draw_point.call(null,ctx,x_28781,y_28782,radius);

var G__28786 = seq__28777;
var G__28787 = chunk__28778;
var G__28788 = count__28779;
var G__28789 = (i__28780 + (1));
seq__28777 = G__28786;
chunk__28778 = G__28787;
count__28779 = G__28788;
i__28780 = G__28789;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28777);
if(temp__4425__auto__){
var seq__28777__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28777__$1)){
var c__16854__auto__ = cljs.core.chunk_first.call(null,seq__28777__$1);
var G__28790 = cljs.core.chunk_rest.call(null,seq__28777__$1);
var G__28791 = c__16854__auto__;
var G__28792 = cljs.core.count.call(null,c__16854__auto__);
var G__28793 = (0);
seq__28777 = G__28790;
chunk__28778 = G__28791;
count__28779 = G__28792;
i__28780 = G__28793;
continue;
} else {
var _ = cljs.core.first.call(null,seq__28777__$1);
var x_28794 = (w * Math.random());
var y_28795 = (h * Math.random());
var r_28796 = Math.round(((255) * Math.random()));
var g_28797 = Math.round(((255) * Math.random()));
var b_28798 = Math.round(((255) * Math.random()));
ctx.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r_28796),cljs.core.str(","),cljs.core.str(g_28797),cljs.core.str(","),cljs.core.str(b_28798),cljs.core.str(")")].join('');

cljsketch.canvas_graphics.draw_point.call(null,ctx,x_28794,y_28795,radius);

var G__28799 = cljs.core.next.call(null,seq__28777__$1);
var G__28800 = null;
var G__28801 = (0);
var G__28802 = (0);
seq__28777 = G__28799;
chunk__28778 = G__28800;
count__28779 = G__28801;
i__28780 = G__28802;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=canvas_graphics.js.map?rel=1441599678396