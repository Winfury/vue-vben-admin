import{d as s,e as r,bH as t,bS as e,bg as n,dz as a}from"./index.b35d627b.js";var o=s({name:"Authority",props:{value:{type:[Number,Array,String],default:""}},setup(s,{slots:o}){const{getPermissionMode:u}=n(),{hasPermission:i}=a();return()=>{const n=r(u);return n===t.ROLE?function(){const{value:r}=s;return r?i(r)?e(o):null:e(o)}():n===t.BACK?function(){const{value:r}=s;return r?i(r)?e(o):null:e(o)}():e(o)}}});export{o as _};