"use strict";(globalThis.webpackChunkMFA=globalThis.webpackChunkMFA||[]).push([[82],{82:(e,n,t)=>{t.r(n);var r=t(752);function o(e,n,t){let o;const i=()=>{const n=document.createElement("template");return n.innerHTML=e,t?n.content.firstChild.firstChild:n.content.firstChild},a=n?()=>(0,r.untrack)((()=>document.importNode(o||(o=i()),!0))):()=>(o||(o=i())).cloneNode(!0);return a.cloneNode=a,a}function i(e,n,t){r.sharedConfig.context||(null==t?e.removeAttribute(n):e.setAttribute(n,t))}function a(e,n,t,o){if(void 0===t||o||(o=[]),"function"!=typeof n)return l(e,n,o,t);(0,r.createRenderEffect)((r=>l(e,n(),r,t)),o)}function l(e,n,t,o,i){if(r.sharedConfig.context){!t&&(t=[...e.childNodes]);let n=[];for(let e=0;e<t.length;e++){const r=t[e];8===r.nodeType&&"!$"===r.data.slice(0,2)?r.remove():n.push(r)}t=n}for(;"function"==typeof t;)t=t();if(n===t)return t;const a=typeof n,u=void 0!==o;if(e=u&&t[0]&&t[0].parentNode||e,"string"===a||"number"===a){if(r.sharedConfig.context)return t;if("number"===a&&(n=n.toString()),u){let r=t[0];r&&3===r.nodeType?r.data!==n&&(r.data=n):r=document.createTextNode(n),t=f(e,t,o,r)}else t=""!==t&&"string"==typeof t?e.firstChild.data=n:e.textContent=n}else if(null==n||"boolean"===a){if(r.sharedConfig.context)return t;t=f(e,t,o)}else{if("function"===a)return(0,r.createRenderEffect)((()=>{let r=n();for(;"function"==typeof r;)r=r();t=l(e,r,t,o)})),()=>t;if(Array.isArray(n)){const a=[],d=t&&Array.isArray(t);if(s(a,n,t,i))return(0,r.createRenderEffect)((()=>t=l(e,a,t,o,!0))),()=>t;if(r.sharedConfig.context){if(!a.length)return t;if(void 0===o)return[...e.childNodes];let n=a[0],r=[n];for(;(n=n.nextSibling)!==o;)r.push(n);return t=r}if(0===a.length){if(t=f(e,t,o),u)return t}else d?0===t.length?c(e,a,o):function(e,n,t){let r=t.length,o=n.length,i=r,a=0,l=0,s=n[o-1].nextSibling,c=null;for(;a<o||l<i;)if(n[a]!==t[l]){for(;n[o-1]===t[i-1];)o--,i--;if(o===a){const n=i<r?l?t[l-1].nextSibling:t[i-l]:s;for(;l<i;)e.insertBefore(t[l++],n)}else if(i===l)for(;a<o;)c&&c.has(n[a])||n[a].remove(),a++;else if(n[a]===t[i-1]&&t[l]===n[o-1]){const r=n[--o].nextSibling;e.insertBefore(t[l++],n[a++].nextSibling),e.insertBefore(t[--i],r),n[o]=t[i]}else{if(!c){c=new Map;let e=l;for(;e<i;)c.set(t[e],e++)}const r=c.get(n[a]);if(null!=r)if(l<r&&r<i){let s,f=a,u=1;for(;++f<o&&f<i&&null!=(s=c.get(n[f]))&&s===r+u;)u++;if(u>r-l){const o=n[a];for(;l<r;)e.insertBefore(t[l++],o)}else e.replaceChild(t[l++],n[a++])}else a++;else n[a++].remove()}}else a++,l++}(e,t,a):(t&&f(e),c(e,a));t=a}else if(n.nodeType){if(r.sharedConfig.context&&n.parentNode)return t=u?[n]:n;if(Array.isArray(t)){if(u)return t=f(e,t,o,n);f(e,t,null,n)}else null!=t&&""!==t&&e.firstChild?e.replaceChild(n,e.firstChild):e.appendChild(n);t=n}}return t}function s(e,n,t,r){let o=!1;for(let i=0,a=n.length;i<a;i++){let a,l=n[i],c=t&&t[e.length];if(null==l||!0===l||!1===l);else if("object"==(a=typeof l)&&l.nodeType)e.push(l);else if(Array.isArray(l))o=s(e,l,c)||o;else if("function"===a)if(r){for(;"function"==typeof l;)l=l();o=s(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||o}else e.push(l),o=!0;else{const n=String(l);c&&3===c.nodeType&&c.data===n?e.push(c):e.push(document.createTextNode(n))}}return o}function c(e,n,t=null){for(let r=0,o=n.length;r<o;r++)e.insertBefore(n[r],t)}function f(e,n,t,r){if(void 0===t)return e.textContent="";const o=r||document.createTextNode("");if(n.length){let r=!1;for(let i=n.length-1;i>=0;i--){const a=n[i];if(o!==a){const n=a.parentNode===e;r||i?n&&a.remove():n?e.replaceChild(o,a):e.insertBefore(o,t)}else r=!0}}else e.insertBefore(o,t);return[o]}Object.create(null),Object.create(null),Symbol();var u=t(72),d=t.n(u),p=t(825),h=t.n(p),m=t(659),g=t.n(m),v=t(56),y=t.n(v),b=t(540),x=t.n(b),C=t(113),A=t.n(C),S=t(972),T={};T.styleTagTransform=A(),T.setAttributes=y(),T.insert=g().bind(null,"head"),T.domAPI=h(),T.insertStyleElement=x(),d()(S.A,T),S.A&&S.A.locals&&S.A.locals;var k=o("<div><header><h1>Vinodh Karthik</h1><p>Full Stack Developer</p></header><main><h2>Projects...</h2><ul></ul></main><footer><p>&copy; <!> "),w=o("<li><h3></h3><p></p><a>View Project");const N=function(){const e=[{title:"Project 1",description:"ED-TECH Site using Django ",link:"#"},{title:"Project 2",description:"Dashboard using React",link:"#"},{title:"Project 3",description:"Mobile Application Using Flutter",link:"#"}];return n=k(),t=n.firstChild.nextSibling,o=t.firstChild.nextSibling,l=t.nextSibling.firstChild,(s=l.firstChild.nextSibling).nextSibling,a(o,(()=>e.map(((e,n)=>{return l=(o=(t=w()).firstChild).nextSibling,s=l.nextSibling,i(t,"key",n),a(o,(()=>e.title)),a(l,(()=>e.description)),(0,r.createRenderEffect)((()=>i(s,"href",e.link))),t;var t,o,l,s})))),a(l,(()=>(new Date).getFullYear()),s),n;var n,t,o,l,s};var E=o("<div class=container>");!function(e,n,t,o={}){let i;(0,r.createRoot)((r=>{i=r,n===document?e():a(n,e(),n.firstChild?null:void 0,t)}),o.owner)}((()=>{return a(e=E(),(0,r.createComponent)(N,{})),e;var e}),document.getElementById("app"))},972:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"/* styles.css */\n\n/* Reset default browser styles */\nbody,\nh1,\nh2,\nh3,\np,\nul,\nli,\na {\n   margin: 0;\n   padding: 0;\n}\n\nbody {\n   font-family: Arial, sans-serif;\n   background-color: #f0f0f0;\n   color: #333;\n}\n\n.container {\n   max-width: 800px;\n   margin: 0 auto;\n   padding: 20px;\n}\n\nheader {\n   text-align: center;\n   margin-bottom: 40px;\n}\n\nheader h1 {\n   font-size: 2.5em;\n   margin-bottom: 10px;\n}\n\nheader p {\n   font-size: 1.2em;\n}\n\nmain {\n   margin-bottom: 40px;\n}\n\nh2 {\n   font-size: 1.8em;\n   margin-bottom: 20px;\n}\n\nul {\n   list-style: none;\n}\n\nli {\n   margin-bottom: 20px;\n}\n\nh3 {\n   font-size: 1.5em;\n   margin-bottom: 10px;\n}\n\np {\n   font-size: 1.2em;\n   line-height: 1.5;\n}\n\na {\n   color: #007bff;\n   -webkit-text-decoration: none;\n   text-decoration: none;\n}\n\na:hover {\n   -webkit-text-decoration: underline;\n   text-decoration: underline;\n}\n\nfooter {\n   text-align: center;\n   padding-top: 20px;\n}\n\nfooter p {\n   font-size: 1.2em;\n}\n",""]);const l=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var f=[].concat(e[c]);r&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),n.push(f))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],f=i[c]||0,u="".concat(c," ").concat(f);i[c]=f+1;var d=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var h=o(p,r);r.byIndex=l,n.splice(l,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=t(i[a]);n[l].references--}for(var s=r(e,o),c=0;c<i.length;c++){var f=t(i[c]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);