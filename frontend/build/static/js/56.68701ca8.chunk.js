"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[56],{2056:function(e,n,t){t.r(n);var r=t(2791),a=t(4777),o=t(7689),c=t(5987),i=t(3108),l=t(1243),s=t(184);n.default=function(){var e=(0,o.s0)(),n=(0,r.useContext)(i.V);return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("h3",{children:"Are you sure you want to logout?"}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"flex flex-row flex-wrap justify-between w-3/4 md:w-1/2 lg:w-1/2",children:[(0,s.jsx)(c.Z,{variant:"danger",type:"submit",onClick:function(){l.Z.post("".concat("https://lifecare-sync.onrender.com/","api/users/logout"),{},{headers:{Authorization:"Bearer "+n.token}}).then((function(){n.logout(),e("/")})).catch((function(e){}))},children:"Logout"}),(0,s.jsx)(c.Z,{variant:"warning",type:"submit",onClick:function(){e("/patients")},children:"Cancel"})]})]})}},5987:function(e,n,t){var r=t(184);n.Z=function(e){var n=e.variant,t=e.type,a=e.onClick,o=e.children,c="bg-blue-600";switch(n){case"primary":default:c="bg-blue-600";break;case"warning":c="bg-yellow-500";break;case"danger":c="bg-red-600"}return(0,r.jsx)("button",{className:"block ".concat(c," text-white font-bold py-2 px-6"),type:t,onClick:a,children:o})}},4777:function(e,n,t){var r=t(184);n.Z=function(e){var n=e.children;return(0,r.jsx)("div",{className:"bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto",children:n})}}}]);
//# sourceMappingURL=56.68701ca8.chunk.js.map