import{g as f}from"./index-1f565969.js";function p(t,o){for(var e=0;e<o.length;e++){const i=o[e];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(i,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},l={get exports(){return s},set exports(t){s=t}};const a={};a._getBinaryFromXHR=function(t){return t.response||t.responseText};function c(){try{return new window.XMLHttpRequest}catch{}}function y(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch{}}const d=window.ActiveXObject?function(){return c()||y()}:c;a.getBinaryContent=function(t,o){try{const e=d();e.open("GET",t,!0),"responseType"in e&&(e.responseType="arraybuffer"),e.overrideMimeType&&e.overrideMimeType("text/plain; charset=x-user-defined"),e.onreadystatechange=function(i){let r,n;if(e.readyState===4)if(e.status===200||e.status===0){r=null,n=null;try{r=a._getBinaryFromXHR(e)}catch(u){n=new Error(u)}o(n,r)}else o(new Error("Ajax error for "+t+" : "+this.status+" "+this.statusText),null)},e.send()}catch(e){o(new Error(e),null)}};var g=a;(function(t){t.exports=g})(l);const x=f(s),v=p({__proto__:null,default:x},[s]);export{v as i};
