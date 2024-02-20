"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8968],{71376:(e,t,s)=>{s.d(t,{g:()=>c});var a=s(99584),n=s(95976),l=s.n(n),r=s(2664),i=s(37728),d=s(97884);const c=e=>{let{fetchOptions:t,debounceTimeout:s=400,onClear:n,...c}=e;const[u,o]=(0,a.useState)(!1),[m,h]=(0,a.useState)([]),g=(0,a.useMemo)((()=>l()((e=>{h([]),o(!0),t(e).then((e=>{h(e),o(!1)}))}),s)),[t,s]);return(0,d.jsx)(r.default,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:g,onClear:()=>{g(""),n&&n()},notFoundContent:u?(0,d.jsx)(i.c,{size:"small"}):"no results",...c,options:m,onFocus:()=>{g("")}})}},18968:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=s(99584),n=s(23424),l=s(61072),r=s(65732),i=s(68496),d=s(32712),c=s(18896),u=s(65236),o=s(83072),m=s.n(o),h=s(48664),g=s(15652),b=s(11956),f=s(97884);const p=()=>{const{t:e}=(0,u.G)(),{activeMenu:t}=(0,d.w1)((e=>e.menu),d.G),s=(0,d.OY)(),[o]=r.c.useForm(),p=(0,n.i6)();(0,a.useEffect)((()=>()=>{const e=o.getFieldsValue(!0);s((0,c.MH)({activeMenu:t,data:e}))}),[]);return(0,f.jsx)(i.default,{title:e("add.subscriber"),className:"h-100",children:(0,f.jsx)(b.c,{form:o,handleSubmit:a=>{const n={...a,type:a.type,email_setting_id:a.email_setting_id.value,send_to:m()(a.send_to).format("YYYY-MM-DD HH:mm:ss")},r="message/subscriber";return h.c.create(n).then((()=>{l.m4.success(e("successfully.created")),(0,d.wN)((()=>{s((0,c.MF)({...t,nextUrl:r})),s((0,g.w)({}))})),p("/".concat(r))}))}})})}},11956:(e,t,s)=>{s.d(t,{c:()=>N});var a=s(99584),n=s(65732),l=s(68768),r=s(10260),i=s(46712),d=s(2664),c=s(73568),u=s(87228),o=s(71376),m=s(65236),h=s(86568),g=s(51872),b=s.n(g),f=s(52640),p=s(78544),x=s(97884);function j(e){let{form:t,lang:s,languages:a}=e;const{t:l}=(0,m.G)();return(0,x.jsx)("div",{className:"textEditor",children:(0,x.jsx)(n.c.Item,{label:l("newsletter.content"),name:"body",valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:!0,message:l("required")}],className:"description-editor",children:(0,x.jsx)(h.CKEditor,{editor:b(),config:{extraPlugins:[function(e){e.plugins.get("FileRepository").createUploadAdapter=e=>function(e){return{upload:()=>new Promise(((t,s)=>{const a=new FormData;e.file.then((e=>{a.append("image",e),a.append("type","blogs"),p.c.upload(a).then((e=>{let{data:s}=e;t({default:"".concat(f.cd+s.title)})})).catch((e=>{s(e)}))}))}))}}(e)}]},onChange:(e,t)=>{t.getData()},onBlur:(e,s)=>{const a=s.getData();t.setFieldsValue({body:a})}})})})}var v=s(83072),y=s.n(v),w=s(32712),_=s(38624);const q=[{title:"order",value:"order"},{title:"subscribe",value:"subscribe"},{title:"verify",value:"verify"}];function N(e){let{type:t="add",form:s,handleSubmit:h}=e;const{t:g}=(0,m.G)(),{activeMenu:b}=(0,w.w1)((e=>e.menu),w.G),{defaultLang:f,languages:p}=(0,w.w1)((e=>e.formLang),w.G),{subscribers:v}=(0,w.w1)((e=>e.messageSubscriber),w.G),[N,F]=(0,a.useState)(!1);return(0,x.jsxs)(n.c,{name:"subscriber-form",layout:"vertical",onFinish:e=>{F(!0),h(e).finally((()=>F(!1)))},form:s,initialValues:{...b.data,...(()=>{const e=b.data;if(null===e||void 0===e||!e.send_to)return e;const t=e.send_to;return{...e,send_to:y()(t,"YYYY-MM-DD")}})()},className:"d-flex flex-column h-100",children:[(0,x.jsxs)(l.c,{gutter:12,children:[(0,x.jsx)(r.c,{span:12,children:(0,x.jsx)(n.c.Item,{label:g("subject"),name:"subject",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(i.default,{})})}),(0,x.jsx)(r.c,{span:12,children:(0,x.jsx)(n.c.Item,{label:g("type"),name:"type",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(d.default,{disabled:"edit"===t,options:q.filter((e=>!v.some((t=>t.type===e.value)))),className:"w-100"})})}),(0,x.jsx)(r.c,{span:12,children:(0,x.jsx)(n.c.Item,{label:g("email.setting.id"),name:"email_setting_id",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(o.g,{fetchOptions:()=>_.c.get().then((e=>{let{data:t}=e;return t.map((e=>({label:null===e||void 0===e?void 0:e.host,value:null===e||void 0===e?void 0:e.id})))})),className:"w-100",placeholder:g("email.setting.id")})})}),(0,x.jsx)(r.c,{span:24,children:(0,x.jsx)(j,{languages:p,form:s,lang:f})}),(0,x.jsx)(r.c,{span:12,children:(0,x.jsx)(n.c.Item,{label:g("alt.body"),name:"alt_body",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(i.default,{})})}),(0,x.jsx)(r.c,{span:6,children:(0,x.jsx)(n.c.Item,{label:g("send.to"),name:"send_to",rules:[{required:!0,message:g("required")}],children:(0,x.jsx)(c.default,{showTime:!0,className:"w-100",disabledDate:e=>y()().add(-1,"days")>=e})})})]}),(0,x.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,x.jsx)("div",{className:"pb-5",children:(0,x.jsx)(u.c,{type:"primary",htmlType:"submit",loading:N,children:g("send")})})})]})}}}]);