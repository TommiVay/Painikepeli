(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,n){e.exports=n(40)},4:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=n(2),l=n.n(i),u=n(5),s=n(3),m=(n(4),function(e){var t=e.points,n=e.handleClick;return t<1?null:r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){return n()}},"Click!"))}),d=n(16),f=n.n(d),h={addClick:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/clicks/add");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},p=function(e){var t=e.clicks,n=e.points;return t?r.a.createElement("div",null,r.a.createElement("h1",null,"Your points: ",n),r.a.createElement("h1",null,"Next win in ",t," clicks!")):r.a.createElement("div",null,r.a.createElement("h1",null,"Your points: ",n))},v=function(e){var t=e.notification;return t?r.a.createElement("div",{className:"notification"},t):null},w=function(e){var t=e.points,n=e.restartHandler,a=e.theme;if(t>0)return null;var c={color:"day"===a?"white":"#121212",background:"day"===a?"#121212":"white"};return r.a.createElement("div",null,r.a.createElement("button",{style:c,className:"restartbtn",onClick:n},"Restart"))},E=function(e){var t=e.points,n=e.theme;if(t>0)return null;var a={color:"day"===n?"black":"white"};return r.a.createElement("div",{style:a,className:"notification"},"You have run out of points!")},b=function(e){var t=e.toggleTheme,n=e.theme,a={color:"day"===n?"white":"black",backgroundColor:"day"===n?"#121212":"white"};return r.a.createElement("div",null,r.a.createElement("button",{style:a,className:"themeButton",onClick:t},"Switch theme"))};var g=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(s.a)(o,2),d=i[0],f=i[1],g=Object(a.useState)(null),k=Object(s.a)(g,2),y=k[0],C=k[1],S=Object(a.useState)("day"),j=Object(s.a)(S,2),O=j[0],N=j[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("points"),t=window.localStorage.getItem("theme");t&&N(t),e?c(window.localStorage.getItem("points")):x()}),[]);var I=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.addClick();case 2:t=e.sent,window.localStorage.setItem("points",n-1+t.win),c(n-1+t.win),C(t.clicksToWin),0!==t.win&&(a="You won ".concat(t.win," points!"),f(a),setTimeout((function(){return f(null)}),2e3));case 7:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){c(20),window.localStorage.setItem("points",20)};return r.a.createElement("div",{className:"container",style:{background:"night"===O?"#121212":"#fff",color:"night"===O?"#fff":"#121212"}},r.a.createElement("div",{className:"topContainer"},r.a.createElement(v,{notification:d}),r.a.createElement(E,{points:n,theme:O}),r.a.createElement(b,{toggleTheme:function(){"day"===O?(window.localStorage.setItem("theme","night"),N("night")):(window.localStorage.setItem("theme","day"),N("day"))},theme:O})),r.a.createElement("div",{className:"centerContainer"},r.a.createElement(m,{points:n,handleClick:I}),r.a.createElement(w,{points:n,restartHandler:x,theme:O})),r.a.createElement("div",{className:"bottomContainer"},r.a.createElement(p,{clicks:y,points:n})))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e796f62c.chunk.js.map