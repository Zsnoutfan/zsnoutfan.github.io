import{g as y,s as k}from"./cookie.648245ab.js";import{d as T,e as C,l as N,y as w,x as I,o as M,c as D,w as p,D as H,j as L,N as S,a as x,b as V,A as B,B as E,_ as O}from"./index.3e022063.js";const P=c=>(B("data-v-4b3fdba6"),c=c(),E(),c),R=V("Highlight Tropes"),j=P(()=>x("link",{href:"https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500&display=swap",rel:"stylesheet"},null,-1));var G=T({setup(c){let o=C(null),d={Etnachta:"\u05D1\u0591",SofPassuk:"\u05E1\u05BD",Segol:"\u05D1\u0592",Shalshelet:"\u05D1\u0593",ZakefKatan:"\u05D1\u0594",ZakefGadol:"\u05D1\u0595",Tifcha:"\u05D1\u0596",Rivia:"\u05D1\u0597",Zarka:"\u05D1\u05AE",Pashta:"\u05D1\u0599",Yetiv:"\u05D1\u059A",Tevir:"\u05D1\u059B",Pazer:"\u05D1\u05A1",QarneFarah:"\u05D1\u059F",TelishaGedola:"\u05D1\u05A0",Geresh:"\u05D1\u059C",Gershayim:"\u05D1\u059E",Mercha:"\u05D1\u05A5",Munach:"\u05D1\u05A3",Mahpach:"\u05D1\u05A4",Darga:"\u05D1\u05A7",Kadma:"\u05D1\u05A8",TelishaKetana:"\u05D1\u05A9",MerchaKefula:"\u05D1\u05A6",YerachBenYomo:"\u05D1\u05AA"};for(let[e,t]of Object.entries(d))d[e]=t[1];let _=Object.entries(d);function v(e){let t=-1,s=null;for(const[l,n]of _)e.indexOf(n)>t&&(t=e.indexOf(n),s=l);return s}function b(e){e.preventDefault();let t=e.clipboardData;if(!t)return;let s=t.getData("text/plain");if(!s)return;let l=document.getSelection();if(!l)return;let n=l.getRangeAt(0);n.deleteContents();let r=document.createTextNode(s);n.insertNode(r),n.selectNodeContents(r),n.collapse(!1),l.removeAllRanges(),l.addRange(n),u(),f()}function f(){if(!o.value)return;let e=[...o.value.childNodes].map(a=>(a.textContent||"").trim()).join(" ");if(!e)return;let t=document.createElement("span");t.textContent=e.trim().replace(/\s+/g," ");let r=t.innerHTML.split(" ").map(a=>({word:a,trope:v(a)})).map(({word:a,trope:h},i,g)=>h=="Munach"&&g[i+1].trope?{word:a,trope:`Munach${g[i+1].trope}`}:{word:a,trope:h}).map(({word:a,trope:h})=>{let i=document.createElement("span");return i.textContent=a,i.classList.add(h),i}),m=[r[0]];for(let a of r.slice(1))m.push(" ",a);o.value.replaceChildren(...m)}function u(){!o.value||o.value.classList.toggle("empty",!!o.value.textContent)}return N(()=>{u(),document.documentElement.classList.add("theme-light"),y("hasVisitedTropeHighlighter")!="1"&&w("Hey! If you're using dark mode, you might notice that our trope highlighter always uses light mode. This is to allow for a better printing and screenshot experience by default.").then(()=>k("hasVisitedTropeHighlighter","1"))}),I(()=>document.documentElement.classList.remove("theme-light")),(e,t)=>(M(),D(H,{"explicit-height":""},{nav:p(()=>[L(S,{onClick:f},{default:p(()=>[R]),_:1})]),default:p(()=>[j,x("div",{ref_key:"textbox",ref:o,class:"textbox empty",contenteditable:"",role:"textbox",onInput:u,onPaste:b},null,544)]),_:1}))}});var Y=O(G,[["__scopeId","data-v-4b3fdba6"]]);export{Y as default};