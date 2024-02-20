"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6960],{53992:(e,t,n)=>{n.d(t,{c:()=>x});var i=n(99584),o=n(49308),a=n(92200),l=n(66296),d=n(26012),s=n(72192),c=n(35928),r=n(87228),u=n(55512),v=n(65236),h=n(97884);const{Text:p}=o.default,x=e=>{let{columns:t=[],setColumns:n,style:o,size:x="",iconOnly:m}=e;const{t:g}=(0,v.G)(),[f,b]=(0,i.useState)(!1),j=(0,h.jsx)(a.c,{children:null===t||void 0===t?void 0:t.map(((e,i)=>(0,h.jsx)(a.c.Item,{children:(0,h.jsxs)(l.c,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(d.c,{defaultChecked:!0,onClick:()=>function(e){const i=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(i)}(e),disabled:1===i})]})},e+i)))});return(0,h.jsx)(s.c,{overlay:j,trigger:["click"],onVisibleChange:e=>{b(e)},visible:f,children:(0,h.jsx)(c.c,{title:g("change.columns"),children:(0,h.jsx)(r.c,{style:{...o},size:x,icon:(0,h.jsx)(u.c,{}),children:m?null:g("Columns")})})})}},19576:(e,t,n)=>{function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{c:()=>i})},16960:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=n(99584),o=n(98044),a=n(68496),l=n(66296),d=n(15752),s=n(32712),c=n(18896),r=n(65236),u=n(53992),v=n(28188),h=n(19576),p=n(83072),x=n.n(p),m=n(68256),g=n(97884);const f=()=>{var e,t,n;const{t:p}=(0,r.G)(),f=(0,s.OY)(),{activeMenu:b}=(0,s.w1)((e=>e.menu),s.G),{bonus:j,meta:w,loading:k,params:z}=(0,s.w1)((e=>e.bonusList),s.G),y=null===b||void 0===b?void 0:b.data,C={sort:null===y||void 0===y?void 0:y.sort,column:null===y||void 0===y?void 0:y.column,perPage:null===y||void 0===y?void 0:y.perPage,page:null===y||void 0===y?void 0:y.page},[H,V]=(0,i.useState)([{title:p("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:p("bonus.stock"),dataIndex:"bonusStock",key:"bonusStock",is_show:!0,render:(e,t)=>{var n,i;return null===e||void 0===e||null===(n=e.product)||void 0===n||null===(i=n.translation)||void 0===i?void 0:i.title}},{title:p("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:(e,t)=>{var n,i;return null===(n=t.shop)||void 0===n||null===(i=n.translation)||void 0===i?void 0:i.title}},{title:p("expired.at"),dataIndex:"expired_at",key:"expired_at",is_show:!0,render:e=>(0,g.jsx)("div",{children:x()(new Date).isBefore(e)?(0,g.jsx)(o.c,{color:"blue",children:e}):(0,g.jsx)(o.c,{color:"error",children:e})})}]);return(0,i.useEffect)((()=>{b.refetch&&(f((0,v.e)(C)),f((0,c.CO)(b)))}),[b.refetch]),(0,m.c)((()=>{f((0,v.e)(C))}),[b.data]),(0,g.jsx)(a.default,{title:p("storeis"),extra:(0,g.jsx)(l.c,{children:(0,g.jsx)(u.c,{columns:H,setColumns:V})}),children:(0,g.jsx)(d.c,{scroll:{x:!0},columns:null===H||void 0===H?void 0:H.filter((e=>e.is_show)),dataSource:j,pagination:{pageSize:z.perPage,page:(null===(e=b.data)||void 0===e?void 0:e.page)||1,total:w.total,defaultCurrent:null===(t=b.data)||void 0===t?void 0:t.page,current:null===(n=b.data)||void 0===n?void 0:n.page},rowKey:e=>e.id,loading:k,onChange:function(e,t,n){const{pageSize:i,current:o}=e,{field:a,order:l}=n,d=(0,h.c)(l);f((0,c.MH)({activeMenu:b,data:{...b.data,perPage:i,page:o,column:a,sort:d}}))}})})}},55512:(e,t,n)=>{n.d(t,{c:()=>s});var i=n(30800),o=n(99584);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=n(47164),d=function(e,t){return o.createElement(l.c,(0,i.c)((0,i.c)({},e),{},{ref:t,icon:a}))};d.displayName="TableOutlined";const s=o.forwardRef(d)}}]);