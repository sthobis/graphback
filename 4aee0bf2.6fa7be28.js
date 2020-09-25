/*! For license information please see 4aee0bf2.6fa7be28.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{1306:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(n),y=r,b=f["".concat(c,".").concat(y)]||f[y]||s[y]||a;return n?o.a.createElement(b,i(i({ref:t},p),{},{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1307:function(e,t,n){"use strict";e.exports=n(1308)},1308:function(e,t,n){"use strict";var r=n(1309),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,p=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function j(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||O}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var _=w.prototype=new v;_.constructor=w,r(_,j.prototype),_.isPureReactComponent=!0;var k={current:null},T=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)T.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var p=Array(u),l=0;l<u;l++)p[l]=arguments[l+2];o.children=p}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,C=[];function E(e,t,n,r){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function R(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case c:i=!0}}if(i)return n(r,e,""===t?"."+D(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=t+D(o=e[u],u);i+=R(o,p,n,r)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=m&&e[m]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),u=0;!(o=e.next()).done;)i+=R(o=o.value,p=t+D(o,u++),n,r);else if("object"===o)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function I(e,t,n){return null==e?0:R(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?W(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function W(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),I(e,A,t=E(t,a,r,o)),$(t)}var M={current:null};function L(){var e=M.current;if(null===e)throw Error(g(321));return e}var U={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return W(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,F,t=E(null,null,t,n)),$(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return W(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=i,t.Profiler=p,t.PureComponent=w,t.StrictMode=u,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var o=r({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(l in t)T.call(t,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==p?p[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){p=Array(l);for(var f=0;f<l;f++)p[f]=arguments[f+2];o.children=p}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return L().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,n){return L().useReducer(e,t,n)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},1309:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,u=c(e),p=1;p<arguments.length;p++){for(var l in n=Object(arguments[p]))o.call(n,l)&&(u[l]=n[l]);if(r){i=r(n);for(var f=0;f<i.length;f++)a.call(n,i[f])&&(u[i[f]]=n[i[f]])}}return u}},433:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(1307),n(1306)),c={id:"_definitions_copywrappingtype_",title:"definitions/copyWrappingType",sidebar_label:"definitions/copyWrappingType"},i={unversionedId:"api/graphback-codegen-schema/modules/_definitions_copywrappingtype_",id:"api/graphback-codegen-schema/modules/_definitions_copywrappingtype_",isDocsHomePage:!1,title:"definitions/copyWrappingType",description:"Index",source:"@site/../docs/api/graphback-codegen-schema/modules/_definitions_copywrappingtype_.md",slug:"/api/graphback-codegen-schema/modules/_definitions_copywrappingtype_",permalink:"/docs/next/api/graphback-codegen-schema/modules/_definitions_copywrappingtype_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-schema/modules/_definitions_copywrappingtype_.md",version:"current",sidebar_label:"definitions/copyWrappingType"},u=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"copyWrappingType",id:"copywrappingtype",children:[]}]}],p={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"functions"},"Functions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-schema/modules/_definitions_copywrappingtype_#copywrappingtype"}),"copyWrappingType"))),Object(a.b)("h2",{id:"functions-1"},"Functions"),Object(a.b)("h3",{id:"copywrappingtype"},"copyWrappingType"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"copyWrappingType"),"(",Object(a.b)("inlineCode",{parentName:"p"},"copyFromType"),": InputOrOutTypeType, ",Object(a.b)("inlineCode",{parentName:"p"},"copyToType"),": InputOrOutTypeType): ",Object(a.b)("em",{parentName:"p"},"InputOrOutTypeType")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2cb1bc/packages/graphback-codegen-schema/src/definitions/copyWrappingType.ts#L12"}),"graphback-codegen-schema/src/definitions/copyWrappingType.ts:12"))),Object(a.b)("p",null,"Copies the wrapping type(s) from one GraphQLType to another"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"copyFromType")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"InputOrOutTypeType"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Get the wrapping types from this type")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"copyToType")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"InputOrOutTypeType"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Add the wrapping types to this type")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"InputOrOutTypeType")))}l.isMDXComponent=!0}}]);