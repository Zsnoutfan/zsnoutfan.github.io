import{_ as a}from"./ChessVersusAI.8385a666.js";import{d as c,o as p,c as m}from"./index.e6e0fc39.js";import"./LegalMoveChessboard.8bf8d84f.js";const _=c({setup(i){let o=["k","q","r","b","n","p",void 0];function t(r){let e=r.moves({verbose:!0});return e.sort(()=>Math.random()<.5?-1:1).sort(({captured:n},{captured:s})=>o.indexOf(n)-o.indexOf(s)),e[0]}return(r,e)=>(p(),m(a,{move:t}))}});export{_ as default};