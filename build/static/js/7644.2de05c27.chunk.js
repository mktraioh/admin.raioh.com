"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7644],{98892:(e,l,a)=>{a.d(l,{c:()=>s});a(99584);const s=a.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},24692:(e,l,a)=>{a.d(l,{o:()=>c});var s=a(99584),r=a(2664),i=a(37728),t=a(97884);const c=e=>{let{fetchOptions:l,refetch:a=!1,...c}=e;const[d,n]=(0,s.useState)(!1),[u,p]=(0,s.useState)([]);return(0,t.jsx)(r.default,{labelInValue:!0,filterOption:!1,notFoundContent:d?(0,t.jsx)(i.c,{size:"small"}):"no results",...c,options:d?[]:u,onFocus:()=>{u.length&&!a||(n(!0),l().then((e=>{p(e),n(!1)})))}})}},70024:(e,l,a)=>{a.r(l),a.d(l,{default:()=>N});var s=a(99584),r=a(65732),i=a(68496),t=a(68768),c=a(10260),d=a(2664),n=a(37728),u=a(46712),p=a(26012),o=a(87228),m=a(65236),x=a(18896),h=a(32712),v=a(61072),y=a(23424),j=a(98892),b=a(74788),f=a(32160),g=a(78648),q=a(72269),_=a(59048),k=a(24692),I=a(80144),w=a(57112),F=a(40936),z=a(97884);function N(){var e,l,a;const{t:N}=(0,m.G)(),[P]=r.c.useForm(),[S,C]=(0,s.useState)(!1),[O,V]=(0,s.useState)(!1),[A,G]=(0,s.useState)([]),[W,L]=(0,s.useState)(null),{languages:R}=(0,h.w1)((e=>e.formLang),h.G),{activeMenu:M}=(0,h.w1)((e=>e.menu),h.G),[U,E]=(0,s.useState)(null!==(e=M.data)&&void 0!==e&&e.image?[null===(l=M.data)||void 0===l?void 0:l.image]:[]),{defaultCurrency:T}=(0,h.w1)((e=>e.currency),h.G),Y=(0,h.OY)(),B=(0,y.i6)();(0,s.useEffect)((()=>{!async function(){V(!0),_.c.getAll().then((e=>{let{data:l}=e;const a=l.filter((e=>"wallet"!==e.tag)).filter((e=>"cash"!==e.tag)).map((e=>({label:e.tag[0].toUpperCase()+e.tag.substring(1),value:e.id,key:e.id})));G(a)})).finally((()=>V(!1)))}()}),[]);return(0,z.jsx)(i.default,{title:N("add.payment.payloads"),className:"h-100",children:(0,z.jsxs)(r.c,{layout:"vertical",name:"user-address",form:P,onFinish:e=>{var l,a,s;delete e.payment_id,"FlutterWave"!==(null===W||void 0===W?void 0:W.label)||U[0]?(C(!0),q.a.create({payment_id:W.value,payload:{...e,logo:U[0]?U[0].name:void 0,paypal_currency:null===(l=e.paypal_currency)||void 0===l?void 0:l.label,currency:null!==(a=e.currency)&&void 0!==a&&a.label?null===(s=e.currency)||void 0===s?void 0:s.label:e.currency,paypal_validate_ssl:null!==e&&void 0!==e&&e.paypal_validate_ssl?Number(null===e||void 0===e?void 0:e.paypal_validate_ssl):void 0}}).then((()=>{const e="payment-payloads";v.m4.success(N("successfully.created")),(0,h.wN)((()=>{Y((0,x.MF)({...M,nextUrl:e})),Y((0,g.O)({})),Y((0,x.A1)(M))})),B("/".concat(e))})).catch((e=>{var l,a,s;v.m4.dismiss(),v.m4.error(null===e||void 0===e||null===(l=e.response)||void 0===l||null===(a=l.data)||void 0===a||null===(s=a.params)||void 0===s?void 0:s.payment_id[0])})).finally((()=>C(!1)))):v.m4.error(N("choose.payload.image"))},children:[(0,z.jsxs)(t.c,{gutter:12,children:[(0,z.jsx)(c.c,{span:"Cash"===(null===W||void 0===W?void 0:W.label)||"Wallet"===(null===W||void 0===W?void 0:W.label)?12:24,children:(0,z.jsx)(r.c.Item,{label:N("payment"),name:"payment_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(d.default,{notFoundContent:O?(0,z.jsx)(n.c,{size:"small"}):"no results",allowClear:!0,options:A,onSelect:e=>{const l=A.find((l=>l.value===e));switch(l.label){case"Paypal":P.setFieldsValue({paypal_validate_ssl:!0,paypal_locale:w.c.language,paypal_currency:{label:null===T||void 0===T?void 0:T.title,value:null===T||void 0===T?void 0:T.id}});break;case"Stripe":case"Razorpay":case"Paystack":case"FlutterWave":P.setFieldsValue({currency:null===T||void 0===T?void 0:T.title});break;default:P.resetFields()}L(l)}})})}),"Cash"===(null===W||void 0===W?void 0:W.label)||"Wallet"===(null===W||void 0===W?void 0:W.label)?"":(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(c.c,{span:24,className:"d-flex justify-content-center mt-4 mb-5",children:(e=>{switch(e){case"Paypal":return(0,z.jsx)(b.kvb,{size:80});case"Stripe":return(0,z.jsx)(f.w12,{size:80});case"Razorpay":return(0,z.jsx)(f.GeI,{size:80});case"Paystack":return(0,z.jsx)("img",{src:j.c,alt:"img",width:"80",height:"80"});case"Flutterwave":return(0,z.jsx)(f.wVI,{size:80});default:return null}})(null===W||void 0===W?void 0:W.label)}),"Paystack"===(null===W||void 0===W?void 0:W.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paystack.pk"),name:"paystack_pk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paystack.sk"),name:"paystack_sk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})})," ",(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("currency"),name:"currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(k.o,{placeholder:N("select.currency"),valuePropName:"label",defaultValue:{value:T.id,label:T.title},fetchOptions:()=>I.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title),key:e.id})))}))})})})]}):"Paypal"===(null===W||void 0===W?void 0:W.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.mode"),name:"paypal_mode",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(d.default,{options:[{value:"live",label:N("live")},{value:"sandbox",label:N("sandbox")}]})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.sandbox.client.id"),name:"paypal_sandbox_client_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.sandbox.client.secret"),name:"paypal_sandbox_client_secret",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.sandbox.app.id"),name:"paypal_sandbox_app_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.live.client.id"),name:"paypal_live_client_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.live.client.secret"),name:"paypal_live_client_secret",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.live.app.id"),name:"paypal_live_app_id",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.payment.action"),name:"paypal_payment_action",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(d.default,{options:[{value:"Sale",label:N("sale")},{value:"Order",label:N("order")},{value:"Authorization",label:N("authorization")}]})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.currency"),name:"paypal_currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(k.o,{placeholder:N("select.currency"),valuePropName:"label",defaultValue:{value:T.id,label:T.title},fetchOptions:()=>I.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title),key:e.id})))}))})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.locale"),name:"paypal_locale",rules:[{required:!0,message:N("required")}],valuePropName:"value",children:(0,z.jsx)(d.default,{placeholder:N("select.locale"),defaultValue:{label:null===(a=R.find((e=>e.locale===w.c.language)))||void 0===a?void 0:a.title,value:w.c.language},options:null===R||void 0===R?void 0:R.map((e=>({value:e.locale,label:e.locale})))})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("paypal.validate.ssl"),name:"paypal_validate_ssl",valuePropName:"checked",children:(0,z.jsx)(p.c,{defaultChecked:!0})})})]}):"Stripe"===(null===W||void 0===W?void 0:W.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("stripe.pk"),name:"stripe_pk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("stripe.sk"),name:"stripe_sk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})})," ",(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("currency"),name:"currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(k.o,{placeholder:N("select.currency"),valuePropName:"label",defaultValue:{value:T.id,label:T.title},fetchOptions:()=>I.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title),key:e.id})))}))})})})]}):"Razorpay"===(null===W||void 0===W?void 0:W.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("razorpay.key"),name:"razorpay_key",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("razorpay.secret"),name:"razorpay_secret",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})})," ",(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("currency"),name:"currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(k.o,{placeholder:N("select.currency"),valuePropName:"label",defaultValue:{value:T.id,label:T.title},fetchOptions:()=>I.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title),key:e.id})))}))})})})]}):"FlutterWave"===(null===W||void 0===W?void 0:W.label)?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("payload.title"),name:"title",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("payload.description"),name:"description",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("flw_pk"),name:"flw_pk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("flw_sk"),name:"flw_sk",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})})," ",(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("key"),name:"key",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(u.default,{})})}),(0,z.jsx)(c.c,{span:12,children:(0,z.jsx)(r.c.Item,{label:N("currency"),name:"currency",rules:[{required:!0,message:N("required")}],children:(0,z.jsx)(k.o,{placeholder:N("select.currency"),valuePropName:"label",defaultValue:{value:T.id,label:T.title},fetchOptions:()=>I.c.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:"".concat(e.title),key:e.id})))}))})})}),(0,z.jsx)(c.c,{span:6,children:(0,z.jsx)(r.c.Item,{rules:[{required:!0}],label:N("logo"),children:(0,z.jsx)(F.c,{type:"brands",imageList:U,setImageList:E,form:P,multiple:!1})})})]}):null]})]}),(0,z.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,z.jsx)("div",{className:"pb-5",children:(0,z.jsx)(o.c,{type:"primary",htmlType:"submit",loading:S,disabled:S,children:N("submit")})})})]})})}}}]);