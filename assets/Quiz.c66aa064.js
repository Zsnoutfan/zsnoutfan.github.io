import{d as x,e as t,l as y,o as D,c as g,w as c,D as w,_ as Q,h,a as n,t as d,u,E as b,G as k,i as z}from"./index.795723d8.js";const B=x({name:"Quiz",props:{generator:null},setup(v){const{generator:_}=v;let a=t(""),i=t(""),o=t(""),r=[],f=t(null);function p(){let{prefix:e,suffix:l,answers:s}=_();i.value=e||"",o.value=l||"",a.value="",r=s}function m(e){e.preventDefault(),r.includes(+a.value)?p():a.value=""}return p(),y(()=>{var e;return(e=f.value)==null?void 0:e.focus()}),(e,l)=>(D(),g(w,{"explicit-height":"",flexbox:""},{nav:c(()=>[h(e.$slots,"nav",{},void 0,!0)]),default:c(()=>[n("form",{class:"form",onSubmit:m},[n("span",null,d(u(i)),1),b(n("input",{ref_key:"fieldEl",ref:f,"onUpdate:modelValue":l[0]||(l[0]=s=>z(a)?a.value=s:a=s),class:"field",inputmode:"numeric",type:"number"},null,512),[[k,u(a)]]),n("span",null,d(u(o)),1)],32)]),_:3}))}});var S=Q(B,[["__scopeId","data-v-6f678f47"]]);export{S as Q};