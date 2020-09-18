(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=a,g=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return r?n.a.createElement(g,o(o({ref:t},p),{},{components:r})):n.a.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},536:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),c=(r(0),r(1084)),i={title:"What is Graphback and how do I get started?",sidebar_label:"What is Graphback",id:"gettingstarted"},o={unversionedId:"gettingstarted",id:"version-0.9.x/gettingstarted",isDocsHomePage:!1,title:"What is Graphback and how do I get started?",description:"Graphback is a CLI tool that can help you bootstrap a GraphQL server and client for you including GraphQL schema, resolvers and generating database structure. Graphback addresses the difficulty in configuring a GraphQL server from scratch.",source:"@site/versioned_docs/version-0.9.x/gettingstarted.md",slug:"/gettingstarted",permalink:"/docs/0.9.x/gettingstarted",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.9.x/gettingstarted.md",version:"0.9.x",sidebar_label:"What is Graphback",sidebar:"version-0.9.x/docs",next:{title:"Defining your Data Model",permalink:"/docs/0.9.x/datamodel"}},l=[{value:"Quick Start: Installing and running Graphback",id:"quick-start-installing-and-running-graphback",children:[]},{value:"Creating a GraphQL server and client with SQLite",id:"creating-a-graphql-server-and-client-with-sqlite",children:[]},{value:"Creating a GraphQL server and client using PostreSQL",id:"creating-a-graphql-server-and-client-using-postresql",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Graphback is a CLI tool that can help you bootstrap a GraphQL server and client for you including GraphQL schema, resolvers and generating database structure. Graphback addresses the difficulty in configuring a GraphQL server from scratch."),Object(c.b)("h2",{id:"quick-start-installing-and-running-graphback"},"Quick Start: Installing and running Graphback"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g graphback-cli\ngraphback init <project-name>\n")),Object(c.b)("p",null,"Follow the onscreen instructions."),Object(c.b)("p",null,"You can use Graphback with either a SQLite (for prototyping) or PostgreSQL (for production) databases."),Object(c.b)("p",null,"If you use SQLite, you don't need to use Docker."),Object(c.b)("h2",{id:"creating-a-graphql-server-and-client-with-sqlite"},"Creating a GraphQL server and client with SQLite"),Object(c.b)("p",null,"Create a GraphQL project:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"graphback init <project-name>\n")),Object(c.b)("p",null,"Change directory into your project folder. Edit your ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/datamodel"}),Object(c.b)("inlineCode",{parentName:"a"},"datamodel"))," file inside the ",Object(c.b)("inlineCode",{parentName:"p"},"model")," folder. To generate schema and resolvers run "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"graphback generate\n")),Object(c.b)("p",null,"You can now edit the ",Object(c.b)("inlineCode",{parentName:"p"},"db.sqlite")," file in the project root directory using a SQLite client. "),Object(c.b)("p",null,"Start the developer server by running:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run develop\n")),Object(c.b)("h2",{id:"creating-a-graphql-server-and-client-using-postresql"},"Creating a GraphQL server and client using PostreSQL"),Object(c.b)("p",null,"Create a GraphQL project:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"graphback init <project-name>\n")),Object(c.b)("p",null,"Change directory into your project folder. Edit your ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/datamodel"}),Object(c.b)("inlineCode",{parentName:"a"},"datamodel"))," file inside the ",Object(c.b)("inlineCode",{parentName:"p"},"model")," folder. To generate schema and resolvers run "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"graphback generate\n")),Object(c.b)("p",null,"To setup database resources and start required services"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d\ngraphback db\n")),Object(c.b)("p",null,"To compile the TypeScript code and start the server"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\nnpm run start\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"You can run the development version using ",Object(c.b)("inlineCode",{parentName:"p"},"npm run develop"),", for available templates of graphback.")))}s.isMDXComponent=!0}}]);