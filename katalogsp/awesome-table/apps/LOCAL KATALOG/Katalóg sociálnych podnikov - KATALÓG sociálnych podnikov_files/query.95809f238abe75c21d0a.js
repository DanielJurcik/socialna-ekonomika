/*! For license information please see query.95809f238abe75c21d0a.js.LICENSE.txt */
(self.webpackChunkawesome_table_build=self.webpackChunkawesome_table_build||[]).push([[658],{76287:function(e,t,r){"use strict";r.d(t,{jC:function(){return n},u1:function(){return o},a_:function(){return a}});var n="_QUSER",o="_PROXY_STATUS",a=48},23167:function(e,t,r){"use strict";function n(e){var t=/(?:^\?|&)debug(?:&|$|=)/.test(document.location.search);return t?(window.at_debug=Object.keys(console).reduce((function(t,r){return t[r]=function(){var t;arguments&&(t=console)[r].apply(t,["[".concat(e.toUpperCase(),"]")].concat(Array.prototype.slice.call(arguments)))},t}),{collapse:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.map((function(e,t){}))}}),window._at_debug_options={forceHelloJS:document.location.search.includes("at_debug_force_hello")}):window.at_debug=Object.keys(console).reduce((function(e,t){return e[t]=function(){},e}),{collapse:function(){}}),t}r.d(t,{B:function(){return n}})},99345:function(e,t,r){"use strict";r(82526),r(41817),r(72443),r(92401),r(8722),r(32165),r(69007),r(83510),r(41840),r(6982),r(32159),r(96649),r(39341),r(60543),r(92222),r(50545),r(43290),r(57327),r(69826),r(34553),r(84944),r(86535),r(91038),r(26699),r(66992),r(69600),r(21249),r(26572),r(65069),r(47042),r(2707),r(38706),r(40561),r(33792),r(99244),r(18264),r(39575),r(96078),r(4855),r(68309),r(73706),r(51532),r(99752),r(82376),r(73181),r(23484),r(2388),r(88621),r(60403),r(84755),r(25438),r(90332),r(40658),r(40197),r(44914),r(52420),r(60160),r(60970),r(10408),r(73689),r(9653),r(93299),r(35192),r(33161),r(44048),r(78285),r(44363),r(55994),r(61874),r(9494),r(56977),r(19601),r(59595),r(35500),r(69720),r(43371),r(38559),r(38880),r(49337),r(36210),r(30489),r(43304),r(41825),r(98410),r(72200),r(47941),r(94869),r(33952),r(57227),r(60514),r(41539),r(26833),r(88674),r(17727),r(36535),r(12419),r(69596),r(52586),r(74819),r(95683),r(39361),r(51037),r(5898),r(67556),r(14361),r(83593),r(39532),r(24603),r(74916),r(92087),r(39714),r(70189),r(79841),r(27852),r(94953),r(32023),r(78783),r(4723),r(66528),r(83112),r(38992),r(82481),r(15306),r(64765),r(23123),r(23157),r(73210),r(48702),r(55674),r(15218),r(74475),r(57929),r(50915),r(29253),r(42125),r(78830),r(58734),r(29254),r(37268),r(7397),r(60086),r(80623),r(44197),r(76495),r(87145),r(35109),r(65125),r(82472),r(49743),r(8255),r(29135),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(32846),r(98145),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(95206),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(4129),r(38478),r(54747),r(33948),r(84633),r(85844),r(60285),r(83753),r(41637),r(7039),r(87304),r(40892),r(10214),r(1758);var n,o,a,i,u=r(23167),c=r(77828),s=r(89224),l=r(76287);(0,u.B)("query"),o="".concat(n="at-firebase-reverse-proxy-uoikq6tuaq-as",".a.run.app"),a=/(?:^\?|&)proxify(?:&|$|=)/.test(document.location.search),i={},function(){function e(e){this.bubbles=e.bubbles||!1,this.cancelBubble=e.cancelBubble||!1,this.cancelable=e.cancelable||!1,this.currentTarget=e.currentTarget||null,this.data=e.data||null,this.defaultPrevented=e.defaultPrevented||!1,this.eventPhase=e.eventPhase||0,this.lastEventId=e.lastEventId||"",this.origin=e.origin||"",this.path=e.path||new Array(0),this.ports=e.parts||new Array(0),this.returnValue=e.returnValue||!0,this.source=e.source||null,this.srcElement=e.srcElement||null,this.target=e.target||null,this.timeStamp=e.timeStamp||null,this.type=e.type||"message",this.__proto__=e.__proto__||MessageEvent.__proto__}var t=i.before=function(e,t,r){return e},r=i.after=function(e,t,r){return e},n=i.modifyUrl=function(e){return e};i.resetHooks=function(){i.before=t,i.after=r,i.modifyUrl=n};var o=null;"undefined"!=typeof MozWebSocket?o=MozWebSocket:"undefined"!=typeof WebSocket&&(o=WebSocket),WebSocket=function(t,r){var n;t=i.modifyUrl(t)||t,this.url=t,this.protocols=r;var a=(n=this.protocols?new o(t,r):new o(t)).send;return n.send=function(e){arguments[0]=i.before(e,n.url,n)||e,a.apply(this,arguments)},n._addEventListener=n.addEventListener,n.addEventListener=function(){var t,r=this;return"message"===arguments[0]&&(arguments[1]=(t=arguments[1],function(){arguments[0]=i.after(new e(arguments[0]),n.url,n),null!==arguments[0]&&t.apply(r,arguments)})),n._addEventListener.apply(this,arguments)},Object.defineProperty(n,"onmessage",{set:function(){var t=this,r=arguments[0],o=function(){arguments[0]=i.after(new e(arguments[0]),n.url,n),null!==arguments[0]&&r.apply(t,arguments)};n._addEventListener.apply(this,["message",o,!1])}}),n}}(),i.modifyUrl=function(e){if(!a)try{var t=localStorage.getItem(l.u1);if(t){var r=JSON.parse(t);r.timestamp&&(0,c.Z)((0,s.Z)(r.timestamp,48).getTime())&&(a=!0===(null==r?void 0:r.proxify))}}catch(e){}if(a){var i=new URL(e),u=i.search;u=u.replace("ns=".concat(n),"ns=".concat("awesome-table"));var f="wss://".concat(o).concat(i.pathname).concat(u);return window.at_debug&&window.at_debug.log("PROXYING requests to ".concat(f)),f}return e},Promise.all([r.e(4207),r.e(2817),r.e(2506),r.e(4317),r.e(6320),r.e(9873),r.e(7388),r.e(8103),r.e(5431)]).then(r.bind(r,75431)).then((function(e){return e.main()})).catch((function(e){return at_debug.error(e)}))},31850:function(e,t,r){"use strict";function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}r.d(t,{Z:function(){return n}})},89224:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(31850),o=r(88490),a=r(12812),i=36e5;function u(e,t){(0,a.Z)(2,arguments);var r=(0,n.Z)(t);return(0,o.Z)(e,r*i)}},88490:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(31850),o=r(46406),a=r(12812);function i(e,t){(0,a.Z)(2,arguments);var r=(0,o.Z)(e).getTime(),i=(0,n.Z)(t);return new Date(r+i)}},77828:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(46406),o=r(12812);function a(e){return(0,o.Z)(1,arguments),(0,n.Z)(e).getTime()>Date.now()}},1758:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){function t(){}function r(){}var n=String.fromCharCode,o={}.toString,a=o.call(e.SharedArrayBuffer),i=o(),u=e.Uint8Array,c=u||Array,s=u?ArrayBuffer:c,l=s.isView||function(e){return e&&"length"in e},f=o.call(s.prototype);s=r.prototype;var p=e.TextEncoder,y=new(u?Uint16Array:c)(32);t.prototype.decode=function(e){if(!l(e)){var t=o.call(e);if(t!==f&&t!==a&&t!==i)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");e=u?new c(e):e||[]}for(var r,s,p,h=t="",g=0,d=0|e.length,b=d-32|0,m=0,v=0,w=0,A=-1;g<d;){for(r=g<=b?32:d-g|0;w<r;g=g+1|0,w=w+1|0){switch((s=255&e[g])>>4){case 15:if(2!=(p=255&e[g=g+1|0])>>6||247<s){g=g-1|0;break}m=(7&s)<<6|63&p,v=5,s=256;case 14:m<<=6,m|=(15&s)<<6|63&(p=255&e[g=g+1|0]),v=2==p>>6?v+4|0:24,s=s+256&768;case 13:case 12:m<<=6,m|=(31&s)<<6|63&(p=255&e[g=g+1|0]),v=v+7|0,g<d&&2==p>>6&&m>>v&&1114112>m?(s=m,0<=(m=m-65536|0)&&(A=55296+(m>>10)|0,s=56320+(1023&m)|0,31>w?(y[w]=A,w=w+1|0,A=-1):(p=A,A=s,s=p))):(g=g-(s>>=8)-1|0,s=65533),m=v=0,r=g<=b?32:d-g|0;default:y[w]=s;continue;case 11:case 10:case 9:case 8:}y[w]=65533}if(h+=n(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15],y[16],y[17],y[18],y[19],y[20],y[21],y[22],y[23],y[24],y[25],y[26],y[27],y[28],y[29],y[30],y[31]),32>w&&(h=h.slice(0,w-32|0)),g<d){if(y[0]=A,w=~A>>>31,A=-1,h.length<t.length)continue}else-1!==A&&(h+=n(A));t+=h,h=""}return t},s.encode=function(e){var t,r=0|(e=void 0===e?"":""+e).length,n=new c(8+(r<<1)|0),o=0,a=!u;for(t=0;t<r;t=t+1|0,o=o+1|0){var i=0|e.charCodeAt(t);if(127>=i)n[o]=i;else{if(2047>=i)n[o]=192|i>>6;else{e:{if(55296<=i)if(56319>=i){var s=0|e.charCodeAt(t=t+1|0);if(56320<=s&&57343>=s){if(65535<(i=(i<<10)+s-56613888|0)){n[o]=240|i>>18,n[o=o+1|0]=128|i>>12&63,n[o=o+1|0]=128|i>>6&63,n[o=o+1|0]=128|63&i;continue}break e}i=65533}else 57343>=i&&(i=65533);!a&&t<<1<o&&t<<1<(o-7|0)&&(a=!0,(s=new c(3*r)).set(n),n=s)}n[o]=224|i>>12,n[o=o+1|0]=128|i>>6&63}n[o=o+1|0]=128|63&i}}return u?n.subarray(0,o):n.slice(0,o)},p||(e.TextDecoder=t,e.TextEncoder=r)}(""+void 0==(void 0===r.g?"undefined":n(r.g))?""+void 0==("undefined"==typeof self?"undefined":n(self))?this:self:r.g)},10214:function(e,t){var r,n;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n="undefined"!=typeof self?self:this,void 0===(r=function(){return function(e){"use strict";if("function"!=typeof Promise)throw"Promise support required";var t=e.crypto||e.msCrypto;if(t){var r=t.subtle||t.webkitSubtle;if(r){var n=e.Crypto||t.constructor||Object,a=e.SubtleCrypto||r.constructor||Object,i=(e.CryptoKey||e.Key,e.navigator.userAgent.indexOf("Edge/")>-1),u=!!e.msCrypto&&!i,c=!t.subtle&&!!t.webkitSubtle;if(u||c){var s={KoZIhvcNAQEB:"1.2.840.113549.1.1.1"},l={"1.2.840.113549.1.1.1":"KoZIhvcNAQEB"};if(["generateKey","importKey","unwrapKey"].forEach((function(e){var n=r[e];r[e]=function(o,a,i){var s,l,f,p,g=[].slice.call(arguments);switch(e){case"generateKey":s=d(o),l=a,f=i;break;case"importKey":s=d(i),l=g[3],f=g[4],"jwk"===o&&((a=m(a)).alg||(a.alg=b(s)),a.key_ops||(a.key_ops="oct"!==a.kty?"d"in a?f.filter(_):f.filter(K):f.slice()),g[1]=v(a));break;case"unwrapKey":s=g[4],l=g[5],f=g[6],g[2]=i._key}if("generateKey"===e&&"HMAC"===s.name&&s.hash)return s.length=s.length||{"SHA-1":512,"SHA-256":512,"SHA-384":1024,"SHA-512":1024}[s.hash.name],r.importKey("raw",t.getRandomValues(new Uint8Array(s.length+7>>3)),s,l,f);if(c&&"generateKey"===e&&"RSASSA-PKCS1-v1_5"===s.name&&(!s.modulusLength||s.modulusLength>=2048))return(o=d(o)).name="RSAES-PKCS1-v1_5",delete o.hash,r.generateKey(o,!0,["encrypt","decrypt"]).then((function(e){return Promise.all([r.exportKey("jwk",e.publicKey),r.exportKey("jwk",e.privateKey)])})).then((function(e){return e[0].alg=e[1].alg=b(s),e[0].key_ops=f.filter(K),e[1].key_ops=f.filter(_),Promise.all([r.importKey("jwk",e[0],s,!0,e[0].key_ops),r.importKey("jwk",e[1],s,l,e[1].key_ops)])})).then((function(e){return{publicKey:e[0],privateKey:e[1]}}));if((c||u&&"SHA-1"===(s.hash||{}).name)&&"importKey"===e&&"jwk"===o&&"HMAC"===s.name&&"oct"===a.kty)return r.importKey("raw",h(y(a.k)),i,g[3],g[4]);if(c&&"importKey"===e&&("spki"===o||"pkcs8"===o))return r.importKey("jwk",w(a),i,g[3],g[4]);if(u&&"unwrapKey"===e)return r.decrypt(g[3],i,a).then((function(e){return r.importKey(o,e,g[4],g[5],g[6])}));try{p=n.apply(r,g)}catch(e){return Promise.reject(e)}return u&&(p=new Promise((function(e,t){p.onabort=p.onerror=function(e){t(e)},p.oncomplete=function(t){e(t.target.result)}}))),p=p.then((function(e){return"HMAC"===s.name&&(s.length||(s.length=8*e.algorithm.length)),0==s.name.search("RSA")&&(s.modulusLength||(s.modulusLength=(e.publicKey||e).algorithm.modulusLength),s.publicExponent||(s.publicExponent=(e.publicKey||e).algorithm.publicExponent)),e=e.publicKey&&e.privateKey?{publicKey:new E(e.publicKey,s,l,f.filter(K)),privateKey:new E(e.privateKey,s,l,f.filter(_))}:new E(e,s,l,f)}))}})),["exportKey","wrapKey"].forEach((function(e){var t=r[e];r[e]=function(n,o,a){var i,s=[].slice.call(arguments);switch(e){case"exportKey":s[1]=o._key;break;case"wrapKey":s[1]=o._key,s[2]=a._key}if((c||u&&"SHA-1"===(o.algorithm.hash||{}).name)&&"exportKey"===e&&"jwk"===n&&"HMAC"===o.algorithm.name&&(s[0]="raw"),!c||"exportKey"!==e||"spki"!==n&&"pkcs8"!==n||(s[0]="jwk"),u&&"wrapKey"===e)return r.exportKey(n,o).then((function(e){return"jwk"===n&&(e=h(unescape(encodeURIComponent(JSON.stringify(m(e)))))),r.encrypt(s[3],a,e)}));try{i=t.apply(r,s)}catch(e){return Promise.reject(e)}return u&&(i=new Promise((function(e,t){i.onabort=i.onerror=function(e){t(e)},i.oncomplete=function(t){e(t.target.result)}}))),"exportKey"===e&&"jwk"===n&&(i=i.then((function(e){return(c||u&&"SHA-1"===(o.algorithm.hash||{}).name)&&"HMAC"===o.algorithm.name?{kty:"oct",alg:b(o.algorithm),key_ops:o.usages.slice(),ext:!0,k:p(g(e))}:((e=m(e)).alg||(e.alg=b(o.algorithm)),e.key_ops||(e.key_ops="public"===o.type?o.usages.filter(K):"private"===o.type?o.usages.filter(_):o.usages.slice()),e)}))),!c||"exportKey"!==e||"spki"!==n&&"pkcs8"!==n||(i=i.then((function(e){return e=A(m(e))}))),i}})),["encrypt","decrypt","sign","verify"].forEach((function(e){var t=r[e];r[e]=function(n,o,a,i){if(u&&(!a.byteLength||i&&!i.byteLength))throw new Error("Empty input is not allowed");var c,s=[].slice.call(arguments),l=d(n);if(!u||"sign"!==e&&"verify"!==e||"RSASSA-PKCS1-v1_5"!==n&&"HMAC"!==n||(s[0]={name:n}),u&&o.algorithm.hash&&(s[0].hash=s[0].hash||o.algorithm.hash),u&&"decrypt"===e&&"AES-GCM"===l.name){var f=n.tagLength>>3;s[2]=(a.buffer||a).slice(0,a.byteLength-f),n.tag=(a.buffer||a).slice(a.byteLength-f)}u&&"AES-GCM"===l.name&&void 0===s[0].tagLength&&(s[0].tagLength=128),s[1]=o._key;try{c=t.apply(r,s)}catch(e){return Promise.reject(e)}return u&&(c=new Promise((function(t,r){c.onabort=c.onerror=function(e){r(e)},c.oncomplete=function(r){if(r=r.target.result,"encrypt"===e&&r instanceof AesGcmEncryptResult){var n=r.ciphertext,o=r.tag;(r=new Uint8Array(n.byteLength+o.byteLength)).set(new Uint8Array(n),0),r.set(new Uint8Array(o),n.byteLength),r=r.buffer}t(r)}}))),c}})),u){var f=r.digest;r.digest=function(e,t){if(!t.byteLength)throw new Error("Empty input is not allowed");var n;try{n=f.call(r,e,t)}catch(e){return Promise.reject(e)}return n=new Promise((function(e,t){n.onabort=n.onerror=function(e){t(e)},n.oncomplete=function(t){e(t.target.result)}}))},e.crypto=Object.create(t,{getRandomValues:{value:function(e){return t.getRandomValues(e)}},subtle:{value:r}}),e.CryptoKey=E}c&&(t.subtle=r,e.Crypto=n,e.SubtleCrypto=a,e.CryptoKey=E)}}}function p(e){return btoa(e).replace(/\=+$/,"").replace(/\+/g,"-").replace(/\//g,"_")}function y(e){return e=(e+="===").slice(0,-e.length%4),atob(e.replace(/-/g,"+").replace(/_/g,"/"))}function h(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}function g(e){return e instanceof ArrayBuffer&&(e=new Uint8Array(e)),String.fromCharCode.apply(String,e)}function d(e){var t={name:(e.name||e||"").toUpperCase().replace("V","v")};switch(t.name){case"SHA-1":case"SHA-256":case"SHA-384":case"SHA-512":break;case"AES-CBC":case"AES-GCM":case"AES-KW":e.length&&(t.length=e.length);break;case"HMAC":e.hash&&(t.hash=d(e.hash)),e.length&&(t.length=e.length);break;case"RSAES-PKCS1-v1_5":e.publicExponent&&(t.publicExponent=new Uint8Array(e.publicExponent)),e.modulusLength&&(t.modulusLength=e.modulusLength);break;case"RSASSA-PKCS1-v1_5":case"RSA-OAEP":e.hash&&(t.hash=d(e.hash)),e.publicExponent&&(t.publicExponent=new Uint8Array(e.publicExponent)),e.modulusLength&&(t.modulusLength=e.modulusLength);break;default:throw new SyntaxError("Bad algorithm name")}return t}function b(e){return{HMAC:{"SHA-1":"HS1","SHA-256":"HS256","SHA-384":"HS384","SHA-512":"HS512"},"RSASSA-PKCS1-v1_5":{"SHA-1":"RS1","SHA-256":"RS256","SHA-384":"RS384","SHA-512":"RS512"},"RSAES-PKCS1-v1_5":{"":"RSA1_5"},"RSA-OAEP":{"SHA-1":"RSA-OAEP","SHA-256":"RSA-OAEP-256"},"AES-KW":{128:"A128KW",192:"A192KW",256:"A256KW"},"AES-GCM":{128:"A128GCM",192:"A192GCM",256:"A256GCM"},"AES-CBC":{128:"A128CBC",192:"A192CBC",256:"A256CBC"}}[e.name][(e.hash||{}).name||e.length||""]}function m(e){(e instanceof ArrayBuffer||e instanceof Uint8Array)&&(e=JSON.parse(decodeURIComponent(escape(g(e)))));var t={kty:e.kty,alg:e.alg,ext:e.ext||e.extractable};switch(t.kty){case"oct":t.k=e.k;case"RSA":["n","e","d","p","q","dp","dq","qi","oth"].forEach((function(r){r in e&&(t[r]=e[r])}));break;default:throw new TypeError("Unsupported key type")}return t}function v(e){var t=m(e);return u&&(t.extractable=t.ext,delete t.ext),h(unescape(encodeURIComponent(JSON.stringify(t)))).buffer}function w(e){var t=S(e),r=!1;t.length>2&&(r=!0,t.shift());var n={ext:!0};switch(t[0][0]){case"1.2.840.113549.1.1.1":var o=["n","e","d","p","q","dp","dq","qi"],a=S(t[1]);r&&a.shift();for(var i=0;i<a.length;i++)a[i][0]||(a[i]=a[i].subarray(1)),n[o[i]]=p(g(a[i]));n.kty="RSA";break;default:throw new TypeError("Unsupported key type")}return n}function A(e){var t,r=[["",null]],n=!1;switch(e.kty){case"RSA":for(var o=["n","e","d","p","q","dp","dq","qi"],a=[],i=0;i<o.length&&o[i]in e;i++){var u=a[i]=h(y(e[o[i]]));128&u[0]&&(a[i]=new Uint8Array(u.length+1),a[i].set(u,1))}a.length>2&&(n=!0,a.unshift(new Uint8Array([0]))),r[0][0]="1.2.840.113549.1.1.1",t=a;break;default:throw new TypeError("Unsupported key type")}return r.push(new Uint8Array(k(t)).buffer),n?r.unshift(new Uint8Array([0])):r[1]={tag:3,value:r[1]},new Uint8Array(k(r)).buffer}function S(e,t){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),t||(t={pos:0,end:e.length}),t.end-t.pos<2||t.end>e.length)throw new RangeError("Malformed DER");var r,n=e[t.pos++],o=e[t.pos++];if(o>=128){if(o&=127,t.end-t.pos<o)throw new RangeError("Malformed DER");for(var a=0;o--;)a<<=8,a|=e[t.pos++];o=a}if(t.end-t.pos<o)throw new RangeError("Malformed DER");switch(n){case 2:r=e.subarray(t.pos,t.pos+=o);break;case 3:if(e[t.pos++])throw new Error("Unsupported bit string");o--;case 4:r=new Uint8Array(e.subarray(t.pos,t.pos+=o)).buffer;break;case 5:r=null;break;case 6:var i=btoa(g(e.subarray(t.pos,t.pos+=o)));if(!(i in s))throw new Error("Unsupported OBJECT ID "+i);r=s[i];break;case 48:r=[];for(var u=t.pos+o;t.pos<u;)r.push(S(e,t));break;default:throw new Error("Unsupported DER tag 0x"+n.toString(16))}return r}function k(e,t){t||(t=[]);var r=0,n=0,a=t.length+2;if(t.push(0,0),e instanceof Uint8Array){r=2,n=e.length;for(var i=0;i<n;i++)t.push(e[i])}else if(e instanceof ArrayBuffer)for(r=4,n=e.byteLength,e=new Uint8Array(e),i=0;i<n;i++)t.push(e[i]);else if(null===e)r=5,n=0;else if("string"==typeof e&&e in l){var u=h(atob(l[e]));for(r=6,n=u.length,i=0;i<n;i++)t.push(u[i])}else if(e instanceof Array){for(i=0;i<e.length;i++)k(e[i],t);r=48,n=t.length-a}else{if(!("object"===o(e)&&3===e.tag&&e.value instanceof ArrayBuffer))throw new Error("Unsupported DER value "+e);for(r=3,n=(e=new Uint8Array(e.value)).byteLength,t.push(0),i=0;i<n;i++)t.push(e[i]);n++}if(n>=128){var c=n;for(n=4,t.splice(a,0,c>>24&255,c>>16&255,c>>8&255,255&c);n>1&&!(c>>24);)c<<=8,n--;n<4&&t.splice(a,4-n),n|=128}return t.splice(a-2,2,r,n),t}function E(e,t,r,n){Object.defineProperties(this,{_key:{value:e},type:{value:e.type,enumerable:!0},extractable:{value:void 0===r?e.extractable:r,enumerable:!0},algorithm:{value:void 0===t?e.algorithm:t,enumerable:!0},usages:{value:void 0===n?e.usages:n,enumerable:!0}})}function K(e){return"verify"===e||"encrypt"===e||"wrapKey"===e}function _(e){return"sign"===e||"decrypt"===e||"unwrapKey"===e}}(n)}.apply(t,[]))||(e.exports=r)}},function(e){e.O(0,[5831,5657,7039,345],(function(){return t=99345,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=query.95809f238abe75c21d0a.js.map