"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6196],{1428:(e,t,l)=>{l.d(t,{c:()=>o});l(99584);var c=l(87228),n=l(59424),s=l(61072),i=l(65236),d=l(75088),a=l(97884);function o(e){let{size:t="",onClick:l,type:o="default",...r}=e;const{t:u}=(0,i.G)(),{isDemo:h}=(0,d.c)();return(0,a.jsx)(c.c,{size:t,icon:(0,a.jsx)(n.c,{}),onClick:e=>{h?s.m4.warning(u("cannot.work.demo")):l(e)},type:o,...r})}},53992:(e,t,l)=>{l.d(t,{c:()=>x});var c=l(99584),n=l(49308),s=l(92200),i=l(66296),d=l(26012),a=l(72192),o=l(35928),r=l(87228),u=l(55512),h=l(65236),v=l(97884);const{Text:m}=n.default,x=e=>{let{columns:t=[],setColumns:l,style:n,size:x="",iconOnly:y}=e;const{t:f}=(0,h.G)(),[p,g]=(0,c.useState)(!1),j=(0,v.jsx)(s.c,{children:null===t||void 0===t?void 0:t.map(((e,c)=>(0,v.jsx)(s.c.Item,{children:(0,v.jsxs)(i.c,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(d.c,{defaultChecked:!0,onClick:()=>function(e){const c=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(c)}(e),disabled:1===c})]})},e+c)))});return(0,v.jsx)(a.c,{overlay:j,trigger:["click"],onVisibleChange:e=>{g(e)},visible:p,children:(0,v.jsx)(o.c,{title:f("change.columns"),children:(0,v.jsx)(r.c,{style:{...n},size:x,icon:(0,v.jsx)(u.c,{}),children:y?null:f("Columns")})})})}},66196:(e,t,l)=>{l.r(t),l.d(t,{default:()=>k});var c=l(99584),n=l(66296),s=l(87228),i=l(68496),d=l(15752),a=l(36668),o=l(59424),r=l(3952),u=l(23424),h=l(61072),v=l(98016),m=l(46003),x=l(80144),y=l(32712),f=l(18896),p=l(80167),g=l(65236),j=l(53992),b=l(1428),w=l(68256),C=l(97884);const k=()=>{const{t:e}=(0,g.G)(),{setIsModalVisible:t}=(0,c.useContext)(v.e),[l,k]=(0,c.useState)(null),_=(0,y.OY)(),z=(0,u.i6)(),[V,H]=(0,c.useState)(null),[I,S]=(0,c.useState)(!1),{activeMenu:M}=(0,y.w1)((e=>e.menu),y.G),{currencies:O,loading:G}=(0,y.w1)((e=>e.currency),y.G),[E,N]=(0,c.useState)([{title:e("title"),dataIndex:"title",key:"title",is_show:!0},{title:e("symbol"),dataIndex:"symbol",key:"symbol",is_show:!0},{title:e("rate"),dataIndex:"rate",key:"rate",is_show:!0},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(l,c)=>(0,C.jsxs)(n.c,{children:[(0,C.jsx)(s.c,{disabled:c.deleted_at,type:"primary",icon:(0,C.jsx)(a.c,{}),onClick:()=>(t=>{_((0,f.WC)({url:"currency/".concat(t.id),id:"currency_edit",name:e("edit.currency")})),z("/currency/".concat(t.id))})(c)}),c.default?"":(0,C.jsx)(b.c,{disabled:c.deleted_at,icon:(0,C.jsx)(o.c,{}),onClick:()=>{k([c.id]),t(!0),H(!0)}})]})}]);(0,w.c)((()=>{const e=M.data,t={status:"deleted_at"===(null===e||void 0===e?void 0:e.role)?null:(null===e||void 0===e?void 0:e.role)||"published",deleted_at:"deleted_at"===(null===e||void 0===e?void 0:e.role)?null===e||void 0===e?void 0:e.role:null,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};_((0,p.In)(t))}),[M.data]),(0,c.useEffect)((()=>{const e=M.data,t={status:"deleted_at"===(null===e||void 0===e?void 0:e.role)?null:(null===e||void 0===e?void 0:e.role)||"published",deleted_at:"deleted_at"===(null===e||void 0===e?void 0:e.role)?e.role:null};M.refetch&&(_((0,p.In)(t)),_((0,f.CO)(M)))}),[M.refetch]);const P={selectedRowKeys:l,onChange:e=>{k(e)}};return(0,C.jsxs)(i.default,{title:e("currencies"),extra:(0,C.jsxs)(n.c,{children:[(0,C.jsx)(s.c,{icon:(0,C.jsx)(r.c,{}),type:"primary",onClick:()=>{_((0,f.WC)({id:"add-currencies",url:"currency/add",name:e("add.currency")})),z("/currency/add")},children:e("add.currency")}),(0,C.jsx)(b.c,{onClick:()=>{null===l||0===l.length?h.m4.warning(e("select.the.product")):(t(!0),H(!1))},children:e("delete.selected")}),(0,C.jsx)(j.c,{columns:E,setColumns:N})]}),children:[(0,C.jsx)(d.c,{scroll:{x:!0},rowSelection:P,columns:null===E||void 0===E?void 0:E.filter((e=>e.is_show)),dataSource:O,rowKey:e=>e.id,loading:G,pagination:!1}),(0,C.jsx)(m.c,{click:()=>{S(!0);const c={...Object.assign({},...l.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};x.c.delete(c).then((()=>{h.m4.success(e("successfully.deleted")),t(!1),_((0,p.In)()),H(null)})).finally((()=>{k(null),S(!1)}))},text:e(V?"delete":"all.delete"),setText:k,loading:I})]})}},3952:(e,t,l)=>{l.d(t,{c:()=>a});var c=l(30800),n=l(99584);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=l(47164),d=function(e,t){return n.createElement(i.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:s}))};d.displayName="PlusCircleOutlined";const a=n.forwardRef(d)},55512:(e,t,l)=>{l.d(t,{c:()=>a});var c=l(30800),n=l(99584);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=l(47164),d=function(e,t){return n.createElement(i.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:s}))};d.displayName="TableOutlined";const a=n.forwardRef(d)}}]);