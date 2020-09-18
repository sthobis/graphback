(window.webpackJsonp=window.webpackJsonp||[]).push([[801],{1079:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(1093),i=r(1088),c=r(1098),l=r.n(c),s=r(1090),u=r(1089),m=r(855),h=r.n(m);function f(e){var t=e.siteConfig;return n.a.createElement("header",{className:l()("hero hero--primary",h.a.heroBanner,h.a.heroGraphback)},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--6 col--offset-3 text--left"},n.a.createElement("div",{className:h.a.fadeIn},n.a.createElement("div",{className:h.a.heroImage},n.a.createElement("img",{src:"/img/logo.png",alt:"logo"})),n.a.createElement("p",{className:"hero__title"},t.tagline),n.a.createElement("ul",null,n.a.createElement("li",null,"Out of the Box Node.js GraphQL API based on your model"),n.a.createElement("li",null,"Full control over the generated code or runtime framework"),n.a.createElement("li",null,"Manages complexity of database management")),n.a.createElement("div",{className:h.a.buttons},n.a.createElement(u.a,{className:l()("button button--primary button--lg button--rounded",h.a.getStarted),to:Object(s.a)("docs/introduction")},"Get Started")))))))}var p=r(856),d=r.n(p),g=[{title:n.a.createElement(n.a.Fragment,null,"Define your model"),imageUrl:"img/input.png",description:n.a.createElement(n.a.Fragment,null)},{title:n.a.createElement(n.a.Fragment,null,"Choose your stack"),imageUrl:"img/config.png",description:n.a.createElement(n.a.Fragment,null)},{title:n.a.createElement(n.a.Fragment,null,"Deploy"),imageUrl:"img/rocket.png",description:n.a.createElement(n.a.Fragment,null)}];function v(e){var t=e.imageUrl,r=e.title,a=e.description,o=Object(s.a)(t);return n.a.createElement("div",{className:"text--center"},o&&n.a.createElement("div",{className:"text--center"},n.a.createElement("img",{className:d.a.featureImage,src:o,alt:r})),n.a.createElement("h3",{className:d.a.featureTitle},r),n.a.createElement("p",null,a))}function y(){return n.a.createElement("div",{className:d.a.splitContainer},n.a.createElement("div",{className:l()(d.a.leftSplit,d.a.featureSticky)},n.a.createElement("div",{id:"sticky",className:l()(d.a.stickyContent)},n.a.createElement("h2",{className:"hero__subtitle"},"Graphback Workflow"),n.a.createElement("p",null,"Graphback provides command line client for generating fully functional GraphQL enabled Node.js server and client side applications. Graphback will generate production-ready application based on your GraphQL types in seconds."))),n.a.createElement("div",{className:d.a.rightSplit},n.a.createElement("div",{className:l()(d.a.splitRow,d.a.before)}),g&&g.length&&g.map((function(e,t){return n.a.createElement("div",{className:d.a.splitRow,key:t},n.a.createElement(v,e))})),n.a.createElement("div",{className:l()(d.a.splitRow,d.a.after)})))}var E=r(1131),b=r.n(E);function w(e,t,r,a,n,o,i){try{var c=e[o](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(a,n)}function N(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){w(o,a,n,i,c,"next",e)}function c(e){w(o,a,n,i,c,"throw",e)}i(void 0)}))}}var k=r(857),x=r.n(k);function L(){var e=function(){document.getElementById("underscore").classList.toggle("hidden")};return Object(a.useEffect)((function(){var t=setInterval(e,400);return function(){return clearInterval(t)}})),n.a.createElement("div",{id:"underscore",className:x.a.underscore},"_")}function G(e){var t=e.phrase,r=1,o=!1,i=!1,c=function(){var e=N(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("text").innerHTML=t.substring(0,r),a=o?u:s,e.next=5,m();case 5:l()||a();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){return i||r===t.length+1&&!o||0===r&&o},s=function(){r<t.length+1&&r++},u=function(){r>0&&r--},m=function(){var e=N(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o||r!==t.length+1){e.next=3;break}return e.next=3,h();case 3:if(!o||0!==r){e.next=6;break}return e.next=6,h();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return o=!o,i=!0,new Promise((function(e){setTimeout((function(){i=!1,e()}),3e3)}))};return Object(a.useEffect)((function(){var e=setInterval(c,120);return function(){return clearInterval(e)}})),n.a.createElement("span",{id:"text"})}function j(){return n.a.createElement("div",null,n.a.createElement("div",{className:x.a.terminalHeader},n.a.createElement("p",null,"Quick start!")),n.a.createElement("div",{className:x.a.terminal},n.a.createElement("span",null,">\xa0\xa0"),n.a.createElement(G,{phrase:"npx graphback-cli init your-app"}),n.a.createElement(L,null)))}var _=r(858),O=r.n(_);function F(e){var t,r=e.open,a=e.close;return n.a.createElement("div",{className:l()(O.a.modalWindow,{"hide-modal":!r})},n.a.createElement("div",{className:O.a.modalBackground}),n.a.createElement("a",{href:"#video",className:O.a.close,onClick:a},"close"),n.a.createElement("div",{className:O.a.modalContent},n.a.createElement("div",{className:O.a.youtubeWrapper},n.a.createElement("iframe",((t={className:O.a.youtubeIFrame,frameBorder:"0",width:"560",height:"310",scrolling:"no",marginHeight:"0",marginWidth:"0",src:"https://www.youtube.com/embed/z3hUF5egjT4"}).frameBorder="0",t.allowFullScreen=!0,t.align="middle",t)))))}function I(){var e=Object(a.useState)(!1),t=e[0],r=e[1],o=function(e){e.preventDefault(),r(!t)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,{open:t,close:o}),n.a.createElement("section",{id:"video",className:O.a.videoSection},n.a.createElement("div",{className:"text--center"},n.a.createElement("h2",{className:O.a.subtitle},"Graphback in 10 minutes"),n.a.createElement("div",{className:O.a.videoComponent},n.a.createElement("a",{href:"#",className:O.a.play,onClick:o},n.a.createElement("img",{src:Object(s.a)("img/play.png"),alt:""}))))))}var S=[{imageUrl:"img/plugin-blog.jpg",title:"Graphback - Low Code, GraphQL based API suited for your needs",content:"The main purpose of Graphback is to provide an autogenerated GraphQL based CRUD API for developers and their various use cases. Graphback differs from other GraphQL based solutions by utilizing code generation and application templates as a quick way to get started.",link:"https://medium.com/@wtr/graphback-plugin-based-realtime-database-generator-78f4f608b81e"},{imageUrl:"img/graphqlserve.jpeg",title:"Setup a GraphQL server in seconds using graphql-serve",content:"With just one command, you can have a GraphQL server running on your machine that you can use to test a frontend application or just test GraphQL. GraphQL serve supports data loading and has comprehensive support for all types of relationships",link:"https://medium.com/@shibanidash71/setup-a-graphql-server-in-seconds-using-graphql-serve-96c5b488de41"},{imageUrl:"img/graphback-blog.png",title:"The evolution of the GraphQL ecosystem \u2014 Graphback",content:"The target of Graphback is to make sample applications working with your business logic by utilizing application templates and code generation. Developers can provide GraphQL schema as input and the command-line client will generate data access methods on top of the chosen stack",link:"https://medium.com/@wtr/the-evolution-of-the-graphql-ecosystem-graphback-506a1d0d4dfb"}];function C(e){var t=e.imageUrl,r=e.title,a=e.content;return n.a.createElement("div",{className:"card-demo"},n.a.createElement("div",{className:"card",style:{borderRadius:0,padding:"2rem",border:"1px solid #f5f5f5"}},n.a.createElement("div",{className:"card__image"},n.a.createElement("img",{src:Object(s.a)(t),alt:"Blog card image"})),n.a.createElement("div",{className:"card__body"},n.a.createElement("h4",null,r),n.a.createElement("small",null,a))))}function Q(){return n.a.createElement("section",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#fff",padding:"2em 0"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--12"},n.a.createElement("h1",null,"Learn more"))),n.a.createElement("div",{className:"row"},S&&S.length&&S.map((function(e,t){return n.a.createElement("div",{className:"col col--4",key:t},n.a.createElement("a",{className:"card-anchor",href:e.link},n.a.createElement(C,e)))})))))}t.default=function(){var e=Object(i.a)().siteConfig,t=void 0===e?{}:e;return n.a.createElement(o.a,{title:t.title,description:"Graphback <head />"},n.a.createElement(f,{siteConfig:t}),n.a.createElement(y,null),n.a.createElement(j,null),n.a.createElement(I,null),n.a.createElement(Q,null))}},1131:function(e,t,r){e.exports=r(1132)},1132:function(e,t,r){var a=function(e){"use strict";var t,r=Object.prototype,a=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(I){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var n=t&&t.prototype instanceof g?t:g,o=Object.create(n.prototype),i=new _(a||[]);return o._invoke=function(e,t,r){var a=m;return function(n,o){if(a===f)throw new Error("Generator is already running");if(a===p){if("throw"===n)throw o;return F()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=f;var l=u(e,t,r);if("normal"===l.type){if(a=r.done?p:h,l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=p,r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(I){return{type:"throw",arg:I}}}e.wrap=s;var m="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function g(){}function v(){}function y(){}var E={};E[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==r&&a.call(w,o)&&(E=w);var N=y.prototype=g.prototype=Object.create(E);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(n,o,i,c){var l=u(e[n],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var n;this._invoke=function(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}}function L(e,r){var a=e.iterator[r.method];if(a===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=u(a,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function G(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(G,this),this.reset(!0)}function O(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:t,done:!0}}return v.prototype=N.constructor=y,y.constructor=v,v.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(N),e},e.awrap=function(e){return{__await:e}},k(x.prototype),x.prototype[i]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new x(s(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(N),l(N,c,"Generator"),N[o]=function(){return this},N.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=O,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return c.type="throw",c.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;j(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:O(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}}}]);