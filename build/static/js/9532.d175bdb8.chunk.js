"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9532],{74200:(e,t,n)=>{n.d(t,{c:()=>v});var a=n(99584),o=n(65732),r=n(65236),c=n(86568),l=n(51872),i=n.n(l),s=n(52640),u=n(78544),d=n(61072),p=n(97884);function v(e){let{form:t,lang:n,languages:l}=e;const{t:v}=(0,r.G)();function m(e){e.plugins.get("FileRepository").createUploadAdapter=e=>function(e){return{upload:()=>new Promise(((t,n)=>{const a=new FormData;e.file.then((e=>{e.size/1024/1024<2||(d.m4.error(v("min.2.mb")),n()),a.append("image",e),a.append("type","blogs"),u.c.upload(a).then((e=>{let{data:n}=e;t({default:"".concat(s.cd+n.title)})})).catch((e=>{n(e)}))}))}))}}(e)}return(0,p.jsx)(a.Fragment,{children:l.map((e=>(0,p.jsx)(o.c.Item,{label:v("description"),name:"description[".concat(e.locale,"]"),valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:e.locale===n,message:v("required")}],hidden:e.locale!==n,children:(0,p.jsx)(c.CKEditor,{editor:i(),config:{extraPlugins:[m]},onBlur:(n,a)=>{const o=a.getData();t.setFieldsValue({["description[".concat(e.value,"]")]:o})}})},"desc"+e.locale)))})}},424:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(99584),o=n(79416),r=n(32712),c=n(51840),l=n(48376),i=n(97884);const s=()=>{const e=(0,r.OY)(),{languages:t,defaultLang:n}=(0,r.w1)((e=>e.formLang),r.G);(0,a.useEffect)((()=>{l.c.getAllActive().then((t=>{let{data:n}=t;e((0,c.Up)(n)),e((0,c.uY)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.cp.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,c.uY)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,i.jsx)(o.cp.Button,{value:e.locale,children:e.title},e.id)))})})}},71376:(e,t,n)=>{n.d(t,{g:()=>s});var a=n(99584),o=n(95976),r=n.n(o),c=n(2664),l=n(37728),i=n(97884);const s=e=>{let{fetchOptions:t,debounceTimeout:n=400,onClear:o,...s}=e;const[u,d]=(0,a.useState)(!1),[p,v]=(0,a.useState)([]),m=(0,a.useMemo)((()=>r()((e=>{v([]),d(!0),t(e).then((e=>{v(e),d(!1)}))}),n)),[t,n]);return(0,i.jsx)(c.default,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,onClear:()=>{m(""),o&&o()},notFoundContent:u?(0,i.jsx)(l.c,{size:"small"}):"no results",...s,options:p,onFocus:()=>{m("")}})}},56384:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t["".concat(n,"[").concat(e.locale,"]")]?void 0:t["".concat(n,"[").concat(e.locale,"]")]})));return Object.assign({},...a)}n.d(t,{c:()=>a})},53576:(e,t,n)=>{n.d(t,{c:()=>h});var a=n(99584),o=n(65732),r=n(68768),c=n(10260),l=n(46712),i=n(26012),s=n(87228),u=n(32712),d=n(74200),p=n(71376),v=n(65236),m=n(75808),f=n(97884);function h(e){let{form:t,handleSubmit:n}=e;const{t:h}=(0,v.G)(),{defaultLang:y,languages:g}=(0,u.w1)((e=>e.formLang),u.G),{activeMenu:b}=(0,u.w1)((e=>e.menu),u.G),[x,C]=(0,a.useState)(!1);return(0,f.jsxs)(o.c,{name:"basic",layout:"vertical",onFinish:e=>{C(!0),n(e).finally((()=>C(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...b.data},form:t,children:[(0,f.jsxs)(r.c,{gutter:12,children:[(0,f.jsx)(c.c,{span:12,children:g.map(((e,t)=>(0,f.jsx)(o.c.Item,{label:h("name"),name:"title[".concat(e.locale,"]"),rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==y?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(h("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(h("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(h("required")))}],hidden:e.locale!==y,children:(0,f.jsx)(l.default,{placeholder:h("name")})},(null===e||void 0===e?void 0:e.title)+t)))}),(0,f.jsx)(c.c,{span:12}),(0,f.jsx)(c.c,{span:24,children:(0,f.jsx)(d.c,{form:t,lang:y,languages:g})}),(0,f.jsx)(c.c,{span:12,children:(0,f.jsx)(o.c.Item,{label:h("category"),name:"category_id",rules:[{required:!0,message:h("required")}],children:(0,f.jsx)(p.g,{fetchOptions:async function(e){const t={search:e,type:"career",active:1};return m.c.getAll(t).then((e=>e.data.map((e=>({label:e.translation?e.translation.title:"no name",value:e.id})))))}})})}),(0,f.jsx)(c.c,{span:12,children:g.map(((e,t)=>(0,f.jsx)(o.c.Item,{label:h("location"),name:"address[".concat(e.locale,"]"),rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==y?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(h("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(h("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(h("required")))}],hidden:e.locale!==y,children:(0,f.jsx)(l.default,{})},e.locale+t)))}),(0,f.jsx)(c.c,{span:12,children:(0,f.jsx)(o.c.Item,{label:h("active"),name:"active",valuePropName:"checked",children:(0,f.jsx)(i.c,{})})}),(0,f.jsx)(c.c,{span:12}),(0,f.jsx)(c.c,{span:24,className:"mb-5"})]}),(0,f.jsx)(s.c,{type:"primary",htmlType:"submit",loading:x,children:h("submit")})]})}},79416:(e,t,n)=>{n.d(t,{cp:()=>S});var a=n(52536),o=n(45072),r=n(99584),c=n(76436),l=n(46736),i=n.n(l),s=n(71072),u=n(93500),d=n(67648),p=r.createContext(null),v=p.Provider;const m=p;var f=r.createContext(null),h=f.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},g=function(e,t){var n,l=r.useContext(m),p=r.useContext(f),v=r.useContext(d.MT),h=v.getPrefixCls,g=v.direction,b=r.useRef(),x=(0,s.qC)(t,b),C=(0,r.useContext)(u.A9).isFormItemInput,j=e.prefixCls,k=e.className,w=e.children,P=e.style,E=y(e,["prefixCls","className","children","style"]),O=h("radio",j),F="button"===((null===l||void 0===l?void 0:l.optionType)||p)?"".concat(O,"-button"):O,N=(0,o.c)({},E);l&&(N.name=l.name,N.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===l||void 0===l?void 0:l.onChange)||void 0===a||a.call(l,t)},N.checked=e.value===l.value,N.disabled=e.disabled||l.disabled);var I=i()("".concat(F,"-wrapper"),(n={},(0,a.c)(n,"".concat(F,"-wrapper-checked"),N.checked),(0,a.c)(n,"".concat(F,"-wrapper-disabled"),N.disabled),(0,a.c)(n,"".concat(F,"-wrapper-rtl"),"rtl"===g),(0,a.c)(n,"".concat(F,"-wrapper-in-form-item"),C),n),k);return r.createElement("label",{className:I,style:P,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(c.c,(0,o.c)({},N,{type:"radio",prefixCls:F,ref:x})),void 0!==w?r.createElement("span",null,w):null)},b=r.forwardRef(g);b.displayName="Radio";const x=b;var C=n(32920),j=n(68576),k=n(62672),w=n(45792),P=r.forwardRef((function(e,t){var n=r.useContext(d.MT),c=n.getPrefixCls,l=n.direction,s=r.useContext(k.c),u=(0,j.c)(e.defaultValue,{value:e.value}),p=(0,C.c)(u,2),m=p[0],f=p[1];return r.createElement(v,{value:{onChange:function(t){var n=m,a=t.target.value;"value"in e||f(a);var o=e.onChange;o&&a!==n&&o(t)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,f=e.buttonStyle,h=void 0===f?"outline":f,y=e.disabled,g=e.children,b=e.size,C=e.style,j=e.id,k=e.onMouseEnter,P=e.onMouseLeave,E=c("radio",u),O="".concat(E,"-group"),F=g;v&&v.length>0&&(F=v.map((function(e){return"string"===typeof e||"number"===typeof e?r.createElement(x,{key:e.toString(),prefixCls:E,disabled:y,value:e,checked:m===e},e):r.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:m===e.value,style:e.style},e.label)})));var N=b||s,I=i()(O,"".concat(O,"-").concat(h),(n={},(0,a.c)(n,"".concat(O,"-").concat(N),N),(0,a.c)(n,"".concat(O,"-rtl"),"rtl"===l),n),p);return r.createElement("div",(0,o.c)({},(0,w.c)(e),{className:I,style:C,onMouseEnter:k,onMouseLeave:P,id:j,ref:t}),F)}())}));const E=r.memo(P);var O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},F=function(e,t){var n=r.useContext(d.MT).getPrefixCls,a=e.prefixCls,c=O(e,["prefixCls"]),l=n("radio",a);return r.createElement(h,{value:"button"},r.createElement(x,(0,o.c)({prefixCls:l},c,{type:"radio",ref:t})))};const N=r.forwardRef(F);var I=x;I.Button=N,I.Group=E;const S=I},76436:(e,t,n)=>{n.d(t,{c:()=>f});var a=n(45072),o=n(52536),r=n(31024),c=n(30800),l=n(87088),i=n(92920),s=n(62988),u=n(33504),d=n(99584),p=n(46736),v=n.n(p),m=function(e){(0,s.c)(n,e);var t=(0,u.c)(n);function n(e){var a;(0,l.c)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,o=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),o&&o({target:(0,c.c)((0,c.c)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var o="checked"in e?e.checked:e.defaultChecked;return a.state={checked:o},a}return(0,i.c)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,c=t.className,l=t.style,i=t.name,s=t.id,u=t.type,p=t.disabled,m=t.readOnly,f=t.tabIndex,h=t.onClick,y=t.onFocus,g=t.onBlur,b=t.onKeyDown,x=t.onKeyPress,C=t.onKeyUp,j=t.autoFocus,k=t.value,w=t.required,P=(0,r.c)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(P).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=P[t]),e}),{}),O=this.state.checked,F=v()(n,c,(e={},(0,o.c)(e,"".concat(n,"-checked"),O),(0,o.c)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:F,style:l},d.createElement("input",(0,a.c)({name:i,id:s,type:u,required:w,readOnly:m,disabled:p,tabIndex:f,className:"".concat(n,"-input"),checked:!!O,onClick:h,onFocus:y,onBlur:g,onKeyUp:C,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:k},E)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,c.c)((0,c.c)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const f=m}}]);