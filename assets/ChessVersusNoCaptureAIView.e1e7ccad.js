import{_ as a}from"./ChessVersusAI.73c04d05.js";import{d as c,o as p,c as m}from"./index.330a5295.js";import"./LegalMoveChessboard.d7118dc2.js";const _=c({setup(i){let o=["k","q","r","b","n","p",void 0];function t(r){let e=r.moves({verbose:!0});return e.sort(()=>Math.random()<.5?-1:1).sort(({captured:n},{captured:s})=>o.indexOf(s)-o.indexOf(n)),e[0]}return(r,e)=>(p(),m(a,{move:t}))}});export{_ as default};