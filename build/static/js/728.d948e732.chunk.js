"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[728],{1428:(e,t,i)=>{i.d(t,{c:()=>a});i(99584);var c=i(87228),n=i(59424),s=i(61072),l=i(65236),o=i(75088),d=i(97884);function a(e){let{size:t="",onClick:i,type:a="default",...r}=e;const{t:u}=(0,l.G)(),{isDemo:v}=(0,o.c)();return(0,d.jsx)(c.c,{size:t,icon:(0,d.jsx)(n.c,{}),onClick:e=>{v?s.m4.warning(u("cannot.work.demo")):i(e)},type:a,...r})}},53992:(e,t,i)=>{i.d(t,{c:()=>x});var c=i(99584),n=i(49308),s=i(92200),l=i(66296),o=i(26012),d=i(72192),a=i(35928),r=i(87228),u=i(55512),v=i(65236),m=i(97884);const{Text:h}=n.default,x=e=>{let{columns:t=[],setColumns:i,style:n,size:x="",iconOnly:f}=e;const{t:p}=(0,v.G)(),[j,g]=(0,c.useState)(!1),b=(0,m.jsx)(s.c,{children:null===t||void 0===t?void 0:t.map(((e,c)=>(0,m.jsx)(s.c.Item,{children:(0,m.jsxs)(l.c,{className:"d-flex justify-content-between",children:[(0,m.jsx)(h,{children:e.title}),(0,m.jsx)(o.c,{defaultChecked:!0,onClick:()=>function(e){const c=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));i(c)}(e),disabled:1===c})]})},e+c)))});return(0,m.jsx)(d.c,{overlay:b,trigger:["click"],onVisibleChange:e=>{g(e)},visible:j,children:(0,m.jsx)(a.c,{title:p("change.columns"),children:(0,m.jsx)(r.c,{style:{...n},size:x,icon:(0,m.jsx)(u.c,{}),children:f?null:p("Columns")})})})}},66596:(e,t,i)=>{i.d(t,{c:()=>a});i(99584);var c=i(65236),n=i(74408);const s=i.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",l=i.p+"static/media/noresult.ac4af107751f94856a9c.riv",o=i.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var d=i(97884);const a=function(e){let{id:t="noresult",text:i=""}=e;const{t:a}=(0,c.G)(),r={src:{noproductsfound:s,noresult:l,nosell:o}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,n.useRive)(r);return(0,d.jsxs)("div",{className:"animation-canvas",children:[(0,d.jsx)("div",{style:{width:"100%",height:200},children:(0,d.jsx)(u,{})}),(0,d.jsx)("div",{className:"text",children:a(i)})]})}},85584:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var c=i(99584),n=i(36668),s=i(59424),l=i(3952),o=i(66296),d=i(87228),a=i(68496),r=i(15752),u=i(61072),v=i(98016),m=i(32712),h=i(18896),x=i(41988),f=i(65236),p=i(46003),j=i(1428),g=i(53992),b=i(25508),k=i(23424),y=i(66596),w=i(83072),C=i.n(w),z=i(97884);const _=()=>{const{t:e}=(0,f.G)(),t=(0,m.OY)(),{setIsModalVisible:i}=(0,c.useContext)(v.e),[w,_]=(0,c.useState)(null),[H,V]=(0,c.useState)(!1),{activeMenu:M}=(0,m.w1)((e=>e.menu),m.G),N=null===M||void 0===M?void 0:M.data,I=(0,k.i6)(),G={sort:null===N||void 0===N?void 0:N.sort,column:null===N||void 0===N?void 0:N.column,search:null!==N&&void 0!==N&&N.search?N.search:void 0,perPage:null===N||void 0===N?void 0:N.perPage,page:null===N||void 0===N?void 0:N.page,deleted_at:"deleted_at"===(null===N||void 0===N?void 0:N.role)?null===N||void 0===N?void 0:N.role:null},{data:O}=(0,m.w1)((e=>e.bookingTime),m.G),[S,T]=(0,c.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:(e,t)=>C()(null===t||void 0===t?void 0:t.created_at).format("YYYY-MM-DD HH:mm")},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(c,l)=>(0,z.jsxs)(o.c,{children:[(0,z.jsx)(d.c,{type:"primary",icon:(0,z.jsx)(n.c,{}),onClick:()=>(i=>{t((0,h.WC)({url:"seller/booking/time/".concat(i.id),id:"booking_time_edit",name:e("edit.booking.time")})),I("/seller/booking/time/".concat(i.id))})(l)}),(0,z.jsx)(j.c,{icon:(0,z.jsx)(s.c,{}),onClick:()=>{_([l.id]),i(!0)}})]})}]);return(0,c.useEffect)((()=>{M.refetch&&(t((0,x.A)(G)),t((0,h.CO)(M)))}),[M.refetch]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(a.default,{className:"p-0",children:(0,z.jsxs)(o.c,{wrap:!0,className:"justify-content-end w-100",children:[(0,z.jsx)(d.c,{hidden:(null===O||void 0===O?void 0:O.length)>0,type:"primary",icon:(0,z.jsx)(l.c,{}),onClick:()=>(t((0,h.WC)({url:"seller/booking/time/add",id:"booking_time_add",name:e("add.booking.time")})),void I("/seller/booking/time/add")),children:e("add.reservation.time")}),(0,z.jsx)(g.c,{columns:S,setColumns:T})]})}),(0,z.jsx)(a.default,{title:e("reservation.time"),children:(0,z.jsx)(r.c,{scroll:{x:!0},columns:null===S||void 0===S?void 0:S.filter((e=>e.is_show)),dataSource:O,rowKey:e=>null===e||void 0===e?void 0:e.id,locale:{emptyText:(0,z.jsx)(y.c,{id:"nosell"})}})}),(0,z.jsx)(p.c,{click:()=>{V(!0);const c={...Object.assign({},...w.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};b.c.delete(c).then((()=>{u.m4.success(e("successfully.deleted")),t((0,x.A)(G)),i(!1)})).finally((()=>V(!1)))},text:e("delete"),setText:_,loading:H,setActive:_})]})}},3952:(e,t,i)=>{i.d(t,{c:()=>d});var c=i(30800),n=i(99584);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var l=i(47164),o=function(e,t){return n.createElement(l.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:s}))};o.displayName="PlusCircleOutlined";const d=n.forwardRef(o)},55512:(e,t,i)=>{i.d(t,{c:()=>d});var c=i(30800),n=i(99584);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=i(47164),o=function(e,t){return n.createElement(l.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:s}))};o.displayName="TableOutlined";const d=n.forwardRef(o)}}]);