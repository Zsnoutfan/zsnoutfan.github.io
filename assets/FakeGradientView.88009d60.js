import{_ as h}from"./FullscreenCanvas.44cd1916.js";import{d as k,s as w,o as x,c as D,w as s,x as C,j as c,N as d,b as _,v as f}from"./index.795723d8.js";import"./FullscreenDisplay.46453689.js";const g=_("Less Detail"),v=_("More Detail"),V=k({name:"FakeGradientView",setup(L){let n,r,e=+w().params.detail;(!isFinite(e)||e<50)&&(e=50),e=Math.floor(e);function m(i){let a=i.getContext("2d");if(!a)return;function t(){let l=i.width/e;for(let o=0;o<e;o++)a.fillStyle=Math.random()<o/e?"black":"white",a.fillRect(o*l,0,l,i.height)}t(),window.addEventListener("resize",t),C(()=>window.removeEventListener("resize",t)),n=()=>{e-=50,e<50&&(e=50),f.replace(`/fake-gradient/${e}`),t()},r=()=>{e+=50,f.replace(`/fake-gradient/${e}`),t()}}function u(){n&&n()}function p(){r&&r()}return(i,a)=>(x(),D(h,{onReady:m},{nav:s(()=>[c(d,{onClick:u},{default:s(()=>[g]),_:1}),c(d,{onClick:p},{default:s(()=>[v]),_:1})]),_:1}))}});export{V as default};