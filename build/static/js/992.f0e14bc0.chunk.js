"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[992],{64408:(e,l,i)=>{function s(e){var l,i;let s=null===e||void 0===e?void 0:e.slice(0,1),n=null===e||void 0===e?void 0:e.lastIndexOf("@"),d=null===e||void 0===e?void 0:e.slice(1,n-1);d=null===(l=d)||void 0===l?void 0:l.replace(/./g,"*");let o=null===e||void 0===e?void 0:e.slice(n-1,e.length);return null===s||void 0===s||null===(i=s.concat(d))||void 0===i?void 0:i.concat(o)}i.d(l,{c:()=>s})},71376:(e,l,i)=>{i.d(l,{g:()=>c});var s=i(99584),n=i(95976),d=i.n(n),o=i(2664),t=i(37728),a=i(97884);const c=e=>{let{fetchOptions:l,debounceTimeout:i=400,onClear:n,...c}=e;const[r,u]=(0,s.useState)(!1),[v,m]=(0,s.useState)([]),x=(0,s.useMemo)((()=>d()((e=>{m([]),u(!0),l(e).then((e=>{m(e),u(!1)}))}),i)),[l,i]);return(0,a.jsx)(o.default,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:x,onClear:()=>{x(""),n&&n()},notFoundContent:r?(0,a.jsx)(t.c,{size:"small"}):"no results",...c,options:v,onFocus:()=>{x("")}})}},33131:(e,l,i)=>{i.d(l,{c:()=>s});i(52640);function s(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const l=e.location.split(", ");return{lat:Number(null===l||void 0===l?void 0:l[0]),lng:Number(null===l||void 0===l?void 0:l[1])}}},24968:(e,l,i)=>{function s(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}i.d(l,{c:()=>s})},992:(e,l,i)=>{i.r(l),i.d(l,{default:()=>P});var s=i(99584),n=i(66296),d=i(35928),o=i(98044),t=i(87968),a=i(68496),c=i(87228),r=i(68768),u=i(10260),v=i(49308),m=i(24100),x=i(67692),h=i(37728),j=i(15752),p=i(91612),y=i(94604),f=i(30020),g=i(36668),b=i(9112),N=i(23424),_=i(16940),w=i(77020),k=i(71836),Y=i(32712),C=i(18896),I=i(69720),S=i(95312),q=i(65236),M=i(24968),H=i(21064),D=i(6944),z=i(95300),B=i(26493),G=i(52640),F=i(5008),T=i(29416),O=i(83072),K=i.n(O),A=i(88992),W=i(89932),L=i(75088),V=i(64408),E=i(97884);function P(){var e,l,i,O,P,R,U,Z,$,J,Q,X,ee,le,ie,se,ne,de,oe,te,ae,ce,re,ue,ve,me,xe,he,je,pe,ye,fe,ge,be,Ne,_e,we,ke,Ye;const{activeMenu:Ce}=(0,Y.w1)((e=>e.menu),Y.G),{defaultCurrency:Ie}=(0,Y.w1)((e=>e.currency),Y.G),Se=Ce.data,{t:qe}=(0,q.G)(),{id:Me}=(0,N.W4)(),He=(0,Y.OY)(),De=(0,N.i6)(),ze=(0,s.useRef)(),Be=(0,s.useRef)(),{isDemo:Ge}=(0,L.c)(),[Fe,Te]=(0,s.useState)(null),[Oe,Ke]=(0,s.useState)(!1),[Ae,We]=(0,s.useState)(null),[Le,Ve]=(0,s.useState)(null),{statusList:Ee}=(0,Y.w1)((e=>e.orderStatus),Y.G),Pe=[{title:qe("id"),dataIndex:"id",key:"id",render:(e,l)=>{var i;return null===(i=l.stock)||void 0===i?void 0:i.id}},{title:qe("product.name"),dataIndex:"product",key:"product",render:(e,l)=>{var i,s,t,a;return(0,E.jsxs)(n.c,{direction:"vertical",className:"relative",children:[null===(i=l.stock)||void 0===i||null===(s=i.product)||void 0===s||null===(t=s.translation)||void 0===t?void 0:t.title,!!l.note&&(0,E.jsx)(d.c,{title:l.note,className:"product-note",children:(0,E.jsx)(f.c,{})})," ",null===(a=l.addons)||void 0===a?void 0:a.map((e=>{var l,i,s;return(0,E.jsxs)(o.c,{children:[null===(l=e.stock)||void 0===l||null===(i=l.product)||void 0===i||null===(s=i.translation)||void 0===s?void 0:s.title," x ",e.quantity]},e.id)}))]})}},{title:qe("image"),dataIndex:"img",key:"img",render:(e,l)=>{var i,s;return(0,E.jsx)(t.c,{src:(0,k.c)(null===(i=l.stock)||void 0===i||null===(s=i.product)||void 0===s?void 0:s.img),alt:"product",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0})}},{title:qe("price"),dataIndex:"origin_price",key:"origin_price",render:e=>(0,M.c)(e,null===Ie||void 0===Ie?void 0:Ie.symbol)},{title:qe("quantity"),dataIndex:"quantity",key:"quantity",render:(e,l)=>{var i,s,n,d,o,t;return(0,E.jsxs)("span",{children:[l.quantity*((null===l||void 0===l||null===(i=l.stock)||void 0===i||null===(s=i.product)||void 0===s?void 0:s.interval)||1),null===l||void 0===l||null===(n=l.stock)||void 0===n||null===(d=n.product)||void 0===d||null===(o=d.unit)||void 0===o||null===(t=o.translation)||void 0===t?void 0:t.title]})}},{title:qe("discount"),dataIndex:"discount",key:"discount",render:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,l=arguments.length>1?arguments[1]:void 0;return(0,M.c)(e/l.quantity,null===Ie||void 0===Ie?void 0:Ie.symbol)}},{title:qe("tax"),dataIndex:"tax",key:"tax",render:(e,l)=>(0,M.c)(e/l.quantity,null===Ie||void 0===Ie?void 0:Ie.symbol)},{title:qe("total.price"),dataIndex:"total_price",key:"total_price",render:(e,l)=>{var i;const s=e+(null===l||void 0===l||null===(i=l.addons)||void 0===i?void 0:i.reduce(((e,l)=>e+l.total_price),0));return(0,M.c)(s,null===Ie||void 0===Ie?void 0:Ie.symbol)}}],Re=[{title:qe("date"),dataIndex:"date",key:"date",render:(e,l)=>K()(null===l||void 0===l?void 0:l.date).format("YYYY-MM-DD HH:mm")},{title:qe("document"),dataIndex:"document",key:"document"},{title:qe("number"),dataIndex:"number",key:"number"},{title:qe("total.price"),dataIndex:"price",key:"price"}],Ue=[{price:(0,M.c)(null===Se||void 0===Se?void 0:Se.total_price,Ie.symbol),number:(0,E.jsxs)(_.cH,{to:"/orders/generate-invoice/".concat(null===Se||void 0===Se?void 0:Se.id),children:["#",null===Se||void 0===Se?void 0:Se.id]}),document:qe("invoice"),date:K()(null===Se||void 0===Se||null===(e=Se.transaction)||void 0===e?void 0:e.created_at).format("YYYY-MM-DD HH:mm")},{price:"-",number:(0,E.jsxs)(_.cH,{to:"/orders/generate-invoice/".concat(null===Se||void 0===Se?void 0:Se.id),children:["#",null===Se||void 0===Se?void 0:Se.id]}),document:qe("delivery.reciept"),date:K()(null===Se||void 0===Se||null===(l=Se.transaction)||void 0===l?void 0:l.created_at).format("YYYY-MM-DD HH:mm")}],Ze=()=>{We(null),Ve(null),Te(null)};(0,s.useEffect)((()=>{Ce.refetch&&(Ke(!0),w.c.getById(Me).then((e=>{let{data:l}=e;He((0,C.MH)({activeMenu:Ce,data:l}))})).finally((()=>{Ke(!1),He((0,C.CO)(Ce))})),0===Ee.length&&He((0,W.GI)({})))}),[Ce.refetch]);return(0,E.jsxs)("div",{className:"order_details",children:[(0,E.jsx)(a.default,{className:"order-details-info",title:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(B.Y7g,{className:"mr-2 icon"}),"".concat(qe("order")," ").concat(null!==Se&&void 0!==Se&&Se.id?"#".concat(null===Se||void 0===Se?void 0:Se.id," "):"")," ",qe("from.order")," ",null===Se||void 0===Se||null===(i=Se.user)||void 0===i?void 0:i.firstname," ",(null===Se||void 0===Se||null===(O=Se.user)||void 0===O?void 0:O.lastname)||""]}),extra:"delivered"!==(null===Se||void 0===Se?void 0:Se.status)&&"canceled"!==(null===Se||void 0===Se?void 0:Se.status)?(0,E.jsxs)(n.c,{children:["delivered"!==(null===Se||void 0===Se?void 0:Se.status)&&"canceled"!==(null===Se||void 0===Se?void 0:Se.status)?(0,E.jsx)(c.c,{type:"primary",onClick:()=>We(Se),children:qe("change.status")}):null,(0,E.jsx)(c.c,{type:"primary",icon:(0,E.jsx)(g.c,{}),onClick:()=>{He((0,H.Qm)()),He((0,C.WC)({url:"order/".concat(Me),id:"order_edit",name:qe("edit.order")})),De("/order/".concat(Me))},children:qe("edit")})]}):""}),(0,E.jsxs)(r.c,{gutter:24,children:[(0,E.jsx)(u.c,{span:24,children:(0,E.jsx)(a.default,{children:(0,E.jsxs)(n.c,{className:"justify-content-between w-100",children:[(0,E.jsxs)(n.c,{className:"align-items-start",children:[(0,E.jsx)(b.c,{className:"order-card-icon"}),(0,E.jsxs)("div",{className:"d-flex flex-column",children:[(0,E.jsx)(v.default.Text,{children:qe("delivery.date")}),Oe?(0,E.jsx)(m.c.Button,{size:16}):(0,E.jsxs)(v.default.Text,{className:"order-card-title",children:[null===Se||void 0===Se?void 0:Se.delivery_date," ",null===Se||void 0===Se?void 0:Se.delivery_time]})]})]}),(0,E.jsxs)(n.c,{className:"align-items-start",onClick:()=>Be.current.scrollIntoView({behavior:"smooth"}),children:[(0,E.jsx)(T.qkY,{className:"order-card-icon"}),(0,E.jsxs)("div",{className:"d-flex flex-column",children:[(0,E.jsx)(v.default.Text,{children:qe("total.price")}),Oe?(0,E.jsx)(m.c.Button,{size:16,loading:Oe}):(0,E.jsx)(v.default.Text,{className:"order-card-title",children:(0,M.c)(null===Se||void 0===Se?void 0:Se.total_price,null===Ie||void 0===Ie?void 0:Ie.symbol)})]})]}),(0,E.jsxs)(n.c,{className:"align-items-start",children:[(0,E.jsx)(T.uEM,{className:"order-card-icon"}),(0,E.jsxs)("div",{className:"d-flex flex-column",children:[(0,E.jsx)(v.default.Text,{children:qe("messages")}),Oe?(0,E.jsx)(m.c.Button,{size:16}):(0,E.jsx)(v.default.Text,{className:"order-card-title",children:null!==Se&&void 0!==Se&&Se.review?1:0})]})]}),(0,E.jsxs)(n.c,{className:"align-items-start",onClick:()=>ze.current.scrollIntoView({behavior:"smooth"}),children:[(0,E.jsx)(B.Y7g,{className:"order-card-icon"}),(0,E.jsxs)("div",{className:"d-flex flex-column",children:[(0,E.jsx)(v.default.Text,{children:qe("products")}),Oe?(0,E.jsx)(m.c.Button,{size:16}):(0,E.jsx)(v.default.Text,{className:"order-card-title",children:null===Se||void 0===Se||null===(P=Se.details)||void 0===P?void 0:P.reduce(((e,l)=>e+l.quantity),0)})]})]})]})})}),"canceled"!==(null===Se||void 0===Se?void 0:Se.status)&&(0,E.jsx)(u.c,{span:24,children:(0,E.jsx)(a.default,{children:(0,E.jsx)(x.default,{current:null===Ee||void 0===Ee?void 0:Ee.findIndex((e=>e.name===(null===Se||void 0===Se?void 0:Se.status))),children:null===Ee||void 0===Ee?void 0:Ee.slice(0,-1).map((e=>(0,E.jsx)(x.default.Step,{title:qe(e.name)},e.id)))})})}),(0,E.jsxs)(u.c,{span:16,children:[(0,E.jsx)(h.c,{spinning:Oe,children:(0,E.jsx)(a.default,{style:{minHeight:"200px"},children:(0,E.jsxs)(r.c,{hidden:Oe,className:"mb-3 order_detail",children:[(0,E.jsxs)(u.c,{span:12,children:[(0,E.jsxs)("div",{children:[qe("created.date.&.time"),":",(0,E.jsxs)("span",{className:"ml-2",children:[(0,E.jsx)(F.qiH,{className:"mr-1"})," ",K()(null===Se||void 0===Se?void 0:Se.created_at).format("YYYY-MM-DD HH:mm")," "]})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[qe("delivery.date.&.time"),":",(0,E.jsxs)("span",{className:"ml-2",children:[(0,E.jsx)(F.qiH,{className:"mr-1"})," ",null===Se||void 0===Se?void 0:Se.delivery_date," ",null===Se||void 0===Se?void 0:Se.delivery_time]})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[qe("payment.status"),":",(0,E.jsx)("span",{className:"ml-2",children:qe(null===Se||void 0===Se||null===(R=Se.transaction)||void 0===R?void 0:R.status)})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[qe("house"),":",(0,E.jsx)("span",{className:"ml-2",children:qe(null===Se||void 0===Se||null===(U=Se.address)||void 0===U?void 0:U.house)})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[qe("floor"),":",(0,E.jsx)("span",{className:"ml-2",children:qe(null===Se||void 0===Se||null===(Z=Se.address)||void 0===Z?void 0:Z.floor)})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[qe("note"),":",(0,E.jsx)("span",{className:"ml-2",children:qe(null!==Se&&void 0!==Se&&Se.note?null===Se||void 0===Se?void 0:Se.note:"")})]}),(0,E.jsxs)(o.c,{className:"map_show mt-3",onClick:()=>Te(Me),children:[(0,E.jsx)(D.m_6,{})," ",qe("show.locations")]})]}),(0,E.jsxs)(u.c,{span:12,children:[(0,E.jsxs)("div",{children:[qe("status"),":",(0,E.jsx)("span",{className:"ml-2",children:"new"===(null===Se||void 0===Se?void 0:Se.status)?(0,E.jsx)(o.c,{color:"blue",children:qe(null===Se||void 0===Se?void 0:Se.status)}):"canceled"===(null===Se||void 0===Se?void 0:Se.status)?(0,E.jsx)(o.c,{color:"error",children:qe(null===Se||void 0===Se?void 0:Se.status)}):(0,E.jsx)(o.c,{color:"cyan",children:qe(null===Se||void 0===Se?void 0:Se.status)})})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[qe("delivery.type"),":",(0,E.jsx)("span",{className:"ml-2",children:null===Se||void 0===Se?void 0:Se.delivery_type})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[qe("payment.type"),":",(0,E.jsx)("span",{className:"ml-2",children:qe(null===Se||void 0===Se||null===($=Se.transaction)||void 0===$||null===(J=$.payment_system)||void 0===J?void 0:J.tag)})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[qe("address"),":",(0,E.jsx)("span",{className:"ml-2",children:null===Se||void 0===Se||null===(Q=Se.address)||void 0===Q?void 0:Q.address})]}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[qe("office"),":",(0,E.jsx)("span",{className:"ml-2",children:null===Se||void 0===Se||null===(X=Se.address)||void 0===X?void 0:X.office})]}),(0,E.jsx)("br",{})]})]})})}),(0,E.jsx)(a.default,{title:qe("documents"),children:(0,E.jsx)(j.c,{columns:Re,dataSource:Ue,pagination:!1,loading:Oe})}),(0,E.jsxs)(a.default,{className:"w-100 order-table",children:[(0,E.jsx)(j.c,{ref:ze,scroll:{x:!0},columns:Pe,dataSource:(null===(ee=Ce.data)||void 0===ee?void 0:ee.details)||[],loading:Oe,rowKey:e=>e.id,pagination:!1}),(0,E.jsxs)(n.c,{size:100,className:"d-flex justify-content-end w-100 order-table__summary",children:[(0,E.jsxs)("div",{children:[(0,E.jsxs)("span",{children:[qe("delivery.fee"),":"]}),(0,E.jsx)("br",{}),(0,E.jsxs)("span",{children:[qe("order.tax"),":"]}),(0,E.jsx)("br",{}),(0,E.jsxs)("span",{children:[qe("product"),":"]}),(0,E.jsx)("br",{}),(0,E.jsxs)("span",{children:[qe("discount"),":"]}),(0,E.jsx)("br",{}),(null===Se||void 0===Se?void 0:Se.coupon)&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("span",{children:[qe("coupon"),":"]}),(0,E.jsx)("br",{})]}),(0,E.jsxs)("span",{children:[qe("service.fee"),":"]}),(0,E.jsx)("br",{}),(0,E.jsxs)("h3",{children:[qe("total.price"),":"]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("span",{children:(0,M.c)(null===Se||void 0===Se?void 0:Se.delivery_fee,null===Ie||void 0===Ie?void 0:Ie.symbol)}),(0,E.jsx)("br",{}),(0,E.jsx)("span",{children:(0,M.c)(null===Se||void 0===Se?void 0:Se.tax,null===Ie||void 0===Ie?void 0:Ie.symbol)}),(0,E.jsx)("br",{}),(0,E.jsx)("span",{children:(0,M.c)(null===Se||void 0===Se?void 0:Se.origin_price,null===Ie||void 0===Ie?void 0:Ie.symbol)}),(0,E.jsx)("br",{}),(0,E.jsx)("span",{children:(0,M.c)(null===Se||void 0===Se?void 0:Se.total_discount,null===Ie||void 0===Ie?void 0:Ie.symbol)}),(0,E.jsx)("br",{}),(null===Se||void 0===Se?void 0:Se.coupon)&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("span",{children:(0,M.c)(null===Se||void 0===Se||null===(le=Se.coupon)||void 0===le?void 0:le.price,null===Ie||void 0===Ie?void 0:Ie.symbol)}),(0,E.jsx)("br",{})]}),(0,E.jsx)("span",{children:(0,M.c)(null===Se||void 0===Se?void 0:Se.service_fee,null===Ie||void 0===Ie?void 0:Ie.symbol)}),(0,E.jsx)("br",{}),(0,E.jsx)("h3",{ref:Be,children:(0,M.c)(null===Se||void 0===Se?void 0:Se.total_price,null===Ie||void 0===Ie?void 0:Ie.symbol)})]})]})]})]}),(0,E.jsxs)(u.c,{span:8,className:"order_info",children:[(0,E.jsxs)(a.default,{title:qe("deliveryman"),extra:"ready"===(null===Se||void 0===Se?void 0:Se.status)&&"pickup"!==(null===Se||void 0===Se?void 0:Se.delivery_type)&&(0,E.jsxs)(c.c,{onClick:()=>Ve(Se),children:[qe("change"),(0,E.jsx)(g.c,{})]}),children:["new"===(null===Se||void 0===Se?void 0:Se.status)||"accepted"===(null===Se||void 0===Se?void 0:Se.status)?(0,E.jsx)("p",{children:qe("order_status_ready")}):"","new"===(null===Se||void 0===Se?void 0:Se.status)||"accepted"===(null===Se||void 0===Se?void 0:Se.status)||null!==Se&&void 0!==Se&&Se.deliveryman?"":(0,E.jsx)("p",{children:qe("The supplier is not assigned or delivery type pickup")}),(null===Se||void 0===Se?void 0:Se.deliveryman)&&(0,E.jsxs)(n.c,{children:[(0,E.jsx)(p.c,{shape:"square",size:64,src:G.cd+(null===Se||void 0===Se||null===(ie=Se.deliveryman)||void 0===ie?void 0:ie.img)}),(0,E.jsxs)("div",{children:[(0,E.jsxs)("h5",{children:[null===Se||void 0===Se||null===(se=Se.deliveryman)||void 0===se?void 0:se.firstname," ",(null===Se||void 0===Se||null===(ne=Se.deliveryman)||void 0===ne?void 0:ne.lastname)||""]}),(0,E.jsxs)("span",{className:"delivery-info",children:[(0,E.jsx)(F.mKs,{}),null===Se||void 0===Se||null===(de=Se.deliveryman)||void 0===de?void 0:de.phone]}),(0,E.jsxs)("div",{className:"delivery-info",children:[(0,E.jsx)("b",{children:(0,E.jsx)(D.e_o,{size:16})}),(0,E.jsx)("span",{children:Ge?(0,V.c)(null===Se||void 0===Se||null===(oe=Se.deliveryman)||void 0===oe?void 0:oe.email):null===Se||void 0===Se||null===(te=Se.deliveryman)||void 0===te?void 0:te.email})]})]})]})]}),!(null===Se||void 0===Se||!Se.username)&&(0,E.jsxs)(a.default,{title:qe("order.receiver"),children:[(0,E.jsxs)("div",{className:"customer-info",children:[(0,E.jsx)("span",{className:"title",children:qe("name")}),(0,E.jsxs)("span",{className:"description",children:[(0,E.jsx)(F.sJe,{}),null===Se||void 0===Se?void 0:Se.username]})]}),(0,E.jsxs)("div",{className:"customer-info",children:[(0,E.jsx)("span",{className:"title",children:qe("phone")}),(0,E.jsxs)("span",{className:"description",children:[(0,E.jsx)(F.mKs,{}),null===Se||void 0===Se?void 0:Se.phone]})]})]}),(0,E.jsx)(a.default,{title:(0,E.jsxs)(n.c,{children:[qe("customer.info"),(0,E.jsx)(g.c,{onClick:()=>(He((0,C.WC)({url:"users/user/".concat(null===Se||void 0===Se?void 0:Se.user.uuid),id:"user_info",name:qe("user.info")})),void De("/users/user/".concat(null===Se||void 0===Se?void 0:Se.user.uuid),{state:{user_id:null===Se||void 0===Se?void 0:Se.user.id}}))})]}),children:(0,E.jsxs)("div",{className:"d-flex w-100 customer-info-container",children:[Oe?(0,E.jsx)(m.c.Avatar,{size:64,shape:"square"}):(0,E.jsx)(p.c,{shape:"square",size:64,src:null===Se||void 0===Se||null===(ae=Se.user)||void 0===ae?void 0:ae.img}),(0,E.jsx)("h5",{className:"customer-name",children:Oe?(0,E.jsx)(m.c.Button,{size:20,style:{width:70}}):(null===Se||void 0===Se||null===(ce=Se.user)||void 0===ce?void 0:ce.firstname)+" "+((null===Se||void 0===Se||null===(re=Se.user)||void 0===re?void 0:re.lastname)||"")}),(0,E.jsxs)("div",{className:"customer-info-detail",children:[(0,E.jsxs)("div",{className:"customer-info",children:[(0,E.jsx)("span",{className:"title",children:qe("phone")}),(0,E.jsxs)("span",{className:"description",children:[(0,E.jsx)(F.mKs,{}),Oe?(0,E.jsx)(m.c.Button,{size:16}):(null===Se||void 0===Se||null===(ue=Se.user)||void 0===ue?void 0:ue.phone)||"none"]})]}),(0,E.jsxs)("div",{className:"customer-info",children:[(0,E.jsx)("span",{className:"title",children:qe("email")}),(0,E.jsxs)("span",{className:"description",children:[(0,E.jsx)(D.e_o,{}),Oe?(0,E.jsx)(m.c.Button,{size:16}):Ge?(0,V.c)(null===Se||void 0===Se||null===(ve=Se.user)||void 0===ve?void 0:ve.email):null===Se||void 0===Se||null===(me=Se.user)||void 0===me?void 0:me.email]})]}),(0,E.jsxs)("div",{className:"customer-info",children:[(0,E.jsx)("span",{className:"title",children:qe("registration.date")}),(0,E.jsxs)("span",{className:"description",children:[(0,E.jsx)(F.qiH,{}),Oe?(0,E.jsx)(m.c.Button,{size:16}):K()(null===Se||void 0===Se||null===(xe=Se.user)||void 0===xe?void 0:xe.created_at).format("DD-MM-YYYY, HH:mm")]})]}),(0,E.jsxs)("div",{className:"customer-info",children:[(0,E.jsx)("span",{className:"title",children:qe("orders.count")}),(0,E.jsx)("span",{className:"description",children:Oe?(0,E.jsx)(m.c.Button,{size:16}):(0,E.jsx)(y.c,{showZero:!0,style:{backgroundColor:"#3d7de3"},count:(null===Se||void 0===Se||null===(he=Se.user)||void 0===he?void 0:he.orders_count)||0})})]}),(0,E.jsxs)("div",{className:"customer-info",children:[(0,E.jsx)("span",{className:"title",children:qe("spent.since.registration")}),(0,E.jsx)("span",{className:"description",children:Oe?(0,E.jsx)(m.c.Button,{size:16}):(0,E.jsx)(y.c,{showZero:!0,style:{backgroundColor:"#48e33d"},count:(0,M.c)(null===Se||void 0===Se||null===(je=Se.user)||void 0===je?void 0:je.orders_sum_price,null===Ie||void 0===Ie?void 0:Ie.symbol)})})]})]})]})}),(null===Se||void 0===Se?void 0:Se.review)&&!Oe&&(0,E.jsx)(a.default,{title:qe("messages"),children:(0,E.jsxs)("div",{className:"order-message",children:[(0,E.jsx)("span",{className:"message",children:null===Se||void 0===Se||null===(pe=Se.review)||void 0===pe?void 0:pe.comment}),(0,E.jsx)(n.c,{className:"w-100 justify-content-end",children:(0,E.jsx)("span",{className:"date",children:K()(null===Se||void 0===Se||null===(ye=Se.review)||void 0===ye?void 0:ye.created_at).format("YYYY-MM-DD HH:mm")})})]})}),(0,E.jsx)(a.default,{title:qe("store.information"),children:Oe?(0,E.jsx)(m.c,{avatar:!0,shape:"square",paragraph:{rows:2}}):(0,E.jsxs)(n.c,{className:"w-100",children:[(0,E.jsx)(p.c,{shape:"square",size:64,src:G.cd+(null===Se||void 0===Se||null===(fe=Se.shop)||void 0===fe?void 0:fe.logo_img)}),(0,E.jsxs)("div",{children:[(0,E.jsx)("h5",{children:null===Se||void 0===Se||null===(ge=Se.shop)||void 0===ge||null===(be=ge.translation)||void 0===be?void 0:be.title}),(null===Se||void 0===Se||null===(Ne=Se.shop)||void 0===Ne?void 0:Ne.phone)&&(0,E.jsxs)("div",{className:"delivery-info",children:[(0,E.jsx)("b",{children:(0,E.jsx)(F.mKs,{})}),(0,E.jsx)("span",{children:null===Se||void 0===Se||null===(_e=Se.shop)||void 0===_e?void 0:_e.phone})]}),(0,E.jsxs)("div",{className:"delivery-info my-1",children:[(0,E.jsxs)("strong",{children:[qe("min.delivery.price"),":"]}),(0,E.jsx)("span",{children:(0,M.c)(null===Se||void 0===Se||null===(we=Se.shop)||void 0===we?void 0:we.price,null===Ie||void 0===Ie?void 0:Ie.symbol)})]}),(0,E.jsxs)("div",{className:"delivery-info",children:[(0,E.jsx)("b",{children:(0,E.jsx)(A.mYO,{size:16})}),(0,E.jsx)("span",{children:null===Se||void 0===Se||null===(ke=Se.shop)||void 0===ke||null===(Ye=ke.translation)||void 0===Ye?void 0:Ye.address})]})]})]})})]})]}),Ae&&(0,E.jsx)(I.c,{orderDetails:Ae,handleCancel:Ze,status:Ee}),Le&&(0,E.jsx)(S.c,{orderDetails:Le,handleCancel:Ze}),Fe&&(0,E.jsx)(z.c,{id:Fe,handleCancel:Ze})]})}},95312:(e,l,i)=>{i.d(l,{c:()=>j});var s=i(99584),n=i(65732),d=i(95884),o=i(87228),t=i(68768),a=i(10260),c=i(32712),r=i(77020),u=i(18896),v=i(65236),m=i(42080),x=i(71376),h=i(97884);function j(e){var l,i,j;let{orderDetails:p,handleCancel:y}=e;const{t:f}=(0,v.G)(),{activeMenu:g}=(0,c.w1)((e=>e.menu),c.G),[b]=n.c.useForm(),N=(0,c.OY)(),[_,w]=(0,s.useState)(!1);return(0,h.jsx)(d.default,{visible:!!p,onCancel:y,footer:[(0,h.jsx)(o.c,{type:"primary",onClick:()=>b.submit(),loading:_,children:f("save")},"saveBtn"),(0,h.jsx)(o.c,{type:"default",onClick:y,children:f("cancel")},"cancelBtn")],children:(0,h.jsx)(n.c,{form:b,layout:"vertical",onFinish:e=>{const l={deliveryman:e.deliveryman.value};w(!0),r.c.updateDelivery(p.id,l).then((()=>{y(),N((0,u.A1)(g))})).finally((()=>w(!1)))},initialValues:{deliveryman:{label:p.deliveryman?(null===p||void 0===p||null===(l=p.deliveryman)||void 0===l?void 0:l.firstname)+" "+(null===p||void 0===p||null===(i=p.deliveryman)||void 0===i?void 0:i.lastname):null,value:p.deliveryman?null===p||void 0===p||null===(j=p.deliveryman)||void 0===j?void 0:j.id:null}},children:(0,h.jsx)(t.c,{gutter:12,children:(0,h.jsx)(a.c,{span:24,children:(0,h.jsx)(n.c.Item,{label:f("deliveryman"),name:"deliveryman",rules:[{required:!0,message:f("required")}],children:(0,h.jsx)(x.g,{className:"w-100",debounceTimeout:500,placeholder:f("select.shop"),fetchOptions:async function(e){const l={search:e.length?e:void 0,page:1,perPage:10,role:"deliveryman",shop_id:p.shop.id,exist_token:1};return m.c.getAll(l).then((e=>{let{data:l}=e;return l.map((e=>({label:e.firstname+" "+e.lastname||"no name",value:e.id})))}))},allowClear:!0})})})})})})}},69720:(e,l,i)=>{i.d(l,{c:()=>h});var s=i(99584),n=i(65732),d=i(95884),o=i(87228),t=i(68768),a=i(10260),c=i(2664),r=i(32712),u=i(65236),v=i(77020),m=i(18896),x=i(97884);function h(e){let{orderDetails:l,handleCancel:i,status:h}=e;const{activeMenu:j}=(0,r.w1)((e=>e.menu),r.G),[p]=n.c.useForm(),y=(0,r.OY)(),{t:f}=(0,u.G)(),[g,b]=(0,s.useState)(!1),[N,_]=(0,s.useState)(h);(0,s.useEffect)((()=>{const e=h.findIndex((e=>e.name===l.status));let i=[h[e],h[e+1],{name:"canceled",id:8,active:!0}];e<0&&(i=[h[e+1],"canceled"]),_(i)}),[l]);return(0,x.jsx)(d.default,{visible:!!l,title:l.title,onCancel:i,footer:[(0,x.jsx)(o.c,{type:"primary",onClick:()=>p.submit(),loading:g,children:f("save")},"save-form"),(0,x.jsx)(o.c,{type:"default",onClick:i,children:f("cancel")},"cansel-modal")],children:(0,x.jsx)(n.c,{form:p,layout:"vertical",onFinish:e=>{b(!0);const s={...e};v.c.updateStatus(l.id,s).then((()=>{i(),y((0,m.A1)(j))})).finally((()=>b(!1)))},initialValues:{status:l.status},children:(0,x.jsx)(t.c,{gutter:12,children:(0,x.jsx)(a.c,{span:24,children:(0,x.jsx)(n.c.Item,{label:f("status"),name:"status",rules:[{required:!0,message:f("required")}],children:(0,x.jsx)(c.default,{children:null===N||void 0===N?void 0:N.map((e=>(0,x.jsx)(c.default.Option,{value:null===e||void 0===e?void 0:e.name,children:f(null===e||void 0===e?void 0:e.name)},null===e||void 0===e?void 0:e.name)))})})})})})})}},95300:(e,l,i)=>{i.d(l,{c:()=>H});var s=i(52800),n=i(67692),d=i(95884),o=i(87228),t=i(68496),a=i(68768),c=i(10260),r=i(98044),u=i(99584),v=i(65236),m=i(77020),x=i(77180),h=i(5008),j=i(32712),p=i(52640),y=i(97132),f=i(57236),g=i(33131),b=i(4736),N=i(6944),_=i(88992),w=i(23216),k=i(83072),Y=i.n(k),C=i(97884);const{Step:I}=n.default,S=()=>(0,C.jsx)("img",{src:y,width:"50",alt:"Pin"}),q=()=>(0,C.jsx)("img",{src:f,width:"50",alt:"Pin"}),M=["blue","red","gold","volcano","cyan","lime"],H=e=>{var l,i,y,f,k,H;let{id:D,handleCancel:z}=e;const{t:B}=(0,v.G)(),[G,F]=(0,u.useState)(null),[T,O]=(0,u.useState)(null),[K,A]=(0,u.useState)(null),{settings:W}=(0,j.w1)((e=>e.globalSettings),j.G),L=(0,g.c)(W),[V,E]=(0,u.useState)(0),[P,R]=(0,u.useState)((0,g.c)(W)),[U,Z]=(0,u.useState)((0,g.c)(W)),[$,J]=(0,u.useState)([{id:0,name:"new",icon:(0,C.jsx)(b.c,{})},{id:1,name:"accepted",icon:(0,C.jsx)(h.IFj,{})},{id:2,name:"ready",icon:(0,C.jsx)(N.YxA,{})},{id:3,name:"on_a_way",icon:(0,C.jsx)(_.wJ$,{})},{id:4,name:"delivered",icon:(0,C.jsx)(_.W8K,{})}]);const{google_map_key:Q}=(0,j.w1)((e=>e.globalSettings.settings),j.G);(0,u.useEffect)((()=>{F(!0),m.c.getById(D).then((e=>{var l;let{data:i}=e;J("canceled"===i.status?[{id:1,name:"new",icon:(0,C.jsx)(b.c,{})},{id:5,name:"canceled",icon:(0,C.jsx)(w.uoq,{})}]:$),E("canceled"===i.status?1:null===(l=$.find((e=>e.name===i.status)))||void 0===l?void 0:l.id),A("canceled"===i.status?"error":"success"),O(i),Z({lat:i.location.latitude,lng:i.location.longitude}),R({lat:i.shop.location.latitude,lng:i.shop.location.longitude})})).finally((()=>{F(!1)}))}),[]);return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(d.default,{visible:!!D,title:B("show.locations"),onCancel:()=>z(),style:{minWidth:"80vw"},footer:[(0,C.jsx)(o.c,{type:"default",onClick:z,children:B("cancel")},"cancelBtn")],children:G?(0,C.jsx)(x.c,{}):(0,C.jsxs)(t.default,{children:[(0,C.jsx)(n.default,{current:V,status:K,className:"mb-5",children:null===$||void 0===$?void 0:$.map(((e,l)=>(0,C.jsx)(I,{title:B(e.name),icon:null===e||void 0===e?void 0:e.icon},e.id+l)))}),(0,C.jsxs)(a.c,{gutter:12,children:[(0,C.jsxs)(c.c,{span:12,children:[(0,C.jsxs)("h3",{children:[B("order.id")," #",null===T||void 0===T?void 0:T.id]}),(0,C.jsxs)("p",{children:[(0,C.jsx)(h.kIG,{})," ",Y()(null===T||void 0===T?void 0:T.created_at).format("YYYY-MM-DD HH:mm")]}),(0,C.jsxs)("p",{children:[B("schedulet.at")," ",null===T||void 0===T?void 0:T.delivery_date]}),(0,C.jsxs)("span",{children:[(0,C.jsx)("strong",{children:null===T||void 0===T||null===(l=T.shop)||void 0===l||null===(i=l.translation)||void 0===i?void 0:i.title})," ",null===T||void 0===T||null===(y=T.details)||void 0===y?void 0:y.map(((e,l)=>{var i,s,n;return(0,C.jsx)(r.c,{color:M[l],children:null===e||void 0===e||null===(i=e.stock)||void 0===i||null===(s=i.product)||void 0===s||null===(n=s.translation)||void 0===n?void 0:n.title})}))]})]}),(0,C.jsxs)(c.c,{span:12,children:[(0,C.jsxs)("p",{children:[B("status")," ","new"===(null===T||void 0===T?void 0:T.status)?(0,C.jsx)(r.c,{color:"blue",children:B(null===T||void 0===T?void 0:T.status)}):"canceled"===(null===T||void 0===T?void 0:T.status)?(0,C.jsx)(r.c,{color:"error",children:B(null===T||void 0===T?void 0:T.status)}):(0,C.jsx)(r.c,{color:"cyan",children:B(null===T||void 0===T?void 0:T.status)})]}),(0,C.jsxs)("p",{children:[B("payment.method")," ",(0,C.jsx)("strong",{children:null===T||void 0===T||null===(f=T.transaction)||void 0===f||null===(k=f.payment_system)||void 0===k?void 0:k.tag})]}),(0,C.jsxs)("p",{children:[B("order.type")," ",(0,C.jsx)("strong",{children:null===T||void 0===T?void 0:T.delivery_type})]}),(0,C.jsxs)("p",{children:[B("payment.type")," ",(0,C.jsx)("strong",{children:null===T||void 0===T||null===(H=T.transaction)||void 0===H?void 0:H.status})]})]}),(0,C.jsxs)(c.c,{span:24,className:"mt-5",children:[(0,C.jsx)("h4",{children:B("map")}),(0,C.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,C.jsxs)(s.cp,{bootstrapURLKeys:{key:p.KU||Q},defaultZoom:15,center:L,yesIWantToUseGoogleMapApiInternals:!0,options:{fullscreenControl:!1},onGoogleApiLoaded:e=>{let{map:l,maps:i}=e;const s=[P,U].map((e=>({lat:Number(e.lat||"0"),lng:Number(e.lng||"0")})));let n=new i.LatLngBounds;for(var d=0;d<s.length;d++)n.extend(s[d]);l.fitBounds(n)},children:[(0,C.jsx)(q,{lat:null===P||void 0===P?void 0:P.lat,lng:null===P||void 0===P?void 0:P.lng}),(0,C.jsx)(S,{lat:null===U||void 0===U?void 0:U.lat,lng:null===U||void 0===U?void 0:U.lng})]})})]})]})]})})})}},57236:(e,l,i)=>{e.exports=i.p+"static/media/shop.46d7a94ca800c711764a.png"},97132:(e,l,i)=>{e.exports=i.p+"static/media/user.fbe7078c52acde79652d.jpg"}}]);