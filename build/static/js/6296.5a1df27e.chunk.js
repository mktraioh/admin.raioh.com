"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6296],{16296:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});t(99584);var s=t(68496),l=t(87228),n=t(32712),i=t(65236),c=t(59440),o=t(97119),d=t(61072),r=t(18896),u=t(12636),m=t(34528),p=t(52640),h=t(97884);function f(){const{t:e}=(0,i.G)(),a=(0,n.OY)(),{activeMenu:t}=(0,n.w1)((e=>e.menu),n.G),f=e=>({uid:e.name,name:e.name,status:"done",url:e.name,created:!0});return(0,h.jsxs)(s.default,{title:e("import"),children:[(0,h.jsx)(l.c,{type:"primary",className:"mb-4",onClick:()=>{const e=p.Ut+"import-example/brands.xlsx";window.location.href=e},children:e("download.csv")}),(0,h.jsxs)(c.c,{name:"file",multiple:!1,maxCount:1,customRequest:s=>{let{file:l,onSuccess:n}=s;const i=new FormData;i.append("file",l),u.c.import(i).then((s=>{d.m4.success(e("successfully.import")),a((0,r.MH)({activeMenu:t,data:f(l)})),n("ok"),a((0,m.UL)())}))},defaultFileList:null!==t&&void 0!==t&&t.data?[null===t||void 0===t?void 0:t.data]:null,accept:".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",children:[(0,h.jsx)("p",{className:"ant-upload-drag-icon",children:(0,h.jsx)(o.c,{})}),(0,h.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,h.jsx)("p",{className:"ant-upload-hint",children:"Import brands from file to this area"})]})]})}}}]);