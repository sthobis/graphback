/*! For license information please see 97eb4af3.28131399.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1082:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=f(t),b=n,d=p["".concat(i,".").concat(b)]||p[b]||s[b]||c;return t?o.a.createElement(d,u(u({ref:r},l),{},{components:t})):o.a.createElement(d,u({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=b;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<c;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1083:function(e,r,t){"use strict";e.exports=t(1084)},1084:function(e,r,t){"use strict";var n=t(1085),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||v}function j(){}function _(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=_.prototype=new j;k.constructor=_,n(k,O.prototype),k.isPureReactComponent=!0;var S={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,o={},i=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(i=""+r.key),r)w.call(r,n)&&!C.hasOwnProperty(n)&&(o[n]=r[n]);var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:c,type:e,key:i,ref:u,props:o,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,R=[];function D(e,r,t,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function $(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case i:u=!0}}if(u)return t(n,e,""===r?"."+T(e,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=r+T(o=e[a],a);u+=$(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),a=0;!(o=e.next()).done;)u+=$(o=o.value,l=r+T(o,a++),t,n);else if("object"===o)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}function U(e,r,t){return null==e?0:$(e,"",r,t)}function T(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function I(e,r){e.func.call(e.context,r,e.count++)}function A(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?M(e,n,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,r){return{$$typeof:c,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),n.push(e))}function M(e,r,t,n,o){var c="";null!=t&&(c=(""+t).replace(E,"$&/")+"/"),U(e,A,r=D(r,c,n,o)),N(r)}var L={current:null};function q(){var e=L.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return M(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;U(e,I,r=D(null,null,r,t)),N(r)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var r=[];return M(e,r,null,(function(e){return e})),r},only:function(e){if(!x(e))throw Error(h(143));return e}},r.Component=O,r.Fragment=u,r.Profiler=l,r.PureComponent=_,r.StrictMode=a,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(h(267,e));var o=n({},e.props),i=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=S.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)w.call(r,f)&&!C.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:c,type:e.type,key:i,ref:u,props:o,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return q().useCallback(e,r)},r.useContext=function(e,r){return q().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return q().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return q().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return q().useLayoutEffect(e,r)},r.useMemo=function(e,r){return q().useMemo(e,r)},r.useReducer=function(e,r,t){return q().useReducer(e,r,t)},r.useRef=function(e){return q().useRef(e)},r.useState=function(e){return q().useState(e)},r.version="16.13.1"},1085:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,u,a=i(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(a[f]=t[f]);if(n){u=n(t);for(var p=0;p<u.length;p++)c.call(t,u[p])&&(a[u[p]]=t[u[p]])}}return a}},647:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),c=(t(1083),t(1082)),i={id:"_runtime_crudservice_.crudserviceconfig",title:"CRUDServiceConfig",sidebar_label:"CRUDServiceConfig"},u={unversionedId:"api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig",id:"api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig",isDocsHomePage:!1,title:"CRUDServiceConfig",description:"Configurations necessary to create a CRUDService",source:"@site/../docs/api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig.md",slug:"/api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig",permalink:"/docs/next/api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig.md",version:"current",sidebar_label:"CRUDServiceConfig"},a=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"crudOptions",id:"crudoptions",children:[]},{value:"<code>Optional</code> pubSub",id:"optional-pubsub",children:[]}]}],l={rightToc:a};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Configurations necessary to create a CRUDService"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CRUDServiceConfig"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig#crudoptions"}),"crudOptions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig#optional-pubsub"}),"pubSub"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"crudoptions"},"crudOptions"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"crudOptions"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig"}),"GraphbackCRUDGeneratorConfig"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/75fd336/packages/graphback-core/src/runtime/CRUDService.ts#L24"}),"packages/graphback-core/src/runtime/CRUDService.ts:24"))),Object(c.b)("p",null,"Model-specific CRUD configuration"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"optional-pubsub"},Object(c.b)("inlineCode",{parentName:"h3"},"Optional")," pubSub"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"pubSub"),"? : ",Object(c.b)("em",{parentName:"p"},"PubSubEngine")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/75fd336/packages/graphback-core/src/runtime/CRUDService.ts#L19"}),"packages/graphback-core/src/runtime/CRUDService.ts:19"))),Object(c.b)("p",null,"PubSub implementation for creating subscriptions"))}f.isMDXComponent=!0}}]);