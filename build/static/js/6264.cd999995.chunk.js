"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6264],{1428:(e,t,a)=>{a.d(t,{c:()=>o});a(99584);var l=a(87228),c=a(59424),d=a(61072),s=a(65236),i=a(75088),n=a(97884);function o(e){let{size:t="",onClick:a,type:o="default",...r}=e;const{t:u}=(0,s.G)(),{isDemo:h}=(0,i.c)();return(0,n.jsx)(l.c,{size:t,icon:(0,n.jsx)(c.c,{}),onClick:e=>{h?d.m4.warning(u("cannot.work.demo")):a(e)},type:o,...r})}},53992:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(99584),c=a(49308),d=a(92200),s=a(66296),i=a(26012),n=a(72192),o=a(35928),r=a(87228),u=a(55512),h=a(65236),v=a(97884);const{Text:g}=c.default,m=e=>{let{columns:t=[],setColumns:a,style:c,size:m="",iconOnly:p}=e;const{t:x}=(0,h.G)(),[b,f]=(0,l.useState)(!1),j=(0,v.jsx)(d.c,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,v.jsx)(d.c.Item,{children:(0,v.jsxs)(s.c,{className:"d-flex justify-content-between",children:[(0,v.jsx)(g,{children:e.title}),(0,v.jsx)(i.c,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(l)}(e),disabled:1===l})]})},e+l)))});return(0,v.jsx)(n.c,{overlay:j,trigger:["click"],onVisibleChange:e=>{f(e)},visible:b,children:(0,v.jsx)(o.c,{title:x("change.columns"),children:(0,v.jsx)(r.c,{style:{...c},size:m,icon:(0,v.jsx)(u.c,{}),children:p?null:x("Columns")})})})}},19576:(e,t,a)=>{function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{c:()=>l})},56264:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var l=a(99584),c=a(72092),d=a(36668),s=a(20108),i=a(59424),n=a(3952),o=a(84616),r=a(87968),u=a(26012),h=a(66296),v=a(35928),g=a(87228),m=a(68496),p=a(15752),x=a(61072),b=a(46003),f=a(98016),j=a(32712),y=a(23424),_=a(18896),w=a(68752),C=a(68256),k=a(19576),z=a(46640),M=a(65236),H=a(1428),V=a(53992),S=a(52640),I=a(83072),Y=a.n(I),O=a(97884);const P=["published","deleted_at"],{TabPane:D}=o.default;function G(){var e,t,a,I;const{t:G}=(0,M.G)(),N=(0,j.OY)(),E=(0,y.i6)(),[K,R]=(0,l.useState)([{title:G("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:G("title"),dataIndex:"translation",key:"translation",render:e=>null===e||void 0===e?void 0:e.title,is_show:!0},{title:G("image"),dataIndex:"img",render:(e,t)=>(0,O.jsx)(r.c,{width:150,height:100,src:t.deleted_at?"https://fakeimg.pl/640x360":S.cd+e,placeholder:!0,className:"rounded",style:{objectFit:"contain"}}),is_show:!0},{title:G("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:(e,t)=>(0,O.jsx)("span",{children:Y()(e).format("MMM DD YYYY hh:mm A")})},{title:G("published.at"),dataIndex:"published_at",key:"published_at",is_show:!0,render:e=>(0,O.jsx)("div",{children:e?Y()(e).format("MMM DD YYYY"):(0,O.jsx)("span",{children:G("unpublished")})})},{title:G("active"),dataIndex:"active",key:"active",render:(e,t)=>(0,O.jsx)(u.c,{disabled:t.deleted_at,checked:e,onChange:()=>{A(t.uuid),F(!1),J(!1),T(!0)}}),is_show:!0},{title:G("options"),key:"options",dataIndex:"options",render:(e,t)=>(0,O.jsxs)(h.c,{children:[(0,O.jsx)(v.c,{title:G("publish"),children:(0,O.jsx)(g.c,{disabled:(null===t||void 0===t?void 0:t.deleted_at)||(null===t||void 0===t?void 0:t.published_at)||!t.active,icon:(0,O.jsx)(c.c,{}),onClick:()=>{A(t.uuid),F(!1),J(!0),T(!0)}})}),(0,O.jsx)(g.c,{disabled:t.deleted_at,type:"primary",icon:(0,O.jsx)(d.c,{}),onClick:()=>(e=>{N((0,_.WC)({url:"blog/".concat(e.uuid),id:"blog_edit",name:G("edit.blog")})),E("/blog/".concat(e.uuid))})(t)}),(0,O.jsx)(g.c,{icon:(0,O.jsx)(s.c,{}),onClick:()=>(e=>{N((0,_.WC)({url:"blog/clone/".concat(e.uuid),id:"blog_clone",name:G("clone.blog")})),E("/blog/clone/".concat(e.uuid))})(t),disabled:t.deleted_at}),(0,O.jsx)(H.c,{disabled:t.deleted_at,icon:(0,O.jsx)(i.c,{}),onClick:()=>{A([t.id]),F(!0),J(!1),T(!0)}})]}),is_show:!0}]),{setIsModalVisible:T}=(0,l.useContext)(f.e),[W,A]=(0,l.useState)(null),[B,F]=(0,l.useState)(!1),[q,J]=(0,l.useState)(!1),[L,Q]=(0,l.useState)(!1),[U,X]=(0,l.useState)("published"),{activeMenu:Z}=(0,j.w1)((e=>e.menu),j.G),$=(null===(e=Z.data)||void 0===e?void 0:e.role)||U,{blogs:ee,meta:te,loading:ae,params:le}=(0,j.w1)((e=>e.blog),j.G),ce=Z.data,de={sort:null===ce||void 0===ce?void 0:ce.sort,column:null===ce||void 0===ce?void 0:ce.column,perPage:null===ce||void 0===ce?void 0:ce.perPage,page:null===ce||void 0===ce?void 0:ce.page,status:"deleted_at"===$?void 0:$,deleted_at:"deleted_at"===$?$:void 0};(0,l.useEffect)((()=>{Z.refetch&&(N((0,w.y)(de)),N((0,_.CO)(Z)))}),[Z.refetch]),(0,C.c)((()=>{N((0,w.y)(de))}),[Z.data]);const se={selectedRowKeys:W,onChange:e=>{A(e)}};return(0,O.jsxs)(m.default,{title:G("blogs"),extra:(0,O.jsxs)(h.c,{wrap:!0,children:["deleted_at"!==$&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(g.c,{type:"primary",icon:(0,O.jsx)(n.c,{}),onClick:()=>{N((0,_.WC)({id:"blogs",url:"blog/add",name:G("add.blog")})),E("/blog/add")},children:G("add.blog")}),(0,O.jsx)(H.c,{size:"",onClick:()=>{null===W||0===W.length?x.m4.warning(G("select.the.product")):T(!0)},children:G("delete.selected")})]}),(0,O.jsx)(V.c,{setColumns:R,columns:K})]}),children:[(0,O.jsx)(o.default,{className:"mt-3",activeKey:$,onChange:e=>{(e=>{const t=Z.data;N((0,_.MH)({activeMenu:Z,data:{...t,...e}}))})({role:e,page:1}),X(e)},type:"card",children:P.map((e=>(0,O.jsx)(D,{tab:G(e)},e)))}),(0,O.jsx)(p.c,{scroll:{x:!0},rowSelection:se,columns:K.filter((e=>e.is_show)),dataSource:ee,pagination:{pageSize:le.perPage,page:(null===(t=Z.data)||void 0===t?void 0:t.page)||1,total:te.total,defaultCurrent:null===(a=Z.data)||void 0===a?void 0:a.page,current:null===(I=Z.data)||void 0===I?void 0:I.page},rowKey:e=>e.id,onChange:function(e,t,a){const{pageSize:l,current:c}=e,{field:d,order:s}=a,i=(0,k.c)(s);N((0,_.MH)({activeMenu:Z,data:{...Z.data,perPage:l,page:c,column:d,sort:i}}))},loading:ae}),(0,O.jsx)(b.c,{click:q?()=>{Q(!0),z.c.publish(W).then((()=>{x.m4.success(G("successfully.updated")),N((0,w.y)()),T(!1)})).finally((()=>Q(!1)))}:B?()=>{Q(!0);const e={...Object.assign({},...W.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};z.c.delete(e).then((()=>{x.m4.success(G("successfully.deleted")),N((0,w.y)()),T(!1)})).finally((()=>Q(!1)))}:()=>{Q(!0),z.c.setActive(W).then((()=>{x.m4.success(G("successfully.updated")),N((0,w.y)()),T(!1)})).finally((()=>Q(!1)))},text:G(q?"publish.blog":B?"delete.blog":"set.active.blog"),loading:L})]})}},3952:(e,t,a)=>{a.d(t,{c:()=>n});var l=a(30800),c=a(99584);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var s=a(47164),i=function(e,t){return c.createElement(s.c,(0,l.c)((0,l.c)({},e),{},{ref:t,icon:d}))};i.displayName="PlusCircleOutlined";const n=c.forwardRef(i)},55512:(e,t,a)=>{a.d(t,{c:()=>n});var l=a(30800),c=a(99584);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var s=a(47164),i=function(e,t){return c.createElement(s.c,(0,l.c)((0,l.c)({},e),{},{ref:t,icon:d}))};i.displayName="TableOutlined";const n=c.forwardRef(i)}}]);