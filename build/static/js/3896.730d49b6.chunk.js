(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3896],{20556:(t,e,a)=>{"use strict";a.d(e,{W:()=>c});var n=a(23424),s=a(84620),i=a.n(s);const c=()=>{const t=(0,n.i6)(),e=(0,n.IT)(),a=i().parse(e.search,{ignoreQueryPrefix:!0});return{values:a,set:(e,n)=>t({search:i().stringify({...a,[e]:n})}),reset:e=>{const n={...a};n[e]&&delete n[e],t({search:i().stringify({...n})})},clear:()=>t({search:i().stringify({})}),merge:e=>t({search:i().stringify({...a,...e})})}}},13564:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>j});var n=a(99584),s=a(27220),i=a(67692),c=a(68496),r=a(37728),l=a(67968),o=a(90848),d=a(12436),u=a(424),p=a(23424),v=a(31e3),f=a(32712),h=a(18896),x=a(65236),g=a(20556),m=a(97884);const{Step:y}=i.default,j=()=>{var t;const{t:e}=(0,x.G)(),{uuid:a}=(0,p.W4)(),j=(0,g.W)(),{activeMenu:b}=(0,f.w1)((t=>t.menu),f.G),{languages:k}=(0,f.w1)((t=>t.formLang),f.G),C=(0,f.OY)(),M=Number((null===(t=j.values)||void 0===t?void 0:t.step)||0),[_,w]=(0,n.useState)(b.refetch),N=()=>{const t=M+1;j.set("step",t)},O=()=>{const t=M-1;j.set("step",t)},G=t=>t?{label:t.translation?t.translation.title:t.title,value:t.id}:null;function W(t){if(null===t||void 0===t||!t.translations)return{};const{translations:e}=t,a=k.map((t=>{var a,n;return{["title[".concat(t.locale,"]")]:null===(a=e.find((e=>e.locale===t.locale)))||void 0===a?void 0:a.title,["description[".concat(t.locale,"]")]:null===(n=e.find((e=>e.locale===t.locale)))||void 0===n?void 0:n.description}}));return Object.assign({},...a)}(0,n.useEffect)((()=>{b.refetch&&function(t){w(!0),v.c.getById(t).then((t=>{var e;const a={...t.data,...W(t.data),shop:G(t.data.shop),unit:G(t.data.unit),extras:null===(e=t.data.stocks[0])||void 0===e?void 0:e.extras.map((t=>t.extra_group_id)),stocks:t.data.stocks.map((t=>({...t,...Object.assign({},...t.extras.map(((t,e)=>({["extras[".concat(e,"]")]:t.id})))),quantity:t.quantity||0,extras:void 0}))),properties:t.data.properties.map(((t,e)=>({id:e,["key[".concat(t.locale,"]")]:t.key,["value[".concat(t.locale,"]")]:t.value}))),translation:void 0,translations:void 0};C((0,h.MH)({activeMenu:b,data:a}))})).finally((()=>{w(!1),C((0,h.CO)(b))}))}(a)}),[b.refetch]);return(0,m.jsxs)(c.default,{title:e("addon.edit"),extra:(0,m.jsx)(u.c,{}),children:[(0,m.jsx)(i.default,{current:M,onChange:t=>{C((0,h.MH)({activeMenu:b,data:{...b.data,step:t}})),j.set("step",t)},children:s.C.map((t=>(0,m.jsx)(y,{title:e(t.title)},t.title)))}),_?(0,m.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,m.jsx)(r.c,{size:"large",className:"py-5"})}):(0,m.jsxs)("div",{className:"steps-content",children:["First-content"===s.C[M].content&&(0,m.jsx)(d.c,{next:N,action_type:"edit"}),"Third-content"===s.C[M].content&&(0,m.jsx)(o.c,{next:N,prev:O,current:M}),"Finish-content"===s.C[M].content&&(0,m.jsx)(l.c,{prev:O})]})]})}},16204:()=>{}}]);