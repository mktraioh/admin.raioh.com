"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7384],{1428:(e,t,s)=>{s.d(t,{c:()=>d});s(99584);var c=s(87228),n=s(59424),l=s(61072),i=s(65236),o=s(75088),a=s(97884);function d(e){let{size:t="",onClick:s,type:d="default",...r}=e;const{t:u}=(0,i.G)(),{isDemo:h}=(0,o.c)();return(0,a.jsx)(c.c,{size:t,icon:(0,a.jsx)(n.c,{}),onClick:e=>{h?l.m4.warning(u("cannot.work.demo")):s(e)},type:d,...r})}},53992:(e,t,s)=>{s.d(t,{c:()=>v});var c=s(99584),n=s(49308),l=s(92200),i=s(66296),o=s(26012),a=s(72192),d=s(35928),r=s(87228),u=s(55512),h=s(65236),m=s(97884);const{Text:p}=n.default,v=e=>{let{columns:t=[],setColumns:s,style:n,size:v="",iconOnly:x}=e;const{t:g}=(0,h.G)(),[y,f]=(0,c.useState)(!1),w=(0,m.jsx)(l.c,{children:null===t||void 0===t?void 0:t.map(((e,c)=>(0,m.jsx)(l.c.Item,{children:(0,m.jsxs)(i.c,{className:"d-flex justify-content-between",children:[(0,m.jsx)(p,{children:e.title}),(0,m.jsx)(o.c,{defaultChecked:!0,onClick:()=>function(e){const c=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));s(c)}(e),disabled:1===c})]})},e+c)))});return(0,m.jsx)(a.c,{overlay:w,trigger:["click"],onVisibleChange:e=>{f(e)},visible:y,children:(0,m.jsx)(d.c,{title:g("change.columns"),children:(0,m.jsx)(r.c,{style:{...n},size:v,icon:(0,m.jsx)(u.c,{}),children:x?null:g("Columns")})})})}},55004:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var c=s(99584),n=s(87968),l=s(66296),i=s(87228),o=s(68496),a=s(15752),d=s(23424),r=s(36668),u=s(59424),h=s(3952),m=s(46003),p=s(98016),v=s(32712),x=s(18896),g=s(61072),y=s(65236),f=s(1428),w=s(99280),j=s(36008),k=s(53992),C=s(75088),z=s(97884);const _=()=>{const{t:e}=(0,y.G)(),t=(0,v.OY)(),s=(0,d.i6)(),[_,b]=(0,c.useState)(null),{isDemo:V}=(0,C.c)(),[H,S]=(0,c.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("image"),dataIndex:"file_urls",key:"file_urls",is_show:!0,render:e=>(0,z.jsx)(n.c,{src:e?e[0]:"https://via.placeholder.com/150",alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})},{title:e("product"),dataIndex:"stock",key:"stock",is_show:!0,render:(e,t)=>{var s,c;return null===t||void 0===t||null===(s=t.product)||void 0===s||null===(c=s.translation)||void 0===c?void 0:c.title}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(c,n)=>(0,z.jsxs)(l.c,{children:[(0,z.jsx)(i.c,{type:"primary",icon:(0,z.jsx)(r.c,{}),onClick:()=>(c=>{V?g.m4.warning(e("cannot.work.demo")):(t((0,x.WC)({url:"seller/story/".concat(c.id),id:"story_edit",name:e("edit.story")})),s("/seller/story/".concat(c.id)))})(n)}),(0,z.jsx)(f.c,{icon:(0,z.jsx)(u.c,{}),onClick:()=>{M(!0),G([n.id]),b(!0)}})]})}]),{setIsModalVisible:M}=(0,c.useContext)(p.e),[I,G]=(0,c.useState)(null),[O,N]=(0,c.useState)(!1),{myShop:E}=(0,v.w1)((e=>e.myShop),v.G),{activeMenu:T}=(0,v.w1)((e=>e.menu),v.G),{storeis:B,meta:D,loading:P}=(0,v.w1)((e=>e.storeis),v.G);(0,c.useEffect)((()=>{const e={shop_id:E.id};T.refetch&&(t((0,j.M7)(e)),t((0,x.CO)(T)))}),[T.refetch]);const R={id:I,onChange:e=>{G(e)}};return(0,z.jsxs)(o.default,{title:e("stories"),extra:(0,z.jsxs)(l.c,{children:[(0,z.jsx)(i.c,{icon:(0,z.jsx)(h.c,{}),type:"primary",onClick:()=>{V?g.m4.warning(e("cannot.work.demo")):(t((0,x.WC)({id:"add.story",url:"seller/story/add",name:e("add.story")})),s("/seller/story/add"))},children:e("add.story")}),(0,z.jsx)(f.c,{className:"",type:"danger",onClick:()=>{null===I||0===I.length?g.m4.warning(e("select.the.product")):(M(!0),b(!1))},children:e("delete.all")}),(0,z.jsx)(k.c,{columns:H,setColumns:S})]}),children:[(0,z.jsx)(a.c,{scroll:{x:!0},rowSelection:R,columns:null===H||void 0===H?void 0:H.filter((e=>e.is_show)),dataSource:B,pagination:{pageSize:D.per_page,page:D.current_page,total:D.total},rowKey:e=>e.id,loading:P,onChange:e=>{const{pageSize:s,current:c}=e;t((0,j.M7)({perPage:s,page:c,shop_id:E.id}))}}),(0,z.jsx)(m.c,{click:()=>{N(!0);const s={...Object.assign({},...I.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};w.c.delete(s).then((()=>{t((0,j.M7)()),g.m4.success(e("successfully.deleted"))})).finally((()=>{M(!1),N(!1)}))},text:e(_?"delete":"all.delete"),setText:G,loading:O})]})}},3952:(e,t,s)=>{s.d(t,{c:()=>a});var c=s(30800),n=s(99584);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=s(47164),o=function(e,t){return n.createElement(i.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:l}))};o.displayName="PlusCircleOutlined";const a=n.forwardRef(o)},55512:(e,t,s)=>{s.d(t,{c:()=>a});var c=s(30800),n=s(99584);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=s(47164),o=function(e,t){return n.createElement(i.c,(0,c.c)((0,c.c)({},e),{},{ref:t,icon:l}))};o.displayName="TableOutlined";const a=n.forwardRef(o)}}]);