(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();function u0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var sd={exports:{}},Ja={},ad={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function s_(){if(jm)return mt;jm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function y(j){return j===null||typeof j!="object"?null:(j=v&&j[v]||j["@@iterator"],typeof j=="function"?j:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(j,ie,Ne){this.props=j,this.context=ie,this.refs=M,this.updater=Ne||w}S.prototype.isReactComponent={},S.prototype.setState=function(j,ie){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,ie,"setState")},S.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function g(){}g.prototype=S.prototype;function T(j,ie,Ne){this.props=j,this.context=ie,this.refs=M,this.updater=Ne||w}var C=T.prototype=new g;C.constructor=T,E(C,S.prototype),C.isPureReactComponent=!0;var A=Array.isArray,H=Object.prototype.hasOwnProperty,I={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function O(j,ie,Ne){var G,fe={},Se=null,xe=null;if(ie!=null)for(G in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Se=""+ie.key),ie)H.call(ie,G)&&!P.hasOwnProperty(G)&&(fe[G]=ie[G]);var Ae=arguments.length-2;if(Ae===1)fe.children=Ne;else if(1<Ae){for(var Le=Array(Ae),Ze=0;Ze<Ae;Ze++)Le[Ze]=arguments[Ze+2];fe.children=Le}if(j&&j.defaultProps)for(G in Ae=j.defaultProps,Ae)fe[G]===void 0&&(fe[G]=Ae[G]);return{$$typeof:r,type:j,key:Se,ref:xe,props:fe,_owner:I.current}}function L(j,ie){return{$$typeof:r,type:j.type,key:ie,ref:j.ref,props:j.props,_owner:j._owner}}function N(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function z(j){var ie={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Ne){return ie[Ne]})}var Q=/\/+/g;function ee(j,ie){return typeof j=="object"&&j!==null&&j.key!=null?z(""+j.key):ie.toString(36)}function de(j,ie,Ne,G,fe){var Se=typeof j;(Se==="undefined"||Se==="boolean")&&(j=null);var xe=!1;if(j===null)xe=!0;else switch(Se){case"string":case"number":xe=!0;break;case"object":switch(j.$$typeof){case r:case e:xe=!0}}if(xe)return xe=j,fe=fe(xe),j=G===""?"."+ee(xe,0):G,A(fe)?(Ne="",j!=null&&(Ne=j.replace(Q,"$&/")+"/"),de(fe,ie,Ne,"",function(Ze){return Ze})):fe!=null&&(N(fe)&&(fe=L(fe,Ne+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(Q,"$&/")+"/")+j)),ie.push(fe)),1;if(xe=0,G=G===""?".":G+":",A(j))for(var Ae=0;Ae<j.length;Ae++){Se=j[Ae];var Le=G+ee(Se,Ae);xe+=de(Se,ie,Ne,Le,fe)}else if(Le=y(j),typeof Le=="function")for(j=Le.call(j),Ae=0;!(Se=j.next()).done;)Se=Se.value,Le=G+ee(Se,Ae++),xe+=de(Se,ie,Ne,Le,fe);else if(Se==="object")throw ie=String(j),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function le(j,ie,Ne){if(j==null)return j;var G=[],fe=0;return de(j,G,"","",function(Se){return ie.call(Ne,Se,fe++)}),G}function oe(j){if(j._status===-1){var ie=j._result;ie=ie(),ie.then(function(Ne){(j._status===0||j._status===-1)&&(j._status=1,j._result=Ne)},function(Ne){(j._status===0||j._status===-1)&&(j._status=2,j._result=Ne)}),j._status===-1&&(j._status=0,j._result=ie)}if(j._status===1)return j._result.default;throw j._result}var ce={current:null},B={transition:null},he={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:I};function Y(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:le,forEach:function(j,ie,Ne){le(j,function(){ie.apply(this,arguments)},Ne)},count:function(j){var ie=0;return le(j,function(){ie++}),ie},toArray:function(j){return le(j,function(ie){return ie})||[]},only:function(j){if(!N(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},mt.Component=S,mt.Fragment=t,mt.Profiler=l,mt.PureComponent=T,mt.StrictMode=s,mt.Suspense=f,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,mt.act=Y,mt.cloneElement=function(j,ie,Ne){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var G=E({},j.props),fe=j.key,Se=j.ref,xe=j._owner;if(ie!=null){if(ie.ref!==void 0&&(Se=ie.ref,xe=I.current),ie.key!==void 0&&(fe=""+ie.key),j.type&&j.type.defaultProps)var Ae=j.type.defaultProps;for(Le in ie)H.call(ie,Le)&&!P.hasOwnProperty(Le)&&(G[Le]=ie[Le]===void 0&&Ae!==void 0?Ae[Le]:ie[Le])}var Le=arguments.length-2;if(Le===1)G.children=Ne;else if(1<Le){Ae=Array(Le);for(var Ze=0;Ze<Le;Ze++)Ae[Ze]=arguments[Ze+2];G.children=Ae}return{$$typeof:r,type:j.type,key:fe,ref:Se,props:G,_owner:xe}},mt.createContext=function(j){return j={$$typeof:d,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:c,_context:j},j.Consumer=j},mt.createElement=O,mt.createFactory=function(j){var ie=O.bind(null,j);return ie.type=j,ie},mt.createRef=function(){return{current:null}},mt.forwardRef=function(j){return{$$typeof:h,render:j}},mt.isValidElement=N,mt.lazy=function(j){return{$$typeof:m,_payload:{_status:-1,_result:j},_init:oe}},mt.memo=function(j,ie){return{$$typeof:x,type:j,compare:ie===void 0?null:ie}},mt.startTransition=function(j){var ie=B.transition;B.transition={};try{j()}finally{B.transition=ie}},mt.unstable_act=Y,mt.useCallback=function(j,ie){return ce.current.useCallback(j,ie)},mt.useContext=function(j){return ce.current.useContext(j)},mt.useDebugValue=function(){},mt.useDeferredValue=function(j){return ce.current.useDeferredValue(j)},mt.useEffect=function(j,ie){return ce.current.useEffect(j,ie)},mt.useId=function(){return ce.current.useId()},mt.useImperativeHandle=function(j,ie,Ne){return ce.current.useImperativeHandle(j,ie,Ne)},mt.useInsertionEffect=function(j,ie){return ce.current.useInsertionEffect(j,ie)},mt.useLayoutEffect=function(j,ie){return ce.current.useLayoutEffect(j,ie)},mt.useMemo=function(j,ie){return ce.current.useMemo(j,ie)},mt.useReducer=function(j,ie,Ne){return ce.current.useReducer(j,ie,Ne)},mt.useRef=function(j){return ce.current.useRef(j)},mt.useState=function(j){return ce.current.useState(j)},mt.useSyncExternalStore=function(j,ie,Ne){return ce.current.useSyncExternalStore(j,ie,Ne)},mt.useTransition=function(){return ce.current.useTransition()},mt.version="18.3.1",mt}var Om;function zh(){return Om||(Om=1,ad.exports=s_()),ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function a_(){if(zm)return Ja;zm=1;var r=zh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,f,x){var m,v={},y=null,w=null;x!==void 0&&(y=""+x),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(w=f.ref);for(m in f)s.call(f,m)&&!c.hasOwnProperty(m)&&(v[m]=f[m]);if(h&&h.defaultProps)for(m in f=h.defaultProps,f)v[m]===void 0&&(v[m]=f[m]);return{$$typeof:e,type:h,key:y,ref:w,props:v,_owner:l.current}}return Ja.Fragment=t,Ja.jsx=d,Ja.jsxs=d,Ja}var Bm;function o_(){return Bm||(Bm=1,sd.exports=a_()),sd.exports}var o=o_(),k=zh();const l_=u0(k);var Nl={},od={exports:{}},Dn={},ld={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function c_(){return Vm||(Vm=1,(function(r){function e(B,he){var Y=B.length;B.push(he);e:for(;0<Y;){var j=Y-1>>>1,ie=B[j];if(0<l(ie,he))B[j]=he,B[Y]=ie,Y=j;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var he=B[0],Y=B.pop();if(Y!==he){B[0]=Y;e:for(var j=0,ie=B.length,Ne=ie>>>1;j<Ne;){var G=2*(j+1)-1,fe=B[G],Se=G+1,xe=B[Se];if(0>l(fe,Y))Se<ie&&0>l(xe,fe)?(B[j]=xe,B[Se]=Y,j=Se):(B[j]=fe,B[G]=Y,j=G);else if(Se<ie&&0>l(xe,Y))B[j]=xe,B[Se]=Y,j=Se;else break e}}return he}function l(B,he){var Y=B.sortIndex-he.sortIndex;return Y!==0?Y:B.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var f=[],x=[],m=1,v=null,y=3,w=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(B){for(var he=t(x);he!==null;){if(he.callback===null)s(x);else if(he.startTime<=B)s(x),he.sortIndex=he.expirationTime,e(f,he);else break;he=t(x)}}function A(B){if(M=!1,C(B),!E)if(t(f)!==null)E=!0,oe(H);else{var he=t(x);he!==null&&ce(A,he.startTime-B)}}function H(B,he){E=!1,M&&(M=!1,g(O),O=-1),w=!0;var Y=y;try{for(C(he),v=t(f);v!==null&&(!(v.expirationTime>he)||B&&!z());){var j=v.callback;if(typeof j=="function"){v.callback=null,y=v.priorityLevel;var ie=j(v.expirationTime<=he);he=r.unstable_now(),typeof ie=="function"?v.callback=ie:v===t(f)&&s(f),C(he)}else s(f);v=t(f)}if(v!==null)var Ne=!0;else{var G=t(x);G!==null&&ce(A,G.startTime-he),Ne=!1}return Ne}finally{v=null,y=Y,w=!1}}var I=!1,P=null,O=-1,L=5,N=-1;function z(){return!(r.unstable_now()-N<L)}function Q(){if(P!==null){var B=r.unstable_now();N=B;var he=!0;try{he=P(!0,B)}finally{he?ee():(I=!1,P=null)}}else I=!1}var ee;if(typeof T=="function")ee=function(){T(Q)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,le=de.port2;de.port1.onmessage=Q,ee=function(){le.postMessage(null)}}else ee=function(){S(Q,0)};function oe(B){P=B,I||(I=!0,ee())}function ce(B,he){O=S(function(){B(r.unstable_now())},he)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){E||w||(E=!0,oe(H))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(B){switch(y){case 1:case 2:case 3:var he=3;break;default:he=y}var Y=y;y=he;try{return B()}finally{y=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,he){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=y;y=B;try{return he()}finally{y=Y}},r.unstable_scheduleCallback=function(B,he,Y){var j=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?j+Y:j):Y=j,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=Y+ie,B={id:m++,callback:he,priorityLevel:B,startTime:Y,expirationTime:ie,sortIndex:-1},Y>j?(B.sortIndex=Y,e(x,B),t(f)===null&&B===t(x)&&(M?(g(O),O=-1):M=!0,ce(A,Y-j))):(B.sortIndex=ie,e(f,B),E||w||(E=!0,oe(H))),B},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(B){var he=y;return function(){var Y=y;y=he;try{return B.apply(this,arguments)}finally{y=Y}}}})(cd)),cd}var Hm;function u_(){return Hm||(Hm=1,ld.exports=c_()),ld.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function d_(){if(Gm)return Dn;Gm=1;var r=zh(),e=u_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(l[n]=i,n=0;n<i.length;n++)s.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function y(n){return f.call(v,n)?!0:f.call(m,n)?!1:x.test(n)?v[n]=!0:(m[n]=!0,!1)}function w(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||w(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,u,p,_,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=_,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,T);S[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,T);S[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,T);S[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,i,a,u){var p=S.hasOwnProperty(i)?S[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,p,u)&&(a=null),u||p===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),I=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),z=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,j;function ie(n){if(j===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);j=i&&i[1]||""}return`
`+j+n}var Ne=!1;function G(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){u=re}n.call(i.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var p=re.stack.split(`
`),_=u.stack.split(`
`),b=p.length-1,F=_.length-1;1<=b&&0<=F&&p[b]!==_[F];)F--;for(;1<=b&&0<=F;b--,F--)if(p[b]!==_[F]){if(b!==1||F!==1)do if(b--,F--,0>F||p[b]!==_[F]){var V=`
`+p[b].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=b&&0<=F);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function fe(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=G(n.type,!1),n;case 11:return n=G(n.type.render,!1),n;case 1:return n=G(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case I:return"Portal";case L:return"Profiler";case O:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){u=""+b,_.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Nt(n){n._valueTracker||(n._valueTracker=Ze(n))}function ht(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Le(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function $(n,i){var a=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function _t(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Qe(n,i){i=i.checked,i!=null&&C(n,"checked",i,!1)}function it(n,i){Qe(n,i);var a=Ae(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rt(n,i,a){(i!=="number"||Dt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ke=Array.isArray;function U(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ne(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ke(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function ge(n,i){var a=Ae(i.value),u=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function tt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=tt(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var Oe=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,i){if(i){if(Oe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ot(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ue=null,me=null;function Ie(n){if(n=ja(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Vo(i),Re(n.stateNode,n.type,i))}}function De(n){ue?me?me.push(n):me=[n]:ue=n}function lt(){if(ue){var n=ue,i=me;if(me=ue=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ft(n,i){return n(i)}function Kt(){}var St=!1;function bn(n,i,a){if(St)return n(i,a);St=!0;try{return Ft(n,i,a)}finally{St=!1,(ue!==null||me!==null)&&(Kt(),lt())}}function _n(n,i){var a=n.stateNode;if(a===null)return null;var u=Vo(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var vs=!1;if(h)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){vs=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{vs=!1}function ki(n,i,a,u,p,_,b,F,V){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(ye){this.onError(ye)}}var Fi=!1,Hr=null,Gr=!1,ur=null,wo={onError:function(n){Fi=!0,Hr=n}};function _s(n,i,a,u,p,_,b,F,V){Fi=!1,Hr=null,ki.apply(wo,arguments)}function Mo(n,i,a,u,p,_,b,F,V){if(_s.apply(this,arguments),Fi){if(Fi){var re=Hr;Fi=!1,Hr=null}else throw Error(t(198));Gr||(Gr=!0,ur=re)}}function Ei(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Eo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function bo(n){if(Ei(n)!==n)throw Error(t(188))}function Nc(n){var i=n.alternate;if(!i){if(i=Ei(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return bo(p),n;if(_===u)return bo(p),i;_=_.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=_;else{for(var b=!1,F=p.child;F;){if(F===a){b=!0,a=p,u=_;break}if(F===u){b=!0,u=p,a=_;break}F=F.sibling}if(!b){for(F=_.child;F;){if(F===a){b=!0,a=_,u=p;break}if(F===u){b=!0,u=_,a=p;break}F=F.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function D(n){return n=Nc(n),n!==null?q(n):null}function q(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=q(n);if(i!==null)return i;n=n.sibling}return null}var se=e.unstable_scheduleCallback,ae=e.unstable_cancelCallback,K=e.unstable_shouldYield,Te=e.unstable_requestPaint,Ee=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,rt=e.unstable_UserBlockingPriority,at=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,vt=e.unstable_IdlePriority,At=null,xt=null;function un(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Et,qe=Math.log,si=Math.LN2;function Et(n){return n>>>=0,n===0?32:31-(qe(n)/si|0)|0}var dn=64,ai=4194304;function Zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bi(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,_=n.pingedLanes,b=a&268435455;if(b!==0){var F=b&~p;F!==0?u=Zt(F):(_&=b,_!==0&&(u=Zt(_)))}else b=a&~p,b!==0?u=Zt(b):_!==0&&(u=Zt(_));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,_=i&-i,p>=_||p===16&&(_&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-ct(i),p=1<<a,u|=n[a],i&=~p;return u}function Ut(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $n(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var b=31-ct(_),F=1<<b,V=p[b];V===-1?((F&a)===0||(F&u)!==0)&&(p[b]=Ut(F,i)):V<=i&&(n.expiredLanes|=F),_&=~F}}function ji(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yn(){var n=dn;return dn<<=1,(dn&4194240)===0&&(dn=64),n}function qn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Tn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ct(i),n[i]=a}function To(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-ct(a),_=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~_}}function Ac(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-ct(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var Pt=0;function xf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var gf,Cc,vf,_f,yf,Rc=!1,No=[],dr=null,hr=null,fr=null,wa=new Map,Ma=new Map,pr=[],Ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(n,i){switch(n){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":wa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(i.pointerId)}}function Ea(n,i,a,u,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:_,targetContainers:[p]},i!==null&&(i=ja(i),i!==null&&Cc(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Ag(n,i,a,u,p){switch(i){case"focusin":return dr=Ea(dr,n,i,a,u,p),!0;case"dragenter":return hr=Ea(hr,n,i,a,u,p),!0;case"mouseover":return fr=Ea(fr,n,i,a,u,p),!0;case"pointerover":var _=p.pointerId;return wa.set(_,Ea(wa.get(_)||null,n,i,a,u,p)),!0;case"gotpointercapture":return _=p.pointerId,Ma.set(_,Ea(Ma.get(_)||null,n,i,a,u,p)),!0}return!1}function wf(n){var i=Wr(n.target);if(i!==null){var a=Ei(i);if(a!==null){if(i=a.tag,i===13){if(i=Eo(a),i!==null){n.blockedOn=i,yf(n.priority,function(){vf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ao(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Dc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Ct=u,a.target.dispatchEvent(u),Ct=null}else return i=ja(a),i!==null&&Cc(i),n.blockedOn=a,!1;i.shift()}return!0}function Mf(n,i,a){Ao(n)&&a.delete(i)}function Cg(){Rc=!1,dr!==null&&Ao(dr)&&(dr=null),hr!==null&&Ao(hr)&&(hr=null),fr!==null&&Ao(fr)&&(fr=null),wa.forEach(Mf),Ma.forEach(Mf)}function ba(n,i){n.blockedOn===i&&(n.blockedOn=null,Rc||(Rc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cg)))}function Ta(n){function i(p){return ba(p,n)}if(0<No.length){ba(No[0],n);for(var a=1;a<No.length;a++){var u=No[a];u.blockedOn===n&&(u.blockedOn=null)}}for(dr!==null&&ba(dr,n),hr!==null&&ba(hr,n),fr!==null&&ba(fr,n),wa.forEach(i),Ma.forEach(i),a=0;a<pr.length;a++)u=pr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)wf(a),a.blockedOn===null&&pr.shift()}var ys=A.ReactCurrentBatchConfig,Co=!0;function Rg(n,i,a,u){var p=Pt,_=ys.transition;ys.transition=null;try{Pt=1,Pc(n,i,a,u)}finally{Pt=p,ys.transition=_}}function Pg(n,i,a,u){var p=Pt,_=ys.transition;ys.transition=null;try{Pt=4,Pc(n,i,a,u)}finally{Pt=p,ys.transition=_}}function Pc(n,i,a,u){if(Co){var p=Dc(n,i,a,u);if(p===null)Yc(n,i,u,Ro,a),Sf(n,u);else if(Ag(p,n,i,a,u))u.stopPropagation();else if(Sf(n,u),i&4&&-1<Ng.indexOf(n)){for(;p!==null;){var _=ja(p);if(_!==null&&gf(_),_=Dc(n,i,a,u),_===null&&Yc(n,i,u,Ro,a),_===p)break;p=_}p!==null&&u.stopPropagation()}else Yc(n,i,u,null,a)}}var Ro=null;function Dc(n,i,a,u){if(Ro=null,n=X(u),n=Wr(n),n!==null)if(i=Ei(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Eo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ro=n,null}function Ef(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case Ve:return 1;case rt:return 4;case at:case Xe:return 16;case vt:return 536870912;default:return 16}default:return 16}}var mr=null,Lc=null,Po=null;function bf(){if(Po)return Po;var n,i=Lc,a=i.length,u,p="value"in mr?mr.value:mr.textContent,_=p.length;for(n=0;n<a&&i[n]===p[n];n++);var b=a-n;for(u=1;u<=b&&i[a-u]===p[_-u];u++);return Po=p.slice(n,1<u?1-u:void 0)}function Do(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Lo(){return!0}function Tf(){return!1}function jn(n){function i(a,u,p,_,b){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=_,this.target=b,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(_):_[F]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Lo:Tf,this.isPropagationStopped=Tf,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),i}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=jn(Ss),Na=Y({},Ss,{view:0,detail:0}),Dg=jn(Na),Uc,kc,Aa,Io=Y({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(Uc=n.screenX-Aa.screenX,kc=n.screenY-Aa.screenY):kc=Uc=0,Aa=n),Uc)},movementY:function(n){return"movementY"in n?n.movementY:kc}}),Nf=jn(Io),Lg=Y({},Io,{dataTransfer:0}),Ig=jn(Lg),Ug=Y({},Na,{relatedTarget:0}),Fc=jn(Ug),kg=Y({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Fg=jn(kg),jg=Y({},Ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Og=jn(jg),zg=Y({},Ss,{data:0}),Af=jn(zg),Bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Hg[n])?!!i[n]:!1}function jc(){return Gg}var Wg=Y({},Na,{key:function(n){if(n.key){var i=Bg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Do(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Vg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(n){return n.type==="keypress"?Do(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Do(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xg=jn(Wg),$g=Y({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=jn($g),qg=Y({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Yg=jn(qg),Kg=Y({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=jn(Kg),Qg=Y({},Io,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Jg=jn(Qg),ev=[9,13,27,32],Oc=h&&"CompositionEvent"in window,Ca=null;h&&"documentMode"in document&&(Ca=document.documentMode);var tv=h&&"TextEvent"in window&&!Ca,Rf=h&&(!Oc||Ca&&8<Ca&&11>=Ca),Pf=" ",Df=!1;function Lf(n,i){switch(n){case"keyup":return ev.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function nv(n,i){switch(n){case"compositionend":return If(i);case"keypress":return i.which!==32?null:(Df=!0,Pf);case"textInput":return n=i.data,n===Pf&&Df?null:n;default:return null}}function iv(n,i){if(ws)return n==="compositionend"||!Oc&&Lf(n,i)?(n=bf(),Po=Lc=mr=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rf&&i.locale!=="ko"?null:i.data;default:return null}}var rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!rv[n.type]:i==="textarea"}function kf(n,i,a,u){De(u),i=Oo(i,"onChange"),0<i.length&&(a=new Ic("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Ra=null,Pa=null;function sv(n){ep(n,0)}function Uo(n){var i=Ns(n);if(ht(i))return n}function av(n,i){if(n==="change")return i}var Ff=!1;if(h){var zc;if(h){var Bc="oninput"in document;if(!Bc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),Bc=typeof jf.oninput=="function"}zc=Bc}else zc=!1;Ff=zc&&(!document.documentMode||9<document.documentMode)}function Of(){Ra&&(Ra.detachEvent("onpropertychange",zf),Pa=Ra=null)}function zf(n){if(n.propertyName==="value"&&Uo(Pa)){var i=[];kf(i,Pa,n,X(n)),bn(sv,i)}}function ov(n,i,a){n==="focusin"?(Of(),Ra=i,Pa=a,Ra.attachEvent("onpropertychange",zf)):n==="focusout"&&Of()}function lv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(Pa)}function cv(n,i){if(n==="click")return Uo(i)}function uv(n,i){if(n==="input"||n==="change")return Uo(i)}function dv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:dv;function Da(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!f.call(i,p)||!oi(n[p],i[p]))return!1}return!0}function Bf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vf(n,i){var a=Bf(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bf(a)}}function Hf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Hf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Gf(){for(var n=window,i=Dt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Dt(n.document)}return i}function Vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function hv(n){var i=Gf(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Hf(a.ownerDocument.documentElement,a)){if(u!==null&&Vc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,_=Math.min(u.start,p);u=u.end===void 0?_:Math.min(u.end,p),!n.extend&&_>u&&(p=u,u=_,_=p),p=Vf(a,_);var b=Vf(a,u);p&&b&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),_>u?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fv=h&&"documentMode"in document&&11>=document.documentMode,Ms=null,Hc=null,La=null,Gc=!1;function Wf(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gc||Ms==null||Ms!==Dt(u)||(u=Ms,"selectionStart"in u&&Vc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),La&&Da(La,u)||(La=u,u=Oo(Hc,"onSelect"),0<u.length&&(i=new Ic("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ms)))}function ko(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Es={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Wc={},Xf={};h&&(Xf=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Fo(n){if(Wc[n])return Wc[n];if(!Es[n])return n;var i=Es[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Xf)return Wc[n]=i[a];return n}var $f=Fo("animationend"),qf=Fo("animationiteration"),Yf=Fo("animationstart"),Kf=Fo("transitionend"),Zf=new Map,Qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(n,i){Zf.set(n,i),c(i,[n])}for(var Xc=0;Xc<Qf.length;Xc++){var $c=Qf[Xc],pv=$c.toLowerCase(),mv=$c[0].toUpperCase()+$c.slice(1);xr(pv,"on"+mv)}xr($f,"onAnimationEnd"),xr(qf,"onAnimationIteration"),xr(Yf,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr(Kf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Jf(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Mo(u,i,void 0,n),n.currentTarget=null}function ep(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var _=void 0;if(i)for(var b=u.length-1;0<=b;b--){var F=u[b],V=F.instance,re=F.currentTarget;if(F=F.listener,V!==_&&p.isPropagationStopped())break e;Jf(p,F,re),_=V}else for(b=0;b<u.length;b++){if(F=u[b],V=F.instance,re=F.currentTarget,F=F.listener,V!==_&&p.isPropagationStopped())break e;Jf(p,F,re),_=V}}}if(Gr)throw n=ur,Gr=!1,ur=null,n}function jt(n,i){var a=i[tu];a===void 0&&(a=i[tu]=new Set);var u=n+"__bubble";a.has(u)||(tp(i,n,2,!1),a.add(u))}function qc(n,i,a){var u=0;i&&(u|=4),tp(a,n,u,i)}var jo="_reactListening"+Math.random().toString(36).slice(2);function Ua(n){if(!n[jo]){n[jo]=!0,s.forEach(function(a){a!=="selectionchange"&&(xv.has(a)||qc(a,!1,n),qc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[jo]||(i[jo]=!0,qc("selectionchange",!1,i))}}function tp(n,i,a,u){switch(Ef(i)){case 1:var p=Rg;break;case 4:p=Pg;break;default:p=Pc}a=p.bind(null,i,a,n),p=void 0,!vs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Yc(n,i,a,u,p){var _=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var F=u.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(b===4)for(b=u.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;b=b.return}for(;F!==null;){if(b=Wr(F),b===null)return;if(V=b.tag,V===5||V===6){u=_=b;continue e}F=F.parentNode}}u=u.return}bn(function(){var re=_,ye=X(a),we=[];e:{var ve=Zf.get(n);if(ve!==void 0){var Ue=Ic,ze=n;switch(n){case"keypress":if(Do(a)===0)break e;case"keydown":case"keyup":Ue=Xg;break;case"focusin":ze="focus",Ue=Fc;break;case"focusout":ze="blur",Ue=Fc;break;case"beforeblur":case"afterblur":Ue=Fc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Yg;break;case $f:case qf:case Yf:Ue=Fg;break;case Kf:Ue=Zg;break;case"scroll":Ue=Dg;break;case"wheel":Ue=Jg;break;case"copy":case"cut":case"paste":Ue=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Cf}var He=(i&4)!==0,$t=!He&&n==="scroll",J=He?ve!==null?ve+"Capture":null:ve;He=[];for(var W=re,te;W!==null;){te=W;var be=te.stateNode;if(te.tag===5&&be!==null&&(te=be,J!==null&&(be=_n(W,J),be!=null&&He.push(ka(W,be,te)))),$t)break;W=W.return}0<He.length&&(ve=new Ue(ve,ze,null,a,ye),we.push({event:ve,listeners:He}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&a!==Ct&&(ze=a.relatedTarget||a.fromElement)&&(Wr(ze)||ze[Oi]))break e;if((Ue||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(ze=a.relatedTarget||a.toElement,Ue=re,ze=ze?Wr(ze):null,ze!==null&&($t=Ei(ze),ze!==$t||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ue=null,ze=re),Ue!==ze)){if(He=Nf,be="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(He=Cf,be="onPointerLeave",J="onPointerEnter",W="pointer"),$t=Ue==null?ve:Ns(Ue),te=ze==null?ve:Ns(ze),ve=new He(be,W+"leave",Ue,a,ye),ve.target=$t,ve.relatedTarget=te,be=null,Wr(ye)===re&&(He=new He(J,W+"enter",ze,a,ye),He.target=te,He.relatedTarget=$t,be=He),$t=be,Ue&&ze)t:{for(He=Ue,J=ze,W=0,te=He;te;te=bs(te))W++;for(te=0,be=J;be;be=bs(be))te++;for(;0<W-te;)He=bs(He),W--;for(;0<te-W;)J=bs(J),te--;for(;W--;){if(He===J||J!==null&&He===J.alternate)break t;He=bs(He),J=bs(J)}He=null}else He=null;Ue!==null&&np(we,ve,Ue,He,!1),ze!==null&&$t!==null&&np(we,$t,ze,He,!0)}}e:{if(ve=re?Ns(re):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var $e=av;else if(Uf(ve))if(Ff)$e=uv;else{$e=lv;var Je=ov}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&($e=cv);if($e&&($e=$e(n,re))){kf(we,$e,a,ye);break e}Je&&Je(n,ve,re),n==="focusout"&&(Je=ve._wrapperState)&&Je.controlled&&ve.type==="number"&&Rt(ve,"number",ve.value)}switch(Je=re?Ns(re):window,n){case"focusin":(Uf(Je)||Je.contentEditable==="true")&&(Ms=Je,Hc=re,La=null);break;case"focusout":La=Hc=Ms=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,Wf(we,a,ye);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":Wf(we,a,ye)}var et;if(Oc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ws?Lf(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Rf&&a.locale!=="ko"&&(ws||st!=="onCompositionStart"?st==="onCompositionEnd"&&ws&&(et=bf()):(mr=ye,Lc="value"in mr?mr.value:mr.textContent,ws=!0)),Je=Oo(re,st),0<Je.length&&(st=new Af(st,n,null,a,ye),we.push({event:st,listeners:Je}),et?st.data=et:(et=If(a),et!==null&&(st.data=et)))),(et=tv?nv(n,a):iv(n,a))&&(re=Oo(re,"onBeforeInput"),0<re.length&&(ye=new Af("onBeforeInput","beforeinput",null,a,ye),we.push({event:ye,listeners:re}),ye.data=et))}ep(we,i)})}function ka(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Oo(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=_n(n,a),_!=null&&u.unshift(ka(n,_,p)),_=_n(n,i),_!=null&&u.push(ka(n,_,p))),n=n.return}return u}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function np(n,i,a,u,p){for(var _=i._reactName,b=[];a!==null&&a!==u;){var F=a,V=F.alternate,re=F.stateNode;if(V!==null&&V===u)break;F.tag===5&&re!==null&&(F=re,p?(V=_n(a,_),V!=null&&b.unshift(ka(a,V,F))):p||(V=_n(a,_),V!=null&&b.push(ka(a,V,F)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var gv=/\r\n?/g,vv=/\u0000|\uFFFD/g;function ip(n){return(typeof n=="string"?n:""+n).replace(gv,`
`).replace(vv,"")}function zo(n,i,a){if(i=ip(i),ip(n)!==i&&a)throw Error(t(425))}function Bo(){}var Kc=null,Zc=null;function Qc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(n){return rp.resolve(null).then(n).catch(Sv)}:Jc;function Sv(n){setTimeout(function(){throw n})}function eu(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Ta(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Ta(i)}function gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function sp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Ts,Fa="__reactProps$"+Ts,Oi="__reactContainer$"+Ts,tu="__reactEvents$"+Ts,wv="__reactListeners$"+Ts,Mv="__reactHandles$"+Ts;function Wr(n){var i=n[Ti];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Oi]||a[Ti]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=sp(n);n!==null;){if(a=n[Ti])return a;n=sp(n)}return i}n=a,a=n.parentNode}return null}function ja(n){return n=n[Ti]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vo(n){return n[Fa]||null}var nu=[],As=-1;function vr(n){return{current:n}}function Ot(n){0>As||(n.current=nu[As],nu[As]=null,As--)}function kt(n,i){As++,nu[As]=n.current,n.current=i}var _r={},hn=vr(_r),Nn=vr(!1),Xr=_r;function Cs(n,i){var a=n.type.contextTypes;if(!a)return _r;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=i[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function An(n){return n=n.childContextTypes,n!=null}function Ho(){Ot(Nn),Ot(hn)}function ap(n,i,a){if(hn.current!==_r)throw Error(t(168));kt(hn,i),kt(Nn,a)}function op(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,xe(n)||"Unknown",p));return Y({},a,u)}function Go(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Xr=hn.current,kt(hn,n),kt(Nn,Nn.current),!0}function lp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=op(n,i,Xr),u.__reactInternalMemoizedMergedChildContext=n,Ot(Nn),Ot(hn),kt(hn,n)):Ot(Nn),kt(Nn,a)}var zi=null,Wo=!1,iu=!1;function cp(n){zi===null?zi=[n]:zi.push(n)}function Ev(n){Wo=!0,cp(n)}function yr(){if(!iu&&zi!==null){iu=!0;var n=0,i=Pt;try{var a=zi;for(Pt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}zi=null,Wo=!1}catch(p){throw zi!==null&&(zi=zi.slice(n+1)),se(Ve,yr),p}finally{Pt=i,iu=!1}}return null}var Rs=[],Ps=0,Xo=null,$o=0,Yn=[],Kn=0,$r=null,Bi=1,Vi="";function qr(n,i){Rs[Ps++]=$o,Rs[Ps++]=Xo,Xo=n,$o=i}function up(n,i,a){Yn[Kn++]=Bi,Yn[Kn++]=Vi,Yn[Kn++]=$r,$r=n;var u=Bi;n=Vi;var p=32-ct(u)-1;u&=~(1<<p),a+=1;var _=32-ct(i)+p;if(30<_){var b=p-p%5;_=(u&(1<<b)-1).toString(32),u>>=b,p-=b,Bi=1<<32-ct(i)+p|a<<p|u,Vi=_+n}else Bi=1<<_|a<<p|u,Vi=n}function ru(n){n.return!==null&&(qr(n,1),up(n,1,0))}function su(n){for(;n===Xo;)Xo=Rs[--Ps],Rs[Ps]=null,$o=Rs[--Ps],Rs[Ps]=null;for(;n===$r;)$r=Yn[--Kn],Yn[Kn]=null,Vi=Yn[--Kn],Yn[Kn]=null,Bi=Yn[--Kn],Yn[Kn]=null}var On=null,zn=null,zt=!1,li=null;function dp(n,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function hp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,zn=gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=$r!==null?{id:Bi,overflow:Vi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,On=n,zn=null,!0):!1;default:return!1}}function au(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ou(n){if(zt){var i=zn;if(i){var a=i;if(!hp(n,i)){if(au(n))throw Error(t(418));i=gr(a.nextSibling);var u=On;i&&hp(n,i)?dp(u,a):(n.flags=n.flags&-4097|2,zt=!1,On=n)}}else{if(au(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,On=n}}}function fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function qo(n){if(n!==On)return!1;if(!zt)return fp(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Qc(n.type,n.memoizedProps)),i&&(i=zn)){if(au(n))throw pp(),Error(t(418));for(;i;)dp(n,i),i=gr(i.nextSibling)}if(fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){zn=gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=On?gr(n.stateNode.nextSibling):null;return!0}function pp(){for(var n=zn;n;)n=gr(n.nextSibling)}function Ds(){zn=On=null,zt=!1}function lu(n){li===null?li=[n]:li.push(n)}var bv=A.ReactCurrentBatchConfig;function Oa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,_=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===_?i.ref:(i=function(b){var F=p.refs;b===null?delete F[_]:F[_]=b},i._stringRef=_,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Yo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function mp(n){var i=n._init;return i(n._payload)}function xp(n){function i(J,W){if(n){var te=J.deletions;te===null?(J.deletions=[W],J.flags|=16):te.push(W)}}function a(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function u(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function p(J,W){return J=Ar(J,W),J.index=0,J.sibling=null,J}function _(J,W,te){return J.index=te,n?(te=J.alternate,te!==null?(te=te.index,te<W?(J.flags|=2,W):te):(J.flags|=2,W)):(J.flags|=1048576,W)}function b(J){return n&&J.alternate===null&&(J.flags|=2),J}function F(J,W,te,be){return W===null||W.tag!==6?(W=Ju(te,J.mode,be),W.return=J,W):(W=p(W,te),W.return=J,W)}function V(J,W,te,be){var $e=te.type;return $e===P?ye(J,W,te.props.children,be,te.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&mp($e)===W.type)?(be=p(W,te.props),be.ref=Oa(J,W,te),be.return=J,be):(be=_l(te.type,te.key,te.props,null,J.mode,be),be.ref=Oa(J,W,te),be.return=J,be)}function re(J,W,te,be){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=ed(te,J.mode,be),W.return=J,W):(W=p(W,te.children||[]),W.return=J,W)}function ye(J,W,te,be,$e){return W===null||W.tag!==7?(W=ns(te,J.mode,be,$e),W.return=J,W):(W=p(W,te),W.return=J,W)}function we(J,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Ju(""+W,J.mode,te),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case H:return te=_l(W.type,W.key,W.props,null,J.mode,te),te.ref=Oa(J,null,W),te.return=J,te;case I:return W=ed(W,J.mode,te),W.return=J,W;case oe:var be=W._init;return we(J,be(W._payload),te)}if(Ke(W)||he(W))return W=ns(W,J.mode,te,null),W.return=J,W;Yo(J,W)}return null}function ve(J,W,te,be){var $e=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return $e!==null?null:F(J,W,""+te,be);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case H:return te.key===$e?V(J,W,te,be):null;case I:return te.key===$e?re(J,W,te,be):null;case oe:return $e=te._init,ve(J,W,$e(te._payload),be)}if(Ke(te)||he(te))return $e!==null?null:ye(J,W,te,be,null);Yo(J,te)}return null}function Ue(J,W,te,be,$e){if(typeof be=="string"&&be!==""||typeof be=="number")return J=J.get(te)||null,F(W,J,""+be,$e);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case H:return J=J.get(be.key===null?te:be.key)||null,V(W,J,be,$e);case I:return J=J.get(be.key===null?te:be.key)||null,re(W,J,be,$e);case oe:var Je=be._init;return Ue(J,W,te,Je(be._payload),$e)}if(Ke(be)||he(be))return J=J.get(te)||null,ye(W,J,be,$e,null);Yo(W,be)}return null}function ze(J,W,te,be){for(var $e=null,Je=null,et=W,st=W=0,sn=null;et!==null&&st<te.length;st++){et.index>st?(sn=et,et=null):sn=et.sibling;var bt=ve(J,et,te[st],be);if(bt===null){et===null&&(et=sn);break}n&&et&&bt.alternate===null&&i(J,et),W=_(bt,W,st),Je===null?$e=bt:Je.sibling=bt,Je=bt,et=sn}if(st===te.length)return a(J,et),zt&&qr(J,st),$e;if(et===null){for(;st<te.length;st++)et=we(J,te[st],be),et!==null&&(W=_(et,W,st),Je===null?$e=et:Je.sibling=et,Je=et);return zt&&qr(J,st),$e}for(et=u(J,et);st<te.length;st++)sn=Ue(et,J,st,te[st],be),sn!==null&&(n&&sn.alternate!==null&&et.delete(sn.key===null?st:sn.key),W=_(sn,W,st),Je===null?$e=sn:Je.sibling=sn,Je=sn);return n&&et.forEach(function(Cr){return i(J,Cr)}),zt&&qr(J,st),$e}function He(J,W,te,be){var $e=he(te);if(typeof $e!="function")throw Error(t(150));if(te=$e.call(te),te==null)throw Error(t(151));for(var Je=$e=null,et=W,st=W=0,sn=null,bt=te.next();et!==null&&!bt.done;st++,bt=te.next()){et.index>st?(sn=et,et=null):sn=et.sibling;var Cr=ve(J,et,bt.value,be);if(Cr===null){et===null&&(et=sn);break}n&&et&&Cr.alternate===null&&i(J,et),W=_(Cr,W,st),Je===null?$e=Cr:Je.sibling=Cr,Je=Cr,et=sn}if(bt.done)return a(J,et),zt&&qr(J,st),$e;if(et===null){for(;!bt.done;st++,bt=te.next())bt=we(J,bt.value,be),bt!==null&&(W=_(bt,W,st),Je===null?$e=bt:Je.sibling=bt,Je=bt);return zt&&qr(J,st),$e}for(et=u(J,et);!bt.done;st++,bt=te.next())bt=Ue(et,J,st,bt.value,be),bt!==null&&(n&&bt.alternate!==null&&et.delete(bt.key===null?st:bt.key),W=_(bt,W,st),Je===null?$e=bt:Je.sibling=bt,Je=bt);return n&&et.forEach(function(r_){return i(J,r_)}),zt&&qr(J,st),$e}function $t(J,W,te,be){if(typeof te=="object"&&te!==null&&te.type===P&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case H:e:{for(var $e=te.key,Je=W;Je!==null;){if(Je.key===$e){if($e=te.type,$e===P){if(Je.tag===7){a(J,Je.sibling),W=p(Je,te.props.children),W.return=J,J=W;break e}}else if(Je.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&mp($e)===Je.type){a(J,Je.sibling),W=p(Je,te.props),W.ref=Oa(J,Je,te),W.return=J,J=W;break e}a(J,Je);break}else i(J,Je);Je=Je.sibling}te.type===P?(W=ns(te.props.children,J.mode,be,te.key),W.return=J,J=W):(be=_l(te.type,te.key,te.props,null,J.mode,be),be.ref=Oa(J,W,te),be.return=J,J=be)}return b(J);case I:e:{for(Je=te.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(J,W.sibling),W=p(W,te.children||[]),W.return=J,J=W;break e}else{a(J,W);break}else i(J,W);W=W.sibling}W=ed(te,J.mode,be),W.return=J,J=W}return b(J);case oe:return Je=te._init,$t(J,W,Je(te._payload),be)}if(Ke(te))return ze(J,W,te,be);if(he(te))return He(J,W,te,be);Yo(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(a(J,W.sibling),W=p(W,te),W.return=J,J=W):(a(J,W),W=Ju(te,J.mode,be),W.return=J,J=W),b(J)):a(J,W)}return $t}var Ls=xp(!0),gp=xp(!1),Ko=vr(null),Zo=null,Is=null,cu=null;function uu(){cu=Is=Zo=null}function du(n){var i=Ko.current;Ot(Ko),n._currentValue=i}function hu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Us(n,i){Zo=n,cu=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Cn=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(cu!==n)if(n={context:n,memoizedValue:i,next:null},Is===null){if(Zo===null)throw Error(t(308));Is=n,Zo.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return i}var Yr=null;function fu(n){Yr===null?Yr=[n]:Yr.push(n)}function vp(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,fu(i)):(a.next=p.next,p.next=a),i.interleaved=a,Hi(n,u)}function Hi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Sr=!1;function pu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _p(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function wr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,Hi(n,a)}return p=u.interleaved,p===null?(i.next=i,fu(u)):(i.next=p.next,p.next=i),u.interleaved=i,Hi(n,a)}function Qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ac(n,a)}}function yp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=b:_=_.next=b,a=a.next}while(a!==null);_===null?p=_=i:_=_.next=i}else p=_=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Jo(n,i,a,u){var p=n.updateQueue;Sr=!1;var _=p.firstBaseUpdate,b=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var V=F,re=V.next;V.next=null,b===null?_=re:b.next=re,b=V;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==b&&(F===null?ye.firstBaseUpdate=re:F.next=re,ye.lastBaseUpdate=V))}if(_!==null){var we=p.baseState;b=0,ye=re=V=null,F=_;do{var ve=F.lane,Ue=F.eventTime;if((u&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var ze=n,He=F;switch(ve=i,Ue=a,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){we=ze.call(Ue,we,ve);break e}we=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ve=typeof ze=="function"?ze.call(Ue,we,ve):ze,ve==null)break e;we=Y({},we,ve);break e;case 2:Sr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ve=p.effects,ve===null?p.effects=[F]:ve.push(F))}else Ue={eventTime:Ue,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(re=ye=Ue,V=we):ye=ye.next=Ue,b|=ve;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(ye===null&&(V=we),p.baseState=V,p.firstBaseUpdate=re,p.lastBaseUpdate=ye,i=p.shared.interleaved,i!==null){p=i;do b|=p.lane,p=p.next;while(p!==i)}else _===null&&(p.shared.lanes=0);Qr|=b,n.lanes=b,n.memoizedState=we}}function Sp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var za={},Ni=vr(za),Ba=vr(za),Va=vr(za);function Kr(n){if(n===za)throw Error(t(174));return n}function mu(n,i){switch(kt(Va,i),kt(Ba,n),kt(Ni,za),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}Ot(Ni),kt(Ni,i)}function ks(){Ot(Ni),Ot(Ba),Ot(Va)}function wp(n){Kr(Va.current);var i=Kr(Ni.current),a=Ge(i,n.type);i!==a&&(kt(Ba,n),kt(Ni,a))}function xu(n){Ba.current===n&&(Ot(Ni),Ot(Ba))}var Ht=vr(0);function el(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gu=[];function vu(){for(var n=0;n<gu.length;n++)gu[n]._workInProgressVersionPrimary=null;gu.length=0}var tl=A.ReactCurrentDispatcher,_u=A.ReactCurrentBatchConfig,Zr=0,Gt=null,Qt=null,nn=null,nl=!1,Ha=!1,Ga=0,Tv=0;function fn(){throw Error(t(321))}function yu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!oi(n[a],i[a]))return!1;return!0}function Su(n,i,a,u,p,_){if(Zr=_,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tl.current=n===null||n.memoizedState===null?Rv:Pv,n=a(u,p),Ha){_=0;do{if(Ha=!1,Ga=0,25<=_)throw Error(t(301));_+=1,nn=Qt=null,i.updateQueue=null,tl.current=Dv,n=a(u,p)}while(Ha)}if(tl.current=sl,i=Qt!==null&&Qt.next!==null,Zr=0,nn=Qt=Gt=null,nl=!1,i)throw Error(t(300));return n}function wu(){var n=Ga!==0;return Ga=0,n}function Ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Gt.memoizedState=nn=n:nn=nn.next=n,nn}function Qn(){if(Qt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=nn===null?Gt.memoizedState:nn.next;if(i!==null)nn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},nn===null?Gt.memoizedState=nn=n:nn=nn.next=n}return nn}function Wa(n,i){return typeof i=="function"?i(n):i}function Mu(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Qt,p=u.baseQueue,_=a.pending;if(_!==null){if(p!==null){var b=p.next;p.next=_.next,_.next=b}u.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,u=u.baseState;var F=b=null,V=null,re=_;do{var ye=re.lane;if((Zr&ye)===ye)V!==null&&(V=V.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var we={lane:ye,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};V===null?(F=V=we,b=u):V=V.next=we,Gt.lanes|=ye,Qr|=ye}re=re.next}while(re!==null&&re!==_);V===null?b=u:V.next=F,oi(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=V,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do _=p.lane,Gt.lanes|=_,Qr|=_,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Eu(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,_=i.memoizedState;if(p!==null){a.pending=null;var b=p=p.next;do _=n(_,b.action),b=b.next;while(b!==p);oi(_,i.memoizedState)||(Cn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),a.lastRenderedState=_}return[_,u]}function Mp(){}function Ep(n,i){var a=Gt,u=Qn(),p=i(),_=!oi(u.memoizedState,p);if(_&&(u.memoizedState=p,Cn=!0),u=u.queue,bu(Np.bind(null,a,u,n),[n]),u.getSnapshot!==i||_||nn!==null&&nn.memoizedState.tag&1){if(a.flags|=2048,Xa(9,Tp.bind(null,a,u,p,i),void 0,null),rn===null)throw Error(t(349));(Zr&30)!==0||bp(a,i,p)}return p}function bp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Tp(n,i,a,u){i.value=a,i.getSnapshot=u,Ap(i)&&Cp(n)}function Np(n,i,a){return a(function(){Ap(i)&&Cp(n)})}function Ap(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!oi(n,a)}catch{return!0}}function Cp(n){var i=Hi(n,1);i!==null&&hi(i,n,1,-1)}function Rp(n){var i=Ai();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},i.queue=n,n=n.dispatch=Cv.bind(null,Gt,n),[i.memoizedState,n]}function Xa(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Pp(){return Qn().memoizedState}function il(n,i,a,u){var p=Ai();Gt.flags|=n,p.memoizedState=Xa(1|i,a,void 0,u===void 0?null:u)}function rl(n,i,a,u){var p=Qn();u=u===void 0?null:u;var _=void 0;if(Qt!==null){var b=Qt.memoizedState;if(_=b.destroy,u!==null&&yu(u,b.deps)){p.memoizedState=Xa(i,a,_,u);return}}Gt.flags|=n,p.memoizedState=Xa(1|i,a,_,u)}function Dp(n,i){return il(8390656,8,n,i)}function bu(n,i){return rl(2048,8,n,i)}function Lp(n,i){return rl(4,2,n,i)}function Ip(n,i){return rl(4,4,n,i)}function Up(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function kp(n,i,a){return a=a!=null?a.concat([n]):null,rl(4,4,Up.bind(null,i,n),a)}function Tu(){}function Fp(n,i){var a=Qn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&yu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function jp(n,i){var a=Qn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&yu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Op(n,i,a){return(Zr&21)===0?(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=a):(oi(a,i)||(a=yn(),Gt.lanes|=a,Qr|=a,n.baseState=!0),i)}function Nv(n,i){var a=Pt;Pt=a!==0&&4>a?a:4,n(!0);var u=_u.transition;_u.transition={};try{n(!1),i()}finally{Pt=a,_u.transition=u}}function zp(){return Qn().memoizedState}function Av(n,i,a){var u=Tr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Bp(n))Vp(i,a);else if(a=vp(n,i,a,u),a!==null){var p=wn();hi(a,n,u,p),Hp(a,i,u)}}function Cv(n,i,a){var u=Tr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bp(n))Vp(i,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var b=i.lastRenderedState,F=_(b,a);if(p.hasEagerState=!0,p.eagerState=F,oi(F,b)){var V=i.interleaved;V===null?(p.next=p,fu(i)):(p.next=V.next,V.next=p),i.interleaved=p;return}}catch{}finally{}a=vp(n,i,p,u),a!==null&&(p=wn(),hi(a,n,u,p),Hp(a,i,u))}}function Bp(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function Vp(n,i){Ha=nl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Hp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ac(n,a)}}var sl={readContext:Zn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},Rv={readContext:Zn,useCallback:function(n,i){return Ai().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:Dp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,il(4194308,4,Up.bind(null,i,n),a)},useLayoutEffect:function(n,i){return il(4194308,4,n,i)},useInsertionEffect:function(n,i){return il(4,2,n,i)},useMemo:function(n,i){var a=Ai();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ai();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Av.bind(null,Gt,n),[u.memoizedState,n]},useRef:function(n){var i=Ai();return n={current:n},i.memoizedState=n},useState:Rp,useDebugValue:Tu,useDeferredValue:function(n){return Ai().memoizedState=n},useTransition:function(){var n=Rp(!1),i=n[0];return n=Nv.bind(null,n[1]),Ai().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Gt,p=Ai();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),rn===null)throw Error(t(349));(Zr&30)!==0||bp(u,i,a)}p.memoizedState=a;var _={value:a,getSnapshot:i};return p.queue=_,Dp(Np.bind(null,u,_,n),[n]),u.flags|=2048,Xa(9,Tp.bind(null,u,_,a,i),void 0,null),a},useId:function(){var n=Ai(),i=rn.identifierPrefix;if(zt){var a=Vi,u=Bi;a=(u&~(1<<32-ct(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Tv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Pv={readContext:Zn,useCallback:Fp,useContext:Zn,useEffect:bu,useImperativeHandle:kp,useInsertionEffect:Lp,useLayoutEffect:Ip,useMemo:jp,useReducer:Mu,useRef:Pp,useState:function(){return Mu(Wa)},useDebugValue:Tu,useDeferredValue:function(n){var i=Qn();return Op(i,Qt.memoizedState,n)},useTransition:function(){var n=Mu(Wa)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Mp,useSyncExternalStore:Ep,useId:zp,unstable_isNewReconciler:!1},Dv={readContext:Zn,useCallback:Fp,useContext:Zn,useEffect:bu,useImperativeHandle:kp,useInsertionEffect:Lp,useLayoutEffect:Ip,useMemo:jp,useReducer:Eu,useRef:Pp,useState:function(){return Eu(Wa)},useDebugValue:Tu,useDeferredValue:function(n){var i=Qn();return Qt===null?i.memoizedState=n:Op(i,Qt.memoizedState,n)},useTransition:function(){var n=Eu(Wa)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Mp,useSyncExternalStore:Ep,useId:zp,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=Y({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Nu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:Y({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var al={isMounted:function(n){return(n=n._reactInternals)?Ei(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=wn(),p=Tr(n),_=Gi(u,p);_.payload=i,a!=null&&(_.callback=a),i=wr(n,_,p),i!==null&&(hi(i,n,p,u),Qo(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=wn(),p=Tr(n),_=Gi(u,p);_.tag=1,_.payload=i,a!=null&&(_.callback=a),i=wr(n,_,p),i!==null&&(hi(i,n,p,u),Qo(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),u=Tr(n),p=Gi(a,u);p.tag=2,i!=null&&(p.callback=i),i=wr(n,p,u),i!==null&&(hi(i,n,u,a),Qo(i,n,u))}};function Gp(n,i,a,u,p,_,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,b):i.prototype&&i.prototype.isPureReactComponent?!Da(a,u)||!Da(p,_):!0}function Wp(n,i,a){var u=!1,p=_r,_=i.contextType;return typeof _=="object"&&_!==null?_=Zn(_):(p=An(i)?Xr:hn.current,u=i.contextTypes,_=(u=u!=null)?Cs(n,p):_r),i=new i(a,_),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=al,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),i}function Xp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&al.enqueueReplaceState(i,i.state,null)}function Au(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},pu(n);var _=i.contextType;typeof _=="object"&&_!==null?p.context=Zn(_):(_=An(i)?Xr:hn.current,p.context=Cs(n,_)),p.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(Nu(n,i,_,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&al.enqueueReplaceState(p,p.state,null),Jo(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,i){try{var a="",u=i;do a+=fe(u),u=u.return;while(u);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:i,stack:p,digest:null}}function Cu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ru(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Lv=typeof WeakMap=="function"?WeakMap:Map;function $p(n,i,a){a=Gi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){fl||(fl=!0,Wu=u),Ru(n,i)},a}function qp(n,i,a){a=Gi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){Ru(n,i)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Ru(n,i),typeof u!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Yp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Lv;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=$v.bind(null,n,i,a),i.then(n,n))}function Kp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Zp(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Gi(-1,1),i.tag=2,wr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Iv=A.ReactCurrentOwner,Cn=!1;function Sn(n,i,a,u){i.child=n===null?gp(i,null,a,u):Ls(i,n.child,a,u)}function Qp(n,i,a,u,p){a=a.render;var _=i.ref;return Us(i,p),u=Su(n,i,a,u,_,p),a=wu(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Wi(n,i,p)):(zt&&a&&ru(i),i.flags|=1,Sn(n,i,u,p),i.child)}function Jp(n,i,a,u,p){if(n===null){var _=a.type;return typeof _=="function"&&!Qu(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=_,em(n,i,_,u,p)):(n=_l(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,(n.lanes&p)===0){var b=_.memoizedProps;if(a=a.compare,a=a!==null?a:Da,a(b,u)&&n.ref===i.ref)return Wi(n,i,p)}return i.flags|=1,n=Ar(_,u),n.ref=i.ref,n.return=i,i.child=n}function em(n,i,a,u,p){if(n!==null){var _=n.memoizedProps;if(Da(_,u)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=u=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Cn=!0);else return i.lanes=n.lanes,Wi(n,i,p)}return Pu(n,i,a,u,p)}function tm(n,i,a){var u=i.pendingProps,p=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Os,Bn),Bn|=a;else{if((a&1073741824)===0)return n=_!==null?_.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Os,Bn),Bn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:a,kt(Os,Bn),Bn|=u}else _!==null?(u=_.baseLanes|a,i.memoizedState=null):u=a,kt(Os,Bn),Bn|=u;return Sn(n,i,p,a),i.child}function nm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Pu(n,i,a,u,p){var _=An(a)?Xr:hn.current;return _=Cs(i,_),Us(i,p),a=Su(n,i,a,u,_,p),u=wu(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Wi(n,i,p)):(zt&&u&&ru(i),i.flags|=1,Sn(n,i,a,p),i.child)}function im(n,i,a,u,p){if(An(a)){var _=!0;Go(i)}else _=!1;if(Us(i,p),i.stateNode===null)ll(n,i),Wp(i,a,u),Au(i,a,u,p),u=!0;else if(n===null){var b=i.stateNode,F=i.memoizedProps;b.props=F;var V=b.context,re=a.contextType;typeof re=="object"&&re!==null?re=Zn(re):(re=An(a)?Xr:hn.current,re=Cs(i,re));var ye=a.getDerivedStateFromProps,we=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function";we||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(F!==u||V!==re)&&Xp(i,b,u,re),Sr=!1;var ve=i.memoizedState;b.state=ve,Jo(i,u,b,p),V=i.memoizedState,F!==u||ve!==V||Nn.current||Sr?(typeof ye=="function"&&(Nu(i,a,ye,u),V=i.memoizedState),(F=Sr||Gp(i,a,F,u,ve,V,re))?(we||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),b.props=u,b.state=V,b.context=re,u=F):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,_p(n,i),F=i.memoizedProps,re=i.type===i.elementType?F:ci(i.type,F),b.props=re,we=i.pendingProps,ve=b.context,V=a.contextType,typeof V=="object"&&V!==null?V=Zn(V):(V=An(a)?Xr:hn.current,V=Cs(i,V));var Ue=a.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(F!==we||ve!==V)&&Xp(i,b,u,V),Sr=!1,ve=i.memoizedState,b.state=ve,Jo(i,u,b,p);var ze=i.memoizedState;F!==we||ve!==ze||Nn.current||Sr?(typeof Ue=="function"&&(Nu(i,a,Ue,u),ze=i.memoizedState),(re=Sr||Gp(i,a,re,u,ve,ze,V)||!1)?(ye||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,ze,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,ze,V)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ze),b.props=u,b.state=ze,b.context=V,u=re):(typeof b.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return Du(n,i,a,u,_,p)}function Du(n,i,a,u,p,_){nm(n,i);var b=(i.flags&128)!==0;if(!u&&!b)return p&&lp(i,a,!1),Wi(n,i,_);u=i.stateNode,Iv.current=i;var F=b&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&b?(i.child=Ls(i,n.child,null,_),i.child=Ls(i,null,F,_)):Sn(n,i,F,_),i.memoizedState=u.state,p&&lp(i,a,!0),i.child}function rm(n){var i=n.stateNode;i.pendingContext?ap(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ap(n,i.context,!1),mu(n,i.containerInfo)}function sm(n,i,a,u,p){return Ds(),lu(p),i.flags|=256,Sn(n,i,a,u),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Iu(n){return{baseLanes:n,cachePool:null,transitions:null}}function am(n,i,a){var u=i.pendingProps,p=Ht.current,_=!1,b=(i.flags&128)!==0,F;if((F=b)||(F=n!==null&&n.memoizedState===null?!1:(p&2)!==0),F?(_=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),kt(Ht,p&1),n===null)return ou(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,n=u.fallback,_?(u=i.mode,_=i.child,b={mode:"hidden",children:b},(u&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=b):_=yl(b,u,0,null),n=ns(n,u,a,null),_.return=i,n.return=i,_.sibling=n,i.child=_,i.child.memoizedState=Iu(a),i.memoizedState=Lu,n):Uu(i,b));if(p=n.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return Uv(n,i,b,u,F,p,a);if(_){_=u.fallback,b=i.mode,p=n.child,F=p.sibling;var V={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=Ar(p,V),u.subtreeFlags=p.subtreeFlags&14680064),F!==null?_=Ar(F,_):(_=ns(_,b,a,null),_.flags|=2),_.return=i,u.return=i,u.sibling=_,i.child=u,u=_,_=i.child,b=n.child.memoizedState,b=b===null?Iu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},_.memoizedState=b,_.childLanes=n.childLanes&~a,i.memoizedState=Lu,u}return _=n.child,n=_.sibling,u=Ar(_,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Uu(n,i){return i=yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ol(n,i,a,u){return u!==null&&lu(u),Ls(i,n.child,null,a),n=Uu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Uv(n,i,a,u,p,_,b){if(a)return i.flags&256?(i.flags&=-257,u=Cu(Error(t(422))),ol(n,i,b,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(_=u.fallback,p=i.mode,u=yl({mode:"visible",children:u.children},p,0,null),_=ns(_,p,b,null),_.flags|=2,u.return=i,_.return=i,u.sibling=_,i.child=u,(i.mode&1)!==0&&Ls(i,n.child,null,b),i.child.memoizedState=Iu(b),i.memoizedState=Lu,_);if((i.mode&1)===0)return ol(n,i,b,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var F=u.dgst;return u=F,_=Error(t(419)),u=Cu(_,u,void 0),ol(n,i,b,u)}if(F=(b&n.childLanes)!==0,Cn||F){if(u=rn,u!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|b))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Hi(n,p),hi(u,n,p,-1))}return Zu(),u=Cu(Error(t(421))),ol(n,i,b,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=qv.bind(null,n),p._reactRetry=i,null):(n=_.treeContext,zn=gr(p.nextSibling),On=i,zt=!0,li=null,n!==null&&(Yn[Kn++]=Bi,Yn[Kn++]=Vi,Yn[Kn++]=$r,Bi=n.id,Vi=n.overflow,$r=i),i=Uu(i,u.children),i.flags|=4096,i)}function om(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),hu(n.return,i,a)}function ku(n,i,a,u,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=a,_.tailMode=p)}function lm(n,i,a){var u=i.pendingProps,p=u.revealOrder,_=u.tail;if(Sn(n,i,u.children,a),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&om(n,a,i);else if(n.tag===19)om(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&el(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),ku(i,!1,p,a,_);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&el(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}ku(i,!0,a,null,_);break;case"together":ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ll(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Wi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Qr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ar(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ar(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function kv(n,i,a){switch(i.tag){case 3:rm(i),Ds();break;case 5:wp(i);break;case 1:An(i.type)&&Go(i);break;case 4:mu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;kt(Ko,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?am(n,i,a):(kt(Ht,Ht.current&1),n=Wi(n,i,a),n!==null?n.sibling:null);kt(Ht,Ht.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return lm(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),kt(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,tm(n,i,a)}return Wi(n,i,a)}var cm,Fu,um,dm;cm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Fu=function(){},um=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,Kr(Ni.current);var _=null;switch(a){case"input":p=$(n,p),u=$(n,u),_=[];break;case"select":p=Y({},p,{value:void 0}),u=Y({},u,{value:void 0}),_=[];break;case"textarea":p=R(n,p),u=R(n,u),_=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Bo)}pt(a,u);var b;a=null;for(re in p)if(!u.hasOwnProperty(re)&&p.hasOwnProperty(re)&&p[re]!=null)if(re==="style"){var F=p[re];for(b in F)F.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(l.hasOwnProperty(re)?_||(_=[]):(_=_||[]).push(re,null));for(re in u){var V=u[re];if(F=p!=null?p[re]:void 0,u.hasOwnProperty(re)&&V!==F&&(V!=null||F!=null))if(re==="style")if(F){for(b in F)!F.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in V)V.hasOwnProperty(b)&&F[b]!==V[b]&&(a||(a={}),a[b]=V[b])}else a||(_||(_=[]),_.push(re,a)),a=V;else re==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(_=_||[]).push(re,V)):re==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(re,""+V):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(l.hasOwnProperty(re)?(V!=null&&re==="onScroll"&&jt("scroll",n),_||F===V||(_=[])):(_=_||[]).push(re,V))}a&&(_=_||[]).push("style",a);var re=_;(i.updateQueue=re)&&(i.flags|=4)}},dm=function(n,i,a,u){a!==u&&(i.flags|=4)};function $a(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Fv(n,i,a){var u=i.pendingProps;switch(su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return An(i.type)&&Ho(),pn(i),null;case 3:return u=i.stateNode,ks(),Ot(Nn),Ot(hn),vu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(qo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(qu(li),li=null))),Fu(n,i),pn(i),null;case 5:xu(i);var p=Kr(Va.current);if(a=i.type,n!==null&&i.stateNode!=null)um(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=Kr(Ni.current),qo(i)){u=i.stateNode,a=i.type;var _=i.memoizedProps;switch(u[Ti]=i,u[Fa]=_,n=(i.mode&1)!==0,a){case"dialog":jt("cancel",u),jt("close",u);break;case"iframe":case"object":case"embed":jt("load",u);break;case"video":case"audio":for(p=0;p<Ia.length;p++)jt(Ia[p],u);break;case"source":jt("error",u);break;case"img":case"image":case"link":jt("error",u),jt("load",u);break;case"details":jt("toggle",u);break;case"input":_t(u,_),jt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},jt("invalid",u);break;case"textarea":ne(u,_),jt("invalid",u)}pt(a,_),p=null;for(var b in _)if(_.hasOwnProperty(b)){var F=_[b];b==="children"?typeof F=="string"?u.textContent!==F&&(_.suppressHydrationWarning!==!0&&zo(u.textContent,F,n),p=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(_.suppressHydrationWarning!==!0&&zo(u.textContent,F,n),p=["children",""+F]):l.hasOwnProperty(b)&&F!=null&&b==="onScroll"&&jt("scroll",u)}switch(a){case"input":Nt(u),Ye(u,_,!0);break;case"textarea":Nt(u),_e(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=Bo)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(a,{is:u.is}):(n=b.createElement(a),a==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,a),n[Ti]=i,n[Fa]=u,cm(n,i,!1,!1),i.stateNode=n;e:{switch(b=ot(a,u),a){case"dialog":jt("cancel",n),jt("close",n),p=u;break;case"iframe":case"object":case"embed":jt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Ia.length;p++)jt(Ia[p],n);p=u;break;case"source":jt("error",n),p=u;break;case"img":case"image":case"link":jt("error",n),jt("load",n),p=u;break;case"details":jt("toggle",n),p=u;break;case"input":_t(n,u),p=$(n,u),jt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=Y({},u,{value:void 0}),jt("invalid",n);break;case"textarea":ne(n,u),p=R(n,u),jt("invalid",n);break;default:p=u}pt(a,p),F=p;for(_ in F)if(F.hasOwnProperty(_)){var V=F[_];_==="style"?nt(n,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ke(n,V)):_==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&ft(n,V):typeof V=="number"&&ft(n,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(l.hasOwnProperty(_)?V!=null&&_==="onScroll"&&jt("scroll",n):V!=null&&C(n,_,V,b))}switch(a){case"input":Nt(n),Ye(n,u,!1);break;case"textarea":Nt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?U(n,!!u.multiple,_,!1):u.defaultValue!=null&&U(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Bo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)dm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Kr(Va.current),Kr(Ni.current),qo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ti]=i,(_=u.nodeValue!==a)&&(n=On,n!==null))switch(n.tag){case 3:zo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(u.nodeValue,a,(n.mode&1)!==0)}_&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ti]=i,i.stateNode=u}return pn(i),null;case 13:if(Ot(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)pp(),Ds(),i.flags|=98560,_=!1;else if(_=qo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=i.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ti]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),_=!1}else li!==null&&(qu(li),li=null),_=!0;if(!_)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Jt===0&&(Jt=3):Zu())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return ks(),Fu(n,i),n===null&&Ua(i.stateNode.containerInfo),pn(i),null;case 10:return du(i.type._context),pn(i),null;case 17:return An(i.type)&&Ho(),pn(i),null;case 19:if(Ot(Ht),_=i.memoizedState,_===null)return pn(i),null;if(u=(i.flags&128)!==0,b=_.rendering,b===null)if(u)$a(_,!1);else{if(Jt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=el(n),b!==null){for(i.flags|=128,$a(_,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)_=a,n=u,_.flags&=14680066,b=_.alternate,b===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=b.childLanes,_.lanes=b.lanes,_.child=b.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=b.memoizedProps,_.memoizedState=b.memoizedState,_.updateQueue=b.updateQueue,_.type=b.type,n=b.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Ht,Ht.current&1|2),i.child}n=n.sibling}_.tail!==null&&Ee()>zs&&(i.flags|=128,u=!0,$a(_,!1),i.lanes=4194304)}else{if(!u)if(n=el(b),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),$a(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!zt)return pn(i),null}else 2*Ee()-_.renderingStartTime>zs&&a!==1073741824&&(i.flags|=128,u=!0,$a(_,!1),i.lanes=4194304);_.isBackwards?(b.sibling=i.child,i.child=b):(a=_.last,a!==null?a.sibling=b:i.child=b,_.last=b)}return _.tail!==null?(i=_.tail,_.rendering=i,_.tail=i.sibling,_.renderingStartTime=Ee(),i.sibling=null,a=Ht.current,kt(Ht,u?a&1|2:a&1),i):(pn(i),null);case 22:case 23:return Ku(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function jv(n,i){switch(su(i),i.tag){case 1:return An(i.type)&&Ho(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ks(),Ot(Nn),Ot(hn),vu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return xu(i),null;case 13:if(Ot(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ds()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return ks(),null;case 10:return du(i.type._context),null;case 22:case 23:return Ku(),null;case 24:return null;default:return null}}var cl=!1,mn=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function js(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Wt(n,i,u)}else a.current=null}function ju(n,i,a){try{a()}catch(u){Wt(n,i,u)}}var hm=!1;function zv(n,i){if(Kc=Co,n=Gf(),Vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var b=0,F=-1,V=-1,re=0,ye=0,we=n,ve=null;t:for(;;){for(var Ue;we!==a||p!==0&&we.nodeType!==3||(F=b+p),we!==_||u!==0&&we.nodeType!==3||(V=b+u),we.nodeType===3&&(b+=we.nodeValue.length),(Ue=we.firstChild)!==null;)ve=we,we=Ue;for(;;){if(we===n)break t;if(ve===a&&++re===p&&(F=b),ve===_&&++ye===u&&(V=b),(Ue=we.nextSibling)!==null)break;we=ve,ve=we.parentNode}we=Ue}a=F===-1||V===-1?null:{start:F,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zc={focusedElem:n,selectionRange:a},Co=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,$t=ze.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?He:ci(i.type,He),$t);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){Wt(i,i.return,be)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return ze=hm,hm=!1,ze}function qa(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&ju(i,a,_)}p=p.next}while(p!==u)}}function ul(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Ou(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function fm(n){var i=n.alternate;i!==null&&(n.alternate=null,fm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ti],delete i[Fa],delete i[tu],delete i[wv],delete i[Mv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pm(n){return n.tag===5||n.tag===3||n.tag===4}function mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bo));else if(u!==4&&(n=n.child,n!==null))for(zu(n,i,a),n=n.sibling;n!==null;)zu(n,i,a),n=n.sibling}function Bu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Bu(n,i,a),n=n.sibling;n!==null;)Bu(n,i,a),n=n.sibling}var on=null,ui=!1;function Mr(n,i,a){for(a=a.child;a!==null;)xm(n,i,a),a=a.sibling}function xm(n,i,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 5:mn||js(a,i);case 6:var u=on,p=ui;on=null,Mr(n,i,a),on=u,ui=p,on!==null&&(ui?(n=on,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):on.removeChild(a.stateNode));break;case 18:on!==null&&(ui?(n=on,a=a.stateNode,n.nodeType===8?eu(n.parentNode,a):n.nodeType===1&&eu(n,a),Ta(n)):eu(on,a.stateNode));break;case 4:u=on,p=ui,on=a.stateNode.containerInfo,ui=!0,Mr(n,i,a),on=u,ui=p;break;case 0:case 11:case 14:case 15:if(!mn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var _=p,b=_.destroy;_=_.tag,b!==void 0&&((_&2)!==0||(_&4)!==0)&&ju(a,i,b),p=p.next}while(p!==u)}Mr(n,i,a);break;case 1:if(!mn&&(js(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(F){Wt(a,i,F)}Mr(n,i,a);break;case 21:Mr(n,i,a);break;case 22:a.mode&1?(mn=(u=mn)||a.memoizedState!==null,Mr(n,i,a),mn=u):Mr(n,i,a);break;default:Mr(n,i,a)}}function gm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ov),i.forEach(function(u){var p=Yv.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function di(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var _=n,b=i,F=b;e:for(;F!==null;){switch(F.tag){case 5:on=F.stateNode,ui=!1;break e;case 3:on=F.stateNode.containerInfo,ui=!0;break e;case 4:on=F.stateNode.containerInfo,ui=!0;break e}F=F.return}if(on===null)throw Error(t(160));xm(_,b,p),on=null,ui=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(re){Wt(p,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)vm(i,n),i=i.sibling}function vm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),Ci(n),u&4){try{qa(3,n,n.return),ul(3,n)}catch(He){Wt(n,n.return,He)}try{qa(5,n,n.return)}catch(He){Wt(n,n.return,He)}}break;case 1:di(i,n),Ci(n),u&512&&a!==null&&js(a,a.return);break;case 5:if(di(i,n),Ci(n),u&512&&a!==null&&js(a,a.return),n.flags&32){var p=n.stateNode;try{ft(p,"")}catch(He){Wt(n,n.return,He)}}if(u&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,b=a!==null?a.memoizedProps:_,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&_.type==="radio"&&_.name!=null&&Qe(p,_),ot(F,b);var re=ot(F,_);for(b=0;b<V.length;b+=2){var ye=V[b],we=V[b+1];ye==="style"?nt(p,we):ye==="dangerouslySetInnerHTML"?ke(p,we):ye==="children"?ft(p,we):C(p,ye,we,re)}switch(F){case"input":it(p,_);break;case"textarea":ge(p,_);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ue=_.value;Ue!=null?U(p,!!_.multiple,Ue,!1):ve!==!!_.multiple&&(_.defaultValue!=null?U(p,!!_.multiple,_.defaultValue,!0):U(p,!!_.multiple,_.multiple?[]:"",!1))}p[Fa]=_}catch(He){Wt(n,n.return,He)}}break;case 6:if(di(i,n),Ci(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(He){Wt(n,n.return,He)}}break;case 3:if(di(i,n),Ci(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ta(i.containerInfo)}catch(He){Wt(n,n.return,He)}break;case 4:di(i,n),Ci(n);break;case 13:di(i,n),Ci(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Gu=Ee())),u&4&&gm(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(mn=(re=mn)||ye,di(i,n),mn=re):di(i,n),Ci(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!ye&&(n.mode&1)!==0)for(Fe=n,ye=n.child;ye!==null;){for(we=Fe=ye;Fe!==null;){switch(ve=Fe,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:qa(4,ve,ve.return);break;case 1:js(ve,ve.return);var ze=ve.stateNode;if(typeof ze.componentWillUnmount=="function"){u=ve,a=ve.return;try{i=u,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Wt(u,a,He)}}break;case 5:js(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Sm(we);continue}}Ue!==null?(Ue.return=ve,Fe=Ue):Sm(we)}ye=ye.sibling}e:for(ye=null,we=n;;){if(we.tag===5){if(ye===null){ye=we;try{p=we.stateNode,re?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(F=we.stateNode,V=we.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=tt("display",b))}catch(He){Wt(n,n.return,He)}}}else if(we.tag===6){if(ye===null)try{we.stateNode.nodeValue=re?"":we.memoizedProps}catch(He){Wt(n,n.return,He)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;ye===we&&(ye=null),we=we.return}ye===we&&(ye=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:di(i,n),Ci(n),u&4&&gm(n);break;case 21:break;default:di(i,n),Ci(n)}}function Ci(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(pm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(ft(p,""),u.flags&=-33);var _=mm(n);Bu(n,_,p);break;case 3:case 4:var b=u.stateNode.containerInfo,F=mm(n);zu(n,F,b);break;default:throw Error(t(161))}}catch(V){Wt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Bv(n,i,a){Fe=n,_m(n)}function _m(n,i,a){for(var u=(n.mode&1)!==0;Fe!==null;){var p=Fe,_=p.child;if(p.tag===22&&u){var b=p.memoizedState!==null||cl;if(!b){var F=p.alternate,V=F!==null&&F.memoizedState!==null||mn;F=cl;var re=mn;if(cl=b,(mn=V)&&!re)for(Fe=p;Fe!==null;)b=Fe,V=b.child,b.tag===22&&b.memoizedState!==null?wm(p):V!==null?(V.return=b,Fe=V):wm(p);for(;_!==null;)Fe=_,_m(_),_=_.sibling;Fe=p,cl=F,mn=re}ym(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Fe=_):ym(n)}}function ym(n){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||ul(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!mn)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=i.updateQueue;_!==null&&Sp(i,_,u);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Sp(i,b,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ye=re.memoizedState;if(ye!==null){var we=ye.dehydrated;we!==null&&Ta(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&Ou(i)}catch(ve){Wt(i,i.return,ve)}}if(i===n){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function Sm(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function wm(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ul(4,i)}catch(V){Wt(i,a,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(V){Wt(i,p,V)}}var _=i.return;try{Ou(i)}catch(V){Wt(i,_,V)}break;case 5:var b=i.return;try{Ou(i)}catch(V){Wt(i,b,V)}}}catch(V){Wt(i,i.return,V)}if(i===n){Fe=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Fe=F;break}Fe=i.return}}var Vv=Math.ceil,dl=A.ReactCurrentDispatcher,Vu=A.ReactCurrentOwner,Jn=A.ReactCurrentBatchConfig,wt=0,rn=null,qt=null,ln=0,Bn=0,Os=vr(0),Jt=0,Ya=null,Qr=0,hl=0,Hu=0,Ka=null,Rn=null,Gu=0,zs=1/0,Xi=null,fl=!1,Wu=null,Er=null,pl=!1,br=null,ml=0,Za=0,Xu=null,xl=-1,gl=0;function wn(){return(wt&6)!==0?Ee():xl!==-1?xl:xl=Ee()}function Tr(n){return(n.mode&1)===0?1:(wt&2)!==0&&ln!==0?ln&-ln:bv.transition!==null?(gl===0&&(gl=yn()),gl):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:Ef(n.type)),n)}function hi(n,i,a,u){if(50<Za)throw Za=0,Xu=null,Error(t(185));Tn(n,a,u),((wt&2)===0||n!==rn)&&(n===rn&&((wt&2)===0&&(hl|=a),Jt===4&&Nr(n,ln)),Pn(n,u),a===1&&wt===0&&(i.mode&1)===0&&(zs=Ee()+500,Wo&&yr()))}function Pn(n,i){var a=n.callbackNode;$n(n,i);var u=bi(n,n===rn?ln:0);if(u===0)a!==null&&ae(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&ae(a),i===1)n.tag===0?Ev(Em.bind(null,n)):cp(Em.bind(null,n)),yv(function(){(wt&6)===0&&yr()}),a=null;else{switch(xf(u)){case 1:a=Ve;break;case 4:a=rt;break;case 16:a=at;break;case 536870912:a=vt;break;default:a=at}a=Dm(a,Mm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Mm(n,i){if(xl=-1,gl=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Bs()&&n.callbackNode!==a)return null;var u=bi(n,n===rn?ln:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=vl(n,u);else{i=u;var p=wt;wt|=2;var _=Tm();(rn!==n||ln!==i)&&(Xi=null,zs=Ee()+500,es(n,i));do try{Wv();break}catch(F){bm(n,F)}while(!0);uu(),dl.current=_,wt=p,qt!==null?i=0:(rn=null,ln=0,i=Jt)}if(i!==0){if(i===2&&(p=ji(n),p!==0&&(u=p,i=$u(n,p))),i===1)throw a=Ya,es(n,0),Nr(n,u),Pn(n,Ee()),a;if(i===6)Nr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Hv(p)&&(i=vl(n,u),i===2&&(_=ji(n),_!==0&&(u=_,i=$u(n,_))),i===1))throw a=Ya,es(n,0),Nr(n,u),Pn(n,Ee()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:ts(n,Rn,Xi);break;case 3:if(Nr(n,u),(u&130023424)===u&&(i=Gu+500-Ee(),10<i)){if(bi(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Jc(ts.bind(null,n,Rn,Xi),i);break}ts(n,Rn,Xi);break;case 4:if(Nr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var b=31-ct(u);_=1<<b,b=i[b],b>p&&(p=b),u&=~_}if(u=p,u=Ee()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Vv(u/1960))-u,10<u){n.timeoutHandle=Jc(ts.bind(null,n,Rn,Xi),u);break}ts(n,Rn,Xi);break;case 5:ts(n,Rn,Xi);break;default:throw Error(t(329))}}}return Pn(n,Ee()),n.callbackNode===a?Mm.bind(null,n):null}function $u(n,i){var a=Ka;return n.current.memoizedState.isDehydrated&&(es(n,i).flags|=256),n=vl(n,i),n!==2&&(i=Rn,Rn=a,i!==null&&qu(i)),n}function qu(n){Rn===null?Rn=n:Rn.push.apply(Rn,n)}function Hv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],_=p.getSnapshot;p=p.value;try{if(!oi(_(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(n,i){for(i&=~Hu,i&=~hl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ct(i),u=1<<a;n[a]=-1,i&=~u}}function Em(n){if((wt&6)!==0)throw Error(t(327));Bs();var i=bi(n,0);if((i&1)===0)return Pn(n,Ee()),null;var a=vl(n,i);if(n.tag!==0&&a===2){var u=ji(n);u!==0&&(i=u,a=$u(n,u))}if(a===1)throw a=Ya,es(n,0),Nr(n,i),Pn(n,Ee()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ts(n,Rn,Xi),Pn(n,Ee()),null}function Yu(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(zs=Ee()+500,Wo&&yr())}}function Jr(n){br!==null&&br.tag===0&&(wt&6)===0&&Bs();var i=wt;wt|=1;var a=Jn.transition,u=Pt;try{if(Jn.transition=null,Pt=1,n)return n()}finally{Pt=u,Jn.transition=a,wt=i,(wt&6)===0&&yr()}}function Ku(){Bn=Os.current,Ot(Os)}function es(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,_v(a)),qt!==null)for(a=qt.return;a!==null;){var u=a;switch(su(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ho();break;case 3:ks(),Ot(Nn),Ot(hn),vu();break;case 5:xu(u);break;case 4:ks();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:du(u.type._context);break;case 22:case 23:Ku()}a=a.return}if(rn=n,qt=n=Ar(n.current,null),ln=Bn=i,Jt=0,Ya=null,Hu=hl=Qr=0,Rn=Ka=null,Yr!==null){for(i=0;i<Yr.length;i++)if(a=Yr[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,_=a.pending;if(_!==null){var b=_.next;_.next=p,u.next=b}a.pending=u}Yr=null}return n}function bm(n,i){do{var a=qt;try{if(uu(),tl.current=sl,nl){for(var u=Gt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}nl=!1}if(Zr=0,nn=Qt=Gt=null,Ha=!1,Ga=0,Vu.current=null,a===null||a.return===null){Jt=1,Ya=i,qt=null;break}e:{var _=n,b=a.return,F=a,V=i;if(i=ln,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var re=V,ye=F,we=ye.tag;if((ye.mode&1)===0&&(we===0||we===11||we===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=Kp(b);if(Ue!==null){Ue.flags&=-257,Zp(Ue,b,F,_,i),Ue.mode&1&&Yp(_,re,i),i=Ue,V=re;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(V),i.updateQueue=He}else ze.add(V);break e}else{if((i&1)===0){Yp(_,re,i),Zu();break e}V=Error(t(426))}}else if(zt&&F.mode&1){var $t=Kp(b);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),Zp($t,b,F,_,i),lu(Fs(V,F));break e}}_=V=Fs(V,F),Jt!==4&&(Jt=2),Ka===null?Ka=[_]:Ka.push(_),_=b;do{switch(_.tag){case 3:_.flags|=65536,i&=-i,_.lanes|=i;var J=$p(_,V,i);yp(_,J);break e;case 1:F=V;var W=_.type,te=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Er===null||!Er.has(te)))){_.flags|=65536,i&=-i,_.lanes|=i;var be=qp(_,F,i);yp(_,be);break e}}_=_.return}while(_!==null)}Am(a)}catch($e){i=$e,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function Tm(){var n=dl.current;return dl.current=sl,n===null?sl:n}function Zu(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),rn===null||(Qr&268435455)===0&&(hl&268435455)===0||Nr(rn,ln)}function vl(n,i){var a=wt;wt|=2;var u=Tm();(rn!==n||ln!==i)&&(Xi=null,es(n,i));do try{Gv();break}catch(p){bm(n,p)}while(!0);if(uu(),wt=a,dl.current=u,qt!==null)throw Error(t(261));return rn=null,ln=0,Jt}function Gv(){for(;qt!==null;)Nm(qt)}function Wv(){for(;qt!==null&&!K();)Nm(qt)}function Nm(n){var i=Pm(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,i===null?Am(n):qt=i,Vu.current=null}function Am(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Fv(a,i,Bn),a!==null){qt=a;return}}else{if(a=jv(a,i),a!==null){a.flags&=32767,qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=n}while(i!==null);Jt===0&&(Jt=5)}function ts(n,i,a){var u=Pt,p=Jn.transition;try{Jn.transition=null,Pt=1,Xv(n,i,a,u)}finally{Jn.transition=p,Pt=u}return null}function Xv(n,i,a,u){do Bs();while(br!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=a.lanes|a.childLanes;if(To(n,_),n===rn&&(qt=rn=null,ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||pl||(pl=!0,Dm(at,function(){return Bs(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=Jn.transition,Jn.transition=null;var b=Pt;Pt=1;var F=wt;wt|=4,Vu.current=null,zv(n,a),vm(a,n),hv(Zc),Co=!!Kc,Zc=Kc=null,n.current=a,Bv(a),Te(),wt=F,Pt=b,Jn.transition=_}else n.current=a;if(pl&&(pl=!1,br=n,ml=p),_=n.pendingLanes,_===0&&(Er=null),un(a.stateNode),Pn(n,Ee()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(fl)throw fl=!1,n=Wu,Wu=null,n;return(ml&1)!==0&&n.tag!==0&&Bs(),_=n.pendingLanes,(_&1)!==0?n===Xu?Za++:(Za=0,Xu=n):Za=0,yr(),null}function Bs(){if(br!==null){var n=xf(ml),i=Jn.transition,a=Pt;try{if(Jn.transition=null,Pt=16>n?16:n,br===null)var u=!1;else{if(n=br,br=null,ml=0,(wt&6)!==0)throw Error(t(331));var p=wt;for(wt|=4,Fe=n.current;Fe!==null;){var _=Fe,b=_.child;if((Fe.flags&16)!==0){var F=_.deletions;if(F!==null){for(var V=0;V<F.length;V++){var re=F[V];for(Fe=re;Fe!==null;){var ye=Fe;switch(ye.tag){case 0:case 11:case 15:qa(8,ye,_)}var we=ye.child;if(we!==null)we.return=ye,Fe=we;else for(;Fe!==null;){ye=Fe;var ve=ye.sibling,Ue=ye.return;if(fm(ye),ye===re){Fe=null;break}if(ve!==null){ve.return=Ue,Fe=ve;break}Fe=Ue}}}var ze=_.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var $t=He.sibling;He.sibling=null,He=$t}while(He!==null)}}Fe=_}}if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,Fe=b;else e:for(;Fe!==null;){if(_=Fe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:qa(9,_,_.return)}var J=_.sibling;if(J!==null){J.return=_.return,Fe=J;break e}Fe=_.return}}var W=n.current;for(Fe=W;Fe!==null;){b=Fe;var te=b.child;if((b.subtreeFlags&2064)!==0&&te!==null)te.return=b,Fe=te;else e:for(b=W;Fe!==null;){if(F=Fe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:ul(9,F)}}catch($e){Wt(F,F.return,$e)}if(F===b){Fe=null;break e}var be=F.sibling;if(be!==null){be.return=F.return,Fe=be;break e}Fe=F.return}}if(wt=p,yr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(At,n)}catch{}u=!0}return u}finally{Pt=a,Jn.transition=i}}return!1}function Cm(n,i,a){i=Fs(a,i),i=$p(n,i,1),n=wr(n,i,1),i=wn(),n!==null&&(Tn(n,1,i),Pn(n,i))}function Wt(n,i,a){if(n.tag===3)Cm(n,n,a);else for(;i!==null;){if(i.tag===3){Cm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Er===null||!Er.has(u))){n=Fs(a,n),n=qp(i,n,1),i=wr(i,n,1),n=wn(),i!==null&&(Tn(i,1,n),Pn(i,n));break}}i=i.return}}function $v(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,rn===n&&(ln&a)===a&&(Jt===4||Jt===3&&(ln&130023424)===ln&&500>Ee()-Gu?es(n,0):Hu|=a),Pn(n,i)}function Rm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ai,ai<<=1,(ai&130023424)===0&&(ai=4194304)));var a=wn();n=Hi(n,i),n!==null&&(Tn(n,i,a),Pn(n,a))}function qv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Rm(n,a)}function Yv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Rm(n,a)}var Pm;Pm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)Cn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Cn=!1,kv(n,i,a);Cn=(n.flags&131072)!==0}else Cn=!1,zt&&(i.flags&1048576)!==0&&up(i,$o,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ll(n,i),n=i.pendingProps;var p=Cs(i,hn.current);Us(i,a),p=Su(null,i,u,n,p,a);var _=wu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(u)?(_=!0,Go(i)):_=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,pu(i),p.updater=al,i.stateNode=p,p._reactInternals=i,Au(i,u,n,a),i=Du(null,i,u,!0,_,a)):(i.tag=0,zt&&_&&ru(i),Sn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(ll(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=Zv(u),n=ci(u,n),p){case 0:i=Pu(null,i,u,n,a);break e;case 1:i=im(null,i,u,n,a);break e;case 11:i=Qp(null,i,u,n,a);break e;case 14:i=Jp(null,i,u,ci(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:ci(u,p),Pu(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:ci(u,p),im(n,i,u,p,a);case 3:e:{if(rm(i),n===null)throw Error(t(387));u=i.pendingProps,_=i.memoizedState,p=_.element,_p(n,i),Jo(i,u,null,a);var b=i.memoizedState;if(u=b.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){p=Fs(Error(t(423)),i),i=sm(n,i,u,a,p);break e}else if(u!==p){p=Fs(Error(t(424)),i),i=sm(n,i,u,a,p);break e}else for(zn=gr(i.stateNode.containerInfo.firstChild),On=i,zt=!0,li=null,a=gp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),u===p){i=Wi(n,i,a);break e}Sn(n,i,u,a)}i=i.child}return i;case 5:return wp(i),n===null&&ou(i),u=i.type,p=i.pendingProps,_=n!==null?n.memoizedProps:null,b=p.children,Qc(u,p)?b=null:_!==null&&Qc(u,_)&&(i.flags|=32),nm(n,i),Sn(n,i,b,a),i.child;case 6:return n===null&&ou(i),null;case 13:return am(n,i,a);case 4:return mu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ls(i,null,u,a):Sn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:ci(u,p),Qp(n,i,u,p,a);case 7:return Sn(n,i,i.pendingProps,a),i.child;case 8:return Sn(n,i,i.pendingProps.children,a),i.child;case 12:return Sn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,_=i.memoizedProps,b=p.value,kt(Ko,u._currentValue),u._currentValue=b,_!==null)if(oi(_.value,b)){if(_.children===p.children&&!Nn.current){i=Wi(n,i,a);break e}}else for(_=i.child,_!==null&&(_.return=i);_!==null;){var F=_.dependencies;if(F!==null){b=_.child;for(var V=F.firstContext;V!==null;){if(V.context===u){if(_.tag===1){V=Gi(-1,a&-a),V.tag=2;var re=_.updateQueue;if(re!==null){re=re.shared;var ye=re.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),re.pending=V}}_.lanes|=a,V=_.alternate,V!==null&&(V.lanes|=a),hu(_.return,a,i),F.lanes|=a;break}V=V.next}}else if(_.tag===10)b=_.type===i.type?null:_.child;else if(_.tag===18){if(b=_.return,b===null)throw Error(t(341));b.lanes|=a,F=b.alternate,F!==null&&(F.lanes|=a),hu(b,a,i),b=_.sibling}else b=_.child;if(b!==null)b.return=_;else for(b=_;b!==null;){if(b===i){b=null;break}if(_=b.sibling,_!==null){_.return=b.return,b=_;break}b=b.return}_=b}Sn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Us(i,a),p=Zn(p),u=u(p),i.flags|=1,Sn(n,i,u,a),i.child;case 14:return u=i.type,p=ci(u,i.pendingProps),p=ci(u.type,p),Jp(n,i,u,p,a);case 15:return em(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:ci(u,p),ll(n,i),i.tag=1,An(u)?(n=!0,Go(i)):n=!1,Us(i,a),Wp(i,u,p),Au(i,u,p,a),Du(null,i,u,!0,n,a);case 19:return lm(n,i,a);case 22:return tm(n,i,a)}throw Error(t(156,i.tag))};function Dm(n,i){return se(n,i)}function Kv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,a,u){return new Kv(n,i,a,u)}function Qu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zv(n){if(typeof n=="function")return Qu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===le)return 14}return 2}function Ar(n,i){var a=n.alternate;return a===null?(a=ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _l(n,i,a,u,p,_){var b=2;if(u=n,typeof n=="function")Qu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case P:return ns(a.children,p,_,i);case O:b=8,p|=8;break;case L:return n=ei(12,a,i,p|2),n.elementType=L,n.lanes=_,n;case ee:return n=ei(13,a,i,p),n.elementType=ee,n.lanes=_,n;case de:return n=ei(19,a,i,p),n.elementType=de,n.lanes=_,n;case ce:return yl(a,p,_,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:b=10;break e;case z:b=9;break e;case Q:b=11;break e;case le:b=14;break e;case oe:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(b,a,i,p),i.elementType=n,i.type=u,i.lanes=_,i}function ns(n,i,a,u){return n=ei(7,n,u,i),n.lanes=a,n}function yl(n,i,a,u){return n=ei(22,n,u,i),n.elementType=ce,n.lanes=a,n.stateNode={isHidden:!1},n}function Ju(n,i,a){return n=ei(6,n,null,i),n.lanes=a,n}function ed(n,i,a){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Qv(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qn(0),this.expirationTimes=qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function td(n,i,a,u,p,_,b,F,V){return n=new Qv(n,i,a,F,V),i===1?(i=1,_===!0&&(i|=8)):i=0,_=ei(3,null,null,i),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(_),n}function Jv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Lm(n){if(!n)return _r;n=n._reactInternals;e:{if(Ei(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(An(a))return op(n,a,i)}return i}function Im(n,i,a,u,p,_,b,F,V){return n=td(a,u,!0,n,p,_,b,F,V),n.context=Lm(null),a=n.current,u=wn(),p=Tr(a),_=Gi(u,p),_.callback=i??null,wr(a,_,p),n.current.lanes=p,Tn(n,p,u),Pn(n,u),n}function Sl(n,i,a,u){var p=i.current,_=wn(),b=Tr(p);return a=Lm(a),i.context===null?i.context=a:i.pendingContext=a,i=Gi(_,b),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=wr(p,i,b),n!==null&&(hi(n,p,b,_),Qo(n,p,b)),b}function wl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Um(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function nd(n,i){Um(n,i),(n=n.alternate)&&Um(n,i)}function e_(){return null}var km=typeof reportError=="function"?reportError:function(n){console.error(n)};function id(n){this._internalRoot=n}Ml.prototype.render=id.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Sl(n,i,null,null)},Ml.prototype.unmount=id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Jr(function(){Sl(null,n,null,null)}),i[Oi]=null}};function Ml(n){this._internalRoot=n}Ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=_f();n={blockedOn:null,target:n,priority:i};for(var a=0;a<pr.length&&i!==0&&i<pr[a].priority;a++);pr.splice(a,0,n),a===0&&wf(n)}};function rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function El(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function t_(n,i,a,u,p){if(p){if(typeof u=="function"){var _=u;u=function(){var re=wl(b);_.call(re)}}var b=Im(i,u,n,0,null,!1,!1,"",Fm);return n._reactRootContainer=b,n[Oi]=b.current,Ua(n.nodeType===8?n.parentNode:n),Jr(),b}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var F=u;u=function(){var re=wl(V);F.call(re)}}var V=td(n,0,!1,null,null,!1,!1,"",Fm);return n._reactRootContainer=V,n[Oi]=V.current,Ua(n.nodeType===8?n.parentNode:n),Jr(function(){Sl(i,V,a,u)}),V}function bl(n,i,a,u,p){var _=a._reactRootContainer;if(_){var b=_;if(typeof p=="function"){var F=p;p=function(){var V=wl(b);F.call(V)}}Sl(i,b,n,p)}else b=t_(a,i,n,p,u);return wl(b)}gf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Zt(i.pendingLanes);a!==0&&(Ac(i,a|1),Pn(i,Ee()),(wt&6)===0&&(zs=Ee()+500,yr()))}break;case 13:Jr(function(){var u=Hi(n,1);if(u!==null){var p=wn();hi(u,n,1,p)}}),nd(n,1)}},Cc=function(n){if(n.tag===13){var i=Hi(n,134217728);if(i!==null){var a=wn();hi(i,n,134217728,a)}nd(n,134217728)}},vf=function(n){if(n.tag===13){var i=Tr(n),a=Hi(n,i);if(a!==null){var u=wn();hi(a,n,i,u)}nd(n,i)}},_f=function(){return Pt},yf=function(n,i){var a=Pt;try{return Pt=n,i()}finally{Pt=a}},Re=function(n,i,a){switch(i){case"input":if(it(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=Vo(u);if(!p)throw Error(t(90));ht(u),it(u,p)}}}break;case"textarea":ge(n,a);break;case"select":i=a.value,i!=null&&U(n,!!a.multiple,i,!1)}},Ft=Yu,Kt=Jr;var n_={usingClientEntryPoint:!1,Events:[ja,Ns,Vo,De,lt,Yu]},Qa={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i_={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=D(n),n===null?null:n.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||e_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{At=Tl.inject(i_),xt=Tl}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_,Dn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(i))throw Error(t(200));return Jv(n,i,null,a)},Dn.createRoot=function(n,i){if(!rd(n))throw Error(t(299));var a=!1,u="",p=km;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=td(n,1,!1,null,null,a,!1,u,p),n[Oi]=i.current,Ua(n.nodeType===8?n.parentNode:n),new id(i)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=D(i),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return Jr(n)},Dn.hydrate=function(n,i,a){if(!El(i))throw Error(t(200));return bl(null,n,i,!0,a)},Dn.hydrateRoot=function(n,i,a){if(!rd(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,_="",b=km;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Im(i,null,n,1,a??null,p,!1,_,b),n[Oi]=i.current,Ua(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new Ml(i)},Dn.render=function(n,i,a){if(!El(i))throw Error(t(200));return bl(null,n,i,!1,a)},Dn.unmountComponentAtNode=function(n){if(!El(n))throw Error(t(40));return n._reactRootContainer?(Jr(function(){bl(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1},Dn.unstable_batchedUpdates=Yu,Dn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!El(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return bl(n,i,a,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Wm;function h_(){if(Wm)return od.exports;Wm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),od.exports=d_(),od.exports}var Xm;function f_(){if(Xm)return Nl;Xm=1;var r=h_();return Nl.createRoot=r.createRoot,Nl.hydrateRoot=r.hydrateRoot,Nl}var p_=f_();const m_=u0(p_);/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,d0=/^[\\/]{2}/;function x_(r,e){return e+r.replace(/\\/g,"/")}var $m="popstate";function qm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function g_(r={}){function e(s,l){var x;let c=(x=l.state)==null?void 0:x.masked,{pathname:d,search:h,hash:f}=c||s.location;return Xd("",{pathname:d,search:h,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,l){return typeof l=="string"?l:ms(l)}return __(e,t,null,r)}function Bt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function wi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function v_(){return Math.random().toString(36).substring(2,10)}function Ym(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Xd(r,e,t=null,s,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?pa(e):e,state:t,key:e&&e.key||s||v_(),mask:l}}function ms({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function pa(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function __(r,e,t,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,d=l.history,h="POP",f=null,x=m();x==null&&(x=0,d.replaceState({...d.state,idx:x},""));function m(){return(d.state||{idx:null}).idx}function v(){h="POP";let S=m(),g=S==null?null:S-x;x=S,f&&f({action:h,location:M.location,delta:g})}function y(S,g){h="PUSH";let T=qm(S)?S:Xd(M.location,S,g);x=m()+1;let C=Ym(T,x),A=M.createHref(T.mask||T);try{d.pushState(C,"",A)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(A)}c&&f&&f({action:h,location:M.location,delta:1})}function w(S,g){h="REPLACE";let T=qm(S)?S:Xd(M.location,S,g);x=m();let C=Ym(T,x),A=M.createHref(T.mask||T);d.replaceState(C,"",A),c&&f&&f({action:h,location:M.location,delta:0})}function E(S){return y_(l,S)}let M={get action(){return h},get location(){return r(l,d)},listen(S){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener($m,v),f=S,()=>{l.removeEventListener($m,v),f=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let g=E(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:y,replace:w,go(S){return d.go(S)}};return M}function y_(r,e,t=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),Bt(s,"No window.location.(origin|href) available to create URL");let l=typeof e=="string"?e:ms(e);return l=l.replace(/ $/,"%20"),!t&&d0.test(l)&&(l=s+l),new URL(l,s)}function h0(r,e,t="/"){return S_(r,e,t,!1)}function S_(r,e,t,s,l){let c=typeof e=="string"?pa(e):e,d=sr(c.pathname||"/",t);if(d==null)return null;let h=w_(r),f=null,x=L_(d);for(let m=0;f==null&&m<h.length;++m)f=D_(h[m],x,s);return f}function w_(r){let e=f0(r);return M_(e),e}function f0(r,e=[],t=[],s="",l=!1){let c=(d,h,f=l,x)=>{let m={relativePath:x===void 0?d.path||"":x,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&f)return;Bt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let v=vi([s,m.relativePath]),y=t.concat(m);d.children&&d.children.length>0&&(Bt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),f0(d.children,e,y,v,f)),!(d.path==null&&!d.index)&&e.push({path:v,score:R_(v,d.index),routesMeta:y.map((w,E)=>{let[M,S]=x0(w.relativePath,w.caseSensitive,E===y.length-1);return{...w,matcher:M,compiledParams:S}})})};return r.forEach((d,h)=>{var f;if(d.path===""||!((f=d.path)!=null&&f.includes("?")))c(d,h);else for(let x of p0(d.path))c(d,h,!0,x)}),e}function p0(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,l=t.endsWith("?"),c=t.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let d=p0(s.join("/")),h=[];return h.push(...d.map(f=>f===""?c:[c,f].join("/"))),l&&h.push(...d),h.map(f=>r.startsWith("/")&&f===""?"/":f)}function M_(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:P_(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var E_=/^:[\w-]+$/,b_=3,T_=2,N_=1,A_=10,C_=-2,Km=r=>r==="*";function R_(r,e){let t=r.split("/"),s=t.length;return t.some(Km)&&(s+=C_),e&&(s+=T_),t.filter(l=>!Km(l)).reduce((l,c)=>l+(E_.test(c)?b_:c===""?N_:A_),s)}function P_(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function D_(r,e,t=!1){let{routesMeta:s}=r,l={},c="/",d=[];for(let h=0;h<s.length;++h){let f=s[h],x=h===s.length-1,m=c==="/"?e:e.slice(c.length)||"/",v={path:f.relativePath,caseSensitive:f.caseSensitive,end:x},y=f.matcher&&f.compiledParams?m0(v,m,f.matcher,f.compiledParams):oc(v,m),w=f.route;if(!y&&x&&t&&!s[s.length-1].route.index&&(y=oc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!y)return null;Object.assign(l,y.params),d.push({params:l,pathname:vi([c,y.pathname]),pathnameBase:k_(vi([c,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(c=vi([c,y.pathnameBase]))}return d}function oc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=x0(r.path,r.caseSensitive,r.end);return m0(r,e,t,s)}function m0(r,e,t,s){let l=e.match(t);if(!l)return null;let c=l[0],d=oa(c,1),h=l.slice(1);return{params:s.reduce((x,{paramName:m,isOptional:v},y)=>{if(m==="*"){let E=h[y]||"";d=oa(c.slice(0,c.length-E.length),1)}const w=h[y];return v&&!w?x[m]=void 0:x[m]=(w||"").replace(/%2F/g,"/"),x},{}),pathname:c,pathnameBase:d,pattern:r}}function x0(r,e=!1,t=!0){wi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,f,x,m)=>{if(s.push({paramName:h,isOptional:f!=null}),f){let v=m.charAt(x+d.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function L_(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function sr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function I_(r,e="/"){let{pathname:t,search:s="",hash:l=""}=typeof r=="string"?pa(r):r,c;return t?(t=g0(t),t.startsWith("/")||t.startsWith("\\")?c=Zm(t.substring(1),"/"):c=Zm(t,e)):c=e,{pathname:c,search:F_(s),hash:j_(l)}}function Zm(r,e){let t=oa(e).split("/");return r.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function ud(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function U_(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Vh(r){let e=U_(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function hc(r,e,t,s=!1){let l;typeof r=="string"?l=pa(r):(l={...r},Bt(!l.pathname||!l.pathname.includes("?"),ud("?","pathname","search",l)),Bt(!l.pathname||!l.pathname.includes("#"),ud("#","pathname","hash",l)),Bt(!l.search||!l.search.includes("#"),ud("#","search","hash",l)));let c=r===""||l.pathname==="",d=c?"/":l.pathname,h;if(d==null)h=t;else{let v=e.length-1;if(!s&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}h=v>=0?e[v]:"/"}let f=I_(l,h),x=d&&d!=="/"&&d.endsWith("/"),m=(c||d===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(x||m)&&(f.pathname+="/"),f}var g0=r=>r.replace(/[\\/]{2,}/g,"/"),vi=r=>g0(r.join("/"));function oa(r,e=0){let t=r.length;for(;t>e&&r.charCodeAt(t-1)===47;)t--;return t===r.length?r:r.slice(0,t)}var k_=r=>oa(r).replace(/^\/*/,"/"),F_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,j_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,O_=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function z_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function B_(r){let e=r.map(t=>t.route.path).filter(Boolean);return vi(e)||"/"}var v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _0(r,e){let t=r;if(typeof t!="string"||!Bh.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,l=!1;if(v0)try{let c=new URL(window.location.href),d=d0.test(t)?new URL(x_(t,c.protocol)):new URL(t),h=sr(d.pathname,e);d.origin===c.origin&&h!=null?t=h+d.search+d.hash:l=!0}catch{wi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Qm=new URL("http://localhost");function Hh(r){if(r.createURL)return r.createURL("/");try{return new URL(r.createHref("/"),Qm)}catch{return Qm}}function dd(r,e){return r.origin===e.origin&&(r.origin!=="null"||r.protocol===e.protocol&&r.host===e.host)}function V_(r,e){if(r.startsWith("//"))return!0;let t=e.protocol.toLowerCase();return r.toLowerCase().startsWith(t)?e.host===""||r.slice(t.length).startsWith("//"):!1}function Gh(r,e,t,s){let l=null;try{l=r==null?null:new URL(r,t)}catch{}let c=new URL(e,t),d=l!=null&&!dd(l,t),h=!dd(c,t);if(s==="reject"){if(d||h)throw new Error("External navigation is not allowed")}else if(h&&(l==null||!V_(r,l)||!dd(l,c)))throw new Error("External navigation is not allowed")}var y0=["POST","PUT","PATCH","DELETE"];new Set(y0);var H_=["GET",...y0];new Set(H_);var G_=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function W_(r){try{return G_.includes(new URL(r).protocol)}catch{return!1}}var ma=k.createContext(null);ma.displayName="DataRouter";var fc=k.createContext(null);fc.displayName="DataRouterState";var S0=k.createContext(!1);function X_(){return k.useContext(S0)}var w0=k.createContext({isTransitioning:!1});w0.displayName="ViewTransition";var $_=k.createContext(new Map);$_.displayName="Fetchers";var q_=k.createContext(null);q_.displayName="Await";var Wn=k.createContext(null);Wn.displayName="Navigation";var ho=k.createContext(null);ho.displayName="Location";var Mi=k.createContext({outlet:null,matches:[],isDataRoute:!1});Mi.displayName="Route";var Wh=k.createContext(null);Wh.displayName="RouteError";var M0="REACT_ROUTER_ERROR",Y_="REDIRECT",K_="ROUTE_ERROR_RESPONSE";function Z_(r){if(r.startsWith(`${M0}:${Y_}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Q_(r){if(r.startsWith(`${M0}:${K_}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new O_(e.status,e.statusText,e.data)}catch{}}function J_(r,{relative:e}={}){Bt(xa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=k.useContext(Wn),{hash:l,pathname:c,search:d}=fo(r,{relative:e}),h=c;return t!=="/"&&(h=c==="/"?t:vi([t,c])),s.createHref({pathname:h,search:d,hash:l})}function xa(){return k.useContext(ho)!=null}function Xn(){return Bt(xa(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(ho).location}var E0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function b0(r){k.useContext(Wn).static||k.useLayoutEffect(r)}function ga(){let{isDataRoute:r}=k.useContext(Mi);return r?py():ey()}function ey(){Bt(xa(),"useNavigate() may be used only in the context of a <Router> component.");let r=k.useContext(ma),{basename:e,navigator:t}=k.useContext(Wn),{matches:s}=k.useContext(Mi),{pathname:l}=Xn(),c=JSON.stringify(Vh(s)),d=k.useRef(!1);return b0(()=>{d.current=!0}),k.useCallback((f,x={})=>{if(wi(d.current,E0),!d.current)return;if(typeof f=="number"){t.go(f);return}let m=hc(f,JSON.parse(c),l,x.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:vi([e,m.pathname])),Gh(typeof f=="string"?f:ms(f),t.createHref(m),Hh(t),"reject"),(x.replace?t.replace:t.push)(m,x.state,x)},[e,t,c,l,r])}var ty=k.createContext(null);function ny(r){let e=k.useContext(Mi).outlet;return k.useMemo(()=>e&&k.createElement(ty.Provider,{value:r},e),[e,r])}function fo(r,{relative:e}={}){let{matches:t}=k.useContext(Mi),{pathname:s}=Xn(),l=JSON.stringify(Vh(t));return k.useMemo(()=>hc(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function iy(r,e){return T0(r,e)}function T0(r,e,t){var S;Bt(xa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=k.useContext(Wn),{matches:l}=k.useContext(Mi),c=l[l.length-1],d=c?c.params:{},h=c?c.pathname:"/",f=c?c.pathnameBase:"/",x=c&&c.route;{let g=x&&x.path||"";A0(h,!x||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let m=Xn(),v;if(e){let g=typeof e=="string"?pa(e):e;Bt(f==="/"||((S=g.pathname)==null?void 0:S.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${g.pathname}" was given in the \`location\` prop.`),v=g}else v=m;let y=v.pathname||"/",w=y;if(f!=="/"){let g=f.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(g.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(g=>Object.assign(g,{route:t.manifest[g.route.id]||g.route})):h0(r,{pathname:w});wi(x||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),wi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=ly(E&&E.map(g=>Object.assign({},g,{params:Object.assign({},d,g.params),pathname:vi([f,s.encodeLocation?s.encodeLocation(g.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?f:vi([f,s.encodeLocation?s.encodeLocation(g.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathnameBase])})),l,t);return e&&M?k.createElement(ho.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},M):M}function ry(){let r=fy(),e=z_(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",r),d=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:c},"ErrorBoundary")," or"," ",k.createElement("code",{style:c},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),t?k.createElement("pre",{style:l},t):null,d)}var sy=k.createElement(ry,null),N0=class extends k.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=Q_(r.digest);t&&(r=t)}let e=r!==void 0?k.createElement(Mi.Provider,{value:this.props.routeContext},k.createElement(Wh.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?k.createElement(ay,{error:r},e):e}};N0.contextType=S0;var hd=new WeakMap;function ay({children:r,error:e}){let{basename:t,navigator:s}=k.useContext(Wn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let l=Z_(e.digest);if(l){let c=hd.get(e);if(c)throw c;let d=_0(l.location,t),h=d.absoluteURL||d.to;if(Gh(l.location,h,Hh(s),"allow-explicit"),W_(h))throw new Error("Invalid redirect location");if(v0&&!hd.get(e))if(d.isExternal||l.reloadDocument)window.location.href=h;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:l.replace}));throw hd.set(e,f),f}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return r}function oy({routeContext:r,match:e,children:t}){let s=k.useContext(ma);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),k.createElement(Mi.Provider,{value:r},t)}function ly(r,e=[],t){let s=t==null?void 0:t.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let l=r,c=s==null?void 0:s.errors;if(c!=null){let m=l.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);Bt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let d=!1,h=-1;if(t&&s){d=s.renderFallback;for(let m=0;m<l.length;m++){let v=l[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=m),v.route.id){let{loaderData:y,errors:w}=s,E=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!w||w[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(d=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let f=t==null?void 0:t.onError,x=s&&f?(m,v)=>{var y,w;f(m,{location:s.location,params:((w=(y=s.matches)==null?void 0:y[0])==null?void 0:w.params)??{},pattern:B_(s.matches),errorInfo:v})}:void 0;return l.reduceRight((m,v,y)=>{let w,E=!1,M=null,S=null;s&&(w=c&&v.route.id?c[v.route.id]:void 0,M=v.route.errorElement||sy,d&&(h<0&&y===0?(A0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):h===y&&(E=!0,S=v.route.hydrateFallbackElement||null)));let g=e.concat(l.slice(0,y+1)),T=()=>{let C;return w?C=M:E?C=S:v.route.Component?C=k.createElement(v.route.Component,null):v.route.element?C=v.route.element:C=m,k.createElement(oy,{match:v,routeContext:{outlet:m,matches:g,isDataRoute:s!=null},children:C})};return s&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?k.createElement(N0,{location:s.location,revalidation:s.revalidation,component:M,error:w,children:T(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:x}):T()},null)}function Xh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cy(r){let e=k.useContext(ma);return Bt(e,Xh(r)),e}function uy(r){let e=k.useContext(fc);return Bt(e,Xh(r)),e}function dy(r){let e=k.useContext(Mi);return Bt(e,Xh(r)),e}function $h(r){let e=dy(r),t=e.matches[e.matches.length-1];return Bt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function hy(){return $h("useRouteId")}function fy(){var s;let r=k.useContext(Wh),e=uy("useRouteError"),t=$h("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function py(){let{router:r}=cy("useNavigate"),e=$h("useNavigate"),t=k.useRef(!1);return b0(()=>{t.current=!0}),k.useCallback(async(l,c={})=>{wi(t.current,E0),t.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Jm={};function A0(r,e,t){!e&&!Jm[r]&&(Jm[r]=!0,wi(!1,t))}k.memo(my);function my({routes:r,manifest:e,future:t,state:s,isStatic:l,onError:c}){return T0(r,void 0,{manifest:e,state:s,isStatic:l,onError:c})}function $d({to:r,replace:e,state:t,relative:s}){Bt(xa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l,navigator:c}=k.useContext(Wn);wi(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=k.useContext(Mi),{pathname:h}=Xn(),f=ga(),x=hc(r,Vh(d),h,s==="path");Gh(typeof r=="string"?r:ms(r),c.createHref(x),Hh(c),"reject");let m=JSON.stringify(x);return k.useEffect(()=>{f(JSON.parse(m),{replace:e,state:t,relative:s})},[f,m,s,e,t]),null}function xy(r){return ny(r.context)}function Mn(r){Bt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gy({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:l,static:c=!1,useTransitions:d}){Bt(!xa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),f=k.useMemo(()=>({basename:h,navigator:l,static:c,useTransitions:d,future:{}}),[h,l,c,d]);typeof t=="string"&&(t=pa(t));let{pathname:x="/",search:m="",hash:v="",state:y=null,key:w="default",mask:E}=t,M=k.useMemo(()=>{let S=sr(x,h);return S==null?null:{location:{pathname:S,search:m,hash:v,state:y,key:w,mask:E},navigationType:s}},[h,x,m,v,y,w,s,E]);return wi(M!=null,`<Router basename="${h}"> is not able to match the URL "${x}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:k.createElement(Wn.Provider,{value:f},k.createElement(ho.Provider,{children:e,value:M}))}function vy({children:r,location:e}){return iy(qd(r),e)}function qd(r,e=[]){let t=[];return k.Children.forEach(r,(s,l)=>{if(!k.isValidElement(s))return;let c=[...e,l];if(s.type===k.Fragment){t.push.apply(t,qd(s.props.children,c));return}Bt(s.type===Mn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Bt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=qd(s.props.children,c)),t.push(d)}),t}var Ql="get",Jl="application/x-www-form-urlencoded";function pc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function _y(r){return pc(r)&&r.tagName.toLowerCase()==="button"}function yy(r){return pc(r)&&r.tagName.toLowerCase()==="form"}function Sy(r){return pc(r)&&r.tagName.toLowerCase()==="input"}function wy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function My(r,e){return r.button===0&&(!e||e==="_self")&&!wy(r)}var Al=null;function Ey(){if(Al===null)try{new FormData(document.createElement("form"),0),Al=!1}catch{Al=!0}return Al}var by=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fd(r){return r!=null&&!by.has(r)?(wi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jl}"`),null):r}function Ty(r,e){let t,s,l,c,d;if(yy(r)){let h=r.getAttribute("action");s=h?sr(h,e):null,t=r.getAttribute("method")||Ql,l=fd(r.getAttribute("enctype"))||Jl,c=new FormData(r)}else if(_y(r)||Sy(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||h.getAttribute("action");if(s=f?sr(f,e):null,t=r.getAttribute("formmethod")||h.getAttribute("method")||Ql,l=fd(r.getAttribute("formenctype"))||fd(h.getAttribute("enctype"))||Jl,c=new FormData(h,r),!Ey()){let{name:x,type:m,value:v}=r;if(m==="image"){let y=x?`${x}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else x&&c.append(x,v)}}else{if(pc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ql,s=null,l=Jl,d=r}return c&&l==="text/plain"&&(d=c,c=void 0),{action:s,method:t.toLowerCase(),encType:l,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qh(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function C0(r,e,t,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&sr(l.pathname,e)==="/"?l.pathname=`${oa(e)}/_root.${s}`:l.pathname=`${oa(l.pathname)}.${s}`,l}async function Ny(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ay(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Cy(r,e,t){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await Ny(c,t);return d.links?d.links():[]}return[]}));return Ly(s.flat(1).filter(Ay).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function ex(r,e,t,s,l,c){let d=(f,x)=>t[x]?f.route.id!==t[x].route.id:!0,h=(f,x)=>{var m;return t[x].pathname!==f.pathname||((m=t[x].route.path)==null?void 0:m.endsWith("*"))&&t[x].params["*"]!==f.params["*"]};return c==="assets"?e.filter((f,x)=>d(f,x)||h(f,x)):c==="data"?e.filter((f,x)=>{var v;let m=s.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(d(f,x)||h(f,x))return!0;if(f.route.shouldRevalidate){let y=f.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Ry(r,e,{includeHydrateFallback:t}={}){return Py(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),t&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function Py(r){return[...new Set(r)]}function Dy(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Ly(r,e){let t=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(Dy(l));return t.has(c)||(t.add(c),s.push({key:c,link:l})),s},[])}function Yh(){let r=k.useContext(ma);return qh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Iy(){let r=k.useContext(fc);return qh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Kh=k.createContext(void 0);Kh.displayName="FrameworkContext";function mc(){let r=k.useContext(Kh);return qh(r,"You must render this element inside a <HydratedRouter> element"),r}function Uy(r,e){let t=k.useContext(Kh),[s,l]=k.useState(!1),[c,d]=k.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:x,onMouseLeave:m,onTouchStart:v}=e,y=k.useRef(null);k.useEffect(()=>{if(r==="render"&&d(!0),r==="viewport"){let M=g=>{g.forEach(T=>{d(T.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[r]),k.useEffect(()=>{if(s){let M=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(M)}}},[s]);let w=()=>{l(!0)},E=()=>{l(!1),d(!1)};return t?r!=="intent"?[c,y,{}]:[c,y,{onFocus:eo(h,w),onBlur:eo(f,E),onMouseEnter:eo(x,w),onMouseLeave:eo(m,E),onTouchStart:eo(v,w)}]:[!1,y,{}]}function eo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function ky({page:r,...e}){let t=X_(),{nonce:s}=mc(),{router:l}=Yh(),c=k.useMemo(()=>h0(l.routes,r,l.basename),[l.routes,r,l.basename]);return c?(e.nonce==null&&s&&(e={...e,nonce:s}),t?k.createElement(jy,{page:r,matches:c,...e}):k.createElement(Oy,{page:r,matches:c,...e})):null}function Fy(r){let{manifest:e,routeModules:t}=mc(),[s,l]=k.useState([]);return k.useEffect(()=>{let c=!1;return Cy(r,e,t).then(d=>{c||l(d)}),()=>{c=!0}},[r,e,t]),s}function jy({page:r,matches:e,...t}){let s=Xn(),{future:l}=mc(),{basename:c}=Yh(),d=k.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let h=C0(r,c,l.v8_trailingSlashAwareDataRequests,"rsc"),f=!1,x=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?f=!0:x.push(m.route.id);return f&&x.length>0&&h.searchParams.set("_routes",x.join(",")),[h.pathname+h.search]},[c,l.v8_trailingSlashAwareDataRequests,r,s,e]);return k.createElement(k.Fragment,null,d.map(h=>k.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...t})))}function Oy({page:r,matches:e,...t}){let s=Xn(),{future:l,manifest:c,routeModules:d}=mc(),{basename:h}=Yh(),{loaderData:f,matches:x}=Iy(),m=k.useMemo(()=>ex(r,e,x,c,s,"data"),[r,e,x,c,s]),v=k.useMemo(()=>ex(r,e,x,c,s,"assets"),[r,e,x,c,s]),y=k.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let M=new Set,S=!1;if(e.forEach(T=>{var A;let C=c.routes[T.route.id];!C||!C.hasLoader||(!m.some(H=>H.route.id===T.route.id)&&T.route.id in f&&((A=d[T.route.id])!=null&&A.shouldRevalidate)||C.hasClientLoader?S=!0:M.add(T.route.id))}),M.size===0)return[];let g=C0(r,h,l.v8_trailingSlashAwareDataRequests,"data");return S&&M.size>0&&g.searchParams.set("_routes",e.filter(T=>M.has(T.route.id)).map(T=>T.route.id).join(",")),[g.pathname+g.search]},[h,l.v8_trailingSlashAwareDataRequests,f,s,c,m,e,r,d]),w=k.useMemo(()=>Ry(v,c),[v,c]),E=Fy(v);return k.createElement(k.Fragment,null,y.map(M=>k.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),w.map(M=>k.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),E.map(({key:M,link:S})=>k.createElement("link",{key:M,nonce:t.nonce,...S,crossOrigin:S.crossOrigin??t.crossOrigin})))}function zy(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var By=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{By&&(window.__reactRouterVersion="7.18.4")}catch{}function Vy({basename:r,children:e,useTransitions:t,window:s}){let l=k.useRef();l.current==null&&(l.current=g_({window:s,v5Compat:!0}));let c=l.current,[d,h]=k.useState({action:c.action,location:c.location}),f=k.useCallback(x=>{t===!1?h(x):k.startTransition(()=>h(x))},[t]);return k.useLayoutEffect(()=>c.listen(f),[c,f]),k.createElement(gy,{basename:r,children:e,location:d.location,navigationType:d.action,navigator:c,useTransitions:t})}var xc=k.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:l,reloadDocument:c,replace:d,mask:h,state:f,target:x,to:m,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:w,...E},M){let{basename:S,navigator:g,useTransitions:T}=k.useContext(Wn),C=typeof m=="string"&&Bh.test(m),A=_0(m,S);m=A.to;let H=J_(m,{relative:l}),I=Xn(),P=null;if(h){let le=hc(h,[],I.mask?I.mask.pathname:"/",!0);S!=="/"&&(le.pathname=le.pathname==="/"?S:vi([S,le.pathname])),P=g.createHref(le)}let[O,L,N]=Uy(s,E),z=Wy(m,{replace:d,mask:h,state:f,target:x,preventScrollReset:v,relative:l,viewTransition:y,defaultShouldRevalidate:w,useTransitions:T});function Q(le){e&&e(le),le.defaultPrevented||z(le)}let ee=!(A.isExternal||c),de=k.createElement("a",{...E,...N,href:(ee?P:void 0)||A.absoluteURL||H,onClick:ee?Q:e,ref:zy(M,L),target:x,"data-discover":!C&&t==="render"?"true":void 0});return O&&!C?k.createElement(k.Fragment,null,de,k.createElement(ky,{page:H})):de});xc.displayName="Link";var Pi=k.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:l=!1,style:c,to:d,viewTransition:h,children:f,...x},m){let v=fo(d,{relative:x.relative}),y=Xn(),w=k.useContext(fc),{navigator:E,basename:M}=k.useContext(Wn),S=w!=null&&Ky(v)&&h===!0,g=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,T=y.pathname,C=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;t||(T=T.toLowerCase(),C=C?C.toLowerCase():null,g=g.toLowerCase()),C&&M&&(C=sr(C,M)||C);const A=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let H=T===g||!l&&T.startsWith(g)&&T.charAt(A)==="/",I=C!=null&&(C===g||!l&&C.startsWith(g)&&C.charAt(g.length)==="/"),P={isActive:H,isPending:I,isTransitioning:S},O=H?e:void 0,L;typeof s=="function"?L=s(P):L=[s,H?"active":null,I?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(P):c;return k.createElement(xc,{...x,"aria-current":O,className:L,ref:m,style:N,to:d,viewTransition:h},typeof f=="function"?f(P):f)});Pi.displayName="NavLink";var Hy=k.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:l,state:c,method:d=Ql,action:h,onSubmit:f,relative:x,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y,...w},E)=>{let{useTransitions:M}=k.useContext(Wn),S=qy(),g=Yy(h,{relative:x}),T=d.toLowerCase()==="get"?"get":"post",C=typeof h=="string"&&Bh.test(h),A=H=>{if(f&&f(H),H.defaultPrevented)return;H.preventDefault();let I=H.nativeEvent.submitter,P=(I==null?void 0:I.getAttribute("formmethod"))||d,O=()=>S(I||H.currentTarget,{fetcherKey:e,method:P,navigate:t,replace:l,state:c,relative:x,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y});M&&t!==!1?k.startTransition(()=>O()):O()};return k.createElement("form",{ref:E,method:T,action:g,onSubmit:s?f:A,...w,"data-discover":!C&&r==="render"?"true":void 0})});Hy.displayName="Form";function Gy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function R0(r){let e=k.useContext(ma);return Bt(e,Gy(r)),e}function Wy(r,{target:e,replace:t,mask:s,state:l,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:f,useTransitions:x}={}){let m=ga(),v=Xn(),y=fo(r,{relative:d});return k.useCallback(w=>{if(My(w,e)){w.preventDefault();let E=t!==void 0?t:ms(v)===ms(y),M=()=>m(r,{replace:E,mask:s,state:l,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:f});x?k.startTransition(()=>M()):M()}},[v,m,y,t,s,l,e,r,c,d,h,f,x])}var Xy=0,$y=()=>`__${String(++Xy)}__`;function qy(){let{router:r}=R0("useSubmit"),{basename:e}=k.useContext(Wn),t=hy(),s=r.fetch,l=r.navigate;return k.useCallback(async(c,d={})=>{let{action:h,method:f,encType:x,formData:m,body:v}=Ty(c,e);if(d.navigate===!1){let y=d.fetcherKey||$y();await s(y,t,d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:m,body:v,formMethod:d.method||f,formEncType:d.encType||x,flushSync:d.flushSync})}else await l(d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:m,body:v,formMethod:d.method||f,formEncType:d.encType||x,replace:d.replace,state:d.state,fromRouteId:t,flushSync:d.flushSync,viewTransition:d.viewTransition})},[s,l,e,t])}function Yy(r,{relative:e}={}){let{basename:t}=k.useContext(Wn),s=k.useContext(Mi);Bt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...fo(r||".",{relative:e})},d=Xn();if(r==null){c.search=d.search;let h=new URLSearchParams(c.search),f=h.getAll("index");if(f.some(m=>m==="")){h.delete("index"),f.filter(v=>v).forEach(v=>h.append("index",v));let m=h.toString();c.search=m?`?${m}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(c.pathname=c.pathname==="/"?t:vi([t,c.pathname])),ms(c)}function Ky(r,{relative:e}={}){let t=k.useContext(w0);Bt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=R0("useViewTransitionState"),l=fo(r,{relative:e});if(!t.isTransitioning)return!1;let c=sr(t.currentLocation.pathname,s)||t.currentLocation.pathname,d=sr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return oc(l.pathname,d)!=null||oc(l.pathname,c)!=null}const Xt="http://localhost:8000";let ec=localStorage.getItem("stratum_admin_token")||localStorage.getItem("nexus_admin_token");function lc(r){ec=r,r?(localStorage.setItem("stratum_admin_token",r),localStorage.setItem("nexus_admin_token",r)):(localStorage.removeItem("stratum_admin_token"),localStorage.removeItem("nexus_admin_token"))}function P0(){return ec||(ec=localStorage.getItem("stratum_admin_token")||localStorage.getItem("nexus_admin_token")),ec}function $i(r={}){const e={...r},t=P0();return t&&(e.Authorization=`Bearer ${t}`),e}function qi(r){const e=new URLSearchParams;for(const[s,l]of Object.entries(r))l!=null&&l!==""&&l!=="All"&&e.append(s,String(l));const t=e.toString();return t?`?${t}`:""}const gt={async checkHealth(){try{return(await fetch(`${Xt}/health`,{signal:AbortSignal.timeout(2e3)})).ok}catch{return!1}},async login(r,e){const t=await fetch(`${Xt}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:e})});if(!t.ok){const l=await t.json().catch(()=>({detail:"Authentication failed"}));throw new Error(l.detail||"Authentication failed")}const s=await t.json();return lc(s.token),s},async logout(){try{await fetch(`${Xt}/api/auth/logout`,{method:"POST",headers:$i()})}finally{lc(null)}},async getMe(){const r=await fetch(`${Xt}/api/auth/me`,{headers:$i()});if(!r.ok)throw new Error("Not authenticated");return r.json()},async changePassword(r,e){const t=await fetch(`${Xt}/api/auth/change-password`,{method:"POST",headers:$i({"Content-Type":"application/json"}),body:JSON.stringify({current_password:r,new_password:e})});if(!t.ok){const s=await t.json().catch(()=>({detail:"Failed to update password"}));throw new Error(s.detail||"Failed to update password")}return t.json()},async getAuditLogs(){const r=await fetch(`${Xt}/api/auth/audit`,{headers:$i()});if(!r.ok)throw new Error("Failed to load audit logs");return r.json()},async listDatasets(){const r=await fetch(`${Xt}/api/datasets`,{headers:$i()});if(!r.ok)throw new Error("Failed to fetch datasets");return r.json()},async loadDemoDataset(){const r=await fetch(`${Xt}/api/datasets/demo`,{headers:$i()});if(!r.ok)throw new Error("Failed to load demo dataset");return r.json()},async uploadCSV(r){const e=new FormData;e.append("file",r);const t=await fetch(`${Xt}/api/upload`,{method:"POST",headers:$i(),body:e});if(!t.ok){const s=await t.json().catch(()=>({detail:"Upload failed"}));throw new Error(s.detail||"Upload failed")}return t.json()},async deleteDataset(r){const e=await fetch(`${Xt}/api/datasets/${encodeURIComponent(r)}`,{method:"DELETE",headers:$i()});if(!e.ok){const t=await e.json().catch(()=>({detail:"Delete failed"}));throw new Error(t.detail||"Delete failed")}return e.json()},async resetDemoDataset(){const r=await fetch(`${Xt}/api/datasets/reset-demo`,{method:"POST",headers:$i()});if(!r.ok)throw new Error("Failed to reset demo dataset");return r.json()},async getSummary(r){const e=await fetch(`${Xt}/api/summary${qi(r)}`);if(!e.ok)throw new Error("Failed to fetch KPI summary");return e.json()},async getTrends(r){const e=await fetch(`${Xt}/api/sales/trends${qi(r)}`);if(!e.ok)throw new Error("Failed to fetch monthly trends");return e.json()},async getTopProducts(r,e=5){const t={...r,limit:e},s=await fetch(`${Xt}/api/products/top${qi(t)}`);if(!s.ok)throw new Error("Failed to fetch top products");return s.json()},async getRegional(r){const e=await fetch(`${Xt}/api/sales/by-region${qi(r)}`);if(!e.ok)throw new Error("Failed to fetch regional breakdown");return e.json()},async getCategory(r){const e=await fetch(`${Xt}/api/sales/by-category${qi(r)}`);if(!e.ok)throw new Error("Failed to fetch category breakdown");return e.json()},async getDataQuality(r){const e=r?`?dataset_id=${encodeURIComponent(r)}`:"",t=await fetch(`${Xt}/api/data-quality${e}`);if(!t.ok)throw new Error("Failed to fetch data quality summary");return t.json()},async getBusinessInsights(r){const e=await fetch(`${Xt}/api/insights${qi(r)}`);if(!e.ok)throw new Error("Failed to fetch business insights");return e.json()},async getRecords(r){const e=await fetch(`${Xt}/api/data/records${qi(r)}`);if(!e.ok)throw new Error("Failed to fetch sales records");return e.json()},async getExecutiveReport(r){const e=await fetch(`${Xt}/api/reports/summary${qi(r)}`);if(!e.ok)throw new Error("Failed to generate report");return e.json()},getExportUrl(r){return`${Xt}/api/data/export${qi(r)}`},getCleanedExportUrl(r){const e=r?`?dataset_id=${encodeURIComponent(r)}`:"";return`${Xt}/api/data/export${e}`}},D0=k.createContext(void 0),Zy=({children:r})=>{const[e,t]=k.useState(null),[s,l]=k.useState(!0);k.useEffect(()=>{(async()=>{if(!P0()){l(!1);return}try{const m=await gt.getMe();t(m)}catch{lc(null),t(null)}finally{l(!1)}})()},[]);const c=async(f,x)=>{const m=await gt.login(f,x);t({username:m.username,email:m.email,expires_at:m.expires_at})},d=async()=>{try{await gt.logout()}catch{}finally{lc(null),t(null)}},h=async(f,x)=>(await gt.changePassword(f,x)).message;return o.jsx(D0.Provider,{value:{admin:e,isAuthenticated:!!e,isLoading:s,login:c,logout:d,changePassword:h},children:r})};function po(){const r=k.useContext(D0);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r}const L0=k.createContext(void 0),Qy=({children:r})=>{const{isAuthenticated:e}=po(),[t,s]=k.useState(()=>localStorage.getItem("stratum_active_dataset")||localStorage.getItem("nexus_active_dataset")||"default-demo"),[l,c]=k.useState([]),[d,h]=k.useState(!1),[f,x]=k.useState(()=>localStorage.getItem("stratum_pref_currency")||localStorage.getItem("nexus_pref_currency")||"$"),[m,v]=k.useState(()=>localStorage.getItem("stratum_pref_date_format")||localStorage.getItem("nexus_pref_date_format")||"YYYY-MM-DD"),[y,w]=k.useState(()=>{const I=localStorage.getItem("stratum_pref_page_size")||localStorage.getItem("nexus_pref_page_size");return I?parseInt(I,10):20}),E=I=>{s(I),localStorage.setItem("stratum_active_dataset",I)},M=I=>{x(I),localStorage.setItem("stratum_pref_currency",I)},S=I=>{v(I),localStorage.setItem("stratum_pref_date_format",I)},g=I=>{w(I),localStorage.setItem("stratum_pref_page_size",I.toString())},T=k.useCallback(async()=>{h(!0);try{const P=(await gt.listDatasets()).map(O=>({...O,raw_row_count:O.raw_row_count??O.total_rows??0,valid_row_count:O.valid_row_count??O.valid_rows??0,is_demo:O.is_demo??O.is_default??!1}));c(P),P.length>0&&!P.some(O=>O.dataset_id===t)&&E(P[0].dataset_id)}catch{}finally{h(!1)}},[t]),C=async I=>{h(!0);try{const P=await gt.uploadCSV(I);return E(P.dataset_id),await T(),P}finally{h(!1)}};k.useEffect(()=>{T()},[e]);const A=I=>I==null||isNaN(I)?`${f}0.00`:`${f}${I.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,H=I=>{if(!I)return"";try{const P=I.split("-");if(P.length===3){const[O,L,N]=P;return m==="DD/MM/YYYY"?`${N}/${L}/${O}`:m==="MM/DD/YYYY"?`${L}/${N}/${O}`:`${O}-${L}-${N}`}return I}catch{return I}};return o.jsx(L0.Provider,{value:{activeDatasetId:t,setActiveDatasetId:E,datasets:l,reloadDatasets:T,uploadDataset:C,isLoadingDatasets:d,currency:f,setCurrency:M,dateFormat:m,setDateFormat:S,pageSize:y,setPageSize:g,formatCurrency:A,formatDate:H},children:r})};function lr(){const r=k.useContext(L0);if(!r)throw new Error("useApp must be used within an AppProvider");return r}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),I0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var e1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=k.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},f)=>k.createElement("svg",{ref:f,...e1,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:I0("lucide",l),...h},[...d.map(([x,m])=>k.createElement(x,m)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=(r,e)=>{const t=k.forwardRef(({className:s,...l},c)=>k.createElement(t1,{ref:c,iconNode:e,className:I0(`lucide-${Jy(r)}`,s),...l}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=Be("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=Be("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=Be("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Be("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=Be("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=Be("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=Be("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=Be("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=Be("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=Be("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=Be("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=Be("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=Be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=Be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=Be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=Be("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=Be("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=Be("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=Be("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=Be("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=Be("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=Be("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=Be("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=Be("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=Be("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=Be("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=Be("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=Be("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=Be("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Be("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=Be("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Be("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Be("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=Be("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=Be("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=Be("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=Be("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=Be("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=Be("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=Be("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Be("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=Be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=Be("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Be("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=Be("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=Be("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=Be("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=Be("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=Be("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=Be("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=Be("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Be("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=Be("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Be("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Be("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=Be("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=Be("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=Be("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Be("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=Be("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Be("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=Be("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=Be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),R1=({children:r})=>{const{isAuthenticated:e,isLoading:t}=po(),s=Xn();return t?o.jsxs("div",{className:"min-h-screen bg-[#030712] flex flex-col items-center justify-center text-slate-300",children:[o.jsx(Di,{className:"w-8 h-8 animate-spin text-cyan-400 mb-4"}),o.jsx("p",{className:"text-sm font-mono text-slate-400",children:"Verifying Administrator Session..."})]}):e?o.jsx(o.Fragment,{children:r}):o.jsx($d,{to:"/login",state:{from:s},replace:!0})},P1=()=>{var z;const{admin:r,logout:e}=po(),{activeDatasetId:t,setActiveDatasetId:s,datasets:l,reloadDatasets:c,uploadDataset:d}=lr(),h=ga(),f=Xn(),[x,m]=k.useState(!1),[v,y]=k.useState(!1),[w,E]=k.useState(!1),M=k.useRef(null),[S,g]=k.useState(!1),[T,C]=k.useState(null),[A,H]=k.useState(null),I=async Q=>{var de;const ee=(de=Q.target.files)==null?void 0:de[0];if(ee){C(null),H(null),g(!0);try{const le=await d(ee);H(`"${le.filename}" loaded!`),setTimeout(()=>{H(null),y(!1)},1500)}catch(le){C(le.message||"Upload failed")}finally{g(!1),M.current&&(M.current.value="")}}},P=async()=>{await e(),h("/login")},O=[{name:"Overview",path:"/app/overview",icon:O0,badge:"KPI"},{name:"Sales Analytics",path:"/app/analytics",icon:Zh},{name:"Data Explorer",path:"/app/explorer",icon:b1},{name:"Product Analysis",path:"/app/products",icon:vc},{name:"Data Quality",path:"/app/quality",icon:_c},{name:"Datasets",path:"/app/datasets",icon:zr},{name:"Executive Reports",path:"/app/reports",icon:gc},{name:"Settings",path:"/app/settings",icon:ix},{name:"Security & Audit",path:"/app/security",icon:ar}],L=O.find(Q=>f.pathname.startsWith(Q.path))||O[0],N=l.find(Q=>Q.dataset_id===t);return o.jsxs("div",{className:"min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[o.jsxs("header",{className:"h-16 border-b border-white/10 bg-[#070d1d]/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6",children:[o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsx("button",{onClick:()=>E(!w),className:"md:hidden text-slate-400 hover:text-white p-1",title:"Toggle Menu",children:w?o.jsx(tf,{className:"w-5 h-5"}):o.jsx(V0,{className:"w-5 h-5"})}),o.jsxs("div",{className:"flex items-center space-x-2.5",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20",children:o.jsx("div",{className:"w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center",children:o.jsx(xo,{className:"w-4 h-4 text-cyan-400"})})}),o.jsxs("span",{className:"font-bold tracking-tight text-lg text-white font-mono",children:["STRATUM ",o.jsx("span",{className:"text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-sans ml-1 border border-blue-500/30",children:"SaaS"})]})]}),o.jsx("span",{className:"text-slate-600 hidden sm:inline",children:"/"}),o.jsxs("div",{className:"hidden sm:flex items-center space-x-2 text-xs font-medium text-slate-400",children:[o.jsx("span",{children:"Workspace"}),o.jsx("span",{className:"text-slate-600",children:"/"}),o.jsx("span",{className:"text-slate-200",children:L.name})]})]}),o.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[o.jsxs("div",{className:"relative",children:[o.jsxs("button",{onClick:()=>y(!v),className:"flex items-center space-x-2 px-2.5 py-1.5 rounded-lg border border-slate-700/60 bg-slate-900/60 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-white transition",title:"Select Active Dataset",children:[o.jsx(zr,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{className:"truncate max-w-[120px] sm:max-w-[180px]",children:N?N.filename:t}),o.jsx(tx,{className:"w-3 h-3 text-slate-400"})]}),v&&o.jsxs("div",{className:"absolute right-0 mt-2 w-80 rounded-xl border border-white/10 bg-[#0b1329] p-3 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-100",children:[o.jsxs("div",{className:"px-1 py-1 border-b border-white/5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex justify-between items-center",children:[o.jsx("span",{children:"Available Datasets"}),o.jsx("button",{onClick:()=>c(),className:"text-[10px] text-cyan-400 hover:underline",children:"Refresh"})]}),A&&o.jsxs("div",{className:"my-2 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center space-x-1.5",children:[o.jsx(_i,{className:"w-3.5 h-3.5 text-emerald-400 flex-shrink-0"}),o.jsx("span",{className:"truncate",children:A})]}),T&&o.jsxs("div",{className:"my-2 p-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-[11px] flex items-center space-x-1.5",children:[o.jsx(ii,{className:"w-3.5 h-3.5 text-red-400 flex-shrink-0"}),o.jsx("span",{className:"truncate",children:T})]}),o.jsx("div",{className:"max-h-48 overflow-y-auto py-1 space-y-1 my-1",children:l.length===0?o.jsx("p",{className:"px-2 py-2 text-xs text-slate-400 italic",children:"No datasets loaded."}):l.map(Q=>o.jsxs("button",{onClick:()=>{s(Q.dataset_id),y(!1)},className:`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition ${Q.dataset_id===t?"bg-blue-600/20 text-cyan-300 border border-cyan-500/30":"text-slate-300 hover:bg-white/5"}`,children:[o.jsx("span",{className:"truncate pr-2 font-mono text-[11px]",children:Q.filename}),o.jsxs("span",{className:"text-[10px] text-slate-500 font-sans",children:[(Q.valid_row_count??Q.valid_rows??0).toLocaleString()," rows"]})]},Q.dataset_id))}),o.jsx("input",{ref:M,type:"file",accept:".csv",className:"hidden",onChange:I}),o.jsx("button",{type:"button",onClick:()=>{var Q;return(Q=M.current)==null?void 0:Q.click()},disabled:S,className:"w-full mt-2 py-2 px-3 rounded-lg border border-dashed border-cyan-500/40 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-300 text-xs font-medium flex items-center justify-center space-x-2 transition disabled:opacity-50",children:S?o.jsxs(o.Fragment,{children:[o.jsx(Di,{className:"w-3.5 h-3.5 animate-spin"}),o.jsx("span",{children:"Validating & Ingesting CSV..."})]}):o.jsxs(o.Fragment,{children:[o.jsx(Qh,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Upload New CSV File"})]})}),o.jsx("div",{className:"pt-2 mt-2 border-t border-white/5 text-center",children:o.jsx(Pi,{to:"/app/datasets",onClick:()=>y(!1),className:"text-xs text-slate-400 hover:text-cyan-300 block py-1 font-medium transition",children:"+ Manage & Upload Datasets"})})]})]}),o.jsxs(Pi,{to:"/",className:"hidden lg:flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg border border-transparent hover:border-white/10 transition",children:[o.jsx("span",{children:"Landing Page"}),o.jsx(Kd,{className:"w-3 h-3 text-slate-400"})]}),o.jsxs("div",{className:"relative",children:[o.jsxs("button",{onClick:()=>m(!x),className:"flex items-center space-x-2 px-2.5 py-1.5 rounded-lg border border-white/10 bg-slate-900/60 hover:border-white/20 transition text-xs",children:[o.jsx("div",{className:"w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white uppercase",children:((z=r==null?void 0:r.username)==null?void 0:z[0])||"A"}),o.jsx("span",{className:"text-slate-200 font-medium hidden sm:inline",children:(r==null?void 0:r.username)||"Admin"}),o.jsx(tx,{className:"w-3 h-3 text-slate-400"})]}),x&&o.jsxs("div",{className:"absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-[#0b1329] p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-100",onMouseLeave:()=>m(!1),children:[o.jsxs("div",{className:"px-3 py-2 border-b border-white/5",children:[o.jsx("p",{className:"text-xs font-semibold text-white",children:r==null?void 0:r.username}),o.jsx("p",{className:"text-[11px] text-slate-400 truncate",children:r==null?void 0:r.email}),o.jsx("span",{className:"inline-block mt-1 px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono",children:"System Administrator"})]}),o.jsxs("div",{className:"py-1",children:[o.jsxs(Pi,{to:"/app/security",onClick:()=>m(!1),className:"w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-white/5 flex items-center space-x-2",children:[o.jsx(ar,{className:"w-3.5 h-3.5 text-blue-400"}),o.jsx("span",{children:"Security & Audit"})]}),o.jsxs(Pi,{to:"/app/settings",onClick:()=>m(!1),className:"w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-white/5 flex items-center space-x-2",children:[o.jsx(ix,{className:"w-3.5 h-3.5 text-slate-400"}),o.jsx("span",{children:"Workspace Settings"})]})]}),o.jsx("div",{className:"pt-1 border-t border-white/5",children:o.jsxs("button",{onClick:P,className:"w-full text-left px-3 py-1.5 rounded-lg text-xs text-red-400 hover:bg-red-500/10 flex items-center space-x-2 transition",children:[o.jsx(B0,{className:"w-3.5 h-3.5 text-red-400"}),o.jsx("span",{children:"Sign Out"})]})})]})]})]})]}),o.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[o.jsxs("aside",{className:`w-64 border-r border-white/10 bg-[#050b18]/95 flex flex-col justify-between py-4 px-3 flex-shrink-0 transition-transform md:translate-x-0 ${w?"fixed inset-y-0 left-0 z-50 translate-x-0 pt-20":"hidden md:flex"}`,children:[o.jsxs("div",{className:"space-y-1",children:[o.jsx("div",{className:"px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500",children:"Intelligence Modules"}),O.map(Q=>{const ee=Q.icon;return o.jsxs(Pi,{to:Q.path,onClick:()=>E(!1),className:({isActive:de})=>`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition ${de?"bg-blue-600/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-blue-500/10 font-semibold":"text-slate-400 hover:text-slate-200 hover:bg-white/5"}`,children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx(ee,{className:"w-4 h-4 text-cyan-400/80"}),o.jsx("span",{children:Q.name})]}),Q.badge&&o.jsx("span",{className:"px-1.5 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono",children:Q.badge})]},Q.path)})]}),o.jsxs("div",{className:"p-3 rounded-xl border border-white/5 bg-slate-900/40 text-[11px] text-slate-400",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-emerald-400 font-mono text-[10px] mb-1",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),o.jsx("span",{children:"FastAPI 0.115 Engine Online"})]}),o.jsx("p",{className:"text-[10px] text-slate-500 leading-relaxed",children:"Revenue = Q × P. All data mathematically validated."})]})]}),o.jsx("main",{className:"flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[#030712] via-[#040817] to-[#02050e]",children:o.jsx("div",{className:"max-w-7xl mx-auto space-y-6",children:o.jsx(xy,{})})})]})]})},D1=({onOpenAnalytics:r,isStreamlitRunning:e,isFastApiRunning:t})=>{const[s,l]=k.useState(!1),[c,d]=k.useState(!1);k.useEffect(()=>{const f=()=>{l(window.scrollY>20)};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]);const h=[{label:"Home",href:"#hero"},{label:"Features",href:"#features"},{label:"Preview",href:"#preview"},{label:"Architecture",href:"#about"}];return o.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${s?"bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3.5":"bg-transparent py-5"}`,children:[o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("a",{href:"#hero",className:"flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1",children:[o.jsx("div",{className:"relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all",children:o.jsx("div",{className:"w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center",children:o.jsx("span",{className:"font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-base",children:"S"})})}),o.jsxs("div",{className:"flex flex-col",children:[o.jsxs("span",{className:"font-extrabold text-lg sm:text-xl tracking-wider text-white font-mono flex items-center gap-2",children:["STRATUM",o.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-sans font-semibold border border-blue-500/30",children:"v1.0"})]}),o.jsx("span",{className:"text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-normal -mt-0.5",children:"Sales Intelligence Platform"})]})]}),o.jsx("nav",{className:"hidden md:flex items-center gap-1 glass-panel rounded-full px-5 py-1.5 border border-white/10",children:h.map(f=>o.jsx("a",{href:f.href,className:"px-4 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500",children:f.label},f.label))}),o.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[o.jsxs("div",{className:`hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${t?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-slate-800/60 border-slate-700/50 text-slate-400"}`,title:t?"FastAPI active on port 8000":"FastAPI offline",children:[o.jsx(G0,{className:"w-3 h-3"}),o.jsx("span",{children:t?"API: 8000":"API: Standby"})]}),o.jsxs("div",{className:`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${e?"bg-cyan-500/10 border-cyan-500/30 text-cyan-400":"bg-slate-800/60 border-slate-700/50 text-slate-400"}`,title:e?"Streamlit app active on port 8501":"Streamlit offline",children:[o.jsx(U0,{className:"w-3 h-3"}),o.jsx("span",{children:e?"Streamlit: 8501":"Streamlit: Standby"})]}),o.jsxs("button",{onClick:r,className:"py-2.5 px-4 lg:px-5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400",children:["Explore Analytics",o.jsx(Fr,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"flex sm:hidden items-center gap-2",children:[o.jsxs("button",{onClick:r,className:"py-2 px-3 rounded-lg text-xs font-semibold bg-blue-600 text-white flex items-center gap-1",children:["Launch",o.jsx(Fr,{className:"w-3.5 h-3.5"})]}),o.jsx("button",{onClick:()=>d(!c),className:"p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500","aria-label":"Toggle mobile menu",children:c?o.jsx(tf,{className:"w-6 h-6"}):o.jsx(V0,{className:"w-6 h-6"})})]})]})}),c&&o.jsxs("div",{className:"sm:hidden glass-panel border-b border-white/10 mt-3 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2",children:[h.map(f=>o.jsx("a",{href:f.href,onClick:()=>d(!1),className:"block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white",children:f.label},f.label)),o.jsx("div",{className:"pt-3 border-t border-white/10",children:o.jsxs("button",{onClick:()=>{d(!1),r()},className:"w-full py-2.5 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center gap-2",children:["Explore Analytics (App)",o.jsx(Fr,{className:"w-4 h-4"})]})})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="170",L1=0,rx=1,I1=2,$0=1,U1=2,er=3,Br=0,kn=1,tr=2,jr=0,ra=1,sx=2,ax=3,ox=4,k1=5,ds=100,F1=101,j1=102,O1=103,z1=104,B1=200,V1=201,H1=202,G1=203,Zd=204,Qd=205,W1=206,X1=207,$1=208,q1=209,Y1=210,K1=211,Z1=212,Q1=213,J1=214,Jd=0,eh=1,th=2,la=3,nh=4,ih=5,rh=6,sh=7,q0=0,eS=1,tS=2,Or=0,nS=1,iS=2,rS=3,sS=4,aS=5,oS=6,lS=7,Y0=300,ca=301,ua=302,ah=303,oh=304,Sc=306,lh=1e3,fs=1001,ch=1002,yi=1003,cS=1004,Cl=1005,Li=1006,pd=1007,ps=1008,or=1009,K0=1010,Z0=1011,uo=1012,rf=1013,xs=1014,nr=1015,go=1016,sf=1017,af=1018,da=1020,Q0=35902,J0=1021,eg=1022,gi=1023,tg=1024,ng=1025,sa=1026,ha=1027,ig=1028,of=1029,rg=1030,lf=1031,cf=1033,tc=33776,nc=33777,ic=33778,rc=33779,uh=35840,dh=35841,hh=35842,fh=35843,ph=36196,mh=37492,xh=37496,gh=37808,vh=37809,_h=37810,yh=37811,Sh=37812,wh=37813,Mh=37814,Eh=37815,bh=37816,Th=37817,Nh=37818,Ah=37819,Ch=37820,Rh=37821,sc=36492,Ph=36494,Dh=36495,sg=36283,Lh=36284,Ih=36285,Uh=36286,uS=3200,dS=3201,ag=0,hS=1,kr="",ni="srgb",va="srgb-linear",wc="linear",Lt="srgb",Vs=7680,lx=519,fS=512,pS=513,mS=514,og=515,xS=516,gS=517,vS=518,_S=519,cx=35044,ux="300 es",ir=2e3,cc=2001;class _a{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(t);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],md=Math.PI/180,kh=180/Math.PI;function vo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]).toLowerCase()}function In(r,e,t){return Math.max(e,Math.min(t,r))}function yS(r,e){return(r%e+e)%e}function xd(r,e,t){return(1-t)*r+t*e}function to(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6],this.y=l[1]*t+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(In(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),l=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,s,l,c,d,h,f,x){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,l,c,d,h,f,x)}set(e,t,s,l,c,d,h,f,x){const m=this.elements;return m[0]=e,m[1]=l,m[2]=h,m[3]=t,m[4]=c,m[5]=f,m[6]=s,m[7]=d,m[8]=x,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,l=t.elements,c=this.elements,d=s[0],h=s[3],f=s[6],x=s[1],m=s[4],v=s[7],y=s[2],w=s[5],E=s[8],M=l[0],S=l[3],g=l[6],T=l[1],C=l[4],A=l[7],H=l[2],I=l[5],P=l[8];return c[0]=d*M+h*T+f*H,c[3]=d*S+h*C+f*I,c[6]=d*g+h*A+f*P,c[1]=x*M+m*T+v*H,c[4]=x*S+m*C+v*I,c[7]=x*g+m*A+v*P,c[2]=y*M+w*T+E*H,c[5]=y*S+w*C+E*I,c[8]=y*g+w*A+E*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],f=e[6],x=e[7],m=e[8];return t*d*m-t*h*x-s*c*m+s*h*f+l*c*x-l*d*f}invert(){const e=this.elements,t=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],f=e[6],x=e[7],m=e[8],v=m*d-h*x,y=h*f-m*c,w=x*c-d*f,E=t*v+s*y+l*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(l*x-m*s)*M,e[2]=(h*s-l*d)*M,e[3]=y*M,e[4]=(m*t-l*f)*M,e[5]=(l*c-h*t)*M,e[6]=w*M,e[7]=(s*f-x*t)*M,e[8]=(d*t-s*c)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,l,c,d,h){const f=Math.cos(c),x=Math.sin(c);return this.set(s*f,s*x,-s*(f*d+x*h)+d+e,-l*x,l*f,-l*(-x*d+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(gd.makeScale(e,t)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,t){return this.premultiply(gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let l=0;l<9;l++)if(t[l]!==s[l])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new ut;function lg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function uc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function SS(){const r=uc("canvas");return r.style.display="block",r}const dx={};function oo(r){r in dx||(dx[r]=!0,console.warn(r))}function wS(r,e,t){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:s()}}setTimeout(c,t)})}function MS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ES(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:va,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(r.r=aa(r.r),r.g=aa(r.g),r.b=aa(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===kr?wc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function rr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function aa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const hx=[.64,.33,.3,.6,.15,.06],fx=[.2126,.7152,.0722],px=[.3127,.329],mx=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xx=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[va]:{primaries:hx,whitePoint:px,transfer:wc,toXYZ:mx,fromXYZ:xx,luminanceCoefficients:fx,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:hx,whitePoint:px,transfer:Lt,toXYZ:mx,fromXYZ:xx,luminanceCoefficients:fx,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let Hs;class bS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=uc("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=rr(c[d]/255)*255;return s.putImageData(l,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(rr(t[s]/255)*255):t[s]=rr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TS=0;class cg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(vd(l[d].image)):c.push(vd(l[d]))}else c=vd(l);s.url=c}return t||(e.images[this.uuid]=s),s}}function vd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NS=0;class Fn extends _a{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,s=fs,l=fs,c=Li,d=ps,h=gi,f=or,x=Fn.DEFAULT_ANISOTROPY,m=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=vo(),this.name="",this.source=new cg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=x,this.format=h,this.internalFormat=null,this.type=f,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case fs:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case fs:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Y0;Fn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,s=0,l=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,l){return this.x=e,this.y=t,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*t+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*t+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*t+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,l,c;const f=e.elements,x=f[0],m=f[4],v=f[8],y=f[1],w=f[5],E=f[9],M=f[2],S=f[6],g=f[10];if(Math.abs(m-y)<.01&&Math.abs(v-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+y)<.1&&Math.abs(v+M)<.1&&Math.abs(E+S)<.1&&Math.abs(x+w+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(x+1)/2,A=(w+1)/2,H=(g+1)/2,I=(m+y)/4,P=(v+M)/4,O=(E+S)/4;return C>A&&C>H?C<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(C),l=I/s,c=P/s):A>H?A<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),s=I/l,c=O/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=P/c,l=O/c),this.set(s,l,c,t),this}let T=Math.sqrt((S-E)*(S-E)+(v-M)*(v-M)+(y-m)*(y-m));return Math.abs(T)<.001&&(T=1),this.x=(S-E)/T,this.y=(v-M)/T,this.z=(y-m)/T,this.w=Math.acos((x+w+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AS extends _a{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const l={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Fn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=t,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends AS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class ug extends Fn{constructor(e=null,t=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CS extends Fn{constructor(e=null,t=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o{constructor(e=0,t=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=l}static slerpFlat(e,t,s,l,c,d,h){let f=s[l+0],x=s[l+1],m=s[l+2],v=s[l+3];const y=c[d+0],w=c[d+1],E=c[d+2],M=c[d+3];if(h===0){e[t+0]=f,e[t+1]=x,e[t+2]=m,e[t+3]=v;return}if(h===1){e[t+0]=y,e[t+1]=w,e[t+2]=E,e[t+3]=M;return}if(v!==M||f!==y||x!==w||m!==E){let S=1-h;const g=f*y+x*w+m*E+v*M,T=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const H=Math.sqrt(C),I=Math.atan2(H,g*T);S=Math.sin(S*I)/H,h=Math.sin(h*I)/H}const A=h*T;if(f=f*S+y*A,x=x*S+w*A,m=m*S+E*A,v=v*S+M*A,S===1-h){const H=1/Math.sqrt(f*f+x*x+m*m+v*v);f*=H,x*=H,m*=H,v*=H}}e[t]=f,e[t+1]=x,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,l,c,d){const h=s[l],f=s[l+1],x=s[l+2],m=s[l+3],v=c[d],y=c[d+1],w=c[d+2],E=c[d+3];return e[t]=h*E+m*v+f*w-x*y,e[t+1]=f*E+m*y+x*v-h*w,e[t+2]=x*E+m*w+h*y-f*v,e[t+3]=m*E-h*v-f*y-x*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,l){return this._x=e,this._y=t,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,f=Math.sin,x=h(s/2),m=h(l/2),v=h(c/2),y=f(s/2),w=f(l/2),E=f(c/2);switch(d){case"XYZ":this._x=y*m*v+x*w*E,this._y=x*w*v-y*m*E,this._z=x*m*E+y*w*v,this._w=x*m*v-y*w*E;break;case"YXZ":this._x=y*m*v+x*w*E,this._y=x*w*v-y*m*E,this._z=x*m*E-y*w*v,this._w=x*m*v+y*w*E;break;case"ZXY":this._x=y*m*v-x*w*E,this._y=x*w*v+y*m*E,this._z=x*m*E+y*w*v,this._w=x*m*v-y*w*E;break;case"ZYX":this._x=y*m*v-x*w*E,this._y=x*w*v+y*m*E,this._z=x*m*E-y*w*v,this._w=x*m*v+y*w*E;break;case"YZX":this._x=y*m*v+x*w*E,this._y=x*w*v+y*m*E,this._z=x*m*E-y*w*v,this._w=x*m*v-y*w*E;break;case"XZY":this._x=y*m*v-x*w*E,this._y=x*w*v-y*m*E,this._z=x*m*E+y*w*v,this._w=x*m*v+y*w*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],l=t[4],c=t[8],d=t[1],h=t[5],f=t[9],x=t[2],m=t[6],v=t[10],y=s+h+v;if(y>0){const w=.5/Math.sqrt(y+1);this._w=.25/w,this._x=(m-f)*w,this._y=(c-x)*w,this._z=(d-l)*w}else if(s>h&&s>v){const w=2*Math.sqrt(1+s-h-v);this._w=(m-f)/w,this._x=.25*w,this._y=(l+d)/w,this._z=(c+x)/w}else if(h>v){const w=2*Math.sqrt(1+h-s-v);this._w=(c-x)/w,this._x=(l+d)/w,this._y=.25*w,this._z=(f+m)/w}else{const w=2*Math.sqrt(1+v-s-h);this._w=(d-l)/w,this._x=(c+x)/w,this._y=(f+m)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,t/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,l=e._y,c=e._z,d=e._w,h=t._x,f=t._y,x=t._z,m=t._w;return this._x=s*m+d*h+l*x-c*f,this._y=l*m+d*f+c*h-s*x,this._z=c*m+d*x+s*f-l*h,this._w=d*m-s*h-l*f-c*x,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=c,this;const f=1-h*h;if(f<=Number.EPSILON){const w=1-t;return this._w=w*d+t*this._w,this._x=w*s+t*this._x,this._y=w*l+t*this._y,this._z=w*c+t*this._z,this.normalize(),this}const x=Math.sqrt(f),m=Math.atan2(x,h),v=Math.sin((1-t)*m)/x,y=Math.sin(t*m)/x;return this._w=d*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,s=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[3]*s+c[6]*l,this.y=c[1]*t+c[4]*s+c[7]*l,this.z=c[2]*t+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*t+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*t+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*t+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*t+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const t=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,f=e.w,x=2*(d*l-h*s),m=2*(h*t-c*l),v=2*(c*s-d*t);return this.x=t+f*x+d*v-h*m,this.y=s+f*m+h*x-c*v,this.z=l+f*v+c*m-d*x,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*l,this.y=c[1]*t+c[5]*s+c[9]*l,this.z=c[2]*t+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,l=e.y,c=e.z,d=t.x,h=t.y,f=t.z;return this.x=l*f-c*h,this.y=c*d-s*f,this.z=s*h-l*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(In(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return t*t+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const l=Math.sin(t)*e;return this.x=l*Math.sin(s),this.y=Math.cos(t)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=l,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _d=new Z,gx=new _o;class yo{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,fi):fi.fromBufferAttribute(c,d),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rl.copy(s.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),Pl.subVectors(this.max,no),Gs.subVectors(e.a,no),Ws.subVectors(e.b,no),Xs.subVectors(e.c,no),Rr.subVectors(Ws,Gs),Pr.subVectors(Xs,Ws),is.subVectors(Gs,Xs);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-is.z,is.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,is.z,0,-is.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-is.y,is.x,0];return!yd(t,Gs,Ws,Xs,Pl)||(t=[1,0,0,0,1,0,0,0,1],!yd(t,Gs,Ws,Xs,Pl))?!1:(Dl.crossVectors(Rr,Pr),t=[Dl.x,Dl.y,Dl.z],yd(t,Gs,Ws,Xs,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],fi=new Z,Rl=new yo,Gs=new Z,Ws=new Z,Xs=new Z,Rr=new Z,Pr=new Z,is=new Z,no=new Z,Pl=new Z,Dl=new Z,rs=new Z;function yd(r,e,t,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){rs.fromArray(r,c);const h=l.x*Math.abs(rs.x)+l.y*Math.abs(rs.y)+l.z*Math.abs(rs.z),f=e.dot(rs),x=t.dot(rs),m=s.dot(rs);if(Math.max(-Math.max(f,x,m),Math.min(f,x,m))>h)return!1}return!0}const RS=new yo,io=new Z,Sd=new Z;class Mc{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):RS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),l=(s-this.radius)*.5;this.center.addScaledVector(io,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Sd)),this.expandByPoint(io.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new Z,wd=new Z,Ll=new Z,Dr=new Z,Md=new Z,Il=new Z,Ed=new Z;class dg{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,s,l){wd.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(wd);const c=e.distanceTo(t)*.5,d=-this.direction.dot(Ll),h=Dr.dot(this.direction),f=-Dr.dot(Ll),x=Dr.lengthSq(),m=Math.abs(1-d*d);let v,y,w,E;if(m>0)if(v=d*f-h,y=d*h-f,E=c*m,v>=0)if(y>=-E)if(y<=E){const M=1/m;v*=M,y*=M,w=v*(v+d*y+2*h)+y*(d*v+y+2*f)+x}else y=c,v=Math.max(0,-(d*y+h)),w=-v*v+y*(y+2*f)+x;else y=-c,v=Math.max(0,-(d*y+h)),w=-v*v+y*(y+2*f)+x;else y<=-E?(v=Math.max(0,-(-d*c+h)),y=v>0?-c:Math.min(Math.max(-c,-f),c),w=-v*v+y*(y+2*f)+x):y<=E?(v=0,y=Math.min(Math.max(-c,-f),c),w=y*(y+2*f)+x):(v=Math.max(0,-(d*c+h)),y=v>0?c:Math.min(Math.max(-c,-f),c),w=-v*v+y*(y+2*f)+x);else y=d>0?-c:c,v=Math.max(0,-(d*y+h)),w=-v*v+y*(y+2*f)+x;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(wd).addScaledVector(Ll,y),w}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,f=s+d;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,l,c,d,h,f;const x=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,y=this.origin;return x>=0?(s=(e.min.x-y.x)*x,l=(e.max.x-y.x)*x):(s=(e.max.x-y.x)*x,l=(e.min.x-y.x)*x),m>=0?(c=(e.min.y-y.y)*m,d=(e.max.y-y.y)*m):(c=(e.max.y-y.y)*m,d=(e.min.y-y.y)*m),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-y.z)*v,f=(e.max.z-y.z)*v):(h=(e.max.z-y.z)*v,f=(e.min.z-y.z)*v),s>f||h>l)||((h>s||s!==s)&&(s=h),(f<l||l!==l)&&(l=f),l<0)?null:this.at(s>=0?s:l,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,s,l,c){Md.subVectors(t,e),Il.subVectors(s,e),Ed.crossVectors(Md,Il);let d=this.direction.dot(Ed),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Dr.subVectors(this.origin,e);const f=h*this.direction.dot(Il.crossVectors(Dr,Il));if(f<0)return null;const x=h*this.direction.dot(Md.cross(Dr));if(x<0||f+x>d)return null;const m=-h*Dr.dot(Ed);return m<0?null:this.at(m/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,s,l,c,d,h,f,x,m,v,y,w,E,M,S){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,l,c,d,h,f,x,m,v,y,w,E,M,S)}set(e,t,s,l,c,d,h,f,x,m,v,y,w,E,M,S){const g=this.elements;return g[0]=e,g[4]=t,g[8]=s,g[12]=l,g[1]=c,g[5]=d,g[9]=h,g[13]=f,g[2]=x,g[6]=m,g[10]=v,g[14]=y,g[3]=w,g[7]=E,g[11]=M,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,l=1/$s.setFromMatrixColumn(e,0).length(),c=1/$s.setFromMatrixColumn(e,1).length(),d=1/$s.setFromMatrixColumn(e,2).length();return t[0]=s[0]*l,t[1]=s[1]*l,t[2]=s[2]*l,t[3]=0,t[4]=s[4]*c,t[5]=s[5]*c,t[6]=s[6]*c,t[7]=0,t[8]=s[8]*d,t[9]=s[9]*d,t[10]=s[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),f=Math.cos(l),x=Math.sin(l),m=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=d*m,w=d*v,E=h*m,M=h*v;t[0]=f*m,t[4]=-f*v,t[8]=x,t[1]=w+E*x,t[5]=y-M*x,t[9]=-h*f,t[2]=M-y*x,t[6]=E+w*x,t[10]=d*f}else if(e.order==="YXZ"){const y=f*m,w=f*v,E=x*m,M=x*v;t[0]=y+M*h,t[4]=E*h-w,t[8]=d*x,t[1]=d*v,t[5]=d*m,t[9]=-h,t[2]=w*h-E,t[6]=M+y*h,t[10]=d*f}else if(e.order==="ZXY"){const y=f*m,w=f*v,E=x*m,M=x*v;t[0]=y-M*h,t[4]=-d*v,t[8]=E+w*h,t[1]=w+E*h,t[5]=d*m,t[9]=M-y*h,t[2]=-d*x,t[6]=h,t[10]=d*f}else if(e.order==="ZYX"){const y=d*m,w=d*v,E=h*m,M=h*v;t[0]=f*m,t[4]=E*x-w,t[8]=y*x+M,t[1]=f*v,t[5]=M*x+y,t[9]=w*x-E,t[2]=-x,t[6]=h*f,t[10]=d*f}else if(e.order==="YZX"){const y=d*f,w=d*x,E=h*f,M=h*x;t[0]=f*m,t[4]=M-y*v,t[8]=E*v+w,t[1]=v,t[5]=d*m,t[9]=-h*m,t[2]=-x*m,t[6]=w*v+E,t[10]=y-M*v}else if(e.order==="XZY"){const y=d*f,w=d*x,E=h*f,M=h*x;t[0]=f*m,t[4]=-v,t[8]=x*m,t[1]=y*v+M,t[5]=d*m,t[9]=w*v-E,t[2]=E*v-w,t[6]=h*m,t[10]=M*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PS,e,DS)}lookAt(e,t,s){const l=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Lr.crossVectors(s,Vn),Lr.lengthSq()===0&&(Math.abs(s.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Lr.crossVectors(s,Vn)),Lr.normalize(),Ul.crossVectors(Vn,Lr),l[0]=Lr.x,l[4]=Ul.x,l[8]=Vn.x,l[1]=Lr.y,l[5]=Ul.y,l[9]=Vn.y,l[2]=Lr.z,l[6]=Ul.z,l[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,l=t.elements,c=this.elements,d=s[0],h=s[4],f=s[8],x=s[12],m=s[1],v=s[5],y=s[9],w=s[13],E=s[2],M=s[6],S=s[10],g=s[14],T=s[3],C=s[7],A=s[11],H=s[15],I=l[0],P=l[4],O=l[8],L=l[12],N=l[1],z=l[5],Q=l[9],ee=l[13],de=l[2],le=l[6],oe=l[10],ce=l[14],B=l[3],he=l[7],Y=l[11],j=l[15];return c[0]=d*I+h*N+f*de+x*B,c[4]=d*P+h*z+f*le+x*he,c[8]=d*O+h*Q+f*oe+x*Y,c[12]=d*L+h*ee+f*ce+x*j,c[1]=m*I+v*N+y*de+w*B,c[5]=m*P+v*z+y*le+w*he,c[9]=m*O+v*Q+y*oe+w*Y,c[13]=m*L+v*ee+y*ce+w*j,c[2]=E*I+M*N+S*de+g*B,c[6]=E*P+M*z+S*le+g*he,c[10]=E*O+M*Q+S*oe+g*Y,c[14]=E*L+M*ee+S*ce+g*j,c[3]=T*I+C*N+A*de+H*B,c[7]=T*P+C*z+A*le+H*he,c[11]=T*O+C*Q+A*oe+H*Y,c[15]=T*L+C*ee+A*ce+H*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],f=e[9],x=e[13],m=e[2],v=e[6],y=e[10],w=e[14],E=e[3],M=e[7],S=e[11],g=e[15];return E*(+c*f*v-l*x*v-c*h*y+s*x*y+l*h*w-s*f*w)+M*(+t*f*w-t*x*y+c*d*y-l*d*w+l*x*m-c*f*m)+S*(+t*x*v-t*h*w-c*d*v+s*d*w+c*h*m-s*x*m)+g*(-l*h*m-t*f*v+t*h*y+l*d*v-s*d*y+s*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=t,l[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],f=e[6],x=e[7],m=e[8],v=e[9],y=e[10],w=e[11],E=e[12],M=e[13],S=e[14],g=e[15],T=v*S*x-M*y*x+M*f*w-h*S*w-v*f*g+h*y*g,C=E*y*x-m*S*x-E*f*w+d*S*w+m*f*g-d*y*g,A=m*M*x-E*v*x+E*h*w-d*M*w-m*h*g+d*v*g,H=E*v*f-m*M*f-E*h*y+d*M*y+m*h*S-d*v*S,I=t*T+s*C+l*A+c*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=T*P,e[1]=(M*y*c-v*S*c-M*l*w+s*S*w+v*l*g-s*y*g)*P,e[2]=(h*S*c-M*f*c+M*l*x-s*S*x-h*l*g+s*f*g)*P,e[3]=(v*f*c-h*y*c-v*l*x+s*y*x+h*l*w-s*f*w)*P,e[4]=C*P,e[5]=(m*S*c-E*y*c+E*l*w-t*S*w-m*l*g+t*y*g)*P,e[6]=(E*f*c-d*S*c-E*l*x+t*S*x+d*l*g-t*f*g)*P,e[7]=(d*y*c-m*f*c+m*l*x-t*y*x-d*l*w+t*f*w)*P,e[8]=A*P,e[9]=(E*v*c-m*M*c-E*s*w+t*M*w+m*s*g-t*v*g)*P,e[10]=(d*M*c-E*h*c+E*s*x-t*M*x-d*s*g+t*h*g)*P,e[11]=(m*h*c-d*v*c-m*s*x+t*v*x+d*s*w-t*h*w)*P,e[12]=H*P,e[13]=(m*M*l-E*v*l+E*s*y-t*M*y-m*s*S+t*v*S)*P,e[14]=(E*h*l-d*M*l-E*s*f+t*M*f+d*s*S-t*h*S)*P,e[15]=(d*v*l-m*h*l+m*s*f-t*v*f-d*s*y+t*h*y)*P,this}scale(e){const t=this.elements,s=e.x,l=e.y,c=e.z;return t[0]*=s,t[4]*=l,t[8]*=c,t[1]*=s,t[5]*=l,t[9]*=c,t[2]*=s,t[6]*=l,t[10]*=c,t[3]*=s,t[7]*=l,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,l))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),l=Math.sin(t),c=1-s,d=e.x,h=e.y,f=e.z,x=c*d,m=c*h;return this.set(x*d+s,x*h-l*f,x*f+l*h,0,x*h+l*f,m*h+s,m*f-l*d,0,x*f-l*h,m*f+l*d,c*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,t,l,1,0,0,0,0,1),this}compose(e,t,s){const l=this.elements,c=t._x,d=t._y,h=t._z,f=t._w,x=c+c,m=d+d,v=h+h,y=c*x,w=c*m,E=c*v,M=d*m,S=d*v,g=h*v,T=f*x,C=f*m,A=f*v,H=s.x,I=s.y,P=s.z;return l[0]=(1-(M+g))*H,l[1]=(w+A)*H,l[2]=(E-C)*H,l[3]=0,l[4]=(w-A)*I,l[5]=(1-(y+g))*I,l[6]=(S+T)*I,l[7]=0,l[8]=(E+C)*P,l[9]=(S-T)*P,l[10]=(1-(y+M))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,t,s){const l=this.elements;let c=$s.set(l[0],l[1],l[2]).length();const d=$s.set(l[4],l[5],l[6]).length(),h=$s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const x=1/c,m=1/d,v=1/h;return pi.elements[0]*=x,pi.elements[1]*=x,pi.elements[2]*=x,pi.elements[4]*=m,pi.elements[5]*=m,pi.elements[6]*=m,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,t.setFromRotationMatrix(pi),s.x=c,s.y=d,s.z=h,this}makePerspective(e,t,s,l,c,d,h=ir){const f=this.elements,x=2*c/(t-e),m=2*c/(s-l),v=(t+e)/(t-e),y=(s+l)/(s-l);let w,E;if(h===ir)w=-(d+c)/(d-c),E=-2*d*c/(d-c);else if(h===cc)w=-d/(d-c),E=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=x,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=m,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=w,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,s,l,c,d,h=ir){const f=this.elements,x=1/(t-e),m=1/(s-l),v=1/(d-c),y=(t+e)*x,w=(s+l)*m;let E,M;if(h===ir)E=(d+c)*v,M=-2*v;else if(h===cc)E=c*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*x,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-w,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let l=0;l<16;l++)if(t[l]!==s[l])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const $s=new Z,pi=new Vt,PS=new Z(0,0,0),DS=new Z(1,1,1),Lr=new Z,Ul=new Z,Vn=new Z,vx=new Vt,_x=new _o;class Ui{constructor(e=0,t=0,s=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,l=this._order){return this._x=e,this._y=t,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],x=l[5],m=l[9],v=l[2],y=l[6],w=l[10];switch(t){case"XYZ":this._y=Math.asin(In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,w),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,x),this._z=0);break;case"YXZ":this._x=Math.asin(-In(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,w),this._z=Math.atan2(f,x)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(In(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,w),this._z=Math.atan2(-d,x)):(this._y=0,this._z=Math.atan2(f,c));break;case"ZYX":this._y=Math.asin(-In(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,w),this._z=Math.atan2(f,c)):(this._x=0,this._z=Math.atan2(-d,x));break;case"YZX":this._z=Math.asin(In(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,w));break;case"XZY":this._z=Math.asin(-In(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,x),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-m,w),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return vx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vx,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _x.setFromEuler(this),this.setFromQuaternion(_x,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class hg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LS=0;const yx=new Z,qs=new _o,Zi=new Vt,kl=new Z,ro=new Z,IS=new Z,US=new _o,Sx=new Z(1,0,0),wx=new Z(0,1,0),Mx=new Z(0,0,1),Ex={type:"added"},kS={type:"removed"},Ys={type:"childadded",child:null},bd={type:"childremoved",child:null};class cn extends _a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new Z,t=new Ui,s=new _o,l=new Z(1,1,1);function c(){s.setFromEuler(t,!1)}function d(){t.setFromQuaternion(s,void 0,!1)}t._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ut}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(wx,e)}rotateZ(e){return this.rotateOnAxis(Mx,e)}translateOnAxis(e,t){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(wx,e)}translateZ(e){return this.translateOnAxis(Mx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?kl.copy(e):kl.set(e,t,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ro,kl,this.up):Zi.lookAt(kl,ro,this.up),this.quaternion.setFromRotationMatrix(Zi),l&&(Zi.extractRotation(l.matrixWorld),qs.setFromRotationMatrix(Zi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ex),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kS),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ex),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,IS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,US,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,l=t.length;s<l;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,l=t.length;s<l;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,l=t.length;s<l;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let x=0,m=f.length;x<m;x++){const v=f[x];c(e.shapes,v)}else c(e.shapes,f)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,x=this.material.length;f<x;f++)h.push(c(e.materials,this.material[f]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];l.animations.push(c(e.animations,f))}}if(t){const h=d(e.geometries),f=d(e.materials),x=d(e.textures),m=d(e.images),v=d(e.shapes),y=d(e.skeletons),w=d(e.animations),E=d(e.nodes);h.length>0&&(s.geometries=h),f.length>0&&(s.materials=f),x.length>0&&(s.textures=x),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),w.length>0&&(s.animations=w),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const f=[];for(const x in h){const m=h[x];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}cn.DEFAULT_UP=new Z(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new Z,Qi=new Z,Td=new Z,Ji=new Z,Ks=new Z,Zs=new Z,bx=new Z,Nd=new Z,Ad=new Z,Cd=new Z,Rd=new It,Pd=new It,Dd=new It;class xi{constructor(e=new Z,t=new Z,s=new Z){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,l){l.subVectors(s,t),mi.subVectors(e,t),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,t,s,l,c){mi.subVectors(l,t),Qi.subVectors(s,t),Td.subVectors(e,t);const d=mi.dot(mi),h=mi.dot(Qi),f=mi.dot(Td),x=Qi.dot(Qi),m=Qi.dot(Td),v=d*x-h*h;if(v===0)return c.set(0,0,0),null;const y=1/v,w=(x*f-h*m)*y,E=(d*m-h*f)*y;return c.set(1-w-E,E,w)}static containsPoint(e,t,s,l){return this.getBarycoord(e,t,s,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,s,l,c,d,h,f){return this.getBarycoord(e,t,s,l,Ji)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(c,Ji.x),f.addScaledVector(d,Ji.y),f.addScaledVector(h,Ji.z),f)}static getInterpolatedAttribute(e,t,s,l,c,d){return Rd.setScalar(0),Pd.setScalar(0),Dd.setScalar(0),Rd.fromBufferAttribute(e,t),Pd.fromBufferAttribute(e,s),Dd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Rd,c.x),d.addScaledVector(Pd,c.y),d.addScaledVector(Dd,c.z),d}static isFrontFacing(e,t,s,l){return mi.subVectors(s,t),Qi.subVectors(e,t),mi.cross(Qi).dot(l)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,l){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,t,s,l){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),mi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,l,c){return xi.getInterpolation(e,this.a,this.b,this.c,t,s,l,c)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,l=this.b,c=this.c;let d,h;Ks.subVectors(l,s),Zs.subVectors(c,s),Nd.subVectors(e,s);const f=Ks.dot(Nd),x=Zs.dot(Nd);if(f<=0&&x<=0)return t.copy(s);Ad.subVectors(e,l);const m=Ks.dot(Ad),v=Zs.dot(Ad);if(m>=0&&v<=m)return t.copy(l);const y=f*v-m*x;if(y<=0&&f>=0&&m<=0)return d=f/(f-m),t.copy(s).addScaledVector(Ks,d);Cd.subVectors(e,c);const w=Ks.dot(Cd),E=Zs.dot(Cd);if(E>=0&&w<=E)return t.copy(c);const M=w*x-f*E;if(M<=0&&x>=0&&E<=0)return h=x/(x-E),t.copy(s).addScaledVector(Zs,h);const S=m*E-w*v;if(S<=0&&v-m>=0&&w-E>=0)return bx.subVectors(c,l),h=(v-m)/(v-m+(w-E)),t.copy(l).addScaledVector(bx,h);const g=1/(S+M+y);return d=M*g,h=y*g,t.copy(s).addScaledVector(Ks,d).addScaledVector(Zs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Ld(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Tt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,l=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Mt.toWorkingColorSpace(this,l),this}setHSL(e,t,s,l=Mt.workingColorSpace){if(e=yS(e,1),t=In(t,0,1),s=In(s,0,1),t===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+t):s+t-s*t,d=2*s-c;this.r=Ld(d,c,e+1/3),this.g=Ld(d,c,e),this.b=Ld(d,c,e-1/3)}return Mt.toWorkingColorSpace(this,l),this}setStyle(e,t=ni){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const s=fg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Mt.fromWorkingColorSpace(gn.copy(this),e),Math.round(In(gn.r*255,0,255))*65536+Math.round(In(gn.g*255,0,255))*256+Math.round(In(gn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(gn.copy(this),t);const s=gn.r,l=gn.g,c=gn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let f,x;const m=(h+d)/2;if(h===d)f=0,x=0;else{const v=d-h;switch(x=m<=.5?v/(d+h):v/(2-d-h),d){case s:f=(l-c)/v+(l<c?6:0);break;case l:f=(c-s)/v+2;break;case c:f=(s-l)/v+4;break}f/=6}return e.h=f,e.s=x,e.l=m,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=ni){Mt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,s=gn.g,l=gn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,t,s){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Fl);const s=xd(Ir.h,Fl.h,t),l=xd(Ir.s,Fl.s,t),c=xd(Ir.l,Fl.l,t);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*t+c[3]*s+c[6]*l,this.g=c[1]*t+c[4]*s+c[7]*l,this.b=c[2]*t+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Tt;Tt.NAMES=fg;let FS=0;class ya extends _a{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=vo(),this.name="",this.blending=ra,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Qd,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(s.blending=this.blending),this.side!==Br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Qd&&(s.blendDst=this.blendDst),this.blendEquation!==ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const f=c[h];delete f.metadata,d.push(f)}return d}if(t){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const l=t.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=t[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class na extends ya{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new Z,jl=new yt;class Si{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=cx,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=t.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=to(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ln(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=to(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=to(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=to(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=to(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,t,s,l,c){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array),l=Ln(l,this.array),c=Ln(c,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cx&&(e.usage=this.usage),e}}class pg extends Si{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class mg extends Si{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class vn extends Si{constructor(e,t,s){super(new Float32Array(e),t,s)}}let jS=0;const ti=new Vt,Id=new cn,Qs=new Z,Hn=new yo,so=new yo,an=new Z;class ri extends _a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?mg:pg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ut().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,s){return ti.makeTranslation(e,t,s),this.applyMatrix4(ti),this}scale(e,t,s){return ti.makeScale(e,t,s),this.applyMatrix4(ti),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new vn(s,3))}else{for(let s=0,l=t.count;s<l;s++){const c=e[s];t.setXYZ(s,c.x,c.y,c.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const c=t[s];Hn.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const s=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const h=t[c];so.setFromBufferAttribute(h),this.morphTargetsRelative?(an.addVectors(Hn.min,so.min),Hn.expandByPoint(an),an.addVectors(Hn.max,so.max),Hn.expandByPoint(an)):(Hn.expandByPoint(so.min),Hn.expandByPoint(so.max))}Hn.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)an.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(an));if(t)for(let c=0,d=t.length;c<d;c++){const h=t[c],f=this.morphTargetsRelative;for(let x=0,m=h.count;x<m;x++)an.fromBufferAttribute(h,x),f&&(Qs.fromBufferAttribute(e,x),an.add(Qs)),l=Math.max(l,s.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,l=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],f=[];for(let O=0;O<s.count;O++)h[O]=new Z,f[O]=new Z;const x=new Z,m=new Z,v=new Z,y=new yt,w=new yt,E=new yt,M=new Z,S=new Z;function g(O,L,N){x.fromBufferAttribute(s,O),m.fromBufferAttribute(s,L),v.fromBufferAttribute(s,N),y.fromBufferAttribute(c,O),w.fromBufferAttribute(c,L),E.fromBufferAttribute(c,N),m.sub(x),v.sub(x),w.sub(y),E.sub(y);const z=1/(w.x*E.y-E.x*w.y);isFinite(z)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(v,-w.y).multiplyScalar(z),S.copy(v).multiplyScalar(w.x).addScaledVector(m,-E.x).multiplyScalar(z),h[O].add(M),h[L].add(M),h[N].add(M),f[O].add(S),f[L].add(S),f[N].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,L=T.length;O<L;++O){const N=T[O],z=N.start,Q=N.count;for(let ee=z,de=z+Q;ee<de;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const C=new Z,A=new Z,H=new Z,I=new Z;function P(O){H.fromBufferAttribute(l,O),I.copy(H);const L=h[O];C.copy(L),C.sub(H.multiplyScalar(H.dot(L))).normalize(),A.crossVectors(I,L);const z=A.dot(f[O])<0?-1:1;d.setXYZW(O,C.x,C.y,C.z,z)}for(let O=0,L=T.length;O<L;++O){const N=T[O],z=N.start,Q=N.count;for(let ee=z,de=z+Q;ee<de;ee+=3)P(e.getX(ee+0)),P(e.getX(ee+1)),P(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,w=s.count;y<w;y++)s.setXYZ(y,0,0,0);const l=new Z,c=new Z,d=new Z,h=new Z,f=new Z,x=new Z,m=new Z,v=new Z;if(e)for(let y=0,w=e.count;y<w;y+=3){const E=e.getX(y+0),M=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,M),d.fromBufferAttribute(t,S),m.subVectors(d,c),v.subVectors(l,c),m.cross(v),h.fromBufferAttribute(s,E),f.fromBufferAttribute(s,M),x.fromBufferAttribute(s,S),h.add(m),f.add(m),x.add(m),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(S,x.x,x.y,x.z)}else for(let y=0,w=t.count;y<w;y+=3)l.fromBufferAttribute(t,y+0),c.fromBufferAttribute(t,y+1),d.fromBufferAttribute(t,y+2),m.subVectors(d,c),v.subVectors(l,c),m.cross(v),s.setXYZ(y+0,m.x,m.y,m.z),s.setXYZ(y+1,m.x,m.y,m.z),s.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(h,f){const x=h.array,m=h.itemSize,v=h.normalized,y=new x.constructor(f.length*m);let w=0,E=0;for(let M=0,S=f.length;M<S;M++){h.isInterleavedBufferAttribute?w=f[M]*h.data.stride+h.offset:w=f[M]*m;for(let g=0;g<m;g++)y[E++]=x[w++]}return new Si(y,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,s=this.index.array,l=this.attributes;for(const h in l){const f=l[h],x=e(f,s);t.setAttribute(h,x)}const c=this.morphAttributes;for(const h in c){const f=[],x=c[h];for(let m=0,v=x.length;m<v;m++){const y=x[m],w=e(y,s);f.push(w)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,f=d.length;h<f;h++){const x=d[h];t.addGroup(x.start,x.count,x.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const x in f)f[x]!==void 0&&(e[x]=f[x]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const x=s[f];e.data.attributes[f]=x.toJSON(e.data)}const l={};let c=!1;for(const f in this.morphAttributes){const x=this.morphAttributes[f],m=[];for(let v=0,y=x.length;v<y;v++){const w=x[v];m.push(w.toJSON(e.data))}m.length>0&&(l[f]=m,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const l=e.attributes;for(const x in l){const m=l[x];this.setAttribute(x,m.clone(t))}const c=e.morphAttributes;for(const x in c){const m=[],v=c[x];for(let y=0,w=v.length;y<w;y++)m.push(v[y].clone(t));this.morphAttributes[x]=m}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let x=0,m=d.length;x<m;x++){const v=d[x];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tx=new Vt,ss=new dg,Ol=new Mc,Nx=new Z,zl=new Z,Bl=new Z,Vl=new Z,Ud=new Z,Hl=new Z,Ax=new Z,Gl=new Z;class Un extends cn{constructor(e=new ri,t=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const l=t[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,t){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;t.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Hl.set(0,0,0);for(let f=0,x=c.length;f<x;f++){const m=h[f],v=c[f];m!==0&&(Ud.fromBufferAttribute(v,e),d?Hl.addScaledVector(Ud,m):Hl.addScaledVector(Ud.sub(t),m))}t.add(Hl)}return t}raycast(e,t){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ol.copy(s.boundingSphere),Ol.applyMatrix4(c),ss.copy(e.ray).recast(e.near),!(Ol.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Ol,Nx)===null||ss.origin.distanceToSquared(Nx)>(e.far-e.near)**2))&&(Tx.copy(c).invert(),ss.copy(e.ray).applyMatrix4(Tx),!(s.boundingBox!==null&&ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,s){let l;const c=this.geometry,d=this.material,h=c.index,f=c.attributes.position,x=c.attributes.uv,m=c.attributes.uv1,v=c.attributes.normal,y=c.groups,w=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,M=y.length;E<M;E++){const S=y[E],g=d[S.materialIndex],T=Math.max(S.start,w.start),C=Math.min(h.count,Math.min(S.start+S.count,w.start+w.count));for(let A=T,H=C;A<H;A+=3){const I=h.getX(A),P=h.getX(A+1),O=h.getX(A+2);l=Wl(this,g,e,s,x,m,v,I,P,O),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=S.materialIndex,t.push(l))}}else{const E=Math.max(0,w.start),M=Math.min(h.count,w.start+w.count);for(let S=E,g=M;S<g;S+=3){const T=h.getX(S),C=h.getX(S+1),A=h.getX(S+2);l=Wl(this,d,e,s,x,m,v,T,C,A),l&&(l.faceIndex=Math.floor(S/3),t.push(l))}}else if(f!==void 0)if(Array.isArray(d))for(let E=0,M=y.length;E<M;E++){const S=y[E],g=d[S.materialIndex],T=Math.max(S.start,w.start),C=Math.min(f.count,Math.min(S.start+S.count,w.start+w.count));for(let A=T,H=C;A<H;A+=3){const I=A,P=A+1,O=A+2;l=Wl(this,g,e,s,x,m,v,I,P,O),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=S.materialIndex,t.push(l))}}else{const E=Math.max(0,w.start),M=Math.min(f.count,w.start+w.count);for(let S=E,g=M;S<g;S+=3){const T=S,C=S+1,A=S+2;l=Wl(this,d,e,s,x,m,v,T,C,A),l&&(l.faceIndex=Math.floor(S/3),t.push(l))}}}}function OS(r,e,t,s,l,c,d,h){let f;if(e.side===kn?f=s.intersectTriangle(d,c,l,!0,h):f=s.intersectTriangle(l,c,d,e.side===Br,h),f===null)return null;Gl.copy(h),Gl.applyMatrix4(r.matrixWorld);const x=t.ray.origin.distanceTo(Gl);return x<t.near||x>t.far?null:{distance:x,point:Gl.clone(),object:r}}function Wl(r,e,t,s,l,c,d,h,f,x){r.getVertexPosition(h,zl),r.getVertexPosition(f,Bl),r.getVertexPosition(x,Vl);const m=OS(r,e,t,s,zl,Bl,Vl,Ax);if(m){const v=new Z;xi.getBarycoord(Ax,zl,Bl,Vl,v),l&&(m.uv=xi.getInterpolatedAttribute(l,h,f,x,v,new yt)),c&&(m.uv1=xi.getInterpolatedAttribute(c,h,f,x,v,new yt)),d&&(m.normal=xi.getInterpolatedAttribute(d,h,f,x,v,new Z),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const y={a:h,b:f,c:x,normal:new Z,materialIndex:0};xi.getNormal(zl,Bl,Vl,y.normal),m.face=y,m.barycoord=v}return m}class So extends ri{constructor(e=1,t=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const f=[],x=[],m=[],v=[];let y=0,w=0;E("z","y","x",-1,-1,s,t,e,d,c,0),E("z","y","x",1,-1,s,t,-e,d,c,1),E("x","z","y",1,1,e,s,t,l,d,2),E("x","z","y",1,-1,e,s,-t,l,d,3),E("x","y","z",1,-1,e,t,s,l,c,4),E("x","y","z",-1,-1,e,t,-s,l,c,5),this.setIndex(f),this.setAttribute("position",new vn(x,3)),this.setAttribute("normal",new vn(m,3)),this.setAttribute("uv",new vn(v,2));function E(M,S,g,T,C,A,H,I,P,O,L){const N=A/P,z=H/O,Q=A/2,ee=H/2,de=I/2,le=P+1,oe=O+1;let ce=0,B=0;const he=new Z;for(let Y=0;Y<oe;Y++){const j=Y*z-ee;for(let ie=0;ie<le;ie++){const Ne=ie*N-Q;he[M]=Ne*T,he[S]=j*C,he[g]=de,x.push(he.x,he.y,he.z),he[M]=0,he[S]=0,he[g]=I>0?1:-1,m.push(he.x,he.y,he.z),v.push(ie/P),v.push(1-Y/O),ce+=1}}for(let Y=0;Y<O;Y++)for(let j=0;j<P;j++){const ie=y+j+le*Y,Ne=y+j+le*(Y+1),G=y+(j+1)+le*(Y+1),fe=y+(j+1)+le*Y;f.push(ie,Ne,fe),f.push(Ne,G,fe),B+=6}h.addGroup(w,B,L),w+=B,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const l=r[t][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=l.clone():Array.isArray(l)?e[t][s]=l.slice():e[t][s]=l}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const s=fa(r[t]);for(const l in s)e[l]=s[l]}return e}function zS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function xg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const BS={clone:fa,merge:En};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vr extends ya{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=HS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=zS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?t.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[l]={type:"m4",value:d.toArray()}:t.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class gg extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new Z,Cx=new yt,Rx=new yt;class Gn extends gg{constructor(e=50,t=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(md*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(md*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,Cx,Rx),t.subVectors(Rx,Cx)}setViewOffset(e,t,s,l,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(md*.5*this.fov)/this.zoom,s=2*t,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const f=d.fullWidth,x=d.fullHeight;c+=d.offsetX*l/f,t-=d.offsetY*s/x,l*=d.width/f,s*=d.height/x}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,ea=1;class GS extends cn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Gn(Js,ea,e,t);l.layers=this.layers,this.add(l);const c=new Gn(Js,ea,e,t);c.layers=this.layers,this.add(c);const d=new Gn(Js,ea,e,t);d.layers=this.layers,this.add(d);const h=new Gn(Js,ea,e,t);h.layers=this.layers,this.add(h);const f=new Gn(Js,ea,e,t);f.layers=this.layers,this.add(f);const x=new Gn(Js,ea,e,t);x.layers=this.layers,this.add(x)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,l,c,d,h,f]=t;for(const x of t)this.remove(x);if(e===ir)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===cc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const x of t)this.add(x),x.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,f,x,m]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(t,c),e.setRenderTarget(s,1,l),e.render(t,d),e.setRenderTarget(s,2,l),e.render(t,h),e.setRenderTarget(s,3,l),e.render(t,f),e.setRenderTarget(s,4,l),e.render(t,x),s.texture.generateMipmaps=M,e.setRenderTarget(s,5,l),e.render(t,m),e.setRenderTarget(v,y,w),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class vg extends Fn{constructor(e,t,s,l,c,d,h,f,x,m){e=e!==void 0?e:[],t=t!==void 0?t:ca,super(e,t,s,l,c,d,h,f,x,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new vg(l,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new So(5,5,5),c=new Vr({name:"CubemapFromEquirect",uniforms:fa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:jr});c.uniforms.tEquirect.value=t;const d=new Un(l,c),h=t.minFilter;return t.minFilter===ps&&(t.minFilter=Li),new GS(1,10,this).update(e,d),t.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,s,l){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,s,l);e.setRenderTarget(c)}}const kd=new Z,XS=new Z,$S=new ut;class cs{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,l){return this.normal.set(e,t,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const l=kd.subVectors(s,t).cross(XS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(kd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||$S.getNormalMatrix(e),l=this.coplanarPoint(kd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Mc,Xl=new Z;class uf{constructor(e=new cs,t=new cs,s=new cs,l=new cs,c=new cs,d=new cs){this.planes=[e,t,s,l,c,d]}set(e,t,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=ir){const s=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],f=l[3],x=l[4],m=l[5],v=l[6],y=l[7],w=l[8],E=l[9],M=l[10],S=l[11],g=l[12],T=l[13],C=l[14],A=l[15];if(s[0].setComponents(f-c,y-x,S-w,A-g).normalize(),s[1].setComponents(f+c,y+x,S+w,A+g).normalize(),s[2].setComponents(f+d,y+m,S+E,A+T).normalize(),s[3].setComponents(f-d,y-m,S-E,A-T).normalize(),s[4].setComponents(f-h,y-v,S-M,A-C).normalize(),t===ir)s[5].setComponents(f+h,y+v,S+M,A+C).normalize();else if(t===cc)s[5].setComponents(h,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const l=t[s];if(Xl.x=l.normal.x>0?e.max.x:e.min.x,Xl.y=l.normal.y>0?e.max.y:e.min.y,Xl.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _g(){let r=null,e=!1,t=null,s=null;function l(c,d){t(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){r=c}}}function qS(r){const e=new WeakMap;function t(h,f){const x=h.array,m=h.usage,v=x.byteLength,y=r.createBuffer();r.bindBuffer(f,y),r.bufferData(f,x,m),h.onUploadCallback();let w;if(x instanceof Float32Array)w=r.FLOAT;else if(x instanceof Uint16Array)h.isFloat16BufferAttribute?w=r.HALF_FLOAT:w=r.UNSIGNED_SHORT;else if(x instanceof Int16Array)w=r.SHORT;else if(x instanceof Uint32Array)w=r.UNSIGNED_INT;else if(x instanceof Int32Array)w=r.INT;else if(x instanceof Int8Array)w=r.BYTE;else if(x instanceof Uint8Array)w=r.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)w=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:y,type:w,bytesPerElement:x.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,f,x){const m=f.array,v=f.updateRanges;if(r.bindBuffer(x,h),v.length===0)r.bufferSubData(x,0,m);else{v.sort((w,E)=>w.start-E.start);let y=0;for(let w=1;w<v.length;w++){const E=v[y],M=v[w];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++y,v[y]=M)}v.length=y+1;for(let w=0,E=v.length;w<E;w++){const M=v[w];r.bufferSubData(x,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(r.deleteBuffer(f.buffer),e.delete(h))}function d(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=e.get(h);(!m||m.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const x=e.get(h);if(x===void 0)e.set(h,t(h,f));else if(x.version<h.version){if(x.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(x.buffer,h,f),x.version=h.version}}return{get:l,remove:c,update:d}}class Ec extends ri{constructor(e=1,t=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:l};const c=e/2,d=t/2,h=Math.floor(s),f=Math.floor(l),x=h+1,m=f+1,v=e/h,y=t/f,w=[],E=[],M=[],S=[];for(let g=0;g<m;g++){const T=g*y-d;for(let C=0;C<x;C++){const A=C*v-c;E.push(A,-T,0),M.push(0,0,1),S.push(C/h),S.push(1-g/f)}}for(let g=0;g<f;g++)for(let T=0;T<h;T++){const C=T+x*g,A=T+x*(g+1),H=T+1+x*(g+1),I=T+1+x*g;w.push(C,A,I),w.push(A,H,I)}this.setIndex(w),this.setAttribute("position",new vn(E,3)),this.setAttribute("normal",new vn(M,3)),this.setAttribute("uv",new vn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}var YS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KS=`#ifdef USE_ALPHAHASH
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
#endif`,ZS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ew=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tw=`#ifdef USE_AOMAP
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
#endif`,nw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,rw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ow=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lw=`#ifdef USE_IRIDESCENCE
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
#endif`,cw=`#ifdef USE_BUMPMAP
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
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vw=`#define PI 3.141592653589793
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
} // validated`,_w=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yw=`vec3 transformedNormal = objectNormal;
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
#endif`,Sw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cw=`#ifdef USE_ENVMAP
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
#endif`,Rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
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
#endif`,Dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kw=`#ifdef USE_GRADIENTMAP
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
}`,Fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zw=`uniform bool receiveShadow;
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
#endif`,Bw=`#ifdef USE_ENVMAP
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
#endif`,Vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ww=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xw=`PhysicalMaterial material;
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
#endif`,$w=`struct PhysicalMaterial {
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
}`,qw=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rM=`#if defined( USE_POINTS_UV )
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
#endif`,sM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`#ifdef USE_MORPHTARGETS
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
#endif`,dM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
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
#endif`,vM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,EM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UM=`#ifdef USE_SKINNING
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
#endif`,kM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FM=`#ifdef USE_SKINNING
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
#endif`,jM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#ifdef USE_TRANSMISSION
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
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
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
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
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
}`,tE=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nE=`#define DISTANCE
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
}`,iE=`#define DISTANCE
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`uniform float scale;
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
}`,oE=`uniform vec3 diffuse;
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
}`,lE=`#include <common>
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
}`,cE=`uniform vec3 diffuse;
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
}`,uE=`#define LAMBERT
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
}`,dE=`#define LAMBERT
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
}`,hE=`#define MATCAP
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
}`,fE=`#define MATCAP
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
}`,pE=`#define NORMAL
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
}`,mE=`#define NORMAL
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
}`,xE=`#define PHONG
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
}`,gE=`#define PHONG
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
}`,vE=`#define STANDARD
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
}`,_E=`#define STANDARD
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
}`,yE=`#define TOON
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
}`,SE=`#define TOON
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
}`,wE=`uniform float size;
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
}`,ME=`uniform vec3 diffuse;
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
}`,EE=`#include <common>
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
}`,bE=`uniform vec3 color;
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
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,NE=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:YS,alphahash_pars_fragment:KS,alphamap_fragment:ZS,alphamap_pars_fragment:QS,alphatest_fragment:JS,alphatest_pars_fragment:ew,aomap_fragment:tw,aomap_pars_fragment:nw,batching_pars_vertex:iw,batching_vertex:rw,begin_vertex:sw,beginnormal_vertex:aw,bsdfs:ow,iridescence_fragment:lw,bumpmap_pars_fragment:cw,clipping_planes_fragment:uw,clipping_planes_pars_fragment:dw,clipping_planes_pars_vertex:hw,clipping_planes_vertex:fw,color_fragment:pw,color_pars_fragment:mw,color_pars_vertex:xw,color_vertex:gw,common:vw,cube_uv_reflection_fragment:_w,defaultnormal_vertex:yw,displacementmap_pars_vertex:Sw,displacementmap_vertex:ww,emissivemap_fragment:Mw,emissivemap_pars_fragment:Ew,colorspace_fragment:bw,colorspace_pars_fragment:Tw,envmap_fragment:Nw,envmap_common_pars_fragment:Aw,envmap_pars_fragment:Cw,envmap_pars_vertex:Rw,envmap_physical_pars_fragment:Bw,envmap_vertex:Pw,fog_vertex:Dw,fog_pars_vertex:Lw,fog_fragment:Iw,fog_pars_fragment:Uw,gradientmap_pars_fragment:kw,lightmap_pars_fragment:Fw,lights_lambert_fragment:jw,lights_lambert_pars_fragment:Ow,lights_pars_begin:zw,lights_toon_fragment:Vw,lights_toon_pars_fragment:Hw,lights_phong_fragment:Gw,lights_phong_pars_fragment:Ww,lights_physical_fragment:Xw,lights_physical_pars_fragment:$w,lights_fragment_begin:qw,lights_fragment_maps:Yw,lights_fragment_end:Kw,logdepthbuf_fragment:Zw,logdepthbuf_pars_fragment:Qw,logdepthbuf_pars_vertex:Jw,logdepthbuf_vertex:eM,map_fragment:tM,map_pars_fragment:nM,map_particle_fragment:iM,map_particle_pars_fragment:rM,metalnessmap_fragment:sM,metalnessmap_pars_fragment:aM,morphinstance_vertex:oM,morphcolor_vertex:lM,morphnormal_vertex:cM,morphtarget_pars_vertex:uM,morphtarget_vertex:dM,normal_fragment_begin:hM,normal_fragment_maps:fM,normal_pars_fragment:pM,normal_pars_vertex:mM,normal_vertex:xM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:vM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:yM,iridescence_pars_fragment:SM,opaque_fragment:wM,packing:MM,premultiplied_alpha_fragment:EM,project_vertex:bM,dithering_fragment:TM,dithering_pars_fragment:NM,roughnessmap_fragment:AM,roughnessmap_pars_fragment:CM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:PM,shadowmap_vertex:DM,shadowmask_pars_fragment:LM,skinbase_vertex:IM,skinning_pars_vertex:UM,skinning_vertex:kM,skinnormal_vertex:FM,specularmap_fragment:jM,specularmap_pars_fragment:OM,tonemapping_fragment:zM,tonemapping_pars_fragment:BM,transmission_fragment:VM,transmission_pars_fragment:HM,uv_pars_fragment:GM,uv_pars_vertex:WM,uv_vertex:XM,worldpos_vertex:$M,background_vert:qM,background_frag:YM,backgroundCube_vert:KM,backgroundCube_frag:ZM,cube_vert:QM,cube_frag:JM,depth_vert:eE,depth_frag:tE,distanceRGBA_vert:nE,distanceRGBA_frag:iE,equirect_vert:rE,equirect_frag:sE,linedashed_vert:aE,linedashed_frag:oE,meshbasic_vert:lE,meshbasic_frag:cE,meshlambert_vert:uE,meshlambert_frag:dE,meshmatcap_vert:hE,meshmatcap_frag:fE,meshnormal_vert:pE,meshnormal_frag:mE,meshphong_vert:xE,meshphong_frag:gE,meshphysical_vert:vE,meshphysical_frag:_E,meshtoon_vert:yE,meshtoon_frag:SE,points_vert:wE,points_frag:ME,shadow_vert:EE,shadow_frag:bE,sprite_vert:TE,sprite_frag:NE},Pe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ri={basic:{uniforms:En([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:En([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:En([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:En([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:En([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:En([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:En([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:En([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:En([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:En([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:En([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:En([Pe.common,Pe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:En([Pe.lights,Pe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ri.physical={uniforms:En([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const $l={r:0,b:0,g:0},os=new Ui,AE=new Vt;function CE(r,e,t,s,l,c,d){const h=new Tt(0);let f=c===!0?0:1,x,m,v=null,y=0,w=null;function E(T){let C=T.isScene===!0?T.background:null;return C&&C.isTexture&&(C=(T.backgroundBlurriness>0?t:e).get(C)),C}function M(T){let C=!1;const A=E(T);A===null?g(h,f):A&&A.isColor&&(g(A,1),C=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(T,C){const A=E(C);A&&(A.isCubeTexture||A.mapping===Sc)?(m===void 0&&(m=new Un(new So(1,1,1),new Vr({name:"BackgroundCubeMaterial",uniforms:fa(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(H,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(m)),os.copy(C.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(os)),m.material.toneMapped=Mt.getTransfer(A.colorSpace)!==Lt,(v!==A||y!==A.version||w!==r.toneMapping)&&(m.material.needsUpdate=!0,v=A,y=A.version,w=r.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(x===void 0&&(x=new Un(new Ec(2,2),new Vr({name:"BackgroundMaterial",uniforms:fa(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(x)),x.material.uniforms.t2D.value=A,x.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,x.material.toneMapped=Mt.getTransfer(A.colorSpace)!==Lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),x.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||y!==A.version||w!==r.toneMapping)&&(x.material.needsUpdate=!0,v=A,y=A.version,w=r.toneMapping),x.layers.enableAll(),T.unshift(x,x.geometry,x.material,0,0,null))}function g(T,C){T.getRGB($l,xg(r)),s.buffers.color.setClear($l.r,$l.g,$l.b,C,d)}return{getClearColor:function(){return h},setClearColor:function(T,C=1){h.set(T),f=C,g(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,g(h,f)},render:M,addToRenderList:S}}function RE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,d=!1;function h(N,z,Q,ee,de){let le=!1;const oe=v(ee,Q,z);c!==oe&&(c=oe,x(c.object)),le=w(N,ee,Q,de),le&&E(N,ee,Q,de),de!==null&&e.update(de,r.ELEMENT_ARRAY_BUFFER),(le||d)&&(d=!1,A(N,z,Q,ee),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function f(){return r.createVertexArray()}function x(N){return r.bindVertexArray(N)}function m(N){return r.deleteVertexArray(N)}function v(N,z,Q){const ee=Q.wireframe===!0;let de=s[N.id];de===void 0&&(de={},s[N.id]=de);let le=de[z.id];le===void 0&&(le={},de[z.id]=le);let oe=le[ee];return oe===void 0&&(oe=y(f()),le[ee]=oe),oe}function y(N){const z=[],Q=[],ee=[];for(let de=0;de<t;de++)z[de]=0,Q[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:ee,object:N,attributes:{},index:null}}function w(N,z,Q,ee){const de=c.attributes,le=z.attributes;let oe=0;const ce=Q.getAttributes();for(const B in ce)if(ce[B].location>=0){const Y=de[B];let j=le[B];if(j===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),Y===void 0||Y.attribute!==j||j&&Y.data!==j.data)return!0;oe++}return c.attributesNum!==oe||c.index!==ee}function E(N,z,Q,ee){const de={},le=z.attributes;let oe=0;const ce=Q.getAttributes();for(const B in ce)if(ce[B].location>=0){let Y=le[B];Y===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));const j={};j.attribute=Y,Y&&Y.data&&(j.data=Y.data),de[B]=j,oe++}c.attributes=de,c.attributesNum=oe,c.index=ee}function M(){const N=c.newAttributes;for(let z=0,Q=N.length;z<Q;z++)N[z]=0}function S(N){g(N,0)}function g(N,z){const Q=c.newAttributes,ee=c.enabledAttributes,de=c.attributeDivisors;Q[N]=1,ee[N]===0&&(r.enableVertexAttribArray(N),ee[N]=1),de[N]!==z&&(r.vertexAttribDivisor(N,z),de[N]=z)}function T(){const N=c.newAttributes,z=c.enabledAttributes;for(let Q=0,ee=z.length;Q<ee;Q++)z[Q]!==N[Q]&&(r.disableVertexAttribArray(Q),z[Q]=0)}function C(N,z,Q,ee,de,le,oe){oe===!0?r.vertexAttribIPointer(N,z,Q,de,le):r.vertexAttribPointer(N,z,Q,ee,de,le)}function A(N,z,Q,ee){M();const de=ee.attributes,le=Q.getAttributes(),oe=z.defaultAttributeValues;for(const ce in le){const B=le[ce];if(B.location>=0){let he=de[ce];if(he===void 0&&(ce==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),ce==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){const Y=he.normalized,j=he.itemSize,ie=e.get(he);if(ie===void 0)continue;const Ne=ie.buffer,G=ie.type,fe=ie.bytesPerElement,Se=G===r.INT||G===r.UNSIGNED_INT||he.gpuType===rf;if(he.isInterleavedBufferAttribute){const xe=he.data,Ae=xe.stride,Le=he.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)g(B.location+Ze,xe.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<B.locationSize;Ze++)C(B.location+Ze,j/B.locationSize,G,Y,Ae*fe,(Le+j/B.locationSize*Ze)*fe,Se)}else{if(he.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)g(B.location+xe,he.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let xe=0;xe<B.locationSize;xe++)S(B.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let xe=0;xe<B.locationSize;xe++)C(B.location+xe,j/B.locationSize,G,Y,j*fe,j/B.locationSize*xe*fe,Se)}}else if(oe!==void 0){const Y=oe[ce];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(B.location,Y);break;case 3:r.vertexAttrib3fv(B.location,Y);break;case 4:r.vertexAttrib4fv(B.location,Y);break;default:r.vertexAttrib1fv(B.location,Y)}}}}T()}function H(){O();for(const N in s){const z=s[N];for(const Q in z){const ee=z[Q];for(const de in ee)m(ee[de].object),delete ee[de];delete z[Q]}delete s[N]}}function I(N){if(s[N.id]===void 0)return;const z=s[N.id];for(const Q in z){const ee=z[Q];for(const de in ee)m(ee[de].object),delete ee[de];delete z[Q]}delete s[N.id]}function P(N){for(const z in s){const Q=s[z];if(Q[N.id]===void 0)continue;const ee=Q[N.id];for(const de in ee)m(ee[de].object),delete ee[de];delete Q[N.id]}}function O(){L(),d=!0,c!==l&&(c=l,x(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:L,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:S,disableUnusedAttributes:T}}function PE(r,e,t){let s;function l(x){s=x}function c(x,m){r.drawArrays(s,x,m),t.update(m,s,1)}function d(x,m,v){v!==0&&(r.drawArraysInstanced(s,x,m,v),t.update(m,s,v))}function h(x,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,x,0,m,0,v);let w=0;for(let E=0;E<v;E++)w+=m[E];t.update(w,s,1)}function f(x,m,v,y){if(v===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let E=0;E<x.length;E++)d(x[E],m[E],y[E]);else{w.multiDrawArraysInstancedWEBGL(s,x,0,m,0,y,0,v);let E=0;for(let M=0;M<v;M++)E+=m[M]*y[M];t.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function DE(r,e,t,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==gi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const O=P===go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==or&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==nr&&!O)}function f(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let x=t.precision!==void 0?t.precision:"highp";const m=f(x);m!==x&&(console.warn("THREE.WebGLRenderer:",x,"not supported, using",m,"instead."),x=m);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),w=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:f,textureFormatReadable:d,textureTypeReadable:h,precision:x,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:w,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:A,vertexTextures:H,maxSamples:I}}function LE(r){const e=this;let t=null,s=0,l=!1,c=!1;const d=new cs,h=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const w=v.length!==0||y||s!==0||l;return l=y,s=v.length,w},this.beginShadows=function(){c=!0,m(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){t=m(v,y,0)},this.setState=function(v,y,w){const E=v.clippingPlanes,M=v.clipIntersection,S=v.clipShadows,g=r.get(v);if(!l||E===null||E.length===0||c&&!S)c?m(null):x();else{const T=c?0:s,C=T*4;let A=g.clippingState||null;f.value=A,A=m(E,y,C,w);for(let H=0;H!==C;++H)A[H]=t[H];g.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function x(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,y,w,E){const M=v!==null?v.length:0;let S=null;if(M!==0){if(S=f.value,E!==!0||S===null){const g=w+M*4,T=y.matrixWorldInverse;h.getNormalMatrix(T),(S===null||S.length<g)&&(S=new Float32Array(g));for(let C=0,A=w;C!==M;++C,A+=4)d.copy(v[C]).applyMatrix4(T,h),d.normal.toArray(S,A),S[A+3]=d.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function IE(r){let e=new WeakMap;function t(d,h){return h===ah?d.mapping=ca:h===oh&&(d.mapping=ua),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===ah||h===oh)if(e.has(d)){const f=e.get(d).texture;return t(f,d.mapping)}else{const f=d.image;if(f&&f.height>0){const x=new WS(f.height);return x.fromEquirectangularTexture(r,d),e.set(d,x),d.addEventListener("dispose",l),t(x.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class yg extends gg{constructor(e=-1,t=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+t,f=l-t;if(this.view!==null&&this.view.enabled){const x=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=x*this.view.offsetX,d=c+x*this.view.width,h-=m*this.view.offsetY,f=h-m*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ia=4,Px=[.125,.215,.35,.446,.526,.582],hs=20,Fd=new yg,Dx=new Tt;let jd=null,Od=0,zd=0,Bd=!1;const us=(1+Math.sqrt(5))/2,ta=1/us,Lx=[new Z(-us,ta,0),new Z(us,ta,0),new Z(-ta,0,us),new Z(ta,0,us),new Z(0,us,-ta),new Z(0,us,ta),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Ix{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,l=100){jd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,l,c),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Od,zd),this._renderer.xr.enabled=Bd,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ca||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:go,format:gi,colorSpace:va,depthBuffer:!1},l=Ux(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ux(e,t,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UE(c)),this._blurMaterial=kE(c,e,t)}return l}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,Fd)}_sceneToCubeUV(e,t,s,l){const h=new Gn(90,1,t,s),f=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,y=m.toneMapping;m.getClearColor(Dx),m.toneMapping=Or,m.autoClear=!1;const w=new na({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new Un(new So,w);let M=!1;const S=e.background;S?S.isColor&&(w.color.copy(S),e.background=null,M=!0):(w.color.copy(Dx),M=!0);for(let g=0;g<6;g++){const T=g%3;T===0?(h.up.set(0,f[g],0),h.lookAt(x[g],0,0)):T===1?(h.up.set(0,0,f[g]),h.lookAt(0,x[g],0)):(h.up.set(0,f[g],0),h.lookAt(0,0,x[g]));const C=this._cubeSize;ql(l,T*C,g>2?C:0,C,C),m.setRenderTarget(l),M&&m.render(E,h),m.render(e,h)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=y,m.autoClear=v,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,l=e.mapping===ca||e.mapping===ua;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kx());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Un(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const f=this._cubeSize;ql(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(d,Fd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Lx[(l-c-1)%Lx.length];this._blur(e,c-1,c,d,h)}t.autoClear=s}_blur(e,t,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,t,s,l,c,d,h){const f=this._renderer,x=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Un(this._lodPlanes[l],x),y=x.uniforms,w=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*w):2*Math.PI/(2*hs-1),M=c/E,S=isFinite(c)?1+Math.floor(m*M):hs;S>hs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${hs}`);const g=[];let T=0;for(let P=0;P<hs;++P){const O=P/M,L=Math.exp(-O*O/2);g.push(L),P===0?T+=L:P<S&&(T+=2*L)}for(let P=0;P<g.length;P++)g[P]=g[P]/T;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:C}=this;y.dTheta.value=E,y.mipInt.value=C-s;const A=this._sizeLods[l],H=3*A*(l>C-ia?l-C+ia:0),I=4*(this._cubeSize-A);ql(t,H,I,3*A,2*A),f.setRenderTarget(t),f.render(v,Fd)}}function UE(r){const e=[],t=[],s=[];let l=r;const c=r-ia+1+Px.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let f=1/h;d>r-ia?f=Px[d-r+ia-1]:d===0&&(f=0),s.push(f);const x=1/(h-2),m=-x,v=1+x,y=[m,m,v,m,v,v,m,m,v,v,m,v],w=6,E=6,M=3,S=2,g=1,T=new Float32Array(M*E*w),C=new Float32Array(S*E*w),A=new Float32Array(g*E*w);for(let I=0;I<w;I++){const P=I%3*2/3-1,O=I>2?0:-1,L=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];T.set(L,M*E*I),C.set(y,S*E*I);const N=[I,I,I,I,I,I];A.set(N,g*E*I)}const H=new ri;H.setAttribute("position",new Si(T,M)),H.setAttribute("uv",new Si(C,S)),H.setAttribute("faceIndex",new Si(A,g)),e.push(H),l>ia&&l--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Ux(r,e,t){const s=new gs(r,e,t);return s.texture.mapping=Sc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ql(r,e,t,s,l){r.viewport.set(e,t,s,l),r.scissor.set(e,t,s,l)}function kE(r,e,t){const s=new Float32Array(hs),l=new Z(0,1,0);return new Vr({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:df(),fragmentShader:`

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
		`,blending:jr,depthTest:!1,depthWrite:!1})}function kx(){return new Vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Fx(){return new Vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function df(){return`

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
	`}function FE(r){let e=new WeakMap,t=null;function s(h){if(h&&h.isTexture){const f=h.mapping,x=f===ah||f===oh,m=f===ca||f===ua;if(x||m){let v=e.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return t===null&&(t=new Ix(r)),v=x?t.fromEquirectangular(h,v):t.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const w=h.image;return x&&w&&w.height>0||m&&w&&l(w)?(t===null&&(t=new Ix(r)),v=x?t.fromEquirectangular(h):t.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let f=0;const x=6;for(let m=0;m<x;m++)h[m]!==void 0&&f++;return f===x}function c(h){const f=h.target;f.removeEventListener("dispose",c);const x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:d}}function jE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const l=t(s);return l===null&&oo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function OE(r,e,t,s){const l={},c=new WeakMap;function d(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const M=y.morphAttributes[E];for(let S=0,g=M.length;S<g;S++)e.remove(M[S])}y.removeEventListener("dispose",d),delete l[y.id];const w=c.get(y);w&&(e.remove(w),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function h(v,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,t.memory.geometries++),y}function f(v){const y=v.attributes;for(const E in y)e.update(y[E],r.ARRAY_BUFFER);const w=v.morphAttributes;for(const E in w){const M=w[E];for(let S=0,g=M.length;S<g;S++)e.update(M[S],r.ARRAY_BUFFER)}}function x(v){const y=[],w=v.index,E=v.attributes.position;let M=0;if(w!==null){const T=w.array;M=w.version;for(let C=0,A=T.length;C<A;C+=3){const H=T[C+0],I=T[C+1],P=T[C+2];y.push(H,I,I,P,P,H)}}else if(E!==void 0){const T=E.array;M=E.version;for(let C=0,A=T.length/3-1;C<A;C+=3){const H=C+0,I=C+1,P=C+2;y.push(H,I,I,P,P,H)}}else return;const S=new(lg(y)?mg:pg)(y,1);S.version=M;const g=c.get(v);g&&e.remove(g),c.set(v,S)}function m(v){const y=c.get(v);if(y){const w=v.index;w!==null&&y.version<w.version&&x(v)}else x(v);return c.get(v)}return{get:h,update:f,getWireframeAttribute:m}}function zE(r,e,t){let s;function l(y){s=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function f(y,w){r.drawElements(s,w,c,y*d),t.update(w,s,1)}function x(y,w,E){E!==0&&(r.drawElementsInstanced(s,w,c,y*d,E),t.update(w,s,E))}function m(y,w,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,w,0,c,y,0,E);let S=0;for(let g=0;g<E;g++)S+=w[g];t.update(S,s,1)}function v(y,w,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)x(y[g]/d,w[g],M[g]);else{S.multiDrawElementsInstancedWEBGL(s,w,0,c,y,0,M,0,E);let g=0;for(let T=0;T<E;T++)g+=w[T]*M[T];t.update(g,s,1)}}this.setMode=l,this.setIndex=h,this.render=f,this.renderInstances=x,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function BE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=h*(c/3);break;case r.LINES:t.lines+=h*(c/2);break;case r.LINE_STRIP:t.lines+=h*(c-1);break;case r.LINE_LOOP:t.lines+=h*c;break;case r.POINTS:t.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:l,update:s}}function VE(r,e,t){const s=new WeakMap,l=new It;function c(d,h,f){const x=d.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0;let y=s.get(h);if(y===void 0||y.count!==v){let N=function(){O.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var w=N;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let H=h.attributes.position.count*A,I=1;H>e.maxTextureSize&&(I=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const P=new Float32Array(H*I*4*v),O=new ug(P,H,I,v);O.type=nr,O.needsUpdate=!0;const L=A*4;for(let z=0;z<v;z++){const Q=g[z],ee=T[z],de=C[z],le=H*I*4*z;for(let oe=0;oe<Q.count;oe++){const ce=oe*L;E===!0&&(l.fromBufferAttribute(Q,oe),P[le+ce+0]=l.x,P[le+ce+1]=l.y,P[le+ce+2]=l.z,P[le+ce+3]=0),M===!0&&(l.fromBufferAttribute(ee,oe),P[le+ce+4]=l.x,P[le+ce+5]=l.y,P[le+ce+6]=l.z,P[le+ce+7]=0),S===!0&&(l.fromBufferAttribute(de,oe),P[le+ce+8]=l.x,P[le+ce+9]=l.y,P[le+ce+10]=l.z,P[le+ce+11]=de.itemSize===4?l.w:1)}}y={count:v,texture:O,size:new yt(H,I)},s.set(h,y),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let E=0;for(let S=0;S<x.length;S++)E+=x[S];const M=h.morphTargetsRelative?1:1-E;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",x)}f.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function HE(r,e,t,s){let l=new WeakMap;function c(f){const x=s.render.frame,m=f.geometry,v=e.get(f,m);if(l.get(v)!==x&&(e.update(v),l.set(v,x)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),l.get(f)!==x&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),l.set(f,x))),f.isSkinnedMesh){const y=f.skeleton;l.get(y)!==x&&(y.update(),l.set(y,x))}return v}function d(){l=new WeakMap}function h(f){const x=f.target;x.removeEventListener("dispose",h),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:c,dispose:d}}class Sg extends Fn{constructor(e,t,s,l,c,d,h,f,x,m=sa){if(m!==sa&&m!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===sa&&(s=xs),s===void 0&&m===ha&&(s=da),super(null,l,c,d,h,f,m,s,x),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:yi,this.minFilter=f!==void 0?f:yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wg=new Fn,jx=new Sg(1,1),Mg=new ug,Eg=new CS,bg=new vg,Ox=[],zx=[],Bx=new Float32Array(16),Vx=new Float32Array(9),Hx=new Float32Array(4);function Sa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const l=e*t;let c=Ox[l];if(c===void 0&&(c=new Float32Array(l),Ox[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=t,r[d].toArray(c,h)}return c}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function bc(r,e){let t=zx[e];t===void 0&&(t=new Int32Array(e),zx[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function GE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function WE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function XE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function $E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function qE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Hx.set(s),r.uniformMatrix2fv(this.addr,!1,Hx),tn(t,s)}}function YE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Vx.set(s),r.uniformMatrix3fv(this.addr,!1,Vx),tn(t,s)}}function KE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Bx.set(s),r.uniformMatrix4fv(this.addr,!1,Bx),tn(t,s)}}function ZE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function QE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function JE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function tb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function sb(r,e,t){const s=this.cache,l=t.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(jx.compareFunction=og,c=jx):c=wg,t.setTexture2D(e||c,l)}function ab(r,e,t){const s=this.cache,l=t.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),t.setTexture3D(e||Eg,l)}function ob(r,e,t){const s=this.cache,l=t.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),t.setTextureCube(e||bg,l)}function lb(r,e,t){const s=this.cache,l=t.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),t.setTexture2DArray(e||Mg,l)}function cb(r){switch(r){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return $E;case 35674:return qE;case 35675:return YE;case 35676:return KE;case 5124:case 35670:return ZE;case 35667:case 35671:return QE;case 35668:case 35672:return JE;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(r,e){r.uniform1fv(this.addr,e)}function db(r,e){const t=Sa(e,this.size,2);r.uniform2fv(this.addr,t)}function hb(r,e){const t=Sa(e,this.size,3);r.uniform3fv(this.addr,t)}function fb(r,e){const t=Sa(e,this.size,4);r.uniform4fv(this.addr,t)}function pb(r,e){const t=Sa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mb(r,e){const t=Sa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function xb(r,e){const t=Sa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function gb(r,e){r.uniform1iv(this.addr,e)}function vb(r,e){r.uniform2iv(this.addr,e)}function _b(r,e){r.uniform3iv(this.addr,e)}function yb(r,e){r.uniform4iv(this.addr,e)}function Sb(r,e){r.uniform1uiv(this.addr,e)}function wb(r,e){r.uniform2uiv(this.addr,e)}function Mb(r,e){r.uniform3uiv(this.addr,e)}function Eb(r,e){r.uniform4uiv(this.addr,e)}function bb(r,e,t){const s=this.cache,l=e.length,c=bc(t,l);en(s,c)||(r.uniform1iv(this.addr,c),tn(s,c));for(let d=0;d!==l;++d)t.setTexture2D(e[d]||wg,c[d])}function Tb(r,e,t){const s=this.cache,l=e.length,c=bc(t,l);en(s,c)||(r.uniform1iv(this.addr,c),tn(s,c));for(let d=0;d!==l;++d)t.setTexture3D(e[d]||Eg,c[d])}function Nb(r,e,t){const s=this.cache,l=e.length,c=bc(t,l);en(s,c)||(r.uniform1iv(this.addr,c),tn(s,c));for(let d=0;d!==l;++d)t.setTextureCube(e[d]||bg,c[d])}function Ab(r,e,t){const s=this.cache,l=e.length,c=bc(t,l);en(s,c)||(r.uniform1iv(this.addr,c),tn(s,c));for(let d=0;d!==l;++d)t.setTexture2DArray(e[d]||Mg,c[d])}function Cb(r){switch(r){case 5126:return ub;case 35664:return db;case 35665:return hb;case 35666:return fb;case 35674:return pb;case 35675:return mb;case 35676:return xb;case 5124:case 35670:return gb;case 35667:case 35671:return vb;case 35668:case 35672:return _b;case 35669:case 35673:return yb;case 5125:return Sb;case 36294:return wb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Ab}}class Rb{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=cb(t.type)}}class Pb{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cb(t.type)}}class Db{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,t[h.id],s)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function Gx(r,e){r.seq.push(e),r.map[e.id]=e}function Lb(r,e,t){const s=r.name,l=s.length;for(Vd.lastIndex=0;;){const c=Vd.exec(s),d=Vd.lastIndex;let h=c[1];const f=c[2]==="]",x=c[3];if(f&&(h=h|0),x===void 0||x==="["&&d+2===l){Gx(t,x===void 0?new Rb(h,r,e):new Pb(h,r,e));break}else{let v=t.map[h];v===void 0&&(v=new Db(h),Gx(t,v)),t=v}}}class ac{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(t,l),d=e.getUniformLocation(t,c.name);Lb(c,d,this)}}setValue(e,t,s,l){const c=this.map[t];c!==void 0&&c.setValue(e,s,l)}setOptional(e,t,s){const l=t[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,t,s,l){for(let c=0,d=t.length;c!==d;++c){const h=t[c],f=s[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,l)}}static seqWithValue(e,t){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in t&&s.push(d)}return s}}function Wx(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const Ib=37297;let Ub=0;function kb(r,e){const t=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${t[d]}`)}return s.join(`
`)}const Xx=new ut;function Fb(r){Mt._getMatrix(Xx,Mt.workingColorSpace,r);const e=`mat3( ${Xx.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case wc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $x(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+kb(r.getShaderSource(e),d)}else return l}function jb(r,e){const t=Fb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ob(r,e){let t;switch(e){case nS:t="Linear";break;case iS:t="Reinhard";break;case rS:t="Cineon";break;case sS:t="ACESFilmic";break;case oS:t="AgX";break;case lS:t="Neutral";break;case aS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yl=new Z;function zb(){Mt.getLuminanceCoefficients(Yl);const r=Yl.x.toFixed(4),e=Yl.y.toFixed(4),t=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function Vb(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Hb(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),t[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return t}function lo(r){return r!==""}function qx(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(r){return r.replace(Gb,Xb)}const Wb=new Map;function Xb(r,e){let t=dt[e];if(t===void 0){const s=Wb.get(e);if(s!==void 0)t=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Fh(t)}const $b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kx(r){return r.replace($b,qb)}function qb(r,e,t,s){let l="";for(let c=parseInt(e);c<parseInt(t);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Zx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===U1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function Kb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ca:case ua:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function Qb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case q0:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case tS:e="ENVMAP_BLENDING_ADD";break}return e}function Jb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function e2(r,e,t,s){const l=r.getContext(),c=t.defines;let d=t.vertexShader,h=t.fragmentShader;const f=Yb(t),x=Kb(t),m=Zb(t),v=Qb(t),y=Jb(t),w=Bb(t),E=Vb(c),M=l.createProgram();let S,g,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(lo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(lo).join(`
`),g.length>0&&(g+=`
`)):(S=[Zx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),g=[Zx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?dt.tonemapping_pars_fragment:"",t.toneMapping!==Or?Ob("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,jb("linearToOutputTexel",t.outputColorSpace),zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),d=Fh(d),d=qx(d,t),d=Yx(d,t),h=Fh(h),h=qx(h,t),h=Yx(h,t),d=Kx(d),h=Kx(h),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[w,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===ux?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ux?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=T+S+d,A=T+g+h,H=Wx(l,l.VERTEX_SHADER,C),I=Wx(l,l.FRAGMENT_SHADER,A);l.attachShader(M,H),l.attachShader(M,I),t.index0AttributeName!==void 0?l.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&l.bindAttribLocation(M,0,"position"),l.linkProgram(M);function P(z){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(M).trim(),ee=l.getShaderInfoLog(H).trim(),de=l.getShaderInfoLog(I).trim();let le=!0,oe=!0;if(l.getProgramParameter(M,l.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,M,H,I);else{const ce=$x(l,H,"vertex"),B=$x(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(M,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+ce+`
`+B)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(ee===""||de==="")&&(oe=!1);oe&&(z.diagnostics={runnable:le,programLog:Q,vertexShader:{log:ee,prefix:S},fragmentShader:{log:de,prefix:g}})}l.deleteShader(H),l.deleteShader(I),O=new ac(l,M),L=Hb(l,M)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(M,Ib)),N},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ub++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=H,this.fragmentShader=I,this}let t2=0;class n2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(t),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new i2(e),t.set(e,s)),s}}class i2{constructor(e){this.id=t2++,this.code=e,this.usedTimes=0}}function r2(r,e,t,s,l,c,d){const h=new hg,f=new n2,x=new Set,m=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let w=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return x.add(L),L===0?"uv":`uv${L}`}function S(L,N,z,Q,ee){const de=Q.fog,le=ee.geometry,oe=L.isMeshStandardMaterial?Q.environment:null,ce=(L.isMeshStandardMaterial?t:e).get(L.envMap||oe),B=ce&&ce.mapping===Sc?ce.image.height:null,he=E[L.type];L.precision!==null&&(w=l.getMaxPrecision(L.precision),w!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",w,"instead."));const Y=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,j=Y!==void 0?Y.length:0;let ie=0;le.morphAttributes.position!==void 0&&(ie=1),le.morphAttributes.normal!==void 0&&(ie=2),le.morphAttributes.color!==void 0&&(ie=3);let Ne,G,fe,Se;if(he){const St=Ri[he];Ne=St.vertexShader,G=St.fragmentShader}else Ne=L.vertexShader,G=L.fragmentShader,f.update(L),fe=f.getVertexShaderID(L),Se=f.getFragmentShaderID(L);const xe=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Le=ee.isInstancedMesh===!0,Ze=ee.isBatchedMesh===!0,Nt=!!L.map,ht=!!L.matcap,Dt=!!ce,$=!!L.aoMap,_t=!!L.lightMap,Qe=!!L.bumpMap,it=!!L.normalMap,Ye=!!L.displacementMap,Rt=!!L.emissiveMap,Ke=!!L.metalnessMap,U=!!L.roughnessMap,R=L.anisotropy>0,ne=L.clearcoat>0,ge=L.dispersion>0,_e=L.iridescence>0,pe=L.sheen>0,Ge=L.transmission>0,Ce=R&&!!L.anisotropyMap,ke=ne&&!!L.clearcoatMap,ft=ne&&!!L.clearcoatNormalMap,Me=ne&&!!L.clearcoatRoughnessMap,je=_e&&!!L.iridescenceMap,tt=_e&&!!L.iridescenceThicknessMap,nt=pe&&!!L.sheenColorMap,Oe=pe&&!!L.sheenRoughnessMap,pt=!!L.specularMap,ot=!!L.specularColorMap,Ct=!!L.specularIntensityMap,X=Ge&&!!L.transmissionMap,Re=Ge&&!!L.thicknessMap,ue=!!L.gradientMap,me=!!L.alphaMap,Ie=L.alphaTest>0,De=!!L.alphaHash,lt=!!L.extensions;let Ft=Or;L.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const Kt={shaderID:he,shaderType:L.type,shaderName:L.name,vertexShader:Ne,fragmentShader:G,defines:L.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:w,batching:Ze,batchingColor:Ze&&ee._colorsTexture!==null,instancing:Le,instancingColor:Le&&ee.instanceColor!==null,instancingMorph:Le&&ee.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:va,alphaToCoverage:!!L.alphaToCoverage,map:Nt,matcap:ht,envMap:Dt,envMapMode:Dt&&ce.mapping,envMapCubeUVHeight:B,aoMap:$,lightMap:_t,bumpMap:Qe,normalMap:it,displacementMap:y&&Ye,emissiveMap:Rt,normalMapObjectSpace:it&&L.normalMapType===hS,normalMapTangentSpace:it&&L.normalMapType===ag,metalnessMap:Ke,roughnessMap:U,anisotropy:R,anisotropyMap:Ce,clearcoat:ne,clearcoatMap:ke,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:ge,iridescence:_e,iridescenceMap:je,iridescenceThicknessMap:tt,sheen:pe,sheenColorMap:nt,sheenRoughnessMap:Oe,specularMap:pt,specularColorMap:ot,specularIntensityMap:Ct,transmission:Ge,transmissionMap:X,thicknessMap:Re,gradientMap:ue,opaque:L.transparent===!1&&L.blending===ra&&L.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:De,combine:L.combine,mapUv:Nt&&M(L.map.channel),aoMapUv:$&&M(L.aoMap.channel),lightMapUv:_t&&M(L.lightMap.channel),bumpMapUv:Qe&&M(L.bumpMap.channel),normalMapUv:it&&M(L.normalMap.channel),displacementMapUv:Ye&&M(L.displacementMap.channel),emissiveMapUv:Rt&&M(L.emissiveMap.channel),metalnessMapUv:Ke&&M(L.metalnessMap.channel),roughnessMapUv:U&&M(L.roughnessMap.channel),anisotropyMapUv:Ce&&M(L.anisotropyMap.channel),clearcoatMapUv:ke&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&M(L.sheenRoughnessMap.channel),specularMapUv:pt&&M(L.specularMap.channel),specularColorMapUv:ot&&M(L.specularColorMap.channel),specularIntensityMapUv:Ct&&M(L.specularIntensityMap.channel),transmissionMapUv:X&&M(L.transmissionMap.channel),thicknessMapUv:Re&&M(L.thicknessMap.channel),alphaMapUv:me&&M(L.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(it||R),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!le.attributes.uv&&(Nt||me),fog:!!de,useFog:L.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:ee.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ie,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Nt&&L.map.isVideoTexture===!0&&Mt.getTransfer(L.map.colorSpace)===Lt,decodeVideoTextureEmissive:Rt&&L.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(L.emissiveMap.colorSpace)===Lt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===tr,flipSided:L.side===kn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:lt&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&L.extensions.multiDraw===!0||Ze)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Kt.vertexUv1s=x.has(1),Kt.vertexUv2s=x.has(2),Kt.vertexUv3s=x.has(3),x.clear(),Kt}function g(L){const N=[];if(L.shaderID?N.push(L.shaderID):(N.push(L.customVertexShaderID),N.push(L.customFragmentShaderID)),L.defines!==void 0)for(const z in L.defines)N.push(z),N.push(L.defines[z]);return L.isRawShaderMaterial===!1&&(T(N,L),C(N,L),N.push(r.outputColorSpace)),N.push(L.customProgramCacheKey),N.join()}function T(L,N){L.push(N.precision),L.push(N.outputColorSpace),L.push(N.envMapMode),L.push(N.envMapCubeUVHeight),L.push(N.mapUv),L.push(N.alphaMapUv),L.push(N.lightMapUv),L.push(N.aoMapUv),L.push(N.bumpMapUv),L.push(N.normalMapUv),L.push(N.displacementMapUv),L.push(N.emissiveMapUv),L.push(N.metalnessMapUv),L.push(N.roughnessMapUv),L.push(N.anisotropyMapUv),L.push(N.clearcoatMapUv),L.push(N.clearcoatNormalMapUv),L.push(N.clearcoatRoughnessMapUv),L.push(N.iridescenceMapUv),L.push(N.iridescenceThicknessMapUv),L.push(N.sheenColorMapUv),L.push(N.sheenRoughnessMapUv),L.push(N.specularMapUv),L.push(N.specularColorMapUv),L.push(N.specularIntensityMapUv),L.push(N.transmissionMapUv),L.push(N.thicknessMapUv),L.push(N.combine),L.push(N.fogExp2),L.push(N.sizeAttenuation),L.push(N.morphTargetsCount),L.push(N.morphAttributeCount),L.push(N.numDirLights),L.push(N.numPointLights),L.push(N.numSpotLights),L.push(N.numSpotLightMaps),L.push(N.numHemiLights),L.push(N.numRectAreaLights),L.push(N.numDirLightShadows),L.push(N.numPointLightShadows),L.push(N.numSpotLightShadows),L.push(N.numSpotLightShadowsWithMaps),L.push(N.numLightProbes),L.push(N.shadowMapType),L.push(N.toneMapping),L.push(N.numClippingPlanes),L.push(N.numClipIntersection),L.push(N.depthPacking)}function C(L,N){h.disableAll(),N.supportsVertexTextures&&h.enable(0),N.instancing&&h.enable(1),N.instancingColor&&h.enable(2),N.instancingMorph&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),N.dispersion&&h.enable(20),N.batchingColor&&h.enable(21),L.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reverseDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),L.push(h.mask)}function A(L){const N=E[L.type];let z;if(N){const Q=Ri[N];z=BS.clone(Q.uniforms)}else z=L.uniforms;return z}function H(L,N){let z;for(let Q=0,ee=m.length;Q<ee;Q++){const de=m[Q];if(de.cacheKey===N){z=de,++z.usedTimes;break}}return z===void 0&&(z=new e2(r,N,L,c),m.push(z)),z}function I(L){if(--L.usedTimes===0){const N=m.indexOf(L);m[N]=m[m.length-1],m.pop(),L.destroy()}}function P(L){f.remove(L)}function O(){f.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:A,acquireProgram:H,releaseProgram:I,releaseShaderCache:P,programs:m,dispose:O}}function s2(){let r=new WeakMap;function e(d){return r.has(d)}function t(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,f){r.get(d)[h]=f}function c(){r=new WeakMap}return{has:e,get:t,remove:s,update:l,dispose:c}}function a2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jx(){const r=[];let e=0;const t=[],s=[],l=[];function c(){e=0,t.length=0,s.length=0,l.length=0}function d(v,y,w,E,M,S){let g=r[e];return g===void 0?(g={id:v.id,object:v,geometry:y,material:w,groupOrder:E,renderOrder:v.renderOrder,z:M,group:S},r[e]=g):(g.id=v.id,g.object=v,g.geometry=y,g.material=w,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=M,g.group=S),e++,g}function h(v,y,w,E,M,S){const g=d(v,y,w,E,M,S);w.transmission>0?s.push(g):w.transparent===!0?l.push(g):t.push(g)}function f(v,y,w,E,M,S){const g=d(v,y,w,E,M,S);w.transmission>0?s.unshift(g):w.transparent===!0?l.unshift(g):t.unshift(g)}function x(v,y){t.length>1&&t.sort(v||a2),s.length>1&&s.sort(y||Qx),l.length>1&&l.sort(y||Qx)}function m(){for(let v=e,y=r.length;v<y;v++){const w=r[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:s,transparent:l,init:c,push:h,unshift:f,finish:m,sort:x}}function o2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new Jx,r.set(s,[d])):l>=c.length?(d=new Jx,c.push(d)):d=c[l],d}function t(){r=new WeakMap}return{get:e,dispose:t}}function l2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Tt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=t,t}}}function c2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let u2=0;function d2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function h2(r){const e=new l2,t=c2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)s.probe.push(new Z);const l=new Z,c=new Vt,d=new Vt;function h(x){let m=0,v=0,y=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let w=0,E=0,M=0,S=0,g=0,T=0,C=0,A=0,H=0,I=0,P=0;x.sort(d2);for(let L=0,N=x.length;L<N;L++){const z=x[L],Q=z.color,ee=z.intensity,de=z.distance,le=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=Q.r*ee,v+=Q.g*ee,y+=Q.b*ee;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(z.sh.coefficients[oe],ee);P++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,B=t.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,s.directionalShadow[w]=B,s.directionalShadowMap[w]=le,s.directionalShadowMatrix[w]=z.shadow.matrix,T++}s.directional[w]=oe,w++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(Q).multiplyScalar(ee),oe.distance=de,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,s.spot[M]=oe;const ce=z.shadow;if(z.map&&(s.spotLightMap[H]=z.map,H++,ce.updateMatrices(z),z.castShadow&&I++),s.spotLightMatrix[M]=ce.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,s.spotShadow[M]=B,s.spotShadowMap[M]=le,A++}M++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(Q).multiplyScalar(ee),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),s.rectArea[S]=oe,S++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const ce=z.shadow,B=t.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,s.pointShadow[E]=B,s.pointShadowMap[E]=le,s.pointShadowMatrix[E]=z.shadow.matrix,C++}s.point[E]=oe,E++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(ee),oe.groundColor.copy(z.groundColor).multiplyScalar(ee),s.hemi[g]=oe,g++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=y;const O=s.hash;(O.directionalLength!==w||O.pointLength!==E||O.spotLength!==M||O.rectAreaLength!==S||O.hemiLength!==g||O.numDirectionalShadows!==T||O.numPointShadows!==C||O.numSpotShadows!==A||O.numSpotMaps!==H||O.numLightProbes!==P)&&(s.directional.length=w,s.spot.length=M,s.rectArea.length=S,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+H-I,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=P,O.directionalLength=w,O.pointLength=E,O.spotLength=M,O.rectAreaLength=S,O.hemiLength=g,O.numDirectionalShadows=T,O.numPointShadows=C,O.numSpotShadows=A,O.numSpotMaps=H,O.numLightProbes=P,s.version=u2++)}function f(x,m){let v=0,y=0,w=0,E=0,M=0;const S=m.matrixWorldInverse;for(let g=0,T=x.length;g<T;g++){const C=x[g];if(C.isDirectionalLight){const A=s.directional[v];A.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(S),v++}else if(C.isSpotLight){const A=s.spot[w];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(S),w++}else if(C.isRectAreaLight){const A=s.rectArea[E];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),d.identity(),c.copy(C.matrixWorld),c.premultiply(S),d.extractRotation(c),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(d),A.halfHeight.applyMatrix4(d),E++}else if(C.isPointLight){const A=s.point[y];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),y++}else if(C.isHemisphereLight){const A=s.hemi[M];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(S),M++}}}return{setup:h,setupView:f,state:s}}function e0(r){const e=new h2(r),t=[],s=[];function l(m){x.camera=m,t.length=0,s.length=0}function c(m){t.push(m)}function d(m){s.push(m)}function h(){e.setup(t)}function f(m){e.setupView(t,m)}const x={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:x,setupLights:h,setupLightsView:f,pushLight:c,pushShadow:d}}function f2(r){let e=new WeakMap;function t(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new e0(r),e.set(l,[h])):c>=d.length?(h=new e0(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:t,dispose:s}}class p2 extends ya{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m2 extends ya{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const x2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g2=`uniform sampler2D shadow_pass;
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
}`;function v2(r,e,t){let s=new uf;const l=new yt,c=new yt,d=new It,h=new p2({depthPacking:dS}),f=new m2,x={},m=t.maxTextureSize,v={[Br]:kn,[kn]:Br,[tr]:tr},y=new Vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:x2,fragmentShader:g2}),w=y.clone();w.defines.HORIZONTAL_PASS=1;const E=new ri;E.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Un(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$0;let g=this.type;this.render=function(I,P,O){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const L=r.getRenderTarget(),N=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(jr),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ee=g!==er&&this.type===er,de=g===er&&this.type!==er;for(let le=0,oe=I.length;le<oe;le++){const ce=I[le],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const he=B.getFrameExtents();if(l.multiply(he),c.copy(B.mapSize),(l.x>m||l.y>m)&&(l.x>m&&(c.x=Math.floor(m/he.x),l.x=c.x*he.x,B.mapSize.x=c.x),l.y>m&&(c.y=Math.floor(m/he.y),l.y=c.y*he.y,B.mapSize.y=c.y)),B.map===null||ee===!0||de===!0){const j=this.type!==er?{minFilter:yi,magFilter:yi}:{};B.map!==null&&B.map.dispose(),B.map=new gs(l.x,l.y,j),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const Y=B.getViewportCount();for(let j=0;j<Y;j++){const ie=B.getViewport(j);d.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),Q.viewport(d),B.updateMatrices(ce,j),s=B.getFrustum(),A(P,O,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===er&&T(B,O),B.needsUpdate=!1}g=this.type,S.needsUpdate=!1,r.setRenderTarget(L,N,z)};function T(I,P){const O=e.update(M);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,w.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,w.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new gs(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(P,null,O,y,M,null),w.uniforms.shadow_pass.value=I.mapPass.texture,w.uniforms.resolution.value=I.mapSize,w.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(P,null,O,w,M,null)}function C(I,P,O,L){let N=null;const z=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)N=z;else if(N=O.isPointLight===!0?f:h,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Q=N.uuid,ee=P.uuid;let de=x[Q];de===void 0&&(de={},x[Q]=de);let le=de[ee];le===void 0&&(le=N.clone(),de[ee]=le,P.addEventListener("dispose",H)),N=le}if(N.visible=P.visible,N.wireframe=P.wireframe,L===er?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:v[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,O.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const Q=r.properties.get(N);Q.light=O}return N}function A(I,P,O,L,N){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&N===er)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const ee=e.update(I),de=I.material;if(Array.isArray(de)){const le=ee.groups;for(let oe=0,ce=le.length;oe<ce;oe++){const B=le[oe],he=de[B.materialIndex];if(he&&he.visible){const Y=C(I,he,L,N);I.onBeforeShadow(r,I,P,O,ee,Y,B),r.renderBufferDirect(O,null,ee,Y,I,B),I.onAfterShadow(r,I,P,O,ee,Y,B)}}}else if(de.visible){const le=C(I,de,L,N);I.onBeforeShadow(r,I,P,O,ee,le,null),r.renderBufferDirect(O,null,ee,le,I,null),I.onAfterShadow(r,I,P,O,ee,le,null)}}const Q=I.children;for(let ee=0,de=Q.length;ee<de;ee++)A(Q[ee],P,O,L,N)}function H(I){I.target.removeEventListener("dispose",H);for(const O in x){const L=x[O],N=I.target.uuid;N in L&&(L[N].dispose(),delete L[N])}}}const _2={[Jd]:eh,[th]:rh,[nh]:sh,[la]:ih,[eh]:Jd,[rh]:th,[sh]:nh,[ih]:la};function y2(r,e){function t(){let X=!1;const Re=new It;let ue=null;const me=new It(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!X&&(r.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,De,lt,Ft,Kt){Kt===!0&&(Ie*=Ft,De*=Ft,lt*=Ft),Re.set(Ie,De,lt,Ft),me.equals(Re)===!1&&(r.clearColor(Ie,De,lt,Ft),me.copy(Re))},reset:function(){X=!1,ue=null,me.set(-1,0,0,0)}}}function s(){let X=!1,Re=!1,ue=null,me=null,Ie=null;return{setReversed:function(De){if(Re!==De){const lt=e.get("EXT_clip_control");Re?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ie;Ie=null,this.setClear(Ft)}Re=De},getReversed:function(){return Re},setTest:function(De){De?xe(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(De){ue!==De&&!X&&(r.depthMask(De),ue=De)},setFunc:function(De){if(Re&&(De=_2[De]),me!==De){switch(De){case Jd:r.depthFunc(r.NEVER);break;case eh:r.depthFunc(r.ALWAYS);break;case th:r.depthFunc(r.LESS);break;case la:r.depthFunc(r.LEQUAL);break;case nh:r.depthFunc(r.EQUAL);break;case ih:r.depthFunc(r.GEQUAL);break;case rh:r.depthFunc(r.GREATER);break;case sh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=De}},setLocked:function(De){X=De},setClear:function(De){Ie!==De&&(Re&&(De=1-De),r.clearDepth(De),Ie=De)},reset:function(){X=!1,ue=null,me=null,Ie=null,Re=!1}}}function l(){let X=!1,Re=null,ue=null,me=null,Ie=null,De=null,lt=null,Ft=null,Kt=null;return{setTest:function(St){X||(St?xe(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(St){Re!==St&&!X&&(r.stencilMask(St),Re=St)},setFunc:function(St,bn,_n){(ue!==St||me!==bn||Ie!==_n)&&(r.stencilFunc(St,bn,_n),ue=St,me=bn,Ie=_n)},setOp:function(St,bn,_n){(De!==St||lt!==bn||Ft!==_n)&&(r.stencilOp(St,bn,_n),De=St,lt=bn,Ft=_n)},setLocked:function(St){X=St},setClear:function(St){Kt!==St&&(r.clearStencil(St),Kt=St)},reset:function(){X=!1,Re=null,ue=null,me=null,Ie=null,De=null,lt=null,Ft=null,Kt=null}}}const c=new t,d=new s,h=new l,f=new WeakMap,x=new WeakMap;let m={},v={},y=new WeakMap,w=[],E=null,M=!1,S=null,g=null,T=null,C=null,A=null,H=null,I=null,P=new Tt(0,0,0),O=0,L=!1,N=null,z=null,Q=null,ee=null,de=null;const le=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=ce>=1):B.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=ce>=2);let he=null,Y={};const j=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Ne=new It().fromArray(j),G=new It().fromArray(ie);function fe(X,Re,ue,me){const Ie=new Uint8Array(4),De=r.createTexture();r.bindTexture(X,De),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<ue;lt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Re+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return De}const Se={};Se[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),xe(r.DEPTH_TEST),d.setFunc(la),Qe(!1),it(rx),xe(r.CULL_FACE),$(jr);function xe(X){m[X]!==!0&&(r.enable(X),m[X]=!0)}function Ae(X){m[X]!==!1&&(r.disable(X),m[X]=!1)}function Le(X,Re){return v[X]!==Re?(r.bindFramebuffer(X,Re),v[X]=Re,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Re),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(X,Re){let ue=w,me=!1;if(X){ue=y.get(Re),ue===void 0&&(ue=[],y.set(Re,ue));const Ie=X.textures;if(ue.length!==Ie.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let De=0,lt=Ie.length;De<lt;De++)ue[De]=r.COLOR_ATTACHMENT0+De;ue.length=Ie.length,me=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,me=!0);me&&r.drawBuffers(ue)}function Nt(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const ht={[ds]:r.FUNC_ADD,[F1]:r.FUNC_SUBTRACT,[j1]:r.FUNC_REVERSE_SUBTRACT};ht[O1]=r.MIN,ht[z1]=r.MAX;const Dt={[B1]:r.ZERO,[V1]:r.ONE,[H1]:r.SRC_COLOR,[Zd]:r.SRC_ALPHA,[Y1]:r.SRC_ALPHA_SATURATE,[$1]:r.DST_COLOR,[W1]:r.DST_ALPHA,[G1]:r.ONE_MINUS_SRC_COLOR,[Qd]:r.ONE_MINUS_SRC_ALPHA,[q1]:r.ONE_MINUS_DST_COLOR,[X1]:r.ONE_MINUS_DST_ALPHA,[K1]:r.CONSTANT_COLOR,[Z1]:r.ONE_MINUS_CONSTANT_COLOR,[Q1]:r.CONSTANT_ALPHA,[J1]:r.ONE_MINUS_CONSTANT_ALPHA};function $(X,Re,ue,me,Ie,De,lt,Ft,Kt,St){if(X===jr){M===!0&&(Ae(r.BLEND),M=!1);return}if(M===!1&&(xe(r.BLEND),M=!0),X!==k1){if(X!==S||St!==L){if((g!==ds||A!==ds)&&(r.blendEquation(r.FUNC_ADD),g=ds,A=ds),St)switch(X){case ra:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sx:r.blendFunc(r.ONE,r.ONE);break;case ax:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ox:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ra:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sx:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ax:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ox:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}T=null,C=null,H=null,I=null,P.set(0,0,0),O=0,S=X,L=St}return}Ie=Ie||Re,De=De||ue,lt=lt||me,(Re!==g||Ie!==A)&&(r.blendEquationSeparate(ht[Re],ht[Ie]),g=Re,A=Ie),(ue!==T||me!==C||De!==H||lt!==I)&&(r.blendFuncSeparate(Dt[ue],Dt[me],Dt[De],Dt[lt]),T=ue,C=me,H=De,I=lt),(Ft.equals(P)===!1||Kt!==O)&&(r.blendColor(Ft.r,Ft.g,Ft.b,Kt),P.copy(Ft),O=Kt),S=X,L=!1}function _t(X,Re){X.side===tr?Ae(r.CULL_FACE):xe(r.CULL_FACE);let ue=X.side===kn;Re&&(ue=!ue),Qe(ue),X.blending===ra&&X.transparent===!1?$(jr):$(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const me=X.stencilWrite;h.setTest(me),me&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Rt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(X){N!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),N=X)}function it(X){X!==L1?(xe(r.CULL_FACE),X!==z&&(X===rx?r.cullFace(r.BACK):X===I1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),z=X}function Ye(X){X!==Q&&(oe&&r.lineWidth(X),Q=X)}function Rt(X,Re,ue){X?(xe(r.POLYGON_OFFSET_FILL),(ee!==Re||de!==ue)&&(r.polygonOffset(Re,ue),ee=Re,de=ue)):Ae(r.POLYGON_OFFSET_FILL)}function Ke(X){X?xe(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function U(X){X===void 0&&(X=r.TEXTURE0+le-1),he!==X&&(r.activeTexture(X),he=X)}function R(X,Re,ue){ue===void 0&&(he===null?ue=r.TEXTURE0+le-1:ue=he);let me=Y[ue];me===void 0&&(me={type:void 0,texture:void 0},Y[ue]=me),(me.type!==X||me.texture!==Re)&&(he!==ue&&(r.activeTexture(ue),he=ue),r.bindTexture(X,Re||Se[X]),me.type=X,me.texture=Re)}function ne(){const X=Y[he];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(X){Ne.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ne.copy(X))}function Oe(X){G.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),G.copy(X))}function pt(X,Re){let ue=x.get(Re);ue===void 0&&(ue=new WeakMap,x.set(Re,ue));let me=ue.get(X);me===void 0&&(me=r.getUniformBlockIndex(Re,X.name),ue.set(X,me))}function ot(X,Re){const me=x.get(Re).get(X);f.get(Re)!==me&&(r.uniformBlockBinding(Re,me,X.__bindingPointIndex),f.set(Re,me))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},he=null,Y={},v={},y=new WeakMap,w=[],E=null,M=!1,S=null,g=null,T=null,C=null,A=null,H=null,I=null,P=new Tt(0,0,0),O=0,L=!1,N=null,z=null,Q=null,ee=null,de=null,Ne.set(0,0,r.canvas.width,r.canvas.height),G.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:xe,disable:Ae,bindFramebuffer:Le,drawBuffers:Ze,useProgram:Nt,setBlending:$,setMaterial:_t,setFlipSided:Qe,setCullFace:it,setLineWidth:Ye,setPolygonOffset:Rt,setScissorTest:Ke,activeTexture:U,bindTexture:R,unbindTexture:ne,compressedTexImage2D:ge,compressedTexImage3D:_e,texImage2D:je,texImage3D:tt,updateUBOMapping:pt,uniformBlockBinding:ot,texStorage2D:ft,texStorage3D:Me,texSubImage2D:pe,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ke,scissor:nt,viewport:Oe,reset:Ct}}function t0(r,e,t,s){const l=S2(s);switch(t){case J0:return r*e;case tg:return r*e;case ng:return r*e*2;case ig:return r*e/l.components*l.byteLength;case of:return r*e/l.components*l.byteLength;case rg:return r*e*2/l.components*l.byteLength;case lf:return r*e*2/l.components*l.byteLength;case eg:return r*e*3/l.components*l.byteLength;case gi:return r*e*4/l.components*l.byteLength;case cf:return r*e*4/l.components*l.byteLength;case tc:case nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dh:case fh:return Math.max(r,16)*Math.max(e,8)/4;case uh:case hh:return Math.max(r,8)*Math.max(e,8)/2;case ph:case mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case yh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case sc:case Ph:case Dh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sg:case Lh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ih:case Uh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S2(r){switch(r){case or:case K0:return{byteLength:1,components:1};case uo:case Z0:case go:return{byteLength:2,components:1};case sf:case af:return{byteLength:2,components:4};case xs:case rf:case nr:return{byteLength:4,components:1};case Q0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function w2(r,e,t,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new yt,m=new WeakMap;let v;const y=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,R){return w?new OffscreenCanvas(U,R):uc("canvas")}function M(U,R,ne){let ge=1;const _e=Ke(U);if((_e.width>ne||_e.height>ne)&&(ge=ne/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pe=Math.floor(ge*_e.width),Ge=Math.floor(ge*_e.height);v===void 0&&(v=E(pe,Ge));const Ce=R?E(pe,Ge):v;return Ce.width=pe,Ce.height=Ge,Ce.getContext("2d").drawImage(U,0,0,pe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+pe+"x"+Ge+")."),Ce}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),U;return U}function S(U){return U.generateMipmaps}function g(U){r.generateMipmap(U)}function T(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(U,R,ne,ge,_e=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pe=R;if(R===r.RED&&(ne===r.FLOAT&&(pe=r.R32F),ne===r.HALF_FLOAT&&(pe=r.R16F),ne===r.UNSIGNED_BYTE&&(pe=r.R8)),R===r.RED_INTEGER&&(ne===r.UNSIGNED_BYTE&&(pe=r.R8UI),ne===r.UNSIGNED_SHORT&&(pe=r.R16UI),ne===r.UNSIGNED_INT&&(pe=r.R32UI),ne===r.BYTE&&(pe=r.R8I),ne===r.SHORT&&(pe=r.R16I),ne===r.INT&&(pe=r.R32I)),R===r.RG&&(ne===r.FLOAT&&(pe=r.RG32F),ne===r.HALF_FLOAT&&(pe=r.RG16F),ne===r.UNSIGNED_BYTE&&(pe=r.RG8)),R===r.RG_INTEGER&&(ne===r.UNSIGNED_BYTE&&(pe=r.RG8UI),ne===r.UNSIGNED_SHORT&&(pe=r.RG16UI),ne===r.UNSIGNED_INT&&(pe=r.RG32UI),ne===r.BYTE&&(pe=r.RG8I),ne===r.SHORT&&(pe=r.RG16I),ne===r.INT&&(pe=r.RG32I)),R===r.RGB_INTEGER&&(ne===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),ne===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),ne===r.UNSIGNED_INT&&(pe=r.RGB32UI),ne===r.BYTE&&(pe=r.RGB8I),ne===r.SHORT&&(pe=r.RGB16I),ne===r.INT&&(pe=r.RGB32I)),R===r.RGBA_INTEGER&&(ne===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),ne===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),ne===r.UNSIGNED_INT&&(pe=r.RGBA32UI),ne===r.BYTE&&(pe=r.RGBA8I),ne===r.SHORT&&(pe=r.RGBA16I),ne===r.INT&&(pe=r.RGBA32I)),R===r.RGB&&ne===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),R===r.RGBA){const Ge=_e?wc:Mt.getTransfer(ge);ne===r.FLOAT&&(pe=r.RGBA32F),ne===r.HALF_FLOAT&&(pe=r.RGBA16F),ne===r.UNSIGNED_BYTE&&(pe=Ge===Lt?r.SRGB8_ALPHA8:r.RGBA8),ne===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),ne===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function A(U,R){let ne;return U?R===null||R===xs||R===da?ne=r.DEPTH24_STENCIL8:R===nr?ne=r.DEPTH32F_STENCIL8:R===uo&&(ne=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===xs||R===da?ne=r.DEPTH_COMPONENT24:R===nr?ne=r.DEPTH_COMPONENT32F:R===uo&&(ne=r.DEPTH_COMPONENT16),ne}function H(U,R){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==yi&&U.minFilter!==Li?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function I(U){const R=U.target;R.removeEventListener("dispose",I),O(R),R.isVideoTexture&&m.delete(R)}function P(U){const R=U.target;R.removeEventListener("dispose",P),N(R)}function O(U){const R=s.get(U);if(R.__webglInit===void 0)return;const ne=U.source,ge=y.get(ne);if(ge){const _e=ge[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&L(U),Object.keys(ge).length===0&&y.delete(ne)}s.remove(U)}function L(U){const R=s.get(U);r.deleteTexture(R.__webglTexture);const ne=U.source,ge=y.get(ne);delete ge[R.__cacheKey],d.memory.textures--}function N(U){const R=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(R.__webglFramebuffer[ge]))for(let _e=0;_e<R.__webglFramebuffer[ge].length;_e++)r.deleteFramebuffer(R.__webglFramebuffer[ge][_e]);else r.deleteFramebuffer(R.__webglFramebuffer[ge]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[ge])}else{if(Array.isArray(R.__webglFramebuffer))for(let ge=0;ge<R.__webglFramebuffer.length;ge++)r.deleteFramebuffer(R.__webglFramebuffer[ge]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ge=0;ge<R.__webglColorRenderbuffer.length;ge++)R.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[ge]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ne=U.textures;for(let ge=0,_e=ne.length;ge<_e;ge++){const pe=s.get(ne[ge]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),d.memory.textures--),s.remove(ne[ge])}s.remove(U)}let z=0;function Q(){z=0}function ee(){const U=z;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),z+=1,U}function de(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function le(U,R){const ne=s.get(U);if(U.isVideoTexture&&Ye(U),U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){const ge=U.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(ne,U,R);return}}t.bindTexture(r.TEXTURE_2D,ne.__webglTexture,r.TEXTURE0+R)}function oe(U,R){const ne=s.get(U);if(U.version>0&&ne.__version!==U.version){G(ne,U,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ne.__webglTexture,r.TEXTURE0+R)}function ce(U,R){const ne=s.get(U);if(U.version>0&&ne.__version!==U.version){G(ne,U,R);return}t.bindTexture(r.TEXTURE_3D,ne.__webglTexture,r.TEXTURE0+R)}function B(U,R){const ne=s.get(U);if(U.version>0&&ne.__version!==U.version){fe(ne,U,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture,r.TEXTURE0+R)}const he={[lh]:r.REPEAT,[fs]:r.CLAMP_TO_EDGE,[ch]:r.MIRRORED_REPEAT},Y={[yi]:r.NEAREST,[cS]:r.NEAREST_MIPMAP_NEAREST,[Cl]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[pd]:r.LINEAR_MIPMAP_NEAREST,[ps]:r.LINEAR_MIPMAP_LINEAR},j={[fS]:r.NEVER,[_S]:r.ALWAYS,[pS]:r.LESS,[og]:r.LEQUAL,[mS]:r.EQUAL,[vS]:r.GEQUAL,[xS]:r.GREATER,[gS]:r.NOTEQUAL};function ie(U,R){if(R.type===nr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Li||R.magFilter===pd||R.magFilter===Cl||R.magFilter===ps||R.minFilter===Li||R.minFilter===pd||R.minFilter===Cl||R.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,he[R.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,he[R.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,he[R.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Y[R.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Y[R.minFilter]),R.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,j[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===yi||R.minFilter!==Cl&&R.minFilter!==ps||R.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function Ne(U,R){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",I));const ge=R.source;let _e=y.get(ge);_e===void 0&&(_e={},y.set(ge,_e));const pe=de(R);if(pe!==U.__cacheKey){_e[pe]===void 0&&(_e[pe]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),_e[pe].usedTimes++;const Ge=_e[U.__cacheKey];Ge!==void 0&&(_e[U.__cacheKey].usedTimes--,Ge.usedTimes===0&&L(R)),U.__cacheKey=pe,U.__webglTexture=_e[pe].texture}return ne}function G(U,R,ne){let ge=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ge=r.TEXTURE_3D);const _e=Ne(U,R),pe=R.source;t.bindTexture(ge,U.__webglTexture,r.TEXTURE0+ne);const Ge=s.get(pe);if(pe.version!==Ge.__version||_e===!0){t.activeTexture(r.TEXTURE0+ne);const Ce=Mt.getPrimaries(Mt.workingColorSpace),ke=R.colorSpace===kr?null:Mt.getPrimaries(R.colorSpace),ft=R.colorSpace===kr||Ce===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=M(R.image,!1,l.maxTextureSize);Me=Rt(R,Me);const je=c.convert(R.format,R.colorSpace),tt=c.convert(R.type);let nt=C(R.internalFormat,je,tt,R.colorSpace,R.isVideoTexture);ie(ge,R);let Oe;const pt=R.mipmaps,ot=R.isVideoTexture!==!0,Ct=Ge.__version===void 0||_e===!0,X=pe.dataReady,Re=H(R,Me);if(R.isDepthTexture)nt=A(R.format===ha,R.type),Ct&&(ot?t.texStorage2D(r.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,nt,Me.width,Me.height,0,je,tt,null));else if(R.isDataTexture)if(pt.length>0){ot&&Ct&&t.texStorage2D(r.TEXTURE_2D,Re,nt,pt[0].width,pt[0].height);for(let ue=0,me=pt.length;ue<me;ue++)Oe=pt[ue],ot?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,je,tt,Oe.data):t.texImage2D(r.TEXTURE_2D,ue,nt,Oe.width,Oe.height,0,je,tt,Oe.data);R.generateMipmaps=!1}else ot?(Ct&&t.texStorage2D(r.TEXTURE_2D,Re,nt,Me.width,Me.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,je,tt,Me.data)):t.texImage2D(r.TEXTURE_2D,0,nt,Me.width,Me.height,0,je,tt,Me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ot&&Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,nt,pt[0].width,pt[0].height,Me.depth);for(let ue=0,me=pt.length;ue<me;ue++)if(Oe=pt[ue],R.format!==gi)if(je!==null)if(ot){if(X)if(R.layerUpdates.size>0){const Ie=t0(Oe.width,Oe.height,R.format,R.type);for(const De of R.layerUpdates){const lt=Oe.data.subarray(De*Ie/Oe.data.BYTES_PER_ELEMENT,(De+1)*Ie/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,De,Oe.width,Oe.height,1,je,lt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Oe.width,Oe.height,Me.depth,je,Oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,nt,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Oe.width,Oe.height,Me.depth,je,tt,Oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,nt,Oe.width,Oe.height,Me.depth,0,je,tt,Oe.data)}else{ot&&Ct&&t.texStorage2D(r.TEXTURE_2D,Re,nt,pt[0].width,pt[0].height);for(let ue=0,me=pt.length;ue<me;ue++)Oe=pt[ue],R.format!==gi?je!==null?ot?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,je,Oe.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,nt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,je,tt,Oe.data):t.texImage2D(r.TEXTURE_2D,ue,nt,Oe.width,Oe.height,0,je,tt,Oe.data)}else if(R.isDataArrayTexture)if(ot){if(Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,nt,Me.width,Me.height,Me.depth),X)if(R.layerUpdates.size>0){const ue=t0(Me.width,Me.height,R.format,R.type);for(const me of R.layerUpdates){const Ie=Me.data.subarray(me*ue/Me.data.BYTES_PER_ELEMENT,(me+1)*ue/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,je,tt,Ie)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,je,tt,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,je,tt,Me.data);else if(R.isData3DTexture)ot?(Ct&&t.texStorage3D(r.TEXTURE_3D,Re,nt,Me.width,Me.height,Me.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,je,tt,Me.data)):t.texImage3D(r.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,je,tt,Me.data);else if(R.isFramebufferTexture){if(Ct)if(ot)t.texStorage2D(r.TEXTURE_2D,Re,nt,Me.width,Me.height);else{let ue=Me.width,me=Me.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,nt,ue,me,0,je,tt,null),ue>>=1,me>>=1}}else if(pt.length>0){if(ot&&Ct){const ue=Ke(pt[0]);t.texStorage2D(r.TEXTURE_2D,Re,nt,ue.width,ue.height)}for(let ue=0,me=pt.length;ue<me;ue++)Oe=pt[ue],ot?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,je,tt,Oe):t.texImage2D(r.TEXTURE_2D,ue,nt,je,tt,Oe);R.generateMipmaps=!1}else if(ot){if(Ct){const ue=Ke(Me);t.texStorage2D(r.TEXTURE_2D,Re,nt,ue.width,ue.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,je,tt,Me)}else t.texImage2D(r.TEXTURE_2D,0,nt,je,tt,Me);S(R)&&g(ge),Ge.__version=pe.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function fe(U,R,ne){if(R.image.length!==6)return;const ge=Ne(U,R),_e=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+ne);const pe=s.get(_e);if(_e.version!==pe.__version||ge===!0){t.activeTexture(r.TEXTURE0+ne);const Ge=Mt.getPrimaries(Mt.workingColorSpace),Ce=R.colorSpace===kr?null:Mt.getPrimaries(R.colorSpace),ke=R.colorSpace===kr||Ge===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ft=R.isCompressedTexture||R.image[0].isCompressedTexture,Me=R.image[0]&&R.image[0].isDataTexture,je=[];for(let me=0;me<6;me++)!ft&&!Me?je[me]=M(R.image[me],!0,l.maxCubemapSize):je[me]=Me?R.image[me].image:R.image[me],je[me]=Rt(R,je[me]);const tt=je[0],nt=c.convert(R.format,R.colorSpace),Oe=c.convert(R.type),pt=C(R.internalFormat,nt,Oe,R.colorSpace),ot=R.isVideoTexture!==!0,Ct=pe.__version===void 0||ge===!0,X=_e.dataReady;let Re=H(R,tt);ie(r.TEXTURE_CUBE_MAP,R);let ue;if(ft){ot&&Ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,pt,tt.width,tt.height);for(let me=0;me<6;me++){ue=je[me].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const De=ue[Ie];R.format!==gi?nt!==null?ot?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,De.width,De.height,nt,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,pt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,De.width,De.height,nt,Oe,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,pt,De.width,De.height,0,nt,Oe,De.data)}}}else{if(ue=R.mipmaps,ot&&Ct){ue.length>0&&Re++;const me=Ke(je[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,pt,me.width,me.height)}for(let me=0;me<6;me++)if(Me){ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,je[me].width,je[me].height,nt,Oe,je[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,je[me].width,je[me].height,0,nt,Oe,je[me].data);for(let Ie=0;Ie<ue.length;Ie++){const lt=ue[Ie].image[me].image;ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,lt.width,lt.height,nt,Oe,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,pt,lt.width,lt.height,0,nt,Oe,lt.data)}}else{ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,nt,Oe,je[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,nt,Oe,je[me]);for(let Ie=0;Ie<ue.length;Ie++){const De=ue[Ie];ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,nt,Oe,De.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,pt,nt,Oe,De.image[me])}}}S(R)&&g(r.TEXTURE_CUBE_MAP),pe.__version=_e.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function Se(U,R,ne,ge,_e,pe){const Ge=c.convert(ne.format,ne.colorSpace),Ce=c.convert(ne.type),ke=C(ne.internalFormat,Ge,Ce,ne.colorSpace),ft=s.get(R),Me=s.get(ne);if(Me.__renderTarget=R,!ft.__hasExternalTextures){const je=Math.max(1,R.width>>pe),tt=Math.max(1,R.height>>pe);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,pe,ke,je,tt,R.depth,0,Ge,Ce,null):t.texImage2D(_e,pe,ke,je,tt,0,Ge,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),it(R)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,_e,Me.__webglTexture,0,Qe(R)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,_e,Me.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(U,R,ne){if(r.bindRenderbuffer(r.RENDERBUFFER,U),R.depthBuffer){const ge=R.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,pe=A(R.stencilBuffer,_e),Ge=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=Qe(R);it(R)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,pe,R.width,R.height):ne?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,pe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,U)}else{const ge=R.textures;for(let _e=0;_e<ge.length;_e++){const pe=ge[_e],Ge=c.convert(pe.format,pe.colorSpace),Ce=c.convert(pe.type),ke=C(pe.internalFormat,Ge,Ce,pe.colorSpace),ft=Qe(R);ne&&it(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,ke,R.width,R.height):it(R)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,ke,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ke,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(R.depthTexture);ge.__renderTarget=R,(!ge.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),le(R.depthTexture,0);const _e=ge.__webglTexture,pe=Qe(R);if(R.depthTexture.format===sa)it(R)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(R.depthTexture.format===ha)it(R)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Le(U){const R=s.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const ge=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ge){const _e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),R.__depthDisposeCallback=_e}R.__boundDepthTexture=ge}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Ae(R.__webglFramebuffer,U)}else if(ne){R.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[ge]),R.__webglDepthbuffer[ge]===void 0)R.__webglDepthbuffer[ge]=r.createRenderbuffer(),xe(R.__webglDepthbuffer[ge],U,!1);else{const _e=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=R.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),xe(R.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,_e)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(U,R,ne){const ge=s.get(U);R!==void 0&&Se(ge.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ne!==void 0&&Le(U)}function Nt(U){const R=U.texture,ne=s.get(U),ge=s.get(R);U.addEventListener("dispose",P);const _e=U.textures,pe=U.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=R.version,d.memory.textures++),pe){ne.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer[Ce]=[];for(let ke=0;ke<R.mipmaps.length;ke++)ne.__webglFramebuffer[Ce][ke]=r.createFramebuffer()}else ne.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)ne.__webglFramebuffer[Ce]=r.createFramebuffer()}else ne.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Ce=0,ke=_e.length;Ce<ke;Ce++){const ft=s.get(_e[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),d.memory.textures++)}if(U.samples>0&&it(U)===!1){ne.__webglMultisampledFramebuffer=r.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const ke=_e[Ce];ne.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce]);const ft=c.convert(ke.format,ke.colorSpace),Me=c.convert(ke.type),je=C(ke.internalFormat,ft,Me,ke.colorSpace,U.isXRRenderTarget===!0),tt=Qe(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,je,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),ie(r.TEXTURE_CUBE_MAP,R);for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)Se(ne.__webglFramebuffer[Ce][ke],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else Se(ne.__webglFramebuffer[Ce],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(R)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ce=0,ke=_e.length;Ce<ke;Ce++){const ft=_e[Ce],Me=s.get(ft);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),ie(r.TEXTURE_2D,ft),Se(ne.__webglFramebuffer,U,ft,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),S(ft)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ge.__webglTexture),ie(Ce,R),R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)Se(ne.__webglFramebuffer[ke],U,R,r.COLOR_ATTACHMENT0,Ce,ke);else Se(ne.__webglFramebuffer,U,R,r.COLOR_ATTACHMENT0,Ce,0);S(R)&&g(Ce),t.unbindTexture()}U.depthBuffer&&Le(U)}function ht(U){const R=U.textures;for(let ne=0,ge=R.length;ne<ge;ne++){const _e=R[ne];if(S(_e)){const pe=T(U),Ge=s.get(_e).__webglTexture;t.bindTexture(pe,Ge),g(pe),t.unbindTexture()}}}const Dt=[],$=[];function _t(U){if(U.samples>0){if(it(U)===!1){const R=U.textures,ne=U.width,ge=U.height;let _e=r.COLOR_BUFFER_BIT;const pe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(U),Ce=R.length>1;if(Ce)for(let ke=0;ke<R.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ke=0;ke<R.length;ke++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[ke]);const ft=s.get(R[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,ne,ge,0,0,ne,ge,_e,r.NEAREST),f===!0&&(Dt.length=0,$.length=0,Dt.push(r.COLOR_ATTACHMENT0+ke),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Dt.push(pe),$.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let ke=0;ke<R.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[ke]);const ft=s.get(R[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,ft,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const R=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Qe(U){return Math.min(l.maxSamples,U.samples)}function it(U){const R=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ye(U){const R=d.render.frame;m.get(U)!==R&&(m.set(U,R),U.update())}function Rt(U,R){const ne=U.colorSpace,ge=U.format,_e=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==va&&ne!==kr&&(Mt.getTransfer(ne)===Lt?(ge!==gi||_e!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),R}function Ke(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(x.width=U.naturalWidth||U.width,x.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(x.width=U.displayWidth,x.height=U.displayHeight):(x.width=U.width,x.height=U.height),x}this.allocateTextureUnit=ee,this.resetTextureUnits=Q,this.setTexture2D=le,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=it}function M2(r,e){function t(s,l=kr){let c;const d=Mt.getTransfer(l);if(s===or)return r.UNSIGNED_BYTE;if(s===sf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===af)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Q0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===K0)return r.BYTE;if(s===Z0)return r.SHORT;if(s===uo)return r.UNSIGNED_SHORT;if(s===rf)return r.INT;if(s===xs)return r.UNSIGNED_INT;if(s===nr)return r.FLOAT;if(s===go)return r.HALF_FLOAT;if(s===J0)return r.ALPHA;if(s===eg)return r.RGB;if(s===gi)return r.RGBA;if(s===tg)return r.LUMINANCE;if(s===ng)return r.LUMINANCE_ALPHA;if(s===sa)return r.DEPTH_COMPONENT;if(s===ha)return r.DEPTH_STENCIL;if(s===ig)return r.RED;if(s===of)return r.RED_INTEGER;if(s===rg)return r.RG;if(s===lf)return r.RG_INTEGER;if(s===cf)return r.RGBA_INTEGER;if(s===tc||s===nc||s===ic||s===rc)if(d===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===tc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===tc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===uh||s===dh||s===hh||s===fh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ph||s===mh||s===xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ph||s===mh)return d===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===xh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gh||s===vh||s===_h||s===yh||s===Sh||s===wh||s===Mh||s===Eh||s===bh||s===Th||s===Nh||s===Ah||s===Ch||s===Rh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===gh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_h)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Eh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Th)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ah)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ch)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sc||s===Ph||s===Dh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===sc)return d===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ph)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sg||s===Lh||s===Ih||s===Uh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===sc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Lh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ih)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===da?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class E2 extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class co extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b2={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let l=null,c=null,d=null;const h=this._targetRay,f=this._grip,x=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(x&&e.hand){d=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,s),g=this._getHandJoint(x,M);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const m=x.joints["index-finger-tip"],v=x.joints["thumb-tip"],y=m.position.distanceTo(v.position),w=.02,E=.005;x.inputState.pinching&&y>w+E?(x.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!x.inputState.pinching&&y<=w-E&&(x.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,s),c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,c.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(c.linearVelocity)):f.hasLinearVelocity=!1,c.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(c.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(l=t.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(b2)))}return h!==null&&(h.visible=l!==null),f!==null&&(f.visible=c!==null),x!==null&&(x.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new co;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const T2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N2=`
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

}`;class A2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const l=new Fn,c=e.properties.get(l);c.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Vr({vertexShader:T2,fragmentShader:N2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new Ec(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C2 extends _a{constructor(e,t){super();const s=this;let l=null,c=1,d=null,h="local-floor",f=1,x=null,m=null,v=null,y=null,w=null,E=null;const M=new A2,S=t.getContextAttributes();let g=null,T=null;const C=[],A=[],H=new yt;let I=null;const P=new Gn;P.viewport=new It;const O=new Gn;O.viewport=new It;const L=[P,O],N=new E2;let z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let fe=C[G];return fe===void 0&&(fe=new Hd,C[G]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(G){let fe=C[G];return fe===void 0&&(fe=new Hd,C[G]=fe),fe.getGripSpace()},this.getHand=function(G){let fe=C[G];return fe===void 0&&(fe=new Hd,C[G]=fe),fe.getHandSpace()};function ee(G){const fe=A.indexOf(G.inputSource);if(fe===-1)return;const Se=C[fe];Se!==void 0&&(Se.update(G.inputSource,G.frame,x||d),Se.dispatchEvent({type:G.type,data:G.inputSource}))}function de(){l.removeEventListener("select",ee),l.removeEventListener("selectstart",ee),l.removeEventListener("selectend",ee),l.removeEventListener("squeeze",ee),l.removeEventListener("squeezestart",ee),l.removeEventListener("squeezeend",ee),l.removeEventListener("end",de),l.removeEventListener("inputsourceschange",le);for(let G=0;G<C.length;G++){const fe=A[G];fe!==null&&(A[G]=null,C[G].disconnect(fe))}z=null,Q=null,M.reset(),e.setRenderTarget(g),w=null,y=null,v=null,l=null,T=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||d},this.setReferenceSpace=function(G){x=G},this.getBaseLayer=function(){return y!==null?y:w},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",ee),l.addEventListener("selectstart",ee),l.addEventListener("selectend",ee),l.addEventListener("squeeze",ee),l.addEventListener("squeezestart",ee),l.addEventListener("squeezeend",ee),l.addEventListener("end",de),l.addEventListener("inputsourceschange",le),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(H),l.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};w=new XRWebGLLayer(l,t,fe),l.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),T=new gs(w.framebufferWidth,w.framebufferHeight,{format:gi,type:or,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Se=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?ha:sa,Se=S.stencil?da:xs);const Ae={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:c};v=new XRWebGLBinding(l,t),y=v.createProjectionLayer(Ae),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),T=new gs(y.textureWidth,y.textureHeight,{format:gi,type:or,depthTexture:new Sg(y.textureWidth,y.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),x=null,d=await l.requestReferenceSpace(h),Ne.setContext(l),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function le(G){for(let fe=0;fe<G.removed.length;fe++){const Se=G.removed[fe],xe=A.indexOf(Se);xe>=0&&(A[xe]=null,C[xe].disconnect(Se))}for(let fe=0;fe<G.added.length;fe++){const Se=G.added[fe];let xe=A.indexOf(Se);if(xe===-1){for(let Le=0;Le<C.length;Le++)if(Le>=A.length){A.push(Se),xe=Le;break}else if(A[Le]===null){A[Le]=Se,xe=Le;break}if(xe===-1)break}const Ae=C[xe];Ae&&Ae.connect(Se)}}const oe=new Z,ce=new Z;function B(G,fe,Se){oe.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const xe=oe.distanceTo(ce),Ae=fe.projectionMatrix.elements,Le=Se.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),Nt=Ae[14]/(Ae[10]+1),ht=(Ae[9]+1)/Ae[5],Dt=(Ae[9]-1)/Ae[5],$=(Ae[8]-1)/Ae[0],_t=(Le[8]+1)/Le[0],Qe=Ze*$,it=Ze*_t,Ye=xe/(-$+_t),Rt=Ye*-$;if(fe.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Rt),G.translateZ(Ye),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ae[10]===-1)G.projectionMatrix.copy(fe.projectionMatrix),G.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ke=Ze+Ye,U=Nt+Ye,R=Qe-Rt,ne=it+(xe-Rt),ge=ht*Nt/U*Ke,_e=Dt*Nt/U*Ke;G.projectionMatrix.makePerspective(R,ne,ge,_e,Ke,U),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function he(G,fe){fe===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(fe.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;let fe=G.near,Se=G.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Se=M.depthFar)),N.near=O.near=P.near=fe,N.far=O.far=P.far=Se,(z!==N.near||Q!==N.far)&&(l.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,Q=N.far),P.layers.mask=G.layers.mask|2,O.layers.mask=G.layers.mask|4,N.layers.mask=P.layers.mask|O.layers.mask;const xe=G.parent,Ae=N.cameras;he(N,xe);for(let Le=0;Le<Ae.length;Le++)he(Ae[Le],xe);Ae.length===2?B(N,P,O):N.projectionMatrix.copy(P.projectionMatrix),Y(G,N,xe)};function Y(G,fe,Se){Se===null?G.matrix.copy(fe.matrixWorld):(G.matrix.copy(Se.matrixWorld),G.matrix.invert(),G.matrix.multiply(fe.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(fe.projectionMatrix),G.projectionMatrixInverse.copy(fe.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=kh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(y===null&&w===null))return f},this.setFoveation=function(G){f=G,y!==null&&(y.fixedFoveation=G),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=G)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(N)};let j=null;function ie(G,fe){if(m=fe.getViewerPose(x||d),E=fe,m!==null){const Se=m.views;w!==null&&(e.setRenderTargetFramebuffer(T,w.framebuffer),e.setRenderTarget(T));let xe=!1;Se.length!==N.cameras.length&&(N.cameras.length=0,xe=!0);for(let Le=0;Le<Se.length;Le++){const Ze=Se[Le];let Nt=null;if(w!==null)Nt=w.getViewport(Ze);else{const Dt=v.getViewSubImage(y,Ze);Nt=Dt.viewport,Le===0&&(e.setRenderTargetTextures(T,Dt.colorTexture,y.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(T))}let ht=L[Le];ht===void 0&&(ht=new Gn,ht.layers.enable(Le),ht.viewport=new It,L[Le]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Le===0&&(N.matrix.copy(ht.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),xe===!0&&N.cameras.push(ht)}const Ae=l.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=v.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&M.init(e,Le,l.renderState)}}for(let Se=0;Se<C.length;Se++){const xe=A[Se],Ae=C[Se];xe!==null&&Ae!==void 0&&Ae.update(xe,fe,x||d)}j&&j(G,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ne=new _g;Ne.setAnimationLoop(ie),this.setAnimationLoop=function(G){j=G},this.dispose=function(){}}}const ls=new Ui,R2=new Vt;function P2(r,e){function t(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function s(S,g){g.color.getRGB(S.fogColor.value,xg(r)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,T,C,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),v(S,g)):g.isMeshPhongMaterial?(c(S,g),m(S,g)):g.isMeshStandardMaterial?(c(S,g),y(S,g),g.isMeshPhysicalMaterial&&w(S,g,A)):g.isMeshMatcapMaterial?(c(S,g),E(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),M(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(d(S,g),g.isLineDashedMaterial&&h(S,g)):g.isPointsMaterial?f(S,g,T,C):g.isSpriteMaterial?x(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,t(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===kn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,t(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===kn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,t(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,t(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const T=e.get(g),C=T.envMap,A=T.envMapRotation;C&&(S.envMap.value=C,ls.copy(A),ls.x*=-1,ls.y*=-1,ls.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),S.envMapRotation.value.setFromMatrix4(R2.makeRotationFromEuler(ls)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,S.aoMapTransform))}function d(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform))}function h(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function f(S,g,T,C){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*T,S.scale.value=C*.5,g.map&&(S.map.value=g.map,t(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function x(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function v(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function w(S,g,T){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function M(S,g){const T=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function D2(r,e,t,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,C){const A=C.program;s.uniformBlockBinding(T,A)}function x(T,C){let A=l[T.id];A===void 0&&(E(T),A=m(T),l[T.id]=A,T.addEventListener("dispose",S));const H=C.program;s.updateUBOMapping(T,H);const I=e.render.frame;c[T.id]!==I&&(y(T),c[T.id]=I)}function m(T){const C=v();T.__bindingPointIndex=C;const A=r.createBuffer(),H=T.__size,I=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,H,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,A),A}function v(){for(let T=0;T<h;T++)if(d.indexOf(T)===-1)return d.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(T){const C=l[T.id],A=T.uniforms,H=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let I=0,P=A.length;I<P;I++){const O=Array.isArray(A[I])?A[I]:[A[I]];for(let L=0,N=O.length;L<N;L++){const z=O[L];if(w(z,I,L,H)===!0){const Q=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let le=0;le<ee.length;le++){const oe=ee[le],ce=M(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,Q+de,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function w(T,C,A,H){const I=T.value,P=C+"_"+A;if(H[P]===void 0)return typeof I=="number"||typeof I=="boolean"?H[P]=I:H[P]=I.clone(),!0;{const O=H[P];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return H[P]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function E(T){const C=T.uniforms;let A=0;const H=16;for(let P=0,O=C.length;P<O;P++){const L=Array.isArray(C[P])?C[P]:[C[P]];for(let N=0,z=L.length;N<z;N++){const Q=L[N],ee=Array.isArray(Q.value)?Q.value:[Q.value];for(let de=0,le=ee.length;de<le;de++){const oe=ee[de],ce=M(oe),B=A%H,he=B%ce.boundary,Y=B+he;A+=he,Y!==0&&H-Y<ce.storage&&(A+=H-Y),Q.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=ce.storage}}}const I=A%H;return I>0&&(A+=H-I),T.__size=A,T.__cache={},this}function M(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),C}function S(T){const C=T.target;C.removeEventListener("dispose",S);const A=d.indexOf(C.__bindingPointIndex);d.splice(A,1),r.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function g(){for(const T in l)r.deleteBuffer(l[T]);d=[],l={},c={}}return{bind:f,update:x,dispose:g}}class L2{constructor(e={}){const{canvas:t=SS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:x=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=d;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,g=null;const T=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Or,this.toneMappingExposure=1;const A=this;let H=!1,I=0,P=0,O=null,L=-1,N=null;const z=new It,Q=new It;let ee=null;const de=new Tt(0);let le=0,oe=t.width,ce=t.height,B=1,he=null,Y=null;const j=new It(0,0,oe,ce),ie=new It(0,0,oe,ce);let Ne=!1;const G=new uf;let fe=!1,Se=!1;const xe=new Vt,Ae=new Vt,Le=new Z,Ze=new It,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Dt(){return O===null?B:1}let $=s;function _t(D,q){return t.getContext(D,q)}try{const D={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:x,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nf}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",De,!1),$===null){const q="webgl2";if($=_t(q,D),$===null)throw _t(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Qe,it,Ye,Rt,Ke,U,R,ne,ge,_e,pe,Ge,Ce,ke,ft,Me,je,tt,nt,Oe,pt,ot,Ct,X;function Re(){Qe=new jE($),Qe.init(),ot=new M2($,Qe),it=new DE($,Qe,e,ot),Ye=new y2($,Qe),it.reverseDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),Rt=new BE($),Ke=new s2,U=new w2($,Qe,Ye,Ke,it,ot,Rt),R=new IE(A),ne=new FE(A),ge=new qS($),Ct=new RE($,ge),_e=new OE($,ge,Rt,Ct),pe=new HE($,_e,ge,Rt),nt=new VE($,it,U),Me=new LE(Ke),Ge=new r2(A,R,ne,Qe,it,Ct,Me),Ce=new P2(A,Ke),ke=new o2,ft=new f2(Qe),tt=new CE(A,R,ne,Ye,pe,w,f),je=new v2(A,pe,it),X=new D2($,Rt,it,Ye),Oe=new PE($,Qe,Rt),pt=new zE($,Qe,Rt),Rt.programs=Ge.programs,A.capabilities=it,A.extensions=Qe,A.properties=Ke,A.renderLists=ke,A.shadowMap=je,A.state=Ye,A.info=Rt}Re();const ue=new C2(A,$);this.xr=ue,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const D=Qe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Qe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(D){D!==void 0&&(B=D,this.setSize(oe,ce,!1))},this.getSize=function(D){return D.set(oe,ce)},this.setSize=function(D,q,se=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=D,ce=q,t.width=Math.floor(D*B),t.height=Math.floor(q*B),se===!0&&(t.style.width=D+"px",t.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(oe*B,ce*B).floor()},this.setDrawingBufferSize=function(D,q,se){oe=D,ce=q,B=se,t.width=Math.floor(D*se),t.height=Math.floor(q*se),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(j)},this.setViewport=function(D,q,se,ae){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,q,se,ae),Ye.viewport(z.copy(j).multiplyScalar(B).round())},this.getScissor=function(D){return D.copy(ie)},this.setScissor=function(D,q,se,ae){D.isVector4?ie.set(D.x,D.y,D.z,D.w):ie.set(D,q,se,ae),Ye.scissor(Q.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(D){Ye.setScissorTest(Ne=D)},this.setOpaqueSort=function(D){he=D},this.setTransparentSort=function(D){Y=D},this.getClearColor=function(D){return D.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(D=!0,q=!0,se=!0){let ae=0;if(D){let K=!1;if(O!==null){const Te=O.texture.format;K=Te===cf||Te===lf||Te===of}if(K){const Te=O.texture.type,Ee=Te===or||Te===xs||Te===uo||Te===da||Te===sf||Te===af,We=tt.getClearColor(),Ve=tt.getClearAlpha(),rt=We.r,at=We.g,Xe=We.b;Ee?(E[0]=rt,E[1]=at,E[2]=Xe,E[3]=Ve,$.clearBufferuiv($.COLOR,0,E)):(M[0]=rt,M[1]=at,M[2]=Xe,M[3]=Ve,$.clearBufferiv($.COLOR,0,M))}else ae|=$.COLOR_BUFFER_BIT}q&&(ae|=$.DEPTH_BUFFER_BIT),se&&(ae|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",De,!1),ke.dispose(),ft.dispose(),Ke.dispose(),R.dispose(),ne.dispose(),pe.dispose(),Ct.dispose(),X.dispose(),Ge.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",vs),ue.removeEventListener("sessionend",cr),ki.stop()};function me(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const D=Rt.autoReset,q=je.enabled,se=je.autoUpdate,ae=je.needsUpdate,K=je.type;Re(),Rt.autoReset=D,je.enabled=q,je.autoUpdate=se,je.needsUpdate=ae,je.type=K}function De(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const q=D.target;q.removeEventListener("dispose",lt),Ft(q)}function Ft(D){Kt(D),Ke.remove(D)}function Kt(D){const q=Ke.get(D).programs;q!==void 0&&(q.forEach(function(se){Ge.releaseProgram(se)}),D.isShaderMaterial&&Ge.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,se,ae,K,Te){q===null&&(q=Nt);const Ee=K.isMesh&&K.matrixWorld.determinant()<0,We=Eo(D,q,se,ae,K);Ye.setMaterial(ae,Ee);let Ve=se.index,rt=1;if(ae.wireframe===!0){if(Ve=_e.getWireframeAttribute(se),Ve===void 0)return;rt=2}const at=se.drawRange,Xe=se.attributes.position;let vt=at.start*rt,At=(at.start+at.count)*rt;Te!==null&&(vt=Math.max(vt,Te.start*rt),At=Math.min(At,(Te.start+Te.count)*rt)),Ve!==null?(vt=Math.max(vt,0),At=Math.min(At,Ve.count)):Xe!=null&&(vt=Math.max(vt,0),At=Math.min(At,Xe.count));const xt=At-vt;if(xt<0||xt===1/0)return;Ct.setup(K,ae,We,se,Ve);let un,ct=Oe;if(Ve!==null&&(un=ge.get(Ve),ct=pt,ct.setIndex(un)),K.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*Dt()),ct.setMode($.LINES)):ct.setMode($.TRIANGLES);else if(K.isLine){let qe=ae.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Dt()),K.isLineSegments?ct.setMode($.LINES):K.isLineLoop?ct.setMode($.LINE_LOOP):ct.setMode($.LINE_STRIP)}else K.isPoints?ct.setMode($.POINTS):K.isSprite&&ct.setMode($.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ct.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ct.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qe=K._multiDrawStarts,si=K._multiDrawCounts,Et=K._multiDrawCount,dn=Ve?ge.get(Ve).bytesPerElement:1,ai=Ke.get(ae).currentProgram.getUniforms();for(let Zt=0;Zt<Et;Zt++)ai.setValue($,"_gl_DrawID",Zt),ct.render(qe[Zt]/dn,si[Zt])}else if(K.isInstancedMesh)ct.renderInstances(vt,xt,K.count);else if(se.isInstancedBufferGeometry){const qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,si=Math.min(se.instanceCount,qe);ct.renderInstances(vt,xt,si)}else ct.render(vt,xt)};function St(D,q,se){D.transparent===!0&&D.side===tr&&D.forceSinglePass===!1?(D.side=kn,D.needsUpdate=!0,_s(D,q,se),D.side=Br,D.needsUpdate=!0,_s(D,q,se),D.side=tr):_s(D,q,se)}this.compile=function(D,q,se=null){se===null&&(se=D),g=ft.get(se),g.init(q),C.push(g),se.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),D!==se&&D.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights();const ae=new Set;return D.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Ee=0;Ee<Te.length;Ee++){const We=Te[Ee];St(We,se,K),ae.add(We)}else St(Te,se,K),ae.add(Te)}),C.pop(),g=null,ae},this.compileAsync=function(D,q,se=null){const ae=this.compile(D,q,se);return new Promise(K=>{function Te(){if(ae.forEach(function(Ee){Ke.get(Ee).currentProgram.isReady()&&ae.delete(Ee)}),ae.size===0){K(D);return}setTimeout(Te,10)}Qe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let bn=null;function _n(D){bn&&bn(D)}function vs(){ki.stop()}function cr(){ki.start()}const ki=new _g;ki.setAnimationLoop(_n),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(D){bn=D,ue.setAnimationLoop(D),D===null?ki.stop():ki.start()},ue.addEventListener("sessionstart",vs),ue.addEventListener("sessionend",cr),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(q),q=ue.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,q,O),g=ft.get(D,C.length),g.init(q),C.push(g),Ae.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,Se),S=ke.get(D,T.length),S.init(),T.push(S),ue.enabled===!0&&ue.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&Fi(Te,q,-1/0,A.sortObjects)}Fi(D,q,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(he,Y),ht=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ht&&tt.addToRenderList(S,D),this.info.render.frame++,fe===!0&&Me.beginShadows();const se=g.state.shadowsArray;je.render(se,D,q),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,K=S.transmissive;if(g.setupLights(),q.isArrayCamera){const Te=q.cameras;if(K.length>0)for(let Ee=0,We=Te.length;Ee<We;Ee++){const Ve=Te[Ee];Gr(ae,K,D,Ve)}ht&&tt.render(D);for(let Ee=0,We=Te.length;Ee<We;Ee++){const Ve=Te[Ee];Hr(S,D,Ve,Ve.viewport)}}else K.length>0&&Gr(ae,K,D,q),ht&&tt.render(D),Hr(S,D,q);O!==null&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),D.isScene===!0&&D.onAfterRender(A,D,q),Ct.resetDefaultState(),L=-1,N=null,C.pop(),C.length>0?(g=C[C.length-1],fe===!0&&Me.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function Fi(D,q,se,ae){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)se=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||G.intersectsSprite(D)){ae&&Ze.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ae);const Ee=pe.update(D),We=D.material;We.visible&&S.push(D,Ee,We,se,Ze.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||G.intersectsObject(D))){const Ee=pe.update(D),We=D.material;if(ae&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ze.copy(D.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ze.copy(Ee.boundingSphere.center)),Ze.applyMatrix4(D.matrixWorld).applyMatrix4(Ae)),Array.isArray(We)){const Ve=Ee.groups;for(let rt=0,at=Ve.length;rt<at;rt++){const Xe=Ve[rt],vt=We[Xe.materialIndex];vt&&vt.visible&&S.push(D,Ee,vt,se,Ze.z,Xe)}}else We.visible&&S.push(D,Ee,We,se,Ze.z,null)}}const Te=D.children;for(let Ee=0,We=Te.length;Ee<We;Ee++)Fi(Te[Ee],q,se,ae)}function Hr(D,q,se,ae){const K=D.opaque,Te=D.transmissive,Ee=D.transparent;g.setupLightsView(se),fe===!0&&Me.setGlobalState(A.clippingPlanes,se),ae&&Ye.viewport(z.copy(ae)),K.length>0&&ur(K,q,se),Te.length>0&&ur(Te,q,se),Ee.length>0&&ur(Ee,q,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Gr(D,q,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ae.id]===void 0&&(g.state.transmissionRenderTarget[ae.id]=new gs(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?go:or,minFilter:ps,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[ae.id],Ee=ae.viewport||z;Te.setSize(Ee.z,Ee.w);const We=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(de),le=A.getClearAlpha(),le<1&&A.setClearColor(16777215,.5),A.clear(),ht&&tt.render(se);const Ve=A.toneMapping;A.toneMapping=Or;const rt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),g.setupLightsView(ae),fe===!0&&Me.setGlobalState(A.clippingPlanes,ae),ur(D,se,ae),U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Xe=0,vt=q.length;Xe<vt;Xe++){const At=q[Xe],xt=At.object,un=At.geometry,ct=At.material,qe=At.group;if(ct.side===tr&&xt.layers.test(ae.layers)){const si=ct.side;ct.side=kn,ct.needsUpdate=!0,wo(xt,se,ae,un,ct,qe),ct.side=si,ct.needsUpdate=!0,at=!0}}at===!0&&(U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te))}A.setRenderTarget(We),A.setClearColor(de,le),rt!==void 0&&(ae.viewport=rt),A.toneMapping=Ve}function ur(D,q,se){const ae=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Te=D.length;K<Te;K++){const Ee=D[K],We=Ee.object,Ve=Ee.geometry,rt=ae===null?Ee.material:ae,at=Ee.group;We.layers.test(se.layers)&&wo(We,q,se,Ve,rt,at)}}function wo(D,q,se,ae,K,Te){D.onBeforeRender(A,q,se,ae,K,Te),D.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(A,q,se,ae,D,Te),K.transparent===!0&&K.side===tr&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,A.renderBufferDirect(se,q,ae,K,D,Te),K.side=Br,K.needsUpdate=!0,A.renderBufferDirect(se,q,ae,K,D,Te),K.side=tr):A.renderBufferDirect(se,q,ae,K,D,Te),D.onAfterRender(A,q,se,ae,K,Te)}function _s(D,q,se){q.isScene!==!0&&(q=Nt);const ae=Ke.get(D),K=g.state.lights,Te=g.state.shadowsArray,Ee=K.state.version,We=Ge.getParameters(D,K.state,Te,q,se),Ve=Ge.getProgramCacheKey(We);let rt=ae.programs;ae.environment=D.isMeshStandardMaterial?q.environment:null,ae.fog=q.fog,ae.envMap=(D.isMeshStandardMaterial?ne:R).get(D.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,rt===void 0&&(D.addEventListener("dispose",lt),rt=new Map,ae.programs=rt);let at=rt.get(Ve);if(at!==void 0){if(ae.currentProgram===at&&ae.lightsStateVersion===Ee)return Ei(D,We),at}else We.uniforms=Ge.getUniforms(D),D.onBeforeCompile(We,A),at=Ge.acquireProgram(We,Ve),rt.set(Ve,at),ae.uniforms=We.uniforms;const Xe=ae.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),Ei(D,We),ae.needsLights=Nc(D),ae.lightsStateVersion=Ee,ae.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),ae.currentProgram=at,ae.uniformsList=null,at}function Mo(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=ac.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function Ei(D,q){const se=Ke.get(D);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function Eo(D,q,se,ae,K){q.isScene!==!0&&(q=Nt),U.resetTextureUnits();const Te=q.fog,Ee=ae.isMeshStandardMaterial?q.environment:null,We=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:va,Ve=(ae.isMeshStandardMaterial?ne:R).get(ae.envMap||Ee),rt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,at=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!se.morphAttributes.position,vt=!!se.morphAttributes.normal,At=!!se.morphAttributes.color;let xt=Or;ae.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(xt=A.toneMapping);const un=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ct=un!==void 0?un.length:0,qe=Ke.get(ae),si=g.state.lights;if(fe===!0&&(Se===!0||D!==N)){const yn=D===N&&ae.id===L;Me.setState(ae,D,yn)}let Et=!1;ae.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==si.state.version||qe.outputColorSpace!==We||K.isBatchedMesh&&qe.batching===!1||!K.isBatchedMesh&&qe.batching===!0||K.isBatchedMesh&&qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qe.instancingMorph===!1&&K.morphTexture!==null||qe.envMap!==Ve||ae.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==rt||qe.vertexTangents!==at||qe.morphTargets!==Xe||qe.morphNormals!==vt||qe.morphColors!==At||qe.toneMapping!==xt||qe.morphTargetsCount!==ct)&&(Et=!0):(Et=!0,qe.__version=ae.version);let dn=qe.currentProgram;Et===!0&&(dn=_s(ae,q,K));let ai=!1,Zt=!1,bi=!1;const Ut=dn.getUniforms(),$n=qe.uniforms;if(Ye.useProgram(dn.program)&&(ai=!0,Zt=!0,bi=!0),ae.id!==L&&(L=ae.id,Zt=!0),ai||N!==D){Ye.buffers.depth.getReversed()?(xe.copy(D.projectionMatrix),MS(xe),ES(xe),Ut.setValue($,"projectionMatrix",xe)):Ut.setValue($,"projectionMatrix",D.projectionMatrix),Ut.setValue($,"viewMatrix",D.matrixWorldInverse);const qn=Ut.map.cameraPosition;qn!==void 0&&qn.setValue($,Le.setFromMatrixPosition(D.matrixWorld)),it.logarithmicDepthBuffer&&Ut.setValue($,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ut.setValue($,"isOrthographic",D.isOrthographicCamera===!0),N!==D&&(N=D,Zt=!0,bi=!0)}if(K.isSkinnedMesh){Ut.setOptional($,K,"bindMatrix"),Ut.setOptional($,K,"bindMatrixInverse");const yn=K.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ut.setValue($,"boneTexture",yn.boneTexture,U))}K.isBatchedMesh&&(Ut.setOptional($,K,"batchingTexture"),Ut.setValue($,"batchingTexture",K._matricesTexture,U),Ut.setOptional($,K,"batchingIdTexture"),Ut.setValue($,"batchingIdTexture",K._indirectTexture,U),Ut.setOptional($,K,"batchingColorTexture"),K._colorsTexture!==null&&Ut.setValue($,"batchingColorTexture",K._colorsTexture,U));const ji=se.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&nt.update(K,se,dn),(Zt||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,Ut.setValue($,"receiveShadow",K.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&($n.envMap.value=Ve,$n.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&q.environment!==null&&($n.envMapIntensity.value=q.environmentIntensity),Zt&&(Ut.setValue($,"toneMappingExposure",A.toneMappingExposure),qe.needsLights&&bo($n,bi),Te&&ae.fog===!0&&Ce.refreshFogUniforms($n,Te),Ce.refreshMaterialUniforms($n,ae,B,ce,g.state.transmissionRenderTarget[D.id]),ac.upload($,Mo(qe),$n,U)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(ac.upload($,Mo(qe),$n,U),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ut.setValue($,"center",K.center),Ut.setValue($,"modelViewMatrix",K.modelViewMatrix),Ut.setValue($,"normalMatrix",K.normalMatrix),Ut.setValue($,"modelMatrix",K.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const yn=ae.uniformsGroups;for(let qn=0,Tn=yn.length;qn<Tn;qn++){const To=yn[qn];X.update(To,dn),X.bind(To,dn)}}return dn}function bo(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function Nc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(D,q,se){Ke.get(D.texture).__webglTexture=q,Ke.get(D.depthTexture).__webglTexture=se;const ae=Ke.get(D);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,q){const se=Ke.get(D);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,se=0){O=D,I=q,P=se;let ae=!0,K=null,Te=!1,Ee=!1;if(D){const Ve=Ke.get(D);if(Ve.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer($.FRAMEBUFFER,null),ae=!1;else if(Ve.__webglFramebuffer===void 0)U.setupRenderTarget(D);else if(Ve.__hasExternalTextures)U.rebindTextures(D,Ke.get(D.texture).__webglTexture,Ke.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Xe=D.depthTexture;if(Ve.__boundDepthTexture!==Xe){if(Xe!==null&&Ke.has(Xe)&&(D.width!==Xe.image.width||D.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(D)}}const rt=D.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ee=!0);const at=Ke.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(at[q])?K=at[q][se]:K=at[q],Te=!0):D.samples>0&&U.useMultisampledRTT(D)===!1?K=Ke.get(D).__webglMultisampledFramebuffer:Array.isArray(at)?K=at[se]:K=at,z.copy(D.viewport),Q.copy(D.scissor),ee=D.scissorTest}else z.copy(j).multiplyScalar(B).floor(),Q.copy(ie).multiplyScalar(B).floor(),ee=Ne;if(Ye.bindFramebuffer($.FRAMEBUFFER,K)&&ae&&Ye.drawBuffers(D,K),Ye.viewport(z),Ye.scissor(Q),Ye.setScissorTest(ee),Te){const Ve=Ke.get(D.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ve.__webglTexture,se)}else if(Ee){const Ve=Ke.get(D.texture),rt=q||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ve.__webglTexture,se||0,rt)}L=-1},this.readRenderTargetPixels=function(D,q,se,ae,K,Te,Ee){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ke.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ee!==void 0&&(We=We[Ee]),We){Ye.bindFramebuffer($.FRAMEBUFFER,We);try{const Ve=D.texture,rt=Ve.format,at=Ve.type;if(!it.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-ae&&se>=0&&se<=D.height-K&&$.readPixels(q,se,ae,K,ot.convert(rt),ot.convert(at),Te)}finally{const Ve=O!==null?Ke.get(O).__webglFramebuffer:null;Ye.bindFramebuffer($.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(D,q,se,ae,K,Te,Ee){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Ke.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ee!==void 0&&(We=We[Ee]),We){const Ve=D.texture,rt=Ve.format,at=Ve.type;if(!it.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=D.width-ae&&se>=0&&se<=D.height-K){Ye.bindFramebuffer($.FRAMEBUFFER,We);const Xe=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Xe),$.bufferData($.PIXEL_PACK_BUFFER,Te.byteLength,$.STREAM_READ),$.readPixels(q,se,ae,K,ot.convert(rt),ot.convert(at),0);const vt=O!==null?Ke.get(O).__webglFramebuffer:null;Ye.bindFramebuffer($.FRAMEBUFFER,vt);const At=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await wS($,At,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Xe),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Te),$.deleteBuffer(Xe),$.deleteSync(At),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,q=null,se=0){D.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,D=arguments[1]);const ae=Math.pow(2,-se),K=Math.floor(D.image.width*ae),Te=Math.floor(D.image.height*ae),Ee=q!==null?q.x:0,We=q!==null?q.y:0;U.setTexture2D(D,0),$.copyTexSubImage2D($.TEXTURE_2D,se,0,0,Ee,We,K,Te),Ye.unbindTexture()},this.copyTextureToTexture=function(D,q,se=null,ae=null,K=0){D.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,D=arguments[1],q=arguments[2],K=arguments[3]||0,se=null);let Te,Ee,We,Ve,rt,at,Xe,vt,At;const xt=D.isCompressedTexture?D.mipmaps[K]:D.image;se!==null?(Te=se.max.x-se.min.x,Ee=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,Ve=se.min.x,rt=se.min.y,at=se.isBox3?se.min.z:0):(Te=xt.width,Ee=xt.height,We=xt.depth||1,Ve=0,rt=0,at=0),ae!==null?(Xe=ae.x,vt=ae.y,At=ae.z):(Xe=0,vt=0,At=0);const un=ot.convert(q.format),ct=ot.convert(q.type);let qe;q.isData3DTexture?(U.setTexture3D(q,0),qe=$.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),qe=$.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),qe=$.TEXTURE_2D),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,q.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,q.unpackAlignment);const si=$.getParameter($.UNPACK_ROW_LENGTH),Et=$.getParameter($.UNPACK_IMAGE_HEIGHT),dn=$.getParameter($.UNPACK_SKIP_PIXELS),ai=$.getParameter($.UNPACK_SKIP_ROWS),Zt=$.getParameter($.UNPACK_SKIP_IMAGES);$.pixelStorei($.UNPACK_ROW_LENGTH,xt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,xt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,Ve),$.pixelStorei($.UNPACK_SKIP_ROWS,rt),$.pixelStorei($.UNPACK_SKIP_IMAGES,at);const bi=D.isDataArrayTexture||D.isData3DTexture,Ut=q.isDataArrayTexture||q.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const $n=Ke.get(D),ji=Ke.get(q),yn=Ke.get($n.__renderTarget),qn=Ke.get(ji.__renderTarget);Ye.bindFramebuffer($.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ye.bindFramebuffer($.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Tn=0;Tn<We;Tn++)bi&&$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ke.get(D).__webglTexture,K,at+Tn),D.isDepthTexture?(Ut&&$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ke.get(q).__webglTexture,K,At+Tn),$.blitFramebuffer(Ve,rt,Te,Ee,Xe,vt,Te,Ee,$.DEPTH_BUFFER_BIT,$.NEAREST)):Ut?$.copyTexSubImage3D(qe,K,Xe,vt,At+Tn,Ve,rt,Te,Ee):$.copyTexSubImage2D(qe,K,Xe,vt,At+Tn,Ve,rt,Te,Ee);Ye.bindFramebuffer($.READ_FRAMEBUFFER,null),Ye.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ut?D.isDataTexture||D.isData3DTexture?$.texSubImage3D(qe,K,Xe,vt,At,Te,Ee,We,un,ct,xt.data):q.isCompressedArrayTexture?$.compressedTexSubImage3D(qe,K,Xe,vt,At,Te,Ee,We,un,xt.data):$.texSubImage3D(qe,K,Xe,vt,At,Te,Ee,We,un,ct,xt):D.isDataTexture?$.texSubImage2D($.TEXTURE_2D,K,Xe,vt,Te,Ee,un,ct,xt.data):D.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,K,Xe,vt,xt.width,xt.height,un,xt.data):$.texSubImage2D($.TEXTURE_2D,K,Xe,vt,Te,Ee,un,ct,xt);$.pixelStorei($.UNPACK_ROW_LENGTH,si),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Et),$.pixelStorei($.UNPACK_SKIP_PIXELS,dn),$.pixelStorei($.UNPACK_SKIP_ROWS,ai),$.pixelStorei($.UNPACK_SKIP_IMAGES,Zt),K===0&&q.generateMipmaps&&$.generateMipmap(qe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(D,q,se=null,ae=null,K=0){return D.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,D=arguments[2],q=arguments[3],K=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,q,se,ae,K)},this.initRenderTarget=function(D){Ke.get(D).__webglFramebuffer===void 0&&U.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?U.setTextureCube(D,0):D.isData3DTexture?U.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?U.setTexture2DArray(D,0):U.setTexture2D(D,0),Ye.unbindTexture()},this.resetState=function(){I=0,P=0,O=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class I2 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jh extends ya{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const n0=new Vt,Oh=new dg,Kl=new Mc,Zl=new Z;class i0 extends cn{constructor(e=new ri,t=new jh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Kl.copy(s.boundingSphere),Kl.applyMatrix4(l),Kl.radius+=c,e.ray.intersectsSphere(Kl)===!1)return;n0.copy(l).invert(),Oh.copy(e.ray).applyMatrix4(n0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,x=s.index,v=s.attributes.position;if(x!==null){const y=Math.max(0,d.start),w=Math.min(x.count,d.start+d.count);for(let E=y,M=w;E<M;E++){const S=x.getX(E);Zl.fromBufferAttribute(v,S),r0(Zl,S,f,l,e,t,this)}}else{const y=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let E=y,M=w;E<M;E++)Zl.fromBufferAttribute(v,E),r0(Zl,E,f,l,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const l=t[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function r0(r,e,t,s,l,c,d){const h=Oh.distanceSqToPoint(r);if(h<t){const f=new Z;Oh.closestPointToPoint(r,f),f.applyMatrix4(s);const x=l.ray.origin.distanceTo(f);if(x<l.near||x>l.far)return;c.push({distance:x,distanceToRay:Math.sqrt(h),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Tc extends ri{constructor(e=[],t=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:l};const c=[],d=[];h(l),x(s),m(),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(c.slice(),3)),this.setAttribute("uv",new vn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(T){const C=new Z,A=new Z,H=new Z;for(let I=0;I<t.length;I+=3)w(t[I+0],C),w(t[I+1],A),w(t[I+2],H),f(C,A,H,T)}function f(T,C,A,H){const I=H+1,P=[];for(let O=0;O<=I;O++){P[O]=[];const L=T.clone().lerp(A,O/I),N=C.clone().lerp(A,O/I),z=I-O;for(let Q=0;Q<=z;Q++)Q===0&&O===I?P[O][Q]=L:P[O][Q]=L.clone().lerp(N,Q/z)}for(let O=0;O<I;O++)for(let L=0;L<2*(I-O)-1;L++){const N=Math.floor(L/2);L%2===0?(y(P[O][N+1]),y(P[O+1][N]),y(P[O][N])):(y(P[O][N+1]),y(P[O+1][N+1]),y(P[O+1][N]))}}function x(T){const C=new Z;for(let A=0;A<c.length;A+=3)C.x=c[A+0],C.y=c[A+1],C.z=c[A+2],C.normalize().multiplyScalar(T),c[A+0]=C.x,c[A+1]=C.y,c[A+2]=C.z}function m(){const T=new Z;for(let C=0;C<c.length;C+=3){T.x=c[C+0],T.y=c[C+1],T.z=c[C+2];const A=S(T)/2/Math.PI+.5,H=g(T)/Math.PI+.5;d.push(A,1-H)}E(),v()}function v(){for(let T=0;T<d.length;T+=6){const C=d[T+0],A=d[T+2],H=d[T+4],I=Math.max(C,A,H),P=Math.min(C,A,H);I>.9&&P<.1&&(C<.2&&(d[T+0]+=1),A<.2&&(d[T+2]+=1),H<.2&&(d[T+4]+=1))}}function y(T){c.push(T.x,T.y,T.z)}function w(T,C){const A=T*3;C.x=e[A+0],C.y=e[A+1],C.z=e[A+2]}function E(){const T=new Z,C=new Z,A=new Z,H=new Z,I=new yt,P=new yt,O=new yt;for(let L=0,N=0;L<c.length;L+=9,N+=6){T.set(c[L+0],c[L+1],c[L+2]),C.set(c[L+3],c[L+4],c[L+5]),A.set(c[L+6],c[L+7],c[L+8]),I.set(d[N+0],d[N+1]),P.set(d[N+2],d[N+3]),O.set(d[N+4],d[N+5]),H.copy(T).add(C).add(A).divideScalar(3);const z=S(H);M(I,N+0,T,z),M(P,N+2,C,z),M(O,N+4,A,z)}}function M(T,C,A,H){H<0&&T.x===1&&(d[C]=T.x-1),A.x===0&&A.z===0&&(d[C]=H/2/Math.PI+.5)}function S(T){return Math.atan2(T.z,-T.x)}function g(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.vertices,e.indices,e.radius,e.details)}}class hf extends Tc{constructor(e=1,t=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hf(e.radius,e.detail)}}class ff extends Tc{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ff(e.radius,e.detail)}}class pf extends ri{constructor(e=1,t=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const f=Math.min(d+h,Math.PI);let x=0;const m=[],v=new Z,y=new Z,w=[],E=[],M=[],S=[];for(let g=0;g<=s;g++){const T=[],C=g/s;let A=0;g===0&&d===0?A=.5/t:g===s&&f===Math.PI&&(A=-.5/t);for(let H=0;H<=t;H++){const I=H/t;v.x=-e*Math.cos(l+I*c)*Math.sin(d+C*h),v.y=e*Math.cos(d+C*h),v.z=e*Math.sin(l+I*c)*Math.sin(d+C*h),E.push(v.x,v.y,v.z),y.copy(v).normalize(),M.push(y.x,y.y,y.z),S.push(I+A,1-C),T.push(x++)}m.push(T)}for(let g=0;g<s;g++)for(let T=0;T<t;T++){const C=m[g][T+1],A=m[g][T],H=m[g+1][T],I=m[g+1][T+1];(g!==0||d>0)&&w.push(C,A,I),(g!==s-1||f<Math.PI)&&w.push(A,H,I)}this.setIndex(w),this.setAttribute("position",new vn(E,3)),this.setAttribute("normal",new vn(M,3)),this.setAttribute("uv",new vn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dc extends ri{constructor(e=1,t=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const d=[],h=[],f=[],x=[],m=new Z,v=new Z,y=new Z;for(let w=0;w<=s;w++)for(let E=0;E<=l;E++){const M=E/l*c,S=w/s*Math.PI*2;v.x=(e+t*Math.cos(S))*Math.cos(M),v.y=(e+t*Math.cos(S))*Math.sin(M),v.z=t*Math.sin(S),h.push(v.x,v.y,v.z),m.x=e*Math.cos(M),m.y=e*Math.sin(M),y.subVectors(v,m).normalize(),f.push(y.x,y.y,y.z),x.push(E/l),x.push(w/s)}for(let w=1;w<=s;w++)for(let E=1;E<=l;E++){const M=(l+1)*w+E-1,S=(l+1)*(w-1)+E-1,g=(l+1)*(w-1)+E,T=(l+1)*w+E;d.push(M,S,T),d.push(S,g,T)}this.setIndex(d),this.setAttribute("position",new vn(h,3)),this.setAttribute("normal",new vn(f,3)),this.setAttribute("uv",new vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class U2 extends ya{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ag,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mf extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Gd=new Vt,s0=new Z,a0=new Z;class Tg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;s0.setFromMatrixPosition(e.matrixWorld),t.position.copy(s0),a0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(a0),t.updateMatrixWorld(),Gd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const o0=new Vt,ao=new Z,Wd=new Z;class k2 extends Tg{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const s=this.camera,l=this.matrix,c=e.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),ao.setFromMatrixPosition(e.matrixWorld),s.position.copy(ao),Wd.copy(s.position),Wd.add(this._cubeDirections[t]),s.up.copy(this._cubeUps[t]),s.lookAt(Wd),s.updateMatrixWorld(),l.makeTranslation(-ao.x,-ao.y,-ao.z),o0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o0)}}class l0 extends mf{constructor(e,t,s=0,l=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new k2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class F2 extends Tg{constructor(){super(new yg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j2 extends mf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new F2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class O2 extends mf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class z2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=c0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=c0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function c0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);const B2=({className:r=""})=>{const e=k.useRef(null),[t,s]=k.useState(!0),[l,c]=k.useState(!1);return k.useEffect(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches&&c(!0);try{const _t=document.createElement("canvas");if(!(_t.getContext("webgl")||_t.getContext("experimental-webgl"))){s(!1);return}}catch{s(!1);return}const h=e.current;if(!h)return;const f=h.clientWidth||600,x=h.clientHeight||600,m=new I2,v=new Gn(45,f/x,.1,100);v.position.z=7.5;let y;try{y=new L2({antialias:!0,alpha:!0,powerPreference:"high-performance"}),y.setSize(f,x),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.appendChild(y.domElement)}catch(_t){console.warn("WebGL init failed, switching to CSS fallback:",_t),s(!1);return}const w=new O2(988970,1.8);m.add(w);const E=new l0(440020,3,20);E.position.set(5,4,4),m.add(E);const M=new l0(9133302,2.5,20);M.position.set(-5,-3,3),m.add(M);const S=new j2(3900150,1.2);S.position.set(0,5,5),m.add(S);const g=new co;m.add(g);const T=2.4,C=new hf(T,2),A=new na({color:3718648,wireframe:!0,transparent:!0,opacity:.22}),H=new Un(C,A);g.add(H);const I=new jh({color:440020,size:.08,transparent:!0,opacity:.85}),P=new i0(C,I);g.add(P);const O=new ff(1.3,1),L=new U2({color:1973067,emissive:6514417,emissiveIntensity:.45,roughness:.2,metalness:.8,wireframe:!0}),N=new Un(O,L);g.add(N);const z=new dc(3.1,.015,16,100),Q=new na({color:8490232,transparent:!0,opacity:.4}),ee=new Un(z,Q);ee.rotation.x=Math.PI/3,ee.rotation.y=Math.PI/6,g.add(ee);const de=new dc(3.5,.012,16,100),le=new na({color:440020,transparent:!0,opacity:.3}),oe=new Un(de,le);oe.rotation.x=-Math.PI/4,oe.rotation.y=Math.PI/4,g.add(oe);const ce=new pf(.09,16,16),B=new na({color:3718648}),he=new Un(ce,B);g.add(he);const Y=160,j=new Float32Array(Y*3);for(let _t=0;_t<Y*3;_t+=3){const Qe=3.2+Math.random()*2.5,it=Math.random()*Math.PI*2,Ye=Math.acos(Math.random()*2-1);j[_t]=Qe*Math.sin(Ye)*Math.cos(it),j[_t+1]=Qe*Math.sin(Ye)*Math.sin(it),j[_t+2]=Qe*Math.cos(Ye)}const ie=new ri;ie.setAttribute("position",new Si(j,3));const Ne=new jh({color:9684477,size:.04,transparent:!0,opacity:.5}),G=new i0(ie,Ne);g.add(G);let fe=0,Se=0,xe=0,Ae=0;const Le=_t=>{const{innerWidth:Qe,innerHeight:it}=window;fe=(_t.clientX/Qe-.5)*.7,Se=(_t.clientY/it-.5)*.7};window.addEventListener("mousemove",Le,{passive:!0});const Ze=()=>{if(!h)return;const _t=h.clientWidth,Qe=h.clientHeight;v.aspect=_t/Qe,v.updateProjectionMatrix(),y.setSize(_t,Qe)},Nt=new ResizeObserver(()=>Ze());Nt.observe(h);let ht,Dt=new z2;const $=()=>{ht=requestAnimationFrame($);const _t=Dt.getElapsedTime(),Qe=l?.001:.005;H.rotation.y+=Qe,P.rotation.y+=Qe,N.rotation.x-=Qe*1.5,N.rotation.y-=Qe*1.8,ee.rotation.z+=Qe*.8,oe.rotation.z-=Qe*.6,G.rotation.y+=Qe*.3;const it=_t*.8;he.position.x=Math.cos(it)*3.1,he.position.y=Math.sin(it)*3.1*Math.sin(Math.PI/3),he.position.z=Math.sin(it)*3.1*Math.cos(Math.PI/3),xe+=(fe-xe)*.05,Ae+=(Se-Ae)*.05,g.rotation.y=xe,g.rotation.x=Ae,y.render(m,v)};return $(),()=>{cancelAnimationFrame(ht),window.removeEventListener("mousemove",Le),Nt.disconnect(),h&&y.domElement&&h.contains(y.domElement)&&h.removeChild(y.domElement),C.dispose(),A.dispose(),I.dispose(),O.dispose(),L.dispose(),z.dispose(),Q.dispose(),de.dispose(),le.dispose(),ce.dispose(),B.dispose(),ie.dispose(),Ne.dispose(),y.dispose()}},[l]),t?o.jsx("div",{ref:e,className:`relative w-full h-full min-h-[420px] lg:min-h-[560px] cursor-grab active:cursor-grabbing ${r}`,"aria-label":"Interactive 3D Data Sphere Visualization"}):o.jsx("div",{className:`relative flex items-center justify-center ${r}`,children:o.jsxs("div",{className:"relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-cyan-500/30 flex items-center justify-center animate-pulse-slow",children:[o.jsx("div",{className:"absolute inset-4 rounded-full border border-violet-500/30 border-dashed animate-spin",style:{animationDuration:"30s"}}),o.jsx("div",{className:"absolute inset-12 rounded-full border border-blue-500/40 animate-spin",style:{animationDuration:"20s",animationDirection:"reverse"}}),o.jsx("div",{className:"w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-600/30 to-violet-500/20 blur-md flex items-center justify-center border border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.3)]",children:o.jsx("div",{className:"w-16 h-16 rounded-full bg-cyan-400/30 animate-ping"})})]})})},V2=({onOpenAnalytics:r})=>o.jsxs("section",{id:"hero",className:"relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden",children:[o.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"}),o.jsx("div",{className:"absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"}),o.jsx("div",{className:"absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-violet-600/15 rounded-full blur-[130px] pointer-events-none"}),o.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",backgroundSize:"40px 40px"}}),o.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",children:[o.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md",children:[o.jsx(E1,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Next-Generation Sales Analytics"}),o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),o.jsx("span",{className:"text-slate-400 text-xs",children:"Production Ready"})]}),o.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]",children:["Turn Your Data Into"," ",o.jsx("span",{className:"text-gradient",children:"Intelligence."})]}),o.jsx("p",{className:"max-w-2xl text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-normal",children:"Explore sales performance, discover meaningful patterns, and make smarter business decisions through interactive data visualization."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto",children:[o.jsxs("button",{onClick:r,className:"w-full sm:w-auto py-3.5 px-8 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group",children:[o.jsx("span",{children:"Explore Analytics"}),o.jsx(Fr,{className:"w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),o.jsxs("a",{href:"#features",className:"w-full sm:w-auto py-3.5 px-8 rounded-xl font-semibold text-sm sm:text-base glass-panel hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2",children:[o.jsx(f1,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Explore Features"})]})]}),o.jsxs("div",{className:"pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg",children:[o.jsxs("div",{className:"flex flex-col items-center lg:items-start",children:[o.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-slate-400 font-medium",children:[o.jsx(Zh,{className:"w-3.5 h-3.5 text-blue-400"})," Plotly Powered"]}),o.jsx("span",{className:"text-sm font-semibold text-white mt-1",children:"Real-Time Charts"})]}),o.jsxs("div",{className:"flex flex-col items-center lg:items-start",children:[o.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-slate-400 font-medium",children:[o.jsx(ar,{className:"w-3.5 h-3.5 text-emerald-400"})," Data Guard"]}),o.jsx("span",{className:"text-sm font-semibold text-white mt-1",children:"Audit & Quality"})]}),o.jsxs("div",{className:"flex flex-col items-center lg:items-start",children:[o.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-slate-400 font-medium",children:[o.jsx(zr,{className:"w-3.5 h-3.5 text-cyan-400"})," Fast Engine"]}),o.jsx("span",{className:"text-sm font-semibold text-white mt-1",children:"Pandas & Streamlit"})]})]})]}),o.jsxs("div",{className:"lg:col-span-5 relative flex items-center justify-center w-full",children:[o.jsx("div",{className:"absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-cyan-500/10 via-indigo-600/10 to-violet-500/10 rounded-full blur-2xl pointer-events-none"}),o.jsx("div",{className:"w-full max-w-[500px] h-[380px] sm:h-[460px] lg:h-[540px]",children:o.jsx(B2,{})}),o.jsxs("div",{className:"absolute -bottom-2 right-4 sm:right-12 glass-panel px-3 py-1.5 rounded-full border border-white/10 text-[11px] text-slate-400 flex items-center gap-2 pointer-events-none",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),o.jsx("span",{children:"Interactive 3D Structure"})]})]})]})})]}),H2=()=>{const r=[{id:"sales-analytics",title:"Sales Analytics",description:"Understand sales performance through interactive charts and key metrics.",icon:Zh,badge:"Core Engine",accentColor:"from-blue-500/20 to-blue-600/5",iconColor:"text-blue-400",borderColor:"group-hover:border-blue-500/40",highlights:["Total Revenue & AOV","Monthly Sales Curves","Multi-level Filtering"]},{id:"product-insights",title:"Product Insights",description:"Discover top-performing products and compare category performance.",icon:yc,badge:"Growth Intelligence",accentColor:"from-cyan-500/20 to-cyan-600/5",iconColor:"text-cyan-400",borderColor:"group-hover:border-cyan-500/40",highlights:["Top 5 Products Ranked","Category Distribution","Unit Sales Comparison"]},{id:"data-explorer",title:"Data Explorer",description:"Explore your sales records and identify useful patterns.",icon:H0,badge:"Deep Search",accentColor:"from-indigo-500/20 to-indigo-600/5",iconColor:"text-indigo-400",borderColor:"group-hover:border-indigo-500/40",highlights:["Dynamic Date Slicing","Regional Segmentation","CSV Filtered Export"]},{id:"data-quality",title:"Data Quality",description:"Inspect missing values, invalid records, and potential data issues.",icon:_c,badge:"Integrity Audit",accentColor:"from-violet-500/20 to-violet-600/5",iconColor:"text-violet-400",borderColor:"group-hover:border-violet-500/40",highlights:["Duplicate Order Audit","Missing Value Profiling","Clean CSV Generation"]}];return o.jsxs("section",{id:"features",className:"relative py-24 bg-[#030712] overflow-hidden",children:[o.jsx("div",{className:"absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"}),o.jsx("div",{className:"absolute bottom-10 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"}),o.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 sm:mb-20",children:[o.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4",children:"Powerful Capabilities"}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:"Designed for Modern Business Clarity."}),o.jsx("p",{className:"mt-4 text-base sm:text-lg text-slate-400 leading-relaxed",children:"Four specialized analytical pillars engineered to transform raw transaction records into immediate, actionable commercial advantage."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",children:r.map(e=>{const t=e.icon;return o.jsxs("div",{className:`group relative glass-panel rounded-2xl p-7 sm:p-9 border border-white/10 ${e.borderColor} glass-panel-hover flex flex-col justify-between overflow-hidden`,children:[o.jsx("div",{className:`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${e.accentColor} rounded-full blur-3xl pointer-events-none transition-opacity opacity-50 group-hover:opacity-100`}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-6",children:[o.jsx("div",{className:"p-3.5 rounded-xl bg-slate-900/90 border border-white/10 group-hover:scale-105 transition-transform shadow-inner",children:o.jsx(t,{className:`w-6 h-6 ${e.iconColor}`})}),o.jsx("span",{className:"text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10",children:e.badge})]}),o.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors",children:e.title}),o.jsx("p",{className:"text-sm sm:text-base text-slate-300/80 leading-relaxed mb-6",children:e.description})]}),o.jsxs("div",{className:"pt-5 border-t border-white/5 space-y-2",children:[e.highlights.map((s,l)=>o.jsxs("div",{className:"flex items-center gap-2 text-xs sm:text-sm text-slate-400",children:[o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400/80"}),o.jsx("span",{children:s})]},l)),o.jsxs("div",{className:"pt-3 flex items-center text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform",children:[o.jsx("span",{children:"Explore module capability"}),o.jsx(r1,{className:"w-3.5 h-3.5 ml-1"})]})]})]},e.id)})})]})]})},G2=({onOpenAnalytics:r})=>{const[e,t]=k.useState("default-demo"),[s,l]=k.useState("sales_data.csv"),[c,d]=k.useState("All"),[h,f]=k.useState("All"),[x,m]=k.useState(null),[v,y]=k.useState([]),[w,E]=k.useState([]),[M,S]=k.useState([]),[g,T]=k.useState(null),[C,A]=k.useState(null),[H,I]=k.useState(!0),[P,O]=k.useState(!1),[L,N]=k.useState(!1),[z,Q]=k.useState(null),[ee,de]=k.useState(!1),le=k.useRef(null),oe=k.useCallback(async(Y,j,ie)=>{I(!0),Q(null);try{const Ne=await gt.checkHealth();if(N(Ne),Ne){const G={dataset_id:Y,region:j,category:ie},[fe,Se,xe,Ae,Le,Ze]=await Promise.all([gt.getSummary(G),gt.getTrends(G),gt.getTopProducts(G,5),gt.getCategory(G),gt.getDataQuality(Y),gt.getBusinessInsights(G)]);m(fe),y(Se),E(xe),S(Ae),T(Le),A(Ze)}else m({total_revenue:448300,total_orders:10,total_units_sold:41,average_order_value:44830,min_date:"2026-01-05",max_date:"2026-03-20",available_regions:["All","Delhi","Indore","Mumbai"],available_categories:["All","Accessories","Electronics"],active_records_count:10,revenue_formula:"Quantity * Price",profit_note:"Profit excluded (no cost data)"}),y([{month:"2026-01",revenue:166100,units_sold:14,order_count:4},{month:"2026-02",revenue:1e5,units_sold:14,order_count:3},{month:"2026-03",revenue:182200,units_sold:13,order_count:3}]),E([{product:"Laptop",revenue:25e4,units_sold:5,revenue_share_pct:55.8},{product:"Mobile",revenue:18e4,units_sold:12,revenue_share_pct:40.1},{product:"Keyboard",revenue:10800,units_sold:9,revenue_share_pct:2.4},{product:"Mouse",revenue:7500,units_sold:15,revenue_share_pct:1.7}]),S([{category:"Electronics",revenue:43e4,units_sold:17,revenue_share_pct:95.9},{category:"Accessories",revenue:18300,units_sold:24,revenue_share_pct:4.1}])}catch(Ne){console.warn("Analytics API error:",Ne),Q(Ne.message||"Could not reach backend API")}finally{I(!1)}},[]);k.useEffect(()=>{oe(e,c,h)},[e,c,h,oe]);const ce=async Y=>{var ie;const j=(ie=Y.target.files)==null?void 0:ie[0];if(j){O(!0),Q(null);try{const Ne=await gt.uploadCSV(j);t(Ne.dataset_id),l(Ne.filename),d("All"),f("All"),await oe(Ne.dataset_id,"All","All")}catch(Ne){Q(Ne.message||"File upload failed. Ensure required columns are present.")}finally{O(!1),le.current&&(le.current.value="")}}},B=Math.max(...v.map(Y=>Y.revenue),1),he=(x==null?void 0:x.available_regions)||["All","Indore","Delhi","Mumbai"];return o.jsxs("section",{id:"preview",className:"relative py-24 bg-[#02050e] overflow-hidden",children:[o.jsx("div",{className:"absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"}),o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6",children:[o.jsxs("div",{className:"max-w-2xl",children:[o.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4",children:"Live Commercial Analytics"}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:"Interactive Analytics Engine"}),o.jsx("p",{className:"mt-3 text-slate-400 text-sm sm:text-base leading-relaxed",children:"Powered by our high-performance Python analytics engine. Filter by region, upload your own transaction CSV, and inspect data health in real time."})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3 self-start md:self-auto",children:[o.jsx("input",{type:"file",ref:le,onChange:ce,accept:".csv",className:"hidden"}),o.jsxs("button",{onClick:()=>{var Y;return(Y=le.current)==null?void 0:Y.click()},disabled:P,className:"py-2 px-4 rounded-xl text-xs font-semibold glass-panel hover:bg-white/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-50",children:[o.jsx(A1,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:P?"Validating CSV...":"Upload CSV"})]}),g&&o.jsxs("button",{onClick:()=>de(!0),className:"py-2 px-4 rounded-xl text-xs font-semibold glass-panel hover:bg-white/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-2 transition-all hover:scale-[1.02]",children:[o.jsx(ar,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Audit Report"})]}),o.jsx("button",{onClick:()=>oe(e,c,h),className:"p-2 rounded-xl text-slate-400 hover:text-white glass-panel border border-white/10",title:"Refresh Analytics",children:o.jsx(Ii,{className:`w-3.5 h-3.5 ${H?"animate-spin":""}`})})]})]}),o.jsxs("div",{className:"mb-8 p-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${L?"bg-emerald-400 animate-pulse":"bg-cyan-400"}`}),o.jsxs("span",{className:"text-slate-300",children:["Active Dataset: ",o.jsx("strong",{className:"text-white font-mono",children:s}),x&&` • ${x.active_records_count} active records`,L&&o.jsx("span",{className:"text-emerald-400 ml-2 font-mono",children:"[FastAPI 8000 Connected]"})]})]}),o.jsx("div",{className:"flex items-center gap-2 self-end sm:self-auto",children:o.jsxs("a",{href:gt.getExportUrl({dataset_id:e,region:c,category:h}),download:"filtered_sales_data.csv",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 transition-colors",children:[o.jsx(mo,{className:"w-3 h-3"}),o.jsx("span",{children:"Export Filtered CSV"})]})})]}),z&&o.jsxs("div",{className:"mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-3",children:[o.jsx(X0,{className:"w-4 h-4 flex-shrink-0 text-rose-400"}),o.jsx("span",{children:z})]}),o.jsxs("div",{className:"glass-panel rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 space-y-8 relative",children:[o.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-white/10",children:[o.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto max-w-full",children:[o.jsxs("span",{className:"text-xs text-slate-400 font-mono flex items-center gap-1 pr-1",children:[o.jsx(F0,{className:"w-3 h-3"})," Region:"]}),he.map(Y=>o.jsx("button",{onClick:()=>d(Y),className:`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${c===Y?"bg-blue-600 text-white shadow-md shadow-blue-500/30":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:Y},Y))]}),x&&o.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["Date Span: ",x.min_date," → ",x.max_date]})]}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",children:[o.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-white/10",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 mb-2",children:[o.jsx("span",{children:"Total Revenue"}),o.jsx(v1,{className:"w-4 h-4 text-blue-400"})]}),o.jsx("div",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:x?`₹${x.total_revenue.toLocaleString("en-IN",{minimumFractionDigits:2})}`:"..."}),o.jsx("div",{className:"mt-2 text-[11px] text-emerald-400 flex items-center gap-1 font-mono",children:o.jsx("span",{children:"Revenue = Quantity × Price"})})]}),o.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-white/10",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 mb-2",children:[o.jsx("span",{children:"Total Orders"}),o.jsx(w1,{className:"w-4 h-4 text-cyan-400"})]}),o.jsx("div",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:x?`${x.total_orders} Orders`:"..."}),o.jsx("div",{className:"mt-2 text-[11px] text-slate-400",children:"Distinct Order IDs"})]}),o.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-white/10",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 mb-2",children:[o.jsx("span",{children:"Units Sold"}),o.jsx(xo,{className:"w-4 h-4 text-violet-400"})]}),o.jsx("div",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:x?`${x.total_units_sold} Units`:"..."}),o.jsx("div",{className:"mt-2 text-[11px] text-slate-400",children:"Non-negative validated"})]}),o.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-white/10",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 mb-2",children:[o.jsx("span",{children:"Avg. Order Value"}),o.jsx(yc,{className:"w-4 h-4 text-indigo-400"})]}),o.jsx("div",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:x?`₹${Math.round(x.average_order_value).toLocaleString("en-IN")}`:"..."}),o.jsx("div",{className:"mt-2 text-[11px] text-cyan-400 font-mono",children:"Revenue / Distinct Orders"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8",children:[o.jsxs("div",{className:"lg:col-span-7 p-6 rounded-xl bg-slate-900/80 border border-white/10 flex flex-col justify-between",children:[o.jsxs("div",{className:"flex items-center justify-between mb-6",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-white text-base",children:"Monthly Revenue Trend"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Chronological vectorized aggregation"})]}),C&&o.jsxs("span",{className:"text-xs font-mono text-cyan-400 px-2 py-1 bg-cyan-500/10 rounded border border-cyan-500/20",children:["Peak: ",C.highest_revenue_month]})]}),o.jsx("div",{className:"h-44 sm:h-52 flex items-end justify-between gap-4 sm:gap-8 px-4 pt-4 border-b border-white/10",children:v.map(Y=>{const j=Math.max(12,Math.round(Y.revenue/B*100));return o.jsxs("div",{className:"flex-1 flex flex-col items-center h-full justify-end group",children:[o.jsxs("span",{className:"text-[11px] font-mono text-slate-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity",children:["₹",(Y.revenue/1e3).toFixed(1),"k"]}),o.jsx("div",{className:"w-full max-w-[56px] rounded-t-lg bg-gradient-to-t from-blue-600 via-indigo-600 to-cyan-400 transition-all duration-500 group-hover:brightness-125 shadow-lg shadow-blue-500/20",style:{height:`${j}%`}}),o.jsx("span",{className:"text-xs font-mono text-slate-400 mt-3",children:Y.month})]},Y.month)})}),o.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 pt-3",children:[o.jsx("span",{children:"Revenue over time (Monthly)"}),o.jsx("span",{children:"Values in INR (₹)"})]})]}),o.jsxs("div",{className:"lg:col-span-5 p-6 rounded-xl bg-slate-900/80 border border-white/10 flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-6",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-white text-base",children:"Top 5 Products by Revenue"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Ranked by turnover"})]}),o.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Ranked head(5)"})]}),o.jsx("div",{className:"space-y-4",children:w.map((Y,j)=>o.jsxs("div",{className:"space-y-1.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsxs("span",{className:"font-medium text-white flex items-center gap-2",children:[o.jsx("span",{className:"text-[10px] font-mono w-4 h-4 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center",children:j+1}),Y.product]}),o.jsxs("span",{className:"font-mono text-cyan-300",children:["₹",Y.revenue.toLocaleString("en-IN")]})]}),o.jsx("div",{className:"w-full h-2 rounded-full bg-slate-800 overflow-hidden",children:o.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500",style:{width:`${Y.revenue_share_pct}%`}})})]},Y.product))})]}),M.length>0&&o.jsxs("div",{className:"pt-6 mt-6 border-t border-white/10",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 mb-2",children:[o.jsx("span",{children:"Category Distribution"}),o.jsxs("span",{className:"text-white font-medium",children:[M[0].category," (",M[0].revenue_share_pct,"%)"]})]}),o.jsx("div",{className:"flex h-2.5 rounded-full overflow-hidden gap-0.5",children:M.map((Y,j)=>o.jsx("div",{className:`h-full transition-all duration-500 ${j===0?"bg-cyan-400":"bg-violet-500"}`,style:{width:`${Y.revenue_share_pct}%`},title:`${Y.category}: ₹${Y.revenue.toLocaleString()}`},Y.category))})]})]})]}),C&&C.takeaways.length>0&&o.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-white/10",children:[o.jsxs("h5",{className:"text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2",children:[o.jsx(_i,{className:"w-4 h-4 text-emerald-400"}),"Automated Analytical Takeaways"]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300",children:C.takeaways.map((Y,j)=>o.jsx("div",{className:"p-3 rounded-lg bg-white/5 border border-white/5 leading-relaxed",children:Y},j))})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-slate-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[o.jsx("div",{className:"text-xs text-slate-300 text-center sm:text-left",children:"Want deep pandas data inspection, interactive Plotly graph zoom, or Streamlit interface?"}),o.jsxs("button",{onClick:r,className:"py-2.5 px-6 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 flex-shrink-0",children:["Open Streamlit Portal",o.jsx(Fr,{className:"w-4 h-4"})]})]})]})]}),ee&&g&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:o.jsxs("div",{className:"glass-panel rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-white/10 space-y-6 max-h-[85vh] overflow-y-auto",children:[o.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ar,{className:"w-6 h-6 text-emerald-400"}),o.jsx("h3",{className:"text-xl font-bold text-white",children:"Dataset Quality & Health Report"})]}),o.jsx("button",{onClick:()=>de(!1),className:"text-slate-400 hover:text-white text-sm",children:"Close ✕"})]}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-center",children:[o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-white/10",children:[o.jsx("div",{className:"text-xs text-slate-400",children:"Total Rows"}),o.jsx("div",{className:"text-lg font-bold text-white",children:g.total_raw_rows})]}),o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-white/10",children:[o.jsx("div",{className:"text-xs text-slate-400",children:"Valid Rows"}),o.jsx("div",{className:"text-lg font-bold text-emerald-400",children:g.valid_rows_count})]}),o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-white/10",children:[o.jsx("div",{className:"text-xs text-slate-400",children:"Excluded Rows"}),o.jsx("div",{className:"text-lg font-bold text-rose-400",children:g.excluded_rows_count})]}),o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-white/10",children:[o.jsx("div",{className:"text-xs text-slate-400",children:"Duplicate Orders"}),o.jsx("div",{className:"text-lg font-bold text-amber-400",children:g.duplicate_order_ids})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h5",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-300",children:"Validation & Audit Policy"}),o.jsx("ul",{className:"space-y-1.5 text-xs text-slate-300",children:g.validation_policy_notes.map((Y,j)=>o.jsxs("li",{className:"flex items-start gap-2",children:[o.jsx("span",{className:"text-emerald-400",children:"•"}),o.jsx("span",{children:Y})]},j))})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h5",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-300",children:"Missing Values Profiling"}),o.jsx("div",{className:"border border-white/10 rounded-xl overflow-hidden text-xs",children:o.jsxs("table",{className:"w-full text-left",children:[o.jsx("thead",{className:"bg-slate-900 text-slate-400",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-2.5",children:"Column"}),o.jsx("th",{className:"p-2.5",children:"Missing Count"}),o.jsx("th",{className:"p-2.5",children:"Missing %"})]})}),o.jsx("tbody",{className:"divide-y divide-white/5 text-slate-300",children:g.missing_values_by_column.map(Y=>o.jsxs("tr",{children:[o.jsx("td",{className:"p-2.5 font-mono text-cyan-300",children:Y.column}),o.jsx("td",{className:"p-2.5",children:Y.missing_count}),o.jsxs("td",{className:"p-2.5",children:[Y.missing_percentage,"%"]})]},Y.column))})]})})]}),o.jsx("button",{onClick:()=>de(!1),className:"w-full py-2.5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-colors",children:"Done"})]})})]})},W2=()=>{const r=[{num:"01",title:"Data Ingestion",desc:"Fault-tolerant CSV ingestion that handles encoding discrepancies, auto-strips accidental header whitespace, and validates required schema attributes.",icon:zr},{num:"02",title:"Integrity Audit",desc:"Transparent identification of duplicate Order IDs, missing categorical fields, and invalid dates or negative prices without silent deletion.",icon:ar},{num:"03",title:"Reactive Analytics",desc:"High-speed Pandas aggregations evaluating Revenue = Quantity × Price, dynamic date slicing, and multi-dimensional sales grouping.",icon:m1},{num:"04",title:"Interactive Delivery",desc:"Rendered via Streamlit and Plotly on the engine layer, with modern 3D visual presentation in React and Three.js.",icon:G0}];return o.jsx("section",{id:"about",className:"relative py-24 bg-[#030712] border-t border-white/5",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[o.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4",children:"Engineering Architecture"}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:"Built on a Clean, Reliable Stack."}),o.jsx("p",{className:"mt-4 text-slate-400 text-base sm:text-lg leading-relaxed",children:"Stratum separates the compute-intensive analytical engine from the commercial-grade presentation layer to ensure maximum performance and maintainability."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",children:r.map(e=>{const t=e.icon;return o.jsx("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between",children:o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("span",{className:"font-mono text-2xl font-extrabold text-slate-600",children:e.num}),o.jsx("div",{className:"p-2.5 rounded-lg bg-slate-900 border border-white/10 text-cyan-400",children:o.jsx(t,{className:"w-5 h-5"})})]}),o.jsx("h4",{className:"text-lg font-bold text-white mb-2",children:e.title}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed",children:e.desc})]})},e.num)})}),o.jsx("div",{className:"glass-panel rounded-2xl border border-white/10 p-8 sm:p-10",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"inline-flex items-center gap-2 text-cyan-400 font-mono text-xs mb-3",children:[o.jsx(h1,{className:"w-4 h-4"})," Technical Specifications"]}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-white mb-4",children:"Principled Commercial Architecture"}),o.jsx("p",{className:"text-sm text-slate-300 leading-relaxed mb-6",children:"Our code emphasizes reliability and transparency: profit is never estimated or displayed when cost data is missing, calculations update reactively on filtered slices, and raw records are protected from accidental mutation."}),o.jsxs("ul",{className:"space-y-3 text-sm text-slate-300",children:[o.jsxs("li",{className:"flex items-center gap-2.5",children:[o.jsx(_i,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),o.jsx("span",{children:"Strict schema validation for required sales columns"})]}),o.jsxs("li",{className:"flex items-center gap-2.5",children:[o.jsx(_i,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),o.jsx("span",{children:"Interactive Plotly line and bar graphics with responsive containers"})]}),o.jsxs("li",{className:"flex items-center gap-2.5",children:[o.jsx(_i,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),o.jsx("span",{children:"Streamlit session state isolation and graceful empty-set guards"})]})]})]}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[{name:"Python 3",role:"Analytics Engine",color:"border-blue-500/30 text-blue-300"},{name:"Pandas",role:"Data Aggregation",color:"border-indigo-500/30 text-indigo-300"},{name:"Streamlit",role:"Reactive Server",color:"border-red-500/30 text-red-300"},{name:"Plotly",role:"Dynamic Visuals",color:"border-cyan-500/30 text-cyan-300"},{name:"React 18",role:"UI Presentation",color:"border-sky-500/30 text-sky-300"},{name:"Three.js",role:"3D Spatial Graphics",color:"border-violet-500/30 text-violet-300"}].map(e=>o.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/90 border border-white/10 flex flex-col justify-center",children:[o.jsx("span",{className:`text-sm font-bold ${e.color}`,children:e.name}),o.jsx("span",{className:"text-[11px] text-slate-400 font-mono mt-0.5",children:e.role})]},e.name))})]})})]})})},X2=({onOpenAnalytics:r,isStreamlitRunning:e})=>{const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsx("footer",{className:"relative bg-[#02050c] border-t border-white/10 pt-16 pb-12 overflow-hidden",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10",children:[o.jsxs("div",{className:"md:col-span-6 space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-extrabold text-white text-sm",children:"S"}),o.jsx("span",{className:"font-extrabold text-lg text-white font-mono tracking-wider",children:"STRATUM"})]}),o.jsx("p",{className:"text-sm text-slate-400 max-w-sm leading-relaxed",children:"Commercial-grade sales intelligence and data analysis platform. Turn messy transaction records into strategic visual clarity."}),o.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-400",children:[o.jsx("span",{className:`w-2 h-2 rounded-full ${e?"bg-emerald-400 animate-pulse":"bg-amber-400"}`}),o.jsxs("span",{children:["Streamlit Runtime: ",e?"Online (8501)":"Offline / Standby"]})]})]}),o.jsxs("div",{className:"md:col-span-3 space-y-3",children:[o.jsx("h5",{className:"text-xs font-mono font-semibold uppercase tracking-wider text-slate-300",children:"Navigation"}),o.jsxs("ul",{className:"space-y-2 text-sm text-slate-400",children:[o.jsx("li",{children:o.jsx("a",{href:"#hero",className:"hover:text-cyan-400 transition-colors",children:"Home"})}),o.jsx("li",{children:o.jsx("a",{href:"#features",className:"hover:text-cyan-400 transition-colors",children:"Platform Features"})}),o.jsx("li",{children:o.jsx("a",{href:"#preview",className:"hover:text-cyan-400 transition-colors",children:"Analytics Preview"})}),o.jsx("li",{children:o.jsx("a",{href:"#about",className:"hover:text-cyan-400 transition-colors",children:"System Architecture"})})]})]}),o.jsxs("div",{className:"md:col-span-3 space-y-3",children:[o.jsx("h5",{className:"text-xs font-mono font-semibold uppercase tracking-wider text-slate-300",children:"Live Services"}),o.jsxs("ul",{className:"space-y-2 text-sm text-slate-400",children:[o.jsx("li",{children:o.jsxs("button",{onClick:r,className:"hover:text-cyan-400 transition-colors text-left flex items-center gap-1.5",children:[o.jsx(U0,{className:"w-3.5 h-3.5 text-blue-400"}),o.jsx("span",{children:"Launch Streamlit App"})]})}),o.jsx("li",{children:o.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Host: http://localhost:8501"})}),o.jsx("li",{children:o.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Dataset: sales_data.csv"})})]})]})]}),o.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500",children:[o.jsxs("div",{children:["© ",new Date().getFullYear()," Stratum Sales Intelligence. All rights reserved."]}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("span",{className:"font-mono",children:"Engine: Python + Streamlit • UI: React + Three.js"}),o.jsx("button",{onClick:t,className:"p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors","aria-label":"Scroll back to top",children:o.jsx(k0,{className:"w-4 h-4"})})]})]})]})})},$2=({isOpen:r,onClose:e,isStreamlitRunning:t,onCheckConnection:s})=>{const[l,c]=k.useState(!1),[d,h]=k.useState(!1);if(!r)return null;const f="python -m streamlit run app.py",x=()=>{navigator.clipboard.writeText(f),c(!0),setTimeout(()=>c(!1),2e3)},m=async()=>{h(!0),await s(),setTimeout(()=>h(!1),500)},v=()=>{window.open("http://localhost:8501","_blank","noopener,noreferrer"),e()};return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:o.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[o.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors","aria-label":"Close modal",children:o.jsx(tf,{className:"w-5 h-5"})}),o.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[o.jsx("div",{className:`p-3 rounded-xl border ${t?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-amber-500/10 border-amber-500/30 text-amber-400"}`,children:t?o.jsx(d1,{className:"w-6 h-6"}):o.jsx(ii,{className:"w-6 h-6"})}),o.jsxs("div",{children:[o.jsx("h3",{id:"modal-title",className:"text-xl font-bold text-white",children:t?"Analytics Engine Ready":"Start Analytics Application"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:t?"Streamlit server detected on port 8501":"Local Streamlit instance is offline"})]})]}),t?o.jsxs("div",{className:"space-y-4",children:[o.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Your Streamlit Sales Data Analyzer is running and ready. Click below to launch the live analytics dashboard in a new tab."}),o.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center justify-between",children:[o.jsx("span",{children:"http://localhost:8501"}),o.jsxs("span",{className:"flex items-center gap-1.5 text-[11px] text-emerald-400",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"Active"]})]}),o.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2",children:["Open Live Dashboard",o.jsx(Kd,{className:"w-4 h-4"})]})]}):o.jsxs("div",{className:"space-y-4",children:[o.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The Sales Data Analyzer application runs as an independent Streamlit service. To access the live dashboard, start it in your terminal:"}),o.jsxs("div",{className:"relative rounded-xl bg-slate-950/90 border border-white/10 p-4",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2 text-xs text-slate-400 font-mono",children:[o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(T1,{className:"w-3.5 h-3.5 text-cyan-400"}),"Terminal Command"]}),o.jsx("button",{onClick:x,className:"flex items-center gap-1 text-slate-300 hover:text-white transition-colors","aria-label":"Copy terminal command",children:l?o.jsxs(o.Fragment,{children:[o.jsx(l1,{className:"w-3.5 h-3.5 text-emerald-400"}),o.jsx("span",{className:"text-emerald-400 text-xs",children:"Copied"})]}):o.jsxs(o.Fragment,{children:[o.jsx(p1,{className:"w-3.5 h-3.5"}),o.jsx("span",{className:"text-xs",children:"Copy"})]})})]}),o.jsx("code",{className:"text-xs sm:text-sm text-cyan-300 font-mono block select-all",children:f})]}),o.jsxs("div",{className:"text-xs text-slate-400 space-y-1",children:[o.jsxs("p",{children:["• Make sure you are inside the project folder: ",o.jsx("span",{className:"text-slate-200",children:"Sales-Data-Analyzer"})]}),o.jsxs("p",{children:["• Once running, it will automatically serve at ",o.jsx("span",{className:"text-cyan-400",children:"http://localhost:8501"})]})]}),o.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[o.jsxs("button",{onClick:m,disabled:d,className:"flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-medium border border-white/10 hover:bg-white/5 text-slate-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-50",children:[o.jsx(Ii,{className:`w-4 h-4 ${d?"animate-spin":""}`}),"Recheck Status"]}),o.jsxs("button",{onClick:v,className:"flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center justify-center gap-2",children:["Try Opening Anyway",o.jsx(Kd,{className:"w-4 h-4"})]})]})]})]})})},q2=()=>{const r=ga(),[e,t]=k.useState(!1),[s,l]=k.useState(!1),[c,d]=k.useState(!1),h=k.useCallback(async()=>{try{const v=new AbortController,y=setTimeout(()=>v.abort(),1800);return await fetch("http://localhost:8501",{mode:"no-cors",signal:v.signal}),clearTimeout(y),l(!0),!0}catch{return l(!1),!1}},[]),f=k.useCallback(async()=>{try{const v=await gt.checkHealth();return d(v),v}catch{return d(!1),!1}},[]);k.useEffect(()=>{h(),f();const v=setInterval(()=>{h(),f()},1e4);return()=>clearInterval(v)},[h,f]);const x=async()=>{await h()?window.open("http://localhost:8501","_blank","noopener,noreferrer"):t(!0)},m=()=>{r("/app/overview")};return o.jsxs("div",{className:"min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[o.jsxs("div",{className:"bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-cyan-900/60 border-b border-cyan-500/20 py-2 px-4 text-center text-xs flex items-center justify-center space-x-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),o.jsx("span",{className:"text-slate-200 font-medium",children:"Enterprise Administrator Portal & Analytics Suite Active:"}),o.jsxs(xc,{to:"/app/overview",className:"text-cyan-300 font-semibold underline hover:text-white flex items-center space-x-1",children:[o.jsx("span",{children:"Launch SaaS Workspace"}),o.jsx(Fr,{className:"w-3.5 h-3.5"})]})]}),o.jsx(D1,{onOpenAnalytics:m,isStreamlitRunning:s,isFastApiRunning:c}),o.jsxs("main",{className:"flex-grow",children:[o.jsx(V2,{onOpenAnalytics:m}),o.jsx("section",{className:"py-12 bg-gradient-to-b from-transparent via-[#050b1a] to-transparent border-y border-white/5",children:o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl glass-panel border border-cyan-500/30",children:[o.jsxs("div",{className:"space-y-1",children:[o.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold",children:"Administrator Controlled"}),o.jsx("h3",{className:"text-xl font-bold text-white",children:"Full-Featured Commercial Analytics Workspace"}),o.jsx("p",{className:"text-xs text-slate-400 max-w-xl",children:"Featuring 9 dedicated intelligence modules: Executive Overview, Multi-dimensional Filtering, Data Explorer with pagination, Product Matrix, Integrity Auditing, Ingestion Management, and Cryptographic Security."})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[o.jsxs("button",{onClick:m,className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 flex items-center space-x-2 transition",children:[o.jsx(O0,{className:"w-4 h-4"}),o.jsx("span",{children:"Open SaaS Application"})]}),o.jsxs("button",{onClick:x,className:"px-4 py-2.5 rounded-xl border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-white text-xs font-medium transition flex items-center space-x-1.5",children:[o.jsx(zr,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Streamlit Classic"})]})]})]})})}),o.jsx(H2,{}),o.jsx(G2,{onOpenAnalytics:m}),o.jsx(W2,{})]}),o.jsx(X2,{onOpenAnalytics:m,isStreamlitRunning:s}),o.jsx($2,{isOpen:e,onClose:()=>t(!1),isStreamlitRunning:s,onCheckConnection:h})]})},Y2=()=>{var w,E;const{login:r}=po(),e=ga(),t=Xn(),[s,l]=k.useState("admin"),[c,d]=k.useState("AdminSecure2026!"),[h,f]=k.useState(null),[x,m]=k.useState(!1),v=((E=(w=t.state)==null?void 0:w.from)==null?void 0:E.pathname)||"/app/overview",y=async M=>{M.preventDefault(),f(null),m(!0);try{await r(s,c),e(v,{replace:!0})}catch(S){f(S.message||"Authentication failed. Please verify credentials.")}finally{m(!1)}};return o.jsxs("div",{className:"min-h-screen bg-[#030712] flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans selection:bg-cyan-500/30",children:[o.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"}),o.jsx("div",{className:"absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"}),o.jsx("div",{className:"absolute top-6 left-6 z-10",children:o.jsxs(xc,{to:"/",className:"flex items-center space-x-2 text-xs text-slate-400 hover:text-cyan-400 transition",children:[o.jsx(i1,{className:"w-4 h-4"}),o.jsx("span",{children:"Back to Public Landing"})]})}),o.jsxs("div",{className:"w-full max-w-md z-10",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-xl shadow-blue-500/20 mb-4",children:o.jsx("div",{className:"w-full h-full bg-[#030712] rounded-[15px] flex items-center justify-center",children:o.jsx(ar,{className:"w-6 h-6 text-cyan-400"})})}),o.jsx("h1",{className:"text-2xl font-bold text-white tracking-tight",children:"Admin Authentication"}),o.jsx("p",{className:"text-xs text-slate-400 mt-1.5",children:"Stratum Enterprise Sales Intelligence Control Center"})]}),o.jsxs("div",{className:"glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-xl",children:[h&&o.jsxs("div",{className:"mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start space-x-2.5",children:[o.jsx(ii,{className:"w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold",children:"Authentication Error"}),o.jsx("p",{className:"mt-0.5 leading-relaxed",children:h})]})]}),o.jsxs("form",{onSubmit:y,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"Administrator Username or Email"}),o.jsxs("div",{className:"relative",children:[o.jsx(C1,{className:"w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2"}),o.jsx("input",{type:"text",required:!0,value:s,onChange:M=>l(M.target.value),placeholder:"admin",className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition font-mono"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"Password"}),o.jsxs("div",{className:"relative",children:[o.jsx(z0,{className:"w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2"}),o.jsx("input",{type:"password",required:!0,value:c,onChange:M=>d(M.target.value),placeholder:"••••••••••••",className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition font-mono"})]})]}),o.jsx("button",{type:"submit",disabled:x,className:"w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition disabled:opacity-50 flex items-center justify-center space-x-2",children:x?o.jsxs(o.Fragment,{children:[o.jsx(Di,{className:"w-4 h-4 animate-spin"}),o.jsx("span",{children:"Verifying Credentials..."})]}):o.jsxs(o.Fragment,{children:[o.jsx(j0,{className:"w-4 h-4"}),o.jsx("span",{children:"Sign In to Admin Workspace"})]})})]}),o.jsxs("div",{className:"mt-6 pt-5 border-t border-white/5",children:[o.jsxs("div",{className:"rounded-xl bg-blue-950/30 border border-blue-500/20 p-3 text-[11px] text-slate-400 space-y-1",children:[o.jsxs("p",{className:"font-semibold text-cyan-300 flex items-center justify-between",children:[o.jsx("span",{children:"Default Admin Credentials:"}),o.jsx("span",{className:"text-[10px] text-emerald-400 font-mono",children:"Pre-seeded"})]}),o.jsxs("div",{className:"flex justify-between font-mono text-[10px] text-slate-300",children:[o.jsxs("span",{children:["User: ",o.jsx("code",{className:"text-white",children:"admin"})]}),o.jsxs("span",{children:["Pass: ",o.jsx("code",{className:"text-white",children:"AdminSecure2026!"})]})]})]}),o.jsx("p",{className:"text-[10px] text-slate-500 mt-2 text-center",children:"Security: Rate limited (5 failed attempts = 15m lockout). Salted bcrypt + 24h bearer tokens."})]})]})]})]})},K2=()=>{const{activeDatasetId:r,formatCurrency:e}=lr(),[t,s]=k.useState(null),[l,c]=k.useState([]),[d,h]=k.useState([]),[f,x]=k.useState([]),[m,v]=k.useState(null),[y,w]=k.useState(!0),[E,M]=k.useState(null),S=async()=>{w(!0),M(null);try{const[T,C,A,H,I]=await Promise.all([gt.getSummary({dataset_id:r}),gt.getTrends({dataset_id:r}),gt.getTopProducts({dataset_id:r},5),gt.getRegional({dataset_id:r}),gt.getDataQuality(r)]);s(T),c(C),h(A),x(H),v(I)}catch(T){M(T.message||"Failed to load executive overview data")}finally{w(!1)}};if(k.useEffect(()=>{S()},[r]),y)return o.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[400px] text-slate-400 space-y-3",children:[o.jsx(Ii,{className:"w-8 h-8 animate-spin text-cyan-400"}),o.jsx("p",{className:"text-xs font-mono",children:"Aggregating enterprise telemetry..."})]});if(E||!t)return o.jsxs("div",{className:"p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-200",children:[o.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[o.jsx(ii,{className:"w-5 h-5 text-red-400"}),o.jsx("h3",{className:"font-semibold text-sm",children:"Failed to Load Overview Data"})]}),o.jsx("p",{className:"text-xs text-red-300 mb-4",children:E||"Unknown error occurred."}),o.jsx("button",{onClick:S,className:"px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-xs font-medium text-red-100 transition",children:"Retry Telemetry Query"})]});const g=m&&m.total_raw_rows>0?Math.round(m.valid_rows_count/m.total_raw_rows*100):100;return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-white/5",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2",children:[o.jsx("span",{children:"Executive Sales Overview"}),o.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",children:"Live Real-Time"})]}),o.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:["Synthesized key performance metrics across ",t.active_records_count," active transactions."]})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs(Pi,{to:"/app/reports",className:"px-3 py-1.5 rounded-xl border border-white/10 bg-slate-900/60 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition flex items-center space-x-1.5",children:[o.jsx(x1,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Generate Report"})]}),o.jsx("button",{onClick:S,title:"Refresh Metrics",className:"p-2 rounded-xl border border-white/10 bg-slate-900/60 hover:border-white/20 text-slate-400 hover:text-white transition",children:o.jsx(Ii,{className:"w-4 h-4"})})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"glass-panel p-5 rounded-2xl relative overflow-hidden group",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-medium text-slate-400",children:"Total Net Revenue"}),o.jsx("div",{className:"w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400",children:o.jsx(Jh,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"mt-3",children:[o.jsx("div",{className:"text-2xl font-bold text-white font-mono tracking-tight",children:e(t.total_revenue)}),o.jsx("p",{className:"text-[11px] text-slate-400 mt-1 flex items-center space-x-1",children:o.jsx("span",{className:"text-cyan-400 font-mono",children:"Revenue = Q × P"})})]})]}),o.jsxs("div",{className:"glass-panel p-5 rounded-2xl relative overflow-hidden group",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-medium text-slate-400",children:"Unique Orders"}),o.jsx("div",{className:"w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400",children:o.jsx(W0,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"mt-3",children:[o.jsx("div",{className:"text-2xl font-bold text-white font-mono tracking-tight",children:t.total_orders.toLocaleString()}),o.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Distinct OrderIDs recorded"})]})]}),o.jsxs("div",{className:"glass-panel p-5 rounded-2xl relative overflow-hidden group",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-medium text-slate-400",children:"Units Dispatched"}),o.jsx("div",{className:"w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400",children:o.jsx(vc,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"mt-3",children:[o.jsx("div",{className:"text-2xl font-bold text-white font-mono tracking-tight",children:t.total_units_sold.toLocaleString()}),o.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Physical product volume"})]})]}),o.jsxs("div",{className:"glass-panel p-5 rounded-2xl relative overflow-hidden group",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-medium text-slate-400",children:"Avg. Order Value (AOV)"}),o.jsx("div",{className:"w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400",children:o.jsx(yc,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"mt-3",children:[o.jsx("div",{className:"text-2xl font-bold text-white font-mono tracking-tight",children:e(t.average_order_value)}),o.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Per unique order ID"})]})]})]}),o.jsxs("div",{className:"p-4 rounded-xl border border-blue-500/20 bg-blue-950/20 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs",children:[o.jsxs("div",{className:"flex items-start space-x-2.5",children:[o.jsx(ar,{className:"w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0"}),o.jsxs("div",{className:"text-slate-300",children:[o.jsx("span",{className:"font-semibold text-white",children:"Data Integrity Policy: "}),t.profit_note]})]}),o.jsxs("div",{className:"flex items-center space-x-3 text-slate-400 text-xs font-mono",children:[o.jsxs("span",{children:["Quality Index: ",o.jsxs("strong",{className:"text-emerald-400",children:[g,"%"]})]}),o.jsx(Pi,{to:"/app/quality",className:"text-cyan-400 hover:text-cyan-300 underline font-sans text-xs",children:"Inspect Audit"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"lg:col-span-2 glass-panel p-6 rounded-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-semibold text-white",children:"Monthly Revenue Trajectory"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Temporal sales progression across active months"})]}),o.jsxs("span",{className:"text-xs font-mono text-cyan-400",children:[l.length," Billing Cycles"]})]}),l.length===0?o.jsx("p",{className:"text-xs text-slate-400 py-10 text-center italic",children:"No monthly trend records found."}):o.jsx("div",{className:"space-y-3 pt-2",children:(()=>{const T=Math.max(...l.map(C=>C.revenue),1);return l.map(C=>{const A=Math.round(C.revenue/T*100);return o.jsxs("div",{className:"space-y-1",children:[o.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[o.jsx("span",{className:"text-slate-300",children:C.month}),o.jsx("span",{className:"text-white font-semibold",children:e(C.revenue)})]}),o.jsx("div",{className:"h-2 rounded-full bg-slate-800 overflow-hidden flex",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-500",style:{width:`${A}%`}})}),o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[o.jsxs("span",{children:[C.units_sold," units sold"]}),o.jsxs("span",{children:[C.order_count," orders"]})]})]},C.month)})})()})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-semibold text-white",children:"Top Revenue Drivers"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Ranked by total sales"})]}),o.jsxs(Pi,{to:"/app/products",className:"text-xs text-cyan-400 hover:text-cyan-300 flex items-center space-x-1",children:[o.jsx("span",{children:"View All"}),o.jsx(Fr,{className:"w-3.5 h-3.5"})]})]}),o.jsx("div",{className:"space-y-3",children:d.map((T,C)=>o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/50 border border-white/5 space-y-1.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] flex items-center justify-center font-mono font-bold",children:C+1}),o.jsx("span",{className:"font-medium text-slate-200",children:T.product})]}),o.jsx("span",{className:"font-mono text-cyan-300 font-semibold",children:e(T.revenue)})]}),o.jsx("div",{className:"h-1.5 rounded-full bg-slate-800 overflow-hidden",children:o.jsx("div",{className:"h-full bg-cyan-400 rounded-full",style:{width:`${Math.min(100,T.revenue_share_pct)}%`}})}),o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[o.jsxs("span",{children:[T.units_sold," units"]}),o.jsxs("span",{children:[T.revenue_share_pct.toFixed(1),"% share"]})]})]},T.product))})]})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-semibold text-white",children:"Geographic Market Distribution"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Revenue attribution categorized by regional markets"})]}),o.jsxs(Pi,{to:"/app/analytics",className:"text-xs text-cyan-400 hover:text-cyan-300 flex items-center space-x-1",children:[o.jsx("span",{children:"Filter by Region"}),o.jsx(Fr,{className:"w-3.5 h-3.5"})]})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",children:f.map(T=>o.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2",children:[o.jsx("span",{className:"text-xs font-semibold text-slate-300",children:T.region}),o.jsx("div",{className:"text-lg font-bold text-white font-mono",children:e(T.revenue)}),o.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400",children:[o.jsxs("span",{children:[T.units_sold," units"]}),o.jsxs("span",{className:"text-cyan-400 font-semibold",children:[T.revenue_share_pct.toFixed(1),"%"]})]})]},T.region))})]})]})},Z2=()=>{const{activeDatasetId:r,formatCurrency:e}=lr(),[t,s]=k.useState(""),[l,c]=k.useState(""),[d,h]=k.useState("All"),[f,x]=k.useState("All"),[m,v]=k.useState(null),[y,w]=k.useState([]),[E,M]=k.useState([]),[S,g]=k.useState(!0),[T,C]=k.useState(null),A=async()=>{g(!0),C(null);try{const P={dataset_id:r,start_date:t||void 0,end_date:l||void 0,region:d!=="All"?d:void 0,category:f!=="All"?f:void 0},[O,L,N]=await Promise.all([gt.getSummary(P),gt.getTrends(P),gt.getCategory(P)]);v(O),w(L),M(N)}catch(P){C(P.message||"Failed to apply filters")}finally{g(!1)}};k.useEffect(()=>{A()},[r,t,l,d,f]);const H=()=>{s(""),c(""),h("All"),x("All")},I=()=>{const P=gt.getExportUrl({dataset_id:r,start_date:t||void 0,end_date:l||void 0,region:d!=="All"?d:void 0,category:f!=="All"?f:void 0});window.open(P,"_blank")};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-white/5",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2",children:o.jsx("span",{children:"Sales Analytics & Segmentation"})}),o.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Segment revenue and dispatch volume across dynamic date windows, geographic regions, and merchandise lines."})]}),o.jsx("div",{className:"flex items-center space-x-2",children:o.jsxs("button",{onClick:I,className:"px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition flex items-center space-x-1.5 shadow-lg shadow-cyan-500/10",children:[o.jsx(mo,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Export Filtered CSV"})]})})]}),o.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-white/10 space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/5",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold text-slate-200",children:[o.jsx(F0,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Multi-Dimensional Filtering"})]}),o.jsxs("button",{onClick:H,className:"text-xs text-slate-400 hover:text-white flex items-center space-x-1 transition",children:[o.jsx(ef,{className:"w-3 h-3"}),o.jsx("span",{children:"Reset Filters"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[o.jsxs("div",{children:[o.jsxs("label",{className:"block text-[11px] font-medium text-slate-400 mb-1 flex items-center space-x-1",children:[o.jsx(Yd,{className:"w-3 h-3 text-slate-500"}),o.jsx("span",{children:"Start Date"})]}),o.jsx("input",{type:"date",value:t,onChange:P=>s(P.target.value),className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-1.5 px-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block text-[11px] font-medium text-slate-400 mb-1 flex items-center space-x-1",children:[o.jsx(Yd,{className:"w-3 h-3 text-slate-500"}),o.jsx("span",{children:"End Date"})]}),o.jsx("input",{type:"date",value:l,onChange:P=>c(P.target.value),className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-1.5 px-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block text-[11px] font-medium text-slate-400 mb-1 flex items-center space-x-1",children:[o.jsx(y1,{className:"w-3 h-3 text-slate-500"}),o.jsx("span",{children:"Market Region"})]}),o.jsxs("select",{value:d,onChange:P=>h(P.target.value),className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-1.5 px-3 text-xs text-white focus:outline-none focus:border-cyan-500",children:[o.jsx("option",{value:"All",children:"All Regions"}),m==null?void 0:m.available_regions.map(P=>o.jsx("option",{value:P,children:P},P))]})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block text-[11px] font-medium text-slate-400 mb-1 flex items-center space-x-1",children:[o.jsx(xo,{className:"w-3 h-3 text-slate-500"}),o.jsx("span",{children:"Product Category"})]}),o.jsxs("select",{value:f,onChange:P=>x(P.target.value),className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-1.5 px-3 text-xs text-white focus:outline-none focus:border-cyan-500",children:[o.jsx("option",{value:"All",children:"All Categories"}),m==null?void 0:m.available_categories.map(P=>o.jsx("option",{value:P,children:P},P))]})]})]})]}),m&&o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[o.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[o.jsxs("span",{className:"text-[11px] text-slate-400 flex items-center space-x-1",children:[o.jsx(Jh,{className:"w-3 h-3 text-blue-400"}),o.jsx("span",{children:"Filtered Revenue"})]}),o.jsx("div",{className:"text-lg font-bold text-white font-mono",children:e(m.total_revenue)})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[o.jsxs("span",{className:"text-[11px] text-slate-400 flex items-center space-x-1",children:[o.jsx(W0,{className:"w-3 h-3 text-cyan-400"}),o.jsx("span",{children:"Filtered Orders"})]}),o.jsx("div",{className:"text-lg font-bold text-white font-mono",children:m.total_orders.toLocaleString()})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[o.jsxs("span",{className:"text-[11px] text-slate-400 flex items-center space-x-1",children:[o.jsx(vc,{className:"w-3 h-3 text-indigo-400"}),o.jsx("span",{children:"Filtered Units Sold"})]}),o.jsx("div",{className:"text-lg font-bold text-white font-mono",children:m.total_units_sold.toLocaleString()})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[o.jsxs("span",{className:"text-[11px] text-slate-400 flex items-center space-x-1",children:[o.jsx(o1,{className:"w-3 h-3 text-violet-400"}),o.jsx("span",{children:"Filtered AOV"})]}),o.jsx("div",{className:"text-lg font-bold text-white font-mono",children:e(m.average_order_value)})]})]}),T&&o.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center space-x-2",children:[o.jsx(ii,{className:"w-4 h-4 text-red-400"}),o.jsx("span",{children:T})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-semibold text-white",children:"Monthly Progression"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Filtered volume over time"})]}),S&&o.jsx(Ii,{className:"w-3.5 h-3.5 animate-spin text-cyan-400"})]}),y.length===0?o.jsx("p",{className:"text-xs text-slate-400 py-12 text-center italic",children:"No matching transactions found for the selected filter combination."}):o.jsx("div",{className:"space-y-4 pt-2",children:(()=>{const P=Math.max(...y.map(O=>O.revenue),1);return y.map(O=>{const L=Math.round(O.revenue/P*100);return o.jsxs("div",{className:"space-y-1.5",children:[o.jsxs("div",{className:"flex justify-between text-xs",children:[o.jsx("span",{className:"font-mono text-slate-300",children:O.month}),o.jsxs("div",{className:"flex items-center space-x-3 text-xs",children:[o.jsxs("span",{className:"text-slate-400",children:[O.units_sold," units"]}),o.jsx("span",{className:"font-mono font-semibold text-white",children:e(O.revenue)})]})]}),o.jsx("div",{className:"h-2 rounded-full bg-slate-800 overflow-hidden flex",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300",style:{width:`${L}%`}})})]},O.month)})})()})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsx("div",{className:"flex items-center justify-between",children:o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-semibold text-white",children:"Category Segmentation"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Revenue split across merchandise categories"})]})}),E.length===0?o.jsx("p",{className:"text-xs text-slate-400 py-12 text-center italic",children:"No categories match the active filters."}):o.jsx("div",{className:"space-y-4 pt-2",children:E.map(P=>o.jsxs("div",{className:"space-y-1.5 p-3 rounded-xl bg-slate-900/40 border border-white/5",children:[o.jsxs("div",{className:"flex justify-between text-xs",children:[o.jsx("span",{className:"font-medium text-slate-200",children:P.category}),o.jsx("span",{className:"font-mono font-semibold text-cyan-300",children:e(P.revenue)})]}),o.jsx("div",{className:"h-2 rounded-full bg-slate-800 overflow-hidden",children:o.jsx("div",{className:"h-full bg-cyan-400 rounded-full transition-all duration-300",style:{width:`${Math.min(100,P.revenue_share_pct)}%`}})}),o.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400",children:[o.jsxs("span",{children:[P.units_sold," items sold"]}),o.jsxs("span",{children:[P.revenue_share_pct.toFixed(1),"% of total"]})]})]},P.category))})]})]})]})},Q2=()=>{const{activeDatasetId:r,datasets:e,uploadDataset:t,formatCurrency:s,formatDate:l,pageSize:c,setPageSize:d}=lr(),[h,f]=k.useState(""),[x,m]=k.useState(""),[v,y]=k.useState("Date"),[w,E]=k.useState("desc"),[M,S]=k.useState(1),[g,T]=k.useState(null),[C,A]=k.useState(!0),[H,I]=k.useState(null),P=k.useRef(null),[O,L]=k.useState(!1),[N,z]=k.useState(null),[Q,ee]=k.useState(null),de=e.find(G=>G.dataset_id===r),le=async G=>{var Se;const fe=(Se=G.target.files)==null?void 0:Se[0];if(fe){ee(null),z(null),L(!0);try{const xe=await t(fe);z(`Successfully uploaded "${xe.filename}" (${xe.row_count} rows). Data Explorer updated!`),S(1)}catch(xe){ee(xe.message||"CSV upload failed")}finally{L(!1),P.current&&(P.current.value="")}}};k.useEffect(()=>{const G=setTimeout(()=>{m(h),S(1)},300);return()=>clearTimeout(G)},[h]);const oe=async()=>{A(!0),I(null);try{const G=await gt.getRecords({dataset_id:r,q:x||void 0,sort_by:v,order:w,page:M,page_size:c});T(G)}catch(G){I(G.message||"Failed to fetch sales records")}finally{A(!1)}};k.useEffect(()=>{oe()},[r,x,v,w,M,c]);const ce=G=>{v===G?E(w==="asc"?"desc":"asc"):(y(G),E("asc")),S(1)},B=G=>v!==G?o.jsx(s1,{className:"w-3 h-3 text-slate-500 opacity-60"}):w==="asc"?o.jsx(k0,{className:"w-3 h-3 text-cyan-400"}):o.jsx(n1,{className:"w-3 h-3 text-cyan-400"}),he=()=>{const G=gt.getExportUrl({dataset_id:r});window.open(G,"_blank")},Y=(g==null?void 0:g.total_records)||0,j=(g==null?void 0:g.total_pages)||1,ie=Y===0?0:(M-1)*c+1,Ne=Math.min(M*c,Y);return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-white/5",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2",children:o.jsx("span",{children:"Data Explorer & Query Engine"})}),o.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Search, sort, filter, and inspect individual line-item transactions with verified calculations."})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[o.jsxs("div",{className:"px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/60 text-xs font-mono text-slate-300 flex items-center space-x-2",children:[o.jsx(zr,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{className:"text-white font-medium truncate max-w-[150px]",children:de?de.filename:r}),o.jsxs("span",{className:"text-[10px] text-cyan-400 px-1.5 py-0.2 rounded bg-cyan-500/10 border border-cyan-500/20",children:[Y.toLocaleString()," rows"]})]}),o.jsx("input",{ref:P,type:"file",accept:".csv",className:"hidden",onChange:le}),o.jsxs("button",{onClick:()=>{var G;return(G=P.current)==null?void 0:G.click()},disabled:O,className:"px-3.5 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-xs font-medium text-cyan-300 transition flex items-center space-x-1.5 shadow-lg shadow-blue-500/10 disabled:opacity-50",title:"Upload CSV dataset directly into explorer",children:[O?o.jsx(Di,{className:"w-3.5 h-3.5 animate-spin text-cyan-400"}):o.jsx(Qh,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:O?"Ingesting...":"+ Upload CSV"})]}),o.jsxs("button",{onClick:he,className:"px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition flex items-center space-x-1.5 shadow-lg shadow-cyan-500/10",children:[o.jsx(mo,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Export Cleaned Dataset"})]})]})]}),N&&o.jsxs("div",{className:"p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(_i,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),o.jsx("span",{children:N})]}),o.jsx("button",{onClick:()=>z(null),className:"text-emerald-400 hover:text-white text-xs",children:"Dismiss"})]}),Q&&o.jsxs("div",{className:"p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(ii,{className:"w-4 h-4 text-red-400 flex-shrink-0"}),o.jsx("span",{children:Q})]}),o.jsx("button",{onClick:()=>ee(null),className:"text-red-400 hover:text-white text-xs",children:"Dismiss"})]}),o.jsxs("div",{className:"glass-panel p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4",children:[o.jsxs("div",{className:"relative flex-1 max-w-md",children:[o.jsx(H0,{className:"w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2"}),o.jsx("input",{type:"text",value:h,onChange:G=>f(G.target.value),placeholder:"Search OrderID, Product, Region, Category...",className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-2 pl-10 pr-9 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"}),h&&o.jsx("button",{onClick:()=>f(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white",children:o.jsx(nx,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"flex items-center space-x-4 self-end md:self-auto text-xs text-slate-400",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{children:"Rows per page:"}),o.jsxs("select",{value:c,onChange:G=>{d(Number(G.target.value)),S(1)},className:"bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono",children:[o.jsx("option",{value:"10",children:"10"}),o.jsx("option",{value:"20",children:"20"}),o.jsx("option",{value:"50",children:"50"}),o.jsx("option",{value:"100",children:"100"})]})]}),o.jsxs("div",{className:"font-mono text-[11px] text-slate-300",children:["Showing ",o.jsx("strong",{className:"text-white",children:ie})," to ",o.jsx("strong",{className:"text-white",children:Ne})," of ",o.jsx("strong",{className:"text-cyan-400",children:Y})]})]})]}),H&&o.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center space-x-2",children:[o.jsx(nx,{className:"w-4 h-4 text-red-400"}),o.jsx("span",{children:H})]}),o.jsxs("div",{className:"glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-xl",children:[o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-slate-900/90 text-slate-400 border-b border-white/5 uppercase font-mono text-[11px] tracking-wider",children:o.jsxs("tr",{children:[o.jsx("th",{onClick:()=>ce("OrderID"),className:"py-3 px-4 cursor-pointer hover:text-white transition select-none",children:o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx("span",{children:"Order ID"}),B("OrderID")]})}),o.jsx("th",{onClick:()=>ce("Date"),className:"py-3 px-4 cursor-pointer hover:text-white transition select-none",children:o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx("span",{children:"Date"}),B("Date")]})}),o.jsx("th",{onClick:()=>ce("Product"),className:"py-3 px-4 cursor-pointer hover:text-white transition select-none",children:o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx("span",{children:"Product"}),B("Product")]})}),o.jsx("th",{onClick:()=>ce("Category"),className:"py-3 px-4 cursor-pointer hover:text-white transition select-none",children:o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx("span",{children:"Category"}),B("Category")]})}),o.jsx("th",{onClick:()=>ce("Region"),className:"py-3 px-4 cursor-pointer hover:text-white transition select-none",children:o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx("span",{children:"Region"}),B("Region")]})}),o.jsx("th",{onClick:()=>ce("Quantity"),className:"py-3 px-4 text-right cursor-pointer hover:text-white transition select-none",children:o.jsxs("div",{className:"flex items-center justify-end space-x-1.5",children:[o.jsx("span",{children:"Quantity"}),B("Quantity")]})}),o.jsx("th",{onClick:()=>ce("Price"),className:"py-3 px-4 text-right cursor-pointer hover:text-white transition select-none",children:o.jsxs("div",{className:"flex items-center justify-end space-x-1.5",children:[o.jsx("span",{children:"Unit Price"}),B("Price")]})}),o.jsx("th",{onClick:()=>ce("Revenue"),className:"py-3 px-4 text-right cursor-pointer hover:text-white transition select-none",children:o.jsxs("div",{className:"flex items-center justify-end space-x-1.5",children:[o.jsx("span",{children:"Total Revenue"}),B("Revenue")]})})]})}),o.jsx("tbody",{className:"divide-y divide-white/5 font-sans",children:C?o.jsx("tr",{children:o.jsx("td",{colSpan:8,className:"py-16 text-center text-slate-400",children:o.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2",children:[o.jsx(Ii,{className:"w-6 h-6 animate-spin text-cyan-400"}),o.jsx("p",{className:"text-xs font-mono",children:"Querying database records..."})]})})}):(g==null?void 0:g.records.length)===0?o.jsx("tr",{children:o.jsx("td",{colSpan:8,className:"py-16 text-center text-slate-400",children:o.jsxs("div",{className:"flex flex-col items-center justify-center space-y-3",children:[o.jsx(gc,{className:"w-8 h-8 text-slate-600"}),o.jsx("p",{className:"text-sm font-medium text-slate-300",children:"No matching records found"}),o.jsx("p",{className:"text-xs text-slate-500",children:x?`No transactions match your search filter "${x}".`:"This dataset contains no valid transaction rows."}),x&&o.jsx("button",{onClick:()=>f(""),className:"px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs border border-cyan-500/30 hover:bg-cyan-500/30 transition",children:"Clear Search"})]})})}):g==null?void 0:g.records.map((G,fe)=>o.jsxs("tr",{className:"hover:bg-white/[0.02] transition-colors font-mono text-[12px]",children:[o.jsx("td",{className:"py-2.5 px-4 text-cyan-400 font-semibold",children:G.OrderID}),o.jsx("td",{className:"py-2.5 px-4 text-slate-300",children:l(G.Date)}),o.jsx("td",{className:"py-2.5 px-4 text-slate-100 font-sans font-medium",children:G.Product}),o.jsx("td",{className:"py-2.5 px-4 font-sans text-slate-400",children:G.Category}),o.jsx("td",{className:"py-2.5 px-4 text-slate-300",children:o.jsx("span",{className:"px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px]",children:G.Region})}),o.jsx("td",{className:"py-2.5 px-4 text-right text-slate-200",children:G.Quantity}),o.jsx("td",{className:"py-2.5 px-4 text-right text-slate-400",children:s(G.Price)}),o.jsx("td",{className:"py-2.5 px-4 text-right text-white font-bold",children:s(G.Revenue)})]},`${G.OrderID}-${fe}`))})]})}),o.jsxs("div",{className:"p-4 border-t border-white/5 bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4",children:[o.jsxs("div",{className:"text-xs text-slate-400 font-mono",children:["Page ",o.jsx("strong",{className:"text-white",children:M})," of ",o.jsx("strong",{className:"text-white",children:j})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("button",{disabled:M<=1||C,onClick:()=>S(G=>Math.max(1,G-1)),className:"p-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition",children:o.jsx(c1,{className:"w-4 h-4"})}),o.jsx("span",{className:"px-3 py-1 rounded-lg bg-blue-600/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono",children:M}),o.jsx("button",{disabled:M>=j||C,onClick:()=>S(G=>Math.min(j,G+1)),className:"p-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition",children:o.jsx(u1,{className:"w-4 h-4"})})]})]})]})]})},J2=()=>{const{activeDatasetId:r,formatCurrency:e}=lr(),[t,s]=k.useState([]),[l,c]=k.useState([]),[d,h]=k.useState(null),[f,x]=k.useState(10),[m,v]=k.useState(!0),[y,w]=k.useState(null),E=async()=>{v(!0),w(null);try{const[M,S,g]=await Promise.all([gt.getTopProducts({dataset_id:r},f),gt.getCategory({dataset_id:r}),gt.getBusinessInsights({dataset_id:r})]);s(M),c(S),h(g)}catch(M){w(M.message||"Failed to load product analytics")}finally{v(!1)}};return k.useEffect(()=>{E()},[r,f]),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-white/5",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2",children:o.jsx("span",{children:"Product Portfolio & SKU Performance"})}),o.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Analyze product velocity, volume attribution, and merchandise line contribution."})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"text-xs text-slate-400",children:"Display:"}),o.jsxs("select",{value:f,onChange:M=>x(Number(M.target.value)),className:"bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-1 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono",children:[o.jsx("option",{value:"5",children:"Top 5 SKUs"}),o.jsx("option",{value:"10",children:"Top 10 SKUs"}),o.jsx("option",{value:"25",children:"Top 25 SKUs"})]})]})]}),d&&o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[o.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 space-y-1",children:[o.jsxs("span",{className:"text-[11px] text-cyan-400 font-medium flex items-center space-x-1.5",children:[o.jsx(a1,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Flagship Revenue Driver"})]}),o.jsx("div",{className:"text-lg font-bold text-white",children:d.best_product}),o.jsxs("p",{className:"text-[11px] font-mono text-cyan-300",children:[e(d.best_product_revenue)," in total sales"]})]}),o.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-blue-500/20 bg-blue-950/20 space-y-1",children:[o.jsxs("span",{className:"text-[11px] text-blue-400 font-medium flex items-center space-x-1.5",children:[o.jsx(xo,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Dominant Product Category"})]}),o.jsx("div",{className:"text-lg font-bold text-white",children:d.best_category}),o.jsxs("p",{className:"text-[11px] font-mono text-blue-300",children:[e(d.best_category_revenue)," total attribution"]})]}),o.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 space-y-1",children:[o.jsxs("span",{className:"text-[11px] text-indigo-400 font-medium flex items-center space-x-1.5",children:[o.jsx(yc,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Peak Performance Month"})]}),o.jsx("div",{className:"text-lg font-bold text-white",children:d.highest_revenue_month}),o.jsxs("p",{className:"text-[11px] font-mono text-indigo-300",children:[e(d.highest_month_revenue)," monthly peak"]})]})]}),y&&o.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center space-x-2",children:[o.jsx(ii,{className:"w-4 h-4 text-red-400"}),o.jsx("span",{children:y})]}),o.jsxs("div",{className:"glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-xl",children:[o.jsxs("div",{className:"p-4 border-b border-white/5 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold text-white",children:[o.jsx(vc,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Product Ranking Matrix"})]}),m&&o.jsx(Ii,{className:"w-3.5 h-3.5 animate-spin text-cyan-400"})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-slate-900/90 text-slate-400 border-b border-white/5 uppercase font-mono text-[11px] tracking-wider",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3 px-4",children:"Rank"}),o.jsx("th",{className:"py-3 px-4",children:"Product Name"}),o.jsx("th",{className:"py-3 px-4 text-right",children:"Units Sold"}),o.jsx("th",{className:"py-3 px-4 text-right",children:"Revenue Share"}),o.jsx("th",{className:"py-3 px-4 text-right",children:"Total Net Revenue"})]})}),o.jsx("tbody",{className:"divide-y divide-white/5 font-sans",children:t.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:5,className:"py-12 text-center text-slate-400 italic",children:"No products found in the active dataset."})}):t.map((M,S)=>o.jsxs("tr",{className:"hover:bg-white/[0.02] transition-colors",children:[o.jsx("td",{className:"py-3 px-4",children:o.jsxs("span",{className:"w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-bold flex items-center justify-center",children:["#",S+1]})}),o.jsx("td",{className:"py-3 px-4 text-white font-medium",children:M.product}),o.jsx("td",{className:"py-3 px-4 text-right font-mono text-slate-300",children:M.units_sold.toLocaleString()}),o.jsx("td",{className:"py-3 px-4 text-right",children:o.jsxs("div",{className:"flex items-center justify-end space-x-2",children:[o.jsx("div",{className:"w-20 h-1.5 rounded-full bg-slate-800 overflow-hidden hidden sm:block",children:o.jsx("div",{className:"h-full bg-cyan-400 rounded-full",style:{width:`${Math.min(100,M.revenue_share_pct)}%`}})}),o.jsxs("span",{className:"font-mono text-cyan-400 font-semibold text-xs",children:[M.revenue_share_pct.toFixed(1),"%"]})]})}),o.jsx("td",{className:"py-3 px-4 text-right font-mono font-bold text-white",children:e(M.revenue)})]},M.product))})]})})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsx("div",{className:"flex items-center justify-between",children:o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-semibold text-white",children:"Category Performance Breakdown"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Total units and revenue grouped by category"})]})}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:l.map(M=>o.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2 hover:border-cyan-500/30 transition",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-semibold text-slate-200 text-xs",children:M.category}),o.jsxs("span",{className:"px-2 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-400 font-mono",children:[M.revenue_share_pct.toFixed(1),"% Share"]})]}),o.jsx("div",{className:"text-xl font-bold font-mono text-white",children:e(M.revenue)}),o.jsxs("p",{className:"text-[11px] text-slate-400",children:[M.units_sold.toLocaleString()," total units sold"]})]},M.category))})]})]})},eT=()=>{const{activeDatasetId:r}=lr(),[e,t]=k.useState(null),[s,l]=k.useState(!0),[c,d]=k.useState(null),h=async()=>{l(!0),d(null);try{const m=await gt.getDataQuality(r);t(m)}catch(m){d(m.message||"Failed to inspect dataset quality")}finally{l(!1)}};k.useEffect(()=>{h()},[r]);const f=()=>{const m=gt.getCleanedExportUrl(r);window.open(m,"_blank")};if(s)return o.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[400px] text-slate-400 space-y-3",children:[o.jsx(Ii,{className:"w-8 h-8 animate-spin text-cyan-400"}),o.jsx("p",{className:"text-xs font-mono",children:"Running algorithmic data quality audit..."})]});if(c||!e)return o.jsxs("div",{className:"p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-200",children:[o.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[o.jsx(_c,{className:"w-5 h-5 text-red-400"}),o.jsx("h3",{className:"font-semibold text-sm",children:"Data Audit Inspection Failed"})]}),o.jsx("p",{className:"text-xs text-red-300 mb-4",children:c||"Unknown error occurred."}),o.jsx("button",{onClick:h,className:"px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-xs font-medium text-red-100 transition",children:"Retry Quality Audit"})]});const x=e.total_raw_rows>0?Math.round(e.valid_rows_count/e.total_raw_rows*100):100;return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-white/5",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2",children:o.jsx("span",{children:"Data Quality & Integrity Audit"})}),o.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Algorithmic verification of raw CSV ingested records, column missingness, invalid types, and duplicate keys."})]}),o.jsxs("button",{onClick:f,className:"px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition flex items-center space-x-1.5 shadow-lg shadow-cyan-500/10",children:[o.jsx(mo,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Download Cleaned CSV"})]})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6",children:[o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] flex-shrink-0",children:o.jsxs("div",{className:"w-full h-full bg-[#030712] rounded-[15px] flex items-center justify-center font-mono font-bold text-xl text-cyan-300",children:[x,"%"]})}),o.jsxs("div",{children:[o.jsxs("h2",{className:"text-base font-semibold text-white flex items-center space-x-2",children:[o.jsx("span",{children:"Overall Integrity Score"}),x>=90?o.jsx(_i,{className:"w-4 h-4 text-emerald-400"}):o.jsx(X0,{className:"w-4 h-4 text-amber-400"})]}),o.jsxs("p",{className:"text-xs text-slate-400 mt-0.5",children:[e.valid_rows_count," valid records ready for analytical modeling (",e.excluded_rows_count," excluded)."]})]})]}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto",children:[o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-white/5 text-center",children:[o.jsx("span",{className:"text-[10px] text-slate-500 block uppercase font-mono",children:"Raw Rows"}),o.jsx("span",{className:"text-sm font-bold font-mono text-white",children:e.total_raw_rows})]}),o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-white/5 text-center",children:[o.jsx("span",{className:"text-[10px] text-slate-500 block uppercase font-mono",children:"Columns"}),o.jsx("span",{className:"text-sm font-bold font-mono text-white",children:e.total_columns})]}),o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-white/5 text-center",children:[o.jsx("span",{className:"text-[10px] text-slate-500 block uppercase font-mono",children:"Dup. OrderIDs"}),o.jsx("span",{className:"text-sm font-bold font-mono text-cyan-400",children:e.duplicate_order_ids})]}),o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-white/5 text-center",children:[o.jsx("span",{className:"text-[10px] text-slate-500 block uppercase font-mono",children:"Invalid Rows"}),o.jsx("span",{className:"text-sm font-bold font-mono text-amber-400",children:e.excluded_rows_count})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-white/5 space-y-1.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsx("span",{className:"text-slate-400 font-medium",children:"Duplicate Order IDs"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 font-mono",children:"Preserved"})]}),o.jsx("div",{className:"text-xl font-bold font-mono text-white",children:e.duplicate_order_ids}),o.jsx("p",{className:"text-[10px] text-slate-500",children:"Multi-item orders retained as separate line items."})]}),o.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-white/5 space-y-1.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsx("span",{className:"text-slate-400 font-medium",children:"Invalid Dates"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-mono",children:"Unparseable"})]}),o.jsx("div",{className:"text-xl font-bold font-mono text-white",children:e.invalid_dates_count}),o.jsx("p",{className:"text-[10px] text-slate-500",children:"Rows with non-standard or missing dates."})]}),o.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-white/5 space-y-1.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsx("span",{className:"text-slate-400 font-medium",children:"Invalid Quantities"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-mono",children:"Q ≤ 0 or NaN"})]}),o.jsx("div",{className:"text-xl font-bold font-mono text-white",children:e.invalid_quantities_count}),o.jsx("p",{className:"text-[10px] text-slate-500",children:"Quantity values violating positive numeric policy."})]}),o.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-white/5 space-y-1.5",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsx("span",{className:"text-slate-400 font-medium",children:"Invalid Prices"}),o.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-mono",children:"P ≤ 0 or NaN"})]}),o.jsx("div",{className:"text-xl font-bold font-mono text-white",children:e.invalid_prices_count}),o.jsx("p",{className:"text-[10px] text-slate-500",children:"Prices violating non-negative numeric policy."})]})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsxs("h2",{className:"text-sm font-semibold text-white flex items-center space-x-2",children:[o.jsx(gc,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Column Missingness Analysis"})]}),o.jsx("div",{className:"space-y-3",children:e.missing_values_by_column.map(m=>o.jsxs("div",{className:"space-y-1",children:[o.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[o.jsx("span",{className:"text-slate-300",children:m.column}),o.jsxs("span",{className:"text-slate-400",children:[m.missing_count," missing (",m.missing_percentage.toFixed(1),"%)"]})]}),o.jsx("div",{className:"h-1.5 rounded-full bg-slate-800 overflow-hidden",children:o.jsx("div",{className:`h-full rounded-full transition-all duration-300 ${m.missing_count===0?"bg-emerald-500":"bg-amber-400"}`,style:{width:`${Math.max(m.missing_percentage,m.missing_count>0?3:0)}%`}})})]},m.column))})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-blue-500/20 bg-blue-950/20 space-y-3",children:[o.jsxs("h2",{className:"text-sm font-semibold text-white flex items-center space-x-2",children:[o.jsx(_1,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Active Data Cleaning & Validation Directives"})]}),o.jsx("ul",{className:"space-y-2 text-xs text-slate-300 list-disc list-inside",children:e.validation_policy_notes.map((m,v)=>o.jsx("li",{className:"leading-relaxed",children:m},v))})]})]})},tT=()=>{const{activeDatasetId:r,setActiveDatasetId:e,datasets:t,reloadDatasets:s,uploadDataset:l,isLoadingDatasets:c}=lr(),d=k.useRef(null),[h,f]=k.useState(!1),[x,m]=k.useState(null),[v,y]=k.useState(null),[w,E]=k.useState(null),[M,S]=k.useState(!1),[g,T]=k.useState(!1),C=async P=>{if(P){m(null),y(null),f(!0);try{const O=await l(P);y(`Dataset "${O.filename}" uploaded successfully (${O.row_count} rows). Switched to active telemetry source.`)}catch(O){m(O.message||"File upload failed. Ensure CSV format meets required schema.")}finally{f(!1),d.current&&(d.current.value="")}}},A=P=>{P.preventDefault(),P.dataTransfer.files&&P.dataTransfer.files.length>0&&C(P.dataTransfer.files[0])},H=async P=>{S(!0),m(null),y(null);try{await gt.deleteDataset(P),y("Dataset successfully removed."),await s()}catch(O){m(O.message||"Failed to delete dataset.")}finally{S(!1),E(null)}},I=async()=>{T(!0),m(null),y(null);try{const P=await gt.resetDemoDataset();y("Default demo dataset re-initialized successfully."),await s(),e(P.dataset_id)}catch(P){m(P.message||"Failed to reset demo dataset.")}finally{T(!1)}};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-white/5",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2",children:o.jsx("span",{children:"Dataset Management & Ingestion"})}),o.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Ingest corporate sales data, switch active telemetry source, and manage persistent dataset partitions."})]}),o.jsxs("button",{onClick:I,disabled:g,className:"px-3.5 py-1.5 rounded-xl border border-white/10 bg-slate-900/60 hover:border-cyan-500/40 text-xs font-medium text-slate-300 hover:text-white transition flex items-center space-x-1.5 disabled:opacity-50",children:[g?o.jsx(Di,{className:"w-3.5 h-3.5 animate-spin text-cyan-400"}):o.jsx(ef,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Reset to Demo Dataset"})]})]}),v&&o.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs flex items-center space-x-2",children:[o.jsx(_i,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),o.jsx("span",{children:v})]}),x&&o.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center space-x-2",children:[o.jsx(ii,{className:"w-4 h-4 text-red-400 flex-shrink-0"}),o.jsx("span",{children:x})]}),o.jsxs("div",{onDragOver:P=>P.preventDefault(),onDrop:A,onClick:()=>{var P;return(P=d.current)==null?void 0:P.click()},className:"glass-panel p-8 rounded-2xl border-2 border-dashed border-slate-700 hover:border-cyan-500/50 transition-colors flex flex-col items-center justify-center text-center cursor-pointer group",children:[o.jsx("input",{ref:d,type:"file",accept:".csv",className:"hidden",onChange:P=>{P.target.files&&P.target.files[0]&&C(P.target.files[0])}}),o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform mb-3",children:h?o.jsx(Di,{className:"w-6 h-6 animate-spin"}):o.jsx(Qh,{className:"w-7 h-7"})}),o.jsx("h3",{className:"text-sm font-semibold text-white",children:h?"Validating and Ingesting CSV...":"Click to Upload or Drag & Drop CSV"}),o.jsxs("p",{className:"text-xs text-slate-400 mt-1 max-w-sm",children:["Required columns: ",o.jsx("code",{className:"text-cyan-300",children:"OrderID, Date, Product, Category, Quantity, Price, Region"})]}),o.jsx("p",{className:"text-[11px] text-slate-500 mt-2",children:"Max file size: 25MB • Strict validation with zero silent data corruption"})]}),o.jsxs("div",{className:"glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-xl space-y-4",children:[o.jsxs("div",{className:"p-4 border-b border-white/5 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold text-white",children:[o.jsx(zr,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Partitioned Ingestion Datasets"})]}),o.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[t.length," Active Storage Partitions"]})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-slate-900/90 text-slate-400 border-b border-white/5 uppercase font-mono text-[11px] tracking-wider",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3 px-4",children:"Status"}),o.jsx("th",{className:"py-3 px-4",children:"Dataset Name"}),o.jsx("th",{className:"py-3 px-4",children:"Dataset ID"}),o.jsx("th",{className:"py-3 px-4 text-right",children:"Valid Rows"}),o.jsx("th",{className:"py-3 px-4 text-right",children:"Raw Rows"}),o.jsx("th",{className:"py-3 px-4 text-right",children:"Actions"})]})}),o.jsx("tbody",{className:"divide-y divide-white/5 font-sans",children:c?o.jsx("tr",{children:o.jsxs("td",{colSpan:6,className:"py-10 text-center text-slate-400",children:[o.jsx(Di,{className:"w-5 h-5 animate-spin mx-auto text-cyan-400 mb-2"}),o.jsx("span",{children:"Loading dataset registry..."})]})}):t.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:6,className:"py-10 text-center text-slate-400 italic",children:"No datasets currently loaded in memory."})}):t.map(P=>{const O=P.dataset_id===r;return o.jsxs("tr",{className:`hover:bg-white/[0.02] transition-colors ${O?"bg-blue-600/10":""}`,children:[o.jsx("td",{className:"py-3 px-4",children:O?o.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono font-medium",children:"Active"}):o.jsx("button",{onClick:()=>e(P.dataset_id),className:"px-2 py-0.5 rounded-full text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono transition",children:"Set Active"})}),o.jsxs("td",{className:"py-3 px-4 text-white font-medium flex items-center space-x-2",children:[o.jsx(gc,{className:"w-3.5 h-3.5 text-cyan-400 flex-shrink-0"}),o.jsx("span",{className:"truncate max-w-xs",children:P.filename}),(P.is_demo??P.is_default)&&o.jsx("span",{className:"text-[9px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300",children:"Demo"})]}),o.jsx("td",{className:"py-3 px-4 font-mono text-[11px] text-slate-400",children:P.dataset_id}),o.jsx("td",{className:"py-3 px-4 text-right font-mono text-emerald-400 font-semibold",children:(P.valid_row_count??P.valid_rows??0).toLocaleString()}),o.jsx("td",{className:"py-3 px-4 text-right font-mono text-slate-400",children:(P.raw_row_count??P.total_rows??0).toLocaleString()}),o.jsx("td",{className:"py-3 px-4 text-right",children:!(P.is_demo??P.is_default)&&o.jsx("button",{onClick:()=>E(P.dataset_id),className:"p-1 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition",title:"Delete Dataset",children:o.jsx(N1,{className:"w-3.5 h-3.5"})})})]},P.dataset_id)})})]})})]}),w&&o.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:o.jsxs("div",{className:"glass-panel p-6 rounded-2xl max-w-sm w-full border border-red-500/30 space-y-4",children:[o.jsxs("div",{className:"flex items-center space-x-3 text-red-400",children:[o.jsx(ii,{className:"w-5 h-5 flex-shrink-0"}),o.jsx("h3",{className:"text-sm font-semibold text-white",children:"Confirm Dataset Removal"})]}),o.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Are you sure you want to remove dataset ",o.jsx("code",{className:"text-cyan-400 font-mono",children:w}),"? This action cannot be undone."]}),o.jsxs("div",{className:"flex justify-end space-x-2 pt-2",children:[o.jsx("button",{onClick:()=>E(null),disabled:M,className:"px-3 py-1.5 rounded-xl border border-white/10 text-xs text-slate-300 hover:text-white",children:"Cancel"}),o.jsxs("button",{onClick:()=>H(w),disabled:M,className:"px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-xs text-white font-medium flex items-center space-x-1",children:[M&&o.jsx(Di,{className:"w-3.5 h-3.5 animate-spin"}),o.jsx("span",{children:"Confirm Delete"})]})]})]})})]})},nT=()=>{const{activeDatasetId:r,formatCurrency:e}=lr(),[t,s]=k.useState(null),[l,c]=k.useState(!0),[d,h]=k.useState(null),f=async()=>{c(!0),h(null);try{const m=await gt.getExecutiveReport({dataset_id:r});s(m)}catch(m){h(m.message||"Failed to generate executive report")}finally{c(!1)}};k.useEffect(()=>{f()},[r]);const x=()=>{if(!t)return;let m=`========================================================
`;m+=`         STRATUM ENTERPRISE EXECUTIVE SALES REPORT       
`,m+=`========================================================
`,m+=`Generated:    ${t.generated_at}
`,m+=`Dataset:      ${t.dataset_name}
`,m+=`Total Revenue: ${e(t.kpis.total_revenue)}
`,m+=`Total Orders:  ${t.kpis.total_orders}
`,m+=`Total Units:   ${t.kpis.total_units_sold}
`,m+=`Avg Order Val: ${e(t.kpis.average_order_value)}

`,m+=`--- EXECUTIVE TAKEAWAYS ---
`,t.insights.forEach((E,M)=>{m+=`${M+1}. ${E}
`}),m+=`
--- TOP REVENUE PRODUCTS ---
`,t.top_products.forEach((E,M)=>{m+=`${M+1}. ${E.product}: ${e(E.revenue)} (${E.units_sold} units, ${E.revenue_share_pct.toFixed(1)}% share)
`}),m+=`
--- REGIONAL ATTRIBUTION ---
`,t.top_regions.forEach(E=>{m+=`- ${E.region}: ${e(E.revenue)} (${E.units_sold} units, ${E.revenue_share_pct.toFixed(1)}%)
`}),m+=`
--- DATA INTEGRITY DIRECTIVES ---
`,t.quality_notes.forEach(E=>{m+=`* ${E}
`});const v=new Blob([m],{type:"text/plain;charset=utf-8"}),y=URL.createObjectURL(v),w=document.createElement("a");w.href=y,w.download=`stratum_sales_report_${Date.now()}.txt`,w.click(),URL.revokeObjectURL(y)};return l?o.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[400px] text-slate-400 space-y-3",children:[o.jsx(Ii,{className:"w-8 h-8 animate-spin text-cyan-400"}),o.jsx("p",{className:"text-xs font-mono",children:"Synthesizing executive briefing report..."})]}):d||!t?o.jsxs("div",{className:"p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-200",children:[o.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[o.jsx(ii,{className:"w-5 h-5 text-red-400"}),o.jsx("h3",{className:"font-semibold text-sm",children:"Failed to Generate Report"})]}),o.jsx("p",{className:"text-xs text-red-300 mb-4",children:d||"Unknown error occurred."}),o.jsx("button",{onClick:f,className:"px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-xs font-medium text-red-100 transition",children:"Regenerate Report"})]}):o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-white/5",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2",children:o.jsx("span",{children:"Executive Business Briefing"})}),o.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Automated intelligence brief compiled for executive stakeholders and leadership teams."})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs("button",{onClick:()=>window.print(),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-slate-900/60 hover:border-white/20 text-xs text-slate-300 hover:text-white transition flex items-center space-x-1.5",children:[o.jsx(S1,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Print Report"})]}),o.jsxs("button",{onClick:x,className:"px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition flex items-center space-x-1.5 shadow-lg shadow-cyan-500/10",children:[o.jsx(mo,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Download Summary (.txt)"})]})]})]}),o.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl space-y-6 font-sans",children:[o.jsxs("div",{className:"pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1",children:"Confidential Business Intelligence"}),o.jsx("h2",{className:"text-lg font-bold text-white",children:"Sales Performance & Revenue Audit"}),o.jsxs("p",{className:"text-xs text-slate-400 mt-0.5",children:["Source partition: ",o.jsx("span",{className:"text-slate-200 font-mono",children:t.dataset_name})]})]}),o.jsxs("div",{className:"text-left sm:text-right text-xs font-mono text-slate-400 space-y-0.5",children:[o.jsxs("div",{children:["Timestamp: ",t.generated_at]}),o.jsx("div",{className:"text-emerald-400",children:"Status: Formally Verified"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono",children:"1. Core Financial Telemetry"}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[o.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[o.jsx("span",{className:"text-[11px] text-slate-400",children:"Total Revenue"}),o.jsx("div",{className:"text-lg font-bold font-mono text-white",children:e(t.kpis.total_revenue)})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[o.jsx("span",{className:"text-[11px] text-slate-400",children:"Total Unique Orders"}),o.jsx("div",{className:"text-lg font-bold font-mono text-white",children:t.kpis.total_orders.toLocaleString()})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[o.jsx("span",{className:"text-[11px] text-slate-400",children:"Total Volume Sold"}),o.jsx("div",{className:"text-lg font-bold font-mono text-white",children:t.kpis.total_units_sold.toLocaleString()})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1",children:[o.jsx("span",{className:"text-[11px] text-slate-400",children:"Average Order Value"}),o.jsx("div",{className:"text-lg font-bold font-mono text-cyan-300",children:e(t.kpis.average_order_value)})]})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono",children:"2. Strategic Takeaways & Synthesis"}),o.jsx("div",{className:"space-y-2",children:t.insights.map((m,v)=>o.jsxs("div",{className:"p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 flex items-start space-x-3 text-xs text-slate-200",children:[o.jsx(_i,{className:"w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5"}),o.jsx("span",{className:"leading-relaxed",children:m})]},v))})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-2",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono",children:"3. Top Revenue Generators"}),o.jsx("div",{className:"space-y-2",children:t.top_products.map((m,v)=>o.jsxs("div",{className:"p-2.5 rounded-xl bg-slate-900/50 border border-white/5 flex items-center justify-between text-xs",children:[o.jsxs("span",{className:"font-medium text-slate-200",children:[v+1,". ",m.product]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"font-mono font-semibold text-white",children:e(m.revenue)}),o.jsxs("span",{className:"text-[10px] text-slate-400 block",children:[m.revenue_share_pct.toFixed(1),"% share"]})]})]},m.product))})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono",children:"4. Geographic Market Attribution"}),o.jsx("div",{className:"space-y-2",children:t.top_regions.map(m=>o.jsxs("div",{className:"p-2.5 rounded-xl bg-slate-900/50 border border-white/5 flex items-center justify-between text-xs",children:[o.jsx("span",{className:"font-medium text-slate-200",children:m.region}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"font-mono font-semibold text-cyan-300",children:e(m.revenue)}),o.jsxs("span",{className:"text-[10px] text-slate-400 block",children:[m.units_sold," units (",m.revenue_share_pct.toFixed(1),"%)"]})]})]},m.region))})]})]})]})]})},iT=()=>{const{activeDatasetId:r,setActiveDatasetId:e,datasets:t,currency:s,setCurrency:l,dateFormat:c,setDateFormat:d,pageSize:h,setPageSize:f,formatCurrency:x,formatDate:m}=lr(),[v,y]=k.useState(null),w=T=>{l(T),S("Currency preference updated.")},E=T=>{d(T),S("Date format preference updated.")},M=T=>{f(T),S("Explorer page size preference updated.")},S=T=>{y(T),setTimeout(()=>y(null),3e3)},g=()=>{l("$"),d("YYYY-MM-DD"),f(20),S("Settings reset to system defaults.")};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-white/5",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2",children:o.jsx("span",{children:"Workspace & Display Preferences"})}),o.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Configure financial currency symbols, date parsing schemes, table densities, and telemetry partitions."})]}),o.jsxs("button",{onClick:g,className:"px-3.5 py-1.5 rounded-xl border border-white/10 bg-slate-900/60 hover:border-cyan-500/40 text-xs font-medium text-slate-300 hover:text-white transition flex items-center space-x-1.5",children:[o.jsx(ef,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Reset Defaults"})]})]}),v&&o.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs flex items-center space-x-2 animate-in fade-in",children:[o.jsx(_i,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),o.jsx("span",{children:v})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-white text-sm font-semibold",children:[o.jsx(zr,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Default Active Dataset"})]}),o.jsx("p",{className:"text-xs text-slate-400",children:"Select the primary telemetry partition loaded by default across all dashboards."}),o.jsx("select",{value:r,onChange:T=>e(T.target.value),className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono",children:t.map(T=>o.jsxs("option",{value:T.dataset_id,children:[T.filename," (",T.valid_row_count," rows)"]},T.dataset_id))})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-white text-sm font-semibold",children:[o.jsx(Jh,{className:"w-4 h-4 text-blue-400"}),o.jsx("span",{children:"Currency Symbol"})]}),o.jsx("p",{className:"text-xs text-slate-400",children:"Select which currency indicator precedes financial metric valuations."}),o.jsx("div",{className:"flex flex-wrap gap-2",children:[{label:"USD ($)",sym:"$"},{label:"INR (₹)",sym:"₹"},{label:"EUR (€)",sym:"€"},{label:"GBP (£)",sym:"£"},{label:"JPY (¥)",sym:"¥"}].map(T=>o.jsx("button",{onClick:()=>w(T.sym),className:`px-3 py-1.5 rounded-xl text-xs font-mono transition ${s===T.sym?"bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/25":"bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white"}`,children:T.label},T.sym))})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-white text-sm font-semibold",children:[o.jsx(Yd,{className:"w-4 h-4 text-indigo-400"}),o.jsx("span",{children:"Date Display Format"})]}),o.jsx("p",{className:"text-xs text-slate-400",children:"Define calendar notation rendered across table records and reports."}),o.jsx("div",{className:"flex flex-wrap gap-2",children:["YYYY-MM-DD","DD/MM/YYYY","MM/DD/YYYY"].map(T=>o.jsx("button",{onClick:()=>E(T),className:`px-3 py-1.5 rounded-xl text-xs font-mono transition ${c===T?"bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/25":"bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white"}`,children:T},T))})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-white text-sm font-semibold",children:[o.jsx(xo,{className:"w-4 h-4 text-violet-400"}),o.jsx("span",{children:"Data Explorer Page Size"})]}),o.jsx("p",{className:"text-xs text-slate-400",children:"Rows displayed simultaneously in the Data Explorer query interface."}),o.jsx("div",{className:"flex flex-wrap gap-2",children:[10,20,50,100].map(T=>o.jsxs("button",{onClick:()=>M(T),className:`px-3 py-1.5 rounded-xl text-xs font-mono transition ${h===T?"bg-violet-600 text-white font-bold shadow-lg shadow-violet-500/25":"bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white"}`,children:[T," rows"]},T))})]})]}),o.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/10 space-y-3",children:[o.jsxs("h3",{className:"text-sm font-semibold text-white flex items-center space-x-2",children:[o.jsx(M1,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Interactive Preferences Live Preview"})]}),o.jsxs("p",{className:"text-xs text-slate-400",children:["Sample financial valuation: ",o.jsx("strong",{className:"text-white font-mono",children:x(149950.5)})," • Sample transaction date: ",o.jsx("strong",{className:"text-cyan-300 font-mono",children:m("2024-03-15")})]})]})]})},rT=()=>{var L;const{admin:r,logout:e,changePassword:t}=po(),s=ga(),[l,c]=k.useState(""),[d,h]=k.useState(""),[f,x]=k.useState(""),[m,v]=k.useState(null),[y,w]=k.useState(null),[E,M]=k.useState(!1),[S,g]=k.useState([]),[T,C]=k.useState(!0),[A,H]=k.useState(null),I=async()=>{C(!0),H(null);try{const N=await gt.getAuditLogs();g(N)}catch(N){H(N.message||"Failed to load security audit log")}finally{C(!1)}};k.useEffect(()=>{I()},[]);const P=async N=>{if(N.preventDefault(),v(null),w(null),d.length<8){v("New password must be at least 8 characters long.");return}if(d!==f){v("New passwords do not match.");return}M(!0);try{const z=await t(l,d);w(z||"Administrator password successfully updated."),c(""),h(""),x(""),I()}catch(z){v(z.message||"Failed to change password. Verify your current password.")}finally{M(!1)}},O=async()=>{await e(),s("/login")};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-white/5",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2",children:o.jsx("span",{children:"Administrator Security & Audit Center"})}),o.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Manage single-admin credentials, review cryptographic session telemetry, and inspect real-time authentication logs."})]}),o.jsxs("button",{onClick:O,className:"px-3.5 py-1.5 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-xs font-medium text-red-300 transition flex items-center space-x-1.5",children:[o.jsx(B0,{className:"w-3.5 h-3.5 text-red-400"}),o.jsx("span",{children:"Sign Out Session"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[o.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-white/10 space-y-3",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white uppercase text-base",children:((L=r==null?void 0:r.username)==null?void 0:L[0])||"A"}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-semibold text-white",children:(r==null?void 0:r.username)||"Administrator"}),o.jsx("span",{className:"text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:"Single Administrator Role"})]})]}),o.jsxs("div",{className:"pt-2 border-t border-white/5 text-xs text-slate-400 space-y-1 font-mono",children:[o.jsxs("div",{children:["Email: ",o.jsx("span",{className:"text-slate-200",children:r==null?void 0:r.email})]}),o.jsxs("div",{children:["Token: ",o.jsx("span",{className:"text-cyan-400",children:"Bearer 256-bit token"})]})]})]}),o.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-white/10 space-y-2",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold text-white",children:[o.jsx(ar,{className:"w-4 h-4 text-emerald-400"}),o.jsx("span",{children:"Cryptographic Hardening"})]}),o.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 leading-relaxed",children:[o.jsxs("li",{children:["• Passwords salted and hashed with ",o.jsx("strong",{children:"bcrypt"})," (12 rounds)"]}),o.jsx("li",{children:"• Plaintext passwords are never logged or stored"}),o.jsx("li",{children:"• HTTP-only cookie + Bearer authorization headers"})]})]}),o.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-white/10 space-y-2",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold text-white",children:[o.jsx(_c,{className:"w-4 h-4 text-amber-400"}),o.jsx("span",{children:"Brute-Force Shield Active"})]}),o.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 leading-relaxed",children:[o.jsxs("li",{children:["• Automatic threshold: ",o.jsx("strong",{children:"5 failed login attempts"})]}),o.jsxs("li",{children:["• Rate lockout cooldown: ",o.jsx("strong",{children:"15 minutes"})]}),o.jsx("li",{children:"• SQLite-persisted audit log with client IP tracking"})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-sm font-semibold text-white",children:[o.jsx(j0,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Update Admin Password"})]}),o.jsx("p",{className:"text-xs text-slate-400",children:"Rotate your master administrator password. A minimum of 8 characters is required."}),y&&o.jsxs("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs flex items-center space-x-2",children:[o.jsx(_i,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),o.jsx("span",{children:y})]}),m&&o.jsxs("div",{className:"p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center space-x-2",children:[o.jsx(ii,{className:"w-4 h-4 text-red-400 flex-shrink-0"}),o.jsx("span",{children:m})]}),o.jsxs("form",{onSubmit:P,className:"space-y-3 pt-1",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-[11px] font-medium text-slate-300 mb-1",children:"Current Password"}),o.jsx("input",{type:"password",required:!0,value:l,onChange:N=>c(N.target.value),placeholder:"••••••••••••",className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-[11px] font-medium text-slate-300 mb-1",children:"New Password"}),o.jsx("input",{type:"password",required:!0,value:d,onChange:N=>h(N.target.value),placeholder:"At least 8 characters",className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-[11px] font-medium text-slate-300 mb-1",children:"Confirm New Password"}),o.jsx("input",{type:"password",required:!0,value:f,onChange:N=>x(N.target.value),placeholder:"Re-type new password",className:"w-full bg-slate-900/80 border border-slate-700/80 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"})]}),o.jsx("button",{type:"submit",disabled:E,className:"w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition disabled:opacity-50 flex items-center justify-center space-x-2",children:E?o.jsxs(o.Fragment,{children:[o.jsx(Di,{className:"w-4 h-4 animate-spin"}),o.jsx("span",{children:"Hashing & Updating..."})]}):o.jsxs(o.Fragment,{children:[o.jsx(z0,{className:"w-4 h-4"}),o.jsx("span",{children:"Save New Password"})]})})]})]}),o.jsxs("div",{className:"lg:col-span-2 glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-xl space-y-4",children:[o.jsxs("div",{className:"p-4 border-b border-white/5 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold text-white",children:[o.jsx(g1,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"Real-Time Authentication Audit Log"})]}),o.jsx("button",{onClick:I,title:"Refresh Audit Log",className:"p-1 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white transition",children:o.jsx(Ii,{className:"w-3.5 h-3.5"})})]}),o.jsxs("div",{className:"overflow-x-auto",children:[A&&o.jsxs("div",{className:"p-3 m-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center space-x-2",children:[o.jsx(ii,{className:"w-4 h-4 text-red-400"}),o.jsx("span",{children:A})]}),o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-slate-900/90 text-slate-400 border-b border-white/5 uppercase font-mono text-[11px] tracking-wider",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3 px-4",children:"Status"}),o.jsx("th",{className:"py-3 px-4",children:"Timestamp"}),o.jsx("th",{className:"py-3 px-4",children:"Username / Identity"}),o.jsx("th",{className:"py-3 px-4",children:"Client IP"}),o.jsx("th",{className:"py-3 px-4",children:"Details / Reason"})]})}),o.jsx("tbody",{className:"divide-y divide-white/5 font-mono text-[11px]",children:T?o.jsx("tr",{children:o.jsxs("td",{colSpan:5,className:"py-10 text-center text-slate-400",children:[o.jsx(Di,{className:"w-5 h-5 animate-spin mx-auto text-cyan-400 mb-2"}),o.jsx("span",{children:"Retrieving audit trail..."})]})}):S.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:5,className:"py-10 text-center text-slate-400 italic font-sans",children:"No authentication attempts logged yet."})}):S.map(N=>{const z=new Date(N.timestamp*1e3).toLocaleString();return o.jsxs("tr",{className:"hover:bg-white/[0.02] transition-colors",children:[o.jsx("td",{className:"py-2.5 px-4",children:N.success?o.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",children:"SUCCESS"}):o.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 border border-red-500/30",children:"FAILED"})}),o.jsx("td",{className:"py-2.5 px-4 text-slate-300",children:z}),o.jsx("td",{className:"py-2.5 px-4 text-white font-semibold",children:N.username}),o.jsx("td",{className:"py-2.5 px-4 text-slate-400",children:N.ip_address}),o.jsx("td",{className:"py-2.5 px-4 font-sans text-slate-400",children:N.failure_reason||"Verified session established"})]},N.id)})})]})]})]})]})]})};function sT(){return o.jsx(Vy,{children:o.jsx(Zy,{children:o.jsx(Qy,{children:o.jsxs(vy,{children:[o.jsx(Mn,{path:"/",element:o.jsx(q2,{})}),o.jsx(Mn,{path:"/login",element:o.jsx(Y2,{})}),o.jsxs(Mn,{path:"/app",element:o.jsx(R1,{children:o.jsx(P1,{})}),children:[o.jsx(Mn,{index:!0,element:o.jsx($d,{to:"/app/overview",replace:!0})}),o.jsx(Mn,{path:"overview",element:o.jsx(K2,{})}),o.jsx(Mn,{path:"analytics",element:o.jsx(Z2,{})}),o.jsx(Mn,{path:"explorer",element:o.jsx(Q2,{})}),o.jsx(Mn,{path:"products",element:o.jsx(J2,{})}),o.jsx(Mn,{path:"quality",element:o.jsx(eT,{})}),o.jsx(Mn,{path:"datasets",element:o.jsx(tT,{})}),o.jsx(Mn,{path:"reports",element:o.jsx(nT,{})}),o.jsx(Mn,{path:"settings",element:o.jsx(iT,{})}),o.jsx(Mn,{path:"security",element:o.jsx(rT,{})})]}),o.jsx(Mn,{path:"*",element:o.jsx($d,{to:"/",replace:!0})})]})})})})}m_.createRoot(document.getElementById("root")).render(o.jsx(l_.StrictMode,{children:o.jsx(sT,{})}));
