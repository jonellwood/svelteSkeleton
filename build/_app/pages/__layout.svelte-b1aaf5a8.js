import{S as s,i as a,s as o,e as r,t as e,k as t,c as l,a as n,g as c,d as h,n as f,b as u,f as i,D as $,E,F as m,j as d,m as p,o as v,G as A,v as g,r as w,w as b}from"../chunks/vendor-55eff8e9.js";function F(s){let a,o,m,d,p,v,A,g,w,b,F,H,x;return{c(){a=r("header"),o=r("h1"),m=e("Welcome"),d=t(),p=r("nav"),v=r("a"),A=e("Home"),g=t(),w=r("a"),b=e("About Us"),F=t(),H=r("a"),x=e("Posts"),this.h()},l(s){a=l(s,"HEADER",{});var r=n(a);o=l(r,"H1",{});var e=n(o);m=c(e,"Welcome"),e.forEach(h),d=f(r),p=l(r,"NAV",{});var t=n(p);v=l(t,"A",{href:!0});var u=n(v);A=c(u,"Home"),u.forEach(h),g=f(t),w=l(t,"A",{href:!0});var i=n(w);b=c(i,"About Us"),i.forEach(h),F=f(t),H=l(t,"A",{href:!0});var $=n(H);x=c($,"Posts"),$.forEach(h),t.forEach(h),r.forEach(h),this.h()},h(){u(v,"href","/"),u(w,"href","/about"),u(H,"href","/posts")},m(s,r){i(s,a,r),$(a,o),$(o,m),$(a,d),$(a,p),$(p,v),$(v,A),$(p,g),$(p,w),$(w,b),$(p,F),$(p,H),$(H,x)},p:E,i:E,o:E,d(s){s&&h(a)}}}class H extends s{constructor(s){super(),a(this,s,null,F,o,{})}}function x(s){let a,o,E,F,x,S,j;a=new H({});const k=s[1].default,y=m(k,s,s[0],null);return{c(){d(a.$$.fragment),o=t(),E=r("main"),y&&y.c(),F=t(),x=r("footer"),S=e("Copywrite 2021 Ellwood Front End Solutions"),this.h()},l(s){p(a.$$.fragment,s),o=f(s),E=l(s,"MAIN",{class:!0});var r=n(E);y&&y.l(r),r.forEach(h),F=f(s),x=l(s,"FOOTER",{class:!0});var e=n(x);S=c(e,"Copywrite 2021 Ellwood Front End Solutions"),e.forEach(h),this.h()},h(){u(E,"class","bg-blue-400"),u(x,"class","svelte-1lg7wa")},m(s,r){v(a,s,r),i(s,o,r),i(s,E,r),y&&y.m(E,null),i(s,F,r),i(s,x,r),$(x,S),j=!0},p(s,[a]){y&&y.p&&(!j||1&a)&&A(y,k,s,s[0],a,null,null)},i(s){j||(g(a.$$.fragment,s),g(y,s),j=!0)},o(s){w(a.$$.fragment,s),w(y,s),j=!1},d(s){b(a,s),s&&h(o),s&&h(E),y&&y.d(s),s&&h(F),s&&h(x)}}}function S(s,a,o){let{$$slots:r={},$$scope:e}=a;return s.$$set=s=>{"$$scope"in s&&o(0,e=s.$$scope)},[e,r]}export default class extends s{constructor(s){super(),a(this,s,S,x,o,{})}}