(this["webpackJsonpreact-basico"]=this["webpackJsonpreact-basico"]||[]).push([[0],{17:function(e,t,n){e.exports=n(34)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),l=n.n(r),u=(n(22),n(15)),o=n(3);n(23);function i(){return c.a.createElement("header",null,c.a.createElement("h2",null,"Dev Work Search"))}n(24);function s(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Te ajudamos a encontrar empresas de tecnologia na sua cidade!"),c.a.createElement("a",{href:"/list"},"Come\xe7ar"))}n(25);function m(){return c.a.createElement("div",{className:"background"},c.a.createElement(s,null))}function f(e){e.history;return c.a.createElement(m,null)}var p=n(6),E=n.n(p),d=n(12),h=n(16);n(27);function v(e){var t=e.data;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"header"},c.a.createElement("strong",null,t.name)),c.a.createElement("p",null,t.city),c.a.createElement("p",null,t.location),c.a.createElement("a",{href:"http://".concat(t.site)},"Acessar"))}n(28);function b(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){function e(){return(e=Object(d.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://project-js-api.herokuapp.com/api/get");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),r(n);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),c.a.createElement("div",{className:"list-container"},c.a.createElement("ul",{className:"list"},n.map(function(e){return c.a.createElement("li",{key:e._id},c.a.createElement(v,{data:e}))})))}function j(){return c.a.createElement(b,null)}var k=function(){return c.a.createElement(u.a,null,c.a.createElement(i,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:f}),c.a.createElement(o.a,{exact:!0,path:"/list",component:j})))};var g=function(){return c.a.createElement(k,null)};l.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.96a16709.chunk.js.map