"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1444],{1428:(e,t,c)=>{c.d(t,{c:()=>o});c(99584);var s=c(87228),n=c(59424),i=c(61072),a=c(65236),d=c(75088),l=c(97884);function o(e){let{size:t="",onClick:c,type:o="default",...r}=e;const{t:u}=(0,a.G)(),{isDemo:h}=(0,d.c)();return(0,l.jsx)(s.c,{size:t,icon:(0,l.jsx)(n.c,{}),onClick:e=>{h?i.m4.warning(u("cannot.work.demo")):c(e)},type:o,...r})}},53992:(e,t,c)=>{c.d(t,{c:()=>p});var s=c(99584),n=c(49308),i=c(92200),a=c(66296),d=c(26012),l=c(72192),o=c(35928),r=c(87228),u=c(55512),h=c(65236),v=c(97884);const{Text:m}=n.default,p=e=>{let{columns:t=[],setColumns:c,style:n,size:p="",iconOnly:x}=e;const{t:g}=(0,h.G)(),[f,y]=(0,s.useState)(!1),w=(0,v.jsx)(i.c,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(i.c.Item,{children:(0,v.jsxs)(a.c,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(d.c,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));c(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(l.c,{overlay:w,trigger:["click"],onVisibleChange:e=>{y(e)},visible:f,children:(0,v.jsx)(o.c,{title:g("change.columns"),children:(0,v.jsx)(r.c,{style:{...n},size:p,icon:(0,v.jsx)(u.c,{}),children:x?null:g("Columns")})})})}},19576:(e,t,c)=>{function s(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}c.d(t,{c:()=>s})},31444:(e,t,c)=>{c.r(t),c.d(t,{default:()=>H});var s=c(99584),n=c(36668),i=c(59424),a=c(3952),d=c(87968),l=c(26012),o=c(66296),r=c(87228),u=c(68496),h=c(15752),v=c(61072),m=c(46003),p=c(98016),x=c(32712),g=c(23424),f=c(18896),y=c(85912),w=c(26744),j=c(68256),k=c(19576),C=c(65236),z=c(71836),_=c(1428),b=c(53992),V=c(97884);function H(){const{t:e}=(0,C.G)(),t=(0,x.OY)(),c=(0,g.i6)(),{setIsModalVisible:H}=(0,s.useContext)(p.e),[I,S]=(0,s.useState)(null),[M,O]=(0,s.useState)(null),[G,P]=(0,s.useState)(!1),[N,E]=(0,s.useState)(null),{activeMenu:R}=(0,x.w1)((e=>e.menu),x.G),{discounts:T,meta:A,loading:B,params:K}=(0,x.w1)((e=>e.discount),x.G),[W,D]=(0,s.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,V.jsx)(d.c,{src:(0,z.c)(e),alt:t.type,width:100,className:"rounded",preview:!0,placeholder:!0})},{title:e("type"),dataIndex:"type",key:"type",is_show:!0},{title:e("price"),dataIndex:"price",key:"price",is_show:!0},{title:e("start.date"),dataIndex:"start",key:"start",is_show:!0},{title:e("end.date"),dataIndex:"end",key:"end",is_show:!0},{title:e("active"),dataIndex:"active",key:"active",is_show:!0,render:(e,t)=>(0,V.jsx)(l.c,{onChange:()=>{H(!0),S([t.id]),O(!0)},disabled:t.deleted_at,checked:t.active})},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(s,a)=>(0,V.jsxs)(o.c,{children:[(0,V.jsx)(r.c,{type:"primary",icon:(0,V.jsx)(n.c,{}),onClick:()=>(s=>{t((0,f.WC)({url:"discount/".concat(s.id),id:"discount_edit",name:e("edit.discount")})),c("/discount/".concat(s.id))})(a)}),(0,V.jsx)(_.c,{icon:(0,V.jsx)(i.c,{}),onClick:()=>{S([a.id]),O(!1),H(!0),E(!0)}})]})}]);(0,s.useEffect)((()=>{R.refetch&&(t((0,w._)()),t((0,f.CO)(R)))}),[R.refetch]),(0,j.c)((()=>{const e=R.data,c={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,w._)(c))}),[R.data]);const Y={selectedRowKeys:I,onChange:e=>{S(e)}};return(0,V.jsxs)(u.default,{title:e("discounts"),extra:(0,V.jsxs)(o.c,{wrap:!0,children:[(0,V.jsx)(r.c,{icon:(0,V.jsx)(a.c,{}),type:"primary",onClick:()=>{t((0,f.WC)({id:"add-restaurant",url:"discount/add",name:e("add.discount")})),c("/discount/add")},children:e("add.discount")}),(0,V.jsx)(_.c,{size:"",onClick:()=>{null===I||0===I.length?v.m4.warning(e("select.the.product")):(H(!0),E(!1))},children:e("delete.selected")}),(0,V.jsx)(b.c,{columns:W,setColumns:D})]}),children:[(0,V.jsx)(h.c,{scroll:{x:!0},rowSelection:Y,columns:null===W||void 0===W?void 0:W.filter((e=>e.is_show)),dataSource:T,pagination:{pageSize:K.perPage,page:K.page,total:A.total,defaultCurrent:K.page},rowKey:e=>e.id,onChange:function(e,c,s){const{pageSize:n,current:i}=e,{field:a,order:d}=s,l=(0,k.c)(d);t((0,f.MH)({activeMenu:R,data:{perPage:n,page:i,column:a,sort:l}}))},loading:B}),(0,V.jsx)(m.c,{click:M?()=>{P(!0),y.c.setActive(I[0]).then((()=>{v.m4.success(e("successfully.updated")),t((0,w._)()),H(!1),O(!0)})).finally((()=>P(!1)))}:()=>{P(!0);const c={...Object.assign({},...I.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};y.c.delete(c).then((()=>{v.m4.success(e("successfully.deleted")),t((0,w._)()),H(!1)})).finally((()=>{S(null),P(!1)}))},text:e(M?"set.active.discount":N?"delete":"all.delete"),setText:S,loading:G,setActive:O})]})}},3952:(e,t,c)=>{c.d(t,{c:()=>l});var s=c(30800),n=c(99584);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var a=c(47164),d=function(e,t){return n.createElement(a.c,(0,s.c)((0,s.c)({},e),{},{ref:t,icon:i}))};d.displayName="PlusCircleOutlined";const l=n.forwardRef(d)},55512:(e,t,c)=>{c.d(t,{c:()=>l});var s=c(30800),n=c(99584);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=c(47164),d=function(e,t){return n.createElement(a.c,(0,s.c)((0,s.c)({},e),{},{ref:t,icon:i}))};d.displayName="TableOutlined";const l=n.forwardRef(d)}}]);