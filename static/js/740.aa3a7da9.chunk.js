"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[740],{854:function(e,t,n){var r=n(154),a=n(184);t.Z=function(){return(0,a.jsx)(r.t3,{visible:!0,height:"80",width:"80",ariaLabel:"hourglass-loading",wrapperStyle:{},wrapperClass:"",colors:["#306cce","#72a1ed"]})}},510:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(689),a=n(87),u="MovieList_movieList__uFrOZ",c="MovieList_item__tDivI",s=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();return(0,s.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,r=e.original_title,u=e.name;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(a.rU,{state:{from:n},to:"/movies/".concat(t),children:r||u})},t)}))})}},740:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(87),o=n(854),f=n(510),p="Form_inputForm__wnZfX",l="Form_buttonForm__aSP9Y",v=n(184),h=function(e){var t=e.setSearchParams,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({query:u})},children:[(0,v.jsx)("input",{className:p,type:"text",name:"query",autoFocus:!0,value:u,onChange:function(e){var t=e.target.value;c(t)}}),(0,v.jsx)("button",{className:l,type:"submit",children:"Search"})]})},m=n(995),d=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,i.lr)(),l=(0,a.Z)(p,2),d=l[0],g=l[1],_=(0,s.useState)(!1),x=(0,a.Z)(_,2),Z=x[0],w=x[1];return(0,s.useEffect)((function(){var e=d.get("query");if(e){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,(0,m.Ph)(e);case 4:n=t.sent,u(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}}),[d]),(0,v.jsxs)("main",{children:[(0,v.jsx)(h,{setSearchParams:g}),Z&&(0,v.jsx)(o.Z,{}),n.length>0&&(0,v.jsx)(f.Z,{movies:n})]})}},995:function(e,t,n){n.d(t,{Hg:function(){return i},IQ:function(){return p},Jh:function(){return l},Ph:function(){return o},TP:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="0615932ba6624614d34d6b4b170fdaa2",i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=740.aa3a7da9.chunk.js.map