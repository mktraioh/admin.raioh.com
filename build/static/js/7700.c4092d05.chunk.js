"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7700],{24968:(e,s,l)=>{function i(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}l.d(s,{c:()=>i})},47700:(e,s,l)=>{l.r(s),l.d(s,{default:()=>Z});var i=l(99584),d=l(87968),n=l(68496),a=l(66296),t=l(87228),r=l(68768),o=l(10260),c=l(49308),u=l(24100),v=l(67692),x=l(37728),m=l(98044),j=l(15752),h=l(91612),p=l(94604),y=l(9112),f=l(36668),N=l(23424),b=l(16940),g=l(71836),_=l(32712),w=l(18896),k=l(65732),q=l(95884),I=l(2664),z=l(65236),Y=l(91840),C=l(82168),H=l(61072),B=l(97884);function M(e){let{orderDetails:s,handleCancel:l,status:d}=e;const{activeMenu:n}=(0,_.w1)((e=>e.menu),_.G),[a]=k.c.useForm(),c=(0,_.OY)(),{t:u}=(0,z.G)(),[v,x]=(0,i.useState)(!1),[m,j]=(0,i.useState)(s.status);return(0,B.jsx)(q.default,{visible:!!s,title:u("refund"),closable:!1,footer:[(0,B.jsx)(t.c,{type:"primary",onClick:()=>a.submit(),loading:v,children:u("save")},"save-form"),(0,B.jsx)(t.c,{type:"default",onClick:l,children:u("cancel")},"cansel-modal")],children:(0,B.jsx)(k.c,{form:a,layout:"vertical",onFinish:e=>{x(!0);const i={...e};Y.c.update(s.id,i).then((()=>{l(),c((0,w.A1)(n))})).catch((e=>H.m4.error(e.message))).finally((()=>x(!1)))},initialValues:{status:s.status},children:(0,B.jsx)(r.c,{gutter:12,children:(0,B.jsxs)(o.c,{span:24,children:[(0,B.jsx)(k.c.Item,{label:u("status"),name:"status",rules:[{required:!0,message:u("required")}],children:(0,B.jsx)(I.default,{onChange:e=>j(e),children:d.map(((e,s)=>(0,B.jsx)(I.default.Option,{value:e,children:u(e)},s)))})}),"accepted"!==m&&(0,B.jsx)(k.c.Item,{label:u("answer"),name:"answer",rules:[{required:!0,message:u("required")}],children:(0,B.jsx)(C.c,{rows:4})})]})})})})}var D=l(97480),G=l(24968),S=l(89932),T=l(6944),F=l(26493),K=l(52640),O=l(5008),A=l(29416),V=l(83072),E=l.n(V);const R=["pending","accepted","canceled"];function Z(){var e,s,l,k,q,I,C,H,V,Z,$,L,W,J,P,Q,U,X,ee,se,le,ie,de,ne,ae,te,re,oe,ce,ue,ve,xe,me,je,he,pe,ye;const{activeMenu:fe}=(0,_.w1)((e=>e.menu),_.G),{defaultCurrency:Ne}=(0,_.w1)((e=>e.currency),_.G),be=null===fe||void 0===fe||null===(e=fe.data)||void 0===e?void 0:e.order,{t:ge}=(0,z.G)(),{id:_e}=(0,N.W4)(),we=(0,_.OY)(),ke=(0,i.useRef)(),qe=(0,i.useRef)(),[Ie,ze]=(0,i.useState)(!1),[Ye,Ce]=(0,i.useState)(null),{statusList:He}=(0,_.w1)((e=>e.orderStatus),_.G),Be=[{title:ge("id"),dataIndex:"id",key:"id",render:(e,s)=>{var l;return null===(l=s.stock)||void 0===l?void 0:l.id}},{title:ge("product.name"),dataIndex:"product",key:"product",render:(e,s)=>{var l,i,d;return null===(l=s.stock)||void 0===l||null===(i=l.product)||void 0===i||null===(d=i.translation)||void 0===d?void 0:d.title}},{title:ge("image"),dataIndex:"img",key:"img",render:(e,s)=>{var l,i;return(0,B.jsx)(d.c,{src:(0,g.c)(null===(l=s.stock)||void 0===l||null===(i=l.product)||void 0===i?void 0:i.img),alt:"product",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0})}},{title:ge("price"),dataIndex:"origin_price",key:"origin_price",render:(e,s)=>(0,G.c)(null===s||void 0===s?void 0:s.origin_price,null===Ne||void 0===Ne?void 0:Ne.symbol)},{title:ge("quantity"),dataIndex:"quantity",key:"quantity"},{title:ge("discount"),dataIndex:"discount",key:"discount",render:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1?arguments[1]:void 0;return(0,G.c)(e/s.quantity,null===Ne||void 0===Ne?void 0:Ne.symbol)}},{title:ge("tax"),dataIndex:"tax",key:"tax",render:(e,s)=>(0,G.c)(e/s.quantity,null===Ne||void 0===Ne?void 0:Ne.symbol)},{title:ge("total.price"),dataIndex:"total_price",key:"total_price",render:(e,s)=>(0,G.c)(null===s||void 0===s?void 0:s.total_price,null===Ne||void 0===Ne?void 0:Ne.symbol)}],Me=[{title:ge("date"),dataIndex:"date",key:"date"},{title:ge("document"),dataIndex:"document",key:"document"},{title:ge("number"),dataIndex:"number",key:"number"},{title:ge("total.price"),dataIndex:"price",key:"price"}],De=[{price:(0,G.c)(null===be||void 0===be?void 0:be.total_price,null===Ne||void 0===Ne?void 0:Ne.symbol),number:(0,B.jsxs)(b.cH,{to:"/orders/generate-invoice/".concat(null===be||void 0===be?void 0:be.id),children:["#",null===be||void 0===be?void 0:be.id]}),document:ge("invoice"),date:null===be||void 0===be?void 0:be.delivery_date},{price:"-",number:(0,B.jsxs)(b.cH,{to:"/orders/generate-invoice/".concat(null===be||void 0===be?void 0:be.id),children:["#",null===be||void 0===be?void 0:be.id]}),document:ge("delivery.reciept"),date:null===be||void 0===be?void 0:be.delivery_date}];return(0,i.useEffect)((()=>{fe.refetch&&(ze(!0),Y.c.getById(_e).then((e=>{let{data:s}=e;we((0,w.MH)({activeMenu:fe,data:s}))})).finally((()=>{ze(!1),we((0,w.CO)(fe))})),we((0,S.GI)()),we((0,D.mG)()))}),[fe.refetch]),(0,B.jsxs)("div",{className:"order_details",children:[(0,B.jsx)(n.default,{className:"order-details-info",title:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(F.Y7g,{className:"mr-2 icon"}),"".concat(ge("order")," ").concat(null!==be&&void 0!==be&&be.id?"#".concat(null===be||void 0===be?void 0:be.id," "):"")," ",ge("from.order")," ",null===be||void 0===be||null===(s=be.user)||void 0===s?void 0:s.firstname," ",(null===be||void 0===be||null===(l=be.user)||void 0===l?void 0:l.lastname)||""]}),extra:"delivered"!==(null===be||void 0===be?void 0:be.status)&&"canceled"!==(null===be||void 0===be?void 0:be.status)?(0,B.jsx)(a.c,{children:"delivered"!==(null===be||void 0===be?void 0:be.status)&&"canceled"!==(null===be||void 0===be?void 0:be.status)?(0,B.jsx)(t.c,{type:"primary",onClick:()=>Ce(be),children:ge("change.status")}):null}):""}),(0,B.jsxs)(r.c,{gutter:24,children:[(0,B.jsx)(o.c,{span:24,children:(0,B.jsx)(n.default,{children:(0,B.jsxs)(a.c,{className:"justify-content-between w-100",children:[(0,B.jsxs)(a.c,{className:"align-items-start",children:[(0,B.jsx)(y.c,{className:"order-card-icon"}),(0,B.jsxs)("div",{className:"d-flex flex-column",children:[(0,B.jsx)(c.default.Text,{children:ge("delivery.date")}),Ie?(0,B.jsx)(u.c.Button,{size:16}):(0,B.jsxs)(c.default.Text,{className:"order-card-title",children:[null===be||void 0===be?void 0:be.delivery_date," ",null===be||void 0===be?void 0:be.delivery_time]})]})]}),(0,B.jsxs)(a.c,{className:"align-items-start",onClick:()=>qe.current.scrollIntoView({behavior:"smooth"}),children:[(0,B.jsx)(A.qkY,{className:"order-card-icon"}),(0,B.jsxs)("div",{className:"d-flex flex-column",children:[(0,B.jsx)(c.default.Text,{children:ge("total.price")}),Ie?(0,B.jsx)(u.c.Button,{size:16,loading:Ie}):(0,B.jsx)(c.default.Text,{className:"order-card-title",children:(0,G.c)(null===be||void 0===be?void 0:be.total_price,null===Ne||void 0===Ne?void 0:Ne.symbol)})]})]}),(0,B.jsxs)(a.c,{className:"align-items-start",children:[(0,B.jsx)(A.uEM,{className:"order-card-icon"}),(0,B.jsxs)("div",{className:"d-flex flex-column",children:[(0,B.jsx)(c.default.Text,{children:ge("messages")}),Ie?(0,B.jsx)(u.c.Button,{size:16}):(0,B.jsx)(c.default.Text,{className:"order-card-title",children:null!==be&&void 0!==be&&be.review?1:0})]})]}),(0,B.jsxs)(a.c,{className:"align-items-start",onClick:()=>ke.current.scrollIntoView({behavior:"smooth"}),children:[(0,B.jsx)(F.Y7g,{className:"order-card-icon"}),(0,B.jsxs)("div",{className:"d-flex flex-column",children:[(0,B.jsx)(c.default.Text,{children:ge("products")}),Ie?(0,B.jsx)(u.c.Button,{size:16}):(0,B.jsx)(c.default.Text,{className:"order-card-title",children:null===be||void 0===be||null===(k=be.details)||void 0===k?void 0:k.reduce(((e,s)=>e+s.quantity),0)})]})]})]})})}),"canceled"!==(null===be||void 0===be?void 0:be.status)&&(0,B.jsx)(o.c,{span:24,children:(0,B.jsx)(n.default,{children:(0,B.jsx)(v.default,{current:null===He||void 0===He?void 0:He.findIndex((e=>e.name===(null===be||void 0===be?void 0:be.status))),children:null===He||void 0===He?void 0:He.slice(0,-1).map((e=>(0,B.jsx)(v.default.Step,{title:ge(e.name)},e.id)))})})}),(0,B.jsxs)(o.c,{span:16,children:[(0,B.jsx)(x.c,{spinning:Ie,children:(0,B.jsx)(n.default,{style:{minHeight:"200px"},children:(0,B.jsxs)(r.c,{hidden:Ie,className:"mb-3 order_detail",children:[(0,B.jsxs)(o.c,{span:12,children:[(0,B.jsxs)("div",{children:[ge("created.date.&.time"),":",(0,B.jsxs)("span",{className:"ml-2",children:[(0,B.jsx)(O.qiH,{className:"mr-1"})," ",E()(null===be||void 0===be?void 0:be.created_at).format("YYYY-MM-DD HH:mm")," "]})]}),(0,B.jsx)("br",{}),(0,B.jsxs)("div",{children:[ge("delivery.date.&.time"),":",(0,B.jsxs)("span",{className:"ml-2",children:[(0,B.jsx)(O.qiH,{className:"mr-1"})," ",null===be||void 0===be?void 0:be.delivery_date," ",null===be||void 0===be?void 0:be.delivery_time]})]}),(0,B.jsx)("br",{}),(0,B.jsxs)("div",{children:[ge("payment.status"),":",(0,B.jsx)("span",{className:"ml-2",children:ge(null===be||void 0===be||null===(q=be.transaction)||void 0===q?void 0:q.status)})]}),(0,B.jsx)("br",{}),(0,B.jsxs)("div",{children:[ge("cause"),":",(0,B.jsx)("span",{className:"ml-2",style:{color:"red"},children:null===(I=fe.data)||void 0===I?void 0:I.cause})]}),(0,B.jsx)("br",{}),(0,B.jsxs)("div",{children:[ge("answer"),":",(0,B.jsx)("span",{className:"ml-2",children:null===(C=fe.data)||void 0===C?void 0:C.answer})]})]}),(0,B.jsxs)(o.c,{span:12,children:[(0,B.jsxs)("div",{children:[ge("status"),":",(0,B.jsxs)("span",{className:"ml-2",children:["pending"===(null===(H=fe.data)||void 0===H?void 0:H.status)?(0,B.jsx)(m.c,{color:"blue",children:ge(null===(V=fe.data)||void 0===V?void 0:V.status)}):"canceled"===(null===(Z=fe.data)||void 0===Z?void 0:Z.status)?(0,B.jsx)(m.c,{color:"error",children:ge(null===($=fe.data)||void 0===$?void 0:$.status)}):(0,B.jsx)(m.c,{color:"cyan",children:ge(null===(L=fe.data)||void 0===L?void 0:L.status)}),"canceled"!==(null===(W=fe.data)||void 0===W?void 0:W.status)&&(0,B.jsx)(f.c,{onClick:()=>Ce(null===fe||void 0===fe?void 0:fe.data)})]})]}),(0,B.jsx)("br",{}),(0,B.jsxs)("div",{children:[ge("delivery.type"),":",(0,B.jsx)("span",{className:"ml-2",children:null===be||void 0===be?void 0:be.delivery_type})]}),(0,B.jsx)("br",{}),(0,B.jsxs)("div",{children:[ge("payment.type"),":",(0,B.jsx)("span",{className:"ml-2",children:ge(null===be||void 0===be||null===(J=be.transaction)||void 0===J||null===(P=J.payment_system)||void 0===P?void 0:P.tag)})]}),(0,B.jsx)("br",{}),(0,B.jsxs)("div",{children:[ge("address"),":",(0,B.jsx)("span",{className:"ml-2",children:null===be||void 0===be||null===(Q=be.address)||void 0===Q?void 0:Q.address})]})]})]})})}),(0,B.jsx)(n.default,{title:ge("documents"),children:(0,B.jsx)(j.c,{columns:Me,dataSource:De||[],pagination:!1,loading:Ie})}),(0,B.jsxs)(n.default,{className:"w-100 order-table",children:[(0,B.jsx)(j.c,{ref:ke,scroll:{x:!0},columns:Be,dataSource:(null===(U=fe.data)||void 0===U||null===(X=U.order)||void 0===X?void 0:X.details)||[],loading:Ie,rowKey:e=>e.id,pagination:!1}),(0,B.jsxs)(a.c,{size:100,className:"d-flex justify-content-end w-100 order-table__summary",children:[(0,B.jsxs)("div",{children:[(0,B.jsxs)("span",{children:[ge("delivery.fee"),":"]}),(0,B.jsx)("br",{}),(0,B.jsxs)("span",{children:[ge("order.tax"),":"]}),(0,B.jsx)("br",{}),(0,B.jsxs)("span",{children:[ge("product"),":"]}),(0,B.jsx)("br",{}),(0,B.jsxs)("span",{children:[ge("coupon"),":"]}),(0,B.jsx)("br",{}),(0,B.jsxs)("span",{children:[ge("discount"),":"]}),(0,B.jsx)("br",{}),(0,B.jsxs)("span",{children:[ge("service.fee"),":"]}),(0,B.jsx)("br",{}),(0,B.jsxs)("h3",{children:[ge("total.price"),":"]})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("span",{children:(0,G.c)(null===be||void 0===be?void 0:be.delivery_fee,null===Ne||void 0===Ne?void 0:Ne.symbol)}),(0,B.jsx)("br",{}),(0,B.jsx)("span",{children:(0,G.c)(null===be||void 0===be?void 0:be.tax,null===Ne||void 0===Ne?void 0:Ne.symbol)}),(0,B.jsx)("br",{}),(0,B.jsx)("span",{children:(0,G.c)(null===be||void 0===be||null===(ee=be.details)||void 0===ee?void 0:ee.reduce(((e,s)=>e+s.total_price),0),null===Ne||void 0===Ne?void 0:Ne.symbol)}),(0,B.jsx)("br",{}),(0,B.jsx)("span",{children:(0,G.c)(null===be||void 0===be||null===(se=be.coupon)||void 0===se?void 0:se.price,null===Ne||void 0===Ne?void 0:Ne.symbol)}),(0,B.jsx)("br",{}),(0,B.jsx)("span",{children:(0,G.c)(null===be||void 0===be?void 0:be.total_discount,null===Ne||void 0===Ne?void 0:Ne.symbol)}),(0,B.jsx)("br",{}),(0,B.jsx)("span",{children:(0,G.c)(null===be||void 0===be?void 0:be.service_fee,null===Ne||void 0===Ne?void 0:Ne.symbol)}),(0,B.jsx)("br",{}),(0,B.jsx)("h3",{ref:qe,children:(0,G.c)(null===be||void 0===be?void 0:be.total_price,null===Ne||void 0===Ne?void 0:Ne.symbol)})]})]})]})]}),(0,B.jsxs)(o.c,{span:8,className:"order_info",children:["ready"===(null===be||void 0===be?void 0:be.status)&&"pickup"!==(null===be||void 0===be?void 0:be.delivery_type)&&(0,B.jsx)(n.default,{title:ge("deliveryman"),extra:"ready"===(null===be||void 0===be?void 0:be.status)&&"pickup"!==(null===be||void 0===be?void 0:be.delivery_type)&&(0,B.jsxs)(t.c,{children:[ge("change"),(0,B.jsx)(f.c,{})]}),children:(null===be||void 0===be?void 0:be.deliveryman)&&(0,B.jsxs)(a.c,{children:[(0,B.jsx)(h.c,{shape:"square",size:64,src:K.cd+(null===be||void 0===be||null===(le=be.deliveryman)||void 0===le?void 0:le.img)}),(0,B.jsxs)("div",{children:[(0,B.jsxs)("h5",{children:[null===be||void 0===be||null===(ie=be.deliveryman)||void 0===ie?void 0:ie.firstname," ",(null===be||void 0===be||null===(de=be.deliveryman)||void 0===de?void 0:de.lastname)||""]}),(0,B.jsxs)("span",{className:"delivery-info",children:[(0,B.jsx)(O.mKs,{}),null===be||void 0===be||null===(ne=be.deliveryman)||void 0===ne?void 0:ne.phone]}),(0,B.jsxs)("div",{className:"delivery-info",children:[(0,B.jsx)("b",{children:(0,B.jsx)(T.e_o,{size:16})}),(0,B.jsx)("span",{children:null===be||void 0===be||null===(ae=be.deliveryman)||void 0===ae?void 0:ae.email})]})]})]})}),(0,B.jsx)(n.default,{title:(0,B.jsx)(a.c,{children:ge("customer.info")}),children:(0,B.jsxs)("div",{className:"d-flex w-100 customer-info-container",children:[Ie?(0,B.jsx)(u.c.Avatar,{size:64,shape:"square"}):(0,B.jsx)(h.c,{shape:"square",size:64,src:K.cd+(null===be||void 0===be||null===(te=be.deliveryman)||void 0===te?void 0:te.img)}),(0,B.jsx)("h5",{className:"customer-name",children:Ie?(0,B.jsx)(u.c.Button,{size:20,style:{width:70}}):(null===be||void 0===be||null===(re=be.user)||void 0===re?void 0:re.firstname)+" "+((null===be||void 0===be||null===(oe=be.user)||void 0===oe?void 0:oe.lastname)||"")}),(0,B.jsxs)("div",{className:"customer-info-detail",children:[(0,B.jsxs)("div",{className:"customer-info",children:[(0,B.jsx)("span",{className:"title",children:ge("phone")}),(0,B.jsxs)("span",{className:"description",children:[(0,B.jsx)(O.mKs,{}),Ie?(0,B.jsx)(u.c.Button,{size:16}):(null===be||void 0===be||null===(ce=be.user)||void 0===ce?void 0:ce.phone)||"none"]})]}),(0,B.jsxs)("div",{className:"customer-info",children:[(0,B.jsx)("span",{className:"title",children:ge("email")}),(0,B.jsxs)("span",{className:"description",children:[(0,B.jsx)(T.e_o,{}),Ie?(0,B.jsx)(u.c.Button,{size:16}):null===be||void 0===be||null===(ue=be.user)||void 0===ue?void 0:ue.email]})]}),(0,B.jsxs)("div",{className:"customer-info",children:[(0,B.jsx)("span",{className:"title",children:ge("registration.date")}),(0,B.jsxs)("span",{className:"description",children:[(0,B.jsx)(O.qiH,{}),Ie?(0,B.jsx)(u.c.Button,{size:16}):E()(null===be||void 0===be||null===(ve=be.user)||void 0===ve?void 0:ve.created_at).format("DD-MM-YYYY, HH:mm")]})]}),(0,B.jsxs)("div",{className:"customer-info",children:[(0,B.jsx)("span",{className:"title",children:ge("orders.count")}),(0,B.jsx)("span",{className:"description",children:Ie?(0,B.jsx)(u.c.Button,{size:16}):(0,B.jsx)(p.c,{showZero:!0,style:{backgroundColor:"#3d7de3"},count:(null===be||void 0===be||null===(xe=be.user)||void 0===xe?void 0:xe.orders_count)||0})})]}),(0,B.jsxs)("div",{className:"customer-info",children:[(0,B.jsx)("span",{className:"title",children:ge("spent.since.registration")}),(0,B.jsx)("span",{className:"description",children:Ie?(0,B.jsx)(u.c.Button,{size:16}):(0,B.jsx)(p.c,{showZero:!0,style:{backgroundColor:"#48e33d"},count:(0,G.c)(null===be||void 0===be||null===(me=be.user)||void 0===me?void 0:me.orders_sum_total_price,null===Ne||void 0===Ne?void 0:Ne.symbol)})})]})]})]})}),(null===be||void 0===be?void 0:be.review)&&!Ie&&(0,B.jsx)(n.default,{title:ge("messages"),children:(0,B.jsxs)("div",{className:"order-message",children:[(0,B.jsx)("span",{className:"message",children:null===be||void 0===be?void 0:be.review.comment}),(0,B.jsx)(a.c,{className:"w-100 justify-content-end",children:(0,B.jsx)("span",{className:"date",children:E()(null===be||void 0===be?void 0:be.review.created_at).format("YYYY-MM-DD HH:mm")})})]})}),(0,B.jsx)(n.default,{title:ge("store.information"),children:Ie?(0,B.jsx)(u.c,{avatar:!0,shape:"square",paragraph:{rows:2}}):(0,B.jsxs)(a.c,{className:"w-100",children:[(0,B.jsx)(h.c,{shape:"square",size:64,src:K.cd+(null===be||void 0===be||null===(je=be.shop)||void 0===je?void 0:je.logo_img)}),(0,B.jsxs)("div",{children:[(0,B.jsx)("h5",{children:null===be||void 0===be||null===(he=be.shop)||void 0===he?void 0:he.translation.title}),(0,B.jsxs)("div",{className:"delivery-info",children:[(0,B.jsx)("b",{children:(0,B.jsx)(O.mKs,{})}),(0,B.jsx)("span",{children:null===be||void 0===be||null===(pe=be.shop)||void 0===pe?void 0:pe.phone})]}),(0,B.jsxs)("div",{className:"delivery-info",children:[(0,B.jsx)("b",{children:(0,B.jsx)(A.wuA,{size:16})}),(0,B.jsx)("span",{children:null===be||void 0===be||null===(ye=be.shop)||void 0===ye?void 0:ye.price})]})]})]})})]})]}),Ye&&(0,B.jsx)(M,{orderDetails:Ye,handleCancel:()=>Ce(null),status:R})]})}}}]);