"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3448],{13448:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var l=a(99584),i=a(65732),n=a(68496),s=a(37728),o=a(61072),d=a(23424),r=a(424),c=a(32712),u=a(18896),v=a(75808),p=a(52640),f=a(50120),h=a(65236),g=a(71896),m=a(97884);const y=()=>{const{t:e}=(0,h.G)(),t=(0,d.i6)(),a=(0,c.OY)(),{activeMenu:y}=(0,c.w1)((e=>e.menu),c.G),{params:b}=(0,c.w1)((e=>e.shopCategory),c.G),[w,k]=(0,l.useState)(!1),[_]=i.c.useForm(),[j,x]=(0,l.useState)(null),{uuid:M}=(0,d.W4)(),{languages:C}=(0,c.w1)((e=>e.formLang),c.G);(0,l.useEffect)((()=>()=>{const e=_.getFieldsValue(!0);a((0,u.MH)({activeMenu:y,data:e}))}),[]);function F(e){if(!e)return{};const{translations:t}=e,a=C.map((e=>{var a,l;return{["title[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,["description[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.description}}));return Object.assign({},...a)}return(0,l.useEffect)((()=>{var e;y.refetch&&(e=M,k(!0),v.c.getById(e).then((e=>{var t,l;let i=e.data;const n={...i,...F(i),image:[(s=null===i||void 0===i?void 0:i.img,{name:s,url:p.cd+s})],keywords:null===i||void 0===i?void 0:i.keywords.split(","),parent_id:{label:null===i||void 0===i||null===(t=i.parent)||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title,value:null===i||void 0===i?void 0:i.parent_id,key:null===i||void 0===i?void 0:i.parent_id}};var s;_.setFieldsValue(n),a((0,u.MH)({activeMenu:y,data:n}))})).finally((()=>{k(!1),a((0,u.CO)(y))})))}),[y.refetch]),(0,m.jsx)(n.default,{title:e("edit.category"),extra:(0,m.jsx)(r.c,{}),children:w?(0,m.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,m.jsx)(s.c,{size:"large",className:"mt-5 pt-5"})}):(0,m.jsx)(g.c,{form:_,handleSubmit:(l,i)=>{var n,s,d;const r={...l,type:null!==(n=l.parent_id)&&void 0!==n&&n.value?"sub_shop":"shop",active:l.active?1:0,keywords:l.keywords.join(","),parent_id:null===(s=l.parent_id)||void 0===s?void 0:s.value,"images[0]":null===(d=i[0])||void 0===d?void 0:d.name};return v.c.update(M,r).then((()=>{o.m4.success(e("successfully.updated")),(0,c.wN)((()=>{a((0,u.MF)({...y,nextUrl:"catalog/shop/categories"})),a((0,f.U)(b))})),t("/catalog/shop/categories")})).catch((e=>x(e.response.data.params)))},error:j})})}}}]);