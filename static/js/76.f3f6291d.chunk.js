"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(689),i=n(791),o=n(995),p=n(854),l={list:"Cast_list__GlWio",item:"Cast_item__a0CDL",text:"Cast_text__P2vgu",info:"Cast_info__UHntJ"},f=n(184),d=function(){var t=(0,s.UO)().movieId,e=(0,i.useState)([]),n=(0,a.Z)(e,2),c=n[0],d=n[1],v=(0,i.useState)(!1),h=(0,a.Z)(v,2),g=h[0],m=h[1],_=(0,i.useState)(null),x=(0,a.Z)(_,2),w=x[0],k=x[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,o.IQ)(t);case 4:n=e.sent,d(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(e.t0);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsxs)("div",{children:[g&&(0,f.jsx)(p.Z,{}),w&&(0,f.jsx)("p",{children:w.message}),(0,f.jsx)("ul",{className:l.list,children:c&&c.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.character;return(0,f.jsxs)("li",{className:l.item,children:[(0,f.jsx)("img",{className:l.img,width:"200px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,f.jsx)("p",{className:l.text,children:r}),(0,f.jsxs)("p",{className:l.text,children:["Character: ",a]})]},"".concat(e,"-").concat(a))}))})]})}},854:function(t,e,n){var r=n(154),a=n(184);e.Z=function(){return(0,a.jsx)(r.t3,{visible:!0,height:"80",width:"80",ariaLabel:"hourglass-loading",wrapperStyle:{},wrapperClass:"",colors:["#306cce","#72a1ed"]})}},995:function(t,e,n){n.d(e,{Hg:function(){return i},IQ:function(){return l},Jh:function(){return f},Ph:function(){return o},TP:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="0615932ba6624614d34d6b4b170fdaa2",i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/all/day?api_key=".concat(s));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.f3f6291d.chunk.js.map