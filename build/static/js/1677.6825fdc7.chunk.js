"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1677],{64408:(e,i,a)=>{function d(e){var i,a;let d=null===e||void 0===e?void 0:e.slice(0,1),t=null===e||void 0===e?void 0:e.lastIndexOf("@"),l=null===e||void 0===e?void 0:e.slice(1,t-1);l=null===(i=l)||void 0===i?void 0:i.replace(/./g,"*");let n=null===e||void 0===e?void 0:e.slice(t-1,e.length);return null===d||void 0===d||null===(a=d.concat(l))||void 0===a?void 0:a.concat(n)}a.d(i,{c:()=>d})},1677:(e,i,a)=>{a.r(i),a.d(i,{default:()=>C});var d=a(99584),t=a(84616),l=a(65732),n=a(68496),o=a(23424),s=a(83072),r=a.n(s),v=a(42080),u=a(77180),c=a(73536),h=a(32712),m=a(18896),f=a(65236),g=a(24520),p=a(70496),b=a(49580),x=a(63400),j=a(45392),w=a(75088),y=a(64408),_=a(97884);const{TabPane:k}=t.default,C=()=>{var e;const{t:i}=(0,f.G)(),[a]=l.c.useForm(),{activeMenu:s}=(0,h.w1)((e=>e.menu),h.G),C=(0,h.OY)(),{uuid:S}=(0,o.W4)(),[I,M]=(0,d.useState)(!1),[O,F]=(0,d.useState)("edit"),[G,P]=(0,d.useState)([]),[z,B]=(0,d.useState)(null),D=null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.role,{isDemo:E}=(0,w.c)();(0,d.useEffect)((()=>{null!==s&&void 0!==s&&s.refetch&&(e=>{M(!0),v.c.getById(e).then((e=>{var i,d;const t=e.data,l={...t,image:t.img?(0,b.c)(t.img):[]};C((0,m.MH)({activeMenu:s,data:l})),a.setFieldsValue({firstname:t.firstname,lastname:t.lastname,email:E?(0,y.c)(t.email):t.email,phone:t.phone,birthday:r()(t.birthday),gender:t.gender,password_confirmation:t.password_confirmation,password:t.password,shop_id:0!==t.invitations.length?t.invitations.map((e=>{var i,a,d;return{label:null===(i=e.shop)||void 0===i||null===(a=i.translation)||void 0===a?void 0:a.title,value:null===(d=e.shop)||void 0===d?void 0:d.id}})):void 0}),P(t.img?[(0,b.c)(t.img)]:[]),B(null===(i=e.data)||void 0===i||null===(d=i.delivery_man_setting)||void 0===d?void 0:d.id)})).finally((()=>{M(!1),C((0,m.CO)(s))}))})(S)}),[null===s||void 0===s?void 0:s.refetch]);return(0,_.jsx)(n.default,{title:i("user.settings"),children:I?(0,_.jsx)(u.c,{}):(0,_.jsxs)(t.default,{activeKey:O,onChange:e=>F(e),tabPosition:"left",size:"small",children:[(0,_.jsx)(k,{tab:i("edit.user"),children:(0,_.jsx)(c.c,{data:null===s||void 0===s?void 0:s.data,form:a,image:G,setImage:P,action_type:"edit"})},"edit"),"cook"===D&&(0,_.jsx)(k,{tab:i("orders"),children:(0,_.jsx)(g.c,{data:null===s||void 0===s?void 0:s.data})},"order"),"deliveryman"===D&&(0,_.jsx)(k,{tab:i("deliveryman"),children:(0,_.jsx)(j.c,{id:z,data:s.data})},"delivery"),(0,_.jsx)(k,{tab:i("wallet"),children:(0,_.jsx)(p.c,{data:null===s||void 0===s?void 0:s.data})},"wallet"),(0,_.jsx)(k,{tab:i("password"),children:(0,_.jsx)(x.c,{data:null===s||void 0===s?void 0:s.data})},"password")]})})}}}]);