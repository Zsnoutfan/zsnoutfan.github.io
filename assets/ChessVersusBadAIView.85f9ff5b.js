import{_ as c}from"./ChessVersusAI.53cfc8db.js";import{d as i,o as p,c as a}from"./vendor.5fff172f.js";import"./index.c092be5a.js";import"./LegalMoveChessboard.faf1354b.js";const v=i({setup(m){let e=["k","q","r","b","n","p",void 0];function s(n){let o=n.moves({verbose:!0});return o.sort(()=>Math.random()<.5?-1:1).sort(({piece:r},{piece:t})=>e.indexOf(t)-e.indexOf(r)).sort(({captured:r},{captured:t})=>e.indexOf(t)-e.indexOf(r)),o[0]}return(n,o)=>(p(),a(c,{move:s}))}});export{v as default};