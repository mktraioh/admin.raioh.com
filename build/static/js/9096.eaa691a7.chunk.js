"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9096],{1428:(e,l,t)=>{t.d(l,{c:()=>r});t(99584);var a=t(87228),n=t(59424),o=t(61072),i=t(65236),s=t(75088),c=t(97884);function r(e){let{size:l="",onClick:t,type:r="default",...d}=e;const{t:u}=(0,i.G)(),{isDemo:v}=(0,s.c)();return(0,c.jsx)(a.c,{size:l,icon:(0,c.jsx)(n.c,{}),onClick:e=>{v?o.m4.warning(u("cannot.work.demo")):t(e)},type:r,...d})}},53992:(e,l,t)=>{t.d(l,{c:()=>x});var a=t(99584),n=t(49308),o=t(92200),i=t(66296),s=t(26012),c=t(72192),r=t(35928),d=t(87228),u=t(55512),v=t(65236),h=t(97884);const{Text:p}=n.default,x=e=>{let{columns:l=[],setColumns:t,style:n,size:x="",iconOnly:m}=e;const{t:g}=(0,v.G)(),[f,j]=(0,a.useState)(!1),y=(0,h.jsx)(o.c,{children:null===l||void 0===l?void 0:l.map(((e,a)=>(0,h.jsx)(o.c.Item,{children:(0,h.jsxs)(i.c,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(s.c,{defaultChecked:!0,onClick:()=>function(e){const a=null===l||void 0===l?void 0:l.map((l=>(l.dataIndex===e.dataIndex&&(l.is_show=!(null!==l&&void 0!==l&&l.is_show)),l)));t(a)}(e),disabled:1===a})]})},e+a)))});return(0,h.jsx)(c.c,{overlay:y,trigger:["click"],onVisibleChange:e=>{j(e)},visible:f,children:(0,h.jsx)(r.c,{title:g("change.columns"),children:(0,h.jsx)(d.c,{style:{...n},size:x,icon:(0,h.jsx)(u.c,{}),children:m?null:g("Columns")})})})}},10920:(e,l,t)=>{t.d(l,{I:()=>r});var a=t(99584),n=t(95976),o=t.n(n),i=t(2664),s=t(37728),c=t(97884);const r=e=>{let{fetchOptions:l,debounceTimeout:t=400,hasMore:n,...r}=e;const[d,u]=(0,a.useState)(!1),[v,h]=(0,a.useState)([]),[p,x]=(0,a.useState)(!1),[m,g]=(0,a.useState)(null),[f,j]=(0,a.useState)(1),y=(0,a.useMemo)((()=>o()((e=>{h([]),g(e),u(!0),l({search:e}).then((e=>{h(e),j(2),u(!1)})).finally((()=>x(!1)))}),t)),[l,t,f]);return(0,c.jsxs)(i.default,{showSearch:!0,allowClear:!0,onPopupScroll:async e=>{const t=e.target;p||t.scrollTop+t.offsetHeight!==t.scrollHeight||n&&(x(!0),t.scrollTo(0,t.scrollHeight),l({search:m,page:f}).then((e=>{j((e=>e+1)),h([...v,...e])})).finally((()=>x(!1))))},labelInValue:!0,filterOption:!1,onSearch:y,notFoundContent:d?(0,c.jsx)(s.c,{size:"small"}):"no results",onFocus:()=>{v.length||y("")},...r,children:[v.map(((e,l)=>(0,c.jsx)(i.default.Option,{value:e.value,children:e.label},l))),p&&(0,c.jsx)(i.default.Option,{children:(0,c.jsx)(s.c,{size:"small"})})]})}},88200:(e,l,t)=>{t.d(l,{c:()=>c});t(99584);var a=t(95884),n=t(31508),o=t(87228),i=t(65236),s=t(97884);const c=e=>{let{open:l,handleCancel:t,text:c,click:r,loading:d,subTitle:u}=e;const{t:v}=(0,i.G)();return(0,s.jsxs)(a.default,{closable:!1,visible:l,footer:null,centered:!0,children:[(0,s.jsx)(n.cp,{status:"warning",title:c,subTitle:u}),(0,s.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,s.jsx)(o.c,{type:"primary",className:"mr-2",onClick:r,loading:d,children:v("yes")}),(0,s.jsx)(o.c,{onClick:()=>t(),children:v("no")})]})]})}},71376:(e,l,t)=>{t.d(l,{g:()=>r});var a=t(99584),n=t(95976),o=t.n(n),i=t(2664),s=t(37728),c=t(97884);const r=e=>{let{fetchOptions:l,debounceTimeout:t=400,onClear:n,...r}=e;const[d,u]=(0,a.useState)(!1),[v,h]=(0,a.useState)([]),p=(0,a.useMemo)((()=>o()((e=>{h([]),u(!0),l(e).then((e=>{h(e),u(!1)}))}),t)),[l,t]);return(0,c.jsx)(i.default,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),n&&n()},notFoundContent:d?(0,c.jsx)(s.c,{size:"small"}):"no results",...r,options:v,onFocus:()=>{p("")}})}},72664:(e,l,t)=>{t.d(l,{c:()=>f});var a=t(65732),n=t(46712),o=t(95884),i=t(87228),s=t(99584),c=t(5332),r=t(65236),d=t(32712),u=t(61072),v=t(36136),h=t(49580),p=t(68392),x=t(71588),m=t(71376),g=t(97884);function f(e){let{modal:l,handleCancel:t,onSuccess:f,groupId:j}=e;const[y]=a.c.useForm(),{t:C}=(0,r.G)(),b=(0,d.OY)(),[k,w]=(0,s.useState)(!1),[S,_]=(0,s.useState)("text"),[V,z]=(0,s.useState)(null),[H,G]=(0,s.useState)(""),{extraGroups:I}=(0,d.w1)((e=>e.extraGroup),d.G);(0,s.useEffect)((()=>{if(null!==l&&void 0!==l&&l.id){var e,t,a;_(l.group.type);const n={...l,extra_group_id:{label:null===l||void 0===l||null===(e=l.group)||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===l||void 0===l||null===(a=l.group)||void 0===a?void 0:a.id},value:l.value};switch(l.group.type){case"color":G(l.value);break;case"image":z((0,h.c)(l.value))}y.setFieldsValue(n)}j&&y.setFieldsValue({extra_group_id:{value:j}})}),[l,j]);function O(e,l){switch(e){case"color":return l.hex;case"text":return l;case"image":return l.name;default:return""}}return(0,g.jsx)(o.default,{title:null!==l&&void 0!==l&&l.id?C("edit.extra"):C("add.extra"),visible:!!l,onCancel:t,footer:[(0,g.jsx)(i.c,{type:"primary",onClick:()=>y.submit(),loading:k,children:C("save")}),(0,g.jsx)(i.c,{type:"default",onClick:t,children:C("cancel")})],children:(0,g.jsxs)(a.c,{name:"extra-form",layout:"vertical",form:y,onFinish:e=>{var a;console.log(e);const n={extra_group_id:null===e||void 0===e||null===(a=e.extra_group_id)||void 0===a?void 0:a.value,value:O(S,e.value)};null!==l&&void 0!==l&&l.id?((e,l)=>{w(!0),x.c.updateValue(e,l).then((()=>{u.m4.success(C("successfully.updated")),t(),b((0,p.i2)())})).finally((()=>w(!1)))})(l.id,n):(e=>{w(!0),x.c.createValue(e).then((()=>{u.m4.success(C("successfully.created")),t(),b((0,p.i2)()),f&&f()})).finally((()=>w(!1)))})(n)},children:[(0,g.jsx)(a.c.Item,{name:"extra_group_id",label:C("extra.group"),hidden:!!j,rules:[{required:!0,message:""}],children:(0,g.jsx)(m.g,{fetchOptions:async function(e){const l={perPage:10,active:1,search:e};return console.log("search => ",l),x.c.getAllGroups(l).then((e=>{var l;return null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.map((e=>{var l;return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,key:null===e||void 0===e?void 0:e.id}}))}))}})}),(0,g.jsx)(a.c.Item,{name:"value",label:C("value"),rules:[{required:!0,message:""}],children:(e=>{switch(e){case"color":return(0,g.jsx)(c.aS,{onChangeComplete:e=>G(e.hex),color:H,disableAlpha:!0});case"text":return(0,g.jsx)(n.default,{placeholder:C("enter.extra.value")});case"image":return(0,g.jsx)(v.c,{type:"extras",image:V,setImage:z,form:y,name:"value"});default:return""}})(S)})]})})}},19096:(e,l,t)=>{t.r(l),t.d(l,{default:()=>I});var a=t(99584),n=t(66296),o=t(87968),i=t(87228),s=t(68496),c=t(15752),r=t(36668),d=t(59424),u=t(3952),v=t(61072),h=t(65236),p=t(32712),x=t(68392),m=t(71588),g=t(72664),f=t(95884),j=t(97884);function y(e){let{id:l,loading:t,handleClose:a,text:n,click:o}=e;const{t:s}=(0,h.G)();return(0,j.jsxs)(f.default,{closable:!1,visible:!!l,footer:null,centered:!0,children:[(0,j.jsx)("p",{children:n}),(0,j.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,j.jsx)(i.c,{type:"primary",className:"mr-2",onClick:o,loading:t,children:s("yes")}),(0,j.jsx)(i.c,{onClick:a,children:s("no")})]})]})}var C=t(1428),b=t(52640),k=t(18896),w=t(53992),S=t(74788),_=t(88200),V=t(23424),z=t(10920),H=t(48820),G=t(68256);function I(){var e,l,t,f,I,O,M;const{t:N}=(0,h.G)(),T=(0,p.OY)(),{activeMenu:F}=(0,p.w1)((e=>e.menu),p.G),{extraGroups:P}=(0,p.w1)((e=>e.extraGroup),p.G),{extraValues:A,loading:E,meta:R}=(0,p.w1)((e=>e.extraValue),p.G),q=(0,V.i6)(),[B,K]=(0,a.useState)(null);const[W,Y]=(0,a.useState)(null),[D,L]=(0,a.useState)(null),[J,Q]=(0,a.useState)(!1),[U,X]=(0,a.useState)(null),[Z,$]=(0,a.useState)([{title:N("id"),dataIndex:"id",key:"id",is_show:!0},{title:N("title"),dataIndex:"extra_group_id",key:"extra_group_id",is_show:!0,render:e=>{var l,t;return null===P||void 0===P||null===(l=P.find((l=>l.id===e)))||void 0===l||null===(t=l.translation)||void 0===t?void 0:t.title}},{title:N("created.by"),dataIndex:"shop",key:"shop",is_show:!0,render:(e,l)=>{var t,a,n,o;return null!==l&&void 0!==l&&null!==(t=l.group)&&void 0!==t&&t.shop?(0,j.jsx)("span",{onClick:()=>{var e;return(e=>{T((0,k.WC)({id:"edit-shop",url:"shop/".concat(e.uuid),name:N("edit.shop")})),q("/shop/".concat(e.uuid),{state:"edit"})})(null===l||void 0===l||null===(e=l.group)||void 0===e?void 0:e.shop)},className:"text-hover",children:null===(a=l.group)||void 0===a||null===(n=a.shop)||void 0===n||null===(o=n.translation)||void 0===o?void 0:o.title}):N("admin")}},{title:N("value"),dataIndex:"value",key:"value",is_show:!0,render:(e,l)=>{var t,a,i;return(0,j.jsxs)(n.c,{className:"extras",children:["color"===(null===l||void 0===l||null===(t=l.group)||void 0===t?void 0:t.type)?(0,j.jsx)("div",{className:"extra-color-wrapper-contain",style:{backgroundColor:null===l||void 0===l?void 0:l.value}}):null,"image"===(null===l||void 0===l||null===(a=l.group)||void 0===a?void 0:a.type)?(0,j.jsx)(o.c,{width:100,src:b.cd+(null===l||void 0===l?void 0:l.value),className:"borderRadius"}):null,"image"===(null===l||void 0===l||null===(i=l.group)||void 0===i?void 0:i.type)?null:(0,j.jsx)("span",{children:null===l||void 0===l?void 0:l.value})]})}},{title:N("options"),is_show:!0,render:e=>(0,j.jsxs)(n.c,{children:[(0,j.jsx)(i.c,{type:"primary",icon:(0,j.jsx)(r.c,{}),onClick:()=>L(e)}),(0,j.jsx)(C.c,{type:"primary",danger:!0,icon:(0,j.jsx)(d.c,{}),onClick:()=>Y([e.id])})]})}]),ee=null===F||void 0===F?void 0:F.data,le={shop_id:null===ee||void 0===ee||null===(e=ee.selectedShop)||void 0===e?void 0:e.value,perPage:null===ee||void 0===ee?void 0:ee.perPage,page:null===ee||void 0===ee?void 0:ee.page};(0,G.c)((()=>{T((0,x.i2)(le))}),[null===F||void 0===F?void 0:F.data]),(0,a.useEffect)((()=>{F.refetch&&(T((0,x.i2)(le)),T((0,k.CO)(F)))}),[F.refetch]);return(0,j.jsxs)(s.default,{title:N("extra.value"),extra:(0,j.jsxs)(n.c,{wrap:!0,children:[(0,j.jsx)(z.I,{placeholder:N("select.shop"),hasMore:null===B||void 0===B?void 0:B.next,loading:E,fetchOptions:async function(e){let{search:l,page:t}=e;const a={search:0===(null===l||void 0===l?void 0:l.length)?void 0:l,status:"approved",page:t};return H.c.search(a).then((e=>(K(e.links),e.data.map((e=>({label:null!==e.translation?e.translation.title:"no name",value:e.id}))))))},style:{minWidth:180,marginLeft:"8px"},onChange:e=>{return l=e,t="selectedShop",void T((0,k.MH)({activeMenu:F,data:{...F.data,[t]:l}}));var l,t},value:null===(l=F.data)||void 0===l?void 0:l.selectedShop}),(0,j.jsx)(i.c,{type:"primary",icon:(0,j.jsx)(u.c,{}),onClick:()=>L({}),children:N("add.extra")}),"deleted_at"!==(null===(t=F.data)||void 0===t?void 0:t.role)&&(0,j.jsx)(C.c,{size:"",onClick:()=>X({delete:!0}),children:N("delete.all")}),"deleted_at"===(null===(f=F.data)||void 0===f?void 0:f.role)&&(0,j.jsx)(C.c,{icon:(0,j.jsx)(S.icK,{className:"mr-2"}),onClick:()=>X({restore:!0}),children:N("restore.all")}),(0,j.jsx)(w.c,{columns:Z,setColumns:$})]}),children:[(0,j.jsx)(c.c,{scroll:{x:!0},loading:E,columns:null===Z||void 0===Z?void 0:Z.filter((e=>e.is_show)),dataSource:A,rowKey:e=>e.id,pagination:{pageSize:le.perPage,page:(null===(I=F.data)||void 0===I?void 0:I.page)||1,total:R.total,defaultCurrent:null===(O=F.data)||void 0===O?void 0:O.page,current:null===(M=F.data)||void 0===M?void 0:M.page},onChange:function(e,l,t){const{pageSize:a,current:n}=e,{field:o}=t;T((0,k.MH)({activeMenu:F,data:{...F.data,perPage:a,page:n,column:o}}))}}),D&&(0,j.jsx)(g.c,{modal:D,handleCancel:()=>L(null)}),W&&(0,j.jsx)(y,{id:W,click:()=>{Q(!0);const e={...Object.assign({},...W.map(((e,l)=>({["ids[".concat(l,"]")]:e}))))};m.c.deleteValue(e).then((()=>{v.m4.success(N("successfully.deleted")),Y(null),T((0,x.i2)())})).finally((()=>Q(!1)))},text:N("delete.extra"),loading:J,handleClose:()=>Y(null)}),U&&(0,j.jsx)(_.c,{open:U,handleCancel:()=>X(null),click:U.restore?()=>{Q(!0),m.c.restoreAllValue().then((()=>{v.m4.success(N("successfully.restored")),T((0,x.i2)(le)),X(null)})).finally((()=>Q(!1)))}:()=>{Q(!0),m.c.dropAllValue().then((()=>{v.m4.success(N("successfully.deleted")),T((0,x.i2)(le)),X(null)})).finally((()=>Q(!1)))},text:U.restore?N("restore.modal.text"):N("read.carefully"),subTitle:U.restore?"":N("confirm.deletion"),loading:J,setText:Y})]})}},3952:(e,l,t)=>{t.d(l,{c:()=>c});var a=t(30800),n=t(99584);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=t(47164),s=function(e,l){return n.createElement(i.c,(0,a.c)((0,a.c)({},e),{},{ref:l,icon:o}))};s.displayName="PlusCircleOutlined";const c=n.forwardRef(s)},55512:(e,l,t)=>{t.d(l,{c:()=>c});var a=t(30800),n=t(99584);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=t(47164),s=function(e,l){return n.createElement(i.c,(0,a.c)((0,a.c)({},e),{},{ref:l,icon:o}))};s.displayName="TableOutlined";const c=n.forwardRef(s)}}]);