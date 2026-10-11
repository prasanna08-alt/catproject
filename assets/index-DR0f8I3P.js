(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Zf={exports:{}},Ba={},Qf={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function _y(){if(O_)return ft;O_=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(k,Q,De){this.props=k,this.context=Q,this.refs=M,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(k,Q){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Q,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(k,Q,De){this.props=k,this.context=Q,this.refs=M,this.updater=De||S}var b=D.prototype=new x;b.constructor=D,E(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,U=Object.prototype.hasOwnProperty,N={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function O(k,Q,De){var $,fe={},Me=null,ve=null;if(Q!=null)for($ in Q.ref!==void 0&&(ve=Q.ref),Q.key!==void 0&&(Me=""+Q.key),Q)U.call(Q,$)&&!L.hasOwnProperty($)&&(fe[$]=Q[$]);var Te=arguments.length-2;if(Te===1)fe.children=De;else if(1<Te){for(var Ne=Array(Te),Qe=0;Qe<Te;Qe++)Ne[Qe]=arguments[Qe+2];fe.children=Ne}if(k&&k.defaultProps)for($ in Te=k.defaultProps,Te)fe[$]===void 0&&(fe[$]=Te[$]);return{$$typeof:o,type:k,key:Me,ref:ve,props:fe,_owner:N.current}}function A(k,Q){return{$$typeof:o,type:k.type,key:Q,ref:k.ref,props:k.props,_owner:k._owner}}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function z(k){var Q={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(De){return Q[De]})}var ee=/\/+/g;function j(k,Q){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):Q.toString(36)}function oe(k,Q,De,$,fe){var Me=typeof k;(Me==="undefined"||Me==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case o:case e:ve=!0}}if(ve)return ve=k,fe=fe(ve),k=$===""?"."+j(ve,0):$,w(fe)?(De="",k!=null&&(De=k.replace(ee,"$&/")+"/"),oe(fe,Q,De,"",function(Qe){return Qe})):fe!=null&&(C(fe)&&(fe=A(fe,De+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(ee,"$&/")+"/")+k)),Q.push(fe)),1;if(ve=0,$=$===""?".":$+":",w(k))for(var Te=0;Te<k.length;Te++){Me=k[Te];var Ne=$+j(Me,Te);ve+=oe(Me,Q,De,Ne,fe)}else if(Ne=g(k),typeof Ne=="function")for(k=Ne.call(k),Te=0;!(Me=k.next()).done;)Me=Me.value,Ne=$+j(Me,Te++),ve+=oe(Me,Q,De,Ne,fe);else if(Me==="object")throw Q=String(k),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ve}function ue(k,Q,De){if(k==null)return k;var $=[],fe=0;return oe(k,$,"","",function(Me){return Q.call(De,Me,fe++)}),$}function ne(k){if(k._status===-1){var Q=k._result;Q=Q(),Q.then(function(De){(k._status===0||k._status===-1)&&(k._status=1,k._result=De)},function(De){(k._status===0||k._status===-1)&&(k._status=2,k._result=De)}),k._status===-1&&(k._status=0,k._result=Q)}if(k._status===1)return k._result.default;throw k._result}var re={current:null},B={transition:null},ce={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:B,ReactCurrentOwner:N};function ae(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:ue,forEach:function(k,Q,De){ue(k,function(){Q.apply(this,arguments)},De)},count:function(k){var Q=0;return ue(k,function(){Q++}),Q},toArray:function(k){return ue(k,function(Q){return Q})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ft.Component=y,ft.Fragment=t,ft.Profiler=s,ft.PureComponent=D,ft.StrictMode=i,ft.Suspense=d,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ft.act=ae,ft.cloneElement=function(k,Q,De){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var $=E({},k.props),fe=k.key,Me=k.ref,ve=k._owner;if(Q!=null){if(Q.ref!==void 0&&(Me=Q.ref,ve=N.current),Q.key!==void 0&&(fe=""+Q.key),k.type&&k.type.defaultProps)var Te=k.type.defaultProps;for(Ne in Q)U.call(Q,Ne)&&!L.hasOwnProperty(Ne)&&($[Ne]=Q[Ne]===void 0&&Te!==void 0?Te[Ne]:Q[Ne])}var Ne=arguments.length-2;if(Ne===1)$.children=De;else if(1<Ne){Te=Array(Ne);for(var Qe=0;Qe<Ne;Qe++)Te[Qe]=arguments[Qe+2];$.children=Te}return{$$typeof:o,type:k.type,key:fe,ref:Me,props:$,_owner:ve}},ft.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},ft.createElement=O,ft.createFactory=function(k){var Q=O.bind(null,k);return Q.type=k,Q},ft.createRef=function(){return{current:null}},ft.forwardRef=function(k){return{$$typeof:c,render:k}},ft.isValidElement=C,ft.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:ne}},ft.memo=function(k,Q){return{$$typeof:h,type:k,compare:Q===void 0?null:Q}},ft.startTransition=function(k){var Q=B.transition;B.transition={};try{k()}finally{B.transition=Q}},ft.unstable_act=ae,ft.useCallback=function(k,Q){return re.current.useCallback(k,Q)},ft.useContext=function(k){return re.current.useContext(k)},ft.useDebugValue=function(){},ft.useDeferredValue=function(k){return re.current.useDeferredValue(k)},ft.useEffect=function(k,Q){return re.current.useEffect(k,Q)},ft.useId=function(){return re.current.useId()},ft.useImperativeHandle=function(k,Q,De){return re.current.useImperativeHandle(k,Q,De)},ft.useInsertionEffect=function(k,Q){return re.current.useInsertionEffect(k,Q)},ft.useLayoutEffect=function(k,Q){return re.current.useLayoutEffect(k,Q)},ft.useMemo=function(k,Q){return re.current.useMemo(k,Q)},ft.useReducer=function(k,Q,De){return re.current.useReducer(k,Q,De)},ft.useRef=function(k){return re.current.useRef(k)},ft.useState=function(k){return re.current.useState(k)},ft.useSyncExternalStore=function(k,Q,De){return re.current.useSyncExternalStore(k,Q,De)},ft.useTransition=function(){return re.current.useTransition()},ft.version="18.3.1",ft}var k_;function Hh(){return k_||(k_=1,Qf.exports=_y()),Qf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function gy(){if(z_)return Ba;z_=1;var o=Hh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,_={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(_[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)_[p]===void 0&&(_[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:S,props:_,_owner:s.current}}return Ba.Fragment=t,Ba.jsx=u,Ba.jsxs=u,Ba}var B_;function vy(){return B_||(B_=1,Zf.exports=gy()),Zf.exports}var Ue=vy(),Lt=Hh(),Su={},Jf={exports:{}},Gn={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function xy(){return V_||(V_=1,(function(o){function e(B,ce){var ae=B.length;B.push(ce);e:for(;0<ae;){var k=ae-1>>>1,Q=B[k];if(0<s(Q,ce))B[k]=ce,B[ae]=Q,ae=k;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var ce=B[0],ae=B.pop();if(ae!==ce){B[0]=ae;e:for(var k=0,Q=B.length,De=Q>>>1;k<De;){var $=2*(k+1)-1,fe=B[$],Me=$+1,ve=B[Me];if(0>s(fe,ae))Me<Q&&0>s(ve,fe)?(B[k]=ve,B[Me]=ae,k=Me):(B[k]=fe,B[$]=ae,k=$);else if(Me<Q&&0>s(ve,ae))B[k]=ve,B[Me]=ae,k=Me;else break e}}return ce}function s(B,ce){var ae=B.sortIndex-ce.sortIndex;return ae!==0?ae:B.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,_=null,g=3,S=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var ce=t(h);ce!==null;){if(ce.callback===null)i(h);else if(ce.startTime<=B)i(h),ce.sortIndex=ce.expirationTime,e(d,ce);else break;ce=t(h)}}function w(B){if(M=!1,b(B),!E)if(t(d)!==null)E=!0,ne(U);else{var ce=t(h);ce!==null&&re(w,ce.startTime-B)}}function U(B,ce){E=!1,M&&(M=!1,x(O),O=-1),S=!0;var ae=g;try{for(b(ce),_=t(d);_!==null&&(!(_.expirationTime>ce)||B&&!z());){var k=_.callback;if(typeof k=="function"){_.callback=null,g=_.priorityLevel;var Q=k(_.expirationTime<=ce);ce=o.unstable_now(),typeof Q=="function"?_.callback=Q:_===t(d)&&i(d),b(ce)}else i(d);_=t(d)}if(_!==null)var De=!0;else{var $=t(h);$!==null&&re(w,$.startTime-ce),De=!1}return De}finally{_=null,g=ae,S=!1}}var N=!1,L=null,O=-1,A=5,C=-1;function z(){return!(o.unstable_now()-C<A)}function ee(){if(L!==null){var B=o.unstable_now();C=B;var ce=!0;try{ce=L(!0,B)}finally{ce?j():(N=!1,L=null)}}else N=!1}var j;if(typeof D=="function")j=function(){D(ee)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ue=oe.port2;oe.port1.onmessage=ee,j=function(){ue.postMessage(null)}}else j=function(){y(ee,0)};function ne(B){L=B,N||(N=!0,j())}function re(B,ce){O=y(function(){B(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){E||S||(E=!0,ne(U))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(B){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var ae=g;g=ce;try{return B()}finally{g=ae}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ce){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=g;g=B;try{return ce()}finally{g=ae}},o.unstable_scheduleCallback=function(B,ce,ae){var k=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?k+ae:k):ae=k,B){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ae+Q,B={id:p++,callback:ce,priorityLevel:B,startTime:ae,expirationTime:Q,sortIndex:-1},ae>k?(B.sortIndex=ae,e(h,B),t(d)===null&&B===t(h)&&(M?(x(O),O=-1):M=!0,re(w,ae-k))):(B.sortIndex=Q,e(d,B),E||S||(E=!0,ne(U))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var ce=g;return function(){var ae=g;g=ce;try{return B.apply(this,arguments)}finally{g=ae}}}})(td)),td}var H_;function yy(){return H_||(H_=1,ed.exports=xy()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function Sy(){if(G_)return Gn;G_=1;var o=Hh(),e=yy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function g(n){return d.call(_,n)?!0:d.call(p,n)?!1:h.test(n)?_[n]=!0:(p[n]=!0,!1)}function S(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||S(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,D);y[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,D);y[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,D);y[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,r,l,f){var m=y.hasOwnProperty(r)?y[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),N=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),B=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,k;function Q(n){if(k===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+n}var De=!1;function $(n,r){if(!n||De)return"";De=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(J){var f=J}Reflect.construct(n,[],r)}else{try{r.call()}catch(J){f=J}n.call(r.prototype)}else{try{throw Error()}catch(J){f=J}n()}}catch(J){if(J&&f&&typeof J.stack=="string"){for(var m=J.stack.split(`
`),v=f.stack.split(`
`),T=m.length-1,F=v.length-1;1<=T&&0<=F&&m[T]!==v[F];)F--;for(;1<=T&&0<=F;T--,F--)if(m[T]!==v[F]){if(T!==1||F!==1)do if(T--,F--,0>F||m[T]!==v[F]){var V=`
`+m[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=F);break}}}finally{De=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?Q(n):""}function fe(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=$(n.type,!1),n;case 11:return n=$(n.type.render,!1),n;case 1:return n=$(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case L:return"Fragment";case N:return"Portal";case A:return"Profiler";case O:return"StrictMode";case j:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ee:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case ne:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qe(n){var r=Ne(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Rt(n){n._valueTracker||(n._valueTracker=Qe(n))}function pt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ne(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,r){var l=r.checked;return ae({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function bn(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Te(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dt(n,r){r=r.checked,r!=null&&b(n,"checked",r,!1)}function ut(n,r){dt(n,r);var l=Te(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?At(n,r.type,l):r.hasOwnProperty("defaultValue")&&At(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function je(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function At(n,r,l){(r!=="number"||Nt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Xe=Array.isArray;function I(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function R(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Xe(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Te(l)}}function pe(n,r){var l=Te(r.value),f=Te(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function _e(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function lt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ze.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Se[r]=Se[n]})});function $e(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Se.hasOwnProperty(n)&&Se[n]?(""+r).trim():r+"px"}function Je(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=$e(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var Be=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(n,r){if(r){if(Be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function it(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,le=null,he=null;function be(n){if(n=wa(n)){if(typeof Ae!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Fl(r),Ae(n.stateNode,n.type,r))}}function Pe(n){le?he?he.push(n):he=[n]:le=n}function rt(){if(le){var n=le,r=he;if(he=le=null,be(n),r)for(n=0;n<r.length;n++)be(r[n])}}function Ot(n,r){return n(r)}function on(){}var xt=!1;function On(n,r,l){if(xt)return n(r,l);xt=!0;try{return Ot(n,r,l)}finally{xt=!1,(le!==null||he!==null)&&(on(),rt())}}function Dn(n,r){var l=n.stateNode;if(l===null)return null;var f=Fl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Qs=!1;if(c)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Qs=!1}function Zi(n,r,l,f,m,v,T,F,V){var J=Array.prototype.slice.call(arguments,3);try{r.apply(l,J)}catch(ge){this.onError(ge)}}var Qi=!1,ds=null,hs=!1,Ar=null,ml={onError:function(n){Qi=!0,ds=n}};function Js(n,r,l,f,m,v,T,F,V){Qi=!1,ds=null,Zi.apply(ml,arguments)}function _l(n,r,l,f,m,v,T,F,V){if(Js.apply(this,arguments),Qi){if(Qi){var J=ds;Qi=!1,ds=null}else throw Error(t(198));hs||(hs=!0,Ar=J)}}function Bi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function gl(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function vl(n){if(Bi(n)!==n)throw Error(t(188))}function xc(n){var r=n.alternate;if(!r){if(r=Bi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var v=m.alternate;if(v===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===l)return vl(m),n;if(v===f)return vl(m),r;v=v.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=v;else{for(var T=!1,F=m.child;F;){if(F===l){T=!0,l=m,f=v;break}if(F===f){T=!0,f=m,l=v;break}F=F.sibling}if(!T){for(F=v.child;F;){if(F===l){T=!0,l=v,f=m;break}if(F===f){T=!0,f=v,l=m;break}F=F.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function xl(n){return n=xc(n),n!==null?yl(n):null}function yl(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=yl(n);if(r!==null)return r;n=n.sibling}return null}var P=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,te=e.unstable_shouldYield,ie=e.unstable_requestPaint,G=e.unstable_now,ye=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,et=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Ye=null,st=null;function St(n){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Ye,n,void 0,(n.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:qe,Bt=Math.log,vt=Math.LN2;function qe(n){return n>>>=0,n===0?32:31-(Bt(n)/vt|0)|0}var qt=64,mt=4194304;function _n(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wi(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var F=T&~m;F!==0?f=_n(F):(v&=T,v!==0&&(f=_n(v)))}else T=l&~m,T!==0?f=_n(T):v!==0&&(f=_n(v));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,v=r&-r,m>=v||m===16&&(v&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Mt(r),m=1<<l,f|=n[l],r&=~m;return f}function Ln(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ps(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Mt(v),F=1<<T,V=m[T];V===-1?((F&l)===0||(F&f)!==0)&&(m[T]=Ln(F,r)):V<=r&&(n.expiredLanes|=F),v&=~F}}function Pt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Un(){var n=qt;return qt<<=1,(qt&4194240)===0&&(qt=64),n}function yn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Zt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Mt(r),n[r]=l}function Sn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Mt(l),v=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~v}}function ms(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Mt(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var ht=0;function mp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var _p,yc,gp,vp,xp,Sc=!1,Sl=[],Cr=null,Rr=null,Pr=null,ua=new Map,ca=new Map,br=[],kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(n,r){switch(n){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ua.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(r.pointerId)}}function fa(n,r,l,f,m,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:v,targetContainers:[m]},r!==null&&(r=wa(r),r!==null&&yc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function zv(n,r,l,f,m){switch(r){case"focusin":return Cr=fa(Cr,n,r,l,f,m),!0;case"dragenter":return Rr=fa(Rr,n,r,l,f,m),!0;case"mouseover":return Pr=fa(Pr,n,r,l,f,m),!0;case"pointerover":var v=m.pointerId;return ua.set(v,fa(ua.get(v)||null,n,r,l,f,m)),!0;case"gotpointercapture":return v=m.pointerId,ca.set(v,fa(ca.get(v)||null,n,r,l,f,m)),!0}return!1}function Sp(n){var r=_s(n.target);if(r!==null){var l=Bi(r);if(l!==null){if(r=l.tag,r===13){if(r=gl(l),r!==null){n.blockedOn=r,xp(n.priority,function(){gp(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ml(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Ec(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);wt=f,l.target.dispatchEvent(f),wt=null}else return r=wa(l),r!==null&&yc(r),n.blockedOn=l,!1;r.shift()}return!0}function Mp(n,r,l){Ml(n)&&l.delete(r)}function Bv(){Sc=!1,Cr!==null&&Ml(Cr)&&(Cr=null),Rr!==null&&Ml(Rr)&&(Rr=null),Pr!==null&&Ml(Pr)&&(Pr=null),ua.forEach(Mp),ca.forEach(Mp)}function da(n,r){n.blockedOn===r&&(n.blockedOn=null,Sc||(Sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bv)))}function ha(n){function r(m){return da(m,n)}if(0<Sl.length){da(Sl[0],n);for(var l=1;l<Sl.length;l++){var f=Sl[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Cr!==null&&da(Cr,n),Rr!==null&&da(Rr,n),Pr!==null&&da(Pr,n),ua.forEach(r),ca.forEach(r),l=0;l<br.length;l++)f=br[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<br.length&&(l=br[0],l.blockedOn===null);)Sp(l),l.blockedOn===null&&br.shift()}var eo=w.ReactCurrentBatchConfig,El=!0;function Vv(n,r,l,f){var m=ht,v=eo.transition;eo.transition=null;try{ht=1,Mc(n,r,l,f)}finally{ht=m,eo.transition=v}}function Hv(n,r,l,f){var m=ht,v=eo.transition;eo.transition=null;try{ht=4,Mc(n,r,l,f)}finally{ht=m,eo.transition=v}}function Mc(n,r,l,f){if(El){var m=Ec(n,r,l,f);if(m===null)Bc(n,r,f,Tl,l),yp(n,f);else if(zv(m,n,r,l,f))f.stopPropagation();else if(yp(n,f),r&4&&-1<kv.indexOf(n)){for(;m!==null;){var v=wa(m);if(v!==null&&_p(v),v=Ec(n,r,l,f),v===null&&Bc(n,r,f,Tl,l),v===m)break;m=v}m!==null&&f.stopPropagation()}else Bc(n,r,f,null,l)}}var Tl=null;function Ec(n,r,l,f){if(Tl=null,n=X(f),n=_s(n),n!==null)if(r=Bi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=gl(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Tl=n,null}function Ep(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ye()){case Ce:return 1;case Ie:return 4;case Oe:case et:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Dr=null,Tc=null,wl=null;function Tp(){if(wl)return wl;var n,r=Tc,l=r.length,f,m="value"in Dr?Dr.value:Dr.textContent,v=m.length;for(n=0;n<l&&r[n]===m[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===m[v-f];f++);return wl=m.slice(n,1<f?1-f:void 0)}function Al(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Cl(){return!0}function wp(){return!1}function ei(n){function r(l,f,m,v,T){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(l=n[F],this[F]=l?l(v):v[F]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Cl:wp,this.isPropagationStopped=wp,this}return ae(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),r}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=ei(to),pa=ae({},to,{view:0,detail:0}),Gv=ei(pa),Ac,Cc,ma,Rl=ae({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ma&&(ma&&n.type==="mousemove"?(Ac=n.screenX-ma.screenX,Cc=n.screenY-ma.screenY):Cc=Ac=0,ma=n),Ac)},movementY:function(n){return"movementY"in n?n.movementY:Cc}}),Ap=ei(Rl),Wv=ae({},Rl,{dataTransfer:0}),Xv=ei(Wv),Yv=ae({},pa,{relatedTarget:0}),Rc=ei(Yv),jv=ae({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=ei(jv),$v=ae({},to,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Kv=ei($v),Zv=ae({},to,{data:0}),Cp=ei(Zv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ex[n])?!!r[n]:!1}function Pc(){return tx}var nx=ae({},pa,{key:function(n){if(n.key){var r=Qv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Al(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Jv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(n){return n.type==="keypress"?Al(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Al(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ix=ei(nx),rx=ae({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=ei(rx),sx=ae({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),ox=ei(sx),ax=ae({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=ei(ax),ux=ae({},Rl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=ei(ux),fx=[9,13,27,32],bc=c&&"CompositionEvent"in window,_a=null;c&&"documentMode"in document&&(_a=document.documentMode);var dx=c&&"TextEvent"in window&&!_a,Pp=c&&(!bc||_a&&8<_a&&11>=_a),bp=" ",Dp=!1;function Lp(n,r){switch(n){case"keyup":return fx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var no=!1;function hx(n,r){switch(n){case"compositionend":return Up(r);case"keypress":return r.which!==32?null:(Dp=!0,bp);case"textInput":return n=r.data,n===bp&&Dp?null:n;default:return null}}function px(n,r){if(no)return n==="compositionend"||!bc&&Lp(n,r)?(n=Tp(),wl=Tc=Dr=null,no=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pp&&r.locale!=="ko"?null:r.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!mx[n.type]:r==="textarea"}function Np(n,r,l,f){Pe(f),r=Ul(r,"onChange"),0<r.length&&(l=new wc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var ga=null,va=null;function _x(n){Jp(n,0)}function Pl(n){var r=ao(n);if(pt(r))return n}function gx(n,r){if(n==="change")return r}var Fp=!1;if(c){var Dc;if(c){var Lc="oninput"in document;if(!Lc){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Lc=typeof Op.oninput=="function"}Dc=Lc}else Dc=!1;Fp=Dc&&(!document.documentMode||9<document.documentMode)}function kp(){ga&&(ga.detachEvent("onpropertychange",zp),va=ga=null)}function zp(n){if(n.propertyName==="value"&&Pl(va)){var r=[];Np(r,va,n,X(n)),On(_x,r)}}function vx(n,r,l){n==="focusin"?(kp(),ga=r,va=l,ga.attachEvent("onpropertychange",zp)):n==="focusout"&&kp()}function xx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pl(va)}function yx(n,r){if(n==="click")return Pl(r)}function Sx(n,r){if(n==="input"||n==="change")return Pl(r)}function Mx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ai=typeof Object.is=="function"?Object.is:Mx;function xa(n,r){if(Ai(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!Ai(n[m],r[m]))return!1}return!0}function Bp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vp(n,r){var l=Bp(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Bp(l)}}function Hp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Hp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Gp(){for(var n=window,r=Nt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Nt(n.document)}return r}function Uc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Ex(n){var r=Gp(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Hp(l.ownerDocument.documentElement,l)){if(f!==null&&Uc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,v=Math.min(f.start,m);f=f.end===void 0?v:Math.min(f.end,m),!n.extend&&v>f&&(m=f,f=v,v=m),m=Vp(l,v);var T=Vp(l,f);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),v>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tx=c&&"documentMode"in document&&11>=document.documentMode,io=null,Ic=null,ya=null,Nc=!1;function Wp(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nc||io==null||io!==Nt(f)||(f=io,"selectionStart"in f&&Uc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ya&&xa(ya,f)||(ya=f,f=Ul(Ic,"onSelect"),0<f.length&&(r=new wc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=io)))}function bl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var ro={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Fc={},Xp={};c&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Dl(n){if(Fc[n])return Fc[n];if(!ro[n])return n;var r=ro[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Xp)return Fc[n]=r[l];return n}var Yp=Dl("animationend"),jp=Dl("animationiteration"),qp=Dl("animationstart"),$p=Dl("transitionend"),Kp=new Map,Zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,r){Kp.set(n,r),a(r,[n])}for(var Oc=0;Oc<Zp.length;Oc++){var kc=Zp[Oc],wx=kc.toLowerCase(),Ax=kc[0].toUpperCase()+kc.slice(1);Lr(wx,"on"+Ax)}Lr(Yp,"onAnimationEnd"),Lr(jp,"onAnimationIteration"),Lr(qp,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr($p,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Qp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,_l(f,r,void 0,n),n.currentTarget=null}function Jp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var v=void 0;if(r)for(var T=f.length-1;0<=T;T--){var F=f[T],V=F.instance,J=F.currentTarget;if(F=F.listener,V!==v&&m.isPropagationStopped())break e;Qp(m,F,J),v=V}else for(T=0;T<f.length;T++){if(F=f[T],V=F.instance,J=F.currentTarget,F=F.listener,V!==v&&m.isPropagationStopped())break e;Qp(m,F,J),v=V}}}if(hs)throw n=Ar,hs=!1,Ar=null,n}function kt(n,r){var l=r[Yc];l===void 0&&(l=r[Yc]=new Set);var f=n+"__bubble";l.has(f)||(em(r,n,2,!1),l.add(f))}function zc(n,r,l){var f=0;r&&(f|=4),em(l,n,f,r)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function Ma(n){if(!n[Ll]){n[Ll]=!0,i.forEach(function(l){l!=="selectionchange"&&(Cx.has(l)||zc(l,!1,n),zc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ll]||(r[Ll]=!0,zc("selectionchange",!1,r))}}function em(n,r,l,f){switch(Ep(r)){case 1:var m=Vv;break;case 4:m=Hv;break;default:m=Mc}l=m.bind(null,r,l,n),m=void 0,!Qs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function Bc(n,r,l,f,m){var v=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var F=f.stateNode.containerInfo;if(F===m||F.nodeType===8&&F.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;T=T.return}for(;F!==null;){if(T=_s(F),T===null)return;if(V=T.tag,V===5||V===6){f=v=T;continue e}F=F.parentNode}}f=f.return}On(function(){var J=v,ge=X(l),xe=[];e:{var me=Kp.get(n);if(me!==void 0){var Le=wc,Ve=n;switch(n){case"keypress":if(Al(l)===0)break e;case"keydown":case"keyup":Le=ix;break;case"focusin":Ve="focus",Le=Rc;break;case"focusout":Ve="blur",Le=Rc;break;case"beforeblur":case"afterblur":Le=Rc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=ox;break;case Yp:case jp:case qp:Le=qv;break;case $p:Le=lx;break;case"scroll":Le=Gv;break;case"wheel":Le=cx;break;case"copy":case"cut":case"paste":Le=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Rp}var He=(r&4)!==0,Qt=!He&&n==="scroll",q=He?me!==null?me+"Capture":null:me;He=[];for(var W=J,K;W!==null;){K=W;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,q!==null&&(Ee=Dn(W,q),Ee!=null&&He.push(Ea(W,Ee,K)))),Qt)break;W=W.return}0<He.length&&(me=new Le(me,Ve,null,l,ge),xe.push({event:me,listeners:He}))}}if((r&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",me&&l!==wt&&(Ve=l.relatedTarget||l.fromElement)&&(_s(Ve)||Ve[Ji]))break e;if((Le||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(Ve=l.relatedTarget||l.toElement,Le=J,Ve=Ve?_s(Ve):null,Ve!==null&&(Qt=Bi(Ve),Ve!==Qt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Le=null,Ve=J),Le!==Ve)){if(He=Ap,Ee="onMouseLeave",q="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(He=Rp,Ee="onPointerLeave",q="onPointerEnter",W="pointer"),Qt=Le==null?me:ao(Le),K=Ve==null?me:ao(Ve),me=new He(Ee,W+"leave",Le,l,ge),me.target=Qt,me.relatedTarget=K,Ee=null,_s(ge)===J&&(He=new He(q,W+"enter",Ve,l,ge),He.target=K,He.relatedTarget=Qt,Ee=He),Qt=Ee,Le&&Ve)t:{for(He=Le,q=Ve,W=0,K=He;K;K=so(K))W++;for(K=0,Ee=q;Ee;Ee=so(Ee))K++;for(;0<W-K;)He=so(He),W--;for(;0<K-W;)q=so(q),K--;for(;W--;){if(He===q||q!==null&&He===q.alternate)break t;He=so(He),q=so(q)}He=null}else He=null;Le!==null&&tm(xe,me,Le,He,!1),Ve!==null&&Qt!==null&&tm(xe,Qt,Ve,He,!0)}}e:{if(me=J?ao(J):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var We=gx;else if(Ip(me))if(Fp)We=Sx;else{We=xx;var Ke=vx}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=yx);if(We&&(We=We(n,J))){Np(xe,We,l,ge);break e}Ke&&Ke(n,me,J),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&At(me,"number",me.value)}switch(Ke=J?ao(J):window,n){case"focusin":(Ip(Ke)||Ke.contentEditable==="true")&&(io=Ke,Ic=J,ya=null);break;case"focusout":ya=Ic=io=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Wp(xe,l,ge);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":Wp(xe,l,ge)}var Ze;if(bc)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else no?Lp(n,l)&&(nt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(nt="onCompositionStart");nt&&(Pp&&l.locale!=="ko"&&(no||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&no&&(Ze=Tp()):(Dr=ge,Tc="value"in Dr?Dr.value:Dr.textContent,no=!0)),Ke=Ul(J,nt),0<Ke.length&&(nt=new Cp(nt,n,null,l,ge),xe.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Up(l),Ze!==null&&(nt.data=Ze)))),(Ze=dx?hx(n,l):px(n,l))&&(J=Ul(J,"onBeforeInput"),0<J.length&&(ge=new Cp("onBeforeInput","beforeinput",null,l,ge),xe.push({event:ge,listeners:J}),ge.data=Ze))}Jp(xe,r)})}function Ea(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Ul(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,v=m.stateNode;m.tag===5&&v!==null&&(m=v,v=Dn(n,l),v!=null&&f.unshift(Ea(n,v,m)),v=Dn(n,r),v!=null&&f.push(Ea(n,v,m))),n=n.return}return f}function so(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function tm(n,r,l,f,m){for(var v=r._reactName,T=[];l!==null&&l!==f;){var F=l,V=F.alternate,J=F.stateNode;if(V!==null&&V===f)break;F.tag===5&&J!==null&&(F=J,m?(V=Dn(l,v),V!=null&&T.unshift(Ea(l,V,F))):m||(V=Dn(l,v),V!=null&&T.push(Ea(l,V,F)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var Rx=/\r\n?/g,Px=/\u0000|\uFFFD/g;function nm(n){return(typeof n=="string"?n:""+n).replace(Rx,`
`).replace(Px,"")}function Il(n,r,l){if(r=nm(r),nm(n)!==r&&l)throw Error(t(425))}function Nl(){}var Vc=null,Hc=null;function Gc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(n){return im.resolve(null).then(n).catch(Lx)}:Wc;function Lx(n){setTimeout(function(){throw n})}function Xc(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),ha(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);ha(r)}function Ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function rm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var oo=Math.random().toString(36).slice(2),Vi="__reactFiber$"+oo,Ta="__reactProps$"+oo,Ji="__reactContainer$"+oo,Yc="__reactEvents$"+oo,Ux="__reactListeners$"+oo,Ix="__reactHandles$"+oo;function _s(n){var r=n[Vi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Ji]||l[Vi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=rm(n);n!==null;){if(l=n[Vi])return l;n=rm(n)}return r}n=l,l=n.parentNode}return null}function wa(n){return n=n[Vi]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ao(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fl(n){return n[Ta]||null}var jc=[],lo=-1;function Ir(n){return{current:n}}function zt(n){0>lo||(n.current=jc[lo],jc[lo]=null,lo--)}function Ft(n,r){lo++,jc[lo]=n.current,n.current=r}var Nr={},Mn=Ir(Nr),kn=Ir(!1),gs=Nr;function uo(n,r){var l=n.type.contextTypes;if(!l)return Nr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},v;for(v in l)m[v]=r[v];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function zn(n){return n=n.childContextTypes,n!=null}function Ol(){zt(kn),zt(Mn)}function sm(n,r,l){if(Mn.current!==Nr)throw Error(t(168));Ft(Mn,r),Ft(kn,l)}function om(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,ve(n)||"Unknown",m));return ae({},l,f)}function kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Nr,gs=Mn.current,Ft(Mn,n),Ft(kn,kn.current),!0}function am(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=om(n,r,gs),f.__reactInternalMemoizedMergedChildContext=n,zt(kn),zt(Mn),Ft(Mn,n)):zt(kn),Ft(kn,l)}var er=null,zl=!1,qc=!1;function lm(n){er===null?er=[n]:er.push(n)}function Nx(n){zl=!0,lm(n)}function Fr(){if(!qc&&er!==null){qc=!0;var n=0,r=ht;try{var l=er;for(ht=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}er=null,zl=!1}catch(m){throw er!==null&&(er=er.slice(n+1)),P(Ce,Fr),m}finally{ht=r,qc=!1}}return null}var co=[],fo=0,Bl=null,Vl=0,hi=[],pi=0,vs=null,tr=1,nr="";function xs(n,r){co[fo++]=Vl,co[fo++]=Bl,Bl=n,Vl=r}function um(n,r,l){hi[pi++]=tr,hi[pi++]=nr,hi[pi++]=vs,vs=n;var f=tr;n=nr;var m=32-Mt(f)-1;f&=~(1<<m),l+=1;var v=32-Mt(r)+m;if(30<v){var T=m-m%5;v=(f&(1<<T)-1).toString(32),f>>=T,m-=T,tr=1<<32-Mt(r)+m|l<<m|f,nr=v+n}else tr=1<<v|l<<m|f,nr=n}function $c(n){n.return!==null&&(xs(n,1),um(n,1,0))}function Kc(n){for(;n===Bl;)Bl=co[--fo],co[fo]=null,Vl=co[--fo],co[fo]=null;for(;n===vs;)vs=hi[--pi],hi[pi]=null,nr=hi[--pi],hi[pi]=null,tr=hi[--pi],hi[pi]=null}var ti=null,ni=null,Vt=!1,Ci=null;function cm(n,r){var l=vi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function fm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ti=n,ni=Ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ti=n,ni=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=vs!==null?{id:tr,overflow:nr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=vi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ti=n,ni=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(Vt){var r=ni;if(r){var l=r;if(!fm(n,r)){if(Zc(n))throw Error(t(418));r=Ur(l.nextSibling);var f=ti;r&&fm(n,r)?cm(f,l):(n.flags=n.flags&-4097|2,Vt=!1,ti=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,ti=n}}}function dm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ti=n}function Hl(n){if(n!==ti)return!1;if(!Vt)return dm(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Gc(n.type,n.memoizedProps)),r&&(r=ni)){if(Zc(n))throw hm(),Error(t(418));for(;r;)cm(n,r),r=Ur(r.nextSibling)}if(dm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ni=Ur(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ni=null}}else ni=ti?Ur(n.stateNode.nextSibling):null;return!0}function hm(){for(var n=ni;n;)n=Ur(n.nextSibling)}function ho(){ni=ti=null,Vt=!1}function Jc(n){Ci===null?Ci=[n]:Ci.push(n)}var Fx=w.ReactCurrentBatchConfig;function Aa(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var F=m.refs;T===null?delete F[v]:F[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Gl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function pm(n){var r=n._init;return r(n._payload)}function mm(n){function r(q,W){if(n){var K=q.deletions;K===null?(q.deletions=[W],q.flags|=16):K.push(W)}}function l(q,W){if(!n)return null;for(;W!==null;)r(q,W),W=W.sibling;return null}function f(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function m(q,W){return q=Wr(q,W),q.index=0,q.sibling=null,q}function v(q,W,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<W?(q.flags|=2,W):K):(q.flags|=2,W)):(q.flags|=1048576,W)}function T(q){return n&&q.alternate===null&&(q.flags|=2),q}function F(q,W,K,Ee){return W===null||W.tag!==6?(W=Xf(K,q.mode,Ee),W.return=q,W):(W=m(W,K),W.return=q,W)}function V(q,W,K,Ee){var We=K.type;return We===L?ge(q,W,K.props.children,Ee,K.key):W!==null&&(W.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ne&&pm(We)===W.type)?(Ee=m(W,K.props),Ee.ref=Aa(q,W,K),Ee.return=q,Ee):(Ee=hu(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=Aa(q,W,K),Ee.return=q,Ee)}function J(q,W,K,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==K.containerInfo||W.stateNode.implementation!==K.implementation?(W=Yf(K,q.mode,Ee),W.return=q,W):(W=m(W,K.children||[]),W.return=q,W)}function ge(q,W,K,Ee,We){return W===null||W.tag!==7?(W=Cs(K,q.mode,Ee,We),W.return=q,W):(W=m(W,K),W.return=q,W)}function xe(q,W,K){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Xf(""+W,q.mode,K),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return K=hu(W.type,W.key,W.props,null,q.mode,K),K.ref=Aa(q,null,W),K.return=q,K;case N:return W=Yf(W,q.mode,K),W.return=q,W;case ne:var Ee=W._init;return xe(q,Ee(W._payload),K)}if(Xe(W)||ce(W))return W=Cs(W,q.mode,K,null),W.return=q,W;Gl(q,W)}return null}function me(q,W,K,Ee){var We=W!==null?W.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:F(q,W,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case U:return K.key===We?V(q,W,K,Ee):null;case N:return K.key===We?J(q,W,K,Ee):null;case ne:return We=K._init,me(q,W,We(K._payload),Ee)}if(Xe(K)||ce(K))return We!==null?null:ge(q,W,K,Ee,null);Gl(q,K)}return null}function Le(q,W,K,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(K)||null,F(W,q,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return q=q.get(Ee.key===null?K:Ee.key)||null,V(W,q,Ee,We);case N:return q=q.get(Ee.key===null?K:Ee.key)||null,J(W,q,Ee,We);case ne:var Ke=Ee._init;return Le(q,W,K,Ke(Ee._payload),We)}if(Xe(Ee)||ce(Ee))return q=q.get(K)||null,ge(W,q,Ee,We,null);Gl(W,Ee)}return null}function Ve(q,W,K,Ee){for(var We=null,Ke=null,Ze=W,nt=W=0,hn=null;Ze!==null&&nt<K.length;nt++){Ze.index>nt?(hn=Ze,Ze=null):hn=Ze.sibling;var Et=me(q,Ze,K[nt],Ee);if(Et===null){Ze===null&&(Ze=hn);break}n&&Ze&&Et.alternate===null&&r(q,Ze),W=v(Et,W,nt),Ke===null?We=Et:Ke.sibling=Et,Ke=Et,Ze=hn}if(nt===K.length)return l(q,Ze),Vt&&xs(q,nt),We;if(Ze===null){for(;nt<K.length;nt++)Ze=xe(q,K[nt],Ee),Ze!==null&&(W=v(Ze,W,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return Vt&&xs(q,nt),We}for(Ze=f(q,Ze);nt<K.length;nt++)hn=Le(Ze,q,nt,K[nt],Ee),hn!==null&&(n&&hn.alternate!==null&&Ze.delete(hn.key===null?nt:hn.key),W=v(hn,W,nt),Ke===null?We=hn:Ke.sibling=hn,Ke=hn);return n&&Ze.forEach(function(Xr){return r(q,Xr)}),Vt&&xs(q,nt),We}function He(q,W,K,Ee){var We=ce(K);if(typeof We!="function")throw Error(t(150));if(K=We.call(K),K==null)throw Error(t(151));for(var Ke=We=null,Ze=W,nt=W=0,hn=null,Et=K.next();Ze!==null&&!Et.done;nt++,Et=K.next()){Ze.index>nt?(hn=Ze,Ze=null):hn=Ze.sibling;var Xr=me(q,Ze,Et.value,Ee);if(Xr===null){Ze===null&&(Ze=hn);break}n&&Ze&&Xr.alternate===null&&r(q,Ze),W=v(Xr,W,nt),Ke===null?We=Xr:Ke.sibling=Xr,Ke=Xr,Ze=hn}if(Et.done)return l(q,Ze),Vt&&xs(q,nt),We;if(Ze===null){for(;!Et.done;nt++,Et=K.next())Et=xe(q,Et.value,Ee),Et!==null&&(W=v(Et,W,nt),Ke===null?We=Et:Ke.sibling=Et,Ke=Et);return Vt&&xs(q,nt),We}for(Ze=f(q,Ze);!Et.done;nt++,Et=K.next())Et=Le(Ze,q,nt,Et.value,Ee),Et!==null&&(n&&Et.alternate!==null&&Ze.delete(Et.key===null?nt:Et.key),W=v(Et,W,nt),Ke===null?We=Et:Ke.sibling=Et,Ke=Et);return n&&Ze.forEach(function(my){return r(q,my)}),Vt&&xs(q,nt),We}function Qt(q,W,K,Ee){if(typeof K=="object"&&K!==null&&K.type===L&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case U:e:{for(var We=K.key,Ke=W;Ke!==null;){if(Ke.key===We){if(We=K.type,We===L){if(Ke.tag===7){l(q,Ke.sibling),W=m(Ke,K.props.children),W.return=q,q=W;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ne&&pm(We)===Ke.type){l(q,Ke.sibling),W=m(Ke,K.props),W.ref=Aa(q,Ke,K),W.return=q,q=W;break e}l(q,Ke);break}else r(q,Ke);Ke=Ke.sibling}K.type===L?(W=Cs(K.props.children,q.mode,Ee,K.key),W.return=q,q=W):(Ee=hu(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=Aa(q,W,K),Ee.return=q,q=Ee)}return T(q);case N:e:{for(Ke=K.key;W!==null;){if(W.key===Ke)if(W.tag===4&&W.stateNode.containerInfo===K.containerInfo&&W.stateNode.implementation===K.implementation){l(q,W.sibling),W=m(W,K.children||[]),W.return=q,q=W;break e}else{l(q,W);break}else r(q,W);W=W.sibling}W=Yf(K,q.mode,Ee),W.return=q,q=W}return T(q);case ne:return Ke=K._init,Qt(q,W,Ke(K._payload),Ee)}if(Xe(K))return Ve(q,W,K,Ee);if(ce(K))return He(q,W,K,Ee);Gl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,W!==null&&W.tag===6?(l(q,W.sibling),W=m(W,K),W.return=q,q=W):(l(q,W),W=Xf(K,q.mode,Ee),W.return=q,q=W),T(q)):l(q,W)}return Qt}var po=mm(!0),_m=mm(!1),Wl=Ir(null),Xl=null,mo=null,ef=null;function tf(){ef=mo=Xl=null}function nf(n){var r=Wl.current;zt(Wl),n._currentValue=r}function rf(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function _o(n,r){Xl=n,ef=mo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function mi(n){var r=n._currentValue;if(ef!==n)if(n={context:n,memoizedValue:r,next:null},mo===null){if(Xl===null)throw Error(t(308));mo=n,Xl.dependencies={lanes:0,firstContext:n}}else mo=mo.next=n;return r}var ys=null;function sf(n){ys===null?ys=[n]:ys.push(n)}function gm(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,sf(r)):(l.next=m.next,m.next=l),r.interleaved=l,ir(n,f)}function ir(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Or=!1;function of(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function rr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function kr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(yt&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,ir(n,l)}return m=f.interleaved,m===null?(r.next=r,sf(f)):(r.next=m.next,m.next=r),f.interleaved=r,ir(n,l)}function Yl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,ms(n,l)}}function xm(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?m=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?m=v=r:v=v.next=r}else m=v=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function jl(n,r,l,f){var m=n.updateQueue;Or=!1;var v=m.firstBaseUpdate,T=m.lastBaseUpdate,F=m.shared.pending;if(F!==null){m.shared.pending=null;var V=F,J=V.next;V.next=null,T===null?v=J:T.next=J,T=V;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,F=ge.lastBaseUpdate,F!==T&&(F===null?ge.firstBaseUpdate=J:F.next=J,ge.lastBaseUpdate=V))}if(v!==null){var xe=m.baseState;T=0,ge=J=V=null,F=v;do{var me=F.lane,Le=F.eventTime;if((f&me)===me){ge!==null&&(ge=ge.next={eventTime:Le,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ve=n,He=F;switch(me=r,Le=l,He.tag){case 1:if(Ve=He.payload,typeof Ve=="function"){xe=Ve.call(Le,xe,me);break e}xe=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=He.payload,me=typeof Ve=="function"?Ve.call(Le,xe,me):Ve,me==null)break e;xe=ae({},xe,me);break e;case 2:Or=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,me=m.effects,me===null?m.effects=[F]:me.push(F))}else Le={eventTime:Le,lane:me,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ge===null?(J=ge=Le,V=xe):ge=ge.next=Le,T|=me;if(F=F.next,F===null){if(F=m.shared.pending,F===null)break;me=F,F=me.next,me.next=null,m.lastBaseUpdate=me,m.shared.pending=null}}while(!0);if(ge===null&&(V=xe),m.baseState=V,m.firstBaseUpdate=J,m.lastBaseUpdate=ge,r=m.shared.interleaved,r!==null){m=r;do T|=m.lane,m=m.next;while(m!==r)}else v===null&&(m.shared.lanes=0);Es|=T,n.lanes=T,n.memoizedState=xe}}function ym(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Ca={},Hi=Ir(Ca),Ra=Ir(Ca),Pa=Ir(Ca);function Ss(n){if(n===Ca)throw Error(t(174));return n}function af(n,r){switch(Ft(Pa,r),Ft(Ra,n),Ft(Hi,Ca),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ge(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ge(r,n)}zt(Hi),Ft(Hi,r)}function go(){zt(Hi),zt(Ra),zt(Pa)}function Sm(n){Ss(Pa.current);var r=Ss(Hi.current),l=Ge(r,n.type);r!==l&&(Ft(Ra,n),Ft(Hi,l))}function lf(n){Ra.current===n&&(zt(Hi),zt(Ra))}var Gt=Ir(0);function ql(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var uf=[];function cf(){for(var n=0;n<uf.length;n++)uf[n]._workInProgressVersionPrimary=null;uf.length=0}var $l=w.ReactCurrentDispatcher,ff=w.ReactCurrentBatchConfig,Ms=0,Wt=null,an=null,fn=null,Kl=!1,ba=!1,Da=0,Ox=0;function En(){throw Error(t(321))}function df(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ai(n[l],r[l]))return!1;return!0}function hf(n,r,l,f,m,v){if(Ms=v,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$l.current=n===null||n.memoizedState===null?Vx:Hx,n=l(f,m),ba){v=0;do{if(ba=!1,Da=0,25<=v)throw Error(t(301));v+=1,fn=an=null,r.updateQueue=null,$l.current=Gx,n=l(f,m)}while(ba)}if($l.current=Jl,r=an!==null&&an.next!==null,Ms=0,fn=an=Wt=null,Kl=!1,r)throw Error(t(300));return n}function pf(){var n=Da!==0;return Da=0,n}function Gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Wt.memoizedState=fn=n:fn=fn.next=n,fn}function _i(){if(an===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var r=fn===null?Wt.memoizedState:fn.next;if(r!==null)fn=r,an=n;else{if(n===null)throw Error(t(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},fn===null?Wt.memoizedState=fn=n:fn=fn.next=n}return fn}function La(n,r){return typeof r=="function"?r(n):r}function mf(n){var r=_i(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=an,m=f.baseQueue,v=l.pending;if(v!==null){if(m!==null){var T=m.next;m.next=v.next,v.next=T}f.baseQueue=m=v,l.pending=null}if(m!==null){v=m.next,f=f.baseState;var F=T=null,V=null,J=v;do{var ge=J.lane;if((Ms&ge)===ge)V!==null&&(V=V.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),f=J.hasEagerState?J.eagerState:n(f,J.action);else{var xe={lane:ge,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};V===null?(F=V=xe,T=f):V=V.next=xe,Wt.lanes|=ge,Es|=ge}J=J.next}while(J!==null&&J!==v);V===null?T=f:V.next=F,Ai(f,r.memoizedState)||(Bn=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=V,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do v=m.lane,Wt.lanes|=v,Es|=v,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function _f(n){var r=_i(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,v=r.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do v=n(v,T.action),T=T.next;while(T!==m);Ai(v,r.memoizedState)||(Bn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,f]}function Mm(){}function Em(n,r){var l=Wt,f=_i(),m=r(),v=!Ai(f.memoizedState,m);if(v&&(f.memoizedState=m,Bn=!0),f=f.queue,gf(Am.bind(null,l,f,n),[n]),f.getSnapshot!==r||v||fn!==null&&fn.memoizedState.tag&1){if(l.flags|=2048,Ua(9,wm.bind(null,l,f,m,r),void 0,null),dn===null)throw Error(t(349));(Ms&30)!==0||Tm(l,r,m)}return m}function Tm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function wm(n,r,l,f){r.value=l,r.getSnapshot=f,Cm(r)&&Rm(n)}function Am(n,r,l){return l(function(){Cm(r)&&Rm(n)})}function Cm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ai(n,l)}catch{return!0}}function Rm(n){var r=ir(n,1);r!==null&&Di(r,n,1,-1)}function Pm(n){var r=Gi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:n},r.queue=n,n=n.dispatch=Bx.bind(null,Wt,n),[r.memoizedState,n]}function Ua(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function bm(){return _i().memoizedState}function Zl(n,r,l,f){var m=Gi();Wt.flags|=n,m.memoizedState=Ua(1|r,l,void 0,f===void 0?null:f)}function Ql(n,r,l,f){var m=_i();f=f===void 0?null:f;var v=void 0;if(an!==null){var T=an.memoizedState;if(v=T.destroy,f!==null&&df(f,T.deps)){m.memoizedState=Ua(r,l,v,f);return}}Wt.flags|=n,m.memoizedState=Ua(1|r,l,v,f)}function Dm(n,r){return Zl(8390656,8,n,r)}function gf(n,r){return Ql(2048,8,n,r)}function Lm(n,r){return Ql(4,2,n,r)}function Um(n,r){return Ql(4,4,n,r)}function Im(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Nm(n,r,l){return l=l!=null?l.concat([n]):null,Ql(4,4,Im.bind(null,r,n),l)}function vf(){}function Fm(n,r){var l=_i();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&df(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function Om(n,r){var l=_i();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&df(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function km(n,r,l){return(Ms&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(Ai(l,r)||(l=Un(),Wt.lanes|=l,Es|=l,n.baseState=!0),r)}function kx(n,r){var l=ht;ht=l!==0&&4>l?l:4,n(!0);var f=ff.transition;ff.transition={};try{n(!1),r()}finally{ht=l,ff.transition=f}}function zm(){return _i().memoizedState}function zx(n,r,l){var f=Hr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Bm(n))Vm(r,l);else if(l=gm(n,r,l,f),l!==null){var m=Nn();Di(l,n,f,m),Hm(l,r,f)}}function Bx(n,r,l){var f=Hr(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Bm(n))Vm(r,m);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,F=v(T,l);if(m.hasEagerState=!0,m.eagerState=F,Ai(F,T)){var V=r.interleaved;V===null?(m.next=m,sf(r)):(m.next=V.next,V.next=m),r.interleaved=m;return}}catch{}finally{}l=gm(n,r,m,f),l!==null&&(m=Nn(),Di(l,n,f,m),Hm(l,r,f))}}function Bm(n){var r=n.alternate;return n===Wt||r!==null&&r===Wt}function Vm(n,r){ba=Kl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Hm(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,ms(n,l)}}var Jl={readContext:mi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},Vx={readContext:mi,useCallback:function(n,r){return Gi().memoizedState=[n,r===void 0?null:r],n},useContext:mi,useEffect:Dm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Zl(4194308,4,Im.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Zl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Zl(4,2,n,r)},useMemo:function(n,r){var l=Gi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Gi();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=zx.bind(null,Wt,n),[f.memoizedState,n]},useRef:function(n){var r=Gi();return n={current:n},r.memoizedState=n},useState:Pm,useDebugValue:vf,useDeferredValue:function(n){return Gi().memoizedState=n},useTransition:function(){var n=Pm(!1),r=n[0];return n=kx.bind(null,n[1]),Gi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Wt,m=Gi();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),dn===null)throw Error(t(349));(Ms&30)!==0||Tm(f,r,l)}m.memoizedState=l;var v={value:l,getSnapshot:r};return m.queue=v,Dm(Am.bind(null,f,v,n),[n]),f.flags|=2048,Ua(9,wm.bind(null,f,v,l,r),void 0,null),l},useId:function(){var n=Gi(),r=dn.identifierPrefix;if(Vt){var l=nr,f=tr;l=(f&~(1<<32-Mt(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Da++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Ox++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Hx={readContext:mi,useCallback:Fm,useContext:mi,useEffect:gf,useImperativeHandle:Nm,useInsertionEffect:Lm,useLayoutEffect:Um,useMemo:Om,useReducer:mf,useRef:bm,useState:function(){return mf(La)},useDebugValue:vf,useDeferredValue:function(n){var r=_i();return km(r,an.memoizedState,n)},useTransition:function(){var n=mf(La)[0],r=_i().memoizedState;return[n,r]},useMutableSource:Mm,useSyncExternalStore:Em,useId:zm,unstable_isNewReconciler:!1},Gx={readContext:mi,useCallback:Fm,useContext:mi,useEffect:gf,useImperativeHandle:Nm,useInsertionEffect:Lm,useLayoutEffect:Um,useMemo:Om,useReducer:_f,useRef:bm,useState:function(){return _f(La)},useDebugValue:vf,useDeferredValue:function(n){var r=_i();return an===null?r.memoizedState=n:km(r,an.memoizedState,n)},useTransition:function(){var n=_f(La)[0],r=_i().memoizedState;return[n,r]},useMutableSource:Mm,useSyncExternalStore:Em,useId:zm,unstable_isNewReconciler:!1};function Ri(n,r){if(n&&n.defaultProps){r=ae({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function xf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:ae({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var eu={isMounted:function(n){return(n=n._reactInternals)?Bi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Nn(),m=Hr(n),v=rr(f,m);v.payload=r,l!=null&&(v.callback=l),r=kr(n,v,m),r!==null&&(Di(r,n,m,f),Yl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Nn(),m=Hr(n),v=rr(f,m);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=kr(n,v,m),r!==null&&(Di(r,n,m,f),Yl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Nn(),f=Hr(n),m=rr(l,f);m.tag=2,r!=null&&(m.callback=r),r=kr(n,m,f),r!==null&&(Di(r,n,f,l),Yl(r,n,f))}};function Gm(n,r,l,f,m,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,v,T):r.prototype&&r.prototype.isPureReactComponent?!xa(l,f)||!xa(m,v):!0}function Wm(n,r,l){var f=!1,m=Nr,v=r.contextType;return typeof v=="object"&&v!==null?v=mi(v):(m=zn(r)?gs:Mn.current,f=r.contextTypes,v=(f=f!=null)?uo(n,m):Nr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=eu,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=v),r}function Xm(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&eu.enqueueReplaceState(r,r.state,null)}function yf(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},of(n);var v=r.contextType;typeof v=="object"&&v!==null?m.context=mi(v):(v=zn(r)?gs:Mn.current,m.context=uo(n,v)),m.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(xf(n,r,v,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&eu.enqueueReplaceState(m,m.state,null),jl(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function vo(n,r){try{var l="",f=r;do l+=fe(f),f=f.return;while(f);var m=l}catch(v){m=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:m,digest:null}}function Sf(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Mf(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function Ym(n,r,l){l=rr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){au||(au=!0,Of=f),Mf(n,r)},l}function jm(n,r,l){l=rr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Mf(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Mf(n,r),typeof f!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function qm(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new Wx;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=ry.bind(null,n,r,l),r.then(n,n))}function $m(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Km(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=rr(-1,1),r.tag=2,kr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var Xx=w.ReactCurrentOwner,Bn=!1;function In(n,r,l,f){r.child=n===null?_m(r,null,l,f):po(r,n.child,l,f)}function Zm(n,r,l,f,m){l=l.render;var v=r.ref;return _o(r,m),f=hf(n,r,l,f,v,m),l=pf(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,sr(n,r,m)):(Vt&&l&&$c(r),r.flags|=1,In(n,r,f,m),r.child)}function Qm(n,r,l,f,m){if(n===null){var v=l.type;return typeof v=="function"&&!Wf(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Jm(n,r,v,f,m)):(n=hu(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&m)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:xa,l(T,f)&&n.ref===r.ref)return sr(n,r,m)}return r.flags|=1,n=Wr(v,f),n.ref=r.ref,n.return=r,r.child=n}function Jm(n,r,l,f,m){if(n!==null){var v=n.memoizedProps;if(xa(v,f)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=f=v,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,sr(n,r,m)}return Ef(n,r,l,f,m)}function e_(n,r,l){var f=r.pendingProps,m=f.children,v=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(yo,ii),ii|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ft(yo,ii),ii|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:l,Ft(yo,ii),ii|=f}else v!==null?(f=v.baseLanes|l,r.memoizedState=null):f=l,Ft(yo,ii),ii|=f;return In(n,r,m,l),r.child}function t_(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Ef(n,r,l,f,m){var v=zn(l)?gs:Mn.current;return v=uo(r,v),_o(r,m),l=hf(n,r,l,f,v,m),f=pf(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,sr(n,r,m)):(Vt&&f&&$c(r),r.flags|=1,In(n,r,l,m),r.child)}function n_(n,r,l,f,m){if(zn(l)){var v=!0;kl(r)}else v=!1;if(_o(r,m),r.stateNode===null)nu(n,r),Wm(r,l,f),yf(r,l,f,m),f=!0;else if(n===null){var T=r.stateNode,F=r.memoizedProps;T.props=F;var V=T.context,J=l.contextType;typeof J=="object"&&J!==null?J=mi(J):(J=zn(l)?gs:Mn.current,J=uo(r,J));var ge=l.getDerivedStateFromProps,xe=typeof ge=="function"||typeof T.getSnapshotBeforeUpdate=="function";xe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==f||V!==J)&&Xm(r,T,f,J),Or=!1;var me=r.memoizedState;T.state=me,jl(r,f,T,m),V=r.memoizedState,F!==f||me!==V||kn.current||Or?(typeof ge=="function"&&(xf(r,l,ge,f),V=r.memoizedState),(F=Or||Gm(r,l,F,f,me,V,J))?(xe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=V),T.props=f,T.state=V,T.context=J,f=F):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,vm(n,r),F=r.memoizedProps,J=r.type===r.elementType?F:Ri(r.type,F),T.props=J,xe=r.pendingProps,me=T.context,V=l.contextType,typeof V=="object"&&V!==null?V=mi(V):(V=zn(l)?gs:Mn.current,V=uo(r,V));var Le=l.getDerivedStateFromProps;(ge=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==xe||me!==V)&&Xm(r,T,f,V),Or=!1,me=r.memoizedState,T.state=me,jl(r,f,T,m);var Ve=r.memoizedState;F!==xe||me!==Ve||kn.current||Or?(typeof Le=="function"&&(xf(r,l,Le,f),Ve=r.memoizedState),(J=Or||Gm(r,l,J,f,me,Ve,V)||!1)?(ge||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,Ve,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,Ve,V)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Ve),T.props=f,T.state=Ve,T.context=V,f=J):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),f=!1)}return Tf(n,r,l,f,v,m)}function Tf(n,r,l,f,m,v){t_(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return m&&am(r,l,!1),sr(n,r,v);f=r.stateNode,Xx.current=r;var F=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=po(r,n.child,null,v),r.child=po(r,null,F,v)):In(n,r,F,v),r.memoizedState=f.state,m&&am(r,l,!0),r.child}function i_(n){var r=n.stateNode;r.pendingContext?sm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&sm(n,r.context,!1),af(n,r.containerInfo)}function r_(n,r,l,f,m){return ho(),Jc(m),r.flags|=256,In(n,r,l,f),r.child}var wf={dehydrated:null,treeContext:null,retryLane:0};function Af(n){return{baseLanes:n,cachePool:null,transitions:null}}function s_(n,r,l){var f=r.pendingProps,m=Gt.current,v=!1,T=(r.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(m&2)!==0),F?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Ft(Gt,m&1),n===null)return Qc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=f.children,n=f.fallback,v?(f=r.mode,v=r.child,T={mode:"hidden",children:T},(f&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=pu(T,f,0,null),n=Cs(n,f,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Af(l),r.memoizedState=wf,n):Cf(r,T));if(m=n.memoizedState,m!==null&&(F=m.dehydrated,F!==null))return Yx(n,r,T,f,F,m,l);if(v){v=f.fallback,T=r.mode,m=n.child,F=m.sibling;var V={mode:"hidden",children:f.children};return(T&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=V,r.deletions=null):(f=Wr(m,V),f.subtreeFlags=m.subtreeFlags&14680064),F!==null?v=Wr(F,v):(v=Cs(v,T,l,null),v.flags|=2),v.return=r,f.return=r,f.sibling=v,r.child=f,f=v,v=r.child,T=n.child.memoizedState,T=T===null?Af(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=wf,f}return v=n.child,n=v.sibling,f=Wr(v,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Cf(n,r){return r=pu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function tu(n,r,l,f){return f!==null&&Jc(f),po(r,n.child,null,l),n=Cf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Yx(n,r,l,f,m,v,T){if(l)return r.flags&256?(r.flags&=-257,f=Sf(Error(t(422))),tu(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=f.fallback,m=r.mode,f=pu({mode:"visible",children:f.children},m,0,null),v=Cs(v,m,T,null),v.flags|=2,f.return=r,v.return=r,f.sibling=v,r.child=f,(r.mode&1)!==0&&po(r,n.child,null,T),r.child.memoizedState=Af(T),r.memoizedState=wf,v);if((r.mode&1)===0)return tu(n,r,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var F=f.dgst;return f=F,v=Error(t(419)),f=Sf(v,f,void 0),tu(n,r,T,f)}if(F=(T&n.childLanes)!==0,Bn||F){if(f=dn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|T))!==0?0:m,m!==0&&m!==v.retryLane&&(v.retryLane=m,ir(n,m),Di(f,n,m,-1))}return Gf(),f=Sf(Error(t(421))),tu(n,r,T,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=sy.bind(null,n),m._reactRetry=r,null):(n=v.treeContext,ni=Ur(m.nextSibling),ti=r,Vt=!0,Ci=null,n!==null&&(hi[pi++]=tr,hi[pi++]=nr,hi[pi++]=vs,tr=n.id,nr=n.overflow,vs=r),r=Cf(r,f.children),r.flags|=4096,r)}function o_(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),rf(n.return,r,l)}function Rf(n,r,l,f,m){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=l,v.tailMode=m)}function a_(n,r,l){var f=r.pendingProps,m=f.revealOrder,v=f.tail;if(In(n,r,f.children,l),f=Gt.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&o_(n,l,r);else if(n.tag===19)o_(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Ft(Gt,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&ql(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Rf(r,!1,m,l,v);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&ql(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Rf(r,!0,l,null,v);break;case"together":Rf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function nu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function sr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Es|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Wr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Wr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function jx(n,r,l){switch(r.tag){case 3:i_(r),ho();break;case 5:Sm(r);break;case 1:zn(r.type)&&kl(r);break;case 4:af(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Ft(Wl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Ft(Gt,Gt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?s_(n,r,l):(Ft(Gt,Gt.current&1),n=sr(n,r,l),n!==null?n.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return a_(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ft(Gt,Gt.current),f)break;return null;case 22:case 23:return r.lanes=0,e_(n,r,l)}return sr(n,r,l)}var l_,Pf,u_,c_;l_=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Pf=function(){},u_=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,Ss(Hi.current);var v=null;switch(l){case"input":m=H(n,m),f=H(n,f),v=[];break;case"select":m=ae({},m,{value:void 0}),f=ae({},f,{value:void 0}),v=[];break;case"textarea":m=R(n,m),f=R(n,f),v=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Nl)}ct(l,f);var T;l=null;for(J in m)if(!f.hasOwnProperty(J)&&m.hasOwnProperty(J)&&m[J]!=null)if(J==="style"){var F=m[J];for(T in F)F.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(s.hasOwnProperty(J)?v||(v=[]):(v=v||[]).push(J,null));for(J in f){var V=f[J];if(F=m!=null?m[J]:void 0,f.hasOwnProperty(J)&&V!==F&&(V!=null||F!=null))if(J==="style")if(F){for(T in F)!F.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in V)V.hasOwnProperty(T)&&F[T]!==V[T]&&(l||(l={}),l[T]=V[T])}else l||(v||(v=[]),v.push(J,l)),l=V;else J==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(v=v||[]).push(J,V)):J==="children"?typeof V!="string"&&typeof V!="number"||(v=v||[]).push(J,""+V):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(s.hasOwnProperty(J)?(V!=null&&J==="onScroll"&&kt("scroll",n),v||F===V||(v=[])):(v=v||[]).push(J,V))}l&&(v=v||[]).push("style",l);var J=v;(r.updateQueue=J)&&(r.flags|=4)}},c_=function(n,r,l,f){l!==f&&(r.flags|=4)};function Ia(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Tn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function qx(n,r,l){var f=r.pendingProps;switch(Kc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(r),null;case 1:return zn(r.type)&&Ol(),Tn(r),null;case 3:return f=r.stateNode,go(),zt(kn),zt(Mn),cf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(Hl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ci!==null&&(Bf(Ci),Ci=null))),Pf(n,r),Tn(r),null;case 5:lf(r);var m=Ss(Pa.current);if(l=r.type,n!==null&&r.stateNode!=null)u_(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Tn(r),null}if(n=Ss(Hi.current),Hl(r)){f=r.stateNode,l=r.type;var v=r.memoizedProps;switch(f[Vi]=r,f[Ta]=v,n=(r.mode&1)!==0,l){case"dialog":kt("cancel",f),kt("close",f);break;case"iframe":case"object":case"embed":kt("load",f);break;case"video":case"audio":for(m=0;m<Sa.length;m++)kt(Sa[m],f);break;case"source":kt("error",f);break;case"img":case"image":case"link":kt("error",f),kt("load",f);break;case"details":kt("toggle",f);break;case"input":bn(f,v),kt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},kt("invalid",f);break;case"textarea":Z(f,v),kt("invalid",f)}ct(l,v),m=null;for(var T in v)if(v.hasOwnProperty(T)){var F=v[T];T==="children"?typeof F=="string"?f.textContent!==F&&(v.suppressHydrationWarning!==!0&&Il(f.textContent,F,n),m=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(v.suppressHydrationWarning!==!0&&Il(f.textContent,F,n),m=["children",""+F]):s.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&kt("scroll",f)}switch(l){case"input":Rt(f),je(f,v,!0);break;case"textarea":Rt(f),_e(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=Nl)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[Vi]=r,n[Ta]=f,l_(n,r,!1,!1),r.stateNode=n;e:{switch(T=it(l,f),l){case"dialog":kt("cancel",n),kt("close",n),m=f;break;case"iframe":case"object":case"embed":kt("load",n),m=f;break;case"video":case"audio":for(m=0;m<Sa.length;m++)kt(Sa[m],n);m=f;break;case"source":kt("error",n),m=f;break;case"img":case"image":case"link":kt("error",n),kt("load",n),m=f;break;case"details":kt("toggle",n),m=f;break;case"input":bn(n,f),m=H(n,f),kt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=ae({},f,{value:void 0}),kt("invalid",n);break;case"textarea":Z(n,f),m=R(n,f),kt("invalid",n);break;default:m=f}ct(l,m),F=m;for(v in F)if(F.hasOwnProperty(v)){var V=F[v];v==="style"?Je(n,V):v==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Fe(n,V)):v==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&lt(n,V):typeof V=="number"&&lt(n,""+V):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?V!=null&&v==="onScroll"&&kt("scroll",n):V!=null&&b(n,v,V,T))}switch(l){case"input":Rt(n),je(n,f,!1);break;case"textarea":Rt(n),_e(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Te(f.value));break;case"select":n.multiple=!!f.multiple,v=f.value,v!=null?I(n,!!f.multiple,v,!1):f.defaultValue!=null&&I(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Nl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Tn(r),null;case 6:if(n&&r.stateNode!=null)c_(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ss(Pa.current),Ss(Hi.current),Hl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Vi]=r,(v=f.nodeValue!==l)&&(n=ti,n!==null))switch(n.tag){case 3:Il(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Il(f.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Vi]=r,r.stateNode=f}return Tn(r),null;case 13:if(zt(Gt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&ni!==null&&(r.mode&1)!==0&&(r.flags&128)===0)hm(),ho(),r.flags|=98560,v=!1;else if(v=Hl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Vi]=r}else ho(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Tn(r),v=!1}else Ci!==null&&(Bf(Ci),Ci=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Gt.current&1)!==0?ln===0&&(ln=3):Gf())),r.updateQueue!==null&&(r.flags|=4),Tn(r),null);case 4:return go(),Pf(n,r),n===null&&Ma(r.stateNode.containerInfo),Tn(r),null;case 10:return nf(r.type._context),Tn(r),null;case 17:return zn(r.type)&&Ol(),Tn(r),null;case 19:if(zt(Gt),v=r.memoizedState,v===null)return Tn(r),null;if(f=(r.flags&128)!==0,T=v.rendering,T===null)if(f)Ia(v,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=ql(n),T!==null){for(r.flags|=128,Ia(v,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)v=l,n=f,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ft(Gt,Gt.current&1|2),r.child}n=n.sibling}v.tail!==null&&G()>So&&(r.flags|=128,f=!0,Ia(v,!1),r.lanes=4194304)}else{if(!f)if(n=ql(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Ia(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Vt)return Tn(r),null}else 2*G()-v.renderingStartTime>So&&l!==1073741824&&(r.flags|=128,f=!0,Ia(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=G(),r.sibling=null,l=Gt.current,Ft(Gt,f?l&1|2:l&1),r):(Tn(r),null);case 22:case 23:return Hf(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(ii&1073741824)!==0&&(Tn(r),r.subtreeFlags&6&&(r.flags|=8192)):Tn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function $x(n,r){switch(Kc(r),r.tag){case 1:return zn(r.type)&&Ol(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return go(),zt(kn),zt(Mn),cf(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return lf(r),null;case 13:if(zt(Gt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ho()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return zt(Gt),null;case 4:return go(),null;case 10:return nf(r.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var iu=!1,wn=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,ke=null;function xo(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){$t(n,r,f)}else l.current=null}function bf(n,r,l){try{l()}catch(f){$t(n,r,f)}}var f_=!1;function Zx(n,r){if(Vc=El,n=Gp(),Uc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,F=-1,V=-1,J=0,ge=0,xe=n,me=null;t:for(;;){for(var Le;xe!==l||m!==0&&xe.nodeType!==3||(F=T+m),xe!==v||f!==0&&xe.nodeType!==3||(V=T+f),xe.nodeType===3&&(T+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)me=xe,xe=Le;for(;;){if(xe===n)break t;if(me===l&&++J===m&&(F=T),me===v&&++ge===f&&(V=T),(Le=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Le}l=F===-1||V===-1?null:{start:F,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hc={focusedElem:n,selectionRange:l},El=!1,ke=r;ke!==null;)if(r=ke,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ke=n;else for(;ke!==null;){r=ke;try{var Ve=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var He=Ve.memoizedProps,Qt=Ve.memoizedState,q=r.stateNode,W=q.getSnapshotBeforeUpdate(r.elementType===r.type?He:Ri(r.type,He),Qt);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var K=r.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){$t(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,ke=n;break}ke=r.return}return Ve=f_,f_=!1,Ve}function Na(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var v=m.destroy;m.destroy=void 0,v!==void 0&&bf(r,l,v)}m=m.next}while(m!==f)}}function ru(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Df(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function d_(n){var r=n.alternate;r!==null&&(n.alternate=null,d_(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Vi],delete r[Ta],delete r[Yc],delete r[Ux],delete r[Ix])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function h_(n){return n.tag===5||n.tag===3||n.tag===4}function p_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||h_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Nl));else if(f!==4&&(n=n.child,n!==null))for(Lf(n,r,l),n=n.sibling;n!==null;)Lf(n,r,l),n=n.sibling}function Uf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Uf(n,r,l),n=n.sibling;n!==null;)Uf(n,r,l),n=n.sibling}var gn=null,Pi=!1;function zr(n,r,l){for(l=l.child;l!==null;)m_(n,r,l),l=l.sibling}function m_(n,r,l){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Ye,l)}catch{}switch(l.tag){case 5:wn||xo(l,r);case 6:var f=gn,m=Pi;gn=null,zr(n,r,l),gn=f,Pi=m,gn!==null&&(Pi?(n=gn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):gn.removeChild(l.stateNode));break;case 18:gn!==null&&(Pi?(n=gn,l=l.stateNode,n.nodeType===8?Xc(n.parentNode,l):n.nodeType===1&&Xc(n,l),ha(n)):Xc(gn,l.stateNode));break;case 4:f=gn,m=Pi,gn=l.stateNode.containerInfo,Pi=!0,zr(n,r,l),gn=f,Pi=m;break;case 0:case 11:case 14:case 15:if(!wn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var v=m,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&bf(l,r,T),m=m.next}while(m!==f)}zr(n,r,l);break;case 1:if(!wn&&(xo(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){$t(l,r,F)}zr(n,r,l);break;case 21:zr(n,r,l);break;case 22:l.mode&1?(wn=(f=wn)||l.memoizedState!==null,zr(n,r,l),wn=f):zr(n,r,l);break;default:zr(n,r,l)}}function __(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Kx),r.forEach(function(f){var m=oy.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function bi(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var v=n,T=r,F=T;e:for(;F!==null;){switch(F.tag){case 5:gn=F.stateNode,Pi=!1;break e;case 3:gn=F.stateNode.containerInfo,Pi=!0;break e;case 4:gn=F.stateNode.containerInfo,Pi=!0;break e}F=F.return}if(gn===null)throw Error(t(160));m_(v,T,m),gn=null,Pi=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(J){$t(m,r,J)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)g_(r,n),r=r.sibling}function g_(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bi(r,n),Wi(n),f&4){try{Na(3,n,n.return),ru(3,n)}catch(He){$t(n,n.return,He)}try{Na(5,n,n.return)}catch(He){$t(n,n.return,He)}}break;case 1:bi(r,n),Wi(n),f&512&&l!==null&&xo(l,l.return);break;case 5:if(bi(r,n),Wi(n),f&512&&l!==null&&xo(l,l.return),n.flags&32){var m=n.stateNode;try{lt(m,"")}catch(He){$t(n,n.return,He)}}if(f&4&&(m=n.stateNode,m!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&v.type==="radio"&&v.name!=null&&dt(m,v),it(F,T);var J=it(F,v);for(T=0;T<V.length;T+=2){var ge=V[T],xe=V[T+1];ge==="style"?Je(m,xe):ge==="dangerouslySetInnerHTML"?Fe(m,xe):ge==="children"?lt(m,xe):b(m,ge,xe,J)}switch(F){case"input":ut(m,v);break;case"textarea":pe(m,v);break;case"select":var me=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?I(m,!!v.multiple,Le,!1):me!==!!v.multiple&&(v.defaultValue!=null?I(m,!!v.multiple,v.defaultValue,!0):I(m,!!v.multiple,v.multiple?[]:"",!1))}m[Ta]=v}catch(He){$t(n,n.return,He)}}break;case 6:if(bi(r,n),Wi(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,v=n.memoizedProps;try{m.nodeValue=v}catch(He){$t(n,n.return,He)}}break;case 3:if(bi(r,n),Wi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ha(r.containerInfo)}catch(He){$t(n,n.return,He)}break;case 4:bi(r,n),Wi(n);break;case 13:bi(r,n),Wi(n),m=n.child,m.flags&8192&&(v=m.memoizedState!==null,m.stateNode.isHidden=v,!v||m.alternate!==null&&m.alternate.memoizedState!==null||(Ff=G())),f&4&&__(n);break;case 22:if(ge=l!==null&&l.memoizedState!==null,n.mode&1?(wn=(J=wn)||ge,bi(r,n),wn=J):bi(r,n),Wi(n),f&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!ge&&(n.mode&1)!==0)for(ke=n,ge=n.child;ge!==null;){for(xe=ke=ge;ke!==null;){switch(me=ke,Le=me.child,me.tag){case 0:case 11:case 14:case 15:Na(4,me,me.return);break;case 1:xo(me,me.return);var Ve=me.stateNode;if(typeof Ve.componentWillUnmount=="function"){f=me,l=me.return;try{r=f,Ve.props=r.memoizedProps,Ve.state=r.memoizedState,Ve.componentWillUnmount()}catch(He){$t(f,l,He)}}break;case 5:xo(me,me.return);break;case 22:if(me.memoizedState!==null){y_(xe);continue}}Le!==null?(Le.return=me,ke=Le):y_(xe)}ge=ge.sibling}e:for(ge=null,xe=n;;){if(xe.tag===5){if(ge===null){ge=xe;try{m=xe.stateNode,J?(v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(F=xe.stateNode,V=xe.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=$e("display",T))}catch(He){$t(n,n.return,He)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=J?"":xe.memoizedProps}catch(He){$t(n,n.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:bi(r,n),Wi(n),f&4&&__(n);break;case 21:break;default:bi(r,n),Wi(n)}}function Wi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(h_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(lt(m,""),f.flags&=-33);var v=p_(n);Uf(n,v,m);break;case 3:case 4:var T=f.stateNode.containerInfo,F=p_(n);Lf(n,F,T);break;default:throw Error(t(161))}}catch(V){$t(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Qx(n,r,l){ke=n,v_(n)}function v_(n,r,l){for(var f=(n.mode&1)!==0;ke!==null;){var m=ke,v=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||iu;if(!T){var F=m.alternate,V=F!==null&&F.memoizedState!==null||wn;F=iu;var J=wn;if(iu=T,(wn=V)&&!J)for(ke=m;ke!==null;)T=ke,V=T.child,T.tag===22&&T.memoizedState!==null?S_(m):V!==null?(V.return=T,ke=V):S_(m);for(;v!==null;)ke=v,v_(v),v=v.sibling;ke=m,iu=F,wn=J}x_(n)}else(m.subtreeFlags&8772)!==0&&v!==null?(v.return=m,ke=v):x_(n)}}function x_(n){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:wn||ru(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!wn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Ri(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&ym(r,v,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}ym(r,T,l)}break;case 5:var F=r.stateNode;if(l===null&&r.flags&4){l=F;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var J=r.alternate;if(J!==null){var ge=J.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&ha(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||r.flags&512&&Df(r)}catch(me){$t(r,r.return,me)}}if(r===n){ke=null;break}if(l=r.sibling,l!==null){l.return=r.return,ke=l;break}ke=r.return}}function y_(n){for(;ke!==null;){var r=ke;if(r===n){ke=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ke=l;break}ke=r.return}}function S_(n){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{ru(4,r)}catch(V){$t(r,l,V)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(V){$t(r,m,V)}}var v=r.return;try{Df(r)}catch(V){$t(r,v,V)}break;case 5:var T=r.return;try{Df(r)}catch(V){$t(r,T,V)}}}catch(V){$t(r,r.return,V)}if(r===n){ke=null;break}var F=r.sibling;if(F!==null){F.return=r.return,ke=F;break}ke=r.return}}var Jx=Math.ceil,su=w.ReactCurrentDispatcher,If=w.ReactCurrentOwner,gi=w.ReactCurrentBatchConfig,yt=0,dn=null,nn=null,vn=0,ii=0,yo=Ir(0),ln=0,Fa=null,Es=0,ou=0,Nf=0,Oa=null,Vn=null,Ff=0,So=1/0,or=null,au=!1,Of=null,Br=null,lu=!1,Vr=null,uu=0,ka=0,kf=null,cu=-1,fu=0;function Nn(){return(yt&6)!==0?G():cu!==-1?cu:cu=G()}function Hr(n){return(n.mode&1)===0?1:(yt&2)!==0&&vn!==0?vn&-vn:Fx.transition!==null?(fu===0&&(fu=Un()),fu):(n=ht,n!==0||(n=window.event,n=n===void 0?16:Ep(n.type)),n)}function Di(n,r,l,f){if(50<ka)throw ka=0,kf=null,Error(t(185));Zt(n,l,f),((yt&2)===0||n!==dn)&&(n===dn&&((yt&2)===0&&(ou|=l),ln===4&&Gr(n,vn)),Hn(n,f),l===1&&yt===0&&(r.mode&1)===0&&(So=G()+500,zl&&Fr()))}function Hn(n,r){var l=n.callbackNode;ps(n,r);var f=wi(n,n===dn?vn:0);if(f===0)l!==null&&Y(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&Y(l),r===1)n.tag===0?Nx(E_.bind(null,n)):lm(E_.bind(null,n)),Dx(function(){(yt&6)===0&&Fr()}),l=null;else{switch(mp(f)){case 1:l=Ce;break;case 4:l=Ie;break;case 16:l=Oe;break;case 536870912:l=tt;break;default:l=Oe}l=D_(l,M_.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function M_(n,r){if(cu=-1,fu=0,(yt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Mo()&&n.callbackNode!==l)return null;var f=wi(n,n===dn?vn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=du(n,f);else{r=f;var m=yt;yt|=2;var v=w_();(dn!==n||vn!==r)&&(or=null,So=G()+500,ws(n,r));do try{ny();break}catch(F){T_(n,F)}while(!0);tf(),su.current=v,yt=m,nn!==null?r=0:(dn=null,vn=0,r=ln)}if(r!==0){if(r===2&&(m=Pt(n),m!==0&&(f=m,r=zf(n,m))),r===1)throw l=Fa,ws(n,0),Gr(n,f),Hn(n,G()),l;if(r===6)Gr(n,f);else{if(m=n.current.alternate,(f&30)===0&&!ey(m)&&(r=du(n,f),r===2&&(v=Pt(n),v!==0&&(f=v,r=zf(n,v))),r===1))throw l=Fa,ws(n,0),Gr(n,f),Hn(n,G()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:As(n,Vn,or);break;case 3:if(Gr(n,f),(f&130023424)===f&&(r=Ff+500-G(),10<r)){if(wi(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){Nn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Wc(As.bind(null,n,Vn,or),r);break}As(n,Vn,or);break;case 4:if(Gr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var T=31-Mt(f);v=1<<T,T=r[T],T>m&&(m=T),f&=~v}if(f=m,f=G()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*Jx(f/1960))-f,10<f){n.timeoutHandle=Wc(As.bind(null,n,Vn,or),f);break}As(n,Vn,or);break;case 5:As(n,Vn,or);break;default:throw Error(t(329))}}}return Hn(n,G()),n.callbackNode===l?M_.bind(null,n):null}function zf(n,r){var l=Oa;return n.current.memoizedState.isDehydrated&&(ws(n,r).flags|=256),n=du(n,r),n!==2&&(r=Vn,Vn=l,r!==null&&Bf(r)),n}function Bf(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function ey(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],v=m.getSnapshot;m=m.value;try{if(!Ai(v(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Gr(n,r){for(r&=~Nf,r&=~ou,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Mt(r),f=1<<l;n[l]=-1,r&=~f}}function E_(n){if((yt&6)!==0)throw Error(t(327));Mo();var r=wi(n,0);if((r&1)===0)return Hn(n,G()),null;var l=du(n,r);if(n.tag!==0&&l===2){var f=Pt(n);f!==0&&(r=f,l=zf(n,f))}if(l===1)throw l=Fa,ws(n,0),Gr(n,r),Hn(n,G()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,As(n,Vn,or),Hn(n,G()),null}function Vf(n,r){var l=yt;yt|=1;try{return n(r)}finally{yt=l,yt===0&&(So=G()+500,zl&&Fr())}}function Ts(n){Vr!==null&&Vr.tag===0&&(yt&6)===0&&Mo();var r=yt;yt|=1;var l=gi.transition,f=ht;try{if(gi.transition=null,ht=1,n)return n()}finally{ht=f,gi.transition=l,yt=r,(yt&6)===0&&Fr()}}function Hf(){ii=yo.current,zt(yo)}function ws(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,bx(l)),nn!==null)for(l=nn.return;l!==null;){var f=l;switch(Kc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Ol();break;case 3:go(),zt(kn),zt(Mn),cf();break;case 5:lf(f);break;case 4:go();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:nf(f.type._context);break;case 22:case 23:Hf()}l=l.return}if(dn=n,nn=n=Wr(n.current,null),vn=ii=r,ln=0,Fa=null,Nf=ou=Es=0,Vn=Oa=null,ys!==null){for(r=0;r<ys.length;r++)if(l=ys[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,v=l.pending;if(v!==null){var T=v.next;v.next=m,f.next=T}l.pending=f}ys=null}return n}function T_(n,r){do{var l=nn;try{if(tf(),$l.current=Jl,Kl){for(var f=Wt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Kl=!1}if(Ms=0,fn=an=Wt=null,ba=!1,Da=0,If.current=null,l===null||l.return===null){ln=1,Fa=r,nn=null;break}e:{var v=n,T=l.return,F=l,V=r;if(r=vn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var J=V,ge=F,xe=ge.tag;if((ge.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Le=$m(T);if(Le!==null){Le.flags&=-257,Km(Le,T,F,v,r),Le.mode&1&&qm(v,J,r),r=Le,V=J;var Ve=r.updateQueue;if(Ve===null){var He=new Set;He.add(V),r.updateQueue=He}else Ve.add(V);break e}else{if((r&1)===0){qm(v,J,r),Gf();break e}V=Error(t(426))}}else if(Vt&&F.mode&1){var Qt=$m(T);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Km(Qt,T,F,v,r),Jc(vo(V,F));break e}}v=V=vo(V,F),ln!==4&&(ln=2),Oa===null?Oa=[v]:Oa.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var q=Ym(v,V,r);xm(v,q);break e;case 1:F=V;var W=v.type,K=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Br===null||!Br.has(K)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=jm(v,F,r);xm(v,Ee);break e}}v=v.return}while(v!==null)}C_(l)}catch(We){r=We,nn===l&&l!==null&&(nn=l=l.return);continue}break}while(!0)}function w_(){var n=su.current;return su.current=Jl,n===null?Jl:n}function Gf(){(ln===0||ln===3||ln===2)&&(ln=4),dn===null||(Es&268435455)===0&&(ou&268435455)===0||Gr(dn,vn)}function du(n,r){var l=yt;yt|=2;var f=w_();(dn!==n||vn!==r)&&(or=null,ws(n,r));do try{ty();break}catch(m){T_(n,m)}while(!0);if(tf(),yt=l,su.current=f,nn!==null)throw Error(t(261));return dn=null,vn=0,ln}function ty(){for(;nn!==null;)A_(nn)}function ny(){for(;nn!==null&&!te();)A_(nn)}function A_(n){var r=b_(n.alternate,n,ii);n.memoizedProps=n.pendingProps,r===null?C_(n):nn=r,If.current=null}function C_(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=qx(l,r,ii),l!==null){nn=l;return}}else{if(l=$x(l,r),l!==null){l.flags&=32767,nn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,nn=null;return}}if(r=r.sibling,r!==null){nn=r;return}nn=r=n}while(r!==null);ln===0&&(ln=5)}function As(n,r,l){var f=ht,m=gi.transition;try{gi.transition=null,ht=1,iy(n,r,l,f)}finally{gi.transition=m,ht=f}return null}function iy(n,r,l,f){do Mo();while(Vr!==null);if((yt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Sn(n,v),n===dn&&(nn=dn=null,vn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||lu||(lu=!0,D_(Oe,function(){return Mo(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=gi.transition,gi.transition=null;var T=ht;ht=1;var F=yt;yt|=4,If.current=null,Zx(n,l),g_(l,n),Ex(Hc),El=!!Vc,Hc=Vc=null,n.current=l,Qx(l),ie(),yt=F,ht=T,gi.transition=v}else n.current=l;if(lu&&(lu=!1,Vr=n,uu=m),v=n.pendingLanes,v===0&&(Br=null),St(l.stateNode),Hn(n,G()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(au)throw au=!1,n=Of,Of=null,n;return(uu&1)!==0&&n.tag!==0&&Mo(),v=n.pendingLanes,(v&1)!==0?n===kf?ka++:(ka=0,kf=n):ka=0,Fr(),null}function Mo(){if(Vr!==null){var n=mp(uu),r=gi.transition,l=ht;try{if(gi.transition=null,ht=16>n?16:n,Vr===null)var f=!1;else{if(n=Vr,Vr=null,uu=0,(yt&6)!==0)throw Error(t(331));var m=yt;for(yt|=4,ke=n.current;ke!==null;){var v=ke,T=v.child;if((ke.flags&16)!==0){var F=v.deletions;if(F!==null){for(var V=0;V<F.length;V++){var J=F[V];for(ke=J;ke!==null;){var ge=ke;switch(ge.tag){case 0:case 11:case 15:Na(8,ge,v)}var xe=ge.child;if(xe!==null)xe.return=ge,ke=xe;else for(;ke!==null;){ge=ke;var me=ge.sibling,Le=ge.return;if(d_(ge),ge===J){ke=null;break}if(me!==null){me.return=Le,ke=me;break}ke=Le}}}var Ve=v.alternate;if(Ve!==null){var He=Ve.child;if(He!==null){Ve.child=null;do{var Qt=He.sibling;He.sibling=null,He=Qt}while(He!==null)}}ke=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,ke=T;else e:for(;ke!==null;){if(v=ke,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Na(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,ke=q;break e}ke=v.return}}var W=n.current;for(ke=W;ke!==null;){T=ke;var K=T.child;if((T.subtreeFlags&2064)!==0&&K!==null)K.return=T,ke=K;else e:for(T=W;ke!==null;){if(F=ke,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:ru(9,F)}}catch(We){$t(F,F.return,We)}if(F===T){ke=null;break e}var Ee=F.sibling;if(Ee!==null){Ee.return=F.return,ke=Ee;break e}ke=F.return}}if(yt=m,Fr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Ye,n)}catch{}f=!0}return f}finally{ht=l,gi.transition=r}}return!1}function R_(n,r,l){r=vo(l,r),r=Ym(n,r,1),n=kr(n,r,1),r=Nn(),n!==null&&(Zt(n,1,r),Hn(n,r))}function $t(n,r,l){if(n.tag===3)R_(n,n,l);else for(;r!==null;){if(r.tag===3){R_(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Br===null||!Br.has(f))){n=vo(l,n),n=jm(r,n,1),r=kr(r,n,1),n=Nn(),r!==null&&(Zt(r,1,n),Hn(r,n));break}}r=r.return}}function ry(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Nn(),n.pingedLanes|=n.suspendedLanes&l,dn===n&&(vn&l)===l&&(ln===4||ln===3&&(vn&130023424)===vn&&500>G()-Ff?ws(n,0):Nf|=l),Hn(n,r)}function P_(n,r){r===0&&((n.mode&1)===0?r=1:(r=mt,mt<<=1,(mt&130023424)===0&&(mt=4194304)));var l=Nn();n=ir(n,r),n!==null&&(Zt(n,r,l),Hn(n,l))}function sy(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),P_(n,l)}function oy(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),P_(n,l)}var b_;b_=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||kn.current)Bn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Bn=!1,jx(n,r,l);Bn=(n.flags&131072)!==0}else Bn=!1,Vt&&(r.flags&1048576)!==0&&um(r,Vl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;nu(n,r),n=r.pendingProps;var m=uo(r,Mn.current);_o(r,l),m=hf(null,r,f,n,m,l);var v=pf();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,zn(f)?(v=!0,kl(r)):v=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,of(r),m.updater=eu,r.stateNode=m,m._reactInternals=r,yf(r,f,n,l),r=Tf(null,r,f,!0,v,l)):(r.tag=0,Vt&&v&&$c(r),In(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(nu(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=ly(f),n=Ri(f,n),m){case 0:r=Ef(null,r,f,n,l);break e;case 1:r=n_(null,r,f,n,l);break e;case 11:r=Zm(null,r,f,n,l);break e;case 14:r=Qm(null,r,f,Ri(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Ri(f,m),Ef(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Ri(f,m),n_(n,r,f,m,l);case 3:e:{if(i_(r),n===null)throw Error(t(387));f=r.pendingProps,v=r.memoizedState,m=v.element,vm(n,r),jl(r,f,null,l);var T=r.memoizedState;if(f=T.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){m=vo(Error(t(423)),r),r=r_(n,r,f,l,m);break e}else if(f!==m){m=vo(Error(t(424)),r),r=r_(n,r,f,l,m);break e}else for(ni=Ur(r.stateNode.containerInfo.firstChild),ti=r,Vt=!0,Ci=null,l=_m(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ho(),f===m){r=sr(n,r,l);break e}In(n,r,f,l)}r=r.child}return r;case 5:return Sm(r),n===null&&Qc(r),f=r.type,m=r.pendingProps,v=n!==null?n.memoizedProps:null,T=m.children,Gc(f,m)?T=null:v!==null&&Gc(f,v)&&(r.flags|=32),t_(n,r),In(n,r,T,l),r.child;case 6:return n===null&&Qc(r),null;case 13:return s_(n,r,l);case 4:return af(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=po(r,null,f,l):In(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Ri(f,m),Zm(n,r,f,m,l);case 7:return In(n,r,r.pendingProps,l),r.child;case 8:return In(n,r,r.pendingProps.children,l),r.child;case 12:return In(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,v=r.memoizedProps,T=m.value,Ft(Wl,f._currentValue),f._currentValue=T,v!==null)if(Ai(v.value,T)){if(v.children===m.children&&!kn.current){r=sr(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var F=v.dependencies;if(F!==null){T=v.child;for(var V=F.firstContext;V!==null;){if(V.context===f){if(v.tag===1){V=rr(-1,l&-l),V.tag=2;var J=v.updateQueue;if(J!==null){J=J.shared;var ge=J.pending;ge===null?V.next=V:(V.next=ge.next,ge.next=V),J.pending=V}}v.lanes|=l,V=v.alternate,V!==null&&(V.lanes|=l),rf(v.return,l,r),F.lanes|=l;break}V=V.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,F=T.alternate,F!==null&&(F.lanes|=l),rf(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}In(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,_o(r,l),m=mi(m),f=f(m),r.flags|=1,In(n,r,f,l),r.child;case 14:return f=r.type,m=Ri(f,r.pendingProps),m=Ri(f.type,m),Qm(n,r,f,m,l);case 15:return Jm(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Ri(f,m),nu(n,r),r.tag=1,zn(f)?(n=!0,kl(r)):n=!1,_o(r,l),Wm(r,f,m),yf(r,f,m,l),Tf(null,r,f,!0,n,l);case 19:return a_(n,r,l);case 22:return e_(n,r,l)}throw Error(t(156,r.tag))};function D_(n,r){return P(n,r)}function ay(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(n,r,l,f){return new ay(n,r,l,f)}function Wf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ly(n){if(typeof n=="function")return Wf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ue)return 14}return 2}function Wr(n,r){var l=n.alternate;return l===null?(l=vi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function hu(n,r,l,f,m,v){var T=2;if(f=n,typeof n=="function")Wf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case L:return Cs(l.children,m,v,r);case O:T=8,m|=8;break;case A:return n=vi(12,l,r,m|2),n.elementType=A,n.lanes=v,n;case j:return n=vi(13,l,r,m),n.elementType=j,n.lanes=v,n;case oe:return n=vi(19,l,r,m),n.elementType=oe,n.lanes=v,n;case re:return pu(l,m,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:T=10;break e;case z:T=9;break e;case ee:T=11;break e;case ue:T=14;break e;case ne:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vi(T,l,r,m),r.elementType=n,r.type=f,r.lanes=v,r}function Cs(n,r,l,f){return n=vi(7,n,f,r),n.lanes=l,n}function pu(n,r,l,f){return n=vi(22,n,f,r),n.elementType=re,n.lanes=l,n.stateNode={isHidden:!1},n}function Xf(n,r,l){return n=vi(6,n,null,r),n.lanes=l,n}function Yf(n,r,l){return r=vi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function uy(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function jf(n,r,l,f,m,v,T,F,V){return n=new uy(n,r,l,F,V),r===1?(r=1,v===!0&&(r|=8)):r=0,v=vi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},of(v),n}function cy(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function L_(n){if(!n)return Nr;n=n._reactInternals;e:{if(Bi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(zn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(zn(l))return om(n,l,r)}return r}function U_(n,r,l,f,m,v,T,F,V){return n=jf(l,f,!0,n,m,v,T,F,V),n.context=L_(null),l=n.current,f=Nn(),m=Hr(l),v=rr(f,m),v.callback=r??null,kr(l,v,m),n.current.lanes=m,Zt(n,m,f),Hn(n,f),n}function mu(n,r,l,f){var m=r.current,v=Nn(),T=Hr(m);return l=L_(l),r.context===null?r.context=l:r.pendingContext=l,r=rr(v,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=kr(m,r,T),n!==null&&(Di(n,m,T,v),Yl(n,m,T)),T}function _u(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function I_(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function qf(n,r){I_(n,r),(n=n.alternate)&&I_(n,r)}function fy(){return null}var N_=typeof reportError=="function"?reportError:function(n){console.error(n)};function $f(n){this._internalRoot=n}gu.prototype.render=$f.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));mu(n,r,null,null)},gu.prototype.unmount=$f.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ts(function(){mu(null,n,null,null)}),r[Ji]=null}};function gu(n){this._internalRoot=n}gu.prototype.unstable_scheduleHydration=function(n){if(n){var r=vp();n={blockedOn:null,target:n,priority:r};for(var l=0;l<br.length&&r!==0&&r<br[l].priority;l++);br.splice(l,0,n),l===0&&Sp(n)}};function Kf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function F_(){}function dy(n,r,l,f,m){if(m){if(typeof f=="function"){var v=f;f=function(){var J=_u(T);v.call(J)}}var T=U_(r,f,n,0,null,!1,!1,"",F_);return n._reactRootContainer=T,n[Ji]=T.current,Ma(n.nodeType===8?n.parentNode:n),Ts(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var F=f;f=function(){var J=_u(V);F.call(J)}}var V=jf(n,0,!1,null,null,!1,!1,"",F_);return n._reactRootContainer=V,n[Ji]=V.current,Ma(n.nodeType===8?n.parentNode:n),Ts(function(){mu(r,V,l,f)}),V}function xu(n,r,l,f,m){var v=l._reactRootContainer;if(v){var T=v;if(typeof m=="function"){var F=m;m=function(){var V=_u(T);F.call(V)}}mu(r,T,n,m)}else T=dy(l,r,n,m,f);return _u(T)}_p=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=_n(r.pendingLanes);l!==0&&(ms(r,l|1),Hn(r,G()),(yt&6)===0&&(So=G()+500,Fr()))}break;case 13:Ts(function(){var f=ir(n,1);if(f!==null){var m=Nn();Di(f,n,1,m)}}),qf(n,1)}},yc=function(n){if(n.tag===13){var r=ir(n,134217728);if(r!==null){var l=Nn();Di(r,n,134217728,l)}qf(n,134217728)}},gp=function(n){if(n.tag===13){var r=Hr(n),l=ir(n,r);if(l!==null){var f=Nn();Di(l,n,r,f)}qf(n,r)}},vp=function(){return ht},xp=function(n,r){var l=ht;try{return ht=n,r()}finally{ht=l}},Ae=function(n,r,l){switch(r){case"input":if(ut(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=Fl(f);if(!m)throw Error(t(90));pt(f),ut(f,m)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&I(n,!!l.multiple,r,!1)}},Ot=Vf,on=Ts;var hy={usingClientEntryPoint:!1,Events:[wa,ao,Fl,Pe,rt,Vf]},za={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},py={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xl(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Ye=yu.inject(py),st=yu}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy,Gn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kf(r))throw Error(t(200));return cy(n,r,null,l)},Gn.createRoot=function(n,r){if(!Kf(n))throw Error(t(299));var l=!1,f="",m=N_;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=jf(n,1,!1,null,null,l,!1,f,m),n[Ji]=r.current,Ma(n.nodeType===8?n.parentNode:n),new $f(r)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xl(r),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return Ts(n)},Gn.hydrate=function(n,r,l){if(!vu(r))throw Error(t(200));return xu(null,n,r,!0,l)},Gn.hydrateRoot=function(n,r,l){if(!Kf(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,v="",T=N_;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=U_(r,null,n,1,l??null,m,!1,v,T),n[Ji]=r.current,Ma(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new gu(r)},Gn.render=function(n,r,l){if(!vu(r))throw Error(t(200));return xu(null,n,r,!1,l)},Gn.unmountComponentAtNode=function(n){if(!vu(n))throw Error(t(40));return n._reactRootContainer?(Ts(function(){xu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1},Gn.unstable_batchedUpdates=Vf,Gn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!vu(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xu(n,r,l,!1,f)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var W_;function My(){if(W_)return Jf.exports;W_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=Sy(),Jf.exports}var X_;function Ey(){if(X_)return Su;X_=1;var o=My();return Su.createRoot=o.createRoot,Su.hydrateRoot=o.hydrateRoot,Su}var Ty=Ey();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a0=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ay={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=Lt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:u,...c},d)=>Lt.createElement("svg",{ref:d,...Ay,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:a0("lucide",s),...c},[...u.map(([h,p])=>Lt.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=(o,e)=>{const t=Lt.forwardRef(({className:i,...s},a)=>Lt.createElement(Cy,{ref:a,iconNode:e,className:a0(`lucide-${wy(o)}`,i),...s}));return t.displayName=`${o}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=oa("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=oa("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=oa("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=oa("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=oa("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=oa("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);function hr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function l0(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ja={duration:.5,overwrite:!1,delay:0},Gh,xn,Ht,Ei=1e8,Ut=1/Ei,Bd=Math.PI*2,Iy=Bd/4,Ny=0,u0=Math.sqrt,Fy=Math.cos,Oy=Math.sin,mn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},yr=function(e){return typeof e=="number"},Wh=function(e){return typeof e>"u"},Ki=function(e){return typeof e=="object"},Yn=function(e){return e!==!1},Xh=function(){return typeof window<"u"},Mu=function(e){return Kt(e)||mn(e)},c0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,ky=/random\([^)]+\)/g,zy=/,\s*/g,Y_=/(?:-?\.?\d|\.)+/gi,f0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,d0=/[+-]=-?[.\d]+/,By=/[^,'"\[\]\s]+/gi,Vy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,Xi,Vd,Yh,fi={},nc={},h0,p0=function(e){return(nc=qo(e,fi))&&Jn},jh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},el=function(e,t){return!t&&console.warn(e)},m0=function(e,t){return e&&(fi[e]=t)&&nc&&(nc[e]=t)||fi},tl=function(){return 0},Hy={suppressEvents:!0,isStart:!0,kill:!1},ju={suppressEvents:!0,kill:!1},Gy={suppressEvents:!0},qh={},ns=[],Hd={},_0,oi={},id={},j_=30,qu=[],$h="",Kh=function(e){var t=e[0],i,s;if(Ki(t)||Kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=qu.length;s--&&!qu[s].targetTest(t););i=qu[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new k0(e[s],i)))||e.splice(s,1);return e},Ws=function(e){return e._gsap||Kh(Ti(e))[0]._gsap},g0=function(e,t,i){return(i=e[t])&&Kt(i)?e[t]():Wh(i)&&e.getAttribute&&e.getAttribute(t)||i},jn=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},Ho=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},Wy=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},ic=function(){var e=ns.length,t=ns.slice(0),i,s;for(Hd={},ns.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Zh=function(e){return!!(e._initted||e._startAt||e.add)},v0=function(e,t,i,s){ns.length&&!xn&&ic(),e.render(t,i,!!(xn&&t<0&&Zh(e))),ns.length&&!xn&&ic()},x0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(By).length<2?t:mn(e)?e.trim():e},y0=function(e){return e},di=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Xy=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},qo=function(e,t){for(var i in t)e[i]=t[i];return e},q_=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ki(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},rc=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},Ka=function(e){var t=e.parent||Yt,i=e.keyframes?Xy(Pn(e.keyframes)):di;if(Yn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Yy=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},S0=function(e,t,i,s,a){var u=e[s],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},dc=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t._prev,u=t._next;a?a._next=u:e[i]===t&&(e[i]=u),u?u._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},jy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gd=function(e,t,i,s){return e._startAt&&(xn?e._startAt.revert(ju):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},qy=function o(e){return!e||e._ts&&o(e.parent)},$_=function(e){return e._repeat?$o(e._tTime,e=e.duration()+e._rDelay)*e:0},$o=function(e,t){var i=Math.floor(e=Xt(e/t));return e&&i===e?i-1:i},sc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},hc=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},pc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Xt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),hc(e),i._dirty||Xs(i,e)),e},M0=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=sc(e.rawTime(),t),(!t._dur||ll(0,t.totalDuration(),i)-t._tTime>Ut)&&t.render(i,!0)),Xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ut}},ji=function(e,t,i,s){return t.parent&&os(t),t._start=Xt((yr(i)?i:i||e!==Yt?yi(e,i,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),S0(e,t,"_first","_last",e._sort?"_start":0),Wd(t)||(e._recent=t),s||M0(e,t),e._ts<0&&pc(e,e._tTime),e},E0=function(e,t){return(fi.ScrollTrigger||jh("scrollTrigger",t))&&fi.ScrollTrigger.create(t,e)},T0=function(e,t,i,s,a){if(Jh(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_0!==ai.frame)return ns.push(e),e._lazy=[a,s],1},$y=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Wd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ky=function(e,t,i,s){var a=e.ratio,u=t<0||!t&&(!e._start&&$y(e)&&!(!e._initted&&Wd(e))||(e._ts<0||e._dp._ts<0)&&!Wd(e))?0:1,c=e._rDelay,d=0,h,p,_;if(c&&e._repeat&&(d=ll(0,e._tDur,t),p=$o(d,c),e._yoyo&&p&1&&(u=1-u),p!==$o(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||xn||s||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&T0(e,t,s,i,d))return;for(_=e._zTime,e._zTime=t||(i?Ut:0),i||(i=t&&!_),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&Gd(e,t,i,!0),e._onUpdate&&!i&&li(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&os(e,1),!i&&!xn&&(li(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Zy=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Ko=function(e,t,i,s){var a=e._repeat,u=Xt(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:Xt(u*(a+1)+e._rDelay*a):u,c>0&&!s&&pc(e,e._tTime=e._tDur*c),e.parent&&hc(e),i||Xs(e.parent,e),e},K_=function(e){return e instanceof Xn?Xs(e):Ko(e,e._dur)},Qy={_start:0,endTime:tl,totalDuration:tl},yi=function o(e,t,i){var s=e.labels,a=e._recent||Qy,u=e.duration()>=Ei?a.endTime(!1):e._dur,c,d,h;return mn(t)&&(isNaN(t)||t in s)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:i).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&i&&(d=d/100*(Pn(i)?i[0]:i).totalDuration()),c>1?o(e,t.substr(0,c-1),i)+d:u+d)):t==null?u:+t},Za=function(e,t,i){var s=yr(t[1]),a=(s?2:1)+(e<2?0:1),u=t[a],c,d;if(s&&(u.duration=t[1]),u.parent=i,e){for(c=u,d=i;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=Yn(d.vars.inherit)&&d.parent;u.immediateRender=Yn(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new sn(t[0],u,t[a+1])},fs=function(e,t){return e||e===0?t(e):t},ll=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!mn(e)||!(t=Vy.exec(e))?"":t[1]},Jy=function(e,t,i){return fs(i,function(s){return ll(e,t,s)})},Xd=[].slice,w0=function(e,t){return e&&Ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ki(e[0]))&&!e.nodeType&&e!==Xi},eS=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var a;return mn(s)&&!t||w0(s,1)?(a=i).push.apply(a,Ti(s)):i.push(s)})||i},Ti=function(e,t,i){return Ht&&!t&&Ht.selector?Ht.selector(e):mn(e)&&!i&&(Vd||!Zo())?Xd.call((t||Yh).querySelectorAll(e),0):Pn(e)?eS(e,i):w0(e)?Xd.call(e,0):e?[e]:[]},Yd=function(e){return e=Ti(e)[0]||el("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ti(t,i.querySelectorAll?i:i===e?el("Invalid scope")||Yh.createElement("div"):e)}},A0=function(e){return e.sort(function(){return .5-Math.random()})},C0=function(e){if(Kt(e))return e;var t=Ki(e)?e:{each:e},i=Ys(t.ease),s=t.from||0,a=parseFloat(t.base)||0,u={},c=s>0&&s<1,d=isNaN(s)||c,h=t.axis,p=s,_=s;return mn(s)?p=_={center:.5,edges:.5,end:1}[s]||0:!c&&d&&(p=s[0],_=s[1]),function(g,S,E){var M=(E||t).length,y=u[M],x,D,b,w,U,N,L,O,A;if(!y){if(A=t.grid==="auto"?0:(t.grid||[1,Ei])[1],!A){for(L=-Ei;L<(L=E[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(y=u[M]=[],x=d?Math.min(A,M)*p-.5:s%A,D=A===Ei?0:d?M*_/A-.5:s/A|0,L=0,O=Ei,N=0;N<M;N++)b=N%A-x,w=D-(N/A|0),y[N]=U=h?Math.abs(h==="y"?w:b):u0(b*b+w*w),U>L&&(L=U),U<O&&(O=U);s==="random"&&A0(y),y.max=L-O,y.min=O,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(A>M?M-1:h?h==="y"?M/A:A:Math.max(A,M/A))||0)*(s==="edges"?-1:1),y.b=M<0?a-M:a,y.u=Rn(t.amount||t.each)||0,i=i&&M<0?hS(i):i}return M=(y[g]-y.min)/y.max||0,Xt(y.b+(i?i(M):M)*y.v)+y.u}},jd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Xt(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(yr(i)?0:Rn(i))}},R0=function(e,t){var i=Pn(e),s,a;return!i&&Ki(e)&&(s=i=e.radius||Ei,e.values?(e=Ti(e.values),(a=!yr(e[0]))&&(s*=s)):e=jd(e.increment)),fs(t,i?Kt(e)?function(u){return a=e(u),Math.abs(a-u)<=s?a:u}:function(u){for(var c=parseFloat(a?u.x:u),d=parseFloat(a?u.y:0),h=Ei,p=0,_=e.length,g,S;_--;)a?(g=e[_].x-c,S=e[_].y-d,g=g*g+S*S):g=Math.abs(e[_]-c),g<h&&(h=g,p=_);return p=!s||h<=s?e[p]:u,a||p===u||yr(u)?p:p+Rn(u)}:jd(e))},P0=function(e,t,i,s){return fs(Pn(e)?!t:i===!0?!!(i=0):!s,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},tS=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(a,u){return u(a)},s)}},nS=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},iS=function(e,t,i){return D0(e,t,0,1,i)},b0=function(e,t,i){return fs(i,function(s){return e[~~t(s)]})},rS=function o(e,t,i){var s=t-e;return Pn(e)?b0(e,o(0,e.length),t):fs(i,function(a){return(s+(a-e)%s)%s+e})},sS=function o(e,t,i){var s=t-e,a=s*2;return Pn(e)?b0(e,o(0,e.length-1),t):fs(i,function(u){return u=(a+(u-e)%a)%a||0,e+(u>s?a-u:u)})},nl=function(e){return e.replace(ky,function(t){var i=t.indexOf("[")+1,s=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(zy);return P0(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},D0=function(e,t,i,s,a){var u=t-e,c=s-i;return fs(a,function(d){return i+((d-e)/u*c||0)})},oS=function o(e,t,i,s){var a=isNaN(e+t)?0:function(S){return(1-S)*e+S*t};if(!a){var u=mn(e),c={},d,h,p,_,g;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(p=[],_=e.length,g=_-2,h=1;h<_;h++)p.push(o(e[h-1],e[h]));_--,a=function(E){E*=_;var M=Math.min(g,~~E);return p[M](E-M)},i=t}else s||(e=qo(Pn(e)?[]:{},e));if(!p){for(d in t)Qh.call(c,e,d,"get",t[d]);a=function(E){return np(E,c)||(u?e.p:e)}}}return fs(i,a)},Z_=function(e,t,i){var s=e.labels,a=Ei,u,c,d;for(u in s)c=s[u]-t,c<0==!!i&&c&&a>(c=Math.abs(c))&&(d=u,a=c);return d},li=function(e,t,i){var s=e.vars,a=s[t],u=Ht,c=e._ctx,d,h,p;if(a)return d=s[t+"Params"],h=s.callbackScope||e,i&&ns.length&&ic(),c&&(Ht=c),p=d?a.apply(h,d):a.call(h),Ht=u,p},ja=function(e){return os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&li(e,"onInterrupt"),e},Bo,L0=[],U0=function(e){if(e)if(e=!e.name&&e.default||e,Xh()||e.headless){var t=e.name,i=Kt(e),s=t&&!i&&e.init?function(){this._props=[]}:e,a={init:tl,render:np,add:Qh,kill:ES,modifier:MS,rawVars:0},u={targetTest:0,get:0,getSetter:tp,aliases:{},register:0};if(Zo(),e!==s){if(oi[t])return;di(s,di(rc(e,a),u)),qo(s.prototype,qo(a,rc(e,u))),oi[s.prop=t]=s,e.targetTest&&(qu.push(s),qh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}m0(t,s),e.register&&e.register(Jn,s,qn)}else L0.push(e)},Dt=255,qa={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},rd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Dt+.5|0},I0=function(e,t,i){var s=e?yr(e)?[e>>16,e>>8&Dt,e&Dt]:0:qa.black,a,u,c,d,h,p,_,g,S,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),qa[e])s=qa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Dt,s&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(Y_),!t)d=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,s.length>3&&(s[3]*=1),s[0]=rd(d+1/3,a,u),s[1]=rd(d,a,u),s[2]=rd(d-1/3,a,u);else if(~e.indexOf("="))return s=e.match(f0),i&&s.length<4&&(s[3]=1),s}else s=e.match(Y_)||qa.transparent;s=s.map(Number)}return t&&!E&&(a=s[0]/Dt,u=s[1]/Dt,c=s[2]/Dt,_=Math.max(a,u,c),g=Math.min(a,u,c),p=(_+g)/2,_===g?d=h=0:(S=_-g,h=p>.5?S/(2-_-g):S/(_+g),d=_===a?(u-c)/S+(u<c?6:0):_===u?(c-a)/S+2:(a-u)/S+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},N0=function(e){var t=[],i=[],s=-1;return e.split(is).forEach(function(a){var u=a.match(zo)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},Q_=function(e,t,i){var s="",a=(e+s).match(is),u=t?"hsla(":"rgba(",c=0,d,h,p,_;if(!a)return e;if(a=a.map(function(g){return(g=I0(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(p=N0(e),d=i.c,d.join(s)!==p.c.join(s)))for(h=e.replace(is,"1").split(zo),_=h.length-1;c<_;c++)s+=h[c]+(~d.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:i).shift());if(!h)for(h=e.split(is),_=h.length-1;c<_;c++)s+=h[c]+a[c];return s+h[_]},is=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in qa)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),aS=/hsl[a]?\(/,F0=function(e){var t=e.join(" "),i;if(is.lastIndex=0,is.test(t))return i=aS.test(t),e[1]=Q_(e[1],i),e[0]=Q_(e[0],i,N0(e[1])),!0},il,ai=(function(){var o=Date.now,e=500,t=33,i=o(),s=i,a=1e3/240,u=a,c=[],d,h,p,_,g,S,E=function M(y){var x=o()-s,D=y===!0,b,w,U,N;if((x>e||x<0)&&(i+=x-t),s+=x,U=s-i,b=U-u,(b>0||D)&&(N=++_.frame,g=U-_.time*1e3,_.time=U=U/1e3,u+=b+(b>=a?4:a-b),w=1),D||(d=h(M)),w)for(S=0;S<c.length;S++)c[S](U,g,N,y)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){h0&&(!Vd&&Xh()&&(Xi=Vd=window,Yh=Xi.document||{},fi.gsap=Jn,(Xi.gsapVersions||(Xi.gsapVersions=[])).push(Jn.version),p0(nc||Xi.GreenSockGlobals||!Xi.gsap&&Xi||{}),L0.forEach(U0)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&_.sleep(),h=p||function(y){return setTimeout(y,u-_.time*1e3+1|0)},il=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),il=0,h=tl},lagSmoothing:function(y,x){e=y||1/0,t=Math.min(x||33,e)},fps:function(y){a=1e3/(y||240),u=_.time*1e3+a},add:function(y,x,D){var b=x?function(w,U,N,L){y(w,U,N,L),_.remove(b)}:y;return _.remove(y),c[D?"unshift":"push"](b),Zo(),b},remove:function(y,x){~(x=c.indexOf(y))&&c.splice(x,1)&&S>=x&&S--},_listeners:c},_})(),Zo=function(){return!il&&ai.wake()},gt={},lS=/^[\d.\-M][\d.\-,\s]/,uS=/["']/g,cS=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],a=1,u=i.length,c,d,h;a<u;a++)d=i[a],c=a!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[s]=isNaN(h)?h.replace(uS,"").trim():+h,s=d.substr(c+1).trim();return t},fS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},dS=function(e){var t=(e+"").split("("),i=gt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[cS(t[1])]:fS(e).split(",").map(x0)):gt._CE&&lS.test(e)?gt._CE("",e):i},hS=function(e){return function(t){return 1-e(1-t)}},Ys=function(e,t){return e&&(Kt(e)?e:gt[e]||dS(e))||t},Zs=function(e,t,i,s){i===void 0&&(i=function(d){return 1-t(1-d)}),s===void 0&&(s=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:s},u;return jn(e,function(c){gt[c]=fi[c]=a,gt[u=c.toLowerCase()]=i;for(var d in a)gt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=gt[c+"."+d]=a[d]}),a},O0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sd=function o(e,t,i){var s=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),u=a/Bd*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*Oy((p-u)*a)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:O0(c);return a=Bd/a,d.config=function(h,p){return o(e,h,p)},d},od=function o(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:O0(i);return s.config=function(a){return o(e,a)},s};jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Zs(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;Zs("Elastic",sd("in"),sd("out"),sd());(function(o,e){var t=1/e,i=2*t,s=2.5*t,a=function(c){return c<t?o*c*c:c<i?o*Math.pow(c-1.5/e,2)+.75:c<s?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};Zs("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);Zs("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Zs("Circ",function(o){return-(u0(1-o*o)-1)});Zs("Sine",function(o){return o===1?1:-Fy(o*Iy)+1});Zs("Back",od("in"),od("out"),od());gt.SteppedEase=gt.steps=fi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),a=t?1:0,u=1-Ut;return function(c){return((s*ll(0,u,c)|0)+a)*i}}};Ja.ease=gt["quad.out"];jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return $h+=o+","+o+"Params,"});var k0=function(e,t){this.id=Ny++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:g0,this.set=t?t.getSetter:tp},rl=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ko(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),il||ai.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ko(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(Zo(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(pc(this,i),!a._dp||a.parent||M0(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ut||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),v0(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$_(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$_(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?$o(this._tTime,a)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?sc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ut?0:this._rts,this.totalTime(ll(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),hc(this),jy(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Xt(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ji(s,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Yn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sc(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Gy);var s=xn;return xn=i,Zh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),xn=s,this},e.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,K_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,K_(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(yi(this,i),Yn(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Yn(s)),this._dur||(this._zTime=-Ut),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-Ut)},e.eventCallback=function(i,s,a){var u=this.vars;return arguments.length>1?(s?(u[i]=s,a&&(u[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this,a=s._prom;return new Promise(function(u){var c=Kt(i)?i:y0,d=function(){var p=s.then;s.then=null,a&&a(),Kt(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),u(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},e.kill=function(){ja(this)},o})();di(rl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var Xn=(function(o){l0(e,o);function e(i,s){var a;return i===void 0&&(i={}),a=o.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=Yn(i.sortChildren),Yt&&ji(i.parent||Yt,hr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&E0(hr(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,u){return Za(0,arguments,this),this},t.from=function(s,a,u){return Za(1,arguments,this),this},t.fromTo=function(s,a,u,c){return Za(2,arguments,this),this},t.set=function(s,a,u){return a.duration=0,a.parent=this,Ka(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new sn(s,a,yi(this,u),1),this},t.call=function(s,a,u){return ji(this,sn.delayedCall(0,s,a),u)},t.staggerTo=function(s,a,u,c,d,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new sn(s,u,yi(this,d)),this},t.staggerFrom=function(s,a,u,c,d,h,p){return u.runBackwards=1,Ka(u).immediateRender=Yn(u.immediateRender),this.staggerTo(s,a,u,c,d,h,p)},t.staggerFromTo=function(s,a,u,c,d,h,p,_){return c.startAt=u,Ka(c).immediateRender=Yn(c.immediateRender),this.staggerTo(s,a,c,d,h,p,_)},t.render=function(s,a,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:Xt(s),_=this._zTime<0!=s<0&&(this._initted||!h),g,S,E,M,y,x,D,b,w,U,N,L;if(this!==Yt&&p>d&&s>=0&&(p=d),p!==this._tTime||u||_){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),g=p,w=this._start,b=this._ts,x=!b,_&&(h||(c=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(N=this._yoyo,y=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,a,u);if(g=Xt(p%y),p===d?(M=this._repeat,g=h):(U=Xt(p/y),M=~~U,M&&M===U&&(g=h,M--),g>h&&(g=h)),U=$o(this._tTime,y),!c&&this._tTime&&U!==M&&this._tTime-U*y-this._dur<=0&&(U=M),N&&M&1&&(g=h-g,L=1),M!==U&&!this._lock){var O=N&&U&1,A=O===(N&&M&1);if(M<U&&(O=!O),c=O?0:p%h?h:p,this._lock=1,this.render(c||(L?0:Xt(M*y)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1,U=M),c&&c!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,A&&(this._lock=2,c=O?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=Zy(this,Xt(c),Xt(g)),D&&(p-=g-(g=D._start))),this._tTime=p,this._time=g,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&h&&!a&&!U&&(li(this,"onStart"),this._tTime!==p))return this;if(g>=c&&s>=0)for(S=this._first;S;){if(E=S._next,(S._act||g>=S._start)&&S._ts&&D!==S){if(S.parent!==this)return this.render(s,a,u);if(S.render(S._ts>0?(g-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(g-S._start)*S._ts,a,u),g!==this._time||!this._ts&&!x){D=0,E&&(p+=this._zTime=-Ut);break}}S=E}else{S=this._last;for(var C=s<0?s:g;S;){if(E=S._prev,(S._act||C<=S._end)&&S._ts&&D!==S){if(S.parent!==this)return this.render(s,a,u);if(S.render(S._ts>0?(C-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(C-S._start)*S._ts,a,u||xn&&Zh(S)),g!==this._time||!this._ts&&!x){D=0,E&&(p+=this._zTime=C?-Ut:Ut);break}}S=E}}if(D&&!a&&(this.pause(),D.render(g>=c?0:-Ut)._zTime=g>=c?1:-1,this._ts))return this._start=w,hc(this),this.render(s,a,u);this._onUpdate&&!a&&li(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(w===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&os(this,1),!a&&!(s<0&&!c)&&(p||c||!d)&&(li(this,p===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var u=this;if(yr(a)||(a=yi(this,a,s)),!(s instanceof rl)){if(Pn(s))return s.forEach(function(c){return u.add(c,a)}),this;if(mn(s))return this.addLabel(s,a);if(Kt(s))s=sn.delayedCall(0,s);else return this}return this!==s?ji(this,s,a):this},t.getChildren=function(s,a,u,c){s===void 0&&(s=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-Ei);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof sn?a&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,a,u)))),h=h._next;return d},t.getById=function(s){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===s)return a[u]},t.remove=function(s){return mn(s)?this.removeLabel(s):Kt(s)?this.killTweensOf(s):(s.parent===this&&dc(this,s),s===this._recent&&(this._recent=this._last),Xs(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(ai.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=yi(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,u){var c=sn.delayedCall(0,a||tl,u);return c.data="isPause",this._hasPause=1,ji(this,c,yi(this,s))},t.removePause=function(s){var a=this._first;for(s=yi(this,s);a;)a._start===s&&a.data==="isPause"&&os(a),a=a._next},t.killTweensOf=function(s,a,u){for(var c=this.getTweensOf(s,u),d=c.length;d--;)Jr!==c[d]&&c[d].kill(s,a);return this},t.getTweensOf=function(s,a){for(var u=[],c=Ti(s),d=this._first,h=yr(a),p;d;)d instanceof sn?Wy(d._targets,c)&&(h?(!Jr||d._initted&&d._ts)&&d.globalTime(0)<=a&&d.globalTime(d.totalDuration())>a:!a||d.isActive())&&u.push(d):(p=d.getTweensOf(c,a)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(s,a){a=a||{};var u=this,c=yi(u,s),d=a,h=d.startAt,p=d.onStart,_=d.onStartParams,g=d.immediateRender,S,E=sn.to(u,di({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||Ut,onStart:function(){if(u.pause(),!S){var y=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==y&&Ko(E,y,0,1).render(E._time,!0,!0),S=1}p&&p.apply(E,_||[])}},a));return g?E.render(0):E},t.tweenFromTo=function(s,a,u){return this.tweenTo(a,di({startAt:{time:yi(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Z_(this,yi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Z_(this,yi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(s,a,u){u===void 0&&(u=0);var c=this._first,d=this.labels,h;for(s=Xt(s);c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(a)for(h in d)d[h]>=u&&(d[h]+=s);return Xs(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return o.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Xs(this)},t.totalDuration=function(s){var a=0,u=this,c=u._last,d=Ei,h,p,_;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(_=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,ji(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(a-=p,(!_&&!u._dp||_&&_.smoothChildTiming)&&(u._start+=Xt(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>a&&c._ts&&(a=c._end),c=h;Ko(u,u===Yt&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(Yt._ts&&(v0(Yt,sc(s,Yt)),_0=ai.frame),ai.frame>=j_){j_+=ci.autoSleep||120;var a=Yt._first;if((!a||!a._ts)&&ci.autoSleep&&ai._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||ai.sleep()}}},e})(rl);di(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var pS=function(e,t,i,s,a,u,c){var d=new qn(this._pt,e,t,0,1,W0,null,a),h=0,p=0,_,g,S,E,M,y,x,D;for(d.b=i,d.e=s,i+="",s+="",(x=~s.indexOf("random("))&&(s=nl(s)),u&&(D=[i,s],u(D,e,t),i=D[0],s=D[1]),g=i.match(nd)||[];_=nd.exec(s);)E=_[0],M=s.substring(h,_.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),E!==g[p++]&&(y=parseFloat(g[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:y,c:E.charAt(1)==="="?Ho(y,E)-y:parseFloat(E)-y,m:S&&S<4?Math.round:0},h=nd.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=c,(d0.test(s)||x)&&(d.e=0),this._pt=d,d},Qh=function(e,t,i,s,a,u,c,d,h,p){Kt(s)&&(s=s(a||0,e,u));var _=e[t],g=i!=="get"?i:Kt(_)?h?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,S=Kt(_)?h?xS:H0:ep,E;if(mn(s)&&(~s.indexOf("random(")&&(s=nl(s)),s.charAt(1)==="="&&(E=Ho(g,s)+(Rn(g)||0),(E||E===0)&&(s=E))),!p||g!==s||qd)return!isNaN(g*s)&&s!==""?(E=new qn(this._pt,e,t,+g||0,s-(g||0),typeof _=="boolean"?SS:G0,0,S),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!_&&!(t in e)&&jh(t,s),pS.call(this,e,t,g,s,S,d||ci.stringFilter,h))},mS=function(e,t,i,s,a){if(Kt(e)&&(e=Qa(e,a,t,i,s)),!Ki(e)||e.style&&e.nodeType||Pn(e)||c0(e))return mn(e)?Qa(e,a,t,i,s):e;var u={},c;for(c in e)u[c]=Qa(e[c],a,t,i,s);return u},z0=function(e,t,i,s,a,u){var c,d,h,p;if(oi[e]&&(c=new oi[e]).init(a,c.rawVars?t[e]:mS(t[e],s,a,u,i),i,s,u)!==!1&&(i._pt=d=new qn(i._pt,a,e,0,1,c.render,c,0,c.priority),i!==Bo))for(h=i._ptLookup[i._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=d;return c},Jr,qd,Jh=function o(e,t,i){var s=e.vars,a=s.ease,u=s.startAt,c=s.immediateRender,d=s.lazy,h=s.onUpdate,p=s.runBackwards,_=s.yoyoEase,g=s.keyframes,S=s.autoRevert,E=e._dur,M=e._startAt,y=e._targets,x=e.parent,D=x&&x.data==="nested"?x.vars.targets:y,b=e._overwrite==="auto"&&!Gh,w=e.timeline,U=s.easeReverse||_,N,L,O,A,C,z,ee,j,oe,ue,ne,re,B;if(w&&(!g||!a)&&(a="none"),e._ease=Ys(a,Ja.ease),e._rEase=U&&(Ys(U)||e._ease),e._from=!w&&!!s.runBackwards,e._from&&(e.ratio=1),!w||g&&!s.stagger){if(j=y[0]?Ws(y[0]).harness:0,re=j&&s[j.prop],N=rc(s,qh),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!S?M.render(-1,!0):M.revert(p&&E?ju:Hy),M._lazy=0),u){if(os(e._startAt=sn.set(y,di({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&Yn(d),startAt:null,delay:0,onUpdate:h&&function(){return li(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!c&&!S)&&e._startAt.revert(ju),c&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),O=di({overwrite:!1,data:"isFromStart",lazy:c&&!M&&Yn(d),immediateRender:c,stagger:0,parent:x},N),re&&(O[j.prop]=re),os(e._startAt=sn.set(y,O)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(ju):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&Yn(d)||d&&!E,L=0;L<y.length;L++){if(C=y[L],ee=C._gsap||Kh(y)[L]._gsap,e._ptLookup[L]=ue={},Hd[ee.id]&&ns.length&&ic(),ne=D===y?L:D.indexOf(C),j&&(oe=new j).init(C,re||N,e,ne,D)!==!1&&(e._pt=A=new qn(e._pt,C,oe.name,0,1,oe.render,oe,0,oe.priority),oe._props.forEach(function(ce){ue[ce]=A}),oe.priority&&(z=1)),!j||re)for(O in N)oi[O]&&(oe=z0(O,N,e,ne,C,D))?oe.priority&&(z=1):ue[O]=A=Qh.call(e,C,O,"get",N[O],ne,D,0,s.stringFilter);e._op&&e._op[L]&&e.kill(C,e._op[L]),b&&e._pt&&(Jr=e,Yt.killTweensOf(C,ue,e.globalTime(t)),B=!e.parent,Jr=0),e._pt&&d&&(Hd[ee.id]=1)}z&&X0(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!B,g&&t<=0&&w.render(Ei,!0,!0)},_S=function(e,t,i,s,a,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,_,g,S;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,S=e._targets.length;S--;){if(p=g[S][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return qd=1,e.vars[t]="+=0",Jh(e,c),qd=0,d?el(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(p)}for(S=h.length;S--;)_=h[S],p=_._pt||_,p.s=(s||s===0)&&!a?s:p.s+(s||0)+u*p.c,p.c=i-p.s,_.e&&(_.e=Jt(i)+Rn(_.e)),_.b&&(_.b=p.s+Rn(_.b))},gS=function(e,t){var i=e[0]?Ws(e[0]).harness:0,s=i&&i.aliases,a,u,c,d;if(!s)return t;a=qo({},t);for(u in s)if(u in a)for(d=s[u].split(","),c=d.length;c--;)a[d[c]]=a[u];return a},vS=function(e,t,i,s){var a=t.ease||s||"power1.inOut",u,c;if(Pn(t))c=i[e]||(i[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:a})});else for(u in t)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},Qa=function(e,t,i,s,a){return Kt(e)?e.call(t,i,s,a):mn(e)&&~e.indexOf("random(")?nl(e):e},B0=$h+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",V0={};jn(B0+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return V0[o]=1});var sn=(function(o){l0(e,o);function e(i,s,a,u){var c;typeof s=="number"&&(a.duration=s,s=a,a=null),c=o.call(this,u?s:Ka(s))||this;var d=c.vars,h=d.duration,p=d.delay,_=d.immediateRender,g=d.stagger,S=d.overwrite,E=d.keyframes,M=d.defaults,y=d.scrollTrigger,x=s.parent||Yt,D=(Pn(i)||c0(i)?yr(i[0]):"length"in s)?[i]:Ti(i),b,w,U,N,L,O,A,C;if(c._targets=D.length?Kh(D):el("GSAP target "+i+" not found. https://gsap.com",!ci.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=S,E||g||Mu(h)||Mu(p)){s=c.vars;var z=s.easeReverse||s.yoyoEase;if(b=c.timeline=new Xn({data:"nested",defaults:M||{},targets:x&&x.data==="nested"?x.vars.targets:D}),b.kill(),b.parent=b._dp=hr(c),b._start=0,g||Mu(h)||Mu(p)){if(N=D.length,A=g&&C0(g),Ki(g))for(L in g)~B0.indexOf(L)&&(C||(C={}),C[L]=g[L]);for(w=0;w<N;w++)U=rc(s,V0),U.stagger=0,z&&(U.easeReverse=z),C&&qo(U,C),O=D[w],U.duration=+Qa(h,hr(c),w,O,D),U.delay=(+Qa(p,hr(c),w,O,D)||0)-c._delay,!g&&N===1&&U.delay&&(c._delay=p=U.delay,c._start+=p,U.delay=0),b.to(O,U,A?A(w,O,D):0),b._ease=gt.none;b.duration()?h=p=0:c.timeline=0}else if(E){Ka(di(b.vars.defaults,{ease:"none"})),b._ease=Ys(E.ease||s.ease||"none");var ee=0,j,oe,ue;if(Pn(E))E.forEach(function(ne){return b.to(D,ne,">")}),b.duration();else{U={};for(L in E)L==="ease"||L==="easeEach"||vS(L,E[L],U,E.easeEach);for(L in U)for(j=U[L].sort(function(ne,re){return ne.t-re.t}),ee=0,w=0;w<j.length;w++)oe=j[w],ue={ease:oe.e,duration:(oe.t-(w?j[w-1].t:0))/100*h},ue[L]=oe.v,b.to(D,ue,ee),ee+=ue.duration;b.duration()<h&&b.to({},{duration:h-b.duration()})}}h||c.duration(h=b.duration())}else c.timeline=0;return S===!0&&!Gh&&(Jr=hr(c),Yt.killTweensOf(D),Jr=0),ji(x,hr(c),a),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(_||!h&&!E&&c._start===Xt(x._time)&&Yn(_)&&qy(hr(c))&&x.data!=="nested")&&(c._tTime=-Ut,c.render(Math.max(0,-p)||0)),y&&E0(hr(c),y),c}var t=e.prototype;return t.render=function(s,a,u){var c=this._time,d=this._tDur,h=this._dur,p=s<0,_=s>d-Ut&&!p?d:s<Ut?0:s,g,S,E,M,y,x,D,b;if(!h)Ky(this,s,a,u);else if(_!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=_,b=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+s,a,u);if(g=Xt(_%M),_===d?(E=this._repeat,g=h):(y=Xt(_/M),E=~~y,E&&E===y?(g=h,E--):g>h&&(g=h)),x=this._yoyo&&E&1,x&&(g=h-g),y=$o(this._tTime,M),g===c&&!u&&this._initted&&E===y)return this._tTime=_,this;E!==y&&this.vars.repeatRefresh&&!x&&!this._lock&&g!==M&&this._initted&&(this._lock=u=1,this.render(Xt(M*E),!0).invalidate()._lock=0)}if(!this._initted){if(T0(this,p?s:g,u,a,_))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==y))return this;if(h!==this._dur)return this.render(s,a,u)}if(this._rEase){var w=g<c;if(w!==this._inv){var U=w?c:h-c;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=U?(w?-1:1)/U:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=D=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=D=this._ease(g/h);if(this._from&&(this.ratio=D=1-D),this._tTime=_,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&_&&!a&&!y&&(li(this,"onStart"),this._tTime!==_))return this;for(S=this._pt;S;)S.r(D,S.d),S=S._next;b&&b.render(s<0?s:b._dur*b._ease(g/this._dur),a,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&Gd(this,s,a,u),li(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!a&&this.parent&&li(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(p&&!this._onUpdate&&Gd(this,s,!0,!0),(s||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&os(this,1),!a&&!(p&&!c)&&(_||c||x)&&(li(this,_===d?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,u,c,d){il||ai.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Jh(this,h),p=this._ease(h/this._dur),_S(this,s,a,u,c,p,h,d)?this.resetTo(s,a,u,c,1):(pc(this,0),this.parent||S0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?ja(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Jr&&Jr.vars.overwrite!==!0)._first||ja(this),this.parent&&u!==this.timeline.totalDuration()&&Ko(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=s?Ti(s):c,h=this._ptLookup,p=this._pt,_,g,S,E,M,y,x;if((!a||a==="all")&&Yy(c,d))return a==="all"&&(this._pt=0),ja(this);for(_=this._op=this._op||[],a!=="all"&&(mn(a)&&(M={},jn(a,function(D){return M[D]=1}),a=M),a=gS(c,a)),x=c.length;x--;)if(~d.indexOf(c[x])){g=h[x],a==="all"?(_[x]=a,E=g,S={}):(S=_[x]=_[x]||{},E=a);for(M in E)y=g&&g[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&dc(this,y,"_pt"),delete g[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&p&&ja(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return Za(1,arguments)},e.delayedCall=function(s,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,a,u){return Za(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,u){return Yt.killTweensOf(s,a,u)},e})(rl);di(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jn("staggerTo,staggerFrom,staggerFromTo",function(o){sn[o]=function(){var e=new Xn,t=Xd.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var ep=function(e,t,i){return e[t]=i},H0=function(e,t,i){return e[t](i)},xS=function(e,t,i,s){return e[t](s.fp,i)},yS=function(e,t,i){return e.setAttribute(t,i)},tp=function(e,t){return Kt(e[t])?H0:Wh(e[t])&&e.setAttribute?yS:ep},G0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},SS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},W0=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},np=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},MS=function(e,t,i,s){for(var a=this._pt,u;a;)u=a._next,a.p===s&&a.modifier(e,t,i),a=u},ES=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?dc(this,t,"_pt"):t.dep||(i=1),t=s;return!i},TS=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},X0=function(e){for(var t=e._pt,i,s,a,u;t;){for(i=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=a},qn=(function(){function o(t,i,s,a,u,c,d,h,p){this.t=i,this.s=a,this.c=u,this.p=s,this.r=c||G0,this.d=d||this,this.set=h||ep,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=TS,this.m=i,this.mt=a,this.tween=s},o})();jn($h+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return qh[o]=1});fi.TweenMax=fi.TweenLite=sn;fi.TimelineLite=fi.TimelineMax=Xn;Yt=new Xn({sortChildren:!1,defaults:Ja,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ci.stringFilter=F0;var js=[],$u={},wS=[],J_=0,AS=0,ad=function(e){return($u[e]||wS).map(function(t){return t()})},$d=function(){var e=Date.now(),t=[];e-J_>2&&(ad("matchMediaInit"),js.forEach(function(i){var s=i.queries,a=i.conditions,u,c,d,h;for(c in s)u=Xi.matchMedia(s[c]).matches,u&&(d=1),u!==a[c]&&(a[c]=u,h=1);h&&(i.revert(),d&&t.push(i))}),ad("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),J_=e,ad("matchMedia"))},Y0=(function(){function o(t,i){this.selector=i&&Yd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=AS++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,s,a){Kt(i)&&(a=s,s=i,i=Kt);var u=this,c=function(){var h=Ht,p=u.selector,_;return h&&h!==u&&h.data.push(u),a&&(u.selector=Yd(a)),Ht=u,_=s.apply(u,arguments),Kt(_)&&u._r.push(_),Ht=h,u.selector=p,u.isReverted=!1,_};return u.last=c,i===Kt?c(u,function(d){return u.add(null,d)}):i?u[i]=c:c},e.ignore=function(i){var s=Ht;Ht=null,i(this),Ht=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof o?i.push.apply(i,s.getTweens()):s instanceof sn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var a=this;if(i?(function(){for(var c=a.getTweens(),d=a.data.length,h;d--;)h=a.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,_){return _.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),d=a.data.length;d--;)h=a.data[d],h instanceof Xn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof sn)&&h.revert&&h.revert(i);a._r.forEach(function(p){return p(i,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=js.length;u--;)js[u].id===this.id&&js.splice(u,1)},e.revert=function(i){this.kill(i||{})},o})(),CS=(function(){function o(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=o.prototype;return e.add=function(i,s,a){Ki(i)||(i={matches:i});var u=new Y0(0,a||this.scope),c=u.conditions={},d,h,p;Ht&&!u.selector&&(u.selector=Ht.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?p=1:(d=Xi.matchMedia(i[h]),d&&(js.indexOf(u)<0&&js.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener($d):d.addEventListener("change",$d)));return p&&s(u,function(_){return u.add(null,_)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},o})(),oc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return U0(s)})},timeline:function(e){return new Xn(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,s){mn(e)&&(e=Ti(e)[0]);var a=Ws(e||{}).get,u=i?y0:x0;return i==="native"&&(i=""),e&&(t?u((oi[t]&&oi[t].get||a)(e,t,i,s)):function(c,d,h){return u((oi[c]&&oi[c].get||a)(e,c,d,h))})},quickSetter:function(e,t,i){if(e=Ti(e),e.length>1){var s=e.map(function(p){return Jn.quickSetter(p,t,i)}),a=s.length;return function(p){for(var _=a;_--;)s[_](p)}}e=e[0]||{};var u=oi[t],c=Ws(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var _=new u;Bo._pt=0,_.init(e,i?p+i:p,Bo,0,[e]),_.render(1,_),Bo._pt&&np(1,Bo)}:c.set(e,d);return u?h:function(p){return h(e,d,i?p+i:p,c,1)}},quickTo:function(e,t,i){var s,a=Jn.to(e,di((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,p){return a.resetTo(t,d,h,p)};return u.tween=a,u},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ys(e.ease,Ja.ease)),q_(Ja,e||{})},config:function(e){return q_(ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,a=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!oi[c]&&!fi[c]&&el(t+" effect requires "+c+" plugin.")}),id[t]=function(c,d,h){return i(Ti(c),di(d||{},a),h)},u&&(Xn.prototype[t]=function(c,d,h){return this.add(id[t](c,Ki(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){gt[e]=Ys(t)},parseEase:function(e,t){return arguments.length?Ys(e,t):gt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Xn(e),s,a;for(i.smoothChildTiming=Yn(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,s=Yt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof sn&&s.vars.onComplete===s._targets[0]))&&ji(i,s,s._start-s._delay),s=a;return ji(Yt,i,0),i},context:function(e,t){return e?new Y0(e,t):Ht},matchMedia:function(e){return new CS(e)},matchMediaRefresh:function(){return js.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||$d()},addEventListener:function(e,t){var i=$u[e]||($u[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=$u[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:rS,wrapYoyo:sS,distribute:C0,random:P0,snap:R0,normalize:iS,getUnit:Rn,clamp:Jy,splitColor:I0,toArray:Ti,selector:Yd,mapRange:D0,pipe:tS,unitize:nS,interpolate:oS,shuffle:A0},install:p0,effects:id,ticker:ai,updateRoot:Xn.updateRoot,plugins:oi,globalTimeline:Yt,core:{PropTween:qn,globals:m0,Tween:sn,Timeline:Xn,Animation:rl,getCache:Ws,_removeLinkedListItem:dc,reverting:function(){return xn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return Gh=e}}};jn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return oc[o]=sn[o]});ai.add(Xn.updateRoot);Bo=oc.to({},{duration:0});var RS=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},PS=function(e,t){var i=e._targets,s,a,u;for(s in t)for(a=i.length;a--;)u=e._ptLookup[a][s],u&&(u=u.d)&&(u._pt&&(u=RS(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[a],s))},ld=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,a,u){u._onInit=function(c){var d,h;if(mn(a)&&(d={},jn(a,function(p){return d[p]=1}),a=d),t){d={};for(h in a)d[h]=t(a[h]);a=d}PS(c,a)}}}},Jn=oc.registerPlugin({name:"attr",init:function(e,t,i,s,a){var u,c,d;this.tween=i;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],s,a,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)xn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ld("roundProps",jd),ld("modifiers"),ld("snap",R0))||oc;sn.version=Xn.version=Jn.version="3.15.0";h0=1;Xh()&&Zo();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var eg,es,Go,ip,Vs,tg,rp,bS=function(){return typeof window<"u"},Sr={},Fs=180/Math.PI,Wo=Math.PI/180,Eo=Math.atan2,ng=1e8,sp=/([A-Z])/g,DS=/(left|right|width|margin|padding|x)/i,LS=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},US=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},NS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FS=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},j0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},q0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},OS=function(e,t,i){return e.style[t]=i},kS=function(e,t,i){return e.style.setProperty(t,i)},zS=function(e,t,i){return e._gsap[t]=i},BS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},VS=function(e,t,i,s,a){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(a,u)},HS=function(e,t,i,s,a){var u=e._gsap;u[t]=i,u.renderTransform(a,u)},jt="transform",$n=jt+"Origin",GS=function o(e,t){var i=this,s=this.target,a=s.style,u=s._gsap;if(e in Sr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=pr(s,c)}):this.tfm[e]=u.x?u[e]:pr(s,e),e===$n&&(this.tfm.zOrigin=u.zOrigin);else return qi.transform.split(",").forEach(function(c){return o.call(i,c,t)});if(this.props.indexOf(jt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=jt}(a||t)&&this.props.push(e,t,a[e])},$0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},WS=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(sp,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=rp(),(!a||!a.isStart)&&!i[jt]&&($0(i),s.zOrigin&&i[$n]&&(i[$n]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},K0=function(e,t){var i={target:e,props:[],revert:WS,save:GS};return e._gsap||Jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},Z0,Zd=function(e,t){var i=es.createElementNS?es.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):es.createElement(e);return i&&i.style?i:es.createElement(e)},ui=function o(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(sp,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&o(e,Qo(t)||t,1)||""},ig="O,Moz,ms,Ms,Webkit".split(","),Qo=function(e,t,i){var s=t||Vs,a=s.style,u=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(ig[u]+e in a););return u<0?null:(u===3?"ms":u>=0?ig[u]:"")+e},Qd=function(){bS()&&window.document&&(eg=window,es=eg.document,Go=es.documentElement,Vs=Zd("div")||{style:{}},Zd("div"),jt=Qo(jt),$n=jt+"Origin",Vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Z0=!!Qo("perspective"),rp=Jn.core.reverting,ip=1)},rg=function(e){var t=e.ownerSVGElement,i=Zd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",i.appendChild(s),Go.appendChild(i);try{a=s.getBBox()}catch{}return i.removeChild(s),Go.removeChild(i),a},sg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Q0=function(e){var t,i;try{t=e.getBBox()}catch{t=rg(e),i=1}return t&&(t.width||t.height)||i||(t=rg(e)),t&&!t.width&&!t.x&&!t.y?{x:+sg(e,["x","cx","x1"])||0,y:+sg(e,["y","cy","y1"])||0,width:0,height:0}:t},J0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Q0(e))},as=function(e,t){if(t){var i=e.style,s;t in Sr&&t!==$n&&(t=jt),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(sp,"-$1").toLowerCase())):i.removeAttribute(t)}},ts=function(e,t,i,s,a,u){var c=new qn(e._pt,t,i,0,1,u?q0:j0);return e._pt=c,c.b=s,c.e=a,e._props.push(i),c},og={deg:1,rad:1,turn:1},XS={grid:1,flex:1},ls=function o(e,t,i,s){var a=parseFloat(i)||0,u=(i+"").trim().substr((a+"").length)||"px",c=Vs.style,d=DS.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),_=100,g=s==="px",S=s==="%",E,M,y,x;if(s===u||!a||og[s]||og[u])return a;if(u!=="px"&&!g&&(a=o(e,t,i,"px")),x=e.getCTM&&J0(e),(S||u==="%")&&(Sr[t]||~t.indexOf("adius")))return E=x?e.getBBox()[d?"width":"height"]:e[p],Jt(S?a/E*_:a/100*E);if(c[d?"width":"height"]=_+(g?u:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===es||!M.appendChild)&&(M=es.body),y=M._gsap,y&&S&&y.width&&d&&y.time===ai.time&&!y.uncache)return Jt(a/y.width*_);if(S&&(t==="height"||t==="width")){var D=e.style[t];e.style[t]=_+s,E=e[p],D?e.style[t]=D:as(e,t)}else(S||u==="%")&&!XS[ui(M,"display")]&&(c.position=ui(e,"position")),M===e&&(c.position="static"),M.appendChild(Vs),E=Vs[p],M.removeChild(Vs),c.position="absolute";return d&&S&&(y=Ws(M),y.time=ai.time,y.width=M[p]),Jt(g?E*a/_:E&&a?_/E*a:0)},pr=function(e,t,i,s){var a;return ip||Qd(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Sr[t]&&t!=="transform"?(a=ol(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:lc(ui(e,$n))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=ac[t]&&ac[t](e,t,i)||ui(e,t)||g0(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?ls(e,t,a,i)+i:a},YS=function(e,t,i,s){if(!i||i==="none"){var a=Qo(t,e,1),u=a&&ui(e,a,1);u&&u!==i?(t=a,i=u):t==="borderColor"&&(i=ui(e,"borderTopColor"))}var c=new qn(this._pt,e.style,t,0,1,W0),d=0,h=0,p,_,g,S,E,M,y,x,D,b,w,U;if(c.b=i,c.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=ui(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=ui(e,t)||s,M?e.style[t]=M:as(e,t)),p=[i,s],F0(p),i=p[0],s=p[1],g=i.match(zo)||[],U=s.match(zo)||[],U.length){for(;_=zo.exec(s);)y=_[0],D=s.substring(d,_.index),E?E=(E+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(E=1),y!==(M=g[h++]||"")&&(S=parseFloat(M)||0,w=M.substr((S+"").length),y.charAt(1)==="="&&(y=Ho(S,y)+w),x=parseFloat(y),b=y.substr((x+"").length),d=zo.lastIndex-b.length,b||(b=b||ci.units[t]||w,d===s.length&&(s+=b,c.e+=b)),w!==b&&(S=ls(e,t,M,b)||0),c._pt={_next:c._pt,p:D||h===1?D:",",s:S,c:x-S,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<s.length?s.substring(d,s.length):""}else c.r=t==="display"&&s==="none"?q0:j0;return d0.test(s)&&(c.e=0),this._pt=c,c},ag={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jS=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=ag[i]||i,t[1]=ag[s]||s,t.join(" ")},qS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,a=t.u,u=i._gsap,c,d,h;if(a==="all"||a===!0)s.cssText="",d=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],Sr[c]&&(d=1,c=c==="transformOrigin"?$n:jt),as(i,c);d&&(as(i,jt),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ol(i,1),u.uncache=1,$0(s)))}},ac={clearProps:function(e,t,i,s,a){if(a.data!=="isFromStart"){var u=e._pt=new qn(e._pt,t,i,0,0,qS);return u.u=s,u.pr=-10,u.tween=a,e._props.push(i),1}}},sl=[1,0,0,1,0,0],ev={},tv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},lg=function(e){var t=ui(e,jt);return tv(t)?sl:t.substr(7).match(f0).map(Jt)},op=function(e,t){var i=e._gsap||Ws(e),s=e.style,a=lg(e),u,c,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,a=[d.a,d.b,d.c,d.d,d.e,d.f],a.join(",")==="1,0,0,1,0,0"?sl:a):(a===sl&&!e.offsetParent&&e!==Go&&!i.svg&&(d=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,Go.appendChild(e)),a=lg(e),d?s.display=d:as(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):Go.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Jd=function(e,t,i,s,a,u){var c=e._gsap,d=a||op(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,_=c.xOffset||0,g=c.yOffset||0,S=d[0],E=d[1],M=d[2],y=d[3],x=d[4],D=d[5],b=t.split(" "),w=parseFloat(b[0])||0,U=parseFloat(b[1])||0,N,L,O,A;i?d!==sl&&(L=S*y-E*M)&&(O=w*(y/L)+U*(-M/L)+(M*D-y*x)/L,A=w*(-E/L)+U*(S/L)-(S*D-E*x)/L,w=O,U=A):(N=Q0(e),w=N.x+(~b[0].indexOf("%")?w/100*N.width:w),U=N.y+(~(b[1]||b[0]).indexOf("%")?U/100*N.height:U)),s||s!==!1&&c.smooth?(x=w-h,D=U-p,c.xOffset=_+(x*S+D*M)-x,c.yOffset=g+(x*E+D*y)-D):c.xOffset=c.yOffset=0,c.xOrigin=w,c.yOrigin=U,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!i,e.style[$n]="0px 0px",u&&(ts(u,c,"xOrigin",h,w),ts(u,c,"yOrigin",p,U),ts(u,c,"xOffset",_,c.xOffset),ts(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",w+" "+U)},ol=function(e,t){var i=e._gsap||new k0(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,a=i.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=ui(e,$n)||"0",p,_,g,S,E,M,y,x,D,b,w,U,N,L,O,A,C,z,ee,j,oe,ue,ne,re,B,ce,ae,k,Q,De,$,fe;return p=_=g=M=y=x=D=b=w=0,S=E=1,i.svg=!!(e.getCTM&&J0(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[jt]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[jt]!=="none"?d[jt]:"")),s.scale=s.rotate=s.translate="none"),L=op(e,i.svg),i.svg&&(i.uncache?(B=e.getBBox(),h=i.xOrigin-B.x+"px "+(i.yOrigin-B.y)+"px",re=""):re=!t&&e.getAttribute("data-svg-origin"),Jd(e,re||h,!!re||i.originIsAbsolute,i.smooth!==!1,L)),U=i.xOrigin||0,N=i.yOrigin||0,L!==sl&&(z=L[0],ee=L[1],j=L[2],oe=L[3],p=ue=L[4],_=ne=L[5],L.length===6?(S=Math.sqrt(z*z+ee*ee),E=Math.sqrt(oe*oe+j*j),M=z||ee?Eo(ee,z)*Fs:0,D=j||oe?Eo(j,oe)*Fs+M:0,D&&(E*=Math.abs(Math.cos(D*Wo))),i.svg&&(p-=U-(U*z+N*j),_-=N-(U*ee+N*oe))):(fe=L[6],De=L[7],ae=L[8],k=L[9],Q=L[10],$=L[11],p=L[12],_=L[13],g=L[14],O=Eo(fe,Q),y=O*Fs,O&&(A=Math.cos(-O),C=Math.sin(-O),re=ue*A+ae*C,B=ne*A+k*C,ce=fe*A+Q*C,ae=ue*-C+ae*A,k=ne*-C+k*A,Q=fe*-C+Q*A,$=De*-C+$*A,ue=re,ne=B,fe=ce),O=Eo(-j,Q),x=O*Fs,O&&(A=Math.cos(-O),C=Math.sin(-O),re=z*A-ae*C,B=ee*A-k*C,ce=j*A-Q*C,$=oe*C+$*A,z=re,ee=B,j=ce),O=Eo(ee,z),M=O*Fs,O&&(A=Math.cos(O),C=Math.sin(O),re=z*A+ee*C,B=ue*A+ne*C,ee=ee*A-z*C,ne=ne*A-ue*C,z=re,ue=B),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),S=Jt(Math.sqrt(z*z+ee*ee+j*j)),E=Jt(Math.sqrt(ne*ne+fe*fe)),O=Eo(ue,ne),D=Math.abs(O)>2e-4?O*Fs:0,w=$?1/($<0?-$:$):0),i.svg&&(re=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!tv(ui(e,jt)),re&&e.setAttribute("transform",re))),Math.abs(D)>90&&Math.abs(D)<270&&(a?(S*=-1,D+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,D+=D<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=_-((i.yPercent=_&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=g+u,i.scaleX=Jt(S),i.scaleY=Jt(E),i.rotation=Jt(M)+c,i.rotationX=Jt(y)+c,i.rotationY=Jt(x)+c,i.skewX=D+c,i.skewY=b+c,i.transformPerspective=w+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[$n]=lc(h)),i.xOffset=i.yOffset=0,i.force3D=ci.force3D,i.renderTransform=i.svg?KS:Z0?nv:$S,i.uncache=0,i},lc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ud=function(e,t,i){var s=Rn(t);return Jt(parseFloat(t)+parseFloat(ls(e,"x",i+"px",s)))+s},$S=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,nv(e,t)},Rs="0deg",Va="0px",Ps=") ",nv=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,u=i.x,c=i.y,d=i.z,h=i.rotation,p=i.rotationY,_=i.rotationX,g=i.skewX,S=i.skewY,E=i.scaleX,M=i.scaleY,y=i.transformPerspective,x=i.force3D,D=i.target,b=i.zOrigin,w="",U=x==="auto"&&e&&e!==1||x===!0;if(b&&(_!==Rs||p!==Rs)){var N=parseFloat(p)*Wo,L=Math.sin(N),O=Math.cos(N),A;N=parseFloat(_)*Wo,A=Math.cos(N),u=ud(D,u,L*A*-b),c=ud(D,c,-Math.sin(N)*-b),d=ud(D,d,O*A*-b+b)}y!==Va&&(w+="perspective("+y+Ps),(s||a)&&(w+="translate("+s+"%, "+a+"%) "),(U||u!==Va||c!==Va||d!==Va)&&(w+=d!==Va||U?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Ps),h!==Rs&&(w+="rotate("+h+Ps),p!==Rs&&(w+="rotateY("+p+Ps),_!==Rs&&(w+="rotateX("+_+Ps),(g!==Rs||S!==Rs)&&(w+="skew("+g+", "+S+Ps),(E!==1||M!==1)&&(w+="scale("+E+", "+M+Ps),D.style[jt]=w||"translate(0, 0)"},KS=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,u=i.x,c=i.y,d=i.rotation,h=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,S=i.target,E=i.xOrigin,M=i.yOrigin,y=i.xOffset,x=i.yOffset,D=i.forceCSS,b=parseFloat(u),w=parseFloat(c),U,N,L,O,A;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=Wo,h*=Wo,U=Math.cos(d)*_,N=Math.sin(d)*_,L=Math.sin(d-h)*-g,O=Math.cos(d-h)*g,h&&(p*=Wo,A=Math.tan(h-p),A=Math.sqrt(1+A*A),L*=A,O*=A,p&&(A=Math.tan(p),A=Math.sqrt(1+A*A),U*=A,N*=A)),U=Jt(U),N=Jt(N),L=Jt(L),O=Jt(O)):(U=_,O=g,N=L=0),(b&&!~(u+"").indexOf("px")||w&&!~(c+"").indexOf("px"))&&(b=ls(S,"x",u,"px"),w=ls(S,"y",c,"px")),(E||M||y||x)&&(b=Jt(b+E-(E*U+M*L)+y),w=Jt(w+M-(E*N+M*O)+x)),(s||a)&&(A=S.getBBox(),b=Jt(b+s/100*A.width),w=Jt(w+a/100*A.height)),A="matrix("+U+","+N+","+L+","+O+","+b+","+w+")",S.setAttribute("transform",A),D&&(S.style[jt]=A)},ZS=function(e,t,i,s,a){var u=360,c=mn(a),d=parseFloat(a)*(c&&~a.indexOf("rad")?Fs:1),h=d-s,p=s+h+"deg",_,g;return c&&(_=a.split("_")[1],_==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),_==="cw"&&h<0?h=(h+u*ng)%u-~~(h/u)*u:_==="ccw"&&h>0&&(h=(h-u*ng)%u-~~(h/u)*u)),e._pt=g=new qn(e._pt,t,i,s,h,US),g.e=p,g.u="deg",e._props.push(i),g},ug=function(e,t){for(var i in t)e[i]=t[i];return e},QS=function(e,t,i){var s=ug({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,d,h,p,_,g,S,E;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[jt]=t,c=ol(i,1),as(i,jt),i.setAttribute("transform",h)):(h=getComputedStyle(i)[jt],u[jt]=t,c=ol(i,1),u[jt]=h);for(d in Sr)h=s[d],p=c[d],h!==p&&a.indexOf(d)<0&&(S=Rn(h),E=Rn(p),_=S!==E?ls(i,d,h,E):parseFloat(h),g=parseFloat(p),e._pt=new qn(e._pt,c,d,_,g-_,Kd),e._pt.u=E||0,e._props.push(d));ug(c,s)};jn("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",s="Bottom",a="Left",u=(e<3?[t,i,s,a]:[t+a,t+i,s+i,s+a]).map(function(c){return e<2?o+c:"border"+c+o});ac[e>1?"border"+o:o]=function(c,d,h,p,_){var g,S;if(arguments.length<4)return g=u.map(function(E){return pr(c,E,h)}),S=g.join(" "),S.split(g[0]).length===5?g[0]:S;g=(p+"").split(" "),S={},u.forEach(function(E,M){return S[E]=g[M]=g[M]||g[(M-1)/2|0]}),c.init(d,S,_)}});var iv={name:"css",register:Qd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,a){var u=this._props,c=e.style,d=i.vars.startAt,h,p,_,g,S,E,M,y,x,D,b,w,U,N,L,O,A;ip||Qd(),this.styles=this.styles||K0(e),O=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(p=t[M],!(oi[M]&&z0(M,t,i,s,e,a)))){if(S=typeof p,E=ac[M],S==="function"&&(p=p.call(i,s,e,a),S=typeof p),S==="string"&&~p.indexOf("random(")&&(p=nl(p)),E)E(this,e,M,p,i)&&(L=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",is.lastIndex=0,is.test(h)||(y=Rn(h),x=Rn(p),x?y!==x&&(h=ls(e,M,h,x)+x):y&&(p+=y)),this.add(c,"setProperty",h,p,s,a,0,0,M),u.push(M),O.push(M,0,c[M]);else if(S!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(i,s,e,a):d[M],mn(h)&&~h.indexOf("random(")&&(h=nl(h)),Rn(h+"")||h==="auto"||(h+=ci.units[M]||Rn(pr(e,M))||""),(h+"").charAt(1)==="="&&(h=pr(e,M))):h=pr(e,M),g=parseFloat(h),D=S==="string"&&p.charAt(1)==="="&&p.substr(0,2),D&&(p=p.substr(2)),_=parseFloat(p),M in qi&&(M==="autoAlpha"&&(g===1&&pr(e,"visibility")==="hidden"&&_&&(g=0),O.push("visibility",0,c.visibility),ts(this,c,"visibility",g?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=qi[M],~M.indexOf(",")&&(M=M.split(",")[0]))),b=M in Sr,b){if(this.styles.save(M),A=p,S==="string"&&p.substring(0,6)==="var(--"){if(p=ui(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=p,p=ui(e,"perspective"),C?e.style.perspective=C:as(e,"perspective")}_=parseFloat(p)}if(w||(U=e._gsap,U.renderTransform&&!t.parseTransform||ol(e,t.parseTransform),N=t.smoothOrigin!==!1&&U.smooth,w=this._pt=new qn(this._pt,c,jt,0,1,U.renderTransform,U,0,-1),w.dep=1),M==="scale")this._pt=new qn(this._pt,U,"scaleY",U.scaleY,(D?Ho(U.scaleY,D+_):_)-U.scaleY||0,Kd),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){O.push($n,0,c[$n]),p=jS(p),U.svg?Jd(e,p,0,N,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==U.zOrigin&&ts(this,U,"zOrigin",U.zOrigin,x),ts(this,c,M,lc(h),lc(p)));continue}else if(M==="svgOrigin"){Jd(e,p,1,N,0,this);continue}else if(M in ev){ZS(this,U,M,g,D?Ho(g,D+p):p);continue}else if(M==="smoothOrigin"){ts(this,U,"smooth",U.smooth,p);continue}else if(M==="force3D"){U[M]=p;continue}else if(M==="transform"){QS(this,p,e);continue}}else M in c||(M=Qo(M)||M);if(b||(_||_===0)&&(g||g===0)&&!LS.test(p)&&M in c)y=(h+"").substr((g+"").length),_||(_=0),x=Rn(p)||(M in ci.units?ci.units[M]:y),y!==x&&(g=ls(e,M,h,x)),this._pt=new qn(this._pt,b?U:c,M,g,(D?Ho(g,D+_):_)-g,!b&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?FS:Kd),this._pt.u=x||0,b&&A!==p?(this._pt.b=h,this._pt.e=A,this._pt.r=NS):y!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=IS);else if(M in c)YS.call(this,e,M,h,D?D+p:p);else if(M in e)this.add(e,M,h||e[M],D?D+p:p,s,a);else if(M!=="parseTransform"){jh(M,p);continue}b||(M in c?O.push(M,0,c[M]):typeof e[M]=="function"?O.push(M,2,e[M]()):O.push(M,1,h||e[M])),u.push(M)}}L&&X0(this)},render:function(e,t){if(t.tween._time||!rp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:pr,aliases:qi,getSetter:function(e,t,i){var s=qi[t];return s&&s.indexOf(",")<0&&(t=s),t in Sr&&t!==$n&&(e._gsap.x||pr(e,"x"))?i&&tg===i?t==="scale"?BS:zS:(tg=i||{})&&(t==="scale"?VS:HS):e.style&&!Wh(e.style[t])?OS:~t.indexOf("-")?kS:tp(e,t)},core:{_removeProperty:as,_getMatrix:op}};Jn.utils.checkPrefix=Qo;Jn.core.getStyleSaver=K0;(function(o,e,t,i){var s=jn(o+","+e+","+t,function(a){Sr[a]=1});jn(e,function(a){ci.units[a]="deg",ev[a]=1}),qi[s[13]]=o+","+e,jn(i,function(a){var u=a.split(":");qi[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ci.units[o]="px"});Jn.registerPlugin(iv);var Ni=Jn.registerPlugin(iv)||Jn;Ni.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="171",JS=0,cg=1,eM=2,rv=1,tM=2,dr=3,us=0,Kn=1,mr=2,rs=0,Xo=1,fg=2,dg=3,hg=4,nM=5,zs=100,iM=101,rM=102,sM=103,oM=104,aM=200,lM=201,uM=202,cM=203,eh=204,th=205,fM=206,dM=207,hM=208,pM=209,mM=210,_M=211,gM=212,vM=213,xM=214,nh=0,ih=1,rh=2,Jo=3,sh=4,oh=5,ah=6,lh=7,sv=0,yM=1,SM=2,ss=0,MM=1,EM=2,TM=3,wM=4,AM=5,CM=6,RM=7,ov=300,ea=301,ta=302,uh=303,ch=304,mc=306,fh=1e3,Hs=1001,dh=1002,ki=1003,PM=1004,Eu=1005,$i=1006,cd=1007,Gs=1008,Mr=1009,av=1010,lv=1011,al=1012,lp=1013,$s=1014,_r=1015,ul=1016,up=1017,cp=1018,na=1020,uv=35902,cv=1021,fv=1022,Oi=1023,dv=1024,hv=1025,Yo=1026,ia=1027,pv=1028,fp=1029,mv=1030,dp=1031,hp=1033,Ku=33776,Zu=33777,Qu=33778,Ju=33779,hh=35840,ph=35841,mh=35842,_h=35843,gh=36196,vh=37492,xh=37496,yh=37808,Sh=37809,Mh=37810,Eh=37811,Th=37812,wh=37813,Ah=37814,Ch=37815,Rh=37816,Ph=37817,bh=37818,Dh=37819,Lh=37820,Uh=37821,ec=36492,Ih=36494,Nh=36495,_v=36283,Fh=36284,Oh=36285,kh=36286,bM=3200,DM=3201,LM=0,UM=1,Qr="",Si="srgb",ra="srgb-linear",uc="linear",bt="srgb",To=7680,pg=519,IM=512,NM=513,FM=514,gv=515,OM=516,kM=517,zM=518,BM=519,mg=35044,_g="300 es",gr=2e3,cc=2001;class aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=Math.PI/180,zh=180/Math.PI;function cl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function _t(o,e,t){return Math.max(e,Math.min(t,o))}function VM(o,e){return(o%e+e)%e}function dd(o,e,t){return(1-t)*o+t*e}function Ha(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,t=0){It.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*s+e.x,this.y=a*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,s,a,u,c,d,h){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h)}set(e,t,i,s,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],p=i[4],_=i[7],g=i[2],S=i[5],E=i[8],M=s[0],y=s[3],x=s[6],D=s[1],b=s[4],w=s[7],U=s[2],N=s[5],L=s[8];return a[0]=u*M+c*D+d*U,a[3]=u*y+c*b+d*N,a[6]=u*x+c*w+d*L,a[1]=h*M+p*D+_*U,a[4]=h*y+p*b+_*N,a[7]=h*x+p*w+_*L,a[2]=g*M+S*D+E*U,a[5]=g*y+S*b+E*N,a[8]=g*x+S*w+E*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-i*a*p+i*c*d+s*a*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],_=p*u-c*h,g=c*d-p*a,S=h*a-u*d,E=t*_+i*g+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(s*h-p*i)*M,e[2]=(c*i-s*u)*M,e[3]=g*M,e[4]=(p*t-s*d)*M,e[5]=(s*a-c*t)*M,e[6]=S*M,e[7]=(i*d-h*t)*M,e[8]=(u*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(hd.makeScale(e,t)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new ot;function vv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function HM(){const o=fc("canvas");return o.style.display="block",o}const gg={};function ko(o){o in gg||(gg[o]=!0,console.warn(o))}function GM(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function WM(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function XM(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vg=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xg=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YM(){const o={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(s,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===bt&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===bt&&(s.r=jo(s.r),s.g=jo(s.g),s.b=jo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qr?uc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,u){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[ra]:{primaries:e,whitePoint:i,transfer:uc,toXYZ:vg,fromXYZ:xg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:vg,fromXYZ:xg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),o}const Tt=YM();function xr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function jo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let wo;class jM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wo===void 0&&(wo=fc("canvas")),wo.width=e.width,wo.height=e.height;const i=wo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=xr(a[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qM=0;class xv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(pd(s[u].image)):a.push(pd(s[u]))}else a=pd(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function pd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $M=0;class Zn extends aa{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,i=Hs,s=Hs,a=$i,u=Gs,c=Oi,d=Mr,h=Zn.DEFAULT_ANISOTROPY,p=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=cl(),this.name="",this.source=new xv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case Hs:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case Hs:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=ov;Zn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,i=0,s=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],p=d[4],_=d[8],g=d[1],S=d[5],E=d[9],M=d[2],y=d[6],x=d[10];if(Math.abs(p-g)<.01&&Math.abs(_-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+M)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,w=(S+1)/2,U=(x+1)/2,N=(p+g)/4,L=(_+M)/4,O=(E+y)/4;return b>w&&b>U?b<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(b),s=N/i,a=L/i):w>U?w<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),i=N/s,a=O/s):U<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(U),i=L/a,s=O/a),this.set(i,s,a,t),this}let D=Math.sqrt((y-E)*(y-E)+(_-M)*(_-M)+(g-p)*(g-p));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(_-M)/D,this.z=(g-p)/D,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KM extends aa{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Zn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends KM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yv extends Zn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ki,this.minFilter=ki,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZM extends Zn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ki,this.minFilter=ki,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,u,c){let d=i[s+0],h=i[s+1],p=i[s+2],_=i[s+3];const g=a[u+0],S=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=g,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(_!==M||d!==g||h!==S||p!==E){let y=1-c;const x=d*g+h*S+p*E+_*M,D=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const U=Math.sqrt(b),N=Math.atan2(U,x*D);y=Math.sin(y*N)/U,c=Math.sin(c*N)/U}const w=c*D;if(d=d*y+g*w,h=h*y+S*w,p=p*y+E*w,_=_*y+M*w,y===1-c){const U=1/Math.sqrt(d*d+h*h+p*p+_*_);d*=U,h*=U,p*=U,_*=U}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,a,u){const c=i[s],d=i[s+1],h=i[s+2],p=i[s+3],_=a[u],g=a[u+1],S=a[u+2],E=a[u+3];return e[t]=c*E+p*_+d*S-h*g,e[t+1]=d*E+p*g+h*_-c*S,e[t+2]=h*E+p*S+c*g-d*_,e[t+3]=p*E-c*_-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),p=c(s/2),_=c(a/2),g=d(i/2),S=d(s/2),E=d(a/2);switch(u){case"XYZ":this._x=g*p*_+h*S*E,this._y=h*S*_-g*p*E,this._z=h*p*E+g*S*_,this._w=h*p*_-g*S*E;break;case"YXZ":this._x=g*p*_+h*S*E,this._y=h*S*_-g*p*E,this._z=h*p*E-g*S*_,this._w=h*p*_+g*S*E;break;case"ZXY":this._x=g*p*_-h*S*E,this._y=h*S*_+g*p*E,this._z=h*p*E+g*S*_,this._w=h*p*_-g*S*E;break;case"ZYX":this._x=g*p*_-h*S*E,this._y=h*S*_+g*p*E,this._z=h*p*E-g*S*_,this._w=h*p*_+g*S*E;break;case"YZX":this._x=g*p*_+h*S*E,this._y=h*S*_+g*p*E,this._z=h*p*E-g*S*_,this._w=h*p*_-g*S*E;break;case"XZY":this._x=g*p*_-h*S*E,this._y=h*S*_-g*p*E,this._z=h*p*E+g*S*_,this._w=h*p*_+g*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],_=t[10],g=i+c+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-d)*S,this._y=(a-h)*S,this._z=(u-s)*S}else if(i>c&&i>_){const S=2*Math.sqrt(1+i-c-_);this._w=(p-d)/S,this._x=.25*S,this._y=(s+u)/S,this._z=(a+h)/S}else if(c>_){const S=2*Math.sqrt(1+c-i-_);this._w=(a-h)/S,this._x=(s+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+_-i-c);this._w=(u-s)/S,this._x=(a+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+u*c+s*h-a*d,this._y=s*p+u*d+a*c-i*h,this._z=a*p+u*h+i*d-s*c,this._w=u*p-i*c-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*i+t*this._x,this._y=S*s+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),_=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=u*_+this._w*g,this._x=i*_+this._x*g,this._y=s*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,i=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*s-c*i),p=2*(c*t-a*s),_=2*(a*i-u*t);return this.x=t+d*h+u*_-c*p,this.y=i+d*p+c*h-a*_,this.z=s+d*_+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new se,yg=new fl;class dl{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Li):Li.fromBufferAttribute(a,u),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tu.copy(i.boundingBox)),Tu.applyMatrix4(e.matrixWorld),this.union(Tu)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),wu.subVectors(this.max,Ga),Ao.subVectors(e.a,Ga),Co.subVectors(e.b,Ga),Ro.subVectors(e.c,Ga),Yr.subVectors(Co,Ao),jr.subVectors(Ro,Co),bs.subVectors(Ao,Ro);let t=[0,-Yr.z,Yr.y,0,-jr.z,jr.y,0,-bs.z,bs.y,Yr.z,0,-Yr.x,jr.z,0,-jr.x,bs.z,0,-bs.x,-Yr.y,Yr.x,0,-jr.y,jr.x,0,-bs.y,bs.x,0];return!_d(t,Ao,Co,Ro,wu)||(t=[1,0,0,0,1,0,0,0,1],!_d(t,Ao,Co,Ro,wu))?!1:(Au.crossVectors(Yr,jr),t=[Au.x,Au.y,Au.z],_d(t,Ao,Co,Ro,wu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ar=[new se,new se,new se,new se,new se,new se,new se,new se],Li=new se,Tu=new dl,Ao=new se,Co=new se,Ro=new se,Yr=new se,jr=new se,bs=new se,Ga=new se,wu=new se,Au=new se,Ds=new se;function _d(o,e,t,i,s){for(let a=0,u=o.length-3;a<=u;a+=3){Ds.fromArray(o,a);const c=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),d=e.dot(Ds),h=t.dot(Ds),p=i.dot(Ds);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const QM=new dl,Wa=new se,gd=new se;class _c{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):QM.setFromPoints(e).getCenter(i);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Wa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(gd)),this.expandByPoint(Wa.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const lr=new se,vd=new se,Cu=new se,qr=new se,xd=new se,Ru=new se,yd=new se;class Sv{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vd.copy(e).add(t).multiplyScalar(.5),Cu.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(vd);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Cu),c=qr.dot(this.direction),d=-qr.dot(Cu),h=qr.lengthSq(),p=Math.abs(1-u*u);let _,g,S,E;if(p>0)if(_=u*d-c,g=u*c-d,E=a*p,_>=0)if(g>=-E)if(g<=E){const M=1/p;_*=M,g*=M,S=_*(_+u*g+2*c)+g*(u*_+g+2*d)+h}else g=a,_=Math.max(0,-(u*g+c)),S=-_*_+g*(g+2*d)+h;else g=-a,_=Math.max(0,-(u*g+c)),S=-_*_+g*(g+2*d)+h;else g<=-E?(_=Math.max(0,-(-u*a+c)),g=_>0?-a:Math.min(Math.max(-a,-d),a),S=-_*_+g*(g+2*d)+h):g<=E?(_=0,g=Math.min(Math.max(-a,-d),a),S=g*(g+2*d)+h):(_=Math.max(0,-(u*a+c)),g=_>0?a:Math.min(Math.max(-a,-d),a),S=-_*_+g*(g+2*d)+h);else g=u>0?-a:a,_=Math.max(0,-(u*g+c)),S=-_*_+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(vd).addScaledVector(Cu,g),S}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const i=lr.dot(this.direction),s=lr.dot(lr)-i*i,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),i>u||a>s||((a>i||isNaN(i))&&(i=a),(u<s||isNaN(s))&&(s=u),_>=0?(c=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(c=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,i,s,a){xd.subVectors(t,e),Ru.subVectors(i,e),yd.crossVectors(xd,Ru);let u=this.direction.dot(yd),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;qr.subVectors(this.origin,e);const d=c*this.direction.dot(Ru.crossVectors(qr,Ru));if(d<0)return null;const h=c*this.direction.dot(xd.cross(qr));if(h<0||d+h>u)return null;const p=-c*qr.dot(yd);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,i,s,a,u,c,d,h,p,_,g,S,E,M,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h,p,_,g,S,E,M,y)}set(e,t,i,s,a,u,c,d,h,p,_,g,S,E,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=u,x[9]=c,x[13]=d,x[2]=h,x[6]=p,x[10]=_,x[14]=g,x[3]=S,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Po.setFromMatrixColumn(e,0).length(),a=1/Po.setFromMatrixColumn(e,1).length(),u=1/Po.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=u*p,S=u*_,E=c*p,M=c*_;t[0]=d*p,t[4]=-d*_,t[8]=h,t[1]=S+E*h,t[5]=g-M*h,t[9]=-c*d,t[2]=M-g*h,t[6]=E+S*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*p,S=d*_,E=h*p,M=h*_;t[0]=g+M*c,t[4]=E*c-S,t[8]=u*h,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=S*c-E,t[6]=M+g*c,t[10]=u*d}else if(e.order==="ZXY"){const g=d*p,S=d*_,E=h*p,M=h*_;t[0]=g-M*c,t[4]=-u*_,t[8]=E+S*c,t[1]=S+E*c,t[5]=u*p,t[9]=M-g*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const g=u*p,S=u*_,E=c*p,M=c*_;t[0]=d*p,t[4]=E*h-S,t[8]=g*h+M,t[1]=d*_,t[5]=M*h+g,t[9]=S*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-g*_,t[8]=E*_+S,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*_+E,t[10]=g-M*_}else if(e.order==="XZY"){const g=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-_,t[8]=h*p,t[1]=g*_+M,t[5]=u*p,t[9]=S*_-E,t[2]=E*_-S,t[6]=c*p,t[10]=M*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JM,e,eE)}lookAt(e,t,i){const s=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),$r.crossVectors(i,ri),$r.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),$r.crossVectors(i,ri)),$r.normalize(),Pu.crossVectors(ri,$r),s[0]=$r.x,s[4]=Pu.x,s[8]=ri.x,s[1]=$r.y,s[5]=Pu.y,s[9]=ri.y,s[2]=$r.z,s[6]=Pu.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],p=i[1],_=i[5],g=i[9],S=i[13],E=i[2],M=i[6],y=i[10],x=i[14],D=i[3],b=i[7],w=i[11],U=i[15],N=s[0],L=s[4],O=s[8],A=s[12],C=s[1],z=s[5],ee=s[9],j=s[13],oe=s[2],ue=s[6],ne=s[10],re=s[14],B=s[3],ce=s[7],ae=s[11],k=s[15];return a[0]=u*N+c*C+d*oe+h*B,a[4]=u*L+c*z+d*ue+h*ce,a[8]=u*O+c*ee+d*ne+h*ae,a[12]=u*A+c*j+d*re+h*k,a[1]=p*N+_*C+g*oe+S*B,a[5]=p*L+_*z+g*ue+S*ce,a[9]=p*O+_*ee+g*ne+S*ae,a[13]=p*A+_*j+g*re+S*k,a[2]=E*N+M*C+y*oe+x*B,a[6]=E*L+M*z+y*ue+x*ce,a[10]=E*O+M*ee+y*ne+x*ae,a[14]=E*A+M*j+y*re+x*k,a[3]=D*N+b*C+w*oe+U*B,a[7]=D*L+b*z+w*ue+U*ce,a[11]=D*O+b*ee+w*ne+U*ae,a[15]=D*A+b*j+w*re+U*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],_=e[6],g=e[10],S=e[14],E=e[3],M=e[7],y=e[11],x=e[15];return E*(+a*d*_-s*h*_-a*c*g+i*h*g+s*c*S-i*d*S)+M*(+t*d*S-t*h*g+a*u*g-s*u*S+s*h*p-a*d*p)+y*(+t*h*_-t*c*S-a*u*_+i*u*S+a*c*p-i*h*p)+x*(-s*c*p-t*d*_+t*c*g+s*u*_-i*u*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],_=e[9],g=e[10],S=e[11],E=e[12],M=e[13],y=e[14],x=e[15],D=_*y*h-M*g*h+M*d*S-c*y*S-_*d*x+c*g*x,b=E*g*h-p*y*h-E*d*S+u*y*S+p*d*x-u*g*x,w=p*M*h-E*_*h+E*c*S-u*M*S-p*c*x+u*_*x,U=E*_*d-p*M*d-E*c*g+u*M*g+p*c*y-u*_*y,N=t*D+i*b+s*w+a*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return e[0]=D*L,e[1]=(M*g*a-_*y*a-M*s*S+i*y*S+_*s*x-i*g*x)*L,e[2]=(c*y*a-M*d*a+M*s*h-i*y*h-c*s*x+i*d*x)*L,e[3]=(_*d*a-c*g*a-_*s*h+i*g*h+c*s*S-i*d*S)*L,e[4]=b*L,e[5]=(p*y*a-E*g*a+E*s*S-t*y*S-p*s*x+t*g*x)*L,e[6]=(E*d*a-u*y*a-E*s*h+t*y*h+u*s*x-t*d*x)*L,e[7]=(u*g*a-p*d*a+p*s*h-t*g*h-u*s*S+t*d*S)*L,e[8]=w*L,e[9]=(E*_*a-p*M*a-E*i*S+t*M*S+p*i*x-t*_*x)*L,e[10]=(u*M*a-E*c*a+E*i*h-t*M*h-u*i*x+t*c*x)*L,e[11]=(p*c*a-u*_*a-p*i*h+t*_*h+u*i*S-t*c*S)*L,e[12]=U*L,e[13]=(p*M*s-E*_*s+E*i*g-t*M*g-p*i*y+t*_*y)*L,e[14]=(E*c*s-u*M*s-E*i*d+t*M*d+u*i*y-t*c*y)*L,e[15]=(u*_*s-p*c*s+p*i*d-t*_*d-u*i*g+t*c*g)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,p*c+i,p*d-s*u,0,h*d-s*c,p*d+s*u,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,u){return this.set(1,i,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,_=c+c,g=a*h,S=a*p,E=a*_,M=u*p,y=u*_,x=c*_,D=d*h,b=d*p,w=d*_,U=i.x,N=i.y,L=i.z;return s[0]=(1-(M+x))*U,s[1]=(S+w)*U,s[2]=(E-b)*U,s[3]=0,s[4]=(S-w)*N,s[5]=(1-(g+x))*N,s[6]=(y+D)*N,s[7]=0,s[8]=(E+b)*L,s[9]=(y-D)*L,s[10]=(1-(g+M))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Po.set(s[0],s[1],s[2]).length();const u=Po.set(s[4],s[5],s[6]).length(),c=Po.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ui.copy(this);const h=1/a,p=1/u,_=1/c;return Ui.elements[0]*=h,Ui.elements[1]*=h,Ui.elements[2]*=h,Ui.elements[4]*=p,Ui.elements[5]*=p,Ui.elements[6]*=p,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,t.setFromRotationMatrix(Ui),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,s,a,u,c=gr){const d=this.elements,h=2*a/(t-e),p=2*a/(i-s),_=(t+e)/(t-e),g=(i+s)/(i-s);let S,E;if(c===gr)S=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===cc)S=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,u,c=gr){const d=this.elements,h=1/(t-e),p=1/(i-s),_=1/(u-a),g=(t+e)*h,S=(i+s)*p;let E,M;if(c===gr)E=(u+a)*_,M=-2*_;else if(c===cc)E=a*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Po=new se,Ui=new tn,JM=new se(0,0,0),eE=new se(1,1,1),$r=new se,Pu=new se,ri=new se,Sg=new tn,Mg=new fl;class Er{constructor(e=0,t=0,i=0,s=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],d=s[1],h=s[5],p=s[9],_=s[2],g=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class Mv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tE=0;const Eg=new se,bo=new fl,ur=new tn,bu=new se,Xa=new se,nE=new se,iE=new fl,Tg=new se(1,0,0),wg=new se(0,1,0),Ag=new se(0,0,1),Cg={type:"added"},rE={type:"removed"},Do={type:"childadded",child:null},Sd={type:"childremoved",child:null};class Qn extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new se,t=new Er,i=new fl,s=new se(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new ot}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.multiply(bo),this}rotateOnWorldAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.premultiply(bo),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(wg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,t){return Eg.copy(e).applyQuaternion(this.quaternion),this.position.add(Eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(wg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bu.copy(e):bu.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(Xa,bu,this.up):ur.lookAt(bu,Xa,this.up),this.quaternion.setFromRotationMatrix(ur),s&&(ur.extractRotation(s.matrixWorld),bo.setFromRotationMatrix(ur),this.quaternion.premultiply(bo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cg),Do.child=e,this.dispatchEvent(Do),Do.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rE),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cg),Do.child=e,this.dispatchEvent(Do),Do.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,nE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,iE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const _=d[h];a(e.shapes,_)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),_=u(e.shapes),g=u(e.skeletons),S=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=s,i;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Qn.DEFAULT_UP=new se(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new se,cr=new se,Md=new se,fr=new se,Lo=new se,Uo=new se,Rg=new se,Ed=new se,Td=new se,wd=new se,Ad=new en,Cd=new en,Rd=new en;class Fi{constructor(e=new se,t=new se,i=new se){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ii.subVectors(e,t),s.cross(Ii);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Ii.subVectors(s,t),cr.subVectors(i,t),Md.subVectors(e,t);const u=Ii.dot(Ii),c=Ii.dot(cr),d=Ii.dot(Md),h=cr.dot(cr),p=cr.dot(Md),_=u*h-c*c;if(_===0)return a.set(0,0,0),null;const g=1/_,S=(h*d-c*p)*g,E=(u*p-c*d)*g;return a.set(1-S-E,E,S)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,i,s,a,u,c,d){return this.getBarycoord(e,t,i,s,fr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,fr.x),d.addScaledVector(u,fr.y),d.addScaledVector(c,fr.z),d)}static getInterpolatedAttribute(e,t,i,s,a,u){return Ad.setScalar(0),Cd.setScalar(0),Rd.setScalar(0),Ad.fromBufferAttribute(e,t),Cd.fromBufferAttribute(e,i),Rd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ad,a.x),u.addScaledVector(Cd,a.y),u.addScaledVector(Rd,a.z),u}static isFrontFacing(e,t,i,s){return Ii.subVectors(i,t),cr.subVectors(e,t),Ii.cross(cr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ii.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Fi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let u,c;Lo.subVectors(s,i),Uo.subVectors(a,i),Ed.subVectors(e,i);const d=Lo.dot(Ed),h=Uo.dot(Ed);if(d<=0&&h<=0)return t.copy(i);Td.subVectors(e,s);const p=Lo.dot(Td),_=Uo.dot(Td);if(p>=0&&_<=p)return t.copy(s);const g=d*_-p*h;if(g<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(Lo,u);wd.subVectors(e,a);const S=Lo.dot(wd),E=Uo.dot(wd);if(E>=0&&S<=E)return t.copy(a);const M=S*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(i).addScaledVector(Uo,c);const y=p*E-S*_;if(y<=0&&_-p>=0&&S-E>=0)return Rg.subVectors(a,s),c=(_-p)/(_-p+(S-E)),t.copy(s).addScaledVector(Rg,c);const x=1/(y+M+g);return u=M*x,c=g*x,t.copy(i).addScaledVector(Lo,u).addScaledVector(Uo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},Du={h:0,s:0,l:0};function Pd(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=VM(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Pd(u,a,e+1/3),this.g=Pd(u,a,e),this.b=Pd(u,a,e-1/3)}return Tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Si){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){const i=Ev[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Tt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(_t(Cn.r*255,0,255))*65536+Math.round(_t(Cn.g*255,0,255))*256+Math.round(_t(Cn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,s=Cn.g,a=Cn.b,u=Math.max(i,s,a),c=Math.min(i,s,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const _=u-c;switch(h=p<=.5?_/(u+c):_/(2-u-c),u){case i:d=(s-a)/_+(s<a?6:0);break;case s:d=(a-i)/_+2;break;case a:d=(i-s)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Si){Tt.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,s=Cn.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(Du);const i=dd(Kr.h,Du.h,t),s=dd(Kr.s,Du.s,t),a=dd(Kr.l,Du.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ct;Ct.NAMES=Ev;let sE=0;class hl extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Xo,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eh&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==To&&(i.stencilFail=this.stencilFail),this.stencilZFail!==To&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==To&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tv extends hl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new se,Lu=new It;class zi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mg,this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lu.fromBufferAttribute(this,t),Lu.applyMatrix3(e),this.setXY(t,Lu.x,Lu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ha(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),s=Wn(s,this.array),a=Wn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mg&&(e.usage=this.usage),e}}class wv extends zi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Av extends zi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qs extends zi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let oE=0;const xi=new tn,bd=new Qn,Io=new se,si=new dl,Ya=new dl,pn=new se;class Tr extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?Av:wv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ot().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qs(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];si.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _c);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Ya.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(si.min,Ya.min),si.expandByPoint(pn),pn.addVectors(si.max,Ya.max),si.expandByPoint(pn)):(si.expandByPoint(Ya.min),si.expandByPoint(Ya.max))}si.getCenter(i);let s=0;for(let a=0,u=e.count;a<u;a++)pn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(pn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)pn.fromBufferAttribute(c,h),d&&(Io.fromBufferAttribute(e,h),pn.add(Io)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let O=0;O<i.count;O++)c[O]=new se,d[O]=new se;const h=new se,p=new se,_=new se,g=new It,S=new It,E=new It,M=new se,y=new se;function x(O,A,C){h.fromBufferAttribute(i,O),p.fromBufferAttribute(i,A),_.fromBufferAttribute(i,C),g.fromBufferAttribute(a,O),S.fromBufferAttribute(a,A),E.fromBufferAttribute(a,C),p.sub(h),_.sub(h),S.sub(g),E.sub(g);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(z),y.copy(_).multiplyScalar(S.x).addScaledVector(p,-E.x).multiplyScalar(z),c[O].add(M),c[A].add(M),c[C].add(M),d[O].add(y),d[A].add(y),d[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let O=0,A=D.length;O<A;++O){const C=D[O],z=C.start,ee=C.count;for(let j=z,oe=z+ee;j<oe;j+=3)x(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const b=new se,w=new se,U=new se,N=new se;function L(O){U.fromBufferAttribute(s,O),N.copy(U);const A=c[O];b.copy(A),b.sub(U.multiplyScalar(U.dot(A))).normalize(),w.crossVectors(N,A);const z=w.dot(d[O])<0?-1:1;u.setXYZW(O,b.x,b.y,b.z,z)}for(let O=0,A=D.length;O<A;++O){const C=D[O],z=C.start,ee=C.count;for(let j=z,oe=z+ee;j<oe;j+=3)L(e.getX(j+0)),L(e.getX(j+1)),L(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const s=new se,a=new se,u=new se,c=new se,d=new se,h=new se,p=new se,_=new se;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),M=e.getX(g+1),y=e.getX(g+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,y),p.subVectors(u,a),_.subVectors(s,a),p.cross(_),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),c.add(p),d.add(p),h.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),_.subVectors(s,a),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,_=c.normalized,g=new h.constructor(d.length*p);let S=0,E=0;for(let M=0,y=d.length;M<y;M++){c.isInterleavedBufferAttribute?S=d[M]*c.data.stride+c.offset:S=d[M]*p;for(let x=0;x<p;x++)g[E++]=h[S++]}return new zi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,_=h.length;p<_;p++){const g=h[p],S=e(g,i);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let _=0,g=h.length;_<g;_++){const S=h[_];p.push(S.toJSON(e.data))}p.length>0&&(s[d]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],_=a[h];for(let g=0,S=_.length;g<S;g++)p.push(_[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pg=new tn,Ls=new Sv,Uu=new _c,bg=new se,Iu=new se,Nu=new se,Fu=new se,Dd=new se,Ou=new se,Dg=new se,ku=new se;class vr extends Qn{constructor(e=new Tr,t=new Tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Ou.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],_=a[d];p!==0&&(Dd.fromBufferAttribute(_,e),u?Ou.addScaledVector(Dd,p):Ou.addScaledVector(Dd.sub(t),p))}t.add(Ou)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uu.copy(i.boundingSphere),Uu.applyMatrix4(a),Ls.copy(e.ray).recast(e.near),!(Uu.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Uu,bg)===null||Ls.origin.distanceToSquared(bg)>(e.far-e.near)**2))&&(Pg.copy(a).invert(),Ls.copy(e.ray).applyMatrix4(Pg),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,i){let s;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,g=a.groups,S=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=u[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let w=D,U=b;w<U;w+=3){const N=c.getX(w),L=c.getX(w+1),O=c.getX(w+2);s=zu(this,x,e,i,h,p,_,N,L,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(c.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const D=c.getX(y),b=c.getX(y+1),w=c.getX(y+2);s=zu(this,u,e,i,h,p,_,D,b,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=u[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let w=D,U=b;w<U;w+=3){const N=w,L=w+1,O=w+2;s=zu(this,x,e,i,h,p,_,N,L,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const D=y,b=y+1,w=y+2;s=zu(this,u,e,i,h,p,_,D,b,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function aE(o,e,t,i,s,a,u,c){let d;if(e.side===Kn?d=i.intersectTriangle(u,a,s,!0,c):d=i.intersectTriangle(s,a,u,e.side===us,c),d===null)return null;ku.copy(c),ku.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(ku);return h<t.near||h>t.far?null:{distance:h,point:ku.clone(),object:o}}function zu(o,e,t,i,s,a,u,c,d,h){o.getVertexPosition(c,Iu),o.getVertexPosition(d,Nu),o.getVertexPosition(h,Fu);const p=aE(o,e,t,i,Iu,Nu,Fu,Dg);if(p){const _=new se;Fi.getBarycoord(Dg,Iu,Nu,Fu,_),s&&(p.uv=Fi.getInterpolatedAttribute(s,c,d,h,_,new It)),a&&(p.uv1=Fi.getInterpolatedAttribute(a,c,d,h,_,new It)),u&&(p.normal=Fi.getInterpolatedAttribute(u,c,d,h,_,new se),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new se,materialIndex:0};Fi.getNormal(Iu,Nu,Fu,g.normal),p.face=g,p.barycoord=_}return p}class pl extends Tr{constructor(e=1,t=1,i=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],_=[];let g=0,S=0;E("z","y","x",-1,-1,i,t,e,u,a,0),E("z","y","x",1,-1,i,t,-e,u,a,1),E("x","z","y",1,1,e,i,t,s,u,2),E("x","z","y",1,-1,e,i,-t,s,u,3),E("x","y","z",1,-1,e,t,i,s,a,4),E("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new qs(h,3)),this.setAttribute("normal",new qs(p,3)),this.setAttribute("uv",new qs(_,2));function E(M,y,x,D,b,w,U,N,L,O,A){const C=w/L,z=U/O,ee=w/2,j=U/2,oe=N/2,ue=L+1,ne=O+1;let re=0,B=0;const ce=new se;for(let ae=0;ae<ne;ae++){const k=ae*z-j;for(let Q=0;Q<ue;Q++){const De=Q*C-ee;ce[M]=De*D,ce[y]=k*b,ce[x]=oe,h.push(ce.x,ce.y,ce.z),ce[M]=0,ce[y]=0,ce[x]=N>0?1:-1,p.push(ce.x,ce.y,ce.z),_.push(Q/L),_.push(1-ae/O),re+=1}}for(let ae=0;ae<O;ae++)for(let k=0;k<L;k++){const Q=g+k+ue*ae,De=g+k+ue*(ae+1),$=g+(k+1)+ue*(ae+1),fe=g+(k+1)+ue*ae;d.push(Q,De,fe),d.push(De,$,fe),B+=6}c.addGroup(S,B,A),S+=B,g+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Fn(o){const e={};for(let t=0;t<o.length;t++){const i=sa(o[t]);for(const s in i)e[s]=i[s]}return e}function lE(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Cv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const uE={clone:sa,merge:Fn};var cE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends hl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cE,this.fragmentShader=fE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=lE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rv extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=gr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new se,Lg=new It,Ug=new It;class Mi extends Rv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,Lg,Ug),t.subVectors(Ug,Lg)}setViewOffset(e,t,i,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fd*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const No=-90,Fo=1;class dE extends Qn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mi(No,Fo,e,t);s.layers=this.layers,this.add(s);const a=new Mi(No,Fo,e,t);a.layers=this.layers,this.add(a);const u=new Mi(No,Fo,e,t);u.layers=this.layers,this.add(u);const c=new Mi(No,Fo,e,t);c.layers=this.layers,this.add(c);const d=new Mi(No,Fo,e,t);d.layers=this.layers,this.add(d);const h=new Mi(No,Fo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===gr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(_,g,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Pv extends Zn{constructor(e,t,i,s,a,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:ea,super(e,t,i,s,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hE extends Ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Pv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pl(5,5,5),a=new cs({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kn,blending:rs});a.uniforms.tEquirect.value=t;const u=new vr(s,a),c=t.minFilter;return t.minFilter===Gs&&(t.minFilter=$i),new dE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(a)}}class pE extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ld=new se,mE=new se,_E=new ot;class Os{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ld.subVectors(i,t).cross(mE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ld),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_E.getNormalMatrix(e),s=this.coplanarPoint(Ld).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new _c,Bu=new se;class bv{constructor(e=new Os,t=new Os,i=new Os,s=new Os,a=new Os,u=new Os){this.planes=[e,t,i,s,a,u]}set(e,t,i,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gr){const i=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],d=s[3],h=s[4],p=s[5],_=s[6],g=s[7],S=s[8],E=s[9],M=s[10],y=s[11],x=s[12],D=s[13],b=s[14],w=s[15];if(i[0].setComponents(d-a,g-h,y-S,w-x).normalize(),i[1].setComponents(d+a,g+h,y+S,w+x).normalize(),i[2].setComponents(d+u,g+p,y+E,w+D).normalize(),i[3].setComponents(d-u,g-p,y-E,w-D).normalize(),i[4].setComponents(d-c,g-_,y-M,w-b).normalize(),t===gr)i[5].setComponents(d+c,g+_,y+M,w+b).normalize();else if(t===cc)i[5].setComponents(c,_,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Bu.x=s.normal.x>0?e.max.x:e.min.x,Bu.y=s.normal.y>0?e.max.y:e.min.y,Bu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dv extends hl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ig=new tn,Bh=new Sv,Vu=new _c,Hu=new se;class gE extends Qn{constructor(e=new Tr,t=new Dv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vu.copy(i.boundingSphere),Vu.applyMatrix4(s),Vu.radius+=a,e.ray.intersectsSphere(Vu)===!1)return;Ig.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(Ig);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=i.index,_=i.attributes.position;if(h!==null){const g=Math.max(0,u.start),S=Math.min(h.count,u.start+u.count);for(let E=g,M=S;E<M;E++){const y=h.getX(E);Hu.fromBufferAttribute(_,y),Ng(Hu,y,d,s,e,t,this)}}else{const g=Math.max(0,u.start),S=Math.min(_.count,u.start+u.count);for(let E=g,M=S;E<M;E++)Hu.fromBufferAttribute(_,E),Ng(Hu,E,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Ng(o,e,t,i,s,a,u){const c=Bh.distanceSqToPoint(o);if(c<t){const d=new se;Bh.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Gu extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Lv extends Zn{constructor(e,t,i,s,a,u,c,d,h,p=Yo){if(p!==Yo&&p!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Yo&&(i=$s),i===void 0&&p===ia&&(i=na),super(null,s,a,u,c,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ki,this.minFilter=d!==void 0?d:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gc extends Tr{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,p=d+1,_=e/c,g=t/d,S=[],E=[],M=[],y=[];for(let x=0;x<p;x++){const D=x*g-u;for(let b=0;b<h;b++){const w=b*_-a;E.push(w,-D,0),M.push(0,0,1),y.push(b/c),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<c;D++){const b=D+h*x,w=D+h*(x+1),U=D+1+h*(x+1),N=D+1+h*x;S.push(b,w,N),S.push(w,U,N)}this.setIndex(S),this.setAttribute("position",new qs(E,3)),this.setAttribute("normal",new qs(M,3)),this.setAttribute("uv",new qs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}class vE extends hl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xE extends hl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yE extends Rv{constructor(e=-1,t=1,i=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class SE extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Fg(o,e,t,i){const s=ME(i);switch(t){case cv:return o*e;case dv:return o*e;case hv:return o*e*2;case pv:return o*e/s.components*s.byteLength;case fp:return o*e/s.components*s.byteLength;case mv:return o*e*2/s.components*s.byteLength;case dp:return o*e*2/s.components*s.byteLength;case fv:return o*e*3/s.components*s.byteLength;case Oi:return o*e*4/s.components*s.byteLength;case hp:return o*e*4/s.components*s.byteLength;case Ku:case Zu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Qu:case Ju:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ph:case _h:return Math.max(o,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(o,8)*Math.max(e,8)/2;case gh:case vh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ec:case Ih:case Nh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case _v:case Fh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Oh:case kh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ME(o){switch(o){case Mr:case av:return{byteLength:1,components:1};case al:case lv:case ul:return{byteLength:2,components:1};case up:case cp:return{byteLength:2,components:4};case $s:case lp:case _r:return{byteLength:4,components:1};case uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uv(){let o=null,e=!1,t=null,i=null;function s(a,u){t(a,u),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function EE(o){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,_=h.byteLength,g=o.createBuffer();o.bindBuffer(d,g),o.bufferData(d,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=o.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=o.SHORT;else if(h instanceof Uint32Array)S=o.UNSIGNED_INT;else if(h instanceof Int32Array)S=o.INT;else if(h instanceof Int8Array)S=o.BYTE;else if(h instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:_}}function i(c,d,h){const p=d.array,_=d.updateRanges;if(o.bindBuffer(h,c),_.length===0)o.bufferSubData(h,0,p);else{_.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<_.length;S++){const E=_[g],M=_[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,_[g]=M)}_.length=g+1;for(let S=0,E=_.length;S<E;S++){const M=_[S];o.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:s,remove:a,update:u}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wE=`#ifdef USE_ALPHAHASH
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
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bE=`#ifdef USE_AOMAP
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
#endif`,DE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LE=`#ifdef USE_BATCHING
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
#endif`,UE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OE=`#ifdef USE_IRIDESCENCE
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
#endif`,kE=`#ifdef USE_BUMPMAP
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
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jE=`#define PI 3.141592653589793
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
} // validated`,qE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$E=`vec3 transformedNormal = objectNormal;
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
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e1="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f1=`#ifdef USE_GRADIENTMAP
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
}`,d1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m1=`uniform bool receiveShadow;
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
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S1=`PhysicalMaterial material;
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
#endif`,M1=`struct PhysicalMaterial {
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
}`,E1=`
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
#endif`,T1=`#if defined( RE_IndirectDiffuse )
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
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U1=`#if defined( USE_POINTS_UV )
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
#endif`,I1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
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
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
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
#endif`,j1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lT=`float getShadowMask() {
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
}`,uT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cT=`#ifdef USE_SKINNING
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
#endif`,fT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dT=`#ifdef USE_SKINNING
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
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_T=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gT=`#ifdef USE_TRANSMISSION
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
#endif`,vT=`#ifdef USE_TRANSMISSION
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ET=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`#include <common>
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
}`,bT=`#if DEPTH_PACKING == 3200
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
}`,DT=`#define DISTANCE
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
}`,LT=`#define DISTANCE
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
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`uniform float scale;
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
}`,FT=`uniform vec3 diffuse;
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
}`,OT=`#include <common>
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
}`,kT=`uniform vec3 diffuse;
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
}`,zT=`#define LAMBERT
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
}`,BT=`#define LAMBERT
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
}`,VT=`#define MATCAP
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
}`,HT=`#define MATCAP
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
}`,GT=`#define NORMAL
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
}`,WT=`#define NORMAL
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
}`,XT=`#define PHONG
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
}`,YT=`#define PHONG
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
}`,jT=`#define STANDARD
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
}`,qT=`#define STANDARD
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
}`,$T=`#define TOON
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
}`,KT=`#define TOON
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
}`,ZT=`uniform float size;
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
}`,QT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,ew=`uniform vec3 color;
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
}`,tw=`uniform float rotation;
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
}`,nw=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:TE,alphahash_pars_fragment:wE,alphamap_fragment:AE,alphamap_pars_fragment:CE,alphatest_fragment:RE,alphatest_pars_fragment:PE,aomap_fragment:bE,aomap_pars_fragment:DE,batching_pars_vertex:LE,batching_vertex:UE,begin_vertex:IE,beginnormal_vertex:NE,bsdfs:FE,iridescence_fragment:OE,bumpmap_pars_fragment:kE,clipping_planes_fragment:zE,clipping_planes_pars_fragment:BE,clipping_planes_pars_vertex:VE,clipping_planes_vertex:HE,color_fragment:GE,color_pars_fragment:WE,color_pars_vertex:XE,color_vertex:YE,common:jE,cube_uv_reflection_fragment:qE,defaultnormal_vertex:$E,displacementmap_pars_vertex:KE,displacementmap_vertex:ZE,emissivemap_fragment:QE,emissivemap_pars_fragment:JE,colorspace_fragment:e1,colorspace_pars_fragment:t1,envmap_fragment:n1,envmap_common_pars_fragment:i1,envmap_pars_fragment:r1,envmap_pars_vertex:s1,envmap_physical_pars_fragment:_1,envmap_vertex:o1,fog_vertex:a1,fog_pars_vertex:l1,fog_fragment:u1,fog_pars_fragment:c1,gradientmap_pars_fragment:f1,lightmap_pars_fragment:d1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:p1,lights_pars_begin:m1,lights_toon_fragment:g1,lights_toon_pars_fragment:v1,lights_phong_fragment:x1,lights_phong_pars_fragment:y1,lights_physical_fragment:S1,lights_physical_pars_fragment:M1,lights_fragment_begin:E1,lights_fragment_maps:T1,lights_fragment_end:w1,logdepthbuf_fragment:A1,logdepthbuf_pars_fragment:C1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:P1,map_fragment:b1,map_pars_fragment:D1,map_particle_fragment:L1,map_particle_pars_fragment:U1,metalnessmap_fragment:I1,metalnessmap_pars_fragment:N1,morphinstance_vertex:F1,morphcolor_vertex:O1,morphnormal_vertex:k1,morphtarget_pars_vertex:z1,morphtarget_vertex:B1,normal_fragment_begin:V1,normal_fragment_maps:H1,normal_pars_fragment:G1,normal_pars_vertex:W1,normal_vertex:X1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:j1,clearcoat_normal_fragment_maps:q1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:K1,opaque_fragment:Z1,packing:Q1,premultiplied_alpha_fragment:J1,project_vertex:eT,dithering_fragment:tT,dithering_pars_fragment:nT,roughnessmap_fragment:iT,roughnessmap_pars_fragment:rT,shadowmap_pars_fragment:sT,shadowmap_pars_vertex:oT,shadowmap_vertex:aT,shadowmask_pars_fragment:lT,skinbase_vertex:uT,skinning_pars_vertex:cT,skinning_vertex:fT,skinnormal_vertex:dT,specularmap_fragment:hT,specularmap_pars_fragment:pT,tonemapping_fragment:mT,tonemapping_pars_fragment:_T,transmission_fragment:gT,transmission_pars_fragment:vT,uv_pars_fragment:xT,uv_pars_vertex:yT,uv_vertex:ST,worldpos_vertex:MT,background_vert:ET,background_frag:TT,backgroundCube_vert:wT,backgroundCube_frag:AT,cube_vert:CT,cube_frag:RT,depth_vert:PT,depth_frag:bT,distanceRGBA_vert:DT,distanceRGBA_frag:LT,equirect_vert:UT,equirect_frag:IT,linedashed_vert:NT,linedashed_frag:FT,meshbasic_vert:OT,meshbasic_frag:kT,meshlambert_vert:zT,meshlambert_frag:BT,meshmatcap_vert:VT,meshmatcap_frag:HT,meshnormal_vert:GT,meshnormal_frag:WT,meshphong_vert:XT,meshphong_frag:YT,meshphysical_vert:jT,meshphysical_frag:qT,meshtoon_vert:$T,meshtoon_frag:KT,points_vert:ZT,points_frag:QT,shadow_vert:JT,shadow_frag:ew,sprite_vert:tw,sprite_frag:nw},Re={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Yi={basic:{uniforms:Fn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Fn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ct(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Fn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Fn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Fn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ct(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Fn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Fn([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Fn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Fn([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Fn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Fn([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Fn([Re.common,Re.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Fn([Re.lights,Re.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Yi.physical={uniforms:Fn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Wu={r:0,b:0,g:0},Is=new Er,iw=new tn;function rw(o,e,t,i,s,a,u){const c=new Ct(0);let d=a===!0?0:1,h,p,_=null,g=0,S=null;function E(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function M(b){let w=!1;const U=E(b);U===null?x(c,d):U&&U.isColor&&(x(U,1),w=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(b,w){const U=E(w);U&&(U.isCubeTexture||U.mapping===mc)?(p===void 0&&(p=new vr(new pl(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:sa(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Is.copy(w.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(iw.makeRotationFromEuler(Is)),p.material.toneMapped=Tt.getTransfer(U.colorSpace)!==bt,(_!==U||g!==U.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,_=U,g=U.version,S=o.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new vr(new gc(2,2),new cs({name:"BackgroundMaterial",uniforms:sa(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(U.colorSpace)!==bt,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||g!==U.version||S!==o.toneMapping)&&(h.material.needsUpdate=!0,_=U,g=U.version,S=o.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function x(b,w){b.getRGB(Wu,Cv(o)),i.buffers.color.setClear(Wu.r,Wu.g,Wu.b,w,u)}function D(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(b,w=1){c.set(b),d=w,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,x(c,d)},render:M,addToRenderList:y,dispose:D}}function sw(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=g(null);let a=s,u=!1;function c(C,z,ee,j,oe){let ue=!1;const ne=_(j,ee,z);a!==ne&&(a=ne,h(a.object)),ue=S(C,j,ee,oe),ue&&E(C,j,ee,oe),oe!==null&&e.update(oe,o.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,w(C,z,ee,j),oe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function d(){return o.createVertexArray()}function h(C){return o.bindVertexArray(C)}function p(C){return o.deleteVertexArray(C)}function _(C,z,ee){const j=ee.wireframe===!0;let oe=i[C.id];oe===void 0&&(oe={},i[C.id]=oe);let ue=oe[z.id];ue===void 0&&(ue={},oe[z.id]=ue);let ne=ue[j];return ne===void 0&&(ne=g(d()),ue[j]=ne),ne}function g(C){const z=[],ee=[],j=[];for(let oe=0;oe<t;oe++)z[oe]=0,ee[oe]=0,j[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ee,attributeDivisors:j,object:C,attributes:{},index:null}}function S(C,z,ee,j){const oe=a.attributes,ue=z.attributes;let ne=0;const re=ee.getAttributes();for(const B in re)if(re[B].location>=0){const ae=oe[B];let k=ue[B];if(k===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),ae===void 0||ae.attribute!==k||k&&ae.data!==k.data)return!0;ne++}return a.attributesNum!==ne||a.index!==j}function E(C,z,ee,j){const oe={},ue=z.attributes;let ne=0;const re=ee.getAttributes();for(const B in re)if(re[B].location>=0){let ae=ue[B];ae===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const k={};k.attribute=ae,ae&&ae.data&&(k.data=ae.data),oe[B]=k,ne++}a.attributes=oe,a.attributesNum=ne,a.index=j}function M(){const C=a.newAttributes;for(let z=0,ee=C.length;z<ee;z++)C[z]=0}function y(C){x(C,0)}function x(C,z){const ee=a.newAttributes,j=a.enabledAttributes,oe=a.attributeDivisors;ee[C]=1,j[C]===0&&(o.enableVertexAttribArray(C),j[C]=1),oe[C]!==z&&(o.vertexAttribDivisor(C,z),oe[C]=z)}function D(){const C=a.newAttributes,z=a.enabledAttributes;for(let ee=0,j=z.length;ee<j;ee++)z[ee]!==C[ee]&&(o.disableVertexAttribArray(ee),z[ee]=0)}function b(C,z,ee,j,oe,ue,ne){ne===!0?o.vertexAttribIPointer(C,z,ee,oe,ue):o.vertexAttribPointer(C,z,ee,j,oe,ue)}function w(C,z,ee,j){M();const oe=j.attributes,ue=ee.getAttributes(),ne=z.defaultAttributeValues;for(const re in ue){const B=ue[re];if(B.location>=0){let ce=oe[re];if(ce===void 0&&(re==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),re==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const ae=ce.normalized,k=ce.itemSize,Q=e.get(ce);if(Q===void 0)continue;const De=Q.buffer,$=Q.type,fe=Q.bytesPerElement,Me=$===o.INT||$===o.UNSIGNED_INT||ce.gpuType===lp;if(ce.isInterleavedBufferAttribute){const ve=ce.data,Te=ve.stride,Ne=ce.offset;if(ve.isInstancedInterleavedBuffer){for(let Qe=0;Qe<B.locationSize;Qe++)x(B.location+Qe,ve.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<B.locationSize;Qe++)y(B.location+Qe);o.bindBuffer(o.ARRAY_BUFFER,De);for(let Qe=0;Qe<B.locationSize;Qe++)b(B.location+Qe,k/B.locationSize,$,ae,Te*fe,(Ne+k/B.locationSize*Qe)*fe,Me)}else{if(ce.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)x(B.location+ve,ce.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,De);for(let ve=0;ve<B.locationSize;ve++)b(B.location+ve,k/B.locationSize,$,ae,k*fe,k/B.locationSize*ve*fe,Me)}}else if(ne!==void 0){const ae=ne[re];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(B.location,ae);break;case 3:o.vertexAttrib3fv(B.location,ae);break;case 4:o.vertexAttrib4fv(B.location,ae);break;default:o.vertexAttrib1fv(B.location,ae)}}}}D()}function U(){O();for(const C in i){const z=i[C];for(const ee in z){const j=z[ee];for(const oe in j)p(j[oe].object),delete j[oe];delete z[ee]}delete i[C]}}function N(C){if(i[C.id]===void 0)return;const z=i[C.id];for(const ee in z){const j=z[ee];for(const oe in j)p(j[oe].object),delete j[oe];delete z[ee]}delete i[C.id]}function L(C){for(const z in i){const ee=i[z];if(ee[C.id]===void 0)continue;const j=ee[C.id];for(const oe in j)p(j[oe].object),delete j[oe];delete ee[C.id]}}function O(){A(),u=!0,a!==s&&(a=s,h(a.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:O,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:y,disableUnusedAttributes:D}}function ow(o,e,t){let i;function s(h){i=h}function a(h,p){o.drawArrays(i,h,p),t.update(p,i,1)}function u(h,p,_){_!==0&&(o.drawArraysInstanced(i,h,p,_),t.update(p,i,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,_);let S=0;for(let E=0;E<_;E++)S+=p[E];t.update(S,i,1)}function d(h,p,_,g){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)u(h[E],p[E],g[E]);else{S.multiDrawArraysInstancedWEBGL(i,h,0,p,0,g,0,_);let E=0;for(let M=0;M<_;M++)E+=p[M]*g[M];t.update(E,i,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function aw(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(L){return!(L!==Oi&&i.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(L){const O=L===ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Mr&&i.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==_r&&!O)}function d(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=E>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:U,maxSamples:N}}function lw(o){const e=this;let t=null,i=0,s=!1,a=!1;const u=new Os,c=new ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||i!==0||s;return s=g,i=_.length,S},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,S){const E=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!s||E===null||E.length===0||a&&!y)a?p(null):h();else{const D=a?0:i,b=D*4;let w=x.clippingState||null;d.value=w,w=p(E,g,b,S);for(let U=0;U!==b;++U)w[U]=t[U];x.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,g,S,E){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=d.value,E!==!0||y===null){const x=S+M*4,D=g.matrixWorldInverse;c.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let b=0,w=S;b!==M;++b,w+=4)u.copy(_[b]).applyMatrix4(D,c),u.normal.toArray(y,w),y[w+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function uw(o){let e=new WeakMap;function t(u,c){return c===uh?u.mapping=ea:c===ch&&(u.mapping=ta),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===uh||c===ch)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new hE(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const Vo=4,Og=[.125,.215,.35,.446,.526,.582],Bs=20,Ud=new yE,kg=new Ct;let Id=null,Nd=0,Fd=0,Od=!1;const ks=(1+Math.sqrt(5))/2,Oo=1/ks,zg=[new se(-ks,Oo,0),new se(ks,Oo,0),new se(-Oo,0,ks),new se(Oo,0,ks),new se(0,ks,-Oo),new se(0,ks,Oo),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)];class Bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Id=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Nd,Fd),this._renderer.xr.enabled=Od,e.scissorTest=!1,Xu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$i,minFilter:$i,generateMipmaps:!1,type:ul,format:Oi,colorSpace:ra,depthBuffer:!1},s=Vg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cw(a)),this._blurMaterial=fw(a,e,t)}return s}_compileMaterial(e){const t=new vr(this._lodPlanes[0],e);this._renderer.compile(t,Ud)}_sceneToCubeUV(e,t,i,s){const c=new Mi(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(kg),p.toneMapping=ss,p.autoClear=!1;const S=new Tv({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),E=new vr(new pl,S);let M=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,M=!0):(S.color.copy(kg),M=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(c.up.set(0,d[x],0),c.lookAt(h[x],0,0)):D===1?(c.up.set(0,0,d[x]),c.lookAt(0,h[x],0)):(c.up.set(0,d[x],0),c.lookAt(0,0,h[x]));const b=this._cubeSize;Xu(s,D*b,x>2?b:0,b,b),p.setRenderTarget(s),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ea||e.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hg());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new vr(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;Xu(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Ud)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=zg[(s-a-1)%zg.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",a),this._halfBlur(u,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new vr(this._lodPlanes[s],h),g=h.uniforms,S=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Bs-1),M=a/E,y=isFinite(a)?1+Math.floor(p*M):Bs;y>Bs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Bs}`);const x=[];let D=0;for(let L=0;L<Bs;++L){const O=L/M,A=Math.exp(-O*O/2);x.push(A),L===0?D+=A:L<y&&(D+=2*A)}for(let L=0;L<x.length;L++)x[L]=x[L]/D;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:b}=this;g.dTheta.value=E,g.mipInt.value=b-i;const w=this._sizeLods[s],U=3*w*(s>b-Vo?s-b+Vo:0),N=4*(this._cubeSize-w);Xu(t,U,N,3*w,2*w),d.setRenderTarget(t),d.render(_,Ud)}}function cw(o){const e=[],t=[],i=[];let s=o;const a=o-Vo+1+Og.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let d=1/c;u>o-Vo?d=Og[u-o+Vo-1]:u===0&&(d=0),i.push(d);const h=1/(c-2),p=-h,_=1+h,g=[p,p,_,p,_,_,p,p,_,_,p,_],S=6,E=6,M=3,y=2,x=1,D=new Float32Array(M*E*S),b=new Float32Array(y*E*S),w=new Float32Array(x*E*S);for(let N=0;N<S;N++){const L=N%3*2/3-1,O=N>2?0:-1,A=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];D.set(A,M*E*N),b.set(g,y*E*N);const C=[N,N,N,N,N,N];w.set(C,x*E*N)}const U=new Tr;U.setAttribute("position",new zi(D,M)),U.setAttribute("uv",new zi(b,y)),U.setAttribute("faceIndex",new zi(w,x)),e.push(U),s>Vo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vg(o,e,t){const i=new Ks(o,e,t);return i.texture.mapping=mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xu(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function fw(o,e,t){const i=new Float32Array(Bs),s=new se(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pp(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Hg(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pp(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Gg(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function pp(){return`

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
	`}function dw(o){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,h=d===uh||d===ch,p=d===ea||d===ta;if(h||p){let _=e.get(c);const g=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new Bg(o)),_=h?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const S=c.image;return h&&S&&S.height>0||p&&S&&s(S)?(t===null&&(t=new Bg(o)),_=h?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",a),_.texture):null}}}return c}function s(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function hw(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ko("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function pw(o,e,t,i){const s={},a=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete s[g.id];const S=a.get(g);S&&(e.remove(S),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(_,g){return s[g.id]===!0||(g.addEventListener("dispose",u),s[g.id]=!0,t.memory.geometries++),g}function d(_){const g=_.attributes;for(const S in g)e.update(g[S],o.ARRAY_BUFFER)}function h(_){const g=[],S=_.index,E=_.attributes.position;let M=0;if(S!==null){const D=S.array;M=S.version;for(let b=0,w=D.length;b<w;b+=3){const U=D[b+0],N=D[b+1],L=D[b+2];g.push(U,N,N,L,L,U)}}else if(E!==void 0){const D=E.array;M=E.version;for(let b=0,w=D.length/3-1;b<w;b+=3){const U=b+0,N=b+1,L=b+2;g.push(U,N,N,L,L,U)}}else return;const y=new(vv(g)?Av:wv)(g,1);y.version=M;const x=a.get(_);x&&e.remove(x),a.set(_,y)}function p(_){const g=a.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&h(_)}else h(_);return a.get(_)}return{get:c,update:d,getWireframeAttribute:p}}function mw(o,e,t){let i;function s(g){i=g}let a,u;function c(g){a=g.type,u=g.bytesPerElement}function d(g,S){o.drawElements(i,S,a,g*u),t.update(S,i,1)}function h(g,S,E){E!==0&&(o.drawElementsInstanced(i,S,a,g*u,E),t.update(S,i,E))}function p(g,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,a,g,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,i,1)}function _(g,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)h(g[x]/u,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(i,S,0,a,g,0,M,0,E);let x=0;for(let D=0;D<E;D++)x+=S[D]*M[D];t.update(x,i,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function _w(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gw(o,e,t){const i=new WeakMap,s=new en;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(c);if(g===void 0||g.count!==_){let C=function(){O.dispose(),i.delete(c),c.removeEventListener("dispose",C)};var S=C;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],D=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let w=0;E===!0&&(w=1),M===!0&&(w=2),y===!0&&(w=3);let U=c.attributes.position.count*w,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const L=new Float32Array(U*N*4*_),O=new yv(L,U,N,_);O.type=_r,O.needsUpdate=!0;const A=w*4;for(let z=0;z<_;z++){const ee=x[z],j=D[z],oe=b[z],ue=U*N*4*z;for(let ne=0;ne<ee.count;ne++){const re=ne*A;E===!0&&(s.fromBufferAttribute(ee,ne),L[ue+re+0]=s.x,L[ue+re+1]=s.y,L[ue+re+2]=s.z,L[ue+re+3]=0),M===!0&&(s.fromBufferAttribute(j,ne),L[ue+re+4]=s.x,L[ue+re+5]=s.y,L[ue+re+6]=s.z,L[ue+re+7]=0),y===!0&&(s.fromBufferAttribute(oe,ne),L[ue+re+8]=s.x,L[ue+re+9]=s.y,L[ue+re+10]=s.z,L[ue+re+11]=oe.itemSize===4?s.w:1)}}g={count:_,texture:O,size:new It(U,N)},i.set(c,g),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:a}}function vw(o,e,t,i){let s=new WeakMap;function a(d){const h=i.render.frame,p=d.geometry,_=e.get(d,p);if(s.get(_)!==h&&(e.update(_),s.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return _}function u(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const Iv=new Zn,Wg=new Lv(1,1),Nv=new yv,Fv=new ZM,Ov=new Pv,Xg=[],Yg=[],jg=new Float32Array(16),qg=new Float32Array(9),$g=new Float32Array(4);function la(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Xg[s];if(a===void 0&&(a=new Float32Array(s),Xg[s]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function un(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function cn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function vc(o,e){let t=Yg[e];t===void 0&&(t=new Int32Array(e),Yg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function xw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function yw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2fv(this.addr,e),cn(t,e)}}function Sw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;o.uniform3fv(this.addr,e),cn(t,e)}}function Mw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4fv(this.addr,e),cn(t,e)}}function Ew(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;$g.set(i),o.uniformMatrix2fv(this.addr,!1,$g),cn(t,i)}}function Tw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;qg.set(i),o.uniformMatrix3fv(this.addr,!1,qg),cn(t,i)}}function ww(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;jg.set(i),o.uniformMatrix4fv(this.addr,!1,jg),cn(t,i)}}function Aw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Cw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2iv(this.addr,e),cn(t,e)}}function Rw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3iv(this.addr,e),cn(t,e)}}function Pw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4iv(this.addr,e),cn(t,e)}}function bw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Dw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2uiv(this.addr,e),cn(t,e)}}function Lw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3uiv(this.addr,e),cn(t,e)}}function Uw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4uiv(this.addr,e),cn(t,e)}}function Iw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Wg.compareFunction=gv,a=Wg):a=Iv,t.setTexture2D(e||a,s)}function Nw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fv,s)}function Fw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ov,s)}function Ow(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nv,s)}function kw(o){switch(o){case 5126:return xw;case 35664:return yw;case 35665:return Sw;case 35666:return Mw;case 35674:return Ew;case 35675:return Tw;case 35676:return ww;case 5124:case 35670:return Aw;case 35667:case 35671:return Cw;case 35668:case 35672:return Rw;case 35669:case 35673:return Pw;case 5125:return bw;case 36294:return Dw;case 36295:return Lw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Ow}}function zw(o,e){o.uniform1fv(this.addr,e)}function Bw(o,e){const t=la(e,this.size,2);o.uniform2fv(this.addr,t)}function Vw(o,e){const t=la(e,this.size,3);o.uniform3fv(this.addr,t)}function Hw(o,e){const t=la(e,this.size,4);o.uniform4fv(this.addr,t)}function Gw(o,e){const t=la(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Ww(o,e){const t=la(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Xw(o,e){const t=la(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Yw(o,e){o.uniform1iv(this.addr,e)}function jw(o,e){o.uniform2iv(this.addr,e)}function qw(o,e){o.uniform3iv(this.addr,e)}function $w(o,e){o.uniform4iv(this.addr,e)}function Kw(o,e){o.uniform1uiv(this.addr,e)}function Zw(o,e){o.uniform2uiv(this.addr,e)}function Qw(o,e){o.uniform3uiv(this.addr,e)}function Jw(o,e){o.uniform4uiv(this.addr,e)}function eA(o,e,t){const i=this.cache,s=e.length,a=vc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),cn(i,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||Iv,a[u])}function tA(o,e,t){const i=this.cache,s=e.length,a=vc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),cn(i,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Fv,a[u])}function nA(o,e,t){const i=this.cache,s=e.length,a=vc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),cn(i,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Ov,a[u])}function iA(o,e,t){const i=this.cache,s=e.length,a=vc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),cn(i,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Nv,a[u])}function rA(o){switch(o){case 5126:return zw;case 35664:return Bw;case 35665:return Vw;case 35666:return Hw;case 35674:return Gw;case 35675:return Ww;case 35676:return Xw;case 5124:case 35670:return Yw;case 35667:case 35671:return jw;case 35668:case 35672:return qw;case 35669:case 35673:return $w;case 5125:return Kw;case 36294:return Zw;case 36295:return Qw;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class sA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kw(t.type)}}class oA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rA(t.type)}}class aA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],i)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function Kg(o,e){o.seq.push(e),o.map[e.id]=e}function lA(o,e,t){const i=o.name,s=i.length;for(kd.lastIndex=0;;){const a=kd.exec(i),u=kd.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){Kg(t,h===void 0?new sA(c,o,e):new oA(c,o,e));break}else{let _=t.map[c];_===void 0&&(_=new aA(c),Kg(t,_)),t=_}}}class tc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);lA(a,u,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function Zg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const uA=37297;let cA=0;function fA(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const Qg=new ot;function dA(o){Tt._getMatrix(Qg,Tt.workingColorSpace,o);const e=`mat3( ${Qg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(o)){case uc:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Jg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+fA(o.getShaderSource(e),u)}else return s}function hA(o,e){const t=dA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pA(o,e){let t;switch(e){case MM:t="Linear";break;case EM:t="Reinhard";break;case TM:t="Cineon";break;case wM:t="ACESFilmic";break;case CM:t="AgX";break;case RM:t="Neutral";break;case AM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yu=new se;function mA(){Tt.getLuminanceCoefficients(Yu);const o=Yu.x.toFixed(4),e=Yu.y.toFixed(4),t=Yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function gA(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vA(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function $a(o){return o!==""}function e0(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(o){return o.replace(xA,SA)}const yA=new Map;function SA(o,e){let t=at[e];if(t===void 0){const i=yA.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vh(t)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(o){return o.replace(MA,EA)}function EA(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function i0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===rv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===tM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function wA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function CA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case sv:e="ENVMAP_BLENDING_MULTIPLY";break;case yM:e="ENVMAP_BLENDING_MIX";break;case SM:e="ENVMAP_BLENDING_ADD";break}return e}function RA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PA(o,e,t,i){const s=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=TA(t),h=wA(t),p=AA(t),_=CA(t),g=RA(t),S=_A(t),E=gA(a),M=s.createProgram();let y,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter($a).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter($a).join(`
`),x.length>0&&(x+=`
`)):(y=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),x=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?at.tonemapping_pars_fragment:"",t.toneMapping!==ss?pA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,hA("linearToOutputTexel",t.outputColorSpace),mA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($a).join(`
`)),u=Vh(u),u=e0(u,t),u=t0(u,t),c=Vh(c),c=e0(c,t),c=t0(c,t),u=n0(u),c=n0(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=D+y+u,w=D+x+c,U=Zg(s,s.VERTEX_SHADER,b),N=Zg(s,s.FRAGMENT_SHADER,w);s.attachShader(M,U),s.attachShader(M,N),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function L(z){if(o.debug.checkShaderErrors){const ee=s.getProgramInfoLog(M).trim(),j=s.getShaderInfoLog(U).trim(),oe=s.getShaderInfoLog(N).trim();let ue=!0,ne=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ue=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,U,N);else{const re=Jg(s,U,"vertex"),B=Jg(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ee+`
`+re+`
`+B)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(j===""||oe==="")&&(ne=!1);ne&&(z.diagnostics={runnable:ue,programLog:ee,vertexShader:{log:j,prefix:y},fragmentShader:{log:oe,prefix:x}})}s.deleteShader(U),s.deleteShader(N),O=new tc(s,M),A=vA(s,M)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,uA)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=N,this}let bA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new LA(e),t.set(e,i)),i}}class LA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function UA(o,e,t,i,s,a,u){const c=new Mv,d=new DA,h=new Set,p=[],_=s.logarithmicDepthBuffer,g=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return h.add(A),A===0?"uv":`uv${A}`}function y(A,C,z,ee,j){const oe=ee.fog,ue=j.geometry,ne=A.isMeshStandardMaterial?ee.environment:null,re=(A.isMeshStandardMaterial?t:e).get(A.envMap||ne),B=re&&re.mapping===mc?re.image.height:null,ce=E[A.type];A.precision!==null&&(S=s.getMaxPrecision(A.precision),S!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const ae=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,k=ae!==void 0?ae.length:0;let Q=0;ue.morphAttributes.position!==void 0&&(Q=1),ue.morphAttributes.normal!==void 0&&(Q=2),ue.morphAttributes.color!==void 0&&(Q=3);let De,$,fe,Me;if(ce){const xt=Yi[ce];De=xt.vertexShader,$=xt.fragmentShader}else De=A.vertexShader,$=A.fragmentShader,d.update(A),fe=d.getVertexShaderID(A),Me=d.getFragmentShaderID(A);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ne=j.isInstancedMesh===!0,Qe=j.isBatchedMesh===!0,Rt=!!A.map,pt=!!A.matcap,Nt=!!re,H=!!A.aoMap,bn=!!A.lightMap,dt=!!A.bumpMap,ut=!!A.normalMap,je=!!A.displacementMap,At=!!A.emissiveMap,Xe=!!A.metalnessMap,I=!!A.roughnessMap,R=A.anisotropy>0,Z=A.clearcoat>0,pe=A.dispersion>0,_e=A.iridescence>0,de=A.sheen>0,Ge=A.transmission>0,we=R&&!!A.anisotropyMap,Fe=Z&&!!A.clearcoatMap,lt=Z&&!!A.clearcoatNormalMap,Se=Z&&!!A.clearcoatRoughnessMap,ze=_e&&!!A.iridescenceMap,$e=_e&&!!A.iridescenceThicknessMap,Je=de&&!!A.sheenColorMap,Be=de&&!!A.sheenRoughnessMap,ct=!!A.specularMap,it=!!A.specularColorMap,wt=!!A.specularIntensityMap,X=Ge&&!!A.transmissionMap,Ae=Ge&&!!A.thicknessMap,le=!!A.gradientMap,he=!!A.alphaMap,be=A.alphaTest>0,Pe=!!A.alphaHash,rt=!!A.extensions;let Ot=ss;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ot=o.toneMapping);const on={shaderID:ce,shaderType:A.type,shaderName:A.name,vertexShader:De,fragmentShader:$,defines:A.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&j._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&j.instanceColor!==null,instancingMorph:Ne&&j.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ra,alphaToCoverage:!!A.alphaToCoverage,map:Rt,matcap:pt,envMap:Nt,envMapMode:Nt&&re.mapping,envMapCubeUVHeight:B,aoMap:H,lightMap:bn,bumpMap:dt,normalMap:ut,displacementMap:g&&je,emissiveMap:At,normalMapObjectSpace:ut&&A.normalMapType===UM,normalMapTangentSpace:ut&&A.normalMapType===LM,metalnessMap:Xe,roughnessMap:I,anisotropy:R,anisotropyMap:we,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:lt,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:_e,iridescenceMap:ze,iridescenceThicknessMap:$e,sheen:de,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:ct,specularColorMap:it,specularIntensityMap:wt,transmission:Ge,transmissionMap:X,thicknessMap:Ae,gradientMap:le,opaque:A.transparent===!1&&A.blending===Xo&&A.alphaToCoverage===!1,alphaMap:he,alphaTest:be,alphaHash:Pe,combine:A.combine,mapUv:Rt&&M(A.map.channel),aoMapUv:H&&M(A.aoMap.channel),lightMapUv:bn&&M(A.lightMap.channel),bumpMapUv:dt&&M(A.bumpMap.channel),normalMapUv:ut&&M(A.normalMap.channel),displacementMapUv:je&&M(A.displacementMap.channel),emissiveMapUv:At&&M(A.emissiveMap.channel),metalnessMapUv:Xe&&M(A.metalnessMap.channel),roughnessMapUv:I&&M(A.roughnessMap.channel),anisotropyMapUv:we&&M(A.anisotropyMap.channel),clearcoatMapUv:Fe&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:lt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(A.sheenRoughnessMap.channel),specularMapUv:ct&&M(A.specularMap.channel),specularColorMapUv:it&&M(A.specularColorMap.channel),specularIntensityMapUv:wt&&M(A.specularIntensityMap.channel),transmissionMapUv:X&&M(A.transmissionMap.channel),thicknessMapUv:Ae&&M(A.thicknessMap.channel),alphaMapUv:he&&M(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ut||R),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ue.attributes.uv&&(Rt||he),fog:!!oe,useFog:A.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Rt&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===bt,decodeVideoTextureEmissive:At&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===mr,flipSided:A.side===Kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:rt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&A.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return on.vertexUv1s=h.has(1),on.vertexUv2s=h.has(2),on.vertexUv3s=h.has(3),h.clear(),on}function x(A){const C=[];if(A.shaderID?C.push(A.shaderID):(C.push(A.customVertexShaderID),C.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)C.push(z),C.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(D(C,A),b(C,A),C.push(o.outputColorSpace)),C.push(A.customProgramCacheKey),C.join()}function D(A,C){A.push(C.precision),A.push(C.outputColorSpace),A.push(C.envMapMode),A.push(C.envMapCubeUVHeight),A.push(C.mapUv),A.push(C.alphaMapUv),A.push(C.lightMapUv),A.push(C.aoMapUv),A.push(C.bumpMapUv),A.push(C.normalMapUv),A.push(C.displacementMapUv),A.push(C.emissiveMapUv),A.push(C.metalnessMapUv),A.push(C.roughnessMapUv),A.push(C.anisotropyMapUv),A.push(C.clearcoatMapUv),A.push(C.clearcoatNormalMapUv),A.push(C.clearcoatRoughnessMapUv),A.push(C.iridescenceMapUv),A.push(C.iridescenceThicknessMapUv),A.push(C.sheenColorMapUv),A.push(C.sheenRoughnessMapUv),A.push(C.specularMapUv),A.push(C.specularColorMapUv),A.push(C.specularIntensityMapUv),A.push(C.transmissionMapUv),A.push(C.thicknessMapUv),A.push(C.combine),A.push(C.fogExp2),A.push(C.sizeAttenuation),A.push(C.morphTargetsCount),A.push(C.morphAttributeCount),A.push(C.numDirLights),A.push(C.numPointLights),A.push(C.numSpotLights),A.push(C.numSpotLightMaps),A.push(C.numHemiLights),A.push(C.numRectAreaLights),A.push(C.numDirLightShadows),A.push(C.numPointLightShadows),A.push(C.numSpotLightShadows),A.push(C.numSpotLightShadowsWithMaps),A.push(C.numLightProbes),A.push(C.shadowMapType),A.push(C.toneMapping),A.push(C.numClippingPlanes),A.push(C.numClipIntersection),A.push(C.depthPacking)}function b(A,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),A.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),A.push(c.mask)}function w(A){const C=E[A.type];let z;if(C){const ee=Yi[C];z=uE.clone(ee.uniforms)}else z=A.uniforms;return z}function U(A,C){let z;for(let ee=0,j=p.length;ee<j;ee++){const oe=p[ee];if(oe.cacheKey===C){z=oe,++z.usedTimes;break}}return z===void 0&&(z=new PA(o,C,A,a),p.push(z)),z}function N(A){if(--A.usedTimes===0){const C=p.indexOf(A);p[C]=p[p.length-1],p.pop(),A.destroy()}}function L(A){d.remove(A)}function O(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:w,acquireProgram:U,releaseProgram:N,releaseShaderCache:L,programs:p,dispose:O}}function IA(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function i(u){o.delete(u)}function s(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function NA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function r0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function s0(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function u(_,g,S,E,M,y){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:g,material:S,groupOrder:E,renderOrder:_.renderOrder,z:M,group:y},o[e]=x):(x.id=_.id,x.object=_,x.geometry=g,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=M,x.group=y),e++,x}function c(_,g,S,E,M,y){const x=u(_,g,S,E,M,y);S.transmission>0?i.push(x):S.transparent===!0?s.push(x):t.push(x)}function d(_,g,S,E,M,y){const x=u(_,g,S,E,M,y);S.transmission>0?i.unshift(x):S.transparent===!0?s.unshift(x):t.unshift(x)}function h(_,g){t.length>1&&t.sort(_||NA),i.length>1&&i.sort(g||r0),s.length>1&&s.sort(g||r0)}function p(){for(let _=e,g=o.length;_<g;_++){const S=o[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:d,finish:p,sort:h}}function FA(){let o=new WeakMap;function e(i,s){const a=o.get(i);let u;return a===void 0?(u=new s0,o.set(i,[u])):s>=a.length?(u=new s0,a.push(u)):u=a[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function OA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Ct};break;case"SpotLight":t={position:new se,direction:new se,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new se,halfWidth:new se,halfHeight:new se};break}return o[e.id]=t,t}}}function kA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let zA=0;function BA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function VA(o){const e=new OA,t=kA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new se);const s=new se,a=new tn,u=new tn;function c(h){let p=0,_=0,g=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let S=0,E=0,M=0,y=0,x=0,D=0,b=0,w=0,U=0,N=0,L=0;h.sort(BA);for(let A=0,C=h.length;A<C;A++){const z=h[A],ee=z.color,j=z.intensity,oe=z.distance,ue=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=ee.r*j,_+=ee.g*j,g+=ee.b*j;else if(z.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(z.sh.coefficients[ne],j);L++}else if(z.isDirectionalLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const re=z.shadow,B=t.get(z);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,i.directionalShadow[S]=B,i.directionalShadowMap[S]=ue,i.directionalShadowMatrix[S]=z.shadow.matrix,D++}i.directional[S]=ne,S++}else if(z.isSpotLight){const ne=e.get(z);ne.position.setFromMatrixPosition(z.matrixWorld),ne.color.copy(ee).multiplyScalar(j),ne.distance=oe,ne.coneCos=Math.cos(z.angle),ne.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ne.decay=z.decay,i.spot[M]=ne;const re=z.shadow;if(z.map&&(i.spotLightMap[U]=z.map,U++,re.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[M]=re.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=ue,w++}M++}else if(z.isRectAreaLight){const ne=e.get(z);ne.color.copy(ee).multiplyScalar(j),ne.halfWidth.set(z.width*.5,0,0),ne.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=ne,y++}else if(z.isPointLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),ne.distance=z.distance,ne.decay=z.decay,z.castShadow){const re=z.shadow,B=t.get(z);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,B.shadowCameraNear=re.camera.near,B.shadowCameraFar=re.camera.far,i.pointShadow[E]=B,i.pointShadowMap[E]=ue,i.pointShadowMatrix[E]=z.shadow.matrix,b++}i.point[E]=ne,E++}else if(z.isHemisphereLight){const ne=e.get(z);ne.skyColor.copy(z.color).multiplyScalar(j),ne.groundColor.copy(z.groundColor).multiplyScalar(j),i.hemi[x]=ne,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==S||O.pointLength!==E||O.spotLength!==M||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==D||O.numPointShadows!==b||O.numSpotShadows!==w||O.numSpotMaps!==U||O.numLightProbes!==L)&&(i.directional.length=S,i.spot.length=M,i.rectArea.length=y,i.point.length=E,i.hemi.length=x,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+U-N,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=L,O.directionalLength=S,O.pointLength=E,O.spotLength=M,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=D,O.numPointShadows=b,O.numSpotShadows=w,O.numSpotMaps=U,O.numLightProbes=L,i.version=zA++)}function d(h,p){let _=0,g=0,S=0,E=0,M=0;const y=p.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const b=h[x];if(b.isDirectionalLight){const w=i.directional[_];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),_++}else if(b.isSpotLight){const w=i.spot[S];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const w=i.rectArea[E];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(y),u.identity(),a.copy(b.matrixWorld),a.premultiply(y),u.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(b.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(y),g++}else if(b.isHemisphereLight){const w=i.hemi[M];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(y),M++}}}return{setup:c,setupView:d,state:i}}function o0(o){const e=new VA(o),t=[],i=[];function s(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function u(p){i.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function HA(o){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new o0(o),e.set(s,[c])):a>=u.length?(c=new o0(o),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WA=`uniform sampler2D shadow_pass;
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
}`;function XA(o,e,t){let i=new bv;const s=new It,a=new It,u=new en,c=new vE({depthPacking:DM}),d=new xE,h={},p=t.maxTextureSize,_={[us]:Kn,[Kn]:us,[mr]:mr},g=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:GA,fragmentShader:WA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Tr;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new vr(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rv;let x=this.type;this.render=function(N,L,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const A=o.getRenderTarget(),C=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(rs),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const j=x!==dr&&this.type===dr,oe=x===dr&&this.type!==dr;for(let ue=0,ne=N.length;ue<ne;ue++){const re=N[ue],B=re.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ce=B.getFrameExtents();if(s.multiply(ce),a.copy(B.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ce.x),s.x=a.x*ce.x,B.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ce.y),s.y=a.y*ce.y,B.mapSize.y=a.y)),B.map===null||j===!0||oe===!0){const k=this.type!==dr?{minFilter:ki,magFilter:ki}:{};B.map!==null&&B.map.dispose(),B.map=new Ks(s.x,s.y,k),B.map.texture.name=re.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const ae=B.getViewportCount();for(let k=0;k<ae;k++){const Q=B.getViewport(k);u.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),ee.viewport(u),B.updateMatrices(re,k),i=B.getFrustum(),w(L,O,B.camera,re,this.type)}B.isPointLightShadow!==!0&&this.type===dr&&D(B,O),B.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(A,C,z)};function D(N,L){const O=e.update(M);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ks(s.x,s.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(L,null,O,g,M,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(L,null,O,S,M,null)}function b(N,L,O,A){let C=null;const z=O.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)C=z;else if(C=O.isPointLight===!0?d:c,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ee=C.uuid,j=L.uuid;let oe=h[ee];oe===void 0&&(oe={},h[ee]=oe);let ue=oe[j];ue===void 0&&(ue=C.clone(),oe[j]=ue,L.addEventListener("dispose",U)),C=ue}if(C.visible=L.visible,C.wireframe=L.wireframe,A===dr?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:_[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ee=o.properties.get(C);ee.light=O}return C}function w(N,L,O,A,C){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===dr)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,N.matrixWorld);const j=e.update(N),oe=N.material;if(Array.isArray(oe)){const ue=j.groups;for(let ne=0,re=ue.length;ne<re;ne++){const B=ue[ne],ce=oe[B.materialIndex];if(ce&&ce.visible){const ae=b(N,ce,A,C);N.onBeforeShadow(o,N,L,O,j,ae,B),o.renderBufferDirect(O,null,j,ae,N,B),N.onAfterShadow(o,N,L,O,j,ae,B)}}}else if(oe.visible){const ue=b(N,oe,A,C);N.onBeforeShadow(o,N,L,O,j,ue,null),o.renderBufferDirect(O,null,j,ue,N,null),N.onAfterShadow(o,N,L,O,j,ue,null)}}const ee=N.children;for(let j=0,oe=ee.length;j<oe;j++)w(ee[j],L,O,A,C)}function U(N){N.target.removeEventListener("dispose",U);for(const O in h){const A=h[O],C=N.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}const YA={[nh]:ih,[rh]:ah,[sh]:lh,[Jo]:oh,[ih]:nh,[ah]:rh,[lh]:sh,[oh]:Jo};function jA(o,e){function t(){let X=!1;const Ae=new en;let le=null;const he=new en(0,0,0,0);return{setMask:function(be){le!==be&&!X&&(o.colorMask(be,be,be,be),le=be)},setLocked:function(be){X=be},setClear:function(be,Pe,rt,Ot,on){on===!0&&(be*=Ot,Pe*=Ot,rt*=Ot),Ae.set(be,Pe,rt,Ot),he.equals(Ae)===!1&&(o.clearColor(be,Pe,rt,Ot),he.copy(Ae))},reset:function(){X=!1,le=null,he.set(-1,0,0,0)}}}function i(){let X=!1,Ae=!1,le=null,he=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const rt=e.get("EXT_clip_control");Ae?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ot=be;be=null,this.setClear(Ot)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){le!==Pe&&!X&&(o.depthMask(Pe),le=Pe)},setFunc:function(Pe){if(Ae&&(Pe=YA[Pe]),he!==Pe){switch(Pe){case nh:o.depthFunc(o.NEVER);break;case ih:o.depthFunc(o.ALWAYS);break;case rh:o.depthFunc(o.LESS);break;case Jo:o.depthFunc(o.LEQUAL);break;case sh:o.depthFunc(o.EQUAL);break;case oh:o.depthFunc(o.GEQUAL);break;case ah:o.depthFunc(o.GREATER);break;case lh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}he=Pe}},setLocked:function(Pe){X=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),be=Pe)},reset:function(){X=!1,le=null,he=null,be=null,Ae=!1}}}function s(){let X=!1,Ae=null,le=null,he=null,be=null,Pe=null,rt=null,Ot=null,on=null;return{setTest:function(xt){X||(xt?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(xt){Ae!==xt&&!X&&(o.stencilMask(xt),Ae=xt)},setFunc:function(xt,On,Dn){(le!==xt||he!==On||be!==Dn)&&(o.stencilFunc(xt,On,Dn),le=xt,he=On,be=Dn)},setOp:function(xt,On,Dn){(Pe!==xt||rt!==On||Ot!==Dn)&&(o.stencilOp(xt,On,Dn),Pe=xt,rt=On,Ot=Dn)},setLocked:function(xt){X=xt},setClear:function(xt){on!==xt&&(o.clearStencil(xt),on=xt)},reset:function(){X=!1,Ae=null,le=null,he=null,be=null,Pe=null,rt=null,Ot=null,on=null}}}const a=new t,u=new i,c=new s,d=new WeakMap,h=new WeakMap;let p={},_={},g=new WeakMap,S=[],E=null,M=!1,y=null,x=null,D=null,b=null,w=null,U=null,N=null,L=new Ct(0,0,0),O=0,A=!1,C=null,z=null,ee=null,j=null,oe=null;const ue=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,re=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(B)[1]),ne=re>=1):B.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ne=re>=2);let ce=null,ae={};const k=o.getParameter(o.SCISSOR_BOX),Q=o.getParameter(o.VIEWPORT),De=new en().fromArray(k),$=new en().fromArray(Q);function fe(X,Ae,le,he){const be=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(X,Pe),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<le;rt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,he,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ae+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return Pe}const Me={};Me[o.TEXTURE_2D]=fe(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ve(o.DEPTH_TEST),u.setFunc(Jo),dt(!1),ut(cg),ve(o.CULL_FACE),H(rs);function ve(X){p[X]!==!0&&(o.enable(X),p[X]=!0)}function Te(X){p[X]!==!1&&(o.disable(X),p[X]=!1)}function Ne(X,Ae){return _[X]!==Ae?(o.bindFramebuffer(X,Ae),_[X]=Ae,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ae),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Qe(X,Ae){let le=S,he=!1;if(X){le=g.get(Ae),le===void 0&&(le=[],g.set(Ae,le));const be=X.textures;if(le.length!==be.length||le[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,rt=be.length;Pe<rt;Pe++)le[Pe]=o.COLOR_ATTACHMENT0+Pe;le.length=be.length,he=!0}}else le[0]!==o.BACK&&(le[0]=o.BACK,he=!0);he&&o.drawBuffers(le)}function Rt(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const pt={[zs]:o.FUNC_ADD,[iM]:o.FUNC_SUBTRACT,[rM]:o.FUNC_REVERSE_SUBTRACT};pt[sM]=o.MIN,pt[oM]=o.MAX;const Nt={[aM]:o.ZERO,[lM]:o.ONE,[uM]:o.SRC_COLOR,[eh]:o.SRC_ALPHA,[mM]:o.SRC_ALPHA_SATURATE,[hM]:o.DST_COLOR,[fM]:o.DST_ALPHA,[cM]:o.ONE_MINUS_SRC_COLOR,[th]:o.ONE_MINUS_SRC_ALPHA,[pM]:o.ONE_MINUS_DST_COLOR,[dM]:o.ONE_MINUS_DST_ALPHA,[_M]:o.CONSTANT_COLOR,[gM]:o.ONE_MINUS_CONSTANT_COLOR,[vM]:o.CONSTANT_ALPHA,[xM]:o.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ae,le,he,be,Pe,rt,Ot,on,xt){if(X===rs){M===!0&&(Te(o.BLEND),M=!1);return}if(M===!1&&(ve(o.BLEND),M=!0),X!==nM){if(X!==y||xt!==A){if((x!==zs||w!==zs)&&(o.blendEquation(o.FUNC_ADD),x=zs,w=zs),xt)switch(X){case Xo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fg:o.blendFunc(o.ONE,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Xo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}D=null,b=null,U=null,N=null,L.set(0,0,0),O=0,y=X,A=xt}return}be=be||Ae,Pe=Pe||le,rt=rt||he,(Ae!==x||be!==w)&&(o.blendEquationSeparate(pt[Ae],pt[be]),x=Ae,w=be),(le!==D||he!==b||Pe!==U||rt!==N)&&(o.blendFuncSeparate(Nt[le],Nt[he],Nt[Pe],Nt[rt]),D=le,b=he,U=Pe,N=rt),(Ot.equals(L)===!1||on!==O)&&(o.blendColor(Ot.r,Ot.g,Ot.b,on),L.copy(Ot),O=on),y=X,A=!1}function bn(X,Ae){X.side===mr?Te(o.CULL_FACE):ve(o.CULL_FACE);let le=X.side===Kn;Ae&&(le=!le),dt(le),X.blending===Xo&&X.transparent===!1?H(rs):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),a.setMask(X.colorWrite);const he=X.stencilWrite;c.setTest(he),he&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),At(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function ut(X){X!==JS?(ve(o.CULL_FACE),X!==z&&(X===cg?o.cullFace(o.BACK):X===eM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=X}function je(X){X!==ee&&(ne&&o.lineWidth(X),ee=X)}function At(X,Ae,le){X?(ve(o.POLYGON_OFFSET_FILL),(j!==Ae||oe!==le)&&(o.polygonOffset(Ae,le),j=Ae,oe=le)):Te(o.POLYGON_OFFSET_FILL)}function Xe(X){X?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function I(X){X===void 0&&(X=o.TEXTURE0+ue-1),ce!==X&&(o.activeTexture(X),ce=X)}function R(X,Ae,le){le===void 0&&(ce===null?le=o.TEXTURE0+ue-1:le=ce);let he=ae[le];he===void 0&&(he={type:void 0,texture:void 0},ae[le]=he),(he.type!==X||he.texture!==Ae)&&(ce!==le&&(o.activeTexture(le),ce=le),o.bindTexture(X,Ae||Me[X]),he.type=X,he.texture=Ae)}function Z(){const X=ae[ce];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function lt(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(X){De.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),De.copy(X))}function Be(X){$.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),$.copy(X))}function ct(X,Ae){let le=h.get(Ae);le===void 0&&(le=new WeakMap,h.set(Ae,le));let he=le.get(X);he===void 0&&(he=o.getUniformBlockIndex(Ae,X.name),le.set(X,he))}function it(X,Ae){const he=h.get(Ae).get(X);d.get(Ae)!==he&&(o.uniformBlockBinding(Ae,he,X.__bindingPointIndex),d.set(Ae,he))}function wt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},ce=null,ae={},_={},g=new WeakMap,S=[],E=null,M=!1,y=null,x=null,D=null,b=null,w=null,U=null,N=null,L=new Ct(0,0,0),O=0,A=!1,C=null,z=null,ee=null,j=null,oe=null,De.set(0,0,o.canvas.width,o.canvas.height),$.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ve,disable:Te,bindFramebuffer:Ne,drawBuffers:Qe,useProgram:Rt,setBlending:H,setMaterial:bn,setFlipSided:dt,setCullFace:ut,setLineWidth:je,setPolygonOffset:At,setScissorTest:Xe,activeTexture:I,bindTexture:R,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:ze,texImage3D:$e,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Se,texSubImage2D:de,texSubImage3D:Ge,compressedTexSubImage2D:we,compressedTexSubImage3D:Fe,scissor:Je,viewport:Be,reset:wt}}function qA(o,e,t,i,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,p=new WeakMap;let _;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,R){return S?new OffscreenCanvas(I,R):fc("canvas")}function M(I,R,Z){let pe=1;const _e=Xe(I);if((_e.width>Z||_e.height>Z)&&(pe=Z/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const de=Math.floor(pe*_e.width),Ge=Math.floor(pe*_e.height);_===void 0&&(_=E(de,Ge));const we=R?E(de,Ge):_;return we.width=de,we.height=Ge,we.getContext("2d").drawImage(I,0,0,de,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Ge+")."),we}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){o.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function b(I,R,Z,pe,_e=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de=R;if(R===o.RED&&(Z===o.FLOAT&&(de=o.R32F),Z===o.HALF_FLOAT&&(de=o.R16F),Z===o.UNSIGNED_BYTE&&(de=o.R8)),R===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.R8UI),Z===o.UNSIGNED_SHORT&&(de=o.R16UI),Z===o.UNSIGNED_INT&&(de=o.R32UI),Z===o.BYTE&&(de=o.R8I),Z===o.SHORT&&(de=o.R16I),Z===o.INT&&(de=o.R32I)),R===o.RG&&(Z===o.FLOAT&&(de=o.RG32F),Z===o.HALF_FLOAT&&(de=o.RG16F),Z===o.UNSIGNED_BYTE&&(de=o.RG8)),R===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.RG8UI),Z===o.UNSIGNED_SHORT&&(de=o.RG16UI),Z===o.UNSIGNED_INT&&(de=o.RG32UI),Z===o.BYTE&&(de=o.RG8I),Z===o.SHORT&&(de=o.RG16I),Z===o.INT&&(de=o.RG32I)),R===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(de=o.RGB16UI),Z===o.UNSIGNED_INT&&(de=o.RGB32UI),Z===o.BYTE&&(de=o.RGB8I),Z===o.SHORT&&(de=o.RGB16I),Z===o.INT&&(de=o.RGB32I)),R===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),Z===o.UNSIGNED_INT&&(de=o.RGBA32UI),Z===o.BYTE&&(de=o.RGBA8I),Z===o.SHORT&&(de=o.RGBA16I),Z===o.INT&&(de=o.RGBA32I)),R===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),R===o.RGBA){const Ge=_e?uc:Tt.getTransfer(pe);Z===o.FLOAT&&(de=o.RGBA32F),Z===o.HALF_FLOAT&&(de=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(de=Ge===bt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function w(I,R){let Z;return I?R===null||R===$s||R===na?Z=o.DEPTH24_STENCIL8:R===_r?Z=o.DEPTH32F_STENCIL8:R===al&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===$s||R===na?Z=o.DEPTH_COMPONENT24:R===_r?Z=o.DEPTH_COMPONENT32F:R===al&&(Z=o.DEPTH_COMPONENT16),Z}function U(I,R){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==ki&&I.minFilter!==$i?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function N(I){const R=I.target;R.removeEventListener("dispose",N),O(R),R.isVideoTexture&&p.delete(R)}function L(I){const R=I.target;R.removeEventListener("dispose",L),C(R)}function O(I){const R=i.get(I);if(R.__webglInit===void 0)return;const Z=I.source,pe=g.get(Z);if(pe){const _e=pe[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&A(I),Object.keys(pe).length===0&&g.delete(Z)}i.remove(I)}function A(I){const R=i.get(I);o.deleteTexture(R.__webglTexture);const Z=I.source,pe=g.get(Z);delete pe[R.__cacheKey],u.memory.textures--}function C(I){const R=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(R.__webglFramebuffer[pe]))for(let _e=0;_e<R.__webglFramebuffer[pe].length;_e++)o.deleteFramebuffer(R.__webglFramebuffer[pe][_e]);else o.deleteFramebuffer(R.__webglFramebuffer[pe]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[pe])}else{if(Array.isArray(R.__webglFramebuffer))for(let pe=0;pe<R.__webglFramebuffer.length;pe++)o.deleteFramebuffer(R.__webglFramebuffer[pe]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pe=0;pe<R.__webglColorRenderbuffer.length;pe++)R.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[pe]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=I.textures;for(let pe=0,_e=Z.length;pe<_e;pe++){const de=i.get(Z[pe]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),u.memory.textures--),i.remove(Z[pe])}i.remove(I)}let z=0;function ee(){z=0}function j(){const I=z;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),z+=1,I}function oe(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function ue(I,R){const Z=i.get(I);if(I.isVideoTexture&&je(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){const pe=I.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(Z,I,R);return}}t.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+R)}function ne(I,R){const Z=i.get(I);if(I.version>0&&Z.__version!==I.version){$(Z,I,R);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+R)}function re(I,R){const Z=i.get(I);if(I.version>0&&Z.__version!==I.version){$(Z,I,R);return}t.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+R)}function B(I,R){const Z=i.get(I);if(I.version>0&&Z.__version!==I.version){fe(Z,I,R);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+R)}const ce={[fh]:o.REPEAT,[Hs]:o.CLAMP_TO_EDGE,[dh]:o.MIRRORED_REPEAT},ae={[ki]:o.NEAREST,[PM]:o.NEAREST_MIPMAP_NEAREST,[Eu]:o.NEAREST_MIPMAP_LINEAR,[$i]:o.LINEAR,[cd]:o.LINEAR_MIPMAP_NEAREST,[Gs]:o.LINEAR_MIPMAP_LINEAR},k={[IM]:o.NEVER,[BM]:o.ALWAYS,[NM]:o.LESS,[gv]:o.LEQUAL,[FM]:o.EQUAL,[zM]:o.GEQUAL,[OM]:o.GREATER,[kM]:o.NOTEQUAL};function Q(I,R){if(R.type===_r&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===$i||R.magFilter===cd||R.magFilter===Eu||R.magFilter===Gs||R.minFilter===$i||R.minFilter===cd||R.minFilter===Eu||R.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,ce[R.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,ce[R.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,ce[R.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,ae[R.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,ae[R.minFilter]),R.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,k[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ki||R.minFilter!==Eu&&R.minFilter!==Gs||R.type===_r&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function De(I,R){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",N));const pe=R.source;let _e=g.get(pe);_e===void 0&&(_e={},g.set(pe,_e));const de=oe(R);if(de!==I.__cacheKey){_e[de]===void 0&&(_e[de]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),_e[de].usedTimes++;const Ge=_e[I.__cacheKey];Ge!==void 0&&(_e[I.__cacheKey].usedTimes--,Ge.usedTimes===0&&A(R)),I.__cacheKey=de,I.__webglTexture=_e[de].texture}return Z}function $(I,R,Z){let pe=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pe=o.TEXTURE_3D);const _e=De(I,R),de=R.source;t.bindTexture(pe,I.__webglTexture,o.TEXTURE0+Z);const Ge=i.get(de);if(de.version!==Ge.__version||_e===!0){t.activeTexture(o.TEXTURE0+Z);const we=Tt.getPrimaries(Tt.workingColorSpace),Fe=R.colorSpace===Qr?null:Tt.getPrimaries(R.colorSpace),lt=R.colorSpace===Qr||we===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=M(R.image,!1,s.maxTextureSize);Se=At(R,Se);const ze=a.convert(R.format,R.colorSpace),$e=a.convert(R.type);let Je=b(R.internalFormat,ze,$e,R.colorSpace,R.isVideoTexture);Q(pe,R);let Be;const ct=R.mipmaps,it=R.isVideoTexture!==!0,wt=Ge.__version===void 0||_e===!0,X=de.dataReady,Ae=U(R,Se);if(R.isDepthTexture)Je=w(R.format===ia,R.type),wt&&(it?t.texStorage2D(o.TEXTURE_2D,1,Je,Se.width,Se.height):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,ze,$e,null));else if(R.isDataTexture)if(ct.length>0){it&&wt&&t.texStorage2D(o.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let le=0,he=ct.length;le<he;le++)Be=ct[le],it?X&&t.texSubImage2D(o.TEXTURE_2D,le,0,0,Be.width,Be.height,ze,$e,Be.data):t.texImage2D(o.TEXTURE_2D,le,Je,Be.width,Be.height,0,ze,$e,Be.data);R.generateMipmaps=!1}else it?(wt&&t.texStorage2D(o.TEXTURE_2D,Ae,Je,Se.width,Se.height),X&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,ze,$e,Se.data)):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,ze,$e,Se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){it&&wt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,ct[0].width,ct[0].height,Se.depth);for(let le=0,he=ct.length;le<he;le++)if(Be=ct[le],R.format!==Oi)if(ze!==null)if(it){if(X)if(R.layerUpdates.size>0){const be=Fg(Be.width,Be.height,R.format,R.type);for(const Pe of R.layerUpdates){const rt=Be.data.subarray(Pe*be/Be.data.BYTES_PER_ELEMENT,(Pe+1)*be/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,Pe,Be.width,Be.height,1,ze,rt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Se.depth,ze,Be.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,le,Je,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Se.depth,ze,$e,Be.data):t.texImage3D(o.TEXTURE_2D_ARRAY,le,Je,Be.width,Be.height,Se.depth,0,ze,$e,Be.data)}else{it&&wt&&t.texStorage2D(o.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let le=0,he=ct.length;le<he;le++)Be=ct[le],R.format!==Oi?ze!==null?it?X&&t.compressedTexSubImage2D(o.TEXTURE_2D,le,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(o.TEXTURE_2D,le,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(o.TEXTURE_2D,le,0,0,Be.width,Be.height,ze,$e,Be.data):t.texImage2D(o.TEXTURE_2D,le,Je,Be.width,Be.height,0,ze,$e,Be.data)}else if(R.isDataArrayTexture)if(it){if(wt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,Se.width,Se.height,Se.depth),X)if(R.layerUpdates.size>0){const le=Fg(Se.width,Se.height,R.format,R.type);for(const he of R.layerUpdates){const be=Se.data.subarray(he*le/Se.data.BYTES_PER_ELEMENT,(he+1)*le/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,ze,$e,be)}R.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ze,$e,Se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,ze,$e,Se.data);else if(R.isData3DTexture)it?(wt&&t.texStorage3D(o.TEXTURE_3D,Ae,Je,Se.width,Se.height,Se.depth),X&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ze,$e,Se.data)):t.texImage3D(o.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,ze,$e,Se.data);else if(R.isFramebufferTexture){if(wt)if(it)t.texStorage2D(o.TEXTURE_2D,Ae,Je,Se.width,Se.height);else{let le=Se.width,he=Se.height;for(let be=0;be<Ae;be++)t.texImage2D(o.TEXTURE_2D,be,Je,le,he,0,ze,$e,null),le>>=1,he>>=1}}else if(ct.length>0){if(it&&wt){const le=Xe(ct[0]);t.texStorage2D(o.TEXTURE_2D,Ae,Je,le.width,le.height)}for(let le=0,he=ct.length;le<he;le++)Be=ct[le],it?X&&t.texSubImage2D(o.TEXTURE_2D,le,0,0,ze,$e,Be):t.texImage2D(o.TEXTURE_2D,le,Je,ze,$e,Be);R.generateMipmaps=!1}else if(it){if(wt){const le=Xe(Se);t.texStorage2D(o.TEXTURE_2D,Ae,Je,le.width,le.height)}X&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ze,$e,Se)}else t.texImage2D(o.TEXTURE_2D,0,Je,ze,$e,Se);y(R)&&x(pe),Ge.__version=de.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function fe(I,R,Z){if(R.image.length!==6)return;const pe=De(I,R),_e=R.source;t.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+Z);const de=i.get(_e);if(_e.version!==de.__version||pe===!0){t.activeTexture(o.TEXTURE0+Z);const Ge=Tt.getPrimaries(Tt.workingColorSpace),we=R.colorSpace===Qr?null:Tt.getPrimaries(R.colorSpace),Fe=R.colorSpace===Qr||Ge===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const lt=R.isCompressedTexture||R.image[0].isCompressedTexture,Se=R.image[0]&&R.image[0].isDataTexture,ze=[];for(let he=0;he<6;he++)!lt&&!Se?ze[he]=M(R.image[he],!0,s.maxCubemapSize):ze[he]=Se?R.image[he].image:R.image[he],ze[he]=At(R,ze[he]);const $e=ze[0],Je=a.convert(R.format,R.colorSpace),Be=a.convert(R.type),ct=b(R.internalFormat,Je,Be,R.colorSpace),it=R.isVideoTexture!==!0,wt=de.__version===void 0||pe===!0,X=_e.dataReady;let Ae=U(R,$e);Q(o.TEXTURE_CUBE_MAP,R);let le;if(lt){it&&wt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,$e.width,$e.height);for(let he=0;he<6;he++){le=ze[he].mipmaps;for(let be=0;be<le.length;be++){const Pe=le[be];R.format!==Oi?Je!==null?it?X&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Pe.width,Pe.height,Je,Pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Pe.width,Pe.height,Je,Be,Pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,ct,Pe.width,Pe.height,0,Je,Be,Pe.data)}}}else{if(le=R.mipmaps,it&&wt){le.length>0&&Ae++;const he=Xe(ze[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,he.width,he.height)}for(let he=0;he<6;he++)if(Se){it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze[he].width,ze[he].height,Je,Be,ze[he].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,ze[he].width,ze[he].height,0,Je,Be,ze[he].data);for(let be=0;be<le.length;be++){const rt=le[be].image[he].image;it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,rt.width,rt.height,Je,Be,rt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,ct,rt.width,rt.height,0,Je,Be,rt.data)}}else{it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Be,ze[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Je,Be,ze[he]);for(let be=0;be<le.length;be++){const Pe=le[be];it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,Je,Be,Pe.image[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,ct,Je,Be,Pe.image[he])}}}y(R)&&x(o.TEXTURE_CUBE_MAP),de.__version=_e.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function Me(I,R,Z,pe,_e,de){const Ge=a.convert(Z.format,Z.colorSpace),we=a.convert(Z.type),Fe=b(Z.internalFormat,Ge,we,Z.colorSpace),lt=i.get(R),Se=i.get(Z);if(Se.__renderTarget=R,!lt.__hasExternalTextures){const ze=Math.max(1,R.width>>de),$e=Math.max(1,R.height>>de);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,de,Fe,ze,$e,R.depth,0,Ge,we,null):t.texImage2D(_e,de,Fe,ze,$e,0,Ge,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,I),ut(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,_e,Se.__webglTexture,0,dt(R)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,_e,Se.__webglTexture,de),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(I,R,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,I),R.depthBuffer){const pe=R.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,de=w(R.stencilBuffer,_e),Ge=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=dt(R);ut(R)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,de,R.width,R.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,de,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,de,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ge,o.RENDERBUFFER,I)}else{const pe=R.textures;for(let _e=0;_e<pe.length;_e++){const de=pe[_e],Ge=a.convert(de.format,de.colorSpace),we=a.convert(de.type),Fe=b(de.internalFormat,Ge,we,de.colorSpace),lt=dt(R);Z&&ut(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,Fe,R.width,R.height):ut(R)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,lt,Fe,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(R.depthTexture);pe.__renderTarget=R,(!pe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ue(R.depthTexture,0);const _e=pe.__webglTexture,de=dt(R);if(R.depthTexture.format===Yo)ut(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(R.depthTexture.format===ia)ut(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(I){const R=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const pe=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pe){const _e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),R.__depthDisposeCallback=_e}R.__boundDepthTexture=pe}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(R.__webglFramebuffer,I)}else if(Z){R.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[pe]),R.__webglDepthbuffer[pe]===void 0)R.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(R.__webglDepthbuffer[pe],I,!1);else{const _e=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,de)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),ve(R.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,_e)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(I,R,Z){const pe=i.get(I);R!==void 0&&Me(pe.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Ne(I)}function Rt(I){const R=I.texture,Z=i.get(I),pe=i.get(R);I.addEventListener("dispose",L);const _e=I.textures,de=I.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=R.version,u.memory.textures++),de){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let Fe=0;Fe<R.mipmaps.length;Fe++)Z.__webglFramebuffer[we][Fe]=o.createFramebuffer()}else Z.__webglFramebuffer[we]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<R.mipmaps.length;we++)Z.__webglFramebuffer[we]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Ge)for(let we=0,Fe=_e.length;we<Fe;we++){const lt=i.get(_e[we]);lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture(),u.memory.textures++)}if(I.samples>0&&ut(I)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<_e.length;we++){const Fe=_e[we];Z.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);const lt=a.convert(Fe.format,Fe.colorSpace),Se=a.convert(Fe.type),ze=b(Fe.internalFormat,lt,Se,Fe.colorSpace,I.isXRRenderTarget===!0),$e=dt(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,$e,ze,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),Q(o.TEXTURE_CUBE_MAP,R);for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0)for(let Fe=0;Fe<R.mipmaps.length;Fe++)Me(Z.__webglFramebuffer[we][Fe],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Fe);else Me(Z.__webglFramebuffer[we],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(R)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let we=0,Fe=_e.length;we<Fe;we++){const lt=_e[we],Se=i.get(lt);t.bindTexture(o.TEXTURE_2D,Se.__webglTexture),Q(o.TEXTURE_2D,lt),Me(Z.__webglFramebuffer,I,lt,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),y(lt)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),Q(we,R),R.mipmaps&&R.mipmaps.length>0)for(let Fe=0;Fe<R.mipmaps.length;Fe++)Me(Z.__webglFramebuffer[Fe],I,R,o.COLOR_ATTACHMENT0,we,Fe);else Me(Z.__webglFramebuffer,I,R,o.COLOR_ATTACHMENT0,we,0);y(R)&&x(we),t.unbindTexture()}I.depthBuffer&&Ne(I)}function pt(I){const R=I.textures;for(let Z=0,pe=R.length;Z<pe;Z++){const _e=R[Z];if(y(_e)){const de=D(I),Ge=i.get(_e).__webglTexture;t.bindTexture(de,Ge),x(de),t.unbindTexture()}}}const Nt=[],H=[];function bn(I){if(I.samples>0){if(ut(I)===!1){const R=I.textures,Z=I.width,pe=I.height;let _e=o.COLOR_BUFFER_BIT;const de=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ge=i.get(I),we=R.length>1;if(we)for(let Fe=0;Fe<R.length;Fe++)t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<R.length;Fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const lt=i.get(R[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,lt,0)}o.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,_e,o.NEAREST),d===!0&&(Nt.length=0,H.length=0,Nt.push(o.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Nt.push(de),H.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,H)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Fe=0;Fe<R.length;Fe++){t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const lt=i.get(R[Fe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,lt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const R=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function dt(I){return Math.min(s.maxSamples,I.samples)}function ut(I){const R=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function je(I){const R=u.render.frame;p.get(I)!==R&&(p.set(I,R),I.update())}function At(I,R){const Z=I.colorSpace,pe=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==ra&&Z!==Qr&&(Tt.getTransfer(Z)===bt?(pe!==Oi||_e!==Mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function Xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=ee,this.setTexture2D=ue,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=B,this.rebindTextures=Qe,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function $A(o,e){function t(i,s=Qr){let a;const u=Tt.getTransfer(s);if(i===Mr)return o.UNSIGNED_BYTE;if(i===up)return o.UNSIGNED_SHORT_4_4_4_4;if(i===cp)return o.UNSIGNED_SHORT_5_5_5_1;if(i===uv)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===av)return o.BYTE;if(i===lv)return o.SHORT;if(i===al)return o.UNSIGNED_SHORT;if(i===lp)return o.INT;if(i===$s)return o.UNSIGNED_INT;if(i===_r)return o.FLOAT;if(i===ul)return o.HALF_FLOAT;if(i===cv)return o.ALPHA;if(i===fv)return o.RGB;if(i===Oi)return o.RGBA;if(i===dv)return o.LUMINANCE;if(i===hv)return o.LUMINANCE_ALPHA;if(i===Yo)return o.DEPTH_COMPONENT;if(i===ia)return o.DEPTH_STENCIL;if(i===pv)return o.RED;if(i===fp)return o.RED_INTEGER;if(i===mv)return o.RG;if(i===dp)return o.RG_INTEGER;if(i===hp)return o.RGBA_INTEGER;if(i===Ku||i===Zu||i===Qu||i===Ju)if(u===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ku)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ku)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ju)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===ph||i===mh||i===_h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===hh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gh||i===vh||i===xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===gh||i===vh)return u===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===xh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===Rh||i===Ph||i===bh||i===Dh||i===Lh||i===Uh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===yh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Th)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ah)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ch)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===Ih||i===Nh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ec)return u===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ih)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_v||i===Fh||i===Oh||i===kh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ec)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const KA={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,i),x=this._getHandJoint(h,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=p.position.distanceTo(_.position),S=.02,E=.005;h.inputState.pinching&&g>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QA=`
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

}`;class JA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Zn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cs({vertexShader:ZA,fragmentShader:QA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vr(new gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eC extends aa{constructor(e,t){super();const i=this;let s=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,_=null,g=null,S=null,E=null;const M=new JA,y=t.getContextAttributes();let x=null,D=null;const b=[],w=[],U=new It;let N=null;const L=new Mi;L.viewport=new en;const O=new Mi;O.viewport=new en;const A=[L,O],C=new SE;let z=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=b[$];return fe===void 0&&(fe=new zd,b[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=b[$];return fe===void 0&&(fe=new zd,b[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=b[$];return fe===void 0&&(fe=new zd,b[$]=fe),fe.getHandSpace()};function j($){const fe=w.indexOf($.inputSource);if(fe===-1)return;const Me=b[fe];Me!==void 0&&(Me.update($.inputSource,$.frame,h||u),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function oe(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",ue);for(let $=0;$<b.length;$++){const fe=w[$];fe!==null&&(w[$]=null,b[$].disconnect(fe))}z=null,ee=null,M.reset(),e.setRenderTarget(x),S=null,g=null,_=null,s=null,D=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Ks(S.framebufferWidth,S.framebufferHeight,{format:Oi,type:Mr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let fe=null,Me=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?ia:Yo,Me=y.stencil?na:$s);const Te={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};_=new XRWebGLBinding(s,t),g=_.createProjectionLayer(Te),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new Ks(g.textureWidth,g.textureHeight,{format:Oi,type:Mr,depthTexture:new Lv(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ue($){for(let fe=0;fe<$.removed.length;fe++){const Me=$.removed[fe],ve=w.indexOf(Me);ve>=0&&(w[ve]=null,b[ve].disconnect(Me))}for(let fe=0;fe<$.added.length;fe++){const Me=$.added[fe];let ve=w.indexOf(Me);if(ve===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=w.length){w.push(Me),ve=Ne;break}else if(w[Ne]===null){w[Ne]=Me,ve=Ne;break}if(ve===-1)break}const Te=b[ve];Te&&Te.connect(Me)}}const ne=new se,re=new se;function B($,fe,Me){ne.setFromMatrixPosition(fe.matrixWorld),re.setFromMatrixPosition(Me.matrixWorld);const ve=ne.distanceTo(re),Te=fe.projectionMatrix.elements,Ne=Me.projectionMatrix.elements,Qe=Te[14]/(Te[10]-1),Rt=Te[14]/(Te[10]+1),pt=(Te[9]+1)/Te[5],Nt=(Te[9]-1)/Te[5],H=(Te[8]-1)/Te[0],bn=(Ne[8]+1)/Ne[0],dt=Qe*H,ut=Qe*bn,je=ve/(-H+bn),At=je*-H;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(At),$.translateZ(je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xe=Qe+je,I=Rt+je,R=dt-At,Z=ut+(ve-At),pe=pt*Rt/I*Xe,_e=Nt*Rt/I*Xe;$.projectionMatrix.makePerspective(R,Z,pe,_e,Xe,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let fe=$.near,Me=$.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),C.near=O.near=L.near=fe,C.far=O.far=L.far=Me,(z!==C.near||ee!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,ee=C.far),L.layers.mask=$.layers.mask|2,O.layers.mask=$.layers.mask|4,C.layers.mask=L.layers.mask|O.layers.mask;const ve=$.parent,Te=C.cameras;ce(C,ve);for(let Ne=0;Ne<Te.length;Ne++)ce(Te[Ne],ve);Te.length===2?B(C,L,O):C.projectionMatrix.copy(L.projectionMatrix),ae($,C,ve)};function ae($,fe,Me){Me===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=zh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function($){d=$,g!==null&&(g.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let k=null;function Q($,fe){if(p=fe.getViewerPose(h||u),E=fe,p!==null){const Me=p.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let ve=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let Ne=0;Ne<Me.length;Ne++){const Qe=Me[Ne];let Rt=null;if(S!==null)Rt=S.getViewport(Qe);else{const Nt=_.getViewSubImage(g,Qe);Rt=Nt.viewport,Ne===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,g.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(D))}let pt=A[Ne];pt===void 0&&(pt=new Mi,pt.layers.enable(Ne),pt.viewport=new en,A[Ne]=pt),pt.matrix.fromArray(Qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ne===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(pt)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ne=_.getDepthInformation(Me[0]);Ne&&Ne.isValid&&Ne.texture&&M.init(e,Ne,s.renderState)}}for(let Me=0;Me<b.length;Me++){const ve=w[Me],Te=b[Me];ve!==null&&Te!==void 0&&Te.update(ve,fe,h||u)}k&&k($,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),E=null}const De=new Uv;De.setAnimationLoop(Q),this.setAnimationLoop=function($){k=$},this.dispose=function(){}}}const Ns=new Er,tC=new tn;function nC(o,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function i(y,x){x.color.getRGB(y.fogColor.value,Cv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,D,b,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),_(y,x)):x.isMeshPhongMaterial?(a(y,x),p(y,x)):x.isMeshStandardMaterial?(a(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,w)):x.isMeshMatcapMaterial?(a(y,x),E(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),M(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?d(y,x,D,b):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),b=D.envMap,w=D.envMapRotation;b&&(y.envMap.value=b,Ns.copy(w),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),y.envMapRotation.value.setFromMatrix4(tC.makeRotationFromEuler(Ns)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,D,b){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=b*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iC(o,e,t,i){let s={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,b){const w=b.program;i.uniformBlockBinding(D,w)}function h(D,b){let w=s[D.id];w===void 0&&(E(D),w=p(D),s[D.id]=w,D.addEventListener("dispose",y));const U=b.program;i.updateUBOMapping(D,U);const N=e.render.frame;a[D.id]!==N&&(g(D),a[D.id]=N)}function p(D){const b=_();D.__bindingPointIndex=b;const w=o.createBuffer(),U=D.__size,N=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,U,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,b,w),w}function _(){for(let D=0;D<c;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const b=s[D.id],w=D.uniforms,U=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,b);for(let N=0,L=w.length;N<L;N++){const O=Array.isArray(w[N])?w[N]:[w[N]];for(let A=0,C=O.length;A<C;A++){const z=O[A];if(S(z,N,A,U)===!0){const ee=z.__offset,j=Array.isArray(z.value)?z.value:[z.value];let oe=0;for(let ue=0;ue<j.length;ue++){const ne=j[ue],re=M(ne);typeof ne=="number"||typeof ne=="boolean"?(z.__data[0]=ne,o.bufferSubData(o.UNIFORM_BUFFER,ee+oe,z.__data)):ne.isMatrix3?(z.__data[0]=ne.elements[0],z.__data[1]=ne.elements[1],z.__data[2]=ne.elements[2],z.__data[3]=0,z.__data[4]=ne.elements[3],z.__data[5]=ne.elements[4],z.__data[6]=ne.elements[5],z.__data[7]=0,z.__data[8]=ne.elements[6],z.__data[9]=ne.elements[7],z.__data[10]=ne.elements[8],z.__data[11]=0):(ne.toArray(z.__data,oe),oe+=re.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(D,b,w,U){const N=D.value,L=b+"_"+w;if(U[L]===void 0)return typeof N=="number"||typeof N=="boolean"?U[L]=N:U[L]=N.clone(),!0;{const O=U[L];if(typeof N=="number"||typeof N=="boolean"){if(O!==N)return U[L]=N,!0}else if(O.equals(N)===!1)return O.copy(N),!0}return!1}function E(D){const b=D.uniforms;let w=0;const U=16;for(let L=0,O=b.length;L<O;L++){const A=Array.isArray(b[L])?b[L]:[b[L]];for(let C=0,z=A.length;C<z;C++){const ee=A[C],j=Array.isArray(ee.value)?ee.value:[ee.value];for(let oe=0,ue=j.length;oe<ue;oe++){const ne=j[oe],re=M(ne),B=w%U,ce=B%re.boundary,ae=B+ce;w+=ce,ae!==0&&U-ae<re.storage&&(w+=U-ae),ee.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=w,w+=re.storage}}}const N=w%U;return N>0&&(w+=U-N),D.__size=w,D.__cache={},this}function M(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function y(D){const b=D.target;b.removeEventListener("dispose",y);const w=u.indexOf(b.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function x(){for(const D in s)o.deleteBuffer(s[D]);u=[],s={},a={}}return{bind:d,update:h,dispose:x}}class rC{constructor(e={}){const{canvas:t=HM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const D=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this.toneMapping=ss,this.toneMappingExposure=1;const w=this;let U=!1,N=0,L=0,O=null,A=-1,C=null;const z=new en,ee=new en;let j=null;const oe=new Ct(0);let ue=0,ne=t.width,re=t.height,B=1,ce=null,ae=null;const k=new en(0,0,ne,re),Q=new en(0,0,ne,re);let De=!1;const $=new bv;let fe=!1,Me=!1;const ve=new tn,Te=new tn,Ne=new se,Qe=new en,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Nt(){return O===null?B:1}let H=i;function bn(P,Y){return t.getContext(P,Y)}try{const P={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ap}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const Y="webgl2";if(H=bn(Y,P),H===null)throw bn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let dt,ut,je,At,Xe,I,R,Z,pe,_e,de,Ge,we,Fe,lt,Se,ze,$e,Je,Be,ct,it,wt,X;function Ae(){dt=new hw(H),dt.init(),it=new $A(H,dt),ut=new aw(H,dt,e,it),je=new jA(H,dt),ut.reverseDepthBuffer&&g&&je.buffers.depth.setReversed(!0),At=new _w(H),Xe=new IA,I=new qA(H,dt,je,Xe,ut,it,At),R=new uw(w),Z=new dw(w),pe=new EE(H),wt=new sw(H,pe),_e=new pw(H,pe,At,wt),de=new vw(H,_e,pe,At),Je=new gw(H,ut,I),Se=new lw(Xe),Ge=new UA(w,R,Z,dt,ut,wt,Se),we=new nC(w,Xe),Fe=new FA,lt=new HA(dt),$e=new rw(w,R,Z,je,de,S,d),ze=new XA(w,de,ut),X=new iC(H,At,ut,je),Be=new ow(H,dt,At),ct=new mw(H,dt,At),At.programs=Ge.programs,w.capabilities=ut,w.extensions=dt,w.properties=Xe,w.renderLists=Fe,w.shadowMap=ze,w.state=je,w.info=At}Ae();const le=new eC(w,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=dt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=dt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(ne,re,!1))},this.getSize=function(P){return P.set(ne,re)},this.setSize=function(P,Y,te=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=P,re=Y,t.width=Math.floor(P*B),t.height=Math.floor(Y*B),te===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(ne*B,re*B).floor()},this.setDrawingBufferSize=function(P,Y,te){ne=P,re=Y,B=te,t.width=Math.floor(P*te),t.height=Math.floor(Y*te),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(z)},this.getViewport=function(P){return P.copy(k)},this.setViewport=function(P,Y,te,ie){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,Y,te,ie),je.viewport(z.copy(k).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(Q)},this.setScissor=function(P,Y,te,ie){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,Y,te,ie),je.scissor(ee.copy(Q).multiplyScalar(B).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(P){je.setScissorTest(De=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(P=!0,Y=!0,te=!0){let ie=0;if(P){let G=!1;if(O!==null){const ye=O.texture.format;G=ye===hp||ye===dp||ye===fp}if(G){const ye=O.texture.type,Ce=ye===Mr||ye===$s||ye===al||ye===na||ye===up||ye===cp,Ie=$e.getClearColor(),Oe=$e.getClearAlpha(),et=Ie.r,tt=Ie.g,Ye=Ie.b;Ce?(E[0]=et,E[1]=tt,E[2]=Ye,E[3]=Oe,H.clearBufferuiv(H.COLOR,0,E)):(M[0]=et,M[1]=tt,M[2]=Ye,M[3]=Oe,H.clearBufferiv(H.COLOR,0,M))}else ie|=H.COLOR_BUFFER_BIT}Y&&(ie|=H.DEPTH_BUFFER_BIT),te&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),$e.dispose(),Fe.dispose(),lt.dispose(),Xe.dispose(),R.dispose(),Z.dispose(),de.dispose(),wt.dispose(),X.dispose(),Ge.dispose(),le.dispose(),le.removeEventListener("sessionstart",Qs),le.removeEventListener("sessionend",wr),Zi.stop()};function he(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const P=At.autoReset,Y=ze.enabled,te=ze.autoUpdate,ie=ze.needsUpdate,G=ze.type;Ae(),At.autoReset=P,ze.enabled=Y,ze.autoUpdate=te,ze.needsUpdate=ie,ze.type=G}function Pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function rt(P){const Y=P.target;Y.removeEventListener("dispose",rt),Ot(Y)}function Ot(P){on(P),Xe.remove(P)}function on(P){const Y=Xe.get(P).programs;Y!==void 0&&(Y.forEach(function(te){Ge.releaseProgram(te)}),P.isShaderMaterial&&Ge.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,te,ie,G,ye){Y===null&&(Y=Rt);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,Ie=gl(P,Y,te,ie,G);je.setMaterial(ie,Ce);let Oe=te.index,et=1;if(ie.wireframe===!0){if(Oe=_e.getWireframeAttribute(te),Oe===void 0)return;et=2}const tt=te.drawRange,Ye=te.attributes.position;let st=tt.start*et,St=(tt.start+tt.count)*et;ye!==null&&(st=Math.max(st,ye.start*et),St=Math.min(St,(ye.start+ye.count)*et)),Oe!==null?(st=Math.max(st,0),St=Math.min(St,Oe.count)):Ye!=null&&(st=Math.max(st,0),St=Math.min(St,Ye.count));const Mt=St-st;if(Mt<0||Mt===1/0)return;wt.setup(G,ie,Ie,te,Oe);let Bt,vt=Be;if(Oe!==null&&(Bt=pe.get(Oe),vt=ct,vt.setIndex(Bt)),G.isMesh)ie.wireframe===!0?(je.setLineWidth(ie.wireframeLinewidth*Nt()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(G.isLine){let qe=ie.linewidth;qe===void 0&&(qe=1),je.setLineWidth(qe*Nt()),G.isLineSegments?vt.setMode(H.LINES):G.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else G.isPoints?vt.setMode(H.POINTS):G.isSprite&&vt.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)vt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qe=G._multiDrawStarts,qt=G._multiDrawCounts,mt=G._multiDrawCount,_n=Oe?pe.get(Oe).bytesPerElement:1,wi=Xe.get(ie).currentProgram.getUniforms();for(let Ln=0;Ln<mt;Ln++)wi.setValue(H,"_gl_DrawID",Ln),vt.render(qe[Ln]/_n,qt[Ln])}else if(G.isInstancedMesh)vt.renderInstances(st,Mt,G.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,qt=Math.min(te.instanceCount,qe);vt.renderInstances(st,Mt,qt)}else vt.render(st,Mt)};function xt(P,Y,te){P.transparent===!0&&P.side===mr&&P.forceSinglePass===!1?(P.side=Kn,P.needsUpdate=!0,Js(P,Y,te),P.side=us,P.needsUpdate=!0,Js(P,Y,te),P.side=mr):Js(P,Y,te)}this.compile=function(P,Y,te=null){te===null&&(te=P),x=lt.get(te),x.init(Y),b.push(x),te.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),P!==te&&P.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const ie=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const Ie=ye[Ce];xt(Ie,te,G),ie.add(Ie)}else xt(ye,te,G),ie.add(ye)}),b.pop(),x=null,ie},this.compileAsync=function(P,Y,te=null){const ie=this.compile(P,Y,te);return new Promise(G=>{function ye(){if(ie.forEach(function(Ce){Xe.get(Ce).currentProgram.isReady()&&ie.delete(Ce)}),ie.size===0){G(P);return}setTimeout(ye,10)}dt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let On=null;function Dn(P){On&&On(P)}function Qs(){Zi.stop()}function wr(){Zi.start()}const Zi=new Uv;Zi.setAnimationLoop(Dn),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(P){On=P,le.setAnimationLoop(P),P===null?Zi.stop():Zi.start()},le.addEventListener("sessionstart",Qs),le.addEventListener("sessionend",wr),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(Y),Y=le.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,Y,O),x=lt.get(P,b.length),x.init(Y),b.push(x),Te.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),$.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,Me),y=Fe.get(P,D.length),y.init(),D.push(y),le.enabled===!0&&le.isPresenting===!0){const ye=w.xr.getDepthSensingMesh();ye!==null&&Qi(ye,Y,-1/0,w.sortObjects)}Qi(P,Y,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(ce,ae),pt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,pt&&$e.addToRenderList(y,P),this.info.render.frame++,fe===!0&&Se.beginShadows();const te=x.state.shadowsArray;ze.render(te,P,Y),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,G=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const ye=Y.cameras;if(G.length>0)for(let Ce=0,Ie=ye.length;Ce<Ie;Ce++){const Oe=ye[Ce];hs(ie,G,P,Oe)}pt&&$e.render(P);for(let Ce=0,Ie=ye.length;Ce<Ie;Ce++){const Oe=ye[Ce];ds(y,P,Oe,Oe.viewport)}}else G.length>0&&hs(ie,G,P,Y),pt&&$e.render(P),ds(y,P,Y);O!==null&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O)),P.isScene===!0&&P.onAfterRender(w,P,Y),wt.resetDefaultState(),A=-1,C=null,b.pop(),b.length>0?(x=b[b.length-1],fe===!0&&Se.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Qi(P,Y,te,ie){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||$.intersectsSprite(P)){ie&&Qe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Te);const Ce=de.update(P),Ie=P.material;Ie.visible&&y.push(P,Ce,Ie,te,Qe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||$.intersectsObject(P))){const Ce=de.update(P),Ie=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Qe.copy(P.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Qe.copy(Ce.boundingSphere.center)),Qe.applyMatrix4(P.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const Oe=Ce.groups;for(let et=0,tt=Oe.length;et<tt;et++){const Ye=Oe[et],st=Ie[Ye.materialIndex];st&&st.visible&&y.push(P,Ce,st,te,Qe.z,Ye)}}else Ie.visible&&y.push(P,Ce,Ie,te,Qe.z,null)}}const ye=P.children;for(let Ce=0,Ie=ye.length;Ce<Ie;Ce++)Qi(ye[Ce],Y,te,ie)}function ds(P,Y,te,ie){const G=P.opaque,ye=P.transmissive,Ce=P.transparent;x.setupLightsView(te),fe===!0&&Se.setGlobalState(w.clippingPlanes,te),ie&&je.viewport(z.copy(ie)),G.length>0&&Ar(G,Y,te),ye.length>0&&Ar(ye,Y,te),Ce.length>0&&Ar(Ce,Y,te),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function hs(P,Y,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ie.id]===void 0&&(x.state.transmissionRenderTarget[ie.id]=new Ks(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?ul:Mr,minFilter:Gs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const ye=x.state.transmissionRenderTarget[ie.id],Ce=ie.viewport||z;ye.setSize(Ce.z,Ce.w);const Ie=w.getRenderTarget();w.setRenderTarget(ye),w.getClearColor(oe),ue=w.getClearAlpha(),ue<1&&w.setClearColor(16777215,.5),w.clear(),pt&&$e.render(te);const Oe=w.toneMapping;w.toneMapping=ss;const et=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),x.setupLightsView(ie),fe===!0&&Se.setGlobalState(w.clippingPlanes,ie),Ar(P,te,ie),I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye),dt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ye=0,st=Y.length;Ye<st;Ye++){const St=Y[Ye],Mt=St.object,Bt=St.geometry,vt=St.material,qe=St.group;if(vt.side===mr&&Mt.layers.test(ie.layers)){const qt=vt.side;vt.side=Kn,vt.needsUpdate=!0,ml(Mt,te,ie,Bt,vt,qe),vt.side=qt,vt.needsUpdate=!0,tt=!0}}tt===!0&&(I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye))}w.setRenderTarget(Ie),w.setClearColor(oe,ue),et!==void 0&&(ie.viewport=et),w.toneMapping=Oe}function Ar(P,Y,te){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,ye=P.length;G<ye;G++){const Ce=P[G],Ie=Ce.object,Oe=Ce.geometry,et=ie===null?Ce.material:ie,tt=Ce.group;Ie.layers.test(te.layers)&&ml(Ie,Y,te,Oe,et,tt)}}function ml(P,Y,te,ie,G,ye){P.onBeforeRender(w,Y,te,ie,G,ye),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(w,Y,te,ie,P,ye),G.transparent===!0&&G.side===mr&&G.forceSinglePass===!1?(G.side=Kn,G.needsUpdate=!0,w.renderBufferDirect(te,Y,ie,G,P,ye),G.side=us,G.needsUpdate=!0,w.renderBufferDirect(te,Y,ie,G,P,ye),G.side=mr):w.renderBufferDirect(te,Y,ie,G,P,ye),P.onAfterRender(w,Y,te,ie,G,ye)}function Js(P,Y,te){Y.isScene!==!0&&(Y=Rt);const ie=Xe.get(P),G=x.state.lights,ye=x.state.shadowsArray,Ce=G.state.version,Ie=Ge.getParameters(P,G.state,ye,Y,te),Oe=Ge.getProgramCacheKey(Ie);let et=ie.programs;ie.environment=P.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(P.isMeshStandardMaterial?Z:R).get(P.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,et===void 0&&(P.addEventListener("dispose",rt),et=new Map,ie.programs=et);let tt=et.get(Oe);if(tt!==void 0){if(ie.currentProgram===tt&&ie.lightsStateVersion===Ce)return Bi(P,Ie),tt}else Ie.uniforms=Ge.getUniforms(P),P.onBeforeCompile(Ie,w),tt=Ge.acquireProgram(Ie,Oe),et.set(Oe,tt),ie.uniforms=Ie.uniforms;const Ye=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ye.clippingPlanes=Se.uniform),Bi(P,Ie),ie.needsLights=xc(P),ie.lightsStateVersion=Ce,ie.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),ie.currentProgram=tt,ie.uniformsList=null,tt}function _l(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=tc.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Bi(P,Y){const te=Xe.get(P);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function gl(P,Y,te,ie,G){Y.isScene!==!0&&(Y=Rt),I.resetTextureUnits();const ye=Y.fog,Ce=ie.isMeshStandardMaterial?Y.environment:null,Ie=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ra,Oe=(ie.isMeshStandardMaterial?Z:R).get(ie.envMap||Ce),et=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,tt=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ye=!!te.morphAttributes.position,st=!!te.morphAttributes.normal,St=!!te.morphAttributes.color;let Mt=ss;ie.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Mt=w.toneMapping);const Bt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,vt=Bt!==void 0?Bt.length:0,qe=Xe.get(ie),qt=x.state.lights;if(fe===!0&&(Me===!0||P!==C)){const Zt=P===C&&ie.id===A;Se.setState(ie,P,Zt)}let mt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==qt.state.version||qe.outputColorSpace!==Ie||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isBatchedMesh&&qe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&qe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&qe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&qe.instancingMorph===!1&&G.morphTexture!==null||qe.envMap!==Oe||ie.fog===!0&&qe.fog!==ye||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==tt||qe.morphTargets!==Ye||qe.morphNormals!==st||qe.morphColors!==St||qe.toneMapping!==Mt||qe.morphTargetsCount!==vt)&&(mt=!0):(mt=!0,qe.__version=ie.version);let _n=qe.currentProgram;mt===!0&&(_n=Js(ie,Y,G));let wi=!1,Ln=!1,ps=!1;const Pt=_n.getUniforms(),Un=qe.uniforms;if(je.useProgram(_n.program)&&(wi=!0,Ln=!0,ps=!0),ie.id!==A&&(A=ie.id,Ln=!0),wi||C!==P){je.buffers.depth.getReversed()?(ve.copy(P.projectionMatrix),WM(ve),XM(ve),Pt.setValue(H,"projectionMatrix",ve)):Pt.setValue(H,"projectionMatrix",P.projectionMatrix),Pt.setValue(H,"viewMatrix",P.matrixWorldInverse);const Sn=Pt.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,Ne.setFromMatrixPosition(P.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,Ln=!0,ps=!0)}if(G.isSkinnedMesh){Pt.setOptional(H,G,"bindMatrix"),Pt.setOptional(H,G,"bindMatrixInverse");const Zt=G.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Pt.setValue(H,"boneTexture",Zt.boneTexture,I))}G.isBatchedMesh&&(Pt.setOptional(H,G,"batchingTexture"),Pt.setValue(H,"batchingTexture",G._matricesTexture,I),Pt.setOptional(H,G,"batchingIdTexture"),Pt.setValue(H,"batchingIdTexture",G._indirectTexture,I),Pt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Pt.setValue(H,"batchingColorTexture",G._colorsTexture,I));const yn=te.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Je.update(G,te,_n),(Ln||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,Pt.setValue(H,"receiveShadow",G.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Un.envMap.value=Oe,Un.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Y.environment!==null&&(Un.envMapIntensity.value=Y.environmentIntensity),Ln&&(Pt.setValue(H,"toneMappingExposure",w.toneMappingExposure),qe.needsLights&&vl(Un,ps),ye&&ie.fog===!0&&we.refreshFogUniforms(Un,ye),we.refreshMaterialUniforms(Un,ie,B,re,x.state.transmissionRenderTarget[P.id]),tc.upload(H,_l(qe),Un,I)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(tc.upload(H,_l(qe),Un,I),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(H,"center",G.center),Pt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(H,"normalMatrix",G.normalMatrix),Pt.setValue(H,"modelMatrix",G.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Zt=ie.uniformsGroups;for(let Sn=0,ms=Zt.length;Sn<ms;Sn++){const ht=Zt[Sn];X.update(ht,_n),X.bind(ht,_n)}}return _n}function vl(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function xc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,Y,te){Xe.get(P.texture).__webglTexture=Y,Xe.get(P.depthTexture).__webglTexture=te;const ie=Xe.get(P);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const te=Xe.get(P);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,te=0){O=P,N=Y,L=te;let ie=!0,G=null,ye=!1,Ce=!1;if(P){const Oe=Xe.get(P);if(Oe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(H.FRAMEBUFFER,null),ie=!1;else if(Oe.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Oe.__hasExternalTextures)I.rebindTextures(P,Xe.get(P.texture).__webglTexture,Xe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ye=P.depthTexture;if(Oe.__boundDepthTexture!==Ye){if(Ye!==null&&Xe.has(Ye)&&(P.width!==Ye.image.width||P.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const et=P.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ce=!0);const tt=Xe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(tt[Y])?G=tt[Y][te]:G=tt[Y],ye=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?G=Xe.get(P).__webglMultisampledFramebuffer:Array.isArray(tt)?G=tt[te]:G=tt,z.copy(P.viewport),ee.copy(P.scissor),j=P.scissorTest}else z.copy(k).multiplyScalar(B).floor(),ee.copy(Q).multiplyScalar(B).floor(),j=De;if(je.bindFramebuffer(H.FRAMEBUFFER,G)&&ie&&je.drawBuffers(P,G),je.viewport(z),je.scissor(ee),je.setScissorTest(j),ye){const Oe=Xe.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,te)}else if(Ce){const Oe=Xe.get(P.texture),et=Y||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.__webglTexture,te||0,et)}A=-1},this.readRenderTargetPixels=function(P,Y,te,ie,G,ye,Ce){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){je.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const Oe=P.texture,et=Oe.format,tt=Oe.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-ie&&te>=0&&te<=P.height-G&&H.readPixels(Y,te,ie,G,it.convert(et),it.convert(tt),ye)}finally{const Oe=O!==null?Xe.get(O).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(P,Y,te,ie,G,ye,Ce){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){const Oe=P.texture,et=Oe.format,tt=Oe.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-ie&&te>=0&&te<=P.height-G){je.bindFramebuffer(H.FRAMEBUFFER,Ie);const Ye=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ye),H.bufferData(H.PIXEL_PACK_BUFFER,ye.byteLength,H.STREAM_READ),H.readPixels(Y,te,ie,G,it.convert(et),it.convert(tt),0);const st=O!==null?Xe.get(O).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,st);const St=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await GM(H,St,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ye),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ye),H.deleteBuffer(Ye),H.deleteSync(St),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Y=null,te=0){P.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);const ie=Math.pow(2,-te),G=Math.floor(P.image.width*ie),ye=Math.floor(P.image.height*ie),Ce=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;I.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,Ce,Ie,G,ye),je.unbindTexture()};const xl=H.createFramebuffer(),yl=H.createFramebuffer();this.copyTextureToTexture=function(P,Y,te=null,ie=null,G=0,ye=null){P.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,P=arguments[1],Y=arguments[2],ye=arguments[3]||0,te=null),ye===null&&(G!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=G,G=0):ye=0);let Ce,Ie,Oe,et,tt,Ye,st,St,Mt;const Bt=P.isCompressedTexture?P.mipmaps[ye]:P.image;if(te!==null)Ce=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,et=te.min.x,tt=te.min.y,Ye=te.isBox3?te.min.z:0;else{const yn=Math.pow(2,-G);Ce=Math.floor(Bt.width*yn),Ie=Math.floor(Bt.height*yn),P.isDataArrayTexture?Oe=Bt.depth:P.isData3DTexture?Oe=Math.floor(Bt.depth*yn):Oe=1,et=0,tt=0,Ye=0}ie!==null?(st=ie.x,St=ie.y,Mt=ie.z):(st=0,St=0,Mt=0);const vt=it.convert(Y.format),qe=it.convert(Y.type);let qt;Y.isData3DTexture?(I.setTexture3D(Y,0),qt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),qt=H.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const mt=H.getParameter(H.UNPACK_ROW_LENGTH),_n=H.getParameter(H.UNPACK_IMAGE_HEIGHT),wi=H.getParameter(H.UNPACK_SKIP_PIXELS),Ln=H.getParameter(H.UNPACK_SKIP_ROWS),ps=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,et),H.pixelStorei(H.UNPACK_SKIP_ROWS,tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ye);const Pt=P.isDataArrayTexture||P.isData3DTexture,Un=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){const yn=Xe.get(P),Zt=Xe.get(Y),Sn=Xe.get(yn.__renderTarget),ms=Xe.get(Zt.__renderTarget);je.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let ht=0;ht<Oe;ht++)Pt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(P).__webglTexture,G,Ye+ht),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(Y).__webglTexture,ye,Mt+ht)),H.blitFramebuffer(et,tt,Ce,Ie,st,St,Ce,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||Xe.has(P)){const yn=Xe.get(P),Zt=Xe.get(Y);je.bindFramebuffer(H.READ_FRAMEBUFFER,xl),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,yl);for(let Sn=0;Sn<Oe;Sn++)Pt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,G,Ye+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,G),Un?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zt.__webglTexture,ye,Mt+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Zt.__webglTexture,ye),G!==0?H.blitFramebuffer(et,tt,Ce,Ie,st,St,Ce,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):Un?H.copyTexSubImage3D(qt,ye,st,St,Mt+Sn,et,tt,Ce,Ie):H.copyTexSubImage2D(qt,ye,st,St,et,tt,Ce,Ie);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Un?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(qt,ye,st,St,Mt,Ce,Ie,Oe,vt,qe,Bt.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,ye,st,St,Mt,Ce,Ie,Oe,vt,Bt.data):H.texSubImage3D(qt,ye,st,St,Mt,Ce,Ie,Oe,vt,qe,Bt):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ye,st,St,Ce,Ie,vt,qe,Bt.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ye,st,St,Bt.width,Bt.height,vt,Bt.data):H.texSubImage2D(H.TEXTURE_2D,ye,st,St,Ce,Ie,vt,qe,Bt);H.pixelStorei(H.UNPACK_ROW_LENGTH,mt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_n),H.pixelStorei(H.UNPACK_SKIP_PIXELS,wi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ln),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ps),ye===0&&Y.generateMipmaps&&H.generateMipmap(qt),je.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,te=null,ie=null,G=0){return P.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ie=arguments[1]||null,P=arguments[2],Y=arguments[3],G=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Y,te,ie,G)},this.initRenderTarget=function(P){Xe.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),je.unbindTexture()},this.resetState=function(){N=0,L=0,O=null,je.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function sC({mode:o,mouse:e}){const t=Lt.useRef(null),i=Lt.useRef(null),s=Lt.useRef(null),a=Lt.useRef(null),u=Lt.useRef(null),c=Lt.useRef(null);return Lt.useEffect(()=>{if(!t.current||!e)return;const d=t.current.getBoundingClientRect();if(!d.width||!d.height)return;const h=220/d.width,p=170/d.height,_=(e.x-d.left)*h,g=(e.y-d.top)*p,S=(E,M,y)=>{if(!E)return;const x=_-M,D=g-y,b=Math.atan2(D,x),w=Math.min(4.2,Math.hypot(x,D)*.055);Ni.to(E,{x:Math.cos(b)*w,y:Math.sin(b)*Math.min(5,w*1.15),duration:.16,ease:"power2.out",overwrite:!0})};S(i.current,78,82),S(s.current,142,82)},[e]),Lt.useEffect(()=>{const d=o==="password"||o==="busy";Ni.to(a.current,{attr:{transform:d?"translate(78 82)":"translate(76 132)"},duration:d?.34:.28,ease:"power2.inOut",overwrite:!0}),Ni.to(u.current,{attr:{transform:d?"translate(142 82)":"translate(144 132)"},duration:d?.34:.28,ease:"power2.inOut",overwrite:!0}),Ni.to(".cat-eyelid",{opacity:d?1:0,duration:d?.16:.18,overwrite:!0}),o==="username"?Ni.fromTo(c.current,{rotate:0,y:0},{rotate:-4,y:-3,duration:.28,yoyo:!0,repeat:1,transformOrigin:"center center",overwrite:!0}):Ni.to(c.current,{rotate:0,y:0,duration:.2,overwrite:!0})},[o]),Ue.jsxs("svg",{ref:t,className:"cat",viewBox:"0 0 220 170",role:"img","aria-label":"Animated cat mascot",children:[Ue.jsxs("g",{ref:c,children:[Ue.jsx("path",{d:"M45 55 L35 13 Q34 7 42 12 L79 35 Q110 24 141 35 L178 12 Q186 7 185 17 L176 58 Q192 82 183 111 Q171 145 110 148 Q48 145 37 111 Q28 82 45 55Z",fill:"#f8f8fc",stroke:"#e9e9f0",strokeWidth:"2"}),Ue.jsx("path",{d:"M49 43 L44 23 L70 39Z",fill:"#f2a7b7"}),Ue.jsx("path",{d:"M150 39 L177 22 L171 44Z",fill:"#f2a7b7"}),Ue.jsx("ellipse",{cx:"78",cy:"82",rx:"15",ry:"19",fill:"#242333"}),Ue.jsx("ellipse",{cx:"142",cy:"82",rx:"15",ry:"19",fill:"#242333"}),Ue.jsx("ellipse",{cx:"78",cy:"82",rx:"8",ry:"12",fill:"#fff"}),Ue.jsx("ellipse",{cx:"142",cy:"82",rx:"8",ry:"12",fill:"#fff"}),Ue.jsxs("g",{ref:i,children:[Ue.jsx("circle",{cx:"78",cy:"82",r:"4.5",fill:"#242333"}),Ue.jsx("circle",{cx:"79.5",cy:"80.5",r:"1.25",fill:"#fff"})]}),Ue.jsxs("g",{ref:s,children:[Ue.jsx("circle",{cx:"142",cy:"82",r:"4.5",fill:"#242333"}),Ue.jsx("circle",{cx:"143.5",cy:"80.5",r:"1.25",fill:"#fff"})]}),Ue.jsx("rect",{className:"cat-eyelid",x:"62",y:"63",width:"32",height:"38",rx:"16",fill:"#f8f8fc",opacity:"0"}),Ue.jsx("rect",{className:"cat-eyelid",x:"126",y:"63",width:"32",height:"38",rx:"16",fill:"#f8f8fc",opacity:"0"}),Ue.jsx("path",{d:"M103 103 Q110 97 117 103 L110 110Z",fill:"#e99aaf"}),Ue.jsx("path",{d:"M110 109 Q105 118 97 113 M110 109 Q115 118 123 113",fill:"none",stroke:"#393847",strokeWidth:"2.5",strokeLinecap:"round"}),Ue.jsx("path",{d:"M48 103 L18 98 M49 111 L20 115 M172 103 L202 98 M171 111 L200 115",stroke:"#b7b7c5",strokeWidth:"2",strokeLinecap:"round"})]}),Ue.jsxs("g",{ref:a,className:"cat-paw",transform:"translate(76 132)",children:[Ue.jsx("ellipse",{cx:"0",cy:"0",rx:"23",ry:"16",fill:"#f8f8fc",stroke:"#e9e9f0",strokeWidth:"2"}),Ue.jsx("path",{d:"M-7 3 Q0 8 7 3",fill:"none",stroke:"#d8d8e3",strokeWidth:"2"})]}),Ue.jsxs("g",{ref:u,className:"cat-paw",transform:"translate(144 132)",children:[Ue.jsx("ellipse",{cx:"0",cy:"0",rx:"23",ry:"16",fill:"#f8f8fc",stroke:"#e9e9f0",strokeWidth:"2"}),Ue.jsx("path",{d:"M-7 3 Q0 8 7 3",fill:"none",stroke:"#d8d8e3",strokeWidth:"2"})]})]})}function oC(){const o=Lt.useRef(null);return Lt.useEffect(()=>{Ni.fromTo(o.current,{scale:1.15,clipPath:"inset(0 0 0 0 round 0px)"},{scale:1,duration:1.25,ease:"power3.inOut",delay:.1}),Ni.fromTo(".cloud-mask",{scale:1.08},{scale:1,duration:1.4,ease:"power2.out"})},[]),Ue.jsxs("div",{ref:o,className:"green-bg",children:[Ue.jsx("div",{className:"speckles"}),Ue.jsxs("svg",{className:"cloud-mask",viewBox:"0 0 1440 700",preserveAspectRatio:"none",children:[Ue.jsx("path",{d:"M0 0H1440V145 C1380 110 1328 113 1280 132 C1232 75 1164 75 1118 95 C1065 37 1001 38 958 63 C908 3 838 1 794 28 C738 -5 674 0 635 29 C583 -5 518 0 475 28 C422 -7 359 0 316 28 C266 -5 201 0 162 31 C103 1 46 8 0 38Z",fill:"white"}),Ue.jsx("path",{d:"M0 575 C72 638 165 632 210 583 C257 652 361 655 418 593 C475 656 573 655 628 592 C682 655 781 656 837 592 C891 654 990 654 1047 592 C1100 653 1201 654 1258 592 C1310 648 1390 641 1440 596V700H0Z",fill:"white"})]})]})}function aC(){const o=Lt.useRef(null);return Lt.useEffect(()=>{const e=o.current;if(!e)return;const t=new pE,i=new Mi(55,1,.1,100);i.position.z=8;let s;try{s=new rC({alpha:!0,antialias:!0})}catch{return}s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),s.setSize(e.clientWidth,e.clientHeight),e.appendChild(s.domElement);const a=new Tr,u=90,c=new Float32Array(u*3);for(let g=0;g<u;g++)c[g*3]=(Math.random()-.5)*13,c[g*3+1]=(Math.random()-.5)*7,c[g*3+2]=(Math.random()-.5)*2;a.setAttribute("position",new zi(c,3));const d=new gE(a,new Dv({color:9235413,size:.025,transparent:!0,opacity:.8}));t.add(d);let h;const p=()=>{d.rotation.y+=7e-4,s.render(t,i),h=requestAnimationFrame(p)};p();const _=()=>{s.setSize(e.clientWidth,e.clientHeight)};return window.addEventListener("resize",_),()=>{cancelAnimationFrame(h),window.removeEventListener("resize",_),a.dispose(),s.dispose(),s.domElement.remove()}},[]),Ue.jsx("div",{className:"three-speckles",ref:o,"aria-hidden":"true"})}function lC(){const[o,e]=Lt.useState(""),[t,i]=Lt.useState(""),[s,a]=Lt.useState(!1),[u,c]=Lt.useState("idle"),[d,h]=Lt.useState(null),[p,_]=Lt.useState(!0),[g,S]=Lt.useState(!1),[E,M]=Lt.useState({x:window.innerWidth/2,y:window.innerHeight/2}),y=Lt.useRef(null);Lt.useEffect(()=>{const w=U=>{M({x:U.clientX,y:U.clientY})};return window.addEventListener("mousemove",w),Ni.fromTo(".login-panel",{y:20,opacity:0},{y:0,opacity:1,duration:.8,delay:.45,ease:"power3.out"}),()=>window.removeEventListener("mousemove",w)},[]);const x=w=>{if(w.preventDefault(),h(null),!o.trim()||!t){h({type:"error",text:"Please enter your username and password."});return}S(!0),c("busy"),Ni.to(".cat",{scale:1.04,duration:.2,yoyo:!0,repeat:1}),setTimeout(()=>{S(!1),c("idle"),h({type:"success",text:"Login complete! Welcome back."})},900)},D=()=>h({type:"info",text:o.trim()?`Password reset instructions are ready for ${o.trim()}.`:"Enter your username first, then choose Forgot password."}),b=()=>h({type:"info",text:"Sign-up is a demo action for this college project."});return Ue.jsxs("main",{className:"page",children:[Ue.jsx(oC,{}),Ue.jsx(aC,{}),Ue.jsxs("div",{className:"login-panel",children:[Ue.jsxs("section",{className:"mascot-side",children:[Ue.jsx("h1",{children:"Hello!"}),Ue.jsx("p",{className:"subline",children:"Log in to your account"}),Ue.jsx(sC,{mode:u,mouse:E}),Ue.jsx("div",{className:"mascot-caption",children:u==="password"?"Shhh… password time!":u==="username"?"Looking up at you!":"Your little login buddy"})]}),Ue.jsxs("section",{className:"form-side",children:[Ue.jsx("h2",{children:"Welcome Back!"}),Ue.jsx("p",{className:"intro",children:"Hey there, good to see you again. Enter your details below to continue where you left off."}),Ue.jsxs("form",{ref:y,onSubmit:x,children:[Ue.jsxs("label",{className:"field",children:[Ue.jsx(Uy,{size:15}),Ue.jsx("input",{"aria-label":"Username or email",autoComplete:"username",placeholder:"Username or email",value:o,onFocus:()=>c("username"),onChange:w=>{e(w.target.value),c("username"),h(null)}})]}),Ue.jsxs("label",{className:"field",children:[Ue.jsx(Ly,{size:15}),Ue.jsx("input",{"aria-label":"Password",autoComplete:"current-password",type:s?"text":"password",placeholder:"Password",value:t,onFocus:()=>c("password"),onChange:w=>{i(w.target.value),c("password"),h(null)}}),Ue.jsx("button",{className:"eye-button",type:"button",onClick:()=>a(w=>!w),"aria-label":s?"Hide password":"Show password",children:s?Ue.jsx(by,{size:15}):Ue.jsx(Dy,{size:15})})]}),Ue.jsxs("div",{className:"options",children:[Ue.jsxs("label",{className:"remember",children:[Ue.jsx("input",{type:"checkbox",checked:p,onChange:w=>_(w.target.checked)})," ",Ue.jsx("span",{children:"Remember me"})]}),Ue.jsx("button",{type:"button",className:"text-button",onClick:D,children:"Forgot password?"})]}),Ue.jsx("button",{className:"login-button",type:"submit",disabled:g,children:g?Ue.jsx("span",{className:"spinner"}):"LOG IN"}),d&&Ue.jsxs("div",{className:`notice ${d.type}`,role:"status",children:[d.type==="success"?Ue.jsx(Py,{size:14}):Ue.jsx(Ry,{size:14}),Ue.jsx("span",{children:d.text})]})]}),Ue.jsxs("p",{className:"signup",children:["Don’t have an account? ",Ue.jsx("button",{type:"button",onClick:b,children:"Sign up here"})]})]})]}),Ue.jsxs("div",{className:"copyright",children:["Made with care ",Ue.jsx("span",{children:"♥"})," · Cat Login Demo"]})]})}Ty.createRoot(document.getElementById("root")).render(Ue.jsx(lC,{}));
