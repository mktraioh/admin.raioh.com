"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3804],{13804:(a,e,t)=>{t.r(e),t.d(e,{default:()=>y});var i=t(99584),d=t(84616),l=t(65732),s=t(68496),n=t(23424),o=t(83072),r=t(42080),u=t(77180),v=t(73536),c=t(32712),h=t(18896),m=t(65236),f=t(24520),b=t(70496),g=t(49580),p=t(63400),j=t(45392),x=t(97884);const{TabPane:w}=d.default,y=()=>{var a;const{t:e}=(0,m.G)(),[t]=l.c.useForm(),{activeMenu:y}=(0,c.w1)((a=>a.menu),c.G),_=(0,c.OY)(),{uuid:k}=(0,n.W4)(),[C,S]=(0,i.useState)(!1),[M,F]=(0,i.useState)("edit"),[G,I]=(0,i.useState)([]),[O,P]=(0,i.useState)(null),z=null===y||void 0===y||null===(a=y.data)||void 0===a?void 0:a.role;(0,i.useEffect)((()=>{null!==y&&void 0!==y&&y.refetch&&(a=>{S(!0),r.c.getById(a).then((a=>{var e,i;const d=a.data,l={...d,image:(0,g.c)(d.img)};_((0,h.MH)({activeMenu:y,data:l})),t.setFieldsValue({firstname:d.firstname,lastname:d.lastname,email:d.email,phone:d.phone,birthday:o(d.birthday),gender:d.gender,password_confirmation:d.password_confirmation,password:d.password,image:[(0,g.c)(d.img)],shop_id:0!==d.invitations.length?d.invitations.map((a=>{var e,t,i;return{label:null===(e=a.shop)||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===(i=a.shop)||void 0===i?void 0:i.id}})):void 0}),P(null===(e=a.data)||void 0===e||null===(i=e.delivery_man_setting)||void 0===i?void 0:i.id),I([(0,g.c)(d.img)])})).finally((()=>{S(!1),_((0,h.CO)(y))}))})(k)}),[null===y||void 0===y?void 0:y.refetch]);return(0,x.jsx)(s.default,{title:e("user.settings"),children:C?(0,x.jsx)(u.c,{}):(0,x.jsxs)(d.default,{activeKey:M,onChange:a=>{F(a)},tabPosition:"left",size:"small",children:[(0,x.jsx)(w,{tab:e("edit.user"),children:(0,x.jsx)(v.c,{data:null===y||void 0===y?void 0:y.data,form:t,image:G,setImage:I})},"edit"),(0,x.jsx)(w,{tab:e("orders"),children:(0,x.jsx)(f.c,{data:null===y||void 0===y?void 0:y.data})},"order"),"deliveryman"===z&&(0,x.jsx)(w,{tab:e("deliveryman"),children:(0,x.jsx)(j.c,{id:O,data:y.data})},"delivery"),(0,x.jsx)(w,{tab:e("wallet"),children:(0,x.jsx)(b.c,{data:null===y||void 0===y?void 0:y.data})},"wallet"),(0,x.jsx)(w,{tab:e("password"),children:(0,x.jsx)(p.c,{data:null===y||void 0===y?void 0:y.data})},"password")]})})}}}]);