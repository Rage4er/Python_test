var Xx=Object.defineProperty;var jx=(t,e,n)=>e in t?Xx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ce=(t,e,n)=>jx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function N0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F0={exports:{}},tu={},O0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wa=Symbol.for("react.element"),Yx=Symbol.for("react.portal"),qx=Symbol.for("react.fragment"),$x=Symbol.for("react.strict_mode"),Kx=Symbol.for("react.profiler"),Zx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),Jx=Symbol.for("react.forward_ref"),ey=Symbol.for("react.suspense"),ty=Symbol.for("react.memo"),ny=Symbol.for("react.lazy"),yp=Symbol.iterator;function iy(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var k0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B0=Object.assign,z0={};function Lo(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||k0}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H0(){}H0.prototype=Lo.prototype;function ch(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||k0}var uh=ch.prototype=new H0;uh.constructor=ch;B0(uh,Lo.prototype);uh.isPureReactComponent=!0;var Sp=Array.isArray,V0=Object.prototype.hasOwnProperty,fh={current:null},G0={key:!0,ref:!0,__self:!0,__source:!0};function W0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)V0.call(e,i)&&!G0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wa,type:t,key:s,ref:o,props:r,_owner:fh.current}}function ry(t,e){return{$$typeof:Wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wa}function sy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mp=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sy(""+t.key):e.toString(36)}function oc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wa:case Yx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pu(o,0):i,Sp(r)?(n="",t!=null&&(n=t.replace(Mp,"$&/")+"/"),oc(r,e,n,"",function(c){return c})):r!=null&&(dh(r)&&(r=ry(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Mp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Sp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pu(s,a);o+=oc(s,e,n,l,r)}else if(l=iy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,a++),o+=oc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return oc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function oy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},ac={transition:null},ay={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:ac,ReactCurrentOwner:fh};function X0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Lo;Xe.Fragment=qx;Xe.Profiler=Kx;Xe.PureComponent=ch;Xe.StrictMode=$x;Xe.Suspense=ey;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ay;Xe.act=X0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=B0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)V0.call(e,l)&&!G0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Wa,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:Qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zx,_context:t},t.Consumer=t};Xe.createElement=W0;Xe.createFactory=function(t){var e=W0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Jx,render:t}};Xe.isValidElement=dh;Xe.lazy=function(t){return{$$typeof:ny,_payload:{_status:-1,_result:t},_init:oy}};Xe.memo=function(t,e){return{$$typeof:ty,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=ac.transition;ac.transition={};try{t()}finally{ac.transition=e}};Xe.unstable_act=X0;Xe.useCallback=function(t,e){return hn.current.useCallback(t,e)};Xe.useContext=function(t){return hn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return hn.current.useEffect(t,e)};Xe.useId=function(){return hn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return hn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};Xe.useRef=function(t){return hn.current.useRef(t)};Xe.useState=function(t){return hn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return hn.current.useTransition()};Xe.version="18.3.1";O0.exports=Xe;var Gt=O0.exports;const j0=N0(Gt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=Gt,cy=Symbol.for("react.element"),uy=Symbol.for("react.fragment"),fy=Object.prototype.hasOwnProperty,dy=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hy={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fy.call(e,i)&&!hy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:cy,type:t,key:s,ref:o,props:r,_owner:dy.current}}tu.Fragment=uy;tu.jsx=Y0;tu.jsxs=Y0;F0.exports=tu;var ne=F0.exports,Qf={},q0={exports:{}},Un={},$0={exports:{}},K0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var Z=N.length;N.push(q);e:for(;0<Z;){var se=Z-1>>>1,ve=N[se];if(0<r(ve,q))N[se]=q,N[Z]=ve,Z=se;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],Z=N.pop();if(Z!==q){N[0]=Z;e:for(var se=0,ve=N.length,He=ve>>>1;se<He;){var $=2*(se+1)-1,re=N[$],pe=$+1,le=N[pe];if(0>r(re,Z))pe<ve&&0>r(le,re)?(N[se]=le,N[pe]=Z,se=pe):(N[se]=re,N[$]=Z,se=$);else if(pe<ve&&0>r(le,Z))N[se]=le,N[pe]=Z,se=pe;else break e}}return q}function r(N,q){var Z=N.sortIndex-q.sortIndex;return Z!==0?Z:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,u=3,p=!1,v=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=N)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function y(N){if(x=!1,_(N),!v)if(n(l)!==null)v=!0,z(A);else{var q=n(c);q!==null&&K(y,q.startTime-N)}}function A(N,q){v=!1,x&&(x=!1,h(b),b=-1),p=!0;var Z=u;try{for(_(q),d=n(l);d!==null&&(!(d.expirationTime>q)||N&&!P());){var se=d.callback;if(typeof se=="function"){d.callback=null,u=d.priorityLevel;var ve=se(d.expirationTime<=q);q=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&i(l),_(q)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var $=n(c);$!==null&&K(y,$.startTime-q),He=!1}return He}finally{d=null,u=Z,p=!1}}var w=!1,T=null,b=-1,M=5,S=-1;function P(){return!(t.unstable_now()-S<M)}function I(){if(T!==null){var N=t.unstable_now();S=N;var q=!0;try{q=T(!0,N)}finally{q?U():(w=!1,T=null)}}else w=!1}var U;if(typeof m=="function")U=function(){m(I)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,H=O.port2;O.port1.onmessage=I,U=function(){H.postMessage(null)}}else U=function(){g(I,0)};function z(N){T=N,w||(w=!0,U())}function K(N,q){b=g(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,z(A))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(u){case 1:case 2:case 3:var q=3;break;default:q=u}var Z=u;u=q;try{return N()}finally{u=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=u;u=N;try{return q()}finally{u=Z}},t.unstable_scheduleCallback=function(N,q,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,N){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,N={id:f++,callback:q,priorityLevel:N,startTime:Z,expirationTime:ve,sortIndex:-1},Z>se?(N.sortIndex=Z,e(c,N),n(l)===null&&N===n(c)&&(x?(h(b),b=-1):x=!0,K(y,Z-se))):(N.sortIndex=ve,e(l,N),v||p||(v=!0,z(A))),N},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(N){var q=u;return function(){var Z=u;u=q;try{return N.apply(this,arguments)}finally{u=Z}}}})(K0);$0.exports=K0;var py=$0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=Gt,Dn=py;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z0=new Set,Aa={};function cs(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(Aa[t]=e,t=0;t<e.length;t++)Z0.add(e[t])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jf=Object.prototype.hasOwnProperty,gy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ep={},wp={};function _y(t){return Jf.call(wp,t)?!0:Jf.call(Ep,t)?!1:gy.test(t)?wp[t]=!0:(Ep[t]=!0,!1)}function vy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xy(t,e,n,i){if(e===null||typeof e>"u"||vy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var hh=/[\-:]([a-z])/g;function ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hh,ph);$t[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hh,ph);$t[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hh,ph);$t[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function mh(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xy(e,n,r,i)&&(n=null),i||r===null?_y(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xi=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),ed=Symbol.for("react.profiler"),Q0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),nd=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),e_=Symbol.for("react.offscreen"),Tp=Symbol.iterator;function ko(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Lu;function sa(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Iu=!1;function Du(t,e){if(!t||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function yy(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=Du(t.type,!1),t;case 11:return t=Du(t.type.render,!1),t;case 1:return t=Du(t.type,!0),t;default:return""}}function id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xs:return"Fragment";case Ws:return"Portal";case ed:return"Profiler";case gh:return"StrictMode";case td:return"Suspense";case nd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J0:return(t.displayName||"Context")+".Consumer";case Q0:return(t._context.displayName||"Context")+".Provider";case _h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vh:return e=t.displayName||null,e!==null?e:id(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return id(t(e))}catch{}}return null}function Sy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return id(e);case 8:return e===gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function t_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function My(t){var e=t_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=My(t))}function n_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=t_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rd(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ap(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function i_(t,e){e=e.checked,e!=null&&mh(t,"checked",e,!1)}function sd(t,e){i_(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?od(t,e.type,n):e.hasOwnProperty("defaultValue")&&od(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function od(t,e,n){(e!=="number"||Sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function oo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(oa(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function r_(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ld(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,o_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ey=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){Ey.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function a_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function l_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=a_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var wy=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cd(t,e){if(e){if(wy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function ud(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fd=null;function xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dd=null,ao=null,lo=null;function Pp(t){if(t=Ya(t)){if(typeof dd!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=ou(e),dd(t.stateNode,t.type,e))}}function c_(t){ao?lo?lo.push(t):lo=[t]:ao=t}function u_(){if(ao){var t=ao,e=lo;if(lo=ao=null,Pp(t),e)for(t=0;t<e.length;t++)Pp(e[t])}}function f_(t,e){return t(e)}function d_(){}var Uu=!1;function h_(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return f_(t,e,n)}finally{Uu=!1,(ao!==null||lo!==null)&&(d_(),u_())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var i=ou(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var hd=!1;if(zi)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){hd=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{hd=!1}function Ty(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var pa=!1,Mc=null,Ec=!1,pd=null,Ay={onError:function(t){pa=!0,Mc=t}};function Cy(t,e,n,i,r,s,o,a,l){pa=!1,Mc=null,Ty.apply(Ay,arguments)}function by(t,e,n,i,r,s,o,a,l){if(Cy.apply(this,arguments),pa){if(pa){var c=Mc;pa=!1,Mc=null}else throw Error(ie(198));Ec||(Ec=!0,pd=c)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lp(t){if(us(t)!==t)throw Error(ie(188))}function Ry(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Lp(r),t;if(s===i)return Lp(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function m_(t){return t=Ry(t),t!==null?g_(t):null}function g_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=g_(t);if(e!==null)return e;t=t.sibling}return null}var __=Dn.unstable_scheduleCallback,Ip=Dn.unstable_cancelCallback,Py=Dn.unstable_shouldYield,Ly=Dn.unstable_requestPaint,wt=Dn.unstable_now,Iy=Dn.unstable_getCurrentPriorityLevel,yh=Dn.unstable_ImmediatePriority,v_=Dn.unstable_UserBlockingPriority,wc=Dn.unstable_NormalPriority,Dy=Dn.unstable_LowPriority,x_=Dn.unstable_IdlePriority,nu=null,Si=null;function Uy(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(nu,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:Oy,Ny=Math.log,Fy=Math.LN2;function Oy(t){return t>>>=0,t===0?32:31-(Ny(t)/Fy|0)|0}var il=64,rl=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=aa(a):(s&=o,s!==0&&(i=aa(s)))}else o=n&~r,o!==0?i=aa(o):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function ky(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function By(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ky(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function md(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function y_(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function zy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function S_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M_,Mh,E_,w_,T_,gd=!1,sl=[],pr=null,mr=null,gr=null,Ra=new Map,Pa=new Map,or=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dp(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(e.pointerId)}}function zo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ya(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Vy(t,e,n,i,r){switch(e){case"focusin":return pr=zo(pr,t,e,n,i,r),!0;case"dragenter":return mr=zo(mr,t,e,n,i,r),!0;case"mouseover":return gr=zo(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ra.set(s,zo(Ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Pa.set(s,zo(Pa.get(s)||null,t,e,n,i,r)),!0}return!1}function A_(t){var e=Kr(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=p_(n),e!==null){t.blockedOn=e,T_(t.priority,function(){E_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);fd=i,n.target.dispatchEvent(i),fd=null}else return e=Ya(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function Up(t,e,n){lc(t)&&n.delete(e)}function Gy(){gd=!1,pr!==null&&lc(pr)&&(pr=null),mr!==null&&lc(mr)&&(mr=null),gr!==null&&lc(gr)&&(gr=null),Ra.forEach(Up),Pa.forEach(Up)}function Ho(t,e){t.blockedOn===e&&(t.blockedOn=null,gd||(gd=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,Gy)))}function La(t){function e(r){return Ho(r,t)}if(0<sl.length){Ho(sl[0],t);for(var n=1;n<sl.length;n++){var i=sl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&Ho(pr,t),mr!==null&&Ho(mr,t),gr!==null&&Ho(gr,t),Ra.forEach(e),Pa.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)A_(n),n.blockedOn===null&&or.shift()}var co=Xi.ReactCurrentBatchConfig,Ac=!0;function Wy(t,e,n,i){var r=tt,s=co.transition;co.transition=null;try{tt=1,Eh(t,e,n,i)}finally{tt=r,co.transition=s}}function Xy(t,e,n,i){var r=tt,s=co.transition;co.transition=null;try{tt=4,Eh(t,e,n,i)}finally{tt=r,co.transition=s}}function Eh(t,e,n,i){if(Ac){var r=_d(t,e,n,i);if(r===null)Xu(t,e,i,Cc,n),Dp(t,i);else if(Vy(r,t,e,n,i))i.stopPropagation();else if(Dp(t,i),e&4&&-1<Hy.indexOf(t)){for(;r!==null;){var s=Ya(r);if(s!==null&&M_(s),s=_d(t,e,n,i),s===null&&Xu(t,e,i,Cc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xu(t,e,i,null,n)}}var Cc=null;function _d(t,e,n,i){if(Cc=null,t=xh(i),t=Kr(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=p_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cc=t,null}function C_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iy()){case yh:return 1;case v_:return 4;case wc:case Dy:return 16;case x_:return 536870912;default:return 16}default:return 16}}var ur=null,wh=null,cc=null;function b_(){if(cc)return cc;var t,e=wh,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return cc=r.slice(t,1<i?1-i:void 0)}function uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function Np(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:Np,this.isPropagationStopped=Np,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Th=Nn(Io),ja=gt({},Io,{view:0,detail:0}),jy=Nn(ja),Fu,Ou,Vo,iu=gt({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ah,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(Fu=t.screenX-Vo.screenX,Ou=t.screenY-Vo.screenY):Ou=Fu=0,Vo=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),Fp=Nn(iu),Yy=gt({},iu,{dataTransfer:0}),qy=Nn(Yy),$y=gt({},ja,{relatedTarget:0}),ku=Nn($y),Ky=gt({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),Zy=Nn(Ky),Qy=gt({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jy=Nn(Qy),eS=gt({},Io,{data:0}),Op=Nn(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iS[t])?!!e[t]:!1}function Ah(){return rS}var sS=gt({},ja,{key:function(t){if(t.key){var e=tS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ah,charCode:function(t){return t.type==="keypress"?uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oS=Nn(sS),aS=gt({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=Nn(aS),lS=gt({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ah}),cS=Nn(lS),uS=gt({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=Nn(uS),dS=gt({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=Nn(dS),pS=[9,13,27,32],Ch=zi&&"CompositionEvent"in window,ma=null;zi&&"documentMode"in document&&(ma=document.documentMode);var mS=zi&&"TextEvent"in window&&!ma,R_=zi&&(!Ch||ma&&8<ma&&11>=ma),Bp=" ",zp=!1;function P_(t,e){switch(t){case"keyup":return pS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function gS(t,e){switch(t){case"compositionend":return L_(e);case"keypress":return e.which!==32?null:(zp=!0,Bp);case"textInput":return t=e.data,t===Bp&&zp?null:t;default:return null}}function _S(t,e){if(js)return t==="compositionend"||!Ch&&P_(t,e)?(t=b_(),cc=wh=ur=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R_&&e.locale!=="ko"?null:e.data;default:return null}}var vS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vS[t.type]:e==="textarea"}function I_(t,e,n,i){c_(i),e=bc(e,"onChange"),0<e.length&&(n=new Th("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ga=null,Ia=null;function xS(t){G_(t,0)}function ru(t){var e=$s(t);if(n_(e))return t}function yS(t,e){if(t==="change")return e}var D_=!1;if(zi){var Bu;if(zi){var zu="oninput"in document;if(!zu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),zu=typeof Vp.oninput=="function"}Bu=zu}else Bu=!1;D_=Bu&&(!document.documentMode||9<document.documentMode)}function Gp(){ga&&(ga.detachEvent("onpropertychange",U_),Ia=ga=null)}function U_(t){if(t.propertyName==="value"&&ru(Ia)){var e=[];I_(e,Ia,t,xh(t)),h_(xS,e)}}function SS(t,e,n){t==="focusin"?(Gp(),ga=e,Ia=n,ga.attachEvent("onpropertychange",U_)):t==="focusout"&&Gp()}function MS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(Ia)}function ES(t,e){if(t==="click")return ru(e)}function wS(t,e){if(t==="input"||t==="change")return ru(e)}function TS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:TS;function Da(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Jf.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function Wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,e){var n=Wp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function N_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?N_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function F_(){for(var t=window,e=Sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AS(t){var e=F_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&N_(n.ownerDocument.documentElement,n)){if(i!==null&&bh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Xp(n,s);var o=Xp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CS=zi&&"documentMode"in document&&11>=document.documentMode,Ys=null,vd=null,_a=null,xd=!1;function jp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xd||Ys==null||Ys!==Sc(i)||(i=Ys,"selectionStart"in i&&bh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&Da(_a,i)||(_a=i,i=bc(vd,"onSelect"),0<i.length&&(e=new Th("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ys)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Hu={},O_={};zi&&(O_=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function su(t){if(Hu[t])return Hu[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O_)return Hu[t]=e[n];return t}var k_=su("animationend"),B_=su("animationiteration"),z_=su("animationstart"),H_=su("transitionend"),V_=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){V_.set(t,e),cs(e,[t])}for(var Vu=0;Vu<Yp.length;Vu++){var Gu=Yp[Vu],bS=Gu.toLowerCase(),RS=Gu[0].toUpperCase()+Gu.slice(1);Rr(bS,"on"+RS)}Rr(k_,"onAnimationEnd");Rr(B_,"onAnimationIteration");Rr(z_,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(H_,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PS=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function qp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,by(i,e,void 0,t),t.currentTarget=null}function G_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,c),s=l}}}if(Ec)throw t=pd,Ec=!1,pd=null,t}function ot(t,e){var n=e[wd];n===void 0&&(n=e[wd]=new Set);var i=t+"__bubble";n.has(i)||(W_(e,t,2,!1),n.add(i))}function Wu(t,e,n){var i=0;e&&(i|=4),W_(n,t,i,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[ll]){t[ll]=!0,Z0.forEach(function(n){n!=="selectionchange"&&(PS.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,Wu("selectionchange",!1,e))}}function W_(t,e,n,i){switch(C_(e)){case 1:var r=Wy;break;case 4:r=Xy;break;default:r=Eh}n=r.bind(null,e,n,t),r=void 0,!hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}h_(function(){var c=s,f=xh(n),d=[];e:{var u=V_.get(t);if(u!==void 0){var p=Th,v=t;switch(t){case"keypress":if(uc(n)===0)break e;case"keydown":case"keyup":p=oS;break;case"focusin":v="focus",p=ku;break;case"focusout":v="blur",p=ku;break;case"beforeblur":case"afterblur":p=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cS;break;case k_:case B_:case z_:p=Zy;break;case H_:p=fS;break;case"scroll":p=jy;break;case"wheel":p=hS;break;case"copy":case"cut":case"paste":p=Jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=kp}var x=(e&4)!==0,g=!x&&t==="scroll",h=x?u!==null?u+"Capture":null:u;x=[];for(var m=c,_;m!==null;){_=m;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,h!==null&&(y=ba(m,h),y!=null&&x.push(Na(m,y,_)))),g)break;m=m.return}0<x.length&&(u=new p(u,v,null,n,f),d.push({event:u,listeners:x}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==fd&&(v=n.relatedTarget||n.fromElement)&&(Kr(v)||v[Hi]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Kr(v):null,v!==null&&(g=us(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Fp,y="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=kp,y="onPointerLeave",h="onPointerEnter",m="pointer"),g=p==null?u:$s(p),_=v==null?u:$s(v),u=new x(y,m+"leave",p,n,f),u.target=g,u.relatedTarget=_,y=null,Kr(f)===c&&(x=new x(h,m+"enter",v,n,f),x.target=_,x.relatedTarget=g,y=x),g=y,p&&v)t:{for(x=p,h=v,m=0,_=x;_;_=ds(_))m++;for(_=0,y=h;y;y=ds(y))_++;for(;0<m-_;)x=ds(x),m--;for(;0<_-m;)h=ds(h),_--;for(;m--;){if(x===h||h!==null&&x===h.alternate)break t;x=ds(x),h=ds(h)}x=null}else x=null;p!==null&&$p(d,u,p,x,!1),v!==null&&g!==null&&$p(d,g,v,x,!0)}}e:{if(u=c?$s(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var A=yS;else if(Hp(u))if(D_)A=wS;else{A=MS;var w=SS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(A=ES);if(A&&(A=A(t,c))){I_(d,A,n,f);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&od(u,"number",u.value)}switch(w=c?$s(c):window,t){case"focusin":(Hp(w)||w.contentEditable==="true")&&(Ys=w,vd=c,_a=null);break;case"focusout":_a=vd=Ys=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,jp(d,n,f);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":jp(d,n,f)}var T;if(Ch)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else js?P_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(R_&&n.locale!=="ko"&&(js||b!=="onCompositionStart"?b==="onCompositionEnd"&&js&&(T=b_()):(ur=f,wh="value"in ur?ur.value:ur.textContent,js=!0)),w=bc(c,b),0<w.length&&(b=new Op(b,t,null,n,f),d.push({event:b,listeners:w}),T?b.data=T:(T=L_(n),T!==null&&(b.data=T)))),(T=mS?gS(t,n):_S(t,n))&&(c=bc(c,"onBeforeInput"),0<c.length&&(f=new Op("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}G_(d,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ba(t,n),s!=null&&i.unshift(Na(t,s,r)),s=ba(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $p(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ba(n,s),l!=null&&o.unshift(Na(n,l,a))):r||(l=ba(n,s),l!=null&&o.push(Na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var LS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function Kp(t){return(typeof t=="string"?t:""+t).replace(LS,`
`).replace(IS,"")}function cl(t,e,n){if(e=Kp(e),Kp(t)!==e&&n)throw Error(ie(425))}function Rc(){}var yd=null,Sd=null;function Md(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ed=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(t){return Zp.resolve(null).then(t).catch(NS)}:Ed;function NS(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),La(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);La(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),xi="__reactFiber$"+Do,Fa="__reactProps$"+Do,Hi="__reactContainer$"+Do,wd="__reactEvents$"+Do,FS="__reactListeners$"+Do,OS="__reactHandles$"+Do;function Kr(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qp(t);t!==null;){if(n=t[xi])return n;t=Qp(t)}return e}t=n,n=t.parentNode}return null}function Ya(t){return t=t[xi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function ou(t){return t[Fa]||null}var Td=[],Ks=-1;function Pr(t){return{current:t}}function lt(t){0>Ks||(t.current=Td[Ks],Td[Ks]=null,Ks--)}function st(t,e){Ks++,Td[Ks]=t.current,t.current=e}var Tr={},rn=Pr(Tr),xn=Pr(!1),is=Tr;function _o(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Pc(){lt(xn),lt(rn)}function Jp(t,e,n){if(rn.current!==Tr)throw Error(ie(168));st(rn,e),st(xn,n)}function X_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Sy(t)||"Unknown",r));return gt({},n,i)}function Lc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,is=rn.current,st(rn,t),st(xn,xn.current),!0}function em(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=X_(t,e,is),i.__reactInternalMemoizedMergedChildContext=t,lt(xn),lt(rn),st(rn,t)):lt(xn),st(xn,n)}var Ui=null,au=!1,Yu=!1;function j_(t){Ui===null?Ui=[t]:Ui.push(t)}function kS(t){au=!0,j_(t)}function Lr(){if(!Yu&&Ui!==null){Yu=!0;var t=0,e=tt;try{var n=Ui;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,au=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),__(yh,Lr),r}finally{tt=e,Yu=!1}}return null}var Zs=[],Qs=0,Ic=null,Dc=0,kn=[],Bn=0,rs=null,Ni=1,Fi="";function Wr(t,e){Zs[Qs++]=Dc,Zs[Qs++]=Ic,Ic=t,Dc=e}function Y_(t,e,n){kn[Bn++]=Ni,kn[Bn++]=Fi,kn[Bn++]=rs,rs=t;var i=Ni;t=Fi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ni=1<<32-ci(e)+r|n<<r|i,Fi=s+t}else Ni=1<<s|n<<r|i,Fi=t}function Rh(t){t.return!==null&&(Wr(t,1),Y_(t,1,0))}function Ph(t){for(;t===Ic;)Ic=Zs[--Qs],Zs[Qs]=null,Dc=Zs[--Qs],Zs[Qs]=null;for(;t===rs;)rs=kn[--Bn],kn[Bn]=null,Fi=kn[--Bn],kn[Bn]=null,Ni=kn[--Bn],kn[Bn]=null}var In=null,Pn=null,dt=!1,oi=null;function q_(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Pn=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:Ni,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Pn=null,!0):!1;default:return!1}}function Ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cd(t){if(dt){var e=Pn;if(e){var n=e;if(!tm(t,e)){if(Ad(t))throw Error(ie(418));e=_r(n.nextSibling);var i=In;e&&tm(t,e)?q_(i,n):(t.flags=t.flags&-4097|2,dt=!1,In=t)}}else{if(Ad(t))throw Error(ie(418));t.flags=t.flags&-4097|2,dt=!1,In=t}}}function nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function ul(t){if(t!==In)return!1;if(!dt)return nm(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Md(t.type,t.memoizedProps)),e&&(e=Pn)){if(Ad(t))throw $_(),Error(ie(418));for(;e;)q_(t,e),e=_r(e.nextSibling)}if(nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=In?_r(t.stateNode.nextSibling):null;return!0}function $_(){for(var t=Pn;t;)t=_r(t.nextSibling)}function vo(){Pn=In=null,dt=!1}function Lh(t){oi===null?oi=[t]:oi.push(t)}var BS=Xi.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function im(t){var e=t._init;return e(t._payload)}function K_(t){function e(h,m){if(t){var _=h.deletions;_===null?(h.deletions=[m],h.flags|=16):_.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=Sr(h,m),h.index=0,h.sibling=null,h}function s(h,m,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<m?(h.flags|=2,m):_):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,_,y){return m===null||m.tag!==6?(m=ef(_,h.mode,y),m.return=h,m):(m=r(m,_),m.return=h,m)}function l(h,m,_,y){var A=_.type;return A===Xs?f(h,m,_.props.children,y,_.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ir&&im(A)===m.type)?(y=r(m,_.props),y.ref=Go(h,m,_),y.return=h,y):(y=_c(_.type,_.key,_.props,null,h.mode,y),y.ref=Go(h,m,_),y.return=h,y)}function c(h,m,_,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=tf(_,h.mode,y),m.return=h,m):(m=r(m,_.children||[]),m.return=h,m)}function f(h,m,_,y,A){return m===null||m.tag!==7?(m=ns(_,h.mode,y,A),m.return=h,m):(m=r(m,_),m.return=h,m)}function d(h,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ef(""+m,h.mode,_),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case el:return _=_c(m.type,m.key,m.props,null,h.mode,_),_.ref=Go(h,null,m),_.return=h,_;case Ws:return m=tf(m,h.mode,_),m.return=h,m;case ir:var y=m._init;return d(h,y(m._payload),_)}if(oa(m)||ko(m))return m=ns(m,h.mode,_,null),m.return=h,m;fl(h,m)}return null}function u(h,m,_,y){var A=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(h,m,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case el:return _.key===A?l(h,m,_,y):null;case Ws:return _.key===A?c(h,m,_,y):null;case ir:return A=_._init,u(h,m,A(_._payload),y)}if(oa(_)||ko(_))return A!==null?null:f(h,m,_,y,null);fl(h,_)}return null}function p(h,m,_,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(_)||null,a(m,h,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case el:return h=h.get(y.key===null?_:y.key)||null,l(m,h,y,A);case Ws:return h=h.get(y.key===null?_:y.key)||null,c(m,h,y,A);case ir:var w=y._init;return p(h,m,_,w(y._payload),A)}if(oa(y)||ko(y))return h=h.get(_)||null,f(m,h,y,A,null);fl(m,y)}return null}function v(h,m,_,y){for(var A=null,w=null,T=m,b=m=0,M=null;T!==null&&b<_.length;b++){T.index>b?(M=T,T=null):M=T.sibling;var S=u(h,T,_[b],y);if(S===null){T===null&&(T=M);break}t&&T&&S.alternate===null&&e(h,T),m=s(S,m,b),w===null?A=S:w.sibling=S,w=S,T=M}if(b===_.length)return n(h,T),dt&&Wr(h,b),A;if(T===null){for(;b<_.length;b++)T=d(h,_[b],y),T!==null&&(m=s(T,m,b),w===null?A=T:w.sibling=T,w=T);return dt&&Wr(h,b),A}for(T=i(h,T);b<_.length;b++)M=p(T,h,b,_[b],y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?b:M.key),m=s(M,m,b),w===null?A=M:w.sibling=M,w=M);return t&&T.forEach(function(P){return e(h,P)}),dt&&Wr(h,b),A}function x(h,m,_,y){var A=ko(_);if(typeof A!="function")throw Error(ie(150));if(_=A.call(_),_==null)throw Error(ie(151));for(var w=A=null,T=m,b=m=0,M=null,S=_.next();T!==null&&!S.done;b++,S=_.next()){T.index>b?(M=T,T=null):M=T.sibling;var P=u(h,T,S.value,y);if(P===null){T===null&&(T=M);break}t&&T&&P.alternate===null&&e(h,T),m=s(P,m,b),w===null?A=P:w.sibling=P,w=P,T=M}if(S.done)return n(h,T),dt&&Wr(h,b),A;if(T===null){for(;!S.done;b++,S=_.next())S=d(h,S.value,y),S!==null&&(m=s(S,m,b),w===null?A=S:w.sibling=S,w=S);return dt&&Wr(h,b),A}for(T=i(h,T);!S.done;b++,S=_.next())S=p(T,h,b,S.value,y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?b:S.key),m=s(S,m,b),w===null?A=S:w.sibling=S,w=S);return t&&T.forEach(function(I){return e(h,I)}),dt&&Wr(h,b),A}function g(h,m,_,y){if(typeof _=="object"&&_!==null&&_.type===Xs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case el:e:{for(var A=_.key,w=m;w!==null;){if(w.key===A){if(A=_.type,A===Xs){if(w.tag===7){n(h,w.sibling),m=r(w,_.props.children),m.return=h,h=m;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ir&&im(A)===w.type){n(h,w.sibling),m=r(w,_.props),m.ref=Go(h,w,_),m.return=h,h=m;break e}n(h,w);break}else e(h,w);w=w.sibling}_.type===Xs?(m=ns(_.props.children,h.mode,y,_.key),m.return=h,h=m):(y=_c(_.type,_.key,_.props,null,h.mode,y),y.ref=Go(h,m,_),y.return=h,h=y)}return o(h);case Ws:e:{for(w=_.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(h,m.sibling),m=r(m,_.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=tf(_,h.mode,y),m.return=h,h=m}return o(h);case ir:return w=_._init,g(h,m,w(_._payload),y)}if(oa(_))return v(h,m,_,y);if(ko(_))return x(h,m,_,y);fl(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,_),m.return=h,h=m):(n(h,m),m=ef(_,h.mode,y),m.return=h,h=m),o(h)):n(h,m)}return g}var xo=K_(!0),Z_=K_(!1),Uc=Pr(null),Nc=null,Js=null,Ih=null;function Dh(){Ih=Js=Nc=null}function Uh(t){var e=Uc.current;lt(Uc),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){Nc=t,Ih=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(Ih!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Nc===null)throw Error(ie(308));Js=t,Nc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var Zr=null;function Nh(t){Zr===null?Zr=[t]:Zr.push(t)}function Q_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function Fh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,Nh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function fc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}function rm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fc(t,e,n,i){var r=t.updateQueue;rr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(u=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,u);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,u=typeof v=="function"?v.call(p,d,u):v,u==null)break e;d=gt({},d,u);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);os|=o,t.lanes=o,t.memoizedState=d}}function sm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var qa={},Mi=Pr(qa),Oa=Pr(qa),ka=Pr(qa);function Qr(t){if(t===qa)throw Error(ie(174));return t}function Oh(t,e){switch(st(ka,e),st(Oa,t),st(Mi,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ld(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ld(e,t)}lt(Mi),st(Mi,e)}function yo(){lt(Mi),lt(Oa),lt(ka)}function ev(t){Qr(ka.current);var e=Qr(Mi.current),n=ld(e,t.type);e!==n&&(st(Oa,t),st(Mi,n))}function kh(t){Oa.current===t&&(lt(Mi),lt(Oa))}var pt=Pr(0);function Oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function Bh(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var dc=Xi.ReactCurrentDispatcher,$u=Xi.ReactCurrentBatchConfig,ss=0,mt=null,It=null,Bt=null,kc=!1,va=!1,Ba=0,zS=0;function Zt(){throw Error(ie(321))}function zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function Hh(t,e,n,i,r,s){if(ss=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dc.current=t===null||t.memoizedState===null?WS:XS,t=n(i,r),va){s=0;do{if(va=!1,Ba=0,25<=s)throw Error(ie(301));s+=1,Bt=It=null,e.updateQueue=null,dc.current=jS,t=n(i,r)}while(va)}if(dc.current=Bc,e=It!==null&&It.next!==null,ss=0,Bt=It=mt=null,kc=!1,e)throw Error(ie(300));return t}function Vh(){var t=Ba!==0;return Ba=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?mt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Zn(){if(It===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Bt===null?mt.memoizedState:Bt.next;if(e!==null)Bt=e,It=t;else{if(t===null)throw Error(ie(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Bt===null?mt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function za(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=Zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ss&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=f,os|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,os|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function tv(){}function nv(t,e){var n=mt,i=Zn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Gh(sv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Ha(9,rv.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ie(349));ss&30||iv(n,e,r)}return r}function iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,i){e.value=n,e.getSnapshot=i,ov(e)&&av(t)}function sv(t,e,n){return n(function(){ov(e)&&av(t)})}function ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function av(t){var e=Vi(t,1);e!==null&&ui(e,t,1,-1)}function om(t){var e=gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=GS.bind(null,mt,t),[e.memoizedState,t]}function Ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lv(){return Zn().memoizedState}function hc(t,e,n,i){var r=gi();mt.flags|=t,r.memoizedState=Ha(1|e,n,void 0,i===void 0?null:i)}function lu(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&zh(i,o.deps)){r.memoizedState=Ha(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Ha(1|e,n,s,i)}function am(t,e){return hc(8390656,8,t,e)}function Gh(t,e){return lu(2048,8,t,e)}function cv(t,e){return lu(4,2,t,e)}function uv(t,e){return lu(4,4,t,e)}function fv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dv(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,fv.bind(null,e,t),n)}function Wh(){}function hv(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function pv(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mv(t,e,n){return ss&21?(fi(n,e)||(n=y_(),mt.lanes|=n,os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function HS(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=$u.transition;$u.transition={};try{t(!1),e()}finally{tt=n,$u.transition=i}}function gv(){return Zn().memoizedState}function VS(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_v(t))vv(e,n);else if(n=Q_(t,e,n,i),n!==null){var r=un();ui(n,t,i,r),xv(n,e,i)}}function GS(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_v(t))vv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,Nh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Q_(t,e,r,i),n!==null&&(r=un(),ui(n,t,i,r),xv(n,e,i))}}function _v(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function vv(t,e){va=kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}var Bc={readContext:Kn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},WS={readContext:Kn,useCallback:function(t,e){return gi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hc(4194308,4,fv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hc(4194308,4,t,e)},useInsertionEffect:function(t,e){return hc(4,2,t,e)},useMemo:function(t,e){var n=gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=VS.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=gi();return t={current:t},e.memoizedState=t},useState:om,useDebugValue:Wh,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=om(!1),e=t[0];return t=HS.bind(null,t[1]),gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=gi();if(dt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Wt===null)throw Error(ie(349));ss&30||iv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,am(sv.bind(null,i,s,t),[t]),i.flags|=2048,Ha(9,rv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=gi(),e=Wt.identifierPrefix;if(dt){var n=Fi,i=Ni;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XS={readContext:Kn,useCallback:hv,useContext:Kn,useEffect:Gh,useImperativeHandle:dv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:Ku,useRef:lv,useState:function(){return Ku(za)},useDebugValue:Wh,useDeferredValue:function(t){var e=Zn();return mv(e,It.memoizedState,t)},useTransition:function(){var t=Ku(za)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1},jS={readContext:Kn,useCallback:hv,useContext:Kn,useEffect:Gh,useImperativeHandle:dv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:Zu,useRef:lv,useState:function(){return Zu(za)},useDebugValue:Wh,useDeferredValue:function(t){var e=Zn();return It===null?e.memoizedState=t:mv(e,It.memoizedState,t)},useTransition:function(){var t=Zu(za)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=yr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ui(e,t,r,i),fc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=yr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ui(e,t,r,i),fc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=yr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=vr(t,r,i),e!==null&&(ui(e,t,i,n),fc(e,t,i))}};function lm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,i)||!Da(r,s):!0}function yv(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=yn(e)?is:rn.current,i=e.contextTypes,s=(i=i!=null)?_o(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function cm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function Pd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=yn(e)?is:rn.current,r.context=_o(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cu.enqueueReplaceState(r,r.state,null),Fc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e){try{var n="",i=e;do n+=yy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YS=typeof WeakMap=="function"?WeakMap:Map;function Sv(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hc||(Hc=!0,Hd=i),Ld(t,e)},n}function Mv(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ld(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function um(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new YS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=aM.bind(null,t,e,n),e.then(t,t))}function fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var qS=Xi.ReactCurrentOwner,vn=!1;function ln(t,e,n,i){e.child=t===null?Z_(e,null,n,i):xo(e,t.child,n,i)}function hm(t,e,n,i,r){n=n.render;var s=e.ref;return uo(e,r),i=Hh(t,e,n,i,s,r),n=Vh(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(dt&&n&&Rh(e),e.flags|=1,ln(t,e,i,r),e.child)}function pm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ev(t,e,s,i,r)):(t=_c(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,i)&&t.ref===e.ref)return Gi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ev(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Da(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Gi(t,e,r)}return Id(t,e,n,i,r)}function wv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(to,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(to,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(to,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(to,bn),bn|=i;return ln(t,e,r,n),e.child}function Tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Id(t,e,n,i,r){var s=yn(n)?is:rn.current;return s=_o(e,s),uo(e,r),n=Hh(t,e,n,i,s,r),i=Vh(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(dt&&i&&Rh(e),e.flags|=1,ln(t,e,n,r),e.child)}function mm(t,e,n,i,r){if(yn(n)){var s=!0;Lc(e)}else s=!1;if(uo(e,r),e.stateNode===null)pc(t,e),yv(e,n,i),Pd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=yn(n)?is:rn.current,c=_o(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&cm(e,o,i,c),rr=!1;var u=e.memoizedState;o.state=u,Fc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||xn.current||rr?(typeof f=="function"&&(Rd(e,n,f,i),l=e.memoizedState),(a=rr||lm(e,n,a,i,u,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,J_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ri(e.type,a),o.props=c,d=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=yn(n)?is:rn.current,l=_o(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||u!==l)&&cm(e,o,i,l),rr=!1,u=e.memoizedState,o.state=u,Fc(e,i,o,r);var v=e.memoizedState;a!==d||u!==v||xn.current||rr?(typeof p=="function"&&(Rd(e,n,p,i),v=e.memoizedState),(c=rr||lm(e,n,c,i,u,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Dd(t,e,n,i,s,r)}function Dd(t,e,n,i,r,s){Tv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&em(e,n,!1),Gi(t,e,s);i=e.stateNode,qS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=xo(e,t.child,null,s),e.child=xo(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&em(e,n,!0),e.child}function Av(t){var e=t.stateNode;e.pendingContext?Jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(t,e.context,!1),Oh(t,e.containerInfo)}function gm(t,e,n,i,r){return vo(),Lh(r),e.flags|=256,ln(t,e,n,i),e.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cv(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(pt,r&1),t===null)return Cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=du(o,i,0,null),t=ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nd(n),e.memoizedState=Ud,t):Xh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $S(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ud,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xh(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function dl(t,e,n,i){return i!==null&&Lh(i),xo(e,t.child,null,n),t=Xh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $S(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Qu(Error(ie(422))),dl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=du({mode:"visible",children:i.children},r,0,null),s=ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&xo(e,t.child,null,o),e.child.memoizedState=Nd(o),e.memoizedState=Ud,s);if(!(e.mode&1))return dl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Qu(s,i,void 0),dl(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(t,r),ui(i,t,r,-1))}return Zh(),i=Qu(Error(ie(421))),dl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=lM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=_r(r.nextSibling),In=e,dt=!0,oi=null,t!==null&&(kn[Bn++]=Ni,kn[Bn++]=Fi,kn[Bn++]=rs,Ni=t.id,Fi=t.overflow,rs=e),e=Xh(e,i.children),e.flags|=4096,e)}function _m(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bd(t.return,e,n)}function Ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,n,e);else if(t.tag===19)_m(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KS(t,e,n){switch(e.tag){case 3:Av(e),vo();break;case 5:ev(e);break;case 1:yn(e.type)&&Lc(e);break;case 4:Oh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Uc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Cv(t,e,n):(st(pt,pt.current&1),t=Gi(t,e,n),t!==null?t.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,wv(t,e,n)}return Gi(t,e,n)}var Rv,Fd,Pv,Lv;Rv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fd=function(){};Pv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Qr(Mi.current);var s=null;switch(n){case"input":r=rd(t,r),i=rd(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=ad(t,r),i=ad(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rc)}cd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Wo(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ZS(t,e,n){var i=e.pendingProps;switch(Ph(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return yn(e.type)&&Pc(),Qt(e),null;case 3:return i=e.stateNode,yo(),lt(xn),lt(rn),Bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(Wd(oi),oi=null))),Fd(t,e),Qt(e),null;case 5:kh(e);var r=Qr(ka.current);if(n=e.type,t!==null&&e.stateNode!=null)Pv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Qt(e),null}if(t=Qr(Mi.current),ul(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[Fa]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)ot(la[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Ap(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":bp(i,s),ot("invalid",i)}cd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",""+a]):Aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":tl(i),Cp(i,s,!0);break;case"textarea":tl(i),Rp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[Fa]=i,Rv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ud(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)ot(la[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Ap(t,i),r=rd(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":bp(t,i),r=ad(t,i),ot("invalid",t);break;default:r=i}cd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?l_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&o_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ca(t,l):typeof l=="number"&&Ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&mh(t,s,l,o))}switch(n){case"input":tl(t),Cp(t,i,!1);break;case"textarea":tl(t),Rp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?oo(t,!!i.multiple,s,!1):i.defaultValue!=null&&oo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)Lv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Qr(ka.current),Qr(Mi.current),ul(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:cl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return Qt(e),null;case 13:if(lt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&Pn!==null&&e.mode&1&&!(e.flags&128))$_(),vo(),e.flags|=98560,s=!1;else if(s=ul(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[xi]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else oi!==null&&(Wd(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Dt===0&&(Dt=3):Zh())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return yo(),Fd(t,e),t===null&&Ua(e.stateNode.containerInfo),Qt(e),null;case 10:return Uh(e.type._context),Qt(e),null;case 17:return yn(e.type)&&Pc(),Qt(e),null;case 19:if(lt(pt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Wo(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Oc(t),o!==null){for(e.flags|=128,Wo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Mo&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Oc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Qt(e),null}else 2*wt()-s.renderingStartTime>Mo&&n!==1073741824&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=pt.current,st(pt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Kh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function QS(t,e){switch(Ph(e),e.tag){case 1:return yn(e.type)&&Pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yo(),lt(xn),lt(rn),Bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kh(e),null;case 13:if(lt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(pt),null;case 4:return yo(),null;case 10:return Uh(e.type._context),null;case 22:case 23:return Kh(),null;case 24:return null;default:return null}}var hl=!1,nn=!1,JS=typeof WeakSet=="function"?WeakSet:Set,ge=null;function eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function Od(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var vm=!1;function eM(t,e){if(yd=Ac,t=F_(),bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sd={focusedElem:t,selectionRange:n},Ac=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,g=v.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:ri(e.type,x),g);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){Mt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=vm,vm=!1,v}function xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Od(e,n,s)}r=r.next}while(r!==i)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Iv(t){var e=t.alternate;e!==null&&(t.alternate=null,Iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[Fa],delete e[wd],delete e[FS],delete e[OS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dv(t){return t.tag===5||t.tag===3||t.tag===4}function xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rc));else if(i!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}function zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}var jt=null,si=!1;function qi(t,e,n){for(n=n.child;n!==null;)Uv(t,e,n),n=n.sibling}function Uv(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:nn||eo(n,e);case 6:var i=jt,r=si;jt=null,qi(t,e,n),jt=i,si=r,jt!==null&&(si?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(si?(t=jt,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),La(t)):ju(jt,n.stateNode));break;case 4:i=jt,r=si,jt=n.stateNode.containerInfo,si=!0,qi(t,e,n),jt=i,si=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Od(n,e,o),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!nn&&(eo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,qi(t,e,n),nn=i):qi(t,e,n);break;default:qi(t,e,n)}}function ym(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JS),e.forEach(function(i){var r=cM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,si=!1;break e;case 3:jt=a.stateNode.containerInfo,si=!0;break e;case 4:jt=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(jt===null)throw Error(ie(160));Uv(s,o,r),jt=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nv(e,t),e=e.sibling}function Nv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),hi(t),i&4){try{xa(3,t,t.return),uu(3,t)}catch(x){Mt(t,t.return,x)}try{xa(5,t,t.return)}catch(x){Mt(t,t.return,x)}}break;case 1:Jn(e,t),hi(t),i&512&&n!==null&&eo(n,n.return);break;case 5:if(Jn(e,t),hi(t),i&512&&n!==null&&eo(n,n.return),t.flags&32){var r=t.stateNode;try{Ca(r,"")}catch(x){Mt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&i_(r,s),ud(a,o);var c=ud(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?l_(r,d):f==="dangerouslySetInnerHTML"?o_(r,d):f==="children"?Ca(r,d):mh(r,f,d,c)}switch(a){case"input":sd(r,s);break;case"textarea":r_(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?oo(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?oo(r,!!s.multiple,s.defaultValue,!0):oo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fa]=s}catch(x){Mt(t,t.return,x)}}break;case 6:if(Jn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Mt(t,t.return,x)}}break;case 3:if(Jn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(x){Mt(t,t.return,x)}break;case 4:Jn(e,t),hi(t);break;case 13:Jn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qh=wt())),i&4&&ym(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||f,Jn(e,t),nn=c):Jn(e,t),hi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(d=ge=f;ge!==null;){switch(u=ge,p=u.child,u.tag){case 0:case 11:case 14:case 15:xa(4,u,u.return);break;case 1:eo(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Mt(i,n,x)}}break;case 5:eo(u,u.return);break;case 22:if(u.memoizedState!==null){Mm(d);continue}}p!==null?(p.return=u,ge=p):Mm(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=a_("display",o))}catch(x){Mt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Mt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jn(e,t),hi(t),i&4&&ym(t);break;case 21:break;default:Jn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ca(r,""),i.flags&=-33);var s=xm(t);zd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=xm(t);Bd(t,a,o);break;default:throw Error(ie(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tM(t,e,n){ge=t,Fv(t)}function Fv(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=hl;var c=nn;if(hl=o,(nn=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Em(r):l!==null?(l.return=o,ge=l):Em(r);for(;s!==null;)ge=s,Fv(s),s=s.sibling;ge=r,hl=a,nn=c}Sm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Sm(t)}}function Sm(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&La(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}nn||e.flags&512&&kd(e)}catch(u){Mt(e,e.return,u)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Mm(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Em(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{kd(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{kd(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var nM=Math.ceil,zc=Xi.ReactCurrentDispatcher,jh=Xi.ReactCurrentOwner,qn=Xi.ReactCurrentBatchConfig,Ke=0,Wt=null,Pt=null,qt=0,bn=0,to=Pr(0),Dt=0,Va=null,os=0,fu=0,Yh=0,ya=null,gn=null,qh=0,Mo=1/0,Di=null,Hc=!1,Hd=null,xr=null,pl=!1,fr=null,Vc=0,Sa=0,Vd=null,mc=-1,gc=0;function un(){return Ke&6?wt():mc!==-1?mc:mc=wt()}function yr(t){return t.mode&1?Ke&2&&qt!==0?qt&-qt:BS.transition!==null?(gc===0&&(gc=y_()),gc):(t=tt,t!==0||(t=window.event,t=t===void 0?16:C_(t.type)),t):1}function ui(t,e,n,i){if(50<Sa)throw Sa=0,Vd=null,Error(ie(185));Xa(t,n,i),(!(Ke&2)||t!==Wt)&&(t===Wt&&(!(Ke&2)&&(fu|=n),Dt===4&&ar(t,qt)),Sn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Mo=wt()+500,au&&Lr()))}function Sn(t,e){var n=t.callbackNode;By(t,e);var i=Tc(t,t===Wt?qt:0);if(i===0)n!==null&&Ip(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ip(n),e===1)t.tag===0?kS(wm.bind(null,t)):j_(wm.bind(null,t)),US(function(){!(Ke&6)&&Lr()}),n=null;else{switch(S_(i)){case 1:n=yh;break;case 4:n=v_;break;case 16:n=wc;break;case 536870912:n=x_;break;default:n=wc}n=Wv(n,Ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ov(t,e){if(mc=-1,gc=0,Ke&6)throw Error(ie(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var i=Tc(t,t===Wt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gc(t,i);else{e=i;var r=Ke;Ke|=2;var s=Bv();(Wt!==t||qt!==e)&&(Di=null,Mo=wt()+500,ts(t,e));do try{sM();break}catch(a){kv(t,a)}while(!0);Dh(),zc.current=s,Ke=r,Pt!==null?e=0:(Wt=null,qt=0,e=Dt)}if(e!==0){if(e===2&&(r=md(t),r!==0&&(i=r,e=Gd(t,r))),e===1)throw n=Va,ts(t,0),ar(t,i),Sn(t,wt()),n;if(e===6)ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!iM(r)&&(e=Gc(t,i),e===2&&(s=md(t),s!==0&&(i=s,e=Gd(t,s))),e===1))throw n=Va,ts(t,0),ar(t,i),Sn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Xr(t,gn,Di);break;case 3:if(ar(t,i),(i&130023424)===i&&(e=qh+500-wt(),10<e)){if(Tc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ed(Xr.bind(null,t,gn,Di),e);break}Xr(t,gn,Di);break;case 4:if(ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nM(i/1960))-i,10<i){t.timeoutHandle=Ed(Xr.bind(null,t,gn,Di),i);break}Xr(t,gn,Di);break;case 5:Xr(t,gn,Di);break;default:throw Error(ie(329))}}}return Sn(t,wt()),t.callbackNode===n?Ov.bind(null,t):null}function Gd(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=Gc(t,e),t!==2&&(e=gn,gn=n,e!==null&&Wd(e)),t}function Wd(t){gn===null?gn=t:gn.push.apply(gn,t)}function iM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Yh,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function wm(t){if(Ke&6)throw Error(ie(327));fo();var e=Tc(t,0);if(!(e&1))return Sn(t,wt()),null;var n=Gc(t,e);if(t.tag!==0&&n===2){var i=md(t);i!==0&&(e=i,n=Gd(t,i))}if(n===1)throw n=Va,ts(t,0),ar(t,e),Sn(t,wt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,gn,Di),Sn(t,wt()),null}function $h(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Mo=wt()+500,au&&Lr())}}function as(t){fr!==null&&fr.tag===0&&!(Ke&6)&&fo();var e=Ke;Ke|=1;var n=qn.transition,i=tt;try{if(qn.transition=null,tt=1,t)return t()}finally{tt=i,qn.transition=n,Ke=e,!(Ke&6)&&Lr()}}function Kh(){bn=to.current,lt(to)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DS(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Ph(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pc();break;case 3:yo(),lt(xn),lt(rn),Bh();break;case 5:kh(i);break;case 4:yo();break;case 13:lt(pt);break;case 19:lt(pt);break;case 10:Uh(i.type._context);break;case 22:case 23:Kh()}n=n.return}if(Wt=t,Pt=t=Sr(t.current,null),qt=bn=e,Dt=0,Va=null,Yh=fu=os=0,gn=ya=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Zr=null}return t}function kv(t,e){do{var n=Pt;try{if(Dh(),dc.current=Bc,kc){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kc=!1}if(ss=0,Bt=It=mt=null,va=!1,Ba=0,jh.current=null,n===null||n.return===null){Dt=1,Va=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=fm(o);if(p!==null){p.flags&=-257,dm(p,o,a,s,e),p.mode&1&&um(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){um(s,c,e),Zh();break e}l=Error(ie(426))}}else if(dt&&a.mode&1){var g=fm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),dm(g,o,a,s,e),Lh(So(l,a));break e}}s=l=So(l,a),Dt!==4&&(Dt=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Sv(s,l,e);rm(s,h);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(xr===null||!xr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Mv(s,a,e);rm(s,y);break e}}s=s.return}while(s!==null)}Hv(n)}catch(A){e=A,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function Bv(){var t=zc.current;return zc.current=Bc,t===null?Bc:t}function Zh(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Wt===null||!(os&268435455)&&!(fu&268435455)||ar(Wt,qt)}function Gc(t,e){var n=Ke;Ke|=2;var i=Bv();(Wt!==t||qt!==e)&&(Di=null,ts(t,e));do try{rM();break}catch(r){kv(t,r)}while(!0);if(Dh(),Ke=n,zc.current=i,Pt!==null)throw Error(ie(261));return Wt=null,qt=0,Dt}function rM(){for(;Pt!==null;)zv(Pt)}function sM(){for(;Pt!==null&&!Py();)zv(Pt)}function zv(t){var e=Gv(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?Hv(t):Pt=e,jh.current=null}function Hv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QS(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Pt=null;return}}else if(n=ZS(n,e,bn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Xr(t,e,n){var i=tt,r=qn.transition;try{qn.transition=null,tt=1,oM(t,e,n,i)}finally{qn.transition=r,tt=i}return null}function oM(t,e,n,i){do fo();while(fr!==null);if(Ke&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zy(t,s),t===Wt&&(Pt=Wt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,Wv(wc,function(){return fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=tt;tt=1;var a=Ke;Ke|=4,jh.current=null,eM(t,n),Nv(n,t),AS(Sd),Ac=!!yd,Sd=yd=null,t.current=n,tM(n),Ly(),Ke=a,tt=o,qn.transition=s}else t.current=n;if(pl&&(pl=!1,fr=t,Vc=r),s=t.pendingLanes,s===0&&(xr=null),Uy(n.stateNode),Sn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hc)throw Hc=!1,t=Hd,Hd=null,t;return Vc&1&&t.tag!==0&&fo(),s=t.pendingLanes,s&1?t===Vd?Sa++:(Sa=0,Vd=t):Sa=0,Lr(),null}function fo(){if(fr!==null){var t=S_(Vc),e=qn.transition,n=tt;try{if(qn.transition=null,tt=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,Vc=0,Ke&6)throw Error(ie(331));var r=Ke;for(Ke|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:xa(8,f,s)}var d=f.child;if(d!==null)d.return=f,ge=d;else for(;ge!==null;){f=ge;var u=f.sibling,p=f.return;if(Iv(f),f===c){ge=null;break}if(u!==null){u.return=p,ge=u;break}ge=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var m=t.current;for(ge=m;ge!==null;){o=ge;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ge=_;else e:for(o=m;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uu(9,a)}}catch(A){Mt(a,a.return,A)}if(a===o){ge=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ge=y;break e}ge=a.return}}if(Ke=r,Lr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(nu,t)}catch{}i=!0}return i}finally{tt=n,qn.transition=e}}return!1}function Tm(t,e,n){e=So(n,e),e=Sv(t,e,1),t=vr(t,e,1),e=un(),t!==null&&(Xa(t,1,e),Sn(t,e))}function Mt(t,e,n){if(t.tag===3)Tm(t,t,n);else for(;e!==null;){if(e.tag===3){Tm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=So(n,t),t=Mv(e,t,1),e=vr(e,t,1),t=un(),e!==null&&(Xa(e,1,t),Sn(e,t));break}}e=e.return}}function aM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(qt&n)===n&&(Dt===4||Dt===3&&(qt&130023424)===qt&&500>wt()-qh?ts(t,0):Yh|=n),Sn(t,e)}function Vv(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=un();t=Vi(t,e),t!==null&&(Xa(t,e,n),Sn(t,n))}function lM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vv(t,n)}function cM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Vv(t,n)}var Gv;Gv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,KS(t,e,n);vn=!!(t.flags&131072)}else vn=!1,dt&&e.flags&1048576&&Y_(e,Dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pc(t,e),t=e.pendingProps;var r=_o(e,rn.current);uo(e,n),r=Hh(null,e,i,t,r,n);var s=Vh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Lc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fh(e),r.updater=cu,e.stateNode=r,r._reactInternals=e,Pd(e,i,t,n),e=Dd(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Rh(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fM(i),t=ri(i,t),r){case 0:e=Id(null,e,i,t,n);break e;case 1:e=mm(null,e,i,t,n);break e;case 11:e=hm(null,e,i,t,n);break e;case 14:e=pm(null,e,i,ri(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),mm(t,e,i,r,n);case 3:e:{if(Av(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,J_(t,e),Fc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=So(Error(ie(423)),e),e=gm(t,e,i,n,r);break e}else if(i!==r){r=So(Error(ie(424)),e),e=gm(t,e,i,n,r);break e}else for(Pn=_r(e.stateNode.containerInfo.firstChild),In=e,dt=!0,oi=null,n=Z_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),i===r){e=Gi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return ev(e),t===null&&Cd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Md(i,r)?o=null:s!==null&&Md(i,s)&&(e.flags|=32),Tv(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Cd(e),null;case 13:return Cv(t,e,n);case 4:return Oh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xo(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),hm(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Uc,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!xn.current){e=Gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,uo(e,n),r=Kn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),pm(t,e,i,r,n);case 15:return Ev(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),pc(t,e),e.tag=1,yn(i)?(t=!0,Lc(e)):t=!1,uo(e,n),yv(e,i,r),Pd(e,i,r,n),Dd(null,e,i,!0,t,n);case 19:return bv(t,e,n);case 22:return wv(t,e,n)}throw Error(ie(156,e.tag))};function Wv(t,e){return __(t,e)}function uM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new uM(t,e,n,i)}function Qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fM(t){if(typeof t=="function")return Qh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_h)return 11;if(t===vh)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _c(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Qh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xs:return ns(n.children,r,s,e);case gh:o=8,r|=8;break;case ed:return t=Vn(12,n,e,r|2),t.elementType=ed,t.lanes=s,t;case td:return t=Vn(13,n,e,r),t.elementType=td,t.lanes=s,t;case nd:return t=Vn(19,n,e,r),t.elementType=nd,t.lanes=s,t;case e_:return du(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q0:o=10;break e;case J0:o=9;break e;case _h:o=11;break e;case vh:o=14;break e;case ir:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ns(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function du(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=e_,t.lanes=n,t.stateNode={isHidden:!1},t}function ef(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function tf(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jh(t,e,n,i,r,s,o,a,l){return t=new dM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(s),t}function hM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Xv(t){if(!t)return Tr;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(yn(n))return X_(t,n,e)}return e}function jv(t,e,n,i,r,s,o,a,l){return t=Jh(n,i,!0,t,r,s,o,a,l),t.context=Xv(null),n=t.current,i=un(),r=yr(n),s=ki(i,r),s.callback=e??null,vr(n,s,r),t.current.lanes=r,Xa(t,r,i),Sn(t,i),t}function hu(t,e,n,i){var r=e.current,s=un(),o=yr(r);return n=Xv(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=vr(r,e,o),t!==null&&(ui(t,r,o,s),fc(t,r,o)),o}function Wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ep(t,e){Am(t,e),(t=t.alternate)&&Am(t,e)}function pM(){return null}var Yv=typeof reportError=="function"?reportError:function(t){console.error(t)};function tp(t){this._internalRoot=t}pu.prototype.render=tp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));hu(t,e,null,null)};pu.prototype.unmount=tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;as(function(){hu(null,t,null,null)}),e[Hi]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=w_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&A_(t)}};function np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function mM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Wc(o);s.call(c)}}var o=jv(e,i,t,0,null,!1,!1,"",Cm);return t._reactRootContainer=o,t[Hi]=o.current,Ua(t.nodeType===8?t.parentNode:t),as(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Wc(l);a.call(c)}}var l=Jh(t,0,!1,null,null,!1,!1,"",Cm);return t._reactRootContainer=l,t[Hi]=l.current,Ua(t.nodeType===8?t.parentNode:t),as(function(){hu(e,l,n,i)}),l}function gu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Wc(o);a.call(l)}}hu(e,o,t,r)}else o=mM(n,e,t,r,i);return Wc(o)}M_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(Sh(e,n|1),Sn(e,wt()),!(Ke&6)&&(Mo=wt()+500,Lr()))}break;case 13:as(function(){var i=Vi(t,1);if(i!==null){var r=un();ui(i,t,1,r)}}),ep(t,1)}};Mh=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=un();ui(e,t,134217728,n)}ep(t,134217728)}};E_=function(t){if(t.tag===13){var e=yr(t),n=Vi(t,e);if(n!==null){var i=un();ui(n,t,e,i)}ep(t,e)}};w_=function(){return tt};T_=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};dd=function(t,e,n){switch(e){case"input":if(sd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ou(i);if(!r)throw Error(ie(90));n_(i),sd(i,r)}}}break;case"textarea":r_(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};f_=$h;d_=as;var gM={usingClientEntryPoint:!1,Events:[Ya,$s,ou,c_,u_,$h]},Xo={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_M={bundleType:Xo.bundleType,version:Xo.version,rendererPackageName:Xo.rendererPackageName,rendererConfig:Xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=m_(t),t===null?null:t.stateNode},findFiberByHostInstance:Xo.findFiberByHostInstance||pM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{nu=ml.inject(_M),Si=ml}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gM;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!np(e))throw Error(ie(200));return hM(t,e,null,n)};Un.createRoot=function(t,e){if(!np(t))throw Error(ie(299));var n=!1,i="",r=Yv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jh(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,Ua(t.nodeType===8?t.parentNode:t),new tp(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=m_(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return as(t)};Un.hydrate=function(t,e,n){if(!mu(e))throw Error(ie(200));return gu(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!np(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Yv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jv(e,null,t,1,n??null,r,!1,s,o),t[Hi]=e.current,Ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new pu(e)};Un.render=function(t,e,n){if(!mu(e))throw Error(ie(200));return gu(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!mu(t))throw Error(ie(40));return t._reactRootContainer?(as(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Un.unstable_batchedUpdates=$h;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!mu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return gu(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(t){console.error(t)}}qv(),q0.exports=Un;var vM=q0.exports,bm=vM;Qf.createRoot=bm.createRoot,Qf.hydrateRoot=bm.hydrateRoot;const xM="modulepreload",yM=function(t){return"/"+t},Rm={},Rn=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=yM(l),l in Rm)return;Rm[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":xM,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((u,p)=>{d.addEventListener("load",u),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},SM={},Pm=t=>{let e;const n=new Set,i=(f,d)=>{const u=typeof f=="function"?f(e):f;if(!Object.is(u,e)){const p=e;e=d??(typeof u!="object"||u===null)?u:Object.assign({},e,u),n.forEach(v=>v(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(SM?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},MM=t=>t?Pm(t):Pm;var $v={exports:{}},Kv={},Zv={exports:{}},Qv={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Gt;function EM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wM=typeof Object.is=="function"?Object.is:EM,TM=Eo.useState,AM=Eo.useEffect,CM=Eo.useLayoutEffect,bM=Eo.useDebugValue;function RM(t,e){var n=e(),i=TM({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return CM(function(){r.value=n,r.getSnapshot=e,nf(r)&&s({inst:r})},[t,n,e]),AM(function(){return nf(r)&&s({inst:r}),t(function(){nf(r)&&s({inst:r})})},[t]),bM(n),n}function nf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wM(t,n)}catch{return!0}}function PM(t,e){return e()}var LM=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?PM:RM;Qv.useSyncExternalStore=Eo.useSyncExternalStore!==void 0?Eo.useSyncExternalStore:LM;Zv.exports=Qv;var IM=Zv.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u=Gt,DM=IM;function UM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var NM=typeof Object.is=="function"?Object.is:UM,FM=DM.useSyncExternalStore,OM=_u.useRef,kM=_u.useEffect,BM=_u.useMemo,zM=_u.useDebugValue;Kv.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=OM(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=BM(function(){function l(p){if(!c){if(c=!0,f=p,p=i(p),r!==void 0&&o.hasValue){var v=o.value;if(r(v,p))return d=v}return d=p}if(v=d,NM(f,p))return v;var x=i(p);return r!==void 0&&r(v,x)?(f=p,v):(f=p,d=x)}var c=!1,f,d,u=n===void 0?null:n;return[function(){return l(e())},u===null?void 0:function(){return l(u())}]},[e,n,i,r]);var a=FM(t,s[0],s[1]);return kM(function(){o.hasValue=!0,o.value=a},[a]),zM(a),a};$v.exports=Kv;var HM=$v.exports;const VM=N0(HM),Jv={},{useDebugValue:GM}=j0,{useSyncExternalStoreWithSelector:WM}=VM;let Lm=!1;const XM=t=>t;function jM(t,e=XM,n){(Jv?"production":void 0)!=="production"&&n&&!Lm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Lm=!0);const i=WM(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return GM(i),i}const YM=t=>{(Jv?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?MM(t):t,n=(i,r)=>jM(e,i,r);return Object.assign(n,e),n},qM=t=>YM,$M=t=>(e,n,i)=>{const r=i.subscribe;return i.subscribe=(o,a,l)=>{let c=o;if(a){const f=(l==null?void 0:l.equalityFn)||Object.is;let d=o(i.getState());c=u=>{const p=o(u);if(!f(d,p)){const v=d;a(d=p,v)}},l!=null&&l.fireImmediately&&a(d,d)}return r(c)},t(e,n,i)},KM=$M,ZM=100;class QM{constructor(){Ce(this,"past",[]);Ce(this,"future",[])}execute(e){this.past.push(e),this.past.length>ZM&&this.past.shift(),this.future=[]}undo(){const e=this.past.pop();return e?(this.future.push(e),e):null}redo(){const e=this.future.pop();return e?(this.past.push(e),e):null}canUndo(){return this.past.length>0}canRedo(){return this.future.length>0}clear(){this.past=[],this.future=[]}}const Ht=qM()(KM((t,e)=>({nodes:{},rootIds:[],selection:[],theme:"light",history:new QM,sceneRevision:0,execute:n=>{const i=e(),r=n.apply({nodes:i.nodes,rootIds:i.rootIds,selection:i.selection});e().history.execute(n),t({nodes:r.nodes,rootIds:r.rootIds,selection:r.selection,sceneRevision:i.sceneRevision+1})},undo:()=>{const n=e().history.undo();if(!n)return;const i=e(),r=n.revert({nodes:i.nodes,rootIds:i.rootIds,selection:i.selection});t({nodes:r.nodes,rootIds:r.rootIds,selection:r.selection,sceneRevision:i.sceneRevision+1})},redo:()=>{const n=e().history.redo();if(!n)return;const i=e(),r=n.apply({nodes:i.nodes,rootIds:i.rootIds,selection:i.selection});t({nodes:r.nodes,rootIds:r.rootIds,selection:r.selection,sceneRevision:i.sceneRevision+1})},setSelection:n=>t({selection:n}),toggleTheme:()=>t(n=>({theme:n.theme==="light"?"dark":"light"})),_setState:n=>t(i=>({nodes:n.nodes??i.nodes,rootIds:n.rootIds??i.rootIds,selection:n.selection??i.selection})),_bumpRevision:()=>t(n=>({sceneRevision:n.sceneRevision+1}))})));function JM(){const t=Ht(c=>c.selection),[e,n]=Gt.useState(!1),[i,r]=Gt.useState(null),[s,o]=Gt.useState(null),a=t.length<2||e,l=async c=>{n(!0),r(null),o(null);try{const{executeBooleanOp:f}=await Rn(async()=>{const{executeBooleanOp:u}=await import("./executeBooleanOp-DUdrQwxo.js");return{executeBooleanOp:u}},[]),d=await f(c,t);d.status==="stale"?o("Сцена изменилась — операция отменена"):d.status==="error"&&r(d.reason??"Ошибка CSG")}catch(f){r(f instanceof Error?f.message:"Ошибка CSG")}finally{n(!1)}};return ne.jsxs("div",{className:"flex items-center gap-2",children:[ne.jsx("button",{onClick:()=>l("union"),disabled:a,className:"px-3 py-1 border border-border rounded disabled:opacity-40 text-sm",children:"∪ Union"}),ne.jsx("button",{onClick:()=>l("subtract"),disabled:a,className:"px-3 py-1 border border-border rounded disabled:opacity-40 text-sm",children:"− Subtract"}),ne.jsx("button",{onClick:()=>l("intersect"),disabled:a,className:"px-3 py-1 border border-border rounded disabled:opacity-40 text-sm",children:"∩ Intersect"}),e&&ne.jsx("span",{className:"text-xs text-muted",children:"Вычисление…"}),i&&ne.jsx("span",{className:"text-xs text-red-500",children:i}),s&&ne.jsx("span",{className:"text-xs text-blue-500",children:s})]})}function eE(){const[t,e]=Gt.useState(!1),n=Gt.useRef(null),i=async r=>{var o;const s=(o=r.target.files)==null?void 0:o[0];if(s){try{const{uploadScene:a}=await Rn(async()=>{const{uploadScene:c}=await import("./saveLoad-DXCDbS_o.js");return{uploadScene:c}},[]);await a(s)||alert("Не удалось загрузить сцену")}catch{alert("Ошибка загрузки сцены")}r.target.value=""}};return ne.jsxs("div",{className:"relative",children:[ne.jsx("button",{onClick:()=>e(r=>!r),className:"px-3 py-1 border border-border rounded text-sm",children:"Файл ▾"}),t&&ne.jsxs(ne.Fragment,{children:[ne.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>e(!1)}),ne.jsxs("div",{className:"absolute top-full left-0 mt-1 z-50 bg-panel border border-border rounded shadow-lg py-1 min-w-56",children:[ne.jsx(Fr,{label:"Сохранить в браузер",onClick:async()=>{const{saveToLocal:r}=await Rn(async()=>{const{saveToLocal:s}=await import("./saveLoad-DXCDbS_o.js");return{saveToLocal:s}},[]);r(),e(!1)}}),ne.jsx(Fr,{label:"Загрузить из браузера",onClick:async()=>{const{loadFromLocal:r}=await Rn(async()=>{const{loadFromLocal:s}=await import("./saveLoad-DXCDbS_o.js");return{loadFromLocal:s}},[]);r(),e(!1)}}),ne.jsx(Im,{}),ne.jsx(Fr,{label:"Скачать сцену (.json)",onClick:async()=>{const{downloadScene:r}=await Rn(async()=>{const{downloadScene:s}=await import("./saveLoad-DXCDbS_o.js");return{downloadScene:s}},[]);r(),e(!1)}}),ne.jsx(Fr,{label:"Открыть сцену…",onClick:()=>{var r;(r=n.current)==null||r.click()}}),ne.jsx(Im,{}),ne.jsx(Fr,{label:"Экспорт STL (binary)",onClick:async()=>{const{exportSTLDownload:r}=await Rn(async()=>{const{exportSTLDownload:s}=await import("./saveLoad-DXCDbS_o.js");return{exportSTLDownload:s}},[]);await r(!0),e(!1)}}),ne.jsx(Fr,{label:"Экспорт STL (ASCII)",onClick:async()=>{const{exportSTLDownload:r}=await Rn(async()=>{const{exportSTLDownload:s}=await import("./saveLoad-DXCDbS_o.js");return{exportSTLDownload:s}},[]);await r(!1),e(!1)}}),ne.jsx(Fr,{label:"Экспорт OBJ",onClick:async()=>{const{exportOBJDownload:r}=await Rn(async()=>{const{exportOBJDownload:s}=await import("./saveLoad-DXCDbS_o.js");return{exportOBJDownload:s}},[]);await r(),e(!1)}})]})]}),ne.jsx("input",{ref:n,type:"file",accept:".json,.tcad.json,application/json",onChange:i,className:"hidden"})]})}function Fr({label:t,onClick:e}){return ne.jsx("button",{onClick:e,className:"w-full text-left px-3 py-1.5 text-sm hover:bg-bg",children:t})}function Im(){return ne.jsx("div",{className:"my-1 border-t border-border"})}let gl;const tE=new Uint8Array(16);function nE(){if(!gl&&(gl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!gl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return gl(tE)}const Xt=[];for(let t=0;t<256;++t)Xt.push((t+256).toString(16).slice(1));function iE(t,e=0){return Xt[t[e+0]]+Xt[t[e+1]]+Xt[t[e+2]]+Xt[t[e+3]]+"-"+Xt[t[e+4]]+Xt[t[e+5]]+"-"+Xt[t[e+6]]+Xt[t[e+7]]+"-"+Xt[t[e+8]]+Xt[t[e+9]]+"-"+Xt[t[e+10]]+Xt[t[e+11]]+Xt[t[e+12]]+Xt[t[e+13]]+Xt[t[e+14]]+Xt[t[e+15]]}const rE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Dm={randomUUID:rE};function wo(t,e,n){if(Dm.randomUUID&&!t)return Dm.randomUUID();t=t||{};const i=t.random||(t.rng||nE)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,iE(i)}function sE(t){switch(t){case"box":return{width:20,height:20,depth:20};case"sphere":return{radius:10,widthSegments:32,heightSegments:16};case"cylinder":return{radiusTop:10,radiusBottom:10,height:20,radialSegments:32};case"cone":return{radius:10,height:20,radialSegments:32};case"torus":return{radius:10,tube:3,radialSegments:16,tubularSegments:48}}}class ip{constructor(e){Ce(this,"id",wo());Ce(this,"timestamp",Date.now());Ce(this,"label");Ce(this,"nodeId");Ce(this,"node");this.nodeId=wo();const n=Date.now(),i={position:e.position??[0,0,0],rotation:[0,0,0],scale:[1,1,1]};this.node={id:this.nodeId,type:e.type,name:e.name??e.type,transform:i,geometry:{kind:e.type,params:sE(e.type)},material:{color:"#4a90e2",opacity:1,isHole:!1},booleanOp:null,parentId:null,childrenIds:[],visible:!0,locked:!1,createdAt:n,updatedAt:n},this.label=`Создать ${e.type}`}apply(e){return{...e,nodes:{...e.nodes,[this.nodeId]:this.node},rootIds:[...e.rootIds,this.nodeId],selection:[this.nodeId]}}revert(e){const{[this.nodeId]:n,...i}=e.nodes;return{...e,nodes:i,rootIds:e.rootIds.filter(r=>r!==this.nodeId),selection:e.selection.filter(r=>r!==this.nodeId)}}}const oE=Object.freeze(Object.defineProperty({__proto__:null,CreateNodeCommand:ip},Symbol.toStringTag,{value:"Module"})),aE=[{type:"box",label:"Куб",emoji:"🟦"},{type:"sphere",label:"Сфера",emoji:"⚪"},{type:"cylinder",label:"Цилиндр",emoji:"🛢️"},{type:"cone",label:"Конус",emoji:"🔺"},{type:"torus",label:"Тор",emoji:"🍩"}];function lE(){const t=Ht(e=>e.execute);return ne.jsxs("div",{className:"flex flex-col gap-2",children:[ne.jsx("h3",{className:"text-xs font-semibold text-muted uppercase tracking-wider mb-1",children:"Библиотека"}),aE.map(e=>ne.jsxs("button",{onClick:()=>t(new ip({type:e.type})),className:"flex items-center gap-2 px-3 py-2 text-sm border border-border rounded bg-panel hover:bg-bg transition-colors text-left",children:[ne.jsx("span",{className:"text-lg",children:e.emoji}),ne.jsx("span",{children:e.label})]},e.type))]})}class Vs{constructor(e,n){Ce(this,"id",wo());Ce(this,"timestamp",Date.now());Ce(this,"label");Ce(this,"before",{});this.nodeId=e,this.patch=n,this.label=`Изменить ${n.key}`}apply(e){const n=e.nodes[this.nodeId];if(!n)return e;this.before={...n};const i=this.mergePatch(n,this.patch);return{...e,nodes:{...e.nodes,[this.nodeId]:{...i,updatedAt:Date.now()}}}}revert(e){return{...e,nodes:{...e.nodes,[this.nodeId]:this.before}}}mergePatch(e,n){switch(n.key){case"name":return{...e,name:n.value};case"visible":return{...e,visible:n.value};case"material":return{...e,material:{...e.material,...n.value}};case"transform":return{...e,transform:{...e.transform,...n.value}};case"geometryParams":return{...e,geometry:{...e.geometry,params:{...e.geometry.params,...n.value}}}}}}class cE{constructor(e){Ce(this,"id",wo());Ce(this,"timestamp",Date.now());Ce(this,"label","Разгруппировать");Ce(this,"groupId");Ce(this,"previousGroup",null);Ce(this,"previousChildren",[]);Ce(this,"previousRootIds",[]);Ce(this,"previousSelection",[]);this.groupId=e}apply(e){const n=e.nodes[this.groupId];if(!n||n.type!=="group")return e;this.previousGroup=n,this.previousChildren=n.childrenIds.map(r=>e.nodes[r]).filter(Boolean),this.previousRootIds=[...e.rootIds],this.previousSelection=[...e.selection];const i={...e.nodes};delete i[this.groupId];for(const r of n.childrenIds){const s=i[r];s&&(i[r]={...s,parentId:null})}return{...e,nodes:i,rootIds:[...e.rootIds.filter(r=>r!==this.groupId),...n.childrenIds],selection:n.childrenIds}}revert(e){if(!this.previousGroup)return e;const n={...e.nodes,[this.groupId]:this.previousGroup};for(const i of this.previousChildren)n[i.id]={...i,parentId:this.groupId};return{...e,nodes:n,rootIds:this.previousRootIds,selection:this.previousSelection}}}function uE(){const t=Ht(s=>s.selection),e=Ht(s=>s.selection[0]?s.nodes[s.selection[0]]:null),n=Ht(s=>s.execute);if(!e)return ne.jsx("div",{className:"text-sm text-muted p-2",children:t.length===0?"Ничего не выбрано":`Выбрано: ${t.length}`});const i=(s,o,a)=>{const l=[...e.transform[s]];l[o]=a,n(new Vs(e.id,{key:"transform",value:{[s]:l}}))},r=(s,o)=>{n(new Vs(e.id,{key:"material",value:{[s]:o}}))};return e.type==="group"?ne.jsxs("div",{className:"flex flex-col gap-3 p-2 text-sm",children:[ne.jsx(pi,{label:"Имя",children:ne.jsx("input",{value:e.name,onChange:s=>n(new Vs(e.id,{key:"name",value:s.target.value})),className:"w-full px-2 py-1 bg-bg border border-border rounded"})}),ne.jsx(pi,{label:"Дочерних объектов",children:ne.jsx("span",{children:e.childrenIds.length})}),ne.jsx("button",{onClick:()=>n(new cE(e.id)),className:"px-3 py-1 border border-border rounded hover:bg-bg",children:"Разгруппировать"})]}):ne.jsxs("div",{className:"flex flex-col gap-4 p-2 text-sm overflow-y-auto",children:[ne.jsx(pi,{label:"Имя",children:ne.jsx("input",{value:e.name,onChange:s=>n(new Vs(e.id,{key:"name",value:s.target.value})),className:"w-full px-2 py-1 bg-bg border border-border rounded"})}),ne.jsx(pi,{label:"Видимый",children:ne.jsx("input",{type:"checkbox",checked:e.visible,onChange:s=>n(new Vs(e.id,{key:"visible",value:s.target.checked}))})}),ne.jsx(pi,{label:"Позиция (mm)",children:ne.jsx(rf,{value:e.transform.position,onChange:(s,o)=>i("position",s,o)})}),ne.jsx(pi,{label:"Вращение (°)",children:ne.jsx(rf,{value:e.transform.rotation.map(s=>s*180/Math.PI),onChange:(s,o)=>i("rotation",s,o*Math.PI/180)})}),ne.jsx(pi,{label:"Масштаб",children:ne.jsx(rf,{value:e.transform.scale,step:.1,onChange:(s,o)=>i("scale",s,o)})}),ne.jsx(pi,{label:"Цвет",children:ne.jsx("input",{type:"color",value:e.material.color,onChange:s=>r("color",s.target.value),className:"w-full h-8"})}),ne.jsx(pi,{label:"Прозрачность",children:ne.jsx("input",{type:"range",min:.1,max:1,step:.05,value:e.material.opacity,onChange:s=>r("opacity",parseFloat(s.target.value))})}),ne.jsx(pi,{label:"Дырка (hole)",children:ne.jsx("input",{type:"checkbox",checked:e.material.isHole,onChange:s=>r("isHole",s.target.checked)})})]})}function pi({label:t,children:e}){return ne.jsxs("div",{children:[ne.jsx("div",{className:"text-xs text-muted mb-1",children:t}),e]})}function rf({value:t,onChange:e,step:n=1}){return ne.jsx("div",{className:"grid grid-cols-3 gap-1",children:[0,1,2].map(i=>ne.jsx("input",{type:"number",step:n,value:Number(t[i].toFixed(3)),onChange:r=>e(i,parseFloat(r.target.value)||0),className:"px-1 py-1 bg-bg border border-border rounded text-xs"},i))})}function ex({id:t,depth:e}){const n=Ht(c=>c.nodes[t]),i=Ht(c=>c.selection),r=Ht(c=>c.setSelection),[s,o]=Gt.useState(!0);if(!n)return null;const a=i.includes(t),l=n.type==="group";return ne.jsxs("div",{children:[ne.jsxs("div",{className:`flex items-center gap-1 px-2 py-1 rounded cursor-pointer ${a?"bg-accent text-white":"hover:bg-bg"}`,style:{paddingLeft:8+e*12},onClick:c=>{c.stopPropagation(),c.shiftKey?r(a?i.filter(f=>f!==t):[...i,t]):r([t])},children:[l&&ne.jsx("button",{onClick:c=>{c.stopPropagation(),o(f=>!f)},className:"w-4 text-xs",children:s?"▾":"▸"}),ne.jsx("span",{className:"truncate",children:n.name})]}),l&&s&&n.childrenIds.map(c=>ne.jsx(ex,{id:c,depth:e+1},c))]})}function fE(){const t=Ht(e=>e.rootIds);return ne.jsxs("div",{className:"flex flex-col gap-0.5 p-2 text-sm overflow-y-auto",children:[t.length===0&&ne.jsx("div",{className:"text-muted text-xs",children:"Пусто"}),t.map(e=>ne.jsx(ex,{id:e,depth:0},e))]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="165",hs={ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dE=0,Um=1,hE=2,tx=1,nx=2,Pi=3,Ei=0,fn=1,Hn=2,Mr=0,ho=1,Nm=2,Fm=3,Om=4,pE=5,qr=100,mE=101,gE=102,_E=103,vE=104,xE=200,yE=201,SE=202,ME=203,Xd=204,jd=205,EE=206,wE=207,TE=208,AE=209,CE=210,bE=211,RE=212,PE=213,LE=214,IE=0,DE=1,UE=2,Xc=3,NE=4,FE=5,OE=6,kE=7,ix=0,BE=1,zE=2,Er=0,HE=1,VE=2,GE=3,WE=4,XE=5,jE=6,YE=7,rx=300,To=301,Ao=302,Yd=303,qd=304,vu=306,$d=1e3,Jr=1001,Kd=1002,Gn=1003,qE=1004,_l=1005,li=1006,sf=1007,es=1008,Ar=1009,$E=1010,KE=1011,jc=1012,sx=1013,Co=1014,dr=1015,xu=1016,ox=1017,ax=1018,bo=1020,ZE=35902,QE=1021,JE=1022,yi=1023,ew=1024,tw=1025,po=1026,Ro=1027,nw=1028,lx=1029,iw=1030,cx=1031,ux=1033,of=33776,af=33777,lf=33778,cf=33779,km=35840,Bm=35841,zm=35842,Hm=35843,Vm=36196,Gm=37492,Wm=37496,Xm=37808,jm=37809,Ym=37810,qm=37811,$m=37812,Km=37813,Zm=37814,Qm=37815,Jm=37816,eg=37817,tg=37818,ng=37819,ig=37820,rg=37821,uf=36492,sg=36494,og=36495,rw=36283,ag=36284,lg=36285,cg=36286,sw=3200,ow=3201,fx=0,aw=1,lr="",_i="srgb",Ir="srgb-linear",sp="display-p3",yu="display-p3-linear",Yc="linear",at="srgb",qc="rec709",$c="p3",ms=7680,ug=519,lw=512,cw=513,uw=514,dx=515,fw=516,dw=517,hw=518,pw=519,fg=35044,dg="300 es",Oi=2e3,Kc=2001;class fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hg=1234567;const Ma=Math.PI/180,Ga=180/Math.PI;function Uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function op(t,e){return(t%e+e)%e}function mw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function gw(t,e,n){return t!==e?(n-t)/(e-t):0}function Ea(t,e,n){return(1-n)*t+n*e}function _w(t,e,n,i){return Ea(t,e,1-Math.exp(-n*i))}function vw(t,e=1){return e-Math.abs(op(t,e*2)-e)}function xw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function yw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Sw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Mw(t,e){return t+Math.random()*(e-t)}function Ew(t){return t*(.5-Math.random())}function ww(t){t!==void 0&&(hg=t);let e=hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tw(t){return t*Ma}function Aw(t){return t*Ga}function Cw(t){return(t&t-1)===0&&t!==0}function bw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Rw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Pw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*f,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*f,a*c);break;case"XZX":t.set(a*f,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const hx={DEG2RAD:Ma,RAD2DEG:Ga,generateUUID:Uo,clamp:Yt,euclideanModulo:op,mapLinear:mw,inverseLerp:gw,lerp:Ea,damp:_w,pingpong:vw,smoothstep:xw,smootherstep:yw,randInt:Sw,randFloat:Mw,randFloatSpread:Ew,seededRandom:ww,degToRad:Tw,radToDeg:Aw,isPowerOfTwo:Cw,ceilPowerOfTwo:bw,floorPowerOfTwo:Rw,setQuaternionFromProperEuler:Pw,normalize:on,denormalize:Gs};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],p=i[5],v=i[8],x=r[0],g=r[3],h=r[6],m=r[1],_=r[4],y=r[7],A=r[2],w=r[5],T=r[8];return s[0]=o*x+a*m+l*A,s[3]=o*g+a*_+l*w,s[6]=o*h+a*y+l*T,s[1]=c*x+f*m+d*A,s[4]=c*g+f*_+d*w,s[7]=c*h+f*y+d*T,s[2]=u*x+p*m+v*A,s[5]=u*g+p*_+v*w,s[8]=u*h+p*y+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,u=a*l-f*s,p=c*s-o*l,v=n*d+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=u*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ff.makeScale(e,n)),this}rotate(e){return this.premultiply(ff.makeRotation(-e)),this}translate(e,n){return this.premultiply(ff.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ff=new ke;function px(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Lw(){const t=Zc("canvas");return t.style.display="block",t}const pg={};function mx(t){t in pg||(pg[t]=!0,console.warn(t))}function Iw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const mg=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gg=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vl={[Ir]:{transfer:Yc,primaries:qc,toReference:t=>t,fromReference:t=>t},[_i]:{transfer:at,primaries:qc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yu]:{transfer:Yc,primaries:$c,toReference:t=>t.applyMatrix3(gg),fromReference:t=>t.applyMatrix3(mg)},[sp]:{transfer:at,primaries:$c,toReference:t=>t.convertSRGBToLinear().applyMatrix3(gg),fromReference:t=>t.applyMatrix3(mg).convertLinearToSRGB()}},Dw=new Set([Ir,yu]),et={enabled:!0,_workingColorSpace:Ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Dw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=vl[e].toReference,r=vl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return vl[t].primaries},getTransfer:function(t){return t===lr?Yc:vl[t].transfer}};function mo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function df(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class Uw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Zc("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mo(n[i]/255)*255):n[i]=mo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nw=0;class gx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hf(r[o].image)):s.push(hf(r[o]))}else s=hf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Uw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fw=0;class Mn extends fs{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,i=Jr,r=Jr,s=li,o=es,a=yi,l=Ar,c=Mn.DEFAULT_ANISOTROPY,f=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=Uo(),this.name="",this.source=new gx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=rx;Mn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],v=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,A=(h+1)/2,w=(f+u)/4,T=(d+x)/4,b=(v+g)/4;return _>y&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=T/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=b/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(d-x)*(d-x)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-x)/m,this.z=(u-f)/m,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ow extends fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends Ow{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _x extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kw extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zt{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const u=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=u,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==u||c!==p||f!==v){let g=1-a;const h=l*u+c*p+f*v+d*x,m=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const A=Math.sqrt(_),w=Math.atan2(A,h*m);g=Math.sin(g*w)/A,a=Math.sin(a*w)/A}const y=a*m;if(l=l*g+u*y,c=c*g+p*y,f=f*g+v*y,d=d*g+x*y,g===1-a){const A=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=A,c*=A,f*=A,d*=A}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],u=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*p-c*u,e[n+1]=l*v+f*u+c*d-a*p,e[n+2]=c*v+f*p+a*u-l*d,e[n+3]=f*v-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),u=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=u*f*d+c*p*v,this._y=c*p*d-u*f*v,this._z=c*f*v+u*p*d,this._w=c*f*d-u*p*v;break;case"YXZ":this._x=u*f*d+c*p*v,this._y=c*p*d-u*f*v,this._z=c*f*v-u*p*d,this._w=c*f*d+u*p*v;break;case"ZXY":this._x=u*f*d-c*p*v,this._y=c*p*d+u*f*v,this._z=c*f*v+u*p*d,this._w=c*f*d-u*p*v;break;case"ZYX":this._x=u*f*d-c*p*v,this._y=c*p*d+u*f*v,this._z=c*f*v-u*p*d,this._w=c*f*d+u*p*v;break;case"YZX":this._x=u*f*d+c*p*v,this._y=c*p*d+u*f*v,this._z=c*f*v-u*p*d,this._w=c*f*d-u*p*v;break;case"XZY":this._x=u*f*d-c*p*v,this._y=c*p*d-u*f*v,this._z=c*f*v+u*p*d,this._w=c*f*d+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,u=Math.sin(n*f)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_g.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_g.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pf.copy(this).projectOnVector(e),this.sub(pf)}reflect(e){return this.sub(pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pf=new L,_g=new zt;class Kt{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xl.copy(i.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),yl.subVectors(this.max,jo),_s.subVectors(e.a,jo),vs.subVectors(e.b,jo),xs.subVectors(e.c,jo),$i.subVectors(vs,_s),Ki.subVectors(xs,vs),Or.subVectors(_s,xs);let n=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-Or.z,Or.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,Or.z,0,-Or.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-Or.y,Or.x,0];return!mf(n,_s,vs,xs,yl)||(n=[1,0,0,0,1,0,0,0,1],!mf(n,_s,vs,xs,yl))?!1:(Sl.crossVectors($i,Ki),n=[Sl.x,Sl.y,Sl.z],mf(n,_s,vs,xs,yl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new L,new L,new L,new L,new L,new L,new L,new L],ei=new L,xl=new Kt,_s=new L,vs=new L,xs=new L,$i=new L,Ki=new L,Or=new L,jo=new L,yl=new L,Sl=new L,kr=new L;function mf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){kr.fromArray(t,s);const a=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),c=n.dot(kr),f=i.dot(kr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Bw=new Kt,Yo=new L,gf=new L;class $a{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Bw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const n=Yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(gf)),this.expandByPoint(Yo.copy(e.center).sub(gf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new L,_f=new L,Ml=new L,Zi=new L,vf=new L,El=new L,xf=new L;class Su{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_f.copy(e).add(n).multiplyScalar(.5),Ml.copy(n).sub(e).normalize(),Zi.copy(this.origin).sub(_f);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ml),a=Zi.dot(this.direction),l=-Zi.dot(Ml),c=Zi.lengthSq(),f=Math.abs(1-o*o);let d,u,p,v;if(f>0)if(d=o*l-a,u=o*a-l,v=s*f,d>=0)if(u>=-v)if(u<=v){const x=1/f;d*=x,u*=x,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_f).addScaledVector(Ml,u),p}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,s){vf.subVectors(n,e),El.subVectors(i,e),xf.crossVectors(vf,El);let o=this.direction.dot(xf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);const l=a*this.direction.dot(El.crossVectors(Zi,El));if(l<0)return null;const c=a*this.direction.dot(vf.cross(Zi));if(c<0||l+c>o)return null;const f=-a*Zi.dot(xf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,n,i,r,s,o,a,l,c,f,d,u,p,v,x,g){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,u,p,v,x,g)}set(e,n,i,r,s,o,a,l,c,f,d,u,p,v,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=v,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=u-x*c,n[9]=-a*l,n[2]=x-u*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*d,v=c*f,x=c*d;n[0]=u+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*d,v=c*f,x=c*d;n[0]=u-x*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=v*c-p,n[8]=u*c+x,n[1]=l*d,n[5]=x*c+u,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=x-u*d,n[8]=v*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+v,n[10]=u-x*d}else if(e.order==="XZY"){const u=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+x,n[5]=o*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*f,n[10]=x*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zw,e,Hw)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),Qi.crossVectors(i,An),Qi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Qi.crossVectors(i,An)),Qi.normalize(),wl.crossVectors(An,Qi),r[0]=Qi.x,r[4]=wl.x,r[8]=An.x,r[1]=Qi.y,r[5]=wl.y,r[9]=An.y,r[2]=Qi.z,r[6]=wl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],p=i[13],v=i[2],x=i[6],g=i[10],h=i[14],m=i[3],_=i[7],y=i[11],A=i[15],w=r[0],T=r[4],b=r[8],M=r[12],S=r[1],P=r[5],I=r[9],U=r[13],O=r[2],H=r[6],z=r[10],K=r[14],N=r[3],q=r[7],Z=r[11],se=r[15];return s[0]=o*w+a*S+l*O+c*N,s[4]=o*T+a*P+l*H+c*q,s[8]=o*b+a*I+l*z+c*Z,s[12]=o*M+a*U+l*K+c*se,s[1]=f*w+d*S+u*O+p*N,s[5]=f*T+d*P+u*H+p*q,s[9]=f*b+d*I+u*z+p*Z,s[13]=f*M+d*U+u*K+p*se,s[2]=v*w+x*S+g*O+h*N,s[6]=v*T+x*P+g*H+h*q,s[10]=v*b+x*I+g*z+h*Z,s[14]=v*M+x*U+g*K+h*se,s[3]=m*w+_*S+y*O+A*N,s[7]=m*T+_*P+y*H+A*q,s[11]=m*b+_*I+y*z+A*Z,s[15]=m*M+_*U+y*K+A*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],p=e[14],v=e[3],x=e[7],g=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*a*u+i*c*u+r*a*p-i*l*p)+x*(+n*l*p-n*c*u+s*o*u-r*o*p+r*c*f-s*l*f)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+h*(-r*a*f-n*l*d+n*a*u+r*o*d-i*o*u+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],p=e[11],v=e[12],x=e[13],g=e[14],h=e[15],m=d*g*c-x*u*c+x*l*p-a*g*p-d*l*h+a*u*h,_=v*u*c-f*g*c-v*l*p+o*g*p+f*l*h-o*u*h,y=f*x*c-v*d*c+v*a*p-o*x*p-f*a*h+o*d*h,A=v*d*l-f*x*l-v*a*u+o*x*u+f*a*g-o*d*g,w=n*m+i*_+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=m*T,e[1]=(x*u*s-d*g*s-x*r*p+i*g*p+d*r*h-i*u*h)*T,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*h+i*l*h)*T,e[3]=(d*l*s-a*u*s-d*r*c+i*u*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(f*g*s-v*u*s+v*r*p-n*g*p-f*r*h+n*u*h)*T,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*h-n*l*h)*T,e[7]=(o*u*s-f*l*s+f*r*c-n*u*c-o*r*p+n*l*p)*T,e[8]=y*T,e[9]=(v*d*s-f*x*s-v*i*p+n*x*p+f*i*h-n*d*h)*T,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*h+n*a*h)*T,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=A*T,e[13]=(f*x*r-v*d*r+v*i*u-n*x*u-f*i*g+n*d*g)*T,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*g-n*a*g)*T,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*u+n*a*u)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,u=s*c,p=s*f,v=s*d,x=o*f,g=o*d,h=a*d,m=l*c,_=l*f,y=l*d,A=i.x,w=i.y,T=i.z;return r[0]=(1-(x+h))*A,r[1]=(p+y)*A,r[2]=(v-_)*A,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(u+h))*w,r[6]=(g+m)*w,r[7]=0,r[8]=(v+_)*T,r[9]=(g-m)*T,r[10]=(1-(u+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,f=1/o,d=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=f,ti.elements[5]*=f,ti.elements[6]*=f,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,n.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Oi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),u=(i+r)/(i-r);let p,v;if(a===Oi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Kc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Oi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),u=(n+e)*c,p=(i+r)*f;let v,x;if(a===Oi)v=(o+s)*d,x=-2*d;else if(a===Kc)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new L,ti=new $e,zw=new L(0,0,0),Hw=new L(1,1,1),Qi=new L,wl=new L,An=new L,vg=new $e,xg=new zt;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xg.setFromEuler(this),this.setFromQuaternion(xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vw=0;const yg=new L,Ss=new zt,Ci=new $e,Tl=new L,qo=new L,Gw=new L,Ww=new zt,Sg=new L(1,0,0),Mg=new L(0,1,0),Eg=new L(0,0,1),wg={type:"added"},Xw={type:"removed"},Ms={type:"childadded",child:null},yf={type:"childremoved",child:null};class Tt extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new L,n=new Qn,i=new zt,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new ke}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Sg,e)}rotateY(e){return this.rotateOnAxis(Mg,e)}rotateZ(e){return this.rotateOnAxis(Eg,e)}translateOnAxis(e,n){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sg,e)}translateY(e){return this.translateOnAxis(Mg,e)}translateZ(e){return this.translateOnAxis(Eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Tl.copy(e):Tl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(qo,Tl,this.up):Ci.lookAt(Tl,qo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wg),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Xw),yf.child=e,this.dispatchEvent(yf),yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wg),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,Gw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,Ww,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new L(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new L,bi=new L,Sf=new L,Ri=new L,Es=new L,ws=new L,Tg=new L,Mf=new L,Ef=new L,wf=new L;class cn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),bi.subVectors(i,n),Sf.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(bi),l=ni.dot(Sf),c=bi.dot(bi),f=bi.dot(Sf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*f)*u,v=(o*f-a*l)*u;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),bi.subVectors(e,n),ni.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ni.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return cn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),ws.subVectors(s,i),Mf.subVectors(e,i);const l=Es.dot(Mf),c=ws.dot(Mf);if(l<=0&&c<=0)return n.copy(i);Ef.subVectors(e,r);const f=Es.dot(Ef),d=ws.dot(Ef);if(f>=0&&d<=f)return n.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Es,o);wf.subVectors(e,s);const p=Es.dot(wf),v=ws.dot(wf);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ws,a);const g=f*v-p*d;if(g<=0&&d-f>=0&&p-v>=0)return Tg.subVectors(s,r),a=(d-f)/(d-f+(p-v)),n.copy(r).addScaledVector(Tg,a);const h=1/(g+x+u);return o=x*h,a=u*h,n.copy(i).addScaledVector(Es,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Al={h:0,s:0,l:0};function Tf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=op(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Tf(o,s,e+1/3),this.g=Tf(o,s,e),this.b=Tf(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=_i){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_i){const i=vx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}copyLinearToSRGB(e){return this.r=df(e.r),this.g=df(e.g),this.b=df(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return et.fromWorkingColorSpace(en.copy(this),e),Math.round(Yt(en.r*255,0,255))*65536+Math.round(Yt(en.g*255,0,255))*256+Math.round(Yt(en.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=_i){et.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==_i?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+n,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ji),e.getHSL(Al);const i=Ea(Ji.h,Al.h,n),r=Ea(Ji.s,Al.s,n),s=Ea(Ji.l,Al.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new We;We.NAMES=vx;let jw=0;class No extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jw++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=ho,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=jd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xd&&(i.blendSrc=this.blendSrc),this.blendDst!==jd&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mu extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new L,Cl=new Se;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(e),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fg&&(e.usage=this.usage),e}}class xx extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yx extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ct extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Yw=0;const On=new $e,Af=new Tt,Ts=new L,Cn=new Kt,$o=new Kt,Ot=new L;class dn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(px(e)?yx:xx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return Af.lookAt(e),Af.updateMatrix(),this.applyMatrix4(Af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Cn.min,$o.min),Cn.expandByPoint(Ot),Ot.addVectors(Cn.max,$o.max),Cn.expandByPoint(Ot)):(Cn.expandByPoint($o.min),Cn.expandByPoint($o.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ot.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Ot.add(Ts)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new L,l[b]=new L;const c=new L,f=new L,d=new L,u=new Se,p=new Se,v=new Se,x=new L,g=new L;function h(b,M,S){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),u.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),v.fromBufferAttribute(s,S),f.sub(c),d.sub(c),p.sub(u),v.sub(u);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(P),a[b].add(x),a[M].add(x),a[S].add(x),l[b].add(g),l[M].add(g),l[S].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let b=0,M=m.length;b<M;++b){const S=m[b],P=S.start,I=S.count;for(let U=P,O=P+I;U<O;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new L,y=new L,A=new L,w=new L;function T(b){A.fromBufferAttribute(r,b),w.copy(A);const M=a[b];_.copy(M),_.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(w,M);const P=y.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,P)}for(let b=0,M=m.length;b<M;++b){const S=m[b],P=S.start,I=S.count;for(let U=P,O=P+I;U<O;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,f=new L,d=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let p=0,v=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let h=0;h<f;h++)u[v++]=c[p++]}return new $n(u,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ag=new $e,Br=new Su,bl=new $a,Cg=new L,As=new L,Cs=new L,bs=new L,Cf=new L,Rl=new L,Pl=new Se,Ll=new Se,Il=new Se,bg=new L,Rg=new L,Pg=new L,Dl=new L,Ul=new L;class de extends Tt{constructor(e=new dn,n=new Mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Cf.fromBufferAttribute(d,e),o?Rl.addScaledVector(Cf,f):Rl.addScaledVector(Cf.sub(n),f))}n.add(Rl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(bl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(bl,Cg)===null||Br.origin.distanceToSquared(Cg)>(e.far-e.near)**2))&&(Ag.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Ag),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=u.length;v<x;v++){const g=u[v],h=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,A=_;y<A;y+=3){const w=a.getX(y),T=a.getX(y+1),b=a.getX(y+2);r=Nl(this,h,e,i,c,f,d,w,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=v,h=x;g<h;g+=3){const m=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);r=Nl(this,o,e,i,c,f,d,m,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=u.length;v<x;v++){const g=u[v],h=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,A=_;y<A;y+=3){const w=y,T=y+1,b=y+2;r=Nl(this,h,e,i,c,f,d,w,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=v,h=x;g<h;g+=3){const m=g,_=g+1,y=g+2;r=Nl(this,o,e,i,c,f,d,m,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function qw(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ei,a),l===null)return null;Ul.copy(a),Ul.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ul);return c<n.near||c>n.far?null:{distance:c,point:Ul.clone(),object:t}}function Nl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,As),t.getVertexPosition(l,Cs),t.getVertexPosition(c,bs);const f=qw(t,e,n,i,As,Cs,bs,Dl);if(f){r&&(Pl.fromBufferAttribute(r,a),Ll.fromBufferAttribute(r,l),Il.fromBufferAttribute(r,c),f.uv=cn.getInterpolation(Dl,As,Cs,bs,Pl,Ll,Il,new Se)),s&&(Pl.fromBufferAttribute(s,a),Ll.fromBufferAttribute(s,l),Il.fromBufferAttribute(s,c),f.uv1=cn.getInterpolation(Dl,As,Cs,bs,Pl,Ll,Il,new Se)),o&&(bg.fromBufferAttribute(o,a),Rg.fromBufferAttribute(o,l),Pg.fromBufferAttribute(o,c),f.normal=cn.getInterpolation(Dl,As,Cs,bs,bg,Rg,Pg,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};cn.getNormal(As,Cs,bs,d.normal),f.face=d}return f}class St extends dn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function v(x,g,h,m,_,y,A,w,T,b,M){const S=y/T,P=A/b,I=y/2,U=A/2,O=w/2,H=T+1,z=b+1;let K=0,N=0;const q=new L;for(let Z=0;Z<z;Z++){const se=Z*P-U;for(let ve=0;ve<H;ve++){const He=ve*S-I;q[x]=He*m,q[g]=se*_,q[h]=O,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[h]=w>0?1:-1,f.push(q.x,q.y,q.z),d.push(ve/T),d.push(1-Z/b),K+=1}}for(let Z=0;Z<b;Z++)for(let se=0;se<T;se++){const ve=u+se+H*Z,He=u+se+H*(Z+1),$=u+(se+1)+H*(Z+1),re=u+(se+1)+H*Z;l.push(ve,He,re),l.push(He,$,re),N+=6}a.addGroup(p,N,M),p+=N,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Po(t[n]);for(const r in i)e[r]=i[r]}return e}function $w(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Sx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Kw={clone:Po,merge:an};var Zw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zw,this.fragmentShader=Qw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=$w(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Mx extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new L,Lg=new Se,Ig=new Se;class zn extends Mx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,n){return this.getViewBounds(e,Lg,Ig),n.subVectors(Ig,Lg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rs=-90,Ps=1;class Jw extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Rs,Ps,e,n);r.layers=this.layers,this.add(r);const s=new zn(Rs,Ps,e,n);s.layers=this.layers,this.add(s);const o=new zn(Rs,Ps,e,n);o.layers=this.layers,this.add(o);const a=new zn(Rs,Ps,e,n);a.layers=this.layers,this.add(a);const l=new zn(Rs,Ps,e,n);l.layers=this.layers,this.add(l);const c=new zn(Rs,Ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ex extends Mn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:To,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class e1 extends ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ex(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:li}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new St(5,5,5),s=new Cr({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Mr});s.uniforms.tEquirect.value=n;const o=new de(r,s),a=n.minFilter;return n.minFilter===es&&(n.minFilter=li),new Jw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const bf=new L,t1=new L,n1=new ke;class ai{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bf.subVectors(i,n).cross(t1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||n1.getNormalMatrix(e),r=this.coplanarPoint(bf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new $a,Fl=new L;class lp{constructor(e=new ai,n=new ai,i=new ai,r=new ai,s=new ai,o=new ai){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],u=r[7],p=r[8],v=r[9],x=r[10],g=r[11],h=r[12],m=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,u-c,g-p,y-h).normalize(),i[1].setComponents(l+s,u+c,g+p,y+h).normalize(),i[2].setComponents(l+o,u+f,g+v,y+m).normalize(),i[3].setComponents(l-o,u-f,g-v,y-m).normalize(),i[4].setComponents(l-a,u-d,g-x,y-_).normalize(),n===Oi)i[5].setComponents(l+a,u+d,g+x,y+_).normalize();else if(n===Kc)i[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fl.x=r.normal.x>0?e.max.x:e.min.x,Fl.y=r.normal.y>0?e.max.y:e.min.y,Fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function i1(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l._updateRange,u=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&u.length===0&&t.bufferSubData(c,0,f),u.length!==0){for(let p=0,v=u.length;p<v;p++){const x=u[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ka extends dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,u=n/l,p=[],v=[],x=[],g=[];for(let h=0;h<f;h++){const m=h*u-o;for(let _=0;_<c;_++){const y=_*d-s;v.push(y,-m,0),x.push(0,0,1),g.push(_/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const _=m+c*h,y=m+c*(h+1),A=m+1+c*(h+1),w=m+1+c*h;p.push(_,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new ct(v,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var r1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,h1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,p1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,v1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,C1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,R1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U1="gl_FragColor = linearToOutputTexel( gl_FragColor );",N1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,F1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:r1,alphahash_pars_fragment:s1,alphamap_fragment:o1,alphamap_pars_fragment:a1,alphatest_fragment:l1,alphatest_pars_fragment:c1,aomap_fragment:u1,aomap_pars_fragment:f1,batching_pars_vertex:d1,batching_vertex:h1,begin_vertex:p1,beginnormal_vertex:m1,bsdfs:g1,iridescence_fragment:_1,bumpmap_pars_fragment:v1,clipping_planes_fragment:x1,clipping_planes_pars_fragment:y1,clipping_planes_pars_vertex:S1,clipping_planes_vertex:M1,color_fragment:E1,color_pars_fragment:w1,color_pars_vertex:T1,color_vertex:A1,common:C1,cube_uv_reflection_fragment:b1,defaultnormal_vertex:R1,displacementmap_pars_vertex:P1,displacementmap_vertex:L1,emissivemap_fragment:I1,emissivemap_pars_fragment:D1,colorspace_fragment:U1,colorspace_pars_fragment:N1,envmap_fragment:F1,envmap_common_pars_fragment:O1,envmap_pars_fragment:k1,envmap_pars_vertex:B1,envmap_physical_pars_fragment:K1,envmap_vertex:z1,fog_vertex:H1,fog_pars_vertex:V1,fog_fragment:G1,fog_pars_fragment:W1,gradientmap_pars_fragment:X1,lightmap_pars_fragment:j1,lights_lambert_fragment:Y1,lights_lambert_pars_fragment:q1,lights_pars_begin:$1,lights_toon_fragment:Z1,lights_toon_pars_fragment:Q1,lights_phong_fragment:J1,lights_phong_pars_fragment:eT,lights_physical_fragment:tT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:rT,lights_fragment_end:sT,logdepthbuf_fragment:oT,logdepthbuf_pars_fragment:aT,logdepthbuf_pars_vertex:lT,logdepthbuf_vertex:cT,map_fragment:uT,map_pars_fragment:fT,map_particle_fragment:dT,map_particle_pars_fragment:hT,metalnessmap_fragment:pT,metalnessmap_pars_fragment:mT,morphinstance_vertex:gT,morphcolor_vertex:_T,morphnormal_vertex:vT,morphtarget_pars_vertex:xT,morphtarget_vertex:yT,normal_fragment_begin:ST,normal_fragment_maps:MT,normal_pars_fragment:ET,normal_pars_vertex:wT,normal_vertex:TT,normalmap_pars_fragment:AT,clearcoat_normal_fragment_begin:CT,clearcoat_normal_fragment_maps:bT,clearcoat_pars_fragment:RT,iridescence_pars_fragment:PT,opaque_fragment:LT,packing:IT,premultiplied_alpha_fragment:DT,project_vertex:UT,dithering_fragment:NT,dithering_pars_fragment:FT,roughnessmap_fragment:OT,roughnessmap_pars_fragment:kT,shadowmap_pars_fragment:BT,shadowmap_pars_vertex:zT,shadowmap_vertex:HT,shadowmask_pars_fragment:VT,skinbase_vertex:GT,skinning_pars_vertex:WT,skinning_vertex:XT,skinnormal_vertex:jT,specularmap_fragment:YT,specularmap_pars_fragment:qT,tonemapping_fragment:$T,tonemapping_pars_fragment:KT,transmission_fragment:ZT,transmission_pars_fragment:QT,uv_pars_fragment:JT,uv_pars_vertex:eA,uv_vertex:tA,worldpos_vertex:nA,background_vert:iA,background_frag:rA,backgroundCube_vert:sA,backgroundCube_frag:oA,cube_vert:aA,cube_frag:lA,depth_vert:cA,depth_frag:uA,distanceRGBA_vert:fA,distanceRGBA_frag:dA,equirect_vert:hA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:gA,meshbasic_vert:_A,meshbasic_frag:vA,meshlambert_vert:xA,meshlambert_frag:yA,meshmatcap_vert:SA,meshmatcap_frag:MA,meshnormal_vert:EA,meshnormal_frag:wA,meshphong_vert:TA,meshphong_frag:AA,meshphysical_vert:CA,meshphysical_frag:bA,meshtoon_vert:RA,meshtoon_frag:PA,points_vert:LA,points_frag:IA,shadow_vert:DA,shadow_frag:UA,sprite_vert:NA,sprite_frag:FA},fe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},vi={basic:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:an([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:an([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:an([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:an([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:an([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:an([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:an([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:an([fe.lights,fe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};vi.physical={uniforms:an([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ol={r:0,b:0,g:0},Hr=new Qn,OA=new $e;function kA(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,f,d=null,u=0,p=null;function v(m){let _=m.isScene===!0?m.background:null;return _&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_)),_}function x(m){let _=!1;const y=v(m);y===null?h(a,l):y&&y.isColor&&(h(y,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(m,_){const y=v(_);y&&(y.isCubeTexture||y.mapping===vu)?(f===void 0&&(f=new de(new St(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:Po(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Hr.copy(_.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(OA.makeRotationFromEuler(Hr)),f.material.toneMapped=et.getTransfer(y.colorSpace)!==at,(d!==y||u!==y.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=y,u=y.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new de(new Ka(2,2),new Cr({name:"BackgroundMaterial",uniforms:Po(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function h(m,_){m.getRGB(Ol,Sx(t)),i.buffers.color.setClear(Ol.r,Ol.g,Ol.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,h(a,l)},render:x,addToRenderList:g}}function BA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(S,P,I,U,O){let H=!1;const z=d(U,I,P);s!==z&&(s=z,c(s.object)),H=p(S,U,I,O),H&&v(S,U,I,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(S,P,I,U),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function d(S,P,I){const U=I.wireframe===!0;let O=i[S.id];O===void 0&&(O={},i[S.id]=O);let H=O[P.id];H===void 0&&(H={},O[P.id]=H);let z=H[U];return z===void 0&&(z=u(l()),H[U]=z),z}function u(S){const P=[],I=[],U=[];for(let O=0;O<n;O++)P[O]=0,I[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,P,I,U){const O=s.attributes,H=P.attributes;let z=0;const K=I.getAttributes();for(const N in K)if(K[N].location>=0){const Z=O[N];let se=H[N];if(se===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;z++}return s.attributesNum!==z||s.index!==U}function v(S,P,I,U){const O={},H=P.attributes;let z=0;const K=I.getAttributes();for(const N in K)if(K[N].location>=0){let Z=H[N];Z===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),O[N]=se,z++}s.attributes=O,s.attributesNum=z,s.index=U}function x(){const S=s.newAttributes;for(let P=0,I=S.length;P<I;P++)S[P]=0}function g(S){h(S,0)}function h(S,P){const I=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;I[S]=1,U[S]===0&&(t.enableVertexAttribArray(S),U[S]=1),O[S]!==P&&(t.vertexAttribDivisor(S,P),O[S]=P)}function m(){const S=s.newAttributes,P=s.enabledAttributes;for(let I=0,U=P.length;I<U;I++)P[I]!==S[I]&&(t.disableVertexAttribArray(I),P[I]=0)}function _(S,P,I,U,O,H,z){z===!0?t.vertexAttribIPointer(S,P,I,O,H):t.vertexAttribPointer(S,P,I,U,O,H)}function y(S,P,I,U){x();const O=U.attributes,H=I.getAttributes(),z=P.defaultAttributeValues;for(const K in H){const N=H[K];if(N.location>=0){let q=O[K];if(q===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Z=q.normalized,se=q.itemSize,ve=e.get(q);if(ve===void 0)continue;const He=ve.buffer,$=ve.type,re=ve.bytesPerElement,pe=$===t.INT||$===t.UNSIGNED_INT||q.gpuType===sx;if(q.isInterleavedBufferAttribute){const le=q.data,Be=le.stride,Ie=q.offset;if(le.isInstancedInterleavedBuffer){for(let je=0;je<N.locationSize;je++)h(N.location+je,le.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let je=0;je<N.locationSize;je++)g(N.location+je);t.bindBuffer(t.ARRAY_BUFFER,He);for(let je=0;je<N.locationSize;je++)_(N.location+je,se/N.locationSize,$,Z,Be*re,(Ie+se/N.locationSize*je)*re,pe)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)h(N.location+le,q.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<N.locationSize;le++)g(N.location+le);t.bindBuffer(t.ARRAY_BUFFER,He);for(let le=0;le<N.locationSize;le++)_(N.location+le,se/N.locationSize,$,Z,se*re,se/N.locationSize*le*re,pe)}}else if(z!==void 0){const Z=z[K];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}m()}function A(){b();for(const S in i){const P=i[S];for(const I in P){const U=P[I];for(const O in U)f(U[O].object),delete U[O];delete P[I]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const I in P){const U=P[I];for(const O in U)f(U[O].object),delete U[O];delete P[I]}delete i[S.id]}function T(S){for(const P in i){const I=i[P];if(I[S.id]===void 0)continue;const U=I[S.id];for(const O in U)f(U[O].object),delete U[O];delete I[S.id]}}function b(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:m}}function zA(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<d;p++)this.render(c[p],f[p]);else{u.multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let v=0;v<d;v++)p+=f[v];n.update(p,i,1)}}function l(c,f,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],f[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,d);let v=0;for(let x=0;x<d;x++)v+=f[x];for(let x=0;x<u.length;x++)n.update(v,i,u[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function HA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==yi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const T=w===xu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ar&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dr&&!T)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),m=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:y,maxSamples:A}}function VA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ai,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){const v=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!g)s?f(null):c();else{const m=s?0:i,_=m*4;let y=h.clippingState||null;l.value=y,y=f(v,u,_,p);for(let A=0;A!==_;++A)y[A]=n[A];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,p,v){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const h=p+x*4,m=u.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(m,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function GA(t){let e=new WeakMap;function n(o,a){return a===Yd?o.mapping=To:a===qd&&(o.mapping=Ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yd||a===qd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new e1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Tx extends Mx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const no=4,Dg=[.125,.215,.35,.446,.526,.582],$r=20,Rf=new Tx,Ug=new We;let Pf=null,Lf=0,If=0,Df=!1;const jr=(1+Math.sqrt(5))/2,Ls=1/jr,Ng=[new L(-jr,Ls,0),new L(jr,Ls,0),new L(-Ls,0,jr),new L(Ls,0,jr),new L(0,jr,-Ls),new L(0,jr,Ls),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf,Lf,If),this._renderer.xr.enabled=Df,e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===To||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:xu,format:yi,colorSpace:Ir,depthBuffer:!1},r=Og(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Og(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WA(s)),this._blurMaterial=XA(s,e,n)}return r}_compileMaterial(e){const n=new de(this._lodPlanes[0],e);this._renderer.compile(n,Rf)}_sceneToCubeUV(e,n,i,r){const a=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Ug),f.toneMapping=Er,f.autoClear=!1;const p=new Mu({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),v=new de(new St,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Ug),x=!0);for(let h=0;h<6;h++){const m=h%3;m===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):m===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;kl(r,m*_,h>2?_:0,_,_),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=u,f.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===To||e.mapping===Ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;kl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Rf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ng[(r-s-1)%Ng.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new de(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),x=s/v,g=isFinite(s)?1+Math.floor(f*x):$r;g>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$r}`);const h=[];let m=0;for(let T=0;T<$r;++T){const b=T/x,M=Math.exp(-b*b/2);h.push(M),T===0?m+=M:T<g&&(m+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/m;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const y=this._sizeLods[r],A=3*y*(r>_-no?r-_+no:0),w=4*(this._cubeSize-y);kl(n,A,w,3*y,2*y),l.setRenderTarget(n),l.render(d,Rf)}}function WA(t){const e=[],n=[],i=[];let r=t;const s=t-no+1+Dg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-no?l=Dg[o-t+no-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,x=3,g=2,h=1,m=new Float32Array(x*v*p),_=new Float32Array(g*v*p),y=new Float32Array(h*v*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,b=w>2?0:-1,M=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];m.set(M,x*v*w),_.set(u,g*v*w);const S=[w,w,w,w,w,w];y.set(S,h*v*w)}const A=new dn;A.setAttribute("position",new $n(m,x)),A.setAttribute("uv",new $n(_,g)),A.setAttribute("faceIndex",new $n(y,h)),e.push(A),r>no&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Og(t,e,n){const i=new ls(t,e,n);return i.texture.mapping=vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function XA(t,e,n){const i=new Float32Array($r),r=new L(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function kg(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Bg(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yd||l===qd,f=l===To||l===Ao;if(c||f){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new Fg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Fg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function YA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&mx("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qA(t,e,n,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);for(const v in u.morphAttributes){const x=u.morphAttributes[v];for(let g=0,h=x.length;g<h;g++)e.remove(x[g])}u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const v in u)e.update(u[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let g=0,h=x.length;g<h;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const m=p.array;x=p.version;for(let _=0,y=m.length;_<y;_+=3){const A=m[_+0],w=m[_+1],T=m[_+2];u.push(A,w,w,T,T,A)}}else if(v!==void 0){const m=v.array;x=v.version;for(let _=0,y=m.length/3-1;_<y;_+=3){const A=_+0,w=_+1,T=_+2;u.push(A,w,w,T,T,A)}}else return;const g=new(px(u)?yx:xx)(u,1);g.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function $A(t,e,n){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,p){t.drawElements(i,p,s,u*o),n.update(p,i,1)}function c(u,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,u*o,v),n.update(p,i,v))}function f(u,p,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<v;g++)this.render(u[g]/o,p[g]);else{x.multiDrawElementsWEBGL(i,p,0,s,u,0,v);let g=0;for(let h=0;h<v;h++)g+=p[h];n.update(g,i,1)}}function d(u,p,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<u.length;h++)c(u[h]/o,p[h],x[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,x,0,v);let h=0;for(let m=0;m<v;m++)h+=p[m];for(let m=0;m<x.length;m++)n.update(h,i,x[m])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function KA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ZA(t,e,n){const i=new WeakMap,r=new Vt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let M=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),v===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*A*4*d),T=new _x(w,y,A,d);T.type=dr,T.needsUpdate=!0;const b=_*4;for(let S=0;S<d;S++){const P=g[S],I=h[S],U=m[S],O=y*A*4*S;for(let H=0;H<P.count;H++){const z=H*b;p===!0&&(r.fromBufferAttribute(P,H),w[O+z+0]=r.x,w[O+z+1]=r.y,w[O+z+2]=r.z,w[O+z+3]=0),v===!0&&(r.fromBufferAttribute(I,H),w[O+z+4]=r.x,w[O+z+5]=r.y,w[O+z+6]=r.z,w[O+z+7]=0),x===!0&&(r.fromBufferAttribute(U,H),w[O+z+8]=r.x,w[O+z+9]=r.y,w[O+z+10]=r.z,w[O+z+11]=U.itemSize===4?r.w:1)}}u={count:d,texture:T,size:new Se(y,A)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function QA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ax extends Mn{constructor(e,n,i,r,s,o,a,l,c,f=po){if(f!==po&&f!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===po&&(i=Co),i===void 0&&f===Ro&&(i=bo),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Cx=new Mn,bx=new Ax(1,1);bx.compareFunction=dx;const Rx=new _x,Px=new kw,Lx=new Ex,zg=[],Hg=[],Vg=new Float32Array(16),Gg=new Float32Array(9),Wg=new Float32Array(4);function Fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zg[r];if(s===void 0&&(s=new Float32Array(r),zg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Eu(t,e){let n=Hg[e];n===void 0&&(n=new Int32Array(e),Hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function tC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function nC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function iC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Wg.set(i),t.uniformMatrix2fv(this.addr,!1,Wg),Nt(n,i)}}function rC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Gg.set(i),t.uniformMatrix3fv(this.addr,!1,Gg),Nt(n,i)}}function sC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Vg.set(i),t.uniformMatrix4fv(this.addr,!1,Vg),Nt(n,i)}}function oC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function aC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function lC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function cC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function uC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function dC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function hC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function pC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?bx:Cx;n.setTexture2D(e||s,r)}function mC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Px,r)}function gC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lx,r)}function _C(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rx,r)}function vC(t){switch(t){case 5126:return JA;case 35664:return eC;case 35665:return tC;case 35666:return nC;case 35674:return iC;case 35675:return rC;case 35676:return sC;case 5124:case 35670:return oC;case 35667:case 35671:return aC;case 35668:case 35672:return lC;case 35669:case 35673:return cC;case 5125:return uC;case 36294:return fC;case 36295:return dC;case 36296:return hC;case 35678:case 36198:case 36298:case 36306:case 35682:return pC;case 35679:case 36299:case 36307:return mC;case 35680:case 36300:case 36308:case 36293:return gC;case 36289:case 36303:case 36311:case 36292:return _C}}function xC(t,e){t.uniform1fv(this.addr,e)}function yC(t,e){const n=Fo(e,this.size,2);t.uniform2fv(this.addr,n)}function SC(t,e){const n=Fo(e,this.size,3);t.uniform3fv(this.addr,n)}function MC(t,e){const n=Fo(e,this.size,4);t.uniform4fv(this.addr,n)}function EC(t,e){const n=Fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function wC(t,e){const n=Fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TC(t,e){const n=Fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AC(t,e){t.uniform1iv(this.addr,e)}function CC(t,e){t.uniform2iv(this.addr,e)}function bC(t,e){t.uniform3iv(this.addr,e)}function RC(t,e){t.uniform4iv(this.addr,e)}function PC(t,e){t.uniform1uiv(this.addr,e)}function LC(t,e){t.uniform2uiv(this.addr,e)}function IC(t,e){t.uniform3uiv(this.addr,e)}function DC(t,e){t.uniform4uiv(this.addr,e)}function UC(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Cx,s[o])}function NC(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Px,s[o])}function FC(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Lx,s[o])}function OC(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Rx,s[o])}function kC(t){switch(t){case 5126:return xC;case 35664:return yC;case 35665:return SC;case 35666:return MC;case 35674:return EC;case 35675:return wC;case 35676:return TC;case 5124:case 35670:return AC;case 35667:case 35671:return CC;case 35668:case 35672:return bC;case 35669:case 35673:return RC;case 5125:return PC;case 36294:return LC;case 36295:return IC;case 36296:return DC;case 35678:case 36198:case 36298:case 36306:case 35682:return UC;case 35679:case 36299:case 36307:return NC;case 35680:case 36300:case 36308:case 36293:return FC;case 36289:case 36303:case 36311:case 36292:return OC}}class BC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vC(n.type)}}class zC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kC(n.type)}}class HC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Uf=/(\w+)(\])?(\[|\.)?/g;function Xg(t,e){t.seq.push(e),t.map[e.id]=e}function VC(t,e,n){const i=t.name,r=i.length;for(Uf.lastIndex=0;;){const s=Uf.exec(i),o=Uf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xg(n,c===void 0?new BC(a,t,e):new zC(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new HC(a),Xg(n,d)),n=d}}}class vc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);VC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GC=37297;let WC=0;function XC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function jC(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===$c&&n===qc?i="LinearDisplayP3ToLinearSRGB":e===qc&&n===$c&&(i="LinearSRGBToLinearDisplayP3"),t){case Ir:case yu:return[i,"LinearTransferOETF"];case _i:case sp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+XC(t.getShaderSource(e),o)}else return r}function YC(t,e){const n=jC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function qC(t,e){let n;switch(e){case HE:n="Linear";break;case VE:n="Reinhard";break;case GE:n="OptimizedCineon";break;case WE:n="ACESFilmic";break;case jE:n="AgX";break;case YE:n="Neutral";break;case XE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function $C(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function KC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ca(t){return t!==""}function qg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $g(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(t){return t.replace(QC,eb)}const JC=new Map;function eb(t,e){let n=Oe[e];if(n===void 0){const i=JC.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(n)}const tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(t){return t.replace(tb,nb)}function nb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ib(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function rb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case To:case Ao:e="ENVMAP_TYPE_CUBE";break;case vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function ob(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ix:e="ENVMAP_BLENDING_MULTIPLY";break;case BE:e="ENVMAP_BLENDING_MIX";break;case zE:e="ENVMAP_BLENDING_ADD";break}return e}function ab(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ib(n),c=rb(n),f=sb(n),d=ob(n),u=ab(n),p=$C(n),v=KC(s),x=r.createProgram();let g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ca).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ca).join(`
`),h.length>0&&(h+=`
`)):(g=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),h=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Er?qC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,YC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ca).join(`
`)),o=Zd(o),o=qg(o,n),o=$g(o,n),a=Zd(a),a=qg(a,n),a=$g(a,n),o=Kg(o),a=Kg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=m+g+o,y=m+h+a,A=jg(r,r.VERTEX_SHADER,_),w=jg(r,r.FRAGMENT_SHADER,y);r.attachShader(x,A),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(P){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(x).trim(),U=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(w).trim();let H=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,A,w);else{const K=Yg(r,A,"vertex"),N=Yg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+K+`
`+N)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||O==="")&&(z=!1);z&&(P.diagnostics={runnable:H,programLog:I,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:h}})}r.deleteShader(A),r.deleteShader(w),b=new vc(r,x),M=ZC(r,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,GC)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let cb=0;class ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fb(e),n.set(e,i)),i}}class fb{constructor(e){this.id=cb++,this.code=e,this.usedTimes=0}}function db(t,e,n,i,r,s,o){const a=new ap,l=new ub,c=new Set,f=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,P,I,U){const O=I.fog,H=U.geometry,z=M.isMeshStandardMaterial?I.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||z),N=K&&K.mapping===vu?K.image.height:null,q=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Z!==void 0?Z.length:0;let ve=0;H.morphAttributes.position!==void 0&&(ve=1),H.morphAttributes.normal!==void 0&&(ve=2),H.morphAttributes.color!==void 0&&(ve=3);let He,$,re,pe;if(q){const Ze=vi[q];He=Ze.vertexShader,$=Ze.fragmentShader}else He=M.vertexShader,$=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const le=t.getRenderTarget(),Be=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,je=!!M.map,F=!!M.matcap,Ye=!!K,Ge=!!M.aoMap,rt=!!M.lightMap,Te=!!M.bumpMap,qe=!!M.normalMap,ze=!!M.displacementMap,De=!!M.emissiveMap,ht=!!M.metalnessMap,D=!!M.roughnessMap,C=M.anisotropy>0,X=M.clearcoat>0,Q=M.dispersion>0,ee=M.iridescence>0,te=M.sheen>0,Me=M.transmission>0,ue=C&&!!M.anisotropyMap,ce=X&&!!M.clearcoatMap,Ue=X&&!!M.clearcoatNormalMap,oe=X&&!!M.clearcoatRoughnessMap,xe=ee&&!!M.iridescenceMap,Ve=ee&&!!M.iridescenceThicknessMap,be=te&&!!M.sheenColorMap,he=te&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,Fe=!!M.specularColorMap,_t=!!M.specularIntensityMap,E=Me&&!!M.transmissionMap,j=Me&&!!M.thicknessMap,V=!!M.gradientMap,Y=!!M.alphaMap,J=M.alphaTest>0,Ee=!!M.alphaHash,Le=!!M.extensions;let vt=Er;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(vt=t.toneMapping);const At={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:$,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&U._colorsTexture!==null,instancing:Be,instancingColor:Be&&U.instanceColor!==null,instancingMorph:Be&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ir,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:F,envMap:Ye,envMapMode:Ye&&K.mapping,envMapCubeUVHeight:N,aoMap:Ge,lightMap:rt,bumpMap:Te,normalMap:qe,displacementMap:u&&ze,emissiveMap:De,normalMapObjectSpace:qe&&M.normalMapType===aw,normalMapTangentSpace:qe&&M.normalMapType===fx,metalnessMap:ht,roughnessMap:D,anisotropy:C,anisotropyMap:ue,clearcoat:X,clearcoatMap:ce,clearcoatNormalMap:Ue,clearcoatRoughnessMap:oe,dispersion:Q,iridescence:ee,iridescenceMap:xe,iridescenceThicknessMap:Ve,sheen:te,sheenColorMap:be,sheenRoughnessMap:he,specularMap:Ne,specularColorMap:Fe,specularIntensityMap:_t,transmission:Me,transmissionMap:E,thicknessMap:j,gradientMap:V,opaque:M.transparent===!1&&M.blending===ho&&M.alphaToCoverage===!1,alphaMap:Y,alphaTest:J,alphaHash:Ee,combine:M.combine,mapUv:je&&x(M.map.channel),aoMapUv:Ge&&x(M.aoMap.channel),lightMapUv:rt&&x(M.lightMap.channel),bumpMapUv:Te&&x(M.bumpMap.channel),normalMapUv:qe&&x(M.normalMap.channel),displacementMapUv:ze&&x(M.displacementMap.channel),emissiveMapUv:De&&x(M.emissiveMap.channel),metalnessMapUv:ht&&x(M.metalnessMap.channel),roughnessMapUv:D&&x(M.roughnessMap.channel),anisotropyMapUv:ue&&x(M.anisotropyMap.channel),clearcoatMapUv:ce&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(M.sheenRoughnessMap.channel),specularMapUv:Ne&&x(M.specularMap.channel),specularColorMapUv:Fe&&x(M.specularColorMap.channel),specularIntensityMapUv:_t&&x(M.specularIntensityMap.channel),transmissionMapUv:E&&x(M.transmissionMap.channel),thicknessMapUv:j&&x(M.thicknessMap.channel),alphaMapUv:Y&&x(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(qe||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(je||Y),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hn,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Le&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Le&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(m(S,M),_(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function m(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),M.push(a.mask)}function y(M){const S=v[M.type];let P;if(S){const I=vi[S];P=Kw.clone(I.uniforms)}else P=M.uniforms;return P}function A(M,S){let P;for(let I=0,U=f.length;I<U;I++){const O=f[I];if(O.cacheKey===S){P=O,++P.usedTimes;break}}return P===void 0&&(P=new lb(t,S,M,s),f.push(P)),P}function w(M){if(--M.usedTimes===0){const S=f.indexOf(M);f[S]=f[f.length-1],f.pop(),M.destroy()}}function T(M){l.remove(M)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:f,dispose:b}}function hb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function pb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,u,p,v,x,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:u,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=u,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=x,h.group=g),e++,h}function a(d,u,p,v,x,g){const h=o(d,u,p,v,x,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,u,p,v,x,g){const h=o(d,u,p,v,x,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,u){n.length>1&&n.sort(d||pb),i.length>1&&i.sort(u||Qg),r.length>1&&r.sort(u||Qg)}function f(){for(let d=e,u=t.length;d<u;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function mb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jg,t.set(i,[o])):r>=s.length?(o=new Jg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new We};break;case"SpotLight":n={position:new L,direction:new L,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function _b(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vb=0;function xb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yb(t){const e=new gb,n=_b(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new $e,o=new $e;function a(c){let f=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,x=0,g=0,h=0,m=0,_=0,y=0,A=0,w=0,T=0;c.sort(xb);for(let M=0,S=c.length;M<S;M++){const P=c[M],I=P.color,U=P.intensity,O=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=I.r*U,d+=I.g*U,u+=I.b*U;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],U);T++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,N=n.get(P);N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=z,p++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(I).multiplyScalar(U),z.distance=O,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[x]=z;const K=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[x]=K.matrix,P.castShadow){const N=n.get(P);N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=H,y++}x++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(I).multiplyScalar(U),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=z,g++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const K=P.shadow,N=n.get(P);N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,i.pointShadow[v]=N,i.pointShadowMap[v]=H,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=z,v++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(U),z.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[h]=z,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==x||b.rectAreaLength!==g||b.hemiLength!==h||b.numDirectionalShadows!==m||b.numPointShadows!==_||b.numSpotShadows!==y||b.numSpotMaps!==A||b.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,b.directionalLength=p,b.pointLength=v,b.spotLength=x,b.rectAreaLength=g,b.hemiLength=h,b.numDirectionalShadows=m,b.numPointShadows=_,b.numSpotShadows=y,b.numSpotMaps=A,b.numLightProbes=T,i.version=vb++)}function l(c,f){let d=0,u=0,p=0,v=0,x=0;const g=f.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const _=c[h];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function e0(t){const e=new yb(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Sb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new e0(t),e.set(r,[a])):s>=o.length?(a=new e0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Mb extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eb extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ab(t,e,n){let i=new lp;const r=new Se,s=new Se,o=new Vt,a=new Mb({depthPacking:ow}),l=new Eb,c={},f=n.maxTextureSize,d={[Ei]:fn,[fn]:Ei,[Hn]:Hn},u=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:wb,fragmentShader:Tb}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new dn;v.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new de(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tx;let h=this.type;this.render=function(w,T,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Mr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=h!==Pi&&this.type===Pi,O=h===Pi&&this.type!==Pi;for(let H=0,z=w.length;H<z;H++){const K=w[H],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/q.y),r.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||U===!0||O===!0){const se=this.type!==Pi?{minFilter:Gn,magFilter:Gn}:{};N.map!==null&&N.map.dispose(),N.map=new ls(r.x,r.y,se),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let se=0;se<Z;se++){const ve=N.getViewport(se);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),I.viewport(o),N.updateMatrices(K,se),i=N.getFrustum(),y(T,b,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===Pi&&m(N,b),N.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(M,S,P)};function m(w,T){const b=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ls(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,b,u,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,b,p,x,null)}function _(w,T,b,M){let S=null;const P=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=S.uuid,U=T.uuid;let O=c[I];O===void 0&&(O={},c[I]=O);let H=O[U];H===void 0&&(H=S.clone(),O[U]=H,T.addEventListener("dispose",A)),S=H}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Pi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=t.properties.get(S);I.light=b}return S}function y(w,T,b,M,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Pi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const U=e.update(w),O=w.material;if(Array.isArray(O)){const H=U.groups;for(let z=0,K=H.length;z<K;z++){const N=H[z],q=O[N.materialIndex];if(q&&q.visible){const Z=_(w,q,M,S);w.onBeforeShadow(t,w,T,b,U,Z,N),t.renderBufferDirect(b,null,U,Z,w,N),w.onAfterShadow(t,w,T,b,U,Z,N)}}}else if(O.visible){const H=_(w,O,M,S);w.onBeforeShadow(t,w,T,b,U,H,null),t.renderBufferDirect(b,null,U,H,w,null),w.onAfterShadow(t,w,T,b,U,H,null)}}const I=w.children;for(let U=0,O=I.length;U<O;U++)y(I[U],T,b,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(const b in c){const M=c[b],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Cb(t){function e(){let E=!1;const j=new Vt;let V=null;const Y=new Vt(0,0,0,0);return{setMask:function(J){V!==J&&!E&&(t.colorMask(J,J,J,J),V=J)},setLocked:function(J){E=J},setClear:function(J,Ee,Le,vt,At){At===!0&&(J*=vt,Ee*=vt,Le*=vt),j.set(J,Ee,Le,vt),Y.equals(j)===!1&&(t.clearColor(J,Ee,Le,vt),Y.copy(j))},reset:function(){E=!1,V=null,Y.set(-1,0,0,0)}}}function n(){let E=!1,j=null,V=null,Y=null;return{setTest:function(J){J?pe(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(J){j!==J&&!E&&(t.depthMask(J),j=J)},setFunc:function(J){if(V!==J){switch(J){case IE:t.depthFunc(t.NEVER);break;case DE:t.depthFunc(t.ALWAYS);break;case UE:t.depthFunc(t.LESS);break;case Xc:t.depthFunc(t.LEQUAL);break;case NE:t.depthFunc(t.EQUAL);break;case FE:t.depthFunc(t.GEQUAL);break;case OE:t.depthFunc(t.GREATER);break;case kE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}V=J}},setLocked:function(J){E=J},setClear:function(J){Y!==J&&(t.clearDepth(J),Y=J)},reset:function(){E=!1,j=null,V=null,Y=null}}}function i(){let E=!1,j=null,V=null,Y=null,J=null,Ee=null,Le=null,vt=null,At=null;return{setTest:function(Ze){E||(Ze?pe(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Ze){j!==Ze&&!E&&(t.stencilMask(Ze),j=Ze)},setFunc:function(Ze,Ct,bt){(V!==Ze||Y!==Ct||J!==bt)&&(t.stencilFunc(Ze,Ct,bt),V=Ze,Y=Ct,J=bt)},setOp:function(Ze,Ct,bt){(Ee!==Ze||Le!==Ct||vt!==bt)&&(t.stencilOp(Ze,Ct,bt),Ee=Ze,Le=Ct,vt=bt)},setLocked:function(Ze){E=Ze},setClear:function(Ze){At!==Ze&&(t.clearStencil(Ze),At=Ze)},reset:function(){E=!1,j=null,V=null,Y=null,J=null,Ee=null,Le=null,vt=null,At=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,u=[],p=null,v=!1,x=null,g=null,h=null,m=null,_=null,y=null,A=null,w=new We(0,0,0),T=0,b=!1,M=null,S=null,P=null,I=null,U=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=z>=2);let N=null,q={};const Z=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),ve=new Vt().fromArray(Z),He=new Vt().fromArray(se);function $(E,j,V,Y){const J=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(E,Ee),t.texParameteri(E,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(E,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<V;Le++)E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY?t.texImage3D(j,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,J):t.texImage2D(j+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,J);return Ee}const re={};re[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),s.setFunc(Xc),Te(!1),qe(Um),pe(t.CULL_FACE),Ge(Mr);function pe(E){c[E]!==!0&&(t.enable(E),c[E]=!0)}function le(E){c[E]!==!1&&(t.disable(E),c[E]=!1)}function Be(E,j){return f[E]!==j?(t.bindFramebuffer(E,j),f[E]=j,E===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=j),E===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=j),!0):!1}function Ie(E,j){let V=u,Y=!1;if(E){V=d.get(j),V===void 0&&(V=[],d.set(j,V));const J=E.textures;if(V.length!==J.length||V[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,Le=J.length;Ee<Le;Ee++)V[Ee]=t.COLOR_ATTACHMENT0+Ee;V.length=J.length,Y=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,Y=!0);Y&&t.drawBuffers(V)}function je(E){return p!==E?(t.useProgram(E),p=E,!0):!1}const F={[qr]:t.FUNC_ADD,[mE]:t.FUNC_SUBTRACT,[gE]:t.FUNC_REVERSE_SUBTRACT};F[_E]=t.MIN,F[vE]=t.MAX;const Ye={[xE]:t.ZERO,[yE]:t.ONE,[SE]:t.SRC_COLOR,[Xd]:t.SRC_ALPHA,[CE]:t.SRC_ALPHA_SATURATE,[TE]:t.DST_COLOR,[EE]:t.DST_ALPHA,[ME]:t.ONE_MINUS_SRC_COLOR,[jd]:t.ONE_MINUS_SRC_ALPHA,[AE]:t.ONE_MINUS_DST_COLOR,[wE]:t.ONE_MINUS_DST_ALPHA,[bE]:t.CONSTANT_COLOR,[RE]:t.ONE_MINUS_CONSTANT_COLOR,[PE]:t.CONSTANT_ALPHA,[LE]:t.ONE_MINUS_CONSTANT_ALPHA};function Ge(E,j,V,Y,J,Ee,Le,vt,At,Ze){if(E===Mr){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(pe(t.BLEND),v=!0),E!==pE){if(E!==x||Ze!==b){if((g!==qr||_!==qr)&&(t.blendEquation(t.FUNC_ADD),g=qr,_=qr),Ze)switch(E){case ho:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nm:t.blendFunc(t.ONE,t.ONE);break;case Fm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Om:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case ho:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Fm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Om:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}h=null,m=null,y=null,A=null,w.set(0,0,0),T=0,x=E,b=Ze}return}J=J||j,Ee=Ee||V,Le=Le||Y,(j!==g||J!==_)&&(t.blendEquationSeparate(F[j],F[J]),g=j,_=J),(V!==h||Y!==m||Ee!==y||Le!==A)&&(t.blendFuncSeparate(Ye[V],Ye[Y],Ye[Ee],Ye[Le]),h=V,m=Y,y=Ee,A=Le),(vt.equals(w)===!1||At!==T)&&(t.blendColor(vt.r,vt.g,vt.b,At),w.copy(vt),T=At),x=E,b=!1}function rt(E,j){E.side===Hn?le(t.CULL_FACE):pe(t.CULL_FACE);let V=E.side===fn;j&&(V=!V),Te(V),E.blending===ho&&E.transparent===!1?Ge(Mr):Ge(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),s.setFunc(E.depthFunc),s.setTest(E.depthTest),s.setMask(E.depthWrite),r.setMask(E.colorWrite);const Y=E.stencilWrite;o.setTest(Y),Y&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),De(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(E){M!==E&&(E?t.frontFace(t.CW):t.frontFace(t.CCW),M=E)}function qe(E){E!==dE?(pe(t.CULL_FACE),E!==S&&(E===Um?t.cullFace(t.BACK):E===hE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),S=E}function ze(E){E!==P&&(H&&t.lineWidth(E),P=E)}function De(E,j,V){E?(pe(t.POLYGON_OFFSET_FILL),(I!==j||U!==V)&&(t.polygonOffset(j,V),I=j,U=V)):le(t.POLYGON_OFFSET_FILL)}function ht(E){E?pe(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function D(E){E===void 0&&(E=t.TEXTURE0+O-1),N!==E&&(t.activeTexture(E),N=E)}function C(E,j,V){V===void 0&&(N===null?V=t.TEXTURE0+O-1:V=N);let Y=q[V];Y===void 0&&(Y={type:void 0,texture:void 0},q[V]=Y),(Y.type!==E||Y.texture!==j)&&(N!==V&&(t.activeTexture(V),N=V),t.bindTexture(E,j||re[E]),Y.type=E,Y.texture=j)}function X(){const E=q[N];E!==void 0&&E.type!==void 0&&(t.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function be(E){ve.equals(E)===!1&&(t.scissor(E.x,E.y,E.z,E.w),ve.copy(E))}function he(E){He.equals(E)===!1&&(t.viewport(E.x,E.y,E.z,E.w),He.copy(E))}function Ne(E,j){let V=l.get(j);V===void 0&&(V=new WeakMap,l.set(j,V));let Y=V.get(E);Y===void 0&&(Y=t.getUniformBlockIndex(j,E.name),V.set(E,Y))}function Fe(E,j){const Y=l.get(j).get(E);a.get(j)!==Y&&(t.uniformBlockBinding(j,Y,E.__bindingPointIndex),a.set(j,Y))}function _t(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,q={},f={},d=new WeakMap,u=[],p=null,v=!1,x=null,g=null,h=null,m=null,_=null,y=null,A=null,w=new We(0,0,0),T=0,b=!1,M=null,S=null,P=null,I=null,U=null,ve.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:le,bindFramebuffer:Be,drawBuffers:Ie,useProgram:je,setBlending:Ge,setMaterial:rt,setFlipSided:Te,setCullFace:qe,setLineWidth:ze,setPolygonOffset:De,setScissorTest:ht,activeTexture:D,bindTexture:C,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:xe,texImage3D:Ve,updateUBOMapping:Ne,uniformBlockBinding:Fe,texStorage2D:Ue,texStorage3D:oe,texSubImage2D:te,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:ce,scissor:be,viewport:he,reset:_t}}function bb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,f=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,C){return p?new OffscreenCanvas(D,C):Zc("canvas")}function x(D,C,X){let Q=1;const ee=ht(D);if((ee.width>X||ee.height>X)&&(Q=X/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const te=Math.floor(Q*ee.width),Me=Math.floor(Q*ee.height);d===void 0&&(d=v(te,Me));const ue=C?v(te,Me):d;return ue.width=te,ue.height=Me,ue.getContext("2d").drawImage(D,0,0,te,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+Me+")."),ue}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==Gn&&D.minFilter!==li}function h(D){t.generateMipmap(D)}function m(D,C,X,Q,ee=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let te=C;if(C===t.RED&&(X===t.FLOAT&&(te=t.R32F),X===t.HALF_FLOAT&&(te=t.R16F),X===t.UNSIGNED_BYTE&&(te=t.R8)),C===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.R8UI),X===t.UNSIGNED_SHORT&&(te=t.R16UI),X===t.UNSIGNED_INT&&(te=t.R32UI),X===t.BYTE&&(te=t.R8I),X===t.SHORT&&(te=t.R16I),X===t.INT&&(te=t.R32I)),C===t.RG&&(X===t.FLOAT&&(te=t.RG32F),X===t.HALF_FLOAT&&(te=t.RG16F),X===t.UNSIGNED_BYTE&&(te=t.RG8)),C===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.RG8UI),X===t.UNSIGNED_SHORT&&(te=t.RG16UI),X===t.UNSIGNED_INT&&(te=t.RG32UI),X===t.BYTE&&(te=t.RG8I),X===t.SHORT&&(te=t.RG16I),X===t.INT&&(te=t.RG32I)),C===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),C===t.RGBA){const Me=ee?Yc:et.getTransfer(Q);X===t.FLOAT&&(te=t.RGBA32F),X===t.HALF_FLOAT&&(te=t.RGBA16F),X===t.UNSIGNED_BYTE&&(te=Me===at?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(D,C){let X;return D?C===null||C===Co||C===bo?X=t.DEPTH24_STENCIL8:C===dr?X=t.DEPTH32F_STENCIL8:C===jc&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Co||C===bo?X=t.DEPTH_COMPONENT24:C===dr?X=t.DEPTH_COMPONENT32F:C===jc&&(X=t.DEPTH_COMPONENT16),X}function y(D,C){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Gn&&D.minFilter!==li?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function A(D){const C=D.target;C.removeEventListener("dispose",A),T(C),C.isVideoTexture&&f.delete(C)}function w(D){const C=D.target;C.removeEventListener("dispose",w),M(C)}function T(D){const C=i.get(D);if(C.__webglInit===void 0)return;const X=D.source,Q=u.get(X);if(Q){const ee=Q[C.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(D),Object.keys(Q).length===0&&u.delete(X)}i.remove(D)}function b(D){const C=i.get(D);t.deleteTexture(C.__webglTexture);const X=D.source,Q=u.get(X);delete Q[C.__cacheKey],o.memory.textures--}function M(D){const C=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(C.__webglFramebuffer[Q]))for(let ee=0;ee<C.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(C.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(C.__webglFramebuffer[Q]);C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer[Q])}else{if(Array.isArray(C.__webglFramebuffer))for(let Q=0;Q<C.__webglFramebuffer.length;Q++)t.deleteFramebuffer(C.__webglFramebuffer[Q]);else t.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&t.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Q=0;Q<C.__webglColorRenderbuffer.length;Q++)C.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(C.__webglColorRenderbuffer[Q]);C.__webglDepthRenderbuffer&&t.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=D.textures;for(let Q=0,ee=X.length;Q<ee;Q++){const te=i.get(X[Q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(X[Q])}i.remove(D)}let S=0;function P(){S=0}function I(){const D=S;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),S+=1,D}function U(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function O(D,C){const X=i.get(D);if(D.isVideoTexture&&ze(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(X,D,C);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+C)}function H(D,C){const X=i.get(D);if(D.version>0&&X.__version!==D.version){He(X,D,C);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+C)}function z(D,C){const X=i.get(D);if(D.version>0&&X.__version!==D.version){He(X,D,C);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+C)}function K(D,C){const X=i.get(D);if(D.version>0&&X.__version!==D.version){$(X,D,C);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+C)}const N={[$d]:t.REPEAT,[Jr]:t.CLAMP_TO_EDGE,[Kd]:t.MIRRORED_REPEAT},q={[Gn]:t.NEAREST,[qE]:t.NEAREST_MIPMAP_NEAREST,[_l]:t.NEAREST_MIPMAP_LINEAR,[li]:t.LINEAR,[sf]:t.LINEAR_MIPMAP_NEAREST,[es]:t.LINEAR_MIPMAP_LINEAR},Z={[lw]:t.NEVER,[pw]:t.ALWAYS,[cw]:t.LESS,[dx]:t.LEQUAL,[uw]:t.EQUAL,[hw]:t.GEQUAL,[fw]:t.GREATER,[dw]:t.NOTEQUAL};function se(D,C){if(C.type===dr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===li||C.magFilter===sf||C.magFilter===_l||C.magFilter===es||C.minFilter===li||C.minFilter===sf||C.minFilter===_l||C.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,N[C.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,N[C.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,N[C.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,q[C.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,q[C.minFilter]),C.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Z[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Gn||C.minFilter!==_l&&C.minFilter!==es||C.type===dr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function ve(D,C){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",A));const Q=C.source;let ee=u.get(Q);ee===void 0&&(ee={},u.set(Q,ee));const te=U(C);if(te!==D.__cacheKey){ee[te]===void 0&&(ee[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[te].usedTimes++;const Me=ee[D.__cacheKey];Me!==void 0&&(ee[D.__cacheKey].usedTimes--,Me.usedTimes===0&&b(C)),D.__cacheKey=te,D.__webglTexture=ee[te].texture}return X}function He(D,C,X){let Q=t.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=ve(D,C),te=C.source;n.bindTexture(Q,D.__webglTexture,t.TEXTURE0+X);const Me=i.get(te);if(te.version!==Me.__version||ee===!0){n.activeTexture(t.TEXTURE0+X);const ue=et.getPrimaries(et.workingColorSpace),ce=C.colorSpace===lr?null:et.getPrimaries(C.colorSpace),Ue=C.colorSpace===lr||ue===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let oe=x(C.image,!1,r.maxTextureSize);oe=De(C,oe);const xe=s.convert(C.format,C.colorSpace),Ve=s.convert(C.type);let be=m(C.internalFormat,xe,Ve,C.colorSpace,C.isVideoTexture);se(Q,C);let he;const Ne=C.mipmaps,Fe=C.isVideoTexture!==!0,_t=Me.__version===void 0||ee===!0,E=te.dataReady,j=y(C,oe);if(C.isDepthTexture)be=_(C.format===Ro,C.type),_t&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,be,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,be,oe.width,oe.height,0,xe,Ve,null));else if(C.isDataTexture)if(Ne.length>0){Fe&&_t&&n.texStorage2D(t.TEXTURE_2D,j,be,Ne[0].width,Ne[0].height);for(let V=0,Y=Ne.length;V<Y;V++)he=Ne[V],Fe?E&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,he.width,he.height,xe,Ve,he.data):n.texImage2D(t.TEXTURE_2D,V,be,he.width,he.height,0,xe,Ve,he.data);C.generateMipmaps=!1}else Fe?(_t&&n.texStorage2D(t.TEXTURE_2D,j,be,oe.width,oe.height),E&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,Ve,oe.data)):n.texImage2D(t.TEXTURE_2D,0,be,oe.width,oe.height,0,xe,Ve,oe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Fe&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,j,be,Ne[0].width,Ne[0].height,oe.depth);for(let V=0,Y=Ne.length;V<Y;V++)if(he=Ne[V],C.format!==yi)if(xe!==null)if(Fe){if(E)if(C.layerUpdates.size>0){for(const J of C.layerUpdates){const Ee=he.width*he.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,J,he.width,he.height,1,xe,he.data.slice(Ee*J,Ee*(J+1)),0,0)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,he.width,he.height,oe.depth,xe,he.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,be,he.width,he.height,oe.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?E&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,he.width,he.height,oe.depth,xe,Ve,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,be,he.width,he.height,oe.depth,0,xe,Ve,he.data)}else{Fe&&_t&&n.texStorage2D(t.TEXTURE_2D,j,be,Ne[0].width,Ne[0].height);for(let V=0,Y=Ne.length;V<Y;V++)he=Ne[V],C.format!==yi?xe!==null?Fe?E&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,he.width,he.height,xe,he.data):n.compressedTexImage2D(t.TEXTURE_2D,V,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?E&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,he.width,he.height,xe,Ve,he.data):n.texImage2D(t.TEXTURE_2D,V,be,he.width,he.height,0,xe,Ve,he.data)}else if(C.isDataArrayTexture)if(Fe){if(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,j,be,oe.width,oe.height,oe.depth),E)if(C.layerUpdates.size>0){let V;switch(Ve){case t.UNSIGNED_BYTE:switch(xe){case t.ALPHA:V=1;break;case t.LUMINANCE:V=1;break;case t.LUMINANCE_ALPHA:V=2;break;case t.RGB:V=3;break;case t.RGBA:V=4;break;default:throw new Error(`Unknown texel size for format ${xe}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:V=1;break;default:throw new Error(`Unknown texel size for type ${Ve}.`)}const Y=oe.width*oe.height*V;for(const J of C.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,xe,Ve,oe.data.slice(Y*J,Y*(J+1)));C.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Ve,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,oe.width,oe.height,oe.depth,0,xe,Ve,oe.data);else if(C.isData3DTexture)Fe?(_t&&n.texStorage3D(t.TEXTURE_3D,j,be,oe.width,oe.height,oe.depth),E&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Ve,oe.data)):n.texImage3D(t.TEXTURE_3D,0,be,oe.width,oe.height,oe.depth,0,xe,Ve,oe.data);else if(C.isFramebufferTexture){if(_t)if(Fe)n.texStorage2D(t.TEXTURE_2D,j,be,oe.width,oe.height);else{let V=oe.width,Y=oe.height;for(let J=0;J<j;J++)n.texImage2D(t.TEXTURE_2D,J,be,V,Y,0,xe,Ve,null),V>>=1,Y>>=1}}else if(Ne.length>0){if(Fe&&_t){const V=ht(Ne[0]);n.texStorage2D(t.TEXTURE_2D,j,be,V.width,V.height)}for(let V=0,Y=Ne.length;V<Y;V++)he=Ne[V],Fe?E&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,xe,Ve,he):n.texImage2D(t.TEXTURE_2D,V,be,xe,Ve,he);C.generateMipmaps=!1}else if(Fe){if(_t){const V=ht(oe);n.texStorage2D(t.TEXTURE_2D,j,be,V.width,V.height)}E&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ve,oe)}else n.texImage2D(t.TEXTURE_2D,0,be,xe,Ve,oe);g(C)&&h(Q),Me.__version=te.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function $(D,C,X){if(C.image.length!==6)return;const Q=ve(D,C),ee=C.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+X);const te=i.get(ee);if(ee.version!==te.__version||Q===!0){n.activeTexture(t.TEXTURE0+X);const Me=et.getPrimaries(et.workingColorSpace),ue=C.colorSpace===lr?null:et.getPrimaries(C.colorSpace),ce=C.colorSpace===lr||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ue=C.isCompressedTexture||C.image[0].isCompressedTexture,oe=C.image[0]&&C.image[0].isDataTexture,xe=[];for(let Y=0;Y<6;Y++)!Ue&&!oe?xe[Y]=x(C.image[Y],!0,r.maxCubemapSize):xe[Y]=oe?C.image[Y].image:C.image[Y],xe[Y]=De(C,xe[Y]);const Ve=xe[0],be=s.convert(C.format,C.colorSpace),he=s.convert(C.type),Ne=m(C.internalFormat,be,he,C.colorSpace),Fe=C.isVideoTexture!==!0,_t=te.__version===void 0||Q===!0,E=ee.dataReady;let j=y(C,Ve);se(t.TEXTURE_CUBE_MAP,C);let V;if(Ue){Fe&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,j,Ne,Ve.width,Ve.height);for(let Y=0;Y<6;Y++){V=xe[Y].mipmaps;for(let J=0;J<V.length;J++){const Ee=V[J];C.format!==yi?be!==null?Fe?E&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J,0,0,Ee.width,Ee.height,be,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J,Ne,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J,0,0,Ee.width,Ee.height,be,he,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J,Ne,Ee.width,Ee.height,0,be,he,Ee.data)}}}else{if(V=C.mipmaps,Fe&&_t){V.length>0&&j++;const Y=ht(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,j,Ne,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(oe){Fe?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xe[Y].width,xe[Y].height,be,he,xe[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,xe[Y].width,xe[Y].height,0,be,he,xe[Y].data);for(let J=0;J<V.length;J++){const Le=V[J].image[Y].image;Fe?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J+1,0,0,Le.width,Le.height,be,he,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J+1,Ne,Le.width,Le.height,0,be,he,Le.data)}}else{Fe?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,be,he,xe[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,be,he,xe[Y]);for(let J=0;J<V.length;J++){const Ee=V[J];Fe?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J+1,0,0,be,he,Ee.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J+1,Ne,be,he,Ee.image[Y])}}}g(C)&&h(t.TEXTURE_CUBE_MAP),te.__version=ee.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function re(D,C,X,Q,ee,te){const Me=s.convert(X.format,X.colorSpace),ue=s.convert(X.type),ce=m(X.internalFormat,Me,ue,X.colorSpace);if(!i.get(C).__hasExternalTextures){const oe=Math.max(1,C.width>>te),xe=Math.max(1,C.height>>te);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,te,ce,oe,xe,C.depth,0,Me,ue,null):n.texImage2D(ee,te,ce,oe,xe,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),qe(C)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(X).__webglTexture,0,Te(C)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(X).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(D,C,X){if(t.bindRenderbuffer(t.RENDERBUFFER,D),C.depthBuffer){const Q=C.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,te=_(C.stencilBuffer,ee),Me=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Te(C);qe(C)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,te,C.width,C.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,te,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,te,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,D)}else{const Q=C.textures;for(let ee=0;ee<Q.length;ee++){const te=Q[ee],Me=s.convert(te.format,te.colorSpace),ue=s.convert(te.type),ce=m(te.internalFormat,Me,ue,te.colorSpace),Ue=Te(C);X&&qe(C)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ce,C.width,C.height):qe(C)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,ce,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,ce,C.width,C.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);const Q=i.get(C.depthTexture).__webglTexture,ee=Te(C);if(C.depthTexture.format===po)qe(C)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(C.depthTexture.format===Ro)qe(C)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Be(D){const C=i.get(D),X=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");le(C.__webglFramebuffer,D)}else if(X){C.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[Q]),C.__webglDepthbuffer[Q]=t.createRenderbuffer(),pe(C.__webglDepthbuffer[Q],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=t.createRenderbuffer(),pe(C.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(D,C,X){const Q=i.get(D);C!==void 0&&re(Q.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Be(D)}function je(D){const C=D.texture,X=i.get(D),Q=i.get(C);D.addEventListener("dispose",w);const ee=D.textures,te=D.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=C.version,o.memory.textures++),te){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let ce=0;ce<C.mipmaps.length;ce++)X.__webglFramebuffer[ue][ce]=t.createFramebuffer()}else X.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<C.mipmaps.length;ue++)X.__webglFramebuffer[ue]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,ce=ee.length;ue<ce;ue++){const Ue=i.get(ee[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&qe(D)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const ce=ee[ue];X.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[ue]);const Ue=s.convert(ce.format,ce.colorSpace),oe=s.convert(ce.type),xe=m(ce.internalFormat,Ue,oe,ce.colorSpace,D.isXRRenderTarget===!0),Ve=Te(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,xe,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,X.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(X.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),se(t.TEXTURE_CUBE_MAP,C);for(let ue=0;ue<6;ue++)if(C.mipmaps&&C.mipmaps.length>0)for(let ce=0;ce<C.mipmaps.length;ce++)re(X.__webglFramebuffer[ue][ce],D,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ce);else re(X.__webglFramebuffer[ue],D,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(C)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,ce=ee.length;ue<ce;ue++){const Ue=ee[ue],oe=i.get(Ue);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),se(t.TEXTURE_2D,Ue),re(X.__webglFramebuffer,D,Ue,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),g(Ue)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Q.__webglTexture),se(ue,C),C.mipmaps&&C.mipmaps.length>0)for(let ce=0;ce<C.mipmaps.length;ce++)re(X.__webglFramebuffer[ce],D,C,t.COLOR_ATTACHMENT0,ue,ce);else re(X.__webglFramebuffer,D,C,t.COLOR_ATTACHMENT0,ue,0);g(C)&&h(ue),n.unbindTexture()}D.depthBuffer&&Be(D)}function F(D){const C=D.textures;for(let X=0,Q=C.length;X<Q;X++){const ee=C[X];if(g(ee)){const te=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ee).__webglTexture;n.bindTexture(te,Me),h(te),n.unbindTexture()}}}const Ye=[],Ge=[];function rt(D){if(D.samples>0){if(qe(D)===!1){const C=D.textures,X=D.width,Q=D.height;let ee=t.COLOR_BUFFER_BIT;const te=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(D),ue=C.length>1;if(ue)for(let ce=0;ce<C.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ce=0;ce<C.length;ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Ue=i.get(C[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,X,Q,0,0,X,Q,ee,t.NEAREST),l===!0&&(Ye.length=0,Ge.length=0,Ye.push(t.COLOR_ATTACHMENT0+ce),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ye.push(te),Ge.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ye))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ce=0;ce<C.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Ue=i.get(C[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const C=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[C])}}}function Te(D){return Math.min(r.maxSamples,D.samples)}function qe(D){const C=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ze(D){const C=o.render.frame;f.get(D)!==C&&(f.set(D,C),D.update())}function De(D,C){const X=D.colorSpace,Q=D.format,ee=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Ir&&X!==lr&&(et.getTransfer(X)===at?(Q!==yi||ee!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function ht(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Ie,this.setupRenderTarget=je,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=re,this.useMultisampledRTT=qe}function Rb(t,e){function n(i,r=lr){let s;const o=et.getTransfer(r);if(i===Ar)return t.UNSIGNED_BYTE;if(i===ox)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ax)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ZE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$E)return t.BYTE;if(i===KE)return t.SHORT;if(i===jc)return t.UNSIGNED_SHORT;if(i===sx)return t.INT;if(i===Co)return t.UNSIGNED_INT;if(i===dr)return t.FLOAT;if(i===xu)return t.HALF_FLOAT;if(i===QE)return t.ALPHA;if(i===JE)return t.RGB;if(i===yi)return t.RGBA;if(i===ew)return t.LUMINANCE;if(i===tw)return t.LUMINANCE_ALPHA;if(i===po)return t.DEPTH_COMPONENT;if(i===Ro)return t.DEPTH_STENCIL;if(i===nw)return t.RED;if(i===lx)return t.RED_INTEGER;if(i===iw)return t.RG;if(i===cx)return t.RG_INTEGER;if(i===ux)return t.RGBA_INTEGER;if(i===of||i===af||i===lf||i===cf)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===of)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===af)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===of)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===af)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===km||i===Bm||i===zm||i===Hm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===km)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vm||i===Gm||i===Wm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vm||i===Gm)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wm)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xm||i===jm||i===Ym||i===qm||i===$m||i===Km||i===Zm||i===Qm||i===Jm||i===eg||i===tg||i===ng||i===ig||i===rg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xm)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jm)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ym)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qm)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$m)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Km)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zm)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qm)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jm)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eg)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tg)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ng)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ig)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rg)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uf||i===sg||i===og)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uf)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===og)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rw||i===ag||i===lg||i===cg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===uf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ag)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Pb extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class io extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lb={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new io;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Db=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Cr({vertexShader:Ib,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new de(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Nb extends fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,v=null;const x=new Ub,g=n.getContextAttributes();let h=null,m=null;const _=[],y=[],A=new Se;let w=null;const T=new zn;T.layers.enable(1),T.viewport=new Vt;const b=new zn;b.layers.enable(2),b.viewport=new Vt;const M=[T,b],S=new Pb;S.layers.enable(1),S.layers.enable(2);let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=_[$];return re===void 0&&(re=new Nf,_[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=_[$];return re===void 0&&(re=new Nf,_[$]=re),re.getGripSpace()},this.getHand=function($){let re=_[$];return re===void 0&&(re=new Nf,_[$]=re),re.getHandSpace()};function U($){const re=y.indexOf($.inputSource);if(re===-1)return;const pe=_[re];pe!==void 0&&(pe.update($.inputSource,$.frame,c||o),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",H);for(let $=0;$<_.length;$++){const re=y[$];re!==null&&(y[$]=null,_[$].disconnect(re))}P=null,I=null,x.reset(),e.setRenderTarget(h),p=null,u=null,d=null,r=null,m=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",O),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new ls(p.framebufferWidth,p.framebufferHeight,{format:yi,type:Ar,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,pe=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?Ro:po,pe=g.stencil?bo:Co);const Be={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,n),u=d.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),m=new ls(u.textureWidth,u.textureHeight,{format:yi,type:Ar,depthTexture:new Ax(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H($){for(let re=0;re<$.removed.length;re++){const pe=$.removed[re],le=y.indexOf(pe);le>=0&&(y[le]=null,_[le].disconnect(pe))}for(let re=0;re<$.added.length;re++){const pe=$.added[re];let le=y.indexOf(pe);if(le===-1){for(let Ie=0;Ie<_.length;Ie++)if(Ie>=y.length){y.push(pe),le=Ie;break}else if(y[Ie]===null){y[Ie]=pe,le=Ie;break}if(le===-1)break}const Be=_[le];Be&&Be.connect(pe)}}const z=new L,K=new L;function N($,re,pe){z.setFromMatrixPosition(re.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);const le=z.distanceTo(K),Be=re.projectionMatrix.elements,Ie=pe.projectionMatrix.elements,je=Be[14]/(Be[10]-1),F=Be[14]/(Be[10]+1),Ye=(Be[9]+1)/Be[5],Ge=(Be[9]-1)/Be[5],rt=(Be[8]-1)/Be[0],Te=(Ie[8]+1)/Ie[0],qe=je*rt,ze=je*Te,De=le/(-rt+Te),ht=De*-rt;re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ht),$.translateZ(De),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const D=je+De,C=F+De,X=qe-ht,Q=ze+(le-ht),ee=Ye*F/C*D,te=Ge*F/C*D;$.projectionMatrix.makePerspective(X,Q,ee,te,D,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function q($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;x.texture!==null&&($.near=x.depthNear,$.far=x.depthFar),S.near=b.near=T.near=$.near,S.far=b.far=T.far=$.far,(P!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,I=S.far,T.near=P,T.far=I,b.near=P,b.far=I,T.updateProjectionMatrix(),b.updateProjectionMatrix(),$.updateProjectionMatrix());const re=$.parent,pe=S.cameras;q(S,re);for(let le=0;le<pe.length;le++)q(pe[le],re);pe.length===2?N(S,T,b):S.projectionMatrix.copy(T.projectionMatrix),Z($,S,re)};function Z($,re,pe){pe===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ga*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let se=null;function ve($,re){if(f=re.getViewerPose(c||o),v=re,f!==null){const pe=f.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let le=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Ie=0;Ie<pe.length;Ie++){const je=pe[Ie];let F=null;if(p!==null)F=p.getViewport(je);else{const Ge=d.getViewSubImage(u,je);F=Ge.viewport,Ie===0&&(e.setRenderTargetTextures(m,Ge.colorTexture,u.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(m))}let Ye=M[Ie];Ye===void 0&&(Ye=new zn,Ye.layers.enable(Ie),Ye.viewport=new Vt,M[Ie]=Ye),Ye.matrix.fromArray(je.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(je.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(F.x,F.y,F.width,F.height),Ie===0&&(S.matrix.copy(Ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Ye)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ie=d.getDepthInformation(pe[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,r.renderState)}}for(let pe=0;pe<_.length;pe++){const le=y[pe],Be=_[pe];le!==null&&Be!==void 0&&Be.update(le,re,c||o)}se&&se($,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const He=new wx;He.setAnimationLoop(ve),this.setAnimationLoop=function($){se=$},this.dispose=function(){}}}const Vr=new Qn,Fb=new $e;function Ob(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Sx(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,m,_,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),f(g,h)):h.isMeshStandardMaterial?(s(g,h),u(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),v(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,m,_):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===fn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===fn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const m=e.get(h),_=m.envMap,y=m.envMapRotation;_&&(g.envMap.value=_,Vr.copy(y),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.envMapRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(Vr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=_*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===fn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const y=_.program;i.uniformBlockBinding(m,y)}function c(m,_){let y=r[m.id];y===void 0&&(v(m),y=f(m),r[m.id]=y,m.addEventListener("dispose",g));const A=_.program;i.updateUBOMapping(m,A);const w=e.render.frame;s[m.id]!==w&&(u(m),s[m.id]=w)}function f(m){const _=d();m.__bindingPointIndex=_;const y=t.createBuffer(),A=m.__size,w=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=r[m.id],y=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,T=y.length;w<T;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,S=b.length;M<S;M++){const P=b[M];if(p(P,w,M,A)===!0){const I=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let H=0;H<U.length;H++){const z=U[H],K=x(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,I+O,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,y,A){const w=m.value,T=_+"_"+y;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const b=A[T];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return A[T]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function v(m){const _=m.uniforms;let y=0;const A=16;for(let T=0,b=_.length;T<b;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,P=M.length;S<P;S++){const I=M[S],U=Array.isArray(I.value)?I.value:[I.value];for(let O=0,H=U.length;O<H;O++){const z=U[O],K=x(z),N=y%A;N!==0&&A-N<K.boundary&&(y+=A-N),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=K.storage}}}const w=y%A;return w>0&&(y+=A-w),m.__size=y,m.__cache={},this}function x(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Bb{constructor(e={}){const{canvas:n=Lw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,g=null;const h=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this.toneMapping=Er,this.toneMappingExposure=1;const _=this;let y=!1,A=0,w=0,T=null,b=-1,M=null;const S=new Vt,P=new Vt;let I=null;const U=new We(0);let O=0,H=n.width,z=n.height,K=1,N=null,q=null;const Z=new Vt(0,0,H,z),se=new Vt(0,0,H,z);let ve=!1;const He=new lp;let $=!1,re=!1;const pe=new $e,le=new L,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function je(){return T===null?K:1}let F=i;function Ye(R,k){return n.getContext(R,k)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rp}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",V,!1),n.addEventListener("webglcontextcreationerror",Y,!1),F===null){const k="webgl2";if(F=Ye(k,R),F===null)throw Ye(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ge,rt,Te,qe,ze,De,ht,D,C,X,Q,ee,te,Me,ue,ce,Ue,oe,xe,Ve,be,he,Ne,Fe;function _t(){Ge=new YA(F),Ge.init(),he=new Rb(F,Ge),rt=new HA(F,Ge,e,he),Te=new Cb(F),qe=new KA(F),ze=new hb,De=new bb(F,Ge,Te,ze,rt,he,qe),ht=new GA(_),D=new jA(_),C=new i1(F),Ne=new BA(F,C),X=new qA(F,C,qe,Ne),Q=new QA(F,X,C,qe),xe=new ZA(F,rt,De),ce=new VA(ze),ee=new db(_,ht,D,Ge,rt,Ne,ce),te=new Ob(_,ze),Me=new mb,ue=new Sb(Ge),oe=new kA(_,ht,D,Te,Q,u,l),Ue=new Ab(_,Q,rt),Fe=new kb(F,qe,rt,Te),Ve=new zA(F,Ge,qe),be=new $A(F,Ge,qe),qe.programs=ee.programs,_.capabilities=rt,_.extensions=Ge,_.properties=ze,_.renderLists=Me,_.shadowMap=Ue,_.state=Te,_.info=qe}_t();const E=new Nb(_,F);this.xr=E,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(H,z,!1))},this.getSize=function(R){return R.set(H,z)},this.setSize=function(R,k,G=!0){if(E.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,z=k,n.width=Math.floor(R*K),n.height=Math.floor(k*K),G===!0&&(n.style.width=R+"px",n.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(H*K,z*K).floor()},this.setDrawingBufferSize=function(R,k,G){H=R,z=k,K=G,n.width=Math.floor(R*G),n.height=Math.floor(k*G),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,k,G,W){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,k,G,W),Te.viewport(S.copy(Z).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,k,G,W){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,k,G,W),Te.scissor(P.copy(se).multiplyScalar(K).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(R){Te.setScissorTest(ve=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(R=!0,k=!0,G=!0){let W=0;if(R){let B=!1;if(T!==null){const ae=T.texture.format;B=ae===ux||ae===cx||ae===lx}if(B){const ae=T.texture.type,me=ae===Ar||ae===Co||ae===jc||ae===bo||ae===ox||ae===ax,_e=oe.getClearColor(),ye=oe.getClearAlpha(),Re=_e.r,Pe=_e.g,Ae=_e.b;me?(p[0]=Re,p[1]=Pe,p[2]=Ae,p[3]=ye,F.clearBufferuiv(F.COLOR,0,p)):(v[0]=Re,v[1]=Pe,v[2]=Ae,v[3]=ye,F.clearBufferiv(F.COLOR,0,v))}else W|=F.COLOR_BUFFER_BIT}k&&(W|=F.DEPTH_BUFFER_BIT),G&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",V,!1),n.removeEventListener("webglcontextcreationerror",Y,!1),Me.dispose(),ue.dispose(),ze.dispose(),ht.dispose(),D.dispose(),Q.dispose(),Ne.dispose(),Fe.dispose(),ee.dispose(),E.dispose(),E.removeEventListener("sessionstart",Ct),E.removeEventListener("sessionend",bt),En.stop()};function j(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=qe.autoReset,k=Ue.enabled,G=Ue.autoUpdate,W=Ue.needsUpdate,B=Ue.type;_t(),qe.autoReset=R,Ue.enabled=k,Ue.autoUpdate=G,Ue.needsUpdate=W,Ue.type=B}function Y(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function J(R){const k=R.target;k.removeEventListener("dispose",J),Ee(k)}function Ee(R){Le(R),ze.remove(R)}function Le(R){const k=ze.get(R).programs;k!==void 0&&(k.forEach(function(G){ee.releaseProgram(G)}),R.isShaderMaterial&&ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,G,W,B,ae){k===null&&(k=Be);const me=B.isMesh&&B.matrixWorld.determinant()<0,_e=Hx(R,k,G,W,B);Te.setMaterial(W,me);let ye=G.index,Re=1;if(W.wireframe===!0){if(ye=X.getWireframeAttribute(G),ye===void 0)return;Re=2}const Pe=G.drawRange,Ae=G.attributes.position;let Qe=Pe.start*Re,xt=(Pe.start+Pe.count)*Re;ae!==null&&(Qe=Math.max(Qe,ae.start*Re),xt=Math.min(xt,(ae.start+ae.count)*Re)),ye!==null?(Qe=Math.max(Qe,0),xt=Math.min(xt,ye.count)):Ae!=null&&(Qe=Math.max(Qe,0),xt=Math.min(xt,Ae.count));const yt=xt-Qe;if(yt<0||yt===1/0)return;Ne.setup(B,W,_e,G,ye);let Tn,Je=Ve;if(ye!==null&&(Tn=C.get(ye),Je=be,Je.setIndex(Tn)),B.isMesh)W.wireframe===!0?(Te.setLineWidth(W.wireframeLinewidth*je()),Je.setMode(F.LINES)):Je.setMode(F.TRIANGLES);else if(B.isLine){let we=W.linewidth;we===void 0&&(we=1),Te.setLineWidth(we*je()),B.isLineSegments?Je.setMode(F.LINES):B.isLineLoop?Je.setMode(F.LINE_LOOP):Je.setMode(F.LINE_STRIP)}else B.isPoints?Je.setMode(F.POINTS):B.isSprite&&Je.setMode(F.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?Je.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):Je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Je.renderInstances(Qe,yt,B.count);else if(G.isInstancedBufferGeometry){const we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,sn=Math.min(G.instanceCount,we);Je.renderInstances(Qe,yt,sn)}else Je.render(Qe,yt)};function vt(R,k,G){R.transparent===!0&&R.side===Hn&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,Za(R,k,G),R.side=Ei,R.needsUpdate=!0,Za(R,k,G),R.side=Hn):Za(R,k,G)}this.compile=function(R,k,G=null){G===null&&(G=R),g=ue.get(G),g.init(k),m.push(g),G.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),R!==G&&R.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const W=new Set;return R.traverse(function(B){const ae=B.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const _e=ae[me];vt(_e,G,B),W.add(_e)}else vt(ae,G,B),W.add(ae)}),m.pop(),g=null,W},this.compileAsync=function(R,k,G=null){const W=this.compile(R,k,G);return new Promise(B=>{function ae(){if(W.forEach(function(me){ze.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){B(R);return}setTimeout(ae,10)}Ge.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let At=null;function Ze(R){At&&At(R)}function Ct(){En.stop()}function bt(){En.start()}const En=new wx;En.setAnimationLoop(Ze),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(R){At=R,E.setAnimationLoop(R),R===null?En.stop():En.start()},E.addEventListener("sessionstart",Ct),E.addEventListener("sessionend",bt),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),E.enabled===!0&&E.isPresenting===!0&&(E.cameraAutoUpdate===!0&&E.updateCamera(k),k=E.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,k,T),g=ue.get(R,m.length),g.init(k),m.push(g),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),He.setFromProjectionMatrix(pe),re=this.localClippingEnabled,$=ce.init(this.clippingPlanes,re),x=Me.get(R,h.length),x.init(),h.push(x),E.enabled===!0&&E.isPresenting===!0){const ae=_.xr.getDepthSensingMesh();ae!==null&&wn(ae,k,-1/0,_.sortObjects)}wn(R,k,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(N,q),Ie=E.enabled===!1||E.isPresenting===!1||E.hasDepthSensing()===!1,Ie&&oe.addToRenderList(x,R),this.info.render.frame++,$===!0&&ce.beginShadows();const G=g.state.shadowsArray;Ue.render(G,R,k),$===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,B=x.transmissive;if(g.setupLights(),k.isArrayCamera){const ae=k.cameras;if(B.length>0)for(let me=0,_e=ae.length;me<_e;me++){const ye=ae[me];Dr(W,B,R,ye)}Ie&&oe.render(R);for(let me=0,_e=ae.length;me<_e;me++){const ye=ae[me];ji(x,R,ye,ye.viewport)}}else B.length>0&&Dr(W,B,R,k),Ie&&oe.render(R),ji(x,R,k);T!==null&&(De.updateMultisampleRenderTarget(T),De.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(_,R,k),Ne.resetDefaultState(),b=-1,M=null,m.pop(),m.length>0?(g=m[m.length-1],$===!0&&ce.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function wn(R,k,G,W){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||He.intersectsSprite(R)){W&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const me=Q.update(R),_e=R.material;_e.visible&&x.push(R,me,_e,G,le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||He.intersectsObject(R))){const me=Q.update(R),_e=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),le.copy(R.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),le.copy(me.boundingSphere.center)),le.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(_e)){const ye=me.groups;for(let Re=0,Pe=ye.length;Re<Pe;Re++){const Ae=ye[Re],Qe=_e[Ae.materialIndex];Qe&&Qe.visible&&x.push(R,me,Qe,G,le.z,Ae)}}else _e.visible&&x.push(R,me,_e,G,le.z,null)}}const ae=R.children;for(let me=0,_e=ae.length;me<_e;me++)wn(ae[me],k,G,W)}function ji(R,k,G,W){const B=R.opaque,ae=R.transmissive,me=R.transparent;g.setupLightsView(G),$===!0&&ce.setGlobalState(_.clippingPlanes,G),W&&Te.viewport(S.copy(W)),B.length>0&&Ur(B,k,G),ae.length>0&&Ur(ae,k,G),me.length>0&&Ur(me,k,G),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Dr(R,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new ls(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?xu:Ar,minFilter:es,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ae=g.state.transmissionRenderTarget[W.id],me=W.viewport||S;ae.setSize(me.z,me.w);const _e=_.getRenderTarget();_.setRenderTarget(ae),_.getClearColor(U),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),Ie?oe.render(G):_.clear();const ye=_.toneMapping;_.toneMapping=Er;const Re=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),$===!0&&ce.setGlobalState(_.clippingPlanes,W),Ur(R,G,W),De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Ae=0,Qe=k.length;Ae<Qe;Ae++){const xt=k[Ae],yt=xt.object,Tn=xt.geometry,Je=xt.material,we=xt.group;if(Je.side===Hn&&yt.layers.test(W.layers)){const sn=Je.side;Je.side=fn,Je.needsUpdate=!0,gp(yt,G,W,Tn,Je,we),Je.side=sn,Je.needsUpdate=!0,Pe=!0}}Pe===!0&&(De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae))}_.setRenderTarget(_e),_.setClearColor(U,O),Re!==void 0&&(W.viewport=Re),_.toneMapping=ye}function Ur(R,k,G){const W=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ae=R.length;B<ae;B++){const me=R[B],_e=me.object,ye=me.geometry,Re=W===null?me.material:W,Pe=me.group;_e.layers.test(G.layers)&&gp(_e,k,G,ye,Re,Pe)}}function gp(R,k,G,W,B,ae){R.onBeforeRender(_,k,G,W,B,ae),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(_,k,G,W,R,ae),B.transparent===!0&&B.side===Hn&&B.forceSinglePass===!1?(B.side=fn,B.needsUpdate=!0,_.renderBufferDirect(G,k,W,B,R,ae),B.side=Ei,B.needsUpdate=!0,_.renderBufferDirect(G,k,W,B,R,ae),B.side=Hn):_.renderBufferDirect(G,k,W,B,R,ae),R.onAfterRender(_,k,G,W,B,ae)}function Za(R,k,G){k.isScene!==!0&&(k=Be);const W=ze.get(R),B=g.state.lights,ae=g.state.shadowsArray,me=B.state.version,_e=ee.getParameters(R,B.state,ae,k,G),ye=ee.getProgramCacheKey(_e);let Re=W.programs;W.environment=R.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(R.isMeshStandardMaterial?D:ht).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Re===void 0&&(R.addEventListener("dispose",J),Re=new Map,W.programs=Re);let Pe=Re.get(ye);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===me)return vp(R,_e),Pe}else _e.uniforms=ee.getUniforms(R),R.onBuild(G,_e,_),R.onBeforeCompile(_e,_),Pe=ee.acquireProgram(_e,ye),Re.set(ye,Pe),W.uniforms=_e.uniforms;const Ae=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ae.clippingPlanes=ce.uniform),vp(R,_e),W.needsLights=Gx(R),W.lightsStateVersion=me,W.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function _p(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=vc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function vp(R,k){const G=ze.get(R);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Hx(R,k,G,W,B){k.isScene!==!0&&(k=Be),De.resetTextureUnits();const ae=k.fog,me=W.isMeshStandardMaterial?k.environment:null,_e=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ir,ye=(W.isMeshStandardMaterial?D:ht).get(W.envMap||me),Re=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,xt=!!G.morphAttributes.color;let yt=Er;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(yt=_.toneMapping);const Tn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Je=Tn!==void 0?Tn.length:0,we=ze.get(W),sn=g.state.lights;if($===!0&&(re===!0||R!==M)){const Fn=R===M&&W.id===b;ce.setState(W,R,Fn)}let nt=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==sn.state.version||we.outputColorSpace!==_e||B.isBatchedMesh&&we.batching===!1||!B.isBatchedMesh&&we.batching===!0||B.isBatchedMesh&&we.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&we.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&we.instancing===!1||!B.isInstancedMesh&&we.instancing===!0||B.isSkinnedMesh&&we.skinning===!1||!B.isSkinnedMesh&&we.skinning===!0||B.isInstancedMesh&&we.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&we.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&we.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&we.instancingMorph===!1&&B.morphTexture!==null||we.envMap!==ye||W.fog===!0&&we.fog!==ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ce.numPlanes||we.numIntersection!==ce.numIntersection)||we.vertexAlphas!==Re||we.vertexTangents!==Pe||we.morphTargets!==Ae||we.morphNormals!==Qe||we.morphColors!==xt||we.toneMapping!==yt||we.morphTargetsCount!==Je)&&(nt=!0):(nt=!0,we.__version=W.version);let wi=we.currentProgram;nt===!0&&(wi=Za(W,k,B));let Qa=!1,Nr=!1,Cu=!1;const Ft=wi.getUniforms(),Yi=we.uniforms;if(Te.useProgram(wi.program)&&(Qa=!0,Nr=!0,Cu=!0),W.id!==b&&(b=W.id,Nr=!0),Qa||M!==R){Ft.setValue(F,"projectionMatrix",R.projectionMatrix),Ft.setValue(F,"viewMatrix",R.matrixWorldInverse);const Fn=Ft.map.cameraPosition;Fn!==void 0&&Fn.setValue(F,le.setFromMatrixPosition(R.matrixWorld)),rt.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Nr=!0,Cu=!0)}if(B.isSkinnedMesh){Ft.setOptional(F,B,"bindMatrix"),Ft.setOptional(F,B,"bindMatrixInverse");const Fn=B.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Ft.setValue(F,"boneTexture",Fn.boneTexture,De))}B.isBatchedMesh&&(Ft.setOptional(F,B,"batchingTexture"),Ft.setValue(F,"batchingTexture",B._matricesTexture,De),Ft.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&Ft.setValue(F,"batchingColorTexture",B._colorsTexture,De));const bu=G.morphAttributes;if((bu.position!==void 0||bu.normal!==void 0||bu.color!==void 0)&&xe.update(B,G,wi),(Nr||we.receiveShadow!==B.receiveShadow)&&(we.receiveShadow=B.receiveShadow,Ft.setValue(F,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Yi.envMap.value=ye,Yi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(Yi.envMapIntensity.value=k.environmentIntensity),Nr&&(Ft.setValue(F,"toneMappingExposure",_.toneMappingExposure),we.needsLights&&Vx(Yi,Cu),ae&&W.fog===!0&&te.refreshFogUniforms(Yi,ae),te.refreshMaterialUniforms(Yi,W,K,z,g.state.transmissionRenderTarget[R.id]),vc.upload(F,_p(we),Yi,De)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(vc.upload(F,_p(we),Yi,De),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ft.setValue(F,"center",B.center),Ft.setValue(F,"modelViewMatrix",B.modelViewMatrix),Ft.setValue(F,"normalMatrix",B.normalMatrix),Ft.setValue(F,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Fn=W.uniformsGroups;for(let Ru=0,Wx=Fn.length;Ru<Wx;Ru++){const xp=Fn[Ru];Fe.update(xp,wi),Fe.bind(xp,wi)}}return wi}function Vx(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Gx(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,k,G){ze.get(R.texture).__webglTexture=k,ze.get(R.depthTexture).__webglTexture=G;const W=ze.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const G=ze.get(R);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,G=0){T=R,A=k,w=G;let W=!0,B=null,ae=!1,me=!1;if(R){const ye=ze.get(R);ye.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):ye.__webglFramebuffer===void 0?De.setupRenderTarget(R):ye.__hasExternalTextures&&De.rebindTextures(R,ze.get(R.texture).__webglTexture,ze.get(R.depthTexture).__webglTexture);const Re=R.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(me=!0);const Pe=ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Pe[k])?B=Pe[k][G]:B=Pe[k],ae=!0):R.samples>0&&De.useMultisampledRTT(R)===!1?B=ze.get(R).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[G]:B=Pe,S.copy(R.viewport),P.copy(R.scissor),I=R.scissorTest}else S.copy(Z).multiplyScalar(K).floor(),P.copy(se).multiplyScalar(K).floor(),I=ve;if(Te.bindFramebuffer(F.FRAMEBUFFER,B)&&W&&Te.drawBuffers(R,B),Te.viewport(S),Te.scissor(P),Te.setScissorTest(I),ae){const ye=ze.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,ye.__webglTexture,G)}else if(me){const ye=ze.get(R.texture),Re=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.__webglTexture,G||0,Re)}b=-1},this.readRenderTargetPixels=function(R,k,G,W,B,ae,me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){Te.bindFramebuffer(F.FRAMEBUFFER,_e);try{const ye=R.texture,Re=ye.format,Pe=ye.type;if(!rt.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-W&&G>=0&&G<=R.height-B&&F.readPixels(k,G,W,B,he.convert(Re),he.convert(Pe),ae)}finally{const ye=T!==null?ze.get(T).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(R,k,G,W,B,ae,me){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){Te.bindFramebuffer(F.FRAMEBUFFER,_e);try{const ye=R.texture,Re=ye.format,Pe=ye.type;if(!rt.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-W&&G>=0&&G<=R.height-B){const Ae=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.bufferData(F.PIXEL_PACK_BUFFER,ae.byteLength,F.STREAM_READ),F.readPixels(k,G,W,B,he.convert(Re),he.convert(Pe),0),F.flush();const Qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await Iw(F,Qe,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ae)}finally{F.deleteBuffer(Ae),F.deleteSync(Qe)}return ae}}finally{const ye=T!==null?ze.get(T).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(R,k=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const W=Math.pow(2,-G),B=Math.floor(R.image.width*W),ae=Math.floor(R.image.height*W),me=k!==null?k.x:0,_e=k!==null?k.y:0;De.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,me,_e,B,ae),Te.unbindTexture()},this.copyTextureToTexture=function(R,k,G=null,W=null,B=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],k=arguments[2],B=arguments[3]||0,G=null);let ae,me,_e,ye,Re,Pe;G!==null?(ae=G.max.x-G.min.x,me=G.max.y-G.min.y,_e=G.min.x,ye=G.min.y):(ae=R.image.width,me=R.image.height,_e=0,ye=0),W!==null?(Re=W.x,Pe=W.y):(Re=0,Pe=0);const Ae=he.convert(k.format),Qe=he.convert(k.type);De.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const xt=F.getParameter(F.UNPACK_ROW_LENGTH),yt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Tn=F.getParameter(F.UNPACK_SKIP_PIXELS),Je=F.getParameter(F.UNPACK_SKIP_ROWS),we=F.getParameter(F.UNPACK_SKIP_IMAGES),sn=R.isCompressedTexture?R.mipmaps[B]:R.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,sn.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,sn.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_e),F.pixelStorei(F.UNPACK_SKIP_ROWS,ye),R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,Re,Pe,ae,me,Ae,Qe,sn.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,Re,Pe,sn.width,sn.height,Ae,sn.data):F.texSubImage2D(F.TEXTURE_2D,B,Re,Pe,Ae,Qe,sn),F.pixelStorei(F.UNPACK_ROW_LENGTH,xt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Tn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,we),B===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(R,k,G=null,W=null,B=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,R=arguments[2],k=arguments[3],B=arguments[4]||0);let ae,me,_e,ye,Re,Pe,Ae,Qe,xt;const yt=R.isCompressedTexture?R.mipmaps[B]:R.image;G!==null?(ae=G.max.x-G.min.x,me=G.max.y-G.min.y,_e=G.max.z-G.min.z,ye=G.min.x,Re=G.min.y,Pe=G.min.z):(ae=yt.width,me=yt.height,_e=yt.depth,ye=0,Re=0,Pe=0),W!==null?(Ae=W.x,Qe=W.y,xt=W.z):(Ae=0,Qe=0,xt=0);const Tn=he.convert(k.format),Je=he.convert(k.type);let we;if(k.isData3DTexture)De.setTexture3D(k,0),we=F.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)De.setTexture2DArray(k,0),we=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const sn=F.getParameter(F.UNPACK_ROW_LENGTH),nt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),wi=F.getParameter(F.UNPACK_SKIP_PIXELS),Qa=F.getParameter(F.UNPACK_SKIP_ROWS),Nr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ye),F.pixelStorei(F.UNPACK_SKIP_ROWS,Re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pe),R.isDataTexture||R.isData3DTexture?F.texSubImage3D(we,B,Ae,Qe,xt,ae,me,_e,Tn,Je,yt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(we,B,Ae,Qe,xt,ae,me,_e,Tn,yt.data):F.texSubImage3D(we,B,Ae,Qe,xt,ae,me,_e,Tn,Je,yt),F.pixelStorei(F.UNPACK_ROW_LENGTH,sn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qa),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Nr),B===0&&k.generateMipmaps&&F.generateMipmap(we),Te.unbindTexture()},this.initRenderTarget=function(R){ze.get(R).__webglFramebuffer===void 0&&De.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?De.setTextureCube(R,0):R.isData3DTexture?De.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?De.setTexture2DArray(R,0):De.setTexture2D(R,0),Te.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,Te.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sp?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===yu?"display-p3":"srgb"}}class zb extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class up extends No{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qc=new L,Jc=new L,t0=new $e,Ko=new Su,Bl=new $a,Ff=new L,n0=new L;class Li extends Tt{constructor(e=new dn,n=new up){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Qc.fromBufferAttribute(n,r-1),Jc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Qc.distanceTo(Jc);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(r),Bl.radius+=s,e.ray.intersectsSphere(Bl)===!1)return;t0.copy(r).invert(),Ko.copy(e.ray).applyMatrix4(t0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let x=p,g=v-1;x<g;x+=c){const h=f.getX(x),m=f.getX(x+1),_=zl(this,e,Ko,l,h,m);_&&n.push(_)}if(this.isLineLoop){const x=f.getX(v-1),g=f.getX(p),h=zl(this,e,Ko,l,x,g);h&&n.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=p,g=v-1;x<g;x+=c){const h=zl(this,e,Ko,l,x,x+1);h&&n.push(h)}if(this.isLineLoop){const x=zl(this,e,Ko,l,v-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Qc.fromBufferAttribute(o,r),Jc.fromBufferAttribute(o,s),n.distanceSqToSegment(Qc,Jc,Ff,n0)>i)return;Ff.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Ff);if(!(l<e.near||l>e.far))return{distance:l,point:n0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const i0=new L,r0=new L;class Hb extends Li{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)i0.fromBufferAttribute(n,r),r0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+i0.distanceTo(r0);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kt extends dn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],u=[],p=[];let v=0;const x=[],g=i/2;let h=0;m(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(p,2));function m(){const y=new L,A=new L;let w=0;const T=(n-e)/i;for(let b=0;b<=s;b++){const M=[],S=b/s,P=S*(n-e)+e;for(let I=0;I<=r;I++){const U=I/r,O=U*l+a,H=Math.sin(O),z=Math.cos(O);A.x=P*H,A.y=-S*i+g,A.z=P*z,d.push(A.x,A.y,A.z),y.set(H,T,z).normalize(),u.push(y.x,y.y,y.z),p.push(U,1-S),M.push(v++)}x.push(M)}for(let b=0;b<r;b++)for(let M=0;M<s;M++){const S=x[M][b],P=x[M+1][b],I=x[M+1][b+1],U=x[M][b+1];f.push(S,P,U),f.push(P,I,U),w+=6}c.addGroup(h,w,0),h+=w}function _(y){const A=v,w=new Se,T=new L;let b=0;const M=y===!0?e:n,S=y===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,g*S,0),u.push(0,S,0),p.push(.5,.5),v++;const P=v;for(let I=0;I<=r;I++){const O=I/r*l+a,H=Math.cos(O),z=Math.sin(O);T.x=M*z,T.y=g*S,T.z=M*H,d.push(T.x,T.y,T.z),u.push(0,S,0),w.x=H*.5+.5,w.y=z*.5*S+.5,p.push(w.x,w.y),v++}for(let I=0;I<r;I++){const U=A+I,O=P+I;y===!0?f.push(O,O+1,U):f.push(O+1,O,U),b+=3}c.addGroup(h,b,y===!0?1:2),h+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fp extends kt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new fp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dp extends dn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(s.slice(),3)),this.setAttribute("uv",new ct(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new L,y=new L,A=new L;for(let w=0;w<n.length;w+=3)p(n[w+0],_),p(n[w+1],y),p(n[w+2],A),l(_,y,A,m)}function l(m,_,y,A){const w=A+1,T=[];for(let b=0;b<=w;b++){T[b]=[];const M=m.clone().lerp(y,b/w),S=_.clone().lerp(y,b/w),P=w-b;for(let I=0;I<=P;I++)I===0&&b===w?T[b][I]=M:T[b][I]=M.clone().lerp(S,I/P)}for(let b=0;b<w;b++)for(let M=0;M<2*(w-b)-1;M++){const S=Math.floor(M/2);M%2===0?(u(T[b][S+1]),u(T[b+1][S]),u(T[b][S])):(u(T[b][S+1]),u(T[b+1][S+1]),u(T[b+1][S]))}}function c(m){const _=new L;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(m),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function f(){const m=new L;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const y=g(m)/2/Math.PI+.5,A=h(m)/Math.PI+.5;o.push(y,1-A)}v(),d()}function d(){for(let m=0;m<o.length;m+=6){const _=o[m+0],y=o[m+2],A=o[m+4],w=Math.max(_,y,A),T=Math.min(_,y,A);w>.9&&T<.1&&(_<.2&&(o[m+0]+=1),y<.2&&(o[m+2]+=1),A<.2&&(o[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,_){const y=m*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function v(){const m=new L,_=new L,y=new L,A=new L,w=new Se,T=new Se,b=new Se;for(let M=0,S=0;M<s.length;M+=9,S+=6){m.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),w.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),b.set(o[S+4],o[S+5]),A.copy(m).add(_).add(y).divideScalar(3);const P=g(A);x(w,S+0,m,P),x(T,S+2,_,P),x(b,S+4,y,P)}}function x(m,_,y,A){A<0&&m.x===1&&(o[_]=m.x-1),y.x===0&&y.z===0&&(o[_]=A/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dp(e.vertices,e.indices,e.radius,e.details)}}class ro extends dp{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ro(e.radius,e.detail)}}class wu extends dn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new L,u=new L,p=[],v=[],x=[],g=[];for(let h=0;h<=i;h++){const m=[],_=h/i;let y=0;h===0&&o===0?y=.5/n:h===i&&l===Math.PI&&(y=-.5/n);for(let A=0;A<=n;A++){const w=A/n;d.x=-e*Math.cos(r+w*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+_*a),v.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(w+y,1-_),m.push(c++)}f.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){const _=f[h][m+1],y=f[h][m],A=f[h+1][m],w=f[h+1][m+1];(h!==0||o>0)&&p.push(_,y,w),(h!==i-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new ct(v,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cr extends dn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new L,d=new L,u=new L;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,g=p/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(x),d.y=(e+n*Math.cos(g))*Math.sin(x),d.z=n*Math.sin(g),a.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),u.subVectors(d,f).normalize(),l.push(u.x,u.y,u.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,g=(r+1)*(p-1)+v-1,h=(r+1)*(p-1)+v,m=(r+1)*p+v;o.push(x,g,m),o.push(g,h,m)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vb extends No{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fx,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ix extends Tt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Gb extends Ix{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Of=new $e,s0=new L,o0=new L;class Wb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;s0.setFromMatrixPosition(e.matrixWorld),n.position.copy(s0),o0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(o0),n.updateMatrixWorld(),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xb extends Wb{constructor(){super(new Tx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jb extends Ix{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Xb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=a0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=a0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function a0(){return(typeof performance>"u"?Date:performance).now()}const l0=new $e;class Dx{constructor(e,n,i=0,r=1/0){this.ray=new Su(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return l0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l0),this}intersectObject(e,n=!0,i=[]){return Qd(e,this,i,n),i.sort(c0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Qd(e[r],this,i,n);return i.sort(c0),i}}function c0(t,e){return t.distance-e.distance}function Qd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Qd(s[o],e,n,!0)}}class u0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Yt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const f0=new L,Hl=new L;class Bi{constructor(e=new L,n=new L){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){f0.subVectors(e,this.start),Hl.subVectors(this.end,this.start);const i=Hl.dot(Hl);let s=Hl.dot(f0)/i;return n&&(s=Yt(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class qb extends Hb{constructor(e=10,n=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let u=0,p=0,v=-a;u<=n;u++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const x=u===s?i:r;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const f=new dn;f.setAttribute("position",new ct(l,3)),f.setAttribute("color",new ct(c,3));const d=new up({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);const d0={type:"change"},kf={type:"start"},h0={type:"end"},Vl=new Su,p0=new ai,$b=Math.cos(70*hx.DEG2RAD);class Kb extends fs{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",ce),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(d0),i.update(),s=r.NONE},this.update=function(){const E=new L,j=new zt().setFromUnitVectors(e.up,new L(0,1,0)),V=j.clone().invert(),Y=new L,J=new zt,Ee=new L,Le=2*Math.PI;return function(At=null){const Ze=i.object.position;E.copy(Ze).sub(i.target),E.applyQuaternion(j),a.setFromVector3(E),i.autoRotate&&s===r.NONE&&I(S(At)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ct=i.minAzimuthAngle,bt=i.maxAzimuthAngle;isFinite(Ct)&&isFinite(bt)&&(Ct<-Math.PI?Ct+=Le:Ct>Math.PI&&(Ct-=Le),bt<-Math.PI?bt+=Le:bt>Math.PI&&(bt-=Le),Ct<=bt?a.theta=Math.max(Ct,Math.min(bt,a.theta)):a.theta=a.theta>(Ct+bt)/2?Math.max(Ct,a.theta):Math.min(bt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let En=!1;if(i.zoomToCursor&&w||i.object.isOrthographicCamera)a.radius=Z(a.radius);else{const wn=a.radius;a.radius=Z(a.radius*c),En=wn!=a.radius}if(E.setFromSpherical(a),E.applyQuaternion(V),Ze.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&w){let wn=null;if(i.object.isPerspectiveCamera){const ji=E.length();wn=Z(ji*c);const Dr=ji-wn;i.object.position.addScaledVector(y,Dr),i.object.updateMatrixWorld(),En=!!Dr}else if(i.object.isOrthographicCamera){const ji=new L(A.x,A.y,0);ji.unproject(i.object);const Dr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),En=Dr!==i.object.zoom;const Ur=new L(A.x,A.y,0);Ur.unproject(i.object),i.object.position.sub(Ur).add(ji),i.object.updateMatrixWorld(),wn=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;wn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(wn).add(i.object.position):(Vl.origin.copy(i.object.position),Vl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Vl.direction))<$b?e.lookAt(i.target):(p0.setFromNormalAndCoplanarPoint(i.object.up,i.target),Vl.intersectPlane(p0,i.target))))}else if(i.object.isOrthographicCamera){const wn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),wn!==i.object.zoom&&(i.object.updateProjectionMatrix(),En=!0)}return c=1,w=!1,En||Y.distanceToSquared(i.object.position)>o||8*(1-J.dot(i.object.quaternion))>o||Ee.distanceToSquared(i.target)>o?(i.dispatchEvent(d0),Y.copy(i.object.position),J.copy(i.object.quaternion),Ee.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",xe),i.domElement.removeEventListener("pointerdown",ht),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",D),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ce),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new u0,l=new u0;let c=1;const f=new L,d=new Se,u=new Se,p=new Se,v=new Se,x=new Se,g=new Se,h=new Se,m=new Se,_=new Se,y=new L,A=new Se;let w=!1;const T=[],b={};let M=!1;function S(E){return E!==null?2*Math.PI/60*i.autoRotateSpeed*E:2*Math.PI/60/60*i.autoRotateSpeed}function P(E){const j=Math.abs(E*.01);return Math.pow(.95,i.zoomSpeed*j)}function I(E){l.theta-=E}function U(E){l.phi-=E}const O=function(){const E=new L;return function(V,Y){E.setFromMatrixColumn(Y,0),E.multiplyScalar(-V),f.add(E)}}(),H=function(){const E=new L;return function(V,Y){i.screenSpacePanning===!0?E.setFromMatrixColumn(Y,1):(E.setFromMatrixColumn(Y,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(V),f.add(E)}}(),z=function(){const E=new L;return function(V,Y){const J=i.domElement;if(i.object.isPerspectiveCamera){const Ee=i.object.position;E.copy(Ee).sub(i.target);let Le=E.length();Le*=Math.tan(i.object.fov/2*Math.PI/180),O(2*V*Le/J.clientHeight,i.object.matrix),H(2*Y*Le/J.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(V*(i.object.right-i.object.left)/i.object.zoom/J.clientWidth,i.object.matrix),H(Y*(i.object.top-i.object.bottom)/i.object.zoom/J.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(E,j){if(!i.zoomToCursor)return;w=!0;const V=i.domElement.getBoundingClientRect(),Y=E-V.left,J=j-V.top,Ee=V.width,Le=V.height;A.x=Y/Ee*2-1,A.y=-(J/Le)*2+1,y.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(E){return Math.max(i.minDistance,Math.min(i.maxDistance,E))}function se(E){d.set(E.clientX,E.clientY)}function ve(E){q(E.clientX,E.clientX),h.set(E.clientX,E.clientY)}function He(E){v.set(E.clientX,E.clientY)}function $(E){u.set(E.clientX,E.clientY),p.subVectors(u,d).multiplyScalar(i.rotateSpeed);const j=i.domElement;I(2*Math.PI*p.x/j.clientHeight),U(2*Math.PI*p.y/j.clientHeight),d.copy(u),i.update()}function re(E){m.set(E.clientX,E.clientY),_.subVectors(m,h),_.y>0?K(P(_.y)):_.y<0&&N(P(_.y)),h.copy(m),i.update()}function pe(E){x.set(E.clientX,E.clientY),g.subVectors(x,v).multiplyScalar(i.panSpeed),z(g.x,g.y),v.copy(x),i.update()}function le(E){q(E.clientX,E.clientY),E.deltaY<0?N(P(E.deltaY)):E.deltaY>0&&K(P(E.deltaY)),i.update()}function Be(E){let j=!1;switch(E.code){case i.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),j=!0;break}j&&(E.preventDefault(),i.update())}function Ie(E){if(T.length===1)d.set(E.pageX,E.pageY);else{const j=Fe(E),V=.5*(E.pageX+j.x),Y=.5*(E.pageY+j.y);d.set(V,Y)}}function je(E){if(T.length===1)v.set(E.pageX,E.pageY);else{const j=Fe(E),V=.5*(E.pageX+j.x),Y=.5*(E.pageY+j.y);v.set(V,Y)}}function F(E){const j=Fe(E),V=E.pageX-j.x,Y=E.pageY-j.y,J=Math.sqrt(V*V+Y*Y);h.set(0,J)}function Ye(E){i.enableZoom&&F(E),i.enablePan&&je(E)}function Ge(E){i.enableZoom&&F(E),i.enableRotate&&Ie(E)}function rt(E){if(T.length==1)u.set(E.pageX,E.pageY);else{const V=Fe(E),Y=.5*(E.pageX+V.x),J=.5*(E.pageY+V.y);u.set(Y,J)}p.subVectors(u,d).multiplyScalar(i.rotateSpeed);const j=i.domElement;I(2*Math.PI*p.x/j.clientHeight),U(2*Math.PI*p.y/j.clientHeight),d.copy(u)}function Te(E){if(T.length===1)x.set(E.pageX,E.pageY);else{const j=Fe(E),V=.5*(E.pageX+j.x),Y=.5*(E.pageY+j.y);x.set(V,Y)}g.subVectors(x,v).multiplyScalar(i.panSpeed),z(g.x,g.y),v.copy(x)}function qe(E){const j=Fe(E),V=E.pageX-j.x,Y=E.pageY-j.y,J=Math.sqrt(V*V+Y*Y);m.set(0,J),_.set(0,Math.pow(m.y/h.y,i.zoomSpeed)),K(_.y),h.copy(m);const Ee=(E.pageX+j.x)*.5,Le=(E.pageY+j.y)*.5;q(Ee,Le)}function ze(E){i.enableZoom&&qe(E),i.enablePan&&Te(E)}function De(E){i.enableZoom&&qe(E),i.enableRotate&&rt(E)}function ht(E){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",D),i.domElement.addEventListener("pointerup",C)),!he(E)&&(Ve(E),E.pointerType==="touch"?Ue(E):X(E)))}function D(E){i.enabled!==!1&&(E.pointerType==="touch"?oe(E):Q(E))}function C(E){switch(be(E),T.length){case 0:i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",D),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(h0),s=r.NONE;break;case 1:const j=T[0],V=b[j];Ue({pointerId:j,pageX:V.x,pageY:V.y});break}}function X(E){let j;switch(E.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case hs.DOLLY:if(i.enableZoom===!1)return;ve(E),s=r.DOLLY;break;case hs.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;He(E),s=r.PAN}else{if(i.enableRotate===!1)return;se(E),s=r.ROTATE}break;case hs.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;se(E),s=r.ROTATE}else{if(i.enablePan===!1)return;He(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(kf)}function Q(E){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;$(E);break;case r.DOLLY:if(i.enableZoom===!1)return;re(E);break;case r.PAN:if(i.enablePan===!1)return;pe(E);break}}function ee(E){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(E.preventDefault(),i.dispatchEvent(kf),le(te(E)),i.dispatchEvent(h0))}function te(E){const j=E.deltaMode,V={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(j){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return E.ctrlKey&&!M&&(V.deltaY*=10),V}function Me(E){E.key==="Control"&&(M=!0,i.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(E){E.key==="Control"&&(M=!1,i.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function ce(E){i.enabled===!1||i.enablePan===!1||Be(E)}function Ue(E){switch(Ne(E),T.length){case 1:switch(i.touches.ONE){case ps.ROTATE:if(i.enableRotate===!1)return;Ie(E),s=r.TOUCH_ROTATE;break;case ps.PAN:if(i.enablePan===!1)return;je(E),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ps.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ye(E),s=r.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ge(E),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(kf)}function oe(E){switch(Ne(E),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;rt(E),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(E),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(E),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;De(E),i.update();break;default:s=r.NONE}}function xe(E){i.enabled!==!1&&E.preventDefault()}function Ve(E){T.push(E.pointerId)}function be(E){delete b[E.pointerId];for(let j=0;j<T.length;j++)if(T[j]==E.pointerId){T.splice(j,1);return}}function he(E){for(let j=0;j<T.length;j++)if(T[j]==E.pointerId)return!0;return!1}function Ne(E){let j=b[E.pointerId];j===void 0&&(j=new Se,b[E.pointerId]=j),j.set(E.pageX,E.pageY)}function Fe(E){const j=E.pointerId===T[0]?T[1]:T[0];return b[j]}i.domElement.addEventListener("contextmenu",xe),i.domElement.addEventListener("pointerdown",ht),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}const Gr=new Dx,tn=new L,tr=new L,ft=new zt,m0={X:new L(1,0,0),Y:new L(0,1,0),Z:new L(0,0,1)},Bf={type:"change"},g0={type:"mouseDown",mode:null},_0={type:"mouseUp",mode:null},v0={type:"objectChange"};class Zb extends Tt{constructor(e,n){super(),n===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),n=document),this.isTransformControls=!0,this.visible=!1,this.domElement=n,this.domElement.style.touchAction="none";const i=new iR;this._gizmo=i,this.add(i);const r=new rR;this._plane=r,this.add(r);const s=this;function o(m,_){let y=_;Object.defineProperty(s,m,{get:function(){return y!==void 0?y:_},set:function(A){y!==A&&(y=A,r[m]=A,i[m]=A,s.dispatchEvent({type:m+"-changed",value:A}),s.dispatchEvent(Bf))}}),s[m]=_,r[m]=_,i[m]=_}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new L,l=new L,c=new zt,f=new zt,d=new L,u=new zt,p=new L,v=new L,x=new L,g=0,h=new L;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",f),o("cameraPosition",d),o("cameraQuaternion",u),o("pointStart",p),o("pointEnd",v),o("rotationAxis",x),o("rotationAngle",g),o("eye",h),this._offset=new L,this._startNorm=new L,this._endNorm=new L,this._cameraScale=new L,this._parentPosition=new L,this._parentQuaternion=new zt,this._parentQuaternionInv=new zt,this._parentScale=new L,this._worldScaleStart=new L,this._worldQuaternionInv=new zt,this._worldScale=new L,this._positionStart=new L,this._quaternionStart=new zt,this._scaleStart=new L,this._getPointer=Qb.bind(this),this._onPointerDown=eR.bind(this),this._onPointerHover=Jb.bind(this),this._onPointerMove=tR.bind(this),this._onPointerUp=nR.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(e){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(e)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Gr.setFromCamera(e,this.camera);const n=zf(this._gizmo.picker[this.mode],Gr);n?this.axis=n.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Gr.setFromCamera(e,this.camera);const n=zf(this._plane,Gr,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,g0.mode=this.mode,this.dispatchEvent(g0)}}pointerMove(e){const n=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(s="world"),r===void 0||n===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Gr.setFromCamera(e,this.camera);const o=zf(this._plane,Gr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(ft.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(tn.setFromMatrixPosition(r.parent.matrixWorld)),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(tn.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),tr.set(a,a,a)}else tn.copy(this.pointStart),tr.copy(this.pointEnd),tn.applyQuaternion(this._worldQuaternionInv),tr.applyQuaternion(this._worldQuaternionInv),tr.divide(tn),n.search("X")===-1&&(tr.x=1),n.search("Y")===-1&&(tr.y=1),n.search("Z")===-1&&(tr.z=1);r.scale.copy(this._scaleStart).multiply(tr),this.scaleSnap&&(n.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(tn.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(tn.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(m0[n]),tn.copy(m0[n]),s==="local"&&tn.applyQuaternion(this.worldQuaternion),tn.cross(this.eye),tn.length()===0?l=!0:this.rotationAngle=this._offset.dot(tn.normalize())*a),(n==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&n!=="E"&&n!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Bf),this.dispatchEvent(v0)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(_0.mode=this.mode,this.dispatchEvent(_0)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Bf),this.dispatchEvent(v0),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Gr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function Qb(t){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:t.button};{const e=this.domElement.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*2-1,y:-(t.clientY-e.top)/e.height*2+1,button:t.button}}}function Jb(t){if(this.enabled)switch(t.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(t));break}}function eR(t){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(t)),this.pointerDown(this._getPointer(t)))}function tR(t){this.enabled&&this.pointerMove(this._getPointer(t))}function nR(t){this.enabled&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(t)))}function zf(t,e,n){const i=e.intersectObject(t,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||n)return i[r];return!1}const Gl=new Qn,it=new L(0,1,0),x0=new L(0,0,0),y0=new $e,Wl=new zt,xc=new zt,mi=new L,S0=new $e,ua=new L(1,0,0),Yr=new L(0,1,0),fa=new L(0,0,1),Xl=new L,Zo=new L,Qo=new L;class iR extends Tt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Mu({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new up({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=n.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const f=e.clone();f.color.setHex(255),f.opacity=.5;const d=e.clone();d.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25,e.clone().color.setHex(16776960);const v=e.clone();v.color.setHex(7895160);const x=new kt(0,.04,.1,12);x.translate(0,.05,0);const g=new St(.08,.08,.08);g.translate(0,.04,0);const h=new dn;h.setAttribute("position",new ct([0,0,0,1,0,0],3));const m=new kt(.0075,.0075,.5,3);m.translate(0,.25,0);function _(H,z){const K=new cr(H,.0075,3,64,z*Math.PI*2);return K.rotateY(Math.PI/2),K.rotateX(Math.PI/2),K}function y(){const H=new dn;return H.setAttribute("position",new ct([0,0,0,1,1,1],3)),H}const A={X:[[new de(x,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(x,s),[-.5,0,0],[0,0,Math.PI/2]],[new de(m,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new de(x,o),[0,.5,0]],[new de(x,o),[0,-.5,0],[Math.PI,0,0]],[new de(m,o)]],Z:[[new de(x,a),[0,0,.5],[Math.PI/2,0,0]],[new de(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new de(m,a),null,[Math.PI/2,0,0]]],XYZ:[[new de(new ro(.1,0),d.clone()),[0,0,0]]],XY:[[new de(new St(.15,.15,.01),f.clone()),[.15,.15,0]]],YZ:[[new de(new St(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new St(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new de(new kt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new kt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new kt(.2,0,.6,4),i),[0,.3,0]],[new de(new kt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new kt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new kt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new de(new ro(.2,0),i)]],XY:[[new de(new St(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new St(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new St(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new de(new ro(.01,2),r),null,null,null,"helper"]],END:[[new de(new ro(.01,2),r),null,null,null,"helper"]],DELTA:[[new Li(y(),r),null,null,null,"helper"]],X:[[new Li(h,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Li(h,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Li(h,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},b={XYZE:[[new de(_(.5,1),v),null,[0,Math.PI/2,0]]],X:[[new de(_(.5,.5),s)]],Y:[[new de(_(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new de(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new de(_(.75,1),u),null,[0,Math.PI/2,0]]]},M={AXIS:[[new Li(h,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new de(new wu(.25,10,8),i)]],X:[[new de(new cr(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new de(new cr(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new de(new cr(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new de(new cr(.75,.1,2,24),i)]]},P={X:[[new de(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(m,s),[0,0,0],[0,0,-Math.PI/2]],[new de(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new de(g,o),[0,.5,0]],[new de(m,o)],[new de(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new de(g,a),[0,0,.5],[Math.PI/2,0,0]],[new de(m,a),[0,0,0],[Math.PI/2,0,0]],[new de(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new de(new St(.15,.15,.01),f),[.15,.15,0]]],YZ:[[new de(new St(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new St(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new St(.1,.1,.1),d.clone())]]},I={X:[[new de(new kt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new kt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new kt(.2,0,.6,4),i),[0,.3,0]],[new de(new kt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new kt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new kt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new de(new St(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new St(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new St(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new St(.2,.2,.2),i),[0,0,0]]]},U={X:[[new Li(h,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Li(h,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Li(h,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(H){const z=new Tt;for(const K in H)for(let N=H[K].length;N--;){const q=H[K][N][0].clone(),Z=H[K][N][1],se=H[K][N][2],ve=H[K][N][3],He=H[K][N][4];q.name=K,q.tag=He,Z&&q.position.set(Z[0],Z[1],Z[2]),se&&q.rotation.set(se[0],se[1],se[2]),ve&&q.scale.set(ve[0],ve[1],ve[2]),q.updateMatrix();const $=q.geometry.clone();$.applyMatrix4(q.matrix),q.geometry=$,q.renderOrder=1/0,q.position.set(0,0,0),q.rotation.set(0,0,0),q.scale.set(1,1,1),z.add(q)}return z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(A)),this.add(this.gizmo.rotate=O(b)),this.add(this.gizmo.scale=O(P)),this.add(this.picker.translate=O(w)),this.add(this.picker.rotate=O(S)),this.add(this.picker.scale=O(I)),this.add(this.helper.translate=O(T)),this.add(this.helper.rotate=O(M)),this.add(this.helper.scale=O(U)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:xc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ft.setFromEuler(Gl.set(0,0,0)),o.quaternion.copy(i).multiply(ft),Math.abs(it.copy(ua).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ft.setFromEuler(Gl.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(ft),Math.abs(it.copy(Yr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ft.setFromEuler(Gl.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(ft),Math.abs(it.copy(fa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ft.setFromEuler(Gl.set(0,Math.PI/2,0)),it.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(y0.lookAt(x0,it,Yr)),o.quaternion.multiply(ft),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),tn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),tn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(tn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(it.copy(ua).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(it.copy(Yr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(it.copy(fa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(it.copy(fa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(it.copy(ua).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(it.copy(Yr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Wl.copy(i),it.copy(this.eye).applyQuaternion(ft.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(y0.lookAt(this.eye,x0,Yr)),o.name==="X"&&(ft.setFromAxisAngle(ua,Math.atan2(-it.y,it.z)),ft.multiplyQuaternions(Wl,ft),o.quaternion.copy(ft)),o.name==="Y"&&(ft.setFromAxisAngle(Yr,Math.atan2(it.x,it.z)),ft.multiplyQuaternions(Wl,ft),o.quaternion.copy(ft)),o.name==="Z"&&(ft.setFromAxisAngle(fa,Math.atan2(it.y,it.x)),ft.multiplyQuaternions(Wl,ft),o.quaternion.copy(ft))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class rR extends de{constructor(){super(new Ka(1e5,1e5,2,2),new Mu({visible:!1,wireframe:!0,side:Hn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),Xl.copy(ua).applyQuaternion(n==="local"?this.worldQuaternion:xc),Zo.copy(Yr).applyQuaternion(n==="local"?this.worldQuaternion:xc),Qo.copy(fa).applyQuaternion(n==="local"?this.worldQuaternion:xc),it.copy(Zo),this.mode){case"translate":case"scale":switch(this.axis){case"X":it.copy(this.eye).cross(Xl),mi.copy(Xl).cross(it);break;case"Y":it.copy(this.eye).cross(Zo),mi.copy(Zo).cross(it);break;case"Z":it.copy(this.eye).cross(Qo),mi.copy(Qo).cross(it);break;case"XY":mi.copy(Qo);break;case"YZ":mi.copy(Xl);break;case"XZ":it.copy(Qo),mi.copy(Zo);break;case"XYZ":case"E":mi.set(0,0,0);break}break;case"rotate":default:mi.set(0,0,0)}mi.length()===0?this.quaternion.copy(this.cameraQuaternion):(S0.lookAt(tn.set(0,0,0),mi,it),this.quaternion.setFromRotationMatrix(S0)),super.updateMatrixWorld(e)}}const Ux=0,sR=1,oR=2,M0=2,Hf=1.25,E0=1,wa=6*4+4+4,Tu=65535,aR=Math.pow(2,-24),Vf=Symbol("SKIP_GENERATION");function lR(t){return t.index?t.index.count:t.attributes.position.count}function Oo(t){return lR(t)/3}function cR(t,e=ArrayBuffer){return t>65535?new Uint32Array(new e(4*t)):new Uint16Array(new e(2*t))}function uR(t,e){if(!t.index){const n=t.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=cR(n,i);t.setIndex(new $n(r,1));for(let s=0;s<n;s++)r[s]=s}}function Nx(t){const e=Oo(t),n=t.drawRange,i=n.start/3,r=(n.start+n.count)/3,s=Math.max(0,i),o=Math.min(e,r)-s;return[{offset:Math.floor(s),count:Math.floor(o)}]}function Fx(t){if(!t.groups||!t.groups.length)return Nx(t);const e=[],n=new Set,i=t.drawRange,r=i.start/3,s=(i.start+i.count)/3;for(const a of t.groups){const l=a.start/3,c=(a.start+a.count)/3;n.add(Math.max(r,l)),n.add(Math.min(s,c))}const o=Array.from(n.values()).sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){const l=o[a],c=o[a+1];e.push({offset:Math.floor(l),count:Math.floor(c-l)})}return e}function fR(t){if(t.groups.length===0)return!1;const e=Oo(t),n=Fx(t).sort((s,o)=>s.offset-o.offset),i=n[n.length-1];i.count=Math.min(e-i.offset,i.count);let r=0;return n.forEach(({count:s})=>r+=s),e!==r}function Gf(t,e,n,i,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,f=-1/0,d=1/0,u=1/0,p=1/0,v=-1/0,x=-1/0,g=-1/0;for(let h=e*6,m=(e+n)*6;h<m;h+=6){const _=t[h+0],y=t[h+1],A=_-y,w=_+y;A<s&&(s=A),w>l&&(l=w),_<d&&(d=_),_>v&&(v=_);const T=t[h+2],b=t[h+3],M=T-b,S=T+b;M<o&&(o=M),S>c&&(c=S),T<u&&(u=T),T>x&&(x=T);const P=t[h+4],I=t[h+5],U=P-I,O=P+I;U<a&&(a=U),O>f&&(f=O),P<p&&(p=P),P>g&&(g=P)}i[0]=s,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=f,r[0]=d,r[1]=u,r[2]=p,r[3]=v,r[4]=x,r[5]=g}function dR(t,e=null,n=null,i=null){const r=t.attributes.position,s=t.index?t.index.array:null,o=Oo(t),a=r.normalized;let l;e===null?(l=new Float32Array(o*6*4),n=0,i=o):(l=e,n=n||0,i=i||o);const c=r.array,f=r.offset||0;let d=3;r.isInterleavedBufferAttribute&&(d=r.data.stride);const u=["getX","getY","getZ"];for(let p=n;p<n+i;p++){const v=p*3,x=p*6;let g=v+0,h=v+1,m=v+2;s&&(g=s[g],h=s[h],m=s[m]),a||(g=g*d+f,h=h*d+f,m=m*d+f);for(let _=0;_<3;_++){let y,A,w;a?(y=r[u[_]](g),A=r[u[_]](h),w=r[u[_]](m)):(y=c[g+_],A=c[h+_],w=c[m+_]);let T=y;A<T&&(T=A),w<T&&(T=w);let b=y;A>b&&(b=A),w>b&&(b=w);const M=(b-T)/2,S=_*2;l[x+S+0]=T+M,l[x+S+1]=M+(Math.abs(T)+M)*aR}}return l}function Et(t,e,n){return n.min.x=e[t],n.min.y=e[t+1],n.min.z=e[t+2],n.max.x=e[t+3],n.max.y=e[t+4],n.max.z=e[t+5],n}function w0(t){let e=-1,n=-1/0;for(let i=0;i<3;i++){const r=t[i+3]-t[i];r>n&&(n=r,e=i)}return e}function T0(t,e){e.set(t)}function A0(t,e,n){let i,r;for(let s=0;s<3;s++){const o=s+3;i=t[s],r=e[s],n[s]=i<r?i:r,i=t[o],r=e[o],n[o]=i>r?i:r}}function jl(t,e,n){for(let i=0;i<3;i++){const r=e[t+2*i],s=e[t+2*i+1],o=r-s,a=r+s;o<n[i]&&(n[i]=o),a>n[i+3]&&(n[i+3]=a)}}function Jo(t){const e=t[3]-t[0],n=t[4]-t[1],i=t[5]-t[2];return 2*(e*n+n*i+i*e)}const Ii=32,hR=(t,e)=>t.candidate-e.candidate,nr=new Array(Ii).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Yl=new Float32Array(6);function pR(t,e,n,i,r,s){let o=-1,a=0;if(s===Ux)o=w0(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===sR)o=w0(t),o!==-1&&(a=mR(n,i,r,o));else if(s===oR){const l=Jo(t);let c=Hf*r;const f=i*6,d=(i+r)*6;for(let u=0;u<3;u++){const p=e[u],g=(e[u+3]-p)/Ii;if(r<Ii/4){const h=[...nr];h.length=r;let m=0;for(let y=f;y<d;y+=6,m++){const A=h[m];A.candidate=n[y+2*u],A.count=0;const{bounds:w,leftCacheBounds:T,rightCacheBounds:b}=A;for(let M=0;M<3;M++)b[M]=1/0,b[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0,w[M]=1/0,w[M+3]=-1/0;jl(y,n,w)}h.sort(hR);let _=r;for(let y=0;y<_;y++){const A=h[y];for(;y+1<_&&h[y+1].candidate===A.candidate;)h.splice(y+1,1),_--}for(let y=f;y<d;y+=6){const A=n[y+2*u];for(let w=0;w<_;w++){const T=h[w];A>=T.candidate?jl(y,n,T.rightCacheBounds):(jl(y,n,T.leftCacheBounds),T.count++)}}for(let y=0;y<_;y++){const A=h[y],w=A.count,T=r-A.count,b=A.leftCacheBounds,M=A.rightCacheBounds;let S=0;w!==0&&(S=Jo(b)/l);let P=0;T!==0&&(P=Jo(M)/l);const I=E0+Hf*(S*w+P*T);I<c&&(o=u,c=I,a=A.candidate)}}else{for(let _=0;_<Ii;_++){const y=nr[_];y.count=0,y.candidate=p+g+_*g;const A=y.bounds;for(let w=0;w<3;w++)A[w]=1/0,A[w+3]=-1/0}for(let _=f;_<d;_+=6){let w=~~((n[_+2*u]-p)/g);w>=Ii&&(w=Ii-1);const T=nr[w];T.count++,jl(_,n,T.bounds)}const h=nr[Ii-1];T0(h.bounds,h.rightCacheBounds);for(let _=Ii-2;_>=0;_--){const y=nr[_],A=nr[_+1];A0(y.bounds,A.rightCacheBounds,y.rightCacheBounds)}let m=0;for(let _=0;_<Ii-1;_++){const y=nr[_],A=y.count,w=y.bounds,b=nr[_+1].rightCacheBounds;A!==0&&(m===0?T0(w,Yl):A0(w,Yl,Yl)),m+=A;let M=0,S=0;m!==0&&(M=Jo(Yl)/l);const P=r-m;P!==0&&(S=Jo(b)/l);const I=E0+Hf*(M*m+S*P);I<c&&(o=u,c=I,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function mR(t,e,n,i){let r=0;for(let s=e,o=e+n;s<o;s++)r+=t[s*6+i*2];return r/n}class Wf{constructor(){this.boundingData=new Float32Array(6)}}function gR(t,e,n,i,r,s){let o=i,a=i+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&n[o*6+c]<l;)o++;for(;o<=a&&n[a*6+c]>=l;)a--;if(o<a){for(let f=0;f<3;f++){let d=e[o*3+f];e[o*3+f]=e[a*3+f],e[a*3+f]=d}for(let f=0;f<6;f++){let d=n[o*6+f];n[o*6+f]=n[a*6+f],n[a*6+f]=d}o++,a--}else return o}}function _R(t,e,n,i,r,s){let o=i,a=i+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&n[o*6+c]<l;)o++;for(;o<=a&&n[a*6+c]>=l;)a--;if(o<a){let f=t[o];t[o]=t[a],t[a]=f;for(let d=0;d<6;d++){let u=n[o*6+d];n[o*6+d]=n[a*6+d],n[a*6+d]=u}o++,a--}else return o}}function _n(t,e){return e[t+15]===65535}function Ln(t,e){return e[t+6]}function Wn(t,e){return e[t+14]}function Xn(t){return t+8}function jn(t,e){return e[t+6]}function Ox(t,e){return e[t+7]}let kx,da,yc,Bx;const vR=Math.pow(2,32);function Jd(t){return"count"in t?1:1+Jd(t.left)+Jd(t.right)}function xR(t,e,n){return kx=new Float32Array(n),da=new Uint32Array(n),yc=new Uint16Array(n),Bx=new Uint8Array(n),eh(t,e)}function eh(t,e){const n=t/4,i=t/2,r="count"in e,s=e.boundingData;for(let o=0;o<6;o++)kx[n+o]=s[o];if(r)if(e.buffer){const o=e.buffer;Bx.set(new Uint8Array(o),t);for(let a=t,l=t+o.byteLength;a<l;a+=wa){const c=a/2;_n(c,yc)||(da[a/4+6]+=n)}return t+o.byteLength}else{const o=e.offset,a=e.count;return da[n+6]=o,yc[i+14]=a,yc[i+15]=Tu,t+wa}else{const o=e.left,a=e.right,l=e.splitAxis;let c;if(c=eh(t+wa,o),c/4>vR)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return da[n+6]=c/4,c=eh(c,a),da[n+7]=l,c}}function yR(t,e){const n=(t.index?t.index.count:t.attributes.position.count)/3,i=n>2**16,r=i?4:2,s=e?new SharedArrayBuffer(n*r):new ArrayBuffer(n*r),o=i?new Uint32Array(s):new Uint16Array(s);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function SR(t,e,n,i,r){const{maxDepth:s,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:f}=r,d=t._indirectBuffer,u=t.geometry,p=u.index?u.index.array:null,v=f?_R:gR,x=Oo(u),g=new Float32Array(6);let h=!1;const m=new Wf;return Gf(e,n,i,m.boundingData,g),y(m,n,i,g),m;function _(A){c&&c(A/x)}function y(A,w,T,b=null,M=0){if(!h&&M>=s&&(h=!0,o&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(u))),T<=a||M>=s)return _(w+T),A.offset=w,A.count=T,A;const S=pR(A.boundingData,b,e,w,T,l);if(S.axis===-1)return _(w+T),A.offset=w,A.count=T,A;const P=v(d,p,e,w,T,S);if(P===w||P===w+T)_(w+T),A.offset=w,A.count=T;else{A.splitAxis=S.axis;const I=new Wf,U=w,O=P-w;A.left=I,Gf(e,U,O,I.boundingData,g),y(I,U,O,g,M+1);const H=new Wf,z=P,K=T-O;A.right=H,Gf(e,z,K,H.boundingData,g),y(H,z,K,g,M+1)}return A}}function MR(t,e){const n=t.geometry;e.indirect&&(t._indirectBuffer=yR(n,e.useSharedArrayBuffer),fR(n)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),t._indirectBuffer||uR(n,e);const i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=dR(n),s=e.indirect?Nx(n):Fx(n);t._roots=s.map(o=>{const a=SR(t,r,o.offset,o.count,e),l=Jd(a),c=new i(wa*l);return xR(0,a,c),c})}class Wi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,n){let i=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][n];i=l<i?l:i,r=l>r?l:r}this.min=i,this.max=r}setFromPoints(e,n){let i=1/0,r=-1/0;for(let s=0,o=n.length;s<o;s++){const a=n[s],l=e.dot(a);i=l<i?l:i,r=l>r?l:r}this.min=i,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}}Wi.prototype.setFromBox=function(){const t=new L;return function(n,i){const r=i.min,s=i.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let f=0;f<=1;f++){t.x=r.x*l+s.x*(1-l),t.y=r.y*c+s.y*(1-c),t.z=r.z*f+s.z*(1-f);const d=n.dot(t);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}}();const ER=function(){const t=new L,e=new L,n=new L;return function(r,s,o){const a=r.start,l=t,c=s.start,f=e;n.subVectors(a,c),t.subVectors(r.end,r.start),e.subVectors(s.end,s.start);const d=n.dot(f),u=f.dot(l),p=f.dot(f),v=n.dot(l),g=l.dot(l)*p-u*u;let h,m;g!==0?h=(d*u-v*p)/g:h=0,m=(d+h*u)/p,o.x=h,o.y=m}}(),hp=function(){const t=new Se,e=new L,n=new L;return function(r,s,o,a){ER(r,s,t);let l=t.x,c=t.y;if(l>=0&&l<=1&&c>=0&&c<=1){r.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let f;l<0?f=r.start:f=r.end;let d;c<0?d=s.start:d=s.end;const u=e,p=n;if(r.closestPointToPoint(d,!0,e),s.closestPointToPoint(f,!0,n),u.distanceToSquared(d)<=p.distanceToSquared(f)){o.copy(u),a.copy(d);return}else{o.copy(f),a.copy(p);return}}}}(),wR=function(){const t=new L,e=new L,n=new ai,i=new Bi;return function(s,o){const{radius:a,center:l}=s,{a:c,b:f,c:d}=o;if(i.start=c,i.end=f,i.closestPointToPoint(l,!0,t).distanceTo(l)<=a||(i.start=c,i.end=d,i.closestPointToPoint(l,!0,t).distanceTo(l)<=a)||(i.start=f,i.end=d,i.closestPointToPoint(l,!0,t).distanceTo(l)<=a))return!0;const x=o.getPlane(n);if(Math.abs(x.distanceToPoint(l))<=a){const h=x.projectPoint(l,e);if(o.containsPoint(h))return!0}return!1}}(),TR=1e-15;function Xf(t){return Math.abs(t)<TR}class di extends cn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Wi),this.points=[this.a,this.b,this.c],this.sphere=new $a,this.plane=new ai,this.needsUpdate=!0}intersectsSphere(e){return wR(e,this)}update(){const e=this.a,n=this.b,i=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);const c=s[1],f=o[1];c.subVectors(e,n),f.setFromPoints(c,r);const d=s[2],u=o[2];d.subVectors(n,i),u.setFromPoints(d,r);const p=s[3],v=o[3];p.subVectors(i,e),v.setFromPoints(p,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}di.prototype.closestPointToSegment=function(){const t=new L,e=new L,n=new Bi;return function(r,s=null,o=null){const{start:a,end:l}=r,c=this.points;let f,d=1/0;for(let u=0;u<3;u++){const p=(u+1)%3;n.start.copy(c[u]),n.end.copy(c[p]),hp(n,r,t,e),f=t.distanceToSquared(e),f<d&&(d=f,s&&s.copy(t),o&&o.copy(e))}return this.closestPointToPoint(a,t),f=a.distanceToSquared(t),f<d&&(d=f,s&&s.copy(t),o&&o.copy(a)),this.closestPointToPoint(l,t),f=l.distanceToSquared(t),f<d&&(d=f,s&&s.copy(t),o&&o.copy(l)),Math.sqrt(d)}}();di.prototype.intersectsTriangle=function(){const t=new di,e=new Array(3),n=new Array(3),i=new Wi,r=new Wi,s=new L,o=new L,a=new L,l=new L,c=new L,f=new Bi,d=new Bi,u=new Bi,p=new L;function v(x,g,h){const m=x.points;let _=0,y=-1;for(let A=0;A<3;A++){const{start:w,end:T}=f;w.copy(m[A]),T.copy(m[(A+1)%3]),f.delta(o);const b=Xf(g.distanceToPoint(w));if(Xf(g.normal.dot(o))&&b){h.copy(f),_=2;break}const M=g.intersectLine(f,p);if(!M&&b&&p.copy(w),(M||b)&&!Xf(p.distanceTo(T))){if(_<=1)(_===1?h.start:h.end).copy(p),b&&(y=_);else if(_>=2){(y===1?h.start:h.end).copy(p),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(g,h=null,m=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(t.copy(g),t.update(),g=t);const _=this.plane,y=g.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){const A=this.satBounds,w=this.satAxes;n[0]=g.a,n[1]=g.b,n[2]=g.c;for(let M=0;M<4;M++){const S=A[M],P=w[M];if(i.setFromPoints(P,n),S.isSeparated(i))return!1}const T=g.satBounds,b=g.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let M=0;M<4;M++){const S=T[M],P=b[M];if(i.setFromPoints(P,e),S.isSeparated(i))return!1}for(let M=0;M<4;M++){const S=w[M];for(let P=0;P<4;P++){const I=b[P];if(s.crossVectors(S,I),i.setFromPoints(s,e),r.setFromPoints(s,n),i.isSeparated(r))return!1}}return h&&(m||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),h.start.set(0,0,0),h.end.set(0,0,0)),!0}else{const A=v(this,y,d);if(A===1&&g.containsPoint(d.end))return h&&(h.start.copy(d.end),h.end.copy(d.end)),!0;if(A!==2)return!1;const w=v(g,_,u);if(w===1&&this.containsPoint(u.end))return h&&(h.start.copy(u.end),h.end.copy(u.end)),!0;if(w!==2)return!1;if(d.delta(a),u.delta(l),a.dot(l)<0){let U=u.start;u.start=u.end,u.end=U}const T=d.start.dot(a),b=d.end.dot(a),M=u.start.dot(a),S=u.end.dot(a),P=b<M,I=T<S;return T!==S&&M!==b&&P===I?!1:(h&&(c.subVectors(d.start,u.start),c.dot(a)>0?h.start.copy(d.start):h.start.copy(u.start),c.subVectors(d.end,u.end),c.dot(a)<0?h.end.copy(d.end):h.end.copy(u.end)),!0)}}}();di.prototype.distanceToPoint=function(){const t=new L;return function(n){return this.closestPointToPoint(n,t),n.distanceTo(t)}}();di.prototype.distanceToTriangle=function(){const t=new L,e=new L,n=["a","b","c"],i=new Bi,r=new Bi;return function(o,a=null,l=null){const c=a||l?i:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let f=1/0;for(let d=0;d<3;d++){let u;const p=n[d],v=o[p];this.closestPointToPoint(v,t),u=v.distanceToSquared(t),u<f&&(f=u,a&&a.copy(t),l&&l.copy(v));const x=this[p];o.closestPointToPoint(x,t),u=x.distanceToSquared(t),u<f&&(f=u,a&&a.copy(x),l&&l.copy(t))}for(let d=0;d<3;d++){const u=n[d],p=n[(d+1)%3];i.set(this[u],this[p]);for(let v=0;v<3;v++){const x=n[v],g=n[(v+1)%3];r.set(o[x],o[g]),hp(i,r,t,e);const h=t.distanceToSquared(e);h<f&&(f=h,a&&a.copy(t),l&&l.copy(e))}}return Math.sqrt(f)}}();class mn{constructor(e,n,i){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new $e,this.invMatrix=new $e,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Wi),this.alignedSatBounds=new Array(3).fill().map(()=>new Wi),this.needsUpdate=!1,e&&this.min.copy(e),n&&this.max.copy(n),i&&this.matrix.copy(i)}set(e,n,i){this.min.copy(e),this.max.copy(n),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}mn.prototype.update=function(){return function(){const e=this.matrix,n=this.min,i=this.max,r=this.points;for(let c=0;c<=1;c++)for(let f=0;f<=1;f++)for(let d=0;d<=1;d++){const u=1*c|2*f|4*d,p=r[u];p.x=c?i.x:n.x,p.y=f?i.y:n.y,p.z=d?i.z:n.z,p.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let c=0;c<3;c++){const f=o[c],d=s[c],u=1<<c,p=r[u];f.subVectors(a,p),d.setFromPoints(f,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();mn.prototype.intersectsBox=function(){const t=new Wi;return function(n){this.needsUpdate&&this.update();const i=n.min,r=n.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(t.min=i.x,t.max=r.x,a[0].isSeparated(t)||(t.min=i.y,t.max=r.y,a[1].isSeparated(t))||(t.min=i.z,t.max=r.z,a[2].isSeparated(t)))return!1;for(let l=0;l<3;l++){const c=o[l],f=s[l];if(t.setFromBox(c,n),f.isSeparated(t))return!1}return!0}}();mn.prototype.intersectsTriangle=function(){const t=new di,e=new Array(3),n=new Wi,i=new Wi,r=new L;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(t.copy(o),t.update(),o=t);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let u=0;u<3;u++){const p=a[u],v=l[u];if(n.setFromPoints(v,e),p.isSeparated(n))return!1}const c=o.satBounds,f=o.satAxes,d=this.points;for(let u=0;u<3;u++){const p=c[u],v=f[u];if(n.setFromPoints(v,d),p.isSeparated(n))return!1}for(let u=0;u<3;u++){const p=l[u];for(let v=0;v<4;v++){const x=f[v];if(r.crossVectors(p,x),n.setFromPoints(r,e),i.setFromPoints(r,d),n.isSeparated(i))return!1}}return!0}}();mn.prototype.closestPointToPoint=function(){return function(e,n){return this.needsUpdate&&this.update(),n.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),n}}();mn.prototype.distanceToPoint=function(){const t=new L;return function(n){return this.closestPointToPoint(n,t),n.distanceTo(t)}}();mn.prototype.distanceToBox=function(){const t=["x","y","z"],e=new Array(12).fill().map(()=>new Bi),n=new Array(12).fill().map(()=>new Bi),i=new L,r=new L;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(r),this.closestPointToPoint(r,i),o.closestPointToPoint(i,r),l&&l.copy(i),c&&c.copy(r)),0;const f=a*a,d=o.min,u=o.max,p=this.points;let v=1/0;for(let g=0;g<8;g++){const h=p[g];r.copy(h).clamp(d,u);const m=h.distanceToSquared(r);if(m<v&&(v=m,l&&l.copy(h),c&&c.copy(r),m<f))return Math.sqrt(m)}let x=0;for(let g=0;g<3;g++)for(let h=0;h<=1;h++)for(let m=0;m<=1;m++){const _=(g+1)%3,y=(g+2)%3,A=h<<_|m<<y,w=1<<g|h<<_|m<<y,T=p[A],b=p[w];e[x].set(T,b);const S=t[g],P=t[_],I=t[y],U=n[x],O=U.start,H=U.end;O[S]=d[S],O[P]=h?d[P]:u[P],O[I]=m?d[I]:u[P],H[S]=u[S],H[P]=h?d[P]:u[P],H[I]=m?d[I]:u[P],x++}for(let g=0;g<=1;g++)for(let h=0;h<=1;h++)for(let m=0;m<=1;m++){r.x=g?u.x:d.x,r.y=h?u.y:d.y,r.z=m?u.z:d.z,this.closestPointToPoint(r,i);const _=r.distanceToSquared(i);if(_<v&&(v=_,l&&l.copy(i),c&&c.copy(r),_<f))return Math.sqrt(_)}for(let g=0;g<12;g++){const h=e[g];for(let m=0;m<12;m++){const _=n[m];hp(h,_,i,r);const y=i.distanceToSquared(r);if(y<v&&(v=y,l&&l.copy(i),c&&c.copy(r),y<f))return Math.sqrt(y)}}return Math.sqrt(v)}}();class pp{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class AR extends pp{constructor(){super(()=>new di)}}const Yn=new AR;class CR{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let n=null;this.setBuffer=i=>{n&&e.push(n),n=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{n=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ut=new CR;let hr,so;const Is=[],ql=new pp(()=>new Kt);function bR(t,e,n,i,r,s){hr=ql.getPrimitive(),so=ql.getPrimitive(),Is.push(hr,so),ut.setBuffer(t._roots[e]);const o=th(0,t.geometry,n,i,r,s);ut.clearBuffer(),ql.releasePrimitive(hr),ql.releasePrimitive(so),Is.pop(),Is.pop();const a=Is.length;return a>0&&(so=Is[a-1],hr=Is[a-2]),o}function th(t,e,n,i,r=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=ut;let f=t*2;if(_n(f,l)){const u=Ln(t,c),p=Wn(f,l);return Et(t,a,hr),i(u,p,!1,o,s+t,hr)}else{let S=function(I){const{uint16Array:U,uint32Array:O}=ut;let H=I*2;for(;!_n(H,U);)I=Xn(I),H=I*2;return Ln(I,O)},P=function(I){const{uint16Array:U,uint32Array:O}=ut;let H=I*2;for(;!_n(H,U);)I=jn(I,O),H=I*2;return Ln(I,O)+Wn(H,U)};const u=Xn(t),p=jn(t,c);let v=u,x=p,g,h,m,_;if(r&&(m=hr,_=so,Et(v,a,m),Et(x,a,_),g=r(m),h=r(_),h<g)){v=p,x=u;const I=g;g=h,h=I,m=_}m||(m=hr,Et(v,a,m));const y=_n(v*2,l),A=n(m,y,g,o+1,s+v);let w;if(A===M0){const I=S(v),O=P(v)-I;w=i(I,O,!0,o+1,s+v,m)}else w=A&&th(v,e,n,i,r,s,o+1);if(w)return!0;_=so,Et(x,a,_);const T=_n(x*2,l),b=n(_,T,h,o+1,s+x);let M;if(b===M0){const I=S(x),O=P(x)-I;M=i(I,O,!0,o+1,s+x,_)}else M=b&&th(x,e,n,i,r,s,o+1);return!!M}}const ea=new L,jf=new L;function RR(t,e,n={},i=0,r=1/0){const s=i*i,o=r*r;let a=1/0,l=null;if(t.shapecast({boundsTraverseOrder:f=>(ea.copy(e).clamp(f.min,f.max),ea.distanceToSquared(e)),intersectsBounds:(f,d,u)=>u<a&&u<o,intersectsTriangle:(f,d)=>{f.closestPointToPoint(e,ea);const u=e.distanceToSquared(ea);return u<a&&(jf.copy(ea),a=u,l=d),u<s}}),a===1/0)return null;const c=Math.sqrt(a);return n.point?n.point.copy(jf):n.point=jf.clone(),n.distance=c,n.faceIndex=l,n}const Ds=new L,Us=new L,Ns=new L,$l=new Se,Kl=new Se,Zl=new Se,C0=new L,b0=new L,R0=new L,Ql=new L;function PR(t,e,n,i,r,s,o,a){let l;if(s===fn?l=t.intersectTriangle(i,n,e,!0,r):l=t.intersectTriangle(e,n,i,s!==Hn,r),l===null)return null;const c=t.origin.distanceTo(r);return c<o||c>a?null:{distance:c,point:r.clone()}}function LR(t,e,n,i,r,s,o,a,l,c,f){Ds.fromBufferAttribute(e,s),Us.fromBufferAttribute(e,o),Ns.fromBufferAttribute(e,a);const d=PR(t,Ds,Us,Ns,Ql,l,c,f);if(d){i&&($l.fromBufferAttribute(i,s),Kl.fromBufferAttribute(i,o),Zl.fromBufferAttribute(i,a),d.uv=cn.getInterpolation(Ql,Ds,Us,Ns,$l,Kl,Zl,new Se)),r&&($l.fromBufferAttribute(r,s),Kl.fromBufferAttribute(r,o),Zl.fromBufferAttribute(r,a),d.uv1=cn.getInterpolation(Ql,Ds,Us,Ns,$l,Kl,Zl,new Se)),n&&(C0.fromBufferAttribute(n,s),b0.fromBufferAttribute(n,o),R0.fromBufferAttribute(n,a),d.normal=cn.getInterpolation(Ql,Ds,Us,Ns,C0,b0,R0,new L),d.normal.dot(t.direction)>0&&d.normal.multiplyScalar(-1));const u={a:s,b:o,c:a,normal:new L,materialIndex:0};cn.getNormal(Ds,Us,Ns,u.normal),d.face=u,d.faceIndex=s}return d}function Au(t,e,n,i,r,s,o){const a=i*3;let l=a+0,c=a+1,f=a+2;const d=t.index;t.index&&(l=d.getX(l),c=d.getX(c),f=d.getX(f));const{position:u,normal:p,uv:v,uv1:x}=t.attributes,g=LR(n,u,p,v,x,l,c,f,e,s,o);return g?(g.faceIndex=i,r&&r.push(g),g):null}function Lt(t,e,n,i){const r=t.a,s=t.b,o=t.c;let a=e,l=e+1,c=e+2;n&&(a=n.getX(a),l=n.getX(l),c=n.getX(c)),r.x=i.getX(a),r.y=i.getY(a),r.z=i.getZ(a),s.x=i.getX(l),s.y=i.getY(l),s.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function IR(t,e,n,i,r,s,o,a){const{geometry:l,_indirectBuffer:c}=t;for(let f=i,d=i+r;f<d;f++)Au(l,e,n,f,s,o,a)}function DR(t,e,n,i,r,s,o){const{geometry:a,_indirectBuffer:l}=t;let c=1/0,f=null;for(let d=i,u=i+r;d<u;d++){let p;p=Au(a,e,n,d,null,s,o),p&&p.distance<c&&(f=p,c=p.distance)}return f}function UR(t,e,n,i,r,s,o){const{geometry:a}=n,{index:l}=a,c=a.attributes.position;for(let f=t,d=e+t;f<d;f++){let u;if(u=f,Lt(o,u*3,l,c),o.needsUpdate=!0,i(o,u,r,s))return!0}return!1}function NR(t,e=null){e&&Array.isArray(e)&&(e=new Set(e));const n=t.geometry,i=n.index?n.index.array:null,r=n.attributes.position;let s,o,a,l,c=0;const f=t._roots;for(let u=0,p=f.length;u<p;u++)s=f[u],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),d(0,c),c+=s.byteLength;function d(u,p,v=!1){const x=u*2;if(a[x+15]===Tu){const h=o[u+6],m=a[x+14];let _=1/0,y=1/0,A=1/0,w=-1/0,T=-1/0,b=-1/0;for(let M=3*h,S=3*(h+m);M<S;M++){let P=i[M];const I=r.getX(P),U=r.getY(P),O=r.getZ(P);I<_&&(_=I),I>w&&(w=I),U<y&&(y=U),U>T&&(T=U),O<A&&(A=O),O>b&&(b=O)}return l[u+0]!==_||l[u+1]!==y||l[u+2]!==A||l[u+3]!==w||l[u+4]!==T||l[u+5]!==b?(l[u+0]=_,l[u+1]=y,l[u+2]=A,l[u+3]=w,l[u+4]=T,l[u+5]=b,!0):!1}else{const h=u+8,m=o[u+6],_=h+p,y=m+p;let A=v,w=!1,T=!1;e?A||(w=e.has(_),T=e.has(y),A=!w&&!T):(w=!0,T=!0);const b=A||w,M=A||T;let S=!1;b&&(S=d(h,p,A));let P=!1;M&&(P=d(m,p,A));const I=S||P;if(I)for(let U=0;U<3;U++){const O=h+U,H=m+U,z=l[O],K=l[O+3],N=l[H],q=l[H+3];l[u+U]=z<N?z:N,l[u+U+3]=K>q?K:q}return I}}}function br(t,e,n,i,r){let s,o,a,l,c,f;const d=1/n.direction.x,u=1/n.direction.y,p=1/n.direction.z,v=n.origin.x,x=n.origin.y,g=n.origin.z;let h=e[t],m=e[t+3],_=e[t+1],y=e[t+3+1],A=e[t+2],w=e[t+3+2];return d>=0?(s=(h-v)*d,o=(m-v)*d):(s=(m-v)*d,o=(h-v)*d),u>=0?(a=(_-x)*u,l=(y-x)*u):(a=(y-x)*u,l=(_-x)*u),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),p>=0?(c=(A-g)*p,f=(w-g)*p):(c=(w-g)*p,f=(A-g)*p),s>f||c>o)?!1:((c>s||s!==s)&&(s=c),(f<o||o!==o)&&(o=f),s<=r&&o>=i)}function FR(t,e,n,i,r,s,o,a){const{geometry:l,_indirectBuffer:c}=t;for(let f=i,d=i+r;f<d;f++){let u=c?c[f]:f;Au(l,e,n,u,s,o,a)}}function OR(t,e,n,i,r,s,o){const{geometry:a,_indirectBuffer:l}=t;let c=1/0,f=null;for(let d=i,u=i+r;d<u;d++){let p;p=Au(a,e,n,l?l[d]:d,null,s,o),p&&p.distance<c&&(f=p,c=p.distance)}return f}function kR(t,e,n,i,r,s,o){const{geometry:a}=n,{index:l}=a,c=a.attributes.position;for(let f=t,d=e+t;f<d;f++){let u;if(u=n.resolveTriangleIndex(f),Lt(o,u*3,l,c),o.needsUpdate=!0,i(o,u,r,s))return!0}return!1}function BR(t,e,n,i,r,s,o){ut.setBuffer(t._roots[e]),nh(0,t,n,i,r,s,o),ut.clearBuffer()}function nh(t,e,n,i,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ut,f=t*2;if(_n(f,l)){const u=Ln(t,c),p=Wn(f,l);IR(e,n,i,u,p,r,s,o)}else{const u=Xn(t);br(u,a,i,s,o)&&nh(u,e,n,i,r,s,o);const p=jn(t,c);br(p,a,i,s,o)&&nh(p,e,n,i,r,s,o)}}const zR=["x","y","z"];function HR(t,e,n,i,r,s){ut.setBuffer(t._roots[e]);const o=ih(0,t,n,i,r,s);return ut.clearBuffer(),o}function ih(t,e,n,i,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=ut;let c=t*2;if(_n(c,a)){const d=Ln(t,l),u=Wn(c,a);return DR(e,n,i,d,u,r,s)}else{const d=Ox(t,l),u=zR[d],v=i.direction[u]>=0;let x,g;v?(x=Xn(t),g=jn(t,l)):(x=jn(t,l),g=Xn(t));const m=br(x,o,i,r,s)?ih(x,e,n,i,r,s):null;if(m){const A=m.point[u];if(v?A<=o[g+d]:A>=o[g+d+3])return m}const y=br(g,o,i,r,s)?ih(g,e,n,i,r,s):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}const Jl=new Kt,Fs=new di,Os=new di,ta=new $e,P0=new mn,ec=new mn;function VR(t,e,n,i){ut.setBuffer(t._roots[e]);const r=rh(0,t,n,i);return ut.clearBuffer(),r}function rh(t,e,n,i,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ut;let l=t*2;if(r===null&&(n.boundingBox||n.computeBoundingBox(),P0.set(n.boundingBox.min,n.boundingBox.max,i),r=P0),_n(l,o)){const f=e.geometry,d=f.index,u=f.attributes.position,p=n.index,v=n.attributes.position,x=Ln(t,a),g=Wn(l,o);if(ta.copy(i).invert(),n.boundsTree)return Et(t,s,ec),ec.matrix.copy(ta),ec.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:m=>ec.intersectsBox(m),intersectsTriangle:m=>{m.a.applyMatrix4(i),m.b.applyMatrix4(i),m.c.applyMatrix4(i),m.needsUpdate=!0;for(let _=x*3,y=(g+x)*3;_<y;_+=3)if(Lt(Os,_,d,u),Os.needsUpdate=!0,m.intersectsTriangle(Os))return!0;return!1}});for(let h=x*3,m=(g+x)*3;h<m;h+=3){Lt(Fs,h,d,u),Fs.a.applyMatrix4(ta),Fs.b.applyMatrix4(ta),Fs.c.applyMatrix4(ta),Fs.needsUpdate=!0;for(let _=0,y=p.count;_<y;_+=3)if(Lt(Os,_,p,v),Os.needsUpdate=!0,Fs.intersectsTriangle(Os))return!0}}else{const f=t+8,d=a[t+6];return Et(f,s,Jl),!!(r.intersectsBox(Jl)&&rh(f,e,n,i,r)||(Et(d,s,Jl),r.intersectsBox(Jl)&&rh(d,e,n,i,r)))}}const tc=new $e,Yf=new mn,na=new mn,GR=new L,WR=new L,XR=new L,jR=new L;function YR(t,e,n,i={},r={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Yf.set(e.boundingBox.min,e.boundingBox.max,n),Yf.needsUpdate=!0;const a=t.geometry,l=a.attributes.position,c=a.index,f=e.attributes.position,d=e.index,u=Yn.getPrimitive(),p=Yn.getPrimitive();let v=GR,x=WR,g=null,h=null;r&&(g=XR,h=jR);let m=1/0,_=null,y=null;return tc.copy(n).invert(),na.matrix.copy(tc),t.shapecast({boundsTraverseOrder:A=>Yf.distanceToBox(A),intersectsBounds:(A,w,T)=>T<m&&T<o?(w&&(na.min.copy(A.min),na.max.copy(A.max),na.needsUpdate=!0),!0):!1,intersectsRange:(A,w)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:b=>na.distanceToBox(b),intersectsBounds:(b,M,S)=>S<m&&S<o,intersectsRange:(b,M)=>{for(let S=b,P=b+M;S<P;S++){Lt(p,3*S,d,f),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let I=A,U=A+w;I<U;I++){Lt(u,3*I,c,l),u.needsUpdate=!0;const O=u.distanceToTriangle(p,v,g);if(O<m&&(x.copy(v),h&&h.copy(g),m=O,_=I,y=S),O<s)return!0}}}});{const T=Oo(e);for(let b=0,M=T;b<M;b++){Lt(p,3*b,d,f),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let S=A,P=A+w;S<P;S++){Lt(u,3*S,c,l),u.needsUpdate=!0;const I=u.distanceToTriangle(p,v,g);if(I<m&&(x.copy(v),h&&h.copy(g),m=I,_=S,y=b),I<s)return!0}}}}}),Yn.releasePrimitive(u),Yn.releasePrimitive(p),m===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=m,i.faceIndex=_,r&&(r.point?r.point.copy(h):r.point=h.clone(),r.point.applyMatrix4(tc),x.applyMatrix4(tc),r.distance=x.sub(r.point).length(),r.faceIndex=y),i)}function qR(t,e=null){e&&Array.isArray(e)&&(e=new Set(e));const n=t.geometry,i=n.index?n.index.array:null,r=n.attributes.position;let s,o,a,l,c=0;const f=t._roots;for(let u=0,p=f.length;u<p;u++)s=f[u],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),d(0,c),c+=s.byteLength;function d(u,p,v=!1){const x=u*2;if(a[x+15]===Tu){const h=o[u+6],m=a[x+14];let _=1/0,y=1/0,A=1/0,w=-1/0,T=-1/0,b=-1/0;for(let M=h,S=h+m;M<S;M++){const P=3*t.resolveTriangleIndex(M);for(let I=0;I<3;I++){let U=P+I;U=i?i[U]:U;const O=r.getX(U),H=r.getY(U),z=r.getZ(U);O<_&&(_=O),O>w&&(w=O),H<y&&(y=H),H>T&&(T=H),z<A&&(A=z),z>b&&(b=z)}}return l[u+0]!==_||l[u+1]!==y||l[u+2]!==A||l[u+3]!==w||l[u+4]!==T||l[u+5]!==b?(l[u+0]=_,l[u+1]=y,l[u+2]=A,l[u+3]=w,l[u+4]=T,l[u+5]=b,!0):!1}else{const h=u+8,m=o[u+6],_=h+p,y=m+p;let A=v,w=!1,T=!1;e?A||(w=e.has(_),T=e.has(y),A=!w&&!T):(w=!0,T=!0);const b=A||w,M=A||T;let S=!1;b&&(S=d(h,p,A));let P=!1;M&&(P=d(m,p,A));const I=S||P;if(I)for(let U=0;U<3;U++){const O=h+U,H=m+U,z=l[O],K=l[O+3],N=l[H],q=l[H+3];l[u+U]=z<N?z:N,l[u+U+3]=K>q?K:q}return I}}}function $R(t,e,n,i,r,s,o){ut.setBuffer(t._roots[e]),sh(0,t,n,i,r,s,o),ut.clearBuffer()}function sh(t,e,n,i,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ut,f=t*2;if(_n(f,l)){const u=Ln(t,c),p=Wn(f,l);FR(e,n,i,u,p,r,s,o)}else{const u=Xn(t);br(u,a,i,s,o)&&sh(u,e,n,i,r,s,o);const p=jn(t,c);br(p,a,i,s,o)&&sh(p,e,n,i,r,s,o)}}const KR=["x","y","z"];function ZR(t,e,n,i,r,s){ut.setBuffer(t._roots[e]);const o=oh(0,t,n,i,r,s);return ut.clearBuffer(),o}function oh(t,e,n,i,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=ut;let c=t*2;if(_n(c,a)){const d=Ln(t,l),u=Wn(c,a);return OR(e,n,i,d,u,r,s)}else{const d=Ox(t,l),u=KR[d],v=i.direction[u]>=0;let x,g;v?(x=Xn(t),g=jn(t,l)):(x=jn(t,l),g=Xn(t));const m=br(x,o,i,r,s)?oh(x,e,n,i,r,s):null;if(m){const A=m.point[u];if(v?A<=o[g+d]:A>=o[g+d+3])return m}const y=br(g,o,i,r,s)?oh(g,e,n,i,r,s):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}const nc=new Kt,ks=new di,Bs=new di,ia=new $e,L0=new mn,ic=new mn;function QR(t,e,n,i){ut.setBuffer(t._roots[e]);const r=ah(0,t,n,i);return ut.clearBuffer(),r}function ah(t,e,n,i,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ut;let l=t*2;if(r===null&&(n.boundingBox||n.computeBoundingBox(),L0.set(n.boundingBox.min,n.boundingBox.max,i),r=L0),_n(l,o)){const f=e.geometry,d=f.index,u=f.attributes.position,p=n.index,v=n.attributes.position,x=Ln(t,a),g=Wn(l,o);if(ia.copy(i).invert(),n.boundsTree)return Et(t,s,ic),ic.matrix.copy(ia),ic.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:m=>ic.intersectsBox(m),intersectsTriangle:m=>{m.a.applyMatrix4(i),m.b.applyMatrix4(i),m.c.applyMatrix4(i),m.needsUpdate=!0;for(let _=x,y=g+x;_<y;_++)if(Lt(Bs,3*e.resolveTriangleIndex(_),d,u),Bs.needsUpdate=!0,m.intersectsTriangle(Bs))return!0;return!1}});for(let h=x,m=g+x;h<m;h++){const _=e.resolveTriangleIndex(h);Lt(ks,3*_,d,u),ks.a.applyMatrix4(ia),ks.b.applyMatrix4(ia),ks.c.applyMatrix4(ia),ks.needsUpdate=!0;for(let y=0,A=p.count;y<A;y+=3)if(Lt(Bs,y,p,v),Bs.needsUpdate=!0,ks.intersectsTriangle(Bs))return!0}}else{const f=t+8,d=a[t+6];return Et(f,s,nc),!!(r.intersectsBox(nc)&&ah(f,e,n,i,r)||(Et(d,s,nc),r.intersectsBox(nc)&&ah(d,e,n,i,r)))}}const rc=new $e,qf=new mn,ra=new mn,JR=new L,eP=new L,tP=new L,nP=new L;function iP(t,e,n,i={},r={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),qf.set(e.boundingBox.min,e.boundingBox.max,n),qf.needsUpdate=!0;const a=t.geometry,l=a.attributes.position,c=a.index,f=e.attributes.position,d=e.index,u=Yn.getPrimitive(),p=Yn.getPrimitive();let v=JR,x=eP,g=null,h=null;r&&(g=tP,h=nP);let m=1/0,_=null,y=null;return rc.copy(n).invert(),ra.matrix.copy(rc),t.shapecast({boundsTraverseOrder:A=>qf.distanceToBox(A),intersectsBounds:(A,w,T)=>T<m&&T<o?(w&&(ra.min.copy(A.min),ra.max.copy(A.max),ra.needsUpdate=!0),!0):!1,intersectsRange:(A,w)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:b=>ra.distanceToBox(b),intersectsBounds:(b,M,S)=>S<m&&S<o,intersectsRange:(b,M)=>{for(let S=b,P=b+M;S<P;S++){const I=T.resolveTriangleIndex(S);Lt(p,3*I,d,f),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let U=A,O=A+w;U<O;U++){const H=t.resolveTriangleIndex(U);Lt(u,3*H,c,l),u.needsUpdate=!0;const z=u.distanceToTriangle(p,v,g);if(z<m&&(x.copy(v),h&&h.copy(g),m=z,_=U,y=S),z<s)return!0}}}})}else{const T=Oo(e);for(let b=0,M=T;b<M;b++){Lt(p,3*b,d,f),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let S=A,P=A+w;S<P;S++){const I=t.resolveTriangleIndex(S);Lt(u,3*I,c,l),u.needsUpdate=!0;const U=u.distanceToTriangle(p,v,g);if(U<m&&(x.copy(v),h&&h.copy(g),m=U,_=S,y=b),U<s)return!0}}}}}),Yn.releasePrimitive(u),Yn.releasePrimitive(p),m===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=m,i.faceIndex=_,r&&(r.point?r.point.copy(h):r.point=h.clone(),r.point.applyMatrix4(rc),x.applyMatrix4(rc),r.distance=x.sub(r.point).length(),r.faceIndex=y),i)}function rP(){return typeof SharedArrayBuffer<"u"}const Ta=new ut.constructor,eu=new ut.constructor,sr=new pp(()=>new Kt),zs=new Kt,Hs=new Kt,$f=new Kt,Kf=new Kt;let Zf=!1;function sP(t,e,n,i){if(Zf)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Zf=!0;const r=t._roots,s=e._roots;let o,a=0,l=0;const c=new $e().copy(n).invert();for(let f=0,d=r.length;f<d;f++){Ta.setBuffer(r[f]),l=0;const u=sr.getPrimitive();Et(0,Ta.float32Array,u),u.applyMatrix4(c);for(let p=0,v=s.length;p<v&&(eu.setBuffer(s[f]),o=ii(0,0,n,c,i,a,l,0,0,u),eu.clearBuffer(),l+=s[p].length,!o);p++);if(sr.releasePrimitive(u),Ta.clearBuffer(),a+=r[f].length,o)break}return Zf=!1,o}function ii(t,e,n,i,r,s=0,o=0,a=0,l=0,c=null,f=!1){let d,u;f?(d=eu,u=Ta):(d=Ta,u=eu);const p=d.float32Array,v=d.uint32Array,x=d.uint16Array,g=u.float32Array,h=u.uint32Array,m=u.uint16Array,_=t*2,y=e*2,A=_n(_,x),w=_n(y,m);let T=!1;if(w&&A)f?T=r(Ln(e,h),Wn(e*2,m),Ln(t,v),Wn(t*2,x),l,o+e,a,s+t):T=r(Ln(t,v),Wn(t*2,x),Ln(e,h),Wn(e*2,m),a,s+t,l,o+e);else if(w){const b=sr.getPrimitive();Et(e,g,b),b.applyMatrix4(n);const M=Xn(t),S=jn(t,v);Et(M,p,zs),Et(S,p,Hs);const P=b.intersectsBox(zs),I=b.intersectsBox(Hs);T=P&&ii(e,M,i,n,r,o,s,l,a+1,b,!f)||I&&ii(e,S,i,n,r,o,s,l,a+1,b,!f),sr.releasePrimitive(b)}else{const b=Xn(e),M=jn(e,h);Et(b,g,$f),Et(M,g,Kf);const S=c.intersectsBox($f),P=c.intersectsBox(Kf);if(S&&P)T=ii(t,b,n,i,r,s,o,a,l+1,c,f)||ii(t,M,n,i,r,s,o,a,l+1,c,f);else if(S)if(A)T=ii(t,b,n,i,r,s,o,a,l+1,c,f);else{const I=sr.getPrimitive();I.copy($f).applyMatrix4(n);const U=Xn(t),O=jn(t,v);Et(U,p,zs),Et(O,p,Hs);const H=I.intersectsBox(zs),z=I.intersectsBox(Hs);T=H&&ii(b,U,i,n,r,o,s,l,a+1,I,!f)||z&&ii(b,O,i,n,r,o,s,l,a+1,I,!f),sr.releasePrimitive(I)}else if(P)if(A)T=ii(t,M,n,i,r,s,o,a,l+1,c,f);else{const I=sr.getPrimitive();I.copy(Kf).applyMatrix4(n);const U=Xn(t),O=jn(t,v);Et(U,p,zs),Et(O,p,Hs);const H=I.intersectsBox(zs),z=I.intersectsBox(Hs);T=H&&ii(M,U,i,n,r,o,s,l,a+1,I,!f)||z&&ii(M,O,i,n,r,o,s,l,a+1,I,!f),sr.releasePrimitive(I)}}return T}const sc=new mn,I0=new Kt,oP={strategy:Ux,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class mp{static serialize(e,n={}){n={cloneBuffers:!0,...n};const i=e.geometry,r=e._roots,s=e._indirectBuffer,o=i.getIndex();let a;return n.cloneBuffers?a={roots:r.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:s?s.slice():null}:a={roots:r,index:o?o.array:null,indirectBuffer:s},a}static deserialize(e,n,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};const{index:r,roots:s,indirectBuffer:o}=e,a=new mp(n,{...i,[Vf]:!0});if(a._roots=s,a._indirectBuffer=o||null,i.setIndex){const l=n.getIndex();if(l===null){const c=new $n(e.index,1,!1);n.setIndex(c)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,n={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(n=Object.assign({...oP,[Vf]:!1},n),n.useSharedArrayBuffer&&!rP())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,n[Vf]||(MR(this,n),!e.boundingBox&&n.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Kt))),this.resolveTriangleIndex=n.indirect?i=>this._indirectBuffer[i]:i=>i}refit(e=null){return(this.indirect?qR:NR)(this,e)}traverse(e,n=0){const i=this._roots[n],r=new Uint32Array(i),s=new Uint16Array(i);o(0);function o(a,l=0){const c=a*2,f=s[c+15]===Tu;if(f){const d=r[a+6],u=s[c+14];e(l,f,new Float32Array(i,a*4,6),d,u)}else{const d=a+wa/4,u=r[a+6],p=r[a+7];e(l,f,new Float32Array(i,a*4,6),p)||(o(d,l+1),o(u,l+1))}}}raycast(e,n=Ei,i=0,r=1/0){const s=this._roots,o=this.geometry,a=[],l=n.isMaterial,c=Array.isArray(n),f=o.groups,d=l?n.side:n,u=this.indirect?$R:BR;for(let p=0,v=s.length;p<v;p++){const x=c?n[f[p].materialIndex].side:d,g=a.length;if(u(this,p,x,e,a,i,r),c){const h=f[p].materialIndex;for(let m=g,_=a.length;m<_;m++)a[m].face.materialIndex=h}}return a}raycastFirst(e,n=Ei,i=0,r=1/0){const s=this._roots,o=this.geometry,a=n.isMaterial,l=Array.isArray(n);let c=null;const f=o.groups,d=a?n.side:n,u=this.indirect?ZR:HR;for(let p=0,v=s.length;p<v;p++){const x=l?n[f[p].materialIndex].side:d,g=u(this,p,x,e,i,r);g!=null&&(c==null||g.distance<c.distance)&&(c=g,l&&(g.face.materialIndex=f[p].materialIndex))}return c}intersectsGeometry(e,n){let i=!1;const r=this._roots,s=this.indirect?QR:VR;for(let o=0,a=r.length;o<a&&(i=s(this,o,e,n),!i);o++);return i}shapecast(e){const n=Yn.getPrimitive(),i=this.indirect?kR:UR;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const d=o;o=(u,p,v,x,g)=>d(u,p,v,x,g)?!0:i(u,p,this,a,v,x,n)}else o||(a?o=(d,u,p,v)=>i(d,u,this,a,p,v,n):o=(d,u,p)=>p);let l=!1,c=0;const f=this._roots;for(let d=0,u=f.length;d<u;d++){const p=f[d];if(l=bR(this,d,s,o,r,c),l)break;c+=p.byteLength}return Yn.releasePrimitive(n),l}bvhcast(e,n,i){let{intersectsRanges:r,intersectsTriangles:s}=i;const o=Yn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?v=>{const x=this.resolveTriangleIndex(v);Lt(o,x*3,a,l)}:v=>{Lt(o,v*3,a,l)},f=Yn.getPrimitive(),d=e.geometry.index,u=e.geometry.attributes.position,p=e.indirect?v=>{const x=e.resolveTriangleIndex(v);Lt(f,x*3,d,u)}:v=>{Lt(f,v*3,d,u)};if(s){const v=(x,g,h,m,_,y,A,w)=>{for(let T=h,b=h+m;T<b;T++){p(T),f.a.applyMatrix4(n),f.b.applyMatrix4(n),f.c.applyMatrix4(n),f.needsUpdate=!0;for(let M=x,S=x+g;M<S;M++)if(c(M),o.needsUpdate=!0,s(o,f,M,T,_,y,A,w))return!0}return!1};if(r){const x=r;r=function(g,h,m,_,y,A,w,T){return x(g,h,m,_,y,A,w,T)?!0:v(g,h,m,_,y,A,w,T)}}else r=v}return sP(this,e,n,r)}intersectsBox(e,n){return sc.set(e.min,e.max,n),sc.needsUpdate=!0,this.shapecast({intersectsBounds:i=>sc.intersectsBox(i),intersectsTriangle:i=>sc.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:n=>e.intersectsBox(n),intersectsTriangle:n=>n.intersectsSphere(e)})}closestPointToGeometry(e,n,i={},r={},s=0,o=1/0){return(this.indirect?iP:YR)(this,e,n,i,r,s,o)}closestPointToPoint(e,n={},i=0,r=1/0){return RR(this,e,n,i,r)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{Et(0,new Float32Array(i),I0),e.union(I0)}),e}}const zx=new Map;function yP(t,e){zx.set(t,e)}function aP(t){return zx.get(t)}const D0=new Map;function lP(t){return t.kind==="custom"?`custom:${t.assetId||""}`:`${t.kind}:${JSON.stringify(t.params)}`}function cP(t){if(t.kind==="custom"&&t.assetId){const s=aP(t.assetId);if(!s)throw new Error(`Custom geometry not found: ${t.assetId}`);return s}const e=lP(t),n=D0.get(e);if(n)return n;const i=t.params;let r;switch(t.kind){case"box":r=new St(i.width??10,i.height??10,i.depth??10);break;case"sphere":r=new wu(i.radius??5,32,16);break;case"cylinder":r=new kt(i.radiusTop??5,i.radiusBottom??5,i.height??10,32);break;case"cone":r=new fp(i.radius??5,i.height??10,32);break;case"torus":r=new cr(i.radius??5,i.tube??1.5,16,48);break;default:r=new St(10,10,10)}return D0.set(e,r),r}function uP(t){const{color:e,opacity:n,isHole:i}=t.material;return new Vb({color:new We(e),transparent:i||n<1,opacity:i?.35:n,depthWrite:!i,side:Hn,metalness:.1,roughness:.65})}function fP(t){if(t.type==="group"||t.geometry.kind==="group"){const r=new io;return r.name=t.name,r.userData.id=t.id,lh(r,t),r.visible=t.visible,r}const e=cP(t.geometry),n=uP(t),i=new de(e,n);return i.userData.id=t.id,i.name=t.name,i.userData.geometryKey=`${t.geometry.kind}:${JSON.stringify(t.geometry.params)}:${t.geometry.assetId??""}`,lh(i,t),i.visible=t.visible,i}function lh(t,e){const{position:n,rotation:i,scale:r}=e.transform;t.position.set(n[0],n[1],n[2]),t.rotation.set(i[0],i[1],i[2]),t.scale.set(r[0],r[1],r[2])}function U0(t){return{position:[t.position.x,t.position.y,t.position.z],rotation:[t.rotation.x,t.rotation.y,t.rotation.z],scale:[t.scale.x,t.scale.y,t.scale.z]}}function dP(t,e){const n=[],i=[],r=[];if(!t)return{added:Object.keys(e.nodes),updated:[],removed:[]};for(const s of Object.keys(e.nodes)){const o=e.nodes[s],a=t.nodes[s];a?o.updatedAt!==a.updatedAt&&i.push(s):n.push(s)}for(const s of Object.keys(t.nodes))e.nodes[s]||r.push(s);return{added:n,updated:i,removed:r}}class hP{constructor(e,n){Ce(this,"scene");Ce(this,"camera");Ce(this,"renderer");Ce(this,"orbit");Ce(this,"transform");Ce(this,"objects",new Map);Ce(this,"raycaster",new Dx);Ce(this,"pointer",new Se);Ce(this,"clock",new Yb);Ce(this,"disposed",!1);Ce(this,"theme","light");Ce(this,"pivot",null);Ce(this,"pivotStartMatrices",new Map);Ce(this,"transformBeforeSingle",null);Ce(this,"transformBeforeMultiple",null);Ce(this,"lastNodes",null);Ce(this,"animate",()=>{this.disposed||(requestAnimationFrame(this.animate),this.orbit.update(),this.renderer.render(this.scene,this.camera))});Ce(this,"onResize",()=>{const e=this.canvas.clientWidth||window.innerWidth,n=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1)});Ce(this,"onPointerDown",e=>{if(this.transform.dragging||e.button!==0)return;const n=this.canvas.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.firstHitOnly=!0;const i=[];for(const o of this.objects.values())if(o.visible&&o instanceof de){const a=this.cb.getState().nodes[o.userData.id];if(!a||a.material.isHole)continue;i.push(o)}const r=this.raycaster.intersectObjects(i,!1),s=e.shiftKey||e.ctrlKey||e.metaKey;if(r.length>0){const o=r[0].object.userData.id,a=this.cb.getState().selection;if(s){const l=a.includes(o)?a.filter(c=>c!==o):[...a,o];this.cb.onSelectionChange(l)}else this.cb.onSelectionChange([o])}else s||this.cb.onSelectionChange([])});Ce(this,"onDragOver",e=>{var n;(n=e.dataTransfer)!=null&&n.types.includes("application/x-primitive")&&(e.preventDefault(),e.dataTransfer.dropEffect="copy")});Ce(this,"onDrop",e=>{var o;const n=(o=e.dataTransfer)==null?void 0:o.getData("application/x-primitive");if(!n)return;e.preventDefault();const i=this.canvas.getBoundingClientRect();this.pointer.x=(e.clientX-i.left)/i.width*2-1,this.pointer.y=-((e.clientY-i.top)/i.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const r=new ai(new L(0,1,0),0),s=new L;if(this.raycaster.ray.intersectPlane(r,s)){const a=[Math.round(s.x),0,Math.round(s.z)];this.cb.onDropPrimitive(n,a)}});this.canvas=e,this.cb=n,this.renderer=new Bb({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nx,this.scene=new zb,this.scene.background=new We(15790320);const{clientWidth:i,clientHeight:r}=e;this.camera=new zn(45,i/r,.1,1e4),this.camera.position.set(80,80,80),this.camera.lookAt(0,0,0);const s=new Gb(16777215,4473924,1.2);this.scene.add(s);const o=new jb(16777215,2);o.position.set(50,80,40),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),this.scene.add(o);const a=new qb(400,400,13421772,14737632);a.name="__grid__",this.scene.add(a),this.orbit=new Kb(this.camera,e),this.orbit.enableDamping=!0,this.orbit.dampingFactor=.1,this.transform=new Zb(this.camera,e),this.transform.setTranslationSnap(1),this.transform.setRotationSnap(hx.degToRad(15)),this.transform.setScaleSnap(.1),this.transform.addEventListener("dragging-changed",l=>{this.orbit.enabled=!l.value}),this.transform.addEventListener("mouseDown",()=>{if(this.pivot){const l=this.cb.getState().selection;this.transformBeforeMultiple=new Map;for(const c of l){const f=this.cb.getState().nodes[c];f&&this.transformBeforeMultiple.set(c,f.transform)}}else this.transform.object&&(this.transformBeforeSingle=U0(this.transform.object))}),this.transform.addEventListener("mouseUp",()=>{if(this.pivot&&this.transformBeforeMultiple){const l=[],c=new $e;for(const[f,d]of this.pivotStartMatrices){const u=this.objects.get(f);if(!u)continue;const p=new $e().multiplyMatrices(this.pivot.matrixWorld,d),v=u.parent||this.scene;c.copy(v.matrixWorld).invert();const x=new $e().multiplyMatrices(c,p),g=new L,h=new zt,m=new L;x.decompose(g,h,m);const _=new Qn().setFromQuaternion(h),y={position:[g.x,g.y,g.z],rotation:[_.x,_.y,_.z],scale:[m.x,m.y,m.z]},A=this.transformBeforeMultiple.get(f);A&&l.push({id:f,before:A,after:y})}l.length>0&&this.cb.onTransformMultipleEnd(l),this.transformBeforeMultiple=null}else if(this.transform.object&&this.transformBeforeSingle){const l=this.transform.object.userData.id,c=U0(this.transform.object);this.cb.onTransformEnd(l,this.transformBeforeSingle,c),this.transformBeforeSingle=null}}),this.scene.add(this.transform),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("dragover",this.onDragOver),e.addEventListener("drop",this.onDrop),window.addEventListener("resize",this.onResize),this.onResize(),this.animate()}syncScene(e){var s,o;const n=dP(this.lastNodes?{nodes:this.lastNodes}:null,e),i=[...n.removed].sort((a,l)=>{var d,u;const c=(d=this.lastNodes)==null?void 0:d[a],f=(u=this.lastNodes)==null?void 0:u[l];return(c!=null&&c.parentId?0:1)-(f!=null&&f.parentId?0:1)});for(const a of i){const l=this.objects.get(a);l&&((s=l.parent)==null||s.remove(l),l instanceof de&&(l.geometry.dispose(),l.material.dispose()),this.objects.delete(a))}const r=this.topoSort(e);for(const a of r){const l=e.nodes[a];if(!l)continue;const c=this.objects.get(a),f=n.added.includes(a);let d;f||!c?(d=fP(l),d instanceof de&&(d.castShadow=!0,d.receiveShadow=!0,d.geometry.attributes.position.count>500&&(d.geometry.boundsTree=new mp(d.geometry))),this.objects.set(a,d)):(d=c,n.updated.includes(a)&&this.updateObject(d,l));const u=l.parentId?this.objects.get(l.parentId)??this.scene:this.scene;d.parent!==u&&((o=d.parent)==null||o.remove(d),u.add(d))}this.syncSelection(e.selection),this.lastNodes=e.nodes}topoSort(e){const n=[],i=new Set,r=s=>{if(i.has(s))return;const o=e.nodes[s];o&&(o.parentId&&r(o.parentId),i.add(s),n.push(s))};for(const s of Object.keys(e.nodes))r(s);return n}updateObject(e,n){if(lh(e,n),e.visible=n.visible,e instanceof de&&n.geometry.kind!=="group"){const i=e.material;i.color.set(n.material.color),i.opacity=n.material.isHole?.35:n.material.opacity,i.transparent=n.material.isHole||n.material.opacity<1,i.depthWrite=!n.material.isHole;const r=e.userData.geometryKey,s=`${n.geometry.kind}:${JSON.stringify(n.geometry.params)}:${n.geometry.assetId??""}`;r!==s&&(e.userData.geometryKey=s)}}syncSelection(e){if(e.length===1){const n=this.objects.get(e[0]);n?(this.destroyPivot(),this.transform.attach(n)):this.transform.detach();return}if(e.length>1){this.attachPivot(e);return}this.destroyPivot(),this.transform.detach()}attachPivot(e){this.destroyPivot();const n=new Kt;for(const r of e){const s=this.objects.get(r);if(!s)continue;const o=new Kt().setFromObject(s);n.union(o)}if(n.isEmpty()){this.transform.detach();return}const i=new L;n.getCenter(i),this.pivot=new io,this.pivot.position.copy(i),this.scene.add(this.pivot),this.pivotStartMatrices.clear();for(const r of e){const s=this.objects.get(r);s&&(s.updateMatrixWorld(!0),this.pivotStartMatrices.set(r,s.matrixWorld.clone()))}this.transform.attach(this.pivot)}destroyPivot(){this.pivot&&(this.scene.remove(this.pivot),this.pivot=null),this.pivotStartMatrices.clear()}getMesh(e){const n=this.objects.get(e);return n instanceof de?n:void 0}setInteractionEnabled(e){this.orbit.enabled=e,this.transform.enabled=e}setTheme(e){this.theme=e;const n=e==="dark";this.scene.background.set(n?1710623:15790320)}dispose(){this.disposed=!0,this.canvas.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("resize",this.onResize),this.orbit.dispose(),this.transform.dispose();for(const e of this.objects.values())this.scene.remove(e),e instanceof de&&(e.geometry.dispose(),e.material.dispose());this.objects.clear(),this.renderer.dispose()}}function pP(){const t=Gt.useRef(null),e=Gt.useRef(null),n=Ht;return Gt.useEffect(()=>{const i=t.current;if(!i||e.current)return;const r=new hP(i,{getState:()=>n.getState(),onSelectionChange:l=>n.getState().setSelection(l),onTransformEnd:(l,c,f)=>{Rn(async()=>{const{TransformNodeCommand:d}=await import("./TransformNodeCommand-Bnvyesao.js");return{TransformNodeCommand:d}},[]).then(({TransformNodeCommand:d})=>{const u=new d(l,c,f);n.getState().execute(u)}).catch(()=>{console.warn("TransformNodeCommand not found, skipping command")})},onTransformMultipleEnd:l=>{l.length!==0&&Rn(async()=>{const{TransformMultipleCommand:c}=await import("./TransformMultipleCommand-CjJEsq6E.js");return{TransformMultipleCommand:c}},[]).then(({TransformMultipleCommand:c})=>{n.getState().execute(new c(l))}).catch(()=>{console.warn("TransformMultipleCommand not found")})},onDropPrimitive:(l,c)=>{Rn(async()=>{const{CreateNodeCommand:f}=await Promise.resolve().then(()=>oE);return{CreateNodeCommand:f}},void 0).then(({CreateNodeCommand:f})=>{n.getState().execute(new f({type:l,position:c}))})}});e.current=r;const s=n.getState();r.syncScene(s),r.setTheme(s.theme);const o=n.subscribe(l=>({nodes:l.nodes,rootIds:l.rootIds,selection:l.selection}),l=>r.syncScene({...l,nodes:l.nodes}),{equalityFn:(l,c)=>l.nodes===c.nodes&&l.selection===c.selection}),a=n.subscribe(l=>l.theme,l=>r.setTheme(l));return()=>{o(),a(),r.dispose(),e.current=null}},[]),ne.jsx("canvas",{ref:t,className:"w-full h-full block",tabIndex:0})}class mP{constructor(e){Ce(this,"id",wo());Ce(this,"timestamp",Date.now());Ce(this,"label","Удалить объект");Ce(this,"snapshot",null);this.nodeId=e}apply(e){const n=e.nodes[this.nodeId];if(!n)return e;const i=new Set,r=o=>{if(i.has(o))return;i.add(o);const a=e.nodes[o];if(a)for(const l of a.childrenIds)r(l)};r(this.nodeId),this.snapshot={node:n,rootIndex:e.rootIds.indexOf(this.nodeId),prevSelection:e.selection.filter(o=>!i.has(o))};const s={...e.nodes};for(const o of i)delete s[o];return{...e,nodes:s,rootIds:e.rootIds.filter(o=>!i.has(o)),selection:e.selection.filter(o=>!i.has(o))}}revert(e){if(!this.snapshot)return e;const{node:n,rootIndex:i,prevSelection:r}=this.snapshot,s=[...e.rootIds];return s.splice(Math.max(0,i),0,this.nodeId),{...e,nodes:{...e.nodes,[this.nodeId]:n},rootIds:s,selection:r}}}class gP{constructor(e){Ce(this,"id",wo());Ce(this,"timestamp",Date.now());Ce(this,"label","Удалить объекты");Ce(this,"commands");this.commands=e.map(n=>new mP(n))}apply(e){return this.commands.reduce((n,i)=>i.apply(n),e)}revert(e){return[...this.commands].reverse().reduce((n,i)=>i.revert(n),e)}}function _P(){const[t,e]=Gt.useState(null),n=Ht(a=>a.selection),i=Ht(a=>a.nodes),r=Ht(a=>a.execute);if(Gt.useEffect(()=>{const a=c=>{c.target.closest("canvas")&&(c.preventDefault(),e({x:c.clientX,y:c.clientY}))},l=()=>e(null);return window.addEventListener("contextmenu",a),window.addEventListener("click",l),()=>{window.removeEventListener("contextmenu",a),window.removeEventListener("click",l)}},[]),!t||n.length===0)return null;const s=n.length===1?i[n[0]]:null,o=[{label:"Дублировать",onClick:()=>{for(const a of n){const l=i[a];l&&r(new ip({type:l.geometry.kind,position:[l.transform.position[0]+5,l.transform.position[1],l.transform.position[2]+5],name:`${l.name} (copy)`}))}}},{label:"Удалить",onClick:()=>r(new gP(n))}];return s&&o.push({label:s.material.isHole?"Сделать solid":"Сделать hole",onClick:()=>r(new Vs(s.id,{key:"material",value:{isHole:!s.material.isHole}}))}),ne.jsx("div",{className:"fixed z-50 bg-panel border border-border rounded shadow-lg py-1 min-w-40",style:{left:t.x,top:t.y},children:o.map(a=>ne.jsx("button",{onClick:()=>{a.onClick(),e(null)},className:"w-full text-left px-3 py-1.5 text-sm hover:bg-bg",children:a.label},a.label))})}function vP(){const t=Ht(r=>r.undo),e=Ht(r=>r.redo),n=Ht(r=>r.theme),i=Ht(r=>r.toggleTheme);return Gt.useEffect(()=>{let r=null;const s=Ht.subscribe(o=>({nodes:o.nodes,rootIds:o.rootIds}),()=>{r!==null&&window.clearTimeout(r),r=window.setTimeout(async()=>{const{saveToLocal:o}=await Rn(async()=>{const{saveToLocal:a}=await import("./saveLoad-DXCDbS_o.js");return{saveToLocal:a}},[]);o(),r=null},2e3)},{equalityFn:(o,a)=>o.nodes===a.nodes&&o.rootIds===a.rootIds});return()=>{s(),r!==null&&window.clearTimeout(r)}},[]),Gt.useEffect(()=>{(async()=>{const{loadFromLocal:r}=await Rn(async()=>{const{loadFromLocal:s}=await import("./saveLoad-DXCDbS_o.js");return{loadFromLocal:s}},[]);r()})()},[]),ne.jsxs("div",{className:"h-full flex flex-col bg-bg text-fg",children:[ne.jsxs("header",{className:"h-12 border-b border-border bg-panel flex items-center gap-2 px-4 shrink-0",children:[ne.jsx(eE,{}),ne.jsx("span",{className:"font-semibold mr-4",children:"Tinkercad Clone"}),ne.jsx("button",{onClick:t,className:"px-3 py-1 border border-border rounded text-sm",title:"Undo (Ctrl+Z)",children:"↶"}),ne.jsx("button",{onClick:e,className:"px-3 py-1 border border-border rounded text-sm",title:"Redo (Ctrl+Y)",children:"↷"}),ne.jsx("button",{onClick:i,className:"px-3 py-1 border border-border rounded text-sm",children:n==="light"?"🌙":"☀️"}),ne.jsx("div",{className:"flex-1"}),ne.jsx(JM,{}),ne.jsx("div",{className:"w-px h-6 bg-border mx-2"}),ne.jsx("span",{className:"text-xs text-muted",children:"mm · snap 1"})]}),ne.jsxs("div",{className:"flex-1 flex min-h-0 overflow-hidden",children:[ne.jsxs("aside",{className:"w-56 border-r border-border bg-panel p-3 flex flex-col gap-3 shrink-0 overflow-y-auto",children:[ne.jsx("div",{className:"text-xs text-muted font-medium",children:"Библиотека"}),ne.jsx(lE,{})]}),ne.jsxs("div",{className:"w-48 border-r border-border bg-panel flex flex-col shrink-0",children:[ne.jsx("div",{className:"text-xs text-muted p-2 border-b border-border font-medium",children:"Объекты"}),ne.jsx(fE,{})]}),ne.jsxs("main",{className:"flex-1 min-w-0 relative",children:[ne.jsx(pP,{}),ne.jsx(_P,{})]}),ne.jsxs("aside",{className:"w-64 border-l border-border bg-panel shrink-0 overflow-y-auto",children:[ne.jsx("div",{className:"text-xs text-muted p-2 border-b border-border font-medium",children:"Свойства"}),ne.jsx(uE,{})]})]})]})}Qf.createRoot(document.getElementById("root")).render(ne.jsx(j0.StrictMode,{children:ne.jsx(vP,{})}));export{dn as B,L as V,$n as a,yP as r,Ht as u,wo as v};
