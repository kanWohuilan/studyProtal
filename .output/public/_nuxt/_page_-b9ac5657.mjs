import{_ as y,c as x,o as d,b as g,d as i,i as r,h as p,g as h,t as o,ak as C,ar as w,N as v,n as P,bq as k,w as B,e as j,f as G,F as S,c3 as z}from"./entry-21db2f40.mjs";import{u as L,N as T}from"./Pagination-2bc07178.mjs";import{_ as D}from"./Group-1cd53dfb.mjs";import{a as E,N as O}from"./Grid-87bc6c3f.mjs";import"./use-locale-d1b818a5.mjs";import"./use-merged-state-aa6f3d5b.mjs";import"./Input-16e77b41.mjs";import"./Popover-ea85df19.mjs";import"./get-bc1ef6a5.mjs";import"./next-frame-once-08317937.mjs";import"./Tag-06ce51bd.mjs";import"./create-f83f90a7.mjs";import"./get-slot-f07f150d.mjs";const V={__name:"CouponList",props:{item:Object},setup(_,{expose:s}){s();const t=_,e={course:"\u8BFE\u7A0B",column:"\u4E13\u680F"},c=x(()=>{const n=t.item;return n.expires=new Date(n.end_time).getTime()<new Date().getTime(),n.used?"\u5DF2\u4F7F\u7528":n.expires?"\u5DF2\u8FC7\u671F":"\u7ACB\u5373\u4F7F\u7528"}),a={props:t,o:e,btn:c,open:()=>{const{item:n}=t;P(`/createorder?id=${n.goods_id}&type=${n.type}`)},NCard:w,NButton:v};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},A={class:"!text-xs mt-3"},F={class:"flex justify-end"};function I(_,s,t,e,c,m){return d(),g(e.NCard,{class:C(["coupon",{"coupon-disabled":e.btn!="\u7ACB\u5373\u4F7F\u7528"}])},{footer:i(()=>[r("div",F,[p(e.NButton,{type:e.btn!="\u7ACB\u5373\u4F7F\u7528"?"tertiary":"warning",disabled:e.btn!="\u7ACB\u5373\u4F7F\u7528",onClick:e.open},{default:i(()=>[h(o(e.btn),1)]),_:1},8,["type","disabled"])])]),default:i(()=>[r("h4",null,"CNY "+o(t.item.price),1),r("p",null,"\u9002\u7528"+o(e.o[t.item.type])+"\uFF1A"+o(t.item.title),1),r("p",A,"\u6709\u6548\u671F: "+o(t.item.start_time)+" - "+o(t.item.end_time),1)]),_:1},8,["class"])}var U=y(V,[["render",I]]);const q={__name:"[page]",async setup(_,{expose:s}){s();let t,e;k({title:"\u4F18\u60E0\u5238"});const{page:c,limit:m,pending:a,error:n,rows:l,total:u,handlePageChange:N}=([t,e]=B(()=>L(({page:b,limit:K})=>z(b))),t=await t,e(),t),f={page:c,limit:m,pending:a,error:n,rows:l,total:u,handlePageChange:N,NPagination:T,NGridItem:E,NGrid:O};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}},H={class:"p-3"},Y={class:"flex justify-center items-center mt-5 !pb-[1.5rem]"};function J(_,s,t,e,c,m){const a=U,n=D;return d(),g(n,{pending:e.pending,error:e.error,isEmpty:e.rows.length===0},{default:i(()=>[r("div",H,[p(e.NGrid,{"x-gap":20,"y-gap":5,cols:2},{default:i(()=>[(d(!0),j(S,null,G(e.rows,(l,u)=>(d(),g(e.NGridItem,{key:u},{default:i(()=>[p(a,{item:l},null,8,["item"])]),_:2},1024))),128))]),_:1})]),r("div",Y,[p(e.NPagination,{size:"large","item-count":e.total,page:e.page,"page-size":e.limit,"on-update:page":e.handlePageChange},null,8,["item-count","page","page-size","on-update:page"])])]),_:1},8,["pending","error","isEmpty"])}var ie=y(q,[["render",J]]);export{ie as default};