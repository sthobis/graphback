(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{1084:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return y}));var t=n(0),r=n.n(t);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=t,y=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return n?r.a.createElement(y,o(o({ref:a},s),{},{components:n})):r.a.createElement(y,o({ref:a},s))}));function y(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},453:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return p}));var t=n(2),r=n(6),c=(n(0),n(1084)),i={id:"_datasyncplugin_",title:"DataSyncPlugin",sidebar_label:"DataSyncPlugin"},o={unversionedId:"api/graphback-datasync/modules/_datasyncplugin_",id:"version-0.15.x/api/graphback-datasync/modules/_datasyncplugin_",isDocsHomePage:!1,title:"DataSyncPlugin",description:"Index",source:"@site/versioned_docs/version-0.15.x/api/graphback-datasync/modules/_datasyncplugin_.md",slug:"/api/graphback-datasync/modules/_datasyncplugin_",permalink:"/docs/0.15.x/api/graphback-datasync/modules/_datasyncplugin_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-datasync/modules/_datasyncplugin_.md",version:"0.15.x",sidebar_label:"DataSyncPlugin"},l=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Variables",id:"variables",children:[]}]},{value:"Variables",id:"variables-1",children:[{value:"<code>Const</code> DATASYNC_PLUGIN_NAME",id:"const-datasync_plugin_name",children:[]}]}],s={rightToc:l};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"classes"},"Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"DataSyncPlugin"))),Object(c.b)("h3",{id:"variables"},"Variables"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-datasync/modules/_datasyncplugin_#const-datasync_plugin_name"}),"DATASYNC_PLUGIN_NAME"))),Object(c.b)("h2",{id:"variables-1"},"Variables"),Object(c.b)("h3",{id:"const-datasync_plugin_name"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," DATASYNC_PLUGIN_NAME"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DATASYNC_PLUGIN_NAME"),": ",Object(c.b)("em",{parentName:"p"},'"DataSyncPlugin"'),' = "DataSyncPlugin"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(t.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-datasync/src/DataSyncPlugin.ts#L16"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:16"))),Object(c.b)("p",null,"Configuration for Schema generator CRUD plugin"))}p.isMDXComponent=!0}}]);