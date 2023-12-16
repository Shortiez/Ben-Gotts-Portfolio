import{s as ue,d as h,n as V,e as be,f as Se,u as He,g as ze,h as Oe,r as De}from"../chunks/scheduler.GxFUXmlG.js";import{S as fe,i as de,d as R,z as we,v as he,j as p,o as M,s as O,k as m,l as C,A as N,p as U,g,c as D,m as l,a as $,B as s,C as Ge,u as ye,w as xe,x as Ee,D as oe,f as se,t as ae,y as Ce}from"../chunks/index.PFj2Nw1Z.js";const Ie=!0,We=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ie},Symbol.toStringTag,{value:"Module"})),T="D:/ProgrammingLanguages/Web(Javascript)/Portfolio/Ben-Gotts-Portfolio/src/components/Header.svelte";function ke(a,e,n){const _=a.slice();return _[2]=e[n],_[4]=n,_}function re(a){let e,n,_=a[2].name+"",v,o;const i={c:function(){e=p("a"),n=p("p"),v=M(_),o=O(),this.h()},l:function(c){e=m(c,"A",{href:!0,class:!0});var b=C(e);n=m(b,"P",{});var w=C(n);v=U(w,_),w.forEach(g),o=D(b),b.forEach(g),this.h()},h:function(){h(n,T,21,16,742),l(e,"href",a[2].link),l(e,"class","duration-200 hover:text-violet-400"),h(e,T,20,12,662)},m:function(c,b){$(c,e,b),s(e,n),s(n,v),s(e,o)},p:V,d:function(c){c&&g(e)}};return R("SvelteRegisterBlock",{block:i,id:re.name,type:"each",source:"(20:8) {#each tabs as tab, index}",ctx:a}),i}function le(a){let e,n,_,v="Ben",o,i,r,c,b,w,f,k,S="Get in touch",B,P=we(a[1]),y=[];for(let u=0;u<P.length;u+=1)y[u]=re(ke(a,P,u));const H={c:function(){e=p("header"),n=p("h1"),_=p("b"),_.textContent=v,o=M(" Gotts"),i=O(),r=p("div");for(let x=0;x<y.length;x+=1)y[x].c();c=O(),b=p("a"),w=p("div"),f=O(),k=p("h4"),k.textContent=S,this.h()},l:function(x){e=m(x,"HEADER",{class:!0});var E=C(e);n=m(E,"H1",{class:!0});var t=C(n);_=m(t,"B",{class:!0,"data-svelte-h":!0}),N(_)!=="svelte-1cgurhs"&&(_.textContent=v),o=U(t," Gotts"),t.forEach(g),i=D(E),r=m(E,"DIV",{class:!0});var d=C(r);for(let G=0;G<y.length;G+=1)y[G].l(d);d.forEach(g),c=D(E),b=m(E,"A",{href:!0,class:!0});var z=C(b);w=m(z,"DIV",{class:!0}),C(w).forEach(g),f=D(z),k=m(z,"H4",{class:!0,"data-svelte-h":!0}),N(k)!=="svelte-xq8gt"&&(k.textContent=S),z.forEach(g),E.forEach(g),this.h()},h:function(){l(_,"class","font-bold poppins"),h(_,T,16,8,493),l(n,"class","font-medium"),h(n,T,15,4,459),l(r,"class","sm:flex ml-auto pr-4 items-center gap-4 hidden"),h(r,T,18,4,552),l(w,"class","absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"),h(w,T,28,8,948),l(k,"class","relative z-9"),h(k,T,29,8,1083),l(b,"href","#contact"),l(b,"class","BlueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"),h(b,T,26,4,814),l(e,"class",B="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(a[0]>0?" py-4 bg-slate-900 border-violet-900":" py-6 bg-transparent border-transparent")),h(e,T,11,0,210)},m:function(x,E){$(x,e,E),s(e,n),s(n,_),s(n,o),s(e,i),s(e,r);for(let t=0;t<y.length;t+=1)y[t]&&y[t].m(r,null);s(e,c),s(e,b),s(b,w),s(b,f),s(b,k)},p:function(x,[E]){if(E&2){P=we(x[1]);let t;for(t=0;t<P.length;t+=1){const d=ke(x,P,t);y[t]?y[t].p(d,E):(y[t]=re(d),y[t].c(),y[t].m(r,null))}for(;t<y.length;t+=1)y[t].d(1);y.length=P.length}E&1&&B!==(B="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(x[0]>0?" py-4 bg-slate-900 border-violet-900":" py-6 bg-transparent border-transparent"))&&l(e,"class",B)},i:V,o:V,d:function(x){x&&g(e),Ge(y,x)}};return R("SvelteRegisterBlock",{block:H,id:le.name,type:"component",source:"",ctx:a}),H}function Te(a,e,n){let{$$slots:_={},$$scope:v}=e;he("Header",_,[]);let{y:o}=e,i=[{name:"Projects",link:"#projects"},{name:"About Me",link:"#about"},{name:"Contact",link:"#contact"}];a.$$.on_mount.push(function(){o===void 0&&!("y"in e||a.$$.bound[a.$$.props.y])&&console.warn("<Header> was created without expected prop 'y'")});const r=["y"];return Object.keys(e).forEach(c=>{!~r.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Header> was created with unknown prop '${c}'`)}),a.$$set=c=>{"y"in c&&n(0,o=c.y)},a.$capture_state=()=>({y:o,tabs:i}),a.$inject_state=c=>{"y"in c&&n(0,o=c.y),"tabs"in c&&n(1,i=c.tabs)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[o,i]}class Pe extends fe{constructor(e){super(e),de(this,e,Te,le,ue,{y:0}),R("SvelteRegisterComponent",{component:this,tagName:"Header",options:e,id:le.name})}get y(){throw new Error("<Header>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set y(e){throw new Error("<Header>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const j="D:/ProgrammingLanguages/Web(Javascript)/Portfolio/Ben-Gotts-Portfolio/src/components/Footer.svelte";function ie(a){let e,n,_="Contact Me ↓",v,o,i,r,c="Email:",b,w,f,k,S="GitHub:",B,P,y,H,u,x,E,t,d,z="LinkedIn:",G,I,Z,L,A,q;const pe={c:function(){e=p("footer"),n=p("p"),n.textContent=_,v=O(),o=p("div"),i=p("p"),r=p("b"),r.textContent=c,b=M("gottsie11@outlook.com"),w=O(),f=p("p"),k=p("b"),k.textContent=S,B=O(),P=p("a"),y=M("Ben Gotts (Shortiez)"),H=p("sup"),u=p("span"),x=p("i"),E=O(),t=p("p"),d=p("b"),d.textContent=z,G=O(),I=p("a"),Z=M("Ben Gotts"),L=p("sup"),A=p("span"),q=p("i"),this.h()},l:function(J){e=m(J,"FOOTER",{class:!0});var W=C(e);n=m(W,"P",{id:!0,class:!0,"data-svelte-h":!0}),N(n)!=="svelte-1vuto16"&&(n.textContent=_),v=D(W),o=m(W,"DIV",{class:!0});var F=C(o);i=m(F,"P",{});var ee=C(i);r=m(ee,"B",{class:!0,"data-svelte-h":!0}),N(r)!=="svelte-yfzhsy"&&(r.textContent=c),b=U(ee,"gottsie11@outlook.com"),ee.forEach(g),w=D(F),f=m(F,"P",{});var Y=C(f);k=m(Y,"B",{class:!0,"data-svelte-h":!0}),N(k)!=="svelte-iqf7ep"&&(k.textContent=S),B=D(Y),P=m(Y,"A",{class:!0,target:!0,href:!0});var te=C(P);y=U(te,"Ben Gotts (Shortiez)"),H=m(te,"SUP",{});var me=C(H);u=m(me,"SPAN",{class:!0});var _e=C(u);x=m(_e,"I",{class:!0}),C(x).forEach(g),_e.forEach(g),me.forEach(g),te.forEach(g),Y.forEach(g),E=D(F),t=m(F,"P",{});var K=C(t);d=m(K,"B",{class:!0,"data-svelte-h":!0}),N(d)!=="svelte-1buedrc"&&(d.textContent=z),G=D(K),I=m(K,"A",{class:!0,target:!0,href:!0});var ne=C(I);Z=U(ne,"Ben Gotts"),L=m(ne,"SUP",{});var ve=C(L);A=m(ve,"SPAN",{class:!0});var ge=C(A);q=m(ge,"I",{class:!0}),C(q).forEach(g),ge.forEach(g),ve.forEach(g),ne.forEach(g),K.forEach(g),F.forEach(g),W.forEach(g),this.h()},h:function(){l(n,"id","contact"),l(n,"class","px-4 py-2 bg-white text-slate-950 font-medium"),h(n,j,1,4,156),l(r,"class","pr-2"),h(r,j,4,11,329),h(i,j,4,8,326),l(k,"class","pr-2"),h(k,j,5,11,393),l(x,"class","fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"),h(x,j,9,20,633),l(u,"class","text-xs scale-75 pl-0.5"),h(u,j,8,16,573),h(H,j,7,36,550),l(P,"class","text-violet-400"),l(P,"target","_blank"),l(P,"href","https://github.com/Shortiez"),h(P,j,6,12,434),h(f,j,5,8,390),l(d,"class","pr-2"),h(d,j,14,11,794),l(q,"class","fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"),h(q,j,18,20,1036),l(A,"class","text-xs scale-75 pl-0.5"),h(A,j,17,16,976),h(L,j,16,25,953),l(I,"class","text-violet-400"),l(I,"target","_blank"),l(I,"href","https://www.linkedin.com/in/ben-gotts/"),h(I,j,15,12,837),h(t,j,14,8,791),l(o,"class","flex flex-col gap-4 justify-center items-center"),h(o,j,3,4,255),l(e,"class","py-10 sm:py-16 md:py-20 bg-slate-950 border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"),h(e,j,0,0,0)},m:function(J,W){$(J,e,W),s(e,n),s(e,v),s(e,o),s(o,i),s(i,r),s(i,b),s(o,w),s(o,f),s(f,k),s(f,B),s(f,P),s(P,y),s(P,H),s(H,u),s(u,x),s(o,E),s(o,t),s(t,d),s(t,G),s(t,I),s(I,Z),s(I,L),s(L,A),s(A,q)},p:V,i:V,o:V,d:function(J){J&&g(e)}};return R("SvelteRegisterBlock",{block:pe,id:ie.name,type:"component",source:"",ctx:a}),pe}function Ae(a,e){let{$$slots:n={},$$scope:_}=e;he("Footer",n,[]);const v=[];return Object.keys(e).forEach(o=>{!~v.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Footer> was created with unknown prop '${o}'`)}),[]}class je extends fe{constructor(e){super(e),de(this,e,Ae,ie,ue,{}),R("SvelteRegisterComponent",{component:this,tagName:"Footer",options:e,id:ie.name})}}const Q="D:/ProgrammingLanguages/Web(Javascript)/Portfolio/Ben-Gotts-Portfolio/src/routes/+layout.svelte";function ce(a){let e=!1,n=()=>{e=!1},_,v,o,i,r,c,b,w,f,k,S,B,P,y;be(a[5]),be(a[6]),w=new Pe({props:{y:a[2]},$$inline:!0});const H=a[4].default,u=Se(H,a,a[3],null);S=new je({$$inline:!0});const x={c:function(){v=p("div"),o=p("div"),i=p("button"),r=p("i"),b=O(),ye(w.$$.fragment),f=O(),u&&u.c(),k=O(),ye(S.$$.fragment),this.h()},l:function(t){v=m(t,"DIV",{class:!0});var d=C(v);o=m(d,"DIV",{class:!0});var z=C(o);i=m(z,"BUTTON",{class:!0});var G=C(i);r=m(G,"I",{class:!0}),C(r).forEach(g),G.forEach(g),z.forEach(g),b=D(d),xe(w.$$.fragment,d),f=D(d),u&&u.l(d),d.forEach(g),k=D(t),xe(S.$$.fragment,t),this.h()},h:function(){l(r,"class","fa-solid fa-arrow-up grid place-items-center aspect-square"),h(r,Q,22,12,741),l(i,"class","ml-auto rounded-full aspect-square bg-slate-800 text-violet-400 px-3 sm:px4 hover:bg-slate-700 cursor-pointer"),h(i,Q,21,8,584),l(o,"class",c="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(a[2]>0?"opacity-full pointer-events-auto":"opacity-0 pointer-events-none")),h(o,Q,18,4,409),l(v,"class","relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"),h(v,Q,16,0,301)},m:function(t,d){$(t,v,d),s(v,o),s(o,i),s(i,r),s(v,b),Ee(w,v,null),s(v,f),u&&u.m(v,null),$(t,k,d),Ee(S,t,d),B=!0,P||(y=[oe(window,"scroll",()=>{e=!0,clearTimeout(_),_=setTimeout(n,100),a[5]()}),oe(window,"resize",a[6]),oe(i,"click",Be,!1,!1,!1,!1)],P=!0)},p:function(t,[d]){d&4&&!e&&(e=!0,clearTimeout(_),scrollTo(window.pageXOffset,t[2]),_=setTimeout(n,100)),(!B||d&4&&c!==(c="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(t[2]>0?"opacity-full pointer-events-auto":"opacity-0 pointer-events-none")))&&l(o,"class",c);const z={};d&4&&(z.y=t[2]),w.$set(z),u&&u.p&&(!B||d&8)&&He(u,H,t,t[3],B?Oe(H,t[3],d,null):ze(t[3]),null)},i:function(t){B||(se(w.$$.fragment,t),se(u,t),se(S.$$.fragment,t),B=!0)},o:function(t){ae(w.$$.fragment,t),ae(u,t),ae(S.$$.fragment,t),B=!1},d:function(t){t&&(g(v),g(k)),Ce(w),u&&u.d(t),Ce(S,t),P=!1,De(y)}};return R("SvelteRegisterBlock",{block:x,id:ce.name,type:"component",source:"",ctx:a}),x}function Be(){document.body.scrollIntoView()}function Re(a,e,n){let{$$slots:_={},$$scope:v}=e;he("Layout",_,["default"]);let o=0,i=0,r;const c=[];Object.keys(e).forEach(f=>{!~c.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&console.warn(`<Layout> was created with unknown prop '${f}'`)});function b(){n(2,r=window.pageYOffset)}function w(){n(0,o=window.innerHeight),n(1,i=window.innerWidth)}return a.$$set=f=>{"$$scope"in f&&n(3,v=f.$$scope)},a.$capture_state=()=>({Header:Pe,Footer:je,innerHeight:o,innerWidth:i,y:r,goTop:Be}),a.$inject_state=f=>{"innerHeight"in f&&n(0,o=f.innerHeight),"innerWidth"in f&&n(1,i=f.innerWidth),"y"in f&&n(2,r=f.y)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[o,i,r,v,_,b,w]}class Fe extends fe{constructor(e){super(e),de(this,e,Re,ce,ue,{}),R("SvelteRegisterComponent",{component:this,tagName:"Layout",options:e,id:ce.name})}}export{Fe as component,We as universal};
