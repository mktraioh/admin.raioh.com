"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[292],{20292:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(99584),l=a(32712),i=a(424),d=a(65236),o=a(85836),r=a(67692),c=a(68496),s=a(26144),u=a(20556),v=a(18896),m=a(48820),g=a(23424),p=a(52640),f=a(77180),h=a(88276),x=a(90956),_=a(31864),b=a(97884);const{Step:y}=r.default,j=()=>{var e;const{t:t}=(0,d.G)(),{activeMenu:a}=(0,l.w1)((e=>e.menu),l.G),j=(0,u.W)(),k=Number((null===(e=j.values)||void 0===e?void 0:e.step)||0),[C,M]=(0,n.useState)(a.refetch),w=(0,l.OY)(),{uuid:G}=(0,g.W4)(),{languages:O}=(0,l.w1)((e=>e.formLang),l.G),S=()=>{const e=k+1;j.set("step",e)},F=()=>{const e=k-1;j.set("step",e)},H=e=>({items:e,uid:e,url:p.cd+e,name:e});function N(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,a=O.map((e=>{var a,n,l;return{["title[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,["description[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.description,["address[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.address}}));return Object.assign({},...a)}return(0,n.useEffect)((()=>{a.refetch&&G&&(e=>{M(!0),m.c.getById(e).then((e=>{var t,n,l,i,d;const o={...e.data,...N(e.data),logo_img:H(e.data.logo_img),background_img:H(e.data.background_img),user:"",delivery_time_from:null===(t=e.data)||void 0===t?void 0:t.delivery_time.from,delivery_time_to:null===(n=e.data)||void 0===n?void 0:n.delivery_time.to,delivery_time_type:null===(l=e.data)||void 0===l?void 0:l.delivery_time.type,recommended:"recommended"===e.data.mark,categories:null===(i=e.data)||void 0===i?void 0:i.categories.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}})),tags:null===(d=e.data)||void 0===d?void 0:d.tags.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}}))};w((0,v.MH)({activeMenu:a,data:o}))})).finally((()=>{M(!1),w((0,v.CO)(a))}))})(G)}),[a.refetch]),(0,b.jsxs)(c.default,{title:t("restaurant.clone"),extra:(0,b.jsx)(i.c,{}),children:[(0,b.jsx)(r.default,{current:k,onChange:e=>{w((0,v.MH)({activeMenu:a,data:{...a.data,step:e}})),j.set("step",e)},children:o.C.map((e=>(0,b.jsx)(y,{title:t(e.title)},e.title)))}),C?(0,b.jsx)(f.c,{}):(0,b.jsxs)("div",{className:"steps-content",children:["First-content"===o.C[k].content&&(0,b.jsx)(h.c,{next:S,loading:C,user:!1}),"Second-content"===o.C[k].content&&(0,b.jsx)(_.c,{next:S,prev:F}),"Third-content"===o.C[k].content&&(0,b.jsx)(x.c,{next:S,prev:F}),"Four-content"===o.C[k].content&&(0,b.jsx)(s.c,{next:S,prev:F})]})]})}}}]);