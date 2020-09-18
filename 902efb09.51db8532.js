/*! For license information please see 902efb09.51db8532.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{1084:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),o=d(a),u=r,m=o["".concat(c,".").concat(u)]||o[u]||s[u]||b;return a?n.a.createElement(m,i(i({ref:t},l),{},{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1085:function(e,t,a){"use strict";e.exports=a(1086)},1086:function(e,t,a){"use strict";var r=a(1087),n="function"==typeof Symbol&&Symbol.for,b=n?Symbol.for("react.element"):60103,c=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,p=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,d=n?Symbol.for("react.provider"):60109,o=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,O=n?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N={};function g(e,t,a){this.props=e,this.context=t,this.refs=N,this.updater=a||f}function x(){}function k(e,t,a){this.props=e,this.context=t,this.refs=N,this.updater=a||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var v=k.prototype=new x;v.constructor=k,r(v,g.prototype),v.isPureReactComponent=!0;var y={current:null},_=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,a){var r,n={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,r)&&!D.hasOwnProperty(r)&&(n[r]=t[r]);var p=arguments.length-2;if(1===p)n.children=a;else if(1<p){for(var l=Array(p),d=0;d<p;d++)l[d]=arguments[d+2];n.children=l}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===n[r]&&(n[r]=p[r]);return{$$typeof:b,type:e,key:c,ref:i,props:n,_owner:y.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}var B=/\/+/g,q=[];function S(e,t,a,r){if(q.length){var n=q.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function K(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>q.length&&q.push(e)}function w(e,t,a,r){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var i=!1;if(null===e)i=!0;else switch(n){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case b:case c:i=!0}}if(i)return a(r,e,""===t?"."+R(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var p=0;p<e.length;p++){var l=t+R(n=e[p],p);i+=w(n,l,a,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=j&&e[j]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),p=0;!(n=e.next()).done;)i+=w(n=n.value,l=t+R(n,p++),a,r);else if("object"===n)throw a=""+e,Error(h(31,"[object Object]"===a?"object with keys {"+Object.keys(e).join(", ")+"}":a,""));return i}function T(e,t,a){return null==e?0:w(e,"",t,a)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function E(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,a,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:b,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(B,"$&/")+"/")+a)),r.push(e))}function F(e,t,a,r,n){var b="";null!=a&&(b=(""+a).replace(B,"$&/")+"/"),T(e,E,t=S(t,b,r,n)),K(t)}var M={current:null};function I(){var e=M.current;if(null===e)throw Error(h(321));return e}var $={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:y,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return F(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;T(e,L,t=S(null,null,t,a)),K(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=i,t.Profiler=l,t.PureComponent=k,t.StrictMode=p,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,a){if(null==e)throw Error(h(267,e));var n=r({},e.props),c=e.key,i=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,p=y.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)_.call(t,d)&&!D.hasOwnProperty(d)&&(n[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)n.children=a;else if(1<d){l=Array(d);for(var o=0;o<d;o++)l[o]=arguments[o+2];n.children=l}return{$$typeof:b,type:e.type,key:c,ref:i,props:n,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return I().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,a){return I().useReducer(e,t,a)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="16.13.1"},1087:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,i,p=c(e),l=1;l<arguments.length;l++){for(var d in a=Object(arguments[l]))n.call(a,d)&&(p[d]=a[d]);if(r){i=r(a);for(var o=0;o<i.length;o++)b.call(a,i[o])&&(p[i[o]]=a[i[o]])}}return p}},619:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),b=(a(1085),a(1084)),c={id:"_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",title:"SQLiteKnexDBDataProvider",sidebar_label:"SQLiteKnexDBDataProvider"},i={unversionedId:"api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",id:"api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",isDocsHomePage:!1,title:"SQLiteKnexDBDataProvider",description:"Knex.js database data provider exposing basic CRUD operations.",source:"@site/../docs/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider.md",slug:"/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",permalink:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider.md",version:"current",sidebar_label:"SQLiteKnexDBDataProvider",sidebar:"docs",previous:{title:"KnexDBDataProvider",permalink:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},next:{title:"createMongoDbProvider",permalink:"/docs/next/api/graphback-runtime-mongodb/modules/_createmongodbprovider_"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Protected</code> queryBuilder",id:"protected-querybuilder",children:[]},{value:"<code>Protected</code> tableMap",id:"protected-tablemap",children:[]},{value:"<code>Protected</code> tableName",id:"protected-tablename",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"<code>Protected</code> getSelectedFields",id:"protected-getselectedfields",children:[]},{value:"update",id:"update",children:[]}]}],l={rightToc:p};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Knex.js database data provider exposing basic CRUD operations."),Object(b.b)("p",null,"NOTE: This class implements SQLite specific implementaion"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"Type")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),"\u2039Type\u203a"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"SQLiteKnexDBDataProvider")))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"GraphbackDataProvider\u2039Type\u203a")),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#constructor"}),"constructor"))),Object(b.b)("h3",{id:"properties"},"Properties"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-db"}),"db")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-querybuilder"}),"queryBuilder")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-tablemap"}),"tableMap")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-tablename"}),"tableName"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#batchread"}),"batchRead")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#count"}),"count")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#create"}),"create")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#delete"}),"delete")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#findby"}),"findBy")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#findone"}),"findOne")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-getselectedfields"}),"getSelectedFields")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#update"}),"update"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new SQLiteKnexDBDataProvider"),"(",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(b.b)("inlineCode",{parentName:"p"},"db"),": Knex): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),"SQLiteKnexDBDataProvider"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#constructor"}),"constructor"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/SQLiteKnexDBDataProvider.ts#L11"}),"SQLiteKnexDBDataProvider.ts:11"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ModelDefinition")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"db")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Knex")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),"SQLiteKnexDBDataProvider"))),Object(b.b)("h2",{id:"properties-1"},"Properties"),Object(b.b)("h3",{id:"protected-db"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"db"),": ",Object(b.b)("em",{parentName:"p"},"Knex")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-db"}),"db"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L18"}),"KnexDBDataProvider.ts:18"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-querybuilder"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," queryBuilder"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"queryBuilder"),": ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/interfaces/_knexquerymapper_.crudknexquerymapper"}),"CRUDKnexQueryMapper"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-querybuilder"}),"queryBuilder"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L21"}),"KnexDBDataProvider.ts:21"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-tablemap"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," tableMap"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"tableMap"),": ",Object(b.b)("em",{parentName:"p"},"ModelTableMap")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablemap"}),"tableMap"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L20"}),"KnexDBDataProvider.ts:20"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-tablename"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," tableName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"tableName"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablename"}),"tableName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L19"}),"KnexDBDataProvider.ts:19"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"batchread"},"batchRead"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"batchRead"),"(",Object(b.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#batchread"}),"batchRead"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L97"}),"KnexDBDataProvider.ts:97"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"relationField")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ids")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"count"},"count"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"count"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#count"}),"count"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L90"}),"KnexDBDataProvider.ts:90"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#create"}),"create"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/SQLiteKnexDBDataProvider.ts#L17"}),"SQLiteKnexDBDataProvider.ts:17"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"delete"},"delete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"delete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#delete"}),"delete"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/SQLiteKnexDBDataProvider.ts#L45"}),"SQLiteKnexDBDataProvider.ts:45"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findby"},"findBy"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args?"),": FindByArgs, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findby"}),"findBy"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L74"}),"KnexDBDataProvider.ts:74"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FindByArgs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findone"},"findOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findOne"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findone"}),"findOne"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L63"}),"KnexDBDataProvider.ts:63"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-getselectedfields"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," getSelectedFields"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getSelectedFields"),"(",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields"),": string[]): ",Object(b.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-getselectedfields"}),"getSelectedFields"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L111"}),"KnexDBDataProvider.ts:111"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(b.b)("hr",null),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"update"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#update"}),"update"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/e81d9bd/packages/graphback-runtime-knex/src/SQLiteKnexDBDataProvider.ts#L30"}),"SQLiteKnexDBDataProvider.ts:30"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}d.isMDXComponent=!0}}]);