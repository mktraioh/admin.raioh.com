(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5808],{20556:(e,t,s)=>{"use strict";s.d(t,{W:()=>i});var n=s(23424),a=s(84620),c=s.n(a);const i=()=>{const e=(0,n.i6)(),t=(0,n.IT)(),s=c().parse(t.search,{ignoreQueryPrefix:!0});return{values:s,set:(t,n)=>e({search:c().stringify({...s,[t]:n})}),reset:t=>{const n={...s};n[t]&&delete n[t],e({search:c().stringify({...n})})},clear:()=>e({search:c().stringify({})}),merge:t=>e({search:c().stringify({...s,...t})})}}},27424:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var n=s(99584),a=s(22112),c=s(67692),i=s(68496),r=s(37728),d=s(80956),l=s(87904),o=s(51432),u=s(32176),h=s(68648),f=s(424),v=s(23424),x=s(32712),p=s(18896),j=s(65236),m=s(20556),g=s(68660),y=s(97884);const{Step:C}=c.default,b=()=>{var e;const{t:t}=(0,j.G)(),{id:s}=(0,v.W4)(),b=(0,m.W)(),{activeMenu:k}=(0,x.w1)((e=>e.menu),x.G),q=(0,x.OY)(),_=Number((null===(e=b.values)||void 0===e?void 0:e.step)||0),[M,R]=(0,n.useState)(k.refetch),F=()=>{const e=_+1;b.set("step",e)},N=()=>{const e=_-1;b.set("step",e)};(0,n.useEffect)((()=>{var e;k.refetch&&(e=s,R(!0),g.c.getById(e).then((e=>{var t;let s=e.data.data;q((0,p.MH)({activeMenu:k,data:{...s,request_id:e.data.id,actualStocks:null===(t=e.data.model)||void 0===t?void 0:t.stocks,model_id:e.data.model_id,model:e.data.model}}))})).finally((()=>{R(!1),q((0,p.CO)(k))})))}),[k.refetch,s]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.default,{title:t("edit.food"),extra:(0,y.jsx)(f.c,{}),children:(0,y.jsx)(c.default,{current:_,onChange:e=>{q((0,p.MH)({activeMenu:k,data:{...k.data,step:e}})),b.set("step",e)},children:a.C.map((e=>(0,y.jsx)(C,{title:t(e.title)},e.title)))})}),M?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,y.jsx)(r.c,{size:"large",className:"py-5"})}):(0,y.jsxs)("div",{className:"",children:["First-content"===a.C[_].content&&(0,y.jsx)(h.c,{isRequest:!0,next:F,action_type:"edit"}),"Second-content"===a.C[_].content&&(0,y.jsx)(u.c,{isRequest:!0,next:F,prev:N}),"Third-content"===a.C[_].content&&(0,y.jsx)(o.c,{isRequest:!0,next:F,prev:N}),"Fourth-content"===a.C[_].content&&(0,y.jsx)(d.c,{isRequest:!0,next:F,prev:N}),"Finish-content"===a.C[_].content&&(0,y.jsx)(l.c,{isRequest:!0,prev:N})]})]})}},16204:()=>{}}]);