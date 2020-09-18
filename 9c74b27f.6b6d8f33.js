(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{1084:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},670:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(1084)),o={id:"intro",title:"GraphQL Migrations",sidebar_label:"Introduction"},c={unversionedId:"graphql-migrations/intro",id:"version-0.16.x/graphql-migrations/intro",isDocsHomePage:!1,title:"GraphQL Migrations",description:"Graphback uses graphql-migrations to automatically create and update tables from a GraphQL schema.",source:"@site/versioned_docs/version-0.16.x/graphql-migrations/intro.md",slug:"/graphql-migrations/intro",permalink:"/docs/graphql-migrations/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/graphql-migrations/intro.md",version:"0.16.x",sidebar_label:"Introduction",sidebar:"version-0.16.x/docs",previous:{title:"Conflict Resolution strategies",permalink:"/docs/datasync/conflict-resolution-strategies"},next:{title:"Database Design",permalink:"/docs/graphql-migrations/db-design"}},l=[{value:"Compatibility",id:"compatibility",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Graphback uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-migrations"}),"graphql-migrations")," to automatically create and update tables from a GraphQL schema.\nThe library compares your database schema to your GraphQL schema and executes the required changes to keep the database structure synchronised with the GraphQL schema. The package is built on top of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://knexjs.org/"}),"Knex.js"),", a flexible SQL query builder."),Object(i.b)("h2",{id:"compatibility"},"Compatibility"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"PostgreSQL (create and update database)"),Object(i.b)("li",{parentName:"ul"},"SQLite (create database only)")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"You can install ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-migrations")," on your existing project using the following commmands:"),Object(i.b)("p",null,"With npm: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i graphql-migrations knex\n")),Object(i.b)("p",null,"or with yarn:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add graphql-migrations knex\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"GraphQL Migrations operates on business models defined in your schema: These are GraphQL types decorated with a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../model/datamodel#model"}),Object(i.b)("inlineCode",{parentName:"a"},"@model"))," annotation.\nThe package expose an API which you can programmatically set up in your source code and have it perform the migrations. "),Object(i.b)("p",null,"The package exposes a ",Object(i.b)("inlineCode",{parentName:"p"},"migrateDB")," method which creates and updates your tables and columns to match your GraphQL schema.\nAll the database operations are wrapped in a single transaction, so your database will be fully rolled back to its initial state if an error occurs.\nThe method takes three arguments as described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#options"}),"migrations options")," section."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { migrateDB } from \'graphql-migrations\';\n\nconst schemaText = ```\n"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n}\n```;\n\nconst dbConfig = {\n  // Knex.js based configuration\n};\n\nmigrateDB(dbConfig, schemaText, {\n  // Additional options\n}).then((ops) => {\n    console.log(ops);\n});\n...\n')),Object(i.b)("p",null,"Assuming the above code is ran against a PostgreSQL database, the following relations will be created:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"\\d\n              List of relations\n Schema |    Name     |   Type   |   Owner    \n--------+-------------+----------+------------\n public | note        | table    | postgresql\n public | note_id_seq | sequence | postgresql\n")),Object(i.b)("p",null,"And the ",Object(i.b)("inlineCode",{parentName:"p"},"note")," table:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),' \\d note\n                                 Table "public.note"\n Column |          Type          |                     Modifiers                     \n--------+------------------------+---------------------------------------------------\n title  | character varying(255) | not null\n id     | integer                | not null default nextval(\'note_id_seq\'::regclass)\nIndexes:\n    "note_pkey" PRIMARY KEY, btree (id)\n')),Object(i.b)("h2",{id:"advanced-usage"},"Advanced usage"),Object(i.b)("p",null,"For more advanced usage, visit the below pages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"db-design"}),"Database Design")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"api"}),"API Reference"))))}p.isMDXComponent=!0}}]);