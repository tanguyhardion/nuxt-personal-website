import{d as h,o as i,c as n,a as t,u as s,t as c,g as f,p as m,e as u,_ as g,F as p,h as j,f as k,b as _}from"./index-C4dRLrmM.js";const l=o=>(m("data-v-fbd397b3"),o=o(),u(),o),S={class:"project"},P={class:"image"},b=["src"],w={class:"content"},x={class:"header"},B={class:"chips"},I={class:"duration chip"},V=l(()=>t("span",{class:"material-icons"},"schedule",-1)),y={class:"team chip"},D=l(()=>t("span",{class:"material-icons"},"groups",-1)),L={class:"technologies chip"},N=l(()=>t("span",{class:"material-icons"},"code",-1)),$={class:"description"},C={key:0,class:"link"},F=["href"],T=h({__name:"ProjectCard",props:{project:{}},setup(o){const e=o.project;return(v,r)=>(i(),n("div",S,[t("div",P,[t("img",{src:s(e).image,alt:"Project image"},null,8,b)]),t("div",w,[t("div",x,[t("h2",null,c(s(e).title),1),t("div",B,[t("div",I,[V,t("span",null,c(s(e).duration),1)]),t("div",y,[D,t("span",null,c(s(e).team),1)]),t("div",L,[N,t("span",null,c(s(e).technologies.join(", ")),1)])])]),t("div",$,[t("p",null,c(s(e).description),1)]),s(e).link?(i(),n("div",C,[t("a",{href:s(e).link},c(s(e).link),9,F)])):f("",!0)])]))}}),W=g(T,[["__scopeId","data-v-fbd397b3"]]);var a=(o=>(o.Personal="Personal project",o.School="School project",o.Work="Work project",o))(a||{});const A=o=>(m("data-v-92601c77"),o=o(),u(),o),E={class:"projects"},M=A(()=>t("em",{class:"disclaimer"},[_(" This is just a showcase. For more projects, check out my  "),t("a",{href:"https://github.com/tanguyhardion",target:"_blank"},"GitHub"),_(" . ")],-1)),Q=h({__name:"PortfolioView",setup(o){const d=[{title:"CPage Map",description:"Description 1",technologies:["ETL","Angular","SpringBoot","PostgreSQL","Leaflet"],duration:"2 months",team:1,context:a.Personal,image:"https://via.placeholder.com/150",link:"https://www.google.com"},{title:"Project 2",description:"Description 2",technologies:["Angular","SpringBoot","PostgreSQL"],duration:"2 months",team:3,context:a.School,image:"https://via.placeholder.com/150"},{title:"Project 3",description:"Description 3",technologies:["React","Node.js","MongoDB"],duration:"3 months",team:5,context:a.Work,image:"https://via.placeholder.com/150"}];return(e,v)=>(i(),n(p,null,[t("div",E,[(i(),n(p,null,j(d,r=>k(W,{key:r.title,project:r},null,8,["project"])),64))]),M],64))}}),H=g(Q,[["__scopeId","data-v-92601c77"]]);export{H as default};
