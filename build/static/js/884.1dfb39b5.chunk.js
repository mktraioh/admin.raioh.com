"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[884],{1428:(e,t,n)=>{n.d(t,{c:()=>o});n(99584);var a=n(87228),c=n(59424),s=n(61072),l=n(65236),i=n(75088),d=n(97884);function o(e){let{size:t="",onClick:n,type:o="default",...r}=e;const{t:u}=(0,l.G)(),{isDemo:m}=(0,i.c)();return(0,d.jsx)(a.c,{size:t,icon:(0,d.jsx)(c.c,{}),onClick:e=>{m?s.m4.warning(u("cannot.work.demo")):n(e)},type:o,...r})}},53992:(e,t,n)=>{n.d(t,{c:()=>y});var a=n(99584),c=n(49308),s=n(92200),l=n(66296),i=n(26012),d=n(72192),o=n(35928),r=n(87228),u=n(55512),m=n(65236),h=n(97884);const{Text:p}=c.default,y=e=>{let{columns:t=[],setColumns:n,style:c,size:y="",iconOnly:x}=e;const{t:v}=(0,m.G)(),[f,g]=(0,a.useState)(!1),j=(0,h.jsx)(s.c,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,h.jsx)(s.c.Item,{children:(0,h.jsxs)(l.c,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(i.c,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(a)}(e),disabled:1===a})]})},e+a)))});return(0,h.jsx)(d.c,{overlay:j,trigger:["click"],onVisibleChange:e=>{g(e)},visible:f,children:(0,h.jsx)(o.c,{title:v("change.columns"),children:(0,h.jsx)(r.c,{style:{...c},size:y,icon:(0,h.jsx)(u.c,{}),children:x?null:v("Columns")})})})}},10884:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(99584),c=n(66296),s=n(87228),l=n(68496),i=n(15752),d=n(65236),o=n(36668),r=n(59424),u=n(3952),m=n(18896),h=n(32712),p=n(46003),y=n(61072),x=n(98016),v=n(23424),f=n(1428),g=n(53992),j=n(78648),C=n(72269),w=n(97884);function k(){const{t:e}=(0,d.G)(),{setIsModalVisible:t}=(0,a.useContext)(x.e),[n,k]=(0,a.useState)(null),[z,b]=(0,a.useState)(!1),V=(0,h.OY)(),{activeMenu:_}=(0,h.w1)((e=>e.menu),h.G),H=(0,v.i6)(),[O,S]=(0,a.useState)(null),{payloads:I,loading:M}=(0,h.w1)((e=>e.paymentPayload),h.G),[G,N]=(0,a.useState)([{title:e("payment.id"),is_show:!0,dataIndex:"payment_id",key:"payment_id"},{title:e("title"),is_show:!0,dataIndex:"title",key:"title",render:(e,t)=>{var n;return(0,w.jsx)(w.Fragment,{children:null===(n=t.payment)||void 0===n?void 0:n.tag})}},{title:e("options"),is_show:!0,key:"options",dataIndex:"options",render:(e,n)=>(0,w.jsxs)(c.c,{children:[(0,w.jsx)(s.c,{type:"primary",icon:(0,w.jsx)(o.c,{}),onClick:()=>E(n)}),(0,w.jsx)(f.c,{icon:(0,w.jsx)(r.c,{}),onClick:()=>{k([n.payment_id]),t(!0),S(!0)}})]})}]),E=t=>{V((0,m.WC)({url:"payment-payloads/edit/".concat(t.payment_id),id:"edit.payment.payloads",name:e("edit.payment.payloads")})),H("/payment-payloads/edit/".concat(t.payment_id))};(0,a.useEffect)((()=>{_.refetch&&(V((0,j.O)()),V((0,m.CO)(_)))}),[_.refetch]);const P={id:n,onChange:e=>{k(e)}};return(0,w.jsxs)(l.default,{title:e("payment"),extra:(0,w.jsxs)(c.c,{children:[(0,w.jsx)(s.c,{icon:(0,w.jsx)(u.c,{}),type:"primary",onClick:()=>{V((0,m.WC)({id:"add.payment.payloads",url:"payment-payloads/add",name:e("add.payment.payloads")})),H("/payment-payloads/add")},children:e("add.payment.payloads")}),(0,w.jsx)(f.c,{className:"",onClick:()=>{null===n||0===n.length?y.m4.warning(e("select.the.product")):(t(!0),S(!1))},children:e("delete.selected")}),(0,w.jsx)(g.c,{columns:G,setColumns:N})]}),children:[(0,w.jsx)(i.c,{scroll:{x:!0},rowSelection:P,columns:null===G||void 0===G?void 0:G.filter((e=>e.is_show)),dataSource:I,rowKey:e=>e.payment_id,onChange:e=>{const{pageSize:t,current:n}=e;V((0,j.O)({perPage:t,page:n}))},loading:M}),(0,w.jsx)(p.c,{click:()=>{b(!0);const a={...Object.assign({},...n.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};C.a.delete(a).then((()=>{y.m4.success(e("successfully.deleted")),V((0,j.O)()),t(!1),S(null)})).finally((()=>{k(null),b(!1)}))},text:e(O?"delete":"all.delete"),loading:z,setText:k})]})}},3952:(e,t,n)=>{n.d(t,{c:()=>d});var a=n(30800),c=n(99584);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var l=n(47164),i=function(e,t){return c.createElement(l.c,(0,a.c)((0,a.c)({},e),{},{ref:t,icon:s}))};i.displayName="PlusCircleOutlined";const d=c.forwardRef(i)},55512:(e,t,n)=>{n.d(t,{c:()=>d});var a=n(30800),c=n(99584);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=n(47164),i=function(e,t){return c.createElement(l.c,(0,a.c)((0,a.c)({},e),{},{ref:t,icon:s}))};i.displayName="TableOutlined";const d=c.forwardRef(i)}}]);