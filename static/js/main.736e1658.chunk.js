(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{18:function(t,e,a){t.exports=a(30)},23:function(t,e,a){},24:function(t,e,a){},30:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),l=a(14),o=a.n(l),r=a(6),i=a(1),m=(a(23),function(){return c.a.createElement("div",null,"This is a homepage")}),u=a(17),s=a(15),b=a.n(s),h=(a(24),function(t){var e=t.tabs,a=t.match,l=t.location,o=Object(n.useState)(!1),m=Object(u.a)(o,2),s=m[0],h=m[1];return Object(n.useEffect)((function(){var t=l.pathname.split("/"),a=t[t.length-1];e.find((function(t){return t.id===a}))?h(!1):h(!0)}),[l.pathname]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"This is a tabs page"),e.map((function(t){return c.a.createElement(r.b,{key:t.id,to:"".concat(a.path,"/").concat(t.id)},c.a.createElement("button",{className:b()({button:!0,button_active:l.pathname==="".concat(a.path,"/").concat(t.id)}),type:"button"},t.title))})),c.a.createElement(i.c,null," ",e.map((function(t){return c.a.createElement(i.a,{key:t.title,path:"".concat(a.path,"/").concat(t.id),exact:!0},c.a.createElement("div",{className:"content"},t.content))}))),s&&c.a.createElement("div",{className:"content"},"Please choose a tab"))}),p=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(r.b,{to:"/"},c.a.createElement("h1",null,"Home Page")),c.a.createElement(r.b,{to:"/tabs"},c.a.createElement("h1",null,"Tabs Page")),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:m}),c.a.createElement(i.a,{path:"/tabs",render:function(t){var e=t.match,a=t.location;return c.a.createElement(h,{tabs:p,match:e,location:a})}})))};o.a.render(c.a.createElement(r.a,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.736e1658.chunk.js.map