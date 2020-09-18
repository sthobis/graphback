(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{1084:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return a?i.a.createElement(u,l(l({ref:t},c),{},{components:a})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},620:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(6),r=(a(0),a(1084)),o={title:"Database Schema Migrations",id:"database-schema-migrations"},l={unversionedId:"database-schema-migrations",id:"version-0.10.x/database-schema-migrations",isDocsHomePage:!1,title:"Database Schema Migrations",description:"Database Schema Migrations",source:"@site/versioned_docs/version-0.10.x/database-schema-migrations.md",slug:"/database-schema-migrations",permalink:"/docs/0.10.x/database-schema-migrations",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.10.x/database-schema-migrations.md",version:"0.10.x"},b=[{value:"Database Schema Migrations",id:"database-schema-migrations",children:[{value:"CLI",id:"cli",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Migration Options",id:"migration-options",children:[]},{value:"Defining your data model",id:"defining-your-data-model",children:[]},{value:"Compatibility",id:"compatibility",children:[]}]}],c={rightToc:b};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"database-schema-migrations"},"Database Schema Migrations"),Object(r.b)("p",null,"Graphback uses ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../packages/graphql-migrations"}),"graphql-migrations")," to automatically create and update tables from a GraphQL schema."),Object(r.b)("h3",{id:"cli"},"CLI"),Object(r.b)("p",null,"To create or update your database from the CLI, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"graphback db\n")),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"migrateDB")," method creates and updates your tables and columns to match your GraphQL schema."),Object(r.b)("p",null,"All the database operations are wrapped in a single transaction, so your database will be fully rolled back to its initial state if an error occurs."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import * as jsonConfig from '../graphback.json'\nimport { schemaText } from './schema';\nimport { migrateDB } from 'graphql-migrations';\nimport { GraphQLBackendCreator, PgKnexDBDataProvider } from 'graphback';\n\nconst backend = new GraphQLBackendCreator(schemaText, jsonConfig.graphqlCRUD);\nconst dbClientProvider = new PgKnexDBDataProvider(client);\n\nconst dbConfig = {\n  client: jsonConfig.db.database,\n  connection: jsonConfig.db.dbConfig\n};\n\nmigrateDB(dbConfig, schemaText, {\n  // Additional options\n}).then((ops) => {\n    console.log(ops);\n});\n\nconst pubSub = new PubSub();\n\nconst runtime = await backend.createRuntime(dbClientProvider, pubSub);\n...\n")),Object(r.b)("h3",{id:"migration-options"},"Migration Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"config"),": database configuration options."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"schemaText"),": GraphQL schema text."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateComments"),": overwrite comments on table and columns."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scalarMap"),": Custom scalar mapping. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mapListToJson"),": Map scalar lists to JSON column type by default."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"debug"),": display debugging information and SQL queries."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"removeDirectivesFromSchema"),": removes all directives from the GraphQL schema."),Object(r.b)("li",{parentName:"ul"},"All other options are not currently supported by Graphback.")))),Object(r.b)("h3",{id:"defining-your-data-model"},"Defining your data model"),Object(r.b)("h4",{id:"primary-key"},"Primary key"),Object(r.b)("p",null,"Each type must have a primary key. The primary key field must be ",Object(r.b)("inlineCode",{parentName:"p"},"id")," and the type must be ",Object(r.b)("inlineCode",{parentName:"p"},"ID"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gql"}),"type Note {\n  id: ID!\n  title: String!\n}\n")),Object(r.b)("h4",{id:"foreign-key"},"Foreign key"),Object(r.b)("p",null,"To set a foreign key, set a field reference to the related type."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gql"}),"type Comment {\n  id: ID!\n  note: Note! # this creates a `noteId` column in the `comment` table.\n}\n\ntype Note {\n  id: ID!\n  title: String!\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"NOTE: See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./relationships"}),"relationships")," for how to customise foreign key field names.")),Object(r.b)("h4",{id:"default-field-value"},"Default field value"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gql"}),'type Note {\n  id: ID!\n  title: String!\n  """\n  @db.default: false\n  """\n  complete: Boolean\n}\n')),Object(r.b)("h4",{id:"custom-column-type"},"Custom column type"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gql"}),'type Note {\n  id: ID!\n  """\n  @db.type: \'string\'\n  @db.length: 100\n  """\n  title: String!\n}\n')),Object(r.b)("h4",{id:"changing-column-names-in-graphback"},"Changing column names in graphback"),Object(r.b)("p",null,"When working with database migration library it is possible to change individual database columns.\nUsing custom column will require manual mapping in resolver or database layer. "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gql"}),'type Note {\n  id: ID!\n  """\n  @db.name: \'note_title\'\n  """\n  title: String!\n}\n')),Object(r.b)("p",null,"When using custom name in database we need to map it directly inside resolver or db layer."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"      // In your data provider\n      data.title = data['note_title']\n      return data;\n    }\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"NOTE: database migration logic require objects to have ",Object(r.b)("inlineCode",{parentName:"p"},"id: ID!")," field defined.\nRenaming ",Object(r.b)("inlineCode",{parentName:"p"},"id")," field to anything else will break Graphback data resolution logic")),Object(r.b)("h3",{id:"compatibility"},"Compatibility"),Object(r.b)("p",null,"The following database providers support full database schema migrations."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"PostgreSQL"),Object(r.b)("li",{parentName:"ul"},"SQLLite")),Object(r.b)("h1",{id:"migrations-engine-for-production-use-cases"},"Migrations Engine for Production use cases"),Object(r.b)("p",null,"As supplement to development database migrations Graphback offers additional method called\n",Object(r.b)("inlineCode",{parentName:"p"},"migrateDBUsingSchema"),".\n",Object(r.b)("inlineCode",{parentName:"p"},"migrateDBUsingSchema")," can be used to perform migrations in a controlled/production environment."),Object(r.b)("p",null,"Options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"schemaText"),": GraphQL schema text."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"strategy"),": Database initialization strategy. Options: ",Object(r.b)("inlineCode",{parentName:"li"},"UpdateDatabaseIfChanges"),", ",Object(r.b)("inlineCode",{parentName:"li"},"DropCreateDatabaseAlways"),".")),Object(r.b)("h4",{id:"strategies"},"Strategies"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"UpdateDatabaseIfChanges")," - Only update the database when your input schema has been changed."),Object(r.b)("p",null,"Options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"client"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://knexjs.org/"}),"knex")," configuration object."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"migrationsDir"),": Folder to save/read local migration data.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"DropCreateDatabaseAlways")," - Wipe and recreate a new database every time."),Object(r.b)("p",null,"Options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"client"),": Database provider type (e.g: ",Object(r.b)("inlineCode",{parentName:"li"},"pg"),", ",Object(r.b)("inlineCode",{parentName:"li"},"sqlite3"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"db"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://knexjs.org/"}),"knex")," configuration object.")),Object(r.b)("h4",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Here is an example of how to configure database initialization strategies."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import * as jsonConfig from '../graphback.json'\nimport { schemaText } from './schema';\nimport { migrateDBUsingSchema, UpdateDatabaseIfChanges } from 'graphql-migrations';\n\nconst db = new Knex(...);\n\nconst backend = new GraphQLBackendCreator(schemaText, jsonConfig.graphqlCRUD);\nconst dbClientProvider = new PgKnexDBDataProvider(client);\n\nconst dbInitialization = new UpdateDatabaseIfChanges(client, jsonConfig.folders.migrations);\n\nawait migrateDBUsingSchema(schemaText, dbInitialization)\n\nconst pubSub = new PubSub();\nconst runtime = await backend.createRuntime(dbClientProvider, pubSub);\n")),Object(r.b)("h4",{id:"limitations"},"Limitations"),Object(r.b)("p",null,"Schema migrations are in a very early phase. At present the change types that are allowed is limited to the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"TYPE_ADDED")," - Adding a new GraphQL type to your model will create an associated database table."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"FIELD_ADDED")," - Adding a field to an existing model will create a new column in your database table.")))}s.isMDXComponent=!0}}]);