import{Q as a}from"./Quiz.2c44852b.js";import{d as n,o as s,c}from"./index.fc523b5b.js";const l=n({setup(f){function o(){let r=Math.floor(11*Math.random())+2,e=Math.floor(11*Math.random())+2,t=r*e;return Math.random()<.5?{prefix:`${r} \xD7 ${e} = `,answers:[t]}:{prefix:`${t} \xF7 ${r} = `,answers:[e]}}return(r,e)=>(s(),c(a,{generator:o}))}});export{l as default};