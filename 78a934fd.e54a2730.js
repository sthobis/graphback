/*! For license information please see 78a934fd.e54a2730.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1085:function(e,t,r){"use strict";e.exports=r(1086)},1086:function(e,t,r){"use strict";var n=r(1087),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=w.prototype=new j;k.constructor=w,n(k,O.prototype),k.isPureReactComponent=!0;var P={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:P.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g,G=[];function R(e,t,r,n){if(G.length){var o=G.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>G.length&&G.push(e)}function $(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return r(n,e,""===t?"."+D(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+D(o=e[u],u);c+=$(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(o=e.next()).done;)c+=$(o=o.value,l=t+D(o,u++),r,n);else if("object"===o)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function N(e,t,r){return null==e?0:$(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function Q(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(_,"$&/")+"/"),N(e,I,t=R(t,a,n,o)),L(t)}var T={current:null};function U(){var e=T.current;if(null===e)throw Error(m(321));return e}var q={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;N(e,Q,t=R(null,null,t,r)),L(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=c,t.Profiler=l,t.PureComponent=w,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var o=n({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=P.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)S.call(t,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1087:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=i(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(u[s]=r[s]);if(n){c=n(r);for(var p=0;p<c.length;p++)a.call(r,c[p])&&(u[c[p]]=r[c[p]])}}return u}},1129:function(e,t,r){e.exports=r.p+"assets/images/diagramsmall-e05f3259b7a8047af683d03b5b537348.png"},525:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(1085),r(1084)),i={id:"introduction",title:"Why use Graphback?",sidebar_label:"Why use Graphback?"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Why use Graphback?",description:"Graphback simplifies application development by generating a production-ready API from data models to access data from one or more data sources. Graphback uses GraphQL and GraphQLCRUD to make it easy to get the data you need, and follows the convention over configuration paradigm to to reduce the amount of setup and boilerplate costs associated with creating GraphQL applications.",source:"@site/../docs/intro-to-graphback.md",slug:"/introduction",permalink:"/docs/next/introduction",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/intro-to-graphback.md",version:"current",sidebar_label:"Why use Graphback?",sidebar:"docs",next:{title:"Creating a new application",permalink:"/docs/next/getting-started/create-new-app"}},u=[{value:"Benefits",id:"benefits",children:[{value:"Focus on your data",id:"focus-on-your-data",children:[]},{value:"Database migrations",id:"database-migrations",children:[]},{value:"Easy to extend",id:"easy-to-extend",children:[]}]},{value:"How it works",id:"how-it-works",children:[]}],l={rightToc:u};function s(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Graphback simplifies application development by generating a production-ready API from data models to access data from one or more data sources. Graphback uses ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org"}),"GraphQL")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD")," to make it easy to get the data you need, and follows the convention over configuration paradigm to to reduce the amount of setup and boilerplate costs associated with creating GraphQL applications."),Object(a.b)("p",null,"Graphback provides a number of independent, interoperable libraries and tools to create and develop modern applications.\nWith Graphback you can build and deploy a scalable data-driven GraphQL API, complete with real-time updates and data synchronization capabilities, using either a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/databases/mongodb"}),"MongoDB")," or ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/databases/postgres"}),"PostgreSQL")," database which is automatically created from your GraphQL schema.\nGraphback can also create client-side GraphQL documents for your mobile or web app, bootstrapping your entire application instantly."),Object(a.b)("h2",{id:"benefits"},"Benefits"),Object(a.b)("h3",{id:"focus-on-your-data"},"Focus on your data"),Object(a.b)("p",null,"Graphback bootstraps your entire application using the types described in your GraphQL schema to instantly create an API with data sources and a ready-to-use CRUD implementation of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD"),"."),Object(a.b)("p",null,"This enables you to spend more time focusing on your data to deliver the core business value of your application or service."),Object(a.b)("h3",{id:"database-migrations"},"Database migrations"),Object(a.b)("p",null,"For PostgreSQL users, ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/graphql-migrations/intro"}),"GraphQL Migrations")," can migrate your database schema to match the data described in your GraphQL schema."),Object(a.b)("h3",{id:"easy-to-extend"},"Easy to extend"),Object(a.b)("p",null,"Graphback was designed to work with your existing GraphQL API as well as for greenfield projects. Graphback also has its own plugin system, so you can create your own plugins or use some of the community plugins that are available."),Object(a.b)("h2",{id:"how-it-works"},"How it works"),Object(a.b)("p",null,Object(a.b)("img",{src:r(1129).default})),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Graphback uses your data models, written as GraphQL types, to instantly build a GraphQL CRUD API.")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String!\n}\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Next, choose one of the Graphback supported data sources.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Start your application."))))}s.isMDXComponent=!0}}]);