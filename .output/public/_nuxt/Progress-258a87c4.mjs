import{G as M,P,L as s,O as b,k as z,c as x,x as r,K as W,bJ as q,bG as L,bH as O,bI as T,a8 as G,S as A,a2 as D,Y}from"./entry-21db2f40.mjs";import{f as C}from"./use-merged-state-aa6f3d5b.mjs";const j=e=>{const{infoColor:u,successColor:g,warningColor:n,errorColor:o,textColor2:l,progressRailColor:p,fontSize:a,fontWeight:t}=e;return{fontSize:a,fontSizeCircle:"28px",fontWeightCircle:t,railColor:p,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:u,iconColorInfo:u,iconColorSuccess:g,iconColorWarning:n,iconColorError:o,textColorCircle:l,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:l,fillColor:u,fillColorInfo:u,fillColorSuccess:g,fillColorWarning:n,fillColorError:o,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},H={name:"Progress",common:M,self:j};var X=H,E=P([s("progress",{display:"inline-block"},[s("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),b("line",`
 width: 100%;
 display: block;
 `,[s("progress-content",`
 display: flex;
 align-items: center;
 `,[s("progress-graph",{flex:1})]),s("progress-custom-content",{marginLeft:"14px"}),s("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[b("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),b("circle, dashboard",{width:"120px"},[s("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),s("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),s("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),b("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[s("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),s("progress-content",{position:"relative"}),s("progress-graph",{position:"relative"},[s("progress-graph-circle",[P("svg",{verticalAlign:"bottom"}),s("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[b("empty",{opacity:0})]),s("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),s("progress-graph-line",[b("indicator-inside",[s("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[s("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),s("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),b("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[s("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),s("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),s("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[s("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[b("processing",[P("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),P("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]);const _={success:r(q,null),error:r(L,null),warning:r(O,null),info:r(T,null)};var V=z({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:u}){const g=x(()=>C(e.height)),n=x(()=>e.railBorderRadius!==void 0?C(e.railBorderRadius):e.height!==void 0?C(e.height,{c:.5}):""),o=x(()=>e.fillBorderRadius!==void 0?C(e.fillBorderRadius):e.railBorderRadius!==void 0?C(e.railBorderRadius):e.height!==void 0?C(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:l,railColor:p,railStyle:a,percentage:t,unit:h,indicatorTextColor:m,status:d,showIndicator:f,fillColor:i,processing:v,clsPrefix:c}=e;return r("div",{class:`${c}-progress-content`,role:"none"},r("div",{class:`${c}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${c}-progress-graph-line`,{[`${c}-progress-graph-line--indicator-${l}`]:!0}]},r("div",{class:`${c}-progress-graph-line-rail`,style:[{backgroundColor:p,height:g.value,borderRadius:n.value},a]},r("div",{class:[`${c}-progress-graph-line-fill`,v&&`${c}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:i,height:g.value,lineHeight:g.value,borderRadius:o.value}},l==="inside"?r("div",{class:`${c}-progress-graph-line-indicator`},t,h):null)))),f&&l==="outside"?r("div",null,u.default?r("div",{class:`${c}-progress-custom-content`,style:{color:m},role:"none"},u.default()):d==="default"?r("div",{role:"none",class:`${c}-progress-icon ${c}-progress-icon--as-text`,style:{color:m}},t,h):r("div",{class:`${c}-progress-icon`,"aria-hidden":!0},r(W,{clsPrefix:c},{default:()=>_[d]}))):null)}}});const K={success:r(q,null),error:r(L,null),warning:r(O,null),info:r(T,null)};var F=z({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:u}){function g(n,o,l){const{gapDegree:p,viewBoxWidth:a}=e,t=50,h=0,m=t,d=0,f=2*t,i=`M 55,55 m ${h},${m}
      a ${t},${t} 0 1 1 ${d},${-f}
      a ${t},${t} 0 1 1 ${-d},${f}`,v=Math.PI*2*t,c={stroke:l,strokeDasharray:`${n/100*(v-p)}px ${a*8}px`,strokeDashoffset:`-${p/2+Math.PI/3.6*o}px`};return{pathString:i,pathStyle:c}}return()=>{const{fillColor:n,railColor:o,strokeWidth:l,offsetDegree:p,status:a,percentage:t,showIndicator:h,indicatorTextColor:m,unit:d,gapOffsetDegree:f,clsPrefix:i}=e,{pathString:v,pathStyle:c}=g(100,0,o),{pathString:$,pathStyle:S}=g(t,p,n);return r("div",{class:`${i}-progress-content`,role:"none"},r("div",{class:`${i}-progress-graph`,"aria-hidden":!0},r("div",{class:`${i}-progress-graph-circle`,style:{transform:f?`rotate(${f}deg)`:void 0}},r("svg",{viewBox:"0 0 110 110"},r("g",null,r("path",{class:`${i}-progress-graph-circle-rail`,d:v,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:c})),r("g",null,r("path",{class:[`${i}-progress-graph-circle-fill`,t===0&&`${i}-progress-graph-circle-fill--empty`],d:$,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:S}))))),h?r("div",null,u.default?r("div",{class:`${i}-progress-custom-content`,role:"none"},u.default()):a!=="default"?r("div",{class:`${i}-progress-icon`,"aria-hidden":!0},r(W,{clsPrefix:i},{default:()=>K[a]})):r("div",{class:`${i}-progress-text`,style:{color:m},role:"none"},r("span",{class:`${i}-progress-text__percentage`},t),r("span",{class:`${i}-progress-text__unit`},d))):null)}}});function N(e,u,g=100){return`m ${g/2} ${g/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var J=z({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:u}){const g=x(()=>e.percentage.map((o,l)=>`${Math.PI*o/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*l)-e.circleGap*l)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:n,strokeWidth:o,circleGap:l,showIndicator:p,fillColor:a,railColor:t,railStyle:h,percentage:m,clsPrefix:d}=e;return r("div",{class:`${d}-progress-content`,role:"none"},r("div",{class:`${d}-progress-graph`,"aria-hidden":!0},r("div",{class:`${d}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${n} ${n}`},m.map((f,i)=>r("g",{key:i},r("path",{class:`${d}-progress-graph-circle-rail`,d:N(n/2-o/2*(1+2*i)-l*i,o,n),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:t[i]},h[i]]}),r("path",{class:[`${d}-progress-graph-circle-fill`,f===0&&`${d}-progress-graph-circle-fill--empty`],d:N(n/2-o/2*(1+2*i)-l*i,o,n),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:g.value[i],strokeDashoffset:0,stroke:a[i]}})))))),p&&u.default?r("div",null,r("div",{class:`${d}-progress-text`},u.default())):null)}}});const Z=Object.assign(Object.assign({},A.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number});var ee=z({name:"Progress",props:Z,setup(e){const u=x(()=>e.indicatorPlacement||e.indicatorPosition),g=x(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:n,inlineThemeDisabled:o}=G(e),l=A("Progress","-progress",E,X,e,n),p=x(()=>{const{status:t}=e,{common:{cubicBezierEaseInOut:h},self:{fontSize:m,fontSizeCircle:d,railColor:f,railHeight:i,iconSizeCircle:v,iconSizeLine:c,textColorCircle:$,textColorLineInner:S,textColorLineOuter:y,lineBgProcessing:k,fontWeightCircle:B,[D("iconColor",t)]:R,[D("fillColor",t)]:w}}=l.value;return{"--n-bezier":h,"--n-fill-color":w,"--n-font-size":m,"--n-font-size-circle":d,"--n-font-weight-circle":B,"--n-icon-color":R,"--n-icon-size-circle":v,"--n-icon-size-line":c,"--n-line-bg-processing":k,"--n-rail-color":f,"--n-rail-height":i,"--n-text-color-circle":$,"--n-text-color-line-inner":S,"--n-text-color-line-outer":y}}),a=o?Y("progress",x(()=>e.status[0]),p,e):void 0;return{mergedClsPrefix:n,mergedIndicatorPlacement:u,gapDeg:g,cssVars:o?void 0:p,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{type:e,cssVars:u,indicatorTextColor:g,showIndicator:n,status:o,railColor:l,railStyle:p,color:a,percentage:t,viewBoxWidth:h,strokeWidth:m,mergedIndicatorPlacement:d,unit:f,borderRadius:i,fillBorderRadius:v,height:c,processing:$,circleGap:S,mergedClsPrefix:y,gapDeg:k,gapOffsetDegree:B,themeClass:R,$slots:w,onRender:I}=this;return I==null||I(),r("div",{class:[R,`${y}-progress`,`${y}-progress--${e}`,`${y}-progress--${o}`],style:u,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":t,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?r(F,{clsPrefix:y,status:o,showIndicator:n,indicatorTextColor:g,railColor:l,fillColor:a,railStyle:p,offsetDegree:this.offsetDegree,percentage:t,viewBoxWidth:h,strokeWidth:m,gapDegree:k===void 0?e==="dashboard"?75:0:k,gapOffsetDegree:B,unit:f},w):e==="line"?r(V,{clsPrefix:y,status:o,showIndicator:n,indicatorTextColor:g,railColor:l,fillColor:a,railStyle:p,percentage:t,processing:$,indicatorPlacement:d,unit:f,fillBorderRadius:v,railBorderRadius:i,height:c},w):e==="multiple-circle"?r(J,{clsPrefix:y,strokeWidth:m,railColor:l,fillColor:a,railStyle:p,viewBoxWidth:h,percentage:t,showIndicator:n,circleGap:S},w):null)}});export{ee as N,X as p};
