"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2556],{1428:(e,t,n)=>{n.d(t,{c:()=>r});n(99584);var c=n(87228),l=n(59424),s=n(61072),a=n(65236),i=n(75088),d=n(97884);function r(e){let{size:t="",onClick:n,type:r="default",...o}=e;const{t:u}=(0,a.G)(),{isDemo:h}=(0,i.c)();return(0,d.jsx)(c.c,{size:t,icon:(0,d.jsx)(l.c,{}),onClick:e=>{h?s.m4.warning(u("cannot.work.demo")):n(e)},type:r,...o})}},53992:(e,t,n)=>{n.d(t,{c:()=>x});var c=n(99584),l=n(49308),s=n(92200),a=n(66296),i=n(26012),d=n(72192),r=n(35928),o=n(87228),u=n(55512),h=n(65236),v=n(97884);const{Text:m}=l.default,x=e=>{let{columns:t=[],setColumns:n,style:l,size:x="",iconOnly:g}=e;const{t:p}=(0,h.G)(),[f,b]=(0,c.useState)(!1),j=(0,v.jsx)(s.c,{children:null===t||void 0===t?void 0:t.map(((e,c)=>(0,v.jsx)(s.c.Item,{children:(0,v.jsxs)(a.c,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(i.c,{defaultChecked:!0,onClick:()=>function(e){const c=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(c)}(e),disabled:1===c})]})},e+c)))});return(0,v.jsx)(d.c,{overlay:j,trigger:["click"],onVisibleChange:e=>{b(e)},visible:f,children:(0,v.jsx)(r.c,{title:p("change.columns"),children:(0,v.jsx)(o.c,{style:{...l},size:x,icon:(0,v.jsx)(u.c,{}),children:g?null:p("Columns")})})})}},42556:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var c=n(99584),l=n(66296),s=n(87228),a=n(68496),i=n(15752),d=n(23424),r=n(36668),o=n(59424),u=n(3952),h=n(46003),v=n(98016),m=n(32712),x=n(18896),g=n(61072),p=n(65236),f=n(5676),b=n(10272),j=n(1428),y=n(53992),w=n(97884);const C=()=>{const{t:e}=(0,p.G)(),t=(0,m.OY)(),n=(0,d.i6)(),{setIsModalVisible:C}=(0,c.useContext)(v.e),[z,k]=(0,c.useState)(null),[V,_]=(0,c.useState)(null),[H,S]=(0,c.useState)(!1),{activeMenu:I}=(0,m.w1)((e=>e.menu),m.G),{branches:M,meta:O,loading:G}=(0,m.w1)((e=>e.branch),m.G),[E,N]=(0,c.useState)([{title:e("id"),is_show:!0,dataIndex:"id",key:"id"},{title:e("title"),is_show:!0,dataIndex:"title",key:"title",render:(e,t)=>{var n;return(0,w.jsx)(w.Fragment,{children:null===t||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title})}},{title:e("address"),is_show:!0,dataIndex:"address",key:"address",render:(e,t)=>{var n;return(0,w.jsx)(w.Fragment,{children:null===t||void 0===t||null===(n=t.address)||void 0===n?void 0:n.address})}},{title:e("options"),is_show:!0,key:"options",dataIndex:"options",render:(e,t)=>(0,w.jsxs)(l.c,{children:[(0,w.jsx)(s.c,{type:"primary",icon:(0,w.jsx)(r.c,{}),onClick:()=>R(t)}),(0,w.jsx)(j.c,{disabled:t.deleted_at,icon:(0,w.jsx)(o.c,{}),onClick:()=>{C(!0),k([t.id]),_(!0)}})]})}]),R=c=>{t((0,x.WC)({url:"seller/branch/".concat(c.id),id:"branch_edit",name:e("edit.branch")})),n("/seller/branch/".concat(c.id))};(0,c.useEffect)((()=>{I.refetch&&(t((0,f.y)()),t((0,x.CO)(I)))}),[I.refetch]);const T={selectedRowKeys:z,onChange:e=>{k(e)}};return(0,w.jsxs)(a.default,{title:e("branch"),extra:(0,w.jsxs)(l.c,{wrap:!0,children:[(0,w.jsx)(s.c,{size:"small",type:"primary",icon:(0,w.jsx)(u.c,{}),onClick:()=>{t((0,x.WC)({url:"seller/branch/add",id:"add.branch",name:e("add.branch")})),n("/seller/branch/add")},children:e("add.branch")}),(0,w.jsx)(j.c,{type:"danger",onClick:()=>{null===z||0===z.length?g.m4.warning(e("select.the.product")):(C(!0),_(!1))},children:e("delete.all")}),(0,w.jsx)(y.c,{columns:E,setColumns:N})]}),children:[(0,w.jsx)(i.c,{scroll:{x:!0},rowSelection:T,columns:null===E||void 0===E?void 0:E.filter((e=>e.is_show)),dataSource:M,pagination:{pageSize:null===O||void 0===O?void 0:O.per_page,page:null===O||void 0===O?void 0:O.current_page,total:null===O||void 0===O?void 0:O.total},rowKey:e=>e.id,loading:G,onChange:e=>{const{pageSize:n,current:c}=e;t((0,f.y)({perPage:n,page:c}))}}),(0,w.jsx)(h.c,{click:()=>{S(!0);const n={...Object.assign({},...z.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};b.c.delete(n).then((()=>{t((0,f.y)()),g.m4.success(e("successfully.deleted")),k(null)})).finally((()=>{C(!1),S(!1)}))},text:e(V?"delete":"all.delete"),loading:H,setText:k})]})}},3952:(e,t,n)=>{n.d(t,{c:()=>d});var c=n(30800),l=n(99584);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var a=n(47164),i=function(e,t){return l.createElement(a.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:s}))};i.displayName="PlusCircleOutlined";const d=l.forwardRef(i)},55512:(e,t,n)=>{n.d(t,{c:()=>d});var c=n(30800),l=n(99584);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=n(47164),i=function(e,t){return l.createElement(a.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:s}))};i.displayName="TableOutlined";const d=l.forwardRef(i)}}]);