import{_ as d,c as v}from"./index.5007f319.js";import{d as o,o as c,a as p,j as _,w as n,r,g as u,l as f,m as h,n as m,F as k,f as z,q as g,c as b}from"./vendor.c311a53b.js";const y=o({props:{resizeChild:{type:Boolean},breakpoint:null},setup(t){return(a,e)=>(c(),p(k,null,[_(v,{breakpoint:t.breakpoint,floating:""},{default:n(()=>[r(a.$slots,"nav",{},void 0,!0)]),_:3},8,["breakpoint"]),u("main",{class:m({"resize-child":t.resizeChild})},[r(a.$slots,"default",f(h(a.$attrs)),void 0,!0)],2)],64))}});var w=d(y,[["__scopeId","data-v-9bdc3c62"]]);const R=o({props:{breakpoint:null},emits:["ready","resize"],setup(t,{emit:a}){let e=z(null);function i(){if(e.value){let{width:s,height:l}=e.value.getBoundingClientRect();e.value.width=s*devicePixelRatio,e.value.height=l*devicePixelRatio,e.value.dispatchEvent(new UIEvent("resize")),a("resize",e.value)}}return g(()=>{e.value&&(i(),a("ready",e.value))}),window.addEventListener("resize",i),(s,l)=>(c(),b(w,{breakpoint:t.breakpoint,"resize-child":""},{nav:n(()=>[r(s.$slots,"nav")]),default:n(()=>[u("canvas",{ref_key:"canvas",ref:e},null,512)]),_:3},8,["breakpoint"]))}});export{R as _};