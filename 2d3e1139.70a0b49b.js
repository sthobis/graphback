(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1084:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var r=a(0),b=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,n=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=o(a),j=r,s=O["".concat(n,".").concat(j)]||O[j]||m[j]||c;return a?b.a.createElement(s,p(p({ref:t},l),{},{components:a})):b.a.createElement(s,p({ref:t},l))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,n=new Array(c);n[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,n[1]=p;for(var l=2;l<c;l++)n[l]=a[l];return b.a.createElement.apply(null,n)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},229:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(2),b=a(6),c=(a(0),a(1084)),n={id:"_runtime_crudservice_.crudservice",title:"CRUDService",sidebar_label:"CRUDService"},p={unversionedId:"api/graphback-core/classes/_runtime_crudservice_.crudservice",id:"version-0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice",isDocsHomePage:!1,title:"CRUDService",description:"Default implementation of the CRUD service offering following capabilities:",source:"@site/versioned_docs/version-0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice.md",slug:"/api/graphback-core/classes/_runtime_crudservice_.crudservice",permalink:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice.md",version:"0.15.x",sidebar_label:"CRUDService",sidebar:"version-0.15.x/docs",previous:{title:"GraphbackPlugin",permalink:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin"},next:{title:"GraphbackProxyService",permalink:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Private</code> crudOptions",id:"private-crudoptions",children:[]},{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Private</code> modelName",id:"private-modelname",children:[]},{value:"<code>Private</code> pubSub",id:"private-pubsub",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchLoadData",id:"batchloaddata",children:[]},{value:"<code>Private</code> buildEventPayload",id:"private-buildeventpayload",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"subscribeToCreate",id:"subscribetocreate",children:[]},{value:"subscribeToDelete",id:"subscribetodelete",children:[]},{value:"subscribeToUpdate",id:"subscribetoupdate",children:[]},{value:"<code>Protected</code> subscriptionTopicMapping",id:"protected-subscriptiontopicmapping",children:[]},{value:"update",id:"update",children:[]}]}],l={rightToc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Default implementation of the CRUD service offering following capabilities:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Subscriptions: using default publish subscribe method"),Object(c.b)("li",{parentName:"ul"},"Logging: using logging abstraction")),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"Type")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CRUDService"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"}),"GraphbackCRUDService"),"\u2039Type\u203a")),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#private-crudoptions"}),"crudOptions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#protected-db"}),"db")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#private-modelname"}),"modelName")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#private-pubsub"}),"pubSub"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#batchloaddata"}),"batchLoadData")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#private-buildeventpayload"}),"buildEventPayload")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#create"}),"create")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#delete"}),"delete")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#findby"}),"findBy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#findone"}),"findOne")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#subscribetocreate"}),"subscribeToCreate")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#subscribetodelete"}),"subscribeToDelete")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#subscribetoupdate"}),"subscribeToUpdate")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#protected-subscriptiontopicmapping"}),"subscriptionTopicMapping")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice#update"}),"update"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new CRUDService"),"(",Object(c.b)("inlineCode",{parentName:"p"},"modelName"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"db"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}),"GraphbackDataProvider"),", ",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig"}),"CRUDServiceConfig"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice"}),"CRUDService"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L32"}),"packages/graphback-core/src/runtime/CRUDService.ts:32"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"modelName")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"db")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}),"GraphbackDataProvider"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_crudservice_.crudserviceconfig"}),"CRUDServiceConfig"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice"}),"CRUDService"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"private-crudoptions"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," crudOptions"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"crudOptions"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig"}),"GraphbackCRUDGeneratorConfig"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L32"}),"packages/graphback-core/src/runtime/CRUDService.ts:32"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-db"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"db"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}),"GraphbackDataProvider"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L29"}),"packages/graphback-core/src/runtime/CRUDService.ts:29"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-modelname"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," modelName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"modelName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L31"}),"packages/graphback-core/src/runtime/CRUDService.ts:31"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-pubsub"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," pubSub"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"pubSub"),": ",Object(c.b)("em",{parentName:"p"},"PubSubEngine")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L30"}),"packages/graphback-core/src/runtime/CRUDService.ts:30"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"batchloaddata"},"batchLoadData"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"batchLoadData"),"(",Object(c.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"id"),": string | number, ",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L162"}),"packages/graphback-core/src/runtime/CRUDService.ts:162"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"relationField")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"id")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," number")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-buildeventpayload"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," buildEventPayload"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"buildEventPayload"),"(",Object(c.b)("inlineCode",{parentName:"p"},"action"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"result"),": any): ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L181"}),"packages/graphback-core/src/runtime/CRUDService.ts:181"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"action")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"result")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"create"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L41"}),"packages/graphback-core/src/runtime/CRUDService.ts:41"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete"},"delete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"delete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L76"}),"packages/graphback-core/src/runtime/CRUDService.ts:76"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findby"},"findBy"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findBy"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),"\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"),", ",Object(c.b)("inlineCode",{parentName:"p"},"page?"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackpage"}),"GraphbackPage"),", ",Object(c.b)("inlineCode",{parentName:"p"},"orderBy?"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackorderby"}),"GraphbackOrderBy"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"}),"ResultList"),"\u2039Type\u203a\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L96"}),"packages/graphback-core/src/runtime/CRUDService.ts:96"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),"\u2039Type\u203a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"page?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackpage"}),"GraphbackPage"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"orderBy?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackorderby"}),"GraphbackOrderBy"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"}),"ResultList"),"\u2039Type\u203a\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findone"},"findOne"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findOne"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args"),": Partial\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L92"}),"packages/graphback-core/src/runtime/CRUDService.ts:92"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"args")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscribetocreate"},"subscribeToCreate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscribeToCreate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"_context?"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"),"): ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L119"}),"packages/graphback-core/src/runtime/CRUDService.ts:119"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"_context?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscribetodelete"},"subscribeToDelete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscribeToDelete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"),"): ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L147"}),"packages/graphback-core/src/runtime/CRUDService.ts:147"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscribetoupdate"},"subscribeToUpdate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscribeToUpdate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"),"): ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L133"}),"packages/graphback-core/src/runtime/CRUDService.ts:133"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-subscriptiontopicmapping"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," subscriptionTopicMapping"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscriptionTopicMapping"),"(",Object(c.b)("inlineCode",{parentName:"p"},"triggerType"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/enums/_crud_graphbackoperationtype_.graphbackoperationtype"}),"GraphbackOperationType"),", ",Object(c.b)("inlineCode",{parentName:"p"},"objectName"),": string): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L177"}),"packages/graphback-core/src/runtime/CRUDService.ts:177"))),Object(c.b)("p",null,"Provides way to map runtime topics for subscriptions for specific types and object names"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"triggerType")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/enums/_crud_graphbackoperationtype_.graphbackoperationtype"}),"GraphbackOperationType"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"objectName")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"update"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"update"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/CRUDService.ts#L58"}),"packages/graphback-core/src/runtime/CRUDService.ts:58"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}o.isMDXComponent=!0}}]);