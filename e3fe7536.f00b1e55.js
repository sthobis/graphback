(window.webpackJsonp=window.webpackJsonp||[]).push([[914],{1084:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},970:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(1084)),c={id:"commands",title:"CLI commands"},i={unversionedId:"commands",id:"version-0.12.x/commands",isDocsHomePage:!1,title:"CLI commands",description:"Commands",source:"@site/versioned_docs/version-0.12.x/commands.md",slug:"/commands",permalink:"/docs/0.12.x/commands",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/commands.md",version:"0.12.x",sidebar:"version-0.12.x/docs",previous:{title:"Migrating from REST",permalink:"/docs/0.12.x/migrations/openapi"},next:{title:"Releases",permalink:"/docs/0.12.x/releases"}},s=[{value:"Commands",id:"commands",children:[{value:"Config",id:"config",children:[]},{value:"Generate",id:"generate",children:[]},{value:"Database",id:"database",children:[]}]},{value:"OpenAPI",id:"openapi",children:[]}],l={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("p",null,"CLI offers help prompt.\nExecute ",Object(o.b)("inlineCode",{parentName:"p"},"graphback")," in your shell for more information"),Object(o.b)("h3",{id:"config"},"Config"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"graphback config\n")),Object(o.b)("p",null,"Create sample configuration in existing project to support Graphback resolver and schema generation.\nConfig will allow you to generate existing configuration that uses default Graphback plugins and one of the\ndatabases we support out of the box. Additionally data migrations configuration will be initialized that will\nhelp you to manage data migrations by specifying GraphQL queries."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," When creating configuration please review all paths as they might not reflect your project stucture")),Object(o.b)("h3",{id:"generate"},"Generate"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"graphback generate\n")),Object(o.b)("p",null,"  Generate command will execute generation process that will gener GraphQL server based on your data model."),Object(o.b)("h3",{id:"database"},"Database"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"graphback db\n")),Object(o.b)("p",null,"  This command creates a database or updates an existing one, based on your data model. Currently supports PostgreSQL and sqlite3."),Object(o.b)("h2",{id:"openapi"},"OpenAPI"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"graphback openapi \n")),Object(o.b)("p",null," Generate GraphQL schema and resolvers based on OpenAPI spec."))}p.isMDXComponent=!0}}]);