import{d as m,r as v,o,c,b as s,t as x,n as g,u as i,i as w,_ as b,e as p,w as B,D as y,f as d,F as u}from"./index.62914774.js";const k={class:"cell"},C=m({__name:"BingoCell",props:{num:null},setup(f){let t=v(!1);return(h,n)=>(o(),c("span",{class:g({"outer-cell":!0,selected:i(t)}),onClick:n[0]||(n[0]=_=>w(t)?t.value=!i(t):t=!i(t))},[s("span",k,x(f.num),1)],2))}});const j={class:"board"},z={class:"row header"},D={class:"outer-cell"},V={class:"cell"},$={class:"row"},F=m({__name:"BingoBoardView",setup(f){let t=h();function h(){let a=[[],[],[],[],[]];for(let e=0;e<5;e++){let r=n(e*15);for(let l=0;l<5;l++)a[l][e]=r[l]}return a}function n(a=0){let e=[];for(;e.length<5;){let r=_(a);e.includes(r)||e.push(r)}return e}function _(a=0){return Math.floor(Math.random()*15)+1+a}return(a,e)=>(o(),p(y,{"explicit-height":"",flexbox:""},{default:B(()=>[s("div",j,[s("div",z,[(o(),c(u,null,d("BINGO",r=>s("span",D,[s("span",V,x(r),1)])),64))]),(o(!0),c(u,null,d(i(t),r=>(o(),c("div",$,[(o(!0),c(u,null,d(r,l=>(o(),p(C,{num:l},null,8,["num"]))),256))]))),256))])]),_:1}))}});var M=b(F,[["__scopeId","data-v-6c92231e"]]);export{M as default};