/*! For license information please see 958.66d99088.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[958],{3242:function(t,e,n){var r=n(251),a=n(5987),o=n(184);e.Z=function(t){var e=t.patient,n=t.handleSubmit,i=t.handleOnChange;return(0,o.jsxs)("form",{onSubmit:n,children:[(0,o.jsx)(r.Z,{label:"first_name",label_txt:"First Name",type:"text",id:"first_name",name:"first_name",placeholder:"Enter First Name",value:e.first_name,onChange:i}),(0,o.jsx)(r.Z,{label:"last_name",label_txt:"Last Name",type:"text",id:"last_name",name:"last_name",placeholder:"Enter Last Name",value:e.last_name,onChange:i}),(0,o.jsx)(r.Z,{label:"age",label_txt:"Age",type:"number",id:"age",name:"age",placeholder:"Enter age",value:e.age,onChange:i}),(0,o.jsx)(r.Z,{label:"contact",label_txt:"Contact Tel.",type:"text",id:"contact",name:"contact",placeholder:"Enter telephone number",value:e.contact,onChange:i}),(0,o.jsx)(r.Z,{label:"emergency_contact",label_txt:"Emergency Contact Tel.",type:"text",id:"emergency_contact",name:"emergency_contact",placeholder:"Enter telephone number",value:e.emergency_contact,onChange:i}),(0,o.jsx)(r.Z,{label:"pre_existing_conditions",label_txt:"Pre-existing Conditions",type:"textarea",id:"pre_existing_conditions",name:"pre_existing_conditions",placeholder:"Enter Pre-existing conditions",value:e.pre_existing_conditions,onChange:i}),(0,o.jsx)(r.Z,{label:"symptoms",label_txt:"Symptoms",type:"textarea",id:"symptoms",name:"symptoms",placeholder:"Enter Symptoms",value:e.symptoms,onChange:i}),(0,o.jsx)(r.Z,{label:"diagnosis",label_txt:"Diagnosis",type:"textarea",id:"diagnosis",name:"diagnosis",placeholder:"Enter Diagnosis",value:e.diagnosis,onChange:i}),(0,o.jsx)(r.Z,{label:"treatment",label_txt:"Treatment",type:"textarea",id:"treatment",name:"treatment",placeholder:"Enter Treatment",value:e.treatment,onChange:i}),(0,o.jsx)(r.Z,{label:"medication",label_txt:"Medication",type:"textarea",id:"medication",name:"medication",placeholder:"Enter Medication",value:e.medication,onChange:i}),(0,o.jsx)(r.Z,{label:"comments",label_txt:"Comments",type:"textarea",id:"comments",name:"comments",placeholder:"Enter Comments",value:e.comments,onChange:i}),(0,o.jsx)("br",{}),(0,o.jsx)(a.Z,{type:"submit",children:"Submit"})]})}},5958:function(t,e,n){n.r(e);var r=n(4942),a=n(4165),o=n(1413),i=n(5861),c=n(9439),l=n(2791),s=n(4777),u=n(7689),h=n(1243),f=n(3108),p=n(3e3),d=n(3242),m=n(297),y=n(184);e.default=function(){var t=(0,l.useContext)(f.V),e=(0,u.s0)(),n=(0,l.useState)(!1),g=(0,c.Z)(n,2),v=g[0],x=g[1],b=(0,l.useState)({first_name:"",last_name:"",age:"",contact:"",emergency_contact:"",pre_existing_conditions:"",symptoms:"",diagnosis:"",treatment:"",medication:"",comments:""}),w=(0,c.Z)(b,2),_=w[0],j=w[1],E=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.preventDefault(),x(!0),h.Z.post("".concat("https://lifecare-sync.onrender.com/","api/patients/new"),(0,o.Z)({role:"patient"},_),{headers:{Authorization:"Bearer "+t.token,"Content-Type":"multipart/form-data"}}).then((function(){(0,p.Z)("Successfully added patient!"),setTimeout((function(){e("/patients")}),2e3)})).catch((function(t){x(!1),(0,p.S)(t.response.data.message)}));case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return v?(0,y.jsx)(m.Z,{}):(0,y.jsxs)(s.Z,{children:[(0,y.jsx)("div",{className:"prose",children:(0,y.jsx)("h2",{className:"pb-6",children:"Add Patient"})}),(0,y.jsx)(d.Z,{patient:_,handleSubmit:E,handleOnChange:function(t){var e=t.target,n=e.name,a=e.value;j((0,o.Z)((0,o.Z)({},_),{},(0,r.Z)({},n,a)))}})]})}},5987:function(t,e,n){var r=n(184);e.Z=function(t){var e,n,a=t.variant,o=t.type,i=t.onClick,c=t.children;switch(a){case"primary":default:e="bg-blue-500",n="bg-blue-700";break;case"warning":e="bg-yellow-500",n="bg-yellow-700";break;case"danger":e="bg-red-500",n="bg-red-700"}return(0,r.jsx)("button",{className:"block ".concat(e," text-white font-bold py-2 px-6 hover:").concat(n),type:o,onClick:i,children:c})}},4777:function(t,e,n){var r=n(184);e.Z=function(t){var e=t.children;return(0,r.jsx)("div",{className:"bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto",children:e})}},251:function(t,e,n){var r=n(184);e.Z=function(t){var e,n=t.label,a=t.label_txt,o=t.type,i=t.id,c=t.name,l=t.placeholder,s=t.value,u=t.onChange;return"text"===o||"number"===o||"email"===o||"password"===o?e=(0,r.jsx)("input",{type:o,id:i,name:c,placeholder:l,value:s,onChange:u,className:"border border-gray-300 shadow p-2 w-full"}):"textarea"===o?e=(0,r.jsx)("textarea",{className:"border border-gray-300 shadow p-2 w-full",style:{resize:"none"},id:i,name:c,placeholder:l,rows:"2",value:s,onChange:u}):"file"===o&&(e=(0,r.jsx)("input",{className:"border border-gray-300 shadow w-full file:bg-blue-500 file:text-white file:font-bold file:py-2 file:px-4",type:o,onChange:u})),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:n,className:"block mb-2 font-bold text-gray-600",children:a}),e]})}},5861:function(t,e,n){function r(t,e,n,r,a,o,i){try{var c=t[o](i),l=c.value}catch(s){return void n(s)}c.done?e(l):Promise.resolve(l).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,l,"next",t)}function l(t){r(i,a,o,c,l,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return a}})},4165:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(1002);function a(){a=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var a=e&&e.prototype instanceof x?e:x,o=Object.create(a.prototype),c=new P(r||[]);return i(o,"_invoke",{value:N(t,n,c)}),o}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",m="suspendedYield",y="executing",g="completed",v={};function x(){}function b(){}function w(){}var _={};h(_,l,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(T([])));E&&E!==n&&o.call(E,l)&&(_=E);var Z=w.prototype=x.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(a,i,c,l){var s=p(t[a],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==(0,r.Z)(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,l)}))}l(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}})}function N(e,n,r){var a=d;return function(o,i){if(a===y)throw new Error("Generator is already running");if(a===g){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var l=k(c,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=y;var s=p(e,n,r);if("normal"===s.type){if(a=r.done?g:m,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a=g,r.method="throw",r.arg=s.arg)}}}function k(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=p(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[l];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(o.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError((0,r.Z)(e)+" is not iterable")}return b.prototype=w,i(Z,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:b,configurable:!0}),b.displayName=h(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,u,"GeneratorFunction")),t.prototype=Object.create(Z),t},e.awrap=function(t){return{__await:t}},L(C.prototype),h(C.prototype,s,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new C(f(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(Z),h(Z,u,"Generator"),h(Z,l,(function(){return this})),h(Z,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}}}]);
//# sourceMappingURL=958.66d99088.chunk.js.map