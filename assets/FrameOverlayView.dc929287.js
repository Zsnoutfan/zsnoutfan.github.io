import{_ as s,d as o,r as _,o as u,c as i,b as n,F as m}from"./index.4015e19e.js";const f=o({__name:"FrameOverlayView",setup(p){function l(e){if(!r.value)return;let a=r.value.contentDocument;if(!a)return;let t=a.elementFromPoint(e.clientX,e.clientY);if(!t)return;console.log("target",t);let c=new MouseEvent("click",{cancelable:!0,bubbles:!0,screenX:e.screenX,screenY:e.screenY});t.dispatchEvent(c)}let r=_(null);return(e,a)=>(u(),i(m,null,[n("div",{class:"overlay",onClick:l}),n("iframe",{ref_key:"frame",ref:r,class:"frame",src:"/"},null,512)],64))}});var d=s(f,[["__scopeId","data-v-313328a0"]]);export{d as default};