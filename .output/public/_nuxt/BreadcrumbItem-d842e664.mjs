import{G as P,L as m,P as s,O as T,M as u,k as g,a8 as y,S as x,X as S,U as H,c as p,Y as j,x as v,a7 as I,r as $,m as E,bR as O,ap as _,I as w,a1 as A}from"./entry-21db2f40.mjs";var N={fontWeightActive:"400"};const V=e=>{const{fontSize:o,textColor3:r,textColor2:a,borderRadius:n,buttonColor2Hover:t,buttonColor2Pressed:l}=e;return Object.assign(Object.assign({},N),{fontSize:o,itemLineHeight:"1.25",itemTextColor:r,itemTextColorHover:a,itemTextColorPressed:a,itemTextColorActive:a,itemBorderRadius:n,itemColorHover:t,itemColorPressed:l,separatorColor:r})},M={name:"Breadcrumb",common:P,self:V};var K=M,U=m("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[s("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),s("a",`
 color: inherit;
 text-decoration: inherit;
 `),m("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[m("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),s("&:not(:last-child)",[T("clickable",[u("link",`
 cursor: pointer;
 `,[s("&:hover",`
 background-color: var(--n-item-color-hover);
 `),s("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),u("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[s("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[m("icon",`
 color: var(--n-item-text-color-hover);
 `)]),s("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[m("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),u("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),s("&:last-child",[u("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[m("icon",`
 color: var(--n-item-text-color-active);
 `)]),u("separator",`
 display: none;
 `)])])]);const C=I("n-breadcrumb"),D=Object.assign(Object.assign({},x.props),{separator:{type:String,default:"/"}});var q=g({name:"Breadcrumb",props:D,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=y(e),a=x("Breadcrumb","-breadcrumb",U,K,e,o);S(C,{separatorRef:H(e,"separator"),mergedClsPrefixRef:o});const n=p(()=>{const{common:{cubicBezierEaseInOut:l},self:{separatorColor:d,itemTextColor:i,itemTextColorHover:c,itemTextColorPressed:b,itemTextColorActive:h,fontSize:f,fontWeightActive:R,itemBorderRadius:k,itemColorHover:B,itemColorPressed:z,itemLineHeight:L}}=a.value;return{"--n-font-size":f,"--n-bezier":l,"--n-item-text-color":i,"--n-item-text-color-hover":c,"--n-item-text-color-pressed":b,"--n-item-text-color-active":h,"--n-separator-color":d,"--n-item-color-hover":B,"--n-item-color-pressed":z,"--n-item-border-radius":k,"--n-font-weight-active":R,"--n-item-line-height":L}}),t=r?j("breadcrumb",void 0,n,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:n,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),v("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},v("ul",null,this.$slots))}});const F=_?window:null,G=(e=F)=>{const o=()=>{const{hash:n,host:t,hostname:l,href:d,origin:i,pathname:c,port:b,protocol:h,search:f}=(e==null?void 0:e.location)||{};return{hash:n,host:t,hostname:l,href:d,origin:i,pathname:c,port:b,protocol:h,search:f}},r=()=>{a.value=o()},a=$(o());return E(()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))}),O(()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))}),a},X={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function};var J=g({name:"BreadcrumbItem",props:X,setup(e,{slots:o}){const r=w(C,null);if(!r)return()=>null;const{separatorRef:a,mergedClsPrefixRef:n}=r,t=G(),l=p(()=>e.href?"a":"span"),d=p(()=>t.value.href===e.href?"location":null);return()=>{const{value:i}=n;return v("li",{class:[`${i}-breadcrumb-item`,e.clickable&&`${i}-breadcrumb-item--clickable`]},v(l.value,{class:`${i}-breadcrumb-item__link`,"aria-current":d.value,href:e.href,onClick:e.onClick},o),v("span",{class:`${i}-breadcrumb-item__separator`,"aria-hidden":"true"},A(o.separator,()=>{var c;return[(c=e.separator)!==null&&c!==void 0?c:a.value]})))}}});export{q as N,J as a};
