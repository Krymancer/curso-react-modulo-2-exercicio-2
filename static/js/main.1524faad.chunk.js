(this["webpackJsonpmodulo-1-exercicio-2"]=this["webpackJsonpmodulo-1-exercicio-2"]||[]).push([[0],{22:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(17),a=c.n(s),i=(c(22),c(8)),o=c(5),u=c.n(o),l=(c(41),c(6)),j=(c(42),c(0)),h=function(e){var t=e.title,c=e.author,n=e.url;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{icon:"ant-design:user-outlined"})," ",c]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{icon:"bx:bxs-book"})," ",t]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{icon:"il:url"})," ",n]})]})},d=u.a.create({baseURL:"https://hn.algolia.com/api/v1/"}),b=function(e,t,c){return d.request({method:e,url:t,params:c})},x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(i.a)(s,2),o=a[0],l=a[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Pesquisar"}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"searchContainer",children:[Object(j.jsx)("input",{className:"search",onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("button",{onClick:function(){var e={query:c};try{b("GET","search",e).then((function(e){var t=e.data.hits.map((function(e){return{title:e.title,author:e.author,url:e.url}}));l(t)}))}catch(t){if(!u.a.isCancel(t))throw t;console.log("Marvel API request got cancelled")}},children:"Search"})]}),Object(j.jsx)("div",{className:"results",children:o.map((function(e){return Object(j.jsx)(h,{author:e.author,title:e.title,url:e.url},e.title)}))})]})]})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1524faad.chunk.js.map