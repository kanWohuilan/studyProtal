import{_ as p,r as s,c as f,o as m,b as g,d as x,g as h,t as C,N as b,ao as i,bu as y}from"./entry-21db2f40.mjs";const k={__name:"SendCode",props:["phone"],setup(r,{expose:l}){l();const n=r,e=s(!1),c=f(()=>e.value?"\u53D1\u9001\u4E2D...":a.value>0?`${a.value} s`:"\u53D1\u9001\u9A8C\u8BC1\u7801"),a=s(0),t=s(null),u={loading:e,props:n,text:c,time:a,timer:t,sendCode:async()=>{e.value=!0;let{data:o,error:d}=await y(n.phone);if(e.value=!1,d.value)return;a.value=60,t.value&&clearInterval(t.value),t.value=setInterval(()=>{a.value--,a.value<=0&&clearInterval(t.value)},1e3);const _=o.value=="ok"?"\u9A8C\u8BC1\u7801\u53D1\u9001\u6210\u529F":`\u5F53\u524D\u6F14\u793A\u9A8C\u8BC1\u7801\u4E3A:${o.value}`,{message:v}=i(["message"]);v.success(_),console.log("\u9A8C\u8BC1\u7801\uFF1A"+o.value)},NButton:b,createDiscreteApi:i};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function B(r,l,n,e,c,a){return m(),g(e.NButton,{type:"primary",ghost:"",disabled:e.time>0||!n.phone,loading:e.loading,onClick:e.sendCode},{default:x(()=>[h(C(e.text),1)]),_:1},8,["disabled","loading"])}var I=p(k,[["render",B]]);export{I as _};