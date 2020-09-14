/*! For license information please see 5e5eba5b.573c19cd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,s=b["".concat(i,".").concat(d)]||b[d]||f[d]||o;return n?a.a.createElement(s,c(c({ref:t},p),{},{components:n})):a.a.createElement(s,c({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1084:function(e,t,n){"use strict";e.exports=n(1085)},1085:function(e,t,n){"use strict";var r=n(1086),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,p=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,b=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,s=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function N(){}function _(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=h.prototype;var v=_.prototype=new N;v.constructor=_,r(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!x.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:k.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g,P=[];function C(e,t,n,r){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return n(r,e,""===t?"."+$(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=t+$(a=e[l],l);c+=T(a,p,n,r)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=O&&e[O]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),l=0;!(a=e.next()).done;)c+=T(a=a.value,p=t+$(a,l++),n,r);else if("object"===a)throw n=""+e,Error(j(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function R(e,t,n){return null==e?0:T(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(M(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(S,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(S,"$&/")+"/"),R(e,I,t=C(t,o,r,a)),E(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(j(321));return e}var q={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,F,t=C(null,null,t,n)),E(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!M(e))throw Error(j(143));return e}},t.Component=h,t.Fragment=c,t.Profiler=p,t.PureComponent=_,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(j(267,e));var a=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(u in t)w.call(t,u)&&!x.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==p?p[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){p=Array(u);for(var b=0;b<u;b++)p[b]=arguments[b+2];a.children=p}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=D,t.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=M,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1086:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),p=1;p<arguments.length;p++){for(var u in n=Object(arguments[p]))a.call(n,u)&&(l[u]=n[u]);if(r){c=r(n);for(var b=0;b<c.length;b++)o.call(n,c[b])&&(l[c[b]]=n[c[b]])}}return l}},425:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(1084),n(1083)),i={id:"_plugin_modeldefinition_",title:"plugin/ModelDefinition",sidebar_label:"plugin/ModelDefinition"},c={unversionedId:"api/graphback-core/modules/_plugin_modeldefinition_",id:"api/graphback-core/modules/_plugin_modeldefinition_",isDocsHomePage:!1,title:"plugin/ModelDefinition",description:"Index",source:"@site/../docs/api/graphback-core/modules/_plugin_modeldefinition_.md",slug:"/api/graphback-core/modules/_plugin_modeldefinition_",permalink:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_plugin_modeldefinition_.md",version:"current",sidebar_label:"plugin/ModelDefinition"},l=[{value:"Index",id:"index",children:[{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"FieldDescriptor",id:"fielddescriptor",children:[]},{value:"ModelDefinition",id:"modeldefinition",children:[]},{value:"ModelFieldMap",id:"modelfieldmap",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getModelByName",id:"getmodelbyname",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"type-aliases"},"Type aliases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#fielddescriptor"}),"FieldDescriptor")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modelfieldmap"}),"ModelFieldMap"))),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#getmodelbyname"}),"getModelByName"))),Object(o.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(o.b)("h3",{id:"fielddescriptor"},"FieldDescriptor"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"FieldDescriptor"),": ",Object(o.b)("em",{parentName:"p"},"object")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/ModelDefinition.ts#L8"}),"packages/graphback-core/src/plugin/ModelDefinition.ts:8"))),Object(o.b)("p",null,"Describe the name and type of primary key"),Object(o.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"name"),": ",Object(o.b)("em",{parentName:"p"},"string"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"transient"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean | undefined"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"type"),": ",Object(o.b)("em",{parentName:"p"},"string")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"modeldefinition"},"ModelDefinition"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"ModelDefinition"),": ",Object(o.b)("em",{parentName:"p"},"object")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/ModelDefinition.ts#L21"}),"packages/graphback-core/src/plugin/ModelDefinition.ts:21"))),Object(o.b)("p",null,"Used to encapsulate configuration for the type"),Object(o.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"crudOptions"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig"}),"GraphbackCRUDGeneratorConfig")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"fields"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modelfieldmap"}),"ModelFieldMap")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"graphqlType"),": ",Object(o.b)("em",{parentName:"p"},"GraphQLObjectType"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"primaryKey"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#fielddescriptor"}),"FieldDescriptor")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"relationships"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata"}),"FieldRelationshipMetadata"),"[]")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"modelfieldmap"},"ModelFieldMap"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"ModelFieldMap"),": ",Object(o.b)("em",{parentName:"p"},"object")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/ModelDefinition.ts#L14"}),"packages/graphback-core/src/plugin/ModelDefinition.ts:14"))),Object(o.b)("h4",{id:"type-declaration-2"},"Type declaration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"["," ",Object(o.b)("strong",{parentName:"li"},"key"),": ",Object(o.b)("em",{parentName:"li"},"string"),"]",": ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#fielddescriptor"}),"FieldDescriptor"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"getmodelbyname"},"getModelByName"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"getModelByName"),"(",Object(o.b)("inlineCode",{parentName:"p"},"name"),": string, ",Object(o.b)("inlineCode",{parentName:"p"},"models"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),"[]): ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition")," | undefined")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/d2fa730/packages/graphback-core/src/plugin/ModelDefinition.ts#L29"}),"packages/graphback-core/src/plugin/ModelDefinition.ts:29"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"name")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"models")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),"[]")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition")," | undefined")))}u.isMDXComponent=!0}}]);