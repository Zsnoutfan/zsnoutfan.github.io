import{a as l}from"./stockfish.0e8e8684.js";import{_ as i}from"./ChessVersusAI.67467706.js";import{d as u,o as p,c as _}from"./index.b5946be6.js";import"./LegalMoveChessboard.75d28316.js";const A=u({setup(m){async function c(t){let{bestMove:o}=await l(t);return o}function f(t){let o=new Map;for(let r of t.SQUARES){let s=[],e=t.get(r);if((e==null?void 0:e.color)==t.turn()){for(let a of t.SQUARES){let n=t.get(a);(n==null?void 0:n.color)!=t.turn()&&s.push(a)}o.set(r,s)}}return o}return(t,o)=>(p(),_(i,{destinations:f,move:c}))}});export{A as default};
