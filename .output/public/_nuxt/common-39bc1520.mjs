import{bD as s,at as r}from"./entry-21db2f40.mjs";function a(t){return r("searchList",()=>`/search${s(t())}`,{lazy:!0})}function n(){return r("CouponList","/coupon/list ")}function o(t,e={}){let u=s(e);return r(t+"List",`/${t}/list${u}`,{lazy:!0})}function l(t,e={}){let u=s(e);return r("readDetail",`/${t}/read${u}`,{lazy:!0})}export{l as a,o as b,a as c,n as u};