"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1268],{81268:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var d=t(99584),l=t(68496),i=t(87228),n=t(32712),s=t(65236),o=t(59440),u=t(72092),c=t(97119),p=t(33012);const r={upload:e=>p.c.post("dashboard/admin/project-upload",e),update:e=>p.c.post("dashboard/admin/project-update",e)};var h=t(18896),m=t(61072),f=t(97884);function b(){const[e,a]=(0,d.useState)(!1),t=(0,n.OY)(),{t:p}=(0,s.G)(),{activeMenu:b}=(0,n.w1)((e=>e.menu),n.G),g=e=>({uid:e.title,name:e.title,status:"done",url:e.title,created:!0});return(0,f.jsx)(l.default,{title:p("update"),extra:(0,f.jsx)(i.c,{type:"primary",icon:(0,f.jsx)(u.c,{}),loading:e,onClick:()=>{a(!0),r.update().then((()=>m.m4.success(p("successfully.updated")))).finally((()=>a(!1)))},children:p("update.database")}),children:(0,f.jsxs)(o.c,{name:"file",multiple:!1,maxCount:1,customRequest:e=>{let{file:a,onSuccess:d}=e;const l=new FormData;l.append("file",a),r.upload(l).then((e=>{let{data:a}=e;t((0,h.MH)({activeMenu:b,data:g(a)})),d("ok")}))},defaultFileList:null!==b&&void 0!==b&&b.data?[null===b||void 0===b?void 0:b.data]:null,beforeUpload:e=>{const a="image/png"===e.type,t="image/jpg"===e.type,d="image/jpeg"===e.type;if(a||d||t)return m.m4.error("".concat(e.name," is not valid file")),!1},children:[(0,f.jsx)("p",{className:"ant-upload-drag-icon",children:(0,f.jsx)(c.c,{})}),(0,f.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,f.jsx)("p",{className:"ant-upload-hint",children:"In order to update database using this file you need to click button above"})]})})}}}]);