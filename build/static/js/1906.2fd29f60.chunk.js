"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1906],{53992:(e,t,a)=>{a.d(t,{c:()=>x});var l=a(99584),n=a(49308),i=a(92200),s=a(66296),c=a(26012),d=a(72192),o=a(35928),r=a(87228),u=a(55512),v=a(65236),h=a(97884);const{Text:m}=n.default,x=e=>{let{columns:t=[],setColumns:a,style:n,size:x="",iconOnly:p}=e;const{t:f}=(0,v.G)(),[g,j]=(0,l.useState)(!1),y=(0,h.jsx)(i.c,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,h.jsx)(i.c.Item,{children:(0,h.jsxs)(s.c,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(c.c,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(l)}(e),disabled:1===l})]})},e+l)))});return(0,h.jsx)(d.c,{overlay:y,trigger:["click"],onVisibleChange:e=>{j(e)},visible:g,children:(0,h.jsx)(o.c,{title:f("change.columns"),children:(0,h.jsx)(r.c,{style:{...n},size:x,icon:(0,h.jsx)(u.c,{}),children:p?null:f("Columns")})})})}},66596:(e,t,a)=>{a.d(t,{c:()=>o});a(99584);var l=a(65236),n=a(74408);const i=a.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",s=a.p+"static/media/noresult.ac4af107751f94856a9c.riv",c=a.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var d=a(97884);const o=function(e){let{id:t="noresult",text:a=""}=e;const{t:o}=(0,l.G)(),r={src:{noproductsfound:i,noresult:s,nosell:c}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,n.useRive)(r);return(0,d.jsxs)("div",{className:"animation-canvas",children:[(0,d.jsx)("div",{style:{width:"100%",height:200},children:(0,d.jsx)(u,{})}),(0,d.jsx)("div",{className:"text",children:o(a)})]})}},40748:(e,t,a)=>{a.d(t,{c:()=>d});var l=a(99584),n=a(46712),i=a(78816),s=a(6724),c=a(97884);function d(e){let{handleChange:t,defaultValue:a,resetSearch:d,...o}=e;const[r,u]=(0,l.useState)(a),v=(0,l.useMemo)((()=>(0,i.debounce)((e=>{t(e)}),800)),[t]);return(0,l.useEffect)((()=>{u(a)}),[d,a]),(0,c.jsx)(n.default,{value:r,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,c.jsx)(s.c,{}),...o})}},71376:(e,t,a)=>{a.d(t,{g:()=>o});var l=a(99584),n=a(95976),i=a.n(n),s=a(2664),c=a(37728),d=a(97884);const o=e=>{let{fetchOptions:t,debounceTimeout:a=400,onClear:n,...o}=e;const[r,u]=(0,l.useState)(!1),[v,h]=(0,l.useState)([]),m=(0,l.useMemo)((()=>i()((e=>{h([]),u(!0),t(e).then((e=>{h(e),u(!1)}))}),a)),[t,a]);return(0,d.jsx)(s.default,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,onClear:()=>{m(""),n&&n()},notFoundContent:r?(0,d.jsx)(c.c,{size:"small"}):"no results",...o,options:v,onFocus:()=>{m("")}})}},19576:(e,t,a)=>{function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{c:()=>l})},24968:(e,t,a)=>{function l(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}a.d(t,{c:()=>l})},72304:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var l=a(99584),n=a(98044),i=a(66296),s=a(87228),c=a(35928),d=a(68496),o=a(15752),r=a(23424),u=a(98948),v=a(94936),h=a(48292),m=a(32712),x=a(18896),p=a(98016),f=a(61072),g=a(65236),j=a(47488),y=a(68256),b=a(19576),w=a(40748),_=a(24968),C=a(53992),k=a(46003),H=a(8216),V=a(7893),S=a(66596),z=a(71376),M=a(33012);const G={getAllRestTables:e=>M.c.get("rest/booking/tables",{params:e})};var I=a(97884);function O(){var e,t,a,M,O,N;const T=(0,m.OY)(),R=(0,r.i6)(),{t:F}=(0,g.G)(),[P,A]=(0,l.useState)(null),[D,E]=(0,l.useState)(null),{setIsModalVisible:q}=(0,l.useContext)(p.e),[B,K]=(0,l.useState)(!1),[W,Y]=(0,l.useState)(!1),{defaultCurrency:$}=(0,m.w1)((e=>e.currency),m.G),[J,L]=(0,l.useState)(null),[Q,U]=(0,l.useState)([{title:F("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:F("table"),dataIndex:"table",key:"table",is_show:!0,render:e=>(0,I.jsx)("div",{children:null===e||void 0===e?void 0:e.name})},{title:F("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,t)=>(0,I.jsx)("div",{children:"new"===e?(0,I.jsx)(n.c,{color:"blue",children:F(e)}):"canceled"===e?(0,I.jsx)(n.c,{color:"error",children:F(e)}):(0,I.jsx)(n.c,{color:"cyan",children:F(e)})})},{title:F("products"),dataIndex:"order_details_count",key:"order_details_count",is_show:!0,render:e=>(0,I.jsxs)("div",{className:"text-lowercase",children:[e||0," ",F("products")]})},{title:F("amount"),dataIndex:"total_price",key:"total_price",is_show:!0,render:e=>(0,_.c)(e,null===$||void 0===$?void 0:$.symbol)},{title:F("payment.type"),dataIndex:"transaction",key:"transaction",is_show:!0,render:e=>{var t;return F(null===e||void 0===e||null===(t=e.payment_system)||void 0===t?void 0:t.tag)||"-"}},{title:F("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:F("options"),key:"options",is_show:!0,render:(e,t)=>(0,I.jsxs)(i.c,{children:[(0,I.jsx)(s.c,{icon:(0,I.jsx)(u.c,{}),onClick:()=>(e=>{T((0,x.WC)({url:"waiter/order/details/".concat(e.id),id:"order_details",name:F("order.details")})),R("/waiter/order/details/".concat(e.id))})(t)}),(0,I.jsx)(c.c,{title:F("assign.to.me"),children:(0,I.jsx)(s.c,{onClick:()=>(e=>{K(!0),H.c.attachToMe(e).then((()=>{T((0,j.Gc)(ne))})).finally((()=>{K(!1)}))})(t.id),type:"primary",icon:(0,I.jsx)(v.c,{})})})]})}]),{activeMenu:X}=(0,m.w1)((e=>e.menu),m.G),{orders:Z,meta:ee,loading:te,params:ae}=(0,m.w1)((e=>e.waiterOrder),m.G),le=null===X||void 0===X?void 0:X.data,ne={search:null===le||void 0===le?void 0:le.search,sort:null===le||void 0===le?void 0:le.sort,column:null===le||void 0===le?void 0:le.column,perPage:null===le||void 0===le?void 0:le.perPage,page:null===le||void 0===le?void 0:le.page,user_id:null===le||void 0===le?void 0:le.user_id,table_id:null===le||void 0===le?void 0:le.table_id,shop_id:null!==(null===(e=X.data)||void 0===e?void 0:e.shop_id)?null===(t=X.data)||void 0===t?void 0:t.shop_id:null,delivery_type:"dine_in","empty-waiter":1,status:"new"};(0,y.c)((()=>{T((0,j.Gc)(ne))}),[null===X||void 0===X?void 0:X.data]),(0,l.useEffect)((()=>{null!==X&&void 0!==X&&X.refetch&&(T((0,j.Gc)(ne)),T((0,x.CO)(X)))}),[null===X||void 0===X?void 0:X.refetch]);const ie=(e,t)=>{T((0,x.MH)({activeMenu:X,data:{...le,[t]:e}}))},se={selectedRowKeys:P,onChange:e=>{A(e)}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(d.default,{children:(0,I.jsxs)(i.c,{wrap:!0,className:"p-0 mb-0",children:[(0,I.jsx)(w.c,{placeholder:F("search"),handleChange:e=>ie(e,"search"),defaultValue:null===(a=X.data)||void 0===a?void 0:a.search}),(0,I.jsx)(z.g,{placeholder:F("select.table"),fetchOptions:async function(e){const t={search:e,perPage:10};return G.getAllRestTables(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.name,value:e.id})))}))},onSelect:e=>ie(e.value,"table_id"),onDeselect:()=>ie(null,"table_id"),style:{minWidth:200}}),(0,I.jsx)(s.c,{icon:(0,I.jsx)(h.c,{}),onClick:()=>{(0,m.wN)((()=>{T((0,j.Ah)()),T((0,x.MH)({activeMenu:X,data:null}))})),T((0,j.Gc)({status:"all",page:null===le||void 0===le?void 0:le.page,perPage:10}))},children:F("clear")}),(0,I.jsx)(C.c,{columns:Q,setColumns:U})]})}),(0,I.jsxs)(d.default,{children:[(0,I.jsx)(o.c,{locale:{emptyText:(0,I.jsx)(S.c,{})},scroll:{x:!0},rowSelection:se,columns:null===Q||void 0===Q?void 0:Q.filter((e=>e.is_show)),dataSource:Z,loading:te||B,pagination:{pageSize:ae.perPage,page:(null===(M=X.data)||void 0===M?void 0:M.page)||1,total:null===ee||void 0===ee?void 0:ee.total,defaultCurrent:null===(O=X.data)||void 0===O?void 0:O.page,current:null===(N=X.data)||void 0===N?void 0:N.page},rowKey:e=>e.id,onChange:function(e,t,a){const{pageSize:l,current:n}=e,{field:i,order:s}=a,c=(0,b.c)(s);T((0,x.MH)({activeMenu:X,data:{...le,perPage:l,page:n,column:i,sort:c}}))}}),(0,I.jsx)(k.c,{click:()=>{Y(!0);const e={...Object.assign({},...P.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};H.c.delete(e).then((()=>{f.m4.success(F("successfully.deleted")),q(!1),T((0,j.Gc)(ne)),E(null)})).finally((()=>Y(!1)))},text:F(D?"delete":"all.delete"),loading:W,setText:A})]}),J&&(0,I.jsx)(V.c,{orderDetails:J,handleCancel:()=>{L(null)}})]})}},7893:(e,t,a)=>{a.d(t,{c:()=>x});var l=a(99584),n=a(65732),i=a(95884),s=a(87228),c=a(68768),d=a(10260),o=a(2664),r=a(32712),u=a(8216),v=a(18896),h=a(65236),m=a(97884);function x(e){var t;let{orderDetails:a,handleCancel:x}=e;const{t:p}=(0,h.G)(),{activeMenu:f}=(0,r.w1)((e=>e.menu),r.G),{deliverymans:g}=(0,r.w1)((e=>e.deliveryman),r.G),[j]=n.c.useForm(),y=(0,r.OY)(),[b,w]=(0,l.useState)(!1);return(0,m.jsx)(i.default,{visible:!!a,title:a.title,onCancel:x,footer:[(0,m.jsx)(s.c,{type:"primary",onClick:()=>j.submit(),loading:b,children:p("save")}),(0,m.jsx)(s.c,{type:"default",onClick:x,children:p("cancel")})],children:(0,m.jsx)(n.c,{form:j,layout:"vertical",onFinish:e=>{const t={...e};w(!0),u.c.updateDelivery(a.id,t).then((()=>{x(),y((0,v.A1)(f))})).finally((()=>w(!1)))},initialValues:{deliveryman:null===(t=a.deliveryman)||void 0===t?void 0:t.id},children:(0,m.jsx)(c.c,{gutter:12,children:(0,m.jsx)(d.c,{span:24,children:(0,m.jsx)(n.c.Item,{label:p("deliveryman"),name:"deliveryman",rules:[{required:!0,message:p("required")}],children:(0,m.jsx)(o.default,{children:g.map(((e,t)=>(0,m.jsxs)(o.default.Option,{value:e.id,className:"d-block",children:[e.firstname," ",e.lastname||""]},e.id)))})})})})})})}},48292:(e,t,a)=>{a.d(t,{c:()=>d});var l=a(30800),n=a(99584);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"};var s=a(47164),c=function(e,t){return n.createElement(s.c,(0,l.c)((0,l.c)({},e),{},{ref:t,icon:i}))};c.displayName="ClearOutlined";const d=n.forwardRef(c)},55512:(e,t,a)=>{a.d(t,{c:()=>d});var l=a(30800),n=a(99584);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var s=a(47164),c=function(e,t){return n.createElement(s.c,(0,l.c)((0,l.c)({},e),{},{ref:t,icon:i}))};c.displayName="TableOutlined";const d=n.forwardRef(c)}}]);