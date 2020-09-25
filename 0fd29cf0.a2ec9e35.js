(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(6),i=(n(0),n(1306)),r={id:"conflict-resolution-intro",title:"Setting up Conflict Resolution",sidebar_label:"Setting up server-side Conflict Resolution"},l={unversionedId:"datasync/conflict-resolution-intro",id:"version-1.0/datasync/conflict-resolution-intro",isDocsHomePage:!1,title:"Setting up Conflict Resolution",description:"Server-side conflict resolution is an additional feature which is meant to be used alongisde Delta Queries.",source:"@site/versioned_docs/version-1.0/datasync/conflict-resolution-intro.md",slug:"/datasync/conflict-resolution-intro",permalink:"/docs/datasync/conflict-resolution-intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/datasync/conflict-resolution-intro.md",version:"1.0",sidebar_label:"Setting up server-side Conflict Resolution",sidebar:"version-1.0/docs",previous:{title:"Setting up Delta Queries",permalink:"/docs/datasync/delta-queries"},next:{title:"Conflict Resolution strategies",permalink:"/docs/datasync/conflict-resolution-strategies"}},c=[{value:"Setup",id:"setup",children:[{value:"Annotate the required models",id:"annotate-the-required-models",children:[]},{value:"Modify the template to use <code>createDataSyncAPI</code>",id:"modify-the-template-to-use-createdatasyncapi",children:[]}]},{value:"Example of Issuing a Delta Query",id:"example-of-issuing-a-delta-query",children:[]},{value:"Example Mutations",id:"example-mutations",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Server-side conflict resolution is an additional feature which is meant to be used alongisde Delta Queries. "),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"Create a new Graphback Project with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npx create-graphback datasync-project\n")),Object(i.b)("p",null,"When the CLI asks you to pick a template, you may either:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Pick the ",Object(i.b)("inlineCode",{parentName:"li"},"apollo-mongo-datasync-server-ts")," template which has out-of-the-box delta queries and server-side conflict resolution"),Object(i.b)("li",{parentName:"ol"},"Pick the ",Object(i.b)("inlineCode",{parentName:"li"},"apollo-mongo-server-ts")," template and follow along with the rest of the tutorial")),Object(i.b)("p",null,"When the CLI has finished bootstrapping your project, you may follow along with the rest of the tutorial (if you picked ",Object(i.b)("inlineCode",{parentName:"p"},"apollo-mongo-server-ts"),") or you may skip to the end of the tutorial."),Object(i.b)("h3",{id:"annotate-the-required-models"},"Annotate the required models"),Object(i.b)("p",null,"Add the ",Object(i.b)("inlineCode",{parentName:"p"},"@datasync")," annotation to your model(s) in your GraphQL SDL found in the ",Object(i.b)("inlineCode",{parentName:"p"},"model")," folder:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{3}","{3}":!0}),'""" \n@model\n@datasync(\n  ttl: 5184000\n)\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n}\n')),Object(i.b)("p",null,"This configuration transforms your model for Delta Queries (adding ",Object(i.b)("inlineCode",{parentName:"p"},"_lastUpdatedAt"),") as well as the following for Conflict resolution:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"_version")," field in the model type used for fetching base document in conflict resolution."),Object(i.b)("li",{parentName:"ol"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"_version")," field in the corresponding Mutation Input Type.")),Object(i.b)("p",null,"The model type then becomes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{9,10}","{9,10}":!0}),'""" \n@model\n@datasync(\n  ttl: 5184000\n)\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _lastUpdatedAt: GraphbackTimestamp\n  _version: Int\n}\n')),Object(i.b)("p",null,"And the Mutation Input type for it would be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{5}","{5}":!0}),"input MutateCommentInput {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _version: Int!\n}\n")),Object(i.b)("p",null,"An example mutation can be found at the end of this page."),Object(i.b)("h3",{id:"modify-the-template-to-use-createdatasyncapi"},"Modify the template to use ",Object(i.b)("inlineCode",{parentName:"h3"},"createDataSyncAPI")),Object(i.b)("p",null,"In the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/templates-release/templates/ts-apollo-mongodb-backend/src/index.ts"}),Object(i.b)("inlineCode",{parentName:"a"},"src/index.ts"))," file of the template, use  ",Object(i.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createDataSyncAPI } from '@graphback/datasync'\n\n\nconst {\n  typeDefs,\n  resolvers,\n  contextCreator\n} = createDataSyncAPI(\n  modelDefs,\n  {\n    db,\n    conflictConfig: {\n      enabled: true\n    }\n  }\n);\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"conflictConfig")," argument is used to either configure conflicts for all ",Object(i.b)("inlineCode",{parentName:"p"},"@datasync")," enabled models by directly setting global conflict parameters like ",Object(i.b)("inlineCode",{parentName:"p"},"enabled")," or configuring specific models via a ",Object(i.b)("inlineCode",{parentName:"p"},"models")," property. When conflicts are enabled for a specific model, a delta table is maintained for that model."),Object(i.b)("p",null,"An example entry in the delta table would look as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "_id": {\n        "$oid": "5f3b87ffcb1377481c391046"\n    },\n    "docId": {\n        "$oid": "5f3b87ffcb1377481c391045"\n    },\n    "_version": 1,\n    "document": {\n        "text": "Bizarre",\n        "description": "Who merged this stuff?",\n        "_version": 1,\n        "_deleted": false,\n        "_lastUpdatedAt": 1597736959165,\n        "_id": {\n            "$oid": "5f3b87ffcb1377481c391045"\n        }\n    },\n    "_ttl": {\n        "$date": "2020-08-25T07:49:19.181Z"\n    }\n}\n')),Object(i.b)("p",null,"To improve efficiency of queries on the ",Object(i.b)("inlineCode",{parentName:"p"},"delta")," table, a ",Object(i.b)("inlineCode",{parentName:"p"},"deltaTTL")," argument (in seconds) is used along with a MongoDB TTL Index to prune older entries from the delta table. In the current configuration, a default strategy of ",Object(i.b)("inlineCode",{parentName:"p"},"ClientSideWins")," is used. Please check the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/datasync/conflict-resolution-strategies"}),"Conflict Resolution Strategies")," documentation for more information on using different strategies as well as implementing custom Conflict Resolution strategies."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You may only have delta queries for one model while having both delta queries and server-side conflict resolution for another model without them interfering with each other."))),Object(i.b)("h2",{id:"example-of-issuing-a-delta-query"},"Example of Issuing a Delta Query"),Object(i.b)("p",null,"Delta Queries remain the same but with the addition of a ",Object(i.b)("inlineCode",{parentName:"p"},"_version")," field as outlined in the above sections:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  syncComments(lastSync: 1590679886048) {\n      items {\n        _id\n        text\n        description\n        _lastUpdatedAt\n        _deleted\n        _version\n      },\n      lastSync,\n      limit\n  }\n}\n")),Object(i.b)("p",null,"An example response may be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "syncComments": {\n      "items": [\n        {\n          "_id": "5f350f33c6656579a104057e",\n          "text": "Bizarre",\n          "description": "Who merged this stuff?",\n          "_lastUpdatedAt": 1597312819010,\n          "_deleted": false,\n          "_version": 1\n        }\n      ],\n      "lastSync": 1597312854109,\n      "limit": null\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"example-mutations"},"Example Mutations"),Object(i.b)("p",null,"Both updates and deletes are implemented with a default server-side Conflict Resolution strategy when it is enabled i.e. The ",Object(i.b)("inlineCode",{parentName:"p"},"ClientWins")," strategy, this means that in the event of an update or delete conflict, the client side always wins. Taking an example, suppose the ",Object(i.b)("inlineCode",{parentName:"p"},"comment")," collection consists of the following document:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": { "$oid": "5f350f33c6656579a104057e" },\n  "text": "Note 0",\n  "description": "Updated Placeholder",\n  "_version": 2,\n  "_deleted": false,\n  "_lastUpdatedAt": 1597313915015\n}\n')),Object(i.b)("p",null,"In order to update this document one has to issue a mutation as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{6}","{6}":!0}),'mutation {\n  updateComment(input: { \n    _id: "5f350f33c6656579a104057e", \n    description: "Another Update", \n    _version: 2\n  }) {\n    text\n    description,\n    _lastUpdatedAt\n    _version\n  }\n}\n')),Object(i.b)("p",null,"And receive a response like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateComment": {\n      "text": "Note 0",\n      "description": "Another Update",\n      "_lastUpdatedAt": 1597320268347,\n      "_version": 3\n    }\n  }\n}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"To issue mutations for a model with server-side Conflict resolution, the current value of the ",Object(i.b)("inlineCode",{parentName:"p"},"_version")," field must be passed in the input argument as is required by the corresponding Mutation Input Type."))),Object(i.b)("p",null,"Conflicts usually happen when a client does not have the most recent version of the data and tries to issue mutations. The server detects this using the aforementioned ",Object(i.b)("inlineCode",{parentName:"p"},"_version")," field and checks to see if fields that the client is trying to update have changed since the client last fetched the data."),Object(i.b)("p",null,"In case they have, the server calls upon the conflict resolution strategy to resolve the conflict. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/datasync/conflict-resolution-strategies"}),"Conflict Resolution Strategies")," for more info on these strategies."),Object(i.b)("p",null,"Following the previous example, if another client did not receive the above update, and tries to issue another update like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{6}","{6}":!0}),'mutation {\n  updateComment(input: { \n    _id: "5f350f33c6656579a104057e", \n    title: "Newer Title", \n    _version: 2\n  }) {\n    text\n    description,\n    _lastUpdatedAt\n    _version\n  }\n}\n')),Object(i.b)("p",null,"No conflict will occur, even if the version field is out-of-date because the ",Object(i.b)("inlineCode",{parentName:"p"},"title")," field has not changed since this client fetched the document. Therefore, it may receive a response as such:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateComment": {\n      "text": "Newer Title",\n      "description": "Another Update",\n      "_lastUpdatedAt": 1597321969016,\n      "_version": 4\n    }\n  }\n}\n')))}d.isMDXComponent=!0},1306:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);