(()=>{"use strict";var n,e,t,r,o,i,a,c,s,u,l,d,f,h,p={426:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=new URL(t(924),t.b),s=o()((function(n){return n[1]})),u=a()(c);s.push([n.id,":root {\n  font-size: 100%;\n}\n\n/* https://coolors.co/cb997e-ddbea9-ffe8d6-b7b7a4-a5a58d-6b705c */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  color: black;\n}\n\n.header {\n  height: 25%;\n  min-height: 220px;\n  background-color: rgba(203, 153, 126, 1) ;\n  display: flex;\n  flex-direction: column;\n}\n\n#header-main {\n  height: 8rem;\n  font-size: 4rem;\n  text-align: center;\n  line-height: 11rem;\n}\n\n#header-sub {\n  min-height: 40px;\n  text-align: center;\n  font-style: italic;\n  font-size: 1.6rem;\n  line-height: 1.6rem;\n}\n\n#nav-bar {\n  min-height: 100px;\n  background: orange;\n}\n\n.main {\n  height: 70%;\n  min-height: 400px;\n  flex-grow: 10;\n  align-items: stretch;\n  background-image: url("+u+");\n}\n\n#main-content {\n  width: 80%;\n  height: 100%;\n  margin: 0 auto;\n  background: rgba(233, 237, 201, 0.6);\n}\n\n.footer {\n  height: 40px;\n  background: rgba(221, 190, 169, 0.8);\n}\n\n.footer > a {\n\n}\n\n:any-link {\n  color: black;\n  text-decoration: none;\n}\n\n:any-link:hover {\n  text-decoration: underline;\n}\n\n\n* {\n  -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n     -khtml-user-select: none; /* Konqueror HTML */\n       -moz-user-select: none; /* Old versions of Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n}",""]);const l=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=t(d),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(e[f].references++,e[f].updater(h)):e.push({identifier:d,updater:o(h,r),references:1}),a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),u=0;u<i.length;u++){var l=t(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},924:(n,e,t)=>{n.exports=t.p+"cc112452b333ca9d5921.jpg"}},m={};function g(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return p[n](t,t.exports,g),t.exports}g.m=p,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),i=g.n(o),a=g(565),c=g.n(a),s=g(216),u=g.n(s),l=g(589),d=g.n(l),f=g(426),(h={}).styleTagTransform=d(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,console.log("hiii")})();