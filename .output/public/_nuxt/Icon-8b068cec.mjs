import{G as g,L as y,O as l,P as d,S as h,k as v,a8 as b,c as a,Y as C,aJ as $,x as m,y as _}from"./entry-21db2f40.mjs";import{f as z}from"./use-merged-state-aa6f3d5b.mjs";const x=e=>{const{textColorBase:n,opacity1:i,opacity2:s,opacity3:r,opacity4:o,opacity5:t}=e;return{color:n,opacity1Depth:i,opacity2Depth:s,opacity3Depth:r,opacity4Depth:o,opacity5Depth:t}},D={name:"Icon",common:g,self:x};var S=D,P=y("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]);const R=Object.assign(Object.assign({},h.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),O=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:R,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=b(e),s=h("Icon","-icon",P,S,e,n),r=a(()=>{const{depth:t}=e,{common:{cubicBezierEaseInOut:c},self:p}=s.value;if(t!==void 0){const{color:u,[`opacity${t}Depth`]:f}=p;return{"--n-bezier":c,"--n-color":u,"--n-opacity":f}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),o=i?C("icon",a(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:a(()=>{const{size:t,color:c}=e;return{fontSize:z(t),color:c}}),cssVars:i?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:n,depth:i,mergedClsPrefix:s,component:r,onRender:o,themeClass:t}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),m("i",_(this.$attrs,{role:"img",class:[`${s}-icon`,t,{[`${s}-icon--depth`]:i,[`${s}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?m(r):this.$slots)}});export{O as N};
