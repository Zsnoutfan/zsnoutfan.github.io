import{_ as s,d as o,e as u,o as _,f as i,a as n,F as f}from"./index.330a5295.js";const m=o({setup(p){function l(e){if(!r.value)return;let t=r.value.contentDocument;if(!t)return;let a=t.elementFromPoint(e.clientX,e.clientY);if(!a)return;console.log("target",a);let c=new MouseEvent("click",{cancelable:!0,bubbles:!0,screenX:e.screenX,screenY:e.screenY});a.dispatchEvent(c)}let r=u(null);return(e,t)=>(_(),i(f,null,[n("div",{class:"overlay",onClick:l}),n("iframe",{ref_key:"frame",ref:r,class:"frame",src:"/"},null,512)],64))}});var d=s(m,[["__scopeId","data-v-313328a0"]]);export{d as default};