"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7328],{56384:(e,t,c)=>{function a(e,t){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t["".concat(c,"[").concat(e.locale,"]")]?void 0:t["".concat(c,"[").concat(e.locale,"]")]})));return Object.assign({},...a)}c.d(t,{c:()=>a})},87328:(e,t,c)=>{c.r(t),c.d(t,{default:()=>j});var a=c(99584),l=c(23424),n=c(61072),s=c(65732),i=c(68496),o=c(37728),d=c(32712),u=c(18896),r=c(68752),f=c(46640),h=c(424),g=c(56384),v=c(49580),m=c(65236),p=c(89624),b=c(97884);function j(){const{t:e}=(0,m.G)(),{activeMenu:t}=(0,d.w1)((e=>e.menu),d.G),{languages:c}=(0,d.w1)((e=>e.formLang),d.G),j=(0,d.OY)(),[x]=s.c.useForm(),y=(0,l.i6)(),{uuid:M}=(0,l.W4)(),[_,w]=(0,a.useState)(!1);(0,a.useEffect)((()=>()=>{const e=x.getFieldsValue(!0);j((0,u.MH)({activeMenu:t,data:e}))}),[]);function k(e){if(!e)return{};const{translations:t}=e,a=c.map((e=>{var c,a,l;return{["title[".concat(e.locale,"]")]:null===(c=t.find((t=>t.locale===e.locale)))||void 0===c?void 0:c.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description,["short_desc[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.short_desc}}));return Object.assign({},...a)}return(0,a.useEffect)((()=>{t.refetch&&(e=>{w(!0),f.c.getById(e).then((e=>{let c=e.data;const a={...c,...k(c),image:[(0,v.c)(c.img)]};x.setFieldsValue(a),j((0,u.MH)({activeMenu:t,data:a}))})).finally((()=>{w(!1),j((0,u.CO)(t))}))})(M)}),[t.refetch]),(0,b.jsx)(i.default,{title:e("edit.blog"),extra:(0,b.jsx)(h.c,{}),children:_?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(o.c,{size:"large",className:"py-5"})}):(0,b.jsx)(p.c,{form:x,handleSubmit:(a,l)=>{const s="blogs",i={status:"published",type:"blog"},o={type:"blog",active:a.active?1:0,images:l.length?l.map((e=>e.name)):void 0,title:(0,g.c)(c,a),description:(0,g.c)(c,a,"description"),short_desc:(0,g.c)(c,a,"short_desc")};return f.c.update(M,o).then((()=>{n.m4.success(e("successfully.created")),(0,d.wN)((()=>{j((0,u.MF)({...t,nextUrl:s})),j((0,r.y)(i))})),y("/".concat(s))}))}})})}}}]);