"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8904],{98892:(e,l,a)=>{a.d(l,{c:()=>s});a(99584);const s=a.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},24692:(e,l,a)=>{a.d(l,{o:()=>c});var s=a(99584),r=a(2664),t=a(37728),i=a(97884);const c=e=>{let{fetchOptions:l,refetch:a=!1,...c}=e;const[n,d]=(0,s.useState)(!1),[u,p]=(0,s.useState)([]);return(0,i.jsx)(r.default,{labelInValue:!0,filterOption:!1,notFoundContent:n?(0,i.jsx)(t.c,{size:"small"}):"no results",...c,options:n?[]:u,onFocus:()=>{u.length&&!a||(d(!0),l().then((e=>{p(e),d(!1)})))}})}},8904:(e,l,a)=>{a.r(l),a.d(l,{default:()=>N});var s=a(99584),r=a(23424),t=a(61072),i=a(65732),c=a(68496),n=a(68768),d=a(10260),u=a(2664),p=a(37728),o=a(46712),m=a(26012),x=a(87228),h=a(32712),j=a(18896),y=a(65236),v=a(98892),b=a(74788),f=a(32160),g=a(72269),q=a(24692),_=a(80144),k=a(57112),I=a(78648),w=a(40936),z=a(97884);const N=()=>{var e,l,a;const{t:N}=(0,y.G)(),{activeMenu:F}=(0,h.w1)((e=>e.menu),h.G),O=(0,h.OY)(),[V]=i.c.useForm(),P=(0,r.i6)(),{id:S}=(0,r.W4)(),[C,A]=(0,s.useState)(!1),[G,M]=(0,s.useState)(!1),{languages:W}=(0,h.w1)((e=>e.formLang),h.G),[L,B]=(0,s.useState)(null),[E,H]=(0,s.useState)(null!==(e=F.data)&&void 0!==e&&e.image?[null===(l=F.data)||void 0===l?void 0:l.image]:[]),{defaultCurrency:R}=(0,h.w1)((e=>e.currency),h.G);(0,s.useEffect)((()=>()=>{const e=V.getFieldsValue(!0);O((0,j.MH)({activeMenu:F,data:e}))}),[]);(0,s.useEffect)((()=>{F.refetch&&(e=>{M(!0),g.a.getById(e).then((e=>{let{data:l}=e;var a;B({label:l.payment.tag,value:l.payment.id}),V.setFieldsValue({...l.payload,payment_id:l.payment.tag,paypal_validate_ssl:Boolean(l.payload.paypal_validate_ssl)}),H([(a=l.payload.logo,{name:a,url:a})])})).finally((()=>{M(!1),O((0,j.CO)(F))}))})(S)}),[F.refetch]);return(0,z.jsx)(c.default,{title:N("edit.payment.payloads"),className:"h-100",children:G?(0,z.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,z.jsx)(p.c,{size:"large",className:"py-5"})}):(0,z.jsxs)(i.c,{name:"edit.payment.payloads",layout:"vertical",onFinish:e=>{var l,a;if(delete e.payment_id,"flutterWave"===(null===L||void 0===L?void 0:L.label)&&!E[0])return void t.m4.error(N("choose.payload.image"));A(!0);const s={payment_id:L.value,payload:{...e,logo:E[0]?E[0].name:void 0,currency:null!==(l=e.currency)&&void 0!==l&&l.label?null===(a=e.currency)||void 0===a?void 0:a.label:e.currency,paypal_validate_ssl:null!==e&&void 0!==e&&e.paypal_validate_ssl?Number(e.paypal_validate_ssl):void 0}};g.a.update(S,s).then((()=>{const e="payment-payloads";t.m4.success(N("successfully.updated")),(0,h.wN)((()=>{O((0,j.MF)({...F,nextUrl:e})),O((0,I.O)({}))})),P("/".concat(e))})).finally((()=>A(!1)))},form:V,initialValues:{...F.data},className:"d-flex flex-column h-100",children:[(0,z.jsxs)(n.c,{gutter:12,children:[(0,z.jsx)(d.c,{span:"cash"===(null===L||void 0===L?void 0:L.label)||"wallet"===(null===L||void 0===L?void 0:L.label)?12:24,children:(0,z.jsx)(i.c.Item,{label:N("payment"),name:"payment_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{notFoundContent:G?(0,z.jsx)(p.c,{size:"small"}):"no results",allowClear:!0,disabled:!0})})}),"cash"===(null===L||void 0===L?void 0:L.label)||"wallet"===(null===L||void 0===L?void 0:L.label)?"":(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.c,{span:24,className:"d-flex justify-content-center mt-4 mb-5",children:(e=>{switch(e){case"Paypal":return(0,z.jsx)(b.kvb,{size:80});case"Stripe":return(0,z.jsx)(f.w12,{size:80});case"Razorpay":return(0,z.jsx)(f.GeI,{size:80});case"Paystack":return(0,z.jsx)("img",{src:v.c,alt:"img",width:"80",height:"80"});case"flutterWave":return(0,z.jsx)(f.wVI,{size:80});default:return null}})(null===L||void 0===L?void 0:L.label)}),"paystack"===(null===L||void 0===L?void 0:L.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paystack.pk"),name:"paystack_pk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paystack.sk"),name:"paystack_sk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})})," ",(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("currency"),name:"currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(q.o,{placeholder:N("select.currency"),valuePropName:"label",defaultValue:{value:R.id,label:R.title},fetchOptions:()=>_.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title),key:e.id})))}))})})})]}):"paypal"===(null===L||void 0===L?void 0:L.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.mode"),name:"paypal_mode",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{options:[{value:"live",label:N("live")},{value:"sandbox",label:N("sandbox")}]})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.sandbox.client.id"),name:"paypal_sandbox_client_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.sandbox.client.secret"),name:"paypal_sandbox_client_secret",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.sandbox.app.id"),name:"paypal_sandbox_app_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.live.client.id"),name:"paypal_live_client_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.live.client.secret"),name:"paypal_live_client_secret",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.live.app.id"),name:"paypal_live_app_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.payment.action"),name:"paypal_payment_action",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{options:[{value:"Sale",label:N("sale")},{value:"Order",label:N("order")},{value:"Authorization",label:N("authorization")}]})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.currency"),name:"paypal_currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(q.o,{placeholder:N("select.currency"),fetchOptions:()=>_.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title," (").concat(e.symbol||"",")"),key:e.id})))}))})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.locale"),name:"paypal_locale",rules:[{required:!0,message:N("required")}],valuePropName:"value",children:(0,z.jsx)(u.default,{placeholder:N("select.locale"),defaultValue:{label:null===(a=W.find((e=>e.locale===k.c.language)))||void 0===a?void 0:a.title,value:k.c.language},options:null===W||void 0===W?void 0:W.map((e=>({value:e.locale,label:e.title})))})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("paypal.validate.ssl"),name:"paypal_validate_ssl",valuePropName:"checked",children:(0,z.jsx)(m.c,{})})})]}):"stripe"===(null===L||void 0===L?void 0:L.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("stripe.pk"),name:"stripe_pk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("stripe.sk"),name:"stripe_sk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})})," ",(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("currency"),name:"currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(q.o,{placeholder:N("select.currency"),valuePropName:"label",defaultValue:{value:R.id,label:R.title},fetchOptions:()=>_.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title),key:e.id})))}))})})})]}):"razorpay"===(null===L||void 0===L?void 0:L.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("razorpay.key"),name:"razorpay_key",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("razorpay.secret"),name:"razorpay_secret",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})})," ",(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("currency"),name:"currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(q.o,{placeholder:N("select.currency"),valuePropName:"label",defaultValue:{value:R.id,label:R.title},fetchOptions:()=>_.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title),key:e.id})))}))})})})]}):"flutterWave"===(null===L||void 0===L?void 0:L.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("payload.title"),name:"title",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("payload.description"),name:"description",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("flw_pk"),name:"flw_pk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("flw_sk"),name:"flw_sk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})})," ",(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("key"),name:"key",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(o.default,{})})}),(0,z.jsx)(d.c,{span:12,children:(0,z.jsx)(i.c.Item,{label:N("currency"),name:"currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(q.o,{placeholder:N("select.currency"),valuePropName:"label",defaultValue:{value:R.id,label:R.title},fetchOptions:()=>_.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title),key:e.id})))}))})})}),(0,z.jsx)(d.c,{span:6,children:(0,z.jsx)(i.c.Item,{rules:[{required:!0}],label:N("logo"),children:(0,z.jsx)(w.c,{type:"brands",imageList:E,setImageList:H,form:V,multiple:!1})})})]}):null]})]}),(0,z.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,z.jsx)("div",{className:"pb-5",children:(0,z.jsx)(x.c,{type:"primary",htmlType:"submit",loading:C,disabled:C,children:N("submit")})})})]})})}}}]);