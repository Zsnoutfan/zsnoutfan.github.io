import{_ as x,o as l,c as N,w as a,h as B,T as b,d as M,e as d,D as V,j as _,N as f,a as v,t as h,u as m,f as p,g as C,F as D,b as g}from"./index.b5946be6.js";const L={};function y(u,c){return l(),N(b,{name:"list"},{default:a(()=>[B(u.$slots,"default")]),_:3})}var A=x(L,[["render",y]]);const T=g("Previous Number"),j=g("Next Number"),F={class:"large"},G={class:"old"},I=M({setup(u){function c(s){for(let t=s.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[s[t],s[n]]=[s[n],s[t]]}return s}function k(){if(e++,e<=75&&i.value.unshift(o.value),e>=75)return e=75;o.value=r[e]}function w(){e--,e<0&&(e=0),e>=0&&i.value.shift(),o.value=r[e]}let r=c(Array.from({length:75},(s,t)=>"BINGO"[Math.floor(t/15)]+(t+1))),o=d(r[0]),i=d([]),e=0;return(s,t)=>(l(),N(V,{"explicit-height":"","flex-row":"",flexbox:""},{nav:a(()=>[_(f,{onClick:w},{default:a(()=>[T]),_:1}),_(f,{onClick:k},{default:a(()=>[j]),_:1})]),default:a(()=>[v("div",F,h(m(o)),1),v("div",G,[_(A,null,{default:a(()=>[(l(!0),p(D,null,C(m(i),n=>(l(),p("div",{key:n,class:"num"},h(n),1))),128))]),_:1})])]),_:1}))}});var S=x(I,[["__scopeId","data-v-8ebd1842"]]);export{S as default};
