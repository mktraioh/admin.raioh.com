"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9036],{71376:(e,t,s)=>{s.d(t,{g:()=>u});var a=s(99584),l=s(95976),n=s.n(l),i=s(2664),d=s(37728),r=s(97884);const u=e=>{let{fetchOptions:t,debounceTimeout:s=400,onClear:l,...u}=e;const[c,o]=(0,a.useState)(!1),[m,h]=(0,a.useState)([]),g=(0,a.useMemo)((()=>n()((e=>{h([]),o(!0),t(e).then((e=>{h(e),o(!1)}))}),s)),[t,s]);return(0,r.jsx)(i.default,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:g,onClear:()=>{g(""),l&&l()},notFoundContent:c?(0,r.jsx)(d.c,{size:"small"}):"no results",...u,options:m,onFocus:()=>{g("")}})}},59036:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var a=s(99584),l=s(23424),n=s(61072),i=s(65732),d=s(68496),r=s(32712),u=s(18896),c=s(65236),o=s(83072),m=s.n(o),h=s(48664),g=s(77180),f=s(15652),b=s(11956),p=s(97884);const x=()=>{const{t:e}=(0,c.G)(),{activeMenu:t}=(0,r.w1)((e=>e.menu),r.G),s=(0,r.OY)(),[o]=i.c.useForm(),x=(0,l.i6)(),[v,j]=(0,a.useState)(!1),{id:y}=(0,l.W4)();(0,a.useEffect)((()=>()=>{const e=o.getFieldsValue(!0),a=JSON.stringify(e.send_to),l={...e,send_to:a};s((0,u.MH)({activeMenu:t,data:l}))}),[]);return(0,a.useEffect)((()=>{t.refetch&&(e=>{j(!0),h.c.getById(e).then((e=>{var t,s,a,l;const n={...e.data,send_to:m()(e.data.send_to,"YYYY-MM-DD HH:mm:ss"),has_date:!0,email_setting_id:{label:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(s=t.email_setting)||void 0===s?void 0:s.host,value:null===e||void 0===e||null===(a=e.data)||void 0===a||null===(l=a.email_setting)||void 0===l?void 0:l.id}};o.setFieldsValue(n)})).finally((()=>{j(!1),s((0,u.CO)(t))}))})(y)}),[t.refetch]),(0,p.jsx)(p.Fragment,{children:v?(0,p.jsx)(g.c,{}):(0,p.jsx)(d.default,{title:e("edit.subscriber"),className:"h-100",children:(0,p.jsx)(b.c,{type:"edit",form:o,handleSubmit:a=>{const l={...a,send_to:m()(a.send_to).format("YYYY-MM-DD HH:mm:ss"),email_setting_id:a.email_setting_id.value},i="message/subscriber";return h.c.update(y,l).then((()=>{n.m4.success(e("successfully.updated")),(0,r.wN)((()=>{s((0,f.w)({})),s((0,u.MF)({...t,nextUrl:i}))})),x("/".concat(i))}))}})})})}},11956:(e,t,s)=>{s.d(t,{c:()=>q});var a=s(99584),l=s(65732),n=s(68768),i=s(10260),d=s(46712),r=s(2664),u=s(73568),c=s(87228),o=s(71376),m=s(65236),h=s(86568),g=s(51872),f=s.n(g),b=s(52640),p=s(78544),x=s(97884);function v(e){let{form:t,lang:s,languages:a}=e;const{t:n}=(0,m.G)();return(0,x.jsx)("div",{className:"textEditor",children:(0,x.jsx)(l.c.Item,{label:n("newsletter.content"),name:"body",valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:!0,message:n("required")}],className:"description-editor",children:(0,x.jsx)(h.CKEditor,{editor:f(),config:{extraPlugins:[function(e){e.plugins.get("FileRepository").createUploadAdapter=e=>function(e){return{upload:()=>new Promise(((t,s)=>{const a=new FormData;e.file.then((e=>{a.append("image",e),a.append("type","blogs"),p.c.upload(a).then((e=>{let{data:s}=e;t({default:"".concat(b.cd+s.title)})})).catch((e=>{s(e)}))}))}))}}(e)}]},onChange:(e,t)=>{t.getData()},onBlur:(e,s)=>{const a=s.getData();t.setFieldsValue({body:a})}})})})}var j=s(83072),y=s.n(j),_=s(32712),w=s(38624);const Y=[{title:"order",value:"order"},{title:"subscribe",value:"subscribe"},{title:"verify",value:"verify"}];function q(e){let{type:t="add",form:s,handleSubmit:h}=e;const{t:g}=(0,m.G)(),{activeMenu:f}=(0,_.w1)((e=>e.menu),_.G),{defaultLang:b,languages:p}=(0,_.w1)((e=>e.formLang),_.G),{subscribers:j}=(0,_.w1)((e=>e.messageSubscriber),_.G),[q,F]=(0,a.useState)(!1);return(0,x.jsxs)(l.c,{name:"subscriber-form",layout:"vertical",onFinish:e=>{F(!0),h(e).finally((()=>F(!1)))},form:s,initialValues:{...f.data,...(()=>{const e=f.data;if(null===e||void 0===e||!e.send_to)return e;const t=e.send_to;return{...e,send_to:y()(t,"YYYY-MM-DD")}})()},className:"d-flex flex-column h-100",children:[(0,x.jsxs)(n.c,{gutter:12,children:[(0,x.jsx)(i.c,{span:12,children:(0,x.jsx)(l.c.Item,{label:g("subject"),name:"subject",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(d.default,{})})}),(0,x.jsx)(i.c,{span:12,children:(0,x.jsx)(l.c.Item,{label:g("type"),name:"type",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(r.default,{disabled:"edit"===t,options:Y.filter((e=>!j.some((t=>t.type===e.value)))),className:"w-100"})})}),(0,x.jsx)(i.c,{span:12,children:(0,x.jsx)(l.c.Item,{label:g("email.setting.id"),name:"email_setting_id",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(o.g,{fetchOptions:()=>w.c.get().then((e=>{let{data:t}=e;return t.map((e=>({label:null===e||void 0===e?void 0:e.host,value:null===e||void 0===e?void 0:e.id})))})),className:"w-100",placeholder:g("email.setting.id")})})}),(0,x.jsx)(i.c,{span:24,children:(0,x.jsx)(v,{languages:p,form:s,lang:b})}),(0,x.jsx)(i.c,{span:12,children:(0,x.jsx)(l.c.Item,{label:g("alt.body"),name:"alt_body",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(d.default,{})})}),(0,x.jsx)(i.c,{span:6,children:(0,x.jsx)(l.c.Item,{label:g("send.to"),name:"send_to",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(u.default,{showTime:!0,className:"w-100",disabledDate:e=>y()().add(-1,"days")>=e})})})]}),(0,x.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,x.jsx)("div",{className:"pb-5",children:(0,x.jsx)(c.c,{type:"primary",htmlType:"submit",loading:q,children:g("send")})})})]})}}}]);