import{N as u,r as f}from"./index.3f8b5c7e.js";import{d as v,f as m,K as _,o as b,c as $,w as a,j as c,u as k,e as p}from"./vendor.c311a53b.js";import{_ as x}from"./LegalMoveChessboard.0e5cf95f.js";const C=p("Reload as White"),N=p("Reload as Black"),M=v({props:{move:null,destinations:null},setup(s){const{move:h}=s;let i=m(1),r=_().params.mode,n=r=="white"?"w":r=="black"?"b":Math.random()<.5?"w":"b",l=m(n=="w"?"white":"black");async function w(e,t,o){t.turn()!=n&&e(h(t,o))}function d(e){location.href.endsWith("/")?f.push(`../${e}`):f.push(`./${e}`),l.value=e,n=e=="white"?"w":"b",i.value++}return(e,t)=>(b(),$(x,{key:k(i),destinations:s.destinations,orientation:k(l),onMove:w},{nav:a(()=>[c(u,{onClick:t[0]||(t[0]=o=>d("white"))},{default:a(()=>[C]),_:1}),c(u,{onClick:t[1]||(t[1]=o=>d("black"))},{default:a(()=>[N]),_:1})]),_:1},8,["destinations","orientation"]))}});export{M as _};
