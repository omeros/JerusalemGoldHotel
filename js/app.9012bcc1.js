(function(t){function e(e){for(var r,s,c=e[0],i=e[1],l=e[2],u=0,p=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4266d10f"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(t);var l=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/JerusalemGoldHotel/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2fb4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("nav",{staticClass:"nav-container flex space-between align-center"},[n("div",{staticClass:"first-nav-container-div"},[n("div",{staticClass:"first-nav-container-div-inner"},[n("router-link",{staticClass:"link",attrs:{to:"/"}},[n("img",{staticClass:"logo-img",attrs:{alt:"Vue logo",src:"https://www.jerusalemgold.com/EN/Images/logo_gold.png"}})]),n("router-link",{staticClass:"link",attrs:{to:"/"}},[n("div",{staticClass:"flex align-center"},[n("span",{staticClass:"nav-txt"},[t._v("Home")])])]),n("router-link",{staticClass:"link",attrs:{to:"/about"}},[n("div",{staticClass:"flex align-center"},[n("span",{staticClass:"nav-txt"},[t._v("About")])])]),n("router-link",{staticClass:"link",attrs:{to:"/contact-us"}},[n("div",{staticClass:"flex align-center"},[n("span",{staticClass:"nav-txt"},[t._v("Contact Us")])])])],1)])])])},c=[],i={},l=i,u=(n("f83a"),n("2877")),f=Object(u["a"])(l,s,c,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-container"},[t._v(" footer")])},v=[],m={},b=m,h=Object(u["a"])(b,d,v,!1,null,null,null),g=h.exports,_={components:{Header:p,Footer:g}},C=_,y=Object(u["a"])(C,a,o,!1,null,null,null),w=y.exports,x=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[t._v(" Home page ")])},O=[],k={name:"Home",components:{}},E=k,P=Object(u["a"])(E,j,O,!1,null,null,null),H=P.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-us-container"},[n("div",{staticClass:"contact-us-second-container"},[n("p",{staticClass:"contact-us-txt"},[t._v(" Contact us ")]),n("div",{staticClass:"contact-us-txt-container"},[n("p",[t._v("Phone +972-2-501-3333")]),n("p",[t._v("The Jerusalem Gold Hotel")]),n("p",[t._v("Address: Jaffa St 234, Jerusalem")])])])])}],S={},T=S,M=Object(u["a"])(T,$,J,!1,null,null,null),A=M.exports;r["a"].use(x["a"]);var F=[{path:"/",name:"Home",component:H},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"754b"))}},{path:"/contact-us",name:"ContactUs",component:A}],G=new x["a"]({routes:F}),L=G;n("2fb4");r["a"].config.productionTip=!1,new r["a"]({router:L,render:function(t){return t(w)}}).$mount("#app")},f83a:function(t,e,n){"use strict";n("fa60")},fa60:function(t,e,n){}});
//# sourceMappingURL=app.9012bcc1.js.map