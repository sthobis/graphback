/*! For license information please see 7552bf8f.73699578.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{1082:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||c;return n?a.a.createElement(m,i(i({ref:t},o),{},{components:n})):a.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1083:function(e,t,n){"use strict";e.exports=n(1084)},1084:function(e,t,n){"use strict";var r=n(1085),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,l=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,b=a?Symbol.for("react.strict_mode"):60108,o=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,g=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function N(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}N.prototype.isReactComponent={},N.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=N.prototype;var C=v.prototype=new y;C.constructor=v,r(C,N.prototype),C.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r,a={},l=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)_.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var b=arguments.length-2;if(1===b)a.children=n;else if(1<b){for(var o=Array(b),p=0;p<b;p++)o[p]=arguments[p+2];a.children=o}if(e&&e.defaultProps)for(r in b=e.defaultProps)void 0===a[r]&&(a[r]=b[r]);return{$$typeof:c,type:e,key:l,ref:i,props:a,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var x=/\/+/g,D=[];function S(e,t,n,r){if(D.length){var a=D.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function U(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case l:i=!0}}if(i)return n(r,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var b=0;b<e.length;b++){var o=t+T(a=e[b],b);i+=U(a,o,n,r)}else if(null===e||"object"!=typeof e?o=null:o="function"==typeof(o=O&&e[O]||e["@@iterator"])?o:null,"function"==typeof o)for(e=o.call(e),b=0;!(a=e.next()).done;)i+=U(a=a.value,o=t+T(a,b++),n,r);else if("object"===a)throw n=""+e,Error(j(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function M(e,t,n){return null==e?0:U(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function G(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(w(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,a){var c="";null!=n&&(c=(""+n).replace(x,"$&/")+"/"),M(e,G,t=S(t,c,r,a)),E(t)}var L={current:null};function A(){var e=L.current;if(null===e)throw Error(j(321));return e}var q={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,$,t=S(null,null,t,n)),E(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!w(e))throw Error(j(143));return e}},t.Component=N,t.Fragment=i,t.Profiler=o,t.PureComponent=v,t.StrictMode=b,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(j(267,e));var a=r({},e.props),l=e.key,i=e.ref,b=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,b=k.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(p in t)_.call(t,p)&&!P.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==o?o[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){o=Array(p);for(var u=0;u<p;u++)o[u]=arguments[u+2];a.children=o}return{$$typeof:c,type:e.type,key:l,ref:i,props:a,_owner:b}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.13.1"},1085:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,b=l(e),o=1;o<arguments.length;o++){for(var p in n=Object(arguments[o]))a.call(n,p)&&(b[p]=n[p]);if(r){i=r(n);for(var u=0;u<i.length;u++)c.call(n,i[u])&&(b[i[u]]=n[i[u]])}}return b}},513:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(1083),n(1082)),l={id:"_clientcrudplugin_.clientcrudplugin",title:"ClientCRUDPlugin",sidebar_label:"ClientCRUDPlugin"},i={unversionedId:"api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin",id:"api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin",isDocsHomePage:!1,title:"ClientCRUDPlugin",description:"Graphback CRUD operations plugin",source:"@site/../docs/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin.md",slug:"/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin",permalink:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin.md",version:"current",sidebar_label:"ClientCRUDPlugin",sidebar:"docs",previous:{title:"SchemaCRUDPlugin",permalink:"/docs/next/api/graphback-codegen-schema/classes/_schemacrudplugin_.schemacrudplugin"},next:{title:"KeycloakCrudService",permalink:"/docs/next/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Private</code> pluginConfig",id:"private-pluginconfig",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"createResolvers",id:"createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"getDocuments",id:"getdocuments",children:[]},{value:"getPluginName",id:"getpluginname",children:[]},{value:"<code>Protected</code> logError",id:"protected-logerror",children:[]},{value:"<code>Protected</code> logWarning",id:"protected-logwarning",children:[]},{value:"transformSchema",id:"transformschema",children:[]}]}],o={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Graphback CRUD operations plugin"),Object(c.b)("p",null,"Plugins generates client side documents containing CRUD operations:\nQueries, Mutations and Subscriptions that reference coresponding schema and resolves.\nPlugin operates on all types annotated with model"),Object(c.b)("p",null,"Used graphql metadata:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"model: marks type to be processed by CRUD generator"),Object(c.b)("li",{parentName:"ul"},"crud: controls what types of operations can be generated.\nFor example crud.update: false will disable updates for type")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"GraphbackPlugin"),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"ClientCRUDPlugin")))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#private-pluginconfig"}),"pluginConfig"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#createresolvers"}),"createResolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#createresources"}),"createResources")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#getdocuments"}),"getDocuments")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#getpluginname"}),"getPluginName")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#protected-logerror"}),"logError")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#protected-logwarning"}),"logWarning")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#transformschema"}),"transformSchema"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ClientCRUDPlugin"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pluginConfig?"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig"}),"ClientGeneratorPluginConfig"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin"}),"ClientCRUDPlugin"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/75fd336/packages/graphback-codegen-client/src/ClientCRUDPlugin.ts#L40"}),"graphback-codegen-client/src/ClientCRUDPlugin.ts:40"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pluginConfig?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig"}),"ClientGeneratorPluginConfig"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin"}),"ClientCRUDPlugin"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"private-pluginconfig"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," pluginConfig"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"pluginConfig"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig"}),"ClientGeneratorPluginConfig"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/75fd336/packages/graphback-codegen-client/src/ClientCRUDPlugin.ts#L40"}),"graphback-codegen-client/src/ClientCRUDPlugin.ts:40"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"createresolvers"},"createResolvers"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResolvers"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin"}),"ClientCRUDPlugin"),".",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#createresolvers"}),"createResolvers"))),Object(c.b)("p",null,"Defined in graphback-core/types/plugin/GraphbackPlugin.d.ts:35"),Object(c.b)("p",null,"Method to create in-memory resolvers which will be\nadded to a list of resolvers output by Graphback"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"metadata object with model metadata")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createresources"},"createResources"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResources"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Overrides void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/75fd336/packages/graphback-codegen-client/src/ClientCRUDPlugin.ts#L50"}),"graphback-codegen-client/src/ClientCRUDPlugin.ts:50"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getdocuments"},"getDocuments"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDocuments"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplates"}),"ClientTemplates"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/75fd336/packages/graphback-codegen-client/src/ClientCRUDPlugin.ts#L60"}),"graphback-codegen-client/src/ClientCRUDPlugin.ts:60"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplates"}),"ClientTemplates"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getpluginname"},"getPluginName"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getPluginName"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Overrides void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/75fd336/packages/graphback-codegen-client/src/ClientCRUDPlugin.ts#L56"}),"graphback-codegen-client/src/ClientCRUDPlugin.ts:56"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-logerror"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," logError"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"logError"),"(",Object(c.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin"}),"ClientCRUDPlugin"),".",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#protected-logerror"}),"logError"))),Object(c.b)("p",null,"Defined in graphback-core/types/plugin/GraphbackPlugin.d.ts:37"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"message")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-logwarning"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," logWarning"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"logWarning"),"(",Object(c.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin"}),"ClientCRUDPlugin"),".",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#protected-logwarning"}),"logWarning"))),Object(c.b)("p",null,"Defined in graphback-core/types/plugin/GraphbackPlugin.d.ts:36"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"message")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transformschema"},"transformSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"transformSchema"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin"}),"ClientCRUDPlugin"),".",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin#transformschema"}),"transformSchema"))),Object(c.b)("p",null,"Defined in graphback-core/types/plugin/GraphbackPlugin.d.ts:23"),Object(c.b)("p",null,"Performs transformation on the schema and returns target schema\nImplementations should extend this method if they wish to apply some changes\nto schema. Otherwise unchanged schema should be returned"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"metadata object containing schema")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")))}p.isMDXComponent=!0}}]);