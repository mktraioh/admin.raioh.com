"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9872],{424:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(99584),r=n(79416),c=n(32712),l=n(51840),o=n(48376),i=n(97884);const s=()=>{const e=(0,c.OY)(),{languages:t,defaultLang:n}=(0,c.w1)((e=>e.formLang),c.G);(0,a.useEffect)((()=>{o.c.getAllActive().then((t=>{let{data:n}=t;e((0,l.Up)(n)),e((0,l.uY)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.cp.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,l.uY)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,i.jsx)(r.cp.Button,{value:e.locale,children:e.title},e.id)))})})}},19872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(99584),r=n(65732),c=n(68496),l=n(37728),o=n(61072),i=n(23424),s=n(424),u=n(32712),d=n(18896),p=n(75808),v=n(65236),m=n(48740),f=n(75568),h=n(97884);const y=()=>{const{t:e}=(0,v.G)(),t=(0,i.i6)(),n=(0,u.OY)(),{activeMenu:y}=(0,u.w1)((e=>e.menu),u.G),[g,b]=(0,a.useState)(!1),[x]=r.c.useForm(),[j,k]=(0,a.useState)(null),{uuid:C}=(0,i.W4)(),{languages:w}=(0,u.w1)((e=>e.formLang),u.G);(0,a.useEffect)((()=>()=>{const e=x.getFieldsValue(!0);n((0,d.MH)({activeMenu:y,data:e}))}),[]);function E(e){if(!e)return{};const{translations:t}=e,n=w.map((e=>{var n,a;return{["title[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{var e;y.refetch&&(e=C,b(!0),p.c.getById(e).then((e=>{let t=e.data;const a={...t,...E(t),image:[(r=t.img,{name:r,url:r})],keywords:t.keywords.split(",")};var r;n((0,d.MH)({activeMenu:y,data:a})),x.setFieldsValue(a)})).finally((()=>{b(!1),n((0,d.CO)(y))})))}),[y.refetch]),(0,h.jsx)(c.default,{title:e("recipe.category.clone"),extra:(0,h.jsx)(s.c,{}),children:g?(0,h.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,h.jsx)(l.c,{size:"large",className:"mt-5 pt-5"})}):(0,h.jsx)(f.c,{form:x,handleSubmit:(a,r)=>{var c;const l={...a,type:"receipt",active:a.active?1:0,keywords:a.keywords.join(","),parent_id:null,"images[0]":null===(c=r[0])||void 0===c?void 0:c.name},i="catalog/recipe-categories";p.c.create(l).then((()=>{o.m4.success(e("successfully.updated")),(0,u.wN)((()=>{n((0,d.MF)({...y,nextUrl:i})),n((0,m.aY)({}))})),t("/".concat(i))})).catch((e=>k(e.response.data.params)))},error:j})})}},75568:(e,t,n)=>{n.d(t,{c:()=>h});var a=n(99584),r=n(65732),c=n(68768),l=n(10260),o=n(46712),i=n(2664),s=n(26012),u=n(87228),d=n(64212),p=n(40936),v=n(32712),m=n(65236),f=n(97884);function h(e){var t,n;let{form:h,handleSubmit:y,error:g}=e;const{t:b}=(0,m.G)(),{activeMenu:x}=(0,v.w1)((e=>e.menu),v.G),{defaultLang:j,languages:k}=(0,v.w1)((e=>e.formLang),v.G),[C,w]=(0,a.useState)(null!==(t=x.data)&&void 0!==t&&t.image?null===(n=x.data)||void 0===n?void 0:n.image:[]),[E,P]=(0,a.useState)(!1);return(0,f.jsxs)(r.c,{name:"recipe-category-form",layout:"vertical",onFinish:e=>{P(!0),y(e,C).finally((()=>P(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...x.data},form:h,children:[(0,f.jsxs)(c.c,{gutter:12,children:[(0,f.jsx)(l.c,{span:12,children:k.map(((e,t)=>(0,f.jsx)(r.c.Item,{label:b("name"),name:"title[".concat(e.locale,"]"),help:g&&g["title.".concat(j)]?g["title.".concat(j)][0]:null,validateStatus:g?"error":"success",rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==j?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(b("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(b("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(b("required")))}],hidden:e.locale!==j,children:(0,f.jsx)(o.default,{placeholder:b("name")})},e.title+t)))}),(0,f.jsx)(l.c,{span:12,children:k.map(((e,t)=>(0,f.jsx)(r.c.Item,{label:b("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==j?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(b("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<5?Promise.reject(new Error(b("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(b("required")))}],hidden:e.locale!==j,children:(0,f.jsx)(d.c,{rows:4})},e.locale+t)))}),(0,f.jsx)(l.c,{span:12,children:(0,f.jsx)(r.c.Item,{label:b("keywords"),name:"keywords",rules:[{required:!0,message:b("required")}],children:(0,f.jsx)(i.default,{mode:"tags",style:{width:"100%"}})})}),(0,f.jsx)(l.c,{span:4,children:(0,f.jsx)(r.c.Item,{label:b("image"),name:"images",rules:[{validator:()=>0===(null===C||void 0===C?void 0:C.length)?Promise.reject(new Error(b("required"))):Promise.resolve()}],children:(0,f.jsx)(p.c,{type:"categories",imageList:C,setImageList:w,form:h,multiple:!1})})}),(0,f.jsx)(l.c,{span:2,children:(0,f.jsx)(r.c.Item,{label:b("active"),name:"active",valuePropName:"checked",children:(0,f.jsx)(s.c,{})})})]}),(0,f.jsx)(u.c,{type:"primary",htmlType:"submit",loading:E,children:b("submit")})]})}},79416:(e,t,n)=>{n.d(t,{cp:()=>S});var a=n(52536),r=n(45072),c=n(99584),l=n(76436),o=n(46736),i=n.n(o),s=n(71072),u=n(93500),d=n(67648),p=c.createContext(null),v=p.Provider;const m=p;var f=c.createContext(null),h=f.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=function(e,t){var n,o=c.useContext(m),p=c.useContext(f),v=c.useContext(d.MT),h=v.getPrefixCls,g=v.direction,b=c.useRef(),x=(0,s.qC)(t,b),j=(0,c.useContext)(u.A9).isFormItemInput,k=e.prefixCls,C=e.className,w=e.children,E=e.style,P=y(e,["prefixCls","className","children","style"]),O=h("radio",k),M="button"===((null===o||void 0===o?void 0:o.optionType)||p)?"".concat(O,"-button"):O,N=(0,r.c)({},P);o&&(N.name=o.name,N.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===o||void 0===o?void 0:o.onChange)||void 0===a||a.call(o,t)},N.checked=e.value===o.value,N.disabled=e.disabled||o.disabled);var I=i()("".concat(M,"-wrapper"),(n={},(0,a.c)(n,"".concat(M,"-wrapper-checked"),N.checked),(0,a.c)(n,"".concat(M,"-wrapper-disabled"),N.disabled),(0,a.c)(n,"".concat(M,"-wrapper-rtl"),"rtl"===g),(0,a.c)(n,"".concat(M,"-wrapper-in-form-item"),j),n),C);return c.createElement("label",{className:I,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},c.createElement(l.c,(0,r.c)({},N,{type:"radio",prefixCls:M,ref:x})),void 0!==w?c.createElement("span",null,w):null)},b=c.forwardRef(g);b.displayName="Radio";const x=b;var j=n(32920),k=n(68576),C=n(62672),w=n(45792),E=c.forwardRef((function(e,t){var n=c.useContext(d.MT),l=n.getPrefixCls,o=n.direction,s=c.useContext(C.c),u=(0,k.c)(e.defaultValue,{value:e.value}),p=(0,j.c)(u,2),m=p[0],f=p[1];return c.createElement(v,{value:{onChange:function(t){var n=m,a=t.target.value;"value"in e||f(a);var r=e.onChange;r&&a!==n&&r(t)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,f=e.buttonStyle,h=void 0===f?"outline":f,y=e.disabled,g=e.children,b=e.size,j=e.style,k=e.id,C=e.onMouseEnter,E=e.onMouseLeave,P=l("radio",u),O="".concat(P,"-group"),M=g;v&&v.length>0&&(M=v.map((function(e){return"string"===typeof e||"number"===typeof e?c.createElement(x,{key:e.toString(),prefixCls:P,disabled:y,value:e,checked:m===e},e):c.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||y,value:e.value,checked:m===e.value,style:e.style},e.label)})));var N=b||s,I=i()(O,"".concat(O,"-").concat(h),(n={},(0,a.c)(n,"".concat(O,"-").concat(N),N),(0,a.c)(n,"".concat(O,"-rtl"),"rtl"===o),n),p);return c.createElement("div",(0,r.c)({},(0,w.c)(e),{className:I,style:j,onMouseEnter:C,onMouseLeave:E,id:k,ref:t}),M)}())}));const P=c.memo(E);var O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},M=function(e,t){var n=c.useContext(d.MT).getPrefixCls,a=e.prefixCls,l=O(e,["prefixCls"]),o=n("radio",a);return c.createElement(h,{value:"button"},c.createElement(x,(0,r.c)({prefixCls:o},l,{type:"radio",ref:t})))};const N=c.forwardRef(M);var I=x;I.Button=N,I.Group=P;const S=I},76436:(e,t,n)=>{n.d(t,{c:()=>f});var a=n(45072),r=n(52536),c=n(31024),l=n(30800),o=n(87088),i=n(92920),s=n(62988),u=n(33504),d=n(99584),p=n(46736),v=n.n(p),m=function(e){(0,s.c)(n,e);var t=(0,u.c)(n);function n(e){var a;(0,o.c)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.c)((0,l.c)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,i.c)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,o=t.style,i=t.name,s=t.id,u=t.type,p=t.disabled,m=t.readOnly,f=t.tabIndex,h=t.onClick,y=t.onFocus,g=t.onBlur,b=t.onKeyDown,x=t.onKeyPress,j=t.onKeyUp,k=t.autoFocus,C=t.value,w=t.required,E=(0,c.c)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),O=this.state.checked,M=v()(n,l,(e={},(0,r.c)(e,"".concat(n,"-checked"),O),(0,r.c)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:M,style:o},d.createElement("input",(0,a.c)({name:i,id:s,type:u,required:w,readOnly:m,disabled:p,tabIndex:f,className:"".concat(n,"-input"),checked:!!O,onClick:h,onFocus:y,onBlur:g,onKeyUp:j,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:C},P)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.c)((0,l.c)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const f=m}}]);