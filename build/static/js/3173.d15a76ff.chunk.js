"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3173],{53992:(t,e,l)=>{l.d(e,{c:()=>x});var o=l(99584),a=l(49308),n=l(92200),c=l(66296),s=l(26012),i=l(72192),d=l(35928),r=l(87228),u=l(55512),v=l(65236),h=l(97884);const{Text:p}=a.default,x=t=>{let{columns:e=[],setColumns:l,style:a,size:x="",iconOnly:m}=t;const{t:f}=(0,v.G)(),[g,_]=(0,o.useState)(!1),k=(0,h.jsx)(n.c,{children:null===e||void 0===e?void 0:e.map(((t,o)=>(0,h.jsx)(n.c.Item,{children:(0,h.jsxs)(c.c,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:t.title}),(0,h.jsx)(s.c,{defaultChecked:!0,onClick:()=>function(t){const o=null===e||void 0===e?void 0:e.map((e=>(e.dataIndex===t.dataIndex&&(e.is_show=!(null!==e&&void 0!==e&&e.is_show)),e)));l(o)}(t),disabled:1===o})]})},t+o)))});return(0,h.jsx)(i.c,{overlay:k,trigger:["click"],onVisibleChange:t=>{_(t)},visible:g,children:(0,h.jsx)(d.c,{title:f("change.columns"),children:(0,h.jsx)(r.c,{style:{...a},size:x,icon:(0,h.jsx)(u.c,{}),children:m?null:f("Columns")})})})}},53173:(t,e,l)=>{l.r(e),l.d(e,{default:()=>j});var o=l(98044),a=l(68768),n=l(10260),c=l(68496),s=l(66296),i=l(2664),d=l(87228),r=l(15752),u=l(99584),v=l(34296),h=l(32712),p=l(15344),x=l(18896),m=l(53992),f=l(87768),g=l(68256),_=l(65236),k=l(23424),w=l(97884);const j=()=>{var t;const e=(0,h.OY)(),{t:l}=(0,_.G)(),j=(0,k.i6)(),{activeMenu:C}=(0,h.w1)((t=>t.menu),h.G),{loading:b,productList:y}=(0,h.w1)((t=>t.stockReport),h.G),[z,H]=(0,u.useState)([]),[S,V]=(0,u.useState)(!1),[I,O]=(0,u.useState)((null===C||void 0===C||null===(t=C.data)||void 0===t?void 0:t.value)||null),[M,q]=(0,u.useState)([{title:"Product title",dataIndex:"product_translation_title",key:"product_translation_title",render:(t,o)=>{var a;return(0,w.jsx)("a",{onClick:()=>{return t=o,e((0,x.WC)({url:"report/products",id:"report.products",name:l("report.products")})),void j("/report/products?product_id=".concat(t.id));var t},children:null===o||void 0===o||null===(a=o.translation)||void 0===a?void 0:a.title})},is_show:!0,sorter:(t,e)=>{var l,o;return null===t||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title.localeCompare(null===e||void 0===e||null===(o=e.translation)||void 0===o?void 0:o.title)}},{title:"Bar code",dataIndex:"product_bar_code",key:"product_bar_code",is_show:!0,render:(t,e)=>(0,w.jsx)(w.Fragment,{children:(null===e||void 0===e?void 0:e.bar_code)||"-"})},{title:"Status",key:"status",dataIndex:"status",render:(t,e)=>(0,w.jsx)(o.c,{children:e.status},e.id),is_show:!0},{title:"Stock",key:"stock",dataIndex:"quantity",render:(t,e)=>null===e||void 0===e?void 0:e.stocks_sum_quantity,is_show:!0,sorter:(t,e)=>(null===t||void 0===t?void 0:t.stocks_sum_quantity)-(null===e||void 0===e?void 0:e.stocks_sum_quantity)}]),G={page:C.page,perPage:C.perPage,actual:I},N=t=>{e((0,f.ae)(t))};(0,g.c)((()=>{N(G)}),[I]),(0,u.useEffect)((()=>{C.refetch&&(N(G),e((0,x.CO)(C)))}),[C.refetch]);const P={selectedRowKeys:z,onChange:t=>H(t)};return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(a.c,{gutter:24,children:(0,w.jsx)(n.c,{span:24,children:(0,w.jsxs)(c.default,{title:l("stock"),children:[(0,w.jsxs)(s.c,{className:"d-flex justify-content-end",children:[(0,w.jsx)(i.default,{style:{width:"200px"},onChange:t=>O(t),options:[{value:null,label:"All products"},{value:"in_stock",label:"In stock"},{value:"low_stock",label:"Low stock"},{value:"out_of_stock",label:"Out of stock"}],defaultValue:(null===C||void 0===C?void 0:C.data)||null}),(0,w.jsx)(d.c,{icon:(0,w.jsx)(v.c,{}),loading:S,onClick:()=>{V(!0),p.c.getStocks({export:"excel",actual:I}).then((t=>{const e=t.data.link;e&&(window.location.href=e)})).finally((()=>V(!1)))},children:l("download")}),(0,w.jsx)(m.c,{columns:M,setColumns:q})]}),(0,w.jsx)(r.c,{scroll:{x:!0},rowSelection:P,columns:null===M||void 0===M?void 0:M.filter((t=>t.is_show)),dataSource:y.data||[],rowKey:t=>t.id,loading:b,pagination:{pageSize:null===y||void 0===y?void 0:y.per_page,page:(null===y||void 0===y?void 0:y.current_page)||1,total:null===y||void 0===y?void 0:y.total,defaultCurrent:1},onChange:t=>{const{pageSize:e,current:l}=t;N({page:l,perPage:e,actual:I})}})]})})})})}},34296:(t,e,l)=>{l.d(e,{c:()=>i});var o=l(30800),a=l(99584);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"};var c=l(47164),s=function(t,e){return a.createElement(c.c,(0,o.c)((0,o.c)({},t),{},{ref:e,icon:n}))};s.displayName="CloudDownloadOutlined";const i=a.forwardRef(s)},55512:(t,e,l)=>{l.d(e,{c:()=>i});var o=l(30800),a=l(99584);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var c=l(47164),s=function(t,e){return a.createElement(c.c,(0,o.c)((0,o.c)({},t),{},{ref:e,icon:n}))};s.displayName="TableOutlined";const i=a.forwardRef(s)}}]);