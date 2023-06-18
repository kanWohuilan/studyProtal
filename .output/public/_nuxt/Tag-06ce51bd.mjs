import{G as ao,a4 as o,L as no,O as p,M as m,Q as S,P as y,k as so,r as to,a8 as io,S as U,X as ho,U as go,aj as Co,c as F,Y as bo,Z as L,x as z,az as vo,a7 as uo,aa as po,a2 as d,aA as N}from"./entry-21db2f40.mjs";var fo={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"};const ko=c=>{const{textColor2:h,primaryColorHover:r,primaryColorPressed:f,primaryColor:a,infoColor:i,successColor:s,warningColor:n,errorColor:t,baseColor:k,borderColor:x,opacityDisabled:g,tagColor:v,closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:u,borderRadiusSmall:C,fontSizeMini:b,fontSizeTiny:I,fontSizeSmall:P,fontSizeMedium:$,heightMini:H,heightTiny:B,heightSmall:M,heightMedium:R,closeColorHover:T,closeColorPressed:E,buttonColor2Hover:_,buttonColor2Pressed:W,fontWeightStrong:j}=c;return Object.assign(Object.assign({},fo),{closeBorderRadius:C,heightTiny:H,heightSmall:B,heightMedium:M,heightLarge:R,borderRadius:C,opacityDisabled:g,fontSizeTiny:b,fontSizeSmall:I,fontSizeMedium:P,fontSizeLarge:$,fontWeightStrong:j,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:k,colorCheckable:"#0000",colorHoverCheckable:_,colorPressedCheckable:W,colorChecked:a,colorCheckedHover:r,colorCheckedPressed:f,border:`1px solid ${x}`,textColor:h,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:u,closeColorHover:T,closeColorPressed:E,borderPrimary:`1px solid ${o(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:o(a,{alpha:.12}),colorBorderedPrimary:o(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:o(a,{alpha:.12}),closeColorPressedPrimary:o(a,{alpha:.18}),borderInfo:`1px solid ${o(i,{alpha:.3})}`,textColorInfo:i,colorInfo:o(i,{alpha:.12}),colorBorderedInfo:o(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:o(i,{alpha:.12}),closeColorPressedInfo:o(i,{alpha:.18}),borderSuccess:`1px solid ${o(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:o(s,{alpha:.12}),colorBorderedSuccess:o(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:o(s,{alpha:.12}),closeColorPressedSuccess:o(s,{alpha:.18}),borderWarning:`1px solid ${o(n,{alpha:.35})}`,textColorWarning:n,colorWarning:o(n,{alpha:.15}),colorBorderedWarning:o(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:o(n,{alpha:.12}),closeColorPressedWarning:o(n,{alpha:.18}),borderError:`1px solid ${o(t,{alpha:.23})}`,textColorError:t,colorError:o(t,{alpha:.1}),colorBorderedError:o(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:o(t,{alpha:.12}),closeColorPressedError:o(t,{alpha:.18})})},xo={name:"Tag",common:ao,self:ko};var mo=xo,zo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},So=no("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[p("strong",`
 font-weight: var(--n-font-weight-strong);
 `),m("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),m("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),m("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),m("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 cursor: pointer;
 `),p("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[m("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),m("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),p("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),p("icon, avatar",[p("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),p("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),p("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[S("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[S("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[S("checked","color: var(--n-text-color-pressed-checkable);")])]),p("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[S("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const yo=Object.assign(Object.assign(Object.assign({},U.props),zo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),Io=uo("n-tag");var $o=so({name:"Tag",props:yo,setup(c){const h=to(null),{mergedBorderedRef:r,mergedClsPrefixRef:f,inlineThemeDisabled:a,mergedRtlRef:i}=io(c),s=U("Tag","-tag",So,mo,c,f);ho(Io,{roundRef:go(c,"round")});function n(e){if(!c.disabled&&c.checkable){const{checked:l,onCheckedChange:u,onUpdateChecked:C,"onUpdate:checked":b}=c;C&&C(!l),b&&b(!l),u&&u(!l)}}function t(e){if(c.internalStopClickPropagation&&e.stopPropagation(),!c.disabled){const{onClose:l}=c;l&&po(l,e)}}const k={setTextContent(e){const{value:l}=h;l&&(l.textContent=e)}},x=Co("Tag",i,f),g=F(()=>{const{type:e,size:l,color:{color:u,textColor:C}={}}=c,{common:{cubicBezierEaseInOut:b},self:{padding:I,closeMargin:P,closeMarginRtl:$,borderRadius:H,opacityDisabled:B,textColorCheckable:M,textColorHoverCheckable:R,textColorPressedCheckable:T,textColorChecked:E,colorCheckable:_,colorHoverCheckable:W,colorPressedCheckable:j,colorChecked:V,colorCheckedHover:D,colorCheckedPressed:K,closeBorderRadius:A,fontWeightStrong:G,[d("colorBordered",e)]:Q,[d("closeSize",l)]:X,[d("closeIconSize",l)]:Y,[d("fontSize",l)]:Z,[d("height",l)]:w,[d("color",e)]:q,[d("textColor",e)]:J,[d("border",e)]:oo,[d("closeIconColor",e)]:O,[d("closeIconColorHover",e)]:eo,[d("closeIconColorPressed",e)]:ro,[d("closeColorHover",e)]:lo,[d("closeColorPressed",e)]:co}}=s.value;return{"--n-font-weight-strong":G,"--n-avatar-size-override":`calc(${w} - 8px)`,"--n-bezier":b,"--n-border-radius":H,"--n-border":oo,"--n-close-icon-size":Y,"--n-close-color-pressed":co,"--n-close-color-hover":lo,"--n-close-border-radius":A,"--n-close-icon-color":O,"--n-close-icon-color-hover":eo,"--n-close-icon-color-pressed":ro,"--n-close-icon-color-disabled":O,"--n-close-margin":P,"--n-close-margin-rtl":$,"--n-close-size":X,"--n-color":u||(r.value?Q:q),"--n-color-checkable":_,"--n-color-checked":V,"--n-color-checked-hover":D,"--n-color-checked-pressed":K,"--n-color-hover-checkable":W,"--n-color-pressed-checkable":j,"--n-font-size":Z,"--n-height":w,"--n-opacity-disabled":B,"--n-padding":I,"--n-text-color":C||J,"--n-text-color-checkable":M,"--n-text-color-checked":E,"--n-text-color-hover-checkable":R,"--n-text-color-pressed-checkable":T}}),v=a?bo("tag",F(()=>{let e="";const{type:l,size:u,color:{color:C,textColor:b}={}}=c;return e+=l[0],e+=u[0],C&&(e+=`a${N(C)}`),b&&(e+=`b${N(b)}`),r.value&&(e+="c"),e}),g,c):void 0;return Object.assign(Object.assign({},k),{rtlEnabled:x,mergedClsPrefix:f,contentRef:h,mergedBordered:r,handleClick:n,handleCloseClick:t,cssVars:a?void 0:g,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var c,h;const{mergedClsPrefix:r,rtlEnabled:f,closable:a,color:{borderColor:i}={},round:s,onRender:n,$slots:t}=this;n==null||n();const k=L(t.avatar,g=>g&&z("div",{class:`${r}-tag__avatar`},g)),x=L(t.icon,g=>g&&z("div",{class:`${r}-tag__icon`},g));return z("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:f,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:k,[`${r}-tag--icon`]:x,[`${r}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||k,z("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(c=this.$slots).default)===null||h===void 0?void 0:h.call(c)),!this.checkable&&a?z(vo,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,absolute:!0}):null,!this.checkable&&this.mergedBordered?z("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{$o as N,Io as t};
