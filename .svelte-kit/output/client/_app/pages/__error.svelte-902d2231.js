import{S as s,i as r,s as a,e as t,t as e,k as o,c as n,a as u,g as c,d as f,n as h,f as i,D as E,h as p,E as N}from"../chunks/vendor-55eff8e9.js";function d(s){let r,a,d,l,m,H,v,G,O=s[1].message+"";return{c(){r=t("h1"),a=e("SOMETHING WENT WRONG"),d=o(),l=t("h3"),m=e(O),H=o(),v=t("h3"),G=e(s[0])},l(t){r=n(t,"H1",{});var e=u(r);a=c(e,"SOMETHING WENT WRONG"),e.forEach(f),d=h(t),l=n(t,"H3",{});var o=u(l);m=c(o,O),o.forEach(f),H=h(t),v=n(t,"H3",{});var i=u(v);G=c(i,s[0]),i.forEach(f)},m(s,t){i(s,r,t),E(r,a),i(s,d,t),i(s,l,t),E(l,m),i(s,H,t),i(s,v,t),E(v,G)},p(s,[r]){2&r&&O!==(O=s[1].message+"")&&p(m,O),1&r&&p(G,s[0])},i:N,o:N,d(s){s&&f(r),s&&f(d),s&&f(l),s&&f(H),s&&f(v)}}}function l({error:s,status:r}){return{props:{error:s,status:r}}}function m(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,m,d,a,{status:0,error:1})}}export{l as load};