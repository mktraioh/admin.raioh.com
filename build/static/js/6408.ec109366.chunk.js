"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6408],{53992:(e,t,s)=>{s.d(t,{c:()=>p});var l=s(99584),i=s(49308),a=s(92200),n=s(66296),o=s(26012),c=s(72192),r=s(35928),d=s(87228),h=s(55512),u=s(65236),v=s(97884);const{Text:m}=i.default,p=e=>{let{columns:t=[],setColumns:s,style:i,size:p="",iconOnly:g}=e;const{t:x}=(0,u.G)(),[f,w]=(0,l.useState)(!1),j=(0,v.jsx)(a.c,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,v.jsx)(a.c.Item,{children:(0,v.jsxs)(n.c,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(o.c,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));s(l)}(e),disabled:1===l})]})},e+l)))});return(0,v.jsx)(c.c,{overlay:j,trigger:["click"],onVisibleChange:e=>{w(e)},visible:f,children:(0,v.jsx)(r.c,{title:x("change.columns"),children:(0,v.jsx)(d.c,{style:{...i},size:p,icon:(0,v.jsx)(h.c,{}),children:g?null:x("Columns")})})})}},6408:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var l=s(99584),i=s(87968),a=s(68496),n=s(66296),o=s(15752),c=s(32712),r=s(18896),d=s(65236),h=s(36008),u=s(53992),v=s(52640),m=s(97884);const p=()=>{const{t:e}=(0,d.G)(),t=(0,c.OY)(),{activeMenu:s}=(0,c.w1)((e=>e.menu),c.G),{storeis:p,meta:g,loading:x}=(0,c.w1)((e=>e.storeis),c.G),[f,w]=(0,l.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("image"),dataIndex:"file_urls",key:"file_urls",is_show:!0,render:e=>(0,m.jsx)(i.c,{src:e?e[0].search("stories/")?v.cd+e[0]:"https://api.foodyman.org/storage/"+e[0]:"https://via.placeholder.com/150",alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})},{title:e("product"),dataIndex:"stock",key:"stock",is_show:!0,render:(e,t)=>{var s,l;return null===t||void 0===t||null===(s=t.product)||void 0===s||null===(l=s.translation)||void 0===l?void 0:l.title}},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:(e,t)=>{var s,l;return null===(s=t.shop)||void 0===s||null===(l=s.translation)||void 0===l?void 0:l.title}}]);(0,l.useEffect)((()=>{s.refetch&&(t((0,h.Gg)()),t((0,r.CO)(s)))}),[s.refetch]);return(0,m.jsx)(a.default,{title:e("storeis"),extra:(0,m.jsx)(n.c,{children:(0,m.jsx)(u.c,{columns:f,setColumns:w})}),children:(0,m.jsx)(o.c,{scroll:{x:!0},columns:null===f||void 0===f?void 0:f.filter((e=>e.is_show)),dataSource:p,pagination:{pageSize:g.per_page,page:g.current_page,total:g.total},rowKey:e=>e.id,loading:x,onChange:e=>{const{pageSize:s,current:l}=e;t((0,h.M7)({perPage:s,page:l}))}})})}},55512:(e,t,s)=>{s.d(t,{c:()=>c});var l=s(30800),i=s(99584);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var n=s(47164),o=function(e,t){return i.createElement(n.c,(0,l.c)((0,l.c)({},e),{},{ref:t,icon:a}))};o.displayName="TableOutlined";const c=i.forwardRef(o)}}]);