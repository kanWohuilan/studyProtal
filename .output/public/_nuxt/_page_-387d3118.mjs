import{_ as N,o as r,b as l,d as n,e as f,f as S,h as o,i as s,F as B,am as I,t as b,g as y,N as j,n as z,a as O,w as V,bQ as E}from"./entry-21db2f40.mjs";import{u as A,N as F}from"./Pagination-2bc07178.mjs";import{b as T}from"./common-39bc1520.mjs";import{c as q,_ as D}from"./Group-1cd53dfb.mjs";import{N as P,a as C}from"./Grid-87bc6c3f.mjs";import{_ as Q}from"./CourseSkeleton-aeaa60b6.mjs";import{b as R,_ as U}from"./CourseList-311e2910.mjs";import{_ as H}from"./Price-f7b39efa.mjs";import{N as J,a as K}from"./BreadcrumbItem-d842e664.mjs";import"./use-locale-d1b818a5.mjs";import"./use-merged-state-aa6f3d5b.mjs";import"./Input-16e77b41.mjs";import"./Popover-ea85df19.mjs";import"./get-bc1ef6a5.mjs";import"./next-frame-once-08317937.mjs";import"./Tag-06ce51bd.mjs";import"./create-f83f90a7.mjs";import"./get-slot-f07f150d.mjs";const M={__name:"BookSkeletion",setup(m,{expose:i}){i();const t={NSkeleton:q,NGrid:P,NGridItem:C};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},W={class:"flex p-5 items-stretch mb-5 bg-white shadow rounded"},X={class:"flex flex-col pl-3 flex-1"},Y={class:"mt-auto flex items-center"},Z={class:"flex items-end"};function $(m,i,t,e,a,_){return r(),l(e.NGrid,{"x-gap":20,cols:2},{default:n(()=>[(r(),f(B,null,S(2,c=>o(e.NGridItem,{key:c},{default:n(()=>[s("section",W,[o(e.NSkeleton,{height:"138px",width:"108px",class:"rounded flex-shrink-0"}),s("div",X,[o(e.NSkeleton,{width:"50%",height:"15px",class:"my-2"}),s("div",Y,[s("div",Z,[o(e.NSkeleton,{width:"30px",text:""}),o(e.NSkeleton,{width:"30px",class:"ml-2"})]),o(e.NSkeleton,{width:"100px",round:"",size:"medium",class:"ml-auto"})])])])]),_:2},1024)),64))]),_:1})}var ee=N(M,[["render",$]]);const te={__name:"BookList",props:{item:Object},setup(m,{expose:i}){i();const t=m,a={props:t,open:()=>{z(`/detail/book/${t.item.id}`)},NButton:j};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},oe={class:"flex p-5 items-stretch mb-5 bg-white shadow rounded"},ne={class:"flex flex-col pl-3 flex-1"},re={class:"mt-auto flex items-center"},ae={class:"flex items-end"};function se(m,i,t,e,a,_){var u;const c=R,d=H;return r(),f("section",oe,[(u=t.item)!=null&&u.cover?(r(),l(c,{key:0,src:t.item.cover,class:"w-[108px] h-[138px] rounded flex-shrink-0 bg-gray-50"},null,8,["src"])):I("",!0),s("div",ne,[s("h4",null,b(t.item.title),1),s("div",re,[s("div",ae,[o(d,{value:t.item.price},null,8,["value"]),o(d,{value:t.item.t_price,through:"",class:"ml-2"},null,8,["value"])]),o(e.NButton,{strong:"",secondary:"",round:"",type:"primary",class:"ml-auto",onClick:e.open},{default:n(()=>[y(b(t.item.sub_count==0?"\u7ACB\u5373\u8BA2\u9605":t.item.sub_count+"\u4EBA\u8BA2\u9605"),1)]),_:1})])])])}var ie=N(te,[["render",se]]);const _e={__name:"[page]",async setup(m,{expose:i}){i();let t,e;const a=O(),{type:_}=a.params,c=a.meta.title,{page:d,limit:u,pending:h,error:g,refresh:x,rows:p,total:k,handlePageChange:G}=([t,e]=V(()=>A(({page:L,limit:de})=>{let w={page:L};return(_=="group"||_=="flashsale")&&(w.usable=1),T(_,w)})),t=await t,e(),t),v={route:a,type:_,title:c,page:d,limit:u,pending:h,error:g,refresh:x,rows:p,total:k,handlePageChange:G,NGrid:P,NGi:C,NPagination:F,NBreadcrumb:J,NBreadcrumbItem:K};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}},ce=y("\u9996\u9875"),le={class:"flex justify-center items-center mt-5 mb-10"};function me(m,i,t,e,a,_){const c=E,d=ee,u=Q,h=ie,g=U,x=D;return r(),f("div",null,[o(e.NBreadcrumb,{class:"mb-5"},{default:n(()=>[o(e.NBreadcrumbItem,null,{default:n(()=>[o(c,{to:"/"},{default:n(()=>[ce]),_:1})]),_:1}),o(e.NBreadcrumbItem,null,{default:n(()=>[y(b(e.title),1)]),_:1})]),_:1}),o(x,{pending:e.pending,error:e.error,isEmpty:e.rows.length===0},{loading:n(()=>[e.type=="book"?(r(),l(d,{key:0})):(r(),l(u,{key:1}))]),default:n(()=>[o(e.NGrid,{"x-gap":20,cols:e.type=="book"?2:4},{default:n(()=>[(r(!0),f(B,null,S(e.rows,(p,k)=>(r(),l(e.NGi,{key:k},{default:n(()=>[e.type=="book"?(r(),l(h,{key:0,item:p},null,8,["item"])):(r(),l(g,{key:1,item:p},null,8,["item"]))]),_:2},1024))),128))]),_:1},8,["cols"]),s("div",le,[o(e.NPagination,{size:"large","item-count":e.total,page:e.page,"page-size":e.limit,"on-update:page":e.handlePageChange},null,8,["item-count","page","page-size","on-update:page"])])]),_:1},8,["pending","error","isEmpty"])])}var Ie=N(_e,[["render",me]]);export{Ie as default};