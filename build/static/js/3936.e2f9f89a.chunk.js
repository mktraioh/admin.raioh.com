"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3936],{1428:(e,t,s)=>{s.d(t,{c:()=>d});s(99584);var n=s(87228),c=s(59424),l=s(61072),i=s(65236),a=s(75088),o=s(97884);function d(e){let{size:t="",onClick:s,type:d="default",...r}=e;const{t:u}=(0,i.G)(),{isDemo:h}=(0,a.c)();return(0,o.jsx)(n.c,{size:t,icon:(0,o.jsx)(c.c,{}),onClick:e=>{h?l.m4.warning(u("cannot.work.demo")):s(e)},type:d,...r})}},53992:(e,t,s)=>{s.d(t,{c:()=>v});var n=s(99584),c=s(49308),l=s(92200),i=s(66296),a=s(26012),o=s(72192),d=s(35928),r=s(87228),u=s(55512),h=s(65236),x=s(97884);const{Text:p}=c.default,v=e=>{let{columns:t=[],setColumns:s,style:c,size:v="",iconOnly:m}=e;const{t:f}=(0,h.G)(),[b,g]=(0,n.useState)(!1),j=(0,x.jsx)(l.c,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,x.jsx)(l.c.Item,{children:(0,x.jsxs)(i.c,{className:"d-flex justify-content-between",children:[(0,x.jsx)(p,{children:e.title}),(0,x.jsx)(a.c,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));s(n)}(e),disabled:1===n})]})},e+n)))});return(0,x.jsx)(o.c,{overlay:j,trigger:["click"],onVisibleChange:e=>{g(e)},visible:b,children:(0,x.jsx)(d.c,{title:f("change.columns"),children:(0,x.jsx)(r.c,{style:{...c},size:v,icon:(0,x.jsx)(u.c,{}),children:m?null:f("Columns")})})})}},33936:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var n=s(99584),c=s(26012),l=s(98044),i=s(66296),a=s(87228),o=s(68496),d=s(15752),r=s(23424),u=s(36668),h=s(59424),x=s(3952),p=s(46003),v=s(98016),m=s(32712),f=s(18896),b=s(61072),g=s(65236),j=s(64544),k=s(83072),w=s.n(k),y=s(64976),C=s(1428),z=s(53992),S=s(97884);const _=()=>{const{t:e}=(0,g.G)(),t=(0,m.OY)(),s=(0,r.i6)(),{setIsModalVisible:k}=(0,n.useContext)(v.e),[_,V]=(0,n.useState)(null),[H,I]=(0,n.useState)(null),[M,O]=(0,n.useState)(null),[B,G]=(0,n.useState)(!1),[N,E]=(0,n.useState)(null),{activeMenu:T}=(0,m.w1)((e=>e.menu),m.G),{shopBonus:D,meta:P,loading:R}=(0,m.w1)((e=>e.shopBonus),m.G),[W,A]=(0,n.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("order.amount"),dataIndex:"value",key:"value",is_show:!0},{title:e("bonus.product"),dataIndex:"bonusStock",key:"bonusStock",is_show:!0,render:(e,t)=>{var s,n;return null===(s=t.bonusStock)||void 0===s||null===(n=s.product)||void 0===n?void 0:n.translation.title}},{title:e("active"),dataIndex:"status",key:"status",is_show:!0,render:(e,t)=>(0,S.jsx)(c.c,{onChange:()=>{k(!0),I(t.id),O(!0)},checked:e},t.id+e)},{title:e("expired.at"),dataIndex:"expired_at",key:"expired_at",is_show:!0,render:e=>(0,S.jsx)("div",{children:w()(new Date).isBefore(e)?(0,S.jsx)(l.c,{color:"blue",children:e}):(0,S.jsx)(l.c,{color:"error",children:e})})},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,S.jsxs)(i.c,{children:[(0,S.jsx)(a.c,{type:"primary",icon:(0,S.jsx)(u.c,{}),onClick:()=>K(t)}),(0,S.jsx)(C.c,{icon:(0,S.jsx)(h.c,{}),onClick:()=>{k(!0),V([t.id]),O(!1),E(!0)}})]})}]),K=n=>{t((0,f.WC)({url:"seller/shop-bonus/".concat(n.id),id:"bonus_edit",name:e("edit.bonus")})),s("/seller/shop-bonus/".concat(n.id))};(0,n.useEffect)((()=>{T.refetch&&(t((0,j.S)()),t((0,f.CO)(T)))}),[T.refetch]);const Y={id:_,onChange:e=>{V(e)}};return(0,S.jsxs)(o.default,{title:e("bonus"),extra:(0,S.jsxs)(i.c,{wrap:!0,children:[(0,S.jsx)(a.c,{icon:(0,S.jsx)(x.c,{}),type:"primary",onClick:()=>{t((0,f.WC)({id:"add.bonus",url:"seller/shop-bonus/add",name:e("add.bonus")})),s("/seller/shop-bonus/add")},children:e("add.bonus")}),(0,S.jsx)(C.c,{className:"",type:"danger",onClick:()=>{null===_||0===_.length?b.m4.warning(e("select.the.product")):(k(!0),E(!1))},children:e("delete.all")}),(0,S.jsx)(z.c,{columns:W,setColumns:A})]}),children:[(0,S.jsx)(d.c,{scroll:{x:!0},rowSelection:Y,columns:null===W||void 0===W?void 0:W.filter((e=>e.is_show)),dataSource:D,pagination:{pageSize:P.per_page,page:P.current_page,total:P.total},rowKey:e=>e.id,loading:R,onChange:e=>{const{pageSize:s,current:n}=e;t((0,j.S)({perPage:s,page:n}))}}),(0,S.jsx)(p.c,{click:M?()=>{G(!0),y.c.setActive(H).then((()=>{k(!1),t((0,j.S)()),b.m4.success(e("successfully.updated"))})).finally((()=>G(!1)))}:()=>{G(!0);const s={...Object.assign({},..._.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};y.c.delete(s).then((()=>{t((0,j.S)()),b.m4.success(e("successfully.deleted"))})).finally((()=>{k(!1),G(!1)}))},text:e(M?"set.active.bonus":N?"delete":"all.delete"),loading:B,setText:V})]})}},3952:(e,t,s)=>{s.d(t,{c:()=>o});var n=s(30800),c=s(99584);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=s(47164),a=function(e,t){return c.createElement(i.c,(0,n.c)((0,n.c)({},e),{},{ref:t,icon:l}))};a.displayName="PlusCircleOutlined";const o=c.forwardRef(a)},55512:(e,t,s)=>{s.d(t,{c:()=>o});var n=s(30800),c=s(99584);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=s(47164),a=function(e,t){return c.createElement(i.c,(0,n.c)((0,n.c)({},e),{},{ref:t,icon:l}))};a.displayName="TableOutlined";const o=c.forwardRef(a)}}]);