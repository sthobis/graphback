/*! For license information please see cf37930e.e441e5f0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[834],{1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(l,".").concat(b)]||p[b]||f[b]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1085:function(e,t,r){"use strict";e.exports=r(1086)},1086:function(e,t,r){"use strict";var n=r(1087),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,l=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var k={current:null},x=Object.prototype.hasOwnProperty,q={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,a={},l=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,n)&&!q.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:k.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g,C=[];function D(e,t,r,n){if(C.length){var a=C.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function G(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case l:c=!0}}if(c)return r(n,e,""===t?"."+L(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var s=t+L(a=e[i],i);c+=G(a,s,r,n)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=m&&e[m]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),i=0;!(a=e.next()).done;)c+=G(a=a.value,s=t+L(a,i++),r,n);else if("object"===a)throw r=""+e,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function $(e,t,r){return null==e?0:G(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?Q(e,n,r,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function Q(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(P,"$&/")+"/"),$(e,T,t=D(t,o,n,a)),_(t)}var A={current:null};function I(){var e=A.current;if(null===e)throw Error(g(321));return e}var U={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return Q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;$(e,R,t=D(null,null,t,r)),_(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return Q(e,t,null,(function(e){return e})),t},only:function(e){if(!N(e))throw Error(g(143));return e}},t.Component=O,t.Fragment=c,t.Profiler=s,t.PureComponent=w,t.StrictMode=i,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error(g(267,e));var a=n({},e.props),l=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=k.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)x.call(t,u)&&!q.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:o,type:e.type,key:l,ref:c,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return I().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,r){return I().useReducer(e,t,r)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="16.13.1"},1087:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,c,i=l(e),s=1;s<arguments.length;s++){for(var u in r=Object(arguments[s]))a.call(r,u)&&(i[u]=r[u]);if(n){c=n(r);for(var p=0;p<c.length;p++)o.call(r,c[p])&&(i[c[p]]=r[c[p]])}}return i}},890:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(1085),r(1084)),l={id:"index",title:"graphql-serve",sidebar_label:"README"},c={unversionedId:"api/graphql-serve/index",id:"api/graphql-serve/index",isDocsHomePage:!1,title:"graphql-serve",description:"Graphback",source:"@site/../docs/api/graphql-serve/index.md",slug:"/api/graphql-serve/index",permalink:"/docs/next/api/graphql-serve/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-serve/index.md",version:"current",sidebar_label:"README"},i=[{value:"Graphback",id:"graphback",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"Extension to GraphQL TestX",id:"extension-to-graphql-testx",children:[]}],s={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"graphback"},"Graphback"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(o.b)("br",null),"Auto generate database structure, ",Object(o.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Documentation"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev"),"\n",Object(o.b)("strong",{parentName:"p"},"Repository"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(o.b)("h1",{id:"graphql-serve"},"graphql-serve"),Object(o.b)("p",null,"Fully functional GraphQL Server based on Graphback CRUD Specification"),Object(o.b)("p",null,"graphql-serve is a full-featured GraphQL server, based on\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev/"}),"Graphback")," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/"}),"Apollo Server"),". With the\nminimum configuration required, you have a server ready for testing GraphQL\nclient applications or libraries. Unlike mocking alternatives, graphql-serve\noffers persistent data between queries and mutation using in-memory SQLite\ndatabase."),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"Using npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install -g graphql-serve\n")),Object(o.b)("p",null,"or yarn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add graphql-serve\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("h4",{id:"gqlserve"},"gqlserve"),Object(o.b)("p",null,"The gqlserve command only needs one or more ",Object(o.b)("inlineCode",{parentName:"p"},"*.graphql")," data model file(s) in order to setup a working GraphQL server. Here is an example model file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  likes: Int\n}\n')),Object(o.b)("p",null,"Assuming you have created your various ",Object(o.b)("inlineCode",{parentName:"p"},"*.graphql")," data model files in the ",Object(o.b)("inlineCode",{parentName:"p"},"models")," directory, to automatically generate resolvers and start a GraphQL server listening on port 8080 do the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve serve models --port=8080\n")),Object(o.b)("p",null,"If you only need to see the generated GraphQL Schema, use the ",Object(o.b)("inlineCode",{parentName:"p"},"print-schema")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve print-schema .\n")),Object(o.b)("p",null,"The above command prints schema generated from data model files in the current directory."),Object(o.b)("p",null,"This information is also provided with the command itself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve -h\ngqlserve <command>\n\nCommands:\n  gqlserve print-schema [modelDir]     Generate and print GraphQL schema from data\n                                   model files\n  gqlserve serve [modelDir] [options]  Generate and start GraphQL server from data\n                                   model files\n\nOptions:\n  -h, --help     Show help                                             [boolean]\n  -v, --version  Show version number                                   [boolean]\n")),Object(o.b)("p",null,"For the ",Object(o.b)("inlineCode",{parentName:"p"},"serve")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve serve -h\ngqlserve serve [modelDir] [options]\n\nGenerate and start GraphQL server from data model files\n\nPositionals:\n  modelDir, model  Directory to search for data models                  [string]\n\nOptions:\n  --port, -p        Specify the port on which to listen on              [number]\n  --datasync, --ds  Enable datasynchronization features                [boolean]\n  -h, --help        Show help                                          [boolean]\n  -v, --version     Show version number                                [boolean]\n\nExamples:\n  gqlserve serve . -p 8080  generate schema from data model files in current\n                            directory and start GraphQL server on port 8080\n")),Object(o.b)("p",null,"Also for ",Object(o.b)("inlineCode",{parentName:"p"},"print-schema")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve print-schema -h\ngqlserve print-schema [modelDir]\n\nGenerate and print GraphQL schema from data model files\n\nPositionals:\n  modelDir, model  Directory to search for data models                  [string]\n\nOptions:\n  -h, --help     Show help                                             [boolean]\n  -v, --version  Show version number                                   [boolean]\n\nExamples:\n  gqlserve print-schema modelDir  only display generated schema from data model\n                              files in modelDir directory and quit\n")),Object(o.b)("p",null,"Under to hood we use Graphback to parse the Type Definitions/Data Model and\ngenerate the GraphQL schema and resolvers. See the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev/docs/datamodel"}),"Graphback Docs on Data Model Definition")," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev/docs/next/datasync/datasync-intro"}),"Data Synchronization")," for data synchronization\nfeatures."),Object(o.b)("h2",{id:"extension-to-graphql-testx"},"Extension to GraphQL TestX"),Object(o.b)("p",null,"GraphQL serve is based on GraphQL-TestX:\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphql-testx"}),"https://github.com/aerogear/graphql-testx")))}u.isMDXComponent=!0}}]);