import{a as f,u as k,r as i,o as u,c,d as e,k as p,v,l as T,p as b,h as x}from"./file_index.13eaab5e.js";import{u as S}from"./file_task.fc518151.js";import{_ as w}from"./file__plugin-vue_export-helper.e718e6fb.js";const s=l=>(b("data-v-af6a4174"),l=l(),x(),l),y={class:"crearTask"},C={key:0,class:"formTascanova"},g=s(()=>e("h1",null,"Amaga",-1)),I=[g],B=s(()=>e("br",null,null,-1)),V=s(()=>e("br",null,null,-1)),$=s(()=>e("br",null,null,-1)),A=s(()=>e("button",{class:"submit",id:"submit",type:"submit"},[e("h1",null,"Crea el recordatori")],-1)),D={key:1,class:"botoTascanova"},E=s(()=>e("h1",null,"Crea una tasca nova",-1)),M=[E],U={__name:"CrearTask",setup(l){const m=f();k();const d=S(),o=i(""),a=i(""),r=i(!1),_=()=>{r.value=!r.value};console.log(`T\xEDtol: ${o.value}`),console.log(`Descripci\xF3: ${a.value}`);const h=async()=>{await d.addTask(o.value,a.value,m.user.id),o.value="",a.value="",d.setTask()};return(j,t)=>(u(),c("section",y,[r.value?(u(),c("div",C,[e("form",{onSubmit:t[2]||(t[2]=T(n=>h(),["prevent"])),id:"form",action:""},[e("button",{onClick:_},I),B,p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.value=n),class:"title",type:"text",id:"title",placeholder:"Qu\xE8 has de fer?"},null,512),[[v,o.value]]),V,p(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=n=>a.value=n),name:"description",id:"description",cols:"30",rows:"10",placeholder:"Explica-li qu\xE8 ha de fer al teu jo del futur."},null,512),[[v,a.value]]),$,A],32)])):(u(),c("div",D,[e("form",{action:""},[e("button",{onClick:_},M)])]))]))}},R=w(U,[["__scopeId","data-v-af6a4174"]]);export{R as default};
