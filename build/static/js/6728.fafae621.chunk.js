"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6728],{96728:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var l=a(99584),n=a(32712),i=a(424),d=a(65236),o=a(85836),r=a(67692),s=a(68496),c=a(26144),u=a(20556),v=a(18896),m=a(48820),p=a(23424),f=a(77180),g=a(88276),h=a(90956),_=a(31864),x=a(97884);const{Step:b}=r.default,y=()=>{var e;const{t:t}=(0,d.G)(),{activeMenu:a}=(0,n.w1)((e=>e.menu),n.G),y=(0,u.W)(),j=Number((null===(e=y.values)||void 0===e?void 0:e.step)||0),[k,C]=(0,l.useState)(a.refetch),M=(0,n.OY)(),{uuid:w}=(0,p.W4)(),{languages:G}=(0,n.w1)((e=>e.formLang),n.G),O=()=>{const e=j+1;y.set("step",e)},S=()=>{const e=j-1;y.set("step",e)},F=e=>({items:e,uid:e,url:e,name:e});function H(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,a=G.map((e=>{var a,l,n;return{["title[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,["description[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.description,["address[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.address}}));return Object.assign({},...a)}return(0,l.useEffect)((()=>{a.refetch&&w&&(e=>{C(!0),m.c.getById(e).then((e=>{var t,l,n,i,d,o;const r={...e.data,...H(e.data),logo_img:F(e.data.logo_img),background_img:F(e.data.background_img),user:{label:e.data.seller.firstname+" "+e.data.seller.lastname,value:e.data.seller.id},delivery_time_from:null===(t=e.data)||void 0===t?void 0:t.delivery_time.from,delivery_time_to:null===(l=e.data)||void 0===l?void 0:l.delivery_time.to,delivery_time_type:null===(n=e.data)||void 0===n?void 0:n.delivery_time.type,recommended:"recommended"===e.data.mark,categories:null===(i=e.data)||void 0===i||null===(d=i.categories)||void 0===d?void 0:d.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}})),tags:null===(o=e.data)||void 0===o?void 0:o.tags.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}}))};M((0,v.MH)({activeMenu:a,data:r}))})).finally((()=>{C(!1),M((0,v.CO)(a))}))})(w)}),[a.refetch]),(0,x.jsxs)(s.default,{title:t("restaurant.edit"),extra:(0,x.jsx)(i.c,{}),children:[(0,x.jsx)(r.default,{current:j,onChange:e=>{M((0,v.MH)({activeMenu:a,data:{...a.data,step:e}})),y.set("step",e)},children:o.C.map((e=>(0,x.jsx)(b,{title:t(e.title)},e.title)))}),k?(0,x.jsx)(f.c,{}):(0,x.jsxs)("div",{className:"steps-content",children:["First-content"===o.C[j].content&&(0,x.jsx)(g.c,{next:O,loading:k,action_type:"edit",user:!0}),"Second-content"===o.C[j].content&&(0,x.jsx)(_.c,{next:O,prev:S}),"Third-content"===o.C[j].content&&(0,x.jsx)(h.c,{next:O,prev:S}),"Four-content"===o.C[j].content&&(0,x.jsx)(c.c,{next:O,prev:S})]})]})}}}]);