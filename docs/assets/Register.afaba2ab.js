import{u as h,a as f,r as c,b,o as w,c as g,e as s,k as y,j as d,v as r,m as u,d as x,w as S,p as k,l as R}from"./index.67dac9ee.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const e=a=>(k("data-v-8655d773"),a=a(),R(),a),I={class:"section"},C={class:"container"},B=["onSubmit"],N={class:"field"},U=e(()=>s("label",{class:"label"},"Email",-1)),E={class:"control"},M=e(()=>s("br",null,null,-1)),T={class:"field"},j=e(()=>s("label",{class:"label"},"Contrasenya",-1)),A={class:"control"},D=e(()=>s("br",null,null,-1)),J={class:"field"},L=e(()=>s("label",{class:"label"},"Confirma la contrasenya",-1)),P={class:"control"},q=e(()=>s("br",null,null,-1)),z=e(()=>s("div",{class:"field"},[s("div",{class:"control"},[s("button",{class:"button is-link is-fullwidth",type:"submit",placeholder:"Registra't"},"Registra't")])],-1)),F=e(()=>s("br",null,null,-1)),G={__name:"Register",setup(a){const _=h(),p=f(),n=c(""),o=c(""),i=c(""),v=async()=>{console.log("formulario enviado",n.value,o.value,i.value),o.value===i.value?(await p.register(n.value,o.value),_.push({name:"login"})):alert("Les contrasenyes no coincideixen")};return(H,t)=>{const m=b("router-link");return w(),g("div",I,[s("div",C,[s("form",{onSubmit:y(v,["prevent"])},[s("div",N,[U,s("div",E,[d(s("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),class:"input",type:"email",placeholder:"email"},null,512),[[r,n.value]])])]),M,s("div",T,[j,s("div",A,[d(s("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>o.value=l),class:"input",type:"password",placeholder:"password"},null,512),[[r,o.value]])])]),D,s("div",J,[L,s("div",P,[d(s("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>i.value=l),class:"input",type:"password",placeholder:"confirm password"},null,512),[[r,i.value]])])]),q,z,F,s("div",null,[u(" Ja est\xE0s registrat? "),x(m,{to:{name:"login"}},{default:S(()=>[u("Inicia sessi\xF3")]),_:1})])],40,B)])])}}},Q=V(G,[["__scopeId","data-v-8655d773"]]);export{Q as default};
