import{_ as x,d as y,e as t,l as D,o as g,c as w,w as c,h,a as n,t as d,u,E as Q,G as b,i as k,D as B}from"./index.e6e0fc39.js";const E=y({props:{generator:null},setup(v){const{generator:_}=v;let a=t(""),o=t(""),r=t(""),i=[],f=t(null);function p(){let{prefix:e,suffix:l,answers:s}=_();o.value=e||"",r.value=l||"",a.value="",i=s}function m(e){e.preventDefault(),i.includes(+a.value)?p():a.value=""}return p(),D(()=>{var e;return(e=f.value)==null?void 0:e.focus()}),(e,l)=>(g(),w(B,{"explicit-height":"",flexbox:""},{nav:c(()=>[h(e.$slots,"nav",{},void 0,!0)]),default:c(()=>[n("form",{class:"form",onSubmit:m},[n("span",null,d(u(o)),1),Q(n("input",{ref_key:"fieldEl",ref:f,"onUpdate:modelValue":l[0]||(l[0]=s=>k(a)?a.value=s:a=s),class:"field",inputmode:"numeric",type:"number"},null,512),[[b,u(a)]]),n("span",null,d(u(r)),1)],32)]),_:3}))}});var z=x(E,[["__scopeId","data-v-6f678f47"]]);export{z as Q};