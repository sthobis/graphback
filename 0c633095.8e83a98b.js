(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1084:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var a=t(0),n=t.n(a);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),o=function(e){var r=n.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):b(b({},r),e)),t},u=function(e){var r=o(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(t),d=a,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||c;return t?n.a.createElement(m,b(b({ref:r},p),{},{components:t})):n.a.createElement(m,b({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=d;var b={};for(var l in r)hasOwnProperty.call(r,l)&&(b[l]=r[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var p=2;p<c;p++)i[p]=t[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},109:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return b})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return o}));var a=t(2),n=t(6),c=(t(0),t(1084)),i={id:"_graphbackserver_.servicebuilder",title:"ServiceBuilder",sidebar_label:"ServiceBuilder"},b={unversionedId:"api/graphql-serve/interfaces/_graphbackserver_.servicebuilder",id:"version-0.15.x/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder",isDocsHomePage:!1,title:"ServiceBuilder",description:"Hierarchy",source:"@site/versioned_docs/version-0.15.x/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder.md",slug:"/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder",permalink:"/docs/0.15.x/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder.md",version:"0.15.x",sidebar_label:"ServiceBuilder"},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],p={rightToc:l};function o(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ServiceBuilder"))),Object(c.b)("h2",{id:"callable"},"Callable"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"data"),": GraphbackDataProvider, ",Object(c.b)("inlineCode",{parentName:"p"},"sub"),": PubSub): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039GraphbackCRUDService\u203a | GraphbackCRUDService")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphql-serve/src/GraphbackServer.ts#L13"}),"GraphbackServer.ts:13"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphbackDataProvider")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"sub")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PubSub")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039GraphbackCRUDService\u203a | GraphbackCRUDService")))}o.isMDXComponent=!0}}]);