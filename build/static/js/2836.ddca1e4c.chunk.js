"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2836],{2836:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var i=a(99584),l=a(23424),n=a(61072),s=a(67692),c=a(65732),d=a(68496),o=a(32712),u=a(18896),r=a(65236),v=a(424),g=a(70424),m=a(94792),p=a(52640),h=a(97884);const{Step:_}=s.default,f=()=>{var t,e,a,f,k,x,S,b,j;const{t:y}=(0,r.G)(),{activeMenu:w}=(0,o.w1)((t=>t.menu),o.G),F=(0,o.OY)(),[C]=c.c.useForm(),M=(0,l.i6)(),q=t=>({name:t,url:p.cd+t}),[G,V]=(0,i.useState)(null!==(t=w.data)&&void 0!==t&&null!==(e=t.galleries)&&void 0!==e&&e[0]?[q(null===(a=w.data)||void 0===a||null===(f=a.galleries)||void 0===f?void 0:f[0].path)]:[]),[B,E]=(0,i.useState)(null!==(k=w.data)&&void 0!==k&&null!==(x=k.galleries)&&void 0!==x&&x[1]?[q(null===(S=w.data)||void 0===S||null===(b=S.galleries)||void 0===b?void 0:b[1].path)]:[]),H=[...G,...B],[I,N]=(0,i.useState)((null===(j=w.data)||void 0===j?void 0:j.step)||0),O=()=>{N(I+1)},U=()=>{N(I-1)},[Y,z]=(0,i.useState)(!1);(0,i.useEffect)((()=>()=>{const t=C.getFieldsValue(!0);F((0,u.MH)({activeMenu:w,data:t}))}),[]);return(0,h.jsx)(d.default,{title:y("add.recepe"),extra:(0,h.jsx)(v.c,{}),children:(0,h.jsxs)(c.c,{layout:"vertical",onFinish:t=>{var e;C.validateFields();const a={...t,images:H.map((t=>t.name)),category_id:t.category_id.value,shop_id:t.shop_id.value,active_time:t.active_time.toString(),total_time:t.total_time.toString(),nutrition:t.nutrition.map((t=>({...t,percentage:String(t.percentage),weight:String(t.weight)}))),stocks:null===(e=t.stocks)||void 0===e?void 0:e.map((t=>({min_quantity:t.min_quantity,stock_id:t.stock_id.value})))};z(!0);const i="catalog/recept";m.c.create(a).then((()=>{n.m4.success(y("successfully.created")),M("/".concat(i)),F((0,u.MF)({...w,nextUrl:i}))})).finally((()=>z(!1)))},form:C,initialValues:{active:!0,...w.data},children:[(0,h.jsx)(s.default,{current:I,children:g.C.map((t=>(0,h.jsx)(_,{title:y(t.title)},t.title)))}),g.C.map((t=>{const e=t.content;return(0,h.jsx)("div",{className:"steps-content ".concat(t.step!==I+1&&"hidden"),children:(0,h.jsx)(e,{next:O,prev:U,loading:Y,image:G,setImage:V,back:B,setBack:E})},t.title)}))]})})}}}]);