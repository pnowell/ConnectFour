var Jg=Object.defineProperty;var e0=(e,t,r)=>t in e?Jg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var oe=(e,t,r)=>e0(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();var en={};(function e(t,r,i,a){var n=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",u=(function(){if(!t.OffscreenCanvas)return!1;try{var O=new OffscreenCanvas(1,1),T=O.getContext("2d");T.fillRect(0,0,1,1);var P=O.transferToImageBitmap();T.createPattern(P,"no-repeat")}catch{return!1}return!0})();function l(){}function d(O){var T=r.exports.Promise,P=T!==void 0?T:t.Promise;return typeof P=="function"?new P(O):(O(l,l),null)}var c=(function(O,T){return{transform:function(P){if(O)return P;if(T.has(P))return T.get(P);var q=new OffscreenCanvas(P.width,P.height),L=q.getContext("2d");return L.drawImage(P,0,0),T.set(P,q),q},clear:function(){T.clear()}}})(u,new Map),h=(function(){var O=Math.floor(16.666666666666668),T,P,q={},L=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function(J){var ue=Math.random();return q[ue]=requestAnimationFrame(function ee(se){L===se||L+O-1<se?(L=se,delete q[ue],J()):q[ue]=requestAnimationFrame(ee)}),ue},P=function(J){q[J]&&cancelAnimationFrame(q[J])}):(T=function(J){return setTimeout(J,O)},P=function(J){return clearTimeout(J)}),{frame:T,cancel:P}})(),g=(function(){var O,T,P={};function q(L){function J(ue,ee){L.postMessage({options:ue||{},callback:ee})}L.init=function(ee){var se=ee.transferControlToOffscreen();L.postMessage({canvas:se},[se])},L.fire=function(ee,se,he){if(T)return J(ee,null),T;var be=Math.random().toString(36).slice(2);return T=d(function(me){function Te(pe){pe.data.callback===be&&(delete P[be],L.removeEventListener("message",Te),T=null,c.clear(),he(),me())}L.addEventListener("message",Te),J(ee,be),P[be]=Te.bind(null,{data:{callback:be}})}),T},L.reset=function(){L.postMessage({reset:!0});for(var ee in P)P[ee](),delete P[ee]}}return function(){if(O)return O;if(!i&&n){var L=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{O=new Worker(URL.createObjectURL(new Blob([L])))}catch(J){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",J),null}q(O)}return O}})(),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(O,T){return T?T(O):O}function _(O){return O!=null}function S(O,T,P){return y(O&&_(O[T])?O[T]:b[T],P)}function v(O){return O<0?0:Math.floor(O)}function w(O,T){return Math.floor(Math.random()*(T-O))+O}function I(O){return parseInt(O,16)}function k(O){return O.map(C)}function C(O){var T=String(O).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:I(T.substring(0,2)),g:I(T.substring(2,4)),b:I(T.substring(4,6))}}function z(O){var T=S(O,"origin",Object);return T.x=S(T,"x",Number),T.y=S(T,"y",Number),T}function B(O){O.width=document.documentElement.clientWidth,O.height=document.documentElement.clientHeight}function $(O){var T=O.getBoundingClientRect();O.width=T.width,O.height=T.height}function N(O){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=O,T}function V(O,T,P,q,L,J,ue,ee,se){O.save(),O.translate(T,P),O.rotate(J),O.scale(q,L),O.arc(0,0,1,ue,ee,se),O.restore()}function K(O){var T=O.angle*(Math.PI/180),P=O.spread*(Math.PI/180);return{x:O.x,y:O.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:O.startVelocity*.5+Math.random()*O.startVelocity,angle2D:-T+(.5*P-Math.random()*P),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:O.color,shape:O.shape,tick:0,totalTicks:O.ticks,decay:O.decay,drift:O.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:O.gravity*3,ovalScalar:.6,scalar:O.scalar,flat:O.flat}}function j(O,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var P=T.tick++/T.totalTicks,q=T.x+T.random*T.tiltCos,L=T.y+T.random*T.tiltSin,J=T.wobbleX+T.random*T.tiltCos,ue=T.wobbleY+T.random*T.tiltSin;if(O.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-P)+")",O.beginPath(),s&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))O.fill(ie(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs(J-q)*.1,Math.abs(ue-L)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var ee=Math.PI/10*T.wobble,se=Math.abs(J-q)*.1,he=Math.abs(ue-L)*.1,be=T.shape.bitmap.width*T.scalar,me=T.shape.bitmap.height*T.scalar,Te=new DOMMatrix([Math.cos(ee)*se,Math.sin(ee)*se,-Math.sin(ee)*he,Math.cos(ee)*he,T.x,T.y]);Te.multiplySelf(new DOMMatrix(T.shape.matrix));var pe=O.createPattern(c.transform(T.shape.bitmap),"no-repeat");pe.setTransform(Te),O.globalAlpha=1-P,O.fillStyle=pe,O.fillRect(T.x-be/2,T.y-me/2,be,me),O.globalAlpha=1}else if(T.shape==="circle")O.ellipse?O.ellipse(T.x,T.y,Math.abs(J-q)*T.ovalScalar,Math.abs(ue-L)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):V(O,T.x,T.y,Math.abs(J-q)*T.ovalScalar,Math.abs(ue-L)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var H=Math.PI/2*3,Ee=4*T.scalar,qe=8*T.scalar,Le=T.x,De=T.y,We=5,Fe=Math.PI/We;We--;)Le=T.x+Math.cos(H)*qe,De=T.y+Math.sin(H)*qe,O.lineTo(Le,De),H+=Fe,Le=T.x+Math.cos(H)*Ee,De=T.y+Math.sin(H)*Ee,O.lineTo(Le,De),H+=Fe;else O.moveTo(Math.floor(T.x),Math.floor(T.y)),O.lineTo(Math.floor(T.wobbleX),Math.floor(L)),O.lineTo(Math.floor(J),Math.floor(ue)),O.lineTo(Math.floor(q),Math.floor(T.wobbleY));return O.closePath(),O.fill(),T.tick<T.totalTicks}function X(O,T,P,q,L){var J=T.slice(),ue=O.getContext("2d"),ee,se,he=d(function(be){function me(){ee=se=null,ue.clearRect(0,0,q.width,q.height),c.clear(),L(),be()}function Te(){i&&!(q.width===a.width&&q.height===a.height)&&(q.width=O.width=a.width,q.height=O.height=a.height),!q.width&&!q.height&&(P(O),q.width=O.width,q.height=O.height),ue.clearRect(0,0,q.width,q.height),J=J.filter(function(pe){return j(ue,pe)}),J.length?ee=h.frame(Te):me()}ee=h.frame(Te),se=me});return{addFettis:function(be){return J=J.concat(be),he},canvas:O,promise:he,reset:function(){ee&&h.cancel(ee),se&&se()}}}function R(O,T){var P=!O,q=!!S(T||{},"resize"),L=!1,J=S(T,"disableForReducedMotion",Boolean),ue=n&&!!S(T||{},"useWorker"),ee=ue?g():null,se=P?B:$,he=O&&ee?!!O.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,me;function Te(H,Ee,qe){for(var Le=S(H,"particleCount",v),De=S(H,"angle",Number),We=S(H,"spread",Number),Fe=S(H,"startVelocity",Number),ft=S(H,"decay",Number),Ir=S(H,"gravity",Number),kr=S(H,"drift",Number),ar=S(H,"colors",k),Er=S(H,"ticks",Number),Je=S(H,"shapes"),ci=S(H,"scalar"),Xt=!!S(H,"flat"),Bt=z(H),Cr=Le,lt=[],hi=O.width*Bt.x,zr=O.height*Bt.y;Cr--;)lt.push(K({x:hi,y:zr,angle:De,spread:We,startVelocity:Fe,color:ar[Cr%ar.length],shape:Je[w(0,Je.length)],ticks:Er,decay:ft,gravity:Ir,drift:kr,scalar:ci,flat:Xt}));return me?me.addFettis(lt):(me=X(O,lt,se,Ee,qe),me.promise)}function pe(H){var Ee=J||S(H,"disableForReducedMotion",Boolean),qe=S(H,"zIndex",Number);if(Ee&&be)return d(function(Fe){Fe()});P&&me?O=me.canvas:P&&!O&&(O=N(qe),document.body.appendChild(O)),q&&!he&&se(O);var Le={width:O.width,height:O.height};ee&&!he&&ee.init(O),he=!0,ee&&(O.__confetti_initialized=!0);function De(){if(ee){var Fe={getBoundingClientRect:function(){if(!P)return O.getBoundingClientRect()}};se(Fe),ee.postMessage({resize:{width:Fe.width,height:Fe.height}});return}Le.width=Le.height=null}function We(){me=null,q&&(L=!1,t.removeEventListener("resize",De)),P&&O&&(document.body.contains(O)&&document.body.removeChild(O),O=null,he=!1)}return q&&!L&&(L=!0,t.addEventListener("resize",De,!1)),ee?ee.fire(H,Le,We):Te(H,Le,We)}return pe.reset=function(){ee&&ee.reset(),me&&me.reset()},pe}var Y;function Q(){return Y||(Y=R(null,{useWorker:!0,resize:!0})),Y}function ie(O,T,P,q,L,J,ue){var ee=new Path2D(O),se=new Path2D;se.addPath(ee,new DOMMatrix(T));var he=new Path2D;return he.addPath(se,new DOMMatrix([Math.cos(ue)*L,Math.sin(ue)*L,-Math.sin(ue)*J,Math.cos(ue)*J,P,q])),he}function _e(O){if(!s)throw new Error("path confetti are not supported in this browser");var T,P;typeof O=="string"?T=O:(T=O.path,P=O.matrix);var q=new Path2D(T),L=document.createElement("canvas"),J=L.getContext("2d");if(!P){for(var ue=1e3,ee=ue,se=ue,he=0,be=0,me,Te,pe=0;pe<ue;pe+=2)for(var H=0;H<ue;H+=2)J.isPointInPath(q,pe,H,"nonzero")&&(ee=Math.min(ee,pe),se=Math.min(se,H),he=Math.max(he,pe),be=Math.max(be,H));me=he-ee,Te=be-se;var Ee=10,qe=Math.min(Ee/me,Ee/Te);P=[qe,0,0,qe,-Math.round(me/2+ee)*qe,-Math.round(Te/2+se)*qe]}return{type:"path",path:T,matrix:P}}function W(O){var T,P=1,q="#000000",L='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof O=="string"?T=O:(T=O.text,P="scalar"in O?O.scalar:P,L="fontFamily"in O?O.fontFamily:L,q="color"in O?O.color:q);var J=10*P,ue=""+J+"px "+L,ee=new OffscreenCanvas(J,J),se=ee.getContext("2d");se.font=ue;var he=se.measureText(T),be=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),me=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),Te=2,pe=he.actualBoundingBoxLeft+Te,H=he.actualBoundingBoxAscent+Te;be+=Te+Te,me+=Te+Te,ee=new OffscreenCanvas(be,me),se=ee.getContext("2d"),se.font=ue,se.fillStyle=q,se.fillText(T,pe,H);var Ee=1/P;return{type:"bitmap",bitmap:ee.transferToImageBitmap(),matrix:[Ee,0,0,Ee,-be*Ee/2,-me*Ee/2]}}r.exports=function(){return Q().apply(this,arguments)},r.exports.reset=function(){Q().reset()},r.exports.create=R,r.exports.shapeFromPath=_e,r.exports.shapeFromText=W})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),en,!1);const t0=en.exports;en.exports.create;const Ke=6,Ie=7,Qt={grandmaster:{name:"Grandmaster",description:"Near-optimal unexploitable play with slight variation (τ = 0.02)",temperature:.02,blunderThreshold:.05},challenging:{name:"Challenging",description:"Strong tactical play, avoids direct blunders (τ = 0.15)",temperature:.15,blunderThreshold:.22},casual:{name:"Casual",description:"More exploratory play with occasional tactical oversights (τ = 0.35)",temperature:.35,blunderThreshold:.45}};function wo(){return Array.from({length:Ke},()=>Array(Ie).fill(0))}function Ni(e,t){return t>=0&&t<Ie&&e[0][t]===0}function Pa(e,t){if(t<0||t>=Ie||e[0][t]!==0)return-1;for(let r=Ke-1;r>=0;r--)if(e[r][t]===0)return r;return-1}function r0(e,t,r){const i=Pa(e,t);return i===-1?null:(e[i][t]=r,{row:i,col:t})}function i0(e){for(let t=0;t<Ie;t++)if(e[0][t]===0)return!1;return!0}function a0(e){for(let t=0;t<Ke;t++)for(let r=0;r<=Ie-4;r++){const i=e[t][r];if(i!==0&&i===e[t][r+1]&&i===e[t][r+2]&&i===e[t][r+3])return{winner:i,winningCells:[[t,r],[t,r+1],[t,r+2],[t,r+3]]}}for(let t=0;t<Ie;t++)for(let r=0;r<=Ke-4;r++){const i=e[r][t];if(i!==0&&i===e[r+1][t]&&i===e[r+2][t]&&i===e[r+3][t])return{winner:i,winningCells:[[r,t],[r+1,t],[r+2,t],[r+3,t]]}}for(let t=0;t<=Ke-4;t++)for(let r=0;r<=Ie-4;r++){const i=e[t][r];if(i!==0&&i===e[t+1][r+1]&&i===e[t+2][r+2]&&i===e[t+3][r+3])return{winner:i,winningCells:[[t,r],[t+1,r+1],[t+2,r+2],[t+3,r+3]]}}for(let t=3;t<Ke;t++)for(let r=0;r<=Ie-4;r++){const i=e[t][r];if(i!==0&&i===e[t-1][r+1]&&i===e[t-2][r+2]&&i===e[t-3][r+3])return{winner:i,winningCells:[[t,r],[t-1,r+1],[t-2,r+2],[t-3,r+3]]}}return null}/*!
 * ONNX Runtime Web v1.29.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var tn=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,s0=Object.getOwnPropertyNames,o0=Object.prototype.hasOwnProperty,u0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),G=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}},ir=(e,t)=>{for(var r in t)tn(e,r,{get:t[r],enumerable:!0})},l0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of s0(t))!o0.call(e,a)&&a!==r&&tn(e,a,{get:()=>t[a],enumerable:!(i=n0(t,a))||i.enumerable});return e},xr=e=>l0(tn({},"__esModule",{value:!0}),e),ur,St,Wt,_o,op,up=G(()=>{"use strict";ur=new Map,St=[],Wt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=ur.get(e);if(i===void 0)ur.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=St.indexOf(e);a!==-1&&St.splice(a,1);for(let n=0;n<St.length;n++)if(ur.get(St[n]).priority<=r){St.splice(n,0,e);return}St.push(e)}return}throw new TypeError("not a valid backend")},_o=async e=>{let t=ur.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},op=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?St:r,a,n=[],s=new Set;for(let l of i){let d=await _o(l);typeof d=="string"?n.push({name:l,err:d}):(a||(a=d),a===d&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),d0=G(()=>{"use strict";up()}),lp,p0=G(()=>{"use strict";lp="1.29.0"}),Di,Pe,dp=G(()=>{"use strict";p0(),Di="warning",Pe={wasm:{},webgl:{},webgpu:{},versions:{common:lp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Di=e}},get logLevel(){return Di}},Object.defineProperty(Pe,"logLevel",{enumerable:!0})}),Ae,c0=G(()=>{"use strict";dp(),Ae=Pe}),pp,cp,h0=G(()=>{"use strict";pp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=n*a,h=0,g=c,b=c*2,y=-1;s==="RGBA"?(h=0,g=c,b=c*2,y=c*3):s==="RGB"?(h=0,g=c,b=c*2):s==="RBG"&&(h=0,b=c,g=c*2);for(let _=0;_<n;_++)for(let S=0;S<a;S++){let v=(e.data[h++]-d[0])*l[0],w=(e.data[g++]-d[1])*l[1],I=(e.data[b++]-d[2])*l[2],k=y===-1?255:(e.data[y++]-d[3])*l[3];i.fillStyle="rgba("+v+","+w+","+I+","+k+")",i.fillRect(S,_,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},cp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,b=0,y=1,_=2,S=3,v=0,w=h,I=h*2,k=-1;u==="RGBA"?(v=0,w=h,I=h*2,k=h*3):u==="RGB"?(v=0,w=h,I=h*2):u==="RBG"&&(v=0,I=h,w=h*2),i=r.createImageData(a,n);for(let C=0;C<n*a;b+=g,y+=g,_+=g,S+=g,C++)i.data[b]=(e.data[v++]-c[0])*d[0],i.data[y]=(e.data[w++]-c[1])*d[1],i.data[_]=(e.data[I++]-c[2])*d[2],i.data[S]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),qr,hp,fp,mp,gp,yp,f0=G(()=>{"use strict";rn(),qr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,g=0,b=1,y=2,_=3,S=0,v=d,w=d*2,I=-1;u==="RGB"&&(h=3,g=0,b=1,y=2,_=-1),l==="RGBA"?I=d*3:l==="RBG"?(S=0,w=d,v=d*2):l==="BGR"&&(w=0,v=d,S=d*2);for(let k=0;k<d;k++,g+=h,y+=h,b+=h,_+=h)c[S++]=(e[g]+s[0])/n[0],c[v++]=(e[b]+s[1])/n[1],c[w++]=(e[y]+s[2])/n[2],I!==-1&&_!==-1&&(c[I++]=(e[_]+s[3])/n[3]);return l==="RGBA"?new je("float32",c,[1,4,r,i]):new je("float32",c,[1,3,r,i])},hp=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,b=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,b=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=b}else u.tensorFormat="RGBA",u.height=g,u.width=b;h.drawImage(e,0,0),s=h.getImageData(0,0,b,g).data}else throw new Error("Can not access image data")}else if(i){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=h,t!==void 0){let g=l();g.width=h,g.height=c;let b=d(g);if(b!=null)b.putImageData(e,0,0),s=b.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,b=e.width;return h.drawImage(e,0,0,b,g),s=h.getImageData(0,0,b,g).data,u.height=g,u.width=b,qr(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,h)=>{let g=l(),b=d(g);if(!e||!b)return h();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,b.drawImage(y,0,0,g.width,g.height);let _=b.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,c(qr(_.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return qr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},fp=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new je({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},mp=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new je({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},gp=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new je({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},yp=(e,t,r)=>new je({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),qt,wr,Pi,bp,m0=G(()=>{"use strict";qt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),wr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Pi=!1,bp=()=>{if(!Pi){Pi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(qt.set("int64",BigInt64Array),wr.set(BigInt64Array,"int64")),t&&(qt.set("uint64",BigUint64Array),wr.set(BigUint64Array,"uint64")),i?(qt.set("float16",r),wr.set(r,"float16")):qt.set("float16",Uint16Array)}}}),wp,_p,g0=G(()=>{"use strict";rn(),wp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},_p=(e,t)=>{switch(e.location){case"cpu":return new je(e.type,e.data,t);case"cpu-pinned":return new je({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new je({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new je({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new je({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),je,rn=G(()=>{"use strict";h0(),f0(),m0(),g0(),je=class{constructor(e,t,r){bp();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=qt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=qt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=wr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=wp(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return hp(e,t)}static fromTexture(e,t){return fp(e,t)}static fromGpuBuffer(e,t){return mp(e,t)}static fromMLTensor(e,t){return gp(e,t)}static fromPinnedBuffer(e,t,r){return yp(e,t,r)}toDataURL(e){return pp(this,e)}toImageData(e){return cp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return _p(this,e)}}}),ot,vp=G(()=>{"use strict";rn(),ot=je}),Sr,Ui,ut,Ye,Ct,zt,$p=G(()=>{"use strict";dp(),Sr=(e,t)=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ui=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Sr("CPU",s);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},ut=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||Ui("BEGIN",e)},Ye=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||Ui("END",e)},Ct=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||console.time(`ORT::${e}`)},zt=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||console.timeEnd(`ORT::${e}`)}}),xp,y0=G(()=>{"use strict";up(),vp(),$p(),xp=class Sp{constructor(t){this.handler=t}async run(t,r,i){ut(),Ct("InferenceSession.run");let a={},n={};if(typeof t!="object"||t===null||t instanceof ot||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof ot)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof ot)&&(d=!0,s=!1,a[h]=g)}if(d){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let u=await this.handler.run(t,a,n),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof ot?l[d]=c:l[d]=new ot(c.type,c.data,c.dims)}return zt("InferenceSession.run"),Ye(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){ut(),Ct("InferenceSession.create");let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(g=t.byteLength-h,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await op(s),d=await u.createInferenceSessionHandler(n,l);return zt("InferenceSession.create"),Ye(),new Sp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),an,b0=G(()=>{"use strict";y0(),an=xp}),w0=G(()=>{"use strict"}),_0=G(()=>{"use strict"}),v0=G(()=>{"use strict"}),$0=G(()=>{"use strict"}),Tp={};ir(Tp,{InferenceSession:()=>an,TRACE:()=>Sr,TRACE_EVENT_BEGIN:()=>Ct,TRACE_EVENT_END:()=>zt,TRACE_FUNC_BEGIN:()=>ut,TRACE_FUNC_END:()=>Ye,Tensor:()=>ot,env:()=>Ae,registerBackend:()=>Wt});var Qe=G(()=>{"use strict";d0(),c0(),b0(),vp(),w0(),_0(),$p(),v0(),$0()}),nn=G(()=>{"use strict"}),Ip={};ir(Ip,{default:()=>kp});var Li,qi,kp,x0=G(()=>{"use strict";var e;Nf(),Kt(),sn(),Li="ort-wasm-proxy-worker",qi=((e=globalThis.self)==null?void 0:e.name)===Li,qi&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":on(i.wasm).then(()=>{Sn(i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:n}=i;Tn(n,a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:a}=i,n=di(a);postMessage({type:r,out:n});break}case"create":{let{model:a,options:n}=i;In(a,n).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":kn(i),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:n,inputs:s,outputIndices:u,options:l}=i;En(a,n,s,u,new Array(u.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},zn([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Cn(i),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),kp=qi?null:t=>new Worker(t??He,{type:"module",name:Li})}),Ep={};ir(Ep,{default:()=>Cp});async function vo(e={}){var yo,bo;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,a=i&&((yo=self.name)==null?void 0:yo.startsWith("em-pthread"));t.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Yc||(t.Yc=new Map)).set(o,p)},t.unmountExternalData=()=>{delete t.Yc,delete t.Zd,delete t.Yd,delete t.$d},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let n=o=>async(...p)=>{var m;try{if(t.Xc)throw Error("Session already started");let f=t.Xc={Kd:p[0],errors:[]},x=await o(...p);if(t.Xc!==f)throw Error("Session mismatch");(m=t.dd)==null||m.flush();let E=f.errors;if(0<E.length){let A=await Promise.all(E);if(A=A.filter(D=>D),0<A.length)throw Error(A.join(`
`))}return x}finally{t.Xc=null}};t.jsepInit=(o,p)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let m=t.dd;t.jsepRegisterBuffer=(f,x,E,A)=>m.registerBuffer(f,x,E,A),t.jsepGetBuffer=f=>m.getBuffer(f),t.jsepCreateDownloader=(f,x,E)=>m.createDownloader(f,x,E),t.jsepOnCreateSession=f=>{m.onCreateSession(f)},t.jsepOnReleaseSession=f=>{m.onReleaseSession(f)},t.jsepOnRunStart=f=>m.onRunStart(f),t.Id=(f,x)=>{m.upload(f,x)}}else if(o==="webnn"){let m=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=f=>m.onRunStart(f),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=f=>{m.onReleaseSession(f)},t.webnnCreateMLTensorDownloader=(f,x)=>m.createMLTensorDownloader(f,x),t.webnnRegisterMLTensor=(f,x,E,A)=>m.registerMLTensor(f,x,E,A),t.webnnCreateMLContext=f=>m.createMLContext(f),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let o=p=>(...m)=>{let f=pt;return m=p(...m),pt!=f?new Promise((x,E)=>{xi={resolve:x,reject:E}}):m};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=o(t[p])})(),n!==void 0&&(t._OrtRun=n(t._OrtRun),t._OrtRunWithBinding=n(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var u,l,d=(o,p)=>{throw p},c=import.meta.url,h="";if(r||i){try{h=new URL(".",c).href}catch{}i&&(l=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),u=async o=>{if(B(o))return new Promise((m,f)=>{var x=new XMLHttpRequest;x.open("GET",o,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?m(x.response):f(x.status)},x.onerror=f,x.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var g,b,y,_,S,v,w=console.log.bind(console),I=console.error.bind(console),k=w,C=I,z=!1,B=o=>o.startsWith("file://");function $(){Je.buffer!=V.buffer&&P()}if(a){let o=function(p){try{var m=p.data,f=m.Sc;if(f==="load"){let x=[];self.onmessage=E=>x.push(E),v=()=>{postMessage({Sc:"loaded"});for(let E of x)o(E);self.onmessage=o};for(let E of m.xd)t[E]&&!t[E].proxy||(t[E]=(...A)=>{postMessage({Sc:"callHandler",vd:E,args:A})},E=="print"&&(k=t[E]),E=="printErr"&&(C=t[E]));Je=m.Od,P(),b=m.Pd,ue(),Lr()}else if(f==="run"){(function(x){var E=($(),Y)[x+52>>>2>>>0];x=($(),Y)[x+56>>>2>>>0],Is(E,E-x),fe(E)})(m.Rc),Ei(m.Rc,0,0,1,0,0),kr(),_i(m.Rc),N||(_s(),N=!0);try{ci(m.Md,m.bd)}catch(x){if(x!="unwind")throw x}}else m.target!=="setimmediate"&&(f==="checkMailbox"?N&&Br():f&&(C(`worker: received unknown command ${f}`),C(m)))}catch(x){throw vs(),x}};var N=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}var V,K,j,X,R,Y,Q,ie,_e,W,O,T=!1;function P(){var o=Je.buffer;t.HEAP8=V=new Int8Array(o),j=new Int16Array(o),t.HEAPU8=K=new Uint8Array(o),X=new Uint16Array(o),t.HEAP32=R=new Int32Array(o),t.HEAPU32=Y=new Uint32Array(o),Q=new Float32Array(o),ie=new Float64Array(o),_e=new BigInt64Array(o),W=new BigUint64Array(o)}function q(){T=!0,a?v():gt.sb()}function L(o){throw C(o="Aborted("+o+")"),z=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S==null||S(o),o}function J(){return{a:{ma:fg,hb:hg,g:Cr,J:hi,f:Kf,o:Zf,i:Xf,$:Yf,b:Qf,S:Jf,Ia:Bn,n:em,aa:Dn,Ya:Pn,Ea:Un,Ga:Ln,Za:qn,Wa:Vn,Pa:Gn,Va:Wn,ka:Fn,Fa:Hn,Ca:jn,Xa:Kn,Da:Zn,cb:tm,fa:rm,xa:im,va:nm,ea:om,N:um,H:lm,wa:dm,_:ym,ya:bm,Sa:wm,Aa:vm,Ja:$m,ta:xm,ga:Sm,Ra:_i,$a:Tm,Q:Cm,r:Mm,c:bi,ib:Rm,y:Nm,M:Dm,D:Pm,l:Um,s:is,jb:Lm,I:qm,R:Vm,j:Gm,u:Wm,q:Fm,k:Hm,Ma:jm,Na:Km,Oa:Zm,Ka:os,La:us,ua:ls,eb:Ym,bb:Jm,v:eg,ba:tg,ha:rg,ab:Qm,V:ig,_a:ag,Ba:ng,F:Xm,T:sg,la:Pr,za:ug,gb:og,fb:lg,Ta:hs,Ua:fs,Ha:Le,U:ms,ja:gs,Qa:ys,ia:bs,lb:Xg,na:Fg,mb:Zg,oa:Wg,G:Mg,e:bg,t:gg,w:mg,B:Eg,nb:qg,Z:Lg,x:vg,pa:Vg,X:Hg,ca:Ug,ob:Pg,pb:Dg,O:Cg,qa:Ng,qb:Rg,L:Og,Y:Gg,d:yg,A:_g,m:wg,kb:Yg,p:xg,z:Sg,C:$g,E:Tg,K:zg,ra:Bg,P:jg,da:Ag,W:Kg,rb:kg,sa:Ig,h:pg,a:Je,db:Ee}}}async function ue(){function o(f,x){var E=gt=f.exports;f={};for(let[A,D]of Object.entries(E))typeof D=="function"?(E=Im(D),f[A]=E):f[A]=D;return gt=f,gt=(function(){var A=gt,D=Z=>ce=>Z(ce)>>>0,F=Z=>()=>Z()>>>0;return(A=Object.assign({},A)).tb=D(A.tb),A.Xb=F(A.Xb),A.Zb=D(A.Zb),A.lc=D(A.lc),A.mc=F(A.mc),A.qc=D(A.qc),A})(),Fe.push(gt._b),ws=(f=gt).tb,_s=f.ub,t._OrtInit=f.vb,t._OrtGetLastError=f.wb,t._OrtCreateSessionOptions=f.xb,t._OrtAppendExecutionProvider=f.yb,t._OrtAddFreeDimensionOverride=f.zb,t._OrtAddSessionConfigEntry=f.Ab,t._OrtReleaseSessionOptions=f.Bb,t._OrtCreateSession=f.Cb,t._OrtReleaseSession=f.Db,t._OrtGetInputOutputCount=f.Eb,t._OrtGetInputOutputMetadata=f.Fb,t._OrtFree=f.Gb,t._OrtCreateTensor=f.Hb,t._OrtGetTensorData=f.Ib,t._OrtReleaseTensor=f.Jb,t._OrtCreateRunOptions=f.Kb,t._OrtAddRunConfigEntry=f.Lb,t._OrtReleaseRunOptions=f.Mb,t._OrtCreateBinding=f.Nb,t._OrtBindInput=f.Ob,t._OrtBindOutput=f.Pb,t._OrtClearBoundOutputs=f.Qb,t._OrtReleaseBinding=f.Rb,t._OrtRunWithBinding=f.Sb,t._OrtRun=f.Tb,t._OrtEndProfiling=f.Ub,t._JsepOutput=f.Vb,t._JsepGetNodeName=f.Wb,Ur=f.Xb,ct=t._free=f.Yb,sr=t._malloc=f.Zb,Ei=f.ac,vs=f.bc,$s=f.cc,xs=f.dc,Ci=f.ec,Ss=f.fc,Ts=f.gc,ye=f.hc,or=f.ic,Is=f.jc,fe=f.kc,zi=f.lc,ge=f.mc,ks=f.nc,Ai=f.oc,Es=f.pc,Cs=f.qc,zs=f.rc,Oi=f.sc,As=f.tc,Os=f.uc,Bs=f.vc,Ms=f.wc,Rs=f.xc,Ns=f.yc,Ds=f.zc,Ps=f.Ac,Us=f.Bc,Ls=f.Cc,qs=f.Dc,Vs=f.Ec,Gs=f.Fc,Ws=f.Gc,Fs=f.Hc,Hs=f.Ic,js=f.Jc,Ks=f.Kc,Zs=f.Lc,Xs=f.Mc,Ys=f.Nc,Qs=f.Pc,Js=f.Qc,eo=f.$c,to=f.ad,ro=f.fd,io=f.kd,ao=f.ld,no=f.md,so=f.nd,oo=f.od,uo=f.pd,lo=f.qd,po=f.rd,co=f.wd,ho=f.Ud,fo=f.Vd,mo=f.Wd,go=f.Xd,b=x,gt}var p,m=J();return t.instantiateWasm?new Promise(f=>{t.instantiateWasm(m,(x,E)=>{f(o(x,E))})}):a?o(new WebAssembly.Instance(b,J()),b):(O??(O=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-D-icqfN-.wasm",import.meta.url).href,import.meta.url).href),p=await(async function(f){var x=O;if(!g&&!B(x))try{var E=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,f)}catch(A){C(`wasm streaming compile failed: ${A}`),C("falling back to ArrayBuffer instantiation")}return(async function(A,D){try{var F=await(async function(Z){if(!g)try{var ce=await u(Z);return new Uint8Array(ce)}catch{}if(Z==O&&g)Z=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";Z=l(Z)}return Z})(A);return await WebAssembly.instantiate(F,D)}catch(Z){C(`failed to asynchronously prepare wasm: ${Z}`),L(Z)}})(x,f)})(m),o(p.instance,p.module))}class ee{constructor(p){oe(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var se=o=>{o.terminate(),o.onmessage=()=>{}},he=[],be=0,me=null,Te=o=>{De.length==0&&(Er(),ar(De[0]));var p=De.pop();if(!p)return 6;We.push(p),ft[o.Rc]=p,p.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return p.postMessage(m,o.jd),0},pe=0,H=(o,p,...m)=>{var f,x=16*m.length,E=ge(),A=zi(x),D=A>>>3;for(f of m)typeof f=="bigint"?(($(),_e)[D++>>>0]=1n,($(),_e)[D++>>>0]=f):(($(),_e)[D++>>>0]=0n,($(),ie)[D++>>>0]=f);return o=$s(o,0,x,A,p),fe(E),o};function Ee(o){if(a)return H(0,1,o);if(y=o,!(0<pe)){for(var p of We)se(p);for(p of De)se(p);De=[],We=[],ft={},z=!0}d(0,new ee(o))}function qe(o){if(a)return H(1,0,o);Le(o)}var Le=o=>{if(y=o,a)throw qe(o),"unwind";Ee(o)},De=[],We=[],Fe=[],ft={},Ir=o=>{var p=o.Rc;delete ft[p],De.push(o),We.splice(We.indexOf(o),1),o.Rc=0,xs(p)};function kr(){Fe.forEach(o=>o())}var ar=o=>new Promise(p=>{o.onmessage=x=>{var E=x.data;if(x=E.Sc,E.Zc&&E.Zc!=Ur()){var A=ft[E.Zc];A?A.postMessage(E,E.jd):C(`Internal error! Worker sent a message "${x}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else x==="checkMailbox"?Br():x==="spawnThread"?Te(E):x==="cleanupThread"?Or(()=>{Ir(ft[E.Nd])}):x==="loaded"?(o.loaded=!0,p(o)):E.target==="setimmediate"?o.postMessage(E):x==="uncaughtException"?o.onerror(E.error):x==="callHandler"?t[E.vd](...E.args):x&&C(`worker sent an unknown command ${x}`)},o.onerror=x=>{throw C(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var m,f=[];for(m of[])t.propertyIsEnumerable(m)&&f.push(m);o.postMessage({Sc:"load",xd:f,Od:Je,Pd:b})});function Er(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});De.push(o)}var Je,ci=(o,p)=>{pe=0,o=Oi(o,p),0<pe?y=o:Ci(o)},Xt=[],Bt=0;function Cr(o){var p=new fi(o>>>=0);return($(),V)[p.Tc+12>>>0]==0&&(zr(p,!0),Bt--),An(p,!1),Xt.push(p),Cs(o)}var lt=0,hi=()=>{ye(0,0);var o=Xt.pop();ks(o.cd),lt=0};function zr(o,p){p=p?1:0,($(),V)[o.Tc+12>>>0]=p}function An(o,p){p=p?1:0,($(),V)[o.Tc+13>>>0]=p}class fi{constructor(p){this.cd=p,this.Tc=p-24}}var mi=o=>{var p=lt;if(!p)return or(0),0;var m=new fi(p);($(),Y)[m.Tc+16>>>2>>>0]=p;var f=($(),Y)[m.Tc+4>>>2>>>0];if(!f)return or(0),p;for(var x of o){if(x===0||x===f)break;if(Es(x,f,m.Tc+16))return or(x),p}return or(f),p};function Kf(){return mi([])}function Zf(o){return mi([o>>>0])}function Xf(o,p,m,f){return mi([o>>>0,p>>>0,m>>>0,f>>>0])}var Yf=()=>{var o=Xt.pop();o||L("no exception to throw");var p=o.cd;throw($(),V)[o.Tc+13>>>0]==0&&(Xt.push(o),An(o,!0),zr(o,!1),Bt++),Ai(p),lt=p};function Qf(o,p,m){var f=new fi(o>>>=0);throw p>>>=0,m>>>=0,($(),Y)[f.Tc+16>>>2>>>0]=0,($(),Y)[f.Tc+4>>>2>>>0]=p,($(),Y)[f.Tc+8>>>2>>>0]=m,Ai(o),Bt++,lt=o}var Jf=()=>Bt;function On(o,p,m,f){return a?H(2,1,o,p,m,f):Bn(o,p,m,f)}function Bn(o,p,m,f){if(o>>>=0,p>>>=0,m>>>=0,f>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return a&&x.length===0?On(o,p,m,f):(o={Ld:m,Rc:o,bd:f,jd:x},a?(o.Sc="spawnThread",postMessage(o,x),0):Te(o))}function em(o){throw lt||(lt=o>>>0),lt}var Mn=globalThis.TextDecoder&&new TextDecoder,Rn=(o,p,m,f)=>{if(m=p+m,f)return m;for(;o[p]&&!(p>=m);)++p;return p},Nn=(o,p=0,m,f)=>{if(16<(m=Rn(o,p>>>=0,m,f))-p&&o.buffer&&Mn)return Mn.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(f="";p<m;){var x=o[p++];if(128&x){var E=63&o[p++];if((224&x)==192)f+=String.fromCharCode((31&x)<<6|E);else{var A=63&o[p++];65536>(x=(240&x)==224?(15&x)<<12|E<<6|A:(7&x)<<18|E<<12|A<<6|63&o[p++])?f+=String.fromCharCode(x):(x-=65536,f+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else f+=String.fromCharCode(x)}return f},Me=(o,p,m)=>(o>>>=0)?Nn(($(),K),o,p,m):"";function Dn(o,p,m){return a?H(3,1,o,p,m):0}function Pn(o,p){if(a)return H(4,1,o,p)}function Un(o,p){if(a)return H(5,1,o,p)}function Ln(o,p,m){if(a)return H(6,1,o,p,m)}function qn(o,p,m){return a?H(7,1,o,p,m):0}function Vn(o,p){if(a)return H(8,1,o,p)}function Gn(o,p,m){if(a)return H(9,1,o,p,m)}function Wn(o,p,m,f){if(a)return H(10,1,o,p,m,f)}function Fn(o,p,m,f){if(a)return H(11,1,o,p,m,f)}function Hn(o,p,m,f){if(a)return H(12,1,o,p,m,f)}function jn(o){if(a)return H(13,1,o)}function Kn(o,p){if(a)return H(14,1,o,p)}function Zn(o,p,m){if(a)return H(15,1,o,p,m)}var tm=()=>L(""),dt=o=>{o>>>=0;for(var p="";;){var m=($(),K)[o++>>>0];if(!m)return p;p+=String.fromCharCode(m)}},gi={},yi={},Yt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function mt(o,p,m={}){return(function(f,x,E={}){var A=x.name;if(!f)throw new Yt(`type "${A}" must have a positive integer typeid pointer`);if(yi.hasOwnProperty(f)){if(E.yd)return;throw new Yt(`Cannot register type '${A}' twice`)}yi[f]=x,gi.hasOwnProperty(f)&&(x=gi[f],delete gi[f],x.forEach(D=>D()))})(o,p,m)}var Xn=(o,p,m)=>{switch(p){case 1:return m?f=>($(),V)[f>>>0]:f=>($(),K)[f>>>0];case 2:return m?f=>($(),j)[f>>>1>>>0]:f=>($(),X)[f>>>1>>>0];case 4:return m?f=>($(),R)[f>>>2>>>0]:f=>($(),Y)[f>>>2>>>0];case 8:return m?f=>($(),_e)[f>>>3>>>0]:f=>($(),W)[f>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function rm(o,p,m,f,x){o>>>=0,m>>>=0,p=dt(p>>>0);let E=A=>A;if(f=f===0n){let A=8*m;E=D=>BigInt.asUintN(A,D),x=E(x)}mt(o,{name:p,Oc:E,Vc:(A,D)=>(typeof D=="number"&&(D=BigInt(D)),D),Uc:Xn(p,m,!f),Wc:null})}function im(o,p,m,f){mt(o>>>=0,{name:p=dt(p>>>0),Oc:function(x){return!!x},Vc:function(x,E){return E?m:f},Uc:function(x){return this.Oc(($(),K)[x>>>0])},Wc:null})}var Yn=[],Mt=[0,1,,1,null,1,!0,1,!1,1];function bi(o){9<(o>>>=0)&&--Mt[o+1]===0&&(Mt[o]=void 0,Yn.push(o))}var Xe=o=>{if(!o)throw new Yt(`Cannot use deleted val. handle = ${o}`);return Mt[o]},et=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Yn.pop()||Mt.length;return Mt[p]=o,Mt[p+1]=1,p}};function wi(o){return this.Oc(($(),Y)[o>>>2>>>0])}var am={name:"emscripten::val",Oc:o=>{var p=Xe(o);return bi(o),p},Vc:(o,p)=>et(p),Uc:wi,Wc:null};function nm(o){return mt(o>>>0,am)}var sm=(o,p)=>{switch(p){case 4:return function(m){return this.Oc(($(),Q)[m>>>2>>>0])};case 8:return function(m){return this.Oc(($(),ie)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function om(o,p,m){m>>>=0,mt(o>>>=0,{name:p=dt(p>>>0),Oc:f=>f,Vc:(f,x)=>x,Uc:sm(p,m),Wc:null})}function um(o,p,m,f,x){o>>>=0,m>>>=0,p=dt(p>>>0);let E=D=>D;if(f===0){var A=32-8*m;E=D=>D<<A>>>A,x=E(x)}mt(o,{name:p,Oc:E,Vc:(D,F)=>F,Uc:Xn(p,m,f!==0),Wc:null})}function lm(o,p,m){function f(E){var A=($(),Y)[E>>>2>>>0];return E=($(),Y)[E+4>>>2>>>0],new x(($(),V).buffer,E,A)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];mt(o>>>=0,{name:m=dt(m>>>0),Oc:f,Uc:f},{yd:!0})}var vt=(o,p,m)=>{var f=($(),K);if(p>>>=0,0<m){var x=p;m=p+m-1;for(var E=0;E<o.length;++E){var A=o.codePointAt(E);if(127>=A){if(p>=m)break;f[p++>>>0]=A}else if(2047>=A){if(p+1>=m)break;f[p++>>>0]=192|A>>6,f[p++>>>0]=128|63&A}else if(65535>=A){if(p+2>=m)break;f[p++>>>0]=224|A>>12,f[p++>>>0]=128|A>>6&63,f[p++>>>0]=128|63&A}else{if(p+3>=m)break;f[p++>>>0]=240|A>>18,f[p++>>>0]=128|A>>12&63,f[p++>>>0]=128|A>>6&63,f[p++>>>0]=128|63&A,E++}}f[p>>>0]=0,o=p-x}else o=0;return o},Ar=o=>{for(var p=0,m=0;m<o.length;++m){var f=o.charCodeAt(m);127>=f?p++:2047>=f?p+=2:55296<=f&&57343>=f?(p+=4,++m):p+=3}return p};function dm(o,p){mt(o>>>=0,{name:p=dt(p>>>0),Oc(m){var f=($(),Y)[m>>>2>>>0];return f=Me(m+4,f,!0),ct(m),f},Vc(m,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var x=typeof f=="string";if(!(x||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1))throw new Yt("Cannot pass non-string to std::string");var E=x?Ar(f):f.length,A=sr(4+E+1),D=A+4;return($(),Y)[A>>>2>>>0]=E,x?vt(f,D,E+1):($(),K).set(f,D>>>0),m!==null&&m.push(ct,A),A},Uc:wi,Wc(m){ct(m)}})}var Qn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,pm=(o,p,m)=>{if(o>>>=1,16<(p=Rn(($(),X),o,p/2,m))-o&&Qn)return Qn.decode(($(),X).slice(o,p));for(m="";o<p;++o){var f=($(),X)[o>>>0];m+=String.fromCharCode(f)}return m},cm=(o,p,m)=>{if(m??(m=2147483647),2>m)return 0;var f=p;m=(m-=2)<2*o.length?m/2:o.length;for(var x=0;x<m;++x){var E=o.charCodeAt(x);($(),j)[p>>>1>>>0]=E,p+=2}return($(),j)[p>>>1>>>0]=0,p-f},hm=o=>2*o.length,fm=(o,p,m)=>{var f="";o>>>=2;for(var x=0;!(x>=p/4);x++){var E=($(),Y)[o+x>>>0];if(!E&&!m)break;f+=String.fromCodePoint(E)}return f},mm=(o,p,m)=>{if(p>>>=0,m??(m=2147483647),4>m)return 0;var f=p;m=f+m-4;for(var x=0;x<o.length;++x){var E=o.codePointAt(x);if(65535<E&&x++,($(),R)[p>>>2>>>0]=E,(p+=4)+4>m)break}return($(),R)[p>>>2>>>0]=0,p-f},gm=o=>{for(var p=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,p+=4;return p};function ym(o,p,m){if(o>>>=0,p>>>=0,m=dt(m>>>=0),p===2)var f=pm,x=cm,E=hm;else f=fm,x=mm,E=gm;mt(o,{name:m,Oc:A=>{var D=($(),Y)[A>>>2>>>0];return D=f(A+4,D*p,!0),ct(A),D},Vc:(A,D)=>{if(typeof D!="string")throw new Yt(`Cannot pass non-string to C++ string type ${m}`);var F=E(D),Z=sr(4+F+p);return($(),Y)[Z>>>2>>>0]=F/p,x(D,Z+4,F+p),A!==null&&A.push(ct,Z),Z},Uc:wi,Wc(A){ct(A)}})}function bm(o,p){mt(o>>>=0,{zd:!0,name:p=dt(p>>>0),Oc:()=>{},Vc:()=>{}})}function wm(o){Ei(o>>>0,!i,1,!r,131072,!1),kr()}var Or=o=>{if(!z)try{if(o(),!(0<pe))try{a?Ur()&&Ci(y):Le(y)}catch(p){p instanceof ee||p=="unwind"||d(0,p)}}catch(p){p instanceof ee||p=="unwind"||d(0,p)}},_m=!Atomics.waitAsync||((bo=globalThis.navigator)==null?void 0:bo.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function _i(o){o>>>=0,_m||(Atomics.waitAsync(($(),R),o>>>2,o).value.then(Br),o+=128,Atomics.store(($(),R),o>>>2,1))}var Br=()=>Or(()=>{var o=Ur();o&&(_i(o),Ts())});function vm(o,p){(o>>>=0)==p>>>0?setTimeout(Br):a?postMessage({Zc:o,Sc:"checkMailbox"}):(o=ft[o])&&o.postMessage({Sc:"checkMailbox"})}var vi=[];function $m(o,p,m,f,x){for(p>>>=0,x>>>=0,vi.length=0,m=x>>>3,f=x+f>>>3;m<f;){var E;E=($(),_e)[m++>>>0]?($(),_e)[m++>>>0]:($(),ie)[m++>>>0],vi.push(E)}return(p?Bi[p]:cg[o])(...vi)}var xm=()=>{pe=0};function Sm(o){o>>>=0,a?postMessage({Sc:"cleanupThread",Nd:o}):Ir(ft[o])}function Tm(o){}var Mr=o=>{try{o()}catch(p){L(p)}};function Im(o){var p=(...m)=>{Rr.push(o);try{return o(...m)}finally{z||(Rr.pop(),pt&&$t===1&&Rr.length===0&&($t=0,pe+=1,Mr(fo),typeof Fibers<"u"&&Fibers.be()))}};return ts.set(o,p),p}var $t=0,pt=null,Jn=0,Rr=[],$i=new Map,es=new Map,ts=new Map,km=0,xi=null,Em=[],rs=o=>(function(p){if(!z){if($t===0){var m=!1,f=!1;p((x=0)=>{if(!z&&(Jn=x,m=!0,f)){$t=2,Mr(()=>mo(pt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),x=!1;try{var E=(function(){var F=($(),R)[pt+8>>>2>>>0];return F=es.get(F),F=ts.get(F),--pe,F()})()}catch(F){E=F,x=!0}var A=!1;if(!pt){var D=xi;D&&(xi=null,(x?D.reject:D.resolve)(E),A=!0)}if(x&&!A)throw E}}),f=!0,m||($t=1,pt=(function(){var x=sr(65548),E=x+12;if(($(),Y)[x>>>2>>>0]=E,($(),Y)[x+4>>>2>>>0]=E+65536,E=Rr[0],!$i.has(E)){var A=km++;$i.set(E,A),es.set(A,E)}return E=$i.get(E),($(),R)[x+8>>>2>>>0]=E,x})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Mr(()=>ho(pt)))}else $t===2?($t=0,Mr(go),ct(pt),pt=null,Em.forEach(Or)):L(`invalid state: ${$t}`);return Jn}})(p=>{o().then(p)});function Cm(o){return o>>>=0,rs(async()=>{var p=await Xe(o);return et(p)})}var Si=[],zm=o=>{var p=Si.length;return Si.push(o),p},Am=(o,p)=>{for(var m=Array(o),f=0;f<o;++f){var x=f,E=($(),Y)[p+4*f>>>2>>>0],A=yi[E];if(A===void 0)throw o=`parameter ${f}`,E=ws(E),p=dt(E),ct(E),new Yt(`${o} has unknown type ${p}`);m[x]=A}return m},Om=(o,p,m)=>{var f=[];return o=o(f,m),f.length&&(($(),Y)[p>>>2>>>0]=et(f)),o},Bm={},Nr=o=>{var p=Bm[o];return p===void 0?dt(o):p};function Mm(o,p,m){var[f,...x]=Am(o,p>>>0);p=f.Vc.bind(f);var E=x.map(F=>F.Uc.bind(F));o--;var A={toValue:Xe};switch(o=E.map((F,Z)=>{var ce=`argFromPtr${Z}`;return A[ce]=F,`${ce}(args${Z?"+"+8*Z:""})`}),m){case 0:var D="toValue(handle)";break;case 2:D="new (toValue(handle))";break;case 3:D="";break;case 1:A.getStringOrSymbol=Nr,D="toValue(handle)[getStringOrSymbol(methodName)]"}return D+=`(${o})`,f.zd||(A.toReturnWire=p,A.emval_returnValue=Om,D=`return emval_returnValue(toReturnWire, destructorsRef, ${D})`),D=`return function (handle, methodName, destructorsRef, args) {
  ${D}
  }`,m=new Function(Object.keys(A),D)(...Object.values(A)),D=`methodCaller<(${x.map(F=>F.name)}) => ${f.name}>`,zm(Object.defineProperty(m,"name",{value:D}))}function Rm(o,p){return p>>>=0,(o=Xe(o>>>0))==Xe(p)}function Nm(o){return(o>>>=0)?(o=Nr(o),et(globalThis[o])):et(globalThis)}function Dm(o){return o=Nr(o>>>0),et(t[o])}function Pm(o,p){return p>>>=0,o=Xe(o>>>0),p=Xe(p),et(o[p])}function Um(o){9<(o>>>=0)&&(Mt[o+1]+=1)}function is(o,p,m,f,x){return Si[o>>>0](p>>>0,m>>>0,f>>>0,x>>>0)}function Lm(o,p,m,f,x){return is(o>>>0,p>>>0,m>>>0,f>>>0,x>>>0)}function qm(){return et([])}function Vm(o){o=Xe(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return et(p)}function Gm(o){return et(Nr(o>>>0))}function Wm(){return et({})}function Fm(o){for(var p=Xe(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}bi(o)}function Hm(o,p,m){p>>>=0,m>>>=0,o=Xe(o>>>0),p=Xe(p),m=Xe(m),o[p]=m}function jm(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),R)[p>>>2>>>0]=o.getUTCSeconds(),($(),R)[p+4>>>2>>>0]=o.getUTCMinutes(),($(),R)[p+8>>>2>>>0]=o.getUTCHours(),($(),R)[p+12>>>2>>>0]=o.getUTCDate(),($(),R)[p+16>>>2>>>0]=o.getUTCMonth(),($(),R)[p+20>>>2>>>0]=o.getUTCFullYear()-1900,($(),R)[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),R)[p+28>>>2>>>0]=o}var as=o=>o%4==0&&(o%100!=0||o%400==0),ns=[0,31,60,91,121,152,182,213,244,274,305,335],ss=[0,31,59,90,120,151,181,212,243,273,304,334];function Km(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),R)[p>>>2>>>0]=o.getSeconds(),($(),R)[p+4>>>2>>>0]=o.getMinutes(),($(),R)[p+8>>>2>>>0]=o.getHours(),($(),R)[p+12>>>2>>>0]=o.getDate(),($(),R)[p+16>>>2>>>0]=o.getMonth(),($(),R)[p+20>>>2>>>0]=o.getFullYear()-1900,($(),R)[p+24>>>2>>>0]=o.getDay();var m=(as(o.getFullYear())?ns:ss)[o.getMonth()]+o.getDate()-1|0;($(),R)[p+28>>>2>>>0]=m,($(),R)[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var f=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=f&&o.getTimezoneOffset()==Math.min(f,m)),($(),R)[p+32>>>2>>>0]=o}function Zm(o){o>>>=0;var p=new Date(($(),R)[o+20>>>2>>>0]+1900,($(),R)[o+16>>>2>>>0],($(),R)[o+12>>>2>>>0],($(),R)[o+8>>>2>>>0],($(),R)[o+4>>>2>>>0],($(),R)[o>>>2>>>0],0),m=($(),R)[o+32>>>2>>>0],f=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),E=new Date(p.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,x);return 0>m?($(),R)[o+32>>>2>>>0]=+(x!=E&&A==f):0<m!=(A==f)&&(x=Math.max(E,x),p.setTime(p.getTime()+6e4*((0<m?A:x)-f))),($(),R)[o+24>>>2>>>0]=p.getDay(),m=(as(p.getFullYear())?ns:ss)[p.getMonth()]+p.getDate()-1|0,($(),R)[o+28>>>2>>>0]=m,($(),R)[o>>>2>>>0]=p.getSeconds(),($(),R)[o+4>>>2>>>0]=p.getMinutes(),($(),R)[o+8>>>2>>>0]=p.getHours(),($(),R)[o+12>>>2>>>0]=p.getDate(),($(),R)[o+16>>>2>>>0]=p.getMonth(),($(),R)[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function os(o,p,m,f,x,E,A){return a?H(16,1,o,p,m,f,x,E,A):-52}function us(o,p,m,f,x,E){if(a)return H(17,1,o,p,m,f,x,E)}var nr={},Xm=()=>performance.timeOrigin+performance.now();function ls(o,p){if(a)return H(18,1,o,p);if(nr[o]&&(clearTimeout(nr[o].id),delete nr[o]),!p)return 0;var m=setTimeout(()=>{delete nr[o],Or(()=>Ss(o,performance.timeOrigin+performance.now()))},p);return nr[o]={id:m,ae:p},0}function Ym(o,p,m,f){o>>>=0,p>>>=0,m>>>=0,f>>>=0;var x=new Date().getFullYear(),E=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var A=Math.max(E,x);($(),Y)[o>>>2>>>0]=60*A,($(),R)[p>>>2>>>0]=+(E!=x),o=(p=D=>{var F=Math.abs(D);return`UTC${0<=D?"-":"+"}${String(Math.floor(F/60)).padStart(2,"0")}${String(F%60).padStart(2,"0")}`})(E),p=p(x),x<E?(vt(o,m,17),vt(p,f,17)):(vt(o,f,17),vt(p,m,17))}var Qm=()=>Date.now();function Jm(o,p,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),($(),_e)[m>>>3>>>0]=BigInt(o),0):28}var Ti=[],ds=(o,p)=>{Ti.length=0;for(var m;m=($(),K)[o++>>>0];){var f=m!=105;p+=(f&=m!=112)&&p%8?4:0,Ti.push(m==112?($(),Y)[p>>>2>>>0]:m==106?($(),_e)[p>>>3>>>0]:m==105?($(),R)[p>>>2>>>0]:($(),ie)[p>>>3>>>0]),p+=f?8:4}return Ti};function eg(o,p,m){return o>>>=0,p=ds(p>>>0,m>>>0),Bi[o](...p)}function tg(o,p,m){return o>>>=0,p=ds(p>>>0,m>>>0),Bi[o](...p)}var rg=()=>{};function ig(o,p){return C(Me(o>>>0,p>>>0))}var ag=()=>{throw pe+=1,"unwind"};function ng(){return 4294901760}var sg=()=>navigator.hardwareConcurrency,Rt={},Dr=o=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+p[1]:0},ps=o=>{for(var p of o)(o=Dr(p))&&(Rt[o]=p)};function og(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),ps(o),Rt.gd=Dr(o[3]),Rt.Jd=o,Rt.gd}function Pr(o){if(!(o=Rt[o>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(o))o=p[1];else{if(!(p=/^(.+?)@/.exec(o)))return 0;o=p[1]}ct(Pr.hd??0),p=Ar(o)+1;var m=sr(p);return m&&vt(o,m,p),Pr.hd=m,Pr.hd}function ug(o){o>>>=0;var p=($(),K).length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var f=p*(1+.2/m);f=Math.min(f,o+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(o,f)/65536))-Je.buffer.byteLength+65535)/65536|0;try{Je.grow(f),P();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function lg(o,p,m){if(o>>>=0,p>>>=0,Rt.gd==o)var f=Rt.Jd;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),ps(f);for(var x=3;f[x]&&Dr(f[x])!=o;)++x;for(o=0;o<m&&f[o+x];++o)($(),R)[p+4*o>>>2>>>0]=Dr(f[o+x]);return o}var Ii,ki={},cs=()=>{var f;if(!Ii){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((f=globalThis.navigator)==null?void 0:f.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ki)ki[o]===void 0?delete p[o]:p[o]=ki[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);Ii=m}return Ii};function hs(o,p){if(a)return H(19,1,o,p);o>>>=0,p>>>=0;var m,f=0,x=0;for(m of cs()){var E=p+f;($(),Y)[o+x>>>2>>>0]=E,f+=vt(m,E,1/0)+1,x+=4}return 0}function fs(o,p){if(a)return H(20,1,o,p);o>>>=0,p>>>=0;var m=cs();for(var f of(($(),Y)[o>>>2>>>0]=m.length,o=0,m))o+=Ar(f)+1;return($(),Y)[p>>>2>>>0]=o,0}function ms(o){return a?H(21,1,o):52}function gs(o,p,m,f){return a?H(22,1,o,p,m,f):52}function ys(o,p,m,f){return a?H(23,1,o,p,m,f):70}var dg=[null,[],[]];function bs(o,p,m,f){if(a)return H(24,1,o,p,m,f);p>>>=0,m>>>=0,f>>>=0;for(var x=0,E=0;E<m;E++){var A=($(),Y)[p>>>2>>>0],D=($(),Y)[p+4>>>2>>>0];p+=8;for(var F=0;F<D;F++){var Z=o,ce=($(),K)[A+F>>>0],ve=dg[Z];ce===0||ce===10?((Z===1?k:C)(Nn(ve)),ve.length=0):ve.push(ce)}x+=D}return($(),Y)[f>>>2>>>0]=x,0}function pg(o){return o>>>0}a||(function(){for(var o=t.numThreads-1;o--;)Er();he.push(async()=>{var p=(async function(){if(!a)return Promise.all(De.map(ar))})();be++,await p,--be==0&&me&&(p=me,me=null,p())})})(),a||(Je=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),P()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>ge(),t.stackRestore=o=>fe(o),t.stackAlloc=o=>zi(o),t.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":($(),V)[o>>>0]=p;break;case"i16":($(),j)[o>>>1>>>0]=p;break;case"i32":($(),R)[o>>>2>>>0]=p;break;case"i64":($(),_e)[o>>>3>>>0]=BigInt(p);break;case"float":($(),Q)[o>>>2>>>0]=p;break;case"double":($(),ie)[o>>>3>>>0]=p;break;case"*":($(),Y)[o>>>2>>>0]=p;break;default:L(`invalid type for setValue: ${m}`)}},t.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return($(),V)[o>>>0];case"i16":return($(),j)[o>>>1>>>0];case"i32":return($(),R)[o>>>2>>>0];case"i64":return($(),_e)[o>>>3>>>0];case"float":return($(),Q)[o>>>2>>>0];case"double":return($(),ie)[o>>>3>>>0];case"*":return($(),Y)[o>>>2>>>0];default:L(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Me,t.stringToUTF8=vt,t.lengthBytesUTF8=Ar;var ws,_s,Ur,ct,sr,Ei,vs,$s,xs,Ci,Ss,Ts,ye,or,Is,fe,zi,ge,ks,Ai,Es,Cs,zs,Oi,As,Os,Bs,Ms,Rs,Ns,Ds,Ps,Us,Ls,qs,Vs,Gs,Ws,Fs,Hs,js,Ks,Zs,Xs,Ys,Qs,Js,eo,to,ro,io,ao,no,so,oo,uo,lo,po,co,ho,fo,mo,go,gt,cg=[Ee,qe,On,Dn,Pn,Un,Ln,qn,Vn,Gn,Wn,Fn,Hn,jn,Kn,Zn,os,us,ls,hs,fs,ms,gs,ys,bs],Bi={1055492:(o,p,m,f,x)=>{if(t===void 0||!t.Yc)return 1;if((o=Me(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Yc.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),f=Number(f>>>0),p+m>o.byteLength)return 3;try{let E=o.subarray(p,p+m);switch(x){case 0:($(),K).set(E,f>>>0);break;case 1:t.Qd?t.Qd(f,E):t.Id(f,E);break;default:return 4}return 0}catch{return 4}},1056316:(o,p,m)=>{t.td(o,($(),K).subarray(p>>>0,p+m>>>0))},1056380:()=>t.Sd(),1056422:o=>{t.sd(o)},1056459:()=>{t.Bd()},1056490:()=>{t.Cd()},1056519:()=>{t.Gd()},1056544:o=>t.Ad(o),1056577:o=>t.Ed(o),1056609:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m),!0)},1056672:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m))},1056729:()=>typeof wasmOffsetConverter<"u",1056786:o=>{t.$b("Abs",o,void 0)},1056837:o=>{t.$b("Neg",o,void 0)},1056888:o=>{t.$b("Floor",o,void 0)},1056941:o=>{t.$b("Ceil",o,void 0)},1056993:o=>{t.$b("Reciprocal",o,void 0)},1057051:o=>{t.$b("Sqrt",o,void 0)},1057103:o=>{t.$b("Exp",o,void 0)},1057154:o=>{t.$b("Erf",o,void 0)},1057205:o=>{t.$b("Sigmoid",o,void 0)},1057260:(o,p,m)=>{t.$b("HardSigmoid",o,{alpha:p,beta:m})},1057339:o=>{t.$b("HardSwish",o,void 0)},1057396:o=>{t.$b("Log",o,void 0)},1057447:o=>{t.$b("Sin",o,void 0)},1057498:o=>{t.$b("Cos",o,void 0)},1057549:o=>{t.$b("Tan",o,void 0)},1057600:o=>{t.$b("Asin",o,void 0)},1057652:o=>{t.$b("Acos",o,void 0)},1057704:o=>{t.$b("Atan",o,void 0)},1057756:o=>{t.$b("Sinh",o,void 0)},1057808:o=>{t.$b("Cosh",o,void 0)},1057860:o=>{t.$b("Asinh",o,void 0)},1057913:o=>{t.$b("Acosh",o,void 0)},1057966:o=>{t.$b("Atanh",o,void 0)},1058019:o=>{t.$b("Tanh",o,void 0)},1058071:o=>{t.$b("Not",o,void 0)},1058122:(o,p,m)=>{t.$b("Clip",o,{min:p,max:m})},1058191:o=>{t.$b("Clip",o,void 0)},1058243:(o,p)=>{t.$b("Elu",o,{alpha:p})},1058301:o=>{t.$b("Gelu",o,void 0)},1058353:o=>{t.$b("Relu",o,void 0)},1058405:(o,p)=>{t.$b("LeakyRelu",o,{alpha:p})},1058469:(o,p)=>{t.$b("ThresholdedRelu",o,{alpha:p})},1058539:(o,p)=>{t.$b("Cast",o,{to:p})},1058597:o=>{t.$b("Add",o,void 0)},1058648:o=>{t.$b("Sub",o,void 0)},1058699:o=>{t.$b("Mul",o,void 0)},1058750:o=>{t.$b("Div",o,void 0)},1058801:o=>{t.$b("Pow",o,void 0)},1058852:o=>{t.$b("Equal",o,void 0)},1058905:o=>{t.$b("Greater",o,void 0)},1058960:o=>{t.$b("GreaterOrEqual",o,void 0)},1059022:o=>{t.$b("Less",o,void 0)},1059074:o=>{t.$b("LessOrEqual",o,void 0)},1059133:(o,p,m,f,x)=>{t.$b("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1059308:(o,p,m,f,x)=>{t.$b("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1059482:(o,p,m,f,x)=>{t.$b("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1059656:(o,p,m,f,x)=>{t.$b("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1059831:(o,p,m,f,x)=>{t.$b("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1060005:(o,p,m,f,x)=>{t.$b("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1060178:(o,p,m,f,x)=>{t.$b("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1060351:(o,p,m,f,x)=>{t.$b("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1060528:(o,p,m,f,x)=>{t.$b("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1060708:(o,p,m,f,x)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1060888:o=>{t.$b("Where",o,void 0)},1060941:(o,p,m)=>{t.$b("Transpose",o,{perm:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1061065:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Me(m),format:f?"NHWC":"NCHW"})},1061198:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Me(m),format:f?"NHWC":"NCHW"})},1061331:(o,p,m,f)=>{t.$b("DFT",o,{axis:p,inverse:m,onesided:f})},1061423:(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze,xt)=>{t.$b("ConvTranspose",o,{format:F?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[x],pads:[E,A],strides:[D],wIsConst:()=>!!($(),V)[Z>>>0],outputPadding:ce?Array.from(($(),R).subarray(Number(ce)>>>0,Number(ve)>>>0)):[],outputShape:ke?Array.from(($(),R).subarray(Number(ke)>>>0,Number(ze)>>>0)):[],activation:Me(xt)})},1061856:(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze)=>{t.$b("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from(($(),R).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from(($(),R).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from(($(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!($(),V)[F>>>0],outputPadding:Z?Array.from(($(),R).subarray(Number(Z)>>>0,Number(ce)>>>0)):[],outputShape:ve?Array.from(($(),R).subarray(Number(ve)>>>0,Number(ke)>>>0)):[],activation:Me(ze)})},1062517:(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze,xt)=>{t.$b("ConvTranspose",o,{format:F?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[x],pads:[E,A],strides:[D],wIsConst:()=>!!($(),V)[Z>>>0],outputPadding:ce?Array.from(($(),R).subarray(Number(ce)>>>0,Number(ve)>>>0)):[],outputShape:ke?Array.from(($(),R).subarray(Number(ke)>>>0,Number(ze)>>>0)):[],activation:Me(xt)})},1062950:(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze)=>{t.$b("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from(($(),R).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from(($(),R).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from(($(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!($(),V)[F>>>0],outputPadding:Z?Array.from(($(),R).subarray(Number(Z)>>>0,Number(ce)>>>0)):[],outputShape:ve?Array.from(($(),R).subarray(Number(ve)>>>0,Number(ke)>>>0)):[],activation:Me(ze)})},1063611:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1063702:(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze)=>{t.$b("AveragePool",o,{format:ze?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:E?Array.from(($(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from(($(),R).subarray(Number(D)>>>0,Number(F)>>>0)):[],pads:Z?Array.from(($(),R).subarray(Number(Z)>>>0,Number(ce)>>>0)):[],strides:ve?Array.from(($(),R).subarray(Number(ve)>>>0,Number(ke)>>>0)):[]})},1064181:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1064272:(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze)=>{t.$b("AveragePool",o,{format:ze?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:E?Array.from(($(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from(($(),R).subarray(Number(D)>>>0,Number(F)>>>0)):[],pads:Z?Array.from(($(),R).subarray(Number(Z)>>>0,Number(ce)>>>0)):[],strides:ve?Array.from(($(),R).subarray(Number(ve)>>>0,Number(ke)>>>0)):[]})},1064751:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1064838:(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze)=>{t.$b("MaxPool",o,{format:ze?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:E?Array.from(($(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from(($(),R).subarray(Number(D)>>>0,Number(F)>>>0)):[],pads:Z?Array.from(($(),R).subarray(Number(Z)>>>0,Number(ce)>>>0)):[],strides:ve?Array.from(($(),R).subarray(Number(ve)>>>0,Number(ke)>>>0)):[]})},1065313:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1065400:(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze)=>{t.$b("MaxPool",o,{format:ze?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:E?Array.from(($(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from(($(),R).subarray(Number(D)>>>0,Number(F)>>>0)):[],pads:Z?Array.from(($(),R).subarray(Number(Z)>>>0,Number(ce)>>>0)):[],strides:ve?Array.from(($(),R).subarray(Number(ve)>>>0,Number(ke)>>>0)):[]})},1065875:(o,p,m,f,x)=>{t.$b("Gemm",o,{alpha:p,beta:m,transA:f,transB:x})},1065979:o=>{t.$b("MatMul",o,void 0)},1066033:(o,p,m,f)=>{t.$b("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1066141:(o,p,m,f)=>{t.$b("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1066249:(o,p)=>{t.$b("Softmax",o,{axis:p})},1066312:(o,p)=>{t.$b("Concat",o,{axis:p})},1066372:(o,p,m,f,x)=>{t.$b("Split",o,{axis:p,numOutputs:m,splitSizes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1066528:o=>{t.$b("Expand",o,void 0)},1066582:(o,p)=>{t.$b("Gather",o,{axis:Number(p)})},1066653:(o,p)=>{t.$b("GatherElements",o,{axis:Number(p)})},1066732:(o,p)=>{t.$b("GatherND",o,{batch_dims:Number(p)})},1066811:(o,p,m,f,x,E,A,D,F,Z,ce)=>{t.$b("Resize",o,{antialias:p,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],coordinateTransformMode:Me(x),cubicCoeffA:E,excludeOutside:A,extrapolationValue:D,keepAspectRatioPolicy:Me(F),mode:Me(Z),nearestMode:Me(ce)})},1067173:(o,p,m,f,x,E,A)=>{t.$b("Slice",o,{starts:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[],axes:E?Array.from(($(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[]})},1067437:o=>{t.$b("Tile",o,void 0)},1067489:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1067603:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1067717:o=>{t.$b("Range",o,void 0)},1067770:(o,p)=>{t.$b("Einsum",o,{equation:Me(p)})},1067851:(o,p,m,f,x)=>{t.$b("Pad",o,{mode:p,value:m,pads:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1067994:(o,p,m,f,x,E)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!f,format:E?"NHWC":"NCHW"})},1068163:(o,p,m,f,x,E)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!f,format:E?"NHWC":"NCHW"})},1068332:(o,p,m)=>{t.$b("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},1068429:(o,p,m)=>{t.$b("DequantizeLinear",o,{axis:p,blockSize:m})},1068519:(o,p,m,f,x)=>{t.$b("GridSample",o,{align_corners:p,mode:Me(m),padding_mode:Me(f),format:x?"NHWC":"NCHW"})},1068689:(o,p,m,f,x)=>{t.$b("GridSample",o,{align_corners:p,mode:Me(m),padding_mode:Me(f),format:x?"NHWC":"NCHW"})},1068859:(o,p)=>{t.$b("ScatterND",o,{reduction:Me(p)})},1068944:(o,p,m,f,x,E,A,D,F)=>{t.$b("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:x,doRotary:E,qkvHiddenSizes:A?Array.from(($(),R).subarray(Number(D)>>>0,Number(D)+A>>>0)):[],pastPresentShareBuffer:!!F})},1069216:o=>{t.$b("BiasAdd",o,void 0)},1069271:o=>{t.$b("BiasSplitGelu",o,void 0)},1069332:o=>{t.$b("FastGelu",o,void 0)},1069388:(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze,xt,Mi)=>{t.$b("Conv",o,{format:ve?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],group:x,kernel_shape:E?Array.from(($(),R).subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:D?Array.from(($(),R).subarray(Number(D)>>>0,Number(F)>>>0)):[],strides:Z?Array.from(($(),R).subarray(Number(Z)>>>0,Number(ce)>>>0)):[],w_is_const:()=>!!($(),V)[Number(ke)>>>0],activation:Me(ze),activation_params:xt?Array.from(($(),Q).subarray(Number(xt)>>>0,Number(Mi)>>>0)):[]})},1069972:o=>{t.$b("Gelu",o,void 0)},1070024:(o,p,m,f,x,E,A,D,F)=>{t.$b("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:f,softcap:x,doRotary:E,rotaryInterleaved:A,smoothSoftmax:D,localWindowSize:F})},1070241:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1070352:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1070463:(o,p,m,f,x,E)=>{t.$b("MatMulNBits",o,{k:p,n:m,accuracyLevel:f,bits:x,blockSize:E})},1070590:(o,p,m,f,x,E)=>{t.$b("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:x,doRotary:E})},1070749:(o,p)=>{t.$b("QuickGelu",o,{alpha:p})},1070813:(o,p,m,f,x)=>{t.$b("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:f,scale:x})},1070952:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1071054:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1071156:(o,p,m,f)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:f})},1071277:o=>{t.Fd(o)},1071311:(o,p)=>t.Hd(Number(o),Number(p),t.Xc.Kd,t.Xc.errors)};function hg(o,p,m){return rs(async()=>{await t.Dd(Number(o),Number(p),Number(m))})}function fg(){return typeof wasmOffsetConverter<"u"}function mg(o,p,m,f){var x=ge();try{return Ps(o,p,m,f)}catch(E){if(fe(x),E!==E+0)throw E;ye(1,0)}}function gg(o,p,m){var f=ge();try{return Ms(o,p,m)}catch(x){if(fe(f),x!==x+0)throw x;ye(1,0)}}function yg(o){var p=ge();try{As(o)}catch(m){if(fe(p),m!==m+0)throw m;ye(1,0)}}function bg(o,p){var m=ge();try{return Oi(o,p)}catch(f){if(fe(m),f!==f+0)throw f;ye(1,0)}}function wg(o,p,m){var f=ge();try{zs(o,p,m)}catch(x){if(fe(f),x!==x+0)throw x;ye(1,0)}}function _g(o,p){var m=ge();try{Us(o,p)}catch(f){if(fe(m),f!==f+0)throw f;ye(1,0)}}function vg(o,p,m,f,x,E,A){var D=ge();try{return Ns(o,p,m,f,x,E,A)}catch(F){if(fe(D),F!==F+0)throw F;ye(1,0)}}function $g(o,p,m,f,x,E){var A=ge();try{Os(o,p,m,f,x,E)}catch(D){if(fe(A),D!==D+0)throw D;ye(1,0)}}function xg(o,p,m,f){var x=ge();try{Ds(o,p,m,f)}catch(E){if(fe(x),E!==E+0)throw E;ye(1,0)}}function Sg(o,p,m,f,x){var E=ge();try{Bs(o,p,m,f,x)}catch(A){if(fe(E),A!==A+0)throw A;ye(1,0)}}function Tg(o,p,m,f,x,E,A){var D=ge();try{qs(o,p,m,f,x,E,A)}catch(F){if(fe(D),F!==F+0)throw F;ye(1,0)}}function Ig(o,p,m,f,x,E,A){var D=ge();try{Vs(o,p,m,f,x,E,A)}catch(F){if(fe(D),F!==F+0)throw F;ye(1,0)}}function kg(o,p,m,f,x,E,A,D){var F=ge();try{Hs(o,p,m,f,x,E,A,D)}catch(Z){if(fe(F),Z!==Z+0)throw Z;ye(1,0)}}function Eg(o,p,m,f,x){var E=ge();try{return Ls(o,p,m,f,x)}catch(A){if(fe(E),A!==A+0)throw A;ye(1,0)}}function Cg(o,p,m){var f=ge();try{return js(o,p,m)}catch(x){if(fe(f),x!==x+0)throw x;ye(1,0)}}function zg(o,p,m,f,x,E,A,D){var F=ge();try{Ks(o,p,m,f,x,E,A,D)}catch(Z){if(fe(F),Z!==Z+0)throw Z;ye(1,0)}}function Ag(o,p,m,f,x,E,A,D,F,Z,ce,ve){var ke=ge();try{Gs(o,p,m,f,x,E,A,D,F,Z,ce,ve)}catch(ze){if(fe(ke),ze!==ze+0)throw ze;ye(1,0)}}function Og(o,p,m){var f=ge();try{return Zs(o,p,m)}catch(x){if(fe(f),x!==x+0)throw x;return ye(1,0),0n}}function Bg(o,p,m,f,x,E,A,D,F){var Z=ge();try{Rs(o,p,m,f,x,E,A,D,F)}catch(ce){if(fe(Z),ce!==ce+0)throw ce;ye(1,0)}}function Mg(o){var p=ge();try{return Xs(o)}catch(m){if(fe(p),m!==m+0)throw m;ye(1,0)}}function Rg(o,p){var m=ge();try{return co(o,p)}catch(f){if(fe(m),f!==f+0)throw f;return ye(1,0),0n}}function Ng(o){var p=ge();try{return Ys(o)}catch(m){if(fe(p),m!==m+0)throw m;return ye(1,0),0n}}function Dg(o,p,m,f){var x=ge();try{return io(o,p,m,f)}catch(E){if(fe(x),E!==E+0)throw E;ye(1,0)}}function Pg(o,p,m,f,x){var E=ge();try{return ao(o,p,m,f,x)}catch(A){if(fe(E),A!==A+0)throw A;ye(1,0)}}function Ug(o,p,m,f,x,E){var A=ge();try{return no(o,p,m,f,x,E)}catch(D){if(fe(A),D!==D+0)throw D;ye(1,0)}}function Lg(o,p,m,f,x,E){var A=ge();try{return Ws(o,p,m,f,x,E)}catch(D){if(fe(A),D!==D+0)throw D;ye(1,0)}}function qg(o,p,m,f,x,E){var A=ge();try{return so(o,p,m,f,x,E)}catch(D){if(fe(A),D!==D+0)throw D;ye(1,0)}}function Vg(o,p,m,f,x,E,A,D){var F=ge();try{return Fs(o,p,m,f,x,E,A,D)}catch(Z){if(fe(F),Z!==Z+0)throw Z;ye(1,0)}}function Gg(o,p,m,f,x){var E=ge();try{return oo(o,p,m,f,x)}catch(A){if(fe(E),A!==A+0)throw A;return ye(1,0),0n}}function Wg(o,p,m,f){var x=ge();try{return uo(o,p,m,f)}catch(E){if(fe(x),E!==E+0)throw E;ye(1,0)}}function Fg(o,p,m,f){var x=ge();try{return lo(o,p,m,f)}catch(E){if(fe(x),E!==E+0)throw E;ye(1,0)}}function Hg(o,p,m,f,x,E,A,D,F,Z,ce,ve){var ke=ge();try{return po(o,p,m,f,x,E,A,D,F,Z,ce,ve)}catch(ze){if(fe(ke),ze!==ze+0)throw ze;ye(1,0)}}function jg(o,p,m,f,x,E,A,D,F,Z,ce){var ve=ge();try{to(o,p,m,f,x,E,A,D,F,Z,ce)}catch(ke){if(fe(ve),ke!==ke+0)throw ke;ye(1,0)}}function Kg(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze,xt,Mi){var Qg=ge();try{ro(o,p,m,f,x,E,A,D,F,Z,ce,ve,ke,ze,xt,Mi)}catch(Ri){if(fe(Qg),Ri!==Ri+0)throw Ri;ye(1,0)}}function Zg(o,p,m){var f=ge();try{return Qs(o,p,m)}catch(x){if(fe(f),x!==x+0)throw x;ye(1,0)}}function Xg(o,p,m){var f=ge();try{return Js(o,p,m)}catch(x){if(fe(f),x!==x+0)throw x;ye(1,0)}}function Yg(o,p,m,f){var x=ge();try{eo(o,p,m,f)}catch(E){if(fe(x),E!==E+0)throw E;ye(1,0)}}function Lr(){if(0<be)me=Lr;else if(a)_==null||_(t),q();else{for(var o=he;0<o.length;)o.shift()(t);0<be?me=Lr:(t.calledRun=!0,z||(q(),_==null||_(t)))}}return a||(gt=await ue(),Lr()),t.PTR_SIZE=4,T?t:new Promise((o,p)=>{_=o,S=p})}var Cp,$o,S0=G(()=>{"use strict";var e,t;Cp=vo,$o=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),$o&&vo()}),Vi,Ua,xo,He,zp,Vr,So,To,Gi,Io,Wi,Ap,Fi,Op,sn=G(()=>{"use strict";nn(),Vi=typeof location>"u"?void 0:location.origin,Ua=import.meta.url>"file:"&&import.meta.url<"file;",xo=()=>{if(Ua){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Vi).href}return import.meta.url},He=xo(),zp=()=>{if(He&&!He.startsWith("blob:"))return He.substring(0,He.lastIndexOf("/")+1)},Vr=(e,t)=>{try{let r=t??He;return(r?new URL(e,r):new URL(e)).origin===Vi}catch{return!1}},So=(e,t)=>{let r=t??He;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},To=(e,t)=>`${t??"./"}${e}`,Gi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Io=async e=>(await import(e)).default,Wi=(x0(),xr(Ip)).default,Ap=async()=>{if(!He)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Vr(He))return[void 0,Wi()];let e=await Gi(He);return[e,Wi(e)]},Fi=(S0(),xr(Ep)).default,Op=async(e,t,r,i)=>{let a=Fi&&!(e||t);if(a)if(He)a=Vr(He)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Fi];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??So(n,t),u=r&&s&&!Vr(s,t),l=u?await Gi(s):s??To(n,t);return[u?l:void 0,await Io(l)]}}}),Hi,Gr,lr,ji,ko,Eo,Co,on,Ce,Kt=G(()=>{"use strict";sn(),Gr=!1,lr=!1,ji=!1,ko=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Eo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Co=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},on=async e=>{if(Gr)return Promise.resolve();if(lr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ji)throw new Error("previous call to 'initializeWebAssembly()' failed.");lr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Co())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Eo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=ko();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a==null?void 0:a.mjs,u=(s==null?void 0:s.href)??s,l=a==null?void 0:a.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[h,g]=await Op(u,n,r>1,!!c||!!d),b=!1,y=[];if(t>0&&y.push(new Promise(_=>{setTimeout(()=>{b=!0,_()},t)})),y.push(new Promise((_,S)=>{let v={numThreads:r};if(c)v.wasmBinary=c,v.locateFile=w=>w;else if(d||n)v.locateFile=w=>d??n+w;else if(u&&u.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,u).href;else if(h){let w=zp();w&&(v.locateFile=I=>w+I)}g(v).then(w=>{lr=!1,Gr=!0,Hi=w,_(),h&&URL.revokeObjectURL(h)},w=>{lr=!1,ji=!0,S(w)})})),await Promise.race(y),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ce=()=>{if(Gr&&Hi)return Hi;throw new Error("WebAssembly is not initialized yet.")}}),st,ai,Se,un=G(()=>{"use strict";Kt(),st=(e,t)=>{let r=Ce(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},ai=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")ai(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},Se=e=>{let t=Ce(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Bp,T0=G(()=>{"use strict";Kt(),un(),Bp=e=>{let t=Ce(),r=0,i=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let n=0;return(e==null?void 0:e.tag)!==void 0&&(n=st(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&Se("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ai(e.extra,"",new WeakSet,(s,u)=>{let l=st(s,i),d=st(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&Se(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),zo,Ao,Oo,Nt,Bo,Mp,I0=G(()=>{"use strict";Kt(),un(),zo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ao=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Oo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Nt=(e,t,r,i)=>{let a=st(t,i),n=st(r,i);Ce()._OrtAddSessionConfigEntry(e,a,n)!==0&&Se(`Can't set a session config entry: ${t} - ${r}.`)},Bo=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let n=typeof a=="string"?a:a.name,s=[];switch(n){case"webnn":if(n="WEBNN",Nt(e,"session.disable_quant_qdq","1",r),Nt(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let h=a==null?void 0:a.deviceType;h&&Nt(e,"deviceType",h,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let h=a;if(h!=null&&h.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);Nt(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let u=st(n,r),l=s.length,d=0,c=0;if(l>0){d=Ce()._malloc(l*Ce().PTR_SIZE),r.push(d),c=Ce()._malloc(l*Ce().PTR_SIZE),r.push(c);for(let h=0;h<l;h++)Ce().setValue(d+h*Ce().PTR_SIZE,s[h][0],"*"),Ce().setValue(c+h*Ce().PTR_SIZE,s[h][1],"*")}await Ce()._OrtAppendExecutionProvider(e,u,d,c,l)!==0&&Se(`Can't append execution provider: ${n}.`)}},Mp=async e=>{let t=Ce(),r=0,i=[],a=e||{};Oo(a);try{let n=zo(a.graphOptimizationLevel??"all"),s=Ao(a.executionMode??"sequential"),u=typeof a.logId=="string"?st(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof a.optimizedModelFilePath=="string"?st(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,d,c),r===0&&Se("Can't create session options."),a.executionProviders&&await Bo(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Nt(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[h,g]of Object.entries(a.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let b=st(h,i);t._OrtAddFreeDimensionOverride(r,b,g)!==0&&Se(`Can't set a free dimension override: ${h} - ${g}.`)}return a.extra!==void 0&&ai(a.extra,"",new WeakSet,(h,g)=>{Nt(r,h,g,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Se("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),Vt,wt,Gt,pi,ni,ln,dn,La,ne=G(()=>{"use strict";Vt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},wt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Gt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},pi=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ni=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ln=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",dn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",La=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),pn,Rp=G(()=>{"use strict";nn(),pn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Mo,Ro,No,Do,cn,Po,we,_t=G(()=>{"use strict";ne(),Mo=["V","I","W","E","F"],Ro=(e,t)=>{console.log(`[${Mo[e]},${new Date().toISOString()}]${t}`)},cn=(e,t)=>{No=e,Do=t},Po=(e,t)=>{let r=ni(e),i=ni(No);r>=i&&Ro(r,typeof t=="function"?t():t)},we=(...e)=>{Do&&Po(...e)}}),Uo,tr,M,si,Np,Dp,Pp,le=G(()=>{"use strict";Uo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},tr=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=Uo.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],d=a-u<0?1:t[a-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-u]=Math.max(l,d);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},M=class ri{static size(t){return ri.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ri.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ri.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},si=class Et{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Et.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Et.computeShapeHelper(t,r,d,i,a,n,s,u,l),d}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Et.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l,d=0){if(t)for(let c=0;c<r.length-2;c++)i.push(1);else for(let c=0;c<r.length-2;c++)i.push(Et.adjustPadAndReturnShape(r[c+2],a[c],n[c],s[c],u,c,c+r.length-2,l,d))}static computeOutputSize(t,r,i,a,n){let s=Math.floor(t/r)+1;return n===1&&(s=Math.ceil(t/r)+1,(s-1)*r>=i+a&&(s-=1)),s}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l,d=0){let c=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Et.computeOutputSize(t-c,r,t,0,d);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=(Math.floor((t+r-1)/r)-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(h+1)/2:h/2),n[u]=h-n[s],Et.computeOutputSize(t+n[s]+n[u]-c,r,t,n[s],d)}default:throw new Error("Unsupported AutoPad type")}else return Et.computeOutputSize(t+n[s]+n[u]-c,r,t,n[s],d)}},Np=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!tr.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},Dp=-34028234663852886e22,Pp=34028234663852886e22}),hn,Up=G(()=>{"use strict";ne(),hn=(e,t)=>new(pi(t))(e)}),Ki,Lo,Zi,qo,Xi,Vo,Yi,Qi,Ji,Go,Lp,k0=G(()=>{"use strict";ne(),_t(),Ki=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Lo=(e,t)=>{if(t==="int32")return e;let r=Ki.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(pi(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Zi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},qo=1,Xi=()=>qo++,Vo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Yi=(e,t)=>{let r=Ki.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Qi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Yi(this.dataType,this.tensorShape)}destroy(){we("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Zi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Ji=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n=this.tensorManager.getMLOpSupportLimits(e),s;if(!(n!=null&&n.input.dataTypes.includes(t))){if(s=Vo.get(t),!s||(n==null?void 0:n.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);we("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Yi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Lo(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else we("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Zi(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Go=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Xi();return this.tensorTrackersById.set(e,new Ji(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){we("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){we("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=Xi(),s=new Qi({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new Ji(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){we("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}we("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new Qi({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Lp=(...e)=>new Go(...e)}),dr,Wo,qp,E0=G(()=>{"use strict";ne(),Kt(),Up(),k0(),_t(),dr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Wo=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},qp=class{constructor(e){this.tensorManager=Lp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,cn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){we("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){we("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)we("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Wo(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){we("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=dr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){we("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=dr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!Ce().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");we("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return hn(r,t)}}registerMLTensor(e,t,r,i){let a=dr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return we("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=dr.get(Vt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(a!=null&&a.input.dataTypes.includes(i)):!!(a!=null&&a.output.dataTypes.includes(i))}flush(){}}}),fn=G(()=>{"use strict"}),ea,Wr,Fr,Fo,Ho,ta,qa,jo,Vp,C0=G(()=>{"use strict";_t(),fn(),ea=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Wr=[],Fr=e=>Math.ceil(Number(e)/16)*16,Fo=e=>{for(let t=0;t<Wr.length;t++){let r=Wr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ho=1,ta=()=>Ho++,qa=async(e,t,r,i)=>{let a=Fr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},jo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ea)Wr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Fr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);if(n===a&&i%4===0)this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,r,i,a);else{let u=new Uint8Array(n);u.set(t),this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,u,0,n)}we("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Fr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=ta();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),we("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Fo(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:ta(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),we("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return we("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await qa(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ea.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(we("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Vp=(...e)=>new jo(...e)}),Ko,xe,Be=G(()=>{"use strict";Ko=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},xe=e=>new Ko(e)}),rr,Hr,Ne,Re,ae,Oe,Va,er,At,re,pr,U,te,Gp,mn,Zo,Wp,de=G(()=>{"use strict";ne(),le(),rr=64,Hr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ne=(e,t=1)=>{let r=Hr(e,t);return typeof r=="string"?r:r[0]},Re=(e,t=1)=>{let r=Hr(e,t);return typeof r=="string"?r:r[1]},ae=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:M.computeStrides(r)})}),t},Oe=e=>e%4===0?4:e%2===0?2:1,Va=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,er=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,At=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,re=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,pr=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Hr(t,a),c=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],g={indices:l,value:c,storage:h,tensor:t},b=T=>typeof T=="string"?T:`${T}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},_=n?"uniforms.":"",S=`${_}${e}_shape`,v=`${_}${e}_strides`,w="";for(let T=0;T<s-1;T++)w+=`
    let dim${T} = current / ${re(v,T,s)};
    let rest${T} = current % ${re(v,T,s)};
    indices[${T}] = dim${T};
    current = rest${T};
    `;w+=`indices[${s-1}] = current;`;let I=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=T=>(y.offsetToIndices=!0,s<2?T:`o2i_${e}(${T})`),C=[];if(s>=2)for(let T=s-1;T>=0;T--)C.push(`${re(v,T,s)} * (indices[${T}])`);let z=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${C.join("+")};
  }`,B=T=>(y.indicesToOffset=!0,s<2?T:`i2o_${e}(${T})`),$=(...T)=>s===0?"0u":`${g.indices}(${T.map(b).join(",")})`,N=(T,P)=>s<2?`${T}`:`${re(T,P,s)}`,V=(T,P,q)=>s<2?`${T}=${q};`:`${re(T,P,s)}=${q};`,K={},j=(T,P)=>{y.broadcastedIndicesToOffset=!0;let q=`${P.name}broadcastedIndicesTo${e}Offset`;if(q in K)return`${q}(${T})`;let L=[];for(let J=s-1;J>=0;J--){let ue=P.indicesGet("outputIndices",J+P.rank-s);L.push(`${N(v,J)} * (${ue} % ${N(S,J)})`)}return K[q]=`fn ${q}(outputIndices: ${P.type.indices}) -> u32 {
             return ${L.length>0?L.join("+"):"0u"};
           }`,`${q}(${T})`},X=(T,P)=>(()=>{if(g.storage===g.value)return`${e}[${T}]=${P};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${T}]=vec2<u32>(u32(${P}), select(0u, 0xFFFFFFFFu, ${P} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${T}]=vec2<u32>(u32(${P}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${T}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${P}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),R=T=>(()=>{if(g.storage===g.value)return`${e}[${T}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${T}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${T}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${T}] & 0xFFu), bool(${e}[${T}] & 0xFF00u), bool(${e}[${T}] & 0xFF0000u), bool(${e}[${T}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),Y=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${c} {
    return ${R(`i2o_${e}(indices)`)};
  }`,Q=s<2?"":(()=>{let T=u.map(q=>`d${q}: u32`).join(", "),P=u.map(q=>`d${q}`).join(", ");return`
  fn get_${e}(${T}) -> ${c} {
    return get_${e}ByIndices(${$(P)});
  }`})(),ie=(...T)=>{if(T.length!==s)throw new Error(`indices length must be ${s}`);let P=T.map(b).join(",");return s===0?R("0u"):s===1?R(P[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${P})`)},_e=T=>s<2?R(T):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${T})`),W=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${c}) {
    ${X(`i2o_${e}(indices)`,"value")}
  }`,O=s<2?"":(()=>{let T=u.map(q=>`d${q}: u32`).join(", "),P=u.map(q=>`d${q}`).join(", ");return`
  fn set_${e}(${T}, value: ${c}) {
    set_${e}ByIndices(${$(P)}, value);
  }`})();return{impl:()=>{let T=[],P=!1;return y.offsetToIndices&&(T.push(I),P=!0),y.indicesToOffset&&(T.push(z),P=!0),y.broadcastedIndicesToOffset&&(Object.values(K).forEach(q=>T.push(q)),P=!0),y.set&&(T.push(O),P=!0),y.setByIndices&&(T.push(W),P=!0),y.get&&(T.push(Q),P=!0),y.getByIndices&&(T.push(Y),P=!0),!n&&P&&T.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${M.computeStrides(r).join(",")});`),T.join(`
`)},type:g,offsetToIndices:k,indicesToOffset:B,broadcastedIndicesToOffset:j,indices:$,indicesGet:N,indicesSet:V,set:(...T)=>{if(T.length!==s+1)throw new Error(`indices length must be ${s}`);let P=T[s];if(typeof P!="string")throw new Error("value must be string");let q=T.slice(0,s).map(b).join(",");return s===0?X("0u",P):s===1?X(q[0],P):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${q}, ${P})`)},setByOffset:X,setByIndices:(T,P)=>s<2?X(T,P):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${T}, ${P});`),get:ie,getByOffset:R,getByIndices:_e,usage:i,name:e,strides:v,shape:S,rank:s}},U=(e,t,r,i=1)=>pr(e,t,r,"input",i),te=(e,t,r,i=1)=>pr(e,t,r,"output",i),Gp=(e,t,r)=>pr(e,t,r,"atomicOutput",1),mn=(e,t,r,i=1)=>pr(e,t,r,"internal",i),Zo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=rr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Wp=(e,t)=>new Zo(e,t)}),Xo,ra,Yo,Qo,Jo,eu,Ze,Fp,Hp,Ot=G(()=>{"use strict";ne(),le(),Be(),de(),Xo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ra=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Yo=(e,t)=>M.sortBasedOnPerm(e,ra(e.length,t)),Qo=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},Jo=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},eu=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ze=(e,t)=>{let r=e.dataType,i=e.dims.length,a=ra(i,t),n=Yo(e.dims,a),s=e.dims,u=n,l=i<2||eu(a,e.dims),d;if(l)return d=y=>{let _=U("input",r,s,4),S=te("output",r,u,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(_,S)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=M.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:c,newPerm:h}=Jo(e.dims,a),g=M.areEqual(h,[2,3,1]),b=M.areEqual(h,[3,1,2]);if(c.length===2||g||b){s=g?[c[0],c[1]*c[2]]:b?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let y=16;return d=_=>{let S=U("a",r,s.length),v=te("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${y+1}>, ${y}>;
  ${_.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=M.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/y),y:Math.ceil(u[0]/y)},programUniforms:[{type:12,data:_},...ae(s,u)]}},getShaderSource:d}}return d=y=>{let _=U("a",r,s.length),S=te("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(_,S)}

  ${Qo(a,i,_,S)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=M.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ae(s,u)]}},getShaderSource:d}},Fp=(e,t)=>{Xo(e.inputs,t.perm),e.compute(Ze(e.inputs[0],t.perm))},Hp=e=>xe({perm:e.perm})}),tu,ru,iu,au,nu,su,ou,uu,lu,du,tt,jp,Kp,Zp,Xp,Yp,Qp,Jp,ec,tc,rc,z0=G(()=>{"use strict";ne(),le(),de(),gn(),Ot(),tu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},ru={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},iu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},au={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},nu=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},su=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},ou=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},uu=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},lu=(e,t)=>{let r=[];if(!uu(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},du=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=M.size(n),d=M.size(s),c=U("_A",r[0].dataType,u),h=te("output",a,n),g=64;l===1&&(g=256);let b=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,y=_=>`
        ${_.registerUniform("reduceSize","u32").declareVariables(c,h)}
        ${b}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${_.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${iu[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${tu[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${ru[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${au[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},tt=(e,t,r,i)=>{let a=e.inputs.length===1?r:Ga(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((b,y)=>y));let s=M.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=lu(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ze(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=nu(u.length,l.dims.length));let[c,h]=su(l.dims,u),g=c;a.keepDims&&(g=ou(c,s)),e.compute(du(t,a.cacheKey,[l],i,e.inputs[0].dataType,g,h),{inputs:[l]})},jp=(e,t)=>{tt(e,"ReduceMeanShared",t,"mean")},Kp=(e,t)=>{tt(e,"ReduceL1Shared",t,"l1")},Zp=(e,t)=>{tt(e,"ReduceL2Shared",t,"l2")},Xp=(e,t)=>{tt(e,"ReduceLogSumExpShared",t,"logSumExp")},Yp=(e,t)=>{tt(e,"ReduceMaxShared",t,"max")},Qp=(e,t)=>{tt(e,"ReduceMinShared",t,"min")},Jp=(e,t)=>{tt(e,"ReduceProdShared",t,"prod")},ec=(e,t)=>{tt(e,"ReduceSumShared",t,"sum")},tc=(e,t)=>{tt(e,"ReduceSumSquareShared",t,"sumSquare")},rc=(e,t)=>{tt(e,"ReduceLogSumShared",t,"logSum")}}),rt,pu,oi,Ga,it,cu,hu,fu,mu,gu,yu,bu,wu,_u,vu,at,ic,ac,nc,sc,oc,uc,lc,dc,pc,cc,gn=G(()=>{"use strict";ne(),le(),Be(),de(),z0(),rt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},pu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],oi=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,h=M.normalizeAxes(a,c),g=!u&&h.length===0;d.forEach((_,S)=>{g||h.indexOf(S)>=0?s&&l.push(1):l.push(_)});let b=l.length,y=M.size(l);return{name:e,shaderCache:t,getShaderSource:_=>{let S=[],v=U("_A",r[0].dataType,c),w=te("output",n,b),I=i(v,w,h),k=I[2];for(let C=0,z=0;C<c;C++)g||h.indexOf(C)>=0?(s&&z++,k=`for(var j${C}: u32 = 0; j${C} < ${d[C]}; j${C}++) {
                  ${I[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${v.indicesSet("input_indices",C,`j${C}`)}
                  ${k}
                }`):(S.push(`${v.indicesSet("input_indices",C,w.indicesGet("output_indices",z))};`),z++);return`

        ${_.registerUniform("output_size","u32").declareVariables(v,w)}

        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${k}
          ${I[3]}
          ${I.length===4?w.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ae(d,l)]})}},Ga=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),xe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},it=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Ga(a,r);e.compute(oi(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?pu:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},cu=(e,t)=>{rt(e.inputs),it(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},hu=(e,t)=>{rt(e.inputs),it(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},fu=(e,t)=>{rt(e.inputs),it(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},mu=(e,t)=>{rt(e.inputs),it(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},gu=(e,t)=>{rt(e.inputs),it(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},yu=(e,t)=>{rt(e.inputs),it(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},bu=(e,t)=>{rt(e.inputs),it(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},wu=(e,t)=>{rt(e.inputs),it(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},_u=(e,t)=>{rt(e.inputs),it(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},vu=(e,t)=>{rt(e.inputs),it(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},at=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},ic=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yu(e,t):jp(e,t)},ac=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hu(e,t):Kp(e,t)},nc=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fu(e,t):Zp(e,t)},sc=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mu(e,t):Xp(e,t)},oc=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gu(e,t):Yp(e,t)},uc=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bu(e,t):Qp(e,t)},lc=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wu(e,t):Jp(e,t)},dc=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_u(e,t):ec(e,t)},pc=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vu(e,t):tc(e,t)},cc=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cu(e,t):rc(e,t)}}),ia,hc,fc,Wa,A0=G(()=>{"use strict";ne(),Be(),gn(),ia=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},hc=(e,t)=>{ia(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(oi("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},fc=(e,t)=>{ia(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(oi("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Wa=e=>xe(e)}),$u,jr,xu,Su,Tu,Tr,Iu,mc,yn=G(()=>{"use strict";ne(),le(),fn(),de(),$u=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=a.dims[0]/3,g=h,b=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],b=t.qkvHiddenSizes[2]}let y=d;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==h+g+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let _=0;if(s){if(g!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(_=s.dims[3])}let S=y+_,v=-1,w=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:h,vHiddenSize:b,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},jr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,xu=(e,t,r,i,a,n,s,u)=>{let l=Oe(s?1:n),d=64,c=n/l;c<d&&(d=32);let h=Math.ceil(n/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:h}],b=Ne(e.dataType,l),y=Re(1,l),_=["type"];s&&_.push("type"),u&&_.push("type");let S=v=>{let w=te("x",e.dataType,e.dims,l),I=[w],k=s?U("seq_lens",s.dataType,s.dims):void 0;k&&I.push(k);let C=u?U("total_sequence_length_input",u.dataType,u.dims):void 0;C&&I.push(C);let z=Re(e.dataType),B=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(B).declareVariables(...I)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${jr(k,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${b};${l}`,inputDependencies:_},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},Su=(e,t,r,i,a,n,s,u,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],h=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,b=h?[n.batchSize,g,d,n.headSize]:void 0,y=n.nReps?n.nReps:1,_=n.scale===0?1/Math.sqrt(n.headSize):n.scale,S=Oe(n.headSize),v=n.headSize/S,w=12,I={x:Math.ceil(d/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},k=[{type:12,data:n.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:_},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:y}],C=h&&i&&M.size(i.dims)>0,z=["type","type"];C&&z.push("type"),a&&z.push("type"),u&&z.push("type"),l&&z.push("type");let B=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&B.push({dims:b,dataType:t.dataType,gpuDataType:0});let $=N=>{let V=U("q",t.dataType,t.dims,S),K=U("key",r.dataType,r.dims,S),j=[V,K];if(C){let W=U("past_key",i.dataType,i.dims,S);j.push(W)}a&&j.push(U("attention_bias",a.dataType,a.dims));let X=u?U("seq_lens",u.dataType,u.dims):void 0;X&&j.push(X);let R=l?U("total_sequence_length_input",l.dataType,l.dims):void 0;R&&j.push(R);let Y=te("output",t.dataType,c),Q=[Y];h&&Q.push(te("present_key",t.dataType,b,S));let ie=Re(1,S),_e=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${V.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${V.type.storage}, ${w*w}>;
  ${N.registerUniforms(_e).declareVariables(...j,...Q)}
  ${N.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${jr(X,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ie}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ie}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${Y.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${i!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:B,dispatchGroup:I,programUniforms:k}),getShaderSource:$}},Tu=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,d=a.nReps?a.nReps:1,c=a.vHiddenSize*d,h=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,b=h?[a.batchSize,g,l,a.headSize]:void 0,y=[a.batchSize,a.sequenceLength,c],_=12,S={x:Math.ceil(a.vHeadSize/_),y:Math.ceil(a.sequenceLength/_),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:d}],w=h&&i&&M.size(i.dims)>0,I=["type","type"];w&&I.push("type"),s&&I.push("type"),u&&I.push("type");let k=[{dims:y,dataType:t.dataType,gpuDataType:0}];h&&k.push({dims:b,dataType:t.dataType,gpuDataType:0});let C=z=>{let B=U("probs",t.dataType,t.dims),$=U("v",r.dataType,r.dims),N=[B,$];w&&N.push(U("past_value",i.dataType,i.dims));let V=s?U("seq_lens",s.dataType,s.dims):void 0;s&&N.push(V);let K=u?U("total_sequence_length_input",u.dataType,u.dims):void 0;u&&N.push(K);let j=[te("output",t.dataType,y)];h&&j.push(te("present_value",t.dataType,b));let X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;
  var<workgroup> tileQ: array<${B.type.value}, ${_*_}>;
  var<workgroup> tileV: array<${B.type.value}, ${_*_}>;
  ${z.registerUniforms(X).declareVariables(...N,...j)}
  ${z.mainStart([_,_,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${jr(V,K,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${B.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:v}),getShaderSource:C}},Tr=(e,t,r,i,a,n,s,u,l,d,c=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),b=g>1?s:void 0,y=g>1?u:void 0,_=g>1?d.pastSequenceLength:0,S=_+d.kvSequenceLength,v=l&&M.size(l.dims)>0?l:void 0,w=[t,r];b&&M.size(b.dims)>0&&w.push(b),v&&w.push(v),c&&w.push(c),h&&w.push(h);let I=e.compute(Su(g,t,r,b,v,d,_,c,h),{inputs:w,outputs:g>1?[-1,1]:[-1]})[0];e.compute(xu(I,d.batchSize,d.numHeads,_,d.sequenceLength,S,c,h),{inputs:c&&h?[I,c,h]:[I],outputs:[]});let k=[I,i];y&&M.size(y.dims)>0&&k.push(y),c&&k.push(c),h&&k.push(h),e.compute(Tu(g,I,i,y,d,_,c,h),{inputs:k,outputs:g>1?[0,2]:[0]})},Iu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let g=te("output_q",l[0].dataType,r),b=te("output_k",l[0].dataType,r),y=te("output_v",l[0].dataType,r),_=U("input",l[0].dataType,l[0].dims),S=U("weight",l[1].dataType,l[1].dims),v=U("bias",l[2].dataType,l[2].dims),w=_.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${h.registerUniforms(I).declareVariables(_,S,v,g,b,y)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},mc=(e,t)=>{let r=$u(e.inputs,t),[i,a,n]=Iu(e,r);return Tr(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),ku,Eu,Cu,gc,O0=G(()=>{"use strict";Qe(),ne(),le(),Be(),de(),ku=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Eu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?Oe(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=M.size(n)/s,d=i,c=d?n.length:n,h=U("x",e[0].dataType,e[0].dims,s),g=U("scale",e[1].dataType,e[1].dims,u),b=U("bias",e[2].dataType,e[2].dims,u),y=U("inputMean",e[3].dataType,e[3].dims,u),_=U("inputVar",e[4].dataType,e[4].dims,u),S=te("y",e[0].dataType,c,s),v=()=>{let I="";if(i)I=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")I=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let k=1;k<g.rank;k++)I+=`cIndices[${k}] = outputIndices[${k}];`;I+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return I},w=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(h,g,b,y,_,S)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${_.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ae(n)]:[{type:12,data:l}]})}},Cu=e=>xe(e),gc=(e,t)=>{let{inputs:r,outputCount:i}=e,a=Cu({...t,outputCount:i});if(Ae.webgpu.validateInputContent&&ku(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Eu(r,a))}}),zu,Au,yc,B0=G(()=>{"use strict";le(),de(),zu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Au=e=>{let t=e[0].dims,r=e[0].dims[2],i=M.size(t)/4,a=e[0].dataType,n=U("input",a,t,4),s=U("bias",a,[r],4),u=U("residual",a,t,4),l=te("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},yc=e=>{zu(e.inputs),e.compute(Au(e.inputs))}}),Ou,$e,bc,wc,_c,vc,$c,xc,Sc,Tc,Ic,Bu,kc,Ec,Cc,zc,_r,Ac,ii,Oc,Bc,Mc,Rc,Nc,Dc,Pc,Uc,Lc,qc,Vc,Gc,Wc,Fc,Hc,jc,Kc,aa,Zc,Fa,Ha,Xc,Yc,Qc,Mu,Ru,Jc,bn=G(()=>{"use strict";ne(),le(),Be(),de(),Ou=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=U("inputData",r,[u],4),c=te("outputData",i,[u],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},$e=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(M.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>Ou(d,M.size(e.dims),e.dataType,n,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(M.size(d[0].dims)/64/4)},programUniforms:l})}},bc=e=>{e.compute($e(e.inputs[0],"Abs","abs"))},wc=e=>{e.compute($e(e.inputs[0],"Acos","acos"))},_c=e=>{e.compute($e(e.inputs[0],"Acosh","acosh"))},vc=e=>{e.compute($e(e.inputs[0],"Asin","asin"))},$c=e=>{e.compute($e(e.inputs[0],"Asinh","asinh"))},xc=e=>{e.compute($e(e.inputs[0],"Atan","atan"))},Sc=e=>{e.compute($e(e.inputs[0],"Atanh","atanh"))},Tc=e=>xe(e),Ic=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute($e(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Bu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return xe({min:t,max:r})},kc=(e,t)=>{let r=t||Bu(e.inputs),i=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Ec=e=>{e.compute($e(e.inputs[0],"Ceil","ceil"))},Cc=e=>{e.compute($e(e.inputs[0],"Cos","cos"))},zc=e=>{e.compute($e(e.inputs[0],"Cosh","cosh"))},_r=e=>xe(e),Ac=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ii=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Oc=e=>{let t=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ii(t)))},Bc=e=>{e.compute($e(e.inputs[0],"Exp","exp"))},Mc=e=>{e.compute($e(e.inputs[0],"Floor","floor"))},Rc=e=>{let t=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ii(t)))},Nc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Dc=e=>{e.compute($e(e.inputs[0],"Not",t=>`!${t}`))},Pc=e=>{e.compute($e(e.inputs[0],"Neg",t=>`-${t}`))},Uc=e=>{e.compute($e(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Lc=e=>{let t=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},qc=e=>{e.compute($e(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Vc=e=>xe(e),Gc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Wc=e=>{let t=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},Fc=e=>{e.compute($e(e.inputs[0],"Sin","sin"))},Hc=e=>{e.compute($e(e.inputs[0],"Sinh","sinh"))},jc=e=>{e.compute($e(e.inputs[0],"Sqrt","sqrt"))},Kc=e=>{e.compute($e(e.inputs[0],"Tan","tan"))},aa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Zc=e=>{e.compute($e(e.inputs[0],"Tanh",aa))},Fa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${aa("v")};
}
`,Ha=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Xc=e=>{let t=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"FastGelu",Ha,Fa(t),void 0,e.inputs[0].dataType))},Yc=(e,t)=>{let r=Re(e.inputs[0].dataType);return e.compute($e(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Qc=e=>{e.compute($e(e.inputs[0],"Log","log"))},Mu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Ru=e=>`quick_gelu_impl(${e})`,Jc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute($e(e.inputs[0],"QuickGelu",Ru,Mu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Nu,Du,eh,M0=G(()=>{"use strict";le(),de(),bn(),Nu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Du=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=U("input",e[0].dataType,e[0].dims,4),i=U("bias",e[0].dataType,[e[0].dims[2]],4),a=te("output",e[0].dataType,t,4),n=M.size(t)/4,s=Ne(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${ii(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},eh=e=>{Nu(e.inputs),e.compute(Du(e.inputs))}}),Pu,Uu,nt,th,rh,ih,ah,nh,sh,oh,uh,lh,dh,R0=G(()=>{"use strict";ne(),le(),de(),Pu=(e,t,r,i,a,n,s,u,l,d,c,h)=>{let g,b;typeof u=="string"?g=b=(w,I)=>`${u}((${w}),(${I}))`:typeof u=="function"?g=b=u:(g=u.scalar,b=u.vector);let y=te("outputData",c,i.length,4),_=U("aData",l,t.length,4),S=U("bData",d,r.length,4),v;if(a)if(n){let w=M.size(t)===1,I=M.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;w||I?v=y.setByOffset("global_idx",b(w?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"),I?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${_.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",b(s||k?_.getByOffset("offsetA / 4u"):`${_.type.value}(${_.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||C?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=y.setByOffset("global_idx",b(_.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(I,k,C="")=>{let z=`aData[indexA${k}][componentA${k}]`,B=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${y.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${_.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${I}[${k}] = ${C}(${g(z,B)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(_,S,y)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Uu=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),d=!M.areEqual(u,l),c=u,h=M.size(u),g=!1,b=!1,y=[d];if(d){let _=tr.calcShape(u,l,!1);if(!_)throw new Error("Can't perform binary op on the given tensors");c=_.slice(),h=M.size(c);let S=M.size(u)===1,v=M.size(l)===1,w=u.length>0&&u[u.length-1]%4===0,I=l.length>0&&l[l.length-1]%4===0;y.push(S),y.push(v),y.push(w),y.push(I);let k=1;for(let C=1;C<c.length;C++){let z=u[u.length-C],B=l[l.length-C];if(z===B)k*=z;else break}k%4===0?(b=!0,g=!0):(S||v||w||I)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map(_=>_.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:_=>Pu(_,u,l,c,g,d,b,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(M.size(c)/4)},...ae(u,l,c)]})}},nt=(e,t,r,i,a,n)=>{e.compute(Uu(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},th=e=>{nt(e,"Add",(t,r)=>`${t}+${r}`)},rh=e=>{nt(e,"Div",(t,r)=>`${t}/${r}`)},ih=e=>{nt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},ah=e=>{nt(e,"Mul",(t,r)=>`${t}*${r}`)},nh=e=>{let t=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;nt(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},sh=e=>{nt(e,"Sub",(t,r)=>`${t}-${r}`)},oh=e=>{nt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},uh=e=>{nt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},lh=e=>{nt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},dh=e=>{nt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Lu,qu,Vu,Gu,ph,ch,N0=G(()=>{"use strict";ne(),le(),Be(),de(),Lu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},qu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Vu=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},Gu=(e,t,r,i)=>{let a=M.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:a}];for(let _=0;_<e.length;++_)u+=e[_].dims[t],n[_]=u,d.push(e[_].dims.length),s[_]=U(`input${_}`,i,d[_]),l.push("rank"),c.push({type:12,data:n[_]});for(let _=0;_<e.length;++_)c.push(...ae(e[_].dims));c.push(...ae(r));let h=te("output",i,r.length),g=h.indicesGet("indices",t),b=Array.from(Array(n.length).keys()).map(_=>`uniforms.sizeInConcatAxis${_}`).join(","),y=_=>`

  ${(()=>{_.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)_.registerUniform(`sizeInConcatAxis${S}`,"u32");return _.declareVariables(...s,h)})()}

  ${qu(n.length,b)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${b});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Vu(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:y}},ph=(e,t)=>{let r=e.inputs,i=r[0].dims,a=M.normalizeAxis(t.axis,i.length);Lu(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>M.size(u.dims)>0);e.compute(Gu(s,a,n,r[0].dataType),{inputs:s})},ch=e=>xe({axis:e.axis})}),Ft,Ht,jt,wn,Zt=G(()=>{"use strict";ne(),le(),Ft=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ht=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},jt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},wn=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Dp,Pp];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ue,hh,_n=G(()=>{"use strict";Ue=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},hh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),fh,D0=G(()=>{"use strict";fh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),$r,vn,$n=G(()=>{"use strict";ne(),le(),de(),Zt(),$r=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${re(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,re(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},vn=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],h=Oe(d),g=Oe(c),b=Oe(l),y=M.size(r)/h/b,_=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),v=[M.size(S),l,d],w=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Ht(t,w),w.push(...ae(S,s,u)),_&&w.push(...ae(e[2].dims)),w.push(...ae(v));let I=k=>{let C=mn("batch_dims",e[0].dataType,S.length),z=U("a",e[0].dataType,s.length,g),B=U("b",e[1].dataType,u.length,h),$=te("output",e[0].dataType,v.length,h),N=Ne($.type.tensor),V=Ft(t,$.type.value,N),K=[z,B],j="";if(_){let Y=a?h:1;K.push(U("bias",e[2].dataType,e[2].dims.length,Y)),j=`${a?`value += bias[col / ${Y}];`:`value += ${$.type.value}(bias[row + i]);`}`}let X=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];jt(t,X);let R=()=>{let Y=`var a_data: ${z.type.value};`;for(let Q=0;Q<g;Q++)Y+=`
              let b_data${Q} = b[(b_offset + (k + ${Q}) * uniforms.N + col) / ${h}];`;for(let Q=0;Q<b;Q++){Y+=`a_data = a[(a_offset + (row + ${Q}) * uniforms.K + k) / ${g}];`;for(let ie=0;ie<g;ie++)Y+=`
            values[${Q}] = fma(${B.type.value}(a_data${g===1?"":`[${ie}]`}), b_data${ie}, values[${Q}]);
`}return Y};return`
  ${k.registerUniforms(X).registerInternalVariables(C).declareVariables(...K,$)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${$r("a_indices",z,z.rank-2,C.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${B.type.indices};
    ${$r("b_indices",B,B.rank-2,C.rank,"batch_indices")}
    ${B.indicesSet("b_indices",B.rank-2,0)}
    ${B.indicesSet("b_indices",B.rank-1,0)}
    let b_offset = ${B.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${b}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${R()}
    }
    for (var i = 0u; i < ${b}u; i++) {
      var value = values[i];
      ${j}
      ${V}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${b};${a}`,inputDependencies:_?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:w}),getShaderSource:I}}}),Wu,Fu,ja,na,Hu,Ka,ju,ui,xn=G(()=>{"use strict";ne(),le(),de(),Zt(),$n(),_n(),Wu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Fu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ja=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=a?l:n,h=a?n:l,g=c/t[0],b=n/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${c/g}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${b};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Wu(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Fu(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},na=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Hu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ka=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],h=a?d:n,g=a?n:d;if(!(g%t[1]===0&&h%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let b=g/t[1],y=h/t[0],_=n/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${na(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${b};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${_};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${na(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Hu(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},ju=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,d=Ne(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ue(e,d)} {
      var value = ${Ue(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${$r("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ue(e,d)} {
      var value = ${Ue(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${$r("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ue(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ue(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ui=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),h=M.size(c),g=s[s.length-2],b=s[s.length-1],y=u[u.length-1],_=b%4===0&&y%4===0,S=g<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(y/v[0]/S[0]),Math.ceil(g/v[1]/S[1]),Math.ceil(h/v[2]/S[2])],I=_?4:1,k=[...l,g,b/I],C=k.length,z=[...d,b,y/I],B=z.length,$=[h,g,y/I],N=[{type:6,data:g},{type:6,data:y},{type:6,data:b}];Ht(t,N),N.push(...ae(c,k,z));let V=["rank","rank"],K=e.length>2;K&&(N.push(...ae(e[2].dims)),V.push("rank")),N.push(...ae($));let j=X=>{let R=c.length,Y=mn("batchDims",e[0].dataType,R,1),Q=Ne(e[0].dataType),ie=U("a",e[0].dataType,C,I),_e=U("b",e[1].dataType,B,I),W=te("result",e[0].dataType,$.length,I),O=[ie,_e];if(K){let J=a?I:1;O.push(U("bias",e[2].dataType,e[2].dims.length,J))}let T=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];jt(t,T);let P=Ne(W.type.tensor),q=Ft(t,W.type.value,P),L=ju(I,K,q,[Y,ie,_e,W],a);return`
  ${X.registerUniforms(T).registerInternalVariables(Y).declareVariables(...O,W)}
  ${L}
  ${_?ja(S,v,Q,Y):Ka(S,v,Q,Y)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${_};${a}`,inputDependencies:V},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:N}),getShaderSource:j}}}),Ku,mh,P0=G(()=>{"use strict";ne(),_t(),de(),Zt(),_n(),D0(),xn(),Ku=(e,t,r,i,a=!1,n,s=4,u=4,l=4,d="f32")=>{let c=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,b=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",_=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ue(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${_}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,I=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ue(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ue(s,d)}(0.0);`,k=e?i&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Ue(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Ue(u,d)}(0.0);`,C=Ue(l,d),z=Ue(e?s:u,d),B=Ue(e?u:s,d),$=Ft(n,C,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?I:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${B} {
      ${e?k:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${b}
      ${hh(a)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},mh=(e,t,r,i,a,n,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],h=r[0],g=d?r[2]:r[3],b=d?r[1]:r[2],y=d?r[3]:r[1],_=d&&(c%4===0||c%3===0)&&y%4===0,S=d?y:g*b,v=d?g*b:y,w=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/w[0]/I[0]),Math.ceil(v/w[1]/I[1]),Math.ceil(h/w[2]/I[2])];we("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let C=_?d&&c%4!==0?3:4:1,z=w[1]*I[1],B=w[0]*I[0],$=Math.max(w[0]*C,w[1]),N=i%z===0,V=a%B===0,K=n%$===0,j=_?[C,4,4]:[1,1,1],X=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ht(t,X),X.push(...ae(e[0].dims,e[1].dims));let R=["rank","rank"];s&&(X.push(...ae(e[2].dims)),R.push("rank")),X.push(...ae(r));let Y=Q=>{let ie=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];jt(t,ie);let _e=_?4:1,W=Ne(e[0].dataType),O=`
      fn setOutputAtIndex(flatIndex : i32, value : ${_?`vec4<${W}>`:W}) {
        result[flatIndex] = ${_?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${_?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${_?"/ 4":""}, value);
      }`,T=U("x",e[0].dataType,e[0].dims.length,C===3?1:C),P=U("w",e[1].dataType,e[1].dims.length,_e),q=[T,P],L=te("result",e[0].dataType,r.length,_e);if(s){let J=U("bias",e[2].dataType,e[2].dims.length,_e);q.push(J),O+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${_?`vec4<${W}>`:W} {
          return bias[coords.${d?"w":"y"}${_?"/ 4":""}];
        }`}return`
        ${fh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Q.registerUniforms(ie).declareVariables(...q,L)}
        ${O}
        ${Ku(d,N,V,K,s,t,j[0],j[1],j[2],W)}
        ${_?ja(I,w,W,void 0,!d,$):Ka(I,w,W,void 0,!d,$,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${_};${N};${V};${K};${z};${B};${$}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:X}),getShaderSource:Y}}}),Zu,sa,cr,Xu,oa,Yu,gh,yh,U0=G(()=>{"use strict";ne(),_t(),le(),de(),Zt(),_n(),Zu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},sa=e=>typeof e=="number"?[e,e,e]:e,cr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Xu=(e,t,r,i=1)=>{let a=cr(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},oa=(e,t,r,i,a)=>{a==null&&(a=Xu(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Yu=(e,t,r,i,a,n,s,u,l,d)=>{let c,h,g,b;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=oa([t,r,i,1],[u,l,d],1,[a,n,s],e);h=y[0],g=y[1],b=y[2]}else if(Array.isArray(e)){if(!e.every((_,S,v)=>_===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=oa([t,r,i,1],[u,l,d],1,[a,n,s],e[0]);h=y[0],g=y[1],b=y[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/a),g=Math.ceil(r/n),b=Math.ceil(i/s);let y=(h-1)*a+u-t,_=(g-1)*n+l-r,S=(b-1)*s+d-i,v=Math.floor(y/2),w=y-v,I=Math.floor(_/2),k=_-I,C=Math.floor(S/2),z=S-C;c={top:I,bottom:k,left:C,right:z,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:g,outWidth:b}},gh=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,d,c,h;if(s==="channelsLast")[u,l,d,c,h]=e;else if(s==="channelsFirst")[u,h,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,b,y,_]=t,[S,v,w]=sa(r),[I,k,C]=sa(i),z=cr(b,I),B=cr(y,k),$=cr(_,C),{padInfo:N,outDepth:V,outHeight:K,outWidth:j}=Yu(a,l,d,c,S,v,w,z,B,$),X=n?g*h:g,R=[0,0,0,0,0];return s==="channelsFirst"?R=[u,X,V,K,j]:s==="channelsLast"&&(R=[u,V,K,j,X]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:V,outHeight:K,outWidth:j,outChannels:X,padInfo:N,strideDepth:S,strideHeight:v,strideWidth:w,filterDepth:b,filterHeight:y,filterWidth:_,effectiveFilterDepth:z,effectiveFilterHeight:B,effectiveFilterWidth:$,dilationDepth:I,dilationHeight:k,dilationWidth:C,inShape:e,outShape:R,filterShape:t}},yh=(e,t,r,i,a,n)=>{let s=n==="channelsLast",u=s?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],c={x:r.map((w,I)=>I)},h=[Math.ceil(Zu(c.x.map(w=>r[w]))/d[0]),1,1];we("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${h}`);let g=l?s&&u%4!==0?3:4:1,b=M.size(r),y=[{type:12,data:b},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Ht(t,y),y.push(...ae(e[0].dims,e[1].dims));let _=["rank","rank"],S=e.length===3;S&&(y.push(...ae(e[2].dims)),_.push("rank")),y.push(...ae(r));let v=w=>{let I=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];jt(t,I);let k=l?4:1,C=Ne(e[0].dataType),z=U("x",e[0].dataType,e[0].dims.length,g===3?1:g),B=U("W",e[1].dataType,e[1].dims.length,k),$=[z,B],N=te("result",e[0].dataType,r.length,k),V="";if(S){let X=U("bias",e[2].dataType,e[2].dims.length,k);$.push(X),V+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${C}>`:C} {
          return bias[${s?re("coords",4,5):re("coords",1,5)}${l?"/ 4":""}];
        }`}let K=Ue(g,C),j=Ft(t,K,C);return`
            ${V}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${z.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${B.getByIndices("aIndices")};
            }
          ${w.registerUniforms(I).declareVariables(...$,N)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${N.offsetToIndices("global_idx")};
              let batch = ${re("coords",0,z.rank)};
              let d2 = ${s?re("coords",z.rank-1,z.rank):re("coords",1,z.rank)};
              let xFRCCorner = vec3<u32>(${s?re("coords",1,z.rank):re("coords",2,z.rank)},
              ${s?re("coords",2,z.rank):re("coords",3,z.rank)},
              ${s?re("coords",3,z.rank):re("coords",4,z.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?re("uniforms.x_shape",1,z.rank):re("uniforms.x_shape",2,z.rank)};
              let xShapeZ = ${s?re("uniforms.x_shape",2,z.rank):re("uniforms.x_shape",3,z.rank)};
              let xShapeW = ${s?re("uniforms.x_shape",3,z.rank):re("uniforms.x_shape",4,z.rank)};
              let xShapeU = ${s?re("uniforms.x_shape",4,z.rank):re("uniforms.x_shape",1,z.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${S?"value = value + getBiasByOutputCoords(coords)":""};
              ${j}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${g};${S}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:h[0],y:h[1],z:h[2]},programUniforms:y}),getShaderSource:v}}}),bh,wh,L0=G(()=>{"use strict";ne(),le(),de(),Zt(),bh=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,h=l&&c>=4?Oe(d):1,g=M.size(r)/h,b=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Ht(t,b),b.push(...ae(s,[u[0],u[1],u[2],u[3]/h]));let y=a?["rank","rank","rank"]:["rank","rank"];b.push(...ae([r[0],r[1],r[2],r[3]/h]));let _=S=>{let v=te("output",e[0].dataType,r.length,h),w=Ne(v.type.tensor),I=Ft(t,v.type.value,w),k=U("x",e[0].dataType,s.length),C=U("w",e[1].dataType,u.length,h),z=[k,C];a&&z.push(U("b",e[2].dataType,e[2].dims,h));let B=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];jt(t,B);let $=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(B).declareVariables(...z,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${$}
    ${n}
    ${I}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:_}},wh=(e,t,r,i)=>{let a=e.length>2,n=Oe(r[3]),s=Oe(r[2]),u=M.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ht(t,h),h.push(...ae(l,d,c));let g=(s-1)*t.strides[1]+d[1],b=y=>{let _=te("output",e[0].dataType,c.length,n),S=Ne(_.type.tensor),v=Ft(t,_.type.value,S),w=U("x",e[0].dataType,l.length,n),I=U("w",e[1].dataType,d.length,n),k=[w,I];a&&k.push(U("b",e[2].dataType,e[2].dims,n));let C=a?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return jt(t,z),`
  ${y.registerUniforms(z).declareVariables(...k,_)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${g}>;
    var values: array<${_.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${C}
      ${v}
      ${_.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${g};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:b}}}),Qu,Kr,Ju,Zr,Za,ua,el,tl,Xa,q0=G(()=>{"use strict";le(),P0(),U0(),xn(),L0(),Zt(),$n(),Ot(),Qu=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,d=t[0],c=t.slice(2).map((g,b)=>g+(g-1)*(r[b]-1)),h=u.map((g,b)=>g+i[b]+i[b+l]).map((g,b)=>Math.floor((g-c[b]+a[b])/a[b]));return h.splice(0,0,s),h.splice(n?3:1,0,d),h},Kr=[2,3,1,0],Ju=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Zr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();si.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},Za=e=>{let t=wn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ua=(e,t,r,i)=>{let a=r.format==="NHWC",n=Qu(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let z=[t[0]];if(a){let B=e.kernelCustomData.wT??e.compute(Ze(t[1],Kr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=B),z.push(B)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(wh(z,r,n,i),{inputs:z}):e.compute(bh(z,r,n,i),{inputs:z});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],c=t[1].dims[2],h=t[1].dims[3],g=n[a?1:2],b=n[a?2:3],y=n[a?3:1],_=a&&c===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(_||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=n[0],B,$,N,V=[];if(a){let X=e.kernelCustomData.wT??e.compute(Ze(t[1],Kr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=X),_){let R=u*l*d;B=t[0].reshape([1,z,R]),$=X.reshape([1,R,y]),N=[1,z,y]}else B=t[0].reshape([z,u*l,d]),$=X.reshape([1,d,y]),N=[z,g*b,y];V.push(B),V.push($)}else B=t[0].reshape([z,d,u*l]),$=t[1].reshape([1,y,d]),N=[z,y,g*b],V.push($),V.push(B);s&&V.push(t[2]);let K=N[2],j=V[0].dims[V[0].dims.length-1];K<8&&j<8?e.compute(vn(V,r,n,N,a,i),{inputs:V}):e.compute(ui(V,r,n,N,a,i),{inputs:V});return}let S=!0,v=e.kernelCustomData.wT??e.compute(Ze(t[1],Kr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];s&&w.push(t[2]);let I=a?g*b:y,k=a?y:g*b,C=c*h*d;e.compute(mh(w,r,n,I,k,C,s,S,i),{inputs:w})},el=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Zr({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);ua(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},tl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Zr(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=gh(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(yh(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Xa=(e,t)=>{if(Ju(e.inputs,t),e.inputs[0].dims.length===3)el(e,t);else if(e.inputs[0].dims.length===5)tl(e,e.inputs,t);else{let r=Zr(t,e.inputs);ua(e,e.inputs,r)}}}),_h,V0=G(()=>{"use strict";ne(),_t(),le(),de(),_h=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=n?Oe(l):1,h=n&&d===1&&l>=4,g=h?Math.floor(l/4)*4:Math.floor(l/c)*c,b=l-g,y=n?Oe(d):1,_=n?d===1?c:y:1,S=M.size(a)/y,v=[Math.ceil(S/64),1,1];we("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],I=[t.strides[0],t.strides[1]],k=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],C=[t.dilations[0],t.dilations[1]],z=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],B=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:I},{type:12,data:k},{type:12,data:C},{type:12,data:z},{type:6,data:B},{type:12,data:g},{type:12,data:l},{type:12,data:d},...ae(e[0].dims,e[1].dims)];i&&($.push(...ae(e[2].dims)),w.push("rank")),$.push(...ae(a));let N=V=>{let K=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:B.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],j=Ne(e[0].dataType),X=n?1:2,R=n?2:3,Y=n?3:1,Q=U("W",e[1].dataType,e[1].dims.length,_),ie=U("Dy",e[0].dataType,e[0].dims.length,c),_e=[ie,Q];i&&_e.push(U("bias",e[2].dataType,[a[Y]].length,y));let W=te("result",e[0].dataType,a.length,y),O=()=>{let q="";if(h)c===4?q+=`
        let xValue = ${ie.getByOffset("x_offset")};
        let wValue = ${Q.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?q+=`
          dotProd = dotProd + dot(vec4<${j}>(${ie.getByOffset("x_offset")}, ${ie.getByOffset("x_offset + 1u")}), vec4<${j}>(${Q.getByOffset("w_offset")}, ${Q.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(q+=`
          dotProd = dotProd + dot(vec4<${j}>(${ie.getByOffset("x_offset")}, ${ie.getByOffset("x_offset + 1u")}, ${ie.getByOffset("x_offset + 2u")}, ${ie.getByOffset("x_offset + 3u")}), vec4<${j}>(${Q.getByOffset("w_offset")}, ${Q.getByOffset("w_offset + 1u")}, ${Q.getByOffset("w_offset + 2u")}, ${Q.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(q+=`
                  let xValue = ${n?ie.getByOffset(`${ie.indicesToOffset(`${ie.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):ie.get("batch","inputChannel","idyR","idyC")};
        `,c===1)q+=`
          let w_offset = ${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Q.getByOffset(`w_offset / ${_}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let L=0;L<c;L++)q+=`
            let wValue${L} = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${L}, wOutChannel)`)} / ${_}`)};
            dotProd = dotProd + xValue[${L}] * wValue${L};`;return q},T=()=>{if(b===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let q="";if(c===1){q+="dotProd = dotProd";for(let L=0;L<b;L++)q+=`
            + ${ie.getByOffset(`x_offset + ${L}`)} * ${Q.getByOffset(`w_offset + ${L}`)}`;q+=";"}else if(c===2){if(b!==2)throw new Error(`Invalid inputChannelsRemainder ${b}.`);q+=`
          let xValue = ${ie.getByOffset("x_offset")};
          let wValue = ${Q.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return q},P=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",Y)};
            let r = ${W.indicesGet("outputIndices",X)};
            let c = ${W.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${W.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${j}(dyRCorner) + ${j}(wR)) / ${j}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${j}(uniforms.Dy_shape[${X}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${j}(dyCCorner) + ${j}(wC)) / ${j}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${j}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${ie.indicesToOffset(`${ie.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${Q.indicesToOffset(`${Q.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${_};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:c}) {
                  ${O()}
                  inputChannel = inputChannel + ${h?4:c};
                }
                ${T()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${V.registerUniforms(K).declareVariables(..._e,W)}
      ${V.mainStart()}
      ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${P}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${_}${y}${h}${b}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:N}}}),rl,il,al,la,vh,nl,da,sl,$h,G0=G(()=>{"use strict";V0(),Zt(),Ot(),rl=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,il=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},al=(e,t,r,i,a,n,s,u,l,d)=>{let c=e.length-2,h=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let g=e[0],b=t[u?3:1]*a;for(let y=0,_=e.length-c-(u?1:0);y<c;++y,++_){let S=e[_],v=h?S*s[y]:d[y],w=rl(S,s[y],n[y],t[_],r[y],v);il(w,i,n,y,y+c),h&&d.push(s[y]*(S-1)+l[y]+(t[_]-1)*r[y]+1-n[y]-n[y+c])}d.splice(0,0,g),d.splice(u?3:1,0,b)},la=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}al(u,r,l,e.autoPad,e.group,a,d,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},vh=e=>{let t=wn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group??1,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:h,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},nl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},da=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Ze(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(_h(n,r,i),{inputs:n})},sl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=la({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);da(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},$h=(e,t)=>{if(nl(e.inputs,t),e.inputs[0].dims.length===3)sl(e,t);else{let r=la(t,e.inputs);da(e,e.inputs,r)}}}),ol,xh,Sh,W0=G(()=>{"use strict";ne(),le(),Be(),de(),ol=(e,t,r,i)=>{let a=M.size(t),n=t.length,s=U("input",e,n),u=te("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=M.normalizeAxis(l,n),c=h=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,b=re("uniforms.input_shape","uniforms.axis",n),y=i.reverse?g+(i.exclusive?" + 1":""):"0",_=i.reverse?b:g+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${_};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...ae(t,t)]}),getShaderSource:c}},xh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(ol(i,r,a,t),{inputs:[0]})},Sh=e=>{let t=e.exclusive===1,r=e.reverse===1;return xe({exclusive:t,reverse:r})}}),ul,ll,dl,Th,Ih,F0=G(()=>{"use strict";ne(),le(),Be(),de(),ul=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ll=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},dl=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=c?[r,i,a,d,d,n/d**2]:[r,i,a,n/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,i,a]:[r,n/d**2,d,d,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),g=h.dims.length,b=e.dataType,y=U("a",b,g),_=te("output",b,g),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(y,_)}

  ${ll(u,g,y,_)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=l?[r,i*d,a*d,n/d**2]:[r,n/d**2,i*d,a*d],I=M.size(w),k=h.dims,C=M.sortBasedOnPerm(k,u);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ae(k,C)]}},getShaderSource:S}},Th=(e,t)=>{ul(e.inputs),e.compute(dl(e.inputs[0],t))},Ih=e=>xe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),yt,hr,Xr,pa,Tt,pl,cl,hl,ca,ha,fa,fl,ml,ma,gl,kh,Eh,H0=G(()=>{"use strict";ne(),le(),Be(),de(),yt=256,hr=512,Xr=2*Math.PI,pa=e=>{let t=[],r=e;for(let i of[4,2,3,5])for(;r%i===0;)t.push(i),r/=i;return r===1?t:void 0},Tt=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},pl=(e,t,r,i,a)=>{let n=r/e,s=hr-i,u=d=>`smem[${s}u + base + ${d*t}u]`,l=`  for (var t = local_idx; t < ${n}u; t += ${yt}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let d=0;d<e;d++){let c=`${i}u + t + ${d*n}u`;if(d===0)l+=`    leg[0] = smem[${c}];
`;else{let h=a*Xr*d/(e*t);l+=`    { let a = ${Tt(h)} * angleUnit; leg[${d}] = cmul(smem[${c}], vec2<f32>(cos(a), sin(a))); }
`}}if(l+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)l+=`    ${u(0)} = leg[0] + leg[1];
    ${u(1)} = leg[0] - leg[1];
`;else if(e===4){let d=a<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";l+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,l+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,l+=`    let oddRot = ${d};
`,l+=`    ${u(0)} = evenSum + oddSum;
    ${u(1)} = evenDiff + oddRot;
`,l+=`    ${u(2)} = evenSum - oddSum;
    ${u(3)} = evenDiff - oddRot;
`}else for(let d=0;d<e;d++){let c=["leg[0]"];for(let h=1;h<e;h++){let g=a*Xr*(h*d)/e,b=Tt(Math.cos(g)),y=Tt(Math.sin(g));c.push(`vec2<f32>(leg[${h}].x*${b} - leg[${h}].y*${y}, leg[${h}].x*${y} + leg[${h}].y*${b})`)}l+=`    ${u(d)} = ${c.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},cl=(e,t,r)=>{let i="",a=1,n=0;for(let s of e)i+=pl(s,a,t,n,r),a*=s,n=hr-n;return{code:i,resultOffset:n}},hl=(e,t,r,i,a)=>{let n=e.dims,s=n.length,u=n[s-1],l=n[t],d=r&&i?(l-1)*2:l;a!==void 0&&(d=a);let c=r&&i?1:2,h=i&&!r?Math.floor(d/2)+1:d,g=n.slice();g[t]=h,g[s-1]=c;let b=1;for(let _=t+1;_<s-1;_++)b*=n[_];let y=M.size(n)/u/l;return{dataType:e.dataType,outputDims:g,length:d,signalLength:l,inner:b,batch:y,inputComponents:u,outputComponents:c,outputLength:h,inverse:r,onesided:i}},ca=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),ha=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],fa=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),fl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:a,inverse:n,onesided:s}=e,u=Re(t),l=n?1:-1,d=n?1/r:1,c=pa(r),h=g=>{let b=U("x",t,[1]),y=te("y",t,[1]),_=C=>{let z=`inBase + (${C}) * uniforms.inner * ${i}u`,B=`f32(${b.getByOffset(z)})`,$=i===2?`f32(${b.getByOffset(`${z} + 1u`)})`:"0.0";return`vec2<f32>(${B}, ${$})`},S;if(n&&s){let C=Math.floor(r/2)+1,z=r%2===0?`select(provided, provided - 1u, provided == ${C}u)`:"provided";S=`
    let provided = min(uniforms.signalLength, ${C}u);
    for (var i = local_idx; i < ${r}u; i += ${yt}u) {
      if (i < provided) { smem[i] = ${_("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${z}; k += ${yt}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else S=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${yt}u) {
      if (i < loadCount) { smem[i] = ${_("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:v,resultOffset:w}=cl(c,r,l),I=d===1?`smem[${w}u + i]`:`smem[${w}u + i] * ${Tt(d)}`,k=a===2?y.setByOffset("off + 1u",`${u}(v.y)`):"";return`
  ${fa(g,b,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*hr}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${g.mainStart(yt)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    ${S}
${v}    for (var i = local_idx; i < uniforms.outputLength; i += ${yt}u) {
      let v = ${I};
      let off = outBase + i * uniforms.inner * ${a}u;
      ${y.setByOffset("off",`${u}(v.x)`)}
      ${k}
    }
  }`};return{name:"DFT",shaderCache:{hint:ca(e,"fft"),inputDependencies:["type"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:ha(e),dispatchGroup:{x:e.batch}})}},ml=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:a,inverse:n,onesided:s}=e,u=Re(t),l=n?1:-1,d=n?1/r:1,c=h=>{let g=U("x",t,[1]),b=te("y",t,[1]),y=I=>{let k=`inBase + (${I}) * uniforms.inner * ${i}u`,C=`f32(${g.getByOffset(k)})`,z=i===2?`f32(${g.getByOffset(`${k} + 1u`)})`:"0.0";return`vec2<f32>(${C}, ${z})`},_=n&&s?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(r/2)+1}u);
    if (k < provided) { return ${y("k")}; }
    let m = ${r}u - k;
    if (m < provided) {
      let h = ${y("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${y("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,S=`
      let angle = ${Tt(l*Xr)} * f32(knMod) / ${Tt(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,v=a===2?b.setByOffset("off + 1u",`${u}(v.y)`):"",w=d===1?"acc":`acc * ${Tt(d)}`;return`
  ${fa(h,g,b)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${_}
  ${h.mainStart(yt)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${yt}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${S}
      }
      let v = ${w};
      let off = outBase + k * uniforms.inner * ${a}u;
      ${b.setByOffset("off",`${u}(v.x)`)}
      ${v}
    }
  }`};return{name:"DFT",shaderCache:{hint:ca(e,"direct"),inputDependencies:["type"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:ha(e),dispatchGroup:{x:e.batch}})}},ma=e=>{if(!e||e.dataType===0)return;if(M.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},gl=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},kh=(e,t)=>{gl(e.inputs);let r=e.inputs[0],i=r.dims.length,a=t.inverse!==0,n=t.onesided!==0,s=ma(e.inputs[1]);if(s!==void 0&&s<=0)throw new Error("dft_length must be greater than zero.");let u=M.normalizeAxis(ma(e.inputs[2])??t.axis,i);if(u===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(a&&n&&r.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=hl(r,u,a,n,s);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let d=l.length<=hr&&pa(l.length)!==void 0?fl(l):ml(l);e.compute(d,{inputs:[0]})},Eh=e=>xe({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Yr,fr,ga,yl,bl,wl,_l,ya,vl,Ch,zh,j0=G(()=>{"use strict";ne(),le(),Be(),de(),Yr="[a-zA-Z]|\\.\\.\\.",fr="("+Yr+")+",ga="^"+fr+"$",yl="("+fr+",)*"+fr,bl="^"+yl+"$",wl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},_l=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(bl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,s)=>{let u=e[s].dims.slice();if(!n.match(RegExp(ga)))throw new Error("Invalid LHS term");let l=this.processTerm(n,!0,u,s);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,s])=>s.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(fr)))throw new Error("Invalid RHS");(a=i.match(RegExp(Yr,"g")))==null||a.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(n);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(ga))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Yr,"g")),d=new wl(i);return l==null||l.forEach((c,h)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let g=a-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<s.length;b++){let y=String.fromCharCode(48+b);d.addSymbol(y,h+b),this.addSymbol(y,r[u++],i)}}else d.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},ya=e=>e+"_max",vl=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,c)=>U(`input${c}`,t,d)),n=M.size(i),s=te("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],h="var prod = 1.0;",g="var sum = 0.0;",b="sum += prod;",y=[],_=[],S=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,C)=>{var z;if(r.rhs.symbolToIndices.has(C)){let B=(z=r.rhs.symbolToIndices.get(C))==null?void 0:z[0];B!==void 0&&r.lhs.forEach(($,N)=>{if(k.inputIndices.includes(N)){let V=$.symbolToIndices.get(C);if(V===void 0)throw new Error("Invalid symbol error");V.forEach(K=>{c.push(`${a[N].indicesSet(`input${N}Indices`,K,s.indicesGet("outputIndices",B))}`)})}})}else r.lhs.forEach((B,$)=>{if(k.inputIndices.includes($)){let N=B.symbolToIndices.get(C);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(V=>{y.push(`${a[$].indicesSet(`input${$}Indices`,V,`${C}`)}`)}),v.push(`prod *= ${a[$].getByIndices(`input${$}Indices`)};`)}}),_.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${ya(C)}; ${C}++) {`),S.push("}")});let I=w?[...c,`let sum = ${a.map((k,C)=>k.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...c,g,..._,...y,h,...v,b,...S];return`
            ${d.registerUniforms(u.map(k=>({name:`${ya(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((k,C)=>`var input${C}Indices: ${a[C].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(h=>r.symbolToInfo.has(h)).map(h=>{var g;return{type:12,data:((g=r.symbolToInfo.get(h))==null?void 0:g.dimValue)||0}});d.push({type:12,data:n});let c=e.map((h,g)=>[...ae(h)]).reduce((h,g)=>h.concat(g),d);return c.push(...ae(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},Ch=(e,t)=>{let r=new _l(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(vl(a,e.inputs[0].dataType,r,i))},zh=e=>{let t=e.equation.replace(/\s+/g,"");return xe({equation:t})}}),$l,ba,xl,Sl,Ah,K0=G(()=>{"use strict";ne(),le(),de(),$l=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ba=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},xl=(e,t)=>e.length>t.length?ba(e,t):ba(t,e),Sl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=xl(t,r),a=e[0].dataType,n=a===9||M.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(M.size(i)/u),d=h=>{let g=U("input",a,t.length,s),b=te("output",a,i.length,u),y;if(a===9){let _=(S,v,w="")=>`
          let outputIndices${v} = ${b.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${g.broadcastedIndicesToOffset(`outputIndices${v}`,b)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${w}(${g.getByOffset(`index${v}`)}[component${v}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${_("data",0,"u32")}
        ${_("data",1,"u32")}
        ${_("data",2,"u32")}
        ${_("data",3,"u32")}
        ${b.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${b.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",b)};
        let data = ${b.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${b.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,b)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},c=[{type:12,data:l},...ae(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Ah=e=>{$l(e.inputs),e.compute(Sl(e.inputs),{inputs:[0]})}}),Tl,Oh,Z0=G(()=>{"use strict";ne(),le(),de(),bn(),Tl=e=>{let t=e[0].dataType,r=M.size(e[0].dims),i=M.size(e[1].dims),a=i%4===0,n=s=>{let u=U("x",t,[1],4),l=U("bias",t,[1],4),d=te("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${l.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,g=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${Fa(Re(t))}

    ${s.mainStart(rr)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Ha("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/rr/4)}})}},Oh=e=>{e.inputs.length<2||M.size(e.inputs[1].dims)===0?Xc(e):e.compute(Tl(e.inputs))}}),Il,kl,Bh,Mh,X0=G(()=>{"use strict";ne(),le(),Be(),de(),Il=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},kl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=M.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(M.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:n},...ae(e[0].dims,e[1].dims,s)],h=g=>{let b=U("data",e[0].dataType,e[0].dims.length,l),y=U("inputIndices",e[1].dataType,e[1].dims.length),_=te("output",e[0].dataType,s.length,l),S=w=>{let I=i.length,k=`var indicesIndices${w}  = ${y.type.indices}(0);`;for(let C=0;C<I;C++)k+=`${I>1?`indicesIndices${w}[${C}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${C}]`:`outputIndices${w}`};`;k+=`
          var idx${w} = ${y.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${b.type.indices};
        `;for(let C=0,z=0;C<a;C++)C===n?(k+=`${a>1?`dataIndices${w}[${C}]`:`dataIndices${w}`} = u32(idx${w});`,z+=I):(k+=`${a>1?`dataIndices${w}[${C}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${z}]`:`outputIndices${w}`};`,z++);return k},v;if(e[0].dataType===9){let w=(I,k,C="")=>`
          let outputIndices${k} = ${_.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${b.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${I}[${k}] = ${C}(${b.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${_.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${_.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${b.getByIndices("dataIndices")};
      ${_.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,y,_)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:h}},Bh=e=>xe({axis:e.axis}),Mh=(e,t)=>{let r=e.inputs;Il(r),e.compute(kl(e.inputs,t))}}),El,Rh,Nh,Y0=G(()=>{"use strict";ne(),le(),de(),El=(e,t,r,i,a,n,s,u,l)=>{let d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];d.push(...ae(t.dims,c));let h=g=>{let b=U("indices_data",t.dataType,t.dims.length),y=te("input_slice_offsets_data",12,1,1),_=[b,y],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(..._)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},Rh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=M.sizeToDimension(n,n.length-1),l=M.sizeFromDimension(i,t.batchDims+s),d=M.sizeToDimension(i,t.batchDims),c=M.sizeFromDimension(i,t.batchDims),h=u/d,g=new Array(s),b=l;for(let k=0;k<s;++k)g[s-1-k]=b,b*=i[t.batchDims+s-1-k];let y=El(e,r[1],g,t.batchDims,i,u,h,c,s),_=t.batchDims+s;if(_>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=n.slice(0,-1).concat(i.slice(_)),v=M.size(S),w=[{type:12,data:v},{type:12,data:l},...ae(r[0].dims,y.dims,S)],I=k=>{let C=U("data",r[0].dataType,r[0].dims.length),z=U("slice_offsets",12,y.dims.length),B=te("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,z,B)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:I},{inputs:[r[0],y]})},Nh=e=>({batchDims:e.batch_dims,cacheKey:""})}),Cl,zl,Dh,Ph,Q0=G(()=>{"use strict";ne(),le(),Be(),de(),Cl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=M.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},zl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=M.normalizeAxis(t.gatherAxis,a),s=M.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=M.size(u),d=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...ae(...e.map((b,y)=>b.dims),u)],g=b=>{let y=U("data",e[0].dataType,e[0].dims.length),_=U("inputIndices",e[1].dataType,e[1].dims.length),S=U("scales",e[2].dataType,e[2].dims.length),v=e.length>3?U("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=te("output",d,u.length),I=[y,_,S];v&&I.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(k).declareVariables(...I,w)}
        ${b.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${_.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${_.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${_.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Re(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((b,y)=>y!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,y)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:g}},Dh=(e,t)=>{let r=e.inputs;Cl(r,t),e.compute(zl(e.inputs,t))},Ph=e=>xe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Al,Ol,Uh,Lh,J0=G(()=>{"use strict";ne(),le(),Be(),de(),Al=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ol=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=M.normalizeAxis(t.axis,a),l=r[u],d=n.slice(0),c=M.size(d),h=U("input",i,a),g=U("indicesInput",s,n.length),b=te("output",i,d.length),y=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return y.push(...ae(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:_=>`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,b)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${b.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${b.setByOffset("global_idx","value")};
  }`}},Uh=e=>xe({axis:e.axis}),Lh=(e,t)=>{let r=e.inputs;Al(r),e.compute(Ol(e.inputs,t))}}),Bl,Ml,qh,Vh,ey=G(()=>{"use strict";ne(),le(),de(),Bl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Ml=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Np.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(a/l),h=!0,g=M.size(u),b=[{type:12,data:h?d:g},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(b.push(...ae(e[2].dims)),y.push("rank")),b.push(...ae(u));let _=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",k=U("a",e[0].dataType,e[0].dims),C=U("b",e[1].dataType,e[1].dims),z=k.type.value,B=null,$=[k,C];e.length===3&&(B=U("c",e[2].dataType,e[2].dims.length),$.push(B));let N=te("output",e[0].dataType,u.length);$.push(N);let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(V).declareVariables(...$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${I}
    ${B!=null?`let cOffset = ${B.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${z}(uniforms.beta) * ${B.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let w=U("a",e[0].dataType,e[0].dims),I=U("b",e[1].dataType,e[1].dims),k=null,C=[w,I];e.length===3&&(k=U("c",e[2].dataType,e[2].dims.length),C.push(k));let z=te("output",e[0].dataType,u.length);C.push(z);let B=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",N="";t.transA&&t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let V=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(B).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${V}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:b}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:_}},qh=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Vh=(e,t)=>{Bl(e.inputs),e.compute(Ml(e.inputs,t))}}),ht,bt,Dt,Pt,Rl,Nl,Dl,Pl,Ul,Ll,ql,Vl,Gh,Wh,ty=G(()=>{"use strict";ne(),le(),Be(),de(),[ht,bt,Dt,Pt]=[0,1,2,3],Rl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Nl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Dl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Pl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ul=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Ll=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ht}] = batch;
     indices[${bt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Dt}] = u32(r);
            indices[${Pt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Dt}] = u32(clamp(r, 0, H - 1));
          indices[${Pt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Dt}] = gs_reflect(r, border[1], border[3]);
          indices[${Pt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,ql=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ht}], indices[${bt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ht}], indices[${bt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ht}], indices[${bt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ht}], indices[${bt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ht}], indices[${bt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ht}], indices[${bt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Vl=(e,t)=>{let r=U("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=U("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ht,bt,Dt,Pt]=[0,3,1,2]);let s=te("output",e[0].dataType,n.length),u=r.type.value,l=M.size(n),d=[{type:12,data:l},...ae(e[0].dims,i,n)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Nl}
  ${Dl(u)}
  ${Pl(t)}
  ${Ul(t)}
  ${Ll(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Dt}]);
      let W_in = i32(uniforms.x_shape[${Pt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ht}], indices[${Dt}], indices[${Pt}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${ql(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=M.size(n);return{outputs:[{dims:n,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:c}},Gh=(e,t)=>{Rl(e.inputs),e.compute(Vl(e.inputs,t))},Wh=e=>xe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ve,Gl,Fh,wa,Wl,vr,Hh,jh=G(()=>{"use strict";ne(),le(),Be(),fn(),yn(),de(),Ot(),Ve=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Gl=(e,t)=>{let r=e[0],i=Ve(e,1),a=Ve(e,2),n=Ve(e,3),s=Ve(e,4),u=Ve(e,5),l=Ve(e,6),d=Ve(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],b=h,y=0,_=0,S=Math.floor(g/t.numHeads);if(l&&d&&M.size(l.dims)&&M.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],_=l.dims[2]}else if(l&&M.size(l.dims)||d&&M.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&M.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,b=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,b=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,b=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&M.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=y+b,I=0;if(s&&M.size(s.dims)>0){I=8;let B=s.dims;throw B.length===1?B[0]===c?I=1:B[0]===3*c+2&&(I=3):B.length===2&&B[0]===c&&B[1]===w&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,C=g;if(a&&M.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(b!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=a.dims[2]}else{if(b!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=a.dims[1]*a.dims[3],k=!0}}let z=!1;if(s&&M.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&M.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:y,kvSequenceLength:b,totalSequenceLength:w,maxSequenceLength:_,inputHiddenSize:0,hiddenSize:g,vHiddenSize:C,headSize:S,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:z,passPastInKv:k,qkvFormat:v}},Fh=e=>xe({...e}),wa=xe({perm:[0,2,1,3]}),Wl=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=M.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=h=>{let g=te("qkv_with_bias",t.dataType,u),b=U("qkv",t.dataType,u),y=U("bias",r.dataType,u),_=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(_).declareVariables(b,y,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},vr=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&M.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Wl(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Ze(l,wa.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Ze(l,wa.perm),{inputs:[l],outputs:[-1]})[0]},Hh=(e,t)=>{let r=Gl(e.inputs,t),i=e.inputs[0],a=Ve(e.inputs,1),n=Ve(e.inputs,2),s=Ve(e.inputs,3),u=Ve(e.inputs,4),l=Ve(e.inputs,5),d=Ve(e.inputs,6),c=Ve(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let h=a&&n&&a.dims.length===4&&n.dims.length===4,g=vr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(h)return Tr(e,g,a,n,u,void 0,d,c,l,r);if(!a||!n)throw new Error("key and value must be provided");let b=vr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),y=vr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);Tr(e,g,b,y,u,void 0,d,c,l,r)}}),Fl,Hl,jl,Kl,Ya,Kh,Zh,Xh=G(()=>{"use strict";ne(),le(),Be(),de(),Fl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Hl=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),xe({numOutputs:i,axis:t.axis,splitSizes:r})},jl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${re("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Kl=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ya=(e,t)=>{let r=e[0].dims,i=M.size(r),a=e[0].dataType,n=M.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=U("input",a,r.length),l=new Array(t.numOutputs),d=[],c=[],h=0,g=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){h+=t.splitSizes[y],l[y]=h;let _=r.slice();_[n]=t.splitSizes[y],c.push(_),s[y]=te(`output${y}`,a,_.length),d.push({dims:c[y],dataType:e[0].dataType})}g.push({type:12,data:l},...ae(r,...c));let b=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${jl(l.length)}
  ${Kl(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${re("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},Kh=(e,t)=>{Fl(e.inputs);let r=e.inputs.length===1?t:Hl(e.inputs,t);e.compute(Ya(e.inputs,r),{inputs:[0]})},Zh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return xe({axis:t,numOutputs:i,splitSizes:r})}}),Zl,li,Yh,Qh=G(()=>{"use strict";ne(),le(),Be(),de(),Zl=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!M.areEqual(i.dims,[])&&!M.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!M.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=a.dims[0],h=M.sizeFromDimension(r.dims,1)/d,g=u===0?a.dims[1]*2:h/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},li=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=M.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],h=a===0?c*2:d/i,g=new Array(s,l,d/h,h-c),b=M.computeStrides(g),y=[{type:1,data:n},{type:12,data:g},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[u,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...ae(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],_=S=>{let v=U("input",e[0].dataType,e[0].dims.length),w=U("position_ids",e[1].dataType,e[1].dims.length),I=U("cos_cache",e[2].dataType,e[2].dims.length),k=U("sin_cache",e[3].dataType,e[3].dims.length),C=te("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${S.declareVariables(v,w,I,k,C)}

        ${S.mainStart(rr)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",te("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:xe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(g)/rr)},programUniforms:y})}},Yh=(e,t)=>{Zl(e.inputs,t),e.compute(li(e.inputs,t))}}),Xl,Yl,_a,Ql,Jh,ry=G(()=>{"use strict";Be(),ne(),yn(),jh(),Xh(),Ot(),Qh(),de(),Xl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,g=0,b=!i||i.dims.length===0,y=Math.floor(b?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);b&&(c=y*t.numHeads);let _=n&&n.dims.length!==0,S=s&&s.dims.length!==0;if(_&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(_&&S){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=n.dims[2]}else if(_||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,I=!1,k=t.kvNumHeads?y*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(h!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=a.dims[2]}else{if(h!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=a.dims[1]*a.dims[3],I=!0}}let C=e.length>4?e[5]:void 0;if(C){if(C.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let z=C.dims.reduce((B,$)=>B*$,1);if(z!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${z}.`);for(let B=0;B<C.dims.length;B++)if(C.dims[B]!==1&&C.dims[B]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${B}] = ${C.dims[B]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:y,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:v}},Yl=xe({perm:[0,2,1,3]}),_a=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Ze(i,Yl.perm),{inputs:[i],outputs:[-1]})[0]),i},Ql=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let h=U("seq_lens",r.dataType,r.dims),g=U("total_seq_lens",i.dataType,i.dims),b=te("pos_ids",a,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(h,g,b)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${b.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},Jh=(e,t)=>{var k;if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=Xl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=xe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[g,b,y]=!a&&!n?e.compute(Ya([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],_,S;if(t.doRotary){let C=e.compute(Ql(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],z=e.inputs[7],B=e.inputs[8],$=xe({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),N=[g,C,z,B],V=[-1];_=e.compute(li(N,$),{inputs:N,outputs:V})[0],N.splice(0,1,b);let K=xe({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(li(N,K),{inputs:N,outputs:V})[0]}let v=vr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?_:g,void 0,0),w=_a(e,t.doRotary?S:b,r),I=_a(e,y,r);Tr(e,v,w,I,void 0,void 0,s,u,void 0,r,l,d)}}),va,Jl,ed,ef,iy=G(()=>{"use strict";ne(),le(),Ot(),de(),va=(e,t,r,i,a,n,s,u)=>{let l=Oe(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=a*s,g=64;h===1&&(g=256);let b=[a,s,n/l],y=[a,s,2],_=["rank","type","type"],S=[];S.push(...ae(b,y));let v=w=>{let I=U("x",t.dataType,3,l),k=U("scale",r.dataType,r.dims),C=U("bias",i.dataType,i.dims),z=te("output",1,3,2),B=[I,k,C,z];return`
  var<workgroup> workgroup_shared : array<${c}, ${g}>;
  const workgroup_size = ${g}u;
  ${w.declareVariables(...B)}
  ${w.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${I.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${At("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${At("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Jl=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=M.sizeFromDimension(i,n),d=Oe(l),c=M.size(a)/d,h=va(e,t[0],t[1],t[2],s,l,u,r.epsilon),g=[s,u,l/d],b=[s,u],y=["type","none"],_=S=>{let v=U("x",t[0].dataType,g.length,d),w=U("scale_shift",1,b.length,2),I=te("output",t[0].dataType,g.length,d),k=[v,w,I];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ae(g,b,g)]}),getShaderSource:_},{inputs:[t[0],h]})},ed=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=M.sizeFromDimension(i,1)/s,l=Oe(s),d=M.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],h=["type","type"],g=!1,b=[0,i.length-1];for(let v=0;v<i.length-2;v++)g=g||i[v+1]!==1,b.push(v+1);g=g&&i[i.length-1]!==1;let y=g?e.compute(Ze(e.inputs[0],b),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,w)=>i[b[w]])),_=va(e,y,t[1],t[2],n,u,s,r.epsilon),S=v=>{let w=Ne(t[0].dataType),I=l===1?"vec2f":`mat${l}x2f`,k=B=>{let $=B===0?"x":"y",N=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${N}(scale.${$}))`;case 2:return`vec2<${w}>(${N}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${w}>(${N}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},C=U("input",t[0].dataType,t[0].dims,l),z=te("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],_]})},ef=(e,t)=>{t.format==="NHWC"?ed(e,e.inputs,t):Jl(e,e.inputs,t)}}),td,rd,tf,ay=G(()=>{"use strict";ne(),le(),de(),td=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},rd=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=M.normalizeAxis(t.axis,a.length),d=M.sizeToDimension(a,l),c=M.sizeFromDimension(a,l),h=M.size(n.dims),g=s?M.size(s.dims):0;if(h!==c||s&&g!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let b=[];for(let C=0;C<a.length;++C)C<l?b.push(a[C]):b.push(1);let y=Oe(c),_=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/y)},{type:1,data:t.epsilon}];s&&_.push("type");let v=r>1,w=r>2,I=C=>{let z=Ne(e[0].dataType),B=[U("x",e[0].dataType,e[0].dims,y),U("scale",n.dataType,n.dims,y)];s&&B.push(U("bias",s.dataType,s.dims,y)),B.push(te("output",e[0].dataType,u,y)),v&&B.push(te("mean_data_output",1,b)),w&&B.push(te("inv_std_output",1,b));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms($).declareVariables(...B)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Va("f32",y)};
    var mean_square_vector = ${Va("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${er(z,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${At("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${At("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${er(z,y,"x[j + offset]")};
      let f32scale = ${er(z,y,"scale[j]")};
      output[j + offset] = ${B[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${er(z,y,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return v&&k.push({dims:b,dataType:1}),w&&k.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:_},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:I}},tf=(e,t)=>{td(e.inputs),e.compute(rd(e.inputs,t,e.outputCount))}}),id,rf,ny=G(()=>{"use strict";le(),$n(),xn(),id=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},rf=e=>{id(e.inputs);let t=tr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(vn(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=M.size(e.inputs[0].dims.slice(0,-2)),s=M.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,n,r],c=[u,l];e.compute(ui(c,{activation:""},t,d),{inputs:c})}else e.compute(ui(e.inputs,{activation:""},t))}}}),ad,nd,sd,af,nf,sy=G(()=>{"use strict";ne(),le(),Be(),de(),ad=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!M.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(M.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(M.size(l)!==d)throw new Error("zeroPoints input size error.")}},nd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=M.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=Oe(t.k),g=Oe(d),b=Oe(s),y=u.concat([a,s]),_=a>1&&s/b%2===0?2:1,S=M.size(y)/b/_,v=64,w=[],I=[l,a,n/h],k=M.convertShape(e[1].dims).slice();k.splice(-1,1,d/g),w.push(...ae(I)),w.push(...ae(k)),w.push(...ae(e[2].dims)),e.length===4&&w.push(...ae(M.convertShape(e[3].dims)));let C=[l,a,s/b];w.push(...ae(C));let z=B=>{let $=I.length,N=U("a",e[0].dataType,$,h),V=U("b",12,k.length,g),K=U("scales",e[2].dataType,e[2].dims.length),j=[N,V,K],X=e.length===4?U("zero_points",12,e[3].dims.length):void 0;X&&j.push(X);let R=C.length,Y=te("output",e[0].dataType,R,b),Q=Ne(e[0].dataType),ie=(()=>{switch(h){case 1:return`array<${Q}, 8>`;case 2:return`mat4x2<${Q}>`;case 4:return`mat2x4<${Q}>`;default:throw new Error(`${h}-component is not supported.`)}})(),_e=Math.floor(32/t.bits),W=Math.floor(_e/8),O=()=>{let q="";for(let L=0;L<W;L++){let J=L*t.bits*4,ue=J+t.bits;q+=`
          // reuse a data (pass ${L})
            var input_offset${L>0?L:""} = ${L===0?N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${L>0?L:""}: ${ie};
            for (var j${L>0?L:""}: u32 = 0; j${L>0?L:""} < ${8/h}; j${L>0?L:""}++) {
              a_data${L>0?L:""}[j${L>0?L:""}] = ${N.getByOffset(`input_offset${L>0?L:""}`)};
              input_offset${L>0?L:""}++;
            }
          `;for(let ee=0;ee<b*_;ee++)q+=`
            b_value = ${g===1?`b${ee}_data`:`b${ee}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${L*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${J}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ue}u) & b_mask);`}
            b_quantized_values = ${ie}(${Array.from({length:4},(se,he)=>`${Q}(b_value_lower[${he}]), ${Q}(b_value_upper[${he}])`).join(", ")});
            b_dequantized_values = ${h===1?`${ie}(${Array.from({length:8},(se,he)=>`(b_quantized_values[${he}] - ${X?`zero_point${ee}`:"zero_point"}) * scale${ee}`).join(", ")});`:`(b_quantized_values - ${ie}(${Array(8).fill(`${X?`zero_point${ee}`:"zero_point"}`).join(",")})) * scale${ee};`};
            workgroup_shared[local_id.x * ${_} + ${Math.floor(ee/b)}]${b>1?`[${ee%b}]`:""} += ${Array.from({length:8/h},(se,he)=>`${h===1?`a_data${L>0?L:""}[${he}] * b_dequantized_values[${he}]`:`dot(a_data${L>0?L:""}[${he}], b_dequantized_values[${he}])`}`).join(" + ")};
          `}return q},T=()=>{let q=`
            var col_index = col * ${b};
            ${X?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Q}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let L=0;L<b*_;L++)q+=`
            let scale${L} = ${K.getByOffset("col_index * nBlocksPerCol + block")};
            ${X?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${Q}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return q},P=()=>{let q=`col_index = col * ${b};`;for(let L=0;L<b*_;L++)q+=`
            let b${L}_data = ${V.getByIndices(`${V.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return q+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ie};
            var b_dequantized_values: ${ie};`,q};return`
        var<workgroup> workgroup_shared: array<${Y.type.value}, ${_*v}>;
        ${B.declareVariables(...j,Y)}
        ${B.mainStart([v,1,1])}
          let output_indices = ${Y.offsetToIndices(`(global_idx / ${v}) * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${T()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${P()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${O()}
                word_offset += ${_e/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${_}) {
            var output_value: ${Y.type.value} = ${Y.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${_};
            }
            ${Y.setByIndices(`${Y.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${b};${_};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:z}},sd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=M.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=Oe(t.k),g=Oe(d),b=u.concat([a,s]),y=128,_=s%8===0?8:s%4===0?4:1,S=y/_,v=Math.floor(32/t.bits),w=S*g*v,I=w/h,k=w/t.blockSize,C=M.size(b)/_,z=[],B=[l,a,n/h],$=M.convertShape(e[1].dims).slice();$.splice(-1,1,d/g),z.push(...ae(B)),z.push(...ae($)),z.push(...ae(e[2].dims)),e.length===4&&z.push(...ae(M.convertShape(e[3].dims)));let N=[l,a,s];z.push(...ae(N));let V=K=>{let j=B.length,X=U("a",e[0].dataType,j,h),R=U("b",12,$.length,g),Y=U("scales",e[2].dataType,e[2].dims.length),Q=[X,R,Y],ie=e.length===4?U("zero_points",12,e[3].dims.length):void 0;ie&&Q.push(ie);let _e=N.length,W=te("output",e[0].dataType,_e),O=Ne(e[0].dataType),T=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${O}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${O}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${O}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${O}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${X.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${W.type.value}, ${S}>, ${_}>;
        ${K.declareVariables(...Q,W)}
        ${K.mainStart([S,_,1])}
          let output_indices = ${W.offsetToIndices(`workgroup_index * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${X.getByIndices(`${X.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${X.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${ie?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ie.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${O}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${O}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${Y.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let P=Math.floor(v/8),q="";for(let L=0;L<P;L++){let J=L*t.bits*4,ue=J+t.bits;q+=`
              ${T()}
              {${t.bits===2?`
                let half_word = b_value >> ${L*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${J}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ue}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${O}>(${Array.from({length:4},(ee,se)=>`${O}(b_value_lower[${se}]), ${O}(b_value_upper[${se}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${O}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ee,se)=>`${`dot(a_data${se}, b_dequantized_values[${se}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return q})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${_}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${W.setByIndices(`${W.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${S};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:c}],dispatchGroup:{x:C},programUniforms:z}),getShaderSource:V}},af=(e,t)=>{ad(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(sd(e.inputs,t)):e.compute(nd(e.inputs,t))},nf=e=>xe(e)}),od,ud,ld,dd,pd,cd,hd,fd,sf,oy=G(()=>{"use strict";ne(),le(),de(),od=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ud=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${re("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${re("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${re("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},ld=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${re("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${re("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${re("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${re("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},dd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${re("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${re("uniforms.x_shape",a,t)})) {
                  k = i32(${re("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${re("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},pd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${re("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${re("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${re("uniforms.x_shape",a,t)})) {
                  k -= i32(${re("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${re("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},cd=(e,t,r)=>{switch(r.mode){case 0:return ud(e,t,r.pads.length);case 1:return ld(e,t,r.pads.length);case 2:return dd(e,t,r.pads.length);case 3:return pd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},hd=(e,t)=>{let r=M.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=M.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...ae(e[0].dims,r));let u=["rank"],l=d=>{let c=te("output",e[0].dataType,r.length),h=U("x",e[0].dataType,i.length),g=h.type.value,b=cd(c,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?g:"f32"}),`
            ${d.registerUniforms(y).declareVariables(h,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(r)/64)},programUniforms:n}),getShaderSource:l}},fd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},sf=(e,t)=>{od(e.inputs);let r=fd(e.inputs,t);e.compute(hd(e.inputs,r),{inputs:[0]})}}),mr,$a,xa,Sa,Ta,md,gd,Ia,ka,of,uf,Ea,lf,df,Ca,pf,cf,hf,ff,uy=G(()=>{"use strict";Qe(),ne(),le(),de(),mr=e=>{if(Ae.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},$a=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();si.adjustPoolAttributes(r,a,s,u,l,d);let c=si.computePoolOutputShape(r,a,u,l,s,d,t.autoPad,t.ceilMode),h=Object.assign({},t);n?Object.assign(h,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let g=c.slice();return g.push(g.splice(1,1)[0]),[h,i?g:c]},xa=(e,t)=>{let r=t.format==="NHWC",i=M.size(e),a=M.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(d+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let b=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],_=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(_+S),n.push({type:12,data:b},{type:12,data:y},{type:12,data:_},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=M.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},Sa=(e,t,r,i,a,n,s,u,l,d,c,h)=>{let g=a.format==="NHWC",b=t.type.value,y=te("output",t.type.tensor,i);if(a.kernelShape.length<=2){let _="",S="",v="",w=r-(g?2:1);if(c?_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let I=r-(g?3:2);h?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${b}(${u});
              var pad = 0;
              ${S}
              ${_}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let _=a.kernelShape.length,S=a.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${_}>;

              var value = ${b}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${_-1}u; j++) {
                  offsets[j] = offset / ${re("uniforms.kernelStrides","j",_)};
                  offset -= offsets[j] * ${re("uniforms.kernelStrides","j",_)};
                }
                offsets[${_-1}] = offset;

                isPad = false;
                for (var j = ${r-_}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${re("uniforms.strides",`j - ${r-_}u`,_)}
                    + offsets[j - ${r-_}u] - ${re("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ta=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,md=e=>`${Ta(e)};${e.countIncludePad}`,gd=e=>`${Ta(e)};${e.storageOrder};${e.dilations}`,Ia=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ka=(e,t,r,i)=>{let[a,n]=$a(t,i,r),s=U("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,h,g,b,y]=xa(n,a);c.push(...ae(t.dims,n));let _=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${b};${y}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(n)/64)},programUniforms:c}),getShaderSource:S=>Sa(S,s,t.dims.length,n.length,a,l,d,0,h,g,b,y)}},of=e=>{let t=e.count_include_pad!==0,r=Ia(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:md(i)}},uf=(e,t)=>{mr(e.inputs),e.compute(ka("AveragePool",e.inputs[0],!1,t))},Ea={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},lf=e=>{let t=e.format;return{format:t,...Ea,cacheKey:t}},df=(e,t)=>{mr(e.inputs),e.compute(ka("GlobalAveragePool",e.inputs[0],!0,t))},Ca=(e,t,r,i)=>{let[a,n]=$a(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=U("x",t.dataType,t.dims.length),d=["rank"],[c,h,g,b,y]=xa(n,a);return c.push(...ae(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${b};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(n)/64)},programUniforms:c}),getShaderSource:_=>Sa(_,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,h,g,b,y)}},pf=(e,t)=>{mr(e.inputs),e.compute(Ca("MaxPool",e.inputs[0],!1,t))},cf=e=>{let t=e.storage_order,r=e.dilations,i=Ia(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:gd(a)}},hf=e=>{let t=e.format;return{format:t,...Ea,cacheKey:t}},ff=(e,t)=>{mr(e.inputs),e.compute(Ca("GlobalMaxPool",e.inputs[0],!0,t))}}),yd,bd,mf,gf,ly=G(()=>{"use strict";ne(),le(),Be(),de(),yd=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},bd=(e,t)=>{let r=M.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=M.size(n),l=i===3||i===2,d=l?[Math.ceil(M.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,g=h?l?[Math.ceil(M.size(h.dims)/4)]:h.dims:void 0,b=c.length===0||c.length===1&&c[0]===1,y=b===!1&&c.length===1,_=Oe(u),S=b&&(!l||_===4),v=S?_:1,w=S&&!l?_:1,I=U("input",l?12:i,d.length,w),k=U("scale",s,c.length),C=h?U("zero_point",l?12:i,g.length):void 0,z=te("output",s,n.length,v),B=[I,k];C&&B.push(C);let $=[d,c];h&&$.push(g);let N=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...ae(...$,n)],V=K=>{let j=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${K.registerUniforms(j).declareVariables(...B,z)}
      ${K.mainStart()}
          ${K.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${b?`let scale_value= ${k.getByOffset("0")}`:y?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?b?l?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:y?l?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:V,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:N})}},mf=(e,t)=>{yd(e.inputs,t),e.compute(bd(e.inputs,t))},gf=e=>xe({axis:e.axis,blockSize:e.blockSize})}),wd,_d,yf,dy=G(()=>{"use strict";Qe(),ne(),de(),wd=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},_d=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...ae(n)],l=d=>{let c=te("output",i,n.length),h=c.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(g).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},yf=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),Ae.webgpu.validateInputContent&&wd(t,r,i),e.compute(_d(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),vd,$d,bf,wf,py=G(()=>{"use strict";ne(),le(),Be(),de(),vd=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},$d=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(M.sizeToDimension(i,i.length-1)/n),u=i[i.length-1],l=M.sizeFromDimension(r,u),d=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...ae(e[1].dims,e[2].dims,a)],c=h=>{let g=U("indices",e[1].dataType,e[1].dims.length),b=U("updates",e[2].dataType,e[2].dims.length,n),y=t.reduction!=="none"&&t.reduction!==""?Gp("output",e[0].dataType,a.length):te("output",e[0].dataType,a.length,n);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,b,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${vd(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},bf=e=>xe({reduction:e.reduction}),wf=(e,t)=>{e.compute($d(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),xd,Sd,Td,za,Id,kd,Ed,Cd,zd,Ad,Od,Bd,Aa,Md,Rd,Nd,Dd,Pd,_f,vf,cy=G(()=>{"use strict";ne(),le(),Be(),de(),xd=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Sd=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},Td=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");xd(i,t),t.axes.length>0&&Sd(i,t.axes,d).forEach((c,h)=>i[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},za=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Id=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${za("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${za("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",kd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Ed=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},Cd=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},zd=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},Ad=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${re("uniforms.scales","i",i)};
        var roi_low = ${re("uniforms.roi","i",a)};
        var roi_hi = ${re("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${re("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Od=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${re("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${re("uniforms.roi","i",n)};
          var roi_hi = ${re("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${re("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Bd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${re("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Aa=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Md=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Aa(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Rd=(e,t,r,i,a,n,s,u,l,d)=>{let c=r.length===2,h=!0,[g,b]=c?[0,1]:h?[2,3]:[1,2],y=e.type.value,_=S=>{let v=S===g?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",S)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[S]},
        ${i[S]}, ${r[S]}, ${n[S]}, ${n[S]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[S]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${y} = originalIdx + ${y}(i);
          if (${v} < 0 || ${v} >= ${r[S]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${v} = max(0, min(${v}, ${r[S]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",S,`u32(${v})`)};
          data[i + 1] = ${S===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(g)};
    ${_(b)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Nd=(e,t,r,i,a)=>{let[n,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Aa(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Dd=(e,t,r,i,a,n)=>{let s=e.dims,u=Ed(n,t.axes,s.length),l=Cd(s,i,a,t.axes),d=i.slice();i.length===0&&(d=s.map((w,I)=>w===0?1:l[I]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=zd(s,d,t)));let c=te("output",e.dataType,l.length),h=U("input",e.dataType,s.length),g=M.size(l),b=s.length===l.length&&s.every((w,I)=>w===l[I]),y=t.coordinateTransformMode==="tf_crop_and_resize",_=t.extrapolationValue,S=h.type.value,v=w=>`
      ${b?"":`
      ${Id(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Bd(h,s)};
              ${kd(t.nearestMode,r,S)};
              ${Od(h,c,s,l,d.length,u.length,y)};
              `;case"linear":return`
              ${Ad(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Md(h,c,s,y,_)}`;if(s.length===3||s.length===5)return`${Nd(h,c,s,y,_)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Rd(h,c,s,l,d,u,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(h,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${b?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${b}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:u},...ae(s,l)]})}},Pd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},_f=(e,t)=>{let r=[],i=[],a=[],n=Pd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Td(e.inputs,t,n,r,i,a),e.compute(Dd(e.inputs[0],t,n,r,i,a),{inputs:[0]})},vf=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return xe({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),Ud,Ld,$f,hy=G(()=>{"use strict";ne(),le(),de(),Ud=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Ld=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=M.size(n),u=n,l=s,d=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],h=!a&&e.length>3,g=e.length>4,b=i&&r>1,y=i&&r>2,_=r>3,S=64,v=Oe(d),w=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],I=C=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],B=[U("x",e[0].dataType,e[0].dims,v),U("skip",e[1].dataType,e[1].dims,v),U("gamma",e[2].dataType,e[2].dims,v)];h&&B.push(U("beta",e[3].dataType,e[3].dims,v)),g&&B.push(U("bias",e[4].dataType,e[4].dims,v)),B.push(te("output",e[0].dataType,u,v)),b&&B.push(te("mean_output",1,c)),y&&B.push(te("inv_std_output",1,c)),_&&B.push(te("input_skip_bias_sum",e[0].dataType,u,v));let $=Ne(e[0].dataType),N=Ne(1,v);return`

      ${C.registerUniforms(z).declareVariables(...B)}
      var<workgroup> sum_shared : array<${N}, ${S}>;
      var<workgroup> sum_squared_shared : array<${N}, ${S}>;

      ${C.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${_?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${er($,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${At("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${At("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${b};${y};${_}`,inputDependencies:e.map((C,z)=>"type")},getShaderSource:I,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},$f=(e,t)=>{Ud(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Ld(e.inputs,t,e.outputCount,!1),{outputs:r})}}),qd,gr,Vd,Oa,Gd,Wd,xf,Sf,fy=G(()=>{"use strict";ne(),le(),Be(),de(),qd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},gr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Vd=(e,t)=>{if(e.length>1){let r=gr(e,1),i=gr(e,2),a=gr(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),xe({starts:r,ends:i,axes:a})}else return t},Oa=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Gd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${re("uniforms.input_shape","i",r.length)};
            let steps_i = ${re("uniforms.steps","i",r.length)};
            let signs_i = ${re("uniforms.signs","i",r.length)};
            let starts_i = ${re("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Wd=(e,t)=>{let r=e[0].dims,i=M.size(r),a=t.axes.length>0?M.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=gr(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,w)=>Oa(v,w,r,a,n)),u=t.ends.map((v,w)=>Oa(v,w,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),u.splice(v,0,r[v]),n.splice(v,0,1));let l=n.map(v=>Math.sign(v));n.forEach((v,w,I)=>{if(v<0){let k=(u[w]-s[w])/v,C=s[w],z=C+k*n[w];s[w]=z,u[w]=C,I[w]=-v}});let d=r.slice(0);a.forEach((v,w)=>{d[v]=Math.ceil((u[v]-s[v])/n[v])});let c={dims:d,dataType:e[0].dataType},h=te("output",e[0].dataType,d.length),g=U("input",e[0].dataType,e[0].dims.length),b=M.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],_=[{type:12,data:b},{type:12,data:s},{type:6,data:l},{type:12,data:n},...ae(e[0].dims,d)],S=v=>`
      ${v.registerUniforms(y).declareVariables(g,h)}
        ${Gd(g,h,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:_})}},xf=(e,t)=>{qd(e.inputs,t);let r=Vd(e.inputs,t);e.compute(Wd(e.inputs,r),{inputs:[0]})},Sf=e=>{let t=e.starts,r=e.ends,i=e.axes;return xe({starts:t,ends:r,axes:i})}}),Fd,Hd,Tf,If,my=G(()=>{"use strict";ne(),le(),Be(),Ot(),de(),Fd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Hd=(e,t)=>{let r=e.inputs[0],i=r.dims,a=M.size(i),n=i.length,s=M.normalizeAxis(t.axis,n),u=s<i.length-1,l,d=[];u?(d=Array.from({length:n},(B,$)=>$),d[s]=n-1,d[n-1]=s,l=e.compute(Ze(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[n-1],g=a/h,b=Oe(h),y=h/b,_=64;g===1&&(_=256);let S=(B,$)=>$===4?`max(max(${B}.x, ${B}.y), max(${B}.z, ${B}.w))`:$===2?`max(${B}.x, ${B}.y)`:$===3?`max(max(${B}.x, ${B}.y), ${B}.z)`:B,v=U("x",l.dataType,l.dims,b),w=te("result",l.dataType,l.dims,b),I=v.type.value,k=Ne(l.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,C=B=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${_}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${B.registerUniform("packedCols","i32").declareVariables(v,w)}
      ${B.mainStart(_)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${_};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${I}(${S("threadShared[0]",b)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${I}(${At("threadShared[0]",b)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${b};${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:C},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Ze(z,d),{inputs:[z]})},Tf=(e,t)=>{Fd(e.inputs),Hd(e,t)},If=e=>xe({axis:e.axis})}),Ba,jd,Kd,Zd,kf,gy=G(()=>{"use strict";ne(),le(),de(),Ba=e=>Array.from(e.getBigInt64Array(),Number),jd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ba(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Kd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Zd=(e,t)=>{let r=e[0].dims,i=t??Ba(e[1]),a=Kd(r,i),n=M.size(a),s=e[0].dataType,u=U("input",s,r.length),l=te("output",s,a.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...ae(e[0].dims,a)]}),getShaderSource:d}},kf=e=>{jd(e.inputs),e.compute(Zd(e.inputs),{inputs:[0]})}}),Xd,Yd,Ef,yy=G(()=>{"use strict";ne(),le(),de(),Xd=(e,t,r,i,a)=>{let n=te("output_data",a,r.length,4),s=U("a_data",t[1].dataType,t[1].dims.length,4),u=U("b_data",t[2].dataType,t[2].dims.length,4),l=U("c_data",t[0].dataType,t[0].dims.length,4),d,c=(h,g,b)=>`select(${g}, ${h}, ${b})`;if(!i)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(g,b,y="")=>{let _=`a_data[index_a${b}][component_a${b}]`,S=`b_data[index_b${b}][component_b${b}]`,v=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
            let output_indices${b} = ${n.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offset_a${b} = ${s.broadcastedIndicesToOffset(`output_indices${b}`,n)};
            let offset_b${b} = ${u.broadcastedIndicesToOffset(`output_indices${b}`,n)};
            let offset_c${b} = ${l.broadcastedIndicesToOffset(`output_indices${b}`,n)};
            let index_a${b} = offset_a${b} / 4u;
            let index_b${b} = offset_b${b} / 4u;
            let index_c${b} = offset_c${b} / 4u;
            let component_a${b} = offset_a${b} % 4u;
            let component_b${b} = offset_b${b} % 4u;
            let component_c${b} = offset_c${b} % 4u;
            ${g}[${b}] = ${y}(${c(_,S,v)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Yd=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(M.areEqual(t,r)&&M.areEqual(r,i)),s=t,u=M.size(t);if(n){let d=tr.calcShape(tr.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=M.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Xd(d,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...ae(i,t,r,s)]})}},Ef=e=>{e.compute(Yd(e.inputs))}}),Cf,by=G(()=>{"use strict";A0(),yn(),O0(),B0(),M0(),R0(),N0(),q0(),G0(),W0(),F0(),H0(),j0(),K0(),Z0(),X0(),Y0(),Q0(),J0(),ey(),ty(),ry(),iy(),ay(),ny(),sy(),jh(),oy(),uy(),ly(),dy(),py(),gn(),cy(),Qh(),hy(),fy(),my(),Xh(),gy(),Ot(),bn(),yy(),Cf=new Map([["Abs",[bc]],["Acos",[wc]],["Acosh",[_c]],["Add",[th]],["ArgMax",[fc,Wa]],["ArgMin",[hc,Wa]],["Asin",[vc]],["Asinh",[$c]],["Atan",[xc]],["Atanh",[Sc]],["Attention",[mc]],["AveragePool",[uf,of]],["BatchNormalization",[gc]],["BiasAdd",[yc]],["BiasSplitGelu",[eh]],["Cast",[Ic,Tc]],["Ceil",[Ec]],["Clip",[kc]],["Concat",[ph,ch]],["Conv",[Xa,Za]],["ConvTranspose",[$h,vh]],["Cos",[Cc]],["Cosh",[zc]],["CumSum",[xh,Sh]],["DepthToSpace",[Th,Ih]],["DequantizeLinear",[mf,gf]],["DFT",[kh,Eh]],["Div",[rh]],["Einsum",[Ch,zh]],["Elu",[Ac,_r]],["Equal",[ih]],["Erf",[Oc]],["Exp",[Bc]],["Expand",[Ah]],["FastGelu",[Oh]],["Floor",[Mc]],["FusedConv",[Xa,Za]],["Gather",[Mh,Bh]],["GatherElements",[Lh,Uh]],["GatherBlockQuantized",[Dh,Ph]],["GatherND",[Rh,Nh]],["Gelu",[Rc]],["Gemm",[Vh,qh]],["GlobalAveragePool",[df,lf]],["GlobalMaxPool",[ff,hf]],["Greater",[oh]],["GreaterOrEqual",[lh]],["GridSample",[Gh,Wh]],["GroupQueryAttention",[Jh]],["HardSigmoid",[Gc,Vc]],["HardSwish",[Wc]],["InstanceNormalization",[ef]],["LayerNormalization",[tf]],["LeakyRelu",[Nc,_r]],["Less",[uh]],["LessOrEqual",[dh]],["Log",[Qc]],["MatMul",[rf]],["MatMulNBits",[af,nf]],["MaxPool",[pf,cf]],["Mul",[ah]],["MultiHeadAttention",[Hh,Fh]],["Neg",[Pc]],["Not",[Dc]],["Pad",[sf]],["Pow",[nh]],["QuickGelu",[Jc,_r]],["Range",[yf]],["Reciprocal",[Uc]],["ReduceMin",[uc]],["ReduceMean",[ic]],["ReduceMax",[oc]],["ReduceSum",[dc]],["ReduceProd",[lc]],["ReduceL1",[ac]],["ReduceL2",[nc]],["ReduceLogSum",[cc]],["ReduceLogSumExp",[sc]],["ReduceSumSquare",[pc]],["Relu",[Lc]],["Resize",[_f,vf]],["RotaryEmbedding",[Yh]],["ScatterND",[wf,bf]],["Sigmoid",[qc]],["Sin",[Fc]],["Sinh",[Hc]],["Slice",[xf,Sf]],["SkipLayerNormalization",[$f]],["Split",[Kh,Zh]],["Sqrt",[jc]],["Softmax",[Tf,If]],["Sub",[sh]],["Tan",[Kc]],["Tanh",[Zc]],["ThresholdedRelu",[Yc,_r]],["Tile",[kf]],["Transpose",[Fp,Hp]],["Where",[Ef]]])}),zf,wy=G(()=>{"use strict";Qe(),_t(),de(),zf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){ut(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ye(e.programInfo.name)}dispose(){}build(e,t){ut(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=Wp(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});we("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ye(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Af={};ir(Af,{WebGpuBackend:()=>Of});var Qd,Jd,ep,Of,_y=G(()=>{"use strict";Qe(),ne(),_t(),Up(),C0(),by(),wy(),Qd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Jd=(e,t,r)=>{var a,n;let i=e.name;return(a=e.shaderCache)!=null&&a.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Qd(t,((n=e.shaderCache)==null?void 0:n.inputDependencies)??new Array(t.length).fill("dims"))}`,i},ep=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Of=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=u=>t.features.has(u)&&r.push(u)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let n=t,s=t.info??(typeof n.requestAdapterInfo=="function"?await n.requestAdapterInfo():void 0);this.adapterInfo=new ep(s),this.gpuDataManager=Vp(this),this.programManager=new zf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,cn(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ut(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let n=r[a],s=n.kernelId,u=this.kernels.get(s),l=u.kernelType,d=u.kernelName,c=n.programName,h=n.inputTensorViews,g=n.outputTensorViews,b=t[a*2],y=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=b);let _=Number(b-this.queryTimeBase),S=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(v=>({dims:v.dims,dataType:wt(v.dataType)})),outputsMetadata:g.map(v=>({dims:v.dims,dataType:wt(v.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:c,startTime:_,endTime:S});else{let v="";h.forEach((I,k)=>{v+=`input[${k}]: [${I.dims}] | ${wt(I.dataType)}, `});let w="";g.forEach((I,k)=>{w+=`output[${k}]: [${I.dims}] | ${wt(I.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${c}" ${v}${w}start time: ${_} ns, execution time: ${S-_} ns`)}Sr("GPU",`${c}::${b}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Ye()}run(e,t,r,i,a,n){ut(e.name);let s=[];for(let w=0;w<t.length;++w){let I=t[w].data;if(I===0)continue;let k=this.gpuDataManager.get(I);if(!k)throw new Error(`no GPU data for input: ${I}`);s.push(k)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((w,I)=>I):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let h=[],g=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=n)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let I=c[w]===-1,k=c[w]===-2,C=I||k?a(u[w].dataType,u[w].dims):i(c[w],u[w].dataType,u[w].dims);if(h.push(C),C.data===0)continue;let z=this.gpuDataManager.get(C.data);if(!z)throw new Error(`no GPU data for output: ${C.data}`);if(I&&this.temporaryData.push(z),k){let B=this.kernelPersistentData.get(this.currentKernelId);B||(B=[],this.kernelPersistentData.set(this.currentKernelId,B)),B.push(z)}g.push(z)}if(s.length!==t.length||g.length!==h.length){if(g.length===0)return Ye(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(d){let w=0,I=[];d.forEach(B=>{let $=typeof B.data=="number"?[B.data]:B.data;if($.length===0)return;let N=B.type===10?2:4,V,K;B.type===10?(K=$.length>4?16:$.length>2?8:$.length*N,V=$.length>4?16:N*$.length):(K=$.length<=2?$.length*N:16,V=16),w=Math.ceil(w/K)*K,I.push(w);let j=B.type===10?8:4;w+=$.length>4?Math.ceil($.length/j)*V:$.length*N});let k=16;w=Math.ceil(w/k)*k;let C=new ArrayBuffer(w);d.forEach((B,$)=>{let N=I[$],V=typeof B.data=="number"?[B.data]:B.data;if(B.type===6)new Int32Array(C,N,V.length).set(V);else if(B.type===12)new Uint32Array(C,N,V.length).set(V);else if(B.type===10)new Uint16Array(C,N,V.length).set(V);else if(B.type===1)new Float32Array(C,N,V.length).set(V);else throw new Error(`Unsupported uniform type: ${wt(B.type)}`)});let z=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,C,0,w),this.gpuDataManager.release(z.id),b={offset:0,size:w,buffer:z.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),_=y[1]===1&&y[2]===1,S=Jd(e,t,_),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,y),this.programManager.setArtifact(S,v),we("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let w=0;w<d.length;w++){let I=d[w],k=I.type,C=typeof I.data=="number"?1:I.data.length,[z,B]=v.uniformVariablesInfo[w];if(k!==z||C!==B)throw new Error(`Uniform variable ${w} mismatch: expect type ${z} with size ${B}, got type ${k} with size ${C} in program "${v.programInfo.name}".`)}}if(we("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,s,g,y,b),Ye(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Cf.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),we("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await qa(this,e,t);return hn(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){we("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){we("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){we("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Bf={};ir(Bf,{init:()=>Mf});var Qr,tp,Mf,vy=G(()=>{"use strict";ne(),_t(),le(),E0(),Qr=class Rf{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(M.size(t)!==M.size(this.dims))throw new Error("Invalid new shape");return new Rf(this.module,this.dataType,this.data,t)}},tp=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*a++,n)),c=Number(e.getValue(i*a++,"*")),h=Number(e.getValue(i*a++,n)),g=[];for(let b=0;b<h;b++)g.push(Number(e.getValue(i*a++,n)));u.push(new Qr(e,d,c,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,i=(t==null?void 0:t.outputs)??[],a=(u,l,d)=>new Qr(this.module,l,this.output(u,d),d),n=(u,l)=>{let d=Gt(u,l);if(!d)throw new Error(`Unsupported data type: ${u}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Qr(this.module,u,c,l)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Mf=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(_y(),xr(Af)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)we("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{we("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),h)}},async(u,l,d)=>{we("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{we("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let h=new tp(t,s,Number(l));return s.computeKernel(Number(u),h,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new qp(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,d,c)=>n.ensureTensor(s,u,l,d,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u),(s,u)=>n.registerMLContext(s,u),!!r.trace])}}}),rp,Sn,Tn,It,ip,Ma,di,In,kn,Ra,En,Cn,zn,Nf=G(()=>{"use strict";Qe(),T0(),I0(),ne(),Kt(),un(),Rp(),rp=(e,t)=>{Ce()._OrtInit(e,t)!==0&&Se("Can't initialize onnxruntime.")},Sn=async e=>{rp(e.wasm.numThreads,ni(e.logLevel))},Tn=async(e,t)=>{var i,a;(a=(i=Ce()).asyncInit)==null||a.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(vy(),xr(Bf)).init;t==="webgpu"&&await n("webgpu",Ce(),e,r),t==="webnn"&&await n("webnn",Ce(),e)}},It=new Map,ip=e=>{let t=Ce(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&Se("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Ma=(e,t)=>{let r=Ce(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&Se("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let d=r.HEAPU32[a/4+1],c=[];for(let h=0;h<d;h++){let g=Number(r.getValue(a+8+h*n,"*"));c.push(g!==0?r.UTF8ToString(g):Number(r.getValue(a+8+(h+d)*n,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},di=e=>{let t=Ce(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},In=async(e,t)=>{var h,g,b,y;let r,i,a=Ce();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=di(e);let n=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await Mp(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let $=[];for(let N of t.externalData){let V=typeof N=="string"?N:N.path,K=typeof N=="string"?N:N.data;$.push(pn(K).then(j=>{a.mountExternalData(V,j)}))}await Promise.all($)}for(let $ of(t==null?void 0:t.executionProviders)??[])if((typeof $=="string"?$:$.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof $!="string"){let N=$,V=N==null?void 0:N.context,K=N==null?void 0:N.gpuDevice,j=N==null?void 0:N.deviceType,X=N==null?void 0:N.powerPreference;V?a.currentContext=V:K?a.currentContext=await a.webnnCreateMLContext(K):a.currentContext=await a.webnnCreateMLContext({deviceType:j,powerPreference:X})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),(h=a.webgpuOnCreateSession)==null||h.call(a,n),n===0&&Se("Can't create a session."),(g=a.jsepOnCreateSession)==null||g.call(a),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[_,S]=ip(n),v=!!(t!=null&&t.enableGraphCapture),w=[],I=[],k=[],C=[],z=[];for(let $=0;$<_;$++){let[N,V,K]=Ma(n,$);N===0&&Se("Can't get an input name."),d.push(N);let j=a.UTF8ToString(N);w.push(j),k.push(V===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:wt(V),shape:K})}for(let $=0;$<S;$++){let[N,V,K]=Ma(n,$+_);N===0&&Se("Can't get an output name."),c.push(N);let j=a.UTF8ToString(N);I.push(j),C.push(V===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:wt(V),shape:K});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){z.push("gpu-buffer");continue}let X=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((b=t==null?void 0:t.preferredOutputLocation)==null?void 0:b[j])??"cpu",R=a.webnnIsGraphOutput;if(X==="cpu"&&R&&R(n,j)){z.push("ml-tensor-cpu-output");continue}if(X!=="cpu"&&X!=="cpu-pinned"&&X!=="gpu-buffer"&&X!=="ml-tensor")throw new Error(`Not supported preferred output location: ${X}.`);if(v&&X!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${X}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);z.push(X)}}let B=null;return z.some($=>$==="gpu-buffer"||$==="ml-tensor"||$==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&Se("Can't create IO binding."),B={handle:u,outputPreferredLocations:z,outputPreferredLocationsEncoded:z.map($=>$==="ml-tensor-cpu-output"?"ml-tensor":$).map($=>La($))}),It.set(n,[n,d,c,B,v,!1]),[n,w,I,k,C]}catch(_){throw d.forEach(S=>a._OrtFree(S)),c.forEach(S=>a._OrtFree(S)),u!==0&&a._OrtReleaseBinding(u)!==0&&Se("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&Se("Can't release session."),_}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&Se("Can't release session options."),l.forEach(_=>a._free(_)),(y=a.unmountExternalData)==null||y.call(a)}},kn=e=>{var l,d,c;let t=Ce(),r=It.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&Se("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Se("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),a.forEach(h=>t._OrtFree(h)),n.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(i)!==0&&Se("Can't release session."),It.delete(e)},Ra=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=Ce(),l=u.PTR_SIZE,d=e[0],c=e[1],h=e[3],g=h,b,y;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let v=e[2].gpuBuffer;y=Gt(Vt(d),c);{let w=u.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');b=w(i,n,v,y)}}else if(h==="ml-tensor"){let v=e[2].mlTensor;y=Gt(Vt(d),c);let w=u.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');b=w(i,v,Vt(d),c)}else{let v=e[2];if(Array.isArray(v)){y=l*v.length,b=u._malloc(y),r.push(b);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);u.setValue(b+w*l,st(v[w],r),"*")}}else{let w=u.webnnIsGraphInput,I=u.webnnIsGraphOutput;if(d!=="string"&&w&&I){let k=u.UTF8ToString(a);if(w(i,k)||I(i,k)){let C=Vt(d);y=Gt(C,c),g="ml-tensor";let z=u.webnnCreateTemporaryTensor,B=u.webnnUploadTensor;if(!z||!B)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await z(i,C,c);B($,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),b=$}else y=v.byteLength,b=u._malloc(y),r.push(b),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,y),b)}else y=v.byteLength,b=u._malloc(y),r.push(b),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,y),b)}}let _=u.stackSave(),S=u.stackAlloc(4*c.length);try{c.forEach((w,I)=>u.setValue(S+I*l,w,l===4?"i32":"i64"));let v=u._OrtCreateTensor(Vt(d),b,y,S,c.length,La(g));v===0&&Se(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(v)}finally{u.stackRestore(_)}},En=async(e,t,r,i,a,n)=>{var j,X,R,Y;let s=Ce(),u=s.PTR_SIZE,l=It.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],h=l[2],g=l[3],b=l[4],y=l[5],_=t.length,S=i.length,v=0,w=[],I=[],k=[],C=[],z=[],B=s.stackSave(),$=s.stackAlloc(_*u),N=s.stackAlloc(_*u),V=s.stackAlloc(S*u),K=s.stackAlloc(S*u);try{[v,w]=Bp(n),Ct("wasm prepareInputOutputTensor");for(let W=0;W<_;W++)await Ra(r[W],I,C,e,c[t[W]],t[W],b);for(let W=0;W<S;W++)await Ra(a[W],k,C,e,h[i[W]],_+i[W],b);zt("wasm prepareInputOutputTensor");for(let W=0;W<_;W++)s.setValue($+W*u,I[W],"*"),s.setValue(N+W*u,c[t[W]],"*");for(let W=0;W<S;W++)s.setValue(V+W*u,k[W],"*"),s.setValue(K+W*u,h[i[W]],"*");if(g&&!y){let{handle:W,outputPreferredLocations:O,outputPreferredLocationsEncoded:T}=g;if(c.length!==_)throw new Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${c.length}).`);Ct("wasm bindInputsOutputs");for(let P=0;P<_;P++){let q=t[P];await s._OrtBindInput(W,c[q],I[P])!==0&&Se(`Can't bind input[${P}] for session=${e}.`)}for(let P=0;P<S;P++){let q=i[P];(j=a[P])!=null&&j[3]?(z.push(k[P]),s._OrtBindOutput(W,h[q],k[P],0)!==0&&Se(`Can't bind pre-allocated output[${P}] for session=${e}.`)):s._OrtBindOutput(W,h[q],0,T[q])!==0&&Se(`Can't bind output[${P}] to ${O[P]} for session=${e}.`)}zt("wasm bindInputsOutputs"),It.set(e,[d,c,h,g,b,!0])}(X=s.jsepOnRunStart)==null||X.call(s,d),(R=s.webnnOnRunStart)==null||R.call(s,d);let Q;g?Q=await s._OrtRunWithBinding(d,g.handle,S,V,v):Q=await s._OrtRun(d,N,$,_,K,S,V,v),Q!==0&&Se("failed to call OrtRun().");let ie=[],_e=[];Ct("wasm ProcessOutputTensor");for(let W=0;W<S;W++){let O=Number(s.getValue(V+W*u,"*"));if(O===k[W]||z.includes(k[W])){ie.push(a[W]),O!==k[W]&&s._OrtReleaseTensor(O)!==0&&Se("Can't release tensor.");continue}let T=s.stackSave(),P=s.stackAlloc(4*u),q=!1,L,J=0;try{s._OrtGetTensorData(O,P,P+u,P+2*u,P+3*u)!==0&&Se(`Can't access output tensor data on index ${W}.`);let ue=u===4?"i32":"i64",ee=Number(s.getValue(P,ue));J=s.getValue(P+u,"*");let se=s.getValue(P+u*2,"*"),he=Number(s.getValue(P+u*3,ue)),be=[];for(let pe=0;pe<he;pe++)be.push(Number(s.getValue(se+pe*u,ue)));s._OrtFree(se)!==0&&Se("Can't free memory for tensor dims.");let me=be.reduce((pe,H)=>pe*H,1);L=wt(ee);let Te=g==null?void 0:g.outputPreferredLocations[i[W]];if(L==="string"){if(Te==="gpu-buffer"||Te==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let pe=[];for(let H=0;H<me;H++){let Ee=s.getValue(J+H*u,"*"),qe=s.getValue(J+(H+1)*u,"*"),Le=H===me-1?void 0:qe-Ee;pe.push(s.UTF8ToString(Ee,Le))}ie.push([L,be,pe,"cpu"])}else if(Te==="gpu-buffer"&&me>0){let pe=s.jsepGetBuffer;if(!pe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let H=pe(J),Ee=Gt(ee,me);if(Ee===void 0||!ln(L))throw new Error(`Unsupported data type: ${L}`);q=!0,ie.push([L,be,{gpuBuffer:H,download:s.jsepCreateDownloader(H,Ee,L),dispose:()=>{s._OrtReleaseTensor(O)!==0&&Se("Can't release tensor.")}},"gpu-buffer"])}else if(Te==="ml-tensor"&&me>0){let pe=s.webnnEnsureTensor,H=s.webnnIsGraphInputOutputTypeSupported;if(!pe||!H)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Gt(ee,me)===void 0||!dn(L))throw new Error(`Unsupported data type: ${L}`);if(!H(e,L,!1))throw new Error(`preferredLocation "ml-tensor" for ${L} output is not supported by current WebNN Context.`);let Ee=await pe(e,J,ee,be,!1);q=!0,ie.push([L,be,{mlTensor:Ee,download:s.webnnCreateMLTensorDownloader(J,L),dispose:()=>{s.webnnReleaseTensorId(J),s._OrtReleaseTensor(O)}},"ml-tensor"])}else if(Te==="ml-tensor-cpu-output"&&me>0){let pe=s.webnnCreateMLTensorDownloader(J,L)(),H=ie.length;q=!0,_e.push((async()=>{let Ee=[H,await pe];return s.webnnReleaseTensorId(J),s._OrtReleaseTensor(O),Ee})()),ie.push([L,be,[],"cpu"])}else{let pe=pi(L),H=new pe(me);new Uint8Array(H.buffer,H.byteOffset,H.byteLength).set(s.HEAPU8.subarray(J,J+H.byteLength)),ie.push([L,be,H,"cpu"])}}finally{s.stackRestore(T),L==="string"&&J&&s._free(J),q||s._OrtReleaseTensor(O)}}g&&!b&&(s._OrtClearBoundOutputs(g.handle)!==0&&Se("Can't clear bound outputs."),It.set(e,[d,c,h,g,b,!1]));for(let[W,O]of await Promise.all(_e))ie[W][2]=O;return zt("wasm ProcessOutputTensor"),ie}finally{(Y=s.webnnOnRunEnd)==null||Y.call(s,d),s.stackRestore(B),I.forEach(Q=>s._OrtReleaseTensor(Q)),k.forEach(Q=>s._OrtReleaseTensor(Q)),C.forEach(Q=>s._free(Q)),v!==0&&s._OrtReleaseRunOptions(v),w.forEach(Q=>s._free(Q))}},Cn=e=>{let t=Ce(),r=It.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&Se("Can't get an profile file name."),t._OrtFree(a)},zn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),kt,Ge,Jt,yr,br,Jr,Na,ei,Ut,Lt,ap,Df,Pf,Uf,Lf,qf,Vf,Gf,Wf=G(()=>{"use strict";Qe(),Nf(),Kt(),sn(),kt=()=>!!Ae.wasm.proxy&&typeof document<"u",Jt=!1,yr=!1,br=!1,ei=new Map,Ut=(e,t)=>{let r=ei.get(e);r?r.push(t):ei.set(e,[t])},Lt=()=>{if(Jt||!yr||br||!Ge)throw new Error("worker not ready")},ap=e=>{switch(e.data.type){case"init-wasm":Jt=!1,e.data.err?(br=!0,Na[1](e.data.err)):(yr=!0,Na[0]()),Jr&&(URL.revokeObjectURL(Jr),Jr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ei.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Df=async()=>{if(!yr){if(Jt)throw new Error("multiple calls to 'initWasm()' detected.");if(br)throw new Error("previous call to 'initWasm()' failed.");if(Jt=!0,kt())return new Promise((e,t)=>{Ge==null||Ge.terminate(),Ap().then(([r,i])=>{try{Ge=i,Ge.onerror=n=>t(n),Ge.onmessage=ap,Na=[e,t];let a={type:"init-wasm",in:Ae};!a.in.wasm.wasmPaths&&(r||Ua)&&(a.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-D-icqfN-.wasm",import.meta.url).href,import.meta.url).href}),Ge.postMessage(a),Jr=r}catch(a){t(a)}},t)});try{await on(Ae.wasm),await Sn(Ae),yr=!0}catch(e){throw br=!0,e}finally{Jt=!1}}},Pf=async e=>{if(kt())return Lt(),new Promise((t,r)=>{Ut("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:Ae}};Ge.postMessage(i)});await Tn(Ae,e)},Uf=async e=>kt()?(Lt(),new Promise((t,r)=>{Ut("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ge.postMessage(i,[e.buffer])})):di(e),Lf=async(e,t)=>{if(kt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Lt(),new Promise((r,i)=>{Ut("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Ge.postMessage(a,n)})}else return In(e,t)},qf=async e=>{if(kt())return Lt(),new Promise((t,r)=>{Ut("release",[t,r]);let i={type:"release",in:e};Ge.postMessage(i)});kn(e)},Vf=async(e,t,r,i,a,n)=>{if(kt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Lt(),new Promise((s,u)=>{Ut("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};Ge.postMessage(d,zn(l))})}else return En(e,t,r,i,a,n)},Gf=async e=>{if(kt())return Lt(),new Promise((t,r)=>{Ut("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ge.postMessage(i)});Cn(e)}}),Da,np,Ff,$y=G(()=>{"use strict";Qe(),Wf(),ne(),nn(),Rp(),Da=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},np=e=>{switch(e[3]){case"cpu":return new ot(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ln(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return ot.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!dn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return ot.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Ff=class{async fetchModelAndCopyToWasmMemory(e){return Uf(await pn(e))}async loadModel(e,t){ut();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Lf(r,t),Ye()}async dispose(){return qf(this.sessionId)}async run(e,t,r){ut();let i=[],a=[];Object.entries(e).forEach(h=>{let g=h[0],b=h[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);i.push(b),a.push(y)});let n=[],s=[];Object.entries(t).forEach(h=>{let g=h[0],b=h[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);n.push(b),s.push(y)});let u=i.map((h,g)=>Da(h,()=>`input "${this.inputNames[a[g]]}"`)),l=n.map((h,g)=>h?Da(h,()=>`output "${this.outputNames[s[g]]}"`):null),d=await Vf(this.sessionId,a,u,s,l,r),c={};for(let h=0;h<d.length;h++)c[this.outputNames[s[h]]]=n[h]??np(d[h]);return Ye(),c}startProfiling(){}endProfiling(){Gf(this.sessionId)}}}),Hf={};ir(Hf,{OnnxruntimeWebAssemblyBackend:()=>Ja,initializeFlags:()=>Qa,wasmBackend:()=>jf});var Qa,Ja,jf,xy=G(()=>{"use strict";Qe(),Wf(),$y(),Qa=()=>{(typeof Ae.wasm.initTimeout!="number"||Ae.wasm.initTimeout<0)&&(Ae.wasm.initTimeout=0);let e=Ae.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ae.wasm.simd=!1),typeof Ae.wasm.proxy!="boolean"&&(Ae.wasm.proxy=!1),typeof Ae.wasm.trace!="boolean"&&(Ae.wasm.trace=!1),typeof Ae.wasm.numThreads!="number"||!Number.isInteger(Ae.wasm.numThreads)||Ae.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ae.wasm.numThreads=1;else{let t=typeof navigator>"u"?u0("node:os").cpus().length:navigator.hardwareConcurrency;Ae.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ja=class{async init(e){Qa(),await Df(),await Pf(e)}async createInferenceSessionHandler(e,t){let r=new Ff;return await r.loadModel(e,t),r}},jf=new Ja});Qe();Qe();Qe();var Sy="1.29.0",Ty=Tp;{let e=(xy(),xr(Hf)).wasmBackend;Wt("webgpu",e,5),Wt("webnn",e,5),Wt("cpu",e,10),Wt("wasm",e,10)}Object.defineProperty(Ae.versions,"web",{value:Sy,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Iy=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return an},get TRACE(){return Sr},get TRACE_EVENT_BEGIN(){return Ct},get TRACE_EVENT_END(){return zt},get TRACE_FUNC_BEGIN(){return ut},get TRACE_FUNC_END(){return Ye},get Tensor(){return ot},default:Ty,get env(){return Ae},get registerBackend(){return Wt}},Symbol.toStringTag,{value:"Module"}));function sp(){return(typeof window<"u"?window.ort:null)||Iy}class ky{constructor(){oe(this,"session",null);oe(this,"isLoaded",!1);oe(this,"loadPromise",null)}async init(t){if(this.isLoaded&&this.session)return;if(this.loadPromise)return this.loadPromise;const r=typeof document<"u"&&document.baseURI?document.baseURI:typeof window<"u"?window.location.href:"",i=t||(r?new URL("model.onnx",r).href:"./model.onnx");return this.loadPromise=(async()=>{try{const a=sp();a.env&&a.env.wasm&&(a.env.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.21.0/dist/",a.env.wasm.numThreads=1),console.log(`Loading ONNX model from: ${i}`),this.session=await a.InferenceSession.create(i,{executionProviders:["wasm"],graphOptimizationLevel:"all"}),this.isLoaded=!0,console.log("Connect Four AI model loaded successfully!")}catch(a){throw this.loadPromise=null,this.isLoaded=!1,console.error(`Failed to load ONNX model from ${i}:`,a),a}})(),this.loadPromise}isReady(){return this.isLoaded&&this.session!==null}createInputTensor(t,r){const i=r===1?2:1,a=new Float32Array(1*Ke*Ie*2);for(let s=0;s<Ke;s++)for(let u=0;u<Ie;u++){const l=t[s][u],d=(s*Ie+u)*2;l===r?a[d+0]=1:l===i&&(a[d+1]=1)}const n=sp();return new n.Tensor("float32",a,[1,Ke,Ie,2])}async evaluate(t,r){if(this.session||await this.init(),!this.session)throw new Error("AI Session not initialized");const i=this.createInputTensor(t,r),a=this.session.inputNames[0]||"model_input",n=this.session.outputNames[0]||"play",l=(await this.session.run({[a]:i}))[n].data,d=[];let c=-1/0,h=-1;for(let S=0;S<Ie;S++){const v=Ni(t,S),w=l[S];v&&w>c&&(c=w,h=S)}const g=Array.from({length:Ie},(S,v)=>v).filter(S=>Ni(t,S));let b=0;const y=new Array(Ie).fill(0),_=.2;for(const S of g){const v=Math.exp((l[S]-c)/_);y[S]=v,b+=v}for(let S=0;S<Ie;S++){const v=Ni(t,S),w=l[S],I=v&&b>0?y[S]/b:0;d.push({column:S,qValue:w,probability:I,isLegal:v,isBest:S===h})}return d}async selectMove(t,r,i){const a=await this.evaluate(t,r),n=a.filter(y=>y.isLegal);if(n.length===0)throw new Error("No legal moves available");const s=Math.max(...n.map(y=>y.qValue));let u=n.filter(y=>s-y.qValue<=i.blunderThreshold);u.length===0&&(u=n.filter(y=>y.isBest));const l=i.temperature;if(l<=.02||u.length===1){let y=u[0];for(const _ of u)_.qValue>y.qValue&&(y=_);return{chosenColumn:y.column,evaluations:a}}let d=0;const c=[];for(const y of u){const _=Math.exp((y.qValue-s)/l);c.push({col:y.column,weight:_}),d+=_}const h=Math.random()*d;let g=0,b=u[0].column;for(const y of c)if(g+=y.weight,h<=g){b=y.col;break}return{chosenColumn:b,evaluations:a}}}const ti=new ky;class Ey{constructor(t,r){oe(this,"container");oe(this,"boardElement");oe(this,"ghostPiece");oe(this,"frontPlateSvg");oe(this,"svgOverlay");oe(this,"events");oe(this,"isInteractive",!0);oe(this,"currentPlayer",1);oe(this,"currentBoard",null);oe(this,"hoveredCol",-1);oe(this,"resizeObserver",null);this.container=t,this.events=r,this.container.innerHTML="",this.container.classList.add("board-container"),this.boardElement=document.createElement("div"),this.boardElement.className="c4-board";const i=document.createElement("div");i.className="c4-board-back",this.boardElement.appendChild(i);const a=document.createElement("div");a.className="c4-slot-rim";for(let n=0;n<Ie;n++){const s=document.createElement("div");s.className="c4-slot-entry",a.appendChild(s)}this.boardElement.appendChild(a),this.buildBoardGrid(),this.ghostPiece=document.createElement("div"),this.ghostPiece.className="ghost-half-piece p1",this.ghostPiece.style.display="none",this.boardElement.appendChild(this.ghostPiece),this.frontPlateSvg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.frontPlateSvg.setAttribute("class","c4-board-front"),this.boardElement.appendChild(this.frontPlateSvg),this.svgOverlay=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svgOverlay.setAttribute("class","c4-svg-overlay"),this.boardElement.appendChild(this.svgOverlay),this.bindHoverEvents(),this.container.appendChild(this.boardElement),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.renderFrontPlate()}),this.resizeObserver.observe(this.boardElement)),requestAnimationFrame(()=>this.renderFrontPlate())}buildBoardGrid(){for(let t=0;t<Ke;t++){const r=document.createElement("div");r.className="board-row";for(let i=0;i<Ie;i++){const a=document.createElement("div");a.className="board-cell",a.dataset.row=t.toString(),a.dataset.col=i.toString(),r.appendChild(a)}this.boardElement.appendChild(r)}}bindHoverEvents(){let t=!1,r=null,i=0;this.boardElement.addEventListener("pointerdown",n=>{if(this.isInteractive&&(n.pointerType==="touch"||n.pointerType==="pen")){t=!0,r=n.pointerId;try{this.boardElement.setPointerCapture(n.pointerId)}catch{}const s=this.calculateColFromX(n.clientX);s>=0&&s<Ie&&this.showGhostAt(s)}});const a=n=>{if(!this.isInteractive){this.hideGhost();return}if((n.pointerType==="touch"||n.pointerType==="pen")&&(!t||n.pointerId!==r))return;const s=this.calculateColFromX(n.clientX);s>=0&&s<Ie?this.showGhostAt(s):this.hideGhost()};this.boardElement.addEventListener("pointermove",a),this.boardElement.addEventListener("pointerenter",n=>{n.pointerType==="mouse"&&a(n)}),this.boardElement.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&this.hideGhost()}),this.boardElement.addEventListener("pointerup",n=>{if(n.pointerType==="touch"||n.pointerType==="pen"){if(!t||n.pointerId!==r)return;t=!1,r=null;try{this.boardElement.releasePointerCapture(n.pointerId)}catch{}if(!this.isInteractive){this.hideGhost();return}const s=this.boardElement.getBoundingClientRect(),u=80,l=30;if(n.clientX>=s.left-l&&n.clientX<=s.right+l&&n.clientY>=s.top-u&&n.clientY<=s.bottom+u){const c=this.calculateColFromX(n.clientX);if(c>=0&&c<Ie&&this.isLegalMove(c)){i=Date.now(),this.hideGhost(),this.events.onColumnSelected(c);return}}this.hideGhost()}}),this.boardElement.addEventListener("pointercancel",n=>{if(n.pointerId===r){t=!1,r=null;try{this.boardElement.releasePointerCapture(n.pointerId)}catch{}this.hideGhost()}}),this.boardElement.addEventListener("click",n=>{if(Date.now()-i<600||!this.isInteractive)return;const s=this.calculateColFromX(n.clientX);s>=0&&s<Ie&&this.isLegalMove(s)&&(this.hideGhost(),this.events.onColumnSelected(s))})}calculateColFromX(t){const r=Array.from(this.boardElement.querySelectorAll('.board-cell[data-row="0"]'));if(r.length===Ie){let s=0,u=1/0;for(let l=0;l<Ie;l++){const d=r[l].getBoundingClientRect(),c=d.left+d.width/2,h=Math.abs(t-c);h<u&&(u=h,s=l)}return s}const i=this.boardElement.getBoundingClientRect(),a=t-i.left,n=Math.floor(a/i.width*Ie);return Math.max(0,Math.min(Ie-1,n))}isLegalMove(t){return this.currentBoard?this.currentBoard[0][t]===0:!0}showGhostAt(t){if(!this.isInteractive){this.hideGhost();return}if(!this.isLegalMove(t)){this.hideGhost(),this.boardElement.style.cursor="not-allowed";return}this.hoveredCol=t,this.boardElement.style.cursor="pointer";const r=this.boardElement.querySelector(`.board-cell[data-row="0"][data-col="${t}"]`);if(!r)return;const i=this.boardElement.getBoundingClientRect(),a=r.getBoundingClientRect(),n=a.left-i.left,s=a.width,u=a.top-i.top-s*.55;this.ghostPiece.className=`ghost-half-piece p${this.currentPlayer}`,this.ghostPiece.style.left=`${n}px`,this.ghostPiece.style.top=`${u}px`,this.ghostPiece.style.width=`${s}px`,this.ghostPiece.style.height=`${s}px`,this.ghostPiece.style.zIndex="5",this.ghostPiece.style.display="block"}hideGhost(){this.hoveredCol=-1,this.ghostPiece.style.display="none",this.boardElement.style.cursor=this.isInteractive?"pointer":"default"}setInteractive(t){this.isInteractive=t,t||this.hideGhost()}setCurrentPlayer(t){this.currentPlayer=t,this.hoveredCol>=0&&this.showGhostAt(this.hoveredCol)}setBoardState(t){this.currentBoard=t,this.hoveredCol>=0&&this.showGhostAt(this.hoveredCol)}async dropPiece(t,r,i){this.hideGhost();const a=this.boardElement.querySelector(`.board-cell[data-row="0"][data-col="${r}"]`),n=this.boardElement.querySelector(`.board-cell[data-row="${t}"][data-col="${r}"]`);if(!a||!n)return;const s=this.boardElement.getBoundingClientRect(),u=a.getBoundingClientRect(),l=n.getBoundingClientRect(),d=l.left-s.left,c=l.width,h=u.top-s.top-c*.55,b=l.top-s.top-h,y=document.createElement("div");y.className=`token p${i} falling-token`,y.style.left=`${d}px`,y.style.top=`${h}px`,y.style.width=`${c}px`,y.style.height=`${c}px`,y.style.position="absolute",y.style.zIndex="5",this.boardElement.appendChild(y);const _=Math.round(200+t/(Ke-1)*250),S=Math.min(16,b*.12);await y.animate([{transform:"translateY(0px)",offset:0,easing:"cubic-bezier(0.5, 0, 0.95, 0.5)"},{transform:`translateY(${b}px)`,offset:.78,easing:"ease-out"},{transform:`translateY(${b-S}px)`,offset:.89,easing:"ease-in"},{transform:`translateY(${b}px)`,offset:1}],{duration:_,fill:"forwards"}).finished,y.remove();const w=document.createElement("div");w.className=`token p${i}`,n.appendChild(w)}renderFrontPlate(){const t=this.boardElement.getBoundingClientRect();if(!t.width||!t.height){requestAnimationFrame(()=>this.renderFrontPlate());return}const r=t.width,i=t.height;this.frontPlateSvg.setAttribute("viewBox",`0 0 ${r} ${i}`),this.frontPlateSvg.innerHTML="";const a=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","linearGradient");n.id="c4-front-gradient",n.setAttribute("x1","0"),n.setAttribute("y1","0"),n.setAttribute("x2","0"),n.setAttribute("y2","1");const s=document.createElementNS("http://www.w3.org/2000/svg","stop");s.setAttribute("offset","0%"),s.setAttribute("stop-color","#24375b");const u=document.createElementNS("http://www.w3.org/2000/svg","stop");u.setAttribute("offset","50%"),u.setAttribute("stop-color","#1b2a46");const l=document.createElementNS("http://www.w3.org/2000/svg","stop");l.setAttribute("offset","100%"),l.setAttribute("stop-color","#0f192b"),n.appendChild(s),n.appendChild(u),n.appendChild(l),a.appendChild(n);const d=6,c=document.createElementNS("http://www.w3.org/2000/svg","mask");c.id="c4-holes-mask";const h=document.createElementNS("http://www.w3.org/2000/svg","rect");h.setAttribute("x","0"),h.setAttribute("y",d.toString()),h.setAttribute("width",r.toString()),h.setAttribute("height",(i-d).toString()),h.setAttribute("rx","18"),h.setAttribute("ry","18"),h.setAttribute("fill","#ffffff"),c.appendChild(h);const g=[];for(let w=0;w<Ke;w++)for(let I=0;I<Ie;I++){const k=this.boardElement.querySelector(`.board-cell[data-row="${w}"][data-col="${I}"]`);if(k){const C=k.getBoundingClientRect(),z=C.left-t.left+C.width/2,B=C.top-t.top+C.height/2,$=Math.max(10,C.width/2-.75);g.push({cx:z,cy:B,radius:$});const N=document.createElementNS("http://www.w3.org/2000/svg","circle");N.setAttribute("cx",z.toFixed(2)),N.setAttribute("cy",B.toFixed(2)),N.setAttribute("r",$.toFixed(2)),N.setAttribute("fill","#000000"),c.appendChild(N)}}a.appendChild(c),this.frontPlateSvg.appendChild(a);const b=document.createElementNS("http://www.w3.org/2000/svg","rect");b.setAttribute("x","0"),b.setAttribute("y",d.toString()),b.setAttribute("width",r.toString()),b.setAttribute("height",(i-d).toString()),b.setAttribute("rx","18"),b.setAttribute("ry","18"),b.setAttribute("fill","url(#c4-front-gradient)"),b.setAttribute("mask","url(#c4-holes-mask)"),this.frontPlateSvg.appendChild(b);const y=document.createElementNS("http://www.w3.org/2000/svg","path");y.setAttribute("d",`M 18 ${d} H ${r-18}`),y.setAttribute("stroke","rgba(255, 255, 255, 0.16)"),y.setAttribute("stroke-width","1.2"),this.frontPlateSvg.appendChild(y);const _=document.createElementNS("http://www.w3.org/2000/svg","g");_.setAttribute("class","c4-hole-rims");for(const{cx:w,cy:I,radius:k}of g){const C=document.createElementNS("http://www.w3.org/2000/svg","circle");C.setAttribute("cx",w.toFixed(2)),C.setAttribute("cy",I.toFixed(2)),C.setAttribute("r",k.toFixed(2)),C.setAttribute("fill","none"),C.setAttribute("stroke","rgba(0, 0, 0, 0.6)"),C.setAttribute("stroke-width","2"),_.appendChild(C);const z=document.createElementNS("http://www.w3.org/2000/svg","circle");z.setAttribute("cx",w.toFixed(2)),z.setAttribute("cy",I.toFixed(2)),z.setAttribute("r",(k+.5).toFixed(2)),z.setAttribute("fill","none"),z.setAttribute("stroke","rgba(255, 255, 255, 0.09)"),z.setAttribute("stroke-width","1"),_.appendChild(z)}this.frontPlateSvg.appendChild(_);const S=document.createElementNS("http://www.w3.org/2000/svg","rect");S.setAttribute("x","1"),S.setAttribute("y",(d+1).toString()),S.setAttribute("width",(r-2).toString()),S.setAttribute("height",(i-d-2).toString()),S.setAttribute("rx","17"),S.setAttribute("ry","17"),S.setAttribute("fill","none"),S.setAttribute("stroke","rgba(255, 255, 255, 0.12)"),S.setAttribute("stroke-width","1.2"),this.frontPlateSvg.appendChild(S);const v=document.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("x","0"),v.setAttribute("y",d.toString()),v.setAttribute("width",r.toString()),v.setAttribute("height",(i-d).toString()),v.setAttribute("rx","18"),v.setAttribute("ry","18"),v.setAttribute("fill","none"),v.setAttribute("stroke","#2a3d66"),v.setAttribute("stroke-width","1.5"),this.frontPlateSvg.appendChild(v)}highlightWin(t){this.hideGhost();for(const[r,i]of t.winningCells){const a=this.boardElement.querySelector(`.board-cell[data-row="${r}"][data-col="${i}"]`);if(a){const n=a.querySelector(".token");n&&n.classList.add("winning")}}if(t.winningCells.length>=4){const[r,i]=t.winningCells[0],[a,n]=t.winningCells[t.winningCells.length-1],s=this.boardElement.querySelector(`.board-cell[data-row="${r}"][data-col="${i}"]`),u=this.boardElement.querySelector(`.board-cell[data-row="${a}"][data-col="${n}"]`);if(s&&u){const l=this.boardElement.getBoundingClientRect(),d=s.getBoundingClientRect(),c=u.getBoundingClientRect(),h=d.left-l.left+d.width/2,g=d.top-l.top+d.height/2,b=c.left-l.left+c.width/2,y=c.top-l.top+c.height/2,_=b-h,S=y-g,v=Math.sqrt(_*_+S*S),w=Math.atan2(S,_)*(180/Math.PI),k=(d.width||70)*.52;this.svgOverlay.setAttribute("viewBox",`0 0 ${l.width} ${l.height}`),this.svgOverlay.innerHTML="";const C=document.createElementNS("http://www.w3.org/2000/svg","rect");C.setAttribute("x",(-k).toString()),C.setAttribute("y",(-k).toString()),C.setAttribute("width",(v+2*k).toString()),C.setAttribute("height",(2*k).toString()),C.setAttribute("rx",k.toString()),C.setAttribute("ry",k.toString()),C.setAttribute("transform",`translate(${h}, ${g}) rotate(${w})`),C.setAttribute("class",`win-capsule p${t.winner}`),this.svgOverlay.appendChild(C)}}}renderBoard(t){this.currentBoard=t,this.hideGhost(),this.svgOverlay.innerHTML="";for(let r=0;r<Ke;r++)for(let i=0;i<Ie;i++){const a=this.boardElement.querySelector(`.board-cell[data-row="${r}"][data-col="${i}"]`);if(!a)continue;a.innerHTML="";const n=t[r][i];if(n!==0){const s=document.createElement("div");s.className=`token p${n}`,a.appendChild(s)}}}clearBoard(){this.currentBoard=null,this.hideGhost(),this.svgOverlay.innerHTML="",this.boardElement.querySelectorAll(".token, .falling-token").forEach(r=>r.remove())}}class Cy{constructor(t,r){oe(this,"container");oe(this,"events");oe(this,"isVisible",!1);this.container=t,this.events=r,this.container.className="evaluation-bar-row",this.setVisible(!1)}setVisible(t){this.isVisible=t,this.container.style.display=t?"grid":"none"}renderEmpty(){if(this.isVisible){this.container.innerHTML="";for(let t=0;t<Ie;t++){const r=document.createElement("div");r.className="eval-col-card";const i=document.createElement("button");i.className="eval-col-btn",i.disabled=!0,i.innerHTML=`<span>Col ${t+1}</span><span style="opacity:0.4;">--</span>`,r.appendChild(i),this.container.appendChild(r)}}}updateEvaluations(t){if(this.isVisible){this.container.innerHTML="";for(let r=0;r<Ie;r++){const i=t.find(s=>s.column===r),a=document.createElement("div");a.className="eval-col-card";const n=document.createElement("button");if(n.className="eval-col-btn",!i||!i.isLegal)n.disabled=!0,n.innerHTML=`<span>Col ${r+1}</span><span style="opacity:0.35;">Full</span>`;else{i.isBest&&n.classList.add("best-move");const u=`${i.qValue>0?"+":""}${i.qValue.toFixed(2)}`,l=Math.round(i.probability*100);n.innerHTML=`
          <span>Col ${r+1}</span>
          <span>${u}</span>
          <div class="eval-meter">
            <div class="eval-meter-fill" style="width: ${l}%"></div>
          </div>
        `,n.title=`Column ${r+1}: Q = ${i.qValue.toFixed(3)}, Confidence = ${l}%${i.isBest?" (AI Best Move)":""}`,n.addEventListener("click",()=>{this.events.onColumnSelected(r)})}a.appendChild(n),this.container.appendChild(a)}}}}class zy{constructor(){oe(this,"board",wo());oe(this,"currentPlayer",1);oe(this,"gameMode","vs-ai");oe(this,"humanSeat",1);oe(this,"difficultyVsAI","grandmaster");oe(this,"difficultyRed","grandmaster");oe(this,"difficultyYellow","grandmaster");oe(this,"moveHistory",[]);oe(this,"isGameOver",!1);oe(this,"isAnimating",!1);oe(this,"showEvaluations",!1);oe(this,"isSettingsOpen",!1);oe(this,"settingsChanged",!1);oe(this,"boardUI");oe(this,"evalUI");oe(this,"statusBar");oe(this,"statusBarActive");oe(this,"statusBarVictory");oe(this,"victoryIndicator");oe(this,"victoryTitle");oe(this,"victorySub");oe(this,"btnVictoryPlayAgain");oe(this,"p1Card");oe(this,"p2Card");oe(this,"p1Label");oe(this,"p2Label");oe(this,"p1Type");oe(this,"p2Type");oe(this,"statusMessage");oe(this,"vsAiDiffDesc");oe(this,"evalToggleSwitch");oe(this,"settingsModalBackdrop")}async init(){this.bindDOMElements(),this.setupUIComponents(),this.bindEvents(),this.evalUI.setVisible(!1),this.setStatusMessage("Loading AI model...",!1);try{await ti.init(),this.setStatusMessage("AI Model loaded. Your move!",!1)}catch(t){console.warn("Could not load AI model:",t),this.setStatusMessage("Error loading model. Check console.",!0)}this.startNewGame()}bindDOMElements(){this.statusBar=document.getElementById("status-bar"),this.statusBarActive=document.getElementById("status-bar-active"),this.statusBarVictory=document.getElementById("status-bar-victory"),this.victoryIndicator=document.getElementById("victory-indicator"),this.victoryTitle=document.getElementById("victory-title"),this.victorySub=document.getElementById("victory-sub"),this.btnVictoryPlayAgain=document.getElementById("btn-victory-play-again"),this.p1Card=document.getElementById("player1-card"),this.p2Card=document.getElementById("player2-card"),this.p1Label=document.getElementById("p1-label"),this.p2Label=document.getElementById("p2-label"),this.p1Type=document.getElementById("p1-type"),this.p2Type=document.getElementById("p2-type"),this.statusMessage=document.getElementById("status-message"),this.vsAiDiffDesc=document.getElementById("vs-ai-difficulty-desc"),this.evalToggleSwitch=document.getElementById("toggle-eval-switch"),this.settingsModalBackdrop=document.getElementById("settings-modal-backdrop")}setupUIComponents(){const t=document.getElementById("board-container"),r=document.getElementById("evaluation-container");this.boardUI=new Ey(t,{onColumnSelected:i=>this.handleColumnClick(i)}),this.evalUI=new Cy(r,{onColumnSelected:i=>this.handleColumnClick(i)})}bindEvents(){document.getElementById("btn-open-settings").addEventListener("click",()=>{this.isSettingsOpen=!0,this.settingsChanged=!1,this.boardUI.setInteractive(!1),this.updateStatusBar(),this.settingsModalBackdrop.classList.add("open")});const t=()=>{this.settingsModalBackdrop.classList.remove("open"),this.isSettingsOpen=!1,this.settingsChanged?(this.settingsChanged=!1,this.startNewGame()):(this.updateStatusBar(),this.isGameOver||(this.isHumanTurn()?(this.boardUI.setInteractive(!0),this.showEvaluations&&this.refreshEvaluations()):this.isAnimating||this.triggerAITurn()))};document.getElementById("btn-close-settings").addEventListener("click",t),document.getElementById("btn-done-settings").addEventListener("click",t),this.settingsModalBackdrop.addEventListener("click",u=>{u.target===this.settingsModalBackdrop&&t()}),window.addEventListener("keydown",u=>{u.key==="Escape"&&this.settingsModalBackdrop.classList.contains("open")&&t()});const r=document.querySelectorAll("#mode-selector .seg-btn");r.forEach(u=>{u.addEventListener("click",l=>{const d=l.currentTarget,c=d.dataset.mode;c!==this.gameMode&&(r.forEach(h=>h.classList.remove("active")),d.classList.add("active"),this.gameMode=c,this.settingsChanged=!0,this.updateModeUI())})});const i=document.querySelectorAll("#seat-selector .seg-btn");i.forEach(u=>{u.addEventListener("click",l=>{const d=l.currentTarget,c=parseInt(d.dataset.seat||"1",10);c!==this.humanSeat&&(i.forEach(h=>h.classList.remove("active")),d.classList.add("active"),this.humanSeat=c,this.settingsChanged=!0,this.updateModeUI())})});const a=document.querySelectorAll("#vs-ai-difficulty-selector .seg-btn");a.forEach(u=>{u.addEventListener("click",l=>{const d=l.currentTarget;a.forEach(c=>c.classList.remove("active")),d.classList.add("active"),this.difficultyVsAI=d.dataset.difficulty,this.vsAiDiffDesc.textContent=Qt[this.difficultyVsAI].description,this.settingsChanged=!0,this.updateModeUI()})});const n=document.querySelectorAll("#red-difficulty-selector .seg-btn");n.forEach(u=>{u.addEventListener("click",l=>{const d=l.currentTarget;n.forEach(c=>c.classList.remove("active")),d.classList.add("active"),this.difficultyRed=d.dataset.difficulty,this.settingsChanged=!0,this.updateModeUI()})});const s=document.querySelectorAll("#yellow-difficulty-selector .seg-btn");s.forEach(u=>{u.addEventListener("click",l=>{const d=l.currentTarget;s.forEach(c=>c.classList.remove("active")),d.classList.add("active"),this.difficultyYellow=d.dataset.difficulty,this.settingsChanged=!0,this.updateModeUI()})}),document.getElementById("toggle-eval-row").addEventListener("click",()=>{this.showEvaluations=!this.showEvaluations,this.evalToggleSwitch.classList.toggle("on",this.showEvaluations),this.evalUI.setVisible(this.showEvaluations),this.showEvaluations&&!this.isGameOver&&!this.isSettingsOpen&&this.isHumanTurn()&&this.refreshEvaluations()}),document.getElementById("btn-new-game").addEventListener("click",()=>this.startNewGame()),this.btnVictoryPlayAgain.addEventListener("click",()=>this.startNewGame())}updateModeUI(){const t=document.getElementById("seat-selection-group"),r=document.getElementById("vs-ai-difficulty-group"),i=document.getElementById("ai-vs-ai-red-difficulty-group"),a=document.getElementById("ai-vs-ai-yellow-difficulty-group");this.gameMode==="vs-ai"?(t.style.display="flex",r.style.display="flex",i.style.display="none",a.style.display="none",this.p1Label.textContent="Player 1 (Red)",this.p2Label.textContent="Player 2 (Yellow)",this.humanSeat===1?(this.p1Type.textContent="Human (You)",this.p2Type.textContent=`AI (${Qt[this.difficultyVsAI].name})`):(this.p1Type.textContent=`AI (${Qt[this.difficultyVsAI].name})`,this.p2Type.textContent="Human (You)")):this.gameMode==="two-player"?(t.style.display="none",r.style.display="none",i.style.display="none",a.style.display="none",this.p1Label.textContent="Player 1 (Red)",this.p2Label.textContent="Player 2 (Yellow)",this.p1Type.textContent="Human 1",this.p2Type.textContent="Human 2"):this.gameMode==="ai-vs-ai"&&(t.style.display="none",r.style.display="none",i.style.display="flex",a.style.display="flex",this.p1Label.textContent="Red AI",this.p2Label.textContent="Yellow AI",this.p1Type.textContent=`AI (${Qt[this.difficultyRed].name})`,this.p2Type.textContent=`AI (${Qt[this.difficultyYellow].name})`)}isHumanTurn(){return this.gameMode==="two-player"?!0:this.gameMode==="ai-vs-ai"?!1:this.currentPlayer===this.humanSeat}startNewGame(){if(this.board=wo(),this.currentPlayer=1,this.moveHistory=[],this.isGameOver=!1,this.isAnimating=!1,this.statusBarActive.style.display="flex",this.statusBarVictory.style.display="none",this.statusBar.classList.remove("winner-p1","winner-p2"),this.boardUI.clearBoard(),this.boardUI.setBoardState(this.board),this.boardUI.setCurrentPlayer(1),this.updateStatusBar(),this.updateModeUI(),this.isSettingsOpen){this.boardUI.setInteractive(!1);return}this.isHumanTurn()?(this.boardUI.setInteractive(!0),this.showEvaluations?this.refreshEvaluations():this.evalUI.setVisible(!1)):(this.boardUI.setInteractive(!1),this.evalUI.setVisible(!1),this.triggerAITurn())}setStatusMessage(t,r=!1){this.statusMessage.innerHTML=r?`<span style="color:#ef4444;">${t}</span>`:`<span>${t}</span>`}updateStatusBar(){if(this.currentPlayer===1?(this.p1Card.classList.add("active"),this.p2Card.classList.remove("active")):(this.p1Card.classList.remove("active"),this.p2Card.classList.add("active")),this.boardUI.setCurrentPlayer(this.currentPlayer),!this.isGameOver){if(this.isSettingsOpen){this.setStatusMessage("Game Paused");return}if(this.isHumanTurn()){const t=this.currentPlayer===1?"Red":"Yellow";this.setStatusMessage(this.gameMode==="two-player"?`${t}'s Turn`:"Your turn to move")}else{const t=this.currentPlayer===1?"Red":"Yellow";this.setStatusMessage(this.gameMode==="ai-vs-ai"?`${t} AI thinking...`:"AI is thinking...")}}}async refreshEvaluations(){if(!this.showEvaluations||this.isGameOver||this.isSettingsOpen||!ti.isReady()){this.evalUI.renderEmpty();return}try{const t=await ti.evaluate(this.board,this.currentPlayer);this.showEvaluations&&!this.isSettingsOpen&&(this.evalUI.setVisible(!0),this.evalUI.updateEvaluations(t))}catch(t){console.error("Failed to compute evaluations:",t)}}async handleColumnClick(t){this.isSettingsOpen||this.isGameOver||this.isAnimating||!this.isHumanTurn()||Pa(this.board,t)===-1||(await this.executeMove(t,this.currentPlayer),!this.isGameOver&&!this.isHumanTurn()&&!this.isSettingsOpen&&this.triggerAITurn())}async executeMove(t,r){const i=Pa(this.board,t);if(i===-1)return;this.isAnimating=!0,this.boardUI.setInteractive(!1),r0(this.board,t,r),this.boardUI.setBoardState(this.board),this.moveHistory.push({player:r,row:i,col:t}),await this.boardUI.dropPiece(i,t,r);const a=a0(this.board);if(a){this.handleGameWin(a),this.isAnimating=!1;return}if(i0(this.board)){this.handleGameDraw(),this.isAnimating=!1;return}this.currentPlayer=this.currentPlayer===1?2:1,this.updateStatusBar(),this.isAnimating=!1,!this.isSettingsOpen&&this.isHumanTurn()&&(this.boardUI.setInteractive(!0),this.showEvaluations&&await this.refreshEvaluations())}async triggerAITurn(){if(this.isGameOver||this.isSettingsOpen||(this.boardUI.setInteractive(!1),this.updateStatusBar(),await new Promise(i=>setTimeout(i,450)),this.isGameOver||this.isSettingsOpen))return;let t;this.gameMode==="ai-vs-ai"?t=this.currentPlayer===1?this.difficultyRed:this.difficultyYellow:t=this.difficultyVsAI;const r=Qt[t];try{const{chosenColumn:i,evaluations:a}=await ti.selectMove(this.board,this.currentPlayer,r);if(this.isGameOver||this.isSettingsOpen)return;this.showEvaluations&&(this.evalUI.setVisible(!0),this.evalUI.updateEvaluations(a)),await this.executeMove(i,this.currentPlayer),!this.isGameOver&&!this.isSettingsOpen&&this.gameMode==="ai-vs-ai"&&setTimeout(()=>{!this.isGameOver&&!this.isSettingsOpen&&!this.isAnimating&&this.triggerAITurn()},350)}catch(i){console.error("AI turn execution error:",i),this.setStatusMessage("AI encountered an error",!0)}}handleGameWin(t){this.isGameOver=!0,this.boardUI.highlightWin(t),this.boardUI.setInteractive(!1);const r=t.winner===1?"Red":"Yellow",i=this.gameMode==="vs-ai"&&t.winner===this.humanSeat||this.gameMode==="two-player";i&&t0({particleCount:110,spread:70,origin:{y:.6}}),this.statusBar.classList.remove("winner-p1","winner-p2"),this.statusBar.classList.add(`winner-p${t.winner}`),this.statusBarActive.style.display="none",this.statusBarVictory.style.display="flex",this.victoryIndicator.className=`victory-indicator p${t.winner}`,this.victoryTitle.textContent=`${r} Connected 4!`,this.victorySub.textContent=i&&this.gameMode==="vs-ai"?"Incredible match! You outplayed the ResNet AI.":`Victory for ${r} in ${this.moveHistory.length} moves.`}handleGameDraw(){this.isGameOver=!0,this.boardUI.setInteractive(!1),this.statusBar.classList.remove("winner-p1","winner-p2"),this.statusBarActive.style.display="none",this.statusBarVictory.style.display="flex",this.victoryIndicator.className="victory-indicator draw",this.victoryTitle.textContent="It's a Draw!",this.victorySub.textContent="All 42 cells filled without 4 in a row. A hard-fought equilibrium!"}}window.addEventListener("DOMContentLoaded",()=>{new zy().init()});
