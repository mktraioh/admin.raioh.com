(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9940],{4400:(e,t,r)=>{"use strict";r.d(t,{c:()=>p});var i=r(99584),l=r(68496),s=r(11672),a=r(36228),n=r(98980),o=r(97884);const c={position:"absolute",zIndex:"1"},d={position:"absolute",zIndex:"1",right:"0",top:"-2px"},u=e=>{let{title:t,series:r,width:u,height:p,xAxis:h,customOptions:x,card:g,type:f,extra:v,direction:y,bodyClass:m}=e,j=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return n.YQ;case"bar":return n.YA;case"area":return n.Ur;case"pie":return n.cX}})(f)));const b=window.innerWidth<768,w=()=>{if(z.current){var e;const t=z.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(b?0:null===(e=_.current)||void 0===e?void 0:e.offsetWidth,"px"),"rtl"===y&&(t.style.right="auto",t.style.left="0"),b&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,i.useEffect)((()=>{w()}),[]);const _=(0,i.useRef)(null),z=(0,i.useRef)();j.xaxis={categories:h},x&&(j={...j,...x});const C=()=>(0,o.jsx)(a.cp,{onResize:void setTimeout((()=>{w()}),600),children:(0,o.jsx)("div",{style:"rtl"===y?{direction:"ltr"}:{},className:"chartRef",ref:z,children:(0,o.jsx)(s.c,{options:j,type:f,series:r,width:u,height:p})})});return(0,o.jsx)(o.Fragment,{children:g?(0,o.jsx)(l.default,{children:(0,o.jsxs)("div",{className:"position-relative ".concat(m),children:[(0,o.jsx)("div",{style:b?{}:c,children:t})&&(0,o.jsx)("h4",{className:"font-weight-bold",style:b?{}:c,children:t}),v&&(0,o.jsx)("div",{ref:_,style:b?{}:d,children:v}),C()]})}):C()})};u.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const p=u},98980:(e,t,r)=>{"use strict";r.d(t,{Ur:()=>s,YA:()=>a,YQ:()=>l,cX:()=>n,yY:()=>i});const i=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],l={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...i],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},s={...l},a={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...i],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>"".concat(e)}}},n={colors:[...i],plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce(((e,t)=>e+t),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},24968:(e,t,r)=>{"use strict";function i(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}r.d(t,{c:()=>i})},19336:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>R});var i=r(49308),l=r(73568),s=r(37728),a=r(68768),n=r(10260),o=r(66296),c=r(50452),d=r(68496),u=r(2664),p=r(15752),h=r(99584),x=r(4400),g=r(58048),f=r(44672),v=r(32712),y=r(23424),m=r(16940),j=r(84620),b=r.n(j),w=r(9147),_=r(47024),z=r(18896),C=r(68256),S=r(83072),O=r.n(S),k=r(24968),N=r(65236),q=r(97884);const{Text:A,Title:I}=i.default,{RangePicker:T}=l.default,R=()=>{var e,t,r,i;const{t:l}=(0,N.G)(),j=(0,y.IT)(),S=b().parse(j.search,[])["?category_id"],R=b().parse(j.search,[])["?product_id"],{date_from:L,date_to:P,by_time:Y,chart:F,handleDateRange:M,options:G,handleByTime:H,chart_type:W,setChartType:D}=(0,h.useContext)(w.a),{loading:E,carts:Q,products:V,categories:$}=(0,v.w1)((e=>e.overviewReport),v.G),{defaultCurrency:B}=(0,v.w1)((e=>e.currency),v.G),{activeMenu:J}=(0,v.w1)((e=>e.menu),v.G),U=(0,v.OY)(),X=[{title:l("title"),dataIndex:"title",key:"title"},{title:l("item.sold"),dataIndex:"quantity",key:"quantity"},{title:l("net.sales"),dataIndex:"total_price",key:"total_price",render:e=>(0,k.c)(e,null===B||void 0===B?void 0:B.symbol)},{title:l("orders"),dataIndex:"count",key:"count"}],K=[{title:"Total sales",qty:"delivered_sum",percent:"5",price:!0},{title:"Orders",qty:"count",percent:"5",price:!1},{title:"Canceled orders price",qty:"canceled_sum",percent:"5",price:!0},{title:"Total tax",qty:"tax",percent:"5",price:!0},{title:"Delivered avg",qty:"delivered_avg",percent:"5",price:!0},{title:"Delivery fee",qty:"delivery_fee",percent:"5",price:!0}],Z=(e,t)=>{const r={date_from:L,date_to:P,type:Y,page:e,perPage:t};U((0,_.AL)(r))},ee=(e,t)=>{const r={date_from:L,date_to:P,type:Y,page:e,perPage:t};U((0,_.Av)(r))},te=(e,t)=>{const r={date_from:L,date_to:P,type:Y,page:e,perPage:t};S&&(r.categories=[S]),R&&(r.products=[R]),U((0,_.Q$)(r))};return(0,h.useEffect)((()=>{J.refetch&&(te(),Z(),ee(),U((0,z.CO)(J)))}),[J.refetch]),(0,C.c)((()=>{te()}),[P,Y,F,S,R,L]),(0,C.c)((()=>{Z()}),[P,Y,L]),(0,C.c)((()=>{ee()}),[P,Y,L]),(0,q.jsxs)(s.c,{size:"large",spinning:E,children:[(0,q.jsx)(a.c,{gutter:24,className:"mb-4",children:(0,q.jsx)(n.c,{span:12,children:(0,q.jsx)(o.c,{size:"large",children:(0,q.jsx)(T,{defaultValue:[O()(L),O()(P)],onChange:M})})})}),(0,q.jsx)(c.c,{orientation:"left",children:"Performance"}),(0,q.jsx)(a.c,{gutter:24,children:null===K||void 0===K?void 0:K.map(((e,t)=>(0,q.jsx)(n.c,{span:6,children:(0,q.jsx)(m.cH,{to:"/report/revenue",children:(0,q.jsxs)(d.default,{children:[(0,q.jsx)(a.c,{className:"mb-5",children:(0,q.jsx)(n.c,{children:(0,q.jsx)(A,{children:e.title})})}),(0,q.jsx)(a.c,{gutter:24,children:(0,q.jsx)(n.c,{span:12,children:(0,q.jsx)(I,{level:2,children:e.price?(0,k.c)(Q[e.qty],null===B||void 0===B?void 0:B.symbol):Q[e.qty]})})})]})},e.title)})))}),(0,q.jsxs)(a.c,{gutter:24,className:"mb-2",children:[(0,q.jsx)(n.c,{span:20,children:(0,q.jsx)(c.c,{orientation:"left",children:"Charts"})}),(0,q.jsx)(n.c,{span:4,children:(0,q.jsxs)("div",{className:"d-flex",children:[(0,q.jsx)(u.default,{style:{width:100},onChange:H,options:G,defaultValue:Y}),(0,q.jsx)(c.c,{type:"vertical",style:{height:"100%"}}),(0,q.jsxs)(o.c,{children:[(0,q.jsx)(g.c,{style:{fontSize:"22px",cursor:"pointer",color:"line"===W?"green":""},onClick:()=>D("line")}),(0,q.jsx)(f.c,{style:{fontSize:"22px",cursor:"pointer",color:"bar"===W?"green":""},onClick:()=>D("bar")})]})]})})]}),(0,q.jsxs)(a.c,{gutter:24,children:[(0,q.jsx)(n.c,{span:12,children:(0,q.jsx)(d.default,{title:"Net Sales",children:(0,q.jsx)(x.c,{type:W,series:[{name:"Orders",data:null===Q||void 0===Q||null===(e=Q.chart_price)||void 0===e?void 0:e.map((e=>e.delivered_sum))}],xAxis:null===Q||void 0===Q||null===(t=Q.chart_price)||void 0===t?void 0:t.map((e=>e.time))})})}),(0,q.jsx)(n.c,{span:12,children:(0,q.jsx)(d.default,{title:"Orders",children:(0,q.jsx)(x.c,{type:W,series:[{name:"Orders",data:null===Q||void 0===Q||null===(r=Q.chart_count)||void 0===r?void 0:r.map((e=>e.count))}],xAxis:null===Q||void 0===Q||null===(i=Q.chart_price)||void 0===i?void 0:i.map((e=>e.time))})})})]}),(0,q.jsx)(c.c,{orientation:"left",children:"Leaderboards"}),(0,q.jsxs)(a.c,{gutter:24,children:[(0,q.jsx)(n.c,{span:12,children:(0,q.jsx)(d.default,{title:"Top categories",children:(0,q.jsx)(p.c,{scroll:{x:!0},onChange:e=>{const{pageSize:t,current:r}=e;Z(r,t)},pagination:{pageSize:null===$||void 0===$?void 0:$.per_page,page:(null===$||void 0===$?void 0:$.current_page)||1,total:null===$||void 0===$?void 0:$.total,defaultCurrent:1},columns:X,dataSource:null===$||void 0===$?void 0:$.data})})}),(0,q.jsx)(n.c,{span:12,children:(0,q.jsx)(d.default,{title:"Top products",children:(0,q.jsx)(p.c,{scroll:{x:!0},onChange:e=>{const{pageSize:t,current:r}=e;Z(r,t)},pagination:{pageSize:null===V||void 0===V?void 0:V.per_page,page:(null===V||void 0===V?void 0:V.current_page)||1,total:null===V||void 0===V?void 0:V.total,defaultCurrent:1},columns:X,dataSource:null===V||void 0===V?void 0:V.data})})})]})]})}},58048:(e,t,r)=>{"use strict";r.d(t,{c:()=>o});var i=r(30800),l=r(99584);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"};var a=r(47164),n=function(e,t){return l.createElement(a.c,(0,i.c)((0,i.c)({},e),{},{ref:t,icon:s}))};n.displayName="LineChartOutlined";const o=l.forwardRef(n)},16204:()=>{}}]);