(self.webpackChunkcapston2=self.webpackChunkcapston2||[]).push([[179],{424:(n,e,r)=>{"use strict";r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: 'Roboto', sans-serif;\r\n  background-color: #e9d8d8e1;\r\n}\r\n\r\n#logo-image {\r\n  width: 12%;\r\n}\r\n\r\nfooter {\r\n  background-color: black;\r\n  color: white;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.25rem;\r\n  margin-top: auto;\r\n}\r\n\r\nfooter p {\r\n  margin: auto;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 30px;\r\n  font-size: 25px;\r\n}\r\n\r\nnav a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\nnav a:hover {\r\n  color: #f00;\r\n  text-decoration: underline;\r\n}\r\n\r\n.container {\r\n  margin-top: 30px;\r\n  padding: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  grid-gap: 20px;\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n  width: 300px;\r\n  height: 300px;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\nli:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\nbutton {\r\n  background-color: #fff;\r\n  padding: 10px;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #635a5a;\r\n  color: #fff;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 0 15px;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  padding-top: 6%;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(193, 199, 208, 0.97);\r\n  padding-bottom: 30%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.modal-flex {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  margin-top: 3%;\r\n  padding-right: 15%;\r\n  padding-left: 25%;\r\n}\r\n\r\n.modal-flex p {\r\n  display: flex;\r\n  flex: 40%;\r\n  font-size: 1.25rem;\r\n  margin-right: 10%;\r\n}\r\n\r\n/* Modal Content */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  width: 70%;\r\n  height: auto;\r\n  border: 1px solid #ebecf0;\r\n  border-radius: 8px;\r\n  overflow: auto;\r\n  text-align: center;\r\n}\r\n\r\n.modal-content img {\r\n  width: 50%;\r\n  margin-top: 2%;\r\n}\r\n\r\n.modal-content h2 {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 2%;\r\n  font-size: 2rem;\r\n}\r\n\r\n.modal-content h3 {\r\n  display: inline;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  position: absolute;\r\n  overflow: unset;\r\n  color: #aaa;\r\n  float: right;\r\n  right: 18%;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-top: 1%;\r\n}\r\n\r\n.see-modal {\r\n  padding: 16px 12px;\r\n  width: auto;\r\n  background: #36b37f;\r\n  border-radius: 4px;\r\n  color: white;\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.show-comments {\r\n  margin-top: 5%;\r\n  height: auto;\r\n}\r\n\r\n.com-count {\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.com-det {\r\n  text-align: center;\r\n}\r\n\r\n.det-item {\r\n  display: block;\r\n  margin-top: 2%;\r\n  width: 100%;\r\n}\r\n\r\n.com-det li {\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n.com-li {\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n.form-div form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 30%;\r\n  padding-right: 30%;\r\n  margin-top: 2%;\r\n}\r\n\r\n.form-div h2 {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 3%;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.form-div input {\r\n  height: 45px;\r\n  margin-bottom: 2.5%;\r\n  border: 2px solid black;\r\n}\r\n\r\n.form-div textarea {\r\n  border: 2px solid black;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n#comment-form button {\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\n\r\n.row h2 {\r\n  font-size: 22px;\r\n}\r\n",""]);const c=a},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},548:(n,e,r)=>{"use strict";var t=r(379),o=r.n(t),i=r(795),a=r.n(i),c=r(569),s=r.n(c),d=r(565),l=r.n(d),m=r(216),p=r.n(m),u=r(589),f=r.n(u),h=r(424),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals},379:n=>{"use strict";var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var p=r(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,t);t.byIndex=c,e.splice(c,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{"use strict";var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{"use strict";n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},485:(n,e,r)=>{const t=r(861),o=r(181),i=document.querySelector(".modal-flex"),a=document.querySelector(".modal-content img"),c=document.getElementById("myModal");let s,d;n.exports=async n=>{if("button"===n.target.localName){for(;i.firstChild;)i.removeChild(i.firstChild);const e=await t(n.target.id,"https://api.tvmaze.com/shows/1/episodebynumber");c.style.display="block";const r=e.image.medium;a.src=r,s=e.season,d=e.number;const{name:o,type:l}=e,m=e.rating.average;document.querySelector(".modal-content h2").innerHTML=`${o}`;const p=document.createElement("p");p.innerHTML=`Season - ${s}`;const u=document.createElement("p");u.innerHTML=`Episode - ${d}`;const f=document.createElement("p");f.innerHTML=`Type - ${l}`;const h=document.createElement("p");h.innerHTML=`Rating - ${m}`,i.appendChild(p),i.appendChild(u),i.appendChild(f),i.appendChild(h)}localStorage.clear();const e=`${parseInt(s,10)}-${parseInt(d,10)}`;return localStorage.setItem("item",e),o(s,d),{season:s,number:d}}},247:n=>{n.exports=n=>n?`<h3>Comments (${n.children.length})</h3>`:"<h3>Comments (0)</h3>"},977:n=>{n.exports=(n,e)=>{const r=e.find((e=>e.item_id===n));return r?r.likes:"Object not found!"}},935:(n,e,r)=>{const t=r(181);n.exports=(n,e)=>{const r=`${n}-${e}`,o=document.querySelector("#comment-form #user-name").value,i=document.querySelector("#comment-form #comment").value,a=document.querySelector("#comment-form button"),c=document.querySelector("#comment-form"),s={item_id:r,username:o,comment:i};fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/be9WLm2cUd5ClZDWcc7I/comments",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json"}}).then((n=>n.ok?n:Promise.reject(n))).then((()=>{a.innerText="Successfully added",c.reset(),setTimeout((()=>{a.innerText="Add Comment"}),3e3),t(n,e)})).catch((()=>{c.reset(),setTimeout((()=>{a.innerText="Add Comment"}),3e3),a.innerText="Something went wrong."}))}},530:n=>{n.exports=async n=>{const e=await fetch(n);return await e.json()}},593:n=>{n.exports=async n=>(await fetch(n)).json()},861:n=>{n.exports=async(n,e)=>{const r=await fetch(`${e}?season=1&number=${n}`);return await r.json()}},138:(n,e,r)=>{"use strict";r.a(n,(async(n,e)=>{try{r(548);var t=r(726),o=r.n(t),i=r(28),a=r.n(i),c=r(572),s=r(593),d=r.n(s),l=r(530),m=r.n(l),p=r(91),u=r.n(p),f=r(485),h=r.n(f),g=r(935),y=r.n(g);const n=" https://api.tvmaze.com/seasons/1/episodes",x="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3CLv413c1ifs1Ya2iHvU/likes/",v=await m()(x);let b,w;const C=await d()(n),S=document.querySelector(".list");o()(C,v,S),document.querySelectorAll(".my-svg").forEach((n=>{const e=parseInt(n.id,10);let r="true"===localStorage.getItem(`post_${e}_isLiked`);n.classList.toggle("active",r),n.addEventListener("click",(async()=>{r=!r,n.classList.toggle("active",r),localStorage.setItem(`post_${e}_isLiked`,r.toString()),r&&(await u()(e,x),document.location.reload())}))}));const T=document.getElementById("myModal");S.addEventListener("click",(async n=>{const e=h()(n);b=(await e).season,w=(await e).number})),document.getElementsByClassName("close")[0].addEventListener("click",(()=>{T.style.display="none"})),window.addEventListener("click",(n=>{n.target===T&&(T.style.display="none")})),document.querySelector("#comment-form").addEventListener("click",(n=>{n.preventDefault(),"button"===n.target.localName&&y()(b,w)})),document.querySelector("#logo-image").src=c,a()(),e()}catch(n){e(n)}}),1)},28:n=>{n.exports=async()=>{const n=await(async()=>(await fetch(" https://api.tvmaze.com/seasons/1/episodes")).json())();document.querySelector(".item-number").textContent=`(${n.length})`}},726:(n,e,r)=>{const t=r(977);n.exports=(n,e,r)=>{let o=1;n.forEach((n=>{if(n.image){const i=document.createElement("li"),a=document.createElement("img");a.src=n.image.medium,a.alt=`${n.name}`;const c=document.createElement("div");c.classList.add("row"),c.innerHTML=`<h2>${n.name}<h2/> <svg class='my-svg' id="${o}" xmlns='http://www.w3.org/2000/svg' height='38' fill='red' viewBox='0 96 960 960' width='38'><path d='m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z'/></svg><div class="likes-count">${t(o,e)} Likes</div> </div>`;const s=document.createElement("button");s.classList.add("comment-button"),s.id=o,s.innerText="Comments",i.append(a),i.append(c),i.append(s),r.appendChild(i),o+=1}}))}},91:n=>{n.exports=async(n,e)=>await fetch(e,{method:"POST",body:JSON.stringify({item_id:n}),headers:{"Content-type":"application/json; charset=UTF-8"}})},181:(n,e,r)=>{const t=r(247);n.exports=async(n,e)=>{const r=document.querySelector(".det-item"),o=document.querySelector(".com-count");for(;r.firstChild;)r.removeChild(r.firstChild);const i=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/be9WLm2cUd5ClZDWcc7I/comments?item_id=${n}-${e}`),a=await i.json();try{a.forEach((n=>{const e=document.createElement("li");e.innerText=`${n.creation_date} - ${n.username} : ${n.comment}`,r.appendChild(e)})),o.innerHTML=t(r),document.querySelector(".com-det").appendChild(r)}catch{const n=document.querySelector(".det-item");for(;n.firstChild;)n.removeChild(n.firstChild);const e=document.createElement("li");e.textContent="No Comment Found",e.classList.add("com-li"),n.appendChild(e),o.innerHTML=t(null)}}},572:(n,e,r)=>{"use strict";n.exports=r.p+"0170e92927de2406636b.png"}},n=>{n(n.s=138)}]);