import{_ as y,a as k,c as b,r as v,w,bx as C,o as c,b as u,d as a,ar as I,h as t,i as N,t as G,e as B,f as S,F as P,am as D,n as M}from"./entry-21db2f40.mjs";import{a as V}from"./book-479372d1.mjs";import{N as j,_ as A,a as E}from"./Menu-d21cd997.mjs";import{_ as F,a as K}from"./Group-1cd53dfb.mjs";import{N as L,a as O}from"./Grid-87bc6c3f.mjs";import{N as R}from"./Image-ec1fc6fc.mjs";import"./Tag-06ce51bd.mjs";import"./use-locale-d1b818a5.mjs";import"./get-slot-f07f150d.mjs";import"./next-frame-once-08317937.mjs";import"./utils-4e919375.mjs";import"./Popover-ea85df19.mjs";import"./get-bc1ef6a5.mjs";import"./use-merged-state-aa6f3d5b.mjs";const T={__name:"[book_id]",async setup(h,{expose:f}){f();let o,e;const n=k(),g=b(()=>n.fullPath),{book_id:s,id:i}=n.params,_=v(i),{data:d,error:m,pending:r}=([o,e]=w(()=>V(s)),o=await o,e(),o),p={route:n,pageKey:g,book_id:s,id:i,activeId:_,data:d,error:m,pending:r,open:x=>{_.value=x,M({params:{...n.params,id:x}})},NGrid:L,NGridItem:O,NCard:I,NScrollbar:j,NImage:R};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},q={class:"flex flex-col items-center justify-center"},z={class:"text-sm font-bold"};function H(h,f,o,e,n,g){const s=E,i=K,_=A,d=C("NuxtPage"),m=F;return c(),u(m,{pending:e.pending,error:e.error},{default:a(()=>[t(e.NGrid,{"x-gap":20},{default:a(()=>[t(e.NGridItem,{span:6},{default:a(()=>[t(e.NScrollbar,{style:{"max-height":"450px"},class:"bg-white rounded shadow mb-5"},{default:a(()=>[N("div",q,[t(e.NImage,{src:e.data.detail.cover,width:"60",height:"80",class:"rounded shadow my-4"},null,8,["src"]),N("span",z,G(e.data.detail.title),1)]),t(_,null,{default:a(()=>[(c(!0),B(P,null,S(e.data.menus,(r,l)=>(c(),u(s,{key:l,item:r,index:l,onClick:p=>e.open(r.id),active:e.activeId==r.id},null,8,["item","index","onClick","active"]))),128)),e.data.menus.length==0?(c(),u(i,{key:0,desc:"\u554A\u54A7~\u6682\u65E0\u76EE\u5F55"})):D("",!0)]),_:1})]),_:1})]),_:1}),t(e.NGridItem,{span:18},{default:a(()=>[t(e.NCard,null,{default:a(()=>[t(d,{"page-key":e.pageKey},null,8,["page-key"])]),_:1})]),_:1})]),_:1})]),_:1},8,["pending","error"])}var se=y(T,[["render",H]]);export{se as default};
