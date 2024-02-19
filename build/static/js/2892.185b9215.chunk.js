"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2892],{424:(e,t,a)=>{a.d(t,{c:()=>s});var n=a(99584),l=a(79416),c=a(32712),o=a(51840),r=a(48376),i=a(97884);const s=()=>{const e=(0,c.OY)(),{languages:t,defaultLang:a}=(0,c.w1)((e=>e.formLang),c.G);(0,n.useEffect)((()=>{r.c.getAllActive().then((t=>{let{data:a}=t;e((0,o.Up)(a)),e((0,o.uY)(a.find((e=>1===e.default)).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.cp.Group,{value:a,onChange:t=>{let{target:{value:a}}=t;e((0,o.uY)(a))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,i.jsx)(l.cp.Button,{value:e.locale,children:e.title},e.id)))})})}},56384:(e,t,a)=>{function n(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const n=e.map((e=>({[e.locale]:""===t["".concat(a,"[").concat(e.locale,"]")]?void 0:t["".concat(a,"[").concat(e.locale,"]")]})));return Object.assign({},...n)}a.d(t,{c:()=>n})},32892:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(99584),l=a(23424),c=a(61072),o=a(46712),r=a(65732),i=a(68496),s=a(68768),d=a(10260),u=a(87228),p=a(37728),f=a(32712),v=a(18896),m=a(92696),h=a(65236),g=a(424),y=a(56384),x=a(65252),b=a(36136),C=a(49580),j=a(97884);const k=o.default.TextArea,w=()=>{var e;const{t:t}=(0,h.G)(),{activeMenu:a}=(0,f.w1)((e=>e.menu),f.G),w=(0,f.OY)(),[O]=r.c.useForm(),E=(0,l.i6)(),[P,N]=(0,n.useState)(!1),[I,F]=(0,n.useState)(!1),{languages:M,defaultLang:S}=(0,f.w1)((e=>e.formLang),f.G),{id:q}=(0,l.W4)(),[K,B]=(0,n.useState)(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.img),[L,T]=(0,n.useState)(null!==a&&void 0!==a&&a.data?[null===a||void 0===a?void 0:a.data["features[0].img"],null===a||void 0===a?void 0:a.data["features[1].img"],null===a||void 0===a?void 0:a.data["features[2].img"]]:["","",""]);function D(e){if(!e)return{};const t={},a={};return M.forEach((n=>{t["title[".concat(n.locale,"]")]=e.title.hasOwnProperty(n.locale)?e.title[n.locale]:void 0,a["description[".concat(n.locale,"]")]=e.description.hasOwnProperty(n.locale)?e.description[n.locale]:void 0})),{...t,...a}}(0,n.useEffect)((()=>()=>{const e=O.getFieldsValue(!0);w((0,v.MH)({activeMenu:a,data:e}))}),[]);return(0,n.useEffect)((()=>{var e;a.refetch&&(e=q,N(!0),x.c.getById(e).then((e=>{var t,a,n,l,c;let{data:o}=e;const r={...D(null===o||void 0===o?void 0:o.data),features:null===o||void 0===o||null===(t=o.data)||void 0===t||null===(a=t.features)||void 0===a?void 0:a.map((e=>({...D(e)})))};O.setFieldsValue(r),B((0,C.c)(null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.img)),T(null===o||void 0===o||null===(l=o.data)||void 0===l||null===(c=l.features)||void 0===c?void 0:c.map((e=>(0,C.c)(e.img))))})).finally((()=>{w((0,v.CO)(a)),N(!1)})))}),[a.refetch]),(0,j.jsx)(i.default,{title:t("edit.landing.page"),className:"h-100",extra:(0,j.jsx)(g.c,{}),children:P?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,j.jsx)(p.c,{size:"large",className:"py-5"})}):(0,j.jsxs)(r.c,{name:"landing-page-edit",layout:"vertical",onFinish:e=>{F(!0);const n="settings/landing-page",l={title:(0,y.c)(M,e,"title"),description:(0,y.c)(M,e,"description"),img:null===K||void 0===K?void 0:K.name,features:e.features.map(((e,t)=>{var a;return{img:null===(a=L[t])||void 0===a?void 0:a.name,title:(0,y.c)(M,e,"title"),description:(0,y.c)(M,e,"description")}}))};x.c.update(q,{data:l,type:"welcome"}).then((()=>{c.m4.success(t("successfully.created")),(0,f.wN)((()=>{w((0,v.MF)({...a,nextUrl:n})),w((0,m.W)({}))})),E("/".concat(n))})).finally((()=>F(!1)))},form:O,initialValues:{features:["","",""],...a.data},className:"d-flex flex-column h-100",children:[(0,j.jsxs)(s.c,{gutter:12,children:[(0,j.jsxs)(d.c,{span:12,children:[M.map((e=>(0,j.jsx)(r.c.Item,{label:"".concat(t("title")," (").concat(e.locale,")"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===S,message:t("required")}],hidden:e.locale!==S,children:(0,j.jsx)(o.default,{})},"title"+e.locale))),M.map((e=>(0,j.jsx)(r.c.Item,{label:"".concat(t("description")," (").concat(e.locale,")"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===S,message:t("required")}],hidden:e.locale!==S,children:(0,j.jsx)(k,{rows:3})},"description"+e.locale)))]}),(0,j.jsx)(d.c,{span:12,children:(0,j.jsx)(r.c.Item,{label:t("background.image"),children:(0,j.jsx)(b.c,{type:"languages",image:K,setImage:B,form:O,name:"img"})})})]}),(0,j.jsx)(i.default,{title:t("features"),children:(0,j.jsx)(r.c.List,{name:"features",children:e=>(0,j.jsx)("div",{children:e.map(((e,a)=>(0,j.jsxs)(s.c,{gutter:12,align:"middle",style:{borderBottom:"1px solid var(--grey)",marginBottom:24,borderWidth:2===a?0:1},children:[(0,j.jsxs)(d.c,{span:20,children:[M.map((e=>(0,j.jsx)(r.c.Item,{label:"".concat(t("title")," (").concat(e.locale,")"),name:[a,"title[".concat(e.locale,"]")],rules:[{required:e.locale===S,message:t("required")}],hidden:e.locale!==S,children:(0,j.jsx)(o.default,{})},"title"+e.locale))),M.map((e=>(0,j.jsx)(r.c.Item,{label:"".concat(t("description")," (").concat(e.locale,")"),name:[a,"description[".concat(e.locale,"]")],rules:[{required:e.locale===S,message:t("required")}],hidden:e.locale!==S,children:(0,j.jsx)(k,{rows:3})},"description"+e.locale)))]}),(0,j.jsx)(d.c,{span:4,children:(0,j.jsx)(r.c.Item,{label:t("media"),children:(0,j.jsx)(b.c,{type:"languages",isVideo:!0,image:L[a],setImage:e=>((e,t)=>{const a=[...L];a[t]=e,T(a)})(e,a),form:O,name:"features[".concat(a,"].img")})})})]},e.key)))})})}),(0,j.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,j.jsx)("div",{className:"pb-5",children:(0,j.jsx)(u.c,{type:"primary",htmlType:"submit",loading:I,children:t("submit")})})})]})})}},79416:(e,t,a)=>{a.d(t,{cp:()=>M});var n=a(52536),l=a(45072),c=a(99584),o=a(76436),r=a(46736),i=a.n(r),s=a(71072),d=a(93500),u=a(67648),p=c.createContext(null),f=p.Provider;const v=p;var m=c.createContext(null),h=m.Provider,g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},y=function(e,t){var a,r=c.useContext(v),p=c.useContext(m),f=c.useContext(u.MT),h=f.getPrefixCls,y=f.direction,x=c.useRef(),b=(0,s.qC)(t,x),C=(0,c.useContext)(d.A9).isFormItemInput,j=e.prefixCls,k=e.className,w=e.children,O=e.style,E=g(e,["prefixCls","className","children","style"]),P=h("radio",j),N="button"===((null===r||void 0===r?void 0:r.optionType)||p)?"".concat(P,"-button"):P,I=(0,l.c)({},E);r&&(I.name=r.name,I.onChange=function(t){var a,n;null===(a=e.onChange)||void 0===a||a.call(e,t),null===(n=null===r||void 0===r?void 0:r.onChange)||void 0===n||n.call(r,t)},I.checked=e.value===r.value,I.disabled=e.disabled||r.disabled);var F=i()("".concat(N,"-wrapper"),(a={},(0,n.c)(a,"".concat(N,"-wrapper-checked"),I.checked),(0,n.c)(a,"".concat(N,"-wrapper-disabled"),I.disabled),(0,n.c)(a,"".concat(N,"-wrapper-rtl"),"rtl"===y),(0,n.c)(a,"".concat(N,"-wrapper-in-form-item"),C),a),k);return c.createElement("label",{className:F,style:O,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},c.createElement(o.c,(0,l.c)({},I,{type:"radio",prefixCls:N,ref:b})),void 0!==w?c.createElement("span",null,w):null)},x=c.forwardRef(y);x.displayName="Radio";const b=x;var C=a(32920),j=a(68576),k=a(62672),w=a(45792),O=c.forwardRef((function(e,t){var a=c.useContext(u.MT),o=a.getPrefixCls,r=a.direction,s=c.useContext(k.c),d=(0,j.c)(e.defaultValue,{value:e.value}),p=(0,C.c)(d,2),v=p[0],m=p[1];return c.createElement(f,{value:{onChange:function(t){var a=v,n=t.target.value;"value"in e||m(n);var l=e.onChange;l&&n!==a&&l(t)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var a,d=e.prefixCls,u=e.className,p=void 0===u?"":u,f=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,g=e.disabled,y=e.children,x=e.size,C=e.style,j=e.id,k=e.onMouseEnter,O=e.onMouseLeave,E=o("radio",d),P="".concat(E,"-group"),N=y;f&&f.length>0&&(N=f.map((function(e){return"string"===typeof e||"number"===typeof e?c.createElement(b,{key:e.toString(),prefixCls:E,disabled:g,value:e,checked:v===e},e):c.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||g,value:e.value,checked:v===e.value,style:e.style},e.label)})));var I=x||s,F=i()(P,"".concat(P,"-").concat(h),(a={},(0,n.c)(a,"".concat(P,"-").concat(I),I),(0,n.c)(a,"".concat(P,"-rtl"),"rtl"===r),a),p);return c.createElement("div",(0,l.c)({},(0,w.c)(e),{className:F,style:C,onMouseEnter:k,onMouseLeave:O,id:j,ref:t}),N)}())}));const E=c.memo(O);var P=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},N=function(e,t){var a=c.useContext(u.MT).getPrefixCls,n=e.prefixCls,o=P(e,["prefixCls"]),r=a("radio",n);return c.createElement(h,{value:"button"},c.createElement(b,(0,l.c)({prefixCls:r},o,{type:"radio",ref:t})))};const I=c.forwardRef(N);var F=b;F.Button=I,F.Group=E;const M=F},76436:(e,t,a)=>{a.d(t,{c:()=>m});var n=a(45072),l=a(52536),c=a(31024),o=a(30800),r=a(87088),i=a(92920),s=a(62988),d=a(33504),u=a(99584),p=a(46736),f=a.n(p),v=function(e){(0,s.c)(a,e);var t=(0,d.c)(a);function a(e){var n;(0,r.c)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=n.props,a=t.disabled,l=t.onChange;a||("checked"in n.props||n.setState({checked:e.target.checked}),l&&l({target:(0,o.c)((0,o.c)({},n.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},n.saveInput=function(e){n.input=e};var l="checked"in e?e.checked:e.defaultChecked;return n.state={checked:l},n}return(0,i.c)(a,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,o=t.className,r=t.style,i=t.name,s=t.id,d=t.type,p=t.disabled,v=t.readOnly,m=t.tabIndex,h=t.onClick,g=t.onFocus,y=t.onBlur,x=t.onKeyDown,b=t.onKeyPress,C=t.onKeyUp,j=t.autoFocus,k=t.value,w=t.required,O=(0,c.c)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(O).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=O[t]),e}),{}),P=this.state.checked,N=f()(a,o,(e={},(0,l.c)(e,"".concat(a,"-checked"),P),(0,l.c)(e,"".concat(a,"-disabled"),p),e));return u.createElement("span",{className:N,style:r},u.createElement("input",(0,n.c)({name:i,id:s,type:d,required:w,readOnly:v,disabled:p,tabIndex:m,className:"".concat(a,"-input"),checked:!!P,onClick:h,onFocus:g,onBlur:y,onKeyUp:C,onKeyDown:x,onKeyPress:b,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:k},E)),u.createElement("span",{className:"".concat(a,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,o.c)((0,o.c)({},t),{},{checked:e.checked}):null}}]),a}(u.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=v}}]);