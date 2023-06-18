import{k as N,o as a,e as u,i,_ as w,al as k,r as C,b as m,d as o,am as p,g as r,t as c,F as b,f as B,h as s,an as T,N as I,ao as x,n as S}from"./entry-21db2f40.mjs";import{N as z}from"./Tag-06ce51bd.mjs";import{N as O}from"./Image-ec1fc6fc.mjs";import{N as V}from"./Icon-8b068cec.mjs";import{T as D}from"./ThumbsUpSharp-92759cd9.mjs";const E={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},L=i("path",{d:"M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),P=i("circle",{cx:"160",cy:"216",r:"32",fill:"currentColor"},null,-1),j=i("circle",{cx:"256",cy:"216",r:"32",fill:"currentColor"},null,-1),H=i("circle",{cx:"352",cy:"216",r:"32",fill:"currentColor"},null,-1),F=[L,P,j,H];var M=N({name:"ChatboxEllipsesOutline",render:function(l,t){return a(),u("svg",E,F)}});const U={__name:"PostList",props:{item:Object,showDel:{type:Boolean,default:!0}},emits:["delete"],setup(d,{expose:l,emit:t}){l();const e=d,{supportLoading:_,handleSupport:h}=k(),n=C(!1),f={props:e,supportLoading:_,handleSupport:h,loading:n,emit:t,deleteItem:()=>{const{dialog:y,message:v}=x(["dialog","message"]);y.warning({content:"\u662F\u5426\u8981\u5220\u9664\u8BE5\u8D34\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:async()=>{n.value=!0,t("delete",{id:e.item.id,success(){v.success("\u5220\u9664\u6210\u529F"),n.value=!1},fail(){n.value=!1}})}})},open:()=>{S("/post_detail/"+e.item.id)},NTag:z,NImage:O,NButton:I,NIcon:V,createDiscreteApi:x,ThumbsUpSharp:D,ChatboxEllipsesOutline:M};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}},A={class:"border-b p-5"},q=r(" \u7F6E\u9876 "),G={class:"flex mt-5"},J=r(" \u5220\u9664 ");function K(d,l,t,e,_,h){return a(),u("div",A,[i("div",{class:"cursor-pointer text-gray-600",onClick:e.open},[t.item.is_top?(a(),m(e.NTag,{key:0,bordered:!1,type:"success",size:"small"},{default:o(()=>[q]),_:1})):p("",!0),r(" "+c(t.item.desc.text),1)]),i("div",{class:"mt-3 cursor-pointer max-w-[500px]",onClick:e.open},[(a(!0),u(b,null,B(t.item.desc.images,(n,g)=>(a(),m(e.NImage,{key:g,src:n,width:t.item.desc.images.length==1?300:150,height:t.item.desc.images.length==1?200:100,class:"mr-3 mb-2 rounded"},null,8,["src","width","height"]))),128))]),i("div",G,[s(e.NButton,{secondary:"",strong:"",size:"tiny",class:"mr-3",type:t.item.issupport?"primary":"tertiary",onClick:l[0]||(l[0]=T(n=>e.handleSupport(t.item),["stop"])),loading:e.supportLoading},{icon:o(()=>[s(e.NIcon,null,{default:o(()=>[s(e.ThumbsUpSharp)]),_:1})]),default:o(()=>[r(" \u70B9\u8D5E "+c(t.item.support_count||0),1)]),_:1},8,["type","loading"]),s(e.NButton,{secondary:"",strong:"",size:"tiny",class:"mr-3"},{icon:o(()=>[s(e.NIcon,null,{default:o(()=>[s(e.ChatboxEllipsesOutline)]),_:1})]),default:o(()=>[r(" \u8BC4\u8BBA "+c(t.item.comment_count||0),1)]),_:1}),s(e.NButton,{text:"",size:"tiny",class:"mr-3"},{default:o(()=>[r("\u4F5C\u8005\uFF1A"+c(t.item.user.name),1)]),_:1}),t.showDel?(a(),m(e.NButton,{key:0,type:"error",size:"tiny",onClick:e.deleteItem,loading:e.loading},{default:o(()=>[J]),_:1},8,["loading"])):p("",!0)])])}var $=w(U,[["render",K]]);export{$ as _};
