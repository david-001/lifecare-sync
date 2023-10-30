/*! For license information please see 240.e34b31b2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[240],{4240:function(t,e,r){r.r(e);var n=r(4942),o=r(4165),a=r(1413),i=r(5861),l=r(9439),c=r(2791),s=r(4777),u=r(251),f=r(5987),h=r(3e3),p=r(7689),d=r(1243),m=(r(5462),r(8174)),v=r(184);e.default=function(){var t=(0,p.s0)(),e=(0,c.useState)({first_name:"",last_name:"",phone:"",image:null,email:"",password:"",password_confirmation:""}),r=(0,l.Z)(e,2),y=r[0],g=r[1],w=y.first_name,b=y.last_name,x=y.phone,_=y.email,j=y.password,L=y.password_confirmation,Z=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(r){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),d.Z.post("".concat("https://lifecare-sync.vercel.app/","api/users/register"),(0,a.Z)({role:"doctor"},y),{headers:{"Content-Type":"multipart/form-data"}}).then((function(){(0,h.Z)("Successfully created account."),setTimeout((function(){t("/login")}),2e3)})).catch((function(t){t.response.data.message?(0,h.S)(t.response.data.message):(0,h.S)(t.response.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(t){var e=t.target,r=e.name,o=e.value;g((0,a.Z)((0,a.Z)({},y),{},(0,n.Z)({},r,o)))};return(0,v.jsxs)(s.Z,{children:[(0,v.jsx)("div",{className:"prose",children:(0,v.jsx)("h2",{className:"pb-6",children:"Registration"})}),(0,v.jsxs)("form",{onSubmit:Z,children:[(0,v.jsx)(u.Z,{label:"first_name",label_txt:"First Name",type:"text",id:"first_name",name:"first_name",placeholder:"First Name",value:w,onChange:E}),(0,v.jsx)(u.Z,{label:"last_name",label_txt:"Last Name",type:"text",id:"last_name",name:"last_name",placeholder:"Last Name",value:b,onChange:E}),(0,v.jsx)(u.Z,{label:"phone",label_txt:"Phone",type:"text",id:"phone",name:"phone",placeholder:"Phone",value:x,onChange:E}),(0,v.jsx)(u.Z,{type:"file",label:"image",label_txt:"Upload profile photo",accept:".jpg,.png,.jpeg",onChange:function(t){var e;t.target.files&&1===t.target.files.length&&(e=t.target.files[0],g((0,a.Z)((0,a.Z)({},y),{},{image:e})))}}),(0,v.jsx)(u.Z,{label:"email",label_txt:"Email",type:"email",id:"email",name:"email",placeholder:"Email",value:_,onChange:E}),(0,v.jsx)(u.Z,{label:"password",label_txt:"Password",type:"password",id:"password",name:"password",placeholder:"Password",value:j,onChange:E}),(0,v.jsx)(u.Z,{label:"password_confirmation",label_txt:"Password Confirmation",type:"password",id:"password_confirmation",name:"password_confirmation",placeholder:"Password Confirmation",value:L,onChange:E}),(0,v.jsx)("br",{}),(0,v.jsx)(f.Z,{variant:"primary",type:"submit",children:"Register"})]}),(0,v.jsx)(m.Ix,{})]})}},5987:function(t,e,r){var n=r(184);e.Z=function(t){var e=t.variant,r=t.type,o=t.onClick,a=t.children,i="bg-blue-600";switch(e){case"primary":default:i="bg-blue-600";break;case"warning":i="bg-yellow-500";break;case"danger":i="bg-red-600"}return(0,n.jsx)("button",{className:"block ".concat(i," text-white font-bold py-2 px-6"),type:r,onClick:o,children:a})}},4777:function(t,e,r){var n=r(184);e.Z=function(t){var e=t.children;return(0,n.jsx)("div",{className:"bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto",children:e})}},251:function(t,e,r){var n=r(184);e.Z=function(t){var e,r=t.label,o=t.label_txt,a=t.type,i=t.id,l=t.name,c=t.placeholder,s=t.value,u=t.onChange;return"text"===a||"number"===a||"email"===a||"password"===a?e=(0,n.jsx)("input",{type:a,id:i,name:l,placeholder:c,value:s,onChange:u,className:"border border-gray-300 shadow p-2 w-full"}):"textarea"===a?e=(0,n.jsx)("textarea",{className:"border border-gray-300 shadow p-2 w-full",style:{resize:"none"},id:i,name:l,placeholder:c,rows:"2",value:s,onChange:u}):"file"===a&&(e=(0,n.jsx)("input",{className:"border border-gray-300 shadow w-full file:bg-blue-500 file:text-white file:font-bold file:py-2 file:px-4",type:a,onChange:u})),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:r,className:"block mb-2 font-bold text-gray-600",children:o}),e]})}},5462:function(){},5861:function(t,e,r){function n(t,e,r,n,o,a,i){try{var l=t[a](i),c=l.value}catch(s){return void r(s)}l.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function l(t){n(i,o,a,l,c,"next",t)}function c(t){n(i,o,a,l,c,"throw",t)}l(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),l=new S(n||[]);return i(a,"_invoke",{value:k(t,r,l)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function w(){}function b(){}function x(){}var _={};f(_,c,(function(){return this}));var j=Object.getPrototypeOf,L=j&&j(j(F([])));L&&L!==r&&a.call(L,c)&&(_=L);var Z=x.prototype=w.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,i,l,c){var s=p(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==(0,n.Z)(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,l,c)}),(function(t){r("throw",t,l,c)})):e.resolve(f).then((function(t){u.value=t,l(u)}),(function(t){return r("throw",t,l,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function k(e,r,n){var o=d;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=C(l,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?y:m,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError((0,n.Z)(e)+" is not iterable")}return b.prototype=x,i(Z,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,u,"GeneratorFunction")),t.prototype=Object.create(Z),t},e.awrap=function(t){return{__await:t}},E(N.prototype),f(N.prototype,s,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new N(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(Z),f(Z,u,"Generator"),f(Z,c,(function(){return this})),f(Z,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}}}]);
//# sourceMappingURL=240.e34b31b2.chunk.js.map