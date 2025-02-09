"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[706],{706:(e,s,a)=>{a.r(s),a.d(s,{default:()=>f});var t=a(791),l=a(777),r=a(987),n=a(0),o=a(906),i=a(243),d=a(108),c=a(297),h=a(63),p=a(251),u=a(184);const x=e=>{const{show:s,handleClose:a,triggerRefresh:l}=e,o=(0,t.useContext)(d.V),[c,x]=(0,t.useState)(e.profile),{name:m,phone:f}=c,w=e=>{const{name:s,value:a}=e.target;x((0,h.Z)((0,h.Z)({},c),{},{[s]:a}))};return(0,u.jsx)("div",{children:s?(0,u.jsx)("div",{className:"bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center items-center",children:(0,u.jsxs)("div",{className:"bg-white overflow-y-auto w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl pl-10 pb-10",children:[(0,u.jsx)("div",{className:"bg-white overflow-auto flex justify-end",children:(0,u.jsxs)("button",{type:"button",className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",onClick:a,children:[(0,u.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,u.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})}),(0,u.jsxs)("div",{className:"pr-10",children:[(0,u.jsx)("div",{className:"prose",children:(0,u.jsx)("h2",{className:"pb-6",children:"Update My Profile"})}),(0,u.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),i.Z.patch("".concat("http://localhost:8000/","api/users/updateprofile/").concat(o.userId),(0,h.Z)({},c),{headers:{Authorization:"Bearer "+o.token}}).then((e=>{(0,n.Z)("Successfully updated profile!"),a()})).then((()=>l())).catch((e=>{console.log("err"),(0,n.S)(e.response.data.message)}))},children:[(0,u.jsx)(p.Z,{label:"name",label_txt:"Name",type:"text",id:"name",name:"name",placeholder:"Name",value:m,onChange:w}),(0,u.jsx)(p.Z,{label:"phone",label_txt:"Phone",type:"text",id:"phone",name:"phone",placeholder:"[Optional] Phone Number",value:f,onChange:w}),(0,u.jsx)("br",{}),(0,u.jsx)(r.Z,{variant:"primary",type:"submit",children:"Update Profile"})]})]})]})}):(0,u.jsx)("div",{className:"hidden"})})},m=e=>{const{show:s,handleClose:a,triggerRefresh:l}=e,o=(0,t.useContext)(d.V),[c,x]=(0,t.useState)({password_initial:"",password_update:""}),{password_initial:m,password_update:f}=c,w=e=>{const{name:s,value:a}=e.target;x((0,h.Z)((0,h.Z)({},c),{},{[s]:a}))};return(0,u.jsx)("div",{children:s?(0,u.jsx)("div",{className:"bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center items-center",children:(0,u.jsxs)("div",{className:"bg-white overflow-y-auto w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl pl-10 pb-10",children:[(0,u.jsx)("div",{className:"bg-white overflow-auto flex justify-end",children:(0,u.jsxs)("button",{type:"button",className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",onClick:a,children:[(0,u.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,u.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})}),(0,u.jsxs)("div",{className:"pr-10",children:[(0,u.jsx)("div",{className:"prose",children:(0,u.jsx)("h2",{className:"pb-6",children:"Update Password"})}),(0,u.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),i.Z.patch("".concat("http://localhost:8000/","api/users/updatepassword/").concat(o.userId),(0,h.Z)({},c),{headers:{Authorization:"Bearer "+o.token}}).then((e=>{(0,n.Z)("Successfully updated password!"),a()})).then((()=>l())).catch((e=>{(0,n.S)(e.response.data.message)}))},children:[(0,u.jsx)(p.Z,{label:"password_initial",label_txt:"Initial Password",type:"password",id:"password_initial",name:"password_initial",placeholder:"Initial Password",value:m,onChange:w}),(0,u.jsx)(p.Z,{label:"password_update",label_txt:"Updated Password",type:"password",id:"password_update",name:"password_update",placeholder:"Update Password",value:f,onChange:w}),(0,u.jsx)("br",{}),(0,u.jsx)(r.Z,{variant:"primary",type:"submit",children:"Update Password"})]})]})]})}):(0,u.jsx)("div",{className:"hidden"})})},f=()=>{const e=(0,t.useContext)(d.V),[s,a]=(0,t.useState)(null),[h,p]=(0,t.useState)(!1),[f,w]=(0,t.useState)(!1),[g,b]=(0,t.useState)(!1),[j,v]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{e.token&&i.Z.get("".concat("http://localhost:8000/","api/users/profile"),{headers:{Authorization:"Bearer "+e.token}}).then((e=>{const s=e.data.name,t=e.data.phone;a({name:s,phone:t})})).catch((e=>{(0,n.S)(e)}))}),[e,g,j]),s?(0,u.jsxs)(l.Z,{children:[(0,u.jsx)("div",{className:"prose",children:(0,u.jsx)("h2",{className:"pb-6",children:"My Profile"})}),(0,u.jsx)("hr",{}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"flex flex-wrap",children:[(0,u.jsx)("div",{className:"pb-10 flex justify-center items-center lg:w-52",children:(0,u.jsx)("img",{src:s.image?"http://localhost:8000/"+s.image:o,alt:"".concat(s.name)})}),(0,u.jsx)("div",{className:"w-2/3 lg:pl-8",children:(0,u.jsx)("table",{children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"font-bold",children:"Name"}),(0,u.jsx)("td",{className:"py-2 pl-4",children:s.name})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"font-bold",children:"Phone"}),(0,u.jsx)("td",{className:"py-2 pl-4",children:s.phone})]})]})})})]})}),(0,u.jsx)("div",{className:"flex justify-between",children:(0,u.jsx)(r.Z,{variant:"warning",onClick:()=>{p(!0)},children:"Update Profile"})}),(0,u.jsx)("div",{children:(0,u.jsx)(x,{show:h,handleClose:()=>p(!1),profile:s,triggerRefresh:()=>b((e=>!e))})}),(0,u.jsx)("div",{children:(0,u.jsx)(m,{show:f,handleClose:()=>w(!1),triggerRefresh:()=>v((e=>!e))})})]}):(0,u.jsx)(c.Z,{})}},987:(e,s,a)=>{a.d(s,{Z:()=>l});var t=a(184);const l=e=>{const{variant:s,type:a,onClick:l,children:r}=e;let n,o;switch(s){case"primary":default:n="bg-blue-500",o="bg-blue-700";break;case"warning":n="bg-yellow-500",o="bg-yellow-700";break;case"danger":n="bg-red-500",o="bg-red-700"}return(0,t.jsx)("button",{className:"block ".concat(n," text-white font-bold py-2 px-6 hover:").concat(o),type:a,onClick:l,children:r})}},777:(e,s,a)=>{a.d(s,{Z:()=>l});var t=a(184);const l=e=>{const{children:s}=e;return(0,t.jsx)("div",{className:"bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto",children:s})}},251:(e,s,a)=>{a.d(s,{Z:()=>l});var t=a(184);const l=e=>{const{label:s,label_txt:a,type:l,id:r,name:n,placeholder:o,value:i,onChange:d}=e;let c;return"text"===l||"number"===l||"email"===l||"password"===l?c=(0,t.jsx)("input",{type:l,id:r,name:n,placeholder:o,value:i,onChange:d,className:"border border-gray-300 shadow p-2 w-full"}):"textarea"===l?c=(0,t.jsx)("textarea",{className:"border border-gray-300 shadow p-2 w-full",style:{resize:"none"},id:r,name:n,placeholder:o,rows:"2",value:i,onChange:d}):"file"===l&&(c=(0,t.jsx)("input",{className:"border border-gray-300 shadow w-full file:bg-blue-500 file:text-white file:font-bold file:py-2 file:px-4",type:l,onChange:d})),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:s,className:"block mb-2 font-bold text-gray-600",children:a}),c]})}},0:(e,s,a)=>{a.d(s,{S:()=>l,Z:()=>r});var t=a(174);const l=e=>t.Am.error(e,{position:t.Am.POSITION.TOP_RIGHT,autoClose:3e3}),r=e=>{t.Am.success(e,{position:t.Am.POSITION.TOP_RIGHT})}},906:(e,s,a)=>{e.exports=a.p+"static/media/profile_photo.7a6a6c54279a54d1977c.jpeg"}}]);
//# sourceMappingURL=706.5ef97ca7.chunk.js.map