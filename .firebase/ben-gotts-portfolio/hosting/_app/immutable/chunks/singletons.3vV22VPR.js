import{n as d,s as S}from"./scheduler.GxFUXmlG.js";const f=[];function p(e,t=d){let s;const n=new Set;function a(o){if(S(e,o)&&(e=o,s)){const i=!f.length;for(const r of n)r[1](),f.push(r,e);if(i){for(let r=0;r<f.length;r+=2)f[r][0](f[r+1]);f.length=0}}}function c(o){a(o(e))}function l(o,i=d){const r=[o,i];return n.add(r),n.size===1&&(s=t(a,c)||d),o(e),()=>{n.delete(r),n.size===0&&s&&(s(),s=null)}}return{set:a,update:c,subscribe:l}}const A=globalThis.__sveltekit_z3p7vb?.base??"";globalThis.__sveltekit_z3p7vb?.assets;const N="sveltekit:snapshot",U="sveltekit:scroll",y="sveltekit:states",O="sveltekit:pageurl",L="sveltekit:history",x="sveltekit:navigation",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},k=location.origin;function Y(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const s=document.getElementsByTagName("base");t=s.length?s[0].href:document.URL}return new URL(e,t)}function P(){return{x:pageXOffset,y:pageYOffset}}const b=new WeakSet,g={"preload-code":["","off","false","tap","hover","viewport","eager"],"preload-data":["","off","false","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function u(e,t){const s=e.getAttribute(`data-sveltekit-${t}`);return R(e,t,s),s}function R(e,t,s){s!==null&&!b.has(e)&&!g[t].includes(s)&&(console.error(`Unexpected value for ${t} — should be one of ${g[t].map(n=>JSON.stringify(n)).join(", ")}`,e),b.add(e))}const h={..._,"":_.hover};function E(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function V(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function m(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const n=e instanceof SVGAElement?e.target.baseVal:e.target,a=!s||!!n||I(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=s?.origin===k&&e.hasAttribute("download");return{url:s,external:a,target:n,download:c}}function z(e){let t=null,s=null,n=null,a=null,c=null,l=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=u(o,"preload-code")),a===null&&(a=u(o,"preload-data")),t===null&&(t=u(o,"keepfocus")),s===null&&(s=u(o,"noscroll")),c===null&&(c=u(o,"reload")),l===null&&(l=u(o,"replacestate")),o=E(o);function i(r){switch(r){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:h[n??"off"],preload_data:h[a??"off"],keepfocus:i(t),noscroll:i(s),reload:i(c),replace_state:i(l)}}function v(e){const t=p(e);let s=!0;function n(){s=!0,t.update(l=>l)}function a(l){s=!1,t.set(l)}function c(l){let o;return t.subscribe(i=>{(o===void 0||s&&i!==o)&&l(o=i)})}return{notify:n,set:a,subscribe:c}}function w(){const{set:e,subscribe:t}=p(!1);return{subscribe:t,check:async()=>!1}}function I(e,t){return e.origin!==k||!e.pathname.startsWith(t)}function G(e){e.client}const K={url:v({}),page:v({}),navigating:p(null),updated:w()};export{L as H,x as N,O as P,U as S,y as a,N as b,A as c,z as d,K as e,V as f,m as g,_ as h,I as i,G as j,k as o,Y as r,P as s};
