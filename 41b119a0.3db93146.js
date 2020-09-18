(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1084:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},g=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(t),g=n,m=s["".concat(i,".").concat(g)]||s[g]||u[g]||c;return t?a.a.createElement(m,o(o({ref:r},b),{},{components:t})):a.a.createElement(m,o({ref:r},b))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=g;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},314:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(6),c=(t(0),t(1084)),i={id:"_components_generate_.graphbackcliconfig",title:"GraphbackCLIConfig",sidebar_label:"GraphbackCLIConfig"},o={unversionedId:"api/graphback-cli/interfaces/_components_generate_.graphbackcliconfig",id:"version-0.16.x/api/graphback-cli/interfaces/_components_generate_.graphbackcliconfig",isDocsHomePage:!1,title:"GraphbackCLIConfig",description:"Hierarchy",source:"@site/versioned_docs/version-0.16.x/api/graphback-cli/interfaces/_components_generate_.graphbackcliconfig.md",slug:"/api/graphback-cli/interfaces/_components_generate_.graphbackcliconfig",permalink:"/docs/api/graphback-cli/interfaces/_components_generate_.graphbackcliconfig",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-cli/interfaces/_components_generate_.graphbackcliconfig.md",version:"0.16.x",sidebar_label:"GraphbackCLIConfig"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"crud",id:"crud",children:[]},{value:"model",id:"model",children:[]},{value:"plugins",id:"plugins",children:[]}]}],b={rightToc:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackCLIConfig"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-cli/interfaces/_components_generate_.graphbackcliconfig#crud"}),"crud")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-cli/interfaces/_components_generate_.graphbackcliconfig#model"}),"model")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-cli/interfaces/_components_generate_.graphbackcliconfig#plugins"}),"plugins"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"crud"},"crud"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"crud"),": ",Object(c.b)("em",{parentName:"p"},"GraphbackCRUDGeneratorConfig")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-cli/src/components/generate.ts#L11"}),"components/generate.ts:11"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"model"},"model"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"model"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-cli/src/components/generate.ts#L10"}),"components/generate.ts:10"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"plugins"},"plugins"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"plugins"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-cli/src/components/generate.ts#L12"}),"components/generate.ts:12"))))}l.isMDXComponent=!0}}]);