"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[356],{3356:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(9439),s=a(2791),n=a(1243),r=a(7689),i=a(3108),c=a(3e3),o=a(1087),d=a(184),u=function(e){var t=e.title,a=e.link,l=e.imgsrc,s=e.imgalt;return(0,d.jsxs)("div",{className:"w-80 h-96 relative overflow-auto shadow-lg bg-blue-600",children:[(0,d.jsx)("div",{className:"font-semibold text-center text-white p-4",children:t}),(0,d.jsx)("div",{className:"w-full h-60 flex justify-center items-center",children:(0,d.jsx)("img",{className:"w-60 h-60",src:l,alt:s})}),(0,d.jsx)("div",{className:"w-full h-9 absolute bottom-0 text-center",children:(0,d.jsx)(o.rU,{className:"text-white",to:a,children:"View"})})]})},h=a(297),f=a(7906),m=a(251),x=(a(5462),a(8174)),p=function(){var e=(0,s.useContext)(i.V),t=(0,s.useState)(null),a=(0,l.Z)(t,2),o=a[0],p=a[1],w=(0,s.useState)(null),b=(0,l.Z)(w,2),j=b[0],v=b[1],g=(0,r.s0)(),N=(0,s.useState)(""),y=(0,l.Z)(N,2),C=y[0],k=y[1];(0,s.useEffect)((function(){e.token?n.Z.get("".concat("https://lifecare-sync.onrender.com/","api/patients/fetchall"),{headers:{Authorization:"Bearer "+e.token}}).then((function(e){p(e.data.patients),v(e.data.patients)})).catch((function(e){(0,c.S)(e)})):g("/login")}),[e.token,g]);if(null==o)return(0,d.jsx)(h.Z,{});if(0===o.length&&e.token)return(0,d.jsxs)("div",{className:"bg-white p-10 h-80 shadow md:w-3/4 lg:w-1/2 mx-auto",children:[(0,d.jsx)("div",{className:"prose",children:(0,d.jsx)("h2",{className:"pb-6",children:"No Patients"})}),(0,d.jsx)("p",{children:"You have no patients."})]});var _=j.map((function(e){return(0,d.jsx)("div",{className:"m-3",children:(0,d.jsx)(u,{title:"".concat(e.first_name," ").concat(e.last_name),imgsrc:e.image?"https://lifecare-sync.onrender.com/"+e.image:f,imgalt:e.name,link:"/patientdetail/".concat(e._id)})},e._id)}));return(0,d.jsxs)("div",{className:"w-3/4",children:[(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)("div",{className:"w-96 pb-3",children:(0,d.jsx)(m.Z,{label:"search",type:"text",id:"search",name:"search",placeholder:"Search",value:C,onChange:function(e){var t=e.target.value;k(t),v(o.filter((function(e){return e.first_name.toLowerCase().includes(t.toLowerCase())||e.last_name.toLowerCase().includes(t.toLowerCase())})))}})})}),(0,d.jsx)("div",{className:"w-full flex flex-wrap justify-center",children:_}),(0,d.jsx)(x.Ix,{})]})}},251:function(e,t,a){var l=a(184);t.Z=function(e){var t,a=e.label,s=e.label_txt,n=e.type,r=e.id,i=e.name,c=e.placeholder,o=e.value,d=e.onChange;return"text"===n||"number"===n||"email"===n||"password"===n?t=(0,l.jsx)("input",{type:n,id:r,name:i,placeholder:c,value:o,onChange:d,className:"border border-gray-300 shadow p-2 w-full"}):"textarea"===n?t=(0,l.jsx)("textarea",{className:"border border-gray-300 shadow p-2 w-full",style:{resize:"none"},id:r,name:i,placeholder:c,rows:"2",value:o,onChange:d}):"file"===n&&(t=(0,l.jsx)("input",{className:"border border-gray-300 shadow w-full file:bg-blue-500 file:text-white file:font-bold file:py-2 file:px-4",type:n,onChange:d})),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:a,className:"block mb-2 font-bold text-gray-600",children:s}),t]})}},5462:function(){},7906:function(e,t,a){e.exports=a.p+"static/media/profile_photo.7a6a6c54279a54d1977c.jpeg"}}]);
//# sourceMappingURL=356.702ada60.chunk.js.map