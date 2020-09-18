(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(h,c(c({ref:t},p),{},{components:r})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1092:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diagramsmall-86366b66395bdeb97f55903cbd515788.png"},1103:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/sourcecode-b40e20a9cbf96a023f031e2b01d3d5b2.png"},254:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(1084)),i={id:"gettingstarted",title:"Introduction to Graphback",sidebar_label:"What is Graphback"},c={unversionedId:"gettingstarted",id:"version-0.12.x/gettingstarted",isDocsHomePage:!1,title:"Introduction to Graphback",description:"Graphback is a package and CLI tool that can help you bootstrap a GraphQL server and client.",source:"@site/versioned_docs/version-0.12.x/gettingstarted.md",slug:"/gettingstarted",permalink:"/docs/0.12.x/gettingstarted",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/gettingstarted.md",version:"0.12.x",sidebar_label:"What is Graphback",sidebar:"version-0.12.x/docs",next:{title:"Create client and server application from template",permalink:"/docs/0.12.x/intro/quickstart"}},l=[{value:"What Graphback can do for you?",id:"what-graphback-can-do-for-you",children:[]}],p={rightToc:l};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback is a package and CLI tool that can help you bootstrap a GraphQL server and client.\nGraphback can help you to focus on your data and remove all boilerplate related with the wider adoption of GraphQL."),Object(o.b)("p",null,"Graphback provides tooling for generating fully functional backend and client-side code, on top of your existing application. It helps developers prototype applications by generating source code and reducing the GraphQL boilerplate on the server and the client."),Object(o.b)("p",null,"Focus more on delivering business value by using the GraphQL schema to describe the shape of your data graph.\nAll you need to do with Graphback is to specify your data as GraphQL Types:"),Object(o.b)("img",{src:"/img/d1.png",width:"50%",height:"50%"}),Object(o.b)("p",null,"GraphQL Types annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"@model")," will be processed by Graphback to give you fully functional backend and client side\nqueries that follow Graphback CRUD specification.\nGraphback will work with your current GraphQL enabled Node.js application or can help you to create new one."),Object(o.b)("p",null,Object(o.b)("img",{src:r(1092).default})),Object(o.b)("h2",{id:"what-graphback-can-do-for-you"},"What Graphback can do for you?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generate CRUD based client side queries, schema and Node.JS resolvers for your input model"),Object(o.b)("li",{parentName:"ul"},"Support additional use cases by variety of community plugins"),Object(o.b)("li",{parentName:"ul"},"Migrate your database to work with your data model and changes in schema"),Object(o.b)("li",{parentName:"ul"},"Create your backend with CRUD API without code thanks to graphql-serve")),Object(o.b)("p",null,Object(o.b)("img",{src:r(1103).default})))}s.isMDXComponent=!0}}]);