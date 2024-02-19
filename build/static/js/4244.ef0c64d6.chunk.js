"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4244],{71376:(e,t,a)=>{a.d(t,{g:()=>c});var s=a(99584),r=a(95976),n=a.n(r),l=a(2664),d=a(37728),i=a(97884);const c=e=>{let{fetchOptions:t,debounceTimeout:a=400,onClear:r,...c}=e;const[u,o]=(0,s.useState)(!1),[m,h]=(0,s.useState)([]),p=(0,s.useMemo)((()=>n()((e=>{h([]),o(!0),t(e).then((e=>{h(e),o(!1)}))}),a)),[t,a]);return(0,i.jsx)(l.default,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),r&&r()},notFoundContent:u?(0,i.jsx)(d.c,{size:"small"}):"no results",...c,options:m,onFocus:()=>{p("")}})}},24244:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var s=a(99584),r=a(23424),n=a(61072),l=a(65732),d=a(68496),i=a(83072),c=a.n(i),u=a(32712),o=a(18896),m=a(85912),h=a(26744),p=a(65236),f=a(27632),x=a(97884);function j(){const{t:e}=(0,p.G)(),{activeMenu:t}=(0,u.w1)((e=>e.menu),u.G),a=(0,u.OY)(),[i]=l.c.useForm(),j=(0,r.i6)();(0,s.useEffect)((()=>()=>{const e=i.getFieldsValue(!0),s=JSON.stringify(e.start),r=JSON.stringify(e.end),n={...e,start:s,end:r};a((0,o.MH)({activeMenu:t,data:n}))}),[]);return(0,x.jsx)(d.default,{title:e("add.discount"),className:"h-100",children:(0,x.jsx)(f.c,{form:i,handleSubmit:(s,r)=>{var l;if(c()(s.start).format("YYYY-MM-DD")>c()(s.end).format("YYYY-MM-DD"))return n.m4.error(e("start.date.must.be.before.end.date"));const d={price:s.price,type:s.type,products:s.products.map((e=>e.value)),start:s.start?c()(s.start).format("YYYY-MM-DD"):void 0,end:s.end?c()(s.end).format("YYYY-MM-DD"):void 0,images:[null===(l=r[0])||void 0===l?void 0:l.name]},i="seller/discounts";return m.c.create(d).then((()=>{n.m4.success(e("successfully.created")),a((()=>{a((0,o.MF)({...t,nextUrl:i})),a((0,h._)({}))})),j("/".concat(i))}))}})})}},27632:(e,t,a)=>{a.d(t,{c:()=>g});var s=a(99584),r=a(65732),n=a(68768),l=a(10260),d=a(2664),i=a(10240),c=a(73568),u=a(87228),o=a(83072),m=a.n(o),h=a(71376),p=a(40936),f=a(65236),x=a(32712),j=a(31e3),v=a(97884);function g(e){var t,a;let{form:o,handleSubmit:g}=e;const{t:b}=(0,f.G)(),{activeMenu:Y}=(0,x.w1)((e=>e.menu),x.G),{myShop:y}=(0,x.w1)((e=>e.myShop),x.G),[M,D]=(0,s.useState)(!1),[q,S]=(0,s.useState)(null!==(t=Y.data)&&void 0!==t&&t.image?null===(a=Y.data)||void 0===a?void 0:a.image:[]);return(0,v.jsxs)(r.c,{name:"discount-form",layout:"vertical",onFinish:e=>{D(!0),g(e,q).finally((()=>D(!1)))},form:o,initialValues:{...(()=>{var e;const t=Y.data;if(null===(e=Y.data)||void 0===e||!e.start)return t;const a=Y.data.start,s=Y.data.end;return{...t,start:m()(a,"YYYY-MM-DD"),end:m()(s,"YYYY-MM-DD")}})()},className:"d-flex flex-column h-100",children:[(0,v.jsxs)(n.c,{gutter:12,children:[(0,v.jsx)(l.c,{span:12,children:(0,v.jsx)(r.c.Item,{label:b("type"),name:"type",rules:[{required:!0,message:b("required")}],children:(0,v.jsxs)(d.default,{children:[(0,v.jsx)(d.default.Option,{value:"fix",children:b("fix")}),(0,v.jsx)(d.default.Option,{value:"percent",children:b("percent")})]})})}),(0,v.jsx)(l.c,{span:12,children:(0,v.jsx)(r.c.Item,{label:b("price"),name:"price",rules:[{required:!0,message:b("required")}],children:(0,v.jsx)(i.c,{min:0,className:"w-100"})})}),(0,v.jsx)(l.c,{span:12,children:(0,v.jsx)(r.c.Item,{label:b("start.date"),name:"start",rules:[{required:!0,message:b("required")}],children:(0,v.jsx)(c.default,{className:"w-100",placeholder:"",disabledDate:e=>m()().add(-1,"days")>=e})})}),(0,v.jsx)(l.c,{span:12,children:(0,v.jsx)(r.c.Item,{label:b("end.date"),name:"end",rules:[{required:!0,message:b("required")}],children:(0,v.jsx)(c.default,{className:"w-100",placeholder:"",disabledDate:e=>m()().add(-1,"days")>=e})})}),(0,v.jsx)(l.c,{span:24,children:(0,v.jsx)(r.c.Item,{label:b("products"),name:"products",rules:[{required:!0,message:b("required")}],children:(0,v.jsx)(h.g,{fetchOptions:async function(e){const t={search:e,shop_id:y.id,status:"published",active:1,rest:1};return j.c.getAll(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}))},mode:"multiple"})})}),(0,v.jsx)(l.c,{span:24,children:(0,v.jsx)(r.c.Item,{label:b("image"),name:"images",rules:[{required:!q.length,message:b("required")}],children:(0,v.jsx)(p.c,{type:"discounts",imageList:q,setImageList:S,form:o,multiple:!1,name:"image"})})})]}),(0,v.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,v.jsx)("div",{className:"pb-5",children:(0,v.jsx)(u.c,{type:"primary",htmlType:"submit",loading:M,children:b("submit")})})})]})}}}]);