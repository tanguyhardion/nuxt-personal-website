import{f as v,d as u,o,c as a,a as s,u as t,t as c,g as l,_ as h,F as _,h as f,b as d,i as k}from"./index-B68Q2OsA.js";var i=(n=>(n.Personal="Personal",n.School="School",n.Work="Work",n))(i||{});const b="/assets/cnn-Ct5ffEjR.png",j="/assets/map-DvZU9mcu.png",x="/assets/website-CiSbIKi7.png",y="/assets/cpage-LNiD2l80.svg",w="/assets/iut-dijon-DClEfia0.png",L="/assets/utc-yjoed_Df.svg",P="/assets/utt-D8Mad9UQ.svg";function p(n){return v(()=>new URL(Object.assign({"/src/assets/images/illustrations/cnn.png":b,"/src/assets/images/illustrations/map.png":j,"/src/assets/images/illustrations/website.png":x,"/src/assets/images/logos/cpage.svg":y,"/src/assets/images/logos/iut-dijon.png":w,"/src/assets/images/logos/utc.svg":L,"/src/assets/images/logos/utt.svg":P})[`/src/assets/images/${n}`],import.meta.url).href).value}const C={class:"project"},I={class:"image"},F=["src"],S={class:"content"},N={class:"header"},T={class:"chips"},D={class:"duration chip"},V={class:"team chip"},W={class:"context chip"},A={key:0,class:"material-icons"},B={key:1,class:"material-icons"},E={key:2,class:"material-icons"},$={class:"technologies chip"},R={class:"description"},U={class:"footer"},H={key:0,class:"link"},Q={key:0,src:"https://cdn-icons-png.flaticon.com/512/2111/2111432.png"},G=["href"],K={key:1,class:"context-logo"},M=["src"],q=u({__name:"ProjectCard",props:{project:{}},setup(n){const e=n.project;return(g,r)=>(o(),a("div",C,[s("div",I,[s("img",{src:t(p)(`illustrations/${t(e).image}`),alt:"Project image"},null,8,F)]),s("div",S,[s("div",N,[s("h2",null,c(t(e).title),1),s("div",T,[s("div",D,[r[0]||(r[0]=s("span",{class:"material-icons"},"schedule",-1)),s("span",null,c(t(e).duration),1)]),s("div",V,[r[1]||(r[1]=s("span",{class:"material-icons"},"groups",-1)),s("span",null,c(t(e).team),1)]),s("div",W,[t(e).context===t(i).Personal?(o(),a("span",A,"person")):t(e).context===t(i).School?(o(),a("span",B,"school")):t(e).context===t(i).Work?(o(),a("span",E,"work")):l("",!0),s("span",null,c(t(e).context),1)]),s("div",$,[r[2]||(r[2]=s("span",{class:"material-icons"},"code",-1)),s("span",null,c(t(e).technologies.join(", ")),1)])])]),s("div",R,[s("p",null,c(t(e).description),1)]),s("div",U,[t(e).link?(o(),a("div",H,[t(e).link.includes("github.com")?(o(),a("img",Q)):l("",!0),s("a",{href:t(e).link,target:"_blank"},c(t(e).link.replace("https://","")),9,G)])):l("",!0),t(e).contextLogo?(o(),a("div",K,[s("img",{src:t(p)(`logos/${t(e).contextLogo}`),alt:"Context logo"},null,8,M)])):l("",!0)])])]))}}),z=h(q,[["__scopeId","data-v-d32fca31"]]),O=[{title:"Personal Website",description:`You're looking at it! I like to think of it as a digital resume, more personal and interactive
    than a traditional one or a LinkedIn profile (although you can find me there too). It's also more fun to make!`,duration:"2 months",team:1,technologies:["Vue.js","GitHub Pages"],context:i.Personal,image:"website.png",link:"https://github.com/tanguyhardion/tanguyhardion.github.io"},{title:"CPage Map",description:`A web application displaying an interactive map of CPage's customers, public health institutions in France.
    It shows relevant data and lets CPage collaborators log satisfaction levels after interactions (calls, emails, visits).
    Institutions are marked with a weather code indicating their satisfaction, offering a quick visual of which need more attention.`,duration:"2 months",team:1,technologies:["ETL","Angular","SpringBoot","PostgreSQL","Leaflet"],context:i.Work,contextLogo:"cpage.svg",image:"map.png"},{title:"TensorFlow CNN on CIFAR-100",description:`Training of a convolutional neural network (CNN) from scratch to classify images of the CIFAR-100 dataset.
    This project was part of a course on machine learning and deep learning using Python.`,duration:"2 months",team:1,context:i.School,contextLogo:"utt.svg",technologies:["Python","TensorFlow","Keras","HuggingFace"],image:"cnn.png",link:"https://github.com/tanguyhardion/cifar100-cnn"},{title:"Visualizer",description:"Description 2",duration:"2 months",team:1,context:i.Work,contextLogo:"cpage.svg",technologies:["ETL","Angular","PostgreSQL","Leaflet"],image:"https://via.placeholder.com/150"}],Y={class:"projects"},Z=u({__name:"ProjectsView",setup(n){return(m,e)=>(o(),a(_,null,[s("div",Y,[(o(!0),a(_,null,f(t(O),g=>(o(),k(z,{key:g.title,project:g},null,8,["project"]))),128))]),e[0]||(e[0]=s("em",{class:"disclaimer"},[d(" This is just a showcase. For more projects, check out my  "),s("a",{href:"https://github.com/tanguyhardion",target:"_blank"},"GitHub"),d(" . ")],-1))],64))}}),X=h(Z,[["__scopeId","data-v-f631014a"]]);export{X as default};
