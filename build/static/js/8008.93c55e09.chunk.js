"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8008],{1428:(e,t,n)=>{n.d(t,{c:()=>o});n(99584);var c=n(87228),s=n(59424),l=n(61072),a=n(65236),i=n(75088),d=n(97884);function o(e){let{size:t="",onClick:n,type:o="default",...r}=e;const{t:u}=(0,a.G)(),{isDemo:h}=(0,i.c)();return(0,d.jsx)(c.c,{size:t,icon:(0,d.jsx)(s.c,{}),onClick:e=>{h?l.m4.warning(u("cannot.work.demo")):n(e)},type:o,...r})}},53992:(e,t,n)=>{n.d(t,{c:()=>p});var c=n(99584),s=n(49308),l=n(92200),a=n(66296),i=n(26012),d=n(72192),o=n(35928),r=n(87228),u=n(55512),h=n(65236),m=n(97884);const{Text:v}=s.default,p=e=>{let{columns:t=[],setColumns:n,style:s,size:p="",iconOnly:x}=e;const{t:y}=(0,h.G)(),[f,g]=(0,c.useState)(!1),j=(0,m.jsx)(l.c,{children:null===t||void 0===t?void 0:t.map(((e,c)=>(0,m.jsx)(l.c.Item,{children:(0,m.jsxs)(a.c,{className:"d-flex justify-content-between",children:[(0,m.jsx)(v,{children:e.title}),(0,m.jsx)(i.c,{defaultChecked:!0,onClick:()=>function(e){const c=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(c)}(e),disabled:1===c})]})},e+c)))});return(0,m.jsx)(d.c,{overlay:j,trigger:["click"],onVisibleChange:e=>{g(e)},visible:f,children:(0,m.jsx)(o.c,{title:y("change.columns"),children:(0,m.jsx)(r.c,{style:{...s},size:p,icon:(0,m.jsx)(u.c,{}),children:x?null:y("Columns")})})})}},8008:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var c=n(99584),s=n(66296),l=n(87228),a=n(68496),i=n(15752),d=n(65236),o=n(36668),r=n(59424),u=n(3952),h=n(18896),m=n(32712),v=n(46003),p=n(61072),x=n(98016),y=n(99924),f=n(16952),g=n(23424),j=n(1428),C=n(53992),w=n(97884);function k(){const{t:e}=(0,d.G)(),{setIsModalVisible:t}=(0,c.useContext)(x.e),[n,k]=(0,c.useState)(null),[z,b]=(0,c.useState)(!1),V=(0,m.OY)(),{activeMenu:H}=(0,m.w1)((e=>e.menu),m.G),S=(0,g.i6)(),[_,I]=(0,c.useState)(null),{payments:M,loading:O}=(0,m.w1)((e=>e.payment),m.G),[G,N]=(0,c.useState)([{title:e("id"),is_show:!0,dataIndex:"id",key:"id"},{title:e("title"),is_show:!0,dataIndex:"title",key:"title",render:(e,t)=>{var n;return(0,w.jsx)(w.Fragment,{children:null===(n=t.payment)||void 0===n?void 0:n.tag})}},{title:e("options"),is_show:!0,key:"options",dataIndex:"options",render:(e,n)=>(0,w.jsxs)(s.c,{children:[(0,w.jsx)(l.c,{type:"primary",icon:(0,w.jsx)(o.c,{}),onClick:()=>E(n)}),(0,w.jsx)(j.c,{icon:(0,w.jsx)(r.c,{}),onClick:()=>{k([n.id]),t(!0),I(!0)}})]})}]),E=t=>{V((0,h.WC)({url:"seller/payments/".concat(t.id),id:"payments_edit",name:e("edit.payments")})),S("/seller/payments/".concat(t.id))};(0,c.useEffect)((()=>{H.refetch&&(V((0,y.v9)()),V((0,h.CO)(H)))}),[H.refetch]);const T={id:n,onChange:e=>{k(e)}};return(0,w.jsxs)(a.default,{title:e("payment"),extra:(0,w.jsxs)(s.c,{children:[(0,w.jsx)(l.c,{icon:(0,w.jsx)(u.c,{}),type:"primary",onClick:()=>{V((0,h.WC)({id:"add.payment",url:"seller/payments/add",name:e("add.payment")})),S("/seller/payments/add")},children:e("add.payment")}),(0,w.jsx)(j.c,{className:"",type:"danger",onClick:()=>{null===n||0===n.length?p.m4.warning(e("select.the.product")):(t(!0),I(!1))},children:e("delete.all")}),(0,w.jsx)(C.c,{columns:G,setColumns:N})]}),children:[(0,w.jsx)(i.c,{scroll:{x:!0},rowSelection:T,columns:null===G||void 0===G?void 0:G.filter((e=>e.is_show)),dataSource:M,rowKey:e=>e.id,onChange:e=>{const{pageSize:t,current:n}=e;V((0,y.v9)({perPage:t,page:n}))},loading:O}),(0,w.jsx)(v.c,{click:()=>{b(!0);const c={...Object.assign({},...n.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};f.c.delete(c).then((()=>{p.m4.success(e("successfully.deleted")),V((0,y.v9)()),t(!1),I(null)})).finally((()=>b(!1)))},text:e(_?"delete":"all.delete"),loading:z,setText:k})]})}},3952:(e,t,n)=>{n.d(t,{c:()=>d});var c=n(30800),s=n(99584);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var a=n(47164),i=function(e,t){return s.createElement(a.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:l}))};i.displayName="PlusCircleOutlined";const d=s.forwardRef(i)},55512:(e,t,n)=>{n.d(t,{c:()=>d});var c=n(30800),s=n(99584);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=n(47164),i=function(e,t){return s.createElement(a.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:l}))};i.displayName="TableOutlined";const d=s.forwardRef(i)}}]);