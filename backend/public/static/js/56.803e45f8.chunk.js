"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[56],{2056:function(e,t,n){n.r(t);var a=n(2791),r=n(4777),o=n(7689),i=n(5987),c=n(3108),l=n(1243),s=(n(5462),n(184));t.default=function(){var e=(0,o.s0)(),t=(0,a.useContext)(c.V);return(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("h3",{children:"Are you sure you want to logout?"}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"flex flex-row flex-wrap justify-between w-3/4 md:w-1/2 lg:w-1/2",children:[(0,s.jsx)(i.Z,{variant:"danger",type:"submit",onClick:function(){l.Z.post("".concat("https://master--effulgent-maamoul-569a4f.netlify.app/","api/users/logout"),{},{headers:{Authorization:"Bearer "+t.token}}).then((function(){t.logout(),e("/")})).catch((function(e){e.response.data.message}))},children:"Logout"}),(0,s.jsx)(i.Z,{variant:"warning",type:"submit",onClick:function(){e("/patients")},children:"Cancel"})]})]})}},5987:function(e,t,n){var a=n(184);t.Z=function(e){var t=e.variant,n=e.type,r=e.onClick,o=e.children,i="bg-blue-600";switch(t){case"primary":default:i="bg-blue-600";break;case"warning":i="bg-yellow-500";break;case"danger":i="bg-red-600"}return(0,a.jsx)("button",{className:"block ".concat(i," text-white font-bold py-2 px-6"),type:n,onClick:r,children:o})}},4777:function(e,t,n){var a=n(184);t.Z=function(e){var t=e.children;return(0,a.jsx)("div",{className:"bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto",children:t})}},5462:function(){}}]);
//# sourceMappingURL=56.803e45f8.chunk.js.map