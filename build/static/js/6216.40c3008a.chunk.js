"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6216],{1428:(e,t,c)=>{c.d(t,{c:()=>o});c(99584);var l=c(87228),n=c(59424),i=c(61072),d=c(65236),a=c(75088),s=c(97884);function o(e){let{size:t="",onClick:c,type:o="default",...r}=e;const{t:u}=(0,d.G)(),{isDemo:h}=(0,a.c)();return(0,s.jsx)(l.c,{size:t,icon:(0,s.jsx)(n.c,{}),onClick:e=>{h?i.m4.warning(u("cannot.work.demo")):c(e)},type:o,...r})}},53992:(e,t,c)=>{c.d(t,{c:()=>m});var l=c(99584),n=c(49308),i=c(92200),d=c(66296),a=c(26012),s=c(72192),o=c(35928),r=c(87228),u=c(55512),h=c(65236),v=c(97884);const{Text:p}=n.default,m=e=>{let{columns:t=[],setColumns:c,style:n,size:m="",iconOnly:x}=e;const{t:g}=(0,h.G)(),[f,w]=(0,l.useState)(!1),y=(0,v.jsx)(i.c,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,v.jsx)(i.c.Item,{children:(0,v.jsxs)(d.c,{className:"d-flex justify-content-between",children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(a.c,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));c(l)}(e),disabled:1===l})]})},e+l)))});return(0,v.jsx)(s.c,{overlay:y,trigger:["click"],onVisibleChange:e=>{w(e)},visible:f,children:(0,v.jsx)(o.c,{title:g("change.columns"),children:(0,v.jsx)(r.c,{style:{...n},size:m,icon:(0,v.jsx)(u.c,{}),children:x?null:g("Columns")})})})}},19576:(e,t,c)=>{function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}c.d(t,{c:()=>l})},24968:(e,t,c)=>{function l(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}c.d(t,{c:()=>l})},56216:(e,t,c)=>{c.r(t),c.d(t,{default:()=>M});var l=c(99584),n=c(36668),i=c(59424),d=c(3952),a=c(84616),s=c(87968),o=c(66296),r=c(87228),u=c(68496),h=c(15752),v=c(61072),p=c(46003),m=c(98016),x=c(32712),g=c(23424),f=c(18896),w=c(65236),y=c(1428),j=c(53992),b=c(68256),C=c(19576),_=c(24968),k=c(31688),z=c(28716),H=c(52640),V=c(97884);const S=["published","deleted_at"],{TabPane:I}=a.default,M=()=>{var e;const{t:t}=(0,w.G)(),c=(0,x.OY)(),M=(0,g.i6)(),{setIsModalVisible:N}=(0,l.useContext)(m.e),[G,O]=(0,l.useState)(null),[P,R]=(0,l.useState)(!1),[T,E]=(0,l.useState)(null),{activeMenu:K}=(0,x.w1)((e=>e.menu),x.G),[B,F]=(0,l.useState)("published"),W=(null===(e=K.data)||void 0===e?void 0:e.role)||B,$=null===K||void 0===K?void 0:K.data,{defaultCurrency:D}=(0,x.w1)((e=>e.currency),x.G),Y={sort:null===$||void 0===$?void 0:$.sort,column:null===$||void 0===$?void 0:$.column,search:null!==$&&void 0!==$&&$.search?$.search:void 0,perPage:null===$||void 0===$?void 0:$.perPage,page:null===$||void 0===$?void 0:$.page,deleted_at:"deleted_at"===(null===$||void 0===$?void 0:$.role)?null===$||void 0===$?void 0:$.role:null},{sellerReciepts:q,meta:A,loading:J}=(0,x.w1)((e=>e.reciept),x.G),[L,Q]=(0,l.useState)([{title:t("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:t("title"),dataIndex:"title",key:"title",render:(e,t)=>{var c;return null===(c=t.translation)||void 0===c?void 0:c.title},is_show:!0},{title:t("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,V.jsx)(s.c,{width:100,src:t.deleted_at?"https://fakeimg.pl/640x360":H.cd+e,preview:!0,placeholder:!0,className:"rounded"})},{title:t("recipe.category"),dataIndex:"category",key:"category",is_show:!0,render:e=>{var t;return null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title}},{title:t("discount"),dataIndex:"discount",key:"discount",is_show:!0,render:(e,t)=>"fix"===t.discount_type?(0,_.c)(t.discount_price,D.symbol):"".concat(t.discount_price," %")},{title:t("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,l)=>(0,V.jsxs)(o.c,{children:[(0,V.jsx)(r.c,{type:"primary",icon:(0,V.jsx)(n.c,{}),onClick:()=>(e=>{c((0,f.WC)({url:"seller/recept/edit/".concat(e.id),id:"recepe_edit",name:t("edit.recepe")})),M("/seller/recept/edit/".concat(e.id),{state:"edit"})})(l),disabled:l.deleted_at}),(0,V.jsx)(y.c,{disabled:l.deleted_at,icon:(0,V.jsx)(i.c,{}),onClick:()=>{O([l.id]),N(!0),E(!0)}})]})}]);(0,b.c)((()=>{c((0,k.wv)(Y))}),[K.data]),(0,l.useEffect)((()=>{K.refetch&&(c((0,k.wv)(Y)),c((0,f.CO)(K)))}),[K.refetch]);const U={selectedRowKeys:G,onChange:e=>{O(e)}};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(u.default,{className:"p-0",children:(0,V.jsxs)(o.c,{wrap:!0,className:"justify-content-end w-100",children:[(0,V.jsx)(y.c,{size:"",onClick:()=>{null===G||0===G.length?v.m4.warning(t("select.the.product")):(N(!0),E(!1))},children:t("delete.selected")}),(0,V.jsx)(r.c,{type:"primary",icon:(0,V.jsx)(d.c,{}),onClick:()=>{c((0,f.WC)({id:"recepe_add",url:"seller/recept/add",name:t("add.recepe")})),M("/seller/recept/add")},children:t("add.recepe")}),(0,V.jsx)(j.c,{columns:L,setColumns:Q})]})}),(0,V.jsxs)(u.default,{title:t("recepes"),children:[(0,V.jsx)(a.default,{className:"mt-3",activeKey:W,onChange:e=>{(e=>{const t=K.data;c((0,f.MH)({activeMenu:K,data:{...t,...e}}))})({role:e,page:1}),F(e)},type:"card",children:S.map((e=>(0,V.jsx)(I,{tab:t(e)},e)))}),(0,V.jsx)(h.c,{scroll:{x:!0},rowSelection:U,columns:null===L||void 0===L?void 0:L.filter((e=>e.is_show)),dataSource:q,pagination:{pageSize:A.per_page,page:A.current_page,total:A.total},rowKey:e=>e.id,onChange:function(e,t,l){const{pageSize:n,current:i}=e,{field:d,order:a}=l,s=(0,C.c)(a);c((0,f.MH)({activeMenu:K,data:{...$,perPage:n,page:i,column:d,sort:s}}))},loading:J})]}),(0,V.jsx)(p.c,{click:()=>{R(!0);const e={...Object.assign({},...G.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};z.c.delete(e).then((()=>{v.m4.success(t("successfully.deleted")),c((0,k.wv)(Y)),N(!1),E(null)})).finally((()=>{O(null),R(!1)}))},text:t(T?"delete":"all.delete"),setText:O,loading:P})]})}},3952:(e,t,c)=>{c.d(t,{c:()=>s});var l=c(30800),n=c(99584);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var d=c(47164),a=function(e,t){return n.createElement(d.c,(0,l.c)((0,l.c)({},e),{},{ref:t,icon:i}))};a.displayName="PlusCircleOutlined";const s=n.forwardRef(a)},55512:(e,t,c)=>{c.d(t,{c:()=>s});var l=c(30800),n=c(99584);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var d=c(47164),a=function(e,t){return n.createElement(d.c,(0,l.c)((0,l.c)({},e),{},{ref:t,icon:i}))};a.displayName="TableOutlined";const s=n.forwardRef(a)}}]);