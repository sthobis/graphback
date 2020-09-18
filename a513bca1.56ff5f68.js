(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{1084:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),d=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||s[u]||a;return n?o.a.createElement(f,i(i({ref:t},b),{},{components:n})):o.a.createElement(f,i({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<a;b++)l[b]=n[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},707:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(1084)),l={id:"_plugin_getselectedfieldsfromresolverinfo_",title:"plugin/getSelectedFieldsFromResolverInfo",sidebar_label:"plugin/getSelectedFieldsFromResolverInfo"},i={unversionedId:"api/graphback-core/modules/_plugin_getselectedfieldsfromresolverinfo_",id:"version-0.15.x/api/graphback-core/modules/_plugin_getselectedfieldsfromresolverinfo_",isDocsHomePage:!1,title:"plugin/getSelectedFieldsFromResolverInfo",description:"Index",source:"@site/versioned_docs/version-0.15.x/api/graphback-core/modules/_plugin_getselectedfieldsfromresolverinfo_.md",slug:"/api/graphback-core/modules/_plugin_getselectedfieldsfromresolverinfo_",permalink:"/docs/0.15.x/api/graphback-core/modules/_plugin_getselectedfieldsfromresolverinfo_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-core/modules/_plugin_getselectedfieldsfromresolverinfo_.md",version:"0.15.x",sidebar_label:"plugin/getSelectedFieldsFromResolverInfo"},c=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> getSelectedFieldsFromResolverInfo",id:"const-getselectedfieldsfromresolverinfo",children:[]}]}],b={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"functions"},"Functions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/modules/_plugin_getselectedfieldsfromresolverinfo_#const-getselectedfieldsfromresolverinfo"}),"getSelectedFieldsFromResolverInfo"))),Object(a.b)("h2",{id:"functions-1"},"Functions"),Object(a.b)("h3",{id:"const-getselectedfieldsfromresolverinfo"},Object(a.b)("inlineCode",{parentName:"h3"},"Const")," getSelectedFieldsFromResolverInfo"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"getSelectedFieldsFromResolverInfo"),"(",Object(a.b)("inlineCode",{parentName:"p"},"info"),": GraphQLResolveInfo, ",Object(a.b)("inlineCode",{parentName:"p"},"model"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),", ",Object(a.b)("inlineCode",{parentName:"p"},"path?"),": string): ",Object(a.b)("em",{parentName:"p"},"string[]")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/getSelectedFieldsFromResolverInfo.ts#L18"}),"packages/graphback-core/src/plugin/getSelectedFieldsFromResolverInfo.ts:18"))),Object(a.b)("p",null,"Find selectable fields from resolve info for a given model starting on a given path"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"info")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the resolver info object")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"model")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the model to find the fields from")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"path?")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the root path to start field resolution from.")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"string[]")))}d.isMDXComponent=!0}}]);