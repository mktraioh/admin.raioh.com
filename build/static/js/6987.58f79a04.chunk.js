"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6987],{424:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(99584),c=n(79416),o=n(32712),r=n(51840),l=n(48376),s=n(97884);const i=()=>{const e=(0,o.OY)(),{languages:t,defaultLang:n}=(0,o.w1)((e=>e.formLang),o.G);(0,a.useEffect)((()=>{l.c.getAllActive().then((t=>{let{data:n}=t;e((0,r.Up)(n)),e((0,r.uY)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.cp.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,r.uY)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,s.jsx)(c.cp.Button,{value:e.locale,children:e.title},e.id)))})})}},56384:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t["".concat(n,"[").concat(e.locale,"]")]?void 0:t["".concat(n,"[").concat(e.locale,"]")]})));return Object.assign({},...a)}n.d(t,{c:()=>a})},71680:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(33012);const c={getPolicy:()=>a.c.get("dashboard/admin/policy"),getTerms:()=>a.c.get("dashboard/admin/term"),createPolicy:e=>a.c.post("dashboard/admin/policy",e),createTerms:e=>a.c.post("dashboard/admin/term",e)}},39368:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(99584),c=n(61072),o=n(65732),r=n(68496),l=n(68768),s=n(10260),i=n(46712),u=n(66296),d=n(87228),p=n(32712),f=n(86568),v=n(51872),h=n.n(v),m=n(18896),y=n(71680),b=n(65236),g=n(77180),x=n(424),C=n(56384),k=n(97884);function j(){const{t:e}=(0,b.G)(),{activeMenu:t}=(0,p.w1)((e=>e.menu),p.G),n=(0,p.OY)(),[v]=o.c.useForm(),[j,O]=(0,a.useState)(!1),[E,w]=(0,a.useState)(!1),{languages:P,defaultLang:F}=(0,p.w1)((e=>e.formLang),p.G);function M(e){if(!e)return{};const{translations:t}=e,n=P.map((e=>{var n,a;return{["title[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}(0,a.useEffect)((()=>()=>{const e=v.getFieldsValue(!0);n((0,m.MH)({activeMenu:t,data:e}))}),[]),(0,a.useEffect)((()=>{t.refetch&&(w(!0),y.c.getTerms().then((e=>{let{data:t}=e;return v.setFieldsValue({...M(t)})})).finally((()=>{w(!1),n((0,m.CO)(t))})))}),[t.refetch]);return(0,k.jsx)(r.default,{title:e("terms"),extra:(0,k.jsx)(x.c,{}),children:E?(0,k.jsx)(g.c,{}):(0,k.jsxs)(o.c,{name:"terms-form",layout:"vertical",onFinish:t=>{const n={title:(0,C.c)(P,t),description:(0,C.c)(P,t,"description")};O(!0),y.c.createTerms(n).then((()=>{c.m4.success(e("successfully.saved"))})).finally((()=>O(!1)))},form:v,initialValues:t.data,children:[(0,k.jsxs)(l.c,{gutter:12,children:[(0,k.jsx)(s.c,{span:12,children:P.map((t=>(0,k.jsx)(o.c.Item,{label:e("title"),name:"title[".concat(t.locale,"]"),rules:[{required:t.locale===F,message:e("required")}],hidden:t.locale!==F,children:(0,k.jsx)(i.default,{})},"title"+t.locale)))}),(0,k.jsx)(s.c,{span:24,children:P.map((t=>(0,k.jsx)(o.c.Item,{label:e("description"),name:"description[".concat(t.locale,"]"),valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:t.locale===F,message:e("required")}],hidden:t.locale!==F,children:(0,k.jsx)(f.CKEditor,{editor:h()})})))})]}),(0,k.jsx)(u.c,{children:(0,k.jsx)(d.c,{type:"primary",htmlType:"submit",loading:j,children:e("save")})})]})})}},79416:(e,t,n)=>{n.d(t,{cp:()=>K});var a=n(52536),c=n(45072),o=n(99584),r=n(76436),l=n(46736),s=n.n(l),i=n(71072),u=n(93500),d=n(67648),p=o.createContext(null),f=p.Provider;const v=p;var h=o.createContext(null),m=h.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},b=function(e,t){var n,l=o.useContext(v),p=o.useContext(h),f=o.useContext(d.MT),m=f.getPrefixCls,b=f.direction,g=o.useRef(),x=(0,i.qC)(t,g),C=(0,o.useContext)(u.A9).isFormItemInput,k=e.prefixCls,j=e.className,O=e.children,E=e.style,w=y(e,["prefixCls","className","children","style"]),P=m("radio",k),F="button"===((null===l||void 0===l?void 0:l.optionType)||p)?"".concat(P,"-button"):P,M=(0,c.c)({},w);l&&(M.name=l.name,M.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===l||void 0===l?void 0:l.onChange)||void 0===a||a.call(l,t)},M.checked=e.value===l.value,M.disabled=e.disabled||l.disabled);var N=s()("".concat(F,"-wrapper"),(n={},(0,a.c)(n,"".concat(F,"-wrapper-checked"),M.checked),(0,a.c)(n,"".concat(F,"-wrapper-disabled"),M.disabled),(0,a.c)(n,"".concat(F,"-wrapper-rtl"),"rtl"===b),(0,a.c)(n,"".concat(F,"-wrapper-in-form-item"),C),n),j);return o.createElement("label",{className:N,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(r.c,(0,c.c)({},M,{type:"radio",prefixCls:F,ref:x})),void 0!==O?o.createElement("span",null,O):null)},g=o.forwardRef(b);g.displayName="Radio";const x=g;var C=n(32920),k=n(68576),j=n(62672),O=n(45792),E=o.forwardRef((function(e,t){var n=o.useContext(d.MT),r=n.getPrefixCls,l=n.direction,i=o.useContext(j.c),u=(0,k.c)(e.defaultValue,{value:e.value}),p=(0,C.c)(u,2),v=p[0],h=p[1];return o.createElement(f,{value:{onChange:function(t){var n=v,a=t.target.value;"value"in e||h(a);var c=e.onChange;c&&a!==n&&c(t)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,f=e.options,h=e.buttonStyle,m=void 0===h?"outline":h,y=e.disabled,b=e.children,g=e.size,C=e.style,k=e.id,j=e.onMouseEnter,E=e.onMouseLeave,w=r("radio",u),P="".concat(w,"-group"),F=b;f&&f.length>0&&(F=f.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(x,{key:e.toString(),prefixCls:w,disabled:y,value:e,checked:v===e},e):o.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:w,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var M=g||i,N=s()(P,"".concat(P,"-").concat(m),(n={},(0,a.c)(n,"".concat(P,"-").concat(M),M),(0,a.c)(n,"".concat(P,"-rtl"),"rtl"===l),n),p);return o.createElement("div",(0,c.c)({},(0,O.c)(e),{className:N,style:C,onMouseEnter:j,onMouseLeave:E,id:k,ref:t}),F)}())}));const w=o.memo(E);var P=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},F=function(e,t){var n=o.useContext(d.MT).getPrefixCls,a=e.prefixCls,r=P(e,["prefixCls"]),l=n("radio",a);return o.createElement(m,{value:"button"},o.createElement(x,(0,c.c)({prefixCls:l},r,{type:"radio",ref:t})))};const M=o.forwardRef(F);var N=x;N.Button=M,N.Group=w;const K=N},76436:(e,t,n)=>{n.d(t,{c:()=>h});var a=n(45072),c=n(52536),o=n(31024),r=n(30800),l=n(87088),s=n(92920),i=n(62988),u=n(33504),d=n(99584),p=n(46736),f=n.n(p),v=function(e){(0,i.c)(n,e);var t=(0,u.c)(n);function n(e){var a;(0,l.c)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,c=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),c&&c({target:(0,r.c)((0,r.c)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var c="checked"in e?e.checked:e.defaultChecked;return a.state={checked:c},a}return(0,s.c)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,l=t.style,s=t.name,i=t.id,u=t.type,p=t.disabled,v=t.readOnly,h=t.tabIndex,m=t.onClick,y=t.onFocus,b=t.onBlur,g=t.onKeyDown,x=t.onKeyPress,C=t.onKeyUp,k=t.autoFocus,j=t.value,O=t.required,E=(0,o.c)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),P=this.state.checked,F=f()(n,r,(e={},(0,c.c)(e,"".concat(n,"-checked"),P),(0,c.c)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:F,style:l},d.createElement("input",(0,a.c)({name:s,id:i,type:u,required:O,readOnly:v,disabled:p,tabIndex:h,className:"".concat(n,"-input"),checked:!!P,onClick:m,onFocus:y,onBlur:b,onKeyUp:C,onKeyDown:g,onKeyPress:x,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:j},w)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,r.c)((0,r.c)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=v}}]);