(function(){'use strict';var r;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ba(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ja=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),la;
if(typeof Object.setPrototypeOf=="function")la=Object.setPrototypeOf;else{var ma;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;ma=pa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=la;
function w(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.za=b.prototype}
function z(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ra(a){if(!(a instanceof Array)){a=z(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function sa(a){return ta(a,a)}
function ta(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||va});
function wa(){this.B=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.R=this.j=null}
function xa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
wa.prototype.H=function(a){this.i=a};
function ya(a,b){a.j={exception:b,ld:!0};a.h=a.o||a.D}
wa.prototype.return=function(a){this.j={return:a};this.h=this.D};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.F=function(a){this.h=a};
function za(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function Aa(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.R.splice(0)[0];(b=a.j=a.j||b)?b.ld?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.u;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.u=null,ya(a.h,g),Fa(a)}a.h.u=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ld)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u.next,b,a.h.H):(a.h.H(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u["throw"],b,a.h.H):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ha(new Ga(new Ca(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ka});
u("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.B=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Z),reject:g(this.D)}};
b.prototype.Z=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.u(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.sa(h,g):this.u(g)};
b.prototype.D=function(g){this.H(2,g)};
b.prototype.u=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.R()};
b.prototype.ga=function(){var g=this;e(function(){if(g.U()){var h=ea.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.B)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.R=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.o();g.Yb(h.resolve,h.reject)};
b.prototype.sa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.Yb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Yb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=z(g),m=l.next();!m.done;m=l.next())d(m.value).Yb(h,k)})};
b.all=function(g){var h=z(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).Yb(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||qa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||ea});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=z(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ua(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ua(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ua(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=z(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(z([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=z(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(z([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Oa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Qa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(Math.random()*1E9>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(){return Date.now()}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.za=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Za($a,Error);$a.prototype.name="CustomError";var ab=(new Date("2024-01-01T00:00:00Z")).getTime();function bb(a){var b=a.url;a=a.Kh;this.i=b;this.B=a;a=/[?&]dsh=1(&|$)/.test(b);this.D=!a&&/[?&]ae=1(&|$)/.test(b);this.u=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.j=c}this.o=(new Date).getTime()-ab}
function db(a,b){return b?a.h?a.i.slice(0,a.h.index)+b+a.i.slice(a.h.index):a.i+b:a.i}
function eb(a){a=a.B;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b}
;var fb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var gb=globalThis.trustedTypes,hb;function ib(){var a=null;if(!gb)return a;try{var b=function(c){return c};
a=gb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function jb(){hb===void 0&&(hb=ib());return hb}
;function kb(a){this.h=a}
kb.prototype.toString=function(){return this.h+""};
function lb(a){var b=jb();return new kb(b?b.createScriptURL(a):a)}
function mb(a){if(a instanceof kb)return a.h;throw Error("");}
;var nb=sa([""]),ob=ta(["\x00"],["\\0"]),pb=ta(["\n"],["\\n"]),qb=ta(["\x00"],["\\u0000"]);function rb(a){return a.toString().indexOf("`")===-1}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.se=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);b!==void 0&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};function Db(a){var b="true".toString(),c=[new Ab];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Eb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Fb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Gb(a,b){if(b instanceof kb)a.href=mb(b).toString(),a.rel="stylesheet";else{if(Fb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Hb(a){a=a===void 0?document:a;var b,c;a=(c=(b="document"in a?a.document:a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Ib(a){this.h=a}
Ib.prototype.toString=function(){return this.h+""};function Jb(a){var b=Hb(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function Kb(a,b){if(b instanceof Ib)b=b.h;else throw Error("");a.textContent=b;Jb(a)}
function Lb(a,b){a.src=mb(b);Jb(a)}
;var Mb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Nb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ob=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Pb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Nb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Rb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Sb(a,b){b=Mb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Tb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ub(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Vb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Wb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Xb[c])c=Xb[c];else{c=String(c);if(!Xb[c]){var f=/function\s+([^\(]+)/m.exec(c);Xb[c]=f?f[1]:"[Anonymous]"}c=Xb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Wb(a,b){b||(b={});b[Yb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Yb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Wb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Yb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Wb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Yb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Xb={};function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function hc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function ic(a,b){b=hc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function jc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var kc=/#|$/,lc=/[?&]($|#)/;function mc(a,b){for(var c=a.search(kc),d=0,e,f=[];(e=jc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(lc,"$1")}
;function nc(a){var b=b===void 0?40:b;var c=[];oc(a,pc,6).forEach(function(d){qc(d,2)<=b&&c.push(qc(d,1))});
return c}
function rc(a){var b=b===void 0?40:b;var c=[];oc(a,pc,6).forEach(function(d){qc(d,2)>b&&c.push(qc(d,1))});
return c}
function sc(a){var b=b===void 0?40:b;if(!a)return!1;a=qc(a,1);return a>0&&a<=b}
;function tc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?uc.apply(null,d):tc(d)}}
;function G(){this.da=this.da;this.D=this.D}
G.prototype.da=!1;G.prototype.dispose=function(){this.da||(this.da=!0,this.aa())};
G.prototype[Symbol.dispose]=function(){this.dispose()};
function vc(a,b){a.addOnDisposeCallback(Xa(tc,b))}
G.prototype.addOnDisposeCallback=function(a,b){this.da?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
G.prototype.aa=function(){if(this.D)for(;this.D.length;)this.D.shift()()};var wc;function xc(){G.apply(this,arguments);this.j=1;this[wc]=this.dispose}
w(xc,G);xc.prototype.share=function(){if(this.da)throw Error("E:AD");this.j++;return this};
xc.prototype.dispose=function(){--this.j||G.prototype.dispose.call(this)};
wc=Symbol.dispose;function yc(a){return{fieldType:2,fieldName:a}}
function zc(a){return{fieldType:3,fieldName:a}}
;function Ac(a){this.h=a;a.zc("/client_streamz/bg/frs",zc("ke"))}
Ac.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Bc(a){this.h=a;a.zc("/client_streamz/bg/wrl",zc("mn"),yc("ac"),yc("sc"),zc("rk"),zc("mk"))}
Bc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Cc(a){this.i=a;a.Cb("/client_streamz/bg/ec",zc("en"),zc("mk"))}
Cc.prototype.h=function(a,b){this.i.yb("/client_streamz/bg/ec",a,b)};
function Dc(a){this.h=a;a.zc("/client_streamz/bg/el",zc("en"),zc("rk"),zc("mk"))}
Dc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Ec(a){this.i=a;a.Cb("/client_streamz/bg/cec",yc("ec"),zc("rk"),zc("mk"))}
Ec.prototype.h=function(a,b,c){this.i.yb("/client_streamz/bg/cec",a,b,c)};
function Fc(a){this.i=a;a.Cb("/client_streamz/bg/po/csc",yc("cs"),zc("rk"),zc("mk"))}
Fc.prototype.h=function(a,b,c){this.i.yb("/client_streamz/bg/po/csc",a,b,c)};
function Gc(a){this.i=a;a.Cb("/client_streamz/bg/po/ctav",zc("av"),zc("rk"),zc("mk"))}
Gc.prototype.h=function(a,b,c){this.i.yb("/client_streamz/bg/po/ctav",a,b,c)};
function Hc(a){this.i=a;a.Cb("/client_streamz/bg/po/cwsc",zc("su"),zc("rk"),zc("mk"))}
Hc.prototype.h=function(a,b,c){this.i.yb("/client_streamz/bg/po/cwsc",a,b,c)};function Ic(a){C.setTimeout(function(){throw a;},0)}
;var Jc,Kc=E("CLOSURE_FLAGS"),Lc=Kc&&Kc[610401301];Jc=Lc!=null?Lc:!1;function Mc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Nc,Oc=C.navigator;Nc=Oc?Oc.userAgentData||null:null;function Pc(a){return Jc?Nc?Nc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function H(a){return Mc().indexOf(a)!=-1}
;function Qc(){return Jc?!!Nc&&Nc.brands.length>0:!1}
function Rc(){return Qc()?!1:H("Opera")}
function Sc(){return H("Firefox")||H("FxiOS")}
function Tc(){return Qc()?Pc("Chromium"):(H("Chrome")||H("CriOS"))&&!(Qc()?0:H("Edge"))||H("Silk")}
;function Uc(){return Jc?!!Nc&&!!Nc.platform:!1}
function Vc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;var Wc=Rc(),Xc=Qc()?!1:H("Trident")||H("MSIE"),Yc=H("Edge"),Zc=H("Gecko")&&!(Mc().toLowerCase().indexOf("webkit")!=-1&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),$c=Mc().toLowerCase().indexOf("webkit")!=-1&&!H("Edge");$c&&H("Mobile");Uc()||H("Macintosh");Uc()||H("Windows");(Uc()?Nc.platform==="Linux":H("Linux"))||Uc()||H("CrOS");var ad=Uc()?Nc.platform==="Android":H("Android");Vc();H("iPad");H("iPod");Vc()||H("iPad")||H("iPod");Mc().toLowerCase().indexOf("kaios");Sc();var bd=Vc()||H("iPod"),cd=H("iPad");!H("Android")||Tc()||Sc()||Rc()||H("Silk");Tc();var dd=H("Safari")&&!(Tc()||(Qc()?0:H("Coast"))||Rc()||(Qc()?0:H("Edge"))||(Qc()?Pc("Microsoft Edge"):H("Edg/"))||(Qc()?Pc("Opera"):H("OPR"))||Sc()||H("Silk")||H("Android"))&&!(Vc()||H("iPad")||H("iPod"));var ed={},fd=null;function gd(a,b){Pa(a);b===void 0&&(b=0);hd();b=ed[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function id(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;jd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function jd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=fd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
hd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function hd(){if(!fd){fd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));ed[c]=d;for(var e=0;e<d.length;e++){var f=d[e];fd[f]===void 0&&(fd[f]=e)}}}}
;var kd=typeof Uint8Array!=="undefined",ld=!Xc&&typeof btoa==="function";function md(a){if(!ld)return gd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var nd=/[-_.]/g,od={"-":"+",_:"/",".":"="};function pd(a){return od[a]||""}
function qd(a){return kd&&a!=null&&a instanceof Uint8Array}
var rd={};function sd(a,b){td(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
sd.prototype.sizeBytes=function(){td(rd);var a=this.h;if(a!=null&&!qd(a))if(typeof a==="string")if(ld){nd.test(a)&&(a=a.replace(nd,pd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=id(a);else Oa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var ud;function td(a){if(a!==rd)throw Error("illegal external caller");}
;var vd;function wd(){var a=Error();Ub(a,"incident");Ic(a)}
function xd(a){a=Error(a);Ub(a,"warning");return a}
;function yd(){return typeof BigInt==="function"}
;function zd(a){return Array.prototype.slice.call(a)}
;var Ad=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Bd(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var Cd=Bd(),Dd=Bd("2ex"),Ed=Bd("1oa");Math.max.apply(Math,ra(Object.values({Yg:1,Wg:2,Vg:4,bh:8,ah:16,Zg:32,Bf:64,eh:128,Ug:256,Tg:512,Xg:1024,Hf:2048,dh:4096,If:8192,Cf:16384})));var Fd=Ad?function(a,b){a[Cd]|=b}:function(a,b){a.Qa!==void 0?a.Qa|=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Gd=Ad?function(a){return a[Cd]|0}:function(a){return a.Qa|0},Hd=Ad?function(a){return a[Cd]}:function(a){return a.Qa},Id=Ad?function(a,b){a[Cd]=b}:function(a,b){a.Qa!==void 0?a.Qa=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Jd(a,b){Id(b,(a|0)&-30975)}
function Kd(a,b){Id(b,(a|34)&-30941)}
;var Ld={},Md={};function Nd(a){return!(!a||typeof a!=="object"||a.h!==Md)}
function Od(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Pd(a){return!Array.isArray(a)||a.length?!1:Gd(a)&1?!0:!1}
var Qd,Rd=[];Id(Rd,55);Qd=Object.freeze(Rd);function Sd(a){if(a&2)throw Error();}
var Td=Object.freeze({});function Ud(a){a.sh=!0;return a}
;var Vd=Ud(function(a){return typeof a==="number"}),Wd=Ud(function(a){return typeof a==="string"}),Xd=Ud(function(a){return typeof a==="boolean"});
function Yd(){var a=Zd;return Ud(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var $d=Ud(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ae=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function be(a){var b=a;if(Wd(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Vd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ae?BigInt(a):a=Xd(a)?a?"1":"0":Wd(a)?a.trim()||"0":String(a)}
var he=Ud(function(a){return ae?a>=ce&&a<=de:a[0]==="-"?ee(a,fe):ee(a,ge)}),fe=Number.MIN_SAFE_INTEGER.toString(),ce=ae?BigInt(Number.MIN_SAFE_INTEGER):void 0,ge=Number.MAX_SAFE_INTEGER.toString(),de=ae?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ee(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var ie=0,je=0;function ke(a){var b=a>>>0;ie=b;je=(a-b)/4294967296>>>0}
function le(a){if(a<0){ke(0-a);var b=z(me(ie,je));a=b.next().value;b=b.next().value;ie=a>>>0;je=b>>>0}else ke(a)}
function ne(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else yd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+oe(c)+oe(a));return c}
function oe(a){a=String(a);return"0000000".slice(a.length)+a}
function pe(){var a=ie,b=je;b&2147483648?yd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=z(me(a,b)),a=b.next().value,b=b.next().value,a="-"+ne(a,b)):a=ne(a,b);return a}
function me(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function qe(a){return a.displayName||a.name||"unknown type name"}
function re(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Oa(a)+": "+a);return a}
var se=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function te(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:se.test(a)}
function ue(a){if(typeof a!=="number")throw xd("int32");if(!Number.isFinite(a))throw xd("int32");return a|0}
function ve(a){return a==null?a:ue(a)}
function we(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function xe(a){var b=0;b=b===void 0?0:b;if(!te(a))throw xd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return ye(a);case "bigint":return String(BigInt.asIntN(64,a));default:return ze(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=be(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=yd()?be(BigInt.asIntN(64,BigInt(a))):be(Ae(a))),a;case "bigint":return be(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?be(Be(a)):be(ze(a))}case 0:switch(c){case "string":return ye(a);
case "bigint":return be(BigInt.asIntN(64,a));default:return Be(a)}default:return Eb(b,"Unknown format requested type for int64")}}
function Ce(a){return a==null?a:xe(a)}
function De(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Ae(a){a.indexOf(".");if(De(a))return a;if(a.length<16)le(Number(a));else if(yd())a=BigInt(a),ie=Number(a&BigInt(4294967295))>>>0,je=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");je=ie=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),je*=1E6,ie=ie*1E6+d,ie>=4294967296&&(je+=Math.trunc(ie/4294967296),je>>>=0,ie>>>=0);b&&(b=z(me(ie,je)),a=b.next().value,b=b.next().value,ie=a,je=b)}return pe()}
function Be(a){te(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){le(a);var b=ie,c=je;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:ne(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function ze(a){te(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);De(b)?a=b:(le(a),a=pe())}return a}
function ye(a){te(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Ae(a)}
function Ee(a){if(a==null)return a;if(typeof a==="bigint")return he(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=he(a)?Number(a):String(a)),a;if(te(a))return typeof a==="number"?Be(a):ye(a)}
function Fe(a){if(typeof a!=="string")throw Error();return a}
function Ge(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function He(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+qe(b)+" but got "+(a&&qe(a.constructor)));}
function Ie(a,b,c){if(a!=null&&typeof a==="object"&&a.Jc===Ld)return a;if(Array.isArray(a)){var d=Gd(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Id(a,e);return new b(a)}}
;function Je(a){Ke===void 0&&(Ke=typeof Proxy==="function"?Le(Proxy):null);var b;(b=!Ke)||(Me===void 0&&(Me=typeof WeakMap==="function"?Le(WeakMap):null),b=!Me);if(b)return a;if(b=Ne(a))return b;if(Math.random()>.01)return a;Oe(a);b=new Ke(a,{set:function(c,d,e){Pe();c[d]=e;return!0}});
Qe(a,b);return b}
function Pe(){wd()}
var Re=void 0,Se=void 0;function Ne(a){var b;return(b=Re)==null?void 0:b.get(a)}
function Te(a){var b;return((b=Se)==null?void 0:b.get(a))||a}
function Qe(a,b){(Re||(Re=new Me)).set(a,b);(Se||(Se=new Me)).set(b,a)}
var Ke=void 0,Me=void 0;function Le(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var Ue=void 0;function Oe(a){if(Ue===void 0){var b=new Ke([],{});Ue=Array.prototype.concat.call([],b).length===1}Ue&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
;var Ve;function We(a,b){Gd(b);Ve=b;a=new a(b);Ve=void 0;return a}
function J(a,b,c){var d=d!=null?d:0;a==null&&(a=Ve);Ve=void 0;if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");e=Gd(a);if(e&2048)throw Error("farr");if(e&64)return a;d===1||d===2||(e|=64);if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;if(d=c.length){var f=d-1;if(Od(c[f])){e|=256;b=f-(+!!(e&512)-1);if(b>=1024)throw Error("pvtlmt");e=e&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,d-(+!!(e&512)-1));if(b>1024)throw Error("spvt");
e=e&-33521665|(b&1023)<<15}}}Id(a,e);return a}
;function Xe(a,b){return Ye(b)}
function Ye(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return he(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Pd(a))return}else{if(qd(a))return md(a);if(a instanceof sd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=md(b)}}}return a}
;function Ze(a,b,c){a=zd(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function $e(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Pd(a)?void 0:e&&Gd(a)&2?a:af(a,b,c,d!==void 0,e);else if(Od(a)){var f={},g;for(g in a)f[g]=$e(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function af(a,b,c,d,e){var f=d||c?Gd(a):0;d=d?!!(f&32):void 0;a=zd(a);for(var g=0;g<a.length;g++)a[g]=$e(a[g],b,c,d,e);c&&c(f,a);return a}
function bf(a){return a.Jc===Ld?a.toJSON():Ye(a)}
;function cf(a,b,c){c=c===void 0?Kd:c;if(a!=null){if(kd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Gd(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Id(a,(d|34)&-12293),a):af(a,cf,d&4?Kd:c,!0,!0)}a.Jc===Ld&&(c=a.G,d=Hd(c),a=d&2?a:We(a.constructor,df(c,d,!0)));return a}}
function df(a,b,c){var d=c||b&2?Kd:Jd,e=!!(b&32);a=Ze(a,b,function(f){return cf(f,e,d)});
Fd(a,32|(c?2:0));return a}
function ef(a){var b=a.G,c=Hd(b);return c&2?We(a.constructor,df(b,c,!1)):a}
;function ff(a,b){a=a.G;return gf(a,Hd(a),b)}
function hf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function gf(a,b,c,d){if(c===-1)return null;var e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(hf(a,b,e,c)&&Dd!=null){var g;a=(g=vd)!=null?g:vd={};g=a[Dd]||0;g>=4||(a[Dd]=g+1,wd())}return d}return hf(a,b,e,c)}}
function K(a,b,c){var d=a.G,e=Hd(d);Sd(e);jf(d,e,b,c);return a}
function jf(a,b,c,d){Od(d);var e=b>>15&1023||536870912;if(c>=e){var f=b;if(b&256)var g=a[a.length-1];else{if(d==null)return f;g=a[e+(+!!(b&512)-1)]={};f|=256}g[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&Id(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function kf(a){return lf(a,mf,11,!1)!==void 0}
function nf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function of(a,b,c){var d=a.G,e=Hd(d);Sd(e);if(b==null)return jf(d,e,3),a;b=Te(b);if(!Array.isArray(b))throw xd();var f=Gd(b),g=f,h=nf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=zd(b),g=0,f=pf(f,e),f=qf(f,e,!0),k=!1);f|=21;h=4&f?4096&f?4096:8192&f?8192:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=zd(b),g=0,f=pf(f,e),f=qf(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=zd(b),f=pf(f,e),f=qf(f,e,!0)),Id(b,f));jf(d,e,3,b);return a}
function rf(a,b,c,d){a=a.G;var e=Hd(a);Sd(e);if(d==null){var f=sf(a);if(tf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=sf(a);var g=tf(f,a,e,c);g!==b&&(g&&(e=jf(a,e,g)),f.set(c,b))}jf(a,e,b,d)}
function sf(a){if(Ad){var b;return(b=a[Ed])!=null?b:a[Ed]=new Map}if(Ed in a)return a[Ed];b=new Map;Object.defineProperty(a,Ed,{value:b});return b}
function tf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];gf(b,c,g)!=null&&(e!==0&&(c=jf(b,c,e)),e=g)}a.set(d,e);return e}
function lf(a,b,c,d){a=a.G;var e=Hd(a);d=gf(a,e,c,d);b=Ie(d,b,e);b!==d&&b!=null&&jf(a,e,c,b);return b}
function uf(a,b,c,d){b=lf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.G;d=Hd(a);if(!(d&2)){var e=ef(b);e!==b&&(b=e,jf(a,d,c,b))}return b}
function oc(a,b,c){var d=void 0===Td?2:4;var e=Hd(a.G),f=e,g=!(2&e);a=a.G;d=(e=!!(2&f))?1:d;g&&(g=!e);e=gf(a,f,c);e=Array.isArray(e)?e:Qd;var h=Gd(e),k=!!(4&h);if(!k){var l=h;l===0&&(l=pf(l,f));h=e;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var p=!n,t=!0,v=0,x=0;v<h.length;v++){var y=Ie(h[v],b,m);if(y instanceof b){if(!n){var F=!!(Gd(y.G)&2);p&&(p=!F);t&&(t=F)}h[x++]=y}}x<v&&(h.length=x);l|=4;l=t?l|16:l&-17;l=p?l|8:l&-9;Id(h,l);n&&Object.freeze(h);h=l}if(g&&!(8&h||!e.length&&(d===1||d===4&&32&h))){nf(h)&&
(e=zd(e),h=pf(h,f),f=jf(a,f,c,e));b=e;g=h;for(h=0;h<b.length;h++)l=b[h],m=ef(l),l!==m&&(b[h]=m);g|=8;g=b.length?g&-17:g|16;Id(b,g);h=g}var I;if(d===1||d===4&&32&h){if(!nf(h)){f=h;var V=!!(32&h);h|=!e.length||16&h&&(!k||V)?2:2048;h!==f&&Id(e,h);Object.freeze(e)}}else k=d!==5?!1:!!(32&h)||nf(h)||!!Ne(e),(d===2||k)&&nf(h)&&(e=zd(e),h=pf(h,f),h=qf(h,f,!1),Id(e,h),f=jf(a,f,c,e)),nf(h)||(c=h,h=qf(h,f,!1),h!==c&&Id(e,h)),k?I=Je(e):d===2&&((V=Re)==null||V.delete(e));return I||e}
function vf(a,b,c,d){d!=null?He(d,b):d=void 0;return K(a,c,d)}
function wf(a,b,c,d){var e=a.G,f=Hd(e);Sd(f);if(d==null)return jf(e,f,c),a;d=Te(d);if(!Array.isArray(d))throw xd();for(var g=Gd(d),h=g,k=nf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];He(t,b);k||(t=!!(Gd(t.G)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=zd(d),h=0,g=pf(g,f),g=qf(g,f,!0));g!==h&&Id(d,g);jf(e,f,c,d);return a}
function pf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function qf(a,b,c){32&b&&c||(a&=-33);return a}
function xf(a){a=ff(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):te(a)?c==="string"?ye(a):b?ze(a):Be(a):void 0;return b}
function yf(a,b){return a!=null?a:b}
function qc(a,b,c){c=c===void 0?0:c;return yf(we(ff(a,b)),c)}
function zf(a,b){var c=c===void 0?"":c;a=ff(a,b);return yf(a==null||typeof a==="string"?a:void 0,c)}
function Af(a){var b=0;b=b===void 0?0:b;a=ff(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return yf(a,b)}
function Bf(a,b,c){return K(a,b,Ge(c))}
function Cf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw xd("enum");c|=0}return K(a,b,c)}
;function Df(a){return a}
function Ef(a){return a}
function Ff(a,b,c,d){return Gf(a,b,c,d,Hf,If)}
function Jf(a,b,c,d){return Gf(a,b,c,d,Kf,Lf)}
function Gf(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Mf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var v=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var F=e(y,t)+f(n,p,v);F<l&&(a=1+y,l=F);n++;t--;v+=Mf(y);p=Math.max(p,y)}}b=e(0,0)+f(n,p,v);b<l&&(a=0,l=b);if(d){n=h;p=g;v=m;t=k;for(var I in d)d=+I,isNaN(d)||d>=
1024||(n--,t++,v-=I.length,g=e(d,t)+f(n,p,v),g<l&&(a=1+d,l=g))}return a}
function Lf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Kf(a,b){return(a>1?a-1:0)+(a-b)*4}
function If(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Hf(a){return 40+4*a}
function Mf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Nf,Of;function L(a,b,c){this.G=J(a,b,c)}
r=L.prototype;r.toJSON=function(){return Pf(this)};
r.serialize=function(a){try{return Of=!0,a&&(Nf=a===Ef||a!==Df&&a!==Ff&&a!==Jf?Ef:a),JSON.stringify(Pf(this),Xe)}finally{a&&(Nf=void 0),Of=!1}};
function Qf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Fd(b,32);return We(a,b)}
r.clone=function(){var a=this.G,b=Hd(a);return We(this.constructor,df(a,b,!1))};
r.Jc=Ld;r.toString=function(){try{return Of=!0,Pf(this).toString()}finally{Of=!1}};
function Pf(a){var b=a.G,c;Of?c=b:c=af(b,bf,void 0,void 0,!1);b=c;c=!Of;var d=Hd(c?a.G:b);if(a=b.length){var e=b[a-1],f=Od(e);f?a--:e=void 0;var g=+!!(d&512)-1,h=a-g;d=!!Nf&&!(d&512);var k,l=(k=Nf)!=null?k:Ef;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;var p;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],v=l-g;t==null||Pd(t)||Nd(t)&&t.size===0||(f=m[l]=void 0,((f=p)!=null?f:p={})[v]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,
((l=p)!=null?l:p={})[x]=n[x];else if(t=n[x],Array.isArray(t)&&(Pd(t)||Nd(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(v=m.length;v<=t;v++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=p)!=null?l:p={})[x]=t);f||(p=n);if(p)for(var y in p){n=p;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){p=d[a-1];if(!(p==null||Pd(p)||Nd(p)&&p.size===0))break;var F=!0}if(d!==b||m||F){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(F||m||n)d.length=a;n&&d.push(n)}F=
d}else F=b;return F}
;function Rf(a){return function(b){return Qf(a,b)}}
;function Sf(a){this.G=J(a)}
w(Sf,L);function Tf(a,b){return of(a,b,ue)}
;function Uf(a){this.G=J(a)}
w(Uf,L);var Vf=[1,2,3];function Wf(a){this.G=J(a)}
w(Wf,L);var Xf=[1,2,3];function Yf(a){this.G=J(a)}
w(Yf,L);function Zf(a){this.G=J(a)}
w(Zf,L);function $f(a){this.G=J(a)}
w($f,L);function ag(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function bg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],y=e[3],F=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var I=y^v&(x^y);var V=1518500249}else I=v^x^y,V=1859775393;else t<60?(I=v&x|y&(v|x),V=2400959708):(I=v^x^y,V=3395469782);I=((n<<5|n>>>27)&4294967295)+I+F+V+p[t]&4294967295;F=y;y=x;x=(v<<30|v>>>2)&4294967295;v=n;n=I}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+F&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ud:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function cg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,dg(ag(d),a,c||null)].join(" "):null}
function dg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Nb(d,function(h){e.push(h)}),eg(e.join(" "));
var f=[],g=[];Nb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Nb(d,function(h){e.push(h)});
a=eg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function eg(a){var b=bg();b.update(a);return b.Ud().toLowerCase()}
;function fg(a){this.h=a||{cookie:""}}
r=fg.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Lb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Me;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Lb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=fb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Lb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=fb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var gg=new fg(typeof document=="undefined"?null:document);function hg(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new fg(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function ig(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new fg(document)).get(b));return a?cg(a,c,d):null}
function jg(a){var b=ag(String(C.location.href)),c=[];if(hg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new fg(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?cg(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=ig("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=ig("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function kg(){}
kg.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
kg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function lg(a){this.G=J(a)}
w(lg,L);function mg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Ya()};
this.i=this.h()}
mg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
mg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
mg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
mg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function ng(a){this.G=J(a)}
w(ng,L);function og(a){this.G=J(a)}
w(og,L);function pg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=pg.prototype;r.clone=function(){return new pg(this.x,this.y)};
r.equals=function(a){return a instanceof pg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function qg(a,b){this.width=a;this.height=b}
r=qg.prototype;r.clone=function(){return new qg(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function rg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function sg(a){var b=tg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ug(a){for(var b in a)return!1;return!0}
function vg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function wg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function xg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function yg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function zg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=zg(a[c]);return b}
var Ag="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ag.length;f++)c=Ag[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Cg(a,b){this.h=a===Dg&&b||""}
Cg.prototype.toString=function(){return this.h};
var Dg={};new Cg(Dg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Eg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Fg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Gg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Hg(a){this.G=J(a)}
w(Hg,L);Hg.prototype.ec=function(){return Af(this)};function Ig(a){this.G=J(a)}
w(Ig,L);function Jg(a){this.G=J(a)}
w(Jg,L);function Kg(a,b){wf(a,Ig,1,b)}
;function mf(a){this.G=J(a)}
w(mf,L);var Lg=["platform","platformVersion","architecture","model","uaFullVersion"],Mg=new Jg,Ng=null;function Og(a,b){b=b===void 0?Lg:b;if(!Ng){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Ig;f=Bf(f,1,e.brand);return Bf(f,2,e.version)});
Kg(K(Mg,2,re(a.mobile)),c);Ng=a.getHighEntropyValues(b)}var d=new Set(b);return Ng.then(function(e){var f=Mg.clone();d.has("platform")&&Bf(f,3,e.platform);d.has("platformVersion")&&Bf(f,4,e.platformVersion);d.has("architecture")&&Bf(f,5,e.architecture);d.has("model")&&Bf(f,6,e.model);d.has("uaFullVersion")&&Bf(f,7,e.uaFullVersion);return f}).catch(function(){return Mg.clone()})}
;function Pg(a){this.G=J(a)}
w(Pg,L);function Qg(a){this.G=J(a,4)}
w(Qg,L);function Rg(a){this.G=J(a,36)}
w(Rg,L);function Sg(a){this.G=J(a,19)}
w(Sg,L);Sg.prototype.Ob=function(a){return Cf(this,2,a)};function Tg(a,b){this.Za=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Sg;Number.isInteger(a)&&this.h.Ob(a);b||(this.locale=document.documentElement.getAttribute("lang"));Ug(this,new Pg)}
Tg.prototype.Ob=function(a){this.h.Ob(a);return this};
function Ug(a,b){vf(a.h,Pg,1,b);Af(b)||Cf(b,1,1);a.Za||(b=Vg(a),zf(b,5)||Bf(b,5,a.locale));a.i&&(b=Vg(a),uf(b,Jg,9)||vf(b,Jg,9,a.i))}
function Wg(a,b){kf(Xg(a))&&(a=$g(a),Cf(a,1,b))}
function ah(a,b){kf(Xg(a))&&(a=$g(a),K(a,2,re(b)))}
function Xg(a){return uf(a.h,Pg,1)}
function bh(a){var b=b===void 0?Lg:b;var c=a.Za?void 0:window;c?Og(c,b).then(function(d){a.i=d;d=Vg(a);vf(d,Jg,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Vg(a){a=Xg(a);var b=uf(a,mf,11);b||(b=new mf,vf(a,mf,11,b));return b}
function $g(a){a=Vg(a);var b=uf(a,Hg,10);b||(b=new Hg,K(b,2,re(!1)),vf(a,Hg,10,b));return b}
function ch(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(kf(Xg(a))){var h=$g(a);K(h,3,ve(d))}kf(Xg(a))&&(d=$g(a),K(d,4,ve(f)));kf(Xg(a))&&(f=$g(a),K(f,5,ve(g)));a=a.h.clone();g=Date.now().toString();a=K(a,4,Ce(g));b=b.slice();b=wf(a,Rg,3,b);e&&(a=new ng,e=K(a,13,ve(e)),a=new og,e=vf(a,ng,2,e),a=new Qg,e=vf(a,og,1,e),e=Cf(e,2,9),vf(b,Qg,18,e));c&&K(b,14,Ce(c));return b}
;var dh=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function eh(a){this.h=this.i=this.j=a}
eh.prototype.reset=function(){this.h=this.i=this.j};
eh.prototype.getValue=function(){return this.i};function fh(a){this.G=J(a,8)}
w(fh,L);var gh=Rf(fh);function hh(a){this.G=J(a)}
w(hh,L);var ih=new function(){this.ctor=hh;this.isRepeated=0;this.h=uf;this.defaultValue=void 0};function jh(a){G.call(this);var b=this;this.componentId="";this.j=[];this.ga="";this.pageId=null;this.ia=this.U=-1;this.B=this.experimentIds=null;this.R=this.u=0;this.sa=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Hb=a.Hb||function(){};
this.i=new Tg(a.logSource,a.Za);this.network=a.network;this.vb=a.vb||null;this.bufferSize=1E3;this.H=a.mf||null;this.sessionIndex=a.sessionIndex||null;this.Fb=a.Fb||!1;this.logger=null;this.withCredentials=!a.cd;this.Za=a.Za||!1;this.Z=typeof URLSearchParams!=="undefined"&&!!(new URL(kh())).searchParams&&!!(new URL(kh())).searchParams.set;var c=Cf(new Pg,1,1);Ug(this.i,c);this.o=new eh(1E4);a=lh(this,a.Wc);this.h=new mg(this.o.getValue(),a);this.Y=new mg(6E5,a);this.Fb||this.Y.start();this.Za||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.Bc()}),document.addEventListener("pagehide",this.Bc.bind(this)))}
w(jh,G);function lh(a,b){return a.Z?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=jh.prototype;r.aa=function(){this.Bc();this.h.stop();this.Y.stop();G.prototype.aa.call(this)};
r.log=function(a){if(this.Z){a=a.clone();var b=this.sa++;a=K(a,21,Ce(b));this.componentId&&Bf(a,26,this.componentId);if(xf(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";K(b,1,Ce(c))}Ee(ff(a,15))==null&&K(a,15,Ce((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),vf(b,lg,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Fb||this.h.enabled||this.h.start()}};
r.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ia>d&&this.U<d)b&&b("throttled");else{this.network&&(typeof this.network.ec==="function"?Wg(this.i,this.network.ec()):Wg(this.i,0));var e=ch(this.i,this.j,this.u,this.R,this.vb);d={};var f=this.Hb();f&&(d.Authorization=f);this.H||(this.H=kh());try{var g=(new URL(this.H)).toString()}catch(t){g=(new URL(this.H,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.ga===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize(),k;this.B&&this.B.isSupported(h.length)&&(k=this.B.compress(h));var l={url:g.toString(),body:h,Pd:1,uc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},m=function(t){c.o.reset();
c.h.setInterval(c.o.getValue());if(t){var v=null;try{var x=JSON.stringify(JSON.parse(t.replace(")]}'\n","")));v=gh(x)}catch(y){}v&&(t=Number,x="-1",x=x===void 0?"0":x,x=yf(xf(v),x),t=t(x),t>0&&(c.U=Date.now(),c.ia=c.U+t),v=ih.ctor?ih.h(v,ih.ctor,175237375,!0):ih.h(v,175237375,null,!0),v=v===null?void 0:v)&&(v=qc(v,1,-1),v!==-1&&(c.o=new eh(v<1?1:v),c.h.setInterval(c.o.getValue())))}a&&a();c.R=0},n=function(t,v){var x=oc(e,Rg,3);
var y=Ee(ff(e,14));y=y==null?void 0:y;var F=c.o;F.h=Math.min(3E5,F.h*2);F.i=Math.min(3E5,F.h+Math.round(.1*(Math.random()-.5)*2*F.h));c.h.setInterval(c.o.getValue());t===401&&f&&(c.ga=f);y&&(c.u+=y);v===void 0&&(v=c.isRetryable(t));v&&(c.j=x.concat(c.j),c.Fb||c.h.enabled||c.h.start());b&&b("net-send-failed",t);++c.R},p=function(){c.network&&c.network.send(l,m,n)};
k?k.then(function(t){l.uc["Content-Encoding"]="gzip";l.uc["Content-Type"]="application/binary";l.body=t;l.Pd=2;p()},function(){p()}):p()}}}};
r.Bc=function(){ah(this.i,!0);this.flush();ah(this.i,!1)};
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function kh(){return"https://play.google.com/log?format=json&hasfast=true"}
;function mh(){this.Jd=typeof AbortController!=="undefined"}
mh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return A(function(v){switch(v.h){case 1:return f=(e=d.Jd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.uc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.F(3);break}if((l=b)==null){v.F(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.R=[v.j];v.o=0;v.D=0;clearTimeout(f);Ba(v);break;case 2:m=Aa(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.F(3)}})};
mh.prototype.ec=function(){return 4};function nh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.Oa="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.j=!1;this.network=null;this.componentId="";this.pageId=this.h=this.vb=null}
w(nh,G);function oh(a,b){a.i=b;return a}
function ph(a,b){a.network=b;return a}
function qh(a,b){a.h=b}
nh.prototype.cd=function(){this.o=!0;return this};
function rh(a){a.network||(a.network=new mh);var b=new jh({logSource:a.logSource,Hb:a.Hb?a.Hb:jg,sessionIndex:a.sessionIndex,mf:a.Oa,Za:a.j,Fb:!1,cd:a.o,Wc:a.Wc,network:a.network});vc(a,b);if(a.i){var c=a.i,d=Vg(b.i);Bf(d,7,c)}Math.random()<.5&&(b.B=new kg);a.componentId&&(b.componentId=a.componentId);a.vb&&(b.vb=a.vb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new lg),c=b.experimentIds,d=d.serialize(),Bf(c,4,d)):b.experimentIds&&K(b.experimentIds,4));bh(b.i);a.network.Ob&&
a.network.Ob(a.logSource);a.network.Xe&&a.network.Xe(b);return b}
;function sh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;G.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new nh(a,"0"),a.componentId=b,vc(this,a),c!==""&&(a.Oa=c),d&&(a.j=!0),e&&oh(a,e),g&&ph(a,g),b=rh(a));this.h=b}
w(sh,G);
sh.prototype.flush=function(a){var b=a||[];if(b.length){a=new $f;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Zf;f=Bf(f,1,e.i);var g=th(e);f=of(f,g,Fe);g=[];var h=[];for(var k=z(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Cc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Wf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&rf(v,1,Xf,Ce(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);rf(v,2,Xf,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Yf;p=vf(t,Wf,2,p);t=l;v=[];x=uh(e);for(var y=0;y<x.length;y++){var F=x[y],I=t[y],V=new Uf;switch(F){case 3:rf(V,1,Vf,Ge(String(I)));break;case 2:F=Number(I);Number.isFinite(F)&&rf(V,2,Vf,ve(F));break;case 1:rf(V,3,Vf,re(I==="true"))}v.push(V)}wf(p,Uf,1,v);g.push(p)}}wf(f,Yf,4,g);c.push(f);e.clear()}wf(a,Zf,1,c);b=this.h;if(a instanceof Rg)b.log(a);else try{var ia=new Rg,Ja=a.serialize();var cb=Bf(ia,8,Ja);b.log(cb)}catch(aa){}this.h.flush()}};function vh(a){this.h=a}
;function wh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function uh(a){return a.fields.map(function(b){return b.fieldType})}
function th(a){return a.fields.map(function(b){return b.fieldName})}
r=wh.prototype;r.Kd=function(a){var b=B.apply(1,arguments),c=this.Cc(b);c?c.push(new vh(a)):this.vd(a,b)};
r.vd=function(a){var b=this.Vc(B.apply(1,arguments));this.h.set(b,[new vh(a)])};
r.Cc=function(){var a=this.Vc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.ge=function(){var a=this.Cc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.Vc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function xh(a,b){wh.call(this,a,3,b)}
w(xh,wh);xh.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ge(b);d&&(c=d.h);this.vd(c+a,b)};function yh(a,b){wh.call(this,a,2,b)}
w(yh,wh);yh.prototype.record=function(a){this.Kd(a,B.apply(1,arguments))};function zh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
zh.prototype.stopPropagation=function(){this.j=!0};
zh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ah(a,b){zh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Ah,zh);
Ah.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Ah.za.preventDefault.call(this)};
Ah.prototype.stopPropagation=function(){Ah.za.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ah.prototype.preventDefault=function(){Ah.za.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Bh="closure_listenable_"+(Math.random()*1E6|0);var Ch=0;function Dh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.fc=e;this.key=++Ch;this.Nb=this.Xb=!1}
function Eh(a){a.Nb=!0;a.listener=null;a.proxy=null;a.src=null;a.fc=null}
;function Fh(a){this.src=a;this.listeners={};this.h=0}
Fh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Gh(a,b,d,e);g>-1?(b=a[g],c||(b.Xb=!1)):(b=new Dh(b,this.src,f,!!d,e),b.Xb=c,a.push(b));return b};
Fh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Gh(e,b,c,d);return b>-1?(Eh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Hh(a,b){var c=b.type;c in a.listeners&&Sb(a.listeners[c],b)&&(Eh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Gh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Nb&&f.listener==b&&f.capture==!!c&&f.fc==d)return e}return-1}
;var Ih="closure_lm_"+(Math.random()*1E6|0),Jh={},Kh=0;function Lh(a,b,c,d,e){if(d&&d.once)Mh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Lh(a,b[f],c,d,e);else c=Nh(c),a&&a[Bh]?a.listen(b,c,Qa(d)?!!d.capture:!!d,e):Oh(a,b,c,!1,d,e)}
function Oh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ph(a);h||(a[Ih]=h=new Fh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Qh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)dh||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Rh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Kh++}}
function Qh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Sh;return a}
function Mh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Mh(a,b[f],c,d,e);else c=Nh(c),a&&a[Bh]?a.h.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Oh(a,b,c,!0,d,e)}
function Th(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Th(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Nh(c),a&&a[Bh])?a.h.remove(String(b),c,d,e):a&&(a=Ph(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Gh(b,c,d,e)),(c=a>-1?b[a]:null)&&Uh(c))}
function Uh(a){if(typeof a!=="number"&&a&&!a.Nb){var b=a.src;if(b&&b[Bh])Hh(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Rh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Kh--;(c=Ph(b))?(Hh(c,a),c.h==0&&(c.src=null,b[Ih]=null)):Eh(a)}}}
function Rh(a){return a in Jh?Jh[a]:Jh[a]="on"+a}
function Sh(a,b){if(a.Nb)a=!0;else{b=new Ah(b,this);var c=a.listener,d=a.fc||a.src;a.Xb&&Uh(a);a=c.call(d,b)}return a}
function Ph(a){a=a[Ih];return a instanceof Fh?a:null}
var Vh="__closure_events_fn_"+(Math.random()*1E9>>>0);function Nh(a){if(typeof a==="function")return a;a[Vh]||(a[Vh]=function(b){return a.handleEvent(b)});
return a[Vh]}
;function Wh(){G.call(this);this.h=new Fh(this);this.sa=this;this.Z=null}
Za(Wh,G);Wh.prototype[Bh]=!0;r=Wh.prototype;r.addEventListener=function(a,b,c,d){Lh(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Th(this,a,b,c,d)};
function Xh(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.sa;c=b.type||b;typeof b==="string"?b=new zh(b,a):b instanceof zh?b.target=b.target||a:(e=b,b=new zh(c,a),Bg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Yh(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Yh(g,c,!0,b)&&e,b.j||(e=Yh(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Yh(g,c,!1,b)&&e}
r.aa=function(){Wh.za.aa.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
r.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Eh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Yh(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Nb&&g.capture==c){var h=g.listener,k=g.fc||g.src;g.Xb&&Hh(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Zh=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function $h(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
$h.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ai(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function bi(){this.i=this.h=null}
bi.prototype.add=function(a,b){var c=ci.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
bi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ci=new $h(function(){return new di},function(a){return a.reset()});
function di(){this.next=this.scope=this.h=null}
di.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
di.prototype.reset=function(){this.next=this.scope=this.h=null};var ei,fi=!1,gi=new bi;function hi(a,b){ei||ii();fi||(ei(),fi=!0);gi.add(a,b)}
function ii(){var a=Promise.resolve(void 0);ei=function(){a.then(ji)}}
function ji(){for(var a;a=gi.remove();){try{a.h.call(a.scope)}catch(b){Ic(b)}ai(ci,a)}fi=!1}
;function ki(){}
function li(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function mi(a){this.h=0;this.B=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=ki)try{var b=this;a.call(void 0,function(c){ni(b,2,c)},function(c){ni(b,3,c)})}catch(c){ni(this,3,c)}}
function oi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
oi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var pi=new $h(function(){return new oi},function(a){a.reset()});
function qi(a,b,c){var d=pi.get();d.i=a;d.h=b;d.context=c;return d}
function ri(a){return new mi(function(b,c){c(a)})}
mi.prototype.then=function(a,b,c){return si(this,Zh(typeof a==="function"?a:null),Zh(typeof b==="function"?b:null),c)};
mi.prototype.$goog_Thenable=!0;r=mi.prototype;r.wc=function(a,b){return si(this,null,Zh(a),b)};
r.catch=mi.prototype.wc;r.cancel=function(a){if(this.h==0){var b=new ti(a);hi(function(){ui(this,b)},this)}};
function ui(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?ui(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):vi(c),wi(c,e,3,b)))}a.j=null}else ni(a,3,b)}
function xi(a,b){a.i||a.h!=2&&a.h!=3||yi(a);a.o?a.o.next=b:a.i=b;a.o=b}
function si(a,b,c,d){var e=qi(null,null,null);e.child=new mi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof ti?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;xi(a,e);return e.child}
r.kf=function(a){this.h=0;ni(this,2,a)};
r.lf=function(a){this.h=0;ni(this,3,a)};
function ni(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.kf,f=a.lf;if(d instanceof mi){xi(d,qi(e||ki,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if(typeof k==="function"){zi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.B=c,a.h=b,a.j=null,yi(a),b!=3||c instanceof ti||Ai(a,c))}}
function zi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function yi(a){a.u||(a.u=!0,hi(a.ae,a))}
function vi(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
r.ae=function(){for(var a;a=vi(this);)wi(this,a,this.h,this.B);this.u=!1};
function wi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,Bi(b,c,d);else try{b.j?b.i.call(b.context):Bi(b,c,d)}catch(e){Ci.call(null,e)}ai(pi,b)}
function Bi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Ai(a,b){a.D=!0;hi(function(){a.D&&Ci.call(null,b)})}
var Ci=Ic;function ti(a){$a.call(this,a)}
Za(ti,$a);ti.prototype.name="cancel";function Di(a,b){Wh.call(this);this.j=a||1;this.i=b||C;this.o=Wa(this.gf,this);this.u=Ya()}
Za(Di,Wh);r=Di.prototype;r.enabled=!1;r.Ca=null;r.setInterval=function(a){this.j=a;this.Ca&&this.enabled?(this.stop(),this.start()):this.Ca&&this.stop()};
r.gf=function(){if(this.enabled){var a=Ya()-this.u;a>0&&a<this.j*.8?this.Ca=this.i.setTimeout(this.o,this.j-a):(this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null),Xh(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ca||(this.Ca=this.i.setTimeout(this.o,this.j),this.u=Ya())};
r.stop=function(){this.enabled=!1;this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null)};
r.aa=function(){Di.za.aa.call(this);this.stop();delete this.i};function Ei(a){G.call(this);this.H=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Di(this.flushInterval);this.h.listen("tick",this.Qb,!1,this);vc(this,this.h)}
w(Ei,G);r=Ei.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Fi(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Qb()}
r.Qb=function(){var a=this.i.values();a=[].concat(ra(a)).filter(function(b){return b.h.size});
a.length&&this.H.flush(a,this.u);Gi(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Cb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new xh(a,b))};
r.zc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new yh(a,b))};
function Hi(a,b){return a.B.has(b)?void 0:a.i.get(b)}
r.yb=function(a){this.Id(a,1,B.apply(1,arguments))};
r.Id=function(a,b){var c=B.apply(2,arguments),d=Hi(this,a);d&&d instanceof xh&&(d.j(b,c),Fi(this))};
r.record=function(a,b){var c=B.apply(2,arguments),d=Hi(this,a);d&&d instanceof yh&&(d.record(b,c),Fi(this))};
function Gi(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ii(){}
Ii.prototype.serialize=function(a){var b=[];Ji(this,a,b);return b.join("")};
function Ji(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ji(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Ki(d,c),c.push(":"),Ji(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ki(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Li={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Mi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ki(a,b){b.push('"',a.replace(Mi,function(c){var d=Li[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Li[c]=d);return d}),'"')}
;function Ni(){Wh.call(this);this.headers=new Map;this.i=!1;this.K=null;this.o=this.Y="";this.j=this.U=this.B=this.R=!1;this.H=0;this.u=null;this.ia="";this.ga=!1}
Za(Ni,Wh);var Oi=/^https?$/i,Pi=["POST","PUT"],Qi=[];function Ri(a,b,c,d,e,f,g){var h=new Ni;Qi.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Rd,!0,void 0,void 0);f&&(h.H=Math.max(0,f));g&&(h.ga=g);h.send(a,c,d,e)}
r=Ni.prototype;r.Rd=function(){this.dispose();Sb(Qi,this)};
r.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.R=!1;this.i=!0;this.K=new XMLHttpRequest;this.K.onreadystatechange=Zh(Wa(this.od,this));try{this.getStatus(),this.U=!0,this.K.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Si(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=z(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Mb(Pi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=z(c);for(d=b.next();!d.done;d=b.next())c=z(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.ia&&(this.K.responseType=this.ia);"withCredentials"in this.K&&this.K.withCredentials!==this.ga&&(this.K.withCredentials=this.ga);try{this.u&&(clearTimeout(this.u),this.u=null),this.H>0&&(this.getStatus(),this.u=setTimeout(this.jf.bind(this),this.H)),
this.getStatus(),this.B=!0,this.K.send(a),this.B=!1}catch(g){this.getStatus(),Si(this,g)}};
r.jf=function(){typeof La!="undefined"&&this.K&&(this.o="Timed out after "+this.H+"ms, aborting",this.getStatus(),Xh(this,"timeout"),this.abort(8))};
function Si(a,b){a.i=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.o=b;Ti(a);Ui(a)}
function Ti(a){a.R||(a.R=!0,Xh(a,"complete"),Xh(a,"error"))}
r.abort=function(){this.K&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.K.abort(),this.j=!1,Xh(this,"complete"),Xh(this,"abort"),Ui(this))};
r.aa=function(){this.K&&(this.i&&(this.i=!1,this.j=!0,this.K.abort(),this.j=!1),Ui(this,!0));Ni.za.aa.call(this)};
r.od=function(){this.da||(this.U||this.B||this.j?Vi(this):this.Be())};
r.Be=function(){Vi(this)};
function Vi(a){if(a.i&&typeof La!="undefined")if(a.B&&(a.K?a.K.readyState:0)==4)setTimeout(a.od.bind(a),0);else if(Xh(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Wi(a))Xh(a,"complete"),Xh(a,"success");else{try{var b=(a.K?a.K.readyState:0)>2?a.K.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Ti(a)}}finally{Ui(a)}}}
function Ui(a,b){if(a.K){a.u&&(clearTimeout(a.u),a.u=null);var c=a.K;a.K=null;b||Xh(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.K};
r.isComplete=function(){return(this.K?this.K.readyState:0)==4};
function Wi(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=bc(1,String(a.Y)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Oi.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.K?this.K.readyState:0)>2?this.K.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Xi(){}
Xi.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Ri(a.url,function(d){d=d.target;if(Wi(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.uc,a.timeoutMillis,a.withCredentials)};
Xi.prototype.ec=function(){return 1};function Yi(a,b){this.logger=a;this.event=b;this.startTime=Zi()}
Yi.prototype.done=function(){this.logger.Kb(this.event,Zi()-this.startTime)};
function $i(){xc.apply(this,arguments)}
w($i,xc);function aj(a,b){var c=Zi();b=b();a.Kb("n",Zi()-c);return b}
function bj(){$i.apply(this,arguments)}
w(bj,$i);r=bj.prototype;r.Gc=function(){};
r.qb=function(){};
r.Kb=function(){};
r.Da=function(){};
r.sc=function(){};
r.Ad=function(){};
function cj(a){return{df:new Ac(a),errorCount:new Ec(a),eventCount:new Cc(a),Zd:new Dc(a),Mh:new Bc(a),Oh:new Fc(a),ih:new Gc(a),Nh:new Hc(a)}}
function dj(a,b,c,d){a=ph(oh(new nh(1828,"0"),a),new Xi);b.length&&qh(a,Tf(new Sf,b));d!==void 0&&(a.Oa=d);var e=new sh(1828,"","",!1,"",rh(a));vc(e,a);var f=new Ei({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.Qb()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function ej(a,b){G.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(ej,G);function fj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-Zi());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=Zi(),a.timer=void 0}},b)}}
function gj(a,b,c){$i.call(this);this.metrics=a;this.Ea=b;this.gb=c}
w(gj,$i);gj.prototype.Gc=function(a){this.metrics.df.record(a,this.Ea)};
gj.prototype.qb=function(a){this.metrics.eventCount.h(a,this.Ea)};
gj.prototype.Kb=function(a,b){this.metrics.Zd.record(b,a,this.gb,this.Ea)};
gj.prototype.Da=function(a){this.metrics.errorCount.h(a,this.gb,this.Ea)};
function hj(a,b){b=b===void 0?[]:b;var c={Ea:a.Ea||"_",gb:a.gb||"",dc:a.dc||[],jc:a.jc|0,Oa:a.Oa,kc:a.kc||function(){},
xb:a.xb||function(e,f){return dj(e,f,c.kc,c.Oa)}};
b=c.xb("40",c.dc.concat(b));gj.call(this,cj(b),c.Ea,c.gb);var d=this;this.options=c;this.service=b;this.i=!a.xb;this.h=new ej(function(){return void d.service.Qb()},c.jc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(hj,gj);hj.prototype.Ad=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.xb("40",this.options.dc.concat(a));this.h=new ej(function(){return void b.service.Qb()},this.options.jc);
this.metrics=cj(this.service)};
hj.prototype.sc=function(){fj(this.h)};
function Zi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function ij(a){this.G=J(a,0,"bfkj")}
w(ij,L);var jj=function(a){return Ud(function(b){return b instanceof a&&!(Gd(b.G)&2)})}(ij);function kj(a){this.G=J(a)}
w(kj,L);function pc(a){this.G=J(a)}
w(pc,L);function lj(a){this.G=J(a)}
w(lj,L);var mj=Rf(lj);function nj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function oj(a,b,c){if(a.disable)return new bj;b=b&&sc(uf(b,kj,7))?nc(b):[];return c?(c.Ad(b),c.share()):new hj({Ea:a.Ea,gb:a.gb,dc:a.oh,jc:a.yh,Oa:a.Oa,kc:a.kc,xb:a.xb},b)}
function pj(a){function b(v,x,y,F){Promise.resolve().then(function(){k.done();h.sc();h.dispose();g.resolve({Md:v,af:x,Ah:y,kh:F})})}
function c(v,x,y,F){if(!d.logger.da){var I="k";x?I="h":y&&(I="u");I!=="k"?F!==0&&(d.logger.qb(I),d.logger.Kb(I,v)):d.i<=0?(d.logger.qb(I),d.logger.Kb(I,v),d.i=Math.floor(Math.random()*200)):d.i--}}
G.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new lj;if("challenge"in a&&jj(a.challenge)){var e=zf(a.challenge,4);var f=zf(a.challenge,5);zf(a.challenge,7)&&(this.h=mj(zf(a.challenge,7)))}else e=a.program,f=a.je;this.addOnDisposeCallback(function(){var v,x,y;return A(function(F){if(F.h==1)return F.yield(d.j,2);v=F.i;x=v.af;(y=x)==null||y();F.h=0})});
this.logger=oj(a.ze||{},this.h,a.lh);vc(this,this.logger);var g=new nj;this.j=g.promise;this.logger.qb("t");var h=this.logger.share(),k=new Yi(h,"t");if(!C[f])throw this.logger.Da(25),Error("EGOU");if(!C[f].a)throw this.logger.Da(26),Error("ELIU");try{var l=C[f].a;f=[];var m=[];if(sc(uf(this.h,kj,7))){for(var n=nc(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=rc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2)}this.o=z(l(e,b,!0,a.Lh,c,[f,m],zf(this.h,5))).next().value;this.Ze=g.promise.then(function(){})}catch(v){throw this.logger.Da(28),
v;
}}
w(pj,G);pj.prototype.snapshot=function(a){if(this.da)throw Error("Already disposed");this.logger.qb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Md;return new Promise(function(e){var f=new Yi(b,"n");d(function(g){f.done();b.Gc(g.length);b.sc();b.dispose();e(g)},[a.bd,
a.bf,a.pf,a.cf])})})};
pj.prototype.xd=function(a){var b=this;if(this.da)throw Error("Already disposed");this.logger.qb("n");var c=aj(this.logger,function(){return b.o([a.bd,a.bf,a.pf,a.cf])});
this.logger.Gc(c.length);this.logger.sc();return c};var qj=window;function rj(a){var b=sj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function tj(){var a=[];rj(function(b){a.push(b)});
return a}
var sj={qf:"allow-forms",rf:"allow-modals",sf:"allow-orientation-lock",tf:"allow-pointer-lock",uf:"allow-popups",vf:"allow-popups-to-escape-sandbox",wf:"allow-presentation",xf:"allow-same-origin",yf:"allow-scripts",zf:"allow-top-navigation",Af:"allow-top-navigation-by-user-activation"},uj=li(function(){return tj()});
function vj(){var a=wj(),b={};Nb(uj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function wj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function xj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var yj=(new Date).getTime();function zj(a){Wh.call(this);var b=this;this.B=this.j=0;this.Ba=a!=null?a:{oa:function(e,f){return setTimeout(e,f)},
pa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Aj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||Bj(this)}
w(zj,Wh);function Cj(){var a=Dj;zj.h||(zj.h=new zj(a));return zj.h}
zj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ba.pa(this.B);delete zj.h};
zj.prototype.va=function(){return this.i};
function Bj(a){a.B=a.Ba.oa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(Aj(a),3):c.yield(Aj(a),3);Bj(a);c.h=0})},3E4)}
function Aj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ba.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.R=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Ba.pa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Xh(a,"networkstatus-online"):Xh(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.F(3)}})})}
;function Ej(){this.data=[];this.h=-1}
Ej.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ej.prototype.get=function(a){return!!this.data[a]};
function Fj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Gj(){this.blockSize=-1}
;function Hj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
Za(Hj,Gj);Hj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Ij(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Hj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)Ij(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ij(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ij(this,e);f=0;break}}this.i=f;this.o+=b}};
Hj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;Ij(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Jj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Kj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Lj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Jj(a).match(/\S+/g)||[],b=Mb(a,b)>=0);return b}
function Mj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Lj(a,"inverted-hdpi")&&Kj(a,Array.prototype.filter.call(a.classList?a.classList:Jj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Nj(){}
Nj.prototype.next=function(){return Oj};
var Oj={done:!0,value:void 0};Nj.prototype.jb=function(){return this};function Pj(a){if(a instanceof Qj||a instanceof Rj||a instanceof Sj)return a;if(typeof a.next=="function")return new Qj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Qj(function(){return a[Symbol.iterator]()});
if(typeof a.jb=="function")return new Qj(function(){return a.jb()});
throw Error("Not an iterator or iterable.");}
function Qj(a){this.h=a}
Qj.prototype.jb=function(){return new Rj(this.h())};
Qj.prototype[Symbol.iterator]=function(){return new Sj(this.h())};
Qj.prototype.i=function(){return new Sj(this.h())};
function Rj(a){this.h=a}
w(Rj,Nj);Rj.prototype.next=function(){return this.h.next()};
Rj.prototype[Symbol.iterator]=function(){return new Sj(this.h)};
Rj.prototype.i=function(){return new Sj(this.h)};
function Sj(a){Qj.call(this,function(){return a});
this.j=a}
w(Sj,Qj);Sj.prototype.next=function(){return this.j.next()};function M(a){G.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
Za(M,G);r=M.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Sb(a)}return!1};
r.Sb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Sb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.ib=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],Tj(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.da;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Sb(c)}}return f!=0}return!1};
function Tj(a,b,c){hi(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Sb,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.aa=function(){M.za.aa.call(this);this.clear();this.j.length=0};function Uj(a){this.h=a}
Uj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Ii).serialize(b))};
Uj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Uj.prototype.remove=function(a){this.h.remove(a)};function Vj(a){this.h=a}
Za(Vj,Uj);function Wj(a){this.data=a}
function Xj(a){return a===void 0||a instanceof Wj?a:new Wj(a)}
Vj.prototype.set=function(a,b){Vj.za.set.call(this,a,Xj(b))};
Vj.prototype.i=function(a){a=Vj.za.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Vj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Yj(a){this.h=a}
Za(Yj,Vj);Yj.prototype.set=function(a,b,c){if(b=Xj(b)){if(c){if(c<Ya()){Yj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ya()}Yj.za.set.call(this,a,b)};
Yj.prototype.i=function(a){var b=Yj.za.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ya()||c&&c>Ya())Yj.prototype.remove.call(this,a);else return b}};function Zj(){}
;function ak(){}
Za(ak,Zj);ak.prototype[Symbol.iterator]=function(){return Pj(this.jb(!0)).i()};
ak.prototype.clear=function(){var a=Array.from(this);a=z(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function bk(a){this.h=a;this.i=null}
Za(bk,ak);r=bk.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){ck(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){ck(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){ck(this);this.h.removeItem(a)};
r.jb=function(a){ck(this);var b=0,c=this.h,d=new Nj;d.next=function(){if(b>=c.length)return Oj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){ck(this);this.h.clear()};
r.key=function(a){ck(this);return this.h.key(a)};
function ck(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Ic(Error("Storage mechanism: Storage unavailable"))}
;function dk(){var a=null;try{a=C.localStorage||null}catch(b){}bk.call(this,a)}
Za(dk,bk);function ek(a,b){this.i=a;this.h=b+"::"}
Za(ek,ak);ek.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ek.prototype.get=function(a){return this.i.get(this.h+a)};
ek.prototype.remove=function(a){this.i.remove(this.h+a)};
ek.prototype.jb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Nj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},fk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var gk={kb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ed:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},hk={kb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ed:function(a){return[].concat.apply([],a)}};
N.Ye=function(){fk?(N.hb=Uint8Array,N.Ga=Uint16Array,N.Hd=Int32Array,N.assign(N,gk)):(N.hb=Array,N.Ga=Array,N.Hd=Array,N.assign(N,hk))};
N.Ye();var ik=!0;try{new Uint8Array(1)}catch(a){ik=!1}
function jk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.hb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var kk={};kk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var lk={},mk,nk=[],ok=0;ok<256;ok++){mk=ok;for(var pk=0;pk<8;pk++)mk=mk&1?3988292384^mk>>>1:mk>>>1;nk[ok]=mk}lk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^nk[(a^b[d])&255];return a^-1};var qk={};qk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function rk(a){for(var b=a.length;--b>=0;)a[b]=0}
var sk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],tk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],uk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],vk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],wk=Array(576);rk(wk);var xk=Array(60);rk(xk);var yk=Array(512);rk(yk);var zk=Array(256);rk(zk);var Ak=Array(29);rk(Ak);var Bk=Array(30);rk(Bk);function Ck(a,b,c,d,e){this.yd=a;this.de=b;this.ce=c;this.Wd=d;this.ye=e;this.jd=a&&a.length}
var Dk,Ek,Fk;function Gk(a,b){this.dd=a;this.sb=0;this.Ta=b}
function Hk(a,b){a.X[a.pending++]=b&255;a.X[a.pending++]=b>>>8&255}
function Ik(a,b,c){a.ha>16-c?(a.na|=b<<a.ha&65535,Hk(a,a.na),a.na=b>>16-a.ha,a.ha+=c-16):(a.na|=b<<a.ha&65535,a.ha+=c)}
function Jk(a,b,c){Ik(a,c[b*2],c[b*2+1])}
function Kk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Lk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Kk(d[e]++,e))}
function Mk(a){var b;for(b=0;b<286;b++)a.qa[b*2]=0;for(b=0;b<30;b++)a.Xa[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.qa[512]=1;a.Ma=a.wb=0;a.xa=a.matches=0}
function Nk(a){a.ha>8?Hk(a,a.na):a.ha>0&&(a.X[a.pending++]=a.na);a.na=0;a.ha=0}
function Ok(a,b,c){Nk(a);Hk(a,c);Hk(a,~c);N.kb(a.X,a.window,b,c,a.pending);a.pending+=c}
function Pk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Qk(a,b,c){for(var d=a.ba[c],e=c<<1;e<=a.Ka;){e<a.Ka&&Pk(b,a.ba[e+1],a.ba[e],a.depth)&&e++;if(Pk(b,d,a.ba[e],a.depth))break;a.ba[c]=a.ba[e];c=e;e<<=1}a.ba[c]=d}
function Rk(a,b,c){var d=0;if(a.xa!==0){do{var e=a.X[a.Eb+d*2]<<8|a.X[a.Eb+d*2+1];var f=a.X[a.Fc+d];d++;if(e===0)Jk(a,f,b);else{var g=zk[f];Jk(a,g+256+1,b);var h=sk[g];h!==0&&(f-=Ak[g],Ik(a,f,h));e--;g=e<256?yk[e]:yk[256+(e>>>7)];Jk(a,g,c);h=tk[g];h!==0&&(e-=Bk[g],Ik(a,e,h))}}while(d<a.xa)}Jk(a,256,b)}
function Sk(a,b){var c=b.dd,d=b.Ta.yd,e=b.Ta.jd,f=b.Ta.Wd,g,h=-1;a.Ka=0;a.nb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ba[++a.Ka]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ka<2;){var k=a.ba[++a.Ka]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ma--;e&&(a.wb-=d[k*2+1])}b.sb=h;for(g=a.Ka>>1;g>=1;g--)Qk(a,c,g);k=f;do g=a.ba[1],a.ba[1]=a.ba[a.Ka--],Qk(a,c,1),d=a.ba[1],a.ba[--a.nb]=g,a.ba[--a.nb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ba[1]=k++,Qk(a,c,1);while(a.Ka>=
2);a.ba[--a.nb]=a.ba[1];g=b.dd;k=b.sb;d=b.Ta.yd;e=b.Ta.jd;f=b.Ta.de;var l=b.Ta.ce,m=b.Ta.ye,n,p=0;for(n=0;n<=15;n++)a.Ha[n]=0;g[a.ba[a.nb]*2+1]=0;for(b=a.nb+1;b<573;b++){var t=a.ba[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ha[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Ma+=x*(n+v);e&&(a.wb+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ha[n]===0;)n--;a.Ha[n]--;a.Ha[n+1]+=2;a.Ha[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ha[n];t!==0;)d=a.ba[--b],d>k||(g[d*2+1]!==n&&(a.Ma+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Lk(c,h,a.Ha)}
function Tk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Uk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Jk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Jk(a,l,a.ja),g--),Jk(a,16,a.ja),Ik(a,g-3,2)):g<=10?(Jk(a,17,a.ja),Ik(a,g-3,3)):(Jk(a,18,a.ja),Ik(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Vk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.qa[c*2]!==0)return 0;if(a.qa[18]!==0||a.qa[20]!==0||a.qa[26]!==0)return 1;for(c=32;c<256;c++)if(a.qa[c*2]!==0)return 1;return 0}
var Wk=!1;function Xk(a,b,c){a.X[a.Eb+a.xa*2]=b>>>8&255;a.X[a.Eb+a.xa*2+1]=b&255;a.X[a.Fc+a.xa]=c&255;a.xa++;b===0?a.qa[c*2]++:(a.matches++,b--,a.qa[(zk[c]+256+1)*2]++,a.Xa[(b<256?yk[b]:yk[256+(b>>>7)])*2]++);return a.xa===a.Jb-1}
;function Yk(a,b){a.msg=qk[b];return b}
function Zk(a){for(var b=a.length;--b>=0;)a[b]=0}
function $k(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.kb(a.output,b.X,b.Mb,c,a.tb),a.tb+=c,b.Mb+=c,a.Sc+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Mb=0))}
function al(a,b){var c=a.ta>=0?a.ta:-1,d=a.v-a.ta,e=0;if(a.level>0){a.M.Ac===2&&(a.M.Ac=Vk(a));Sk(a,a.ic);Sk(a,a.ac);Tk(a,a.qa,a.ic.sb);Tk(a,a.Xa,a.ac.sb);Sk(a,a.Xc);for(e=18;e>=3&&a.ja[vk[e]*2+1]===0;e--);a.Ma+=3*(e+1)+5+5+4;var f=a.Ma+3+7>>>3;var g=a.wb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Ik(a,b?1:0,3),Ok(a,c,d);else if(a.strategy===4||g===f)Ik(a,2+(b?1:0),3),Rk(a,wk,xk);else{Ik(a,4+(b?1:0),3);c=a.ic.sb+1;d=a.ac.sb+1;e+=1;Ik(a,c-257,5);Ik(a,d-1,5);Ik(a,e-4,4);for(f=0;f<e;f++)Ik(a,
a.ja[vk[f]*2+1],3);Uk(a,a.qa,c-1);Uk(a,a.Xa,d-1);Rk(a,a.qa,a.Xa)}Mk(a);b&&Nk(a);a.ta=a.v;$k(a.M)}
function O(a,b){a.X[a.pending++]=b}
function bl(a,b){a.X[a.pending++]=b>>>8&255;a.X[a.pending++]=b&255}
function cl(a,b){var c=a.md,d=a.v,e=a.wa,f=a.nd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.Ua,l=a.Fa,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.hd&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.rb=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function dl(a){var b=a.la,c;do{var d=a.Fd-a.A-a.v;if(a.v>=b+(b-262)){N.kb(a.window,a.window,b,b,0);a.rb-=b;a.v-=b;a.ta-=b;var e=c=a.hc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.ma===0)break;e=a.M;c=a.window;f=a.v+a.A;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,N.kb(c,e.input,e.cb,g,f),e.state.wrap===1?e.J=kk(e.J,c,g,f):e.state.wrap===2&&(e.J=lk(e.J,c,g,f)),e.cb+=g,e.fb+=g,c=g);a.A+=c;if(a.A+a.ra>=3)for(d=a.v-a.ra,a.P=a.window[d],
a.P=(a.P<<a.Ja^a.window[d+1])&a.Ia;a.ra&&!(a.P=(a.P<<a.Ja^a.window[d+3-1])&a.Ia,a.Fa[d&a.Ua]=a.head[a.P],a.head[a.P]=d,d++,a.ra--,a.A+a.ra<3););}while(a.A<262&&a.M.ma!==0)}
function el(a,b){for(var c;;){if(a.A<262){dl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,c=a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=cl(a,c));if(a.T>=3)if(c=Xk(a,a.v-a.rb,a.T-3),a.A-=a.T,a.T<=a.Hc&&a.A>=3){a.T--;do a.v++,a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.P=a.window[a.v],a.P=(a.P<<a.Ja^a.window[a.v+1])&a.Ia;else c=Xk(a,0,
a.window[a.v]),a.A--,a.v++;if(c&&(al(a,!1),a.M.S===0))return 1}a.ra=a.v<2?a.v:2;return b===4?(al(a,!0),a.M.S===0?3:4):a.xa&&(al(a,!1),a.M.S===0)?1:2}
function fl(a,b){for(var c,d;;){if(a.A<262){dl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,c=a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);a.wa=a.T;a.qd=a.rb;a.T=2;c!==0&&a.wa<a.Hc&&a.v-c<=a.la-262&&(a.T=cl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.rb>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.A-3;c=Xk(a,a.v-1-a.qd,a.wa-3);a.A-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.P=(a.P<<a.Ja^a.window[a.v+3-1])&a.Ia,a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);
while(--a.wa!==0);a.ab=0;a.T=2;a.v++;if(c&&(al(a,!1),a.M.S===0))return 1}else if(a.ab){if((c=Xk(a,0,a.window[a.v-1]))&&al(a,!1),a.v++,a.A--,a.M.S===0)return 1}else a.ab=1,a.v++,a.A--}a.ab&&(Xk(a,0,a.window[a.v-1]),a.ab=0);a.ra=a.v<2?a.v:2;return b===4?(al(a,!0),a.M.S===0?3:4):a.xa&&(al(a,!1),a.M.S===0)?1:2}
function gl(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){dl(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.T=0;if(a.A>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.A&&(a.T=a.A)}a.T>=3?(c=Xk(a,1,a.T-3),a.A-=a.T,a.v+=a.T,a.T=0):(c=Xk(a,0,a.window[a.v]),a.A--,a.v++);if(c&&(al(a,!1),a.M.S===0))return 1}a.ra=0;return b===4?(al(a,!0),a.M.S===0?3:4):
a.xa&&(al(a,!1),a.M.S===0)?1:2}
function hl(a,b){for(var c;;){if(a.A===0&&(dl(a),a.A===0)){if(b===0)return 1;break}a.T=0;c=Xk(a,0,a.window[a.v]);a.A--;a.v++;if(c&&(al(a,!1),a.M.S===0))return 1}a.ra=0;return b===4?(al(a,!0),a.M.S===0?3:4):a.xa&&(al(a,!1),a.M.S===0)?1:2}
function il(a,b,c,d,e){this.ke=a;this.xe=b;this.Ae=c;this.we=d;this.ee=e}
var jl;jl=[new il(0,0,0,0,function(a,b){var c=65535;for(c>a.ya-5&&(c=a.ya-5);;){if(a.A<=1){dl(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.v+=a.A;a.A=0;var d=a.ta+c;if(a.v===0||a.v>=d)if(a.A=a.v-d,a.v=d,al(a,!1),a.M.S===0)return 1;if(a.v-a.ta>=a.la-262&&(al(a,!1),a.M.S===0))return 1}a.ra=0;if(b===4)return al(a,!0),a.M.S===0?3:4;a.v>a.ta&&al(a,!1);return 1}),
new il(4,4,8,4,el),new il(4,5,16,8,el),new il(4,6,32,32,el),new il(4,4,16,16,fl),new il(8,16,32,32,fl),new il(8,16,128,128,fl),new il(8,32,128,256,fl),new il(32,128,258,1024,fl),new il(32,258,258,4096,fl)];
function kl(){this.M=null;this.status=0;this.X=null;this.wrap=this.pending=this.Mb=this.ya=0;this.I=null;this.Aa=0;this.method=8;this.pb=-1;this.Ua=this.Uc=this.la=0;this.window=null;this.Fd=0;this.head=this.Fa=null;this.nd=this.hd=this.strategy=this.level=this.Hc=this.md=this.wa=this.A=this.rb=this.v=this.ab=this.qd=this.T=this.ta=this.Ja=this.Ia=this.Dc=this.hc=this.P=0;this.qa=new N.Ga(1146);this.Xa=new N.Ga(122);this.ja=new N.Ga(78);Zk(this.qa);Zk(this.Xa);Zk(this.ja);this.Xc=this.ac=this.ic=
null;this.Ha=new N.Ga(16);this.ba=new N.Ga(573);Zk(this.ba);this.nb=this.Ka=0;this.depth=new N.Ga(573);Zk(this.depth);this.ha=this.na=this.ra=this.matches=this.wb=this.Ma=this.Eb=this.xa=this.Jb=this.Fc=0}
function ll(a,b){if(!a||!a.state||b>5||b<0)return a?Yk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return Yk(a,a.S===0?-5:-2);c.M=a;var d=c.pb;c.pb=b;if(c.status===42)if(c.wrap===2)a.J=0,O(c,31),O(c,139),O(c,8),c.I?(O(c,(c.I.text?1:0)+(c.I.Pa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),O(c,c.I.time&255),O(c,c.I.time>>8&255),O(c,c.I.time>>16&255),O(c,c.I.time>>24&255),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(O(c,c.I.extra.length&255),O(c,c.I.extra.length>>8&255)),c.I.Pa&&(a.J=lk(a.J,c.X,c.pending,0)),c.Aa=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;bl(c,e+(31-e%31));c.v!==0&&(bl(c,a.J>>>16),bl(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Aa<(c.I.extra.length&65535)&&(c.pending!==c.ya||
(c.I.Pa&&c.pending>e&&(a.J=lk(a.J,c.X,c.pending-e,e)),$k(a),e=c.pending,c.pending!==c.ya));)O(c,c.I.extra[c.Aa]&255),c.Aa++;c.I.Pa&&c.pending>e&&(a.J=lk(a.J,c.X,c.pending-e,e));c.Aa===c.I.extra.length&&(c.Aa=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.ya&&(c.I.Pa&&c.pending>e&&(a.J=lk(a.J,c.X,c.pending-e,e)),$k(a),e=c.pending,c.pending===c.ya)){var f=1;break}f=c.Aa<c.I.name.length?c.I.name.charCodeAt(c.Aa++)&255:0;O(c,f)}while(f!==0);c.I.Pa&&c.pending>
e&&(a.J=lk(a.J,c.X,c.pending-e,e));f===0&&(c.Aa=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.ya&&(c.I.Pa&&c.pending>e&&(a.J=lk(a.J,c.X,c.pending-e,e)),$k(a),e=c.pending,c.pending===c.ya)){f=1;break}f=c.Aa<c.I.comment.length?c.I.comment.charCodeAt(c.Aa++)&255:0;O(c,f)}while(f!==0);c.I.Pa&&c.pending>e&&(a.J=lk(a.J,c.X,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Pa?(c.pending+2>c.ya&&$k(a),c.pending+2<=c.ya&&(O(c,a.J&
255),O(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if($k(a),a.S===0)return c.pb=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Yk(a,-5);if(c.status===666&&a.ma!==0)return Yk(a,-5);if(a.ma!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?hl(c,b):c.strategy===3?gl(c,b):jl[c.level].ee(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.pb=-1),0;if(d===2&&(b===1?(Ik(c,2,3),Jk(c,256,wk),c.ha===16?(Hk(c,c.na),c.na=0,c.ha=0):c.ha>=8&&
(c.X[c.pending++]=c.na&255,c.na>>=8,c.ha-=8)):b!==5&&(Ik(c,0,3),Ok(c,0,0),b===3&&(Zk(c.head),c.A===0&&(c.v=0,c.ta=0,c.ra=0))),$k(a),a.S===0))return c.pb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(O(c,a.J&255),O(c,a.J>>8&255),O(c,a.J>>16&255),O(c,a.J>>24&255),O(c,a.fb&255),O(c,a.fb>>8&255),O(c,a.fb>>16&255),O(c,a.fb>>24&255)):(bl(c,a.J>>>16),bl(c,a.J&65535));$k(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var ml={};ml=function(){this.input=null;this.fb=this.ma=this.cb=0;this.output=null;this.Sc=this.S=this.tb=0;this.msg="";this.state=null;this.Ac=2;this.J=0};var nl=Object.prototype.toString;
function ol(a){if(!(this instanceof ol))return new ol(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new ml;this.M.S=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Yk(b,-2);else{e===8&&(e=9);var k=new kl;b.state=k;k.M=b;k.wrap=h;k.I=null;k.Uc=e;k.la=1<<k.Uc;k.Ua=k.la-1;k.Dc=f+7;k.hc=1<<k.Dc;k.Ia=k.hc-1;k.Ja=~~((k.Dc+3-1)/3);k.window=new N.hb(k.la*2);k.head=new N.Ga(k.hc);k.Fa=new N.Ga(k.la);k.Jb=1<<f+6;k.ya=k.Jb*4;k.X=new N.hb(k.ya);k.Eb=1*k.Jb;k.Fc=3*k.Jb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.fb=b.Sc=0;b.Ac=2;c=b.state;c.pending=0;c.Mb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.pb=0;if(!Wk){d=Array(16);for(f=g=0;f<28;f++)for(Ak[f]=g,e=0;e<1<<sk[f];e++)zk[g++]=f;zk[g-1]=f;for(f=g=0;f<16;f++)for(Bk[f]=g,e=0;e<1<<tk[f];e++)yk[g++]=f;for(g>>=7;f<30;f++)for(Bk[f]=g<<7,e=0;e<1<<tk[f]-7;e++)yk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)wk[e*2+1]=8,e++,d[8]++;for(;e<=255;)wk[e*2+1]=9,e++,d[9]++;for(;e<=279;)wk[e*2+1]=7,e++,d[7]++;for(;e<=287;)wk[e*2+1]=8,e++,d[8]++;Lk(wk,287,d);for(e=0;e<30;e++)xk[e*2+1]=5,xk[e*2]=Kk(e,5);Dk=new Ck(wk,sk,257,286,15);Ek=new Ck(xk,
tk,0,30,15);Fk=new Ck([],uk,0,19,7);Wk=!0}c.ic=new Gk(c.qa,Dk);c.ac=new Gk(c.Xa,Ek);c.Xc=new Gk(c.ja,Fk);c.na=0;c.ha=0;Mk(c);c=0}else c=Yk(b,-2);c===0&&(b=b.state,b.Fd=2*b.la,Zk(b.head),b.Hc=jl[b.level].xe,b.hd=jl[b.level].ke,b.nd=jl[b.level].Ae,b.md=jl[b.level].we,b.v=0,b.ta=0,b.A=0,b.ra=0,b.T=b.wa=2,b.ab=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(qk[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=jk(a.dictionary):
nl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.J=kk(a.J,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(Zk(l.head),l.v=0,l.ta=0,l.ra=0),c=new N.hb(l.la),N.kb(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.ma;d=a.cb;e=a.input;a.ma=g;a.cb=0;a.input=f;for(dl(l);l.A>=3;){f=l.v;g=l.A-2;do l.P=(l.P<<l.Ja^l.window[f+3-1])&l.Ia,l.Fa[f&l.Ua]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.A=2;dl(l)}l.v+=l.A;l.ta=l.v;l.ra=l.A;l.A=0;l.T=l.wa=2;l.ab=0;a.cb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(qk[b]);this.fh=!0}}
ol.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=jk(a):nl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.cb=0;c.ma=c.input.length;do{c.S===0&&(c.output=new N.hb(d),c.tb=0,c.S=d);a=ll(c,e);if(a!==1&&a!==0)return pl(this,a),this.ended=!0,!1;if(c.S===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Rc(c.output,c.tb);b=f;f=f.length;if(f<65537&&(b.subarray&&ik||!b.subarray))b=
String.fromCharCode.apply(null,N.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Rc(c.output,c.tb),this.chunks.push(b)}while((c.ma>0||c.S===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Yk(c,-2):(c.state=null,a=d===113?Yk(c,-3):0)):a=-2,pl(this,a),this.ended=!0,a===0;e===2&&(pl(this,0),c.S=0);return!0};
function pl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.ed(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function ql(a,b){b=b||{};b.gzip=!0;b=new ol(b);b.push(a,!0);if(b.err)throw b.msg||qk[b.err];return b.result}
;function rl(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=lb(a):b=null;return b}
;function sl(a){return lb(a===null?"null":a===void 0?"undefined":a)}
;function tl(a){this.name=a}
;var ul=new tl("rawColdConfigGroup");var vl=new tl("rawHotConfigGroup");function wl(a){this.G=J(a)}
w(wl,L);function xl(a){this.G=J(a)}
w(xl,L);xl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new sd(a,rd):ud||(ud=new sd(null,rd));else if(a.constructor!==sd)if(qd(a))a=a.length?new sd(new Uint8Array(a),rd):ud||(ud=new sd(null,rd));else throw Error();return K(this,1,a)};var yl=new tl("continuationCommand");var zl=new tl("webCommandMetadata");var Al=new tl("signalServiceEndpoint");var Bl={Gf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Df:"EMBEDDED_PLAYER_MODE_DEFAULT",Ff:"EMBEDDED_PLAYER_MODE_PFP",Ef:"EMBEDDED_PLAYER_MODE_PFL"};var Cl=new tl("feedbackEndpoint");var Zd={Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Jf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED"};var Dl=new tl("shareEndpoint"),El=new tl("shareEntityEndpoint"),Fl=new tl("shareEntityServiceEndpoint"),Gl=new tl("webPlayerShareEntityServiceEndpoint");var Hl=new tl("playlistEditEndpoint");var Il=new tl("modifyChannelNotificationPreferenceEndpoint");var Jl=new tl("unsubscribeEndpoint");var Kl=new tl("subscribeEndpoint");function Ll(){var a=Ml;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Nl(a){D("yt.ads.biscotti.lastId_",a)}
;function Ol(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Pl=C.window,Ql,Rl,Sl=(Pl==null?void 0:(Ql=Pl.yt)==null?void 0:Ql.config_)||(Pl==null?void 0:(Rl=Pl.ytcfg)==null?void 0:Rl.data_)||{};D("yt.config_",Sl);function Tl(){Ol(Sl,arguments)}
function P(a,b){return a in Sl?Sl[a]:b}
function Ul(a){var b=Sl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Vl=[];function Wl(a){Vl.forEach(function(b){return b(a)})}
function Xl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Yl(b)}}:a}
function Yl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Tl("ERRORS",b));Wl(a)}
function Zl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Tl("ERRORS",f))}
;var $l=/^[\w.]*$/,am={q:!0,search_query:!0};function bm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=cm(f[0]||""),h=cm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Tb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(bm);l.args=[{key:m,value:f[1],query:a,method:dm===n?"unchanged":n}];am.hasOwnProperty(m)||Zl(l)}}return c}
var dm=String(bm);function em(a){var b=[];rg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Nb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function fm(a){a.charAt(0)==="?"&&(a=a.substring(1));return bm(a,"&")}
function gm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),fm(a.length>1?a[1]:a[0])):{}}
function hm(a,b){return im(a,b||{},!0)}
function im(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=fm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return ic(a,e)+d}
function jm(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)===d&&(Number(bc(4,b))||null)===(Number(bc(4,a))||null):!0;return a}
function cm(a){return a&&a.match($l)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function km(a){var b=lm;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=yj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?qj:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=qj.screen)==null?void 0:k.height;var l;e.u_w=(l=qj.screen)==null?void 0:l.width;var m;e.u_ah=(m=qj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=qj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=qj.screen)==null?void 0:p.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Ma){}try{var x=h.outerWidth;var y=h.outerHeight}catch(Ma){}try{var F=h.innerWidth;var I=h.innerHeight}catch(Ma){}try{var V=h.screenLeft;var ia=h.screenTop}catch(Ma){}try{F=h.innerWidth,I=h.innerHeight}catch(Ma){}try{var Ja=h.screen.availWidth;var cb=h.screen.availTop}catch(Ma){}t=[V,ia,t,v,Ja,cb,x,y,F,I];try{var aa=(b.h.top||window).document,X=aa.compatMode==
"CSS1Compat"?aa.documentElement:aa.body;var na=(new qg(X.clientWidth,X.clientHeight)).round()}catch(Ma){na=new qg(-12245933,-12245933)}aa=na;na={};var Na=Na===void 0?C:Na;X=new Ej;"SVGElement"in Na&&"createElementNS"in Na.document&&X.set(0);v=vj();v["allow-top-navigation-by-user-activation"]&&X.set(1);v["allow-popups-to-escape-sandbox"]&&X.set(2);Na.crypto&&Na.crypto.subtle&&X.set(3);"TextDecoder"in Na&&"TextEncoder"in Na&&X.set(4);Na=Fj(X);na.bc=Na;na.bih=aa.height;na.biw=aa.width;na.brdim=t.join();
b=b.i;b=(na.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!qj.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var lm=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return em(km(a))});Ya();navigator.userAgent.indexOf(" (CrKey ");var mm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function nm(){if(!mm)return null;var a=mm();return"open"in a?a:null}
function om(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function pm(a,b){typeof a==="function"&&(a=Xl(a));return window.setTimeout(a,b)}
;var qm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ra(qm),["client_dev_set_cookie"]);function R(a){a=rm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function sm(a,b){a=rm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function rm(a){return P("EXPERIMENT_FLAGS",{})[a]}
function tm(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=z(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=z(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var um={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},wm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ra(qm)),xm=!1;function ym(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&Xl(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=nm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=zm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Am(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Zl(n)}}l.send(d);return l}
function Am(a,b){b=b===void 0?{}:b;var c=jm(a),d=P("INNERTUBE_CLIENT_NAME"),e=R("web_ajax_ignore_global_headers_if_set"),f;for(f in um){var g=P(um[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=P("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(cc(a)?!1:!0))){k=a;var l;if(l=R("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=cc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=ac(bc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&cc(a)||(b["X-YouTube-Ad-Signals"]=em(km()));return b}
function Bm(a,b){b.method="POST";b.postParams||(b.postParams={});return Cm(a,b)}
function Cm(a,b){var c=b.format||"JSON";a=Dm(a,b);var d=Em(a,b),e=!1,f=Fm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=om(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Gm(a,c,k,b.convertToSafeHtml);l&&(l=Hm(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=pm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Dm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=hm(a,b);return a}
function Em(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=fm(e),Bg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):hc(e));f=e||f&&!ug(f);!xm&&f&&b.method!=="POST"&&(xm=!0,Yl(Error("AJAX request with postData should use POST")));return e}
function Gm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Zl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Im(a):null)e={},Nb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Jm(g)})}d&&Km(e);
return e}
function Km(a){if(Qa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=jb();d=new Cb(e?e.createHTML(d):d);a[c]=d}else Km(a[b])}}
function Hm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Im(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Jm(a){var b="";Nb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function zm(a){var b=window.location.search,c=cc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&jm(a)&&(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=fm(b),f={};Nb(wm,function(g){e[g]&&(f[g]=e[g])});
return im(a,f||{},!1)}
var Fm=ym;var Lm=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Nm={Sa:[],Na:[{callback:Mm,weight:500}]};function Mm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Om(){this.Na=[];this.Sa=[]}
var Pm;function Qm(){if(!Pm){var a=Pm=new Om;a.Sa.length=0;a.Na.length=0;Nm.Sa&&a.Sa.push.apply(a.Sa,Nm.Sa);Nm.Na&&a.Na.push.apply(a.Na,Nm.Na)}return Pm}
;var Rm=new M;function Sm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Tm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Tm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Tm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Tm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Um(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Vm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Sm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Vm(f+".ve",g,h,k):0;d+=f;d+=Vm(e,a[e],b,c);if(d>500)break}}else c[b]=Wm(a),d+=c[b].length;else c[b]=Wm(a),d+=c[b].length;return d}
function Vm(a,b,c,d){c+="."+a;a=Wm(b);d[c]=a;return c.length+a.length}
function Wm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Xm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Ym(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Zm(){this.ef=!0}
function $m(){Zm.h||(Zm.h=new Zm);return Zm.h}
function an(a,b){a={};var c=[];"USER_SESSION_ID"in Sl&&c.push({key:"u",value:P("USER_SESSION_ID")});if(c=jg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Sl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Sl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID"));return a}
;var bn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function cn(a,b,c,d,e){gg.set(""+a,b,{Lb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function dn(a){return gg.get(""+a,void 0)}
function en(a,b,c){gg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function fn(){if(R("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!gg.isEnabled())return!1;if(gg.h.cookie)return!0;R("embeds_web_enable_cookie_detection_fix")?gg.set("TESTCOOKIESENABLED","1",{Lb:60,Me:"none",secure:!0}):gg.set("TESTCOOKIESENABLED","1",{Lb:60});if(gg.get("TESTCOOKIESENABLED")!=="1")return!1;gg.remove("TESTCOOKIESENABLED");return!0}
;var gn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",gn);function hn(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=dn(this.h);a&&this.parse(a)}
var jn;function kn(){jn||(jn=new hn);return jn}
r=hn.prototype;r.get=function(a,b){ln(a);mn(a);a=gn[a]!==void 0?gn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){ln(a);mn(a);if(b==null)throw Error("ExpectedNotNull");gn[a]=b.toString()};
function nn(a){return!!((on("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){ln(a);mn(a);delete gn[a]};
r.clear=function(){for(var a in gn)delete gn[a]};
function mn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function ln(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function on(a){a=gn[a]!==void 0?gn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(gn[d]=c.toString())}};var pn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},qn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function rn(){var a=C.navigator;return a?a.connection:void 0}
function sn(){var a=rn();if(a){var b=pn[a.type||"unknown"]||"CONN_UNKNOWN";a=pn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function tn(){var a=rn();if(a!=null&&a.effectiveType)return qn.hasOwnProperty(a.effectiveType)?qn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function S(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ra(b))}
w(S,Error);function un(){try{return vn(),!0}catch(a){return!1}}
function vn(a){if(P("DATASYNC_ID")!==void 0)return P("DATASYNC_ID");throw new S("Datasync ID not set",a===void 0?"unknown":a);}
;function wn(){}
function xn(a,b){return Dj.Wa(a,0,b)}
wn.prototype.oa=function(a,b){return this.Wa(a,1,b)};
wn.prototype.Bb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var yn=sm("web_emulated_idle_callback_delay",300),zn=1E3/60-3,An=[8,5,4,3,2,1,0];
function Bn(a){a=a===void 0?{}:a;G.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.R=[];this.U=this.ga=!1;for(var b=z(An),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.yc=a.timeout||1;this.H=zn;this.B=0;this.sa=this.Ce.bind(this);this.xc=this.hf.bind(this);this.zb=this.Ld.bind(this);this.Ab=this.le.bind(this);this.Tb=this.Ge.bind(this);this.Va=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.sa)}
w(Bn,G);r=Bn.prototype;r.Bb=function(a){var b=Ya();Cn(this,a);a=Ya()-b;this.u||(this.H-=a)};
r.Wa=function(a,b,c){++this.Z;if(b===10)return this.Bb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Dn(this)!==this.B&&this.stop(),this.start()));return d};
r.pa=function(a){delete this.j[a]};
function En(a){a.R.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Fn(a){return!a.isHidden()&&a.ia}
function Dn(a){if(a.i[8].length){if(a.U)return 4;if(Fn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Fn(a)?3:2:1;return 0}
r.Da=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Cn(a,b){try{b()}catch(c){a.Da(c)}}
function Gn(a){for(var b=z(An),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.le=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;Hn(this,b);this.ga=!1};
r.hf=function(){Hn(this)};
r.Ld=function(){In(this)};
r.Ge=function(a){this.U=!0;var b=Dn(this);b===4&&b!==this.B&&(this.stop(),this.start());Hn(this,void 0,a);this.U=!1};
r.Ce=function(){this.isHidden()||In(this);this.h&&(this.stop(),this.start())};
function In(a){a.stop();a.u=!0;for(var b=Ya(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Cn(a,e)}Jn(a);a.u=!1;Gn(a)&&a.start();b=Ya()-b;a.H-=b}
function Jn(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Hn(a,b,c){a.U&&a.B===4&&a.h||a.stop();a.u=!0;b=Ya()+(b||a.H);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Da(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Cn(a,f);d=a.ga?0:1;d=a.o>d?a.o:d;if(!(Ya()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Cn(a,c)}while(c&&Ya()<b)}a.u=!1;Jn(a);a.H=zn;Gn(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.B=Dn(this),this.B){case 1:var a=this.Ab;this.h=this.Va?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,yn);break;case 2:this.h=window.setTimeout(this.xc,this.yc);break;case 3:this.h=window.requestAnimationFrame(this.Tb);break;case 4:this.h=window.setTimeout(this.zb,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Va?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.aa=function(){En(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.sa);G.prototype.aa.call(this)};var Kn=E("yt.scheduler.instance.timerIdMap_")||{},Ln=sm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Mn=0,Nn=0;function On(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.da)a=new Bn(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Pn(){Qn();var a=E("ytglobal.schedulerInstanceInstance_");a&&(tc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Qn(){En(On());for(var a in Kn)Kn.hasOwnProperty(a)&&delete Kn[Number(a)]}
function Rn(a,b,c){if(!c)return c=c===void 0,-On().Wa(a,b,c);var d=window.setTimeout(function(){var e=On().Wa(a,b);Kn[d]=e},c);
return d}
function Sn(a){On().Bb(a)}
function Tn(a){var b=On();if(a<0)b.pa(-a);else{var c=Kn[a];c?(b.pa(c),delete Kn[a]):window.clearTimeout(a)}}
function Un(){Vn()}
function Vn(){window.clearTimeout(Mn);On().start()}
function Wn(){On().pause();window.clearTimeout(Mn);Mn=window.setTimeout(Un,Ln)}
function Xn(){window.clearTimeout(Nn);Nn=window.setTimeout(function(){Yn(0)},Ln)}
function Yn(a){Xn();var b=On();b.o=a;b.start()}
function Zn(a){Xn();var b=On();b.o>a&&(b.o=a,b.start())}
function $n(){window.clearTimeout(Nn);var a=On();a.o=0;a.start()}
;function ao(){wn.apply(this,arguments)}
w(ao,wn);function bo(){ao.h||(ao.h=new ao);return ao.h}
ao.prototype.Wa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):pm(a,c||0)};
ao.prototype.pa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
ao.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
ao.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Dj=bo();
R("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Pn),D("yt.scheduler.instance.addJob",Rn),D("yt.scheduler.instance.addImmediateJob",Sn),D("yt.scheduler.instance.cancelJob",Tn),D("yt.scheduler.instance.cancelAllJobs",Qn),D("yt.scheduler.instance.start",Vn),D("yt.scheduler.instance.pause",Wn),D("yt.scheduler.instance.setPriorityThreshold",Yn),D("yt.scheduler.instance.enablePriorityThreshold",Zn),D("yt.scheduler.instance.clearPriorityThreshold",$n),D("yt.scheduler.initialized",
!0));function co(a){var b=new dk;this.h=(a=b.isAvailable()?a?new ek(b,a):b:null)?new Yj(a):null;this.i=document.domain||window.location.hostname}
co.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Ii).serialize(b))}catch(f){return}else e=escape(b);cn(a,e,c,this.i)};
co.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=dn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
co.prototype.remove=function(a){this.h&&this.h.remove(a);en(a,"/",this.i)};var eo=function(){var a;return function(){a||(a=new co("ytidb"));return a}}();
function fo(){var a;return(a=eo())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var go=[],ho,io=!1;function jo(){var a={};for(ho=new ko(a.handleError===void 0?lo:a.handleError,a.logEvent===void 0?mo:a.logEvent);go.length>0;)switch(a=go.shift(),a.type){case "ERROR":ho.Da(a.payload);break;case "EVENT":ho.logEvent(a.eventType,a.payload)}}
function no(a){io||(ho?ho.Da(a):(go.push({type:"ERROR",payload:a}),go.length>10&&go.shift()))}
function oo(a,b){io||(ho?ho.logEvent(a,b):(go.push({type:"EVENT",eventType:a,payload:b}),go.length>10&&go.shift()))}
;function po(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function qo(a){return a.substr(0,a.indexOf(":"))||a}
;var ro=bd||cd;function so(a){var b=Mc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var to={},uo=(to.AUTH_INVALID="No user identifier specified.",to.EXPLICIT_ABORT="Transaction was explicitly aborted.",to.IDB_NOT_SUPPORTED="IndexedDB is not supported.",to.MISSING_INDEX="Index not created.",to.MISSING_OBJECT_STORES="Object stores not created.",to.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",to.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",to.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
to.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",to.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",to.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",to.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",to),vo={},wo=(vo.AUTH_INVALID="ERROR",vo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",vo.EXPLICIT_ABORT="IGNORED",vo.IDB_NOT_SUPPORTED="ERROR",vo.MISSING_INDEX=
"WARNING",vo.MISSING_OBJECT_STORES="ERROR",vo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",vo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",vo.QUOTA_EXCEEDED="WARNING",vo.QUOTA_MAYBE_EXCEEDED="WARNING",vo.UNKNOWN_ABORT="WARNING",vo.INCOMPATIBLE_DB_VERSION="WARNING",vo),xo={},yo=(xo.AUTH_INVALID=!1,xo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,xo.EXPLICIT_ABORT=!1,xo.IDB_NOT_SUPPORTED=!1,xo.MISSING_INDEX=!1,xo.MISSING_OBJECT_STORES=!1,xo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,xo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,xo.QUOTA_EXCEEDED=!1,xo.QUOTA_MAYBE_EXCEEDED=!0,xo.UNKNOWN_ABORT=!0,xo.INCOMPATIBLE_DB_VERSION=!1,xo);function zo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?uo[a]:c;d=d===void 0?wo[a]:d;e=e===void 0?yo[a]:e;S.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,zo.prototype)}
w(zo,S);function Ao(a,b){zo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},uo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ao.prototype)}
w(Ao,zo);function Bo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Bo.prototype)}
w(Bo,Error);var Co=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Do(a,b,c,d){b=qo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof zo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new zo("QUOTA_EXCEEDED",a);if(dd&&e.name==="UnknownError")return new zo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Bo)return new zo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Co.some(function(f){return e.message.includes(f)}))return new zo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new zo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",pd:e.name})];e.level="WARNING";return e}
function Eo(a,b,c){var d=fo();return new zo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Fo(a){if(!a)throw Error();throw a;}
function Go(a){return a}
function Ho(a){this.h=a}
function Io(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=z(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=z(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Io.all=function(a){return new Io(new Ho(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={ob:0};f.ob<a.length;f={ob:f.ob},++f.ob)Io.resolve(a[f.ob]).then(function(g){return function(h){d[g.ob]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Io.resolve=function(a){return new Io(new Ho(function(b,c){a instanceof Io?a.then(b,c):b(a)}))};
Io.reject=function(a){return new Io(new Ho(function(b,c){c(a)}))};
Io.prototype.then=function(a,b){var c=this,d=a!=null?a:Go,e=b!=null?b:Fo;return new Io(new Ho(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Jo(c,c,d,f,g)}),c.i.push(function(){Ko(c,c,e,f,g)})):c.state.status==="FULFILLED"?Jo(c,c,d,f,g):c.state.status==="REJECTED"&&Ko(c,c,e,f,g)}))};
Io.prototype.catch=function(a){return this.then(void 0,a)};
function Jo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Io?Lo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ko(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Io?Lo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Lo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Io?Lo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Mo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function No(a){return new Promise(function(b,c){Mo(a,b,c)})}
function Oo(a){return new Io(new Ho(function(b,c){Mo(a,b,c)}))}
;function Po(a,b){return new Io(new Ho(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Qo=window,T=Qo.ytcsi&&Qo.ytcsi.now?Qo.ytcsi.now:Qo.performance&&Qo.performance.timing&&Qo.performance.now&&Qo.performance.timing.navigationStart?function(){return Qo.performance.timing.navigationStart+Qo.performance.now()}:function(){return(new Date).getTime()};function Ro(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
r=Ro.prototype;r.add=function(a,b,c){return So(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return So(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return So(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function To(a,b,c){a=a.h.createObjectStore(b,c);return new Uo(a)}
r.delete=function(a,b){return So(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return So(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function Vo(a,b,c){return So(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Oo(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function So(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return A(function(y){switch(y.h){case 1:var F={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?F.mode=c:Object.assign(F,c);e=F;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){y.F(4);break}g++;k=Math.round(T());za(y,5);l=a.h.transaction(b,e.mode);F=y.yield;var I=new Wo(l);I=Xo(I,d);return F.call(y,I,7);case 7:return m=y.i,n=Math.round(T()),Yo(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:p=Aa(y);t=Math.round(T());v=Do(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof zo&&!v.h)||g>=f)Yo(a,k,t,g,v,b.join(),e),h=v;y.F(2);break;case 4:return y.return(Promise.reject(h))}})}
function Yo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof zo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&oo("QUOTA_EXCEEDED",{dbName:qo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof zo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),oo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Zo(a,!1,d,f,b,g.tag),no(e)):Zo(a,!0,d,f,b,g.tag)}
function Zo(a,b,c,d,e,f){oo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function Uo(a){this.h=a}
r=Uo.prototype;r.add=function(a,b){return Oo(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return Oo(this.h.clear()).then(function(){})};
function $o(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return Oo(this.h.count(a))};
function ap(a,b){return bp(a,{query:b},function(c){return c.delete().then(function(){return cp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?ap(this,a):Oo(this.h.delete(a))};
r.get=function(a){return Oo(this.h.get(a))};
r.index=function(a){try{return new dp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Bo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function bp(a,b,c){a=a.h.openCursor(b.query,b.direction);return ep(a).then(function(d){return Po(d,c)})}
function Wo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=zo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Xo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return z(d).next().value})}
Wo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new zo("EXPLICIT_ABORT");};
Wo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Uo(a),this.i.set(a,b));return b};
function dp(a){this.h=a}
r=dp.prototype;r.count=function(a){return Oo(this.h.count(a))};
r.delete=function(a){return fp(this,{query:a},function(b){return b.delete().then(function(){return cp(b)})})};
r.get=function(a){return Oo(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function fp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return ep(a).then(function(d){return Po(d,c)})}
function gp(a,b){this.request=a;this.cursor=b}
function ep(a){return Oo(a).then(function(b){return b?new gp(a,b):null})}
function cp(a){a.cursor.continue(void 0);return ep(a.request)}
gp.prototype.delete=function(){return Oo(this.cursor.delete()).then(function(){})};
gp.prototype.getValue=function(){return this.cursor.value};
gp.prototype.update=function(a){return Oo(this.cursor.update(a))};function hp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new Ro(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Od,k=c.blocking,l=c.ff,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&oo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:qo(a)});var v=f(),x=new Wo(g.transaction);
m&&m(v,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){oo("IDB_UNEXPECTEDLY_CLOSED",{dbName:qo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ip(a,b,c){c=c===void 0?{}:c;return hp(a,b,c)}
function jp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Od)&&c.addEventListener("blocked",function(){e()}),g.yield(No(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=Aa(g),Do(f,a,"",-1);})}
;function kp(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
kp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return ip(a,b,c)};
kp.prototype.delete=function(a){a=a===void 0?{}:a;return jp(this.name,a)};
function lp(a,b){return new zo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function mp(a,b){if(!b)throw Eo("openWithToken",qo(a.name));return a.open()}
kp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,F=c.options,I=[],V=z(Object.keys(F.ub)),ia=V.next();!ia.done;ia=V.next()){ia=ia.value;var Ja=F.ub[ia],cb=Ja.He===void 0?Number.MAX_VALUE:Ja.He;!(y.h.version>=Ja.Db)||y.h.version>=cb||y.h.objectStoreNames.contains(ia)||I.push(ia)}k=I;if(k.length===0){x.F(5);break}l=Object.keys(c.options.ub);
m=h.objectStoreNames();if(c.D<sm("ytidb_reopen_db_retries",0))return c.D++,h.close(),no(new zo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<sm("ytidb_remake_db_retries",1))){x.F(6);break}c.o++;return x.yield(c.delete(),7);case 7:return no(new zo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Ao(m,l);case 5:return x.return(h);case 2:n=Aa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.F(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,lp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!R("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Do(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw lp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,ff:b,upgrade:this.options.upgrade};return this.h=d=a()};var np=new kp("YtIdbMeta",{ub:{databases:{Db:1}},upgrade:function(a,b){b(1)&&To(a,"databases",{keyPath:"actualName"})}});
function op(a,b){var c;return A(function(d){if(d.h==1)return d.yield(mp(np,b),2);c=d.i;return d.return(So(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Oo(f.h.put(a,void 0)).then(function(){})})}))})}
function pp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(mp(np,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function qp(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(mp(np,b),2)):e.h!=3?(d=e.i,e.yield(So(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return bp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return cp(g)})}),3)):e.return(c)})}
function rp(a){return qp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function sp(a,b,c){return qp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function tp(a){var b,c;return A(function(d){if(d.h==1)return b=vn("YtIdbMeta hasAnyMeta other"),d.yield(qp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var up,vp=new function(){}(new function(){});
function wp(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=fo();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ro)f=/WebKit\/([0-9]+)/.exec(Mc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Mc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Yc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(op(d,vp),4);case 4:return e.yield(pp("yt-idb-test-do-not-use",vp),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function xp(){if(up!==void 0)return up;io=!0;return up=wp().then(function(a){io=!1;var b;if((b=eo())!=null&&b.h){var c;b={hasSucceededOnce:((c=fo())==null?void 0:c.hasSucceededOnce)||a};var d;(d=eo())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function yp(){return E("ytglobal.idbToken_")||void 0}
function zp(){var a=yp();return a?Promise.resolve(a):xp().then(function(b){(b=b?vp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Ap=0;function Bp(a,b){Ap||(Ap=Dj.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(zp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(sp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(jp(f.actualName),7);case 7:return h.yield(pp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=Aa(h),no(g),d=!1;case 4:Dj.pa(Ap),Ap=0,d&&Bp(a,b),h.h=0}})}))}
function Cp(){var a;return A(function(b){return b.h==1?b.yield(zp(),2):(a=b.i)?b.return(tp(a)):b.return(!1)})}
new nj;function Dp(a){if(!un())throw a=new zo("AUTH_INVALID",{dbName:a}),no(a),a;var b=vn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ep(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(zp(),2);case 2:g=m.i;if(!g)throw h=Eo("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),no(h),h;po(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Dp(a);za(m,3);return m.yield(op(k,g),5);case 5:return m.yield(ip(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),za(m,7),m.yield(pp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:Aa(m);case 8:throw l;}})}
function Fp(a,b,c){c=c===void 0?{}:c;return Ep(a,b,!1,c)}
function Gp(a,b,c){c=c===void 0?{}:c;return Ep(a,b,!0,c)}
function Hp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(zp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();po(a);d=Dp(a);return e.yield(jp(d.actualName,b),3)}return e.yield(pp(d.actualName,c),0)})}
function Ip(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(jp(d.actualName,b),2):e.yield(pp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Jp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(zp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();po("LogsDatabaseV2");return d.yield(rp(b),3)}c=d.i;return d.yield(Ip(c,a,b),0)})}
function Kp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(zp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();po(a);return d.yield(jp(a,b),3)}return d.yield(pp(a,c),0)})}
;function Lp(a,b){kp.call(this,a,b);this.options=b;po(a)}
w(Lp,kp);function Mp(a,b){var c;return function(){c||(c=new Lp(a,b));return c}}
Lp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Gp:Fp)(a,b,Object.assign({},c))};
Lp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Kp:Hp)(this.name,a)};
function Np(a,b){return Mp(a,b)}
;var Op={},Pp=Np("ytGcfConfig",{ub:(Op.coldConfigStore={Db:1},Op.hotConfigStore={Db:1},Op),shared:!1,upgrade:function(a,b){b(1)&&($o(To(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),$o(To(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Qp(a){return mp(Pp(),a)}
function Rp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},g.yield(Qp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Vo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Sp(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},h.yield(Qp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Vo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Tp(a){var b,c;return A(function(d){return d.h==1?d.yield(Qp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(So(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return fp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Up(a){var b,c;return A(function(d){return d.h==1?d.yield(Qp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(So(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return fp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Vp(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ra(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Vp,G);Vp.prototype.aa=function(){for(var a=z(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;G.prototype.aa.call(this)};function Wp(){this.h=0;this.i=new Vp}
function Xp(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:P("RAW_HOT_CONFIG_GROUP")}
function Yp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.F(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=yp();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(Up(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Rp(c,b,d),3);case 3:if(c)for(var h=c,k=z(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Zp(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!R("start_client_gcf"))return h.F(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=yp())?c?h.F(4):h.yield(Tp(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield(Sp(c,b,g,d),0)})}
function $p(){if(!Wp.h){var a=new Wp;Wp.h=a}a=Wp.h;var b=T()-a.h;if(!(a.h!==0&&b<sm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=T());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Wp.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function aq(){return"INNERTUBE_API_KEY"in Sl&&"INNERTUBE_API_VERSION"in Sl}
function bq(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),ne:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),kd:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),qh:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),pe:P("INNERTUBE_CONTEXT_HL"),oe:P("INNERTUBE_CONTEXT_GL"),qe:P("INNERTUBE_HOST_OVERRIDE")||"",re:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),rh:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function cq(a){var b={client:{hl:a.pe,gl:a.oe,clientName:a.kd,clientVersion:a.innertubeContextClientVersion,configInfo:a.ne}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=tm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.kd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=Ym()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=sn())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&
(a=tn())&&b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=$p())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=P("INNERTUBE_CONTEXT");var g;if(R("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=z(Object.entries(fm(P("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=z(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function dq(a,b,c){c=c===void 0?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().gh:(a=an($m()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var eq=typeof TextEncoder!=="undefined"?new TextEncoder:null,fq=eq?function(a){return eq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function gq(a,b){this.version=a;this.args=b}
gq.prototype.serialize=function(){return{version:this.version,args:this.args}};function hq(a,b){this.topic=a;this.h=b}
hq.prototype.toString=function(){return this.topic};var iq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Sb;M.prototype.publish=M.prototype.ib;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",iq);var jq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",jq);var kq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",kq);var lq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",lq);
D("ytPubsub2Pubsub2SkipSubKey",null);function mq(a,b){var c=nq();c&&c.publish.call(c,a.toString(),a,b)}
function oq(a){var b=pq,c=nq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(jq[d])try{if(f&&b instanceof hq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Dd){var l=new h;h.Dd=l.version}var m=h.Dd}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){Yl(y)}},lq[b.toString()]?E("yt.scheduler.instance")?Dj.oa(g):pm(g,0):g())});
jq[d]=!0;kq[b.toString()]||(kq[b.toString()]=[]);kq[b.toString()].push(d);return d}
function qq(){var a=rq,b=oq(function(c){a.apply(void 0,arguments);sq(b)});
return b}
function sq(a){var b=nq();b&&(typeof a==="number"&&(a=[a]),Nb(a,function(c){b.unsubscribeByKey(c);delete jq[c]}))}
function nq(){return E("ytPubsub2Pubsub2Instance")}
;function tq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&mq("meta_logging_csi_event",{timerName:a,Jh:b})}
;var uq=void 0,vq=void 0;function wq(){vq||(vq=rl(P("WORKER_SERIALIZATION_URL")));return vq||void 0}
function xq(){var a=wq();uq||a===void 0||(uq=new Worker(mb(a),void 0));return uq}
;var yq=sm("max_body_size_to_compress",5E5),zq=sm("min_body_size_to_compress",500),Aq=!0,Bq=0,Cq=0,Dq=sm("compression_performance_threshold_lr",250),Eq=sm("slow_compressions_before_abandon_count",4),Fq=!1,Gq=new Map,Hq=1,Iq=!0;function Jq(){if(typeof Worker==="function"&&wq()&&!Fq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Gq.get(c.key);d&&(Kq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Gq.delete(c.key))}},b=xq();
b&&(b.addEventListener("message",a),b.onerror=function(){Gq.clear()},Fq=!0)}}
function Lq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:T(),ticks:{},infos:{}};if(Aq)try{var g=Mq(b);if(g!=null&&(g>yq||g<zq))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Iq||!R("initial_gzip_use_main_thread"))){Fq||Jq();var h=xq();if(h&&!e){Gq.set(Hq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Hq});Hq++;return}}var k=ql(fq(b));Kq(k,f,a,c,d)}}catch(l){Zl(l),d(a,c)}else d(a,c)}
function Kq(a,b,c,d,e){Iq=!1;var f=T();b.ticks.gelc=f;Cq++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Dq&&(Bq++,R("abandon_compression_after_N_slow_zips")?Cq===sm("compression_disable_point")&&Bq>Eq&&(Aq=!1):Aq=!1);Nq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Oq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=T(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Aq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Mq(g);if(h!=null&&(h>yq||h<zq))return a;c=b?{level:1}:void 0;f=ql(fq(g),c);var k=T();e.ticks.gelc=k;if(b){Cq++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Dq)if(Bq++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Bq/Cq;var l=Eq/sm("compression_disable_point");Cq>0&&Cq%sm("compression_disable_point")===0&&b>=l&&(Aq=!1)}else Aq=!1;Nq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return Zl(m),a}}else return a}
function Mq(a){try{return(new Blob(a.split(""))).size}catch(b){return Zl(b),null}}
function Nq(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||tq("gel_compression",a,{sampleRate:.1})}
;function Pq(a){a=Object.assign({},a);delete a.Authorization;var b=jg();if(b){var c=new Hj;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=gd(c.digest(),3)}return a}
;var Qq;function Rq(){Qq||(Qq=new co("yt.innertube"));return Qq}
function Sq(a,b,c,d){if(d)return null;d=Rq().get("nextId",!0)||1;var e=Rq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Pq(c),requestTime:Math.round(T())};Rq().set("nextId",d+1,86400,!0);Rq().set("requests",e,86400,!0);return d}
function Tq(a){var b=Rq().get("requests",!0)||{};delete b[a];Rq().set("requests",b,86400,!0)}
function Uq(a){var b=Rq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(T())-d.requestTime<6E4)){var e=d.authState,f=Pq(dq(!1));xg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Vq(a,d.method,e,{}));delete b[c]}}Rq().set("requests",b,86400,!0)}}
;function Wq(a){this.Wb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.mb=function(){};
this.now=Date.now;this.Gb=!1;var b;this.zd=(b=a.zd)!=null?b:100;var c;this.ud=(c=a.ud)!=null?c:1;var d;this.sd=(d=a.sd)!=null?d:2592E6;var e;this.rd=(e=a.rd)!=null?e:12E4;var f;this.td=(f=a.td)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.cc=!!a.cc;var h;this.Zb=(h=a.Zb)!=null?h:.1;var k;this.oc=(k=a.oc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.mb&&(this.mb=a.mb);a.Gb&&(this.Gb=a.Gb);a.Wb&&(this.Wb=a.Wb);this.W=a.W;this.Ba=a.Ba;this.fa=a.fa;this.ea=a.ea;this.sendFn=a.sendFn;
this.Oc=a.Oc;this.Lc=a.Lc;Xq(this)&&(!this.W||this.W("networkless_logging"))&&Yq(this)}
function Yq(a){Xq(a)&&!a.Gb&&(a.h=!0,a.cc&&Math.random()<=a.Zb&&a.fa.Qd(a.V),Zq(a),a.ea.va()&&a.Rb(),a.ea.listen(a.Oc,a.Rb.bind(a)),a.ea.listen(a.Lc,a.Yc.bind(a)))}
r=Wq.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Xq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.V).then(function(e){d.id=e;c.ea.va()&&$q(c,d)}).catch(function(e){$q(c,d);
ar(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Xq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.ea.va()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.fa.set(e,d.V).catch(function(l){ar(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
ar(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Xq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.lb(d.id,c.V):e=!0;c.ea.bb&&c.W&&c.W("vss_network_hint")&&c.ea.bb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.V).then(function(g){d.id=g;e&&c.fa.lb(d.id,c.V)}).catch(function(g){ar(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.Rb=function(){var a=this;if(!Xq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ba.oa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.fa.gd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield($q(a,b),3):(a.Yc(),c.return());a.i&&(a.i=0,a.Rb());c.h=0})},this.zd))};
r.Yc=function(){this.Ba.pa(this.i);this.i=0};
function $q(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Xq(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.fa.ue(b.id,a.V),3);case 3:(c=d.i)||a.mb(Error("The request cannot be found in the database."));case 2:if(br(a,b,a.sd)){d.F(4);break}a.mb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.fa.lb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=cr(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.fa.lb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function cr(a,b){if(!Xq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=dr(f);(h=er(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.oc)){m.F(2);break}if(!a.ea.vc){m.F(3);break}return m.yield(a.ea.vc(),3);case 3:if(a.ea.va()){m.F(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.fa.Pc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.oc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.ud?m.yield(a.fa.Pc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.fa.lb(b.id,a.V),8);case 12:a.Ba.oa(function(){a.ea.va()&&a.Rb()},a.td);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.fa.lb(b.id,a.V),2);a.ea.bb&&a.W&&a.W("vss_network_hint")&&a.ea.bb(!0);d(e,f);h.h=0})};
return b}
function br(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Zq(a){if(!Xq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.gd("QUEUED",a.V).then(function(b){b&&!br(a,b,a.rd)?a.Ba.oa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.fa.Pc(b.id,a.V),2);Zq(a);c.h=0})}):a.ea.va()&&a.Rb()})}
function ar(a,b){a.Gd&&!a.ea.va()?a.Gd(b):a.handleError(b)}
function Xq(a){return!!a.V||a.Wb}
function dr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function er(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var fr;
function gr(){if(fr)return fr();var a={};fr=Np("LogsDatabaseV2",{ub:(a.LogsRequestsStore={Db:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&To(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),$o(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return fr()}
;function hr(a){return mp(gr(),a)}
function ir(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(hr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Vo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=T();jr(c);return g.return(f)})}
function kr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(hr(b),2);if(m.h!=3)return d=m.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k="prev",R("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(So(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return fp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=T();jr(c);return m.return(l)})}
function lr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(hr(b),2);c=d.i;return d.return(So(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Oo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function mr(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(hr(b),2);e=f.i;return f.return(So(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Oo(h.h.put(k,void 0)).then(function(){return k})):Io.resolve(void 0)})}))})}
function nr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(hr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function or(a){var b,c;return A(function(d){if(d.h==1)return d.yield(hr(a),2);b=d.i;c=T()-2592E6;return d.yield(So(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return bp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return cp(f)})})}),0)})}
function pr(){A(function(a){return a.yield(Jp(),0)})}
function jr(a){R("nwl_csi_killswitch")||tq("networkless_performance",a,{sampleRate:1})}
;var qr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,
fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,
castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511};var rr={},sr=Np("ServiceWorkerLogsDatabase",{ub:(rr.SWHealthLog={Db:1},rr),shared:!0,upgrade:function(a,b){b(1)&&$o(To(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function tr(a){return mp(sr(),a)}
function ur(a){var b,c;A(function(d){if(d.h==1)return d.yield(tr(a),2);b=d.i;c=T()-2592E6;return d.yield(So(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return bp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return cp(f)})})}),0)})}
function vr(a){var b;return A(function(c){if(c.h==1)return c.yield(tr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var wr={},xr=0;function yr(a){var b=new Image,c=""+xr++;wr[c]=b;b.onload=b.onerror=function(){delete wr[c]};
b.src=a}
;var zr;function Ar(){zr||(zr=new co("yt.offline"));return zr}
function Br(a){if(R("offline_error_handling")){var b=Ar().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Ar().set("errors",b,2592E3,!0)}}
;function Cr(){this.h=new Map;this.i=!1}
function Dr(){if(!Cr.h){var a=E("yt.networkRequestMonitor.instance")||new Cr;D("yt.networkRequestMonitor.instance",a);Cr.h=a}return Cr.h}
Cr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Cr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Cr.prototype.removeParams=function(a){return a.split("?")[0]};
Cr.prototype.removeParams=Cr.prototype.removeParams;Cr.prototype.isEndpointCFR=Cr.prototype.isEndpointCFR;Cr.prototype.requestComplete=Cr.prototype.requestComplete;Cr.getInstance=Dr;function Er(){Wh.call(this);var a=this;this.j=!1;this.i=Cj();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Ar().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new S(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Yl(d)}Ar().set("errors",{},2592E3,!0)}}})}
w(Er,Wh);function Fr(){if(!Er.h){var a=E("yt.networkStatusManager.instance")||new Er;D("yt.networkStatusManager.instance",a);Er.h=a}return Er.h}
r=Er.prototype;r.va=function(){return this.i.va()};
r.bb=function(a){this.i.i=a};
r.he=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.Xd=function(){this.j=!0};
r.listen=function(a,b){return this.i.listen(a,b)};
r.vc=function(a){a=Aj(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Dr().requestComplete("generate_204",b)});
return a};
Er.prototype.sendNetworkCheckRequest=Er.prototype.vc;Er.prototype.listen=Er.prototype.listen;Er.prototype.enableErrorFlushing=Er.prototype.Xd;Er.prototype.getWindowStatus=Er.prototype.he;Er.prototype.networkStatusHint=Er.prototype.bb;Er.prototype.isNetworkAvailable=Er.prototype.va;Er.getInstance=Fr;function Gr(a){a=a===void 0?{}:a;Wh.call(this);var b=this;this.i=this.u=0;this.j=Fr();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Hr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Hr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Xh(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Xh(b,"publicytnetworkstatus-offline")})))}
w(Gr,Wh);Gr.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Gr.prototype.bb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Gr.prototype.vc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Dr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.bb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function Hr(a,b){a.rateLimit?a.i?(Dj.pa(a.u),a.u=Dj.oa(function(){a.o!==b&&(Xh(a,b),a.o=b,a.i=T())},a.rateLimit-(T()-a.i))):(Xh(a,b),a.o=b,a.i=T()):Xh(a,b)}
;var Ir;function Jr(){var a=Wq.call;Ir||(Ir=new Gr({wh:!0,nh:!0}));a.call(Wq,this,{fa:{Qd:or,lb:nr,gd:kr,ue:lr,Pc:mr,set:ir},ea:Ir,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Zl(new S(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Yl(b)},
mb:Zl,sendFn:Kr,now:T,Gd:Br,Ba:bo(),Oc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",cc:!0,Zb:.1,oc:sm("potential_esf_error_limit",10),W:R,Gb:!(un()&&Lr())});this.j=new nj;R("networkless_immediately_drop_all_requests")&&pr();Kp("LogsDatabaseV2")}
w(Jr,Wq);function Mr(){var a=E("yt.networklessRequestController.instance");a||(a=new Jr,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&zp().then(function(b){a.V=b;Yq(a);a.j.resolve();a.cc&&Math.random()<=a.Zb&&a.V&&ur(a.V);R("networkless_immediately_drop_sw_health_store")&&Nr(a)}));
return a}
Jr.prototype.writeThenSend=function(a,b){b||(b={});b=Or(a,b);un()||(this.h=!1);Wq.prototype.writeThenSend.call(this,a,b)};
Jr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Or(a,b);un()||(this.h=!1);Wq.prototype.sendThenWrite.call(this,a,b,c)};
Jr.prototype.sendAndWrite=function(a,b){b||(b={});b=Or(a,b);un()||(this.h=!1);Wq.prototype.sendAndWrite.call(this,a,b)};
Jr.prototype.awaitInitialization=function(){return this.j.promise};
function Nr(a){var b;A(function(c){if(!a.V)throw b=Eo("clearSWHealthLogsDb"),b;return c.return(vr(a.V).catch(function(d){a.handleError(d)}))})}
function Kr(a,b,c,d){d=d===void 0?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Tr(a,b);if(R("use_request_time_ms_header"))b.headers&&jm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)ym(a,void 0,"POST",f,void 0);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)ym(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new bb({url:a});if(k.D?typeof k.j!=="string"||k.j.length===0?0:{version:3,Vd:k.j,Nd:db(k,"&act=1&ri=1"+eb(k))}:k.u&&{version:4,Vd:db(k,"&dct=1&suid="+k.o),Nd:db(k,"&act=1&ri=1&suid="+k.o)}){var l=ac(bc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(kc),p=jc(a,0,"ri",n);if(p<0)var t=null;else{var v=a.indexOf("&",p);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(p+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(F){}x=
!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(F){}y=!1}c=y?!0:!1}else c=!1;c||yr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Lq(a,b.postBody,b,Cm,d)):Lq(a,JSON.stringify(b.postParams),b,Bm,d):Cm(a,b)}
function Or(a,b){R("use_event_time_ms_header")&&jm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(T())));return b}
function Tr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Dr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Dr().requestComplete(a,!0);d(e,f)}}
function Lr(){return cc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Ur=!1,Vr=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Ur};D("ytNetworklessLoggingInitializationOptions",Vr);function Wr(){var a;A(function(b){if(b.h==1)return b.yield(zp(),2);a=b.i;if(!a||!un()&&!R("nwl_init_require_datasync_id_killswitch")||!Lr())return b.F(0);Ur=!0;Vr.isNwlInitialized=Ur;return b.yield(Mr().awaitInitialization(),0)})}
;function Xr(a){var b=this;this.config_=null;a?this.config_=a:aq()&&(this.config_=bq());xn(function(){Uq(b)},5E3)}
Xr.prototype.isReady=function(){!this.config_&&aq()&&(this.config_=bq());return!!this.config_};
function Vq(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||R("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=Sq(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(F,I){Tq(p);t(F,I)};
c.onFetchSuccess=function(F,I){Tq(p);v(F,I)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Mr().writeThenSend(m,g):Mr().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var y=g.postBody;typeof y!=="string"&&(y=JSON.stringify(g.postBody));Lq(m,y,g,Cm,x)}else Lq(m,JSON.stringify(g.postParams),g,Bm,x)}else R("web_all_payloads_via_jspb")?Cm(m,g):Bm(m,g)}catch(F){if(F.name==="InvalidAccessError")p&&(Tq(p),p=0),Zl(Error("An extension is blocking network request."));else throw F;}p&&xn(function(){Uq(a)},5E3)}
!P("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Zl(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new S("innertube xhrclient not ready",b,c,d);Yl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.qe)&&(h=f);var k=a.config_.re||!1,l=dq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=hm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?Vr.isNwlInitialized:Ur)?xp().then(function(n){e(n)}):e(!1)}
;var Yr=0,Zr=$c?"webkit":Zc?"moz":Xc?"ms":Wc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Yr});var $r={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function as(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in $r||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function bs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
as.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
as.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
as.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var tg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",tg);var cs=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",cs);
function ds(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return sg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&xg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function es(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ds(a,b,c,d);if(e)return e;e=++cs.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new as(h);if(!Gg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new as(h);
h.currentTarget=a;return c.call(a,h)};
g=Xl(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),gs()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);tg[e]=[a,b,c,g,d];return e}
function hs(a){a&&(typeof a=="string"&&(a=[a]),Nb(a,function(b){if(b in tg){var c=tg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?gs()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete tg[b]}}))}
var gs=li(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function is(a){this.H=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=es(window,"mousemove",Wa(this.Y,this));a=Wa(this.R,this);typeof a==="function"&&(a=Xl(a));this.Z=window.setInterval(a,25)}
Za(is,G);is.prototype.Y=function(a){a.h===void 0&&bs(a);var b=a.h;a.i===void 0&&bs(a);this.h=new pg(b,a.i)};
is.prototype.R=function(){if(this.h){var a=T();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.H();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
is.prototype.aa=function(){window.clearInterval(this.Z);hs(this.U)};var js={};
function ks(a){var b=a===void 0?{}:a;a=b.Ee===void 0?!1:b.Ee;b=b.Yd===void 0?!0:b.Yd;if(E("_lact",window)==null){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&ls();es(document,"keydown",ls);es(document,"keyup",ls);es(document,"mousedown",ls);es(document,"mouseup",ls);a?es(window,"touchmove",function(){ms("touchmove",200)},{passive:!0}):(es(window,"resize",function(){ms("resize",200)}),b&&es(window,"scroll",function(){ms("scroll",200)}));
new is(function(){ms("mouse",100)});
es(document,"touchstart",ls,{passive:!0});es(document,"touchend",ls,{passive:!0})}}
function ms(a,b){js[a]||(js[a]=!0,Dj.oa(function(){ls();js[a]=!1},b))}
function ls(){E("_lact",window)==null&&ks();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function ns(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ps=C.ytPubsubPubsubInstance||new M,qs=C.ytPubsubPubsubSubscribedKeys||{},rs=C.ytPubsubPubsubTopicToKeys||{},ss=C.ytPubsubPubsubIsSynchronous||{};function ts(a,b){var c=us();if(c&&b){var d=c.subscribe(a,function(){function e(){qs[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{ss[a]?e():pm(e,0)}catch(g){Yl(g)}},void 0);
qs[d]=!0;rs[a]||(rs[a]=[]);rs[a].push(d);return d}return 0}
function vs(a){var b=us();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Nb(a,function(c){b.unsubscribeByKey(c);delete qs[c]}))}
function ws(a,b){var c=us();c&&c.publish.apply(c,arguments)}
function xs(a){var b=us();if(b)if(b.clear(a),a)ys(a);else for(var c in rs)ys(c)}
function us(){return C.ytPubsubPubsubInstance}
function ys(a){rs[a]&&(a=rs[a],Nb(a,function(b){qs[b]&&delete qs[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Sb;M.prototype.publish=M.prototype.ib;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",ps);D("ytPubsubPubsubTopicToKeys",rs);D("ytPubsubPubsubIsSynchronous",ss);D("ytPubsubPubsubSubscribedKeys",qs);var zs=Symbol("injectionDeps");function As(a){this.name=a}
As.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Bs(a){this.key=a}
function Cs(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ds(a,b){a.i.set(b.qc,b);var c=a.j.get(b.qc);if(c)try{c.Fh(a.resolve(b.qc))}catch(d){c.Dh(d)}}
Cs.prototype.resolve=function(a){return a instanceof Bs?Es(this,a.key,[],!0):Es(this,a,[])};
function Es(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Cd!==void 0)var e=d.Cd;else if(d.nf)e=d[zs]?Fs(a,d[zs],c):[],e=d.nf.apply(d,ra(e));else if(d.Bd){e=d.Bd;var f=e[zs]?Fs(a,e[zs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ra(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ih||a.h.set(b,e);return e}
function Fs(a,b,c){return b?b.map(function(d){return d instanceof Bs?Es(a,d.key,c,!0):Es(a,d,c)}):[]}
;var Gs;function Hs(){Gs||(Gs=new Cs);return Gs}
;var Is=window;function Js(){var a,b;return"h5vcc"in Is&&((a=Is.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Is.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Is&&Is.performance.mark&&Is.performance.measure?2:0}
function Ks(a){var b=Js();switch(b){case 1:Is.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Is.performance.mark(a+"-start");break;case 0:break;default:Eb(b,"unknown trace type")}}
function Ls(a){var b=Js();switch(b){case 1:Is.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Is.performance.mark(c);Is.performance.measure(a,b,c);break;case 0:break;default:Eb(b,"unknown trace type")}}
;var Ms=R("web_enable_lifecycle_monitoring")&&Js()!==0,Ns=R("web_enable_lifecycle_monitoring");function Os(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Ps(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?bo():d;this.j=c;this.scheduler=d;this.i=new nj;this.h=a;for(a={Ya:0};a.Ya<this.h.length;a={nc:void 0,Ya:a.Ya},a.Ya++)a.nc=this.h[a.Ya],c=function(e){return function(){e.nc.Ec();b.h[e.Ya].pc=!0;b.h.every(function(f){return f.pc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.nc),d=this.scheduler.Wa(c,d),this.h[a.Ya]=Object.assign({},a.nc,{Ec:c,
jobId:d})}
function Qs(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=z(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.pc||(a.scheduler.pa(c.jobId),a.scheduler.Wa(c.Ec,10))}
Ps.prototype.cancel=function(){for(var a=z(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.pc||this.scheduler.pa(b.jobId),b.pc=!0;this.i.resolve()};
Ps.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Rs(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};Ms&&Ks(this.state)}
r=Rs.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Ms&&Ls(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Qs(this.j),this.j=void 0);Ss(this,a,b);this.state=a;Ms&&Ks(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ts(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ts(a,b){var c=b.filter(function(e){return Us(a,e)===10}),d=b.filter(function(e){return Us(a,e)!==10});
return a.B.Hh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Ke.apply(a,[c].concat(ra(e))),2);a.wd.apply(a,[d].concat(ra(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Le.apply(a,[c].concat(ra(e)));a.wd.apply(a,[d].concat(ra(e)))}}
r.Le=function(a){for(var b=B.apply(1,arguments),c=bo(),d=z(a),e=d.next(),f={};!e.done;f={Ib:void 0},e=d.next())f.Ib=e.value,c.Bb(function(g){return function(){Vs(g.Ib.name);Ws(function(){return g.Ib.callback.apply(g.Ib,ra(b))});
Xs(g.Ib.name)}}(f))};
r.Ke=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=bo(),d=z(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.Ra=e.value;f.Ub=void 0;g=function(k){return function(){Vs(k.Ra.name);var l=Ws(function(){return k.Ra.callback.apply(k.Ra,ra(b))});
$d(l)?k.Ub=R("web_lifecycle_error_handling_killswitch")?l.then(function(){Xs(k.Ra.name)}):l.then(function(){Xs(k.Ra.name)},function(m){Os(m);
Xs(k.Ra.name)}):Xs(k.Ra.name)}}(f);
c.Bb(g);return f.Ub?h.yield(f.Ub,3):h.F(3)}f={Ra:void 0,Ub:void 0};e=d.next();return h.F(2)})};
r.wd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Vs(e.name);Ws(function(){return e.callback.apply(e,ra(b))});
Xs(e.name)},
priority:Us(c,e)}});
d.length&&(this.j=new Ps(d))};
function Us(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Vs(a){Ms&&a&&Ks(a)}
function Xs(a){Ms&&a&&Ls(a)}
function Ss(a,b,c){Ns&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Rs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function Ws(a){if(R("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Os(b)}}
;function Ys(a){Rs.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Zs;w(Ys,Rs);Ys.prototype.i=function(a,b){var c=this;this.h=xn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
Ys.prototype.D=function(a,b){this.h&&(Dj.pa(this.h),this.h=null);a(b==null?void 0:b.event)};
function $s(){Zs||(Zs=new Ys);return Zs}
;var at=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return at});function bt(){this.store={};this.h={}}
bt.prototype.storePayload=function(a,b){a=ct(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);R("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
bt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=dt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ra(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ra(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ra(this.smartExtractMatchingEntries(a))));return c};
bt.prototype.extractMatchingEntries=function(a){a=dt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ra(this.store[a[c]])),delete this.store[a[c]]);return b};
bt.prototype.getSequenceCount=function(a){a=dt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function dt(a,b){var c=ct(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&ct(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(et(b.auth,g[0])){var h=b.isJspb;et(h===void 0?"undefined":h?"true":"false",g[1])&&et(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),et(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function et(a,b){return a===void 0||a==="undefined"?!0:a===b}
bt.prototype.getSequenceCount=bt.prototype.getSequenceCount;bt.prototype.extractMatchingEntries=bt.prototype.extractMatchingEntries;bt.prototype.smartExtractMatchingEntries=bt.prototype.smartExtractMatchingEntries;bt.prototype.storePayload=bt.prototype.storePayload;function ct(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function ft(a,b){if(a)return a[b.name]}
;var gt=sm("initial_gel_batch_timeout",2E3),ht=sm("gel_queue_timeout_max_ms",6E4),jt=sm("gel_min_batch_size",5),kt=void 0;function lt(){this.o=this.h=this.i=0;this.j=!1}
var mt=new lt,nt=new lt,ot=new lt,pt=new lt,qt,rt=!0,st=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",st);var tt={};function ut(){var a=E("yt.logging.ims");a||(a=new bt,D("yt.logging.ims",a));return a}
function vt(a,b){if(a.endpoint==="log_event"){wt();var c=xt(a),d=zt(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=qr[d||""];var f,g,h,k=Hs().resolve(new Bs(Wp))==null?void 0:(f=Xp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!R("web_payload_policy_disabled_killswitch"))return;k=At(e.tier);if(k===400){Bt(a,b);return}}tt[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};ut().storePayload(e,a.payload);Ct(b,c,e,d==="gelDebuggingEvent")}}
function Ct(a,b,c,d){function e(){Dt({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(kt=new a);a=sm("tvhtml5_logging_max_batch_ads_fork")||sm("tvhtml5_logging_max_batch")||sm("web_logging_max_batch")||100;var g=T(),h=Et(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=ut().getSequenceCount(c));d>=1E3?e():d>=a?qt||(qt=Ft(function(){e();qt=void 0},0)):g-k>=10&&(Gt(f,c.tier),h.o=g)}
function Bt(a,b){if(a.endpoint==="log_event"){R("more_accurate_gel_parser")&&ut().storePayload({isJspb:!1},a.payload);wt();var c=xt(a),d=new Map;d.set(c,[a.payload]);var e=zt(a.payload)||"";b&&(kt=new b);return new mi(function(f,g){kt&&kt.isReady()?Ht(d,kt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function xt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);st[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Dt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new mi(function(e,f){var g=Et(c,d),h=g.j;g.j=!1;It(g.i);It(g.h);g.h=0;kt&&kt.isReady()?d===void 0&&R("enable_web_tiered_gel")?Jt(e,f,a,b,c,300,h):Jt(e,f,a,b,c,d,h):(Gt(c,d),e())})}
function Jt(a,b,c,d,e,f,g){var h=kt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=R("enable_web_tiered_gel")?ut().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):ut().extractMatchingEntries(e),k.set(d,f);else for(d=z(Object.keys(tt)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?ut().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):ut().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete tt[l];Ht(k,h,a,b,c,!1,g)}
function Gt(a,b){function c(){Dt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Et(a,b),e=d===pt||d===ot?5E3:ht;R("web_gel_timeout_cap")&&!d.h&&(e=Ft(function(){c()},e),d.h=e);
It(d.i);e=P("LOGGING_BATCH_TIMEOUT",sm("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&rt&&(e=gt);e=Ft(function(){sm("gel_min_batch_size")>0?ut().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=jt&&c():c()},e);
d.i=e}
function Ht(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(T()),k=a.size,l=(g===void 0?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=z(a);var m=a.next();for(g={};!m.done;g={Kc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Nc:void 0,Mc:void 0},m=a.next()){var n=z(m.value);m=n.next().value;n=n.next().value;g.batchRequest=zg({context:cq(b.config_||bq())});if(!Pa(n)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=st[m])&&
Kt(g.batchRequest,m,n);delete st[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Lt(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Nc=function(p){R("start_client_gcf")&&Dj.oa(function(){return A(function(t){return t.yield(Mt(p),0)})});
k--;k||c()};
g.Kc=0;g.Mc=function(p){return function(){p.Kc++;if(e.bypassNetworkless&&p.Kc===1)try{Vq(b,l,p.batchRequest,Nt({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Nc,p.Mc,f)),rt=!1}catch(t){Yl(t),d()}k--;k||c()}}(g);
try{Vq(b,l,g.batchRequest,Nt(e,g.dangerousLogToVisitorSession,g.Nc,g.Mc,f)),rt=!1}catch(p){Yl(p),d()}}}
function Nt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,hh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Ot()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function Lt(a,b,c){Ot()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Tl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Kt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function wt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=rm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(at=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",at),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ot(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Ft(a,b){return R("transport_use_scheduler")===!1?pm(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?xn(function(){if($s().currentState==="none")a();else{var c={};$s().install((c.none={callback:a},c))}},b):xn(a,b)}
function It(a){R("transport_use_scheduler")?Dj.pa(a):window.clearTimeout(a)}
function Mt(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=ft(d,vl),g=(f=d)==null?void 0:f.hotHashData,h=ft(d,ul),l=(k=d)==null?void 0:k.coldHashData,(m=Hs().resolve(new Bs(Wp)))?g?e?n.yield(Yp(m,g,e),2):n.yield(Yp(m,g),2):n.F(2):n.return()):l?h?n.yield(Zp(m,l,h),0):n.yield(Zp(m,l),0):n.F(0)})}
function Et(a,b){b=b===void 0?200:b;return a?b===300?pt:nt:b===300?ot:mt}
function zt(a){a=Object.keys(a);a=z(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,qr[b])return b}
function At(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Pt=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Pt);
function Qt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ns();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Pt[b]=b in Pt?Pt[b]+1:0,a.sequence={index:Pt[b],groupKey:b},d.endOfSequence&&delete Pt[d.sequenceGroup]);(d.sendIsolatedPayload?Bt:vt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function mo(a,b,c){c=c===void 0?{}:c;var d=Xr;P("ytLoggingEventsDefaultDisabled",!1)&&Xr===Xr&&(d=null);Qt(a,b,d,c)}
;function Rt(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var St=new Set,Tt=0,Ut=0,Vt=0,Wt=[],Xt=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function lo(a){Yt(a)}
function Zt(a){Yt(a,"WARNING")}
function $t(a){a instanceof Error?Yt(a):(a=Qa(a)?JSON.stringify(a):String(a),a=new S(a),a.name="RejectedPromiseError",Zt(a))}
function Yt(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Tt>=5))){d=Wt;var k=Vb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=Um(a.args[p],"params."+p,c,n),
n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=Wm(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=Wm(t)}if(d.length)for(p=0;p<d.length&&!(n=Um(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Qm();c=z(a.Sa);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.xh)){a=d.weight;break a}a=z(a.Na);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=z(Lm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.lc[p.name])for(e=z(c.lc[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Ic(f);break}p.params||(p.params={});a=Qm();p.params["params.errorServiceSignature"]="msg="+a.Sa.length+"&cb="+a.Na.length;p.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Cg(Dg,"sample")).constructor!==Cg&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(p);if(p.sampleWeight!==0&&!St.has(p.message)){if(g&&R("web_enable_error_204"))au(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Rm.ib("handleError",p),R("record_app_crashed_web")&&Vt===0&&p.sampleWeight===1&&(Vt++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),mo("appCrashed",g)),Ut++):b==="WARNING"&&Rm.ib("handleWarning",p);if(R("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=z(Xt);for(c=a.next();!c.done;c=a.next())if(so(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Ul("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=z(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(mo("clientError",h),(g==="ERROR"||R("errors_flush_gel_always_killswitch"))&&Dt(void 0,void 0,!1))}R("suppress_error_204_logging")||au(b,p)}try{St.add(p.message)}catch(y){}Tt++}}}
function au(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=z(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=z(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Cm(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function bu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ra(b))}
;function cu(){this.register=new Map}
function du(a){a=z(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ch("ABORTED")}
cu.prototype.clear=function(){du(this);this.register.clear()};
var eu=new cu;var fu=Date.now().toString();
function gu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(fu)for(a=1,b=0;b<fu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^fu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var hu,iu=C.ytLoggingDocDocumentNonce_;iu||(iu=gu(),D("ytLoggingDocDocumentNonce_",iu));hu=iu;function ju(a){this.h=a}
r=ju.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new xl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&K(a,2,ve(this.h.veType)),this.h.veCounter!==void 0&&K(a,6,ve(this.h.veCounter)),this.h.elementIndex!==void 0&&K(a,3,ve(this.h.elementIndex)),this.h.isCounterfactual&&K(a,5,re(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();vf(a,xl,7,b)}this.h.youtubeData!==void 0&&vf(a,wl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function ku(a){return P("client-screen-nonce-store",{})[a===void 0?0:a]}
function lu(a,b){b=b===void 0?0:b;var c=P("client-screen-nonce-store");c||(c={},Tl("client-screen-nonce-store",c));c[b]=a}
function mu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function nu(a){return P(mu(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",nu);function ou(){var a=P("csn-to-ctt-auth-info");a||(a={},Tl("csn-to-ctt-auth-info",a));return a}
function pu(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function qu(a){a=ku(a===void 0?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",qu);function ru(a,b,c){var d=ou();(c=qu(c))&&delete d[c];b&&(d[a]=b)}
function su(a){return ou()[a]}
D("yt_logging_screen.getCttAuthInfo",su);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==ku(c)||b!==P(mu(c)))if(ru(a,d,c),lu(a,c),Tl(mu(c),b),b=function(){setTimeout(function(){a&&mo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:hu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function tu(){var a=yg(uu),b;return(new mi(function(c,d){a.onSuccess=function(e){om(e)?c(new vu(e)):d(new wu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new wu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new wu("Request timed out","net.timeout",e))};
b=Cm("//googleads.g.doubleclick.net/pagead/id",a)})).wc(function(c){if(c instanceof ti){var d;
(d=b)==null||d.abort()}return ri(c)})}
function wu(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(wu,$a);function vu(a){this.xhr=a}
;function xu(){this.h=0;this.i=null}
xu.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:yu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:zu(a):this};
xu.prototype.getValue=function(){return this.i};
xu.prototype.isRejected=function(){return this.h==2};
xu.prototype.$goog_Thenable=!0;function zu(a){var b=new xu;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function yu(a){var b=new xu;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Au(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:jm(a)?"same-origin":"cors",credentials:jm(a)?"same-origin":"include"};b={};for(var d=z(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Bu(){return hg()||(bd||cd)&&so("applewebkit")&&!so("version")&&(!so("safari")||so("gsa/"))||ad&&so("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Cu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Bl)if(Bl[d]==c.embeddedPlayerMode){b=Bl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Du(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Eu;this.isTimeout=a instanceof wu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof ti}
w(Du,$a);Du.prototype.name="BiscottiError";function Eu(){$a.call(this,"Biscotti ID is missing from server")}
w(Eu,$a);Eu.prototype.name="BiscottiMissingError";var uu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Fu=null;function Gu(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Bu())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if(wg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Cu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Ml(){var a=Gu();if(a!==void 0)return ri(a);Fu||(Fu=tu().then(Hu).wc(function(b){return Iu(2,b)}));
return Fu}
function Hu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Eu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Eu;a=a.id;Nl(a);Fu=yu(a);Ju(18E5,2);return a}
function Iu(a,b){b=new Du(b);Nl("");Fu=zu(b);a>0&&Ju(12E4,a-1);throw b;}
function Ju(a,b){pm(function(){tu().then(Hu,function(c){return Iu(b,c)}).wc(ki)},a)}
function Ku(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Ml()}catch(b){return ri(b)}}
;var Bb=sa(["data-"]);function Lu(a){a&&(a.dataset?a.dataset[Mu()]="true":Db(a))}
function Nu(a){return a?a.dataset?a.dataset[Mu()]:a.getAttribute("data-loaded"):null}
var Ou={};function Mu(){return Ou.loaded||(Ou.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Pu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||yg(b);this.assets=a.assets||{};this.attrs=a.attrs||yg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Pu.prototype.clone=function(){var a=new Pu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Oa(c)=="object"?a[b]=yg(c):a[b]=c}return a};var Qu=["share/get_share_panel"],Ru=["share/get_web_player_share_panel"],Su=["feedback"],Tu=["notification/modify_channel_preference"],Uu=["browse/edit_playlist"],Vu=["subscription/subscribe"],Wu=["subscription/unsubscribe"];var Xu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Xu);function Yu(a){Ol(Xu,arguments)}
;function Zu(a,b,c){$u(a,b,c===void 0?null:c)}
function av(a){a=bv(a);var b=document.getElementById(a);b&&(xs(a),b.parentNode.removeChild(b))}
function cv(a,b){a&&b&&(a=""+Ra(b),(a=dv[a])&&vs(a))}
function $u(a,b,c){c=c===void 0?null:c;var d=bv(a),e=document.getElementById(d),f=e&&Nu(e),g=e&&!f;f?b&&b():(b&&(f=ts(d,b),b=""+Ra(b),dv[b]=f),g||(e=ev(a,d,function(){Nu(e)||(Lu(e),ws(d),pm(function(){xs(d)},0))},c)))}
function ev(a,b,c,d){d=d===void 0?null:d;var e=Fg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,sl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function bv(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var dv={};function fv(a){var b=gv(a),c=document.getElementById(b),d=c&&Nu(c);d||c&&!d||(c=hv(a,b,function(){if(!Nu(c)){Lu(c);ws(b);var e=Xa(xs,b);pm(e,0)}}))}
function hv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=sl(a);Gb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function gv(a){var b=Fg("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function iv(a){var b=B.apply(1,arguments);if(!jv(a)||b.some(function(d){return!jv(d)}))throw Error("Only objects may be merged.");
b=z(b);for(var c=b.next();!c.done;c=b.next())kv(a,c.value)}
function kv(a,b){for(var c in b)if(jv(b[c])){if(c in a&&!jv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});kv(a[c],b[c])}else if(lv(b[c])){if(c in a&&!lv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);mv(a[c],b[c])}else a[c]=b[c];return a}
function mv(a,b){b=z(b);for(var c=b.next();!c.done;c=b.next())c=c.value,jv(c)?a.push(kv({},c)):lv(c)?a.push(mv([],c)):a.push(c);return a}
function jv(a){return typeof a==="object"&&!Array.isArray(a)}
function lv(a){return typeof a==="object"&&Array.isArray(a)}
;var nv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function ov(a,b){var c=c===void 0?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cc(window.location.href);e&&d.push(e);e=cc(a);if(Mb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=dc(a),a=ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:qu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&pv(a,b,f)}else pv(a,b)}
function pv(a,b,c){a=qv(a);b=b?hc(b):"";c=c||5;Bu()&&cn(a,b,c)}
function qv(a){for(var b=z(nv),c=b.next();!c.done;c=b.next())a=mc(a,c.value);return"ST-"+Zb(a).toString(36)}
;function rv(a){gq.call(this,1,arguments);this.csn=a}
w(rv,gq);var pq=new hq("screen-created",rv),sv=[],tv=0,uv=new Map,vv=new Map,wv=new Map;
function xv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=yv({cttAuthInfo:su(b)||void 0},b),g=z(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ug(k)||!k.trackingParams&&!k.veType)&&Zt(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=zv(h,b);if(k.veType&&!vv.has(l)&&!wv.has(l)&&!e){if(!R("il_attach_cache_limit")||uv.size<1E3){uv.set(l,[a,b,c,h]);return}R("il_attach_cache_limit")&&uv.size>1E3&&Zt(new S("IL Attach cache exceeded limit"))}h=zv(c,b);uv.has(h)?
Av(c,b):wv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Pb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Bv("visualElementAttached",f,c):a?Qt("visualElementAttached",c,a,f):mo("visualElementAttached",c,f)}
function Bv(a,b,c){sv.push({De:a,payload:c,th:void 0,options:b});tv||(tv=qq())}
function rq(a){if(sv){for(var b=z(sv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,mo(c.De,c.payload,c.options));sv.length=0}tv=0}
function zv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Av(a,b){a=zv(a,b);uv.has(a)&&(b=uv.get(a)||[],xv(b[0],b[1],b[2],[b[3]],!0),uv.delete(a))}
function yv(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Cv(){try{return!!self.localStorage}catch(a){return!1}}
;function Dv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Ev(a){if(Cv()){var b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Dv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Fv(){if(!Cv())return!1;var a=vn(),b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=Dv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Gv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(P("INNERTUBE_CLIENT_NAME")==="WEB"||P("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Hv(a){if(P("LOGGED_IN",!0)&&Gv()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=cc(window.location.href);c&&b.push(c);c=cc(a);Mb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=dc(a),(b=ec(b))?(b=qv(b),b=(b=dn(b)||null)?fm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Gv()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&ov(a,b)}}
;function Iv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&ov(a,b);if(c)return!1;Hv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=ic(a,e);Hv(a);f=a+f;var h=h===void 0?wb:h;a:if(h=h===void 0?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.se(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);h!==void 0&&(g.href=h);return!0}
;function Jv(a){if(wg(P("PLAYER_VARS",{}))!="1"){a&&Ll();try{Ku().then(function(){},function(){}),pm(Jv,18E5)}catch(b){Yl(b)}}}
;var Kv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Lv(){var a=a===void 0?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;var b=ac(bc(5,a));if(R("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=gm(a).theme;return Kv.get(c)||null}catch(d){}return null}
;function Mv(){this.h={};if(this.i=fn()){var a=dn("CONSISTENCY");a&&Nv(this,{encryptedTokenJarContents:a})}}
Mv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.La.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=z(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Nv(this,a)}};
function Nv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&cn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Ov=window.location.hostname.split(".").slice(-2).join(".");function Pv(){this.j=-1;var a=P("LOCATION_PLAYABILITY_TOKEN");P("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Qv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Rv;function Sv(){Rv=E("yt.clientLocationService.instance");Rv||(Rv=new Pv,D("yt.clientLocationService.instance",Rv));return Rv}
r=Pv.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,P("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Qv(this))&&this.h.set("yt-location-playability-token",a,15552E3):cn("YT_CL",JSON.stringify({loctok:a}),15552E3,Ov,!0))};
function Qv(a){return a.h===void 0?new co("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Qv(this))&&this.h.remove("yt-location-playability-token"):en("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;P("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Tv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),P("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=P("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function Uv(){this.h={}}
Uv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Uv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Uv.prototype.set=function(a,b){this.h[a]=b};
Uv.prototype.remove=function(a){delete this.h[a]};function Vv(){this.mappings=new Uv}
Vv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Vv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Eb(b)}}return a};
new Vv;function Wv(a){return function(){return new a}}
;var Xv={},Yv=(Xv.WEB_UNPLUGGED="^unplugged/",Xv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Xv.WEB_UNPLUGGED_OPS="^unplugged/",Xv.WEB_UNPLUGGED_PUBLIC="^unplugged/",Xv.WEB_CREATOR="^creator/",Xv.WEB_KIDS="^kids/",Xv.WEB_EXPERIMENTS="^experiments/",Xv.WEB_MUSIC="^music/",Xv.WEB_REMIX="^music/",Xv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Xv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Xv);
function Zv(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=Yv[b];if(c){c=new RegExp(c);for(var d=z(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Yv).forEach(function(g){var h=z(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=z(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function $v(){}
$v.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?bn:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=zg(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;kn();var l="USER_INTERFACE_THEME_LIGHT";nn(165)?l="USER_INTERFACE_THEME_DARK":nn(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Lv()||l;h.userInterfaceTheme=k;if(!f){if(k=sn())h.connectionType=k;R("web_log_effective_connection_type")&&(k=tn())&&(g.client.effectiveConnectionType=k)}var m;if(R("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}R("web_gcf_hashes_innertube")&&(k=$p())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=gm(C.location.href);!R("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&Xm.h&&(n=Xm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Ym(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!R("web_lr_app_quality_killswitch")&&(n=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!R("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var p=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(na){}p=
void 0}p&&(h.timeZone=p)}(p=P("EXPERIMENTS_TOKEN",""))?h.experimentsToken=p:delete h.experimentsToken;p=tm();Mv.h||(Mv.h=new Mv);h=Mv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:p,consistencyTokenJars:n});!R("web_prequest_context_killswitch")&&(t=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);p=kn();t=nn(58);p=p.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);p&&(g.user.lockedSafetyMode=
!0);R("warm_op_csn_cleanup")?e&&(f=qu())&&(g.clientScreenNonce=f):!f&&(f=qu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Sv().setLocationOnInnerTubeContext(g);try{var v=km(),x=v.bid;delete v.bid;g.adSignalsInfo={params:[],bid:x};var y=z(Object.entries(v));for(var F=y.next();!F.done;F=y.next()){var I=z(F.value),V=I.next().value,ia=I.next().value;v=V;x=ia;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:v,value:""+
x})}var Ja,cb;if(((Ja=g.client)==null?void 0:Ja.clientName)==="TVHTML5"||((cb=g.client)==null?void 0:cb.clientName)==="TVHTML5_UNPLUGGED"){var aa=P("INNERTUBE_CONTEXT");aa.adSignalsInfo&&(g.adSignalsInfo.advertisingId=aa.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=aa.adSignalsInfo.limitAdTracking)}}catch(na){Yt(na)}y=g}else Yt(Error("Error: No InnerTubeContext shell provided in ytconfig.")),y={};y={context:y};
if(F=this.i(a)){this.h(y,F,b);var X;b="/youtubei/v1/"+Zv(this.j());(F=(X=ft(a.commandMetadata,zl))==null?void 0:X.apiUrl)&&(b=F);X=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(X=String(b)+String(dc(X)));b={};R("json_condensed_response")&&(b.prettyPrint="false");X=im(X,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:X,eb:Au(X),La:y,config:a};a.config.Vb?a.config.Vb.identity=c:a.config.Vb={identity:c};return a}Yt(new S("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties($v.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function aw(){}
w(aw,$v);function bw(){}
w(bw,aw);bw.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",eb:Au("/getDatasyncIdsEndpoint","GET"),La:{}}};
bw.prototype.j=function(){return[]};
bw.prototype.i=function(){};
bw.prototype.h=function(){};var cw={},dw=(cw.GET_DATASYNC_IDS=Wv(bw),cw);function ew(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function fw(){var a=ew();a.info||(a.info={});return a.info}
function gw(a){a=ew(a);a.metadata||(a.metadata={});return a.metadata}
function hw(a){a=ew(a);a.tick||(a.tick={});return a.tick}
function iw(a){a=ew(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function jw(a){a=iw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function kw(a){var b=ew(a).nonce;b||(b=gu(),ew(a).nonce=b);return b}
;function lw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function mw(a){a=a||"";var b=E("ytcsi.reference");b||(lw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=lw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},nw=(U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",U["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",U["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",U["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",U["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",U["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",U["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",U["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",U["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",U["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",U["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",U["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",U["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",U["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",U["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",U["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",U["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",U["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",U["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",U["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
U["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",U["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",U["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",U["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",U["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",U["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",U["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",U["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",U["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",U["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",U["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",U["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",U["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",U["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
U["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",U["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",U["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",U["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",U["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",U["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",U["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",U["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",U["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",U["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",U["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U),W={},ow=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W.app_startup="LATENCY_ACTION_APP_STARTUP",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",W.channels="LATENCY_ACTION_CHANNELS",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",W.editor="LATENCY_ACTION_EDITOR",W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.favorites="LATENCY_ACTION_FAVORITES",W.home="LATENCY_ACTION_HOME",W.inboarding="LATENCY_ACTION_INBOARDING",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
W.management="LATENCY_ACTION_MANAGEMENT",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",W.onboarding="LATENCY_ACTION_ONBOARDING",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",
W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.projects="LATENCY_ACTION_PROJECTS",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",W.review="LATENCY_ACTION_REVIEW",W.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",W.search_ui="LATENCY_ACTION_SEARCH_UI",
W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",
W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
W.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",W);Object.assign(ow,nw);function pw(a,b){gq.call(this,1,arguments);this.timer=b}
w(pw,gq);var qw=new hq("aft-recorded",pw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var rw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",rw);function sw(){this.h=0}
function tw(){sw.h||(sw.h=new sw);return sw.h}
sw.prototype.tick=function(a,b,c,d){uw(this,"tick_"+a+"_"+b)||mo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
sw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");uw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,mo("latencyActionInfo",a,{cttAuthInfo:c}))};
sw.prototype.jspbInfo=function(){};
sw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");uw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,mo("latencyActionSpan",a,{cttAuthInfo:c}))};
function uw(a,b){rw[b]=rw[b]||{count:0};var c=rw[b];c.count++;c.time=T();a.h||(a.h=xn(function(){var d=T(),e;for(e in rw)rw[e]&&d-rw[e].time>6E4&&delete rw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||Zt(c)),!0):!1}
;var vw=window;function ww(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function xw(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=yw(e.requestStart),e.responseEnd=yw(e.responseEnd),e.redirectStart=yw(e.redirectStart),e.redirectEnd=yw(e.redirectEnd),e.domainLookupEnd=yw(e.domainLookupEnd),e.connectStart=yw(e.connectStart),e.connectEnd=
yw(e.connectEnd),e.responseStart=yw(e.responseStart),e.secureConnectionStart=yw(e.secureConnectionStart),e.domainLookupStart=yw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=R("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function yw(a){return Math.round(zw()+a)}
function zw(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=vw.performance||vw.mozPerformance||vw.msPerformance||vw.webkitPerformance||new ww;var Aw=!1,Bw=!1,Cw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Wa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||ki,Y);function Dw(a,b){if(!R("web_csi_action_sampling_enabled")||!ew(b).actionDisabled){var c=mw(b||"");iv(c.info,a);a.loadType&&(c=a.loadType,gw(b).loadType=c);iv(jw(b),a);c=kw(b);b=ew(b).cttAuthInfo;tw().info(a,c,b)}}
function Ew(){var a,b,c,d;return((d=Hs().resolve(new Bs(Wp))==null?void 0:(a=Xp())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!R("web_csi_action_sampling_enabled")||!ew(c).actionDisabled){var d=kw(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(Hs().resolve(new Bs(Wp))==null?0:Xp())&&!Bw&&(Bw=!0,Z("gcfl",T(),c));var f,g,h;e=(Hs().resolve(new Bs(Wp))==null?void 0:(f=Xp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Ew();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;ew(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Dw(f,c));ew(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||R("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=mw(c||"");e.tick[a]=b||T();if(e.callback&&e.callback[a])for(e=z(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=iw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=hw(c);e=b||T();R("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=ew(c).cttAuthInfo;a==="_start"?(a=tw(),uw(a,"baseline_"+d)||mo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):tw().tick(a,d,b,f);Fw(c);return e}}}
function Gw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Zr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Hw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=z(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Iw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Hb(window)&&a.setAttribute("nonce",Hb(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=zw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Jw(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Ob(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Qb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",yw(b.startTime)),Z("wffe",yw(b.responseEnd)))}
function Kw(a){var b=Lw("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Lw(b[d],a);if(e)return e}return NaN}
function Lw(a,b){if(a=hw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Fw(a){var b=Lw("_start",a),c=Kw(a),d=R("enable_cow_info_csi")||!Aw;b&&c&&d&&(mq(qw,new pw(Math.round(c-b),a)),Aw=!0)}
function Mw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Rb(a,function(c){return c.name==="first-paint"}))return yw(a.startTime)}var b;
R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.zh;return b?Math.max(0,b):0}
;function Nw(a,b){Xl(function(){mw("").info.actionType=a;b&&Tl("TIMING_AFT_KEYS",b);Tl("TIMING_ACTION",a);var c=Hw();Object.keys(c).length>0&&Dw(c);c={isNavigation:!0,actionType:ow[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=ow[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=qu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Gw();if(d===1||d===-1)c.isVisible=!0;gw();fw();
c.loadType="cold";d=fw();var e=xw(),f=zw(),g=P("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=Mw();d>0&&Z("fpt",d);d=xw();d.isPerformanceNavigationTiming&&Dw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=zw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Jw();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Cw)Cw.hasOwnProperty(h)&&(e=Cw[h],
Iw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=z(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Dw(c);c=iw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=jw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(gw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=hw();e=iw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,Lw(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
z(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=z(h);for(e=h.next();!e.done;e=h.next())d=e.value,iv(c,d),iv(k,d),d=!0;d&&Dw(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Ow()&&Kw()&&Fw()})()}
function Ow(){return Xl(function(){return Pw()})()}
function Qw(a,b,c){Xl(Dw)(a,b,c===void 0?!1:c)}
function Rw(a,b,c){return Xl(Z)(a,b,c)}
function Pw(){return Xl(function(){return"_start"in hw()})()}
function Sw(){Xl(function(){var a=kw();requestAnimationFrame(function(){setTimeout(function(){a===kw()&&Rw("ol",void 0,void 0)},0)})})()}
var Tw=window;Tw.ytcsi&&(Tw.ytcsi.infoGel=Qw,Tw.ytcsi.tick=Rw);var Uw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),Vw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Ww(a,b,c,d){this.D=a;this.ea=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Pb||(a.Pb={});a.Pb=Object.assign({},dw,a.Pb)}
function Xw(a,b,c,d){if(Ww.h!==void 0){if(d=Ww.h,a=[a!==d.D,b!==d.ea,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new S("InnerTubeTransportService is already initialized",a);
}else Ww.h=new Ww(a,b,c,d)}
function Yw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?bn:c;var d=Zw(a,b);return d?new mi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new S("Error: Failed to build request for command.",b));n.F(0);break}Hv(h.input);l=((k=h.eb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.ef){var p=h.config,t;p=p==null?void 0:(t=p.Vb)==null?void 0:t.sessionIndex;t=an(0,{sessionIndex:p});m=Object.assign({},
Tv(l),t);n.F(4);break}return n.yield($w(h.config,l),5);case 5:m=n.i;case 4:e(ax(a,h,m)),n.h=0}})}):ri(new S("Error: No request builder found for command.",b))}
function bx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=z(Uw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function ax(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,y,F,I,V,ia,Ja,cb,aa,X,na,Na,Ma,Yg,Zg,Pr,Qr,Rr,Sr;return A(function(ha){switch(ha.h){case 1:ha.F(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.La)==null?0:g.context)){ha.F(4);break}h=b.La.context;ha.F(5);break;case 5:k=z([]),l=k.next();case 8:if(l.done){ha.F(4);break}m=l.value;return ha.yield(m.Bh(h),9);case 9:l=k.next();ha.F(8);break;case 4:if((n=a.i)==null||!n.Gh(b.input,b.La)){ha.F(12);break}return ha.yield(a.i.vh(b.input,
b.La),13);case 13:return p=ha.i,bx(a,p,b),ha.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Eh)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.La),V=(I=(F=b.eb)==null?void 0:F.headers)!=null?I:{},b.eb=Object.assign({},b.eb,{headers:Object.assign({},V,c)}),ia=Object.assign({},b.eb),b.eb.method==="POST"&&(ia=Object.assign({},ia,{body:y})),((Ja=b.config)==null?0:Ja.Ie)&&Rw(b.config.Ie),cb=function(){return a.ea.fetch(b.input,ia,b.config)},t=cb(),x&&a.h.set(x,t)),ha.yield(t,14);
case 14:if((aa=ha.i)&&"error"in aa&&((X=aa)==null?0:(na=X.error)==null?0:na.details))for(Na=aa.error.details,Ma=z(Na),Yg=Ma.next();!Yg.done;Yg=Ma.next())Zg=Yg.value,(Pr=Zg["@type"])&&Vw.indexOf(Pr)>-1&&(delete Zg["@type"],aa=Zg);x&&a.h.has(x)&&a.h.delete(x);((Qr=b.config)==null?0:Qr.Je)&&Rw(b.config.Je);if(aa||(Rr=a.i)==null||!Rr.jh(b.input,b.La)){ha.F(15);break}return ha.yield(a.i.uh(b.input,b.La),16);case 16:aa=ha.i;case 15:return bx(a,aa,b),((Sr=b.config)==null?0:Sr.Fe)&&Rw(b.config.Fe),d(),ha.return(aa||
void 0)}})}
function Zw(a,b){a:{a=a.D;var c,d=(c=ft(b,Al))==null?void 0:c.signal;if(d&&a.Pb&&(c=a.Pb[d])){var e=c();break a}var f;if((c=(f=ft(b,yl))==null?void 0:f.request)&&a.Td&&(f=a.Td[c])){e=f();break a}for(e in b)if(a.Zc[e]&&(b=a.Zc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function $w(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Vb)==null?void 0:d.sessionIndex;var h=g.yield;var k=an(0,{sessionIndex:e});if(!(k instanceof mi)){var l=new mi(ki);ni(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Tv(b),f)))})}
;var cx=new As("INNERTUBE_TRANSPORT_TOKEN");function dx(){}
w(dx,aw);dx.prototype.j=function(){return Vu};
dx.prototype.i=function(a){return ft(a,Kl)||void 0};
dx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(dx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ex(){}
w(ex,aw);ex.prototype.j=function(){return Wu};
ex.prototype.i=function(a){return ft(a,Jl)||void 0};
ex.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(ex.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var fx=new As("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function gx(a){this.u=a}
w(gx,aw);gx.prototype.j=function(){return Qu};
gx.prototype.i=function(a){return ft(a,El)||ft(a,Fl)||ft(a,Dl)};
gx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
gx[zs]=[fx];function hx(){}
w(hx,aw);hx.prototype.j=function(){return Su};
hx.prototype.i=function(a){return ft(a,Cl)||void 0};
hx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(hx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ix(){}
w(ix,aw);ix.prototype.j=function(){return Tu};
ix.prototype.i=function(a){return ft(a,Il)||void 0};
ix.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function jx(){}
w(jx,aw);jx.prototype.j=function(){return Uu};
jx.prototype.i=function(a){return ft(a,Hl)||void 0};
jx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function kx(){}
w(kx,aw);kx.prototype.j=function(){return Ru};
kx.prototype.i=function(a){return ft(a,Gl)};
kx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var lx=new As("FETCH_FN_TOKEN"),mx=new As("PARSE_FN_TOKEN");function nx(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;S.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(nx,S);var ox=new As("NETWORK_SLI_TOKEN");function px(a,b,c){this.h=a;this.i=b;this.j=c}
px.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=qx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){Zt(k);
if((c==null?0:c.be)&&k instanceof nx&&k.errorType===1)return Promise.reject(k)}))})};
function qx(a,b,c){if(a.h){var d=ac(bc(5,mc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=Oq(c));return new window.Request(b,a)}
px.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.te)&&a.ok)return Qf(b.te,e);e=e.replace(")]}'","");if((b==null?0:b.be)&&e)try{var f=d(e)}catch(h){throw new nx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.ph(),c=c.then(function(e){Zt(new S("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
px[zs]=[new Bs(ox),new Bs(lx),new Bs(mx)];var rx=new As("NETWORK_MANAGER_TOKEN");var sx;function tx(){var a,b,c;return A(function(d){if(d.h==1)return a=Hs().resolve(cx),a?d.yield(Yw(a),2):(Zt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Zt(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.mh;return d.return(c)}Zt(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function ux(){var a;return(a=P("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var vx=C.caches,wx;function xx(a){var b=a.indexOf(":");return b===-1?{pd:a}:{pd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function yx(){return A(function(a){if(wx!==void 0)return a.return(wx);wx=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(vx.open("test-only"),4);case 4:return d.yield(vx.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(wx)})}
function zx(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(yx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(vx.keys(),3)}c=k.i;d=z(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=xx(f),h=g.datasyncId,!h||a.includes(h)||b.push(vx.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Ax(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(yx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=vn("cache contains other");return h.yield(vx.keys(),3)}b=h.i;c=z(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=xx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Bx(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Cx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Dx(a){if(Bx()){var b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Cx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Ex(){if(!Bx())return!1;var a=vn(),b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=Cx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Fx(){tx().then(function(a){a&&(Bp(a),zx(a),Ev(a),Dx(a))})}
function Gx(){var a=new Gr;Dj.oa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=vn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Bp(h);zx(h);Ev(h);Dx(h);return g.return()}c=Fv();d=Ex();return g.yield(Ax(),3);case 3:return e=g.i,g.yield(Cp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?Fx():a.h.add("publicytnetworkstatus-online",Fx,!0,void 0,void 0),g.h=0}})})}
;function Hx(){this.state=1;this.h=null}
r=Hx.prototype;r.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=jb(),f=new Ib(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=rl(a.interpreterSafeUrl).toString());Ix(this,d,e,a.program,b,c)}else Zt(Error("Cannot initialize botguard without program"))};
function Ix(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,Zu(c,function(){window[g]?Jx(a,d,g,e):(a.state=3,av(c),Zt(new S("Unable to load Botguard","from "+c)))},f)):b?(f=Fg("SCRIPT"),b instanceof Ib?Kb(f,b):f.textContent=b,f.nonce=Hb(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Jx(a,d,g,e):(a.state=4,Zt(new S("Unable to load Botguard from JS")))):Zt(new S("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function Jx(a,b,c,d){a.state=5;try{var e=new pj({program:b,je:c,ze:{disable:!R("att_web_record_metrics"),Ea:"aGIf"}});e.Ze.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&Zt(f)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.Tc()?this.Ed({bd:a}):null};
r.dispose=function(){this.Qc(null);this.state=8};
r.Tc=function(){return!!this.h};
r.Ed=function(a){return this.h.xd(a)};
r.Qc=function(a){tc(this.h);this.h=a};var Kx=[],Lx=!1;function Mx(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Bu()){var a=P("PLAYER_VARS",{});if(wg(a)!="1"&&!Cu(a)){var b=function(){Lx=!0;"google_ad_status"in window?Tl("DCLKSTAT",1):Tl("DCLKSTAT",2)};
try{Zu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Kx.push(Dj.oa(function(){if(!(Lx||"google_ad_status"in window)){try{cv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Lx=!0;Tl("DCLKSTAT",3)}},5E3))}}}
function Nx(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function Ox(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Px(){Hx.apply(this,arguments)}
w(Px,Hx);Px.prototype.Qc=function(a){var b;(b=Ox())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.xd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Px.prototype.Tc=function(){return!!Ox()};
Px.prototype.Ed=function(a){return Ox().bgvmc(a)};function Qx(a){Rs.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.H},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Qx,Rs);Qx.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Qx.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Qx.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Qx.prototype.i=function(){this.h=new Map};function Rx(a){Rs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Rx,Rs);Rx.prototype.i=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Rx.prototype.h=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Rx.prototype.D=function(a,b){a(b==null?void 0:b.event)};
Rx.prototype.u=function(a,b){a(b==null?void 0:b.event)};function Sx(){this.o=new Qx;this.D=new Rx}
Sx.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function Tx(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Tx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=qu(c===void 0?0:c)){a=this.client;d=new ju({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=zv(d,c);vv.set(f,!0);Av(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=yv({cttAuthInfo:su(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Bv("visualElementGestured",f,d):a?Qt("visualElementGestured",d,a,f):mo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Tx.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new ju({trackingParams:a}),b,c===void 0?0:c)};
Tx.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=qu(d);a||(a=(a=nu(d===void 0?0:d))?new ju({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=yv({cttAuthInfo:su(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Bv("visualElementStateChanged",d,b):a?Qt("visualElementStateChanged",b,a,d):mo("visualElementStateChanged",b,d))}};
function Ux(a,b){if(b===void 0)for(var c=pu(),d=0;d<c.length;d++)c[d]!==void 0&&Ux(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&xv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Vx(){Sx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));R("web_log_cfg_cee_ks")||xn(Wx)}
w(Vx,Sx);Vx.prototype.j=function(){mo("finalPayload",{csn:qu()})};
Vx.prototype.h=function(){du(eu)};
Vx.prototype.i=function(){var a=Ux;Tx.h||(Tx.h=new Tx);a(Tx.h)};
function Wx(){var a=P("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Yd();a=z(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&mo("genericClientExperimentEvent",{eventType:c});delete Sl.CLIENT_EXPERIMENT_EVENTS}}
;function Xx(){}
function Yx(){var a=E("ytglobal.storage_");a||(a=new Xx,D("ytglobal.storage_",a));return a}
Xx.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Zx()):d.return()})};
function Zx(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Xx);function ko(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
ko.prototype.Da=function(a){this.handleError(a)};
ko.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":$x(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function $x(a,b){Yx().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:ay(c==null?void 0:c.usage),deviceStorageQuotaMbytes:ay(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function ay(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var by={},cy=(by["api.invalidparam"]=2,by.auth=150,by["drm.auth"]=150,by["heartbeat.net"]=150,by["heartbeat.servererror"]=150,by["heartbeat.stop"]=150,by["html5.unsupportedads"]=5,by["fmt.noneavailable"]=5,by["fmt.decode"]=5,by["fmt.unplayable"]=5,by["html5.missingapi"]=5,by["html5.unsupportedlive"]=5,by["drm.unavailable"]=5,by["mrm.blocked"]=151,by["embedder.identity.denied"]=152,by);var dy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function ey(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function fy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=z(dy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function gy(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function hy(a){G.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.B=[];this.R={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=R("web_player_split_event_bus_iframe");this.o=P("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.H=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",iy(b));b.sendMessage("onReady");e=z(b.B);for(d=e.next();!d.done;d=e.next())jy(b,d.value);b.B=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.R[e]||e==="onReady"||
(c=ky(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.R[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&ey(e)){var f=d;if(Qa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=fy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=fy(g);break;case "loadPlaylist":case "cuePlaylist":g=gy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);ey(e)&&ly(b,iy(b))}}}};
my.addEventListener("message",this.H);if(a=P("WIDGET_ID"))this.sessionId=a;ny(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?cy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
ny(this,"onVideoProgress",this.Ue.bind(this));ny(this,"onVolumeChange",this.Ve.bind(this));ny(this,"onApiChange",this.Ne.bind(this));ny(this,"onPlaybackQualityChange",this.Re.bind(this));ny(this,"onPlaybackRateChange",this.Se.bind(this));ny(this,"onStateChange",this.Te.bind(this));ny(this,"onWebglSettingsChanged",this.We.bind(this));ny(this,"onCaptionsTrackListChanged",this.Oe.bind(this));ny(this,"captionssettingschanged",this.Pe.bind(this))}
w(hy,G);function ly(a,b){a.sendMessage("infoDelivery",b)}
r=hy.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?jy(this,a):this.B.push(a)};
function ky(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function ny(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function iy(a){if(!a.api)return null;var b=a.api.getApiInterface();Sb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.Te=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());ly(this,a)};
r.Re=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());ly(this,a)};
r.Se=function(a){ly(this,{playbackRate:a})};
r.Ne=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.Ve=function(){ly(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.Ue=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());ly(this,a)};
r.We=function(){ly(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.Oe=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};ly(this,a)}};
r.Pe=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};ly(this,a)}};
function jy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){Zt(d)}}}
r.aa=function(){G.prototype.aa.call(this);my.removeEventListener("message",this.H);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var my=window;function oy(a,b,c){G.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=R("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.da){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=py(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=qy(g,f))&&ry(d,g,f))}}}}}};
sy.addEventListener("message",this.i);ry(this,"RECEIVING")}
w(oy,G);r=oy.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.Qe.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.Qe=function(a,b){this.da||ry(this,a,ty(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function py(a,b){switch(a){case "loadVideoById":return[fy(b)];case "cueVideoById":return[fy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[gy(b)];case "cuePlaylist":return[gy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function qy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function ty(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function ry(a,b,c){a.da||(b={id:a.id,command:b},c&&(b.data=c),uy.postMessage(JSON.stringify(b),a.origin))}
r.aa=function(){sy.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.aa.call(this)};
var sy=window,uy=window.parent;var vy=new Px;function wy(){return vy.Tc()}
function xy(a){a=a===void 0?{}:a;return vy.invoke(a)}
;function yy(a,b,c,d,e){G.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.xc=e;this.zb=!1;this.api={};this.ia=this.u=null;this.U=new M;this.h={};this.Z=this.sa=this.elementId=this.Ab=this.config=null;this.Y=!1;this.j=this.H=null;this.Va={};this.yc=["onReady"];this.lastError=null;this.Tb=NaN;this.R={};this.ga=0;this.i=this.o=a;vc(this,this.U);zy(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Ay(this),By(this))}
w(yy,G);r=yy.prototype;r.getId=function(){return this.B};
r.loadNewVideoConfig=function(a){if(!this.da){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof Pu||(b=new Pu(b));this.config=b;this.setConfig(a);By(this);this.isReady()&&Cy(this)}};
function Ay(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Ab=a;this.config=Dy(a);Ay(this);if(!this.sa){var b;this.sa=Ey(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=xj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=xj(Number(a)||a))};
function Cy(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Fy(a){var b=!0,c=Gy(a);c&&a.config&&(b=c.dataset.version===Hy(a));return b&&!!E("yt.player.Application.create")}
function By(a){if(!a.da&&!a.Y){var b=Fy(a);if(b&&(Gy(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||Iy(a);else if(Jy(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Iy(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=Ky(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Dy(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.xc);Iy(a)};
a.Y=!0;b?a.H():(Zu(Hy(a),a.H),(b=Ly(a))&&fv(b||""),My(a)&&!c&&D("yt.player.Application.create",null))}}}
function Gy(a){var b=Eg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Iy(a){if(!a.da){var b=Gy(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Ky(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Ny(a)}else a.Tb=setTimeout(function(){Iy(a)},50)}}
function Ny(a){zy(a);a.zb=!0;var b=Gy(a);if(b){a.u=Oy(a,b,"addEventListener");a.ia=Oy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Oy(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);Cy(a);a.sa&&a.sa(a.api);a.U.ib("onReady",a.api)}
function Oy(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new S("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function zy(a){a.zb=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&clearTimeout(Number(c));a.R={};a.u=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ab};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.zb};
r.addEventListener=function(a,b){var c=this,d=Ey(this,b);d&&(Mb(this.yc,a)>=0||this.h[a]||(b=Py(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.da||(b=Ey(this,b))&&this.U.unsubscribe(a,b)};
function Ey(a,b){var c=b;if(typeof b==="string"){if(a.Va[b])return a.Va[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new S("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Va[b]=c}return c?c:null}
function Py(a,b){function c(d){function e(){if(!a.da)try{a.U.ib(b,d!=null?d:void 0)}catch(h){var g=new S("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Sd});g.level="WARNING";throw g;}}
if(Ky(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.R,h=String(f);h in g&&delete g[h]},0);
vg(a.R,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(Gy(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function Jy(a){a.cancel();zy(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=Gy(a);b&&(Fy(a)||!My(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.H&&cv(Hy(this),this.H);clearTimeout(this.Tb);this.Y=!1};
r.aa=function(){Jy(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new S("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Va=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ab=this.config=this.api=null;delete this.o;delete this.i;G.prototype.aa.call(this)};
function My(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Hy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Ly(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ky(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Dy(a){for(var b={},c=z(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?yg(e):e}return b}
;var Qy={},Ry="player_uid_"+(Math.random()*1E9>>>0);function Sy(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Eg(c):c;var e=Ry+"_"+Ra(c),f=Qy[e];if(f&&d)return Ty(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new yy(c,e,a,b,void 0);Qy[e]=f;f.addOnDisposeCallback(function(){delete Qy[f.getId()]});
return f.api}
function Ty(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Uy=null,Vy=null;
function Wy(){Sw();var a=kn(),b=nn(119),c=window.devicePixelRatio>1;if(document.body&&Lj(document.body,"exp-invert-logo"))if(c&&!Lj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Lj(d,"inverted-hdpi")){var e=Jj(d);Kj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Lj(document.body,"inverted-hdpi")&&Mj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=on(b)||0;d=c?d|67108864:d&-67108865;d===0?delete gn[b]:(c=d.toString(16),gn[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in gn)gn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(gn[f])));var f=d.join("&");cn(b,f,63072E3,a.i,c)}}
function Xy(){Yy()}
function Zy(){Rw("ep_init_pr");Yy()}
function Yy(){var a=Uy.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function $y(){Uy&&Uy.sendAbandonmentPing&&Uy.sendAbandonmentPing();P("PL_ATT")&&vy.dispose();for(var a=Dj,b=0,c=Kx.length;b<c;b++)a.pa(Kx[b]);Kx.length=0;av("//static.doubleclick.net/instream/ad_status.js");Lx=!1;Tl("DCLKSTAT",0);uc(Vy);Uy&&(Uy.removeEventListener("onVideoDataChange",Xy),Uy.destroy())}
;D("yt.setConfig",Tl);D("yt.config.set",Tl);D("yt.setMsg",Yu);D("yt.msgs.set",Yu);D("yt.logging.errors.log",Yt);
D("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}Jv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Nw("embed",["ol"]);c=ux();if(!c.serializedForcedExperimentIds){var d=gm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&Nw("watch",["pbs","pbu","pbp"]);Uy=Sy(a,c);Uy.addEventListener("onVideoDataChange",Xy);Uy.addEventListener("onReady",Zy);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Vy=new hy(Uy):P("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Vy=new oy(Uy,a,b));Mx();R("ytidb_create_logger_embed_killswitch")||jo();a={};Vx.h||(Vx.h=new Vx);Vx.h.install((a.flush_logs={callback:function(){Dt()}},a));
Wr();R("ytidb_clear_embedded_player")&&Dj.oa(function(){var f,g;if(!sx){var h=Hs();Ds(h,{qc:rx,Bd:px});var k={Zc:{feedbackEndpoint:Wv(hx),modifyChannelNotificationPreferenceEndpoint:Wv(ix),playlistEditEndpoint:Wv(jx),shareEntityEndpoint:Wv(gx),subscribeEndpoint:Wv(dx),unsubscribeEndpoint:Wv(ex),webPlayerShareEntityServiceEndpoint:Wv(kx)}},l=Sv(),m={};l&&(m.client_location=l);f===void 0&&(f=$m());g===void 0&&(g=h.resolve(rx));Xw(k,g,f,m);Ds(h,{qc:cx,Cd:Ww.h});sx=h.resolve(cx)}Gx()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||wy);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||xy);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Nx);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Iv);D("yt.util.activity.init",E("yt.util.activity.init")||ks);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||ns);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||ls);window.addEventListener("load",Xl(function(){Wy()}));
window.addEventListener("pageshow",Xl(function(a){a.persisted||Wy()}));
window.addEventListener("pagehide",Xl(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?$y():a.persisted||$y()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Ul("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new S(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!R("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Sd)f||(f={}),f.componentStack=Rt(m)}f&&bu(e,f);g?Yt(e):Zt(e)}};
Ci=$t;window.addEventListener("unhandledrejection",function(a){$t(a.reason)});
Nb(P("ERRORS")||[],function(a){Yt.apply(null,a)});
Tl("ERRORS",[]);}).call(this);
