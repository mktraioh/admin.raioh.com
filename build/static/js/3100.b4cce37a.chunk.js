"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3100],{13100:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var c=a(99584),s=a(65732),l=a(68496),n=a(37728),i=a(61072),r=a(23424),o=a(424),u=a(32712),d=a(18896),f=a(75808),g=a(52640),h=a(50120),m=a(65236),v=a(71896),p=a(97884);const y=()=>{const{t:e}=(0,m.G)(),t=(0,r.i6)(),a=(0,u.OY)(),{activeMenu:y}=(0,u.w1)((e=>e.menu),u.G),[w,b]=(0,c.useState)(!1),[j]=s.c.useForm(),[k,x]=(0,c.useState)(null),{uuid:M}=(0,r.W4)(),{languages:F}=(0,u.w1)((e=>e.formLang),u.G);(0,c.useEffect)((()=>()=>{const e=j.getFieldsValue(!0);a((0,d.MH)({activeMenu:y,data:e}))}),[]);function C(e){if(!e)return{};const{translations:t}=e,a=F.map((e=>{var a,c;return{["title[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,["description[".concat(e.locale,"]")]:null===(c=t.find((t=>t.locale===e.locale)))||void 0===c?void 0:c.description}}));return Object.assign({},...a)}return(0,c.useEffect)((()=>{var e;y.refetch&&(e=M,b(!0),f.c.getById(e).then((e=>{let t=e.data;const c={...t,...C(t),image:[(s=t.img,{name:s,url:g.cd+s})],keywords:t.keywords.split(",")};var s;j.setFieldsValue(c),a((0,d.MH)({activeMenu:y,data:c}))})).finally((()=>{b(!1),a((0,d.CO)(y))})))}),[y.refetch]),(0,p.jsx)(l.default,{title:e("clone.category"),extra:(0,p.jsx)(o.c,{}),children:w?(0,p.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,p.jsx)(n.c,{size:"large",className:"mt-5 pt-5"})}):(0,p.jsx)(v.c,{form:j,handleSubmit:(c,s)=>{var l;const n={...c,type:"shop",active:c.active?1:0,keywords:c.keywords.join(","),parent_id:null,"images[0]":null===(l=s[0])||void 0===l?void 0:l.name};return f.c.create(n).then((()=>{i.m4.success(e("successfully.created")),(0,u.wN)((()=>{a((0,d.MF)({...y,nextUrl:"catalog/shop/categories"})),a((0,h.U)({}))})),t("/catalog/shop/categories")})).catch((e=>x(e.response.data.params)))},error:k})})}}}]);