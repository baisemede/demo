(function(t){function e(e){for(var i,a,o=e[0],s=e[1],l=e[2],p=0,f=[];p<o.length;p++)a=o[p],r[a]&&f.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},c=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"2b53":function(t,e,n){},"37dc":function(t,e,n){"use strict";var i=n("2b53"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Hitokoto")],1)},c=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xx"},[n("header",{staticClass:"header"},[n("ul",{staticClass:"list"},[n("li",{on:{click:t.changetype}},[t._v("刷新")]),n("li",{on:{click:t.changetype}},[t._v("其他")]),n("li",{on:{click:t.changetype}},[t._v("来自网络")]),n("li",{on:{click:t.changetype}},[t._v("原创")]),n("li",{on:{click:t.changetype}},[t._v("小说")]),n("li",{on:{click:t.changetype}},[t._v("游戏")]),n("li",{on:{click:t.changetype}},[t._v("漫画")]),n("li",{on:{click:t.changetype}},[t._v("动画")])])]),n("main",{staticClass:"main"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"left sym"},[t._v("『")]),n("div",{staticClass:"one-content"},[n("p",[t._v(t._s(t.one.hitokoto))])]),n("div",{staticClass:"right sym"},[t._v("』")])]),n("div",[t._v(t._s(t.one.type)+"--"+t._s(t.one.from))])])])},o=[],s={data:function(){return{one:{},type:"b",timer:""}},created:function(){this.btn()},mounted:function(){this.timer?clearInterval(this.timer):this.clock()},destroyed:function(){clearInterval(this.timer)},methods:{btn:function(){var t=this;this.$http.get("https://v1.hitokoto.cn/?c=".concat(this.type)).then(function(e){t.one=e.data}).then(function(t){})},changetype:function(t){var e=t.target.innerHTML;switch(!0){case"动画"===e:this.type="a";break;case"漫画"===e:this.type="b";break;case"游戏"===e:this.type="c";break;case"小说"===e:this.type="d";break;case"原创"===e:this.type="e";break;case"来自网络"===e:this.type="f";break;case"其他"===e:this.type="g";break}this.btn(),clearInterval(this.timer),this.clock()},clock:function(){var t=this;this.timer=setInterval(function(){t.btn()},8e3)}}},l=s,u=(n("37dc"),n("2877")),p=Object(u["a"])(l,a,o,!1,null,"0c20653a",null),f=p.exports,h={name:"app",components:{Hitokoto:f}},v=h,d=(n("034f"),Object(u["a"])(v,r,c,!1,null,null,null)),y=d.exports,b=n("d54e"),g=n.n(b),k=n("bc3a"),_=n.n(k);i["a"].prototype.$http=_.a,i["a"].use(g.a),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(y)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.9ed5e703.js.map