import{_ as h,bq as N,a as v,r as m,br as b,bs as g,o as I,b as w,d as n,N as x,ao as d,h as o,i as y,bt as B,n as F,g as S}from"./entry-21db2f40.mjs";import{_ as q}from"./SendCode-99f1662e.mjs";import{N as k,a as C}from"./FormItem-38aec32c.mjs";import{a as R}from"./Input-16e77b41.mjs";import{N as V}from"./InputGroup-0af29b12.mjs";import"./use-merged-state-aa6f3d5b.mjs";import"./get-bc1ef6a5.mjs";import"./use-locale-d1b818a5.mjs";const A={__name:"bindphone",setup(c,{expose:r}){r(),N({title:"\u7ED1\u5B9A\u624B\u673A\u53F7"});const l=v(),e=m(null),s=b({phone:"",code:""}),u={phone:[{required:!0,message:"\u624B\u673A\u53F7\u9700\u8981\u586B\u5199",trigger:"blur"}],code:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"}]},t=m(!1),a=()=>{e.value.validate(async f=>{if(f)return;t.value=!0;let{data:P,error:p}=await B(s);if(t.value=!1,p.value)return;const{message:_}=d(["message"]);_.success("\u7ED1\u5B9A\u6210\u529F"),F(l.query.from||"/",{replace:!0})})};g(()=>a());const i={route:l,formRef:e,form:s,rules:u,loading:t,onSubmit:a,NForm:k,NInput:R,NInputGroup:V,NFormItem:C,NButton:x,createDiscreteApi:d};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},E=S(" \u7ED1 \u5B9A ");function G(c,r,l,e,s,u){const t=q;return I(),w(e.NForm,{class:"w-[340px]",ref:"formRef",model:e.form,rules:e.rules,size:"large"},{default:n(()=>[o(e.NFormItem,{"show-label":!1,path:"phone"},{default:n(()=>[o(e.NInput,{value:e.form.phone,"onUpdate:value":r[0]||(r[0]=a=>e.form.phone=a),placeholder:"\u8FD9\u91CC\u8F93\u5165\u624B\u673A\u53F7",clearable:""},null,8,["value"])]),_:1}),o(e.NFormItem,{"show-label":!1,path:"code"},{default:n(()=>[o(e.NInputGroup,null,{default:n(()=>[o(e.NInput,{style:{width:"75%"},value:e.form.code,"onUpdate:value":r[1]||(r[1]=a=>e.form.code=a),placeholder:"\u8F93\u51656\u4F4D\u9A8C\u8BC1\u7801"},null,8,["value"]),o(t,{phone:e.form.phone},null,8,["phone"])]),_:1})]),_:1}),y("div",null,[o(e.NButton,{class:"w-full",type:"primary",onClick:e.onSubmit,loading:e.loading},{default:n(()=>[E]),_:1},8,["loading"])])]),_:1},8,["model"])}var K=h(A,[["render",G]]);export{K as default};
