(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(99),a(21)),i=a.n(l),s=a(36),u=a(27),m=a(246),d=a(233),f=a(235),p=a(245),h=a(247);var v=function(e){var t=Object(n.useState)("worldwide"),a=Object(u.a)(t,2),c=a[0],o=a[1];return r.a.createElement(m.a,{display:"flex",justifyContent:"space-between",mb:2},r.a.createElement(m.a,null,r.a.createElement(d.a,{variant:"h4"},"COVID Tracker")),r.a.createElement(m.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c,onChange:function(t){var a=t.target.value;o(a),e.onCountryChange(a)}},r.a.createElement(h.a,{value:"worldwide"},"Worldwide"),void 0!==e.countries&&e.countries.map((function(e,t){return r.a.createElement(h.a,{key:t,value:e.countryInfo.iso2},e.country)}))))))},b=a(236),E=a(237);var y=function(e){return r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,{variant:"h6"},e.title),r.a.createElement(d.a,{variant:"h6"},"+",e.todayData),r.a.createElement(d.a,{variant:"body1"},e.totalData)))},j=a(4),w=a(248),g=a(240),C=a(242),O=a(244),k=a(238),x=a(241),D=a(243),S=a(239),R=a(202),A=Object(j.a)((function(e){return Object(w.a)({root:{padding:e.spacing(1)},head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}})}))(k.a),I=Object(j.a)((function(e){return Object(w.a)({root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}})}))(S.a),W=Object(g.a)({table:{minWidth:250},tableContainerRoot:{height:300}});var L=function(e){var t=W();return r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,{variant:"h6"},"Live Cases by Country"),r.a.createElement(x.a,{component:R.a,classes:{root:t.tableContainerRoot}},r.a.createElement(C.a,{className:t.table,"aria-label":"customized table"},r.a.createElement(D.a,null,r.a.createElement(S.a,null,r.a.createElement(A,null,"Country"),r.a.createElement(A,{align:"right"},"Cases"))),r.a.createElement(O.a,null,e.countries.map((function(e,t){return r.a.createElement(I,{key:e.country},r.a.createElement(A,{component:"th",scope:"row"},e.country),r.a.createElement(A,{align:"right"},e.cases))})))))))},M=a(86),N=function(e){var t=Object(M.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},T=a(85),z=a(63),B=a.n(z),J={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!0,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return B()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return B()(e).format("0a")}}}]}};var Y=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),c=a[0],o=a[1],l=(e.dataType&&e.dataType,function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var r in e[a]){if(t){var c={x:r,y:e[a][r]-t};n.push(c)}t=e[a][r]}return n});return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=l(e);o(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(m.a,{my:2},c&&r.a.createElement(T.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#DD1034",data:c}]},options:J}))};var F=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),d=l[0],f=l[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return e})),a=N(t);f(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]);var p=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t),e.next=3,fetch(a).then((function(e){return e.json()})).then((function(e){c(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(m.a,{p:1.5,display:"flex",className:"app",justifyContent:"space-between"},r.a.createElement(m.a,{flex:.8},r.a.createElement(v,{onCountryChange:p,countries:d}),a&&r.a.createElement(m.a,{display:"flex",justifyContent:"space-between"},r.a.createElement(y,{title:"Coronavirus Cases",todayData:a.todayCases,totalData:a.cases}),r.a.createElement(y,{title:"Recovered",todayData:a.todayRecovered,totalData:a.recovered}),r.a.createElement(y,{title:"Deaths",todayData:a.todayDeaths,totalData:a.deaths}))),r.a.createElement(m.a,null,r.a.createElement(L,{countries:d}),r.a.createElement(Y,null)))};var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(200)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.09a64324.chunk.js.map