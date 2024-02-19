"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5008],{24692:(e,t,s)=>{s.d(t,{o:()=>c});var a=s(99584),n=s(2664),l=s(37728),u=s(97884);const c=e=>{let{fetchOptions:t,refetch:s=!1,...c}=e;const[r,i]=(0,a.useState)(!1),[d,o]=(0,a.useState)([]);return(0,u.jsx)(n.default,{labelInValue:!0,filterOption:!1,notFoundContent:r?(0,u.jsx)(l.c,{size:"small"}):"no results",...c,options:r?[]:d,onFocus:()=>{d.length&&!s||(i(!0),t().then((e=>{o(e),i(!1)})))}})}},25008:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var a=s(99584),n=s(23424),l=s(61072),u=s(65732),c=s(68496),r=s(32712),i=s(18896),d=s(65236),o=s(83072),m=s.n(o),x=s(41232),h=s(96156),p=s(89140),b=s(97884);const f=()=>{const{t:e}=(0,d.G)(),{activeMenu:t}=(0,r.w1)((e=>e.menu),r.G),s=(0,r.OY)(),[o]=u.c.useForm(),f=(0,n.i6)();(0,a.useEffect)((()=>()=>{const e=o.getFieldsValue(!0),a={...e,expired_at:JSON.stringify(null===e||void 0===e?void 0:e.expired_at)};s((0,i.MH)({activeMenu:t,data:a}))}),[]);return(0,b.jsx)(c.default,{title:e("add.bonus"),className:"h-100",children:(0,b.jsx)(p.c,{form:o,handleSubmit:a=>{const n={expired_at:m()(a.expired_at).format("YYYY-MM-DD"),status:a.status,type:"count",bonusable_id:a.bonusable_id.value,value:a.value,bonus_stock_id:a.bonus_stock_id.value,bonus_quantity:a.bonus_quantity},u="seller/bonus/product";return h.c.create(n).then((()=>{l.m4.success(e("successfully.created")),(0,r.wN)((()=>{s((0,i.MF)({...t,nextUrl:u})),s((0,x.M)({}))})),f("/".concat(u))}))}})})}},89140:(e,t,s)=>{s.d(t,{c:()=>j});var a=s(99584),n=s(65732),l=s(68768),u=s(10260),c=s(10240),r=s(73568),i=s(26012),d=s(87228),o=s(24692),m=s(83072),x=s.n(m),h=s(65236),p=s(32712),b=s(31e3),f=s(97884);function j(e){let{form:t,handleSubmit:s}=e;const{t:m}=(0,h.G)(),{activeMenu:j}=(0,p.w1)((e=>e.menu),p.G),[v,_]=(0,a.useState)(!1);function y(){return b.c.getStock().then((e=>e.data.map((e=>({label:e.product.translation.title+"".concat(e.extras.length>0?": ".concat(e.extras.map((e=>e.value)).join(", ")):""),value:e.id,key:e.id})))))}return(0,f.jsxs)(n.c,{name:"product-bonus-form",layout:"vertical",onFinish:e=>{_(!0),s(e).finally((()=>_(!1)))},form:t,initialValues:{status:!0,...j.data,...(()=>{var e,t;if(null===(e=j.data)||void 0===e||!e.expired_at)return{};const s=JSON.parse(null===(t=j.data)||void 0===t?void 0:t.expired_at);return{expired_at:x()(s,"HH:mm:ss")}})()},className:"d-flex flex-column h-100",children:[(0,f.jsxs)(l.c,{gutter:12,children:[(0,f.jsx)(u.c,{span:12,children:(0,f.jsx)(n.c.Item,{label:m("products.stock"),name:"bonusable_id",rules:[{required:!0,message:m("required")}],children:(0,f.jsx)(o.o,{fetchOptions:y,debounceTimeout:200})})}),(0,f.jsx)(u.c,{span:12,children:(0,f.jsx)(n.c.Item,{label:m("product.quantity"),name:"value",rules:[{required:!0,message:m("required")}],children:(0,f.jsx)(c.c,{className:"w-100"})})}),(0,f.jsx)(u.c,{span:12,children:(0,f.jsx)(n.c.Item,{label:m("bonus.product.stock"),name:"bonus_stock_id",rules:[{required:!0,message:m("required")}],children:(0,f.jsx)(o.o,{fetchOptions:y,debounceTimeout:200})})}),(0,f.jsx)(u.c,{span:12,children:(0,f.jsx)(n.c.Item,{label:m("bonus.product.quantity"),name:"bonus_quantity",rules:[{required:!0,message:m("required")}],children:(0,f.jsx)(c.c,{className:"w-100"})})}),(0,f.jsx)(u.c,{span:12,children:(0,f.jsx)(n.c.Item,{name:"expired_at",label:m("expired.at"),rules:[{required:!0,message:m("required")}],children:(0,f.jsx)(r.default,{className:"w-100",placeholder:"",disabledDate:e=>x()().add(-1,"days")>=e})})}),(0,f.jsx)(u.c,{span:8,children:(0,f.jsx)(n.c.Item,{label:m("active"),name:"status",valuePropName:"checked",children:(0,f.jsx)(i.c,{})})})]}),(0,f.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,f.jsx)("div",{className:"pb-5",children:(0,f.jsx)(d.c,{type:"primary",htmlType:"submit",loading:v,children:m("submit")})})})]})}}}]);