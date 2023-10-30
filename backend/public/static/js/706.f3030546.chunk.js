/*! For license information please see 706.f3030546.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[706],{4706:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(9439),a=r(2791),o=r(4777),i=r(5987),s=r(3e3),l=r(7906),c=r(1243),u=r(3108),h=r(297),d=r(4942),f=r(4165),p=r(1413),m=r(5861),v=r(251),x=r(184),g=function(e){var t=e.show,r=e.handleClose,o=e.triggerRefresh,l=(0,a.useContext)(u.V),h=(0,a.useState)(e.profile),g=(0,n.Z)(h,2),y=g[0],w=g[1],b=y.first_name,j=y.last_name,N=y.phone,_=function(){var t=(0,m.Z)((0,f.Z)().mark((function t(n){return(0,f.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),c.Z.patch("".concat("https://lifecare-sync.onrender.com/","api/users/updateprofile"),(0,p.Z)({role:"doctor",old_image:e.profile.image},y),{headers:{Authorization:"Bearer "+l.token,"Content-Type":"multipart/form-data"}}).then((function(e){(0,s.Z)(e.data.response),r()})).then((function(){return o()})).catch((function(e){console.log("err"),(0,s.S)(e.response.data.message)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Z=function(e){var t=e.target,r=t.name,n=t.value;w((0,p.Z)((0,p.Z)({},y),{},(0,d.Z)({},r,n)))};return(0,x.jsx)("div",{children:t?(0,x.jsx)("div",{className:"bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center items-center",children:(0,x.jsxs)("div",{className:"bg-white overflow-y-auto w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl pl-10 pb-10",children:[(0,x.jsx)("div",{className:"bg-white overflow-auto flex justify-end",children:(0,x.jsxs)("button",{type:"button",className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",onClick:r,children:[(0,x.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,x.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})}),(0,x.jsxs)("div",{className:"pr-10",children:[(0,x.jsx)("div",{className:"prose",children:(0,x.jsx)("h2",{className:"pb-6",children:"Update My Profile"})}),(0,x.jsxs)("form",{onSubmit:_,children:[(0,x.jsx)(v.Z,{label:"first_name",label_txt:"First Name",type:"text",id:"first_name",name:"first_name",placeholder:"First Name",value:b,onChange:Z}),(0,x.jsx)(v.Z,{label:"last_name",label_txt:"Last Name",type:"text",id:"last_name",name:"last_name",placeholder:"Last Name",value:j,onChange:Z}),(0,x.jsx)(v.Z,{label:"phone",label_txt:"Phone",type:"text",id:"phone",name:"phone",placeholder:"Phone",value:N,onChange:Z}),(0,x.jsx)("br",{}),(0,x.jsx)(i.Z,{variant:"primary",type:"submit",children:"Update Profile"})]})]})]})}):(0,x.jsx)("div",{className:"hidden"})})},y=function(e){var t=e.show,r=e.handleClose,o=e.triggerRefresh,l=(0,a.useContext)(u.V),h=(0,a.useState)({password_initial:"",password_update:""}),g=(0,n.Z)(h,2),y=g[0],w=g[1],b=y.password_initial,j=y.password_update,N=function(){var e=(0,m.Z)((0,f.Z)().mark((function e(t){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c.Z.patch("".concat("https://lifecare-sync.onrender.com/","api/users/updatepassword"),(0,p.Z)({},y),{headers:{Authorization:"Bearer "+l.token}}).then((function(e){(0,s.Z)(e.data.result),r()})).then((function(){return o()})).catch((function(e){(0,s.S)(e.response.data.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=e.target,r=t.name,n=t.value;w((0,p.Z)((0,p.Z)({},y),{},(0,d.Z)({},r,n)))};return(0,x.jsx)("div",{children:t?(0,x.jsx)("div",{className:"bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center items-center",children:(0,x.jsxs)("div",{className:"bg-white overflow-y-auto w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl pl-10 pb-10",children:[(0,x.jsx)("div",{className:"bg-white overflow-auto flex justify-end",children:(0,x.jsxs)("button",{type:"button",className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",onClick:r,children:[(0,x.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,x.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})}),(0,x.jsxs)("div",{className:"pr-10",children:[(0,x.jsx)("div",{className:"prose",children:(0,x.jsx)("h2",{className:"pb-6",children:"Update Password"})}),(0,x.jsxs)("form",{onSubmit:N,children:[(0,x.jsx)(v.Z,{label:"password_initial",label_txt:"Initial Password",type:"password",id:"password_initial",name:"password_initial",placeholder:"Initial Password",value:b,onChange:_}),(0,x.jsx)(v.Z,{label:"password_update",label_txt:"Updated Password",type:"password",id:"password_update",name:"password_update",placeholder:"Update Password",value:j,onChange:_}),(0,x.jsx)("br",{}),(0,x.jsx)(i.Z,{variant:"primary",type:"submit",children:"Update Password"})]})]})]})}):(0,x.jsx)("div",{className:"hidden"})})},w=function(){var e=(0,a.useContext)(u.V),t=(0,a.useState)(null),r=(0,n.Z)(t,2),d=r[0],f=r[1],p=(0,a.useState)(!1),m=(0,n.Z)(p,2),v=m[0],w=m[1],b=(0,a.useState)(!1),j=(0,n.Z)(b,2),N=j[0],_=j[1],Z=(0,a.useState)(!1),k=(0,n.Z)(Z,2),L=k[0],C=k[1],E=(0,a.useState)(!1),P=(0,n.Z)(E,2),S=P[0],O=P[1];return(0,a.useEffect)((function(){e.token&&c.Z.get("".concat("https://lifecare-sync.onrender.com/","api/users/profile"),{headers:{Authorization:"Bearer "+e.token}}).then((function(e){var t,r=e.data.profile.first_name,n=e.data.profile.last_name;t=e.data.profile.phone?e.data.profile.phone:"";var a=e.data.profile.image,o=e.data.email;f({first_name:r,last_name:n,phone:t,image:a,email:o})})).catch((function(e){(0,s.S)(e)}))}),[e,L,S]),d?(0,x.jsxs)(o.Z,{children:[(0,x.jsx)("div",{className:"prose",children:(0,x.jsx)("h2",{className:"pb-6",children:"My Profile"})}),(0,x.jsx)("hr",{}),(0,x.jsx)("br",{}),(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:"flex flex-wrap",children:[(0,x.jsx)("div",{className:"pb-10 flex justify-center items-center lg:w-52",children:(0,x.jsx)("img",{src:d.image?"https://lifecare-sync.onrender.com/"+d.image:l,alt:"".concat(d.first_name," ").concat(d.last_name)})}),(0,x.jsx)("div",{className:"w-2/3 lg:pl-8",children:(0,x.jsx)("table",{children:(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"font-bold",children:"First Name"}),(0,x.jsx)("td",{className:"py-2 pl-4",children:d.first_name})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"font-bold",children:"Last Name"}),(0,x.jsx)("td",{className:"py-2 pl-4",children:d.last_name})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"font-bold",children:"Phone"}),(0,x.jsx)("td",{className:"py-2 pl-4",children:d.phone})]})]})})})]})}),(0,x.jsxs)("div",{className:"flex justify-between",children:[(0,x.jsx)(i.Z,{variant:"warning",onClick:function(){w(!0)},children:"Update Profile"}),(0,x.jsx)(i.Z,{variant:"danger",onClick:function(){_(!0)},children:"Update Password"})]}),(0,x.jsx)("div",{children:(0,x.jsx)(g,{show:v,handleClose:function(){return w(!1)},profile:d,triggerRefresh:function(){return C((function(e){return!e}))}})}),(0,x.jsx)("div",{children:(0,x.jsx)(y,{show:N,handleClose:function(){return _(!1)},triggerRefresh:function(){return O((function(e){return!e}))}})})]}):(0,x.jsx)(h.Z,{})}},5987:function(e,t,r){var n=r(184);t.Z=function(e){var t,r,a=e.variant,o=e.type,i=e.onClick,s=e.children;switch(a){case"primary":default:t="bg-blue-500",r="bg-blue-700";break;case"warning":t="bg-yellow-500",r="bg-yellow-700";break;case"danger":t="bg-red-500",r="bg-red-700"}return(0,n.jsx)("button",{className:"block ".concat(t," text-white font-bold py-2 px-6 hover:").concat(r),type:o,onClick:i,children:s})}},4777:function(e,t,r){var n=r(184);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto",children:t})}},251:function(e,t,r){var n=r(184);t.Z=function(e){var t,r=e.label,a=e.label_txt,o=e.type,i=e.id,s=e.name,l=e.placeholder,c=e.value,u=e.onChange;return"text"===o||"number"===o||"email"===o||"password"===o?t=(0,n.jsx)("input",{type:o,id:i,name:s,placeholder:l,value:c,onChange:u,className:"border border-gray-300 shadow p-2 w-full"}):"textarea"===o?t=(0,n.jsx)("textarea",{className:"border border-gray-300 shadow p-2 w-full",style:{resize:"none"},id:i,name:s,placeholder:l,rows:"2",value:c,onChange:u}):"file"===o&&(t=(0,n.jsx)("input",{className:"border border-gray-300 shadow w-full file:bg-blue-500 file:text-white file:font-bold file:py-2 file:px-4",type:o,onChange:u})),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:r,className:"block mb-2 font-bold text-gray-600",children:a}),t]})}},7906:function(e,t,r){e.exports=r.p+"static/media/profile_photo.7a6a6c54279a54d1977c.jpeg"},5861:function(e,t,r){function n(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function s(e){n(i,a,o,s,l,"next",e)}function l(e){n(i,a,o,s,l,"throw",e)}s(void 0)}))}}r.d(t,{Z:function(){return a}})},4165:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(1002);function a(){a=function(){return t};var e,t={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,o=Object.create(a.prototype),s=new O(n||[]);return i(o,"_invoke",{value:C(e,r,s)}),o}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var p="suspendedStart",m="suspendedYield",v="executing",x="completed",g={};function y(){}function w(){}function b(){}var j={};h(j,l,(function(){return this}));var N=Object.getPrototypeOf,_=N&&N(N(F([])));_&&_!==r&&o.call(_,l)&&(j=_);var Z=b.prototype=y.prototype=Object.create(j);function k(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(a,i,s,l){var c=f(e[a],e,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==(0,n.Z)(h)&&o.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,s,l)}),(function(e){r("throw",e,s,l)})):t.resolve(h).then((function(e){u.value=e,s(u)}),(function(e){return r("throw",e,s,l)}))}l(c.arg)}var a;i(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}})}function C(t,r,n){var a=p;return function(o,i){if(a===v)throw new Error("Generator is already running");if(a===x){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var l=E(s,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=x,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=v;var c=f(t,r,n);if("normal"===c.type){if(a=n.done?x:m,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=x,n.method="throw",n.arg=c.arg)}}}function E(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=f(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function F(t){if(t||""===t){var r=t[l];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(o.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError((0,n.Z)(t)+" is not iterable")}return w.prototype=b,i(Z,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:w,configurable:!0}),w.displayName=h(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,h(e,u,"GeneratorFunction")),e.prototype=Object.create(Z),e},t.awrap=function(e){return{__await:e}},k(L.prototype),h(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(d(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(Z),h(Z,u,"Generator"),h(Z,l,(function(){return this})),h(Z,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=F,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}}}]);
//# sourceMappingURL=706.f3030546.chunk.js.map