"use strict";(self.webpackChunkdoctor_portal=self.webpackChunkdoctor_portal||[]).push([[56],{2056:function(t,e,n){n.r(e);var a=n(2791),r=n(4777),c=n(7689),i=n(5987),o=n(3108),l=n(1243),s=n(184);e.default=function(){var t=(0,c.s0)(),e=(0,a.useContext)(o.V);return(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("h3",{children:"Are you sure you want to logout?"}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"flex flex-row flex-wrap justify-between w-3/4 md:w-1/2 lg:w-1/2",children:[(0,s.jsx)(i.Z,{variant:"danger",type:"submit",onClick:function(){l.Z.post("".concat("https://lifecare-sync.cyclic.app/","api/users/logout"),{},{headers:{Authorization:"Bearer "+e.token}}).then((function(){e.logout(),t("/")})).catch((function(t){}))},children:"Logout"}),(0,s.jsx)(i.Z,{variant:"warning",type:"submit",onClick:function(){t("/patients")},children:"Cancel"})]})]})}},5987:function(t,e,n){var a=n(184);e.Z=function(t){var e=t.variant,n=t.type,r=t.onClick,c=t.children,i="bg-blue-600";switch(e){case"primary":default:i="bg-blue-600";break;case"warning":i="bg-yellow-500";break;case"danger":i="bg-red-600"}return(0,a.jsx)("button",{className:"block ".concat(i," text-white font-bold py-2 px-6"),type:n,onClick:r,children:c})}},4777:function(t,e,n){var a=n(184);e.Z=function(t){var e=t.children;return(0,a.jsx)("div",{className:"bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto",children:e})}}}]);
//# sourceMappingURL=56.2e6d629a.chunk.js.map