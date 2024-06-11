import{_ as y,r as n,c as C,o as x,a as Z,b as $,d as i,e as r,f as e,t as S,F as N,g as F,h,p as R,i as U}from"./index-cXAIAot2.js";const p=f=>(R("data-v-e3b4abca"),f=f(),U(),f),q={class:"content"},A={class:"timer-display"},D={key:0,class:"timer-input"},E=["onClick"],P=p(()=>e("svg",{width:"30",height:"20",viewBox:"0 0 30 20",fill:"none"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67881 10L8.54635 2.15054H27.8571V17.8495H8.54635L2.67881 10ZM0 10L7.47508 20H27.8571H30V17.8495V2.15054V0H27.8571H7.47508L0 10ZM21.4745 15.0614L17.9464 11.5207L14.4183 15.0614L12.9031 13.5407L16.4312 10L12.9031 6.45925L14.4183 4.93859L17.9464 8.47934L21.4745 4.93859L22.9898 6.45925L19.4617 10L22.9898 13.5407L21.4745 15.0614Z",fill:"white"})],-1)),j=[P],z={class:"timer-buttons"},G=p(()=>e("svg",{width:"28",height:"32",viewBox:"0 0 28 32",fill:"none"},[e("path",{d:"M28 16L1.07483e-06 32L2.47359e-06 -1.22392e-06L28 16Z",fill:"white"})],-1)),J=[G],K=p(()=>e("svg",{width:"28",height:"32",viewBox:"0 0 28 32",fill:"none"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 0H0V32H4V0ZM28 0H24V32H28V0Z",fill:"white"})],-1)),O=[K],Q=p(()=>e("svg",{width:"28",height:"32",viewBox:"0 0 28 32",fill:"none"},[e("path",{d:"M28 16L1.07483e-06 32L2.47359e-06 -1.22392e-06L28 16Z",fill:"white"})],-1)),W=[Q],X=p(()=>e("svg",{width:"16",height:"16",viewBox:"0 0 32 32",fill:"none"},[e("path",{d:"M0 0H32V32H0V0Z",fill:"white"})],-1)),Y=[X],ee=p(()=>e("svg",{width:"42",height:"32",viewBox:"0 0 42 32",fill:"none"},[e("path",{d:"M3 19L12.8571 29L39 3",stroke:"white","stroke-width":"4","stroke-linecap":"square"})],-1)),te=[ee],se={__name:"timerView",setup(f){const a=n(null),u=n(0),s=n(""),o=new Audio("/assets/sound/timer.mp3"),c=n(!1),v=n(!1),_=n(!1),m=n(!1),L=n(!0),g=n(!0),B=C(()=>{const t=s.value.padStart(6,"0"),d=t.slice(0,2),l=t.slice(2,4),w=t.slice(4,6);return`${d}:${l}:${w}`});function I(t){s.value+=t,s.value.length>6&&(s.value=s.value.slice(-6))}function V(){s.value=s.value.slice(0,-1)}function H(){const t=s.value.padStart(6,"0"),d=parseInt(t.slice(0,2)),l=parseInt(t.slice(2,4)),w=parseInt(t.slice(4,6));u.value=d*3600+l*60+w,a.value&&clearInterval(a.value),a.value=setInterval(k,1e3),c.value=!0,v.value=!1,_.value=!1,m.value=!0,L.value=!1,g.value=!1}function M(){a.value&&(clearInterval(a.value),c.value=!1,v.value=!0)}function T(){u.value>0&&(a.value=setInterval(k,1e3),c.value=!0,v.value=!1)}function k(){if(u.value<=0){clearInterval(a.value),o.play(),_.value=!0,c.value=!1,v.value=!1,m.value=!1;return}u.value--;const t=Math.floor(u.value/3600),d=Math.floor(u.value%3600/60),l=u.value%60;s.value=`${String(t).padStart(2,"0")}${String(d).padStart(2,"0")}${String(l).padStart(2,"0")}`}function b(){clearInterval(a.value),u.value=0,s.value="",o.pause(),o.currentTime=0,c.value=!1,v.value=!1,_.value=!1,m.value=!1,L.value=!0,g.value=!0}return x(()=>{o.pause(),o.currentTime=0}),Z(()=>{o.pause(),o.currentTime=0}),$(()=>{clearInterval(a.value),o.pause(),o.currentTime=0}),(t,d)=>(i(),r("div",q,[e("div",A,S(B.value),1),g.value?(i(),r("div",D,[(i(),r(N,null,F(10,l=>e("button",{key:l,onClick:w=>I(l-1)},S(l-1),9,E)),64)),e("button",{onClick:V,class:"timer-input-delete"},j)])):h("",!0),e("div",z,[L.value?(i(),r("button",{key:0,onClick:H,class:"timer-buttons-start"},J)):h("",!0),c.value?(i(),r("button",{key:1,onClick:M,class:"timer-buttons-pause"},O)):h("",!0),v.value?(i(),r("button",{key:2,onClick:T,class:"timer-buttons-resume"},W)):h("",!0),m.value?(i(),r("button",{key:3,onClick:b,class:"timer-buttons-reset"},Y)):h("",!0),_.value?(i(),r("button",{key:4,onClick:b,class:"timer-buttons-stop"},te)):h("",!0)])]))}},oe=y(se,[["__scopeId","data-v-e3b4abca"]]);export{oe as default};
