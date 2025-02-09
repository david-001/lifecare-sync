"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[240],{240:(e,a,l)=>{l.r(a),l.d(a,{default:()=>h});var s=l(63),o=l(791),t=l(777),r=l(251),n=l(987),i=l(0),c=l(689),d=l(243),m=l(297),p=l(184);const h=()=>{const e=(0,c.s0)(),[a,l]=(0,o.useState)(!1),[h,b]=(0,o.useState)({name:"",phone:"",email:"",password:"",password_confirmation:""}),{name:u,phone:x,email:w,password:g,password_confirmation:f}=h,y=e=>{const{name:a,value:l}=e.target;b((0,s.Z)((0,s.Z)({},h),{},{[a]:l}))};return a?(0,p.jsx)(m.Z,{}):(0,p.jsxs)(t.Z,{children:[(0,p.jsx)("div",{className:"prose",children:(0,p.jsx)("h2",{className:"pb-6",children:"Registration"})}),(0,p.jsxs)("form",{onSubmit:async a=>{a.preventDefault(),l(!0),d.Z.post("".concat("https://lifecare-sync.onrender.com/","api/users/register"),(0,s.Z)({},h)).then((()=>{(0,i.Z)("Successfully created account."),setTimeout((()=>{e("/login")}),2e3)})).catch((e=>{l(!1),(0,i.S)(e.response.data.message)}))},children:[(0,p.jsx)(r.Z,{label:"name",label_txt:"Name",type:"text",id:"name",name:"name",placeholder:"Name",value:u,onChange:y}),(0,p.jsx)(r.Z,{label:"phone",label_txt:"Phone",type:"text",id:"phone",name:"phone",placeholder:"[Optional] Phone Number",value:x,onChange:y}),(0,p.jsx)(r.Z,{label:"email",label_txt:"Email",type:"email",id:"email",name:"email",placeholder:"Email",value:w,onChange:y}),(0,p.jsx)(r.Z,{label:"password",label_txt:"Password",type:"password",id:"password",name:"password",placeholder:"Password",value:g,onChange:y}),(0,p.jsx)(r.Z,{label:"password_confirmation",label_txt:"Password Confirmation",type:"password",id:"password_confirmation",name:"password_confirmation",placeholder:"Password Confirmation",value:f,onChange:y}),(0,p.jsx)("br",{}),(0,p.jsx)(n.Z,{variant:"primary",type:"submit",children:"Register"})]})]})}},987:(e,a,l)=>{l.d(a,{Z:()=>o});var s=l(184);const o=e=>{const{variant:a,type:l,onClick:o,children:t}=e;let r,n;switch(a){case"primary":default:r="bg-blue-500",n="bg-blue-700";break;case"warning":r="bg-yellow-500",n="bg-yellow-700";break;case"danger":r="bg-red-500",n="bg-red-700"}return(0,s.jsx)("button",{className:"block ".concat(r," text-white font-bold py-2 px-6 hover:").concat(n),type:l,onClick:o,children:t})}},777:(e,a,l)=>{l.d(a,{Z:()=>o});var s=l(184);const o=e=>{const{children:a}=e;return(0,s.jsx)("div",{className:"bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto",children:a})}},251:(e,a,l)=>{l.d(a,{Z:()=>o});var s=l(184);const o=e=>{const{label:a,label_txt:l,type:o,id:t,name:r,placeholder:n,value:i,onChange:c}=e;let d;return"text"===o||"number"===o||"email"===o||"password"===o?d=(0,s.jsx)("input",{type:o,id:t,name:r,placeholder:n,value:i,onChange:c,className:"border border-gray-300 shadow p-2 w-full"}):"textarea"===o?d=(0,s.jsx)("textarea",{className:"border border-gray-300 shadow p-2 w-full",style:{resize:"none"},id:t,name:r,placeholder:n,rows:"2",value:i,onChange:c}):"file"===o&&(d=(0,s.jsx)("input",{className:"border border-gray-300 shadow w-full file:bg-blue-500 file:text-white file:font-bold file:py-2 file:px-4",type:o,onChange:c})),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:a,className:"block mb-2 font-bold text-gray-600",children:l}),d]})}},0:(e,a,l)=>{l.d(a,{S:()=>o,Z:()=>t});var s=l(174);const o=e=>s.Am.error(e,{position:s.Am.POSITION.TOP_RIGHT,autoClose:3e3}),t=e=>{s.Am.success(e,{position:s.Am.POSITION.TOP_RIGHT})}}}]);
//# sourceMappingURL=240.b4e0d1ae.chunk.js.map