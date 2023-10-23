/*! For license information please see 215.cf99a1e9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[215],{8215:function(t,e,r){r.r(e);var n=r(4942),o=r(4165),a=r(1413),i=r(5861),c=r(9439),l=r(2791),u=r(4777),s=r(251),h=r(5987),f=r(3108),p=r(7689),d=r(3e3),v=r(1243),y=(r(5462),r(8174)),m=r(184);e.default=function(){var t=(0,l.useContext)(f.V),e=(0,p.s0)(),r=(0,l.useState)({email:"",password:""}),g=(0,c.Z)(r,2),w=g[0],b=g[1],x=w.email,L=w.password,j=function(){var r=(0,i.Z)((0,o.Z)().mark((function r(n){return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.preventDefault(),v.Z.post("".concat("https://lifecaresync.web.app/","api/users/login"),(0,a.Z)({},w)).then((function(r){t.login(r.data.userId,r.data.token,r.data.expire),e("/patients")})).catch((function(t){console.log(t),t.response.data.message?(0,d.S)(t.response.data.message):(0,d.S)(t.response.data)}));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),E=function(t){var e=t.target,r=e.name,o=e.value;b((0,a.Z)((0,a.Z)({},w),{},(0,n.Z)({},r,o)))};return(0,m.jsxs)(u.Z,{children:[(0,m.jsx)("div",{className:"prose",children:(0,m.jsx)("h2",{className:"pb-6",children:"Login"})}),(0,m.jsxs)("form",{onSubmit:j,children:[(0,m.jsx)(s.Z,{label:"email",label_txt:"Email",type:"email",id:"email",name:"email",placeholder:"Email",value:x,onChange:E}),(0,m.jsx)(s.Z,{label:"password",label_txt:"Password",type:"password",id:"password",name:"password",placeholder:"Password",value:L,onChange:E}),(0,m.jsx)(h.Z,{variant:"primary",type:"submit",children:"Login"})]}),(0,m.jsx)(y.Ix,{})]})}},5987:function(t,e,r){var n=r(184);e.Z=function(t){var e=t.variant,r=t.type,o=t.onClick,a=t.children,i="bg-blue-600";switch(e){case"primary":default:i="bg-blue-600";break;case"warning":i="bg-yellow-500";break;case"danger":i="bg-red-600"}return(0,n.jsx)("button",{className:"block ".concat(i," text-white font-bold py-2 px-6"),type:r,onClick:o,children:a})}},4777:function(t,e,r){var n=r(184);e.Z=function(t){var e=t.children;return(0,n.jsx)("div",{className:"bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto",children:e})}},251:function(t,e,r){var n=r(184);e.Z=function(t){var e,r=t.label,o=t.label_txt,a=t.type,i=t.id,c=t.name,l=t.placeholder,u=t.value,s=t.onChange;return"text"===a||"number"===a||"email"===a||"password"===a?e=(0,n.jsx)("input",{type:a,id:i,name:c,placeholder:l,value:u,onChange:s,className:"border border-gray-300 shadow p-2 w-full"}):"textarea"===a?e=(0,n.jsx)("textarea",{className:"border border-gray-300 shadow p-2 w-full",style:{resize:"none"},id:i,name:c,placeholder:l,rows:"2",value:u,onChange:s}):"file"===a&&(e=(0,n.jsx)("input",{className:"border border-gray-300 shadow w-full file:bg-blue-500 file:text-white file:font-bold file:py-2 file:px-4",type:a,onChange:s})),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:r,className:"block mb-2 font-bold text-gray-600",children:o}),e]})}},5462:function(){},5861:function(t,e,r){function n(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,l,"next",t)}function l(t){n(i,o,a,c,l,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new S(n||[]);return i(a,"_invoke",{value:N(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};h(L,l,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(G([])));E&&E!==r&&a.call(E,l)&&(L=E);var k=x.prototype=w.prototype=Object.create(L);function Z(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,c,l){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==(0,n.Z)(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,l)}))}l(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function N(e,r,n){var o=d;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=O(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError((0,n.Z)(e)+" is not iterable")}return b.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=h(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},Z(_.prototype),h(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},Z(k),h(k,s,"Generator"),h(k,l,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}}}]);
//# sourceMappingURL=215.cf99a1e9.chunk.js.map