"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[892],{89540:(e,t,a)=>{a.d(t,{c:()=>h});var i=a(99584),r=a(65732),s=a(68768),l=a(10260),c=a(46712),n=a(26012),d=a(87228),u=a(40936),o=a(32712),m=a(65236),v=a(97884);function h(e){var t,a;let{form:h,handleSubmit:b}=e;const{t:j}=(0,m.G)(),{activeMenu:x}=(0,o.w1)((e=>e.menu),o.G),[g,p]=(0,i.useState)(null!==(t=x.data)&&void 0!==t&&t.image?null===(a=x.data)||void 0===a?void 0:a.image:[]),[f,w]=(0,i.useState)(!1);return(0,v.jsxs)(r.c,{name:"basic",layout:"vertical",onFinish:e=>{w(!0),b(e,g).finally((()=>w(!1)))},form:h,initialValues:{active:!0,...x.data},children:[(0,v.jsxs)(s.c,{gutter:12,children:[(0,v.jsx)(l.c,{span:12,children:(0,v.jsx)(r.c.Item,{label:j("title"),name:"title",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(j("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(j("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(j("required")))}],children:(0,v.jsx)(c.default,{})})}),(0,v.jsx)(l.c,{span:6,children:(0,v.jsx)(r.c.Item,{label:j("image"),name:"images",rules:[{validator:()=>0===(null===g||void 0===g?void 0:g.length)?Promise.reject(new Error(j("required"))):Promise.resolve()}],children:(0,v.jsx)(u.c,{type:"brands",imageList:g,setImageList:p,form:h,multiple:!1})})}),(0,v.jsx)(l.c,{span:6,children:(0,v.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,v.jsx)(r.c.Item,{label:j("active"),name:"active",valuePropName:"checked",children:(0,v.jsx)(n.c,{})})})})]}),(0,v.jsx)(d.c,{type:"primary",htmlType:"submit",loading:f,children:j("submit")})]})}},30892:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var i=a(99584),r=a(23424),s=a(61072),l=a(65732),c=a(68496),n=a(32712),d=a(18896),u=a(12636),o=a(34528),m=a(65236),v=a(89540),h=a(97884);const b=()=>{const{t:e}=(0,m.G)(),{activeMenu:t}=(0,n.w1)((e=>e.menu),n.G),a=(0,n.OY)(),[b]=l.c.useForm(),j=(0,r.i6)();(0,i.useEffect)((()=>()=>{const e=b.getFieldsValue(!0);a((0,d.MH)({activeMenu:t,data:e}))}),[]);return(0,h.jsx)(c.default,{title:e("add.brand"),children:(0,h.jsx)(v.c,{form:b,handleSubmit:(i,r)=>{var l;const c="catalog/brands",m={status:"published"},v={...i,active:i.active?1:0,"images[0]":null===(l=r[0])||void 0===l?void 0:l.name};return u.c.create(v).then((()=>{s.m4.success(e("successfully.created")),(0,n.wN)((()=>{a((0,d.MF)({...t,nextUrl:c})),a((0,o.UL)(m))})),j("/".concat(c))}))}})})}}}]);