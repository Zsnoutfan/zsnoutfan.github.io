function m(){return new Worker("/assets/stockfish.4393174c.js",{type:"module"})}let s=new m,c=f();function f(){return new Promise(o=>{s.onmessage=({data:n})=>{n==="uciok"&&(s.onmessage=null,s.postMessage("ucinewgame"),o())},s.postMessage("uci")})}async function p(o){return await c,new Promise(n=>{let a="";function r({data:i}){if(i.startsWith("bestmove")){let t={},e=a.match(/score (cp|mate) (-?\d+)/);e&&(e[1]=="cp"&&(t.score=+e[2]/100),e[2]=="mate"&&(t.mate=+e[2])),e=i.match(/bestmove ([a-h][1-8])([a-h][1-8])([qnbr]?)/),e&&(t.bestMove={from:e[1],to:e[2],promotion:e[3]||void 0}),s.removeEventListener("message",r),n(t)}a=""+i}s.addEventListener("message",r),s.postMessage(`position fen ${o.fen()}`),s.postMessage("go movetime 2000")})}export{p as a};
