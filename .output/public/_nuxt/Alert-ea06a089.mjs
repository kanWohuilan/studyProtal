import{G as j,aC as h,a4 as C,L as S,O as E,M as c,bE as F,P as O,k as N,a8 as V,S as R,aj as G,c as H,Y as K,r as D,x as t,bF as J,y as Y,az as Z,a1 as q,K as Q,bG as U,bH as X,bI as oo,bJ as eo,Z as ro,a3 as no,a2 as d}from"./entry-21db2f40.mjs";var lo={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"};const so=r=>{const{lineHeight:e,borderRadius:i,fontWeightStrong:p,baseColor:l,dividerColor:u,actionColor:P,textColor1:s,textColor2:g,closeColorHover:v,closeColorPressed:f,closeIconColor:b,closeIconColorHover:n,closeIconColorPressed:o,infoColor:x,successColor:m,warningColor:I,errorColor:z,fontSize:T}=r;return Object.assign(Object.assign({},lo),{fontSize:T,lineHeight:e,titleFontWeight:p,borderRadius:i,border:`1px solid ${u}`,color:P,titleTextColor:s,iconColor:g,contentTextColor:g,closeBorderRadius:i,closeColorHover:v,closeColorPressed:f,closeIconColor:b,closeIconColorHover:n,closeIconColorPressed:o,borderInfo:`1px solid ${h(l,C(x,{alpha:.25}))}`,colorInfo:h(l,C(x,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:x,contentTextColorInfo:g,closeColorHoverInfo:v,closeColorPressedInfo:f,closeIconColorInfo:b,closeIconColorHoverInfo:n,closeIconColorPressedInfo:o,borderSuccess:`1px solid ${h(l,C(m,{alpha:.25}))}`,colorSuccess:h(l,C(m,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:m,contentTextColorSuccess:g,closeColorHoverSuccess:v,closeColorPressedSuccess:f,closeIconColorSuccess:b,closeIconColorHoverSuccess:n,closeIconColorPressedSuccess:o,borderWarning:`1px solid ${h(l,C(I,{alpha:.33}))}`,colorWarning:h(l,C(I,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:I,contentTextColorWarning:g,closeColorHoverWarning:v,closeColorPressedWarning:f,closeIconColorWarning:b,closeIconColorHoverWarning:n,closeIconColorPressedWarning:o,borderError:`1px solid ${h(l,C(z,{alpha:.25}))}`,colorError:h(l,C(z,{alpha:.08})),titleTextColorError:s,iconColorError:z,contentTextColorError:g,closeColorHoverError:v,closeColorPressedError:f,closeIconColorError:b,closeIconColorHoverError:n,closeIconColorPressedError:o})},to={name:"Alert",common:j,self:so};var io=to,ao=S("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[E("closable",[S("alert-body",[c("title",`
 padding-right: 24px;
 `)])]),c("icon",{color:"var(--n-icon-color)"}),S("alert-body",{border:"var(--n-border)",padding:"var(--n-padding)"},[c("title",{color:"var(--n-title-text-color)"}),c("content",{color:"var(--n-content-text-color)"})]),F({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),c("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),c("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),E("show-icon",[S("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),S("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[c("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[O("& +",[c("content",{marginTop:"9px"})])]),c("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),c("icon",{transition:"color .3s var(--n-bezier)"})]);const co=Object.assign(Object.assign({},R.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function});var ho=N({name:"Alert",inheritAttrs:!1,props:co,setup(r){const{mergedClsPrefixRef:e,inlineThemeDisabled:i,mergedRtlRef:p}=V(r),l=R("Alert","-alert",ao,io,r,e),u=G("Alert",p,e),P=H(()=>{const{common:{cubicBezierEaseInOut:n},self:o}=l.value,{fontSize:x,borderRadius:m,titleFontWeight:I,lineHeight:z,iconSize:T,iconMargin:y,iconMarginRtl:$,closeIconSize:A,closeBorderRadius:W,closeSize:w,closeMargin:L,closeMarginRtl:M,padding:k}=o,{type:a}=r,{left:_,right:B}=no(y);return{"--n-bezier":n,"--n-color":o[d("color",a)],"--n-close-icon-size":A,"--n-close-border-radius":W,"--n-close-color-hover":o[d("closeColorHover",a)],"--n-close-color-pressed":o[d("closeColorPressed",a)],"--n-close-icon-color":o[d("closeIconColor",a)],"--n-close-icon-color-hover":o[d("closeIconColorHover",a)],"--n-close-icon-color-pressed":o[d("closeIconColorPressed",a)],"--n-icon-color":o[d("iconColor",a)],"--n-border":o[d("border",a)],"--n-title-text-color":o[d("titleTextColor",a)],"--n-content-text-color":o[d("contentTextColor",a)],"--n-line-height":z,"--n-border-radius":m,"--n-font-size":x,"--n-title-font-weight":I,"--n-icon-size":T,"--n-icon-margin":y,"--n-icon-margin-rtl":$,"--n-close-size":w,"--n-close-margin":L,"--n-close-margin-rtl":M,"--n-padding":k,"--n-icon-margin-left":_,"--n-icon-margin-right":B}}),s=i?K("alert",H(()=>r.type[0]),P,r):void 0,g=D(!0),v=()=>{const{onAfterLeave:n,onAfterHide:o}=r;n&&n(),o&&o()};return{rtlEnabled:u,mergedClsPrefix:e,visible:g,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(o=>{o!==!1&&(g.value=!1)})},handleAfterLeave:()=>{v()},mergedTheme:l,cssVars:i?void 0:P,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),t(J,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:i}=this,p={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?t("div",Object.assign({},Y(this.$attrs,p)),this.closable&&t(Z,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&t("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},q(i.icon,()=>[t(Q,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return t(eo,null);case"info":return t(oo,null);case"warning":return t(X,null);case"error":return t(U,null);default:return null}}})])),t("div",{class:`${e}-alert-body`},ro(i.header,l=>{const u=l||this.title;return u?t("div",{class:`${e}-alert-body__title`},u):null}),i.default&&t("div",{class:`${e}-alert-body__content`},i))):null}})}});export{ho as N};
