(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[268],{20556:(t,e,a)=>{"use strict";a.d(e,{W:()=>c});var n=a(23424),s=a(84620),i=a.n(s);const c=()=>{const t=(0,n.i6)(),e=(0,n.IT)(),a=i().parse(e.search,{ignoreQueryPrefix:!0});return{values:a,set:(e,n)=>t({search:i().stringify({...a,[e]:n})}),reset:e=>{const n={...a};n[e]&&delete n[e],t({search:i().stringify({...n})})},clear:()=>t({search:i().stringify({})}),merge:e=>t({search:i().stringify({...a,...e})})}}},33880:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>C});var n=a(99584),s=a(47868),i=a(67692),c=a(68496),r=a(37728),l=a(79e3),o=a(96756),d=a(21203),u=a(48800),v=a(80928),p=a(424),f=a(23424),h=a(31e3),x=a(32712),g=a(18896),m=a(65236),j=a(20556),y=a(97884);const{Step:b}=i.default,C=()=>{var t;const{t:e}=(0,m.G)(),{uuid:a}=(0,f.W4)(),C=(0,j.W)(),{activeMenu:k}=(0,x.w1)((t=>t.menu),x.G),{languages:M}=(0,x.w1)((t=>t.formLang),x.G),F=(0,x.OY)(),_=Number((null===(t=C.values)||void 0===t?void 0:t.step)||0),[w,N]=(0,n.useState)(k.refetch),O=()=>{const t=_+1;C.set("step",t)},G=()=>{const t=_-1;C.set("step",t)},S=t=>t?{label:t.translation?t.translation.title:t.title,value:t.id}:null;function W(t){if(null===t||void 0===t||!t.translations)return{};const{translations:e}=t,a=M.map((t=>{var a,n;return{["title[".concat(t.locale,"]")]:null===(a=e.find((e=>e.locale===t.locale)))||void 0===a?void 0:a.title,["description[".concat(t.locale,"]")]:null===(n=e.find((e=>e.locale===t.locale)))||void 0===n?void 0:n.description}}));return Object.assign({},...a)}(0,n.useEffect)((()=>{k.refetch&&function(t){N(!0),h.c.getById(t).then((t=>{var e;const a={...t.data,...W(t.data),category:S(t.data.category),brand:S(t.data.brand),unit:S(t.data.unit),images:(n=t.data.galleries,n.map((t=>({uid:t.id,name:t.path,url:t.path})))),extras:null===(e=t.data.stocks[0])||void 0===e?void 0:e.extras.map((t=>t.extra_group_id)),stocks:t.data.stocks.map((t=>({...t,...Object.assign({},...t.extras.map(((t,e)=>({["extras[".concat(e,"]")]:{label:t.value,value:t.id}})))),quantity:t.quantity||0,extras:void 0}))),properties:t.data.properties.map(((t,e)=>({id:e,["key[".concat(t.locale,"]")]:t.key,["value[".concat(t.locale,"]")]:t.value}))),translation:void 0,translations:void 0};var n;F((0,g.MH)({activeMenu:k,data:a}))})).finally((()=>{N(!1),F((0,g.CO)(k))}))}(a)}),[k.refetch]);return(0,n.useEffect)((()=>()=>{F((0,g.MF)({...k,nextUrl:"seller/products"}))}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c.default,{title:e("edit.food"),extra:(0,y.jsx)(p.c,{}),children:(0,y.jsx)(i.default,{current:_,onChange:t=>{F((0,g.MH)({activeMenu:k,data:{...k.data,step:t}})),C.set("step",t)},children:s.C.map((t=>(0,y.jsx)(b,{title:e(t.title)},t.title)))})}),w?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,y.jsx)(r.c,{size:"large",className:"py-5"})}):(0,y.jsxs)("div",{className:"",children:["First-content"===s.C[_].content&&(0,y.jsx)(v.c,{next:O,action_type:"edit"}),"Second-content"===s.C[_].content&&(0,y.jsx)(u.c,{next:O,prev:G}),"Third-content"===s.C[_].content&&(0,y.jsx)(d.c,{next:O,prev:G}),"Fourth-content"===s.C[_].content&&(0,y.jsx)(l.c,{next:O,prev:G}),"Finish-content"===s.C[_].content&&(0,y.jsx)(o.c,{prev:G})]})]})}},16204:()=>{}}]);