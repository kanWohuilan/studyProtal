import{_ as h,o as l,b as g,d as c,h as p,i as a,t as n,ak as x,N as w,g as C,bq as N,w as P,e as j,f as v,F as B,cg as U}from"./entry-21db2f40.mjs";import{u as k,N as S}from"./Pagination-2bc07178.mjs";import{_ as z,a as L,b as T}from"./index-1d09579b.mjs";import{_ as E}from"./Footer-4062071b.mjs";import{_ as F}from"./Group-1cd53dfb.mjs";import"./use-locale-d1b818a5.mjs";import"./use-merged-state-aa6f3d5b.mjs";import"./Input-16e77b41.mjs";import"./Popover-ea85df19.mjs";import"./get-bc1ef6a5.mjs";import"./next-frame-once-08317937.mjs";import"./Tag-06ce51bd.mjs";import"./create-f83f90a7.mjs";const O={__name:"TestList",props:{item:Object},setup(m,{expose:s}){s();const t={props:m,NButton:w};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},V={class:"mr-3"},q={class:"mr-3"},A={class:"mr-3"},H=C(" \u6700\u7EC8\u5F97\u5206: ");function D(m,s,e,t,u,d){const o=z,r=L,_=E,i=T;return l(),g(i,null,{default:c(()=>[p(o,{class:"flex justify-between"},{default:c(()=>[a("span",null,n(e.item.testpaper.title),1),a("span",{class:x(e.item.answer_status?"text-green-600":"text-rose-500")},n(e.item.answer_status?"\u8003\u8BD5\u5B8C\u6210":"\u8003\u8BD5\u4E2D"),3)]),_:1}),p(r,null,{default:c(()=>[a("small",V,"\u9898\u76EE\u603B\u6570:"+n(e.item.testpaper.question_count),1),a("small",q,"\u603B\u5206\u6570:"+n(e.item.testpaper.total_score),1),a("small",A,"\u53CA\u683C\u5206:"+n(e.item.testpaper.pass_score),1)]),_:1}),p(_,{class:"flex justify-between"},{default:c(()=>[a("span",null,n(e.item.created_time),1),a("span",{class:x(e.item.read_status?"text-green-600":"text-rose-500")},[H,a("span",null,n(e.item.read_status?e.item.score:"\u6B63\u5728\u9605\u5377"),1)],2)]),_:1})]),_:1})}var G=h(O,[["render",D]]);const I={__name:"[page]",async setup(m,{expose:s}){s();let e,t;N({title:"\u8003\u8BD5\u8BB0\u5F55"});const{page:u,limit:d,pending:o,error:r,rows:_,total:i,handlePageChange:y}=([e,t]=P(()=>k(({page:b,limit:Q})=>U(b))),e=await e,t(),e),f={page:u,limit:d,pending:o,error:r,rows:_,total:i,handlePageChange:y,NPagination:S};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}},J={class:"p-3"},K={class:"flex justify-center items-center mt-5 !pb-[1.5rem]"};function M(m,s,e,t,u,d){const o=G,r=F;return l(),g(r,{pending:t.pending,error:t.error,isEmpty:t.rows.length===0},{default:c(()=>[a("div",J,[(l(!0),j(B,null,v(t.rows,(_,i)=>(l(),g(o,{key:i,item:_},null,8,["item"]))),128))]),a("div",K,[p(t.NPagination,{size:"large","item-count":t.total,page:t.page,"page-size":t.limit,"on-update:page":t.handlePageChange},null,8,["item-count","page","page-size","on-update:page"])])]),_:1},8,["pending","error","isEmpty"])}var _e=h(I,[["render",M]]);export{_e as default};
