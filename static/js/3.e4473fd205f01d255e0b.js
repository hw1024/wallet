webpackJsonp([3],{"/NS0":function(n,t,e){var r=e("tLeM");n.exports=function(n,t,e){for(var i in t)e&&n[i]?n[i]=t[i]:r(n,i,t[i]);return n}},"5bbg":function(n,t){n.exports=function(n){try{return{e:!1,v:n()}}catch(n){return{e:!0,v:n}}}},"5cF6":function(n,t,e){var r=e("E7EE"),i=e("vSke")("toStringTag"),a="Arguments"==r(function(){return arguments}()),o=function(n,t){try{return n[t]}catch(n){}};n.exports=function(n){var t,e,s;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=o(t=Object(n),i))?e:a?r(t):"Object"==(s=r(t))&&"function"==typeof t.callee?"Arguments":s}},"7jCG":function(n,t,e){"use strict";var r=e("50n/"),i=e("lNjp"),a=e("uwAh"),o=e("gDk8"),s=e("Fv5k");r(r.P+r.R,"Promise",{finally:function(n){var t=o(this,i.Promise||a.Promise),e="function"==typeof n;return this.then(e?function(e){return s(t,n()).then(function(){return e})}:n,e?function(e){return s(t,n()).then(function(){throw e})}:n)}})},"9YB7":function(n,t){n.exports=function(n,t,e,r){if(!(n instanceof t)||void 0!==r&&r in n)throw TypeError(e+": incorrect invocation!");return n}},"9ZsG":function(n,t,e){t=n.exports=e("UTlt")(!0),t.push([n.i,'\n.manage-content[data-v-6501d052] {\n  padding: 0.4rem 0.24rem 1.333333rem;\n  background: #f9f9f9;\n}\n.manage-footer[data-v-6501d052] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  height: 1.333333rem;\n  line-height: 1.333333rem;\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex;\n}\n.manage-btn[data-v-6501d052] {\n  width: 50%;\n  text-align: center;\n  color: #fff;\n  background-color: #1AAD19;\n  font-size: 0.453333rem;\n  letter-spacing: 0.053333rem;\n}\n.manage-btn-active[data-v-6501d052] {\n  background: #10aeff;\n}\n.manage-list li[data-v-6501d052] {\n  background: #fff;\n  margin-bottom: 0.266667rem;\n}\n.manage-list-top[data-v-6501d052] {\n  padding: 0.4rem 0;\n  margin: 0 0.266667rem;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex;\n}\n.manage-list-lower[data-v-6501d052] {\n  text-align: right;\n  border-top: 0.013333rem solid #ccc;\n  font-size: 0.373333rem;\n  padding: 0.4rem 0;\n  margin: 0 0.266667rem;\n}\n.manage-list-lower .balan[data-v-6501d052] {\n  margin: 0 0.213333rem;\n}\n.manage-img[data-v-6501d052] {\n  width: 1.066667rem;\n  height: 1.066667rem;\n  margin-right: 0.266667rem;\n}\n.manage-message[data-v-6501d052] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.manage-icon[data-v-6501d052] {\n  content: "";\n  display: inline-block;\n  height: 0.293333rem;\n  width: 0.293333rem;\n  border-width: 0.026667rem 0.026667rem 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -0.026667rem;\n  position: absolute;\n  top: 50%;\n  margin-top: -0.133333rem;\n  right: 0.32rem;\n}',"",{version:3,sources:["C:/wap_wallet/wallet/app/src/views/manage.vue"],names:[],mappings:";AACA;EACE,oCAAoC;EACpC,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,aAAa;EACb,oBAAoB;EACpB,yBAAyB;EACzB,qBAAqB;EACrB,cAAc;EACd,sBAAsB;CACvB;AACD;EACE,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;EACvB,4BAA4B;CAC7B;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,2BAA2B;CAC5B;AACD;EACE,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;CACvB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,YAAY;EACZ,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,0CAA0C;EAC1C,sBAAsB;EACtB,oBAAoB;EACpB,yDAAyD;EACzD,iDAAiD;EACjD,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;EACT,yBAAyB;EACzB,eAAe;CAChB",file:"manage.vue",sourcesContent:['\n.manage-content[data-v-6501d052] {\n  padding: 0.4rem 0.24rem 1.333333rem;\n  background: #f9f9f9;\n}\n.manage-footer[data-v-6501d052] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  height: 1.333333rem;\n  line-height: 1.333333rem;\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex;\n}\n.manage-btn[data-v-6501d052] {\n  width: 50%;\n  text-align: center;\n  color: #fff;\n  background-color: #1AAD19;\n  font-size: 0.453333rem;\n  letter-spacing: 0.053333rem;\n}\n.manage-btn-active[data-v-6501d052] {\n  background: #10aeff;\n}\n.manage-list li[data-v-6501d052] {\n  background: #fff;\n  margin-bottom: 0.266667rem;\n}\n.manage-list-top[data-v-6501d052] {\n  padding: 0.4rem 0;\n  margin: 0 0.266667rem;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex;\n}\n.manage-list-lower[data-v-6501d052] {\n  text-align: right;\n  border-top: 0.013333rem solid #ccc;\n  font-size: 0.373333rem;\n  padding: 0.4rem 0;\n  margin: 0 0.266667rem;\n}\n.manage-list-lower .balan[data-v-6501d052] {\n  margin: 0 0.213333rem;\n}\n.manage-img[data-v-6501d052] {\n  width: 1.066667rem;\n  height: 1.066667rem;\n  margin-right: 0.266667rem;\n}\n.manage-message[data-v-6501d052] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.manage-icon[data-v-6501d052] {\n  content: "";\n  display: inline-block;\n  height: 0.293333rem;\n  width: 0.293333rem;\n  border-width: 0.026667rem 0.026667rem 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -0.026667rem;\n  position: absolute;\n  top: 50%;\n  margin-top: -0.133333rem;\n  right: 0.32rem;\n}'],sourceRoot:""}])},BKu0:function(n,t,e){"use strict";function r(n){var t,e;this.promise=new n(function(n,r){if(void 0!==t||void 0!==e)throw TypeError("Bad Promise constructor");t=n,e=r}),this.resolve=i(t),this.reject=i(e)}var i=e("PiGf");n.exports.f=function(n){return new r(n)}},CLwu:function(n,t,e){"use strict";var r=e("uwAh"),i=e("lNjp"),a=e("vQwQ"),o=e("/5gO"),s=e("vSke")("species");n.exports=function(n){var t="function"==typeof i[n]?i[n]:r[n];o&&t&&!t[s]&&a.f(t,s,{configurable:!0,get:function(){return this}})}},Cdac:function(n,t,e){var r=e("uwAh"),i=r.navigator;n.exports=i&&i.userAgent||""},EB7R:function(n,t,e){"use strict";var r=e("50n/"),i=e("BKu0"),a=e("5bbg");r(r.S,"Promise",{try:function(n){var t=i.f(this),e=a(n);return(e.e?t.reject:t.resolve)(e.v),t.promise}})},Fv5k:function(n,t,e){var r=e("scub"),i=e("uZXa"),a=e("BKu0");n.exports=function(n,t){if(r(n),i(t)&&t.constructor===n)return t;var e=a.f(n);return(0,e.resolve)(t),e.promise}},KHPU:function(n,t){n.exports=function(n,t,e){var r=void 0===e;switch(t.length){case 0:return r?n():n.call(e);case 1:return r?n(t[0]):n.call(e,t[0]);case 2:return r?n(t[0],t[1]):n.call(e,t[0],t[1]);case 3:return r?n(t[0],t[1],t[2]):n.call(e,t[0],t[1],t[2]);case 4:return r?n(t[0],t[1],t[2],t[3]):n.call(e,t[0],t[1],t[2],t[3])}return n.apply(e,t)}},NL4d:function(n,t,e){var r=e("uwAh"),i=e("xrVe").set,a=r.MutationObserver||r.WebKitMutationObserver,o=r.process,s=r.Promise,c="process"==e("E7EE")(o);n.exports=function(){var n,t,e,u=function(){var r,i;for(c&&(r=o.domain)&&r.exit();n;){i=n.fn,n=n.next;try{i()}catch(r){throw n?e():t=void 0,r}}t=void 0,r&&r.enter()};if(c)e=function(){o.nextTick(u)};else if(!a||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var f=s.resolve(void 0);e=function(){f.then(u)}}else e=function(){i.call(r,u)};else{var l=!0,d=document.createTextNode("");new a(u).observe(d,{characterData:!0}),e=function(){d.data=l=!l}}return function(r){var i={fn:r,next:void 0};t&&(t.next=i),n||(n=i,e()),t=i}}},T8C5:function(n,t,e){var r=e("9ZsG");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e("FIqI")("46d52b7b",r,!0,{})},UsEr:function(n,t,e){var r=e("khS8"),i=e("vSke")("iterator"),a=Array.prototype;n.exports=function(n){return void 0!==n&&(r.Array===n||a[i]===n)}},bEBz:function(n,t,e){"use strict";function r(n){e("T8C5")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("rVsN"),a=e.n(i),o=e("4YfN"),s=e.n(o),c=e("0xDb"),u=e("I1an"),f=e("HVJf"),l=(s()({},Object(f.b)(["info","abi","contractAddr"])),{name:"manage",data:function(){return{havePage:!1,balan:[]}},components:{},created:function(){this.dataInit()},computed:s()({},Object(f.b)(["info","abi","contractAddr"])),methods:{dataInit:function(){var n=this;n.$store.dispatch("UserInit",""),0===n.info.length?n.havePage=!1:(n.havePage=!0,a.a.all(n.info.map(function(t){return new a.a(function(e,r){u.a.constantMethod("balanceOf",n.abi,n.contractAddr,[t.addresses],function(n){e(n)})})})).then(function(t){n.balan=t}))},manageLink:function(n){var t=this,e=this,r=n;e.$store.dispatch("currentUpdate",{current:r}).then(function(){t.$router.push({path:"detail",name:"detail"})}).catch(function(n){e.$vux.toast.text("钱包切换失败请刷新后重试！","top")})},addressInit:function(n){return Object(c.a)(n)}}}),d=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"manage-content"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!n.havePage,expression:"!havePage"}],staticClass:"data-empty"},[n._v("\r\n        暂无钱包，点击下方按钮创建钱包\r\n    ")]),n._v(" "),r("ul",{directives:[{name:"show",rawName:"v-show",value:n.havePage,expression:"havePage"}],staticClass:"manage-list"},n._l(n.info,function(t,i){return r("li",{key:i},[r("div",{staticClass:"manage-list-top",attrs:{"data-id":i},on:{click:function(t){n.manageLink(i)}}},[r("img",{staticClass:"manage-img",attrs:{src:e("JpW5"),alt:"icon"}}),n._v(" "),r("div",{staticClass:"manage-message"},[r("p",[n._v(n._s(t.name))]),n._v(" "),r("p",[n._v(n._s(n.addressInit(t.addresses)))])]),n._v(" "),r("i",{staticClass:"manage-icon"})]),n._v(" "),r("div",{staticClass:"manage-list-lower"},[r("p",[r("span",{staticClass:"balan"},[n._v(n._s(n.balan[i]||"0.0000"))]),n._v("Fuli")])])])})),n._v(" "),r("div",{staticClass:"manage-footer"},[r("router-link",{staticClass:"manage-btn",attrs:{to:"create"}},[n._v("创建钱包")]),n._v(" "),r("router-link",{staticClass:"manage-btn manage-btn-active",attrs:{to:"restore"}},[n._v("导入钱包")])],1)])},A=[],v={render:d,staticRenderFns:A},m=v,h=e("Z0/y"),p=r,g=h(l,m,!1,p,"data-v-6501d052",null);t.default=g.exports},bSP7:function(n,t,e){var r=e("vSke")("iterator"),i=!1;try{var a=[7][r]();a.return=function(){i=!0},Array.from(a,function(){throw 2})}catch(n){}n.exports=function(n,t){if(!t&&!i)return!1;var e=!1;try{var a=[7],o=a[r]();o.next=function(){return{done:e=!0}},a[r]=function(){return o},n(a)}catch(n){}return e}},bxu4:function(n,t,e){var r=e("scub");n.exports=function(n,t,e,i){try{return i?t(r(e)[0],e[1]):t(e)}catch(t){var a=n.return;throw void 0!==a&&r(a.call(n)),t}}},gDk8:function(n,t,e){var r=e("scub"),i=e("PiGf"),a=e("vSke")("species");n.exports=function(n,t){var e,o=r(n).constructor;return void 0===o||void 0==(e=r(o)[a])?t:i(e)}},hoFe:function(n,t,e){var r=e("5cF6"),i=e("vSke")("iterator"),a=e("khS8");n.exports=e("lNjp").getIteratorMethod=function(n){if(void 0!=n)return n[i]||n["@@iterator"]||a[r(n)]}},rVsN:function(n,t,e){n.exports={default:e("xdg5"),__esModule:!0}},rwV3:function(n,t,e){var r=e("3geO"),i=e("bxu4"),a=e("UsEr"),o=e("scub"),s=e("YtIv"),c=e("hoFe"),u={},f={},t=n.exports=function(n,t,e,l,d){var A,v,m,h,p=d?function(){return n}:c(n),g=r(e,l,t?2:1),C=0;if("function"!=typeof p)throw TypeError(n+" is not iterable!");if(a(p)){for(A=s(n.length);A>C;C++)if((h=t?g(o(v=n[C])[0],v[1]):g(n[C]))===u||h===f)return h}else for(m=p.call(n);!(v=m.next()).done;)if((h=i(m,g,v.value,t))===u||h===f)return h};t.BREAK=u,t.RETURN=f},tRUH:function(n,t,e){"use strict";var r,i,a,o,s=e("GciW"),c=e("uwAh"),u=e("3geO"),f=e("5cF6"),l=e("50n/"),d=e("uZXa"),A=e("PiGf"),v=e("9YB7"),m=e("rwV3"),h=e("gDk8"),p=e("xrVe").set,g=e("NL4d")(),C=e("BKu0"),B=e("5bbg"),b=e("Cdac"),E=e("Fv5k"),x=c.TypeError,w=c.process,_=w&&w.versions,y=_&&_.v8||"",k=c.Promise,P="process"==f(w),j=function(){},D=i=C.f,S=!!function(){try{var n=k.resolve(1),t=(n.constructor={})[e("vSke")("species")]=function(n){n(j,j)};return(P||"function"==typeof PromiseRejectionEvent)&&n.then(j)instanceof t&&0!==y.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(n){}}(),N=function(n){var t;return!(!d(n)||"function"!=typeof(t=n.then))&&t},F=function(n,t){if(!n._n){n._n=!0;var e=n._c;g(function(){for(var r=n._v,i=1==n._s,a=0;e.length>a;)!function(t){var e,a,o,s=i?t.ok:t.fail,c=t.resolve,u=t.reject,f=t.domain;try{s?(i||(2==n._h&&U(n),n._h=1),!0===s?e=r:(f&&f.enter(),e=s(r),f&&(f.exit(),o=!0)),e===t.promise?u(x("Promise-chain cycle")):(a=N(e))?a.call(e,c,u):c(e)):u(r)}catch(n){f&&!o&&f.exit(),u(n)}}(e[a++]);n._c=[],n._n=!1,t&&!n._h&&O(n)})}},O=function(n){p.call(c,function(){var t,e,r,i=n._v,a=T(n);if(a&&(t=B(function(){P?w.emit("unhandledRejection",i,n):(e=c.onunhandledrejection)?e({promise:n,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)}),n._h=P||T(n)?2:1),n._a=void 0,a&&t.e)throw t.v})},T=function(n){return 1!==n._h&&0===(n._a||n._c).length},U=function(n){p.call(c,function(){var t;P?w.emit("rejectionHandled",n):(t=c.onrejectionhandled)&&t({promise:n,reason:n._v})})},R=function(n){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=n,t._s=2,t._a||(t._a=t._c.slice()),F(t,!0))},I=function(n){var t,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===n)throw x("Promise can't be resolved itself");(t=N(n))?g(function(){var r={_w:e,_d:!1};try{t.call(n,u(I,r,1),u(R,r,1))}catch(n){R.call(r,n)}}):(e._v=n,e._s=1,F(e,!1))}catch(n){R.call({_w:e,_d:!1},n)}}};S||(k=function(n){v(this,k,"Promise","_h"),A(n),r.call(this);try{n(u(I,this,1),u(R,this,1))}catch(n){R.call(this,n)}},r=function(n){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e("/NS0")(k.prototype,{then:function(n,t){var e=D(h(this,k));return e.ok="function"!=typeof n||n,e.fail="function"==typeof t&&t,e.domain=P?w.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&F(this,!1),e.promise},catch:function(n){return this.then(void 0,n)}}),a=function(){var n=new r;this.promise=n,this.resolve=u(I,n,1),this.reject=u(R,n,1)},C.f=D=function(n){return n===k||n===o?new a(n):i(n)}),l(l.G+l.W+l.F*!S,{Promise:k}),e("DH+f")(k,"Promise"),e("CLwu")("Promise"),o=e("lNjp").Promise,l(l.S+l.F*!S,"Promise",{reject:function(n){var t=D(this);return(0,t.reject)(n),t.promise}}),l(l.S+l.F*(s||!S),"Promise",{resolve:function(n){return E(s&&this===o?k:this,n)}}),l(l.S+l.F*!(S&&e("bSP7")(function(n){k.all(n).catch(j)})),"Promise",{all:function(n){var t=this,e=D(t),r=e.resolve,i=e.reject,a=B(function(){var e=[],a=0,o=1;m(n,!1,function(n){var s=a++,c=!1;e.push(void 0),o++,t.resolve(n).then(function(n){c||(c=!0,e[s]=n,--o||r(e))},i)}),--o||r(e)});return a.e&&i(a.v),e.promise},race:function(n){var t=this,e=D(t),r=e.reject,i=B(function(){m(n,!1,function(n){t.resolve(n).then(e.resolve,r)})});return i.e&&r(i.v),e.promise}})},xdg5:function(n,t,e){e("V7XH"),e("aTqf"),e("vu0M"),e("tRUH"),e("7jCG"),e("EB7R"),n.exports=e("lNjp").Promise},xrVe:function(n,t,e){var r,i,a,o=e("3geO"),s=e("KHPU"),c=e("ZNys"),u=e("bmow"),f=e("uwAh"),l=f.process,d=f.setImmediate,A=f.clearImmediate,v=f.MessageChannel,m=f.Dispatch,h=0,p={},g=function(){var n=+this;if(p.hasOwnProperty(n)){var t=p[n];delete p[n],t()}},C=function(n){g.call(n.data)};d&&A||(d=function(n){for(var t=[],e=1;arguments.length>e;)t.push(arguments[e++]);return p[++h]=function(){s("function"==typeof n?n:Function(n),t)},r(h),h},A=function(n){delete p[n]},"process"==e("E7EE")(l)?r=function(n){l.nextTick(o(g,n,1))}:m&&m.now?r=function(n){m.now(o(g,n,1))}:v?(i=new v,a=i.port2,i.port1.onmessage=C,r=o(a.postMessage,a,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(n){f.postMessage(n+"","*")},f.addEventListener("message",C,!1)):r="onreadystatechange"in u("script")?function(n){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),g.call(n)}}:function(n){setTimeout(o(g,n,1),0)}),n.exports={set:d,clear:A}}});
//# sourceMappingURL=3.e4473fd205f01d255e0b.js.map