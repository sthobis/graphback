/*! For license information please see 5ffd9090.a82f587e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1082:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),l=function(e){var r=c.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return c.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},y=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),y=n,d=p["".concat(a,".").concat(y)]||p[y]||f[y]||o;return t?c.a.createElement(d,i(i({ref:r},s),{},{components:t})):c.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=y;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1083:function(e,r,t){"use strict";e.exports=t(1084)},1084:function(e,r,t){"use strict";var n=t(1085),c="function"==typeof Symbol&&Symbol.for,o=c?Symbol.for("react.element"):60103,a=c?Symbol.for("react.portal"):60106,i=c?Symbol.for("react.fragment"):60107,u=c?Symbol.for("react.strict_mode"):60108,s=c?Symbol.for("react.profiler"):60114,l=c?Symbol.for("react.provider"):60109,p=c?Symbol.for("react.context"):60110,f=c?Symbol.for("react.forward_ref"):60112,y=c?Symbol.for("react.suspense"):60113,d=c?Symbol.for("react.memo"):60115,b=c?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}function j(){}function _(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=_.prototype=new j;S.constructor=_,n(S,O.prototype),S.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,c={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)k.call(r,n)&&!P.hasOwnProperty(n)&&(c[n]=r[n]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g,D=[];function R(e,r,t,n){if(D.length){var c=D.pop();return c.result=e,c.keyPrefix=r,c.func=t,c.context=n,c.count=0,c}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function N(e,r,t,n){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return t(n,e,""===r?"."+U(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+U(c=e[u],u);i+=N(c,s,t,n)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=v&&e[v]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)i+=N(c=c.value,s=r+U(c,u++),t,n);else if("object"===c)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function T(e,r,t){return null==e?0:N(e,"",r,t)}function U(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function I(e,r){e.func.call(e.context,r,e.count++)}function A(e,r,t){var n=e.result,c=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?M(e,n,t,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,c+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),n.push(e))}function M(e,r,t,n,c){var o="";null!=t&&(o=(""+t).replace(E,"$&/")+"/"),T(e,A,r=R(r,o,n,c)),$(r)}var L={current:null};function q(){var e=L.current;if(null===e)throw Error(m(321));return e}var F={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return M(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;T(e,I,r=R(null,null,r,t)),$(r)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var r=[];return M(e,r,null,(function(e){return e})),r},only:function(e){if(!C(e))throw Error(m(143));return e}},r.Component=O,r.Fragment=i,r.Profiler=s,r.PureComponent=_,r.StrictMode=u,r.Suspense=y,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var c=n({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=w.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in r)k.call(r,l)&&!P.hasOwnProperty(l)&&(c[l]=void 0===r[l]&&void 0!==s?s[l]:r[l])}var l=arguments.length-2;if(1===l)c.children=t;else if(1<l){s=Array(l);for(var p=0;p<l;p++)s[p]=arguments[p+2];c.children=s}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:f,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return q().useCallback(e,r)},r.useContext=function(e,r){return q().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return q().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return q().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return q().useLayoutEffect(e,r)},r.useMemo=function(e,r){return q().useMemo(e,r)},r.useReducer=function(e,r,t){return q().useReducer(e,r,t)},r.useRef=function(e){return q().useRef(e)},r.useState=function(e){return q().useState(e)},r.version="16.13.1"},1085:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,r){for(var t,i,u=a(e),s=1;s<arguments.length;s++){for(var l in t=Object(arguments[s]))c.call(t,l)&&(u[l]=t[l]);if(n){i=n(t);for(var p=0;p<i.length;p++)o.call(t,i[p])&&(u[i[p]]=t[i[p]])}}return u}},437:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(2),c=t(6),o=(t(1083),t(1082)),a={id:"_services_createdatasyncservice_.createdatasynccrudserviceoptions",title:"CreateDataSyncCRUDServiceOptions",sidebar_label:"CreateDataSyncCRUDServiceOptions"},i={unversionedId:"api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions",id:"api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions",isDocsHomePage:!1,title:"CreateDataSyncCRUDServiceOptions",description:"Hierarchy",source:"@site/../docs/api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions.md",slug:"/api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions",permalink:"/docs/next/api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions.md",version:"current",sidebar_label:"CreateDataSyncCRUDServiceOptions",sidebar:"docs",previous:{title:"SyncList",permalink:"/docs/next/api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist"},next:{title:"DataSyncMongoDBDataProvider",permalink:"/docs/next/api/graphback-datasync/classes/_providers_datasyncmongodbdataprovider_.datasyncmongodbdataprovider"}},u=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"pubSub",id:"pubsub",children:[]}]}],s={rightToc:u};function l(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CreateDataSyncCRUDServiceOptions"))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions#pubsub"}),"pubSub"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"pubsub"},"pubSub"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"pubSub"),": ",Object(o.b)("em",{parentName:"p"},"PubSubEngine")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/75fd336/packages/graphback-datasync/src/services/createDataSyncService.ts#L11"}),"packages/graphback-datasync/src/services/createDataSyncService.ts:11"))),Object(o.b)("p",null,"PubSub implementation for creating subscriptions"))}l.isMDXComponent=!0}}]);