/**
 * @description Salinity Engine
 * @about       Easy to use JavaScript game engine.
 * @author      Stephens Nunnally <@stevinz>
 * @version     v0.0.1
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/engine
 */
const VERSION = '0.0.1';
const APP_SIZE = 1000;
const APP_ORIENTATION = {
    PORTRAIT:       'portrait',
    LANDSCAPE:      'landscape',
};
const WORLD_TYPES = [
    'World2D',
    'WorldUI',
];

/*!
 * PixiJS - v8.0.0
 * Compiled Tue, 05 Mar 2024 17:44:00 UTC
 *
 * PixiJS is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Kx=Object.defineProperty,qx=Object.defineProperties,Zx=Object.getOwnPropertyDescriptors,Ju=Object.getOwnPropertySymbols,Qx=Object.prototype.hasOwnProperty,Jx=Object.prototype.propertyIsEnumerable,tl=(r,t,e)=>t in r?Kx(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,el=(r,t)=>{for(var e in t||(t={}))Qx.call(t,e)&&tl(r,e,t[e]);if(Ju)for(var e of Ju(t))Jx.call(t,e)&&tl(r,e,t[e]);return r},tb=(r,t)=>qx(r,Zx(t)),b=(r=>(r.Application="application",r.WebGLPipes="webgl-pipes",r.WebGLPipesAdaptor="webgl-pipes-adaptor",r.WebGLSystem="webgl-system",r.WebGPUPipes="webgpu-pipes",r.WebGPUPipesAdaptor="webgpu-pipes-adaptor",r.WebGPUSystem="webgpu-system",r.CanvasSystem="canvas-system",r.CanvasPipesAdaptor="canvas-pipes-adaptor",r.CanvasPipes="canvas-pipes",r.Asset="asset",r.LoadParser="load-parser",r.ResolveParser="resolve-parser",r.CacheParser="cache-parser",r.DetectionParser="detection-parser",r.MaskEffect="mask-effect",r.BlendMode="blend-mode",r.TextureSource="texture-source",r.Environment="environment",r))(b||{});const Fi=r=>{if(typeof r=="function"||typeof r=="object"&&r.extension){const t=typeof r.extension!="object"?{type:r.extension}:r.extension;r=tb(el({},t),{ref:r});}if(typeof r=="object")r=el({},r);else throw new Error("Invalid extension type");return typeof r.type=="string"&&(r.type=[r.type]),r},tr=(r,t)=>{var e;return (e=Fi(r).priority)!=null?e:t},D={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...r){return r.map(Fi).forEach(t=>{t.type.forEach(e=>{var s,i;return (i=(s=this._removeHandlers)[e])==null?void 0:i.call(s,t)});}),this},add(...r){return r.map(Fi).forEach(t=>{t.type.forEach(e=>{var s,i;const n=this._addHandlers,o=this._queue;n[e]?(i=n[e])==null||i.call(n,t):(o[e]=o[e]||[],(s=o[e])==null||s.push(t));});}),this},handle(r,t,e){var s;const i=this._addHandlers,n=this._removeHandlers;i[r]=t,n[r]=e;const o=this._queue;return o[r]&&((s=o[r])==null||s.forEach(a=>t(a)),delete o[r]),this},handleByMap(r,t){return this.handle(r,e=>{e.name&&(t[e.name]=e.ref);},e=>{e.name&&delete t[e.name];})},handleByNamedList(r,t,e=-1){return this.handle(r,s=>{t.findIndex(i=>i.name===s.name)>=0||(t.push({name:s.name,value:s.ref}),t.sort((i,n)=>tr(n.value,e)-tr(i.value,e)));},s=>{const i=t.findIndex(n=>n.name===s.name);i!==-1&&t.splice(i,1);})},handleByList(r,t,e=-1){return this.handle(r,s=>{t.includes(s.ref)||(t.push(s.ref),t.sort((i,n)=>tr(n,e)-tr(i,e)));},s=>{const i=t.indexOf(s.ref);i!==-1&&t.splice(i,1);})}};var qA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Di(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function ZA(r){return r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function QA(r){return r&&Object.prototype.hasOwnProperty.call(r,"default")&&Object.keys(r).length===1?r.default:r}function JA(r){if(r.__esModule)return r;var t=r.default;if(typeof t=="function"){var e=function s(){return this instanceof s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype;}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var i=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:function(){return r[s]}});}),e}var Ui={exports:{}},tP=Ui.exports;(function(r){"use strict";var t=Object.prototype.hasOwnProperty,e="~";function s(){}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(e=!1));function i(u,l,h){this.fn=u,this.context=l,this.once=h||!1;}function n(u,l,h,c,d){if(typeof h!="function")throw new TypeError("The listener must be a function");var f=new i(h,c||u,d),p=e?e+l:l;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],f]:u._events[p].push(f):(u._events[p]=f,u._eventsCount++),u}function o(u,l){--u._eventsCount===0?u._events=new s:delete u._events[l];}function a(){this._events=new s,this._eventsCount=0;}a.prototype.eventNames=function(){var l=[],h,c;if(this._eventsCount===0)return l;for(c in h=this._events)t.call(h,c)&&l.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(h)):l},a.prototype.listeners=function(l){var h=e?e+l:l,c=this._events[h];if(!c)return [];if(c.fn)return [c.fn];for(var d=0,f=c.length,p=new Array(f);d<f;d++)p[d]=c[d].fn;return p},a.prototype.listenerCount=function(l){var h=e?e+l:l,c=this._events[h];return c?c.fn?1:c.length:0},a.prototype.emit=function(l,h,c,d,f,p){var g=e?e+l:l;if(!this._events[g])return !1;var m=this._events[g],_=arguments.length,x,v;if(m.fn){switch(m.once&&this.removeListener(l,m.fn,void 0,!0),_){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,h),!0;case 3:return m.fn.call(m.context,h,c),!0;case 4:return m.fn.call(m.context,h,c,d),!0;case 5:return m.fn.call(m.context,h,c,d,f),!0;case 6:return m.fn.call(m.context,h,c,d,f,p),!0}for(v=1,x=new Array(_-1);v<_;v++)x[v-1]=arguments[v];m.fn.apply(m.context,x);}else {var y=m.length,S;for(v=0;v<y;v++)switch(m[v].once&&this.removeListener(l,m[v].fn,void 0,!0),_){case 1:m[v].fn.call(m[v].context);break;case 2:m[v].fn.call(m[v].context,h);break;case 3:m[v].fn.call(m[v].context,h,c);break;case 4:m[v].fn.call(m[v].context,h,c,d);break;default:if(!x)for(S=1,x=new Array(_-1);S<_;S++)x[S-1]=arguments[S];m[v].fn.apply(m[v].context,x);}}return !0},a.prototype.on=function(l,h,c){return n(this,l,h,c,!1)},a.prototype.once=function(l,h,c){return n(this,l,h,c,!0)},a.prototype.removeListener=function(l,h,c,d){var f=e?e+l:l;if(!this._events[f])return this;if(!h)return o(this,f),this;var p=this._events[f];if(p.fn)p.fn===h&&(!d||p.once)&&(!c||p.context===c)&&o(this,f);else {for(var g=0,m=[],_=p.length;g<_;g++)(p[g].fn!==h||d&&!p[g].once||c&&p[g].context!==c)&&m.push(p[g]);m.length?this._events[f]=m.length===1?m[0]:m:o(this,f);}return this},a.prototype.removeAllListeners=function(l){var h;return l?(h=e?e+l:l,this._events[h]&&o(this,h)):(this._events=new s,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,r.exports=a;})(Ui);var eb=Ui.exports,mt=Di(eb),rb={grad:.9,turn:360,rad:360/(2*Math.PI)},Nt=function(r){return typeof r=="string"?r.length>0:typeof r=="number"},it=function(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*r)/e+0},Et=function(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),r>e?e:r>t?r:t},rl=function(r){return (r=isFinite(r)?r%360:0)>0?r:r+360},sl=function(r){return {r:Et(r.r,0,255),g:Et(r.g,0,255),b:Et(r.b,0,255),a:Et(r.a)}},ki=function(r){return {r:it(r.r),g:it(r.g),b:it(r.b),a:it(r.a,3)}},sb=/^#([0-9a-f]{3,8})$/i,Zr=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},il=function(r){var t=r.r,e=r.g,s=r.b,i=r.a,n=Math.max(t,e,s),o=n-Math.min(t,e,s),a=o?n===t?(e-s)/o:n===e?2+(s-t)/o:4+(t-e)/o:0;return {h:60*(a<0?a+6:a),s:n?o/n*100:0,v:n/255*100,a:i}},nl=function(r){var t=r.h,e=r.s,s=r.v,i=r.a;t=t/360*6,e/=100,s/=100;var n=Math.floor(t),o=s*(1-e),a=s*(1-(t-n)*e),u=s*(1-(1-t+n)*e),l=n%6;return {r:255*[s,a,o,o,u,s][l],g:255*[u,s,s,a,o,o][l],b:255*[o,o,u,s,s,a][l],a:i}},ol=function(r){return {h:rl(r.h),s:Et(r.s,0,100),l:Et(r.l,0,100),a:Et(r.a)}},al=function(r){return {h:it(r.h),s:it(r.s),l:it(r.l),a:it(r.a,3)}},ul=function(r){return nl((e=(t=r).s,{h:t.h,s:(e*=((s=t.l)<50?s:100-s)/100)>0?2*e/(s+e)*100:0,v:s+e,a:t.a}));var t,e,s;},er=function(r){return {h:(t=il(r)).h,s:(i=(200-(e=t.s))*(s=t.v)/100)>0&&i<200?e*s/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,e,s,i;},ib=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,nb=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ob=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ab=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Li={string:[[function(r){var t=sb.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:r.length===4?it(parseInt(r[3]+r[3],16)/255,2):1}:r.length===6||r.length===8?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:r.length===8?it(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=ob.exec(r)||ab.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:sl({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(r){var t=ib.exec(r)||nb.exec(r);if(!t)return null;var e,s,i=ol({h:(e=t[1],s=t[2],s===void 0&&(s="deg"),Number(e)*(rb[s]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return ul(i)},"hsl"]],object:[[function(r){var t=r.r,e=r.g,s=r.b,i=r.a,n=i===void 0?1:i;return Nt(t)&&Nt(e)&&Nt(s)?sl({r:Number(t),g:Number(e),b:Number(s),a:Number(n)}):null},"rgb"],[function(r){var t=r.h,e=r.s,s=r.l,i=r.a,n=i===void 0?1:i;if(!Nt(t)||!Nt(e)||!Nt(s))return null;var o=ol({h:Number(t),s:Number(e),l:Number(s),a:Number(n)});return ul(o)},"hsl"],[function(r){var t=r.h,e=r.s,s=r.v,i=r.a,n=i===void 0?1:i;if(!Nt(t)||!Nt(e)||!Nt(s))return null;var o=function(a){return {h:rl(a.h),s:Et(a.s,0,100),v:Et(a.v,0,100),a:Et(a.a)}}({h:Number(t),s:Number(e),v:Number(s),a:Number(n)});return nl(o)},"hsv"]]},ll=function(r,t){for(var e=0;e<t.length;e++){var s=t[e][0](r);if(s)return [s,t[e][1]]}return [null,void 0]},hl=function(r){return typeof r=="string"?ll(r.trim(),Li.string):typeof r=="object"&&r!==null?ll(r,Li.object):[null,void 0]},eP=function(r){return hl(r)[1]},$i=function(r,t){var e=er(r);return {h:e.h,s:Et(e.s+100*t,0,100),l:e.l,a:e.a}},Ni=function(r){return (299*r.r+587*r.g+114*r.b)/1e3/255},cl=function(r,t){var e=er(r);return {h:e.h,s:e.s,l:Et(e.l+100*t,0,100),a:e.a}},Qr=function(){function r(t){this.parsed=hl(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1};}return r.prototype.isValid=function(){return this.parsed!==null},r.prototype.brightness=function(){return it(Ni(this.rgba),2)},r.prototype.isDark=function(){return Ni(this.rgba)<.5},r.prototype.isLight=function(){return Ni(this.rgba)>=.5},r.prototype.toHex=function(){return t=ki(this.rgba),e=t.r,s=t.g,i=t.b,o=(n=t.a)<1?Zr(it(255*n)):"","#"+Zr(e)+Zr(s)+Zr(i)+o;var t,e,s,i,n,o;},r.prototype.toRgb=function(){return ki(this.rgba)},r.prototype.toRgbString=function(){return t=ki(this.rgba),e=t.r,s=t.g,i=t.b,(n=t.a)<1?"rgba("+e+", "+s+", "+i+", "+n+")":"rgb("+e+", "+s+", "+i+")";var t,e,s,i,n;},r.prototype.toHsl=function(){return al(er(this.rgba))},r.prototype.toHslString=function(){return t=al(er(this.rgba)),e=t.h,s=t.s,i=t.l,(n=t.a)<1?"hsla("+e+", "+s+"%, "+i+"%, "+n+")":"hsl("+e+", "+s+"%, "+i+"%)";var t,e,s,i,n;},r.prototype.toHsv=function(){return t=il(this.rgba),{h:it(t.h),s:it(t.s),v:it(t.v),a:it(t.a,3)};var t;},r.prototype.invert=function(){return Dt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t;},r.prototype.saturate=function(t){return t===void 0&&(t=.1),Dt($i(this.rgba,t))},r.prototype.desaturate=function(t){return t===void 0&&(t=.1),Dt($i(this.rgba,-t))},r.prototype.grayscale=function(){return Dt($i(this.rgba,-1))},r.prototype.lighten=function(t){return t===void 0&&(t=.1),Dt(cl(this.rgba,t))},r.prototype.darken=function(t){return t===void 0&&(t=.1),Dt(cl(this.rgba,-t))},r.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},r.prototype.alpha=function(t){return typeof t=="number"?Dt({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):it(this.rgba.a,3);var e;},r.prototype.hue=function(t){var e=er(this.rgba);return typeof t=="number"?Dt({h:t,s:e.s,l:e.l,a:e.a}):it(e.h)},r.prototype.isEqual=function(t){return this.toHex()===Dt(t).toHex()},r}(),Dt=function(r){return r instanceof Qr?r:new Qr(r)},dl=[],ub=function(r){r.forEach(function(t){dl.indexOf(t)<0&&(t(Qr,Li),dl.push(t));});},rP=function(){return new Qr({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};function lb(r,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},s={};for(var i in e)s[e[i]]=i;var n={};r.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return "transparent";var a,u,l=s[this.toHex()];if(l)return l;if(o!=null&&o.closest){var h=this.toRgb(),c=1/0,d="black";if(!n.length)for(var f in e)n[f]=new r(e[f]).toRgb();for(var p in e){var g=(a=h,u=n[p],Math.pow(a.r-u.r,2)+Math.pow(a.g-u.g,2)+Math.pow(a.b-u.b,2));g<c&&(c=g,d=p);}return d}},t.string.push([function(o){var a=o.toLowerCase(),u=a==="transparent"?"#0000":e[a];return u?new r(u).toRgb():null},"name"]);}var hb=Object.defineProperty,pl=Object.getOwnPropertySymbols,cb=Object.prototype.hasOwnProperty,db=Object.prototype.propertyIsEnumerable,fl=(r,t,e)=>t in r?hb(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,pb=(r,t)=>{for(var e in t||(t={}))cb.call(t,e)&&fl(r,e,t[e]);if(pl)for(var e of pl(t))db.call(t,e)&&fl(r,e,t[e]);return r};ub([lb]);const Ae=class jr{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t;}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof jr)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else {if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t));}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?pb({},t):t}_isSourceEqual(t,e){const s=typeof t;if(s!==typeof e)return !1;if(s==="number"||s==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((i,n)=>i===e[n]);if(t!==null&&e!==null){const i=Object.keys(t),n=Object.keys(e);return i.length!==n.length?!1:i.every(o=>t[o]===e[o])}return t===e}toRgba(){const[t,e,s,i]=this._components;return {r:t,g:e,b:s,a:i}}toRgb(){const[t,e,s]=this._components;return {r:t,g:e,b:s}}toRgbaString(){const[t,e,s]=this.toUint8RgbArray();return `rgba(${t},${e},${s},${this.alpha})`}toUint8RgbArray(t){const[e,s,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(e*255),t[1]=Math.round(s*255),t[2]=Math.round(i*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[e,s,i,n]=this._components;return t[0]=e,t[1]=s,t[2]=i,t[3]=n,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[e,s,i]=this._components;return t[0]=e,t[1]=s,t[2]=i,t}toNumber(){return this._int}toBgrNumber(){const[t,e,s]=this.toUint8RgbArray();return (s<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return (t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,s,i,n]=jr._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=s,this._components[2]*=i,this._components[3]*=n,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return (255<<24)+this._int;if(t===0)return e?0:this._int;let s=this._int>>16&255,i=this._int>>8&255,n=this._int&255;return e&&(s=s*t+.5|0,i=i*t+.5|0,n=n*t+.5|0),(t*255<<24)+(s<<16)+(i<<8)+n}toHex(){const t=this._int.toString(16);return `#${"000000".substring(0,6-t.length)+t}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,s,i,n;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,s=(o>>8&255)/255,i=(o&255)/255,n=1;}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,s,i,n=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,s,i,n=255]=t,e/=255,s/=255,i/=255,n/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=jr.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`);}const o=Dt(t);o.isValid()&&({r:e,g:s,b:i,a:n}=o.rgba,e/=255,s/=255,i/=255);}if(e!==void 0)this._components[0]=e,this._components[1]=s,this._components[2]=i,this._components[3]=n,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,s]=this._components;this._int=(t*255<<16)+(e*255<<8)+(s*255|0);}_clamp(t,e=0,s=1){return typeof t=="number"?Math.min(Math.max(t,e),s):(t.forEach((i,n)=>{t[n]=Math.min(Math.max(i,e),s);}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof jr||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Ae.shared=new Ae,Ae._temp=new Ae,Ae.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let V=Ae;const ml={cullArea:null,cullable:!1,cullableChildren:!0},gl=Math.PI*2,_l=180/Math.PI,xl=Math.PI/180;class j{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e;}clone(){return new j(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}static get shared(){return Hi.x=0,Hi.y=0,Hi}}const Hi=new j;class G{constructor(t=1,e=0,s=0,i=1,n=0,o=0){this.array=null,this.a=t,this.b=e,this.c=s,this.d=i,this.tx=n,this.ty=o;}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5];}set(t,e,s,i,n,o){return this.a=t,this.b=e,this.c=s,this.d=i,this.tx=n,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const s=e||this.array;return t?(s[0]=this.a,s[1]=this.b,s[2]=0,s[3]=this.c,s[4]=this.d,s[5]=0,s[6]=this.tx,s[7]=this.ty,s[8]=1):(s[0]=this.a,s[1]=this.c,s[2]=this.tx,s[3]=this.b,s[4]=this.d,s[5]=this.ty,s[6]=0,s[7]=0,s[8]=1),s}apply(t,e){e=e||new j;const s=t.x,i=t.y;return e.x=this.a*s+this.c*i+this.tx,e.y=this.b*s+this.d*i+this.ty,e}applyInverse(t,e){e=e||new j;const s=this.a,i=this.b,n=this.c,o=this.d,a=this.tx,u=this.ty,l=1/(s*o+n*-i),h=t.x,c=t.y;return e.x=o*l*h+-n*l*c+(u*n-a*o)*l,e.y=s*l*c+-i*l*h+(-u*s+a*i)*l,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),s=Math.sin(t),i=this.a,n=this.c,o=this.tx;return this.a=i*e-this.b*s,this.b=i*s+this.b*e,this.c=n*e-this.d*s,this.d=n*s+this.d*e,this.tx=o*e-this.ty*s,this.ty=o*s+this.ty*e,this}append(t){const e=this.a,s=this.b,i=this.c,n=this.d;return this.a=t.a*e+t.b*i,this.b=t.a*s+t.b*n,this.c=t.c*e+t.d*i,this.d=t.c*s+t.d*n,this.tx=t.tx*e+t.ty*i+this.tx,this.ty=t.tx*s+t.ty*n+this.ty,this}appendFrom(t,e){const s=t.a,i=t.b,n=t.c,o=t.d,a=t.tx,u=t.ty,l=e.a,h=e.b,c=e.c,d=e.d;return this.a=s*l+i*c,this.b=s*h+i*d,this.c=n*l+o*c,this.d=n*h+o*d,this.tx=a*l+u*c+e.tx,this.ty=a*h+u*d+e.ty,this}setTransform(t,e,s,i,n,o,a,u,l){return this.a=Math.cos(a+l)*n,this.b=Math.sin(a+l)*n,this.c=-Math.sin(a-u)*o,this.d=Math.cos(a-u)*o,this.tx=t-(s*this.a+i*this.c),this.ty=e-(s*this.b+i*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const s=this.a,i=this.c;this.a=s*t.a+this.b*t.c,this.b=s*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d;}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,s=this.b,i=this.c,n=this.d,o=t.pivot,a=-Math.atan2(-i,n),u=Math.atan2(s,e),l=Math.abs(a+u);return l<1e-5||Math.abs(gl-l)<1e-5?(t.rotation=u,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=u),t.scale.x=Math.sqrt(e*e+s*s),t.scale.y=Math.sqrt(i*i+n*n),t.position.x=this.tx+(o.x*e+o.y*i),t.position.y=this.ty+(o.x*s+o.y*n),t}invert(){const t=this.a,e=this.b,s=this.c,i=this.d,n=this.tx,o=t*i-e*s;return this.a=i/o,this.b=-e/o,this.c=-s/o,this.d=t/o,this.tx=(s*this.ty-i*n)/o,this.ty=-(t*this.ty-e*n)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new G;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}static get IDENTITY(){return mb.identity()}static get shared(){return fb.identity()}}const fb=new G,mb=new G;class rt{constructor(t,e,s){this._x=e||0,this._y=s||0,this._observer=t;}clone(t){return new rt(t!=null?t:this._observer,this._x,this._y)}set(t=0,e=t){return (this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return (this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this));}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this));}}const rr={default:-1};function Z(r="default"){return rr[r]===void 0&&(rr[r]=-1),++rr[r]}function gb(){for(const r in rr)delete rr[r];}function Xi(r,t,e){const s=r.length;let i;if(t>=s||e===0)return;e=t+e>s?s-t:e;const n=s-e;for(i=t;i<n;++i)r[i]=r[i+e];r.length=n;}const bl={allowChildren:!0,removeChildren(r=0,t){const e=t!=null?t:this.children.length,s=e-r,i=[];if(s>0&&s<=e){for(let n=e-1;n>=r;n--){const o=this.children[n];o&&(this.renderGroup&&this.renderGroup.removeChild(o),i.push(o),o.parent=null);}Xi(this.children,r,e);for(let n=0;n<i.length;++n)this.emit("childRemoved",i[n],this,n),i[n].emit("removed",this);return i}else if(s===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(r){const t=this.getChildAt(r);return this.removeChild(t)},getChildAt(r){if(r<0||r>=this.children.length)throw new Error(`getChildAt: Index (${r}) does not exist.`);return this.children[r]},setChildIndex(r,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(r),this.addChildAt(r,t);},getChildIndex(r){const t=this.children.indexOf(r);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(r,t){const{children:e}=this;if(t<0||t>e.length)throw new Error(`${r}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(r.parent){const s=r.parent.children.indexOf(r);if(r.parent===this&&s===t)return r;s!==-1&&r.parent.children.splice(s,1);}return t===e.length?e.push(r):e.splice(t,0,r),r.parent=this,r.didChange=!0,r.didViewUpdate=!1,r._updateFlags=15,this.renderGroup&&this.renderGroup.addChild(r),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",r,this,t),r.emit("added",this),r},swapChildren(r,t){if(r===t)return;const e=this.getChildIndex(r),s=this.getChildIndex(t);this.children[e]=t,this.children[s]=r;},removeFromParent(){var r;(r=this.parent)==null||r.removeChild(this);}};class Jr{constructor(t){this.pipe="filter",this.priority=1,this.filters=t==null?void 0:t.filters,this.filterArea=t==null?void 0:t.filterArea;}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null;}}const vl=[];function yl(r,t){const e=vl.pop()||new Jr;return e.filters=r,e.filterArea=t,e}function Tl(r){r.filters=null,vl.push(r);}class ts{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e);}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t;}get(t){var e;let s;return this._index>0?s=this._pool[--this._index]:s=new this._classType,(e=s.init)==null||e.call(s,t),s}return(t){var e;(e=t.reset)==null||e.call(t),this._pool[this._index++]=t;}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class Sl{constructor(){this._poolsByClass=new Map;}prepopulate(t,e){this.getPool(t).prepopulate(e);}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t);}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new ts(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const s=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[s]={free:e.totalFree,used:e.totalUsed,size:e.totalSize};}),t}}const X=new Sl;class El{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1;}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t});}));}add(t){this._tests.push(t);}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const s=this._tests[e];if(s.test(t))return X.get(s.maskClass,t)}return t}returnMaskEffect(t){X.return(t);}}const es=new El;D.handleByList(b.MaskEffect,es._effectClasses);const Al={_mask:null,_filters:null,effects:[],addEffect(r){this.effects.indexOf(r)===-1&&(this.effects.push(r),this.effects.sort((t,e)=>t.priority-e.priority),this.renderGroup&&(this.renderGroup.structureDidChange=!0),this._updateIsSimple());},removeEffect(r){const t=this.effects.indexOf(r);t!==-1&&(this.effects.splice(t,1),!this.isRenderGroupRoot&&this.renderGroup&&(this.renderGroup.structureDidChange=!0),this._updateIsSimple());},set mask(r){if(this._mask||(this._mask={mask:null,effect:null}),this._mask.mask===r||(this._mask.effect&&(this.removeEffect(this._mask.effect),es.returnMaskEffect(this._mask.effect),this._mask.effect=null),this._mask.mask=r,r==null))return;const t=es.getMaskEffect(r);this._mask.effect=t,this.addEffect(t);},get mask(){var r;return (r=this._mask)==null?void 0:r.mask},set filters(r){!Array.isArray(r)&&r&&(r=[r]),this._filters||(this._filters={filters:null,effect:null,filterArea:null});const t=r&&r.length>0,e=this._filters.effect&&!t||!this._filters.effect&&t;if(this._filters.filters=Object.freeze(r),e)if(t){const s=yl(r,this.filterArea);this._filters.effect=s,this.addEffect(s);}else this.removeEffect(this._filters.effect),Tl(this._filters.effect),this._filters.effect=null;},get filters(){var r;return (r=this._filters)==null?void 0:r.filters},set filterArea(r){this._filters||(this._filters={filters:null,effect:null,filterArea:null}),this._filters.filterArea=r;},get filterArea(){var r;return (r=this._filters)==null?void 0:r.filterArea}},Pl={label:null,get name(){return this.label},set name(r){this.label=r;},getChildByName(r,t=!1){return this.getChildByLabel(r,t)},getChildByLabel(r,t=!1){const e=this.children;for(let s=0;s<e.length;s++){const i=e[s];if(i.label===r||r instanceof RegExp&&r.test(i.label))return i}if(t)for(let s=0;s<e.length;s++){const i=e[s].getChildByLabel(r,!0);if(i)return i}return null},getChildrenByLabel(r,t=!1,e=[]){const s=this.children;for(let i=0;i<s.length;i++){const n=s[i];(n.label===r||r instanceof RegExp&&r.test(n.label))&&e.push(n);}if(t)for(let i=0;i<s.length;i++)s[i].getChildrenByLabel(r,!0,e);return e}},rs=[new j,new j,new j,new j];class H{constructor(t=0,e=0,s=0,i=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(s),this.height=Number(i);}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new H(0,0,0,0)}clone(){return new H(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,s){const{width:i,height:n}=this;if(i<=0||n<=0)return !1;const o=this.x,a=this.y,u=o-s/2,l=o+i+s/2,h=a-s/2,c=a+n+s/2,d=o+s/2,f=o+i-s/2,p=a+s/2,g=a+n-s/2;return t>=u&&t<=l&&e>=h&&e<=c&&!(t>d&&t<f&&e>p&&e<g)}intersects(t,e){if(!e){const P=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=P)return !1;const T=this.y<t.y?t.y:this.y;return (this.bottom>t.bottom?t.bottom:this.bottom)>T}const s=this.left,i=this.right,n=this.top,o=this.bottom;if(i<=s||o<=n)return !1;const a=rs[0].set(t.left,t.top),u=rs[1].set(t.left,t.bottom),l=rs[2].set(t.right,t.top),h=rs[3].set(t.right,t.bottom);if(l.x<=a.x||u.y<=a.y)return !1;const c=Math.sign(e.a*e.d-e.b*e.c);if(c===0||(e.apply(a,a),e.apply(u,u),e.apply(l,l),e.apply(h,h),Math.max(a.x,u.x,l.x,h.x)<=s||Math.min(a.x,u.x,l.x,h.x)>=i||Math.max(a.y,u.y,l.y,h.y)<=n||Math.min(a.y,u.y,l.y,h.y)>=o))return !1;const d=c*(u.y-a.y),f=c*(a.x-u.x),p=d*s+f*n,g=d*i+f*n,m=d*s+f*o,_=d*i+f*o;if(Math.max(p,g,m,_)<=d*a.x+f*a.y||Math.min(p,g,m,_)>=d*h.x+f*h.y)return !1;const x=c*(a.y-l.y),v=c*(l.x-a.x),y=x*s+v*n,S=x*i+v*n,w=x*s+v*o,R=x*i+v*o;return !(Math.max(y,S,w,R)<=x*a.x+v*a.y||Math.min(y,S,w,R)>=x*h.x+v*h.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),s=Math.min(this.x+this.width,t.x+t.width),i=Math.max(this.y,t.y),n=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(s-e,0),this.y=i,this.height=Math.max(n-i,0),this}ceil(t=1,e=.001){const s=Math.ceil((this.x+this.width-e)*t)/t,i=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=s-this.x,this.height=i-this.y,this}enlarge(t){const e=Math.min(this.x,t.x),s=Math.max(this.x+this.width,t.x+t.width),i=Math.min(this.y,t.y),n=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=s-e,this.y=i,this.height=n-i,this}getBounds(t){return t=t||new H,t.copyFrom(this),t}}const wl=new G;class lt{constructor(t=1/0,e=1/0,s=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=wl,this.minX=t,this.minY=e,this.maxX=s,this.maxY=i;}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new H);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=wl,this}set(t,e,s,i){this.minX=t,this.minY=e,this.maxX=s,this.maxY=i;}addFrame(t,e,s,i,n){n||(n=this.matrix);const o=n.a,a=n.b,u=n.c,l=n.d,h=n.tx,c=n.ty;let d=this.minX,f=this.minY,p=this.maxX,g=this.maxY,m=o*t+u*e+h,_=a*t+l*e+c;m<d&&(d=m),_<f&&(f=_),m>p&&(p=m),_>g&&(g=_),m=o*s+u*e+h,_=a*s+l*e+c,m<d&&(d=m),_<f&&(f=_),m>p&&(p=m),_>g&&(g=_),m=o*t+u*i+h,_=a*t+l*i+c,m<d&&(d=m),_<f&&(f=_),m>p&&(p=m),_>g&&(g=_),m=o*s+u*i+h,_=a*s+l*i+c,m<d&&(d=m),_<f&&(f=_),m>p&&(p=m),_>g&&(g=_),this.minX=d,this.minY=f,this.maxX=p,this.maxY=g;}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e);}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e);}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY;}applyMatrix(t){const e=this.minX,s=this.minY,i=this.maxX,n=this.maxY,{a:o,b:a,c:u,d:l,tx:h,ty:c}=t;let d=o*e+u*s+h,f=a*e+l*s+c;this.minX=d,this.minY=f,this.maxX=d,this.maxY=f,d=o*i+u*s+h,f=a*i+l*s+c,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY,d=o*e+u*n+h,f=a*e+l*n+c,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY,d=o*i+u*n+h,f=a*i+l*n+c,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY;}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new lt(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e;}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e;}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t;}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t;}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,s,i){let n=this.minX,o=this.minY,a=this.maxX,u=this.maxY;i||(i=this.matrix);const l=i.a,h=i.b,c=i.c,d=i.d,f=i.tx,p=i.ty;for(let g=e;g<s;g+=2){const m=t[g],_=t[g+1],x=l*m+c*_+f,v=h*m+d*_+p;n=x<n?x:n,o=v<o?v:o,a=x>a?x:a,u=v>u?v:u;}this.minX=n,this.minY=o,this.maxX=a,this.maxY=u;}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Ut=new ts(G),kt=new ts(lt);function sr(r,t,e){e.clear();let s,i;return r.parent?t?s=r.parent.worldTransform:(i=Ut.get().identity(),s=ir(r,i)):s=G.IDENTITY,zi(r,e,s,t),i&&Ut.return(i),e.isValid||e.set(0,0,0,0),e}function zi(r,t,e,s){var i,n;if(!r.visible||!r.measurable)return;let o;s?o=r.worldTransform:(r.updateLocalTransform(),o=Ut.get(),o.appendFrom(r.localTransform,e));const a=t,u=!!r.effects.length;if(u&&(t=kt.get().clear()),r.boundsArea)t.addRect(r.boundsArea,o);else {r.addBounds&&(t.matrix=o,r.addBounds(t));for(let l=0;l<r.children.length;l++)zi(r.children[l],t,o,s);}if(u){for(let l=0;l<r.effects.length;l++)(n=(i=r.effects[l]).addBounds)==null||n.call(i,t);a.addBounds(t,G.IDENTITY),kt.return(t);}s||Ut.return(o);}function ir(r,t){const e=r.parent;return e&&(ir(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}function ss(r,t,e){return t.clear(),e||(e=G.IDENTITY),Rl(r,t,e,r,!0),t.isValid||t.set(0,0,0,0),t}function Rl(r,t,e,s,i){var n,o;let a;if(i)a=Ut.get(),a=e.copyTo(a);else {if(!r.visible||!r.measurable)return;r.updateLocalTransform();const h=r.localTransform;a=Ut.get(),a.appendFrom(h,e);}const u=t,l=!!r.effects.length;if(l&&(t=kt.get().clear()),r.boundsArea)t.addRect(r.boundsArea,a);else {r.renderPipeId&&(t.matrix=a,r.addBounds(t));const h=r.children;for(let c=0;c<h.length;c++)Rl(h[c],t,a,s,!1);}if(l){for(let h=0;h<r.effects.length;h++)(o=(n=r.effects[h]).addLocalBounds)==null||o.call(n,t,s);u.addBounds(t,G.IDENTITY),kt.return(t);}Ut.return(a);}function Ml(r,t,e){const s=r.parent;s&&s!==t&&(Ml(s,t,e),s.updateLocalTransform(),e.append(s.localTransform));}function ji(r,t){const e=r.children;for(let s=0;s<e.length;s++){const i=e[s],n=(i.uid&255)<<24|i._didChangeId&16777215;t.data[t.index]!==n&&(t.data[t.index]=n,t.didChange=!0),t.index++,i.children.length&&ji(i,t);}return t.didChange}const _b=new G,Ol={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(r,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=r/t*e:this.scale.x=e;},_setHeight(r,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=r/t*e:this.scale.y=e;},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new lt});const r=this._localBoundsCacheData;return r.index=1,r.didChange=!1,r.data[0]!==this._didChangeId>>12&&(r.didChange=!0,r.data[0]=this._didChangeId>>12),ji(this,r),r.didChange&&ss(this,r.localBounds,_b),r.localBounds},getBounds(r,t){return sr(this,r,t||new lt)}},Cl={_onRender:null,set onRender(r){const t=this.renderGroup;if(!r){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=r;},get onRender(){return this._onRender}},Gl={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(r){this._zIndex!==r&&(this._zIndex=r,this.depthOfChildModified());},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.renderGroup&&!this.isRenderGroupRoot&&(this.renderGroup.structureDidChange=!0);},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(xb));}};function xb(r,t){return r._zIndex-t._zIndex}const Il={getGlobalPosition(r=new j,t=!1){return this.parent?this.parent.toGlobal(this._position,r,t):(r.x=this._position.x,r.y=this._position.y),r},toGlobal(r,t,e=!1){if(!e){this.updateLocalTransform();const s=ir(this,new G);return s.append(this.localTransform),s.apply(r,t)}return this.worldTransform.apply(r,t)},toLocal(r,t,e,s){if(t&&(r=t.toGlobal(r,e,s)),!s){this.updateLocalTransform();const i=ir(this,new G);return i.append(this.localTransform),i.applyInverse(r,e)}return this.worldTransform.applyInverse(r,e)}};class Wi{constructor(){this.uid=Z("instructionSet"),this.instructions=[],this.instructionSize=0;}reset(){this.instructionSize=0;}add(t){this.instructions[this.instructionSize++]=t;}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"]);}}class Bl{constructor(t){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this._children=[],this.worldTransform=new G,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Wi,this._onRenderContainers=[],this.root=t,this.addChild(t);}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.onChildUpdate(t.root),this.renderGroupChildren.push(t);}_removeRenderGroupChild(t){t.root.didChange&&this._removeChildFromUpdate(t.root);const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null;}addChild(t){if(this.structureDidChange=!0,t!==this.root&&(this._children.push(t),t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t._onRender&&this.addOnRender(t)),t.renderGroup){if(t.renderGroup.root===t){this.addRenderGroupChild(t.renderGroup);return}}else t.renderGroup=this,t.didChange=!0;const e=t.children;t.isRenderGroupRoot||this.onChildUpdate(t);for(let s=0;s<e.length;s++)this.addChild(e[s]);}removeChild(t){if(this.structureDidChange=!0,t._onRender&&this.removeOnRender(t),t.renderGroup.root!==t){const s=t.children;for(let i=0;i<s.length;i++)this.removeChild(s[i]);t.didChange&&t.renderGroup._removeChildFromUpdate(t),t.renderGroup=null;}else this._removeRenderGroupChild(t.renderGroup);const e=this._children.indexOf(t);e>-1&&this._children.splice(e,1);}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t;}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t));}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t;}_removeChildFromUpdate(t){const e=this.childrenToUpdate[t.relativeRenderGroupDepth];if(!e)return;const s=e.list.indexOf(t);s>-1&&e.list.splice(s,1),e.index--;}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t);}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1);}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender();}}function Fl(r,t,e={}){for(const s in t)!e[s]&&t[s]!==void 0&&(r[s]=t[s]);}const Vi=new rt(null),Yi=new rt(null),Ki=new rt(null,1,1),is=1,qi=2,nr=4,bb=8;class W extends mt{constructor(t={}){var e,s;super(),this.uid=Z("renderable"),this._updateFlags=15,this.isRenderGroupRoot=!1,this.renderGroup=null,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new G,this.relativeGroupTransform=new G,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new rt(this,0,0),this._scale=Ki,this._pivot=Yi,this._skew=Vi,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,Fl(this,t,{children:!0,parent:!0,effects:!0}),(e=t.children)==null||e.forEach(i=>this.addChild(i)),this.effects=[],(s=t.parent)==null||s.addChild(this);}static mixin(t){Object.defineProperties(W.prototype,Object.getOwnPropertyDescriptors(t));}addChild(...t){if(t.length>1){for(let s=0;s<t.length;s++)this.addChild(t[s]);return t[0]}const e=t[0];return e.parent===this?(this.children.splice(this.children.indexOf(e),1),this.children.push(e),this.renderGroup&&!this.isRenderGroupRoot&&(this.renderGroup.structureDidChange=!0),e):(e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15,this.renderGroup&&this.renderGroup.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),e._zIndex!==0&&e.depthOfChildModified(),e)}removeChild(...t){if(t.length>1){for(let i=0;i<t.length;i++)this.removeChild(t[i]);return t[0]}const e=t[0],s=this.children.indexOf(e);return s>-1&&(this.children.splice(s,1),this.renderGroup&&this.renderGroup.removeChild(e)),e.parent=null,this.emit("childRemoved",e,this,s),e.emit("removed",this),e}_onUpdate(t){if(t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange)if(this.didChange=!0,this.isRenderGroupRoot){const e=this.renderGroup.renderGroupParent;e&&e.onChildUpdate(this);}else this.renderGroup&&this.renderGroup.onChildUpdate(this);}set isRenderGroup(t){if(this.isRenderGroupRoot&&t===!1)throw new Error("[Pixi] cannot undo a render group just yet");t&&this.enableRenderGroup();}get isRenderGroup(){return this.isRenderGroupRoot}enableRenderGroup(){if(this.renderGroup&&this.renderGroup.root===this)return;this.isRenderGroupRoot=!0;const t=this.renderGroup;if(t&&t.removeChild(this),this.renderGroup=new Bl(this),t){for(let e=0;e<t.renderGroupChildren.length;e++){const s=t.renderGroupChildren[e];let i=s.root;for(;i;){if(i===this){this.renderGroup.addRenderGroupChild(s);break}i=i.parent;}}t.addRenderGroupChild(this.renderGroup);}this._updateIsSimple(),this.groupTransform=G.IDENTITY;}_updateIsSimple(){this.isSimple=!this.isRenderGroupRoot&&this.effects.length===0;}get worldTransform(){return this._worldTransform||(this._worldTransform=new G),this.renderGroup&&(this.isRenderGroupRoot?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this._worldTransform.appendFrom(this.relativeGroupTransform,this.renderGroup.worldTransform)),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t;}get y(){return this._position.y}set y(t){this._position.y=t;}get position(){return this._position}set position(t){this._position.copyFrom(t);}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew));}get angle(){return this.rotation*_l}set angle(t){this.rotation=t*xl;}get pivot(){return this._pivot===Yi&&(this._pivot=new rt(this,0,0)),this._pivot}set pivot(t){this._pivot===Yi&&(this._pivot=new rt(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t);}get skew(){return this._skew===Vi&&(this._skew=new rt(this,0,0)),this._skew}set skew(t){this._skew===Vi&&(this._skew=new rt(this,0,0)),this._skew.copyFrom(t);}get scale(){return this._scale===Ki&&(this._scale=new rt(this,1,1)),this._scale}set scale(t){this._scale===Ki&&(this._scale=new rt(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t);}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e);}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e);}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){var s;const i=this.getLocalBounds();let n,o;typeof t!="object"?(n=t,o=e!=null?e:t):(n=t.width,o=(s=t.height)!=null?s:t.width),n!==void 0&&this._setWidth(n,i.width),o!==void 0&&this._setHeight(o,i.height);}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x);}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this);}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const t=this.localTransform,e=this._scale,s=this._pivot,i=this._position,n=e._x,o=e._y,a=s._x,u=s._y;t.a=this._cx*n,t.b=this._sx*n,t.c=this._cy*o,t.d=this._sy*o,t.tx=i._x-(a*t.a+u*t.c),t.ty=i._y-(a*t.b+u*t.d);}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=is,this._onUpdate());}get alpha(){return this.localAlpha}set tint(t){const e=V.shared.setValue(t!=null?t:16777215).toBgrNumber();e!==this.localColor&&(this.localColor=e,this._updateFlags|=is,this._onUpdate());}get tint(){const t=this.localColor;return ((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.renderGroup&&!this.isRenderGroupRoot&&(this.renderGroup.structureDidChange=!0),this._updateFlags|=qi,this.localBlendMode=t,this._onUpdate());}get blendMode(){return this.localBlendMode}get visible(){return !!(this.localDisplayStatus&2)}set visible(t){const e=t?1:0;(this.localDisplayStatus&2)>>1!==e&&(this.renderGroup&&!this.isRenderGroupRoot&&(this.renderGroup.structureDidChange=!0),this._updateFlags|=nr,this.localDisplayStatus^=2,this._onUpdate());}get culled(){return !(this.localDisplayStatus&4)}set culled(t){const e=t?1:0;(this.localDisplayStatus&4)>>2!==e&&(this.renderGroup&&!this.isRenderGroupRoot&&(this.renderGroup.structureDidChange=!0),this._updateFlags|=nr,this.localDisplayStatus^=4,this._onUpdate());}get renderable(){return !!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=nr,this.localDisplayStatus^=1,this.renderGroup&&!this.isRenderGroupRoot&&(this.renderGroup.structureDidChange=!0),this._onUpdate());}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0,this.removeFromParent(),this.parent=null,this._mask=null,this._filters=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners();const e=typeof t=="boolean"?t:t==null?void 0:t.children,s=this.removeChildren(0,this.children.length);if(e)for(let i=0;i<s.length;++i)s[i].destroy(t);}}W.mixin(bl),W.mixin(Il),W.mixin(Cl),W.mixin(Ol),W.mixin(Al),W.mixin(Pl),W.mixin(Gl),W.mixin(ml);class We{constructor(t){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=We.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new j,this.page=new j,this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.manager=t;}get layerX(){return this.layer.x}get layerY(){return this.layer.y}get pageX(){return this.page.x}get pageY(){return this.page.y}get data(){return this}composedPath(){return this.manager&&(!this.path||this.path[this.path.length-1]!==this.target)&&(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}initEvent(t,e,s){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}initUIEvent(t,e,s,i,n){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0;}stopImmediatePropagation(){this.propagationImmediatelyStopped=!0;}stopPropagation(){this.propagationStopped=!0;}}var Zi=/iPhone/i,Dl=/iPod/i,Ul=/iPad/i,kl=/\biOS-universal(?:.+)Mac\b/i,Qi=/\bAndroid(?:.+)Mobile\b/i,Ll=/Android/i,Pe=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,ns=/Silk/i,Ht=/Windows Phone/i,$l=/\bWindows(?:.+)ARM\b/i,Nl=/BlackBerry/i,Hl=/BB10/i,Xl=/Opera Mini/i,zl=/\b(CriOS|Chrome)(?:.+)Mobile/i,jl=/Mobile(?:.+)Firefox\b/i,Wl=function(r){return typeof r!="undefined"&&r.platform==="MacIntel"&&typeof r.maxTouchPoints=="number"&&r.maxTouchPoints>1&&typeof MSStream=="undefined"};function vb(r){return function(t){return t.test(r)}}function Vl(r){var t={userAgent:"",platform:"",maxTouchPoints:0};!r&&typeof navigator!="undefined"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof r=="string"?t.userAgent=r:r&&r.userAgent&&(t={userAgent:r.userAgent,platform:r.platform,maxTouchPoints:r.maxTouchPoints||0});var e=t.userAgent,s=e.split("[FBAN");typeof s[1]!="undefined"&&(e=s[0]),s=e.split("Twitter"),typeof s[1]!="undefined"&&(e=s[0]);var i=vb(e),n={apple:{phone:i(Zi)&&!i(Ht),ipod:i(Dl),tablet:!i(Zi)&&(i(Ul)||Wl(t))&&!i(Ht),universal:i(kl),device:(i(Zi)||i(Dl)||i(Ul)||i(kl)||Wl(t))&&!i(Ht)},amazon:{phone:i(Pe),tablet:!i(Pe)&&i(ns),device:i(Pe)||i(ns)},android:{phone:!i(Ht)&&i(Pe)||!i(Ht)&&i(Qi),tablet:!i(Ht)&&!i(Pe)&&!i(Qi)&&(i(ns)||i(Ll)),device:!i(Ht)&&(i(Pe)||i(ns)||i(Qi)||i(Ll))||i(/\bokhttp\b/i)},windows:{phone:i(Ht),tablet:i($l),device:i(Ht)||i($l)},other:{blackberry:i(Nl),blackberry10:i(Hl),opera:i(Xl),firefox:i(jl),chrome:i(zl),device:i(Nl)||i(Hl)||i(Xl)||i(jl)||i(zl)},any:!1,phone:!1,tablet:!1};return n.any=n.apple.device||n.android.device||n.windows.device||n.other.device,n.phone=n.apple.phone||n.android.phone||n.windows.phone,n.tablet=n.apple.tablet||n.android.tablet||n.windows.tablet,n}var Yl;const yb=(Yl=Vl.default)!=null?Yl:Vl,Kl=yb(globalThis.navigator),Tb=9,os=100,Sb=0,Eb=0,ql=2,Zl=1,Ab=-1e3,Pb=-1e3,wb=2;class Ji{constructor(t,e=Kl){this._mobileInfo=e,this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this._pool=[],this._renderId=0,this._children=[],this._androidUpdateCount=0,this._androidUpdateFrequency=500,this._hookDiv=null,(e.tablet||e.phone)&&this._createTouchHook();const s=document.createElement("div");s.style.width=`${os}px`,s.style.height=`${os}px`,s.style.position="absolute",s.style.top=`${Sb}px`,s.style.left=`${Eb}px`,s.style.zIndex=ql.toString(),this._div=s,this._renderer=t,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1);}get isActive(){return this._isActive}get isMobileAccessibility(){return this._isMobileAccessibility}get hookDiv(){return this._hookDiv}_createTouchHook(){const t=document.createElement("button");t.style.width=`${Zl}px`,t.style.height=`${Zl}px`,t.style.position="absolute",t.style.top=`${Ab}px`,t.style.left=`${Pb}px`,t.style.zIndex=wb.toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",()=>{this._isMobileAccessibility=!0,this._activate(),this._destroyTouchHook();}),document.body.appendChild(t),this._hookDiv=t;}_destroyTouchHook(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null);}_activate(){var t;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.add(this),(t=this._renderer.view.canvas.parentNode)==null||t.appendChild(this._div));}_deactivate(){var t;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.remove(this),(t=this._div.parentNode)==null||t.removeChild(this._div));}_updateAccessibleObjects(t){if(!t.visible||!t.accessibleChildren)return;t.accessible&&t.isInteractive()&&(t._accessibleActive||this._addChild(t),t._renderId=this._renderId);const e=t.children;if(e)for(let s=0;s<e.length;s++)this._updateAccessibleObjects(e[s]);}init(t){var e;this.debug=(e=t==null?void 0:t.debug)!=null?e:this.debug,this._renderer.runners.postrender.remove(this);}postrender(){const t=performance.now();if(this._mobileInfo.android.device&&t<this._androidUpdateCount||(this._androidUpdateCount=t+this._androidUpdateFrequency,!this._renderer.renderingToScreen||!this._renderer.view.canvas))return;this._renderer.lastObjectRendered&&this._updateAccessibleObjects(this._renderer.lastObjectRendered);const{x:e,y:s,width:i,height:n}=this._renderer.view.canvas.getBoundingClientRect(),{width:o,height:a,resolution:u}=this._renderer,l=i/o*u,h=n/a*u;let c=this._div;c.style.left=`${e}px`,c.style.top=`${s}px`,c.style.width=`${o}px`,c.style.height=`${a}px`;for(let d=0;d<this._children.length;d++){const f=this._children[d];if(f._renderId!==this._renderId)f._accessibleActive=!1,Xi(this._children,d,1),this._div.removeChild(f._accessibleDiv),this._pool.push(f._accessibleDiv),f._accessibleDiv=null,d--;else {c=f._accessibleDiv;let p=f.hitArea;const g=f.worldTransform;f.hitArea?(c.style.left=`${(g.tx+p.x*g.a)*l}px`,c.style.top=`${(g.ty+p.y*g.d)*h}px`,c.style.width=`${p.width*g.a*l}px`,c.style.height=`${p.height*g.d*h}px`):(p=f.getBounds().rectangle,this._capHitArea(p),c.style.left=`${p.x*l}px`,c.style.top=`${p.y*h}px`,c.style.width=`${p.width*l}px`,c.style.height=`${p.height*h}px`,c.title!==f.accessibleTitle&&f.accessibleTitle!==null&&(c.title=f.accessibleTitle),c.getAttribute("aria-label")!==f.accessibleHint&&f.accessibleHint!==null&&c.setAttribute("aria-label",f.accessibleHint)),(f.accessibleTitle!==c.title||f.tabIndex!==c.tabIndex)&&(c.title=f.accessibleTitle,c.tabIndex=f.tabIndex,this.debug&&this._updateDebugHTML(c));}}this._renderId++;}_updateDebugHTML(t){t.innerHTML=`type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;}_capHitArea(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0);const{width:e,height:s}=this._renderer;t.x+t.width>e&&(t.width=e-t.x),t.y+t.height>s&&(t.height=s-t.y);}_addChild(t){let e=this._pool.pop();e||(e=document.createElement("button"),e.style.width=`${os}px`,e.style.height=`${os}px`,e.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",e.style.position="absolute",e.style.zIndex=ql.toString(),e.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?e.setAttribute("aria-live","off"):e.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?e.setAttribute("aria-relevant","additions"):e.setAttribute("aria-relevant","text"),e.addEventListener("click",this._onClick.bind(this)),e.addEventListener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusOut.bind(this))),e.style.pointerEvents=t.accessiblePointerEvents,e.type=t.accessibleType,t.accessibleTitle&&t.accessibleTitle!==null?e.title=t.accessibleTitle:(!t.accessibleHint||t.accessibleHint===null)&&(e.title=`container ${t.tabIndex}`),t.accessibleHint&&t.accessibleHint!==null&&e.setAttribute("aria-label",t.accessibleHint),this.debug&&this._updateDebugHTML(e),t._accessibleActive=!0,t._accessibleDiv=e,e.container=t,this._children.push(t),this._div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIndex=t.tabIndex;}_dispatchEvent(t,e){const{container:s}=t.target,i=this._renderer.events.rootBoundary,n=Object.assign(new We(i),{target:s});i.rootTarget=this._renderer.lastObjectRendered,e.forEach(o=>i.dispatchEvent(n,o));}_onClick(t){this._dispatchEvent(t,["click","pointertap","tap"]);}_onFocus(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","assertive"),this._dispatchEvent(t,["mouseover"]);}_onFocusOut(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","polite"),this._dispatchEvent(t,["mouseout"]);}_onKeyDown(t){t.keyCode===Tb&&this._activate();}_onMouseMove(t){t.movementX===0&&t.movementY===0||this._deactivate();}destroy(){this._destroyTouchHook(),this._div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this._pool=null,this._children=null,this._renderer=null;}}Ji.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:"accessibility"};const Ql={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,_renderId:-1};D.add(Ji),W.mixin(Ql);class tn{static init(t){Object.defineProperty(this,"resizeTo",{set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize());},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()));},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null);},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,s;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,s=globalThis.innerHeight;else {const{clientWidth:i,clientHeight:n}=this._resizeTo;e=i,s=n;}this.renderer.resize(e,s),this.render();},this._resizeId=null,this._resizeTo=null,this.resizeTo=t.resizeTo||null;}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null;}}tn.extension=b.Application;var Xt=(r=>(r[r.INTERACTION=50]="INTERACTION",r[r.HIGH=25]="HIGH",r[r.NORMAL=0]="NORMAL",r[r.LOW=-25]="LOW",r[r.UTILITY=-50]="UTILITY",r))(Xt||{});class as{constructor(t,e=null,s=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=s,this._once=i;}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this;}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const Jl=class yt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new as(null,null,1/0),this.deltaMS=1/yt.targetFPMS,this.elapsedMS=1/yt.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)));};}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick));}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null);}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start();}add(t,e,s=Xt.NORMAL){return this._addListener(new as(t,e,s))}addOnce(t,e,s=Xt.NORMAL){return this._addListener(new as(t,e,s,!0))}_addListener(t){let e=this._head.next,s=this._head;if(!e)t.connect(s);else {for(;e;){if(t.priority>e.priority){t.connect(s);break}s=e,e=e.next;}t.previous||t.connect(s);}return this._startIfPossible(),this}remove(t,e){let s=this._head.next;for(;s;)s.match(t,e)?s=s.destroy():s=s.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded());}stop(){this.started&&(this.started=!1,this._cancelIfNeeded());}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null;}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const n=t-this._lastFrame|0;if(n<this._minElapsedMS)return;this._lastFrame=t-n%this._minElapsedMS;}this.deltaMS=e,this.deltaTime=this.deltaMS*yt.targetFPMS;const s=this._head;let i=s.next;for(;i;)i=i.emit(this);s.next||this._cancelIfNeeded();}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t;}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),s=Math.min(Math.max(0,e)/1e3,yt.targetFPMS);this._maxElapsedMS=1/s;}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else {const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3);}}static get shared(){if(!yt._shared){const t=yt._shared=new yt;t.autoStart=!0,t._protected=!0;}return yt._shared}static get system(){if(!yt._system){const t=yt._system=new yt;t.autoStart=!0,t._protected=!0;}return yt._system}};Jl.targetFPMS=.06;let ht=Jl;class en{static init(t){t=Object.assign({autoStart:!0,sharedTicker:!1},t),Object.defineProperty(this,"ticker",{set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,Xt.LOW);},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop();},this.start=()=>{this._ticker.start();},this._ticker=null,this.ticker=t.sharedTicker?ht.shared:new ht,t.autoStart&&this.start();}static destroy(){if(this._ticker){const t=this._ticker;this.ticker=null,t.destroy();}}}en.extension=b.Application,D.add(tn),D.add(en);let Rb=class{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0;}init(t){this.removeTickerListener(),this.events=t,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0;}get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(t){this._pauseUpdate=t;}addTickerListener(){this._tickerAdded||!this.domElement||(ht.system.add(this._tickerUpdate,this,Xt.INTERACTION),this._tickerAdded=!0);}removeTickerListener(){this._tickerAdded&&(ht.system.remove(this._tickerUpdate,this),this._tickerAdded=!1);}pointerMoved(){this._didMove=!0;}_update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove){this._didMove=!1;return}const t=this.events._rootPointerEvent;this.events.supportsTouchEvents&&t.pointerType==="touch"||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:t.clientX,clientY:t.clientY}));}_tickerUpdate(t){this._deltaTime+=t.deltaTime,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this._update());}};const zt=new Rb;class or extends We{constructor(){super(...arguments),this.client=new j,this.movement=new j,this.offset=new j,this.global=new j,this.screen=new j;}get clientX(){return this.client.x}get clientY(){return this.client.y}get x(){return this.clientX}get y(){return this.clientY}get movementX(){return this.movement.x}get movementY(){return this.movement.y}get offsetX(){return this.offset.x}get offsetY(){return this.offset.y}get globalX(){return this.global.x}get globalY(){return this.global.y}get screenX(){return this.screen.x}get screenY(){return this.screen.y}getLocalPosition(t,e,s){return t.worldTransform.applyInverse(s||this.global,e)}getModifierState(t){return "getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(t)}initMouseEvent(t,e,s,i,n,o,a,u,l,h,c,d,f,p,g){throw new Error("Method not implemented.")}}class At extends or{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1;}getCoalescedEvents(){return this.type==="pointermove"||this.type==="mousemove"||this.type==="touchmove"?[this]:[]}getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}}class le extends or{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2;}}le.DOM_DELTA_PIXEL=0,le.DOM_DELTA_LINE=1,le.DOM_DELTA_PAGE=2;const Mb=2048,Ob=new j,ar=new j;class th{constructor(t){this.dispatch=new mt,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=new Map,this._allInteractiveElements=[],this._hitElements=[],this._isPointerMoveEvent=!1,this.rootTarget=t,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel);}addEventMapping(t,e){this.mappingTable[t]||(this.mappingTable[t]=[]),this.mappingTable[t].push({fn:e,priority:0}),this.mappingTable[t].sort((s,i)=>s.priority-i.priority);}dispatchEvent(t,e){t.propagationStopped=!1,t.propagationImmediatelyStopped=!1,this.propagate(t,e),this.dispatch.emit(e||t.type,t);}mapEvent(t){if(!this.rootTarget)return;const e=this.mappingTable[t.type];if(e)for(let s=0,i=e.length;s<i;s++)e[s].fn(t);}hitTest(t,e){zt.pauseUpdate=!0;const s=this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive",i=this[s](this.rootTarget,this.rootTarget.eventMode,Ob.set(t,e),this.hitTestFn,this.hitPruneFn);return i&&i[0]}propagate(t,e){if(!t.target)return;const s=t.composedPath();t.eventPhase=t.CAPTURING_PHASE;for(let i=0,n=s.length-1;i<n;i++)if(t.currentTarget=s[i],this.notifyTarget(t,e),t.propagationStopped||t.propagationImmediatelyStopped)return;if(t.eventPhase=t.AT_TARGET,t.currentTarget=t.target,this.notifyTarget(t,e),!(t.propagationStopped||t.propagationImmediatelyStopped)){t.eventPhase=t.BUBBLING_PHASE;for(let i=s.length-2;i>=0;i--)if(t.currentTarget=s[i],this.notifyTarget(t,e),t.propagationStopped||t.propagationImmediatelyStopped)return}}all(t,e,s=this._allInteractiveElements){if(s.length===0)return;t.eventPhase=t.BUBBLING_PHASE;const i=Array.isArray(e)?e:[e];for(let n=s.length-1;n>=0;n--)i.forEach(o=>{t.currentTarget=s[n],this.notifyTarget(t,o);});}propagationPath(t){const e=[t];for(let s=0;s<Mb&&t!==this.rootTarget&&t.parent;s++){if(!t.parent)throw new Error("Cannot find propagation path to disconnected target");e.push(t.parent),t=t.parent;}return e.reverse(),e}hitTestMoveRecursive(t,e,s,i,n,o=!1){let a=!1;if(this._interactivePrune(t))return null;if((t.eventMode==="dynamic"||e==="dynamic")&&(zt.pauseUpdate=!1),t.interactiveChildren&&t.children){const h=t.children;for(let c=h.length-1;c>=0;c--){const d=h[c],f=this.hitTestMoveRecursive(d,this._isInteractive(e)?e:d.eventMode,s,i,n,o||n(t,s));if(f){if(f.length>0&&!f[f.length-1].parent)continue;const p=t.isInteractive();(f.length>0||p)&&(p&&this._allInteractiveElements.push(t),f.push(t)),this._hitElements.length===0&&(this._hitElements=f),a=!0;}}}const u=this._isInteractive(e),l=t.isInteractive();return l&&l&&this._allInteractiveElements.push(t),o||this._hitElements.length>0?null:a?this._hitElements:u&&!n(t,s)&&i(t,s)?l?[t]:[]:null}hitTestRecursive(t,e,s,i,n){if(this._interactivePrune(t)||n(t,s))return null;if((t.eventMode==="dynamic"||e==="dynamic")&&(zt.pauseUpdate=!1),t.interactiveChildren&&t.children){const u=t.children,l=s;for(let h=u.length-1;h>=0;h--){const c=u[h],d=this.hitTestRecursive(c,this._isInteractive(e)?e:c.eventMode,l,i,n);if(d){if(d.length>0&&!d[d.length-1].parent)continue;const f=t.isInteractive();return (d.length>0||f)&&d.push(t),d}}}const o=this._isInteractive(e),a=t.isInteractive();return o&&i(t,s)?a?[t]:[]:null}_isInteractive(t){return t==="static"||t==="dynamic"}_interactivePrune(t){return !t||!t.visible||!t.renderable||t.eventMode==="none"||t.eventMode==="passive"&&!t.interactiveChildren}hitPruneFn(t,e){if(t.hitArea&&(t.worldTransform.applyInverse(e,ar),!t.hitArea.contains(ar.x,ar.y)))return !0;if(t.effects&&t.effects.length)for(let s=0;s<t.effects.length;s++){const i=t.effects[s];if(i.containsPoint&&!i.containsPoint(e,this.hitTestFn))return !0}return !1}hitTestFn(t,e){return t.hitArea?!0:t!=null&&t.containsPoint?(t.worldTransform.applyInverse(e,ar),t.containsPoint(ar)):!1}notifyTarget(t,e){var s,i;e=e!=null?e:t.type;const n=`on${e}`;(i=(s=t.currentTarget)[n])==null||i.call(s,t);const o=t.eventPhase===t.CAPTURING_PHASE||t.eventPhase===t.AT_TARGET?`${e}capture`:e;this._notifyListeners(t,o),t.eventPhase===t.AT_TARGET&&this._notifyListeners(t,e);}mapPointerDown(t){if(!(t instanceof At))return;const e=this.createPointerEvent(t);if(this.dispatchEvent(e,"pointerdown"),e.pointerType==="touch")this.dispatchEvent(e,"touchstart");else if(e.pointerType==="mouse"||e.pointerType==="pen"){const i=e.button===2;this.dispatchEvent(e,i?"rightdown":"mousedown");}const s=this.trackingData(t.pointerId);s.pressTargetsByButton[t.button]=e.composedPath(),this.freeEvent(e);}mapPointerMove(t){var e,s,i;if(!(t instanceof At))return;this._allInteractiveElements.length=0,this._hitElements.length=0,this._isPointerMoveEvent=!0;const n=this.createPointerEvent(t);this._isPointerMoveEvent=!1;const o=n.pointerType==="mouse"||n.pointerType==="pen",a=this.trackingData(t.pointerId),u=this.findMountedTarget(a.overTargets);if(((e=a.overTargets)==null?void 0:e.length)>0&&u!==n.target){const c=t.type==="mousemove"?"mouseout":"pointerout",d=this.createPointerEvent(t,c,u);if(this.dispatchEvent(d,"pointerout"),o&&this.dispatchEvent(d,"mouseout"),!n.composedPath().includes(u)){const f=this.createPointerEvent(t,"pointerleave",u);for(f.eventPhase=f.AT_TARGET;f.target&&!n.composedPath().includes(f.target);)f.currentTarget=f.target,this.notifyTarget(f),o&&this.notifyTarget(f,"mouseleave"),f.target=f.target.parent;this.freeEvent(f);}this.freeEvent(d);}if(u!==n.target){const c=t.type==="mousemove"?"mouseover":"pointerover",d=this.clonePointerEvent(n,c);this.dispatchEvent(d,"pointerover"),o&&this.dispatchEvent(d,"mouseover");let f=u==null?void 0:u.parent;for(;f&&f!==this.rootTarget.parent&&f!==n.target;)f=f.parent;if(!f||f===this.rootTarget.parent){const p=this.clonePointerEvent(n,"pointerenter");for(p.eventPhase=p.AT_TARGET;p.target&&p.target!==u&&p.target!==this.rootTarget.parent;)p.currentTarget=p.target,this.notifyTarget(p),o&&this.notifyTarget(p,"mouseenter"),p.target=p.target.parent;this.freeEvent(p);}this.freeEvent(d);}const l=[],h=(s=this.enableGlobalMoveEvents)!=null?s:!0;this.moveOnAll?l.push("pointermove"):this.dispatchEvent(n,"pointermove"),h&&l.push("globalpointermove"),n.pointerType==="touch"&&(this.moveOnAll?l.splice(1,0,"touchmove"):this.dispatchEvent(n,"touchmove"),h&&l.push("globaltouchmove")),o&&(this.moveOnAll?l.splice(1,0,"mousemove"):this.dispatchEvent(n,"mousemove"),h&&l.push("globalmousemove"),this.cursor=(i=n.target)==null?void 0:i.cursor),l.length>0&&this.all(n,l),this._allInteractiveElements.length=0,this._hitElements.length=0,a.overTargets=n.composedPath(),this.freeEvent(n);}mapPointerOver(t){var e;if(!(t instanceof At))return;const s=this.trackingData(t.pointerId),i=this.createPointerEvent(t),n=i.pointerType==="mouse"||i.pointerType==="pen";this.dispatchEvent(i,"pointerover"),n&&this.dispatchEvent(i,"mouseover"),i.pointerType==="mouse"&&(this.cursor=(e=i.target)==null?void 0:e.cursor);const o=this.clonePointerEvent(i,"pointerenter");for(o.eventPhase=o.AT_TARGET;o.target&&o.target!==this.rootTarget.parent;)o.currentTarget=o.target,this.notifyTarget(o),n&&this.notifyTarget(o,"mouseenter"),o.target=o.target.parent;s.overTargets=i.composedPath(),this.freeEvent(i),this.freeEvent(o);}mapPointerOut(t){if(!(t instanceof At))return;const e=this.trackingData(t.pointerId);if(e.overTargets){const s=t.pointerType==="mouse"||t.pointerType==="pen",i=this.findMountedTarget(e.overTargets),n=this.createPointerEvent(t,"pointerout",i);this.dispatchEvent(n),s&&this.dispatchEvent(n,"mouseout");const o=this.createPointerEvent(t,"pointerleave",i);for(o.eventPhase=o.AT_TARGET;o.target&&o.target!==this.rootTarget.parent;)o.currentTarget=o.target,this.notifyTarget(o),s&&this.notifyTarget(o,"mouseleave"),o.target=o.target.parent;e.overTargets=null,this.freeEvent(n),this.freeEvent(o);}this.cursor=null;}mapPointerUp(t){if(!(t instanceof At))return;const e=performance.now(),s=this.createPointerEvent(t);if(this.dispatchEvent(s,"pointerup"),s.pointerType==="touch")this.dispatchEvent(s,"touchend");else if(s.pointerType==="mouse"||s.pointerType==="pen"){const a=s.button===2;this.dispatchEvent(s,a?"rightup":"mouseup");}const i=this.trackingData(t.pointerId),n=this.findMountedTarget(i.pressTargetsByButton[t.button]);let o=n;if(n&&!s.composedPath().includes(n)){let a=n;for(;a&&!s.composedPath().includes(a);){if(s.currentTarget=a,this.notifyTarget(s,"pointerupoutside"),s.pointerType==="touch")this.notifyTarget(s,"touchendoutside");else if(s.pointerType==="mouse"||s.pointerType==="pen"){const u=s.button===2;this.notifyTarget(s,u?"rightupoutside":"mouseupoutside");}a=a.parent;}delete i.pressTargetsByButton[t.button],o=a;}if(o){const a=this.clonePointerEvent(s,"click");a.target=o,a.path=null,i.clicksByButton[t.button]||(i.clicksByButton[t.button]={clickCount:0,target:a.target,timeStamp:e});const u=i.clicksByButton[t.button];if(u.target===a.target&&e-u.timeStamp<200?++u.clickCount:u.clickCount=1,u.target=a.target,u.timeStamp=e,a.detail=u.clickCount,a.pointerType==="mouse"){const l=a.button===2;this.dispatchEvent(a,l?"rightclick":"click");}else a.pointerType==="touch"&&this.dispatchEvent(a,"tap");this.dispatchEvent(a,"pointertap"),this.freeEvent(a);}this.freeEvent(s);}mapPointerUpOutside(t){if(!(t instanceof At))return;const e=this.trackingData(t.pointerId),s=this.findMountedTarget(e.pressTargetsByButton[t.button]),i=this.createPointerEvent(t);if(s){let n=s;for(;n;)i.currentTarget=n,this.notifyTarget(i,"pointerupoutside"),i.pointerType==="touch"?this.notifyTarget(i,"touchendoutside"):(i.pointerType==="mouse"||i.pointerType==="pen")&&this.notifyTarget(i,i.button===2?"rightupoutside":"mouseupoutside"),n=n.parent;delete e.pressTargetsByButton[t.button];}this.freeEvent(i);}mapWheel(t){if(!(t instanceof le))return;const e=this.createWheelEvent(t);this.dispatchEvent(e),this.freeEvent(e);}findMountedTarget(t){if(!t)return null;let e=t[0];for(let s=1;s<t.length&&t[s].parent===e;s++)e=t[s];return e}createPointerEvent(t,e,s){var i;const n=this.allocateEvent(At);return this.copyPointerData(t,n),this.copyMouseData(t,n),this.copyData(t,n),n.nativeEvent=t.nativeEvent,n.originalEvent=t,n.target=(i=s!=null?s:this.hitTest(n.global.x,n.global.y))!=null?i:this._hitElements[0],typeof e=="string"&&(n.type=e),n}createWheelEvent(t){const e=this.allocateEvent(le);return this.copyWheelData(t,e),this.copyMouseData(t,e),this.copyData(t,e),e.nativeEvent=t.nativeEvent,e.originalEvent=t,e.target=this.hitTest(e.global.x,e.global.y),e}clonePointerEvent(t,e){const s=this.allocateEvent(At);return s.nativeEvent=t.nativeEvent,s.originalEvent=t.originalEvent,this.copyPointerData(t,s),this.copyMouseData(t,s),this.copyData(t,s),s.target=t.target,s.path=t.composedPath().slice(),s.type=e!=null?e:s.type,s}copyWheelData(t,e){e.deltaMode=t.deltaMode,e.deltaX=t.deltaX,e.deltaY=t.deltaY,e.deltaZ=t.deltaZ;}copyPointerData(t,e){t instanceof At&&e instanceof At&&(e.pointerId=t.pointerId,e.width=t.width,e.height=t.height,e.isPrimary=t.isPrimary,e.pointerType=t.pointerType,e.pressure=t.pressure,e.tangentialPressure=t.tangentialPressure,e.tiltX=t.tiltX,e.tiltY=t.tiltY,e.twist=t.twist);}copyMouseData(t,e){t instanceof or&&e instanceof or&&(e.altKey=t.altKey,e.button=t.button,e.buttons=t.buttons,e.client.copyFrom(t.client),e.ctrlKey=t.ctrlKey,e.metaKey=t.metaKey,e.movement.copyFrom(t.movement),e.screen.copyFrom(t.screen),e.shiftKey=t.shiftKey,e.global.copyFrom(t.global));}copyData(t,e){e.isTrusted=t.isTrusted,e.srcElement=t.srcElement,e.timeStamp=performance.now(),e.type=t.type,e.detail=t.detail,e.view=t.view,e.which=t.which,e.layer.copyFrom(t.layer),e.page.copyFrom(t.page);}trackingData(t){return this.mappingState.trackingData[t]||(this.mappingState.trackingData[t]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[t]}allocateEvent(t){this.eventPool.has(t)||this.eventPool.set(t,[]);const e=this.eventPool.get(t).pop()||new t(this);return e.eventPhase=e.NONE,e.currentTarget=null,e.path=null,e.target=null,e}freeEvent(t){if(t.manager!==this)throw new Error("It is illegal to free an event not managed by this EventBoundary!");const e=t.constructor;this.eventPool.has(e)||this.eventPool.set(e,[]),this.eventPool.get(e).push(t);}_notifyListeners(t,e){const s=t.currentTarget._events[e];if(s&&t.currentTarget.isInteractive())if("fn"in s)s.once&&t.currentTarget.removeListener(e,s.fn,void 0,!0),s.fn.call(s.context,t);else for(let i=0,n=s.length;i<n&&!t.propagationImmediatelyStopped;i++)s[i].once&&t.currentTarget.removeListener(e,s[i].fn,void 0,!0),s[i].fn.call(s[i].context,t);}}var Cb=Object.defineProperty,eh=Object.getOwnPropertySymbols,Gb=Object.prototype.hasOwnProperty,Ib=Object.prototype.propertyIsEnumerable,rh=(r,t,e)=>t in r?Cb(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Bb=(r,t)=>{for(var e in t||(t={}))Gb.call(t,e)&&rh(r,e,t[e]);if(eh)for(var e of eh(t))Ib.call(t,e)&&rh(r,e,t[e]);return r};const Fb=1,Db={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},rn=class Nu{constructor(t){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=t,this.rootBoundary=new th(null),zt.init(this),this.autoPreventDefault=!0,this._eventsAdded=!1,this._rootPointerEvent=new At(null),this._rootWheelEvent=new le(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy(Bb({},Nu.defaultEventFeatures),{set:(e,s,i)=>(s==="globalMove"&&(this.rootBoundary.enableGlobalMoveEvents=i),e[s]=i,!0)}),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerOverOut=this._onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this);}static get defaultEventMode(){return this._defaultEventMode}init(t){var e,s;const{canvas:i,resolution:n}=this.renderer;this.setTargetElement(i),this.resolution=n,Nu._defaultEventMode=(e=t.eventMode)!=null?e:"passive",Object.assign(this.features,(s=t.eventFeatures)!=null?s:{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove;}resolutionChange(t){this.resolution=t;}destroy(){this.setTargetElement(null),this.renderer=null,this._currentCursor=null;}setCursor(t){t=t||"default";let e=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(e=!1),this._currentCursor===t)return;this._currentCursor=t;const s=this.cursorStyles[t];if(s)switch(typeof s){case"string":e&&(this.domElement.style.cursor=s);break;case"function":s(t);break;case"object":e&&Object.assign(this.domElement.style,s);break}else e&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.domElement.style.cursor=t);}get pointer(){return this._rootPointerEvent}_onPointerDown(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this._normalizeToPointerData(t);this.autoPreventDefault&&e[0].isNormalized&&(t.cancelable||!("cancelable"in t))&&t.preventDefault();for(let s=0,i=e.length;s<i;s++){const n=e[s],o=this._bootstrapEvent(this._rootPointerEvent,n);this.rootBoundary.mapEvent(o);}this.setCursor(this.rootBoundary.cursor);}_onPointerMove(t){if(!this.features.move)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,zt.pointerMoved();const e=this._normalizeToPointerData(t);for(let s=0,i=e.length;s<i;s++){const n=this._bootstrapEvent(this._rootPointerEvent,e[s]);this.rootBoundary.mapEvent(n);}this.setCursor(this.rootBoundary.cursor);}_onPointerUp(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let e=t.target;t.composedPath&&t.composedPath().length>0&&(e=t.composedPath()[0]);const s=e!==this.domElement?"outside":"",i=this._normalizeToPointerData(t);for(let n=0,o=i.length;n<o;n++){const a=this._bootstrapEvent(this._rootPointerEvent,i[n]);a.type+=s,this.rootBoundary.mapEvent(a);}this.setCursor(this.rootBoundary.cursor);}_onPointerOverOut(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this._normalizeToPointerData(t);for(let s=0,i=e.length;s<i;s++){const n=this._bootstrapEvent(this._rootPointerEvent,e[s]);this.rootBoundary.mapEvent(n);}this.setCursor(this.rootBoundary.cursor);}onWheel(t){if(!this.features.wheel)return;const e=this.normalizeWheelEvent(t);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(e);}setTargetElement(t){this._removeEvents(),this.domElement=t,zt.domElement=t,this._addEvents();}_addEvents(){if(this._eventsAdded||!this.domElement)return;zt.addTickerListener();const t=this.domElement.style;t&&(globalThis.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this._onPointerMove,!0),this.domElement.addEventListener("pointerdown",this._onPointerDown,!0),this.domElement.addEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this._onPointerOverOut,!0),globalThis.addEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this._onPointerMove,!0),this.domElement.addEventListener("mousedown",this._onPointerDown,!0),this.domElement.addEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this._onPointerOverOut,!0),globalThis.addEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this._onPointerDown,!0),this.domElement.addEventListener("touchend",this._onPointerUp,!0),this.domElement.addEventListener("touchmove",this._onPointerMove,!0))),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this._eventsAdded=!0;}_removeEvents(){if(!this._eventsAdded||!this.domElement)return;zt.removeTickerListener();const t=this.domElement.style;t&&(globalThis.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction="")),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this._onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this._onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this._onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this._onPointerMove,!0),this.domElement.removeEventListener("mousedown",this._onPointerDown,!0),this.domElement.removeEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this._onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this._onPointerDown,!0),this.domElement.removeEventListener("touchend",this._onPointerUp,!0),this.domElement.removeEventListener("touchmove",this._onPointerMove,!0))),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this._eventsAdded=!1;}mapPositionToPoint(t,e,s){const i=this.domElement.isConnected?this.domElement.getBoundingClientRect():{x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0},n=1/this.resolution;t.x=(e-i.left)*(this.domElement.width/i.width)*n,t.y=(s-i.top)*(this.domElement.height/i.height)*n;}_normalizeToPointerData(t){const e=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(let s=0,i=t.changedTouches.length;s<i;s++){const n=t.changedTouches[s];typeof n.button=="undefined"&&(n.button=0),typeof n.buttons=="undefined"&&(n.buttons=1),typeof n.isPrimary=="undefined"&&(n.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof n.width=="undefined"&&(n.width=n.radiusX||1),typeof n.height=="undefined"&&(n.height=n.radiusY||1),typeof n.tiltX=="undefined"&&(n.tiltX=0),typeof n.tiltY=="undefined"&&(n.tiltY=0),typeof n.pointerType=="undefined"&&(n.pointerType="touch"),typeof n.pointerId=="undefined"&&(n.pointerId=n.identifier||0),typeof n.pressure=="undefined"&&(n.pressure=n.force||.5),typeof n.twist=="undefined"&&(n.twist=0),typeof n.tangentialPressure=="undefined"&&(n.tangentialPressure=0),typeof n.layerX=="undefined"&&(n.layerX=n.offsetX=n.clientX),typeof n.layerY=="undefined"&&(n.layerY=n.offsetY=n.clientY),n.isNormalized=!0,n.type=t.type,e.push(n);}else if(!globalThis.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof globalThis.PointerEvent))){const s=t;typeof s.isPrimary=="undefined"&&(s.isPrimary=!0),typeof s.width=="undefined"&&(s.width=1),typeof s.height=="undefined"&&(s.height=1),typeof s.tiltX=="undefined"&&(s.tiltX=0),typeof s.tiltY=="undefined"&&(s.tiltY=0),typeof s.pointerType=="undefined"&&(s.pointerType="mouse"),typeof s.pointerId=="undefined"&&(s.pointerId=Fb),typeof s.pressure=="undefined"&&(s.pressure=.5),typeof s.twist=="undefined"&&(s.twist=0),typeof s.tangentialPressure=="undefined"&&(s.tangentialPressure=0),s.isNormalized=!0,e.push(s);}else e.push(t);return e}normalizeWheelEvent(t){const e=this._rootWheelEvent;return this._transferMouseData(e,t),e.deltaX=t.deltaX,e.deltaY=t.deltaY,e.deltaZ=t.deltaZ,e.deltaMode=t.deltaMode,this.mapPositionToPoint(e.screen,t.clientX,t.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.nativeEvent=t,e.type=t.type,e}_bootstrapEvent(t,e){return t.originalEvent=null,t.nativeEvent=e,t.pointerId=e.pointerId,t.width=e.width,t.height=e.height,t.isPrimary=e.isPrimary,t.pointerType=e.pointerType,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist,this._transferMouseData(t,e),this.mapPositionToPoint(t.screen,e.clientX,e.clientY),t.global.copyFrom(t.screen),t.offset.copyFrom(t.screen),t.isTrusted=e.isTrusted,t.type==="pointerleave"&&(t.type="pointerout"),t.type.startsWith("mouse")&&(t.type=t.type.replace("mouse","pointer")),t.type.startsWith("touch")&&(t.type=Db[t.type]||t.type),t}_transferMouseData(t,e){t.isTrusted=e.isTrusted,t.srcElement=e.srcElement,t.timeStamp=performance.now(),t.type=e.type,t.altKey=e.altKey,t.button=e.button,t.buttons=e.buttons,t.client.x=e.clientX,t.client.y=e.clientY,t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,t.movement.x=e.movementX,t.movement.y=e.movementY,t.page.x=e.pageX,t.page.y=e.pageY,t.relatedTarget=null,t.shiftKey=e.shiftKey;}};rn.extension={name:"events",type:[b.WebGLSystem,b.CanvasSystem,b.WebGPUSystem],priority:-1},rn.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};let sn=rn;const sh={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,get interactive(){return this.eventMode==="dynamic"||this.eventMode==="static"},set interactive(r){this.eventMode=r?"static":"passive";},_internalEventMode:void 0,get eventMode(){var r;return (r=this._internalEventMode)!=null?r:sn.defaultEventMode},set eventMode(r){this._internalEventMode=r;},isInteractive(){return this.eventMode==="static"||this.eventMode==="dynamic"},interactiveChildren:!0,hitArea:null,addEventListener(r,t,e){const s=typeof e=="boolean"&&e||typeof e=="object"&&e.capture,i=typeof e=="object"?e.signal:void 0,n=typeof e=="object"?e.once===!0:!1,o=typeof t=="function"?void 0:t;r=s?`${r}capture`:r;const a=typeof t=="function"?t:t.handleEvent,u=this;i&&i.addEventListener("abort",()=>{u.off(r,a,o);}),n?u.once(r,a,o):u.on(r,a,o);},removeEventListener(r,t,e){const s=typeof e=="boolean"&&e||typeof e=="object"&&e.capture,i=typeof t=="function"?void 0:t;r=s?`${r}capture`:r,t=typeof t=="function"?t:t.handleEvent,this.off(r,t,i);},dispatchEvent(r){if(!(r instanceof We))throw new Error("Container cannot propagate events outside of the Federated Events API");return r.defaultPrevented=!1,r.path=null,r.target=this,r.manager.dispatchEvent(r),!r.defaultPrevented}};D.add(sn),W.mixin(sh);var gt=(r=>(r[r.Low=0]="Low",r[r.Normal=1]="Normal",r[r.High=2]="High",r))(gt||{});const ih={createCanvas:(r,t)=>{const e=document.createElement("canvas");return e.width=r,e.height=t,e},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>{var r;return (r=document.baseURI)!=null?r:window.location.href},getFontFaceSet:()=>document.fonts,fetch:(r,t)=>fetch(r,t),parseXML:r=>new DOMParser().parseFromString(r,"text/xml")};let nh=ih;const z={get(){return nh},set(r){nh=r;}};function Ot(r){if(typeof r!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(r)}`)}function ur(r){return r.split("?")[0].split("#")[0]}function Ub(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function kb(r,t,e){return r.replace(new RegExp(Ub(t),"g"),e)}function Lb(r,t){let e="",s=0,i=-1,n=0,o=-1;for(let a=0;a<=r.length;++a){if(a<r.length)o=r.charCodeAt(a);else {if(o===47)break;o=47;}if(o===47){if(!(i===a-1||n===1))if(i!==a-1&&n===2){if(e.length<2||s!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const u=e.lastIndexOf("/");if(u!==e.length-1){u===-1?(e="",s=0):(e=e.slice(0,u),s=e.length-1-e.lastIndexOf("/")),i=a,n=0;continue}}else if(e.length===2||e.length===1){e="",s=0,i=a,n=0;continue}}t&&(e.length>0?e+="/..":e="..",s=2);}else e.length>0?e+=`/${r.slice(i+1,a)}`:e=r.slice(i+1,a),s=a-i-1;i=a,n=0;}else o===46&&n!==-1?++n:n=-1;}return e}const ct={toPosix(r){return kb(r,"\\","/")},isUrl(r){return /^https?:/.test(this.toPosix(r))},isDataUrl(r){return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(r)},isBlobUrl(r){return r.startsWith("blob:")},hasProtocol(r){return /^[^/:]+:/.test(this.toPosix(r))},getProtocol(r){Ot(r),r=this.toPosix(r);const t=/^file:\/\/\//.exec(r);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(r);return e?e[0]:""},toAbsolute(r,t,e){if(Ot(r),this.isDataUrl(r)||this.isBlobUrl(r))return r;const s=ur(this.toPosix(t!=null?t:z.get().getBaseUrl())),i=ur(this.toPosix(e!=null?e:this.rootname(s)));return r=this.toPosix(r),r.startsWith("/")?ct.join(i,r.slice(1)):this.isAbsolute(r)?r:this.join(s,r)},normalize(r){if(Ot(r),r.length===0)return ".";if(this.isDataUrl(r)||this.isBlobUrl(r))return r;r=this.toPosix(r);let t="";const e=r.startsWith("/");this.hasProtocol(r)&&(t=this.rootname(r),r=r.slice(t.length));const s=r.endsWith("/");return r=Lb(r,!1),r.length>0&&s&&(r+="/"),e?`/${r}`:t+r},isAbsolute(r){return Ot(r),r=this.toPosix(r),this.hasProtocol(r)?!0:r.startsWith("/")},join(...r){var t;if(r.length===0)return ".";let e;for(let s=0;s<r.length;++s){const i=r[s];if(Ot(i),i.length>0)if(e===void 0)e=i;else {const n=(t=r[s-1])!=null?t:"";this.joinExtensions.includes(this.extname(n).toLowerCase())?e+=`/../${i}`:e+=`/${i}`;}}return e===void 0?".":this.normalize(e)},dirname(r){if(Ot(r),r.length===0)return ".";r=this.toPosix(r);let t=r.charCodeAt(0);const e=t===47;let s=-1,i=!0;const n=this.getProtocol(r),o=r;r=r.slice(n.length);for(let a=r.length-1;a>=1;--a)if(t=r.charCodeAt(a),t===47){if(!i){s=a;break}}else i=!1;return s===-1?e?"/":this.isUrl(o)?n+r:n:e&&s===1?"//":n+r.slice(0,s)},rootname(r){Ot(r),r=this.toPosix(r);let t="";if(r.startsWith("/")?t="/":t=this.getProtocol(r),this.isUrl(r)){const e=r.indexOf("/",t.length);e!==-1?t=r.slice(0,e):t=r,t.endsWith("/")||(t+="/");}return t},basename(r,t){Ot(r),t&&Ot(t),r=ur(this.toPosix(r));let e=0,s=-1,i=!0,n;if(t!==void 0&&t.length>0&&t.length<=r.length){if(t.length===r.length&&t===r)return "";let o=t.length-1,a=-1;for(n=r.length-1;n>=0;--n){const u=r.charCodeAt(n);if(u===47){if(!i){e=n+1;break}}else a===-1&&(i=!1,a=n+1),o>=0&&(u===t.charCodeAt(o)?--o===-1&&(s=n):(o=-1,s=a));}return e===s?s=a:s===-1&&(s=r.length),r.slice(e,s)}for(n=r.length-1;n>=0;--n)if(r.charCodeAt(n)===47){if(!i){e=n+1;break}}else s===-1&&(i=!1,s=n+1);return s===-1?"":r.slice(e,s)},extname(r){Ot(r),r=ur(this.toPosix(r));let t=-1,e=0,s=-1,i=!0,n=0;for(let o=r.length-1;o>=0;--o){const a=r.charCodeAt(o);if(a===47){if(!i){e=o+1;break}continue}s===-1&&(i=!1,s=o+1),a===46?t===-1?t=o:n!==1&&(n=1):t!==-1&&(n=-1);}return t===-1||s===-1||n===0||n===1&&t===s-1&&t===e+1?"":r.slice(t,s)},parse(r){Ot(r);const t={root:"",dir:"",base:"",ext:"",name:""};if(r.length===0)return t;r=ur(this.toPosix(r));let e=r.charCodeAt(0);const s=this.isAbsolute(r);let i;const n="";t.root=this.rootname(r),s||this.hasProtocol(r)?i=1:i=0;let o=-1,a=0,u=-1,l=!0,h=r.length-1,c=0;for(;h>=i;--h){if(e=r.charCodeAt(h),e===47){if(!l){a=h+1;break}continue}u===-1&&(l=!1,u=h+1),e===46?o===-1?o=h:c!==1&&(c=1):o!==-1&&(c=-1);}return o===-1||u===-1||c===0||c===1&&o===u-1&&o===a+1?u!==-1&&(a===0&&s?t.base=t.name=r.slice(1,u):t.base=t.name=r.slice(a,u)):(a===0&&s?(t.name=r.slice(1,o),t.base=r.slice(1,u)):(t.name=r.slice(a,o),t.base=r.slice(a,u)),t.ext=r.slice(o,u)),t.dir=this.dirname(r),n&&(t.dir=n+t.dir),t},sep:"/",delimiter:":",joinExtensions:[".html"]},Pt=(r,t,e=!1)=>(Array.isArray(r)||(r=[r]),t?r.map(s=>typeof s=="string"||e?t(s):s):r);function oh(r,t,e,s,i){const n=t[e];for(let o=0;o<n.length;o++){const a=n[o];e<t.length-1?oh(r.replace(s[e],a),t,e+1,s,i):i.push(r.replace(s[e],a));}}function ah(r){const t=/\{(.*?)\}/g,e=r.match(t),s=[];if(e){const i=[];e.forEach(n=>{const o=n.substring(1,n.length-1).split(",");i.push(o);}),oh(r,i,0,e,s);}else s.push(r);return s}const lr=r=>!Array.isArray(r);var $b=Object.defineProperty,Nb=Object.defineProperties,Hb=Object.getOwnPropertyDescriptors,uh=Object.getOwnPropertySymbols,Xb=Object.prototype.hasOwnProperty,zb=Object.prototype.propertyIsEnumerable,lh=(r,t,e)=>t in r?$b(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,we=(r,t)=>{for(var e in t||(t={}))Xb.call(t,e)&&lh(r,e,t[e]);if(uh)for(var e of uh(t))zb.call(t,e)&&lh(r,e,t[e]);return r},jb=(r,t)=>Nb(r,Hb(t));class qt{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={};}setBundleIdentifier(t){var e,s,i;if(this._bundleIdConnector=(e=t.connector)!=null?e:this._bundleIdConnector,this._createBundleAssetId=(s=t.createBundleAssetId)!=null?s:this._createBundleAssetId,this._extractAssetIdFromBundle=(i=t.extractAssetIdFromBundle)!=null?i:this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params));}),this._resolverHash={};}set basePath(t){this._basePath=t;}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t;}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null;}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else {const e=t;this._defaultSearchParams=Object.keys(e).map(s=>`${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`).join("&");}}getAlias(t){const{alias:e,src:s}=t;return Pt(e||s,i=>typeof i=="string"?i:Array.isArray(i)?i.map(n=>{var o;return (o=n==null?void 0:n.src)!=null?o:n}):i!=null&&i.src?i.src:i,!0)}addManifest(t){this._manifest,this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets);});}addBundle(t,e){const s=[];let i=e;Array.isArray(e)||(i=Object.entries(e).map(([n,o])=>typeof o=="string"||Array.isArray(o)?{alias:n,src:o}:we({alias:n},o))),i.forEach(n=>{const o=n.src,a=n.alias;let u;if(typeof a=="string"){const l=this._createBundleAssetId(t,a);s.push(l),u=[a,l];}else {const l=a.map(h=>this._createBundleAssetId(t,h));s.push(...l),u=[...a,...l];}this.add(jb(we({},n),{alias:u,src:o}));}),this._bundles[t]=s;}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let s;Pt(e).forEach(i=>{const{src:n}=i;let{data:o,format:a,loadParser:u}=i;const l=Pt(n).map(d=>typeof d=="string"?ah(d):Array.isArray(d)?d:[d]),h=this.getAlias(i),c=[];l.forEach(d=>{d.forEach(f=>{var p,g,m;let _={};if(typeof f!="object"){_.src=f;for(let x=0;x<this._parsers.length;x++){const v=this._parsers[x];if(v.test(f)){_=v.parse(f);break}}}else o=(p=f.data)!=null?p:o,a=(g=f.format)!=null?g:a,u=(m=f.loadParser)!=null?m:u,_=we(we({},_),f);if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${_.src}`);_=this._buildResolvedAsset(_,{aliases:h,data:o,format:a,loadParser:u}),c.push(_);});}),h.forEach(d=>{this._assetMap[d]=c;});});}resolveBundle(t){const e=lr(t);t=Pt(t);const s={};return t.forEach(i=>{const n=this._bundles[i];if(n){const o=this.resolve(n),a={};for(const u in o){const l=o[u];a[this._extractAssetIdFromBundle(i,u)]=l;}s[i]=a;}}),e?s[t[0]]:s}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const s={};for(const i in e)s[i]=e[i].src;return s}return e.src}resolve(t){const e=lr(t);t=Pt(t);const s={};return t.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let n=this._assetMap[i];const o=this._getPreferredOrder(n);o==null||o.priority.forEach(a=>{o.params[a].forEach(u=>{const l=n.filter(h=>h[a]?h[a]===u:!1);l.length&&(n=l);});}),this._resolverHash[i]=n[0];}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});s[i]=this._resolverHash[i];}),e?s[t[0]]:s}hasKey(t){return !!this._assetMap[t]}hasBundle(t){return !!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const s=t[0],i=this._preferredOrder.find(n=>n.params.format.includes(s.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return `${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){var s,i;const{aliases:n,data:o,loadParser:a,format:u}=e;return (this._basePath||this._rootPath)&&(t.src=ct.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=(s=n!=null?n:t.alias)!=null?s:[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data=we(we({},o||{}),t.data),t.loadParser=a!=null?a:t.loadParser,t.format=(i=u!=null?u:t.format)!=null?i:hh(t.src),t}}qt.RETINA_PREFIX=/@([0-9\.]+)x/;function hh(r){return r.split(".").pop().split("?").shift().split("#").shift()}const us=(r,t)=>{const e=t.split("?")[1];return e&&(r+=`?${e}`),r};let Wb=class{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map;}reset(){this._cacheMap.clear(),this._cache.clear();}has(t){return this._cache.has(t)}get(t){return this._cache.get(t)}set(t,e){const s=Pt(t);let i;for(let u=0;u<this.parsers.length;u++){const l=this.parsers[u];if(l.test(e)){i=l.getCacheableAssets(s,e);break}}const n=new Map(Object.entries(i||{}));i||s.forEach(u=>{n.set(u,e);});const o=[...n.keys()],a={cacheKeys:o,keys:s};s.forEach(u=>{this._cacheMap.set(u,a);}),o.forEach(u=>{const l=i?i[u]:e;this._cache.has(u)&&this._cache.get(u),this._cache.set(u,n.get(u));});}remove(t){if(!this._cacheMap.has(t))return;const e=this._cacheMap.get(t);e.cacheKeys.forEach(s=>{this._cache.delete(s);}),e.keys.forEach(s=>{this._cacheMap.delete(s);});}get parsers(){return this._parsers}};const Y=new Wb,he=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],ce=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],de=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],pe=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],nn=[],ch=[],ls=Math.sign;function Vb(){for(let r=0;r<16;r++){const t=[];nn.push(t);for(let e=0;e<16;e++){const s=ls(he[r]*he[e]+de[r]*ce[e]),i=ls(ce[r]*he[e]+pe[r]*ce[e]),n=ls(he[r]*de[e]+de[r]*pe[e]),o=ls(ce[r]*de[e]+pe[r]*pe[e]);for(let a=0;a<16;a++)if(he[a]===s&&ce[a]===i&&de[a]===n&&pe[a]===o){t.push(a);break}}}for(let r=0;r<16;r++){const t=new G;t.set(he[r],ce[r],de[r],pe[r],0,0),ch.push(t);}}Vb();const U={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:r=>he[r],uY:r=>ce[r],vX:r=>de[r],vY:r=>pe[r],inv:r=>r&8?r&15:-r&7,add:(r,t)=>nn[r][t],sub:(r,t)=>nn[r][U.inv(t)],rotate180:r=>r^4,isVertical:r=>(r&3)===2,byDirection:(r,t)=>Math.abs(r)*2<=Math.abs(t)?t>=0?U.S:U.N:Math.abs(t)*2<=Math.abs(r)?r>0?U.E:U.W:t>0?r>0?U.SE:U.SW:r>0?U.NE:U.NW,matrixAppendRotationInv:(r,t,e=0,s=0)=>{const i=ch[U.inv(t)];i.tx=e,i.ty=s,r.append(i);}},on=()=>{};function fe(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}function an(r){return !(r&r-1)&&!!r}function Yb(r){let t=(r>65535?1:0)<<4;r>>>=t;let e=(r>255?1:0)<<3;return r>>>=e,t|=e,e=(r>15?1:0)<<2,r>>>=e,t|=e,e=(r>3?1:0)<<1,r>>>=e,t|=e,t|r>>1}function Zt(r){const t={};for(const e in r)r[e]!==void 0&&(t[e]=r[e]);return t}var Kb=Object.defineProperty,dh=Object.getOwnPropertySymbols,qb=Object.prototype.hasOwnProperty,Zb=Object.prototype.propertyIsEnumerable,ph=(r,t,e)=>t in r?Kb(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,fh=(r,t)=>{for(var e in t||(t={}))qb.call(t,e)&&ph(r,e,t[e]);if(dh)for(var e of dh(t))Zb.call(t,e)&&ph(r,e,t[e]);return r};const mh=Object.create(null);function Qb(r){const t=mh[r];return t===void 0&&(mh[r]=Z("resource")),t}const gh=class Sx extends mt{constructor(t={}){var e,s,i,n,o,a,u;super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,t=fh(fh({},Sx.defaultOptions),t),this.addressMode=t.addressMode,this.addressModeU=(e=t.addressModeU)!=null?e:this.addressModeU,this.addressModeV=(s=t.addressModeV)!=null?s:this.addressModeV,this.addressModeW=(i=t.addressModeW)!=null?i:this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=(n=t.magFilter)!=null?n:this.magFilter,this.minFilter=(o=t.minFilter)!=null?o:this.minFilter,this.mipmapFilter=(a=t.mipmapFilter)!=null?a:this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=(u=t.maxAnisotropy)!=null?u:1;}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t;}get addressMode(){return this.addressModeU}set wrapMode(t){this.addressMode=t;}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t;}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear");}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null;}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=Qb(t),this._resourceId}destroy(){this.emit("destroy",this),this.removeAllListeners();}};gh.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let _h=gh;var Jb=Object.defineProperty,xh=Object.getOwnPropertySymbols,tv=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable,bh=(r,t,e)=>t in r?Jb(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,vh=(r,t)=>{for(var e in t||(t={}))tv.call(t,e)&&bh(r,e,t[e]);if(xh)for(var e of xh(t))ev.call(t,e)&&bh(r,e,t[e]);return r};const yh=class Ex extends mt{constructor(t={}){var e,s,i;super(),this.options=t,this.uid=Z("textureSource"),this._resourceType="textureSource",this._resourceId=Z("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t=vh(vh({},Ex.defaultOptions),t),this.label=(e=t.label)!=null?e:"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource&&(s=this.resourceWidth)!=null?s:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource&&(i=this.resourceHeight)!=null?i:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new _h(Zt(t)),this.destroyed=!1,this._refreshPOT();}get source(){return this}get style(){return this._style}set style(t){var e,s;this.style!==t&&((e=this._style)==null||e.off("change",this._onStyleChange,this),this._style=t,(s=this._style)==null||s.on("change",this._onStyleChange,this),this._onStyleChange());}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t;}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t;}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t;}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t;}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t;}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t;}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t;}_onStyleChange(){this.emit("styleChange",this);}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this);}destroy(){this.destroyed=!0,this.emit("destroy",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners();}unload(){this._resourceId=Z("resource"),this.emit("change",this),this.emit("unload",this);}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t);}resize(t,e,s){s=s||this._resolution,t=t||this.width,e=e||this.height;const i=Math.round(t*s),n=Math.round(e*s);return this.width=i/s,this.height=n/s,this._resolution=s,this.pixelWidth===i&&this.pixelHeight===n?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=n,this.emit("resize",this),this._resourceId=Z("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this);}set wrapMode(t){this._style.wrapMode=t;}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t;}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=an(this.pixelWidth)&&an(this.pixelHeight);}static test(t){throw new Error("Unimplemented")}};yh.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let et=yh;var rv=Object.defineProperty,sv=Object.defineProperties,iv=Object.getOwnPropertyDescriptors,Th=Object.getOwnPropertySymbols,nv=Object.prototype.hasOwnProperty,ov=Object.prototype.propertyIsEnumerable,Sh=(r,t,e)=>t in r?rv(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,av=(r,t)=>{for(var e in t||(t={}))nv.call(t,e)&&Sh(r,e,t[e]);if(Th)for(var e of Th(t))ov.call(t,e)&&Sh(r,e,t[e]);return r},uv=(r,t)=>sv(r,iv(t));class hs extends et{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let s=t.format;s||(e instanceof Float32Array?s="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?s="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?s="rgba16uint":(e instanceof Int8Array,s="bgra8unorm")),super(uv(av({},t),{resource:e,format:s})),this.uploadMethodId="buffer";}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}hs.extension=b.TextureSource;const un=[];D.handleByList(b.TextureSource,un);function Eh(r={}){const t=r&&r.resource,e=t?r.resource:r,s=t?r:{resource:r};for(let i=0;i<un.length;i++){const n=un[i];if(n.test(e))return new n(s)}throw new Error(`Could not find a source type for resource: ${s.resource}`)}function Ah(r={},t=!1){const e=r&&r.resource,s=e?r.resource:r,i=e?r:{resource:r};if(!t&&Y.has(s))return Y.get(s);const n=new A({source:Eh(i)});return n.on("destroy",()=>{Y.has(s)&&Y.remove(s);}),t||Y.set(s,n),n}const Ph=new G;class ln{constructor(t,e){this.mapCoord=new G,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e=="undefined"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t;}get texture(){return this._texture}set texture(t){var e;this.texture!==t&&((e=this._texture)==null||e.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update());}multiplyUvs(t,e){e===void 0&&(e=t);const s=this.mapCoord;for(let i=0;i<t.length;i+=2){const n=t[i],o=t[i+1];e[i]=n*s.a+o*s.c+s.tx,e[i+1]=n*s.b+o*s.d+s.ty;}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const s=t.orig,i=t.trim;i&&(Ph.set(s.width/i.width,0,0,s.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(Ph));const n=t.source,o=this.uClampFrame,a=this.clampMargin/n._resolution,u=this.clampOffset;return o[0]=(t.frame.x+a+u)/n.width,o[1]=(t.frame.y+a+u)/n.height,o[2]=(t.frame.x+t.frame.width-a+u)/n.width,o[3]=(t.frame.y+t.frame.height-a+u)/n.height,this.uClampOffset[0]=u/n.pixelWidth,this.uClampOffset[1]=u/n.pixelHeight,this.isSimple=t.frame.width===n.width&&t.frame.height===n.height&&t.rotate===0,!0}}class A extends mt{constructor({source:t,label:e,frame:s,orig:i,trim:n,defaultAnchor:o,defaultBorders:a,rotate:u}={}){var l;if(super(),this.uid=Z("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new H,this.noFrame=!1,this.isTexture=!0,this.label=e,this.source=(l=t==null?void 0:t.source)!=null?l:new et,this.noFrame=!s,s)this.frame.copyFrom(s);else {const{width:h,height:c}=this._source;this.frame.width=h,this.frame.height=c;}this.orig=i||this.frame,this.trim=n,this.rotate=u!=null?u:0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.updateUvs();}static from(t,e=!1){return typeof t=="string"?Y.get(t):t instanceof et?new A({source:t}):Ah(t,e)}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this);}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new ln(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:s,height:i}=this._source,n=e.x/s,o=e.y/i,a=e.width/s,u=e.height/i;let l=this.rotate;if(l){const h=a/2,c=u/2,d=n+h,f=o+c;l=U.add(l,U.NW),t.x0=d+h*U.uX(l),t.y0=f+c*U.uY(l),l=U.add(l,2),t.x1=d+h*U.uX(l),t.y1=f+c*U.uY(l),l=U.add(l,2),t.x2=d+h*U.uX(l),t.y2=f+c*U.uY(l),l=U.add(l,2),t.x3=d+h*U.uX(l),t.y3=f+c*U.uY(l);}else t.x0=n,t.y0=o,t.x1=n+a,t.y1=o,t.x2=n+a,t.y2=o+u,t.x3=n,t.y3=o+u;}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners();}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this);}get baseTexture(){return this._source}}A.EMPTY=new A({label:"EMPTY",source:new et({label:"EMPTY"})}),A.EMPTY.destroy=on,A.WHITE=new A({source:new hs({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"}),A.WHITE.destroy=on;const wh=class Wr{constructor(t,e){this.linkedSheets=[],this._texture=t instanceof A?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=e;const s=parseFloat(e.meta.scale);s?(this.resolution=s,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null;}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Wr.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch();})}_processFrames(t){let e=t;const s=Wr.BATCH_SIZE;for(;e-t<s&&e<this._frameKeys.length;){const i=this._frameKeys[e],n=this._frames[i],o=n.frame;if(o){let a=null,u=null;const l=n.trimmed!==!1&&n.sourceSize?n.sourceSize:n.frame,h=new H(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);n.rotated?a=new H(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new H(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),n.trimmed!==!1&&n.spriteSourceSize&&(u=new H(Math.floor(n.spriteSourceSize.x)/this.resolution,Math.floor(n.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new A({source:this.textureSource,frame:a,orig:h,trim:u,rotate:n.rotated?2:0,defaultAnchor:n.anchor,defaultBorders:n.borders,label:i.toString()});}e++;}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let s=0;s<t[e].length;s++){const i=t[e][s];this.animations[e].push(this.textures[i]);}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures);}_nextBatch(){this._processFrames(this._batchIndex*Wr.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Wr.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete());},0);}destroy(t=!1){var e;for(const s in this.textures)this.textures[s].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[];}};wh.BATCH_SIZE=1e3;let hn=wh;const lv=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Rh(r,t,e){const s={};if(r.forEach(i=>{s[i]=t;}),Object.keys(t.textures).forEach(i=>{s[i]=t.textures[i];}),!e){const i=ct.dirname(r[0]);t.linkedSheets.forEach((n,o)=>{const a=Rh([`${i}/${t.data.meta.related_multi_packs[o]}`],n,!0);Object.assign(s,a);});}return s}const Mh={extension:b.Asset,cache:{test:r=>r instanceof hn,getCacheableAssets:(r,t)=>Rh(r,t,!1)},resolver:{test:r=>{const t=r.split("?")[0].split("."),e=t.pop(),s=t.pop();return e==="json"&&lv.includes(s)},parse:r=>{var t,e;const s=r.split(".");return {resolution:parseFloat((e=(t=qt.RETINA_PREFIX.exec(r))==null?void 0:t[1])!=null?e:"1"),format:s[s.length-2],src:r}}},loader:{name:"spritesheetLoader",extension:{type:b.LoadParser,priority:gt.Normal},async testParse(r,t){return ct.extname(t.src).toLowerCase()===".json"&&!!r.frames},async parse(r,t,e){var s,i,n;const{texture:o,imageFilename:a}=(s=t==null?void 0:t.data)!=null?s:{};let u=ct.dirname(t.src);u&&u.lastIndexOf("/")!==u.length-1&&(u+="/");let l;if(o instanceof A)l=o;else {const d=us(u+(a!=null?a:r.meta.image),t.src);l=(await e.load([d]))[d];}const h=new hn(l.source,r);await h.parse();const c=(i=r==null?void 0:r.meta)==null?void 0:i.related_multi_packs;if(Array.isArray(c)){const d=[];for(const p of c){if(typeof p!="string")continue;let g=u+p;(n=t.data)!=null&&n.ignoreMultiPack||(g=us(g,t.src),d.push(e.load({src:g,data:{ignoreMultiPack:!0}})));}const f=await Promise.all(d);h.linkedSheets=f,f.forEach(p=>{p.linkedSheets=[h].concat(h.linkedSheets.filter(g=>g!==p));});}return h},unload(r){r.destroy(!0);}}};D.add(Mh);function hr(r,t,e,s){const{width:i,height:n}=e.orig,o=e.trim;if(o){const a=o.width,u=o.height;r.minX=o.x-t._x*i-s,r.maxX=r.minX+a,r.minY=o.y-t._y*n-s,r.maxY=r.minY+u;}else r.minX=-t._x*i-s,r.maxX=r.minX+i,r.minY=-t._y*n-s,r.maxY=r.minY+n;}var hv=Object.defineProperty,cs=Object.getOwnPropertySymbols,Oh=Object.prototype.hasOwnProperty,Ch=Object.prototype.propertyIsEnumerable,Gh=(r,t,e)=>t in r?hv(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,cv=(r,t)=>{for(var e in t||(t={}))Oh.call(t,e)&&Gh(r,e,t[e]);if(cs)for(var e of cs(t))Ch.call(t,e)&&Gh(r,e,t[e]);return r},dv=(r,t)=>{var e={};for(var s in r)Oh.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&cs)for(var s of cs(r))t.indexOf(s)<0&&Ch.call(r,s)&&(e[s]=r[s]);return e};class Ft extends W{constructor(t=A.EMPTY){t instanceof A&&(t={texture:t});const e=t,{texture:s,anchor:i,roundPixels:n,width:o,height:a}=e,u=dv(e,["texture","anchor","roundPixels","width","height"]);super(cv({label:"Sprite"},u)),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new rt({_onUpdate:()=>{this.onViewUpdate();}}),i&&(this.anchor=i),this.texture=s,this.allowChildren=!1,this.roundPixels=n!=null?n:!1,o&&(this.width=o),a&&(this.height=a);}static from(t,e=!1){return t instanceof A?new Ft(t):new Ft(A.from(t,e))}set texture(t){t||(t=A.EMPTY),this._texture!==t&&(this._texture=t,this.onViewUpdate());}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const e=this.sourceBounds;return t.x>=e.maxX&&t.x<=e.minX&&t.y>=e.maxY&&t.y<=e.minY}addBounds(t){const e=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY);}onViewUpdate(){this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,!this.didViewUpdate&&(this.didViewUpdate=!0,this.renderGroup&&this.renderGroup.onChildViewUpdate(this));}_updateBounds(){hr(this._bounds,this._anchor,this._texture,0);}_updateSourceBounds(){const t=this._anchor,e=this._texture,s=this._sourceBounds,{width:i,height:n}=e.orig;s.maxX=-t._x*i,s.minX=s.maxX+i,s.maxY=-t._y*n,s.minY=s.maxY+n;}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const e=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(e);}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null;}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t);}get roundPixels(){return !!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0;}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width);}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height);}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){var s;let i,n;typeof t!="object"?(i=t,n=e!=null?e:t):(i=t.width,n=(s=t.height)!=null?s:t.width),i!==void 0&&this._setWidth(i,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height);}}const pv=new lt;function ds(r,t,e){const s=pv;r.measurable=!0,sr(r,e,s),t.addBoundsMask(s),r.measurable=!1;}function ps(r,t,e){const s=kt.get();r.measurable=!0;const i=Ut.get().identity(),n=cn(r,e,i);ss(r,s,n),r.measurable=!1,t.addBoundsMask(s),Ut.return(i),kt.return(s);}function cn(r,t,e){return r&&r!==t&&(cn(r.parent,t,e),r.updateLocalTransform(),e.append(r.localTransform)),e}class dn{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask);}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Ft),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1;}reset(){this.mask.measurable=!0,this.mask=null;}addBounds(t,e){ds(this.mask,t,e);}addLocalBounds(t,e){ps(this.mask,t,e);}containsPoint(t,e){const s=this.mask;return e(s,t)}destroy(){this.reset();}static test(t){return t instanceof Ft}}dn.extension=b.MaskEffect;class pn{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask);}init(t){this.mask=t;}destroy(){}static test(t){return typeof t=="number"}}pn.extension=b.MaskEffect;class fn{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask);}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1;}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null;}addBounds(t,e){ds(this.mask,t,e);}addLocalBounds(t,e){ps(this.mask,t,e);}containsPoint(t,e){const s=this.mask;return e(s,t)}destroy(){this.reset();}static test(t){return t instanceof W}}fn.extension=b.MaskEffect;class Qt extends et{constructor(t){t.resource||(t.resource=z.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const e=t.resource;(this.pixelWidth!==e.width||this.pixelWidth!==e.height)&&this.resizeCanvas(),this.transparent=!!t.transparent;}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight);}resize(t=this.width,e=this.height,s=this._resolution){const i=super.resize(t,e,s);return i&&this.resizeCanvas(),i}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}Qt.extension=b.TextureSource;class me extends et{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const e=z.get().createCanvas(t.resource.width,t.resource.height);e.getContext("2d").drawImage(t.resource,0,0),t.resource=e;}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0;}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap}}me.extension=b.TextureSource;let mn;async function gn(){return mn!=null||(mn=(async()=>{var r;const t=document.createElement("canvas").getContext("webgl");if(!t)return "premultiply-alpha-on-upload";const e=await new Promise(o=>{const a=document.createElement("video");a.onloadeddata=()=>o(a),a.onerror=()=>o(null),a.autoplay=!1,a.crossOrigin="anonymous",a.preload="auto",a.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",a.load();});if(!e)return "premultiply-alpha-on-upload";const s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const n=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n),t.deleteFramebuffer(i),t.deleteTexture(s),(r=t.getExtension("WEBGL_lose_context"))==null||r.loseContext(),n[0]<=n[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),mn}var fv=Object.defineProperty,mv=Object.defineProperties,gv=Object.getOwnPropertyDescriptors,Ih=Object.getOwnPropertySymbols,_v=Object.prototype.hasOwnProperty,xv=Object.prototype.propertyIsEnumerable,Bh=(r,t,e)=>t in r?fv(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,_n=(r,t)=>{for(var e in t||(t={}))_v.call(t,e)&&Bh(r,e,t[e]);if(Ih)for(var e of Ih(t))xv.call(t,e)&&Bh(r,e,t[e]);return r},bv=(r,t)=>mv(r,gv(t));const fs=class Ax extends et{constructor(t){var e;super(t),this.isReady=!1,this.uploadMethodId="video",t=_n(_n({},Ax.defaultOptions),t),this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=(e=t.alphaMode)!=null?e:"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load();}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=ht.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t);}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update();}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.source.requestVideoFrameCallback(this._videoFrameRequestCallback);}get isValid(){return !!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return (t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await gn(),this._load=new Promise((s,i)=>{this.isValid?s(this):(this._resolve=s,this._reject=i,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`));})),t.load());}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null);}_isSourcePlaying(){const t=this.resource;return !t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate();}_onPlayStop(){this._configureAutoUpdate();}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0);}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady();}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady();}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play();}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy();}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate());}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate());}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.source.requestVideoFrameCallback?(this._isConnectedToTicker&&(ht.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.source.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(ht.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(ht.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0));}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};fs.extension=b.TextureSource,fs.defaultOptions=bv(_n({},et.defaultOptions),{autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1}),fs.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let cr=fs;D.add(dn,pn,fn,cr,me,Qt,hs);var $=(r=>(r[r.MAP_READ=1]="MAP_READ",r[r.MAP_WRITE=2]="MAP_WRITE",r[r.COPY_SRC=4]="COPY_SRC",r[r.COPY_DST=8]="COPY_DST",r[r.INDEX=16]="INDEX",r[r.VERTEX=32]="VERTEX",r[r.UNIFORM=64]="UNIFORM",r[r.STORAGE=128]="STORAGE",r[r.INDIRECT=256]="INDIRECT",r[r.QUERY_RESOLVE=512]="QUERY_RESOLVE",r[r.STATIC=1024]="STATIC",r))($||{});class _t extends mt{constructor(t){let{data:e,size:s}=t;const{usage:i,label:n,shrinkToFit:o}=t;super(),this.uid=Z("buffer"),this._resourceType="buffer",this._resourceId=Z("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,e instanceof Array&&(e=new Float32Array(e)),this._data=e,s=s!=null?s:e==null?void 0:e.byteLength;const a=!!e;this.descriptor={size:s,usage:i,mappedAtCreation:a,label:n},this.shrinkToFit=o!=null?o:!0;}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0);}get static(){return !!(this.descriptor.usage&$.STATIC)}set static(t){t?this.descriptor.usage|=$.STATIC:this.descriptor.usage&=~$.STATIC;}setDataWithSize(t,e,s){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){s&&this.emit("update",this);return}const i=this._data;if(this._data=t,i.length!==t.length){!this.shrinkToFit&&t.byteLength<i.byteLength?s&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=Z("resource"),this.emit("change",this));return}s&&this.emit("update",this);}update(t){this._updateSize=t!=null?t:this._updateSize,this._updateID++,this.emit("update",this);}destroy(){this.emit("destroy",this),this._data=null,this.descriptor=null,this.removeAllListeners();}}function xn(r,t){if(!(r instanceof _t)){let e=t?$.INDEX:$.VERTEX;r instanceof Array&&(t?(r=new Uint32Array(r),e=$.INDEX|$.COPY_DST):(r=new Float32Array(r),e=$.VERTEX|$.COPY_DST)),r=new _t({data:r,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e});}return r}function Fh(r,t,e){const s=r.getAttribute(t);if(!s)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const i=s.buffer.data;let n=1/0,o=1/0,a=-1/0,u=-1/0;const l=i.BYTES_PER_ELEMENT,h=(s.offset||0)/l,c=(s.stride||2*4)/l;for(let d=h;d<i.length;d+=c){const f=i[d],p=i[d+1];f>a&&(a=f),p>u&&(u=p),f<n&&(n=f),p<o&&(o=p);}return e.minX=n,e.minY=o,e.maxX=a,e.maxY=u,e}function vv(r){return (r instanceof _t||Array.isArray(r)||r.BYTES_PER_ELEMENT)&&(r={buffer:r}),r.buffer=xn(r.buffer,!1),r}class Re extends mt{constructor(t){const{attributes:e,indexBuffer:s,topology:i}=t;super(),this.uid=Z("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new lt,this._boundsDirty=!0,this.attributes=e,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const n in e){const o=e[n]=vv(e[n]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this));}s&&(this.indexBuffer=xn(s,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list";}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this);}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Fh(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null;}}const yv=new Float32Array(1),Tv=new Uint32Array(1);class bn extends Re{constructor(){const t=new _t({data:yv,label:"attribute-batch-buffer",usage:$.VERTEX|$.COPY_DST,shrinkToFit:!1}),e=new _t({data:Tv,label:"index-batch-buffer",usage:$.INDEX|$.COPY_DST,shrinkToFit:!1}),s=6*4;super({attributes:{aPosition:{buffer:t,format:"float32x2",stride:s,offset:0,location:1},aUV:{buffer:t,format:"float32x2",stride:s,offset:2*4,location:3},aColor:{buffer:t,format:"unorm8x4",stride:s,offset:4*4,location:0},aTextureIdAndRound:{buffer:t,format:"uint16x2",stride:s,offset:5*4,location:2}},indexBuffer:e});}}class Lt{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const s in t){const i=t[s];this.setResource(i,e++);}this._updateKey();}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const s in this.resources)t[e++]=this.resources[s]._resourceId;this._key=t.join("|");}setResource(t,e){var s,i;const n=this.resources[e];t!==n&&(n&&((s=t.off)==null||s.call(t,"change",this.onResourceChange,this)),(i=t.on)==null||i.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0);}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const s in e)e[s]._touched=t;}destroy(){var t;const e=this.resources;for(const s in e){const i=e[s];(t=i.off)==null||t.call(i,"change",this.onResourceChange,this);}this.resources=null;}onResourceChange(){this._dirty=!0,this._updateKey();}}const wt=16,Dh={};function ms(r,t){let e=0;for(let s=0;s<t;s++)e=e*31+r[s].uid>>>0;return Dh[e]||Sv(r,e)}function Sv(r,t){const e={};let s=0;for(let n=0;n<wt;n++){const o=n<r.length?r[n]:A.EMPTY.source;e[s++]=o.source,e[s++]=o.style;}const i=new Lt(e);return Dh[t]=i,i}class vn{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength;}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null;}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function gs(r,t){const e=r.byteLength/8|0,s=new Float64Array(r,0,e);new Float64Array(t,0,e).set(s);const i=r.byteLength-e*8;if(i>0){const n=new Uint8Array(r,e*8,i);new Uint8Array(t,e*8,i).set(n);}}const Uh={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var nt=(r=>(r[r.DISABLED=0]="DISABLED",r[r.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",r[r.MASK_ACTIVE=2]="MASK_ACTIVE",r[r.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",r[r.NONE=4]="NONE",r))(nt||{});function yn(r,t){return t.alphaMode==="no-premultiply-alpha"&&Uh[r]||r}class Tn{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0;}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null;}this.count=0;}}var Ev=Object.defineProperty,kh=Object.getOwnPropertySymbols,Av=Object.prototype.hasOwnProperty,Pv=Object.prototype.propertyIsEnumerable,Lh=(r,t,e)=>t in r?Ev(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,$h=(r,t)=>{for(var e in t||(t={}))Av.call(t,e)&&Lh(r,e,t[e]);if(kh)for(var e of kh(t))Pv.call(t,e)&&Lh(r,e,t[e]);return r};class Sn{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0;}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null;}}let dr=0;const Nh=class Px{constructor(t={}){this.uid=Z("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,t=$h($h({},Px.defaultOptions),t);const{vertexSize:e,indexSize:s}=t;this.attributeBuffer=new vn(e*this._vertexSize*4),this.indexBuffer=new Uint16Array(s);}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0;}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize;}checkAndUpdateTexture(t,e){const s=t.batch.textures.ids[e._source.uid];return !s&&s!==0?!1:(t.textureId=s,t.texture=e,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId);}break(t){const e=this._elements;let s=this._textureBatchPool[this._textureBatchPoolIndex++]||new Tn;if(s.clear(),!e[this.elementStart])return;const i=e[this.elementStart];let n=yn(i.blendMode,i.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,u=this.indexBuffer;let l=this._batchIndexSize,h=this._batchIndexStart,c="startBatch",d=this._batchPool[this._batchPoolIndex++]||new Sn;for(let f=this.elementStart;f<this.elementSize;++f){const p=e[f];e[f]=null;const g=p.texture._source,m=yn(p.blendMode,g),_=n!==m;if(g._batchTick===dr&&!_){p.textureId=g._textureBindLocation,l+=p.indexSize,p.packAttributes(o,a,p.location,p.textureId),p.packIndex(u,p.indexStart,p.location/this._vertexSize),p.batch=d;continue}g._batchTick=dr,(s.count>=wt||_)&&(this._finishBatch(d,h,l-h,s,n,t,c),c="renderBatch",h=l,n=m,s=this._textureBatchPool[this._textureBatchPoolIndex++]||new Tn,s.clear(),d=this._batchPool[this._batchPoolIndex++]||new Sn,++dr),p.textureId=g._textureBindLocation=s.count,s.ids[g.uid]=s.count,s.textures[s.count++]=g,p.batch=d,l+=p.indexSize,p.packAttributes(o,a,p.location,p.textureId),p.packIndex(u,p.indexStart,p.location/this._vertexSize);}s.count>0&&(this._finishBatch(d,h,l-h,s,n,t,c),h=l,++dr),this.elementStart=this.elementSize,this._batchIndexStart=h,this._batchIndexSize=l;}_finishBatch(t,e,s,i,n,o,a){t.gpuBindGroup=null,t.action=a,t.batcher=this,t.textures=i,t.blendMode=n,t.start=e,t.size=s,++dr,o.add(t);}finish(t){this.break(t);}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4);}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t);}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),s=new vn(e);gs(this.attributeBuffer.rawBinaryData,s.rawBinaryData),this.attributeBuffer=s;}_resizeIndexBuffer(t){const e=this.indexBuffer;let s=Math.max(t,e.length*1.5);s+=s%2;const i=s>65535?new Uint32Array(s):new Uint16Array(s);if(i.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let n=0;n<e.length;n++)i[n]=e[n];else gs(e.buffer,i.buffer);this.indexBuffer=i;}destroy(){for(let t=0;t<this.batches.length;t++)this.batches[t].destroy();this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null;}};Nh.defaultOptions={vertexSize:4,indexSize:6};let En=Nh;function An(r,t,e,s,i,n,o,a=null){let u=0;e*=t,i*=n;const l=a.a,h=a.b,c=a.c,d=a.d,f=a.tx,p=a.ty;for(;u<o;){const g=r[e],m=r[e+1];s[i]=l*g+c*m+f,s[i+1]=h*g+d*m+p,i+=n,e+=t,u++;}}function Pn(r,t,e,s){let i=0;for(t*=e;i<s;)r[t]=0,r[t+1]=0,t+=e,i++;}function _s(r,t,e,s,i){const n=t.a,o=t.b,a=t.c,u=t.d,l=t.tx,h=t.ty;e=e||0,s=s||2,i=i||r.length/s-e;let c=e*s;for(let d=0;d<i;d++){const f=r[c],p=r[c+1];r[c]=n*f+a*p+l,r[c+1]=o*f+u*p+h,c+=s;}}function wn(r,t,e){const s=r>>16&255,i=r>>8&255,n=r&255,o=t>>16&255,a=t>>8&255,u=t&255,l=s+(o-s)*e,h=i+(a-i)*e,c=n+(u-n)*e;return (l<<16)+(h<<8)+c}const Hh=33554430;function xs(r,t){return r+(t<<32)!==Hh?r===16777215?t:t===16777215?r:wn(r,t,.5):16777215}function wv(r,t,e){const s=(e>>24&255)/255,i=t*s*255,n=((r&255)<<16)+(r&65280)+(r>>16&255),o=e&16777215;let a=16777215;return n+(o<<32)!==Hh&&(n===16777215?a=o:o===16777215?a=n:a=wn(n,o,.5)),a+(i<<24)}class bs{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0;}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,e,s){const i=this.geometryData.indices;for(let n=0;n<this.indexSize;n++)t[e++]=i[n+this.indexOffset]+s-this.vertexOffset;}packAttributes(t,e,s,i){const n=this.geometryData,o=this.renderable,a=n.vertices,u=n.uvs,l=this.vertexOffset*2,h=(this.vertexOffset+this.vertexSize)*2,c=this.color,d=c>>16|c&65280|(c&255)<<16;if(this.applyTransform){const f=xs(d,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),p=o.groupTransform,g=i<<16|this.roundPixels&65535,m=p.a,_=p.b,x=p.c,v=p.d,y=p.tx,S=p.ty;for(let w=l;w<h;w+=2){const R=a[w],P=a[w+1];t[s]=m*R+x*P+y,t[s+1]=_*R+v*P+S,t[s+2]=u[w],t[s+3]=u[w+1],e[s+4]=f,e[s+5]=g,s+=6;}}else {const f=d+(this.alpha*255<<24);for(let p=l;p<h;p+=2)t[s]=a[p],t[s+1]=a[p+1],t[s+2]=u[p],t[s+3]=u[p+1],e[s+4]=f,e[s+5]=i<<16,s+=6;}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData;}reset(){this.applyTransform=!0;}}const ge={build(r,t){let e,s,i,n,o,a;if(r.type==="circle"){const y=r;e=y.x,s=y.y,o=a=y.radius,i=n=0;}else if(r.type==="ellipse"){const y=r;e=y.x,s=y.y,o=y.halfWidth,a=y.halfHeight,i=n=0;}else {const y=r,S=y.width/2,w=y.height/2;e=y.x+S,s=y.y+w,o=a=Math.max(0,Math.min(y.radius,Math.min(S,w))),i=S-o,n=w-a;}if(!(o>=0&&a>=0&&i>=0&&n>=0))return t;const u=Math.ceil(2.3*Math.sqrt(o+a)),l=u*8+(i?4:0)+(n?4:0);if(l===0)return t;if(u===0)return t[0]=t[6]=e+i,t[1]=t[3]=s+n,t[2]=t[4]=e-i,t[5]=t[7]=s-n,t;let h=0,c=u*4+(i?2:0)+2,d=c,f=l,p=i+o,g=n,m=e+p,_=e-p,x=s+g;if(t[h++]=m,t[h++]=x,t[--c]=x,t[--c]=_,n){const y=s-g;t[d++]=_,t[d++]=y,t[--f]=y,t[--f]=m;}for(let y=1;y<u;y++){const S=Math.PI/2*(y/u),w=i+Math.cos(S)*o,R=n+Math.sin(S)*a,P=e+w,T=e-w,E=s+R,L=s-R;t[h++]=P,t[h++]=E,t[--c]=E,t[--c]=T,t[d++]=T,t[d++]=L,t[--f]=L,t[--f]=P;}p=i,g=n+a,m=e+p,_=e-p,x=s+g;const v=s-g;return t[h++]=m,t[h++]=x,t[--f]=v,t[--f]=m,i&&(t[h++]=_,t[h++]=x,t[--f]=v,t[--f]=_),t},triangulate(r,t,e,s,i,n){if(r.length===0)return;let o=0,a=0;for(let h=0;h<r.length;h+=2)o+=r[h],a+=r[h+1];o/=r.length/2,a/=r.length/2;let u=s;t[u*e]=o,t[u*e+1]=a;const l=u++;for(let h=0;h<r.length;h+=2)t[u*e]=r[h],t[u*e+1]=r[h+1],h>0&&(i[n++]=u,i[n++]=l,i[n++]=u-1),u++;i[n++]=l+1,i[n++]=l,i[n++]=u-1;}},Xh=1e-4,Rn=1e-4;function zh(r){const t=r.length;if(t<6)return 1;let e=0;for(let s=0,i=r[t-2],n=r[t-1];s<t;s+=2){const o=r[s],a=r[s+1];e+=(o-i)*(a+n),i=o,n=a;}return e<0?-1:1}function jh(r,t,e,s,i,n,o,a){const u=r-e*i,l=t-s*i,h=r+e*n,c=t+s*n;let d,f;o?(d=s,f=-e):(d=-s,f=e);const p=u+d,g=l+f,m=h+d,_=c+f;return a.push(p,g),a.push(m,_),2}function _e(r,t,e,s,i,n,o,a){const u=e-r,l=s-t;let h=Math.atan2(u,l),c=Math.atan2(i-r,n-t);a&&h<c?h+=Math.PI*2:!a&&h>c&&(c+=Math.PI*2);let d=h;const f=c-h,p=Math.abs(f),g=Math.sqrt(u*u+l*l),m=(15*p*Math.sqrt(g)/Math.PI>>0)+1,_=f/m;if(d+=_,a){o.push(r,t),o.push(e,s);for(let x=1,v=d;x<m;x++,v+=_)o.push(r,t),o.push(r+Math.sin(v)*g,t+Math.cos(v)*g);o.push(r,t),o.push(i,n);}else {o.push(e,s),o.push(r,t);for(let x=1,v=d;x<m;x++,v+=_)o.push(r+Math.sin(v)*g,t+Math.cos(v)*g),o.push(r,t);o.push(i,n),o.push(r,t);}return m*2}function Wh(r,t,e,s,i,n,o,a,u){const l=Xh;if(r.length===0)return;const h=t;let c=h.alignment;if(t.alignment!==.5){let K=zh(r);e&&(K*=-1),c=(c-.5)*K+.5;}const d=new j(r[0],r[1]),f=new j(r[r.length-2],r[r.length-1]),p=s,g=Math.abs(d.x-f.x)<l&&Math.abs(d.y-f.y)<l;if(p){r=r.slice(),g&&(r.pop(),r.pop(),f.set(r[r.length-2],r[r.length-1]));const K=(d.x+f.x)*.5,Kt=(f.y+d.y)*.5;r.unshift(K,Kt),r.push(K,Kt);}const m=i,_=r.length/2;let x=r.length;const v=m.length/2,y=h.width/2,S=y*y,w=h.miterLimit*h.miterLimit;let R=r[0],P=r[1],T=r[2],E=r[3],L=0,k=0,C=-(P-E),M=R-T,q=0,J=0,ft=Math.sqrt(C*C+M*M);C/=ft,M/=ft,C*=y,M*=y;const Ke=c,B=(1-Ke)*2,F=Ke*2;p||(h.cap==="round"?x+=_e(R-C*(B-F)*.5,P-M*(B-F)*.5,R-C*B,P-M*B,R+C*F,P+M*F,m,!0)+2:h.cap==="square"&&(x+=jh(R,P,C,M,B,F,!0,m))),m.push(R-C*B,P-M*B),m.push(R+C*F,P+M*F);for(let K=1;K<_-1;++K){R=r[(K-1)*2],P=r[(K-1)*2+1],T=r[K*2],E=r[K*2+1],L=r[(K+1)*2],k=r[(K+1)*2+1],C=-(P-E),M=R-T,ft=Math.sqrt(C*C+M*M),C/=ft,M/=ft,C*=y,M*=y,q=-(E-k),J=T-L,ft=Math.sqrt(q*q+J*J),q/=ft,J/=ft,q*=y,J*=y;const Kt=T-R,qe=P-E,Ze=T-L,Qe=k-E,Ku=Kt*Ze+qe*Qe,Yr=qe*Ze-Qe*Kt,Je=Yr<0;if(Math.abs(Yr)<.001*Math.abs(Ku)){m.push(T-C*B,E-M*B),m.push(T+C*F,E+M*F),Ku>=0&&(h.join==="round"?x+=_e(T,E,T-C*B,E-M*B,T-q*B,E-J*B,m,!1)+4:x+=2,m.push(T-q*F,E-J*F),m.push(T+q*B,E+J*B));continue}const qu=(-C+R)*(-M+E)-(-C+T)*(-M+P),Zu=(-q+L)*(-J+E)-(-q+T)*(-J+k),Kr=(Kt*Zu-Ze*qu)/Yr,qr=(Qe*qu-qe*Zu)/Yr,Bi=(Kr-T)*(Kr-T)+(qr-E)*(qr-E),ne=T+(Kr-T)*B,oe=E+(qr-E)*B,ae=T-(Kr-T)*F,ue=E-(qr-E)*F,Vx=Math.min(Kt*Kt+qe*qe,Ze*Ze+Qe*Qe),Qu=Je?B:F,Yx=Vx+Qu*Qu*S;Bi<=Yx?h.join==="bevel"||Bi/S>w?(Je?(m.push(ne,oe),m.push(T+C*F,E+M*F),m.push(ne,oe),m.push(T+q*F,E+J*F)):(m.push(T-C*B,E-M*B),m.push(ae,ue),m.push(T-q*B,E-J*B),m.push(ae,ue)),x+=2):h.join==="round"?Je?(m.push(ne,oe),m.push(T+C*F,E+M*F),x+=_e(T,E,T+C*F,E+M*F,T+q*F,E+J*F,m,!0)+4,m.push(ne,oe),m.push(T+q*F,E+J*F)):(m.push(T-C*B,E-M*B),m.push(ae,ue),x+=_e(T,E,T-C*B,E-M*B,T-q*B,E-J*B,m,!1)+4,m.push(T-q*B,E-J*B),m.push(ae,ue)):(m.push(ne,oe),m.push(ae,ue)):(m.push(T-C*B,E-M*B),m.push(T+C*F,E+M*F),h.join==="round"?Je?x+=_e(T,E,T+C*F,E+M*F,T+q*F,E+J*F,m,!0)+2:x+=_e(T,E,T-C*B,E-M*B,T-q*B,E-J*B,m,!1)+2:h.join==="miter"&&Bi/S<=w&&(Je?(m.push(ae,ue),m.push(ae,ue)):(m.push(ne,oe),m.push(ne,oe)),x+=2),m.push(T-q*B,E-J*B),m.push(T+q*F,E+J*F),x+=2);}R=r[(_-2)*2],P=r[(_-2)*2+1],T=r[(_-1)*2],E=r[(_-1)*2+1],C=-(P-E),M=R-T,ft=Math.sqrt(C*C+M*M),C/=ft,M/=ft,C*=y,M*=y,m.push(T-C*B,E-M*B),m.push(T+C*F,E+M*F),p||(h.cap==="round"?x+=_e(T-C*(B-F)*.5,E-M*(B-F)*.5,T-C*B,E-M*B,T+C*F,E+M*F,m,!1)+2:h.cap==="square"&&(x+=jh(T,E,C,M,B,F,!1,m)));const Wx=Rn*Rn;for(let K=v;K<x+v-2;++K)R=m[K*2],P=m[K*2+1],T=m[(K+1)*2],E=m[(K+1)*2+1],L=m[(K+2)*2],k=m[(K+2)*2+1],!(Math.abs(R*(E-k)+T*(k-P)+L*(P-E))<Wx)&&a.push(K,K+1,K+2);}var vs={exports:{}},nP=vs.exports;vs.exports=ys;var oP=vs.exports.default=ys;function ys(r,t,e){e=e||2;var s=t&&t.length,i=s?t[0]*e:r.length,n=Vh(r,0,i,e,!0),o=[];if(!n||n.next===n.prev)return o;var a,u,l,h,c,d,f;if(s&&(n=Gv(r,t,n,e)),r.length>80*e){a=l=r[0],u=h=r[1];for(var p=e;p<i;p+=e)c=r[p],d=r[p+1],c<a&&(a=c),d<u&&(u=d),c>l&&(l=c),d>h&&(h=d);f=Math.max(l-a,h-u),f=f!==0?32767/f:0;}return pr(n,o,e,a,u,f,0),o}function Vh(r,t,e,s,i){var n,o;if(i===Cn(r,t,e,s)>0)for(n=t;n<e;n+=s)o=qh(n,r[n],r[n+1],o);else for(n=e-s;n>=t;n-=s)o=qh(n,r[n],r[n+1],o);return o&&Ts(o,o.next)&&(mr(o),o=o.next),o}function xe(r,t){if(!r)return r;t||(t=r);var e=r,s;do if(s=!1,!e.steiner&&(Ts(e,e.next)||Q(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;s=!0;}else e=e.next;while(s||e!==t);return t}function pr(r,t,e,s,i,n,o){if(r){!o&&n&&Uv(r,s,i,n);for(var a=r,u,l;r.prev!==r.next;){if(u=r.prev,l=r.next,n?Mv(r,s,i,n):Rv(r)){t.push(u.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),mr(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Ov(xe(r),t,e),pr(r,t,e,s,i,n,2)):o===2&&Cv(r,t,e,s,i,n):pr(xe(r),t,e,s,i,n,1);break}}}}function Rv(r){var t=r.prev,e=r,s=r.next;if(Q(t,e,s)>=0)return !1;for(var i=t.x,n=e.x,o=s.x,a=t.y,u=e.y,l=s.y,h=i<n?i<o?i:o:n<o?n:o,c=a<u?a<l?a:l:u<l?u:l,d=i>n?i>o?i:o:n>o?n:o,f=a>u?a>l?a:l:u>l?u:l,p=s.next;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=c&&p.y<=f&&Me(i,a,n,u,o,l,p.x,p.y)&&Q(p.prev,p,p.next)>=0)return !1;p=p.next;}return !0}function Mv(r,t,e,s){var i=r.prev,n=r,o=r.next;if(Q(i,n,o)>=0)return !1;for(var a=i.x,u=n.x,l=o.x,h=i.y,c=n.y,d=o.y,f=a<u?a<l?a:l:u<l?u:l,p=h<c?h<d?h:d:c<d?c:d,g=a>u?a>l?a:l:u>l?u:l,m=h>c?h>d?h:d:c>d?c:d,_=Mn(f,p,t,e,s),x=Mn(g,m,t,e,s),v=r.prevZ,y=r.nextZ;v&&v.z>=_&&y&&y.z<=x;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&Me(a,h,u,c,l,d,v.x,v.y)&&Q(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=g&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Me(a,h,u,c,l,d,y.x,y.y)&&Q(y.prev,y,y.next)>=0))return !1;y=y.nextZ;}for(;v&&v.z>=_;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&Me(a,h,u,c,l,d,v.x,v.y)&&Q(v.prev,v,v.next)>=0)return !1;v=v.prevZ;}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=g&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Me(a,h,u,c,l,d,y.x,y.y)&&Q(y.prev,y,y.next)>=0)return !1;y=y.nextZ;}return !0}function Ov(r,t,e){var s=r;do{var i=s.prev,n=s.next.next;!Ts(i,n)&&Yh(i,s,s.next,n)&&fr(i,n)&&fr(n,i)&&(t.push(i.i/e|0),t.push(s.i/e|0),t.push(n.i/e|0),mr(s),mr(s.next),s=r=n),s=s.next;}while(s!==r);return xe(s)}function Cv(r,t,e,s,i,n){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&$v(o,a)){var u=Kh(o,a);o=xe(o,o.next),u=xe(u,u.next),pr(o,t,e,s,i,n,0),pr(u,t,e,s,i,n,0);return}a=a.next;}o=o.next;}while(o!==r)}function Gv(r,t,e,s){var i=[],n,o,a,u,l;for(n=0,o=t.length;n<o;n++)a=t[n]*s,u=n<o-1?t[n+1]*s:r.length,l=Vh(r,a,u,s,!1),l===l.next&&(l.steiner=!0),i.push(Lv(l));for(i.sort(Iv),n=0;n<i.length;n++)e=Bv(i[n],e);return e}function Iv(r,t){return r.x-t.x}function Bv(r,t){var e=Fv(r,t);if(!e)return t;var s=Kh(e,r);return xe(s,s.next),xe(e,e.next)}function Fv(r,t){var e=t,s=r.x,i=r.y,n=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var a=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=s&&a>n&&(n=a,o=e.x<e.next.x?e:e.next,a===s))return o}e=e.next;}while(e!==t);if(!o)return null;var u=o,l=o.x,h=o.y,c=1/0,d;e=o;do s>=e.x&&e.x>=l&&s!==e.x&&Me(i<h?s:n,i,l,h,i<h?n:s,i,e.x,e.y)&&(d=Math.abs(i-e.y)/(s-e.x),fr(e,r)&&(d<c||d===c&&(e.x>o.x||e.x===o.x&&Dv(o,e)))&&(o=e,c=d)),e=e.next;while(e!==u);return o}function Dv(r,t){return Q(r.prev,r,t.prev)<0&&Q(t.next,r,r.next)<0}function Uv(r,t,e,s){var i=r;do i.z===0&&(i.z=Mn(i.x,i.y,t,e,s)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,kv(i);}function kv(r){var t,e,s,i,n,o,a,u,l=1;do{for(e=r,r=null,n=null,o=0;e;){for(o++,s=e,a=0,t=0;t<l&&(a++,s=s.nextZ,!!s);t++);for(u=l;a>0||u>0&&s;)a!==0&&(u===0||!s||e.z<=s.z)?(i=e,e=e.nextZ,a--):(i=s,s=s.nextZ,u--),n?n.nextZ=i:r=i,i.prevZ=n,n=i;e=s;}n.nextZ=null,l*=2;}while(o>1);return r}function Mn(r,t,e,s,i){return r=(r-e)*i|0,t=(t-s)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Lv(r){var t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Me(r,t,e,s,i,n,o,a){return (i-o)*(t-a)>=(r-o)*(n-a)&&(r-o)*(s-a)>=(e-o)*(t-a)&&(e-o)*(n-a)>=(i-o)*(s-a)}function $v(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Nv(r,t)&&(fr(r,t)&&fr(t,r)&&Hv(r,t)&&(Q(r.prev,r,t.prev)||Q(r,t.prev,t))||Ts(r,t)&&Q(r.prev,r,r.next)>0&&Q(t.prev,t,t.next)>0)}function Q(r,t,e){return (t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ts(r,t){return r.x===t.x&&r.y===t.y}function Yh(r,t,e,s){var i=Es(Q(r,t,e)),n=Es(Q(r,t,s)),o=Es(Q(e,s,r)),a=Es(Q(e,s,t));return !!(i!==n&&o!==a||i===0&&Ss(r,e,t)||n===0&&Ss(r,s,t)||o===0&&Ss(e,r,s)||a===0&&Ss(e,t,s))}function Ss(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Es(r){return r>0?1:r<0?-1:0}function Nv(r,t){var e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Yh(e,e.next,r,t))return !0;e=e.next;}while(e!==r);return !1}function fr(r,t){return Q(r.prev,r,r.next)<0?Q(r,t,r.next)>=0&&Q(r,r.prev,t)>=0:Q(r,t,r.prev)<0||Q(r,r.next,t)<0}function Hv(r,t){var e=r,s=!1,i=(r.x+t.x)/2,n=(r.y+t.y)/2;do e.y>n!=e.next.y>n&&e.next.y!==e.y&&i<(e.next.x-e.x)*(n-e.y)/(e.next.y-e.y)+e.x&&(s=!s),e=e.next;while(e!==r);return s}function Kh(r,t){var e=new On(r.i,r.x,r.y),s=new On(t.i,t.x,t.y),i=r.next,n=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,s.next=e,e.prev=s,n.next=s,s.prev=n,s}function qh(r,t,e,s){var i=new On(r,t,e);return s?(i.next=s.next,i.prev=s,s.next.prev=i,s.next=i):(i.prev=i,i.next=i),i}function mr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ);}function On(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1;}ys.deviation=function(r,t,e,s){var i=t&&t.length,n=i?t[0]*e:r.length,o=Math.abs(Cn(r,0,n,e));if(i)for(var a=0,u=t.length;a<u;a++){var l=t[a]*e,h=a<u-1?t[a+1]*e:r.length;o-=Math.abs(Cn(r,l,h,e));}var c=0;for(a=0;a<s.length;a+=3){var d=s[a]*e,f=s[a+1]*e,p=s[a+2]*e;c+=Math.abs((r[d]-r[p])*(r[f+1]-r[d+1])-(r[d]-r[f])*(r[p+1]-r[d+1]));}return o===0&&c===0?0:Math.abs((c-o)/o)};function Cn(r,t,e,s){for(var i=0,n=t,o=e-s;n<e;n+=s)i+=(r[o]-r[n])*(r[n+1]+r[o+1]),o=n;return i}ys.flatten=function(r){for(var t=r[0][0].length,e={vertices:[],holes:[],dimensions:t},s=0,i=0;i<r.length;i++){for(var n=0;n<r[i].length;n++)for(var o=0;o<t;o++)e.vertices.push(r[i][n][o]);i>0&&(s+=r[i-1].length,e.holes.push(s));}return e};var Xv=vs.exports,Zh=Di(Xv);function Gn(r,t,e,s,i,n,o){const a=Zh(r,t,2);if(!a)return;for(let l=0;l<a.length;l+=3)n[o++]=a[l]+i,n[o++]=a[l+1]+i,n[o++]=a[l+2]+i;let u=i*s;for(let l=0;l<r.length;l+=2)e[u]=r[l],e[u+1]=r[l+1],u+=s;}const zv=[],In={build(r,t){for(let e=0;e<r.points.length;e++)t[e]=r.points[e];return t},triangulate(r,t,e,s,i,n){Gn(r,zv,t,e,s,i,n);}},Bn={build(r,t){const e=r,s=e.x,i=e.y,n=e.width,o=e.height;return n>=0&&o>=0&&(t[0]=s,t[1]=i,t[2]=s+n,t[3]=i,t[4]=s+n,t[5]=i+o,t[6]=s,t[7]=i+o),t},triangulate(r,t,e,s,i,n){let o=0;s*=e,t[s+o]=r[0],t[s+o+1]=r[1],o+=e,t[s+o]=r[2],t[s+o+1]=r[3],o+=e,t[s+o]=r[6],t[s+o+1]=r[7],o+=e,t[s+o]=r[4],t[s+o+1]=r[5],o+=e;const a=s/e;i[n++]=a,i[n++]=a+1,i[n++]=a+2,i[n++]=a+1,i[n++]=a+3,i[n++]=a+2;}},Fn={build(r,t){return t[0]=r.x,t[1]=r.y,t[2]=r.x2,t[3]=r.y2,t[4]=r.x3,t[5]=r.y3,t},triangulate(r,t,e,s,i,n){let o=0;s*=e,t[s+o]=r[0],t[s+o+1]=r[1],o+=e,t[s+o]=r[2],t[s+o+1]=r[3],o+=e,t[s+o]=r[4],t[s+o+1]=r[5];const a=s/e;i[n++]=a,i[n++]=a+1,i[n++]=a+2;}},Dn={rectangle:Bn,polygon:In,triangle:Fn,circle:ge,ellipse:ge,roundedRectangle:ge},jv=new H;function Qh(r){const t={vertices:[],uvs:[],indices:[]},e=[];for(let s=0;s<r.instructions.length;s++){const i=r.instructions[s];if(i.action==="texture")Wv(i.data,e,t);else if(i.action==="fill"||i.action==="stroke"){const n=i.action==="stroke",o=i.data.path.shapePath,a=i.data.style,u=i.data.hole;n&&u&&Jh(u.shapePath,a,null,!0,e,t),Jh(o,a,u,n,e,t);}}return e}function Wv(r,t,e){const{vertices:s,uvs:i,indices:n}=e,o=n.length,a=s.length/2,u=[],l=Dn.rectangle,h=jv,c=r.image;h.x=r.dx,h.y=r.dy,h.width=r.dw,h.height=r.dh;const d=r.transform;l.build(h,u),d&&_s(u,d),l.triangulate(u,s,2,a,n,o);const f=c.uvs;i.push(f.x0,f.y0,f.x1,f.y1,f.x3,f.y3,f.x2,f.y2);const p=X.get(bs);p.indexOffset=o,p.indexSize=n.length-o,p.vertexOffset=a,p.vertexSize=s.length/2-a,p.color=r.style,p.alpha=r.alpha,p.texture=c,p.geometryData=e,t.push(p);}function Jh(r,t,e,s,i,n){const{vertices:o,uvs:a,indices:u}=n,l=r.shapePrimitives.length-1;r.shapePrimitives.forEach(({shape:h,transform:c},d)=>{var f;const p=u.length,g=o.length/2,m=[],_=Dn[h.type];if(_.build(h,m),c&&_s(m,c),s){const S=(f=h.closePath)!=null?f:!0;Wh(m,t,!1,S,o,2,g,u,p);}else if(e&&l===d){l!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const S=[],w=m.slice();Vv(e.shapePath).forEach(R=>{S.push(w.length/2),w.push(...R);}),Gn(w,S,o,2,g,u,p);}else _.triangulate(m,o,2,g,u,p);const x=a.length/2,v=t.texture;if(v!==A.WHITE){const S=t.matrix;c&&S.append(c.clone().invert()),An(o,2,g,a,x,2,o.length/2-g,S);}else Pn(a,x,2,o.length/2-g);const y=X.get(bs);y.indexOffset=p,y.indexSize=u.length-p,y.vertexOffset=g,y.vertexSize=o.length/2-g,y.color=t.color,y.alpha=t.alpha,y.texture=v,y.geometryData=n,i.push(y);});}function Vv(r){if(!r)return [];const t=r.shapePrimitives,e=[];for(let s=0;s<t.length;s++){const i=t[s].shape,n=[];Dn[i.type].build(i,n),e.push(n);}return e}class tc{}class ec{constructor(){this.geometry=new bn,this.instructions=new Wi;}init(){this.instructions.reset();}}const Un=class Hu{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null),this._needsContextNeedsRebuild=[];}init(t){var e;Hu.defaultOptions.bezierSmoothness=(e=t==null?void 0:t.bezierSmoothness)!=null?e:Hu.defaultOptions.bezierSmoothness;}prerender(){this._returnActiveBatchers();}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let e=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){e?this._cleanGraphicsContextData(t):e=this._initContext(t);const s=Qh(t);let i=0;const n=t.batchMode;let o=!0;if(t.customShader||n==="no-batch")o=!1;else if(n==="auto"){for(let a=0;a<s.length;a++)if(i+=s[a].vertexSize,i>400){o=!1;break}}e=this._gpuContextHash[t.uid]={isBatchable:o,batches:s},t.dirty=!1;}return e}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_returnActiveBatchers(){for(let t=0;t<this._activeBatchers.length;t++)X.return(this._activeBatchers[t]);this._activeBatchers.length=0;}_initContextRenderData(t){const e=X.get(ec),s=this._gpuContextHash[t.uid].batches;let i=0,n=0;s.forEach(l=>{l.applyTransform=!1,i+=l.geometryData.vertices.length,n+=l.geometryData.indices.length;});const o=X.get(En);this._activeBatchers.push(o),o.ensureAttributeBuffer(i),o.ensureIndexBuffer(n),o.begin();for(let l=0;l<s.length;l++){const h=s[l];o.add(h);}o.finish(e.instructions);const a=e.geometry;a.indexBuffer.setDataWithSize(o.indexBuffer,o.indexSize,!0),a.buffers[0].setDataWithSize(o.attributeBuffer.float32View,o.attributeSize,!0);const u=o.batches;for(let l=0;l<u.length;l++){const h=u[l];h.bindGroup=ms(h.textures.textures,h.textures.count);}return this._graphicsDataContextHash[t.uid]=e,e}_initContext(t){const e=new tc;return this._gpuContextHash[t.uid]=e,t.on("update",this.onGraphicsContextUpdate,this),t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextUpdate(t){this._needsContextNeedsRebuild.push(t);}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("update",this.onGraphicsContextUpdate,this),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null;}_cleanGraphicsContextData(t){const e=this._gpuContextHash[t.uid];e.isBatchable||this._graphicsDataContextHash[t.uid]&&(X.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),e.batches&&e.batches.forEach(s=>{X.return(s);});}destroy(){for(const t of this._needsContextNeedsRebuild)this._gpuContextHash[t.uid]&&this.onGraphicsContextDestroy(t);this._needsContextNeedsRebuild.length=0;}};Un.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:"graphicsContext"},Un.defaultOptions={bezierSmoothness:.5};let As=Un;const Yv={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},kn=0,Ln=1,$n=2,Nn=3,Hn=4,Xn=5,zn=class wx{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0;}get blend(){return !!(this.data&1<<kn)}set blend(t){!!(this.data&1<<kn)!==t&&(this.data^=1<<kn);}get offsets(){return !!(this.data&1<<Ln)}set offsets(t){!!(this.data&1<<Ln)!==t&&(this.data^=1<<Ln);}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front";}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return !!(this.data&1<<$n)}set culling(t){!!(this.data&1<<$n)!==t&&(this.data^=1<<$n);}get depthTest(){return !!(this.data&1<<Nn)}set depthTest(t){!!(this.data&1<<Nn)!==t&&(this.data^=1<<Nn);}get depthMask(){return !!(this.data&1<<Xn)}set depthMask(t){!!(this.data&1<<Xn)!==t&&(this.data^=1<<Xn);}get clockwiseFrontFace(){return !!(this.data&1<<Hn)}set clockwiseFrontFace(t){!!(this.data&1<<Hn)!==t&&(this.data^=1<<Hn);}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=Yv[t]||0;}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t;}static for2d(){const t=new wx;return t.depthTest=!1,t.blend=!0,t}};zn.default2d=zn.for2d();let Ct=zn;function Kv(r,t,e,s){e[s++]=(r>>16&255)/255,e[s++]=(r>>8&255)/255,e[s++]=(r&255)/255,e[s++]=t;}function gr(r,t,e){const s=(r>>24&255)/255;t[e++]=(r&255)/255*s,t[e++]=(r>>8&255)/255*s,t[e++]=(r>>16&255)/255*s,t[e++]=s;}class jn{constructor(t,e){this.state=Ct.for2d(),this._graphicsBatchesHash=Object.create(null),this.renderer=t,this._adaptor=e,this._adaptor.init();}validateRenderable(t){const e=t.context,s=!!this._graphicsBatchesHash[t.uid],i=this.renderer.graphicsContext.updateGpuContext(e);return !!(i.isBatchable||s!==i.isBatchable)}addRenderable(t,e){const s=this.renderer.graphicsContext.updateGpuContext(t.context);t._didGraphicsUpdate&&(t._didGraphicsUpdate=!1,this._rebuild(t)),s.isBatchable?this._addToBatcher(t,e):(this.renderer.renderPipes.batch.break(e),e.add(t));}updateRenderable(t){const e=this._graphicsBatchesHash[t.uid];if(e)for(let s=0;s<e.length;s++){const i=e[s];i.batcher.updateElement(i);}}destroyRenderable(t){this._graphicsBatchesHash[t.uid]&&this._removeBatchForRenderable(t.uid);}execute(t){if(!t.isRenderable)return;const e=this.renderer,s=t.context;if(!e.graphicsContext.getGpuContext(s).batches.length)return;const i=s.customShader||this._adaptor.shader;this.state.blendMode=t.groupBlendMode;const n=i.resources.localUniforms.uniforms;n.uTransformMatrix=t.groupTransform,n.uRound=e._roundPixels|t._roundPixels,gr(t.groupColorAlpha,n.uColor,0),this._adaptor.execute(this,t);}_rebuild(t){const e=!!this._graphicsBatchesHash[t.uid],s=this.renderer.graphicsContext.updateGpuContext(t.context);e&&this._removeBatchForRenderable(t.uid),s.isBatchable&&this._initBatchesForRenderable(t),t.batched=s.isBatchable;}_addToBatcher(t,e){const s=this.renderer.renderPipes.batch,i=this._getBatchesForRenderable(t);for(let n=0;n<i.length;n++){const o=i[n];s.addToBatch(o,e);}}_getBatchesForRenderable(t){return this._graphicsBatchesHash[t.uid]||this._initBatchesForRenderable(t)}_initBatchesForRenderable(t){const e=t.context,s=this.renderer.graphicsContext.getGpuContext(e),i=this.renderer._roundPixels|t._roundPixels,n=s.batches.map(o=>{const a=X.get(bs);return o.copyTo(a),a.renderable=t,a.roundPixels=i,a});return this._graphicsBatchesHash[t.uid]=n,t.on("destroyed",()=>{this.destroyRenderable(t);}),n}_removeBatchForRenderable(t){this._graphicsBatchesHash[t].forEach(e=>{X.return(e);}),this._graphicsBatchesHash[t]=null;}destroy(){this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null;for(const t in this._graphicsBatchesHash)this._removeBatchForRenderable(t);this._graphicsBatchesHash=null;}}jn.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"graphics"},D.add(jn),D.add(As);const Wn=Object.create(null),rc=Object.create(null);function _r(r,t){let e=rc[r];return e===void 0&&(Wn[t]===void 0&&(Wn[t]=1),rc[r]=e=Wn[t]++),e}function sc(r,t){switch(r){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var qv=Object.defineProperty,ic=Object.getOwnPropertySymbols,Zv=Object.prototype.hasOwnProperty,Qv=Object.prototype.propertyIsEnumerable,nc=(r,t,e)=>t in r?qv(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,oc=(r,t)=>{for(var e in t||(t={}))Zv.call(t,e)&&nc(r,e,t[e]);if(ic)for(var e of ic(t))Qv.call(t,e)&&nc(r,e,t[e]);return r};const ac=class Rx{constructor(t,e){this._touched=0,this.uid=Z("uniform"),this._resourceType="uniformGroup",this._resourceId=Z("resource"),this.isUniformGroup=!0,this._dirtyId=0;var s,i;e=oc(oc({},Rx.defaultOptions),e),this.uniformStructures=t;const n={};for(const o in t){const a=t[o];a.name=o,a.size=(s=a.size)!=null?s:1,(i=a.value)!=null||(a.value=sc(a.type,a.size)),n[o]=a.value;}this.uniforms=n,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=_r(Object.keys(n).map(o=>`${o}-${t[o].type}`).join("-"),"uniform-group");}update(){this._dirtyId++;}};ac.defaultOptions={ubo:!1,isStatic:!1};let st=ac;class Ps{constructor(){this.batcher=null,this.batch=null,this.roundPixels=0;}get blendMode(){return this.mesh.groupBlendMode}reset(){this.mesh=null,this.texture=null,this.batcher=null,this.batch=null;}packIndex(t,e,s){const i=this.geometry.indices;for(let n=0;n<i.length;n++)t[e++]=i[n]+s;}packAttributes(t,e,s,i){const n=this.mesh,o=this.geometry,a=n.groupTransform,u=i<<16|this.roundPixels&65535,l=a.a,h=a.b,c=a.c,d=a.d,f=a.tx,p=a.ty,g=o.positions,m=o.uvs,_=n.groupColorAlpha;for(let x=0;x<g.length;x+=2){const v=g[x],y=g[x+1];t[s]=l*v+c*y+f,t[s+1]=h*v+d*y+p,t[s+2]=m[x],t[s+3]=m[x+1],e[s+4]=_,e[s+5]=u,s+=6;}}get vertexSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}}class Vn{constructor(t,e){this.localUniforms=new st({uTransformMatrix:{value:new G,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new Lt({0:this.localUniforms}),this._meshDataHash=Object.create(null),this._gpuBatchableMeshHash=Object.create(null),this.renderer=t,this._adaptor=e,this._adaptor.init();}validateRenderable(t){const e=this._getMeshData(t),s=e.batched,i=t.batched;if(e.batched=i,s!==i)return !0;if(i){const n=t._geometry;if(n.indices.length!==e.indexSize||n.positions.length!==e.vertexSize)return e.indexSize=n.indices.length,e.vertexSize=n.positions.length,!0;const o=this._getBatchableMesh(t),a=t.texture;if(o.texture._source!==a._source&&o.texture._source!==a._source)return o.batcher.checkAndUpdateTexture(o,a)}return !1}addRenderable(t,e){const s=this.renderer.renderPipes.batch,{batched:i}=this._getMeshData(t);if(i){const n=this._getBatchableMesh(t);n.texture=t._texture,n.geometry=t._geometry,s.addToBatch(n);}else s.break(e),e.add({renderPipeId:"mesh",mesh:t});}updateRenderable(t){if(t.batched){const e=this._gpuBatchableMeshHash[t.uid];e.texture=t._texture,e.geometry=t._geometry,e.batcher.updateElement(e);}}destroyRenderable(t){this._meshDataHash[t.uid]=null;const e=this._gpuBatchableMeshHash[t.uid];X.return(e),this._gpuBatchableMeshHash[t.uid]=null;}execute({mesh:t}){if(!t.isRenderable)return;t.state.blendMode=t.groupBlendMode;const e=this.localUniforms;e.uniforms.uTransformMatrix=t.groupTransform,e.uniforms.uRound=this.renderer._roundPixels|t._roundPixels,e.update(),gr(t.groupColorAlpha,e.uniforms.uColor,0),this._adaptor.execute(this,t);}_getMeshData(t){return this._meshDataHash[t.uid]||this._initMeshData(t)}_initMeshData(t){var e,s;return this._meshDataHash[t.uid]={batched:t.batched,indexSize:(e=t._geometry.indices)==null?void 0:e.length,vertexSize:(s=t._geometry.positions)==null?void 0:s.length},t.on("destroyed",()=>{this.destroyRenderable(t);}),this._meshDataHash[t.uid]}_getBatchableMesh(t){return this._gpuBatchableMeshHash[t.uid]||this._initBatchableMesh(t)}_initBatchableMesh(t){const e=X.get(Ps);return e.mesh=t,e.texture=t._texture,e.roundPixels=this.renderer._roundPixels|t._roundPixels,this._gpuBatchableMeshHash[t.uid]=e,e.mesh=t,e}destroy(){for(const t in this._gpuBatchableMeshHash)this._gpuBatchableMeshHash[t]&&X.return(this._gpuBatchableMeshHash[t]);this._gpuBatchableMeshHash=null,this._meshDataHash=null,this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null;}}Vn.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"mesh"},D.add(Vn);class ws{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null,this.roundPixels=0;}get blendMode(){return this.renderable.groupBlendMode}packAttributes(t,e,s,i){const n=this.renderable,o=this.texture,a=n.groupTransform,u=a.a,l=a.b,h=a.c,c=a.d,d=a.tx,f=a.ty,p=this.bounds,g=p.maxX,m=p.minX,_=p.maxY,x=p.minY,v=o.uvs,y=n.groupColorAlpha,S=i<<16|this.roundPixels&65535;t[s+0]=u*m+h*x+d,t[s+1]=c*x+l*m+f,t[s+2]=v.x0,t[s+3]=v.y0,e[s+4]=y,e[s+5]=S,t[s+6]=u*g+h*x+d,t[s+7]=c*x+l*g+f,t[s+8]=v.x1,t[s+9]=v.y1,e[s+10]=y,e[s+11]=S,t[s+12]=u*g+h*_+d,t[s+13]=c*_+l*g+f,t[s+14]=v.x2,t[s+15]=v.y2,e[s+16]=y,e[s+17]=S,t[s+18]=u*m+h*_+d,t[s+19]=c*_+l*m+f,t[s+20]=v.x3,t[s+21]=v.y3,e[s+22]=y,e[s+23]=S;}packIndex(t,e,s){t[e]=s+0,t[e+1]=s+1,t[e+2]=s+2,t[e+3]=s+0,t[e+4]=s+2,t[e+5]=s+3;}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null;}}class Yn{constructor(t){this._gpuText=Object.create(null),this._renderer=t;}validateRenderable(t){var e;const s=this._getGpuText(t),i=t._getKey();if(s.currentKey!==i){const n=(e=t.resolution)!=null?e:this._renderer.resolution,{width:o,height:a}=this._renderer.canvasText.getTextureSize(t.text,n,t._style);return !(this._renderer.canvasText.getReferenceCount(s.currentKey)===1&&o===s.texture._source.width&&a===s.texture._source.height)}return !1}addRenderable(t,e){const s=this._getGpuText(t).batchableSprite;t._didTextUpdate&&this._updateText(t),this._renderer.renderPipes.batch.addToBatch(s);}updateRenderable(t){const e=this._getGpuText(t).batchableSprite;t._didTextUpdate&&this._updateText(t),e.batcher.updateElement(e);}destroyRenderable(t){this._destroyRenderableById(t.uid);}_destroyRenderableById(t){const e=this._gpuText[t];this._renderer.canvasText.decreaseReferenceCount(e.currentKey),X.return(e.batchableSprite),this._gpuText[t]=null;}_updateText(t){const e=t._getKey(),s=this._getGpuText(t),i=s.batchableSprite;s.currentKey!==e&&this._updateGpuText(t),t._didTextUpdate=!1;const n=t._style.padding;hr(i.bounds,t._anchor,i.texture,n);}_updateGpuText(t){var e;const s=this._getGpuText(t),i=s.batchableSprite;s.texture&&this._renderer.canvasText.decreaseReferenceCount(s.currentKey);const n=(e=t.resolution)!=null?e:this._renderer.resolution;s.texture=i.texture=this._renderer.canvasText.getTexture(t.text,n,t._style,t._getKey()),s.currentKey=t._getKey(),i.texture=s.texture;}_getGpuText(t){return this._gpuText[t.uid]||this.initGpuText(t)}initGpuText(t){const e={texture:null,currentKey:"--",batchableSprite:X.get(ws)};return e.batchableSprite.renderable=t,e.batchableSprite.bounds={minX:0,maxX:1,minY:0,maxY:0},e.batchableSprite.roundPixels=this._renderer._roundPixels|t._roundPixels,this._gpuText[t.uid]=e,this._updateText(t),t.on("destroyed",()=>{this.destroyRenderable(t);}),e}destroy(){for(const t in this._gpuText)this._destroyRenderableById(t);this._gpuText=null,this._renderer=null;}}Yn.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"text"};class uc{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1;}_createCanvasAndContext(t,e){const s=z.get().createCanvas();s.width=t,s.height=e;const i=s.getContext("2d");return {canvas:s,context:i}}getOptimalCanvasAndContext(t,e,s=1){t=Math.ceil(t*s-1e-6),e=Math.ceil(e*s-1e-6),t=fe(t),e=fe(e);const i=(t<<17)+(e<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let n=this._canvasPool[i].pop();return n||(n=this._createCanvasAndContext(t,e)),n}returnCanvasAndContext(t){const{width:e,height:s}=t.canvas,i=(e<<17)+(s<<1);this._canvasPool[i].push(t);}clear(){this._canvasPool={};}}const jt=new uc;var Jv=Object.defineProperty,t0=Object.defineProperties,e0=Object.getOwnPropertyDescriptors,lc=Object.getOwnPropertySymbols,r0=Object.prototype.hasOwnProperty,s0=Object.prototype.propertyIsEnumerable,hc=(r,t,e)=>t in r?Jv(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,i0=(r,t)=>{for(var e in t||(t={}))r0.call(t,e)&&hc(r,e,t[e]);if(lc)for(var e of lc(t))s0.call(t,e)&&hc(r,e,t[e]);return r},n0=(r,t)=>t0(r,e0(t));let o0=0;class cc{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1;}createTexture(t,e,s){const i=new et(n0(i0({},this.textureOptions),{width:t,height:e,resolution:1,antialias:s,autoGarbageCollect:!0}));return new A({source:i,label:`texturePool_${o0++}`})}getOptimalTexture(t,e,s=1,i){let n=Math.ceil(t*s-1e-6),o=Math.ceil(e*s-1e-6);n=fe(n),o=fe(o);const a=(n<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let u=this._texturePool[a].pop();return u||(u=this.createTexture(n,o,i)),u.source._resolution=s,u.source.width=n/s,u.source.height=o/s,u.source.pixelWidth=n,u.source.pixelHeight=o,u.frame.x=0,u.frame.y=0,u.frame.width=t,u.frame.height=e,u.updateUvs(),this._poolKeyHash[u.uid]=a,u}getSameSizeTexture(t,e=!1){const s=t.source;return this.getOptimalTexture(t.width,t.height,s._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t);}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const s=this._texturePool[e];if(s)for(let i=0;i<s.length;i++)s[i].destroy(!0);}this._texturePool={};}}const ut=new cc;function dc(r,t,e){for(let s=0,i=4*e*t;s<t;++s,i+=4)if(r[i+3]!==0)return !1;return !0}function pc(r,t,e,s,i){const n=4*t;for(let o=s,a=s*n+4*e;o<=i;++o,a+=n)if(r[a+3]!==0)return !1;return !0}function fc(r,t=1){const{width:e,height:s}=r,i=r.getContext("2d",{willReadFrequently:!0});if(i===null)throw new TypeError("Failed to get canvas 2D context");const n=i.getImageData(0,0,e,s).data;let o=0,a=0,u=e-1,l=s-1;for(;a<s&&dc(n,e,a);)++a;if(a===s)return H.EMPTY;for(;dc(n,e,l);)--l;for(;pc(n,e,o,a,l);)++o;for(;pc(n,e,u,a,l);)--u;return ++u,++l,new H(o/t,a/t,(u-o)/t,(l-a)/t)}const a0=new lt;function Kn(r,t,e,s){const i=a0;i.minX=0,i.minY=0,i.maxX=r.width/s|0,i.maxY=r.height/s|0;const n=ut.getOptimalTexture(i.width,i.height,s,!1);return n.source.uploadMethodId="image",n.source.resource=r,n.source.alphaMode="premultiply-alpha-on-upload",n.frame.width=t/s,n.frame.height=e/s,n.source.emit("update",n.source),n.updateUvs(),n}const u0=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function xr(r){const t=typeof r.fontSize=="number"?`${r.fontSize}px`:r.fontSize;let e=r.fontFamily;Array.isArray(r.fontFamily)||(e=r.fontFamily.split(","));for(let s=e.length-1;s>=0;s--){let i=e[s].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!u0.includes(i)&&(i=`"${i}"`),e[s]=i;}return `${r.fontStyle} ${r.fontVariant} ${r.fontWeight} ${t} ${e.join(",")}`}const qn={willReadFrequently:!0},Gt=class O{static get experimentalLetterSpacingSupported(){let t=O._experimentalLetterSpacingSupported;if(t!==void 0){const e=z.get().getCanvasRenderingContext2D().prototype;t=O._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e;}return t}constructor(t,e,s,i,n,o,a,u,l){this.text=t,this.style=e,this.width=s,this.height=i,this.lines=n,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=u,this.fontProperties=l;}static measureText(t=" ",e,s=O._canvas,i=e.wordWrap){var n;const o=`${t}:${e.styleKey}`;if(O._measurementCache[o])return O._measurementCache[o];const a=xr(e),u=O.measureFont(a);u.fontSize===0&&(u.fontSize=e.fontSize,u.ascent=e.fontSize);const l=O.__context;l.font=a;const h=(i?O._wordWrap(t,e,s):t).split(/(?:\r\n|\r|\n)/),c=new Array(h.length);let d=0;for(let _=0;_<h.length;_++){const x=O._measureText(h[_],e.letterSpacing,l);c[_]=x,d=Math.max(d,x);}const f=((n=e._stroke)==null?void 0:n.width)||0;let p=d+f;e.dropShadow&&(p+=e.dropShadow.distance);const g=e.lineHeight||u.fontSize+f;let m=Math.max(g,u.fontSize+f*2)+(h.length-1)*(g+e.leading);return e.dropShadow&&(m+=e.dropShadow.distance),new O(t,e,p,m,h,c,g+e.leading,d,u)}static _measureText(t,e,s){let i=!1;O.experimentalLetterSpacingSupported&&(O.experimentalLetterSpacing?(s.letterSpacing=`${e}px`,s.textLetterSpacing=`${e}px`,i=!0):(s.letterSpacing="0px",s.textLetterSpacing="0px"));let n=s.measureText(t).width;return n>0&&(i?n-=e:n+=(O.graphemeSegmenter(t).length-1)*e),n}static _wordWrap(t,e,s=O._canvas){const i=s.getContext("2d",qn);let n=0,o="",a="";const u=Object.create(null),{letterSpacing:l,whiteSpace:h}=e,c=O._collapseSpaces(h),d=O._collapseNewlines(h);let f=!c;const p=e.wordWrapWidth+l,g=O._tokenize(t);for(let m=0;m<g.length;m++){let _=g[m];if(O._isNewline(_)){if(!d){a+=O._addLine(o),f=!c,o="",n=0;continue}_=" ";}if(c){const v=O.isBreakingSpace(_),y=O.isBreakingSpace(o[o.length-1]);if(v&&y)continue}const x=O._getFromCache(_,l,u,i);if(x>p)if(o!==""&&(a+=O._addLine(o),o="",n=0),O.canBreakWords(_,e.breakWords)){const v=O.wordWrapSplit(_);for(let y=0;y<v.length;y++){let S=v[y],w=S,R=1;for(;v[y+R];){const T=v[y+R];if(!O.canBreakChars(w,T,_,y,e.breakWords))S+=T;else break;w=T,R++;}y+=R-1;const P=O._getFromCache(S,l,u,i);P+n>p&&(a+=O._addLine(o),f=!1,o="",n=0),o+=S,n+=P;}}else {o.length>0&&(a+=O._addLine(o),o="",n=0);const v=m===g.length-1;a+=O._addLine(_,!v),f=!1,o="",n=0;}else x+n>p&&(f=!1,a+=O._addLine(o),o="",n=0),(o.length>0||!O.isBreakingSpace(_)||f)&&(o+=_,n+=x);}return a+=O._addLine(o,!1),a}static _addLine(t,e=!0){return t=O._trimRight(t),t=e?`${t}
`:t,t}static _getFromCache(t,e,s,i){let n=s[t];return typeof n!="number"&&(n=O._measureText(t,e,i)+e,s[t]=n),n}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return "";for(let e=t.length-1;e>=0;e--){const s=t[e];if(!O.isBreakingSpace(s))break;t=t.slice(0,-1);}return t}static _isNewline(t){return typeof t!="string"?!1:O._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:O._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const e=[];let s="";if(typeof t!="string")return e;for(let i=0;i<t.length;i++){const n=t[i],o=t[i+1];if(O.isBreakingSpace(n,o)||O._isNewline(n)){s!==""&&(e.push(s),s=""),e.push(n);continue}s+=n;}return s!==""&&e.push(s),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,s,i,n){return !0}static wordWrapSplit(t){return O.graphemeSegmenter(t)}static measureFont(t){if(O._fonts[t])return O._fonts[t];const e=O._context;e.font=t;const s=e.measureText(O.METRICS_STRING+O.BASELINE_SYMBOL),i={ascent:s.actualBoundingBoxAscent,descent:s.actualBoundingBoxDescent,fontSize:s.actualBoundingBoxAscent+s.actualBoundingBoxDescent};return O._fonts[t]=i,i}static clearMetrics(t=""){t?delete O._fonts[t]:O._fonts={};}static get _canvas(){if(!O.__canvas){let t;try{const e=new OffscreenCanvas(0,0),s=e.getContext("2d",qn);if(s!=null&&s.measureText)return O.__canvas=e,e;t=z.get().createCanvas();}catch(e){t=z.get().createCanvas();}t.width=t.height=10,O.__canvas=t;}return O.__canvas}static get _context(){return O.__context||(O.__context=O._canvas.getContext("2d",qn)),O.__context}};Gt.METRICS_STRING="|\xC9q\xC5",Gt.BASELINE_SYMBOL="M",Gt.BASELINE_MULTIPLIER=1.4,Gt.HEIGHT_MULTIPLIER=2,Gt.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const r=new Intl.Segmenter;return t=>[...r.segment(t)].map(e=>e.segment)}return r=>[...r]})(),Gt.experimentalLetterSpacing=!1,Gt._fonts={},Gt._newlines=[10,13],Gt._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288],Gt._measurementCache={};let It=Gt;const mc=class Xu{constructor(t,e,s,i){this.uid=Z("fillGradient"),this.type="linear",this.gradientStops=[],this.x0=t,this.y0=e,this.x1=s,this.y1=i;}addColorStop(t,e){return this.gradientStops.push({offset:t,color:V.shared.setValue(e).toHex()}),this}buildLinearGradient(){const t=Xu.defaultTextureSize,{gradientStops:e}=this,s=z.get().createCanvas();s.width=t,s.height=t;const i=s.getContext("2d"),n=i.createLinearGradient(0,0,Xu.defaultTextureSize,1);for(let g=0;g<e.length;g++){const m=e[g];n.addColorStop(m.offset,m.color);}i.fillStyle=n,i.fillRect(0,0,t,t),this.texture=new A({source:new me({resource:s,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:u,y1:l}=this,h=new G,c=u-o,d=l-a,f=Math.sqrt(c*c+d*d),p=Math.atan2(d,c);h.translate(-o,-a),h.scale(1/t,1/t),h.rotate(-p),h.scale(256/f,1),this.transform=h;}};mc.defaultTextureSize=256;let Rs=mc;const gc={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class Zn{constructor(t,e){this.uid=Z("fillPattern"),this.transform=new G,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=gc[e].addressModeU,t.source.style.addressModeV=gc[e].addressModeV);}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height);}}function br(r,t){if(r.texture===A.WHITE&&!r.fill)return V.shared.setValue(r.color).toHex();if(r.fill){if(r.fill instanceof Zn){const e=r.fill,s=t.createPattern(e.texture.source.resource,"repeat"),i=e.transform.copyTo(G.shared);return i.scale(e.texture.frame.width,e.texture.frame.height),s.setTransform(i),s}else if(r.fill instanceof Rs){const e=r.fill;if(e.type==="linear"){const s=t.createLinearGradient(e.x0,e.y0,e.x1,e.y1);return e.gradientStops.forEach(i=>{s.addColorStop(i.offset,V.shared.setValue(i.color).toHex());}),s}}}else {const e=t.createPattern(r.texture.source.resource,"repeat"),s=r.matrix.copyTo(G.shared);return s.scale(r.texture.frame.width,r.texture.frame.height),e.setTransform(s),e}return "red"}class Qn{constructor(){this._activeTextures={};}getTextureSize(t,e,s){const i=It.measureText(t||" ",s);let n=Math.ceil(Math.ceil(Math.max(1,i.width)+s.padding*2)*e),o=Math.ceil(Math.ceil(Math.max(1,i.height)+s.padding*2)*e);return n=Math.ceil(n-1e-6),o=Math.ceil(o-1e-6),n=fe(n),o=fe(o),{width:n,height:o}}getTexture(t,e,s,i){if(this._activeTextures[i])return this._increaseReferenceCount(i),this._activeTextures[i].texture;const n=It.measureText(t||" ",s),o=Math.ceil(Math.ceil(Math.max(1,n.width)+s.padding*2)*e),a=Math.ceil(Math.ceil(Math.max(1,n.height)+s.padding*2)*e),u=jt.getOptimalCanvasAndContext(o,a),{canvas:l}=u;this.renderTextToCanvas(t,s,e,u);const h=Kn(l,o,a,e);if(s.trim){const c=fc(l,e);h.frame.copyFrom(c),h.updateUvs();}return this._activeTextures[i]={canvasAndContext:u,texture:h,usageCount:1},h}_increaseReferenceCount(t){this._activeTextures[t].usageCount++;}decreaseReferenceCount(t){const e=this._activeTextures[t];if(e.usageCount--,e.usageCount===0){jt.returnCanvasAndContext(e.canvasAndContext),ut.returnTexture(e.texture);const s=e.texture.source;s.resource=null,s.uploadMethodId="unknown",s.alphaMode="no-premultiply-alpha",this._activeTextures[t]=null;}}getReferenceCount(t){return this._activeTextures[t].usageCount}renderTextToCanvas(t,e,s,i){var n,o,a,u,l,h;const{canvas:c,context:d}=i,f=xr(e),p=It.measureText(t||" ",e),g=p.lines,m=p.lineHeight,_=p.lineWidths,x=p.maxLineWidth,v=p.fontProperties,y=c.height;if(d.resetTransform(),d.scale(s,s),d.clearRect(0,0,p.width+4,p.height+4),(n=e._stroke)!=null&&n.width){const P=e._stroke;d.lineWidth=P.width,d.miterLimit=P.miterLimit,d.lineJoin=P.join,d.lineCap=P.cap;}d.font=f;let S,w;const R=e.dropShadow?2:1;for(let P=0;P<R;++P){const T=e.dropShadow&&P===0,E=T?Math.ceil(Math.max(1,y)+e.padding*2):0,L=E*s;if(T){d.fillStyle="black",d.strokeStyle="black";const M=e.dropShadow,q=M.color,J=M.alpha;d.shadowColor=V.shared.setValue(q).setAlpha(J).toRgbaString();const ft=M.blur*s,Ke=M.distance*s;d.shadowBlur=ft,d.shadowOffsetX=Math.cos(M.angle)*Ke,d.shadowOffsetY=Math.sin(M.angle)*Ke+L;}else d.globalAlpha=(a=(o=e._fill)==null?void 0:o.alpha)!=null?a:1,d.fillStyle=e._fill?br(e._fill,d):null,(u=e._stroke)!=null&&u.width&&(d.strokeStyle=br(e._stroke,d)),d.shadowColor="black";let k=(m-v.fontSize)/2;m-v.fontSize<0&&(k=0);const C=(h=(l=e._stroke)==null?void 0:l.width)!=null?h:0;for(let M=0;M<g.length;M++)S=C/2,w=C/2+M*m+v.ascent+k,e.align==="right"?S+=x-_[M]:e.align==="center"&&(S+=(x-_[M])/2),e._stroke&&this._drawLetterSpacing(g[M],e,i,S+e.padding,w+e.padding-E,!0),e._fill!==void 0&&this._drawLetterSpacing(g[M],e,i,S+e.padding,w+e.padding-E);}}_drawLetterSpacing(t,e,s,i,n,o=!1){const{context:a}=s,u=e.letterSpacing;let l=!1;if(It.experimentalLetterSpacingSupported&&(It.experimentalLetterSpacing?(a.letterSpacing=`${u}px`,a.textLetterSpacing=`${u}px`,l=!0):(a.letterSpacing="0px",a.textLetterSpacing="0px")),u===0||l){o?a.strokeText(t,i,n):a.fillText(t,i,n);return}let h=i;const c=It.graphemeSegmenter(t);let d=a.measureText(t).width,f=0;for(let p=0;p<c.length;++p){const g=c[p];o?a.strokeText(g,h,n):a.fillText(g,h,n);let m="";for(let _=p+1;_<c.length;++_)m+=c[_];f=a.measureText(m).width,h+=d-f+u,d=f;}}destroy(){this._activeTextures=null;}}Qn.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:"canvasText"},D.add(Qn),D.add(Yn);class Jn extends mt{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100;}get font(){return this.fontFamily}get pageTextures(){return this.pages}get size(){return this.fontMetrics.fontSize}get distanceFieldRange(){return this.distanceField.range}get distanceFieldType(){return this.distanceField.type}destroy(){this.emit("destroy",this),this.removeAllListeners();for(const t in this.chars)this.chars[t].texture.destroy();this.chars=null;}}var l0=c0,to={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},h0=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function c0(r){var t=[];return r.replace(h0,function(e,s,i){var n=s.toLowerCase();for(i=p0(i),n=="m"&&i.length>2&&(t.push([s].concat(i.splice(0,2))),n="l",s=s=="m"?"l":"L");;){if(i.length==to[n])return i.unshift(s),t.push(i);if(i.length<to[n])throw new Error("malformed path data");t.push([s].concat(i.splice(0,to[n])));}}),t}var d0=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function p0(r){var t=r.match(d0);return t?t.map(Number):[]}var f0=Di(l0);function _c(r,t){const e=f0(r),s=[];let i=null,n=0,o=0;for(let a=0;a<e.length;a++){const u=e[a],l=u[0],h=u;switch(l){case"M":n=h[1],o=h[2],t.moveTo(n,o);break;case"m":n+=h[1],o+=h[2],t.moveTo(n,o);break;case"H":n=h[1],t.lineTo(n,o);break;case"h":n+=h[1],t.lineTo(n,o);break;case"V":o=h[1],t.lineTo(n,o);break;case"v":o+=h[1],t.lineTo(n,o);break;case"L":n=h[1],o=h[2],t.lineTo(n,o);break;case"l":n+=h[1],o+=h[2],t.lineTo(n,o);break;case"C":n=h[5],o=h[6],t.bezierCurveTo(h[1],h[2],h[3],h[4],n,o);break;case"c":t.bezierCurveTo(n+h[1],o+h[2],n+h[3],o+h[4],n+h[5],o+h[6]),n+=h[5],o+=h[6];break;case"S":n=h[3],o=h[4],t.bezierCurveToShort(h[1],h[2],n,o);break;case"s":t.bezierCurveToShort(n+h[1],o+h[2],n+h[3],o+h[4]),n+=h[3],o+=h[4];break;case"Q":n=h[3],o=h[4],t.quadraticCurveTo(h[1],h[2],n,o);break;case"q":t.quadraticCurveTo(n+h[1],o+h[2],n+h[3],o+h[4]),n+=h[3],o+=h[4];break;case"T":n=h[1],o=h[2],t.quadraticCurveToShort(n,o);break;case"t":n+=h[1],o+=h[2],t.quadraticCurveToShort(n,o);break;case"A":n=h[6],o=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],n,o);break;case"a":n+=h[6],o+=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],n,o);break;case"Z":case"z":t.closePath(),s.length>0&&(i=s.pop(),i?(n=i.startX,o=i.startY):(n=0,o=0)),i=null;break;default:}l!=="Z"&&l!=="z"&&i===null&&(i={startX:n,startY:o},s.push(i));}return t}class Ci{constructor(t=0,e=0,s=0){this.type="circle",this.x=t,this.y=e,this.radius=s;}clone(){return new Ci(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return !1;const s=this.radius*this.radius;let i=this.x-t,n=this.y-e;return i*=i,n*=n,i+n<=s}strokeContains(t,e,s){if(this.radius===0)return !1;const i=this.x-t,n=this.y-e,o=this.radius,a=s/2,u=Math.sqrt(i*i+n*n);return u<o+a&&u>o-a}getBounds(t){return t=t||new H,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}}class Gi{constructor(t=0,e=0,s=0,i=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=s,this.halfHeight=i;}clone(){return new Gi(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return !1;let s=(t-this.x)/this.halfWidth,i=(e-this.y)/this.halfHeight;return s*=s,i*=i,s+i<=1}strokeContains(t,e,s){const{halfWidth:i,halfHeight:n}=this;if(i<=0||n<=0)return !1;const o=s/2,a=i-o,u=n-o,l=i+o,h=n+o,c=t-this.x,d=e-this.y,f=c*c/(a*a)+d*d/(u*u),p=c*c/(l*l)+d*d/(h*h);return f>1&&p<=1}getBounds(){return new H(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}}function vr(r,t,e,s,i,n){const o=r-e,a=t-s,u=i-e,l=n-s,h=o*u+a*l,c=u*u+l*l;let d=-1;c!==0&&(d=h/c);let f,p;d<0?(f=e,p=s):d>1?(f=i,p=n):(f=e+d*u,p=s+d*l);const g=r-f,m=t-p;return g*g+m*m}class Ee{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const s=[];for(let i=0,n=e.length;i<n;i++)s.push(e[i].x,e[i].y);e=s;}this.points=e,this.closePath=!0;}clone(){const t=this.points.slice(),e=new Ee(t);return e.closePath=this.closePath,e}contains(t,e){let s=!1;const i=this.points.length/2;for(let n=0,o=i-1;n<i;o=n++){const a=this.points[n*2],u=this.points[n*2+1],l=this.points[o*2],h=this.points[o*2+1];u>e!=h>e&&t<(l-a)*((e-u)/(h-u))+a&&(s=!s);}return s}strokeContains(t,e,s){const i=s/2,n=i*i,{points:o}=this;for(let a=0;a<o.length;a+=2){const u=o[a],l=o[a+1],h=o[(a+2)%o.length],c=o[(a+3)%o.length];if(vr(t,e,u,l,h,c)<=n)return !0}return !1}getBounds(t){t=t||new H;const e=this.points;let s=1/0,i=-1/0,n=1/0,o=-1/0;for(let a=0,u=e.length;a<u;a+=2){const l=e[a],h=e[a+1];s=l<s?l:s,i=l>i?l:i,n=h<n?h:n,o=h>o?h:o;}return t.x=s,t.width=i-s,t.y=n,t.height=o-n,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const Ms=(r,t,e,s,i,n)=>{const o=r-e,a=t-s,u=Math.sqrt(o*o+a*a);return u>=i-n&&u<=i+n};class Ii{constructor(t=0,e=0,s=0,i=0,n=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=s,this.height=i,this.radius=n;}getBounds(t){return t=t||new H,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new Ii(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return !1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const s=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+s&&e<=this.y+this.height-s||t>=this.x+s&&t<=this.x+this.width-s)return !0;let i=t-(this.x+s),n=e-(this.y+s);const o=s*s;if(i*i+n*n<=o||(i=t-(this.x+this.width-s),i*i+n*n<=o)||(n=e-(this.y+this.height-s),i*i+n*n<=o)||(i=t-(this.x+s),i*i+n*n<=o))return !0}return !1}strokeContains(t,e,s){const{x:i,y:n,width:o,height:a,radius:u}=this,l=s/2,h=i+u,c=n+u,d=o-u*2,f=a-u*2,p=i+o,g=n+a;return (t>=i-l&&t<=i+l||t>=p-l&&t<=p+l)&&e>=c&&e<=c+f||(e>=n-l&&e<=n+l||e>=g-l&&e<=g+l)&&t>=h&&t<=h+d?!0:t<h&&e<c&&Ms(t,e,h,c,u,l)||t>p-u&&e<c&&Ms(t,e,p-u,c,u,l)||t>p-u&&e>g-u&&Ms(t,e,p-u,g-u,u,l)||t<h&&e>g-u&&Ms(t,e,h,g-u,u,l)}}const m0=8,Os=11920929e-14,g0=1,eo=.01,Oe=0,be=0;function ro(r,t,e,s,i,n,o,a,u,l){const h=Math.min(.99,Math.max(0,l!=null?l:As.defaultOptions.bezierSmoothness));let c=(g0-h)/1;return c*=c,_0(t,e,s,i,n,o,a,u,r,c),r}function _0(r,t,e,s,i,n,o,a,u,l){so(r,t,e,s,i,n,o,a,u,l,0),u.push(o,a);}function so(r,t,e,s,i,n,o,a,u,l,h){if(h>m0)return;const c=Math.PI,d=(r+e)/2,f=(t+s)/2,p=(e+i)/2,g=(s+n)/2,m=(i+o)/2,_=(n+a)/2,x=(d+p)/2,v=(f+g)/2,y=(p+m)/2,S=(g+_)/2,w=(x+y)/2,R=(v+S)/2;if(h>0){let P=o-r,T=a-t;const E=Math.abs((e-o)*T-(s-a)*P),L=Math.abs((i-o)*T-(n-a)*P);let k,C;if(E>Os&&L>Os){if((E+L)*(E+L)<=l*(P*P+T*T)){if(Oe<eo){u.push(w,R);return}const M=Math.atan2(n-s,i-e);if(k=Math.abs(M-Math.atan2(s-t,e-r)),C=Math.abs(Math.atan2(a-n,o-i)-M),k>=c&&(k=2*c-k),C>=c&&(C=2*c-C),k+C<Oe){u.push(w,R);return}if(be!==0){if(k>be){u.push(e,s);return}if(C>be){u.push(i,n);return}}}}else if(E>Os){if(E*E<=l*(P*P+T*T)){if(Oe<eo){u.push(w,R);return}if(k=Math.abs(Math.atan2(n-s,i-e)-Math.atan2(s-t,e-r)),k>=c&&(k=2*c-k),k<Oe){u.push(e,s),u.push(i,n);return}if(be!==0&&k>be){u.push(e,s);return}}}else if(L>Os){if(L*L<=l*(P*P+T*T)){if(Oe<eo){u.push(w,R);return}if(k=Math.abs(Math.atan2(a-n,o-i)-Math.atan2(n-s,i-e)),k>=c&&(k=2*c-k),k<Oe){u.push(e,s),u.push(i,n);return}if(be!==0&&k>be){u.push(i,n);return}}}else if(P=w-(r+o)/2,T=R-(t+a)/2,P*P+T*T<=l){u.push(w,R);return}}so(r,t,d,f,x,v,w,R,u,l,h+1),so(w,R,y,S,m,_,o,a,u,l,h+1);}const x0=8,b0=11920929e-14,v0=1,y0=.01,xc=0;function bc(r,t,e,s,i,n,o,a){const u=Math.min(.99,Math.max(0,a!=null?a:As.defaultOptions.bezierSmoothness));let l=(v0-u)/1;return l*=l,T0(t,e,s,i,n,o,r,l),r}function T0(r,t,e,s,i,n,o,a){io(o,r,t,e,s,i,n,a,0),o.push(i,n);}function io(r,t,e,s,i,n,o,a,u){if(u>x0)return;const l=Math.PI,h=(t+s)/2,c=(e+i)/2,d=(s+n)/2,f=(i+o)/2,p=(h+d)/2,g=(c+f)/2;let m=n-t,_=o-e;const x=Math.abs((s-n)*_-(i-o)*m);if(x>b0){if(x*x<=a*(m*m+_*_)){if(xc<y0){r.push(p,g);return}let v=Math.abs(Math.atan2(o-i,n-s)-Math.atan2(i-e,s-t));if(v>=l&&(v=2*l-v),v<xc){r.push(p,g);return}}}else if(m=p-(t+n)/2,_=g-(e+o)/2,m*m+_*_<=a){r.push(p,g);return}io(r,t,e,h,c,p,g,a,u+1),io(r,p,g,d,f,n,o,a,u+1);}function no(r,t,e,s,i,n,o,a){let u=Math.abs(i-n);(!o&&i>n||o&&n>i)&&(u=2*Math.PI-u),a=a||Math.max(6,Math.floor(6*Math.pow(s,1/3)*(u/Math.PI))),a=Math.max(a,3);let l=u/a,h=i;l*=o?-1:1;for(let c=0;c<a+1;c++){const d=Math.cos(h),f=Math.sin(h),p=t+d*s,g=e+f*s;r.push(p,g),h+=l;}}function vc(r,t,e,s,i,n){const o=r[r.length-2],a=r[r.length-1]-e,u=o-t,l=i-e,h=s-t,c=Math.abs(a*h-u*l);if(c<1e-8||n===0){(r[r.length-2]!==t||r[r.length-1]!==e)&&r.push(t,e);return}const d=a*a+u*u,f=l*l+h*h,p=a*l+u*h,g=n*Math.sqrt(d)/c,m=n*Math.sqrt(f)/c,_=g*p/d,x=m*p/f,v=g*h+m*u,y=g*l+m*a,S=u*(m+_),w=a*(m+_),R=h*(g+x),P=l*(g+x),T=Math.atan2(w-y,S-v),E=Math.atan2(P-y,R-v);no(r,v+t,y+e,n,T,E,u*l>h*a);}const yr=Math.PI*2,oo={centerX:0,centerY:0,ang1:0,ang2:0},ao=({x:r,y:t},e,s,i,n,o,a,u)=>{r*=e,t*=s;const l=i*r-n*t,h=n*r+i*t;return u.x=l+o,u.y=h+a,u};function S0(r,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),s=t===1.5707963267948966?.551915024494:e,i=Math.cos(r),n=Math.sin(r),o=Math.cos(r+t),a=Math.sin(r+t);return [{x:i-n*s,y:n+i*s},{x:o+a*s,y:a-o*s},{x:o,y:a}]}const yc=(r,t,e,s)=>{const i=r*s-t*e<0?-1:1;let n=r*e+t*s;return n>1&&(n=1),n<-1&&(n=-1),i*Math.acos(n)},E0=(r,t,e,s,i,n,o,a,u,l,h,c,d)=>{const f=Math.pow(i,2),p=Math.pow(n,2),g=Math.pow(h,2),m=Math.pow(c,2);let _=f*p-f*m-p*g;_<0&&(_=0),_/=f*m+p*g,_=Math.sqrt(_)*(o===a?-1:1);const x=_*i/n*c,v=_*-n/i*h,y=l*x-u*v+(r+e)/2,S=u*x+l*v+(t+s)/2,w=(h-x)/i,R=(c-v)/n,P=(-h-x)/i,T=(-c-v)/n,E=yc(1,0,w,R);let L=yc(w,R,P,T);a===0&&L>0&&(L-=yr),a===1&&L<0&&(L+=yr),d.centerX=y,d.centerY=S,d.ang1=E,d.ang2=L;};function Tc(r,t,e,s,i,n,o,a=0,u=0,l=0){if(n===0||o===0)return;const h=Math.sin(a*yr/360),c=Math.cos(a*yr/360),d=c*(t-s)/2+h*(e-i)/2,f=-h*(t-s)/2+c*(e-i)/2;if(d===0&&f===0)return;n=Math.abs(n),o=Math.abs(o);const p=Math.pow(d,2)/Math.pow(n,2)+Math.pow(f,2)/Math.pow(o,2);p>1&&(n*=Math.sqrt(p),o*=Math.sqrt(p)),E0(t,e,s,i,n,o,u,l,h,c,d,f,oo);let{ang1:g,ang2:m}=oo;const{centerX:_,centerY:x}=oo;let v=Math.abs(m)/(yr/4);Math.abs(1-v)<1e-7&&(v=1);const y=Math.max(Math.ceil(v),1);m/=y;let S=r[r.length-2],w=r[r.length-1];const R={x:0,y:0};for(let P=0;P<y;P++){const T=S0(g,m),{x:E,y:L}=ao(T[0],n,o,c,h,_,x,R),{x:k,y:C}=ao(T[1],n,o,c,h,_,x,R),{x:M,y:q}=ao(T[2],n,o,c,h,_,x,R);ro(r,S,w,E,L,k,C,M,q),S=M,w=q,g+=m;}}function Sc(r,t,e){var s;const i=(a,u)=>{const l=u.x-a.x,h=u.y-a.y,c=Math.sqrt(l*l+h*h),d=l/c,f=h/c;return {len:c,nx:d,ny:f}},n=(a,u)=>{a===0?r.moveTo(u.x,u.y):r.lineTo(u.x,u.y);};let o=t[t.length-1];for(let a=0;a<t.length;a++){const u=t[a%t.length],l=(s=u.radius)!=null?s:e;if(l<=0){n(a,u),o=u;continue}const h=t[(a+1)%t.length],c=i(u,o),d=i(u,h);if(c.len<1e-4||d.len<1e-4){n(a,u),o=u;continue}let f=Math.asin(c.nx*d.ny-c.ny*d.nx),p=1,g=!1;c.nx*d.nx-c.ny*-d.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,p=-1,g=!0):f>0&&(p=-1,g=!0);const m=f/2;let _,x=Math.abs(Math.cos(m)*l/Math.sin(m));x>Math.min(c.len/2,d.len/2)?(x=Math.min(c.len/2,d.len/2),_=Math.abs(x*Math.sin(m)/Math.cos(m))):_=l;const v=u.x+d.nx*x+-d.ny*_*p,y=u.y+d.ny*x+d.nx*_*p,S=Math.atan2(c.ny,c.nx)+Math.PI/2*p,w=Math.atan2(d.ny,d.nx)-Math.PI/2*p;a===0&&r.moveTo(v+Math.cos(S)*_,y+Math.sin(S)*_),r.arc(v,y,_,S,w,g),o=u;}}function Ec(r,t,e,s){var i;const n=(u,l)=>Math.sqrt((u.x-l.x)**2+(u.y-l.y)**2),o=(u,l,h)=>({x:u.x+(l.x-u.x)*h,y:u.y+(l.y-u.y)*h}),a=t.length;for(let u=0;u<a;u++){const l=t[(u+1)%a],h=(i=l.radius)!=null?i:e;if(h<=0){u===0?r.moveTo(l.x,l.y):r.lineTo(l.x,l.y);continue}const c=t[u],d=t[(u+2)%a],f=n(c,l);let p;if(f<1e-4)p=l;else {const _=Math.min(f/2,h);p=o(l,c,_/f);}const g=n(d,l);let m;if(g<1e-4)m=l;else {const _=Math.min(g/2,h);m=o(l,d,_/g);}u===0?r.moveTo(p.x,p.y):r.lineTo(p.x,p.y),r.quadraticCurveTo(l.x,l.y,m.x,m.y,s);}}const A0=new H;class Ac{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new lt,this._graphicsPath2D=t;}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const s=this._currentPoly.points,i=s[s.length-2],n=s[s.length-1];return (i!==t||n!==e)&&s.push(t,e),this}arc(t,e,s,i,n,o){this._ensurePoly(!1);const a=this._currentPoly.points;return no(a,t,e,s,i,n,o),this}arcTo(t,e,s,i,n){this._ensurePoly();const o=this._currentPoly.points;return vc(o,t,e,s,i,n),this}arcToSvg(t,e,s,i,n,o,a){const u=this._currentPoly.points;return Tc(u,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,s,i,n),this}bezierCurveTo(t,e,s,i,n,o,a){this._ensurePoly();const u=this._currentPoly;return ro(this._currentPoly.points,u.lastX,u.lastY,t,e,s,i,n,o,a),this}quadraticCurveTo(t,e,s,i,n){this._ensurePoly();const o=this._currentPoly;return bc(this._currentPoly.points,o.lastX,o.lastY,t,e,s,i,n),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));for(let s=0;s<t.instructions.length;s++){const i=t.instructions[s];this[i.action](...i.data);}return this}finish(t=!1){this.endPoly(t);}rect(t,e,s,i,n){return this.drawShape(new H(t,e,s,i),n),this}circle(t,e,s,i){return this.drawShape(new Ci(t,e,s),i),this}poly(t,e,s){const i=new Ee(t);return i.closePath=e,this.drawShape(i,s),this}regularPoly(t,e,s,i,n=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+n,u=Math.PI*2/i,l=[];for(let h=0;h<i;h++){const c=h*u+a;l.push(t+s*Math.cos(c),e+s*Math.sin(c));}return this.poly(l,!0,o),this}roundPoly(t,e,s,i,n,o=0,a){if(i=Math.max(i|0,3),n<=0)return this.regularPoly(t,e,s,i,o);const u=s*Math.sin(Math.PI/i)-.001;n=Math.min(n,u);const l=-1*Math.PI/2+o,h=Math.PI*2/i,c=(i-2)*Math.PI/i/2;for(let d=0;d<i;d++){const f=d*h+l,p=t+s*Math.cos(f),g=e+s*Math.sin(f),m=f+Math.PI+c,_=f-Math.PI-c,x=p+n*Math.cos(m),v=g+n*Math.sin(m),y=p+n*Math.cos(_),S=g+n*Math.sin(_);d===0?this.moveTo(x,v):this.lineTo(x,v),this.quadraticCurveTo(p,g,y,S,a);}return this.closePath()}roundShape(t,e,s=!1,i){return t.length<3?this:(s?Ec(this,t,e,i):Sc(this,t,e),this.closePath())}filletRect(t,e,s,i,n){if(n===0)return this.rect(t,e,s,i);const o=Math.min(s,i)/2,a=Math.min(o,Math.max(-o,n)),u=t+s,l=e+i,h=a<0?-a:0,c=Math.abs(a);return this.moveTo(t,e+c).arcTo(t+h,e+h,t+c,e,c).lineTo(u-c,e).arcTo(u-h,e+h,u,e+c,c).lineTo(u,l-c).arcTo(u-h,l-h,t+s-c,l,c).lineTo(t+c,l).arcTo(t+h,l-h,t,l-c,c).closePath()}chamferRect(t,e,s,i,n,o){if(n<=0)return this.rect(t,e,s,i);const a=Math.min(n,Math.min(s,i)/2),u=t+s,l=e+i,h=[t+a,e,u-a,e,u,e+a,u,l-a,u-a,l,t+a,l,t,l-a,t,e+a];for(let c=h.length-1;c>=2;c-=2)h[c]===h[c-2]&&h[c-1]===h[c-3]&&h.splice(c-1,2);return this.poly(h,!0,o)}ellipse(t,e,s,i,n){return this.drawShape(new Gi(t,e,s,i),n),this}roundRect(t,e,s,i,n,o){return this.drawShape(new Ii(t,e,s,i,n),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let s=this._currentPoly;return s&&this.endPoly(),s=new Ee,s.points.push(t,e),this._currentPoly=s,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new Ee,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let s=e.shape.x,i=e.shape.y;if(!e.transform.isIdentity()){const n=e.transform,o=s;s=n.a*s+n.c*i+n.tx,i=n.b*o+n.d*i+n.ty;}this._currentPoly.points.push(s,i);}else this._currentPoly.points.push(0,0);}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const s=t.instructions[e];this[s.action](...s.data);}this.finish();}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let s=0;s<e.length;s++){const i=e[s],n=i.shape.getBounds(A0);i.transform?t.addRect(n,i.transform):t.addRect(n);}return t}}class ie{constructor(t){this.instructions=[],this.uid=Z("graphicsPath"),this._dirty=!0;var e;typeof t=="string"?_c(t,this):this.instructions=(e=t==null?void 0:t.slice())!=null?e:[];}get shapePath(){return this._shapePath||(this._shapePath=new Ac(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,s,i,n){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(j.shared);let u=0,l=0;if(!o||o.action!=="bezierCurveTo")u=a.x,l=a.y;else {u=o.data[2],l=o.data[3];const h=a.x,c=a.y;u=h+(h-u),l=c+(c-l);}return this.instructions.push({action:"bezierCurveTo",data:[u,l,t,e,s,i,n]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,s){const i=this.instructions[this.instructions.length-1],n=this.getLastPoint(j.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=n.x,a=n.y;else {o=i.data[0],a=i.data[1];const u=n.x,l=n.y;o=u+(u-o),a=l+(l-a);}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,s]}),this._dirty=!0,this}rect(t,e,s,i,n){return this.instructions.push({action:"rect",data:[t,e,s,i,n]}),this._dirty=!0,this}circle(t,e,s,i){return this.instructions.push({action:"circle",data:[t,e,s,i]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,s,i,n,o,a){n=n||i/2;const u=-1*Math.PI/2+o,l=s*2,h=Math.PI*2/l,c=[];for(let d=0;d<l;d++){const f=d%2?n:i,p=d*h+u;c.push(t+f*Math.cos(p),e+f*Math.sin(p));}return this.poly(c,!0,a),this}clone(t=!1){const e=new ie;if(!t)e.instructions=this.instructions.slice();else for(let s=0;s<this.instructions.length;s++){const i=this.instructions[s];e.instructions.push({action:i.action,data:i.data.slice()});}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,s=t.b,i=t.c,n=t.d,o=t.tx,a=t.ty;let u=0,l=0,h=0,c=0,d=0,f=0,p=0,g=0;for(let m=0;m<this.instructions.length;m++){const _=this.instructions[m],x=_.data;switch(_.action){case"moveTo":case"lineTo":u=x[0],l=x[1],x[0]=e*u+i*l+o,x[1]=s*u+n*l+a;break;case"bezierCurveTo":h=x[0],c=x[1],d=x[2],f=x[3],u=x[4],l=x[5],x[0]=e*h+i*c+o,x[1]=s*h+n*c+a,x[2]=e*d+i*f+o,x[3]=s*d+n*f+a,x[4]=e*u+i*l+o,x[5]=s*u+n*l+a;break;case"quadraticCurveTo":h=x[0],c=x[1],u=x[2],l=x[3],x[0]=e*h+i*c+o,x[1]=s*h+n*c+a,x[2]=e*u+i*l+o,x[3]=s*u+n*l+a;break;case"arcToSvg":u=x[5],l=x[6],p=x[0],g=x[1],x[0]=e*p+i*g,x[1]=s*p+n*g,x[5]=e*u+i*l+o,x[6]=s*u+n*l+a;break;case"circle":x[4]=Tr(x[3],t);break;case"rect":x[4]=Tr(x[4],t);break;case"ellipse":x[8]=Tr(x[8],t);break;case"roundRect":x[5]=Tr(x[5],t);break;case"addPath":x[0].transform(t);break;case"poly":x[2]=Tr(x[2],t);break;default:break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,s=this.instructions[e];if(!s)return t.x=0,t.y=0,t;for(;s.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;s=this.instructions[e];}switch(s.action){case"moveTo":case"lineTo":t.x=s.data[0],t.y=s.data[1];break;case"quadraticCurveTo":t.x=s.data[2],t.y=s.data[3];break;case"bezierCurveTo":t.x=s.data[4],t.y=s.data[5];break;case"arc":case"arcToSvg":t.x=s.data[5],t.y=s.data[6];break;case"addPath":s.data[0].getLastPoint(t);break}return t}}function Tr(r,t){return r?r.prepend(t):t.clone()}var P0=Object.defineProperty,Pc=Object.getOwnPropertySymbols,w0=Object.prototype.hasOwnProperty,R0=Object.prototype.propertyIsEnumerable,wc=(r,t,e)=>t in r?P0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Cs=(r,t)=>{for(var e in t||(t={}))w0.call(t,e)&&wc(r,e,t[e]);if(Pc)for(var e of Pc(t))R0.call(t,e)&&wc(r,e,t[e]);return r};function Rc(r,t){if(typeof r=="string"){const s=document.createElement("div");s.innerHTML=r.trim(),r=s.querySelector("svg");}const e={context:t,path:new ie};return Mc(r,e,null,null),t}function Mc(r,t,e,s){const i=r.children,{fillStyle:n,strokeStyle:o}=M0(r);n&&e?e=Cs(Cs({},e),n):n&&(e=n),o&&s?s=Cs(Cs({},s),o):o&&(s=o),t.context.fillStyle=e,t.context.strokeStyle=s;let a,u,l,h,c,d,f,p,g,m,_,x,v,y,S,w,R;switch(r.nodeName.toLowerCase()){case"path":y=r.getAttribute("d"),S=new ie(y),t.context.path(S),e&&t.context.fill(),s&&t.context.stroke();break;case"circle":f=ot(r,"cx",0),p=ot(r,"cy",0),g=ot(r,"r",0),t.context.ellipse(f,p,g,g),e&&t.context.fill(),s&&t.context.stroke();break;case"rect":a=ot(r,"x",0),u=ot(r,"y",0),w=ot(r,"width",0),R=ot(r,"height",0),m=ot(r,"rx",0),_=ot(r,"ry",0),m||_?t.context.roundRect(a,u,w,R,m||_):t.context.rect(a,u,w,R),e&&t.context.fill(),s&&t.context.stroke();break;case"ellipse":f=ot(r,"cx",0),p=ot(r,"cy",0),m=ot(r,"rx",0),_=ot(r,"ry",0),t.context.beginPath(),t.context.ellipse(f,p,m,_),e&&t.context.fill(),s&&t.context.stroke();break;case"line":l=ot(r,"x1",0),h=ot(r,"y1",0),c=ot(r,"x2",0),d=ot(r,"y2",0),t.context.beginPath(),t.context.moveTo(l,h),t.context.lineTo(c,d),s&&t.context.stroke();break;case"polygon":v=r.getAttribute("points"),x=v.match(/\d+/g).map(P=>parseInt(P,10)),t.context.poly(x,!0),e&&t.context.fill(),s&&t.context.stroke();break;case"polyline":v=r.getAttribute("points"),x=v.match(/\d+/g).map(P=>parseInt(P,10)),t.context.poly(x,!1),s&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${r.nodeName}> elements unsupported`);break}}for(let P=0;P<i.length;P++)Mc(i[P],t,e,s);}function ot(r,t,e){const s=r.getAttribute(t);return s?Number(s):e}function M0(r){const t=r.getAttribute("style"),e={},s={};let i=!1,n=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const u=o[a],[l,h]=u.split(":");switch(l){case"stroke":h!=="none"&&(e.color=V.shared.setValue(h).toNumber(),n=!0);break;case"stroke-width":e.width=Number(h);break;case"fill":h!=="none"&&(i=!0,s.color=V.shared.setValue(h).toNumber());break;case"fill-opacity":s.alpha=Number(h);break;case"stroke-opacity":e.alpha=Number(h);break;case"opacity":s.alpha=Number(h),e.alpha=Number(h);break}}}else {const o=r.getAttribute("stroke");o&&o!=="none"&&(n=!0,e.color=V.shared.setValue(o).toNumber(),e.width=ot(r,"stroke-width",1));const a=r.getAttribute("fill");a&&a!=="none"&&(i=!0,s.color=V.shared.setValue(a).toNumber());}return {strokeStyle:n?e:null,fillStyle:i?s:null}}var O0=Object.defineProperty,C0=Object.defineProperties,G0=Object.getOwnPropertyDescriptors,Oc=Object.getOwnPropertySymbols,I0=Object.prototype.hasOwnProperty,B0=Object.prototype.propertyIsEnumerable,Cc=(r,t,e)=>t in r?O0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,ve=(r,t)=>{for(var e in t||(t={}))I0.call(t,e)&&Cc(r,e,t[e]);if(Oc)for(var e of Oc(t))B0.call(t,e)&&Cc(r,e,t[e]);return r},uo=(r,t)=>C0(r,G0(t));function Wt(r,t){var e,s;if(r==null)return null;let i,n;if(r!=null&&r.fill?(n=r.fill,i=ve(ve({},t),r)):(n=r,i=t),V.isColorLike(n)){const u=V.shared.setValue(n!=null?n:0);return uo(ve({},i),{color:u.toNumber(),alpha:u.alpha===1?i.alpha:u.alpha,texture:A.WHITE})}else if(n instanceof Zn){const u=n;return uo(ve({},i),{color:16777215,texture:u.texture,matrix:u.transform,fill:(e=i.fill)!=null?e:null})}else if(n instanceof Rs){const u=n;return u.buildLinearGradient(),uo(ve({},i),{color:16777215,texture:u.texture,matrix:u.transform})}const o=ve(ve({},t),r);if(o.texture){if(o.texture!==A.WHITE){const l=((s=o.matrix)==null?void 0:s.invert())||new G;l.scale(1/o.texture.frame.width,1/o.texture.frame.height),o.matrix=l;}const u=o.texture.source.style;u.addressMode==="clamp-to-edge"&&(u.addressMode="repeat");}const a=V.shared.setValue(o.color);return o.alpha*=a.alpha,o.color=a.toNumber(),o.matrix=o.matrix?o.matrix.clone():null,o}var F0=Object.defineProperty,Gc=Object.getOwnPropertySymbols,D0=Object.prototype.hasOwnProperty,U0=Object.prototype.propertyIsEnumerable,Ic=(r,t,e)=>t in r?F0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Ce=(r,t)=>{for(var e in t||(t={}))D0.call(t,e)&&Ic(r,e,t[e]);if(Gc)for(var e of Gc(t))U0.call(t,e)&&Ic(r,e,t[e]);return r};const k0=new j,Bc=new G,lo=class $t extends mt{constructor(){super(...arguments),this.uid=Z("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new ie,this._transform=new G,this._fillStyle=Ce({},$t.defaultFillStyle),this._strokeStyle=Ce({},$t.defaultStrokeStyle),this._stateStack=[],this._tick=0,this._bounds=new lt,this._boundsDirty=!0;}clone(){const t=new $t;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle=Ce({},this._fillStyle),t._strokeStyle=Ce({},this._strokeStyle),t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=Wt(t,$t.defaultFillStyle);}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=Wt(t,$t.defaultStrokeStyle);}setFillStyle(t){return this._fillStyle=Wt(t,$t.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=Wt(t,$t.defaultStrokeStyle),this}texture(t,e,s,i,n,o){return this.instructions.push({action:"texture",data:{image:t,dx:s||0,dy:i||0,dw:n||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e?V.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new ie,this}fill(t,e){let s;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?s=i.data.path:s=this._activePath.clone(),s?(t&&(e!==void 0&&typeof t=="number"&&(t={color:t,alpha:e}),this._fillStyle=Wt(t,$t.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:s}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(j.shared);this._activePath.clear(),this._activePath.moveTo(t,e);}stroke(t){let e;const s=this.instructions[this.instructions.length-1];return this._tick===0&&s&&s.action==="fill"?e=s.data.path:e=this._activePath.clone(),e?(t&&(this._strokeStyle=Wt(t,$t.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],s=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(s);else {e.data.hole=s;break}}return this._initNextPathLocation(),this}arc(t,e,s,i,n,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,s,i,n,o),this}arcTo(t,e,s,i,n){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*s+o.c*i+o.tx,o.b*s+o.d*i+o.ty,n),this}arcToSvg(t,e,s,i,n,o,a){this._tick++;const u=this._transform;return this._activePath.arcToSvg(t,e,s,i,n,u.a*o+u.c*a+u.tx,u.b*o+u.d*a+u.ty),this}bezierCurveTo(t,e,s,i,n,o,a){this._tick++;const u=this._transform;return this._activePath.bezierCurveTo(u.a*t+u.c*e+u.tx,u.b*t+u.d*e+u.ty,u.a*s+u.c*i+u.tx,u.b*s+u.d*i+u.ty,u.a*n+u.c*o+u.tx,u.b*n+u.d*o+u.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,e,s,i){return this._tick++,this._activePath.ellipse(t,e,s,i,this._transform.clone()),this}circle(t,e,s){return this._tick++,this._activePath.circle(t,e,s,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const s=this._transform;return this._activePath.lineTo(s.a*t+s.c*e+s.tx,s.b*t+s.d*e+s.ty),this}moveTo(t,e){this._tick++;const s=this._transform,i=this._activePath.instructions,n=s.a*t+s.c*e+s.tx,o=s.b*t+s.d*e+s.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=n,i[0].data[1]=o,this):(this._activePath.moveTo(n,o),this)}quadraticCurveTo(t,e,s,i,n){this._tick++;const o=this._transform;this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*s+o.c*i+o.tx,o.b*s+o.d*i+o.ty,n);}rect(t,e,s,i){return this._tick++,this._activePath.rect(t,e,s,i,this._transform.clone()),this}roundRect(t,e,s,i,n){return this._tick++,this._activePath.roundRect(t,e,s,i,n,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,s,i,n=0,o){return this._tick++,this._activePath.regularPoly(t,e,s,i,n,o),this}roundPoly(t,e,s,i,n,o){return this._tick++,this._activePath.roundPoly(t,e,s,i,n,o),this}roundShape(t,e,s,i){return this._tick++,this._activePath.roundShape(t,e,s,i),this}filletRect(t,e,s,i,n){return this._tick++,this._activePath.filletRect(t,e,s,i,n),this}chamferRect(t,e,s,i,n,o){return this._tick++,this._activePath.chamferRect(t,e,s,i,n,o),this}star(t,e,s,i,n=0,o=0){return this._tick++,this._activePath.star(t,e,s,i,n,o,this._transform.clone()),this}svg(t){this._tick++,Rc(t,this);}restore(){const t=this._stateStack.pop();t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle);}save(){this._stateStack.push({transform:this._transform.clone(),fillStyle:Ce({},this._fillStyle),strokeStyle:Ce({},this._strokeStyle)});}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,s,i,n,o){return t instanceof G?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,s,i,n,o),this)}transform(t,e,s,i,n,o){return t instanceof G?(this._transform.append(t),this):(Bc.set(t,e,s,i,n,o),this._transform.append(Bc),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0);}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const s=this.instructions[e],i=s.action;if(i==="fill"){const n=s.data;t.addBounds(n.path.bounds);}else if(i==="texture"){const n=s.data;t.addFrame(n.dx,n.dy,n.dx+n.dw,n.dy+n.dh,n.transform);}if(i==="stroke"){const n=s.data,o=n.style.width/2,a=n.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o);}}return t}containsPoint(t){var e;if(!this.bounds.containsPoint(t.x,t.y))return !1;const s=this.instructions;let i=!1;for(let n=0;n<s.length;n++){const o=s[n],a=o.data,u=a.path;if(!o.action||!u)continue;const l=a.style,h=u.shapePath.shapePrimitives;for(let c=0;c<h.length;c++){const d=h[c].shape;if(!l||!d)continue;const f=h[c].transform,p=f?f.applyInverse(t,k0):t;o.action==="fill"?i=d.contains(p.x,p.y):i=d.strokeContains(p.x,p.y,l.width);const g=a.hole;if(g){const m=(e=g.shapePath)==null?void 0:e.shapePrimitives;if(m)for(let _=0;_<m.length;_++)m[_].shape.contains(p.x,p.y)&&(i=!1);}if(i)return !0}}return i}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const e=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(e),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(e);}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null;}};lo.defaultFillStyle={color:16777215,alpha:1,texture:A.WHITE,matrix:null,fill:null},lo.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:A.WHITE,matrix:null,fill:null};let Bt=lo;const Fc=["_fontFamily","_fontStyle","_fontSize","_fontVariant","_fontWeight","_breakWords","_align","_leading","_letterSpacing","_lineHeight","_textBaseline","_whiteSpace","_wordWrap","_wordWrapWidth","_padding","_cssOverrides","_trim"];function ho(r){const t=[];let e=0;for(let s=0;s<Fc.length;s++){const i=Fc[s];t[e++]=r[i];}return e=Dc(r._fill,t,e),e=L0(r._stroke,t,e),t.join("-")}function Dc(r,t,e){var s;return r&&(t[e++]=r.color,t[e++]=r.alpha,t[e++]=(s=r.fill)==null?void 0:s.uid),e}function L0(r,t,e){return r&&(e=Dc(r,t,e),t[e++]=r.width,t[e++]=r.alignment,t[e++]=r.cap,t[e++]=r.join,t[e++]=r.miterLimit),e}var $0=Object.defineProperty,Uc=Object.getOwnPropertySymbols,N0=Object.prototype.hasOwnProperty,H0=Object.prototype.propertyIsEnumerable,kc=(r,t,e)=>t in r?$0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Sr=(r,t)=>{for(var e in t||(t={}))N0.call(t,e)&&kc(r,e,t[e]);if(Uc)for(var e of Uc(t))H0.call(t,e)&&kc(r,e,t[e]);return r};const co=class je extends mt{constructor(t={}){super(),X0(t);const e=Sr(Sr({},je.defaultTextStyle),t);for(const s in e){const i=s;this[i]=e[s];}this.update();}get align(){return this._align}set align(t){this._align=t,this.update();}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update();}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow=Sr(Sr({},je.defaultDropShadow),t):this._dropShadow=t?Sr({},je.defaultDropShadow):null,this.update();}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update();}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update();}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update();}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update();}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update();}get leading(){return this._leading}set leading(t){this._leading=t,this.update();}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update();}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update();}get padding(){return this._padding}set padding(t){this._padding=t,this.update();}get trim(){return this._trim}set trim(t){this._trim=t,this.update();}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update();}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update();}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update();}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update();}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._fill=Wt(t===0?"black":t,Bt.defaultFillStyle),this.update());}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._stroke=Wt(t,Bt.defaultStrokeStyle),this.update());}_generateKey(){return this._styleKey=ho(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this);}reset(){const t=je.defaultTextStyle;for(const e in t)this[e]=t[e];}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new je({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var e,s,i,n;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const o=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(e=this._fill)!=null&&e.texture&&this._fill.texture.destroy(o),(s=this._originalFill)!=null&&s.texture&&this._originalFill.texture.destroy(o),(i=this._stroke)!=null&&i.texture&&this._stroke.texture.destroy(o),(n=this._originalStroke)!=null&&n.texture&&this._originalStroke.texture.destroy(o);}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null;}};co.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5},co.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let Vt=co;function X0(r){var t,e,s,i,n;const o=r;if(typeof o.dropShadow=="boolean"&&o.dropShadow){const a=Vt.defaultDropShadow;r.dropShadow={alpha:(t=o.dropShadowAlpha)!=null?t:a.alpha,angle:(e=o.dropShadowAngle)!=null?e:a.angle,blur:(s=o.dropShadowBlur)!=null?s:a.blur,color:(i=o.dropShadowColor)!=null?i:a.color,distance:(n=o.dropShadowDistance)!=null?n:a.distance};}if(o.strokeThickness){const a=o.stroke;r.stroke={color:a,width:o.strokeThickness};}if(Array.isArray(o.fill)){const a=new Rs(0,0,0,r.fontSize*1.7),u=o.fill.map(l=>V.shared.setValue(l).toNumber());u.forEach((l,h)=>{var c;const d=(c=o.fillGradientStops[h])!=null?c:h/u.length;a.addColorStop(d,l);}),r.fill={fill:a};}}function po(r){if(r==="")return [];typeof r=="string"&&(r=[r]);const t=[];for(let e=0,s=r.length;e<s;e++){const i=r[e];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const n=i[0].charCodeAt(0),o=i[1].charCodeAt(0);if(o<n)throw new Error("[BitmapFont]: Invalid character range.");for(let a=n,u=o;a<=u;a++)t.push(String.fromCharCode(a));}else t.push(...Array.from(i));}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}class fo extends Jn{constructor(t){var e,s,i;super(),this.resolution=1,this.pages=[],this._padding=4,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const n=t,o=n.style.clone();n.overrideFill&&(o._fill.color=16777215,o._fill.alpha=1,o._fill.texture=A.WHITE,o._fill.fill=null);const a=o.fontSize;o.fontSize=this.baseMeasurementFontSize;const u=xr(o);n.overrideSize?o._stroke&&(o._stroke.width*=this.baseRenderedFontSize/a):o.fontSize=this.baseRenderedFontSize=a,this._style=o,this._skipKerning=(e=n.skipKerning)!=null?e:!1,this.resolution=(s=n.resolution)!=null?s:1,this._padding=(i=n.padding)!=null?i:4,this.fontMetrics=It.measureFont(u),this.lineHeight=o.lineHeight||this.fontMetrics.fontSize||o.fontSize;}ensureCharacters(t){var e,s,i,n;const o=po(t).filter(v=>!this._currentChars.includes(v)).filter((v,y,S)=>S.indexOf(v)===y);if(!o.length)return;this._currentChars=[...this._currentChars,...o];let a;this._currentPageIndex===-1?a=this._nextPage():a=this.pages[this._currentPageIndex];let{canvas:u,context:l}=a.canvasAndContext,h=a.texture.source;const c=this._style;let d=this._currentX,f=this._currentY;const p=this.baseRenderedFontSize/this.baseMeasurementFontSize,g=this._padding*p,m=c.fontStyle==="italic"?2:1;let _=0,x=!1;for(let v=0;v<o.length;v++){const y=o[v],S=It.measureText(y,c,u,!1);S.lineHeight=S.height;const w=m*S.width*p,R=S.height*p,P=w+g*2,T=R+g*2;if(x=!1,y!==`
`&&y!=="\r"&&y!=="	"&&y!==" "&&(x=!0,_=Math.ceil(Math.max(T,_))),d+P>512&&(f+=_,_=T,d=0,f+_>512)){h.update();const L=this._nextPage();u=L.canvasAndContext.canvas,l=L.canvasAndContext.context,h=L.texture.source,f=0;}const E=w/p-((s=(e=c.dropShadow)==null?void 0:e.distance)!=null?s:0)-((n=(i=c._stroke)==null?void 0:i.width)!=null?n:0);if(this.chars[y]={id:y.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:E,kerning:{}},x){this._drawGlyph(l,S,d+g,f+g,p,c);const L=h.width*p,k=h.height*p,C=new H(d/L*h.width,f/k*h.height,P/L*h.width,T/k*h.height);this.chars[y].texture=new A({source:h,frame:C}),d+=Math.ceil(P);}}h.update(),this._currentX=d,this._currentY=f,this._skipKerning&&this._applyKerning(o,l);}get pageTextures(){return this.pages}_applyKerning(t,e){const s=this._measureCache;for(let i=0;i<t.length;i++){const n=t[i];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let u=s[n];u||(u=s[n]=e.measureText(n).width);let l=s[a];l||(l=s[a]=e.measureText(a).width);let h=e.measureText(n+a).width,c=h-(u+l);c&&(this.chars[n].kerning[a]=c),h=e.measureText(n+a).width,c=h-(u+l),c&&(this.chars[a].kerning[n]=c);}}}_nextPage(){this._currentPageIndex++;const t=this.resolution,e=jt.getOptimalCanvasAndContext(512,512,t);this._setupContext(e.context,this._style,t);const s=t*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new A({source:new me({resource:e.canvas,resolution:s,alphaMode:"premultiply-alpha-on-upload"})}),n={canvasAndContext:e,texture:i};return this.pages[this._currentPageIndex]=n,n}_setupContext(t,e,s){var i;e.fontSize=this.baseRenderedFontSize,t.scale(s,s),t.font=xr(e),e.fontSize=this.baseMeasurementFontSize,t.textBaseline=e.textBaseline;const n=e._stroke,o=(i=n==null?void 0:n.width)!=null?i:0;if(n&&(t.lineWidth=o,t.lineJoin=n.join,t.miterLimit=n.miterLimit,t.strokeStyle=br(n,t)),e._fill&&(t.fillStyle=br(e._fill,t)),e.dropShadow){const a=e.dropShadow,u=V.shared.setValue(a.color).toArray(),l=a.blur*s,h=a.distance*s;t.shadowColor=`rgba(${u[0]*255},${u[1]*255},${u[2]*255},${a.alpha})`,t.shadowBlur=l,t.shadowOffsetX=Math.cos(a.angle)*h,t.shadowOffsetY=Math.sin(a.angle)*h;}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0;}_drawGlyph(t,e,s,i,n,o){var a;const u=e.text,l=e.fontProperties,h=o._stroke,c=((a=h==null?void 0:h.width)!=null?a:0)*n,d=s+c/2,f=i-c/2,p=l.descent*n,g=e.lineHeight*n;o.stroke&&c&&t.strokeText(u,d,f+g-p),o._fill&&t.fillText(u,d,f+g-p);}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{canvasAndContext:e,texture:s}=this.pages[t];jt.returnCanvasAndContext(e),s.destroy(!0);}this.pages=null;}}function mo(r,t,e){const s={width:0,height:0,offsetY:0,scale:t.fontSize/e.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};s.offsetY=e.baseLineOffset;let i=s.lines[0],n=null,o=!0;const a={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},u=f=>{const p=i.width;for(let g=0;g<a.index;g++){const m=f.positions[g];i.chars.push(f.chars[g]),i.charPositions.push(m+p);}i.width+=f.width,o=!1,a.width=0,a.index=0,a.chars.length=0;},l=()=>{let f=i.chars.length-1,p=i.chars[f];for(;p===" ";)i.width-=e.chars[p].xAdvance,p=i.chars[--f];s.width=Math.max(s.width,i.width),i={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},o=!0,s.lines.push(i),s.height+=e.lineHeight;},h=e.baseMeasurementFontSize/t.fontSize,c=t.letterSpacing*h,d=t.wordWrapWidth*h;for(let f=0;f<r.length+1;f++){let p;const g=f===r.length;g||(p=r[f]);const m=e.chars[p]||e.chars[" "];if(/(?:\s)/.test(p)||p==="\r"||p===`
`||g){if(!o&&t.wordWrap&&i.width+a.width-c>d?(l(),u(a),g||i.charPositions.push(0)):(a.start=i.width,u(a),g||i.charPositions.push(0)),p==="\r"||p===`
`)i.width!==0&&l();else if(!g){const _=m.xAdvance+(m.kerning[n]||0)+c;i.width+=_,i.spaceWidth=_,i.spacesIndex.push(i.charPositions.length),i.chars.push(p);}}else {const _=m.kerning[n]||0,x=m.xAdvance+_+c;a.positions[a.index++]=a.width+_,a.chars.push(p),a.width+=x;}n=p;}return l(),t.align==="center"?z0(s):t.align==="right"?j0(s):t.align==="justify"&&W0(s),s}function z0(r){for(let t=0;t<r.lines.length;t++){const e=r.lines[t],s=r.width/2-e.width/2;for(let i=0;i<e.charPositions.length;i++)e.charPositions[i]+=s;}}function j0(r){for(let t=0;t<r.lines.length;t++){const e=r.lines[t],s=r.width-e.width;for(let i=0;i<e.charPositions.length;i++)e.charPositions[i]+=s;}}function W0(r){const t=r.width;for(let e=0;e<r.lines.length;e++){const s=r.lines[e];let i=0,n=s.spacesIndex[i++],o=0;const a=s.spacesIndex.length,u=(t-s.width)/a;for(let l=0;l<s.charPositions.length;l++)l===n&&(n=s.spacesIndex[i++],o+=u),s.charPositions[l]+=o;}}var V0=Object.defineProperty,Lc=Object.getOwnPropertySymbols,Y0=Object.prototype.hasOwnProperty,K0=Object.prototype.propertyIsEnumerable,$c=(r,t,e)=>t in r?V0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,go=(r,t)=>{for(var e in t||(t={}))Y0.call(t,e)&&$c(r,e,t[e]);if(Lc)for(var e of Lc(t))K0.call(t,e)&&$c(r,e,t[e]);return r};let q0=class{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1};}getFont(t,e){var s;let i=`${e.fontFamily}-bitmap`,n=!0;if(e._fill.fill&&(i+=e._fill.fill.uid,n=!1),!Y.has(i)){const a=new fo(go({style:e,overrideFill:n,overrideSize:!0},this.defaultOptions));a.once("destroy",()=>Y.remove(i)),Y.set(i,a);}const o=Y.get(i);return (s=o.ensureCharacters)==null||s.call(o,t),o}getLayout(t,e){const s=this.getFont(t,e);return mo(t.split(""),e,s)}measureText(t,e){return this.getLayout(t,e)}install(...t){var e,s,i,n;let o=t[0];typeof o=="string"&&(o={name:o,style:t[1],chars:(e=t[2])==null?void 0:e.chars,resolution:(s=t[2])==null?void 0:s.resolution,padding:(i=t[2])==null?void 0:i.padding,skipKerning:(n=t[2])==null?void 0:n.skipKerning});const a=o==null?void 0:o.name;if(!a)throw new Error("[BitmapFontManager] Property `name` is required.");o=go(go({},this.defaultOptions),o);const u=o.style,l=u instanceof Vt?u:new Vt(u),h=l._fill.fill!==null&&l._fill.fill!==void 0,c=new fo({style:l,overrideFill:h,skipKerning:o.skipKerning,padding:o.padding,resolution:o.resolution,overrideSize:!1}),d=po(o.chars);return c.ensureCharacters(d.join("")),Y.set(`${a}-bitmap`,c),c.once("destroy",()=>Y.remove(`${a}-bitmap`)),c}uninstall(t){const e=`${t}-bitmap`,s=Y.get(e);s&&(Y.remove(e),s.destroy());}};const Er=new q0;class _o extends Jn{constructor(t,e){var s;super();const{textures:i,data:n}=t;Object.keys(n.pages).forEach(o=>{const a=n.pages[parseInt(o,10)],u=i[a.id];this.pages.push({texture:u});}),Object.keys(n.chars).forEach(o=>{var a;const u=n.chars[o],l=i[u.page].source,h=new H(u.x,u.y,u.width,u.height),c=new A({source:l,frame:h});this.chars[o]={id:o.codePointAt(0),xOffset:u.xOffset,yOffset:u.yOffset,xAdvance:u.xAdvance,kerning:(a=u.kerning)!=null?a:{},texture:c};}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=(s=n.distanceField)!=null?s:{type:"none",range:0},this.url=e;}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{texture:e}=this.pages[t];e.destroy(!0);}this.pages=null;}static install(t){Er.install(t);}static uninstall(t){Er.uninstall(t);}}const Gs={test(r){return typeof r=="string"&&r.startsWith("info face=")},parse(r){var t,e,s;const i=r.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const p in i){const g=i[p].match(/^[a-z]+/gm)[0],m=i[p].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),_={};for(const x in m){const v=m[x].split("="),y=v[0],S=v[1].replace(/"/gm,""),w=parseFloat(S),R=isNaN(w)?S:w;_[y]=R;}n[g].push(_);}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[a]=n.info,[u]=n.common,[l]=(t=n.distanceField)!=null?t:[];l&&(o.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),o.fontSize=parseInt(a.size,10),o.fontFamily=a.face,o.lineHeight=parseInt(u.lineHeight,10);const h=n.page;for(let p=0;p<h.length;p++)o.pages.push({id:parseInt(h[p].id,10)||0,file:h[p].file});const c={};o.baseLineOffset=o.lineHeight-parseInt(u.base,10);const d=n.char;for(let p=0;p<d.length;p++){const g=d[p],m=parseInt(g.id,10);let _=(s=(e=g.letter)!=null?e:g.char)!=null?s:String.fromCharCode(m);_==="space"&&(_=" "),c[m]=_,o.chars[_]={id:m,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}};}const f=n.kerning||[];for(let p=0;p<f.length;p++){const g=parseInt(f[p].first,10),m=parseInt(f[p].second,10),_=parseInt(f[p].amount,10);o.chars[c[m]].kerning[c[g]]=_;}return o}},xo={test(r){const t=r;return typeof t!="string"&&"getElementsByTagName"in t&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(r){var t,e;const s={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},i=r.getElementsByTagName("info")[0],n=r.getElementsByTagName("common")[0],o=r.getElementsByTagName("distanceField")[0];o&&(s.distanceField={type:o.getAttribute("fieldType"),range:parseInt(o.getAttribute("distanceRange"),10)});const a=r.getElementsByTagName("page"),u=r.getElementsByTagName("char"),l=r.getElementsByTagName("kerning");s.fontSize=parseInt(i.getAttribute("size"),10),s.fontFamily=i.getAttribute("face"),s.lineHeight=parseInt(n.getAttribute("lineHeight"),10);for(let c=0;c<a.length;c++)s.pages.push({id:parseInt(a[c].getAttribute("id"),10)||0,file:a[c].getAttribute("file")});const h={};s.baseLineOffset=s.lineHeight-parseInt(n.getAttribute("base"),10);for(let c=0;c<u.length;c++){const d=u[c],f=parseInt(d.getAttribute("id"),10);let p=(e=(t=d.getAttribute("letter"))!=null?t:d.getAttribute("char"))!=null?e:String.fromCharCode(f);p==="space"&&(p=" "),h[f]=p,s.chars[p]={id:f,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}};}for(let c=0;c<l.length;c++){const d=parseInt(l[c].getAttribute("first"),10),f=parseInt(l[c].getAttribute("second"),10),p=parseInt(l[c].getAttribute("amount"),10);s.chars[h[f]].kerning[h[d]]=p;}return s}},bo={test(r){return typeof r=="string"&&r.includes("<font>")?xo.test(z.get().parseXML(r)):!1},parse(r){return xo.parse(z.get().parseXML(r))}},Z0=[".xml",".fnt"],Nc={extension:b.CacheParser,test:r=>r instanceof _o,getCacheableAssets(r,t){const e={};return r.forEach(s=>{e[s]=t;}),e[`${t.fontFamily}-bitmap`]=t,e}},Hc={extension:{type:b.LoadParser,priority:gt.Normal},test(r){return Z0.includes(ct.extname(r).toLowerCase())},async testParse(r){return Gs.test(r)||bo.test(r)},async parse(r,t,e){const s=Gs.test(r)?Gs.parse(r):bo.parse(r),{src:i}=t,{pages:n}=s,o=[];for(let l=0;l<n.length;++l){const h=n[l].file;let c=ct.join(ct.dirname(i),h);c=us(c,i),o.push(c);}const a=await e.load(o),u=o.map(l=>a[l]);return new _o({data:s,textures:u},i)},async load(r,t){return await(await z.get().fetch(r)).text()},unload(r){r.destroy();}};var Q0=Object.defineProperty,Is=Object.getOwnPropertySymbols,Xc=Object.prototype.hasOwnProperty,zc=Object.prototype.propertyIsEnumerable,jc=(r,t,e)=>t in r?Q0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,J0=(r,t)=>{for(var e in t||(t={}))Xc.call(t,e)&&jc(r,e,t[e]);if(Is)for(var e of Is(t))zc.call(t,e)&&jc(r,e,t[e]);return r},ty=(r,t)=>{var e={};for(var s in r)Xc.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&Is)for(var s of Is(r))t.indexOf(s)<0&&zc.call(r,s)&&(e[s]=r[s]);return e};class Ye extends W{constructor(t){t instanceof Bt&&(t={context:t});const e=t||{},{context:s,roundPixels:i}=e,n=ty(e,["context","roundPixels"]);super(J0({label:"Graphics"},n)),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,s?this._context=s:this._context=this._ownedContext=new Bt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=i!=null?i:!1;}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate());}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds);}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return !!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0;}onViewUpdate(){this._didChangeId+=4096,this._didGraphicsUpdate=!0,!this.didViewUpdate&&(this.didViewUpdate=!0,this.renderGroup&&this.renderGroup.onChildViewUpdate(this));}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t);}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(...t){return this._callContextMethod("cut",t)}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(...t){return this._callContextMethod("closePath",t)}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(...t){return this._callContextMethod("save",t)}getTransform(...t){return this._callContextMethod("getTransform",t)}resetTransform(...t){return this._callContextMethod("resetTransform",t)}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(...t){return this._callContextMethod("clear",t)}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t;}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t;}clone(t=!1){return t?new Ye(this._context.clone()):(this._ownedContext=null,new Ye(this._context))}lineStyle(t,e,s){const i={};return t&&(i.width=t),e&&(i.color=e),s&&(i.alpha=s),this.context.strokeStyle=i,this}beginFill(t,e){const s={};return t&&(s.color=t),e&&(s.alpha=e),this.context.fillStyle=s,this}endFill(){this.context.fill();const t=this.context.strokeStyle;return (t.width!==Bt.defaultStrokeStyle.width||t.color!==Bt.defaultStrokeStyle.color||t.alpha!==Bt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return this._callContextMethod("circle",t)}drawEllipse(...t){return this._callContextMethod("ellipse",t)}drawPolygon(...t){return this._callContextMethod("poly",t)}drawRect(...t){return this._callContextMethod("rect",t)}drawRoundedRect(...t){return this._callContextMethod("roundRect",t)}drawStar(...t){return this._callContextMethod("star",t)}}let Ar;function Wc(){return (!Ar||Ar!=null&&Ar.isContextLost())&&(Ar=z.get().createCanvas().getContext("webgl",{})),Ar}let Bs;function Vc(){if(!Bs){Bs="mediump";const r=Wc();r&&r.getShaderPrecisionFormat&&(Bs=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision?"highp":"mediump");}return Bs}function Yc(r,t,e){return t?r:e?(r=r.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it's WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${r}
        `):`
        
        #ifdef GL_ES // This checks if it's WebGL1
        #define in attribute
        #define out varying
        #endif
        ${r}
        `}function Kc(r,t,e){const s=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(r.substring(0,9)!=="precision"){let i=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return i==="highp"&&s!=="highp"&&(i="mediump"),`precision ${i} float;
${r}`}else if(s!=="highp"&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}function qc(r,t){return t?`#version 300 es
${r}`:r}const ey={},ry={};function Zc(r,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const s=e?ey:ry;return s[t]?(s[t]++,t+=`-${s[t]}`):s[t]=1,r.indexOf("#define SHADER_NAME")!==-1?r:`${`#define SHADER_NAME ${t}`}
${r}`}function Qc(r,t){return t?r.replace("#version 300 es",""):r}var sy=Object.defineProperty,Jc=Object.getOwnPropertySymbols,iy=Object.prototype.hasOwnProperty,ny=Object.prototype.propertyIsEnumerable,td=(r,t,e)=>t in r?sy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,ed=(r,t)=>{for(var e in t||(t={}))iy.call(t,e)&&td(r,e,t[e]);if(Jc)for(var e of Jc(t))ny.call(t,e)&&td(r,e,t[e]);return r};const vo={stripVersion:Qc,ensurePrecision:Kc,addProgramDefines:Yc,setProgramName:Zc,insertVersion:qc},yo=Object.create(null),rd=class zu{constructor(t){t=ed(ed({},zu.defaultOptions),t);const e=t.fragment.indexOf("#version 300 es")!==-1,s={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Vc()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let i=t.fragment,n=t.vertex;Object.keys(vo).forEach(o=>{const a=s[o];i=vo[o](i,a,!0),n=vo[o](n,a,!1);}),this.fragment=i,this.vertex=n,this._key=_r(`${this.vertex}:${this.fragment}`,"gl-program");}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null;}static from(t){const e=`${t.vertex}:${t.fragment}`;return yo[e]||(yo[e]=new zu(t)),yo[e]}};rd.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let Rt=rd;const sd={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Ge(r){var t;return (t=sd[r])!=null?t:sd.float32}const oy={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function id({source:r,entryPoint:t}){var e;const s={},i=r.indexOf(`fn ${t}`);if(i!==-1){const n=r.indexOf("->",i);if(n!==-1){const o=r.substring(i,n),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let u;for(;(u=a.exec(o))!==null;){const l=(e=oy[u[3]])!=null?e:"float32";s[u[2]]={location:parseInt(u[1],10),format:l,stride:Ge(l).stride,offset:0,instance:!1,start:0};}}}return s}function Fs(r){var t,e,s;const i=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,o=/@binding\((\d+)\)/,a=/var(<[^>]+>)? (\w+)/,u=/:\s*(\w+)/,l=/struct\s+(\w+)\s*{([^}]+)}/g,h=/(\w+)\s*:\s*([\w\<\>]+)/g,c=/struct\s+(\w+)/,d=(t=r.match(i))==null?void 0:t.map(p=>({group:parseInt(p.match(n)[1],10),binding:parseInt(p.match(o)[1],10),name:p.match(a)[2],isUniform:p.match(a)[1]==="<uniform>",type:p.match(u)[1]}));if(!d)return {groups:[],structs:[]};const f=(s=(e=r.match(l))==null?void 0:e.map(p=>{const g=p.match(c)[1],m=p.match(h).reduce((_,x)=>{const[v,y]=x.split(":");return _[v.trim()]=y.trim(),_},{});return m?{name:g,members:m}:null}).filter(({name:p})=>d.some(g=>g.type===p)))!=null?s:[];return {groups:d,structs:f}}var Ie=(r=>(r[r.VERTEX=1]="VERTEX",r[r.FRAGMENT=2]="FRAGMENT",r[r.COMPUTE=4]="COMPUTE",r))(Ie||{});function nd({groups:r}){const t=[];for(let e=0;e<r.length;e++){const s=r[e];t[s.group]||(t[s.group]=[]),s.isUniform?t[s.group].push({binding:s.binding,visibility:Ie.VERTEX|Ie.FRAGMENT,buffer:{type:"uniform"}}):s.type==="sampler"?t[s.group].push({binding:s.binding,visibility:Ie.FRAGMENT,sampler:{type:"filtering"}}):s.type==="texture_2d"&&t[s.group].push({binding:s.binding,visibility:Ie.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}});}return t}function od({groups:r}){const t=[];for(let e=0;e<r.length;e++){const s=r[e];t[s.group]||(t[s.group]={}),t[s.group][s.name]=s.binding;}return t}function ad(r,t){const e=new Set,s=new Set,i=[...r.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),n=[...r.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return s.has(a)?!1:(s.add(a),!0)});return {structs:i,groups:n}}const To=Object.create(null);class Tt{constructor(t){this._layoutKey=0;var e,s;const{fragment:i,vertex:n,layout:o,gpuLayout:a,name:u}=t;if(this.name=u,this.fragment=i,this.vertex=n,i.source===n.source){const l=Fs(i.source);this.structsAndGroups=l;}else {const l=Fs(n.source),h=Fs(i.source);this.structsAndGroups=ad(l,h);}this.layout=o!=null?o:od(this.structsAndGroups),this.gpuLayout=a!=null?a:nd(this.structsAndGroups),this.autoAssignGlobalUniforms=((e=this.layout[0])==null?void 0:e.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((s=this.layout[1])==null?void 0:s.localUniforms)!==void 0,this._generateProgramKey();}_generateProgramKey(){const{vertex:t,fragment:e}=this,s=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=_r(s,"program");}get attributeData(){var t;return (t=this._attributeData)!=null||(this._attributeData=id(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null;}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return To[e]||(To[e]=new Tt(t)),To[e]}}function So(r,t,e){if(r)for(const s in r){const i=s.toLocaleLowerCase(),n=t[i];if(n){let o=r[s];s==="header"&&(o=o.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&n.push(`//----${e}----//`),n.push(o);}}}const ud=/\{\{(.*?)\}\}/g;function Eo(r){var t,e;const s={};return ((e=(t=r.match(ud))==null?void 0:t.map(i=>i.replace(/[{()}]/g,"")))!=null?e:[]).forEach(i=>{s[i]=[];}),s}function ld(r,t){let e;const s=/@in\s+([^;]+);/g;for(;(e=s.exec(r))!==null;)t.push(e[1]);}function Ao(r,t,e=!1){const s=[];ld(t,s),r.forEach(a=>{a.header&&ld(a.header,s);});const i=s;e&&i.sort();const n=i.map((a,u)=>`       @location(${u}) ${a},`).join(`
`);let o=t.replace(/@in\s+[^;]+;\s*/g,"");return o=o.replace("{{in}}",`
${n}
`),o}function hd(r,t){let e;const s=/@out\s+([^;]+);/g;for(;(e=s.exec(r))!==null;)t.push(e[1]);}function ay(r){const t=/\b(\w+)\s*:/g.exec(r);return t?t[1]:""}function uy(r){const t=/@.*?\s+/g;return r.replace(t,"")}function cd(r,t){const e=[];hd(t,e),r.forEach(u=>{u.header&&hd(u.header,e);});let s=0;const i=e.sort().map(u=>u.indexOf("builtin")>-1?u:`@location(${s++}) ${u}`).join(`,
`),n=e.sort().map(u=>`       var ${uy(u)};`).join(`
`),o=`return VSOutput(
                ${e.sort().map(u=>` ${ay(u)}`).join(`,
`)});`;let a=t.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${i}
`),a=a.replace("{{start}}",`
${n}
`),a=a.replace("{{return}}",`
${o}
`),a}function Po(r,t){let e=r;for(const s in t){const i=t[s];i.join(`
`).length?e=e.replace(`{{${s}}}`,`//-----${s} START-----//
${i.join(`
`)}
//----${s} FINISH----//`):e=e.replace(`{{${s}}}`,"");}return e}const ye=Object.create(null),wo=new Map;let ly=0;function dd({template:r,bits:t}){const e=fd(r,t);if(ye[e])return ye[e];const{vertex:s,fragment:i}=hy(r,t);return ye[e]=md(s,i,t),ye[e]}function pd({template:r,bits:t}){const e=fd(r,t);return ye[e]||(ye[e]=md(r.vertex,r.fragment,t)),ye[e]}function hy(r,t){const e=t.map(o=>o.vertex).filter(o=>!!o),s=t.map(o=>o.fragment).filter(o=>!!o);let i=Ao(e,r.vertex,!0);i=cd(e,i);const n=Ao(s,r.fragment,!0);return {vertex:i,fragment:n}}function fd(r,t){return t.map(e=>(wo.has(e)||wo.set(e,ly++),wo.get(e))).sort((e,s)=>e-s).join("-")+r.vertex+r.fragment}function md(r,t,e){const s=Eo(r),i=Eo(t);return e.forEach(n=>{So(n.vertex,s,n.name),So(n.fragment,i,n.name);}),{vertex:Po(r,s),fragment:Po(t,i)}}const gd=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);
        vUV = aUV;

        {{main}}

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,_d=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`,xd=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;

        {{start}}
        
        vColor = vec4(1.);
        vUV = aUV;

        {{main}}

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,bd=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`,vd={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},cy={name:"global-uniforms-ubo-bit",vertex:{header:`
          uniform globalUniforms {
            mat3 uProjectionMatrix;
            mat3 uWorldTransformMatrix;
            vec4 uWorldColorAlpha;
            vec2 uResolution;
          };
        `}},yd={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};var dy=Object.defineProperty,Td=Object.getOwnPropertySymbols,py=Object.prototype.hasOwnProperty,fy=Object.prototype.propertyIsEnumerable,Sd=(r,t,e)=>t in r?dy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,my=(r,t)=>{for(var e in t||(t={}))py.call(t,e)&&Sd(r,e,t[e]);if(Td)for(var e of Td(t))fy.call(t,e)&&Sd(r,e,t[e]);return r};function Be({bits:r,name:t}){const e=dd({template:{fragment:_d,vertex:gd},bits:[vd,...r]});return Tt.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function Fe({bits:r,name:t}){return new Rt(my({name:t},pd({template:{vertex:xd,fragment:bd},bits:[yd,...r]})))}const Ds={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Us={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},Ro={};function gy(r){const t=[];if(r===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else {let e=0;for(let s=0;s<r;s++)t.push(`@group(1) @binding(${e++}) var textureSource${s+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${s+1}: sampler;`);}return t.join(`
`)}function _y(r){const t=[];if(r===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else {t.push("switch vTextureId {");for(let e=0;e<r;e++)e===r-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}");}return t.join(`
`)}function ks(r){return Ro[r]||(Ro[r]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;
    
                ${gy(16)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${_y(16)}
            `}}),Ro[r]}const Mo={};function xy(r){const t=[];for(let e=0;e<r;e++)e>0&&t.push("else"),e<r-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function Ls(r){return Mo[r]||(Mo[r]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;
              
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;
    
                uniform sampler2D uTextures[${r}];
              
            `,main:`
    
                ${xy(16)}
            `}}),Mo[r]}const De={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `}},Ue={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `}},Ed=new Int32Array(wt);for(let r=0;r<wt;r++)Ed[r]=r;const $s=new st({uTextures:{value:Ed,type:"i32",size:wt}},{isStatic:!0});var xt=(r=>(r[r.WEBGL=1]="WEBGL",r[r.WEBGPU=2]="WEBGPU",r[r.BOTH=3]="BOTH",r))(xt||{}),by=Object.defineProperty,Ns=Object.getOwnPropertySymbols,Ad=Object.prototype.hasOwnProperty,Pd=Object.prototype.propertyIsEnumerable,wd=(r,t,e)=>t in r?by(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,vy=(r,t)=>{for(var e in t||(t={}))Ad.call(t,e)&&wd(r,e,t[e]);if(Ns)for(var e of Ns(t))Pd.call(t,e)&&wd(r,e,t[e]);return r},yy=(r,t)=>{var e={};for(var s in r)Ad.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&Ns)for(var s of Ns(r))t.indexOf(s)<0&&Pd.call(r,s)&&(e[s]=r[s]);return e};class St extends mt{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:s,groups:i,resources:n,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=s,o===void 0&&(o=0,e&&(o|=xt.WEBGPU),s&&(o|=xt.WEBGL)),this.compatibleRenderers=o;const u={};if(!n&&!i&&(n={}),n&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&i&&a)for(const l in a)for(const h in a[l]){const c=a[l][h];u[c]={group:l,binding:h,name:c};}else if(e&&i&&!a){const l=e.structsAndGroups.groups;a={},l.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,u[h.name]=h;});}else if(n){if(e){const l=e.structsAndGroups.groups;a={},l.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,u[h.name]=h;});}else {a={},i={99:new Lt},this._ownedBindGroups.push(i[99]);let l=0;for(const h in n)u[h]={group:99,binding:l,name:h},a[99]=a[99]||{},a[99][l]=h,l++;}i={};for(const l in n){const h=l;let c=n[l];!c.source&&!c._resourceType&&(c=new st(c));const d=u[h];d&&(i[d.group]||(i[d.group]=new Lt,this._ownedBindGroups.push(i[d.group])),i[d.group].setResource(c,d.binding));}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,u);}addResource(t,e,s){var i,n;(i=this._uniformBindMap)[e]||(i[e]={}),(n=this._uniformBindMap[e])[s]||(n[s]=t),this.groups[e]||(this.groups[e]=new Lt,this._ownedBindGroups.push(this.groups[e]));}_buildResourceAccessor(t,e){const s={};for(const i in e){const n=e[i];Object.defineProperty(s,n.name,{get(){return t[n.group].getResource(n.binding)},set(o){t[n.group].setResource(o,n.binding);}});}return s}destroy(t=!1){var e,s;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(s=this.glProgram)==null||s.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy();}),this._ownedBindGroups=null,this.resources=null,this.groups=null;}static from(t){const e=t,{gpu:s,gl:i}=e,n=yy(e,["gpu","gl"]);let o,a;return s&&(o=Tt.from(s)),i&&(a=Rt.from(i)),new St(vy({gpuProgram:o,glProgram:a},n))}}const Rd={name:"local-uniform-msdf-bit",vertex:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `},fragment:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,main:` 
            outColor = vColor * calculateMSDFAlpha(outColor, localUniforms.uDistance);
        `}},Md={name:"local-uniform-msdf-bit",vertex:{header:`
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `},fragment:{header:`
            uniform float uDistance;
         `,main:` 
            outColor = vColor * calculateMSDFAlpha(outColor, uDistance);
        `}},Od={name:"msdf-bit",fragment:{header:`
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, distance:f32) -> f32 {
                
                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));
            
                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }
        `}},Cd={name:"msdf-bit",fragment:{header:`
            float calculateMSDFAlpha(vec4 msdfColor, float distance) {
                
                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));
               
                // SDF
                median = min(median, msdfColor.a);
            
                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
           
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }
        `}};class Gd extends St{constructor(){const t=new st({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new G,type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}}),e=Be({name:"sdf-shader",bits:[Ds,ks(wt),Rd,Od,De]}),s=Fe({name:"sdf-shader",bits:[Us,Ls(wt),Md,Cd,Ue]});super({glProgram:s,gpuProgram:e,resources:{localUniforms:t,batchSamplers:$s}});}}class Oo{constructor(t){this._gpuBitmapText={},this._renderer=t;}validateRenderable(t){const e=this._getGpuBitmapText(t);return t._didTextUpdate&&(t._didTextUpdate=!1,this._updateContext(t,e)),this._renderer.renderPipes.graphics.validateRenderable(e)}addRenderable(t,e){const s=this._getGpuBitmapText(t);Id(t,s),t._didTextUpdate&&(t._didTextUpdate=!1,this._updateContext(t,s)),this._renderer.renderPipes.graphics.addRenderable(s,e),s.context.customShader&&this._updateDistanceField(t);}destroyRenderable(t){this._destroyRenderableByUid(t.uid);}_destroyRenderableByUid(t){X.return(this._gpuBitmapText[t]),this._gpuBitmapText[t]=null;}updateRenderable(t){const e=this._getGpuBitmapText(t);Id(t,e),this._renderer.renderPipes.graphics.updateRenderable(e),e.context.customShader&&this._updateDistanceField(t);}_updateContext(t,e){var s;const{context:i}=e,n=Er.getFont(t.text,t._style);i.clear(),n.distanceField.type!=="none"&&(i.customShader||(this._sdfShader||(this._sdfShader=new Gd),i.customShader=this._sdfShader));const o=Array.from(t.text),a=t._style;let u=(((s=a._stroke)==null?void 0:s.width)||0)/2;u+=n.baseLineOffset;const l=mo(o,a,n);let h=0;const c=a.padding,d=l.scale;i.translate(-t._anchor._x*l.width-c,-t._anchor._y*(l.height+l.offsetY)-c).scale(d,d);const f=a._fill.color;for(let p=0;p<l.lines.length;p++){const g=l.lines[p];for(let m=0;m<g.charPositions.length;m++){const _=o[h++],x=n.chars[_];x!=null&&x.texture&&i.texture(x.texture,f,Math.round(g.charPositions[m]+x.xOffset),Math.round(u+x.yOffset));}u+=n.lineHeight;}}_getGpuBitmapText(t){return this._gpuBitmapText[t.uid]||this.initGpuText(t)}initGpuText(t){const e=X.get(Ye);return this._gpuBitmapText[t.uid]=e,this._updateContext(t,e),t.on("destroyed",()=>{this.destroyRenderable(t);}),this._gpuBitmapText[t.uid]}_updateDistanceField(t){var e;const s=this._getGpuBitmapText(t).context,i=t._style.fontFamily,n=Y.get(`${i}-bitmap`),{a:o,b:a,c:u,d:l}=t.groupTransform,h=Math.sqrt(o*o+a*a),c=Math.sqrt(u*u+l*l),d=(Math.abs(h)+Math.abs(c))/2,f=n.baseRenderedFontSize/t._style.fontSize,p=(e=t.resolution)!=null?e:this._renderer.resolution,g=d*n.distanceField.range*(1/f)*p;s.customShader.resources.localUniforms.uniforms.uDistance=g;}destroy(){var t;for(const e in this._gpuBitmapText)this._destroyRenderableByUid(e);this._gpuBitmapText=null,(t=this._sdfShader)==null||t.destroy(!0),this._sdfShader=null,this._renderer=null;}}Oo.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"bitmapText"};function Id(r,t){t.groupTransform=r.groupTransform,t.groupColorAlpha=r.groupColorAlpha,t.groupColor=r.groupColor,t.groupBlendMode=r.groupBlendMode,t.globalDisplayStatus=r.globalDisplayStatus,t.groupTransform=r.groupTransform,t.localDisplayStatus=r.localDisplayStatus,t.groupAlpha=r.groupAlpha,t._roundPixels=r._roundPixels;}D.add(Oo,Hc,Nc);class Co{constructor(t){this._gpuText=Object.create(null),this._renderer=t;}validateRenderable(t){const e=this._getGpuText(t),s=t._getKey();return e.textureNeedsUploading?(e.textureNeedsUploading=!1,!0):e.currentKey!==s}addRenderable(t){const e=this._getGpuText(t).batchableSprite;t._didTextUpdate&&this._updateText(t),this._renderer.renderPipes.batch.addToBatch(e);}updateRenderable(t){const e=this._getGpuText(t).batchableSprite;t._didTextUpdate&&this._updateText(t),e.batcher.updateElement(e);}destroyRenderable(t){this._destroyRenderableById(t.uid);}_destroyRenderableById(t){const e=this._gpuText[t];this._renderer.htmlText.decreaseReferenceCount(e.currentKey),X.return(e.batchableSprite),this._gpuText[t]=null;}_updateText(t){const e=t._getKey(),s=this._getGpuText(t),i=s.batchableSprite;s.currentKey!==e&&this._updateGpuText(t).catch(o=>{console.error(o);}),t._didTextUpdate=!1;const n=t._style.padding;hr(i.bounds,t._anchor,i.texture,n);}async _updateGpuText(t){var e;t._didTextUpdate=!1;const s=this._getGpuText(t);if(s.generatingTexture)return;const i=t._getKey();this._renderer.htmlText.decreaseReferenceCount(s.currentKey),s.generatingTexture=!0,s.currentKey=i;const n=(e=t.resolution)!=null?e:this._renderer.resolution,o=await this._renderer.htmlText.getManagedTexture(t.text,n,t._style,t._getKey()),a=s.batchableSprite;a.texture=s.texture=o,s.generatingTexture=!1,s.textureNeedsUploading=!0,t._onUpdate();const u=t._style.padding;hr(a.bounds,t._anchor,a.texture,u);}_getGpuText(t){return this._gpuText[t.uid]||this.initGpuText(t)}initGpuText(t){const e={texture:A.EMPTY,currentKey:"--",batchableSprite:X.get(ws),textureNeedsUploading:!1,generatingTexture:!1},s=e.batchableSprite;return s.renderable=t,s.texture=A.EMPTY,s.bounds={minX:0,maxX:1,minY:0,maxY:0},s.roundPixels=this._renderer._roundPixels|t._roundPixels,this._gpuText[t.uid]=e,t.on("destroyed",()=>{this.destroyRenderable(t);}),e}destroy(){for(const t in this._gpuText)this._destroyRenderableById(t);this._gpuText=null,this._renderer=null;}}Co.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"htmlText"};function Bd(){const{userAgent:r}=z.get().getNavigator();return /^((?!chrome|android).)*safari/i.test(r)}function Fd(r,t){const e=t.fontFamily,s=[],i={},n=/font-family:([^;"\s]+)/g,o=r.match(n);function a(u){i[u]||(s.push(u),i[u]=!0);}if(Array.isArray(e))for(let u=0;u<e.length;u++)a(e[u]);else a(e);o&&o.forEach(u=>{const l=u.split(":")[1].trim();a(l);});for(const u in t.tagStyles){const l=t.tagStyles[u].fontFamily;a(l);}return s}async function Dd(r){const t=await(await z.get().fetch(r)).blob(),e=new FileReader;return await new Promise((s,i)=>{e.onloadend=()=>s(e.result),e.onerror=i,e.readAsDataURL(t);})}async function Go(r,t){const e=await Dd(t);return `@font-face {
        font-family: "${r.fontFamily}";
        src: url('${e}');
        font-weight: ${r.fontWeight};
        font-style: ${r.fontStyle};
    }`}var Ty=Object.defineProperty,Sy=Object.defineProperties,Ey=Object.getOwnPropertyDescriptors,Ud=Object.getOwnPropertySymbols,Ay=Object.prototype.hasOwnProperty,Py=Object.prototype.propertyIsEnumerable,kd=(r,t,e)=>t in r?Ty(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,wy=(r,t)=>{for(var e in t||(t={}))Ay.call(t,e)&&kd(r,e,t[e]);if(Ud)for(var e of Ud(t))Py.call(t,e)&&kd(r,e,t[e]);return r},Ry=(r,t)=>Sy(r,Ey(t));async function Ld(r,t){const e=r.filter(s=>Y.has(s)).map((s,i)=>{if(!Pr.has(s)){const{url:n}=Y.get(s);i===0?Pr.set(s,Go(t,n)):Pr.set(s,Go(Ry(wy({},wr.defaultFontOptions),{fontFamily:s}),n));}return Pr.get(s)});return (await Promise.all(e)).join(`
`)}function $d(r,t,e,s,i){const{domElement:n,styleElement:o,svgRoot:a}=i;n.innerHTML=`<style>${t.cssStyle}</style><div>${r}</div>`,n.setAttribute("style",`transform: scale(${e});transform-origin: top left; display: inline-block`),o.textContent=s;const{width:u,height:l}=i.image;return a.setAttribute("width",u.toString()),a.setAttribute("height",l.toString()),new XMLSerializer().serializeToString(a)}function Nd(r,t){const e=jt.getOptimalCanvasAndContext(r.width,r.height,t),{context:s}=e;return s.clearRect(0,0,r.width,r.height),s.drawImage(r,0,0),jt.returnCanvasAndContext(e),e.canvas}function Hd(r,t,e){return new Promise(async s=>{e&&await new Promise(i=>setTimeout(i,100)),r.onload=()=>{s();},r.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(t)}`,r.crossOrigin="anonymous";})}let Xd;function Io(r,t,e,s){s=s||Xd||(Xd=new Bo);const{domElement:i,styleElement:n,svgRoot:o}=s;i.innerHTML=`<style>${t.cssStyle}</style><div>${r}</div>`,i.setAttribute("style","transform-origin: top left; display: inline-block"),e&&(n.textContent=e),document.body.appendChild(o);const a=i.getBoundingClientRect();o.remove();const u=It.measureFont(t.fontStyle).descent;return {width:a.width,height:a.height+u}}const zd="http://www.w3.org/2000/svg",jd="http://www.w3.org/1999/xhtml",Pr=new Map;class Bo{constructor(){this.svgRoot=document.createElementNS(zd,"svg"),this.foreignObject=document.createElementNS(zd,"foreignObject"),this.domElement=document.createElementNS(jd,"div"),this.styleElement=document.createElementNS(jd,"style"),this.image=new Image;const{foreignObject:t,svgRoot:e,styleElement:s,domElement:i}=this;t.setAttribute("width","10000"),t.setAttribute("height","10000"),t.style.overflow="hidden",e.appendChild(t),t.appendChild(s),t.appendChild(i);}}class wr{constructor(t){this._activeTextures={},this._renderer=t,this._createCanvas=t.type===xt.WEBGPU;}getTexture(t){return this._buildTexturePromise(t.text,t.resolution,t.style)}getManagedTexture(t,e,s,i){if(this._activeTextures[i])return this._increaseReferenceCount(i),this._activeTextures[i].promise;const n=this._buildTexturePromise(t,e,s).then(o=>(this._activeTextures[i].texture=o,o));return this._activeTextures[i]={texture:null,promise:n,usageCount:1},n}async _buildTexturePromise(t,e,s){const i=X.get(Bo),n=Fd(t,s),o=await Ld(n,s),a=Io(t,s,o,i),u=Math.ceil(Math.ceil(Math.max(1,a.width)+s.padding*2)*e),l=Math.ceil(Math.ceil(Math.max(1,a.height)+s.padding*2)*e),h=i.image;h.width=u|0,h.height=l|0;const c=$d(t,s,e,o,i);await Hd(h,c,Bd()&&n.length>0);let d=h;this._createCanvas&&(d=Nd(h,e));const f=Kn(d,h.width,h.height,e);return this._createCanvas&&this._renderer.texture.initSource(f.source),X.return(i),f}_increaseReferenceCount(t){this._activeTextures[t].usageCount++;}decreaseReferenceCount(t){const e=this._activeTextures[t];e&&(e.usageCount--,e.usageCount===0&&(e.texture?this._cleanUp(e):e.promise.then(s=>{e.texture=s,this._cleanUp(e);}).catch(()=>{}),this._activeTextures[t]=null));}_cleanUp(t){ut.returnTexture(t.texture),t.texture.source.resource=null,t.texture.source.uploadMethodId="unknown";}getReferenceCount(t){return this._activeTextures[t].usageCount}destroy(){this._activeTextures=null;}}wr.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:"htmlText"},wr.defaultFontOptions={fontFamily:"Arial",fontStyle:"normal",fontWeight:"normal"},D.add(wr),D.add(Co);var My=Object.defineProperty,Wd=Object.getOwnPropertySymbols,Oy=Object.prototype.hasOwnProperty,Cy=Object.prototype.propertyIsEnumerable,Vd=(r,t,e)=>t in r?My(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Yd=(r,t)=>{for(var e in t||(t={}))Oy.call(t,e)&&Vd(r,e,t[e]);if(Wd)for(var e of Wd(t))Cy.call(t,e)&&Vd(r,e,t[e]);return r};const Kd=class Mx extends Re{constructor(...t){var e;let s=(e=t[0])!=null?e:{};s instanceof Float32Array&&(s={positions:s,uvs:t[1],indices:t[2]}),s=Yd(Yd({},Mx.defaultOptions),s);const i=s.positions||new Float32Array([0,0,1,0,1,1,0,1]),n=s.uvs||new Float32Array([0,0,1,0,1,1,0,1]),o=s.indices||new Uint32Array([0,1,2,0,2,3]),a=s.shrinkBuffersToFit,u=new _t({data:i,label:"attribute-mesh-positions",shrinkToFit:a,usage:$.VERTEX|$.COPY_DST}),l=new _t({data:n,label:"attribute-mesh-uvs",shrinkToFit:a,usage:$.VERTEX|$.COPY_DST}),h=new _t({data:o,label:"index-mesh-buffer",shrinkToFit:a,usage:$.INDEX|$.COPY_DST});super({attributes:{aPosition:{buffer:u,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:h,topology:s.topology}),this.batchMode="auto";}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t;}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t;}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t;}};Kd.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let Jt=Kd;var Gy=Object.defineProperty,Iy=Object.defineProperties,By=Object.getOwnPropertyDescriptors,qd=Object.getOwnPropertySymbols,Fy=Object.prototype.hasOwnProperty,Dy=Object.prototype.propertyIsEnumerable,Zd=(r,t,e)=>t in r?Gy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Qd=(r,t)=>{for(var e in t||(t={}))Fy.call(t,e)&&Zd(r,e,t[e]);if(qd)for(var e of qd(t))Dy.call(t,e)&&Zd(r,e,t[e]);return r},Jd=(r,t)=>Iy(r,By(t));const ke={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},tp=Jd(Qd({},ke),{vertex:Jd(Qd({},ke.vertex),{header:ke.vertex.header.replace("group(1)","group(2)")})}),Hs={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}},ep={name:"tiling-bit",vertex:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`
            vUV = (tilingUniforms.uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `},fragment:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            } 

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `}},rp={name:"tiling-bit",vertex:{header:`
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;
        
        `,main:`
            vUV = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `},fragment:{header:`
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,main:`

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
        
        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0
    
        `}};let Fo,Do;class sp extends St{constructor(){Fo!=null||(Fo=Be({name:"tiling-sprite-shader",bits:[ke,ep,De]})),Do!=null||(Do=Fe({name:"tiling-sprite-shader",bits:[Hs,rp,Ue]}));const t=new st({uMapCoord:{value:new G,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new G,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,100,.5,.5]),type:"vec4<f32>"}});super({glProgram:Do,gpuProgram:Fo,resources:{localUniforms:new st({uTransformMatrix:{value:new G,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),tilingUniforms:t,uTexture:A.EMPTY.source,uSampler:A.EMPTY.source.style}});}updateUniforms(t,e,s,i,n,o){const a=this.resources.tilingUniforms,u=o.width,l=o.height,h=o.textureMatrix,c=a.uniforms.uTextureTransform;c.set(s.a*u/t,s.b*u/e,s.c*l/t,s.d*l/e,s.tx/t,s.ty/e),c.invert(),a.uniforms.uMapCoord=h.mapCoord,a.uniforms.uClampFrame=h.uClampFrame,a.uniforms.uClampOffset=h.uClampOffset,a.uniforms.uTextureTransform=c,a.uniforms.uSizeAnchor[0]=t,a.uniforms.uSizeAnchor[1]=e,a.uniforms.uSizeAnchor[2]=i,a.uniforms.uSizeAnchor[3]=n,o&&(this.resources.uTexture=o.source,this.resources.uSampler=o.source.style);}}class ip extends Jt{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])});}}function np(r,t){const e=r.anchor.x,s=r.anchor.y;t[0]=-e*r.width,t[1]=-s*r.height,t[2]=(1-e)*r.width,t[3]=-s*r.height,t[4]=(1-e)*r.width,t[5]=(1-s)*r.height,t[6]=-e*r.width,t[7]=(1-s)*r.height;}function op(r,t,e,s){let i=0;const n=r.length/(t||2),o=s.a,a=s.b,u=s.c,l=s.d,h=s.tx,c=s.ty;for(e*=t;i<n;){const d=r[e],f=r[e+1];r[e]=o*d+u*f+h,r[e+1]=a*d+l*f+c,e+=t,i++;}}function ap(r,t){const e=r.texture,s=e.frame.width,i=e.frame.height;let n=0,o=0;r._applyAnchorToTexture&&(n=r.anchor.x,o=r.anchor.y),t[0]=t[6]=-n,t[2]=t[4]=1-n,t[1]=t[3]=-o,t[5]=t[7]=1-o;const a=G.shared;a.copyFrom(r._tileTransform.matrix),a.tx/=r.width,a.ty/=r.height,a.invert(),a.scale(r.width/s,r.height/i),op(t,2,0,a);}const Xs=new ip;class Uo{constructor(t){this._tilingSpriteDataHash=Object.create(null),this._renderer=t;}validateRenderable(t){const e=this._getTilingSpriteData(t),s=e.canBatch;this._updateCanBatch(t);const i=e.canBatch;if(i&&i===s){const{batchableMesh:n}=e;if(n.texture._source!==t.texture._source)return !n.batcher.checkAndUpdateTexture(n,t.texture)}return s!==i}addRenderable(t,e){const s=this._renderer.renderPipes.batch;this._updateCanBatch(t);const i=this._getTilingSpriteData(t),{geometry:n,canBatch:o}=i;if(o){i.batchableMesh||(i.batchableMesh=new Ps);const a=i.batchableMesh;t._didTilingSpriteUpdate&&(t._didTilingSpriteUpdate=!1,this._updateBatchableMesh(t),a.geometry=n,a.mesh=t,a.texture=t._texture),a.roundPixels=this._renderer._roundPixels|t._roundPixels,s.addToBatch(a);}else s.break(e),i.shader||(i.shader=new sp),this.updateRenderable(t),e.add(t);}execute(t){const{shader:e}=this._tilingSpriteDataHash[t.uid];e.groups[0]=this._renderer.globalUniforms.bindGroup;const s=e.resources.localUniforms.uniforms;s.uTransformMatrix=t.groupTransform,s.uRound=this._renderer._roundPixels|t._roundPixels,gr(t.groupColorAlpha,s.uColor,0),this._renderer.encoder.draw({geometry:Xs,shader:e,state:Ct.default2d});}updateRenderable(t){const e=this._getTilingSpriteData(t),{canBatch:s}=e;if(s){const{batchableMesh:i}=e;t._didTilingSpriteUpdate&&this._updateBatchableMesh(t),i.batcher.updateElement(i);}else if(t._didTilingSpriteUpdate){const{shader:i}=e;i.updateUniforms(t.width,t.height,t._tileTransform.matrix,t.anchor.x,t.anchor.y,t.texture);}t._didTilingSpriteUpdate=!1;}destroyRenderable(t){var e;const s=this._getTilingSpriteData(t);s.batchableMesh=null,(e=s.shader)==null||e.destroy(),this._tilingSpriteDataHash[t.uid]=null;}_getTilingSpriteData(t){return this._tilingSpriteDataHash[t.uid]||this._initTilingSpriteData(t)}_initTilingSpriteData(t){const e=new Jt({indices:Xs.indices,positions:Xs.positions.slice(),uvs:Xs.uvs.slice()});return this._tilingSpriteDataHash[t.uid]={canBatch:!0,renderable:t,geometry:e},t.on("destroyed",()=>{this.destroyRenderable(t);}),this._tilingSpriteDataHash[t.uid]}_updateBatchableMesh(t){const e=this._getTilingSpriteData(t),{geometry:s}=e,i=t.texture.source.style;i.addressMode!=="repeat"&&(i.addressMode="repeat",i.update()),ap(t,s.uvs),np(t,s.positions);}destroy(){for(const t in this._tilingSpriteDataHash)this.destroyRenderable(this._tilingSpriteDataHash[t].renderable);this._tilingSpriteDataHash=null,this._renderer=null;}_updateCanBatch(t){const e=this._getTilingSpriteData(t),s=t.texture;let i=!0;return this._renderer.type===xt.WEBGL&&(i=this._renderer.context.supports.nonPowOf2wrapping),e.canBatch=s.textureMatrix.isSimple&&(i||s.source.isPowerOfTwo),e.canBatch}}Uo.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"tilingSprite"},D.add(Uo);var Uy=Object.defineProperty,up=Object.getOwnPropertySymbols,ky=Object.prototype.hasOwnProperty,Ly=Object.prototype.propertyIsEnumerable,lp=(r,t,e)=>t in r?Uy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,hp=(r,t)=>{for(var e in t||(t={}))ky.call(t,e)&&lp(r,e,t[e]);if(up)for(var e of up(t))Ly.call(t,e)&&lp(r,e,t[e]);return r};const cp=class Ox extends Jt{constructor(...t){var e;super({});let s=(e=t[0])!=null?e:{};typeof s=="number"&&(s={width:s,height:t[1],verticesX:t[2],verticesY:t[3]}),this.build(s);}build(t){var e,s,i,n;t=hp(hp({},Ox.defaultOptions),t),this.verticesX=(e=this.verticesX)!=null?e:t.verticesX,this.verticesY=(s=this.verticesY)!=null?s:t.verticesY,this.width=(i=this.width)!=null?i:t.width,this.height=(n=this.height)!=null?n:t.height;const o=this.verticesX*this.verticesY,a=[],u=[],l=[],h=this.verticesX-1,c=this.verticesY-1,d=this.width/h,f=this.height/c;for(let g=0;g<o;g++){const m=g%this.verticesX,_=g/this.verticesX|0;a.push(m*d,_*f),u.push(m/h,_/c);}const p=h*c;for(let g=0;g<p;g++){const m=g%h,_=g/h|0,x=_*this.verticesX+m,v=_*this.verticesX+m+1,y=(_+1)*this.verticesX+m,S=(_+1)*this.verticesX+m+1;l.push(x,v,y,v,S,y);}this.buffers[0].data=new Float32Array(a),this.buffers[1].data=new Float32Array(u),this.indexBuffer.data=new Uint32Array(l),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update();}};cp.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};let ko=cp;var $y=Object.defineProperty,dp=Object.getOwnPropertySymbols,Ny=Object.prototype.hasOwnProperty,Hy=Object.prototype.propertyIsEnumerable,pp=(r,t,e)=>t in r?$y(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,fp=(r,t)=>{for(var e in t||(t={}))Ny.call(t,e)&&pp(r,e,t[e]);if(dp)for(var e of dp(t))Hy.call(t,e)&&pp(r,e,t[e]);return r};const mp=class Cx extends ko{constructor(t={}){t=fp(fp({},Cx.defaultOptions),t),super({width:t.width,height:t.height,verticesX:4,verticesY:4}),this._textureMatrix=new G,this.update(t);}update(t){var e,s,i,n,o,a,u,l;this.width=(e=t.width)!=null?e:this.width,this.height=(s=t.height)!=null?s:this.height,this._originalWidth=(i=t.originalWidth)!=null?i:this._originalWidth,this._originalHeight=(n=t.originalHeight)!=null?n:this._originalHeight,this._leftWidth=(o=t.leftWidth)!=null?o:this._leftWidth,this._rightWidth=(a=t.rightWidth)!=null?a:this._rightWidth,this._topHeight=(u=t.topHeight)!=null?u:this._topHeight,this._bottomHeight=(l=t.bottomHeight)!=null?l:this._bottomHeight,t.textureMatrix&&this._textureMatrix.copyFrom(t.textureMatrix),this.updateUvs(),this.updatePositions();}updatePositions(){const t=this.positions,e=this._leftWidth+this._rightWidth,s=this.width>e?1:this.width/e,i=this._topHeight+this._bottomHeight,n=this.height>i?1:this.height/i,o=Math.min(s,n);t[9]=t[11]=t[13]=t[15]=this._topHeight*o,t[17]=t[19]=t[21]=t[23]=this.height-this._bottomHeight*o,t[25]=t[27]=t[29]=t[31]=this.height,t[2]=t[10]=t[18]=t[26]=this._leftWidth*o,t[4]=t[12]=t[20]=t[28]=this.width-this._rightWidth*o,t[6]=t[14]=t[22]=t[30]=this.width,this.getBuffer("aPosition").update();}updateUvs(){const t=this._textureMatrix,e=this.uvs;e[0]=e[8]=e[16]=e[24]=0,e[1]=e[3]=e[5]=e[7]=0,e[6]=e[14]=e[22]=e[30]=1,e[25]=e[27]=e[29]=e[31]=1;const s=1/this._originalWidth,i=1/this._originalHeight;e[2]=e[10]=e[18]=e[26]=s*this._leftWidth,e[9]=e[11]=e[13]=e[15]=i*this._topHeight,e[4]=e[12]=e[20]=e[28]=1-s*this._rightWidth,e[17]=e[19]=e[21]=e[23]=1-i*this._bottomHeight,Xy(t,e),this.getBuffer("aUV").update();}};mp.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};let gp=mp;function Xy(r,t,e){e!=null||(e=t);const s=r.a,i=r.b,n=r.c,o=r.d,a=r.tx,u=r.ty;for(let l=0;l<t.length;l+=2){const h=t[l],c=t[l+1];e[l]=h*s+c*n+a,e[l+1]=h*i+c*o+u;}return e}class Lo{constructor(t){this._gpuSpriteHash=Object.create(null),this._renderer=t;}addRenderable(t,e){const s=this._getGpuSprite(t);t._didSpriteUpdate&&this._updateBatchableSprite(t,s),this._renderer.renderPipes.batch.addToBatch(s);}updateRenderable(t){const e=this._gpuSpriteHash[t.uid];t._didSpriteUpdate&&this._updateBatchableSprite(t,e),e.batcher.updateElement(e);}validateRenderable(t){const e=t._texture,s=this._getGpuSprite(t);return s.texture._source!==e._source?!s.batcher.checkAndUpdateTexture(s,e):!1}destroyRenderable(t){const e=this._gpuSpriteHash[t.uid];X.return(e),this._gpuSpriteHash[t.uid]=null;}_updateBatchableSprite(t,e){t._didSpriteUpdate=!1,e.geometry.update(t),e.texture=t._texture;}_getGpuSprite(t){return this._gpuSpriteHash[t.uid]||this._initGPUSprite(t)}_initGPUSprite(t){const e=new Ps;return e.geometry=new gp,e.mesh=t,e.texture=t._texture,e.roundPixels=this._renderer._roundPixels|t._roundPixels,this._gpuSpriteHash[t.uid]=e,t.on("destroyed",()=>{this.destroyRenderable(t);}),e}destroy(){for(const t in this._gpuSpriteHash)this._gpuSpriteHash[t].geometry.destroy();this._gpuSpriteHash=null,this._renderer=null;}}Lo.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"nineSliceSprite"},D.add(Lo);class $o{constructor(t){this._renderer=t;}push(t,e,s){this._renderer.renderPipes.batch.break(s),s.add({renderPipeId:"filter",canBundle:!1,action:"pushFilter",container:e,filterEffect:t});}pop(t,e,s){this._renderer.renderPipes.batch.break(s),s.add({renderPipeId:"filter",action:"popFilter",canBundle:!1});}execute(t){t.action==="pushFilter"?this._renderer.filter.push(t):t.action==="popFilter"&&this._renderer.filter.pop();}destroy(){this._renderer=null;}}$o.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"filter"};const zy=new G;function _p(r,t){return t.clear(),No(r,t),t.isValid||t.set(0,0,0,0),r.isRenderGroupRoot?t.applyMatrix(r.renderGroup.localTransform):t.applyMatrix(r.renderGroup.worldTransform),t}function No(r,t){if(r.localDisplayStatus!==7||!r.measurable)return;const e=!!r.effects.length;let s=t;if((r.isRenderGroupRoot||e)&&(s=kt.get().clear()),r.boundsArea)t.addRect(r.boundsArea,r.worldTransform);else {if(r.renderPipeId){const n=r.bounds;s.addFrame(n.minX,n.minY,n.maxX,n.maxY,r.groupTransform);}const i=r.children;for(let n=0;n<i.length;n++)No(i[n],s);}if(e){let i=!1;for(let n=0;n<r.effects.length;n++)r.effects[n].addBounds&&(i||(i=!0,s.applyMatrix(r.renderGroup.worldTransform)),r.effects[n].addBounds(s,!0));i&&(s.applyMatrix(r.renderGroup.worldTransform.copyTo(zy).invert()),t.addBounds(s,r.relativeGroupTransform)),t.addBounds(s),kt.return(s);}else r.isRenderGroupRoot&&(t.addBounds(s,r.relativeGroupTransform),kt.return(s));}function xp(r,t){t.clear();const e=t.matrix;for(let s=0;s<r.length;s++){const i=r[s];i.globalDisplayStatus<7||(t.matrix=i.worldTransform,i.addBounds(t));}return t.matrix=e,t}const jy=new Re({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),location:0,format:"float32x2",stride:2*4,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])});class Ho{constructor(t){this._filterStackIndex=0,this._filterStack=[],this._filterGlobalUniforms=new st({uInputSize:{value:new Float32Array(4),type:"vec4<f32>"},uInputPixel:{value:new Float32Array(4),type:"vec4<f32>"},uInputClamp:{value:new Float32Array(4),type:"vec4<f32>"},uOutputFrame:{value:new Float32Array(4),type:"vec4<f32>"},uGlobalFrame:{value:new Float32Array(4),type:"vec4<f32>"},uOutputTexture:{value:new Float32Array(4),type:"vec4<f32>"}}),this._globalFilterBindGroup=new Lt({}),this.renderer=t;}get activeBackTexture(){var t;return (t=this._activeFilterData)==null?void 0:t.backTexture}push(t){var e,s;const i=this.renderer,n=t.filterEffect.filters;this._filterStack[this._filterStackIndex]||(this._filterStack[this._filterStackIndex]=this._getFilterData());const o=this._filterStack[this._filterStackIndex];if(this._filterStackIndex++,n.length===0){o.skip=!0;return}const a=o.bounds;t.renderables?xp(t.renderables,a):t.filterEffect.filterArea?(a.clear(),a.addRect(t.filterEffect.filterArea),a.applyMatrix(t.container.worldTransform)):_p(t.container,a);const u=i.renderTarget.rootRenderTarget.colorTexture.source;let l=u._resolution,h=0,c=u.antialias,d=!1,f=!1;for(let p=0;p<n.length;p++){const g=n[p];if(l=Math.min(l,g.resolution),h+=g.padding,g.antialias!=="inherit"&&(g.antialias==="on"?c=!0:c=!1),!(g.compatibleRenderers&i.type)){f=!1;break}if(g.blendRequired&&!((s=(e=i.backBuffer)==null?void 0:e.useBackBuffer)==null||s)){f=!1;break}f=g.enabled||f,d=d||g.blendRequired;}if(!f){o.skip=!0;return}if(a.scale(l).fit(i.renderTarget.rootViewPort).scale(1/l).pad(h).ceil(),!a.isPositive){o.skip=!0;return}o.skip=!1,o.bounds=a,o.blendRequired=d,o.container=t.container,o.filterEffect=t.filterEffect,o.previousRenderSurface=i.renderTarget.renderSurface,o.inputTexture=ut.getOptimalTexture(a.width,a.height,l,c),i.renderTarget.bind(o.inputTexture,!0),i.globalUniforms.push({offset:a});}pop(){const t=this.renderer;this._filterStackIndex--;const e=this._filterStack[this._filterStackIndex];if(e.skip)return;this._activeFilterData=e;const s=e.inputTexture,i=e.bounds;let n=A.EMPTY;if(t.renderTarget.finishRenderPass(),e.blendRequired){const a=this._filterStackIndex>0?this._filterStack[this._filterStackIndex-1].bounds:null,u=t.renderTarget.getRenderTarget(e.previousRenderSurface);n=this.getBackTexture(u,i,a);}e.backTexture=n;const o=e.filterEffect.filters;if(this._globalFilterBindGroup.setResource(s.source.style,2),this._globalFilterBindGroup.setResource(n.source,3),t.globalUniforms.pop(),o.length===1)o[0].apply(this,s,e.previousRenderSurface,!1),ut.returnTexture(s);else {let a=e.inputTexture,u=ut.getOptimalTexture(i.width,i.height,a.source._resolution,!1),l=0;for(l=0;l<o.length-1;++l){o[l].apply(this,a,u,!0);const h=a;a=u,u=h;}o[l].apply(this,a,e.previousRenderSurface,!1),ut.returnTexture(a),ut.returnTexture(u);}e.blendRequired&&ut.returnTexture(n);}getBackTexture(t,e,s){const i=t.colorTexture.source._resolution,n=ut.getOptimalTexture(e.width,e.height,i,!1);let o=e.minX,a=e.minY;s&&(o-=s.minX,a-=s.minY),o=Math.floor(o*i),a=Math.floor(a*i);const u=Math.ceil(e.width*i),l=Math.ceil(e.height*i);return this.renderer.renderTarget.copyToTexture(t,n,{x:o,y:a},{width:u,height:l},{x:0,y:0}),n}applyFilter(t,e,s,i){const n=this.renderer,o=this._filterStack[this._filterStackIndex],a=o.bounds,u=j.shared,l=o.previousRenderSurface===s;let h=this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution,c=this._filterStackIndex-1;for(;c>0&&this._filterStack[c].skip;)--c;c>0&&(h=this._filterStack[c].inputTexture.source._resolution);const d=this._filterGlobalUniforms,f=d.uniforms,p=f.uOutputFrame,g=f.uInputSize,m=f.uInputPixel,_=f.uInputClamp,x=f.uGlobalFrame,v=f.uOutputTexture;if(l){let w=this._filterStackIndex;for(;w>0;){w--;const R=this._filterStack[this._filterStackIndex-1];if(!R.skip){u.x=R.bounds.minX,u.y=R.bounds.minY;break}}p[0]=a.minX-u.x,p[1]=a.minY-u.y;}else p[0]=0,p[1]=0;p[2]=e.frame.width,p[3]=e.frame.height,g[0]=e.source.width,g[1]=e.source.height,g[2]=1/g[0],g[3]=1/g[1],m[0]=e.source.pixelWidth,m[1]=e.source.pixelHeight,m[2]=1/m[0],m[3]=1/m[1],_[0]=.5*m[2],_[1]=.5*m[3],_[2]=e.frame.width*g[2]-.5*m[2],_[3]=e.frame.height*g[3]-.5*m[3];const y=this.renderer.renderTarget.rootRenderTarget.colorTexture;x[0]=u.x*h,x[1]=u.y*h,x[2]=y.source.width*h,x[3]=y.source.height*h;const S=this.renderer.renderTarget.getRenderTarget(s);if(n.renderTarget.bind(s,!!i),s instanceof A?(v[0]=s.frame.width,v[1]=s.frame.height):(v[0]=S.width,v[1]=S.height),v[2]=S.isRoot?-1:1,d.update(),n.renderPipes.uniformBatch){const w=n.renderPipes.uniformBatch.getUboResource(d);this._globalFilterBindGroup.setResource(w,0);}else this._globalFilterBindGroup.setResource(d,0);this._globalFilterBindGroup.setResource(e.source,1),this._globalFilterBindGroup.setResource(e.source.style,2),t.groups[0]=this._globalFilterBindGroup,n.encoder.draw({geometry:jy,shader:t,state:t._state,topology:"triangle-list"}),n.type===xt.WEBGL&&n.renderTarget.finishRenderPass();}_getFilterData(){return {skip:!1,inputTexture:null,bounds:new lt,container:null,filterEffect:null,blendRequired:!1,previousRenderSurface:null}}calculateSpriteMatrix(t,e){const s=this._activeFilterData,i=t.set(s.inputTexture._source.width,0,0,s.inputTexture._source.height,s.bounds.minX,s.bounds.minY),n=e.worldTransform.copyTo(G.shared);return n.invert(),i.prepend(n),i.scale(1/e.texture.frame.width,1/e.texture.frame.height),i.translate(e.anchor.x,e.anchor.y),i}}Ho.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:"filter"},D.add(Ho),D.add($o);var Wy={__proto__:null};const Xo=[];D.handleByNamedList(b.Environment,Xo);async function bp(r){if(r)for(let t=0;t<Xo.length;t++){const e=Xo[t];if(e.value.test()){await e.value.load();return}}}let Rr;function zo(){if(typeof Rr=="boolean")return Rr;try{Rr=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0;}catch(r){Rr=!1;}return Rr}var dt=(r=>(r[r.NONE=0]="NONE",r[r.COLOR=16384]="COLOR",r[r.STENCIL=1024]="STENCIL",r[r.DEPTH=256]="DEPTH",r[r.COLOR_DEPTH=16640]="COLOR_DEPTH",r[r.COLOR_STENCIL=17408]="COLOR_STENCIL",r[r.DEPTH_STENCIL=1280]="DEPTH_STENCIL",r[r.ALL=17664]="ALL",r))(dt||{});class jo{constructor(t){this.items=[],this._name=t;}emit(t,e,s,i,n,o,a,u){const{name:l,items:h}=this;for(let c=0,d=h.length;c<d;c++)h[c][l](t,e,s,i,n,o,a,u);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null;}get empty(){return this.items.length===0}get name(){return this._name}}var Vy=Object.defineProperty,vp=Object.getOwnPropertySymbols,Yy=Object.prototype.hasOwnProperty,Ky=Object.prototype.propertyIsEnumerable,yp=(r,t,e)=>t in r?Vy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,zs=(r,t)=>{for(var e in t||(t={}))Yy.call(t,e)&&yp(r,e,t[e]);if(vp)for(var e of vp(t))Ky.call(t,e)&&yp(r,e,t[e]);return r};const qy=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Tp=class Gx{constructor(t){this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null);var e;this.type=t.type,this.name=t.name;const s=[...qy,...(e=t.runners)!=null?e:[]];this._addRunners(...s),this._addSystems(t.systems),this._addPipes(t.renderPipes,t.renderPipeAdaptors),this._unsafeEvalCheck();}async init(t={}){for(const e in this._systemsHash){const s=this._systemsHash[e].constructor.defaultOptions;t=zs(zs({},s),t);}t=zs(zs({},Gx.defaultOptions),t),this._roundPixels=t.roundPixels?1:0;for(let e=0;e<this.runners.init.items.length;e++)await this.runners.init.items[e].init(t);this._initOptions=t;}render(t,e){let s=t;if(s instanceof W&&(s={container:s},e&&(s.target=e.renderTexture)),s.target||(s.target=this.view.renderTarget),s.target===this.view.renderTarget&&(this._lastObjectRendered=s.container,s.clearColor=this.background.colorRgba),s.clearColor){const i=Array.isArray(s.clearColor)&&s.clearColor.length===4;s.clearColor=i?s.clearColor:V.shared.setValue(s.clearColor).toArray();}s.transform||(s.container.updateLocalTransform(),s.transform=s.container.localTransform),this.runners.prerender.emit(s),this.runners.renderStart.emit(s),this.runners.render.emit(s),this.runners.renderEnd.emit(s),this.runners.postrender.emit(s);}resize(t,e,s){this.view.resize(t,e,s);}clear(t={}){var e;const s=this;t.target||(t.target=s.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),(e=t.clear)!=null||(t.clear=dt.ALL);const{clear:i,clearColor:n,target:o}=t;V.shared.setValue(n!=null?n:this.background.colorRgba),s.renderTarget.clear(o,i,V.shared.toArray());}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t);}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new jo(e);});}_addSystems(t){let e;for(e in t){const s=t[e];this._addSystem(s.value,s.name);}}_addSystem(t,e){const s=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=s,this._systemsHash[e]=s;for(const i in this.runners)this.runners[i].add(s);return this}_addPipes(t,e){const s=e.reduce((i,n)=>(i[n.name]=n.value,i),{});t.forEach(i=>{const n=i.value,o=i.name,a=s[o];this.renderPipes[o]=new n(this,a?new a:null);});}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(e=>{e.destroy();}),this._systemsHash=null,this.renderPipes=null;}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return !!this._roundPixels}_unsafeEvalCheck(){if(!zo())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Tp.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Mr=Tp,Wo;function Or(r){return Wo!==void 0||(Wo=(()=>{var t;const e={stencil:!0,failIfMajorPerformanceCaveat:r!=null?r:Mr.defaultOptions.failIfMajorPerformanceCaveat};try{if(!z.get().getWebGLRenderingContext())return !1;let s=z.get().createCanvas().getContext("webgl",e);const i=!!((t=s==null?void 0:s.getContextAttributes())!=null&&t.stencil);if(s){const n=s.getExtension("WEBGL_lose_context");n&&n.loseContext();}return s=null,i}catch(s){return !1}})()),Wo}let Vo;async function Cr(r={}){return Vo!==void 0||(Vo=await(async()=>{if(!z.get().getNavigator().gpu)return !1;try{return await(await navigator.gpu.requestAdapter(r)).requestDevice(),!0}catch(t){return !1}})()),Vo}var Zy=Object.defineProperty,Sp=Object.getOwnPropertySymbols,Qy=Object.prototype.hasOwnProperty,Jy=Object.prototype.propertyIsEnumerable,Ep=(r,t,e)=>t in r?Zy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Gr=(r,t)=>{for(var e in t||(t={}))Qy.call(t,e)&&Ep(r,e,t[e]);if(Sp)for(var e of Sp(t))Jy.call(t,e)&&Ep(r,e,t[e]);return r};const Ap=["webgpu","webgl","canvas"];async function Pp(r){var t,e;let s=[];r.preference?(s.push(r.preference),Ap.forEach(a=>{a!==r.preference&&s.push(a);})):s=Ap.slice();let i;await bp((t=r.manageImports)!=null?t:!0);let n={};for(let a=0;a<s.length;a++){const u=s[a];if(u==="webgpu"&&await Cr()){const{WebGPURenderer:l}=await Promise.resolve().then(function(){return XE});i=l,n=Gr(Gr({},r),r.webgpu);break}else if(u==="webgl"&&Or((e=r.failIfMajorPerformanceCaveat)!=null?e:Mr.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Promise.resolve().then(function(){return EE});i=l,n=Gr(Gr({},r),r.webgl);break}else if(u==="canvas"){n=Gr({},r);break}}delete n.webgpu,delete n.webgl;const o=new i;return await o.init(n),o}var t1=Object.defineProperty,wp=Object.getOwnPropertySymbols,e1=Object.prototype.hasOwnProperty,r1=Object.prototype.propertyIsEnumerable,Rp=(r,t,e)=>t in r?t1(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,s1=(r,t)=>{for(var e in t||(t={}))e1.call(t,e)&&Rp(r,e,t[e]);if(wp)for(var e of wp(t))r1.call(t,e)&&Rp(r,e,t[e]);return r};const Mp=class ju{constructor(...t){this.stage=new W;}async init(t){t=s1({},t),this.renderer=await Pp(t),ju._plugins.forEach(e=>{e.init.call(this,t);});}render(){this.renderer.render({container:this.stage});}get canvas(){return this.renderer.canvas}get view(){return this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const s=ju._plugins.slice(0);s.reverse(),s.forEach(i=>{i.destroy.call(this);}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null;}};Mp._plugins=[];let Op=Mp;D.handleByList(b.Application,Op._plugins);class Cp{constructor(t,e=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e;}add(t){t.forEach(e=>{this._assetList.push(e);}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next();}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let s=0;s<e;s++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next();}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next());}}const Gp={extension:b.CacheParser,test:r=>Array.isArray(r)&&r.every(t=>t instanceof A),getCacheableAssets:(r,t)=>{const e={};return r.forEach(s=>{t.forEach((i,n)=>{e[s+(n===0?"":n+1)]=i;});}),e}};async function Yo(r){if("Image"in globalThis)return new Promise(t=>{const e=new Image;e.onload=()=>{t(!0);},e.onerror=()=>{t(!1);},e.src=r;});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(r)).blob();await createImageBitmap(t);}catch(t){return !1}return !0}return !1}const Ip={extension:{type:b.DetectionParser,priority:1},test:async()=>Yo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async r=>[...r,"avif"],remove:async r=>r.filter(t=>t!=="avif")},Bp=["png","jpg","jpeg"],Fp={extension:{type:b.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async r=>[...r,...Bp],remove:async r=>r.filter(t=>!Bp.includes(t))},i1="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function js(r){return i1?!1:document.createElement("video").canPlayType(r)!==""}const Dp={extension:{type:b.DetectionParser,priority:0},test:async()=>js("video/mp4"),add:async r=>[...r,"mp4","m4v"],remove:async r=>r.filter(t=>t!=="mp4"&&t!=="m4v")},Up={extension:{type:b.DetectionParser,priority:0},test:async()=>js("video/ogg"),add:async r=>[...r,"ogv"],remove:async r=>r.filter(t=>t!=="ogv")},kp={extension:{type:b.DetectionParser,priority:0},test:async()=>js("video/webm"),add:async r=>[...r,"webm"],remove:async r=>r.filter(t=>t!=="webm")},Lp={extension:{type:b.DetectionParser,priority:0},test:async()=>Yo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async r=>[...r,"webp"],remove:async r=>r.filter(t=>t!=="webp")};var n1=Object.defineProperty,o1=Object.defineProperties,a1=Object.getOwnPropertyDescriptors,$p=Object.getOwnPropertySymbols,u1=Object.prototype.hasOwnProperty,l1=Object.prototype.propertyIsEnumerable,Np=(r,t,e)=>t in r?n1(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,h1=(r,t)=>{for(var e in t||(t={}))u1.call(t,e)&&Np(r,e,t[e]);if($p)for(var e of $p(t))l1.call(t,e)&&Np(r,e,t[e]);return r},c1=(r,t)=>o1(r,a1(t));class Hp{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,e,s)=>(this._parsersValidated=!1,t[e]=s,!0)}),this.promiseCache={};}reset(){this._parsersValidated=!1,this.promiseCache={};}_getLoadPromiseAndParser(t,e){const s={promise:null,parser:null};return s.promise=(async()=>{var i,n;let o=null,a=null;if(e.loadParser&&(a=this._parserHash[e.loadParser]),!a){for(let u=0;u<this.parsers.length;u++){const l=this.parsers[u];if(l.load&&(i=l.test)!=null&&i.call(l,t,e,this)){a=l;break}}if(!a)return null}o=await a.load(t,e,this),s.parser=a;for(let u=0;u<this.parsers.length;u++){const l=this.parsers[u];l.parse&&l.parse&&await((n=l.testParse)==null?void 0:n.call(l,o,e,this))&&(o=await l.parse(o,e,this)||o,s.parser=l);}return o})(),s}async load(t,e){this._parsersValidated||this._validateParsers();let s=0;const i={},n=lr(t),o=Pt(t,l=>({alias:[l],src:l})),a=o.length,u=o.map(async l=>{const h=ct.toAbsolute(l.src);if(!i[l.src])try{this.promiseCache[h]||(this.promiseCache[h]=this._getLoadPromiseAndParser(h,l)),i[l.src]=await this.promiseCache[h].promise,e&&e(++s/a);}catch(c){throw delete this.promiseCache[h],delete i[l.src],new Error(`[Loader.load] Failed to load ${h}.
${c}`)}});return await Promise.all(u),n?i[o[0].src]:i}async unload(t){const e=Pt(t,s=>({alias:[s],src:s})).map(async s=>{var i,n;const o=ct.toAbsolute(s.src),a=this.promiseCache[o];if(a){const u=await a.promise;delete this.promiseCache[o],(n=(i=a.parser)==null?void 0:i.unload)==null||n.call(i,u,s,this);}});await Promise.all(e);}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,e)=>(e.name&&t[e.name],c1(h1({},t),{[e.name]:e})),{});}}function Te(r,t){if(Array.isArray(t)){for(const e of t)if(r.startsWith(`data:${e}`))return !0;return !1}return r.startsWith(`data:${t}`)}function Mt(r,t){const e=r.split("?")[0],s=ct.extname(e).toLowerCase();return Array.isArray(t)?t.includes(s):s===t}const d1=".json",p1="application/json",Xp={extension:{type:b.LoadParser,priority:gt.Low},name:"loadJson",test(r){return Te(r,p1)||Mt(r,d1)},async load(r){return await(await z.get().fetch(r)).json()}},f1=".txt",m1="text/plain",zp={name:"loadTxt",extension:{type:b.LoadParser,priority:gt.Low},test(r){return Te(r,m1)||Mt(r,f1)},async load(r){return await(await z.get().fetch(r)).text()}};var g1=Object.defineProperty,_1=Object.defineProperties,x1=Object.getOwnPropertyDescriptors,jp=Object.getOwnPropertySymbols,b1=Object.prototype.hasOwnProperty,v1=Object.prototype.propertyIsEnumerable,Wp=(r,t,e)=>t in r?g1(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,y1=(r,t)=>{for(var e in t||(t={}))b1.call(t,e)&&Wp(r,e,t[e]);if(jp)for(var e of jp(t))v1.call(t,e)&&Wp(r,e,t[e]);return r},T1=(r,t)=>_1(r,x1(t));const S1=["normal","bold","100","200","300","400","500","600","700","800","900"],E1=[".ttf",".otf",".woff",".woff2"],A1=["font/ttf","font/otf","font/woff","font/woff2"],P1=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Vp(r){const t=ct.extname(r),e=ct.basename(r,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1));let s=e.length>0;for(const n of e)if(!n.match(P1)){s=!1;break}let i=e.join(" ");return s||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const w1=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function R1(r){return w1.test(r)?r:encodeURI(r)}const Yp={extension:{type:b.LoadParser,priority:gt.Low},name:"loadWebFont",test(r){return Te(r,A1)||Mt(r,E1)},async load(r,t){var e,s,i,n,o,a;const u=z.get().getFontFaceSet();if(u){const l=[],h=(s=(e=t.data)==null?void 0:e.family)!=null?s:Vp(r),c=(o=(n=(i=t.data)==null?void 0:i.weights)==null?void 0:n.filter(f=>S1.includes(f)))!=null?o:["normal"],d=(a=t.data)!=null?a:{};for(let f=0;f<c.length;f++){const p=c[f],g=new FontFace(h,`url(${R1(r)})`,T1(y1({},d),{weight:p}));await g.load(),u.add(g),l.push(g);}return Y.set(h,{url:r,fontFaces:l}),l.length===1?l[0]:l}return null},unload(r){(Array.isArray(r)?r:[r]).forEach(t=>{Y.remove(t.family),z.get().getFontFaceSet().delete(t);});}};function Ws(r,t=1){var e;const s=(e=qt.RETINA_PREFIX)==null?void 0:e.exec(r);return s?parseFloat(s[1]):t}function te(r,t,e){r.label=e;const s=new A({source:r,label:e}),i=()=>{delete t.promiseCache[e],Y.has(e)&&Y.remove(e);};return s.once("destroy",()=>{e in t.promiseCache&&i();}),s.source.once("destroy",()=>{r.destroyed||i();}),s}var M1=Object.defineProperty,Vs=Object.getOwnPropertySymbols,Kp=Object.prototype.hasOwnProperty,qp=Object.prototype.propertyIsEnumerable,Zp=(r,t,e)=>t in r?M1(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,O1=(r,t)=>{for(var e in t||(t={}))Kp.call(t,e)&&Zp(r,e,t[e]);if(Vs)for(var e of Vs(t))qp.call(t,e)&&Zp(r,e,t[e]);return r},C1=(r,t)=>{var e={};for(var s in r)Kp.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&Vs)for(var s of Vs(r))t.indexOf(s)<0&&qp.call(r,s)&&(e[s]=r[s]);return e};const G1=".svg",I1="image/svg+xml",Qp={extension:{type:b.LoadParser,priority:gt.Low},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(r){return Te(r,I1)||Mt(r,G1)},async load(r,t,e){var s;return ((s=t.data.parseAsGraphicsContext)!=null?s:this.config.parseAsGraphicsContext)?F1(r):B1(r,t,e,this.config.crossOrigin)},unload(r){r.destroy(!0);}};async function B1(r,t,e,s){var i,n,o,a,u;const l=await(await z.get().fetch(r)).blob(),h=URL.createObjectURL(l),c=new Image;c.src=h,c.crossOrigin=s,await c.decode(),URL.revokeObjectURL(h);const d=document.createElement("canvas"),f=d.getContext("2d"),p=((i=t.data)==null?void 0:i.resolution)||Ws(r),g=(o=(n=t.data)==null?void 0:n.width)!=null?o:c.width,m=(u=(a=t.data)==null?void 0:a.height)!=null?u:c.height;d.width=g*p,d.height=m*p,f.drawImage(c,0,0,g*p,m*p);const _=t.data,{parseAsGraphicsContext:x}=_,v=C1(_,["parseAsGraphicsContext"]),y=new me(O1({resource:d,alphaMode:"premultiply-alpha-on-upload",resolution:p},v));return te(y,e,r)}async function F1(r){const t=await(await z.get().fetch(r)).text(),e=new Bt;return e.svg(t),e}const D1=`(function(){"use strict";const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";async function a(){try{if(typeof createImageBitmap!="function")return!1;const A=await(await fetch(e)).blob(),t=await createImageBitmap(A);return t.width===1&&t.height===1}catch(A){return!1}}a().then(A=>{self.postMessage(A)})})();
`;let Le=null,Ko=class{constructor(){Le||(Le=URL.createObjectURL(new Blob([D1],{type:"application/javascript"}))),this.worker=new Worker(Le);}};Ko.revokeObjectURL=function(){Le&&(URL.revokeObjectURL(Le),Le=null);};const U1='(function(){"use strict";async function e(t){const a=await fetch(t);if(!a.ok)throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${t}: ${a.status} ${a.statusText}`);const s=await a.blob();return await createImageBitmap(s)}self.onmessage=async t=>{try{const a=await e(t.data.data[0]);self.postMessage({data:a,uuid:t.data.uuid,id:t.data.id},[a])}catch(a){self.postMessage({error:a,uuid:t.data.uuid,id:t.data.id})}}})();\n';let $e=null,Jp=class{constructor(){$e||($e=URL.createObjectURL(new Blob([U1],{type:"application/javascript"}))),this.worker=new Worker($e);}};Jp.revokeObjectURL=function(){$e&&(URL.revokeObjectURL($e),$e=null);};let tf=0,qo,k1=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={};}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:e}=new Ko;e.addEventListener("message",s=>{e.terminate(),Ko.revokeObjectURL(),t(s.data);});}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0);}_getWorker(){qo===void 0&&(qo=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return !t&&this._createdWorkers<qo&&(this._createdWorkers++,t=new Jp().worker,t.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next();})),t}_returnWorker(t){this._workerPool.push(t);}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null;}async _run(t,e){await this._initWorkers();const s=new Promise((i,n)=>{this._queue.push({id:t,arguments:e,resolve:i,reject:n});});return this._next(),s}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const e=this._queue.pop(),s=e.id;this._resolveHash[tf]={resolve:e.resolve,reject:e.reject},t.postMessage({data:e.arguments,uuid:tf++,id:s});}};const Zo=new k1;var L1=Object.defineProperty,ef=Object.getOwnPropertySymbols,$1=Object.prototype.hasOwnProperty,N1=Object.prototype.propertyIsEnumerable,rf=(r,t,e)=>t in r?L1(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,H1=(r,t)=>{for(var e in t||(t={}))$1.call(t,e)&&rf(r,e,t[e]);if(ef)for(var e of ef(t))N1.call(t,e)&&rf(r,e,t[e]);return r};const X1=[".jpeg",".jpg",".png",".webp",".avif"],z1=["image/jpeg","image/png","image/webp","image/avif"];async function sf(r){const t=await z.get().fetch(r);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${r}: ${t.status} ${t.statusText}`);const e=await t.blob();return await createImageBitmap(e)}const Qo={name:"loadTextures",extension:{type:b.LoadParser,priority:gt.High},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(r){return Te(r,z1)||Mt(r,X1)},async load(r,t,e){var s;let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Zo.isImageBitmapSupported()?i=await Zo.loadImageBitmap(r):i=await sf(r):i=await new Promise(o=>{i=new Image,i.crossOrigin=this.config.crossOrigin,i.src=r,i.complete?o(i):i.onload=()=>{o(i);};});const n=new me(H1({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:((s=t.data)==null?void 0:s.resolution)||Ws(r)},t.data));return te(n,e,r)},unload(r){r.destroy(!0);}};var j1=Object.defineProperty,W1=Object.defineProperties,V1=Object.getOwnPropertyDescriptors,nf=Object.getOwnPropertySymbols,Y1=Object.prototype.hasOwnProperty,K1=Object.prototype.propertyIsEnumerable,of=(r,t,e)=>t in r?j1(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Jo=(r,t)=>{for(var e in t||(t={}))Y1.call(t,e)&&of(r,e,t[e]);if(nf)for(var e of nf(t))K1.call(t,e)&&of(r,e,t[e]);return r},af=(r,t)=>W1(r,V1(t));const uf=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],q1=uf.map(r=>`video/${r.substring(1)}`);function lf(r,t,e){e===void 0&&!t.startsWith("data:")?r.crossOrigin=cf(t):e!==!1&&(r.crossOrigin=typeof e=="string"?e:"anonymous");}function hf(r){return new Promise((t,e)=>{r.addEventListener("canplaythrough",s),r.addEventListener("error",i),r.load();function s(){n(),t();}function i(o){n(),e(o);}function n(){r.removeEventListener("canplaythrough",s),r.removeEventListener("error",i);}})}function cf(r,t=globalThis.location){if(r.startsWith("data:"))return "";t=t||globalThis.location;const e=new URL(r,document.baseURI);return e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""}const df={name:"loadVideo",extension:{type:b.LoadParser},config:null,test(r){const t=Te(r,q1),e=Mt(r,uf);return t||e},async load(r,t,e){var s,i;const n=Jo(af(Jo({},cr.defaultOptions),{resolution:((s=t.data)==null?void 0:s.resolution)||Ws(r),alphaMode:((i=t.data)==null?void 0:i.alphaMode)||await gn()}),t.data),o=document.createElement("video"),a={preload:n.autoLoad!==!1?"auto":void 0,"webkit-playsinline":n.playsinline!==!1?"":void 0,playsinline:n.playsinline!==!1?"":void 0,muted:n.muted===!0?"":void 0,loop:n.loop===!0?"":void 0,autoplay:n.autoPlay!==!1?"":void 0};Object.keys(a).forEach(h=>{const c=a[h];c!==void 0&&o.setAttribute(h,c);}),n.muted===!0&&(o.muted=!0),lf(o,r,n.crossorigin);const u=document.createElement("source");let l;if(r.startsWith("data:"))l=r.slice(5,r.indexOf(";"));else if(!r.startsWith("blob:")){const h=r.split("?")[0].slice(r.lastIndexOf(".")+1).toLowerCase();l=cr.MIME_TYPES[h]||`video/${h}`;}return u.src=r,l&&(u.type=l),new Promise(h=>{const c=async()=>{const d=new cr(af(Jo({},n),{resource:o}));o.removeEventListener("canplay",c),t.data.preload&&await hf(o),h(te(d,e,r));};o.addEventListener("canplay",c),o.appendChild(u);})},unload(r){r.destroy(!0);}},ta={extension:b.ResolveParser,test:Qo.test,parse:r=>{var t,e;return {resolution:parseFloat((e=(t=qt.RETINA_PREFIX.exec(r))==null?void 0:t[1])!=null?e:"1"),format:r.split(".").pop(),src:r}}},pf={extension:b.ResolveParser,test:r=>qt.RETINA_PREFIX.test(r)&&r.endsWith(".json"),parse:ta.parse};class ff{constructor(){this._detections=[],this._initialized=!1,this.resolver=new qt,this.loader=new Hp,this.cache=Y,this._backgroundLoader=new Cp(this.loader),this._backgroundLoader.active=!0,this.reset();}async init(t={}){var e,s,i;if(this._initialized)return;if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let u=t.manifest;typeof u=="string"&&(u=await this.load(u)),this.resolver.addManifest(u);}const n=(s=(e=t.texturePreference)==null?void 0:e.resolution)!=null?s:1,o=typeof n=="number"?[n]:n,a=await this._detectFormats({preferredFormats:(i=t.texturePreference)==null?void 0:i.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:a,resolution:o}}),t.preferences&&this.setPreferences(t.preferences);}add(t){this.resolver.add(t);}async load(t,e){this._initialized||await this.init();const s=lr(t),i=Pt(t).map(a=>{if(typeof a!="string"){const u=this.resolver.getAlias(a);return u.some(l=>!this.resolver.hasKey(l))&&this.add(a),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),n=this.resolver.resolve(i),o=await this._mapLoadToResolve(n,e);return s?o[i[0]]:o}addBundle(t,e){this.resolver.addBundle(t,e);}async loadBundle(t,e){this._initialized||await this.init();let s=!1;typeof t=="string"&&(s=!0,t=[t]);const i=this.resolver.resolveBundle(t),n={},o=Object.keys(i);let a=0,u=0;const l=()=>{e==null||e(++a/u);},h=o.map(c=>{const d=i[c];return u+=Object.keys(d).length,this._mapLoadToResolve(d,l).then(f=>{n[c]=f;})});return await Promise.all(h),s?n[t[0]]:n}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(e));}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolveBundle(t);Object.values(e).forEach(s=>{this._backgroundLoader.add(Object.values(s));});}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1;}get(t){if(typeof t=="string")return Y.get(t);const e={};for(let s=0;s<t.length;s++)e[s]=Y.get(t[s]);return e}async _mapLoadToResolve(t,e){const s=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const i=await this.loader.load(s,e);this._backgroundLoader.active=!0;const n={};return s.forEach(o=>{const a=i[o.src],u=[o.src];o.alias&&u.push(...o.alias),u.forEach(l=>{n[l]=a;}),Y.set(u,a);}),n}async unload(t){this._initialized||await this.init();const e=Pt(t).map(i=>typeof i!="string"?i.src:i),s=this.resolver.resolve(e);await this._unloadFromResolved(s);}async unloadBundle(t){this._initialized||await this.init(),t=Pt(t);const e=this.resolver.resolveBundle(t),s=Object.keys(e).map(i=>this._unloadFromResolved(e[i]));await Promise.all(s);}async _unloadFromResolved(t){const e=Object.values(t);e.forEach(s=>{Y.remove(s.src);}),await this.loader.unload(e);}async _detectFormats(t){let e=[];t.preferredFormats&&(e=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const s of t.detections)t.skipDetections||await s.test()?e=await s.add(e):t.skipDetections||(e=await s.remove(e));return e=e.filter((s,i)=>e.indexOf(s)===i),e}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(s=>s in t).forEach(s=>{e.config[s]=t[s];});});}}const Ir=new ff;D.handleByList(b.LoadParser,Ir.loader.parsers).handleByList(b.ResolveParser,Ir.resolver.parsers).handleByList(b.CacheParser,Ir.cache.parsers).handleByList(b.DetectionParser,Ir.detections),D.add(Gp,Fp,Ip,Lp,Dp,Up,kp,Xp,zp,Yp,Qp,Qo,df,ta,pf);const mf={loader:b.LoadParser,resolver:b.ResolveParser,cache:b.CacheParser,detection:b.DetectionParser};D.handle(b.Asset,r=>{const t=r.ref;Object.entries(mf).filter(([e])=>!!t[e]).forEach(([e,s])=>{var i;return D.add(Object.assign(t[e],{extension:(i=t[e].extension)!=null?i:s}))});},r=>{const t=r.ref;Object.keys(mf).filter(e=>!!t[e]).forEach(e=>D.remove(t[e]));});const Z1={extension:{type:b.DetectionParser,priority:3},test:async()=>!!(await Cr()||Or()),add:async r=>[...r,"basis"],remove:async r=>r.filter(t=>t!=="basis")};class Br extends et{constructor(t){super(t),this.uploadMethodId="compressed",this.resource=t.resource,this.mipLevelCount=this.resource.length;}}let Ys;function ea(){if(Ys)return Ys;const r=document.createElement("canvas").getContext("webgl");return r?(Ys=[...r.getExtension("EXT_texture_compression_bptc")?["bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb"]:[],...r.getExtension("WEBGL_compressed_texture_s3tc")?["bc1-rgba-unorm","bc2-rgba-unorm","bc3-rgba-unorm"]:[],...r.getExtension("WEBGL_compressed_texture_s3tc_srgb")?["bc1-rgba-unorm-srgb","bc2-rgba-unorm-srgb","bc3-rgba-unorm-srgb"]:[],...r.getExtension("EXT_texture_compression_rgtc")?["bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm"]:[],...r.getExtension("WEBGL_compressed_texture_etc")?["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","eac-r11unorm","eac-rg11unorm"]:[],...r.getExtension("WEBGL_compressed_texture_astc")?["astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"]:[]],Ys):[]}let Ks;async function ra(){if(Ks)return Ks;const r=await navigator.gpu.requestAdapter();return Ks=[...r.features.has("texture-compression-bc")?["bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb","bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm","bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb"]:[],...r.features.has("texture-compression-etc2")?["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm"]:[],...r.features.has("texture-compression-astc")?["astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"]:[]],Ks}let sa;async function ia(){return sa!==void 0||(sa=await(async()=>{const r=await Cr(),t=Or();if(r&&t){const e=await ra(),s=ea();return e.filter(i=>s.includes(i))}else {if(r)return await ra();if(t)return ea()}return []})()),sa}const gf=["r8unorm","r8snorm","r8uint","r8sint","r16uint","r16sint","r16float","rg8unorm","rg8snorm","rg8uint","rg8sint","r32uint","r32sint","r32float","rg16uint","rg16sint","rg16float","rgba8unorm","rgba8unorm-srgb","rgba8snorm","rgba8uint","rgba8sint","bgra8unorm","bgra8unorm-srgb","rgb9e5ufloat","rgb10a2unorm","rg11b10ufloat","rg32uint","rg32sint","rg32float","rgba16uint","rgba16sint","rgba16float","rgba32uint","rgba32sint","rgba32float","stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8"];let qs;async function Fr(){if(qs!==void 0)return qs;const r=await ia();return qs=[...gf,...r],qs}const Q1='(function(){"use strict";function g(r,a){const t=r.getNumImages(),s=r.getNumLevels(0);if(!r.startTranscoding())throw new Error("startTranscoding failed");const m=[];for(let e=0;e<s;++e)for(let o=0;o<t;++o){const B=r.getImageTranscodedSizeInBytes(o,e,a),f=new Uint8Array(B);if(!r.transcodeImage(f,o,e,a,1,0))throw new Error("transcodeImage failed");m.push(f)}return m}const w={"bc3-rgba-unorm":3,"bc7-rgba-unorm":6,"etc2-rgba8unorm":1,"astc-4x4-unorm":10,rgba8unorm:13,rgba4unorm:16};function d(r){const a=w[r];if(a)return a;throw new Error(`Unsupported transcoderFormat: ${r}`)}const n={jsUrl:"basis/basis_transcoder.js",wasmUrl:"basis/basis_transcoder.wasm"};let u,i,c;async function l(){if(!c){const r=new URL(n.jsUrl,location.origin).href,a=new URL(n.wasmUrl,location.origin).href;importScripts(r),c=new Promise(t=>{BASIS({locateFile:s=>a}).then(s=>{s.initializeBasis(),t(s.BasisFile)})})}return c}async function b(r,a){const t=await fetch(r);if(t.ok){const s=await t.arrayBuffer();return new a(new Uint8Array(s))}throw new Error(`Failed to load Basis texture: ${r}`)}const h=["bc7-rgba-unorm","astc-4x4-unorm","etc2-rgba8unorm","bc3-rgba-unorm","rgba8unorm"];async function p(r){const a=await l(),t=await b(r,a),s=g(t,u);return{width:t.getImageWidth(0,0),height:t.getImageHeight(0,0),format:i,resource:s,alphaMode:"no-premultiply-alpha"}}async function y(r,a,t){r&&(n.jsUrl=r),a&&(n.wasmUrl=a),i=h.filter(s=>t.includes(s))[0],u=d(i),await l()}const U={init:async r=>{const{jsUrl:a,wasmUrl:t,supportedTextures:s}=r;await y(a,t,s)},load:async r=>{var a;try{const t=await p(r.url);return{type:"load",url:r.url,success:!0,textureOptions:t,transferables:(a=t.resource)==null?void 0:a.map(s=>s.buffer)}}catch(t){throw t}}};self.onmessage=async r=>{const a=r.data,t=await U[a.type](a);t&&self.postMessage(t,t.transferables)}})();\n';let Ne=null,_f=class{constructor(){Ne||(Ne=URL.createObjectURL(new Blob([Q1],{type:"application/javascript"}))),this.worker=new Worker(Ne);}};_f.revokeObjectURL=function(){Ne&&(URL.revokeObjectURL(Ne),Ne=null);};const Zs={jsUrl:"https://files.pixijs.download/transcoders/basis/basis_transcoder.js",wasmUrl:"https://files.pixijs.download/transcoders/basis/basis_transcoder.wasm"};function J1(r){Object.assign(Zs,r);}let Dr;const xf={};function tT(r){return Dr||(Dr=new _f().worker,Dr.onmessage=t=>{const{success:e,url:s,textureOptions:i}=t.data;e||console.warn("Failed to load Basis texture",s),xf[s](i);},Dr.postMessage({type:"init",jsUrl:Zs.jsUrl,wasmUrl:Zs.wasmUrl,supportedTextures:r})),Dr}function bf(r,t){const e=tT(t);return new Promise(s=>{xf[r]=s,e.postMessage({type:"load",url:r});})}const eT={extension:{type:b.LoadParser,priority:gt.High},name:"loadBasis",test(r){return Mt(r,[".basis"])},async load(r,t,e){const s=await Fr(),i=await bf(r,s),n=new Br(i);return te(n,e,r)},unload(r){Array.isArray(r)?r.forEach(t=>t.destroy(!0)):r.destroy(!0);}};function rT(r,t){const e=r.getNumImages(),s=r.getNumLevels(0);if(!r.startTranscoding())throw new Error("startTranscoding failed");const i=[];for(let n=0;n<s;++n)for(let o=0;o<e;++o){const a=r.getImageTranscodedSizeInBytes(o,n,t),u=new Uint8Array(a);if(!r.transcodeImage(u,o,n,t,1,0))throw new Error("transcodeImage failed");i.push(u);}return i}const sT={"bc3-rgba-unorm":3,"bc7-rgba-unorm":6,"etc2-rgba8unorm":1,"astc-4x4-unorm":10,rgba8unorm:13,rgba4unorm:16};function iT(r){const t=sT[r];if(t)return t;throw new Error(`Unsupported transcoderFormat: ${r}`)}const nT={MAGIC:0,SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19,PF_FLAGS:20,FOURCC:21,RGB_BITCOUNT:22,R_BIT_MASK:23,G_BIT_MASK:24,B_BIT_MASK:25,A_BIT_MASK:26},oT={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4};var vf=(r=>(r[r.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",r[r.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",r[r.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",r[r.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",r[r.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",r[r.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",r[r.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",r[r.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",r[r.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",r[r.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",r[r.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",r[r.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",r[r.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",r[r.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",r[r.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",r[r.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",r[r.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",r[r.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",r[r.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",r[r.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",r[r.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",r[r.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",r[r.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",r[r.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",r[r.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",r[r.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",r[r.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",r[r.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",r[r.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",r[r.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",r[r.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",r[r.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",r[r.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",r[r.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",r[r.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",r[r.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",r[r.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",r[r.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",r[r.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",r[r.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",r[r.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",r[r.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",r[r.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",r[r.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",r[r.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",r[r.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",r[r.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",r[r.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",r[r.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",r[r.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",r[r.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",r[r.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",r[r.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",r[r.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",r[r.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",r[r.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",r[r.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",r[r.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",r[r.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",r[r.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",r[r.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",r[r.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",r[r.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",r[r.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",r[r.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",r[r.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",r[r.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",r[r.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",r[r.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",r[r.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",r[r.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",r[r.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",r[r.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",r[r.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",r[r.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",r[r.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",r[r.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",r[r.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",r[r.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",r[r.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",r[r.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",r[r.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",r[r.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",r[r.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",r[r.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",r[r.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",r[r.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",r[r.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",r[r.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",r[r.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",r[r.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",r[r.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",r[r.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",r[r.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",r[r.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",r[r.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",r[r.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",r[r.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",r[r.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",r[r.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",r[r.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",r[r.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",r[r.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",r[r.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",r[r.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",r[r.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",r[r.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",r[r.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",r[r.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",r[r.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",r[r.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",r[r.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT",r))(vf||{}),yf=(r=>(r[r.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",r[r.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",r[r.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D",r))(yf||{});function at(r){return r.charCodeAt(0)+(r.charCodeAt(1)<<8)+(r.charCodeAt(2)<<16)+(r.charCodeAt(3)<<24)}var bt=(r=>(r[r.UNKNOWN=0]="UNKNOWN",r[r.R8G8B8=20]="R8G8B8",r[r.A8R8G8B8=21]="A8R8G8B8",r[r.X8R8G8B8=22]="X8R8G8B8",r[r.R5G6B5=23]="R5G6B5",r[r.X1R5G5B5=24]="X1R5G5B5",r[r.A1R5G5B5=25]="A1R5G5B5",r[r.A4R4G4B4=26]="A4R4G4B4",r[r.R3G3B2=27]="R3G3B2",r[r.A8=28]="A8",r[r.A8R3G3B2=29]="A8R3G3B2",r[r.X4R4G4B4=30]="X4R4G4B4",r[r.A2B10G10R10=31]="A2B10G10R10",r[r.A8B8G8R8=32]="A8B8G8R8",r[r.X8B8G8R8=33]="X8B8G8R8",r[r.G16R16=34]="G16R16",r[r.A2R10G10B10=35]="A2R10G10B10",r[r.A16B16G16R16=36]="A16B16G16R16",r[r.A8P8=40]="A8P8",r[r.P8=41]="P8",r[r.L8=50]="L8",r[r.A8L8=51]="A8L8",r[r.A4L4=52]="A4L4",r[r.V8U8=60]="V8U8",r[r.L6V5U5=61]="L6V5U5",r[r.X8L8V8U8=62]="X8L8V8U8",r[r.Q8W8V8U8=63]="Q8W8V8U8",r[r.V16U16=64]="V16U16",r[r.A2W10V10U10=67]="A2W10V10U10",r[r.Q16W16V16U16=110]="Q16W16V16U16",r[r.R16F=111]="R16F",r[r.G16R16F=112]="G16R16F",r[r.A16B16G16R16F=113]="A16B16G16R16F",r[r.R32F=114]="R32F",r[r.G32R32F=115]="G32R32F",r[r.A32B32G32R32F=116]="A32B32G32R32F",r[r.UYVY=at("UYVY")]="UYVY",r[r.R8G8_B8G8=at("RGBG")]="R8G8_B8G8",r[r.YUY2=at("YUY2")]="YUY2",r[r.D3DFMT_G8R8_G8B8=at("GRGB")]="D3DFMT_G8R8_G8B8",r[r.DXT1=at("DXT1")]="DXT1",r[r.DXT2=at("DXT2")]="DXT2",r[r.DXT3=at("DXT3")]="DXT3",r[r.DXT4=at("DXT4")]="DXT4",r[r.DXT5=at("DXT5")]="DXT5",r[r.ATI1=at("ATI1")]="ATI1",r[r.AT1N=at("AT1N")]="AT1N",r[r.ATI2=at("ATI2")]="ATI2",r[r.AT2N=at("AT2N")]="AT2N",r[r.BC4U=at("BC4U")]="BC4U",r[r.BC4S=at("BC4S")]="BC4S",r[r.BC5U=at("BC5U")]="BC5U",r[r.BC5S=at("BC5S")]="BC5S",r[r.DX10=at("DX10")]="DX10",r))(bt||{});const na={[bt.DXT1]:"bc1-rgba-unorm",[bt.DXT2]:"bc2-rgba-unorm",[bt.DXT3]:"bc2-rgba-unorm",[bt.DXT4]:"bc3-rgba-unorm",[bt.DXT5]:"bc3-rgba-unorm",[bt.ATI1]:"bc4-r-unorm",[bt.BC4U]:"bc4-r-unorm",[bt.BC4S]:"bc4-r-snorm",[bt.ATI2]:"bc5-rg-unorm",[bt.BC5U]:"bc5-rg-unorm",[bt.BC5S]:"bc5-rg-snorm",36:"rgba16uint",110:"rgba16sint",111:"r16float",112:"rg16float",113:"rgba16float",114:"r32float",115:"rg32float",116:"rgba32float"},pt={70:"bc1-rgba-unorm",71:"bc1-rgba-unorm",72:"bc1-rgba-unorm-srgb",73:"bc2-rgba-unorm",74:"bc2-rgba-unorm",75:"bc2-rgba-unorm-srgb",76:"bc3-rgba-unorm",77:"bc3-rgba-unorm",78:"bc3-rgba-unorm-srgb",79:"bc4-r-unorm",80:"bc4-r-unorm",81:"bc4-r-snorm",82:"bc5-rg-unorm",83:"bc5-rg-unorm",84:"bc5-rg-snorm",94:"bc6h-rgb-ufloat",95:"bc6h-rgb-ufloat",96:"bc6h-rgb-float",97:"bc7-rgba-unorm",98:"bc7-rgba-unorm",99:"bc7-rgba-unorm-srgb",28:"rgba8unorm",29:"rgba8unorm-srgb",87:"bgra8unorm",91:"bgra8unorm-srgb",41:"r32float",49:"rg8unorm",56:"r16uint",61:"r8unorm",24:"rgb10a2unorm",11:"rgba16uint",13:"rgba16sint",10:"rgba16float",54:"r16float",34:"rg16float",16:"rg32float",2:"rgba32float"},I={MAGIC_VALUE:542327876,MAGIC_SIZE:4,HEADER_SIZE:124,HEADER_DX10_SIZE:20,PIXEL_FORMAT_FLAGS:{ALPHAPIXELS:1,ALPHA:2,FOURCC:4,RGB:64,RGBA:65,YUV:512,LUMINANCE:131072,LUMINANCEA:131073},RESOURCE_MISC_TEXTURECUBE:4,HEADER_FIELDS:nT,HEADER_DX10_FIELDS:oT,DXGI_FORMAT:vf,D3D10_RESOURCE_DIMENSION:yf,D3DFMT:bt},Tf={"bc1-rgba-unorm":8,"bc1-rgba-unorm-srgb":8,"bc2-rgba-unorm":16,"bc2-rgba-unorm-srgb":16,"bc3-rgba-unorm":16,"bc3-rgba-unorm-srgb":16,"bc4-r-unorm":8,"bc4-r-snorm":8,"bc5-rg-unorm":16,"bc5-rg-snorm":16,"bc6h-rgb-ufloat":16,"bc6h-rgb-float":16,"bc7-rgba-unorm":16,"bc7-rgba-unorm-srgb":16};function Sf(r,t){const{format:e,fourCC:s,width:i,height:n,dataOffset:o,mipmapCount:a}=uT(r);if(!t.includes(e))throw new Error(`Unsupported texture format: ${s} ${e}, supported: ${t}`);if(a<=1)return {format:e,width:i,height:n,resource:[new Uint8Array(r,o)],alphaMode:"no-premultiply-alpha"};const u=aT(e,i,n,o,a,r);return {format:e,width:i,height:n,resource:u,alphaMode:"no-premultiply-alpha"}}function aT(r,t,e,s,i,n){const o=[],a=Tf[r];let u=t,l=e,h=s;for(let c=0;c<i;++c){const d=a?Math.max(4,u)/4*Math.max(4,l)/4*a:u*l*4,f=new Uint8Array(n,h,d);o.push(f),h+=d,u=Math.max(u>>1,1),l=Math.max(l>>1,1);}return o}function uT(r){const t=new Uint32Array(r,0,I.HEADER_SIZE/Uint32Array.BYTES_PER_ELEMENT);if(t[I.HEADER_FIELDS.MAGIC]!==I.MAGIC_VALUE)throw new Error("Invalid magic number in DDS header");const e=t[I.HEADER_FIELDS.HEIGHT],s=t[I.HEADER_FIELDS.WIDTH],i=Math.max(1,t[I.HEADER_FIELDS.MIPMAP_COUNT]),n=t[I.HEADER_FIELDS.PF_FLAGS],o=t[I.HEADER_FIELDS.FOURCC],a=lT(t,n,o,r),u=I.MAGIC_SIZE+I.HEADER_SIZE+(o===I.D3DFMT.DX10?I.HEADER_DX10_SIZE:0);return {format:a,fourCC:o,width:s,height:e,dataOffset:u,mipmapCount:i}}function lT(r,t,e,s){if(t&I.PIXEL_FORMAT_FLAGS.FOURCC){if(e===I.D3DFMT.DX10){const i=new Uint32Array(s,I.MAGIC_SIZE+I.HEADER_SIZE,I.HEADER_DX10_SIZE/Uint32Array.BYTES_PER_ELEMENT);if(i[I.HEADER_DX10_FIELDS.MISC_FLAG]===I.RESOURCE_MISC_TEXTURECUBE)throw new Error("DDSParser does not support cubemap textures");if(i[I.HEADER_DX10_FIELDS.RESOURCE_DIMENSION]===I.D3D10_RESOURCE_DIMENSION.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSParser does not supported 3D texture data");const n=i[I.HEADER_DX10_FIELDS.DXGI_FORMAT];if(n in pt)return pt[n];throw new Error(`DDSParser cannot parse texture data with DXGI format ${n}`)}if(e in na)return na[e];throw new Error(`DDSParser cannot parse texture data with fourCC format ${e}`)}if(t&I.PIXEL_FORMAT_FLAGS.RGB||t&I.PIXEL_FORMAT_FLAGS.RGBA)return hT(r);throw t&I.PIXEL_FORMAT_FLAGS.YUV?new Error("DDSParser does not supported YUV uncompressed texture data."):t&I.PIXEL_FORMAT_FLAGS.LUMINANCE||t&I.PIXEL_FORMAT_FLAGS.LUMINANCEA?new Error("DDSParser does not support single-channel (lumninance) texture data!"):t&I.PIXEL_FORMAT_FLAGS.ALPHA||t&I.PIXEL_FORMAT_FLAGS.ALPHAPIXELS?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}function hT(r){const t=r[I.HEADER_FIELDS.RGB_BITCOUNT],e=r[I.HEADER_FIELDS.R_BIT_MASK],s=r[I.HEADER_FIELDS.G_BIT_MASK],i=r[I.HEADER_FIELDS.B_BIT_MASK],n=r[I.HEADER_FIELDS.A_BIT_MASK];switch(t){case 32:if(e===255&&s===65280&&i===16711680&&n===4278190080)return pt[I.DXGI_FORMAT.DXGI_FORMAT_R8G8B8A8_UNORM];if(e===16711680&&s===65280&&i===255&&n===4278190080)return pt[I.DXGI_FORMAT.DXGI_FORMAT_B8G8R8A8_UNORM];if(e===1072693248&&s===1047552&&i===1023&&n===3221225472)return pt[I.DXGI_FORMAT.DXGI_FORMAT_R10G10B10A2_UNORM];if(e===65535&&s===4294901760&&i===0&&n===0)return pt[I.DXGI_FORMAT.DXGI_FORMAT_R16G16_UNORM];if(e===4294967295&&s===0&&i===0&&n===0)return pt[I.DXGI_FORMAT.DXGI_FORMAT_R32_FLOAT];break;case 24:break;case 16:if(e===31744&&s===992&&i===31&&n===32768)return pt[I.DXGI_FORMAT.DXGI_FORMAT_B5G5R5A1_UNORM];if(e===63488&&s===2016&&i===31&&n===0)return pt[I.DXGI_FORMAT.DXGI_FORMAT_B5G6R5_UNORM];if(e===3840&&s===240&&i===15&&n===61440)return pt[I.DXGI_FORMAT.DXGI_FORMAT_B4G4R4A4_UNORM];if(e===255&&s===0&&i===0&&n===65280)return pt[I.DXGI_FORMAT.DXGI_FORMAT_R8G8_UNORM];if(e===65535&&s===0&&i===0&&n===0)return pt[I.DXGI_FORMAT.DXGI_FORMAT_R16_UNORM];break;case 8:if(e===255&&s===0&&i===0&&n===0)return pt[I.DXGI_FORMAT.DXGI_FORMAT_R8_UNORM];break}throw new Error(`DDSParser does not support uncompressed texture with configuration:
                bitCount = ${t}, rBitMask = ${e}, gBitMask = ${s}, aBitMask = ${n}`)}const cT={extension:{type:b.LoadParser,priority:gt.High},name:"loadDDS",test(r){return Mt(r,[".dds"])},async load(r,t,e){const s=await Fr(),i=await(await fetch(r)).arrayBuffer(),n=Sf(i,s),o=new Br(n);return te(o,e,r)},unload(r){Array.isArray(r)?r.forEach(t=>t.destroy(!0)):r.destroy(!0);}};var Ef=(r=>(r[r.RGBA8_SNORM=36759]="RGBA8_SNORM",r[r.RGBA=6408]="RGBA",r[r.RGBA8UI=36220]="RGBA8UI",r[r.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",r[r.RGBA8I=36238]="RGBA8I",r[r.RGBA8=32856]="RGBA8",r[r.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",r[r.COMPRESSED_RED_RGTC1_EXT=36283]="COMPRESSED_RED_RGTC1_EXT",r[r.COMPRESSED_SIGNED_RED_RGTC1_EXT=36284]="COMPRESSED_SIGNED_RED_RGTC1_EXT",r[r.COMPRESSED_RED_GREEN_RGTC2_EXT=36285]="COMPRESSED_RED_GREEN_RGTC2_EXT",r[r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT=36286]="COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT",r[r.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",r[r.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",r[r.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",r[r.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",r[r.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",r[r.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",r[r.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",r[r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",r[r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",r[r.COMPRESSED_RGBA_ASTC_5x4_KHR=37809]="COMPRESSED_RGBA_ASTC_5x4_KHR",r[r.COMPRESSED_RGBA_ASTC_5x5_KHR=37810]="COMPRESSED_RGBA_ASTC_5x5_KHR",r[r.COMPRESSED_RGBA_ASTC_6x5_KHR=37811]="COMPRESSED_RGBA_ASTC_6x5_KHR",r[r.COMPRESSED_RGBA_ASTC_6x6_KHR=37812]="COMPRESSED_RGBA_ASTC_6x6_KHR",r[r.COMPRESSED_RGBA_ASTC_8x5_KHR=37813]="COMPRESSED_RGBA_ASTC_8x5_KHR",r[r.COMPRESSED_RGBA_ASTC_8x6_KHR=37814]="COMPRESSED_RGBA_ASTC_8x6_KHR",r[r.COMPRESSED_RGBA_ASTC_8x8_KHR=37815]="COMPRESSED_RGBA_ASTC_8x8_KHR",r[r.COMPRESSED_RGBA_ASTC_10x5_KHR=37816]="COMPRESSED_RGBA_ASTC_10x5_KHR",r[r.COMPRESSED_RGBA_ASTC_10x6_KHR=37817]="COMPRESSED_RGBA_ASTC_10x6_KHR",r[r.COMPRESSED_RGBA_ASTC_10x8_KHR=37818]="COMPRESSED_RGBA_ASTC_10x8_KHR",r[r.COMPRESSED_RGBA_ASTC_10x10_KHR=37819]="COMPRESSED_RGBA_ASTC_10x10_KHR",r[r.COMPRESSED_RGBA_ASTC_12x10_KHR=37820]="COMPRESSED_RGBA_ASTC_12x10_KHR",r[r.COMPRESSED_RGBA_ASTC_12x12_KHR=37821]="COMPRESSED_RGBA_ASTC_12x12_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=37840]="COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=37841]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=37842]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=37843]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=37844]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=37845]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=37846]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=37847]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=37848]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=37849]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=37850]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=37851]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=37852]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR",r[r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=37853]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR",r[r.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNORM_EXT",r[r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493]="COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT",r[r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494]="COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT",r[r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT=36495]="COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT",r))(Ef||{}),dT=(r=>(r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL",r))(dT||{}),pT=(r=>(r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT",r))(pT||{});const fT={33776:"bc1-rgba-unorm",33777:"bc1-rgba-unorm",33778:"bc2-rgba-unorm",33779:"bc3-rgba-unorm",35916:"bc1-rgba-unorm-srgb",35917:"bc1-rgba-unorm-srgb",35918:"bc2-rgba-unorm-srgb",35919:"bc3-rgba-unorm-srgb",36283:"bc4-r-unorm",36284:"bc4-r-snorm",36285:"bc5-rg-unorm",36286:"bc5-rg-snorm",37488:"eac-r11unorm",37490:"eac-rg11snorm",37492:"etc2-rgb8unorm",37496:"etc2-rgba8unorm",37493:"etc2-rgb8unorm-srgb",37497:"etc2-rgba8unorm-srgb",37494:"etc2-rgb8a1unorm",37495:"etc2-rgb8a1unorm-srgb",37808:"astc-4x4-unorm",37840:"astc-4x4-unorm-srgb",37809:"astc-5x4-unorm",37841:"astc-5x4-unorm-srgb",37810:"astc-5x5-unorm",37842:"astc-5x5-unorm-srgb",37811:"astc-6x5-unorm",37843:"astc-6x5-unorm-srgb",37812:"astc-6x6-unorm",37844:"astc-6x6-unorm-srgb",37813:"astc-8x5-unorm",37845:"astc-8x5-unorm-srgb",37814:"astc-8x6-unorm",37846:"astc-8x6-unorm-srgb",37815:"astc-8x8-unorm",37847:"astc-8x8-unorm-srgb",37816:"astc-10x5-unorm",37848:"astc-10x5-unorm-srgb",37817:"astc-10x6-unorm",37849:"astc-10x6-unorm-srgb",37818:"astc-10x8-unorm",37850:"astc-10x8-unorm-srgb",37819:"astc-10x10-unorm",37851:"astc-10x10-unorm-srgb",37820:"astc-12x10-unorm",37852:"astc-12x10-unorm-srgb",37821:"astc-12x12-unorm",37853:"astc-12x12-unorm-srgb",36492:"bc7-rgba-unorm",36493:"bc7-rgba-unorm-srgb",36494:"bc6h-rgb-float",36495:"bc6h-rgb-ufloat",35907:"rgba8unorm-srgb",36759:"rgba8snorm",36220:"rgba8uint",36238:"rgba8sint",6408:"rgba8unorm"},mT=[171,75,84,88,32,49,49,187,13,10,26,10],gT={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},_T=64,xT=67305985,bT={5121:1,5123:2,5124:4,5125:4,5126:4,36193:8},vT={6408:4,6407:3,33319:2,6403:1,6409:1,6410:2,6406:1},yT={32819:2,32820:2,33635:2},TT={33776:.5,33777:.5,33778:1,33779:1,35916:.5,35917:.5,35918:1,35919:1,36283:.5,36284:.5,36285:1,36286:1,37488:.5,37489:.5,37490:1,37491:1,37492:.5,37496:1,37493:.5,37497:1,37494:.5,37495:.5,37808:1,37840:1,37809:.8,37841:.8,37810:.64,37842:.64,37811:.53375,37843:.53375,37812:.445,37844:.445,37813:.4,37845:.4,37814:.33375,37846:.33375,37815:.25,37847:.25,37816:.32,37848:.32,37817:.26625,37849:.26625,37818:.2,37850:.2,37819:.16,37851:.16,37820:.13375,37852:.13375,37821:.11125,37853:.11125,36492:1,36493:1,36494:1,36495:1},tt={FILE_HEADER_SIZE:_T,FILE_IDENTIFIER:mT,FORMATS_TO_COMPONENTS:vT,INTERNAL_FORMAT_TO_BYTES_PER_PIXEL:TT,INTERNAL_FORMAT_TO_TEXTURE_FORMATS:fT,FIELDS:gT,TYPES_TO_BYTES_PER_COMPONENT:bT,TYPES_TO_BYTES_PER_PIXEL:yT,ENDIANNESS:xT};function Af(r,t){const e=new DataView(r);if(!PT(e))throw new Error("Invalid KTX identifier in header");const{littleEndian:s,glType:i,glFormat:n,glInternalFormat:o,pixelWidth:a,pixelHeight:u,numberOfMipmapLevels:l,offset:h}=AT(e),c=tt.INTERNAL_FORMAT_TO_TEXTURE_FORMATS[o];if(!c)throw new Error(`Unknown texture format ${o}`);if(!t.includes(c))throw new Error(`Unsupported texture format: ${c}, supportedFormats: ${t}`);const d=ET(i,n,o),f=ST(e,i,d,a,u,h,l,s);return {format:c,width:a,height:u,resource:f,alphaMode:"no-premultiply-alpha"}}function ST(r,t,e,s,i,n,o,a){const u=s+3&-4,l=i+3&-4;let h=s*i;t===0&&(h=u*l);let c=h*e,d=s,f=i,p=u,g=l,m=n;const _=new Array(o);for(let x=0;x<o;x++){const v=r.getUint32(m,a);let y=m+4;_[x]=new Uint8Array(r.buffer,y,c),y+=c,m+=v+4,m=m%4!==0?m+4-m%4:m,d=d>>1||1,f=f>>1||1,p=d+4-1&-4,g=f+4-1&-4,c=p*g*e;}return _}function ET(r,t,e){let s=tt.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[e];if(r!==0&&(tt.TYPES_TO_BYTES_PER_COMPONENT[r]?s=tt.TYPES_TO_BYTES_PER_COMPONENT[r]*tt.FORMATS_TO_COMPONENTS[t]:s=tt.TYPES_TO_BYTES_PER_PIXEL[r]),s===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");return s}function AT(r){const t=r.getUint32(tt.FIELDS.ENDIANNESS,!0)===tt.ENDIANNESS,e=r.getUint32(tt.FIELDS.GL_TYPE,t),s=r.getUint32(tt.FIELDS.GL_FORMAT,t),i=r.getUint32(tt.FIELDS.GL_INTERNAL_FORMAT,t),n=r.getUint32(tt.FIELDS.PIXEL_WIDTH,t),o=r.getUint32(tt.FIELDS.PIXEL_HEIGHT,t)||1,a=r.getUint32(tt.FIELDS.PIXEL_DEPTH,t)||1,u=r.getUint32(tt.FIELDS.NUMBER_OF_ARRAY_ELEMENTS,t)||1,l=r.getUint32(tt.FIELDS.NUMBER_OF_FACES,t),h=r.getUint32(tt.FIELDS.NUMBER_OF_MIPMAP_LEVELS,t),c=r.getUint32(tt.FIELDS.BYTES_OF_KEY_VALUE_DATA,t);if(o===0||a!==1)throw new Error("Only 2D textures are supported");if(l!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(u!==1)throw new Error("WebGL does not support array textures");return {littleEndian:t,glType:e,glFormat:s,glInternalFormat:i,pixelWidth:n,pixelHeight:o,numberOfMipmapLevels:h,offset:tt.FILE_HEADER_SIZE+c}}function PT(r){for(let t=0;t<tt.FILE_IDENTIFIER.length;t++)if(r.getUint8(t)!==tt.FILE_IDENTIFIER[t])return !1;return !0}const wT={extension:{type:b.LoadParser,priority:gt.High},name:"loadKTX",test(r){return Mt(r,".ktx")},async load(r,t,e){const s=await Fr(),i=await(await fetch(r)).arrayBuffer(),n=Af(i,s),o=new Br(n);return te(o,e,r)},unload(r){Array.isArray(r)?r.forEach(t=>t.destroy(!0)):r.destroy(!0);}},RT='(function(){"use strict";const s={rgb8unorm:{convertedFormat:"rgba8unorm",convertFunction:i},"rgb8unorm-srgb":{convertedFormat:"rgba8unorm-srgb",convertFunction:i}};function f(r){const t=r.format;if(s[t]){const n=s[t].convertFunction,o=r.resource;for(let e=0;e<o.length;e++)o[e]=n(o[e]);r.format=s[t].convertedFormat}}function i(r){const t=r.byteLength/3,n=new Uint32Array(t);for(let o=0;o<t;++o)n[o]=r[o*3]+(r[o*3+1]<<8)+(r[o*3+2]<<16)+4278190080;return new Uint8Array(n.buffer)}function d(r){const t=[];for(let n=0;n<r.numLevels;n++){const o=r.getImageData(n,0,0),e=new Uint8Array(o.byteLength);e.set(o),t.push(e)}return t}const w={6408:"rgba8unorm",32856:"bgra8unorm",32857:"rgb10a2unorm",33189:"depth16unorm",33190:"depth24plus",33321:"r8unorm",33323:"rg8unorm",33325:"r16float",33326:"r32float",33327:"rg16float",33328:"rg32float",33329:"r8sint",33330:"r8uint",33331:"r16sint",33332:"r16uint",33333:"r32sint",33334:"r32uint",33335:"rg8sint",33336:"rg8uint",33337:"rg16sint",33338:"rg16uint",33339:"rg32sint",33340:"rg32uint",33778:"bc2-rgba-unorm",33779:"bc3-rgba-unorm",34836:"rgba32float",34842:"rgba16float",35056:"depth24plus-stencil8",35898:"rg11b10ufloat",35901:"rgb9e5ufloat",35907:"rgba8unorm-srgb",36012:"depth32float",36013:"depth32float-stencil8",36168:"stencil8",36208:"rgba32uint",36214:"rgba16uint",36220:"rgba8uint",36226:"rgba32sint",36232:"rgba16sint",36238:"rgba8sint",36492:"bc7-rgba-unorm",36756:"r8snorm",36757:"rg8snorm",36759:"rgba8snorm",37496:"etc2-rgba8unorm",37808:"astc-4x4-unorm"};function p(r){const t=w[r];if(t)return t;throw new Error(`Unsupported glInternalFormat: ${r}`)}const h={23:"rgb8unorm",37:"rgba8unorm",43:"rgba8unorm-srgb"};function F(r){const t=h[r];if(t)return t;throw new Error(`Unsupported VkFormat: ${r}`)}function U(r){return r.classId===2?F(r.vkFormat):p(r.glInternalformat)}const T={"bc3-rgba-unorm":"BC3_RGBA","bc7-rgba-unorm":"BC7_M5_RGBA","etc2-rgba8unorm":"ETC2_RGBA","astc-4x4-unorm":"ASTC_4x4_RGBA",rgba8unorm:"RGBA32",rg11b10ufloat:"R11F_G11F_B10F"};function y(r){const t=T[r];if(t)return t;throw new Error(`Unsupported transcoderFormat: ${r}`)}const a={jsUrl:"",wasmUrl:""};let l,u,c;async function g(){if(!c){const r=new URL(a.jsUrl,location.origin).href,t=new URL(a.wasmUrl,location.origin).href;importScripts(r),c=new Promise(n=>{LIBKTX({locateFile:o=>t}).then(o=>{n(o)})})}return c}async function v(r,t){const n=await fetch(r);if(n.ok){const o=await n.arrayBuffer();return new t.ktxTexture(new Uint8Array(o))}throw new Error(`Failed to load KTX(2) texture: ${r}`)}const x=["bc7-rgba-unorm","astc-4x4-unorm","etc2-rgba8unorm","bc3-rgba-unorm","rgba8unorm"];async function B(r){const t=await g(),n=await v(r,t);let o;if(n.needsTranscoding){o=u;const R=t.TranscodeTarget[l];if(n.transcodeBasis(R,0)!==t.ErrorCode.SUCCESS)throw new Error("Unable to transcode basis texture.")}else o=U(n);const e=d(n),b={width:n.baseWidth,height:n.baseHeight,format:o,mipLevelCount:n.numLevels,resource:e,alphaMode:"no-premultiply-alpha"};return f(b),b}async function A(r,t,n){r&&(a.jsUrl=r),t&&(a.wasmUrl=t),u=x.filter(o=>n.includes(o))[0],l=y(u),await g()}const m={init:async r=>{const{jsUrl:t,wasmUrl:n,supportedTextures:o}=r;await A(t,n,o)},load:async r=>{var t;try{const n=await B(r.url);return{type:"load",url:r.url,success:!0,textureOptions:n,transferables:(t=n.resource)==null?void 0:t.map(o=>o.buffer)}}catch(n){throw n}}};self.onmessage=async r=>{var t;const n=r.data,o=await((t=m[n.type])==null?void 0:t.call(m,n));o&&self.postMessage(o,o.transferables)}})();\n';let He=null;class Pf{constructor(){He||(He=URL.createObjectURL(new Blob([RT],{type:"application/javascript"}))),this.worker=new Worker(He);}}Pf.revokeObjectURL=function(){He&&(URL.revokeObjectURL(He),He=null);};const Qs={jsUrl:"https://files.pixijs.download/transcoders/ktx/libktx.js",wasmUrl:"https://files.pixijs.download/transcoders/ktx/libktx.wasm"};function MT(r){Object.assign(Qs,r);}let Ur;const wf={};function OT(r){return Ur||(Ur=new Pf().worker,Ur.onmessage=t=>{const{success:e,url:s,textureOptions:i}=t.data;e||console.warn("Failed to load KTX texture",s),wf[s](i);},Ur.postMessage({type:"init",jsUrl:Qs.jsUrl,wasmUrl:Qs.wasmUrl,supportedTextures:r})),Ur}function Rf(r,t){const e=OT(t);return new Promise(s=>{wf[r]=s,e.postMessage({type:"load",url:r});})}const CT={extension:{type:b.LoadParser,priority:gt.High},name:"loadKTX2",test(r){return Mt(r,".ktx2")},async load(r,t,e){const s=await Fr(),i=await Rf(r,s),n=new Br(i);return te(n,e,r)},unload(r){Array.isArray(r)?r.forEach(t=>t.destroy(!0)):r.destroy(!0);}},oa={rgb8unorm:{convertedFormat:"rgba8unorm",convertFunction:Mf},"rgb8unorm-srgb":{convertedFormat:"rgba8unorm-srgb",convertFunction:Mf}};function GT(r){const t=r.format;if(oa[t]){const e=oa[t].convertFunction,s=r.resource;for(let i=0;i<s.length;i++)s[i]=e(s[i]);r.format=oa[t].convertedFormat;}}function Mf(r){const t=r.byteLength/3,e=new Uint32Array(t);for(let s=0;s<t;++s)e[s]=r[s*3]+(r[s*3+1]<<8)+(r[s*3+2]<<16)+4278190080;return new Uint8Array(e.buffer)}function IT(r){const t=[];for(let e=0;e<r.numLevels;e++){const s=r.getImageData(e,0,0),i=new Uint8Array(s.byteLength);i.set(s),t.push(i);}return t}const BT={6408:"rgba8unorm",32856:"bgra8unorm",32857:"rgb10a2unorm",33189:"depth16unorm",33190:"depth24plus",33321:"r8unorm",33323:"rg8unorm",33325:"r16float",33326:"r32float",33327:"rg16float",33328:"rg32float",33329:"r8sint",33330:"r8uint",33331:"r16sint",33332:"r16uint",33333:"r32sint",33334:"r32uint",33335:"rg8sint",33336:"rg8uint",33337:"rg16sint",33338:"rg16uint",33339:"rg32sint",33340:"rg32uint",33778:"bc2-rgba-unorm",33779:"bc3-rgba-unorm",34836:"rgba32float",34842:"rgba16float",35056:"depth24plus-stencil8",35898:"rg11b10ufloat",35901:"rgb9e5ufloat",35907:"rgba8unorm-srgb",36012:"depth32float",36013:"depth32float-stencil8",36168:"stencil8",36208:"rgba32uint",36214:"rgba16uint",36220:"rgba8uint",36226:"rgba32sint",36232:"rgba16sint",36238:"rgba8sint",36492:"bc7-rgba-unorm",36756:"r8snorm",36757:"rg8snorm",36759:"rgba8snorm",37496:"etc2-rgba8unorm",37808:"astc-4x4-unorm"};function Of(r){const t=BT[r];if(t)return t;throw new Error(`Unsupported glInternalFormat: ${r}`)}const FT={23:"rgb8unorm",37:"rgba8unorm",43:"rgba8unorm-srgb"};function Cf(r){const t=FT[r];if(t)return t;throw new Error(`Unsupported VkFormat: ${r}`)}function DT(r){return r.classId===2?Cf(r.vkFormat):Of(r.glInternalformat)}const UT={"bc3-rgba-unorm":"BC3_RGBA","bc7-rgba-unorm":"BC7_M5_RGBA","etc2-rgba8unorm":"ETC2_RGBA","astc-4x4-unorm":"ASTC_4x4_RGBA",rgba8unorm:"RGBA32",rg11b10ufloat:"R11F_G11F_B10F"};function kT(r){const t=UT[r];if(t)return t;throw new Error(`Unsupported transcoderFormat: ${r}`)}const Js=["basis","bc7","bc6h","astc","etc2","bc5","bc4","bc3","bc2","bc1","eac"],LT={extension:b.ResolveParser,test:r=>Mt(r,[".ktx",".ktx2",".dds"]),parse:r=>{var t,e;let s;const i=r.split(".");if(i.length>2){const n=i[i.length-2];Js.includes(n)&&(s=n);}else s=i[i.length-1];return {resolution:parseFloat((e=(t=qt.RETINA_PREFIX.exec(r))==null?void 0:t[1])!=null?e:"1"),format:s,src:r}}};let ti;const $T={extension:{type:b.DetectionParser,priority:2},test:async()=>!!(await Cr()||Or()),add:async r=>{const t=await ia();return ti=NT(t),[...ti,...r]},remove:async r=>ti?r.filter(t=>!(t in ti)):r};function NT(r){const t=["basis"],e={};return r.forEach(s=>{const i=s.split("-")[0];i&&!e[i]&&(e[i]=!0,t.push(i));}),t.sort((s,i)=>{const n=Js.indexOf(s),o=Js.indexOf(i);return n===-1?1:o===-1?-1:n-o}),t}const HT=new lt,aa=class{cull(t,e,s=!0){this._cullRecursive(t,e,s);}_cullRecursive(t,e,s=!0){var i;if(t.cullable&&t.measurable&&t.includeInBuild){const n=(i=t.cullArea)!=null?i:sr(t,s,HT);t.culled=!(n.x>=e.x+e.width||n.y>=e.y+e.height||n.x+n.width<=e.x||n.y+n.height<=e.y);}if(!(!t.cullableChildren||t.culled||!t.renderable||!t.measurable||!t.includeInBuild))for(let n=0;n<t.children.length;n++)this._cullRecursive(t.children[n],e,s);}};aa.shared=new aa;let Gf=aa;class If{static init(){this._renderRef=this.render.bind(this),this.render=()=>{Gf.shared.cull(this.stage,this.renderer.screen),this.renderer.render({container:this.stage});};}static destroy(){this.render=this._renderRef;}}If.extension={priority:10,type:b.Application,name:"culler"};const XT={extension:{type:b.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Promise.resolve().then(function(){return Wy});}};var zT=Object.defineProperty,ei=Object.getOwnPropertySymbols,Bf=Object.prototype.hasOwnProperty,Ff=Object.prototype.propertyIsEnumerable,Df=(r,t,e)=>t in r?zT(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,ua=(r,t)=>{for(var e in t||(t={}))Bf.call(t,e)&&Df(r,e,t[e]);if(ei)for(var e of ei(t))Ff.call(t,e)&&Df(r,e,t[e]);return r},jT=(r,t)=>{var e={};for(var s in r)Bf.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&ei)for(var s of ei(r))t.indexOf(s)<0&&Ff.call(r,s)&&(e[s]=r[s]);return e};const Uf=class Wu extends St{constructor(t){t=ua(ua({},Wu.defaultOptions),t),super(t),this.enabled=!0,this._state=Ct.for2d(),this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1);}apply(t,e,s,i){t.applyFilter(this,e,s,i);}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t;}static from(t){const e=t,{gpu:s,gl:i}=e,n=jT(e,["gpu","gl"]);let o,a;return s&&(o=Tt.from(s)),i&&(a=Rt.from(i)),new Wu(ua({gpuProgram:o,glProgram:a},n))}};Uf.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let Yt=Uf;var kf=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uBlend;

uniform sampler2D uTexture;
uniform sampler2D uBackTexture;

{FUNCTIONS}

void main()
{ 
    vec4 back = texture(uBackTexture, vTextureCoord);
    vec4 front = texture(uTexture, vTextureCoord);

    {MAIN}
}
`,Lf=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 backgroundUv;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,$f=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlendUniforms {
  uBlend:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(0) @binding(3) var uBackTexture: texture_2d<f32>;

@group(1) @binding(0) var<uniform> blendUniforms : BlendUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

{FUNCTIONS}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>
) -> @location(0) vec4<f32> {


   var back =  textureSample(uBackTexture, uSampler, uv);
   var front = textureSample(uTexture, uSampler, uv);
   
   var out = vec4<f32>(0.0,0.0,0.0,0.0);

   {MAIN}

   return out;
}`,WT=Object.defineProperty,Nf=Object.getOwnPropertySymbols,VT=Object.prototype.hasOwnProperty,YT=Object.prototype.propertyIsEnumerable,Hf=(r,t,e)=>t in r?WT(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Xf=(r,t)=>{for(var e in t||(t={}))VT.call(t,e)&&Hf(r,e,t[e]);if(Nf)for(var e of Nf(t))YT.call(t,e)&&Hf(r,e,t[e]);return r};class KT extends Yt{constructor(t){const e=t.gpu,s=zf(Xf({source:$f},e)),i=Tt.from({vertex:{source:s,entryPoint:"mainVertex"},fragment:{source:s,entryPoint:"mainFragment"}}),n=t.gl,o=zf(Xf({source:kf},n)),a=Rt.from({vertex:Lf,fragment:o}),u=new st({uBlend:{value:1,type:"f32"}});super({gpuProgram:i,glProgram:a,blendRequired:!0,resources:{blendUniforms:u,uBackTexture:A.EMPTY}});}}function zf(r){const{source:t,functions:e,main:s}=r;return t.replace("{FUNCTIONS}",e).replace("{MAIN}",s)}const qT=`
	float getLuminosity(vec3 c) {
		return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
	}

	vec3 setLuminosity(vec3 c, float lum) {
		float modLum = lum - getLuminosity(c);
		vec3 color = c.rgb + vec3(modLum);

		// clip back into legal range
		modLum = getLuminosity(color);
		vec3 modLumVec = vec3(modLum);

		float cMin = min(color.r, min(color.g, color.b));
		float cMax = max(color.r, max(color.g, color.b));

		if(cMin < 0.0) {
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0) {
			color = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));
		}

		return color;
	}

	float getSaturation(vec3 c) {
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	vec3 setSaturationMinMidMax(vec3 cSorted, float s) {
		vec3 colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x) {
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else {
			colorSorted.y = 0.0;
			colorSorted.z = 0.0;
		}

		colorSorted.x = 0.0;

		return colorSorted;
	}

	vec3 setSaturation(vec3 c, float s) {
		vec3 color = c;

		if(color.r <= color.g && color.r <= color.b) {
			if(color.g <= color.b) {
				color = setSaturationMinMidMax(color.rgb, s).rgb;
			}
			else {
				color = setSaturationMinMidMax(color.rbg, s).rbg;
			}
		}
		else if(color.g <= color.r && color.g <= color.b) {
			if(color.r <= color.b) {
				color = setSaturationMinMidMax(color.grb, s).grb;
			}
			else {
				color = setSaturationMinMidMax(color.gbr, s).gbr;
			}
		}
		else {
			// Using bgr for both fixes part of hue
			if(color.r <= color.g) {
				color = setSaturationMinMidMax(color.brg, s).brg;
			}
			else {
				color = setSaturationMinMidMax(color.bgr, s).bgr;
			}
		}

		return color;
	}
    `,ZT=`
	fn getLuminosity(c: vec3<f32>) -> f32
	{
		return 0.3*c.r + 0.59*c.g + 0.11*c.b;
	}

	fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>
	{
		var modLum: f32 = lum - getLuminosity(c);
		var color: vec3<f32> = c.rgb + modLum;

		// clip back into legal range
		modLum = getLuminosity(color);
		let modLumVec = vec3<f32>(modLum);

		let cMin: f32 = min(color.r, min(color.g, color.b));
		let cMax: f32 = max(color.r, max(color.g, color.b));

		if(cMin < 0.0)
		{
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0)
		{
			color = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));
		}

		return color;
	}

	fn getSaturation(c: vec3<f32>) -> f32
	{
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>
	{
		var colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x)
		{
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else
		{
			colorSorted.y = 0;
			colorSorted.z = 0;
		}

		colorSorted.x = 0;

		return colorSorted;
	}

	fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>
	{
		var color = c;

		if (color.r <= color.g && color.r <= color.b)
		{
			if (color.g <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;
			}
		}
		else if (color.g <= color.r && color.g <= color.b)
		{
			if (color.r <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;
			}
		}
		else
		{
			// Using bgr for both fixes part of hue
			if (color.r <= color.g)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;
			}
			else
			{
				color  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;
			}
		}

		return color;
	}
	`;var ri=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,jf=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,la=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`,QT=Object.defineProperty,JT=Object.defineProperties,tS=Object.getOwnPropertyDescriptors,si=Object.getOwnPropertySymbols,Wf=Object.prototype.hasOwnProperty,Vf=Object.prototype.propertyIsEnumerable,Yf=(r,t,e)=>t in r?QT(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,ha=(r,t)=>{for(var e in t||(t={}))Wf.call(t,e)&&Yf(r,e,t[e]);if(si)for(var e of si(t))Vf.call(t,e)&&Yf(r,e,t[e]);return r},eS=(r,t)=>JT(r,tS(t)),rS=(r,t)=>{var e={};for(var s in r)Wf.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&si)for(var s of si(r))t.indexOf(s)<0&&Vf.call(r,s)&&(e[s]=r[s]);return e};const Kf=class Ix extends Yt{constructor(t){t=ha(ha({},Ix.defaultOptions),t);const e=Tt.from({vertex:{source:la,entryPoint:"mainVertex"},fragment:{source:la,entryPoint:"mainFragment"}}),s=Rt.from({vertex:ri,fragment:jf,name:"alpha-filter"}),i=t,{alpha:n}=i,o=rS(i,["alpha"]),a=new st({uAlpha:{value:n,type:"f32"}});super(eS(ha({},o),{gpuProgram:e,glProgram:s,resources:{alphaUniforms:a}}));}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t;}};Kf.defaultOptions={alpha:1};let sS=Kf;const ca={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},iS=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function qf(r){const t=ca[r],e=t.length;let s=iS,i="";const n="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<r;a++){let u=n.replace("%index%",a.toString());o=a,a>=e&&(o=r-a-1),u=u.replace("%value%",t[o].toString()),i+=u,i+=`
`;}return s=s.replace("%blur%",i),s=s.replace("%size%",r.toString()),s}const nS=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Zf(r,t){const e=Math.ceil(r/2);let s=nS,i="",n;t?n="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":n="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<r;o++){let a=n.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(e-1)}.0`),i+=a,i+=`
`;}return s=s.replace("%blur%",i),s=s.replace("%size%",r.toString()),s=s.replace("%dimension%",t?"z":"w"),s}function Qf(r,t){const e=Zf(t,r),s=qf(t);return Rt.from({vertex:e,fragment:s,name:`blur-${r?"horizontal":"vertical"}-pass-filter`})}var Jf=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function tm(r,t){const e=ca[t],s=e.length,i=[],n=[],o=[];for(let c=0;c<t;c++){i[c]=`@location(${c}) offset${c}: vec2<f32>,`,r?n[c]=`filteredCord + vec2(${c-s+1} * strength, 0.0),`:n[c]=`filteredCord + vec2(0.0, ${c-s+1} * strength),`;const d=c<s?c:t-c-1,f=e[d].toString();o[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${f};`;}const a=i.join(`
`),u=n.join(`
`),l=o.join(`
`),h=Jf.replace("%blur-struct%",a).replace("%blur-vertex-out%",u).replace("%blur-fragment-in%",a).replace("%blur-sampling%",l);return Tt.from({vertex:{source:h,entryPoint:"mainVertex"},fragment:{source:h,entryPoint:"mainFragment"}})}var oS=Object.defineProperty,em=Object.getOwnPropertySymbols,aS=Object.prototype.hasOwnProperty,uS=Object.prototype.propertyIsEnumerable,rm=(r,t,e)=>t in r?oS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,da=(r,t)=>{for(var e in t||(t={}))aS.call(t,e)&&rm(r,e,t[e]);if(em)for(var e of em(t))uS.call(t,e)&&rm(r,e,t[e]);return r};const sm=class Bx extends Yt{constructor(t){t=da(da({},Bx.defaultOptions),t);const e=Qf(t.horizontal,t.kernelSize),s=tm(t.horizontal,t.kernelSize);super(da({glProgram:e,gpuProgram:s,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}}},t)),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms;}apply(t,e,s,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,e,s,i);else {const n=ut.getSameSizeTexture(e);let o=e,a=n;this._state.blend=!1;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,o,a,t.renderer.type===xt.WEBGPU);const l=a;a=o,o=l;}this._state.blend=!0,t.applyFilter(this,o,s,i),ut.returnTexture(n);}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t;}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t;}};sm.defaultOptions={strength:8,quality:4,kernelSize:5};let ii=sm;var lS=Object.defineProperty,hS=Object.defineProperties,cS=Object.getOwnPropertyDescriptors,ni=Object.getOwnPropertySymbols,im=Object.prototype.hasOwnProperty,nm=Object.prototype.propertyIsEnumerable,om=(r,t,e)=>t in r?lS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,kr=(r,t)=>{for(var e in t||(t={}))im.call(t,e)&&om(r,e,t[e]);if(ni)for(var e of ni(t))nm.call(t,e)&&om(r,e,t[e]);return r},dS=(r,t)=>hS(r,cS(t)),pS=(r,t)=>{var e={};for(var s in r)im.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&ni)for(var s of ni(r))t.indexOf(s)<0&&nm.call(r,s)&&(e[s]=r[s]);return e};class am extends Yt{constructor(...t){var e;let s=(e=t[0])!=null?e:{};typeof s=="number"&&(s={strength:s},t[1]&&(s.quality=t[1]),t[2]&&(s.resolution=t[2]),t[3]&&(s.kernelSize=t[3])),s=kr(kr({},ii.defaultOptions),s);const i=s,{strength:n,quality:o}=i,a=pS(i,["strength","quality"]);super(dS(kr({},a),{compatibleRenderers:xt.BOTH,resources:{}})),this._repeatEdgePixels=!1,this.blurXFilter=new ii(kr({horizontal:!1},s)),this.blurYFilter=new ii(kr({horizontal:!0},s)),this.quality=o,this.blur=n,this.repeatEdgePixels=!1;}apply(t,e,s,i){const n=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(n&&o){const a=ut.getSameSizeTexture(e);this.blurXFilter.apply(t,e,a,!0),this.blurYFilter.apply(t,a,s,i),ut.returnTexture(a);}else o?this.blurYFilter.apply(t,e,s,i):this.blurXFilter.apply(t,e,s,i);}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2;}get blur(){return this.blurXFilter.blur}set blur(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding();}get quality(){return this.blurXFilter.quality}set quality(t){this.blurXFilter.quality=this.blurYFilter.quality=t;}get blurX(){return this.blurXFilter.blur}set blurX(t){this.blurXFilter.blur=t,this.updatePadding();}get blurY(){return this.blurYFilter.blur}set blurY(t){this.blurYFilter.blur=t,this.updatePadding();}get blendMode(){return this.blurYFilter.blendMode}set blendMode(t){this.blurYFilter.blendMode=t;}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(t){this._repeatEdgePixels=t,this.updatePadding();}}am.defaultOptions={strength:8,quality:4,kernelSize:5};var um=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uColorMatrix[20];
uniform float uAlpha;

uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    if (uAlpha == 0.0) {
        finalColor = color;
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;

    result.r = (uColorMatrix[0] * color.r);
        result.r += (uColorMatrix[1] * color.g);
        result.r += (uColorMatrix[2] * color.b);
        result.r += (uColorMatrix[3] * color.a);
        result.r += uColorMatrix[4];

    result.g = (uColorMatrix[5] * color.r);
        result.g += (uColorMatrix[6] * color.g);
        result.g += (uColorMatrix[7] * color.b);
        result.g += (uColorMatrix[8] * color.a);
        result.g += uColorMatrix[9];

    result.b = (uColorMatrix[10] * color.r);
       result.b += (uColorMatrix[11] * color.g);
       result.b += (uColorMatrix[12] * color.b);
       result.b += (uColorMatrix[13] * color.a);
       result.b += uColorMatrix[14];

    result.a = (uColorMatrix[15] * color.r);
       result.a += (uColorMatrix[16] * color.g);
       result.a += (uColorMatrix[17] * color.b);
       result.a += (uColorMatrix[18] * color.a);
       result.a += uColorMatrix[19];

    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`,pa=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct ColorMatrixUniforms {
  uColorMatrix:array<vec4<f32>, 5>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
  };
  
fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
  );
}


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {


  var c = textureSample(uTexture, uSampler, uv);
  
  if (colorMatrixUniforms.uAlpha == 0.0) {
    return c;
  }

 
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.r /= c.a;
      c.g /= c.a;
      c.b /= c.a;
    }

    var cm = colorMatrixUniforms.uColorMatrix;


    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * c.r);
    result.r += (cm[0][1] * c.g);
    result.r += (cm[0][2] * c.b);
    result.r += (cm[0][3] * c.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * c.r);
    result.g += (cm[1][2] * c.g);
    result.g += (cm[1][3] * c.b);
    result.g += (cm[2][0] * c.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * c.r);
    result.b += (cm[2][3] * c.g);
    result.b += (cm[3][0] * c.b);
    result.b += (cm[3][1] * c.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * c.r);
    result.a += (cm[4][0] * c.g);
    result.a += (cm[4][1] * c.b);
    result.a += (cm[4][2] * c.a);
    result.a += cm[4][3];

    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}`,fS=Object.defineProperty,mS=Object.defineProperties,gS=Object.getOwnPropertyDescriptors,lm=Object.getOwnPropertySymbols,_S=Object.prototype.hasOwnProperty,xS=Object.prototype.propertyIsEnumerable,hm=(r,t,e)=>t in r?fS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,bS=(r,t)=>{for(var e in t||(t={}))_S.call(t,e)&&hm(r,e,t[e]);if(lm)for(var e of lm(t))xS.call(t,e)&&hm(r,e,t[e]);return r},vS=(r,t)=>mS(r,gS(t));class yS extends Yt{constructor(t={}){const e=new st({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),s=Tt.from({vertex:{source:pa,entryPoint:"mainVertex"},fragment:{source:pa,entryPoint:"mainFragment"}}),i=Rt.from({vertex:ri,fragment:um,name:"color-matrix-filter"});super(vS(bS({},t),{gpuProgram:s,glProgram:i,resources:{colorMatrixUniforms:e}})),this.alpha=1;}_loadMatrix(t,e=!1){let s=t;e&&(this._multiply(s,this.matrix,t),s=this._colorMatrix(s)),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=s,this.resources.colorMatrixUniforms.update();}_multiply(t,e,s){return t[0]=e[0]*s[0]+e[1]*s[5]+e[2]*s[10]+e[3]*s[15],t[1]=e[0]*s[1]+e[1]*s[6]+e[2]*s[11]+e[3]*s[16],t[2]=e[0]*s[2]+e[1]*s[7]+e[2]*s[12]+e[3]*s[17],t[3]=e[0]*s[3]+e[1]*s[8]+e[2]*s[13]+e[3]*s[18],t[4]=e[0]*s[4]+e[1]*s[9]+e[2]*s[14]+e[3]*s[19]+e[4],t[5]=e[5]*s[0]+e[6]*s[5]+e[7]*s[10]+e[8]*s[15],t[6]=e[5]*s[1]+e[6]*s[6]+e[7]*s[11]+e[8]*s[16],t[7]=e[5]*s[2]+e[6]*s[7]+e[7]*s[12]+e[8]*s[17],t[8]=e[5]*s[3]+e[6]*s[8]+e[7]*s[13]+e[8]*s[18],t[9]=e[5]*s[4]+e[6]*s[9]+e[7]*s[14]+e[8]*s[19]+e[9],t[10]=e[10]*s[0]+e[11]*s[5]+e[12]*s[10]+e[13]*s[15],t[11]=e[10]*s[1]+e[11]*s[6]+e[12]*s[11]+e[13]*s[16],t[12]=e[10]*s[2]+e[11]*s[7]+e[12]*s[12]+e[13]*s[17],t[13]=e[10]*s[3]+e[11]*s[8]+e[12]*s[13]+e[13]*s[18],t[14]=e[10]*s[4]+e[11]*s[9]+e[12]*s[14]+e[13]*s[19]+e[14],t[15]=e[15]*s[0]+e[16]*s[5]+e[17]*s[10]+e[18]*s[15],t[16]=e[15]*s[1]+e[16]*s[6]+e[17]*s[11]+e[18]*s[16],t[17]=e[15]*s[2]+e[16]*s[7]+e[17]*s[12]+e[18]*s[17],t[18]=e[15]*s[3]+e[16]*s[8]+e[17]*s[13]+e[18]*s[18],t[19]=e[15]*s[4]+e[16]*s[9]+e[17]*s[14]+e[18]*s[19]+e[19],t}_colorMatrix(t){const e=new Float32Array(t);return e[4]/=255,e[9]/=255,e[14]/=255,e[19]/=255,e}brightness(t,e){const s=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(s,e);}tint(t,e){const[s,i,n]=V.shared.setValue(t).toArray(),o=[s,0,0,0,0,0,i,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(o,e);}greyscale(t,e){const s=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(s,e);}grayscale(t,e){this.greyscale(t,e);}blackAndWhite(t){const e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,t);}hue(t,e){t=(t||0)/180*Math.PI;const s=Math.cos(t),i=Math.sin(t),n=Math.sqrt,o=1/3,a=n(o),u=s+(1-s)*o,l=o*(1-s)-a*i,h=o*(1-s)+a*i,c=o*(1-s)+a*i,d=s+o*(1-s),f=o*(1-s)-a*i,p=o*(1-s)-a*i,g=o*(1-s)+a*i,m=s+o*(1-s),_=[u,l,h,0,0,c,d,f,0,0,p,g,m,0,0,0,0,0,1,0];this._loadMatrix(_,e);}contrast(t,e){const s=(t||0)+1,i=-.5*(s-1),n=[s,0,0,0,i,0,s,0,0,i,0,0,s,0,i,0,0,0,1,0];this._loadMatrix(n,e);}saturate(t=0,e){const s=t*2/3+1,i=(s-1)*-.5,n=[s,i,i,0,0,i,s,i,0,0,i,i,s,0,0,0,0,0,1,0];this._loadMatrix(n,e);}desaturate(){this.saturate(-1);}negative(t){const e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,t);}sepia(t){const e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,t);}technicolor(t){const e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(e,t);}polaroid(t){const e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,t);}toBGR(t){const e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,t);}kodachrome(t){const e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(e,t);}browni(t){const e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(e,t);}vintage(t){const e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(e,t);}colorTone(t,e,s,i,n){t=t||.2,e=e||.15,s=s||16770432,i=i||3375104;const o=V.shared,[a,u,l]=o.setValue(s).toArray(),[h,c,d]=o.setValue(i).toArray(),f=[.3,.59,.11,0,0,a,u,l,t,0,h,c,d,e,0,a-h,u-c,l-d,0,0];this._loadMatrix(f,n);}night(t,e){t=t||.1;const s=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(s,e);}predator(t,e){const s=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(s,e);}lsd(t){const e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,t);}reset(){const t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1);}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(t){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t;}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(t){this.resources.colorMatrixUniforms.uniforms.uAlpha=t;}}var cm=`
in vec2 vTextureCoord;
in vec2 vFilterUv;

out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;

uniform vec4 uInputClamp;
uniform highp vec4 uInputSize;
uniform mat2 uRotation;
uniform vec2 uScale;

void main()
{
    vec4 map = texture(uMapTexture, vFilterUv);
    
    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; 

    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));
}
`,dm=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterUv;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

uniform mat3 uFilterMatrix;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( void )
{
  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;
}


void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterUv = getFilterCoord();
}
`,fa=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct DisplacementUniforms {
  uFilterMatrix:mat3x3<f32>,
  uScale:vec2<f32>,
  uRotation:mat2x2<f32>
};



@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var map = textureSample(uMapTexture, uMapSampler, filterUv);

    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; 
   
    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
}`,TS=Object.defineProperty,SS=Object.defineProperties,ES=Object.getOwnPropertyDescriptors,oi=Object.getOwnPropertySymbols,pm=Object.prototype.hasOwnProperty,fm=Object.prototype.propertyIsEnumerable,mm=(r,t,e)=>t in r?TS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,AS=(r,t)=>{for(var e in t||(t={}))pm.call(t,e)&&mm(r,e,t[e]);if(oi)for(var e of oi(t))fm.call(t,e)&&mm(r,e,t[e]);return r},PS=(r,t)=>SS(r,ES(t)),wS=(r,t)=>{var e={};for(var s in r)pm.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&oi)for(var s of oi(r))t.indexOf(s)<0&&fm.call(r,s)&&(e[s]=r[s]);return e};class RS extends Yt{constructor(...t){let e=t[0];e instanceof Ft&&(e={sprite:e,scale:t[1]});const s=e,{sprite:i,scale:n}=s,o=wS(s,["sprite","scale"]);let a=n!=null?n:20;typeof a=="number"&&(a=new j(a,a));const u=new st({uFilterMatrix:{value:new G,type:"mat3x3<f32>"},uScale:{value:a,type:"vec2<f32>"},uRotation:{value:new Float32Array([0,0,0,0]),type:"mat2x2<f32>"}}),l=Rt.from({vertex:dm,fragment:cm,name:"displacement-filter"}),h=Tt.from({vertex:{source:fa,entryPoint:"mainVertex"},fragment:{source:fa,entryPoint:"mainFragment"}}),c=i.texture.source;super(PS(AS({},o),{gpuProgram:h,glProgram:l,resources:{filterUniforms:u,uMapTexture:c,uMapSampler:c.style}})),this._sprite=e.sprite,this._sprite.renderable=!1;}apply(t,e,s,i){const n=this.resources.filterUniforms.uniforms;t.calculateSpriteMatrix(n.uFilterMatrix,this._sprite);const o=this._sprite.worldTransform,a=Math.sqrt(o.a*o.a+o.b*o.b),u=Math.sqrt(o.c*o.c+o.d*o.d);a!==0&&u!==0&&(n.uRotation[0]=o.a/a,n.uRotation[1]=o.b/a,n.uRotation[2]=o.c/u,n.uRotation[3]=o.d/u),this.resources.uMapTexture=this._sprite.texture.source,t.applyFilter(this,e,s,i);}get scale(){return this.resources.filterUniforms.uniforms.uScale}}var gm=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    finalColor = color;
}
`,ma=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct NoiseUniforms {
  uNoise:f32,
  uSeed:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> noiseUniforms : NoiseUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

fn rand(co:vec2<f32>) -> f32
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}



@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var pixelPosition =  globalTextureCoord(position.xy);// / (getSize());//-  gfu.uOutputFrame.xy);
  
    
    var sample = textureSample(uTexture, uSampler, uv);
    var randomValue =  rand(pixelPosition.xy * noiseUniforms.uSeed);
    var diff = (randomValue - 0.5) * noiseUniforms.uNoise;
  
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (sample.a > 0.0) {
      sample.r /= sample.a;
      sample.g /= sample.a;
      sample.b /= sample.a;
    }

    sample.r += diff;
    sample.g += diff;
    sample.b += diff;

    // Premultiply alpha again.
    sample.r *= sample.a;
    sample.g *= sample.a;
    sample.b *= sample.a;
    
    return sample;
}`,MS=Object.defineProperty,OS=Object.defineProperties,CS=Object.getOwnPropertyDescriptors,ai=Object.getOwnPropertySymbols,_m=Object.prototype.hasOwnProperty,xm=Object.prototype.propertyIsEnumerable,bm=(r,t,e)=>t in r?MS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,ga=(r,t)=>{for(var e in t||(t={}))_m.call(t,e)&&bm(r,e,t[e]);if(ai)for(var e of ai(t))xm.call(t,e)&&bm(r,e,t[e]);return r},GS=(r,t)=>OS(r,CS(t)),IS=(r,t)=>{var e={};for(var s in r)_m.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&ai)for(var s of ai(r))t.indexOf(s)<0&&xm.call(r,s)&&(e[s]=r[s]);return e};const vm=class Fx extends Yt{constructor(t={}){t=ga(ga({},Fx.defaultOptions),t);const e=Tt.from({vertex:{source:ma,entryPoint:"mainVertex"},fragment:{source:ma,entryPoint:"mainFragment"}}),s=Rt.from({vertex:ri,fragment:gm,name:"noise-filter"}),i=t,{noise:n,seed:o}=i,a=IS(i,["noise","seed"]);super(GS(ga({},a),{gpuProgram:e,glProgram:s,resources:{noiseUniforms:new st({uNoise:{value:1,type:"f32"},uSeed:{value:1,type:"f32"}})}})),this.noise=n,this.seed=o!=null?o:Math.random();}get noise(){return this.resources.noiseUniforms.uniforms.uNoise}set noise(t){this.resources.noiseUniforms.uniforms.uNoise=t;}get seed(){return this.resources.noiseUniforms.uniforms.uSeed}set seed(t){this.resources.noiseUniforms.uniforms.uSeed=t;}};vm.defaultOptions={noise:.5};let BS=vm;var ym=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha; 
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * uAlpha * clip);

    finalColor = original;
}
`,Tm=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,_a=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,  
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;

     var clip = step(3.5,
        step(maskClamp.x, filterUv.x) +
        step(maskClamp.y, filterUv.y) +
        step(filterUv.x, maskClamp.z) +
        step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);
    
    var npmAlpha = 0.0;

    var alphaMul = 1.0 - npmAlpha * (1.0 - mask.a);

    var a = (alphaMul * mask.r) * clip;

    return vec4(source.rgb, source.a) * a;
}`,FS=Object.defineProperty,DS=Object.defineProperties,US=Object.getOwnPropertyDescriptors,ui=Object.getOwnPropertySymbols,Sm=Object.prototype.hasOwnProperty,Em=Object.prototype.propertyIsEnumerable,Am=(r,t,e)=>t in r?FS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,kS=(r,t)=>{for(var e in t||(t={}))Sm.call(t,e)&&Am(r,e,t[e]);if(ui)for(var e of ui(t))Em.call(t,e)&&Am(r,e,t[e]);return r},LS=(r,t)=>DS(r,US(t)),$S=(r,t)=>{var e={};for(var s in r)Sm.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&ui)for(var s of ui(r))t.indexOf(s)<0&&Em.call(r,s)&&(e[s]=r[s]);return e};class Pm extends Yt{constructor(t){const e=t,{sprite:s}=e,i=$S(e,["sprite"]),n=new ln(s.texture),o=new st({uFilterMatrix:{value:new G,type:"mat3x3<f32>"},uMaskClamp:{value:n.uClampFrame,type:"vec4<f32>"},uAlpha:{value:1,type:"f32"}}),a=Tt.from({vertex:{source:_a,entryPoint:"mainVertex"},fragment:{source:_a,entryPoint:"mainFragment"}}),u=Rt.from({vertex:Tm,fragment:ym,name:"mask-filter"});super(LS(kS({},i),{gpuProgram:a,glProgram:u,resources:{filterUniforms:o,uMaskTexture:s.texture.source}})),this.sprite=s,this._textureMatrix=n;}apply(t,e,s,i){this._textureMatrix.texture=this.sprite.texture,t.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=this.sprite.texture.source,t.applyFilter(this,e,s,i);}}var NS=`fn getLuminosity(c: vec3<f32>) -> f32 {
  return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
}

fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32> {
  let d: f32 = lum - getLuminosity(c);
  let newColor: vec3<f32> = c.rgb + vec3<f32>(d, d, d);

  // clip back into legal range
  let newLum: f32 = getLuminosity(newColor);
  let cMin: f32 = min(newColor.r, min(newColor.g, newColor.b));
  let cMax: f32 = max(newColor.r, max(newColor.g, newColor.b));

  let t1: f32 = newLum / (newLum - cMin);
  let t2: f32 = (1.0 - newLum) / (cMax - newLum);

  let finalColor = mix(vec3<f32>(newLum, newLum, newLum), newColor, select(select(1.0, t2, cMax > 1.0), t1, cMin < 0.0));

  return finalColor;
}

fn getSaturation(c: vec3<f32>) -> f32 {
  return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
}

// Set saturation if color components are sorted in ascending order.
fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32> {
  var result: vec3<f32>;
  if (cSorted.z > cSorted.x) {
    let newY = (((cSorted.y - cSorted.x) * s) / (cSorted.z - cSorted.x));
    result = vec3<f32>(0.0, newY, s);
  } else {
    result = vec3<f32>(0.0, 0.0, 0.0);
  }
  return vec3<f32>(result.x, result.y, result.z);
}

fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32> {
    var result: vec3<f32> = c;

    if (c.r <= c.g && c.r <= c.b) {
        if (c.g <= c.b) {
            result = setSaturationMinMidMax(result, s);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.r, result.b, result.g);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.r, temp.b, temp.g);
        }
    } else if (c.g <= c.r && c.g <= c.b) {
        if (c.r <= c.b) {
            var temp: vec3<f32> = vec3<f32>(result.g, result.r, result.b);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.g, temp.r, temp.b);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.g, result.b, result.r);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.g, temp.b, temp.r);
        }
    } else {
        if (c.r <= c.g) {
            var temp: vec3<f32> = vec3<f32>(result.b, result.r, result.g);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.b, temp.r, temp.g);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.b, result.g, result.r);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.b, temp.g, temp.r);
        }
    }

    return result;
}`;class Yu{constructor(t=0,e=0,s=0,i=0,n=0,o=0){this.type="triangle",this.x=t,this.y=e,this.x2=s,this.y2=i,this.x3=n,this.y3=o;}contains(t,e){const s=(this.x-this.x3)*(e-this.y3)-(this.y-this.y3)*(t-this.x3),i=(this.x2-this.x)*(e-this.y)-(this.y2-this.y)*(t-this.x);if(s<0!=i<0&&s!==0&&i!==0)return !1;const n=(this.x3-this.x2)*(e-this.y2)-(this.y3-this.y2)*(t-this.x2);return n===0||n<0==s+i<=0}strokeContains(t,e,s){const i=s/2,n=i*i,{x:o,x2:a,x3:u,y:l,y2:h,y3:c}=this;return vr(t,e,o,l,a,c)<=n||vr(t,e,a,h,u,c)<=n||vr(t,e,u,c,o,l)<=n}clone(){return new Yu(this.x,this.y,this.x2,this.y2,this.x3,this.y3)}copyFrom(t){return this.x=t.x,this.y=t.y,this.x2=t.x2,this.y2=t.y2,this.x3=t.x3,this.y3=t.y3,this}copyTo(t){return t.copyFrom(this),t}getBounds(t){t=t||new H;const e=Math.min(this.x,this.x2,this.x3),s=Math.max(this.x,this.x2,this.x3),i=Math.min(this.y,this.y2,this.y3),n=Math.max(this.y,this.y2,this.y3);return t.x=e,t.y=i,t.width=s-e,t.height=n-i,t}}const wm=class Dx{constructor(t){this._tick=()=>{this.timeout=setTimeout(this._processQueue,0);},this._processQueue=()=>{const{queue:e}=this;let s=0;for(;e.length&&s<Dx.uploadsPerFrame;){const i=e.shift();this.uploadQueueItem(i),s++;}e.length?ht.system.addOnce(this._tick,this,Xt.UTILITY):this._resolve();},this.renderer=t,this.queue=[],this.resolves=[];}getQueue(){return [...this.queue]}add(t){const e=Array.isArray(t)?t:[t];for(const s of e)s instanceof W?this._addContainer(s):this.resolveQueueItem(s,this.queue);return this}_addContainer(t){this.resolveQueueItem(t,this.queue);for(const e of t.children)this._addContainer(e);}upload(t){return t&&this.add(t),new Promise(e=>{this.queue.length?(this.resolves.push(e),this.dedupeQueue(),ht.system.addOnce(this._tick,this,Xt.UTILITY)):e();})}dedupeQueue(){const t=Object.create(null);let e=0;for(let s=0;s<this.queue.length;s++){const i=this.queue[s];t[i.uid]||(t[i.uid]=!0,this.queue[e++]=i);}this.queue.length=e;}_resolve(){const{resolves:t}=this,e=t.slice(0);t.length=0;for(const s of e)s();}};wm.uploadsPerFrame=4;let Rm=wm;var HS=Object.defineProperty,li=Object.getOwnPropertySymbols,Mm=Object.prototype.hasOwnProperty,Om=Object.prototype.propertyIsEnumerable,Cm=(r,t,e)=>t in r?HS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,XS=(r,t)=>{for(var e in t||(t={}))Mm.call(t,e)&&Cm(r,e,t[e]);if(li)for(var e of li(t))Om.call(t,e)&&Cm(r,e,t[e]);return r},zS=(r,t)=>{var e={};for(var s in r)Mm.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&li)for(var s of li(r))t.indexOf(s)<0&&Om.call(r,s)&&(e[s]=r[s]);return e};const Gm=new Ee;class Lr extends W{constructor(...t){var e;let s=t[0];s instanceof Re&&(s={geometry:s,shader:t[1]},t[3]&&(s.geometry.topology=t[3]));const i=s,{geometry:n,shader:o,texture:a,roundPixels:u,state:l}=i,h=zS(i,["geometry","shader","texture","roundPixels","state"]);super(XS({label:"Mesh"},h)),this.renderPipeId="mesh",this.canBundle=!0,this._roundPixels=0,this.allowChildren=!1,this.shader=o,this.texture=(e=a!=null?a:o==null?void 0:o.texture)!=null?e:A.WHITE,this.state=l!=null?l:Ct.for2d(),this._geometry=n,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=u!=null?u:!1;}get roundPixels(){return !!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0;}get material(){return this._shader}set shader(t){this._shader!==t&&(this._shader=t,this.onViewUpdate());}get shader(){return this._shader}set geometry(t){var e;this._geometry!==t&&((e=this._geometry)==null||e.off("update",this.onViewUpdate,this),t.on("update",this.onViewUpdate,this),this._geometry=t,this.onViewUpdate());}get geometry(){return this._geometry}set texture(t){this._texture!==t&&(this.shader&&(this.shader.texture=t),this._texture=t,this.onViewUpdate());}get texture(){return this._texture}get batched(){return this._shader?!1:this._geometry instanceof Jt?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}addBounds(t){t.addBounds(this.geometry.bounds);}containsPoint(t){const{x:e,y:s}=t;if(!this.bounds.containsPoint(e,s))return !1;const i=this.geometry.getBuffer("aPosition").data,n=Gm.points,o=this.geometry.getIndex().data,a=o.length,u=this.geometry.topology==="triangle-strip"?3:1;for(let l=0;l+2<a;l+=u){const h=o[l]*2,c=o[l+1]*2,d=o[l+2]*2;if(n[0]=i[h],n[1]=i[h+1],n[2]=i[c],n[3]=i[c+1],n[4]=i[d],n[5]=i[d+1],Gm.contains(e,s))return !0}return !1}onViewUpdate(){this._didChangeId+=4096,!this.didViewUpdate&&(this.didViewUpdate=!0,this.renderGroup&&this.renderGroup.onChildViewUpdate(this));}destroy(t){var e;if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const s=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(s);}(e=this._geometry)==null||e.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null;}}class Vr extends Ft{constructor(t,e=!0){super(t[0]instanceof A?t[0]:t[0].texture),this._textures=null,this._durations=null,this._autoUpdate=e,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=t;}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(ht.shared.remove(this.update,this),this._isConnectedToTicker=!1));}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(ht.shared.add(this.update,this,Xt.HIGH),this._isConnectedToTicker=!0));}gotoAndStop(t){this.stop(),this.currentFrame=t;}gotoAndPlay(t){this.currentFrame=t,this.play();}update(t){if(!this._playing)return;const e=t.deltaTime,s=this.animationSpeed*e,i=this.currentFrame;if(this._durations!==null){let n=this._currentTime%1*this._durations[this.currentFrame];for(n+=s/60*1e3;n<0;)this._currentTime--,n+=this._durations[this.currentFrame];const o=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);n>=this._durations[this.currentFrame];)n-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=n/this._durations[this.currentFrame];}else this._currentTime+=s;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):i!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<i||this.animationSpeed<0&&this.currentFrame>i)&&this.onLoop(),this._updateTexture());}_updateTexture(){const t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this.texture=this._textures[t],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame));}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null;}static fromFrames(t){const e=[];for(let s=0;s<t.length;++s)e.push(A.from(t[s]));return new Vr(e)}static fromImages(t){const e=[];for(let s=0;s<t.length;++s)e.push(A.from(t[s]));return new Vr(e)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(t){if(t[0]instanceof A)this._textures=t,this._durations=null;else {this._textures=[],this._durations=[];for(let e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time);}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture();}get currentFrame(){let t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}set currentFrame(t){if(t<0||t>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this._updateTexture();}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(ht.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(ht.shared.add(this.update,this),this._isConnectedToTicker=!0));}}class Im{constructor({matrix:t,observer:e}={}){this.dirty=!0,this._matrix=t!=null?t:new G,this.observer=e,this.position=new rt(this,0,0),this.scale=new rt(this,1,1),this.pivot=new rt(this,0,0),this.skew=new rt(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1;}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){var e;this.dirty=!0,t===this.skew&&this.updateSkew(),(e=this.observer)==null||e._onUpdate(this);}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0;}setFromMatrix(t){t.decompose(this),this.dirty=!0;}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this.updateSkew());}}var jS=Object.defineProperty,hi=Object.getOwnPropertySymbols,Bm=Object.prototype.hasOwnProperty,Fm=Object.prototype.propertyIsEnumerable,Dm=(r,t,e)=>t in r?jS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,$r=(r,t)=>{for(var e in t||(t={}))Bm.call(t,e)&&Dm(r,e,t[e]);if(hi)for(var e of hi(t))Fm.call(t,e)&&Dm(r,e,t[e]);return r},WS=(r,t)=>{var e={};for(var s in r)Bm.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&hi)for(var s of hi(r))t.indexOf(s)<0&&Fm.call(r,s)&&(e[s]=r[s]);return e};const Um=class Oi extends W{constructor(...t){let e=t[0]||{};e instanceof A&&(e={texture:e}),t.length>1&&(e.width=t[1],e.height=t[2]),e=$r($r({},Oi.defaultOptions),e);const s=e!=null?e:{},{texture:i,anchor:n,tilePosition:o,tileScale:a,tileRotation:u,width:l,height:h,applyAnchorToTexture:c,roundPixels:d}=s,f=WS(s,["texture","anchor","tilePosition","tileScale","tileRotation","width","height","applyAnchorToTexture","roundPixels"]);super($r({label:"TilingSprite"},f)),this.renderPipeId="tilingSprite",this.canBundle=!0,this.batched=!0,this._roundPixels=0,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this.allowChildren=!1,this._anchor=new rt(this),this._applyAnchorToTexture=c,this.texture=i,this._width=l!=null?l:i.width,this._height=h!=null?h:i.height,this._tileTransform=new Im({observer:{_onUpdate:()=>this._onTilingSpriteUpdate()}}),n&&(this.anchor=n),this.tilePosition=o,this.tileScale=a,this.tileRotation=u,this.roundPixels=d!=null?d:!1;}static from(t,e={}){return typeof t=="string"?new Oi($r({texture:Y.get(t)},e)):new Oi($r({texture:t},e))}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t;}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t);}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t);}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t);}set tileRotation(t){this._tileTransform.rotation=t;}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}get roundPixels(){return !!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0;}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}set texture(t){this._texture!==t&&(this._texture=t,this._onTilingSpriteUpdate());}get texture(){return this._texture}set width(t){this._width=t,this._onTilingSpriteUpdate();}get width(){return this._width}set height(t){this._height=t,this._onTilingSpriteUpdate();}get height(){return this._height}_updateBounds(){const t=this._bounds,e=this._anchor,s=this._width,i=this._height;t.maxX=-e._x*s,t.minX=t.maxX+s,t.maxY=-e._y*i,t.minY=t.maxY+i;}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY);}containsPoint(t){const e=this.bounds.minX,s=this.bounds.minY,i=-e*this._anchor._x;let n=0;return t.x>=i&&t.x<=i+e&&(n=-s*this._anchor._y,t.y>=n&&t.y<=n+s)}_onTilingSpriteUpdate(){this._boundsDirty=!0,this._didTilingSpriteUpdate=!0,this._didChangeId+=4096,!this.didViewUpdate&&(this.didViewUpdate=!0,this.renderGroup&&this.renderGroup.onChildViewUpdate(this));}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t==null?void 0:t.texture){const e=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(e);}this._texture=null;}};Um.defaultOptions={texture:A.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let km=Um;var VS=Object.defineProperty,ci=Object.getOwnPropertySymbols,Lm=Object.prototype.hasOwnProperty,$m=Object.prototype.propertyIsEnumerable,Nm=(r,t,e)=>t in r?VS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,YS=(r,t)=>{for(var e in t||(t={}))Lm.call(t,e)&&Nm(r,e,t[e]);if(ci)for(var e of ci(t))$m.call(t,e)&&Nm(r,e,t[e]);return r},KS=(r,t)=>{var e={};for(var s in r)Lm.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&ci)for(var s of ci(r))t.indexOf(s)<0&&$m.call(r,s)&&(e[s]=r[s]);return e};class di extends W{constructor(t,e){const s=t,{text:i,resolution:n,style:o,anchor:a,width:u,height:l,roundPixels:h}=s,c=KS(s,["text","resolution","style","anchor","width","height","roundPixels"]);super(YS({},c)),this.batched=!0,this.resolution=null,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new lt,this._boundsDirty=!0,this._styleClass=e,this.text=i!=null?i:"",this.style=o,this.resolution=n!=null?n:null,this.allowChildren=!1,this._anchor=new rt({_onUpdate:()=>{this.onViewUpdate();}}),a&&(this.anchor=a),this.roundPixels=h!=null?h:!1,u&&(this.width=u),l&&(this.height=l);}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t);}get roundPixels(){return !!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0;}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate());}get text(){return this._text}get style(){return this._style}set style(t){var e;t=t||{},(e=this._style)==null||e.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate();}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width);}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height);}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){var s;let i,n;typeof t!="object"?(i=t,n=e!=null?e:t):(i=t.width,n=(s=t.height)!=null?s:t.width),i!==void 0&&this._setWidth(i,this.bounds.width),n!==void 0&&this._setHeight(n,this.bounds.height);}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY);}containsPoint(t){const e=this.bounds.maxX,s=this.bounds.maxY,i=-e*this.anchor.x;let n=0;return t.x>=i&&t.x<=i+e&&(n=-s*this.anchor.y,t.y>=n&&t.y<=n+s)}onViewUpdate(){this._didChangeId+=4096,!this.didViewUpdate&&(this.didViewUpdate=!0,this._didTextUpdate=!0,this._boundsDirty=!0,this.renderGroup&&this.renderGroup.onChildViewUpdate(this));}_getKey(){return `${this.text}:${this._style.styleKey}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,this._style.destroy(t),this._style=null,this._text=null;}}function pi(r,t){var e;let s=(e=r[0])!=null?e:{};return (typeof s=="string"||r[1])&&(s={text:s,style:r[1]}),s}class xa extends di{constructor(...t){const e=pi(t,"Text");super(e,Vt),this.renderPipeId="text";}_updateBounds(){const t=this._bounds,e=this._style.padding,s=this._anchor,i=It.measureText(this.text,this._style),{width:n,height:o}=i;t.minX=-s._x*n-e,t.maxX=t.minX+n,t.minY=-s._y*o-e,t.maxY=t.minY+o;}}class Hm extends Rm{resolveQueueItem(t,e){return t instanceof W?this.resolveContainerQueueItem(t,e):t instanceof et||t instanceof A?e.push(t.source):t instanceof Bt&&e.push(t),null}resolveContainerQueueItem(t,e){t instanceof Ft||t instanceof km||t instanceof Lr?e.push(t.texture.source):t instanceof xa?e.push(t):t instanceof Ye?e.push(t.context):t instanceof Vr&&t.textures.forEach(s=>{s.source?e.push(s.source):e.push(s.texture.source);});}resolveGraphicsContextQueueItem(t){this.renderer.graphicsContext.getContextRenderData(t);const{instructions:e}=t;for(const s of e)if(s.action==="texture"){const{image:i}=s.data;return i.source}else if(s.action==="fill"){const{texture:i}=s.data.style;return i.source}return null}}class Xm extends di{constructor(...t){var e,s,i;const n=pi(t,"BitmapText");(e=n.style)!=null||(n.style=n.style||{}),(i=(s=n.style).fill)!=null||(s.fill=16777215),super(n,Vt),this.renderPipeId="bitmapText";}_updateBounds(){const t=this._bounds,e=this._style.padding,s=this._anchor,i=Er.measureText(this.text,this._style),n=i.scale,o=i.offsetY*n,a=i.width*n,u=i.height*n;t.minX=-s._x*a-e,t.maxX=t.minX+a,t.minY=-s._y*(u+o)-e,t.maxY=t.minY+u;}}function zm(r){const t=r._stroke,e=r._fill,s=[`div { ${[`color: ${V.shared.setValue(e.color).toHex()}`,`font-size: ${r.fontSize}px`,`font-family: ${r.fontFamily}`,`font-weight: ${r.fontWeight}`,`font-style: ${r.fontStyle}`,`font-variant: ${r.fontVariant}`,`letter-spacing: ${r.letterSpacing}px`,`text-align: ${r.align}`,`padding: ${r.padding}px`,`white-space: ${r.whiteSpace==="pre"&&r.wordWrap?"pre-wrap":r.whiteSpace}`,...r.lineHeight?[`line-height: ${r.lineHeight}px`]:[],...r.wordWrap?[`word-wrap: ${r.breakWords?"break-all":"break-word"}`,`max-width: ${r.wordWrapWidth}px`]:[],...t?[Wm(t)]:[],...r.dropShadow?[jm(r.dropShadow)]:[],...r.cssOverrides].join(";")} }`];return qS(r.tagStyles,s),s.join(" ")}function jm(r){const t=V.shared.setValue(r.color).setAlpha(r.alpha).toHexa(),e=Math.round(Math.cos(r.angle)*r.distance),s=Math.round(Math.sin(r.angle)*r.distance),i=`${e}px ${s}px`;return r.blur>0?`text-shadow: ${i} ${r.blur}px ${t}`:`text-shadow: ${i} ${t}`}function Wm(r){return [`-webkit-text-stroke-width: ${r.width}px`,`-webkit-text-stroke-color: ${V.shared.setValue(r.color).toHex()}`,`text-stroke-width: ${r.width}px`,`text-stroke-color: ${V.shared.setValue(r.color).toHex()}`,"paint-order: stroke"].join(";")}const Vm={fontSize:"font-size: {{VALUE}}px",fontFamily:"font-family: {{VALUE}}",fontWeight:"font-weight: {{VALUE}}",fontStyle:"font-style: {{VALUE}}",fontVariant:"font-variant: {{VALUE}}",letterSpacing:"letter-spacing: {{VALUE}}px",align:"text-align: {{VALUE}}",padding:"padding: {{VALUE}}px",whiteSpace:"white-space: {{VALUE}}",lineHeight:"line-height: {{VALUE}}px",wordWrapWidth:"max-width: {{VALUE}}px"},Ym={fill:r=>`color: ${V.shared.setValue(r).toHex()}`,breakWords:r=>`word-wrap: ${r?"break-all":"break-word"}`,stroke:Wm,dropShadow:jm};function qS(r,t){for(const e in r){const s=r[e],i=[];for(const n in s)Ym[n]?i.push(Ym[n](s[n])):Vm[n]&&i.push(Vm[n].replace("{{VALUE}}",s[n]));t.push(`${e} { ${i.join(";")} }`);}}class Ve extends Vt{constructor(t={}){var e,s;super(t),this._cssOverrides=[],(e=this.cssOverrides)!=null||(this.cssOverrides=t.cssOverrides),this.tagStyles=(s=t.tagStyles)!=null?s:{};}set cssOverrides(t){this._cssOverrides=t instanceof Array?t:[t],this.update();}get cssOverrides(){return this._cssOverrides}_generateKey(){return this._styleKey=ho(this)+this._cssOverrides.join("-"),this._styleKey}update(){this._cssStyle=null,super.update();}clone(){return new Ve({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth,cssOverrides:this.cssOverrides})}get cssStyle(){return this._cssStyle||(this._cssStyle=zm(this)),this._cssStyle}addOverride(...t){const e=t.filter(s=>!this.cssOverrides.includes(s));e.length>0&&(this.cssOverrides.push(...e),this.update());}removeOverride(...t){const e=t.filter(s=>this.cssOverrides.includes(s));e.length>0&&(this.cssOverrides=this.cssOverrides.filter(s=>!e.includes(s)),this.update());}set fill(t){super.fill=t;}set stroke(t){super.stroke=t;}}class Km extends di{constructor(...t){const e=pi(t,"HtmlText");super(e,Ve),this.renderPipeId="htmlText";}_updateBounds(){const t=this._bounds,e=this._style.padding,s=this._anchor,i=Io(this.text,this._style),{width:n,height:o}=i;t.minX=-s._x*n-e,t.maxX=t.minX+n,t.minY=-s._y*o-e,t.maxY=t.minY+o;}}class qm extends Hm{uploadQueueItem(t){t instanceof et?this.uploadTextureSource(t):t instanceof xa?this.uploadText(t):t instanceof Km?this.uploadHTMLText(t):t instanceof Xm?this.uploadBitmapText(t):t instanceof Bt&&this.uploadGraphicsContext(t);}uploadTextureSource(t){this.renderer.texture.initSource(t);}uploadText(t){this.renderer.renderPipes.text.initGpuText(t);}uploadBitmapText(t){this.renderer.renderPipes.bitmapText.initGpuText(t);}uploadHTMLText(t){this.renderer.renderPipes.htmlText.initGpuText(t);}uploadGraphicsContext(t){this.renderer.graphicsContext.getContextRenderData(t);const{instructions:e}=t;for(const s of e)if(s.action==="texture"){const{image:i}=s.data;this.uploadTextureSource(i.source);}else if(s.action==="fill"){const{texture:i}=s.data.style;this.uploadTextureSource(i.source);}return null}}class Zm extends qm{destroy(){clearTimeout(this.timeout),this.renderer=null,this.queue=null,this.resolves=null;}}Zm.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:"prepare"};class ba{constructor(){this._didUpload=!1,this._tempState=Ct.for2d();}init(t){const e=Fe({name:"batch",bits:[Us,Ls(wt),Ue]});this._shader=new St({glProgram:e,resources:{batchSamplers:$s}}),t.renderer.runners.contextChange.add(this);}contextChange(){this._didUpload=!1;}start(t,e){const s=t.renderer;s.shader.bind(this._shader,this._didUpload),s.shader.updateUniformGroup(s.globalUniforms.uniformGroup),s.geometry.bind(e,this._shader.glProgram);}execute(t,e){const s=t.renderer;this._didUpload=!0,this._tempState.blendMode=e.blendMode,s.state.set(this._tempState);const i=e.textures.textures;for(let n=0;n<i.length;n++)s.texture.bind(i[n],n);s.geometry.draw("triangle-list",e.size,e.start);}destroy(){this._shader.destroy(!0),this._shader=null;}}ba.extension={type:[b.WebGLPipesAdaptor],name:"batch"};function ZS(r){const t=[];let e=0;for(let s=0;s<r;s++)t[e]={texture:{sampleType:"float",viewDimension:"2d",multisampled:!1},binding:e,visibility:GPUShaderStage.FRAGMENT},e++,t[e]={sampler:{type:"filtering"},binding:e,visibility:GPUShaderStage.FRAGMENT},e++;return t}function QS(r){const t={};let e=0;for(let s=0;s<r;s++)t[`textureSource${s+1}`]=e++,t[`textureSampler${s+1}`]=e++;return t}const fi=Ct.for2d();class va{init(){const t=Be({name:"batch",bits:[Ds,ks(wt),De]});this._shader=new St({gpuProgram:t,groups:{}});}start(t,e){const s=t.renderer,i=s.encoder,n=this._shader.gpuProgram;this._geometry=e,i.setGeometry(e),fi.blendMode="normal",s.pipeline.getPipeline(e,n,fi);const o=s.globalUniforms.bindGroup;i.resetBindGroup(1),i.setBindGroup(0,o,n);}execute(t,e){const s=this._shader.gpuProgram,i=t.renderer,n=i.encoder;if(!e.bindGroup){const u=e.textures;e.bindGroup=ms(u.textures,u.count);}fi.blendMode=e.blendMode;const o=i.bindGroup.getBindGroup(e.bindGroup,s,1),a=i.pipeline.getPipeline(this._geometry,s,fi);e.bindGroup._touch(i.textureGC.count),n.setPipeline(a),n.renderPassEncoder.setBindGroup(1,o),n.renderPassEncoder.drawIndexed(e.size,1,e.start);}destroy(){this._shader.destroy(!0),this._shader=null;}}va.extension={type:[b.WebGPUPipesAdaptor],name:"batch"};class ya{constructor(t,e){this.state=Ct.for2d(),this._batches=Object.create(null),this._geometries=Object.create(null),this.renderer=t,this._adaptor=e,this._adaptor.init(this);}buildStart(t){if(!this._batches[t.uid]){const e=new En;this._batches[t.uid]=e,this._geometries[e.uid]=new bn;}this._activeBatch=this._batches[t.uid],this._activeGeometry=this._geometries[this._activeBatch.uid],this._activeBatch.begin();}addToBatch(t){this._activeBatch.add(t);}break(t){this._activeBatch.break(t);}buildEnd(t){const e=this._activeBatch,s=this._activeGeometry;e.finish(t),s.indexBuffer.setDataWithSize(e.indexBuffer,e.indexSize,!0),s.buffers[0].setDataWithSize(e.attributeBuffer.float32View,e.attributeSize,!1);}upload(t){const e=this._batches[t.uid],s=this._geometries[e.uid];e.dirty&&(e.dirty=!1,s.buffers[0].update(e.attributeSize*4));}execute(t){if(t.action==="startBatch"){const e=t.batcher,s=this._geometries[e.uid];this._adaptor.start(this,s);}this._adaptor.execute(this,t);}destroy(){this.state=null,this.renderer=null,this._adaptor.destroy(),this._adaptor=null;for(const t in this._batches)this._batches[t].destroy();this._batches=null;for(const t in this._geometries)this._geometries[t].destroy();this._geometries=null;}}ya.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"batch"};function JS(r){const t=r.split(/([\n{}])/g).map(s=>s.trim()).filter(s=>s.length);let e="";return t.map(s=>{let i=e+s;return s==="{"?e+="    ":s==="}"&&(e=e.substr(0,e.length-4),i=e+s),i}).join(`
`)}const Qm={name:"texture-bit",fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},Jm={name:"texture-bit",fragment:{header:`
        uniform sampler2D uTexture;

         
        `,main:`
            outColor = texture(uTexture, vUV);
        `}};function tg(r,t){const e=r.root,s=r.instructionSet;s.reset(),t.batch.buildStart(s),t.blendMode.buildStart(),t.colorMask.buildStart(),e.sortableChildren&&e.sortChildren(),eg(e,s,t,!0),t.batch.buildEnd(s),t.blendMode.buildEnd(s);}function Nr(r,t,e){r.globalDisplayStatus<7||!r.includeInBuild||(r.sortableChildren&&r.sortChildren(),r.isSimple?t2(r,t,e):eg(r,t,e,!1));}function t2(r,t,e){if(r.renderPipeId&&(e.blendMode.setBlendMode(r,r.groupBlendMode,t),r.didViewUpdate=!1,e[r.renderPipeId].addRenderable(r,t)),!r.isRenderGroupRoot){const s=r.children,i=s.length;for(let n=0;n<i;n++)Nr(s[n],t,e);}}function eg(r,t,e,s){if(!s&&r.isRenderGroupRoot)e.renderGroup.addRenderGroup(r.renderGroup,t);else {for(let o=0;o<r.effects.length;o++){const a=r.effects[o];e[a.pipe].push(a,r,t);}const i=r.renderPipeId;i&&(e.blendMode.setBlendMode(r,r.groupBlendMode,t),r.didViewUpdate=!1,e[i].addRenderable(r,t));const n=r.children;if(n.length)for(let o=0;o<n.length;o++)Nr(n[o],t,e);for(let o=r.effects.length-1;o>=0;o--){const a=r.effects[o];e[a.pipe].pop(a,r,t);}}}const e2=new lt;class r2 extends Jr{constructor(){super({filters:[new Pm({sprite:new Ft(A.EMPTY)})]});}get sprite(){return this.filters[0].sprite}set sprite(t){this.filters[0].sprite=t;}}class Ta{constructor(t){this._activeMaskStage=[],this._renderer=t;}push(t,e,s){const i=this._renderer;if(i.renderPipes.batch.break(s),s.add({renderPipeId:"alphaMask",action:"pushMaskBegin",mask:t,canBundle:!1,maskedContainer:e}),t.renderMaskToTexture){const n=t.mask;n.includeInBuild=!0,Nr(n,s,i.renderPipes),n.includeInBuild=!1;}i.renderPipes.batch.break(s),s.add({renderPipeId:"alphaMask",action:"pushMaskEnd",mask:t,maskedContainer:e,canBundle:!1});}pop(t,e,s){this._renderer.renderPipes.batch.break(s),s.add({renderPipeId:"alphaMask",action:"popMaskEnd",mask:t,canBundle:!1});}execute(t){const e=this._renderer,s=t.mask.renderMaskToTexture;if(t.action==="pushMaskBegin"){const i=X.get(r2);if(s){t.mask.mask.measurable=!0;const n=sr(t.mask.mask,!0,e2);t.mask.mask.measurable=!1,n.ceil();const o=ut.getOptimalTexture(n.width,n.height,1,!1);e.renderTarget.push(o,!0),e.globalUniforms.push({offset:n,worldColor:4294967295});const a=i.sprite;a.texture=o,a.worldTransform.tx=n.minX,a.worldTransform.ty=n.minY,this._activeMaskStage.push({filterEffect:i,maskedContainer:t.maskedContainer,filterTexture:o});}else i.sprite=t.mask.mask,this._activeMaskStage.push({filterEffect:i,maskedContainer:t.maskedContainer});}else if(t.action==="pushMaskEnd"){const i=this._activeMaskStage[this._activeMaskStage.length-1];s&&(e.renderTarget.pop(),e.globalUniforms.pop()),e.filter.push({renderPipeId:"filter",action:"pushFilter",container:i.maskedContainer,filterEffect:i.filterEffect,canBundle:!1});}else if(t.action==="popMaskEnd"){e.filter.pop();const i=this._activeMaskStage.pop();s&&ut.returnTexture(i.filterTexture),X.return(i.filterEffect);}}destroy(){this._renderer=null,this._activeMaskStage=null;}}Ta.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"alphaMask"};class Sa{constructor(t){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=t;}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15;}push(t,e,s){this._renderer.renderPipes.batch.break(s);const i=this._colorStack;i[this._colorStackIndex]=i[this._colorStackIndex-1]&t.mask;const n=this._colorStack[this._colorStackIndex];n!==this._currentColor&&(this._currentColor=n,s.add({renderPipeId:"colorMask",colorMask:n,canBundle:!1})),this._colorStackIndex++;}pop(t,e,s){this._renderer.renderPipes.batch.break(s);const i=this._colorStack;this._colorStackIndex--;const n=i[this._colorStackIndex-1];n!==this._currentColor&&(this._currentColor=n,s.add({renderPipeId:"colorMask",colorMask:n,canBundle:!1}));}execute(t){this._renderer.colorMask.setMask(t.colorMask);}destroy(){this._colorStack=null;}}Sa.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"colorMask"};class s2{constructor(t){this.priority=0,this.pipe="scissorMask",this.mask=t,this.mask.renderable=!1,this.mask.measurable=!1;}addBounds(t,e){ds(this.mask,t,e);}addLocalBounds(t,e){ps(this.mask,t,e);}containsPoint(t,e){const s=this.mask;return e(s,t)}reset(){this.mask.measurable=!0,this.mask=null;}destroy(){this.reset();}}class Ea{constructor(t){this._maskStackHash={},this._maskHash=new WeakMap,this._renderer=t;}push(t,e,s){var i,n;const o=t,a=this._renderer;a.renderPipes.batch.break(s),a.renderPipes.blendMode.setBlendMode(o.mask,"none",s),s.add({renderPipeId:"stencilMask",action:"pushMaskBegin",mask:t,canBundle:!1});const u=o.mask;u.includeInBuild=!0,this._maskHash.has(o)||this._maskHash.set(o,{instructionsStart:0,instructionsLength:0});const l=this._maskHash.get(o);l.instructionsStart=s.instructionSize,Nr(u,s,a.renderPipes),u.includeInBuild=!1,a.renderPipes.batch.break(s),s.add({renderPipeId:"stencilMask",action:"pushMaskEnd",mask:t,canBundle:!1});const h=s.instructionSize-l.instructionsStart-1;l.instructionsLength=h;const c=a.renderTarget.renderTarget.uid;(n=(i=this._maskStackHash)[c])!=null||(i[c]=0);}pop(t,e,s){const i=t,n=this._renderer;n.renderPipes.batch.break(s),n.renderPipes.blendMode.setBlendMode(i.mask,"none",s),s.add({renderPipeId:"stencilMask",action:"popMaskBegin",canBundle:!1});const o=this._maskHash.get(t);for(let a=0;a<o.instructionsLength;a++)s.instructions[s.instructionSize++]=s.instructions[o.instructionsStart++];s.add({renderPipeId:"stencilMask",action:"popMaskEnd",canBundle:!1});}execute(t){var e,s;const i=this._renderer,n=i.renderTarget.renderTarget.uid;let o=(s=(e=this._maskStackHash)[n])!=null?s:e[n]=0;t.action==="pushMaskBegin"?(i.renderTarget.ensureDepthStencil(),o++,i.stencil.setStencilMode(nt.RENDERING_MASK_ADD,o),i.colorMask.setMask(0)):t.action==="pushMaskEnd"?(i.stencil.setStencilMode(nt.MASK_ACTIVE,o),i.colorMask.setMask(15)):t.action==="popMaskBegin"?(o--,i.colorMask.setMask(0),o!==0?i.stencil.setStencilMode(nt.RENDERING_MASK_REMOVE,o):(i.renderTarget.clear(null,dt.STENCIL),i.stencil.setStencilMode(nt.DISABLED,o))):t.action==="popMaskEnd"&&(i.stencil.setStencilMode(nt.MASK_ACTIVE,o),i.colorMask.setMask(15)),this._maskStackHash[n]=o;}destroy(){this._renderer=null,this._maskStackHash=null,this._maskHash=null;}}Ea.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"stencilMask"};var Hr=(r=>(r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",r))(Hr||{});class rg{constructor(t,e){this.buffer=t||null,this.updateID=-1,this.byteLength=-1,this.type=e;}}class Aa{constructor(t){this._gpuBuffers=Object.create(null),this._boundBufferBases=Object.create(null),this._renderer=t;}destroy(){this._renderer=null,this._gl=null,this._gpuBuffers=null,this._boundBufferBases=null;}contextChange(){this._gpuBuffers=Object.create(null),this._gl=this._renderer.gl;}getGlBuffer(t){return this._gpuBuffers[t.uid]||this.createGLBuffer(t)}bind(t){const{_gl:e}=this,s=this.getGlBuffer(t);e.bindBuffer(s.type,s.buffer);}bindBufferBase(t,e){const{_gl:s}=this;if(this._boundBufferBases[e]!==t){const i=this.getGlBuffer(t);this._boundBufferBases[e]=t,s.bindBufferBase(s.UNIFORM_BUFFER,e,i.buffer);}}bindBufferRange(t,e,s){const{_gl:i}=this;s=s||0;const n=this.getGlBuffer(t);i.bindBufferRange(i.UNIFORM_BUFFER,e||0,n.buffer,s*256,256);}updateBuffer(t){const{_gl:e}=this,s=this.getGlBuffer(t);if(t._updateID===s.updateID)return s;s.updateID=t._updateID,e.bindBuffer(s.type,s.buffer);const i=t.data;if(s.byteLength>=t.data.byteLength)e.bufferSubData(s.type,0,i,0,t._updateSize/i.BYTES_PER_ELEMENT);else {const n=t.descriptor.usage&$.STATIC?e.STATIC_DRAW:e.DYNAMIC_DRAW;s.byteLength=i.byteLength,e.bufferData(s.type,i,n);}return s}destroyAll(){const t=this._gl;for(const e in this._gpuBuffers)t.deleteBuffer(this._gpuBuffers[e].buffer);this._gpuBuffers=Object.create(null);}onBufferDestroy(t,e){const s=this._gpuBuffers[t.uid],i=this._gl;e||i.deleteBuffer(s.buffer),this._gpuBuffers[t.uid]=null;}createGLBuffer(t){const{_gl:e}=this;let s=Hr.ARRAY_BUFFER;t.descriptor.usage&$.INDEX?s=Hr.ELEMENT_ARRAY_BUFFER:t.descriptor.usage&$.UNIFORM&&(s=Hr.UNIFORM_BUFFER);const i=new rg(e.createBuffer(),s);return this._gpuBuffers[t.uid]=i,t.on("destroy",this.onBufferDestroy,this),i}}Aa.extension={type:[b.WebGLSystem],name:"buffer"};var i2=Object.defineProperty,n2=Object.defineProperties,o2=Object.getOwnPropertyDescriptors,sg=Object.getOwnPropertySymbols,a2=Object.prototype.hasOwnProperty,u2=Object.prototype.propertyIsEnumerable,ig=(r,t,e)=>t in r?i2(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,mi=(r,t)=>{for(var e in t||(t={}))a2.call(t,e)&&ig(r,e,t[e]);if(sg)for(var e of sg(t))u2.call(t,e)&&ig(r,e,t[e]);return r},ng=(r,t)=>n2(r,o2(t));const Pa=class Ux{constructor(t){this.supports={uint32Indices:!0,uniformBufferObject:!0,vertexArrayObject:!0,srgbTextures:!0,nonPowOf2wrapping:!0,msaa:!0,nonPowOf2mipmaps:!0},this._renderer=t,this.extensions=Object.create(null),this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this);}get isLost(){return !this.gl||this.gl.isContextLost()}contextChange(t){this.gl=t,this._renderer.gl=t;}init(t){var e,s;if(t=mi(mi({},Ux.defaultOptions),t),t.context)this.initFromContext(t.context);else {const i=this._renderer.background.alpha<1,n=(e=t.premultipliedAlpha)!=null?e:!0,o=t.antialias&&!this._renderer.backBuffer.useBackBuffer;this.createContext(t.preferWebGLVersion,{alpha:i,premultipliedAlpha:n,antialias:o,stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:(s=t.powerPreference)!=null?s:"default"});}}initFromContext(t){this.gl=t,this.webGLVersion=t instanceof WebGL2RenderingContext?2:1,this.getExtensions(),this.validateContext(t),this._renderer.runners.contextChange.emit(t);const e=this._renderer.view.canvas;e.addEventListener("webglcontextlost",this.handleContextLost,!1),e.addEventListener("webglcontextrestored",this.handleContextRestored,!1);}createContext(t,e){let s;const i=this._renderer.view.canvas;if(t===2&&(s=i.getContext("webgl2",e)),!s&&(s=i.getContext("webgl",e),!s))throw new Error("This browser does not support WebGL. Try using the canvas renderer");this.gl=s,this.initFromContext(this.gl);}getExtensions(){const{gl:t}=this,e={anisotropicFiltering:t.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc"),bptc:t.getExtension("EXT_texture_compression_bptc"),rgtc:t.getExtension("EXT_texture_compression_rgtc"),loseContext:t.getExtension("WEBGL_lose_context")};this.webGLVersion===1?this.extensions=ng(mi({},e),{drawBuffers:t.getExtension("WEBGL_draw_buffers"),depthTexture:t.getExtension("WEBGL_depth_texture"),vertexArrayObject:t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:t.getExtension("OES_element_index_uint"),floatTexture:t.getExtension("OES_texture_float"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),textureHalfFloat:t.getExtension("OES_texture_half_float"),textureHalfFloatLinear:t.getExtension("OES_texture_half_float_linear"),vertexAttribDivisorANGLE:t.getExtension("ANGLE_instanced_arrays"),srgb:t.getExtension("EXT_sRGB")}):this.extensions=ng(mi({},e),{colorBufferFloat:t.getExtension("EXT_color_buffer_float")});}handleContextLost(t){t.preventDefault(),this._contextLossForced&&(this._contextLossForced=!1,setTimeout(()=>{var e;this.gl.isContextLost()&&((e=this.extensions.loseContext)==null||e.restoreContext());},0));}handleContextRestored(){this._renderer.runners.contextChange.emit(this.gl);}destroy(){var t;const e=this._renderer.view.canvas;this._renderer=null,e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),(t=this.extensions.loseContext)==null||t.loseContext();}forceContextLoss(){var t;(t=this.extensions.loseContext)==null||t.loseContext(),this._contextLossForced=!0;}validateContext(t){const e=t.getContextAttributes();e&&e.stencil;const s=this.supports,i=this.webGLVersion===2,n=this.extensions;s.uint32Indices=i||!!n.uint32ElementIndex,s.uniformBufferObject=i,s.vertexArrayObject=i||!!n.vertexArrayObject,s.srgbTextures=i||!!n.srgb,s.nonPowOf2wrapping=i,s.nonPowOf2mipmaps=i,s.msaa=i,s.uint32Indices;}};Pa.extension={type:[b.WebGLSystem],name:"context"},Pa.defaultOptions={context:null,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:void 0,preferWebGLVersion:2};let og=Pa,wa=0;const ag=500;function gi(...r){wa!==ag&&(wa++,wa===ag?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...r));}function Ra(r,t){var e,s,i,n;for(const o in r.attributes){const a=r.attributes[o],u=t[o];u?((e=a.location)!=null||(a.location=u.location),(s=a.format)!=null||(a.format=u.format),(i=a.offset)!=null||(a.offset=u.offset),(n=a.instance)!=null||(a.instance=u.instance)):gi(`Attribute ${o} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`);}l2(r);}function l2(r){var t,e;const{buffers:s,attributes:i}=r,n={},o={};for(const a in s){const u=s[a];n[u.uid]=0,o[u.uid]=0;}for(const a in i){const u=i[a];n[u.buffer.uid]+=Ge(u.format).stride;}for(const a in i){const u=i[a];(t=u.stride)!=null||(u.stride=n[u.buffer.uid]),(e=u.start)!=null||(u.start=o[u.buffer.uid]),o[u.buffer.uid]+=Ge(u.format).stride;}}var _i=(r=>(r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL",r))(_i||{}),Ma=(r=>(r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",r))(Ma||{}),ug=(r=>(r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",r))(ug||{}),N=(r=>(r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT",r))(N||{});const lg={uint8x2:N.UNSIGNED_BYTE,uint8x4:N.UNSIGNED_BYTE,sint8x2:N.BYTE,sint8x4:N.BYTE,unorm8x2:N.UNSIGNED_BYTE,unorm8x4:N.UNSIGNED_BYTE,snorm8x2:N.BYTE,snorm8x4:N.BYTE,uint16x2:N.UNSIGNED_SHORT,uint16x4:N.UNSIGNED_SHORT,sint16x2:N.SHORT,sint16x4:N.SHORT,unorm16x2:N.UNSIGNED_SHORT,unorm16x4:N.UNSIGNED_SHORT,snorm16x2:N.SHORT,snorm16x4:N.SHORT,float16x2:N.HALF_FLOAT,float16x4:N.HALF_FLOAT,float32:N.FLOAT,float32x2:N.FLOAT,float32x3:N.FLOAT,float32x4:N.FLOAT,uint32:N.UNSIGNED_INT,uint32x2:N.UNSIGNED_INT,uint32x3:N.UNSIGNED_INT,uint32x4:N.UNSIGNED_INT,sint32:N.INT,sint32x2:N.INT,sint32x3:N.INT,sint32x4:N.INT};function hg(r){var t;return (t=lg[r])!=null?t:lg.float32}const h2={"point-list":0,"line-list":1,"line-strip":3,"triangle-list":4,"triangle-strip":5};class Oa{constructor(t){this._geometryVaoHash=Object.create(null),this._renderer=t,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0;}contextChange(){const t=this.gl=this._renderer.gl;if(!this._renderer.context.supports.vertexArrayObject)throw new Error("[PixiJS] Vertex Array Objects are not supported on this device");const e=this._renderer.context.extensions.vertexArrayObject;e&&(t.createVertexArray=()=>e.createVertexArrayOES(),t.bindVertexArray=i=>e.bindVertexArrayOES(i),t.deleteVertexArray=i=>e.deleteVertexArrayOES(i));const s=this._renderer.context.extensions.vertexAttribDivisorANGLE;s&&(t.drawArraysInstanced=(i,n,o,a)=>{s.drawArraysInstancedANGLE(i,n,o,a);},t.drawElementsInstanced=(i,n,o,a,u)=>{s.drawElementsInstancedANGLE(i,n,o,a,u);},t.vertexAttribDivisor=(i,n)=>s.vertexAttribDivisorANGLE(i,n)),this._activeGeometry=null,this._activeVao=null,this._geometryVaoHash=Object.create(null);}bind(t,e){const s=this.gl;this._activeGeometry=t;const i=this.getVao(t,e);this._activeVao!==i&&(this._activeVao=i,s.bindVertexArray(i)),this.updateBuffers();}reset(){this.unbind();}updateBuffers(){const t=this._activeGeometry,e=this._renderer.buffer;for(let s=0;s<t.buffers.length;s++){const i=t.buffers[s];e.updateBuffer(i);}}checkCompatibility(t,e){const s=t.attributes,i=e._attributeData;for(const n in i)if(!s[n])throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`)}getSignature(t,e){const s=t.attributes,i=e._attributeData,n=["g",t.uid];for(const o in s)i[o]&&n.push(o,i[o].location);return n.join("-")}getVao(t,e){var s;return ((s=this._geometryVaoHash[t.uid])==null?void 0:s[e._key])||this.initGeometryVao(t,e)}initGeometryVao(t,e,s=!0){const i=this._renderer.gl,n=this._renderer.buffer;this._renderer.shader._getProgramData(e),this.checkCompatibility(t,e);const o=this.getSignature(t,e);this._geometryVaoHash[t.uid]||(this._geometryVaoHash[t.uid]=Object.create(null),t.on("destroy",this.onGeometryDestroy,this));const a=this._geometryVaoHash[t.uid];let u=a[o];if(u)return a[e._key]=u,u;Ra(t,e._attributeData);const l=t.buffers;u=i.createVertexArray(),i.bindVertexArray(u);for(let h=0;h<l.length;h++){const c=l[h];n.bind(c);}return this.activateVao(t,e),a[e._key]=u,a[o]=u,i.bindVertexArray(null),u}onGeometryDestroy(t,e){const s=this._geometryVaoHash[t.uid],i=this.gl;if(s){if(e)for(const n in s)this._activeVao!==s[n]&&this.unbind(),i.deleteVertexArray(s[n]);this._geometryVaoHash[t.uid]=null;}}destroyAll(t=!1){const e=this.gl;for(const s in this._geometryVaoHash){if(t)for(const i in this._geometryVaoHash[s]){const n=this._geometryVaoHash[s];this._activeVao!==n&&this.unbind(),e.deleteVertexArray(n[i]);}this._geometryVaoHash[s]=null;}}activateVao(t,e){const s=this._renderer.gl,i=this._renderer.buffer,n=t.attributes;t.indexBuffer&&i.bind(t.indexBuffer);let o=null;for(const a in n){const u=n[a],l=u.buffer,h=i.getGlBuffer(l);if(e._attributeData[a]){o!==h&&(i.bind(l),o=h);const c=u.location;s.enableVertexAttribArray(c);const d=Ge(u.format);if(s.vertexAttribPointer(c,d.size,hg(u.format),d.normalised,u.stride,u.offset),u.instance)if(this.hasInstance)s.vertexAttribDivisor(c,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}}draw(t,e,s,i){const{gl:n}=this._renderer,o=this._activeGeometry,a=h2[o.topology||t];if(i||(i=o.instanceCount),o.indexBuffer){const u=o.indexBuffer.data.BYTES_PER_ELEMENT,l=u===2?n.UNSIGNED_SHORT:n.UNSIGNED_INT;i>1?n.drawElementsInstanced(a,e||o.indexBuffer.data.length,l,(s||0)*u,i):n.drawElements(a,e||o.indexBuffer.data.length,l,(s||0)*u);}else i>1?n.drawArraysInstanced(a,s||0,e||o.getSize(),i):n.drawArrays(a,s||0,e||o.getSize());return this}unbind(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null;}destroy(){this._renderer=null,this.gl=null,this._activeVao=null,this._activeGeometry=null;}}Oa.extension={type:[b.WebGLSystem],name:"geometry"};var c2=Object.defineProperty,cg=Object.getOwnPropertySymbols,d2=Object.prototype.hasOwnProperty,p2=Object.prototype.propertyIsEnumerable,dg=(r,t,e)=>t in r?c2(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,pg=(r,t)=>{for(var e in t||(t={}))d2.call(t,e)&&dg(r,e,t[e]);if(cg)for(var e of cg(t))p2.call(t,e)&&dg(r,e,t[e]);return r};const f2=new Re({attributes:{aPosition:[-1,-1,3,-1,-1,3]}}),Ca=class kx{constructor(t){this.useBackBuffer=!1,this._useBackBufferThisRender=!1,this._renderer=t;}init(t={}){const{useBackBuffer:e,antialias:s}=pg(pg({},kx.defaultOptions),t);this.useBackBuffer=e,this._antialias=s,this._renderer.context.supports.msaa||(gi("antialiasing, is not supported on when using the back buffer"),this._antialias=!1),this._state=Ct.for2d();const i=new Rt({vertex:`
                attribute vec2 aPosition;
                out vec2 vUv;
        
                void main() {
                    gl_Position = gl_Position = vec4(aPosition, 0.0, 1.0);
        
                    vUv = (aPosition + 1.0) / 2.0;
        
                    // flip dem UVs
                    vUv.y = 1.0 - vUv.y;
                }`,fragment:`
                in vec2 vUv;
                out vec4 finalColor;
        
                uniform sampler2D uTexture;
        
                void main() {
                    finalColor = texture(uTexture, vUv);
                }`,name:"big-triangle"});this._bigTriangleShader=new St({glProgram:i,resources:{uTexture:A.WHITE.source}});}renderStart(t){const e=this._renderer.renderTarget.getRenderTarget(t.target);if(this._useBackBufferThisRender=this.useBackBuffer&&!!e.isRoot,this._useBackBufferThisRender){const s=this._renderer.renderTarget.getRenderTarget(t.target);this._targetTexture=s.colorTexture,t.target=this._getBackBufferTexture(s.colorTexture);}}renderEnd(){this._presentBackBuffer();}_presentBackBuffer(){const t=this._renderer;t.renderTarget.finishRenderPass(),this._useBackBufferThisRender&&(t.renderTarget.bind(this._targetTexture,!1),this._bigTriangleShader.resources.uTexture=this._backBufferTexture.source,t.encoder.draw({geometry:f2,shader:this._bigTriangleShader,state:this._state}));}_getBackBufferTexture(t){return this._backBufferTexture=this._backBufferTexture||new A({source:new et({width:t.width,height:t.height,resolution:t._resolution,antialias:this._antialias})}),this._backBufferTexture.source.resize(t.width,t.height,t._resolution),this._backBufferTexture}destroy(){this._backBufferTexture&&(this._backBufferTexture.destroy(),this._backBufferTexture=null);}};Ca.extension={type:[b.WebGLSystem],name:"backBuffer",priority:1},Ca.defaultOptions={useBackBuffer:!1};let fg=Ca;class Ga{constructor(t){this._colorMaskCache=15,this._renderer=t;}setMask(t){this._colorMaskCache!==t&&(this._colorMaskCache=t,this._renderer.gl.colorMask(!!(t&8),!!(t&4),!!(t&2),!!(t&1)));}}Ga.extension={type:[b.WebGLSystem],name:"colorMask"};class Ia{constructor(t){this.commandFinished=Promise.resolve(),this._renderer=t;}setGeometry(t,e){this._renderer.geometry.bind(t,e.glProgram);}finishRenderPass(){}draw(t){const e=this._renderer,{geometry:s,shader:i,state:n,skipSync:o,topology:a,size:u,start:l,instanceCount:h}=t;e.shader.bind(i,o),e.geometry.bind(s,e.shader._activeProgram),n&&e.state.set(n),e.geometry.draw(a,u,l,h!=null?h:s.instanceCount);}destroy(){this._renderer=null;}}Ia.extension={type:[b.WebGLSystem],name:"encoder"};class mg{constructor(){this.width=-1,this.height=-1,this.msaa=!1,this.msaaRenderBuffer=[];}}const ee=[];ee[nt.NONE]=void 0,ee[nt.DISABLED]={stencilWriteMask:0,stencilReadMask:0},ee[nt.RENDERING_MASK_ADD]={stencilFront:{compare:"always",passOp:"increment-clamp"},stencilBack:{compare:"always",passOp:"increment-clamp"}},ee[nt.RENDERING_MASK_REMOVE]={stencilFront:{compare:"always",passOp:"decrement-clamp"},stencilBack:{compare:"always",passOp:"decrement-clamp"}},ee[nt.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"equal",passOp:"keep"},stencilBack:{compare:"equal",passOp:"keep"}};class Ba{constructor(t){this._stencilCache={enabled:!1,stencilReference:0,stencilMode:nt.NONE},this._renderTargetStencilState=Object.create(null),t.renderTarget.onRenderTargetChange.add(this);}contextChange(t){this._gl=t,this._comparisonFuncMapping={always:t.ALWAYS,never:t.NEVER,equal:t.EQUAL,"not-equal":t.NOTEQUAL,less:t.LESS,"less-equal":t.LEQUAL,greater:t.GREATER,"greater-equal":t.GEQUAL},this._stencilOpsMapping={keep:t.KEEP,zero:t.ZERO,replace:t.REPLACE,invert:t.INVERT,"increment-clamp":t.INCR,"decrement-clamp":t.DECR,"increment-wrap":t.INCR_WRAP,"decrement-wrap":t.DECR_WRAP};}onRenderTargetChange(t){if(this._activeRenderTarget===t)return;this._activeRenderTarget=t;let e=this._renderTargetStencilState[t.uid];e||(e=this._renderTargetStencilState[t.uid]={stencilMode:nt.DISABLED,stencilReference:0}),this.setStencilMode(e.stencilMode,e.stencilReference);}setStencilMode(t,e){const s=this._renderTargetStencilState[this._activeRenderTarget.uid],i=this._gl,n=ee[t],o=this._stencilCache;if(s.stencilMode=t,s.stencilReference=e,t===nt.DISABLED){this._stencilCache.enabled&&(this._stencilCache.enabled=!1,i.disable(i.STENCIL_TEST));return}this._stencilCache.enabled||(this._stencilCache.enabled=!0,i.enable(i.STENCIL_TEST)),(t!==o.stencilMode||o.stencilReference!==e)&&(o.stencilMode=t,o.stencilReference=e,i.stencilFunc(this._comparisonFuncMapping[n.stencilBack.compare],e,255),i.stencilOp(i.KEEP,i.KEEP,this._stencilOpsMapping[n.stencilBack.passOp]));}}Ba.extension={type:[b.WebGLSystem],name:"stencil"};class Fa{constructor(t){this._syncFunctionHash=Object.create(null),this._adaptor=t,this._systemCheck();}_systemCheck(){if(!zo())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}ensureUniformGroup(t){const e=this.getUniformGroupData(t);t.buffer||(t.buffer=new _t({data:new Float32Array(e.layout.size/4),usage:$.UNIFORM|$.COPY_DST}));}getUniformGroupData(t){return this._syncFunctionHash[t._signature]||this._initUniformGroup(t)}_initUniformGroup(t){const e=t._signature;let s=this._syncFunctionHash[e];if(!s){const i=Object.keys(t.uniformStructures).map(a=>t.uniformStructures[a]),n=this._adaptor.createUboElements(i),o=this._generateUboSync(n.uboElements);s=this._syncFunctionHash[e]={layout:n,syncFunction:o};}return this._syncFunctionHash[e]}_generateUboSync(t){return this._adaptor.generateUboSync(t)}syncUniformGroup(t,e,s){const i=this.getUniformGroupData(t);return t.buffer||(t.buffer=new _t({data:new Float32Array(i.layout.size/4),usage:$.UNIFORM|$.COPY_DST})),e||(e=t.buffer.data),s||(s=0),i.syncFunction(t.uniforms,e,s),!0}updateUniformGroup(t){if(t.isStatic&&!t._dirtyId)return !1;t._dirtyId=0;const e=this.syncUniformGroup(t);return t.buffer.update(),e}destroy(){this._syncFunctionHash=null;}}const Da={f32:4,"vec2<f32>":8,"vec3<f32>":12,"vec4<f32>":16,"mat2x2<f32>":32,"mat3x3<f32>":48,"mat4x4<f32>":64};function gg(r){const t=r.map(n=>({data:n,offset:0,size:0}));let e=0,s=0,i=0;for(let n=0;n<t.length;n++){const o=t[n];if(e=Da[o.data.type],!e)throw new Error(`Unknown type ${o.data.type}`);if(o.data.size>1&&(e=Math.max(e,16)*o.data.size),o.size=e,s%e!==0&&s<16){const a=s%e%16;s+=a,i+=a;}s+e>16?(i=Math.ceil(i/16)*16,o.offset=i,i+=e,s=e):(o.offset=i,s+=e,i+=e);}return i=Math.ceil(i/16)*16,{uboElements:t,size:i}}const re=[{type:"mat3x3<f32>",test:r=>r.value.a!==void 0,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:` 
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:"vec4<f32>",test:r=>r.type==="vec4<f32>"&&r.size===1&&r.value.width!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:"vec2<f32>",test:r=>r.type==="vec2<f32>"&&r.size===1&&r.value.x!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:"vec4<f32>",test:r=>r.type==="vec4<f32>"&&r.size===1&&r.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:"vec3<f32>",test:r=>r.type==="vec3<f32>"&&r.size===1&&r.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}];function Ua(r,t,e,s){const i=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `];let n=0;for(let a=0;a<r.length;a++){const u=r[a],l=u.data.name;let h=!1,c=0;for(let d=0;d<re.length;d++)if(re[d].test(u.data)){c=u.offset/4,i.push(`name = "${l}";`,`offset += ${c-n};`,re[d][t]||re[d].ubo),h=!0;break}if(!h)if(u.data.size>1)c=u.offset/4,i.push(e(u,c-n));else {const d=s[u.data.type];c=u.offset/4,i.push(`
                    v = uv.${l};
                    offset += ${c-n};
                    ${d};
                `);}n=c;}const o=i.join(`
`);return new Function("uv","data","offset",o)}var m2=Object.defineProperty,g2=Object.defineProperties,_2=Object.getOwnPropertyDescriptors,_g=Object.getOwnPropertySymbols,x2=Object.prototype.hasOwnProperty,b2=Object.prototype.propertyIsEnumerable,xg=(r,t,e)=>t in r?m2(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,v2=(r,t)=>{for(var e in t||(t={}))x2.call(t,e)&&xg(r,e,t[e]);if(_g)for(var e of _g(t))b2.call(t,e)&&xg(r,e,t[e]);return r},y2=(r,t)=>g2(r,_2(t));function Xe(r,t){return `
        for (let i = 0; i < ${r*t}; i++) {
            data[offset + (((i / ${r})|0) * 4) + (i % ${r})] = v[i];
        }
    `}const ka={f32:`
        data[offset] = v;`,i32:`
        data[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":Xe(3,2),"mat4x2<f32>":Xe(4,2),"mat2x3<f32>":Xe(2,3),"mat4x3<f32>":Xe(4,3),"mat2x4<f32>":Xe(2,4),"mat3x4<f32>":Xe(3,4)},bg=y2(v2({},ka),{"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `});function vg(r,t){const e=Math.max(Da[r.data.type]/16,1),s=r.data.value.length/r.data.size,i=(4-s%4)%4;return `
        v = uv.${r.data.name};
        offset += ${t};

        arrayOffset = offset;

        t = 0;

        for(var i=0; i < ${r.data.size*e}; i++)
        {
            for(var j = 0; j < ${s}; j++)
            {
                data[arrayOffset++] = v[t++];
            }
            ${i!==0?`arrayOffset += ${i};`:""}
        }
    `}function yg(r){return Ua(r,"uboStd40",vg,ka)}class La extends Fa{constructor(){super({createUboElements:gg,generateUboSync:yg});}}La.extension={type:[b.WebGLSystem],name:"ubo"};class Tg{constructor(){this._clearColorCache=[0,0,0,0],this._viewPortCache=new H;}init(t,e){this._renderer=t,this._renderTargetSystem=e,t.runners.contextChange.add(this);}contextChange(){this._clearColorCache=[0,0,0,0],this._viewPortCache=new H;}copyToTexture(t,e,s,i,n){const o=this._renderTargetSystem,a=this._renderer,u=o.getGpuRenderTarget(t),l=a.gl;return this.finishRenderPass(t),l.bindFramebuffer(l.FRAMEBUFFER,u.resolveTargetFramebuffer),a.texture.bind(e,0),l.copyTexSubImage2D(l.TEXTURE_2D,0,n.x,n.y,s.x,s.y,i.width,i.height),e}startRenderPass(t,e=!0,s,i){const n=this._renderTargetSystem,o=t.colorTexture,a=n.getGpuRenderTarget(t);let u=i.y;t.isRoot&&(u=o.pixelHeight-i.height),t.colorTextures.forEach(c=>{this._renderer.texture.unbind(c);});const l=this._renderer.gl;l.bindFramebuffer(l.FRAMEBUFFER,a.framebuffer);const h=this._viewPortCache;(h.x!==i.x||h.y!==u||h.width!==i.width||h.height!==i.height)&&(h.x=i.x,h.y=u,h.width=i.width,h.height=i.height,l.viewport(i.x,u,i.width,i.height)),!a.depthStencilRenderBuffer&&(t.stencil||t.depth)&&this._initStencil(a),this.clear(t,e,s);}finishRenderPass(t){const e=this._renderTargetSystem.getGpuRenderTarget(t);if(!e.msaa)return;const s=this._renderer.gl;s.bindFramebuffer(s.FRAMEBUFFER,e.resolveTargetFramebuffer),s.bindFramebuffer(s.READ_FRAMEBUFFER,e.framebuffer),s.blitFramebuffer(0,0,e.width,e.height,0,0,e.width,e.height,s.COLOR_BUFFER_BIT,s.NEAREST),s.bindFramebuffer(s.FRAMEBUFFER,e.framebuffer);}initGpuRenderTarget(t){const e=this._renderer.gl,s=new mg;return Qt.test(t.colorTexture.resource)?(s.framebuffer=null,s):(this._initColor(t,s),e.bindFramebuffer(e.FRAMEBUFFER,null),s)}clear(t,e,s){if(!e)return;const i=this._renderTargetSystem;typeof e=="boolean"&&(e=e?dt.ALL:dt.NONE);const n=this._renderer.gl;if(e&dt.COLOR){s!=null||(s=i.defaultClearColor);const o=this._clearColorCache,a=s;(o[0]!==a[0]||o[1]!==a[1]||o[2]!==a[2]||o[3]!==a[3])&&(o[0]=a[0],o[1]=a[1],o[2]=a[2],o[3]=a[3],n.clearColor(a[0],a[1],a[2],a[3]));}n.clear(e);}resizeGpuRenderTarget(t){if(t.isRoot)return;const e=this._renderTargetSystem.getGpuRenderTarget(t);this._resizeColor(t,e),t.stencil&&this._resizeStencil(e);}_initColor(t,e){const s=this._renderer,i=s.gl,n=i.createFramebuffer();if(e.resolveTargetFramebuffer=n,i.bindFramebuffer(i.FRAMEBUFFER,n),e.width=t.colorTexture.source.pixelWidth,e.height=t.colorTexture.source.pixelHeight,t.colorTextures.forEach((o,a)=>{const u=o.source;u.antialias&&(s.context.supports.msaa?e.msaa=!0:gi("[RenderTexture] Antialiasing on textures is not supported in WebGL1")),s.texture.bindSource(u,0);const l=s.texture.getGlSource(u).texture;i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+a,3553,l,0);}),e.msaa){const o=i.createFramebuffer();e.framebuffer=o,i.bindFramebuffer(i.FRAMEBUFFER,o),t.colorTextures.forEach((a,u)=>{const l=i.createRenderbuffer();e.msaaRenderBuffer[u]=l;});}else e.framebuffer=n;this._resizeColor(t,e);}_resizeColor(t,e){const s=t.colorTexture.source;if(e.width=s.pixelWidth,e.height=s.pixelHeight,t.colorTextures.forEach((i,n)=>{n!==0&&i.source.resize(s.width,s.height,s._resolution);}),e.msaa){const i=this._renderer,n=i.gl,o=e.framebuffer;n.bindFramebuffer(n.FRAMEBUFFER,o),t.colorTextures.forEach((a,u)=>{const l=a.source;i.texture.bindSource(l,0);const h=i.texture.getGlSource(l).internalFormat,c=e.msaaRenderBuffer[u];n.bindRenderbuffer(n.RENDERBUFFER,c),n.renderbufferStorageMultisample(n.RENDERBUFFER,4,h,l.pixelWidth,l.pixelHeight),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+u,n.RENDERBUFFER,c);});}}_initStencil(t){if(t.framebuffer===null)return;const e=this._renderer.gl,s=e.createRenderbuffer();t.depthStencilRenderBuffer=s,e.bindRenderbuffer(e.RENDERBUFFER,s),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,s),this._resizeStencil(t);}_resizeStencil(t){const e=this._renderer.gl;e.bindRenderbuffer(e.RENDERBUFFER,t.depthStencilRenderBuffer),t.msaa?e.renderbufferStorageMultisample(e.RENDERBUFFER,4,e.DEPTH24_STENCIL8,t.width,t.height):e.renderbufferStorage(e.RENDERBUFFER,this._renderer.context.webGLVersion===2?e.DEPTH24_STENCIL8:e.DEPTH_STENCIL,t.width,t.height);}}function Sg(r,t,e,s,i,n){const o=n?1:-1;return r.identity(),r.a=1/s*2,r.d=o*(1/i*2),r.tx=-1-t*r.a,r.ty=-o-e*r.d,r}var T2=Object.defineProperty,Eg=Object.getOwnPropertySymbols,S2=Object.prototype.hasOwnProperty,E2=Object.prototype.propertyIsEnumerable,Ag=(r,t,e)=>t in r?T2(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,A2=(r,t)=>{for(var e in t||(t={}))S2.call(t,e)&&Ag(r,e,t[e]);if(Eg)for(var e of Eg(t))E2.call(t,e)&&Ag(r,e,t[e]);return r};const ze=new Map;function $a(r,t){if(!ze.has(r)){const e=new A({source:new Qt(A2({resource:r},t))}),s=()=>{ze.get(r)===e&&ze.delete(r);};e.once("destroy",s),e.source.once("destroy",s),ze.set(r,e);}return ze.get(r)}function P2(r){return ze.has(r)}function Pg(r){const t=r.colorTexture.source.resource;return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement&&document.body.contains(t)}var w2=Object.defineProperty,wg=Object.getOwnPropertySymbols,R2=Object.prototype.hasOwnProperty,M2=Object.prototype.propertyIsEnumerable,Rg=(r,t,e)=>t in r?w2(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Mg=(r,t)=>{for(var e in t||(t={}))R2.call(t,e)&&Rg(r,e,t[e]);if(wg)for(var e of wg(t))M2.call(t,e)&&Rg(r,e,t[e]);return r};const Og=class Lx{constructor(t={}){if(this.uid=Z("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),t=Mg(Mg({},Lx.defaultOptions),t),this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number")for(let e=0;e<t.colorTextures;e++)this.colorTextures.push(new et({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}));else {this.colorTextures=[...t.colorTextures.map(s=>s.source)];const e=this.colorTexture.source;this.resize(e.width,e.height,e._resolution);}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof A||t.depthStencilTexture instanceof et?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture());}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0);}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new et({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}));}resize(t,e,s=this.resolution,i=!1){this.dirtyId++,this.colorTextures.forEach((n,o)=>{i&&o===0||n.source.resize(t,e,s);}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,e,s);}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture);}};Og.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let xi=Og;class Na{constructor(t){this.rootViewPort=new H,this.viewport=new H,this.onRenderTargetChange=new jo("onRenderTargetChange"),this.projectionMatrix=new G,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._renderer=t;}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget);}renderStart({target:t,clear:e,clearColor:s,frame:i}){this._renderTargetStack.length=0,this.push(t,e,s,i),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=Pg(this.rootRenderTarget);}bind(t,e=!0,s,i){const n=this.getRenderTarget(t),o=this.renderTarget!==n;this.renderTarget=n,this.renderSurface=t;const a=this.getGpuRenderTarget(n);(n.pixelWidth!==a.width||n.pixelHeight!==a.height)&&(this.adaptor.resizeGpuRenderTarget(n),a.width=n.pixelWidth,a.height=n.pixelHeight);const u=n.colorTexture,l=this.viewport,h=u.pixelWidth,c=u.pixelHeight;if(!i&&t instanceof A&&(i=t.frame),i){const d=u._resolution;l.x=i.x*d+.5|0,l.y=i.y*d+.5|0,l.width=i.width*d+.5|0,l.height=i.height*d+.5|0;}else l.x=0,l.y=0,l.width=h,l.height=c;return Sg(this.projectionMatrix,0,0,l.width/u.resolution,l.height/u.resolution,!n.isRoot),this.adaptor.startRenderPass(n,e,s,l),o&&this.onRenderTargetChange.emit(n),n}clear(t,e=dt.ALL,s){e&&(t&&(t=this.getRenderTarget(t)),this.adaptor.clear(t||this.renderTarget,e,s,this.viewport));}contextChange(){this._gpuRenderTargetHash=Object.create(null);}push(t,e=dt.ALL,s,i){const n=this.bind(t,e,s,i);return this._renderTargetStack.push({renderTarget:n,frame:i}),n}pop(){this._renderTargetStack.pop();const t=this._renderTargetStack[this._renderTargetStack.length-1];this.bind(t.renderTarget,!1,null,t.frame);}getRenderTarget(t){var e;return t.isTexture&&(t=t.source),(e=this._renderSurfaceToRenderTargetHash.get(t))!=null?e:this._initRenderTarget(t)}copyToTexture(t,e,s,i,n){s.x<0&&(i.width+=s.x,n.x-=s.x,s.x=0),s.y<0&&(i.height+=s.y,n.y-=s.y,s.y=0);const{pixelWidth:o,pixelHeight:a}=t;return i.width=Math.min(i.width,o-s.x),i.height=Math.min(i.height,a-s.y),this.adaptor.copyToTexture(t,e,s,i,n)}ensureDepthStencil(){this.renderTarget.stencil||(this.renderTarget.stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport));}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((t,e)=>{t!==e&&t.destroy();}),this._renderSurfaceToRenderTargetHash.clear(),this._gpuRenderTargetHash=Object.create(null);}_initRenderTarget(t){let e=null;return Qt.test(t)&&(t=$a(t)),t instanceof xi?e=t:t instanceof et&&(e=new xi({colorTextures:[t]}),Qt.test(t.source.resource)&&(e.isRoot=!0),t.on("destroy",()=>{e.destroy();})),this._renderSurfaceToRenderTargetHash.set(t,e),e}getGpuRenderTarget(t){return this._gpuRenderTargetHash[t.uid]||(this._gpuRenderTargetHash[t.uid]=this.adaptor.initGpuRenderTarget(t))}}class Ha extends Na{constructor(t){super(t),this.adaptor=new Tg,this.adaptor.init(t,this);}}Ha.extension={type:[b.WebGLSystem],name:"renderTarget"};class bi extends mt{constructor({buffer:t,offset:e,size:s}){super(),this.uid=Z("buffer"),this._resourceType="bufferResource",this._touched=0,this._resourceId=Z("resource"),this._bufferResource=!0,this.buffer=t,this.offset=e|0,this.size=s,this.buffer.on("change",this.onBufferChange,this);}onBufferChange(){this._resourceId=Z("resource"),this.emit("change",this);}destroy(t=!1){t&&this.buffer.destroy(),this.buffer=null;}}function Cg(r,t){const e=[],s=[`
        var g = s.groups;
        var sS = r.shader;
        var p = s.glProgram;
        var ugS = r.uniformGroup;
        var resources;
    `];let i=!1,n=0,o=0;const a=t._getProgramData(r.glProgram);for(const l in r.groups){const h=r.groups[l];e.push(`
            resources = g[${l}].resources;
        `);for(const c in h.resources){const d=h.resources[c];if(d instanceof st)d.ubo?e.push(`
                        sS.bindUniformBlock(
                            resources[${c}],
                            sS._uniformBindMap[${l}[${c}],
                            ${n++}
                        );
                    `):e.push(`
                        ugS.updateUniformGroup(resources[${c}], p, sD);
                    `);else if(d instanceof bi)e.push(`
                    sS.bindUniformBlock(
                        resources[${c}],
                        sS._uniformBindMap[${l}[${c}],
                        ${n++}
                    );
                `);else if(d instanceof et){const f=r._uniformBindMap[l][c],p=a.uniformData[f];p&&(i||(i=!0,s.push(`
                        var tS = r.texture;
                        `)),t._gl.uniform1i(p.location,o),e.push(`
                        tS.bind(resources[${c}], ${o});
                    `),o++);}}}const u=[...s,...e].join(`
`);return new Function("r","s","sD",u)}class O2{}class Gg{constructor(t,e){this.program=t,this.uniformData=e,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBlockBindings={};}destroy(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBlockBindings=null,this.program=null;}}function Xa(r,t,e){const s=r.createShader(t);return r.shaderSource(s,e),r.compileShader(s),s}function za(r){const t=new Array(r);for(let e=0;e<t.length;e++)t[e]=!1;return t}function ja(r,t){switch(r){case"float":return 0;case"vec2":return new Float32Array(2*t);case"vec3":return new Float32Array(3*t);case"vec4":return new Float32Array(4*t);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*t);case"ivec3":return new Int32Array(3*t);case"ivec4":return new Int32Array(4*t);case"uvec2":return new Uint32Array(2*t);case"uvec3":return new Uint32Array(3*t);case"uvec4":return new Uint32Array(4*t);case"bool":return !1;case"bvec2":return za(2*t);case"bvec3":return za(3*t);case"bvec4":return za(4*t);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}let vi=null;const Ig={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"},C2={float:"float32",vec2:"float32x2",vec3:"float32x3",vec4:"float32x4",int:"sint32",ivec2:"sint32x2",ivec3:"sint32x3",ivec4:"sint32x4",uint:"uint32",uvec2:"uint32x2",uvec3:"uint32x3",uvec4:"uint32x4",bool:"uint32",bvec2:"uint32x2",bvec3:"uint32x3",bvec4:"uint32x4"};function Wa(r,t){if(!vi){const e=Object.keys(Ig);vi={};for(let s=0;s<e.length;++s){const i=e[s];vi[r[i]]=Ig[i];}}return vi[t]}function Bg(r,t){const e=Wa(r,t);return C2[e]||"float32"}function Fg(r,t,e=!1){const s={},i=t.getProgramParameter(r,t.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=t.getActiveAttrib(r,o);if(a.name.startsWith("gl_"))continue;const u=Bg(t,a.type);s[a.name]={location:0,format:u,stride:Ge(u).stride,offset:0,instance:!1,start:0};}const n=Object.keys(s);if(e){n.sort((o,a)=>o>a?1:-1);for(let o=0;o<n.length;o++)s[n[o]].location=o,t.bindAttribLocation(r,o,n[o]);t.linkProgram(r);}else for(let o=0;o<n.length;o++)s[n[o]].location=t.getAttribLocation(r,n[o]);return s}function Dg(r,t){if(!t.ACTIVE_UNIFORM_BLOCKS)return {};const e={},s=t.getProgramParameter(r,t.ACTIVE_UNIFORM_BLOCKS);for(let i=0;i<s;i++){const n=t.getActiveUniformBlockName(r,i),o=t.getUniformBlockIndex(r,n),a=t.getActiveUniformBlockParameter(r,i,t.UNIFORM_BLOCK_DATA_SIZE);e[n]={name:n,index:o,size:a};}return e}function Ug(r,t){const e={},s=t.getProgramParameter(r,t.ACTIVE_UNIFORMS);for(let i=0;i<s;i++){const n=t.getActiveUniform(r,i),o=n.name.replace(/\[.*?\]$/,""),a=!!n.name.match(/\[.*?\]$/),u=Wa(t,n.type);e[o]={name:o,index:i,type:u,size:n.size,isArray:a,value:ja(u,n.size)};}return e}function kg(r,t){const e=r.getShaderSource(t).split(`
`).map((l,h)=>`${h}: ${l}`),s=r.getShaderInfoLog(t),i=s.split(`
`),n={},o=i.map(l=>parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))).filter(l=>l&&!n[l]?(n[l]=!0,!0):!1),a=[""];o.forEach(l=>{e[l-1]=`%c${e[l-1]}%c`,a.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px");});const u=e.join(`
`);a[0]=u,console.error(s),console.groupCollapsed("click to view full shader code"),console.warn(...a),console.groupEnd();}function Lg(r,t,e,s){r.getProgramParameter(t,r.LINK_STATUS)||(r.getShaderParameter(e,r.COMPILE_STATUS)||kg(r,e),r.getShaderParameter(s,r.COMPILE_STATUS)||kg(r,s),console.error("PixiJS Error: Could not initialize shader."),r.getProgramInfoLog(t)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",r.getProgramInfoLog(t)));}function $g(r,t){const e=Xa(r,r.VERTEX_SHADER,t.vertex),s=Xa(r,r.FRAGMENT_SHADER,t.fragment),i=r.createProgram();r.attachShader(i,e),r.attachShader(i,s);const n=t.transformFeedbackVaryings;n&&(typeof r.transformFeedbackVaryings!="function"||r.transformFeedbackVaryings(i,n.names,n.bufferMode==="separate"?r.SEPARATE_ATTRIBS:r.INTERLEAVED_ATTRIBS)),r.linkProgram(i),r.getProgramParameter(i,r.LINK_STATUS)||Lg(r,i,e,s),t._attributeData=Fg(i,r,!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertex)),t._uniformData=Ug(i,r),t._uniformBlockData=Dg(i,r),r.deleteShader(e),r.deleteShader(s);const o={};for(const a in t._uniformData){const u=t._uniformData[a];o[a]={location:r.getUniformLocation(i,a),value:ja(u.type,u.size)};}return new Gg(i,o)}const yi={textureCount:0,blockIndex:0};class Va{constructor(t){this._activeProgram=null,this._programDataHash=Object.create(null),this._nextIndex=0,this._boundUniformsIdsToIndexHash=Object.create(null),this._boundIndexToUniformsHash=Object.create(null),this._shaderSyncFunctions=Object.create(null),this._renderer=t;}contextChange(t){this._gl=t,this._maxBindings=t.MAX_UNIFORM_BUFFER_BINDINGS?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0,this._programDataHash=Object.create(null),this._boundUniformsIdsToIndexHash=Object.create(null),this._boundIndexToUniformsHash=Object.create(null),this._activeProgram=null;}bind(t,e){if(this._setProgram(t.glProgram),e)return;yi.textureCount=0,yi.blockIndex=0;let s=this._shaderSyncFunctions[t.glProgram._key];s||(s=this._shaderSyncFunctions[t.glProgram._key]=this._generateShaderSync(t,this)),s(this._renderer,t,yi);}updateUniformGroup(t){this._renderer.uniformGroup.updateUniformGroup(t,this._activeProgram,yi);}bindUniformBlock(t,e,s=0){const i=this._renderer.buffer,n=this._getProgramData(this._activeProgram),o=t._bufferResource;o&&this._renderer.ubo.updateUniformGroup(t),i.updateBuffer(t.buffer);let a=this._boundUniformsIdsToIndexHash[t.uid];if(a===void 0){const h=this._nextIndex++%this._maxBindings,c=this._boundIndexToUniformsHash[h];c&&(this._boundUniformsIdsToIndexHash[c.uid]=void 0),a=this._boundUniformsIdsToIndexHash[t.uid]=h,this._boundIndexToUniformsHash[h]=t,o?i.bindBufferRange(t.buffer,h,t.offset):i.bindBufferBase(t.buffer,h);}const u=this._gl,l=this._activeProgram._uniformBlockData[e].index;n.uniformBlockBindings[s]!==a&&(n.uniformBlockBindings[s]=a,u.uniformBlockBinding(n.program,l,a));}_setProgram(t){if(this._activeProgram===t)return;this._activeProgram=t;const e=this._getProgramData(t);this._gl.useProgram(e.program);}_getProgramData(t){return this._programDataHash[t._key]||this._createProgramData(t)}_createProgramData(t){const e=t._key;return this._programDataHash[e]=$g(this._gl,t),this._programDataHash[e]}destroy(){for(const t of Object.keys(this._programDataHash))this._programDataHash[t].destroy(),this._programDataHash[t]=null;this._programDataHash=null,this._boundUniformsIdsToIndexHash=null;}_generateShaderSync(t,e){return Cg(t,e)}}Va.extension={type:[b.WebGLSystem],name:"shader"};const Ng={f32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1f(location, v);
        }`,"vec2<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2f(location, v[0], v[1]);
        }`,"vec3<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3f(location, v[0], v[1], v[2]);
        }`,"vec4<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4f(location, v[0], v[1], v[2], v[3]);
        }`,i32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,"vec2<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,"vec3<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,"vec4<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,u32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1ui(location, v);
        }`,"vec2<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2ui(location, v[0], v[1]);
        }`,"vec3<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3ui(location, v[0], v[1], v[2]);
        }`,"vec4<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
        }`,bool:`if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,"vec2<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,"vec3<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,"vec4<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,"mat2x2<f32>":"gl.uniformMatrix2fv(location, false, v);","mat3x3<f32>":"gl.uniformMatrix3fv(location, false, v);","mat4x4<f32>":"gl.uniformMatrix4fv(location, false, v);"},Hg={f32:"gl.uniform1fv(location, v);","vec2<f32>":"gl.uniform2fv(location, v);","vec3<f32>":"gl.uniform3fv(location, v);","vec4<f32>":"gl.uniform4fv(location, v);","mat2x2<f32>":"gl.uniformMatrix2fv(location, false, v);","mat3x3<f32>":"gl.uniformMatrix3fv(location, false, v);","mat4x4<f32>":"gl.uniformMatrix4fv(location, false, v);",i32:"gl.uniform1iv(location, v);","vec2<i32>":"gl.uniform2iv(location, v);","vec3<i32>":"gl.uniform3iv(location, v);","vec4<i32>":"gl.uniform4iv(location, v);",u32:"gl.uniform1iv(location, v);","vec2<u32>":"gl.uniform2iv(location, v);","vec3<u32>":"gl.uniform3iv(location, v);","vec4<u32>":"gl.uniform4iv(location, v);",bool:"gl.uniform1iv(location, v);","vec2<bool>":"gl.uniform2iv(location, v);","vec3<bool>":"gl.uniform3iv(location, v);","vec4<bool>":"gl.uniform4iv(location, v);"};function Xg(r,t){const e=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
        var name = null;
    `];for(const s in r.uniforms){if(!t[s]){r.uniforms[s]instanceof st?r.uniforms[s].ubo?e.push(`
                        renderer.shader.bindUniformBlock(uv.${s}, "${s}");
                    `):e.push(`
                        renderer.shader.updateUniformGroup(uv.${s});
                    `):r.uniforms[s]instanceof bi&&e.push(`
                        renderer.shader.bindBufferResource(uv.${s}, "${s}");
                    `);continue}const i=r.uniformStructures[s];let n=!1;for(let o=0;o<re.length;o++){const a=re[o];if(i.type===a.type&&a.test(i)){e.push(`name = "${s}";`,re[o].uniform),n=!0;break}}if(!n){const o=(i.size===1?Ng:Hg)[i.type].replace("location",`ud["${s}"].location`);e.push(`
            cu = ud["${s}"];
            cv = cu.value;
            v = uv["${s}"];
            ${o};`);}}return new Function("ud","uv","renderer","syncData",e.join(`
`))}class Ya{constructor(t){this._cache={},this._uniformGroupSyncHash={},this._renderer=t,this.gl=null,this._cache={};}contextChange(t){this.gl=t;}updateUniformGroup(t,e,s){const i=this._renderer.shader._getProgramData(e);(!t.isStatic||t._dirtyId!==i.uniformDirtyGroups[t.uid])&&(i.uniformDirtyGroups[t.uid]=t._dirtyId,this._getUniformSyncFunction(t,e)(i.uniformData,t.uniforms,this._renderer,s));}_getUniformSyncFunction(t,e){var s;return ((s=this._uniformGroupSyncHash[t._signature])==null?void 0:s[e._key])||this._createUniformSyncFunction(t,e)}_createUniformSyncFunction(t,e){const s=this._uniformGroupSyncHash[t._signature]||(this._uniformGroupSyncHash[t._signature]={}),i=this._getSignature(t,e._uniformData,"u");return this._cache[i]||(this._cache[i]=this._generateUniformsSync(t,e._uniformData)),s[e._key]=this._cache[i],s[e._key]}_generateUniformsSync(t,e){return Xg(t,e)}_getSignature(t,e,s){const i=t.uniforms,n=[`${s}-`];for(const o in i)n.push(o),e[o]&&n.push(e[o].type);return n.join("-")}destroy(){this._renderer=null,this._cache=null;}}Ya.extension={type:[b.WebGLSystem],name:"uniformGroup"};function G2(r){return r=r.replaceAll("texture2D","texture").replaceAll("gl_FragColor","finalColor").replaceAll("varying","in"),r=`
        out vec4 finalColor;
    ${r}
    `,r}const I2={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function B2(r){return I2[r]}function zg(r){const t={};return t.normal=[r.ONE,r.ONE_MINUS_SRC_ALPHA],t.add=[r.ONE,r.ONE],t.multiply=[r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],t.screen=[r.ONE,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],t.none=[0,0],t["normal-npm"]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],t["add-npm"]=[r.SRC_ALPHA,r.ONE,r.ONE,r.ONE],t["screen-npm"]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],t.erase=[r.ZERO,r.ONE_MINUS_SRC_ALPHA],t}const F2=0,D2=1,U2=2,k2=3,L2=4,$2=5,jg=class Vu{constructor(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode="none",this._blendEq=!1,this.map=[],this.map[F2]=this.setBlend,this.map[D2]=this.setOffset,this.map[U2]=this.setCullFace,this.map[k2]=this.setDepthTest,this.map[L2]=this.setFrontFace,this.map[$2]=this.setDepthMask,this.checks=[],this.defaultState=Ct.for2d();}contextChange(t){this.gl=t,this.blendModesMap=zg(t),this.reset();}set(t){if(t=t||this.defaultState,this.stateId!==t.data){let e=this.stateId^t.data,s=0;for(;e;)e&1&&this.map[s].call(this,!!(t.data&1<<s)),e=e>>1,s++;this.stateId=t.data;}for(let e=0;e<this.checks.length;e++)this.checks[e](this,t);}forceState(t){t=t||this.defaultState;for(let e=0;e<this.map.length;e++)this.map[e].call(this,!!(t.data&1<<e));for(let e=0;e<this.checks.length;e++)this.checks[e](this,t);this.stateId=t.data;}setBlend(t){this._updateCheck(Vu._checkBlendMode,t),this.gl[t?"enable":"disable"](this.gl.BLEND);}setOffset(t){this._updateCheck(Vu._checkPolygonOffset,t),this.gl[t?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL);}setDepthTest(t){this.gl[t?"enable":"disable"](this.gl.DEPTH_TEST);}setDepthMask(t){this.gl.depthMask(t);}setCullFace(t){this.gl[t?"enable":"disable"](this.gl.CULL_FACE);}setFrontFace(t){this.gl.frontFace(this.gl[t?"CW":"CCW"]);}setBlendMode(t){if(this.blendModesMap[t]||(t="normal"),t===this.blendMode)return;this.blendMode=t;const e=this.blendModesMap[t],s=this.gl;e.length===2?s.blendFunc(e[0],e[1]):s.blendFuncSeparate(e[0],e[1],e[2],e[3]),e.length===6?(this._blendEq=!0,s.blendEquationSeparate(e[4],e[5])):this._blendEq&&(this._blendEq=!1,s.blendEquationSeparate(s.FUNC_ADD,s.FUNC_ADD));}setPolygonOffset(t,e){this.gl.polygonOffset(t,e);}reset(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode="",this.setBlendMode("normal");}_updateCheck(t,e){const s=this.checks.indexOf(t);e&&s===-1?this.checks.push(t):!e&&s!==-1&&this.checks.splice(s,1);}static _checkBlendMode(t,e){t.setBlendMode(e.blendMode);}static _checkPolygonOffset(t,e){t.setPolygonOffset(1,e.polygonOffset);}destroy(){this.gl=null,this.checks.length=0;}};jg.extension={type:[b.WebGLSystem],name:"state"};let Wg=jg;class Vg{constructor(t){this.target=Ma.TEXTURE_2D,this.texture=t,this.width=-1,this.height=-1,this.type=N.UNSIGNED_BYTE,this.internalFormat=_i.RGBA,this.format=_i.RGBA,this.samplerType=0;}}const Yg={id:"image",upload(r,t,e){t.width===r.width||t.height===r.height?e.texSubImage2D(e.TEXTURE_2D,0,0,0,t.format,t.type,r.resource):e.texImage2D(t.target,0,t.internalFormat,r.width,r.height,0,t.format,t.type,r.resource),t.width=r.width,t.height=r.height;}},N2={"bc1-rgba-unorm":!0,"bc1-rgba-unorm-srgb":!0,"bc2-rgba-unorm":!0,"bc2-rgba-unorm-srgb":!0,"bc3-rgba-unorm":!0,"bc3-rgba-unorm-srgb":!0,"bc4-r-unorm":!0,"bc4-r-snorm":!0,"bc5-rg-unorm":!0,"bc5-rg-snorm":!0,"bc6h-rgb-ufloat":!0,"bc6h-rgb-float":!0,"bc7-rgba-unorm":!0,"bc7-rgba-unorm-srgb":!0,"etc2-rgb8unorm":!0,"etc2-rgb8unorm-srgb":!0,"etc2-rgb8a1unorm":!0,"etc2-rgb8a1unorm-srgb":!0,"etc2-rgba8unorm":!0,"etc2-rgba8unorm-srgb":!0,"eac-r11unorm":!0,"eac-r11snorm":!0,"eac-rg11unorm":!0,"eac-rg11snorm":!0,"astc-4x4-unorm":!0,"astc-4x4-unorm-srgb":!0,"astc-5x4-unorm":!0,"astc-5x4-unorm-srgb":!0,"astc-5x5-unorm":!0,"astc-5x5-unorm-srgb":!0,"astc-6x5-unorm":!0,"astc-6x5-unorm-srgb":!0,"astc-6x6-unorm":!0,"astc-6x6-unorm-srgb":!0,"astc-8x5-unorm":!0,"astc-8x5-unorm-srgb":!0,"astc-8x6-unorm":!0,"astc-8x6-unorm-srgb":!0,"astc-8x8-unorm":!0,"astc-8x8-unorm-srgb":!0,"astc-10x5-unorm":!0,"astc-10x5-unorm-srgb":!0,"astc-10x6-unorm":!0,"astc-10x6-unorm-srgb":!0,"astc-10x8-unorm":!0,"astc-10x8-unorm-srgb":!0,"astc-10x10-unorm":!0,"astc-10x10-unorm-srgb":!0,"astc-12x10-unorm":!0,"astc-12x10-unorm-srgb":!0,"astc-12x12-unorm":!0,"astc-12x12-unorm-srgb":!0},Kg={id:"compressed",upload(r,t,e){e.pixelStorei(e.UNPACK_ALIGNMENT,4);let s=r.pixelWidth,i=r.pixelHeight;const n=!!N2[r.format];for(let o=0;o<r.resource.length;o++){const a=r.resource[o];n?e.compressedTexImage2D(e.TEXTURE_2D,o,t.internalFormat,s,i,0,a):e.texImage2D(e.TEXTURE_2D,o,t.internalFormat,s,i,0,t.format,t.type,a),s=Math.max(s>>1,1),i=Math.max(i>>1,1);}}},Ka={id:"image",upload(r,t,e,s){const i=r.alphaMode==="premultiply-alpha-on-upload";e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i);const n=t.width,o=t.height,a=r.pixelWidth,u=r.pixelHeight,l=r.resourceWidth,h=r.resourceHeight;l<a||h<u?((n!==a||o!==u)&&e.texImage2D(t.target,0,t.internalFormat,a,u,0,t.format,t.type,null),s===2?e.texSubImage2D(e.TEXTURE_2D,0,0,0,l,h,t.format,t.type,r.resource):e.texSubImage2D(e.TEXTURE_2D,0,0,0,t.format,t.type,r.resource)):n===a||o===u?e.texSubImage2D(e.TEXTURE_2D,0,0,0,t.format,t.type,r.resource):s===2?e.texImage2D(t.target,0,t.internalFormat,a,u,0,t.format,t.type,r.resource):e.texImage2D(t.target,0,t.internalFormat,t.format,t.type,r.resource),t.width=a,t.height=u;}},qg={id:"video",upload(r,t,e,s){if(!r.isValid){e.texImage2D(t.target,0,t.internalFormat,1,1,0,t.format,t.type,null);return}Ka.upload(r,t,e,s);}},qa={linear:9729,nearest:9728},Zg={linear:{linear:9987,nearest:9985},nearest:{linear:9986,nearest:9984}},Ti={"clamp-to-edge":33071,repeat:10497,"mirror-repeat":33648},Qg={never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519};function Za(r,t,e,s,i,n,o){const a=n,u=Ti[o?"clamp-to-edge":r.addressModeU],l=Ti[o?"clamp-to-edge":r.addressModeV],h=Ti[o?"clamp-to-edge":r.addressModeW];if(t[i](a,t.TEXTURE_WRAP_S,u),t[i](a,t.TEXTURE_WRAP_T,l),t.TEXTURE_WRAP_R&&t[i](a,t.TEXTURE_WRAP_R,h),t[i](a,t.TEXTURE_MAG_FILTER,qa[r.magFilter]),e){const c=Zg[r.minFilter][r.mipmapFilter];t[i](a,t.TEXTURE_MIN_FILTER,c);}else t[i](a,t.TEXTURE_MIN_FILTER,qa[r.minFilter]);if(s&&r.maxAnisotropy>1){const c=Math.min(r.maxAnisotropy,t.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT));t[i](a,s.TEXTURE_MAX_ANISOTROPY_EXT,c);}r.compare&&t[i](a,t.TEXTURE_COMPARE_FUNC,Qg[r.compare]);}function Jg(r){return {r8unorm:r.RED,r8snorm:r.RED,r8uint:r.RED,r8sint:r.RED,r16uint:r.RED,r16sint:r.RED,r16float:r.RED,rg8unorm:r.RG,rg8snorm:r.RG,rg8uint:r.RG,rg8sint:r.RG,r32uint:r.RED,r32sint:r.RED,r32float:r.RED,rg16uint:r.RG,rg16sint:r.RG,rg16float:r.RG,rgba8unorm:r.RGBA,"rgba8unorm-srgb":r.RGBA,rgba8snorm:r.RGBA,rgba8uint:r.RGBA,rgba8sint:r.RGBA,bgra8unorm:r.RGBA,"bgra8unorm-srgb":r.RGBA,rgb9e5ufloat:r.RGB,rgb10a2unorm:r.RGBA,rg11b10ufloat:r.RGB,rg32uint:r.RG,rg32sint:r.RG,rg32float:r.RG,rgba16uint:r.RGBA,rgba16sint:r.RGBA,rgba16float:r.RGBA,rgba32uint:r.RGBA,rgba32sint:r.RGBA,rgba32float:r.RGBA,stencil8:r.STENCIL_INDEX8,depth16unorm:r.DEPTH_COMPONENT,depth24plus:r.DEPTH_COMPONENT,"depth24plus-stencil8":r.DEPTH_STENCIL,depth32float:r.DEPTH_COMPONENT,"depth32float-stencil8":r.DEPTH_STENCIL}}var H2=Object.defineProperty,X2=Object.defineProperties,z2=Object.getOwnPropertyDescriptors,t_=Object.getOwnPropertySymbols,j2=Object.prototype.hasOwnProperty,W2=Object.prototype.propertyIsEnumerable,e_=(r,t,e)=>t in r?H2(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Se=(r,t)=>{for(var e in t||(t={}))j2.call(t,e)&&e_(r,e,t[e]);if(t_)for(var e of t_(t))W2.call(t,e)&&e_(r,e,t[e]);return r},V2=(r,t)=>X2(r,z2(t));function r_(r,t){let e={},s=r.RGBA;return r instanceof WebGL2RenderingContext?(e={"rgba8unorm-srgb":r.SRGB8_ALPHA8,"bgra8unorm-srgb":r.SRGB8_ALPHA8},s=r.RGBA8):t.srgb&&(e={"rgba8unorm-srgb":t.srgb.SRGB8_ALPHA8_EXT,"bgra8unorm-srgb":t.srgb.SRGB8_ALPHA8_EXT}),Se(Se(Se(Se(Se(Se(V2(Se({r8unorm:r.R8,r8snorm:r.R8_SNORM,r8uint:r.R8UI,r8sint:r.R8I,r16uint:r.R16UI,r16sint:r.R16I,r16float:r.R16F,rg8unorm:r.RG8,rg8snorm:r.RG8_SNORM,rg8uint:r.RG8UI,rg8sint:r.RG8I,r32uint:r.R32UI,r32sint:r.R32I,r32float:r.R32F,rg16uint:r.RG16UI,rg16sint:r.RG16I,rg16float:r.RG16F,rgba8unorm:r.RGBA},e),{rgba8snorm:r.RGBA8_SNORM,rgba8uint:r.RGBA8UI,rgba8sint:r.RGBA8I,bgra8unorm:s,rgb9e5ufloat:r.RGB9_E5,rgb10a2unorm:r.RGB10_A2,rg11b10ufloat:r.R11F_G11F_B10F,rg32uint:r.RG32UI,rg32sint:r.RG32I,rg32float:r.RG32F,rgba16uint:r.RGBA16UI,rgba16sint:r.RGBA16I,rgba16float:r.RGBA16F,rgba32uint:r.RGBA32UI,rgba32sint:r.RGBA32I,rgba32float:r.RGBA32F,stencil8:r.STENCIL_INDEX8,depth16unorm:r.DEPTH_COMPONENT16,depth24plus:r.DEPTH_COMPONENT24,"depth24plus-stencil8":r.DEPTH24_STENCIL8,depth32float:r.DEPTH_COMPONENT32F,"depth32float-stencil8":r.DEPTH32F_STENCIL8}),t.s3tc?{"bc1-rgba-unorm":t.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,"bc2-rgba-unorm":t.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,"bc3-rgba-unorm":t.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT}:{}),t.s3tc_sRGB?{"bc1-rgba-unorm-srgb":t.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,"bc2-rgba-unorm-srgb":t.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,"bc3-rgba-unorm-srgb":t.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}:{}),t.rgtc?{"bc4-r-unorm":t.rgtc.COMPRESSED_RED_RGTC1_EXT,"bc4-r-snorm":t.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,"bc5-rg-unorm":t.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,"bc5-rg-snorm":t.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}:{}),t.bptc?{"bc6h-rgb-float":t.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,"bc6h-rgb-ufloat":t.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,"bc7-rgba-unorm":t.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,"bc7-rgba-unorm-srgb":t.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT}:{}),t.etc?{"etc2-rgb8unorm":t.etc.COMPRESSED_RGB8_ETC2,"etc2-rgb8unorm-srgb":t.etc.COMPRESSED_SRGB8_ETC2,"etc2-rgb8a1unorm":t.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgb8a1unorm-srgb":t.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgba8unorm":t.etc.COMPRESSED_RGBA8_ETC2_EAC,"etc2-rgba8unorm-srgb":t.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,"eac-r11unorm":t.etc.COMPRESSED_R11_EAC,"eac-rg11unorm":t.etc.COMPRESSED_SIGNED_RG11_EAC}:{}),t.astc?{"astc-4x4-unorm":t.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,"astc-4x4-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,"astc-5x4-unorm":t.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,"astc-5x4-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,"astc-5x5-unorm":t.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,"astc-5x5-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,"astc-6x5-unorm":t.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,"astc-6x5-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,"astc-6x6-unorm":t.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,"astc-6x6-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,"astc-8x5-unorm":t.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,"astc-8x5-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,"astc-8x6-unorm":t.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,"astc-8x6-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,"astc-8x8-unorm":t.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,"astc-8x8-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,"astc-10x5-unorm":t.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,"astc-10x5-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,"astc-10x6-unorm":t.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,"astc-10x6-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,"astc-10x8-unorm":t.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,"astc-10x8-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,"astc-10x10-unorm":t.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,"astc-10x10-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,"astc-12x10-unorm":t.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,"astc-12x10-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,"astc-12x12-unorm":t.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,"astc-12x12-unorm-srgb":t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR}:{})}function s_(r){return {r8unorm:r.UNSIGNED_BYTE,r8snorm:r.BYTE,r8uint:r.UNSIGNED_BYTE,r8sint:r.BYTE,r16uint:r.UNSIGNED_SHORT,r16sint:r.SHORT,r16float:r.HALF_FLOAT,rg8unorm:r.UNSIGNED_BYTE,rg8snorm:r.BYTE,rg8uint:r.UNSIGNED_BYTE,rg8sint:r.BYTE,r32uint:r.UNSIGNED_INT,r32sint:r.INT,r32float:r.FLOAT,rg16uint:r.UNSIGNED_SHORT,rg16sint:r.SHORT,rg16float:r.HALF_FLOAT,rgba8unorm:r.UNSIGNED_BYTE,"rgba8unorm-srgb":r.UNSIGNED_BYTE,rgba8snorm:r.BYTE,rgba8uint:r.UNSIGNED_BYTE,rgba8sint:r.BYTE,bgra8unorm:r.UNSIGNED_BYTE,"bgra8unorm-srgb":r.UNSIGNED_BYTE,rgb9e5ufloat:r.UNSIGNED_INT_5_9_9_9_REV,rgb10a2unorm:r.UNSIGNED_INT_2_10_10_10_REV,rg11b10ufloat:r.UNSIGNED_INT_10F_11F_11F_REV,rg32uint:r.UNSIGNED_INT,rg32sint:r.INT,rg32float:r.FLOAT,rgba16uint:r.UNSIGNED_SHORT,rgba16sint:r.SHORT,rgba16float:r.HALF_FLOAT,rgba32uint:r.UNSIGNED_INT,rgba32sint:r.INT,rgba32float:r.FLOAT,stencil8:r.UNSIGNED_BYTE,depth16unorm:r.UNSIGNED_SHORT,depth24plus:r.UNSIGNED_INT,"depth24plus-stencil8":r.UNSIGNED_INT_24_8,depth32float:r.FLOAT,"depth32float-stencil8":r.FLOAT_32_UNSIGNED_INT_24_8_REV}}function Y2(r){r instanceof Uint8ClampedArray&&(r=new Uint8Array(r.buffer));const t=r.length;for(let e=0;e<t;e+=4){const s=r[e+3];if(s!==0){const i=255.001/s;r[e]=r[e]*i+.5,r[e+1]=r[e+1]*i+.5,r[e+2]=r[e+2]*i+.5;}}}const K2=4;class Qa{constructor(t){this.managedTextures=[],this._glTextures=Object.create(null),this._glSamplers=Object.create(null),this._boundTextures=[],this._activeTextureLocation=-1,this._boundSamplers=Object.create(null),this._uploads={image:Ka,buffer:Yg,video:qg,compressed:Kg},this._useSeparateSamplers=!1,this._renderer=t;}contextChange(t){this._gl=t,this._mapFormatToInternalFormat||(this._mapFormatToInternalFormat=r_(t,this._renderer.context.extensions),this._mapFormatToType=s_(t),this._mapFormatToFormat=Jg(t)),this._glTextures=Object.create(null),this._glSamplers=Object.create(null),this._boundSamplers=Object.create(null);for(let e=0;e<16;e++)this.bind(A.EMPTY,e);}initSource(t){this.bind(t);}bind(t,e=0){const s=t.source;t?(this.bindSource(s,e),this._useSeparateSamplers&&this._bindSampler(s.style,e)):(this.bindSource(null,e),this._useSeparateSamplers&&this._bindSampler(null,e));}bindSource(t,e=0){const s=this._gl;if(t._touched=this._renderer.textureGC.count,this._boundTextures[e]!==t){this._boundTextures[e]=t,this._activateLocation(e),t=t||A.EMPTY.source;const i=this.getGlSource(t);s.bindTexture(i.target,i.texture);}}_bindSampler(t,e=0){const s=this._gl;if(!t){this._boundSamplers[e]=null,s.bindSampler(e,null);return}const i=this._getGlSampler(t);this._boundSamplers[e]!==i&&(this._boundSamplers[e]=i,s.bindSampler(e,i));}unbind(t){const e=t.source,s=this._boundTextures,i=this._gl;for(let n=0;n<s.length;n++)if(s[n]===e){this._activateLocation(n);const o=this.getGlSource(e);i.bindTexture(o.target,null),s[n]=null;}}_activateLocation(t){this._activeTextureLocation!==t&&(this._activeTextureLocation=t,this._gl.activeTexture(this._gl.TEXTURE0+t));}_initSource(t){const e=this._gl,s=new Vg(e.createTexture());if(s.type=this._mapFormatToType[t.format],s.internalFormat=this._mapFormatToInternalFormat[t.format],s.format=this._mapFormatToFormat[t.format],t.autoGenerateMipmaps&&(this._renderer.context.supports.nonPowOf2mipmaps||t.isPowerOfTwo)){const i=Math.max(t.width,t.height);t.mipLevelCount=Math.floor(Math.log2(i))+1;}return this._glTextures[t.uid]=s,this.managedTextures.includes(t)||(t.on("update",this.onSourceUpdate,this),t.on("resize",this.onSourceUpdate,this),t.on("styleChange",this.onStyleChange,this),t.on("destroy",this.onSourceDestroy,this),t.on("unload",this.onSourceUnload,this),t.on("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.push(t)),this.onSourceUpdate(t),this.onStyleChange(t),s}onStyleChange(t){const e=this._gl,s=this.getGlSource(t);e.bindTexture(e.TEXTURE_2D,s.texture),this._boundTextures[this._activeTextureLocation]=t,Za(t.style,e,t.mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,"texParameteri",e.TEXTURE_2D,!this._renderer.context.supports.nonPowOf2wrapping&&!t.isPowerOfTwo);}onSourceUnload(t){const e=this._glTextures[t.uid];e&&(this.unbind(t),this._glTextures[t.uid]=null,this._gl.deleteTexture(e.texture));}onSourceUpdate(t){const e=this._gl,s=this.getGlSource(t);e.bindTexture(e.TEXTURE_2D,s.texture),this._boundTextures[this._activeTextureLocation]=t,this._uploads[t.uploadMethodId]?this._uploads[t.uploadMethodId].upload(t,s,e,this._renderer.context.webGLVersion):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t.pixelWidth,t.pixelHeight,0,e.RGBA,e.UNSIGNED_BYTE,null),t.autoGenerateMipmaps&&t.mipLevelCount>1&&this.onUpdateMipmaps(t,!1);}onUpdateMipmaps(t,e=!0){e&&this.bindSource(t,0);const s=this.getGlSource(t);this._gl.generateMipmap(s.target);}onSourceDestroy(t){t.off("destroy",this.onSourceDestroy,this),t.off("update",this.onSourceUpdate,this),t.off("resize",this.onSourceUpdate,this),t.off("unload",this.onSourceUnload,this),t.off("styleChange",this.onStyleChange,this),t.off("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.splice(this.managedTextures.indexOf(t),1),this.onSourceUnload(t);}_initSampler(t){const e=this._gl,s=this._gl.createSampler();return this._glSamplers[t._resourceId]=s,Za(t,e,this._boundTextures[this._activeTextureLocation].mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,"samplerParameteri",s,!1),this._glSamplers[t._resourceId]}_getGlSampler(t){return this._glSamplers[t._resourceId]||this._initSampler(t)}getGlSource(t){return this._glTextures[t.uid]||this._initSource(t)}generateCanvas(t){const{pixels:e,width:s,height:i}=this.getPixels(t),n=z.get().createCanvas();n.width=s,n.height=i;const o=n.getContext("2d");if(o){const a=o.createImageData(s,i);a.data.set(e),o.putImageData(a,0,0);}return n}getPixels(t){const e=t.source.resolution,s=t.frame,i=Math.max(Math.round(s.width*e),1),n=Math.max(Math.round(s.height*e),1),o=new Uint8Array(K2*i*n),a=this._renderer,u=a.renderTarget.getRenderTarget(t),l=a.renderTarget.getGpuRenderTarget(u),h=a.gl;return h.bindFramebuffer(h.FRAMEBUFFER,l.resolveTargetFramebuffer),h.readPixels(Math.round(s.x*e),Math.round(s.y*e),i,n,h.RGBA,h.UNSIGNED_BYTE,o),{pixels:new Uint8ClampedArray(o.buffer),width:i,height:n}}destroy(){this.managedTextures.slice().forEach(t=>this.onSourceDestroy(t)),this.managedTextures=null,this._renderer=null;}}Qa.extension={type:[b.WebGLSystem],name:"texture"};class Ja{init(){const t=new st({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new G,type:"mat3x3<f32>"},uRound:{value:0,type:"f32"}}),e=Fe({name:"graphics",bits:[Us,Ls(wt),Hs,Ue]});this.shader=new St({glProgram:e,resources:{localUniforms:t,batchSamplers:$s}});}execute(t,e){const s=e.context,i=s.customShader||this.shader,n=t.renderer,o=n.graphicsContext,{geometry:a,instructions:u}=o.getContextRenderData(s);i.groups[0]=n.globalUniforms.bindGroup,n.shader.bind(i),n.geometry.bind(a,i.glProgram);const l=u.instructions;for(let h=0;h<u.instructionSize;h++){const c=l[h];if(c.size){for(let d=0;d<c.textures.textures.length;d++)n.texture.bind(c.textures.textures[d],d);n.geometry.draw("triangle-list",c.size,c.start);}}}destroy(){this.shader.destroy(!0),this.shader=null;}}Ja.extension={type:[b.WebGLPipesAdaptor],name:"graphics"};class tu{init(){const t=Fe({name:"mesh",bits:[Hs,Jm,Ue]});this._shader=new St({glProgram:t,resources:{uTexture:A.EMPTY.source}});}execute(t,e){const s=t.renderer;let i=e._shader;if(i){if(!i.glProgram)return}else {i=this._shader;const n=e.texture.source;i.resources.uTexture=n,i.resources.uSampler=n.style;}i.groups[100]=s.globalUniforms.bindGroup,i.groups[101]=t.localUniformsBindGroup,s.encoder.draw({geometry:e._geometry,shader:i,state:e.state});}destroy(){this._shader.destroy(!0),this._shader=null;}}tu.extension={type:[b.WebGLPipesAdaptor],name:"mesh"};class eu{constructor(t){this._renderer=t;}addRenderable(t,e){this._renderer.renderPipes.batch.break(e),e.add(t);}execute(t){t.isRenderable&&t.render(this._renderer);}destroy(){this._renderer=null;}}eu.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"customRender"};function ru(r,t){const e=r.instructionSet,s=e.instructions;for(let i=0;i<e.instructionSize;i++){const n=s[i];t[n.renderPipeId].execute(n);}}class su{constructor(t){this._renderer=t;}addRenderGroup(t,e){this._renderer.renderPipes.batch.break(e),e.add(t);}execute(t){t.isRenderable&&(this._renderer.globalUniforms.push({worldTransformMatrix:t.worldTransform,worldColor:t.worldColorAlpha}),ru(t,this._renderer.renderPipes),this._renderer.globalUniforms.pop());}destroy(){this._renderer=null;}}su.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"renderGroup"};function iu(r,t=[]){t.push(r);for(let e=0;e<r.renderGroupChildren.length;e++)iu(r.renderGroupChildren[e],t);return t}const q2=new W;function nu(r,t=!1){i_(r);const e=r.childrenToUpdate,s=r.updateTick;r.updateTick++;for(const i in e){const n=e[i],o=n.list,a=n.index;for(let u=0;u<a;u++)ou(o[u],s,0);n.index=0;}if(t)for(let i=0;i<r.renderGroupChildren.length;i++)nu(r.renderGroupChildren[i],t);}function i_(r){const t=r.root;let e;if(r.renderGroupParent){const s=r.renderGroupParent;r.worldTransform.appendFrom(t.relativeGroupTransform,s.worldTransform),r.worldColor=xs(t.groupColor,s.worldColor),e=t.groupAlpha*s.worldAlpha;}else r.worldTransform.copyFrom(t.localTransform),r.worldColor=t.localColor,e=t.localAlpha;e=e<0?0:e>1?1:e,r.worldAlpha=e,r.worldColorAlpha=r.worldColor+((e*255|0)<<24);}function ou(r,t,e){if(t===r.updateTick)return;r.updateTick=t,r.didChange=!1;const s=r.localTransform;r.updateLocalTransform();const i=r.parent;if(i&&!i.isRenderGroupRoot?(e=e|r._updateFlags,r.relativeGroupTransform.appendFrom(s,i.relativeGroupTransform),e&&n_(r,i,e)):(e=r._updateFlags,r.relativeGroupTransform.copyFrom(s),e&&n_(r,q2,e)),!r.isRenderGroupRoot){const n=r.children,o=n.length;for(let u=0;u<o;u++)ou(n[u],t,e);const a=r.renderGroup;r.renderPipeId&&!a.structureDidChange&&a.updateRenderable(r);}}function n_(r,t,e){if(e&is){r.groupColor=xs(r.localColor,t.groupColor);let s=r.localAlpha*t.groupAlpha;s=s<0?0:s>1?1:s,r.groupAlpha=s,r.groupColorAlpha=r.groupColor+((s*255|0)<<24);}e&qi&&(r.groupBlendMode=r.localBlendMode==="inherit"?t.groupBlendMode:r.localBlendMode),e&nr&&(r.globalDisplayStatus=r.localDisplayStatus&t.globalDisplayStatus),r._updateFlags=0;}function o_(r,t){const{list:e,index:s}=r.childrenRenderablesToUpdate;let i=!1;for(let n=0;n<s;n++){const o=e[n];if(i=t[o.renderPipeId].validateRenderable(o),i)break}return r.structureDidChange=i,i}const Z2=new G;class au{constructor(t){this._renderer=t;}render({container:t,transform:e}){t.isRenderGroup=!0;const s=t.parent,i=t.renderGroup.renderGroupParent;t.parent=null,t.renderGroup.renderGroupParent=null;const n=this._renderer,o=iu(t.renderGroup,[]);let a=Z2;e&&(a=a.copyFrom(t.renderGroup.localTransform),t.renderGroup.localTransform.copyFrom(e));const u=n.renderPipes;for(let l=0;l<o.length;l++){const h=o[l];h.runOnRender(),h.instructionSet.renderPipes=u,h.structureDidChange||o_(h,u),nu(h),h.structureDidChange?(h.structureDidChange=!1,tg(h,u)):Q2(h),h.childrenRenderablesToUpdate.index=0,n.renderPipes.batch.upload(h.instructionSet);}n.globalUniforms.start({worldTransformMatrix:e?t.renderGroup.localTransform:t.renderGroup.worldTransform}),ru(t.renderGroup,u),u.uniformBatch&&u.uniformBatch.renderEnd(),e&&t.renderGroup.localTransform.copyFrom(a),t.parent=s,t.renderGroup.renderGroupParent=i;}destroy(){this._renderer=null;}}au.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:"renderGroup"};function Q2(r){const{list:t,index:e}=r.childrenRenderablesToUpdate;for(let s=0;s<e;s++){const i=t[s];i.didViewUpdate&&r.updateRenderable(i);}}class uu{constructor(t){this._gpuSpriteHash=Object.create(null),this._renderer=t;}addRenderable(t,e){const s=this._getGpuSprite(t);t._didSpriteUpdate&&this._updateBatchableSprite(t,s),this._renderer.renderPipes.batch.addToBatch(s);}updateRenderable(t){const e=this._gpuSpriteHash[t.uid];t._didSpriteUpdate&&this._updateBatchableSprite(t,e),e.batcher.updateElement(e);}validateRenderable(t){const e=t._texture,s=this._getGpuSprite(t);return s.texture._source!==e._source?!s.batcher.checkAndUpdateTexture(s,e):!1}destroyRenderable(t){const e=this._gpuSpriteHash[t.uid];X.return(e),this._gpuSpriteHash[t.uid]=null;}_updateBatchableSprite(t,e){t._didSpriteUpdate=!1,e.bounds=t.bounds,e.texture=t._texture;}_getGpuSprite(t){return this._gpuSpriteHash[t.uid]||this._initGPUSprite(t)}_initGPUSprite(t){const e=X.get(ws);return e.renderable=t,e.texture=t._texture,e.bounds=t.bounds,e.roundPixels=this._renderer._roundPixels|t._roundPixels,this._gpuSpriteHash[t.uid]=e,t._didSpriteUpdate=!1,t.on("destroyed",()=>{this.destroyRenderable(t);}),e}destroy(){for(const t in this._gpuSpriteHash)X.return(this._gpuSpriteHash[t]);this._gpuSpriteHash=null,this._renderer=null;}}uu.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"sprite"};var J2=Object.defineProperty,a_=Object.getOwnPropertySymbols,tE=Object.prototype.hasOwnProperty,eE=Object.prototype.propertyIsEnumerable,u_=(r,t,e)=>t in r?J2(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,l_=(r,t)=>{for(var e in t||(t={}))tE.call(t,e)&&u_(r,e,t[e]);if(a_)for(var e of a_(t))eE.call(t,e)&&u_(r,e,t[e]);return r};const lu=class $x{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new V(0),this.color=this._backgroundColor,this.alpha=1;}init(t){t=l_(l_({},$x.defaultOptions),t),this.clearBeforeRender=t.clearBeforeRender,this.color=t.background||t.backgroundColor||this._backgroundColor,this.alpha=t.backgroundAlpha,this._backgroundColor.setAlpha(t.backgroundAlpha);}get color(){return this._backgroundColor}set color(t){this._backgroundColor.setValue(t);}get alpha(){return this._backgroundColor.alpha}set alpha(t){this._backgroundColor.setAlpha(t);}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};lu.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:"background",priority:0},lu.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};let h_=lu;const Xr={};D.handle(b.BlendMode,r=>{if(!r.name)throw new Error("BlendMode extension must have a name property");Xr[r.name]=r.ref;},r=>{delete Xr[r.name];});class hu{constructor(t){this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=t;}setBlendMode(t,e,s){if(this._activeBlendMode===e){this._isAdvanced&&this._renderableList.push(t);return}this._activeBlendMode=e,this._isAdvanced&&this._endAdvancedBlendMode(s),this._isAdvanced=!!Xr[e],this._isAdvanced&&(this._beginAdvancedBlendMode(s),this._renderableList.push(t));}_beginAdvancedBlendMode(t){this._renderer.renderPipes.batch.break(t);const e=this._activeBlendMode;if(!Xr[e])return;this._filterHash[e]||(this._filterHash[e]=new Jr({filters:[new Xr[e]]}));const s={renderPipeId:"filter",action:"pushFilter",renderables:[],filterEffect:this._filterHash[e],canBundle:!1};this._renderableList=s.renderables,t.add(s);}_endAdvancedBlendMode(t){this._renderableList=null,this._renderer.renderPipes.batch.break(t),t.add({renderPipeId:"filter",action:"popFilter",canBundle:!1});}buildStart(){this._isAdvanced=!1;}buildEnd(t){this._isAdvanced&&this._endAdvancedBlendMode(t);}destroy(){this._renderer=null,this._renderableList=null;for(const t in this._filterHash)this._filterHash[t].destroy();this._filterHash=null;}}hu.extension={type:[b.WebGLPipes,b.WebGPUPipes,b.CanvasPipes],name:"blendMode"};var rE=Object.defineProperty,c_=Object.getOwnPropertySymbols,sE=Object.prototype.hasOwnProperty,iE=Object.prototype.propertyIsEnumerable,d_=(r,t,e)=>t in r?rE(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,cu=(r,t)=>{for(var e in t||(t={}))sE.call(t,e)&&d_(r,e,t[e]);if(c_)for(var e of c_(t))iE.call(t,e)&&d_(r,e,t[e]);return r};const du=class Nx{constructor(t){this._renderer=t;}_normalizeOptions(t,e={}){return t instanceof W||t instanceof A?cu({target:t},e):cu(cu({},e),t)}async image(t){const e=new Image;return e.src=await this.base64(t),e}async base64(t){t=this._normalizeOptions(t,Nx.defaultImageOptions);const{format:e,quality:s}=t,i=this.canvas(t);if(i.toBlob!==void 0)return new Promise((n,o)=>{i.toBlob(a=>{if(!a){o(new Error("ICanvas.toBlob failed!"));return}const u=new FileReader;u.onload=()=>n(u.result),u.onerror=o,u.readAsDataURL(a);},e,s);});if(i.toDataURL!==void 0)return i.toDataURL(e,s);if(i.convertToBlob!==void 0){const n=await i.convertToBlob({type:e,quality:s});return new Promise((o,a)=>{const u=new FileReader;u.onload=()=>o(u.result),u.onerror=a,u.readAsDataURL(n);})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(t){t=this._normalizeOptions(t);const e=t.target,s=this._renderer;if(e instanceof A)return s.texture.generateCanvas(e);const i=s.textureGenerator.generateTexture(t),n=s.texture.generateCanvas(i);return i.destroy(),n}pixels(t){t=this._normalizeOptions(t);const e=t.target,s=this._renderer,i=e instanceof A?e:s.textureGenerator.generateTexture(t),n=s.texture.getPixels(i);return e instanceof W&&i.destroy(),n}texture(t){return t=this._normalizeOptions(t),t.target instanceof A?t.target:this._renderer.textureGenerator.generateTexture(t)}download(t){var e;t=this._normalizeOptions(t);const s=this.canvas(t),i=document.createElement("a");i.download=(e=t.filename)!=null?e:"image.png",i.href=s.toDataURL("image/png"),document.body.appendChild(i),i.click(),document.body.removeChild(i);}log(t){var e;const s=(e=t.width)!=null?e:200;t=this._normalizeOptions(t);const i=this.canvas(t),n=i.toDataURL();console.log(`[Pixi Texture] ${i.width}px ${i.height}px`);const o=["font-size: 1px;",`padding: ${s}px 300px;`,`background: url(${n}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",o);}destroy(){this._renderer=null;}};du.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:"extract"},du.defaultImageOptions={format:"png",quality:1};let p_=du;class f_ extends A{static create(t){return new A({source:new et(t)})}resize(t,e,s){return this.source.resize(t,e,s),this}}var nE=Object.defineProperty,oE=Object.defineProperties,aE=Object.getOwnPropertyDescriptors,m_=Object.getOwnPropertySymbols,uE=Object.prototype.hasOwnProperty,lE=Object.prototype.propertyIsEnumerable,g_=(r,t,e)=>t in r?nE(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,hE=(r,t)=>{for(var e in t||(t={}))uE.call(t,e)&&g_(r,e,t[e]);if(m_)for(var e of m_(t))lE.call(t,e)&&g_(r,e,t[e]);return r},cE=(r,t)=>oE(r,aE(t));const dE=new H,pE=new lt,fE=[0,0,0,0];class pu{constructor(t){this._renderer=t;}generateTexture(t){var e;t instanceof W&&(t={target:t,frame:void 0,textureSourceOptions:{},resolution:void 0});const s=t.resolution||this._renderer.resolution,i=t.antialias||this._renderer.view.antialias,n=t.target;let o=t.clearColor;o?o=Array.isArray(o)&&o.length===4?o:V.shared.setValue(o).toArray():o=fE;const a=((e=t.frame)==null?void 0:e.copyTo(dE))||ss(n,pE).rectangle;a.width=Math.max(a.width,1/s)|0,a.height=Math.max(a.height,1/s)|0;const u=f_.create(cE(hE({},t.textureSourceOptions),{width:a.width,height:a.height,resolution:s,antialias:i})),l=G.shared.translate(-a.x,-a.y);return this._renderer.render({container:n,transform:l,target:u,clearColor:o}),u}destroy(){this._renderer=null;}}pu.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:"textureGenerator"};class fu{constructor(t){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=t;}reset(){this._stackIndex=0;for(let t=0;t<this._activeUniforms.length;t++)this._uniformsPool.push(this._activeUniforms[t]);for(let t=0;t<this._activeBindGroups.length;t++)this._bindGroupPool.push(this._activeBindGroups[t]);this._activeUniforms.length=0,this._activeBindGroups.length=0;}start(t){this.reset(),this.push(t);}bind({size:t,projectionMatrix:e,worldTransformMatrix:s,worldColor:i,offset:n}){const o=this._renderer.renderTarget.renderTarget,a=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:o,worldTransformMatrix:new G,worldColor:4294967295,offset:new j},u={projectionMatrix:e||this._renderer.renderTarget.projectionMatrix,resolution:t||o.size,worldTransformMatrix:s||a.worldTransformMatrix,worldColor:i||a.worldColor,offset:n||a.offset,bindGroup:null},l=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(l);const h=l.uniforms;h.uProjectionMatrix=u.projectionMatrix,h.uResolution=u.resolution,h.uWorldTransformMatrix.copyFrom(u.worldTransformMatrix),h.uWorldTransformMatrix.tx-=u.offset.x,h.uWorldTransformMatrix.ty-=u.offset.y,gr(u.worldColor,h.uWorldColorAlpha,0),l.update();let c;this._renderer.renderPipes.uniformBatch?c=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(l,!1):(c=this._bindGroupPool.pop()||new Lt,this._activeBindGroups.push(c),c.setResource(l,0)),u.bindGroup=c,this._currentGlobalUniformData=u;}push(t){this.bind(t),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData;}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===xt.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update();}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new st({uProjectionMatrix:{value:new G,type:"mat3x3<f32>"},uWorldTransformMatrix:{value:new G,type:"mat3x3<f32>"},uWorldColorAlpha:{value:new Float32Array(4),type:"vec4<f32>"},uResolution:{value:[0,0],type:"vec2<f32>"}},{isStatic:!0})}destroy(){this._renderer=null;}}fu.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:"globalUniforms"};let __=!1;const mu="8.0.0";function x_(r){if(!__){if(z.get().getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){const t=[`%c  %c  %c  %c  %c PixiJS %c v${mu} (${r}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...t);}else globalThis.console&&globalThis.console.log(`PixiJS ${mu} - ${r} - http://www.pixijs.com/`);__=!0;}}class Si{constructor(t){this._renderer=t;}init(t){if(t.hello){let e=this._renderer.name;this._renderer.type===xt.WEBGL&&(e+=` ${this._renderer.context.webGLVersion}`),x_(e);}}}Si.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:"hello",priority:-2},Si.defaultOptions={hello:!1};var mE=Object.defineProperty,b_=Object.getOwnPropertySymbols,gE=Object.prototype.hasOwnProperty,_E=Object.prototype.propertyIsEnumerable,v_=(r,t,e)=>t in r?mE(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,y_=(r,t)=>{for(var e in t||(t={}))gE.call(t,e)&&v_(r,e,t[e]);if(b_)for(var e of b_(t))_E.call(t,e)&&v_(r,e,t[e]);return r};const gu=class Hx{constructor(t){this._renderer=t,this.count=0,this.checkCount=0;}init(t){t=y_(y_({},Hx.defaultOptions),t),this.checkCountMax=t.textureGCCheckCountMax,this.maxIdle=t.textureGCAMaxIdle,this.active=t.textureGCActive;}postrender(){this._renderer.renderingToScreen&&(this.count++,this.active&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())));}run(){const t=this._renderer.texture.managedTextures;for(let e=0;e<t.length;e++){const s=t[e];s.autoGarbageCollect&&s.resource&&s._touched>-1&&this.count-s._touched>this.maxIdle&&(s._touched=-1,s.unload());}}destroy(){this._renderer=null;}};gu.extension={type:[b.WebGLSystem,b.WebGPUSystem],name:"textureGC"},gu.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:60*60,textureGCCheckCountMax:600};let _u=gu;D.add(_u);var xE=Object.defineProperty,T_=Object.getOwnPropertySymbols,bE=Object.prototype.hasOwnProperty,vE=Object.prototype.propertyIsEnumerable,S_=(r,t,e)=>t in r?xE(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,E_=(r,t)=>{for(var e in t||(t={}))bE.call(t,e)&&S_(r,e,t[e]);if(T_)for(var e of T_(t))vE.call(t,e)&&S_(r,e,t[e]);return r};const xu=class Xx{get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t);}init(t){t=E_(E_({},Xx.defaultOptions),t),t.view&&(t.canvas=t.view),this.screen=new H(0,0,t.width,t.height),this.canvas=t.canvas||z.get().createCanvas(),this.antialias=!!t.antialias,this.texture=$a(this.canvas,t),this.renderTarget=new xi({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.multiView=!!t.multiView,this.autoDensity&&(this.canvas.style.width=`${this.texture.width}px`,this.canvas.style.height=`${this.texture.height}px`),this.resolution=t.resolution;}resize(t,e,s){this.texture.source.resize(t,e,s),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height,this.autoDensity&&(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`);}destroy(t=!1){(typeof t=="boolean"?t:t!=null&&t.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);}};xu.extension={type:[b.WebGLSystem,b.WebGPUSystem,b.CanvasSystem],name:"view",priority:0},xu.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let A_=xu;const bu=[h_,fu,Si,A_,au,_u,pu,p_],vu=[hu,ya,uu,su,Ta,Ea,Sa,eu],yE=[...bu,La,fg,og,Aa,Qa,Ha,Oa,Ya,Va,Ia,Wg,Ba,Ga],TE=[...vu],SE=[ba,tu,Ja],P_=[],w_=[],R_=[];D.handleByNamedList(b.WebGLSystem,P_),D.handleByNamedList(b.WebGLPipes,w_),D.handleByNamedList(b.WebGLPipesAdaptor,R_),D.add(...yE,...TE,...SE);class M_ extends Mr{constructor(){const t={name:"webgl",type:xt.WEBGL,systems:P_,renderPipes:w_,renderPipeAdaptors:R_};super(t);}}var EE={__proto__:null,WebGLRenderer:M_};class yu{constructor(t){this._hash=Object.create(null),this._renderer=t;}contextChange(t){this._gpu=t;}getBindGroup(t,e,s){return t._updateKey(),this._hash[t._key]||this._createBindGroup(t,e,s)}_createBindGroup(t,e,s){var i;const n=this._gpu.device,o=e.layout[s],a=[],u=this._renderer;for(const c in o){const d=(i=t.resources[c])!=null?i:t.resources[o[c]];let f;if(d._resourceType==="uniformGroup"){const p=d;u.ubo.updateUniformGroup(p);const g=p.buffer;f={buffer:u.buffer.getGPUBuffer(g),offset:0,size:g.descriptor.size};}else if(d._resourceType==="buffer"){const p=d;f={buffer:u.buffer.getGPUBuffer(p),offset:0,size:p.descriptor.size};}else if(d._resourceType==="bufferResource"){const p=d;f={buffer:u.buffer.getGPUBuffer(p.buffer),offset:p.offset,size:p.size};}else if(d._resourceType==="textureSampler"){const p=d;f=u.texture.getGpuSampler(p);}else if(d._resourceType==="textureSource"){const p=d;f=u.texture.getGpuSource(p).createView({});}a.push({binding:o[c],resource:f});}const l=u.shader.getProgramData(e).bindGroups[s],h=n.createBindGroup({layout:l,entries:a});return this._hash[t._key]=h,h}destroy(){for(const t of Object.keys(this._hash))this._hash[t]=null;this._hash=null,this._renderer=null;}}yu.extension={type:[b.WebGPUSystem],name:"bindGroup"};class Tu{constructor(){this._gpuBuffers=Object.create(null),this._managedBuffers=[];}contextChange(t){this._gpu=t;}getGPUBuffer(t){return this._gpuBuffers[t.uid]||this.createGPUBuffer(t)}updateBuffer(t){const e=this._gpuBuffers[t.uid]||this.createGPUBuffer(t),s=t.data;return t._updateID&&s&&(t._updateID=0,this._gpu.device.queue.writeBuffer(e,0,s.buffer,0,(t._updateSize||s.byteLength)+3&-4)),e}destroyAll(){for(const t in this._gpuBuffers)this._gpuBuffers[t].destroy();this._gpuBuffers={};}createGPUBuffer(t){this._gpuBuffers[t.uid]||(t.on("update",this.updateBuffer,this),t.on("change",this.onBufferChange,this),t.on("destroy",this.onBufferDestroy,this));const e=this._gpu.device.createBuffer(t.descriptor);return t._updateID=0,t.data&&(gs(t.data.buffer,e.getMappedRange()),e.unmap()),this._gpuBuffers[t.uid]=e,this._managedBuffers.push(t),e}onBufferChange(t){this._gpuBuffers[t.uid].destroy(),t._updateID=0,this._gpuBuffers[t.uid]=this.createGPUBuffer(t);}onBufferDestroy(t){this._gpuBuffers[t.uid].destroy(),this._managedBuffers.splice(this._managedBuffers.indexOf(t),1),t.off("update",this.updateBuffer,this),t.off("change",this.onBufferChange,this),t.off("destroy",this.onBufferDestroy,this),this._gpuBuffers[t.uid]=null;}destroy(){this._managedBuffers.slice().forEach(t=>this.onBufferDestroy(t)),this._managedBuffers=null,this._gpuBuffers=null;}}Tu.extension={type:[b.WebGPUSystem],name:"buffer"};function AE(r,t){const e=r.descriptor.size,s=t.gpu.device,i=new _t({data:new Float32Array(24e5),usage:$.MAP_READ|$.COPY_DST}),n=t.buffer.createGPUBuffer(i),o=s.createCommandEncoder();o.copyBufferToBuffer(t.buffer.getGPUBuffer(r),0,n,0,e),s.queue.submit([o.finish()]),n.mapAsync(GPUMapMode.READ,0,e).then(()=>{n.getMappedRange(0,e),n.unmap();});}class O_{constructor({minUniformOffsetAlignment:t}){this._minUniformOffsetAlignment=256,this.byteIndex=0,this._minUniformOffsetAlignment=t,this.data=new Float32Array(65535);}clear(){this.byteIndex=0;}addEmptyGroup(t){if(t>this._minUniformOffsetAlignment/4)throw new Error(`UniformBufferBatch: array is too large: ${t*4}`);const e=this.byteIndex;let s=e+t*4;if(s=Math.ceil(s/this._minUniformOffsetAlignment)*this._minUniformOffsetAlignment,s>this.data.length*4)throw new Error("UniformBufferBatch: ubo batch got too big");return this.byteIndex=s,e}addGroup(t){const e=this.addEmptyGroup(t.length);for(let s=0;s<t.length;s++)this.data[e/4+s]=t[s];return e}destroy(){this._buffer.destroy(),this._buffer=null,this.data=null;}}class Su{constructor(t){this._colorMaskCache=15,this._renderer=t;}setMask(t){this._colorMaskCache!==t&&(this._colorMaskCache=t,this._renderer.pipeline.setColorMask(t));}destroy(){this._renderer=null,this._colorMaskCache=null;}}Su.extension={type:[b.WebGPUSystem],name:"colorMask"};class Ei{constructor(t){this._renderer=t;}async init(t){return this._initPromise?this._initPromise:(this._initPromise=this._createDeviceAndAdaptor(t).then(e=>{this.gpu=e,this._renderer.runners.contextChange.emit(this.gpu);}),this._initPromise)}contextChange(t){this._renderer.gpu=t;}async _createDeviceAndAdaptor(t){const e=await navigator.gpu.requestAdapter({powerPreference:t.powerPreference,forceFallbackAdapter:t.forceFallbackAdapter}),s=["texture-compression-bc","texture-compression-astc","texture-compression-etc2"].filter(n=>e.features.has(n)),i=await e.requestDevice({requiredFeatures:s});return {adapter:e,device:i}}destroy(){this.gpu=null,this._renderer=null;}}Ei.extension={type:[b.WebGPUSystem],name:"device"},Ei.defaultOptions={powerPreference:void 0,forceFallbackAdapter:!1};var PE=Object.defineProperty,C_=Object.getOwnPropertySymbols,wE=Object.prototype.hasOwnProperty,RE=Object.prototype.propertyIsEnumerable,G_=(r,t,e)=>t in r?PE(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,I_=(r,t)=>{for(var e in t||(t={}))wE.call(t,e)&&G_(r,e,t[e]);if(C_)for(var e of C_(t))RE.call(t,e)&&G_(r,e,t[e]);return r};class Eu{constructor(t){this._boundBindGroup=Object.create(null),this._boundVertexBuffer=Object.create(null),this._renderer=t;}renderStart(){this.commandFinished=new Promise(t=>{this._resolveCommandFinished=t;}),this.commandEncoder=this._renderer.gpu.device.createCommandEncoder();}beginRenderPass(t){this.endRenderPass(),this._clearCache(),this.renderPassEncoder=this.commandEncoder.beginRenderPass(t.descriptor);}endRenderPass(){this.renderPassEncoder&&this.renderPassEncoder.end(),this.renderPassEncoder=null;}setViewport(t){this.renderPassEncoder.setViewport(t.x,t.y,t.width,t.height,0,1);}setPipelineFromGeometryProgramAndState(t,e,s,i){const n=this._renderer.pipeline.getPipeline(t,e,s,i);this.setPipeline(n);}setPipeline(t){this._boundPipeline!==t&&(this._boundPipeline=t,this.renderPassEncoder.setPipeline(t));}_setVertexBuffer(t,e){this._boundVertexBuffer[t]!==e&&(this._boundVertexBuffer[t]=e,this.renderPassEncoder.setVertexBuffer(t,this._renderer.buffer.updateBuffer(e)));}_setIndexBuffer(t){if(this._boundIndexBuffer===t)return;this._boundIndexBuffer=t;const e=t.data.BYTES_PER_ELEMENT===2?"uint16":"uint32";this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(t),e);}resetBindGroup(t){this._boundBindGroup[t]=null;}setBindGroup(t,e,s){if(this._boundBindGroup[t]===e)return;this._boundBindGroup[t]=e,e._touch(this._renderer.textureGC.count);const i=this._renderer.bindGroup.getBindGroup(e,s,t);this.renderPassEncoder.setBindGroup(t,i);}setGeometry(t){for(const e in t.attributes){const s=t.attributes[e];this._setVertexBuffer(s.location,s.buffer);}t.indexBuffer&&this._setIndexBuffer(t.indexBuffer);}_setShaderBindGroups(t,e){for(const s in t.groups){const i=t.groups[s];e||this._syncBindGroup(i),this.setBindGroup(s,i,t.gpuProgram);}}_syncBindGroup(t){for(const e in t.resources){const s=t.resources[e];s.isUniformGroup&&this._renderer.ubo.updateUniformGroup(s);}}draw(t){const{geometry:e,shader:s,state:i,topology:n,size:o,start:a,instanceCount:u,skipSync:l}=t;this.setPipelineFromGeometryProgramAndState(e,s.gpuProgram,i,n),this.setGeometry(e),this._setShaderBindGroups(s,l),e.indexBuffer?this.renderPassEncoder.drawIndexed(o||e.indexBuffer.data.length,u||e.instanceCount,a||0):this.renderPassEncoder.draw(o||e.getSize(),u||e.instanceCount,a||0);}finishRenderPass(){this.renderPassEncoder&&(this.renderPassEncoder.end(),this.renderPassEncoder=null);}postrender(){this.finishRenderPass(),this._gpu.device.queue.submit([this.commandEncoder.finish()]),this._resolveCommandFinished(),this.commandEncoder=null;}restoreRenderPass(){const t=this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget,!1,[0,0,0,1]);this.renderPassEncoder=this.commandEncoder.beginRenderPass(t);const e=this._boundPipeline,s=I_({},this._boundVertexBuffer),i=this._boundIndexBuffer,n=I_({},this._boundBindGroup);this._clearCache();const o=this._renderer.renderTarget.viewport;this.renderPassEncoder.setViewport(o.x,o.y,o.width,o.height,0,1),this.setPipeline(e);for(const a in s)this._setVertexBuffer(a,s[a]);for(const a in n)this.setBindGroup(a,n[a],null);this._setIndexBuffer(i);}_clearCache(){for(let t=0;t<16;t++)this._boundBindGroup[t]=null,this._boundVertexBuffer[t]=null;this._boundIndexBuffer=null,this._boundPipeline=null;}destroy(){this._renderer=null,this._gpu=null,this._boundBindGroup=null,this._boundVertexBuffer=null,this._boundIndexBuffer=null,this._boundPipeline=null;}contextChange(t){this._gpu=t;}}Eu.extension={type:[b.WebGPUSystem],name:"encoder",priority:1};class Au{constructor(t){this._renderTargetStencilState=Object.create(null),this._renderer=t,t.renderTarget.onRenderTargetChange.add(this);}onRenderTargetChange(t){let e=this._renderTargetStencilState[t.uid];e||(e=this._renderTargetStencilState[t.uid]={stencilMode:nt.DISABLED,stencilReference:0}),this._activeRenderTarget=t,this.setStencilMode(e.stencilMode,e.stencilReference);}setStencilMode(t,e){const s=this._renderTargetStencilState[this._activeRenderTarget.uid];s.stencilMode=t,s.stencilReference=e;const i=this._renderer;i.pipeline.setStencilMode(t),i.encoder.renderPassEncoder.setStencilReference(e);}destroy(){this._renderer.renderTarget.onRenderTargetChange.remove(this),this._renderer=null,this._activeRenderTarget=null,this._renderTargetStencilState=null;}}Au.extension={type:[b.WebGPUSystem],name:"stencil"};const zr={i32:{align:4,size:4},u32:{align:4,size:4},f32:{align:4,size:4},f16:{align:2,size:2},"vec2<i32>":{align:8,size:8},"vec2<u32>":{align:8,size:8},"vec2<f32>":{align:8,size:8},"vec2<f16>":{align:4,size:4},"vec3<i32>":{align:16,size:12},"vec3<u32>":{align:16,size:12},"vec3<f32>":{align:16,size:12},"vec3<f16>":{align:8,size:6},"vec4<i32>":{align:16,size:16},"vec4<u32>":{align:16,size:16},"vec4<f32>":{align:16,size:16},"vec4<f16>":{align:8,size:8},"mat2x2<f32>":{align:8,size:16},"mat2x2<f16>":{align:4,size:8},"mat3x2<f32>":{align:8,size:24},"mat3x2<f16>":{align:4,size:12},"mat4x2<f32>":{align:8,size:32},"mat4x2<f16>":{align:4,size:16},"mat2x3<f32>":{align:16,size:32},"mat2x3<f16>":{align:8,size:16},"mat3x3<f32>":{align:16,size:48},"mat3x3<f16>":{align:8,size:24},"mat4x3<f32>":{align:16,size:64},"mat4x3<f16>":{align:8,size:32},"mat2x4<f32>":{align:16,size:32},"mat2x4<f16>":{align:8,size:16},"mat3x4<f32>":{align:16,size:48},"mat3x4<f16>":{align:8,size:24},"mat4x4<f32>":{align:16,size:64},"mat4x4<f16>":{align:8,size:32}};function B_(r){const t=r.map(s=>({data:s,offset:0,size:0}));let e=0;for(let s=0;s<t.length;s++){const i=t[s];let n=zr[i.data.type].size;const o=zr[i.data.type].align;if(!zr[i.data.type])throw new Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${i.data.type}`);i.data.size>1&&(n=Math.max(n,o)*i.data.size),e=Math.ceil(e/o)*o,i.size=n,i.offset=e,e+=n;}return e=Math.ceil(e/16)*16,{uboElements:t,size:e}}function F_(r,t){const{size:e,align:s}=zr[r.data.type],i=(s-e)/4;return `
         v = uv.${r.data.name};
         ${t!==0?`offset += ${t};`:""}

         arrayOffset = offset;

         t = 0;

         for(var i=0; i < ${r.data.size*(e/4)}; i++)
         {
             for(var j = 0; j < ${e/4}; j++)
             {
                 data[arrayOffset++] = v[t++];
             }
             ${i!==0?`arrayOffset += ${i};`:""}
         }
     `}function D_(r){return Ua(r,"uboWgsl",F_,bg)}class Pu extends Fa{constructor(){super({createUboElements:B_,generateUboSync:D_});}}Pu.extension={type:[b.WebGPUSystem],name:"ubo"};const se=128;class wu{constructor(t){this._bindGroupHash=Object.create(null),this._buffers=[],this._bindGroups=[],this._bufferResources=[],this._renderer=t,this._batchBuffer=new O_({minUniformOffsetAlignment:se});const e=256/se;for(let s=0;s<e;s++){let i=$.UNIFORM|$.COPY_DST;s===0&&(i|=$.COPY_SRC),this._buffers.push(new _t({data:this._batchBuffer.data,usage:i}));}}renderEnd(){this._uploadBindGroups(),this._resetBindGroups();}_resetBindGroups(){for(const t in this._bindGroupHash)this._bindGroupHash[t]=null;this._batchBuffer.clear();}getUniformBindGroup(t,e){if(!e&&this._bindGroupHash[t.uid])return this._bindGroupHash[t.uid];this._renderer.ubo.ensureUniformGroup(t);const s=t.buffer.data,i=this._batchBuffer.addEmptyGroup(s.length);return this._renderer.ubo.syncUniformGroup(t,this._batchBuffer.data,i/4),this._bindGroupHash[t.uid]=this._getBindGroup(i/se),this._bindGroupHash[t.uid]}getUboResource(t){this._renderer.ubo.updateUniformGroup(t);const e=t.buffer.data,s=this._batchBuffer.addGroup(e);return this._getBufferResource(s/se)}getArrayBindGroup(t){const e=this._batchBuffer.addGroup(t);return this._getBindGroup(e/se)}getArrayBufferResource(t){const e=this._batchBuffer.addGroup(t)/se;return this._getBufferResource(e)}_getBufferResource(t){if(!this._bufferResources[t]){const e=this._buffers[t%2];this._bufferResources[t]=new bi({buffer:e,offset:(t/2|0)*256,size:se});}return this._bufferResources[t]}_getBindGroup(t){if(!this._bindGroups[t]){const e=new Lt({0:this._getBufferResource(t)});this._bindGroups[t]=e;}return this._bindGroups[t]}_uploadBindGroups(){const t=this._renderer.buffer,e=this._buffers[0];e.update(this._batchBuffer.byteIndex),t.updateBuffer(e);const s=this._renderer.gpu.device.createCommandEncoder();for(let i=1;i<this._buffers.length;i++){const n=this._buffers[i];s.copyBufferToBuffer(t.getGPUBuffer(e),se,t.getGPUBuffer(n),0,this._batchBuffer.byteIndex);}this._renderer.gpu.device.queue.submit([s.finish()]);}destroy(){for(let t=0;t<this._bindGroups.length;t++)this._bindGroups[t].destroy();this._bindGroups=null,this._bindGroupHash=null;for(let t=0;t<this._buffers.length;t++)this._buffers[t].destroy();this._buffers=null;for(let t=0;t<this._bufferResources.length;t++)this._bufferResources[t].destroy();this._bufferResources=null,this._batchBuffer.destroy(),this._bindGroupHash=null,this._renderer=null;}}wu.extension={type:[b.WebGPUPipes],name:"uniformBatch"};var ME=Object.defineProperty,OE=Object.defineProperties,CE=Object.getOwnPropertyDescriptors,U_=Object.getOwnPropertySymbols,GE=Object.prototype.hasOwnProperty,IE=Object.prototype.propertyIsEnumerable,k_=(r,t,e)=>t in r?ME(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,BE=(r,t)=>{for(var e in t||(t={}))GE.call(t,e)&&k_(r,e,t[e]);if(U_)for(var e of U_(t))IE.call(t,e)&&k_(r,e,t[e]);return r},FE=(r,t)=>OE(r,CE(t));const DE={"point-list":0,"line-list":1,"line-strip":2,"triangle-list":3,"triangle-strip":4};function UE(r,t,e,s,i){return r<<24|t<<16|e<<10|s<<5|i}function kE(r,t,e,s){return e<<6|r<<3|s<<1|t}class Ru{constructor(t){this._moduleCache=Object.create(null),this._bufferLayoutsCache=Object.create(null),this._pipeCache=Object.create(null),this._pipeStateCaches=Object.create(null),this._colorMask=15,this._multisampleCount=1,this._renderer=t;}contextChange(t){this._gpu=t,this.setStencilMode(nt.DISABLED),this._updatePipeHash();}setMultisampleCount(t){this._multisampleCount!==t&&(this._multisampleCount=t,this._updatePipeHash());}setRenderTarget(t){this._multisampleCount=t.msaaSamples,this._depthStencilAttachment=t.descriptor.depthStencilAttachment?1:0,this._updatePipeHash();}setColorMask(t){this._colorMask!==t&&(this._colorMask=t,this._updatePipeHash());}setStencilMode(t){this._stencilMode!==t&&(this._stencilMode=t,this._stencilState=ee[t],this._updatePipeHash());}setPipeline(t,e,s,i){const n=this.getPipeline(t,e,s);i.setPipeline(n);}getPipeline(t,e,s,i){t._layoutKey||(Ra(t,e.attributeData),this._generateBufferKey(t)),i=i||t.topology;const n=UE(t._layoutKey,e._layoutKey,s.data,s._blendModeId,DE[i]);return this._pipeCache[n]?this._pipeCache[n]:(this._pipeCache[n]=this._createPipeline(t,e,s,i),this._pipeCache[n])}_createPipeline(t,e,s,i){const n=this._gpu.device,o=this._createVertexBufferLayouts(t),a=this._renderer.state.getColorTargets(s);a[0].writeMask=this._stencilMode===nt.RENDERING_MASK_ADD?0:this._colorMask;const u=this._renderer.shader.getProgramData(e).pipeline,l={vertex:{module:this._getModule(e.vertex.source),entryPoint:e.vertex.entryPoint,buffers:o},fragment:{module:this._getModule(e.fragment.source),entryPoint:e.fragment.entryPoint,targets:a},primitive:{topology:i,cullMode:s.cullMode},layout:u,multisample:{count:this._multisampleCount},label:"PIXI Pipeline"};return this._depthStencilAttachment&&(l.depthStencil=FE(BE({},this._stencilState),{format:"depth24plus-stencil8",depthWriteEnabled:s.depthTest,depthCompare:s.depthTest?"less":"always"})),n.createRenderPipeline(l)}_getModule(t){return this._moduleCache[t]||this._createModule(t)}_createModule(t){const e=this._gpu.device;return this._moduleCache[t]=e.createShaderModule({code:t}),this._moduleCache[t]}_generateBufferKey(t){const e=[];let s=0;const i=Object.keys(t.attributes).sort();for(let o=0;o<i.length;o++){const a=t.attributes[i[o]];e[s++]=a.location,e[s++]=a.offset,e[s++]=a.format,e[s++]=a.stride;}const n=e.join("");return t._layoutKey=_r(n,"geometry"),t._layoutKey}_createVertexBufferLayouts(t){if(this._bufferLayoutsCache[t._layoutKey])return this._bufferLayoutsCache[t._layoutKey];const e=[];return t.buffers.forEach(s=>{const i={arrayStride:0,stepMode:"vertex",attributes:[]},n=i.attributes;for(const o in t.attributes){const a=t.attributes[o];a.buffer===s&&(i.arrayStride=a.stride,i.stepMode=a.instance?"instance":"vertex",n.push({shaderLocation:a.location,offset:a.offset,format:a.format}));}n.length&&e.push(i);}),this._bufferLayoutsCache[t._layoutKey]=e,e}_updatePipeHash(){const t=kE(this._stencilMode,this._multisampleCount,this._colorMask,this._depthStencilAttachment);this._pipeStateCaches[t]||(this._pipeStateCaches[t]=Object.create(null)),this._pipeCache=this._pipeStateCaches[t];}destroy(){this._renderer=null,this._bufferLayoutsCache=null;}}Ru.extension={type:[b.WebGPUSystem],name:"pipeline"};class L_{constructor(){this.contexts=[],this.msaaTextures=[],this.msaaSamples=1;}}class $_{init(t,e){this._renderer=t,this._renderTargetSystem=e;}copyToTexture(t,e,s,i,n){const o=this._renderer,a=this._getGpuColorTexture(t),u=o.texture.getGpuSource(e.source);return o.encoder.commandEncoder.copyTextureToTexture({texture:a,origin:s},{texture:u,origin:n},i),e}startRenderPass(t,e=!0,s,i){const n=this._renderTargetSystem.getGpuRenderTarget(t),o=this.getDescriptor(t,e,s);n.descriptor=o,this._renderer.pipeline.setRenderTarget(n),this._renderer.encoder.beginRenderPass(n),this._renderer.encoder.setViewport(i);}finishRenderPass(){this._renderer.encoder.endRenderPass();}_getGpuColorTexture(t){const e=this._renderTargetSystem.getGpuRenderTarget(t);return e.contexts[0]?e.contexts[0].getCurrentTexture():this._renderer.texture.getGpuSource(t.colorTextures[0].source)}getDescriptor(t,e,s){typeof e=="boolean"&&(e=e?dt.ALL:dt.NONE);const i=this._renderTargetSystem,n=i.getGpuRenderTarget(t),o=t.colorTextures.map((u,l)=>{const h=n.contexts[l];let c,d;h?c=h.getCurrentTexture().createView():c=this._renderer.texture.getGpuSource(u).createView({mipLevelCount:1}),n.msaaTextures[l]&&(d=c,c=this._renderer.texture.getTextureView(n.msaaTextures[l]));const f=e&dt.COLOR?"clear":"load";return s!=null||(s=i.defaultClearColor),{view:c,resolveTarget:d,clearValue:s,storeOp:"store",loadOp:f}});let a;if((t.stencil||t.depth)&&!t.depthStencilTexture&&(t.ensureDepthStencilTexture(),t.depthStencilTexture.source.sampleCount=n.msaa?4:1),t.depthStencilTexture){const u=e&dt.STENCIL?"clear":"load",l=e&dt.DEPTH?"clear":"load";a={view:this._renderer.texture.getGpuSource(t.depthStencilTexture.source).createView(),stencilStoreOp:"store",stencilLoadOp:u,depthClearValue:1,depthLoadOp:l,depthStoreOp:"store"};}return {colorAttachments:o,depthStencilAttachment:a}}clear(t,e=!0,s,i){if(!e)return;const{gpu:n,encoder:o}=this._renderer,a=n.device;if(o.commandEncoder===null){const u=a.createCommandEncoder(),l=this.getDescriptor(t,e,s),h=u.beginRenderPass(l);h.setViewport(i.x,i.y,i.width,i.height,0,1),h.end();const c=u.finish();a.queue.submit([c]);}else this.startRenderPass(t,e,s,i);}initGpuRenderTarget(t){t.isRoot=!0;const e=new L_;return t.colorTextures.forEach((s,i)=>{if(Qt.test(s.resource)){const n=s.resource.getContext("webgpu"),o=s.transparent?"premultiplied":"opaque";try{n.configure({device:this._renderer.gpu.device,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,format:"bgra8unorm",alphaMode:o});}catch(a){console.error(a);}e.contexts[i]=n;}if(e.msaa=s.source.antialias,s.source.antialias){const n=new et({width:0,height:0,sampleCount:4});e.msaaTextures[i]=n;}}),e.msaa&&(e.msaaSamples=4,t.depthStencilTexture&&(t.depthStencilTexture.source.sampleCount=4)),e}ensureDepthStencilTexture(t){const e=this._renderTargetSystem.getGpuRenderTarget(t);t.depthStencilTexture&&e.msaa&&(t.depthStencilTexture.source.sampleCount=4);}resizeGpuRenderTarget(t){const e=this._renderTargetSystem.getGpuRenderTarget(t);e.width=t.width,e.height=t.height,e.msaa&&t.colorTextures.forEach((s,i)=>{const n=e.msaaTextures[i];n==null||n.resize(s.source.width,s.source.height,s.source._resolution);});}}class Mu extends Na{constructor(t){super(t),this.adaptor=new $_,this.adaptor.init(t,this);}}Mu.extension={type:[b.WebGPUSystem],name:"renderTarget"};class Ou{constructor(){this._gpuProgramData=Object.create(null);}contextChange(t){this._gpu=t;}getProgramData(t){return this._gpuProgramData[t._layoutKey]||this._createGPUProgramData(t)}_createGPUProgramData(t){const e=this._gpu.device,s=t.gpuLayout.map(n=>e.createBindGroupLayout({entries:n})),i={bindGroupLayouts:s};return this._gpuProgramData[t._layoutKey]={bindGroups:s,pipeline:e.createPipelineLayout(i)},this._gpuProgramData[t._layoutKey]}destroy(){this._gpu=null,this._gpuProgramData=null;}}Ou.extension={type:[b.WebGPUSystem],name:"shader"};const vt={};vt.normal={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}},vt.add={alpha:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one",operation:"add"}},vt.multiply={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"dst",dstFactor:"one-minus-src-alpha",operation:"add"}},vt.screen={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}},vt.overlay={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}},vt.none={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"zero",dstFactor:"zero",operation:"add"}},vt["normal-npm"]={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"}},vt["add-npm"]={alpha:{srcFactor:"one",dstFactor:"one",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"}},vt["screen-npm"]={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src",operation:"add"}},vt.erase={alpha:{srcFactor:"zero",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"zero",dstFactor:"one-minus-src",operation:"add"}};class Cu{constructor(){this.defaultState=new Ct,this.defaultState.blend=!0;}contextChange(t){this.gpu=t;}getColorTargets(t){return [{format:"bgra8unorm",writeMask:0,blend:vt[t.blendMode]||vt.normal}]}destroy(){this.gpu=null;}}Cu.extension={type:[b.WebGPUSystem],name:"state"};const N_={type:"image",upload(r,t,e){const s=r.resource,i=(r.pixelWidth|0)*(r.pixelHeight|0),n=s.byteLength/i;e.device.queue.writeTexture({texture:t},s,{offset:0,rowsPerImage:r.pixelHeight,bytesPerRow:r.pixelHeight*n},{width:r.pixelWidth,height:r.pixelHeight,depthOrArrayLayers:1});}},Gu={"bc1-rgba-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"bc2-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc3-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc7-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"etc1-rgb-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"etc2-rgba8unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"astc-4x4-unorm":{blockBytes:16,blockWidth:4,blockHeight:4}},LE={blockBytes:4,blockWidth:1,blockHeight:1},H_={type:"compressed",upload(r,t,e){let s=r.pixelWidth,i=r.pixelHeight;const n=Gu[r.format]||LE;for(let o=0;o<r.resource.length;o++){const a=r.resource[o],u=Math.ceil(s/n.blockWidth)*n.blockBytes;e.device.queue.writeTexture({texture:t,mipLevel:o},a,{offset:0,bytesPerRow:u},{width:Math.ceil(s/n.blockWidth)*n.blockWidth,height:Math.ceil(i/n.blockHeight)*n.blockHeight,depthOrArrayLayers:1}),s=Math.max(s>>1,1),i=Math.max(i>>1,1);}}},Iu={type:"image",upload(r,t,e){const s=r.resource;if(!s)return;const i=Math.min(t.width,r.resourceWidth||r.pixelWidth),n=Math.min(t.height,r.resourceHeight||r.pixelHeight),o=r.alphaMode==="premultiply-alpha-on-upload";e.device.queue.copyExternalImageToTexture({source:s},{texture:t,premultipliedAlpha:o},{width:i,height:n});}},X_={type:"video",upload(r,t,e){Iu.upload(r,t,e);}};class z_{constructor(t){this.device=t,this.sampler=t.createSampler({minFilter:"linear"}),this.pipelines={};}_getMipmapPipeline(t){let e=this.pipelines[t];return e||(this.mipmapShaderModule||(this.mipmapShaderModule=this.device.createShaderModule({code:`
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    `})),e=this.device.createRenderPipeline({layout:"auto",vertex:{module:this.mipmapShaderModule,entryPoint:"vertexMain"},fragment:{module:this.mipmapShaderModule,entryPoint:"fragmentMain",targets:[{format:t}]}}),this.pipelines[t]=e),e}generateMipmap(t){const e=this._getMipmapPipeline(t.format);if(t.dimension==="3d"||t.dimension==="1d")throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");let s=t;const i=t.depthOrArrayLayers||1,n=t.usage&GPUTextureUsage.RENDER_ATTACHMENT;if(!n){const u={size:{width:Math.ceil(t.width/2),height:Math.ceil(t.height/2),depthOrArrayLayers:i},format:t.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,mipLevelCount:t.mipLevelCount-1};s=this.device.createTexture(u);}const o=this.device.createCommandEncoder({}),a=e.getBindGroupLayout(0);for(let u=0;u<i;++u){let l=t.createView({baseMipLevel:0,mipLevelCount:1,dimension:"2d",baseArrayLayer:u,arrayLayerCount:1}),h=n?1:0;for(let c=1;c<t.mipLevelCount;++c){const d=s.createView({baseMipLevel:h++,mipLevelCount:1,dimension:"2d",baseArrayLayer:u,arrayLayerCount:1}),f=o.beginRenderPass({colorAttachments:[{view:d,storeOp:"store",loadOp:"clear",clearValue:{r:0,g:0,b:0,a:0}}]}),p=this.device.createBindGroup({layout:a,entries:[{binding:0,resource:this.sampler},{binding:1,resource:l}]});f.setPipeline(e),f.setBindGroup(0,p),f.draw(3,1,0,0),f.end(),l=d;}}if(!n){const u={width:Math.ceil(t.width/2),height:Math.ceil(t.height/2),depthOrArrayLayers:i};for(let l=1;l<t.mipLevelCount;++l)o.copyTextureToTexture({texture:s,mipLevel:l-1},{texture:t,mipLevel:l},u),u.width=Math.ceil(u.width/2),u.height=Math.ceil(u.height/2);}return this.device.queue.submit([o.finish()]),n||s.destroy(),t}}class Bu{constructor(t){this.managedTextures=[],this._gpuSources=Object.create(null),this._gpuSamplers=Object.create(null),this._bindGroupHash=Object.create(null),this._textureViewHash=Object.create(null),this._uploads={image:Iu,buffer:N_,video:X_,compressed:H_},this._renderer=t;}contextChange(t){this._gpu=t;}initSource(t){if(t.autoGenerateMipmaps){const u=Math.max(t.pixelWidth,t.pixelHeight);t.mipLevelCount=Math.floor(Math.log2(u))+1;}let e=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST;t.uploadMethodId!=="compressed"&&(e|=GPUTextureUsage.RENDER_ATTACHMENT,e|=GPUTextureUsage.COPY_SRC);const s=Gu[t.format]||{blockBytes:4,blockWidth:1,blockHeight:1},i=Math.ceil(t.pixelWidth/s.blockWidth)*s.blockWidth,n=Math.ceil(t.pixelHeight/s.blockHeight)*s.blockHeight,o={label:t.label,size:{width:i,height:n},format:t.format,sampleCount:t.sampleCount,mipLevelCount:t.mipLevelCount,dimension:t.dimension,usage:e},a=this._gpu.device.createTexture(o);return this._gpuSources[t.uid]=a,this.managedTextures.includes(t)||(t.on("update",this.onSourceUpdate,this),t.on("resize",this.onSourceResize,this),t.on("destroy",this.onSourceDestroy,this),t.on("unload",this.onSourceUnload,this),t.on("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.push(t)),this.onSourceUpdate(t),a}onSourceUpdate(t){const e=this.getGpuSource(t);e&&(this._uploads[t.uploadMethodId]&&this._uploads[t.uploadMethodId].upload(t,e,this._gpu),t.autoGenerateMipmaps&&t.mipLevelCount>1&&this.onUpdateMipmaps(t));}onSourceUnload(t){const e=this._gpuSources[t.uid];e&&(this._gpuSources[t.uid]=null,e.destroy());}onUpdateMipmaps(t){this._mipmapGenerator||(this._mipmapGenerator=new z_(this._gpu.device));const e=this.getGpuSource(t);this._mipmapGenerator.generateMipmap(e);}onSourceDestroy(t){t.off("update",this.onSourceUpdate,this),t.off("unload",this.onSourceUnload,this),t.off("destroy",this.onSourceDestroy,this),t.off("resize",this.onSourceResize,this),t.off("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.splice(this.managedTextures.indexOf(t),1),this.onSourceUnload(t);}onSourceResize(t){const e=this._gpuSources[t.uid];e?(e.width!==t.pixelWidth||e.height!==t.pixelHeight)&&(this._textureViewHash[t.uid]=null,this._bindGroupHash[t.uid]=null,this.onSourceUnload(t),this.initSource(t)):this.initSource(t);}_initSampler(t){return this._gpuSamplers[t._resourceId]=this._gpu.device.createSampler(t),this._gpuSamplers[t._resourceId]}getGpuSampler(t){return this._gpuSamplers[t._resourceId]||this._initSampler(t)}getGpuSource(t){return this._gpuSources[t.uid]||this.initSource(t)}getTextureBindGroup(t){var e;return (e=this._bindGroupHash[t.uid])!=null?e:this._createTextureBindGroup(t)}_createTextureBindGroup(t){const e=t.source,s=e.uid;return this._bindGroupHash[s]=new Lt({0:e,1:e.style}),this._bindGroupHash[s]}getTextureView(t){var e;const s=t.source;return (e=this._textureViewHash[s.uid])!=null?e:this._createTextureView(s)}_createTextureView(t){return this._textureViewHash[t.uid]=this.getGpuSource(t).createView(),this._textureViewHash[t.uid]}generateCanvas(t){const e=this._renderer,s=e.gpu.device.createCommandEncoder(),i=z.get().createCanvas();i.width=t.source.pixelWidth,i.height=t.source.pixelHeight;const n=i.getContext("webgpu");return n.configure({device:e.gpu.device,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC,format:navigator.gpu.getPreferredCanvasFormat(),alphaMode:"premultiplied"}),s.copyTextureToTexture({texture:e.texture.getGpuSource(t.source),origin:{x:0,y:0}},{texture:n.getCurrentTexture()},{width:i.width,height:i.height}),e.gpu.device.queue.submit([s.finish()]),i}getPixels(t){const e=this.generateCanvas(t),s=jt.getOptimalCanvasAndContext(e.width,e.height),i=s.context;i.drawImage(e,0,0);const{width:n,height:o}=e,a=i.getImageData(0,0,n,o),u=new Uint8ClampedArray(a.data.buffer);return jt.returnCanvasAndContext(s),{pixels:u,width:n,height:o}}destroy(){this.managedTextures.slice().forEach(t=>this.onSourceDestroy(t)),this.managedTextures=null;for(const t of Object.keys(this._bindGroupHash)){const e=Number(t),s=this._bindGroupHash[e];s==null||s.destroy(),this._bindGroupHash[e]=null;}this._gpu=null,this._mipmapGenerator=null,this._gpuSources=null,this._bindGroupHash=null,this._textureViewHash=null,this._gpuSamplers=null;}}Bu.extension={type:[b.WebGPUSystem],name:"texture"};class Fu{init(){const t=new st({uTransformMatrix:{value:new G,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),e=Be({name:"graphics",bits:[Ds,ks(wt),tp,De]});this.shader=new St({gpuProgram:e,resources:{localUniforms:t}});}execute(t,e){const s=e.context,i=s.customShader||this.shader,n=t.renderer,o=n.graphicsContext,{geometry:a,instructions:u}=o.getContextRenderData(s),l=n.encoder;l.setPipelineFromGeometryProgramAndState(a,i.gpuProgram,t.state),l.setGeometry(a);const h=n.globalUniforms.bindGroup;l.setBindGroup(0,h,i.gpuProgram);const c=n.renderPipes.uniformBatch.getUniformBindGroup(i.resources.localUniforms,!0);l.setBindGroup(2,c,i.gpuProgram);const d=u.instructions;for(let f=0;f<u.instructionSize;f++){const p=d[f];if(i.groups[1]=p.bindGroup,!p.gpuBindGroup){const g=p.textures;p.bindGroup=ms(g.textures,g.count),p.gpuBindGroup=n.bindGroup.getBindGroup(p.bindGroup,i.gpuProgram,1);}l.setBindGroup(1,p.bindGroup,i.gpuProgram),l.renderPassEncoder.drawIndexed(p.size,1,p.start);}}destroy(){this.shader.destroy(!0),this.shader=null;}}Fu.extension={type:[b.WebGPUPipesAdaptor],name:"graphics"};class Du{init(){const t=Be({name:"mesh",bits:[ke,Qm,De]});this._shader=new St({gpuProgram:t,resources:{uTexture:A.EMPTY._source,uSampler:A.EMPTY._source.style}});}execute(t,e){const s=t.renderer;let i=e._shader;if(!i)i=this._shader,i.groups[2]=s.texture.getTextureBindGroup(e.texture);else if(!i.gpuProgram)return;const n=i.gpuProgram;if(n.autoAssignGlobalUniforms&&(i.groups[0]=s.globalUniforms.bindGroup),n.autoAssignLocalUniforms){const o=t.localUniforms;i.groups[1]=s.renderPipes.uniformBatch.getUniformBindGroup(o,!0);}s.encoder.draw({geometry:e._geometry,shader:i,state:e.state});}destroy(){this._shader.destroy(!0),this._shader=null;}}Du.extension={type:[b.WebGPUPipesAdaptor],name:"mesh"};const $E=[...bu,Pu,Eu,Ei,Tu,Bu,Mu,Ou,Cu,Ru,Su,Au,yu],NE=[...vu,wu],HE=[va,Du,Fu],j_=[],W_=[],V_=[];D.handleByNamedList(b.WebGPUSystem,j_),D.handleByNamedList(b.WebGPUPipes,W_),D.handleByNamedList(b.WebGPUPipesAdaptor,V_),D.add(...$E,...NE,...HE);class Y_ extends Mr{constructor(){const t={name:"webgpu",type:xt.WEBGPU,systems:j_,renderPipes:W_,renderPipeAdaptors:V_};super(t);}}var XE={__proto__:null,WebGPURenderer:Y_};const zE={POINTS:"point-list",LINES:"line-list",LINE_STRIP:"line-strip",TRIANGLES:"triangle-list",TRIANGLE_STRIP:"triangle-strip"},jE=new Proxy(zE,{get(r,t){return r[t]}}),WE=new H(0,0,1,1);function VE(r,t,e){e||(e=WE);const s=t.pixelWidth,i=t.pixelHeight;return r.x=e.x*s|0,r.y=e.y*i|0,r.width=e.width*s|0,r.height=e.height*i|0,r}var K_=(r=>(r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH",r))(K_||{}),Uu=(r=>(r.CLAMP="clamp-to-edge",r.REPEAT="repeat",r.MIRRORED_REPEAT="mirror-repeat",r))(Uu||{});const YE=new Proxy(Uu,{get(r,t){return r[t]}});var ku=(r=>(r.NEAREST="nearest",r.LINEAR="linear",r))(ku||{});const KE=new Proxy(ku,{get(r,t){return r[t]}});class qE{constructor(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8);}set(t,e,s){const i=e.width,n=e.height;if(s){const o=t.width/2/i,a=t.height/2/n,u=t.x/i+o,l=t.y/n+a;s=U.add(s,U.NW),this.x0=u+o*U.uX(s),this.y0=l+a*U.uY(s),s=U.add(s,2),this.x1=u+o*U.uX(s),this.y1=l+a*U.uY(s),s=U.add(s,2),this.x2=u+o*U.uX(s),this.y2=l+a*U.uY(s),s=U.add(s,2),this.x3=u+o*U.uX(s),this.y3=l+a*U.uY(s);}else this.x0=t.x/i,this.y0=t.y/n,this.x1=(t.x+t.width)/i,this.y1=t.y/n,this.x2=(t.x+t.width)/i,this.y2=(t.y+t.height)/n,this.x3=t.x/i,this.y3=(t.y+t.height)/n;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3;}}let ZE=0;function QE(){return ZE++}function JE(r){const t=r.toString(),e=t.indexOf("{"),s=t.lastIndexOf("}");if(e===-1||s===-1)throw new Error("getFunctionBody: No body found in function definition");return t.slice(e+1,s).trim()}var tA=Object.defineProperty,Ai=Object.getOwnPropertySymbols,q_=Object.prototype.hasOwnProperty,Z_=Object.prototype.propertyIsEnumerable,Q_=(r,t,e)=>t in r?tA(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,eA=(r,t)=>{for(var e in t||(t={}))q_.call(t,e)&&Q_(r,e,t[e]);if(Ai)for(var e of Ai(t))Z_.call(t,e)&&Q_(r,e,t[e]);return r},rA=(r,t)=>{var e={};for(var s in r)q_.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&Ai)for(var s of Ai(r))t.indexOf(s)<0&&Z_.call(r,s)&&(e[s]=r[s]);return e};class sA extends W{constructor(t){var e,s;typeof t=="function"&&(t={render:t});const i=t,{render:n}=i,o=rA(i,["render"]);super(eA({label:"RenderContainer"},o)),this.batched=!1,this.bounds=new lt,this.canBundle=!1,this.renderPipeId="customRender",n&&(this.render=n),this.containsPoint=(e=t.containsPoint)!=null?e:()=>!1,this.addBounds=(s=t.addBounds)!=null?s:()=>!1;}render(t){}}function iA(r,t){if(r===16777215||!t)return t;if(t===16777215||!r)return r;const e=r>>16&255,s=r>>8&255,i=r&255,n=t>>16&255,o=t>>8&255,a=t&255,u=e*n/255,l=s*o/255,h=i*a/255;return (u<<16)+(l<<8)+h}function nA(r,t){const e=t._scale,s=t._pivot,i=t._position,n=e._x,o=e._y,a=s._x,u=s._y;r.a=t._cx*n,r.b=t._sx*n,r.c=t._cy*o,r.d=t._sy*o,r.tx=i._x-(a*r.a+u*r.c),r.ty=i._y-(a*r.b+u*r.d);}function oA(r,t,e){const s=r.a,i=r.b,n=r.c,o=r.d,a=r.tx,u=r.ty,l=t.a,h=t.b,c=t.c,d=t.d;e.a=s*l+i*c,e.b=s*h+i*d,e.c=n*l+o*c,e.d=n*h+o*d,e.tx=a*l+u*c+t.tx,e.ty=a*h+u*d+t.ty;}const aA={rectangle:Bn,polygon:In,triangle:Fn,circle:ge,ellipse:ge,roundedRectangle:ge};function uA(r){r instanceof ie&&(r={path:r,textureMatrix:null,out:null});const t=[],e=[],s=[],i=r.path.shapePath,n=r.textureMatrix;i.shapePrimitives.forEach(({shape:a,transform:u})=>{const l=s.length,h=t.length/2,c=[],d=aA[a.type];d.build(a,c),u&&_s(c,u),d.triangulate(c,t,2,h,s,l);const f=e.length/2;n?(u&&n.append(u.clone().invert()),An(t,2,h,e,f,2,t.length/2-h,n)):Pn(e,f,2,t.length/2-h);});const o=r.out;return o?(o.positions=new Float32Array(t),o.uvs=new Float32Array(e),o.indices=new Uint32Array(s),o):new Jt({positions:new Float32Array(t),uvs:new Float32Array(e),indices:new Uint32Array(s)})}var lA=Object.defineProperty,hA=Object.defineProperties,cA=Object.getOwnPropertyDescriptors,Pi=Object.getOwnPropertySymbols,J_=Object.prototype.hasOwnProperty,tx=Object.prototype.propertyIsEnumerable,ex=(r,t,e)=>t in r?lA(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,dA=(r,t)=>{for(var e in t||(t={}))J_.call(t,e)&&ex(r,e,t[e]);if(Pi)for(var e of Pi(t))tx.call(t,e)&&ex(r,e,t[e]);return r},pA=(r,t)=>hA(r,cA(t)),fA=(r,t)=>{var e={};for(var s in r)J_.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&Pi)for(var s of Pi(r))t.indexOf(s)<0&&tx.call(r,s)&&(e[s]=r[s]);return e};class mA extends Lr{constructor(t){const e=t,{texture:s,verticesX:i,verticesY:n}=e,o=fA(e,["texture","verticesX","verticesY"]),a=new ko(Zt({width:s.width,height:s.height,verticesX:i,verticesY:n}));super(Zt(pA(dA({},o),{geometry:a,texture:s}))),this.texture=s,this.autoResize=!0;}textureUpdated(){const t=this.geometry,{width:e,height:s}=this.texture;this.autoResize&&(t.width!==e||t.height!==s)&&(t.width=e,t.height=s,t.build({}));}set texture(t){var e;(e=this._texture)==null||e.off("update",this.textureUpdated,this),super.texture=t,t.on("update",this.textureUpdated,this),this.textureUpdated();}get texture(){return this._texture}destroy(t){this.texture.off("update",this.textureUpdated,this),super.destroy(t);}}var gA=Object.defineProperty,rx=Object.getOwnPropertySymbols,_A=Object.prototype.hasOwnProperty,xA=Object.prototype.propertyIsEnumerable,sx=(r,t,e)=>t in r?gA(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,ix=(r,t)=>{for(var e in t||(t={}))_A.call(t,e)&&sx(r,e,t[e]);if(rx)for(var e of rx(t))xA.call(t,e)&&sx(r,e,t[e]);return r};const nx=class zx extends Jt{constructor(t){const{width:e,points:s,textureScale:i}=ix(ix({},zx.defaultOptions),t);super({positions:new Float32Array(s.length*4),uvs:new Float32Array(s.length*4),indices:new Uint32Array((s.length-1)*6)}),this.points=s,this._width=e,this.textureScale=i,this._build();}get width(){return this._width}_build(){const t=this.points;if(!t)return;const e=this.getBuffer("aPosition"),s=this.getBuffer("aUV"),i=this.getIndex();if(t.length<1)return;e.data.length/4!==t.length&&(e.data=new Float32Array(t.length*4),s.data=new Float32Array(t.length*4),i.data=new Uint16Array((t.length-1)*6));const n=s.data,o=i.data;n[0]=0,n[1]=0,n[2]=0,n[3]=1;let a=0,u=t[0];const l=this._width*this.textureScale,h=t.length;for(let d=0;d<h;d++){const f=d*4;if(this.textureScale>0){const p=u.x-t[d].x,g=u.y-t[d].y,m=Math.sqrt(p*p+g*g);u=t[d],a+=m/l;}else a=d/(h-1);n[f]=a,n[f+1]=0,n[f+2]=a,n[f+3]=1;}let c=0;for(let d=0;d<h-1;d++){const f=d*2;o[c++]=f,o[c++]=f+1,o[c++]=f+2,o[c++]=f+2,o[c++]=f+1,o[c++]=f+3;}s.update(),i.update(),this.updateVertices();}updateVertices(){const t=this.points;if(t.length<1)return;let e=t[0],s,i=0,n=0;const o=this.buffers[0].data,a=t.length,u=this.textureScale>0?this.textureScale*this._width/2:this._width/2;for(let l=0;l<a;l++){const h=t[l],c=l*4;l<t.length-1?s=t[l+1]:s=h,n=-(s.x-e.x),i=s.y-e.y;let d=(1-l/(a-1))*10;d>1&&(d=1);const f=Math.sqrt(i*i+n*n);f<1e-6?(i=0,n=0):(i/=f,n/=f,i*=u,n*=u),o[c]=h.x+i,o[c+1]=h.y+n,o[c+2]=h.x-i,o[c+3]=h.y-n,e=h;}this.buffers[0].update();}update(){this.textureScale>0?this._build():this.updateVertices();}};nx.defaultOptions={width:200,points:[],textureScale:0};let ox=nx;var bA=Object.defineProperty,vA=Object.defineProperties,yA=Object.getOwnPropertyDescriptors,wi=Object.getOwnPropertySymbols,ax=Object.prototype.hasOwnProperty,ux=Object.prototype.propertyIsEnumerable,lx=(r,t,e)=>t in r?bA(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Lu=(r,t)=>{for(var e in t||(t={}))ax.call(t,e)&&lx(r,e,t[e]);if(wi)for(var e of wi(t))ux.call(t,e)&&lx(r,e,t[e]);return r},TA=(r,t)=>vA(r,yA(t)),SA=(r,t)=>{var e={};for(var s in r)ax.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&wi)for(var s of wi(r))t.indexOf(s)<0&&ux.call(r,s)&&(e[s]=r[s]);return e};const hx=class jx extends Lr{constructor(t){const e=Lu(Lu({},jx.defaultOptions),t),{texture:s,points:i,textureScale:n}=e,o=SA(e,["texture","points","textureScale"]),a=new ox(Zt({width:s.height,points:i,textureScale:n}));n>0&&(s.source.style.addressMode="repeat"),super(Zt(TA(Lu({},o),{texture:s,geometry:a}))),this.autoUpdate=!0,this.onRender=this._render;}_render(){const t=this.geometry;(this.autoUpdate||t._width!==this.texture.height)&&(t._width=this.texture.height,t.update());}};hx.defaultOptions={textureScale:0};let EA=hx;var AA=Object.defineProperty,PA=Object.defineProperties,wA=Object.getOwnPropertyDescriptors,Ri=Object.getOwnPropertySymbols,cx=Object.prototype.hasOwnProperty,dx=Object.prototype.propertyIsEnumerable,px=(r,t,e)=>t in r?AA(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,RA=(r,t)=>{for(var e in t||(t={}))cx.call(t,e)&&px(r,e,t[e]);if(Ri)for(var e of Ri(t))dx.call(t,e)&&px(r,e,t[e]);return r},MA=(r,t)=>PA(r,wA(t)),OA=(r,t)=>{var e={};for(var s in r)cx.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&Ri)for(var s of Ri(r))t.indexOf(s)<0&&dx.call(r,s)&&(e[s]=r[s]);return e};class CA extends Lr{constructor(t){const e=t,{texture:s,vertices:i,uvs:n,indices:o,topology:a}=e,u=OA(e,["texture","vertices","uvs","indices","topology"]),l=new Jt(Zt({positions:i,uvs:n,indices:o,topology:a}));super(Zt(MA(RA({},u),{texture:s,geometry:l}))),this.autoUpdate=!0,this.onRender=this._render;}get vertices(){return this.geometry.getBuffer("aPosition").data}set vertices(t){this.geometry.getBuffer("aPosition").data=t;}_render(){this.autoUpdate&&this.geometry.getBuffer("aPosition").update();}}function GA(r,t){const{width:e,height:s}=r.frame;return t.scale(1/e,1/s),t}var IA=Object.defineProperty,Mi=Object.getOwnPropertySymbols,fx=Object.prototype.hasOwnProperty,mx=Object.prototype.propertyIsEnumerable,gx=(r,t,e)=>t in r?IA(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,BA=(r,t)=>{for(var e in t||(t={}))fx.call(t,e)&&gx(r,e,t[e]);if(Mi)for(var e of Mi(t))mx.call(t,e)&&gx(r,e,t[e]);return r},FA=(r,t)=>{var e={};for(var s in r)fx.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&Mi)for(var s of Mi(r))t.indexOf(s)<0&&mx.call(r,s)&&(e[s]=r[s]);return e};class $u extends W{constructor(t){t instanceof A&&(t={texture:t});const e=t,{width:s,height:i,leftWidth:n,rightWidth:o,topHeight:a,bottomHeight:u,texture:l,roundPixels:h}=e,c=FA(e,["width","height","leftWidth","rightWidth","topHeight","bottomHeight","texture","roundPixels"]);super(BA({label:"NineSliceSprite"},c)),this._roundPixels=0,this.renderPipeId="nineSliceSprite",this.batched=!0,this._didSpriteUpdate=!0,this.bounds={minX:0,minY:0,maxX:0,maxY:0},this._leftWidth=n,this._topHeight=a,this._rightWidth=o,this._bottomHeight=u,this.bounds.maxX=this._width=s!=null?s:l.width,this.bounds.maxY=this._height=i!=null?i:l.height,this.allowChildren=!1,this._texture=l,this.roundPixels=h!=null?h:!1;}get width(){return this._width}set width(t){this.bounds.maxX=this._width=t,this.onViewUpdate();}get height(){return this._height}set height(t){this.bounds.maxY=this._height=t,this.onViewUpdate();}get leftWidth(){return this._leftWidth}set leftWidth(t){this._leftWidth=t,this.onViewUpdate();}get topHeight(){return this._topHeight}set topHeight(t){this._topHeight=t,this.onViewUpdate();}get rightWidth(){return this._rightWidth}set rightWidth(t){this._rightWidth=t,this.onViewUpdate();}get bottomHeight(){return this._bottomHeight}set bottomHeight(t){this._bottomHeight=t,this.onViewUpdate();}get texture(){return this._texture}set texture(t){t!==this._texture&&(this._texture=t,this.onViewUpdate());}get roundPixels(){return !!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0;}get textureMatrix(){return this._texture.textureMatrix.mapCoord}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}onViewUpdate(){this._didChangeId+=4096,this._didSpriteUpdate=!0,!this.didViewUpdate&&(this.didViewUpdate=!0,this.renderGroup&&this.renderGroup.onChildViewUpdate(this));}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY);}containsPoint(t){const e=this.bounds;return t.x>=e.minX&&t.x<=e.maxX&&t.y>=e.minY&&t.y<=e.maxY}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const e=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(e);}this._texture=null,this.bounds=null;}}$u.defaultOptions={texture:A.EMPTY,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10};class DA extends $u{constructor(...t){let e=t[0];e instanceof A&&(e={texture:e,leftWidth:t[1],topHeight:t[2],rightWidth:t[3],bottomHeight:t[4]}),super(e);}}function UA(r,t){return t instanceof Vt||t instanceof Ve?t:r==="html"?new Ve(t):new Vt(t)}const kA=/^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i,_x={},LA="8.0.0";function $A(r,t,e=3){if(_x[t])return;let s=new Error().stack;typeof s=="undefined"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${r}`):(s=s.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${r}`),console.warn(s),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${r}`),console.warn(s))),_x[t]=!0;}async function NA(r,t,e=200){const s=await t.extract.base64(r);await t.encoder.commandFinished;const i=e;console.log(`logging texture ${r.source.width}px ${r.source.height}px`);const n=["font-size: 1px;",`padding: ${i}px 300px;`,`background: url(${s}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",n);}var HA=Object.defineProperty,XA=Object.defineProperties,zA=Object.getOwnPropertyDescriptors,xx=Object.getOwnPropertySymbols,jA=Object.prototype.hasOwnProperty,WA=Object.prototype.propertyIsEnumerable,bx=(r,t,e)=>t in r?HA(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,vx=(r,t)=>{for(var e in t||(t={}))jA.call(t,e)&&bx(r,e,t[e]);if(xx)for(var e of xx(t))WA.call(t,e)&&bx(r,e,t[e]);return r},VA=(r,t)=>XA(r,zA(t));const YA=["#000080","#228B22","#8B0000","#4169E1","#008080","#800000","#9400D3","#FF8C00","#556B2F","#8B008B"];let KA=0;function yx(r,t=0,e={color:"#000000"}){r.isRenderGroupRoot&&(e.color=YA[KA++]);let s="";for(let o=0;o<t;o++)s+="    ";let i=r.label;!i&&r instanceof Ft&&(i=`sprite:${r.texture.label}`);let n=`%c ${s}|- ${i} (worldX:${r.worldTransform.tx}, relativeRenderX:${r.relativeGroupTransform.tx}, renderX:${r.groupTransform.tx}, localX:${r.x})`;r.isRenderGroupRoot&&(n+=" (RenderGroup)"),r.filters&&(n+="(*filters)"),console.log(n,`color:${e.color}; font-weight:bold;`),t++;for(let o=0;o<r.children.length;o++){const a=r.children[o];yx(a,t,vx({},e));}}function Tx(r,t=0,e={index:0,color:"#000000"}){let s="";for(let n=0;n<t;n++)s+="    ";const i=`%c ${s}- ${e.index}: ${r.root.label} worldX:${r.worldTransform.tx}`;console.log(i,`color:${e.color}; font-weight:bold;`),t++;for(let n=0;n<r.renderGroupChildren.length;n++){const o=r.renderGroupChildren[n];Tx(o,t,VA(vx({},e),{index:n}));}}

class Application {
    constructor() {
    }
}

class Palette {
    constructor() {
        this.isPalette = true;
        this.type = 'Palette';
        this.name = 'New Palette';
        this.uuid = Maths.uuid();
        this.colors = [];
    }
    default16() {
        this.name = 'Default';
        this.colors = [
            0x000000,
            0x808080,
            0xc0c0c0,
            0xffffff,
            0x00ffff,
            0x0000ff,
            0x000080,
            0x800080,
            0xff00ff,
            0xff0000,
            0x800000,
            0x808000,
            0xffff00,
            0x00ff00,
            0x008000,
            0x008080,
        ];
        return this;
    }
    purpleGold() {
        this.name = 'Purple Gold';
        this.colors = [
            0x000000,
            0xffffff,
            0xd400ff,
            0xffc800,
        ];
        return this;
    }
    fromJSON(json) {
        const data = json.object;
        if (data.name !== undefined) this.name = data.name;
        if (data.uuid !== undefined) this.uuid = data.uuid;
        if (data.colors !== undefined) this.colors = JSON.parse(data.colors);
        return this;
    }
    toJSON() {
        const json = {
            object: {
                type: this.type,
                name: this.name,
                uuid: this.uuid,
            }
        };
        json.object.colors = JSON.stringify(this.colors);
        return json;
    }
}

const _assets = {};
const _types$2 = {
    'Palette':  Palette,
};
class AssetManager$1 {
    static clear() {
        for (const uuid in _assets) {
            const asset = _assets[uuid];
            if (asset.isBuiltIn) continue;
            AssetManager$1.removeAsset(_assets[uuid], true);
        }
    }
    static addAsset(asset) {
        const assets = Array.isArray(asset) ? asset : [...arguments];
        let returnAsset = undefined;
        for (let i = 0; i < assets.length; i++) {
            let asset = assets[i];
            if (!asset || !asset.uuid) continue;
            if (!asset.name || asset.name === '') asset.name = asset.constructor.name;
            _assets[asset.uuid] = asset;
            if (returnAsset === undefined) returnAsset = asset;
        }
        return returnAsset;
    }
    static getAsset(uuid) {
        if (uuid && uuid.uuid) uuid = uuid.uuid;
        return _assets[uuid];
    }
    static getLibrary(type, category) {
        const library = [];
        for (const [uuid, asset] of Object.entries(_assets)) {
            if (type && asset.type !== type) continue;
            if (category == undefined || (asset.category && asset.category === category)) {
                library.push(asset);
            }
        }
        return library;
    }
    static removeAsset(asset, dispose = true) {
        const assets = Array.isArray(asset) ? asset : [ asset ];
        for (const asset of assets) {
            if (!asset || !asset.uuid) continue;
            if (_assets[asset.uuid]) {
                if (dispose && typeof asset.dispose === 'function') asset.dispose();
                delete _assets[asset.uuid];
            }
        }
    }
    static fromJSON(json, onLoad = () => {}) {
        AssetManager$1.clear();
        for (const type of Object.keys(_types$2)) {
            if (!json[type]) continue;
            for (const assetData of json[type]) {
                const Constructor = _types$2[type];
                const asset = new Constructor();
                asset.fromJSON(assetData);
                AssetManager$1.addAsset(asset);
            }
        }
        if (typeof onLoad === 'function') {
            onLoad();
        }
    }
    static toJSON(meta) {
        const json = {};
        if (!meta) meta = {};
        for (const type of Object.keys(_types$2)) {
            const assets = AssetManager$1.getLibrary(type);
            if (assets.length === 0) continue;
            meta[type] = {};
            for (const asset of assets) {
                if (!asset.uuid || meta[type][asset.uuid]) continue;
                meta[type][asset.uuid] = asset.toJSON();
            }
        }
        for (const library in meta) {
            const valueArray = [];
            for (const key in meta[library]) {
                const data = meta[library][key];
                delete data.metadata;
                valueArray.push(data);
            }
            json[library] = valueArray;
        }
        return json;
    }
}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];
class Maths$1 {
    static radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
    }
    static degreesToRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }
    static clamp(number, min, max) {
        number = Number(number);
        if (number < min) number = min;
        if (number > max) number = max;
        return number;
    }
    static damp(x, y, lambda, dt) {
        return Maths$1.lerp(x, y, 1 - Math.exp(- lambda * dt));
    }
    static lerp(x, y, t) {
        return (1 - t) * x + t * y;
    }
    static roundTo(number, decimalPlaces = 0) {
        const shift = Math.pow(10, decimalPlaces);
        return Math.round(number * shift) / shift;
    }
    static fuzzyFloat(a, b, tolerance = 0.001) {
        return ((a < (b + tolerance)) && (a > (b - tolerance)));
    }
    static fuzzyVector(a, b, tolerance = 0.001) {
        if (Maths$1.fuzzyFloat(a.x, b.x, tolerance) === false) return false;
        if (Maths$1.fuzzyFloat(a.y, b.y, tolerance) === false) return false;
        if (Maths$1.fuzzyFloat(a.z, b.z, tolerance) === false) return false;
        return true;
    }
    static fuzzyQuaternion(a, b, tolerance = 0.001) {
        if (Maths$1.fuzzyVector(a, b, tolerance) === false) return false;
        if (Maths$1.fuzzyFloat(a.w, b.w, tolerance) === false) return false;
        return true;
    }
    static isPowerOfTwo(value) {
        return (value & (value - 1)) === 0 && value !== 0;
    }
    static addCommas(number) {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    static countDecimals(number) {
        if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
        return number.toString().split('.')[1].length || 0;
    }
    static isNumber(number) {
        return (number != null && typeof number === 'number' && !Number.isNaN(number) && Number.isFinite(number));
    }
    static noZero(number, min = 0.00001) {
        min = Math.abs(min);
        number = Maths$1.sanity(number);
        if (number >= 0 && number < min) number = min;
        if (number < 0 && number > min * -1.0) number = min * -1.0;
        return number;
    }
    static sanity(number) {
        if (isNaN(number)) number = 0;
        return number;
    }
    static lineCollision(x1, y1, x2, y2, x3, y3, x4, y4) {
        let denom = ((y4 - y3) * (x2 - x1)) - ((x4 - x3) * (y2 - y1));
        if (Maths$1.fuzzyFloat(denom, 0, 0.0000001)) return false;
        let ua = (((x4 - x3) * (y1 - y3)) - ((y4 - y3) * (x1 - x3))) / denom;
        let ub = (((x2 - x1) * (y1 - y3)) - ((y2 - y1) * (x1 - x3))) / denom;
        if ((ua >= 0) && (ua <= 1) && (ub >= 0) && (ub <= 1)) {
            return true;
        }
        return false;
    }
    static lineRectCollision(x1, y1, x2, y2, left, top, right, down) {
        const rectLeft =    Maths$1.lineCollision(x1, y1, x2, y2, left, top, left, down);
        const rectRight =   Maths$1.lineCollision(x1, y1, x2, y2, right, top, right, down);
        const rectTop =     Maths$1.lineCollision(x1, y1, x2, y2, left, top, right, top);
        const rectDown =    Maths$1.lineCollision(x1, y1, x2, y2, left, down, right, down);
        return (rectLeft || rectRight || rectTop || rectDown);
    }
    static randomFloat(min, max) {
        return min + Math.random() * (max - min);
    }
    static randomInt(min = 0, max = 1) {
        return min + Math.floor(Math.random() * (max - min));
    }
    static uuid() {
        if (window.crypto && window.crypto.randomUUID) return crypto.randomUUID();
        const d0 = Math.random() * 0xffffffff | 0;
        const d1 = Math.random() * 0xffffffff | 0;
        const d2 = Math.random() * 0xffffffff | 0;
        const d3 = Math.random() * 0xffffffff | 0;
        const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
            _lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
            _lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
            _lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];
        return uuid.toLowerCase();
    }
}

class Entity {
    constructor(name = '') {
        this.isEntity = true;
        this.type = 'Entity';
        this.name = name;
        this.uuid = Maths$1.uuid();
        this.parent = null;
        this.children = [];
        this.userData = {};
    }
}

class Entity2D extends Entity {
    constructor(name = 'Entity') {
        super();
        this.name = name;
        this.isEntity2D = true;
        this.type = 'Entity2D';
        this.locked = false;
        this.lookAtCamera = false;
        this.category = null;
        this.components = [];
    }
    add(object) {
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) {
				this.add(arguments[i]);
			}
			return this;
		}
		if (object === this) {
			console.error(`Entity2D.add: Object can't be added as a child of itself`, object);
			return this;
		}
		if (object && object.isEntity2D) {
			if (object.parent !== null) {
				object.parent.remove(object);
			}
			object.parent = this;
			this.children.push(object);
		} else {
			console.error(`Entity2D.add: Object not an instance of Entity2D`, object);
		}
		return this;
	}
    addEntity(entity, index = -1, maintainWorldTransform = false) {
        if (!entity || !entity.isEntity2D) return this;
        if (this.children.indexOf(entity) !== -1) return this;
        if (maintainWorldTransform && entity.parent) {
            this.attach(entity);
        } else {
            this.add(entity);
        }
        if (index !== -1) {
            this.children.splice(index, 0, entity);
            this.children.pop();
        }
        return this;
    }
    getEntities() {
        const entities = [];
        for (const entity of this.children) {
            if (!entity || !entity.isEntity2D) continue;
            if (entity.userData.flagIgnore) continue;
            if (entity.userData.flagHelper) continue;
            entities.push(entity);
        }
        return entities;
    }
    getEntityById(id) {
        return this.getEntityByProperty('id', parseInt(id));
    }
    getEntityByName(name) {
        return this.getEntityByProperty('name', name);
    }
    getEntityByUUID(uuid) {
        return this.getEntityByProperty('uuid', uuid);
    }
    getEntityByProperty(property, value) {
        if (this[property] === value) return this;
        for (const child of this.getEntities()) {
            const entity = child.getEntityByProperty(property, value);
            if (entity) return entity;
        }
        return undefined;
    }
    removeEntity(entity, forceDelete = false) {
        if (!entity) return;
        if (!forceDelete) {
            if (entity.locked) return;
            if (entity.userData.flagHelper) return;
        }
        this.remove(entity);
        return entity;
    }
    traverse(callback, recursive = true) {
		if (typeof callback === 'function' && callback(this)) return;
        for (const child of this.children) {
            child.traverse(callback, recursive);
        }
	}
    traverseEntities(callback, recursive = true) {
        if (typeof callback === 'function' && callback(this)) return;
        for (const child of this.getEntities()) {
            child.traverseEntities(callback, recursive);
        }
    }
    changeParent(newParent = undefined, newIndex = -1) {
        if (!newParent) newParent = this.parent;
        if (!newParent || !newParent.isObject3D) return;
        const oldParent = this.parent;
        if (newIndex === -1 && oldParent) newIndex = oldParent.children.indexOf(this);
        newParent.safeAttach(this);
        if (newIndex !== -1) {
            newParent.children.splice(newIndex, 0, this);
            newParent.children.pop();
        }
        return this;
    }
    parentStage() {
        if (this.isStage || this.isWorld) return this;
        if (this.parent && this.parent.isEntity2D) return this.parent.parentStage();
        return null;
    }
    parentWorld() {
        if (this.isWorld) return this;
        if (this.parent && this.parent.isEntity2D) return this.parent.parentWorld();
        return null;
    }
    updateMatrix() {
        const onRotationChange = this.rotation._onChangeCallback;
        const onQuaternionChange = this.rotation._onChangeCallback;
        this.rotation._onChange(() => {});
        this.quaternion._onChange(() => {});
        const camera = window.activeCamera;
        let lookAtCamera = Boolean(this.lookAtCamera && camera);
        if (lookAtCamera && this.parent && this.parent.isObject3D) {
            this.traverseAncestors((parent) => {
                if (parent.lookAtCamera) lookAtCamera = false;
            });
        }
        if (!lookAtCamera) {
            this.quaternion.setFromEuler(this.rotation, false);
        } else {
            if (this.parent && this.parent.isObject3D) {
                this.parent.getWorldQuaternion(_parentQuaternion, false );
                _parentQuaternionInv.copy(_parentQuaternion).invert();
                this.quaternion.copy(_parentQuaternionInv);
            } else {
                this.quaternion.identity();
            }
            _rotationQuaternion.setFromEuler(this.rotation, false);
            this.matrixWorld.decompose(_worldPosition, _worldQuaternion, _worldScale);
            camera.matrixWorld.decompose(_camPosition, _camQuaternion, _camScale);
            if (!this.lookAtYOnly) {
                    _lookQuaternion.copy(_camQuaternion);
            } else {
                _camRotation.set(0, Math.atan2((_camPosition.x - _worldPosition.x), (_camPosition.z - _worldPosition.z)), 0);
                _lookQuaternion.setFromEuler(_camRotation, false);
            }
            this.quaternion.copy(_lookQuaternion);
            this.quaternion.multiply(_rotationQuaternion);
        }
        this.matrix.compose(this.position, this.quaternion, this.scale);
        this.matrixWorldNeedsUpdate = true;
        this.rotation._onChange(onRotationChange);
        this.quaternion._onChange(onQuaternionChange);
    }
    getWorldQuaternion(targetQuaternion, ignoreBillboard = true) {
        let beforeBillboard = this.lookAtCamera;
        if (ignoreBillboard && beforeBillboard) {
            this.lookAtCamera = false;
        }
        this.updateWorldMatrix(true, false);
        this.matrixWorld.decompose(_objPosition, targetQuaternion, _objScale);
        if (ignoreBillboard && beforeBillboard) {
            this.lookAtCamera = true;
            this.updateWorldMatrix(true, false);
        }
        return targetQuaternion;
    }
    safeAttach(object) {
        if (!object || !object.isObject3D) return;
        object.getWorldQuaternion(_worldQuaternion);
        object.getWorldScale(_worldScale);
        object.getWorldPosition(_worldPosition);
        object.removeFromParent();
        object.rotation.copy(_worldRotation.setFromQuaternion(_worldQuaternion, undefined, false));
        object.scale.copy(_worldScale);
        object.position.copy(_worldPosition);
        this.attach(object);
        return this;
    }
    clone(recursive) {
        return new this.constructor().copy(this, recursive);
    }
    copy(source, recursive = true) {
        super.copy(source, false );
        this.position.copy(source.position);
        this.rotation.copy(source.rotation);
        this.scale.copy(source.scale);
        if (source.locked) this.locked = true;
        if (source.lookAtCamera) this.lookAtCamera = true;
        if (source.lookAtYOnly) this.lookAtYOnly = true;
        this.updateMatrix();
        if (recursive) {
            for (const child of source.children) {
                if (child.userData.flagIgnore) continue;
                if (child.userData.flagHelper) continue;
                this.add(child.clone());
            }
        }
        return this;
    }
    cloneEntity(recursive = true) {
        return new this.constructor().copyEntity(this, recursive);
    }
    copyEntity(source, recursive = true) {
        this.dispose();
        this.copy(source, false );
        this.locked = source.locked;
        this.lookAtCamera = source.lookAtCamera;
        this.lookAtYOnly = source.lookAtYOnly;
        this.bloom = source.bloom;
        this.category = source.category;
        for (const component of source.components) {
            const clonedComponent = this.addComponent(component.type, component.toJSON(), false);
            clonedComponent.tag = component.tag;
        }
        if (recursive) {
            for (const child of source.getEntities()) {
                this.add(child.cloneEntity());
            }
        }
        return this;
    }
    dispose() {
        while (this.components.length > 0) {
            const component = this.components[0];
            this.removeComponent(component);
            if (typeof component.dispose === 'function') component.dispose();
        }
        while (this.children.length > 0) {
            ObjectUtils.clearObject(this.children[0], true );
        }
        this.dispatchEvent({ type: 'destroy' });
    }
    fromJSON(json) {
        const data = json.object;
        if (data.name !== undefined) this.name = data.name;
        if (data.uuid !== undefined) this.uuid = data.uuid;
        if (data.position !== undefined) this.position.fromArray(data.position);
        if (data.rotation !== undefined) this.rotation.fromArray(data.rotation);
        if (data.scale !== undefined) this.scale.fromArray(data.scale);
        if (data.castShadow !== undefined) this.castShadow = data.castShadow;
        if (data.receiveShadow !== undefined) this.receiveShadow = data.receiveShadow;
        if (data.visible !== undefined) this.visible = data.visible;
        if (data.frustumCulled !== undefined) this.frustumCulled = data.frustumCulled;
        if (data.renderOrder !== undefined) this.renderOrder = data.renderOrder;
        if (data.layers !== undefined) this.layers.mask = data.layers;
        if (data.up !== undefined) this.up.fromArray(data.up);
        if (data.matrixAutoUpdate !== undefined) this.matrixAutoUpdate = data.matrixAutoUpdate;
        if (typeof data.userData === 'object') this.userData = structuredClone(data.userData);
        if (data.locked !== undefined) this.locked = data.locked;
        if (data.lookAtCamera !== undefined) this.lookAtCamera = data.lookAtCamera;
        if (data.lookAtYOnly !== undefined) this.lookAtYOnly = data.lookAtYOnly;
        if (data.bloom !== undefined) this.bloom = data.bloom;
        if (data.category !== undefined) this.category = data.category;
        for (const componentData of json.object.components) {
            if (componentData && componentData.base && componentData.base.type) {
                const component = this.addComponent(componentData.base.type, componentData, false);
                component.tag = componentData.base.tag;
            }
        }
        this.loadChildren(data.entities);
        this.updateMatrix();
        return this;
    }
    loadChildren(jsonEntities = []) {
        for (const entityData of jsonEntities) {
            const entity = new Entity2D();
            this.add(entity.fromJSON(entityData));
        }
    }
    toJSON() {
        const json = {
            object: {
                type: this.type,
                name: this.name,
                uuid: this.uuid,
                components: [],
                entities: [],
            }
        };
        json.object.position  = this.position.toArray();
        json.object.rotation = this.rotation.toArray();
        json.object.scale = this.scale.toArray();
        json.object.castShadow = this.castShadow;
        json.object.receiveShadow = this.receiveShadow;
        json.object.visible = this.visible;
        json.object.frustumCulled = this.frustumCulled;
        json.object.renderOrder = this.renderOrder;
        json.object.layers = this.layers.mask;
        json.object.up = this.up.toArray();
        json.object.matrixAutoUpdate = this.matrixAutoUpdate;
        if (Object.keys(this.userData).length > 0) {
            json.object.userData = structuredClone(this.userData);
        }
        json.object.locked = this.locked;
        json.object.lookAtCamera = this.lookAtCamera;
        json.object.lookAtYOnly = this.lookAtYOnly;
        json.object.bloom = this.bloom;
        json.object.category = this.category;
        for (const component of this.components) {
            json.object.components.push(component.toJSON());
        }
        for (const child of this.getEntities()) {
            json.object.entities.push(child.toJSON());
        }
        return json;
    }
}

class Camera2D extends Entity2D {
    constructor({
        name,
        type = 'PerspectiveCamera',
        width = APP_SIZE,
        height = APP_SIZE,
        fit,
        near,
        far,
        fieldOfView,
    } = {}) {
        super(name ?? 'Camera');
        if (type !== 'OrthographicCamera' && type !== 'PerspectiveCamera') {
            type = 'PerspectiveCamera';
        }
        this.isCamera = true;
        this.isCamera2D = true;
        this.type = type;
        if (fit !== 'width' && fit !== 'height') fit = 'none';
        this.fit = fit;
        this.near = near ?? ((type === 'PerspectiveCamera') ? 0.01 : - 1000);
        this.far = far ?? ((type === 'OrthographicCamera') ? 1000 : 1000);
        this.fieldOfView = fieldOfView ?? 58.10;
        this.isPerspectiveCamera = (type === 'PerspectiveCamera');
        this.isOrthographicCamera = (type === 'OrthographicCamera');
        this.aspect = 1;
        this.rotateLock = false;
        this.view = null;
        this.zoom = 1;
        this.fov = 58.10;
        this.target = new THREE.Vector3();
        this.setSize(width, height);
    }
    updateMatrix() {
    }
    getWorldDirection(target) {
		this.updateWorldMatrix(true, false);
		const e = this.matrixWorld.elements;
		return target.set(- e[8], - e[9], - e[10]).normalize();
	}
	updateMatrixWorld(force) {
		super.updateMatrixWorld(force);
		this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
	updateWorldMatrix(updateParents, updateChildren) {
		super.updateWorldMatrix(updateParents, updateChildren);
		this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
    changeType(type) {
        if (!type || typeof type !== 'string') return this;
        type = type.toLowerCase().replace('camera', '');
        if (type === 'orthographic') this.type = 'OrthographicCamera';
        else if (type === 'perspective') this.type = 'PerspectiveCamera';
        else return this;
        this.isPerspectiveCamera = (this.type === 'PerspectiveCamera');
        this.isOrthographicCamera = (this.type === 'OrthographicCamera');
        if (this.isPerspectiveCamera) this.near = (10 / this.far);
        if (this.isOrthographicCamera) this.near = (this.far * -1);
        this.updateProjectionMatrix();
        return this;
    }
    changeFit(fit) {
        if (fit === 'landscape') fit = 'width';
        if (fit === 'portrait') fit = 'height';
        if (fit !== 'width' && fit !== 'height') fit = 'none';
        this.fit = fit;
        return this;
    }
    setSize(width = APP_SIZE, height = APP_SIZE) {
        this.lastWidth = width;
        this.lastHeight = height;
        this.aspect = width / height;
         {
            if (this.fit === 'height') {
                this.fov = this.fieldOfView;
            } else {
                const tanFOV = Math.tan(((Math.PI / 180) * this.fieldOfView) / 2);
                if (this.fit === 'width') {
                    this.fov = (360 / Math.PI) * Math.atan(tanFOV / this.aspect);
                } else {
                    this.fov = (360 / Math.PI) * Math.atan(tanFOV * (height / APP_SIZE));
                }
            }
        }
         {
            if (this.fit === 'width') {
                width = APP_SIZE;
                height = width / this.aspect;
            } else if (this.fit === 'height') {
                height = APP_SIZE;
                width = height * this.aspect;
            }
            this.left =    - width / 2;
            this.right =     width / 2;
            this.top =       height / 2;
            this.bottom =  - height / 2;
        }
        this.updateProjectionMatrix();
        return this;
    }
    updateProjectionMatrix(target ) {
        if (target) {
            if (target.isObject3D) target = target.position;
            this.target.copy(target);
        }
        const distance = this.position.distanceTo(this.target);
        const zoom = Maths$1.noZero(1000 / distance);
        this.zoom = zoom;
        if (this.isPerspectiveCamera) {
            let top = this.near * Math.tan((Math.PI / 180) * 0.5 * this.fov);
            let height = 2 * top;
            let width = this.aspect * height;
            let left = - 0.5 * width;
            const view = this.view;
            if (view && view.enabled) {
                const fullWidth = view.fullWidth;
                const fullHeight = view.fullHeight;
                left += view.offsetX * width / fullWidth;
                top -= view.offsetY * height / fullHeight;
                width *= view.width / fullWidth;
                height *= view.height / fullHeight;
            }
            this.projectionMatrix.makePerspective(left, left + width, top, top - height, this.near, this.far, this.coordinateSystem);
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        if (this.isOrthographicCamera) {
            const dx = (this.right - this.left) / (2 * zoom);
            const dy = (this.top - this.bottom) / (2 * zoom);
            const cx = (this.right + this.left) / 2;
            const cy = (this.top + this.bottom) / 2;
            let left = cx - dx;
            let right = cx + dx;
            let top = cy + dy;
            let bottom = cy - dy;
            const view = this.view;
            if (view && view.enabled) {
                const scaleW = (this.right - this.left) / view.fullWidth / zoom;
                const scaleH = (this.top - this.bottom) / view.fullHeight / zoom;
                left += scaleW * view.offsetX;
                right = left + scaleW * view.width;
                top -= scaleH * view.offsetY;
                bottom = top - scaleH * view.height;
            }
            this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far, this.coordinateSystem);
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
    }
    setViewOffset(fullWidth, fullHeight, x, y, width, height) {
        if (!this.view) this.view = {};
        this.view.enabled = true;
        this.view.fullWidth = fullWidth;
        this.view.fullHeight = fullHeight;
        this.view.offsetX = x;
        this.view.offsetY = y;
        this.view.width = width;
        this.view.height = height;
        this.setSize(fullWidth, fullHeight);
    }
    clearViewOffset() {
        if (this.view && this.view.enabled) {
            this.view.enabled = false;
            this.setSize(this.view.fullWidth, this.view.fullHeight);
        }
    }
    clone(recursive) {
        return new this.constructor().copy(this, recursive);
    }
    copy(source, recursive = true) {
        super.copy(source, recursive);
        this.changeType(source.type);
        this.matrixWorldInverse.copy(source.matrixWorldInverse);
		this.projectionMatrix.copy(source.projectionMatrix);
		this.projectionMatrixInverse.copy(source.projectionMatrixInverse);
		this.coordinateSystem = source.coordinateSystem;
        this.fit = source.fit;
        this.near = source.near;
        this.far = source.far;
        this.fieldOfView = source.fieldOfView;
        this.setSize(source.lastWidth, source.lastHeight);
        return this;
    }
    cloneEntity(recursive = true) {
        return new this.constructor().copyEntity(this, recursive);
    }
    copyEntity(source, recursive = true) {
        super.copyEntity(source, recursive);
        return this;
    }
    fromJSON(json) {
        const data = json.object;
        super.fromJSON(json, this);
        if (data.cameraType !== undefined) {
            this.type = data.cameraType;
            this.changeType(this.type);
        }
        if (data.fit !== undefined) this.fit = data.fit;
        if (data.near !== undefined) this.near = data.near;
        if (data.far !== undefined) this.far = data.far;
        if (data.fieldOfView !== undefined) this.fieldOfView = data.fieldOfView;
        this.updateProjectionMatrix();
        return this;
    }
    toJSON() {
        const json = super.toJSON();
        json.object.cameraType = this.type;
        json.object.type = 'Camera2D';
        json.object.fit = this.fit;
        json.object.near = this.near;
        json.object.far = this.far;
        json.object.fieldOfView = this.fieldOfView;
        return json;
    }
}

const _types$1 = {
    'Camera2D': Camera2D,
    'Entity2D': Entity2D,
};
class Stage2D extends Entity2D {
    constructor(name = 'Start') {
        super(name);
        this.isStage = true;
        this.isStage2D = true;
        this.type = 'Stage2D';
        this.enabled = true;
        this.start = 0;
        this.finish = -1;
    }
    cloneEntity(recursive = true) {
        return new this.constructor().copyEntity(this, recursive);
    }
    copyEntity(source, recursive = true) {
        super.copyEntity(source, recursive);
        this.enabled = source.enabled;
        this.start = source.start;
        this.finish = source.finish;
        this.beginPosition.copy(source.beginPosition);
        this.endPosition.copy(source.endPosition);
        return this;
    }
    dispose() {
        super.dispose();
    }
    fromJSON(json) {
        const data = json.object;
        super.fromJSON(json);
        if (data.enabled !== undefined) this.enabled = data.enabled;
        if (data.start !== undefined) this.start = data.start;
        if (data.finish !== undefined) this.finish = data.finish;
        if (data.beginPosition !== undefined) this.beginPosition.fromArray(data.beginPosition);
        if (data.endPosition !== undefined) this.endPosition.fromArray(data.endPosition);
        return this;
    }
    loadChildren(jsonEntities = []) {
        for (const entityData of jsonEntities) {
            const Constructor = _types$1[entityData.object.type];
            if (Constructor) {
                const entity = new Constructor();
                this.add(entity.fromJSON(entityData));
            } else {
                console.warn(`Stage2D.loadChildren: Unknown type '${entityData.object.type}'`);
            }
        }
    }
    toJSON() {
        const json = super.toJSON();
        json.object.enabled = this.enabled;
        json.object.start = this.start;
        json.object.finish = this.finish;
        json.object.beginPosition = this.beginPosition.toArray();
        json.object.endPosition = this.endPosition.toArray();
        return json;
    }
}

const _types = {
    'Camera2D': Camera2D,
    'Entity2D': Entity2D,
    'Stage2D': Stage2D,
};
class World2D extends Entity2D {
    constructor(name = 'World 1') {
        super(name);
        this.isScene = true;
        this.isWorld = true;
        this.isWorld2D = true;
        this.type = 'World2D';
        this.background = null;
        this.environment = null;
        this.fog = null;
        this.backgroundBlurriness = 0;
		this.backgroundIntensity = 1;
        this.overrideMaterial = null;
        this.xPos = 0;
        this.yPos = 0;
        this.activeStageUUID = null;
    }
    activeStage() {
        const stage = this.getStageByUUID(this.activeStageUUID);
        return stage ?? this;
    }
    setActiveStage(stage) {
        if (stage && stage.isEntity && this.getStageByUUID(stage.uuid)) {
            this.activeStageUUID = stage.uuid;
        } else {
            this.activeStageUUID = null;
        }
        return this;
    }
    addEntity(entity, index = -1, maintainWorldTransform = false) {
        if (!entity || !entity.isEntity2D) return this;
        if (this.children.indexOf(entity) !== -1) return this;
        if (entity.isWorld) return this;
        if (entity.isStage) maintainWorldTransform = false;
        super.addEntity(entity, index, maintainWorldTransform);
        if (entity.isStage && this.getStages().length === 1) this.setActiveStage(entity);
        return this;
    }
    getEntities(includeStages = true) {
        const filteredChildren = [];
        for (const child of super.getEntities()) {
            if (!includeStages && child.isStage) continue;
            filteredChildren.push(child);
        }
        return filteredChildren;
    }
    getFirstStage() {
        const stages = this.getStages();
        if (stages.length > 0) return stages[0];
    }
    getStages() {
        const filteredChildren = [];
        for (const child of super.getEntities()) {
            if (child.isStage) filteredChildren.push(child);
        }
        return filteredChildren;
    }
    getStageByName(name) {
        const stage = this.getEntityByProperty('name', name);
        if (stage && stage.isStage) return stage;
    }
    getStageByUUID(uuid) {
        const stage = this.getEntityByProperty('uuid', uuid);
        if (stage && stage.isStage) return stage;
    }
    getStageByProperty(property, value) {
        for (const stage of this.getStages()) {
            if (stage[property] === value) return stage;
        }
    }
    traverseStages(callback, recursive = true) {
        const cancel = (typeof callback === 'function') ? callback(this) : false;
        if (cancel) return;
        for (const stage of this.getStages()) {
            stage.traverseEntities(callback, recursive);
        }
    }
    cloneEntity(recursive = true) {
        return new this.constructor().copyEntity(this, recursive);
    }
    copyEntity(source, recursive = true) {
        super.copyEntity(source, recursive);
        if (source.background) {
            if (source.background.isColor) {
                this.background = source.background.clone();
            } else {
                this.background = source.background;
            }
        }
		if (source.environment !== null) this.environment = source.environment.clone();
		if (source.fog !== null) this.fog = source.fog.clone();
		this.backgroundBlurriness = source.backgroundBlurriness;
		this.backgroundIntensity = source.backgroundIntensity;
		if (source.overrideMaterial !== null) this.overrideMaterial = source.overrideMaterial.clone();
        this.xPos = source.xPos;
        this.yPos = source.yPos;
        const stageIndex = source.getStages().indexOf(source.activeStage());
        this.activeStageUUID = (stageIndex !== -1) ? this.getStages()[stageIndex].uuid : null;
        this.loadPosition.copy(source.loadPosition);
        this.loadDistance = source.loadDistance;
        return this;
    }
    dispose() {
        super.dispose();
        if (this.background && typeof this.background.dispose === 'function') this.background.dispose();
        if (this.environment && typeof this.environment.dispose === 'function') this.environment.dispose();
        if (this.fog && typeof this.fog.dispose === 'function') this.fog.dispose();
        if (this.overrideMaterial && typeof this.overrideMaterial.dispose === 'function') this.overrideMaterial.dispose();
        if (this.shadowPlane) ObjectUtils.clearObject(this.shadowPlane);
    }
    fromJSON(json) {
        const data = json.object;
        super.fromJSON(json);
        if (data.background !== undefined) {
            if (Number.isInteger(data.background)) {
            } else {
                this.background = data.background;
            }
        }
        if (data.environment !== undefined) {
            const environmentTexture = AssetManager.getAsset(data.background);
            if (environmentTexture && environmentTexture.isTexture) this.environment = environmentTexture;
        }
        if (data.fog !== undefined) {
            if (data.fog.type === 'Fog') {
                this.fog = new THREE.Fog(data.fog.color, data.fog.near, data.fog.far);
            } else if (data.fog.type === 'FogExp2') {
                this.fog = new THREE.FogExp2(data.fog.color, data.fog.density);
            }
        }
        if (data.backgroundBlurriness !== undefined) this.backgroundBlurriness = data.backgroundBlurriness;
		if (data.backgroundIntensity !== undefined) this.backgroundIntensity = data.backgroundIntensity;
        if (data.xPos !== undefined) this.xPos = data.xPos;
        if (data.yPos !== undefined) this.yPos = data.yPos;
        if (data.activeStageUUID !== undefined) this.activeStageUUID = data.activeStageUUID;
        if (data.loadPosition !== undefined) this.loadPosition.fromArray(data.loadPosition);
        if (data.loadDistance !== undefined) this.loadDistance = data.loadDistance;
        return this;
    }
    loadChildren(jsonEntities = []) {
        for (const entityData of jsonEntities) {
            const Constructor = _types[entityData.object.type];
            if (Constructor) {
                const entity = new Constructor();
                this.add(entity.fromJSON(entityData));
            } else {
                console.warn(`World2D.loadChildren: Unknown type '${entityData.object.type}'`);
            }
        }
    }
    toJSON() {
        const json = super.toJSON();
        if (this.background) {
            if (this.background.isColor) {
                json.object.background = this.background.toJSON();
            } else {
                json.object.background = this.background;
            }
        }
        if (this.environment) {
        }
        if (this.fog) json.object.fog = this.fog.toJSON();
        if (this.backgroundBlurriness > 0) json.object.backgroundBlurriness = this.backgroundBlurriness;
		if (this.backgroundIntensity !== 1) json.object.backgroundIntensity = this.backgroundIntensity;
        json.object.xPos = this.xPos;
        json.object.yPos = this.yPos;
        json.object.activeStageUUID = this.activeStageUUID;
        json.object.loadPosition = this.loadPosition.toArray();
        json.object.loadDistance = this.loadDistance;
        return json;
    }
}

class Project {
    constructor(name = 'My Project') {
        this.isProject = true;
        this.type = 'Project';
        this.name = name;
        this.uuid = Maths$1.uuid();
        this.activeWorldUUID = null;
        this.settings = {
            orientation: APP_ORIENTATION.PORTRAIT,
            preload: 10,
            unload: 10,
        };
        this.worlds = {};
    }
    setting(key) {
        if (typeof this.settings !== 'object') this.settings = {};
        switch (key) {
            case 'orientation': case 'orient': return this.settings.orientation ?? APP_ORIENTATION.PORTRAIT;
            case 'preload': case 'add': return this.settings.preload ?? 10;
            case 'unload': case 'remove': return this.settings.unload ?? 10;
        }
        return undefined;
    }
    activeWorld() {
        let world = this.getWorldByUUID(this.activeWorldUUID);
        if (!world || !world.isWorld) {
            const worldUUIDs = Object.keys(this.worlds);
            if (worldUUIDs.length > 0) world = this.worlds[worldUUIDs[0]];
        }
        return world;
    }
    setActiveWorld(world) {
        if (!world || !world.isWorld) return this;
        if (this.worlds[world.uuid]) this.activeWorldUUID = world.uuid;
        return this;
    }
    addWorld(world) {
        if (!world || !world.isWorld) return this;
        if (WORLD_TYPES.includes(world.type)) {
            this.worlds[world.uuid] = world;
            if (this.activeWorldUUID == null) this.activeWorldUUID = world.uuid;
        } else {
            console.error(`Project.addWorld: World type (${world.type}) not a valid world type`, world);
        }
        return this;
    }
    getWorldByName(name) {
        return this.getWorldByProperty('name', name);
    }
    getWorldByUUID(uuid) {
        if (!uuid) return undefined;
        return this.worlds[uuid];
    }
    getWorldByProperty(property, value) {
        for (const uuid in this.worlds) {
            const world = this.worlds[uuid];
            if (world[property] === value) return world;
        }
    }
    removeWorld(world) {
        if (!world || !world.isWorld) return;
        delete this.worlds[world.uuid];
    }
    traverseWorlds(callback, recursive = true) {
        for (const uuid in this.worlds) {
            const world = this.worlds[uuid];
            if (typeof callback === 'function') callback(world);
            if (recursive) world.traverseStages(callback, recursive);
        }
    }
    worldCount() {
        return Object.keys(this.worlds).length;
    }
    findEntityByUUID(uuid, searchWorld = null) {
        const worldList = (searchWorld && searchWorld.isWorld) ? [ searchWorld ] : [...this.worlds];
        for (const world of worldList) {
            if (uuid && world.uuid && uuid === world.uuid) return world;
            const entity = world.getEntityByProperty('uuid', uuid);
            if (entity) return entity;
        }
        return undefined;
    }
    clear() {
        for (const uuid in this.worlds) {
            const world = this.worlds[uuid];
            this.removeWorld(world);
            if (typeof world.dispose === 'function') world.dispose();
        }
        this.name = 'My Project';
        this.uuid = Maths$1.uuid();
        this.activeWorldUUID = null;
    }
    fromJSON(json, loadAssets = true, onLoad = () => {}) {
        const metaType = (json.metadata) ? json.metadata.type : 'Undefined';
        if (metaType !== 'Salinity') {
            console.error(`Project.fromJSON: Unknown project type ('${metaType}'), expected 'Salinity'`);
            return;
        }
        const metaVersion = json.metadata.version;
        if (metaVersion !== VERSION) {
            console.warn(`Project.fromJSON: Project saved in 'v${metaVersion}', attempting to load with 'v${VERSION}'`);
        }
        if (!json.object || json.object.type !== this.type) {
            console.error(`Project.fromJSON: Save file corrupt, no 'Project' object found!`);
            return;
        }
        this.clear();
        if (loadAssets) {
            AssetManager$1.fromJSON(json, onLoad);
        }
        this.name = json.object.name;
        this.uuid = json.object.uuid;
        this.activeWorldUUID = json.object.activeWorldUUID;
        this.settings = structuredClone(json.settings);
        for (const worldData of json.worlds) {
            let world = undefined;
            switch (worldData.object.type) {
                case 'World2D': world = new World2D().fromJSON(worldData); break;
            }
            if (world && world.isWorld) this.addWorld(world);
        }
        return this;
    }
    toJSON() {
        const meta = {};
        const json = AssetManager$1.toJSON(meta);
        json.metadata = {
            type: 'Salt',
            version: VERSION,
            generator: 'Salinity.Project.toJSON',
        };
        json.object = {
            type: this.type,
            name: this.name,
            uuid: this.uuid,
            activeWorldUUID: this.activeWorldUUID,
        };
        json.settings = structuredClone(this.settings);
        json.worlds = [];
        for (const uuid in this.worlds) {
            const world = this.worlds[uuid];
            json.worlds.push(world.toJSON());
        }
        return json;
    }
}

class EntityUtils {
    static combineEntityArrays(intoEntityArray, entityArrayToAdd) {
        entityArrayToAdd = Array.isArray(entityArrayToAdd) ? entityArrayToAdd : [ entityArrayToAdd ];
        for (const entity of entityArrayToAdd) {
            if (EntityUtils.containsEntity(intoEntityArray, entity)) continue;
            intoEntityArray.push(entity);
        }
    }
    static commonEntity(entityArrayOne, entityArrayTwo) {
        entityArrayOne = Array.isArray(entityArrayOne) ? entityArrayOne : [ entityArrayOne ];
        entityArrayTwo = Array.isArray(entityArrayTwo) ? entityArrayTwo : [ entityArrayTwo ];
        for (let i = 0; i < entityArrayOne.length; i++) {
            if (EntityUtils.containsEntity(entityArrayTwo, entityArrayOne[i]) === true) return true;
        }
        for (let i = 0; i < entityArrayTwo.length; i++) {
            if (EntityUtils.containsEntity(entityArrayOne, entityArrayTwo[i]) === true) return true;
        }
        return false;
    }
    static compareArrayOfEntities(entityArrayOne, entityArrayTwo) {
        entityArrayOne = Array.isArray(entityArrayOne) ? entityArrayOne : [ entityArrayOne ];
        entityArrayTwo = Array.isArray(entityArrayTwo) ? entityArrayTwo : [ entityArrayTwo ];
        for (let i = 0; i < entityArrayOne.length; i++) {
            if (EntityUtils.containsEntity(entityArrayTwo, entityArrayOne[i]) === false) return false;
        }
        for (let i = 0; i < entityArrayTwo.length; i++) {
            if (EntityUtils.containsEntity(entityArrayOne, entityArrayTwo[i]) === false) return false;
        }
        return true;
    }
    static containsEntity(arrayOfEntities, entity) {
        if (!Array.isArray(arrayOfEntities)) return false;
        if (!entity || !entity.isEntity) return false;
        for (const checkEntity of arrayOfEntities) {
            if (checkEntity.isEntity && checkEntity.uuid === entity.uuid) return true;
        }
        return false;
    }
    static parentEntity(entity, immediateOnly = false) {
        while (entity && entity.parent) {
            if (entity.parent.isStage) return entity;
            if (entity.parent.isWorld) return entity;
            entity = entity.parent;
            if (immediateOnly) {
                let validEntity = entity.isEntity;
                validEntity = validEntity || entity.userData.flagIgnore;
                validEntity = validEntity || entity.userData.flagHelper;
                if (validEntity) return entity;
            }
        }
        return entity;
    }
    static removeEntityFromArray(entityArray, entity) {
        if (!entity || !entity.isEntity || !Array.isArray(entityArray)) return;
        for (let i = entityArray.length - 1; i >= 0; --i) {
            if (entityArray[i].uuid === entity.uuid) entityArray.splice(i, 1);
        }
        return entityArray;
    }
}

class Strings {
    static addSpaces(string) {
        if (typeof string !== 'string') string = String(string);
        string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
        string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
        return string.trim();
    }
    static capitalize(string) {
        const words = String(string).split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
        return words.join(' ');
    }
    static countDigits(number) {
        return parseFloat(number).toString().length;
    }
    static escapeHTML(html) {
        if (html == undefined) return html;
        return html
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    static nameFromUrl(url, capitalize = true) {
        let imageName = new String(url.replace(/^.*[\\\/]/, ''));
        imageName = imageName.replace(/\.[^/.]+$/, "");
        if (capitalize) imageName = Strings.capitalize(imageName);
        return imageName;
    }
}

class System {
    static isIterable(obj) {
        return (obj && typeof obj[Symbol.iterator] === 'function');
    }
    static isObject(variable) {
        return (variable && typeof variable === 'object' && !Array.isArray(variable));
    }
    static save(url, filename) {
        try {
            const link = document.createElement('a');
            document.body.appendChild(link);
            link.href = url;
            link.download = filename || 'data.json';
            link.click();
            setTimeout(function() {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }, 0);
        } catch (error) {
            console.warn(error);
            return;
        }
    }
    static saveBuffer(buffer, filename, optionalType = { type: 'application/octet-stream' }) {
        const url = URL.createObjectURL(new Blob([ buffer ], { type: optionalType }));
        System.save(url, filename);
    }
    static saveImage(imageUrl, filename) {
        System.save(imageUrl, filename);
    }
    static saveString(text, filename) {
        const url = URL.createObjectURL(new Blob([ text ], { type: 'text/plain' }));
        System.save(url, filename);
    }
    static detectOS() {
        const systems = {
            Android:    [ 'android' ],
            iOS:        [ 'iphone', 'ipad', 'ipod', 'ios' ],
            Linux:      [ 'linux', 'x11', 'wayland' ],
            MacOS:      [ 'mac', 'darwin', 'osx', 'os x' ],
            Windows:    [ 'win' ],
        };
        const userAgent = window.navigator.userAgent;
        const userAgentData = window.navigator.userAgentData;
        const platform = ((userAgentData) ? userAgentData.platform : userAgent).toLowerCase();
        for (const key in systems) {
            for (const os of systems[key]) {
                if (platform.indexOf(os) !== -1) return key;
            }
        }
        return 'Unknown OS';
    }
    static fullscreen(element) {
        const isFullscreen =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement;
        if (isFullscreen) {
            const el = document;
            const cancelMethod = el.cancelFullScreen || el.exitFullscreen || el.webkitCancelFullScreen || el.webkitExitFullscreen || el.mozCancelFullScreen;
            cancelMethod.call(el);
        } else {
            const el = element ?? document.body;
            const requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
            requestMethod.call(el);
        }
    }
    static metaKeyOS() {
        const system = System.detectOS();
        if (system === 'Mac') {
            return '⌘';
        } else {
            return '⌃';
        }
    }
    static sleep(ms) {
        const beginTime = Date.now();
        let endTime = beginTime;
        while (endTime - beginTime < ms) {
            endTime = Date.now();
        }
    }
    static waitForObject(
        operationName = '',
        getter,
        callback,
        checkFrequencyMs = 100,
        timeoutMs = -1,
        alertMs = 5000,
    ) {
        let startTimeMs = Date.now();
        let alertTimeMs = Date.now();
        function loopSearch() {
            if (timeoutMs > 0 && (Date.now() - startTimeMs > timeoutMs)) {
                console.info(`Operation: ${operationName} timed out`);
                return;
            }
            if ((alertMs > 0) && Date.now() - alertTimeMs > alertMs) {
                console.info(`Still waiting on operation: ${operationName}`);
                alertTimeMs = Date.now();
            }
            if (!getter || typeof getter !== 'function' || getter()) {
                if (callback && typeof callback === 'function') callback();
                return;
            } else {
                setTimeout(loopSearch, checkFrequencyMs);
            }
        }
        loopSearch();
    }
}

if (typeof window !== 'undefined') {
    if (window.__SALINITY__) console.warn(`Salinity v${window.__SALINITY__} already imported, now importing v${VERSION}!`);
    else window.__SALINITY__ = VERSION;
}

export { APP_ORIENTATION, APP_SIZE, Application, AssetManager$1 as AssetManager, EntityUtils, Maths$1 as Maths, Palette, Project, Stage2D, Strings, System, VERSION, WORLD_TYPES, World2D };
