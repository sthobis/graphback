/*! For license information please see bdc62fbd.e0922b04.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[763],{1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),b=n,m=f["".concat(i,".").concat(b)]||f[b]||s[b]||a;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1085:function(e,t,r){"use strict";e.exports=r(1086)},1086:function(e,t,r){"use strict";var n=r(1087),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,p=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function v(){}function _(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var w=_.prototype=new v;w.constructor=_,n(w,j.prototype),w.isPureReactComponent=!0;var N={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){for(var u=Array(p),l=0;l<p;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===o[n]&&(o[n]=p[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:N.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,E=[];function q(e,t,r,n){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function R(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return r(n,e,""===t?"."+D(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=t+D(o=e[p],p);c+=R(o,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),p=0;!(o=e.next()).done;)c+=R(o=o.value,u=t+D(o,p++),r,n);else if("object"===o)throw r=""+e,Error(O(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function T(e,t,r){return null==e?0:R(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(C,"$&/")+"/"),T(e,A,t=q(t,a,n,o)),$(t)}var M={current:null};function U(){var e=M.current;if(null===e)throw Error(O(321));return e}var F={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,I,t=q(null,null,t,r)),$(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(O(143));return e}},t.Component=j,t.Fragment=c,t.Profiler=u,t.PureComponent=_,t.StrictMode=p,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(O(267,e));var o=n({},e.props),i=e.key,c=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,p=N.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)S.call(t,l)&&!x.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1087:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,p=i(e),u=1;u<arguments.length;u++){for(var l in r=Object(arguments[u]))o.call(r,l)&&(p[l]=r[l]);if(n){c=n(r);for(var f=0;f<c.length;f++)a.call(r,c[f])&&(p[c[f]]=r[c[f]])}}return p}},817:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(1085),r(1084)),i={id:"_diff_operation_.tablecommentsetoperation",title:"TableCommentSetOperation",sidebar_label:"TableCommentSetOperation"},c={unversionedId:"api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation",id:"api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation",isDocsHomePage:!1,title:"TableCommentSetOperation",description:"Hierarchy",source:"@site/../docs/api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation.md",slug:"/api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation",permalink:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation.md",version:"current",sidebar_label:"TableCommentSetOperation"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"comment",id:"comment",children:[]},{value:"priority",id:"priority",children:[]},{value:"table",id:"table",children:[]},{value:"type",id:"type",children:[]}]}],u={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"TableCommentSetOperation")))),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation#comment"}),"comment")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation#priority"}),"priority")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation#table"}),"table")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation#type"}),"type"))),Object(a.b)("h2",{id:"properties-1"},"Properties"),Object(a.b)("h3",{id:"comment"},"comment"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"comment"),": ",Object(a.b)("em",{parentName:"p"},"string | undefined")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphql-migrations/src/diff/Operation.ts#L46"}),"diff/Operation.ts:46"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"priority"},"priority"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"priority"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation#priority"}),"priority"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphql-migrations/src/diff/Operation.ts#L23"}),"diff/Operation.ts:23"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"table"},"table"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"table"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphql-migrations/src/diff/Operation.ts#L45"}),"diff/Operation.ts:45"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"type"),": ",Object(a.b)("em",{parentName:"p"},'"table.comment.set"')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Overrides ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation#type"}),"type"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphql-migrations/src/diff/Operation.ts#L44"}),"diff/Operation.ts:44"))))}l.isMDXComponent=!0}}]);