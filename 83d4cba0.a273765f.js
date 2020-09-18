/*! For license information please see 83d4cba0.a273765f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{1084:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=o.a.createContext({}),f=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=f(e.components);return o.a.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),p=f(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||s[d]||c;return t?o.a.createElement(b,u(u({ref:n},a),{},{components:t})):o.a.createElement(b,u({ref:n},a))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var a=2;a<c;a++)i[a]=t[a];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1085:function(e,n,t){"use strict";e.exports=t(1086)},1086:function(e,n,t){"use strict";var r=t(1087),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,n,t){this.props=e,this.context=n,this.refs=O,this.updater=t||h}function v(){}function _(e,n,t){this.props=e,this.context=n,this.refs=O,this.updater=t||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var C=_.prototype=new v;C.constructor=_,r(C,j.prototype),C.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,o={},i=null,u=null;if(null!=n)for(r in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(i=""+n.key),n)w.call(n,r)&&!P.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){for(var a=Array(l),f=0;f<l;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:c,type:e,key:i,ref:u,props:o,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,N=[];function R(e,n,t,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function $(e,n,t,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case i:u=!0}}if(u)return t(r,e,""===n?"."+U(e,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var a=n+U(o=e[l],l);u+=$(o,a,t,r)}else if(null===e||"object"!=typeof e?a=null:a="function"==typeof(a=m&&e[m]||e["@@iterator"])?a:null,"function"==typeof a)for(e=a.call(e),l=0;!(o=e.next()).done;)u+=$(o=o.value,a=n+U(o,l++),t,r);else if("object"===o)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}function I(e,n,t){return null==e?0:$(e,"",n,t)}function U(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function T(e,n){e.func.call(e.context,n,e.count++)}function L(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?A(e,r,t,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,n){return{$$typeof:c,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),r.push(e))}function A(e,n,t,r,o){var c="";null!=t&&(c=(""+t).replace(E,"$&/")+"/"),I(e,L,n=R(n,c,r,o)),D(n)}var M={current:null};function G(){var e=M.current;if(null===e)throw Error(g(321));return e}var q={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:function(e,n,t){if(null==e)return e;var r=[];return A(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;I(e,T,n=R(null,null,n,t)),D(n)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var n=[];return A(e,n,null,(function(e){return e})),n},only:function(e){if(!S(e))throw Error(g(143));return e}},n.Component=j,n.Fragment=u,n.Profiler=a,n.PureComponent=_,n.StrictMode=l,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,n.cloneElement=function(e,n,t){if(null==e)throw Error(g(267,e));var o=r({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,l=x.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in n)w.call(n,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===n[f]&&void 0!==a?a[f]:n[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){a=Array(f);for(var p=0;p<f;p++)a[p]=arguments[p+2];o.children=a}return{$$typeof:c,type:e.type,key:i,ref:u,props:o,_owner:l}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:p,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:b,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return G().useCallback(e,n)},n.useContext=function(e,n){return G().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return G().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return G().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return G().useLayoutEffect(e,n)},n.useMemo=function(e,n){return G().useMemo(e,n)},n.useReducer=function(e,n,t){return G().useReducer(e,n,t)},n.useRef=function(e){return G().useRef(e)},n.useState=function(e){return G().useState(e)},n.version="16.13.1"},1087:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,n){for(var t,u,l=i(e),a=1;a<arguments.length;a++){for(var f in t=Object(arguments[a]))o.call(t,f)&&(l[f]=t[f]);if(r){u=r(t);for(var p=0;p<u.length;p++)c.call(t,u[p])&&(l[u[p]]=t[u[p]])}}return l}},564:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return f}));var r=t(2),o=t(6),c=(t(1085),t(1084)),i={id:"_index_",title:"index",sidebar_label:"index"},u={unversionedId:"api/graphback-codegen-client/modules/_index_",id:"api/graphback-codegen-client/modules/_index_",isDocsHomePage:!1,title:"index",description:"Index",source:"@site/../docs/api/graphback-codegen-client/modules/_index_.md",slug:"/api/graphback-codegen-client/modules/_index_",permalink:"/docs/next/api/graphback-codegen-client/modules/_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-client/modules/_index_.md",version:"current",sidebar_label:"index"},l=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"CLIENT_CRUD_PLUGIN",id:"client_crud_plugin",children:[]},{value:"ClientCRUDPlugin",id:"clientcrudplugin",children:[]},{value:"ClientDocument",id:"clientdocument",children:[]},{value:"ClientDocuments",id:"clientdocuments",children:[]},{value:"ClientGeneratorPluginConfig",id:"clientgeneratorpluginconfig",children:[]},{value:"Plugin",id:"plugin",children:[]}]}],a={rightToc:l};function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},a,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"references"},"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_index_#client_crud_plugin"}),"CLIENT_CRUD_PLUGIN")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_index_#clientcrudplugin"}),"ClientCRUDPlugin")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_index_#clientdocument"}),"ClientDocument")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_index_#clientdocuments"}),"ClientDocuments")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_index_#clientgeneratorpluginconfig"}),"ClientGeneratorPluginConfig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_index_#plugin"}),"Plugin"))),Object(c.b)("h2",{id:"references-1"},"References"),Object(c.b)("h3",{id:"client_crud_plugin"},"CLIENT_CRUD_PLUGIN"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"CLIENT_CRUD_PLUGIN"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"clientcrudplugin"},"ClientCRUDPlugin"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ClientCRUDPlugin"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"clientdocument"},"ClientDocument"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ClientDocument"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"clientdocuments"},"ClientDocuments"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ClientDocuments"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"clientgeneratorpluginconfig"},"ClientGeneratorPluginConfig"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ClientGeneratorPluginConfig"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"plugin"},"Plugin"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"Plugin"),":"))}f.isMDXComponent=!0}}]);