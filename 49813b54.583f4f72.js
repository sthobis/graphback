/*! For license information please see 49813b54.583f4f72.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=b(r),g=a,h=u["".concat(i,".").concat(g)]||u[g]||s[g]||c;return r?n.a.createElement(h,p(p({ref:t},l),{},{components:r})):n.a.createElement(h,p({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<c;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1084:function(e,t,r){"use strict";e.exports=r(1085)},1085:function(e,t,r){"use strict";var a=r(1086),n="function"==typeof Symbol&&Symbol.for,c=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,p=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,b=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.forward_ref"):60112,g=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,f=n?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function k(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var N=v.prototype=new y;N.constructor=v,a(N,k.prototype),N.isPureReactComponent=!0;var _={current:null},P=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,n={},i=null,p=null;if(null!=t)for(a in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,a)&&!w.hasOwnProperty(a)&&(n[a]=t[a]);var o=arguments.length-2;if(1===o)n.children=r;else if(1<o){for(var l=Array(o),b=0;b<o;b++)l[b]=arguments[b+2];n.children=l}if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===n[a]&&(n[a]=o[a]);return{$$typeof:c,type:e,key:i,ref:p,props:n,_owner:_.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var C=/\/+/g,S=[];function G(e,t,r,a){if(S.length){var n=S.pop();return n.result=e,n.keyPrefix=t,n.func=r,n.context=a,n.count=0,n}return{result:e,keyPrefix:t,func:r,context:a,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function $(e,t,r,a){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var p=!1;if(null===e)p=!0;else switch(n){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case c:case i:p=!0}}if(p)return r(a,e,""===t?"."+M(e,0):t),1;if(p=0,t=""===t?".":t+":",Array.isArray(e))for(var o=0;o<e.length;o++){var l=t+M(n=e[o],o);p+=$(n,l,r,a)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),o=0;!(n=e.next()).done;)p+=$(n=n.value,l=t+M(n,o++),r,a);else if("object"===n)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return p}function D(e,t,r){return null==e?0:$(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var a=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,a,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),a.push(e))}function A(e,t,r,a,n){var c="";null!=r&&(c=(""+r).replace(C,"$&/")+"/"),D(e,L,t=G(t,c,a,n)),R(t)}var I={current:null};function U(){var e=I.current;if(null===e)throw Error(d(321));return e}var q={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,r){if(null==e)return e;var a=[];return A(e,a,null,t,r),a},forEach:function(e,t,r){if(null==e)return e;D(e,T,t=G(null,null,t,r)),R(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(d(143));return e}},t.Component=k,t.Fragment=p,t.Profiler=l,t.PureComponent=v,t.StrictMode=o,t.Suspense=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var n=a({},e.props),i=e.key,p=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(p=t.ref,o=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(b in t)P.call(t,b)&&!w.hasOwnProperty(b)&&(n[b]=void 0===t[b]&&void 0!==l?l[b]:t[b])}var b=arguments.length-2;if(1===b)n.children=r;else if(1<b){l=Array(b);for(var u=0;u<b;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:c,type:e.type,key:i,ref:p,props:n,_owner:o}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:f,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1086:function(e,t,r){"use strict";var a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var r,p,o=i(e),l=1;l<arguments.length;l++){for(var b in r=Object(arguments[l]))n.call(r,b)&&(o[b]=r[b]);if(a){p=a(r);for(var u=0;u<p.length;u++)c.call(r,p[u])&&(o[p[u]]=r[p[u]])}}return o}},345:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(6),c=(r(1084),r(1083)),i={id:"_plugin_graphbackpluginengine_.graphbackpluginengine",title:"GraphbackPluginEngine",sidebar_label:"GraphbackPluginEngine"},p={unversionedId:"api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine",id:"api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine",isDocsHomePage:!1,title:"GraphbackPluginEngine",description:"Allows to execute chain of plugins that create resources.",source:"@site/../docs/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine.md",slug:"/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine",permalink:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine.md",version:"current",sidebar_label:"GraphbackPluginEngine"},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Private</code> metadata",id:"private-metadata",children:[]},{value:"<code>Private</code> plugins",id:"private-plugins",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"<code>Private</code> createResolvers",id:"private-createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"<code>Private</code> createSchema",id:"private-createschema",children:[]},{value:"registerPlugin",id:"registerplugin",children:[]}]}],l={rightToc:o};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Allows to execute chain of plugins that create resources.\nCommon use case is to decorate GraphQL schema with additional\nactions and generate files like resolvers and database access logic"),Object(c.b)("p",null,"Usage:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const engine = GraphbackPluginEngine({ schema });\nengine.registerPlugin(plugin);\nprintSchema(engine.createResources());\n")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackPluginEngine"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#private-metadata"}),"metadata")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#private-plugins"}),"plugins"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#private-createresolvers"}),"createResolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#createresources"}),"createResources")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#private-createschema"}),"createSchema")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#registerplugin"}),"registerPlugin"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new GraphbackPluginEngine"),"(",Object(c.b)("inlineCode",{parentName:"p"},"__namedParameters"),": object): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine"}),"GraphbackPluginEngine"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L29"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:29"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackglobalconfig_.graphbackglobalconfig"}),"GraphbackGlobalConfig"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"plugins")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin"}),"GraphbackPlugin"),"\u2039\u203a[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|"," GraphQLSchema\u2039\u203a")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine"}),"GraphbackPluginEngine"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"private-metadata"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," metadata"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"metadata"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L29"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:29"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-plugins"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," plugins"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"plugins"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin"}),"GraphbackPlugin"),"[]")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L28"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:28"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"private-createresolvers"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," createResolvers"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResolvers"),"(): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L80"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:80"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createresources"},"createResources"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResources"),"(): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L54"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:54"))),Object(c.b)("p",null,"Allows the transformation of schema by applying transformation logic for each plugin\nCreation of resolvers, which has to come after all the changes in schema have been applied\nSaving of the transformed schema and related files"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-createschema"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," createSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createSchema"),"(): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L71"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:71"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"registerplugin"},"registerPlugin"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"registerPlugin"),"(...",Object(c.b)("inlineCode",{parentName:"p"},"plugins"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin"}),"GraphbackPlugin"),"[]): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L45"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:45"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"...plugins")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin"}),"GraphbackPlugin"),"[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")))}b.isMDXComponent=!0}}]);