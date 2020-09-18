/*! For license information please see bbfc3d72.237bc02a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[759],{1084:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(t),b=n,d=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return t?a.a.createElement(d,u(u({ref:r},l),{},{components:t})):a.a.createElement(d,u({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1085:function(e,r,t){"use strict";e.exports=t(1086)},1086:function(e,r,t){"use strict";var n=t(1087),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,u=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||v}function j(){}function k(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var _=k.prototype=new j;_.constructor=k,n(_,g.prototype),_.isPureReactComponent=!0;var S={current:null},w=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,r,t){var n,a={},c=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)w.call(r,n)&&!x.hasOwnProperty(n)&&(a[n]=r[n]);var i=arguments.length-2;if(1===i)a.children=t;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g,E=[];function $(e,r,t,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=r,a.func=t,a.context=n,a.count=0,a}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function q(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function R(e,r,t,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return t(n,e,""===r?"."+I(e,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=r+I(a=e[i],i);u+=R(a,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(a=e.next()).done;)u+=R(a=a.value,l=r+I(a,i++),t,n);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}function D(e,r,t){return null==e?0:R(e,"",r,t)}function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function T(e,r){e.func.call(e.context,r,e.count++)}function G(e,r,t){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?A(e,n,t,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+t)),n.push(e))}function A(e,r,t,n,a){var o="";null!=t&&(o=(""+t).replace(P,"$&/")+"/"),D(e,G,r=$(r,o,n,a)),q(r)}var F={current:null};function M(){var e=F.current;if(null===e)throw Error(h(321));return e}var U={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return A(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;D(e,T,r=$(null,null,r,t)),q(r)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var r=[];return A(e,r,null,(function(e){return e})),r},only:function(e){if(!C(e))throw Error(h(143));return e}},r.Component=g,r.Fragment=u,r.Profiler=l,r.PureComponent=k,r.StrictMode=i,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,r.cloneElement=function(e,r,t){if(null==e)throw Error(h(267,e));var a=n({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=S.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in r)w.call(r,p)&&!x.hasOwnProperty(p)&&(a[p]=void 0===r[p]&&void 0!==l?l[p]:r[p])}var p=arguments.length-2;if(1===p)a.children=t;else if(1<p){l=Array(p);for(var s=0;s<p;s++)l[s]=arguments[s+2];a.children=l}return{$$typeof:o,type:e.type,key:c,ref:u,props:a,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},r.createElement=N,r.createFactory=function(e){var r=N.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:f,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return M().useCallback(e,r)},r.useContext=function(e,r){return M().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return M().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return M().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return M().useLayoutEffect(e,r)},r.useMemo=function(e,r){return M().useMemo(e,r)},r.useReducer=function(e,r,t){return M().useReducer(e,r,t)},r.useRef=function(e){return M().useRef(e)},r.useState=function(e){return M().useState(e)},r.version="16.13.1"},1087:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,r){for(var t,u,i=c(e),l=1;l<arguments.length;l++){for(var p in t=Object(arguments[l]))a.call(t,p)&&(i[p]=t[p]);if(n){u=n(t);for(var s=0;s<u.length;s++)o.call(t,u[s])&&(i[u[s]]=t[u[s]])}}return i}},813:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(2),a=t(6),o=(t(1085),t(1084)),c={id:"_graphbackserver_",title:"GraphbackServer",sidebar_label:"GraphbackServer"},u={unversionedId:"api/graphql-serve/modules/_graphbackserver_",id:"api/graphql-serve/modules/_graphbackserver_",isDocsHomePage:!1,title:"GraphbackServer",description:"Index",source:"@site/../docs/api/graphql-serve/modules/_graphbackserver_.md",slug:"/api/graphql-serve/modules/_graphbackserver_",permalink:"/docs/next/api/graphql-serve/modules/_graphbackserver_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-serve/modules/_graphbackserver_.md",version:"current",sidebar_label:"GraphbackServer"},i=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"buildGraphbackServer",id:"buildgraphbackserver",children:[]}]}],l={rightToc:i};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"classes"},"Classes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver"}),"GraphbackServer"))),Object(o.b)("h3",{id:"interfaces"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder"}),"ServiceBuilder"))),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/modules/_graphbackserver_#buildgraphbackserver"}),"buildGraphbackServer"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"buildgraphbackserver"},"buildGraphbackServer"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"buildGraphbackServer"),"(",Object(o.b)("inlineCode",{parentName:"p"},"modelDir"),": string, ",Object(o.b)("inlineCode",{parentName:"p"},"dataSyncServeConfig"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-serve/interfaces/_runtime_.datasyncserveconfig"}),"DataSyncServeConfig"),"): ",Object(o.b)("em",{parentName:"p"},"Promise\u2039",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver"}),"GraphbackServer"),"\u203a")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphql-serve/src/GraphbackServer.ts#L105"}),"GraphbackServer.ts:105"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"modelDir")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"dataSyncServeConfig")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphql-serve/interfaces/_runtime_.datasyncserveconfig"}),"DataSyncServeConfig"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise\u2039",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver"}),"GraphbackServer"),"\u203a")))}p.isMDXComponent=!0}}]);