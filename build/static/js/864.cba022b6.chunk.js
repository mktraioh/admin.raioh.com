"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[864],{1428:(e,t,l)=>{l.d(t,{c:()=>o});l(99584);var n=l(87228),a=l(59424),c=l(61072),d=l(65236),s=l(75088),i=l(97884);function o(e){let{size:t="",onClick:l,type:o="default",...r}=e;const{t:u}=(0,d.G)(),{isDemo:h}=(0,s.c)();return(0,i.jsx)(n.c,{size:t,icon:(0,i.jsx)(a.c,{}),onClick:e=>{h?c.m4.warning(u("cannot.work.demo")):l(e)},type:o,...r})}},53992:(e,t,l)=>{l.d(t,{c:()=>x});var n=l(99584),a=l(49308),c=l(92200),d=l(66296),s=l(26012),i=l(72192),o=l(35928),r=l(87228),u=l(55512),h=l(65236),v=l(97884);const{Text:m}=a.default,x=e=>{let{columns:t=[],setColumns:l,style:a,size:x="",iconOnly:b}=e;const{t:p}=(0,h.G)(),[f,g]=(0,n.useState)(!1),j=(0,v.jsx)(c.c,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,v.jsx)(c.c.Item,{children:(0,v.jsxs)(d.c,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(s.c,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(n)}(e),disabled:1===n})]})},e+n)))});return(0,v.jsx)(i.c,{overlay:j,trigger:["click"],onVisibleChange:e=>{g(e)},visible:f,children:(0,v.jsx)(o.c,{title:p("change.columns"),children:(0,v.jsx)(r.c,{style:{...a},size:x,icon:(0,v.jsx)(u.c,{}),children:b?null:p("Columns")})})})}},88200:(e,t,l)=>{l.d(t,{c:()=>i});l(99584);var n=l(95884),a=l(31508),c=l(87228),d=l(65236),s=l(97884);const i=e=>{let{open:t,handleCancel:l,text:i,click:o,loading:r,subTitle:u}=e;const{t:h}=(0,d.G)();return(0,s.jsxs)(n.default,{closable:!1,visible:t,footer:null,centered:!0,children:[(0,s.jsx)(a.cp,{status:"warning",title:i,subTitle:u}),(0,s.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,s.jsx)(c.c,{type:"primary",className:"mr-2",onClick:o,loading:r,children:h("yes")}),(0,s.jsx)(c.c,{onClick:()=>l(),children:h("no")})]})]})}},40864:(e,t,l)=>{l.r(t),l.d(t,{default:()=>O});var n=l(99584),a=l(84616),c=l(87968),d=l(26012),s=l(66296),i=l(87228),o=l(68496),r=l(15752),u=l(52640),h=l(23424),v=l(36668),m=l(20108),x=l(59424),b=l(3952),p=l(46003),f=l(98016),g=l(32712),j=l(18896),y=l(88816),C=l(65344),k=l(61072),_=l(65236),w=l(1428),z=l(53992),S=l(88200),H=l(74788),V=l(68256),I=l(83072),M=l.n(I),T=l(97884);const N=["published","deleted_at"],{TabPane:G}=a.default,O=()=>{var e,t;const{t:l}=(0,_.G)(),I=(0,g.OY)(),O=(0,h.i6)(),[Y,K]=(0,n.useState)(null),{setIsModalVisible:A}=(0,n.useContext)(f.e),[D,E]=(0,n.useState)(!1),{activeMenu:P}=(0,g.w1)((e=>e.menu),g.G),[R,W]=(0,n.useState)(null),[B,L]=(0,n.useState)(null),{banners:q,meta:F,loading:J}=(0,g.w1)((e=>e.banner),g.G),[Q,U]=(0,n.useState)(null),[X,Z]=(0,n.useState)([{title:l("id"),dataIndex:"id",key:"id",is_show:!0},{title:l("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,T.jsx)(c.c,{src:t.deleted_at?"https://fakeimg.pl/640x360":u.cd+e,alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})},{title:l("title"),dataIndex:"title",key:"title",is_show:!0,render:(e,t)=>{var l;return null===t||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title}},{title:l("active"),dataIndex:"active",key:"active",is_show:!0,render:(e,t)=>(0,T.jsx)(d.c,{disabled:t.deleted_at,onChange:()=>{A(!0),W(t.id),L(!0)},checked:e},t.id+e)},{title:l("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:(e,t)=>M()(null===t||void 0===t?void 0:t.created_at).format("DD.MM.YYYY HH:mm")},{title:l("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,T.jsxs)(s.c,{children:[(0,T.jsx)(i.c,{type:"primary",icon:(0,T.jsx)(v.c,{}),onClick:()=>$(t),disabled:t.deleted_at}),(0,T.jsx)(i.c,{icon:(0,T.jsx)(m.c,{}),onClick:()=>ee(t),disabled:t.deleted_at}),(0,T.jsx)(w.c,{disabled:t.deleted_at,icon:(0,T.jsx)(x.c,{}),onClick:()=>{A(!0),U([t.id]),L(!1)}})]})}]),$=e=>{I((0,j.WC)({url:"banner/".concat(e.id),id:"banner_edit",name:l("edit.banner")})),O("/banner/".concat(e.id))},ee=e=>{I((0,j.WC)({url:"banner/clone/".concat(e.id),id:"banner_clone",name:l("clone.banner")})),O("/banner/clone/".concat(e.id))};(0,V.c)((()=>{const e=P.data,t={status:"deleted_at"===(null===e||void 0===e?void 0:e.role)?null:(null===e||void 0===e?void 0:e.role)||"published",deleted_at:"deleted_at"===(null===e||void 0===e?void 0:e.role)?null===e||void 0===e?void 0:e.role:null};I((0,C.S)(t))}),[P.data]),(0,n.useEffect)((()=>{const e=P.data,t={status:"deleted_at"===(null===e||void 0===e?void 0:e.role)?null:(null===e||void 0===e?void 0:e.role)||"published",deleted_at:"deleted_at"===(null===e||void 0===e?void 0:e.role)?null===e||void 0===e?void 0:e.role:null};P.refetch&&(I((0,C.S)(t)),I((0,j.CO)(P)))}),[P.refetch]);const te={selectedRowKeys:Q,onChange:e=>{U(e)}};return(0,T.jsxs)(o.default,{title:l("banners"),navLInkTo:"",extra:(0,T.jsxs)(s.c,{wrap:!0,children:[(0,T.jsx)(i.c,{type:"primary",icon:(0,T.jsx)(b.c,{}),onClick:()=>{I((0,j.WC)({id:"banner/add",url:"banner/add",name:l("add.banner")})),O("/banner/add")},children:l("add.banner")}),"published"===(null===(e=P.data)||void 0===e?void 0:e.role)?(0,T.jsx)(w.c,{size:"",onClick:()=>K({delete:!0}),children:l("delete.all")}):(0,T.jsx)(w.c,{size:"",icon:(0,T.jsx)(H.icK,{className:"mr-2"}),onClick:()=>K({restore:!0}),children:l("restore.all")}),(0,T.jsx)(w.c,{size:"",onClick:()=>{null===Q||0===Q.length?k.m4.warning(l("select.the.product")):A(!0)},children:l("delete.selected")}),(0,T.jsx)(z.c,{setColumns:Z,columns:X})]}),children:[(0,T.jsx)(a.default,{className:"mt-3",activeKey:(null===(t=P.data)||void 0===t?void 0:t.role)||"published",onChange:e=>{var t,l;t=e,l="role",I((0,j.MH)({activeMenu:P,data:{...P.data,[l]:t}}))},type:"card",children:N.map((e=>(0,T.jsx)(G,{tab:l(e)},e)))}),(0,T.jsx)(r.c,{scroll:{x:!0},rowSelection:te,columns:null===X||void 0===X?void 0:X.filter((e=>e.is_show)),dataSource:q,pagination:{pageSize:F.per_page,page:F.current_page,total:F.total},rowKey:e=>e.id,loading:J,onChange:e=>{const{pageSize:t,current:l}=e;I((0,C.S)({perPage:t,page:l}))}}),(0,T.jsx)(p.c,{click:B?()=>{E(!0),y.c.setActive(R).then((()=>{A(!1),I((0,C.S)()),k.m4.success(l("successfully.updated"))})).finally((()=>E(!1)))}:()=>{E(!0);const e={...Object.assign({},...Q.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};y.c.delete(e).then((()=>{I((0,C.S)()),k.m4.success(l("successfully.deleted")),A(!1)})).finally((()=>{E(!1)}))},text:l(B?"set.active.banner":"delete.banner"),loading:D,setText:U}),Y&&(0,T.jsx)(S.c,{open:Y,handleCancel:()=>K(null),click:Y.restore?()=>{E(!0),y.c.restoreAll().then((()=>{I((0,C.S)()),k.m4.success(l("successfully.deleted"))})).finally((()=>{K(null),E(!1)}))}:()=>{E(!0),y.c.dropAll().then((()=>{I((0,C.S)()),k.m4.success(l("successfully.deleted"))})).finally((()=>{K(null),E(!1)}))},text:Y.restore?l("restore.modal.text"):l("read.carefully"),subTitle:Y.restore?"":l("confirm.deletion"),loading:D,setText:U})]})}},3952:(e,t,l)=>{l.d(t,{c:()=>i});var n=l(30800),a=l(99584);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var d=l(47164),s=function(e,t){return a.createElement(d.c,(0,n.c)((0,n.c)({},e),{},{ref:t,icon:c}))};s.displayName="PlusCircleOutlined";const i=a.forwardRef(s)},55512:(e,t,l)=>{l.d(t,{c:()=>i});var n=l(30800),a=l(99584);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var d=l(47164),s=function(e,t){return a.createElement(d.c,(0,n.c)((0,n.c)({},e),{},{ref:t,icon:c}))};s.displayName="TableOutlined";const i=a.forwardRef(s)}}]);