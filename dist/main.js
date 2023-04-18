(()=>{"use strict";var r,n,e,t,o={424:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: 'Roboto', sans-serif;\r\n  background-color: #e9d8d8e1;\r\n}\r\n\r\nfooter {\r\n  background-color: black;\r\n  color: white;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.25rem;\r\n  margin-top: auto;\r\n}\r\n\r\nfooter p {\r\n  margin: auto;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 30px;\r\n  font-size: 25px;\r\n}\r\n\r\nnav a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\nnav a:hover {\r\n  color: #f00;\r\n  text-decoration: underline;\r\n}\r\n\r\n.container {\r\n  margin-top: 30px;\r\n  padding: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  grid-gap: 20px;\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n  width: 300px;\r\n  height: 300px;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\nli:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\nbutton {\r\n  background-color: #fff;\r\n  margin-top: 30px;\r\n  padding: 10px;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #635a5a;\r\n  color: #fff;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.active {\r\n  background-color: #f10b0b;\r\n}\r\n",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var p=[].concat(r[u]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:r=>{r.exports=function(r){return r[1]}},548:(r,n,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),c=e(569),s=e.n(c),u=e(565),p=e.n(u),l=e(216),d=e.n(l),f=e(589),m=e.n(f),v=e(424),h={};h.styleTagTransform=m(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),u=0;u<a.length;u++){var p=e(a[u]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},138:(r,n,e)=>{e.a(r,(async(r,n)=>{try{e(548);const r=async()=>{const r=await fetch(" https://api.tvmaze.com/shows/1/episodes?specials=1");return await r.json()},t=await r(),o=document.querySelector(".list");t.forEach((r=>{const n=document.createElement("li");n.innerHTML=`\n    <img src="${r.image.medium}" alt="${r.name}"/>\n    <div class="row"><h2>${r.name} <h2/> <svg id="my-svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"/></svg> </div>\n    <button>Comments</button>\n    `,o.appendChild(n)})),n()}catch(r){n(r)}}),1)}},a={};function i(r){var n=a[r];if(void 0!==n)return n.exports;var e=a[r]={id:r,exports:{}};return o[r](e,e.exports,i),e.exports}r="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",e="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",t=r=>{r&&!r.d&&(r.d=1,r.forEach((r=>r.r--)),r.forEach((r=>r.r--?r.r++:r())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=1);var s,u,p,l=new Set,d=o.exports,f=new Promise(((r,n)=>{p=n,u=r}));f[n]=d,f[r]=r=>(c&&r(c),l.forEach(r),f.catch((r=>{}))),o.exports=f,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[r])return o;if(o.then){var a=[];a.d=0,o.then((r=>{i[n]=r,t(a)}),(r=>{i[e]=r,t(a)}));var i={};return i[r]=r=>r(a),i}}var c={};return c[r]=r=>{},c[n]=o,c})))(o);var i=()=>s.map((r=>{if(r[e])throw r[e];return r[n]})),u=new Promise((n=>{(a=()=>n(i)).r=0;var e=r=>r!==c&&!l.has(r)&&(l.add(r),r&&!r.d&&(a.r++,r.push(a)));s.map((n=>n[r](e)))}));return a.r?u:i()}),(r=>(r?p(f[e]=r):u(d),t(c)))),c&&(c.d=0)},i.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return i.d(n,{a:n}),n},i.d=(r,n)=>{for(var e in n)i.o(n,e)&&!i.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},i.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),i.nc=void 0,i(138)})();
