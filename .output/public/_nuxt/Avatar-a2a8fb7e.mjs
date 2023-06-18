import{i as N,o as V}from"./utils-4e919375.mjs";import{t as G}from"./Tag-06ce51bd.mjs";import{G as K,aC as E,a7 as _,L as M,c0 as D,P as T,c1 as Y,M as w,k as U,a8 as X,r as b,I as B,c as y,S as I,W as Z,Y as q,m as J,a5 as Q,D as ee,x as R,Z as oe,V as re,a2 as te,aA as ae}from"./entry-21db2f40.mjs";const ne=r=>{const{borderRadius:n,avatarColor:s,cardColor:t,fontSize:i,heightTiny:f,heightSmall:l,heightMedium:z,heightLarge:v,heightHuge:d,modalColor:c,popoverColor:h}=r;return{borderRadius:n,fontSize:i,border:`2px solid ${t}`,heightTiny:f,heightSmall:l,heightMedium:z,heightLarge:v,heightHuge:d,color:E(t,s),colorModal:E(c,s),colorPopover:E(h,s)}},se={name:"Avatar",common:K,self:ne};var ie=se;const le=_("n-avatar-group");var de=M("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[D(T("&","--n-merged-color: var(--n-color-modal);")),Y(T("&","--n-merged-color: var(--n-color-popover);")),T("img",`
 width: 100%;
 height: 100%;
 `),w("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),M("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),w("text","line-height: 1.25")]);const ce=Object.assign(Object.assign({},I.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String});var he=U({name:"Avatar",props:ce,setup(r){const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=X(r),t=b(!1);let i=null;const f=b(null),l=b(null),z=()=>{const{value:e}=f;if(e&&(i===null||i!==e.innerHTML)){i=e.innerHTML;const{value:o}=l;if(o){const{offsetWidth:p,offsetHeight:u}=o,{offsetWidth:a,offsetHeight:S}=e,x=.9,C=Math.min(p/a*x,u/S*x,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${C})`}}},v=B(le,null),d=y(()=>{const{size:e}=r;if(e)return e;const{size:o}=v||{};return o||"medium"}),c=I("Avatar","-avatar",de,ie,r,n),h=B(G,null),m=y(()=>{if(v)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:h?h.roundRef.value:!1}),O=y(()=>v?!0:r.bordered||!1),P=e=>{if(!L.value)return;t.value=!0;const{onError:o}=r;o&&o(e)};Z(()=>r.src,()=>t.value=!1);const H=y(()=>{const e=d.value,o=m.value,p=O.value,{color:u}=r,{self:{borderRadius:a,fontSize:S,color:x,border:C,colorModal:W,colorPopover:k},common:{cubicBezierEaseInOut:A}}=c.value;let j;return typeof e=="number"?j=`${e}px`:j=c.value.self[te("height",e)],{"--n-font-size":S,"--n-border":p?C:"none","--n-border-radius":o?"50%":a,"--n-color":u||x,"--n-color-modal":u||W,"--n-color-popover":u||k,"--n-bezier":A,"--n-merged-size":`var(--n-avatar-size-override, ${j})`}}),g=s?q("avatar",y(()=>{const e=d.value,o=m.value,p=O.value,{color:u}=r;let a="";return e&&(typeof e=="number"?a+=`a${e}`:a+=e[0]),o&&(a+="b"),p&&(a+="c"),u&&(a+=ae(u)),a}),H,r):void 0,$=b(null),L=b(!r.lazy);J(()=>{if(N)return;let e;const o=Q(()=>{e==null||e(),e=void 0,r.lazy&&(e=V($.value,r.intersectionObserverOptions,L))});ee(()=>{o(),e==null||e()})});const F=b(!r.lazy);return{textRef:f,selfRef:l,mergedRoundRef:m,mergedClsPrefix:n,fitTextTransform:z,cssVars:s?void 0:H,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,hasLoadError:t,handleError:P,imageRef:$,shouldStartLoading:L,loaded:F,mergedOnLoad:e=>{const{onLoad:o}=r;o==null||o(e),F.value=!0}}},render(){var r,n;const{$slots:s,src:t,mergedClsPrefix:i,lazy:f,onRender:l,mergedOnLoad:z,shouldStartLoading:v,loaded:d}=this;l==null||l();let c;const h=(n=(r=this.$slots).placeholder)===null||n===void 0?void 0:n.call(r);return this.hasLoadError?c=R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):c=oe(s.default,m=>{if(m)return R(re,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${i}-avatar__text`},m)});if(t)return R("img",{loading:f?"lazy":"eager",ref:"imageRef",src:v||d?t:void 0,onLoad:z,"data-image-src":t,onError:this.handleError,style:[{objectFit:this.objectFit},h&&!d?{height:"0",width:"0",visibility:"hidden"}:""]})}),R("span",{ref:"selfRef",class:[`${i}-avatar`,this.themeClass],style:this.cssVars},c,f&&!d&&h)}});export{he as N};
