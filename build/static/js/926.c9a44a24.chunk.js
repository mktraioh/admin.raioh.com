"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[926],{53992:(e,t,n)=>{n.d(t,{c:()=>p});var a=n(99584),l=n(49308),o=n(92200),r=n(66296),c=n(26012),s=n(72192),i=n(35928),u=n(87228),d=n(55512),v=n(65236),h=n(97884);const{Text:f}=l.default,p=e=>{let{columns:t=[],setColumns:n,style:l,size:p="",iconOnly:m}=e;const{t:g}=(0,v.G)(),[x,y]=(0,a.useState)(!1),b=(0,h.jsx)(o.c,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,h.jsx)(o.c.Item,{children:(0,h.jsxs)(r.c,{className:"d-flex justify-content-between",children:[(0,h.jsx)(f,{children:e.title}),(0,h.jsx)(c.c,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(a)}(e),disabled:1===a})]})},e+a)))});return(0,h.jsx)(s.c,{overlay:b,trigger:["click"],onVisibleChange:e=>{y(e)},visible:x,children:(0,h.jsx)(i.c,{title:g("change.columns"),children:(0,h.jsx)(u.c,{style:{...l},size:p,icon:(0,h.jsx)(d.c,{}),children:m?null:g("Columns")})})})}},10920:(e,t,n)=>{n.d(t,{I:()=>i});var a=n(99584),l=n(95976),o=n.n(l),r=n(2664),c=n(37728),s=n(97884);const i=e=>{let{fetchOptions:t,debounceTimeout:n=400,hasMore:l,...i}=e;const[u,d]=(0,a.useState)(!1),[v,h]=(0,a.useState)([]),[f,p]=(0,a.useState)(!1),[m,g]=(0,a.useState)(null),[x,y]=(0,a.useState)(1),b=(0,a.useMemo)((()=>o()((e=>{h([]),g(e),d(!0),t({search:e}).then((e=>{h(e),y(2),d(!1)})).finally((()=>p(!1)))}),n)),[t,n,x]);return(0,s.jsxs)(r.default,{showSearch:!0,allowClear:!0,onPopupScroll:async e=>{const n=e.target;f||n.scrollTop+n.offsetHeight!==n.scrollHeight||l&&(p(!0),n.scrollTo(0,n.scrollHeight),t({search:m,page:x}).then((e=>{y((e=>e+1)),h([...v,...e])})).finally((()=>p(!1))))},labelInValue:!0,filterOption:!1,onSearch:b,notFoundContent:u?(0,s.jsx)(c.c,{size:"small"}):"no results",onFocus:()=>{v.length||b("")},...i,children:[v.map(((e,t)=>(0,s.jsx)(r.default.Option,{value:e.value,children:e.label},t))),f&&(0,s.jsx)(r.default.Option,{children:(0,s.jsx)(c.c,{size:"small"})})]})}},19576:(e,t,n)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{c:()=>a})},40926:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var a=n(99584),l=n(98948),o=n(46162),r=n(66296),c=n(87228),s=n(68496),i=n(15752),u=n(32712),d=n(18896),v=n(68256),h=n(19576),f=n(65236),p=n(83800),m=n(95884),g=n(37564),x=n(77180),y=n(94336),b=n(83072),C=n.n(b),w=n(97884);function j(e){var t;let{id:n,handleCancel:l}=e;const[o,r]=(0,a.useState)({}),[s,i]=(0,a.useState)(!1),{t:u}=(0,f.G)(),d=null===o||void 0===o||null===(t=o.comment)||void 0===t?void 0:t.split(","),v=null===d||void 0===d?void 0:d.at(0),h=null===d||void 0===d?void 0:d.at(1),p=null===d||void 0===d?void 0:d.at(2);return(0,a.useEffect)((()=>{!function(e){i(!0),y.c.getById(e).then((e=>r(e.data))).finally((()=>i(!1)))}(n)}),[n]),(0,w.jsx)(m.default,{visible:!!n,title:u("shop.review"),onCancel:l,footer:(0,w.jsx)(c.c,{type:"default",onClick:l,children:u("cancel")}),children:s?(0,w.jsx)(x.c,{}):(0,w.jsxs)(g.c,{bordered:!0,children:[(0,w.jsx)(g.c.Item,{span:3,label:u("id"),children:o.id}),(0,w.jsx)(g.c.Item,{span:3,label:u("user"),children:v}),(0,w.jsx)(g.c.Item,{span:3,label:u("rating"),children:o.rating}),(0,w.jsx)(g.c.Item,{span:3,label:u("phone.number"),children:h}),(0,w.jsx)(g.c.Item,{span:3,label:u("comment"),children:p}),(0,w.jsx)(g.c.Item,{span:3,label:u("created.at"),children:C()(o.created_at).format("DD.MM.YYYY HH:mm")})]})})}var k=n(53992),S=n(48820),H=n(10920);function V(){var e;const{t:t}=(0,f.G)(),n=(0,u.OY)(),[m,g]=(0,a.useState)(null),[x,y]=(0,a.useState)([{title:t("id"),dataIndex:"id",key:"order",sorter:!0,is_show:!0},{title:t("user"),dataIndex:"user",key:"user",is_show:!0,render:(e,t)=>{var n;const a=null===t||void 0===t||null===(n=t.comment)||void 0===n?void 0:n.split(","),l=null===a||void 0===a?void 0:a.at(0);return(0,w.jsx)("div",{className:"text-hover",children:l})}},{title:t("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:e=>(0,w.jsx)(o.c,{disabled:!0,defaultValue:e})},{title:t("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>C()(e).format("DD.MM.YYYY")},{title:t("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,w.jsx)(r.c,{children:(0,w.jsx)(c.c,{type:"primary",icon:(0,w.jsx)(l.c,{}),onClick:()=>M(t.id)})})}]),[b,V]=(0,a.useState)(null),[I,M]=(0,a.useState)(null),{activeMenu:O}=(0,u.w1)((e=>e.menu),u.G),{reviews:D,meta:z,loading:E,params:R}=(0,u.w1)((e=>e.shopReviews),u.G);(0,a.useEffect)((()=>{O.refetch&&(n((0,p.go)()),n((0,d.CO)(O)))}),[O.refetch]),(0,v.c)((()=>{var e;const t=O.data,a={sort:null===t||void 0===t?void 0:t.sort,column:null===t||void 0===t?void 0:t.column,perPage:null===t||void 0===t?void 0:t.perPage,page:null===t||void 0===t?void 0:t.page,type:"shop",type_id:null===t||void 0===t||null===(e=t.selectedShop)||void 0===e?void 0:e.value};n((0,p.go)(a))}),[O.data]);const _={id:b,onChange:e=>{V(e)}};return(0,w.jsxs)(s.default,{title:t("shop.reviews"),extra:(0,w.jsxs)(r.c,{wrap:!0,children:[(0,w.jsx)(H.I,{placeholder:t("select.shop"),hasMore:null===m||void 0===m?void 0:m.next,loading:E,fetchOptions:async function(e){let{search:t,page:n}=e;const a={search:0===(null===t||void 0===t?void 0:t.length)?void 0:t,status:"approved",page:n};return S.c.search(a).then((e=>(g(e.links),e.data.map((e=>({label:null!==e.translation?e.translation.title:"no name",value:e.id}))))))},style:{minWidth:180},onChange:e=>(e=>{const t=O.data;n((0,d.MH)({activeMenu:O,data:{...t,...e}}))})({selectedShop:e}),value:null===(e=O.data)||void 0===e?void 0:e.selectedShop}),(0,w.jsx)(k.c,{columns:x,setColumns:y})]}),children:[(0,w.jsx)(i.c,{scroll:{x:!0},rowSelection:_,columns:null===x||void 0===x?void 0:x.filter((e=>e.is_show)),dataSource:D,pagination:{pageSize:R.perPage,page:R.page,total:z.total,defaultCurrent:R.page},rowKey:e=>e.id,onChange:function(e,t,a){const{pageSize:l,current:o}=e,{field:r,order:c}=a,s=(0,h.c)(c);n((0,d.MH)({activeMenu:O,data:{perPage:l,page:o,column:r,sort:s}}))},loading:E}),I&&(0,w.jsx)(j,{id:I,handleCancel:()=>M(null)})]})}},55512:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(30800),l=n(99584);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var r=n(47164),c=function(e,t){return l.createElement(r.c,(0,a.c)((0,a.c)({},e),{},{ref:t,icon:o}))};c.displayName="TableOutlined";const s=l.forwardRef(c)},46162:(e,t,n)=>{n.d(t,{c:()=>V});var a=n(45072),l=n(99584),o=n(30800),r=n(52536),c=n(87088),s=n(92920),i=n(62988),u=n(33504),d=n(32232),v=n(46736),h=n.n(v),f=n(8120);var p=function(e){(0,i.c)(n,e);var t=(0,u.c)(n);function n(){var e;(0,c.c)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).onHover=function(t){var n=e.props;(0,n.onHover)(t,n.index)},e.onClick=function(t){var n=e.props;(0,n.onClick)(t,n.index)},e.onKeyDown=function(t){var n=e.props,a=n.onClick,l=n.index;13===t.keyCode&&a(t,l)},e}return(0,s.c)(n,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,n=e.index,a=e.value,l=e.allowHalf,o=e.focused,r=n+1,c=t;return 0===a&&0===n&&o?c+=" ".concat(t,"-focused"):l&&a+.5>=r&&a<r?(c+=" ".concat(t,"-half ").concat(t,"-active"),o&&(c+=" ".concat(t,"-focused"))):(c+=" ".concat(t,r<=a?"-full":"-zero"),r===a&&o&&(c+=" ".concat(t,"-focused"))),c}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,n=this.onKeyDown,a=this.props,o=a.disabled,r=a.prefixCls,c=a.character,s=a.characterRender,i=a.index,u=a.count,d=a.value,v="function"===typeof c?c(this.props):c,h=l.createElement("li",{className:this.getClassName()},l.createElement("div",{onClick:o?null:t,onKeyDown:o?null:n,onMouseMove:o?null:e,role:"radio","aria-checked":d>i?"true":"false","aria-posinset":i+1,"aria-setsize":u,tabIndex:o?-1:0},l.createElement("div",{className:"".concat(r,"-first")},v),l.createElement("div",{className:"".concat(r,"-second")},v)));return s&&(h=s(h,this.props)),h}}]),n}(l.Component);function m(){}var g=function(e){(0,i.c)(n,e);var t=(0,u.c)(n);function n(e){var a;(0,c.c)(this,n),(a=t.call(this,e)).stars=void 0,a.rate=void 0,a.onHover=function(e,t){var n=a.props.onHoverChange,l=a.getStarValue(t,e.pageX);l!==a.state.cleanedValue&&a.setState({hoverValue:l,cleanedValue:null}),n(l)},a.onMouseLeave=function(){var e=a.props.onHoverChange;a.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},a.onClick=function(e,t){var n=a.props.allowClear,l=a.state.value,o=a.getStarValue(t,e.pageX),r=!1;n&&(r=o===l),a.onMouseLeave(),a.changeValue(r?0:o),a.setState({cleanedValue:r?o:null})},a.onFocus=function(){var e=a.props.onFocus;a.setState({focused:!0}),e&&e()},a.onBlur=function(){var e=a.props.onBlur;a.setState({focused:!1}),e&&e()},a.onKeyDown=function(e){var t=e.keyCode,n=a.props,l=n.count,o=n.allowHalf,r=n.onKeyDown,c="rtl"===n.direction,s=a.state.value;t===f.c.RIGHT&&s<l&&!c?(s+=o?.5:1,a.changeValue(s),e.preventDefault()):t===f.c.LEFT&&s>0&&!c||t===f.c.RIGHT&&s>0&&c?(s-=o?.5:1,a.changeValue(s),e.preventDefault()):t===f.c.LEFT&&s<l&&c&&(s+=o?.5:1,a.changeValue(s),e.preventDefault()),r&&r(e)},a.saveRef=function(e){return function(t){a.stars[e]=t}},a.saveRate=function(e){a.rate=e};var l=e.value;return void 0===l&&(l=e.defaultValue),a.stars={},a.state={value:l,focused:!1,cleanedValue:null},a}return(0,s.c)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,d.c)(this.stars[e])}},{key:"getStarValue",value:function(e,t){var n=this.props,a=n.allowHalf,l="rtl"===n.direction,o=e+1;if(a){var r=this.getStarDOM(e),c=function(e){var t=function(e){var t,n,a=e.ownerDocument,l=a.body,o=a&&a.documentElement,r=e.getBoundingClientRect();return t=r.left,n=r.top,{left:t-=o.clientLeft||l.clientLeft||0,top:n-=o.clientTop||l.clientTop||0}}(e),n=e.ownerDocument,a=n.defaultView||n.parentWindow;return t.left+=function(e){var t=e.pageXOffset,n="scrollLeft";if("number"!==typeof t){var a=e.document;"number"!==typeof(t=a.documentElement[n])&&(t=a.body[n])}return t}(a),t.left}(r),s=r.clientWidth;(l&&t-c>s/2||!l&&t-c<s/2)&&(o-=.5)}return o}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,n=e.allowHalf,a=e.style,o=e.id,c=e.prefixCls,s=e.disabled,i=e.className,u=e.character,d=e.characterRender,v=e.tabIndex,f=e.direction,m=this.state,g=m.value,x=m.hoverValue,y=m.focused,b=[],C=s?"".concat(c,"-disabled"):"",w=0;w<t;w+=1)b.push(l.createElement(p,{ref:this.saveRef(w),index:w,count:t,disabled:s,prefixCls:"".concat(c,"-star"),allowHalf:n,value:void 0===x?g:x,onClick:this.onClick,onHover:this.onHover,key:w,character:u,characterRender:d,focused:y}));var j=h()(c,C,i,(0,r.c)({},"".concat(c,"-rtl"),"rtl"===f));return l.createElement("ul",{className:j,style:a,id:o,onMouseLeave:s?null:this.onMouseLeave,tabIndex:s?-1:v,onFocus:s?null:this.onFocus,onBlur:s?null:this.onBlur,onKeyDown:s?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},b)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&void 0!==e.value?(0,o.c)((0,o.c)({},t),{},{value:e.value}):t}}]),n}(l.Component);g.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:m,character:"\u2605",onHoverChange:m,tabIndex:0,direction:"ltr"};const x=g;const y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};var b=n(47164),C=function(e,t){return l.createElement(b.c,(0,o.c)((0,o.c)({},e),{},{ref:t,icon:y}))};C.displayName="StarFilled";const w=l.forwardRef(C);var j=n(35928),k=n(67648),S=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},H=l.forwardRef((function(e,t){var n=e.prefixCls,o=e.tooltips,r=S(e,["prefixCls","tooltips"]),c=l.useContext(k.MT),s=c.getPrefixCls,i=c.direction,u=s("rate",n);return l.createElement(x,(0,a.c)({ref:t,characterRender:function(e,t){var n=t.index;return o?l.createElement(j.c,{title:o[n]},e):e}},r,{prefixCls:u,direction:i}))}));H.displayName="Rate",H.defaultProps={character:l.createElement(w,null)};const V=H}}]);