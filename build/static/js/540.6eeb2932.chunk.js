"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[540],{424:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(99584),r=n(79416),c=n(32712),l=n(51840),o=n(48376),i=n(97884);const s=()=>{const e=(0,c.OY)(),{languages:t,defaultLang:n}=(0,c.w1)((e=>e.formLang),c.G);(0,a.useEffect)((()=>{o.c.getAllActive().then((t=>{let{data:n}=t;e((0,l.Up)(n)),e((0,l.uY)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.cp.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,l.uY)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,i.jsx)(r.cp.Button,{value:e.locale,children:e.title},e.id)))})})}},20540:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(99584),r=n(65732),c=n(68496),l=n(37728),o=n(61072),i=n(23424),s=n(424),u=n(32712),d=n(18896),p=n(75808),v=n(15692),m=n(65236),f=n(7452),h=n(97884);const y=()=>{const{t:e}=(0,m.G)(),t=(0,i.i6)(),n=(0,u.OY)(),{activeMenu:y}=(0,u.w1)((e=>e.menu),u.G),{params:g}=(0,u.w1)((e=>e.careerCategory),u.G),[b,x]=(0,a.useState)(!1),[C]=r.c.useForm(),[j,k]=(0,a.useState)(null),{uuid:w}=(0,i.W4)(),{languages:E}=(0,u.w1)((e=>e.formLang),u.G);(0,a.useEffect)((()=>()=>{const e=C.getFieldsValue(!0);n((0,d.MH)({activeMenu:y,data:e}))}),[]);function P(e){if(!e)return{};const{translations:t}=e,n=E.map((e=>{var n,a;return{["title[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{var e;y.refetch&&(e=w,x(!0),p.c.getById(e).then((e=>{let t=e.data;const a={...t,...P(t),image:[(r=t.img,{name:r,url:r})],keywords:t.keywords.split(",")};var r;C.setFieldsValue(a),n((0,d.MH)({activeMenu:y,data:a}))})).finally((()=>{x(!1),n((0,d.CO)(y))})))}),[y.refetch]),(0,h.jsx)(c.default,{title:e("clone.category"),extra:(0,h.jsx)(s.c,{}),children:b?(0,h.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,h.jsx)(l.c,{size:"large",className:"mt-5 pt-5"})}):(0,h.jsx)(f.c,{form:C,handleSubmit:(a,r)=>{var c;const l={...a,type:"career",active:a.active?1:0,keywords:a.keywords.join(","),parent_id:null,"images[0]":null===(c=r[0])||void 0===c?void 0:c.name},i="catalog/career-categories";p.c.create(l).then((()=>{o.m4.success(e("successfully.updated")),n((0,d.MF)({...y,nextUrl:i})),n((0,v.K)(g)),t("/".concat(i))})).catch((e=>k(e.response.data.params)))},error:j})})}},7452:(e,t,n)=>{n.d(t,{c:()=>h});var a=n(99584),r=n(65732),c=n(68768),l=n(10260),o=n(46712),i=n(2664),s=n(26012),u=n(87228),d=n(64212),p=n(40936),v=n(32712),m=n(65236),f=n(97884);function h(e){var t,n;let{form:h,handleSubmit:y,error:g}=e;const{t:b}=(0,m.G)(),{activeMenu:x}=(0,v.w1)((e=>e.menu),v.G),{defaultLang:C,languages:j}=(0,v.w1)((e=>e.formLang),v.G),[k,w]=(0,a.useState)(null!==(t=x.data)&&void 0!==t&&t.image?[null===(n=x.data)||void 0===n?void 0:n.image]:[]),[E,P]=(0,a.useState)(!1);return(0,f.jsxs)(r.c,{name:"basic",layout:"vertical",onFinish:e=>{P(!0),y(e,k).finally((()=>P(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...x.data},form:h,children:[(0,f.jsxs)(c.c,{gutter:12,children:[(0,f.jsx)(l.c,{span:12,children:j.map(((e,t)=>(0,f.jsx)(r.c.Item,{label:b("name"),name:"title[".concat(e.locale,"]"),help:g&&g["title.".concat(C)]?g["title.".concat(C)][0]:null,validateStatus:g?"error":"success",rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==C?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(b("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(b("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(b("required")))}],hidden:e.locale!==C,children:(0,f.jsx)(o.default,{placeholder:b("name")})},e.title+t)))}),(0,f.jsx)(l.c,{span:12,children:j.map(((e,t)=>(0,f.jsx)(r.c.Item,{label:b("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==C?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(b("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<5?Promise.reject(new Error(b("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(b("required")))}],hidden:e.locale!==C,children:(0,f.jsx)(d.c,{rows:4})},e.locale+t)))}),(0,f.jsx)(l.c,{span:12,children:(0,f.jsx)(r.c.Item,{label:b("keywords"),name:"keywords",rules:[{required:!0,message:b("required")}],children:(0,f.jsx)(i.default,{mode:"tags",style:{width:"100%"}})})}),(0,f.jsx)(l.c,{span:4,children:(0,f.jsx)(r.c.Item,{label:b("image"),name:"images",rules:[{validator:()=>0===(null===k||void 0===k?void 0:k.length)?Promise.reject(new Error(b("required"))):Promise.resolve()}],children:(0,f.jsx)(p.c,{type:"categories",imageList:k,setImageList:w,form:h,multiple:!1})})}),(0,f.jsx)(l.c,{span:2,children:(0,f.jsx)(r.c.Item,{label:b("active"),name:"active",valuePropName:"checked",children:(0,f.jsx)(s.c,{})})})]}),(0,f.jsx)(u.c,{type:"primary",htmlType:"submit",loading:E,children:b("submit")})]})}},79416:(e,t,n)=>{n.d(t,{cp:()=>S});var a=n(52536),r=n(45072),c=n(99584),l=n(76436),o=n(46736),i=n.n(o),s=n(71072),u=n(93500),d=n(67648),p=c.createContext(null),v=p.Provider;const m=p;var f=c.createContext(null),h=f.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=function(e,t){var n,o=c.useContext(m),p=c.useContext(f),v=c.useContext(d.MT),h=v.getPrefixCls,g=v.direction,b=c.useRef(),x=(0,s.qC)(t,b),C=(0,c.useContext)(u.A9).isFormItemInput,j=e.prefixCls,k=e.className,w=e.children,E=e.style,P=y(e,["prefixCls","className","children","style"]),O=h("radio",j),M="button"===((null===o||void 0===o?void 0:o.optionType)||p)?"".concat(O,"-button"):O,I=(0,r.c)({},P);o&&(I.name=o.name,I.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===o||void 0===o?void 0:o.onChange)||void 0===a||a.call(o,t)},I.checked=e.value===o.value,I.disabled=e.disabled||o.disabled);var N=i()("".concat(M,"-wrapper"),(n={},(0,a.c)(n,"".concat(M,"-wrapper-checked"),I.checked),(0,a.c)(n,"".concat(M,"-wrapper-disabled"),I.disabled),(0,a.c)(n,"".concat(M,"-wrapper-rtl"),"rtl"===g),(0,a.c)(n,"".concat(M,"-wrapper-in-form-item"),C),n),k);return c.createElement("label",{className:N,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},c.createElement(l.c,(0,r.c)({},I,{type:"radio",prefixCls:M,ref:x})),void 0!==w?c.createElement("span",null,w):null)},b=c.forwardRef(g);b.displayName="Radio";const x=b;var C=n(32920),j=n(68576),k=n(62672),w=n(45792),E=c.forwardRef((function(e,t){var n=c.useContext(d.MT),l=n.getPrefixCls,o=n.direction,s=c.useContext(k.c),u=(0,j.c)(e.defaultValue,{value:e.value}),p=(0,C.c)(u,2),m=p[0],f=p[1];return c.createElement(v,{value:{onChange:function(t){var n=m,a=t.target.value;"value"in e||f(a);var r=e.onChange;r&&a!==n&&r(t)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,f=e.buttonStyle,h=void 0===f?"outline":f,y=e.disabled,g=e.children,b=e.size,C=e.style,j=e.id,k=e.onMouseEnter,E=e.onMouseLeave,P=l("radio",u),O="".concat(P,"-group"),M=g;v&&v.length>0&&(M=v.map((function(e){return"string"===typeof e||"number"===typeof e?c.createElement(x,{key:e.toString(),prefixCls:P,disabled:y,value:e,checked:m===e},e):c.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||y,value:e.value,checked:m===e.value,style:e.style},e.label)})));var I=b||s,N=i()(O,"".concat(O,"-").concat(h),(n={},(0,a.c)(n,"".concat(O,"-").concat(I),I),(0,a.c)(n,"".concat(O,"-rtl"),"rtl"===o),n),p);return c.createElement("div",(0,r.c)({},(0,w.c)(e),{className:N,style:C,onMouseEnter:k,onMouseLeave:E,id:j,ref:t}),M)}())}));const P=c.memo(E);var O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},M=function(e,t){var n=c.useContext(d.MT).getPrefixCls,a=e.prefixCls,l=O(e,["prefixCls"]),o=n("radio",a);return c.createElement(h,{value:"button"},c.createElement(x,(0,r.c)({prefixCls:o},l,{type:"radio",ref:t})))};const I=c.forwardRef(M);var N=x;N.Button=I,N.Group=P;const S=N},76436:(e,t,n)=>{n.d(t,{c:()=>f});var a=n(45072),r=n(52536),c=n(31024),l=n(30800),o=n(87088),i=n(92920),s=n(62988),u=n(33504),d=n(99584),p=n(46736),v=n.n(p),m=function(e){(0,s.c)(n,e);var t=(0,u.c)(n);function n(e){var a;(0,o.c)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.c)((0,l.c)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,i.c)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,o=t.style,i=t.name,s=t.id,u=t.type,p=t.disabled,m=t.readOnly,f=t.tabIndex,h=t.onClick,y=t.onFocus,g=t.onBlur,b=t.onKeyDown,x=t.onKeyPress,C=t.onKeyUp,j=t.autoFocus,k=t.value,w=t.required,E=(0,c.c)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),O=this.state.checked,M=v()(n,l,(e={},(0,r.c)(e,"".concat(n,"-checked"),O),(0,r.c)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:M,style:o},d.createElement("input",(0,a.c)({name:i,id:s,type:u,required:w,readOnly:m,disabled:p,tabIndex:f,className:"".concat(n,"-input"),checked:!!O,onClick:h,onFocus:y,onBlur:g,onKeyUp:C,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:k},P)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.c)((0,l.c)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const f=m}}]);