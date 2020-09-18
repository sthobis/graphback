/*! For license information please see c1d481a8.d9856f8e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[780],{1084:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1085:function(e,t,n){"use strict";e.exports=n(1086)},1086:function(e,t,n){"use strict";var r=n(1087),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var C=w.prototype=new v;C.constructor=w,r(C,j.prototype),C.isPureReactComponent=!0;var P={current:null},S=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,r)&&!N.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:P.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,E=[];function R(e,t,n,r){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return n(r,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+T(a=e[u],u);i+=$(a,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)i+=$(a=a.value,l=t+T(a,u++),n,r);else if("object"===a)throw n=""+e,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function U(e,t,n){return null==e?0:$(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(_,"$&/")+"/"),U(e,I,t=R(t,o,r,a)),D(t)}var L={current:null};function q(){var e=L.current;if(null===e)throw Error(y(321));return e}var G={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;U(e,A,t=R(null,null,t,n)),D(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(y(143));return e}},t.Component=j,t.Fragment=i,t.Profiler=l,t.PureComponent=w,t.StrictMode=u,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var a=r({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=P.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)S.call(t,s)&&!N.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},1087:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,u=c(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))a.call(n,s)&&(u[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(u[i[p]]=n[i[p]])}}return u}},834:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(1085),n(1084)),c={id:"crud-schema",title:"SchemaCRUD Plugin",sidebar_label:"SchemaCRUD"},i={unversionedId:"plugins/crud-schema",id:"plugins/crud-schema",isDocsHomePage:!1,title:"SchemaCRUD Plugin",description:"The SchemaCRUDPlugin plugin creates your GraphQL schema with all input types, Query, Mutation and Subscription fields following recommended patterns from GraphQL CRUD.",source:"@site/../docs/plugins/schema-crud-plugin.md",slug:"/plugins/crud-schema",permalink:"/docs/next/plugins/crud-schema",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/plugins/schema-crud-plugin.md",version:"current",sidebar_label:"SchemaCRUD",sidebar:"docs",previous:{title:"Plugins Overview",permalink:"/docs/next/plugins/overview"},next:{title:"ClientCRUD Plugin",permalink:"/docs/next/plugins/crud-client"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-codegen-schema/classes/_schemacrudplugin_.schemacrudplugin"}),Object(o.b)("inlineCode",{parentName:"a"},"SchemaCRUDPlugin"))," plugin creates your GraphQL schema with all input types, Query, Mutation and Subscription fields following recommended patterns from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQL CRUD"),".\nThe plugin also creates your CRUD resolvers to use with your GraphQL schema."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/codegen-schema\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"To use the plugin, add it to the ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," array in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../api/build-graphback-api#plugins"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const { schema, resolvers } = buildGraphbackAPI(modelDefs, {\n  dataProviderCreator: createKnexDbProvider(db),\n  plugins: [\n    // highlight-start\n    new SchemaCRUDPlugin({\n      outputPath: './src/schema/schema.graphql'\n    })\n    // highlight-end\n  ]\n});\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Unless you need the schema to be output to a file you don't need to install or configure it as Graphback will automatically execute it as the default plugin."))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Below is a full list of the available configuration options for this plugin."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"pluginConfig.outputPath")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Optional relative path to the schema file.",Object(o.b)("br",null)," Example: ",Object(o.b)("inlineCode",{parentName:"td"},'"/path/to/schema/schema.graphql"')),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"undefined"))))))}s.isMDXComponent=!0}}]);