"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4648],{44648:(e,t,c)=>{c.r(t),c.d(t,{default:()=>m});var s=c(99584),a=c(23424),n=c(61072),i=c(65732),l=c(68496),o=c(32712),u=c(18896),r=c(68752),d=c(46640),h=c(424),g=c(65236),b=c(89624),f=c(97884);function m(){const{t:e}=(0,g.G)(),{activeMenu:t}=(0,o.w1)((e=>e.menu),o.G),{languages:c}=(0,o.w1)((e=>e.formLang),o.G),m=(0,o.OY)(),[p]=i.c.useForm(),v=(0,a.i6)();function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"title";const s=c.map((c=>({[c.locale]:e["".concat(t,"[").concat(c.locale,"]")]})));return Object.assign({},...s)}(0,s.useEffect)((()=>()=>{const e=p.getFieldsValue(!0);m((0,u.MH)({activeMenu:t,data:e}))}),[]);return(0,f.jsx)(l.default,{title:e("add.blog"),extra:(0,f.jsx)(h.c,{}),children:(0,f.jsx)(b.c,{form:p,handleSubmit:(c,s)=>{const a="blogs",i={status:"published",type:"blog"},l={type:"blog",active:c.active?1:0,images:s.length?s.map((e=>e.name)):void 0,title:w(c),description:w(c,"description"),short_desc:w(c,"short_desc")};return d.c.create(l).then((()=>{n.m4.success(e("successfully.created")),(0,o.wN)((()=>{m((0,u.MF)({...t,nextUrl:a})),m((0,r.y)(i))})),v("/".concat(a))}))}})})}}}]);