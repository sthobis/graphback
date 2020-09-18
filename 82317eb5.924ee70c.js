/*! For license information please see 82317eb5.924ee70c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{1084:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,f=u["".concat(o,".").concat(p)]||u[p]||s[p]||c;return n?r.a.createElement(f,i(i({ref:t},b),{},{components:n})):r.a.createElement(f,i({ref:t},b))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1085:function(e,t,n){"use strict";e.exports=n(1086)},1086:function(e,t,n){"use strict";var a=n(1087),r="function"==typeof Symbol&&Symbol.for,c=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,b=r?Symbol.for("react.profiler"):60114,d=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}function v(){}function S(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var D=S.prototype=new v;D.constructor=S,a(D,h.prototype),D.isPureReactComponent=!0;var _={current:null},N=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var a,r={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,a)&&!x.hasOwnProperty(a)&&(r[a]=t[a]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var b=Array(l),d=0;d<l;d++)b[d]=arguments[d+2];r.children=b}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===r[a]&&(r[a]=l[a]);return{$$typeof:c,type:e,key:o,ref:i,props:r,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var k=/\/+/g,w=[];function M(e,t,n,a){if(w.length){var r=w.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>w.length&&w.push(e)}function R(e,t,n,a){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var i=!1;if(null===e)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case o:i=!0}}if(i)return n(a,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var b=t+T(r=e[l],l);i+=R(r,b,n,a)}else if(null===e||"object"!=typeof e?b=null:b="function"==typeof(b=O&&e[O]||e["@@iterator"])?b:null,"function"==typeof b)for(e=b.call(e),l=0;!(r=e.next()).done;)i+=R(r=r.value,b=t+T(r,l++),n,a);else if("object"===r)throw n=""+e,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function A(e,t,n){return null==e?0:R(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,a,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(k,"$&/")+"/")+n)),a.push(e))}function $(e,t,n,a,r){var c="";null!=n&&(c=(""+n).replace(k,"$&/")+"/"),A(e,U,t=M(t,c,a,r)),E(t)}var F={current:null};function L(){var e=F.current;if(null===e)throw Error(m(321));return e}var G={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,n){if(null==e)return e;var a=[];return $(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;A(e,I,t=M(null,null,t,n)),E(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(m(143));return e}},t.Component=h,t.Fragment=i,t.Profiler=b,t.PureComponent=S,t.StrictMode=l,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var r=a({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(d in t)N.call(t,d)&&!x.hasOwnProperty(d)&&(r[d]=void 0===t[d]&&void 0!==b?b[d]:t[d])}var d=arguments.length-2;if(1===d)r.children=n;else if(1<d){b=Array(d);for(var u=0;u<d;u++)b[u]=arguments[u+2];r.children=b}return{$$typeof:c,type:e.type,key:o,ref:i,props:r,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return L().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,n){return L().useReducer(e,t,n)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},1087:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var n,i,l=o(e),b=1;b<arguments.length;b++){for(var d in n=Object(arguments[b]))r.call(n,d)&&(l[d]=n[d]);if(a){i=a(n);for(var u=0;u<i.length;u++)c.call(n,i[u])&&(l[i[u]]=n[i[u]])}}return l}},559:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),c=(n(1085),n(1084)),o={id:"_index_",title:"index",sidebar_label:"index"},i={unversionedId:"api/graphback-datasync/modules/_index_",id:"api/graphback-datasync/modules/_index_",isDocsHomePage:!1,title:"index",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_index_.md",slug:"/api/graphback-datasync/modules/_index_",permalink:"/docs/next/api/graphback-datasync/modules/_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_index_.md",version:"current",sidebar_label:"index"},l=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"ClientSideWins",id:"clientsidewins",children:[]},{value:"ConflictError",id:"conflicterror",children:[]},{value:"ConflictMetadata",id:"conflictmetadata",children:[]},{value:"ConflictResolutionStrategy",id:"conflictresolutionstrategy",children:[]},{value:"CreateDataSyncCRUDServiceOptions",id:"createdatasynccrudserviceoptions",children:[]},{value:"DATASYNC_PLUGIN_NAME",id:"datasync_plugin_name",children:[]},{value:"DataSyncCRUDService",id:"datasynccrudservice",children:[]},{value:"DataSyncConflictMongoDBDataProvider",id:"datasyncconflictmongodbdataprovider",children:[]},{value:"DataSyncFieldNames",id:"datasyncfieldnames",children:[]},{value:"DataSyncModelConfigMap",id:"datasyncmodelconfigmap",children:[]},{value:"DataSyncModelConflictConfig",id:"datasyncmodelconflictconfig",children:[]},{value:"DataSyncMongoDBDataProvider",id:"datasyncmongodbdataprovider",children:[]},{value:"DataSyncPlugin",id:"datasyncplugin",children:[]},{value:"DataSyncPluginConfig",id:"datasyncpluginconfig",children:[]},{value:"DataSyncProvider",id:"datasyncprovider",children:[]},{value:"GlobalConflictConfig",id:"globalconflictconfig",children:[]},{value:"MAX_RETRIES",id:"max_retries",children:[]},{value:"MongoDeltaSource",id:"mongodeltasource",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"ServerSideWins",id:"serversidewins",children:[]},{value:"SyncList",id:"synclist",children:[]},{value:"ThrowOnConflict",id:"throwonconflict",children:[]},{value:"createDataSyncAPI",id:"createdatasyncapi",children:[]},{value:"createDataSyncCRUDService",id:"createdatasynccrudservice",children:[]},{value:"createDataSyncConflictProviderCreator",id:"createdatasyncconflictprovidercreator",children:[]},{value:"createDataSyncMongoDbProvider",id:"createdatasyncmongodbprovider",children:[]},{value:"getDataSyncAnnotationData",id:"getdatasyncannotationdata",children:[]},{value:"getDeltaTableName",id:"getdeltatablename",children:[]},{value:"getModelConfigFromGlobal",id:"getmodelconfigfromglobal",children:[]},{value:"isDataSyncModel",id:"isdatasyncmodel",children:[]},{value:"isDataSyncService",id:"isdatasyncservice",children:[]},{value:"isDataSyncType",id:"isdatasynctype",children:[]}]}],b={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"references"},"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#clientsidewins"}),"ClientSideWins")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#conflicterror"}),"ConflictError")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#conflictmetadata"}),"ConflictMetadata")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#conflictresolutionstrategy"}),"ConflictResolutionStrategy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#createdatasynccrudserviceoptions"}),"CreateDataSyncCRUDServiceOptions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasync_plugin_name"}),"DATASYNC_PLUGIN_NAME")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasynccrudservice"}),"DataSyncCRUDService")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasyncconflictmongodbdataprovider"}),"DataSyncConflictMongoDBDataProvider")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasyncfieldnames"}),"DataSyncFieldNames")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasyncmodelconfigmap"}),"DataSyncModelConfigMap")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasyncmongodbdataprovider"}),"DataSyncMongoDBDataProvider")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasyncplugin"}),"DataSyncPlugin")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasyncpluginconfig"}),"DataSyncPluginConfig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#datasyncprovider"}),"DataSyncProvider")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#globalconflictconfig"}),"GlobalConflictConfig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#max_retries"}),"MAX_RETRIES")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#mongodeltasource"}),"MongoDeltaSource")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#plugin"}),"Plugin")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#serversidewins"}),"ServerSideWins")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#synclist"}),"SyncList")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#throwonconflict"}),"ThrowOnConflict")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#createdatasyncapi"}),"createDataSyncAPI")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#createdatasynccrudservice"}),"createDataSyncCRUDService")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#createdatasyncconflictprovidercreator"}),"createDataSyncConflictProviderCreator")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#createdatasyncmongodbprovider"}),"createDataSyncMongoDbProvider")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#getdatasyncannotationdata"}),"getDataSyncAnnotationData")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#getdeltatablename"}),"getDeltaTableName")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#getmodelconfigfromglobal"}),"getModelConfigFromGlobal")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#isdatasyncmodel"}),"isDataSyncModel")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#isdatasyncservice"}),"isDataSyncService")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_index_#isdatasynctype"}),"isDataSyncType"))),Object(c.b)("h2",{id:"references-1"},"References"),Object(c.b)("h3",{id:"clientsidewins"},"ClientSideWins"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ClientSideWins"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"conflicterror"},"ConflictError"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ConflictError"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"conflictmetadata"},"ConflictMetadata"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ConflictMetadata"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"conflictresolutionstrategy"},"ConflictResolutionStrategy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ConflictResolutionStrategy"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createdatasynccrudserviceoptions"},"CreateDataSyncCRUDServiceOptions"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"CreateDataSyncCRUDServiceOptions"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasync_plugin_name"},"DATASYNC_PLUGIN_NAME"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DATASYNC_PLUGIN_NAME"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasynccrudservice"},"DataSyncCRUDService"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DataSyncCRUDService"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasyncconflictmongodbdataprovider"},"DataSyncConflictMongoDBDataProvider"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DataSyncConflictMongoDBDataProvider"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasyncfieldnames"},"DataSyncFieldNames"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DataSyncFieldNames"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasyncmodelconfigmap"},"DataSyncModelConfigMap"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DataSyncModelConfigMap"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasyncmodelconflictconfig"},"DataSyncModelConflictConfig"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DataSyncModelConflictConfig"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasyncmongodbdataprovider"},"DataSyncMongoDBDataProvider"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DataSyncMongoDBDataProvider"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasyncplugin"},"DataSyncPlugin"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DataSyncPlugin"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasyncpluginconfig"},"DataSyncPluginConfig"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DataSyncPluginConfig"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"datasyncprovider"},"DataSyncProvider"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DataSyncProvider"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"globalconflictconfig"},"GlobalConflictConfig"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"GlobalConflictConfig"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"max_retries"},"MAX_RETRIES"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"MAX_RETRIES"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"mongodeltasource"},"MongoDeltaSource"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"MongoDeltaSource"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"plugin"},"Plugin"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"Plugin"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serversidewins"},"ServerSideWins"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ServerSideWins"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"synclist"},"SyncList"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"SyncList"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"throwonconflict"},"ThrowOnConflict"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ThrowOnConflict"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createdatasyncapi"},"createDataSyncAPI"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createDataSyncAPI"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createdatasynccrudservice"},"createDataSyncCRUDService"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createDataSyncCRUDService"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createdatasyncconflictprovidercreator"},"createDataSyncConflictProviderCreator"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createDataSyncConflictProviderCreator"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createdatasyncmongodbprovider"},"createDataSyncMongoDbProvider"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createDataSyncMongoDbProvider"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getdatasyncannotationdata"},"getDataSyncAnnotationData"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"getDataSyncAnnotationData"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getdeltatablename"},"getDeltaTableName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"getDeltaTableName"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getmodelconfigfromglobal"},"getModelConfigFromGlobal"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"getModelConfigFromGlobal"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isdatasyncmodel"},"isDataSyncModel"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"isDataSyncModel"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isdatasyncservice"},"isDataSyncService"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"isDataSyncService"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isdatasynctype"},"isDataSyncType"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"isDataSyncType"),":"))}d.isMDXComponent=!0}}]);