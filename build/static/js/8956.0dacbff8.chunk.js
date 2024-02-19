"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8956],{424:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(99584),r=n(79416),c=n(32712),l=n(51840),o=n(48376),i=n(97884);const s=()=>{const e=(0,c.OY)(),{languages:t,defaultLang:n}=(0,c.w1)((e=>e.formLang),c.G);(0,a.useEffect)((()=>{o.c.getAllActive().then((t=>{let{data:n}=t;e((0,l.Up)(n)),e((0,l.uY)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.cp.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,l.uY)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,i.jsx)(r.cp.Button,{value:e.locale,children:e.title},e.id)))})})}},58956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(99584),r=n(65732),c=n(68496),l=n(68768),o=n(10260),i=n(46712),s=n(2664),u=n(73568),d=n(10240),p=n(87228),f=n(424),h=n(23424),m=n(70936),v=n(83072),y=n.n(v),x=n(32712),b=n(18896),g=n(65236),C=n(14088),j=n(97884);const k=()=>{const{t:e}=(0,g.G)(),[t]=r.c.useForm(),[n,v]=(0,a.useState)({}),[k,O]=(0,a.useState)(!1),[w,E]=(0,a.useState)(!1),{defaultLang:q,languages:P}=(0,x.w1)((e=>e.formLang),x.G),M=(0,x.OY)(),N=(0,h.i6)(),{id:I}=(0,h.W4)(),{activeMenu:F}=(0,x.w1)((e=>e.menu),x.G),{myShop:S}=(0,x.w1)((e=>e.myShop),x.G);function D(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,n=P.map((e=>{var n;return{["title[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{F.refetch&&function(e){O(!0),m.c.getById(e).then((e=>{let{data:n}=e;v(n),t.setFieldsValue({...D(n),expired_at:y()(n.expired_at,"YYYY-MM-DD")})})).finally((()=>{O(!1),M((0,b.CO)(F))}))}(I)}),[F.refetch]),(0,j.jsx)(c.default,{title:e("edit.coupon"),extra:(0,j.jsx)(f.c,{}),loading:k,children:(0,j.jsxs)(r.c,{form:t,name:"basic",initialValues:{...n},layout:"vertical",onFinish:e=>{E(!0);const t={...e,shop_id:null===S||void 0===S?void 0:S.id,expired_at:y()(e.expired_at).format("YYYY-MM-DD"),qty:Number(e.qty),price:Number(e.price)},n="coupons";I?m.c.update(I,t).then((e=>{M((0,b.MF)({...F,nextUrl:n})),N("/".concat(n)),M((0,C.a)())})).finally((()=>E(!1))):m.c.create(t).then((e=>{M((0,b.MF)({...F,nextUrl:n})),N("/".concat(n))})).finally((()=>E(!1)))},children:[(0,j.jsxs)(l.c,{gutter:12,children:[(0,j.jsx)(o.c,{span:12,children:P.map((t=>(0,j.jsx)(r.c.Item,{label:e("title"),name:"title[".concat(t.locale,"]"),rules:[{required:t.locale===q,message:e("required")}],hidden:t.locale!==q,children:(0,j.jsx)(i.default,{})},"title"+t.id)))}),(0,j.jsx)(o.c,{span:12,children:(0,j.jsx)(r.c.Item,{label:e("name"),name:"name",rules:[{required:!0,message:e("required")}],children:(0,j.jsx)(i.default,{})})}),(0,j.jsx)(o.c,{span:12,children:(0,j.jsx)(r.c.Item,{label:e("type"),name:"type",rules:[{required:!0,message:e("required")}],children:(0,j.jsxs)(s.default,{children:[(0,j.jsx)(s.default.Option,{value:"fix",children:e("fix")}),(0,j.jsx)(s.default.Option,{value:"percent",children:e("percent")})]})})}),(0,j.jsx)(o.c,{span:12,children:(0,j.jsx)(r.c.Item,{name:"expired_at",label:e("expired.at"),rules:[{required:!0,message:e("required")}],children:(0,j.jsx)(u.default,{className:"w-100",placeholder:"",disabledDate:e=>y()().add(-1,"days")>=e})})}),(0,j.jsx)(o.c,{span:12,children:(0,j.jsx)(r.c.Item,{label:e("quantity"),name:"qty",rules:[{required:!0,message:e("required")}],children:(0,j.jsx)(d.c,{min:0,className:"w-100"})})}),(0,j.jsx)(o.c,{span:12,children:(0,j.jsx)(r.c.Item,{label:e("price"),name:"price",rules:[{required:!0,message:e("required")}],children:(0,j.jsx)(d.c,{min:0,className:"w-100"})})})]}),(0,j.jsx)(p.c,{type:"primary",htmlType:"submit",loading:w,children:e("submit")})]})})}},79416:(e,t,n)=>{n.d(t,{cp:()=>I});var a=n(52536),r=n(45072),c=n(99584),l=n(76436),o=n(46736),i=n.n(o),s=n(71072),u=n(93500),d=n(67648),p=c.createContext(null),f=p.Provider;const h=p;var m=c.createContext(null),v=m.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=function(e,t){var n,o=c.useContext(h),p=c.useContext(m),f=c.useContext(d.MT),v=f.getPrefixCls,x=f.direction,b=c.useRef(),g=(0,s.qC)(t,b),C=(0,c.useContext)(u.A9).isFormItemInput,j=e.prefixCls,k=e.className,O=e.children,w=e.style,E=y(e,["prefixCls","className","children","style"]),q=v("radio",j),P="button"===((null===o||void 0===o?void 0:o.optionType)||p)?"".concat(q,"-button"):q,M=(0,r.c)({},E);o&&(M.name=o.name,M.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===o||void 0===o?void 0:o.onChange)||void 0===a||a.call(o,t)},M.checked=e.value===o.value,M.disabled=e.disabled||o.disabled);var N=i()("".concat(P,"-wrapper"),(n={},(0,a.c)(n,"".concat(P,"-wrapper-checked"),M.checked),(0,a.c)(n,"".concat(P,"-wrapper-disabled"),M.disabled),(0,a.c)(n,"".concat(P,"-wrapper-rtl"),"rtl"===x),(0,a.c)(n,"".concat(P,"-wrapper-in-form-item"),C),n),k);return c.createElement("label",{className:N,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},c.createElement(l.c,(0,r.c)({},M,{type:"radio",prefixCls:P,ref:g})),void 0!==O?c.createElement("span",null,O):null)},b=c.forwardRef(x);b.displayName="Radio";const g=b;var C=n(32920),j=n(68576),k=n(62672),O=n(45792),w=c.forwardRef((function(e,t){var n=c.useContext(d.MT),l=n.getPrefixCls,o=n.direction,s=c.useContext(k.c),u=(0,j.c)(e.defaultValue,{value:e.value}),p=(0,C.c)(u,2),h=p[0],m=p[1];return c.createElement(f,{value:{onChange:function(t){var n=h,a=t.target.value;"value"in e||m(a);var r=e.onChange;r&&a!==n&&r(t)},value:h,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,f=e.options,m=e.buttonStyle,v=void 0===m?"outline":m,y=e.disabled,x=e.children,b=e.size,C=e.style,j=e.id,k=e.onMouseEnter,w=e.onMouseLeave,E=l("radio",u),q="".concat(E,"-group"),P=x;f&&f.length>0&&(P=f.map((function(e){return"string"===typeof e||"number"===typeof e?c.createElement(g,{key:e.toString(),prefixCls:E,disabled:y,value:e,checked:h===e},e):c.createElement(g,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:h===e.value,style:e.style},e.label)})));var M=b||s,N=i()(q,"".concat(q,"-").concat(v),(n={},(0,a.c)(n,"".concat(q,"-").concat(M),M),(0,a.c)(n,"".concat(q,"-rtl"),"rtl"===o),n),p);return c.createElement("div",(0,r.c)({},(0,O.c)(e),{className:N,style:C,onMouseEnter:k,onMouseLeave:w,id:j,ref:t}),P)}())}));const E=c.memo(w);var q=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},P=function(e,t){var n=c.useContext(d.MT).getPrefixCls,a=e.prefixCls,l=q(e,["prefixCls"]),o=n("radio",a);return c.createElement(v,{value:"button"},c.createElement(g,(0,r.c)({prefixCls:o},l,{type:"radio",ref:t})))};const M=c.forwardRef(P);var N=g;N.Button=M,N.Group=E;const I=N},76436:(e,t,n)=>{n.d(t,{c:()=>m});var a=n(45072),r=n(52536),c=n(31024),l=n(30800),o=n(87088),i=n(92920),s=n(62988),u=n(33504),d=n(99584),p=n(46736),f=n.n(p),h=function(e){(0,s.c)(n,e);var t=(0,u.c)(n);function n(e){var a;(0,o.c)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.c)((0,l.c)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,i.c)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,o=t.style,i=t.name,s=t.id,u=t.type,p=t.disabled,h=t.readOnly,m=t.tabIndex,v=t.onClick,y=t.onFocus,x=t.onBlur,b=t.onKeyDown,g=t.onKeyPress,C=t.onKeyUp,j=t.autoFocus,k=t.value,O=t.required,w=(0,c.c)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),q=this.state.checked,P=f()(n,l,(e={},(0,r.c)(e,"".concat(n,"-checked"),q),(0,r.c)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:P,style:o},d.createElement("input",(0,a.c)({name:i,id:s,type:u,required:O,readOnly:h,disabled:p,tabIndex:m,className:"".concat(n,"-input"),checked:!!q,onClick:v,onFocus:y,onBlur:x,onKeyUp:C,onKeyDown:b,onKeyPress:g,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:k},E)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.c)((0,l.c)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=h}}]);