// d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function u(){}function i(){}function o(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function a(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=la.length;r>e;++e){var u=la[e]+t;if(u in n)return u}}function c(){}function s(){}function l(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new u;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function f(){$o.event.preventDefault()}function h(){for(var n,t=$o.event;n=t.sourceEvent;)t=n;return t}function g(n){for(var t=new s,e=0,r=arguments.length;++e<r;)t[arguments[e]]=l(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=$o.event;u.target=n,$o.event=u,t[u.type].apply(e,r)}finally{$o.event=i}}},t}function p(n){return ha(n,ma),n}function v(n){return"function"==typeof n?n:function(){return ga(n,this)}}function d(n){return"function"==typeof n?n:function(){return pa(n,this)}}function m(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=$o.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function y(n){return n.trim().replace(/\s+/g," ")}function x(n){return new RegExp("(?:^|\\s+)"+$o.requote(n)+"(?:\\s+|$)","g")}function M(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=n.trim().split(/\s+/).map(_);var u=n.length;return"function"==typeof t?r:e}function _(n){var t=x(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",y(u+" "+n))):e.setAttribute("class",y(u.replace(t," ")))}}function b(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function w(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function S(n){return"function"==typeof n?n:(n=$o.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function k(n){return{__data__:n}}function E(n){return function(){return da(this,n)}}function A(n){return arguments.length||(n=$o.ascending),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function C(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function N(n){return ha(n,xa),n}function L(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function T(){var n=this.__transition__;n&&++n.active}function q(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=s(t,Wo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+$o.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),s=z;a>0&&(n=n.substring(0,a));var l=_a.get(n);return l&&(n=l,s=R),a?t?u:r:t?c:i}function z(n,t){return function(e){var r=$o.event;$o.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{$o.event=r}}}function R(n,t){var e=z(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function D(){var n=".dragsuppress-"+ ++wa,t="click"+n,e=$o.select(Ko).on("touchmove"+n,f).on("dragstart"+n,f).on("selectstart"+n,f);if(ba){var r=Go.style,u=r[ba];r[ba]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),ba&&(r[ba]=u),i&&(e.on(t,function(){f(),o()},!0),setTimeout(o,0))}}function P(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>Sa&&(Ko.scrollX||Ko.scrollY)){e=$o.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();Sa=!(u.f||u.e),e.remove()}return Sa?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function U(n){return n>0?1:0>n?-1:0}function j(n){return n>1?0:-1>n?ka:Math.acos(n)}function H(n){return n>1?Aa:-1>n?-Aa:Math.asin(n)}function F(n){return((n=Math.exp(n))-1/n)/2}function O(n){return((n=Math.exp(n))+1/n)/2}function Y(n){return((n=Math.exp(2*n))-1)/(n+1)}function I(n){return(n=Math.sin(n/2))*n}function Z(){}function V(n,t,e){return new X(n,t,e)}function X(n,t,e){this.h=n,this.s=t,this.l=e}function $(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,ot(u(n+120),u(n),u(n-120))}function B(n,t,e){return new W(n,t,e)}function W(n,t,e){this.h=n,this.c=t,this.l=e}function J(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),G(e,Math.cos(n*=La)*t,Math.sin(n)*t)}function G(n,t,e){return new K(n,t,e)}function K(n,t,e){this.l=n,this.a=t,this.b=e}function Q(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=tt(u)*Oa,r=tt(r)*Ya,i=tt(i)*Ia,ot(rt(3.2404542*u-1.5371385*r-.4985314*i),rt(-.969266*u+1.8760108*r+.041556*i),rt(.0556434*u-.2040259*r+1.0572252*i))}function nt(n,t,e){return n>0?B(Math.atan2(e,t)*Ta,Math.sqrt(t*t+e*e),n):B(0/0,0/0,n)}function tt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function et(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function rt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function ut(n){return ot(n>>16,255&n>>8,255&n)}function it(n){return ut(n)+""}function ot(n,t,e){return new at(n,t,e)}function at(n,t,e){this.r=n,this.g=t,this.b=e}function ct(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function st(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(gt(u[0]),gt(u[1]),gt(u[2]))}return(i=Xa.get(n))?t(i.r,i.g,i.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(o=n.charAt(1),o+=o,a=n.charAt(2),a+=a,c=n.charAt(3),c+=c):7===n.length&&(o=n.substring(1,3),a=n.substring(3,5),c=n.substring(5,7)),o=parseInt(o,16),a=parseInt(a,16),c=parseInt(c,16)),t(o,a,c))}function lt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),V(r,u,c)}function ft(n,t,e){n=ht(n),t=ht(t),e=ht(e);var r=et((.4124564*n+.3575761*t+.1804375*e)/Oa),u=et((.2126729*n+.7151522*t+.072175*e)/Ya),i=et((.0193339*n+.119192*t+.9503041*e)/Ia);return G(116*u-16,500*(r-u),200*(u-i))}function ht(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function gt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function pt(n){return"function"==typeof n?n:function(){return n}}function vt(n){return n}function dt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),mt(t,e,n,r)}}function mt(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=$o.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!Ko.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=$o.event;$o.event=n;try{o.progress.call(i,c)}finally{$o.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Wo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},$o.rebind(i,o,"on"),null==r?i:i.get(yt(r))}function yt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function xt(){var n=Mt(),t=_t()-n;t>24?(isFinite(t)&&(clearTimeout(Ja),Ja=setTimeout(xt,t)),Wa=0):(Wa=1,Ka(xt))}function Mt(){var n=Date.now();for(Ga=$a;Ga;)n>=Ga.t&&(Ga.f=Ga.c(n-Ga.t)),Ga=Ga.n;return n}function _t(){for(var n,t=$a,e=1/0;t;)t.f?t=n?n.n=t.n:$a=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Ba=n,e}function bt(n,t){var e=Math.pow(10,3*aa(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function wt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function St(n){return n+""}function kt(){}function Et(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function At(n,t){n&&lc.hasOwnProperty(n.type)&&lc[n.type](n,t)}function Ct(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function Nt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)Ct(n[e],t,1);t.polygonEnd()}function Lt(){function n(n,t){n*=La,t=t*La/2+ka/4;var e=n-r,o=Math.cos(t),a=Math.sin(t),c=i*a,s=u*o+c*Math.cos(e),l=c*Math.sin(e);hc.add(Math.atan2(l,s)),r=n,u=o,i=a}var t,e,r,u,i;gc.point=function(o,a){gc.point=n,r=(t=o)*La,u=Math.cos(a=(e=a)*La/2+ka/4),i=Math.sin(a)},gc.lineEnd=function(){n(t,e)}}function Tt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function qt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function zt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Rt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Dt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Pt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Ut(n){return[Math.atan2(n[1],n[0]),H(n[2])]}function jt(n,t){return aa(n[0]-t[0])<Ca&&aa(n[1]-t[1])<Ca}function Ht(n,t){n*=La;var e=Math.cos(t*=La);Ft(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Ft(n,t,e){++pc,dc+=(n-dc)/pc,mc+=(t-mc)/pc,yc+=(e-yc)/pc}function Ot(){function n(n,u){n*=La;var i=Math.cos(u*=La),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);vc+=s,xc+=s*(t+(t=o)),Mc+=s*(e+(e=a)),_c+=s*(r+(r=c)),Ft(t,e,r)}var t,e,r;kc.point=function(u,i){u*=La;var o=Math.cos(i*=La);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),kc.point=n,Ft(t,e,r)}}function Yt(){kc.point=Ht}function It(){function n(n,t){n*=La;var e=Math.cos(t*=La),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-j(g)/h,v=Math.atan2(h,g);bc+=p*s,wc+=p*l,Sc+=p*f,vc+=v,xc+=v*(r+(r=o)),Mc+=v*(u+(u=a)),_c+=v*(i+(i=c)),Ft(r,u,i)}var t,e,r,u,i;kc.point=function(o,a){t=o,e=a,kc.point=n,o*=La;var c=Math.cos(a*=La);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),Ft(r,u,i)},kc.lineEnd=function(){n(t,e),kc.lineEnd=Yt,kc.point=Ht}}function Zt(){return!0}function Vt(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(jt(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new $t(e,n,null,!0),s=new $t(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new $t(r,n,null,!1),s=new $t(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Xt(i),Xt(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Xt(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function $t(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Bt(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r){if(1&t){n=e[0];var u,r=n.length-1,o=-1;for(i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);return i.lineEnd(),void 0}r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Wt))}}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[],i.polygonStart()},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=$o.merge(g);var n=Kt(m,p);g.length?Vt(g,Gt,n,e,i):n&&(i.lineStart(),e(null,null,1,i),i.lineEnd()),i.polygonEnd(),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=Jt(),M=t(x);return y}}function Wt(n){return n.length>1}function Jt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:c,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Gt(n,t){return((n=n.x)[0]<0?n[1]-Aa-Ca:Aa-n[1])-((t=t.x)[0]<0?t[1]-Aa-Ca:Aa-t[1])}function Kt(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;hc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+ka/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+ka/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=aa(_)>ka,w=p*x;if(hc.add(Math.atan2(w*Math.sin(_),v*M+w*Math.cos(_))),i+=b?_+(_>=0?Ea:-Ea):_,b^h>=e^m>=e){var S=zt(Tt(f),Tt(n));Pt(S);var k=zt(u,S);Pt(k);var E=(b^_>=0?-1:1)*H(k[2]);(r>E||r===E&&(S[0]||S[1]))&&(o+=b^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Ca>i||Ca>i&&0>hc)^1&o}function Qt(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?ka:-ka,c=aa(i-e);aa(c-ka)<Ca?(n.point(e,r=(r+o)/2>0?Aa:-Aa),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=ka&&(aa(e-u)<Ca&&(e-=u*Ca),aa(i-a)<Ca&&(i-=a*Ca),r=ne(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function ne(n,t,e,r){var u,i,o=Math.sin(n-e);return aa(o)>Ca?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function te(n,t,e,r){var u;if(null==n)u=e*Aa,r.point(-ka,u),r.point(0,u),r.point(ka,u),r.point(ka,0),r.point(ka,-u),r.point(0,-u),r.point(-ka,-u),r.point(-ka,0),r.point(-ka,u);else if(aa(n[0]-t[0])>Ca){var i=n[0]<t[0]?ka:-ka;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function ee(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?ka:-ka),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(jt(e,g)||jt(p,g))&&(p[0]+=Ca,p[1]+=Ca,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&jt(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=Tt(n),u=Tt(t),o=[1,0,0],a=zt(r,u),c=qt(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=zt(o,a),p=Dt(o,f),v=Dt(a,h);Rt(p,v);var d=g,m=qt(p,d),y=qt(d,d),x=m*m-y*(qt(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=Dt(d,(-m-M)/y);if(Rt(_,p),_=Ut(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=aa(A-ka)<Ca,N=C||Ca>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(aa(_[0]-w)<Ca?k:E):k<=_[1]&&_[1]<=E:A>ka^(w<=_[0]&&_[0]<=S)){var L=Dt(d,(-m+M)/y);return Rt(L,p),[_,Ut(L)]}}}function u(t,e){var r=o?n:ka-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=aa(i)>Ca,c=Le(n,6*La);return Bt(t,e,c,o?[0,-n]:[-ka,n-ka])}function re(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function ue(n,t,e,r){function u(r,u){return aa(r[0]-n)<Ca?u>0?0:3:aa(r[0]-e)<Ca?u>0?2:1:aa(r[1]-t)<Ca?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=m.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=m[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&s(l,i,n)>0&&++t:i[1]<=r&&s(l,i,n)<0&&--t,l=i;return 0!==t}function s(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function l(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function f(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function h(n,t){f(n,t)&&a.point(n,t)}function g(){L.point=v,m&&m.push(y=[]),k=!0,S=!1,b=w=0/0}function p(){d&&(v(x,M),_&&S&&C.rejoin(),d.push(C.buffer())),L.point=h,S&&a.lineEnd()}function v(n,t){n=Math.max(-Ac,Math.min(Ac,n)),t=Math.max(-Ac,Math.min(Ac,t));var e=f(n,t);if(m&&y.push([n,t]),k)x=n,M=t,_=e,k=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&S)a.point(n,t);else{var r={a:{x:b,y:w},b:{x:n,y:t}};N(r)?(S||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),E=!1):e&&(a.lineStart(),a.point(n,t),E=!1)}b=n,w=t,S=e}var d,m,y,x,M,_,b,w,S,k,E,A=a,C=Jt(),N=re(n,t,e,r),L={point:h,lineStart:g,lineEnd:p,polygonStart:function(){a=C,d=[],m=[],E=!0},polygonEnd:function(){a=A,d=$o.merge(d);var t=c([n,r]),e=E&&t,u=d.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Vt(d,i,t,l,a),a.polygonEnd()),d=m=y=null}};return L}}function ie(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function oe(n){var t=0,e=ka/3,r=be(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*ka/180,e=n[1]*ka/180):[180*(t/ka),180*(e/ka)]},u}function ae(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,H((i-(n*n+e*e)*u*u)/(2*u))]},e}function ce(){function n(n,t){Nc+=u*n-r*t,r=n,u=t}var t,e,r,u;Rc.point=function(i,o){Rc.point=n,t=r=i,e=u=o},Rc.lineEnd=function(){n(t,e)}}function se(n,t){Lc>n&&(Lc=n),n>qc&&(qc=n),Tc>t&&(Tc=t),t>zc&&(zc=t)}function le(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=fe(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=fe(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function fe(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function he(n,t){dc+=n,mc+=t,++yc}function ge(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);xc+=o*(t+n)/2,Mc+=o*(e+r)/2,_c+=o,he(t=n,e=r)}var t,e;Pc.point=function(r,u){Pc.point=n,he(t=r,e=u)}}function pe(){Pc.point=he}function ve(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);xc+=o*(r+n)/2,Mc+=o*(u+t)/2,_c+=o,o=u*n-r*t,bc+=o*(r+n),wc+=o*(u+t),Sc+=3*o,he(r=n,u=t)}var t,e,r,u;Pc.point=function(i,o){Pc.point=n,he(t=r=i,e=u=o)},Pc.lineEnd=function(){n(t,e)}}function de(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,Ea)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:c};return a}function me(n){function t(n){return(a?r:e)(n)}function e(t){return Me(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=Tt([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=aa(aa(w)-1)<Ca||aa(r-h)<Ca?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],L=C-t,T=N-e,q=x*L-y*T;(q*q/M>i||aa((y*L+x*T)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*La),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function ye(n){var t=me(function(t,e){return n([t*Ta,e*Ta])});return function(n){return we(t(n))}}function xe(n){this.stream=n}function Me(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function _e(n){return be(function(){return n})()}function be(n){function t(n){return n=a(n[0]*La,n[1]*La),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*Ta,n[1]*Ta]}function r(){a=ie(o=Ee(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=me(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Ec,_=vt,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=we(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Ec):ee((b=+n)*La),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?ue(n[0][0],n[0][1],n[1][0],n[1][1]):vt,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*La,d=n[1]%360*La,r()):[v*Ta,d*Ta]},t.rotate=function(n){return arguments.length?(m=n[0]%360*La,y=n[1]%360*La,x=n.length>2?n[2]%360*La:0,r()):[m*Ta,y*Ta,x*Ta]},$o.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function we(n){return Me(n,function(t,e){n.point(t*La,e*La)})}function Se(n,t){return[n,t]}function ke(n,t){return[n>ka?n-Ea:-ka>n?n+Ea:n,t]}function Ee(n,t,e){return n?t||e?ie(Ce(n),Ne(t,e)):Ce(n):t||e?Ne(t,e):ke}function Ae(n){return function(t,e){return t+=n,[t>ka?t-Ea:-ka>t?t+Ea:t,e]}}function Ce(n){var t=Ae(n);return t.invert=Ae(-n),t}function Ne(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),H(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),H(l*r-a*u)]},e}function Le(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=Te(e,u),i=Te(e,i),(o>0?i>u:u>i)&&(u+=o*Ea)):(u=n+o*Ea,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=Ut([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function Te(n,t){var e=Tt(t);e[0]-=n,Pt(e);var r=j(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ca)%(2*Math.PI)}function qe(n,t,e){var r=$o.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function ze(n,t,e){var r=$o.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Re(n){return n.source}function De(n){return n.target}function Pe(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(I(r-t)+u*o*I(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ta,Math.atan2(o,Math.sqrt(r*r+u*u))*Ta]}:function(){return[n*Ta,t*Ta]};return p.distance=h,p}function Ue(){function n(n,u){var i=Math.sin(u*=La),o=Math.cos(u),a=aa((n*=La)-t),c=Math.cos(a);Uc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;jc.point=function(u,i){t=u*La,e=Math.sin(i*=La),r=Math.cos(i),jc.point=n},jc.lineEnd=function(){jc.point=jc.lineEnd=c}}function je(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function He(n,t){function e(n,t){var e=aa(aa(t)-Aa)<Ca?0:o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(ka/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=U(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Aa]},e):Oe}function Fe(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return aa(u)<Ca?Se:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-U(u)*Math.sqrt(n*n+e*e)]},e)}function Oe(n,t){return[n,Math.log(Math.tan(ka/4+t/2))]}function Ye(n){var t,e=_e(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=ka*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ie(n,t){var e=Math.cos(t)*Math.sin(n);return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function Ze(n){return n[0]}function Ve(n){return n[1]}function Xe(n,t,e,r){var u,i,o,a,c,s,l;return u=r[n],i=u[0],o=u[1],u=r[t],a=u[0],c=u[1],u=r[e],s=u[0],l=u[1],(l-o)*(a-i)-(c-o)*(s-i)>0}function $e(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Be(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function We(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Je(){mr(this),this.edge=this.site=this.circle=null}function Ge(n){var t=Jc.pop()||new Je;return t.site=n,t}function Ke(n){cr(n),$c.remove(n),Jc.push(n),mr(n)}function Qe(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Ke(n);for(var c=i;c.circle&&aa(e-c.circle.x)<Ca&&aa(r-c.circle.cy)<Ca;)i=c.P,a.unshift(c),Ke(c),c=i;a.unshift(c),cr(c);for(var s=o;s.circle&&aa(e-s.circle.x)<Ca&&aa(r-s.circle.cy)<Ca;)o=s.N,a.push(s),Ke(s),s=o;a.push(s),cr(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],pr(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=hr(c.site,s.site,null,u),ar(c),ar(s)}function nr(n){for(var t,e,r,u,i=n.x,o=n.y,a=$c._;a;)if(r=tr(a,o)-i,r>Ca)a=a.L;else{if(u=i-er(a,o),!(u>Ca)){r>-Ca?(t=a.P,e=a):u>-Ca?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Ge(n);if($c.insert(t,c),t||e){if(t===e)return cr(t),e=Ge(t.site),$c.insert(c,e),c.edge=e.edge=hr(t.site,c.site),ar(t),ar(e),void 0;if(!e)return c.edge=hr(t.site,c.site),void 0;cr(t),cr(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};pr(e.edge,s,p,M),c.edge=hr(s,n,null,M),e.edge=hr(n,p,null,M),ar(t),ar(e)}}function tr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function er(n,t){var e=n.N;if(e)return tr(e,t);var r=n.site;return r.y===t?r.x:1/0}function rr(n){this.site=n,this.edges=[]}function ur(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Xc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(aa(r-t)>Ca||aa(u-e)>Ca)&&(a.splice(o,0,new vr(gr(i.site,l,aa(r-f)<Ca&&p-u>Ca?{x:f,y:aa(t-f)<Ca?e:p}:aa(u-p)<Ca&&h-r>Ca?{x:aa(e-p)<Ca?t:h,y:p}:aa(r-h)<Ca&&u-g>Ca?{x:h,y:aa(t-h)<Ca?e:g}:aa(u-g)<Ca&&r-f>Ca?{x:aa(e-g)<Ca?t:f,y:g}:null),i.site,null)),++c)}function ir(n,t){return t.angle-n.angle}function or(){mr(this),this.x=this.y=this.arc=this.site=this.cy=null}function ar(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-Na)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=Gc.pop()||new or;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Wc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Wc.insert(y,m),y||(Bc=m)}}}}function cr(n){var t=n.circle;t&&(t.P||(Bc=t.N),Wc.remove(t),Gc.push(t),mr(t),n.circle=null)}function sr(n){for(var t,e=Vc,r=re(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!lr(t,n)||!r(t)||aa(t.a.x-t.b.x)<Ca&&aa(t.a.y-t.b.y)<Ca)&&(t.a=t.b=null,e.splice(u,1))}function lr(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;
// if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function fr(n,t){this.l=n,this.r=t,this.a=this.b=null}function hr(n,t,e,r){var u=new fr(n,t);return Vc.push(u),e&&pr(u,n,t,e),r&&pr(u,t,n,r),Xc[n.i].edges.push(new vr(u,n,t)),Xc[t.i].edges.push(new vr(u,t,n)),u}function gr(n,t,e){var r=new fr(n,null);return r.a=t,r.b=e,Vc.push(r),r}function pr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function vr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function dr(){this._=null}function mr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function yr(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function xr(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Mr(n){for(;n.L;)n=n.L;return n}function _r(n,t){var e,r,u,i=n.sort(br).pop();for(Vc=[],Xc=new Array(n.length),$c=new dr,Wc=new dr;;)if(u=Bc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Xc[i.i]=new rr(i),nr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Qe(u.arc)}t&&(sr(t),ur(t));var o={cells:Xc,edges:Vc};return $c=Wc=Vc=Xc=null,o}function br(n,t){return t.y-n.y||t.x-n.x}function wr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function Sr(n){return n.x}function kr(n){return n.y}function Er(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function Ar(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&Ar(n,c[0],e,r,o,a),c[1]&&Ar(n,c[1],o,r,u,a),c[2]&&Ar(n,c[2],e,a,o,i),c[3]&&Ar(n,c[3],o,a,u,i)}}function Cr(n,t){n=$o.rgb(n),t=$o.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+ct(Math.round(e+i*n))+ct(Math.round(r+o*n))+ct(Math.round(u+a*n))}}function Nr(n,t){var e,r={},u={};for(e in n)e in t?r[e]=qr(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function Lr(n,t){return t-=n=+n,function(e){return n+t*e}}function Tr(n,t){var e,r,u,i,o,a=0,c=0,s=[],l=[];for(n+="",t+="",Qc.lastIndex=0,r=0;e=Qc.exec(t);++r)e.index&&s.push(t.substring(a,c=e.index)),l.push({i:s.length,x:e[0]}),s.push(null),a=Qc.lastIndex;for(a<t.length&&s.push(t.substring(a)),r=0,i=l.length;(e=Qc.exec(n))&&i>r;++r)if(o=l[r],o.x==e[0]){if(o.i)if(null==s[o.i+1])for(s[o.i-1]+=o.x,s.splice(o.i,1),u=r+1;i>u;++u)l[u].i--;else for(s[o.i-1]+=o.x+s[o.i+1],s.splice(o.i,2),u=r+1;i>u;++u)l[u].i-=2;else if(null==s[o.i+1])s[o.i]=o.x;else for(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1),u=r+1;i>u;++u)l[u].i--;l.splice(r,1),i--,r--}else o.x=Lr(parseFloat(e[0]),parseFloat(o.x));for(;i>r;)o=l.pop(),null==s[o.i+1]?s[o.i]=o.x:(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1)),i--;return 1===s.length?null==s[0]?(o=l[0].x,function(n){return o(n)+""}):function(){return t}:function(n){for(r=0;i>r;++r)s[(o=l[r]).i]=o.x(n);return s.join("")}}function qr(n,t){for(var e,r=$o.interpolators.length;--r>=0&&!(e=$o.interpolators[r](n,t)););return e}function zr(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(qr(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function Rr(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function Dr(n){return function(t){return 1-n(1-t)}}function Pr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Ur(n){return n*n}function jr(n){return n*n*n}function Hr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Fr(n){return function(t){return Math.pow(t,n)}}function Or(n){return 1-Math.cos(n*Aa)}function Yr(n){return Math.pow(2,10*(n-1))}function Ir(n){return 1-Math.sqrt(1-n*n)}function Zr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ea*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ea/t)}}function Vr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Xr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function $r(n,t){n=$o.hcl(n),t=$o.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return J(e+i*n,r+o*n,u+a*n)+""}}function Br(n,t){n=$o.hsl(n),t=$o.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return $(e+i*n,r+o*n,u+a*n)+""}}function Wr(n,t){n=$o.lab(n),t=$o.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return Q(e+i*n,r+o*n,u+a*n)+""}}function Jr(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Gr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Qr(t),u=Kr(t,e),i=Qr(nu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ta,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ta:0}function Kr(n,t){return n[0]*t[0]+n[1]*t[1]}function Qr(n){var t=Math.sqrt(Kr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function nu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function tu(n,t){var e,r=[],u=[],i=$o.transform(n),o=$o.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:Lr(a[0],c[0])},{i:3,x:Lr(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:Lr(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:Lr(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:Lr(g[0],p[0])},{i:e-2,x:Lr(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function eu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function ru(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function uu(n){for(var t=n.source,e=n.target,r=ou(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function iu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function ou(n,t){if(n===t)return n;for(var e=iu(n),r=iu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function au(n){n.fixed|=2}function cu(n){n.fixed&=-7}function su(n){n.fixed|=4,n.px=n.x,n.py=n.y}function lu(n){n.fixed&=-5}function fu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(fu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function hu(n,t){return $o.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=du,n}function gu(n){return n.children}function pu(n){return n.value}function vu(n,t){return t.value-n.value}function du(n){return $o.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function mu(n){return n.x}function yu(n){return n.y}function xu(n,t,e){n.y0=t,n.y=e}function Mu(n){return $o.range(n.length)}function _u(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function bu(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function wu(n){return n.reduce(Su,0)}function Su(n,t){return n+t[1]}function ku(n,t){return Eu(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function Eu(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function Au(n){return[$o.min(n),$o.max(n)]}function Cu(n,t){return n.parent==t.parent?1:2}function Nu(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function Lu(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function Tu(n,t){var e=n.children;if(e&&(u=e.length))for(var r,u,i=-1;++i<u;)t(r=Tu(e[i],t),n)>0&&(n=r);return n}function qu(n,t){return n.x-t.x}function zu(n,t){return t.x-n.x}function Ru(n,t){return n.depth-t.depth}function Du(n,t){function e(n,r){var u=n.children;if(u&&(o=u.length))for(var i,o,a=null,c=-1;++c<o;)i=u[c],e(i,a),a=i;t(n,r)}e(n,null)}function Pu(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function Uu(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function ju(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function Hu(n,t){return n.value-t.value}function Fu(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Ou(n,t){n._pack_next=t,t._pack_prev=n}function Yu(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Iu(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(Zu),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],$u(r,u,i),t(i),Fu(r,i),r._pack_prev=i,Fu(i,u),u=r._pack_next,o=3;s>o;o++){$u(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(Yu(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!Yu(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?Ou(r,u=a):Ou(r=c,u),o--):(Fu(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Vu)}}function Zu(n){n._pack_next=n._pack_prev=n}function Vu(n){delete n._pack_next,delete n._pack_prev}function Xu(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)Xu(u[i],t,e,r)}function $u(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function Bu(n){return 1+$o.max(n,function(n){return n.y})}function Wu(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ju(n){var t=n.children;return t&&t.length?Ju(t[0]):n}function Gu(n){var t,e=n.children;return e&&(t=e.length)?Gu(e[t-1]):n}function Ku(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Qu(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function ni(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function ti(n){return n.rangeExtent?n.rangeExtent():ni(n.range())}function ei(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function ri(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function ui(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ss}function ii(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=$o.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function oi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?ii:ei,c=r?ru:eu;return o=u(n,t,c,e),a=u(t,n,c,qr),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Jr)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return li(n,t)},i.tickFormat=function(t,e){return fi(n,t,e)},i.nice=function(t){return ci(n,t),u()},i.copy=function(){return oi(n,t,e,r)},u()}function ai(n,t){return $o.rebind(n,t,"range","rangeRound","interpolate","clamp")}function ci(n,t){return ri(n,ui(si(n,t)[2]))}function si(n,t){null==t&&(t=10);var e=ni(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function li(n,t){return $o.range.apply($o,si(n,t))}function fi(n,t,e){var r=si(n,t);return $o.format(e?e.replace(uc,function(n,t,e,u,i,o,a,c,s,l){return[t,e,u,i,o,a,c,s||"."+gi(l,r),l].join("")}):",."+hi(r[2])+"f")}function hi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function gi(n,t){var e=hi(t[2]);return n in ls?Math.abs(e-hi(Math.max(Math.abs(t[0]),Math.abs(t[1]))))+ +("e"!==n):e-2*("%"===n)}function pi(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=ri(r.map(u),e?Math:hs);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=ni(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return fs;arguments.length<2?t=fs:"function"!=typeof t&&(t=$o.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return pi(n.copy(),t,e,r)},ai(o,n)}function vi(n,t,e){function r(t){return n(u(t))}var u=di(t),i=di(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return li(e,n)},r.tickFormat=function(n,t){return fi(e,n,t)},r.nice=function(n){return r.domain(ci(e,n))},r.exponent=function(o){return arguments.length?(u=di(t=o),i=di(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return vi(n.copy(),t,e)},ai(r,n)}function di(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function mi(n,t){function e(e){return o[((i.get(e)||"range"===t.t&&i.set(e,n.push(e)))-1)%o.length]}function r(t,e){return $o.range(n.length).map(function(n){return t+e*n})}var i,o,a;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new u;for(var o,a=-1,c=r.length;++a<c;)i.has(o=r[a])||i.set(o,n.push(o));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(o=n,a=0,t={t:"range",a:arguments},e):o},e.rangePoints=function(u,i){arguments.length<2&&(i=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+i);return o=r(n.length<2?(c+s)/2:c+l*i/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-i+2*c);return o=r(l+h*c,h),s&&o.reverse(),a=h*(1-i),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-i+2*c)),g=f-l-(n.length-i)*h;return o=r(l+Math.round(g/2),h),s&&o.reverse(),a=Math.round(h*(1-i)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return ni(t.a[0])},e.copy=function(){return mi(n,t)},e.domain(n)}function yi(n,t){function e(){var e=0,i=t.length;for(u=[];++e<i;)u[e-1]=$o.quantile(n,e/i);return r}function r(n){return isNaN(n=+n)?void 0:t[$o.bisect(u,n)]}var u;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort($o.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return u},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?u[e-1]:n[0],e<u.length?u[e]:n[n.length-1]]},r.copy=function(){return yi(n,t)},e()}function xi(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return xi(n,t,e)},u()}function Mi(n,t){function e(e){return e>=e?t[$o.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return Mi(n,t)},e}function _i(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return li(n,t)},t.tickFormat=function(t,e){return fi(n,t,e)},t.copy=function(){return _i(n)},t}function bi(n){return n.innerRadius}function wi(n){return n.outerRadius}function Si(n){return n.startAngle}function ki(n){return n.endAngle}function Ei(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=pt(e),p=pt(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=Ze,r=Ve,u=Zt,i=Ai,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=xs.get(n)||Ai).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function Ai(n){return n.join("L")}function Ci(n){return Ai(n)+"Z"}function Ni(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function Li(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function Ti(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function qi(n,t){return n.length<4?Ai(n):n[1]+Di(n.slice(1,n.length-1),Pi(n,t))}function zi(n,t){return n.length<3?Ai(n):n[0]+Di((n.push(n[0]),n),Pi([n[n.length-2]].concat(n,[n[1]]),t))}function Ri(n,t){return n.length<3?Ai(n):n[0]+Di(n,Pi(n,t))}function Di(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Ai(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function Pi(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function Ui(n){if(n.length<3)return Ai(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",Oi(bs,o),",",Oi(bs,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Yi(c,o,a);return n.pop(),c.push("L",r),c.join("")}function ji(n){if(n.length<4)return Ai(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(Oi(bs,i)+","+Oi(bs,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Yi(e,i,o);return e.join("")}function Hi(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[Oi(bs,o),",",Oi(bs,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Yi(t,o,a);return t.join("")}function Fi(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return Ui(n)}function Oi(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Yi(n,t,e){n.push("C",Oi(Ms,t),",",Oi(Ms,e),",",Oi(_s,t),",",Oi(_s,e),",",Oi(bs,t),",",Oi(bs,e))}function Ii(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Zi(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=Ii(u,i);++t<e;)r[t]=(o+(o=Ii(u=i,i=n[t+1])))/2;return r[t]=o,r}function Vi(n){for(var t,e,r,u,i=[],o=Zi(n),a=-1,c=n.length-1;++a<c;)t=Ii(n[a],n[a+1]),aa(t)<Ca?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Xi(n){return n.length<3?Ai(n):n[0]+Di(n,Vi(n))}function $i(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ms,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Bi(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=pt(e),_=pt(u),b=e===r?function(){return g}:pt(r),w=u===i?function(){return p}:pt(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ze,r=Ze,u=0,i=Ve,o=Zt,a=Ai,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=xs.get(n)||Ai).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Wi(n){return n.radius}function Ji(n){return[n.x,n.y]}function Gi(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ms;return[e*Math.cos(r),e*Math.sin(r)]}}function Ki(){return 64}function Qi(){return"circle"}function no(n){var t=Math.sqrt(n/ka);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function to(n,t){return ha(n,Cs),n.id=t,n}function eo(n,t,e,r){var u=n.id;return C(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function ro(n){return null==n&&(n=""),function(){this.textContent=n}}function uo(n,t,e,r){var i=n.__transition__||(n.__transition__={active:0,count:0}),o=i[e];if(!o){var a=r.time;o=i[e]={tween:new u,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++i.count,$o.timer(function(r){function u(r){return i.active>e?s():(i.active=e,o.event&&o.event.start.call(n,l,t),o.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),$o.timer(function(){return p.c=c(r||1)?Zt:c,1},0,a),void 0)}function c(r){if(i.active!==e)return s();for(var u=r/g,a=f(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,l,t),s()):void 0}function s(){return--i.count?delete i[e]:delete n.__transition__,1}var l=n.__data__,f=o.ease,h=o.delay,g=o.duration,p=Ga,v=[];return p.t=h+a,r>=h?u(r-h):(p.c=u,void 0)},0,a)}}function io(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function oo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function ao(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function co(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new Ds(e-1)),1),e}function i(n,e){return t(n=new Ds(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{Ds=ao;var r=new ao;return r._=n,o(r,t,e)}finally{Ds=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=so(n);return c.floor=c,c.round=so(r),c.ceil=so(u),c.offset=so(i),c.range=a,n}function so(n){return function(t,e){try{Ds=ao;var r=new ao;return r._=t,n(r,e)._}finally{Ds=Date}}}function lo(n){function t(t){for(var r,u,i,o=[],a=-1,c=0;++a<e;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=nl[r=n.charAt(++a)])&&(r=n.charAt(++a)),(i=tl[r])&&(r=i(t,null==u?"e"===r?" ":"0":u)),o.push(r),c=a+1);return o.push(n.substring(c,a)),o.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},r=fo(e,n,t,0);if(r!=t.length)return null;"p"in e&&(e.H=e.H%12+12*e.p);var u=null!=e.Z&&Ds!==ao,i=new(u?ao:Ds);return"j"in e?i.setFullYear(e.y,0,e.j):"w"in e&&("W"in e||"U"in e)?(i.setFullYear(e.y,0,1),i.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(i.getDay()+5)%7:e.w+7*e.U-(i.getDay()+6)%7)):i.setFullYear(e.y,e.m,e.d),i.setHours(e.H+Math.floor(e.Z/100),e.M+e.Z%100,e.S,e.L),u?i._:i},t.toString=function(){return n},t}function fo(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=el[o in nl?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function ho(n){return new RegExp("^(?:"+n.map($o.requote).join("|")+")","i")}function go(n){for(var t=new u,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function po(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function vo(n,t,e){$s.lastIndex=0;var r=$s.exec(t.substring(e));return r?(n.w=Bs.get(r[0].toLowerCase()),e+r[0].length):-1}function mo(n,t,e){Vs.lastIndex=0;var r=Vs.exec(t.substring(e));return r?(n.w=Xs.get(r[0].toLowerCase()),e+r[0].length):-1}function yo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function xo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Mo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function _o(n,t,e){Gs.lastIndex=0;var r=Gs.exec(t.substring(e));return r?(n.m=Ks.get(r[0].toLowerCase()),e+r[0].length):-1}function bo(n,t,e){Ws.lastIndex=0;var r=Ws.exec(t.substring(e));return r?(n.m=Js.get(r[0].toLowerCase()),e+r[0].length):-1}function wo(n,t,e){return fo(n,tl.c.toString(),t,e)}function So(n,t,e){return fo(n,tl.x.toString(),t,e)}function ko(n,t,e){return fo(n,tl.X.toString(),t,e)}function Eo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Ao(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.y=No(+r[0]),e+r[0].length):-1}function Co(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=+t,e+5):-1}function No(n){return n+(n>68?1900:2e3)}function Lo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function To(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function qo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function zo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function Ro(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function Do(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function Po(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function Uo(n,t,e){var r=ul.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}function jo(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(aa(t)/60),u=aa(t)%60;return e+po(r,"0",2)+po(u,"0",2)}function Ho(n,t,e){Qs.lastIndex=0;var r=Qs.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function Fo(n){function t(n){try{Ds=ao;var t=new Ds;return t._=n,e(t)}finally{Ds=Date}}var e=lo(n);return t.parse=function(n){try{Ds=ao;var t=e.parse(n);return t&&t._}finally{Ds=Date}},t.toString=e.toString,t}function Oo(n){return n.toISOString()}function Yo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=$o.bisect(ol,u);return i==ol.length?[t.year,si(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/ol[i-1]<ol[i]/u?i-1:i]:[ll,si(n,e)[2]]}return r.invert=function(t){return Io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Io(+e+1),t).length}var i=r.domain(),o=ni(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(ri(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=ni(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Yo(n.copy(),t,e)},ai(r,n)}function Io(n){return new Date(n)}function Zo(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e];return r[0](t)}}function Vo(n){return JSON.parse(n.responseText)}function Xo(n){var t=Jo.createRange();return t.selectNode(Jo.body),t.createContextualFragment(n.responseText)}var $o={version:"3.3.10"};Date.now||(Date.now=function(){return+new Date});var Bo=[].slice,Wo=function(n){return Bo.call(n)},Jo=document,Go=Jo.documentElement,Ko=window;try{Wo(Go.childNodes)[0].nodeType}catch(Qo){Wo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{Jo.createElement("div").style.setProperty("opacity",0,"")}catch(na){var ta=Ko.Element.prototype,ea=ta.setAttribute,ra=ta.setAttributeNS,ua=Ko.CSSStyleDeclaration.prototype,ia=ua.setProperty;ta.setAttribute=function(n,t){ea.call(this,n,t+"")},ta.setAttributeNS=function(n,t,e){ra.call(this,n,t,e+"")},ua.setProperty=function(n,t,e){ia.call(this,n,t+"",e)}}$o.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},$o.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},$o.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},$o.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},$o.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},$o.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},$o.mean=function(t,e){var r,u=t.length,i=0,o=-1,a=0;if(1===arguments.length)for(;++o<u;)n(r=t[o])&&(i+=(r-i)/++a);else for(;++o<u;)n(r=e.call(t,t[o],o))&&(i+=(r-i)/++a);return a?i:void 0},$o.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;
// return i?u+i*(n[r]-u):u},$o.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?$o.quantile(t.sort($o.ascending),.5):void 0},$o.bisector=function(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n.call(t,t[i],i)<e?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;e<n.call(t,t[i],i)?u=i:r=i+1}return r}}};var oa=$o.bisector(function(n){return n});$o.bisectLeft=oa.left,$o.bisect=$o.bisectRight=oa.right,$o.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},$o.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},$o.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},$o.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,e=$o.min(arguments,t),r=new Array(e);++n<e;)for(var u,i=-1,o=r[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return r},$o.transpose=function(n){return $o.zip.apply($o,n)},$o.keys=function(n){var t=[];for(var e in n)t.push(e);return t},$o.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},$o.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},$o.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var aa=Math.abs;$o.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var u,i=[],o=e(aa(r)),a=-1;if(n*=o,t*=o,r*=o,0>r)for(;(u=n+r*++a)>t;)i.push(u/o);else for(;(u=n+r*++a)<t;)i.push(u/o);return i},$o.map=function(n){var t=new u;if(n instanceof u)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},r(u,{has:function(n){return ca+n in this},get:function(n){return this[ca+n]},set:function(n,t){return this[ca+n]=t},remove:function(n){return n=ca+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===sa&&n.call(this,t.substring(1),this[t])}});var ca="\x00",sa=ca.charCodeAt(0);$o.nest=function(){function n(t,a,c){if(c>=o.length)return r?r.call(i,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=o[c++],d=new u;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=o.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,i={},o=[],a=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n($o.map,e,0),0)},i.key=function(n){return o.push(n),i},i.sortKeys=function(n){return a[o.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},$o.set=function(n){var t=new i;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},r(i,{has:function(n){return ca+n in this},add:function(n){return this[ca+n]=!0,n},remove:function(n){return n=ca+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===sa&&n.call(this,t.substring(1))}}),$o.behavior={},$o.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=o(n,t,t[e]);return n};var la=["webkit","ms","moz","Moz","o","O"];$o.dispatch=function(){for(var n=new s,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=l(n);return n},s.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},$o.event=null,$o.requote=function(n){return n.replace(fa,"\\$&")};var fa=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ha={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ga=function(n,t){return t.querySelector(n)},pa=function(n,t){return t.querySelectorAll(n)},va=Go[a(Go,"matchesSelector")],da=function(n,t){return va.call(n,t)};"function"==typeof Sizzle&&(ga=function(n,t){return Sizzle(n,t)[0]||null},pa=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},da=Sizzle.matchesSelector),$o.selection=function(){return Ma};var ma=$o.selection.prototype=[];ma.select=function(n){var t,e,r,u,i=[];n=v(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return p(i)},ma.selectAll=function(n){var t,e,r=[];n=d(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Wo(n.call(e,e.__data__,a,u))),t.parentNode=e);return p(r)};var ya={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};$o.ns={prefix:ya,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),ya.hasOwnProperty(e)?{space:ya[e],local:n}:n}},ma.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=$o.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(m(t,n[t]));return this}return this.each(m(n,t))},ma.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!x(n[u]).test(t))return!1;return!0}for(t in n)this.each(M(t,n[t]));return this}return this.each(M(n,t))},ma.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(b(e,n[e],t));return this}if(2>r)return Ko.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(b(n,t,e))},ma.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(w(t,n[t]));return this}return this.each(w(n,t))},ma.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ma.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ma.append=function(n){return n=S(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ma.insert=function(n,t){return n=S(n),t=v(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ma.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},ma.data=function(n,t){function e(n,e){var r,i,o,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new u,y=new u,x=[];for(r=-1;++r<a;)d=t.call(i=n[r],i.__data__,r),m.has(d)?v[r]=i:m.set(d,i),x.push(d);for(r=-1;++r<f;)d=t.call(e,o=e[r],r),(i=m.get(d))?(g[r]=i,i.__data__=o):y.has(d)||(p[r]=k(o)),y.set(d,o),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],o=e[r],i?(i.__data__=o,g[r]=i):p[r]=k(o);for(;f>r;++r)p[r]=k(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,i,o=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++o<a;)(i=r[o])&&(n[o]=i.__data__);return n}var c=N([]),s=p([]),l=p([]);if("function"==typeof n)for(;++o<a;)e(r=this[o],n.call(r,r.parentNode.__data__,o));else for(;++o<a;)e(r=this[o],n);return s.enter=function(){return c},s.exit=function(){return l},s},ma.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ma.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=E(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return p(u)},ma.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},ma.sort=function(n){n=A.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},ma.each=function(n){return C(this,function(t,e,r){n.call(t,t.__data__,e,r)})},ma.call=function(n){var t=Wo(arguments);return n.apply(t[0]=this,t),this},ma.empty=function(){return!this.node()},ma.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},ma.size=function(){var n=0;return this.each(function(){++n}),n};var xa=[];$o.selection.enter=N,$o.selection.enter.prototype=xa,xa.append=ma.append,xa.empty=ma.empty,xa.node=ma.node,xa.call=ma.call,xa.size=ma.size,xa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return p(o)},xa.insert=function(n,t){return arguments.length<2&&(t=L(this)),ma.insert.call(this,n,t)},ma.transition=function(){for(var n,t,e=Ss||++Ns,r=[],u=ks||{time:Date.now(),ease:Hr,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&uo(t,c,e,u),n.push(t)}return to(r,e)},ma.interrupt=function(){return this.each(T)},$o.select=function(n){var t=["string"==typeof n?ga(n,Jo):n];return t.parentNode=Go,p([t])},$o.selectAll=function(n){var t=Wo("string"==typeof n?pa(n,Jo):n);return t.parentNode=Go,p([t])};var Ma=$o.select(Go);ma.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(q(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(q(n,t,e))};var _a=$o.map({mouseenter:"mouseover",mouseleave:"mouseout"});_a.forEach(function(n){"on"+n in Jo&&_a.remove(n)});var ba="onselectstart"in Jo?null:a(Go.style,"userSelect"),wa=0;$o.mouse=function(n){return P(n,h())};var Sa=/WebKit/.test(Ko.navigator.userAgent)?-1:0;$o.touches=function(n,t){return arguments.length<2&&(t=h().touches),t?Wo(t).map(function(t){var e=P(n,t);return e.identifier=t.identifier,e}):[]},$o.behavior.drag=function(){function n(){this.on("mousedown.drag",o).on("touchstart.drag",a)}function t(){return $o.event.changedTouches[0].identifier}function e(n,t){return $o.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function o(){var n=t(l,g),e=n[0]-v[0],r=n[1]-v[1];d|=e|r,v=n,f({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function a(){m.on(e+"."+p,null).on(r+"."+p,null),y(d&&$o.event.target===h),f({type:"dragend"})}var c,s=this,l=s.parentNode,f=u.of(s,arguments),h=$o.event.target,g=n(),p=null==g?"drag":"drag-"+g,v=t(l,g),d=0,m=$o.select(Ko).on(e+"."+p,o).on(r+"."+p,a),y=D();i?(c=i.apply(s,arguments),c=[c.x-v[0],c.y-v[1]]):c=[0,0],f({type:"dragstart"})}}var u=g(n,"drag","dragstart","dragend"),i=null,o=r(c,$o.mouse,"mousemove","mouseup"),a=r(t,e,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},$o.rebind(n,u,"on")};var ka=Math.PI,Ea=2*ka,Aa=ka/2,Ca=1e-6,Na=Ca*Ca,La=ka/180,Ta=180/ka,qa=Math.SQRT2,za=2,Ra=4;$o.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=O(v),o=i/(za*h)*(e*Y(qa*t+v)-F(v));return[r+o*s,u+o*l,i*e/O(qa*t+v)]}return[r+n*s,u+n*l,i*Math.exp(qa*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ra*f)/(2*i*za*h),p=(c*c-i*i-Ra*f)/(2*c*za*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/qa;return e.duration=1e3*y,e},$o.behavior.zoom=function(){function n(n){n.on(A,s).on(Ua+".zoom",h).on(C,p).on("dblclick.zoom",v).on(L,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(M.range().map(function(n){return(n-S.x)/S.k}).map(M.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u($o.mouse(r),h),a(i)}function e(){f.on(C,Ko===r?p:null).on(N,null),g(l&&$o.event.target===s),c(i)}var r=this,i=q.of(r,arguments),s=$o.event.target,l=0,f=$o.select(Ko).on(C,n).on(N,e),h=t($o.mouse(r)),g=D();T.call(r),o(i)}function l(){function n(){var n=$o.touches(p);return g=S.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=t(n))}),n}function e(){for(var t=$o.event.changedTouches,e=0,i=t.length;i>e;++e)d[t[e].identifier]=null;var o=n(),c=Date.now();if(1===o.length){if(500>c-x){var s=o[0],l=d[s.identifier];r(2*S.k),u(s,l),f(),a(v)}x=c}else if(o.length>1){var s=o[0],h=o[1],g=s[0]-h[0],p=s[1]-h[1];m=g*g+p*p}}function i(){for(var n,t,e,i,o=$o.touches(p),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=d[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=m&&Math.sqrt(l/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*g)}x=null,u(n,t),a(v)}function h(){if($o.event.touches.length){for(var t=$o.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}b.on(M,null).on(_,null),w.on(A,s).on(L,l),k(),c(v)}var g,p=this,v=q.of(p,arguments),d={},m=0,y=$o.event.changedTouches[0].identifier,M="touchmove.zoom-"+y,_="touchend.zoom-"+y,b=$o.select(Ko).on(M,i).on(_,h),w=$o.select(p).on(A,null).on(L,e),k=D();T.call(p),e(),o(v)}function h(){var n=q.of(this,arguments);y?clearTimeout(y):(T.call(this),o(n)),y=setTimeout(function(){y=null,c(n)},50),f();var e=m||$o.mouse(this);d||(d=t(e)),r(Math.pow(2,.002*Da())*S.k),u(e,d),a(n)}function p(){d=null}function v(){var n=q.of(this,arguments),e=$o.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,$o.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var d,m,y,x,M,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Pa,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",L="touchstart.zoom",q=g(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=q.of(this,arguments),t=S;Ss?$o.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=$o.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Pa:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,M=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},$o.rebind(n,q,"on")};var Da,Pa=[0,1/0],Ua="onwheel"in Jo?(Da=function(){return-$o.event.deltaY*($o.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Jo?(Da=function(){return $o.event.wheelDelta},"mousewheel"):(Da=function(){return-$o.event.detail},"MozMousePixelScroll");Z.prototype.toString=function(){return this.rgb()+""},$o.hsl=function(n,t,e){return 1===arguments.length?n instanceof X?V(n.h,n.s,n.l):st(""+n,lt,V):V(+n,+t,+e)};var ja=X.prototype=new Z;ja.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),V(this.h,this.s,this.l/n)},ja.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),V(this.h,this.s,n*this.l)},ja.rgb=function(){return $(this.h,this.s,this.l)},$o.hcl=function(n,t,e){return 1===arguments.length?n instanceof W?B(n.h,n.c,n.l):n instanceof K?nt(n.l,n.a,n.b):nt((n=ft((n=$o.rgb(n)).r,n.g,n.b)).l,n.a,n.b):B(+n,+t,+e)};var Ha=W.prototype=new Z;Ha.brighter=function(n){return B(this.h,this.c,Math.min(100,this.l+Fa*(arguments.length?n:1)))},Ha.darker=function(n){return B(this.h,this.c,Math.max(0,this.l-Fa*(arguments.length?n:1)))},Ha.rgb=function(){return J(this.h,this.c,this.l).rgb()},$o.lab=function(n,t,e){return 1===arguments.length?n instanceof K?G(n.l,n.a,n.b):n instanceof W?J(n.l,n.c,n.h):ft((n=$o.rgb(n)).r,n.g,n.b):G(+n,+t,+e)};var Fa=18,Oa=.95047,Ya=1,Ia=1.08883,Za=K.prototype=new Z;Za.brighter=function(n){return G(Math.min(100,this.l+Fa*(arguments.length?n:1)),this.a,this.b)},Za.darker=function(n){return G(Math.max(0,this.l-Fa*(arguments.length?n:1)),this.a,this.b)},Za.rgb=function(){return Q(this.l,this.a,this.b)},$o.rgb=function(n,t,e){return 1===arguments.length?n instanceof at?ot(n.r,n.g,n.b):st(""+n,ot,$):ot(~~n,~~t,~~e)};var Va=at.prototype=new Z;Va.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),ot(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):ot(u,u,u)},Va.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),ot(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Va.hsl=function(){return lt(this.r,this.g,this.b)},Va.toString=function(){return"#"+ct(this.r)+ct(this.g)+ct(this.b)};var Xa=$o.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Xa.forEach(function(n,t){Xa.set(n,ut(t))}),$o.functor=pt,$o.xhr=dt(vt),$o.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=$o.xhr(n,t,i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o.row(e)}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function o(t){return t.map(a).join(n)}function a(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=new RegExp('["'+n+"\n]"),s=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=c)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==s)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],c=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new i,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(a).join(n)].concat(t.map(function(t){return u.map(function(n){return a(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(o).join("\n")},e},$o.csv=$o.dsv(",","text/csv"),$o.tsv=$o.dsv("	","text/tab-separated-values");var $a,Ba,Wa,Ja,Ga,Ka=Ko[a(Ko,"requestAnimationFrame")]||function(n){setTimeout(n,17)};$o.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Ba?Ba.n=i:$a=i,Ba=i,Wa||(Ja=clearTimeout(Ja),Wa=1,Ka(xt))},$o.timer.flush=function(){Mt(),_t()};var Qa=".",nc=",",tc=[3,3],ec="$",rc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(bt);$o.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=$o.round(n,wt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),rc[8+e/3]},$o.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},$o.format=function(n){var t=uc.exec(n),e=t[1]||" ",r=t[2]||">",u=t[3]||"",i=t[4]||"",o=t[5],a=+t[6],c=t[7],s=t[8],l=t[9],f=1,h="",g=!1;switch(s&&(s=+s.substring(1)),(o||"0"===e&&"="===r)&&(o=e="0",r="=",c&&(a-=Math.floor((a-1)/4))),l){case"n":c=!0,l="g";break;case"%":f=100,h="%",l="f";break;case"p":f=100,h="%",l="r";break;case"b":case"o":case"x":case"X":"#"===i&&(i="0"+l.toLowerCase());case"c":case"d":g=!0,s=0;break;case"s":f=-1,l="r"}"#"===i?i="":"$"===i&&(i=ec),"r"!=l||s||(l="g"),null!=s&&("g"==l?s=Math.max(1,Math.min(21,s)):("e"==l||"f"==l)&&(s=Math.max(0,Math.min(20,s)))),l=ic.get(l)||St;var p=o&&c;return function(n){if(g&&n%1)return"";var t=0>n||0===n&&0>1/n?(n=-n,"-"):u;if(0>f){var v=$o.formatPrefix(n,s);n=v.scale(n),h=v.symbol}else n*=f;n=l(n,s);var d=n.lastIndexOf("."),m=0>d?n:n.substring(0,d),y=0>d?"":Qa+n.substring(d+1);!o&&c&&(m=oc(m));var x=i.length+m.length+y.length+(p?0:t.length),M=a>x?new Array(x=a-x+1).join(e):"";return p&&(m=oc(M+m)),t+=i,n=m+y,("<"===r?t+n+M:">"===r?M+t+n:"^"===r?M.substring(0,x>>=1)+t+n+M.substring(x):t+(p?n:M+n))+h}};var uc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,ic=$o.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=$o.round(n,wt(n,t))).toFixed(Math.max(0,Math.min(20,wt(n*(1+1e-15),t))))}}),oc=vt;if(tc){var ac=tc.length;oc=function(n){for(var t=n.length,e=[],r=0,u=tc[0];t>0&&u>0;)e.push(n.substring(t-=u,t+u)),u=tc[r=(r+1)%ac];return e.reverse().join(nc)}}$o.geo={},kt.prototype={s:0,t:0,add:function(n){Et(n,this.t,cc),Et(cc.s,this.s,this),this.s?this.t+=cc.t:this.s=cc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var cc=new kt;$o.geo.stream=function(n,t){n&&sc.hasOwnProperty(n.type)?sc[n.type](n,t):At(n,t)};var sc={Feature:function(n,t){At(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)At(e[r].geometry,t)}},lc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){Ct(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)Ct(e[r],t,0)},Polygon:function(n,t){Nt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)Nt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)At(e[r],t)}};$o.geo.area=function(n){return fc=0,$o.geo.stream(n,gc),fc};var fc,hc=new kt,gc={sphere:function(){fc+=4*ka},point:c,lineStart:c,lineEnd:c,polygonStart:function(){hc.reset(),gc.lineStart=Lt},polygonEnd:function(){var n=2*hc;fc+=0>n?4*ka+n:n,gc.lineStart=gc.lineEnd=gc.point=c}};$o.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=Tt([t*La,e*La]);if(m){var u=zt(m,r),i=[u[1],-u[0],0],o=zt(i,u);Pt(o),o=Ut(o);var c=t-p,s=c>0?1:-1,v=o[0]*Ta*s,d=aa(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*Ta;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*Ta;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=aa(r)>180?r+(r>0?360:-360):r}else v=n,d=e;gc.point(n,e),t(n,e)}function i(){gc.lineStart()}function o(){u(v,d),gc.lineEnd(),aa(y)>Ca&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,gc.polygonStart()},polygonEnd:function(){gc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>hc?(l=-(h=180),f=-(g=90)):y>Ca?g=90:-Ca>y&&(f=-90),M[0]=l,M[1]=h}};return function(n){g=h=-(l=f=1/0),x=[],$o.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),$o.geo.centroid=function(n){pc=vc=dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,$o.geo.stream(n,kc);var t=bc,e=wc,r=Sc,u=t*t+e*e+r*r;return Na>u&&(t=xc,e=Mc,r=_c,Ca>vc&&(t=dc,e=mc,r=yc),u=t*t+e*e+r*r,Na>u)?[0/0,0/0]:[Math.atan2(e,t)*Ta,H(r/Math.sqrt(u))*Ta]};var pc,vc,dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc={sphere:c,point:Ht,lineStart:Ot,lineEnd:Yt,polygonStart:function(){kc.lineStart=It},polygonEnd:function(){kc.lineStart=Ot}},Ec=Bt(Zt,Qt,te,[-ka,-ka/2]),Ac=1e9;$o.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=ue(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},($o.geo.conicEqualArea=function(){return oe(ae)}).raw=ae,$o.geo.albers=function(){return $o.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},$o.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=$o.geo.albers(),o=$o.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=$o.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Ca,f+.12*s+Ca],[l-.214*s-Ca,f+.234*s-Ca]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Ca,f+.166*s+Ca],[l-.115*s-Ca,f+.234*s-Ca]]).stream(c).point,n},n.scale(1070)};var Cc,Nc,Lc,Tc,qc,zc,Rc={point:c,lineStart:c,lineEnd:c,polygonStart:function(){Nc=0,Rc.lineStart=ce},polygonEnd:function(){Rc.lineStart=Rc.lineEnd=Rc.point=c,Cc+=aa(Nc/2)}},Dc={point:se,lineStart:c,lineEnd:c,polygonStart:c,polygonEnd:c},Pc={point:he,lineStart:ge,lineEnd:pe,polygonStart:function(){Pc.lineStart=ve},polygonEnd:function(){Pc.point=he,Pc.lineStart=ge,Pc.lineEnd=pe}};$o.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),$o.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Cc=0,$o.geo.stream(n,u(Rc)),Cc},n.centroid=function(n){return dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,$o.geo.stream(n,u(Pc)),Sc?[bc/Sc,wc/Sc]:_c?[xc/_c,Mc/_c]:yc?[dc/yc,mc/yc]:[0/0,0/0]},n.bounds=function(n){return qc=zc=-(Lc=Tc=1/0),$o.geo.stream(n,u(Dc)),[[Lc,Tc],[qc,zc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||ye(n):vt,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new le:new de(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection($o.geo.albersUsa()).context(null)},$o.geo.transform=function(n){return{stream:function(t){var e=new xe(t);for(var r in n)e[r]=n[r];return e}}},xe.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()
// },lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},$o.geo.projection=_e,$o.geo.projectionMutator=be,($o.geo.equirectangular=function(){return _e(Se)}).raw=Se.invert=Se,$o.geo.rotation=function(n){function t(t){return t=n(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t}return n=Ee(n[0]%360*La,n[1]*La,n.length>2?n[2]*La:0),t.invert=function(t){return t=n.invert(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t},t},ke.invert=Se,$o.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=Ee(-n[0]*La,-n[1]*La,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ta,n[1]*=Ta}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=Le((t=+r)*La,u*La),n):t},n.precision=function(r){return arguments.length?(e=Le(t*La,(u=+r)*La),n):u},n.angle(90)},$o.geo.distance=function(n,t){var e,r=(t[0]-n[0])*La,u=n[1]*La,i=t[1]*La,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},$o.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return $o.range(Math.ceil(i/d)*d,u,d).map(h).concat($o.range(Math.ceil(s/m)*m,c,m).map(g)).concat($o.range(Math.ceil(r/p)*p,e,p).filter(function(n){return aa(n%d)>Ca}).map(l)).concat($o.range(Math.ceil(a/v)*v,o,v).filter(function(n){return aa(n%m)>Ca}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=qe(a,o,90),f=ze(r,e,y),h=qe(s,c,90),g=ze(i,u,y),n):y},n.majorExtent([[-180,-90+Ca],[180,90-Ca]]).minorExtent([[-180,-80-Ca],[180,80+Ca]])},$o.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=Re,u=De;return n.distance=function(){return $o.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},$o.geo.interpolate=function(n,t){return Pe(n[0]*La,n[1]*La,t[0]*La,t[1]*La)},$o.geo.length=function(n){return Uc=0,$o.geo.stream(n,jc),Uc};var Uc,jc={sphere:c,point:c,lineStart:Ue,lineEnd:c,polygonStart:c,polygonEnd:c},Hc=je(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});($o.geo.azimuthalEqualArea=function(){return _e(Hc)}).raw=Hc;var Fc=je(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},vt);($o.geo.azimuthalEquidistant=function(){return _e(Fc)}).raw=Fc,($o.geo.conicConformal=function(){return oe(He)}).raw=He,($o.geo.conicEquidistant=function(){return oe(Fe)}).raw=Fe;var Oc=je(function(n){return 1/n},Math.atan);($o.geo.gnomonic=function(){return _e(Oc)}).raw=Oc,Oe.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Aa]},($o.geo.mercator=function(){return Ye(Oe)}).raw=Oe;var Yc=je(function(){return 1},Math.asin);($o.geo.orthographic=function(){return _e(Yc)}).raw=Yc;var Ic=je(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});($o.geo.stereographic=function(){return _e(Ic)}).raw=Ic,Ie.invert=function(n,t){return[Math.atan2(F(n),Math.cos(t)),H(Math.sin(t)/O(n))]},($o.geo.transverseMercator=function(){return Ye(Ie)}).raw=Ie,$o.geom={},$o.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u,i,o,a,c,s,l,f,h,g,p,v=pt(e),d=pt(r),m=n.length,y=m-1,x=[],M=[],_=0;if(v===Ze&&r===Ve)t=n;else for(i=0,t=[];m>i;++i)t.push([+v.call(this,u=n[i],i),+d.call(this,u,i)]);for(i=1;m>i;++i)(t[i][1]<t[_][1]||t[i][1]==t[_][1]&&t[i][0]<t[_][0])&&(_=i);for(i=0;m>i;++i)i!==_&&(c=t[i][1]-t[_][1],a=t[i][0]-t[_][0],x.push({angle:Math.atan2(c,a),index:i}));for(x.sort(function(n,t){return n.angle-t.angle}),g=x[0].angle,h=x[0].index,f=0,i=1;y>i;++i){if(o=x[i].index,g==x[i].angle){if(a=t[h][0]-t[_][0],c=t[h][1]-t[_][1],s=t[o][0]-t[_][0],l=t[o][1]-t[_][1],a*a+c*c>=s*s+l*l){x[i].index=-1;continue}x[f].index=-1}g=x[i].angle,f=i,h=o}for(M.push(_),i=0,o=0;2>i;++o)x[o].index>-1&&(M.push(x[o].index),i++);for(p=M.length;y>o;++o)if(!(x[o].index<0)){for(;!Xe(M[p-2],M[p-1],x[o].index,t);)--p;M[p++]=x[o].index}var b=[];for(i=p-1;i>=0;--i)b.push(n[M[i]]);return b}var e=Ze,r=Ve;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},$o.geom.polygon=function(n){return ha(n,Zc),n};var Zc=$o.geom.polygon.prototype=[];Zc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Zc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Zc.clip=function(n){for(var t,e,r,u,i,o,a=We(n),c=-1,s=this.length-We(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],$e(o,l,u)?($e(i,l,u)||n.push(Be(i,o,l,u)),n.push(o)):$e(i,l,u)&&n.push(Be(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Vc,Xc,$c,Bc,Wc,Jc=[],Gc=[];rr.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(ir),t.length},vr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},dr.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=Mr(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(yr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,xr(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(xr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,yr(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?Mr(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,yr(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,xr(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,yr(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,xr(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,yr(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,xr(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},$o.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return _r(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ca)*Ca,y:Math.round(o(n,t)/Ca)*Ca,i:t}})}var r=Ze,u=Ve,i=r,o=u,a=Kc;return n?t(n):(t.links=function(n){return _r(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return _r(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(ir),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&wr(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=pt(r=n),t):r},t.y=function(n){return arguments.length?(o=pt(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?Kc:n,t):a===Kc?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===Kc?null:a&&a[1]},t)};var Kc=[[-1e6,-1e6],[1e6,1e6]];$o.geom.delaunay=function(n){return $o.geom.voronoi().triangles(n)},$o.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(aa(c-e)+aa(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=Er()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=pt(a),M=pt(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=Er();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){Ar(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=Ze,c=Ve;return(o=arguments.length)?(a=Sr,c=kr,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},$o.interpolateRgb=Cr,$o.interpolateObject=Nr,$o.interpolateNumber=Lr,$o.interpolateString=Tr;var Qc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;$o.interpolate=qr,$o.interpolators=[function(n,t){var e=typeof t;return("string"===e?Xa.has(t)||/^(#|rgb\(|hsl\()/.test(t)?Cr:Tr:t instanceof Z?Cr:"object"===e?Array.isArray(t)?zr:Nr:Lr)(n,t)}],$o.interpolateArray=zr;var ns=function(){return vt},ts=$o.map({linear:ns,poly:Fr,quad:function(){return Ur},cubic:function(){return jr},sin:function(){return Or},exp:function(){return Yr},circle:function(){return Ir},elastic:Zr,back:Vr,bounce:function(){return Xr}}),es=$o.map({"in":vt,out:Dr,"in-out":Pr,"out-in":function(n){return Pr(Dr(n))}});$o.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=ts.get(e)||ns,r=es.get(r)||vt,Rr(r(e.apply(null,Bo.call(arguments,1))))},$o.interpolateHcl=$r,$o.interpolateHsl=Br,$o.interpolateLab=Wr,$o.interpolateRound=Jr,$o.transform=function(n){var t=Jo.createElementNS($o.ns.prefix.svg,"g");return($o.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Gr(e?e.matrix:rs)})(n)},Gr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var rs={a:1,b:0,c:0,d:1,e:0,f:0};$o.interpolateTransform=tu,$o.layout={},$o.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(uu(n[e]));return t}},$o.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=$o.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push($o.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Ea-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},$o.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=1/Math.sqrt(i*i+o*o);if(v>(u-e)*a){var c=t.charge*a*a;return n.px-=i*c,n.py-=o*c,!0}if(t.point&&isFinite(a)){var c=t.pointCharge*a*a;n.px-=i*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=$o.event.x,n.py=$o.event.y,a.resume()}var e,r,u,i,o,a={},c=$o.dispatch("start","tick","end"),s=[1,1],l=.9,f=us,h=is,g=-30,p=.1,v=.8,d=[],m=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,v,y,x,M,_=d.length,b=m.length;for(e=0;b>e;++e)a=m[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(v=x*x+M*M)&&(v=r*i[e]*((v=Math.sqrt(v))-u[e])/v,x*=v,M*=v,h.x-=x*(y=f.weight/(h.weight+f.weight)),h.y-=M*y,f.x+=x*(y=1-y),f.y+=M*y);if((y=r*p)&&(x=s[0]/2,M=s[1]/2,e=-1,y))for(;++e<_;)a=d[e],a.x+=(x-a.x)*y,a.y+=(M-a.y)*y;if(g)for(fu(t=$o.geom.quadtree(d),r,o),e=-1;++e<_;)(a=d[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=d[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(d=n,a):d},a.links=function(n){return arguments.length?(m=n,a):m},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.gravity=function(n){return arguments.length?(p=+n,a):p},a.theta=function(n){return arguments.length?(v=+n,a):v},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),$o.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=m[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=d.length,l=m.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=d[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=m[t],"number"==typeof r.source&&(r.source=d[r.source]),"number"==typeof r.target&&(r.target=d[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=d[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,m[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,m[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,d[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=$o.behavior.drag().origin(vt).on("dragstart.force",au).on("drag.force",t).on("dragend.force",cu)),arguments.length?(this.on("mouseover.force",su).on("mouseout.force",lu).call(e),void 0):e},$o.rebind(a,c,"on")};var us=20,is=1;$o.layout.hierarchy=function(){function n(t,o,a){var c=u.call(e,t,o);if(t.depth=o,a.push(t),c&&(s=c.length)){for(var s,l,f=-1,h=t.children=new Array(s),g=0,p=o+1;++f<s;)l=h[f]=n(c[f],p,a),l.parent=t,g+=l.value;r&&h.sort(r),i&&(t.value=g)}else delete t.children,i&&(t.value=+i.call(e,t,o)||0);return t}function t(n,r){var u=n.children,o=0;if(u&&(a=u.length))for(var a,c=-1,s=r+1;++c<a;)o+=t(u[c],s);else i&&(o=+i.call(e,n,r)||0);return i&&(n.value=o),o}function e(t){var e=[];return n(t,0,e),e}var r=vu,u=gu,i=pu;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(u=n,e):u},e.value=function(n){return arguments.length?(i=n,e):i},e.revalue=function(n){return t(n,0),n},e},$o.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=$o.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},hu(e,r)},$o.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/$o.sum(o),s=$o.range(i.length);null!=e&&s.sort(e===os?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=os,r=0,u=Ea;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var os={};$o.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=$o.permute(s,f),l=$o.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=vt,e=Mu,r=_u,u=xu,i=mu,o=yu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:as.get(t)||Mu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:cs.get(t)||_u,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var as=$o.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(bu),i=n.map(wu),o=$o.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return $o.range(n.length).reverse()},"default":Mu}),cs=$o.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:_u});$o.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[$o.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=Au,u=ku;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=pt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return Eu(n,t)}:pt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},$o.layout.tree=function(){function n(n,i){function o(n,t){var r=n.children,u=n._tree;if(r&&(i=r.length)){for(var i,a,s,l=r[0],f=l,h=-1;++h<i;)s=r[h],o(s,a),f=c(s,a,f),a=s;Pu(n);var g=.5*(l._tree.prelim+s._tree.prelim);t?(u.prelim=t._tree.prelim+e(n,t),u.mod=u.prelim-g):u.prelim=g}else t&&(u.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,u=-1;for(t+=n._tree.mod;++u<r;)a(e[u],t)}}function c(n,t,r){if(t){for(var u,i=n,o=n,a=t,c=n.parent.children[0],s=i._tree.mod,l=o._tree.mod,f=a._tree.mod,h=c._tree.mod;a=Lu(a),i=Nu(i),a&&i;)c=Nu(c),o=Lu(o),o._tree.ancestor=n,u=a._tree.prelim+f-i._tree.prelim-s+e(a,i),u>0&&(Uu(ju(a,n,r),n,u),s+=u,l+=u),f+=a._tree.mod,s+=i._tree.mod,h+=c._tree.mod,l+=o._tree.mod;a&&!Lu(o)&&(o._tree.thread=a,o._tree.mod+=f-l),i&&!Nu(c)&&(c._tree.thread=i,c._tree.mod+=s-h,r=n)}return r}var s=t.call(this,n,i),l=s[0];Du(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),o(l),a(l,-l._tree.prelim);var f=Tu(l,zu),h=Tu(l,qu),g=Tu(l,Ru),p=f.x-e(f,h)/2,v=h.x+e(h,f)/2,d=g.depth||1;return Du(l,u?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(v-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),s}var t=$o.layout.hierarchy().sort(null).value(null),e=Cu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},hu(n,t)},$o.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Du(a,function(n){n.r=+l(n.value)}),Du(a,Iu),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;Du(a,function(n){n.r+=f}),Du(a,Iu),Du(a,function(n){n.r-=f})}return Xu(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=$o.layout.hierarchy().sort(Hu),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},hu(n,e)},$o.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;Du(c,function(n){var t=n.children;t&&t.length?(n.x=Wu(t),n.y=Bu(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ju(c),f=Gu(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return Du(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=$o.layout.hierarchy().sort(null).value(null),e=Cu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},hu(n,t)},$o.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=$o.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=Ku,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ku(t):Qu(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Qu(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?Ku:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},hu(i,a)},$o.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=$o.random.normal.apply($o,arguments);return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t/n}}},$o.scale={};var ss={floor:vt,ceil:vt};$o.scale.linear=function(){return oi([0,1],[0,1],qr,!1)};var ls={s:1,g:1,p:1,r:1,e:1};$o.scale.log=function(){return pi($o.scale.linear().domain([0,1]),10,!0,[1,10])};var fs=$o.format(".0e"),hs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};$o.scale.pow=function(){return vi($o.scale.linear(),1,[0,1])},$o.scale.sqrt=function(){return $o.scale.pow().exponent(.5)},$o.scale.ordinal=function(){return mi([],{t:"range",a:[[]]})},$o.scale.category10=function(){return $o.scale.ordinal().range(gs)},$o.scale.category20=function(){return $o.scale.ordinal().range(ps)},$o.scale.category20b=function(){return $o.scale.ordinal().range(vs)},$o.scale.category20c=function(){return $o.scale.ordinal().range(ds)};var gs=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(it),ps=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(it),vs=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(it),ds=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(it);$o.scale.quantile=function(){return yi([],[])},$o.scale.quantize=function(){return xi(0,1,[0,1])},$o.scale.threshold=function(){return Mi([.5],[0,1])},$o.scale.identity=function(){return _i([0,1])},$o.svg={},$o.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ms,a=u.apply(this,arguments)+ms,c=(o>a&&(c=o,o=a,a=c),a-o),s=ka>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);return c>=ys?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=bi,e=wi,r=Si,u=ki;return n.innerRadius=function(e){return arguments.length?(t=pt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=pt(t),n):e},n.startAngle=function(t){return arguments.length?(r=pt(t),n):r},n.endAngle=function(t){return arguments.length?(u=pt(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ms;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ms=-Aa,ys=Ea-Ca;$o.svg.line=function(){return Ei(vt)};var xs=$o.map({linear:Ai,"linear-closed":Ci,step:Ni,"step-before":Li,"step-after":Ti,basis:Ui,"basis-open":ji,"basis-closed":Hi,bundle:Fi,cardinal:Ri,"cardinal-open":qi,"cardinal-closed":zi,monotone:Xi});xs.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Ms=[0,2/3,1/3,0],_s=[0,1/3,2/3,0],bs=[0,1/6,2/3,1/6];$o.svg.line.radial=function(){var n=Ei($i);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},Li.reverse=Ti,Ti.reverse=Li,$o.svg.area=function(){return Bi(vt)},$o.svg.area.radial=function(){var n=Bi($i);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},$o.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ms,l=s.call(n,u,r)+ms;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>ka)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=Re,o=De,a=Wi,c=Si,s=ki;return n.radius=function(t){return arguments.length?(a=pt(t),n):a},n.source=function(t){return arguments.length?(i=pt(t),n):i},n.target=function(t){return arguments.length?(o=pt(t),n):o},n.startAngle=function(t){return arguments.length?(c=pt(t),n):c},n.endAngle=function(t){return arguments.length?(s=pt(t),n):s},n},$o.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=Re,e=De,r=Ji;return n.source=function(e){return arguments.length?(t=pt(e),n):t},n.target=function(t){return arguments.length?(e=pt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},$o.svg.diagonal.radial=function(){var n=$o.svg.diagonal(),t=Ji,e=n.projection;return n.projection=function(n){return arguments.length?e(Gi(t=n)):t},n},$o.svg.symbol=function(){function n(n,r){return(ws.get(t.call(this,n,r))||no)(e.call(this,n,r))}var t=Qi,e=Ki;return n.type=function(e){return arguments.length?(t=pt(e),n):t},n.size=function(t){return arguments.length?(e=pt(t),n):e},n};var ws=$o.map({circle:no,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*As)),e=t*As;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Es),e=t*Es/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Es),e=t*Es/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});$o.svg.symbolTypes=ws.keys();var Ss,ks,Es=Math.sqrt(3),As=Math.tan(30*La),Cs=[],Ns=0;
// Cs.call=ma.call,Cs.empty=ma.empty,Cs.node=ma.node,Cs.size=ma.size,$o.transition=function(n){return arguments.length?Ss?n.transition():n:Ma.transition()},$o.transition.prototype=Cs,Cs.select=function(n){var t,e,r,u=this.id,i=[];n=v(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),uo(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return to(i,u)},Cs.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=d(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&uo(u,g,o,i),t.push(u)}return to(a,o)},Cs.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=E(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return to(u,this.id)},Cs.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):C(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Cs.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?tu:qr,a=$o.ns.qualify(n);return eo(this,"attr."+n,t,a.local?i:u)},Cs.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=$o.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Cs.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Ko.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=qr(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return eo(this,"style."+n,t,u)},Cs.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Ko.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Cs.text=function(n){return eo(this,"text",n,ro)},Cs.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Cs.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=$o.ease.apply($o,arguments)),C(this,function(e){e.__transition__[t].ease=n}))},Cs.delay=function(n){var t=this.id;return C(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Cs.duration=function(n){var t=this.id;return C(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Cs.each=function(n,t){var e=this.id;if(arguments.length<2){var r=ks,u=Ss;Ss=e,C(this,function(t,r,u){ks=t.__transition__[e],n.call(t,t.__data__,r,u)}),ks=r,Ss=u}else C(this,function(r){var u=r.__transition__[e];(u.event||(u.event=$o.dispatch("start","end"))).on(n,t)});return this},Cs.transition=function(){for(var n,t,e,r,u=this.id,i=++Ns,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,uo(e,s,i,r)),n.push(e)}return to(o,i)},$o.svg.axis=function(){function n(n){n.each(function(){var n,s=$o.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):vt:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ca),d=$o.transition(p.exit()).style("opacity",Ca).remove(),m=$o.transition(p).style("opacity",1),y=ti(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),$o.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=io,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=io,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=oo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=oo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,e=$o.scale.linear(),r=Ls,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Ts?t+"":Ls,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Ls="bottom",Ts={top:1,right:1,bottom:1,left:1};$o.svg.brush=function(){function n(i){i.each(function(){var i=$o.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(d,vt);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return qs[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=$o.transition(i),h=$o.transition(o);c&&(l=ti(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=ti(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){32==$o.event.keyCode&&(C||(x=null,L[0]-=l[1],L[1]-=h[1],C=2),f())}function g(){32==$o.event.keyCode&&2==C&&(L[0]+=l[1],L[1]+=h[1],C=0,f())}function d(){var n=$o.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||($o.event.altKey?(x||(x=[(l[0]+l[1])/2,(h[0]+h[1])/2]),L[0]=l[+(n[0]<x[0])],L[1]=h[+(n[1]<x[1])]):x=null),E&&m(n,c,0)&&(e(S),u=!0),A&&m(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,a=ti(t),c=a[0],s=a[1],f=L[e],g=e?h:l,d=g[1]-g[0];return C&&(c-=f,s-=d+f),r=(e?v:p)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=f)+d:(x&&(f=Math.max(c,Math.min(s,2*x[e]-r))),r>f?(u=r,r=f):u=f),g[0]!=r||g[1]!=u?(e?o=null:i=null,g[0]=r,g[1]=u,!0):void 0}function y(){d(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),$o.select("body").style("cursor",null),T.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=$o.select($o.event.target),w=a.of(_,arguments),S=$o.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=D(),L=$o.mouse(_),T=$o.select(Ko).on("keydown.brush",u).on("keyup.brush",g);if($o.event.changedTouches?T.on("touchmove.brush",d).on("touchend.brush",y):T.on("mousemove.brush",d).on("mouseup.brush",y),S.interrupt().selectAll("*").interrupt(),C)L[0]=l[0]-L[0],L[1]=h[0]-L[1];else if(k){var q=+/w$/.test(k),z=+/^n/.test(k);M=[l[1-q]-L[0],h[1-z]-L[1]],L[0]=l[q],L[1]=h[z]}else $o.event.altKey&&(x=L.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),$o.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),d()}var i,o,a=g(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],h=[0,0],p=!0,v=!0,d=zs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:h,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Ss?$o.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=zr(l,t.x),r=zr(h,t.y);return i=o=null,function(u){l=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,d=zs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,d=zs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(p=!!t[0],v=!!t[1]):c?p=!!t:s&&(v=!!t),n):c&&s?[p,v]:c?p:s?v:null},n.extent=function(t){var e,r,u,a,f;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(f=e,e=r,r=f),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(f=u,u=a,a=f),(u!=h[0]||a!=h[1])&&(h=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(f=e,e=r,r=f))),s&&(o?(u=o[0],a=o[1]):(u=h[0],a=h[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(f=u,u=a,a=f))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],h=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&h[0]==h[1]},$o.rebind(n,a,"on")};var qs={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},zs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Rs=$o.time={},Ds=Date,Ps=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];ao.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){Us.setUTCDate.apply(this._,arguments)},setDay:function(){Us.setUTCDay.apply(this._,arguments)},setFullYear:function(){Us.setUTCFullYear.apply(this._,arguments)},setHours:function(){Us.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){Us.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){Us.setUTCMinutes.apply(this._,arguments)},setMonth:function(){Us.setUTCMonth.apply(this._,arguments)},setSeconds:function(){Us.setUTCSeconds.apply(this._,arguments)},setTime:function(){Us.setTime.apply(this._,arguments)}};var Us=Date.prototype,js="%a %b %e %X %Y",Hs="%m/%d/%Y",Fs="%H:%M:%S",Os=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Ys=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Is=["January","February","March","April","May","June","July","August","September","October","November","December"],Zs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];Rs.year=co(function(n){return n=Rs.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),Rs.years=Rs.year.range,Rs.years.utc=Rs.year.utc.range,Rs.day=co(function(n){var t=new Ds(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),Rs.days=Rs.day.range,Rs.days.utc=Rs.day.utc.range,Rs.dayOfYear=function(n){var t=Rs.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},Ps.forEach(function(n,t){n=n.toLowerCase(),t=7-t;var e=Rs[n]=co(function(n){return(n=Rs.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=Rs.year(n).getDay();return Math.floor((Rs.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});Rs[n+"s"]=e.range,Rs[n+"s"].utc=e.utc.range,Rs[n+"OfYear"]=function(n){var e=Rs.year(n).getDay();return Math.floor((Rs.dayOfYear(n)+(e+t)%7)/7)}}),Rs.week=Rs.sunday,Rs.weeks=Rs.sunday.range,Rs.weeks.utc=Rs.sunday.utc.range,Rs.weekOfYear=Rs.sundayOfYear,Rs.format=lo;var Vs=ho(Os),Xs=go(Os),$s=ho(Ys),Bs=go(Ys),Ws=ho(Is),Js=go(Is),Gs=ho(Zs),Ks=go(Zs),Qs=/^%/,nl={"-":"",_:" ",0:"0"},tl={a:function(n){return Ys[n.getDay()]},A:function(n){return Os[n.getDay()]},b:function(n){return Zs[n.getMonth()]},B:function(n){return Is[n.getMonth()]},c:lo(js),d:function(n,t){return po(n.getDate(),t,2)},e:function(n,t){return po(n.getDate(),t,2)},H:function(n,t){return po(n.getHours(),t,2)},I:function(n,t){return po(n.getHours()%12||12,t,2)},j:function(n,t){return po(1+Rs.dayOfYear(n),t,3)},L:function(n,t){return po(n.getMilliseconds(),t,3)},m:function(n,t){return po(n.getMonth()+1,t,2)},M:function(n,t){return po(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return po(n.getSeconds(),t,2)},U:function(n,t){return po(Rs.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return po(Rs.mondayOfYear(n),t,2)},x:lo(Hs),X:lo(Fs),y:function(n,t){return po(n.getFullYear()%100,t,2)},Y:function(n,t){return po(n.getFullYear()%1e4,t,4)},Z:jo,"%":function(){return"%"}},el={a:vo,A:mo,b:_o,B:bo,c:wo,d:To,e:To,H:zo,I:zo,j:qo,L:Po,m:Lo,M:Ro,p:Uo,S:Do,U:xo,w:yo,W:Mo,x:So,X:ko,y:Ao,Y:Eo,Z:Co,"%":Ho},rl=/^\s*\d+/,ul=$o.map({am:0,pm:1});lo.utc=Fo;var il=Fo("%Y-%m-%dT%H:%M:%S.%LZ");lo.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Oo:il,Oo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Oo.toString=il.toString,Rs.second=co(function(n){return new Ds(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),Rs.seconds=Rs.second.range,Rs.seconds.utc=Rs.second.utc.range,Rs.minute=co(function(n){return new Ds(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),Rs.minutes=Rs.minute.range,Rs.minutes.utc=Rs.minute.utc.range,Rs.hour=co(function(n){var t=n.getTimezoneOffset()/60;return new Ds(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),Rs.hours=Rs.hour.range,Rs.hours.utc=Rs.hour.utc.range,Rs.month=co(function(n){return n=Rs.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),Rs.months=Rs.month.range,Rs.months.utc=Rs.month.utc.range;var ol=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],al=[[Rs.second,1],[Rs.second,5],[Rs.second,15],[Rs.second,30],[Rs.minute,1],[Rs.minute,5],[Rs.minute,15],[Rs.minute,30],[Rs.hour,1],[Rs.hour,3],[Rs.hour,6],[Rs.hour,12],[Rs.day,1],[Rs.day,2],[Rs.week,1],[Rs.month,1],[Rs.month,3],[Rs.year,1]],cl=[[lo("%Y"),Zt],[lo("%B"),function(n){return n.getMonth()}],[lo("%b %d"),function(n){return 1!=n.getDate()}],[lo("%a %d"),function(n){return n.getDay()&&1!=n.getDate()}],[lo("%I %p"),function(n){return n.getHours()}],[lo("%I:%M"),function(n){return n.getMinutes()}],[lo(":%S"),function(n){return n.getSeconds()}],[lo(".%L"),function(n){return n.getMilliseconds()}]],sl=Zo(cl);al.year=Rs.year,Rs.scale=function(){return Yo($o.scale.linear(),al,sl)};var ll={range:function(n,t,e){return $o.range(+n,+t,e).map(Io)}},fl=al.map(function(n){return[n[0].utc,n[1]]}),hl=[[Fo("%Y"),Zt],[Fo("%B"),function(n){return n.getUTCMonth()}],[Fo("%b %d"),function(n){return 1!=n.getUTCDate()}],[Fo("%a %d"),function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],[Fo("%I %p"),function(n){return n.getUTCHours()}],[Fo("%I:%M"),function(n){return n.getUTCMinutes()}],[Fo(":%S"),function(n){return n.getUTCSeconds()}],[Fo(".%L"),function(n){return n.getUTCMilliseconds()}]],gl=Zo(hl);return fl.year=Rs.year.utc,Rs.scale.utc=function(){return Yo($o.scale.linear(),fl,gl)},$o.text=dt(function(n){return n.responseText}),$o.json=function(n,t){return mt(n,"application/json",Vo,t)},$o.html=function(n,t){return mt(n,"text/html",Xo,t)},$o.xml=dt(function(n){return n.responseXML}),$o}();
(function() {
  function d3_class(ctor, properties) {
    try {
      for (var key in properties) {
        Object.defineProperty(ctor.prototype, key, {
          value: properties[key],
          enumerable: false
        });
      }
    } catch (e) {
      ctor.prototype = properties;
    }
  }
  function d3_arrayCopy(pseudoarray) {
    var i = -1, n = pseudoarray.length, array = [];
    while (++i < n) array.push(pseudoarray[i]);
    return array;
  }
  function d3_arraySlice(pseudoarray) {
    return Array.prototype.slice.call(pseudoarray);
  }
  function d3_Map() {}
  function d3_identity(d) {
    return d;
  }
  function d3_this() {
    return this;
  }
  function d3_true() {
    return true;
  }
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return arguments.length ? target : value;
    };
  }
  function d3_number(x) {
    return x != null && !isNaN(x);
  }
  function d3_zipLength(d) {
    return d.length;
  }
  function d3_splitter(d) {
    return d == null;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_dispatch() {}
  function d3_dispatch_event(dispatch) {
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    var listeners = [], listenerByName = new d3_Map;
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  function d3_format_precision(x, p) {
    return p - (x ? 1 + Math.floor(Math.log(x + Math.pow(10, 1 + Math.floor(Math.log(x) / Math.LN10) - p)) / Math.LN10) : 1);
  }
  function d3_format_typeDefault(x) {
    return x + "";
  }
  function d3_format_group(value) {
    var i = value.lastIndexOf("."), f = i >= 0 ? value.substring(i) : (i = value.length, ""), t = [];
    while (i > 0) t.push(value.substring(i -= 3, i + 3));
    return t.reverse().join(",") + f;
  }
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, Math.abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_identity(t) {
    return t;
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length < 1) {
      a = 1;
      s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(1 / a);
    return function(t) {
      return 1 + a * Math.pow(2, 10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  function d3_eventCancel() {
    d3.event.stopPropagation();
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch, i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_transformDegrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_transformDegrees : 0;
  }
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  function d3_interpolateByName(name) {
    return name == "transform" ? d3.interpolateTransform : d3.interpolate;
  }
  function d3_uninterpolateNumber(a, b) {
    b = b - (a = +a) ? 1 / (b - a) : 0;
    return function(x) {
      return (x - a) * b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = b - (a = +a) ? 1 / (b - a) : 0;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) * b));
    };
  }
  function d3_Color() {}
  function d3_rgb(r, g, b) {
    return new d3_Rgb(r, g, b);
  }
  function d3_Rgb(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, name;
    m1 = /([a-z]+)\((.*)\)/i.exec(format);
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }
       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (name = d3_rgb_names.get(format)) return rgb(name.r, name.g, name.b);
    if (format != null && format.charAt(0) === "#") {
      if (format.length === 4) {
        r = format.charAt(1);
        r += r;
        g = format.charAt(2);
        g += g;
        b = format.charAt(3);
        b += b;
      } else if (format.length === 7) {
        r = format.substring(1, 3);
        g = format.substring(3, 5);
        b = format.substring(5, 7);
      }
      r = parseInt(r, 16);
      g = parseInt(g, 16);
      b = parseInt(b, 16);
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      s = h = 0;
    }
    return d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  function d3_hsl(h, s, l) {
    return new d3_Hsl(h, s, l);
  }
  function d3_Hsl(h, s, l) {
    this.h = h;
    this.s = s;
    this.l = l;
  }
  function d3_hsl_rgb(h, s, l) {
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    var m1, m2;
    h = h % 360;
    if (h < 0) h += 360;
    s = s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    return d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  function d3_hcl(h, c, l) {
    return new d3_Hcl(h, c, l);
  }
  function d3_Hcl(h, c, l) {
    this.h = h;
    this.c = c;
    this.l = l;
  }
  function d3_hcl_lab(h, c, l) {
    return d3_lab(l, Math.cos(h *= Math.PI / 180) * c, Math.sin(h) * c);
  }
  function d3_lab(l, a, b) {
    return new d3_Lab(l, a, b);
  }
  function d3_Lab(l, a, b) {
    this.l = l;
    this.a = a;
    this.b = b;
  }
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return d3_hcl(Math.atan2(b, a) / Math.PI * 180, Math.sqrt(a * a + b * b), l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  function d3_selection(groups) {
    d3_arraySubclass(groups, d3_selectionPrototype);
    return groups;
  }
  function d3_selection_selector(selector) {
    return function() {
      return d3_select(selector, this);
    };
  }
  function d3_selection_selectorAll(selector) {
    return function() {
      return d3_selectAll(selector, this);
    };
  }
  function d3_selection_attr(name, value) {
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    name = d3.ns.qualify(name);
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classed(name, value) {
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    name = name.trim().split(/\s+/).map(d3_selection_classedName);
    var n = name.length;
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.className, cb = c.baseVal != null, cv = cb ? c.baseVal : c;
      if (value) {
        re.lastIndex = 0;
        if (!re.test(cv)) {
          cv = d3_collapse(cv + " " + name);
          if (cb) c.baseVal = cv; else node.className = cv;
        }
      } else if (cv) {
        cv = d3_collapse(cv.replace(re, " "));
        if (cb) c.baseVal = cv; else node.className = cv;
      }
    };
  }
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3.ascending;
    return function(a, b) {
      return comparator(a && a.__data__, b && b.__data__);
    };
  }
  function d3_selection_on(type, listener, capture) {
    function onRemove() {
      var wrapper = this[name];
      if (wrapper) {
        this.removeEventListener(type, wrapper, wrapper.$);
        delete this[name];
      }
    }
    function onAdd() {
      function wrapper(e) {
        var o = d3.event;
        d3.event = e;
        args[0] = node.__data__;
        try {
          listener.apply(node, args);
        } finally {
          d3.event = o;
        }
      }
      var node = this, args = arguments;
      onRemove.call(this);
      this.addEventListener(type, this[name] = wrapper, wrapper.$ = capture);
      wrapper._ = listener;
    }
    var name = "__on" + type, i = type.indexOf(".");
    if (i > 0) type = type.substring(0, i);
    return listener ? onAdd : onRemove;
  }
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  function d3_selection_enter(selection) {
    d3_arraySubclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  function d3_transition(groups, id, time) {
    d3_arraySubclass(groups, d3_transitionPrototype);
    var tweens = new d3_Map, event = d3.dispatch("start", "end"), ease = d3_transitionEase;
    groups.id = id;
    groups.time = time;
    groups.tween = function(name, tween) {
      if (arguments.length < 2) return tweens.get(name);
      if (tween == null) tweens.remove(name); else tweens.set(name, tween);
      return groups;
    };
    groups.ease = function(value) {
      if (!arguments.length) return ease;
      ease = typeof value === "function" ? value : d3.ease.apply(d3, arguments);
      return groups;
    };
    groups.each = function(type, listener) {
      if (arguments.length < 2) return d3_transition_each.call(groups, type);
      event.on(type, listener);
      return groups;
    };
    d3.timer(function(elapsed) {
      return d3_selection_each(groups, function(node, i, j) {
        function start(elapsed) {
          if (lock.active > id) return stop();
          lock.active = id;
          tweens.forEach(function(key, value) {
            if (value = value.call(node, d, i)) {
              tweened.push(value);
            }
          });
          event.start.call(node, d, i);
          if (!tick(elapsed)) d3.timer(tick, 0, time);
          return 1;
        }
        function tick(elapsed) {
          if (lock.active !== id) return stop();
          var t = (elapsed - delay) / duration, e = ease(t), n = tweened.length;
          while (n > 0) {
            tweened[--n].call(node, e);
          }
          if (t >= 1) {
            stop();
            d3_transitionId = id;
            event.end.call(node, d, i);
            d3_transitionId = 0;
            return 1;
          }
        }
        function stop() {
          if (!--lock.count) delete node.__transition__;
          return 1;
        }
        var tweened = [], delay = node.delay, duration = node.duration, lock = (node = node.node).__transition__ || (node.__transition__ = {
          active: 0,
          count: 0
        }), d = node.__data__;
        ++lock.count;
        delay <= elapsed ? start(elapsed) : d3.timer(start, delay, time);
      });
    }, 0, time);
    return groups;
  }
  function d3_transition_each(callback) {
    var id = d3_transitionId, ease = d3_transitionEase, delay = d3_transitionDelay, duration = d3_transitionDuration;
    d3_transitionId = this.id;
    d3_transitionEase = this.ease();
    d3_selection_each(this, function(node, i, j) {
      d3_transitionDelay = node.delay;
      d3_transitionDuration = node.duration;
      callback.call(node = node.node, node.__data__, i, j);
    });
    d3_transitionId = id;
    d3_transitionEase = ease;
    d3_transitionDelay = delay;
    d3_transitionDuration = duration;
    return this;
  }
  function d3_tweenNull(d, i, a) {
    return a != "" && d3_tweenRemove;
  }
  function d3_tweenByName(b, name) {
    return d3.tween(b, d3_interpolateByName(name));
  }
  function d3_timer_step() {
    var elapsed, now = Date.now(), t1 = d3_timer_queue;
    while (t1) {
      elapsed = now - t1.then;
      if (elapsed >= t1.delay) t1.flush = t1.callback(elapsed);
      t1 = t1.next;
    }
    var delay = d3_timer_flush() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  function d3_timer_flush() {
    var t0 = null, t1 = d3_timer_queue, then = Infinity;
    while (t1) {
      if (t1.flush) {
        delete d3_timer_byId[t1.callback.id];
        t1 = t0 ? t0.next = t1.next : d3_timer_queue = t1.next;
      } else {
        then = Math.min(then, t1.then + t1.delay);
        t1 = (t0 = t1).next;
      }
    }
    return then;
  }
  function d3_mousePoint(container, e) {
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0 && (window.scrollX || window.scrollY)) {
        svg = d3.select(document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
        var ctm = svg[0][0].getScreenCTM();
        d3_mouse_bug44083 = !(ctm.f || ctm.e);
        svg.remove();
      }
      if (d3_mouse_bug44083) {
        point.x = e.pageX;
        point.y = e.pageY;
      } else {
        point.x = e.clientX;
        point.y = e.clientY;
      }
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  function d3_noop() {}
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    if (nice = nice(x1 - x0)) {
      domain[i0] = nice.floor(x0);
      domain[i1] = nice.ceil(x1);
    }
    return domain;
  }
  function d3_scale_niceDefault() {
    return Math;
  }
  function d3_scale_linear(domain, range, interpolate, clamp) {
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3.interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    var output, input;
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3.interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m) {
      return d3_scale_linearTickFormat(domain, m);
    };
    scale.nice = function() {
      d3_scale_nice(domain, d3_scale_linearNice);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(dx) {
    dx = Math.pow(10, Math.round(Math.log(dx) / Math.LN10) - 1);
    return dx && {
      floor: function(x) {
        return Math.floor(x / dx) * dx;
      },
      ceil: function(x) {
        return Math.ceil(x / dx) * dx;
      }
    };
  }
  function d3_scale_linearTickRange(domain, m) {
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m) {
    return d3.format(",." + Math.max(0, -Math.floor(Math.log(d3_scale_linearTickRange(domain, m)[2]) / Math.LN10 + .01)) + "f");
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  function d3_scale_log(linear, log) {
    function scale(x) {
      return linear(log(x));
    }
    var pow = log.pow;
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(pow);
      log = x[0] < 0 ? d3_scale_logn : d3_scale_logp;
      pow = log.pow;
      linear.domain(x.map(log));
      return scale;
    };
    scale.nice = function() {
      linear.domain(d3_scale_nice(linear.domain(), d3_scale_niceDefault));
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(linear.domain()), ticks = [];
      if (extent.every(isFinite)) {
        var i = Math.floor(extent[0]), j = Math.ceil(extent[1]), u = pow(extent[0]), v = pow(extent[1]);
        if (log === d3_scale_logn) {
          ticks.push(pow(i));
          for (; i++ < j; ) for (var k = 9; k > 0; k--) ticks.push(pow(i) * k);
        } else {
          for (; i < j; i++) for (var k = 1; k < 10; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (arguments.length < 2) format = d3_scale_logFormat;
      if (arguments.length < 1) return format;
      var k = Math.max(.1, n / scale.ticks().length), f = log === d3_scale_logn ? (e = -1e-12, Math.floor) : (e = 1e-12, Math.ceil), e;
      return function(d) {
        return d / pow(f(log(d) + e)) <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), log);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_logp(x) {
    return Math.log(x < 0 ? 0 : x) / Math.LN10;
  }
  function d3_scale_logn(x) {
    return -Math.log(x > 0 ? 0 : -x) / Math.LN10;
  }
  function d3_scale_pow(linear, exponent) {
    function scale(x) {
      return linear(powp(x));
    }
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(powb);
      linear.domain(x.map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(scale.domain(), m);
    };
    scale.tickFormat = function(m) {
      return d3_scale_linearTickFormat(scale.domain(), m);
    };
    scale.nice = function() {
      return scale.domain(d3_scale_nice(scale.domain(), d3_scale_linearNice));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      var domain = scale.domain();
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      return scale.domain(domain);
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  function d3_scale_ordinal(domain, ranger) {
    function scale(x) {
      return range[((index.get(x) || index.set(x, domain.push(x))) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    var index, range, rangeBand;
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map;
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = (stop - start) / (Math.max(1, domain.length - 1) + padding);
      range = steps(domain.length < 2 ? (start + stop) / 2 : start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding)), error = stop - start - (domain.length - padding) * step;
      range = steps(start + Math.round(error / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  function d3_scale_quantile(domain, range) {
    function rescale() {
      var k = 0, n = domain.length, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (isNaN(x = +x)) return NaN;
      return range[d3.bisect(thresholds, x)];
    }
    var thresholds;
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.filter(function(d) {
        return !isNaN(d);
      }).sort(d3.ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  function d3_scale_quantize(x0, x1, range) {
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    var kx, i;
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m) {
      return d3_scale_linearTickFormat(domain, m);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_line(projection) {
    function line(data) {
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    var x = d3_svg_lineX, y = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  function d3_svg_lineX(d) {
    return d[0];
  }
  function d3_svg_lineY(d) {
    return d[1];
  }
  function d3_svg_lineLinear(points) {
    return points.join("L");
  }
  function d3_svg_lineLinearClosed(points) {
    return d3_svg_lineLinear(points) + "Z";
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, points.length - 1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension, closed) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0 ];
    d3_svg_lineBasisBezier(path, px, py);
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    i = -1;
    while (++i < 2) {
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (Math.abs(d) < 1e-6) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] + d3_svg_arcOffset;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    function area(data) {
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    var x0 = d3_svg_lineX, x1 = d3_svg_lineX, y0 = 0, y1 = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  function d3_svg_chordSource(d) {
    return d.source;
  }
  function d3_svg_chordTarget(d) {
    return d.target;
  }
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  function d3_svg_chordStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_chordEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] + d3_svg_arcOffset;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / Math.PI);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  function d3_svg_axisX(selection, x) {
    selection.attr("transform", function(d) {
      return "translate(" + x(d) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y) {
    selection.attr("transform", function(d) {
      return "translate(0," + y(d) + ")";
    });
  }
  function d3_svg_axisSubdivide(scale, ticks, m) {
    subticks = [];
    if (m && ticks.length > 1) {
      var extent = d3_scaleExtent(scale.domain()), subticks, i = -1, n = ticks.length, d = (ticks[1] - ticks[0]) / ++m, j, v;
      while (++i < n) {
        for (j = m; --j > 0; ) {
          if ((v = +ticks[i] - j * d) >= extent[0]) {
            subticks.push(v);
          }
        }
      }
      for (--i, j = 0; ++j < m && (v = +ticks[i] + j * d) < extent[1]; ) {
        subticks.push(v);
      }
    }
    return subticks;
  }
  function d3_behavior_zoomDelta() {
    if (!d3_behavior_zoomDiv) {
      d3_behavior_zoomDiv = d3.select("body").append("div").style("visibility", "hidden").style("top", 0).style("height", 0).style("width", 0).style("overflow-y", "scroll").append("div").style("height", "2000px").node().parentNode;
    }
    var e = d3.event, delta;
    try {
      d3_behavior_zoomDiv.scrollTop = 1e3;
      d3_behavior_zoomDiv.dispatchEvent(e);
      delta = 1e3 - d3_behavior_zoomDiv.scrollTop;
    } catch (error) {
      delta = e.wheelDelta || -e.detail * 5;
    }
    return delta;
  }
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= 1;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= 3;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  function d3_layout_forceLinkDistance(link) {
    return 20;
  }
  function d3_layout_forceLinkStrength(link) {
    return 1;
  }
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (; i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.links = d3_layout_hierarchyLinks;
    object.nodes = function(d) {
      d3_layout_hierarchyInline = true;
      return (object.nodes = object)(d);
    };
    return object;
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return dr * dr - dx * dx - dy * dy > .001;
  }
  function d3_layout_packSiblings(node) {
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(node) {
    var children = node.children;
    return children && children.length ? children[0] : node._tree.thread;
  }
  function d3_layout_treeRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? children[n - 1] : node._tree.thread;
  }
  function d3_layout_treeSearch(node, compare) {
    var children = node.children;
    if (children && (n = children.length)) {
      var child, n, i = -1;
      while (++i < n) {
        if (compare(child = d3_layout_treeSearch(children[i], compare), node) > 0) {
          node = child;
        }
      }
    }
    return node;
  }
  function d3_layout_treeRightmost(a, b) {
    return a.x - b.x;
  }
  function d3_layout_treeLeftmost(a, b) {
    return b.x - a.x;
  }
  function d3_layout_treeDeepest(a, b) {
    return a.depth - b.depth;
  }
  function d3_layout_treeVisitAfter(node, callback) {
    function visit(node, previousSibling) {
      var children = node.children;
      if (children && (n = children.length)) {
        var child, previousChild = null, i = -1, n;
        while (++i < n) {
          child = children[i];
          visit(child, previousChild);
          previousChild = child;
        }
      }
      callback(node, previousSibling);
    }
    visit(node, null);
  }
  function d3_layout_treeShift(node) {
    var shift = 0, change = 0, children = node.children, i = children.length, child;
    while (--i >= 0) {
      child = children[i]._tree;
      child.prelim += shift;
      child.mod += shift;
      shift += child.shift + (change += child.change);
    }
  }
  function d3_layout_treeMove(ancestor, node, shift) {
    ancestor = ancestor._tree;
    node = node._tree;
    var change = shift / (node.number - ancestor.number);
    ancestor.change += change;
    node.change -= change;
    node.shift += shift;
    node.prelim += shift;
    node.mod += shift;
  }
  function d3_layout_treeAncestor(vim, node, ancestor) {
    return vim._tree.ancestor.parent == node.parent ? vim._tree.ancestor : ancestor;
  }
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  function d3_dsv(delimiter, mimeType) {
    function dsv(url, callback) {
      d3.text(url, mimeType, function(text) {
        callback(text && dsv.parse(text));
      });
    }
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    var reParse = new RegExp("\r\n|[" + delimiter + "\r\n]", "g"), reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    dsv.parse = function(text) {
      var header;
      return dsv.parseRows(text, function(row, i) {
        if (i) {
          var o = {}, j = -1, m = header.length;
          while (++j < m) o[header[j]] = row[j];
          return o;
        } else {
          header = row;
          return null;
        }
      });
    };
    dsv.parseRows = function(text, f) {
      function token() {
        if (reParse.lastIndex >= text.length) return EOF;
        if (eol) {
          eol = false;
          return EOL;
        }
        var j = reParse.lastIndex;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < text.length) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              i++;
            }
          }
          reParse.lastIndex = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) reParse.lastIndex++;
          } else if (c === 10) {
            eol = true;
          }
          return text.substring(j + 1, i).replace(/""/g, '"');
        }
        var m = reParse.exec(text);
        if (m) {
          eol = m[0].charCodeAt(0) !== delimiterCode;
          return text.substring(j, m.index);
        }
        reParse.lastIndex = text.length;
        return text.substring(j);
      }
      var EOL = {}, EOF = {}, rows = [], n = 0, t, eol;
      reParse.lastIndex = 0;
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && !(a = f(a, n++))) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    return dsv;
  }
  function d3_geo_type(types, defaultValue) {
    return function(object) {
      return object && types.hasOwnProperty(object.type) ? types[object.type](object) : defaultValue;
    };
  }
  function d3_path_circle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + +2 * radius + "z";
  }
  function d3_geo_bounds(o, f) {
    if (d3_geo_boundsTypes.hasOwnProperty(o.type)) d3_geo_boundsTypes[o.type](o, f);
  }
  function d3_geo_boundsFeature(o, f) {
    d3_geo_bounds(o.geometry, f);
  }
  function d3_geo_boundsFeatureCollection(o, f) {
    for (var a = o.features, i = 0, n = a.length; i < n; i++) {
      d3_geo_bounds(a[i].geometry, f);
    }
  }
  function d3_geo_boundsGeometryCollection(o, f) {
    for (var a = o.geometries, i = 0, n = a.length; i < n; i++) {
      d3_geo_bounds(a[i], f);
    }
  }
  function d3_geo_boundsLineString(o, f) {
    for (var a = o.coordinates, i = 0, n = a.length; i < n; i++) {
      f.apply(null, a[i]);
    }
  }
  function d3_geo_boundsMultiLineString(o, f) {
    for (var a = o.coordinates, i = 0, n = a.length; i < n; i++) {
      for (var b = a[i], j = 0, m = b.length; j < m; j++) {
        f.apply(null, b[j]);
      }
    }
  }
  function d3_geo_boundsMultiPolygon(o, f) {
    for (var a = o.coordinates, i = 0, n = a.length; i < n; i++) {
      for (var b = a[i][0], j = 0, m = b.length; j < m; j++) {
        f.apply(null, b[j]);
      }
    }
  }
  function d3_geo_boundsPoint(o, f) {
    f.apply(null, o.coordinates);
  }
  function d3_geo_boundsPolygon(o, f) {
    for (var a = o.coordinates[0], i = 0, n = a.length; i < n; i++) {
      f.apply(null, a[i]);
    }
  }
  function d3_geo_greatArcSource(d) {
    return d.source;
  }
  function d3_geo_greatArcTarget(d) {
    return d.target;
  }
  function d3_geo_greatArcInterpolator() {
    function interpolate(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) / d3_geo_radians, Math.atan2(z, Math.sqrt(x * x + y * y)) / d3_geo_radians ];
    }
    var x0, y0, cy0, sy0, kx0, ky0, x1, y1, cy1, sy1, kx1, ky1, d, k;
    interpolate.distance = function() {
      if (d == null) k = 1 / Math.sin(d = Math.acos(Math.max(-1, Math.min(1, sy0 * sy1 + cy0 * cy1 * Math.cos(x1 - x0)))));
      return d;
    };
    interpolate.source = function(_) {
      var cx0 = Math.cos(x0 = _[0] * d3_geo_radians), sx0 = Math.sin(x0);
      cy0 = Math.cos(y0 = _[1] * d3_geo_radians);
      sy0 = Math.sin(y0);
      kx0 = cy0 * cx0;
      ky0 = cy0 * sx0;
      d = null;
      return interpolate;
    };
    interpolate.target = function(_) {
      var cx1 = Math.cos(x1 = _[0] * d3_geo_radians), sx1 = Math.sin(x1);
      cy1 = Math.cos(y1 = _[1] * d3_geo_radians);
      sy1 = Math.sin(y1);
      kx1 = cy1 * cx1;
      ky1 = cy1 * sx1;
      d = null;
      return interpolate;
    };
    return interpolate;
  }
  function d3_geo_greatArcInterpolate(a, b) {
    var i = d3_geo_greatArcInterpolator().source(a).target(b);
    i.distance();
    return i;
  }
  function d3_geom_contourStart(grid) {
    var x = 0, y = 0;
    while (true) {
      if (grid(x, y)) {
        return [ x, y ];
      }
      if (x === 0) {
        x = y + 1;
        y = 0;
      } else {
        x = x - 1;
        y = y + 1;
      }
    }
  }
  function d3_geom_hullCCW(i1, i2, i3, v) {
    var t, a, b, c, d, e, f;
    t = v[i1];
    a = t[0];
    b = t[1];
    t = v[i2];
    c = t[0];
    d = t[1];
    t = v[i3];
    e = t[0];
    f = t[1];
    return (f - b) * (c - a) - (d - b) * (e - a) > 0;
  }
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x2 = d[0], x3 = a[0], x4 = b[0], y1 = c[1], y2 = d[1], y3 = a[1], y4 = b[1], x13 = x1 - x3, x21 = x2 - x1, x43 = x4 - x3, y13 = y1 - y3, y21 = y2 - y1, y43 = y4 - y3, ua = (x43 * y13 - y43 * x13) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_voronoi_tessellate(vertices, callback) {
    var Sites = {
      list: vertices.map(function(v, i) {
        return {
          index: i,
          x: v[0],
          y: v[1]
        };
      }).sort(function(a, b) {
        return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0;
      }),
      bottomSite: null
    };
    var EdgeList = {
      list: [],
      leftEnd: null,
      rightEnd: null,
      init: function() {
        EdgeList.leftEnd = EdgeList.createHalfEdge(null, "l");
        EdgeList.rightEnd = EdgeList.createHalfEdge(null, "l");
        EdgeList.leftEnd.r = EdgeList.rightEnd;
        EdgeList.rightEnd.l = EdgeList.leftEnd;
        EdgeList.list.unshift(EdgeList.leftEnd, EdgeList.rightEnd);
      },
      createHalfEdge: function(edge, side) {
        return {
          edge: edge,
          side: side,
          vertex: null,
          l: null,
          r: null
        };
      },
      insert: function(lb, he) {
        he.l = lb;
        he.r = lb.r;
        lb.r.l = he;
        lb.r = he;
      },
      leftBound: function(p) {
        var he = EdgeList.leftEnd;
        do {
          he = he.r;
        } while (he != EdgeList.rightEnd && Geom.rightOf(he, p));
        he = he.l;
        return he;
      },
      del: function(he) {
        he.l.r = he.r;
        he.r.l = he.l;
        he.edge = null;
      },
      right: function(he) {
        return he.r;
      },
      left: function(he) {
        return he.l;
      },
      leftRegion: function(he) {
        return he.edge == null ? Sites.bottomSite : he.edge.region[he.side];
      },
      rightRegion: function(he) {
        return he.edge == null ? Sites.bottomSite : he.edge.region[d3_voronoi_opposite[he.side]];
      }
    };
    var Geom = {
      bisect: function(s1, s2) {
        var newEdge = {
          region: {
            l: s1,
            r: s2
          },
          ep: {
            l: null,
            r: null
          }
        };
        var dx = s2.x - s1.x, dy = s2.y - s1.y, adx = dx > 0 ? dx : -dx, ady = dy > 0 ? dy : -dy;
        newEdge.c = s1.x * dx + s1.y * dy + (dx * dx + dy * dy) * .5;
        if (adx > ady) {
          newEdge.a = 1;
          newEdge.b = dy / dx;
          newEdge.c /= dx;
        } else {
          newEdge.b = 1;
          newEdge.a = dx / dy;
          newEdge.c /= dy;
        }
        return newEdge;
      },
      intersect: function(el1, el2) {
        var e1 = el1.edge, e2 = el2.edge;
        if (!e1 || !e2 || e1.region.r == e2.region.r) {
          return null;
        }
        var d = e1.a * e2.b - e1.b * e2.a;
        if (Math.abs(d) < 1e-10) {
          return null;
        }
        var xint = (e1.c * e2.b - e2.c * e1.b) / d, yint = (e2.c * e1.a - e1.c * e2.a) / d, e1r = e1.region.r, e2r = e2.region.r, el, e;
        if (e1r.y < e2r.y || e1r.y == e2r.y && e1r.x < e2r.x) {
          el = el1;
          e = e1;
        } else {
          el = el2;
          e = e2;
        }
        var rightOfSite = xint >= e.region.r.x;
        if (rightOfSite && el.side === "l" || !rightOfSite && el.side === "r") {
          return null;
        }
        return {
          x: xint,
          y: yint
        };
      },
      rightOf: function(he, p) {
        var e = he.edge, topsite = e.region.r, rightOfSite = p.x > topsite.x;
        if (rightOfSite && he.side === "l") {
          return 1;
        }
        if (!rightOfSite && he.side === "r") {
          return 0;
        }
        if (e.a === 1) {
          var dyp = p.y - topsite.y, dxp = p.x - topsite.x, fast = 0, above = 0;
          if (!rightOfSite && e.b < 0 || rightOfSite && e.b >= 0) {
            above = fast = dyp >= e.b * dxp;
          } else {
            above = p.x + p.y * e.b > e.c;
            if (e.b < 0) {
              above = !above;
            }
            if (!above) {
              fast = 1;
            }
          }
          if (!fast) {
            var dxs = topsite.x - e.region.l.x;
            above = e.b * (dxp * dxp - dyp * dyp) < dxs * dyp * (1 + 2 * dxp / dxs + e.b * e.b);
            if (e.b < 0) {
              above = !above;
            }
          }
        } else {
          var yl = e.c - e.a * p.x, t1 = p.y - yl, t2 = p.x - topsite.x, t3 = yl - topsite.y;
          above = t1 * t1 > t2 * t2 + t3 * t3;
        }
        return he.side === "l" ? above : !above;
      },
      endPoint: function(edge, side, site) {
        edge.ep[side] = site;
        if (!edge.ep[d3_voronoi_opposite[side]]) return;
        callback(edge);
      },
      distance: function(s, t) {
        var dx = s.x - t.x, dy = s.y - t.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
    };
    var EventQueue = {
      list: [],
      insert: function(he, site, offset) {
        he.vertex = site;
        he.ystar = site.y + offset;
        for (var i = 0, list = EventQueue.list, l = list.length; i < l; i++) {
          var next = list[i];
          if (he.ystar > next.ystar || he.ystar == next.ystar && site.x > next.vertex.x) {
            continue;
          } else {
            break;
          }
        }
        list.splice(i, 0, he);
      },
      del: function(he) {
        for (var i = 0, ls = EventQueue.list, l = ls.length; i < l && ls[i] != he; ++i) {}
        ls.splice(i, 1);
      },
      empty: function() {
        return EventQueue.list.length === 0;
      },
      nextEvent: function(he) {
        for (var i = 0, ls = EventQueue.list, l = ls.length; i < l; ++i) {
          if (ls[i] == he) return ls[i + 1];
        }
        return null;
      },
      min: function() {
        var elem = EventQueue.list[0];
        return {
          x: elem.vertex.x,
          y: elem.ystar
        };
      },
      extractMin: function() {
        return EventQueue.list.shift();
      }
    };
    EdgeList.init();
    Sites.bottomSite = Sites.list.shift();
    var newSite = Sites.list.shift(), newIntStar;
    var lbnd, rbnd, llbnd, rrbnd, bisector;
    var bot, top, temp, p, v;
    var e, pm;
    while (true) {
      if (!EventQueue.empty()) {
        newIntStar = EventQueue.min();
      }
      if (newSite && (EventQueue.empty() || newSite.y < newIntStar.y || newSite.y == newIntStar.y && newSite.x < newIntStar.x)) {
        lbnd = EdgeList.leftBound(newSite);
        rbnd = EdgeList.right(lbnd);
        bot = EdgeList.rightRegion(lbnd);
        e = Geom.bisect(bot, newSite);
        bisector = EdgeList.createHalfEdge(e, "l");
        EdgeList.insert(lbnd, bisector);
        p = Geom.intersect(lbnd, bisector);
        if (p) {
          EventQueue.del(lbnd);
          EventQueue.insert(lbnd, p, Geom.distance(p, newSite));
        }
        lbnd = bisector;
        bisector = EdgeList.createHalfEdge(e, "r");
        EdgeList.insert(lbnd, bisector);
        p = Geom.intersect(bisector, rbnd);
        if (p) {
          EventQueue.insert(bisector, p, Geom.distance(p, newSite));
        }
        newSite = Sites.list.shift();
      } else if (!EventQueue.empty()) {
        lbnd = EventQueue.extractMin();
        llbnd = EdgeList.left(lbnd);
        rbnd = EdgeList.right(lbnd);
        rrbnd = EdgeList.right(rbnd);
        bot = EdgeList.leftRegion(lbnd);
        top = EdgeList.rightRegion(rbnd);
        v = lbnd.vertex;
        Geom.endPoint(lbnd.edge, lbnd.side, v);
        Geom.endPoint(rbnd.edge, rbnd.side, v);
        EdgeList.del(lbnd);
        EventQueue.del(rbnd);
        EdgeList.del(rbnd);
        pm = "l";
        if (bot.y > top.y) {
          temp = bot;
          bot = top;
          top = temp;
          pm = "r";
        }
        e = Geom.bisect(bot, top);
        bisector = EdgeList.createHalfEdge(e, pm);
        EdgeList.insert(llbnd, bisector);
        Geom.endPoint(e, d3_voronoi_opposite[pm], v);
        p = Geom.intersect(llbnd, bisector);
        if (p) {
          EventQueue.del(llbnd);
          EventQueue.insert(llbnd, p, Geom.distance(p, bot));
        }
        p = Geom.intersect(bisector, rrbnd);
        if (p) {
          EventQueue.insert(bisector, p, Geom.distance(p, bot));
        }
      } else {
        break;
      }
    }
    for (lbnd = EdgeList.right(EdgeList.leftEnd); lbnd != EdgeList.rightEnd; lbnd = EdgeList.right(lbnd)) {
      callback(lbnd.edge);
    }
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreePoint(p) {
    return {
      x: p[0],
      y: p[1]
    };
  }
  function d3_time_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  function d3_time_formatAbbreviate(name) {
    return name.substring(0, 3);
  }
  function d3_time_parse(date, template, string, j) {
    var c, p, i = 0, n = template.length, m = string.length;
    while (i < n) {
      if (j >= m) return -1;
      c = template.charCodeAt(i++);
      if (c == 37) {
        p = d3_time_parsers[template.charAt(i++)];
        if (!p || (j = p(date, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map, i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayAbbrev(date, string, i) {
    d3_time_dayAbbrevRe.lastIndex = 0;
    var n = d3_time_dayAbbrevRe.exec(string.substring(i));
    return n ? i += n[0].length : -1;
  }
  function d3_time_parseWeekday(date, string, i) {
    d3_time_dayRe.lastIndex = 0;
    var n = d3_time_dayRe.exec(string.substring(i));
    return n ? i += n[0].length : -1;
  }
  function d3_time_parseMonthAbbrev(date, string, i) {
    d3_time_monthAbbrevRe.lastIndex = 0;
    var n = d3_time_monthAbbrevRe.exec(string.substring(i));
    return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i += n[0].length) : -1;
  }
  function d3_time_parseMonth(date, string, i) {
    d3_time_monthRe.lastIndex = 0;
    var n = d3_time_monthRe.exec(string.substring(i));
    return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i += n[0].length) : -1;
  }
  function d3_time_parseLocaleFull(date, string, i) {
    return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
  }
  function d3_time_parseLocaleDate(date, string, i) {
    return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
  }
  function d3_time_parseLocaleTime(date, string, i) {
    return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 4));
    return n ? (date.y = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i += n[0].length) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.m = n[0] - 1, i += n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.d = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.H = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.M = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.S = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 3));
    return n ? (date.L = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseAmPm(date, string, i) {
    var n = d3_time_amPmLookup.get(string.substring(i, i += 2).toLowerCase());
    return n == null ? -1 : (date.p = n, i);
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = ~~(Math.abs(z) / 60), zm = Math.abs(z) % 60;
    return zs + d3_time_zfill2(zh) + d3_time_zfill2(zm);
  }
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_time(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_time(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_time = d3_time_utc;
        var utc = new d3_time_utc;
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_time = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_time = d3_time_utc;
        var utc = new d3_time_utc;
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_time = Date;
      }
    };
  }
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_nice(scale.domain(), function() {
        return m;
      }));
    };
    scale.ticks = function(m, k) {
      var extent = d3_time_scaleExtent(scale.domain());
      if (typeof m !== "function") {
        var span = extent[1] - extent[0], target = span / m, i = d3.bisect(d3_time_scaleSteps, target);
        if (i == d3_time_scaleSteps.length) return methods.year(extent, m);
        if (!i) return linear.ticks(m).map(d3_time_scaleDate);
        if (Math.log(target / d3_time_scaleSteps[i - 1]) < Math.log(d3_time_scaleSteps[i] / target)) --i;
        m = methods[i];
        k = m[1];
        m = m[0].range;
      }
      return m(extent[0], new Date(+extent[1] + 1), k);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_time_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  function d3_time_scaleFormat(formats) {
    return function(date) {
      var i = formats.length - 1, f = formats[i];
      while (!f[1](date)) f = formats[--i];
      return f[0](date);
    };
  }
  function d3_time_scaleSetYear(y) {
    var d = new Date(y, 0, 1);
    d.setFullYear(y);
    return d;
  }
  function d3_time_scaleGetYear(d) {
    var y = d.getFullYear(), d0 = d3_time_scaleSetYear(y), d1 = d3_time_scaleSetYear(y + 1);
    return y + (d - d0) / (d1 - d0);
  }
  function d3_time_scaleUTCSetYear(y) {
    var d = new Date(Date.UTC(y, 0, 1));
    d.setUTCFullYear(y);
    return d;
  }
  function d3_time_scaleUTCGetYear(d) {
    var y = d.getUTCFullYear(), d0 = d3_time_scaleUTCSetYear(y), d1 = d3_time_scaleUTCSetYear(y + 1);
    return y + (d - d0) / (d1 - d0);
  }
  if (!Date.now) Date.now = function() {
    return +(new Date);
  };
  try {
    document.createElement("div").style.setProperty("opacity", 0, "");
  } catch (error) {
    var d3_style_prototype = CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
    d3_style_prototype.setProperty = function(name, value, priority) {
      d3_style_setProperty.call(this, name, value + "", priority);
    };
  }
  d3 = {
    version: "2.10.3"
  };
  var d3_array = d3_arraySlice;
  try {
    d3_array(document.documentElement.childNodes)[0].nodeType;
  } catch (e) {
    d3_array = d3_arrayCopy;
  }
  var d3_arraySubclass = [].__proto__ ? function(array, prototype) {
    array.__proto__ = prototype;
  } : function(array, prototype) {
    for (var property in prototype) array[property] = prototype[property];
  };
  d3.map = function(object) {
    var map = new d3_Map;
    for (var key in object) map.set(key, object[key]);
    return map;
  };
  d3_class(d3_Map, {
    has: function(key) {
      return d3_map_prefix + key in this;
    },
    get: function(key) {
      return this[d3_map_prefix + key];
    },
    set: function(key, value) {
      return this[d3_map_prefix + key] = value;
    },
    remove: function(key) {
      key = d3_map_prefix + key;
      return key in this && delete this[key];
    },
    keys: function() {
      var keys = [];
      this.forEach(function(key) {
        keys.push(key);
      });
      return keys;
    },
    values: function() {
      var values = [];
      this.forEach(function(key, value) {
        values.push(value);
      });
      return values;
    },
    entries: function() {
      var entries = [];
      this.forEach(function(key, value) {
        entries.push({
          key: key,
          value: value
        });
      });
      return entries;
    },
    forEach: function(f) {
      for (var key in this) {
        if (key.charCodeAt(0) === d3_map_prefixCode) {
          f.call(this, key.substring(1), this[key]);
        }
      }
    }
  });
  var d3_map_prefix = "\0", d3_map_prefixCode = d3_map_prefix.charCodeAt(0);
  d3.functor = d3_functor;
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  d3.ascending = function(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  };
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.mean = function(array, f) {
    var n = array.length, a, m = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) if (d3_number(a = array[i])) m += (a - m) / ++j;
    } else {
      while (++i < n) if (d3_number(a = f.call(array, array[i], i))) m += (a - m) / ++j;
    }
    return j ? m : undefined;
  };
  d3.median = function(array, f) {
    if (arguments.length > 1) array = array.map(f);
    array = array.filter(d3_number);
    return array.length ? d3.quantile(array.sort(d3.ascending), .5) : undefined;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n && ((a = array[i]) == null || a != a)) a = undefined;
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n && ((a = f.call(array, array[i], i)) == null || a != a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n && ((a = array[i]) == null || a != a)) a = undefined;
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n && ((a = f.call(array, array[i], i)) == null || a != a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n && ((a = c = array[i]) == null || a != a)) a = c = undefined;
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n && ((a = c = f.call(array, array[i], i)) == null || a != a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  d3.random = {
    normal: function(Âµ, Ïƒ) {
      var n = arguments.length;
      if (n < 2) Ïƒ = 1;
      if (n < 1) Âµ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return Âµ + Ïƒ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function(Âµ, Ïƒ) {
      var n = arguments.length;
      if (n < 2) Ïƒ = 1;
      if (n < 1) Âµ = 0;
      var random = d3.random.normal();
      return function() {
        return Math.exp(Âµ + Ïƒ * random());
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s / m;
      };
    }
  };
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (!isNaN(a = +array[i])) s += a;
    } else {
      while (++i < n) if (!isNaN(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.transpose = function(matrix) {
    return d3.zip.apply(d3, matrix);
  };
  d3.zip = function() {
    if (!(n = arguments.length)) return [];
    for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m; ) {
      for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n; ) {
        zip[j] = arguments[j][i];
      }
    }
    return zips;
  };
  d3.bisector = function(f) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (f.call(a, a[mid], mid) < x) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (x < f.call(a, a[mid], mid)) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  };
  var d3_bisector = d3.bisector(function(d) {
    return d;
  });
  d3.bisectLeft = d3_bisector.left;
  d3.bisect = d3.bisectRight = d3_bisector.right;
  d3.first = function(array, f) {
    var i = 0, n = array.length, a = array[0], b;
    if (arguments.length === 1) f = d3.ascending;
    while (++i < n) {
      if (f.call(array, a, b = array[i]) > 0) {
        a = b;
      }
    }
    return a;
  };
  d3.last = function(array, f) {
    var i = 0, n = array.length, a = array[0], b;
    if (arguments.length === 1) f = d3.ascending;
    while (++i < n) {
      if (f.call(array, a, b = array[i]) <= 0) {
        a = b;
      }
    }
    return a;
  };
  d3.nest = function() {
    function map(array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, valuesByKey = new d3_Map, values, o = {};
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      valuesByKey.forEach(function(keyValue, values) {
        o[keyValue] = map(values, depth);
      });
      return o;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var a = [], sortKey = sortKeys[depth++], key;
      for (key in map) {
        a.push({
          key: key,
          values: entries(map[key], depth)
        });
      }
      if (sortKey) a.sort(function(a, b) {
        return sortKey(a.key, b.key);
      });
      return a;
    }
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    nest.map = function(array) {
      return map(array, 0);
    };
    nest.entries = function(array) {
      return entries(map(array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.permute = function(array, indexes) {
    var permutes = [], i = -1, n = indexes.length;
    while (++i < n) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.merge = function(arrays) {
    return Array.prototype.concat.apply([], arrays);
  };
  d3.split = function(array, f) {
    var arrays = [], values = [], value, i = -1, n = array.length;
    if (arguments.length < 2) f = d3_splitter;
    while (++i < n) {
      if (f.call(values, value = array[i], i)) {
        values = [];
      } else {
        if (!values.length) arrays.push(values);
        values.push(value);
      }
    }
    return arrays;
  };
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(Math.abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  d3.xhr = function(url, mime, callback) {
    var req = new XMLHttpRequest;
    if (arguments.length < 3) callback = mime, mime = null; else if (mime && req.overrideMimeType) req.overrideMimeType(mime);
    req.open("GET", url, true);
    if (mime) req.setRequestHeader("Accept", mime);
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        var s = req.status;
        callback(!s && req.response || s >= 200 && s < 300 || s === 304 ? req : null);
      }
    };
    req.send(null);
  };
  d3.text = function(url, mime, callback) {
    function ready(req) {
      callback(req && req.responseText);
    }
    if (arguments.length < 3) {
      callback = mime;
      mime = null;
    }
    d3.xhr(url, mime, ready);
  };
  d3.json = function(url, callback) {
    d3.text(url, "application/json", function(text) {
      callback(text ? JSON.parse(text) : null);
    });
  };
  d3.html = function(url, callback) {
    d3.text(url, "text/html", function(text) {
      if (text != null) {
        var range = document.createRange();
        range.selectNode(document.body);
        text = range.createContextualFragment(text);
      }
      callback(text);
    });
  };
  d3.xml = function(url, mime, callback) {
    function ready(req) {
      callback(req && req.responseXML);
    }
    if (arguments.length < 3) {
      callback = mime;
      mime = null;
    }
    d3.xhr(url, mime, ready);
  };
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0) {
        prefix = name.substring(0, i);
        name = name.substring(i + 1);
      }
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3.dispatch = function() {
    var dispatch = new d3_dispatch, i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i > 0) {
      name = type.substring(i + 1);
      type = type.substring(0, i);
    }
    return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
  };
  d3.format = function(specifier) {
    var match = d3_format_re.exec(specifier), fill = match[1] || " ", sign = match[3] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, suffix = "", integer = false;
    if (precision) precision = +precision.substring(1);
    if (zfill) {
      fill = "0";
      if (comma) width -= Math.floor((width - 1) / 4);
    }
    switch (type) {
     case "n":
      comma = true;
      type = "g";
      break;
     case "%":
      scale = 100;
      suffix = "%";
      type = "f";
      break;
     case "p":
      scale = 100;
      suffix = "%";
      type = "r";
      break;
     case "d":
      integer = true;
      precision = 0;
      break;
     case "s":
      scale = -1;
      type = "r";
      break;
    }
    if (type == "r" && !precision) type = "g";
    type = d3_format_types.get(type) || d3_format_typeDefault;
    return function(value) {
      if (integer && value % 1) return "";
      var negative = value < 0 && (value = -value) ? "-" : sign;
      if (scale < 0) {
        var prefix = d3.formatPrefix(value, precision);
        value = prefix.scale(value);
        suffix = prefix.symbol;
      } else {
        value *= scale;
      }
      value = type(value, precision);
      if (zfill) {
        var length = value.length + negative.length;
        if (length < width) value = (new Array(width - length + 1)).join(fill) + value;
        if (comma) value = d3_format_group(value);
        value = negative + value;
      } else {
        if (comma) value = d3_format_group(value);
        value = negative + value;
        var length = value.length;
        if (length < width) value = (new Array(width - length + 1)).join(fill) + value;
      }
      return value + suffix;
    };
  };
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/;
  var d3_format_types = d3.map({
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return d3.round(x, p = d3_format_precision(x, p)).toFixed(Math.max(0, Math.min(20, p)));
    }
  });
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "Î¼", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i <= 0 ? i + 1 : i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  var d3_ease_quad = d3_ease_poly(2), d3_ease_cubic = d3_ease_poly(3), d3_ease_default = function() {
    return d3_ease_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_ease_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.substring(0, i) : name, m = i >= 0 ? name.substring(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_ease_identity;
    return d3_ease_clamp(m(t.apply(null, Array.prototype.slice.call(arguments, 1))));
  };
  d3.event = null;
  d3.transform = function(string) {
    var g = document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      g.setAttribute("transform", string);
      var t = g.transform.baseVal.consolidate();
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  var d3_transformDegrees = 180 / Math.PI, d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolate = function(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  };
  d3.interpolateNumber = function(a, b) {
    b -= a;
    return function(t) {
      return a + b * t;
    };
  };
  d3.interpolateRound = function(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  };
  d3.interpolateString = function(a, b) {
    var m, i, j, s0 = 0, s1 = 0, s = [], q = [], n, o;
    d3_interpolate_number.lastIndex = 0;
    for (i = 0; m = d3_interpolate_number.exec(b); ++i) {
      if (m.index) s.push(b.substring(s0, s1 = m.index));
      q.push({
        i: s.length,
        x: m[0]
      });
      s.push(null);
      s0 = d3_interpolate_number.lastIndex;
    }
    if (s0 < b.length) s.push(b.substring(s0));
    for (i = 0, n = q.length; (m = d3_interpolate_number.exec(a)) && i < n; ++i) {
      o = q[i];
      if (o.x == m[0]) {
        if (o.i) {
          if (s[o.i + 1] == null) {
            s[o.i - 1] += o.x;
            s.splice(o.i, 1);
            for (j = i + 1; j < n; ++j) q[j].i--;
          } else {
            s[o.i - 1] += o.x + s[o.i + 1];
            s.splice(o.i, 2);
            for (j = i + 1; j < n; ++j) q[j].i -= 2;
          }
        } else {
          if (s[o.i + 1] == null) {
            s[o.i] = o.x;
          } else {
            s[o.i] = o.x + s[o.i + 1];
            s.splice(o.i + 1, 1);
            for (j = i + 1; j < n; ++j) q[j].i--;
          }
        }
        q.splice(i, 1);
        n--;
        i--;
      } else {
        o.x = d3.interpolateNumber(parseFloat(m[0]), parseFloat(o.x));
      }
    }
    while (i < n) {
      o = q.pop();
      if (s[o.i + 1] == null) {
        s[o.i] = o.x;
      } else {
        s[o.i] = o.x + s[o.i + 1];
        s.splice(o.i + 1, 1);
      }
      n--;
    }
    if (s.length === 1) {
      return s[0] == null ? q[0].x : function() {
        return b;
      };
    }
    return function(t) {
      for (i = 0; i < n; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
  d3.interpolateTransform = function(a, b) {
    var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;
    if (ta[0] != tb[0] || ta[1] != tb[1]) {
      s.push("translate(", null, ",", null, ")");
      q.push({
        i: 1,
        x: d3.interpolateNumber(ta[0], tb[0])
      }, {
        i: 3,
        x: d3.interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    } else {
      s.push("");
    }
    if (ra != rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(s.pop() + "rotate(", null, ")") - 2,
        x: d3.interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(s.pop() + "rotate(" + rb + ")");
    }
    if (wa != wb) {
      q.push({
        i: s.push(s.pop() + "skewX(", null, ")") - 2,
        x: d3.interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(s.pop() + "skewX(" + wb + ")");
    }
    if (ka[0] != kb[0] || ka[1] != kb[1]) {
      n = s.push(s.pop() + "scale(", null, ",", null, ")");
      q.push({
        i: n - 4,
        x: d3.interpolateNumber(ka[0], kb[0])
      }, {
        i: n - 2,
        x: d3.interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] != 1 || kb[1] != 1) {
      s.push(s.pop() + "scale(" + kb + ")");
    }
    n = q.length;
    return function(t) {
      var i = -1, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
  d3.interpolateRgb = function(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  };
  d3.interpolateHsl = function(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var h0 = a.h, s0 = a.s, l0 = a.l, h1 = b.h - h0, s1 = b.s - s0, l1 = b.l - l0;
    if (h1 > 180) h1 -= 360; else if (h1 < -180) h1 += 360;
    return function(t) {
      return d3_hsl_rgb(h0 + h1 * t, s0 + s1 * t, l0 + l1 * t) + "";
    };
  };
  d3.interpolateLab = function(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  };
  d3.interpolateHcl = function(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  };
  d3.interpolateArray = function(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3.interpolate(a[i], b[i]));
    for (; i < na; ++i) c[i] = a[i];
    for (; i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  };
  d3.interpolateObject = function(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolateByName(k)(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  };
  var d3_interpolate_number = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  d3.interpolators = [ d3.interpolateObject, function(a, b) {
    return b instanceof Array && d3.interpolateArray(a, b);
  }, function(a, b) {
    return (typeof a === "string" || typeof b === "string") && d3.interpolateString(a + "", b + "");
  }, function(a, b) {
    return (typeof b === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) : b instanceof d3_Color) && d3.interpolateRgb(a, b);
  }, function(a, b) {
    return !isNaN(a = +a) && !isNaN(b = +b) && d3.interpolateNumber(a, b);
  } ];
  d3_Color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.rgb = function(r, g, b) {
    return arguments.length === 1 ? r instanceof d3_Rgb ? d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : d3_rgb(~~r, ~~g, ~~b);
  };
  var d3_rgbPrototype = d3_Rgb.prototype = new d3_Color;
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return d3_rgb(Math.min(255, Math.floor(r / k)), Math.min(255, Math.floor(g / k)), Math.min(255, Math.floor(b / k)));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return d3_rgb(Math.floor(k * this.r), Math.floor(k * this.g), Math.floor(k * this.b));
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  var d3_rgb_names = d3.map({
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgb_parse(value, d3_rgb, d3_hsl_rgb));
  });
  d3.hsl = function(h, s, l) {
    return arguments.length === 1 ? h instanceof d3_Hsl ? d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : d3_hsl(+h, +s, +l);
  };
  var d3_hslPrototype = d3_Hsl.prototype = new d3_Color;
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  d3.hcl = function(h, c, l) {
    return arguments.length === 1 ? h instanceof d3_Hcl ? d3_hcl(h.h, h.c, h.l) : h instanceof d3_Lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : d3_hcl(+h, +c, +l);
  };
  var d3_hclPrototype = d3_Hcl.prototype = new d3_Color;
  d3_hclPrototype.brighter = function(k) {
    return d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  d3.lab = function(l, a, b) {
    return arguments.length === 1 ? l instanceof d3_Lab ? d3_lab(l.l, l.a, l.b) : l instanceof d3_Hcl ? d3_hcl_lab(l.l, l.c, l.h) : d3_rgb_lab((l = d3.rgb(l)).r, l.g, l.b) : d3_lab(+l, +a, +b);
  };
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_Lab.prototype = new d3_Color;
  d3_labPrototype.brighter = function(k) {
    return d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectRoot = document.documentElement, d3_selectMatcher = d3_selectRoot.matchesSelector || d3_selectRoot.webkitMatchesSelector || d3_selectRoot.mozMatchesSelector || d3_selectRoot.msMatchesSelector || d3_selectRoot.oMatchesSelector, d3_selectMatches = function(n, s) {
    return d3_selectMatcher.call(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = function(s, n) {
      return Sizzle.uniqueSort(Sizzle(s, n));
    };
    d3_selectMatches = Sizzle.matchesSelector;
  }
  var d3_selectionPrototype = [];
  d3.selection = function() {
    return d3_selectionRoot;
  };
  d3.selection.prototype = d3_selectionPrototype;
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    if (typeof selector !== "function") selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    if (typeof selector !== "function") selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = name.trim().split(/^|\s+/g)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.className;
          if (value.baseVal != null) value = value.baseVal;
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) return window.getComputedStyle(this.node(), null).getPropertyValue(name);
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  d3_selectionPrototype.text = function(value) {
    return arguments.length < 1 ? this.node().textContent : this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    });
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length < 1 ? this.node().innerHTML : this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    });
  };
  d3_selectionPrototype.append = function(name) {
    function append() {
      return this.appendChild(document.createElementNS(this.namespaceURI, name));
    }
    function appendNS() {
      return this.appendChild(document.createElementNS(name.space, name.local));
    }
    name = d3.ns.qualify(name);
    return this.select(name.local ? appendNS : append);
  };
  d3_selectionPrototype.insert = function(name, before) {
    function insert() {
      return this.insertBefore(document.createElementNS(this.namespaceURI, name), d3_select(before, this));
    }
    function insertNS() {
      return this.insertBefore(document.createElementNS(name.space, name.local), d3_select(before, this));
    }
    name = d3.ns.qualify(name);
    return this.select(name.local ? insertNS : insert);
  };
  d3_selectionPrototype.remove = function() {
    return this.each(function() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    });
  };
  d3_selectionPrototype.data = function(value, key) {
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), n1 = Math.max(n, m), updateNodes = [], enterNodes = [], exitNodes = [], node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map, keyValues = [], keyValue, j = groupData.length;
        for (i = -1; ++i < n; ) {
          keyValue = key.call(node = group[i], node.__data__, i);
          if (nodeByKeyValue.has(keyValue)) {
            exitNodes[j++] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
          keyValues.push(keyValue);
        }
        for (i = -1; ++i < m; ) {
          keyValue = key.call(groupData, nodeData = groupData[i], i);
          if (nodeByKeyValue.has(keyValue)) {
            updateNodes[i] = node = nodeByKeyValue.get(keyValue);
            node.__data__ = nodeData;
            enterNodes[i] = exitNodes[i] = null;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
            updateNodes[i] = exitNodes[i] = null;
          }
          nodeByKeyValue.remove(keyValue);
        }
        for (i = -1; ++i < n; ) {
          if (nodeByKeyValue.has(keyValues[i])) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
            enterNodes[i] = exitNodes[i] = null;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
            updateNodes[i] = exitNodes[i] = null;
          }
        }
        for (; i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
          updateNodes[i] = exitNodes[i] = null;
        }
        for (; i < n1; ++i) {
          exitNodes[i] = group[i];
          enterNodes[i] = updateNodes[i] = null;
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  d3_selectionPrototype.datum = d3_selectionPrototype.map = function(value) {
    return arguments.length < 1 ? this.property("__data__") : this.property("__data__", value);
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  d3_selectionPrototype.call = function(callback) {
    callback.apply(this, (arguments[0] = this, arguments));
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function(callback) {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.transition = function() {
    var subgroups = [], subgroup, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        subgroup.push((node = group[i]) ? {
          node: node,
          delay: d3_transitionDelay,
          duration: d3_transitionDuration
        } : null);
      }
    }
    return d3_transition(subgroups, d3_transitionId || ++d3_transitionNextId, Date.now());
  };
  var d3_selectionRoot = d3_selection([ [ document ] ]);
  d3_selectionRoot[0].parentNode = d3_selectRoot;
  d3.select = function(selector) {
    return typeof selector === "string" ? d3_selectionRoot.select(selector) : d3_selection([ [ selector ] ]);
  };
  d3.selectAll = function(selector) {
    return typeof selector === "string" ? d3_selectionRoot.selectAll(selector) : d3_selection([ d3_array(selector) ]);
  };
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.insert = d3_selectionPrototype.insert;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  var d3_transitionPrototype = [], d3_transitionNextId = 0, d3_transitionId = 0, d3_transitionDefaultDelay = 0, d3_transitionDefaultDuration = 250, d3_transitionDefaultEase = d3.ease("cubic-in-out"), d3_transitionDelay = d3_transitionDefaultDelay, d3_transitionDuration = d3_transitionDefaultDuration, d3_transitionEase = d3_transitionDefaultEase;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3.transition = function(selection) {
    return arguments.length ? d3_transitionId ? selection.transition() : selection : d3_selectionRoot.transition();
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, node;
    if (typeof selector !== "function") selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node.node, node.node.__data__, i))) {
          if ("__data__" in node.node) subnode.__data__ = node.node.__data__;
          subgroup.push({
            node: subnode,
            delay: node.delay,
            duration: node.duration
          });
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, this.id, this.time).ease(this.ease());
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, subnodes, node;
    if (typeof selector !== "function") selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subnodes = selector.call(node.node, node.node.__data__, i);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            subgroup.push({
              node: subnodes[k],
              delay: node.delay,
              duration: node.duration
            });
          }
        }
      }
    }
    return d3_transition(subgroups, this.id, this.time).ease(this.ease());
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node.node, node.node.__data__, i)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.id, this.time).ease(this.ease());
  };
  d3_transitionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      for (value in name) this.attrTween(value, d3_tweenByName(name[value], value));
      return this;
    }
    return this.attrTween(name, d3_tweenByName(value, name));
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f === d3_tweenRemove ? (this.removeAttribute(name), null) : f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f === d3_tweenRemove ? (this.removeAttributeNS(name.space, name.local), null) : f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    var name = d3.ns.qualify(nameNS);
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.styleTween(priority, d3_tweenByName(name[priority], priority), value);
        return this;
      }
      priority = "";
    }
    return this.styleTween(name, d3_tweenByName(value, name), priority);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    return this.tween("style." + name, function(d, i) {
      var f = tween.call(this, d, i, window.getComputedStyle(this, null).getPropertyValue(name));
      return f === d3_tweenRemove ? (this.style.removeProperty(name), null) : f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    });
  };
  d3_transitionPrototype.text = function(value) {
    return this.tween("text", function(d, i) {
      this.textContent = typeof value === "function" ? value.call(this, d, i) : value;
    });
  };
  d3_transitionPrototype.remove = function() {
    return this.each("end.transition", function() {
      var p;
      if (!this.__transition__ && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.delay = function(value) {
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node.delay = value.call(node = node.node, node.__data__, i, j) | 0;
    } : (value = value | 0, function(node) {
      node.delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node.duration = Math.max(1, value.call(node = node.node, node.__data__, i, j) | 0);
    } : (value = Math.max(1, value | 0), function(node) {
      node.duration = value;
    }));
  };
  d3_transitionPrototype.transition = function() {
    return this.select(d3_this);
  };
  d3.tween = function(b, interpolate) {
    function tweenFunction(d, i, a) {
      var v = b.call(this, d, i);
      return v == null ? a != "" && d3_tweenRemove : a != v && interpolate(a, v + "");
    }
    function tweenString(d, i, a) {
      return a != b && interpolate(a, b);
    }
    return typeof b === "function" ? tweenFunction : b == null ? d3_tweenNull : (b += "", tweenString);
  };
  var d3_tweenRemove = {};
  var d3_timer_id = 0, d3_timer_byId = {}, d3_timer_queue = null, d3_timer_interval, d3_timer_timeout;
  d3.timer = function(callback, delay, then) {
    if (arguments.length < 3) {
      if (arguments.length < 2) delay = 0; else if (!isFinite(delay)) return;
      then = Date.now();
    }
    var timer = d3_timer_byId[callback.id];
    if (timer && timer.callback === callback) {
      timer.then = then;
      timer.delay = delay;
    } else d3_timer_byId[callback.id = ++d3_timer_id] = d3_timer_queue = {
      callback: callback,
      then: then,
      delay: delay,
      next: d3_timer_queue
    };
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  };
  d3.timer.flush = function() {
    var elapsed, now = Date.now(), t1 = d3_timer_queue;
    while (t1) {
      elapsed = now - t1.then;
      if (!t1.delay) t1.flush = t1.callback(elapsed);
      t1 = t1.next;
    }
    d3_timer_flush();
  };
  var d3_timer_frame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    setTimeout(callback, 17);
  };
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = /WebKit/.test(navigator.userAgent) ? -1 : 0;
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  d3.scale = {};
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3.interpolate, false);
  };
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear(), d3_scale_logp);
  };
  var d3_scale_logFormat = d3.format(".0e");
  d3_scale_logp.pow = function(x) {
    return Math.pow(10, x);
  };
  d3_scale_logn.pow = function(x) {
    return -Math.pow(10, -x);
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1);
  };
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf" ];
  var d3_category20 = [ "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5" ];
  var d3_category20b = [ "#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6" ];
  var d3_category20c = [ "#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9" ];
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  d3.svg = {};
  d3.svg.arc = function() {
    function arc() {
      var r0 = innerRadius.apply(this, arguments), r1 = outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) + d3_svg_arcOffset, a1 = endAngle.apply(this, arguments) + d3_svg_arcOffset, da = (a1 < a0 && (da = a0, a0 = a1, a1 = da), a1 - a0), df = da < Math.PI ? "0" : "1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      return da >= d3_svg_arcMax ? r0 ? "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + r0 + "Z" : "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z" : r0 ? "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z" : "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
    }
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (innerRadius.apply(this, arguments) + outerRadius.apply(this, arguments)) / 2, a = (startAngle.apply(this, arguments) + endAngle.apply(this, arguments)) / 2 + d3_svg_arcOffset;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcOffset = -Math.PI / 2, d3_svg_arcMax = 2 * Math.PI - 1e-6;
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) + d3_svg_arcOffset, a1 = endAngle.call(self, subgroup, i) + d3_svg_arcOffset;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > Math.PI) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    var source = d3_svg_chordSource, target = d3_svg_chordTarget, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  d3.svg.diagonal = function() {
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    var source = d3_svg_chordSource, target = d3_svg_chordTarget, projection = d3_svg_diagonalProjection;
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  d3.svg.mouse = d3.mouse;
  d3.svg.touches = d3.touches;
  d3.svg.symbol = function() {
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * Math.PI / 180);
  d3.svg.axis = function() {
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var ticks = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments_) : scale.domain() : tickValues, tickFormat = tickFormat_ == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments_) : String : tickFormat_;
        var subticks = d3_svg_axisSubdivide(scale, ticks, tickSubdivide), subtick = g.selectAll(".minor").data(subticks, String), subtickEnter = subtick.enter().insert("line", "g").attr("class", "tick minor").style("opacity", 1e-6), subtickExit = d3.transition(subtick.exit()).style("opacity", 1e-6).remove(), subtickUpdate = d3.transition(subtick).style("opacity", 1);
        var tick = g.selectAll("g").data(ticks, String), tickEnter = tick.enter().insert("g", "path").style("opacity", 1e-6), tickExit = d3.transition(tick.exit()).style("opacity", 1e-6).remove(), tickUpdate = d3.transition(tick).style("opacity", 1), tickTransform;
        var range = d3_scaleRange(scale), path = g.selectAll(".domain").data([ 0 ]), pathEnter = path.enter().append("path").attr("class", "domain"), pathUpdate = d3.transition(path);
        var scale1 = scale.copy(), scale0 = this.__chart__ || scale1;
        this.__chart__ = scale1;
        tickEnter.append("line").attr("class", "tick");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text");
        switch (orient) {
         case "bottom":
          {
            tickTransform = d3_svg_axisX;
            subtickEnter.attr("y2", tickMinorSize);
            subtickUpdate.attr("x2", 0).attr("y2", tickMinorSize);
            lineEnter.attr("y2", tickMajorSize);
            textEnter.attr("y", Math.max(tickMajorSize, 0) + tickPadding);
            lineUpdate.attr("x2", 0).attr("y2", tickMajorSize);
            textUpdate.attr("x", 0).attr("y", Math.max(tickMajorSize, 0) + tickPadding);
            text.attr("dy", ".71em").attr("text-anchor", "middle");
            pathUpdate.attr("d", "M" + range[0] + "," + tickEndSize + "V0H" + range[1] + "V" + tickEndSize);
            break;
          }
         case "top":
          {
            tickTransform = d3_svg_axisX;
            subtickEnter.attr("y2", -tickMinorSize);
            subtickUpdate.attr("x2", 0).attr("y2", -tickMinorSize);
            lineEnter.attr("y2", -tickMajorSize);
            textEnter.attr("y", -(Math.max(tickMajorSize, 0) + tickPadding));
            lineUpdate.attr("x2", 0).attr("y2", -tickMajorSize);
            textUpdate.attr("x", 0).attr("y", -(Math.max(tickMajorSize, 0) + tickPadding));
            text.attr("dy", "0em").attr("text-anchor", "middle");
            pathUpdate.attr("d", "M" + range[0] + "," + -tickEndSize + "V0H" + range[1] + "V" + -tickEndSize);
            break;
          }
         case "left":
          {
            tickTransform = d3_svg_axisY;
            subtickEnter.attr("x2", -tickMinorSize);
            subtickUpdate.attr("x2", -tickMinorSize).attr("y2", 0);
            lineEnter.attr("x2", -tickMajorSize);
            textEnter.attr("x", -(Math.max(tickMajorSize, 0) + tickPadding));
            lineUpdate.attr("x2", -tickMajorSize).attr("y2", 0);
            textUpdate.attr("x", -(Math.max(tickMajorSize, 0) + tickPadding)).attr("y", 0);
            text.attr("dy", ".32em").attr("text-anchor", "end");
            pathUpdate.attr("d", "M" + -tickEndSize + "," + range[0] + "H0V" + range[1] + "H" + -tickEndSize);
            break;
          }
         case "right":
          {
            tickTransform = d3_svg_axisY;
            subtickEnter.attr("x2", tickMinorSize);
            subtickUpdate.attr("x2", tickMinorSize).attr("y2", 0);
            lineEnter.attr("x2", tickMajorSize);
            textEnter.attr("x", Math.max(tickMajorSize, 0) + tickPadding);
            lineUpdate.attr("x2", tickMajorSize).attr("y2", 0);
            textUpdate.attr("x", Math.max(tickMajorSize, 0) + tickPadding).attr("y", 0);
            text.attr("dy", ".32em").attr("text-anchor", "start");
            pathUpdate.attr("d", "M" + tickEndSize + "," + range[0] + "H0V" + range[1] + "H" + tickEndSize);
            break;
          }
        }
        if (scale.ticks) {
          tickEnter.call(tickTransform, scale0);
          tickUpdate.call(tickTransform, scale1);
          tickExit.call(tickTransform, scale1);
          subtickEnter.call(tickTransform, scale0);
          subtickUpdate.call(tickTransform, scale1);
          subtickExit.call(tickTransform, scale1);
        } else {
          var dx = scale1.rangeBand() / 2, x = function(d) {
            return scale1(d) + dx;
          };
          tickEnter.call(tickTransform, x);
          tickUpdate.call(tickTransform, x);
        }
      });
    }
    var scale = d3.scale.linear(), orient = "bottom", tickMajorSize = 6, tickMinorSize = 6, tickEndSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_, tickSubdivide = 0;
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = arguments;
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x, y, z) {
      if (!arguments.length) return tickMajorSize;
      var n = arguments.length - 1;
      tickMajorSize = +x;
      tickMinorSize = n > 1 ? +y : tickMajorSize;
      tickEndSize = n > 0 ? +arguments[n] : tickMajorSize;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function(x) {
      if (!arguments.length) return tickSubdivide;
      tickSubdivide = +x;
      return axis;
    };
    return axis;
  };
  d3.svg.brush = function() {
    function brush(g) {
      g.each(function() {
        var g = d3.select(this), bg = g.selectAll(".background").data([ 0 ]), fg = g.selectAll(".extent").data([ 0 ]), tz = g.selectAll(".resize").data(resizes, String), e;
        g.style("pointer-events", "all").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        bg.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        fg.enter().append("rect").attr("class", "extent").style("cursor", "move");
        tz.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        tz.style("display", brush.empty() ? "none" : null);
        tz.exit().remove();
        if (x) {
          e = d3_scaleRange(x);
          bg.attr("x", e[0]).attr("width", e[1] - e[0]);
          redrawX(g);
        }
        if (y) {
          e = d3_scaleRange(y);
          bg.attr("y", e[0]).attr("height", e[1] - e[0]);
          redrawY(g);
        }
        redraw(g);
      });
    }
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + extent[+/e$/.test(d)][0] + "," + extent[+/^s/.test(d)][1] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", extent[0][0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", extent[1][0] - extent[0][0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", extent[0][1]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", extent[1][1] - extent[0][1]);
    }
    function brushstart() {
      function mouse() {
        var touches = d3.event.changedTouches;
        return touches ? d3.touches(target, touches)[0] : d3.mouse(target);
      }
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= extent[1][0];
            origin[1] -= extent[1][1];
            dragging = 2;
          }
          d3_eventCancel();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += extent[1][0];
          origin[1] += extent[1][1];
          dragging = 0;
          d3_eventCancel();
        }
      }
      function brushmove() {
        var point = mouse(), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (extent[0][0] + extent[1][0]) / 2, (extent[0][1] + extent[1][1]) / 2 ];
            origin[0] = extent[+(point[0] < center[0])][0];
            origin[1] = extent[+(point[1] < center[1])][1];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], size = extent[1][i] - extent[0][i], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = Math.max(r0, Math.min(r1, point[i]));
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0][i] !== min || extent[1][i] !== max) {
          extentDomain = null;
          extent[0][i] = min;
          extent[1][i] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        event_({
          type: "brushend"
        });
        d3_eventCancel();
      }
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), center, origin = mouse(), offset;
      var w = d3.select(window).on("mousemove.brush", brushmove).on("mouseup.brush", brushend).on("touchmove.brush", brushmove).on("touchend.brush", brushend).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (dragging) {
        origin[0] = extent[0][0] - origin[0];
        origin[1] = extent[0][1] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ extent[1 - ex][0] - origin[0], extent[1 - ey][1] - origin[1] ];
        origin[0] = extent[ex][0];
        origin[1] = extent[ey][1];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      d3_eventCancel();
    }
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, resizes = d3_svg_brushResizes[0], extent = [ [ 0, 0 ], [ 0, 0 ] ], extentDomain;
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        z = extentDomain || extent;
        if (x) {
          x0 = z[0][0], x1 = z[1][0];
          if (!extentDomain) {
            x0 = extent[0][0], x1 = extent[1][0];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          y0 = z[0][1], y1 = z[1][1];
          if (!extentDomain) {
            y0 = extent[0][1], y1 = extent[1][1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      extentDomain = [ [ 0, 0 ], [ 0, 0 ] ];
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        extentDomain[0][0] = x0, extentDomain[1][0] = x1;
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        extent[0][0] = x0 | 0, extent[1][0] = x1 | 0;
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        extentDomain[0][1] = y0, extentDomain[1][1] = y1;
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        extent[0][1] = y0 | 0, extent[1][1] = y1 | 0;
      }
      return brush;
    };
    brush.clear = function() {
      extentDomain = null;
      extent[0][0] = extent[0][1] = extent[1][0] = extent[1][1] = 0;
      return brush;
    };
    brush.empty = function() {
      return x && extent[0][0] === extent[1][0] || y && extent[0][1] === extent[1][1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  d3.behavior = {};
  d3.behavior.drag = function() {
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", mousedown);
    }
    function mousedown() {
      function point() {
        var p = target.parentNode;
        return touchId ? d3.touches(p).filter(function(p) {
          return p.identifier === touchId;
        })[0] : d3.mouse(p);
      }
      function dragmove() {
        if (!target.parentNode) return dragend();
        var p = point(), dx = p[0] - origin_[0], dy = p[1] - origin_[1];
        moved |= dx | dy;
        origin_ = p;
        d3_eventCancel();
        event_({
          type: "drag",
          x: p[0] + offset[0],
          y: p[1] + offset[1],
          dx: dx,
          dy: dy
        });
      }
      function dragend() {
        event_({
          type: "dragend"
        });
        if (moved) {
          d3_eventCancel();
          if (d3.event.target === eventTarget) w.on("click.drag", click, true);
        }
        w.on(touchId ? "touchmove.drag-" + touchId : "mousemove.drag", null).on(touchId ? "touchend.drag-" + touchId : "mouseup.drag", null);
      }
      function click() {
        d3_eventCancel();
        w.on("click.drag", null);
      }
      var target = this, event_ = event.of(target, arguments), eventTarget = d3.event.target, touchId = d3.event.touches && d3.event.changedTouches[0].identifier, offset, origin_ = point(), moved = 0;
      var w = d3.select(window).on(touchId ? "touchmove.drag-" + touchId : "mousemove.drag", dragmove).on(touchId ? "touchend.drag-" + touchId : "mouseup.drag", dragend, true);
      if (origin) {
        offset = origin.apply(target, arguments);
        offset = [ offset.x - origin_[0], offset.y - origin_[1] ];
      } else {
        offset = [ 0, 0 ];
      }
      if (!touchId) d3_eventCancel();
      event_({
        type: "dragstart"
      });
    }
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null;
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  d3.behavior.zoom = function() {
    function zoom() {
      this.on("mousedown.zoom", mousedown).on("mousewheel.zoom", mousewheel).on("mousemove.zoom", mousemove).on("DOMMouseScroll.zoom", mousewheel).on("dblclick.zoom", dblclick).on("touchstart.zoom", touchstart).on("touchmove.zoom", touchmove).on("touchend.zoom", touchstart);
    }
    function location(p) {
      return [ (p[0] - translate[0]) / scale, (p[1] - translate[1]) / scale ];
    }
    function point(l) {
      return [ l[0] * scale + translate[0], l[1] * scale + translate[1] ];
    }
    function scaleTo(s) {
      scale = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      translate[0] += p[0] - l[0];
      translate[1] += p[1] - l[1];
    }
    function dispatch(event) {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - translate[0]) / scale;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - translate[1]) / scale;
      }).map(y0.invert));
      d3.event.preventDefault();
      event({
        type: "zoom",
        scale: scale,
        translate: translate
      });
    }
    function mousedown() {
      function mousemove() {
        moved = 1;
        translateTo(d3.mouse(target), l);
        dispatch(event_);
      }
      function mouseup() {
        if (moved) d3_eventCancel();
        w.on("mousemove.zoom", null).on("mouseup.zoom", null);
        if (moved && d3.event.target === eventTarget) w.on("click.zoom", click, true);
      }
      function click() {
        d3_eventCancel();
        w.on("click.zoom", null);
      }
      var target = this, event_ = event.of(target, arguments), eventTarget = d3.event.target, moved = 0, w = d3.select(window).on("mousemove.zoom", mousemove).on("mouseup.zoom", mouseup), l = location(d3.mouse(target));
      window.focus();
      d3_eventCancel();
    }
    function mousewheel() {
      if (!translate0) translate0 = location(d3.mouse(this));
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * scale);
      translateTo(d3.mouse(this), translate0);
      dispatch(event.of(this, arguments));
    }
    function mousemove() {
      translate0 = null;
    }
    function dblclick() {
      var p = d3.mouse(this), l = location(p);
      scaleTo(d3.event.shiftKey ? scale / 2 : scale * 2);
      translateTo(p, l);
      dispatch(event.of(this, arguments));
    }
    function touchstart() {
      var touches = d3.touches(this), now = Date.now();
      scale0 = scale;
      translate0 = {};
      touches.forEach(function(t) {
        translate0[t.identifier] = location(t);
      });
      d3_eventCancel();
      if (touches.length === 1) {
        if (now - touchtime < 500) {
          var p = touches[0], l = location(touches[0]);
          scaleTo(scale * 2);
          translateTo(p, l);
          dispatch(event.of(this, arguments));
        }
        touchtime = now;
      }
    }
    function touchmove() {
      var touches = d3.touches(this), p0 = touches[0], l0 = translate0[p0.identifier];
      if (p1 = touches[1]) {
        var p1, l1 = translate0[p1.identifier];
        p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
        l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
        scaleTo(d3.event.scale * scale0);
      }
      translateTo(p0, l0);
      touchtime = null;
      dispatch(event.of(this, arguments));
    }
    var translate = [ 0, 0 ], translate0, scale = 1, scale0, scaleExtent = d3_behavior_zoomInfinity, event = d3_eventDispatch(zoom, "zoom"), x0, x1, y0, y1, touchtime;
    zoom.translate = function(x) {
      if (!arguments.length) return translate;
      translate = x.map(Number);
      return zoom;
    };
    zoom.scale = function(x) {
      if (!arguments.length) return scale;
      scale = +x;
      return zoom;
    };
    zoom.scaleExtent = function(x) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = x == null ? d3_behavior_zoomInfinity : x.map(Number);
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      return zoom;
    };
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomDiv, d3_behavior_zoomInfinity = [ 0, Infinity ];
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  d3.layout.chord = function() {
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (2 * Math.PI - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: (x - x0) / k
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    function repulse(node) {
      return function(quad, x1, y1, x2, y2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dn = 1 / Math.sqrt(dx * dx + dy * dy);
          if ((x2 - x1) * dn < theta) {
            var k = quad.charge * dn * dn;
            node.px -= dx * k;
            node.py -= dy * k;
            return true;
          }
          if (quad.point && isFinite(dn)) {
            var k = quad.pointCharge * dn * dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    function dragmove(d) {
      d.px = d3.event.x;
      d.py = d3.event.y;
      force.resume();
    }
    var force = {}, event = d3.dispatch("start", "tick", "end"), size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, gravity = .1, theta = .8, interval, nodes = [], links = [], distances, strengths, charges;
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight / (t.weight + s.weight));
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = d3_functor(x);
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = d3_functor(x);
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return theta;
      theta = x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      if (alpha) {
        if (x > 0) alpha = x; else alpha = 0;
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        d3.timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      function position(dimension, size) {
        var neighbors = neighbor(i), j = -1, m = neighbors.length, x;
        while (++j < m) if (!isNaN(x = neighbors[j][dimension])) return x;
        return Math.random() * size;
      }
      function neighbor() {
        if (!neighbors) {
          neighbors = [];
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        return neighbors[i];
      }
      var i, j, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      distances = [];
      strengths = [];
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        distances[i] = linkDistance.call(this, o, i);
        strengths[i] = linkStrength.call(this, o, i);
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      charges = [];
      if (typeof charge === "function") {
        for (i = 0; i < n; ++i) {
          charges[i] = +charge.call(this, nodes[i], i);
        }
      } else {
        for (i = 0; i < n; ++i) {
          charges[i] = charge;
        }
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart", d3_layout_forceDragstart).on("drag", dragmove).on("dragend", d3_layout_forceDragend);
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    return d3.rebind(force, event, "on");
  };
  d3.layout.partition = function() {
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    function pie(data, i) {
      var values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      });
      var a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle);
      var k = ((typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - startAngle) / d3.sum(values);
      var index = d3.range(data.length);
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      var arcs = [];
      index.forEach(function(i) {
        var d;
        arcs[i] = {
          data: data[i],
          value: d = values[i],
          startAngle: a,
          endAngle: a += d * k
        };
      });
      return arcs;
    }
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = 2 * Math.PI;
    pie.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return pie;
    };
    pie.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return pie;
    };
    pie.startAngle = function(x) {
      if (!arguments.length) return startAngle;
      startAngle = x;
      return pie;
    };
    pie.endAngle = function(x) {
      if (!arguments.length) return endAngle;
      endAngle = x;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    function stack(data, index) {
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d, i) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var n = series.length, m = series[0].length, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, max = 0, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  d3.layout.histogram = function() {
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  d3.layout.hierarchy = function() {
    function recurse(data, depth, nodes) {
      var childs = children.call(hierarchy, data, depth), node = d3_layout_hierarchyInline ? data : {
        data: data
      };
      node.depth = depth;
      nodes.push(node);
      if (childs && (n = childs.length)) {
        var i = -1, n, c = node.children = [], v = 0, j = depth + 1, d;
        while (++i < n) {
          d = recurse(childs[i], j, nodes);
          d.parent = node;
          c.push(d);
          v += d.value;
        }
        if (sort) c.sort(sort);
        if (value) node.value = v;
      } else if (value) {
        node.value = +value.call(hierarchy, data, depth) || 0;
      }
      return node;
    }
    function revalue(node, depth) {
      var children = node.children, v = 0;
      if (children && (n = children.length)) {
        var i = -1, n, j = depth + 1;
        while (++i < n) v += revalue(children[i], j);
      } else if (value) {
        v = +value.call(hierarchy, d3_layout_hierarchyInline ? node : node.data, depth) || 0;
      }
      if (value) node.value = v;
      return v;
    }
    function hierarchy(d) {
      var nodes = [];
      recurse(d, 0, nodes);
      return nodes;
    }
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      revalue(root, 0);
      return root;
    };
    return hierarchy;
  };
  var d3_layout_hierarchyInline = false;
  d3.layout.pack = function() {
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0];
      root.x = 0;
      root.y = 0;
      d3_layout_treeVisitAfter(root, function(d) {
        d.r = Math.sqrt(d.value);
      });
      d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
      var w = size[0], h = size[1], k = Math.max(2 * root.r / w, 2 * root.r / h);
      if (padding > 0) {
        var dr = padding * k / 2;
        d3_layout_treeVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
        d3_layout_treeVisitAfter(root, function(d) {
          d.r -= dr;
        });
        k = Math.max(2 * root.r / w, 2 * root.r / h);
      }
      d3_layout_packTransform(root, w / 2, h / 2, 1 / k);
      return nodes;
    }
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ];
    pack.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  d3.layout.cluster = function() {
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0, kx, ky;
      d3_layout_treeVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_treeVisitAfter(root, function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ];
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  d3.layout.tree = function() {
    function tree(d, i) {
      function firstWalk(node, previousSibling) {
        var children = node.children, layout = node._tree;
        if (children && (n = children.length)) {
          var n, firstChild = children[0], previousChild, ancestor = firstChild, child, i = -1;
          while (++i < n) {
            child = children[i];
            firstWalk(child, previousChild);
            ancestor = apportion(child, previousChild, ancestor);
            previousChild = child;
          }
          d3_layout_treeShift(node);
          var midpoint = .5 * (firstChild._tree.prelim + child._tree.prelim);
          if (previousSibling) {
            layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
            layout.mod = layout.prelim - midpoint;
          } else {
            layout.prelim = midpoint;
          }
        } else {
          if (previousSibling) {
            layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
          }
        }
      }
      function secondWalk(node, x) {
        node.x = node._tree.prelim + x;
        var children = node.children;
        if (children && (n = children.length)) {
          var i = -1, n;
          x += node._tree.mod;
          while (++i < n) {
            secondWalk(children[i], x);
          }
        }
      }
      function apportion(node, previousSibling, ancestor) {
        if (previousSibling) {
          var vip = node, vop = node, vim = previousSibling, vom = node.parent.children[0], sip = vip._tree.mod, sop = vop._tree.mod, sim = vim._tree.mod, som = vom._tree.mod, shift;
          while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
            vom = d3_layout_treeLeft(vom);
            vop = d3_layout_treeRight(vop);
            vop._tree.ancestor = node;
            shift = vim._tree.prelim + sim - vip._tree.prelim - sip + separation(vim, vip);
            if (shift > 0) {
              d3_layout_treeMove(d3_layout_treeAncestor(vim, node, ancestor), node, shift);
              sip += shift;
              sop += shift;
            }
            sim += vim._tree.mod;
            sip += vip._tree.mod;
            som += vom._tree.mod;
            sop += vop._tree.mod;
          }
          if (vim && !d3_layout_treeRight(vop)) {
            vop._tree.thread = vim;
            vop._tree.mod += sim - sop;
          }
          if (vip && !d3_layout_treeLeft(vom)) {
            vom._tree.thread = vip;
            vom._tree.mod += sip - som;
            ancestor = node;
          }
        }
        return ancestor;
      }
      var nodes = hierarchy.call(this, d, i), root = nodes[0];
      d3_layout_treeVisitAfter(root, function(node, previousSibling) {
        node._tree = {
          ancestor: node,
          prelim: 0,
          mod: 0,
          change: 0,
          shift: 0,
          number: previousSibling ? previousSibling._tree.number + 1 : 0
        };
      });
      firstWalk(root);
      secondWalk(root, -root._tree.prelim);
      var left = d3_layout_treeSearch(root, d3_layout_treeLeftmost), right = d3_layout_treeSearch(root, d3_layout_treeRightmost), deep = d3_layout_treeSearch(root, d3_layout_treeDeepest), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2, y1 = deep.depth || 1;
      d3_layout_treeVisitAfter(root, function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = node.depth / y1 * size[1];
        delete node._tree;
      });
      return nodes;
    }
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ];
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  d3.layout.treemap = function() {
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if ((score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = 0;
      root.y = 0;
      root.dx = size[0];
      root.dy = size[1];
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, ratio = .5 * (1 + Math.sqrt(5));
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      if (!arguments.length) return padding;
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  d3.csv = d3_dsv(",", "text/csv");
  d3.tsv = d3_dsv("	", "text/tab-separated-values");
  d3.geo = {};
  var d3_geo_radians = Math.PI / 180;
  d3.geo.azimuthal = function() {
    function azimuthal(coordinates) {
      var x1 = coordinates[0] * d3_geo_radians - x0, y1 = coordinates[1] * d3_geo_radians, cx1 = Math.cos(x1), sx1 = Math.sin(x1), cy1 = Math.cos(y1), sy1 = Math.sin(y1), cc = mode !== "orthographic" ? sy0 * sy1 + cy0 * cy1 * cx1 : null, c, k = mode === "stereographic" ? 1 / (1 + cc) : mode === "gnomonic" ? 1 / cc : mode === "equidistant" ? (c = Math.acos(cc), c ? c / Math.sin(c) : 0) : mode === "equalarea" ? Math.sqrt(2 / (1 + cc)) : 1, x = k * cy1 * sx1, y = k * (sy0 * cy1 * cx1 - cy0 * sy1);
      return [ scale * x + translate[0], scale * y + translate[1] ];
    }
    var mode = "orthographic", origin, scale = 200, translate = [ 480, 250 ], x0, y0, cy0, sy0;
    azimuthal.invert = function(coordinates) {
      var x = (coordinates[0] - translate[0]) / scale, y = (coordinates[1] - translate[1]) / scale, p = Math.sqrt(x * x + y * y), c = mode === "stereographic" ? 2 * Math.atan(p) : mode === "gnomonic" ? Math.atan(p) : mode === "equidistant" ? p : mode === "equalarea" ? 2 * Math.asin(.5 * p) : Math.asin(p), sc = Math.sin(c), cc = Math.cos(c);
      return [ (x0 + Math.atan2(x * sc, p * cy0 * cc + y * sy0 * sc)) / d3_geo_radians, Math.asin(cc * sy0 - (p ? y * sc * cy0 / p : 0)) / d3_geo_radians ];
    };
    azimuthal.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return azimuthal;
    };
    azimuthal.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      x0 = origin[0] * d3_geo_radians;
      y0 = origin[1] * d3_geo_radians;
      cy0 = Math.cos(y0);
      sy0 = Math.sin(y0);
      return azimuthal;
    };
    azimuthal.scale = function(x) {
      if (!arguments.length) return scale;
      scale = +x;
      return azimuthal;
    };
    azimuthal.translate = function(x) {
      if (!arguments.length) return translate;
      translate = [ +x[0], +x[1] ];
      return azimuthal;
    };
    return azimuthal.origin([ 0, 0 ]);
  };
  d3.geo.albers = function() {
    function albers(coordinates) {
      var t = n * (d3_geo_radians * coordinates[0] - lng0), p = Math.sqrt(C - 2 * n * Math.sin(d3_geo_radians * coordinates[1])) / n;
      return [ scale * p * Math.sin(t) + translate[0], scale * (p * Math.cos(t) - p0) + translate[1] ];
    }
    function reload() {
      var phi1 = d3_geo_radians * parallels[0], phi2 = d3_geo_radians * parallels[1], lat0 = d3_geo_radians * origin[1], s = Math.sin(phi1), c = Math.cos(phi1);
      lng0 = d3_geo_radians * origin[0];
      n = .5 * (s + Math.sin(phi2));
      C = c * c + 2 * n * s;
      p0 = Math.sqrt(C - 2 * n * Math.sin(lat0)) / n;
      return albers;
    }
    var origin = [ -98, 38 ], parallels = [ 29.5, 45.5 ], scale = 1e3, translate = [ 480, 250 ], lng0, n, C, p0;
    albers.invert = function(coordinates) {
      var x = (coordinates[0] - translate[0]) / scale, y = (coordinates[1] - translate[1]) / scale, p0y = p0 + y, t = Math.atan2(x, p0y), p = Math.sqrt(x * x + p0y * p0y);
      return [ (lng0 + t / n) / d3_geo_radians, Math.asin((C - p * p * n * n) / (2 * n)) / d3_geo_radians ];
    };
    albers.origin = function(x) {
      if (!arguments.length) return origin;
      origin = [ +x[0], +x[1] ];
      return reload();
    };
    albers.parallels = function(x) {
      if (!arguments.length) return parallels;
      parallels = [ +x[0], +x[1] ];
      return reload();
    };
    albers.scale = function(x) {
      if (!arguments.length) return scale;
      scale = +x;
      return albers;
    };
    albers.translate = function(x) {
      if (!arguments.length) return translate;
      translate = [ +x[0], +x[1] ];
      return albers;
    };
    return reload();
  };
  d3.geo.albersUsa = function() {
    function albersUsa(coordinates) {
      var lon = coordinates[0], lat = coordinates[1];
      return (lat > 50 ? alaska : lon < -140 ? hawaii : lat < 21 ? puertoRico : lower48)(coordinates);
    }
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.albers().origin([ -160, 60 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.albers().origin([ -160, 20 ]).parallels([ 8, 18 ]);
    var puertoRico = d3.geo.albers().origin([ -60, 10 ]).parallels([ 8, 18 ]);
    albersUsa.scale = function(x) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(x);
      alaska.scale(x * .6);
      hawaii.scale(x);
      puertoRico.scale(x * 1.5);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(x) {
      if (!arguments.length) return lower48.translate();
      var dz = lower48.scale() / 1e3, dx = x[0], dy = x[1];
      lower48.translate(x);
      alaska.translate([ dx - 400 * dz, dy + 170 * dz ]);
      hawaii.translate([ dx - 190 * dz, dy + 200 * dz ]);
      puertoRico.translate([ dx + 580 * dz, dy + 430 * dz ]);
      return albersUsa;
    };
    return albersUsa.scale(lower48.scale());
  };
  d3.geo.bonne = function() {
    function bonne(coordinates) {
      var x = coordinates[0] * d3_geo_radians - x0, y = coordinates[1] * d3_geo_radians - y0;
      if (y1) {
        var p = c1 + y1 - y, E = x * Math.cos(y) / p;
        x = p * Math.sin(E);
        y = p * Math.cos(E) - c1;
      } else {
        x *= Math.cos(y);
        y *= -1;
      }
      return [ scale * x + translate[0], scale * y + translate[1] ];
    }
    var scale = 200, translate = [ 480, 250 ], x0, y0, y1, c1;
    bonne.invert = function(coordinates) {
      var x = (coordinates[0] - translate[0]) / scale, y = (coordinates[1] - translate[1]) / scale;
      if (y1) {
        var c = c1 + y, p = Math.sqrt(x * x + c * c);
        y = c1 + y1 - p;
        x = x0 + p * Math.atan2(x, c) / Math.cos(y);
      } else {
        y *= -1;
        x /= Math.cos(y);
      }
      return [ x / d3_geo_radians, y / d3_geo_radians ];
    };
    bonne.parallel = function(x) {
      if (!arguments.length) return y1 / d3_geo_radians;
      c1 = 1 / Math.tan(y1 = x * d3_geo_radians);
      return bonne;
    };
    bonne.origin = function(x) {
      if (!arguments.length) return [ x0 / d3_geo_radians, y0 / d3_geo_radians ];
      x0 = x[0] * d3_geo_radians;
      y0 = x[1] * d3_geo_radians;
      return bonne;
    };
    bonne.scale = function(x) {
      if (!arguments.length) return scale;
      scale = +x;
      return bonne;
    };
    bonne.translate = function(x) {
      if (!arguments.length) return translate;
      translate = [ +x[0], +x[1] ];
      return bonne;
    };
    return bonne.origin([ 0, 0 ]).parallel(45);
  };
  d3.geo.equirectangular = function() {
    function equirectangular(coordinates) {
      var x = coordinates[0] / 360, y = -coordinates[1] / 360;
      return [ scale * x + translate[0], scale * y + translate[1] ];
    }
    var scale = 500, translate = [ 480, 250 ];
    equirectangular.invert = function(coordinates) {
      var x = (coordinates[0] - translate[0]) / scale, y = (coordinates[1] - translate[1]) / scale;
      return [ 360 * x, -360 * y ];
    };
    equirectangular.scale = function(x) {
      if (!arguments.length) return scale;
      scale = +x;
      return equirectangular;
    };
    equirectangular.translate = function(x) {
      if (!arguments.length) return translate;
      translate = [ +x[0], +x[1] ];
      return equirectangular;
    };
    return equirectangular;
  };
  d3.geo.mercator = function() {
    function mercator(coordinates) {
      var x = coordinates[0] / 360, y = -(Math.log(Math.tan(Math.PI / 4 + coordinates[1] * d3_geo_radians / 2)) / d3_geo_radians) / 360;
      return [ scale * x + translate[0], scale * Math.max(-.5, Math.min(.5, y)) + translate[1] ];
    }
    var scale = 500, translate = [ 480, 250 ];
    mercator.invert = function(coordinates) {
      var x = (coordinates[0] - translate[0]) / scale, y = (coordinates[1] - translate[1]) / scale;
      return [ 360 * x, 2 * Math.atan(Math.exp(-360 * y * d3_geo_radians)) / d3_geo_radians - 90 ];
    };
    mercator.scale = function(x) {
      if (!arguments.length) return scale;
      scale = +x;
      return mercator;
    };
    mercator.translate = function(x) {
      if (!arguments.length) return translate;
      translate = [ +x[0], +x[1] ];
      return mercator;
    };
    return mercator;
  };
  d3.geo.path = function() {
    function path(d, i) {
      if (typeof pointRadius === "function") pointCircle = d3_path_circle(pointRadius.apply(this, arguments));
      pathType(d);
      var result = buffer.length ? buffer.join("") : null;
      buffer = [];
      return result;
    }
    function project(coordinates) {
      return projection(coordinates).join(",");
    }
    function polygonArea(coordinates) {
      var sum = area(coordinates[0]), i = 0, n = coordinates.length;
      while (++i < n) sum -= area(coordinates[i]);
      return sum;
    }
    function polygonCentroid(coordinates) {
      var polygon = d3.geom.polygon(coordinates[0].map(projection)), area = polygon.area(), centroid = polygon.centroid(area < 0 ? (area *= -1, 1) : -1), x = centroid[0], y = centroid[1], z = area, i = 0, n = coordinates.length;
      while (++i < n) {
        polygon = d3.geom.polygon(coordinates[i].map(projection));
        area = polygon.area();
        centroid = polygon.centroid(area < 0 ? (area *= -1, 1) : -1);
        x -= centroid[0];
        y -= centroid[1];
        z -= area;
      }
      return [ x, y, 6 * z ];
    }
    function area(coordinates) {
      return Math.abs(d3.geom.polygon(coordinates.map(projection)).area());
    }
    var pointRadius = 4.5, pointCircle = d3_path_circle(pointRadius), projection = d3.geo.albersUsa(), buffer = [];
    var pathType = d3_geo_type({
      FeatureCollection: function(o) {
        var features = o.features, i = -1, n = features.length;
        while (++i < n) buffer.push(pathType(features[i].geometry));
      },
      Feature: function(o) {
        pathType(o.geometry);
      },
      Point: function(o) {
        buffer.push("M", project(o.coordinates), pointCircle);
      },
      MultiPoint: function(o) {
        var coordinates = o.coordinates, i = -1, n = coordinates.length;
        while (++i < n) buffer.push("M", project(coordinates[i]), pointCircle);
      },
      LineString: function(o) {
        var coordinates = o.coordinates, i = -1, n = coordinates.length;
        buffer.push("M");
        while (++i < n) buffer.push(project(coordinates[i]), "L");
        buffer.pop();
      },
      MultiLineString: function(o) {
        var coordinates = o.coordinates, i = -1, n = coordinates.length, subcoordinates, j, m;
        while (++i < n) {
          subcoordinates = coordinates[i];
          j = -1;
          m = subcoordinates.length;
          buffer.push("M");
          while (++j < m) buffer.push(project(subcoordinates[j]), "L");
          buffer.pop();
        }
      },
      Polygon: function(o) {
        var coordinates = o.coordinates, i = -1, n = coordinates.length, subcoordinates, j, m;
        while (++i < n) {
          subcoordinates = coordinates[i];
          j = -1;
          if ((m = subcoordinates.length - 1) > 0) {
            buffer.push("M");
            while (++j < m) buffer.push(project(subcoordinates[j]), "L");
            buffer[buffer.length - 1] = "Z";
          }
        }
      },
      MultiPolygon: function(o) {
        var coordinates = o.coordinates, i = -1, n = coordinates.length, subcoordinates, j, m, subsubcoordinates, k, p;
        while (++i < n) {
          subcoordinates = coordinates[i];
          j = -1;
          m = subcoordinates.length;
          while (++j < m) {
            subsubcoordinates = subcoordinates[j];
            k = -1;
            if ((p = subsubcoordinates.length - 1) > 0) {
              buffer.push("M");
              while (++k < p) buffer.push(project(subsubcoordinates[k]), "L");
              buffer[buffer.length - 1] = "Z";
            }
          }
        }
      },
      GeometryCollection: function(o) {
        var geometries = o.geometries, i = -1, n = geometries.length;
        while (++i < n) buffer.push(pathType(geometries[i]));
      }
    });
    var areaType = path.area = d3_geo_type({
      FeatureCollection: function(o) {
        var area = 0, features = o.features, i = -1, n = features.length;
        while (++i < n) area += areaType(features[i]);
        return area;
      },
      Feature: function(o) {
        return areaType(o.geometry);
      },
      Polygon: function(o) {
        return polygonArea(o.coordinates);
      },
      MultiPolygon: function(o) {
        var sum = 0, coordinates = o.coordinates, i = -1, n = coordinates.length;
        while (++i < n) sum += polygonArea(coordinates[i]);
        return sum;
      },
      GeometryCollection: function(o) {
        var sum = 0, geometries = o.geometries, i = -1, n = geometries.length;
        while (++i < n) sum += areaType(geometries[i]);
        return sum;
      }
    }, 0);
    var centroidType = path.centroid = d3_geo_type({
      Feature: function(o) {
        return centroidType(o.geometry);
      },
      Polygon: function(o) {
        var centroid = polygonCentroid(o.coordinates);
        return [ centroid[0] / centroid[2], centroid[1] / centroid[2] ];
      },
      MultiPolygon: function(o) {
        var area = 0, coordinates = o.coordinates, centroid, x = 0, y = 0, z = 0, i = -1, n = coordinates.length;
        while (++i < n) {
          centroid = polygonCentroid(coordinates[i]);
          x += centroid[0];
          y += centroid[1];
          z += centroid[2];
        }
        return [ x / z, y / z ];
      }
    });
    path.projection = function(x) {
      projection = x;
      return path;
    };
    path.pointRadius = function(x) {
      if (typeof x === "function") pointRadius = x; else {
        pointRadius = +x;
        pointCircle = d3_path_circle(pointRadius);
      }
      return path;
    };
    return path;
  };
  d3.geo.bounds = function(feature) {
    var left = Infinity, bottom = Infinity, right = -Infinity, top = -Infinity;
    d3_geo_bounds(feature, function(x, y) {
      if (x < left) left = x;
      if (x > right) right = x;
      if (y < bottom) bottom = y;
      if (y > top) top = y;
    });
    return [ [ left, bottom ], [ right, top ] ];
  };
  var d3_geo_boundsTypes = {
    Feature: d3_geo_boundsFeature,
    FeatureCollection: d3_geo_boundsFeatureCollection,
    GeometryCollection: d3_geo_boundsGeometryCollection,
    LineString: d3_geo_boundsLineString,
    MultiLineString: d3_geo_boundsMultiLineString,
    MultiPoint: d3_geo_boundsLineString,
    MultiPolygon: d3_geo_boundsMultiPolygon,
    Point: d3_geo_boundsPoint,
    Polygon: d3_geo_boundsPolygon
  };
  d3.geo.circle = function() {
    function circle() {}
    function visible(point) {
      return arc.distance(point) < radians;
    }
    function clip(coordinates) {
      var i = -1, n = coordinates.length, clipped = [], p0, p1, p2, d0, d1;
      while (++i < n) {
        d1 = arc.distance(p2 = coordinates[i]);
        if (d1 < radians) {
          if (p1) clipped.push(d3_geo_greatArcInterpolate(p1, p2)((d0 - radians) / (d0 - d1)));
          clipped.push(p2);
          p0 = p1 = null;
        } else {
          p1 = p2;
          if (!p0 && clipped.length) {
            clipped.push(d3_geo_greatArcInterpolate(clipped[clipped.length - 1], p1)((radians - d0) / (d1 - d0)));
            p0 = p1;
          }
        }
        d0 = d1;
      }
      p0 = coordinates[0];
      p1 = clipped[0];
      if (p1 && p2[0] === p0[0] && p2[1] === p0[1] && !(p2[0] === p1[0] && p2[1] === p1[1])) {
        clipped.push(p1);
      }
      return resample(clipped);
    }
    function resample(coordinates) {
      var i = 0, n = coordinates.length, j, m, resampled = n ? [ coordinates[0] ] : coordinates, resamples, origin = arc.source();
      while (++i < n) {
        resamples = arc.source(coordinates[i - 1])(coordinates[i]).coordinates;
        for (j = 0, m = resamples.length; ++j < m; ) resampled.push(resamples[j]);
      }
      arc.source(origin);
      return resampled;
    }
    var origin = [ 0, 0 ], degrees = 90 - .01, radians = degrees * d3_geo_radians, arc = d3.geo.greatArc().source(origin).target(d3_identity);
    circle.clip = function(d) {
      if (typeof origin === "function") arc.source(origin.apply(this, arguments));
      return clipType(d) || null;
    };
    var clipType = d3_geo_type({
      FeatureCollection: function(o) {
        var features = o.features.map(clipType).filter(d3_identity);
        return features && (o = Object.create(o), o.features = features, o);
      },
      Feature: function(o) {
        var geometry = clipType(o.geometry);
        return geometry && (o = Object.create(o), o.geometry = geometry, o);
      },
      Point: function(o) {
        return visible(o.coordinates) && o;
      },
      MultiPoint: function(o) {
        var coordinates = o.coordinates.filter(visible);
        return coordinates.length && {
          type: o.type,
          coordinates: coordinates
        };
      },
      LineString: function(o) {
        var coordinates = clip(o.coordinates);
        return coordinates.length && (o = Object.create(o), o.coordinates = coordinates, o);
      },
      MultiLineString: function(o) {
        var coordinates = o.coordinates.map(clip).filter(function(d) {
          return d.length;
        });
        return coordinates.length && (o = Object.create(o), o.coordinates = coordinates, o);
      },
      Polygon: function(o) {
        var coordinates = o.coordinates.map(clip);
        return coordinates[0].length && (o = Object.create(o), o.coordinates = coordinates, o);
      },
      MultiPolygon: function(o) {
        var coordinates = o.coordinates.map(function(d) {
          return d.map(clip);
        }).filter(function(d) {
          return d[0].length;
        });
        return coordinates.length && (o = Object.create(o), o.coordinates = coordinates, o);
      },
      GeometryCollection: function(o) {
        var geometries = o.geometries.map(clipType).filter(d3_identity);
        return geometries.length && (o = Object.create(o), o.geometries = geometries, o);
      }
    });
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      if (typeof origin !== "function") arc.source(origin);
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return degrees;
      radians = (degrees = +x) * d3_geo_radians;
      return circle;
    };
    return d3.rebind(circle, arc, "precision");
  };
  d3.geo.greatArc = function() {
    function greatArc() {
      var d = greatArc.distance.apply(this, arguments), t = 0, dt = precision / d, coordinates = [ p0 ];
      while ((t += dt) < 1) coordinates.push(interpolate(t));
      coordinates.push(p1);
      return {
        type: "LineString",
        coordinates: coordinates
      };
    }
    var source = d3_geo_greatArcSource, p0, target = d3_geo_greatArcTarget, p1, precision = 6 * d3_geo_radians, interpolate = d3_geo_greatArcInterpolator();
    greatArc.distance = function() {
      if (typeof source === "function") interpolate.source(p0 = source.apply(this, arguments));
      if (typeof target === "function") interpolate.target(p1 = target.apply(this, arguments));
      return interpolate.distance();
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _;
      if (typeof source !== "function") interpolate.source(p0 = source);
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _;
      if (typeof target !== "function") interpolate.target(p1 = target);
      return greatArc;
    };
    greatArc.precision = function(_) {
      if (!arguments.length) return precision / d3_geo_radians;
      precision = _ * d3_geo_radians;
      return greatArc;
    };
    return greatArc;
  };
  d3.geo.greatCircle = d3.geo.circle;
  d3.geom = {};
  d3.geom.contour = function(grid, start) {
    var s = start || d3_geom_contourStart(grid), c = [], x = s[0], y = s[1], dx = 0, dy = 0, pdx = NaN, pdy = NaN, i = 0;
    do {
      i = 0;
      if (grid(x - 1, y - 1)) i += 1;
      if (grid(x, y - 1)) i += 2;
      if (grid(x - 1, y)) i += 4;
      if (grid(x, y)) i += 8;
      if (i === 6) {
        dx = pdy === -1 ? -1 : 1;
        dy = 0;
      } else if (i === 9) {
        dx = 0;
        dy = pdx === 1 ? -1 : 1;
      } else {
        dx = d3_geom_contourDx[i];
        dy = d3_geom_contourDy[i];
      }
      if (dx != pdx && dy != pdy) {
        c.push([ x, y ]);
        pdx = dx;
        pdy = dy;
      }
      x += dx;
      y += dy;
    } while (s[0] != x || s[1] != y);
    return c;
  };
  var d3_geom_contourDx = [ 1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 0, 0, -1, 0, -1, NaN ], d3_geom_contourDy = [ 0, -1, 0, 0, 0, -1, 0, 0, 1, -1, 1, 1, 0, -1, 0, NaN ];
  d3.geom.hull = function(vertices) {
    if (vertices.length < 3) return [];
    var len = vertices.length, plen = len - 1, points = [], stack = [], i, j, h = 0, x1, y1, x2, y2, u, v, a, sp;
    for (i = 1; i < len; ++i) {
      if (vertices[i][1] < vertices[h][1]) {
        h = i;
      } else if (vertices[i][1] == vertices[h][1]) {
        h = vertices[i][0] < vertices[h][0] ? i : h;
      }
    }
    for (i = 0; i < len; ++i) {
      if (i === h) continue;
      y1 = vertices[i][1] - vertices[h][1];
      x1 = vertices[i][0] - vertices[h][0];
      points.push({
        angle: Math.atan2(y1, x1),
        index: i
      });
    }
    points.sort(function(a, b) {
      return a.angle - b.angle;
    });
    a = points[0].angle;
    v = points[0].index;
    u = 0;
    for (i = 1; i < plen; ++i) {
      j = points[i].index;
      if (a == points[i].angle) {
        x1 = vertices[v][0] - vertices[h][0];
        y1 = vertices[v][1] - vertices[h][1];
        x2 = vertices[j][0] - vertices[h][0];
        y2 = vertices[j][1] - vertices[h][1];
        if (x1 * x1 + y1 * y1 >= x2 * x2 + y2 * y2) {
          points[i].index = -1;
        } else {
          points[u].index = -1;
          a = points[i].angle;
          u = i;
          v = j;
        }
      } else {
        a = points[i].angle;
        u = i;
        v = j;
      }
    }
    stack.push(h);
    for (i = 0, j = 0; i < 2; ++j) {
      if (points[j].index !== -1) {
        stack.push(points[j].index);
        i++;
      }
    }
    sp = stack.length;
    for (; j < plen; ++j) {
      if (points[j].index === -1) continue;
      while (!d3_geom_hullCCW(stack[sp - 2], stack[sp - 1], points[j].index, vertices)) {
        --sp;
      }
      stack[sp++] = points[j].index;
    }
    var poly = [];
    for (i = 0; i < sp; ++i) {
      poly.push(vertices[stack[i]]);
    }
    return poly;
  };
  d3.geom.polygon = function(coordinates) {
    coordinates.area = function() {
      var i = 0, n = coordinates.length, a = coordinates[n - 1][0] * coordinates[0][1], b = coordinates[n - 1][1] * coordinates[0][0];
      while (++i < n) {
        a += coordinates[i - 1][0] * coordinates[i][1];
        b += coordinates[i - 1][1] * coordinates[i][0];
      }
      return (b - a) * .5;
    };
    coordinates.centroid = function(k) {
      var i = -1, n = coordinates.length, x = 0, y = 0, a, b = coordinates[n - 1], c;
      if (!arguments.length) k = -1 / (6 * coordinates.area());
      while (++i < n) {
        a = b;
        b = coordinates[i];
        c = a[0] * b[1] - b[0] * a[1];
        x += (a[0] + b[0]) * c;
        y += (a[1] + b[1]) * c;
      }
      return [ x * k, y * k ];
    };
    coordinates.clip = function(subject) {
      var input, i = -1, n = coordinates.length, j, m, a = coordinates[n - 1], b, c, d;
      while (++i < n) {
        input = subject.slice();
        subject.length = 0;
        b = coordinates[i];
        c = input[(m = input.length) - 1];
        j = -1;
        while (++j < m) {
          d = input[j];
          if (d3_geom_polygonInside(d, a, b)) {
            if (!d3_geom_polygonInside(c, a, b)) {
              subject.push(d3_geom_polygonIntersect(c, d, a, b));
            }
            subject.push(d);
          } else if (d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          c = d;
        }
        a = b;
      }
      return subject;
    };
    return coordinates;
  };
  d3.geom.voronoi = function(vertices) {
    var polygons = vertices.map(function() {
      return [];
    });
    d3_voronoi_tessellate(vertices, function(e) {
      var s1, s2, x1, x2, y1, y2;
      if (e.a === 1 && e.b >= 0) {
        s1 = e.ep.r;
        s2 = e.ep.l;
      } else {
        s1 = e.ep.l;
        s2 = e.ep.r;
      }
      if (e.a === 1) {
        y1 = s1 ? s1.y : -1e6;
        x1 = e.c - e.b * y1;
        y2 = s2 ? s2.y : 1e6;
        x2 = e.c - e.b * y2;
      } else {
        x1 = s1 ? s1.x : -1e6;
        y1 = e.c - e.a * x1;
        x2 = s2 ? s2.x : 1e6;
        y2 = e.c - e.a * x2;
      }
      var v1 = [ x1, y1 ], v2 = [ x2, y2 ];
      polygons[e.region.l.index].push(v1, v2);
      polygons[e.region.r.index].push(v1, v2);
    });
    return polygons.map(function(polygon, i) {
      var cx = vertices[i][0], cy = vertices[i][1];
      polygon.forEach(function(v) {
        v.angle = Math.atan2(v[0] - cx, v[1] - cy);
      });
      return polygon.sort(function(a, b) {
        return a.angle - b.angle;
      }).filter(function(d, i) {
        return !i || d.angle - polygon[i - 1].angle > 1e-10;
      });
    });
  };
  var d3_voronoi_opposite = {
    l: "r",
    r: "l"
  };
  d3.geom.delaunay = function(vertices) {
    var edges = vertices.map(function() {
      return [];
    }), triangles = [];
    d3_voronoi_tessellate(vertices, function(e) {
      edges[e.region.l.index].push(vertices[e.region.r.index]);
    });
    edges.forEach(function(edge, i) {
      var v = vertices[i], cx = v[0], cy = v[1];
      edge.forEach(function(v) {
        v.angle = Math.atan2(v[0] - cx, v[1] - cy);
      });
      edge.sort(function(a, b) {
        return a.angle - b.angle;
      });
      for (var j = 0, m = edge.length - 1; j < m; j++) {
        triangles.push([ v, edge[j], edge[j + 1] ]);
      }
    });
    return triangles;
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    function insert(n, p, x1, y1, x2, y2) {
      if (isNaN(p.x) || isNaN(p.y)) return;
      if (n.leaf) {
        var v = n.point;
        if (v) {
          if (Math.abs(v.x - p.x) + Math.abs(v.y - p.y) < .01) {
            insertChild(n, p, x1, y1, x2, y2);
          } else {
            n.point = null;
            insertChild(n, v, x1, y1, x2, y2);
            insertChild(n, p, x1, y1, x2, y2);
          }
        } else {
          n.point = p;
        }
      } else {
        insertChild(n, p, x1, y1, x2, y2);
      }
    }
    function insertChild(n, p, x1, y1, x2, y2) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, right = p.x >= sx, bottom = p.y >= sy, i = (bottom << 1) + right;
      n.leaf = false;
      n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
      if (right) x1 = sx; else x2 = sx;
      if (bottom) y1 = sy; else y2 = sy;
      insert(n, p, x1, y1, x2, y2);
    }
    var p, i = -1, n = points.length;
    if (n && isNaN(points[0].x)) points = points.map(d3_geom_quadtreePoint);
    if (arguments.length < 5) {
      if (arguments.length === 3) {
        y2 = x2 = y1;
        y1 = x1;
      } else {
        x1 = y1 = Infinity;
        x2 = y2 = -Infinity;
        while (++i < n) {
          p = points[i];
          if (p.x < x1) x1 = p.x;
          if (p.y < y1) y1 = p.y;
          if (p.x > x2) x2 = p.x;
          if (p.y > y2) y2 = p.y;
        }
        var dx = x2 - x1, dy = y2 - y1;
        if (dx > dy) y2 = y1 + dx; else x2 = x1 + dy;
      }
    }
    var root = d3_geom_quadtreeNode();
    root.add = function(p) {
      insert(root, p, x1, y1, x2, y2);
    };
    root.visit = function(f) {
      d3_geom_quadtreeVisit(f, root, x1, y1, x2, y2);
    };
    points.forEach(root.add);
    return root;
  };
  d3.time = {};
  var d3_time = Date, d3_time_daySymbols = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  d3_time_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  var d3_time_formatDateTime = "%a %b %e %H:%M:%S %Y", d3_time_formatDate = "%m/%d/%y", d3_time_formatTime = "%H:%M:%S";
  var d3_time_days = d3_time_daySymbols, d3_time_dayAbbreviations = d3_time_days.map(d3_time_formatAbbreviate), d3_time_months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], d3_time_monthAbbreviations = d3_time_months.map(d3_time_formatAbbreviate);
  d3.time.format = function(template) {
    function format(date) {
      var string = [], i = -1, j = 0, c, f;
      while (++i < n) {
        if (template.charCodeAt(i) == 37) {
          string.push(template.substring(j, i), (f = d3_time_formats[c = template.charAt(++i)]) ? f(date) : c);
          j = i + 1;
        }
      }
      string.push(template.substring(j, i));
      return string.join("");
    }
    var n = template.length;
    format.parse = function(string) {
      var d = {
        y: 1900,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }, i = d3_time_parse(d, template, string, 0);
      if (i != string.length) return null;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      var date = new d3_time;
      date.setFullYear(d.y, d.m, d.d);
      date.setHours(d.H, d.M, d.S, d.L);
      return date;
    };
    format.toString = function() {
      return template;
    };
    return format;
  };
  var d3_time_zfill2 = d3.format("02d"), d3_time_zfill3 = d3.format("03d"), d3_time_zfill4 = d3.format("04d"), d3_time_sfill2 = d3.format("2d");
  var d3_time_dayRe = d3_time_formatRe(d3_time_days), d3_time_dayAbbrevRe = d3_time_formatRe(d3_time_dayAbbreviations), d3_time_monthRe = d3_time_formatRe(d3_time_months), d3_time_monthLookup = d3_time_formatLookup(d3_time_months), d3_time_monthAbbrevRe = d3_time_formatRe(d3_time_monthAbbreviations), d3_time_monthAbbrevLookup = d3_time_formatLookup(d3_time_monthAbbreviations);
  var d3_time_formats = {
    a: function(d) {
      return d3_time_dayAbbreviations[d.getDay()];
    },
    A: function(d) {
      return d3_time_days[d.getDay()];
    },
    b: function(d) {
      return d3_time_monthAbbreviations[d.getMonth()];
    },
    B: function(d) {
      return d3_time_months[d.getMonth()];
    },
    c: d3.time.format(d3_time_formatDateTime),
    d: function(d) {
      return d3_time_zfill2(d.getDate());
    },
    e: function(d) {
      return d3_time_sfill2(d.getDate());
    },
    H: function(d) {
      return d3_time_zfill2(d.getHours());
    },
    I: function(d) {
      return d3_time_zfill2(d.getHours() % 12 || 12);
    },
    j: function(d) {
      return d3_time_zfill3(1 + d3.time.dayOfYear(d));
    },
    L: function(d) {
      return d3_time_zfill3(d.getMilliseconds());
    },
    m: function(d) {
      return d3_time_zfill2(d.getMonth() + 1);
    },
    M: function(d) {
      return d3_time_zfill2(d.getMinutes());
    },
    p: function(d) {
      return d.getHours() >= 12 ? "PM" : "AM";
    },
    S: function(d) {
      return d3_time_zfill2(d.getSeconds());
    },
    U: function(d) {
      return d3_time_zfill2(d3.time.sundayOfYear(d));
    },
    w: function(d) {
      return d.getDay();
    },
    W: function(d) {
      return d3_time_zfill2(d3.time.mondayOfYear(d));
    },
    x: d3.time.format(d3_time_formatDate),
    X: d3.time.format(d3_time_formatTime),
    y: function(d) {
      return d3_time_zfill2(d.getFullYear() % 100);
    },
    Y: function(d) {
      return d3_time_zfill4(d.getFullYear() % 1e4);
    },
    Z: d3_time_zone,
    "%": function(d) {
      return "%";
    }
  };
  var d3_time_parsers = {
    a: d3_time_parseWeekdayAbbrev,
    A: d3_time_parseWeekday,
    b: d3_time_parseMonthAbbrev,
    B: d3_time_parseMonth,
    c: d3_time_parseLocaleFull,
    d: d3_time_parseDay,
    e: d3_time_parseDay,
    H: d3_time_parseHour24,
    I: d3_time_parseHour24,
    L: d3_time_parseMilliseconds,
    m: d3_time_parseMonthNumber,
    M: d3_time_parseMinutes,
    p: d3_time_parseAmPm,
    S: d3_time_parseSeconds,
    x: d3_time_parseLocaleDate,
    X: d3_time_parseLocaleTime,
    y: d3_time_parseYear,
    Y: d3_time_parseFullYear
  };
  var d3_time_numberRe = /^\s*\d+/;
  var d3_time_amPmLookup = d3.map({
    am: 0,
    pm: 1
  });
  d3.time.format.utc = function(template) {
    function format(date) {
      try {
        d3_time = d3_time_utc;
        var utc = new d3_time;
        utc._ = date;
        return local(utc);
      } finally {
        d3_time = Date;
      }
    }
    var local = d3.time.format(template);
    format.parse = function(string) {
      try {
        d3_time = d3_time_utc;
        var date = local.parse(string);
        return date && date._;
      } finally {
        d3_time = Date;
      }
    };
    format.toString = local.toString;
    return format;
  };
  var d3_time_formatIso = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3.time.format.iso = Date.prototype.toISOString ? d3_time_formatIsoNative : d3_time_formatIso;
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3.time.second = d3_time_interval(function(date) {
    return new d3_time(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3.time.seconds = d3.time.second.range;
  d3.time.seconds.utc = d3.time.second.utc.range;
  d3.time.minute = d3_time_interval(function(date) {
    return new d3_time(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3.time.minutes = d3.time.minute.range;
  d3.time.minutes.utc = d3.time.minute.utc.range;
  d3.time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_time((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3.time.hours = d3.time.hour.range;
  d3.time.hours.utc = d3.time.hour.utc.range;
  d3.time.day = d3_time_interval(function(date) {
    var day = new d3_time(1970, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3.time.days = d3.time.day.range;
  d3.time.days.utc = d3.time.day.utc.range;
  d3.time.dayOfYear = function(date) {
    var year = d3.time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  d3_time_daySymbols.forEach(function(day, i) {
    day = day.toLowerCase();
    i = 7 - i;
    var interval = d3.time[day] = d3_time_interval(function(date) {
      (date = d3.time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3.time.year(date).getDay();
      return Math.floor((d3.time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3.time[day + "s"] = interval.range;
    d3.time[day + "s"].utc = interval.utc.range;
    d3.time[day + "OfYear"] = function(date) {
      var day = d3.time.year(date).getDay();
      return Math.floor((d3.time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3.time.week = d3.time.sunday;
  d3.time.weeks = d3.time.sunday.range;
  d3.time.weeks.utc = d3.time.sunday.utc.range;
  d3.time.weekOfYear = d3.time.sundayOfYear;
  d3.time.month = d3_time_interval(function(date) {
    date = d3.time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3.time.months = d3.time.month.range;
  d3.time.months.utc = d3.time.month.utc.range;
  d3.time.year = d3_time_interval(function(date) {
    date = d3.time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3.time.years = d3.time.year.range;
  d3.time.years.utc = d3.time.year.utc.range;
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3.time.second, 1 ], [ d3.time.second, 5 ], [ d3.time.second, 15 ], [ d3.time.second, 30 ], [ d3.time.minute, 1 ], [ d3.time.minute, 5 ], [ d3.time.minute, 15 ], [ d3.time.minute, 30 ], [ d3.time.hour, 1 ], [ d3.time.hour, 3 ], [ d3.time.hour, 6 ], [ d3.time.hour, 12 ], [ d3.time.day, 1 ], [ d3.time.day, 2 ], [ d3.time.week, 1 ], [ d3.time.month, 1 ], [ d3.time.month, 3 ], [ d3.time.year, 1 ] ];
  var d3_time_scaleLocalFormats = [ [ d3.time.format("%Y"), function(d) {
    return true;
  } ], [ d3.time.format("%B"), function(d) {
    return d.getMonth();
  } ], [ d3.time.format("%b %d"), function(d) {
    return d.getDate() != 1;
  } ], [ d3.time.format("%a %d"), function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ d3.time.format("%I %p"), function(d) {
    return d.getHours();
  } ], [ d3.time.format("%I:%M"), function(d) {
    return d.getMinutes();
  } ], [ d3.time.format(":%S"), function(d) {
    return d.getSeconds();
  } ], [ d3.time.format(".%L"), function(d) {
    return d.getMilliseconds();
  } ] ];
  var d3_time_scaleLinear = d3.scale.linear(), d3_time_scaleLocalFormat = d3_time_scaleFormat(d3_time_scaleLocalFormats);
  d3_time_scaleLocalMethods.year = function(extent, m) {
    return d3_time_scaleLinear.domain(extent.map(d3_time_scaleGetYear)).ticks(m).map(d3_time_scaleSetYear);
  };
  d3.time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUTCMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUTCFormats = [ [ d3.time.format.utc("%Y"), function(d) {
    return true;
  } ], [ d3.time.format.utc("%B"), function(d) {
    return d.getUTCMonth();
  } ], [ d3.time.format.utc("%b %d"), function(d) {
    return d.getUTCDate() != 1;
  } ], [ d3.time.format.utc("%a %d"), function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ d3.time.format.utc("%I %p"), function(d) {
    return d.getUTCHours();
  } ], [ d3.time.format.utc("%I:%M"), function(d) {
    return d.getUTCMinutes();
  } ], [ d3.time.format.utc(":%S"), function(d) {
    return d.getUTCSeconds();
  } ], [ d3.time.format.utc(".%L"), function(d) {
    return d.getUTCMilliseconds();
  } ] ];
  var d3_time_scaleUTCFormat = d3_time_scaleFormat(d3_time_scaleUTCFormats);
  d3_time_scaleUTCMethods.year = function(extent, m) {
    return d3_time_scaleLinear.domain(extent.map(d3_time_scaleUTCGetYear)).ticks(m).map(d3_time_scaleUTCSetYear);
  };
  d3.time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUTCMethods, d3_time_scaleUTCFormat);
  };
})();