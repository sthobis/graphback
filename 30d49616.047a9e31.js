(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||l;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},244:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),l=(r(0),r(1084)),o={title:"CRUD Resolvers Plugin",sidebar_label:"CRUD Resolvers",id:"crud-resolvers"},i={unversionedId:"plugins/crud-resolvers",id:"version-0.11.x/plugins/crud-resolvers",isDocsHomePage:!1,title:"CRUD Resolvers Plugin",description:"The Graphback CRUD Resolvers plugin gives developers an opinionated way to generate a set of Node.js server compatible GraphQL resolvers",source:"@site/versioned_docs/version-0.11.x/plugins/graphback-resolvers.md",slug:"/plugins/crud-resolvers",permalink:"/docs/0.11.x/plugins/crud-resolvers",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.11.x/plugins/graphback-resolvers.md",version:"0.11.x",sidebar_label:"CRUD Resolvers",sidebar:"version-0.11.x/",previous:{title:"Graphback CRUD Schema Plugin",permalink:"/docs/0.11.x/plugins/crud-schema"},next:{title:"Graphback CRUD Client Queries Plugin",permalink:"/docs/0.11.x/plugins/crud-client"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Using",id:"using",children:[]},{value:"Configuration",id:"configuration",children:[{value:"File extension",id:"file-extension",children:[]},{value:"Output path",id:"output-path",children:[]},{value:"File name",id:"file-name",children:[]},{value:"Layout",id:"layout",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Graphback CRUD Resolvers plugin gives developers an opinionated way to generate a set of Node.js server compatible GraphQL resolvers\nthat will work with the schema and client side queries generated by Graphback."),Object(l.b)("p",null,"The generated CRUD resolvers use our ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"../crud/crudruntime"}),"Runtime Abstraction")," that gives you the ability to dynamically connect to a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"../db/datasources"}),"variety of data sources"),"."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"Add the plugin to your application with npm:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @graphback/codegen-resolvers\n")),Object(l.b)("h2",{id:"using"},"Using"),Object(l.b)("p",null,"Add ",Object(l.b)("inlineCode",{parentName:"p"},"graphback-resolvers")," to your ",Object(l.b)("inlineCode",{parentName:"p"},".graphqlrc.yml")," config file under the ",Object(l.b)("inlineCode",{parentName:"p"},"graphback")," extension:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins:\n  graphback-resolvers:\n    outputPath: ./server/src/resolvers\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("em",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"em"},"graphback-resolvers")," configuration must come ",Object(l.b)("strong",{parentName:"em"},"after")," ",Object(l.b)("inlineCode",{parentName:"em"},"graphback-schema")," as it depends on the generated schema"),".")),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"graphback generate")," to generate your CRUD resolvers. This will generate a single resolvers file in your ",Object(l.b)("inlineCode",{parentName:"p"},"outputPath"),"."),Object(l.b)("p",null,"Example generated resolver function:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"findAllNotes: (parent, args, context) => {\n  return context.Note.findAll(args)\n},\n")),Object(l.b)("p",null,"For a full example, see our ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/master/templates/ts-apollo-fullstack/server/src/resolvers/resolvers.ts"}),"TypeScript Apollo Template"),"."),Object(l.b)("p",null,"You can then import the resolvers into your application:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import resolvers from './resolvers/resolvers';\n\nconst apolloServer = new ApolloServer({\n  ...\n  resolvers\n})\n")),Object(l.b)("p",null,"The generated resolvers use our ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"../crud/crudruntime"}),"Runtime Abstraction")," and depend on the CRUD services to be passed to the resolver function as part of the context. To add these services to your application see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"../db/datasources"}),"Data Sources"),"."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"You can customise how your resolvers are generated by editing ",Object(l.b)("inlineCode",{parentName:"p"},"extensions.graphback.graphback-resolvers")," in your ",Object(l.b)("inlineCode",{parentName:"p"},".graphqlrc.yml")," file."),Object(l.b)("h3",{id:"file-extension"},"File extension"),Object(l.b)("p",null,"To specify the file extension of the generated resolvers file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"format: 'ts'\n")),Object(l.b)("p",null,"If not specified this defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"'ts'"),"."),Object(l.b)("p",null,"Supported options: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ts")," - TypeScript extension."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"js")," - JavaScript extension.")),Object(l.b)("h3",{id:"output-path"},"Output path"),Object(l.b)("p",null,"To specify the relative path for the generated resolvers file to be located:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"outputPath: './src/resolvers'\n")),Object(l.b)("h3",{id:"file-name"},"File name"),Object(l.b)("p",null,"The generated resolvers file by default will be called ",Object(l.b)("inlineCode",{parentName:"p"},"resolvers.(ts|js)"),". You can override this by adding ",Object(l.b)("inlineCode",{parentName:"p"},"resolversFileName")," to your config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"resolversFileName: 'generatedResolvers'\n")),Object(l.b)("p",null,"If not specified this defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"resolvers"),"."),Object(l.b)("h3",{id:"layout"},"Layout"),Object(l.b)("p",null,"To customise the layout of the resolvers object:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"layout: 'graphql'\n")),Object(l.b)("p",null,"If not specified this defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"'apollo'"),"."),Object(l.b)("p",null,"Supported options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"apollo")," - Apollo GraphQL resolvers layout."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"graphql")," - GraphQL.js resolvers layout.")))}p.isMDXComponent=!0}}]);