"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[180],{1428:(e,t,n)=>{n.d(t,{c:()=>r});n(99584);var a=n(87228),l=n(59424),o=n(61072),s=n(65236),c=n(75088),i=n(97884);function r(e){let{size:t="",onClick:n,type:r="default",...d}=e;const{t:u}=(0,s.G)(),{isDemo:v}=(0,c.c)();return(0,i.jsx)(a.c,{size:t,icon:(0,i.jsx)(l.c,{}),onClick:e=>{v?o.m4.warning(u("cannot.work.demo")):n(e)},type:r,...d})}},17408:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(68496),l=n(24100),o=(n(99584),n(97884));const s=e=>{let{loading:t}=e;return(0,o.jsx)(a.default,{className:"order-card",children:(0,o.jsx)(l.c,{loading:t,avatar:!0,active:!0})})}},40748:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(99584),l=n(46712),o=n(78816),s=n(6724),c=n(97884);function i(e){let{handleChange:t,defaultValue:n,resetSearch:i,...r}=e;const[d,u]=(0,a.useState)(n),v=(0,a.useMemo)((()=>(0,o.debounce)((e=>{t(e)}),800)),[t]);return(0,a.useEffect)((()=>{u(n)}),[i,n]),(0,c.jsx)(l.default,{value:d,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,c.jsx)(s.c,{}),...r})}},71376:(e,t,n)=>{n.d(t,{g:()=>r});var a=n(99584),l=n(95976),o=n.n(l),s=n(2664),c=n(37728),i=n(97884);const r=e=>{let{fetchOptions:t,debounceTimeout:n=400,onClear:l,...r}=e;const[d,u]=(0,a.useState)(!1),[v,p]=(0,a.useState)([]),h=(0,a.useMemo)((()=>o()((e=>{p([]),u(!0),t(e).then((e=>{p(e),u(!1)}))}),n)),[t,n]);return(0,i.jsx)(s.default,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,onClear:()=>{h(""),l&&l()},notFoundContent:d?(0,i.jsx)(c.c,{size:"small"}):"no results",...r,options:v,onFocus:()=>{h("")}})}},78288:(e,t,n)=>{n.d(t,{A:()=>a});const a={new:[1,2,3,4,5],accepted:[1,2,3,4,5],ready:[1,2,3,4,5],on_a_way:[1,2,3,4,5],delivered:[1,2,3,4,5],canceled:[1,2,3,4,5],cooking:[1,2,3,4,5]}},33131:(e,t,n)=>{n.d(t,{c:()=>a});n(52640);function a(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const t=e.location.split(", ");return{lat:Number(null===t||void 0===t?void 0:t[0]),lng:Number(null===t||void 0===t?void 0:t[1])}}},24968:(e,t,n)=>{function a(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}n.d(t,{c:()=>a})},68400:(e,t,n)=>{n.d(t,{c:()=>l});var a=n(33012);const l={orderExport:(e,t)=>a.c.get("dashboard/user/export/order/".concat(e,"/pdf"),{params:t,responseType:"blob"})}},9196:(e,t,n)=>{n.d(t,{c:()=>r});var a=n(79416),l=(n(99584),n(5008)),o=n(57608),s=n(23424),c=n(97884);const i=[{value:"seller/orders-board",title:"Board",icon:(0,c.jsx)(o.EZ1,{size:20})},{value:"seller/orders",title:"List",icon:(0,c.jsx)(l.GaN,{size:20})}],r=e=>{let{listType:t}=e;const{type:n}=(0,s.W4)(),l=(0,s.i6)();return(0,c.jsx)(a.cp.Group,{value:t,onChange:e=>{l("/".concat(e.target.value).concat(n?"/".concat(n):""))},className:"float-right",buttonStyle:"solid",children:null===i||void 0===i?void 0:i.map((e=>(0,c.jsx)(a.cp.Button,{value:e.value,children:(0,c.jsxs)("div",{className:"d-flex align-items-center",style:{gap:"10px"},children:[e.icon,e.title]})},e.value)))})}},33300:(e,t,n)=>{n.d(t,{c:()=>x});var a=n(99584),l=n(65732),o=n(95884),s=n(87228),c=n(68768),i=n(10260),r=n(32712),d=n(67148),u=n(18896),v=n(65236),p=n(97480),h=n(71376),m=n(77632),f=n(97884);function x(e){var t;let{orderDetails:n,handleCancel:x}=e;const{t:y}=(0,v.G)(),{activeMenu:g}=(0,r.w1)((e=>e.menu),r.G),{deliverymans:j}=(0,r.w1)((e=>e.deliveryman),r.G),[b]=l.c.useForm(),C=(0,r.OY)(),[w,k]=(0,a.useState)(!1);(0,a.useEffect)((()=>{C((0,p.sb)())}),[]);return(0,f.jsx)(o.default,{visible:!!n,title:n.title,onCancel:x,footer:[(0,f.jsx)(s.c,{type:"primary",onClick:()=>b.submit(),loading:w,children:y("save")}),(0,f.jsx)(s.c,{type:"default",onClick:x,children:y("cancel")})],children:(0,f.jsx)(l.c,{form:b,layout:"vertical",onFinish:e=>{const t={deliveryman:e.deliveryman.value};k(!0),d.c.updateDelivery(n.id,t).then((()=>{x(),C((0,u.A1)(g))})).finally((()=>k(!1)))},initialValues:{deliveryman:null===(t=n.deliveryman)||void 0===t?void 0:t.id},children:(0,f.jsx)(c.c,{gutter:12,children:(0,f.jsx)(i.c,{span:24,children:(0,f.jsx)(l.c.Item,{label:y("deliveryman"),name:"deliveryman",rules:[{required:!0,message:y("required")}],children:(0,f.jsx)(h.g,{fetchOptions:e=>{const t={perPage:10,page:1,search:e};return m.c.getDeliverymans(t).then((e=>e.data.map((e=>({label:e.firstname,value:e.id})))))}})})})})})})}},180:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(99584),l=n(73568),o=n(66296),s=n(87228),c=n(68496),i=n(23424),r=n(3952),d=n(48292),u=n(32712),v=n(18896),p=n(65236),h=n(68256),m=n(71416),f=n(40748),x=n(71376),y=n(77632),g=n(89932),j=(n(1428),n(98016)),b=n(61072),C=n(67148),w=n(52148),k=n(35480),S=n(98044),M=n(79100),_=n(97884);const O=e=>{let{children:t,title:n,name:a,isDropDisabled:l,total:s=0,loading:c=!1,reloadOrder:i}=e;const{t:r}=(0,p.G)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(k.c,{message:(0,_.jsxs)(o.c,{children:[(0,_.jsx)(w.c,{size:20,style:{cursor:"pointer"},spin:c,onClick:i}),r(n),(0,_.jsx)(S.c,{children:c?(0,_.jsx)(w.c,{spin:!0}):s})]}),className:"mb-4 ".concat(a),style:{textAlign:"center",fontSize:16,textTransform:"capitalize"}}),(0,_.jsx)(M.SS,{droppableId:a,isDropDisabled:l,children:e=>(0,_.jsx)("div",{ref:e.innerRef,className:"h-screen",style:{opacity:l?.6:1},children:(0,_.jsxs)(_.Fragment,{children:[t,e.placeholder]})})})]})};var I=n(37728),N=n(50392),D=n(27613),E=n(78288),T=n(17408),P=n(97972),z=n(86524),Y=n(78596),H=n(78152),A=n(51668),F=n(87104),G=n(98948),V=n(59424),B=n(11168),L=n(44720),K=n(24100),R=n(91612),W=n(69168),q=n(52640),U=n(24968),$=n(83072),J=n.n($),Q=n(29416),Z=n(75088);const{Meta:X}=c.default,ee=e=>{var t,n,a,l,s,i,r,d,u,v;let{data:h,goToShow:m,loading:f,setLocationsMap:x,setId:y,setIsModalVisible:g,setText:j,setDowloadModal:b,setType:C,orderType:w}=e;const{isDemo:k,demoFunc:S}=(0,Z.c)(),{t:M}=(0,p.G)(),O=[{title:"Number of products",icon:(0,_.jsx)(P.c,{}),data:null===h||void 0===h?void 0:h.order_details_count},{title:w?"Table":"Deliveryman",icon:(0,_.jsx)(z.c,{}),data:w?"".concat((null===h||void 0===h||null===(t=h.table)||void 0===t?void 0:t.name)||"-"):"".concat((null===(n=h.deliveryman)||void 0===n?void 0:n.firstname)||"-"," ").concat((null===(a=h.deliveryman)||void 0===a?void 0:a.lastname)||"-")},{title:"Amount",icon:(0,_.jsx)(Y.c,{}),data:(0,U.c)(h.total_price,null===(l=h.currency)||void 0===l?void 0:l.symbol)},{title:"Payment type",icon:(0,_.jsx)(H.c,{}),data:(null===(s=h.transaction)||void 0===s||null===(i=s.payment_system)||void 0===i?void 0:i.tag)||"-"},{title:"Payment status",icon:(0,_.jsx)(A.c,{}),data:(null===(r=h.transaction)||void 0===r?void 0:r.status)||"-"},{title:M("delivery.type"),icon:(0,_.jsx)(F.c,{}),data:(null===h||void 0===h?void 0:h.delivery_type)||"-"},{title:"Delivery date",icon:(0,_.jsx)(F.c,{}),data:J()(null===h||void 0===h?void 0:h.delivery_date).format("YYYY-MM-DD")||"-"},{title:"Created at",icon:(0,_.jsx)(F.c,{}),data:J()(null===h||void 0===h?void 0:h.created_at).format("YYYY-MM-DD")||"-"}];return(0,_.jsx)(c.default,{actions:[(0,_.jsx)(Q.Sum,{size:20,onClick:e=>{e.stopPropagation(),x(h.id)}}),(0,_.jsx)(G.c,{onClick:()=>m(h)},"setting"),(0,_.jsx)(V.c,{onClick:e=>{k?S():(e.stopPropagation(),y([h.id]),g(!0),j(!0),C(h.status))}}),(0,_.jsx)(B.c,{onClick:()=>b(h.id)},"ellipsis")],className:"order-card",children:(0,_.jsxs)(K.c,{loading:f,avatar:!0,active:!0,children:[(0,_.jsx)(X,{avatar:(0,_.jsx)(R.c,{src:q.cd+(null===(d=h.user)||void 0===d?void 0:d.img),icon:(0,_.jsx)(L.c,{})}),description:"#".concat(h.id),title:"".concat((null===(u=h.user)||void 0===u?void 0:u.firstname)||"-"," ").concat((null===(v=h.user)||void 0===v?void 0:v.lastname)||"-")}),(0,_.jsx)(W.cp,{itemLayout:"horizontal",dataSource:O,renderItem:(e,t)=>(0,_.jsx)(W.cp.Item,{children:(0,_.jsxs)(o.c,{children:[e.icon,"".concat(e.title,":  ").concat(e.data)]})},t)})]})})};var te=n(77180);const ne=e=>{let{goToEdit:t,goToShow:n,fetchOrderAllItem:l,fetchOrders:o,setLocationsMap:s,setId:c,setIsModalVisible:i,setText:r,setDowloadModal:d,type:v,setType:p,orderType:h}=e;const f=(0,u.OY)(),{statusList:x,loading:y}=(0,u.w1)((e=>e.orderStatus),u.G),g=x.map((e=>e.name)),{items:j}=(0,u.w1)((e=>e.sellerOrders),u.G),w=(0,u.w1)((e=>e.sellerOrders),u.G),[k,S]=(0,a.useState)(""),[P,z]=(0,a.useState)({}),[Y,H]=(0,a.useState)({}),A=e=>{if(!e.destination)return;var t,n;e.destination&&P.source.droppableId!==e.destination.droppableId&&(t=e.draggableId,n={status:e.destination.droppableId},C.c.updateStatus(t,n).then((e=>{b.m4.success("#".concat(t," order status changed"))})));const a={...j},l=a[e.source.droppableId],[o,s]=((e,t)=>{const n=Array.from(e),[a]=n.splice(t,1);return[a,n]})(l,e.source.index);a[e.source.droppableId]=s;const c=a[e.destination.droppableId];a[e.destination.droppableId]=((e,t,n)=>{const a=Array.from(e);return a.splice(t,0,n),a})(c,e.destination.index,o),f((0,m.Q1)(a)),H(null)},F=e=>(0!==e||Y!==g.length-1)&&!!Boolean(Y>e);(0,a.useEffect)((()=>{f((0,m.Ah)()),l()}),[]);return(0,_.jsx)(_.Fragment,{children:y?(0,_.jsx)("div",{children:(0,_.jsx)(te.c,{})}):(0,_.jsx)(M._y,{onDragEnd:A,onDragStart:e=>{const t=g.findIndex((t=>t===e.source.droppableId));z(e),H(t)},children:(0,_.jsx)("div",{className:"order-board",children:null===g||void 0===g?void 0:g.map(((e,a)=>{var l,u,v,x;return(0,_.jsx)("div",{className:"dnd-column",children:(0,_.jsx)(O,{title:e,onDragEnd:A,name:e,isDropDisabled:F(a),total:null===(l=j[e])||void 0===l?void 0:l.length,loading:w[e].loading,reloadOrder:()=>(e=>{f((0,m.M5)(e)),o({status:e})})(e),children:(0,_.jsxs)(N.cp,{onScroll:t=>((e,t)=>{const n=e.target.lastChild,a=e.target.clientHeight+e.target.scrollTop;n&&a>n.offsetTop+n.clientHeight+19.9&&w[t].meta.last_page>w[t].meta.current_page&&!w[t].loading&&(S(t),o({page:w[t].meta.current_page+1,perPage:5,status:t}))})(t,e),autoHeight:!0,autoHeightMin:"75vh",autoHeightMax:"75vh",autoHide:!0,id:e,children:[Boolean(w[e].loading&&!(null!==(u=j[e])&&void 0!==u&&u.length))?null===(x=E.A[e])||void 0===x?void 0:x.map((()=>(0,_.jsx)(T.c,{loading:!0}))):null===(v=j[e])||void 0===v?void 0:v.map(((e,a)=>(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(M.wf,{draggableId:e.id.toString(),index:a,children:(a,l)=>(0,_.jsx)("div",{ref:a.innerRef,...a.draggableProps,...a.dragHandleProps,children:(0,_.jsx)(ee,{data:e,goToEdit:t,goToShow:n,setLocationsMap:s,setId:c,setIsModalVisible:i,setText:r,setDowloadModal:d,setType:p,orderType:h})})},e.id)}))),w[e].loading&&e===k&&(0,_.jsx)(I.c,{indicator:(0,_.jsx)(D.c,{style:{fontSize:24},spin:!0})})]})})},e)}))})})})};var ae=n(33300),le=n(9196),oe=n(21064),se=n(95520),ce=n(68400),ie=n(45976),re=n.n(ie),de=n(95884),ue=n(68768),ve=n(10260),pe=n(5008),he=n(23216);const me=c.default.Meta,fe=e=>{let{id:t,handleCancel:n}=e;const[l,o]=(0,a.useState)(null),{t:r}=(0,p.G)(),d=(0,i.i6)();return(0,_.jsx)(_.Fragment,{children:l?(0,_.jsx)(te.c,{}):(0,_.jsx)(de.default,{visible:!!t,title:r("selected.download"),closable:!1,handleCancel:n,footer:[(0,_.jsx)(s.c,{type:"default",onClick:n,children:r("cancel")},"cancelBtn")],children:(0,_.jsxs)(ue.c,{children:[(0,_.jsx)(ve.c,{span:12,children:(0,_.jsx)(c.default,{title:r("download.pdf"),onClick:()=>function(e){o(!0),ce.c.orderExport(e).then((t=>{re()(t,"invoice_".concat(e,".pdf"),"application/pdf"),n()})).finally((()=>o(!1)))}(t),className:"text-center cursor-pointer",children:(0,_.jsx)(me,{className:"d-flex align-items-center justify-content-center",title:(0,_.jsx)(pe.$tL,{size:80})})})}),(0,_.jsx)(ve.c,{span:12,children:(0,_.jsx)(c.default,{title:r("download.check"),onClick:()=>(e=>{d("/seller/generate-invoice/".concat(e))})(t),className:"text-center cursor-pointer",children:(0,_.jsx)(me,{className:"d-flex align-items-center justify-content-center",title:(0,_.jsx)(he.cLy,{size:85})})})})]})})})};var xe=n(46003);const{RangePicker:ye}=l.default;function ge(){var e;const t=(0,u.OY)(),n=(0,i.i6)(),{t:l}=(0,p.G)(),[w,k]=(0,a.useState)(null),{setIsModalVisible:S}=(0,a.useContext)(j.e),[M,O]=(0,a.useState)(null),[I,N]=(0,a.useState)(!1),[D,E]=(0,a.useState)(null),[T,P]=(0,a.useState)(null),[z,Y]=(0,a.useState)(null),[H,A]=(0,a.useState)(null),[F,G]=(0,a.useState)(null),{activeMenu:V}=(0,u.w1)((e=>e.menu),u.G),B=(0,i.W4)(),L=null===B||void 0===B?void 0:B.type,K=null===V||void 0===V?void 0:V.data;(0,h.c)((()=>{t((0,m.Ah)()),q()}),[K]),(0,a.useEffect)((()=>{if(null!==V&&void 0!==V&&V.refetch){const e={status:null===K||void 0===K?void 0:K.status,perPage:10,delivery_type:L};t((0,m.Gc)(e)),t((0,g._c)()),t((0,v.CO)(V))}}),[null===V||void 0===V?void 0:V.refetch]);const R=(e,n)=>{(0,u.wN)((()=>{t((0,m.Ah)()),t((0,v.MH)({activeMenu:V,data:{...K,[n]:e}}))}))};const W=e=>{var n,a,l,o;const s={...e,delivery_type:L,delivery_date_from:"scheduled"===H?J()().add(1,"day").format("YYYY-MM-DD"):void 0,search:null!==K&&void 0!==K&&K.search?K.search:void 0,user_id:null===K||void 0===K?void 0:K.client_id,status:null===e||void 0===e?void 0:e.status,shop_id:null!==(null===(n=V.data)||void 0===n?void 0:n.shop_id)?null===(a=V.data)||void 0===a?void 0:a.shop_id:null,date_from:(null===F||void 0===F||null===(l=F[0])||void 0===l?void 0:l.format("YYYY-MM-DD"))||void 0,date_to:(null===F||void 0===F||null===(o=F[1])||void 0===o?void 0:o.format("YYYY-MM-DD"))||void 0};switch(e.status){case"new":t((0,m.Iz)(s));break;case"accepted":t((0,m.OA)(s));break;case"ready":t((0,m.QJ)(s));break;case"on_a_way":t((0,m.SE)(s));break;case"delivered":t((0,m.AT)(s));break;case"canceled":t((0,m.mM)(s));break;case"cooking":t((0,m.YL)(s));break;default:console.log("Sorry, we are out of")}},q=()=>{W({status:"new"}),W({status:"accepted"}),W({status:"ready"}),W({status:"on_a_way"}),W({status:"delivered"}),W({status:"canceled"}),W({status:"cooking"})},U=()=>{Y(null),E(null),P(null)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(o.c,{className:"justify-content-end w-100 mb-3",children:[(0,_.jsx)(le.c,{listType:"seller/orders-board"}),(0,_.jsx)(s.c,{type:"primary",icon:(0,_.jsx)(r.c,{}),onClick:()=>{t((0,oe.Qm)()),t((0,v.WC)({id:"pos.system",url:"seller/pos-system",name:l("add.order")})),n("/seller/pos-system",{state:{delivery_type:L}})},style:{width:"100%"},children:l("add.order")})]}),(0,_.jsx)(c.default,{children:(0,_.jsxs)(o.c,{wrap:!0,children:[(0,_.jsx)(f.c,{placeholder:l("search"),handleChange:e=>R(e,"search"),defaultValue:null===(e=V.data)||void 0===e?void 0:e.search,resetSearch:!(null!==K&&void 0!==K&&K.search)}),(0,_.jsx)(x.g,{placeholder:l("select.client"),fetchOptions:async function(e){const t={search:e,perPage:10};return y.c.getAll(t).then((e=>{let{data:t}=e;return t.map((e=>({label:"".concat(e.firstname," ").concat(e.lastname||""),value:e.id})))}))},onSelect:e=>R(e.value,"client_id"),onDeselect:()=>R(null,"client_id"),style:{minWidth:200},value:null===K||void 0===K?void 0:K.client_id}),(0,_.jsx)(ye,{defaultValue:F,onChange:e=>{R(JSON.stringify(e),"data_time"),G(e)},disabledDate:e=>e&&e>J()().endOf("day"),allowClear:!0,style:{width:"100%"},onClear:()=>{t((0,m.Ah)()),G(null)}}),(0,_.jsx)(s.c,{icon:(0,_.jsx)(d.c,{}),onClick:()=>{(0,u.wN)((()=>{t((0,m.Ah)()),t((0,v.MH)({activeMenu:V,data:null}))})),q()},children:l("clear")})]})}),(0,_.jsx)(ne,{goToShow:e=>{t((0,v.WC)({url:"seller/order/details/".concat(e.id),id:"order_details",name:l("order.details")})),n("/seller/order/details/".concat(e.id))},fetchOrderAllItem:q,fetchOrders:W,setLocationsMap:E,setId:k,setIsModalVisible:S,setText:O,setDowloadModal:P,type:H,setType:A,orderType:L}),(0,_.jsx)(xe.c,{click:()=>{N(!0);const e={...Object.assign({},...w.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};C.c.delete(e).then((()=>{t((0,m.Ah)()),b.m4.success(l("successfully.deleted")),S(!1),q({status:H}),O(null)})).finally((()=>{k(null),N(!1)}))},text:l(M?"delete":"all.delete"),loading:I,setText:k,setActive:k}),z&&(0,_.jsx)(ae.c,{orderDetails:z,handleCancel:U}),D&&(0,_.jsx)(se.c,{id:D,handleCancel:U}),T&&(0,_.jsx)(fe,{id:T,handleCancel:U})]})}},95520:(e,t,n)=>{n.d(t,{c:()=>N});var a=n(52800),l=n(67692),o=n(95884),s=n(87228),c=n(68496),i=n(68768),r=n(10260),d=n(98044),u=n(99584),v=n(65236),p=n(67148),h=n(77180),m=n(5008),f=n(32712),x=n(52640),y=n(97132),g=n(57236),j=n(33131),b=n(4736),C=n(6944),w=n(88992),k=n(23216),S=n(97884);const{Step:M}=l.default,_=()=>(0,S.jsx)("img",{src:y,width:"50",alt:"Pin"}),O=()=>(0,S.jsx)("img",{src:g,width:"50",alt:"Pin"}),I=["blue","red","gold","volcano","cyan","lime"],N=e=>{var t,n,y,g,N,D;let{id:E,handleCancel:T}=e;const{t:P}=(0,v.G)(),[z,Y]=(0,u.useState)(null),[H,A]=(0,u.useState)(null),[F,G]=(0,u.useState)(null),{settings:V}=(0,f.w1)((e=>e.globalSettings),f.G),B=(0,j.c)(V),[L,K]=(0,u.useState)(0),[R,W]=(0,u.useState)((0,j.c)(V)),[q,U]=(0,u.useState)((0,j.c)(V)),[$,J]=(0,u.useState)([{id:0,name:"new",icon:(0,S.jsx)(b.c,{})},{id:1,name:"accepted",icon:(0,S.jsx)(m.IFj,{})},{id:2,name:"ready",icon:(0,S.jsx)(C.YxA,{})},{id:3,name:"on_a_way",icon:(0,S.jsx)(w.wJ$,{})},{id:4,name:"delivered",icon:(0,S.jsx)(w.W8K,{})}]);const{google_map_key:Q}=(0,f.w1)((e=>e.globalSettings.settings),f.G);(0,u.useEffect)((()=>{Y(!0),p.c.getById(E).then((e=>{var t;let{data:n}=e;J("canceled"===n.status?[{id:1,name:"new",icon:(0,S.jsx)(b.c,{})},{id:5,name:"canceled",icon:(0,S.jsx)(k.uoq,{})}]:$),K("canceled"===n.status?1:null===(t=$.find((e=>e.name===n.status)))||void 0===t?void 0:t.id),G("canceled"===n.status?"error":"success"),A(n),U({lat:n.location.latitude,lng:n.location.longitude}),W({lat:n.shop.location.latitude,lng:n.shop.location.longitude})})).finally((()=>{Y(!1)}))}),[]);return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(o.default,{visible:!!E,title:P("show.locations"),closable:!0,onCancel:T,style:{minWidth:"80vw"},footer:[(0,S.jsx)(s.c,{type:"default",onClick:T,children:P("cancel")},"cancelBtn")],children:z?(0,S.jsx)(h.c,{}):(0,S.jsxs)(c.default,{children:[(0,S.jsx)(l.default,{current:L,status:F,className:"mb-5",children:null===$||void 0===$?void 0:$.map(((e,t)=>(0,S.jsx)(M,{title:P(e.name),icon:null===e||void 0===e?void 0:e.icon},e.id+t)))}),(0,S.jsxs)(i.c,{gutter:12,children:[(0,S.jsxs)(r.c,{span:12,children:[(0,S.jsxs)("h3",{children:[P("order.id")," #",null===H||void 0===H?void 0:H.id]}),(0,S.jsxs)("p",{children:[(0,S.jsx)(m.kIG,{})," ",null===H||void 0===H?void 0:H.created_at]}),(0,S.jsxs)("p",{children:[P("schedulet.at")," ",null===H||void 0===H?void 0:H.delivery_date]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("strong",{children:null===H||void 0===H||null===(t=H.shop)||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title})," ",null===H||void 0===H||null===(y=H.details)||void 0===y?void 0:y.map(((e,t)=>{var n;return(0,S.jsx)(d.c,{className:"mb-2",color:I[t],children:null===e||void 0===e||null===(n=e.stock)||void 0===n?void 0:n.product.translation.title})}))]})]}),(0,S.jsxs)(r.c,{span:12,children:[(0,S.jsxs)("p",{children:[P("status")," ","new"===(null===H||void 0===H?void 0:H.status)?(0,S.jsx)(d.c,{color:"blue",children:P(null===H||void 0===H?void 0:H.status)}):"canceled"===(null===H||void 0===H?void 0:H.status)?(0,S.jsx)(d.c,{color:"error",children:P(null===H||void 0===H?void 0:H.status)}):(0,S.jsx)(d.c,{color:"cyan",children:P(null===H||void 0===H?void 0:H.status)})]}),(0,S.jsxs)("p",{children:[P("payment.method")," ",(0,S.jsx)("strong",{children:null===H||void 0===H||null===(g=H.transaction)||void 0===g||null===(N=g.payment_system)||void 0===N?void 0:N.tag})]}),(0,S.jsxs)("p",{children:[P("order.type")," ",(0,S.jsx)("strong",{children:null===H||void 0===H?void 0:H.delivery_type})]}),(0,S.jsxs)("p",{children:[P("payment.type")," ",(0,S.jsx)("strong",{children:null===H||void 0===H||null===(D=H.transaction)||void 0===D?void 0:D.status})]})]}),(0,S.jsxs)(r.c,{span:24,className:"mt-5",children:[(0,S.jsx)("h4",{children:P("map")}),(0,S.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,S.jsxs)(a.cp,{bootstrapURLKeys:{key:x.KU||Q},defaultZoom:15,center:B,yesIWantToUseGoogleMapApiInternals:!0,options:{fullscreenControl:!1},onGoogleApiLoaded:e=>{let{map:t,maps:n}=e;const a=[R,q].map((e=>({lat:Number(e.lat||"0"),lng:Number(e.lng||"0")})));let l=new n.LatLngBounds;for(var o=0;o<a.length;o++)l.extend(a[o]);t.fitBounds(l)},children:[(0,S.jsx)(O,{lat:null===R||void 0===R?void 0:R.lat,lng:null===R||void 0===R?void 0:R.lng}),(0,S.jsx)(_,{lat:null===q||void 0===q?void 0:q.lat,lng:null===q||void 0===q?void 0:q.lng})]})})]})]})]})})})}},51668:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(30800),l=n(99584);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M117 368h231v64H117zm559 0h241v64H676zm-264 0h200v64H412zm0 224h200v64H412zm264 0h241v64H676zm-559 0h231v64H117zm295-160V179h-64v666h64V592zm264-64V179h-64v666h64V432z"}}]},name:"borderless-table",theme:"outlined"};var s=n(47164),c=function(e,t){return l.createElement(s.c,(0,a.c)((0,a.c)({},e),{},{ref:t,icon:o}))};c.displayName="BorderlessTableOutlined";const i=l.forwardRef(c)},97972:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(30800),l=n(99584);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"container",theme:"outlined"};var s=n(47164),c=function(e,t){return l.createElement(s.c,(0,a.c)((0,a.c)({},e),{},{ref:t,icon:o}))};c.displayName="ContainerOutlined";const i=l.forwardRef(c)},3952:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(30800),l=n(99584);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var s=n(47164),c=function(e,t){return l.createElement(s.c,(0,a.c)((0,a.c)({},e),{},{ref:t,icon:o}))};c.displayName="PlusCircleOutlined";const i=l.forwardRef(c)},79416:(e,t,n)=>{n.d(t,{cp:()=>D});var a=n(52536),l=n(45072),o=n(99584),s=n(76436),c=n(46736),i=n.n(c),r=n(71072),d=n(93500),u=n(67648),v=o.createContext(null),p=v.Provider;const h=v;var m=o.createContext(null),f=m.Provider,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},y=function(e,t){var n,c=o.useContext(h),v=o.useContext(m),p=o.useContext(u.MT),f=p.getPrefixCls,y=p.direction,g=o.useRef(),j=(0,r.qC)(t,g),b=(0,o.useContext)(d.A9).isFormItemInput,C=e.prefixCls,w=e.className,k=e.children,S=e.style,M=x(e,["prefixCls","className","children","style"]),_=f("radio",C),O="button"===((null===c||void 0===c?void 0:c.optionType)||v)?"".concat(_,"-button"):_,I=(0,l.c)({},M);c&&(I.name=c.name,I.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===c||void 0===c?void 0:c.onChange)||void 0===a||a.call(c,t)},I.checked=e.value===c.value,I.disabled=e.disabled||c.disabled);var N=i()("".concat(O,"-wrapper"),(n={},(0,a.c)(n,"".concat(O,"-wrapper-checked"),I.checked),(0,a.c)(n,"".concat(O,"-wrapper-disabled"),I.disabled),(0,a.c)(n,"".concat(O,"-wrapper-rtl"),"rtl"===y),(0,a.c)(n,"".concat(O,"-wrapper-in-form-item"),b),n),w);return o.createElement("label",{className:N,style:S,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(s.c,(0,l.c)({},I,{type:"radio",prefixCls:O,ref:j})),void 0!==k?o.createElement("span",null,k):null)},g=o.forwardRef(y);g.displayName="Radio";const j=g;var b=n(32920),C=n(68576),w=n(62672),k=n(45792),S=o.forwardRef((function(e,t){var n=o.useContext(u.MT),s=n.getPrefixCls,c=n.direction,r=o.useContext(w.c),d=(0,C.c)(e.defaultValue,{value:e.value}),v=(0,b.c)(d,2),h=v[0],m=v[1];return o.createElement(p,{value:{onChange:function(t){var n=h,a=t.target.value;"value"in e||m(a);var l=e.onChange;l&&a!==n&&l(t)},value:h,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,d=e.prefixCls,u=e.className,v=void 0===u?"":u,p=e.options,m=e.buttonStyle,f=void 0===m?"outline":m,x=e.disabled,y=e.children,g=e.size,b=e.style,C=e.id,w=e.onMouseEnter,S=e.onMouseLeave,M=s("radio",d),_="".concat(M,"-group"),O=y;p&&p.length>0&&(O=p.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(j,{key:e.toString(),prefixCls:M,disabled:x,value:e,checked:h===e},e):o.createElement(j,{key:"radio-group-value-options-".concat(e.value),prefixCls:M,disabled:e.disabled||x,value:e.value,checked:h===e.value,style:e.style},e.label)})));var I=g||r,N=i()(_,"".concat(_,"-").concat(f),(n={},(0,a.c)(n,"".concat(_,"-").concat(I),I),(0,a.c)(n,"".concat(_,"-rtl"),"rtl"===c),n),v);return o.createElement("div",(0,l.c)({},(0,k.c)(e),{className:N,style:b,onMouseEnter:w,onMouseLeave:S,id:C,ref:t}),O)}())}));const M=o.memo(S);var _=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},O=function(e,t){var n=o.useContext(u.MT).getPrefixCls,a=e.prefixCls,s=_(e,["prefixCls"]),c=n("radio",a);return o.createElement(f,{value:"button"},o.createElement(j,(0,l.c)({prefixCls:c},s,{type:"radio",ref:t})))};const I=o.forwardRef(O);var N=j;N.Button=I,N.Group=M;const D=N},76436:(e,t,n)=>{n.d(t,{c:()=>m});var a=n(45072),l=n(52536),o=n(31024),s=n(30800),c=n(87088),i=n(92920),r=n(62988),d=n(33504),u=n(99584),v=n(46736),p=n.n(v),h=function(e){(0,r.c)(n,e);var t=(0,d.c)(n);function n(e){var a;(0,c.c)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,s.c)((0,s.c)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,i.c)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,s=t.className,c=t.style,i=t.name,r=t.id,d=t.type,v=t.disabled,h=t.readOnly,m=t.tabIndex,f=t.onClick,x=t.onFocus,y=t.onBlur,g=t.onKeyDown,j=t.onKeyPress,b=t.onKeyUp,C=t.autoFocus,w=t.value,k=t.required,S=(0,o.c)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),M=Object.keys(S).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=S[t]),e}),{}),_=this.state.checked,O=p()(n,s,(e={},(0,l.c)(e,"".concat(n,"-checked"),_),(0,l.c)(e,"".concat(n,"-disabled"),v),e));return u.createElement("span",{className:O,style:c},u.createElement("input",(0,a.c)({name:i,id:r,type:d,required:k,readOnly:h,disabled:v,tabIndex:m,className:"".concat(n,"-input"),checked:!!_,onClick:f,onFocus:x,onBlur:y,onKeyUp:b,onKeyDown:g,onKeyPress:j,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:w},M)),u.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,s.c)((0,s.c)({},t),{},{checked:e.checked}):null}}]),n}(u.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=h},57236:(e,t,n)=>{e.exports=n.p+"static/media/shop.46d7a94ca800c711764a.png"},97132:(e,t,n)=>{e.exports=n.p+"static/media/user.fbe7078c52acde79652d.jpg"}}]);